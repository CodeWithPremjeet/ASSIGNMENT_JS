// 10. Display Object Entries 
// Create an object containing a user's name and email. Use Object.entries() and forEach() to display each 
// key along with its value. 
// Example: 
// Input: 
// const user = { 
// name: "Rahul", 
// email: "rahul@example.com" 
// }; 
// Output: 
// name: Rahul 
// email: rahul@example.com 


const user = {
    name: "Rahul",
    email: "rahul@example.com"
}
let res = Object.entries(user);
res.forEach(([keys,val]) =>{
    console.log(`${keys}: ${val}`);
});