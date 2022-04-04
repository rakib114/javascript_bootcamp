// Important array method

// map

const users = [
  { firstName: "Gita", age: 23 },
  { firstName: "Mohit", age: 21 },
  { firstName: "Rohit", age: 22 },
  { firstName: "Roni", age: 24 },
];

const workerNames = users.map(({ firstName }) => {
  return firstName;
});
console.log(workerNames);
