// Method
// function inside object

const perons1 = {
  name: "Rakib",
  age: 21,
  about: function () {
    console.log(`Name is ${this.name} and Age is ${this.age}`);
  },
};
perons1.about();

// Another way

function detail() {
  console.log(`Name is ${this.name} and Age is ${this.age}`);
}
const perons2 = {
  name: "Mahima",
  age: 20,
  about: detail,
};
perons2.about();
