// 10. Filter Available Products 
// Create an array of product objects containing name and inStock. Use filter() to create a new array 
// containing only the products that are in stock. 
// Example: 
// Input: 
// [ 
// { name: "Laptop", inStock: true }, 
// { name: "Mouse", inStock: false } 
// ] 
// Output: 
// [ 
// { name: "Laptop", inStock: true } 
// ] 

const prd = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
];

const prdStock = prd.filter((items) => {
    return items.inStock == true;
})
console.log(prdStock);