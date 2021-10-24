function validatorForm(){
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let box4 = document.getElementById("box4");
    let box5 = document.getElementById("box5");
    let box6 = document.getElementById("box6");
    let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    //mai jos avem cod care impune completarea tuturor inputurilor
    if(box1.value == "" || box2.value == "" || box3.value == ""  || box4.value == ""  || box5.value == "" || box6.value == "" ){
        alert("Toate campurile sunt obligatorii!");   
        return false;
}
    //mai jos avel cod care impune completarea NUMELUI si a PRENUMELUI cu minim 3 litere
    else if(box1.value.length < 3 || box2.value.length < 3){
        alert("Numele si prenumele trebuie sa contina minim 3 caractere!");
        return false;
    }

    //mai jos avem cod pentru a impune completarea parolei astfel: sa contina minim o litera mare, o cifra si un caracter special si sa aiba cel putin 8 caractere si maximul de 15 caractere!
    else if(box4.value.length < 8 || box4.value.length > 15 || spChars.test()) {
        alert("Parola trebuie sa contina minim 8 caractere si maxim 15 caractere!");
    }
   
}

//pana aici am facut validarea pentru cele 6 campuri ca fiind obligatorii, iar NUMELE si PRENUMELE SA AIBA MINIM 3 CARACTERE;
//in continuare vom face validare pentru parola (sa contina minim: o litera mare, o cifra si un caracter special si sa aiba cel putin 8 caractere);