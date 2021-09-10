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
right: -19px;
display:none;

width: 274px !important;
height: 223px !important;
padding: 28px !important;

background: #FFFFFF !important;
border: 2px solid #266D6E !important;
z-index: 3;
}

.hover-pay-block-bottom{
position:absolute;
text-align: center;
text-transform: none;

top: 69px;
right: -19px;
display:none;

width: 274px !important;
height: 223px !important;
padding: 28px !important;

background: #FFFFFF !important;
border: 2px solid #266D6E !important;
z-index: 3;
}

.hover-pay-title{
font-family: 'Lato', sans-serif !important;
margin: 20px 0 20px 0 !important;
font-weight: 600 !important;
font-size: 14px !important;
line-height: 1.3 !important;
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

.btn-pay-flow:hover{
background: #2c8081 !important;
color: #fff !important;
transition: all 0.8s ease 0s;
}

.btn-pay-flow:hover .hover-pay-block{
display:block;
transition: all 0.8s ease 0s;
}

.btn-pay-flow:hover .hover-pay-block-bottom{
display:block;
transition: all 0.8s ease 0s;
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

@media (min-width: 992px) and (max-width: 1200px) {
.hover-pay-block {
position: absolute;
text-align: center;
text-transform: none;
bottom: 69px;
right: -69px;
display: none;
width: 268px !important;
height: 225px !important;
padding: 25px !important;
background: #FFFFFF !important;
border: 2px solid #266D6E !important;
z-index: 3;
}

.hover-pay-block-bottom{
position:absolute;
text-align: center;
text-transform: none;
top: 69px;
right: -69px;
display:none;
width: 268px !important;
height: 225px !important;
padding: 25px !important;
background: #FFFFFF !important;
border: 2px solid #266D6E !important;
z-index: 3;
}
}

</style>
`;

document.head.insertAdjacentHTML("beforeend", styleFlow);

if (document.querySelector("#variants .price")) {
  let nowCl = "rrp";

  if (document.querySelector("#variants .price .now")) {
    nowCl = "now";
  }

  let price = +document.querySelector(`.${nowCl}`).innerText.split("£")[1];
  let customSummPay = +price / 3;
  localStorage.setItem("customSummPay", customSummPay);

  if (document.querySelector(".btn.wish")) {
    createPayFlowBtn();
  }

  handleClick();

  function createPayFlowBtn() {
    // Change the "Add to wishlist"
    document.querySelector(".btn.wish span").textContent = "";
    document.querySelector(".btn.wish").classList.add("btn-wishlist");
    document.querySelector("[data-pp-message] iframe").style.display = "none";

    let qty = +document.querySelector(".controls.qty #page_MainContent_product_detail_txtQuantity").value;
    let customSummPay = +localStorage.getItem("customSummPay");

    // Add button "Pay only" and Add PayPal hover
    document.querySelector(".specifics.buttons .btn-wishlist").insertAdjacentHTML(
      "beforebegin",
      `<button type="button"  class="btn btn-pay-flow" type="button">Pay only <span class="span-text">£${(customSummPay * qty).toFixed(2)}</span>
      <div class="hover-pay-block">
      <img src="https://conversionratestore.github.io/projects/jarrold/img/paypal.svg" alt="label pay" class="hover-pay-img">
      <h1 class="hover-pay-title">Pay in 3 equal installments of <span class="span-text">£${(customSummPay * qty).toFixed(2)}</h1>
      <p class="hover-pay-text">Choose PayPal in the Checkout to buy this product in 3 equal installments</p>
      </div>
      </button>
      `
    );

    setTimeout(() => {
      document.querySelector(".controls.qty .dec").addEventListener("click", function () {
        if (+document.querySelector(".controls.qty #page_MainContent_product_detail_txtQuantity").value > 0) {
          setTimeout(() => {
            let customSummPay = +localStorage.getItem("customSummPay");
            let qty = +document.querySelector(".controls.qty #page_MainContent_product_detail_txtQuantity").value;
            let newSumm = customSummPay * qty;

            document.querySelectorAll(".span-text").forEach((el) => {
              el.innerText = `£${newSumm.toFixed(2)}`;
            });
          }, 100);
        }
      });

      document.querySelector(".controls.qty .inc").addEventListener("click", function () {
        setTimeout(() => {
          let customSummPay = +localStorage.getItem("customSummPay");
          let qty = +document.querySelector(".controls.qty #page_MainContent_product_detail_txtQuantity").value;
          let newSumm = customSummPay * qty;

          document.querySelectorAll(".span-text").forEach((el) => {
            el.innerText = `£${newSumm.toFixed(2)}`;
          });
        }, 100);
      });
    }, 1000);

    //   click -> checkout
    document.querySelector(".btn-pay-flow").addEventListener("click", function () {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp - hover paypal desktop",
        eventAction: "Click on Pay only button",
      });

      if (document.querySelector("#page_MainContent_product_detail_txtQuantity").value !== "0") {
        document.querySelector("#page_MainContent_product_detail_btnAddBag").click();

        setTimeout(() => {
          if (!document.querySelector("[data-pp-message] .dv-error")) {
            document.querySelector("#cart-callback").style.display = "none";

            setTimeout(() => {
              document.location = "https://www.jarrold.co.uk/checkout";
            }, 300);
          }
        }, 300);
      }
    });

    document.querySelector(".btn-pay-flow").addEventListener("mouseenter", function () {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp - hover paypal desktopn",
        eventAction: "PayPal hover appears",
      });

      if (window.pageYOffset > 20) {
        document.querySelector(".hover-pay-block").classList.add("hover-pay-block-bottom");
      }

      if (document.querySelector(".hover-pay-block").getBoundingClientRect().bottom > 700) {
        document.querySelector(".hover-pay-block").classList.remove("hover-pay-block-bottom");
      }
    });
  }

  // mutation
  function handleClick() {
    document.querySelectorAll(".specifics button").forEach((el) => {
      el.addEventListener("click", function () {
        setTimeout(function () {
          if (!document.querySelector(".btn-pay-flow")) {
            let price = +document.querySelector(`.${nowCl}`).innerText.split("£")[1];
            let customSummPay = +price / 3;
            localStorage.setItem("customSummPay", customSummPay);
            createPayFlowBtn();
            handleClick();
          }
        }, 400);
      });
    });
  }

  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp - hover paypal desktop",
    eventAction: "loaded",
  });

  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 2369936, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  window.hj =
    window.hj ||
    function () {
      (hj.q = hj.q || []).push(arguments);
    };
  hj("trigger", "hover_paypal_desktop");
}
