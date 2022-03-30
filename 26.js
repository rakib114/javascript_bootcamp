// how to iterate object

const person = {
  name: "Harshat",
  age: 22,
  "person hobbies": ["Guitar", "Workout", "Eating"],
};

// using [for in loop]

for (let key in person) {
  //   console.log(key);
  //   console.log( person[key]);
  //   console.log(key, ":", person[key]);
  //   console.log(`${key} : ${person[key]}`);
}

// Using Object.keys

console.log(Object.keys(person));
// From here it will return like an array
let value = Array.isArray(Object.keys(person));
console.log(value);
// so we can use here for of loop

for (let key of Object.keys(person)) {
  //   console.log(key);
  console.log(person[key]);
}
