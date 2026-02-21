function scrollToRegister() {
    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("registrationForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let successMessage = document.getElementById("successMessage");

    let isValid = true;

    
    emailError.innerText = "";
    phoneError.innerText = "";
    successMessage.innerText = "";

   
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    if (!email.match(emailPattern)) {
        emailError.innerText = "Please enter a valid email address";
        isValid = false;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phone.match(phonePattern)) {
        phoneError.innerText = "Phone number must be exactly 10 digits";
        isValid = false;
    }

    
    if (isValid) {
        successMessage.innerText =
            "Registration Successful! See you at AKRASC 2026.";
        this.reset();
    }
});