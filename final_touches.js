const fs = require('fs');
const path = require('path');

// 1. Stats Section
const statsPath = path.join(__dirname, 'src', 'components', 'landing', 'stats', 'index.tsx');
let statsContent = fs.readFileSync(statsPath, 'utf8');
statsContent = statsContent.replace(/rgba\(79,255,176/g, 'rgba(255,177,98');
statsContent = statsContent.replace(/rgba\(79, 255, 176/g, 'rgba(255, 177, 98');
fs.writeFileSync(statsPath, statsContent);
console.log('Updated stats/index.tsx');

// 2. Contact Section
const contactPath = path.join(__dirname, 'src', 'components', 'landing', 'contact', 'ContactInfo.tsx');
let contactContent = fs.readFileSync(contactPath, 'utf8');
contactContent = contactContent.replace(/className="bg-burning-flame/g, 'className="bg-white');
contactContent = contactContent.replace(/className="bg-palladian/g, 'className="bg-white');
contactContent = contactContent.replace(/bg-\[#ecfdf5\]/g, 'bg-burning-flame/10');
contactContent = contactContent.replace(/text-\[#10b981\]/g, 'text-burning-flame');
// Fix the first card's icon
contactContent = contactContent.replace(/bg-palladian rounded-xl/g, 'bg-burning-flame/10 rounded-xl');
contactContent = contactContent.replace(/className="text-lg text-abyssal-blue"/g, 'className="text-lg text-burning-flame"');
fs.writeFileSync(contactPath, contactContent);
console.log('Updated ContactInfo.tsx');

// 3. Experience Section
const expIndexPath = path.join(__dirname, 'src', 'components', 'landing', 'experience', 'index.tsx');
let expIndexContent = fs.readFileSync(expIndexPath, 'utf8');
expIndexContent = expIndexContent.replace(/border-\[#A7F3D0\]/g, 'border-burning-flame');
fs.writeFileSync(expIndexPath, expIndexContent);
console.log('Updated experience/index.tsx');

// 4. Make Difference Section
const makeDiffPath = path.join(__dirname, 'src', 'components', 'landing', 'why', 'MakeDifferenceSection.tsx');
let makeDiffContent = fs.readFileSync(makeDiffPath, 'utf8');
makeDiffContent = makeDiffContent.replace(/background-size: 100% auto;/g, 'background-size: 200% auto;');
fs.writeFileSync(makeDiffPath, makeDiffContent);
console.log('Updated MakeDifferenceSection.tsx');

// 5. Experience Data
const expDataPath = path.join(__dirname, 'src', 'data', 'experience.ts');
let expDataContent = fs.readFileSync(expDataPath, 'utf8');
expDataContent = expDataContent.replace(/bgColor:\s*'bg-palladian',/g, "bgColor: 'bg-[#111111]',");
expDataContent = expDataContent.replace(/bgColor:\s*'bg-burning-flame',/g, "bgColor: 'bg-[#111111]',");
expDataContent = expDataContent.replace(/textColor:\s*'text-abyssal-blue',/g, "textColor: 'text-palladian',");
expDataContent = expDataContent.replace(/pillClass:\s*'bg-red-50 text-\[#d96a5b\]',/g, "pillClass: 'bg-burning-flame/10 text-burning-flame',");
expDataContent = expDataContent.replace(/pillClass:\s*'bg-palladian text-abyssal-blue shadow-sm',/g, "pillClass: 'bg-burning-flame/10 text-burning-flame',");
// Update the NeoButton variant to primary/white (since btn-neo-green might be weird, but let's just make sure it's white or primary)
expDataContent = expDataContent.replace(/btnVariant:\s*'green'/g, "btnVariant: 'white'");
fs.writeFileSync(expDataPath, expDataContent);
console.log('Updated experience.ts');
