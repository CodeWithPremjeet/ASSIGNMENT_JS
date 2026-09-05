// 3. Extract User Names 
// Create an array of user objects containing name and email. Use map() to create a new array containing 
// only the names. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", email: "rahul@example.com" }, 
// { name: "Priya", email: "priya@example.com" } 
// ] 
// Output: 
// ["Rahul", "Priya"] 

const obj = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
]

let names = obj.map((name) => name.name);
console.log(names);