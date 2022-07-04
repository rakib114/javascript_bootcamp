// prototype
// __proto__ insede prototype

function createUser(name, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.name = name;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = createUser.prototype.about;
  user.is18 = createUser.prototype.is18;
  return user;
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
const user1 = createUser("Mahim", "mahima@gmail.com", 20, "Tangail");
// console.log(user1);
console.log(user1.about());
console.log(user1.fvrtBnd());
