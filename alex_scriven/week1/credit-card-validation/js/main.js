/*
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666

The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number

*/

const validateCreditCard = function(numberIn){

  let message = {valid:true, number:numberIn}

  let cardNumber = numberIn+"";

  let uniqueNumbers = {}

  let digitSum = 0;

  cardNumber = cardNumber.replace(/-/g,"").split("")

  if (cardNumber.length !== 16){
    message.valid = false;
    message.error = 'wrong amount of digits';
    return message
  }

  for (let i=0; i<cardNumber.length; i++){
    if (!(Number(cardNumber[i]) > -1)){
      message.valid = false;
      message.error = 'not all are digits';
      return message
    }
    if ((i=== (cardNumber.length -1)) && cardNumber[i]%2!==0){
      message.valid = false;
      message.error = 'last is not even';
      return message
    }
    uniqueNumbers[cardNumber[i]] =true;
    digitSum += Number(cardNumber[i]);
    }
  if (Object.keys(uniqueNumbers).length < 2){
    message.valid = false;
    message.error = 'not enough unique numbers'
    return message
  }
  if (digitSum < 16){
    message.valid = false;
    message.error = 'total sum not above 16'
  }
  return message
}

console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("6666-6666-6666-6661"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("9999-9999-8888-0000"));
