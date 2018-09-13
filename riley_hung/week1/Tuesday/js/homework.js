
// The Calculator
// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
//
const squareNumber = function(number){
  const result = number * number;
  console.log( `The result of squaring the number ${number} is ${result}`);
  return result;
};
squareNumber(10);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
//
const halfNumber = function(number){
  const result = number / 2;
  console.log(`Half of ${number} is ${result}`);
  return result;
};
halfNumber(9);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(number1,number2){
  const result = ((number1 / number2) * 100);
  console.log( `${number1} is ${result}% of ${number2}.`);
  return result;
}
percentOf(6,7);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function(radius){
  const result = (radius * radius * Math.PI).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${result}`);
  return result;
};
areaOfCircle(2);


// Part 2
// Write a function that will take one argument (a number 6) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.3
// Square the result of #1 and store that result. 9
// Calculate the area of a circle with the result of #2 as the radius. 9*9*PI
// Calculate what percentage that area is of the squared result (#3).

 const megaCalculation = function(number){
   const halfNum = halfNumber(number);
   const squareNum = squareNumber(halfNum);
   const areaNum = areaOfCircle(squareNum);
   const finalResult = percentOf(areaNum,squareNum);
   return;
 };
 megaCalculation(20);


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

let DrEvil = function(amount) {

  if (amount === 1000000) {
    return `${amount} dollars (pinky)`
  }
  return `${amount} dollars`
}
console.log(DrEvil(1000000));

 // MixUp
 // Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
 //
 //   mixUp('mix', 'pod'): 'pox mid'
 //   mixUp('dog', 'dinner'): 'dig donner'
 // Look up the JavaScript string reference to find methods which may be useful!




}



 // FixStart
 // Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
 //
 // fixStart('babble'): 'ba**le'
 // Verbing
 // Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
 //
 //   verbing('swim'): 'swimming'
 //   verbing('swimming'): 'swimmingly'
 //   verbing('go'): 'go'
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
