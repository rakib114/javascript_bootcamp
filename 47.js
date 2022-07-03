// call
// apply
// bind

function about(hobby, fvrtMusican) {
  console.log(
    `Name is ${this.name} and Age is ${this.age} \nHobby ${hobby} fvrt musican ${fvrtMusican}`
  );
}

const person1 = {
  name: "Mahima",
  age: 20,
};
const person2 = {
  name: "Rakib",
  age: 21,
};
/* call() */

// about.call(person1, "Biolin", "BTS");
// about.call(person2, "Guitar", "Atif Aslam");

/* apply() */

// about.apply(person1, ["Biolin", "BTS"]);

/* bind() */

const func = about.bind(person1, "Guitar", "Atif Aslam");
func();
