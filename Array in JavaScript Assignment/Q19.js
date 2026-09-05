// 19. Display Elements with Their Index
// Create an array of programming languages and use forEach() to display each element along with its
// index.
// Example Output:
// 0 HTML
// 1 CSS
// 2 JavaScript

let lang = ["HTML", "CSS", "JavaScript"];
lang.forEach((value,index)=> {
    console.log(index, value);
})
