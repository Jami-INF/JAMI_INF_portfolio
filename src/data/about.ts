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
  logoDark?: boolean;
  highlights: string[];
  stack: string[];
  /** Lien optionnel vers un document PDF dans /public/pdf */
  recommendation?: string;
}

export interface Formation {
  year: string;
  title: string;
  text: string;
  place?: string;
}

export interface Passion {
  title: string;
  image?: string;
  text: string;
  /** Lien optionnel : rend la carte cliquable (ex. la galerie photo). */
  href?: string;
}

// Expérience professionnelle, du plus récent au plus ancien.
export const experiences: Experience[] = [
  {
    period: '2024 - Aujourd\'hui',
    role: 'Développeur full-stack',
    company: 'EMIL FREY FRANCE (P.B.O) - Mecasystems',
    type: 'CDI',
    logo: '/experiences/EFF-logo.png',
    logoDark: false,
    highlights: [
      'Interfaçage DMS : développement des web services REST et maintenance des web services SOAP connectant Mecasystems aux logiciels de gestion des ateliers (comptabilité, commandes, devis…) et pour éliminer les re-saisies entre systèmes et optimiser les process. Refonte et documentation des endpoints (Swagger / OpenAPI).',
      'Développement full-stack : interfaces web (React, webdev, Windev) pour l\'appli métier et l\'e-commerce, logique métier, API REST, échanges JSON et automatisation de flux. Plateforme déployée en marque blanche pour plusieurs fournisseurs en plusieurs langues (Français, Allemand, Italien et Anglais).',
      'CI/CD : mise en place de pipelines GitLab avec runners sur environnements Linux / Docker, déploiement continu et génération automatique de la documentation d\'API.',
      'Data et bases de données : intégration des fichiers de stock, conception et évolution de bases HFSQL / SQL et optimisation de requêtes.',
      'Performance et infrastructure : développement d\'un outil de test de charge en Python (Selenium, multi-thread) compilé en exécutable et lancé depuis plusieurs postes, pour analyser le comportement des serveurs, du WAF et du load balancer, puis ajuster l\'infrastructure.',
      'Déploiement et exploitation : livraisons sur environnements Linux et Docker, mises en production, administration serveur (SSH, FTP / SFTP), scripts d\'automatisation PowerShell, mise en place d\'un NAS média pour les images du site.',
    ],
    stack: ['React', 'WinDev / WebDev', 'HFSQL', 'REST', 'SOAP', 'GitLab CI/CD', 'Python', 'Docker', 'Linux'],
  },
  {
    period: '2023 - 2024',
    role: 'Développeur full-stack',
    company: 'FLAURAUD - AURILIS GROUP Mecasystems',
    type: 'CDI',
    logo: '/experiences/FLD-logo.png',
    highlights: [
      'Même produit et même poste que ci-dessus, avant le rachat du groupe par Emil Frey : missions centrées sur la modernisation et la migration de l\'existant.',
      'Reprise d\'un applicatif vieux de 10 ans pour le remettre aux normes actuelles (architecture orientée objets, API, REST) et recréation graphique des éléments d\'interface.',
      'Changement d\'ERP : développement des liens avec un nouvel ERP tiers, remplacement de requêtes en base par des procédures stockées et optimisation des traitements.',
      'Création de la landing page publique du produit et maintenance des web services SOAP.',
      'Intégration et maintenance du module de paiement CB de la banque. Gestion du flux complet avec double retour banque front et back permettant de valider la commande même si le contexte n\'est plus bon au moment du retour. Gestion du retour banque sur le bon serveur malgrès le load-balancer en parralèle avec l\'équipe infra et sécurité.'
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
      'Conception, développement et maintenance de sites web et d\'outils internes pour des clients.',
      'Exploitation d\'API web et de données collectées par des capteurs, lus via Raspberry Pi.',
    ],
    stack: ['PHP', 'JavaScript', 'Tailwind CSS', 'Ajax / jQuery', 'MySQL', 'PostgreSQL', 'Raspberry Pi'],
    recommendation: '/pdf/lettre-recommandation-jami-infante.pdf',
  },
  {
    period: 'Juil. - Août 2022',
    role: 'Assistant ingénieur',
    company: 'NUMTECH',
    type: 'Job d\'été',
    logo: '/experiences/NT-logo.png',
    highlights: [
      'Développement sur différents projets internes et clients orientés web, dont des tâches de traitement de données pour un client.',
      'Poursuite et aboutissement de l\'outil de gestion démarré lors du stage.',
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
      'Développement d\'un outil interne de gestion de licence client : analyse de l\'existant, analyse des besoins, développement en PHP suivant le modèle MVC.',
    ],
    stack: ['PHP (MVC)', 'JavaScript', 'MySQL', 'PHPMailer', 'PHPOffice'],
  },
];

export const skills: Record<string, string[]> = {
  'Front-end': ['React', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS', 'Vue.js'],
  'Back-end & API': ['API REST', 'SOAP', 'Swagger / OpenAPI', 'Node.js / Express', 'PHP', 'Symfony', 'MySQL', 'PostgreSQL', 'MongoDB', 'HFSQL'],
  Langages: ['JavaScript / TypeScript', 'PHP', 'Python', 'PowerShell', 'Java', 'C', 'C#'],
  'DevOps & outils': ['Docker', 'GitLab CI/CD', 'Git / GitHub', 'Linux', 'VS Code', 'Postman', 'Bruno'],
};

export const formation: Formation[] = [
  {
    year: '2022 - 2023',
    title: 'Licence pro Application Web',
    text: 'Développement de services web (Servlet/JSP, Spring Boot, Quarkus), applications PHP / Symfony, ReactJS, React Native. Bases de données SQL et noSQL, IoT (ESP, LoRa, Sigfox), gestion de projet, tests unitaires et d\'intégration.',
    place: 'UCA - Université Clermont Auvergne',
  },
  {
    year: '2020 - 2022',
    title: 'DUT Informatique',
    text: 'C, programmation orientée objets (Java, C#, C++), IHM (XAML, XML), UML, Merise, .NET, Linux, Shell, bases de données (PL/SQL, SQL, PRO-C Oracle), programmation web (PHP, JS, HTML, CSS).',
    place: 'UCA - Université Clermont Auvergne',
  },
  {
    year: '2019 - 2020',
    title: 'Baccalauréat STI2D option SIN',
    text: 'Option Système d\'Information et Numérique : Arduino, Python, réseau, codages binaire, hexadécimal, ASCII.',
    place: 'Lycée Lafayette - Clermont-Ferrand',
  },
];

export const passions: Passion[] = [
  {
    title: 'Domotique, embarqué et matériel',
    image: '/passions/switch.png',
    text: 'Entre domotique, systèmes embarqués et administration de mes serveurs personnels, je bidouille autant le logiciel que le matériel. De l\'impression 3D jusqu\'à la modification de consoles de jeu.',
  },
  {
    title: 'Mécanique automobile',
    image: '/passions/mecanique.jpg',
    text: 'Grand fan d\'automobile et assez manuel, j\'ai appris par moi-même à l\'aide d\'internet, à faire l\'entretien de ma voiture personnelle ainsi que de celle de mes parents. Cette passion de la mécanique prend beaucoup de temps mais me permet d\'apprendre beaucoup de choses et surtout de faire des économies.',
  },
  {
    title: 'Réparation et bricolage',
    image: '/passions/atelier.avif',
    text: 'La réparation d\'appareils électroniques m\'intéresse depuis l\'enfance, une passion pour le bricolage transmise par mon père. Je répare tout type d\'objet électronique, plus particulièrement des smartphones : dextérité, concentration et précision.',
  },
  {
    title: 'Photographie',
    image: '/passions/photographie.svg',
    text: 'À côté du code, j\'aime composer et capturer : cadrage, lumière, retouche. Un œil que je retrouve aussi dans le design de mes interfaces.',
    href: '/galerie',
  },
  {
    title: 'Data & finance immobilière',
    image: '/passions/immo.png',
    text: 'Je m\'intéresse à l\'investissement et à la fiscalité immobilière. C\'est de qu\'est née mon outil de gestion locative Bailiz qui relie le code a cette logique métier.',
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
