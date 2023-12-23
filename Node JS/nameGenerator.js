console.log("Business Name Generator");
function nameGenerator() {


    let random = Math.random();
    // console.log(random);


    // Declaring the first word
    let first, second, third;

    // Generating the First Word
    if (random < 0.33) {
        first = "Crazy";
    }
    else if (random < 0.66 && random >= 0.33) {
        first = "Amazing";
    }
    else {
        first = "Fire";
    }

    // Generating he Second word
    random = Math.random();
    // console.log(random);
    if (random < 0.33) {
        second = "Engine";
    }
    else if (random < 0.66 && random >= 0.33) {
        second = "Foods";
    }
    else {
        second = "Garments";
    }

    // Generating the third word
    random = Math.random();
    // console.log(random);
    if (random < 0.33) {
        third = "Bros";
    }
    else if (random < 0.66 && random >= 0.33) {
        third = "Limited";
    }
    else {
        third = "Hub";
    }

    let names= first+" "+second+" "+third;
    console.log(names);

}
for(let i =0;i<=10;i++){
    nameGenerator()
}



