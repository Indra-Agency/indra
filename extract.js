const fs = require('fs');
const html = fs.readFileSync('ahmed_site.html', 'utf8');

// Find the hero section
const heroIdx = html.indexOf('<section class="min-h-screen');
const heroHTML = html.substring(heroIdx, heroIdx + 3000);

// Find the two canvas-holding divs
const absInset0Idx = heroHTML.indexOf('class="absolute inset-0 z-0 opacity-40');
const absInset1Idx = heroHTML.indexOf('class="absolute inset-0 z-[2] opacity-25');

console.log('\n=== Canvas div z-0 opacity-40 context ===');
console.log(heroHTML.substring(absInset0Idx, absInset0Idx + 400));

console.log('\n=== Canvas div z-[2] opacity-25 context ===');
console.log(heroHTML.substring(absInset1Idx, absInset1Idx + 400));

// Also find mobile glow
const mobileGlowIdx = heroHTML.indexOf('class="absolute inset-0 z-0 md:hidden"');
console.log('\n=== Mobile glow ===');
console.log(heroHTML.substring(mobileGlowIdx, mobileGlowIdx + 300));
