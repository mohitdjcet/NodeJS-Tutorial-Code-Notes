// const https = require('https');

// https.get("https://jsonplaceholder.typicode.com/posts/1",(res)=>{
//     let data = '';

//     res.on('data',(chunk)=>{
//         data += chunk;
//     })

//     res.on('end',()=>{
//         console.log("API Responce",JSON.parse(data));
//     }).on('error',(err)=>{
//         console.log("Error: ",err.message);
//     })
// })


// import fetch from 'node-fetch';

// async function fetchData() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data = await response.json();
//         console.log("API Response:", data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// fetchData();

import axios from 'axios';

async function fetchData() {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("API Response:", response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();
