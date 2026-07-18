---
title: "Générateur de carte de visite"
description: "Application web pour composer des cartes de visite et les exporter en PDF prêt à imprimer : formats maison et professionnel, QR code intégré, aperçu en direct."
stack: ["React", "Vite", "react-pdf", "Tailwind CSS"]
image: "/projects/placeholder.svg"
demo: ""
github: ""
order: 2
featured: true
date: "2026"
---

## À propos du projet

Application web permettant de composer une carte de visite et de l'exporter en
**PDF prêt à imprimer**, sans passer par un outil de PAO. L'utilisateur
renseigne ses informations, choisit un format — **maison** ou
**professionnel** — et obtient un aperçu fidèle avant export.

> Descriptif provisoire — à compléter (contexte, captures, lien de démo).

## Points clés

- **Rendu PDF côté client** avec `@react-pdf/renderer` : le document généré est
  identique à l'aperçu, aucune dépendance serveur.
- **QR code intégré** à la carte (coordonnées, lien) généré à la volée.
- **Deux gabarits** (maison / professionnel) avec mise en page dédiée.
- Interface construite en **React + Tailwind CSS**, servie par **Vite**.

## Ce que j'ai appris

La génération de documents PDF dans le navigateur : contraintes de mise en
page print (formats, marges, polices) et fidélité entre l'aperçu écran et le
fichier final.
