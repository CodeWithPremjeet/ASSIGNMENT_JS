// 14. Find an Object Using find()
// Create an array of user objects containing name and age. Use find() to get the user whose name is
// "Rahul".
// Example:
// Input:
// [ { name: "Rahul", age: 20 }, { name: "Priya", age: 22 } ]

let input = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]
let user = input.find(user => user.name === "Rahul");
console.log(user);