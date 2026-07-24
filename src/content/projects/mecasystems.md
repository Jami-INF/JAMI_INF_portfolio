---
title: "MecaSystems"
description: "Marketplace de pièces automobiles pour les professionnels de la réparation : interfaçage DMS (REST / SOAP), e-commerce, data et infrastructure. Mon quotidien de développeur full-stack."
stack: ["React", "WinDev / WebDev", "HFSQL", "REST", "SOAP", "GitLab CI/CD", "Python", "Docker", "Windows/IIS"]
image: "/projects/mecasystems.png"
demo: "https://mecasystems.flauraud.fr/"
github: ""
order: 4
featured: false
date: "2023 - aujourd'hui"
---

## À propos du projet

Application métier et marketplace e-commerce du groupe Flauraud / Emil Frey,
destinée aux professionnels de la réparation automobile : identification et
commande de pièces, gestion des devis, CRM, gestion des retours et interfaçage
avec les DMS des ateliers. J'y travaille en tant que **développeur
full-stack**, du back-end jusqu'au support.

## Mes principales contributions

- **Interfaçage outils d'atelier/DMS** - Développement des web services **REST** et maintenance
  des web services **SOAP** qui connectent MecaSystems aux logiciels de gestion
  des ateliers (comptabilité, commandes, devis…), afin de supprimer les
  re-saisies entre systèmes. Interface entre Le site de vente en ligne et des tablettes de diagnostique mécanique automobile permettant d'identifier la voiture en directe et de passer des commandes directement depuis la tablette. Refonte et documentation des endpoints
  (**Swagger / OpenAPI**).
- **CI/CD** - Mise en place de pipelines **GitLab** avec runners sur
  environnements Linux / Docker : déploiement continu et génération automatique
  de la documentation d'API.
- **Développement full-stack** - Interfaces web pour l'application métier et
  l'e-commerce (React, Webdev, Windev), logique métier, API REST, échanges JSON et
  automatisation de flux. Plateforme déployée en marque blanche pour plusieurs
  fournisseurs.
- **Data & bases de données** - Intégration des fichiers de stock, conception
  et évolution des bases HFSQL / SQL, optimisation des requêtes et fiabilité
  des données.
- **Paiement CB sécurisé** - Intégration et maintenance du module de paiement CB de la banque.
  Gestion du flux complet avec double retour banque front et back permettant de valider la 
  commande même si le contexte n'est plus bon au moment du retour. Gestion du retour banque 
  sur le bon serveur malgrès le load-balancer en parralèle avec l'équipe infra et sécurité. 
- **Performance et infrastructure** - Développement d'un outil de test de
  charge en Python (Selenium, multi-thread) compilé en exécutable et lancé en
  parallèle depuis plusieurs postes, pour simuler commandes et navigation,
  analyser le comportement des serveurs, du WAF et du load balancer, et
  ajuster l'infrastructure. Mise en place d'un NAS média pour les images du
  site.
- **Partie publique et référencement** - Réalisation de la landing page
  publique du produit et travail sur le référencement (SEO) du site.

## Contexte

Projet mené chez **Flauraud - Aurilis Group** (2023–2024) puis **Emil Frey
France** (depuis 2024) : voir le détail du parcours sur la page
[À propos](/a-propos).
