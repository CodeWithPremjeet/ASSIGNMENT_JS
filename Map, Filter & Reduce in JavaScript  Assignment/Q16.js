// 16. Count Total Products 
// Create an array of product names and use reduce() with an accumulator to count the total number of 
// products. 
// Example: 
// Input: 
// ["Laptop", "Mouse", "Keyboard"] 
// Output: 
// 3 

const prdNames = ["Laptop", "Mouse", "Keyboard"];
const length = prdNames.reduce((accumulator) => {
    return accumulator + 1;
}, 0)
console.log(length);