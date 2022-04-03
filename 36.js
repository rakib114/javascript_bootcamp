// Important array methods

// forEach
const numbers = [3, 4, 8, 9, 2, 7];

numbers.forEach((number, index) => {
  console.log(
    `index ${index} \n multiplication of the number is ${number * 2}`
  );
});

const users = [
  { firstName: "Gita", age: 23 },
  { firstName: "Mohit", age: 21 },
  { firstName: "Rohit", age: 22 },
  { firstName: "Roni", age: 24 },
];

users.forEach(({ firstName, age }) => {
  console.log(`Name = ${firstName} \n Age = ${age}`);
});
