// Exercises: Functions
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
//
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
// The Geometrizer
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
//
// Convert it to celsius and output "NN°F is NN°C."
//
// const numberOfChildren = 3;
// const partnerName = "Sally";
// const geoLocation = "Sydney";
// const jobTitle = "Web Developer";
// console.log(`You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberOfChildren} kids.`);

//Age Calculate

// const currYear = 2018;
// const birthYear = 2000;
// const ageAfterBirthday = currYear - birthYear;
// const ageBeforBirthday = ageAfterBirthday - 1
// console.log(`They're either ${ageBeforBirthday} or ${ageAfterBirthday} years old.`)
//
// //Lifetime Supply
// const currentAge = 30;
// const maximumAge = 60;
// const amountPerDay =5;
// const yearsRemaining = maximumAge- currentAge;
// const amountPerYear = amountPerDay * 365.25;
//
// const totalSnacksRequired = yearsRemaining * amountPerYear
// Console.log(`You will need ${totalSnacksRequired} to last you until the ripe old age of ${maximumAge}`);
//
// //Geometrizer
// const radius = 72;
// const circumference = 2 * Math.PI * radius;
// const area = Math.PI * radius**2;
//
// console.console.log(`The circumference is ${circumference} , and the area is ${area}`);
//
// //The temperature Converter
// // option K for the symbol
// let celsiusTemp = 47;
// let farenheitTemp = (celsiusTemp) * 1.8 + 32;
// console.log(`${celsiusTemp} degrees ˚C is ${farenheitTemp.toFixed(2)}} degrees ˚F.`);
//
// farenheitTemp = 116.60;
// celsiusTemp = (farenheitTemp - 32) / 1.8;
// console.log(`${farenheitTemp} ˚F is ${celsiusTemp.toFixed(2)}˚C.`);
//
// // Function Exercises
//
// const tellFortune = function (numberOfChildren,partnerName,geoLocation,jobTitle) {
//
// return(`You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberOfChildren} kids.`);
//
// }
//
// //let message1 = tellFortune(3,'Liz','Sydney','Dentist');
// //console.log(tellFortune(28,'Paul))
// let message1 = tellFortune(28,'Paul','Adelaide','Plumber');
// // message1 = tellFortune(3,'Joanne','Brisbane','Lawyer');
//
// console.log(message1);
//
// // Puupy Age Calculate
// const calculateDogAge = function(dogAge) {
//
//
//   return `Your doggie is ${ dogAge * 7} years old`;
// };
//
// console.log(calculateDogAge(1));
//
//
// //Snack calcCircumfrence
//
// const calculateSupply = function ( currentAge, amountPerDay) {
//   const maximumAge = 90;
//   cont yearsRemaining = maximumAge * 365.25;
//   constant totalSnacksRequired = yearsRemaining * amountPerYear;
//   return `You ${Math.round(totalSnacksRequired)} to last ${maximumAge}`;
// }
//
// //Geometrizer
//
// constant calcCircumference = function (radius) {
// return 2 * Math.PI * radius;
//
//
// const calcArea = function (radius)  {
// return Math.PI * radius**2;
//
// }
//
// console.log(`fddfdfdf is ${calcCircumference(70).toFixed(2)} and area is ${calcArea(70)}`)

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

//PART 1
console.log('****Square Number****');
let squareIt = function(number) {

  let squareNum = Math.pow(number,2);
  return console.log(`The result of squaring the number ${number} is ${squareNum}.`);

};

squareIt(3);

console.log('****Half Number****');
let halfIt = function(number) {

  let halfNum = number/2;
  return console.log(`Half of  ${number} is ${halfNum}.`);

};

halfIt(3);

console.log('****Percent of Num 1 over Num 2***');
let calcpercent = function(firstNum,secondNum) {

  let percentCalc = firstNum/secondNum * 100;
  return console.log(`${firstNum} is ${percentCalc}% of ${secondNum}.`);

};

calcpercent(1,3);

console.log('****Circle Area****');
let areaOfCircle = function(radius) {

  let circleArea = 3.14159 * radius * radius;

  return console.log(`The area for a circle with radius ${radius} is ${circleArea.toFixed(2)}.`);

};

areaOfCircle(10);

// PART 2



console.log('****Half Number and Store it****');
let halfIt2 = function(number) {

  let halfNum = number/2;
  return halfNum;

};

let valueInput = halfIt2(4);
console.log(`The value of half number and store it is ${valueInput}.`)
//
console.log('****Square number and store it****');
let squareIt2 = function(number) {

  let squareNum = Math.pow(number,2);
  return squareNum;

};

let valueInput1 = squareIt2(valueInput);

console.log(`The value of square number and store it is ${valueInput1}.`)
//
// console.log('****Circle Area and store it****');
// function areaOfCircle2(radius) {
//
//   let circleArea = 3.14159 * radius * radius;
//
//   return console.log(`The area for a circle with radius ${radius} is ${circleArea.toFixed(2)}.`);
//
// };
//Dr Evil

console.log('****Dr Evil****');
let drEvil = function(amount) {

if (amount === 1000000) {
console.log(`${amount} dollars 'pinky'`)
}
else
{console.log(`${amount} dollars!`)
}
};

drEvil(1000000);

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

console.log('****Mix Up****');

let mixUp = function(str1,str2) {

  let prefixStr1 = str1.slice(0,2);
  let prefixStr2 = str2.slice(0,2);
  let suffixStr1 = str1.slice(2,str1.length);
  let suffixStr2 = str2.slice(2,str2.length);

  console.log(`${prefixStr2}${suffixStr1} ${prefixStr1}${suffixStr2}`)
}

mixUp('Apples','Oranges');

console.log('****FixStart****');

let fixStart = function(myStr) {

let firstChar = myStr.slice(0,1);
//let newStr = myStr.replace(firstChar, "*");
let newStr = myStr.replace(new RegExp(firstChar,'g)', "*");
//str = str.replace(/abc/g, '');
console.log(`${firstChar} MMMMMMMMMM ${newStr}`);
}

fixStart('babble')


console.log('****Raindrop Speak****');

let raindropSpeak = function(num1) {

  if (num1%3 === 0 && num1%5 === 0) {
    console.log(`PlingPlang`);
  }
    else if (num1%3 === 0 && num1%7 === 0) {
      console.log(`PlingPlong`);
    }
    else if (num1%5 === 0 && num1%7 === 0) {
      console.log(`PlangPlong`);
    }

    else if (num1%5 === 0 && num1%7 === 0 && num1%3 === 0) {
      console.log(`PlinbgPlangPlongP`);
    }
    else if (num1%3 === 0)
      console.log("Pling");
    else if (num1%5 === 0){
      console.log("Plang");
    }
    else if (num1%7 === 0) {
      console.log("Plong")
    }
    else {
      console.log(`Number is ${num1}.`)
    }
};

raindropSpeak(15);
