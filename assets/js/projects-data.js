// Données des projets, au format STAR (Situation, Tâche, Actions, Résultats).
// Pour ajouter un projet : copier un bloc, remplir, déposer les images dans images/.
// banner : image de la carte ; gallery : aperçus affichés dans la fenêtre de détail.
window.PROJECTS = [
  {
    id: "btem",
    fit: "contain",
    banner: "images/projects/btem-assembly.webp",
    tech: ["Python", "SciPy", "Nelder-Mead", "Streamlit"],
    links: [{ href: "https://github.com/ugo-roccamatisi/master-thesis-brake-temperature-estimation-model", label_fr: "Code public assaini", label_en: "Sanitized public code" }],
    gallery: [
      { src: "images/projects/btem-assembly.webp", fr: "Ensemble roue-frein modélisé : vues en coupe, pile de disques S1-R4, tube de couple et capteur", en: "Modelled wheel-brake assembly: cross-sections, S1-R4 disc stack, torque tube and sensor" },
      { src: "images/projects/btem-network.webp", fr: "Réseau thermique à 14 nœuds du mémoire : conduction, convection et rayonnement entre chaque composant", en: "The thesis' 14-node thermal network: conduction, convection and radiation between every component" },
      { src: "images/projects/btem-mechanisms.webp", fr: "Mécanismes de transfert thermique modélisés, phase par phase (roulement, taxi, parking)", en: "Modelled heat transfer mechanisms, phase by phase (roll-out, taxi, parking)" }
    ],
    fr: {
      title: "Température des freins de l'A320 en service",
      excerpt: "Modèle thermique à 14 nœuds, calibré et validé sur des données de vols commerciaux d’A320.",
      meta: "Mémoire de recherche, Airbus & Cranfield · mai à août 2026 · supervision : Dr Fakhre Ali",
      situation: "Airbus souhaite estimer la température des freins carbone de l'A320 tout au long d'une journée d'exploitation, à partir des seules données enregistrées sur des vols commerciaux en service. Mémoire de recherche mené à Cranfield University avec le soutien d'Airbus.",
      task: "Développer un modèle de prédiction complet sur les données de vols commerciaux d'A320 : un capteur de température échantillonné toutes les 30 secondes, et aucune mesure de couple de freinage, l'énergie devant être reconstruite par la cinématique.",
      actions: [
        "Conception d'un modèle thermique à paramètres localisés (14 nœuds) en Python, calibré par Nelder-Mead multi-départ en espace logarithmique, mis au point sur vols d'essai puis appliqué aux vols commerciaux.",
        "Reconstruction cinématique de l'énergie de freinage sans capteur de couple : bilan de forces sous-échantillonné au roulement d'atterrissage (inverseurs compris), énergie cinétique par phase de décélération au roulage ; sur les vols d'essai, correction de biais glissante du capteur de couple qui dérive.",
        "Industrialisation en un outil réutilisable : détection robuste du toucher, enveloppe de sensibilité, calibration transférable d'un jour de vol à l'autre."
      ],
      results: [
        "Précision de l'ordre de 3 °C au toucher sur les vols de validation.",
        "Pipeline complet livré : segmentation automatique des vols, calibration, prédiction sur la journée, en ligne de commande et application Streamlit.",
        "Présentation dédiée de deux heures des travaux devant le Dr Stephen King (Advanced Analytics, 41 ans chez Rolls-Royce en surveillance de l'état des moteurs) et le Pr Ian Jennions (directeur technique du centre IVHM de Cranfield), en complément de la soutenance."
      ]
    },
    en: {
      title: "In-service A320 brake temperature",
      excerpt: "A 14-node thermal model calibrated and validated on in-service A320 commercial flight data.",
      meta: "Research thesis, Airbus & Cranfield · May to Aug. 2026 · supervised by Dr Fakhre Ali",
      situation: "Airbus wants to estimate A320 carbon brake temperature throughout a full day of operations, from data recorded on in-service commercial flights alone. Research thesis conducted at Cranfield University with Airbus support.",
      task: "Build a complete prediction model on in-service A320 commercial flight data: a temperature sensor sampled every 30 seconds, and no brake torque measurement, so the braking energy must be reconstructed from kinematics.",
      actions: [
        "Designed a lumped-parameter thermal model (14 nodes) in Python, calibrated with multi-start Nelder-Mead in log-space, developed on flight tests then applied to commercial flights.",
        "Kinematic reconstruction of braking energy without a torque sensor: sub-stepped force balance during the landing roll (thrust reversers included), kinetic energy per deceleration phase while taxiing; on flight tests, rolling bias correction of the drifting torque sensor.",
        "Industrialised into a reusable tool: robust touchdown detection, sensitivity envelope, calibration transferable from one flight day to another."
      ],
      results: [
        "Accuracy of about 3 °C at touchdown on validation flights.",
        "Complete pipeline delivered: automatic flight segmentation, calibration, full-day prediction, as a command line and a Streamlit app.",
        "Dedicated two-hour presentation of the work to Dr Stephen King (Advanced Analytics, 41 years at Rolls-Royce in engine health monitoring) and Prof. Ian Jennions (Technical Director of Cranfield's IVHM Centre), in addition to the thesis defence."
      ]
    }
  },
  {
    id: "pinn",
    fit: "contain",
    banner: "images/projects/btem-day.webp",
    tech: ["Python", "PyTorch", "PINN", "L-BFGS"],
    links: [{ href: "https://github.com/ugo-roccamatisi/pinn-brake-stack", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }, { href: "docs/rapport-PINN.pdf", label_fr: "Rapport", label_en: "Report" }],
    gallery: [
      { src: "images/projects/btem-stack.webp", fr: "Géométrie 1D : 5 stators et 4 rotors, interfaces de friction et convection", en: "1D geometry: 5 stators and 4 rotors, friction interfaces and convection" },
      { src: "images/projects/btem-2d.webp", fr: "Champ de température T(z, r), solveur axisymétrique de validation", en: "Temperature field T(z, r), axisymmetric validation solver" },
      { src: "images/projects/btem-pinn-archi.webp", fr: "Architecture du PINN : ansatz analytique + réseau, pertes auto-équilibrées", en: "PINN architecture: analytic ansatz + network, self-balanced losses" },
      { src: "images/projects/btem-day.webp", fr: "Journée de rotations enchaînées : limite décollage 150 °C et cycle limite", en: "A day of chained rotations: 150 °C takeoff limit and limit cycle" },
      { src: "images/projects/btem-inverse.webp", fr: "Problème inverse : énergie identifiée à 2 % près depuis un capteur bruité", en: "Inverse problem: energy identified within 2% from a noisy sensor" }
    ],
    fr: {
      title: "PINN pour la thermique d'une pile de freins",
      excerpt: "Du problème direct au problème inverse, avec une vérité terrain numérique entièrement maîtrisée.",
      meta: "Projet personnel de recherche · été 2026",
      situation: "Projet personnel mené en marge du mémoire : que peut réellement apporter un PINN (réseau de neurones informé par la physique) à la thermique d'une pile de freins d'A320, et où sont ses limites ? Terrain entièrement synthétique, donc publiable.",
      task: "Construire la réponse de bout en bout, du problème direct au problème inverse, en documentant honnêtement chaque échec.",
      actions: [
        "Génération de la vérité terrain par volumes finis (1D axial, 9 disques), validée par un solveur axisymétrique 2D.",
        "PINN à ansatz analytique (fonction de Green, méthode des images, série de cosinus) : le réseau n'apprend que ce qui résiste à l'analyse, physique non linéaire et paramètres inconnus.",
        "Extensions successives : fenêtre longue, non-linéaire, paramétrique, journée complète de rotations, puis problème inverse avec étude d'identifiabilité."
      ],
      results: [
        "PINN direct à ±2 K ; la version non linéaire capture un abaissement du pic de 49 K invisible au modèle linéaire.",
        "PINN paramétrique unique borné à ±15 K sur 2 h sur des scénarios non vus, enchaîné en journée complète (limite décollage 150 °C, cycle limite).",
        "Énergie de freinage identifiée à 2 % près avec 5 minutes de capteur bruité ; répartition convective diagnostiquée non identifiable depuis un capteur central."
      ]
    },
    en: {
      title: "PINNs for brake stack thermal modelling",
      excerpt: "From the direct to the inverse problem, using fully controlled numerical ground truth.",
      meta: "Personal research project · summer 2026",
      situation: "Personal project alongside the thesis: what can a PINN (physics-informed neural network) really bring to the thermal modelling of an A320 brake stack, and where are its limits? Fully synthetic ground truth, hence publishable.",
      task: "Build the answer end to end, from the direct to the inverse problem, honestly documenting every failure.",
      actions: [
        "Generated the ground truth with finite volumes (1D axial, 9 discs), validated by a 2D axisymmetric solver.",
        "PINN with an analytic ansatz (Green function, method of images, cosine series): the network only learns what resists analysis, nonlinear physics and unknown parameters.",
        "Successive extensions: long window, nonlinear, parametric, full day of rotations, then the inverse problem with an identifiability study."
      ],
      results: [
        "Direct PINN within ±2 K; the nonlinear version captures a 49 K peak reduction invisible to the linear model.",
        "A single parametric PINN bounded to ±15 K over 2 h on unseen scenarios, chained into a full day (150 °C takeoff limit, limit cycle).",
        "Braking energy identified within 2% from 5 minutes of noisy sensor data; convective split diagnosed as unidentifiable from a central sensor."
      ]
    }
  },
  {
    id: "bwb",
    banner: "images/projects/bwb-1.webp",
    tech: ["SolidWorks", "3DEXPERIENCE", "Star-CCM+", "OpenVSP", "EASA CS-25"],
    links: [{ href: "https://github.com/ugo-roccamatisi/bwb-hydrogen-aircraft", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }, { href: "docs/memoire-BWB.pdf", label_fr: "Mémoire de projet", label_en: "Project report" }],
    gallery: [
      { src: "images/projects/bwb-2.webp", fr: "Coupe du turboréacteur BW-25", en: "BW-25 turbofan cross-section" },
      { src: "images/projects/bwb-3.webp", fr: "Nacelle et soufflante", en: "Nacelle and fan" },
      { src: "images/projects/bwb-4.webp", fr: "Architecture structurale du G-VEGA", en: "G-VEGA structural layout" },
      { src: "images/projects/bwb-5.webp", fr: "Coupe : cabine, réservoirs hydrogène et moteur", en: "Cutaway: cabin, hydrogen tanks and engine" }
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
    banner: "images/projects/saab-plane.webp",
    tech: ["Python", "SciPy", "Welch", "ruptures"],
    links: [
      { href: "https://github.com/ugo-roccamatisi/saab-landing-analysis", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }
    ],
    gallery: [
      { src: "images/projects/saab-psd.webp", fr: "PSD de Welch post-toucher : les deux capteurs comparés", en: "Post-touchdown Welch PSD: both sensors compared" },
      { src: "images/projects/saab-spectro.webp", fr: "Spectrogrammes temps-fréquence autour du toucher", en: "Time-frequency spectrograms around touchdown" },
      { src: "images/projects/saab-changepoint.webp", fr: "Détection de rupture RBF vs estimation par pic d'amplitude", en: "RBF change-point detection vs amplitude-peak estimate" }
    ],
    fr: {
      title: "Détection du toucher d’un SAAB par analyse des données de vol",
      excerpt: "Analyse spectrale et détection de rupture appliquées à des données FDR réelles.",
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
      title: "SAAB touchdown detection from flight data",
      excerpt: "Spectral analysis and change-point detection applied to real FDR data.",
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
    banner: "images/projects/chu-banner.webp",
    tech: ["Mistral 7B", "llama.cpp", "XGBoost", "TensorFlow", "scikit-learn", "MIMIC-IV"],
    links: [
      { href: "https://github.com/ugo-roccamatisi/fpdm-hospital-ai", label_fr: "Dépôt GitHub", label_en: "GitHub repo" },
      { href: "https://hal.science/hal-05289706", label_fr: "Article IEEE SMC (HAL)", label_en: "IEEE SMC paper (HAL)" },
      { href: "docs/rapport-utilisateur.pdf", label_fr: "Rapport utilisateur", label_en: "User report" },
      { href: "docs/rapport-technique.pdf", label_fr: "Rapport technique", label_en: "Technical report" }
    ],
    gallery: [
      { src: "images/projects/chu-prediction.webp", fr: "Démo de bout en bout : texte clinique en entrée, durée de séjour prédite avec probabilités", en: "End-to-end demo: clinical text in, predicted length of stay with probabilities" },
      { src: "images/projects/chu-llm.webp", fr: "Extraction structurée par le LLM : compte rendu médical vers JSON", en: "LLM structured extraction: medical report to JSON" },
      { src: "images/projects/chu-mimic.webp", fr: "Préparation des données MIMIC-IV : sélection des tables et colonnes", en: "MIMIC-IV data preparation: table and column selection" },
      { src: "images/projects/chu-dataset.webp", fr: "Pipeline du pôle prédiction : de MIMIC-IV au dataset de 134 768 séjours en 7 catégories", en: "Prediction pipeline: from MIMIC-IV to a 134,768-stay dataset in 7 categories" },
      { src: "images/projects/chu-results.webp", fr: "Évaluation par classe : RNN vs XGBoost, précision globale de 0,73", en: "Per-class evaluation: RNN vs XGBoost, 0.73 overall accuracy" },
      { src: "images/projects/chu-archi.webp", fr: "Architecture du système : modules, API et bases de données", en: "System architecture: modules, API and databases" },
      { video: "videos/demo-prediction-form.mp4", fr: "Démo : prédiction de la durée de séjour depuis le formulaire", en: "Demo: length-of-stay prediction from the form" },
      { video: "videos/demo-ui.mp4", fr: "Démo : l'interface de l'application", en: "Demo: the application interface" }
    ],
    fr: {
      title: "Faire parler les données médicales avec l'IA",
      excerpt: "Chaîne locale de structuration clinique et de prévision des durées de séjour hospitalier.",
      meta: "CHU de Lille & Sillage · projet de groupe (12) · sept. 2023 à févr. 2025",
      situation: "Le CHU de Lille et le SIB, éditeur du dossier patient Sillage présent dans 80 % des hôpitaux français, veulent aider les équipes soignantes à anticiper les flux de patients. Projet de 18 mois en équipe de 12 étudiants.",
      task: "Piloter le pôle « prédiction » et transformer des données cliniques brutes en prévisions utiles aux soignants.",
      actions: [
        "Mise en place d'un LLM local (OpenHermes 2.5, Mistral 7B via llama.cpp) structurant automatiquement comptes rendus et notes cliniques en fiches exploitables.",
        "Entraînement d'un classifieur XGBoost (avec réduction PCA) prédisant la durée de séjour en 7 catégories, sur 300 000 patients de la base MIMIC-IV, benchmarké face à un réseau récurrent (TensorFlow).",
        "Coordination du pôle et rédaction scientifique."
      ],
      results: [
        "Précision globale de 73 % sur la classification de la durée de séjour en 7 catégories (XGBoost, évalué sur 26 950 séjours).",
        "Outil livré à l'hôpital pour mise en production, après 10 itérations avec le personnel médical et plus de 1 800 heures de travail cumulées.",
        "Approche du projet publiée à la conférence internationale IEEE SMC (Vienne, 2025).",
        "Code confidentiel à la demande des partenaires hospitaliers ; rapports utilisateur et technique consultables ci-dessous."
      ]
    },
    en: {
      title: "Making medical data talk with AI",
      excerpt: "Local pipeline for clinical data structuring and hospital length-of-stay prediction.",
      meta: "CHU de Lille & Sillage · group project (12) · Sept. 2023 to Feb. 2025",
      situation: "CHU de Lille and SIB, editor of the Sillage patient-record software used in 80% of French hospitals, want to help medical teams anticipate patient flows. An 18-month project in a team of 12 students.",
      task: "Lead the prediction team and turn raw clinical data into forecasts useful to caregivers.",
      actions: [
        "Deployed a local LLM (OpenHermes 2.5, Mistral 7B via llama.cpp) automatically structuring clinical reports and notes into usable records.",
        "Trained an XGBoost classifier (with PCA reduction) predicting length of stay in 7 categories, on 300,000 patients from the MIMIC-IV database, benchmarked against a recurrent network (TensorFlow).",
        "Coordinated the team and contributed to the scientific writing."
      ],
      results: [
        "Overall accuracy of 73% on 7-category length-of-stay classification (XGBoost, evaluated on 26,950 stays).",
        "Tool delivered to the hospital for production use, after 10 iterations with medical staff and over 1,800 hours of cumulative work.",
        "Project approach published at the IEEE SMC international conference (Vienna, 2025).",
        "Code kept confidential at the hospital partners' request; user and technical reports available below."
      ]
    }
  },
  {
    id: "rsp",
    banner: "images/projects/rsp-overview.webp",
    tech: ["Python", "SciPy", "PyWavelets", "Jupyter", "NumPy"],
    links: [{ href: "https://github.com/ugo-roccamatisi/signal-representations-and-inverse-problems", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
    gallery: [
      { src: "images/projects/rsp-spectrogram.webp", fr: "Analyse temps-fréquence : spectrogramme d'un enregistrement d'oiseau", en: "Time-frequency analysis: spectrogram of a bird recording" },
      { src: "images/projects/rsp-wavelet.webp", fr: "Décomposition en ondelettes 2D d'une image", en: "2D wavelet decomposition of an image" },
      { src: "images/projects/rsp-source-separation.webp", fr: "Séparation aveugle de sources : détection des directions de mélange dans le plan temps-fréquence", en: "Blind source separation: mixture-direction detection in the time-frequency plane" },
      { src: "images/projects/rsp-inpainting.webp", fr: "Inpainting variationnel : reconstruction progressive à partir de 10 % des pixels", en: "Variational inpainting: progressive reconstruction from 10% of the pixels" }
    ],
    fr: {
      title: "Représentation des signaux et problèmes inverses",
      excerpt: "Quatre notebooks reproductibles : analyse temps-fréquence, ondelettes, séparation de sources et reconstruction d'images.",
      meta: "Centrale Lille · module scientifique · 2026",
      situation: "Le module relie quatre familles de méthodes souvent étudiées séparément : représentations temps-fréquence, ondelettes, séparation aveugle de sources et résolution de problèmes inverses en imagerie. Les supports initiaux devaient être complétés et rendus entièrement reproductibles.",
      task: "Reconstruire et corriger les quatre travaux pratiques, expliciter les choix numériques et livrer des notebooks capables de s'exécuter de bout en bout dans un environnement documenté.",
      actions: [
        "Analyse de Fourier à court terme (STFT) sur signaux audio, chirps et fréquences proches, avec étude du compromis entre résolution temporelle et fréquentielle.",
        "Décomposition en ondelettes discrète et stationnaire pour le débruitage d'images ; séparation parcimonieuse de sources par regroupement angulaire et masques temps-fréquence binaires.",
        "Résolution de problèmes de débruitage et d'inpainting par descente de gradient et projection, puis fiabilisation de l'ensemble : chemins relatifs, graines aléatoires fixes, ressources locales et environnement épinglé."
      ],
      results: [
        "Débruitage par ondelettes : PSNR porté de 22,0 dB pour l'image bruitée à 27,9 dB avec la DWT et 29,0 dB avec la SWT.",
        "Séparation de trois sources à partir de deux mélanges : 93,5 % des coefficients temps-fréquence significatifs correctement attribués.",
        "Problèmes inverses : 29,5 dB en débruitage de Tikhonov et 24,4 dB en inpainting à partir de seulement 10 % des pixels.",
        "Dépôt public bilingue avec quatre notebooks exécutés intégralement sans erreur et des instructions de reproduction."
      ]
    },
    en: {
      title: "Signal representations and inverse problems",
      excerpt: "Four reproducible notebooks covering time-frequency analysis, wavelets, source separation and image reconstruction.",
      meta: "Centrale Lille · scientific module · 2026",
      situation: "The module connects four families of methods that are often studied separately: time-frequency representations, wavelets, blind source separation and inverse problems in imaging. The initial material had to be completed and made fully reproducible.",
      task: "Rebuild and correct the four lab notebooks, explain the numerical choices and deliver notebooks that run end to end in a documented environment.",
      actions: [
        "Short-time Fourier analysis (STFT) on audio signals, chirps and closely spaced frequencies, including the time-frequency resolution trade-off.",
        "Discrete and stationary wavelet decompositions for image denoising; sparse source separation through angular clustering and binary time-frequency masks.",
        "Denoising and inpainting through gradient descent and projection, followed by project-wide reproducibility work: relative paths, fixed random seeds, local resources and a pinned environment."
      ],
      results: [
        "Wavelet denoising: PSNR improved from 22.0 dB for the noisy image to 27.9 dB with DWT and 29.0 dB with SWT.",
        "Three sources separated from two mixtures, with 93.5% of significant time-frequency coefficients assigned correctly.",
        "Inverse problems: 29.5 dB for Tikhonov denoising and 24.4 dB for inpainting from only 10% of the pixels.",
        "Public bilingual repository with four notebooks executed end to end without errors and documented reproduction steps."
      ]
    }
  },
  {
    id: "vrp",
    fit: "contain",
    banner: "images/projects/vrp-routes.webp",
    tech: ["Python", "Q-Learning", "Optuna", "Streamlit"],
    links: [{ href: "https://github.com/ugo-roccamatisi/vrp-metaheuristics", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }, { href: "docs/rapport-ICO.pdf", label_fr: "Rapport", label_en: "Report" }],
    gallery: [
      { src: "images/projects/vrp-routes.webp", fr: "Tournées optimisées par recherche tabou : une couleur par véhicule", en: "Routes optimized by tabu search: one colour per vehicle" },
      { src: "images/projects/vrp-benchmark.webp", fr: "Convergence du système multi-agents (instance à 40 clients)", en: "Multi-agent system convergence (40-client instance)" },
      { src: "images/projects/vrp-qlearning.webp", fr: "Entraînement du Q-Learning en direct dans la démo Streamlit", en: "Live Q-Learning training in the Streamlit demo" }
    ],
    fr: {
      title: "Tournées de véhicules : méta-heuristiques & Q-Learning",
      excerpt: "Recuit simulé puis Q-Learning : la meilleure performance sur le VRP à 100 clients.",
      meta: "Centrale Lille · projet de groupe (6) · févr. à avr. 2025",
      situation: "Électif Intelligence Collaborative à Centrale Lille : le problème de tournées de véhicules (VRP), NP-difficile, en équipe de 6.",
      task: "Comparer équitablement méta-heuristiques, système multi-agents et apprentissage par renforcement.",
      actions: [
        "Construction d'un benchmark commun et reproductible, hyper-paramètres réglés avec Optuna.",
        "Développement d'un système multi-agents à boucle Top-N.",
        "Enchaînement recuit simulé puis Q-Learning tabulaire avec opérateurs 2-opt, et démonstrateur Streamlit."
      ],
      results: [
        "Système multi-agents Top-N réduisant le coût du pool initial de 7 à 26 % selon les combinaisons d'agents.",
        "Stratégie gagnante : recuit simulé puis Q-Learning tabulaire (2-opt), environ 13 % de mieux que la meilleure méta-heuristique seule sur l'instance à 100 clients."
      ]
    },
    en: {
      title: "Vehicle routing: metaheuristics & Q-Learning",
      excerpt: "Simulated annealing then Q-Learning: best performance on the 100-client VRP.",
      meta: "Centrale Lille · group project (6) · Feb. to Apr. 2025",
      situation: "Collaborative Intelligence elective at Centrale Lille: the NP-hard vehicle routing problem (VRP), in a team of 6.",
      task: "Fairly compare metaheuristics, a multi-agent system and reinforcement learning.",
      actions: [
        "Built a shared, reproducible benchmark with Optuna-tuned hyper-parameters.",
        "Developed a Top-N loop multi-agent system.",
        "Chained simulated annealing then tabular Q-Learning with 2-opt operators, plus a Streamlit demo."
      ],
      results: [
        "Top-N multi-agent system reducing the initial pool cost by 7 to 26% depending on agent combinations.",
        "Winning strategy: simulated annealing then tabular Q-Learning (2-opt), about 13% better than the best standalone metaheuristic on the 100-client instance."
      ]
    }
  },
  {
    id: "prophet",
    banner: "images/projects/pjm-map.webp",
    tech: ["Python", "Prophet", "pandas"],
    links: [{ href: "https://github.com/ugo-roccamatisi/energy-forecasting-prophet", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
    gallery: [
      { src: "images/projects/prophet-forecast.webp", fr: "Mars 2017 : prédiction vs réalité", en: "March 2017: forecast vs reality" },
      { src: "images/projects/prophet-histo.webp", fr: "20 ans de données et zone de prévision", en: "20 years of data and the forecast zone" },
      { src: "images/projects/prophet-saison.webp", fr: "Composantes apprises : tendance et saisonnalités", en: "Learned components: trend and seasonalities" }
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
  },
  {
    id: "tpdec",
    fit: "contain",
    banner: "images/projects/tp-decision.webp",
    tech: ["Python", "scikit-learn", "NumPy", "Matplotlib"],
    links: [{ href: "https://github.com/ugo-roccamatisi/TP_decision_apprentissage", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
    gallery: [
      { src: "images/projects/tpdec-ridge.webp", fr: "Chemin de régularisation ridge : coefficients en fonction de α", en: "Ridge regularisation path: coefficients as a function of α" },
      { src: "images/projects/tpdec-confusion.webp", fr: "Matrice de confusion de la régression logistique sur les chiffres 3 et 5", en: "Logistic regression confusion matrix on digits 3 and 5" },
      { src: "images/projects/tpdec-regions.webp", fr: "Arbre de décision et régions de décision sur les pétales (Iris)", en: "Decision tree and decision regions on petal features (Iris)" },
      { src: "images/projects/tpdec-reconstruction.webp", fr: "Visage original et reconstruction par ACP avec 300 composantes", en: "Original face and PCA reconstruction with 300 components" }
    ],
    fr: {
      title: "Décision et apprentissage",
      excerpt: "Quatre TP de machine learning : régression régularisée, classification, arbres et forêts, ACP.",
      meta: "Centrale Lille · travaux pratiques",
      situation: "Module de machine learning organisé en quatre travaux pratiques, qui parcourent les grandes familles de méthodes supervisées et non supervisées sur des jeux de données classiques : cancer de la prostate, chiffres manuscrits, Iris et visages Olivetti.",
      task: "Compléter les quatre notebooks, justifier chaque choix de modèle et d'hyperparamètre, et livrer des notebooks exécutés de bout en bout, commentés en français.",
      actions: [
        "Régression linéaire et ridge, avec vérification de la solution fermée, choix de la régularisation par validation croisée et chemin Lasso en bonus.",
        "Classification des chiffres 3 et 5 par régression logistique (précision, rappel et F1 selon le seuil), puis comparaison avec les k plus proches voisins.",
        "Arbres de décision et régions de décision sur Iris, forêt aléatoire avec erreur out-of-bag, puis ACP des visages Olivetti : variance expliquée, classification et reconstruction."
      ],
      results: [
        "Chiffres 3 et 5 : 93,8 % de bonnes classifications en régression logistique et 97 % avec les k plus proches voisins (k = 11).",
        "Ridge : régularisation α ≈ 1,09 retenue par validation croisée, MSE de test de 0,52 contre 0,54 sans régularisation.",
        "ACP : 123 composantes pour 95 % de la variance ; avec 50 composantes, la classification reste à 96,3 % (97,5 % sur les pixels bruts) pour un apprentissage environ six fois plus rapide.",
        "Quatre notebooks exécutés, avec les données jointes pour une exécution hors ligne."
      ]
    },
    en: {
      title: "Decision and learning",
      excerpt: "Four machine learning labs: regularised regression, classification, trees and forests, PCA.",
      meta: "Centrale Lille · coursework labs",
      situation: "A machine learning module organised as four labs covering the main families of supervised and unsupervised methods on classic datasets: prostate cancer, handwritten digits, Iris and Olivetti faces.",
      task: "Complete the four notebooks, justify every model and hyperparameter choice, and deliver notebooks executed end to end with comments in French.",
      actions: [
        "Linear and ridge regression, with a check of the closed-form solution, cross-validated regularisation and a Lasso path as a bonus.",
        "Classification of digits 3 and 5 with logistic regression (precision, recall and F1 as a function of the threshold), compared with k-nearest neighbours.",
        "Decision trees and decision regions on Iris, random forest with out-of-bag error, then PCA on Olivetti faces: explained variance, classification and reconstruction."
      ],
      results: [
        "Digits 3 and 5: 93.8% correctly classified with logistic regression and 97% with k-nearest neighbours (k = 11).",
        "Ridge: α ≈ 1.09 selected by cross-validation, test MSE of 0.52 versus 0.54 without regularisation.",
        "PCA: 123 components for 95% of the variance; with 50 components, classification stays at 96.3% (97.5% on raw pixels) with training about six times faster.",
        "Four executed notebooks, with data included so they run offline."
      ]
    }
  },
  {
    id: "tpest",
    fit: "contain",
    banner: "images/projects/tp-estimation.webp",
    tech: ["Python", "NumPy", "SciPy", "scikit-learn"],
    links: [{ href: "https://github.com/ugo-roccamatisi/TP_estimation_statistique", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
    gallery: [
      { src: "images/projects/tpest-em.webp", fr: "Algorithme EM : convergence de la log-vraisemblance et composantes du mélange", en: "EM algorithm: log-likelihood convergence and mixture components" },
      { src: "images/projects/tpest-bic.webp", fr: "Critère BIC selon le nombre de composantes K", en: "BIC as a function of the number of components K" },
      { src: "images/projects/tpest-noyaux.webp", fr: "Même largeur de bande, six noyaux différents", en: "Same bandwidth, six different kernels" },
      { src: "images/projects/tpest-chiffres.webp", fr: "Images de chiffres générées par estimation par noyaux en dimension 64", en: "Digit images generated by kernel density estimation in 64 dimensions" }
    ],
    fr: {
      title: "Introduction à l'estimation statistique",
      excerpt: "Algorithme EM, mélanges gaussiens et estimation de densité par noyaux.",
      meta: "Centrale Lille · travaux pratiques",
      situation: "Deux travaux pratiques d'estimation de densité, principalement sur les données du geyser Old Faithful : modéliser une distribution inconnue, d'abord de façon paramétrique avec un mélange gaussien, puis de façon non paramétrique.",
      task: "Implémenter les algorithmes, analyser l'influence de leurs réglages et livrer deux notebooks exécutés et commentés.",
      actions: [
        "Algorithme EM pour un mélange gaussien en 2D : initialisations multiples, suivi de la log-vraisemblance et choix du nombre de composantes par le critère BIC.",
        "Histogrammes et estimation par noyaux en 1D : influence de la largeur de bande et comparaison de six noyaux (gaussien, Epanechnikov, triangulaire, cosinus…).",
        "Estimation par noyaux en 2D, puis en dimension 64 utilisée comme modèle génératif pour produire de nouvelles images de chiffres manuscrits."
      ],
      results: [
        "EM : log-vraisemblance portée de −745,8 à −385,5 ; le critère BIC retient deux composantes.",
        "Dix initialisations comparées pour K = 3 : les optima locaux atteints vont de −381,8 à −374,4.",
        "Densités vérifiées numériquement, avec une intégrale de 0,9997 pour l'estimateur 1D.",
        "Une coquille de l'énoncé relevée et corrigée : le signe de l'exposant dans la densité de la loi normale."
      ]
    },
    en: {
      title: "Introduction to statistical estimation",
      excerpt: "EM algorithm, Gaussian mixtures and kernel density estimation.",
      meta: "Centrale Lille · coursework labs",
      situation: "Two density estimation labs, mainly on the Old Faithful geyser data: modelling an unknown distribution, first parametrically with a Gaussian mixture, then non-parametrically.",
      task: "Implement the algorithms, analyse how their settings affect the results and deliver two executed, commented notebooks.",
      actions: [
        "EM algorithm for a 2D Gaussian mixture: multiple initialisations, log-likelihood monitoring and selection of the number of components with BIC.",
        "Histograms and 1D kernel density estimation: bandwidth effect and comparison of six kernels (Gaussian, Epanechnikov, linear, cosine…).",
        "2D kernel density estimation, then a 64-dimensional estimator used as a generative model to produce new handwritten digit images."
      ],
      results: [
        "EM: log-likelihood raised from −745.8 to −385.5; BIC selects two components.",
        "Ten initialisations compared for K = 3: local optima range from −381.8 to −374.4.",
        "Densities checked numerically, with an integral of 0.9997 for the 1D estimator.",
        "A typo in the lab statement identified and fixed: the sign of the exponent in the normal density."
      ]
    }
  },
  {
    id: "tpestav",
    fit: "contain",
    banner: "images/projects/tp-estimation-avancee.webp",
    tech: ["Python", "NumPy", "SciPy", "scikit-learn"],
    links: [{ href: "https://github.com/ugo-roccamatisi/TP_estimation_avancee", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
    gallery: [
      { src: "images/projects/tpestav-importance.webp", fr: "Monte Carlo standard et échantillonnage d'importance pour une probabilité rare", en: "Standard Monte Carlo and importance sampling for a rare-event probability" },
      { src: "images/projects/tpestav-mh.webp", fr: "Metropolis-Hastings : traces et histogrammes pour trois échelles de proposition", en: "Metropolis-Hastings: traces and histograms for three proposal scales" },
      { src: "images/projects/tpestav-gibbs.webp", fr: "Bayesian LASSO : lois a posteriori des coefficients et intervalles crédibles à 95 %", en: "Bayesian LASSO: coefficient posteriors and 95% credible intervals" },
      { src: "images/projects/tpestav-lda.webp", fr: "LDA : part du thème dominant et nombre de thèmes par document", en: "LDA: dominant topic share and number of topics per document" }
    ],
    fr: {
      title: "Estimation statistique avancée",
      excerpt: "Monte Carlo, MCMC, échantillonnage de Gibbs et inférence variationnelle.",
      meta: "Centrale Lille · travaux pratiques",
      situation: "Quatre travaux pratiques de statistique computationnelle et bayésienne : simuler des lois, estimer par Monte Carlo, puis approcher des lois a posteriori qui n'ont pas de forme explicite.",
      task: "Implémenter chaque méthode en NumPy, vérifier les résultats par rapport à la théorie et interpréter les diagnostics de convergence.",
      actions: [
        "Génération de variables aléatoires : transformée inverse, Box-Müller, acceptation-rejet et son effondrement en grande dimension, estimation de π et échantillonnage d'importance.",
        "Régression logistique bayésienne par Metropolis-Hastings, puis Bayesian LASSO par échantillonnage de Gibbs (Park et Casella), avec intervalles crédibles et loi prédictive.",
        "Modèle LDA et inférence variationnelle sur les 11 314 documents du corpus 20 Newsgroups, avec huit thèmes."
      ],
      results: [
        "Échantillonnage d'importance : variance divisée par environ 139 pour estimer une probabilité de l'ordre de 1,3 × 10⁻³.",
        "Acceptation-rejet : taux d'acceptation de 82 % en dimension 1, 13,5 % en dimension 10 et 2 × 10⁻⁹ en dimension 100.",
        "Metropolis-Hastings : 74 % d'acceptation et intervalle crédible à 95 % de [−3,60 ; −1,26] pour le paramètre de la régression.",
        "LDA : pour 65,5 % des documents, un seul thème représente plus de la moitié du contenu."
      ]
    },
    en: {
      title: "Advanced statistical estimation",
      excerpt: "Monte Carlo, MCMC, Gibbs sampling and variational inference.",
      meta: "Centrale Lille · coursework labs",
      situation: "Four labs in computational and Bayesian statistics: simulating distributions, Monte Carlo estimation, then approximating posterior distributions that have no closed form.",
      task: "Implement each method in NumPy, check the results against theory and interpret convergence diagnostics.",
      actions: [
        "Random variable generation: inverse transform, Box-Muller, rejection sampling and its collapse in high dimension, Monte Carlo estimation of π and importance sampling.",
        "Bayesian logistic regression with Metropolis-Hastings, then Bayesian LASSO with Gibbs sampling (Park and Casella), with credible intervals and the predictive distribution.",
        "LDA model and variational inference on the 11,314 documents of the 20 Newsgroups corpus, with eight topics."
      ],
      results: [
        "Importance sampling: variance divided by about 139 when estimating a probability of about 1.3 × 10⁻³.",
        "Rejection sampling: acceptance rate of 82% in dimension 1, 13.5% in dimension 10 and 2 × 10⁻⁹ in dimension 100.",
        "Metropolis-Hastings: 74% acceptance and a 95% credible interval of [−3.60, −1.26] for the regression parameter.",
        "LDA: for 65.5% of documents, a single topic accounts for more than half of the content."
      ]
    }
  },
  {
    id: "tpopt",
    fit: "contain",
    banner: "images/projects/tp-optimisation.webp",
    tech: ["Python", "NumPy", "Matplotlib"],
    links: [{ href: "https://github.com/ugo-roccamatisi/TP_optimisation", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
    gallery: [
      { src: "images/projects/tpopt-conditionnement.webp", fr: "Gradient à pas optimal : zigzag quand le conditionnement augmente (C = 8)", en: "Optimal-step gradient descent: zigzagging as conditioning worsens (C = 8)" },
      { src: "images/projects/tpopt-newton.webp", fr: "Itérés de la méthode de Newton vers le minimum (1, 1)", en: "Newton iterates converging to the minimum (1, 1)" },
      { src: "images/projects/tpopt-contraintes.webp", fr: "Ensemble admissible et lignes de niveau du problème sous contraintes", en: "Feasible set and level lines of the constrained problem" },
      { src: "images/projects/tpopt-anneau.webp", fr: "Classification en anneau utilisée pour l'entraînement stochastique avec pénalité L1", en: "Ring classification used for stochastic training with an L1 penalty" }
    ],
    fr: {
      title: "Optimisation continue",
      excerpt: "Gradient, Newton et BFGS, contraintes (KKT, points intérieurs, Uzawa) et ISTA.",
      meta: "Centrale Lille · travaux pratiques",
      situation: "Quatre travaux pratiques d'optimisation numérique, de la descente de gradient sur une fonction quadratique jusqu'à l'entraînement parcimonieux d'un petit réseau de neurones.",
      task: "Compléter les notebooks, dont les trois premiers étaient partiellement corrigés, réparer ce qui empêchait leur exécution et analyser la convergence de chaque méthode.",
      actions: [
        "Descente de gradient à pas optimal et effet du conditionnement, puis recherche linéaire d'Armijo sur une fonction convexe régulière.",
        "Méthode de Newton et approximation BFGS de l'inverse du Hessien ; problème sous contraintes traité par les conditions KKT, la méthode des points intérieurs et l'algorithme d'Uzawa.",
        "Régularisation L1 par ISTA, puis version stochastique pour entraîner un réseau NumPy 2-8-8-8-1 sur une classification en anneau."
      ],
      results: [
        "BFGS : convergence en 55 itérations vers le minimum (1, 1), à 1,2 × 10⁻¹⁰ près.",
        "Uzawa : minimiseur et multiplicateurs de Lagrange retrouvés, avec un écart à l'optimum de 9 × 10⁻¹⁶.",
        "ISTA : 38 coefficients sur 100 annulés pour λ = 2, et tous pour λ = 5.",
        "Une valeur propre erronée de l'énoncé corrigée ; la bibliothèque manquante du TP4 remplacée par une expérience autonome, documentée comme telle."
      ]
    },
    en: {
      title: "Continuous optimisation",
      excerpt: "Gradient, Newton and BFGS, constraints (KKT, interior points, Uzawa) and ISTA.",
      meta: "Centrale Lille · coursework labs",
      situation: "Four numerical optimisation labs, from gradient descent on a quadratic function to sparse training of a small neural network.",
      task: "Complete the notebooks, the first three of which were partially solved, fix what prevented them from running and analyse the convergence of each method.",
      actions: [
        "Optimal-step gradient descent and the effect of conditioning, then Armijo line search on a smooth convex function.",
        "Newton's method and the BFGS inverse-Hessian approximation; a constrained problem solved with KKT conditions, the interior-point method and the Uzawa algorithm.",
        "L1 regularisation with ISTA, then a stochastic version to train a 2-8-8-8-1 NumPy network on a ring classification task."
      ],
      results: [
        "BFGS: convergence in 55 iterations to the minimum (1, 1), within 1.2 × 10⁻¹⁰.",
        "Uzawa: minimiser and Lagrange multipliers recovered, with a gap to the optimum of 9 × 10⁻¹⁶.",
        "ISTA: 38 of 100 coefficients set to zero for λ = 2, and all of them for λ = 5.",
        "An incorrect eigenvalue in the lab statement fixed; the missing library in lab 4 replaced by a standalone experiment, documented as such."
      ]
    }
  }

];
