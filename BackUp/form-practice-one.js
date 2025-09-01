const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req,res)=>{
    fs.readFile('form.html','utf-8', (err, data)=>{
        if(err){
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/plain'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        if (req.url === '/') {
            res.write(data);
        } else if (req.url === '/submit'){
            let userData = [];
            req.on('data', (chunk)=>{
                userData.push(chunk);
            })
            req.on( "end",()=>{
                let parsedData = Buffer.concat(userData).toString();
                let redableData = querystring.parse(parsedData);
                // console.log(redableData);
                let dataFinal = `Name: ${redableData.username}, Email: ${redableData.email}`;
                // console.log(dataFinal);
                fs.writeFileSync('data.txt',dataFinal);
            })
            res.write("<h1>Form Submitted Successfully</h1>");
        } else {
            res.write("<h1>404 Not Found</h1>");
        }
        res.end();
    });
}).listen(3000);