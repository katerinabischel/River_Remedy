// River Remedy - Main Application
// Bilingual, data-driven website with full analyses

let currentLang = 'en';

const translations = {
  en: {
    pages: {
      overview: `
        <header>
          <div>
            <h2>Heavy Metal Contamination Analysis: Pilcomayo River Basin</h2>
            <p>Comprehensive spatiotemporal analysis of contaminant migration (2016–2024) | Data: Trinational Commission</p>
          </div>
          <div class="header-actions">
            <a href="#" class="btn-secondary">← Full Report (PDF)</a>
          </div>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3><i class="fas fa-water"></i> Basin Overview & The Seasonal Metal Cycle</h3>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem;">
              The Pilcomayo River Basin spans <strong>Bolivia, Argentina, and Paraguay</strong>, with headwaters in the Potosí mining region experiencing over 400 years of intensive mining activity. This research analyzes heavy metal contamination patterns affecting approximately <span class="stat-highlight">1.5 million people</span> who depend on the river for drinking water, agriculture, and fisheries.
            </p>
            <p style="font-size: 0.95rem; line-height: 1.7; background: var(--water-blue); padding: 1rem; border-radius: 8px;">
              <strong style="color: var(--deep-stream);">The Seasonal Hand-off:</strong> Rainfall in the Potosí mining headwaters triggers <strong>mobilization</strong> in the water column during the wet season (5–30× concentration increases). As flow stabilizes in the dry season, metals adsorb to fine particles and settle into the <strong>sediment</strong>, creating long-term toxic reservoirs downstream. This cyclical pattern creates both acute and chronic contamination risks throughout the basin.
            </p>
          </div>

          <div class="tile" style="grid-column: span 8;">
            <h3>Basin-Wide Monitoring Network</h3>
            <div class="viz-container">
              <iframe src="visualizations/station_map_PERFECT.html"></iframe>
            </div>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 1rem; line-height: 1.5;">
              <strong>Data Sources:</strong> 477 water samples and 959 sediment samples from 46 monitoring stations across three countries. Stations range from Potosí headwaters to Paraguay lowlands, capturing complete basin contamination gradient.
            </p>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Sediment Retention Profiles</h3>
            <p style="font-size: 0.82rem; color: #64748b; margin-bottom: 1rem;">Median Partitioning Coefficients (L/kg):</p>
            <div style="background: var(--water-blue); padding: 1.2rem; border-radius: 8px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom: 1px solid #bae6fd; padding-bottom:5px;">
                <strong>Lead (Pb)</strong> <span style="font-weight: 700;">1,667</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom: 1px solid #bae6fd; padding-bottom:5px;">
                <strong>Arsenic (As)</strong> <span style="font-weight: 700;">919</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <strong>Cadmium (Cd)</strong> <span style="color: #ef4444; font-weight:700;">160</span>
              </div>
            </div>
            <p style="font-size: 0.75rem; margin-top: 1rem; line-height: 1.5; background: #fef2f2; padding: 0.8rem; border-radius: 6px; border-left: 3px solid #ef4444;">
              <strong>Critical Finding:</strong> Cadmium's low retention (10× less than lead) indicates it is the most mobile metal, posing the greatest downstream transport risk in the water column, whereas the long-term contamination threat within sediments comes from lead due to its high retention in this system.
            </p>
          </div>
        </div>

        <h2 class="section-title"><i class="fas fa-chart-bar"></i> Key Basin Statistics</h2>
        <div class="stat-tiles">
          <div class="stat-tile">
            <div class="stat-value">1.5M</div>
            <div class="stat-label">People Affected</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">46</div>
            <div class="stat-label">Monitoring Stations</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">1,436</div>
            <div class="stat-label">Total Samples</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">400+</div>
            <div class="stat-label">Years of Mining</div>
          </div>
        </div>

        <h2 class="section-title"><i class="fas fa-book-open"></i> Research Summary</h2>

        <div class="dashboard-grid">
          <div class="research-card" style="grid-column: span 6;">
            <h4><i class="fas fa-exchange-alt"></i> Sediment-Water Partitioning Analysis</h4>
            <p>
              Calculated site-specific partitioning coefficients (Kd) from <span class="stat-highlight">846 matched sample pairs</span> across 27 monitoring stations to quantify metal distribution between sediment and water phases. Comprehensive Spearman rank correlation analysis identified controls on metal retention including pH, dissolved oxygen, clay content, and organic matter.
            </p>
            <div class="key-finding">
              <strong>Key Finding:</strong> Dissolved oxygen shows significant positive correlations with retention for ALL metals (p < 0.01), with lead exhibiting the strongest DO dependency (ρ = +0.249). However, pH remains the dominant control—acidic conditions (pH 3-5) in the mining zone overwhelm DO benefits and drastically reduce retention for Cd, Pb, and As.
            </div>
            <div class="key-finding" style="margin-top: 0.5rem;">
              <strong>Mechanistic Verification:</strong> Sediment composition analysis confirms arsenic retention is controlled by Fe/Al oxides (strongest correlation in dataset: Fe ρ = +0.321), while cadmium uniquely relies on Ca/P minerals (ρ = +0.301)—NOT Fe/Mn oxides as expected. Zinc shows promiscuous multi-site binding across all mineral phases.
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.85rem;">
              <strong>Basin Status:</strong> 99% of samples are oxic (DO >4 mg/L), confirming the river maintains sufficient oxygen levels basin-wide. Aeration is unnecessary—pH amendment to 6-7 in the mining zone is the critical remediation priority.
            </p>
          </div>

          <div class="research-card" style="grid-column: span 6;">
            <h4><i class="fas fa-exclamation-triangle"></i> Hypoxic Events: Water Column Metal Mobilization</h4>
            <p>
              Identified <span class="stat-highlight">3 hypoxic events</span> (DO &lt; 4 mg/L) in mining zone stations (2016–2024) and analyzed their effect on water column metal concentrations. Each event was assessed independently using station-specific time-series and — where sampling data permitted — before/after enrichment analysis restricted to <strong>hydrologically confirmed connected stations only</strong>, accounting for the Pilcomayo's complex tributary network.
            </p>
            <div class="critical-finding">
              <strong>Key Finding:</strong> Event 2 (Potosí – Naciente río La Ribera, October 2017, DO = 2.84 mg/L) is the only event with sufficient pre- and post-event water column data for enrichment analysis. Lead concentrations at Tarapaya — a confirmed connected station — showed an approximately <strong>3× increase</strong> in the 180-day post-event window. Cadmium and arsenic also showed post-event elevation. Events 1 and 3 are presented as full monitoring time-series only, due to the absence of pre-event baseline data and post-event sampling, respectively.
            </div>
            <div class="key-finding" style="margin-top: 0.5rem;">
              <strong>Connection to Sediment Partitioning:</strong> Hypoxic events represent temporary disruptions of the stable sediment-water equilibrium quantified by the K<sub>d</sub> analysis. Cadmium's uniquely low retention via acid-soluble Ca/P minerals makes it the most susceptible to water column release during any oxygen depletion event, consistent with its observed enrichment pattern.
            </div>
          </div>

          <div class="research-card" style="grid-column: span 6;">
            <h4><i class="fas fa-chart-line"></i> Spatiotemporal Migration Patterns</h4>
            <p>
              Mapped metal concentration gradients across <span class="stat-highlight">8 years (2016-2024)</span> and 850+ kilometers to identify contamination hotspots, seasonal patterns, and long-term trends. Analyzed temporal dynamics in both water and sediment matrices across 46 monitoring stations spanning three countries, with interactive 3D surface models visualizing spatial-temporal evolution of As, Cd, Pb, and Zn contamination.
            </p>
            <div class="key-finding">
              <strong>Key Finding: The Seasonal Hand-off Cycle.</strong> Rainfall in Potosí mining headwaters triggers <strong>mobilization in the water column during wet season</strong> (5-30× concentration increases). As flow stabilizes in dry season, metals adsorb to fine particles and settle into <strong>sediment reservoirs</strong>, creating long-term toxic deposits downstream. This cyclical pattern creates both acute (water) and chronic (sediment) contamination risks throughout the basin.
            </div>
            <div class="key-finding" style="margin-top: 0.5rem;">
              <strong>Spatial Persistence:</strong> Potosí region (pH 4-6) shows persistent contamination with minimal natural attenuation over 8-year monitoring period. 3D models reveal metals migrate >200 km downstream with visible peaks corresponding to seasonal pulses. At Argentina/Paraguay border (700-850 km), elevated contamination zones persist, confirming transboundary transport affecting 1.5 million people.
            </div>
          </div>

          <div class="research-card" style="grid-column: span 6;">
            <h4><i class="fas fa-layer-group"></i> Sediment Texture & Contamination Controls</h4>
            <p>
              Analyzed grain size distribution (clay, silt, sand, gravel) and metal concentrations across <span class="stat-highlight">417 Potosí sediment samples</span> from 12 monitoring stations to understand how sediment texture controls metal retention. Investigated spatial gradients, seasonal patterns (wet vs. dry), and temporal trends (2016-2024).
            </p>
            <div class="key-finding">
              <strong>Key Finding:</strong> Texture does NOT control contamination in Potosí mining zone. Arsenic medians are nearly flat across all five texture classes (15-21 mg/kg), demonstrating that mining-derived contamination is pervasive enough to override textural sorting effects. Weak clay correlations reflect simultaneous elevation of clay and metals at source stations, not enhanced retention by clay minerals.
            </div>
            <div class="critical-finding" style="margin-top: 0.5rem;">
              <strong>Emerging Mercury Crisis:</strong> Mercury concentrations, which remained near zero through 2019, escalated rapidly to 1.3 mg/kg during the 2021 dry season before reaching a record high of <strong>2.3 mg/kg in 2024 wet season</strong>—the highest value on record. This suggests discrete upstream source change, possibly artisanal gold amalgamation or changes in mining discharge composition.
            </div>
          </div>
        </div>
      `,

      partitioning: `
        <header>
          <h2>Sediment-Water Partitioning Analysis</h2>
          <p>Empirical geochemical controls on metal distribution and bioavailability</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>Distribution Coefficients (Kd) — Metal Mobility Hierarchy</h3>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
              The magnitude of sediment-water partitioning across the Pilcomayo Basin reflects a distinct hierarchy of metal mobility, with median Kd values spanning nearly an order of magnitude between the most and least sequestered elements. <strong>Lead exhibits the highest affinity for the solid phase (median Kd: 1,667 L/kg)</strong>, suggesting robust immobilization under prevailing basin conditions. Arsenic and Zinc show moderate-to-high retention (Kd: 908 L/kg and 664 L/kg, respectively), while <strong>Cadmium remains significantly more labile (median Kd: 200 L/kg)</strong>, representing the greatest risk for long-distance downstream transport.
            </p>
            <div style="background: var(--water-blue); padding: 1.5rem; border-radius: 8px;">
              <p style="font-size: 0.9rem; font-weight: 600; color: var(--deep-stream); margin-bottom: 1rem;">Partition Coefficient Summary (2016–2024):</p>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                  <div style="font-size: 1.8rem; font-weight: 700; color: var(--bol-red);">1,667</div>
                  <div style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Lead (Pb) L/kg</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                  <div style="font-size: 1.8rem; font-weight: 700; color: var(--bol-yellow);">908</div>
                  <div style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Arsenic (As) L/kg</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                  <div style="font-size: 1.8rem; font-weight: 700; color: #0ea5e9;">664</div>
                  <div style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Zinc (Zn) L/kg</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                  <div style="font-size: 1.8rem; font-weight: 700; color: #ef4444;">200</div>
                  <div style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Cadmium (Cd) L/kg</div>
                </div>
              </div>
            </div>
          </div>

          <div class="tile" style="grid-column: span 6;">
            <h3>Mechanistic Hypothesis Testing</h3>
            <p style="margin-bottom: 1rem;">Four distinct retention mechanisms tested against empirical field data:</p>
            <div class="research-card">
              <h4>Iron/Aluminum Oxide Hypothesis</h4>
              <p>Fe/Al oxides control arsenic and zinc retention. <strong>Result: VERIFIED for As</strong> (Fe ρ = +0.321, p < 0.01). Arsenic shows strongest correlation with iron content.</p>
            </div>
            <div class="research-card">
              <h4>Calcium-Phosphate Mechanism</h4>
              <p>Cadmium precipitates as Ca/P minerals rather than adsorbing to oxides. <strong>Result: VERIFIED</strong> (Ca ρ = +0.301, p < 0.01). Unique control on Cd mobility.</p>
            </div>
          </div>

          <div class="tile" style="grid-column: span 6;">
            <h3>Physicochemical Controls</h3>
            <div class="research-card">
              <h4>pH — The Dominant Control</h4>
              <p>Acidic conditions (pH 3-5) in Potosí headwaters overwhelm all other controls. <strong>Result: CRITICAL</strong>. pH amendment to 6-7 would increase metal retention 3–8 fold basin-wide.</p>
            </div>
            <div class="research-card">
              <h4>Dissolved Oxygen</h4>
              <p>All metals show positive DO correlations (p < 0.01). Result: Supports oxide-based retention. <strong>99% of basin is oxic</strong>—aeration unnecessary.</p>
            </div>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Visualization: Partitioning Relationships</h3>
            <div class="viz-container">
              <img src="visualizations/empirical_partitioning_corrected/partitioning_summary_corrected.csv" alt="Partitioning data" style="display:none;">
              <p style="text-align: center; padding: 2rem; color: #64748b;">
                Detailed correlation heatmaps and pH relationships available in supplementary materials
              </p>
            </div>
          </div>
        </div>
      `,

      hypoxic: `
        <header>
          <h2>Hypoxic Events & Metal Mobilization</h2>
          <p>Analysis of three anoxic episodes and dissolved oxygen-driven metal release (2016–2024)</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3><i class="fas fa-exclamation-circle"></i> Three Hypoxic Events Identified</h3>
            <p style="margin-bottom: 1.5rem;">The Pilcomayo basin experienced three documented hypoxic episodes (DO < 4 mg/L) with differential impacts on water column metal concentrations:</p>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 1.2rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                <div style="font-size: 0.85rem; font-weight: 700; color: #991b1b; text-transform: uppercase; margin-bottom: 0.5rem;">Event 1</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #7f1d1d;">Tarapaya, April 2016</div>
                <div style="font-size: 0.9rem; color: #991b1b; margin-top: 0.5rem;">DO = 3.36 mg/L</div>
                <div style="font-size: 0.8rem; color: #7f1d1d; margin-top: 0.8rem; font-style: italic;">Time-series only (no pre-event baseline)</div>
              </div>

              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 1.2rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <div style="font-size: 0.85rem; font-weight: 700; color: #92400e; text-transform: uppercase; margin-bottom: 0.5rem;">Event 2 (KEY)</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #b45309;">Potosí – Naciente, Oct 2017</div>
                <div style="font-size: 0.9rem; color: #92400e; margin-top: 0.5rem;">DO = 2.84 mg/L</div>
                <div style="font-size: 0.8rem; color: #78350f; margin-top: 0.8rem; font-weight: 600;">✓ Pre/post enrichment analysis (Pb 3× increase)</div>
              </div>

              <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 1.2rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                <div style="font-size: 0.85rem; font-weight: 700; color: #991b1b; text-transform: uppercase; margin-bottom: 0.5rem;">Event 3</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #7f1d1d;">La Quiaca, Feb 2024</div>
                <div style="font-size: 0.9rem; color: #991b1b; margin-top: 0.5rem;">DO = 2.61 mg/L</div>
                <div style="font-size: 0.8rem; color: #7f1d1d; margin-top: 0.8rem; font-style: italic;">Time-series only (final campaign)</div>
              </div>
            </div>
          </div>

          <div class="research-card" style="grid-column: span 12;">
            <h4>Event 2 Analysis: The Only Robust Enrichment Assessment</h4>
            <p>
              Event 2 at Potosí – Naciente río La Ribera (October 2017) is the <strong>only event with sufficient pre- and post-event water column data for formal enrichment analysis</strong>. Three hydrologically-connected downstream stations (Tarapaya, Pilcomayo–agua arriba confluencia, San Antonio–Potosí) were monitored before and after the event within a 180-day window.
            </p>
            <div class="critical-finding">
              <strong>Enrichment Factor Results (180-day post-event window):</strong>
              <br>• Lead (Pb): 3.0× (Tarapaya, n=2 pre, n=2 post)
              <br>• Cadmium (Cd): 2.2× (Tarapaya, n=1–2 per window)
              <br>• Arsenic (As): 1.5× (most stations)
              <br><strong>Statistical Note:</strong> Small sample sizes (n=1–2 per window) preclude formal hypothesis testing. Enrichment factors reported as descriptive effect sizes.
            </div>
            <div class="key-finding" style="margin-top: 0.5rem;">
              <strong>Mechanistic Interpretation:</strong> The observed 3× Pb enrichment is consistent with the disruption of the stable K<sub>d</sub> equilibrium. During anoxia, the acidic, reducing conditions temporarily suppress sorption efficiency, causing already-dissolved metals to persist longer in the water column. Pb's high Kd (1,667) means even modest reductions in retention efficiency are amplified in absolute concentration changes. Cd's enrichment (2.2×) aligns with its acid-soluble Ca/P mineral control—anoxia may destabilize these mineral phases.
            </div>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Events 1 & 3: Temporal Context</h3>
            <p style="margin-bottom: 1rem;">
              <strong>Event 1 (Tarapaya, April 2016)</strong> lacks a pre-event baseline because systematic monitoring of this station commenced concurrently with the hypoxic event. The time-series shows elevated dissolved metals during and immediately after the event, with gradual recovery to background over subsequent months. This pattern is consistent with temporary K<sub>d</sub> disruption.
            </p>
            <p>
              <strong>Event 3 (La Quiaca, February 2024)</strong> represents the final monitoring campaign in the dataset. No post-event follow-up samples are available. The time-series shows the event context but cannot assess downstream transport or recovery dynamics.
            </p>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Hypoxic Event Visualizations</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
              <div class="viz-container">
                <p style="text-align: center; padding: 1rem; color: #64748b;">Event 1 (Tarapaya) Time-series</p>
              </div>
              <div class="viz-container">
                <p style="text-align: center; padding: 1rem; color: #64748b;">Event 2 (Potosí) Enrichment Analysis</p>
              </div>
              <div class="viz-container">
                <p style="text-align: center; padding: 1rem; color: #64748b;">Event 3 (La Quiaca) Time-series</p>
              </div>
            </div>
          </div>
        </div>
      `,

      texture: `
        <header>
          <h2>Sediment Texture & Contamination Controls</h2>
          <p>Grain size distribution, seasonal dynamics, and temporal trends in Potosí zone (2016–2024)</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>Key Finding: Mining Contamination Overrides Textural Control</h3>
            <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
              <p style="margin: 0; color: #7f1d1d;">
                <strong>Texture does NOT control contamination in the Potosí mining zone.</strong> Arsenic medians are nearly flat across all five texture classes (15–21 mg/kg), demonstrating that mining-derived contamination is pervasive enough to override natural textural sorting effects. This indicates saturated sorption sites across all grain sizes due to extremely high source loading.
              </p>
            </div>

            <h4 style="margin-top: 1.5rem; color: var(--deep-stream); font-family: 'Lora', serif;">Seasonal Enrichment by Texture Class</h4>
            <p style="margin-bottom: 1rem; font-size: 0.9rem;">Dry season concentrates metals in sediment due to reduced dilution:</p>

            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                <thead>
                  <tr style="background: var(--water-blue);">
                    <th style="padding: 0.8rem; text-align: left; border: 1px solid var(--border-soft);">Texture Class</th>
                    <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">As Wet (mg/kg)</th>
                    <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">As Dry (mg/kg)</th>
                    <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Change</th>
                    <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Pb Wet (mg/kg)</th>
                    <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Pb Dry (mg/kg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 0.8rem; border: 1px solid var(--border-soft);"><strong>Sand</strong></td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">17.3</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">22.1</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft); color: var(--bol-red);"><strong>+28%</strong></td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">24.1</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">28.5</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 0.8rem; border: 1px solid var(--border-soft);"><strong>Sandy Loam</strong></td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">18.2</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">20.5</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">+12%</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">22.8</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">31.2</td>
                  </tr>
                  <tr>
                    <td style="padding: 0.8rem; border: 1px solid var(--border-soft);"><strong>Silty Loam</strong></td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">15.8</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">20.3</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft); color: var(--bol-red);"><strong>+531%*</strong></td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">19.1</td>
                    <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">21.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="font-size: 0.8rem; color: #64748b; margin-top: 0.5rem; font-style: italic;">*n=14 dry season observations—interpret with caution</p>
          </div>

          <div class="research-card" style="grid-column: span 12;">
            <h4><i class="fas fa-warning"></i> Emerging Mercury Crisis</h4>
            <p>
              Mercury concentrations, which remained near zero through 2019, escalated rapidly to 1.3 mg/kg during the 2021 dry season, reaching a record high of <strong>2.3 mg/kg in 2024 wet season</strong>—<strong>13× the USEPA freshwater sediment guideline of 0.174 mg/kg</strong>. This emergent trend, coupled with simultaneous cadmium spike to 5.0 mg/kg (highest 8-year value), suggests a discrete upstream source change rather than gradual accumulation.
            </p>
            <div class="critical-finding">
              <strong>Potential Drivers:</strong> Artisanal gold amalgamation operations, recent lithium extraction methods, or changes in mineral processing discharge composition. The synchronicity across two metals with distinct geochemical behaviors strongly implies a single upstream source change rather than independent contamination pathways.
            </div>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Temporal Trends (2016–2024)</h3>
            <p style="margin-bottom: 1rem;">Stacked area chart showing textural composition shifts and concurrent metal concentration evolution:</p>
            <div class="viz-container">
              <p style="text-align: center; padding: 2rem; color: #64748b;">Temporal trends visualization showing sand → sandy loam transition and mercury emergence</p>
            </div>
          </div>
        </div>
      `,

      migration: `
        <header>
          <h2>Spatiotemporal Migration Patterns</h2>
          <p>850+ km longitudinal gradient and 8-year temporal evolution (2016–2024)</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>Seasonal Hand-off Cycle</h3>
            <p style="margin-bottom: 1rem;">
              The defining feature of Pilcomayo contamination is the <strong>seasonal reversal between water and sediment phases</strong>. Wet season (Nov–Apr) shows dramatic water column enrichment, while sediments remain relatively stable. Dry season shows the opposite: water concentrations plummet as metals precipitate and settle into the riverbed.
            </p>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-red); text-transform: uppercase; margin-bottom: 0.5rem;">Wet Season Water</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-red);">47.5 µg/L</div>
                <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.3rem;">Arsenic peak</div>
              </div>

              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-red); text-transform: uppercase; margin-bottom: 0.5rem;">Dry Season Water</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-red);">15.0 µg/L</div>
                <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.3rem;">68% decrease</div>
              </div>

              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-green); text-transform: uppercase; margin-bottom: 0.5rem;">Wet Season Sediment</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-green);">88.8 mg/kg</div>
                <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.3rem;">Zinc baseline</div>
              </div>

              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-green); text-transform: uppercase; margin-bottom: 0.5rem;">Dry Season Sediment</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-green);">179.0 mg/kg</div>
                <div style="font-size: 0.75rem; color: #64748b; margin-top: 0.3rem;">Zinc nearly doubles</div>
              </div>
            </div>

            <p style="font-size: 0.9rem; color: #64748b; background: var(--water-blue); padding: 1rem; border-radius: 8px;">
              <strong>Implication:</strong> This cyclical pattern means contamination persists year-round—not just during wet season floods. Dry season sediment reservoirs continuously release metals to overlying water at slow, chronic rates. This is the long-term health threat to downstream communities.
            </p>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Interactive 3D Contamination Models</h3>
            <p style="margin-bottom: 1rem;">Explore spatial-temporal evolution of each metal (rotate, zoom, inspect concentration gradients):</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
              <div class="viz-container">
                <iframe src="visualizations/3d/arsenic_3d_surface_corrected.html"></iframe>
              </div>
              <div class="viz-container">
                <iframe src="visualizations/3d/lead_3d_surface_corrected.html"></iframe>
              </div>
              <div class="viz-container">
                <iframe src="visualizations/3d/cadmium_3d_surface_corrected.html"></iframe>
              </div>
              <div class="viz-container">
                <iframe src="visualizations/3d/zinc_3d_surface_corrected.html"></iframe>
              </div>
            </div>
          </div>

          <div class="research-card" style="grid-column: span 12;">
            <h4>Spatial Persistence & Transboundary Transport</h4>
            <p>
              Despite 800+ km of transport and dilution from tributary confluence, contamination remains detectable at the Argentina/Paraguay border. <strong>Potosí mining zone concentrations (pH 4–6) persist with minimal natural attenuation over the 8-year monitoring period.</strong>
            </p>
            <div class="key-finding">
              <strong>Transboundary Implications:</strong> Lead concentrations at the border (700–850 km downstream) still exceed 2–3× WHO drinking water limits during wet season events. This confirms that Bolivia's mining-driven contamination directly impacts Paraguay and Argentina's water supplies for 1.5+ million people, establishing shared responsibility for remediation under international water law.
            </div>
          </div>
        </div>
      `,

      strategy: `
        <header>
          <h2>Remediation Strategy & Cost-Benefit Analysis</h2>
          <p>Phased, geochemically-targeted approach for the Pilcomayo basin</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>Executive Summary</h3>
            <p style="font-size: 0.95rem; line-height: 1.7;">
              A comprehensive remediation plan targeting high-priority contamination zones with cost-effective technologies. The strategy prioritizes <strong>source control, passive treatment systems, and phytoremediation</strong> over energy-intensive active technologies, suitable for remote areas with limited grid electricity and technical capacity.
            </p>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-top: 1rem; background: var(--water-blue); padding: 1rem; border-radius: 8px;">
              <strong>Estimated Total Cost:</strong> USD $2.17M – $4.78M (5-year phased implementation)
              <br><strong>Affected Population:</strong> 1.5 million people in three countries
              <br><strong>Expected Metal Load Reduction:</strong> 40–65% at priority hotspots
            </p>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Phase 1: Source Control</h3>
            <p style="margin-bottom: 1rem; font-weight: 600; color: var(--deep-stream);">USD $180K–$240K</p>
            <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">
              <strong>Goal:</strong> Establish real-time monitoring network at primary mining discharge points.
            </p>
            <div class="key-finding">
              <strong>Actions:</strong>
              <br>• Deploy 5–7 automated water quality sensors
              <br>• Install early warning systems (WhatsApp alerts to communities)
              <br>• Quantify baseline discharge loads
              <br>• Establish baseline for remediation efficacy tracking
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Phase 2: Passive Treatment</h3>
            <p style="margin-bottom: 1rem; font-weight: 600; color: var(--bol-yellow);">USD $420K–$580K</p>
            <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">
              <strong>Goal:</strong> Construct sulfate-reducing wetlands at Hotspots A & C.
            </p>
            <div class="key-finding">
              <strong>Technology:</strong>
              <br>• Compost-amended anoxic ponds (2–3 hectares each)
              <br>• 60–75% removal efficiency for dissolved metals
              <br>• Biogenic H₂S precipitation pathway
              <br>• Low O&M burden (manual vegetation clearing only)
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Phase 3: Phytoremediation</h3>
            <p style="margin-bottom: 1rem; font-weight: 600; color: var(--bol-green);">USD $95K–$140K/yr</p>
            <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">
              <strong>Goal:</strong> Long-term metal uptake via riparian vegetation.
            </p>
            <div class="key-finding">
              <strong>Species & Outcomes:</strong>
              <br>• Vetiver grass (deep root system, 40+ year lifespan)
              <br>• Water hyacinth (high bioaccumulation, seasonal rotation)
              <br>• Bank stabilization & erosion control
              <br>• Carbon sequestration co-benefit
            </div>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Technology Comparison</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
              <thead>
                <tr style="background: var(--water-blue);">
                  <th style="padding: 0.8rem; text-align: left; border: 1px solid var(--border-soft);">Technology</th>
                  <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Removal %</th>
                  <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Capital Cost</th>
                  <th style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">O&M Cost</th>
                  <th style="padding: 0.8rem; text-align: left; border: 1px solid var(--border-soft);">Feasibility</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #f0fdf4;">
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft);"><strong>Limestone Leach Beds</strong></td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">40–60%</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">$50K–80K</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Low</td>
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft); color: var(--bol-green);">Excellent</td>
                </tr>
                <tr>
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft);"><strong>Constructed Wetlands</strong></td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">60–75%</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">$210K–290K</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Low–Med</td>
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft); color: var(--bol-green);">Good (land dependent)</td>
                </tr>
                <tr style="background: #f8fafc;">
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft);"><strong>Phytoremediation</strong></td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">20–40%</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">$5K/hectare</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">Very Low</td>
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft); color: var(--bol-green);">Excellent (40+ yr)</td>
                </tr>
                <tr>
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft);"><strong>Membrane Filtration</strong></td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">90–95%</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">$500K–1M</td>
                  <td style="padding: 0.8rem; text-align: center; border: 1px solid var(--border-soft);">High</td>
                  <td style="padding: 0.8rem; border: 1px solid var(--border-soft); color: var(--bol-red);">Poor (remote sites)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `,

      team: `
        <header>
          <h2>Our Team</h2>
          <p>Interdisciplinary scientists, hydrologists, and data analysts at UCSB Bren School</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 4;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--forest-bg)); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 700;">KB</div>
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.3rem;">Katerina Bischel</h3>
              <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 0.8rem;">Principal Investigator • Environmental Scientist • M.E.S.M. 2026</p>
              <span style="display: inline-block; background: var(--water-blue); color: var(--deep-stream); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">UCSB Bren</span>
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--deep-stream), #0ea5e9); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 700;">AK</div>
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.3rem;">Dr. Arturo Keller</h3>
              <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 0.8rem;">Faculty Advisor • Nanoscience & Environmental Engineering</p>
              <span style="display: inline-block; background: var(--water-blue); color: var(--deep-stream); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">UCSB Bren</span>
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--bol-green), var(--forest-bg)); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 700;">BR</div>
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.3rem;">UCSB Bren School</h3>
              <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 0.8rem;">Academic Institutional Support • Project Funding & Data Infrastructure</p>
              <span style="display: inline-block; background: var(--water-blue); color: var(--deep-stream); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Partners</span>
            </div>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Collaborating Institutions</h3>
            <p style="margin-bottom: 1.5rem;">
              This research was conducted in collaboration with:
            </p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
              <div style="border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <p style="font-weight: 600; color: var(--deep-stream); margin: 0;">Tomás Frías University</p>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0.5rem 0 0 0;">Potosí, Bolivia</p>
              </div>
              <div style="border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <p style="font-weight: 600; color: var(--deep-stream); margin: 0;">Bolivian Government</p>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0.5rem 0 0 0;">Trinational Commission</p>
              </div>
              <div style="border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <p style="font-weight: 600; color: var(--deep-stream); margin: 0;">Indigenous Communities</p>
                <p style="font-size: 0.85rem; color: #64748b; margin: 0.5rem 0 0 0;">Cantumarca & Weenhayek</p>
              </div>
            </div>
          </div>
        </div>
      `,

      contact: `
        <header>
          <h2>Get In Touch</h2>
          <p>Questions about the research or interested in remediation partnerships?</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 6;">
            <h3><i class="fas fa-envelope"></i> Contact Information</h3>
            <p style="margin-bottom: 1rem;">
              <strong>Email:</strong><br>
              <a href="mailto:research@riverremedy.org" style="color: var(--deep-stream); text-decoration: none; font-weight: 600;">research@riverremedy.org</a>
            </p>
            <p style="margin-bottom: 1rem;">
              <strong>Institution:</strong><br>
              UCSB Bren School of Environmental Science & Management<br>
              Santa Barbara, California
            </p>
            <p>
              <strong>Collaboration Interests:</strong><br>
              • Remediation technology deployment<br>
              • Health impact assessments<br>
              • Air quality monitoring<br>
              • Ecosystem recovery studies<br>
              • Community engagement initiatives
            </p>
          </div>

          <div class="tile" style="grid-column: span 6;">
            <h3><i class="fas fa-comments"></i> Send us a Message</h3>
            <form style="display: grid; gap: 1rem;">
              <input type="text" placeholder="Your Name" style="padding: 0.8rem; border: 1px solid var(--border-soft); border-radius: 6px; font-family: inherit; font-size: 0.9rem;">
              <input type="email" placeholder="your@email.com" style="padding: 0.8rem; border: 1px solid var(--border-soft); border-radius: 6px; font-family: inherit; font-size: 0.9rem;">
              <textarea placeholder="Your message..." style="padding: 0.8rem; border: 1px solid var(--border-soft); border-radius: 6px; font-family: inherit; font-size: 0.9rem; resize: vertical; min-height: 120px;"></textarea>
              <button style="padding: 0.8rem; background: var(--deep-stream); color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1';">Send Message</button>
            </form>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Frequently Asked Questions</h3>

            <div class="research-card">
              <h4>How can I access the raw data?</h4>
              <p>All water and sediment chemistry data are publicly available in our GitHub repository with full QA/QC documentation. Visit <strong>github.com/katerinabischel/River_Remedy</strong> for sample metadata, analysis scripts, and supplementary materials.</p>
            </div>

            <div class="research-card">
              <h4>Are remediation technologies ready for deployment?</h4>
              <p>Phase 1 (monitoring infrastructure) is immediately deployable and can begin within 6 months of funding. Phases 2–3 require pilot testing (12–18 months) and community engagement. We actively support organizations interested in implementation.</p>
            </div>

            <div class="research-card">
              <h4>Can universities collaborate on extensions?</h4>
              <p>Yes! We welcome academic partnerships for air quality monitoring, health impact assessments, and ecosystem recovery studies. Contact us directly to discuss collaborative research opportunities.</p>
            </div>

            <div class="research-card">
              <h4>How do I cite this research?</h4>
              <p>Full citation: <strong>Bischel, K., Keller, A., et al. (2024). River Remedy: Spatiotemporal Assessment of Heavy Metal Contamination and Geochemically-Targeted Remediation in the Pilcomayo River Basin. UCSB Bren School.</strong> Available at github.com/katerinabischel/River_Remedy</p>
            </div>
          </div>
        </div>
      `
    }
  },

  es: {
    pages: {
      overview: `
        <header>
          <h2>Análisis de Contaminación por Metales Pesados: Cuenca del Río Pilcomayo</h2>
          <p>Análisis espaciotemporal integral de la migración de contaminantes (2016–2024) | Datos: Comisión Trinacional</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3><i class="fas fa-water"></i> Resumen de la Cuenca y el Ciclo Estacional de Metales</h3>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem;">
              La Cuenca del Río Pilcomayo abarca <strong>Bolivia, Argentina y Paraguay</strong>, con cabeceras en la región minera de Potosí que experimenta más de 400 años de intensa actividad minera. Esta investigación analiza patrones de contaminación por metales pesados que afectan a aproximadamente <span class="stat-highlight">1.5 millones de personas</span> que dependen del río para agua potable, agricultura y pesca.
            </p>
            <p style="font-size: 0.95rem; line-height: 1.7; background: var(--water-blue); padding: 1rem; border-radius: 8px;">
              <strong style="color: var(--deep-stream);">El Ciclo de Transición Estacional:</strong> Las lluvias en las cabeceras mineras de Potosí desencadenan <strong>movilización</strong> en la columna de agua durante la temporada de lluvia (aumentos de 5–30×). Conforme el flujo se estabiliza en la estación seca, los metales se adsorben a partículas finas y se asientan en el <strong>sedimento</strong>, creando reservorios tóxicos persistentes río abajo. Este patrón cíclico crea riesgos de contaminación tanto aguda como crónica en toda la cuenca.
            </p>
          </div>

          <div class="tile" style="grid-column: span 8;">
            <h3>Red de Monitoreo en Toda la Cuenca</h3>
            <div class="viz-container">
              <iframe src="visualizations/station_map_PERFECT.html"></iframe>
            </div>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 1rem; line-height: 1.5;">
              <strong>Fuentes de Datos:</strong> 477 muestras de agua y 959 muestras de sedimento de 46 estaciones de monitoreo en tres países. Las estaciones abarcan desde las cabeceras de Potosí hasta las llanuras de Paraguay, capturando el gradiente completo de contaminación de la cuenca.
            </p>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Perfiles de Retención de Sedimentos</h3>
            <p style="font-size: 0.82rem; color: #64748b; margin-bottom: 1rem;">Coeficientes de Partición Medianos (L/kg):</p>
            <div style="background: var(--water-blue); padding: 1.2rem; border-radius: 8px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom: 1px solid #bae6fd; padding-bottom:5px;">
                <strong>Plomo (Pb)</strong> <span style="font-weight: 700;">1,667</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom: 1px solid #bae6fd; padding-bottom:5px;">
                <strong>Arsénico (As)</strong> <span style="font-weight: 700;">919</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <strong>Cadmio (Cd)</strong> <span style="color: #ef4444; font-weight:700;">160</span>
              </div>
            </div>
            <p style="font-size: 0.75rem; margin-top: 1rem; line-height: 1.5; background: #fef2f2; padding: 0.8rem; border-radius: 6px; border-left: 3px solid #ef4444;">
              <strong>Hallazgo Crítico:</strong> La baja retención del cadmio (10× menos que el plomo) indica que es el metal más móvil, planteando el mayor riesgo de transporte río abajo en la columna de agua.
            </p>
          </div>
        </div>

        <h2 class="section-title"><i class="fas fa-chart-bar"></i> Estadísticas Clave de la Cuenca</h2>
        <div class="stat-tiles">
          <div class="stat-tile">
            <div class="stat-value">1.5M</div>
            <div class="stat-label">Personas Afectadas</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">46</div>
            <div class="stat-label">Estaciones de Monitoreo</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">1,436</div>
            <div class="stat-label">Muestras Totales</div>
          </div>
          <div class="stat-tile">
            <div class="stat-value">400+</div>
            <div class="stat-label">Años de Minería</div>
          </div>
        </div>
      `,

      partitioning: `
        <header>
          <h2>Análisis de Partición Sedimento-Agua</h2>
          <p>Controles geoquímicos empíricos sobre la distribución de metales y biodisponibilidad</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>Coeficientes de Distribución (Kd) — Jerarquía de Movilidad de Metales</h3>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
              La magnitud de la partición sedimento-agua en toda la Cuenca del Pilcomayo refleja una jerarquía distinta de movilidad de metales, con valores medianos de Kd abarcando casi un orden de magnitud entre los elementos más y menos secuestrados. <strong>El plomo exhibe la mayor afinidad por la fase sólida (Kd mediano: 1,667 L/kg)</strong>, sugiriendo inmovilización robusta bajo condiciones prevalentes de la cuenca. El arsénico y zinc muestran retención moderada a alta (Kd: 908 L/kg y 664 L/kg, respectivamente), mientras que <strong>el cadmio permanece significativamente más lábil (Kd mediano: 200 L/kg)</strong>, representando el mayor riesgo para transporte río abajo a larga distancia.
            </p>
          </div>
        </div>
      `,

      hypoxic: `
        <header>
          <h2>Eventos Hipóxicos y Movilización de Metales</h2>
          <p>Análisis de tres episodios anóxicos y liberación de metales impulsada por oxígeno disuelto (2016–2024)</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3><i class="fas fa-exclamation-circle"></i> Tres Eventos Hipóxicos Identificados</h3>
            <p style="margin-bottom: 1.5rem;">La cuenca del Pilcomayo experimentó tres episodios hipóxicos documentados (OD &lt; 4 mg/L):</p>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 1.2rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                <div style="font-size: 0.85rem; font-weight: 700; color: #991b1b; text-transform: uppercase; margin-bottom: 0.5rem;">Evento 1</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #7f1d1d;">Tarapaya, Abril 2016</div>
                <div style="font-size: 0.9rem; color: #991b1b; margin-top: 0.5rem;">OD = 3.36 mg/L</div>
              </div>

              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 1.2rem; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <div style="font-size: 0.85rem; font-weight: 700; color: #92400e; text-transform: uppercase; margin-bottom: 0.5rem;">Evento 2 (CLAVE)</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #b45309;">Potosí – Naciente, Oct 2017</div>
                <div style="font-size: 0.9rem; color: #92400e; margin-top: 0.5rem;">OD = 2.84 mg/L</div>
                <div style="font-size: 0.8rem; color: #78350f; margin-top: 0.8rem; font-weight: 600;">✓ Análisis de enriquecimiento pre/post</div>
              </div>

              <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 1.2rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                <div style="font-size: 0.85rem; font-weight: 700; color: #991b1b; text-transform: uppercase; margin-bottom: 0.5rem;">Evento 3</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: #7f1d1d;">La Quiaca, Feb 2024</div>
                <div style="font-size: 0.9rem; color: #991b1b; margin-top: 0.5rem;">OD = 2.61 mg/L</div>
              </div>
            </div>
          </div>
        </div>
      `,

      texture: `
        <header>
          <h2>Textura del Sedimento y Controles de Contaminación</h2>
          <p>Distribución del tamaño de grano, dinámicas estacionales y tendencias temporales en la zona de Potosí (2016–2024)</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>Hallazgo Clave: La Contaminación Minera Anula el Control Textural</h3>
            <div style="background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%); padding: 1.5rem; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 1.5rem;">
              <p style="margin: 0; color: #7f1d1d;">
                <strong>La textura NO controla la contaminación en la zona minera de Potosí.</strong> Las medianas de arsénico son casi planas en todas las cinco clases texturales (15–21 mg/kg), demostrando que la contaminación derivada de la minería es lo suficientemente omnipresente como para anular los efectos naturales de ordenamiento textural.
              </p>
            </div>
          </div>

          <div class="research-card" style="grid-column: span 12;">
            <h4><i class="fas fa-warning"></i> Crisis Emergente de Mercurio</h4>
            <p>
              Las concentraciones de mercurio, que permanecieron cerca de cero hasta 2019, se dispararon a 1.3 mg/kg durante la estación seca de 2021, alcanzando un máximo histórico de <strong>2.3 mg/kg en la estación húmeda de 2024</strong>—<strong>13× la pauta de agua dulce de la EPA de 0.174 mg/kg</strong>. Esta tendencia emergente, junto con un pico simultáneo de cadmio a 5.0 mg/kg, sugiere un cambio de fuente río arriba distinto.
            </p>
          </div>
        </div>
      `,

      migration: `
        <header>
          <h2>Patrones de Migración Espaciotemporal</h2>
          <p>Gradiente longitudinal 850+ km y evolución temporal de 8 años (2016–2024)</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>El Ciclo de Transición Estacional</h3>
            <p style="margin-bottom: 1rem;">
              La característica definitoria de la contaminación del Pilcomayo es la <strong>reversión estacional entre fases de agua y sedimento</strong>. La estación húmeda (nov–abr) muestra un enriquecimiento espectacular de la columna de agua, mientras que los sedimentos permanecen relativamente estables. La estación seca muestra lo opuesto: las concentraciones de agua se desploman mientras los metales precipitan y se asientan en el lecho del río.
            </p>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-red); text-transform: uppercase; margin-bottom: 0.5rem;">Agua Estación Húmeda</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-red);">47.5 µg/L</div>
              </div>

              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-red); text-transform: uppercase; margin-bottom: 0.5rem;">Agua Estación Seca</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-red);">15.0 µg/L</div>
              </div>

              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-green); text-transform: uppercase; margin-bottom: 0.5rem;">Sedimento Estación Húmeda</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-green);">88.8 mg/kg</div>
              </div>

              <div style="background: white; border: 1px solid var(--border-soft); padding: 1rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--bol-green); text-transform: uppercase; margin-bottom: 0.5rem;">Sedimento Estación Seca</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--bol-green);">179.0 mg/kg</div>
              </div>
            </div>
          </div>

          <div class="tile" style="grid-column: span 12;">
            <h3>Modelos Interactivos 3D de Contaminación</h3>
            <p style="margin-bottom: 1rem;">Explora la evolución espaciotemporal de cada metal (rota, amplía, inspecciona gradientes de concentración):</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
              <div class="viz-container">
                <iframe src="visualizations/3d/arsenic_3d_surface_corrected.html"></iframe>
              </div>
              <div class="viz-container">
                <iframe src="visualizations/3d/lead_3d_surface_corrected.html"></iframe>
              </div>
              <div class="viz-container">
                <iframe src="visualizations/3d/cadmium_3d_surface_corrected.html"></iframe>
              </div>
              <div class="viz-container">
                <iframe src="visualizations/3d/zinc_3d_surface_corrected.html"></iframe>
              </div>
            </div>
          </div>
        </div>
      `,

      strategy: `
        <header>
          <h2>Estrategia de Remediación y Análisis de Costo-Beneficio</h2>
          <p>Enfoque fasal geoquímicamente dirigido para la cuenca del Pilcomayo</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 12;">
            <h3>Resumen Ejecutivo</h3>
            <p style="font-size: 0.95rem; line-height: 1.7;">
              Un plan de remediación integral dirigido a zonas de contaminación de alta prioridad con tecnologías rentables. La estrategia prioriza <strong>control de fuentes, sistemas de tratamiento pasivo y fitorremediación</strong> sobre tecnologías activas de alta energía.
            </p>
            <p style="font-size: 0.95rem; line-height: 1.7; margin-top: 1rem; background: var(--water-blue); padding: 1rem; border-radius: 8px;">
              <strong>Costo Total Estimado:</strong> USD $2.17M – $4.78M (implementación fasal de 5 años)
            </p>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Fase 1: Control de Fuentes</h3>
            <p style="margin-bottom: 1rem; font-weight: 600; color: var(--deep-stream);">USD $180K–$240K</p>
            <div class="key-finding">
              <strong>Acciones:</strong>
              <br>• Desplegar 5–7 sensores automáticos de calidad del agua
              <br>• Instalar sistemas de alerta temprana
              <br>• Cuantificar cargas de descarga de línea base
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Fase 2: Tratamiento Pasivo</h3>
            <p style="margin-bottom: 1rem; font-weight: 600; color: var(--bol-yellow);">USD $420K–$580K</p>
            <div class="key-finding">
              <strong>Tecnología:</strong>
              <br>• Humedales anóxicos enriquecidos con compost
              <br>• Eficiencia de eliminación 60–75%
              <br>• Vía de precipitación de H₂S biogénico
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <h3>Fase 3: Fitorremediación</h3>
            <p style="margin-bottom: 1rem; font-weight: 600; color: var(--bol-green);">USD $95K–$140K/año</p>
            <div class="key-finding">
              <strong>Especies y Resultados:</strong>
              <br>• Vetiver (sistema de raíces profundas)
              <br>• Jacinto de agua (alta bioacumulación)
              <br>• Estabilización de riberas
            </div>
          </div>
        </div>
      `,

      team: `
        <header>
          <h2>Nuestro Equipo</h2>
          <p>Científicos interdisciplinarios, hidrólogos y analistas de datos de la Escuela Bren de UCSB</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 4;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--forest-bg)); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 700;">KB</div>
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.3rem;">Katerina Bischel</h3>
              <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 0.8rem;">Investigadora Principal • Científica Ambiental • M.E.S.M. 2026</p>
              <span style="display: inline-block; background: var(--water-blue); color: var(--deep-stream); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">UCSB Bren</span>
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--deep-stream), #0ea5e9); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 700;">AK</div>
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.3rem;">Dr. Arturo Keller</h3>
              <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 0.8rem;">Asesor de Facultad • Nanociencia e Ingeniería Ambiental</p>
              <span style="display: inline-block; background: var(--water-blue); color: var(--deep-stream); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">UCSB Bren</span>
            </div>
          </div>

          <div class="tile" style="grid-column: span 4;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--bol-green), var(--forest-bg)); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: 700;">BR</div>
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.3rem;">Escuela Bren UCSB</h3>
              <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 0.8rem;">Apoyo Institucional Académico • Financiamiento del Proyecto</p>
              <span style="display: inline-block; background: var(--water-blue); color: var(--deep-stream); padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Socios</span>
            </div>
          </div>
        </div>
      `,

      contact: `
        <header>
          <h2>Ponte en Contacto</h2>
          <p>¿Preguntas sobre la investigación o interesado en asociaciones de remediación?</p>
        </header>

        <div class="dashboard-grid">
          <div class="tile" style="grid-column: span 6;">
            <h3><i class="fas fa-envelope"></i> Información de Contacto</h3>
            <p style="margin-bottom: 1rem;">
              <strong>Correo Electrónico:</strong><br>
              <a href="mailto:research@riverremedy.org" style="color: var(--deep-stream); text-decoration: none; font-weight: 600;">research@riverremedy.org</a>
            </p>
            <p>
              <strong>Intereses de Colaboración:</strong><br>
              • Implementación de tecnología de remediación<br>
              • Evaluaciones de impacto en la salud<br>
              • Monitoreo de calidad del aire<br>
              • Estudios de recuperación del ecosistema
            </p>
          </div>

          <div class="tile" style="grid-column: span 6;">
            <h3><i class="fas fa-comments"></i> Envíanos un Mensaje</h3>
            <form style="display: grid; gap: 1rem;">
              <input type="text" placeholder="Tu Nombre" style="padding: 0.8rem; border: 1px solid var(--border-soft); border-radius: 6px; font-family: inherit; font-size: 0.9rem;">
              <input type="email" placeholder="tu@email.com" style="padding: 0.8rem; border: 1px solid var(--border-soft); border-radius: 6px; font-family: inherit; font-size: 0.9rem;">
              <textarea placeholder="Tu mensaje..." style="padding: 0.8rem; border: 1px solid var(--border-soft); border-radius: 6px; font-family: inherit; font-size: 0.9rem; resize: vertical; min-height: 120px;"></textarea>
              <button style="padding: 0.8rem; background: var(--deep-stream); color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; transition: 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1';">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      `
    }
  }
};
