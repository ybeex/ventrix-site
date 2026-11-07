import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://vntrx-site.vercel.app', integrations: [sitemap()], trailingSlash: 'never' });
