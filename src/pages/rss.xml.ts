import { getCollection } from 'astro:content';
import { SITE } from '../config';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export async function GET() {
  const posts = (await getCollection('blog')).sort((a, b) => +b.data.date - +a.data.date);
  const items = posts.map((p) => `<item><title>${esc(p.data.title)}</title><link>${SITE.url}/blog/${p.id}</link><guid>${SITE.url}/blog/${p.id}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.product} blog</title><link>${SITE.url}/blog</link><description>Practical guides for stores, workshops and tool rooms.</description>${items}</channel></rss>`, { headers: { 'content-type': 'application/rss+xml; charset=utf-8' } });
}
