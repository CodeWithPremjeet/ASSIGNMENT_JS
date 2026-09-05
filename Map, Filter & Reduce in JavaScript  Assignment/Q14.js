// 14. Filter Gmail Addresses 
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com". 
// Example: 
// Input: 
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"] 
// Output: 
// ["rahul@gmail.com", "aman@gmail.com"]

const email = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

const IsTrueEmail = email.filter((items) => {
    return items.includes("@gmail.com");
})
console.log(IsTrueEmail);