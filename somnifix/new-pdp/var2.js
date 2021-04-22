window.onload = function () {
  document.head.insertAdjacentHTML(
    "beforeend",
    `<style>        
            .product_section .shopify-product-form {
                color: #1E415F;        
            }
            .stamped-badge-caption span {
                color: #000;
            }
            .product_name.title {
              font-size: 32px;
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
            .section.is-width-standard .product_section .product__images .made_in {
              display: none;
            }
            .made_in {                        
                font-weight: 500;
                font-size: 12px;
                color: #fff;
                background: #4090d1;
                border-radius: 5px;
                padding: 5px;
            }
            .made_in::before {                
                background-image: url(https://i.ibb.co/hcttzx7/image-62.png);
                display: inline-block;            
                height: 10px;
                width: 20px;
                margin-right: 7px;
                border-radius: 1px;
                content: "";
            }    
            .product_section .shopify-product-form, 
            .shipping-inner {
                height: 543px;
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
                font-size: 14px;
                font-family: 'Kontora bold'!important;
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
                background-image: url(https://i.ibb.co/2W120Wv/cil-check-circle.png);
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
                pointer-events: none;
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
                    font-family: 'Kontora bold'!important;
            }
    
            .section.is-width-standard .product_section .product__images {
              flex: 35%;
            }
            .product_section .product__information.one-half {
              flex: 33%;
            }
            .shipping.one-half.column.medium-down--one-whole {
              flex: 20%;
            }        
            .on-date-text {
                display: none;
            }
            .shipping-inner {
                display: flex;
                flex-direction: column;
                padding: 20px;
                background: #f5f6f7;
                border-radius: 22px;
            }
            .on-free-shipping-label {
                background: #4090D1;
                border-radius: 5px;
                color:#fff;
                padding: 5px;
            }
            .on-pack-wrapper {
                margin-bottom: 10px;
            }
            .on-select {
                background: none;
                width: 51%;
                border: none;
                color: inherit; 
                text-decoration: underline;     
                font-weight: 500;  
                font-size: 13px;            
            }
            .on-select:focus {
                outline: none !important;
            }
            .custom-select {
                width: 65%
            }
            .on-free-shipping-label {
                font-size: 12px;
            }
            // .ship-destination span{
            //     font-weight: 700;
            //     margin: 25px 0;
            //     font-size: 14px;
            // }
            .ship-destination p, .ship-destination__span--ship, .stock__pack {
              font-size: 14px;
            }
            .ship-destination__span--date {
              font-weight: 700;
            }
            .stock {
                margin: 10px 0;
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
                padding: 5px;
                background: #FFFFFF;
                border: 1px solid rgba(31, 64, 92, 0.2);
                box-sizing: border-box;
                border-radius: 5px;
                height: 35px;
            }
            .subscribe-custom {
                display: block;
                color: #1E415F;
                background: #FEF7E7;
                border: 1px solid #F2B413;
                border-radius: 10px;            
                padding: 15px;
                margin: 10px 0;            
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
                    margin-top: auto;             
                }
                .addcart__button{
                    width: 100%;
                    color: #fff;
                    border: none;
                    padding: 10px;
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
                    padding: 20px;
                }
                .moneyback p{
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 126.19%;
                    margin: 10px;
                    color: #1E415F;
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
                
                #shopify-section-product__main .stamped-product-reviews-badge {
                    padding: 0 !important;
                }
    
                @media only screen and (max-width: 1281px) and (min-width: 1024px)  {
                    .product_section .shopify-product-form, .shipping-inner {
                        height: 577px;
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

  const madeIn = document.createElement("span");
  madeIn.classList.add("made_in");
  madeIn.innerText = "Made in USA";

  const reviewWrap = document.createElement("div");
  reviewWrap.classList.add("review-wrap");
  reviewWrap.append(
    document.querySelectorAll(
      ".stamped-product-reviews-badge.stamped-main-badge"
    )[1],
    madeIn
  );
  subheading.insertAdjacentElement("afterend", reviewWrap);

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
                                            <span class="price">$21.99 USD</span>
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
                                            <span class="price">$55.97 USD</span>
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
                                            <span class="price">$219.97 USD</span>
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

  const options = [];

  for (let i = 1; i <= 20; i++) {
    options.push(`<option value="${i}" data-value="${i}">Qty: ${i}</option>`);
  }

  const inStock = document.createElement("div");
  inStock.classList.add("stock");
  inStock.innerHTML = `
                                <h4 class="stock__header">In Stock.</h4>
                                <select class="stock__select">
                                ${options}
                                </select>
                                <p class="stock__pack">1 pack = 84 strips</p>
                                `;

  const subscribe = document.createElement("div");
  subscribe.classList.add("subscribe-custom");
  subscribe.innerHTML = `
                                <input class="subscribe-custom__checkbox" type="checkbox">
                                <h5 class="subscribe-custom__header">Subscribe and <span>save 10%</span></h5>
                                <p class="subscibe-custom__info">Auto delivery every 3 month for $49.97.</p>
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

  for (let i = 0; i < swatchItem.length; i++) {
    swatchItem[i].addEventListener("click", function () {
      document.querySelector(".stock__select").disabled = false;
      document.querySelector(".subscribe-custom__checkbox").checked = false;

      let current = document.getElementsByClassName(
        "swatchCustom__item--active"
      );
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
      document.querySelector(
        ".middle-block__price-output"
      ).innerText = spanPrice;
    });
  }

  for (let i = 0; i < swatchWrap.children.length; i++) {
    document
      .querySelector(".swatchCustom")
      .children[i].addEventListener("click", function () {
        if (i === 0) {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — New PDP (Variant 1/A)",
            eventAction: "click on button 4-week pack",
            eventLabel: "Section: Pack size",
          });
        } else if (i === 1) {
          document.querySelector(".subscibe-custom__info").innerText =
            "Auto delivery every 3 month for $49.97.";
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — New PDP (Variant 1/A)",
            eventAction: "click on button 12-week pack",
            eventLabel: "Section: Pack size",
          });
        } else if (i === 2) {
          document.querySelector(".subscibe-custom__info").innerText =
            "Auto delivery every 12 month for $199.97.";
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp — New PDP (Variant 1/A)",
            eventAction: "click on button 12-month pack",
            eventLabel: "Section: Pack size",
          });
        }

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
      .querySelectorAll(".active .modal_price.subtitle")[1]
      .getElementsByClassName("money")[0]
      .dataset.currencyUsd.replace(/[^0-9.]/g, "");

    let tempMoneyValue = initialValue * currentOptionValue;

    document
      .querySelectorAll(".active .modal_price.subtitle")[1]
      .getElementsByClassName("money")[0].innerText = `$${Number(
      tempMoneyValue.toFixed(2)
    )} USD`;

    upgrade(currentOptionValue);

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp — New PDP (Variant 1/A)",
      eventAction: "click on select — quantity",
    });
  });

  document
    .querySelector(".subscribe-custom__checkbox")
    .addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        upgrade();
        document.querySelector(".stock__select").disabled = true;
        document.querySelector(".stock__select").value = 1;

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: "Exp — New PDP (Variant 1/A)",
          eventAction: "click on checkbox — Subscribe and save 10%",
        });

        if (
          document
            .querySelectorAll(".swatchCustom__item")[1]
            .classList.contains("swatchCustom__item--active")
        ) {
          document
            .querySelectorAll(".active .modal_price.subtitle")[1]
            .getElementsByClassName("money")[0].innerText = "$49.97 USD";
        } else if (
          document
            .querySelectorAll(".swatchCustom__item")[2]
            .classList.contains("swatchCustom__item--active")
        ) {
          document
            .querySelectorAll(".active .modal_price.subtitle")[1]
            .getElementsByClassName("money")[0].innerText = "$199.97 USD";
        }
      } else if (e.currentTarget.checked === false) {
        if (
          document
            .querySelectorAll(".swatchCustom__item")[1]
            .classList.contains("swatchCustom__item--active")
        ) {
          document
            .querySelectorAll(".active .modal_price.subtitle")[1]
            .getElementsByClassName("money")[0].innerText = "$55.97 USD";
        } else if (
          document
            .querySelectorAll(".swatchCustom__item")[2]
            .classList.contains("swatchCustom__item--active")
        ) {
          document
            .querySelectorAll(".active .modal_price.subtitle")[1]
            .getElementsByClassName("money")[0].innerText = "$219.97 USD";
        }
        document.querySelector(".stock__select").disabled = false;
      }
    });

  document.querySelector(
    ".ship-destination__span--date"
  ).innerText = document.querySelectorAll(
    ".on-select"
  )[5].children[0].dataset.value;

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

  document.querySelectorAll(".tooltip-container").forEach((e, index) =>
    e.addEventListener("mouseenter", () => {
      if (index === 0) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: "Exp — New PDP (Variant 1/A)",
          eventAction: "click on tooltip",
          eventLabel: "Tooltip: Hyppoallergic and good for sensitive skin",
        });
      } else if (index === 1) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: "Exp — New PDP (Variant 1/A)",
          eventAction: "click on tooltip",
          eventLabel: "Tooltip: Does not block breathing",
        });
      } else if (index === 2) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: "Exp — New PDP (Variant 1/A)",
          eventAction: "click on tooltip",
          eventLabel: "Tooltip: CPAP-friendly with nasal mask or nasal pillows",
        });
      }
    })
  );

  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 1271698, hjsv: 6 };
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
  hj("trigger", "new_pdp_desktop");

  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp — New PDP",
    eventAction: "loaded",
  });
};
