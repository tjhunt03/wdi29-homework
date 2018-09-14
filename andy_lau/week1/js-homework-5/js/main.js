//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


const cashRegister = function (cart) {
  let amount = 0;
  for (let i in cart) {
    amount = amount + Number(cart[i], 10);
  }
  console.log(amount);
};

//  js-homework-bank.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
// add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.

const bank = {
  accounts: [
    {accountName: "Bob", balance: 20.50},
    {accountName: "Gary", balance: 12.45},
    {accountName: "Harry", balance: 100},
    {accountName: "Mike", balance: 9010},
  ],

  getTotal: function(){
    let sum = 0;
    for (let i = 0; i <this.accounts.length; i++) {
      sum = sum + this.accounts[i].balance;
    }
    console.log(sum);
  },

  getBalance: function(name) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accountName === name) {
        console.log(`You have $${this.accounts[i].balance} in your bank account.`);
      }
    }
  },

  deposit: function(name, depositAmount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accountName === name && depositAmount > 0) {
        this.accounts[i].balance += depositAmount;
        return console.log(`You have deposited $${depositAmount}. Your balance is now $${this.accounts[i].balance}.`)
      } else if (depositAmount < 0) {
        return console.log(`Can not deposit a negative amount of $${depositAmount}`)
      }
    }
  },

  withdraw: function(name, withdrawAmount) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accountName === name && withdrawAmount < this.accounts[i].balance && withdrawAmount > 0) {
        this.accounts[i].balance = this.accounts[i].balance - withdrawAmount;
        return console.log(`You have withdrawn $${withdrawAmount}. Your balance is now $${this.accounts[i].balance}.`)
      } else if (withdrawAmount < 0 || withdrawAmount > this.accounts[i].balance) {
        return console.log(`You can not withdraw $${withdrawAmount}. You have $${this.accounts[i].balance} in your bank account.`)
      }
    }
  },

  deleteAccount: function(name) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accountName === name) {
        delete this.accounts[i];
        return console.log(`You have deleted your account. Thank you ${name}`);
      } else {
        return console.log("You do not have an account.");
      }
    }
  },

  addAccount: function(name, depositAmount) {
    let newArrayAccount = {accountName: name, balance: depositAmount};
    if (depositAmount > 0) {
      this.accounts.push(newArrayAccount);
      console.log(`Thank you for adding your account ${name}. Your balance is $${depositAmount}.`);
    } else if (depositAmount < 0) {
      console.log(`${name} please deposit a positive amount to your new account.`);
    }
  },

  transfer: function(depositName, withdrawName, amount) {
    for (let i = 0; i < this.accounts.length; i++) {
      for (let j = 0; j < this.accounts.length; j++){
        if (this.accounts[i].accountName === depositName && this.accounts[j].accountName === withdrawName && amount <= this.accounts[j].balance && amount > 0 && this.accounts[i].accountName !== this.accounts[j].accountName) {
          this.accounts[i].balance += amount
          this.accounts[j].balance = this.accounts[j].balance - amount;
          return console.log(`${depositName} has withdrawn ${amount} from ${withdrawName}'s account.\n${depositName}: $${this.accounts[i].balance}\n${withdrawName}: $${this.accounts[j].balance}`);
        } else if ((amount < 0 || amount > this.accounts[j].balance) && this.accounts[j].accountName === withdrawName) {
           return console.log(`Hello ${depositName}. You cannot transfer $${amount} from ${withdrawName}'s account.\n${depositName}: $${this.accounts[i].balance}\n${withdrawName}: $${this.accounts[j].balance}`);
        } else if (this.accounts[i].accountName === this.accounts[j].accountName) {
          return console.log("Can't transfer to same account.");
        }
      }
    }
  }
};

//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
//
// Credit Card Validation
// You're starting your own credit card business.
// You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const validateCreditCard = function (cardNumber) {
//   let valid = true;
//
//   //Check card number has hypen between every 4 numbers
//   if (cardNumber.charAt(4) !== "-" || cardNumber.charAt(9) !== "-" || cardNumber.charAt(14) !== "-" ) {
//     return valid = false;
//   }
//
//   //Check card number length
//   if (cardNumber.length !== 19){
//     return valid = false;
//   }
//   let digitCheck = true
//   //Check every if digits 1-4
//   for (i = 0; i < 4; i++) {
//     if (cardNumber.charAt(i) !== "0") {
//       digitCheck = isNaN(Number(cardNumber.charAt(i)));
//     }
//     if (digitCheck === false && cardNumber.charAt(i) !== "0") {
//       return valid = false;
//     }
//   }
//
//
//   //Check final number is even
//   if (cardNumber.charAt(18) % 2 !== 0 ) {
//     return valid = false;
//   }
//
//   let cardArray = [];
//   for (i = 0; i < cardNumber.length; i++) {
//     if (i === 4 || i === 9 || i === 14 ) { continue; }
//     cardArray.push(cardNumber.charAt(i));
//   }
//   console.log(cardArray);
// };
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.


// **********
const validateCreditCard = function (cardNumber) {
  let cardNoDash = "";
  cardNoDash = cardNumber.replace(/-/g, "");

  const creditCard = {
    valiator: true,
    number: cardNumber,

    //check card length = 16
    cardLength: function(card) {
      if (cardNoDash.length !== 16) {
        this.error += "wrong_length ";
        validator = false;
      }
    },

    //check all input are digits
    allDigitCheck: function(card) {
      if (!parseInt(Number(card)) {
        this.error += "wrong_input ";
        validator = false;
      }
    },

    //check last number is even
    // lastEvenNumber: function(card) {
    //   if (Number(card) % 2 !== 0) {
    //     this.error += "last_number_not_even ";
    //     validator = false;
    //   }
    // },

    //check digit sum is 16
    digitSum: function(card) {
      let value = Number(card);
      let sum = 0;

      while (value) { //while value is true (it is going to be true as long as value is a number)
        sum += value % 10;
        value = Math.floor(value / 10);
      }

      if (sum < 16) {
        this.error += "digits_add_to_less_than_16 "
        validator = false;
      }
    },

    //check at least 2 digits
    twoDigits: function(card) {
      let string = card;
      let unique = "";
      for (let i = 0; i < string.length; i++) {
        if(unique.indexOf(string.charAt(i))==-1); {
          unique += string[i];
        }
      }
      if (unique.length === 1) {
        this.error += "needs_at_least_2_digits "
        validator = false;
      }
    }

  }; //object creditCard

  creditCard.cardLength(cardNoDash);
  creditCard.allDigitCheck(cardNoDash);
  // creditCard.lastEvenNumber(cardNoDash);
  creditCard.digitSum(cardNoDash);
  creditCard.twoDigits(cardNoDash);

  const finalResult = {
    valid: false,
    number: cardNumber,
  };

  if (creditCard.error === "" && valiator === true) {
    finalResult.valid === true;

  } else {
    finalResult.valid === false;
    finalResult.error = creditCard.error;
  }

  console.log(finalResult);
};//function
