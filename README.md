# Berliner Strassen

This repository contains a Berlin-focused scrollytelling project about street names, memory, and urban history.

## Scope

- `storytelling/` contains the static MapLibre + Scrollama story published via GitHub Pages.
- `exploratory_analysis/` contains Berlin notebooks and the Berlin address export script.
- `processed_data/` contains Berlin street and street-address GeoJSON exports used for analysis and storytelling.

## Local development

Install Python dependencies:

```bash
uv sync
```

Serve the storytelling app locally:

```bash
python -m http.server 8000 -d storytelling
```

Then open `http://127.0.0.1:8000`.
