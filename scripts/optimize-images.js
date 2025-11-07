#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses PNG images in gallery to reduce file sizes
 * Uses sharp library for high-quality compression
 */

const fs = require('fs');
const path = require('path');

// Simple check for sharp - if not installed, provide instructions
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Sharp is not installed.');
  console.error('📦 Install it with: npm install --save-dev sharp');
  console.error('🔄 Then run: npm run optimize:images');
  process.exit(1);
}

const galleryDir = path.join(__dirname, '../src/assets/images/gallery');
const files = fs.readdirSync(galleryDir).filter((f) => f.endsWith('.png'));

console.log(`🖼️  Found ${files.length} images to optimize...\n`);

let totalSaved = 0;

async function optimizeImages() {
  for (const file of files) {
    const inputPath = path.join(galleryDir, file);
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    // Skip if already small
    if (originalSize < 200 * 1024) {
      console.log(`⏭️  ${file} - Already optimized (${(originalSize / 1024).toFixed(0)}KB)`);
      continue;
    }

    try {
      // Create backup
      const backupPath = inputPath + '.backup';
      fs.copyFileSync(inputPath, backupPath);

      // Optimize with sharp
      await sharp(inputPath)
        .png({
          quality: 85,
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toFile(inputPath + '.tmp');

      // Check new size
      const newStats = fs.statSync(inputPath + '.tmp');
      const newSize = newStats.size;
      const saved = originalSize - newSize;
      const percent = ((saved / originalSize) * 100).toFixed(1);

      if (newSize < originalSize) {
        // Use optimized version
        fs.renameSync(inputPath + '.tmp', inputPath);
        fs.unlinkSync(backupPath);
        totalSaved += saved;
        console.log(
          `✅ ${file} - ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (saved ${percent}%)`
        );
      } else {
        // Keep original
        fs.unlinkSync(inputPath + '.tmp');
        fs.unlinkSync(backupPath);
        console.log(`⏭️  ${file} - Original is smaller, keeping it`);
      }
    } catch (err) {
      console.error(`❌ ${file} - Error: ${err.message}`);
      // Restore backup if exists
      if (fs.existsSync(inputPath + '.backup')) {
        fs.renameSync(inputPath + '.backup', inputPath);
      }
    }
  }

  console.log(`\n🎉 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
}

optimizeImages().catch(console.error);
