# Josiah Brown — Personal Portfolio

A SvelteKit portfolio with a restrained, modern visual system and a ready-to-publish static GitHub Pages export.

## Run locally with Docker

From the project root:

```bash
docker compose up --build
```

Then open `http://localhost:5173`.

Changes inside `frontend/` are mounted into the container, so Vite should hot-reload while Docker is running.

## Publish with GitHub Pages (`/docs`)

The repository-level `docs/` folder is the static site GitHub Pages should publish. It is already generated in this ZIP.

After you edit the Svelte site or portfolio content, regenerate `docs/` from the project root with:

```bash
npm run build:github
```

The export script uses relative URLs, so the site works both at a custom domain and at a normal GitHub project URL such as `username.github.io/repository-name/`.

In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select your main branch and the **`/docs`** folder.
4. Save.

## Project structure

- `frontend/src/routes/+page.svelte` — landing page
- `frontend/src/lib/data/portfolio.ts` — centralized project/experience content
- `frontend/src/lib/components/` — reusable Svelte components
- `frontend/src/app.css` — global styling
- `frontend/static/visuals/` — project illustrations
- `scripts/build-github-pages.mjs` — dependency-free static exporter
- `docs/` — generated GitHub Pages site

The old `frontend/public/` folder has been removed. GitHub Pages does not publish Svelte source assets directly; it publishes the generated site in the root-level `docs/` folder.
