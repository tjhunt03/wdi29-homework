//The hangman pictures
const hangmanPictureMapping = [
 `
    _________
    |/
    |
    |
    |
    |
    |
    |___
     ******

`
, `
    _________
     |/   |
     |
     |
     |
     |
     |
     |___
     H*****

`
,`
    _________
     |/   |
     |   (_)
     |
     |
     |
     |
     |___
     HA****

`
, `
    ________
     |/   |
     |   (_)
     |    |
     |    |
     |
     |
     |___
     HAN***

`

, `
    _________
     |/   |
     |   (_)
     |   -|
     |    |
     |
     |
     |___
     HANG***

`

, `
    _________
     |/   |
     |   (_)
     |   -|-
     |    |
     |
     |
     |___
     HANGM**

`
,`
    ________
     |/   |
     |   (_)
     |   -|-
     |    |
     |   {
     |
     |___
     HANGMA*

`

, `
    ________
     |/   |
     |   (_)
     |   -|-
     |    |
     |   { }
     |
     |___
     HANGMAN

 `
];

//setting up the game board
const word = "LukeHammer".toUpperCase().split("");
let gameBoard = []
for (let i=0; i<word.length;i++) {
    gameBoard.push("_");
}

//setting up already guessed letters
let guessedLetters = [];

//Function to determine if finished
const isFinished = function(){
  if (gameBoard.indexOf("_") === -1) {
    return true
  }
}

//Set up initial prize prize
let prizeMoney = 0;

//Function to generate a reward amount between 0 and 5k
const generateReward = function(){
  return Math.floor(Math.random() * 5000);
}

//Keep track of how many wrong guesses
let badGuesses = 0;

//The main guessletter Function
const guessLetter = function(letter) {
  if (isFinished() || badGuesses ===7) {
    console.log("The game is finished, no need to guess more!"); //check for finished at the start of the game
    return
  }
  const letterUp = letter.toUpperCase();
  if (guessedLetters.indexOf(letterUp) != -1){
    console.log("You have already guessed that! Try again.");
    return
  }
  let guess = false;
  let numberMatches = 0;
  const bonus = generateReward(); // Get a random bonus amount
  for (let i=0; i<word.length; i++){
      if (word[i] === letterUp) {
        gameBoard[i] = letterUp;
        guess = true;
        numberMatches +=1;
      }
  }
  if ( guess ){
    const totalBonus = bonus*numberMatches;
    console.log(`You guessed ${letterUp} correctly!`);
    console.log(`This round you got $${bonus} per letter match. With ${numberMatches} matches that is $${totalBonus}!`);
    prizeMoney += totalBonus;
  } else {
    badGuesses +=1;
    console.log(`Sorry, ${letterUp} is not in the word. You will lose $${bonus}.`);
    prizeMoney -= bonus;
  }
  guessedLetters.push(letterUp);
  console.log(`Here is the game board \n ${gameBoard.join(" ")} and your current prize money is $${prizeMoney}. \n
  Your current hangman picture is \n ${hangmanPictureMapping[badGuesses]}
  `);
  if (badGuesses ===7) {
    console.log(`Sorry! You lost. The word was ${word.join("")}. Your final prize money is $${prizeMoney}`)
  }
  if (isFinished()){
    console.log(`Well done! You are finished \n Your total prize money was $${prizeMoney}`);
  }
}

//Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user
// if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.




// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
