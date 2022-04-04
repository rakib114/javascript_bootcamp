// Reduce

const numbers = [2, 3, 6, 9];
// aim: sum all array numbers
const sum = numbers.reduce((accumuletor, currentValue) => {
  return accumuletor + currentValue;
}, 0);
console.log(sum);

// how this reduce method work

// accumuletor,    currentVAlue,    return
//    0                2               2
//    2                3               5
//    5                6              11
//   11                9              20

const userCart = [
  { productId: 1, productName: "Mobile", price: 12000 },
  { productId: 2, productName: "Laptop", price: 21000 },
  { productId: 3, productName: "PS5", price: 18000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);
