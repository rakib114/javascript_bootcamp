// filter Method
// filter always return boolean value

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isOdd = numbers.filter((number) => {
  return number % 2 !== 0;
});
console.log(isOdd);
