// Functions

/*
    Function is a block of code that can take in paramaters (door), perform an action, and return the result of that action.
    There are two types of functions:
        - function declaration
        - function expression
            - arrow functions
        Functions have a default return statement of undefined unless otherwise specified.
*/


// Function Declaration

/*
    Declarations are hoisted. This is their template.
    function(parameter) {
        block of code to be run
        return statement (not needed)
    }
*/


function funDeclaration() {
    // console.log("This is a fun dec");
    return 'This is a function declaration';
}


// Function will not run until it is called. Calling === Invoking
// Parentheses immdiately invoke the function.
// let result = funDeclaration();

// console.log(result)

// Functions can have D-infinite amount of parameters.
// Pratameters act as door to let arguments inside of the function.

function greetUser(name) {
    return `hello ${name}`;
}

console.log(greetUser("John"));
console.log(greetUser("Marshall"));
console.log(greetUser("Tom"));


function user(name) {
    console.log( `hello ${name}`);
}

user("paul");

console.log("----------------");


// Function Expression
/*
    Function expression utilizes a variable as a placehoder.
    Function expression is not hoisted
*/


let myDog = function (name, breed) {
    console.log(`${name} is a ${breed}`)
}

console.log(myDog('a','d')) // undefined

myDog("Bentley", "Olde English Bulldog")

//Arrow
/*
    Introduced in ES6
    More concise way of writing functions
    Arrow functions are created using function expressions ONLY
*/

let greeting = () => console.log(`hello friend`);

greeting('Paul')

// Block Body Arrow Function 

let sendEmail = (email, name) => {
    return `hello ${name}:

    We have been trying to reach you above your car's extended warrantly.

    Is this email, the correct email for you? ${email}

    Sincerely,

    Annoying people`
}


console.log(sendEmail('example@gmail.com', 'Paul'));


// Immediately Invoked Function Execution
/*
    Function declarations that have no name are immediately invoked.
*/

(function () {
    console.log("IIFE");
}) ();

// Function return statements
// Must always return only one value

function returnFun (x, y,) {
    // return 1, 4 returns 4 because return must only have one value
    return [1, 4]
    // let mySet = new Set Uber spiceh (practice)
    // mySet.add(x);
    // mySet.add(y);
    // return mySet;
}

console.log(returnFun(1, 4))


// Challenge

// function tipCalculator(bill, tax, percentage) {

//     let first = bill * (tax/100);
//     let second = bill + first
//     let third = second * (percentage/100)
//     let fourth = third + second
//     return fourth;
// }

let tipCalculator = (bill, tax, percentage) => {
    let first = bill * (tax/100);
    let second = bill + first
    let third = second * (percentage/100)
    let fourth = third + second
    return fourth;
}


console.log(tipCalculator(100, 0.01, 0.05))

// Extra spicy challenge

let capitalizeName = name => {
    return name[0].toUpperCase() + name.slice(1);
}

console.log(capitalizeName("alex"));


let string = "something amazing";

function rev(str) {
    return (!str) ? '' : rev(str.substr(1)) + str.charAt(0);
}


console.log(rev(string));