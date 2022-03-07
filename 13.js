// if else condition

let age = 19;

if (age > 18) {
  console.log("you can Play");
} else {
  let age2 = 19 - age;
  console.log(`come after ${age2} year later`);
}

// check odd & even

let num = 8;

if (num % 2 === 0) {
  console.log("The Number is even");
} else {
  console.log("The number is odd");
}

// Using falsy value

let firstName = "";

if (firstName) {
  console.log(`Hello ${firstName}`);
} else {
  console.log("Hello User");
}
