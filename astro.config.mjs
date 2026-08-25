import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://permutalibrecol.github.io',
  base: '/MILORCOLOMBIA/',
  integrations: [tailwind()],
});
