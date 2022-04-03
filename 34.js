// callback function

function myFunc2(name = "user") {
  console.log("hello i'm from func2");
  console.log(`you name is ${name}`);
}

function myFunc(callback) {
  console.log("i'm from func");
  callback("Rohit");
}

myFunc(myFunc2);
