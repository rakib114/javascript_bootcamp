// String methods

// trim() >> for- removing space form a string
// toUppercase() >> transfer to upppercase
// toLowercase() >> transfer to lowercase
// slice()

let first_name = "   Abdullah   ";
console.log(first_name.length);

// removing space from string
// trim() > create new string
let newString = first_name.trim();
console.log(newString.length);

// new string tarei aager varibale ei reasign kora jay

first_name = first_name.trim();
console.log(first_name.length);

// Uppercase e convert korar jonno

console.log(first_name.toUpperCase());

// Lowercase e convert korar jonno

console.log(first_name.toLowerCase());

// clice() method working
// 1st start index
// 2nd end indext
// Example

let herName = "Mahima";
console.log(herName);
let herNick = herName.slice(0, 4);
console.log(herNick);

// reasign
herName = herName.slice(0, 4);
console.log(herName.length);
