# Ventrix marketing site (Ventrix)

Astro static site for **ventrix.app**. 36 pages: landing, 6 feature pages, 4 use cases, pricing, about, contact, security, changelog, privacy, terms, cookies, blog (6 posts, tags, RSS), 404, sitemap.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
```

## Before you publish
1. **Edit `src/config.ts`**: company legal name, address, CAC number, email addresses, `plausibleDomain` (leave empty for no analytics). The legal pages read from it.
2. **Have a lawyer review** `/privacy`, `/terms` and `/cookies`. They are solid drafts, not legal advice. Fill the `[hosting provider]`, `[email provider]`, `[payment provider]` placeholders in the privacy page.
3. **Contact form**: with no config it opens the visitor's email app. To post to a form service instead, set `PUBLIC_FORM_ENDPOINT` at build time.
4. **App links**: "Sign in" goes to `https://app.ventrix.app`. "Get started" goes to `/contact?topic=start` until you have self-serve sign-up.
5. **Hosting**: pages build as `pricing.html` etc. Netlify, Cloudflare Pages and Vercel serve these as `/pricing` automatically. On nginx use `try_files $uri $uri.html $uri/ =404;`.
6. Screenshots in `public/shots` come from demo data; retake them with your own data before launch.

## Editing content
- Features / use cases / changelog: `src/data/*.ts`
- Blog: add a Markdown file to `src/content/blog/` with `title, description, date, tags`.
- Colours and type: `src/styles/global.css` (same tokens as the app).
