// parameter destructuring

let person = {
  fristName: "Mohit",
  proffestion: "Engeneer",
  gender: "Male",
  age: 28,
};

const printDetails = ({ fristName, proffestion, age }) => {
  console.log(fristName, "\n", age, "\n", proffestion);
};

printDetails(person);
