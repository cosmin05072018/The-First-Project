const createNav = () =>{
    let nav = document.querySelector('.navbar'); 
    nav.innerHTML = `<div class="nav">
    <img src="../images/job551-namcha-17.jpg" alt="" class="brand-logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" autocomplete = "off" class="search-box" placeholder="Search..." id="search">
            <button class="search-btn">search</button>
            <ul class="list-group" id ="list"></ul>
            </div>
        <a>
            <img src="../images/user.png" id="user-img" alt="">
             <div class="login-logout-popup hide">
                <p class="account-info">  <span id="result"></span></p>
                <button class="btnForLogIn" id="user-btn" onclick="window.location ='../html/SignUp.html'">Log in</button>
                <button class="btn" id="user-btn" onclick="window.location ='../html/SignUp.html'">Log out</button>
             </div>
        </a>
        <a href="shoppingCart.html"><img src="../images/cart.png" alt=""></a> <span id="span">0</span>
        
        </div>
</div>

<ul class="links-container">
    <li class="link-item"><a href="homePage.html" class="link">home</a></li>
    <li class="link-item"><a href="productsWomen.html" class="link">women</a></li>
    <li class="link-item"><a href="productsMen.html" class="link">men</a></li>
    <li class="link-item"><a href="productsKids.html" class="link">kids</a></li>
    <li class="link-item"><a href="productsAccessories.html" class="link">accessories</a></li>
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
    let firstName, lastName, emaiL, passworD, number;

    firstName= document.querySelector('#name').value;
    lastName = document.querySelector('#name2').value;
    emaiL = document.querySelector('#email').value;
    passworD = document.querySelector('#password').value;
    number = document.querySelector('#number').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]

        user_records.push({
            "firstName": firstName,
            "lastName": lastName,
            "email": emaiL,
            "password": passworD,
            "number": number

    })
        localStorage.setItem("user", JSON.stringify(user_records));

        
}
let nameFromLocalStorage = JSON.parse(localStorage.getItem("user"));
document.getElementById('result').innerHTML=(nameFromLocalStorage[0].lastName);


/*
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');

searchBtn.addEventListener('click', (e) =>{
   
    if(searchBox.value.length){
        e.preventDefault();
        location.href="../html/search.html"
        
    }
    
}
)
*/
