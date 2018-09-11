//sconsole.log("Hi!");


 //Part 1:
// Write a function called squareNumber that will take one argument (a number),
//  square that number, and return the result. It should also log a
//  string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    let squaredNumber = num * num;
    console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
    return squaredNumber;
}
squareNumber(3);




// Write a function called halfNumber that will take one argument (a number),
//  divide it by 2, and return the result. It should also log a string
//  like "Half of 5 is 2.5.".

function halfNumber(num) {
  let dividedNumber = num / 2;
  console.log(`Half of ${num} is ${dividedNumber}`);
  return halfNumber;
}
halfNumber(5);


// Write a function called percentOf that will take two numbers,
 // figure out what percent the first number represents of
 // the second number, and return the result. It should also
 // log a string like "2 is 50% of 4."
function percentOf(num1, num2) {
  let percent = (num1 * 100) / num2;
  console.log(`${num1} is ${percent}% of ${num2}`);
  return percentOf;
};
percentOf(2, 4);


// Write a function called areaOfCircle that will take one argument
// (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius
// 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(radius) {
  let area = (radius * 2) * 3.14;
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return areaOfCircle;
};
areaOfCircle(2);




//part 2


/*Write a function that will take one argument
(a number) and perform the following operations,
using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/

function operations(num) {
  let numHalf = num / 2;
  console.log(`${numHalf}`);
  let squareNumHalf = numHalf * numHalf;
  console.log(`${squareNumHalf}`);
  let area = (squareNumHalf * 2) * 3.14;
  console.log(`${area}`);
  let areaPercentage = (area * 100) / squareNumHalf;
  console.log(`${areaPercentage}`);
};
operations(8);
