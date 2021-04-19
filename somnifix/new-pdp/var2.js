window.onload = function () {
  console.log('start')
  document.head.insertAdjacentHTML(
      "beforeend",
      `<style>
        .product_section .shopify-product-form {
            color: #1E415F;        
        }
        .stamped-badge-caption span {
            color: #000;
        }
        
        .swatch label.on-variant-label .on-icon,
        .section.is-width-standard .swatch .top-label,
        .section.is-width-standard .swatch .best-label,
        body .section.is-width-standard .swatch .weeks-label,
        .description.content.has-padding-top,
        .on-payment-wrapper {
            display: none !important;
        }
        .review-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .made_in {                        
            font-weight: 500;
            font-size: 12px;
            color: #fff;
            background: #4090d1;
            border-radius: 5px;
            padding: 8px;
        }
        .made_in::before {
            background-image: url(https://i.ibb.co/hcttzx7/image-62.png);
            display: inline-block;            
            height: 10px;
            width: 14px;
            margin-right: 7px;
            border-radius: 1px;
            content: "";
        }    
        .product_section .shopify-product-form, 
        .shipping-inner {
            height: 560px;
        }
        .product_section .shopify-product-form {
            position: relative;
            padding: 20px;
        }
        .product_name.title {
            margin-bottom: 0;
        }
        .subheading {
            color: #1E415F;
            margin: 10px 0;
            font-weight: 700;
        }
        .checkmark_wrap {    
            flex-direction: column;
            padding: 12px 20px;
        }
        .checkmark_wrap .checkmark_item {
            display: flex;
            width: 100%;
            text-align: left;
        }
        .checkmark_wrap .checkmark_ico {
            display: none;
        }
        .checkmark_wrap .checkmark_title::before {
            content: "";
            background-image: url(https://i.shgcdn.com/1a566448-1cc6-46f0-9158-cfe93799456b/-/format/auto/-/preview/3000x3000/-/quality/lighter/);
            display: inline-block;
            height: 20px;
            width: 20px;
            margin-right: 5px;
            vertical-align: middle;
            background-repeat: no-repeat;
            font-size: 12px;
        }
        .tooltip-container {
            margin: 7px 10px;
        }
        .swatch-element .price-wrapper{
            margin-top: 0 !important
        }
        .checklist {
            color: #1E415F;
            margin: 5px 0;
        }
        .checklist ul {
            color: #1E415F;
            list-style: none;
            font-size: 14px;
        }
        .checklist ul li::before {
            content: "✓";
            margin-right: 10px;
            font-weight: 700;
        }
        .middle-block {
            margin: 10px;
            padding: 15px 0;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
        }
        .middle-block span {
            font-size: 16px;
            font-weight: 700;
        }
        .middle-block p {
            font-size: 14px;
        }
        .swatch.is-flex.is-flex-wrap {
            display: none;
        }
        .purchase-details {
            display: none;
        }
        .swatchCustom__item {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 10px 0;
            padding: 10px;
            background: #FFFFFF;
            border: 2px solid transparent;
            border-radius: 10px;
            color: #1e415f;
            cursor: pointer;
        }
        .swatchCustom__item.swatchCustom__item--active {
            background: #F1F7FC;
            border: 2px solid #4090D1;
        }
        .swatchCustom span {
            display: block;
            margin: ;
        }
        .swatchCustom__item--first .week {
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
        }
        .swatchCustom__item--first .days {
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
        }
        .swatchCustom__item--second {
            display: flex;
            align-items: flex-end;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.05em;
            text-decoration-line: line-through;
            color: rgba(30, 65, 95, 0.7);
        }
        .swatchCustom__item--active.nosale .swatchCustom__item--third {
            display: flex;
            align-items: center;
        }
        .swatchCustom__item--third {
            text-align: right;
        }
        .swatchCustom__item--third .sale {
            color: #f27113;
            font-size: 12px;                
        }
        .swatchCustom__item--third .price {
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;    
        }
        .modal_price .sale {
            line-height: 40.5px !important;
            font-weight: 800;
                font-size: 32px;
        }
        .one-half {
            flex: 30%;
        }
        
        .on-date-text {
            display: none;
        }
        .shipping {
            flex: 19%;            
            font-size: 14px;
        }
        .shipping-inner {
            padding: 20px;
            background: #f5f6f7;
            border-radius: 22px;
        }
        .on-free-shipping-label {
            background: #4090D1;
            border-radius: 5px;
            color:#fff;
            padding: 7px;
        }
        .on-pack-wrapper {
            margin-bottom: 10px;
        }
        .on-select {
            background: none;
            width: 70%;
            border: none;
            color: inherit; 
            text-decoration: underline;                   
        }
        .on-select:focus {
            outline: none !important;
        }
        .custom-select {
            width: 65%
        }
        .ship-destination {
            margin: 10px 0;
        }
        .on-free-shipping-label {
            font-size: 12px;
        }
        .ship-destination span{
            font-weight: 700;
            margin: 25px 0;
            font-size: 14px;
        }
        .stock {
            margin: 30px 0;
        }
        .stock__header {
            font-family: Roboto;
            font-style: normal;
            color: #29C470 !important;
            font-weight: 700 !important;
            font-size: 16px !important;
            line-height: 19px !important;
            margin: 10px 0;
        }
        .stock__select {
            padding: 10px;
            background: #FFFFFF;
            border: 1px solid rgba(31, 64, 92, 0.2);
            box-sizing: border-box;
            border-radius: 5px;
            height: 40px;
            // -moz-appearance: none;
            // -webkit-appearance: none;
        }
        .subscribe-custom {
            display: block;
            color: #1E415F;
            background: #FEF7E7;
            border: 1px solid #F2B413;
            border-radius: 10px;            
            padding: 15px;
            margin: 30px 0;            
            }
            .subscribe-custom p{
                font-size: 12px;
                line-height: 17px !important;
                font-weight: 400;
                
            }
            h5.subscribe-custom__header {
            font-family: "Roboto";
            font-weight: 500;
            display: inline;
            font-size: 14px;
            line-height: 16px;
            color: #1E415F;
            }            
            .subscribe-custom__header span{
                color: #F27113;
            }
            .subscribe-custom__checkbox {
                transform: scale(1.4);
                margin: 0 5px 0 0;
                
            }
            .addcart {
                display:flex;
                align-items:center;                    
            }
            .addcart__button{
                width: 100%;
                color: #fff;
                border: none;
                padding: 15px;
                font: inherit;
                cursor: pointer;
                outline: inherit;
                background: #1E415F;
                border-radius: 100px;
            }
            .moneyback {
                height: 150px;
                display:flex;
                align-items: center;
            }
            .moneyback p{
                font-weight: 500;
                font-size: 16px;
                line-height: 126.19%;
                margin: 10px;
            }
            .on-left {
                display: none;
            }
            .on-pack-wrapper .on-date-text, .on-pack-wrapper .on-free-shipping-label {
                color: #fff;
                font-weight: 500;
                font-size: 12px;
                line-height: 11px;
                font-family: Roboto;
                font-style: normal;
                max-width: fit-content;
                line-height: 1.5;
                margin: 15px 0;
            }

            .on-pack-wrapper .on-select {
                display: none;
            }

            .on-pack-wrapper-1 .on-right, .on-pack-wrapper-2 .on-right, .on-pack-wrapper-3 .on-right {
                width: 100%;
                text-align: left;
                padding-left: 0;
            }

            .checkmark_ico {
                display: none;
            }                       
            
            @media only screen and (max-width: 1281px) and (min-width: 1024px)  {
                .product_section .shopify-product-form, .shipping-inner {
                    height: 600px;
                }
            }
            
    </style>`
  );

  const subheading = document.createElement("p");
  subheading.classList.add("subheading");
  subheading.innerText = `12-week pack (84 strips in a pack)`;

  const productFormShopify = document.querySelectorAll(
      ".product_section .shopify-product-form"
  )[1];
  const productNameTitle = document.querySelectorAll(".product_name.title")[1];

  const reviewWrap = document.createElement("div");

  reviewWrap.classList.add("review-wrap");
  reviewWrap.append(
      document.querySelectorAll(
          ".stamped-product-reviews-badge.stamped-main-badge"
      )[1],
      document.querySelector(".made_in")
  );
  subheading.insertAdjacentElement("afterend", reviewWrap);

  const spanMadeIn = document.querySelector(".made_in");

  const checkmark = document.querySelector(".checkmark_wrap.mobile-hide");

  const swatch = document.querySelector(
      ".section.is-width-standard .product_section .swatch_options .swatch"
  );

  const checkListNav = document.createElement("nav");
  checkListNav.classList.add("checklist");
  checkListNav.innerHTML = `
                                <ul class="checklist">
                                    <li>Promote nose breathing</li>
                                    <li>Reduce open-mouth snoring</li>
                                    <li>Boost CPAP exprerience</li>
                                    <li>Improve sleep quality</li>
                                </ul>`;

  const middleBlock = document.createElement("div");
  middleBlock.classList.add("middle-block");
  middleBlock.innerHTML = `
                                <p>Price: <span class="middle-block__price-output">$55.97 USD</span></p>
                                <p>Choose your pack: <span class="middle-block__week-output">12-week pack</span></p>`;

  const swatchCustom = document.createElement("div");
  swatchCustom.classList.add("swatchCustom");
  swatchCustom.innerHTML = `
                                <div class="swatchCustom__item nosale swatchCustom__item--item1" data-variant="32115046023283" >
                                    <div class="swatchCustom__item--first">
                                        <span class="week">4-week pack</span>
                                        <span class="days">28 strips - 28 days</span>
                                    </div>
                                    <div class="swatchCustom__item--third">        
                                        <span class="price">$19.95 USD</span>
                                    </div>
                                </div>
                                <div class="swatchCustom__item swatchCustom__item--item2 swatchCustom__item--active" data-variant="32115046056051">
                                    <div class="swatchCustom__item--first">
                                        <span class="week">12-week pack</span>
                                        <span class="days">84 strips - 84 days</span>
                                    </div>
                                    <div class="swatchCustom__item--second">            
                                        <span>$59.97 USD</span>
                                    </div>
                                    <div class="swatchCustom__item--third">            
                                        <span class="sale">Save 5%</span>
                                        <span class="price">$55.95 USD</span>
                                    </div>
                                </div>    
                                <div class="swatchCustom__item swatchCustom__item--item3" data-variant="32190023958643">
                                    <div class="swatchCustom__item--first">
                                        <span class="week">12-month pack</span>
                                        <span class="days">365 strips - 365 days</span>
                                    </div>
                                    <div class="swatchCustom__item--second">            
                                        <span>$230.97 USD</span>
                                    </div>
                                    <div class="swatchCustom__item--third">            
                                        <span class="sale">Save 17%</span>
                                        <span class="price">$219.95 USD</span>
                                    </div>
                                </div>     
                                `;

  const productInfo = document.querySelectorAll(".product__information")[1];

  const shipping = document.createElement("div");
  shipping.classList.add(
      "shipping",
      "one-half",
      "column",
      "medium-down--one-whole"
  );

  const shippingInner = document.createElement("div");
  shippingInner.classList.add("shipping-inner");

  const shippingPriceWrapper = document.createElement("div");
  shippingPriceWrapper.append(
      document.querySelectorAll(".on-pack-wrapper")[3],
      document.querySelectorAll(".on-pack-wrapper")[4],
      document.querySelectorAll(".on-pack-wrapper")[5]
  );

  const shipToWrap = document.createElement("div");
  shipToWrap.classList.add("ship-destination");
  shipToWrap.innerHTML = `
                            <span class ="ship-destination__span--ship">Ship to: </span>
                            <p>Arrives: <span class="ship-destination__span--date">24 Sep - 26 Sep</span></p>
                            `;

  const shippingInfo = document.querySelectorAll(".on-right")[3];

  const inStock = document.createElement("div");
  inStock.classList.add("stock");
  inStock.innerHTML = `
                            <h4 class="stock__header">In Stock.</h4>
                            <select class="stock__select">
                                <option value="1" data-value="1">Qty: 1</option>
                                <option value="2" data-value="2">Qty: 2</option>
                                <option value="3" data-value="3">Qty: 3</option>
                                <option value="4" data-value="4">Qty: 4</option>
                                <option value="5" data-value="5">Qty: 5</option>
                                <option value="6" data-value="6">Qty: 6</option>
                                <option value="7" data-value="7">Qty: 7</option>
                                <option value="8" data-value="8">Qty: 8</option>
                                <option value="9" data-value="9">Qty: 9</option>
                                <option value="10" data-value="10">Qty: 10</option>
                                <option value="11" data-value="11">Qty: 11</option>
                                <option value="12" data-value="12">Qty: 12</option>
                                <option value="13" data-value="13">Qty: 13</option>
                                <option value="14" data-value="14">Qty: 14</option>
                                <option value="15" data-value="15">Qty: 15</option>
                                <option value="16" data-value="16">Qty: 16</option>
                                <option value="17" data-value="17">Qty: 17</option>
                                <option value="18" data-value="18">Qty: 18</option>
                                <option value="19" data-value="19">Qty: 19</option>
                                <option value="20" data-value="20">Qty: 20</option>
                            </select>
                            <p class="stock__pack">1 pack = 84 strips</p>
                            `;

  const subscribe = document.createElement("div");
  subscribe.classList.add("subscribe-custom");
  subscribe.innerHTML = `
                            <input class="subscribe-custom__checkbox" type="checkbox">
                            <h5 class="subscribe-custom__header">Subscribe and <span>save 10%</span></h5>
                            <p>Auto delivery every 3 month for $49.97.</p>
                            <p>Cancel anytime.</p>
                            `;

  const cartButtonWrap = document.createElement("div");
  cartButtonWrap.classList.add("addcart");
  cartButtonWrap.innerHTML = `<button class="addcart__button">Add to cart</button>`;

  productFormShopify.insertAdjacentElement("afterbegin", productNameTitle);

  const moneybackWrap = document.createElement("div");
  moneybackWrap.classList.add("moneyback");
  moneybackWrap.innerHTML = `<img src="https://i.ibb.co/kXqgv3n/image-44-2.png" alt="moneyback"/><p>30-day <br /> Money-Back <br />Guarantee</p>`;

  productNameTitle.insertAdjacentElement("afterend", subheading);
  subheading.insertAdjacentElement("afterend", reviewWrap);
  swatch.insertAdjacentElement("beforebegin", checkListNav);
  checkListNav.insertAdjacentElement("afterend", middleBlock);
  middleBlock.insertAdjacentElement("afterend", swatchCustom);
  productFormShopify.insertAdjacentElement("afterend", checkmark);
  productInfo.insertAdjacentElement("afterend", shipping);
  shipping.insertAdjacentElement("afterbegin", shippingInner);
  shippingInner.insertAdjacentElement("afterbegin", shippingPriceWrapper);
  shippingPriceWrapper.insertAdjacentElement("afterend", shipToWrap);
  shipToWrap.insertAdjacentElement("afterend", inStock);
  document
      .querySelector(".ship-destination__span--ship")
      .insertAdjacentElement(
          "afterend",
          document.querySelectorAll(".on-select")[5]
      );
  inStock.insertAdjacentElement("afterend", subscribe);
  subscribe.insertAdjacentElement("afterend", cartButtonWrap);
  shippingInner.insertAdjacentElement("afterend", moneybackWrap);

  const swatchWrap = document.querySelector(".swatchCustom");
  const swatchItem = document.querySelectorAll(".swatchCustom__item");

// let month = document
//   .querySelector(".swatchCustom__item--active")
//   .children[0].getElementsByClassName("week")[0].innerText;

// const itemId = document.querySelector(".swatchCustom__item--active").dataset
//   .variant;
// const itemQuantity = document.querySelector(".stock__select").value;

  for (let i = 0; i < swatchItem.length; i++) {
    swatchItem[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("swatchCustom__item--active");
      current[0].className = current[0].className.replace(
          " swatchCustom__item--active",
          ""
      );
      this.className += " swatchCustom__item--active";

      if (swatchItem[0].classList.contains("swatchCustom__item--active")) {
        document.querySelector(".subscribe-custom").style.display = "none";
      } else {
        document.querySelector(".subscribe-custom").style.display = "block";
      }

      document.querySelector(".stock__select").value = 1;

      let spanWeek = document
          .querySelector(".swatchCustom__item--active")
          .children[0].getElementsByClassName("week")[0].innerText;
      let spanPrice = document
          .querySelector(".swatchCustom__item--active")
          .lastElementChild.getElementsByClassName("price")[0].innerText;
      let spanStrips = document
          .querySelector(".swatchCustom__item--active")
          .children[0].getElementsByClassName("days")[0]
          .innerText.replace(/ .*/, "");

      subheading.innerText = `${spanWeek} (${spanStrips} strips in a pack)`;

      document.querySelector(".middle-block__week-output").innerText = spanWeek;
      document.querySelector(".middle-block__price-output").innerText = spanPrice;
    });
  }

  for (let i = 0; i < swatchWrap.children.length; i++) {
    document
        .querySelector(".swatchCustom")
        .children[i].addEventListener("click", () => {
      document.querySelectorAll(".swatch-element")[i + 3].click();

      upgrade();
    });
  }

  const starWrap = document.querySelectorAll(
      ".stamped-starrating.stamped-badge-starrating"
  )[1];

  document.querySelectorAll(".swatch-element")[4].click();
  for (let i = 0; i < starWrap.children.length; i++) {
    starWrap.children[i].style.cssText = "color: rgb(242, 180, 19) !important;";
  }

  function upgrade(currentOptionValue) {
    let stockStrips = document
        .querySelector(".swatchCustom__item--active")
        .children[0].getElementsByClassName("days")[0]
        .innerText.replace(/ .*/, "");

    if (currentOptionValue === undefined) {
      document.querySelector(
          ".stock__pack"
      ).innerHTML = `1 pack = ${stockStrips} strips`;
    } else {
      document.querySelector(
          ".stock__pack"
      ).innerHTML = `${currentOptionValue} packs = ${
          stockStrips * currentOptionValue
      } strips`;
    }
  }

  document.querySelector(".stock__select").addEventListener("change", (e) => {
    let currentOptionValue =
        e.target.options[e.target.selectedIndex].dataset.value;

    let initialValue = document
        .querySelectorAll(".modal_price.subtitle")[3]
        .getElementsByClassName("money")[0]
        .dataset.currencyUsd.replace(/[^0-9.]/g, "");

    let tempMoneyValue = initialValue * currentOptionValue;

    document
        .querySelectorAll(".modal_price.subtitle")[3]
        .getElementsByClassName("money")[0].innerText = `$${Number(
        tempMoneyValue.toFixed(2)
    )} USD`;

    upgrade(currentOptionValue);
  });

  document
      .querySelector(".subscribe-custom__checkbox")
      .addEventListener("change", (e) => {
        if (e.currentTarget.checked) {
          upgrade();
          document.querySelector(".stock__select").disabled = true;
          document.querySelector(".stock__select").value = 1;
        } else {
          document.querySelector(".stock__select").disabled = false;
        }
      });

  document.querySelector(".ship-destination__span--date").innerText = document.querySelectorAll(".on-select")[5].children[0].dataset.value

  document.querySelectorAll(".on-select")[5].addEventListener("change", (e) => {
    let value = e.target.options[e.target.selectedIndex].dataset.value;
    document.querySelector(".ship-destination__span--date").innerText = value;
  });

  document.querySelector(".addcart__button").addEventListener("click", () => {
    const itemId = document.querySelector(".swatchCustom__item--active").dataset
        .variant;
    const itemQuantity = document.querySelector(".stock__select").value;

    if (document.querySelector(".subscribe-custom__checkbox").checked) {
      if (itemId === "32115046056051") {
        addItemToCart("31272810676339", 1, "3", "Month", "95310");
      } else if (itemId === "32190023958643") {
        addItemToCart("32190023958643", 1, "12", "Month", "95310");
      }
    } else {
      addItemToCart(itemId, itemQuantity);
    }
  });
}


