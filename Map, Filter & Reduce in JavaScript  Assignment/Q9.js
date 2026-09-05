// 9. Format User Names Using map() 
// Create an array of names and use map() to add the text "User: " before every name. Display the new 
// array. 
// Example: 
// Input: 
// ["Rahul", "Priya", "Aman"] 
// Output: 
// ["User: Rahul", "User: Priya", "User: Aman"] 

const user = ["Rahul", "Priya", "Aman"];

const newUser = user.map((items) => {
    return `User: ${items}`
})

console.log(newUser);