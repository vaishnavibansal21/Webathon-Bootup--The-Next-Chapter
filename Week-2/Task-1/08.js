//  How many loops in Javascript, and how they do work ? 
// THERE ARE 3 TYPES OF LOOPS IN JAVASCRIPT :-
/***************************** 1. for loop *****************************/
SYNTAX : for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
// working of for loop => In for loop ,it repeatedly executes a block of code as long as a specified condition is true. it includes initialization,condition checking, and iteration steps.

example :
for (let i = 0; i < 3; i++) {
  console.log("hello,world!");
}

/************************* 2. do While loop *************************/
SYNTAX : do {
  // code //
} while (condition);
//working of do While loop => The do...while loop first executes the code block once, and then evaluates the condition.if the condition is true,the loop repeats.

example :
let test =1;
do {
  console.log(test);
  test++;
}
while (test<10);

/*************************** 3. While loop *************************/
SYNTAX : while (condition) {
  
}
// working of While loop => The while loop first evaluates the condition inside ().if the condition is true, the code inside {} is executed. Then,the condition is evaluated again.This process continues as long as the condition evaluates to true.

example :
let num=1;
while (num<=5) {
  console.log(num);
}  