import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collection « projects » — un fichier markdown par projet dans
 * src/content/projects/*.md. Le schéma zod valide le frontmatter au build.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Pile technique affichée en monospace sous forme de tags.
    stack: z.array(z.string()),
    // Chemin vers une image dans /public (placeholder par défaut).
    image: z.string().default('/projects/placeholder.svg'),
    // Liens optionnels.
    demo: z.string().url().optional(),
    github: z.string().url().optional(),
    // Ordre d'affichage (croissant) et mise en avant sur l'accueil.
    order: z.number().default(99),
    featured: z.boolean().default(false),
    // Date optionnelle (affichée en métadonnée monospace).
    date: z.string().optional(),
  }),
});

export const collections = { projects };
