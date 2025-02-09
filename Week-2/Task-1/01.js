// Write a function that takes an input of item prices and return the total bill.

function calculateTotalBill(prices) {
  if (!Array.isArray(prices)) {
      throw new Error("Input must be an array of numbers");
  }
  
  return prices.reduce((total, price) => {
      if (typeof price !== "number" || price < 0) {
          throw new Error("All elements must be non-negative numbers");
      }
      return total + price;
  });
}
const itemPrices = [15.99, 20.49, 5.99, 12.50];
console.log(calculateTotalBill(itemPrices)); // Output: 54.97