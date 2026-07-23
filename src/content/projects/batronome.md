---
title: "Batronome - métronome visuel"
description: "Métronome visuel pour orchestre : un anneau de 60 LEDs bat la mesure, piloté par Arduino, dans un boîtier imprimé en 3D alimenté par une batterie récupérée. Projet de fin d'études du Bac STI2D SIN."
stack: ["Arduino", "C / C++", "Électronique", "Impression 3D", "Li-ion 18650"]
image: "/projects/batronome.jpg"
demo: ""
github: ""
order: 10
featured: false
date: "2020"
---

## À propos du projet

Le **Batronome** est un métronome *visuel* : là où un métronome classique fait
« tic-tac », lui bat la mesure par la lumière. Un anneau de **60 LEDs**,
visible à dix mètres, permet à des musiciens débutants de rester synchronisés
sans chef d'orchestre.

Conçu en équipe de trois pour le **projet de fin d'études du Baccalauréat
STI2D**, spécialité SIN (Systèmes d'Information et Numérique) - académie de
Clermont-Ferrand, session 2020. C'est mon premier « produit » complet, de
l'expression du besoin jusqu'à l'objet fonctionnel.

## Le produit

- **Anneau de 60 LEDs** qui matérialise le tempo, lisible de loin et en pleine
  lumière.
- **Écran OLED** affichant le BPM, **bouton poussoir** pour régler le rythme.
- **Boîtier imprimé en 3D**, monté sur un trépied photo standard.
- Cœur **Arduino Nano**, programme écrit en C.
- **Rechargeable en USB**, autonomie mesurée à plus de **8 heures**.

![Face avant : l'anneau de 60 LEDs qui bat la mesure](/projects/batronome-led.jpg)

## Une vraie démarche d'ingénierie

Le projet ne s'est pas résumé à souder des composants : il a suivi une chaîne
de conception complète.

- **Cahier des charges et diagramme des exigences** - visible à 10 m,
  transportable, autonome au moins deux heures, esthétique et proportionné.
- **Étude de marché** - constat qu'aucun métronome visuel de ce type n'existe,
  seulement des applications.
- **Chaîne d'énergie et d'information** - schéma des flux entre boutons, carte
  Arduino, affichage et alimentation.
- **Choix de l'alimentation raisonné** - comparaison de **six technologies de
  batterie** (piles AAA, pile 9 V, plomb, Li-Po, Ni-Cd, Li-ion) avec calcul
  d'autonomie en Wh pour chacune.

Le choix final : une **batterie 18650 Li-ion récupérée** (3,6 V / 3350 mAh),
issue de matériaux destinés à la destruction - une ancienne batterie de PC
portable, une batterie externe et des câbles de récupération.

> Concevoir avec ce qu'on a sous la main plutôt que d'acheter du neuf : une
> logique de débrouille et de réemploi que j'ai gardée depuis.

![Intérieur du boîtier : Arduino, câblage et cellule 18650 récupérée](/projects/batronome-interieur.jpg)

## Ce que ce projet m'a appris

Concevoir un objet **de bout en bout** : traduire un besoin en exigences,
arbitrer des choix techniques chiffrés, prototyper, fabriquer et livrer un
produit qui marche. C'est exactement la démarche que je retrouve aujourd'hui
dans mes projets logiciels - la matière change, la méthode reste.
