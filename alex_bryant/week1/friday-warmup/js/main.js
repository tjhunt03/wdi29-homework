// Leap Year Warmup Exercise
// Do this in HTML and JS!
console.log("Leap Year Warmup Exercise");
console.log("--------");
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

const divByNum = function (num, year) {
  return year % num === 0 ? true : false;
}

const isLeapYear = function (year) {
  let firstCond = divByNum(4, year) && !divByNum(100, year);
  return firstCond || divByNum(400, year);
}

// Test Data... Make sure it is working!
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...

// We want a custom function called isLeapYear

///for testing
const test = function (yr, is) {
  let str = "is";
  if (!is) {
    str += " not";
  }
  console.log(`${yr} ${str} a leap year`);
}
// const testArr = [1997, 1996, 1900, 2000, 2019];
// for (let i=0; i<testArr.length; i+=1) {
//   test(testArr[i], isLeapYear(testArr[i]));
// }

// Bonus!
const promptUserInput = function () {
  const year = prompt("Please enter a year.");
  console.log(test(year, isLeapYear(year)));
  promptUserInput();
}
promptUserInput();

// Ask the user what number they want to test
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE
