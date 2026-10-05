const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);
    
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(1);
      
      // Only optimize files over 100KB
      if (stats.size > 100 * 1024) {
        const webpPath = path.join(publicDir, `${name}.webp`);
        
        try {
          await sharp(filePath)
            .webp({ quality: 80, effort: 6 })
            .toFile(webpPath);
          
          const newStats = fs.statSync(webpPath);
          const newSizeKB = (newStats.size / 1024).toFixed(1);
          
          console.log(`✅ ${file} (${sizeKB}KB) → ${name}.webp (${newSizeKB}KB) — ${((1 - newStats.size / stats.size) * 100).toFixed(0)}% reduction`);
        } catch (err) {
          console.error(`❌ Error processing ${file}:`, err.message);
        }
      } else {
        console.log(`⏩ ${file} (${sizeKB}KB) — already small, skipping`);
      }
    }
  }
  
  console.log('\nDone! Update image references in code to use .webp files.');
}

optimizeImages();
