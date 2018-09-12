// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
// (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const answer = ["B", "A", "B", "B", "L", "E"];
let guessed = [];
for (i = 0; i < answer.length; i++) {
  guessed.push("_");
}
console.log(guessed.join(" "));

let reward = 0;
let hangman = 0;

const guessLetter = function (letter) {
  if (hangman === 6) {
    return console.log(`R.I.P restart your guesses. Refresh the page.`);
  }

  let isGuessCorrect = false
  for (i = 0; i < guessed.length; i++) {
    if (letter === guessed[i]) {
      return console.log(`You have guessed the letter ${letter} already! Please try another letter.`);
    }
  }

  for (i = 0; i < answer.length; i++) {
    if (letter === answer[i]) {
      isGuessCorrect = true;
      guessed[i] = letter;
      reward = reward + 100;
    }
  }

  if (isGuessCorrect === true) {
    console.log(`You are correct!`);
    console.log(`You have $${reward}.`);
  }

  if (isGuessCorrect === false) {
    console.log(`Bad Luck! Please try again.`);
    reward = reward - 100;
    console.log(`You have $${reward}.`);
    hangman = hangman + 1;
  }

  console.log(guessed.join(" "));
  if (hangman === 0) {
    console.log(" +---+\n |   |\n     |\n     |\n     |\n     |\n=========");
  }
  if (hangman === 1) {
    console.log(" +---+\n |   |\n o   |\n     |\n     |\n     |\n=========");
  }
  if (hangman === 2) {
    console.log(" +---+\n |   |\n o   |\n |   |\n     |\n     |\n=========");
  }
  if (hangman === 3) {
    console.log(" +---+\n |   |\n o   |\n/|   |\n     |\n     |\n=========");
  }
  if (hangman === 4) {
    console.log(" +---+\n |   |\n o   |\n/|\\  |\n     |\n     |\n=========");
  }
  if (hangman === 5) {
    console.log(" +---+\n |   |\n o   |\n/|\\  |\n/    |\n     |\n=========");
  }
  if (hangman === 6) {
    console.log(" +---+\n |   |\n o   |\n/|\\  |\n/ \\  |\n     |\n=========");
  }

  if ((guessed.join(" ") === answer.join(" ")) && hangman < 6) {
    console.log(`You have guessed the word ${answer.join("")} correctly!`);
  }
};




// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found),
// otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfTwoNumbers = function (number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  }
};

console.log(maxOfTwoNumbers(5, 6));


const maxOfThree = function (num1, num2, num3) {
  let result = maxOfTwoNumbers(num1, num2);
  return maxOfTwoNumbers(result, num3);
};

console.log(maxOfThree(1, 4, 10));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelFunc = function (letter) {
  if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

vowelFunc("a");
vowelFunc("B");

// Define a function sumArray and a function multiplyArray
// that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//defined function called "adder" inside function sumArray.
const sumArray = function(array) {
  let adder = function(runningSum, addNext) {
    return runningSum + addNext;
  };
  // reduce applies the function specified to all elements of array. syntax is reduce(function,initialValue). initialValue = 0 if left blank.
  // 1st call of function: initialValue + (1st element of array = 1) = 0 + 1 = 1 <--reduce remembers returned value of last call of function.
  // 2nd call of function: (last value of function = 1) + (second element = 2) = (new remembered value = 3)
  // 3rd call of function: (last value of function = 3) + (third element = 3) = (new remembered value = 6)
  // 4th call of function: 6 + 4 = 10
  // reduce of function is the final value calculated
  return array.reduce(adder, 0);
};

console.log(sumArray([1,2,3,4]));

const multiplyArray = function(array) {
  let multi = function(runningMulti, multiplyNext) {
    return runningMulti * multiplyNext;
  }
  return array.reduce(multi, 1);
};

console.log(multiplyArray([1,2,3,4]));


// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function(string) {
  let array = string.split(""); //splits string into array
  let reverseArray = [""];
  for (i = 0; i < array.length; i++) {
    let iBackward = array.length - (i + 1);
    reverseArray[i] = array[iBackward];
  }
  return reverseArray.join("");
};

console.log(reverseString("google"));


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function (array) {
  let lengthArray = [];
  for (i = 0; i < array.length; i++) {
    lengthArray[i] = array[i].length;
  }
  let max = function(runningMaxLength, currentElement) {
    return Math.max(runningMaxLength, currentElement);
  }
  let longestElementLength = lengthArray.reduce(max, 0);
  let compare = function(element) {
    //filter() function has to be provided a function that returns true or false.
    //This function compares the longestElementLength to the length of the element in an array.
    return longestElementLength === element.length;
  }
  return array.filter(compare, 0); // If compare function is true for element, element is added to new array
};

console.log(findLongestWord(["world", "hello", "log", "bee"]));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

const filterLongWords = function (array, number) {
  let lengthArray = [];
  for (i = 0; i < array.length; i++) {
    lengthArray[i] = array[i].length;
  }
  let compare = function(element) {
    return element.length > number; //same as before but new condition is element.length > number
  }
  console.log(array.filter(compare, 0));
};

console.log(filterLongWords(["good", "television", "tv", "popcorn", "get"], 3));
