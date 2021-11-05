const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");


const loader = document.querySelector('.loader');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const usernameValue = username.value.trim();
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
        if (passwordValue === '') {
            setErrorFor(password, 'Required field.');
        } else if(!isPassword(passwordValue)) {
            setErrorFor(password, 'Password is not valid')}
            
        else if(passwordValue.length < 8 ){
            setErrorFor(password, 'The password must contain at least 8 characters, a capital letter and a number.');
        }
        else {
            setSuccesFor(password);
            loader.style.display = 'block';
            setTimeout(() => {
            window.location="../html/homePage.html";
            }, 3000);
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
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}



