console.log("View loaded");

const viewOfAccounts = {
  //Return an object containing balance and amount
  getBalanceAndAmount: function (account) {
    const $amount = $(`#${account}Amount`);
    const $balance = viewOfAccounts.getRightAccount(account);
    //console.log({balance: $balance.html(), amount: $amount.val()});
    return {balance: $balance.html(), amount: $amount.val()};
  },
  //Return the correct JQuery object based on account type
  getRightAccount: function (account) {
    let $balance = $(`#balance1`);
    if(account === "savings"){
      $balance = $(`#balance2`);
    }
    return $balance;
  },
  //Update the balance displayed on screen
  updateScreenBalance: function (account, amount) {
    const $amount = $(`#${account}Amount`);
    $amount.val("");
    const $balance = viewOfAccounts.getRightAccount(account);
    $balance.html(`$${amount}`);
    if (amount > 0) {
      this.changeCompColor($balance, true);
    } else {
      this.changeCompColor($balance, false);
    }
  },
  setInputFieldColor: function (account, color) {
    const $amount = $(`#${account}Amount`);
    $amount.css("backgroundColor", color);
  },
  changeCompColor: function (component, valid) {
    if (valid) {
      component.css("backgroundColor", "#FFFFFF");
    } else {
      component.css("backgroundColor", "#FF5522");
    }
  },
}

//Checks that the DOM is fully loaded before allowing these callbacks to be applied
$().ready(function() {
  // Button listeners
  $('input[type="button"]').click(function() {
    const buttonClicked = this.id;
    let deposit = true;
    let account = "savings";
    if(buttonClicked.toLowerCase().includes("withdraw")){
      deposit = false;
    }
    if(buttonClicked.toLowerCase().includes("checking")){
      account = "checking";
    }
    const $relatedTextField = $(`#${account}Amount`);
    //console.log($relatedTextField);
    const valid = controller.checkValidity($relatedTextField.val());
    if (valid) {
      const balanceAndAmount = viewOfAccounts.getBalanceAndAmount(account);
      //console.log({deposit: deposit, account: account, balance: balanceAndAmount.balance, amount: balanceAndAmount.amount});
      controller.processTransaction({deposit: deposit, account: account, balance: balanceAndAmount.balance, amount: balanceAndAmount.amount});
    }
    viewOfAccounts.changeCompColor($relatedTextField, valid);
  });

  //Set initial color of each balance
  viewOfAccounts.changeCompColor(($('#balance1')), false);
  viewOfAccounts.changeCompColor(($('#balance2')), false);
});
