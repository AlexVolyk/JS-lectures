// Data Types

/* 
    there are six data types in JS.
        - str;
        - num;
        - bool;
        - null;
        - undefined;

*/


// Str

let myString = 'this is a string';
// can use '', "", or `` to encompass your str. Just be considestent

console.log(myString);

// Str concatination

let san = 'San';
let diego = 'Diego';

console.log(san + ' ' + diego);


let concat_full = san.concat(" ",diego);

console.log(concat_full);

let longStr = "This is a long str \n and I would like it on multiplelines";

console.log(longStr);

// Str can be accessed by their index, using [] notation

//template iliteral or Template str
/*
    - Utilizes back ticks `` to allow us to contains placeholders.
    - Syntax for it is `str and a ${value}`
*/

let firstName = 'Paul'
console.log(`Hello, my name is ${firstName}`);

// Numbers

let integer = 90;
console.log(integer);


let float = 5.6;
console.log(float);

let rounded = 0.2 + 0.1
console.log(rounded); // Returns 0.30000000000000004

let strNumber = '125';
console.log(typeof strNumber);
//+name  (unary plus) 

//literals


let literalString = 'Literal string';
console.log(literalString);

// can be created using constructors
let constrLiteralStr = String('constructor string');
console.log(constrLiteralStr);

//booleans

/* 
    true or false values
    false = null, undefined, 0, empty, NaN(Not a Number).
    Others are true
*/

let trueValue = true;
console.log(trueValue);
let falseValue = false;
console.log(falseValue);

let truthly = Boolean(5);
console.log(truthly);

let falsey = Boolean(0);
console.log(falsey);
