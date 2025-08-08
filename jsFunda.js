// let name = "Mohit";
// const age = 30;

// console.log(name,age);

// function greet(name){
//     return "Hello " + name;
// }

// const greetArrow = (name) => "Hi "+ name;

// console.log(greet("Mohit"));
// console.log(greetArrow("Kumar"));

// let score = 85;
// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 80) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }


// for(let i =1; i <=5; i++){
//     console.log("Number: " + i);
// }

// let i = 1;
// while(i <= 5){
//     console.log("While Number: " + i);
//     i++;
// }

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[1]); // Accessing first element
// console.log(fruits.length); // Length of the array
// fruits.push("Mango"); // Adding an element
// console.log(fruits); // Displaying the updated array

// for(let a=0; a < fruits.length; a++){
//     console.log("Fruit: " + fruits[a]);
// }

let user ={
    name: "Mohit",
    age: 30,
    greet: function() {
        return "Hello " + this.name;
    }
}

console.log(user.name); // Accessing property
console.log(user.greet()); // Calling method