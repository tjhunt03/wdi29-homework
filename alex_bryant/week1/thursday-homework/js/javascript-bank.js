// JavaScript Bank
console.log("JavaScript Bank");
console.log("--------");
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

const bank = {
  accounts: [],
  getTotal: function () {
    let totalMoney = 0;
    for (var k in this.accounts) {
      totalMoney += this.accounts[k].balance;
    }
    return totalMoney.toFixed(2);
  },
  addAccount: function (act) {
    this.accounts.push(act);
  }
}

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

//Example account
// const account = {
//   owner: "",
//   balance: 10
// }
const createAccount = function (name, balance) {
  const account = {
    owner: name,
    balance: balance,
  }
  console.log(`Account created: owner = ${account.owner}, balance = $${account.balance.toFixed(2)}`);
  return account;
}

const amendBalance = function (name, amt) {
  //Can also use the name as a key to find the user
  //E.g. bank.accounts["Bob"] or bank.accounts[owner]
  for (let i=0; i<bank.accounts.length; i+=1) {
    if (name === bank.accounts[i].owner) {
      //edit account and return amended balance amount
      const newBalance = bank.accounts[i].balance + amt;
      //To block withdrawals that go into overdraught
      if (newBalance < 0) {
        return newBalance;
      }
      bank.accounts[i].balance = newBalance;
      return newBalance;
    }
  }
  return 0;
}

const logBalanceUpdate = function (name, amt) {
  if (amt > 0) {
    console.log(`${name}'s new balance is $${amt}`);
  } else {
    console.log("Not enough funds! Withdrawal declined.");
  }
}

const logTotalBankAmt = function () {
  console.log(`Total money in the bank: $${bank.getTotal()}`);
}

// creating 5 dummy accounts
const names = ["Bob","Fred","Charlotte","Mary","John"];
const balances = [12323.04,33.45,3456.78,44.30,100229.02];
for (let i=0; i<5; i+=1) {
  bank.addAccount(createAccount(names[i],balances[i]));
}

logTotalBankAmt();

//dummy withdrawal
console.log("Bob withdraws $2000");
let newBalance = amendBalance("Bob",-2000.00).toFixed(2);
logBalanceUpdate("Bob",newBalance);
logTotalBankAmt();

//dummy deposit
console.log("Mary deposits $500");
newBalance = amendBalance("Mary",500.00).toFixed(2);
logBalanceUpdate("Mary",newBalance);
logTotalBankAmt();

console.log("--------");

// Bonus
console.log("Bonus:");
// Ensure that the accounts cannot have negative values.

//dummy withdrawal
console.log("Fred withdraws $100");
newBalance = amendBalance("Fred",-100.00).toFixed(2);
logBalanceUpdate("Fred",newBalance);
logTotalBankAmt();

// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
const transfer = function (from, to, amt) {
  const newBalanceFrom = amendBalance(from,-amt).toFixed(2);
  const newBalanceTo = amendBalance(to,amt).toFixed(2);
  logBalanceUpdate(from,newBalanceFrom);
  logBalanceUpdate(to,newBalanceTo);
}

console.log("Bob lends Fred $100");
transfer("Bob","Fred",100.00);
logTotalBankAmt();

// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
