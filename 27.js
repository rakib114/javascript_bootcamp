// Computed Properties

const key1 = "objKey1";
const key2 = "objKey2";
const key3 = "objKey3";

const value1 = "myValue1";
const value2 = "myValue2";
const value3 = "myValue3";

const person = {};

person[key1] = value1;
person[key2] = value2;
person[key3] = value3;

console.log(person);

// Computed properties using another way

const ObKey1 = "frnd1";
const ObKey2 = "frnd2";
const ObKey3 = "frnd3";

const vlu1 = "Rohit";
const vlu2 = "mohit";
const vlu3 = "Harshit";

const friends = {
  [ObKey1]: vlu1,
  [ObKey2]: vlu2,
  [ObKey3]: vlu3,
};
console.log("friend Object", friends);
