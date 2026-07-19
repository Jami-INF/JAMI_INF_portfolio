# Plan de contenu

> Convention : les lignes en _italique dans un encadré_ sont des **notes de travail / décisions à prendre**, pas du contenu destiné au site.

---

## 1. Accueil `/`

- Nom + accroche (1 phrase : qui je suis / ce que je cherche)
- 2-3 projets marqués

> _À décider : ajouter « 4 ans d'expérience » ou un objectif ?_

---

## 2. À propos `/a-propos`

### Intro

Je suis Jami Infante, développeur avec 4 ans d'expérience. Je conçois et livre des applications web, du back-end à l'interface.

Passé par l'alternance puis en poste, j'ai construit des applications complètes en environnement pro — API, bases de données, interfaces — et je continue d'explorer de nouvelles technologies à travers mes projets personnels.

Je ne me suis jamais éloigné du milieu de l'informatique depuis que je suis au lycée, au moment où j'ai fait mes premiers projets personnels et scolaires.

Cette curiosité envers l'informatique m'a permis de découvrir avant même de m'orienter dans l'informatique les différents langages de programmation de manière autodidacte.

### Expérience

> _Trame par entrée : Période · Poste · Entreprise (ou « secteur X ») · Type (CDI / Alternance) · 2-3 réalisations (livraisons + impacts) · Stack._

#### 2024 → aujourd'hui — Développeur full-stack · EMIL FREY FRANCE (P.B.O)

Je travaille sur **MecaSystems**, la marketplace de pièces automobiles du groupe (plusieurs milliers d'utilisateurs pros, 85 000+ références), du back-end jusqu'au support. La plateforme est désormais déployée pour plusieurs fournisseurs (Barrault, etc.). Rôle **polyvalent** couvrant toute la chaîne :

- **Interfaçage DMS** — Développement des web services **REST** (nouveautés) et maintenance des web services **SOAP** connectant MecaSystems aux logiciels de gestion des ateliers (comptabilité, commandes, devis…), pour éliminer les re-saisies entre systèmes. Refonte et documentation des endpoints (**Swagger / OpenAPI**).
- **Développement full-stack** — Interfaces web (React, WebDev) pour l'appli métier et l'e-commerce ; logique métier, API REST, échanges JSON et automatisation de flux.
- **CI/CD** — Mise en place de pipelines **GitLab** avec runners sur environnements Linux / Docker : déploiement continu et génération automatique de la documentation d'API.
- **Data & bases de données** — Intégration des fichiers de stock, conception et évolution de bases **HFSQL / SQL**, optimisation de requêtes, fiabilité et cohérence des données.
- **Déploiement & exploitation** — Livraisons sur environnements Linux et Docker, mises en production, administration serveur et réseau (SSH, FTP / SFTP), scripts d'automatisation PowerShell, mise en place d'un NAS média centralisant l'ensemble des images du site.
- **Performance & infrastructure** — Développement d'un outil de test de charge en Python (Selenium, multi-thread) compilé en exécutable pour être lancé en parallèle depuis plusieurs postes/serveurs, afin de simuler commandes et navigation, d'analyser le comportement des serveurs, du WAF et du load balancer, puis d'ajuster l'infrastructure en conséquence (RAM, stratégie de load balancing round-robin / sticky cookie…).
- **Qualité & support** — Tests et non-régression, maintenance corrective/évolutive, diagnostic d'incidents et support utilisateurs.

**Stack :** React · WinDev / WebDev · HFSQL · SOAP · REST · GitLab CI/CD · Docker · Linux

#### 2023 – 2024 — Développeur Web · FLAURAUD – AURILIS GROUP

Même produit et même poste que ci-dessus (MecaSystems), avant le rachat du groupe par Emil Frey. Sur cette période, mes missions portaient principalement sur la **modernisation et la migration de l'existant** :

- **Refonte technique** — Reprise d'un applicatif vieux de 10 ans pour le remettre aux normes de programmation actuelles (architecture orientée objets, API, REST).
- **Changement d'ERP** — Développement des liens avec un nouvel **ERP tiers**, remplacement de requêtes en base par des procédures stockées et optimisation des traitements.
- **Refonte graphique** — Recréation des éléments d'interface.
- **Partie publique** — Création de la landing page publique du produit : <https://mecasystems.flauraud.fr/>
- **Interfaçage DMS** — Maintenance des web services SOAP.

**Stack :** WinDev / WebDev · HFSQL · SOAP · REST · ERP tiers

#### Septembre 2022 – Septembre 2023 — Alternance · Développeur Web · NUMTECH

Conception, développement et maintenance de sites web et d'outils internes pour des clients, à partir d'API web et de données collectées par des capteurs (lecture des capteurs via Raspberry Pi).
**Stack :** PHP · JavaScript · HTML / CSS · Tailwind CSS · Ajax / jQuery · MySQL · PostgreSQL · Raspberry Pi

#### Juillet – Août 2022 — Job d'été · Assistant Ingénieur · NUMTECH

Développement sur différents projets internes et clients orientés web, dont diverses tâches de traitement de données (data treatment) pour un client. Poursuite et aboutissement de l'outil de gestion démarré lors du stage.
**Stack :** PHP · JavaScript · HTML / CSS.

#### Avril – Juin 2022 — Stage de 10 semaines · Développeur Web · NUMTECH

Développement d'un outil interne de gestion de licence client : analyse de l'existant, analyse des besoins, développement en PHP suivant le modèle MVC. Ma mission était de créer ou reprendre le développement de cet outil.
**Stack :** PHP (MVC) · JavaScript · HTML / CSS · MySQL · PHPMailer · PHPOffice

### Compétences

> _À ajuster à la maîtrise réelle (langages / frameworks / outils)._

**Front-end**
Le développement d'interfaces est mon terrain de prédilection : je construis des applications avec **React**, **TypeScript** et **JavaScript**, HTML, CSS et Tailwind. J'ai également travaillé avec Vue.js.

**Back-end & API**
Développement de la logique métier et des services d'échange entre applications : **API REST** et **SOAP** (documentation Swagger / OpenAPI), Node.js / Express, PHP (dont Symfony et le modèle MVC). Côté données : MySQL, PostgreSQL, MongoDB et HFSQL.

**Langages**
Au quotidien : JavaScript / TypeScript, PHP et Python (+ PowerShell pour l'automatisation). Bases solides en Java, C et C#, issues de ma formation et de mes projets.

**DevOps & outils**
Docker, GitLab CI/CD, Git / GitHub, environnements Linux, VS Code, Postman, Bruno.

### Diplômes & formation

#### 2022 – 2023 — Licence pro Application Web

Développement de services web, Servlet/JSP, Spring Boot, Quarkus. Applications PHP, Symfony, ReactJS, React Native. Bases de données SQL, noSQL. IOT (ESP, LORA, SIGFOX), gestion de projet, tests unitaires, d'intégration…

#### 2020 – 2022 — DUT Informatique

C, Programmation Orientée Objets (Java, C#, C++), IHM (XAML, XML), UML, Merise, .NET, Linux, Shell, bases de données (PL/SQL, SQL, PRO-C ORACLE), Programmation Web (PHP, JS, HTML, CSS).

#### 2019 – 2020 — Baccalauréat STI2D option SIN

Première et terminale en option Système d'Information et Numérique (SIN) : Arduino, Python, réseau, codages binaires, hexadécimal, ASCII.

### Passions

**Mécanique automobile**
Étant un grand fan d'automobile et étant assez manuel, j'ai appris par moi-même à l'aide d'internet à faire l'entretien de ma voiture personnelle ainsi que celle de mes parents. Cette passion prend beaucoup de temps mais est très gratifiante.

**Jeux vidéo**
J'adore jouer à des jeux vidéo, surtout avec mes amis. Ce que j'aime particulièrement, ce sont les jeux de simulation réaliste, car ils me font me sentir vraiment immergé. D'ailleurs, j'ai fabriqué mon propre simulateur de conduite en utilisant des tubes de fer soudés.

**Réparation de smartphones et bricolage**
La réparation d'appareils électroniques m'intéresse depuis mon enfance où mon père m'a transmis cette passion du bricolage qui m'est resté. Depuis, je répare tout type d'objet électronique mais plus particulièrement des smartphones. Ce hobby requiert une grande dextérité, beaucoup de concentration et de précision.

**Sport en salle**
Je pratique la musculation depuis 1 an et demi. J'ai décidé de commencer au début de mon stage de deuxième année et depuis, j'y vais trois fois par semaine.

**Domotique, embarqué & matériel**
Entre domotique, systèmes embarqués et administration de mes serveurs personnels, je bidouille autant le logiciel que le matériel — jusqu'à la modification d'appareils audio ou de consoles rétro.

**Data & finance immobilière**
Je m'intéresse à l'investissement et à la fiscalité immobilière, et j'aime relier le code à cette logique métier : c'est de là qu'est né Bailiz, mon outil de gestion locative.

---

## 3. Projets `/projets`

> _Grille automatique de tous les projets, gérée par les fichiers `.md` dans `/projets/nom`._

### Projets à référencer

- Générateur de carte de visite (IA)
- Outil de gestion locative (baux, états des lieux)

### Portfolio — Mathis Detroussat

Site vitrine conçu et développé pour **Mathis Detroussat** (chargé de projet événementiel), pour présenter son parcours, ses projets, ses événements et ses compétences auprès d'écoles et de recruteurs. J'ai réalisé la conception web, le design, l'intégration, l'outillage et la mise en production ; le contenu et le parcours sont ceux de Mathis.

Objectif : un site **statique** (ultra-rapide, sans coût serveur), avec une direction artistique forte (style « sticker » rose/crème, titres détourés) et un vrai soin sur la performance, l'accessibilité et le référencement.

Points clés :

- **Site statique performant** — Généré avec Astro 6 (HTML, quasi zéro JS envoyé au navigateur) et Tailwind CSS 4, déployé en CI/CD (GitHub Actions) sur GitHub Pages, domaine `.fr` chez OVH. Aucun serveur à maintenir.
- **Fonctionnalités sur-mesure** — Galerie avec lightbox maison (navigation clavier, focus), bouton « voir plus » (chargement à la demande), page compétences avec jauges circulaires SVG, menu mobile, animations au scroll respectant `prefers-reduced-motion`. 100 % responsive.
- **Pipeline images automatisé** — Script Node (sharp) : redimensionnement, filigrane de crédit gravé dans l'image, traitement idempotent avec sauvegarde des originaux. Sources réduites de **~570 Mo à ~97 Mo**, WebP dimensionnés par usage (vignettes ~80–150 Ko), temps de build divisé par ~6.
- **SEO de bout en bout** — Title / meta / URL canonique / Open Graph uniques par page, données structurées JSON-LD (`schema.org/Person`), `sitemap-index.xml` + `robots.txt`, image de partage OG 1200×630 générée par script, HTML sémantique (`<h1>` unique, `alt`, `aria`), pages légales en `noindex`.
- **Pages légales** conformes au cadre français (mentions légales + politique de confidentialité).

**Stack :** Astro 6 · Tailwind CSS 4 · TypeScript / JS vanilla · sharp · GitHub Actions · GitHub Pages · OVH

**En ligne :** <https://mathis-detroussat.fr>

### MecaSystems — Marketplace de pièces automobiles

Application métier et marketplace e-commerce du groupe Flauraud / Emil Frey, destinée aux professionnels de la réparation automobile (identification et commande de pièces, gestion des devis, CRM, gestion des retours, interfaçage avec les DMS des ateliers). Je travaille dessus en tant que développeur full-stack, du back-end jusqu'au support.

Mes principales contributions :

- **Interfaçage DMS** — Développement des web services **REST** et maintenance des web services **SOAP** qui connectent MecaSystems aux logiciels de gestion des ateliers (comptabilité, commandes, devis…), afin de supprimer les re-saisies entre systèmes.
- **Développement full-stack** — Interfaces web pour l'application métier et l'e-commerce (React, WebDev), logique métier, API REST, échanges JSON et automatisation de flux.
- **Data & bases de données** — Intégration des fichiers de stock, conception et évolution des bases HFSQL / SQL, optimisation des requêtes et fiabilité des données.
- **Performance & infrastructure** — Développement d'un outil de test de charge en Python (Selenium, multi-thread) compilé en exécutable et lancé en parallèle depuis plusieurs postes/serveurs, pour simuler commandes et navigation, analyser le comportement des serveurs, du WAF et du load balancer, et ajuster l'infrastructure (RAM, stratégie de load balancing…) ; mise en place d'un NAS média pour les images du site.
- **Partie publique & référencement** — Réalisation de la landing page publique du produit et travail sur le référencement (SEO) du site.

**Stack :** React · WinDev / WebDev · HFSQL · SOAP · REST · Docker · Linux

**Lien :** <https://mecasystems.flauraud.fr/>

### Computer vision — IA

Dans le cadre d'un projet tutoré, j'ai travaillé sur un modèle d'IA capable d'identifier des objets sur des images dans le cadre d'une caméra de surveillance. Nous travaillons en groupe de cinq et nous avons séparé le projet en deux principales parties : deux élèves responsable de l'identification et trois de la segmentation d'images dont moi. En tant que chef du projet, j'ai du avoir une vue globale du projet ainsi que sur les jalons.

**Stack :** Python · OpenCV · TensorFlow · Keras

**Lien :** <https://docs.google.com/document/d/11tEnY0qw9z-OqnjKgXOE3Xj9j7BjHHeYZXXqhwzXoqA/edit?usp=drive_link>

---

## 4. Contact `/contact`

- **Localisation :** Région de Clermont-Ferrand — Télétravail possible
- **Email :** `jamiinfante@gmail.com`
- **GitHub** `https://github.com/Jami-INF`
- **LinkedIn** `https://www.linkedin.com/in/jami-infante/`


