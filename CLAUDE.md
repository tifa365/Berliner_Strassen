# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Münchner Straßen** is a geospatial data project about Munich street names with two components:

1. **StreetGuesser** — A Streamlit game where users guess the location of a random Munich street on a map
2. **Storytelling Map** — A Mapbox GL JS scroll-driven narrative about Munich's street naming history, deployed to GitHub Pages

## Commands

**Package manager:** `uv` (Python 3.12+)

```bash
# Run the StreetGuesser game
streamlit run main.py

# Install dependencies
uv sync
```

The storytelling map (`storytelling/index.html`) is a static site — open directly in a browser or deploy via GitHub Actions.

**Deploy:** Pushing to `main` automatically deploys `./storytelling/` to GitHub Pages via `.github/workflows/static.yml`.

## Architecture

### StreetGuesser (Streamlit)

- `main.py` — UI, game flow, session state management
- `game_utils.py` — Data loading (cached), distance calculation, map construction

**Game state** lives in `st.session_state` (selected districts, target street, user guess, distance, connector line).

**Two coordinate systems in use:**
- `EPSG:25832` (UTM Zone 32N) — used for accurate meter-based distance calculations
- `EPSG:4326` (WGS84) — used for Folium map display

**Data files** in `processed_data/`:
- `strassen_adressen_muenchen.geojson` — Streets + addresses, EPSG:25832
- `strassen_adressen_muenchen_wgs84.geojson` — Same, WGS84
- `muenchen_stadtbezirke.geojson` / `*_wgs84.geojson` — District boundaries

Street selection is weighted by `length²` so longer streets appear more often.

### Storytelling Map (MapLibre GL JS + Scrollama)

- `storytelling/index.html` — MapLibre GL JS map with Scrollama-driven chapter transitions
- `storytelling/config.js` — All chapter definitions: camera positions, layer visibility, text content, images

Each chapter in `config.js` defines: `id`, `title`, `description`, `location` (center/zoom/bearing/pitch), `onChapterEnter`/`onChapterExit` layer toggles, and optional `image`.

**No API token required.** Base map: Carto dark-matter (`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`). Satellite overlay: Esri World Imagery raster tiles.

**Data layers** are defined in `index.html` as MapLibre `line` layers filtered from `processed_data/strassen_adressen_muenchen_wgs84.geojson` (fields: `STRANAM` = street name, `HSZ` = address count). All layers start at `line-opacity: 0` and are toggled by chapter `onChapterEnter`/`onChapterExit`. The `strassennamen-mit-erhoehtem-diskussionsbedarf` layer uses a placeholder filter (`['boolean', false]`) until the official 2021 city archive list of 45 colonial street names is added.

### Exploratory Analysis

Jupyter notebooks in `exploratory_analysis/` — used for data processing and ad-hoc analysis, not part of the deployed app.
