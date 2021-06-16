// For in Loop

/*
    For in loops work by looping over enumerable property names of an object.

    for (iterate in iterable) {
        code block to execute over each iterate
    }

*/


let teacher = "Paul Niemczyk";
let randomNums = [1, 2, 5, 8, 10, 14, 200];

let person = {
    name: "Paul",
    age: 25,
}

// for(i in teacher){
//     // (i - enumerable, teacher[i] - objects of enumerables)
//     console.log(teacher[i]);
// }

// for(i in randomNums){
//     console.log(i, randomNums[i]);
// }

for (i in person) {
    //          (key, value) of our object
    console.log(i, person[i]);
}
