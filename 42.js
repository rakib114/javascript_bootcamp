// find Method

const users = [
  { userId: 1, userName: "Mohit" },
  { userId: 3, userName: "Rohit" },
  { userId: 2, userName: "Virat" },
  { userId: 4, userName: "Dhoni" },
];

const luckyUser = users.find((user) => user.userId === 2);
console.log(luckyUser);
