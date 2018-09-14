// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const word =['w','a','l','l','p','a','p','e','r'];
let mystery = ['_','_','_','_','_','_','_','_','_'];
let pastGuesses=[];
// const  word = ['f','o','x'];
// let mystery = ['_','_','_'];
let reward = 0;
let count = 8;

const guessLetter = function(letter){
  if(count<=0){ //if you dont have body parts
    console.log('Reset me!!!!');
  }else{  //stilll alive
    //check if letter has been used before, check pastGuess array
    if (pastGuesses.includes(letter)){
      console.log('You have chosen that letter previously.');
    }else{  //letter not used
      //add letter to pastGuess array
      pastGuesses.push(letter);
      //count = count-1;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter){
          mystery[i] = letter;  //change array blank to mystery[i] character
          reward += Math.round((Math.random()*10));
        }
      }
    }
    if(word.includes(letter)){  //if word includes letter
      console.log(mystery);
      if(mystery.includes('_')){  //if word includes letter and unsolved
        console.log(`You found letter ${letter}. Please choose again`);
        console.log(`$${reward}`);
      }else{  //if word includes letter and no more to guess
        console.log(`Congratulations you solved ${mystery.join('')}`);
        console.log(`Total winnings $${reward}`);
      }
    }else{  //if word does not include letter
      console.log(mystery);
      reward -= Math.round((Math.random()*5));
      console.log(`The letter ${letter} is not in the word`);
      console.log(`$${reward}`);
      count = count -1;
    }
    console.log(`Past guesses ${pastGuesses}`);
    console.log(`Body parts left: ${count}`);
    if(count===0){    //if no more body parts left
      console.log('X   X');
      console.log(' X X');
      console.log('  X');
      console.log(' X X');
      console.log('X   X');
      console.log(`Too bad, the word was ${word.join('')}`);
    }
  };
}

console.log(mystery);   //show at start game
console.log(`$${reward}`); //show at start game

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.





// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = (a,b)=>{
  if (a===b){
    return 'These are equal';
  }else if (a>b){
    return a;
  }else{
    return b;
  }
}
console.log('maxOfTwoNumbers');
console.log(maxOfTwoNumbers(3,4));
console.log(maxOfTwoNumbers(8,2));
console.log(maxOfTwoNumbers(77,77));



// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = (a,b,c)=>{
  if (a>b&&a>c){
    return a;
  }else if (b>a && b>c){
    return b;
  }else{
    return c;
  }
}

console.log(`maxOfThree`);
console.log(maxOfThree(2,5,3));
console.log(maxOfThree(634463,264367,2264264));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowel = (letter)=>{
  if(letter==='a'||letter==='e'||letter==='i'||letter==='o'||letter==='u'){
    return true;
  }else{
    return false;
  }
}
console.log('Vowel');
console.log(vowel('a'));
console.log(vowel('t'));


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
let arr1 = [1,2,3,4];
let arr2 = [4,5,6,7];


const adder = function(accumulator, currentValue){
  return accumulator + currentValue;
};

let sumArray = (arr)=>{
  return arr.reduce(adder);
}


const multi = function(a,b){
  return a*b;
};

let multiplyArray = function(arr){
  return arr.reduce(multi);
};

console.log(`sumArray`);
console.log(sumArray(arr1));
console.log(sumArray(arr2));

console.log('multiplyArray');
console.log(multiplyArray(arr1));
console.log(multiplyArray(arr2));



// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function(str){
  return str.split('').reverse().join('');
}
console.log(reverseString('jag testar'));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var findLongestWord = function(longestWordArray){
  longestWord = '';
  for (var i = 0; i < longestWordArray.length; i++) {
    if (longestWordArray[i].length > longestWord.length){
      longestWord = longestWordArray[i];
      }
    }
    return longestWord;
}
let fd=['asadfsa','bat','ca','gfgdgfgfd', 'geaw'];
console.log(findLongestWord(fd));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
let filterLongWords = function(arr, max){
  //return arr.filter(word=>word.length>max);
  let lw = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length>max){
      lw.push(arr[i]);
    }
  }
  return lw;
}

console.log(filterLongWords(fd,3));
