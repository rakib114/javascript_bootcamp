// sort()> array Method

const students = ["Rakib", "Sadia", "Keya", "Asif", "Basar"];

console.log(students.sort());

// Numaric sort

const numbers = [63, 69, 53, 43, 67, 97];
numbers.sort((a, b) => a - b);
console.log(numbers);

// realCase use

const products = [
  { prdctId: 1, prdctName: "p1", price: 300 },
  { prdctId: 2, prdctName: "p2", price: 800 },
  { prdctId: 3, prdctName: "p3", price: 700 },
  { prdctId: 4, prdctName: "p4", price: 900 },
  { prdctId: 5, prdctName: "p5", price: 100 },
  { prdctId: 6, prdctName: "p6", price: 150 },
];
// Low to High
const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
// console.log(products);
console.log(lowToHigh);

// Hight to Low
const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
console.log(highToLow);
