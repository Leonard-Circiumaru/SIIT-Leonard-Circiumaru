const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

document.getElementById("login").addEventListener("click", checkUser);

function checkUser() {
    fetch("https://contact-agenda-rest-api.herokuapp.com/users")
        .then(processRespponse)
        .then(checkValidityUser);
}

function processRespponse(ressponse) {
    return ressponse.json();
}

function checkValidityUser(data) {
    const email = inputEmail.value;
    const password = inputPassword.value;

    let loginFlag = false;

    for(const user of data) {
        if(email === user.email && password === user.password) {
            localStorage.setItem("logged", "true")
            loginFlag = true;
        }
        
    }
    if(loginFlag) {
        window.location = "./index.html"
    }
    else {
        alert("Wrong user or password")
        inputEmail.value = "";
        inputPassword.value = ""; 
    }
}