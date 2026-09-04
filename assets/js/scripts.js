/* ===================== i18n ===================== */
const T = {
  fr: {
    'nav.about': 'À propos', 'nav.resume': 'Parcours', 'nav.proj': 'Projets',
    'hero.hi': 'Bonjour, je suis',
    'hero.tagline': "Élève-ingénieur Centrale Lille & Cranfield University. Modèles physiques et IA pour les systèmes aéronautiques.",
    'hero.avail': "Stage de fin d'études · 4 à 6 mois · à partir d'avril 2027",
    'hero.cta': 'Découvrir mes projets',
    'about.h': 'À propos',
    'about.p1': "Élève-ingénieur en double diplôme <b class=\"text-zinc-900 dark:text-white\">Centrale Lille</b> / <b class=\"text-zinc-900 dark:text-white\">Cranfield University</b>, je travaille là où la physique rencontre l'apprentissage : mon mémoire avec <b class=\"text-zinc-900 dark:text-white\">Airbus</b> combine un modèle thermique calibré sur données de vol et des PINN pour estimer la température des freins de l'A320.",
    'about.p2': "En stage de maintenance prédictive chez <b class=\"text-zinc-900 dark:text-white\">Air France Industries KLM E&M</b> d'octobre 2026 à mars 2027, je recherche un <b class=\"text-zinc-900 dark:text-white\">stage de fin d'études de 4 à 6 mois à partir d'avril 2027</b>.",
    'stat1': 'Précision du modèle freins A320', 'stat2': 'Étudiants coordonnés (BWB)',
    'stat3': 'Patients analysés (MIMIC-IV)', 'stat4': 'Article publié (SMC)',
    'resume.h': 'Parcours', 'edu.h': 'Formation', 'exp.h': 'Expérience', 'skills.h': 'Compétences',
    'edu1.s': "MSc in Aerospace Vehicle Design, option Aircraft Design. Mémoire avec Airbus.",
    'edu2.s': "Diplôme d'ingénieur généraliste. ML, optimisation, auto-formation (problèmes inverses, Markov, statistiques).",
    'edu3.t': 'Classe préparatoire PCSI / PC*', 'edu3.s': 'Lycée Albert Schweitzer, Le Raincy.',
    'exp1.s': "Stage : ingénieur de maintenance prédictive, Roissy-CDG. Indicateurs de dégradation et modèle prédictif d'alertes sur les systèmes A220 et B777.",
    'proj.h': 'Projets',
    'proj.intro': "Cliquez sur un projet pour le détail : contexte, contributions et documents.",
    'proj.more': 'Voir le détail', 'modal.contrib': 'Contributions', 'modal.tech': 'Technologies',
    'contact.p': "Je recherche un stage de fin d'études de 4 à 6 mois à partir d'avril 2027, en aéronautique, data science ou intelligence artificielle. Je réponds volontiers à toute question sur mes projets.",
    'footer': '© 2026 Ugo Roccamatisi · Paris, France'
  },
  en: {
    'nav.about': 'About', 'nav.resume': 'Resume', 'nav.proj': 'Projects',
    'hero.hi': "Hello, I'm",
    'hero.tagline': "Engineering student at Centrale Lille & Cranfield University. Physical models and AI for aeronautical systems.",
    'hero.avail': "End-of-studies internship · 4 to 6 months · from April 2027",
    'hero.cta': 'Explore my projects',
    'about.h': 'About',
    'about.p1': "A dual-degree engineering student at <b class=\"text-zinc-900 dark:text-white\">Centrale Lille</b> / <b class=\"text-zinc-900 dark:text-white\">Cranfield University</b>, I work where physics meets learning: my thesis with <b class=\"text-zinc-900 dark:text-white\">Airbus</b> combines a thermal model calibrated on flight data with PINNs to estimate A320 brake temperature.",
    'about.p2': "Interning in predictive maintenance at <b class=\"text-zinc-900 dark:text-white\">Air France Industries KLM E&M</b> from October 2026 to March 2027, I'm looking for a <b class=\"text-zinc-900 dark:text-white\">4 to 6 month end-of-studies internship starting April 2027</b>.",
    'stat1': 'A320 brake model accuracy', 'stat2': 'Students coordinated (BWB)',
    'stat3': 'Patients analyzed (MIMIC-IV)', 'stat4': 'Published paper (SMC)',
    'resume.h': 'Resume', 'edu.h': 'Education', 'exp.h': 'Experience', 'skills.h': 'Skills',
    'edu1.s': "MSc in Aerospace Vehicle Design, Aircraft Design option. Thesis with Airbus.",
    'edu2.s': "General engineering degree. ML, optimization, self-study (inverse problems, Markov, statistics).",
    'edu3.t': 'Preparatory classes PCSI / PC*', 'edu3.s': 'Lycée Albert Schweitzer, Le Raincy.',
    'exp1.s': "Internship: predictive maintenance engineer, Roissy-CDG. Degradation indicators and a predictive alert model on A220 and B777 systems.",
    'proj.h': 'Projects',
    'proj.intro': "Click a project for details: context, contributions and documents.",
    'proj.more': 'View details', 'modal.contrib': 'Contributions', 'modal.tech': 'Technologies',
    'contact.p': "I'm looking for a 4 to 6 month end-of-studies internship starting April 2027, in aeronautics, data science or artificial intelligence. Happy to answer any question about my projects.",
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

/* ===================== Thème clair / sombre ===================== */
const rootEl = document.documentElement;
function applyTheme(dark) {
  rootEl.classList.toggle('dark', dark);
  document.getElementById('icon-moon').classList.toggle('hidden', dark);
  document.getElementById('icon-sun').classList.toggle('hidden', !dark);
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
}
let savedTheme = 'light'; // clair par défaut
try { savedTheme = localStorage.getItem('theme') || 'light'; } catch (e) {}

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
      '<div class="proj-banner"><img src="' + p.banner + '" alt="" loading="lazy" onerror="this.remove()"></div>' +
      '<div class="p-5 flex flex-col grow">' +
        '<h3 class="font-bold leading-snug mb-2">' + t.title + '</h3>' +
        '<p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 grow">' + t.excerpt + '</p>' +
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
  document.getElementById('modal-content').innerHTML =
    '<div class="proj-banner" style="height:210px;border-radius:1rem 1rem 0 0;overflow:hidden"><img src="' + p.banner + '" alt="" onerror="this.remove()"></div>' +
    '<div class="p-6 md:p-8">' +
      '<h3 class="text-xl md:text-2xl font-bold mb-1">' + t.title + '</h3>' +
      '<p class="text-sm text-zinc-500 dark:text-zinc-400 mb-4">' + t.meta + '</p>' +
      '<p class="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">' + t.description + '</p>' +
      '<h4 class="font-semibold mb-2">' + T[LANG]['modal.contrib'] + '</h4>' +
      '<ul class="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-5">' +
        t.contributions.map(c => '<li>' + c + '</li>').join('') +
      '</ul>' +
      '<h4 class="font-semibold mb-2">' + T[LANG]['modal.tech'] + '</h4>' +
      '<div class="flex flex-wrap gap-2 mb-5">' +
        p.tech.map(x => '<span class="text-xs font-semibold bg-blue-50 text-accblue dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 px-2.5 py-1 rounded-full">' + x + '</span>').join('') +
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
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(savedTheme === 'dark');
  document.getElementById('theme-toggle').addEventListener('click', () => applyTheme(!rootEl.classList.contains('dark')));
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  setLang(LANG);
});
