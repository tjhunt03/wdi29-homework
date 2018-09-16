
// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
console.log('•• Geometry Function Lab ••');

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(rect){
  if(rect.length === rect.width){
    return 'The rectangle is a square.';
  }
  return 'The rectangle is just a rectangle.';
};

const areaSquare = function(rect){
  return rect.length * rect.width;
}

const perimeter = function(rect){
  return (rect.length + rect.width) * 2;
}


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(tri){
  if(tri.sideA === tri.sideB && tri.sideB === tri.sideC){
    return 'That\'s an equilateral triangle!';
    }
  return 'Sorry, that\'s not an equilateral triangle.';
};

const isIsosceles = function(tri){
  if(tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideC === tri.sideA){
    return 'That\'s an isosceles triangle!';
  }
  return 'Sorry, that\'s not an isosceles triangle.';
};

const areaTriangle = function(tri){
  const perimeter = (tri.sideA + tri.sideB + tri.sideC) / 2;
  return Math.sqrt(perimeter * (perimeter - tri.sideA) * (perimeter - tri.sideB) * (perimeter - tri.sideC));
};

const isObtuse = function(tri){

  const sides = [];

  for(let key in tri){
    sides.push(tri[key]);
  }

  sides.sort(function(a, b){return a - b});

  if( Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2)){
    return 'That\'s an obtuse triangle!';
  }
  return 'Sorry, that\'s not an obtuse triangle.';
};

console.log('\n');


// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
console.log('•• The Cash Register ••');

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart){
  let totalPrice = 0;
  for(let key in cart){
    const currentPrice = parseFloat(cart[ key ]);
    totalPrice += currentPrice;
  }
  return totalPrice;
};

console.log(`The total price is $${cashRegister(cartForParty)}.`);

console.log('\n');

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

console.log('•• The Bank ••');

const bank = {
  accounts: [
  {ownerName: 'Hannah', currentBalance: 122.88},
  {ownerName: 'Jesi', currentBalance: 36.40},
  {ownerName: 'Claire', currentBalance: 5.28},
  {ownerName: 'Peter', currentBalance: 290.10}
  ],

  totalSumOfAllAccounts: function(){
    let totalSum = 0;
    for(let i = 0; i < this.accounts.length; i++){
      const currentBalance = this.accounts[i].currentBalance;
      totalSum += currentBalance;
    }
    return totalSum;
  },

  addAccount: function(newAccount){
    this.accounts.push(newAccount);
  },

  getAccountByName: function(name){
    for(let i = 0; i < this.accounts.length; i++){
      const currentAccount = this.accounts[i];
      if(name === currentAccount.ownerName){
        return currentAccount
      } // if
    } // for
  }, // function

  depositAmount: function(name, amount){
    const account = this.getAccountByName(name);
    account.currentBalance += amount;
    return account.currentBalance;
  },

  withdrawAmount: function(name, amount){

    const account = this.getAccountByName(name);
    const newBalance = account.currentBalance - amount;

    if(newBalance < 0){
      console.log('Sorry, your balance is too low. The transaction was not completed.');
    } else {
      account.currentBalance = newBalance;
    }

    return account.currentBalance;
  },

  transferAmount: function(fromAccountName, toAccountName, amount){
    this.withdrawAmount(fromAccountName, amount);
    this.depositAmount(toAccountName, amount);
  },

  getAccountBalance: function(name){
    const account = this.getAccountByName(name);
    return account.currentBalance;
  }
}; // object

// ••• TESTS •••
// console.log(`Total sum of all accounts: $${bank.totalSumOfAllAccounts()}`);
//
// bank.addAccount({ownerName: 'Patrick', currentBalance: 123.50});
// console.log(bank.accounts);
//
// console.log(`Hannah's account balance is: $${bank.getAccountBalance('Hannah')}`);
// console.log(`Hannah's new account balance is: $${bank.depositAmount('Hannah', 888888.88)}`);
// console.log(`Hannah's new account balance is: $${bank.withdrawAmount('Hannah', 250)}`);
//
// console.log(`Patrick's account balance is: $${bank.getAccountBalance('Patrick')}`);
// console.log(`Patrick's new account balance is: $${bank.depositAmount('Patrick', 345.67)}`);
// bank.withdrawAmount('Patrick', 1000);
//
// console.log(`Jesi's account balance is: $${bank.getAccountBalance('Jesi')}`);
// bank.transferAmount('Jesi', 'Claire', 20);
// console.log(`Jesi's new account balance is $${bank.getAccountBalance('Jesi')}`)
// console.log(`Claire's new account balance is: $${bank.getAccountBalance('Claire')}`);
//
// console.log(`Total sum of all accounts: $${bank.totalSumOfAllAccounts()}`);


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
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
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
