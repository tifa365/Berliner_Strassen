# Storytelling

This directory contains the scroll-driven street-name story for the Berlin project. It is a static MapLibre app: no build step, no package manager, and no API token are required.

## Files

- `index.html`: app shell, styles, MapLibre setup, and scroll behavior
- `config.js`: story text, chapter order, camera positions, and layer toggles
- `data/strassen_berlin_wgs84.geojson`: local GeoJSON used for highlighted street segments

## Run locally

Serve the directory over HTTP and open `index.html` in a browser. Any simple static server works.

Example:

```bash
cd storytelling
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

## How it works

- The basemap style comes from CARTO via `config.style`.
- `index.html` adds an Esri satellite raster overlay as `satellite-imagery`.
- `index.html` also loads the local street GeoJSON and creates the highlight layers used by the story.
- Each chapter in `config.js` defines text plus a target map view.
- `onChapterEnter` and `onChapterExit` change layer opacity as the reader scrolls.

## Editing the story

- Update story text, titles, and chapter order in `config.js`.
- Adjust `location.center`, `zoom`, `pitch`, and `bearing` per chapter to change the camera.
- Reference existing layer ids in `onChapterEnter` and `onChapterExit`.
- Add new data-driven highlights in `index.html` if the story needs additional layers.

## Notes

- The implementation is based on an upstream storytelling template, but this copy has been adapted to use MapLibre and project-local data sources.
- The `LICENSE` file is kept to preserve upstream license attribution for the inherited template code.
