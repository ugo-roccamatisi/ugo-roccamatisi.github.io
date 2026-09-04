// Données des projets, au format STAR (Situation, Tâche, Actions, Résultats).
// Pour ajouter un projet : copier un bloc, remplir, déposer les images dans images/.
// banner : image de la carte ; gallery : aperçus affichés dans la fenêtre de détail.
window.PROJECTS = [
  {
    id: "btem",
    banner: "images/projects/btem-journee.png",
    tech: ["Python", "SciPy", "Nelder-Mead", "PyTorch", "Streamlit"],
    links: [],
    gallery: [
      { src: "images/projects/btem-journee.png", fr: "Journée complète : modèle vs capteur", en: "Full day: model vs sensor" },
      { src: "images/projects/btem-streamlit.png", fr: "Application Streamlit de prédiction", en: "Streamlit prediction app" },
      { src: "images/projects/pinn-param.png", fr: "PINN paramétrique vs solveur de référence", en: "Parametric PINN vs reference solver" }
    ],
    fr: {
      title: "Température des freins A320 : physique & PINN",
      excerpt: "Mémoire Airbus & Cranfield : modèle thermique calibré à ~3 °C, prolongé par des PINN.",
      meta: "Mémoire de recherche, Airbus & Cranfield · mai à août 2026",
      situation: "Airbus souhaite estimer la température des freins carbone de l'A320 tout au long d'une journée d'exploitation, à partir des seules données de vol. Mémoire de recherche mené à Cranfield University avec le soutien d'Airbus.",
      task: "Développer un modèle de prédiction complet, précis au toucher des roues malgré un capteur échantillonné à 30 secondes et un capteur de couple qui dérive.",
      actions: [
        "Conception d'un modèle thermique à paramètres localisés (14 nœuds) en Python, calibré par Nelder-Mead multi-départ sur essais en vol et vols commerciaux.",
        "Développement d'un outil complet : segmentation automatique des vols, détection du toucher, enveloppe de sensibilité, en ligne de commande et application Streamlit.",
        "Extension personnelle : PINN paramétrique en PyTorch, puis résolution du problème inverse sur données synthétiques."
      ],
      results: [
        "Précision de l'ordre de 3 °C au toucher sur les vols de validation.",
        "PINN généralisant à des scénarios non vus (RMSE, erreur quadratique moyenne, de 3 à 20 K sur 2 h).",
        "Énergie de freinage identifiée à 2 % près à partir de 5 minutes d'un capteur bruité."
      ]
    },
    en: {
      title: "A320 brake temperature: physics & PINNs",
      excerpt: "Airbus & Cranfield thesis: thermal model calibrated to ~3 °C, extended with PINNs.",
      meta: "Research thesis, Airbus & Cranfield · May to Aug. 2026",
      situation: "Airbus wants to estimate A320 carbon brake temperature throughout a full day of operations, from flight data alone. Research thesis conducted at Cranfield University with Airbus support.",
      task: "Build a complete prediction model, accurate at touchdown despite a sensor sampled every 30 seconds and a drifting torque sensor.",
      actions: [
        "Designed a lumped-parameter thermal model (14 nodes) in Python, calibrated with multi-start Nelder-Mead on flight-test and commercial flights.",
        "Built a complete tool: automatic flight segmentation, touchdown detection, sensitivity envelope, as a command line and a Streamlit app.",
        "Personal extension: parametric PINN in PyTorch, then inverse problem resolution on synthetic data."
      ],
      results: [
        "Accuracy of about 3 °C at touchdown on validation flights.",
        "PINN generalising to unseen scenarios (RMSE, root mean square error, of 3 to 20 K over 2 h).",
        "Braking energy identified within 2% from 5 minutes of a noisy sensor."
      ]
    }
  },
  {
    id: "bwb",
    banner: "images/projects/bwb-1.png",
    tech: ["SolidWorks", "3DEXPERIENCE", "Star-CCM+", "OpenVSP", "EASA CS-25"],
    links: [{ href: "memoire-BWB.pdf", label_fr: "Mémoire de projet", label_en: "Project report" }],
    gallery: [
      { src: "images/projects/bwb-2.png", fr: "Coupe du turboréacteur BW-25", en: "BW-25 turbofan cross-section" },
      { src: "images/projects/bwb-3.jpg", fr: "Nacelle et soufflante", en: "Nacelle and fan" },
      { src: "images/projects/bwb-4.jpg", fr: "Architecture structurale du G-VEGA", en: "G-VEGA structural layout" },
      { src: "images/projects/bwb-5.png", fr: "Coupe : cabine, réservoirs hydrogène et moteur", en: "Cutaway: cabin, hydrogen tanks and engine" }
    ],
    fr: {
      title: "Avion BWB à propulsion hydrogène",
      excerpt: "Responsable intégration moteurs dans une équipe internationale de 62 étudiants.",
      meta: "Cranfield, appuyé par Airbus · projet de groupe (62) · oct. 2025 à mai 2026",
      situation: "Projet phare du MSc à Cranfield, appuyé par Airbus : concevoir un avion aile volante (Blended Wing Body) à propulsion hydrogène pour décarboner le long-courrier, en équipe internationale de 62 étudiants.",
      task: "Responsable de l'intégration moteurs : positionner la propulsion sur l'aile volante et tenir les exigences de certification, en collaboration étroite avec les autres pôles pour concilier les contraintes de chacun.",
      actions: [
        "Positionnement des turboréacteurs, design de la nacelle et des inverseurs de poussée (SolidWorks, 3DEXPERIENCE).",
        "Arbitrages entre traînée d'interférence, accès maintenance et bruit en cabine.",
        "Analyse de conformité aux normes EASA CS-25, notamment au risque d'éclatement de rotor (rotor burst)."
      ],
      results: [
        "Configuration défendue en soutenance devant un jury d'experts de l'industrie.",
        "Mémoire de projet consultable ci-dessous."
      ]
    },
    en: {
      title: "Hydrogen-powered BWB aircraft",
      excerpt: "Engine integration lead in an international team of 62 students.",
      meta: "Cranfield, backed by Airbus · group project (62) · Oct. 2025 to May 2026",
      situation: "Flagship MSc project at Cranfield, backed by Airbus: design a hydrogen-powered Blended Wing Body aircraft to decarbonize long-haul aviation, in an international team of 62 students.",
      task: "Engine integration lead: position the propulsion on the flying wing and meet certification requirements, working closely with the other teams to reconcile everyone's constraints.",
      actions: [
        "Turbofan positioning, nacelle and thrust reverser design (SolidWorks, 3DEXPERIENCE).",
        "Trade-offs between interference drag, maintenance access and cabin noise.",
        "Compliance analysis with EASA CS-25 standards, notably the rotor burst hazard."
      ],
      results: [
        "Configuration defended before a jury of industry experts.",
        "Project report available below."
      ]
    }
  },
  {
    id: "saab",
    banner: "images/projects/saab-psd.png",
    tech: ["Python", "SciPy", "Welch", "ruptures"],
    links: [
      { href: "https://github.com/ugo-roccamatisi/ugo-roccamatisi.github.io/blob/main/saab_landing_sensor_spectral_analysis.ipynb", label_fr: "Notebook 1", label_en: "Notebook 1" },
      { href: "https://github.com/ugo-roccamatisi/ugo-roccamatisi.github.io/blob/main/saab_landing_touchdown_detection.ipynb", label_fr: "Notebook 2", label_en: "Notebook 2" }
    ],
    gallery: [
      { src: "images/projects/saab-psd.png", fr: "PSD de Welch post-toucher : les deux capteurs comparés", en: "Post-touchdown Welch PSD: both sensors compared" },
      { src: "images/projects/saab-spectro.png", fr: "Spectrogrammes temps-fréquence autour du toucher", en: "Time-frequency spectrograms around touchdown" },
      { src: "images/projects/saab-changepoint.png", fr: "Détection de rupture RBF vs estimation par pic d'amplitude", en: "RBF change-point detection vs amplitude-peak estimate" }
    ],
    fr: {
      title: "Données de vol d'un SAAB à l'atterrissage",
      excerpt: "Analyse spectrale et détection de rupture pour dater le toucher sur données FDR réelles.",
      meta: "Projet personnel, Cranfield (IVHM) · 2025 à 2026",
      situation: "Données d'essai en vol du Saab 340 de Cranfield (8 minutes autour de l'atterrissage, ≈49 Hz) : deux accéléromètres indépendants, une centrale montée en galley et le capteur du centre de gravité de l'avion, qui ne racontent pas la même histoire, et un toucher invisible à l'œil nu dans l'accélération brute.",
      task: "Évaluer la fiabilité relative des deux capteurs par méthodes spectrales, puis dater précisément le toucher en fusionnant les canaux de l'enregistreur de vol (FDR).",
      actions: [
        "Caractérisation spectrale (méthode de Welch, résolution Δf ≈ 0,38 Hz) : densités spectrales de puissance (PSD), cohérence inter-capteurs, spectrogrammes et niveaux vibratoires RMS (valeur efficace) par bandes, révélant une amplification locale du capteur galley (jusqu'à 14 fois la puissance du capteur de référence en hautes fréquences).",
        "Détection de rupture à noyau RBF (fonction de base radiale, bibliothèque ruptures) sur quatre canaux standardisés : altitude radio, sa dérivée, accélérations normale et longitudinale, sur une fenêtre de ±60 s.",
        "Analyse de sensibilité (sous-ensembles de canaux, balayage du paramètre du noyau) et réconciliation des deux estimations."
      ],
      results: [
        "Toucher daté à ±0,02 s de résolution, cohérent avec l'altitude radio à 0 ft, corrigeant d'environ 5 s l'estimation naïve par pic d'amplitude.",
        "Fiabilité des capteurs quantifiée bande par bande, méthodologie entièrement reproductible (tables de paramètres dans les notebooks)."
      ]
    },
    en: {
      title: "SAAB flight data during landing",
      excerpt: "Spectral analysis and change-point detection to timestamp touchdown from real FDR data.",
      meta: "Personal project, Cranfield (IVHM) · 2025 to 2026",
      situation: "Flight-test data from Cranfield's Saab 340 (8 minutes around landing, ≈49 Hz): two independent accelerometers, a galley-mounted IMU and the aircraft's centre-of-gravity sensor, telling different stories, and a touchdown invisible to the naked eye in the raw acceleration.",
      task: "Assess the relative reliability of both sensors with spectral methods, then precisely timestamp the touchdown by fusing flight data recorder (FDR) channels.",
      actions: [
        "Spectral characterization (Welch's method, Δf ≈ 0.38 Hz resolution): power spectral densities (PSD), inter-sensor coherence, spectrograms and band-limited RMS (root mean square) vibration levels, revealing local amplification at the galley sensor (up to 14 times the reference sensor's power at high frequencies).",
        "RBF (radial basis function) kernel change-point detection (ruptures library) on four standardized channels: radio altitude, its derivative, normal and longitudinal accelerations, within a ±60 s window.",
        "Sensitivity analysis (channel subsets, kernel parameter sweep) and reconciliation of the two estimates."
      ],
      results: [
        "Touchdown timestamped at ±0.02 s resolution, consistent with radio altitude at 0 ft, correcting the naive amplitude-peak estimate by about 5 s.",
        "Sensor reliability quantified band by band, with a fully reproducible methodology (parameter tables in the notebooks)."
      ]
    }
  },
  {
    id: "chu",
    banner: "images/projects/chu-app.png",
    tech: ["Llama 3", "scikit-learn", "MIMIC-IV"],
    links: [
      { href: "rapport-utilisateur.pdf", label_fr: "Rapport utilisateur", label_en: "User report" },
      { href: "rapport-technique.pdf", label_fr: "Rapport technique", label_en: "Technical report" }
    ],
    gallery: [
      { src: "images/projects/chu-app.png", fr: "Interface de l'application", en: "Application interface" },
      { src: "images/projects/chu-resultats.png", fr: "Résultats du modèle prédictif", en: "Predictive model results" }
    ],
    fr: {
      title: "Faire parler les données médicales avec l'IA",
      excerpt: "Publication IEEE SMC : IA d'aide à l'hôpital, 300 000 patients.",
      meta: "CHU de Lille & Sillage · projet de groupe (12) · sept. 2023 à févr. 2025",
      situation: "Le CHU de Lille et l'éditeur du dossier patient Sillage veulent aider les équipes soignantes à anticiper les flux de patients. Projet de 18 mois en équipe de 12 étudiants.",
      task: "Piloter le pôle « prédiction » et transformer des données cliniques brutes en prévisions utiles aux soignants.",
      actions: [
        "Fine-tuning de Llama 3 pour structurer automatiquement comptes rendus et notes cliniques.",
        "Entraînement d'un modèle ML sur 300 000 patients de la base MIMIC-IV.",
        "Coordination du pôle et rédaction scientifique."
      ],
      results: [
        "70 % de précision sur la durée de séjour et l'orientation post-hospitalisation.",
        "Article publié à la conférence internationale IEEE SMC."
      ]
    },
    en: {
      title: "Making medical data talk with AI",
      excerpt: "IEEE SMC publication: AI for hospitals, 300,000 patients.",
      meta: "CHU de Lille & Sillage · group project (12) · Sept. 2023 to Feb. 2025",
      situation: "CHU de Lille and the patient-record software company Sillage want to help medical teams anticipate patient flows. An 18-month project in a team of 12 students.",
      task: "Lead the prediction team and turn raw clinical data into forecasts useful to caregivers.",
      actions: [
        "Fine-tuned Llama 3 to automatically structure clinical reports and notes.",
        "Trained an ML model on 300,000 patients from the MIMIC-IV database.",
        "Coordinated the team and contributed to the scientific writing."
      ],
      results: [
        "70% accuracy on length of stay and post-hospitalization orientation.",
        "Paper published at the IEEE SMC international conference."
      ]
    }
  },
  {
    id: "vrp",
    banner: "images/projects/vrp-routes.png",
    tech: ["Python", "Q-Learning", "Optuna", "Streamlit"],
    links: [{ href: "rapport-ICO.pdf", label_fr: "Rapport", label_en: "Report" }],
    gallery: [
      { src: "images/projects/vrp-routes.png", fr: "Tournées optimisées (démo Streamlit)", en: "Optimized routes (Streamlit demo)" },
      { src: "images/projects/vrp-benchmark.png", fr: "Benchmark des algorithmes", en: "Algorithm benchmark" }
    ],
    fr: {
      title: "Tournées de véhicules : méta-heuristiques & Q-Learning",
      excerpt: "Recuit simulé puis Q-Learning : la meilleure performance sur le VRP à 100 clients.",
      meta: "Centrale Lille · projet de groupe (6) · mai 2025",
      situation: "Électif Intelligence Collaborative à Centrale Lille : le problème de tournées de véhicules (VRP), NP-difficile, en équipe de 6.",
      task: "Comparer équitablement méta-heuristiques, système multi-agents et apprentissage par renforcement.",
      actions: [
        "Construction d'un benchmark commun et reproductible, hyper-paramètres réglés avec Optuna.",
        "Développement d'un système multi-agents à boucle Top-N.",
        "Enchaînement recuit simulé puis Q-Learning tabulaire avec opérateurs 2-opt, et démonstrateur Streamlit."
      ],
      results: [
        "Coût réduit de 14 à 26 % selon les combinaisons d'agents.",
        "Meilleure performance du projet sur l'instance à 100 clients."
      ]
    },
    en: {
      title: "Vehicle routing: metaheuristics & Q-Learning",
      excerpt: "Simulated annealing then Q-Learning: best performance on the 100-client VRP.",
      meta: "Centrale Lille · group project (6) · May 2025",
      situation: "Collaborative Intelligence elective at Centrale Lille: the NP-hard vehicle routing problem (VRP), in a team of 6.",
      task: "Fairly compare metaheuristics, a multi-agent system and reinforcement learning.",
      actions: [
        "Built a shared, reproducible benchmark with Optuna-tuned hyper-parameters.",
        "Developed a Top-N loop multi-agent system.",
        "Chained simulated annealing then tabular Q-Learning with 2-opt operators, plus a Streamlit demo."
      ],
      results: [
        "Cost reduced by 14 to 26% depending on agent combinations.",
        "Best performance of the project on the 100-client instance."
      ]
    }
  },
  {
    id: "prophet",
    banner: "images/projects/prophet-forecast.png",
    tech: ["Python", "Prophet", "pandas"],
    links: [{ href: "https://github.com/ugo-roccamatisi/ugo-roccamatisi.github.io/blob/main/energy_prediction_portfolio.ipynb", label_fr: "Notebook", label_en: "Notebook" }],
    gallery: [
      { src: "images/projects/prophet-forecast.png", fr: "Mars 2017 : prédiction vs réalité", en: "March 2017: forecast vs reality" },
      { src: "images/projects/prophet-histo.png", fr: "20 ans de données et zone de prévision", en: "20 years of data and the forecast zone" },
      { src: "images/projects/prophet-saison.png", fr: "Composantes apprises : tendance et saisonnalités", en: "Learned components: trend and seasonalities" }
    ],
    fr: {
      title: "Prévision de consommation électrique",
      excerpt: "Prophet sur 20 ans de données horaires du réseau PJM : MAPE < 10 %.",
      meta: "Projet personnel · 2023",
      situation: "Projet personnel : 20 ans de consommation électrique horaire du réseau PJM Interconnection (Est des États-Unis, 25 000 à 60 000 MW), aux saisonnalités journalière, hebdomadaire et annuelle imbriquées.",
      task: "Construire une prévision robuste à ces saisonnalités multiples et aux effets calendaires, et l'évaluer rigoureusement.",
      actions: [
        "Analyse exploratoire complète et décomposition de la série en tendance, saisonnalités et résidus.",
        "Entraînement d'un modèle Prophet et évaluation sur une année de test (RMSE, MAE, MAPE).",
        "Comparaison contrôlée avec et sans jours fériés américains."
      ],
      results: [
        "MAPE (erreur moyenne absolue en pourcentage) de 9,7 % sur l'année de test (RMSE ≈ 4 100 MW pour une consommation moyenne de 31 000 MW), sous le seuil des 10 % jugé excellent en prévision énergétique.",
        "Effet des jours fériés mesuré et documenté honnêtement : gain marginal, avec pistes d'amélioration identifiées (météo en régresseur externe, gradient boosting)."
      ]
    },
    en: {
      title: "Electricity consumption forecasting",
      excerpt: "Prophet on 20 years of hourly PJM grid data: MAPE < 10%.",
      meta: "Personal project · 2023",
      situation: "Personal project: 20 years of hourly electricity consumption from the PJM Interconnection grid (eastern US, 25,000 to 60,000 MW), with nested daily, weekly and annual seasonalities.",
      task: "Build a forecast robust to these multiple seasonalities and calendar effects, and evaluate it rigorously.",
      actions: [
        "Full exploratory analysis and decomposition into trend, seasonalities and residuals.",
        "Trained a Prophet model and evaluated it on a one-year test set (RMSE, MAE, MAPE).",
        "Controlled comparison with and without US holidays."
      ],
      results: [
        "MAPE (mean absolute percentage error) of 9.7% on the test year (RMSE ≈ 4,100 MW for an average consumption of 31,000 MW), below the 10% threshold considered excellent in energy forecasting.",
        "Holiday effect measured and honestly documented: marginal gain, with identified improvements (weather as external regressor, gradient boosting)."
      ]
    }
  }
];
