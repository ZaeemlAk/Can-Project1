const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const errorNodes = document.querySelectorAll(".error");
const form = document.querySelector("#myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateform();
});
// Validate data
function validateform() {
    clearMessages();
    let errorFlag = false;

    if (nameInput.value.trim().length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
      errorNodes[2].innerText ="Please enter message";
      message.classList.add("error-border");
      errorFlag = true;
    }
    if(!errorFlag){
        success.innerText = "Success!";
    }
}
// Clear error / success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        if (errorNodes[i]) {
            errorNodes[i].innerText = " ";
        }
        success.innerText = "";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
