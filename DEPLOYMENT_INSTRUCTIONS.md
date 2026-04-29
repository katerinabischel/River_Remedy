# Deployment Instructions

## Push to GitHub

Run these commands from `~/Desktop/physicochemical_paper/site_update/`:

```bash
# Add the new GitHub repository as a remote
git remote add origin https://github.com/katerinabischel/River_Remedy.git

# Push the main branch to GitHub
git branch -M main
git push -u origin main
```

## Enable GitHub Pages (Optional but Recommended)

1. Go to https://github.com/katerinabischel/River_Remedy/settings
2. Scroll to "GitHub Pages" section
3. Select `main` branch as source
4. Your site will be live at: `https://katerinabischel.github.io/River_Remedy/`

## Future Updates

After making changes:

```bash
git add -A
git commit -m "Description of changes"
git push origin main
```

## Site Structure

```
site_update/
├── index.html              # English homepage
├── index_es.html           # Spanish homepage  
├── contact.html            # Contact form
├── css/main.css            # Glassmorphic styling
├── js/main.js              # Bilingual system
├── visualizations/         # Interactive maps & 3D models
│   ├── station_map_PERFECT.html
│   ├── 3d/
│   │   ├── arsenic_3d_surface_corrected.html
│   │   ├── lead_3d_surface_corrected.html
│   │   ├── zinc_3d_surface_corrected.html
│   │   └── cadmium_3d_surface_corrected.html
│   └── [migration, potosi_texture_sediment, all_hypoxic_events folders]
└── README.md               # Documentation

```

## File Size

Total: 714 MB (includes all visualizations and analysis)

## Key Features

✅ **Bilingual (EN/ES)** - Dynamic language toggle  
✅ **High-tech design** - Glassmorphic, smooth animations  
✅ **Bolivia colors** - Red, yellow, green + water blue palette  
✅ **Interactive visualizations** - 3D contamination models, station maps  
✅ **Responsive** - Mobile-friendly design  
✅ **Scientific storytelling** - Contamination crisis → Analysis → Remediation  
✅ **Contact form** - Pre-built contact page with FAQ  
✅ **Comprehensive README** - Full documentation for GitHub

