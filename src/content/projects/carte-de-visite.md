---
title: "Générateur de carte de visite"
description: "Application web pour composer des cartes de visite et les exporter en PDF prêt à imprimer : formats maison et professionnel, QR code intégré, aperçu en direct. Développée en pilotant l'IA à partir d'un besoin spécifié."
stack: ["React", "Vite", "react-pdf", "Tailwind CSS"]
image: "/projects/carte-visite.png"
demo: ""
github: "https://github.com/Jami-INF/Carte-de-visite-generator"
order: 2
featured: true
ai: true
date: "2026"
---

## À propos du projet

Application web permettant de composer une carte de visite et de l'exporter en
**PDF prêt à imprimer**, sans passer par un outil de PAO. L'utilisateur
renseigne ses informations, choisit un format - **maison** ou
**professionnel** - et obtient un aperçu fidèle avant export.

Comme pour Bailiz, ce projet est né d'un **besoin concret à couvrir vite** :
plutôt que de partir d'une page blanche, j'ai **spécifié précisément le
résultat attendu** (formats d'impression, gabarits, QR code, fidélité
aperçu/PDF) et **piloté l'IA** (Claude) pour l'implémentation, en validant
chaque étape.

## Points clés

- **Rendu PDF côté client** avec `@react-pdf/renderer` : le document généré est
  identique à l'aperçu, aucune dépendance serveur.
- **QR code intégré** à la carte (coordonnées, lien) généré à la volée.
- **Deux gabarits** (maison / professionnel) avec mise en page dédiée.
- Interface construite en **React + Tailwind CSS**, servie par **Vite**.

## Ce que j'ai appris

La génération de documents PDF dans le navigateur : contraintes de mise en
page print (formats, marges, polices) et fidélité entre l'aperçu écran et le
fichier final - et la valeur d'une spécification claire quand on développe
avec l'IA.
