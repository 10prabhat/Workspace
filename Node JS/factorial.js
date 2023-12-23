let fact = parseInt(prompt("Enter any number"));

if (fact < 0) {
    alert("The number should not be negative");
}
else if (fact === 0) {
    console.log("fact = 1");0
}
else if (fact === 1) {
    console.log("fact = ", fact);
}
else {
    let num = 1;
    for (i = 1; i <= fact; i++) {
        num *= i;
    }
    console.log(`The Factorial is ${num}`);
}