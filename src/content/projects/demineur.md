---
title: "Démineur"
description: "Le jeu classique du démineur recodé de zéro en JavaScript pur, sans framework ni bibliothèque : un exercice d'algorithmique jouable directement en ligne."
stack: ["JavaScript", "HTML", "CSS"]
image: "/projects/demineur.jpg"
demo: "https://jami-inf.github.io/demineur_JS/"
github: "https://github.com/Jami-INF/demineur_JS"
order: 8
featured: false
date: "2023"
---

## À propos du projet

Le démineur classique, recodé de zéro en **JavaScript pur** - sans framework
ni bibliothèque. L'objectif de cet exercice : implémenter proprement toute la
logique du jeu, de la génération de la grille à la détection de fin de partie.

Le cœur du projet est l'**algorithme de révélation en cascade** : cliquer sur
une case vide révèle récursivement toutes les cases voisines jusqu'aux
frontières chiffrées, comme dans le jeu original.

## Fonctionnalités

- **Trois niveaux de difficulté** qui font varier la taille de la grille et le
  nombre de mines.
- **Placement aléatoire des mines** et calcul des indices de chaque case
  (nombre de mines voisines).
- **Révélation en cascade** des cases vides par parcours récursif.
- **Pose de drapeaux** et détection automatique de la victoire ou de la
  défaite.

> Jouable directement dans le navigateur - voir la démo en ligne.

## Ce que j'ai appris

Manipuler une grille en deux dimensions (voisinage, parcours récursif,
conditions d'arrêt), gérer les événements du DOM sans framework et structurer
la logique d'un jeu en fonctions bien découpées. Un bon rappel que JavaScript
seul suffit largement pour ce genre de mécanique.
