// 2. Random Whole Number 
// Use Math.random() and Math.floor() to generate a random whole number between 1 and 10.

let min = 1;
let max = 10;

let num = Math.floor(Math.random() * (max - min) + min);
console.log(num);