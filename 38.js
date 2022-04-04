// factory function

function creatPerson(name, address) {
  return {
    name,
    address,
    speak() {
      console.log("Hello World");
    },
  };
}

let person1 = creatPerson("Rohit", "Delhi");
console.log(person1);
person1.speak();

let person2 = creatPerson("Mohit", "Hydrabad");
console.log(person2);
