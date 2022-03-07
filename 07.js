// Check variable data type

// typeof();

// data types (primitive data types)
// string = "Rakib"
// number = 2,3, 4.3, 3.2
// booleans = true, false
// undefiend
// null
// BigInt
// Symbole

let age = 21,
  nam = "Rashed";

console.log(typeof age);
console.log(typeof nam);

// Convert number to string
// age = 22 -> "22"
console.log(typeof (age + ""));
// 2nd way
age = String(age);
console.log(typeof age);

// Convert string to number

let myStr = "63";
// myStr = "63" -> 63
myStr = +"63";
console.log(typeof myStr);
// 2nd Way
console.log(Number(myStr));
