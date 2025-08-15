const fs = require("fs").promises;
// const fs = require('fs/promises');

// fs.writeFile("data.txt", "Hello, World NodeJS Promises!")
//   .then(() => {
//     console.log("File written/Created successfully");
//   })
//   .catch((err) => {
//     console.error("Error writing file:", err);
//   });

// fs.readFile("data.txt", "utf-8")
//     .then((data) => {
//         console.log("File read successfully:", data);
//     })
//     .catch((err) => {
//         console.error("Error reading file:", err);
//     });

// fs.appendFile("data.txt", "\nThis is an appended text.")
//     .then(() => {
//         console.log("File appended successfully");
//     })
//     .catch((err) => {
//         console.error("Error appending file:", err);
//     });

fs.unlink("test.txt")
    .then(() => {
        console.log("File deleted successfully");
    })
    .catch((err) => {
        console.error("Error deleting file:", err);
    });