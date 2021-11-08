let carts = document.querySelectorAll('.card-btn');

let products = [

    //for women
    {
        collection: "women",
        name: "Rochie 'Gemma'",
        price: 90,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Rochie 'Whitney'",
        price: 50,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Rochie 'Sloane'",
        price: 30,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Rochie 'ALIANNA'",
        price: 30,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Rochie tip bluză 'SANIA'",
        price: 43,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Rochie 'EIRA'",
        price: 33,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Jeans",
        price: 20,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Pantaloni 'FRANCIS'",
        price: 15,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Jeans 'Mom 80'",
        price: 47,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Bluză 'Kendra'",
        price: 44,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Bluză 'Kendra'",
        price: 18,
        inCart: 0 
    },
    {
        collection: "women",
        name: "Tricou 'Katja'",
        price: 76,
        inCart: 0 
    },

    //for men

    {
        collection: "men",
        name: "Jachetă fleece 'WILLI'",
        price: 20,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Tricou negru",
        price: 13,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Tricou 'BORO'",
        price: 26,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Jeans 'Ply'",
        price: 33,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Cămașă 'JPRBLASUMMER'",
        price: 30,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Camasa de vara",
        price: 18,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Tricou 'Carl'",
        price: 15,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Tricou Kan",
        price: 14,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Hanorac 'JJEHOLMEN'",
        price: 20,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Hanorac",
        price: 26,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Camasa king",
        price: 14,
        inCart: 0 
    },
    {
        collection: "men",
        name: "Tricou black",
        price: 10,
        inCart: 0 
    },

    //for kids
    {
        collection: "kids",
        name: "Bluză de molton 'Black Cat'",
        price: 12,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Geacă de primăvară-toamnă",
        price: 39,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Hanorac",
        price: 22,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Hanorac 'Club'",
        price: 30,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Tricou 'Futura'",
        price: 43,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Tricou ' JUMBO FUTURA TEE'",
        price: 15,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Pantaloni nike",
        price: 14,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Pantaloni negri",
        price: 13,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Pantaloni gri",
        price: 18,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Pantaloni sport",
        price: 12,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Șorturi de baie",
        price: 10,
        inCart: 0 
    },
    {
        collection: "kids",
        name: "Tricou",
        price: 11,
        inCart: 0 
    },


    //for accessories
    {
        collection: "accessories",
        name: "Ochelari de soare",
        price: 10,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Rucsac",
        price: 14,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Geantă",
        price: 16,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Sneaker 'Gazelle'",
        price: 15,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Geantă CALVIN KLEIN",
        price: 11,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Geantă cK",
        price: 14,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Fular gri",
        price: 18,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Fular",
        price: 17,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Căciuli sport 'Walden'",
        price: 24,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Mănuși sport 'Grommitt Mittens'",
        price: 20,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Căciulă",
        price: 16,
        inCart: 0 
    },
    {
        collection: "accessories",
        name: "Pălărie 'COTTON-CLSC CAP-AC-HAT'",
        price: 11,
        inCart: 0 
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
    //console.log('produsul costa', product.price);
    
    let cartCost = localStorage.getItem('totalCost');
    console.log('My cart cost is', cartCost);
    console.log(typeof(cartCost));

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price)
    }


}

onLoadCartNumbers();
