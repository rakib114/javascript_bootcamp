// Nasted Destructuring

const users = [
  { userId: 1, userName: "Rohit", userGender: "Male" },
  { userId: 2, userName: "Nitin", userGender: "Male" },
  { userId: 3, userName: "Vishali", userGender: "Female" },
];

// const [user1, user2] = users;
// console.log(user1);
const [{ userName }, { userId }, { userGender }] = users;

console.log(userName, "Gender of user 3", "\n", userGender);
