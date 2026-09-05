// 8. Sum of Even Numbers 
// Write a program to calculate the sum of all even numbers from 1 to 20. 

let totalSum = 0;
let i = 1;
while(i <= 20){
    if(i%2==0){
        totalSum += i;
    }
    i++;
}
console.log(totalSum);