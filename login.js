document.getElementById("login-btn").addEventListener("click", function () {
    const numberInput = document.getElementById("input-number");
    const numberValue = numberInput.value;

    const pinInput = document.getElementById("input-pin");
    const pinValue = pinInput.value;

    if (numberValue == "01234567890" && pinValue == "1234") {
        window.location.assign("./home.html")
    }
    else {
        alert("login Failed! incorrect number or pin")
    }
    return
});