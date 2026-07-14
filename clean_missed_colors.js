const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const classReplacements = [
    // Emerald classes
    { regex: /-emerald-\d{3}/gi, replace: '-burning-flame' },
    // Hex classes that I missed (e.g. text-[#0F0F0F])
    { regex: /-\[#0F0F0F\]/gi, replace: '-abyssal-blue' },
    { regex: /-\[#0A0A0A\]/gi, replace: '-abyssal-blue' },
    { regex: /-\[#22C55E\]/gi, replace: '-burning-flame' },
    { regex: /-\[#34d399\]/gi, replace: '-burning-flame' },
    { regex: /-\[#4FFFB0\]/gi, replace: '-burning-flame' },
];

const generalReplacements = [
    // Replace hex codes inside style objects or arbitrary classes (e.g. shadow-[...])
    { regex: /#0A0A0A/gi, replace: 'var(--color-abyssal-blue)' },
    { regex: /#0F0F0F/gi, replace: 'var(--color-abyssal-blue)' },
    { regex: /#22C55E/gi, replace: 'var(--color-burning-flame)' },
    { regex: /#34d399/gi, replace: 'var(--color-burning-flame)' },
    { regex: /#4FFFB0/gi, replace: 'var(--color-burning-flame)' },
    // Replace hardcoded white in style objects
    { regex: /:\s*['"]#fff(?:fff)?['"]/gi, replace: ': \'var(--color-palladian)\'' },
];

const prefixes = ['bg', 'text', 'border', 'shadow', 'ring', 'fill', 'stroke', 'from', 'via', 'to'];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    // First do the full class replacements
    classReplacements.forEach(({ regex, replace }) => {
        prefixes.forEach(prefix => {
            const fullRegex = new RegExp(`\\b${prefix}${regex.source}`, 'gi');
            newContent = newContent.replace(fullRegex, `${prefix}${replace}`);
        });
    });

    // Then do the general replacements
    generalReplacements.forEach(({ regex, replace }) => {
        newContent = newContent.replace(regex, replace);
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
