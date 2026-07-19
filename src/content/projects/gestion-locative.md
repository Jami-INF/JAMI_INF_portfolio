---
title: "Bailiz - Gestion locative"
description: "Application 100 % hors-ligne pour bailleur LMNP : baux conformes, états des lieux comparatifs avec photos, signatures horodatées et hachées. Spécifiée en cahier des charges complet, développée en pilotant l'IA."
stack: ["React", "TypeScript", "Vite", "Dexie (IndexedDB)", "react-pdf", "PWA"]
image: "/projects/bailiz.png"
demo: "https://jami-inf.github.io/Bailiz_gestion_immo/"
github: "https://github.com/Jami-INF/Bailiz_gestion_immo"
order: 3
featured: true
ai: true
date: "2026"
---

## La genèse

J'avais besoin **rapidement** d'un outil métier pour gérer mes propres
locations meublées (LMNP) : rédiger des baux conformes, réaliser les états des
lieux sur le terrain - souvent en cave ou en parking, **sans réseau**. Plutôt
que de m'abonner à un SaaS ou d'y passer des mois, j'ai fait le pari du
**spec-driven development avec l'IA** (Claude).

Concrètement : j'ai d'abord rédigé un **cahier des charges complet** -
contraintes juridiques (loi de 1989, décret « bail type » 2015-587, mobilier
obligatoire, décret états des lieux), modèle de données TypeScript, stack et
architecture imposées, **lots de développement ordonnés** et **critères
d'acceptation** mesurables. Puis j'ai fait implémenter le CDC lot par lot par
l'IA, en validant chaque lot contre ses critères avant de passer au suivant.

> Le cahier des charges, avec ses lots et ses livrables, est versionné à la
> racine du dépôt : la spécification fait partie du produit.

## Ce que fait l'application

- **Baux meublés conformes** - trame du bail type réglementaire, validations
  bloquantes (dépôt de garantie ≤ 2 mois, encadrement des loyers, décence
  énergétique), inventaire pré-rempli des 11 postes de mobilier obligatoires.
- **États des lieux optimisés tablette** - mode terrain plein écran, photos
  compressées à la capture, compteurs et clés, sauvegarde continue ; l'EDL de
  sortie duplique celui d'entrée, détecte les dégradations et calcule les
  retenues avec grille de vétusté, jusqu'à la lettre de restitution du dépôt.
- **Signatures sur écran à valeur probante renforcée** - nom tapé, « lu et
  approuvé », horodatage, **empreinte SHA-256** du PDF (Web Crypto),
  verrouillage du document signé.
- **100 % côté client** - aucune donnée ne quitte l'appareil : IndexedDB
  (Dexie), **PWA installable et hors-ligne**, PDF générés dans le navigateur,
  export/sauvegarde ZIP.

## Ce que ce projet démontre

Moins « j'ai écrit chaque ligne » que « **j'ai livré un produit** » : traduire
un cadre juridique en règles de validation, spécifier précisément, découper en
lots, diriger l'IA comme un outil d'ingénierie et contrôler le résultat contre
des critères d'acceptation. La leçon principale : **la qualité de la spec fait
la qualité du logiciel** - avec ou sans IA.
