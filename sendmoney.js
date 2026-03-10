document.getElementById("send-money-btn").addEventListener("click", function () {
  //1- get the user number & validate
  const userNumber = getValueFromInput("user-number");
  if (userNumber.length != 11) {
    alert("invalid number");
    return;
  }
  //2- get the amount
  const sendMoneyAmount = getValueFromInput("send-money-amount");

  const currentBalance = getBalance();
  //4 calculate Balance
  const newBalance = currentBalance - Number(sendMoneyAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("invalid Amount");
    return;
  }
  const pin = getValueFromInput("send-money-pin");
  if (pin === "1234") {
    alert("Send Money Successfull");
    setBalance(newBalance);
    addTransaction(`Send Money : $${sendMoneyAmount}`);
  } else {
    alert("invalid Pin");
    return;
  }
});