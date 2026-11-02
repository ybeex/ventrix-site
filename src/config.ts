// One place for everything you will want to change before launch.
export const SITE = {
  product: 'Ventrix',
  company: 'Ventrix',
  domain: 'ventrix.app',
  url: 'https://ventrix.app',
  appUrl: 'https://app.ventrix.app',
  tagline: 'Know where every tool and every box is.',
  price: { amount: 14999, currency: 'NGN', symbol: '₦', period: 'month' },
  email: { hello: 'hello@ventrix.app', support: 'support@ventrix.app', privacy: 'privacy@ventrix.app', legal: 'legal@ventrix.app' },
  // FILL THESE IN before publishing the legal pages.
  legal: { entity: 'Ventrix', governingLaw: 'the laws of the Federal Republic of Nigeria', lastUpdated: '1 November 2026' },
  // Set to your Plausible domain (or leave empty to load no analytics at all).
  plausibleDomain: '',
} as const;
export const naira = (n: number) => `${SITE.price.symbol}${n.toLocaleString('en-NG')}`;
