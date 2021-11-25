//-----------function for prev and nxt button-----------
let add = document.getElementById("btnNxt");
let remove = document.getElementById("btnPrev");

let int = document.getElementById("btnForNumbers");
var integer = 1;
let totalCartCost = document.getElementById("total");

add.addEventListener("click", function () {
  integer += 1;
  int.innerHTML = integer;

  let btnValue = document.getElementById("btnForNumbers").innerText;
  let ValueModified = document.getElementById("total").innerText;

  //console.log(btnValue);
  console.log(ValueModified);

  if (integer >= 1) {
    let remove = (document.getElementById("btnPrev").style.display = "block");
    let currency = ValueModified;
    let numberCurrency = Number(currency.replace(/[^0-9.-]+/g, ""));
    let numberValue = btnValue;
    let numberValueCurrency = Number(numberValue.replace(/[^0-9.-]+/g, ""));

    let basePrice = products[0].price;
    console.log(basePrice);

    let sumProducts = numberValueCurrency * numberCurrency;
    console.log(sumProducts);
    //document.getElementById('total').innerHTML = sumProducts;
  }
});

remove.addEventListener("click", function () {
  integer -= 1;
  int.innerHTML = integer;
  let btnValue = document.getElementById("btnForNumbers").innerText;
  let ValueModified = document.getElementById("total").innerText;

  if (integer <= 1) {
    let remove = (document.getElementById("btnPrev").style.display = "none");

    let currency = ValueModified;
    let numberCurrency = Number(currency.replace(/[^0-9.-]+/g, ""));
    let numberValue = btnValue;
    let numberValueCurrency = Number(numberValue.replace(/[^0-9.-]+/g, ""));

    ValueModified = numberCurrency / numberValueCurrency;
  }
});

//------

//-----------function for delete button-----------

let closeBtn = document.getElementsByClassName("delete");

console.log(closeBtn);
for (let i = 0; i < closeBtn.length; i++) {
  let button = closeBtn[i];
  button.addEventListener("click", function (event) {
    let btnClicked = event.target;
    //let productsInShop = localStorage.getItem('productsInShoppingCart');
    btnClicked.parentElement.parentElement.remove();
  });
}
let nr = 123;
console.log(nr + 34);
