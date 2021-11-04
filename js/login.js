const loader = document.querySelector('.loader');

const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');


submitBtn.addEventListener('click', () => {
if(!email.value.length || !password.value.length){
    showAlert('fill all the inputs');
} else{
    loader.style.display = 'block';
    window.location="../html/homePage.html";
}
}
)

const showAlert = (msg) => {
    let alertBox= document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}
