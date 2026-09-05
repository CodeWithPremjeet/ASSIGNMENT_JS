// 4. Create Updated Product Prices 
// Create an array of product prices. Use map() to create a new array where every price is increased by 
// 10%. Keep the original array unchanged. 
// Example: 
// Input: 
// [100, 200, 300] 
// Output: 
// Original: [100, 200, 300] 
// New: [110, 220, 330] 

const prdPrice = [100, 200, 300];

const newPrice = prdPrice.map((price) => {
    let increased = (price * 0.1);
    let final = price + increased;
    return final;
})
console.log(newPrice);