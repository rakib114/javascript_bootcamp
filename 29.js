// Object inside array

const users = [
  { userId: 1, userName: "Rohit", userGender: "Male" },
  { userId: 2, userName: "Nitin", userGender: "Male" },
  { userId: 3, userName: "Vishali", userGender: "Female" },
];
// console.log(users);

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

for (let user of users) {
  console.log(user.userName);
}
