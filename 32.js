// Rest parameter

function myFunc(a, b, ...c) {
  console.log(`a is ${a} \n b is ${b} \n rest c = ${c}`);
}

myFunc(2, 3, 4, 8, 3, 9);

// prblm solving
function totalSum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  console.log(sum);
}
totalSum(3, 2, 4, 2);
