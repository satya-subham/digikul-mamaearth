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


// ================================================================= MAIN SECTION =================================================================//

let images = [
    {
        img: 'https://images.ctfassets.net/66mrrren2unf/3IvRaMW6skkw0p2QcDY1ry/6821685a57d78c28edfa4ae1f42e2640/Website.jpg?q=40',
        id: 1
    },
    {
        img:'https://images.ctfassets.net/66mrrren2unf/6n1lcbcBeLzdN4gLLkVYL1/af6375c19d1e873c71c725c7a2112fb6/multani_3.jpg?q=40',
        id: 2,
    },
    {
        img:'https://images.ctfassets.net/66mrrren2unf/4rLBTAOcyFXeGSrMOzn3te/9b7405c8b8465573ac6ba6b131e365c8/onion_2.jpg?q=40',
        id: 3,
    },
    {
        img: 'https://images.ctfassets.net/66mrrren2unf/4k3rC2wPiva95hkzgHDwZ5/b12e4d667bd7ecfef4c1eb7fc979bc4b/Artboard_1__10_.jpg?q=40',
        id: 4,
    },
    {
        img: 'https://images.ctfassets.net/66mrrren2unf/5p5pVTewrOIcFmKeO0vbEP/e5231799d3125147c283a13ca28caec7/3.jpg?q=40',
        id: 5,
    }
];

const bannerImage = document.querySelector('#banner-image');

let count = 0;
function slider(){
    bannerImage.src = images[count].img;
}
slider();

setInterval(()=>{
    count++;
    if(count > images.length - 1) {
        count = 0;
    }
    slider();
}, 5000);

function prevImage(){
    count--;
    if(count < 0) {
        count = images.length - 1;
    }
    slider();
}
function nextImage(){
    count++;
    if(count > images.length - 1) {
        count = 0;
    }
    slider();
}


const mainContainer = document.querySelector('.main-container');
const loader = document.getElementById('loader');

window.addEventListener('DOMContentLoaded', ()=>{
  loader.style.display = 'block';
    fetch('https://mmrth-nd-api.honasa-production.net/v1/categories/2/products')
    .then((response) => response.json())
    .then((data) =>{
      loader.style.display = 'none';
        // console.log(data)
        data.bestsellers.map((item)=>{
            mainContainer.innerHTML+=`<div class="item-container">
            <div class="best-seller">Best seller</div>
            <img src=${item.images[0]} alt="" id="home_img_${item.id}" onclick="display(event)"/>
            <p>${item.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${
                (5 * parseInt(item.avg_rating_percent)) / 100
              }<span> | ${item.review_count} reviews<span></p>
              <p>Rs.${item.price}</p>
              <button id="cart_${item.id}" class="add-to-cart-btn" onclick="add_to_cart(event)">Add to cart</button>
            
            </div>`
        })
    }).catch((Error) => Error)
});



// ================================================================= DETAILS SECTION =================================================================


let details = [];
// if(localStorage.getItem('detailsPage')) {
//     details = JSON.parse(localStorage.getItem('detailsPage'))
// }

function display(e){
    // console.log(e.target.id);
    fetch('https://mmrth-nd-api.honasa-production.net/v1/categories/2/products')
    .then((response) => response.json())
    .then((data) => {
        data.bestsellers.map((item) => {
            let iddval = item.id;
            if(e.target.id.includes(iddval)){
                details.push(item);
                // console.log(details)
                localStorage.setItem('detailsPage', JSON.stringify(details));
                window.location.href = '../DETAILSPAGE/index.html';
            }
        })
    }).catch((Error) => Error);
}
// ================================================================== SEARCH PRODUCTS =================================================================

function searchProduct(){ 
    let product = document.getElementById('search').value;
    loader.style.display = 'block';
    fetch('https://mmrth-nd-api.honasa-production.net/v1/categories/2/products')
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = 'none';
        let searchedProduct = data.bestsellers.filter((item) => {
            if(item.name.toLowerCase().includes(product.toLowerCase())) {
                return item;
            }
        })
        mainContainer.innerHTML = '';
        searchedProduct.map((item) => {
            mainContainer.innerHTML+=`<div class="item-container">
            <div class="best-seller">Best seller</div>
            <img src=${item.images[0]} alt="" id="home_img_${item.id}" onclick="display(event)"/>
            <p>${item.name}</p>
            <p class="para"><i class="fa-solid fa-star rate"></i>${
                (5 * parseInt(item.avg_rating_percent)) / 100
              }<span> | ${item.review_count} reviews<span></p>
              <p>Rs.${item.price}</p>
              <button id="cart_${item.id}" class="add-to-cart-btn" onclick="add_to_cart(event)">Add to cart</button>
            
            </div>`
        })
    }).catch((Error) => Error)
};



// ================================================================= CARTS =================================================================
// let body = document.querySelector('body')
let cartProductContainer = document.querySelector('.cart-product-container')
let button = document.querySelector('#cart')
let cancel = document.querySelector('#close')
let cartContainer = document.querySelector('.cart-container')

button.addEventListener('click', ()=>{
    cartContainer.style.display = 'block';
    cartProductContainer.style.display = 'block';
    body.style.overflow = 'hidden';

});

cancel.addEventListener('click', ()=>{
    cartContainer.style.display = 'none';
    cartProductContainer.style.display = 'none';
    body.style.overflow = 'auto';
});


let cart_content3 = document.querySelector(".cart_content3");
let cartArr=[];
if(localStorage.getItem('cartCheckout')){
    cartArr = JSON.parse(localStorage.getItem('cartCheckout'));
}

window.addEventListener('DOMContentLoaded', (()=>{
    cartArr.map((item)=>{
        // console.log(item)
        cart_content3.innerHTML+=`<div class="cart_data" id="cont${item.id}" >
      <div><img src=${item.images[0]} alt="mamaearth" class="cart_image_name"></div>
      <div class="cart-img-text"><p class="image_name" >${item.name}</p>
      <p class="price_name" > Rs.${item.price}</p></div>
       <div><button class="deletebutton" id=${item.id} onclick="deleteData(event)">Drop</button></div>
       </div>`
    })
}))
function add_to_cart(e){
//   console.log(e.target.id);
  fetch("https://mmrth-nd-api.honasa-production.net/v1/categories/2/products")
  .then(res=>res.json())
  .then(data=>data.bestsellers.map((item)=>{
    let iddval = item.id
    if(e.target.id.includes(iddval)){
        cart_content3.innerHTML+=`<div class="cart_data" id="cont${iddval}" >
      <div><img src=${item.images[0]} alt="mamaearth" class="cart_image_name"></div>
      <div class="cart-img-text"><p class="image_name" >${item.name}</p>
      <p class="price_name" > Rs.${item.price}</p></div>
       <div><button class="deletebutton" id=${iddval} onclick="deleteData(event)">Drop</button></div>
       </div>`
       
       cartArr.push(item)
       localStorage.setItem("cartCheckout", JSON.stringify(cartArr))
    //    console.log(cartArr);
    }
  }))
}

function deleteData(e){
    for(var i=0; i<cartArr.length; i++) {
        if (cartArr[i].id == e.target.id) {
            cartArr.splice(i,1)
            e.target.parentElement.parentElement.remove()
            localStorage.setItem("cartCheckout", JSON.stringify(cartArr))
          }
    }
}



// ============================================================= LOG IN =============================================================

const subMenuWrap = document.querySelector(".sub-menu-wrap");
const loginBtn = document.querySelector(".logbut");
const crossBtn = document.querySelector("#cross");
const header = document.querySelector("header");
const main = document.querySelector("main");
const loginWithOtpBtn = document.querySelector("#login_with_otp");
const loginPhoneMunberInput = document.querySelector("#login_input");
const signUpModal = document.querySelector(".signup_popup");
const loginModal = document.querySelector(".login_popup");
const signUpNumber = document.querySelector("#signup_phone_number");
const loginNumber = document.querySelector("#login_input");
const signUpBtn = document.querySelector("#signup_btn");
const signInModal = document.querySelector('.signin_popup');
const logoutModal = document.querySelector(".logout_popup");
const logedname = document.querySelector("#login");
// let cartContainer = document.querySelector(".cart-container");


function toggleMenu() {
  subMenuWrap.style.display = "block";
}

function toggleMenuRemove() {
  subMenuWrap.style.display = "none";
}


const loginPopUpMainContainer = document.querySelector(
  ".login_popup_main_container"
);

let userData = [];
if(localStorage.getItem('userData')){
  userData= JSON.parse(localStorage.getItem('userData'))
}
console.log(userData);

function login() {
  if(loginBtn.innerText=="LOGIN"){
    cartContainer.style.display = "block";
    subMenuWrap.style.display = "none";
    loginPopUpMainContainer.style.display = "block";
    body.style.overflow = "hidden";
  }
  else if(loginBtn.innerText=="log out"){
    localStorage.removeItem('loggedInUser');
    cartContainer.style.display = "block";
    logoutModal.style.display="block";
    body.style.overflow = "hidden";
    setTimeout(()=>{ 
    cartContainer.style.display = "none";
     logoutModal.style.display="none";
     body.style.overflow = "auto";
    }, 2000)
    loginBtn.innerText="LOGIN"
    logedname.innerHTML=`<button id="login" onmouseover="toggleMenu()"><i class="fa-regular fa-circle-user"></i>Log In</button>`
  }
}


function loginPopupRemove() {
  cartContainer.style.display = "none";
  loginPopUpMainContainer.style.display = "none";
  body.style.overflow = "auto";
  header.classList.toggle("active");
}

function loginWithOtp() {
  if (loginPhoneMunberInput.value.length > 1) {
    loginModal.remove();
    signUpModal.style.display = "block";
    signUpNumber.value = loginNumber.value;
    loginPopUpMainContainer.append(signUpModal);
  }
}

function backToLogin() {
  signUpModal.remove();
  loginPopUpMainContainer.append(loginModal);
}



signUpBtn.addEventListener("click", () => {
  const fName = document.querySelector("#signup_first_name").value;
  const lName = document.querySelector("#signup_last_name").value;
  const eMail = document.querySelector("#signup_email_id").value;

  if (!eMail.endsWith("@gmail.com")) {
    alert("Invalid Email");
  }
else{

  const search = userData.find((x) => {
    return x.userEmail == eMail;
  });
  let userDetails = {
    userFirstName: fName,
    userLastName: lName,
    userEmail: eMail,
  };
  if (search == undefined) {
    userData.push(userDetails);
    localStorage.setItem('userData',JSON.stringify(userData))
    
  } else {
    alert("user already exist");
  }
  localStorage.setItem("loggedInUser", JSON.stringify(userDetails));
  signUpModal.remove();
  signInModal.style.display="block"
  loginPopUpMainContainer.append(signInModal)
}

});

const signInCrossBtn = document.querySelector('#signin_cross');
signInCrossBtn.addEventListener('click', (event)=>{
  signInModal.remove();
  loginPopUpMainContainer.append(loginModal)
  loginPopUpMainContainer.style.display = "none";
  body.style.overflow = "auto";
  cartContainer.style.display = "none";
})


const signInBtn = document.querySelector('#signin_btn');

signInBtn.addEventListener('click', ()=>{
  const signInEmail = document.querySelector('#signin_email').value;

  for(let i=0; i<userData.length; i++){
    if (userData[i].userEmail == signInEmail) {
      loginPopUpMainContainer.style.display = "none";
      cartContainer.style.display = "none";
      body.style.overflow = "auto";
      loginBtn.innerText="log out"
    logedname.innerHTML=`<i class="fa-regular fa-circle-user"></i> welcome ${userData[i].userFirstName}`
  }
  }
})
function getLoggedInUserData(){
  let loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser'))
  console.log(loggedInUserData);
  if(loggedInUserData){
    logedname.innerHTML=`<i class="fa-regular fa-circle-user"></i> welcome ${loggedInUserData.userFirstName}`;
    loginBtn.innerText="log out";
  }
  else{
    logedname.innerHTML=`<i class="fa-regular fa-circle-user"></i>Log In`
  }
 
}
getLoggedInUserData()