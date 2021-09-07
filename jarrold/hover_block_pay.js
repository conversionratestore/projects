let styleFlow = /*html*/ `
<style>

#product .specifics.buttons button.btn {
min-width: 42%;
width: 42% !important;
}

#product .specifics.buttons button.btn:not(:last-child){
margin-right: 20px;
}

#product .specifics.buttons{
display: flex;
}

#product .specifics.buttons button.btn.wish span:after{
margin-left: 0;
top: 6px;
}

.btn-wishlist {
min-width: 48px !important;
max-width: 48px !important;
width: 48px !important;
}

.btn-pay-flow{
position:relative; 

background: #FFFFFF !important;
border: 1px solid #2C8081 !important;
color:#2C8081 !important;
}

.hover-pay-block{
position:absolute;
text-align: center;
text-transform: none;

bottom: 69px;
right: -30px;
display:none;

width: 298px !important;
height: 248px !important;
padding: 40px !important;

background: #FFFFFF !important;
border: 2px solid #266D6E !important;
z-index: 1;
}

.hover-pay-title{
font-family: 'Lato', sans-serif !important;
margin: 20px 0 20px 0 !important;
font-weight: 600 !important;
font-size: 14px !important;
line-height: 1.43 !important;
text-align: center !important;
color: #333333 !important;
}

.hover-pay-text{
font-family: 'Lato', sans-serif !important;
font-weight: 400 !important;
font-size: 15px !important;
line-height: 1.43 !important;
text-align: center !important;
color: #333333 !important;
}

.btn-pay-flow:hover .hover-pay-block{
display:block;
}

.hover-pay{
text-align: center;
width: 298px !important;
height: 248px !important;
padding: 40px !important;

background: #FFFFFF !important;
border: 2px solid #266D6E !important;
}

.hover-pay-img{
display: block;
margin: auto;
}

</style>
`;

let hoverBlockPay = /*html*/ `
<div class="hover-pay-block">
<img src="https://conversionratestore.github.io/projects/jarrold/img/paypal.svg" alt="label pay">
<h1 class="hover-pay-title">Pay in 3 equal installments of £39.33</h1>
<p class="hover-pay-text">Choose PayPal in the Checkout to buy this product in 3 equal installments</p>
</div>
`;

document.head.insertAdjacentHTML("beforeend", styleFlow);

if (document.querySelector(".btn.wish")) {
  createPayFlowBtn();
}

handleClick();

function createPayFlowBtn() {
  let now = "rrp";

  if (document.querySelector("#variants .price .now")) {
    now = "now";
  }

  document.querySelector(".btn.wish span").textContent = "";
  document.querySelector(".btn.wish").classList.add("btn-wishlist");
  document.querySelector("[data-pp-message] iframe").style.display = "none";

  let price = +document.querySelector(`.${now}`).innerText.split("£")[1] / 3;

  document.querySelector(".specifics.buttons .btn-wishlist").insertAdjacentHTML(
    "beforebegin",
    `<button type="button"  class="btn btn-pay-flow" type="button">Pay only <span>£${price.toFixed(2)}</span>
    <div class="hover-pay-block">
    <img src="https://conversionratestore.github.io/projects/jarrold/img/paypal.svg" alt="label pay" class="hover-pay-img">
    <h1 class="hover-pay-title">Pay in 3 equal installments of <span>£${price.toFixed(2)}</h1>
    <p class="hover-pay-text">Choose PayPal in the Checkout to buy this product in 3 equal installments</p>
    </div>
      </button>
    `
  );

  document.querySelector(".btn-pay-flow").addEventListener("click", function () {
    document.querySelector("#page_MainContent_product_detail_btnAddBag").click();

    if (!document.querySelector("[data-pp-message] .dv-error")) {
      document.querySelector("#cart-callback").style.display = "none";

      setTimeout(() => {
        document.location = "https://www.jarrold.co.uk/checkout";
      }, 300);
    }
  });
}

function handleClick() {
  document.querySelectorAll(".specifics button").forEach((el) => {
    el.addEventListener("click", function () {
      setTimeout(function () {
        if (!document.querySelector(".btn-pay-flow")) {
          createPayFlowBtn();
          handleClick();
        }
      }, 300);
    });
  });
}
