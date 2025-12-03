#!/usr/bin/env node

/**
 * WebP Conversion Script
 * Converts PNG images to WebP format for better compression
 */

const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Sharp is not installed.');
  console.error('📦 Install it with: npm install --save-dev sharp');
  process.exit(1);
}

const galleryDir = path.join(__dirname, '../src/assets/images/gallery');
const files = fs.readdirSync(galleryDir).filter((f) => f.endsWith('.png'));

console.log(`🖼️  Converting ${files.length} PNG images to WebP...\n`);

let totalSaved = 0;

async function convertToWebP() {
  for (const file of files) {
    const inputPath = path.join(galleryDir, file);
    const outputPath = inputPath.replace('.png', '.webp');
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    try {
      await sharp(inputPath)
        .webp({
          quality: 80,
          effort: 6,
        })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSize = newStats.size;
      const saved = originalSize - newSize;
      const percent = ((saved / originalSize) * 100).toFixed(1);
      totalSaved += saved;

      console.log(
        `✅ ${file} → ${file.replace('.png', '.webp')} - ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (saved ${percent}%)`
      );
    } catch (err) {
      console.error(`❌ ${file} - Error: ${err.message}`);
    }
  }

  console.log(`\n🎉 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
}

convertToWebP().catch(console.error);
