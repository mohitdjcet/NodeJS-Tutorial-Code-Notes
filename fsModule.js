const fs = require('fs');

//Asyc
// fs.readFile('text.txt', 'utf8',(err,data)=>{
//     if(err){
//         console.error('Error reading file:', err);
//     }
//     console.log('File content:', data);
// })

//Sync
// const data = fs.readFileSync('text.txt', 'utf8');
// console.log('File content:', data);

//Write file
// fs.writeFile('data.txt','Mohit Kumar', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     }
//     console.log('File written successfully');
// })

//Append file
// fs.appendFile('data.txt', '\nMohit Kumar', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//     }
//     console.log('File appended successfully');
// });

//Delete file
// fs.unlink('data.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//     } else {
//         console.log('File deleted successfully');
//     }
// })

//Rename file
fs.rename('newText.txt','newTextFile.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully');
    }
})
