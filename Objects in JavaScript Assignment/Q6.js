// 6. Add a New Property 
// Create a profile object containing name and email. Add a new property named isLoggedIn with the 
// value true. 
// Example: 
// Input: 
// { 
// name: "Rahul", 
// email: "rahul@example.com" 
// } 
// Output: 
// { 
// name: "Rahul", 
// email: "rahul@example.com", 
// isLoggedIn: true 
// }

const user = {
    name: "Rahul",
    email: "rahul@example.com"
} 
user.isLoggedIn = true;
// user["isLoggedIn"] = true;
console.log(user);