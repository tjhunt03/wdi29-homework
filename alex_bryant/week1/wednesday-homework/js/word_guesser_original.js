// Homework: The Word Guesser
console.log("The Word Guesser");
console.log("--------");
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
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
const guessLetter = function (guessedLet) {
  //Make upper case for comparison operations
  guessedLet = guessedLet.toUpperCase();
  //Loop through the letters in the word
  for (let i = 0; i < lettersOfWord.length; i+=1) {
    //Check if the letter appears in the word
    if (guessedLet === lettersOfWord[i]) {
      //Add to guessed letters array
      curGuessedLets[i] = lettersOfWord[i];
    }
  }
  //Check if the game has completed
  if (lettersOfWord.join("") === curGuessedLets.join("")) {
    console.log(`You guessed the word ${lettersOfWord.join("")}!`);
    return;
  }
  //If game is not over, print current status
  console.log(`${curGuessedLets.join("")}`);
}

//Test function
// const test = function() {
//   guessLetter('o');
//   guessLetter('l');
//   guessLetter('P');
//   guessLetter('t');
//   guessLetter('r');
//   guessLetter('r');
//   guessLetter('y');
//   guessLetter('A');
// }
// test();
