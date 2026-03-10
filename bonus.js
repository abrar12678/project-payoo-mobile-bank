document.getElementById("get-bonus-btn").addEventListener("click", function () {

    const bonusCouponInput = getValueFromInput("coupon-no");

    if (bonusCouponInput.length != 6) {
        alert("please enter a valid coupon");
        return;
    }

    const currentBalance = getBalance();
    const bonusAmount = 500;

    const newBalance = currentBalance + bonusAmount;

    setBalance(newBalance);

    alert("Bonus Added Successfully");

    addTransaction(`Bonus Coupon Added : $${bonusAmount}`);

});