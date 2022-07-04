// new Keyword
// 1.) this = {}
// 2.) return full object {}
// link __proto__ with prototype

function createUser(name, email, age, address) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.address = address;
  this.about = createUser.prototype.about;
  this.is18 = createUser.prototype.is18;
}
// console.log(createUser.prototype);

createUser.prototype.about = function () {
  return `${this.name} is ${this.age} old Fvrt Band ${this.fvrtBnd()} `;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.fvrtBnd = function () {
  return "BTS";
};
const user1 = new createUser("Mahim", "mahima@gmail.com", 20, "Tangail");
// console.log(user1);
console.log(user1.about());
console.log(user1.fvrtBnd());

const user2 = new createUser("Rakib", "imark@gmail.com", 21, "Savar");
console.log(user2);
