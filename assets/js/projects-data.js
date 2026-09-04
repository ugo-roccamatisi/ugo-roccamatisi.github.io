// Données des projets. Pour ajouter un projet : copier un bloc, remplir, c'est tout.
// banner : image dans images/ (dégradé de secours si absente).
window.PROJECTS = [
  {
    id: "btem",
    banner: "images/btem-journee.png",
    tech: ["Python", "SciPy", "Nelder-Mead", "PyTorch", "Streamlit"],
    links: [],
    fr: {
      title: "Température des freins A320 : physique & PINN",
      excerpt: "Mémoire Airbus & Cranfield : modèle thermique calibré à ~3 °C, prolongé par des PINN.",
      meta: "Mémoire de recherche, Airbus & Cranfield · mai à août 2026",
      description: "Estimer la température des freins carbone de l'A320 sur une journée d'exploitation complète, à partir des données de vol.",
      contributions: [
        "Modèle thermique 14 nœuds calibré par Nelder-Mead multi-départ sur essais en vol et vols commerciaux : précision de l'ordre de 3 °C au toucher.",
        "Outil de prédiction complet : ligne de commande et application Streamlit.",
        "PINN paramétrique (RMSE 3 à 20 K sur 2 h) et problème inverse : énergie de freinage identifiée à 2 % près avec 5 minutes de capteur."
      ]
    },
    en: {
      title: "A320 brake temperature: physics & PINNs",
      excerpt: "Airbus & Cranfield thesis: thermal model calibrated to ~3 °C, extended with PINNs.",
      meta: "Research thesis, Airbus & Cranfield · May to Aug. 2026",
      description: "Estimate A320 carbon brake temperature over a full day of operations, from flight data.",
      contributions: [
        "14-node thermal model calibrated with multi-start Nelder-Mead on flight-test and commercial data: about 3 °C accuracy at touchdown.",
        "Complete prediction tool: command line and Streamlit app.",
        "Parametric PINN (RMSE 3 to 20 K over 2 h) and inverse problem: braking energy identified within 2% from 5 minutes of sensor data."
      ]
    }
  },
  {
    id: "bwb",
    banner: "images/bwb-1.png",
    tech: ["Catia V5", "3DEXPERIENCE", "EASA CS-25"],
    links: [{ href: "memoire-BWB.pdf", label_fr: "Mémoire de projet", label_en: "Project report" }],
    fr: {
      title: "Avion BWB à propulsion hydrogène",
      excerpt: "Responsable intégration moteurs dans une équipe internationale de 62 étudiants.",
      meta: "Cranfield, appuyé par Airbus · projet de groupe (62) · oct. 2025 à mai 2026",
      description: "Concevoir un avion aile volante à hydrogène aux standards industriels, pour décarboner le long-courrier.",
      contributions: [
        "Positionnement des turboréacteurs, design de la nacelle et des inverseurs de poussée.",
        "Coordination CAO globale de l'équipe et conformité EASA CS-25."
      ]
    },
    en: {
      title: "Hydrogen-powered BWB aircraft",
      excerpt: "Engine integration lead in an international team of 62 students.",
      meta: "Cranfield, backed by Airbus · group project (62) · Oct. 2025 to May 2026",
      description: "Design a hydrogen flying-wing aircraft to industrial standards, to decarbonize long-haul aviation.",
      contributions: [
        "Turbofan positioning, nacelle and thrust reverser design.",
        "Overall CAD coordination and EASA CS-25 compliance."
      ]
    }
  },
  {
    id: "saab",
    banner: "images/saab-psd.png",
    tech: ["Python", "SciPy", "Welch", "ruptures"],
    links: [
      { href: "https://github.com/ugo-roccamatisi/ugo-roccamatisi.github.io/blob/main/saab_landing_sensor_spectral_analysis.ipynb", label_fr: "Notebook 1", label_en: "Notebook 1" },
      { href: "https://github.com/ugo-roccamatisi/ugo-roccamatisi.github.io/blob/main/saab_landing_touchdown_detection.ipynb", label_fr: "Notebook 2", label_en: "Notebook 2" }
    ],
    fr: {
      title: "Données de vol d'un SAAB à l'atterrissage",
      excerpt: "Analyse spectrale et détection de rupture pour dater le toucher sur données FDR.",
      meta: "Projet personnel, Cranfield (IVHM) · 2025 à 2026",
      description: "Dater précisément le toucher à partir des enregistrements de vol, en évaluant d'abord la fiabilité des capteurs.",
      contributions: [
        "Caractérisation spectrale (Welch : PSD, cohérence inter-capteurs, spectrogramme).",
        "Raffinement du toucher par détection de rupture à noyau RBF sur ±60 s."
      ]
    },
    en: {
      title: "SAAB flight data during landing",
      excerpt: "Spectral analysis and change-point detection to timestamp touchdown from FDR data.",
      meta: "Personal project, Cranfield (IVHM) · 2025 to 2026",
      description: "Precisely timestamp the touchdown from flight records, after assessing sensor reliability.",
      contributions: [
        "Spectral characterization (Welch: PSD, inter-sensor coherence, spectrogram).",
        "Touchdown refinement via RBF kernel change-point detection within ±60 s."
      ]
    }
  },
  {
    id: "chu",
    banner: "images/chu-app.png",
    tech: ["Llama 3", "scikit-learn", "MIMIC-IV"],
    links: [
      { href: "rapport-utilisateur.pdf", label_fr: "Rapport utilisateur", label_en: "User report" },
      { href: "rapport-technique.pdf", label_fr: "Rapport technique", label_en: "Technical report" }
    ],
    fr: {
      title: "Faire parler les données médicales avec l'IA",
      excerpt: "Publication IEEE SMC : IA d'aide à l'hôpital, 300 000 patients.",
      meta: "CHU de Lille & Sillage · projet de groupe (12) · sept. 2023 à févr. 2025",
      description: "Une application IA pour aider les équipes soignantes à anticiper les flux patients.",
      contributions: [
        "Pilotage du pôle « prédiction » et article publié à la conférence internationale IEEE SMC.",
        "70 % de précision sur la durée de séjour (300 000 patients, fine-tuning de Llama 3)."
      ]
    },
    en: {
      title: "Making medical data talk with AI",
      excerpt: "IEEE SMC publication: AI for hospitals, 300,000 patients.",
      meta: "CHU de Lille & Sillage · group project (12) · Sept. 2023 to Feb. 2025",
      description: "An AI application helping medical teams anticipate patient flows.",
      contributions: [
        "Led the prediction team, with a paper published at the IEEE SMC international conference.",
        "70% accuracy on length of stay (300,000 patients, Llama 3 fine-tuning)."
      ]
    }
  },
  {
    id: "vrp",
    banner: "images/vrp-routes.png",
    tech: ["Python", "Q-Learning", "Optuna", "Streamlit"],
    links: [{ href: "rapport-ICO.pdf", label_fr: "Rapport", label_en: "Report" }],
    fr: {
      title: "Tournées de véhicules : méta-heuristiques & Q-Learning",
      excerpt: "Recuit simulé puis Q-Learning : la meilleure performance sur le VRP à 100 clients.",
      meta: "Centrale Lille · projet de groupe (6) · mai 2025",
      description: "Résoudre le VRP en confrontant méta-heuristiques, système multi-agents et renforcement.",
      contributions: [
        "Système multi-agents Top-N : coût réduit de 14 à 26 %.",
        "Meilleure performance : recuit simulé puis Q-Learning (2-opt). Démo Streamlit."
      ]
    },
    en: {
      title: "Vehicle routing: metaheuristics & Q-Learning",
      excerpt: "Simulated annealing then Q-Learning: best performance on the 100-client VRP.",
      meta: "Centrale Lille · group project (6) · May 2025",
      description: "Solve the VRP by pitting metaheuristics, a multi-agent system and reinforcement against each other.",
      contributions: [
        "Top-N multi-agent system: cost reduced by 14 to 26%.",
        "Best performance: simulated annealing then Q-Learning (2-opt). Streamlit demo."
      ]
    }
  },
  {
    id: "prophet",
    banner: "images/prophet-forecast.png",
    tech: ["Python", "Prophet", "pandas"],
    links: [{ href: "https://github.com/ugo-roccamatisi/ugo-roccamatisi.github.io/blob/main/energy_prediction_portfolio.ipynb", label_fr: "Notebook", label_en: "Notebook" }],
    fr: {
      title: "Prévision de consommation électrique",
      excerpt: "Prophet sur 20 ans de données horaires du réseau PJM.",
      meta: "Projet personnel · 2023",
      description: "Prévoir la consommation électrique du réseau PJM (est des États-Unis).",
      contributions: [
        "Décomposition tendance / saisonnalités / résidus sur 20 ans de données.",
        "Gains nets en RMSE/MAE en intégrant les jours fériés américains."
      ]
    },
    en: {
      title: "Electricity consumption forecasting",
      excerpt: "Prophet on 20 years of hourly PJM grid data.",
      meta: "Personal project · 2023",
      description: "Forecast electricity consumption of the PJM grid (eastern US).",
      contributions: [
        "Trend / seasonality / residual decomposition over 20 years of data.",
        "Clear RMSE/MAE gains by incorporating US holidays."
      ]
    }
  }
];
