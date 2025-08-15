const fs = require('fs');

// fs.writeFile('example.txt', "Hello, World NodeJS async!",(err)=>{
//     if(err){
//         console.error("Error writing file:", err);
//     }
//     console.log("File written successfully!");
// })

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//     }
//     console.log("File content:", data);
// })

// fs.appendFile('example.txt', '\nAppended text!', (err) => {
//     if (err) {
//         console.error("Error appending to file:", err);
//     }
//     console.log("Text appended successfully!");
// })

// fs.unlink('test.txt', (err) => {
//     if (err) {
//         console.error("Error deleting file:", err);
//     }else {
//         console.log("File deleted successfully!");
//     }
// })

fs.rename('example.txt', 'renamed_example.txt', (err) => {
    if (err) {
        console.error("Error renaming file:", err);
    } else {
        console.log("File renamed successfully!");
    }
})