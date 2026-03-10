document.getElementById("cashout-btn").addEventListener("click", function () {
  //1- get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("invalid number");
    return;
  }
  //2- get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();
  //4 calculate Balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("invalid Amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("Cashout Successfull");
    setBalance(newBalance);
  } else {
    alert("invalid Pin");
    return;
  }
});