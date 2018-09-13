// Credit Card Validation
console.log("Credit Card Validation: Bonus");
console.log("--------");
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
const checkNumberLength = function (card) {
  const len = splitCardNum(card.number).length;
  if (len !== 16) {
    card.error = "Number length not 16";
    card.valid = false;
  }
  return card;
}

const allDigitsAreNumbers = function (card) {
  const arr = splitCardNum(card.number);
  for (let i=0; i<arr.length; i+=1) {
    // check returned value from isNaN() function
    if(isNaN(parseInt(arr[i]))){
      console.log(`Invalid character "${arr[i]}" detected at index ${i}`);
      return false;
    }
  }
  return true;
}

const digitVarietyChecker = function (card) {
  const arr = splitCardNum(card.number);
  let digit = arr[0];
  for (let i=1; i<arr.length; i+=1) {
    if (arr[i] !== digit) {
      return true;
    }
    digit = arr[i];
  }
  console.log("All digits are the same");
  return false;
}

const finalDigitEven = function (card) {
  const arr = splitCardNum(card.number);
  const digit = arr[arr.length - 1];
  if (digit % 2 === 0) {
    return true;
  }
  console.log("Final digit is not even.");
  return false;
}

const sumOfDigitsChecker = function (card) {
  const arr = splitCardNum(card.number);
  let total = 0;
  for (let i=0; i<arr.length; i+=1) {
    total += parseInt(arr[i]);
  }
  if (total > 16) {
    return true;
  }
  console.log(`Sum of digits (${total}) is too low`);
  return false;
}

const splitCardNum = function (str) {
  const cardStr = removeDashes(str);
  return numArr = cardStr.split("");
}

const validateCreditCard = function (cardStr) {
  let card = {
    number: cardStr,
    valid: true
  };

  //debugger;
  card = checkNumberLength(card);
  card = allDigitsAreNumbers(card);
  card = digitVarietyChecker(card);
  card = finalDigitEven(card);
  card = sumOfDigitsChecker(card);

  return card;

}

const removeDashes = function (str) {
  let newStr = str;
  console.log(str);
  while(newStr.includes("-")){
    newStr = newStr.replace("-", "");
  }
  return newStr;
}

// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
//
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
//
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

const test = function (passOrFail, str) {
  console.log(`${str} should ${passOrFail}`);
  console.log("Testing...");
  card = validateCreditCard(str);
  console.log(`Card number valid = ${card.valid}`);
  if (!card.valid) {
    console.log(`error = ${card.error}`);
  }
}

test('pass', '9999-9999-8888-0000');
test('pass', '6666-6666-6666-1666');
test('fail', 'a923-3211-9c01-1112');
test('fail', '4444-4444-4444-4444');
test('fail', '1111-1111-1111-1110');
test('fail', '6666-6666-6666-6661');

console.log("--------");



// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
