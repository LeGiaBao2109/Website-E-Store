function checkInputs() {
    const phone = document.getElementById("regPhone").value;
    const password = document.getElementById("regPassword").value;

    const phoneErr = document.getElementById("phoneErr");
    const passErr = document.getElementById("passErr");

    // Validate phone
    if (phone.length < 10) {
        phoneErr.innerText = "(*) Phone must have 10 digits";
    } else {
        phoneErr.innerText = "";
    }

    // Validate password
    if (password.length < 6) {
        passErr.innerText = "(*) Password must be at least 6 characters";
    } else {
        passErr.innerText = "";
    }
}