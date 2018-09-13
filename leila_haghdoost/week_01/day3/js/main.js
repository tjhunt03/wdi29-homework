

/*Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess
 the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').*/
/*Write a function called guessLetter that will:
Take one argument, the guessed letter.*/

let wordLetters = ['F', 'O', 'X'];
let guessedLetters = [' ', ' ', ' '];
/*let rewardAmount = [ 100, 200, 300 ];*/
function pickLetter(letter) {
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] === letter) {
            guessedLetters[i] = letter;
            console.log(`You guessed ${letter} correctly.`);
            if (wordLetters.join() === guessedLetters.join()) {
                console.log(`You win the game`);
            }
        } else if (wordLetters[i] !== letter) {
            console.log(`Try again`);
        }
    }
};
console.log(pickLetter('F'));
console.log(pickLetter('P'));
console.log(pickLetter('O'));
console.log(pickLetter('X'));
/*


/*Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.*/

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is larger than ${num2}`);
    } else {
        console.log(`${num1} is less than ${num2}`);
    }
    return;
};
maxOfTwoNumbers(560, 453);
maxOfTwoNumbers(500, 763);
maxOfTwoNumbers(20, 3);

/*Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.*/

function maxOfThreeNumbers(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
    return;
};
maxOfThreeNumbers(560, 453, 987);
maxOfThreeNumbers(500, 763, 54);
maxOfThreeNumbers(20, 3, 76);

/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/
function character(letter) {

    var vowel = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < vowel.length; i++) {
        if (letter == vowel[i]) {
            console.log("true");
            break;
        } else {
            console.log("false");
        }
    }
};
character('o');
character('b');

/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/



function sumArray(num) {
    let totalnum = 0;
    for (let i = 0; i < num.length; i++) {
        totalnum += num[i];
    }
    return totalnum;
};
console.log(sumArray([1, 2, 3, 4, 5]));


function multiplyArray(num) {
    let totalnum = 1;
    for (let i = 0; i < num.length; i++) {
        totalnum *= num[i];
    }
    return totalnum;
};
console.log(multiplyArray([1, 2, 3, 4, 5]));
