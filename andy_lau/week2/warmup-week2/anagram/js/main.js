// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const anagram = {
};

 // ["enlists" "google" "inlets" "banana"]

const findAnagram = function(word, array) {
  let sortedInput = word.split("").sort().join("");
  let arrayCompare = [];
  for (i = 0; i < array.length; i++) {
    arrayCompare.push(array[i]);
    // for (j = 0; j < arrayCompare[j].length; j++){
    // arrayCompare[j].split("");
    // console.log(arrayCompare[j].split(""));
    // }
  }

  for (i = 0; i < array.length; i++) {
    let arrayOfLetters = arrayCompare[i].split("");
    // if (arrayCompare
    arrayOfLetters.sort().join("");

    if (arrayOfLetters.sort().join("") === sortedInput) {
      console.log(`${word} is an anagram of ${arrayCompare[i]}.`)
    }

  }

};

findAnagram("listen", ["enlists", "google", "inlets", "banana"]);
