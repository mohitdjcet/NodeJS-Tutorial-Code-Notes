// function abc() {
//   console.log("abc function called");
// }  
// abc();


const EventEmitter = require('events');
const event = new EventEmitter();

//on
// event.on('greet', (name,age)=>{
//     console.log(`Hello ${name}, you are ${age} years old!`);
// })
// event.emit('greet',name="Mohit Kumar",age=30);

// once
// event.once('onlyOnce',()=>{
//     console.log("This event will only be triggered once.");
// });
// event.emit('onlyOnce');
// event.emit('onlyOnce');

//Event removeListener
const callBackEvent = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old!`);
}
event.on('removeListener', callBackEvent);
event.removeListener('removeListener', callBackEvent);
event.emit('removeListener', name="Mohit Kumar", age=30);

