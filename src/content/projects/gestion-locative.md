---
title: "Bailiz — Gestion locative"
description: "Application web de gestion locative : baux, états des lieux, quittances et documents générés en PDF, avec signature sur écran et données stockées en local."
stack: ["React", "TypeScript", "Vite", "Dexie (IndexedDB)", "react-pdf", "PWA"]
image: "/projects/placeholder.svg"
demo: ""
github: ""
order: 3
featured: true
date: "2026"
---

## À propos du projet

Outil de gestion locative pensé pour les propriétaires bailleurs : gérer ses
**baux**, réaliser des **états des lieux** et produire les documents associés
(**PDF prêts à signer et à archiver**) depuis une seule application.

> Descriptif provisoire — à compléter (contexte, périmètre exact, captures).

## Points clés

- **React + TypeScript** de bout en bout, avec validation de formulaires par
  `react-hook-form` + `zod`.
- **Local-first** : les données sont stockées dans le navigateur via **Dexie
  (IndexedDB)** — aucune donnée personnelle n'est envoyée à un serveur.
- **Génération de documents PDF** avec `@react-pdf/renderer` (baux, états des
  lieux) et **signature manuscrite sur écran** (`signature_pad`).
- **PWA** installable, export/sauvegarde des données en archive ZIP.
- **Tests unitaires** avec Vitest.

## Ce que j'ai appris

Concevoir une application métier complète en TypeScript : modélisation des
données côté client, architecture local-first et génération de documents
conformes aux usages réels de la location.
