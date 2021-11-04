//selectam inputurile
const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notifications') || null;

submitBtn.addEventListener('click', () => {
if(name != null){  //sign up page
    if(name.value.length < 3){
        showAlert('name must be 3 letters long');
    } else if(!email.value.length){
        showAlert('enter you email');
    } else if(password.value.length < 8){
        showAlert('password  should be 8 letters long');
    } else if(!number.value.length){
        showAlert('enter your phone number');
    } else if(!Number(number.value) || number.value.length < 10){
            showAlert('invalid number, please enter valid one');
    } else if(!tac.checked){
        showAlert('you most agree to our terms and conditions');
    } else {
        //submit form
        loader.style.display = 'block';
        window.location="../html/homePage.html";
    }
} else{
    //login page
    if(!email.value.length || !password.value.length){
        showAlert('fill all the inputs');
    } else{
        loader.style.display = 'block';
        window.location="../html/homePage.html";
    }
}
})

//alert function 

const showAlert = (msg) => {
    let alertBox= document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}


