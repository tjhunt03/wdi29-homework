/*

In this homework, you'll create a basic bank in Javascript.
The bank has many accounts and the following capabilities that you need to write.

Bank:
There is only one bank. This bank has an array of accounts.
The bank needs a method that will return the total sum of money in the accounts.
It also needs an addAccount method that will enroll a new account
at the bank and add it to the array of accounts.
There is no need to create additional functions of the bank
to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all
share a set of common functionality.

Accounts

Accounts have a current balance and owner's name.
You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface.
Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows
that the methods do indeed work as expected: add some accounts, show the total balance,
make some deposits and withdrawals, show the new total balance.

Tips
Don't overthink this. Shorter code is probably the answer.

*/


const bank = {

  accounts : [
    {ownerName: "John Smith", currentBalance: 45},
    {ownerName: "Robert Appleberry", currentBalance: 130},
    {ownerName: "Frank", currentBalance: 2500}
  ],

  findAccount: function(name) {
    for (i=0; i<this.accounts.length; i++){
      if (this.accounts[i].ownerName === name) {
        return i
      }
    }
    return -1
  }, //findAccount

  checkDecimalPlaces: function(amount){
    let amountSplitOnDot = (amount+"").split(".");
    if ((amountSplitOnDot.length>1 && amountSplitOnDot[1].length <3)||amountSplitOnDot.length===1){
      return true
    }
    return false
  },

  addAccount: function(input){
    if (this.findAccount(input.ownerName) !== -1) {
      console.log(`Sorry, ${input.ownerName} already has an account. Feel free to withdraw or deposit money.`);
      return
    }
    this.accounts.push(input)
    console.log(`Succesfully added ${input.ownerName}'s account to the bank records. Welcome to the bank!'`)
  }, //addacount method

  checkBalance: function(name){
    return this.accounts[this.findAccount(name)].currentBalance
  },

  checkValidAmount : function(amount){
    let errorMessage = [false, `Sorry, a wrong amount was entered. Please enter a positive number, with a max of 2.d.p`]
    if ((amount < 0) || !(typeof amount === "number") || !(this.checkDecimalPlaces(amount))){
      return errorMessage
    }
    errorMessage[0] = true
    return errorMessage
  },

  depositWithdrawMoney: function(action, name, amount=-1){
    if (!(this.checkValidAmount(amount)[0])){
      console.log(this.checkValidAmount(amount)[1])
      return
    } //some checks on amount
    if (this.findAccount(name) ===-1) {
      console.log(`Sorry but ${name} does not have an account here. Feel free to open an account using addAccount function.`)
      return
    }
    if (action !== "deposit" && action !== "withdrawal") {
      console.log(`Sorry, we only accept actions of 'deposit' or 'withdrawal'. Please try again`)
      return
    }
    let actionVerb = "increased";
    let amountModifier = 1;
    if (action === "withdrawal") {
      let balanceCheck = this.checkBalance(name);
      actionVerb = "decreased";
      amountModifier = -1;
      if (amount > balanceCheck){
        console.log(`Sorry but ${amount} is more than ${name}'s balance of ${balanceCheck}'`)
        return
      }
    }
    this.accounts[this.findAccount(name)].currentBalance += (amount*amountModifier);
    console.log(`Succesfully ${actionVerb} the balance of ${name}'s account by ${amount}`);
  }, //depositMoney function

  totalSum: function(){
    let totalAmount = 0;
    for (let i=0; i<this.accounts.length; i++){
      totalAmount += this.accounts[i].currentBalance;
    }
    console.log(`The amount in the bank is $${totalAmount}`);
  }, //totalSum method

  transfer: function(nameFrom, nameTo, amount) {
    if (!(this.checkValidAmount(amount)[0])){
      console.log(checkValidAmount(amount)[1])
      return
    } //some checks on amount
    if (this.findAccount(nameFrom) ===-1 || this.findAccount(nameTo) ===-1) {
      console.log('Sorry, one of these members is not with the bank. Feel free to open an account using addAccount function')
      return
    } //check users are in the bank

    if(this.checkBalance(nameFrom) >= amount) {
      this.depositWithdrawMoney('withdrawal', nameFrom, amount);
      this.depositWithdrawMoney('deposit', nameTo, amount);
      return
    }
    console.log(`Sorry but ${amount} is more than ${nameFrom}'s balance of ${this.checkBalance(nameFrom)}`)
  } //transfer
}

newAccount = {
  ownerName: "Mr Bean",
  currentBalance: 1000,
}

bank.addAccount(newAccount);
bank.totalSum()
