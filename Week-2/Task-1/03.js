//Find the Largest number in an Array.
// from 2 METHODS we can solve... 

//Using spread operator
let numbers = [20, 30, 40, 50, 60];
let maxNumber = Math.max(...numbers);
console.log(maxNumber);

//Using for Loop
numbers = [20, 30, 40, 50, 60]; //there is no (let) use because this variable already in use.
maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
console.log(maxNumber);