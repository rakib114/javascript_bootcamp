// Create a Function that crate user objects
// one method refercnce
// using --proto--

const userMethods = {
  about() {
    return `${this.firtsName} is ${this.age} old`;
  },
  is18() {
    return this.age >= 18;
  },
  fvrtBand() {
    return "BTS";
  },
};

function createUser(firtsName, email, age, address) {
  const user = Object.create(userMethods);
  user.firtsName = firtsName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}
const user1 = createUser("Mahima", "mahima@gmail.com", 20, "Tangail");
// console.log(user1.__proto__);
console.log(user1.fvrtBand());
