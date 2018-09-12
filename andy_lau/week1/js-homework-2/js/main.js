// Strings
// These exercises will test your knowledge of string function and conditionals.
// For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//
// DrEvil
// Create a function called DrEvil.
// It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
console.log("DREVIL");
const drEvil = function(amount) {
  if (amount === 1000000) {
    return `${amount} dollars (pinky)`;
  } else {
    return `${amount} dollars`;
  };
};

console.log(drEvil(1000000));
console.log(drEvil(100));

// MixUp
// Create a function called mixUp.
// It should take in two strings, and return the concatenation of the two strings (separated by a space)
// slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
console.log("MIXUP");
const mixUp = function(string1, string2) {
  //store first two letters
  const letter1 = string1.slice(0, 2);
  const letter2 = string2.slice(0, 2);
  //store rest of the letters from 3rd letter onwards
  const restLetter1 = string1.substr(2);
  const restLetter2 = string2.substr(2);
  return `${letter2}${restLetter1} ${letter1}${restLetter2}`;
};
console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));

// FixStart
// Create a function called fixStart.
// It should take a single argument, a string, and return a version where all occurences of its first character
// have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

console.log(`FIXSTART`);
const fixStart = function(string) {
  //store letters in string except position 0 letter
  const restLetter = string.substr(1);
  //create an array with the remaining letters as elements
  let restLetterArray = restLetter.split("");
  //replace all letters that are same as first letter with *
  for (i = 0; i < restLetterArray.length; i++) {
    if (string.toLowerCase().slice(0, 1) === restLetterArray[i].toLowerCase()) {
      restLetterArray[i] = "*";
    };
  };
  //combine 1st letter of input and elements in array and store
    return `${string.slice(0,1)}${restLetterArray.join("")}`;
}

console.log(fixStart("babble"));
console.log(fixStart("Postman Pat"));
console.log(fixStart("Phil the policeman"));

// Verbing
// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

console.log(`VERBING`);
const verbing = function (string) {
  //string.slice(-3) takes last 3 letters of string
  if (string.length >= 3 && string.slice(-3) !== "ing") {
    return `${string}ing`;
  } else if (string.length >= 3 && string.slice(-3) === "ing") {
    return `${string}ly`;
  } else if (string.length <= 3) {
    return `${string}`;
  };
};

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));
console.log(verbing("verbing"));

// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

console.log(`NOTBAD`);
const notBad = function (string) {
  const posNot = string.toLowerCase().indexOf("not");
  const posBad = string.toLowerCase().lastIndexOf("bad");
  if (posNot !== -1 && posNot < posBad) {
    return `${string.slice(0, posNot)}good!`;
  } else if (posNot === -1 || posNot > posBad) {
    return `${string}`;
  };
};

console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This dinner is bad!"));
console.log(notBad("Not that bad"));
console.log(notBad("Bad is not!"));
console.log(notBad("Bad is not that bad!"));
console.log(notBad("This dinner is bad and not bad!"));
