let list = ['orange', 'banana', 'oreos'];

console.log(list[1]);

let students = ['Tony', 'Marshall', 'Rhys', "Ray", 23, true, ['Ryan', 'Will', 'Amira']]

console.log(typeof students);
console.log(students instanceof Array);

console.log(students[6]);



console.log(students[6][1]);

let s = students[6][1];
console.log(`Hello ${s}!`);
console.log('-'.repeat(20))


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (foodItem of food) {
    console.log(foodItem);
}


food.push('Pizza'); // * Apppend 'Pizaa' to end of array
console.log(food);

food.splice(1,1, 'Bananas'); // * Removes shrimp, adds bananas (position, how many to remove, what to add) 
console.log(food);


food.splice(2, 0,'Sweet Potatoe Pie'); // * Adds 'Sweet Potatoe Pie' in position 2. but doesn't remove anything
console.log(food);

food.pop(); // * remove the last element
console.log(food);

food.shift(); // * remove the first element
console.log(food);

food.unshift('Popcorn', 'Steak'); // * add the element to the beginning
console.log(food)


let colors = ['red', 'orange', 'yellow', 'green', 'blue'];

// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

colors.forEach(color => console.log(color))

colors.forEach((color, index) => {
    console.log(color);
    console.log(index);
    console.log(color, index);
})


let movies = ['A Quiet Place','Indiana Jones and the Last Crusade','Bodyguard'];

movies.forEach((movie, index) => console.log(index, movie));

movies.push('Spirit Untamed');
console.log(movies);

movies.splice(3, 3, 'Indiana Jones and the Temple of Doom')
console.log(movies);


let arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array);

let newArr = arr.reverse();
newArr.forEach((value, index) => console.log("position: " + index + " value: " + value));

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

let ar = [1, 2, 3, 4, 5];
ar = ar.sort(() => Math.random() - 0.5);
console.log(ar);

let rA = [1, 2, 3, 4, 5];
if (rA instanceof Array) {
    let revArr = rA.reverse()
    revArr.forEach(num => console.log(num));
} else {
    console.log('not an arr');
}









