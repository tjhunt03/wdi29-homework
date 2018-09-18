console.log('JS Loaded!');


// let numChild = 3;
// let partnersName = 'Jane';
// let geoLocation = 'Sydney';
// let jobTitle = 'Accountant';
//
// console.log("You will be a " + jobTitle + " in " + geoLocation + "," + "  and married to " + partnersName + "with " + numChild + " kids.");
// ____________________________________________________________
// ____________________________________________________________
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

//
// console.log('fortune teller return');
// const fortuneTeller = function(numChild, partnersName, geoLocation, jobTitle) {
  // let numChild = 3;
  // let partnersName = 'Jane';
  // let geoLocation = 'Sydney';
  // let jobTitle = 'Accountant';
//
//   return  "You will be a " + jobTitle + " in " + geoLocation + "," + "  and married to " + partnersName + "with " + numChild + " kids.";
// };
// console.log(fortuneTeller(3,'Jane', 'Sydney', 'Accountant'));





// let currentYear = 2018;
// let birthYear = 1974;
// let persAge = currentYear - birthYear;
//
// console.log('You are ' + persAge + ' years old.');
//
//
// let presentAge = 44;
// let maxAge = 107;
// let amountPerDay = 5;
// let snacksEaten = (107 - 44) * (5 * 365);
//
// console.log("You will need " + snacksEaten + " to last you until the the ripe //old age of " + maxAge + ".");
//console.log('PuppyAge');

// const calculateDogAge = function()



//
//
//
//
// console.log( 'geometriser'):
//
// const radius = 72;
// const circumference = 2 * Math.PI * radius;
// // const area = Math.PI * (radius * radius);
// //const area = Math.PI * Math.pow(radius, 2);
// const area = Math.PI * radius**2;
//
// console.log(`The circumference is ${circumferencee}, and the area is ${area}`);
//
//
//
// console.log ('Temp Converter');
// let celsiusTemp = 47;
// let farenheightTemp = celsiusTemp * 1.8 * 32;
// console.log(`${celsiusTemp} is ${farenheightTemp} degreese farenheight`);
//
// farenheightTemp = 116.60;
// celsiusTemp = (farenheightTemp -32) / 1.8;)
// console.log(`${} ${});
// use .toFixed(2) to limit number of decimals


// Variables and Primitive Data Types
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// The Geometrizer
// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// // Now store a fahrenheit temperature into a variable.
// // Convert it to celsius and output "NN°F is NN°C."
//
//
// console.log("the calculator");
//
// const squareNumber = function(numNum) {
// var numNumSquared = Math.pow(numNum,2);
//   return "The result of squaring " + numNum + " is " + numNumSquared + ".";
// }
// console.log(squareNumber(3));
//
// //----------------------------------------------------------------------------
//
// const halfNumber = function(aNumNum) {
// var aNumNumDivided = aNumNum /= 2;
//   return "Half of " + aNumNum + " is " + aNumNumDivided;
// }
// // Half of 5 is 5????
// console.log(halfNumber(10));
//
// //-----------------------------------------------------------------------------
//
// const percentOf = function(nummy1, nummy2) {
//   var firstOfSecond = ((nummy1 /= nummy2) * 100);
//     return nummy1 + "is" + firstOfSecond + "%" + " of " + nummy2;
// };
// // 0.5is50% of 4???
// console.log(percentOf(2,4));
//
// // ____________________________________________________________________________
//
// const areaOfCircle = function(radius) {
//   var xxxxx = ;
//
//   return "the area for a circle with radius " + radius + "is" + circleArea;
// }
//
// console.log();
//
// //----------------------------------------------------------------------------
const factor = function (i) {
let str = "";
if (i % 3 === 0) {
  str += "Pling";
  }
if (i % 5 === 0) {
      str += "Plang";
    }
if (i % 7 === 0) {
      str += "Plong";
  }
if (str.length > 0) {
  return str;
}
return i.toString();
}
console.log(factor(28));
console.log(factor(1755));
console.log(factor(34));


// const raindrops = function(number) {
//   let string = "";
//   if number % 3 === 0 ) {
//   string +=  "Pling";
//   }
//   if number % 3 === 0 ) {
//   string +=  "Pling";
//   }
//   if number % 3 === 0 ) {
//   string +=  "Pling";  
//   }
//   if string.length === 0 ) { string += number}
