// 19. Sum from 1 to N 
// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n. 
// Example: 
// Input: 5 
// Output: 15 

function sumNumbers(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    console.log(total);
}
sumNumbers(10);