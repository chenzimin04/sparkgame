async function loadGames() {
  if (!window.__gamesCache) {
    const response = await fetch("data/games.json", { cache: "no-store" });
    window.__gamesCache = await response.json();
  }
  return window.__gamesCache;
}

async function loadJsonOrDefault(path, fallbackValue) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) return fallbackValue;
    return await response.json();
  } catch (error) {
    return fallbackValue;
  }
}

function normalizeCoverEntries(data) {
  if (!data || typeof data !== "object") return {};
  if (data.games && typeof data.games === "object") return data.games;
  return data;
}

async function loadCoverSystem() {
  if (!window.__coverSystemCache) {
    const [coverMapData, assetMapData] = await Promise.all([
      loadJsonOrDefault("data/cover-map.json", {}),
      loadJsonOrDefault("data/asset-map.json", {})
    ]);

    window.__coverSystemCache = {
      coverMap: normalizeCoverEntries(coverMapData),
      assetMap: normalizeCoverEntries(assetMapData)
    };
  }
  return window.__coverSystemCache;
}

function getAssetEntry(game, coverSystem) {
  if (!game || !coverSystem) return null;
  return coverSystem.coverMap[game.slug] || coverSystem.assetMap[game.slug] || null;
}

const FEATURED_ASSET_PREFIXES = [
  "assets/home-covers/",
  "assets/custom-covers/",
  "game1/",
  "assets/cover-",
  "games/"
];

const REAL_ART_PREFIXES = [
  "game1/",
  "games/",
  "assets/custom-covers/"
];

function hasApprovedPrefix(path, prefixes) {
  return typeof path === "string" && prefixes.some((prefix) => path.startsWith(prefix));
}

function isFeaturedAsset(path) {
  return hasApprovedPrefix(path, FEATURED_ASSET_PREFIXES);
}

function isRealArtwork(path) {
  return hasApprovedPrefix(path, REAL_ART_PREFIXES);
}

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function initMobileNav() {
  const sidebar = document.querySelector(".sidebar");
  const topbar = document.querySelector(".topbar");
  if (!sidebar || !topbar) return;

  document.body.classList.add("has-mobile-sidebar");

  let toggle = topbar.querySelector(".mobile-nav-toggle");
  if (!toggle) {
    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "mobile-nav-toggle";
    toggle.setAttribute("aria-label", "Open navigation");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span>";
    topbar.insertBefore(toggle, topbar.firstChild);
  }

  const closeNav = () => {
    document.body.classList.remove("mobile-nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openNav = () => {
    document.body.classList.add("mobile-nav-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("mobile-nav-open")) closeNav();
    else openNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 980) closeNav();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeNav();
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatPlayers(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M+ players`;
  return `${Math.round(value / 1000)}K+ players`;
}

function detailUrl(game) {
  return `game.html?id=${encodeURIComponent(game.id)}`;
}

function playUrl(game) {
  return `play.html?id=${encodeURIComponent(game.id)}`;
}

const EXPLICIT_GAME_PLAY_MODES = {
  "games/BallSortMaster/index.html": "portrait",
  "games/Galaxy_Attack/index.html": "portrait",
  "games/Find_A_Difference/index.html": "portrait",
  "games/Basketball_Crazy/index.html": "landscape",
  "games/Difference_Fun/index.html": "portrait",
  "games/Dream_Home_Merge_Design/index.html": "portrait",
  "games/Find_Difference_2024/index.html": "portrait",
  "games/Find_Differences/index.html": "landscape",
  "games/Jewels_Blitz_6/1/index.html": "portrait",
  "games/Magic_Tiles3_Online_Z/index.html": "portrait",
  "games/Merge_Gun_Elite_Shooting/index.html": "landscape",
  "games/Merge_Tanks/index.html": "landscape",
  "games/Piano_Music_Tiles/index.html": "portrait",
  "games/Puppy_Blast/index.html": "portrait",
  "games/StickMerge/index.html": "landscape",
  "games/DefenderMaster1/index.html": "landscape",
  "games/Galaga_Assault/index.html": "portrait",
  "games/Galaxy_War/index.html": "portrait",
  "games/Meteorite_Shooter/index.html": "portrait",
  "games/space_attack/index.html": "portrait",
  "games/towerDefense/index.html": "landscape",
  "games/Tower_Defense_Battle/index.html": "landscape",
  "games/MoveTheCar/game/index.html": "portrait",
  "games/Parking_Ace_3d/index.html": "landscape",
  "games/Merge_Battle/index.html": "portrait",
  "games/Music_Surf_Christmas/index.html": "landscape",
  "games/Piano_Fire/index.html": "landscape",
  "games/PianoTitle/index.html": "landscape",
  "games/Bear_Boom/index.html": "portrait",
  "games/Jelly_Boom/index.html": "portrait",
  "games/Merge_love/index.html": "portrait",
  "games/SpotDiffers/index.html": "portrait",
  "games/StarWing/index.html": "landscape"
};

async function detectGamePlayMode(gamePath) {
  if (EXPLICIT_GAME_PLAY_MODES[gamePath]) {
    return EXPLICIT_GAME_PLAY_MODES[gamePath];
  }
  try {
    const response = await fetch(gamePath, { cache: "no-store" });
    if (!response.ok) return "landscape";
    const html = await response.text();
    const portraitPattern = /orientation\s*:\s*\{\s*value\s*:\s*["']portrait["']|orientation["']?\s*[:=]\s*["']portrait["']|screenOrientation\s*=\s*["']portrait["']/i;
    if (portraitPattern.test(html)) {
      return "portrait";
    }
    const basePath = gamePath.slice(0, gamePath.lastIndexOf("/") + 1);
    for (const candidate of ["index.js", "main.js", "game.js"]) {
      try {
        const scriptResponse = await fetch(`${basePath}${candidate}`, { cache: "no-store" });
        if (!scriptResponse.ok) continue;
        const scriptText = await scriptResponse.text();
        if (portraitPattern.test(scriptText)) {
          return "portrait";
        }
      } catch (error) {
        continue;
      }
    }
    return "landscape";
  } catch (error) {
    return "landscape";
  }
}

async function setupEmbeddedGamePlayer(frame, frameWrapper, gamePath, options = {}) {
  const setMode = (mode) => {
    if (frameWrapper) {
      frameWrapper.classList.toggle("portrait-mode", mode === "portrait");
    }
    if (options.bodyDatasetKey) {
      document.body.dataset[options.bodyDatasetKey] = mode;
    }
  };

  setMode(await detectGamePlayMode(gamePath));
  frame.src = gamePath;
  frame.addEventListener("load", async () => {
    const detectedMode = await tuneEmbeddedGame(frame, setMode);
    setMode(detectedMode);
  }, { once: true });
}

function applyEmbeddedGameStyles(doc, mode) {
  if (!doc) return;
  let styleNode = doc.getElementById("playspark-embed-fix");
  if (!styleNode) {
    styleNode = doc.createElement("style");
    styleNode.id = "playspark-embed-fix";
    doc.head?.appendChild(styleNode);
  }

  const portraitCss = `
    html, body, #app, #Cocos2dGameContainer {
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      background: #181818 !important;
    }
    body, #app, #Cocos2dGameContainer {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    #Cocos2dGameContainer {
      position: static !important;
      left: auto !important;
      top: auto !important;
      margin: auto !important;
      transform: none !important;
      max-width: 100% !important;
      max-height: 100% !important;
    }
    canvas, #GameCanvas {
      width: auto !important;
      height: 100% !important;
      max-width: 100% !important;
      max-height: 100% !important;
      margin: auto !important;
      position: relative !important;
      inset: auto !important;
      bottom: auto !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      display: block !important;
    }
  `;

  const landscapeCss = `
    html, body, #app, #Cocos2dGameContainer {
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      background: #181818 !important;
    }
    body, #app, #Cocos2dGameContainer {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    #Cocos2dGameContainer {
      position: static !important;
      left: auto !important;
      top: auto !important;
      margin: auto !important;
      transform: none !important;
      width: 100% !important;
      height: 100% !important;
      max-width: 100% !important;
      max-height: 100% !important;
    }
    canvas, #GameCanvas {
      width: 100% !important;
      height: 100% !important;
      max-width: 100% !important;
      max-height: 100% !important;
      margin: auto !important;
      position: relative !important;
      inset: auto !important;
      bottom: auto !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      display: block !important;
    }
  `;

  styleNode.textContent = mode === "portrait" ? portraitCss : landscapeCss;
}

function setImportantStyle(node, styles) {
  if (!node || !styles) return;
  Object.entries(styles).forEach(([property, value]) => {
    node.style.setProperty(property, value, "important");
  });
}

function inferEmbeddedMode(doc, canvas) {
  const portraitMeta = doc?.querySelector('meta[name="screen-orientation"][content*="portrait" i], meta[name="x5-orientation"][content*="portrait" i]');
  if (portraitMeta) return "portrait";

  const bodyText = `${doc?.body?.className || ""} ${doc?.body?.id || ""}`.toLowerCase();
  if (bodyText.includes("portrait")) return "portrait";

  if (!canvas) return "landscape";

  const width = Number(canvas.getAttribute("width")) || canvas.width || canvas.clientWidth || 0;
  const height = Number(canvas.getAttribute("height")) || canvas.height || canvas.clientHeight || 0;
  return height > width ? "portrait" : "landscape";
}

function forceEmbeddedGameLayout(doc, mode) {
  if (!doc) return mode;

  const canvas = doc.querySelector("canvas, #GameCanvas");
  const resolvedMode = inferEmbeddedMode(doc, canvas) || mode || "landscape";
  applyEmbeddedGameStyles(doc, resolvedMode);

  const html = doc.documentElement;
  const body = doc.body;
  const container = doc.querySelector("#Cocos2dGameContainer, #app, #root, #c3canvasdiv, #GameDiv, #game, #gameContainer");

  [html, body, container].filter(Boolean).forEach((node) => {
    setImportantStyle(node, {
      width: "100%",
      height: "100%",
      margin: "0",
      padding: "0",
      overflow: "hidden",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      "max-width": "100%",
      "max-height": "100%",
      position: node === body ? "relative" : "static",
      inset: "auto",
      transform: "none"
    });
  });

  if (!canvas) return resolvedMode;

  const parentChain = [];
  let current = canvas.parentElement;
  while (current && current !== body) {
    parentChain.push(current);
    current = current.parentElement;
  }

  parentChain.forEach((node) => {
    setImportantStyle(node, {
      width: "100%",
      height: "100%",
      margin: "0 auto",
      padding: "0",
      overflow: "hidden",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      "max-width": "100%",
      "max-height": "100%",
      position: "static",
      inset: "auto",
      transform: "none"
    });
  });

  setImportantStyle(canvas, resolvedMode === "portrait" ? {
    width: "auto",
    height: "100%",
    margin: "0 auto",
    padding: "0",
    display: "block",
    position: "relative",
    inset: "auto",
    transform: "none",
    "max-width": "100%",
    "max-height": "100%"
  } : {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    padding: "0",
    display: "block",
    position: "relative",
    inset: "auto",
    transform: "none",
    "max-width": "100%",
    "max-height": "100%"
  });

  return resolvedMode;
}

function scheduleEmbeddedGameMonitor(frame, setMode, initialMode) {
  if (!frame?.contentDocument) return;
  const doc = frame.contentDocument;
  const apply = () => {
    const mode = forceEmbeddedGameLayout(doc, initialMode);
    if (typeof setMode === "function") setMode(mode);
  };

  frame.__embedMonitorCleanup?.();

  apply();

  const observer = new MutationObserver(() => {
    window.requestAnimationFrame(apply);
  });
  observer.observe(doc.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["style", "class", "width", "height"]
  });

  const intervalId = window.setInterval(apply, 700);
  frame.__embedMonitorCleanup = () => {
    observer.disconnect();
    window.clearInterval(intervalId);
  };
}

async function tuneEmbeddedGame(frame, setMode) {
  if (!frame) return "landscape";

  const maxAttempts = 24;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const doc = frame.contentDocument;
    const canvas = doc?.querySelector("canvas, #GameCanvas");
    if (doc && canvas) {
      const mode = forceEmbeddedGameLayout(doc);
      scheduleEmbeddedGameMonitor(frame, setMode, mode);
      return mode;
    }
    await new Promise((resolve) => window.setTimeout(resolve, 250));
  }

  if (frame.contentDocument) {
    scheduleEmbeddedGameMonitor(frame, setMode, "landscape");
  }
  return "landscape";
}

function applyAssetProfile(game, coverSystem, profile) {
  const assetEntry = getAssetEntry(game, coverSystem);
  if (!assetEntry) return game;

  const next = { ...game };
  const approvedFeatured = isFeaturedAsset(assetEntry.featuredCover) ? assetEntry.featuredCover : "";
  const approvedShelf = isRealArtwork(assetEntry.shelfCover) ? assetEntry.shelfCover : "";
  const approvedRandom = isRealArtwork(assetEntry.randomIcon) ? assetEntry.randomIcon : "";
  const approvedIcon = isRealArtwork(assetEntry.icon) ? assetEntry.icon : "";

  if (profile === "featured" && approvedFeatured) {
    next.thumb = approvedFeatured;
  } else if (profile === "featured" && approvedShelf) {
    next.thumb = approvedShelf;
  } else if (profile === "shelf" && approvedShelf) {
    next.thumb = approvedShelf;
  } else if (profile === "shelf" && approvedFeatured) {
    next.thumb = approvedFeatured;
  } else if (profile === "random" && approvedRandom) {
    next.icon = approvedRandom;
  } else if (profile === "random" && approvedShelf) {
    next.icon = approvedShelf;
  } else if (profile === "random" && approvedFeatured) {
    next.icon = approvedFeatured;
  } else if (profile === "icon" && approvedIcon) {
    next.icon = approvedIcon;
  } else if (profile === "icon" && approvedRandom) {
    next.icon = approvedRandom;
  } else if (profile === "icon" && approvedShelf) {
    next.icon = approvedShelf;
  } else if (profile === "icon" && approvedFeatured) {
    next.icon = approvedFeatured;
  }

  if (approvedIcon) {
    next.icon = approvedIcon;
  } else if (approvedRandom) {
    next.icon = approvedRandom;
  } else if (approvedShelf) {
    next.icon = approvedShelf;
  } else if (approvedFeatured) {
    next.icon = approvedFeatured;
  }

  if (assetEntry.coverFit === "contain" || assetEntry.fit === "contain") {
    next.coverFit = "contain";
    next.featureFit = "contain";
  }

  if (typeof assetEntry.position === "string" && assetEntry.position.trim()) {
    next.coverPosition = assetEntry.position.trim();
    next.featurePosition = assetEntry.position.trim();
  }
  if (typeof assetEntry.featuredPosition === "string" && assetEntry.featuredPosition.trim()) {
    next.featurePosition = assetEntry.featuredPosition.trim();
  }
  if (typeof assetEntry.iconPosition === "string" && assetEntry.iconPosition.trim()) {
    next.iconPosition = assetEntry.iconPosition.trim();
  }
  return next;
}

function getCuratedSet(games, coverSystem) {
  return games.filter((game) => {
    const assetEntry = getAssetEntry(game, coverSystem);
    if (!assetEntry) return false;
    return [
      assetEntry.shelfCover,
      assetEntry.randomIcon,
      assetEntry.icon
    ].some(isRealArtwork);
  });
}

function pickRandomStripGames(games, coverSystem) {
  const curatedPool = getCuratedSet(games, coverSystem);
  const sourcePool = curatedPool.length ? curatedPool : games;
  const curated = sourcePool
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((game) => applyAssetProfile(game, coverSystem, "random"));

  const uniqueCurated = [];
  const seen = new Set();
  for (const game of curated) {
    if (seen.has(game.slug)) continue;
    seen.add(game.slug);
    uniqueCurated.push(game);
  }

  if (uniqueCurated.length >= 24) {
    return uniqueCurated.slice(0, 24);
  }

  const fallback = games
    .filter((game) => !seen.has(game.slug))
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, Math.max(0, 24 - uniqueCurated.length))
    .map((game) => applyAssetProfile(game, coverSystem, "random"));

  return [...uniqueCurated, ...fallback].slice(0, 24);
}

function renderFeatureCard(game) {
  const mediaClass = game.featureFit === "contain" ? "feature-media contain" : "feature-media";
  const mediaStyle = game.featurePosition ? ` style="object-position:${escapeHtml(game.featurePosition)}"` : "";
  return `
    <a class="feature-card" href="${detailUrl(game)}">
      <img class="${mediaClass}" src="${escapeHtml(game.thumb)}" alt="${escapeHtml(game.title)}"${mediaStyle}>
      <div class="feature-bottom">
        <img class="feature-icon" src="${escapeHtml(game.icon)}" alt="">
        <div class="feature-text">
          <h3 class="feature-title">${escapeHtml(game.title)}</h3>
          <p class="feature-meta">${escapeHtml(game.description)}</p>
        </div>
      </div>
      <div class="feature-copy">
        <span class="feature-play">Play</span>
      </div>
    </a>
  `;
}

function renderContinueIcon(game) {
  const iconStyle = game.iconPosition ? ` style="object-position:${escapeHtml(game.iconPosition)}"` : "";
  return `
    <a class="continue-icon-card" href="${detailUrl(game)}" title="${escapeHtml(game.title)}">
      <img class="continue-icon-thumb" src="${escapeHtml(game.icon)}" alt="${escapeHtml(game.title)}"${iconStyle}>
    </a>
  `;
}

function renderGameCard(game, tag = "") {
  const tagClass = tag.toLowerCase() === "hot" ? "tag hot" : "tag";
  const safeTag = tag ? `<span class="${tagClass}">${escapeHtml(tag)}</span>` : "";
  const mediaClass = game.coverFit === "contain" ? "card-thumb contain" : "card-thumb";
  const mediaStyle = game.coverPosition ? ` style="object-position:${escapeHtml(game.coverPosition)}"` : "";
  return `
    <article class="game-card shelf-card">
      <a class="card-media" href="${detailUrl(game)}">
        ${safeTag}
        <img class="${mediaClass}" src="${escapeHtml(game.thumb)}" alt="${escapeHtml(game.title)}"${mediaStyle}>
      </a>
      <div class="card-body">
        <div class="card-copy">
          <h3 class="card-title">${escapeHtml(game.title)}</h3>
          <p class="card-desc">${escapeHtml(game.description)}</p>
          <p class="card-players">${escapeHtml(formatPlayers(game.players))}</p>
        </div>
        <div class="card-actions">
          <img class="card-icon" src="${escapeHtml(game.icon)}" alt="">
          <a class="play-button" href="${detailUrl(game)}">Play</a>
        </div>
      </div>
    </article>
  `;
}

function renderMiniCard(game, href = detailUrl(game)) {
  return `
    <a class="mini-card" href="${href}">
      <img class="mini-thumb" src="${escapeHtml(game.thumb)}" alt="${escapeHtml(game.title)}">
      <span class="mini-title">${escapeHtml(game.title)}</span>
    </a>
  `;
}

function renderRecommendCard(game) {
  return `
    <a class="recommend-card" href="${detailUrl(game)}">
      <img class="recommend-thumb" src="${escapeHtml(game.thumb)}" alt="${escapeHtml(game.title)}">
      <span class="recommend-title">${escapeHtml(game.title)}</span>
    </a>
  `;
}

function renderRandomIconTile(game) {
  return `
    <a class="icon-tile" href="${detailUrl(game)}" title="${escapeHtml(game.title)}">
      <img src="${escapeHtml(game.icon)}" alt="${escapeHtml(game.title)}">
    </a>
  `;
}

function renderRandomStrip(games, mobile = false) {
  if (mobile) {
    return `
      <div class="random-icon-grid">
        ${games.slice(0, 12).map(renderRandomIconTile).join("")}
      </div>
    `;
  }

  const rowA = games.slice(0, Math.ceil(games.length / 2));
  const rowB = games.slice(Math.ceil(games.length / 2));
  const minRepeats = 4;
  const renderRow = (items, extraClass = "") => {
    const rowItems = items.map(renderRandomIconTile).join("");
    const repeatedItems = Array.from({ length: minRepeats }, () => rowItems).join("");
    return `
      <div class="icon-marquee-row ${extraClass}">
        <div class="icon-marquee-track">
          ${repeatedItems}
        </div>
      </div>
    `;
  };

  return `
    <div class="icon-marquee">
      ${renderRow(rowA, "offset")}
      ${renderRow(rowB)}
    </div>
  `;
}

function bindSearch(inputId, buttonId) {
  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonId);
  if (!input || !button) return;

  const submit = () => {
    const term = input.value.trim();
    if (document.body.dataset.page === "home") {
      const event = new CustomEvent("catalog-search", { detail: { term } });
      window.dispatchEvent(event);
      const catalog = document.getElementById("catalog");
      if (catalog) catalog.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `index.html?search=${encodeURIComponent(term)}`;
    }
  };

  button.addEventListener("click", submit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submit();
  });
}

function setSectionHtml(id, html, emptyText = "No games found.") {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = html || `<div class="empty-state">${emptyText}</div>`;
}

function setTextById(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function setHrefById(id, value) {
  const node = document.getElementById(id);
  if (node) node.href = value;
}

function safeText(value, fallback = "") {
  return value == null || value === "" ? fallback : String(value);
}

const RECENT_GAMES_KEY = "playspark-recent-games-v1";

function normalizeGamePath(path) {
  return safeText(path).replace(/^\/+/, "");
}

function readRecentGamePaths() {
  try {
    const raw = JSON.parse(localStorage.getItem(RECENT_GAMES_KEY) || "[]");
    return Array.isArray(raw) ? raw.map(normalizeGamePath).filter(Boolean) : [];
  } catch (error) {
    return [];
  }
}

function writeRecentGamePath(gamePath) {
  const nextPath = normalizeGamePath(gamePath);
  if (!nextPath) return;

  try {
    const paths = readRecentGamePaths().filter((path) => path !== nextPath);
    paths.unshift(nextPath);
    localStorage.setItem(RECENT_GAMES_KEY, JSON.stringify(paths.slice(0, 8)));
  } catch (error) {
    // ignore storage failures
  }
}

function getRecentGames(games, fallbackCount = 4) {
  const recentPaths = readRecentGamePaths();
  const recent = recentPaths
    .map((path) => games.find((game) => normalizeGamePath(game.gamePath) === path))
    .filter(Boolean);

  if (recent.length >= fallbackCount) return recent.slice(0, fallbackCount);

  const fallback = games.filter((game) => !recent.some((item) => item.id === game.id)).slice(0, Math.max(0, fallbackCount - recent.length));
  return [...recent, ...fallback].slice(0, fallbackCount);
}

async function renderHomePage() {
  const [games, coverSystem] = await Promise.all([loadGames(), loadCoverSystem()]);
  const isMobileHome = window.matchMedia("(max-width: 980px)").matches;
  const searchTerm = (qs("search") || "").trim().toLowerCase();
  const featuredSource = games.filter((game) => game.featured).slice(0, isMobileHome ? 2 : 5);
  const continueIcons = getRecentGames(games, 4).map((game) => applyAssetProfile(game, coverSystem, "icon"));
  const featured = featuredSource.map((game) => applyAssetProfile(game, coverSystem, "featured"));
  const shelfGames = games.map((game) => applyAssetProfile(game, coverSystem, "shelf"));
  const newest = shelfGames.slice(0, isMobileHome ? 7 : 9);
  const hot = shelfGames.slice(9, isMobileHome ? 17 : 18);
  const random = pickRandomStripGames(games, coverSystem);
  const sports = shelfGames.filter((game) => ["Sports", "Action", "Racing"].includes(game.category)).slice(0, isMobileHome ? 6 : 9);
  const puzzle = shelfGames.filter((game) => game.category === "Puzzle").slice(0, 9);

  document.getElementById("gameCount").textContent = "Redact";
  setSectionHtml("continueIconRow", continueIcons.map(renderContinueIcon).join(""));
  setSectionHtml("featuredRow", featured.map(renderFeatureCard).join(""));
  setSectionHtml("newGrid", newest.map((game) => renderGameCard(game, "New")).join(""));
  setSectionHtml("hotGrid", hot.map((game) => renderGameCard(game, "Hot")).join(""));
  setSectionHtml("randomStrip", renderRandomStrip(random, isMobileHome), "No games found.");
  setSectionHtml("sportsGrid", sports.map((game) => renderGameCard(game)).join(""));
  setSectionHtml("puzzleGrid", puzzle.map((game) => renderGameCard(game)).join(""));

  const catalogGrid = document.getElementById("catalogGrid");
  const categoryFilter = document.getElementById("categoryFilter");
  const searchInput = document.getElementById("searchInput");
  if (searchInput && searchTerm) searchInput.value = qs("search");

  const renderCatalog = (term = searchTerm, category = categoryFilter.value) => {
    const filtered = shelfGames.filter((game) => {
      const matchesCategory = category === "All" || game.category === category;
      const matchesTerm = !term || `${game.title} ${game.category} ${game.description}`.toLowerCase().includes(term.toLowerCase());
      return matchesCategory && matchesTerm;
    });
    catalogGrid.innerHTML = filtered.length
      ? filtered.map((game) => renderGameCard(game)).join("")
      : `<div class="empty-state">No games match this filter yet.</div>`;
  };

  renderCatalog();
  categoryFilter.addEventListener("change", () => renderCatalog(searchInput.value.trim(), categoryFilter.value));
  window.addEventListener("catalog-search", (event) => renderCatalog(event.detail.term, categoryFilter.value));
  bindSearch("searchInput", "searchButton");
}

async function renderDetailPage() {
  const [games, coverSystem] = await Promise.all([loadGames(), loadCoverSystem()]);
  const gameId = qs("id") || games[0]?.id;
  const rawGame = games.find((item) => item.id === gameId) || games[0];
  const game = applyAssetProfile(rawGame, coverSystem, "featured");
  const continueIcons = getRecentGames(games, 4).map((item) => applyAssetProfile(item, coverSystem, "icon"));
  const related = games
    .filter((item) => item.id !== game.id && item.category === game.category)
    .slice(0, 6)
    .map((item) => applyAssetProfile(item, coverSystem, "shelf"));
  const more = games
    .filter((item) => item.id !== game.id)
    .slice(0, 6)
    .map((item) => applyAssetProfile(item, coverSystem, "shelf"));

  document.title = `${game.title} - PlaySpark`;
  const detailHero = document.getElementById("detailHero");
  if (detailHero) {
    detailHero.style.backgroundImage = `url("${game.thumb}")`;
  }
  document.getElementById("detailCategory").textContent = game.category;
  document.getElementById("detailTitle").textContent = game.title;
  document.getElementById("detailDescription").textContent = game.description;
  document.getElementById("detailFooterTitle").textContent = game.title;
  document.getElementById("detailMeta").textContent = `${game.category} · ${formatPlayers(game.players)}`;
  document.getElementById("detailIcon").src = game.icon;
  document.getElementById("summaryThumb").src = game.thumb;
  document.getElementById("summaryTitle").textContent = game.title;
  document.getElementById("summaryRating").textContent = `${game.rating.toFixed(1)} rating`;
  document.getElementById("summaryPlayers").textContent = formatPlayers(game.players);
  document.getElementById("mobileDetailThumb").src = game.thumb;
  document.getElementById("mobileDetailTitle").textContent = game.title;
  document.getElementById("mobileDetailRating").textContent = `★ ${game.rating.toFixed(1)}`;
  document.getElementById("mobileDetailCategory").textContent = game.category;
  document.getElementById("mobileDetailPlayButton").href = game.gamePath;
  document.getElementById("playNowButton").href = "#detailPlayerSection";
  document.getElementById("openSourceButton").href = game.gamePath;
  document.getElementById("detailInlineRawLink").href = game.gamePath;
  const detailFrame = document.getElementById("detailGameFrame");
  const detailFrameWrapper = document.getElementById("detailPlayerFrame");
  await setupEmbeddedGamePlayer(detailFrame, detailFrameWrapper, game.gamePath, { bodyDatasetKey: "detailPlayMode" });

  setSectionHtml("mobileDetailContinueRow", continueIcons.map(renderContinueIcon).join(""), "No games found.");
  setSectionHtml("sideSuggestions", related.map((item) => renderMiniCard(item)).join(""), "No related games in this category yet.");
  setSectionHtml("recommendGrid", more.map(renderRecommendCard).join(""));

  document.getElementById("playNowButton").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("detailPlayerSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("detailInlineFullscreen").addEventListener("click", async () => {
    const frame = document.getElementById("detailPlayerFrame");
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (frame?.requestFullscreen) await frame.requestFullscreen();
  });

  bindSearch("detailSearchInput", "detailSearchButton");
}

async function renderPlayPage() {
  const [games, coverSystem] = await Promise.all([loadGames(), loadCoverSystem()]);
  const gameId = qs("id") || games[0]?.id;
  const rawGame = games.find((item) => item.id === gameId) || games[0];
  const game = applyAssetProfile(rawGame, coverSystem, "featured");
  const suggestions = games
    .filter((item) => item.id !== game.id)
    .slice(0, 6)
    .map((item) => applyAssetProfile(item, coverSystem, "shelf"));

  document.title = `Play ${game.title} - PlaySpark`;
  document.getElementById("playTitle").textContent = game.title;
  document.getElementById("playSub").textContent = `${game.category} · ${formatPlayers(game.players)}`;
  document.getElementById("playDescription").textContent = game.description;
  document.getElementById("detailLink").href = detailUrl(game);
  document.getElementById("rawGameLink").href = game.gamePath;
  const playerFrame = document.querySelector(".player-frame");
  const gameFrame = document.getElementById("gameFrame");
  await setupEmbeddedGamePlayer(gameFrame, playerFrame, game.gamePath, { bodyDatasetKey: "playMode" });

  document.getElementById("playFacts").innerHTML = `
    <div class="fact-row"><span>Category</span><strong>${escapeHtml(game.category)}</strong></div>
    <div class="fact-row"><span>Rating</span><strong>${game.rating.toFixed(1)}</strong></div>
    <div class="fact-row"><span>Players</span><strong>${escapeHtml(formatPlayers(game.players))}</strong></div>
    <div class="fact-row"><span>Source</span><strong>Local HTML5 build</strong></div>
  `;

  setSectionHtml("playSuggestions", suggestions.map((item) => renderMiniCard(item, detailUrl(item))).join(""));

  document.getElementById("fullscreenTrigger").addEventListener("click", async () => {
    const frame = document.querySelector(".player-frame");
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (frame.requestFullscreen) await frame.requestFullscreen();
  });
}

async function boot() {
  initMobileNav();
  const page = document.body.dataset.page;
  if (page === "home") await renderHomePage();
  if (page === "detail") await renderDetailPage();
  if (page === "play") await renderPlayPage();
}

boot().catch((error) => {
  console.error(error);
  document.body.insertAdjacentHTML("beforeend", `<div class="empty-state">Failed to load game data.</div>`);
});
