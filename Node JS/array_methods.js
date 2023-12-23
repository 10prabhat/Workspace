let arr = [1,5,9,4,3];

const result=arr.reduce((prev,curr)=>{
    return prev>curr ? prev:curr; 
})

console.log(result);
