// 5. Update Object Data Immutably 
// Create an array of user objects with name and role. Use map() and the spread operator to create a new 
// array where the role of every user is changed to "developer" without modifying the original array. 
// Example: 
// Input: 
// [ 
// { name: "Rahul", role: "student" }, 
// { name: "Priya", role: "student" } 
// ] 
// Output: 
// [ 
// { name: "Rahul", role: "developer" }, 
// { name: "Priya", role: "developer" } 
// ] 

const obj = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
];


let obj2 = obj.map((items) => {
    return { ...items, role: "developer" };
})
console.log(obj);
console.log(obj2);