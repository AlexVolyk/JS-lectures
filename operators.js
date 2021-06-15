// Operators

/*
Assignment, Arithmetic & Comparison
    - Assignment assigns value to a declaration
        -denoted by =
    - Arithmetic operators perform simple with
        - addiction +
        - Substraction -
        - multiplication *
        - Division /
        - Exponent **
        - modulus %
        - math, obj to help with other operations
    - Comparsion operators compare values
        - inequality and strict inequality =/ & ===
        - equality and str equality ==/ & ===/
        - greater than less than ><
        - greater or equal than or less or equal than -><-
        - and && or ||
*/

let age = 25;

console.log(2 + 5);

// modulus - provides  remainder of evulidean division.

console.log(25 % 5);

//Math object
console.log(Math.max(2, 5, 1, 10, 97));

//equality vs strict equality operators
/*
    equality & strict equality operators
        - return truthly on value depending on a given condition
        - 5 == '5' str in integner
*/

console.log(5 == 5); // true
console.log(5 === 5); // true
console.log(5 == '5') // return true because of type corection
console.log(5 === '5') // return false because we are checking for value & value type


let x = 5;
let y = '5';

console.log(typeof x, typeof y);// same value different data type


let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1;
let day = date.getDay()

console.log(date.toDateString())

console.log(year, month, day);


// null vs undefined vs NaN

/* 
    null - empty value;
    undefined - default value of a declaration (nothing)
    nan - deterins if a value is not a number
*/
console.log(isNaN(123)); // return false (its a number)
console.log(isNaN(0/0)); // returns true (can`t divide)
console.log(isNaN(NaN)); // return true
console.log(isNaN(Math.sqrt(-1))); // return true because imaginary (i)
// number is NaN


function passDate(){
    let date = new Date
    return date.toDateString();
}

console.log(passDate());


// inequality and strict inequality
console.log('---------------------');
console.log( 5 != 7);
console.log( 5 != 5);
console.log( 5 != '5');
console.log( 5 !== '5');// return true (dif data type)
// ||
console.log(Boolean(25 && 25));
//return false if either of the value is not the same
console.log(Boolean(25 && 26));

console.log('---------------------');

console.log(false || true);

console.log('---------------------');

let flippedBool = !true;
console.log(flippedBool);
console.log('---------------------');

let name = "Alex";
let city = 'Ukraine in the city of Kiev';
let myAge = 20;
let firstResult = `My name is ${name}. I'm ${myAge} old and I live in ${city}.`.toUpperCase()
console.log(firstResult);

console.log(firstResult.search("KI"))


console.log('---------------------');
console.log(`My name is ${name}. I'm ${myAge} old and I live in ${city}.`);

let result = name + " " + city + " " + myAge;
console.log(result);
console.log(result.length);


