# Cover Production Plan

This project now uses a structured production plan for generating curated art for all games.

## Goal

Generate two curated assets per game:

- `shelfCover`: homepage landscape card art
- `randomIcon`: square icon for the Random Games marquee

## Pipeline

1. Source all games from `data/games.json`
2. Classify each game into a visual family
3. Build prompt plan into `data/cover-plan.json`
4. Generate assets into:
   - `assets/covers/shelf/`
   - `assets/icons/random/`
5. Update `data/asset-map.json`

## Visual Families

- `sports-ball`
- `driving-parking`
- `bubble-match`
- `sort-merge-logic`
- `find-difference`
- `shooter-action`
- `music-rhythm`
- `kids-learning`
- `board-card`
- `adventure-casual`
- `general-casual`

## Command

Rebuild the plan:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\build-cover-plan.ps1
```

## Recommended Execution Order

1. Top 30 homepage games
2. Remaining puzzle games
3. Remaining sports, racing, and action games
4. Remaining casual, kids, music, and board games

## Quality Rules

- Never use raw loading screens
- Never use screenshots with tiny unreadable UI
- Never use transparent junk or sprite sheets as final cover art
- Prefer one clear focal subject
- Keep color bright and portal-friendly
- Make the image readable at small card size
