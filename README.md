# Ugo Roccamatisi — portfolio

Source for [ugo-roccamatisi.github.io](https://ugo-roccamatisi.github.io), a
bilingual portfolio covering aerospace engineering, physical modelling, data
science and applied AI projects.

## Structure

```text
.
├── index.html                 # Single-page portfolio
├── assets/css/styles.css      # Components and responsive styling
├── assets/js/scripts.js       # Rendering, language switch and project modal
├── assets/js/projects-data.js # Detailed project case studies
├── images/                    # Hero, logos, skills and project figures
├── videos/                    # Short project demonstrations
└── docs/                      # Public project reports
```

## Preview locally

No build step is required:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Content notes

- Airbus flight data and fitted thesis parameters are not included.
- Group reports and partner-project figures remain subject to their original
  authors' and institutions' rights.
- Project repositories linked from the site contain the reproducible code when
  it can be shared publicly.
