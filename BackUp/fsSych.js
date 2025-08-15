const fs = require('fs');

// fs.writeFileSync('data.txt', 'Hello, NodeJS Sych ');
// console.log('File written successfully!');

// const data = fs.readFileSync('data.txt', 'utf8');
// console.log('File content:', data);

// fs.appendFileSync('data.txt', '\nThis is an appended text.');
// console.log('File appended successfully!');

// fs.unlinkSync('test.txt');
// console.log('File deleted successfully!');

//Create a Folder
// fs.mkdirSync('newFolder');
// console.log('Folder created successfully!');

//Remove a Folder
// fs.rmdirSync('newFolder');
// console.log('Folder removed successfully!');

if(fs.existsSync('data.txt')) {
    console.log('File exists, proceeding with operations...');
}else{
    console.log('File Not Found, creating a new file...');
}

