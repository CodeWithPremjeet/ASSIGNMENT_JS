// 18. Calculate Total Order Amount 
// Create an array of order objects containing amount. Use reduce() to calculate the total order amount. 
// Example: 
// Input: 
// [ 
// { amount: 500 }, 
// { amount: 1000 }, 
// { amount: 750 } 
// ] 
// Output: 
// 2250 

const order = [
    { amount: 500 },
    { amount: 1000 },
    { amount: 750 }
];

const total = order.reduce((acc, curr) => {
    return acc + curr.amount;
}, 0)

console.log(total);