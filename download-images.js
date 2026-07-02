const fs = require('fs');
const path = require('path');
const https = require('https');

const LOGO_API = 'https://api.github.com/repos/Indra-Agency/images-web/contents/LOGO';
const PROJECT_API = 'https://api.github.com/repos/Indra-Agency/images-web/contents/project';

const logosDir = path.join(__dirname, '../public/images/logos');
const projectsDir = path.join(__dirname, '../public/images/projects');

// Create directories if they don't exist
if (!fs.existsSync(logosDir)) fs.mkdirSync(logosDir, { recursive: true });
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': 'NodeJS-Downloader' } }, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(destPath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NodeJS-Downloader' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log('Fetching logos metadata...');
    const logos = await fetchJson(LOGO_API);
    if (Array.isArray(logos)) {
      for (const item of logos) {
        if (item.type === 'file' && item.name.match(/\.(png|jpe?g|svg)$/i)) {
          const dest = path.join(logosDir, item.name);
          await downloadFile(item.download_url, dest);
        }
      }
    }

    console.log('Fetching projects metadata...');
    const projects = await fetchJson(PROJECT_API);
    if (Array.isArray(projects)) {
      for (const item of projects) {
        if (item.type === 'file' && item.name.match(/\.(png|jpe?g|svg)$/i)) {
          const dest = path.join(projectsDir, item.name);
          await downloadFile(item.download_url, dest);
        }
      }
    }

    console.log('All downloads completed successfully!');
  } catch (error) {
    console.error('Download failed:', error);
  }
}

run();
