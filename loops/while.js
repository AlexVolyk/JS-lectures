// While Loops


/*
    While statement creates a loop so long as the condition we've specified return true.

    while (condition) {
        code statement
    }


    To stop a while loop from executing, the condition must at one point return false.
*/

// let i = 0;

// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// while (true) {
//     console.log("infinite loop.");
//     break;
// }


function fizzbuzz(num) {

    for (let i = 100; i <= 500; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(500)







