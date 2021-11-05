const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const loader = document.querySelector('.loader');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    
        if (fnameValue ===''){
            setErrorFor(fname, 'Required field.');
        }        
        else if(fnameValue.length < 3){
            setErrorFor(fname, 'First must contain at least 3 letters');
        }       
        else {
            setSuccesFor(fname);
        }

        if (lnameValue ===''){
            setErrorFor(lname, 'Required field.');
        }        
        else if(lnameValue.length < 3){
            setErrorFor(lname, 'First must contain at least 3 letters');
        }       
        else {
            setSuccesFor(lname);
        }


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
        if (password2Value === '') {
            setErrorFor(password2, 'Required field.');
    }   else if(passwordValue != password2Value) {
            setErrorFor(password2, 'Passwords does not match')
    }   else {
            setSuccesFor(password2);
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



