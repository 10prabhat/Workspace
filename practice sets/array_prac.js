/*Take a n as input from the user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.

Use the reduce method to calculate product of all numbers in the array*/

let n = parseInt(prompt("Enter number of arrays"));
let arr=[];
for (i=1;i<=n;i++){
    arr[i-1]=i;
}

console.log(arr);

let sum = arr.reduce((prev,curr)=>{
    return prev+curr;
});

console.log("Sum = ",sum);

let mul = arr.reduce((res,curr)=>{
    return res*curr;
});

console.log("Factorial = ",mul);
