$(document).ready(function() {

// set the zero balance to red colour othwerwise remmove the class.
 let zeroBalanceRed = function() {
    if (checkingBalance === 0) {
      $("#balance1").addClass("zero");
    } else {
      $("#balance1").removeClass("zero");
    }

    if (savingsBalance === 0) {
      $("#balance2").addClass("zero");
    } else {
      $("#balance2").removeClass("zero");
    }
  }

  // set all initial balances to zero and call the zeroBalanceRed function so that backgrounds start red
    let checkingBalance = 0;
    let checkingAmount  = 0;
    let savingsBalance  = 0;
    let savingsAmount   = 0;
    zeroBalanceRed();
    
// take text input and turn it into an integer, remove $ sign
  let getBalancesAndAmounts = function() {
    savingsBalance  = parseInt($("#balance2").text().replace('$', ''));
    savingsAmount   = parseInt($("#savingsAmount").val());
  }

// update display to show new balance for both accounts and display $ sign
  let updateDisplay = function() {
    $("#balance2").text("$" + savingsBalance);
    zeroBalanceRed();
  }

// update savings balance display on click if number is entered, doesn't allow NaN to be submitted
  $("#savingsDeposit").on('click', function() {
    getBalancesAndAmounts();
    if (!isNaN(savingsAmount)) {
      savingsBalance += savingsAmount;
    }
    updateDisplay();
  });

// overdraft function for savings account, will pull from checking if not enough in account
  $("#savingsWithdraw").on('click', function() {
    getBalancesAndAmounts();

    if (savingsAmount <= savingsBalance) { // if withdraw amount <= balance amount
      savingsBalance -= savingsAmount;
    } else { // if withdraw amount > savings balance amount
      if (savingsAmount <= (savingsBalance + checkingBalance)) { // if withdraw amount < balance + checking
        checkingBalance -= (savingsAmount - savingsBalance);
        savingsBalance = 0;
      }
    }
    updateDisplay();
  });

});
