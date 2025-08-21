// const _ = require('lodash');

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const chunkedArr = _.chunk(arr, 3);
// console.log(chunkedArr); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

// const obj = {a:1,b:2, c:{d:3, e:4}};
// const clonedObj = _.cloneDeep(obj);
// console.log(clonedObj);

// const chalk = require('chalk');
// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message!'));

// const axios = require("axios");
// const url = "https://jsonplaceholder.typicode.com/posts";
// axios
//   .get(url)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

const dayjs = require('dayjs');
console.log(dayjs().format('YYYY-MM-DD HH:mm:ss')); // Current date and time
