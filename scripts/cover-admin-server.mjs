import { createServer } from "node:http";
import { readFile, writeFile, stat, readdir, mkdir } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 8010);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".ico", "image/x-icon"]
]);

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const rejectedPatterns = [
  "atlas",
  "texture",
  "sheet",
  "shared",
  "sprite",
  "font",
  "particle",
  "mask"
];
const preferredPatterns = [
  "cover",
  "splash",
  "banner",
  "hero",
  "poster",
  "thumb",
  "thumbnail",
  "preview",
  "icon",
  "logo",
  "loading",
  "background",
  "bg"
];

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

function safeJoin(relativePath) {
  const resolved = path.resolve(root, relativePath);
  if (!resolved.startsWith(root)) {
    throw new Error("Path escapes workspace");
  }
  return resolved;
}

async function readJson(relativePath, fallback) {
  try {
    return JSON.parse(await readFile(safeJoin(relativePath), "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(relativePath, value) {
  await writeFile(safeJoin(relativePath), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function readBody(request) {
  let raw = "";
  for await (const chunk of request) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}

function toWebPath(fullPath) {
  return path.relative(root, fullPath).split(path.sep).join("/");
}

function inferCandidateType(filePath) {
  const lower = filePath.toLowerCase();
  if (lower.includes("cover")) return "cover";
  if (lower.includes("splash")) return "splash";
  if (lower.includes("banner")) return "banner";
  if (lower.includes("hero")) return "keyArt";
  if (lower.includes("poster")) return "keyArt";
  if (lower.includes("thumb") || lower.includes("preview")) return "thumbnail";
  if (lower.includes("icon")) return "icon";
  if (lower.includes("logo")) return "logo";
  if (lower.includes("loading")) return "loading";
  if (lower.includes("background") || lower.includes("/bg") || lower.includes("\\bg")) return "background";
  return "image";
}

function scoreImage(relativePath, size) {
  const lower = relativePath.toLowerCase();
  let score = 0;
  for (const pattern of preferredPatterns) {
    if (lower.includes(pattern)) score += 18;
  }
  for (const pattern of rejectedPatterns) {
    if (lower.includes(pattern)) score -= 35;
  }
  if (lower.includes("loading")) score -= 12;
  if (lower.includes("background") || lower.includes("/bg/")) score -= 8;
  if (lower.includes("cover") || lower.includes("splash") || lower.includes("banner")) score += 30;
  if (lower.includes("icon") || lower.includes("logo")) score += 4;
  if (size > 200000) score += 15;
  if (size > 800000) score += 10;
  if (size < 8000) score -= 30;
  return score;
}

async function walkImages(startDir, limit = 180) {
  const queue = [startDir];
  const found = [];
  while (queue.length && found.length < limit) {
    const current = queue.shift();
    const entries = await readdir(current, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      const lowerName = entry.name.toLowerCase();
      if (entry.isDirectory()) {
        if (["node_modules", ".git", "__macosx"].includes(lowerName)) continue;
        queue.push(fullPath);
        continue;
      }
      if (!entry.isFile() || !imageExtensions.has(path.extname(entry.name).toLowerCase())) continue;
      const fileStat = await stat(fullPath).catch(() => null);
      if (!fileStat) continue;
      const webPath = toWebPath(fullPath);
      found.push({
        type: inferCandidateType(webPath),
        path: webPath,
        usage: inferCandidateType(webPath) === "icon" || inferCandidateType(webPath) === "logo" ? ["random", "icon"] : ["shelf"],
        status: "scanned",
        bytes: fileStat.size,
        score: scoreImage(webPath, fileStat.size)
      });
    }
  }
  return found.sort((a, b) => b.score - a.score || b.bytes - a.bytes).slice(0, 80);
}

async function scanGame(slug) {
  const games = await readJson("data/games.json", []);
  const game = games.find((item) => item.slug === slug);
  if (!game) throw new Error(`Unknown game slug: ${slug}`);

  const gameFilePath = safeJoin(game.gamePath);
  const gameDir = path.dirname(gameFilePath);
  const candidates = await walkImages(gameDir);
  const coverSources = await readJson("data/cover-sources.json", {
    meta: { version: 1 },
    reviewQueue: [],
    games: {}
  });

  const existing = coverSources.games?.[slug] || {};
  const existingCandidates = Array.isArray(existing.candidates) ? existing.candidates : [];
  const byPath = new Map(existingCandidates.map((candidate) => [candidate.path, candidate]));
  for (const candidate of candidates) {
    if (!byPath.has(candidate.path)) byPath.set(candidate.path, candidate);
  }

  coverSources.games = coverSources.games || {};
  coverSources.games[slug] = {
    ...existing,
    gamePath: game.gamePath,
    current: {
      cover: game.thumb,
      icon: game.icon,
      ...(existing.current || {})
    },
    candidates: Array.from(byPath.values())
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 80),
    scannedAt: new Date().toISOString()
  };

  await writeJson("data/cover-sources.json", coverSources);
  return coverSources.games[slug];
}

async function saveCoverMap(payload) {
  const coverMap = await readJson("data/cover-map.json", {
    meta: { version: 1 },
    games: {}
  });
  coverMap.meta = {
    ...(coverMap.meta || {}),
    updatedAt: new Date().toISOString().slice(0, 10),
    lastWriteBackAt: new Date().toISOString()
  };
  coverMap.games = coverMap.games || {};

  const incoming = payload.games || payload.draftMap || {};
  for (const [slug, entry] of Object.entries(incoming)) {
    if (!entry || typeof entry !== "object") continue;
    const next = {};
    for (const key of ["featuredCover", "shelfCover", "randomIcon", "icon", "fit", "quality", "mode"]) {
      if (typeof entry[key] === "string" && entry[key].trim()) next[key] = entry[key].trim();
    }
    if (Object.keys(next).length) coverMap.games[slug] = next;
  }

  await writeJson("data/cover-map.json", coverMap);
  return { saved: true, count: Object.keys(incoming).length, coverMap };
}

function extensionFromMime(mimeType) {
  if (mimeType === "image/png") return ".png";
  if (mimeType === "image/jpeg") return ".jpg";
  if (mimeType === "image/webp") return ".webp";
  if (mimeType === "image/gif") return ".gif";
  return ".png";
}

async function saveUploadedScreenshot(payload) {
  const { slug, dataUrl, name = "upload" } = payload || {};
  if (!slug || !dataUrl || typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/")) {
    throw new Error("Invalid screenshot payload");
  }

  const match = dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) throw new Error("Unsupported image data");

  const [, mimeType, base64] = match;
  const ext = extensionFromMime(mimeType);
  const folder = safeJoin("assets/uploaded-covers");
  await mkdir(folder, { recursive: true });
  const baseName = `${slug}-${Date.now()}${ext}`;
  const fullPath = path.join(folder, baseName);
  await writeFile(fullPath, Buffer.from(base64, "base64"));

  const webPath = toWebPath(fullPath);
  const coverSources = await readJson("data/cover-sources.json", {
    meta: { version: 1 },
    reviewQueue: [],
    games: {}
  });
  coverSources.games = coverSources.games || {};
  const existing = coverSources.games[slug] || {};
  const candidates = Array.isArray(existing.candidates) ? existing.candidates : [];
  const uploadedCandidate = {
    type: "uploadedScreenshot",
    path: webPath,
    usage: ["featured", "shelf", "random", "icon"],
    status: "uploaded",
    sourceName: name,
    score: 999
  };
  coverSources.games[slug] = {
    ...existing,
    candidates: [uploadedCandidate, ...candidates.filter((candidate) => candidate.path !== webPath)].slice(0, 80),
    uploadedAt: new Date().toISOString()
  };
  await writeJson("data/cover-sources.json", coverSources);
  return { path: webPath, source: coverSources.games[slug] };
}

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/cover/status") {
    sendJson(response, 200, { ok: true, root, port });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/cover/scan") {
    try {
      const body = await readBody(request);
      const source = await scanGame(body.slug);
      sendJson(response, 200, { ok: true, source });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/cover/save") {
    try {
      const body = await readBody(request);
      const result = await saveCoverMap(body);
      sendJson(response, 200, { ok: true, count: result.count });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/cover/upload") {
    try {
      const body = await readBody(request);
      const result = await saveUploadedScreenshot(body);
      sendJson(response, 200, { ok: true, path: result.path, source: result.source });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message });
    }
    return;
  }

  sendJson(response, 404, { ok: false, error: "Unknown API route" });
}

async function serveStatic(request, response, url) {
  const cleanPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  let fullPath;
  try {
    fullPath = safeJoin(cleanPath.replace(/^\/+/, ""));
  } catch {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const fileStat = await stat(fullPath).catch(() => null);
  if (!fileStat || !fileStat.isFile()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": mimeTypes.get(path.extname(fullPath).toLowerCase()) || "application/octet-stream"
  });
  createReadStream(fullPath).pipe(response);
}

createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "127.0.0.1"}`);
  if (url.pathname.startsWith("/api/")) {
    await handleApi(request, response, url);
    return;
  }
  await serveStatic(request, response, url);
}).listen(port, "127.0.0.1", () => {
  console.log(`Cover admin server running at http://127.0.0.1:${port}/cover-admin.html`);
});
