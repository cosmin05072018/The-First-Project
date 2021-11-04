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
