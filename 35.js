// function returning function

function myFunc() {
  const addNumber = (num1, num2) => {
    let total = num1 + num2;
    console.log(total);
    // return total;
  };
  return addNumber;
}

const answer = myFunc();
// console.log(answer);
answer(4, 5);
// console.log(answer(3, 4));
