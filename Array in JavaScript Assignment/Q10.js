// 10. Extract Part of an Array
// Use slice() to create a new array containing "CSS", "JavaScript", and "React".
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
// Output: ["CSS", "JavaScript", "React"]

let input = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
let newInput = input.slice(1,4);
console.log(newInput);
console.log(input); // original array does not change


