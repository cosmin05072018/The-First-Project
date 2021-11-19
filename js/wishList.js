let wishList = document.querySelectorAll('.card-wishlist');

let productsWishList = [

    //for women
    {
        collectionWish: "women",
        nameWish: "Rochie 'Gemma'",
        priceWish: 90,
        inCartWish: 0,
        imgSourceNameWish: "cart1" 
    },
    {
        collectionWish: "women",
        nameWish: "Rochie 'Whitney'",
        priceWish: 50,
        inCartWish: 0,
        imgSourceNameWish: "cart2" 
    },
    {
        collectionWish: "women",
        nameWish: "Rochie 'Sloane'",
        priceWish: 30,
        inCartWish: 0,
        imgSourceNameWish: "cart3" 
    },
    {
        collectionWish: "women",
        nameWish: "Rochie 'ALIANNA'",
        priceWish: 30,
        inCartWish: 0,
        imgSourceNameWish: "cart4" 
    },
    {
        collectionWish: "women",
        nameWish: "Rochie tip bluză 'SANIA'",
        priceWish: 43,
        inCartWish: 0,
        imgSourceNameWish: "cart5" 
    },
    {
        collectionWish: "women",
        nameWish: "Rochie 'EIRA'",
        priceWish: 33,
        inCartWish: 0,
        imgSourceNameWish: "cart6" 
    },
    {
        collectionWish: "women",
        nameWish: "Jeans",
        priceWish: 20,
        inCartWish: 0,
        imgSourceNameWish: "cart7" 
    },
    {
        collectionWish: "women",
        nameWish: "Pantaloni 'FRANCIS'",
        priceWish: 15,
        inCartWish: 0,
        imgSourceNameWish: "cart8" 
    },
    {
        collectionWish: "women",
        nameWish: "Jeans 'Mom 80'",
        priceWish: 47,
        inCartWish: 0,
        imgSourceNameWish: "cart9" 
    },
    {
        collectionWish: "women",
        nameWish: "Bluză 'Kendra'",
        priceWish: 44,
        inCartWish: 0,
        imgSourceNameWish: "cart10" 
    },
    {
        collectionWish: "women",
        nameWish: "Bluză 'Kendra'",
        priceWish: 18,
        inCartWish: 0,
        imgSourceNameWish: "cart11" 
    },
    {
        collectionWish: "women",
        nameWish: "Tricou 'Katja'",
        priceWish: 76,
        inCartWish: 0,
        imgSourceNameWish: "cart12"
    },

    //for men

    {
        collectionWish: "men",
        nameWish: "Jachetă fleece 'WILLI'",
        priceWish: 20,
        inCartWish: 0,
        imgSourceNameWish: "cart13"
    },
    {
        collectionWish: "men",
        nameWish: "Tricou negru",
        priceWish: 13,
        inCartWish: 0,
        imgSourceNameWish: "cart14" 
    },
    {
        collectionWish: "men",
        nameWish: "Tricou 'BORO'",
        priceWish: 26,
        inCartWish: 0,
        imgSourceNameWish: "cart15" 
    },
    {
        collectionWish: "men",
        nameWish: "Jeans 'Ply'",
        priceWish: 33,
        inCartWish: 0,
        imgSourceNameWish: "cart16" 
    },
    {
        collectionWish: "men",
        nameWish: "Cămașă 'JPRBLASUMMER'",
        priceWish: 30,
        inCartWish: 0,
        imgSourceNameWish: "cart17" 
    },
    {
        collectionWish: "men",
        nameWish: "Camasa de vara",
        priceWish: 18,
        inCartWish: 0,
        imgSourceNameWish: "cart18" 
    },
    {
        collectionWish: "men",
        nameWish: "Tricou 'Carl'",
        priceWish: 15,
        inCartWish: 0,
        imgSourceNameWish: "cart19" 
    },
    {
        collectionWish: "men",
        nameWish: "Tricou Kan",
        priceWish: 14,
        inCartWish: 0,
        imgSourceNameWish: "cart20" 
    },
    {
        collectionWish: "men",
        nameWish: "Hanorac 'JJEHOLMEN'",
        priceWish: 20,
        inCartWish: 0,
        imgSourceNameWish: "cart21"  
    },
    {
        collectionWish: "men",
        nameWish: "Hanorac",
        priceWish: 26,
        inCartWish: 0,
        imgSourceNameWish: "cart22"  
    },
    {
        collectionWish: "men",
        nameWish: "Camasa king",
        priceWish: 14,
        inCartWish: 0,
        imgSourceNameWish: "cart23"  
    },
    {
        collectionWish: "men",
        nameWish: "Tricou black",
        priceWish: 10,
        inCartWish: 0,
        imgSourceNameWish: "cart24"  
    },

    //for kids
    {
        collectionWish: "Kids",
        nameWish: "Bluză de molton 'Black Cat'",
        priceWish: 12,
        inCartWish: 0,
        imgSourceNameWish: "cart25"  
    },
    {
        collectionWish: "Kids",
        nameWish: "Geacă de primăvară-toamnă",
        priceWish: 39,
        inCartWish: 0,
        imgSourceNameWish: "cart26"  
    },
    {
        collectionWish: "Kids",
        nameWish: "Hanorac",
        priceWish: 22,
        inCartWish: 0,
        imgSourceNameWish: "cart27"  
    },
    {
        collectionWish: "Kids",
        nameWish: "Hanorac 'Club'",
        priceWish: 30,
        inCartWish: 0,
        imgSourceNameWish: "cart28"  
    },
    {
        collectionWish: "Kids",
        nameWish: "Tricou 'Futura'",
        priceWish: 43,
        inCartWish: 0,
        imgSourceNameWish: "cart29"  
    },
    {
        collectionWish: "Kids",
        nameWish: "Tricou ' JUMBO FUTURA TEE'",
        priceWish: 15,
        inCartWish: 0,
        imgSourceNameWish: "cart30"  
    },
    {
        collectionWish: "Kids",
        nameWish: "Pantaloni nike",
        priceWish: 14,
        inCartWish: 0,
        imgSourceNameWish: "cart31"   
    },
    {
        collectionWish: "Kids",
        nameWish: "Pantaloni negri",
        priceWish: 13,
        inCartWish: 0,
        imgSourceNameWish: "cart32"   
    },
    {
        collectionWish: "Kids",
        nameWish: "Pantaloni gri",
        priceWish: 18,
        inCartWish: 0,
        imgSourceNameWish: "cart33"   
    },
    {
        collectionWish: "Kids",
        nameWish: "Pantaloni sport",
        priceWish: 12,
        inCartWish: 0,
        imgSourceNameWish: "cart34"   
    },
    {
        collectionWish: "Kids",
        nameWish: "Șorturi de baie",
        priceWish: 10,
        inCartWish: 0,
        imgSourceNameWish: "cart35"   
    },
    {
        collectionWish: "Kids",
        nameWish: "Tricou",
        priceWish: 11,
        inCartWish: 0,
        imgSourceNameWish: "cart36"  
    },


    //for accessories
    {
        collectionWish: "accessories",
        nameWish: "Natural Wood Coaster Set Blue",
        priceWish: 10,
        inCartWish: 0,
        imgSourceNameWish: "cart37"   
    },
    {
        collectionWish: "accessories",
        nameWish: "Rucsac",
        prpriceWishice: 14,
        inCartWish: 0,
        imgSourceNameWish: "cart38"   
    },
    {
        collectionWish: "accessories",
        nameWish: "Scallop edge cushion cover blue",
        priceWish: 16,
        inCartWish: 0,
        imgSourceNameWish: "cart39"   
    },
    {
        collectionWish: "accessories",
        nanameWishme: "Rainbow wave embroidered slippers multi",
        priceWish: 15,
        inCartWish: 0,
        imgSourceNameWish: "cart40"   
    },
    {
        collectionWish: "accessories",
        nameWish: "Geantă CALVIN KLEIN",
        priceWish: 11,
        inCartWish: 0,
        imgSourceNameWish: "cart41"  
    },
    {
        collectionWish: "accessories",
        nameWish: "Comforter",
        priceWish: 14,
        inCartWish: 0,
        imgSourceNameWish: "cart42"  
    },
    {
        collectionWish: "accessories",
        nameWish: "Zebra wash bag wwf collaboration",
        priceWish: 18,
        inCartWish: 0,
        imgSourceNameWish: "cart43"  
    },
    {
        collectionWish: "accessories",
        nameWish: "Hat",
        priceWish: 17,
        inCartWish: 0,
        imgSourceNameWish: "cart44"  
    },
    {
        collectionWish: "accessories",
        nameWish: "Storage bag",
        priceWish: 24,
        inCartWish: 0,
        imgSourceNameWish: "cart45"  
    },
    {
        collectionWish: "accessories",
        nameWish: "Natural wood coaster set yellow",
        priceWish: 20,
        inCartWish: 0,
        imgSourceNameWish: "cart46"  
    },
    {
        collectionWish: "accessories",
        nameWish: "Căciulă",
        priceWish: 16,
        inCartWish: 0,
        imgSourceNameWish: "cart47"  
    },
    {
        collectionWish: "accessories",
        nameWish: "Pălărie 'COTTON-CLSC CAP-AC-HAT'",
        priceWish: 11,
        inCartWish: 0,
        imgSourceNameWish: "cart48"  
    }
]



// start add to wishList
//carts



for (let i=0; i < wishList.length; i++) {
    wishList[i].addEventListener('click', () => {
        cartNumbersWishList(productsWishList[i]);
        totalCostWishList(productsWishList[i]);
    })
}



function onLoadCartNumbersWishlist() {
    let productNumbersWishList = localStorage.getItem('cartNumbersWishList');

    if(productNumbersWishList){
        document.getElementById('span').textContent=productNumbersWishList;
   }
}


function cartNumbersWishList(productWishList) {
    let productNumbersWishList = localStorage.getItem('cartNumbersWishList');
    productNumbersWishList = parseInt(productNumbersWishList);
    
    if(productNumbersWishList) {
        localStorage.setItem('cartNumbersWishList', productNumbersWishList + 1);
        document.getElementById('span').textContent=productNumbersWishList + 1;
    }  else{
        localStorage.setItem('cartNumbersWishList', 1);
        document.getElementById('span').textContent = 1;
    }
    setItemsWishList(productWishList);
}


function setItemsWishList(productWishList){
    let cartItemsWishlist = localStorage.getItem('productsInWishList');
    cartItemsWishlist = JSON.parse(cartItemsWishlist);

    if(cartItemsWishlist != null){
        if(cartItemsWishlist[productWishList.nameWish] == undefined){
            cartItemsWishlist = {
                ...cartItemsWishlist,
                [productWishList.nameWish]: productWishList
            }
        }
        cartItemsWishlist[productWishList.nameWish].inCartWish +=1;
    } else{
        productWishList.inCartWish = 1;
        cartItemsWishlist = {
        [productWishList.nameWish]: productWishList
    }
    }
    
    localStorage.setItem("productsInWishList", JSON.stringify(cartItemsWishlist));
}

function totalCostWishList(productWishList){
    
    let cartCostWishList = localStorage.getItem('totalCostWishList');
    

    if(cartCostWishList != null){
        cartCostWishList = parseInt(cartCostWishList);
        localStorage.setItem("totalCostWishList", cartCostWishList + productWishList.priceWish)
    }else{
        localStorage.setItem("totalCostWishList", productWishList.priceWish)
    }
}

function shoppingCartWishList(){
    let cartItemsWishlist = localStorage.getItem("productsInWishList");
    cartItemsWishlist = JSON.parse(cartItemsWishlist);
    let productContainerWishList = document.querySelector('.products');
    let cartCostWishList = localStorage.getItem('totalCostWishList');

    if(cartItemsWishlist && productContainerWishList){
        productContainerWishList.innerHTML = 'WishList Cart:';
        Object.values(cartItemsWishlist).map(itemWishList =>{
            productContainerWishList.innerHTML += `
            <div class ="shoppingCartCSS">
            <div id = "product-title" class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img class="imgShoppingCart" src="../images/${itemWishList.collectionWish}/${itemWishList.imgSourceNameWish}.png">
            <span>${itemWishList.nameWish}</span>
            </div>

            <div  id = "product-container" class="price-product">$${itemWishList.priceWish},00</div>
            
            <div id="quatity-product" class="quantity-product">
            <ion-icon name="arrow-back-circle-outline"></ion-icon><span class="spanInCart">${itemWishList.inCartWish}</span><ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>

            <div id ="total" class="total">
            $${itemWishList.inCartWish * itemWishList.priceWish},00
            </div>

            </div>
            `;
        });

        productContainerWishList.innerHTML +=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
            basket Total
            </h4>
            <h4 class="basketTotal">
            $${cartCostWishList},00
            </h4>
        </div>
        `
    }

}

onLoadCartNumbersWishlist();
shoppingCartWishList();