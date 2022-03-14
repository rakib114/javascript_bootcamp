// Clone Array

// concate two array

let array1 = ["Rijbi", "Fahad", "Rajib"];
// console.log(array1);
// we can cloe a array from using slice()
let array2 = array1.slice(0);
console.log(array2);
array1.push("Kabir");
console.log(array1);
console.log(array2);
// We can concat a array from using concat()

let array3 = [].concat(array1);
console.log(array3);

// for coloning a array
let player = ["Sakib", "Mustafiz", "Tamim", "Rubel"];
// spread operator
let bplPlayer = ["Rakib Khan", ...player];
console.log("cloning from anoher array", bplPlayer);
