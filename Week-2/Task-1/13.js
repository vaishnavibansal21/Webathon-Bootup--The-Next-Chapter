// Write a Javascript function to check if a number is a palindrome.
function isPalindorme(number) {
  // Negative number are not palindromes
  if (number < 0) {
    return false;
  }
  // Convert number to string
  let strnum = number.toString();

  // Reverse the string and compare with the original
  return strnum === strnum.split("").reverse().join("");
}
console.log(isPalindorme(474)); //true
console.log(isPalindorme(-121)); //false
console.log(isPalindorme(20)); //false
