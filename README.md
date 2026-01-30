# Rekhet - Academic Homepage

A modern, clean academic homepage template built with SvelteKit and Tailwind CSS. Designed for Professors, PhD students, and Researchers.

## Features

- **Modern Tech Stack**: Built with SvelteKit (Svelte 5 ready) and Tailwind CSS.
- **Academic Sections**: Pre-configured pages for Home (Bio/News), Publications, Research, Teaching, and CV.
- **Responsive Design**: Mobile-friendly layout.
- **Easy Customization**: Clear structure to update your information.
- **Markdown Support**: Includes `mdsvex` for writing content in Markdown if desired.

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)

### Installation

1.  Clone the repository (if applicable).
2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- **Profile & Bio**: Edit `src/routes/+page.svelte`.
- **Navigation**: Edit links in `src/routes/+layout.svelte`.
- **Publications**: Update the data array in `src/routes/publications/+page.svelte`.
- **Research Projects**: Edit `src/routes/research/+page.svelte`.
- **Teaching**: Edit `src/routes/teaching/+page.svelte`.
- **Styles**: Global styles and Tailwind configuration are in `src/app.css` and `tailwind.config.js`.

## Deployment

To create a production version of your app:

```bash
npm run build
```

This project uses `@sveltejs/adapter-auto`. For static hosting (GitHub Pages, Netlify, Vercel), you might want to switch to `@sveltejs/adapter-static` or the specific adapter for your platform.

## Tools Included

- **SvelteKit**: Application framework.
- **Tailwind CSS**: Utility-first CSS framework (with Typography plugin).
- **ESLint & Prettier**: Code quality and formatting.
- **Vitest & Playwright**: Testing frameworks.
- **Storybook**: Component development environment.
