const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

// Map old tailwind color names and hex codes to new ones
// The keys are regex patterns for tailwind classes (e.g. bg-black -> bg-abyssal-blue)
const replacements = [
    // Colors
    { regex: /-(black|\[#0a0a0a\]|\[#000000\])/gi, replace: '-abyssal-blue' },
    { regex: /-(white|\[#ffffff\]|\[#fff\])/gi, replace: '-palladian' },
    
    // Accents
    { regex: /-\[#4FFFB0\]/gi, replace: '-burning-flame' },
    { regex: /-\[#3ce59c\]/gi, replace: '-truffle-trouble' },
    { regex: /-\[#86EFAC\]/gi, replace: '-burning-flame' },
    { regex: /-emerald-500/gi, replace: '-burning-flame' },
    
    // Grays / Zincs
    { regex: /-zinc-900/gi, replace: '-blue-fantastic' },
    { regex: /-zinc-800/gi, replace: '-blue-fantastic' },
    { regex: /-zinc-200/gi, replace: '-oatmeal' },
    { regex: /-zinc-100/gi, replace: '-oatmeal' },
];

// We need to match full tailwind classes like `bg-black`, `text-white/70`, `border-[#0A0A0A]`
// We should use regex that looks for prefixes like `bg-`, `text-`, `border-`, `shadow-`, `ring-` etc.
const prefixes = ['bg', 'text', 'border', 'shadow', 'ring', 'fill', 'stroke', 'from', 'via', 'to'];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    replacements.forEach(({ regex, replace }) => {
        prefixes.forEach(prefix => {
            // e.g. /bg-(black|\[#0a0a0a\])/gi
            const fullRegex = new RegExp(`\\b${prefix}${regex.source}`, 'gi');
            newContent = newContent.replace(fullRegex, `${prefix}${replace}`);
        });
    });

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (/\.(tsx|ts|js|jsx)$/.test(file)) {
            processFile(fullPath);
        }
    }
}

walkDir(directoryPath);
console.log("Done");
