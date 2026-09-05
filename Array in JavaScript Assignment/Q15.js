// 15. Find an Index Using findIndex()
// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".
// Example:
// [{ name: "Rahul", age: 20 },
// { name: "Priya", age: 22 }]

let input = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
]
let result = input.findIndex(user => user.name === "Priya");
console.log(result);