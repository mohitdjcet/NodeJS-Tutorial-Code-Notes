const http = require('http');

const userData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'test@gmail.com',
        age: 30
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'test1@gmail.com',
        age: 25
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'test3@gmail.com',
        age: 29
    }
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(userData));
    res.end();
}).listen(3000)