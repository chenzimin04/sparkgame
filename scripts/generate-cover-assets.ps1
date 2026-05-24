$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $PSScriptRoot
$gamesPath = Join-Path $workspace "data\games.json"
$planPath = Join-Path $workspace "data\cover-plan.json"
$assetMapPath = Join-Path $workspace "data\asset-map.json"
$shelfDir = Join-Path $workspace "assets\covers\shelf"
$iconDir = Join-Path $workspace "assets\icons\random"

$games = Get-Content -Raw $gamesPath | ConvertFrom-Json
$plan = Get-Content -Raw $planPath | ConvertFrom-Json
$assetMap = @{}
if (Test-Path $assetMapPath) {
  $rawAssetMap = Get-Content -Raw $assetMapPath | ConvertFrom-Json
  foreach ($prop in $rawAssetMap.PSObject.Properties) {
    $entry = [ordered]@{}
    foreach ($sub in $prop.Value.PSObject.Properties) {
      $entry[$sub.Name] = [string]$sub.Value
    }
    $assetMap[$prop.Name] = $entry
  }
}

New-Item -ItemType Directory -Force -Path $shelfDir | Out-Null
New-Item -ItemType Directory -Force -Path $iconDir | Out-Null

function Get-FamilyPalette([string]$family) {
  switch ($family) {
    "sports-ball"      { return @{ Bg1="#0f6dff"; Bg2="#45d0ff"; Accent="#ffbe2e"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#083e97" } }
    "driving-parking"  { return @{ Bg1="#0f3d83"; Bg2="#19c2ff"; Accent="#ffd24d"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#0a274f" } }
    "bubble-match"     { return @{ Bg1="#7c2cff"; Bg2="#ff5f94"; Accent="#ffe15b"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#5615a8" } }
    "sort-merge-logic" { return @{ Bg1="#4b50ff"; Bg2="#15d8c3"; Accent="#ffda57"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#2e328f" } }
    "find-difference"  { return @{ Bg1="#25a9ff"; Bg2="#9ce760"; Accent="#ff8650"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#17639b" } }
    "shooter-action"   { return @{ Bg1="#26283f"; Bg2="#ff5c52"; Accent="#ffd34f"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#16182d" } }
    "music-rhythm"     { return @{ Bg1="#5b2cff"; Bg2="#53d6ff"; Accent="#ff66c4"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#32167b" } }
    "kids-learning"    { return @{ Bg1="#50c84d"; Bg2="#ffe05a"; Accent="#ff7f58"; Accent2="#ffffff"; Text="#203246"; Shadow="#2f7f2b" } }
    "board-card"       { return @{ Bg1="#19805f"; Bg2="#093d32"; Accent="#ffef85"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#072d25" } }
    "adventure-casual" { return @{ Bg1="#ff9b2f"; Bg2="#734dff"; Accent="#ffe15b"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#5f2ea3" } }
    default            { return @{ Bg1="#3856ff"; Bg2="#42c7ff"; Accent="#ffd34f"; Accent2="#ffffff"; Text="#ffffff"; Shadow="#2635a3" } }
  }
}

function Get-SlugSeed([string]$slug) {
  $sum = 0
  foreach ($char in $slug.ToCharArray()) {
    $sum += [int][char]$char
  }
  return $sum
}

function Short-Title([string]$title) {
  $clean = $title -replace '[^A-Za-z0-9 ]', ''
  $words = $clean.Split(' ', [System.StringSplitOptions]::RemoveEmptyEntries)
  if ($words.Count -le 2) { return $clean.ToUpper() }
  return (($words | Select-Object -First 2) -join ' ').ToUpper()
}

function Get-IconLetters([string]$title) {
  $words = $title.Split(' ', [System.StringSplitOptions]::RemoveEmptyEntries)
  if ($words.Count -ge 2) {
    return (($words[0].Substring(0,1) + $words[1].Substring(0,1))).ToUpper()
  }
  $trimmed = ($title -replace '\s+', '')
  if ($trimmed.Length -ge 2) { return $trimmed.Substring(0,2).ToUpper() }
  return $trimmed.ToUpper()
}

function Get-MotifSvg([string]$family, [int]$seed, [hashtable]$palette, [string]$variant) {
  $offset = 120 + ($seed % 160)
  $offset2 = 220 + ($seed % 220)
  switch ($family) {
    "sports-ball" {
      return @"
<circle cx="1180" cy="360" r="150" fill="$($palette.Accent2)" opacity="0.95"/>
<path d="M1038 360c40-48 110-95 284-103" stroke="$($palette.Shadow)" stroke-width="16" fill="none" opacity="0.22"/>
<path d="M1032 286c88 37 176 111 186 222" stroke="$($palette.Shadow)" stroke-width="16" fill="none" opacity="0.22"/>
<path d="M1260 244c-45 74-72 179-50 266" stroke="$($palette.Shadow)" stroke-width="16" fill="none" opacity="0.18"/>
<path d="M230 620c120-120 236-182 420-210" stroke="$($palette.Accent)" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.9"/>
"@
    }
    "driving-parking" {
      return @"
<rect x="905" y="222" width="430" height="420" rx="48" fill="rgba(255,255,255,0.10)"/>
<rect x="1042" y="258" width="42" height="340" rx="18" fill="$($palette.Accent2)" opacity="0.75"/>
<rect x="1148" y="258" width="42" height="340" rx="18" fill="$($palette.Accent2)" opacity="0.75"/>
<rect x="920" y="456" width="392" height="116" rx="46" fill="$($palette.Accent)"/>
<circle cx="998" cy="575" r="36" fill="#193250"/>
<circle cx="1231" cy="575" r="36" fill="#193250"/>
"@
    }
    "bubble-match" {
      return @"
<circle cx="1080" cy="310" r="120" fill="$($palette.Accent)" opacity="0.95"/>
<circle cx="1234" cy="398" r="92" fill="$($palette.Accent2)" opacity="0.9"/>
<circle cx="948" cy="456" r="84" fill="#7ff4ff" opacity="0.92"/>
<circle cx="1156" cy="514" r="70" fill="#ff8fb4" opacity="0.9"/>
<circle cx="1312" cy="268" r="58" fill="#8dff80" opacity="0.88"/>
"@
    }
    "sort-merge-logic" {
      return @"
<rect x="938" y="238" width="92" height="92" rx="24" fill="$($palette.Accent2)" opacity="0.92"/>
<rect x="1056" y="332" width="112" height="112" rx="28" fill="$($palette.Accent)" opacity="0.95"/>
<rect x="1206" y="252" width="126" height="126" rx="32" fill="#7ef3ff" opacity="0.92"/>
<rect x="948" y="482" width="144" height="144" rx="38" fill="#ffffff" opacity="0.16"/>
<rect x="1120" y="492" width="182" height="90" rx="32" fill="#182f4a" opacity="0.22"/>
"@
    }
    "find-difference" {
      return @"
<rect x="920" y="220" width="176" height="326" rx="30" fill="$($palette.Accent2)" opacity="0.9"/>
<rect x="1128" y="220" width="176" height="326" rx="30" fill="$($palette.Accent2)" opacity="0.82"/>
<circle cx="1224" cy="368" r="34" fill="$($palette.Accent)" opacity="0.95"/>
<circle cx="1020" cy="368" r="26" fill="$($palette.Shadow)" opacity="0.18"/>
"@
    }
    "shooter-action" {
      return @"
<polygon points="1080,178 1258,322 1180,344 1310,560 1180,560 1074,410 1008,560 894,560 1002,358 922,336" fill="$($palette.Accent)" opacity="0.95"/>
<circle cx="1250" cy="220" r="48" fill="$($palette.Accent2)" opacity="0.16"/>
<circle cx="1354" cy="296" r="34" fill="$($palette.Accent2)" opacity="0.12"/>
"@
    }
    "music-rhythm" {
      return @"
<polygon points="962,620 1068,248 1168,248 1060,620" fill="$($palette.Accent2)" opacity="0.96"/>
<polygon points="1106,620 1216,190 1310,190 1190,620" fill="$($palette.Accent)" opacity="0.95"/>
<circle cx="924" cy="224" r="26" fill="#ffffff" opacity="0.82"/>
<circle cx="1286" cy="152" r="26" fill="#ffffff" opacity="0.72"/>
"@
    }
    "kids-learning" {
      return @"
<circle cx="1114" cy="350" r="158" fill="$($palette.Accent2)" opacity="0.96"/>
<text x="1114" y="390" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="180" font-weight="800" fill="$($palette.Bg1)">A</text>
<circle cx="1278" cy="248" r="38" fill="$($palette.Accent)" opacity="0.92"/>
"@
    }
    "board-card" {
      return @"
<rect x="926" y="212" width="176" height="252" rx="24" fill="$($palette.Accent2)" opacity="0.96"/>
<rect x="1128" y="262" width="176" height="252" rx="24" fill="$($palette.Accent2)" opacity="0.92"/>
<text x="986" y="332" font-family="Segoe UI, Arial, sans-serif" font-size="78" font-weight="800" fill="$($palette.Bg1)">A</text>
<text x="1188" y="380" font-family="Segoe UI, Arial, sans-serif" font-size="78" font-weight="800" fill="$($palette.Bg1)">K</text>
"@
    }
    "adventure-casual" {
      return @"
<polygon points="1116,186 1298,332 1256,560 980,560 936,332" fill="$($palette.Accent)" opacity="0.95"/>
<rect x="1074" y="332" width="84" height="160" rx="26" fill="$($palette.Accent2)" opacity="0.94"/>
<circle cx="1116" cy="286" r="38" fill="$($palette.Accent2)" opacity="0.82"/>
"@
    }
    default {
      return @"
<circle cx="$offset2" cy="312" r="132" fill="$($palette.Accent)" opacity="0.92"/>
<rect x="930" y="402" width="360" height="174" rx="54" fill="$($palette.Accent2)" opacity="0.16"/>
<rect x="980" y="446" width="124" height="124" rx="34" fill="$($palette.Accent2)" opacity="0.94"/>
<rect x="1134" y="336" width="154" height="154" rx="40" fill="#79efff" opacity="0.9"/>
"@
    }
  }
}

function New-ShelfSvg($game, $planItem) {
  $palette = Get-FamilyPalette $planItem.family
  $seed = Get-SlugSeed $game.slug
  $title = Short-Title $game.title
  $badge = $game.category.ToUpper()
  $motif = Get-MotifSvg $planItem.family $seed $palette "shelf"
  return @"
<svg xmlns="http://www.w3.org/2000/svg" width="1536" height="864" viewBox="0 0 1536 864" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1536" y2="864" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="$($palette.Bg1)"/>
      <stop offset="1" stop-color="$($palette.Bg2)"/>
    </linearGradient>
    <linearGradient id="sheen" x1="180" y1="120" x2="540" y2="520" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="white" stop-opacity="0.26"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1536" height="864" rx="56" fill="url(#bg)"/>
  <circle cx="284" cy="224" r="236" fill="url(#sheen)" opacity="0.46"/>
  <circle cx="1474" cy="126" r="182" fill="$($palette.Accent2)" opacity="0.08"/>
  <circle cx="1348" cy="728" r="220" fill="$($palette.Shadow)" opacity="0.12"/>
  $motif
  <rect x="78" y="86" width="154" height="46" rx="23" fill="$($palette.Accent)" opacity="0.96"/>
  <text x="155" y="117" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="800" fill="#193250">$badge</text>
  <text x="86" y="668" font-family="Segoe UI, Arial, sans-serif" font-size="108" font-weight="900" fill="$($palette.Text)">$title</text>
  <text x="88" y="742" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="600" fill="$($palette.Accent2)" opacity="0.9">$($game.title)</text>
  <rect x="82" y="778" width="244" height="16" rx="8" fill="$($palette.Accent)" opacity="0.9"/>
</svg>
"@
}

function New-IconSvg($game, $planItem) {
  $palette = Get-FamilyPalette $planItem.family
  $seed = Get-SlugSeed $game.slug
  $letters = Get-IconLetters $game.title
  $motif = Get-MotifSvg $planItem.family $seed $palette "icon"
  return @"
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="$($palette.Bg1)"/>
      <stop offset="1" stop-color="$($palette.Bg2)"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="1024" rx="220" fill="url(#bg)"/>
  <circle cx="272" cy="210" r="168" fill="$($palette.Accent2)" opacity="0.16"/>
  <g transform="translate(-360, 34) scale(0.9)">
    $motif
  </g>
  <rect x="122" y="716" width="260" height="150" rx="68" fill="$($palette.Shadow)" opacity="0.22"/>
  <text x="252" y="816" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="108" font-weight="900" fill="$($palette.Text)">$letters</text>
</svg>
"@
}

$generated = 0
foreach ($planItem in $plan) {
  $game = $games | Where-Object { $_.slug -eq $planItem.slug } | Select-Object -First 1
  if (-not $game) { continue }

  $shelfRelative = "assets/covers/shelf/$($game.slug).svg"
  $iconRelative = "assets/icons/random/$($game.slug).svg"
  $shelfPath = Join-Path $workspace $shelfRelative
  $iconPath = Join-Path $workspace $iconRelative

  [System.IO.File]::WriteAllText($shelfPath, (New-ShelfSvg $game $planItem), [System.Text.UTF8Encoding]::new($false))
  [System.IO.File]::WriteAllText($iconPath, (New-IconSvg $game $planItem), [System.Text.UTF8Encoding]::new($false))

  if (-not $assetMap.ContainsKey($game.slug)) {
    $assetMap[$game.slug] = [ordered]@{}
  }
  $assetMap[$game.slug]["shelfCover"] = $shelfRelative.Replace("\","/")
  $assetMap[$game.slug]["randomIcon"] = $iconRelative.Replace("\","/")
  $assetMap[$game.slug]["icon"] = $iconRelative.Replace("\","/")
  $generated++
}

$ordered = [ordered]@{}
foreach ($slug in ($assetMap.Keys | Sort-Object)) {
  $ordered[$slug] = [pscustomobject]$assetMap[$slug]
}

$json = $ordered | ConvertTo-Json -Depth 6
[System.IO.File]::WriteAllText($assetMapPath, $json, [System.Text.UTF8Encoding]::new($false))

[pscustomobject]@{
  Generated = $generated
  ShelfDir = $shelfDir
  IconDir = $iconDir
  AssetMap = $assetMapPath
} | ConvertTo-Json -Compress
