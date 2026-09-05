// 19. Create a Comma-Separated String 
// Create an array of frontend technologies and use reduce() to combine them into a single 
// comma-separated string. 
// Example: 
// Input: 
// ["HTML", "CSS", "JavaScript"] 
// Output: 
// "HTML, CSS, JavaScript"

const frontend = ["HTML", "CSS", "JavaScript"];

const str = frontend.reduce((acc,curr,index) => {
    return index == 0 ? curr : `${acc}, ${curr}`;
})
console.log(str);