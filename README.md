# River Remedy — Pilcomayo Basin Contamination Study

A groundbreaking 8-year scientific investigation of heavy metal contamination in South America's most critical transnational watershed, affecting 1.5 million people across Bolivia, Paraguay, and Argentina.

## Overview

**River Remedy** combines field research, geochemical analysis, and community engagement to understand contamination dynamics in the Pilcomayo River Basin and provide actionable remediation strategies.

### Key Findings

- **1,436 samples** collected from 46 monitoring stations across 800 km (2016–2024)
- **Seasonal "hand-off" cycle**: Wet season mobilizes metals into the water column (5–30× concentration increases); dry season settles them into contaminated sediment reservoirs
- **Cadmium crisis**: Most mobile metal (200 L/kg partition coefficient), traveling >800 km downstream despite lower absolute concentrations
- **Mercury spike (2021–2024)**: Emergent concern suggesting upstream processing changes or artisanal gold mining
- **Human health burden**: Indigenous communities show 2–5× higher blood lead levels; children exceed tolerable daily intake for all estimated percentiles

### Study Design

- **Water quality**: pH, dissolved oxygen, metal concentrations (As, Cd, Pb, Zn, Hg, Fe, Mn)
- **Sediment analysis**: Grain size distribution, metal fractionation, texture-contamination relationships
- **Spatiotemporal modeling**: Interactive 3D concentration surfaces across 8 years and 800 km
- **Geochemical mechanistic testing**: Iron/aluminum oxides, calcium-phosphate minerals, organic matter as retention mechanisms
- **Hypoxic event analysis**: Three anoxic episodes assessed for metal remobilization dynamics

## Remediation Strategy

We recommend a phased approach targeting three high-priority hotspots:

### Phase 1: Source Control & Monitoring (USD $180K–$240K)
- Real-time discharge monitoring at mining sites
- Early warning system for downstream communities

### Phase 2: Passive Treatment Wetlands (USD $420K–$580K)
- Sulfate-reducing constructed wetlands
- 60–75% removal efficiency for dissolved metals

### Phase 3: Phytoremediation Corridors (USD $95K–$140K/year)
- Vetiver and water hyacinth riparian planting
- Long-term metal uptake + bank stabilization + carbon sequestration

## Technical Stack

### Frontend
- **HTML5 / CSS3**: Responsive, glass-morphic design integrating Bolivia colors and water aesthetics
- **JavaScript**: Bilingual (EN/ES) dynamic content rendering
- **Visualizations**: Embedded interactive maps and 3D models (Plotly, Leaflet-based)

### Data & Analysis
- **Languages**: R (tidyverse, sf, gstat), Python (pandas, geopandas, scikit-learn)
- **Statistical methods**: Spearman rank correlation, Mann-Kendall trend analysis, kriging interpolation
- **GIS**: QGIS, ArcGIS-compatible exports

### Content
- Peer-reviewed geochemical analysis
- Community-engaged research documentation
- Interactive data explorer (linked from main site)

## File Structure

```
site_update/
├── index.html              # English homepage
├── index_es.html           # Spanish homepage (bilingual toggle)
├── contact.html            # Contact form & FAQ
├── css/
│   └── main.css           # Glassmorphic design, Bolivia color palette
├── js/
│   └── main.js            # Bilingual system, animations, form handling
├── visualizations/        # Embedded interactive maps & charts
│   ├── station_map_PERFECT.html
│   ├── 3d/
│   │   ├── arsenic_3d_surface_corrected.html
│   │   ├── lead_3d_surface_corrected.html
│   │   ├── zinc_3d_surface_corrected.html
│   │   └── cadmium_3d_surface_corrected.html
│   └── images/
│       └── [PNG charts & diagrams]
├── assets/
│   └── [Images, logos, icons]
└── README.md              # This file
```

## Getting Started

### Local Development
```bash
# Clone the repository
git clone https://github.com/katerinabischel/River_Remedy.git
cd River_Remedy

# Serve locally (Python 3)
python3 -m http.server 8000

# Open browser to http://localhost:8000
```

### Deployment
The site is optimized for static hosting:
- **GitHub Pages**: Push to `gh-pages` branch for auto-deployment
- **Netlify / Vercel**: Direct GitHub integration (zero config)
- **Traditional hosting**: Copy `site_update/` directory to web server

## Data Access

All water and sediment chemistry data are publicly available:

- **Primary source**: [Comisión Trinacional para el Desarrollo de la Cuenca del Río Pilcomayo](https://www.pilcomayo.net)
- **GitHub repository**: Raw data files, Python/R analysis scripts, and reproducible workflows
- **Peer-reviewed publication**: Full methodological details and uncertainty quantification

## Research Team

| Role | Name | Affiliation |
|------|------|-------------|
| Principal Investigator | Katerina Bischel | UCSB Bren School (M.E.S.M. 2026) |
| Faculty Advisor | Dr. Arturo Keller | UCSB Bren School |
| Collaborators | Tomás Frías University, Bolivian Government | Partner institutions |

## Contributing

We welcome contributions in these areas:

- **Air quality monitoring**: Expand dust and respiratory health analysis
- **Health impact assessment**: Partner on epidemiological studies
- **Ecosystem recovery**: Monitor aquatic life return post-remediation
- **Community engagement**: Translation, outreach materials, local capacity building
- **Technology pilots**: Test passive treatment systems or phytoremediation effectiveness

Please open an issue or contact us at [research@riverremedy.org](mailto:research@riverremedy.org) to discuss collaboration.

## Citation

If you use this research, please cite:

```
Bischel, K., Keller, A., & Partners. (2024). River Remedy: 
Spatiotemporal Assessment of Heavy Metal Contamination and 
Geochemically-Targeted Remediation in the Pilcomayo River Basin. 
UCSB Bren School of Environmental Science & Management.
https://github.com/katerinabischel/River_Remedy
```

## Bilingual Support

This site is available in **English** and **Spanish**. Use the language toggle in the header to switch. All content is dynamically rendered from a centralized translation system (`js/main.js`).

To add additional languages:
1. Extend the `translations` object in `js/main.js`
2. Add `data-i18n` attributes to HTML elements
3. Test with `setLanguage('newLang')`

## License

[Specify your preferred license: CC BY 4.0, MIT, etc.]

## Acknowledgments

- **UCSB Bren School** for funding and institutional support
- **Trinational Commission (Bolivia, Paraguay, Argentina)** for long-term monitoring data
- **Community leaders in Cantumarca and indigenous partners** for local knowledge and advocacy
- **Advanced Minerals Technology SK** and **PEMA** for data sharing and remediation expertise

## Contact & Support

- **Questions?** Open an [issue on GitHub](https://github.com/katerinabischel/River_Remedy/issues)
- **Partnerships?** Email [research@riverremedy.org](mailto:research@riverremedy.org)
- **Data requests?** See the [Data Sources page](#) for access protocols

---

**Last updated**: April 2024  
**Repository**: https://github.com/katerinabischel/River_Remedy  
**Live site**: https://katerinabischel.github.io/River_Remedy/
