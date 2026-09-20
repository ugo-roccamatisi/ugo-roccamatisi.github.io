/* ===================== i18n ===================== */
const T = {
  fr: {
    'nav.about': 'À propos', 'nav.resume': 'Parcours', 'nav.proj': 'Projets',
    'hero.eyebrow': 'Aéronautique · Modélisation physique · Intelligence artificielle',
    'hero.tagline': "Ingénieur aéronautique spécialisé en modèles physiques, data science et IA.",
    'hero.proof': 'Cranfield University · Centrale Lille · Projets avec Airbus et Air France Industries',
    'hero.cta': 'Voir mes projets', 'hero.github': 'Voir mon GitHub',
    'about.h': 'À propos', 'about.kicker': 'Profil',
    'about.p1': "Diplômé du <b class=\"text-zinc-900\">MSc in Aerospace Vehicle Design de Cranfield University</b> et élève-ingénieur à <b class=\"text-zinc-900\">Centrale Lille</b>, je travaille à l'interface entre aéronautique, physique et intelligence artificielle.",
    'about.p2': "Mon fil conducteur : transformer des phénomènes complexes en modèles utiles. Je l'ai appliqué aux freins de l'A320 avec <b class=\"text-zinc-900\">Airbus</b> et aux flux hospitaliers avec le <b class=\"text-zinc-900\">CHU de Lille</b>, jusqu'à une publication IEEE SMC.", 'about.p3': "À partir d'octobre 2026, je rejoins <b class=\"text-zinc-900\">Air France Industries KLM E&M</b> en stage de data analyse et maintenance prédictive.", 'g1.d': 'Le Raincy · 2020 – 2023', 'g2.d': "Diplôme d'ingénieur · 2023 – 2027", 'g2.m': 'Machine learning, deep learning, décision et apprentissage, optimisation combinatoire, programmation orientée objet', 'g3.d': 'MSc, double diplôme · 2025 – 2026', 'g3.m': "Maintenance prédictive et IVHM, systèmes de l'avion, fiabilité, sûreté et certification, conception d'aéronefs, stabilité et contrôle, structures composites", 'g4.d': 'Stage maintenance prédictive · oct. 2026 – mars 2027', 'g.leg1': 'Formation', 'g.leg2': 'Expérience',
    'stat1': 'Précision du modèle freins A320', 'stat2': 'Étudiants coordonnés (BWB)',
    'stat3': 'Patients analysés (MIMIC-IV)', 'stat4': 'Article publié (SMC)',
    'resume.h': 'Parcours', 'resume.kicker': 'Formation & expérience', 'sg1': 'Data Science & IA', 'sg2': 'Développement', 'sg3': 'Ingénierie & simulation', 'edu.h': 'Formation', 'exp.h': 'Expérience', 'skills.h': 'Compétences', 'skills.kicker': 'Boîte à outils', 'skills.modeling_h': 'Modélisation & calcul scientifique', 'skills.data': 'Python, PyTorch, scikit-learn, pandas, XGBoost, TensorFlow', 'skills.modeling': 'SciPy, optimisation, PINN, problèmes inverses, séries temporelles, traitement du signal', 'skills.engineering': 'CATIA V5, SolidWorks, 3DEXPERIENCE, Star-CCM+, Nastran/Patran', 'g2.degree': "Diplôme d'ingénieur", 'g3.degree': 'MSc · Double diplôme', 'g4.date': 'Oct. 2026 — Mars 2027', 'g4.role': 'Stage · Maintenance prédictive',
    'edu1.s': "MSc in Aerospace Vehicle Design, option Aircraft Design. Mémoire avec Airbus.",
    'edu2.s': "Diplôme d'ingénieur généraliste. ML, optimisation, auto-formation (problèmes inverses, Markov, statistiques).",
    'edu3.t': 'Classe préparatoire PCSI / PC*', 'edu3.s': 'Lycée Albert Schweitzer, Le Raincy.',
    'exp1.s': "Stage : ingénieur de maintenance prédictive, Roissy-CDG. Indicateurs de dégradation et modèle prédictif d'alertes sur les systèmes A220 et B777.",
    'proj.h': 'Projets', 'proj.kicker': 'Sélection',
    'proj.intro': "Des études de cas concrètes, de la modélisation physique à l'IA appliquée.", 'proj.other': 'Autres projets', 'proj.other_intro': 'Optimisation, conception aéronautique et prévision',
    'proj.more': 'Voir l’étude de cas', 'modal.tech': 'Technologies', 'modal.gallery': 'Aperçu', 'case.results': 'Résultats clés', 'case.problem': 'Problème', 'case.role': 'Ma contribution', 'case.approach': 'Méthode',
    'contact.kicker': 'Échangeons', 'contact.p': "Une question sur mes projets, une proposition, une collaboration ? Écrivez-moi, je réponds volontiers.",
    'footer': '© 2026 Ugo Roccamatisi · Paris, France'
  },
  en: {
    'nav.about': 'About', 'nav.resume': 'Resume', 'nav.proj': 'Projects',
    'hero.eyebrow': 'Aeronautics · Physical modelling · Artificial intelligence',
    'hero.tagline': "Aeronautical engineer specialising in physical models, data science and AI.",
    'hero.proof': 'Cranfield University · Centrale Lille · Projects with Airbus and Air France Industries',
    'hero.cta': 'View my projects', 'hero.github': 'View my GitHub',
    'about.h': 'About', 'about.kicker': 'Profile',
    'about.p1': "A graduate of the <b class=\"text-zinc-900\">MSc in Aerospace Vehicle Design at Cranfield University</b> and an engineering student at <b class=\"text-zinc-900\">Centrale Lille</b>, I work at the intersection of aeronautics, physics and artificial intelligence.",
    'about.p2': "My common thread is turning complex phenomena into useful models. I have applied it to A320 brakes with <b class=\"text-zinc-900\">Airbus</b> and to hospital flows with <b class=\"text-zinc-900\">CHU de Lille</b>, leading to an IEEE SMC publication.", 'about.p3': "From October 2026, I will join <b class=\"text-zinc-900\">Air France Industries KLM E&M</b> as a data analysis and predictive maintenance intern.", 'g1.d': 'Le Raincy · 2020 – 2023', 'g2.d': 'Engineering degree · 2023 – 2027', 'g2.m': 'Machine learning, deep learning, decision & learning, combinatorial optimization, object-oriented programming', 'g3.d': 'MSc, dual degree · 2025 – 2026', 'g3.m': 'Predictive maintenance & IVHM, aircraft systems, reliability, safety & certification, aircraft design, stability & control, composite structures', 'g4.d': 'Predictive maintenance internship · Oct. 2026 – March 2027', 'g.leg1': 'Education', 'g.leg2': 'Experience',
    'stat1': 'A320 brake model accuracy', 'stat2': 'Students coordinated (BWB)',
    'stat3': 'Patients analyzed (MIMIC-IV)', 'stat4': 'Published paper (SMC)',
    'resume.h': 'Resume', 'resume.kicker': 'Education & experience', 'sg1': 'Data Science & AI', 'sg2': 'Development', 'sg3': 'Engineering & simulation', 'edu.h': 'Education', 'exp.h': 'Experience', 'skills.h': 'Skills', 'skills.kicker': 'Toolkit', 'skills.modeling_h': 'Modelling & scientific computing', 'skills.data': 'Python, PyTorch, scikit-learn, pandas, XGBoost, TensorFlow', 'skills.modeling': 'SciPy, optimisation, PINNs, inverse problems, time series, signal processing', 'skills.engineering': 'CATIA V5, SolidWorks, 3DEXPERIENCE, Star-CCM+, Nastran/Patran', 'g2.degree': 'Engineering degree', 'g3.degree': 'MSc · Double degree', 'g4.date': 'Oct. 2026 — Mar. 2027', 'g4.role': 'Internship · Predictive maintenance',
    'edu1.s': "MSc in Aerospace Vehicle Design, Aircraft Design option. Thesis with Airbus.",
    'edu2.s': "General engineering degree. ML, optimization, self-study (inverse problems, Markov, statistics).",
    'edu3.t': 'Preparatory classes PCSI / PC*', 'edu3.s': 'Lycée Albert Schweitzer, Le Raincy.',
    'exp1.s': "Internship: predictive maintenance engineer, Roissy-CDG. Degradation indicators and a predictive alert model on A220 and B777 systems.",
    'proj.h': 'Projects', 'proj.kicker': 'Selected work',
    'proj.intro': 'Concrete case studies, from physical modelling to applied AI.', 'proj.other': 'Other projects', 'proj.other_intro': 'Optimisation, aircraft design and forecasting',
    'proj.more': 'View case study', 'modal.tech': 'Technologies', 'modal.gallery': 'Preview', 'case.results': 'Key results', 'case.problem': 'Problem', 'case.role': 'My contribution', 'case.approach': 'Approach',
    'contact.kicker': 'Let’s talk', 'contact.p': "A question about my projects, a proposal, a collaboration? Write to me, I'll be glad to answer.",
    'footer': '© 2026 Ugo Roccamatisi · Paris, France'
  }
};

let LANG = 'fr';
try { LANG = localStorage.getItem('lang') || 'fr'; } catch (e) {}

function setLang(lang) {
  LANG = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[lang][k] !== undefined) el.textContent = T[lang][k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (T[lang][k] !== undefined) el.innerHTML = T[lang][k];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('text-accblue', active);
    btn.classList.toggle('text-zinc-400', !active);
    btn.setAttribute('aria-pressed', String(active));
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
  renderProjects();
  if (currentProjectId) openModal(currentProjectId);
}

/* ===================== Header : se cache en descendant ===================== */
let lastY = 0;
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('hidden-up', y > 120 && y > lastY);
  lastY = y;
}, { passive: true });

/* ===================== Apparition au défilement ===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });

/* ===================== Cartes projets ===================== */
const PROJECT_META = {
  btem: {
    fr: { category: 'Aéronautique · Modélisation', role: 'Mémoire Airbus & Cranfield', metric: '≈ 3 °C au toucher' },
    en: { category: 'Aeronautics · Modelling', role: 'Airbus & Cranfield thesis', metric: '≈ 3 °C at touchdown' }
  },
  pinn: {
    fr: { category: 'IA scientifique · Thermique', role: 'Projet personnel de recherche', metric: '±2 K · énergie à 2 %' },
    en: { category: 'Scientific AI · Thermal', role: 'Personal research project', metric: '±2 K · energy within 2%' }
  },
  saab: {
    fr: { category: 'Données de vol · Signal', role: 'Analyse reproductible', metric: 'Toucher daté à ±0,02 s' },
    en: { category: 'Flight data · Signal', role: 'Reproducible analysis', metric: 'Touchdown within ±0.02 s' }
  },
  chu: {
    fr: { category: 'IA appliquée · Santé', role: 'Responsable du pôle prédiction', metric: '73 % · 300 000 patients' },
    en: { category: 'Applied AI · Healthcare', role: 'Prediction team lead', metric: '73% · 300,000 patients' }
  },
  bwb: {
    fr: { category: 'Conception aéronautique', role: 'Responsable intégration moteurs', metric: 'Équipe internationale de 62' },
    en: { category: 'Aircraft design', role: 'Engine integration lead', metric: 'International team of 62' }
  },
  vrp: {
    fr: { category: 'Optimisation · Reinforcement Learning', role: 'Projet en équipe de 6', metric: '≈ 13 % de mieux' },
    en: { category: 'Optimisation · Reinforcement Learning', role: 'Six-person team project', metric: '≈ 13% improvement' }
  },
  prophet: {
    fr: { category: 'Séries temporelles', role: 'Projet personnel', metric: 'MAPE 9,7 %' },
    en: { category: 'Time series', role: 'Personal project', metric: '9.7% MAPE' }
  }
};
const FEATURED_PROJECTS = ['btem', 'pinn', 'saab', 'chu'];
const OTHER_PROJECTS = ['bwb', 'vrp', 'prophet'];

function projectCard(p, featured) {
  const t = p[LANG];
  const meta = PROJECT_META[p.id][LANG];
  const card = document.createElement('article');
  card.className = 'proj-card' + (featured ? ' proj-card-featured' : ' proj-card-compact');
  card.dataset.open = p.id;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', T[LANG]['proj.more'] + ' : ' + t.title);
  card.innerHTML =
    '<div class="proj-banner' + (p.fit === 'contain' ? ' fit-contain' : '') + '"><img src="' + p.banner + '" alt="" loading="lazy" onerror="this.remove()"></div>' +
    '<div class="proj-body">' +
      '<span class="proj-category">' + meta.category + '</span>' +
      '<h3>' + t.title + '</h3>' +
      '<p class="proj-role">' + meta.role + '</p>' +
      '<strong class="proj-metric">' + meta.metric + '</strong>' +
      (featured ? '<p class="proj-excerpt">' + t.excerpt + '</p>' : '') +
      '<div class="proj-footer"><span class="proj-tech">' + p.tech.slice(0, featured ? 3 : 2).join(' · ') + '</span><span class="proj-arrow" aria-hidden="true">↗</span></div>' +
    '</div>';
  const activate = () => {
    lastFocused = card;
    const nextHash = '#project=' + p.id;
    if (location.hash === nextHash) openModal(p.id); else location.hash = nextHash;
  };
  card.addEventListener('click', activate);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); }
  });
  return card;
}

function renderProjects() {
  const featuredGrid = document.getElementById('featured-project-grid');
  const otherGrid = document.getElementById('other-project-grid');
  if (!featuredGrid || !otherGrid || !window.PROJECTS) return;
  featuredGrid.innerHTML = '';
  otherGrid.innerHTML = '';
  const byId = id => window.PROJECTS.find(p => p.id === id);
  FEATURED_PROJECTS.map(byId).filter(Boolean).forEach(p => featuredGrid.appendChild(projectCard(p, true)));
  OTHER_PROJECTS.map(byId).filter(Boolean).forEach(p => otherGrid.appendChild(projectCard(p, false)));
}

/* ===================== Modale ===================== */
const overlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');
let currentProjectId = null;
let lastFocused = null;

function openModal(id) {
  const p = window.PROJECTS.find(x => x.id === id);
  if (!p) return;
  currentProjectId = id;
  const t = p[LANG];
  const meta = PROJECT_META[id][LANG];
  const links = (p.links || []).map(l =>
    '<a href="' + l.href + '" target="_blank" rel="noopener noreferrer" class="case-link">' + (LANG === 'fr' ? l.label_fr : l.label_en) + '</a>'
  ).join('');
  const caseStudy = [
    ['case.results', '<ul class="star-ul result-list">' + t.results.map(x => '<li>' + x + '</li>').join('') + '</ul>'],
    ['case.problem', '<p class="star-p">' + t.situation + '</p>'],
    ['case.role', '<p class="star-p">' + t.task + '</p>'],
    ['case.approach', '<ul class="star-ul">' + t.actions.map(x => '<li>' + x + '</li>').join('') + '</ul>']
  ].map(([k, body], index) => '<section class="case-block' + (index === 0 ? ' case-results' : '') + '"><h4>' + T[LANG][k] + '</h4>' + body + '</section>').join('');
  const gallery = (p.gallery || []).map(g => {
    const caption = LANG === 'fr' ? g.fr : g.en;
    const media = g.video
      ? '<video controls preload="metadata" playsinline aria-label="' + caption + '" onerror="this.closest(\'figure\').remove()"><source src="' + g.video + '" type="video/mp4"></video>'
      : '<img src="' + g.src + '" alt="' + caption + '" loading="lazy" onerror="this.closest(\'figure\').remove()">';
    return '<figure class="mgal-fig">' + media + '<figcaption>' + caption + '</figcaption></figure>';
  }).join('');
  document.getElementById('modal-content').innerHTML =
    '<div class="case-hero proj-banner' + (p.fit === 'contain' ? ' fit-contain' : '') + '"><img src="' + p.banner + '" alt="" onerror="this.remove()"></div>' +
    '<div class="case-content">' +
      '<span class="proj-category">' + meta.category + '</span>' +
      '<h3 id="modal-title">' + t.title + '</h3>' +
      '<p class="case-meta">' + t.meta + '</p>' +
      '<div class="case-highlight"><span>' + meta.role + '</span><strong>' + meta.metric + '</strong></div>' +
      caseStudy +
      (gallery ? '<h4 class="font-semibold mb-3 mt-6">' + T[LANG]['modal.gallery'] + '</h4><div class="mgal">' + gallery + '</div>' : '') +
      '<h4 class="font-semibold mb-2 mt-6">' + T[LANG]['modal.tech'] + '</h4>' +
      '<div class="case-tech">' +
        p.tech.map(x => '<span>' + x + '</span>').join('') +
      '</div>' +
      (links ? '<div class="case-links">' + links + '</div>' : '') +
    '</div>';
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  document.body.style.overflow = 'hidden';
  modalBox.scrollTop = 0;
  modalBox.focus();
}

function closeModal(updateUrl = true) {
  if (!currentProjectId && overlay.classList.contains('hidden')) return;
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  document.body.style.overflow = '';
  currentProjectId = null;
  if (updateUrl && location.hash.startsWith('#project=')) history.replaceState(null, '', location.pathname + location.search + '#projects');
  if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
}

/* ===================== Initialisation ===================== */
/* ===================== Visionneuse d'images (galeries) ===================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
}
function closeLightbox() {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  lightboxImg.src = '';
}

function projectFromHash() {
  const match = location.hash.match(/^#project=([a-z0-9-]+)$/i);
  return match ? match[1] : null;
}

function syncProjectHash() {
  const id = projectFromHash();
  if (id) openModal(id); else closeModal(false);
}

function trapModalFocus(event) {
  if (event.key !== 'Tab' || overlay.classList.contains('hidden')) return;
  const focusable = [...modalBox.querySelectorAll('a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = () => {
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('is-open');
  };
  menuToggle.addEventListener('click', () => {
    const opening = mobileNav.hidden;
    mobileNav.hidden = !opening;
    menuToggle.setAttribute('aria-expanded', String(opening));
    menuToggle.classList.toggle('is-open', opening);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') trapModalFocus(e);
    if (e.key !== 'Escape') return;
    if (!lightbox.classList.contains('hidden')) closeLightbox();
    else if (!overlay.classList.contains('hidden')) closeModal();
    else closeMenu();
  });
  window.addEventListener('hashchange', syncProjectHash);
  lightbox.addEventListener('click', closeLightbox);
  document.getElementById('modal-content').addEventListener('click', e => {
    const img = e.target.closest('.mgal-fig img');
    if (img) openLightbox(img.src);
  });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  setLang(LANG);
  syncProjectHash();
});
