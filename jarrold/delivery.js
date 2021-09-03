let styleSet = /*html*/ `
<style>


.upc {
  text-align: center;
}

@media (min-width: 992px) {
  .upc {
    text-align: start;
  }

  #product p.summ {
    max-width: 300px;
  }

  #product .marketplace {
    max-width: 289px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .upc {
    max-width: 200px;
  }

   #product p.summ {
    max-width: 190px;
  }

  #product .marketplace {
    max-width: 190px;
    padding:15px;
  }
   #product .marketplace::after {
    display: none;
  }
}

@media (min-width: 992px) and (max-width: 1301px) {
  .controls {
    max-width: 200px;
  }
}

.hidden {
  display: none;
}

.accent-text-random {
  color: #e62b8a;
}

.price-more {
  font-weight: 700;
}

.delivery-box-mobile {
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 28px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  align-items: center;
  text-align: center;
  color: #2c8081;
}

.text-block-more {
  line-height: 1.7;
  text-align: center;
}

.delivery-svg-mobile {
  margin-right: 0.7em;
  vertical-align: text-bottom;
}

.delivery-svg-mobile-more {
  margin-right: 5px;
  vertical-align: text-bottom;
}

.information-box-mobile {
  padding: 0;
  margin-top: 20px;
  margin-bottom: 28px;
  text-align: center;
  list-style: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: #8e8e8e;
}

.list-text:first-child {
  margin-bottom: 8px;
}

.params-span {
  font-weight: 600;
  font-size: 13px;
}

/* Desktop */

.price {
  position: relative;
}

.controls {
  align-items: center;
}



.delivery-box {
  display: block;
  position: absolute;
  top: 0;
  width: 180px;
  right: 0;
  padding: 20px;
  border: 2px dashed #e5e5e5;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  align-items: center;
  text-align: center;
  color: #2c8081;
}



.delivery-svg {
  vertical-align: baseline;
}

.text-span {
  display: block;
  color: #e62b8a;
}

.information-box {
  text-align: start;
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: #8e8e8e;
}


</style>
`;

let deliveryBoxMoreMobile = /*html*/ `
<div class="delivery-box-mobile">
   <p class="text-block-more">You've got to spend <span class="price-more">£30</span> more <br><img src="https://conversionratestore.github.io/projects/jarrold/img/delivery.svg" alt="delivery-car" class="delivery-svg-mobile-more"> to get <span class="accent-text-random">FREE SHIPPING</span> for this order
  </p>
</div>
`;

let deliveryBoxMobile = /*html*/ `
<div class="delivery-box-mobile">
   <p class="text-block">
   <img src="https://conversionratestore.github.io/projects/jarrold/img/delivery.svg" alt="delivery-car" class="delivery-svg-mobile">
    You've got <span class="accent-text-random">FREE SHIPPING</span> for this order</p>
</div>
`;

let deliveryBoxMore = /*html*/ `
  <div class="delivery-box">
      <p class="text-block-more-desktop">
      <img src="https://conversionratestore.github.io/projects/jarrold/img/delivery.svg" alt="delivery-car" class="delivery-svg"><br>You've got to spend <span class="price-more">£30</span> more to get <br><span class="text-span">FREE SHIPPING</span><br>for this order
      </p>
  </div>
  `;

let deliveryBox = /*html*/ `
  <div class="delivery-box">
      <p class="text-block-desktop">
      <img src="https://conversionratestore.github.io/projects/jarrold/img/delivery.svg" alt="delivery-car" class="delivery-svg"><br>You've got <br><span class="text-span">FREE SHIPPING</span><br>for this order</p>
  </div>
  `;

let now;
if (document.querySelector("#variants .price") || document.querySelector(".upc")) {
  now = "rrp";

  if (document.querySelector("#variants .price .now")) {
    now = "now";
  }

  let price = +document.querySelector(`.${now}`).innerText.split("£")[1];
  let qty = +document.querySelector(".controls.qty #page_MainContent_product_detail_txtQuantity").value;
  let customSumm = +(price * qty).toFixed(2);
  let randomeCount = getRandomIntInclusive(1, 9);

  localStorage.setItem("customSumm", customSumm);

  document.head.insertAdjacentHTML("beforeend", styleSet);

  // getRandomIntInclusive
  function getRandomIntInclusive(min, max) {
    let minNamber = Math.ceil(min);
    let maxNamber = Math.floor(max);
    return Math.floor(Math.random() * (maxNamber - minNamber + 1) + minNamber); //max and min includes
  }

  hurryUp(randomeCount);
  renderDelivery(customSumm, price);

  function renderDelivery(s, p) {
    if (window.innerWidth <= 768) {
      if (document.querySelector("delivery-box") || document.querySelector("information-box")) {
        document.querySelector("delivery-box").classList.add("hidden");
        document.querySelector("information-box").classList.add("hidden");
      }
      mobileVersion(s, p);
    } else {
      if (document.querySelector("delivery-box-mobile") || document.querySelector("information-box-mobile")) {
        document.querySelector("delivery-box-mobile").classList.add("hidden");
        document.querySelector("information-box-mobile").classList.add("hidden");
      }
      desktopVersion(s, p);
    }
  }

  // Hurry up

  function hurryUp(rc) {
    if (document.querySelector(".stock.instock")) {
      document.querySelector(".stock.instock").innerHTML = `<p>Hurry up! Only <span class="accent-text-random">${rc} left</span> in Stock.</p>`;
    }
  }

  // includesText
  function includesText(text, informationBox) {
    if (text.innerText.toLowerCase().includes("model height") || text.innerText.toLowerCase().includes("is wearing")) {
      let paramsSpan = text.innerText.toLowerCase().includes(": ") ? text.innerText.split(": ") : text.innerText.split("size ");
      let and = text.innerText.toLowerCase().includes(": ") ? ": " : "size ";
      document
        .querySelector(`.${informationBox}`)
        .insertAdjacentHTML("beforeend", `<li class="list-text">${paramsSpan[0]}${and}<span class="params-span">${paramsSpan[1]}</span></li>`);
    }
  }

  // Mobile
  function mobileVersion(sum, p) {
    if (document.querySelector("#page_header_CPR span").textContent !== `0`) {
      fetch("https://www.jarrold.co.uk/basket")
        .then((res) => res.text())
        .then((data) => {
          let customDocument = new DOMParser().parseFromString(data, "text/html");
          sum += +(+customDocument.querySelector("dd.total").innerText.split("£")[1]).toFixed(2);
          localStorage.customSumm = sum;

          if (sum < 50) {
            // NOT FREE SHIPPING
            document.querySelector(".upc").insertAdjacentHTML("afterend", deliveryBoxMoreMobile);
            let summDiff = 50 - sum;
            document.querySelector(".price-more").innerText = `£${summDiff.toFixed(2)}`;
          } else {
            // FREE SHIPPING
            document.querySelector(".upc").insertAdjacentHTML("afterend", deliveryBoxMobile);
          }
        });
    } else {
      if (sum < 50) {
        // NOT FREE SHIPPING
        document.querySelector(".upc").insertAdjacentHTML("afterend", deliveryBoxMoreMobile);
        let summDiff = 50 - sum;
        document.querySelector(".price-more").innerText = `£${summDiff.toFixed(2)}`;
      } else {
        // FREE SHIPPING
        document.querySelector(".upc").insertAdjacentHTML("afterend", deliveryBoxMobile);
      }
    }

    setTimeout(() => {
      document.querySelector(".controls.qty .dec").addEventListener("click", function () {
        if (+document.querySelector(".controls.qty #page_MainContent_product_detail_txtQuantity").value > 0) {
          let summ = +localStorage.getItem("customSumm");
          let newSumm = summ - p;
          localStorage.customSumm = newSumm;
          if (newSumm < 50) {
            // NOT FREE SHIPPING
            document.querySelector(".delivery-box-mobile").remove();
            document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBoxMoreMobile);
            let newSummDiff = 50 - newSumm;
            document.querySelector(".price-more").innerText = `£${newSummDiff.toFixed(2)}`;
          }
        }
      });

      document.querySelector(".controls.qty .inc").addEventListener("click", function () {
        let summ = +localStorage.getItem("customSumm");
        let newSumm = summ + p;
        localStorage.customSumm = newSumm;
        if (newSumm < 50) {
          // NOT FREE SHIPPING
          let newSummDiff = 50 - newSumm;
          document.querySelector(".price-more").innerText = `£${newSummDiff.toFixed(2)}`;
        } else {
          // FREE SHIPPING
          document.querySelector(".delivery-box-mobile").remove();
          document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBoxMobile);
        }
      });
    }, 1000);

    // informationBox
    if (document.querySelector(".controls")) {
      document.querySelector(".controls").insertAdjacentHTML("afterend", `<ul class="information-box-mobile"></ul>`);
      document.querySelectorAll(".col-sm-8 li").forEach((text) => {
        let informationBox = "information-box-mobile";
        includesText(text, informationBox);
      });
    }

    if (document.querySelector(".information-box-mobile")) {
      if (!document.querySelector(".information-box-mobile li")) {
        document.querySelector(".information-box-mobile").classList.add("hidden");
      }
    }
  }

  // Desktop;
  function desktopVersion(sum, p) {
    if (document.querySelector("#page_header_CPR span").textContent !== `0`) {
      fetch("https://www.jarrold.co.uk/basket")
        .then((res) => res.text())
        .then((data) => {
          let customDocument = new DOMParser().parseFromString(data, "text/html");
          sum += +(+customDocument.querySelector("dd.total").innerText.split("£")[1]).toFixed(2);
          localStorage.customSumm = sum;

          if (sum < 50) {
            // NOT FREE SHIPPING
            document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBoxMore);
            let summDiff = 50 - sum;
            document.querySelector(".price-more").innerText = `£${summDiff.toFixed(2)}`;
          } else {
            // FREE SHIPPING
            document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBox);
          }
        });
    } else {
      if (sum < 50) {
        // NOT FREE SHIPPING
        document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBoxMore);
        let summDiff = 50 - sum;
        document.querySelector(".price-more").innerText = `£${summDiff.toFixed(2)}`;
      } else {
        // FREE SHIPPING
        document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBox);
      }
    }

    setTimeout(() => {
      document.querySelector(".controls.qty .dec").addEventListener("click", function () {
        if (+document.querySelector(".controls.qty #page_MainContent_product_detail_txtQuantity").value > 0) {
          let summ = +localStorage.getItem("customSumm");
          let newSumm = summ - p;
          localStorage.customSumm = newSumm;
          if (newSumm < 50) {
            // NOT FREE SHIPPING
            document.querySelector(".delivery-box").remove();
            document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBoxMore);
            let newSummDiff = 50 - newSumm;
            document.querySelector(".price-more").innerText = `£${newSummDiff.toFixed(2)}`;
          }
        }
      });

      document.querySelector(".controls.qty .inc").addEventListener("click", function () {
        let summ = +localStorage.getItem("customSumm");
        let newSumm = summ + p;
        localStorage.customSumm = newSumm;
        if (newSumm < 50) {
          // NOT FREE SHIPPING
          let newSummDiff = 50 - newSumm;
          document.querySelector(".price-more").innerText = `£${newSummDiff.toFixed(2)}`;
        } else {
          // FREE SHIPPING
          document.querySelector(".delivery-box").remove();
          document.querySelector(".price").insertAdjacentHTML("beforeend", deliveryBox);
        }
      });
    }, 1000);

    // informationBox
    if (document.querySelector(".col-sm-8 li")) {
      document.querySelector(".controls").insertAdjacentHTML("beforeend", `<ul class="information-box"></ul>`);

      document.querySelectorAll(".col-sm-8 li").forEach((text) => {
        let informationBox = "information-box";
        includesText(text, informationBox);
      });
    }

    if (document.querySelector(".information-box")) {
      if (!document.querySelector(".information-box li")) {
        document.querySelector(".information-box").classList.add("hidden");
      }
    }
  }

  // handleClick
  function handleClick(s, p, rc) {
    document.querySelectorAll(".specifics button").forEach((el) => {
      el.addEventListener("click", function () {
        setTimeout(function () {
          if (!document.querySelector(".accent-text-random")) {
            hurryUp(rc);
          }

          if (!document.querySelector(".delivery-box") && !document.querySelector(".delivery-box-mobile")) {
            renderDelivery(s, p);
            handleClick(s, p, rc);
          }
        }, 350);
      });
    });
  }

  handleClick(customSumm, price, randomeCount);

  //
  let eventVar = "desktop";

  if (window.innerWidth <= 768) {
    eventVar = "mobile";
  }

  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: `Exp — Delivery Size guide ${eventVar}`,
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
  hj("trigger", `delivery_size_guide_${eventVar}`);
}
