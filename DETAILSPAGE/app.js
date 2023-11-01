let data = JSON.parse(localStorage.getItem("detailsPage"));
console.log(data);
let name = data[data.length - 1].name;
let rating =
  Math.round(5 * parseInt(data[data.length - 1].avg_rating_percent)) / 100;
let reviews = data[data.length - 1].review_count;
let price = data[data.length - 1].price;
let images = data[data.length - 1].images;

let detail = document.getElementById("details");
detail.innerHTML = null;
detail.innerHTML = `<div class="img-cont">
            <div class="big-img">
                <img src=${images[0]} alt="" id="bigImg">
            </div>
            <div class="small-img">
                <div class="sm-1"><img src=${images[3]} alt="" onclick="show1(event)"></div>
                <div class="sm-2"><img src=${images[2]} alt="" onclick="show2(event)"></div>
                <div class="sm-3"><img src=${images[0]} alt="" onclick="show3(event)"></div>
            </div>
        </div>
        <div class="details-sub">
            <h1>${name}</h1>
            <h2><i class="fa-solid fa-star rate"></i><i class="fa-solid fa-star rate"></i><i class="fa-solid fa-star rate"></i><i class="fa-solid fa-star rate"></i><i class="fa-solid fa-star-half-stroke rate"></i> ${rating}</h2>
            <h2>reviews: ${reviews}</h2>
            <h2>price: $${price}</h2>
            <button class="butn" id="butn">Buy Now</button>
        </div>`;

function show1(e) {
  document.getElementById("bigImg").src = e.srcElement.currentSrc;
}
function show2(e) {
  document.getElementById("bigImg").src = e.srcElement.currentSrc;
}
function show3(e) {
  document.getElementById("bigImg").src = e.srcElement.currentSrc;
}
document.getElementById("butn").addEventListener("click", () => {
  alert("purchased" + name);
});
