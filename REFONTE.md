# Portfolio — refonte visuelle

Palette ivoire / bleu encre, typographie système et titres en Georgia, images sobres, projets mis en avant, compétences compactes et mise en page adaptée au mobile.

## Installer sur GitHub Pages

Copier le contenu du dossier dans votre dépôt existant, puis enregistrer et pousser les modifications sur la branche utilisée par GitHub Pages. Aucun outil de compilation ou installation de dépendances nécessaire.

Fichiers modifiés :
- `index.html`
- `assets/css/styles.css`
- `assets/js/scripts.js`
- `assets/favicon.svg` (nouveau)

Les données des sept projets, les images, les notebooks et les PDF sont conservés. Le dossier `.git` n'est pas inclus : conservez celui de votre dépôt existant.

## Modifier le contenu

- Projets et documents : `assets/js/projects-data.js`.
- Textes français / anglais : dictionnaire `T` dans `assets/js/scripts.js`.
- Couleurs et typographies : variables au début de `assets/css/styles.css`.

Le site ne charge plus Tailwind, Google Fonts ou Devicon depuis un CDN. L'ancien fichier `tailwind-config.js` est conservé mais n'est plus utilisé.

## Vérifications effectuées

Syntaxe JavaScript, présence des sept projets dans les deux langues, cibles des ancres et existence des images et documents référencés. Le rendu n'a pas été vérifié dans un navigateur dans cet environnement.
