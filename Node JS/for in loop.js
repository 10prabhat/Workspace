//for in loop

let obj = {
    name:"Prabhat Bishwakarma",
    age:18,
    cgpa:8.9,
    isPass:true
};

for(val in obj){
    console.log("key =",val,"value =",obj[val]);
}