// 17. Flatten a Multi-Level Array
// Use flat() with an appropriate depth to flatten the following array completely.
// Example:
// Input: [1, [2, [3, 4]]]
// Output: [1, 2, 3, 4]

let input = [1, [2, [3, 4]]];
let Output = input.flat(Infinity);
console.log(Output);