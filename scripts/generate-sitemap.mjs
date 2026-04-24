import fs from "node:fs";
import path from "node:path";
import { servicePages } from "../src/data/servicePages.js";
import { locations } from "../src/data/locations.js";

const SITE_URL = "https://arvextech.in";
const TODAY = new Date().toISOString().slice(0, 10);

function makeUrl(loc, priority = "0.8", changefreq = "weekly") {
  return [
    "  <url>",
    `    <loc>${SITE_URL}${loc}</loc>`,
    `    <lastmod>${TODAY}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

const urls = [makeUrl("/", "1.0", "weekly")];

for (const service of servicePages) {
  urls.push(makeUrl(`/services/${service.slug}`, "0.9", "weekly"));
  for (const city of locations) {
    urls.push(makeUrl(`/services/${service.slug}/${city.id}`, "0.7", "weekly"));
  }
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  "",
].join("\n");

const outputFile = path.resolve("public", "sitemap.xml");
fs.writeFileSync(outputFile, xml, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs`);
