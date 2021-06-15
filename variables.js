// Variables

/* 
    - Primitive data type which can hold any type of value (object)
    - Begin with a declaration and can gave values assigned, but not necessary.
    - Declarations are case sensitive. Student is not the same as student.
    - Preferrable variable naming convention is camelCase.
    - Variables may not begin with a number.
    -
*/

let student; // Variable Declaration
// New keyword introduce with ES6
    console.log(student); 

    student = "Jessica"; //Assigned string to variable student
    
    console.log(student); 

    let homework = "Never" // Var declaration of 
    // homework with str value of "never"

var teacher; // Variable Declaration
// Old Keyword, Causes lots of headhaches with scope and hoisting

const CLASSROOM = "New Dev"; // Variable Declaration
// Declares a variable that may not be reasigned
// Cannot be declared wuth undefined. Must have  value attached

console.log(CLASSROOM);

// console.log(CLASSROOM = "Math"); will not work

// Numbers

let myNum = 5;
let myFavNum = Number("5.0")
console.log(myFavNum);