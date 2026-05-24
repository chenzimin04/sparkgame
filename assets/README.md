# Asset Library

This project uses a curated asset library for homepage presentation.

Directory structure:

- `covers/featured/`: wide hero covers for the top featured carousel
- `covers/shelf/`: landscape covers for standard homepage cards
- `icons/game/`: square game icons for card footers and detail views
- `icons/random/`: square icons for the Random Games marquee

Mapping file:

- `../data/asset-map.json`

Per-game keys can include:

- `featuredCover`
- `shelfCover`
- `icon`
- `randomIcon`

The homepage reads these keys first, then falls back to the original game assets.
