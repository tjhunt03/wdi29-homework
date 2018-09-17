// Homework: The Word Guesser
console.log("The Word Guesser");
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//Can also write the string and use .split('') to create an array from it
let lettersOfWord = ['P','O','P','T','A','R','T'];
let curGuessedLets = [];
//Add blanks to the guessed letters arr
for (var i = 0; i < lettersOfWord.length; i++) {
  curGuessedLets.push("_");
}

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, change the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// Bonus: Make it like Hangman:
console.log("Bonus: Make it like Hangman:");
console.log("--------");
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
let hangmanState = 0;
let guessCorrect = false;

//function to draw the hangman at various states
const hangmanPrinter = function() {
  console.log("____            ");
  console.log("|    |          ");
  console.log("|    o          ");

  //arm level
  if (hangmanState > 3) {
    console.log("|   /|\\        ");
  } else if (hangmanState > 2) {
    console.log("|   /|          ");
  } else if (hangmanState > 1) {
    console.log("|    |          ");
  } else {
    console.log("|               ");
  }
  //leg level
  if (hangmanState > 5) {
    console.log("|   / \\        ");
  } else if (hangmanState > 4) {
    console.log("|   /           ");
  } else {
    console.log("|               ");
  }

  console.log("|               ");
  console.log("|____           ");
  console.log("|   |______     ");
  console.log("|          |    ");
  console.log("|__________|    ");

  if (hangmanState > 5) {
    console.log("You lose....");
  }
}

const guessLetter = function (guessedLet) {
  //Make upper case for comparison operations
  guessedLet = guessedLet.toUpperCase();

  //Only enter this step if the game is still active
  if (!curGuessedLets.includes(guessedLet) && !(hangmanState > 5)) {
    //Loop through the letters in the word
    for (let i = 0; i < lettersOfWord.length; i+=1) {
      //Check if the letter appears in the word
      if (guessedLet === lettersOfWord[i]) {
        //Add to guessed letters array
        curGuessedLets[i] = lettersOfWord[i];
        //Set the state to 'correct'
        guessCorrect = true;
      }
    }

    //Check if the game has completed
    if (lettersOfWord.join("") === curGuessedLets.join("")) {
      console.log(`You guessed the word ${lettersOfWord.join("")}!`);
      return;
    }

    //If game is not over, print current status
    if (guessCorrect) {
      console.log(`Correct!`);
      console.log(`${curGuessedLets.join("")}`);
    } else {
      hangmanState += 1;
      hangmanPrinter();
    }
    guessCorrect = false;
    return;
  }

}

//winTest function
// const winTest = function() {
//   guessLetter('o');
//   guessLetter('l');
//   guessLetter('P');
//   guessLetter('t');
//   guessLetter('r');
//   guessLetter('r');
//   guessLetter('y');
//   guessLetter('A');
// }
// winTest();

//loseTest function
// const loseTest = function() {
//   guessLetter('o');
//   guessLetter('o');
//   guessLetter('o');
//   guessLetter('z');
//   guessLetter('x');
//   guessLetter('r');
//   guessLetter('p');
//   guessLetter('E');
//   guessLetter('v');
//   guessLetter('l');
//   guessLetter('k');
//   guessLetter('j');
// }
// loseTest();
