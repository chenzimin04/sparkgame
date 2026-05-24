$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $PSScriptRoot
$gamesRoot = Join-Path $workspace "games"
$dataDir = Join-Path $workspace "data"
$overridesPath = Join-Path $dataDir "curation-overrides.json"
$outputPath = Join-Path $dataDir "games.json"

function Convert-ToTitle([string]$name, [hashtable]$titleOverrides) {
  if ($titleOverrides.ContainsKey($name)) {
    return $titleOverrides[$name]
  }

  $spaced = $name -replace '[_-]+', ' '
  $spaced = [regex]::Replace($spaced, '([a-z])([A-Z])', '$1 $2')
  $spaced = [regex]::Replace($spaced, '(\d)([A-Za-z])', '$1 $2')
  $spaced = [regex]::Replace($spaced, '([A-Za-z])(\d)', '$1 $2')
  $words = $spaced.Trim().Split(' ', [System.StringSplitOptions]::RemoveEmptyEntries) | ForEach-Object {
    if ($_ -match '^[a-z0-9]+$') {
      (Get-Culture).TextInfo.ToTitleCase($_.ToLower())
    } else {
      $_
    }
  }
  $title = ($words -join ' ')
  $title = $title -replace '\b3 D\b', '3D'
  $title = $title -replace '\b2 K\b', '2K'
  $title = $title -replace '\bRpg\b', 'RPG'
  return $title
}

function Get-Category([string]$name, [string]$title, [hashtable]$categoryOverrides) {
  if ($categoryOverrides.ContainsKey($name)) {
    return $categoryOverrides[$name]
  }

  $n = "$name $title".ToLower()
  if ($n -match 'football|soccer|basket|golf|kick|freekick|world cup|tennis|pool|billiard|sport|rugby|dunk|archery') { return 'Sports' }
  if ($n -match 'sort|match|connect|2048|mahjong|puzzle|difference|find|jigsaw|merge|bubble|blast|jewel|onet|sudoku|block|fill|memory|word|tile|logic') { return 'Puzzle' }
  if ($n -match 'parking|driving|moto|race|truck|bus|car|ride|traffic') { return 'Racing' }
  if ($n -match 'defense|attack|war|battle|shooter|frontline|galaxy|alien|tank|soldier|assault|gun|stickman|archer') { return 'Action' }
  if ($n -match 'build|house|home|market|tycoon|idle|sim|supermarket|world|farm') { return 'Simulation' }
  if ($n -match 'kids|alphabet|coloring|spelling') { return 'Kids' }
  if ($n -match 'piano|music|tiles') { return 'Music' }
  if ($n -match 'card|board|slot|mahjong') { return 'Card & Board' }
  if ($n -match 'treasure|dungeon|adventure') { return 'Adventure' }
  if ($n -match 'tower defense|strategy|chess') { return 'Strategy' }
  return 'Casual'
}

function Get-CategoryPriority([string]$category) {
  switch ($category) {
    'Sports' { return 1 }
    'Puzzle' { return 2 }
    'Action' { return 3 }
    'Racing' { return 4 }
    'Simulation' { return 5 }
    'Strategy' { return 6 }
    'Adventure' { return 7 }
    'Card & Board' { return 8 }
    'Music' { return 9 }
    'Kids' { return 10 }
    default { return 11 }
  }
}

function Get-FallbackCover([string]$category) {
  switch ($category) {
    'Sports' { return 'assets/cover-golf.svg' }
    'Puzzle' { return 'assets/cover-bubbles.svg' }
    'Racing' { return 'assets/cover-runner.svg' }
    'Action' { return 'assets/cover-arcade.svg' }
    'Simulation' { return 'assets/cover-idle.svg' }
    'Kids' { return 'assets/cover-mini-golf.svg' }
    'Music' { return 'assets/cover-puzzle.svg' }
    'Card & Board' { return 'assets/cover-carrom.svg' }
    'Adventure' { return 'assets/cover-idle.svg' }
    'Strategy' { return 'assets/cover-idle.svg' }
    default { return 'assets/cover-puzzle.svg' }
  }
}

function Get-IconFallback([string]$category) {
  switch ($category) {
    'Sports' { return 'assets/icon-ball.svg' }
    'Puzzle' { return 'assets/icon-cube.svg' }
    'Racing' { return 'assets/icon-bolt.svg' }
    'Action' { return 'assets/icon-bolt.svg' }
    'Simulation' { return 'assets/icon-star.svg' }
    'Strategy' { return 'assets/icon-star.svg' }
    default { return 'assets/icon-star.svg' }
  }
}

function Get-Description([string]$title, [string]$category) {
  switch ($category) {
    'Sports' { return "$title delivers quick competitive rounds and clean arcade controls." }
    'Puzzle' { return "$title mixes bright visuals with short, satisfying puzzle sessions." }
    'Racing' { return "$title focuses on momentum, timing, and fast replayable stages." }
    'Action' { return "$title brings fast combat beats and energetic score-chasing action." }
    'Simulation' { return "$title blends light progression loops with easy pick-up-and-play flow." }
    'Strategy' { return "$title leans on upgrades, positioning, and smart short-session decisions." }
    'Adventure' { return "$title pulls you through light exploration and relaxed objective-based play." }
    'Kids' { return "$title keeps the pace friendly with colorful, easy-to-learn gameplay." }
    'Music' { return "$title syncs simple interactions with rhythmic, high-energy feedback." }
    'Card & Board' { return "$title turns classic tabletop ideas into a smooth casual web game." }
    default { return "$title is a casual browser game built for quick sessions and instant play." }
  }
}

function Get-RelativePath([string]$fullPath) {
  return $fullPath.Replace($workspace + '\', '').Replace('\', '/')
}

function Get-ImageSize([string]$path) {
  try {
    Add-Type -AssemblyName System.Drawing
    $image = [System.Drawing.Image]::FromFile($path)
    $size = [pscustomobject]@{ Width = $image.Width; Height = $image.Height }
    $image.Dispose()
    return $size
  } catch {
    return $null
  }
}

function Score-CoverCandidate($file, [string]$indexDir) {
  $full = $file.FullName
  $name = $file.Name.ToLower()
  $dir = $file.DirectoryName.ToLower()
  $score = 0

  if ($file.Extension -match '\.(jpg|jpeg|webp)$') { $score += 10 } else { $score += 6 }
  if ($name -match 'cover|teaser|splash|title|menu|loading|preload|promo|poster|background|back|home') { $score += 45 }
  if ($name -match '^logo|logo_|_logo|title_') { $score += 22 }
  if ($name -match '^icon-|icon_|icon\.|mini|thumb|thumbnail') { $score -= 28 }
  if ($name -match 'button|btn|progress|bar|font|atlas|frame|panel|particle|tile|cell|cloud|shadow|light|arrow|star|coin|gui') { $score -= 18 }
  if ($dir -match 'templatedata|sdk|icons|favicon|build\\web-data|node_modules') { $score -= 35 }
  if ($dir -match 'assets\\art|assets\\promo|assets\\textures|res|images|ui') { $score += 6 }

  $depth = ($full.Substring($indexDir.Length).TrimStart('\') -split '\\').Count
  $score += [Math]::Max(0, 10 - $depth)

  $size = Get-ImageSize $full
  if ($size) {
    $ratio = if ($size.Height -gt 0) { [double]$size.Width / [double]$size.Height } else { 1.0 }
    if ($size.Width -ge 400 -and $size.Height -ge 220) { $score += 22 }
    elseif ($size.Width -ge 240 -and $size.Height -ge 160) { $score += 10 }
    else { $score -= 10 }

    if ($ratio -ge 1.2 -and $ratio -le 2.2) { $score += 16 }
    elseif ($ratio -ge 0.9 -and $ratio -lt 1.2) { $score += 3 }
    else { $score -= 12 }
  }

  return $score
}

function Find-BestCover([string]$gameDir, [string]$indexPath, [string]$category) {
  $indexDir = Split-Path -Parent $indexPath
  $images = Get-ChildItem $gameDir -Recurse -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|webp|svg)$' }
  if (-not $images) { return Get-FallbackCover $category }

  $preferred = $images | ForEach-Object {
    [pscustomobject]@{
      Path = $_.FullName
      Relative = Get-RelativePath $_.FullName
      Score = Score-CoverCandidate $_ $indexDir
    }
  } | Sort-Object Score -Descending

  $best = $preferred | Select-Object -First 1
  if ($best.Score -lt 8) {
    return Get-FallbackCover $category
  }
  return $best.Relative
}

$overrides = Get-Content -Raw $overridesPath | ConvertFrom-Json
$titleOverrides = @{}
$categoryOverrides = @{}
$coverOverrides = @{}
foreach ($p in $overrides.titleOverrides.PSObject.Properties) { $titleOverrides[$p.Name] = [string]$p.Value }
foreach ($p in $overrides.categoryOverrides.PSObject.Properties) { $categoryOverrides[$p.Name] = [string]$p.Value }
foreach ($p in $overrides.coverOverrides.PSObject.Properties) { $coverOverrides[$p.Name] = [string]$p.Value }
$featuredLookup = @{}
for ($i = 0; $i -lt $overrides.featured.Count; $i++) { $featuredLookup[[string]$overrides.featured[$i]] = $i + 1 }

$games = Get-ChildItem -Path $gamesRoot -Directory | Sort-Object Name
$result = @()
$sequence = 1

foreach ($gameDir in $games) {
  $index = Get-ChildItem $gameDir.FullName -Recurse -Filter index.html | Sort-Object { $_.FullName.Length } | Select-Object -First 1
  if (-not $index) { continue }

  $title = Convert-ToTitle $gameDir.Name $titleOverrides
  $category = Get-Category $gameDir.Name $title $categoryOverrides
  $thumb = if ($coverOverrides.ContainsKey($gameDir.Name)) { $coverOverrides[$gameDir.Name] } else { Find-BestCover $gameDir.FullName $index.FullName $category }
  $icon = if ($thumb -like 'assets/*') { Get-IconFallback $category } else { $thumb }
  $featuredRank = if ($featuredLookup.ContainsKey($gameDir.Name)) { $featuredLookup[$gameDir.Name] } else { 999 }

  $item = [ordered]@{
    id = ('g{0:d3}' -f $sequence)
    slug = ($gameDir.Name.ToLower() -replace '[^a-z0-9]+', '-').Trim('-')
    title = $title
    category = $category
    description = Get-Description $title $category
    thumb = $thumb
    icon = $icon
    gamePath = Get-RelativePath $index.FullName
    featured = $featuredRank -lt 999
    featuredRank = $featuredRank
    categoryPriority = Get-CategoryPriority $category
    rating = [math]::Round((4.2 + (($sequence % 8) * 0.1)), 1)
    players = ((120 + ($sequence * 17)) * 1000)
  }

  $result += [pscustomobject]$item
  $sequence++
}

$sorted = $result | Sort-Object @{ Expression = { if ($_.featured) { 0 } else { 1 } } }, featuredRank, categoryPriority, title
for ($i = 0; $i -lt $sorted.Count; $i++) {
  $sorted[$i].id = ('g{0:d3}' -f ($i + 1))
}

$json = $sorted | ConvertTo-Json -Depth 4
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputPath, $json, $utf8NoBom)

[pscustomobject]@{
  Count = $sorted.Count
  Saved = $outputPath
  AssetThumbs = ($sorted | Where-Object { $_.thumb -like 'assets/*' }).Count
  LocalThumbs = ($sorted | Where-Object { $_.thumb -like 'games/*' }).Count
} | ConvertTo-Json -Compress
