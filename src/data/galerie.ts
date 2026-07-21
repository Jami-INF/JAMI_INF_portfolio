/**
 * Contenu de la page Galerie photo.
 *
 * Toutes les images déposées dans public/galerie/
 */
import fs from 'node:fs';
import path from 'node:path';

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const GALLERY_DIR = path.join(process.cwd(), 'public', 'galerie');
const IMAGE_RE = /\.(avif|webp|jpe?g|png|gif)$/i;

function readGallery(): Photo[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => IMAGE_RE.test(file))
    .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }))
    .map((file) => {
      const name = file.replace(IMAGE_RE, '');
      return { src: `/galerie/${file}`, alt: name, caption: name };
    });
}

export const photos: Photo[] = readGallery();
