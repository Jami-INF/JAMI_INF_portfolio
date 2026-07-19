/** Métadonnées globales du site, centralisées. */
export const SITE = {
  name: 'Jami Infante',
  title: 'Jami Infante - Développeur full-stack',
  description:
    "Portfolio de Jami Infante, développeur full-stack avec 4 ans d'expérience. Applications web du back-end à l'interface, projets React / TypeScript et outils métier.",
  email: 'jamiinfante@gmail.com',
  github: 'https://github.com/jami-inf',
  linkedin: 'https://www.linkedin.com/in/jami-infante',
  location: 'Région de Clermont-Ferrand - Télétravail possible',
  ogImage: '/og.svg',
} as const;

/** Menu **/
export const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/projets', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
] as const;
