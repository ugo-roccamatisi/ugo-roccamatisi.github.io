/* ===================== i18n ===================== */
const T = {
  fr: {
    'nav.about': 'À propos', 'nav.resume': 'Parcours', 'nav.proj': 'Projets',
    'hero.tagline': "Ingénieur en aéronautique, data & IA.",
    'hero.avail': "Stage de fin d'études · 4 à 6 mois · à partir d'avril 2027",
    'hero.cta': 'Découvrir mes projets',
    'about.h': 'À propos',
    'about.p1': "Passionné de physique, je l'applique au domaine qui me fascine depuis toujours : l'aéronautique, dans lequel je suis diplômé d'un <b class=\"text-zinc-900\">MSc in Aerospace Vehicle Design de Cranfield University</b>.",
    'about.p2': "À <b class=\"text-zinc-900\">Centrale Lille</b>, j'ai construit un socle d'ingénieur généraliste et je m'y suis spécialisé en <b class=\"text-zinc-900\">IA et data science</b>. Des compétences mises en pratique avec le CHU de Lille (application IA publiée à la conférence IEEE SMC), puis dans mon mémoire avec <b class=\"text-zinc-900\">Airbus</b>, où modèle physique et PINN (réseaux de neurones informés par la physique) estiment la température des freins de l'A320.", 'about.p3': "Actuellement en stage de maintenance prédictive chez <b class=\"text-zinc-900\">Air France Industries KLM E&M</b>, je recherche un <b class=\"text-zinc-900\">stage de fin d'études de 4 à 6 mois à partir d'avril 2027</b>.", 'g1.d': 'Le Raincy · 2020 – 2023', 'g2.d': "Diplôme d'ingénieur · 2023 – 2027", 'g2.m': 'Machine learning, deep learning, décision et apprentissage, optimisation combinatoire, programmation orientée objet', 'g3.d': 'MSc, double diplôme · 2025 – 2026', 'g3.m': "Maintenance prédictive et IVHM, systèmes de l'avion, fiabilité, sûreté et certification, conception d'aéronefs, stabilité et contrôle, structures composites", 'g4.d': 'Stage maintenance prédictive · oct. 2026 – mars 2027', 'g.leg1': 'Formation', 'g.leg2': 'Expérience',
    'stat1': 'Précision du modèle freins A320', 'stat2': 'Étudiants coordonnés (BWB)',
    'stat3': 'Patients analysés (MIMIC-IV)', 'stat4': 'Article publié (SMC)',
    'resume.h': 'Parcours', 'sg1': 'Data Science & IA', 'sg2': 'Développement', 'sg3': 'Ingénierie & simulation', 'edu.h': 'Formation', 'exp.h': 'Expérience', 'skills.h': 'Compétences',
    'edu1.s': "MSc in Aerospace Vehicle Design, option Aircraft Design. Mémoire avec Airbus.",
    'edu2.s': "Diplôme d'ingénieur généraliste. ML, optimisation, auto-formation (problèmes inverses, Markov, statistiques).",
    'edu3.t': 'Classe préparatoire PCSI / PC*', 'edu3.s': 'Lycée Albert Schweitzer, Le Raincy.',
    'exp1.s': "Stage : ingénieur de maintenance prédictive, Roissy-CDG. Indicateurs de dégradation et modèle prédictif d'alertes sur les systèmes A220 et B777.",
    'proj.h': 'Projets',
    'proj.intro': "Cliquez sur un projet pour le détail : contexte, contributions et documents.",
    'proj.more': 'Voir le détail', 'modal.tech': 'Technologies', 'modal.gallery': 'Aperçu', 'star.s': 'Situation', 'star.t': 'Tâche', 'star.a': 'Actions', 'star.r': 'Résultats',
    'contact.p': "Contactez-moi par e-mail ou sur LinkedIn.",
    'footer': '© 2026 Ugo Roccamatisi · Paris, France'
  },
  en: {
    'nav.about': 'About', 'nav.resume': 'Resume', 'nav.proj': 'Projects',
    'hero.tagline': "Aeronautics, data & AI engineer.",
    'hero.avail': "End-of-studies internship · 4 to 6 months · from April 2027",
    'hero.cta': 'Explore my projects',
    'about.h': 'About',
    'about.p1': "Passionate about physics, I apply it to the field that has always fascinated me: aeronautics, in which I hold an <b class=\"text-zinc-900\">MSc in Aerospace Vehicle Design from Cranfield University</b>.",
    'about.p2': "At <b class=\"text-zinc-900\">Centrale Lille</b>, I built a broad engineering foundation and specialized in <b class=\"text-zinc-900\">AI and data science</b>. Skills put into practice with CHU de Lille (an AI application published at the IEEE SMC conference), then in my thesis with <b class=\"text-zinc-900\">Airbus</b>, where a physical model and PINNs (physics-informed neural networks) estimate A320 brake temperature.", 'about.p3': "Currently interning in predictive maintenance at <b class=\"text-zinc-900\">Air France Industries KLM E&M</b>, I'm looking for a <b class=\"text-zinc-900\">4 to 6 month end-of-studies internship starting April 2027</b>.", 'g1.d': 'Le Raincy · 2020 – 2023', 'g2.d': 'Engineering degree · 2023 – 2027', 'g2.m': 'Machine learning, deep learning, decision & learning, combinatorial optimization, object-oriented programming', 'g3.d': 'MSc, dual degree · 2025 – 2026', 'g3.m': 'Predictive maintenance & IVHM, aircraft systems, reliability, safety & certification, aircraft design, stability & control, composite structures', 'g4.d': 'Predictive maintenance internship · Oct. 2026 – March 2027', 'g.leg1': 'Education', 'g.leg2': 'Experience',
    'stat1': 'A320 brake model accuracy', 'stat2': 'Students coordinated (BWB)',
    'stat3': 'Patients analyzed (MIMIC-IV)', 'stat4': 'Published paper (SMC)',
    'resume.h': 'Resume', 'sg1': 'Data Science & AI', 'sg2': 'Development', 'sg3': 'Engineering & simulation', 'edu.h': 'Education', 'exp.h': 'Experience', 'skills.h': 'Skills',
    'edu1.s': "MSc in Aerospace Vehicle Design, Aircraft Design option. Thesis with Airbus.",
    'edu2.s': "General engineering degree. ML, optimization, self-study (inverse problems, Markov, statistics).",
    'edu3.t': 'Preparatory classes PCSI / PC*', 'edu3.s': 'Lycée Albert Schweitzer, Le Raincy.',
    'exp1.s': "Internship: predictive maintenance engineer, Roissy-CDG. Degradation indicators and a predictive alert model on A220 and B777 systems.",
    'proj.h': 'Projects',
    'proj.intro': "Click a project for details: context, contributions and documents.",
    'proj.more': 'View details', 'modal.tech': 'Technologies', 'modal.gallery': 'Preview', 'star.s': 'Situation', 'star.t': 'Task', 'star.a': 'Actions', 'star.r': 'Results',
    'contact.p': "Reach me by e-mail or on LinkedIn.",
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
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
  renderProjects();
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
function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid || !window.PROJECTS) return;
  grid.innerHTML = '';
  window.PROJECTS.forEach(p => {
    const t = p[LANG];
    const card = document.createElement('article');
    card.className = 'proj-card';
    card.innerHTML =
      '<div class="proj-banner' + (p.fit === 'contain' ? ' fit-contain' : '') + '"><img src="' + p.banner + '" alt="" loading="lazy" onerror="this.remove()"></div>' +
      '<div class="p-5 flex flex-col grow">' +
        '<h3 class="font-bold leading-snug mb-2">' + t.title + '</h3>' +
        '<p class="text-sm text-zinc-500 leading-relaxed mb-4 grow">' + t.excerpt + '</p>' +
        '<button class="self-start bg-accblue hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors" data-open="' + p.id + '">' + T[LANG]['proj.more'] + '</button>' +
      '</div>';
    grid.appendChild(card);
  });
  grid.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-open')));
  });
}

/* ===================== Modale ===================== */
const overlay = document.getElementById('modal-overlay');
function openModal(id) {
  const p = window.PROJECTS.find(x => x.id === id);
  if (!p) return;
  const t = p[LANG];
  const links = (p.links || []).map(l =>
    '<a href="' + l.href + '" target="_blank" class="bg-accblue hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">' + (LANG === 'fr' ? l.label_fr : l.label_en) + '</a>'
  ).join('');
  const star = [
    ['star.s', '<p class="star-p">' + t.situation + '</p>'],
    ['star.t', '<p class="star-p">' + t.task + '</p>'],
    ['star.a', '<ul class="star-ul">' + t.actions.map(x => '<li>' + x + '</li>').join('') + '</ul>'],
    ['star.r', '<ul class="star-ul">' + t.results.map(x => '<li>' + x + '</li>').join('') + '</ul>']
  ].map(([k, body]) => '<div class="star-block"><span class="star-lbl">' + T[LANG][k] + '</span>' + body + '</div>').join('');
  const gallery = (p.gallery || []).map(g => {
    const media = g.video
      ? '<video controls preload="metadata" playsinline onerror="this.closest(\'figure\').remove()"><source src="' + g.video + '" type="video/mp4"></video>'
      : '<img src="' + g.src + '" alt="" loading="lazy" onerror="this.closest(\'figure\').remove()">';
    return '<figure class="mgal-fig">' + media + '<figcaption>' + (LANG === 'fr' ? g.fr : g.en) + '</figcaption></figure>';
  }).join('');
  document.getElementById('modal-content').innerHTML =
    '<div class="proj-banner' + (p.fit === 'contain' ? ' fit-contain' : '') + '" style="height:210px;border-radius:1rem 1rem 0 0;overflow:hidden"><img src="' + p.banner + '" alt="" onerror="this.remove()"></div>' +
    '<div class="p-6 md:p-8">' +
      '<h3 class="text-xl md:text-2xl font-bold mb-1">' + t.title + '</h3>' +
      '<p class="text-sm text-zinc-500 mb-5">' + t.meta + '</p>' +
      star +
      (gallery ? '<h4 class="font-semibold mb-3 mt-6">' + T[LANG]['modal.gallery'] + '</h4><div class="mgal">' + gallery + '</div>' : '') +
      '<h4 class="font-semibold mb-2 mt-6">' + T[LANG]['modal.tech'] + '</h4>' +
      '<div class="flex flex-wrap gap-2 mb-5">' +
        p.tech.map(x => '<span class="text-xs font-semibold bg-blue-50 text-accblue border border-blue-200 px-2.5 py-1 rounded-full">' + x + '</span>').join('') +
      '</div>' +
      (links ? '<div class="flex flex-wrap gap-2">' + links + '</div>' : '') +
    '</div>';
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  document.body.style.overflow = '';
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

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!lightbox.classList.contains('hidden')) closeLightbox(); else closeModal();
  });
  lightbox.addEventListener('click', closeLightbox);
  document.getElementById('modal-content').addEventListener('click', e => {
    const img = e.target.closest('.mgal-fig img');
    if (img) openLightbox(img.src);
  });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  setLang(LANG);
});
