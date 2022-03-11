// Array push pop

// Array shift unshift

let friends = ["Rohit", "Mohit", "Sonam", "Ashik"];

console.log(friends);
// push --> array er ses iteam add kore
friends.push("Anushka");
console.log(friends);

// pop --> array er ses er iteam remove kore
let ex = friends.pop();
console.log(typeof ex, ex);

let numbers = [2, 2.4, 3, 8];

// ushift --> array er first ei iteam add kore
numbers.unshift(1);
console.log(numbers);
//  shift --> array er first iteam remove kore
let rmvNumber = numbers.shift();
console.log(typeof rmvNumber, rmvNumber);
