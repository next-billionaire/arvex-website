#!/usr/bin/env node

/**
 * Image Migration Script
 * 
 * This script downloads all Unsplash images and converts them to WebP format
 * for local storage, improving page load performance.
 * 
 * Prerequisites:
 * - Node.js installed
 * - ImageMagick or libvips installed on your system
 * - npm packages: node-fetch, sharp
 * 
 * Installation:
 *   npm install --save-dev node-fetch sharp
 * 
 * Usage:
 *   node scripts/migrate-images.mjs
 * 
 * The script will:
 * 1. Create public/images/ directory
 * 2. Download each Unsplash image
 * 3. Convert to WebP format with quality 80
 * 4. Log results for verification
 */

import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images');

// Image map from src/data/imageMap.js
const imagesToMigrate = {
  'photo-1556761175-4b46a572b786': {
    url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80&auto=format&fit=crop',
    output: 'hero-business.webp',
    name: 'Hero - Business Consultation'
  },
  'photo-1501339847302-ac426a4a7cbb': {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80&auto=format&fit=crop',
    output: 'portfolio-cafe.webp',
    name: 'Portfolio - Cafe Website'
  },
  'photo-1560518883-ce09059eeffa': {
    url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&auto=format&fit=crop',
    output: 'portfolio-realestate.webp',
    name: 'Portfolio - Real Estate'
  },
  'photo-1556742031-c6961e8560b0': {
    url: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=600&q=80&auto=format&fit=crop',
    output: 'portfolio-ecommerce.webp',
    name: 'Portfolio - E-commerce'
  },
  'photo-1629909613654-28e377c37b09': {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80&auto=format&fit=crop',
    output: 'portfolio-dental.webp',
    name: 'Portfolio - Dental'
  },
  'photo-1534438327276-14e5300c3a48': {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop',
    output: 'portfolio-fitness.webp',
    name: 'Portfolio - Fitness'
  },
  'photo-1589829545856-d10d557cf95f': {
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&auto=format&fit=crop',
    output: 'portfolio-law.webp',
    name: 'Portfolio - Law Firm'
  }
};

async function createImagesDirectory() {
  try {
    await fs.mkdir(imagesDir, { recursive: true });
    console.log(`✓ Created/verified images directory: ${imagesDir}`);
  } catch (error) {
    console.error('✗ Failed to create images directory:', error);
    process.exit(1);
  }
}

async function downloadImage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.buffer();
  } catch (error) {
    throw new Error(`Failed to download from ${url}: ${error.message}`);
  }
}

async function convertToWebp(buffer, outputPath, quality = 80) {
  try {
    await sharp(buffer)
      .webp({ quality })
      .toFile(outputPath);
    
    const stats = await fs.stat(outputPath);
    return stats.size;
  } catch (error) {
    throw new Error(`Failed to convert to WebP: ${error.message}`);
  }
}

async function migrateImages() {
  console.log('\n🖼️  Starting image migration...\n');
  console.log(`Destination: ${imagesDir}\n`);
  
  await createImagesDirectory();
  
  let successCount = 0;
  let failureCount = 0;
  const results = [];
  
  for (const [photoId, imageConfig] of Object.entries(imagesToMigrate)) {
    process.stdout.write(`Downloading "${imageConfig.name}"... `);
    
    try {
      // Download
      const imageBuffer = await downloadImage(imageConfig.url);
      console.log('✓ Downloaded');
      
      // Convert to WebP
      process.stdout.write(`Converting to WebP... `);
      const outputPath = path.join(imagesDir, imageConfig.output);
      const fileSize = await convertToWebp(imageBuffer, outputPath);
      console.log(`✓ Converted (${(fileSize / 1024).toFixed(1)} KB)`);
      
      results.push({
        name: imageConfig.name,
        output: imageConfig.output,
        size: fileSize,
        status: 'success'
      });
      
      successCount++;
    } catch (error) {
      console.log(`✗ Error: ${error.message}`);
      results.push({
        name: imageConfig.name,
        output: imageConfig.output,
        status: 'failed',
        error: error.message
      });
      failureCount++;
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Migration Summary');
  console.log('='.repeat(60));
  console.log(`✓ Successful: ${successCount}`);
  console.log(`✗ Failed: ${failureCount}`);
  console.log('='.repeat(60) + '\n');
  
  if (successCount === Object.keys(imagesToMigrate).length) {
    console.log('✅ All images migrated successfully!');
    console.log('\nNext steps:');
    console.log('1. Update src/components/Hero.jsx to use local image paths');
    console.log('2. Update src/components/Portfolio.jsx to use local image paths');
    console.log('3. Build and test: npm run build');
    console.log('4. Check Lighthouse performance score\n');
  } else {
    console.log('⚠️  Some images failed to migrate. Check errors above.\n');
  }
  
  return failureCount === 0;
}

// Run migration
migrateImages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});