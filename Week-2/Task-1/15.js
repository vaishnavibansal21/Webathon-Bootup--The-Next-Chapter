// Write a function to check if a given number is a perfect square.
function perfectSquare(number) {
  if (number < 0) return false; //negative numbers can't be perfect squares
  let sqrt = Math.sqrt(number);
  return sqrt === Math.floor(sqrt);
}
console.log(perfectSquare(25)); //true
console.log(perfectSquare(27)); //false
console.log(perfectSquare(1)); //true
console.log(perfectSquare(81)); //true
console.log(perfectSquare(64)); //true