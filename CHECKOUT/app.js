let cart = JSON.parse(localStorage.getItem("cartCheckout"));
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("Email");
let address = document.getElementById("Address");
console.log(cart);
let sub = document.querySelector(".subcont2");
let bill = document.querySelector(".bill");
let submit = document.querySelector(".butn");
cart.map((item) => {
  html = `<div class="mini">
                <img src=${item.images[0]} alt="">
                <p>${item.name}</p>
                <h3>Rs${item.price}</h3>
            </div><hr>`;

  sub.innerHTML += html;
});
let total = 0;
for (let i = 0; i < cart.length; i++) {
  total += parseInt(cart[i].price);
}

bill.innerHTML = `Total bill: Rs${total}`;
bill.addEventListener("click", () => {
  alert(`paid the bill Rs${total}`);
});
submit.addEventListener("click", (e) => {
  //e.preventDefault()
  if (
    fname.value == "" ||
    lname.value == "" ||
    email.value == "" ||
    address.value == ""
  ) {
    alert("please enter your details properly");
  } else {
    alert("pay the bill");
  }
});
