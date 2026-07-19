# Portfolio - Jami Infante

Portfolio personnel de Jami Infante (développeur), construit avec **Astro** +
**Tailwind CSS v4**. Site statique, zéro-JS, direction artistique brutaliste
moderne. Déployable sur Vercel.

## Stack

- [Astro](https://astro.build) - génération statique, zéro-JS par défaut
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- TypeScript strict
- `@astrojs/sitemap` - sitemap automatique
- `@fontsource/space-grotesk` (display) + `@fontsource/space-mono` (mono)

## Commandes

| Commande          | Action                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Installe les dépendances                   |
| `npm run dev`     | Serveur de dev sur `http://localhost:4321` |
| `npm run build`   | Build de production dans `./dist/`         |
| `npm run preview` | Prévisualise le build local                |

## Ajouter un projet

Chaque projet est un fichier Markdown dans `src/content/projects/`.
Le nom du fichier (`mon-projet.md`) devient l'URL (`/projets/mon-projet`).

1. Crée `src/content/projects/mon-projet.md`.
2. Renseigne le frontmatter (schéma validé par Zod dans
   [`src/content.config.ts`](src/content.config.ts)) :

```markdown
---
title: "Mon Projet"
description: "Une phrase de présentation."
stack: ["Astro", "TypeScript"]        # affiché en tags monospace
image: "/projects/mon-projet.svg"      # dans public/ ; défaut : placeholder.svg
demo: "https://exemple.com"            # optionnel (URL)
github: "https://github.com/..."       # optionnel (URL)
order: 6                                # ordre d'affichage (croissant)
featured: false                        # true = mis en avant sur l'accueil
date: "2025"                            # optionnel
---

## Contenu

Le corps Markdown est rendu sur la page détail du projet.
```

3. (Optionnel) Ajoute un visuel dans `public/projects/`. Les placeholders
   fournis sont des SVG au format 1200×675 (ratio 16:9).

## Structure

```
public/
  favicon.svg · favicon.ico · og.svg   # SEO / réseaux
  projects/                            # visuels des projets
src/
  components/   Header · Footer · ProjectCard · SectionHeading · Tag
  content/projects/*.md                # collection de projets
  layouts/Base.astro                   # <head> SEO, header, footer
  pages/
    index.astro                        # /  (accueil, hero + projets phares)
    projets/index.astro                # /projets
    projets/[slug].astro               # /projets/mon-projet
    a-propos.astro                     # /a-propos
    contact.astro                      # /contact
    404.astro                          # page 404
  styles/global.css                    # tokens @theme + styles brutalist
  consts.ts                            # métadonnées site, nav, liens sociaux
  content.config.ts                    # schéma Zod de la collection
```

## Design tokens

Couleurs et polices sont centralisées dans le bloc `@theme` de
[`src/styles/global.css`](src/styles/global.css) (fond crème, encre quasi-noire,
un seul accent vert acide). Les modifier met à jour tout le site.

## Déploiement (Vercel)

1. Mets à jour le champ `site` dans [`astro.config.mjs`](astro.config.mjs) avec
   ton domaine (utilisé pour le sitemap et l'Open Graph).
2. Importe le dépôt sur Vercel - le preset Astro est détecté automatiquement
   (build : `npm run build`, sortie : `dist/`).

> Astuce SEO : `public/og.svg` est un placeholder. Certains réseaux sociaux ne
> gèrent pas les SVG en Open Graph - remplace-le par un PNG 1200×630 pour un
> rendu optimal des partages.
