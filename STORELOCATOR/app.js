const body = document.querySelector("body");
const babyModal = document.querySelector(".display-none");
const beauty = document.querySelector(".beauty-display-none");
const hair = document.querySelector(".hair-display-none");
const face = document.querySelector(".face-display-none");
const bodyData = document.querySelector(".body-display-none");

function babyData() {
  babyModal.style.display = "flex";
  beauty.style.display = "none";
  hair.style.display = "none";
}
function babyDataRemove() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
}
function beautyData() {
  babyModal.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  beauty.style.display = "flex";
}
function hairData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "none";
  hair.style.display = "flex";
}
function faceData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  bodyData.style.display = "none";
  face.style.display = "flex";
}
function bodyShowData() {
  babyModal.style.display = "none";
  beauty.style.display = "none";
  hair.style.display = "none";
  face.style.display = "none";
  bodyData.style.display = "flex";
}

// ================================================================= CARTS =================================================================
// let body = document.querySelector('body')
let cartProductContainer = document.querySelector(".cart-product-container");
let button = document.querySelector("#cart");
let cancel = document.querySelector("#close");
let cartContainer = document.querySelector(".cart-container");

button.addEventListener("click", () => {
  cartContainer.style.display = "block";
  cartProductContainer.style.display = "block";
  body.style.overflow = "hidden";
});

cancel.addEventListener("click", () => {
  cartContainer.style.display = "none";
  cartProductContainer.style.display = "none";
  body.style.overflow = "auto";
});

let cart_content3 = document.querySelector(".cart_content3");
let cartArr = [];
if (localStorage.getItem("cartCheckout")) {
  cartArr = JSON.parse(localStorage.getItem("cartCheckout"));
}

window.addEventListener("DOMContentLoaded", () => {
  cartArr.map((item) => {
    console.log(item);
    cart_content3.innerHTML += `<div class="cart_data" id="cont${item.id}" >
      <div><img src=${item.images[0]} alt="mamaearth" class="cart_image_name"></div>
      <div class="cart-img-text"><p class="image_name" >${item.name}</p>
      <p class="price_name" > Rs.${item.price}</p></div>
       <div><button class="deletebutton" id=${item.id} onclick="deleteData(event)">Drop</button></div>
       </div>`;
  });
});

function deleteData(e) {
  for (var i = 0; i < cartArr.length; i++) {
    if (cartArr[i].id == e.target.id) {
      cartArr.splice(i, 1);
      e.target.parentElement.parentElement.remove();
      localStorage.setItem("cartCheckout", JSON.stringify(cartArr));
    }
  }
}



//======================================== STORE LOCATORED =================================
const liItem = document.querySelectorAll('ul li');
        const divItem = document.querySelectorAll('.product div');
        const gur = document.querySelector(".gurgoan");

        liItem.forEach(li => {
            gur.style.display = "block"
            li.onclick = function() {
                //Filter
                const value = li.textContent;
                divItem.forEach(div => {
                    div.style.display = 'none';

                    if (div.getAttribute('data-filter') == value.toLowerCase()) {
                        div.style.display = 'block';
                    }
                })
            }
        });