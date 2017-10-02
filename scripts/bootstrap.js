const fs = require('fs');

// Get all arguments
const args = process.argv.slice(2);
// Target files
const targetFileList = [
  './README.md',
  './public/index.html',
  './public/manifest.json'
];
// Default text to be replaced
const replaceText = 'React Boilerplate';
const re = new RegExp(replaceText, 'g');

// Check if argument is specified
if (typeof args[0] === 'undefined') {
  console.warn(
    'Project title argument is not specified.\nSkipping title update in index.html and README.md file.'
  );
  process.exit();
}

targetFileList.forEach(targetFile => {
  fs.readFile(targetFile, 'utf8', (error, data) => {
    if (error) {
      throw error;
    }
    const result = data.replace(re, args[0]);
    fs.writeFile(targetFile, result, 'utf8', error => {
      if (error) {
        throw error;
      }
    });
  });
});
