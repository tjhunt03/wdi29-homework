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
// rect = width * length
// square = a * 4
// const favouriteMovie = {
//   title: 'Inherent Vice',
//   duration : 125,
//   stars: ['Bob Borwn','Paul Ab']
// }
const rectangle = {
length : 4,
width: 4
}

const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    console.log("Object is a square.");
  }
}

isSquare(rectangle);

const area = function (rectangle) {
    areaRect = rectangle.length * rectangle.width;
    console.log(`Area is ${areaRect}.`);
}

area(rectangle);

const perimeter = function (rectangle) {

    perimeterRect = 2 * (rectangle.length * rectangle.width);
    console.log(`Perimeter of rectangle is ${perimeterRect}.`);
}

perimeter(rectangle);

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

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideC) {
    console.log("Triangle is a equilateral");
  }
}

isEquilateral(triangle);

//
const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideC) {
    console.log("Triangle is a Isosceles");
  }
}
isIsosceles(triangle);

const areaTri = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideC) {
    console.log("Triangle area is.");
  }
}
areaTri(triangle);

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
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

const cashRegister = function ( cartForParty ){

let totalAmount = 0;

for (let key in cartForParty) {
  totalAmount += parseFloat(cartForParty[key]);
  console.log(`${key}   ->  ${cartForParty[key]}`);
  console.log(`Total Amount is ${totalAmount}. `)
}
}

cashRegister(cartForParty);

// Javascript bank
let bank = {
//   accounts:[{accountname: "John Doe",
//   balance: 100
  add_account: function (name,balance) {
  accountName : [],
  balance :},
  getTotal:for (let key in bank) {
    totalAmount += parseFloat(bank[key]);
    console.log(`${key}   ->  ${bank[key]}`);
    console.log(`Total Amount is ${totalAmount}. `)
  },
  deposit = function (depositAmount) {
      newBalance = this.balance - depositAmount;
      console.log(`Your balance is now ${newBalance}`);
  }
  },
  withdraw = function (withdrawAmount){
    newBalance = this.balance - withdrawAmount;
    console.log(`Your balance is now: ${newBalance}`;
    }
  },
];

// function Account(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }
// Account.deposit = function (depositAmount) {
//     newBalance = this.Account.balance - depositAmount;
//     console.log("Your balance is now " + newBalance);
//     if (newBalance <= 0) {
//       console.log("You have insufficient funds!!!");
//     }
//   };
//   Account.prototype.deposit = function(amount) {
//     if (this._isPositive(amount)) {
//       this.balance += amount;
//       console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
//       return true;
//     }
//     return false;
//   }
//
//   this.Account.withdraw = function (withdrawAmount){
//     newBalance = this.Account.balance - withdrawAmount;
//     console.log("Your balance is now " + newBalance);
//     if (newBalance <= 0) {
//       console.log("You have insufficient funds!!!");
//     }
//
//   };
//
//   console.log(`Name: ${this.Account.name}; ${this.Account.Balance}: balance`);
//
// var PaulAccount = new Account ("Paul Smith", 400);
// var KateAccount = new Account ("Kate Miller", 10000);
// var RobertAccount = new Account ("Robert Li", 100000);
// var MillerAccount = new Account ("Miller Roo", 500000);
