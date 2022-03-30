// Difference Between dot and bracket notation
const key = "Email";
const person = {
  name: "Harshat",
  age: 22,
  "person hobbies": ["Guitar", "Workout", "Eating"],
};
// If we wanna acces this proparties using dot notation then it will show Error
// Using bracket notation
console.log(person["person hobbies"]);

// Adding key pairs from (Key variable)
person[key] = "harshatmehta@gmail.com";
console.log(person);
