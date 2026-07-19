/**
 * Contenu éditable de la page À propos.
 * Modifier ici les textes ; la mise en page vit dans les composants.
 */

export interface Experience {
  period: string;
  role: string;
  company: string;
  /** Badge affiché en en-tête de carte (CDI, Alternance, Stage…). */
  type: string;
  /** Chemin du logo dans /public/experiences. */
  logo?: string;
  /** Fond sombre derrière le logo (nécessaire si le logo est clair). */
  logoDark?: boolean;
  highlights: string[];
  stack: string[];
}

export interface Formation {
  year: string;
  title: string;
  text: string;
}

export interface Passion {
  title: string;
  /** Photo 16:9 dans /public/passions. */
  image?: string;
  text: string;
}

// Expérience professionnelle, du plus récent au plus ancien.
export const experiences: Experience[] = [
  {
    period: '2024 - Aujourd’hui',
    role: 'Développeur full-stack',
    company: 'EMIL FREY FRANCE (P.B.O) - MecaSystems',
    type: 'CDI',
    logo: '/experiences/EFF-logo.png',
    logoDark: false,
    highlights: [
      'Interfaçage DMS : développement des web services REST et maintenance des web services SOAP connectant MecaSystems aux logiciels de gestion des ateliers (comptabilité, commandes, devis…), pour éliminer les re-saisies entre systèmes. Refonte et documentation des endpoints (Swagger / OpenAPI).',
      'Développement full-stack : interfaces web (React, webdev, Windev) pour l’appli métier et l’e-commerce, logique métier, API REST, échanges JSON et automatisation de flux. Plateforme déployée en marque blanche pour plusieurs fournisseurs.',
      'CI/CD : mise en place de pipelines GitLab avec runners sur environnements Linux / Docker - déploiement continu et génération automatique de la documentation d’API.',
      'Data & bases de données : intégration des fichiers de stock, conception et évolution de bases HFSQL / SQL, optimisation de requêtes.',
      'Performance & infrastructure : développement d’un outil de test de charge en Python (Selenium, multi-thread) compilé en exécutable et lancé depuis plusieurs postes, pour analyser le comportement des serveurs, du WAF et du load balancer, puis ajuster l’infrastructure.',
      'Déploiement & exploitation : livraisons sur environnements Linux et Docker, mises en production, administration serveur (SSH, FTP / SFTP), scripts d’automatisation PowerShell, mise en place d’un NAS média pour les images du site.',
    ],
    stack: ['React', 'WinDev / WebDev', 'HFSQL', 'REST', 'SOAP', 'GitLab CI/CD', 'Python', 'Docker', 'Linux'],
  },
  {
    period: '2023 - 2024',
    role: 'Développeur web',
    company: 'FLAURAUD - AURILIS GROUP (MecaSystems)',
    type: 'CDI',
    logo: '/experiences/FLD-logo.png',
    highlights: [
      'Même produit et même poste que ci-dessus, avant le rachat du groupe par Emil Frey : missions centrées sur la modernisation et la migration de l’existant.',
      'Reprise d’un applicatif vieux de 10 ans pour le remettre aux normes actuelles (architecture orientée objets, API, REST) et recréation graphique des éléments d’interface.',
      'Changement d’ERP : développement des liens avec un nouvel ERP tiers, remplacement de requêtes en base par des procédures stockées et optimisation des traitements.',
      'Création de la landing page publique du produit et maintenance des web services SOAP.',
    ],
    stack: ['WinDev / WebDev', 'HFSQL', 'SOAP', 'REST'],
  },
  {
    period: 'Sept. 2022 - Sept. 2023',
    role: 'Développeur web',
    company: 'NUMTECH',
    type: 'Alternance',
    logo: '/experiences/NT-logo.png',
    highlights: [
      'Conception, développement et maintenance de sites web et d’outils internes pour des clients.',
      'Exploitation d’API web et de données collectées par des capteurs, lus via Raspberry Pi.',
    ],
    stack: ['PHP', 'JavaScript', 'Tailwind CSS', 'Ajax / jQuery', 'MySQL', 'PostgreSQL', 'Raspberry Pi'],
  },
  {
    period: 'Juil. - Août 2022',
    role: 'Assistant ingénieur',
    company: 'NUMTECH',
    type: 'Job d’été',
    logo: '/experiences/NT-logo.png',
    highlights: [
      'Développement sur différents projets internes et clients orientés web, dont des tâches de traitement de données pour un client.',
      'Poursuite et aboutissement de l’outil de gestion démarré lors du stage.',
    ],
    stack: ['PHP', 'JavaScript', 'HTML / CSS'],
  },
  {
    period: 'Avr. - Juin 2022',
    role: 'Développeur web',
    company: 'NUMTECH',
    type: 'Stage',
    logo: '/experiences/NT-logo.png',
    highlights: [
      'Développement d’un outil interne de gestion de licence client : analyse de l’existant, analyse des besoins, développement en PHP suivant le modèle MVC.',
    ],
    stack: ['PHP (MVC)', 'JavaScript', 'MySQL', 'PHPMailer', 'PHPOffice'],
  },
];

// Compétences groupées - front-end en premier (orientation React / TypeScript).
export const skills: Record<string, string[]> = {
  'Front-end': ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS', 'Vue.js'],
  'Back-end & API': ['API REST', 'SOAP', 'Swagger / OpenAPI', 'Node.js / Express', 'PHP', 'Symfony', 'MySQL', 'PostgreSQL', 'MongoDB', 'HFSQL'],
  Langages: ['JavaScript / TypeScript', 'PHP', 'Python', 'PowerShell', 'Java', 'C', 'C#'],
  'DevOps & outils': ['Docker', 'GitLab CI/CD', 'Git / GitHub', 'Linux', 'VS Code', 'Postman', 'Bruno'],
};

// Formation, du plus récent au plus ancien.
export const formation: Formation[] = [
  {
    year: '2022 - 2023',
    title: 'Licence pro Application Web',
    text: 'Développement de services web (Servlet/JSP, Spring Boot, Quarkus), applications PHP / Symfony, ReactJS, React Native. Bases de données SQL et noSQL, IoT (ESP, LoRa, Sigfox), gestion de projet, tests unitaires et d’intégration.',
  },
  {
    year: '2020 - 2022',
    title: 'DUT Informatique',
    text: 'C, programmation orientée objets (Java, C#, C++), IHM (XAML, XML), UML, Merise, .NET, Linux, Shell, bases de données (PL/SQL, SQL, PRO-C Oracle), programmation web (PHP, JS, HTML, CSS).',
  },
  {
    year: '2019 - 2020',
    title: 'Baccalauréat STI2D option SIN',
    text: 'Option Système d’Information et Numérique : Arduino, Python, réseau, codages binaire, hexadécimal, ASCII.',
  },
];

// Passions - section plus personnelle.
export const passions: Passion[] = [
  {
    title: 'Domotique, embarqué & matériel',
    image: '/passions/switch.png',
    text: 'Entre domotique, systèmes embarqués et administration de mes serveurs personnels, je bidouille autant le logiciel que le matériel - De l\'impression 3D jusqu’à la modification de consoles de jeu.',
  },
  {
    title: 'Mécanique automobile',
    image: '/passions/mecanique.jpg',
    text: 'Grand fan d’automobile et assez manuel, j’ai appris par moi-même, à l’aide d’internet, à faire l’entretien de ma voiture personnelle ainsi que de celle de mes parents. Cette passion prend beaucoup de temps mais est très gratifiante.',
  },
  {
    title: 'Réparation & bricolage',
    image: '/passions/atelier.avif',
    text: 'La réparation d’appareils électroniques m’intéresse depuis l’enfance, une passion du bricolage transmise par mon père. Je répare tout type d’objet électronique, plus particulièrement des smartphones : dextérité, concentration et précision.',
  },
  {
    title: 'Data & finance immobilière',
    image: '/passions/immo.png',
    text: 'Je m’intéresse à l’investissement et à la fiscalité immobilière, et j’aime relier le code à cette logique métier : c’est de là qu’est né Bailiz, mon outil de gestion locative.',
  },
  {
    title: 'Sport en salle',
    image: '/passions/basic.jpg',
    text: 'Je pratique la musculation depuis 3 ans et demi, à raison de trois séances par semaine. Je cours également régulièrement.',
  },
  {
    title: 'Jeux vidéo & simulation',
    image: '/passions/JamRacing.jpg',
    text: 'Passionné par les jeux vidéo multijoueurs et les simulations réalistes, j\'apprécie tout particulièrement les expériences immersives. Mon intérêt pour ce domaine m\'a d\'ailleurs poussé à concevoir et souder mon propre simulateur de conduite sur mesure.',
  },
];
