/* ===================== i18n ===================== */
const T = {
  fr: {
    'nav.about': 'À propos', 'nav.resume': 'Parcours', 'nav.proj': 'Projets',
    'hero.eyebrow': 'Aéronautique, modélisation physique et intelligence artificielle',
    'hero.tagline': "Ingénieur aéronautique spécialisé en modèles physiques, data science et IA.",
    'hero.proof': 'École Centrale de Lille et Cranfield University, en stage data et maintenance prédictive chez Air France',
    'hero.cta': 'Voir mes projets', 'hero.github': 'Voir mon GitHub',
    'about.h': 'À propos',
    'about.p1': "Diplômé du <b>MSc in Aerospace Vehicle Design de Cranfield University</b> et élève-ingénieur à <b>Centrale Lille</b>, je travaille à l'interface entre aéronautique, physique et intelligence artificielle.",
    'about.p2': "Mon fil conducteur : transformer des phénomènes complexes en modèles utiles. Je l'ai appliqué aux freins de l'A320 avec <b>Airbus</b> et aux flux hospitaliers avec le <b>CHU de Lille</b>, jusqu'à une publication IEEE SMC.", 'about.p3': "Depuis octobre 2026, je suis en stage de data analyse et maintenance prédictive chez <b>Air France Industries KLM E&M</b>.", 'g2.m': 'Machine learning, deep learning, décision et apprentissage, optimisation combinatoire, programmation orientée objet', 'g3.m': "Maintenance prédictive et IVHM, systèmes de l'avion, fiabilité, sûreté et certification, conception d'aéronefs, stabilité et contrôle, structures composites", 'g.leg1': 'Formation', 'g.leg2': 'Expérience',
    'resume.h': 'Parcours', 'sg1': 'Data Science & IA', 'sg3': 'Ingénierie & simulation', 'skills.h': 'Compétences', 'skills.modeling_h': 'Modélisation & développement', 'g2.degree': "Diplôme d'ingénieur", 'g3.degree': 'MSc, double diplôme', 'g4.date': 'Oct. 2026 – Mars 2027', 'g4.role': 'Stage en maintenance prédictive',
    'edu3.t': 'Classe préparatoire PCSI / PC*',
    'proj.h': 'Projets',
    'proj.intro': "Des études de cas concrètes, de la modélisation physique à l'IA appliquée.", 'proj.other': 'Autres projets', 'proj.other_intro': 'Signal, optimisation, conception aéronautique et prévision',
    'proj.more': 'Voir l’étude de cas', 'modal.tech': 'Technologies', 'modal.gallery': 'Visuels du projet', 'modal.resources': 'Ressources', 'case.results': 'Résultats', 'case.problem': 'Situation', 'case.role': 'Tâche', 'case.approach': 'Actions', 'case.prev': 'Projet précédent', 'case.next': 'Projet suivant', 'case.back': 'Retour aux projets', 'contact.p': "Une question sur mes projets, une proposition ou une collaboration\u00a0? Écrivez-moi, je réponds volontiers.",
    'footer': '© 2026 Ugo Roccamatisi, Paris'
  },
  en: {
    'nav.about': 'About', 'nav.resume': 'Resume', 'nav.proj': 'Projects',
    'hero.eyebrow': 'Aeronautics, physical modelling and artificial intelligence',
    'hero.tagline': "Aeronautical engineer specialising in physical models, data science and AI.",
    'hero.proof': 'Centrale Lille and Cranfield University, data and predictive maintenance intern at Air France',
    'hero.cta': 'View my projects', 'hero.github': 'View my GitHub',
    'about.h': 'About',
    'about.p1': "A graduate of the <b>MSc in Aerospace Vehicle Design at Cranfield University</b> and an engineering student at <b>Centrale Lille</b>, I work at the intersection of aeronautics, physics and artificial intelligence.",
    'about.p2': "My common thread is turning complex phenomena into useful models. I have applied it to A320 brakes with <b>Airbus</b> and to hospital flows with <b>CHU de Lille</b>, leading to an IEEE SMC publication.", 'about.p3': "Since October 2026, I have been a data analysis and predictive maintenance intern at <b>Air France Industries KLM E&M</b>.", 'g2.m': 'Machine learning, deep learning, decision & learning, combinatorial optimization, object-oriented programming', 'g3.m': 'Predictive maintenance & IVHM, aircraft systems, reliability, safety & certification, aircraft design, stability & control, composite structures', 'g.leg1': 'Education', 'g.leg2': 'Experience',
    'resume.h': 'Resume', 'sg1': 'Data Science & AI', 'sg3': 'Engineering & simulation', 'skills.h': 'Skills', 'skills.modeling_h': 'Modelling & development', 'g2.degree': 'Engineering degree', 'g3.degree': 'MSc, double degree', 'g4.date': 'Oct. 2026 – Mar. 2027', 'g4.role': 'Predictive maintenance internship',
    'edu3.t': 'Preparatory classes PCSI / PC*',
    'proj.h': 'Projects',
    'proj.intro': 'Concrete case studies, from physical modelling to applied AI.', 'proj.other': 'Other projects', 'proj.other_intro': 'Signal processing, optimisation, aircraft design and forecasting',
    'proj.more': 'View case study', 'modal.tech': 'Technologies', 'modal.gallery': 'Project visuals', 'modal.resources': 'Resources', 'case.results': 'Results', 'case.problem': 'Situation', 'case.role': 'Task', 'case.approach': 'Actions', 'case.prev': 'Previous project', 'case.next': 'Next project', 'case.back': 'Back to projects', 'contact.p': "A question about my projects, a proposal or a collaboration? Write to me, I'll be glad to answer.",
    'footer': '© 2026 Ugo Roccamatisi, Paris'
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
    btn.classList.toggle('is-active', active);
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
    fr: { category: 'Aéronautique · Modélisation', role: 'Mémoire Airbus & Cranfield', contribution: 'Conception du modèle thermique, calibration et pipeline de prédiction', value: '≈ 3 °C', outcome: 'd’erreur de prédiction au toucher' },
    en: { category: 'Aeronautics · Modelling', role: 'Airbus & Cranfield thesis', contribution: 'Thermal model design, calibration and prediction pipeline', value: '≈ 3 °C', outcome: 'prediction error at touchdown' }
  },
  pinn: {
    fr: { category: 'IA scientifique · Thermique', role: 'Projet personnel de recherche', contribution: 'Développement des PINN direct, paramétrique et inverse, avec étude d’identifiabilité', value: '±2 K', outcome: 'sur le modèle direct · énergie identifiée à 2 % près' },
    en: { category: 'Scientific AI · Thermal', role: 'Personal research project', contribution: 'Direct, parametric and inverse PINN development, including identifiability analysis', value: '±2 K', outcome: 'on the direct model · energy identified within 2%' }
  },
  saab: {
    fr: { category: 'Données de vol · Signal', role: 'Analyse reproductible', contribution: 'Analyse spectrale, fusion des capteurs et détection de rupture', value: '±0,02 s', outcome: 'de résolution sur la détection du toucher' },
    en: { category: 'Flight data · Signal', role: 'Reproducible analysis', contribution: 'Spectral analysis, sensor fusion and change-point detection', value: '±0.02 s', outcome: 'touchdown detection resolution' }
  },
  chu: {
    fr: { category: 'IA appliquée · Santé', role: 'Responsable du pôle prédiction', contribution: 'Pilotage du pôle prédiction et développement du classifieur', value: '73 %', outcome: 'de précision sur 26 950 séjours de test' },
    en: { category: 'Applied AI · Healthcare', role: 'Prediction team lead', contribution: 'Prediction team leadership and classifier development', value: '73%', outcome: 'accuracy across 26,950 test stays' }
  },
  rsp: {
    fr: { category: 'Traitement du signal · Problèmes inverses', role: 'Projet académique, Centrale Lille', contribution: 'Reconstruction et validation de quatre notebooks', value: '4 labs', outcome: 'reproductibles, exécutés de bout en bout' },
    en: { category: 'Signal processing · Inverse problems', role: 'Academic project, Centrale Lille', contribution: 'Rebuilt and validated four scientific notebooks', value: '4 labs', outcome: 'reproducible and executed end to end' }
  },
  bwb: {
    fr: { category: 'Conception aéronautique', role: 'Responsable intégration moteurs', contribution: 'Intégration propulsive, conception de la nacelle et conformité CS-25', value: '62', outcome: 'étudiants dans une équipe internationale' },
    en: { category: 'Aircraft design', role: 'Engine integration lead', contribution: 'Propulsion integration, nacelle design and CS-25 compliance', value: '62', outcome: 'students in an international team' }
  },
  vrp: {
    fr: { category: 'Optimisation · Reinforcement Learning', role: 'Projet en équipe de 6', contribution: 'Benchmark reproductible et Q-Learning avec 2-opt', value: '−13 %', outcome: 'sur le coût face à la meilleure référence' },
    en: { category: 'Optimisation · Reinforcement Learning', role: 'Six-person team project', contribution: 'Reproducible benchmark and Q-Learning with 2-opt', value: '−13%', outcome: 'cost versus the strongest reference method' }
  },
  prophet: {
    fr: { category: 'Séries temporelles', role: 'Projet personnel', contribution: '20 ans de données, modèle Prophet entraîné et évalué', value: '9,7 %', outcome: 'de MAPE sur une année complète de test' },
    en: { category: 'Time series', role: 'Personal project', contribution: '20 years of data, Prophet model trained and evaluated', value: '9.7%', outcome: 'MAPE over a full test year' }
  }
};
// Domaine de chaque projet : fixe la couleur de sa catégorie et de son résultat
// aero = bleu, ia = vert, signal = rouge, optim = jaune
const PROJECT_DOMAIN = { btem: 'aero', bwb: 'aero', saab: 'aero', pinn: 'ia', chu: 'ia', rsp: 'signal', prophet: 'signal', vrp: 'optim' };
const FEATURED_PROJECTS = ['btem', 'pinn', 'saab', 'chu'];
const OTHER_PROJECTS = ['rsp', 'bwb', 'vrp', 'prophet'];
const PROJECT_ORDER = [...FEATURED_PROJECTS, ...OTHER_PROJECTS];

// Outils affichés sur une carte : 3 pour les projets phares ; sur les petites cartes,
// au plus 2 et 20 caractères au total, pour rester sur une seule ligne
function cardTech(tech, featured) {
  if (featured) return tech.slice(0, 3);
  const kept = [];
  let chars = 0;
  for (const t of tech) {
    if (kept.length === 2 || (kept.length && chars + t.length > 20)) break;
    kept.push(t); chars += t.length;
  }
  return kept;
}

function projectCard(p, featured) {
  const t = p[LANG];
  const meta = PROJECT_META[p.id][LANG];
  const card = document.createElement('article');
  card.className = 'proj-card' + (featured ? ' proj-card-featured' : ' proj-card-compact');
  card.dataset.domain = PROJECT_DOMAIN[p.id] || 'aero';
  card.dataset.open = p.id;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', T[LANG]['proj.more'] + ' : ' + t.title);
  card.innerHTML =
    '<div class="proj-banner' + (p.fit === 'contain' ? ' fit-contain' : '') + '"><img src="' + p.banner + '" alt="" loading="lazy" onerror="this.remove()"></div>' +
    '<div class="proj-body">' +
      '<div class="proj-meta"><span class="proj-category">' + meta.category + '</span></div>' +
      '<h3>' + t.title + '</h3>' +
      '<p class="proj-contribution">' + meta.contribution + '</p>' +
      '<div class="proj-outcome"><div><strong>' + meta.value + '</strong><p>' + meta.outcome + '</p></div></div>' +
      '<div class="proj-footer"><span class="proj-tech">' + cardTech(p.tech, featured).map(tech => '<span>' + tech + '</span>').join('') + '</span><span class="proj-arrow" aria-hidden="true">↗</span></div>' +
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
  const projectIndex = PROJECT_ORDER.indexOf(id);
  const previousId = PROJECT_ORDER[(projectIndex - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length];
  const nextId = PROJECT_ORDER[(projectIndex + 1) % PROJECT_ORDER.length];
  const previousProject = window.PROJECTS.find(x => x.id === previousId);
  const nextProject = window.PROJECTS.find(x => x.id === nextId);
  const links = (p.links || []).map(l =>
    '<a href="' + l.href + '" target="_blank" rel="noopener noreferrer" class="case-link">' + (LANG === 'fr' ? l.label_fr : l.label_en) + '</a>'
  ).join('');
  const caseStudy = [
    ['case.problem', '<p class="star-p">' + t.situation + '</p>', ''],
    ['case.role', '<p class="star-p">' + t.task + '</p>', ''],
    ['case.approach', '<ul class="star-ul">' + t.actions.map(x => '<li>' + x + '</li>').join('') + '</ul>', ''],
    ['case.results', '<ul class="star-ul result-list">' + t.results.map(x => '<li>' + x + '</li>').join('') + '</ul>', ' case-results']
  ].map(([k, body, className]) => '<section class="case-block' + className + '"><h4>' + T[LANG][k] + '</h4>' + body + '</section>').join('');
  const gallery = (p.gallery || []).filter(g => g.video || g.src !== p.banner).map(g => {
    const caption = LANG === 'fr' ? g.fr : g.en;
    const media = g.video
      ? '<video controls preload="metadata" playsinline aria-label="' + caption + '" onerror="this.closest(\'figure\').remove()"><source src="' + g.video + '" type="video/mp4"></video>'
      : '<img src="' + g.src + '" alt="' + caption + '" loading="lazy" onerror="this.closest(\'figure\').remove()">';
    return '<figure class="mgal-fig">' + media + '<figcaption>' + caption + '</figcaption></figure>';
  }).join('');
  document.getElementById('modal-content').innerHTML =
    '<div class="case-hero proj-banner' + (p.fit === 'contain' ? ' fit-contain' : '') + '"><img src="' + p.banner + '" alt="" onerror="this.remove()"></div>' +
    '<div class="case-content">' +
      '<header class="case-intro" data-domain="' + (PROJECT_DOMAIN[id] || 'aero') + '"><span class="proj-category">' + meta.category + '</span>' +
        '<h3 id="modal-title">' + t.title + '</h3>' +
        '<p class="case-meta">' + t.meta + '</p>' +
        '<div class="case-highlight"><span class="case-role">' + meta.role + '</span><div class="case-kpi"><strong>' + meta.value + '</strong><span>' + meta.outcome + '</span></div></div>' +
      '</header>' +
      '<div class="case-layout"><div class="case-narrative">' + caseStudy + '</div>' +
        (gallery ? '<aside class="case-media"><h4>' + T[LANG]['modal.gallery'] + '</h4><div class="mgal">' + gallery + '</div></aside>' : '') +
      '</div>' +
      '<footer class="case-resources"><h4>' + T[LANG]['modal.resources'] + '</h4>' +
        '<div class="case-resources-row"><div><span class="case-resource-label">' + T[LANG]['modal.tech'] + '</span><div class="case-tech">' + p.tech.map(x => '<span>' + x + '</span>').join('') + '</div></div>' +
        (links ? '<div class="case-links">' + links + '</div>' : '') + '</div>' +
      '</footer>' +
      '<nav class="case-navigation" aria-label="Navigation entre les projets">' +
        '<button type="button" class="case-nav-btn case-nav-prev" data-project-nav="' + previousId + '"><span>← ' + T[LANG]['case.prev'] + '</span><strong>' + previousProject[LANG].title + '</strong></button>' +
        '<button type="button" class="case-nav-back" data-project-close>' + T[LANG]['case.back'] + '</button>' +
        '<button type="button" class="case-nav-btn case-nav-next" data-project-nav="' + nextId + '"><span>' + T[LANG]['case.next'] + ' →</span><strong>' + nextProject[LANG].title + '</strong></button>' +
      '</nav>' +
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
    const projectNav = e.target.closest('[data-project-nav]');
    if (projectNav) {
      location.hash = '#project=' + projectNav.dataset.projectNav;
      return;
    }
    if (e.target.closest('[data-project-close]')) {
      closeModal();
      return;
    }
    const img = e.target.closest('.mgal-fig img');
    if (img) openLightbox(img.src);
  });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  setLang(LANG);
  syncProjectHash();

  /* Section en cours surlignée dans la navigation */
  const navLinks = [...document.querySelectorAll('#site-header nav a[href^="#"], #mobile-nav a[href^="#"]')];
  const spied = [...new Set(navLinks.map(a => a.getAttribute('href')))].map(h => document.querySelector(h)).filter(Boolean);
  const markActive = id => navLinks.forEach(a => {
    const on = a.getAttribute('href') === '#' + id;
    a.classList.toggle('is-active', on);
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) markActive(e.target.id); });
  }, { rootMargin: '-45% 0px -50% 0px' });
  spied.forEach(sec => spy.observe(sec));
  window.addEventListener('scroll', () => { if (window.scrollY < 200) markActive(''); }, { passive: true });
});
