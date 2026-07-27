---
title: "Portfolio 2026"
description: "Ce site : portfolio statique néo-brutaliste construit avec Astro et Tailwind CSS 4 - design system de composants, contenu en Markdown validé au build, SEO et accessibilité soignés."
metaDescription: "Portfolio statique néo-brutaliste en Astro et Tailwind CSS 4 : design system, contenu Markdown, SEO et accessibilité soignés."
stack: ["Astro", "Tailwind CSS 4", "TypeScript", "Content Collections", "GitHub Actions"]
image: "/projects/portfolio-2026.png"
demo: "https://jami-infante.fr/"
github: "https://github.com/Jami-INF/JAMI_INF_portfolio"
order: 3
featured: false
date: "2026"
---

## À propos du projet

Le site que vous êtes en train de consulter. Conçu et développé de zéro comme
une vitrine de mon travail - et comme un terrain d'application de ce que je
défends : un site **100 % statique**, rapide, accessible et maintenable, avec
une direction artistique **néo-brutaliste** assumée (palette réduite
crème / encre / vert acide, typographies Space Grotesk et Space Mono, cadres
épais, marquee).

## Points clés

- **Design system de composants** - La typographie et les motifs récurrents
  (titres display, labels monospace, boutons, images encadrées, tags,
  surlignage accent) n'existent qu'à un seul endroit, sous forme de composants
  Astro réutilisables.
- **Contenu séparé de la présentation** - Un fichier Markdown par projet
  (Content Collections), avec un frontmatter **validé par un schéma zod au
  build** : la grille des projets, les fiches détaillées et les projets mis en
  avant sur l'accueil sont générés automatiquement. Les données de la page À
  propos vivent dans un module TypeScript typé.
- **SEO de bout en bout** - Titre, meta description, URL canonique et balises
  Open Graph par page, sitemap généré automatiquement, HTML sémantique.
- **Accessibilité** - Lien d'évitement, états `aria-current`, focus visible
  marqué, respect de `prefers-reduced-motion`, contrastes AA.
- **Performance** - Quasi aucun JavaScript envoyé au navigateur, polices
  auto-hébergées, images lazy avec dimensions réservées (pas de layout shift).
- **Déploiement continu** - pipeline GitHub Actions : build et mise en ligne
  sur GitHub Pages à chaque push, domaine `jami-infante.fr` chez OVH.

## Ce que j'ai appris

Formaliser un design system minimal mais strict. Constater qu'un site
peut être expressif visuellement tout en restant sobre techniquement : du
HTML, du CSS, et presque rien d'autre. Création d'un site portfolio montrable à des recruteurs, contenant bien plus qu'un simple CV, également un exemple de ce que je sais faire.
