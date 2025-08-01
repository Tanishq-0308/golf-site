// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const BASE_URL = 'https://paradisegolfcard.com';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'yearly', priority: 0.8 },
  { url: '/contact', changefreq: 'yearly', priority: 0.7 },
  // Add more routes manually if needed
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream('./public/sitemap.xml');
  const pipeline = sitemapStream.pipe(writeStream);

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();

  await streamToPromise(pipeline);
  console.log('✅ sitemap.xml generated!');
})();