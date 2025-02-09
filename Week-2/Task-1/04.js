//Write a JavaSript code that calculates the square and cube from 0 to 10.

//using Arrow function
const calculateSquaresAndCubes = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(`Number:${i}, Square: ${i ** 2}, Cube:${i ** 3}`);
  }
};

calculateSquaresAndCubes();