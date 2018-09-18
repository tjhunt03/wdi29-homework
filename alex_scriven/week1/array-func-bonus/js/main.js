//Source: https://gist.github.com/textchimp/3a8f1e9445f79944f46e9d329b117597

const maxOfTwoNumbers = function(numberOne, numberTwo) {
  let numbersArray = [numberOne, numberTwo];
  return Math.max(...numbersArray);
}

const maxOfThree = function(numberOne, numberTwo, numberThree) {
  let numbersArray = [numberOne, numberTwo, numberThree];
  return Math.max(...numbersArray);
}

const sumArray = function(numberArray){
  let total = 0;
  for (let i=0; i<numberArray.length;i++){
    total += numberArray[i];
  }
  return total;
}

const multiplyArray = function(numberArray){
  let total = numberArray[0];
  for (let i=1; i<numberArray.length;i++){
    total *= numberArray[i];
  }
  return total;
}

const reverseString = function(string){
  return string.split("").reverse().join("");
}

const findLongestWord = function(wordArray){
  let longestWord = wordArray[0];
  for (let i=1;i<wordArray.length;i++) {
    if (wordArray[i].length > longestWord.length){
      longestWord = wordArray[i];
    }
  } return longestWord;
}

const filterLongWords = function(wordArray, lengthHurdle) {
  let longList = []
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > lengthHurdle) {
      longList.push(wordArray[i]);
    }
  } return longList;
}
