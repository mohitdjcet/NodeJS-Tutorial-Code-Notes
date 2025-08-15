const fs = require("fs").promises;

//write File
// async function writeFileExample() {
//   try {
//     await fs.writeFile("demo.txt", "Hello, World!");
//     console.log("File written successfully");
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// }
// writeFileExample();

//read File
// async function readFileExample() {
//   try {
//     const data = await fs.readFile("demo.txt", "utf8");
//     console.log("File content:", data);
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// }
// readFileExample();

//append File
// async function appendFileExample() {
//     try {
//         await fs.appendFile("demo.txt", "\nAppended text.");
//         console.log("File appended successfully");
//     } catch (err) {
//         console.error("Error appending file:", err);
//     }
// }
// appendFileExample();

//delete File
// async function deleteFileExample() {
//     try {
//         await fs.unlink("test.txt");
//         console.log("File deleted successfully");
//     } catch (err) {
//         console.error("Error deleting file:", err);
//     }
// }
// deleteFileExample();

async function crudFileExample() {
  try {
     // Write File
     await fs.writeFile("demo.txt", "Hello, World!");
     console.log("File written successfully");

    // Read File
    let data = await fs.readFile("demo.txt", "utf8");
    console.log("File content:", data);

    // Append File
    await fs.appendFile("demo.txt", "\nAppended text.");
    console.log("File appended successfully");

    // Read File again to see the appended content
    data = await fs.readFile("demo.txt", "utf8");
    console.log("Updated file content:", data);

    // Delete File
    // await fs.unlink("demo.txt");
    // console.log("File deleted successfully");
  } catch (err) {
    console.error("Error file:", err);
  }
}
crudFileExample();
