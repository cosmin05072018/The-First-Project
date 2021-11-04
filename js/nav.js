const createNav = () =>{
    let nav = document.querySelector('.navbar'); 
    nav.innerHTML = `<div class="nav">
    <img src="../images/job551-namcha-17.jpg" alt="" class="brand-logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a>
            <img src="../images/user.png" id="user-img" alt="">
             <div class="login-logout-popup hide">
                <p class="account-info">Log in as <span id="result"></span></p>
                <button class="btn" id="user-btn">Log out</button>
             </div>
        </a>
        <a href="#"><img src="../images/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">women</a></li>
    <li class="link-item"><a href="#" class="link">men</a></li>
    <li class="link-item"><a href="#" class="link">kids</a></li>
    <li class="link-item"><a href="#" class="link">accessories</a></li>
</ul>
   `;
}
createNav();

//nav popup

const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () =>{
    userPopup.classList.toggle('hide');
})



function saveData (){
    let namE, emaiL, passworD;

    namE = document.querySelector('#name').value;
    emaiL = document.querySelector('#email').value;
    passworD = document.querySelector('#password').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]

        user_records.push({
            "name": namE,
            "email": emaiL,
            "password": passworD            
    })
        localStorage.setItem("user", JSON.stringify(user_records));
        
}
let nameFromLocalStorage = JSON.parse(localStorage.getItem("user"));
document.getElementById('result').innerHTML=(nameFromLocalStorage[0].name);

