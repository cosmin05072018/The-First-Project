const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');


submitBtn.addEventListener('click', () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(!email.value.length || !password.value.length ){
    showAlert('fill all the inputs');
    }  else if(emailValue && !isEmail(emailValue)){
        showAlert('Email is not valid');
    } else if(password.value.length < 8 || !isPassword(passwordValue)){
        showAlert('Password is not valid');
    }
    else{
    loader.style.display = 'block';
    window.location="../html/homePage.html";
}
}
)
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password){
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}


const showAlert = (msg) => {
    let alertBox= document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}
