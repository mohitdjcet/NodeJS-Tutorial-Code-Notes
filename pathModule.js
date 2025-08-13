// const path = require('path');

// console.log(__dirname); 
// console.log(__filename);

const filePath = "/Users/MohitKumar/Desktop/NodeJS/app.js";
console.log(path.basename(filePath));
// console.log(path.basename(filePath, '.js'));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));

// const finalPath = path.join('Desktop', 'NodeJS', 'app.js');
// console.log(finalPath);

// console.log(path.resolve('Desktop', 'NodeJS', 'app.js'));

// console.log(path.parse(finalPath));

// Real World Example
const path = require('path');
const fs = require('fs');

// const filePath = path.join(__dirname, 'data', 'info.txt');
fs.writeFileSync(filePath, "Hello from NodeJS path module!");
const data = fs.readFileSync(filePath, 'utf-8');
console.log(data);

