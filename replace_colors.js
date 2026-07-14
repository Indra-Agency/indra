const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
    { hex: /#1B2632/gi, varName: 'var(--color-abyssal-blue)', twName: 'abyssal-blue' },
    { hex: /#2C3B4D/gi, varName: 'var(--color-blue-fantastic)', twName: 'blue-fantastic' },
    { hex: /#EEE9DF/gi, varName: 'var(--color-palladian)', twName: 'palladian' },
    { hex: /#C9C1B1/gi, varName: 'var(--color-oatmeal)', twName: 'oatmeal' },
    { hex: /#FFB162/gi, varName: 'var(--color-burning-flame)', twName: 'burning-flame' },
    { hex: /#A35139/gi, varName: 'var(--color-truffle-trouble)', twName: 'truffle-trouble' }
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    replacements.forEach(({ hex, varName, twName }) => {
        // Replace in tailwind classes like bg-[#hex], text-[#hex]/60, border-[#hex]
        // This is complex because we have things like shadow-[3px_3px_0_0_#hex]
        
        // First, replace inside square brackets where the hex is the ONLY thing (e.g. text-[#hex], text-[#hex]/60, bg-[#hex])
        // We use a regex to find `-[<hex>]` or `-[<hex>]/<opacity>`
        // e.g. bg-[#1B2632] -> bg-abyssal-blue
        const regex1 = new RegExp(`-\\[${hex.source}\\]`, 'gi');
        newContent = newContent.replace(regex1, `-${twName}`);

        // Second, replace remaining hex codes with the css variable (e.g. in style objects, standard css, or complex arbitrary tailwind like shadow-[3px_3px_0_#1B2632])
        newContent = newContent.replace(hex, varName);
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
        } else if (/\.(tsx|ts|css|js|jsx)$/.test(file)) {
            processFile(fullPath);
        }
    }
}

walkDir(directoryPath);
console.log("Done");
