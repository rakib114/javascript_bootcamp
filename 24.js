// Objects
// arrays are good but sufficient
// objects store key value pairs
// object don't have index

// how to create object

const Person = {
  name: "Rohit",
  age: "21",
  adult: true,
  hobbies: ["Guitar", "Music", "Workout"],
};
console.log(Person);

// how to access data from object
console.log(Person.name);
// how to access data from object using square braket
console.log(Person["age"]);

// using arrays in object
Person.hobbies.push("Programming");
console.log(Person);

// how to add key value pair to objects
Person.gender = "Male";
console.log(Person);
