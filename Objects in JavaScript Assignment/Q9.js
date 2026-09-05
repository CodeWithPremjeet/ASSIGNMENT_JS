// 9. Get Object Entries 
// Create a settings object and use Object.entries() to convert its properties into key-value pairs. 
// Example: 
// Input: 
// const settings = { 
// theme: "dark", 
// language: "English", 
// notifications: true 
// }; 
// Expected Output: 
// [ 
// ["theme", "dark"], 
// ["language", "English"], 
// ["notifications", true] 
// ]

const setting = {
    theme: "dark",
    Language: "English",
    notification: true
}
let result = Object.entries(setting);
console.log(result);