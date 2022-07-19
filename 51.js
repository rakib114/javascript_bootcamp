// class keyword

class CreateUser {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  about() {
    return `${this.name} is ${this.age} old`;
  }
  is18() {
    return this.age >= 18;
  }
  isAdult(user = this.name) {
    return `is ${user}  adult ? = ${this.is18()}`;
  }
}

const user1 = new CreateUser("Mahima", "mahima@gmail.cm", 20);
console.log(user1);
console.log(user1.isAdult());
