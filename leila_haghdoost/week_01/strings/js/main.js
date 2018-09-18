//console.log("Hi!");

/*Create a function called DrEvil. It should take a single argument,
 an amount, and return ' dollars', except it will add '(pinky)' at
  the end if the amount is 1 million.*/

function drEvil(amount) {
  if (amount === 1000000) {
    console.log(`${amount} dollars (pinky)`)
  } else {
    console.log(`${amount} dollars`)
  }
  return `drEvil`;
};
drEvil(1000000);


/*MixUp
Create a function called mixUp. It should take in two strings,
 and return the concatenation of the two strings
  (separated by a space) slicing out and swapping the first 2
   characters of each. You can assume that the strings are at
   least 2 characters long. */

function mixUp(str1,str2) {
  let concatenation = `${str1} ${str2}`
  console.log(`${concatenation}`)
};
mixUp('mix','Up');

/*FixStart
Create a function called fixStart. It should take a
single argument, a string, and return a version where
all occurences of its first character have been replaced
 with '*', except for the first character itself. You can
  assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'*/
/*
function fixStart(str) {
  let res = str.charAt(0);
  let rep = str.replace(/p/g, "*");

console.log(`${rep}`);
  return `fixStart`;
};
fixStart('pop');
*/



/*Verbing
Create a function called verbing. It should take a single
argument, a string. If its length is at least 3, it
 should add 'ing' to its end, unless it already ends in
  'ing', in which case it should add 'ly' instead.
   If the string length is less than 3, it should
   leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'*/

  function verbing(str) {
    if(str.length >= 3 && str.slice(-3) === 'ing'){
      console.log(`${str}ly`);
    } else if(str.length >= 3) {
      console.log(`${str}ing`);
    } else {
      console.log(`${str}`);
    }
  };
  verbing('book');




  /*Not Bad
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'*/
/*function notBad(str) {
  let res = str.substring("not", "bad");


};
notBad();*/



/*Write a Javascript program that will take a
number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.*/



/*function number(num) {

  if( num % 3 === 0) {
    console.log("pling");
} else if(num % 5 === 0) {
  console.log("plang");
} else if(num % 7 === 0) {
  console.log("plong");
} else ( um % 7 === 0 && num % 5 === 0){
  console.log(`*`);
}
};
number(250);
*/



function number(num) {
  let string = "";
if( num % 3 === 0) {
  string += "Pling";
}
if(num % 5 === 0) {
string += "Plang";
}
if(num % 7 === 0) {
string += "Plong";
}
if ( string.length === 0) {
  string += number;
}
return string;
};

console.log (number(0));
console.log (number(1755));
console.log (number(105));
