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
const liItem = document.querySelectorAll("ul li");
const divItem = document.querySelectorAll(".product div");
const gur = document.querySelector(".gurgoan");

liItem.forEach((li) => {
  gur.style.display = "block";
  li.onclick = function () {
    //Filter
    const value = li.textContent;
    divItem.forEach((div) => {
      div.style.display = "none";

      if (div.getAttribute("data-filter") == value.toLowerCase()) {
        div.style.display = "block";
      }
    });
  };
});





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