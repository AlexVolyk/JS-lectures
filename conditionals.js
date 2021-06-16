// Conditionals


/* 
    - JS Conditionals allow us to make decisions and carry out actions according to those
    decisions.
        - Traditional if; else; and else if statements;
        - Tenary operator;
        - Switches;
    - Conditionals execute a piece of code if a condition is true by default.
*/

let myNumber = 0;
//console.log(Boolean(myNumber));
// if (myNumber == 25) {
//     console.log("There is something in myNumber variable");
// }

/* 
if (conditional) {
    fire off this block of code if above condition is true
}
*/

// If Else


if (myNumber) {
    console.log(`My number is ${myNumber}`);
} else {
    console.log('The conditions appears to be false.');
}

/* 
if (conditional) {
    fire off this block of code if above condition is true.
} else {
    Fire off this block of code if above condition is false.
}
*/

// Else if & chaining  multiple statements

let temp = 100;

// if(temp > 100) {
//     console.log('Global warming yo!');
// } else if (temp > 80) {
//     console.log('Nice summer day');
// } else if (temp > 60) {
//     console.log('Spring or Fall?');
// } else if (temp < 60) {
//     console.log("What's next snow plows!?");
// }  else {
//     console.log("Bruv you alright? This is a weather app!");
// }


// let weekDay = "Thursday";

// if (weekDay == "Wednesday") {
//     console.log("Dentist appointment");
// } else if (weekDay == "Thursday") {
//     console.log("9am EFA Web Dev Session");
// } else if (weekDay == "Friday") {
//     console.log("Weekend!!");
// }


// Testing Multiple Conditions

let myName = "Danielle";
let age = 20;

// if (myName == "Paul" && age == 25) {
//     console.log(`Paul is lying to you. He's not ${age}.`);
// } else if (myName == "Danielle" && age >= 21) {
//     console.log(`She's your instructor, but I don't know her age. iassume
//     she's over 21 becaouse she had wine last night.`);
// } else {
//     console.log(`I am lonely please send help.`);
// }


// Ternaries

/* 
    A conditional statement which takes three operators:
        - a condition followed by a questions mark ?
        - truthly expression followed by a colon :
        - falsey expression;
    Shortcut to the if statement
*/

let lightSwitch = true;

//condition ? block of code if true : block of code if false

if (lightSwitch) {
    console.log("Lights are on");
} else {
    console.log("Lights are off");
}
lightSwitch ? console.log("Lights are on") : console.log("Lights are off");

temp = 70;

// temp >= 100 ? console.log("Am I in Florida?")
// : temp >= 80 ? console.log("Fine summer day")
// : temp >= 60 ? console.log("Spring or Fall?")
// : temp >= 40 ? console.log("What's next snow plows!?")
// : console.log("Bruv you alright? This is a weather app!")

// Switch Statements

/*
    Switches evalute expressions matching their expression value to a
    case clause. Switch than executes that case statement until it is 
    "broken"
*/

console.log("-----------");

let mySwitch = false;

switch (true) {
    case temp >= 100:
    case mySwitch: // allows you to nest multiply "if" to check their
    // condition
        console.log("Am I in Florida?");
        break; // prevent fall throught into another "if" switch
    case temp > 80:
        console.log("Fine summer day");
        break;
    default:
        console.log("llll");
        break;
}



// console.log(new Date().getDay());


switch (new Date().getDay()) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}

let number = 57;

if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
} else if (number % 5  == 0) {
    console.log("Buzz");
} else if (number % 3  == 0) {
    console.log("Fizz");
} else {
    console.log(number);
}

console.log("------------");

number % 15 == 0 ? console.log("FizzBuzz")
: number % 5 == 0 ? console.log("Buzz")
: number % 3 == 0 ? console.log("Fizz")
: console.log(number);



// function fizzbuzz(num) {

//     for (let i = 1; i < num; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FillBuzz");
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzbuzz(100);


