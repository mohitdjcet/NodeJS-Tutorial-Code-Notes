// function greet(name,callback){
//     console.log("Hello " + name);
//     callback();
// }

// function callme(){
//     console.log("I am callback function");
// }

// greet("Mohit",callme);

// const fs = require('fs');
// fs.readFile('input.txt',"utf-8",function(err,data){
//     if(err) return console.error(err);
//     console.log(data);
// });


const fs = require('fs').promises;

// fs.readFile('input.txt',"utf-8",function(err,data){
//     if(err) return console.error(err);
//     fs.readFile('input1.txt',"utf-8",function(err,data2){
//         if(err) return console.error(err);
//         fs.readFile('input2.txt',"utf-8",function(err,data3){
//             if(err) return console.error(err);
//             console.log("file1",data);
//             console.log("file2",data2);
//             console.log("file3",data3);
//         });
//     });
// });

async function readFiles() {
    try{
        const data = await fs.readFile('input.txt', "utf-8");
        const data2 = await fs.readFile('input1.txt', "utf-8");
        const data3 = await fs.readFile('input2.txt', "utf-8");
        console.log("file1", data);
        console.log("file2", data2);
        console.log("file3", data3);
    } catch(err){
        console.error(err);
    }
}

readFiles();