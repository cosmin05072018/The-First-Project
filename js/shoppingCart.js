let carts = document.querySelectorAll(".card-btn");

let products = [
  //for women
  {
    collection: "women",
    name: "Rochie 'Gemma'",
    price: 90,
    inCart: 0,
    imgSourceName: "cart1",
  },
  {
    collection: "women",
    name: "Rochie 'Whitney'",
    price: 50,
    inCart: 0,
    imgSourceName: "cart2",
  },
  {
    collection: "women",
    name: "Rochie 'Sloane'",
    price: 30,
    inCart: 0,
    imgSourceName: "cart3",
  },
  {
    collection: "women",
    name: "Rochie 'ALIANNA'",
    price: 30,
    inCart: 0,
    imgSourceName: "cart4",
  },
  {
    collection: "women",
    name: "Rochie tip bluză 'SANIA'",
    price: 43,
    inCart: 0,
    imgSourceName: "cart5",
  },
  {
    collection: "women",
    name: "Rochie 'EIRA'",
    price: 33,
    inCart: 0,
    imgSourceName: "cart6",
  },
  {
    collection: "women",
    name: "Jeans",
    price: 20,
    inCart: 0,
    imgSourceName: "cart7",
  },
  {
    collection: "women",
    name: "Pantaloni 'FRANCIS'",
    price: 15,
    inCart: 0,
    imgSourceName: "cart8",
  },
  {
    collection: "women",
    name: "Jeans 'Mom 80'",
    price: 47,
    inCart: 0,
    imgSourceName: "cart9",
  },
  {
    collection: "women",
    name: "Bluză",
    price: 44,
    inCart: 0,
    imgSourceName: "cart10",
  },
  {
    collection: "women",
    name: "Bluză 'Kendra'",
    price: 18,
    inCart: 0,
    imgSourceName: "cart11",
  },
  {
    collection: "women",
    name: "Tricou 'Katja'",
    price: 76,
    inCart: 0,
    imgSourceName: "cart12",
  },

  //for men

  {
    collection: "men",
    name: "Jachetă fleece 'WILLI'",
    price: 20,
    inCart: 0,
    imgSourceName: "cart13",
  },
  {
    collection: "men",
    name: "Tricou negru",
    price: 13,
    inCart: 0,
    imgSourceName: "cart14",
  },
  {
    collection: "men",
    name: "Tricou 'BORO'",
    price: 26,
    inCart: 0,
    imgSourceName: "cart15",
  },
  {
    collection: "men",
    name: "Jeans 'Ply'",
    price: 33,
    inCart: 0,
    imgSourceName: "cart16",
  },
  {
    collection: "men",
    name: "Cămașă 'JPRBLASUMMER'",
    price: 30,
    inCart: 0,
    imgSourceName: "cart17",
  },
  {
    collection: "men",
    name: "Camasa de vara",
    price: 18,
    inCart: 0,
    imgSourceName: "cart18",
  },
  {
    collection: "men",
    name: "Tricou 'Carl'",
    price: 15,
    inCart: 0,
    imgSourceName: "cart19",
  },
  {
    collection: "men",
    name: "Tricou Kan",
    price: 14,
    inCart: 0,
    imgSourceName: "cart20",
  },
  {
    collection: "men",
    name: "Hanorac 'JJEHOLMEN'",
    price: 20,
    inCart: 0,
    imgSourceName: "cart21",
  },
  {
    collection: "men",
    name: "Hanorac",
    price: 26,
    inCart: 0,
    imgSourceName: "cart22",
  },
  {
    collection: "men",
    name: "Camasa king",
    price: 14,
    inCart: 0,
    imgSourceName: "cart23",
  },
  {
    collection: "men",
    name: "Tricou black",
    price: 10,
    inCart: 0,
    imgSourceName: "cart24",
  },

  //for kids
  {
    collection: "Kids",
    name: "Bluză de molton 'Black Cat'",
    price: 12,
    inCart: 0,
    imgSourceName: "cart25",
  },
  {
    collection: "Kids",
    name: "Geacă de primăvară-toamnă",
    price: 39,
    inCart: 0,
    imgSourceName: "cart26",
  },
  {
    collection: "Kids",
    name: "Hanorac",
    price: 22,
    inCart: 0,
    imgSourceName: "cart27",
  },
  {
    collection: "Kids",
    name: "Hanorac 'Club'",
    price: 30,
    inCart: 0,
    imgSourceName: "cart28",
  },
  {
    collection: "Kids",
    name: "Tricou 'Futura'",
    price: 43,
    inCart: 0,
    imgSourceName: "cart29",
  },
  {
    collection: "Kids",
    name: "Tricou ' JUMBO FUTURA TEE'",
    price: 15,
    inCart: 0,
    imgSourceName: "cart30",
  },
  {
    collection: "Kids",
    name: "Pantaloni nike",
    price: 14,
    inCart: 0,
    imgSourceName: "cart31",
  },
  {
    collection: "Kids",
    name: "Pantaloni negri",
    price: 13,
    inCart: 0,
    imgSourceName: "cart32",
  },
  {
    collection: "Kids",
    name: "Pantaloni gri",
    price: 18,
    inCart: 0,
    imgSourceName: "cart33",
  },
  {
    collection: "Kids",
    name: "Pantaloni sport",
    price: 12,
    inCart: 0,
    imgSourceName: "cart34",
  },
  {
    collection: "Kids",
    name: "Șorturi de baie",
    price: 10,
    inCart: 0,
    imgSourceName: "cart35",
  },
  {
    collection: "Kids",
    name: "Tricou",
    price: 11,
    inCart: 0,
    imgSourceName: "cart36",
  },

  //for accessories
  {
    collection: "accessories",
    name: "Natural Wood Coaster Set Blue",
    price: 10,
    inCart: 0,
    imgSourceName: "cart37",
  },
  {
    collection: "accessories",
    name: "Rucsac",
    price: 14,
    inCart: 0,
    imgSourceName: "cart38",
  },
  {
    collection: "accessories",
    name: "Scallop edge cushion cover blue",
    price: 16,
    inCart: 0,
    imgSourceName: "cart39",
  },
  {
    collection: "accessories",
    name: "Rainbow wave embroidered slippers multi",
    price: 15,
    inCart: 0,
    imgSourceName: "cart40",
  },
  {
    collection: "accessories",
    name: "Geantă CALVIN KLEIN",
    price: 11,
    inCart: 0,
    imgSourceName: "cart41",
  },
  {
    collection: "accessories",
    name: "Comforter",
    price: 14,
    inCart: 0,
    imgSourceName: "cart42",
  },
  {
    collection: "accessories",
    name: "Zebra wash bag wwf collaboration",
    price: 18,
    inCart: 0,
    imgSourceName: "cart43",
  },
  {
    collection: "accessories",
    name: "Hat",
    price: 17,
    inCart: 0,
    imgSourceName: "cart44",
  },
  {
    collection: "accessories",
    name: "Storage bag",
    price: 24,
    inCart: 0,
    imgSourceName: "cart45",
  },
  {
    collection: "accessories",
    name: "Natural wood coaster set yellow",
    price: 20,
    inCart: 0,
    imgSourceName: "cart46",
  },
  {
    collection: "accessories",
    name: "Căciulă",
    price: 16,
    inCart: 0,
    imgSourceName: "cart47",
  },
  {
    collection: "accessories",
    name: "Pălărie 'COTTON-CLSC CAP-AC-HAT'",
    price: 11,
    inCart: 0,
    imgSourceName: "cart48",
  },
];

// start add to cart

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.getElementById("span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.getElementById("span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.getElementById("span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInShoppingCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product,
      };
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }

  localStorage.setItem("productsInShoppingCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function shoppingCart() {
  let cartItems = localStorage.getItem("productsInShoppingCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <div class ="shoppingCartCSS">
            <div id = "${item.imgSourceName}" class="product" >
            <ion-icon class="delete" name="close-circle-outline"></ion-icon>
            <img class="imgShoppingCart" src="../images/${item.collection}/${
        item.imgSourceName
      }.png">
            <span>${item.name}</span>
            </div>

            <div  id = "product-container" class="price-product">$${
              item.price
            }</div>
            
            <div id="quatity-product" class="quantity-product">
            <ion-icon id="btnPrev" class ="arrowBtn" name="arrow-back-circle-outline"></ion-icon><span id="btnForNumbers" class="spanInCart">${
              item.inCart
            }</span><ion-icon id="btnNxt" class="arowForward" name="arrow-forward-circle-outline"></ion-icon>
            </div>

            <div id ="total" class="total">
            $${item.inCart * item.price}
            </div>

            
        `;
    });

    productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
            basket Total
            </h4>
            <h4 class="basketTotal">
            $${cartCost}
            </h4>
        </div>

        

        
        `;
  }
}

onLoadCartNumbers();
shoppingCart();
