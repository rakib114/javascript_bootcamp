// optional chaining

const user = {
  firstName: "Harshit",
  address: { houseNumber: 420 },
};
console.log(user?.firstName);
console.log(user?.address?.houseNumber);
console.log(user?.address?.houseName);
