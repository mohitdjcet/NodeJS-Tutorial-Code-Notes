const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<h1>Hello, World! ABC<h1>');
//     res.end('This is my first Node.js server.');
// });

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<h1>Welcome to the Home Page</h1>');
//         res.end();
//     } else if(req.url === '/about'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write('<h1>About Us</h1><p>This is the about page.</p>');
//         res.end();
//     } else {
//         res.writeHead(404,{'Content-Type':'text/html'});
//         res.write('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
//         res.end();
//     }
// });


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write(JSON.stringify({name: "Mohit", age: 24, city: "Delhi"}));
        res.end();
    } else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        res.end();
    }
});

server.listen(3000,()=>{
    console.log('Server is listening on port http://localhost:3000/');
});