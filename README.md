# Carmel High School Science Bowl

This is the official website of Carmel High School Science Bowl, located in Carmel, Indiana. Live at [carmelscibowl.github.io](https://carmelscibowl.github.io).

## Local development

```bash
# Serve locally on http://localhost:8000
python3 -m http.server 8000
```

Or use the VS Code "Live Server" extension for auto-reload.

## File structure

```
carmelscibowl.github.io/
├── index.html          # Home
├── about.html
├── team.html
├── history.html
├── camp.html
├── join.html
├── 404.html
├── css/
│   └── styles.css      # Shared site stylesheet
├── js/
│   └── main.js         # Mobile nav toggle
└── assets/
    └── images/         # Photos, hero image, team headshots, etc.
```

## Adding/editing content

Each `.html` page is self-contained. The `<header>` and `<footer>` markup is duplicated across pages — when changing nav links or footer info, update all six pages.

`TODO` markers in the templates flag fields that need real content (photos, links, dates, contact info).

## Deployment

GitHub Pages serves the `main` branch automatically. Push changes and they're live in ~30 seconds.
