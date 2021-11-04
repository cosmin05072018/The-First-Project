const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
//aic va trebui sa fac asemenea si pt celelalte campuri pe care le voi pune


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


        if(usernameValue === '') {
            setErrorFor(username, 'Required field.');
        }        
        else if(usernameValue.length < 3){
            setErrorFor(username, 'Username must contain at least 3 letters');
        }       
        else {
            setSuccesFor(username);
        }
        if (emailValue === '') {
            setErrorFor(email, 'Required field.');
        } else if(!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid')
        } else{
            setSuccesFor(email);
        }
        if (passwordValue === '') {
            setErrorFor(password, 'Required field.');
        } else if(!isPassword(passwordValue)) {
            setErrorFor(password, 'Password is not valid')}
        else if(passwordValue.length < 8 ){
            setErrorFor(password, 'The password must contain at least 8 characters, a capital letter and a number.');
        }
        else {
            setSuccesFor(password);
        }
    }

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
    setTimeout(function(){
        window.location.href="../html/homePage.html";
    }, 2500);
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

let userName = document.getElementById("username");
let emaiL = document.getElementById("email");
let passworD = document.getElementById("password");
let button = document.getElementById("save")
button.onclick = function (){
    localStorage.setItem("Usermame", userName.value)
    localStorage.setItem("Email", emaiL.value)
    localStorage.setItem("Password", passworD.value)
}