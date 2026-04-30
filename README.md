# River Remedy

Static site documenting the **River Remedy** project — a UCSB Bren School Group Project on heavy-metal contamination in the Pilcomayo River Basin, using monitoring data from the Comisión Trinacional para el Desarrollo de la Cuenca del Río Pilcomayo (2016–2024).

**Live site:** _to be deployed_  
**Final report (PDF):** [bren.ucsb.edu](https://bren.ucsb.edu/sites/default/files/2026-04/GP%20River%20Remedy%20Final%20Report%20compressed.pdf)  
**Site author:** Katerina Bischel · [katerina.bischel@gmail.com](mailto:katerina.bischel@gmail.com) · [katerinabischell.github.io/my_site](https://katerinabischell.github.io/my_site/)

---

## What's in this repo

This repository contains the source for the River Remedy site only. It does **not** contain the underlying water-and-sediment monitoring dataset — that data is held by the Comisión Trinacional para el Desarrollo de la Cuenca del Río Pilcomayo ([pilcomayo.net](https://www.pilcomayo.net)) and researchers should contact the Commission directly for data access.

What is included:

- **Site HTML pages** — bilingual (English / Spanish) static site covering project context, six analytical chapters, response strategy, and team credits.
- **`css/`, `js/`** — site-wide styling and behavior, including the bilingual toggle and interactive component handlers.
- **`images/`** — team and mentor portraits, institutional logos, and graphic assets.
- **`visualizations/`** — figures, charts, and interactive Plotly surfaces referenced by the analytical chapters.
- **`ui_kit/`** — the design-system reference for typography, color tokens, and component patterns.

## Site structure

| Page | Subject |
|---|---|
| `index.html` | Project overview and key findings |
| `history.html` | Mining history and basin impacts |
| `partitioning.html` | Sediment-water partitioning analysis (Kd hierarchy, binding mechanisms) |
| `hypoxic.html` | Three documented hypoxic events and acute metal mobilization |
| `spatiotemporal.html` | Seasonal water ↔ sediment exchange cycle |
| `texture.html` | Sediment texture analysis and 2024 emerging-contamination event |
| `3d-models.html` | Interactive 3D water-column concentration surfaces |
| `remediation.html` | Evidence-based intervention strategy synthesis |
| `tech-application.html` | Airborne electromagnetic survey feasibility assessment |
| `contact.html` | Site author, mentors, project team, and data source attribution |

## Running locally

The site is fully static. Either:

```bash
# Option 1: Python's built-in server
python3 -m http.server 8000

# Option 2: any static file server
npx serve .
```

Then open `http://localhost:8000` in a browser.

## Citation

A peer-reviewed publication is in preparation. In the interim, please cite this repository and acknowledge the 2016–2024 data partnership with the Comisión Trinacional para el Desarrollo de la Cuenca del Río Pilcomayo.

## Acknowledgments

The River Remedy project was guided by mentors at UCSB Bren School (Arturo Keller, Hugo Loaiciga), AMTSK (Muhammed Khan, Jeff Thoreson), and PEMA. See [contact.html](contact.html) for full acknowledgments and team credits.

## License

_To be added._ The site is currently shared for review and academic citation. License terms for code and visualizations will be specified before public release.
