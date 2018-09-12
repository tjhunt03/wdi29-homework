// The Calculator

// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(num){
  const numSquared = num ** 2;
  console.log(`The result of squaring the number ${num} is ${numSquared}.`);
  return numSquared;
};

const halfNumber = function(num){
  const numHalfed = num / 2;
  console.log(`Half of ${num} is ${numHalfed}.`);
  return numHalfed;
};

const percentOf = function(num1, num2){
  const percentage = (num1 / num2) * 100;
  console.log(`${num1.toFixed(2)} is ${percentage.toFixed(2)}% of ${num2}.`);
  return percentage;
};

const areaOfCircle = function(radius){
  const area = Math.PI * radius ** 2;
  console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}.`);
  return area;
};

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// -- 20
// Take half of the number and store the result. -- 10
// Square the result of #1 and store that result. -- 100
// Calculate the area of a circle with the result of #2 as the radius. -- 31415.93
// Calculate what percentage that area is of the squared result (#3). ""

const funWithMathFunctions = function(num){
  const numHalfed = halfNumber(num);
  const numSquared = squareNumber(numHalfed);
  const area = areaOfCircle(numSquared);
  const percentage = percentOf(area, numSquared);
};


// Strings

// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(amount){
  const amountDollars = `${amount} dollars`;

  if (amountDollars === "1000000 dollars"){
    return `${amountDollars} (pinky)`;
  } else {
    return amountDollars;
  }
};

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function(str1, str2){
  const newStr1 = str2[0] + str1.slice(1);
  const newStr2 = str1[0] + str2.slice(1);
  return `${newStr1} ${newStr2}`;
};

// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function(str){
  const firstLetter = str[0];
  const strMinusFirstLetter = str.slice(1);
  const re = /firstLetter/g
  const newStr = firstLetter + strMinusFirstLetter.replace(firstLetter, "*");
  return newStr;
};

const fixStartLoop = function(str){
  const firstLetter = str[0];
  let newStr = firstLetter;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === firstLetter)
    {
      newStr = newStr + "*";
    } else {
      newStr = newStr + str[i];
    }
  }
  return newStr
};

// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function(str){
  if (str.length >= 3){
    if (str.endsWith("ing")){
      return str + "ly";
    } else {
      return str + "ing";
    }
  } else {
    return str;
  }
};

// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function(str){
  const notIndex = str.search("not");
  const badIndex = str.search("bad");

  //if (!str.includes(not) || !str.includes(bad))
  if (notIndex === -1 || badIndex === -1){
    return str;
  } else if (badIndex > notIndex){
      const cutStr = str.slice(0, notIndex);
      const newStr = cutStr + "good!";
      return newStr;
  } else {
      return str;
  }
};

console.log(notBad("This dinner is not so bad."));
console.log(notBad("This movie is bad."));
console.log(notBad("This dinner is bad so not."));
