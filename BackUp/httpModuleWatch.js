const http = require('http');

let age = 25;

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <DOCTYPE html>
        <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>My age is ${age} Old</h1>
                <h2>Date: ${new Date().toLocaleString()}</h2>
                <p>Refresh the page to see if age changes after modifying the code.</p>
            </body>
        </html>
    `);
    res.end();
    // process.exit(); // Exit to allow module reload on next request
})

server.listen(3000, ()=>{
    console.log('Server is listening on http://localhost:3000');
});