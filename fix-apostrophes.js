const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find all .js files in app directory
const files = walkDir(path.join(__dirname, 'app'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Only replace apostrophes in JSX text content (not in JavaScript strings)
  // This regex targets apostrophes in text between JSX tags
  content = content.replace(/>([^<]*)'([^<]*)</g, (match, before, after) => {
    return `>${before}&apos;${after}<`;
  });
  
  fs.writeFileSync(file, content);
});

console.log('Fixed apostrophes in JSX text content');
