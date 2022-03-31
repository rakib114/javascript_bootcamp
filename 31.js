// Function

function someTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = someTwoNumbers(6, 6);
console.log(result);

// Checking a number is evver or odd

function whatIs(num) {
  if (num % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

whatIs(6);

// input : array, target(number)
// Output : index of target if target present in array

function findTarget(array, target) {
  for (let index of array) {
    if (array[index] === target) {
      return index;
    }
  }
  return "notFound";
}

const myArray = [1, 3, 5, 8, 9];
const answer = findTarget(myArray, 8);
console.log("index of target =", answer);
