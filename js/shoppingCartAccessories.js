let carts = document.querySelectorAll('.card-btn');

let products = [

    {
        collection: "accessories",
        name: "Ochelari de soare",
        price: 10,
        inCart: 0,
        imgSourceName: "cart37"   
    },
    {
        collection: "accessories",
        name: "Rucsac",
        price: 14,
        inCart: 0,
        imgSourceName: "cart38"   
    },
    {
        collection: "accessories",
        name: "Geantă",
        price: 16,
        inCart: 0,
        imgSourceName: "cart39"   
    },
    {
        collection: "accessories",
        name: "Sneaker 'Gazelle'",
        price: 15,
        inCart: 0,
        imgSourceName: "cart40"   
    },
    {
        collection: "accessories",
        name: "Geantă CALVIN KLEIN",
        price: 11,
        inCart: 0,
        imgSourceName: "cart41"  
    },
    {
        collection: "accessories",
        name: "Geantă cK",
        price: 14,
        inCart: 0,
        imgSourceName: "cart42"  
    },
    {
        collection: "accessories",
        name: "Fular gri",
        price: 18,
        inCart: 0,
        imgSourceName: "cart43"  
    },
    {
        collection: "accessories",
        name: "Fular",
        price: 17,
        inCart: 0,
        imgSourceName: "cart44"  
    },
    {
        collection: "accessories",
        name: "Căciuli sport 'Walden'",
        price: 24,
        inCart: 0,
        imgSourceName: "cart45"  
    },
    {
        collection: "accessories",
        name: "Mănuși sport 'Grommitt Mittens'",
        price: 20,
        inCart: 0,
        imgSourceName: "cart46"  
    },
    {
        collection: "accessories",
        name: "Căciulă",
        price: 16,
        inCart: 0,
        imgSourceName: "cart47"  
    },
    {
        collection: "accessories",
        name: "Pălărie 'COTTON-CLSC CAP-AC-HAT'",
        price: 11,
        inCart: 0,
        imgSourceName: "cart48"  
    }
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.getElementById('span').textContent=productNumbers;
   }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.getElementById('span').textContent=productNumbers + 1;
    }  else{
        localStorage.setItem('cartNumbers', 1);
        document.getElementById('span').textContent = 1;
    }
    setItems(product);
}


function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart +=1;
    } else{
        product.inCart = 1;
    cartItems = {
        [product.name]: product
    }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    
    let cartCost = localStorage.getItem('totalCost');
    

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price)
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
       productContainer.innerHTML = '';
       Object.values(cartItems).map(item =>{
        productContainer.innerHTML += `
            <div class ="shoppingCartCSS">
            <div id = "product-title" class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img class="imgShoppingCart" src="../images/${item.collection}/${item.imgSourceName}.png">
            <span>${item.name}</span>
            </div>

            <div  id = "product-container" class="price-product">${item.price}</div>
            
            <div id="quatity-product" class="quantity-product">
            <ion-icon name="arrow-back-circle-outline"></ion-icon><span class="spanInCart">${item.inCart}</span><ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>

            <div id ="total" class="total">
            ${item.inCart * item.price}
            </div>

            </div>
        `;
        console.log(productContainer.innerHTML);
       });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
            basket Total
            </h4>
            <h4 class="basketTotal">
            $${cartCost},00
            </h4>
        </div>
        `

    }
}

onLoadCartNumbers();
displayCart();