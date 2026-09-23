// Données des projets, au format STAR (Situation, Tâche, Actions, Résultats).
// Pour ajouter un projet : copier un bloc, remplir, déposer les images dans images/.
// banner : image de la carte ; gallery : aperçus affichés dans la fenêtre de détail.
window.PROJECTS = [
  {
    id: "btem",
    fit: "contain",
    banner: "images/projects/btem-assembly.png",
    tech: ["Python", "SciPy", "Nelder-Mead", "Streamlit"],
    links: [{ href: "https://github.com/ugo-roccamatisi/master-thesis-brake-temperature-estimation-model", label_fr: "Code public assaini", label_en: "Sanitized public code" }],
    gallery: [
      { src: "images/projects/btem-assembly.png", fr: "Ensemble roue-frein modélisé : vues en coupe, pile de disques S1-R4, tube de couple et capteur", en: "Modelled wheel-brake assembly: cross-sections, S1-R4 disc stack, torque tube and sensor" },
      { src: "images/projects/btem-network.png", fr: "Réseau thermique à 14 nœuds du mémoire : conduction, convection et rayonnement entre chaque composant", en: "The thesis' 14-node thermal network: conduction, convection and radiation between every component" },
      { src: "images/projects/btem-mechanisms.png", fr: "Mécanismes de transfert thermique modélisés, phase par phase (roulement, taxi, parking)", en: "Modelled heat transfer mechanisms, phase by phase (roll-out, taxi, parking)" }
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
    banner: "images/projects/btem-day.png",
    tech: ["Python", "PyTorch", "PINN", "L-BFGS"],
    links: [{ href: "https://github.com/ugo-roccamatisi/pinn-brake-stack", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }, { href: "docs/rapport-PINN.pdf", label_fr: "Rapport", label_en: "Report" }],
    gallery: [
      { src: "images/projects/btem-stack.png", fr: "Géométrie 1D : 5 stators et 4 rotors, interfaces de friction et convection", en: "1D geometry: 5 stators and 4 rotors, friction interfaces and convection" },
      { src: "images/projects/btem-2d.png", fr: "Champ de température T(z, r), solveur axisymétrique de validation", en: "Temperature field T(z, r), axisymmetric validation solver" },
      { src: "images/projects/btem-pinn-archi.png", fr: "Architecture du PINN : ansatz analytique + réseau, pertes auto-équilibrées", en: "PINN architecture: analytic ansatz + network, self-balanced losses" },
      { src: "images/projects/btem-day.png", fr: "Journée de rotations enchaînées : limite décollage 150 °C et cycle limite", en: "A day of chained rotations: 150 °C takeoff limit and limit cycle" },
      { src: "images/projects/btem-inverse.png", fr: "Problème inverse : énergie identifiée à 2 % près depuis un capteur bruité", en: "Inverse problem: energy identified within 2% from a noisy sensor" }
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
    banner: "images/projects/bwb-1.png",
    tech: ["SolidWorks", "3DEXPERIENCE", "Star-CCM+", "OpenVSP", "EASA CS-25"],
    links: [{ href: "https://github.com/ugo-roccamatisi/bwb-hydrogen-aircraft", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }, { href: "docs/memoire-BWB.pdf", label_fr: "Mémoire de projet", label_en: "Project report" }],
    gallery: [
      { src: "images/projects/bwb-2.jpg", fr: "Coupe du turboréacteur BW-25", en: "BW-25 turbofan cross-section" },
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
    banner: "images/projects/saab-plane.jpg",
    tech: ["Python", "SciPy", "Welch", "ruptures"],
    links: [
      { href: "https://github.com/ugo-roccamatisi/saab-landing-analysis", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }
    ],
    gallery: [
      { src: "images/projects/saab-psd.png", fr: "PSD de Welch post-toucher : les deux capteurs comparés", en: "Post-touchdown Welch PSD: both sensors compared" },
      { src: "images/projects/saab-spectro.png", fr: "Spectrogrammes temps-fréquence autour du toucher", en: "Time-frequency spectrograms around touchdown" },
      { src: "images/projects/saab-changepoint.png", fr: "Détection de rupture RBF vs estimation par pic d'amplitude", en: "RBF change-point detection vs amplitude-peak estimate" }
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
    banner: "images/projects/chu-banner.png",
    tech: ["Mistral 7B", "llama.cpp", "XGBoost", "TensorFlow", "scikit-learn", "MIMIC-IV"],
    links: [
      { href: "https://github.com/ugo-roccamatisi/fpdm-hospital-ai", label_fr: "Dépôt GitHub", label_en: "GitHub repo" },
      { href: "https://hal.science/hal-05289706", label_fr: "Article IEEE SMC (HAL)", label_en: "IEEE SMC paper (HAL)" },
      { href: "docs/rapport-utilisateur.pdf", label_fr: "Rapport utilisateur", label_en: "User report" },
      { href: "docs/rapport-technique.pdf", label_fr: "Rapport technique", label_en: "Technical report" }
    ],
    gallery: [
      { src: "images/projects/chu-prediction.png", fr: "Démo de bout en bout : texte clinique en entrée, durée de séjour prédite avec probabilités", en: "End-to-end demo: clinical text in, predicted length of stay with probabilities" },
      { src: "images/projects/chu-llm.png", fr: "Extraction structurée par le LLM : compte rendu médical vers JSON", en: "LLM structured extraction: medical report to JSON" },
      { src: "images/projects/chu-mimic.png", fr: "Préparation des données MIMIC-IV : sélection des tables et colonnes", en: "MIMIC-IV data preparation: table and column selection" },
      { src: "images/projects/chu-dataset.png", fr: "Pipeline du pôle prédiction : de MIMIC-IV au dataset de 134 768 séjours en 7 catégories", en: "Prediction pipeline: from MIMIC-IV to a 134,768-stay dataset in 7 categories" },
      { src: "images/projects/chu-results.png", fr: "Évaluation par classe : RNN vs XGBoost, précision globale de 0,73", en: "Per-class evaluation: RNN vs XGBoost, 0.73 overall accuracy" },
      { src: "images/projects/chu-archi.png", fr: "Architecture du système : modules, API et bases de données", en: "System architecture: modules, API and databases" },
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
    banner: "images/projects/rsp-overview.png",
    tech: ["Python", "SciPy", "PyWavelets", "Jupyter", "NumPy"],
    links: [{ href: "https://github.com/ugo-roccamatisi/signal-representations-and-inverse-problems", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
    gallery: [
      { src: "images/projects/rsp-spectrogram.png", fr: "Analyse temps-fréquence : spectrogramme d'un enregistrement d'oiseau", en: "Time-frequency analysis: spectrogram of a bird recording" },
      { src: "images/projects/rsp-wavelet.png", fr: "Décomposition en ondelettes 2D d'une image", en: "2D wavelet decomposition of an image" },
      { src: "images/projects/rsp-source-separation.png", fr: "Séparation aveugle de sources : détection des directions de mélange dans le plan temps-fréquence", en: "Blind source separation: mixture-direction detection in the time-frequency plane" },
      { src: "images/projects/rsp-inpainting.png", fr: "Inpainting variationnel : reconstruction progressive à partir de 10 % des pixels", en: "Variational inpainting: progressive reconstruction from 10% of the pixels" }
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
    banner: "images/projects/vrp-routes.png",
    tech: ["Python", "Q-Learning", "Optuna", "Streamlit"],
    links: [{ href: "https://github.com/ugo-roccamatisi/vrp-metaheuristics", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }, { href: "docs/rapport-ICO.pdf", label_fr: "Rapport", label_en: "Report" }],
    gallery: [
      { src: "images/projects/vrp-routes.png", fr: "Tournées optimisées par recherche tabou : une couleur par véhicule", en: "Routes optimized by tabu search: one colour per vehicle" },
      { src: "images/projects/vrp-benchmark.png", fr: "Convergence du système multi-agents (instance à 40 clients)", en: "Multi-agent system convergence (40-client instance)" },
      { src: "images/projects/vrp-qlearning.png", fr: "Entraînement du Q-Learning en direct dans la démo Streamlit", en: "Live Q-Learning training in the Streamlit demo" }
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
    banner: "images/projects/pjm-map.png",
    tech: ["Python", "Prophet", "pandas"],
    links: [{ href: "https://github.com/ugo-roccamatisi/energy-forecasting-prophet", label_fr: "Dépôt GitHub", label_en: "GitHub repo" }],
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
  },
  {
    "id": "lab-decision",
    "courseMark": "DA",
    "tech": [
      "Python",
      "scikit-learn",
      "Jupyter"
    ],
    "links": [
      {
        "href": "https://github.com/ugo-roccamatisi/TP_decision_apprentissage",
        "label_fr": "Dépôt GitHub",
        "label_en": "GitHub repo"
      }
    ],
    "fr": {
      "title": "Décision et apprentissage",
      "excerpt": "Chiffres 3/5 : KNN à 97 % sur 400 images de test ; ACP et régression régularisée.",
      "meta": "Centrale Lille · 4 travaux pratiques",
      "situation": "Série de 4 travaux pratiques en décision et apprentissage.",
      "task": "Compléter les notebooks, expliquer les méthodes et vérifier leur exécution.",
      "actions": [
        "Régression linéaire, ridge et Lasso avec validation croisée.",
        "Classification par régression logistique, KNN, arbres et forêts aléatoires.",
        "ACP et reconstruction de visages Olivetti."
      ],
      "results": [
        "Classification des chiffres 3 et 5 : le KNN atteint 97,0 % de bonnes réponses sur 400 images de test, contre 93,75 % pour la régression logistique (25 erreurs, visibles dans la matrice).",
        "Régression ridge : α ≈ 1,09 choisi sur cinq plis ; MSE test 0,5219 contre 0,5402 sans pénalité sur ce découpage.",
        "ACP des visages Olivetti : 123 composantes conservent 95,04 % de la variance ; l'erreur de reconstruction décroît de 0,0048 à 0,00013 entre 10 et 300 composantes.",
        "Sur Iris, un arbre entraîné avec les pétales atteint 96,7 % sur le jeu de test, contre 60,0 % avec les sépales seuls."
      ]
    },
    "en": {
      "title": "Decision and learning",
      "excerpt": "Digits 3/5: KNN at 97% on 400 test images; PCA and regularized regression.",
      "meta": "Centrale Lille · 4 lab notebooks",
      "situation": "A 4-part series of academic lab notebooks.",
      "task": "Complete the notebooks, explain the methods and verify that they run.",
      "actions": [
        "Linear, ridge and Lasso regression with cross-validation.",
        "Logistic regression, KNN, decision trees and random forests.",
        "PCA and Olivetti face reconstruction."
      ],
      "results": [
        "Digit 3 vs 5 classification: KNN reaches 97.0% accuracy on 400 test images, versus 93.75% for logistic regression (25 errors shown in the confusion matrix).",
        "Ridge regression: α ≈ 1.09 selected with five-fold cross-validation; test MSE 0.5219 versus 0.5402 without regularization on this split.",
        "Olivetti face PCA: 123 components retain 95.04% of the variance; reconstruction MSE falls from 0.0048 to 0.00013 between 10 and 300 components.",
        "On Iris, a tree using petal features reaches 96.7% test accuracy, versus 60.0% using sepal features alone."
      ]
    },
    "banner": "images/projects/decision-confusion.webp",
    "fit": "contain",
    "gallery": [
      {
        "src": "images/projects/decision-ridge.webp",
        "fr": "Choix du paramètre ridge par validation croisée : α ≈ 1,09.",
        "en": "Ridge penalty chosen by cross-validation: α ≈ 1.09."
      }
    ]
  },
  {
    "id": "lab-estimation",
    "courseMark": "ES",
    "tech": [
      "Python",
      "EM",
      "KDE"
    ],
    "links": [
      {
        "href": "https://github.com/ugo-roccamatisi/TP_estimation_statistique",
        "label_fr": "Dépôt GitHub",
        "label_en": "GitHub repo"
      }
    ],
    "fr": {
      "title": "Estimation statistique",
      "excerpt": "Mélange gaussien à deux composantes retenu par BIC sur 272 observations.",
      "meta": "Centrale Lille · 2 travaux pratiques",
      "situation": "Série de 2 travaux pratiques en estimation statistique.",
      "task": "Compléter les notebooks, expliquer les méthodes et vérifier leur exécution.",
      "actions": [
        "Estimation d'un mélange gaussien par EM et sélection par BIC.",
        "Histogrammes et estimateurs à noyaux en une et deux dimensions.",
        "Visualisation de densités et génération d'images de chiffres."
      ],
      "results": [
        "Sur les 272 observations Old Faithful, le BIC retient deux composantes gaussiennes : 832,59, contre 844,12 pour trois ; une vraisemblance plus élevée seule ne suffit pas à choisir K.",
        "Avec K = 2, la log-vraisemblance de l'algorithme EM passe de −745,817 à −385,461 et les poids estimés sont 0,644 et 0,356.",
        "L'estimation à noyaux montre l'effet du paramètre de lissage h : h = 0,1 suit le bruit des données, tandis que h = 2 masque la bimodalité de la distribution simulée.",
        "La densité estimée par noyau gaussien est normalisée numériquement : intégrale ≈ 0,99974 sur la grille de vérification."
      ]
    },
    "en": {
      "title": "Statistical estimation",
      "excerpt": "BIC selects a two-component Gaussian mixture on 272 observations.",
      "meta": "Centrale Lille · 2 lab notebooks",
      "situation": "A 2-part series of academic lab notebooks.",
      "task": "Complete the notebooks, explain the methods and verify that they run.",
      "actions": [
        "Gaussian-mixture estimation with EM and BIC selection.",
        "Histograms and kernel estimators in one and two dimensions.",
        "Density plots and generation of digit images."
      ],
      "results": [
        "On 272 Old Faithful observations, BIC selects two Gaussian components: 832.59 versus 844.12 for three; a higher likelihood alone does not justify adding a component.",
        "For K = 2, the EM log-likelihood rises from −745.817 to −385.461, with estimated mixture weights of 0.644 and 0.356.",
        "Kernel estimation illustrates bandwidth h: h = 0.1 tracks sampling noise, while h = 2 obscures the bimodality of the simulated distribution.",
        "The Gaussian kernel density is numerically normalized: integral ≈ 0.99974 on the verification grid."
      ]
    },
    "banner": "images/projects/estimation-bic.webp",
    "fit": "contain",
    "gallery": [
      {
        "src": "images/projects/estimation-kde.webp",
        "fr": "Estimation à noyaux : un lissage trop faible fait apparaître du bruit ; trop fort efface les deux modes.",
        "en": "Kernel estimation: too little smoothing adds noise; too much hides the two modes."
      }
    ]
  },
  {
    "id": "lab-advanced",
    "courseMark": "EA",
    "tech": [
      "Python",
      "Monte Carlo",
      "MCMC"
    ],
    "links": [
      {
        "href": "https://github.com/ugo-roccamatisi/TP_estimation_avancee",
        "label_fr": "Dépôt GitHub",
        "label_en": "GitHub repo"
      }
    ],
    "fr": {
      "title": "Estimation statistique avancée",
      "excerpt": "Événement rare : variance divisée par ≈139 avec l'échantillonnage d'importance.",
      "meta": "Centrale Lille · 4 travaux pratiques",
      "situation": "Série de 4 travaux pratiques en estimation statistique avancée.",
      "task": "Compléter les notebooks, expliquer les méthodes et vérifier leur exécution.",
      "actions": [
        "Simulation, acceptation-rejet et Monte Carlo.",
        "Régression logistique bayésienne par Metropolis-Hastings et Bayesian LASSO par Gibbs.",
        "Inférence variationnelle pour le modèle LDA."
      ],
      "results": [
        "Estimation d'une probabilité rare P(Z > 3) : l'échantillonnage d'importance réduit la variance d'environ 139 fois par rapport au Monte Carlo standard, sur 1 000 répétitions de 10 000 tirages.",
        "La chaîne Metropolis-Hastings pour la régression logistique donne une moyenne a posteriori du coefficient de −2,309 et un intervalle crédible à 95 % [−3,596 ; −1,260] dans l'expérience du notebook.",
        "Avec le Bayesian LASSO, augmenter λ de 1 à 100 réduit la norme L1 de la moyenne des coefficients de 1,698 à 0,601.",
        "Le modèle LDA apprend huit thèmes sur 11 314 documents ; 65,5 % des documents ont un thème dont la part dépasse 50 %."
      ]
    },
    "en": {
      "title": "Advanced statistical estimation",
      "excerpt": "Rare event: importance sampling cuts estimator variance by about 139×.",
      "meta": "Centrale Lille · 4 lab notebooks",
      "situation": "A 4-part series of academic lab notebooks.",
      "task": "Complete the notebooks, explain the methods and verify that they run.",
      "actions": [
        "Simulation, rejection sampling and Monte Carlo.",
        "Bayesian logistic regression with Metropolis-Hastings and Bayesian LASSO with Gibbs sampling.",
        "Variational inference for the LDA model."
      ],
      "results": [
        "For the rare event P(Z > 3), importance sampling reduces estimator variance by about 139 times compared with standard Monte Carlo, over 1,000 repeats of 10,000 draws.",
        "The Metropolis-Hastings logistic-regression chain yields a coefficient posterior mean of −2.309 and a 95% credible interval [−3.596, −1.260] in the notebook experiment.",
        "For Bayesian LASSO, increasing λ from 1 to 100 reduces the L1 norm of the mean coefficients from 1.698 to 0.601.",
        "The LDA model learns eight topics from 11,314 documents; 65.5% of documents have a topic share above 50%."
      ]
    },
    "banner": "images/projects/advanced-importance.webp",
    "fit": "contain",
    "gallery": [
      {
        "src": "images/projects/advanced-lda.webp",
        "fr": "LDA : distribution de la part du thème dominant sur 11 314 documents et nombre de thèmes au-dessus de 20 %.",
        "en": "LDA: dominant-topic share across 11,314 documents and number of topics above 20%."
      }
    ]
  },
  {
    "id": "lab-optimisation",
    "courseMark": "OP",
    "tech": [
      "Python",
      "BFGS",
      "ISTA"
    ],
    "links": [
      {
        "href": "https://github.com/ugo-roccamatisi/TP_optimisation",
        "label_fr": "Dépôt GitHub",
        "label_en": "GitHub repo"
      }
    ],
    "fr": {
      "title": "Optimisation",
      "excerpt": "Uzawa, BFGS et L1 : 62 poids actifs sur 100 pour λ = 2 dans l'exercice.",
      "meta": "Centrale Lille · 4 travaux pratiques",
      "situation": "Série de 4 travaux pratiques en optimisation.",
      "task": "Compléter les notebooks, expliquer les méthodes et vérifier leur exécution.",
      "actions": [
        "Méthodes de gradient, recherche linéaire d'Armijo, Newton et BFGS.",
        "Conditions KKT, points intérieurs et algorithme d'Uzawa.",
        "Gradient stochastique et seuillage doux avec ISTA."
      ],
      "results": [
        "Sur un problème avec contraintes, l'algorithme d'Uzawa converge vers x* = (0,5 ; √3/2) avec des contraintes actives et un écart d'objectif de l'ordre de 10⁻¹⁵ dans l'exécution.",
        "L'approximation BFGS atteint le point (1,1) en 55 itérations sur l'exemple de Newton, avec un écart final de 1,18 × 10⁻¹⁰.",
        "La pénalisation L1 rend les coefficients parcimonieux : pour λ = 2, 62 poids sur 100 restent non nuls ; pour λ = 5, aucun ne reste non nul dans cet exercice.",
        "Sur le réseau de classification NumPy, λ = 0,001 garde 141 poids non nuls sur 152, avec 80,5 % de précision test contre 82,5 % sans pénalité ; ces scores sont propres à cette simulation."
      ]
    },
    "en": {
      "title": "Optimization",
      "excerpt": "Uzawa, BFGS and L1: 62 of 100 active weights at λ = 2 in the exercise.",
      "meta": "Centrale Lille · 4 lab notebooks",
      "situation": "A 4-part series of academic lab notebooks.",
      "task": "Complete the notebooks, explain the methods and verify that they run.",
      "actions": [
        "Gradient methods, Armijo line search, Newton and BFGS.",
        "KKT conditions, interior-point methods and Uzawa's algorithm.",
        "Stochastic gradient and soft thresholding with ISTA."
      ],
      "results": [
        "On a constrained problem, Uzawa converges to x* = (0.5, √3/2) with active constraints and an objective gap on the order of 10⁻¹⁵ in this run.",
        "The BFGS approximation reaches (1,1) in 55 iterations on the Newton example, with a final distance of 1.18 × 10⁻¹⁰.",
        "L1 penalization yields sparse weights: for λ = 2, 62 of 100 weights remain nonzero; at λ = 5, none remain nonzero in this exercise.",
        "In the NumPy classifier, λ = 0.001 keeps 141 of 152 weights nonzero with 80.5% test accuracy versus 82.5% without the penalty; these scores belong to this simulation."
      ]
    },
    "banner": "images/projects/optimisation-constraints.webp",
    "fit": "contain",
    "gallery": [
      {
        "src": "images/projects/optimisation-l1.webp",
        "fr": "Régularisation L1 d'un réseau NumPy : perte, poids non nuls et précision test selon λ.",
        "en": "L1 regularization of a NumPy network: loss, nonzero weights and test accuracy by λ."
      }
    ]
  }
];
