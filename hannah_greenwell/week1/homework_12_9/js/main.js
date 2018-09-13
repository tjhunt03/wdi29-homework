// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

console.log("The Word Guesser - Wheel of Fortune");

const word = [ 'P', 'O', 'O', 'L' ];
let guessedLetters = [ '_', '_', '_', '_' ];

let rewardTotal = 0;

const guessLetter = function( letter ){

  let correctGuesses = 0;

  // Check the word for matches and if there is a match update the guessedLetters array and correctGuesses counter.
  for( let i = 0; i < word.length; i++ ){
    if( word[i] === letter ){
      guessedLetters[i] = letter;
      correctGuesses++
    }
  } // for

  let unguessedLetters = 0;

  // Log the updates guessedLetters array to the screen and check for any unguessed letters.
  for( let i = 0; i < guessedLetters.length; i++ ){
    console.log(guessedLetters[i]);
    if ( guessedLetters[i] === '_' ){
      unguessedLetters++;
    }
  } // for

  // Create a random reward award amount.
  const rewardAmount = Math.floor(( Math.random() * 100 ) + 1 );

  // Checks for any correct guesses. If there are correct guesses, congratulates the user and adds the reward amount to the reward total. If there are no correct guesses, subtracts the reward amount from reward total.
  if( correctGuesses > 0 ){
    console.log('Congratulations, you found a new letter!');
    rewardTotal += (rewardAmount * correctGuesses);
    // console.log(rewardAmount);
    // console.log(rewardTotal);
  } else {
    rewardTotal -= rewardAmount;
    // console.log(rewardAmount);
    // console.log(rewardTotal);
  }

  // Checks to see if all letters have been guessed and if they have congratulates the winner and logs the reward total.
  if( unguessedLetters === 0){
    console.log('Congratulations, you guessed the word!!!');
    console.log(`You won $${rewardTotal}, go out and buy yourself a new pair of shoes!`);
  }
}; //function

console.log('............');

// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

// console.log("The Word Guesser - Hangman");
//
// const word = [ 'P', 'O', 'O', 'L' ];
// let guessedLetters = [ '_', '_', '_', '_' ];
// let previousGuesses = [ ];
//
// let hangmanCount = 0;
//
// const guessLetter = function( letter ){
//   let correctGuesses = 0;
//
//   // Filter lowercase guesses and change them to uppercase
//   const letterCaps = letter.toUpperCase();
//
//   // Check to make sure the letter hasn't already been guessedLetter. If the letter has been guessed exit the function.
//   if( previousGuesses.includes( letterCaps ) ){
//     return;
//   }
//   // Store the guessed letters in the previousGuesses array for checking.
//   previousGuesses.push( letterCaps );
//
//   // Check the word for matches and if there is a match update the guessedLetters array and correctGuesses counter.
//   for( let i = 0; i < word.length; i++ ){
//     if( word[i] === letterCaps ){
//       guessedLetters[i] = letterCaps;
//       correctGuesses++
//     }
//   } // for
//
//   let unguessedLetters = 0;
//
//   // Log the updates guessedLetters array to the screen and check for any unguessed letters.
//   for( let i = 0; i < guessedLetters.length; i++ ){
//     console.log(guessedLetters[i]);
//     if ( guessedLetters[i] === '_' ){
//       unguessedLetters++;
//     }
//   } // for
//
//   // Checks for any correct guesses. If there are correct guesses, congratulates the user and decrements the hangman counter by 1. If there are no correct guesses, increments the hangman counter by 1.
//   if( correctGuesses > 0 ){
//     console.log('Congratulations, you found a new letter!');
//     hangmanCount--;
//   } else {
//     hangmanCount++;
//   }
//   //console.log(hangmanCount);
//
//   // Checks to see if all letters have been guessed and if they have exits the function.
//   if( unguessedLetters === 0){
//     console.log('Congratulations, you guessed the word!!!');
//     return;
//   }
//
//   // Checks to see if the hangman counter has reached 6 and if it has tells the user they have lost.
//   if( hangmanCount === 6 ){
//     console.log("Sorry loser, you lost.");
//     console.log('  + - - - +');
//     console.log('  |       |');
//     console.log('  o       |');
//     console.log(' /|\\      |');
//     console.log(' / \\      |');
//     console.log('          |');
//     console.log('============');
//
//   }
// }; //function
//
// console.log('............');


// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
console.log('Find the Maxium of Two Numbers');

const maxOfTwoNumbers = function( num1, num2 ){
  if( num1 > num2 ){
    return num1;
  } else {
    return num2;
  }
};

console.log('............');

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
console.log('Find the Maxium of Three Numbers');

const maxOfThree = function( num1, num2, num3 ){
  let numbers = [ num1, num2, num3 ];
  numbers.sort( function( a, b ){ return b - a });
  return numbers[0];
};

console.log('............');

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
console.log('Sum Array');

const sumArray = function( numbers ){

  let total = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

console.log('............');


console.log('Multiply Array');

const multiplyArray = function( numbers ){

  let total = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
};

console.log('............');

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
console.log('Reverse String');

const reverseString = function( string ){
  return string.split("").reverse().join("");
};

console.log('............');


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
console.log('Find the Longest Word');

const findLongestWord = function( words ){

  let lengthLongestWord = words[0].length;

  for( let i = 1; i < words.length; i++ ){
    if( lengthLongestWord < words[i].length ){
      lengthLongestWord = words[i].length;
    }
  }

  return lengthLongestWord;
};

console.log('............');

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
console.log('Filter Long Words');

const filterLongWords = function( words, length ){

  let longWords = [];

  for( let i = 0; i < words.length; i++ ){
    if( words[i].length > length ){
      longWords.push(words[i]);
    }
  }

  console.log(longWords);
};

console.log('............');
