// Array and Functions Bonus Material
console.log("Array and Functions Bonus Material:");
console.log("--------");
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2) {
  return (num1 > num2) ? num1 : num2;
};

console.log(maxOfTwoNumbers(5, 7));
console.log(maxOfTwoNumbers(15, 7));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1, num2, num3) {
  const biggerOfFirstTwo = (num1 > num2) ? num1 : num2;
  return (biggerOfFirstTwo > num3) ? biggerOfFirstTwo : num3;
};

console.log(maxOfThree(1, 5, 7));
console.log(maxOfThree(15, 7, 2));
console.log(maxOfThree(15, 17, 2));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = function (str) {
  return vowels.includes(str) ? true : false;
};

console.log(isVowel('e'));
console.log(isVowel('a'));
console.log(isVowel('k'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//Apparently:
//const reducer = function (accumulator, currentValue) {
//  return accumulator + currentValue;
//}
//can be reduced down to:
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const sumArray = function(arr) {
  //The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.
  return arr.reduce(reducer);
};

console.log(sumArray([1,2,3,4]));
console.log(sumArray([10,20,10]));

const reducer2 = (accumulator, currentValue) => accumulator * currentValue;

const multiplyArray = function(arr) {
  return arr.reduce(reducer2);
};

console.log(multiplyArray([1,2,3,4]));
console.log(multiplyArray([10,20,10]));

// Bonus
console.log("Bonus:");
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(str) {
  let newStr = "";
  for (let i = (str.length - 1); i >= 0 ; i-=1) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseString("jag testar"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arr) {
  let longest = arr[0];
  for (let i = 0; i < arr.length; i+=1) {
    longest = (arr[i].length > longest.length) ? arr[i] : longest;
  }
  return longest;
};

console.log(findLongestWord(['boo','toilet','lollipop','forget','love']));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const filterLongWords = function(arr, i) {
  let newArr = [];
  for (let k = 0; k < arr.length; k+=1) {
    if (arr[k].length > i) {
      newArr.push(arr[k]);
    }
  }
  return newArr;
};

console.log(filterLongWords(['boo','toilet','lollipop','forget','love'], 4));
