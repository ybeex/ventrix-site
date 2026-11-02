import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://ventrix.app', integrations: [sitemap()], trailingSlash: 'never', build: { format: 'file' } });
