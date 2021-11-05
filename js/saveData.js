function saveData (){
    let firstName, lastName, userName, email, password, password2;

    firstName= document.querySelector('#fname').value;
    lastName = document.querySelector('#lname').value;
    userName = document.querySelector('#username').value;
    email = document.querySelector('#email').value;
    password = document.querySelector('#password').value;
    password2 = document.querySelector('#password2').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]

        user_records.push({
            "firstName": firstName,
            "lastName": lastName,
            "userName": userName,  
            "email": email,
            "password": password,
            "password2": password2

    })
        localStorage.setItem("user", JSON.stringify(user_records));
}
