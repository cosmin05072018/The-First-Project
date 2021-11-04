function saveData (){
    let namE, emaiL, passworD;

    namE = document.querySelector('#name').value;
    namE2 = document.querySelector('#name2').value;
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
