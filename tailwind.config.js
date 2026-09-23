// Configuration Tailwind, utilisée seulement pour régénérer assets/css/tailwind.css
// quand on ajoute de nouvelles classes utilitaires dans le HTML ou le JS :
//   npx tailwindcss@3 -i assets/css/tailwind.input.css -o assets/css/tailwind.css --minify
module.exports = {
  content: ['./index.html', './assets/js/*.js'],
  theme: { extend: {} },
  plugins: []
};
