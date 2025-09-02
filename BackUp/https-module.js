// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, World!\n');
// })

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Secure World!</h1>\n");
});

server.listen(3000, () => {
    console.log("HTTPS Server running at https://localhost:3000/");
});
