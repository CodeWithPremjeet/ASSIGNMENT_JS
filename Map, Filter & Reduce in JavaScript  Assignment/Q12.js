// 12. Filter Expensive Products 
// Create an array of product objects containing name and price. Use filter() to get products with a price 
// greater than 1000. 
// Example: 
// Input: 
// [ 
// { name: "Mouse", price: 500 }, 
// { name: "Keyboard", price: 1500 } 
// ] 
// Output: 
// [ 
// { name: "Keyboard", price: 1500 } 
// ] 

const prd = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

const prices = prd.filter((items) => {
    return items.price > 1000;
})

console.log(prices);