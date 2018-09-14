console.log('I\'m in!');
// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
const rectangle = {
  length: 4,
  width: 4
};


// isSquare(rect) - Returns whether the rectangle is a square or not
const isSquare = function(rectangle){
  if(rectangle.length===rectangle.width){
    console.log(`Square`);
  }else{
    console.log(`Not a square.`);
  }
};
isSquare(rectangle);

// area(rect) - Returns the area of the rectangle
const area = function(rectangle){
  console.log(`Area: ${rectangle.length*rectangle.width}.`);
};
area(rectangle);

// perimeter(rect) - Returns the perimeter of the rectangle
const perimeter = function(rectangle){
  console.log(`Perimeter: ${(rectangle.length*2)+(rectangle.width*2)}`);
};
perimeter(rectangle);
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.



//
// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
const isEquilateral = function(tri){
  if(tri.sideA === tri.sideB && tri.sideB===tri.sideC){
    console.log('Is equilateral');
  }else{
    console.log('Not equilateral');
  }
};
isEquilateral(triangle);

// isIsosceles(tri) - Returns whether the triangle is isosceles or not
const isIsosceles = function(tri){
  if(tri.sideA === tri.sideB || tri.sideB === tri.sideC || tri.sideA === tri.sideC){
    console.log(`Is isosceles`);
  }else{
    console.log('Not isosceles');
  }
};
isIsosceles(triangle);

// area(tri) - Returns the area of the Triangle
const areaTri = function(tri){
  let sideA = tri.sideA;
  let sideB = tri.sideB;
  let sideC = tri.sideC;
  let temp = (sideA+sideB+sideC)/2;
  console.log(Math.sqrt(temp*(temp-sideA)*(temp-sideB)*(temp-sideC))) ;
};
areaTri(triangle);

// isObtuse(tri) - Returns whether the triangle is obtuse or not
const isObtuse = function(tri){
  let a2 = Math.pow(tri.sideA,2);
  let b2 = Math.pow(tri.sideB,2);
  let c2 = Math.pow(tri.sideC,2);
  if(a2>b2+c2 || b2>a2+c2 || c2>a2+b2){
    console.log('Is obtuse');
  }else{
    console.log('Not obtuse');
  }
};
isObtuse(triangle);


// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.
//
//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
//
// // Output
// cashRegister(cartForParty)); // 60.55
const cashRegister = function(input){
  let prices=[];
  let total=0;
  for (let val in input){
    prices.push(input[val]);  //push each 'number' into the empty array
  };
  for(let i=0; i<prices.length; i++){
    total = total + parseFloat(prices[i])//change each array element into number and add to total
  };
  console.log(total);
}
cashRegister(cartForParty);

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
const bank = {
  accounts: [
    {name:'Bob', currentBalance: 400},
    {name:'Ted', currentBalance: 600},
    {name:'Sid', currentBalance: 245},
    {name:'Sam', currentBalance:  15}
  ],
  findCustomer: function(nam){
    for (let i = 0; i<this.accounts.length; i++){
      if (this.accounts[i].name===nam){
        return this.accounts[i];
      }
    };
  },
  totalSum: function(){
    let sumTotal = 0;
    for (let i=0; i<this.accounts.length; i++){
      sumTotal = sumTotal + this.accounts[i].currentBalance;
    }
    console.log(sumTotal);
  },
  totalIndividualAmmount: function(nam){
    try{
      let currentCustomer = this.findCustomer(nam);
      console.log(currentCustomer.currentBalance);
    }
    catch(err){
      console.log('No such customer');
    }
  },
  addAccount: function(nam, amount){
    let noOfAccounts = this.accounts.length;
    this.accounts[noOfAccounts] = {};
    this.accounts[noOfAccounts].name = nam;
    this.accounts[noOfAccounts].currentBalance = amount;
    console.log(this.accounts);
  },
  deposits: function(nam, amount){
    try{
      let currentCustomer = this.findCustomer(nam);
      console.log(currentCustomer.currentBalance+=amount);
    }
    catch(err){
      console.log('No such customer');
    }
  },
  withdrawals: function(nam, amount){
    try{
      let currentCustomer = this.findCustomer(nam);
      if (amount>currentCustomer.currentBalance){
        console.log(`You don\'t have enough money to withdraw $${amount}.`);
      }else{
        console.log(currentCustomer.currentBalance-=amount);
      }
    }
    catch(err){
      console.log('No such customer');
    }
  },
  transfer: function(nam1, nam2, amount){
    try{
      let currentCustomer = this.findCustomer(nam1);
      let currentCustomer2= this.findCustomer(nam2);
      if (currentCustomer.currentBalance<amount){
        console.log('Insufficient funds');
      }else{
        currentCustomer.currentBalance -= amount;
        currentCustomer2.currentBalance += amount;
        console.log(currentCustomer);
        console.log(currentCustomer2);
      } //else
    }   //try
    catch(err){
      console.log('Something went wrong!!!');
    } //catch
  }   //transfer
}   //bank

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
//
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
