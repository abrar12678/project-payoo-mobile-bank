document.getElementById("pay-btn").addEventListener("click", function () {
  //1 - bank account get
  const billerAccount = getValueFromInput("bill-type");
  if (billerAccount == "Select a Bill Type") {
    alert("please select a bill type");
    return;
  }
  //2 - get bank account number
  const billAccount = getValueFromInput("biller-account-number");
  if (billAccount.length != 11) {
    alert("invalid biller account no");
    return;
  }
  //3- get ammount
  const amount = getValueFromInput("pay-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(amount);

  const pin = getValueFromInput("pay-bill-pin");
  if (pin == "1234") {
    alert(`Pay bill Success from
        at ${new Date()}`);
    setBalance(newBalance);
    addTransaction(`Bill Paid : $${amount}`);
  } else {
    alert("Invalid Pin");

    return;
  }
});