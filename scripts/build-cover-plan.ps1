$ErrorActionPreference = "Stop"

$workspace = Split-Path -Parent $PSScriptRoot
$gamesPath = Join-Path $workspace "data\games.json"
$templatePath = Join-Path $workspace "data\cover-prompt-templates.json"
$outputPath = Join-Path $workspace "data\cover-plan.json"

$games = Get-Content -Raw $gamesPath | ConvertFrom-Json
$templates = Get-Content -Raw $templatePath | ConvertFrom-Json

function Resolve-Family([string]$title, [string]$slug, [string]$category, $families) {
  $haystack = "$title $slug $category".ToLower()
  foreach ($family in $families.PSObject.Properties) {
    foreach ($keyword in $family.Value.keywords) {
      if ([string]::IsNullOrWhiteSpace($keyword)) { continue }
      if ($haystack.Contains($keyword.ToLower())) {
        return $family.Name
      }
    }
  }

  switch ($category) {
    "Sports" { return "sports-ball" }
    "Racing" { return "driving-parking" }
    "Action" { return "shooter-action" }
    "Music" { return "music-rhythm" }
    "Kids" { return "kids-learning" }
    "Card & Board" { return "board-card" }
    "Adventure" { return "adventure-casual" }
    "Puzzle" { return "sort-merge-logic" }
    default { return "general-casual" }
  }
}

function Fill-Template([string]$template, $game) {
  return $template.Replace("{{title}}", [string]$game.title)
}

$globalShelf = $templates.globalStyle.shelfCover
$globalIcon = $templates.globalStyle.randomIcon

$plan = foreach ($game in $games) {
  $familyName = Resolve-Family $game.title $game.slug $game.category $templates.families
  $family = $templates.families.$familyName

  [pscustomobject]@{
    slug = $game.slug
    title = $game.title
    category = $game.category
    family = $familyName
    outputs = [pscustomobject]@{
      shelfCover = [pscustomobject]@{
        output = "assets/covers/shelf/$($game.slug).png"
        size = $globalShelf.size
        aspectRatio = $globalShelf.aspectRatio
        style = $globalShelf.style
        layout = $globalShelf.layout
        prompt = (Fill-Template $family.shelfCoverPrompt $game)
      }
      randomIcon = [pscustomobject]@{
        output = "assets/icons/random/$($game.slug).png"
        size = $globalIcon.size
        aspectRatio = $globalIcon.aspectRatio
        style = $globalIcon.style
        layout = $globalIcon.layout
        prompt = (Fill-Template $family.randomIconPrompt $game)
      }
    }
  }
}

$json = $plan | ConvertTo-Json -Depth 8
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputPath, $json, $utf8NoBom)

[pscustomobject]@{
  Count = ($plan | Measure-Object).Count
  Saved = $outputPath
} | ConvertTo-Json -Compress
