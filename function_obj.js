// Jodi kono method a this thake tahole this mane -> sei object

// jodi kno function a this thake tahole this mane -> window/global

let obj = {
  name: "Rakib Khan",
  interest: ["programming", "tech", "debugging", "Hacking"],
  sayhello() {
    console.log("Hello" + this.name);
  },
  showInterest() {
    this.interest.forEach((element) => {
      console.log(element);
    });
  },
};
obj.sayhello();
obj.showInterest();

// Constuctor Function

function Person(name, address) {
  this.name = name;
  this.address = address;
  this.hello = function () {
    console.log("Hello " + this.name);
  };
}
// new --> {} > new dile empty object creat hoy
let perosn1 = new Person("Rakib", "Savar");
console.log(perosn1);
perosn1.hello();
