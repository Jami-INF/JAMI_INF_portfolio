/** Métadonnées globales du site, centralisées. */
export const SITE = {
  name: 'Jami Infante',
  title: 'Jami Infante — Développeur',
  description:
    "Portfolio de Jami Infante, développeur. Sélection de projets personnels : jeux, applications web et expérimentations autour de l'IA.",
  email: 'jamiinfante@gmail.com',
  github: 'https://github.com/jami-inf',
  linkedin: 'https://www.linkedin.com/in/jami-infante',
  ogImage: '/og.svg',
} as const;

/** Liens de navigation principaux (header). */
export const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/projets', label: 'Projets' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
] as const;
