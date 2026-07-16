const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  'https://raw.githubusercontent.com/Indra-Agency/images-web/main/Assistant-Bot.json',
  'https://raw.githubusercontent.com/Indra-Agency/images-web/main/Digital%20Marketing.json',
  'https://raw.githubusercontent.com/Indra-Agency/images-web/main/SEOs.json',
  'https://raw.githubusercontent.com/Indra-Agency/images-web/main/web%20development.json'
];

const destDir = path.join(__dirname, 'public', 'lottie');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

urls.forEach(url => {
  const filename = decodeURIComponent(url.split('/').pop());
  const destPath = path.join(destDir, filename);
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      fs.writeFileSync(destPath, data);
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
});
