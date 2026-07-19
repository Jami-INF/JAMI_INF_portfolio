---
title: "Portfolio - Mathis Detroussat"
description: "Site vitrine statique conçu et développé de A à Z pour un chargé de projet événementiel : direction artistique sur-mesure, pipeline images automatisé et SEO complet."
stack: ["Astro", "Tailwind CSS", "TypeScript", "sharp", "GitHub Actions"]
image: "/projects/mathis-detroussat.png"
demo: "https://mathis-detroussat.fr"
github: ""
order: 1
featured: true
date: "2026"
---

## À propos du projet

Site vitrine conçu et développé pour **Mathis Detroussat**, chargé de projet
événementiel, afin de présenter son parcours, ses projets, ses événements et
ses compétences auprès d'écoles et de recruteurs. J'ai réalisé la conception
web, le design, l'intégration, l'outillage et la mise en production ; le
contenu et le parcours sont ceux de Mathis.

L'objectif : un site **statique** (ultra-rapide, sans coût serveur), avec une
direction artistique forte - style « sticker » rose/crème, titres détourés -
et un vrai soin sur la performance, l'accessibilité et le référencement.

## Points clés

- **Site statique performant** - Généré avec Astro (HTML, quasi zéro JS envoyé
  au navigateur) et Tailwind CSS, déployé en CI/CD (GitHub Actions) sur GitHub
  Pages, domaine `.fr` chez OVH. Aucun serveur à maintenir.
- **Fonctionnalités sur-mesure** - Galerie avec lightbox maison (navigation
  clavier, gestion du focus), bouton « voir plus » pour charger les photos à la
  demande, page compétences avec jauges circulaires SVG, menu mobile,
  animations au scroll respectant `prefers-reduced-motion`. 100 % responsive.
- **Pipeline images automatisé** - Script Node (sharp) : redimensionnement,
  filigrane de crédit gravé dans l'image, traitement idempotent avec sauvegarde
  des originaux. Sources réduites de **~570 Mo à ~97 Mo**, WebP dimensionnés
  par usage (vignettes ~80–150 Ko), temps de build divisé par ~6.
- **SEO de bout en bout** - Title, meta description, URL canonique et Open
  Graph uniques par page, données structurées JSON-LD (`schema.org/Person`),
  sitemap + `robots.txt`, image de partage OG 1200×630 générée par script,
  HTML sémantique (`h1` unique, `alt`, `aria`).
- **Pages légales** conformes au cadre français (mentions légales et politique
  de confidentialité).

## Ce que j'ai appris

Livrer un site complet pour un vrai « client » : recueillir ses besoins,
proposer une direction artistique, industrialiser le traitement des images et
pousser la performance et le SEO jusqu'au bout de la chaîne.
