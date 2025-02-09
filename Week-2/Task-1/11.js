// Write a function that assigns grades based on marks using nested if-else.
// Marks>=90 => A grade
// Marks>=80 => B grade
// Marks>=70 => C grade
// Marks>=60 => D grade
// else => Fail

function assignGrade(Marks) {
  if (Marks >= 90) {
    return "A Grade";
  } else if (Marks >= 80) {
    return "B Grade";
  } else if (Marks >= 70) {
    return "C Grade";
  } else if (Marks >= 60) {
    return "D Grade";
  } else {
    return "Fail";
  }
}
console.log(assignGrade(95));  //A Grade
console.log(assignGrade(85));  //B Grade
console.log(assignGrade(75));  //C Grade
console.log(assignGrade(65));  //D Grade
console.log(assignGrade(55));  //Fail