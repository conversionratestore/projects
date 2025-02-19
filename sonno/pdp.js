(function() {
  "use strict";
  const _ = (b, i, n, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: b,
      event_desc: i,
      event_type: n,
      event_loc: e
    }), console.log(`Event: ${b} | ${i} | ${n} | ${e}`);
  }, M = ({ name: b, dev: i }) => {
    console.log(
      `%c EXP: ${b} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, O = (b) => {
    let i = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(i), window.clarity("set", b, "variant_1"));
    }, 1e3);
  };
  function u(b) {
    return new Promise((i) => {
      if (document.querySelector(b))
        return i(document.querySelector(b));
      const n = new MutationObserver(() => {
        document.querySelector(b) && (i(document.querySelector(b)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const k = {
    mobile: "mobile",
    desktop: "desktop"
  }, S = "https://conversionratestore.github.io/projects/sonno", q = `body:has(dialog[open]),
body.is-dialog-open {
  overflow: hidden;
  position: fixed;
}

@media (max-width: 767px) {
  .product-details .mb-\\[26px\\]:has(p.text-primary) {
    margin-bottom: 8px;
  }
}

@media (min-width: 768px) {
  .product-info > div:has(h1) {
    display: flex;
    flex-direction: column;
  }

  .product-info > div:has(h1) > div {
    margin-top: 0;
  }
  .product-info > div h1 {
    order: 2;
  }
}

.estimate-delivery-wrapper {
  display: none;
}
.crs-delivery {
  margin-top: 18px;
  padding: 16px 12px 0;
  border-radius: 12px 12px 0 0;
  background: #f3faff;
}

.crs-delivery__inner {
  display: flex;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid #c7dfff;
}

.crs-delivery__title {
  display: flex;
  gap: 14px;
  color: #1e3851;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.crs-delivery__date {
  color: #1e3851;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}
.crs-delivery__title::before {
  content: '';
  width: 27px;
  height: 27px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none"><g clip-path="url(%23clip0_282_14037)"><path d="M20.3918 16.5125C18.5151 16.5125 16.9884 18.0392 16.9884 19.9158C16.9884 21.7925 18.5151 23.3192 20.3918 23.3192C22.2687 23.3192 23.7951 21.7925 23.7951 19.9158C23.7951 18.0392 22.2684 16.5125 20.3918 16.5125ZM20.3918 21.6175C19.4533 21.6175 18.6901 20.8543 18.6901 19.9158C18.6901 18.9774 19.4533 18.2141 20.3918 18.2141C21.3302 18.2141 22.0935 18.9774 22.0935 19.9158C22.0935 20.8543 21.3302 21.6175 20.3918 21.6175Z" fill="%231E3851"/><path d="M8.76366 16.5125C6.887 16.5125 5.36029 18.0392 5.36029 19.9158C5.36029 21.7925 6.887 23.3192 8.76366 23.3192C10.6403 23.3192 12.167 21.7925 12.167 19.9158C12.167 18.0392 10.6403 16.5125 8.76366 16.5125ZM8.76366 21.6175C7.8252 21.6175 7.06198 20.8543 7.06198 19.9158C7.06198 18.9774 7.8252 18.2141 8.76366 18.2141C9.70186 18.2141 10.4653 18.9774 10.4653 19.9158C10.4653 20.8543 9.70212 21.6175 8.76366 21.6175Z" fill="%231E3851"/><path d="M22.6837 6.77091C22.539 6.48362 22.2449 6.30237 21.9233 6.30237H17.4422V8.00405H21.3986L23.7154 12.6122L25.2362 11.8475L22.6837 6.77091Z" fill="%231E3851"/><path d="M17.8393 19.0934H11.4013V20.7951H17.8393V19.0934Z" fill="%231E3851"/><path d="M6.21112 19.0934H3.26158C2.79161 19.0934 2.41077 19.4743 2.41077 19.9442C2.41077 20.4142 2.79167 20.795 3.26158 20.795H6.21117C6.68114 20.795 7.06199 20.4141 7.06199 19.9442C7.06199 19.4742 6.68109 19.0934 6.21112 19.0934Z" fill="%231E3851"/><path d="M26.8214 13.8919L25.1478 11.7364C24.987 11.5288 24.7388 11.4074 24.4759 11.4074H18.2931V5.45152C18.2931 4.98156 17.9122 4.60071 17.4423 4.60071H3.26158C2.79161 4.60071 2.41077 4.98161 2.41077 5.45152C2.41077 5.92144 2.79167 6.30234 3.26158 6.30234H16.5914V12.2582C16.5914 12.7282 16.9723 13.109 17.4422 13.109H24.0592L25.2983 14.7052V19.0933H22.9443C22.4744 19.0933 22.0935 19.4742 22.0935 19.9441C22.0935 20.4141 22.4744 20.7949 22.9443 20.7949H26.1491C26.6191 20.7949 27 20.414 27 19.9441V14.4137C27 14.2248 26.937 14.0411 26.8214 13.8919Z" fill="%231E3851"/><path d="M6.15442 14.7825H2.24053C1.77056 14.7825 1.38971 15.1634 1.38971 15.6333C1.38971 16.1033 1.77061 16.4841 2.24053 16.4841H6.15437C6.62433 16.4841 7.00518 16.1032 7.00518 15.6333C7.00523 15.1634 6.62433 14.7825 6.15442 14.7825Z" fill="%231E3851"/><path d="M8.11134 11.4358H0.850816C0.3809 11.4358 0 11.8167 0 12.2867C0 12.7566 0.3809 13.1375 0.850816 13.1375H8.11134C8.58131 13.1375 8.96215 12.7566 8.96215 12.2867C8.96215 11.8167 8.58131 11.4358 8.11134 11.4358Z" fill="%231E3851"/><path d="M9.50105 8.08911H2.24053C1.77056 8.08911 1.38971 8.47001 1.38971 8.93993C1.38971 9.4099 1.77061 9.79074 2.24053 9.79074H9.50105C9.97102 9.79074 10.3519 9.40984 10.3519 8.93993C10.3519 8.47001 9.97102 8.08911 9.50105 8.08911Z" fill="%231E3851"/></g><defs><clipPath id="clip0_282_14037"><rect width="27" height="27" fill="white" transform="translate(0 0.459961)"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.price-pro:not(:has(#variant-mattress)) {
  margin-top: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4px;
  row-gap: 8px;
  padding: 8px 12px 16px;
  border-radius: 0 0 12px 12px;
}

@media (min-width: 768px) {
  .price-pro:not(:has(#variant-mattress)) {
    grid-template-columns: auto auto 1fr;
    padding: 16px 12px;
    column-gap: 12px;
  }
}

.price-pro:not(:has(#variant-mattress)) > div:first-child {
  grid-column: 1 / 2;
}

.price-pro:not(:has(#variant-mattress)) > div:nth-child(2) {
  grid-column: 2 / 3;
  flex-direction: row;
  gap: 8px;
}

@media (min-width: 768px) {
  .price-pro:not(:has(#variant-mattress)) > div:nth-child(2) {
    flex-direction: column;
    gap: 4px;
  }
}

.price-pro:not(:has(#variant-mattress)) > div:last-child {
  grid-column: 1 / -1;
  max-width: 261px;
  justify-content: center;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .price-pro:not(:has(#variant-mattress)) > div:last-child {
    grid-column: 3 / 4;
    margin-left: auto;
    padding-inline: 24px;
    max-width: 100%;
  }
}

.price-pro:not(:has(#variant-mattress)) > div:nth-child(2) > div:first-child {
  color: #939393;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.price-pro:not(:has(#variant-mattress)) > div:nth-child(2) > div:last-child {
  padding: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
}

.price-pro:not(:has(#variant-mattress)) > div:last-child * {
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
}

.price-pro:not(:has(#variant-mattress)) > div:last-child > div:last-child {
  margin-top: 4px;
  padding: 0;
}

.price-pro:not(:has(#variant-mattress)) > div:last-child > div:last-child svg {
  height: 4px;
}

.price-pro:not(:has(#variant-mattress)) > div:last-child > div:last-child svg path {
  stroke-width: 4px !important;
}

.footer-add-cart {
  margin-top: 16px;
  margin-inline: 0;
}

@media (min-width: 768px) {
  .footer-add-cart {
    width: 100%;
  }
}

.about-payment-details {
  margin-top: 23px;
  padding: 0;
}

.about-payment-details .item-details:last-child {
  border: none;
}

@media (min-width: 768px) {
  .app-sonno-cc {
    display: none;
  }
  .about-payment-details.mbl {
    margin-top: 24px;
    padding-block: 12px;
    border-radius: 12px;
    border: 1px solid #eaeaea;
    display: flex;
    flex-direction: column;
  }

  .about-payment-details.mbl .item-details {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .about-payment-details.mbl .item-details:first-child {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 16px;
  }
}

.card-addons .card-button {
  gap: 8px;
}

.card-addons {
  padding: 12px;
}
.card-addons .title-card span {
  color: #1e3851;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
}
.card-addons .card-description {
  margin-top: 8px;
}
.card-addons .card-button .pricing-card {
  color: #1e3851;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
}
.card-addons .card-button .border-btn:not(.no-border) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  border-radius: 4px;
  border: none;
  background: #3589da;
  color: #fff;
  font-size: 14px;

  font-weight: 500;
  line-height: 24px;
}

.card-addons .card-button .border-btn.no-border {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  color: #3589da;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

@media (max-width: 768px) {
  .card-addons .card-button .border-btn.no-border {
    font-size: 14px;
    padding: 0;
  }
}
.crs-chosen-option,
.crs-chosen-option > * {
  display: flex;
  gap: 6px;
  color: #374151 !important;
  font-family: Poppins;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 500 !important;
  line-height: 20px !important; /* 142.857% */
}

.crs-chosen-option::before {
  content: '';
  width: 18px;
  height: 18px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M15.25 9.87988C15.25 13.1936 12.5637 15.8799 9.25 15.8799C5.93629 15.8799 3.25 13.1936 3.25 9.87988C3.25 6.56617 5.93629 3.87988 9.25 3.87988C12.5637 3.87988 15.25 6.56617 15.25 9.87988Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9.86963C0.75 7.61529 1.64553 5.45328 3.23959 3.85922C4.83365 2.26517 6.99566 1.36963 9.25 1.36963C11.5043 1.36963 13.6663 2.26517 15.2604 3.85922C16.8545 5.45328 17.75 7.61529 17.75 9.86963C17.75 12.1239 16.8545 14.286 15.2604 15.88C13.6663 17.4741 11.5043 18.3696 9.25 18.3696C6.99566 18.3696 4.83365 17.4741 3.23959 15.88C1.64553 14.286 0.75 12.1239 0.75 9.86963ZM8.76493 13.5076L13.6587 7.3899L12.7747 6.6827L8.60173 11.8971L5.646 9.43443L4.92067 10.3048L8.76493 13.5076Z" fill="%233589DA"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
`;
  class z {
    constructor() {
      this.device = window.innerWidth < 768 ? k.mobile : k.desktop, this.init();
    }
    init() {
      this.initStyles(), this.addNewDeliverySection(), this.changePriceElementPosition(), this.changeAboutPaymentPosition(), this.addChosenOption();
    }
    addNewDeliverySection() {
      u(".footer-add-cart").then((i) => {
        var o;
        const n = i, t = (
          /* HTML */
          `<section class="crs-delivery">
        <div class="crs-delivery__inner">
          <div class="crs-delivery__title">Free Delivery:</div>
          <div class="crs-delivery__date">${(o = document.querySelector(
            ".estimate-delivery-ele .estimate-delivery-item:last-child .estimate-delivery-date"
          )) == null ? void 0 : o.textContent}</div>
        </div>
      </section>`
        );
        n.insertAdjacentHTML("beforebegin", t);
      });
    }
    changePriceElementPosition() {
      u(".price-pro").then((i) => {
        u(".crs-delivery").then((n) => {
          const e = i, t = n;
          e && t && t.insertAdjacentElement("afterend", e);
        });
      });
    }
    changeAboutPaymentPosition() {
      u(".about-payment-details").then((i) => {
        const n = document.querySelector(".footer-add-cart"), e = i;
        e && n && n.insertAdjacentElement("afterend", e);
      });
    }
    addChosenOption() {
      u(".variant-switch-items ul").then((i) => {
        const n = () => {
          document.querySelectorAll(
            '.variant-switch-items ul li div > div:not([x-text="option.name"]):not(.text-primary)'
          ).forEach((o) => {
            var s, r;
            o.classList.contains("text-[#535353]") && o.classList.add("crs-chosen-option"), ((s = o.textContent) != null && s.includes("No Storage") || (r = o.textContent) != null && r.includes("From ")) && o.classList.remove("crs-chosen-option");
          });
        };
        n(), new MutationObserver((t) => {
          t.forEach((o) => {
            o.target.classList.contains("text-[#535353]") && n();
          });
        }).observe(i, {
          childList: !0,
          subtree: !0
        });
      });
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = q, document.head.appendChild(i);
    }
  }
  const D = `.crs-sticky {
  position: fixed;
  display: none;
  bottom: 0;
  width: 100%;
  height: 102px;
  padding: 0 14px 14px;
  border-top: 1px solid #dbdbdb;
  background: #fff;
  z-index: 98;
}

@media (min-width: 768px) {
  .crs-sticky {
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    max-width: 1280px;
    height: auto;
    padding: 12px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 4px 18px 0px #dbdbdb;
  }
}

.crs-sticky--show {
  display: flex;
}
.crs-sticky__inner {
  width: 100%;
}

.crs-sticky__action {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .crs-sticky__action {
    display: none;
  }
}

.crs-sticky__action-btn {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.crs-sticky__action-btn span {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #dbdbdb;
  border-top: 0;
  color: #1e3851;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 127.273% */
}

.crs-sticky__action-btn span::before {
  flex-shrink: 0;
  content: '';
  width: 10px;
  height: 6px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9 5L5.00001 1.00001L1 5" stroke="%231E3851" stroke-width="1.80645" stroke-linecap="round" stroke-linejoin="round"/></svg>');
}
.crs-sticky__content {
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.crs-sticky__product-img {
  border-radius: 6px;
  background: lightgray 50% / cover no-repeat;
}

.crs-sticky__product {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .crs-sticky__product {
    flex: 2;
    justify-content: space-between;
    flex-direction: row;
  }
}
.crs-sticky__product-name {
  overflow: hidden;
  color: #1e3851;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-transform: capitalize;
}

@media (min-width: 768px) {
  .crs-sticky__product-name {
    font-size: 22px;
  }
}
.crs-sticky__product-price .current {
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}

@media (min-width: 768px) {
  .crs-sticky__product-price .current {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
  }
}

.crs-sticky__product-price .old {
  display: none;
}

@media (min-width: 768px) {
  .crs-sticky__product-price {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .crs-sticky__product-price .old {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .crs-sticky__product-price .compare {
    color: #939393;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    text-decoration-line: line-through;
  }

  .crs-sticky__product-price .save {
    padding: 4px;
    border-radius: 2px;
    background: #e00d46;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    white-space: nowrap;
  }
}

.crs-sticky__atb {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 84px;
  padding: 8px;
  border-radius: 8px;
  background: #f89201;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
}

.crs-sticky__atb::before {
  flex-shrink: 0;
  content: '';
  width: 17px;
  height: 19px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none"><path d="M1.70837 1.23077H3.35577C3.93073 1.23077 4.21822 1.23077 4.44669 1.36076C4.5409 1.41437 4.62625 1.48312 4.69951 1.56441C4.87715 1.76155 4.94689 2.04929 5.08633 2.62475L5.27036 3.38418C5.37278 3.80687 5.424 4.01822 5.50306 4.19552C5.77747 4.81103 6.32395 5.25122 6.96931 5.3766C7.15521 5.41272 7.36638 5.41272 7.7887 5.41272" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M15.8949 14.8221H5.30592C5.15777 14.8221 5.0837 14.8221 5.0275 14.8156C4.43204 14.7468 4.02413 14.1629 4.14919 13.5584C4.16098 13.5014 4.18441 13.4289 4.23126 13.2839C4.28327 13.1229 4.30928 13.0424 4.33802 12.9714C4.63219 12.2441 5.29768 11.7492 6.05945 11.6913C6.13385 11.6856 6.2161 11.6856 6.38059 11.6856H11.8414" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.3788 11.6856H8.77761C7.54542 11.6856 6.92931 11.6856 6.45409 11.3977C6.25339 11.2761 6.07449 11.1198 5.92524 10.9355C5.57183 10.4992 5.47054 9.87227 5.26798 8.61841C5.06273 7.34784 4.9601 6.71257 5.20373 6.24204C5.30543 6.04561 5.44653 5.87378 5.61761 5.738C6.02743 5.41272 6.65168 5.41272 7.90022 5.41272H14.6447C16.1145 5.41272 16.8494 5.41272 17.1465 5.90856C17.4435 6.4044 17.1148 7.08253 16.4576 8.43879L16.0044 9.37396C15.4592 10.4987 15.1867 11.0611 14.6969 11.3733C14.2071 11.6856 13.5977 11.6856 12.3788 11.6856Z" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M14.8824 19.0048C15.4421 19.0048 15.8958 18.5366 15.8958 17.9593C15.8958 17.3819 15.4421 16.9138 14.8824 16.9138C14.3227 16.9138 13.869 17.3819 13.869 17.9593C13.869 18.5366 14.3227 19.0048 14.8824 19.0048Z" fill="white"/><path d="M6.77523 19.0048C7.33491 19.0048 7.78862 18.5366 7.78862 17.9593C7.78862 17.3819 7.33491 16.9138 6.77523 16.9138C6.21555 16.9138 5.76184 17.3819 5.76184 17.9593C5.76184 18.5366 6.21555 19.0048 6.77523 19.0048Z" fill="white"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.crs-sticky__cta {
  display: flex;
  gap: 12px;
}

.crs-sticky__cta .crs-sticky__action-btn {
  display: none;
}


@media (min-width: 768px) {
  .crs-sticky__cta {
    flex: 1;
    margin-left: 20px;
  }
  .crs-sticky__cta .crs-sticky__atb {
    justify-content: center;
    height: 52px;
    max-width: max-content;
    width: max-content;
    white-space: nowrap;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    padding-inline: 36px;
  }

  .crs-sticky__cta .crs-sticky__atb::before {
    width: 24px;
    height: 24px;
  }
  .crs-sticky__cta .crs-sticky__action-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 52px;
    max-width: max-content;
    padding-inline: 16px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    color: #1e3851;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    white-space: nowrap;
  }

  .crs-sticky__cta .crs-sticky__action-btn::after {
    flex-shrink: 0;
    content: '';
    width: 15px;
    height: 8px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 10 6" fill="none"><path d="M9 5L5.00001 1.00001L1 5" stroke="%231E3851" stroke-width="1.80645" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }
}

@media (min-width: 1100px) {
  .crs-sticky__cta {
    margin-left: 55px;
  }
}
`;
  class E {
    constructor() {
      this.sticky = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.fillProductData(), this.eventListeners(), this.showSticky();
    }
    render() {
      u(".productGalleryLightbox li img").then((i) => {
        var a, l, h, g;
        const n = (a = document.querySelector("section.product-details p.leading-normal ")) == null ? void 0 : a.textContent, e = (l = document.querySelector('td[x-text="calculation.total"]')) == null ? void 0 : l.textContent, t = (h = document.querySelector(".price-pro div:nth-child(2) > div:first-child")) == null ? void 0 : h.textContent, o = (g = document.querySelector(".price-pro div:nth-child(2) > div:last-child")) == null ? void 0 : g.textContent, s = i, r = (
          /* HTML */
          `
        <div class="crs-sticky">
          <div class="crs-sticky__inner ">
            <div class="crs-sticky__action crs-sticky__action--mobile">
              <button class="crs-sticky__action-btn" data-button="to-options"><span>Choose options</span></button>
            </div>
            <div class="crs-sticky__content">
              <img
                class="crs-sticky__product-img"
                src="${s.src}"
                alt="${s.alt}"
                width="85"
                height="60"
              />
              <div class="crs-sticky__product">
                <div class="crs-sticky__product-name">${n}</div>
                <div class="crs-sticky__product-price">
                  <span class="current">${e}</span>
                  <div class="old">
                    <span class="compare">${t}</span>
                    <span class="save">${o}</span>
                  </div>
                </div>
              </div>
              <div class="crs-sticky__cta">
                <button class="crs-sticky__atb" data-button="add-to-basket">Add to Basket</button>
                <button class="crs-sticky__action-btn" data-button="to-options">Choose Options</button>
              </div>
            </div>
          </div>
        </div>
      `
        );
        document.body.insertAdjacentHTML("beforeend", r);
        const d = document.querySelector(".crs-sticky");
        d && (this.sticky = d);
      });
    }
    showSticky() {
      u(".product-details .footer-add-cart button").then((i) => {
        const n = i;
        n && new IntersectionObserver(
          (t) => {
            t.forEach((o) => {
              var r, d;
              const s = o.boundingClientRect;
              !o.isIntersecting && s.top < 0 ? (r = this.sticky) == null || r.classList.add("crs-sticky--show") : (d = this.sticky) == null || d.classList.remove("crs-sticky--show");
            });
          },
          { threshold: 0.5 }
        ).observe(n);
      });
    }
    eventListeners() {
      u('[data-button="to-options"]').then((i) => {
        document.querySelectorAll('[data-button="to-options"]').forEach((e) => {
          e.addEventListener("click", () => {
            const t = document.querySelector(".shopify-product-form");
            t && (_("exp_pdp_imp__options_sticky", "Choose options", "click", "Sticky section"), t.scrollIntoView({ behavior: "smooth" }));
          });
        });
      }), u('[data-button="add-to-basket"]').then((i) => {
        i.addEventListener("click", () => {
          const e = document.querySelector(".footer-add-cart button");
          e && (e.click(), _("exp_pdp_imp__add_sticky", "Add to Basket", "click", "Sticky section"));
        });
      });
    }
    fillProductData() {
      const i = { attributes: !0, childList: !0, subtree: !0 }, n = new MutationObserver((t) => {
        t.forEach((o) => {
          var r;
          if (o.target.classList.contains("product-img")) {
            const d = document.querySelector(".productGalleryLightbox li img"), a = (r = this.sticky) == null ? void 0 : r.querySelector(".crs-sticky__product-img");
            a && (a.setAttribute("src", (d == null ? void 0 : d.getAttribute("src")) || ""), a.setAttribute("alt", (d == null ? void 0 : d.getAttribute("alt")) || ""));
          }
        });
      });
      u(".productGalleryLightbox").then((t) => {
        n.observe(t, i);
      });
      const e = new MutationObserver((t) => {
        t.forEach((o) => {
          var r, d, a, l, h, g;
          if (o.target.getAttribute("x-text") === "calculation.total") {
            const c = (r = document.querySelector("section.price-pro > div")) == null ? void 0 : r.textContent, p = (d = document.querySelector(".price-pro div:nth-child(2) > div:first-child")) == null ? void 0 : d.textContent, m = (a = document.querySelector(".price-pro div:nth-child(2) > div:last-child")) == null ? void 0 : a.textContent, x = (l = this.sticky) == null ? void 0 : l.querySelector(".crs-sticky__product-price .current"), f = (h = this.sticky) == null ? void 0 : h.querySelector(".crs-sticky__product-price .compare"), v = (g = this.sticky) == null ? void 0 : g.querySelector(".crs-sticky__product-price .save");
            x && c && (x.textContent = c, f && p && v && m && (f.textContent = p, v.textContent = m));
          }
        });
      });
      u('td[x-text="calculation.total"]').then((t) => {
        e.observe(t, i);
      });
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = D, document.head.appendChild(i);
    }
  }
  const H = `@media (min-width: 768px) {
  .variant-switch-items ul li.lg\\:block.hidden {
    display: none;
  }

  div:has(> [x-text='selectedProduct']):has(strong) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    cursor: pointer;
  }

  div:has(> [x-text='selectedProduct']):has(strong)::after {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    content: '';
    width: 8px;
    height: 14px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1.42749 12.5252L7.07265 6.88005L1.42749 1.23486" stroke="%231E3851" stroke-width="1.80645" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    background-repeat: no-repeat;
    background-size: contain;
  }

  div:has(> [x-text='selectedProduct']) strong {
    color: #1e3851;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
  }

  [x-text='selectedProduct'] {
    padding: 0;
    color: #1e3851;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-transform: capitalize;
  }
}

.crs-variant-dialog__content.crs-color {
  max-height: 470px;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .crs-variant-dialog__content.crs-color {
    max-height: calc(100dvh - 120px);
  }
}

.crs-color__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.crs-color__item {
  position: relative;
  display: grid;
  justify-content: center;
  gap: 4.5px;
  width: 100%;
  max-width: 102px;
  padding-bottom: 7px;
  border-radius: 6px;
  border: 1px solid #dbdbdb;
  overflow: hidden;
  cursor: pointer;
}

.crs-color__item--selected {
  border: 2px solid #3589da;
}

.crs-color__item span {
  color: #374151;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
}

.crs-colors--desktop ul li {
  width: 86px;
  height: 115px;
}

@media (min-width: 768px) {
  .crs-colors--desktop ul li {
    width: 97px;
    height: 102px;
  }
}
`;
  class A {
    constructor() {
      this.dialog = null, this.device = window.innerWidth < 768 ? k.mobile : k.desktop, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.eventListeners(), this.closeDialog(), this.showHiddenColorsOnDesktop(), this.addMouseDragScroll();
    }
    render() {
      document.body.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
      <dialog id="variant-color-products-dialog" class="crs-variant-dialog">
        <div class="crs-variant-dialog__wrapper">
          <button
            class="crs-variant-dialog__close"
            id="variant-color-products-close"
            type="button"
            aria-label="close"
          ></button>
          <div class="crs-variant-dialog__header">
            <h3 class="crs-variant-dialog__title">Choose color</h3>
          </div>
          <div class="crs-variant-dialog__content crs-color" id="variant-color-products-dialog-content">
            <ul class="crs-color__list" id="variant-color-products-dialog-list"></ul>
          </div>
        </div>
      </dialog>
    `
      );
      const n = document.querySelector("#variant-color-products-dialog");
      n && (this.dialog = n);
    }
    toggleColors() {
      u('[x-text="getColorName(product)"]').then((i) => {
        document.querySelector('[x-text="getColorName(product)]');
        const n = i.closest("ul");
        if (n) {
          const e = document.querySelector("#variant-color-products-dialog-list");
          if (!e)
            return;
          n.querySelectorAll("li").forEach((o) => {
            const s = o.querySelector("img"), r = o.querySelector("span:last-child"), a = (
              /* HTML */
              `
            <li class="crs-color__item ${o.classList.contains("border-tertiary") ? "crs-color__item--selected" : ""}">
              <img src="${s.src}" alt="${r.textContent}" width="97" height="67" loading="lazy" />
              <span>${r.textContent}</span>
            </li>
          `
            );
            e.insertAdjacentHTML("beforeend", a);
          });
        }
      });
    }
    eventListeners() {
      if (u(".crs-color__item").then((i) => {
        const n = document.querySelector("#variant-color-products-dialog-list");
        n && n.addEventListener("click", (e) => {
          var s;
          const o = e.target.closest(".crs-color__item");
          if (o) {
            const r = (s = o.querySelector("span")) == null ? void 0 : s.textContent;
            if (!r)
              return;
            document.querySelectorAll('[x-text="getColorName(product)"]').forEach((a) => {
              if (a.textContent === r) {
                const l = a.closest("li");
                if (l) {
                  l.click();
                  const h = document.querySelector(".crs-color__item--selected");
                  h == null || h.classList.remove("crs-color__item--selected"), o.classList.add("crs-color__item--selected"), setTimeout(() => {
                    var g;
                    (g = this.dialog) == null || g.close();
                  }, 100);
                }
              }
            });
          }
        });
      }), this.dialog) {
        const i = document.querySelector("#variant-color-products-close");
        i == null || i.addEventListener("click", () => {
          this.closeDialog();
        }), this.dialog.addEventListener("click", (n) => {
          n.target === this.dialog && this.closeDialog();
        });
      }
    }
    addMouseDragScroll() {
      this.device !== k.mobile && u(".crs-colors--desktop ul").then((i) => {
        const n = i;
        let e = !1, t, o;
        n.addEventListener("mousedown", (s) => {
          e = !0, t = s.pageX - n.offsetLeft, o = n.scrollLeft;
        }), n.addEventListener("mouseleave", () => {
          e = !1;
        }), n.addEventListener("mouseup", () => {
          e = !1;
        }), n.addEventListener("mousemove", (s) => {
          if (!e)
            return;
          s.preventDefault();
          const d = (s.pageX - n.offsetLeft - t) * 1;
          n.scrollLeft = o - d;
        });
      });
    }
    showHiddenColorsOnDesktop() {
      u(".shopify-product-form .lg\\:hidden:has(strong)").then((i) => {
        const n = i;
        document.querySelector(".shopify-product-form .lg\\:hidden:has(strong)"), n && (n.classList.remove("lg:hidden"), n.classList.add("crs-colors--desktop"));
      });
    }
    openDialog() {
      !this.dialog || this.device === k.mobile || (this.toggleColors(), this.dialog.showModal(), document.body.classList.add("is-dialog-open"), document.body.style.position = "fixed", document.body.style.top = `-${window.scrollY}px`);
    }
    closeDialog() {
      var n;
      (n = this.dialog) == null || n.classList.add("closing"), setTimeout(() => {
        var e, t;
        (e = this.dialog) == null || e.close(), (t = this.dialog) == null || t.classList.remove("closing");
      }, 500), document.body.classList.remove("is-dialog-open");
      const i = document.body.style.top;
      document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, parseInt(i || "0") * -1);
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = H, document.head.appendChild(i);
    }
  }
  const L = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 18 18"
  fill="none"
>
  <path
    d="M13.2889 2.68926C13.4223 2.58251 13.5 2.4209 13.5 2.25002C13.5 2.07914 13.4223 1.91753 13.2889 1.81078L11.8826 0.685783C11.6401 0.491715 11.2861 0.531045 11.092 0.773629C10.8979 1.01622 10.9373 1.37019 11.1799 1.56426L11.3339 1.68752H2.72856L2.88264 1.56426C3.12522 1.37019 3.16457 1.01622 2.97048 0.773629C2.77642 0.531045 2.42244 0.491715 2.17986 0.68578L0.773609 1.81078C0.640176 1.91753 0.5625 2.07914 0.5625 2.25002C0.5625 2.4209 0.640176 2.58251 0.773609 2.68926L2.17986 3.81427C2.42244 4.00834 2.77642 3.96899 2.97048 3.72641C3.16457 3.48383 3.12522 3.12985 2.88264 2.93579L2.72856 2.81252H11.3339L11.1799 2.93579C10.9373 3.12985 10.8979 3.48383 11.092 3.72641C11.2861 3.96899 11.6401 4.00834 11.8826 3.81427L13.2889 2.68926Z"
    fill="#1E3851"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.5 6.75003C13.5 5.81805 12.7445 5.06253 11.8125 5.06253H2.25C1.31802 5.06253 0.5625 5.81805 0.5625 6.75003V15.75C0.5625 16.682 1.31802 17.4375 2.25 17.4375H11.8125C12.7445 17.4375 13.5 16.682 13.5 15.75V6.75003ZM11.8125 6.18753C12.1232 6.18753 12.375 6.43936 12.375 6.75003V15.75C12.375 16.0607 12.1232 16.3125 11.8125 16.3125H2.25C1.93934 16.3125 1.6875 16.0607 1.6875 15.75V6.75003C1.6875 6.43936 1.93934 6.18753 2.25 6.18753H5.0625V8.43753C5.0625 8.7482 5.31433 9.00003 5.625 9.00003H8.4375C8.74817 9.00003 9 8.7482 9 8.43753V6.18753H11.8125ZM7.875 6.18753H6.1875V7.87503H7.875V6.18753Z"
    fill="#1E3851"
  />
  <path
    d="M15.75 5.06253C15.9209 5.06253 16.0825 5.14021 16.1893 5.27364L17.3143 6.67989C17.5083 6.92247 17.469 7.27645 17.2264 7.47054C16.9838 7.6646 16.6299 7.62525 16.4358 7.38267L16.3125 7.22861V15.2715L16.4358 15.1174C16.6299 14.8748 16.9838 14.8355 17.2264 15.0296C17.469 15.2236 17.5083 15.5776 17.3143 15.8202L16.1893 17.2264C16.0825 17.3598 15.9209 17.4375 15.75 17.4375C15.5791 17.4375 15.4175 17.3598 15.3108 17.2264L14.1858 15.8202C13.9917 15.5776 14.0311 15.2236 14.2736 15.0296C14.5162 14.8355 14.8702 14.8748 15.0643 15.1174L15.1875 15.2715V7.22861L15.0643 7.38267C14.8702 7.62525 14.5162 7.6646 14.2736 7.47054C14.0311 7.27645 13.9917 6.92247 14.1858 6.67989L15.3108 5.27364C15.4175 5.14021 15.5791 5.06253 15.75 5.06253Z"
    fill="#1E3851"
  />
</svg>  `
  ), $ = `.variant-switch {
  padding-bottom: 0;
}

.variant-switch .variant-switch-products {
  display: none;
}

.variant-switch :is([x-show="selectedOption == 'Size'"], [x-show="selectedOption == 'Storage'"]),
[x-show="selectedOption == 'Base'"] {
  display: none;
}
.crs-variant-dialog {
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  border-radius: 12px 12px 0px 0px;
  overflow: hidden;
  background: #fff;
  z-index: 99999;
  animation: fadeInUp 0.5s ease-out;
}

@media (min-width: 768px) {
  .crs-variant-dialog {
    top: 0;
    right: 0;
    left: auto;
    bottom: auto;
    width: 448px;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
    animation: fadeInRight 0.5s ease-out;
  }
}

.crs-variant-dialog__basetype-action {
  display: none;
}

.crs-variant-dialog.closing {
  animation: fadeOutDown 0.5s ease-out forwards;
}

@media (min-width: 768px) {
  .crs-variant-dialog.closing {
    animation: fadeOutLeft 0.5s ease-out forwards;
  }
}

.variant-switch-items ul li {
  position: relative;
}

.variant-switch-items ul li:hover {
  background: #fff;
}
.variant-switch-items ul li::after {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  content: '';
  width: 8px;
  height: 14px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1.42749 12.5252L7.07265 6.88005L1.42749 1.23486" stroke="%231E3851" stroke-width="1.80645" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
}

.crs-variant-dialog::backdrop {
  background: rgba(30, 56, 81, 0.7);
}

.crs-variant-dialog__close {
  margin-left: auto;
  display: flex;
  width: 24px;
  aspect-ratio: 1 / 1;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(%23clip0_167_12852)"><path d="M18.3007 5.70875C17.9107 5.31875 17.2807 5.31875 16.8907 5.70875L12.0007 10.5888L7.1107 5.69875C6.7207 5.30875 6.0907 5.30875 5.7007 5.69875C5.3107 6.08875 5.3107 6.71875 5.7007 7.10875L10.5907 11.9988L5.7007 16.8887C5.3107 17.2787 5.3107 17.9087 5.7007 18.2987C6.0907 18.6887 6.7207 18.6887 7.1107 18.2987L12.0007 13.4087L16.8907 18.2987C17.2807 18.6887 17.9107 18.6887 18.3007 18.2987C18.6907 17.9087 18.6907 17.2787 18.3007 16.8887L13.4107 11.9988L18.3007 7.10875C18.6807 6.72875 18.6807 6.08875 18.3007 5.70875Z" fill="%231E3851"/></g><defs><clipPath id="clip0_167_12852"><rect width="24" height="24" rx="12" fill="white"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.crs-variant-dialog__wrapper {
  padding: 14px;
}

@media (min-width: 768px) {
  .crs-variant-dialog__wrapper {
    padding-inline: 24px;
  }
}

.crs-variant-dialog__header {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .crs-variant-dialog__header {
    margin-top: 18px;
  }
}

.crs-variant-dialog__title {
  color: #1e3851;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}

.crs-variant-dialog__dimension-btn {
  display: none;
  align-items: center;
  gap: 8px;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

[data-variant='size'] [data-button='size-dimension'] {
  display: flex;
}

[data-variant='storage'] [data-button='storage-dimension'] {
  display: flex;
}

.crs-variant-dialog__content {
  margin-top: 14px;
}

.crs-variant-dialog__content .max-h-\\[360px\\] {
  max-height: 75dvh;
}

.crs-variant-dialog .variant-switch-products {
  margin-top: 14px;
  padding: 0;
}

@media (min-width: 768px) {
  .crs-variant-dialog .variant-switch-products {
    height: 100%;
    max-height: 100%;
  }
}
.crs-variant-dialog .variant-switch-products > ul {
  margin: 0;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .crs-variant-dialog .variant-switch-products > ul {
    padding: 0;
  }
}

.crs-variant-dialog .variant-switch-products > ul li > div {
  display: grid;
  grid-template-columns: 72px 1fr;
  column-gap: 12px;
  min-height: 88px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
}

@media (min-width: 768px) {
  .crs-variant-dialog .variant-switch-products > ul li > div {
    max-height: 88px;
  }
}

.crs-variant-dialog .variant-switch-products > ul li > div.border-tertiary {
  border: 2px solid #3589da;
}

.crs-variant-dialog .variant-switch-products > ul li .custom-svg-icon-height {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 68px;
  height: 100%;
}

.crs-variant-dialog .variant-switch-products > ul li .custom-svg-icon-height .product-svg-size {
  width: 100% !important;
  height: auto !important;
  max-height: 62.5px;
}

.crs-variant-dialog .variant-switch-products ul li .h-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
  height: auto;
}

.crs-variant-dialog .variant-switch-products ul li [x-text='item.value'] {
  margin: 0;
  color: #1e3851;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
}

.crs-variant-dialog .variant-switch-products ul li .crs-item-dimensional {
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  pointer-events: none;
  user-select: none;
}

.crs-variant-dialog .variant-switch-products ul li [x-text='item.value'] + div {
  margin: 0;
  color: #1e3851;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap;
}

[x-show='slideOverDimension'] .w-screen,
[x-show='slideOverOpen'].w-screen {
  position: relative;
}
.w-screen:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  > div {
  padding: 14px;
}

@media (min-width: 768px) {
  .w-screen:is(
      [x-show='slideOverDimension'],
      [x-show='slideOverOpen'],
      [x-show='slideOverOpenSide'],
      [x-show='showDivanModal'],
      [x-show='detailsMattress']
    )
    > div {
    padding-inline: 24px;
  }
}
:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  ):is(.bg-black\\/60, .bg-black\\/20) {
  background: rgba(30, 56, 81, 0.7);
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  .bg-black {
  background: rgba(30, 56, 81, 0.5);
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  button.absolute.left-12 {
  left: 0;
  margin: 0;
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  button.absolute.right-0 {
  position: static;
  display: flex;
  margin: 0;
  margin-left: auto;
  width: 24px;
  aspect-ratio: 1 / 1;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(%23clip0_167_12852)"><path d="M18.3007 5.70875C17.9107 5.31875 17.2807 5.31875 16.8907 5.70875L12.0007 10.5888L7.1107 5.69875C6.7207 5.30875 6.0907 5.30875 5.7007 5.69875C5.3107 6.08875 5.3107 6.71875 5.7007 7.10875L10.5907 11.9988L5.7007 16.8887C5.3107 17.2787 5.3107 17.9087 5.7007 18.2987C6.0907 18.6887 6.7207 18.6887 7.1107 18.2987L12.0007 13.4087L16.8907 18.2987C17.2807 18.6887 17.9107 18.6887 18.3007 18.2987C18.6907 17.9087 18.6907 17.2787 18.3007 16.8887L13.4107 11.9988L18.3007 7.10875C18.6807 6.72875 18.6807 6.08875 18.3007 5.70875Z" fill="%231E3851"/></g><defs><clipPath id="clip0_167_12852"><rect width="24" height="24" rx="12" fill="white"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  .px-4:has(button.absolute)
  > div {
  position: relative;
  justify-content: flex-end;
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  .px-4:has(button.absolute) {
  padding: 0;
}
@media (min-width: 768px) {
  :is(
      [x-show='slideOverDimension'],
      [x-show='slideOverOpen'],
      [x-show='slideOverOpenSide'],
      [x-show='showDivanModal'],
      [x-show='detailsMattress']
    )
    .px-4:has(button.absolute) {
    padding-inline: 0;
  }
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  button.absolute.right-0
  svg {
  display: none;
}

:is([x-show='slideOverDimension'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) .absolute.mt-12 {
  margin-top: 14px;
  padding: 0;
}

@media (min-width: 768px) {
  :is([x-show='slideOverDimension'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) .absolute.mt-12 {
    padding: 0;
  }
}
:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  h3 {
  position: sticky;
  top: 0;
  padding-bottom: 14px;
  background: #fff;
  color: #1e3851;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  h3
  + p {
  margin-top: 0;
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  .overflow-y-scroll {
  padding: 0;
}
@media (min-width: 768px) {
  :is(
      [x-show='slideOverDimension'],
      [x-show='slideOverOpen'],
      [x-show='slideOverOpenSide'],
      [x-show='showDivanModal'],
      [x-show='detailsMattress']
    )
    .overflow-y-scroll {
    padding: 14px 24px;
    overflow: hidden;
  }
}

:is(
    [x-show='slideOverDimension'],
    [x-show='slideOverOpen'],
    [x-show='slideOverOpenSide'],
    [x-show='showDivanModal'],
    [x-show='detailsMattress']
  )
  .h-full
  > .px-6 {
  padding: 0;
  padding-right: 5px;
}
[x-show='detailsMattress'] .overflow-auto {
  padding-right: 5px;
}
.fixed.max-h-\\[70\\%\\]:has(
    :is(
        [x-show='slideOverDimension'],
        [x-show='slideOverOpen'],
        [x-show='slideOverOpenSide'],
        [x-show='showDivanModal']
      )
  ) {
  max-height: 80dvh;
}

[x-show='slideOverOpenSide'] .relative.overflow-hidden {
  overflow-y: auto;
  padding-right: 5px;
}

:is([x-show='slideOverOpen'], [x-show='detailsMattress']) .relative.flex-1.mt-12 {
  margin-top: 14px;
}

[x-show='slideOverOpen'] .absolute.sm\\:px-6 {
  padding: 0;
}

[x-show='detailsMattress'] :is(.h3, .mattress-details) {
  padding: 0;
}
[x-show='detailsMattress'] div:has(> .image) {
  margin: 0 !important;
}
[x-show='detailsMattress'] .image {
  margin: 0;
}

[x-show='slideOverOpenSide'] .card-button button {
  display: none;
}
.crs-dimension__back,
.crs-open__back {
  position: absolute;
  top: 14px;
  left: 14px;
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none"><path d="M0.649684 8.17433L7.21219 14.7368C7.389 14.9076 7.62582 15.0021 7.87162 15C8.11743 14.9978 8.35257 14.8992 8.52639 14.7254C8.70021 14.5516 8.79881 14.3165 8.80094 14.0706C8.80308 13.8248 8.70858 13.588 8.53781 13.4112L3.57562 8.44902L20.0625 8.44902C20.3111 8.44902 20.5496 8.35025 20.7254 8.17443C20.9012 7.99862 21 7.76016 21 7.51152C21 7.26288 20.9012 7.02442 20.7254 6.84861C20.5496 6.67279 20.3111 6.57402 20.0625 6.57402L3.57562 6.57402L8.53781 1.61183C8.62735 1.52535 8.69877 1.4219 8.74791 1.30752C8.79704 1.19315 8.8229 1.07013 8.82398 0.945647C8.82507 0.821166 8.80134 0.697718 8.75421 0.582502C8.70707 0.467287 8.63745 0.362613 8.54943 0.274589C8.46141 0.186565 8.35673 0.116951 8.24152 0.0698129C8.1263 0.0226747 8.00285 -0.001046 7.87837 3.64331e-05C7.75389 0.00111791 7.63087 0.0269806 7.51649 0.0761139C7.40212 0.125247 7.29867 0.196667 7.21219 0.286208L0.649684 6.84871C0.473932 7.02452 0.375198 7.26293 0.375198 7.51152C0.375198 7.76011 0.473932 7.99853 0.649684 8.17433Z" fill="%231E3851"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 15px;
  z-index: 9999;
}

[data-variant='headboard'] div > hr {
  display: none;
}

[data-variant='headboard'] div :has(> hr) > div > .text-primary {
  margin-top: 16px;
  color: #1e3851;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
}

[data-variant='headboard'] div :has(> hr) > ul {
  margin-top: 12px;
}

[data-variant='headboard'] div :has(> hr) > ul li > .border-tertiary {
  padding-right: 8px;
  border: 2px solid #3589da;
  background: #fff;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

[data-variant='headboard'] div :has(> hr) > ul li > .border-tertiary :is(.border-btn, .border-tertiary) {
  border: none;
  background-color: #fff;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
}

[data-variant='headboard'] div :has(> hr) > ul li > .border-transparent {
  border: 1px solid #dbdbdb;
}

[data-variant='headboard'] div :has(> hr) > ul li > .border-transparent :is(.border-btn, .border-tertiary) {
  border: none;
  background-color: #fff;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
}

[data-variant='headboard'] div :has(> hr) > ul li > .border-tertiary::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 8C0.25 6.01088 1.04018 4.10322 2.4467 2.6967C3.85322 1.29018 5.76088 0.5 7.75 0.5C9.73912 0.5 11.6468 1.29018 13.0533 2.6967C14.4598 4.10322 15.25 6.01088 15.25 8C15.25 9.98912 14.4598 11.8968 13.0533 13.3033C11.6468 14.7098 9.73912 15.5 7.75 15.5C5.76088 15.5 3.85322 14.7098 2.4467 13.3033C1.04018 11.8968 0.25 9.98912 0.25 8ZM7.322 11.21L11.64 5.812L10.86 5.188L7.178 9.789L4.57 7.616L3.93 8.384L7.322 11.21Z" fill="%233589DA"/></svg>');
}

div:has(> .crs-headboard__save) ul {
  display: flex;
  padding: 0;
}

.crs-headboard__save {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  border-radius: 8px;
  background: #3589da;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
}

[data-variant='baseType'] .variant-switch-products ul {
  gap: 16px;
}

[data-variant='baseType'] .variant-switch-products ul li > div {
  margin-top: 0;
  grid-template-columns: 72px 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  background-color: #fff;
  color: #1e3851;
}

[data-variant='baseType'] .variant-switch-products ul li > div svg {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

[data-variant='baseType'] .variant-switch-products ul li > div span:first-child {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  color: #1e3851;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
}

[data-variant='baseType'] .variant-switch-products ul li > div small {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: #374151;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
}

[data-variant='baseType'] .variant-switch-products ul li > div span:last-of-type {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  color: #1e3851;
  text-align: right;

  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}

[data-variant='baseType'] .crs-variant-dialog__basetype-action {
  display: flex;
  margin-top: 24px;
}

[data-variant='baseType'] .crs-variant-dialog__basetype-action button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: #1e3851;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

[data-variant='baseType'] .crs-variant-dialog__basetype-action button::before {
  content: '';
  width: 18px;
  height: 18px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none"><path d="M3.36868 6.0426C3.50597 5.39585 4.077 4.93331 4.73816 4.93331H14.2618C14.923 4.93331 15.494 5.39585 15.6313 6.04259L16.604 10.6246L17.4003 14.3759C17.5852 15.2467 16.9211 16.0666 16.0309 16.0666H2.96913C2.07893 16.0666 1.4148 15.2467 1.59965 14.3759L2.396 10.6246L3.36868 6.0426Z" stroke="%231E3851" stroke-width="1.2"/><circle cx="9.49984" cy="2.33333" r="1.73333" stroke="%231E3851" stroke-width="1.2"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-mattress--hidden {
  display: none;
}

@media (max-width: 1024px) {
  .variant-switch + div .card-addons:first-of-type {
    display: none;
  }
}

@media (min-width: 768px) {
  .crs-mattress-dialog > div {
    padding-inline: 24px !important;
  }

  .crs-mattress-dialog > div > div > div {
    justify-content: flex-end;
  }
}

.crs-mattress-dialog h3 {
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}

.crs-mattress-dialog div.absolute.mt-12:has(h3) {
  margin-top: 0;
  overflow: visible;
}

.crs-mattress-dialog .relative.px-4.sm\\:px-6 {
  margin-top: 18px;
}

.crs-mattress-dialog .absolute.inset-0.px-4.sm\\:px-6 {
  padding: 0;
}
.crs-mattress-dialog .ss-tabs {
  margin-block: 16px !important;
  overflow: hidden;
  overflow-x: auto;
  flex-wrap: nowrap;
}

.crs-mattress-dialog .ss-tabs {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.crs-mattress-dialog .ss-tabs::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.crs-mattress-dialog .ss-tabs li a:hover {
  color: inherit;
  background: inherit;
}

.crs-mattress-dialog .ss-tabs li a.active {
  background-color: rgb(30 56 81 / var(--tw-bg-opacity));
  color: #fff;
}
.crs-mattress-dialog .ss-tabs + div {
  margin: 0;
  height: calc(80dvh - 150px);
  padding: 0;
  padding-right: 5px;
  overflow: hidden;
  overflow-y: auto;
}

.crs-mattress-dialog .card-addons {
  position: relative;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background: #fff;
}

.crs-mattress-dialog .card-addons:nover {
  border: inherit;
}

.crs-mattress-dialog .image-card .absolute {
  display: none;
}

.crs-mattress-dialog .card-addons.crs-addon--active {
  border: 2px solid #3589da;
}

.crs-mattress-dialog .card-addons.crs-addon--active::after {
  content: '';
  position: absolute;
  top: 6px;
  right: 6px;
  width: 15px;
  height: 15px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 8C0.25 6.01088 1.04018 4.10322 2.4467 2.6967C3.85322 1.29018 5.76088 0.5 7.75 0.5C9.73912 0.5 11.6468 1.29018 13.0533 2.6967C14.4598 4.10322 15.25 6.01088 15.25 8C15.25 9.98912 14.4598 11.8968 13.0533 13.3033C11.6468 14.7098 9.73912 15.5 7.75 15.5C5.76088 15.5 3.85322 14.7098 2.4467 13.3033C1.04018 11.8968 0.25 9.98912 0.25 8ZM7.322 11.21L11.64 5.812L10.86 5.188L7.178 9.789L4.57 7.616L3.93 8.384L7.322 11.21Z" fill="%233589DA"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-mattress-dialog .card-addons .card-body {
  width: 100%;
}

@media (min-width: 768px) {
  .crs-mattress-dialog .card-addons.added .card-body .card-details.add-on .title-card {
    color: #1e3851;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
}
.crs-mattress-dialog .card-addons .card-body .card-details.add-on .card-pricing-details .price {
  align-items: flex-end;
  gap: 0;
}

.crs-mattress-dialog .card-addons.added .card-body .card-details.add-on .card-pricing-details .save-price .save {
  color: #e00d46;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  background: none;
  padding: 0;
}
.crs-mattress-dialog .card-addons .image-card {
  flex-shrink: 0;
  width: 72px !important;
  height: 72px !important;
}

.crs-mattress-dialog .card-addons.added .image-card img {
  width: 100% !important;
  height: 100% !important;
}
.crs-mattress-dialog .card-details {
  display: grid;
  grid-template-columns: 133px 1fr;
}

.crs-mattress-dialog .card-pricing-details {
  display: contents;
}

.crs-mattress-dialog .title-card {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.crs-mattress-dialog .price {
  flex-direction: column;
}
.crs-mattress-dialog .price label {
  order: 2;
  color: #1e3851;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 114.286% */
}

.crs-mattress-dialog .price span {
  color: #939393;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 166.667% */
  text-decoration-line: line-through;
}

.crs-mattress-dialog .save-price {
  margin-top: 6px !important;
  justify-content: space-between;
  grid-column: 1 / -1;
}

.crs-mattress-dialog .save-price > div {
  order: 2;
  color: #e00d46;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  background-color: transparent;
}

.crs-mattress-dialog .save-price > button {
  margin-top: auto;
  padding: 0 !important;
  color: #141414;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  text-transform: capitalize;
}

.crs-headboard-item {
  position: relative;
  display: flex !important;
  align-items: center;
  gap: 12px;
  padding: 12px;
  cursor: pointer;
}

.crs-headboard-item--active {
  border: 2px solid #3589da !important;
}

.crs-headboard-item--active::after {
  content: '';
  position: absolute;
  top: 6px;
  right: 6px;
  width: 15px;
  height: 15px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 8C0.25 6.01088 1.04018 4.10322 2.4467 2.6967C3.85322 1.29018 5.76088 0.5 7.75 0.5C9.73912 0.5 11.6468 1.29018 13.0533 2.6967C14.4598 4.10322 15.25 6.01088 15.25 8C15.25 9.98912 14.4598 11.8968 13.0533 13.3033C11.6468 14.7098 9.73912 15.5 7.75 15.5C5.76088 15.5 3.85322 14.7098 2.4467 13.3033C1.04018 11.8968 0.25 9.98912 0.25 8ZM7.322 11.21L11.64 5.812L10.86 5.188L7.178 9.789L4.57 7.616L3.93 8.384L7.322 11.21Z" fill="%233589DA"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-headboard-item__image svg {
  width: 72px !important;
  height: 50px !important;
}

.crs-headboard-item__title {
  color: #1e3851;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.crs-headboard-item__price {
  margin-left: auto;
  color: #1e3851;
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
  white-space: nowrap;
}

.crs-headboard-btn {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 9px;
  border: 1px solid #dbdbdb !important;
  border: none;
  background-color: #fff;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid #dbdbdb;

  background: #fff;
}

.crs-headboard-btn--active {
  border: 2px solid #3589da !important;
}

.crs-headboard-btn--active::after {
  content: '';

  width: 15px;
  height: 15px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 8C0.25 6.01088 1.04018 4.10322 2.4467 2.6967C3.85322 1.29018 5.76088 0.5 7.75 0.5C9.73912 0.5 11.6468 1.29018 13.0533 2.6967C14.4598 4.10322 15.25 6.01088 15.25 8C15.25 9.98912 14.4598 11.8968 13.0533 13.3033C11.6468 14.7098 9.73912 15.5 7.75 15.5C5.76088 15.5 3.85322 14.7098 2.4467 13.3033C1.04018 11.8968 0.25 9.98912 0.25 8ZM7.322 11.21L11.64 5.812L10.86 5.188L7.178 9.789L4.57 7.616L3.93 8.384L7.322 11.21Z" fill="%233589DA"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-name-dimensional {
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .crs-name-dimensional {
    display: flex;
    flex-direction: column;
    gap: 0 !important;
  }
}

:is(.crs-name-dimensional, .crs-name-storage, .crs-name-headboard, .crs-name-base) .price {
  color: #1e3851;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.crs-mattress-price {
  display: none;
}

:is(.crs-name-dimensional, .crs-name-storage, .crs-name-headboard, .crs-name-base) .price {
  display: block;
  position: absolute;
  top: 13px;
  right: 34px;
}

@media (max-width: 768px) {
  :is(.crs-name-dimensional, .crs-name-storage, .crs-name-headboard, .crs-name-base) .price {
    top: 16px;
    transform: translateY(0);
    font-size: 14px !important;
    right: 24px;
  }
}

.crs-mattress-price {
  display: flex;
  align-items: center !important;
  gap: 12px !important;
  position: absolute;
  top: 13px;

  right: 34px;
}

@media (max-width: 1000px) {
  .crs-mattress-price {
    flex-direction: column;
    align-items: flex-start !important;
    top: 6px;
    right: 24px;
    transform: translateY(0);
    gap: 0 !important;
  }
}

.crs-mattress-price .new {
  color: #1e3851 !important;
  text-align: right;
  font-family: Poppins;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 600 !important;
  line-height: 24px !important; /* 150% */
}

.crs-mattress-price .old {
  color: #939393 !important;
  text-align: right;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 10px !important;
  text-decoration-line: line-through;
}
@media (max-width: 768px) {
  .crs-mattress-price .new {
    font-size: 14px !important;
  }
  .crs-mattress-price .old {
    font-size: 10px !important;
  }
}

.price-pro:has(#variant-mattress) {
  display: none;
}
.crs-mattress-list {
  display: grid;
  gap: 16px;
}
.crs-mattress-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  min-height: 88px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
}

.crs-mattress-item[data-selected='true'] {
  border: 2px solid #3589da;
}

.crs-mattress-item__title {
  color: #1e3851;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.crs-mattress-item__size {
  position: relative;
  margin-top: 6px;
  color: #374151;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
}

.crs-mattress-size {
  margin-top: 35px;
  position: relative;
  padding-block: 16px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;
}

.crs-mattress-size::after {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  content: '';
  width: 8px;
  height: 14px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1.42749 12.5252L7.07265 6.88005L1.42749 1.23486" stroke="%231E3851" stroke-width="1.80645" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
}

.crs-mattress-size__label {
  color: #1e3851;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-transform: capitalize;
}

.crs-mattress-size__content {
  margin-top: 6px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 6px;
}

.crs-mattress-size__content-inner {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .crs-mattress-size__content-inner {
    flex-direction: row;
    gap: 6px;
  }
}
.crs-mattress-size__chosen,
.crs-mattress-size__size {
  color: #374151;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}
.crs-mattress-size__chosen {
  flex-shrink: 0;
  display: flex;
  gap: 6px;
}
.crs-mattress-size__size {
  width: 100%;
}
.crs-mattress-size__content::before {
  content: '';
  width: 18px;
  height: 18px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M15.25 9.87988C15.25 13.1936 12.5637 15.8799 9.25 15.8799C5.93629 15.8799 3.25 13.1936 3.25 9.87988C3.25 6.56617 5.93629 3.87988 9.25 3.87988C12.5637 3.87988 15.25 6.56617 15.25 9.87988Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9.86963C0.75 7.61529 1.64553 5.45328 3.23959 3.85922C4.83365 2.26517 6.99566 1.36963 9.25 1.36963C11.5043 1.36963 13.6663 2.26517 15.2604 3.85922C16.8545 5.45328 17.75 7.61529 17.75 9.86963C17.75 12.1239 16.8545 14.286 15.2604 15.88C13.6663 17.4741 11.5043 18.3696 9.25 18.3696C6.99566 18.3696 4.83365 17.4741 3.23959 15.88C1.64553 14.286 0.75 12.1239 0.75 9.86963ZM8.76493 13.5076L13.6587 7.3899L12.7747 6.6827L8.60173 11.8971L5.646 9.43443L4.92067 10.3048L8.76493 13.5076Z" fill="%233589DA"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@keyframes fadeInUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fadeOutDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

@keyframes fadeInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeOutLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
`, C = {
    size: {
      title: "Choose Size",
      button: {
        title: "View Dimensions",
        icon: L
      }
    },
    mattress: {
      title: "Choose Size"
    },
    storage: {
      title: "Choose Storage",
      button: {
        title: "View Dimensions",
        icon: L
      }
    },
    headboard: {
      title: "Choose Headboard"
    },
    baseType: {
      title: "Choose Base Type"
    }
  };
  class T {
    constructor() {
      this.dialog = null, this.device = window.innerWidth < 768 ? k.mobile : k.desktop, this.sizes = null, this.mattressSize = null, this.aborters = [], this.init();
    }
    init() {
      this.initStyles(), this.render(), this.getProductData(), this.eventListeners(), this.changeMattressDialog(), this.changeDimensionDialog(), this.changeOpenDialog(), this.changeBaseTypeDialog(), this.changePositionMattressItemOnDesktop(), this.addMattressChoosingOption(), this.renderSizeDimension(), this.mattressSizeDialog(), this.createMattressSizeSelect();
    }
    async getProductData() {
      try {
        const n = await (await fetch(`https://sonno.co.uk/${location.pathname}?sections=product-json`)).json(), e = n["product-json"].indexOf("{"), t = n["product-json"].lastIndexOf("}") + 1;
        if (e === -1 || t === 0) {
          console.error("JSON дані не знайдено");
          return;
        }
        const o = n["product-json"].substring(e, t), s = JSON.parse(o);
        if (!!document.querySelector("#variant-mattress")) {
          const a = JSON.parse(s.variants);
          this.mattressSize = a;
        }
        const d = JSON.parse(s.information_headboard).map((a) => {
          const l = a.data;
          return {
            size: a.size_by_beds,
            dimensions: {
              width: l.sizes_dimension[2],
              length: l.sizes_dimension[1],
              height: l.sizes_dimension[0]
            },
            headboard: a.headboard_type.split("&")[0]
          };
        });
        this.sizes = d;
      } catch (i) {
        console.error("Помилка розбору JSON:", i);
      }
    }
    render() {
      const i = (
        /* HTML */
        `
      <dialog id="variant-switch-products-dialog" class="crs-variant-dialog">
        <div class="crs-variant-dialog__wrapper">
          <button
            class="crs-variant-dialog__close"
            id="crs-variant-dialog-close"
            type="button"
            aria-label="close"
          ></button>
          <div class="crs-variant-dialog__header">
            <h3 class="crs-variant-dialog__title"></h3>
            <button class="crs-variant-dialog__dimension-btn" data-button="size-dimension">
              <span>${C.size.button.icon}</span><span>${C.size.button.title}</span>
            </button>
            <button class="crs-variant-dialog__dimension-btn" data-button="storage-dimension">
              <span>${C.storage.button.icon}</span><span>${C.storage.button.title}</span>
            </button>
          </div>
          <div class="crs-variant-dialog__content" id="crs-variant-dialog-content"></div>
          <div class="crs-variant-dialog__footer">
            <div class="crs-variant-dialog__basetype-action">
              <button data-button="basetype">Learn more about Base Types</button>
            </div>
          </div>
        </div>
      </dialog>
    `
      );
      document.body.insertAdjacentHTML("beforeend", i);
      const n = document.querySelector("#variant-switch-products-dialog");
      n && (this.dialog = n);
    }
    mattressSizeDialog() {
      u("#choose-mattress-size").then((i) => {
        i.addEventListener("click", () => {
          this.openDialog("mattress");
        });
      });
    }
    createMattressSizeSelect() {
      u("#variant-mattress").then((i) => {
        var r, d, a, l;
        const e = (d = (r = i.querySelector("option:checked")) == null ? void 0 : r.textContent) == null ? void 0 : d.trim(), t = (a = this.mattressSize) == null ? void 0 : a.find((h) => h.title === e);
        let o = "";
        t && (o = `&middot; ${t != null && t.length ? `L: ${t == null ? void 0 : t.length}` : ""} ${t != null && t.width ? `W: ${t == null ? void 0 : t.width}` : ""}`);
        const s = (
          /* HTML */
          `
        <div class="crs-mattress-size" id="choose-mattress-size">
          <div class="crs-mattress-size__label">Size</div>
          <div class="crs-mattress-size__content">
            <div class="crs-mattress-size__content-inner">
              <div class="crs-mattress-size__chosen">${e}</div>
              <div class="crs-mattress-size__size">${o}</div>
            </div>
          </div>
        </div>
      `
        );
        if ((l = i == null ? void 0 : i.closest(".price-pro")) == null || l.insertAdjacentHTML("afterend", s), !t) {
          const h = setInterval(() => {
            var g;
            if (this.mattressSize && this.mattressSize.length > 0) {
              clearInterval(h);
              const c = (g = this.mattressSize) == null ? void 0 : g.find((x) => x.title === e);
              let p = "";
              c && (p = `&middot; ${c != null && c.length ? `L: ${c == null ? void 0 : c.length}` : ""} ${c != null && c.width ? `W: ${c == null ? void 0 : c.width}` : ""}`);
              const m = document.querySelector(".crs-mattress-size__size");
              m && (m.innerHTML = p);
            }
          }, 500);
        }
      });
    }
    renderMattressSizeDialogContent() {
      u("#variant-mattress").then((i) => {
        var s;
        const n = i, e = document.querySelector('[data-variant="mattress"]');
        if (!e)
          return;
        const t = n.querySelectorAll("option"), o = e.querySelector("#crs-variant-dialog-content");
        if ((s = document.querySelector(".crs-mattress-list")) == null || s.remove(), o) {
          const r = (
            /* HTML */
            `
          <ul class="crs-mattress-list">
            ${Array.from(t).map((a) => {
              var p, m;
              if (!a.value)
                return "";
              const l = (p = a.textContent) == null ? void 0 : p.trim(), h = a.value, g = a.selected, c = (m = this.mattressSize) == null ? void 0 : m.find((x) => x.title === l);
              return (
                /* HTML */
                `
                  <li class="crs-mattress-item" data-value="${h}" data-selected="${g}">
                    <div class="crs-mattress-item__content">
                      <div class="crs-mattress-item__title">${l}</div>
                      <div class="crs-mattress-item__size">
                        ${c != null && c.length ? `L: ${c == null ? void 0 : c.length}` : ""} ${c != null && c.width ? `W: ${c == null ? void 0 : c.width}` : ""}
                      </div>
                    </div>
                  </li>
                `
              );
            }).join("")}
          </ul>
        `
          );
          o.innerHTML = r;
          const d = o.querySelector(".crs-mattress-list");
          d == null || d.addEventListener("click", (a) => {
            var h, g;
            const l = a.target;
            if (l.closest("li")) {
              const c = l.closest("li"), p = d.querySelectorAll(".crs-mattress-item"), m = c.getAttribute("data-value"), x = (h = c.querySelector(".crs-mattress-item__title")) == null ? void 0 : h.textContent, f = (g = c.querySelector(".crs-mattress-item__size")) == null ? void 0 : g.textContent;
              p.forEach((y) => {
                y.setAttribute("data-selected", "false");
              }), c.setAttribute("data-selected", "true"), t.forEach((y) => {
                y.value === m && (y.selected = !0);
              });
              const v = document.querySelector(".crs-mattress-size__chosen"), w = document.querySelector(".crs-mattress-size__size");
              w && f && (w.innerHTML = "&middot; " + f), v && x && (v.textContent = x), _("exp_pdp_imp__popup_option", `${x}`, "click", "Choose size"), this.closeDialog();
            }
          });
        }
      });
    }
    toggleSwitchProducts(i) {
      var s;
      const n = document.querySelector(".variant-switch-products"), e = document.querySelector(".variant-switch-items"), t = document.querySelector("#crs-variant-dialog-content"), o = new AbortController();
      (s = this.aborters) == null || s.push(o), !(!n || !e || !t) && (i ? (t == null || t.insertAdjacentElement("beforeend", n), t.querySelector(".variant-switch-products"), t.addEventListener(
        "click",
        (r) => {
          var h, g, c, p, m, x, f, v;
          const d = r.target, a = ((c = (g = (h = d.closest("li")) == null ? void 0 : h.querySelector('[x-text="item.value"]')) == null ? void 0 : g.textContent) == null ? void 0 : c.toLowerCase()) || ((m = (p = d.closest("li")) == null ? void 0 : p.querySelector(".crs-headboard-item__title")) == null ? void 0 : m.textContent), l = (v = (f = (x = d.closest(".crs-variant-dialog")) == null ? void 0 : x.querySelector("h3")) == null ? void 0 : f.textContent) == null ? void 0 : v.toLowerCase();
          (d.closest("li") || d.closest(".crs-item-dimensional")) && (this.renderSizeItemsOnDialog(), setTimeout(() => {
            l != null && l.includes("headboard") || this.closeDialog();
          }, 500), _("exp_pdp_imp__popup_option", `${a}`, "click", `${l}`));
        },
        { signal: o.signal }
      )) : (e == null || e.insertAdjacentElement("afterend", n), this.renderSizeDimension()));
    }
    eventListeners() {
      if (u('[data-button="size-dimension"]').then((n) => {
        n.addEventListener("click", () => {
          const t = document.querySelector('[x-show*="Size"] span');
          t && t.click(), this.closeDialog();
        });
      }), u('[data-button="storage-dimension"]').then((n) => {
        n.addEventListener("click", () => {
          const t = document.querySelector('[x-show*="Storage"] span');
          t && t.click(), this.closeDialog();
        });
      }), u('[data-button="basetype"]').then((n) => {
        n.addEventListener("click", () => {
          const t = document.querySelector('[x-show*="Base"] span');
          t && t.click(), this.closeDialog();
        });
      }), !this.dialog)
        return;
      const i = document.querySelector("#crs-variant-dialog-close");
      i == null || i.addEventListener("click", () => {
        var e, t;
        this.closeDialog();
        const n = (t = (e = this.dialog) == null ? void 0 : e.querySelector("h3")) == null ? void 0 : t.textContent;
        _("exp_pdp_imp__popup_close", "Close", "click", `${n}`);
      }), this.dialog.addEventListener("click", (n) => {
        n.target === this.dialog && this.closeDialog();
      });
    }
    changeDimensionDialog() {
      u('[x-show="slideOverDimension"] .w-screen').then((i) => {
        document.querySelectorAll('[x-show="slideOverDimension"] .w-screen').forEach((n) => {
          n.insertAdjacentHTML(
            "afterbegin",
            /* HTML */
            ' <button class="crs-dimension__back" data-button="size-back"></button> '
          );
          const t = n.querySelector('[data-button="size-back"]');
          t == null || t.addEventListener("click", () => {
            const o = n.querySelector("button.absolute");
            o == null || o.click(), this.openDialog("size");
          });
        });
      }), u('[x-show="slideOverOpen"].w-screen').then((i) => {
        document.querySelectorAll('[x-show="slideOverOpen"].w-screen').forEach((n) => {
          const e = n.querySelector("h3");
          if ((e == null ? void 0 : e.textContent) === "Storage Dimensions") {
            n.insertAdjacentHTML(
              "afterbegin",
              /* HTML */
              ' <button class="crs-dimension__back" data-button="storage-back"></button> '
            );
            const o = n.querySelector('[data-button="storage-back"]');
            o == null || o.addEventListener("click", () => {
              const s = n.querySelector("button.absolute");
              s == null || s.click(), this.openDialog("storage");
            });
          }
        });
      });
    }
    changeOpenDialog() {
      u('[x-show="slideOverOpen"].w-screen').then(() => {
        document.querySelectorAll('[x-show="slideOverOpen"].w-screen').forEach((n) => {
          var e, t;
          if ((t = (e = n.querySelector("h3")) == null ? void 0 : e.textContent) != null && t.includes("Base Type")) {
            const o = n;
            o.insertAdjacentHTML(
              "afterbegin",
              /* HTML */
              ' <button class="crs-open__back" data-button="open-back"></button> '
            );
            const r = o.querySelector('[data-button="open-back"]');
            r == null || r.addEventListener("click", () => {
              const d = o.querySelector("button.absolute");
              d == null || d.click(), this.openDialog("baseType");
            });
          }
        });
      });
    }
    mockHeadboardDialogContent() {
      u('[data-variant="headboard"] ul li [x-text="item.value"]').then(() => {
        const i = document.querySelector('[data-variant="headboard"]');
        if (!i)
          return;
        const n = i.querySelector("ul");
        if (!n)
          return;
        n.querySelector(".crs-headboard-item") && n.querySelectorAll(".crs-headboard-item").forEach((s) => {
          var r;
          return (r = s.closest("li")) == null ? void 0 : r.remove();
        });
        const t = n == null ? void 0 : n.querySelectorAll("li");
        t == null || t.forEach((s) => {
          var g, c, p;
          const r = (g = s.querySelector("svg")) == null ? void 0 : g.cloneNode(!0), d = (c = s.querySelector('[x-text="item.value"]')) == null ? void 0 : c.textContent, a = (p = s.querySelector('[x-text="item.value"] + div')) == null ? void 0 : p.textContent, h = (
            /* HTML */
            `<li>
          <div class="crs-headboard-item ${s.querySelector(".border-tertiary") ? "crs-headboard-item--active" : ""}">
            <div class="crs-headboard-item__image">${r.outerHTML}</div>
            <div class="crs-headboard-item__title">${d}</div>
            <div class="crs-headboard-item__price">${a}</div>
          </div>
        </li>`
          );
          s.insertAdjacentHTML("beforebegin", h), s.style.display = "none";
        });
        const o = n == null ? void 0 : n.querySelectorAll(".crs-headboard-item");
        o == null || o.forEach((s) => {
          s.addEventListener("click", () => {
            o == null || o.forEach((r) => {
              r.classList.remove("crs-headboard-item--active");
            }), s.classList.add("crs-headboard-item--active");
          });
        });
      }), u("[data-variant='headboard'] div :has(> hr) > ul").then(() => {
        const i = document.querySelector('[data-variant="headboard"]');
        if (!i)
          return;
        const n = i.querySelector("[data-variant='headboard'] div :has(> hr) > ul");
        if (!n)
          return;
        const e = n.querySelectorAll("li");
        (n == null ? void 0 : n.querySelector(".crs-headboard-btn")) && document.querySelectorAll(".crs-headboard-btn").forEach((s) => s.remove()), e.forEach((s, r) => {
          var h;
          const d = (h = s.querySelector('[x-text="button.name"]')) == null ? void 0 : h.textContent, l = (
            /* HTML */
            `
          <button class="crs-headboard-btn ${s.querySelector(".border-tertiary") ? "crs-headboard-btn--active" : ""}">${d}</button>
        `
          );
          s.insertAdjacentHTML("beforebegin", l), s.style.display = "none";
        });
        const o = n == null ? void 0 : n.querySelectorAll(".crs-headboard-btn");
        o.forEach((s) => {
          s == null || s.addEventListener("click", () => {
            o == null || o.forEach((r) => {
              r.classList.remove("crs-headboard-btn--active");
            }), s.classList.add("crs-headboard-btn--active");
          });
        });
      });
    }
    addSaveButtonToHeadboardDialog() {
      const i = document.querySelector(".crs-headboard__save");
      if (this.mockHeadboardDialogContent(), i)
        return;
      const n = document.querySelector('[data-variant="headboard"] div :has(> hr) > ul');
      if (!n)
        return;
      const e = document.createElement("button");
      e.textContent = "Save & Continue", e.classList.add("crs-headboard__save"), n.insertAdjacentElement("afterend", e), e.addEventListener("click", () => {
        var s;
        const t = document.querySelector(".crs-headboard-item--active"), o = document.querySelector(".crs-headboard-btn--active");
        if (t) {
          const r = (s = t.closest("li")) == null ? void 0 : s.nextElementSibling;
          r == null || r.click();
        }
        if (o) {
          const r = o.nextElementSibling;
          r == null || r.click();
        }
        this.closeDialog(), _("exp_pdp_imp__save_button", "Save & continue", "click", "Choose Headboard");
      });
    }
    changeBaseTypeDialog() {
      u('[data-variant="baseType"] ul li svg').then((i) => {
        document.querySelectorAll('[data-variant="baseType"] ul li').forEach((e) => {
          const t = e.querySelector("div"), o = e == null ? void 0 : e.querySelector("svg"), s = e == null ? void 0 : e.querySelector("small");
          !t || !o || !s || (t.insertAdjacentElement("beforeend", o), t.insertAdjacentElement("beforeend", s));
        });
      });
    }
    changeMattressDialog() {
      document.querySelectorAll('[x-show="slideOverOpenSide"].w-screen').forEach((n) => {
        var d, a, l, h, g;
        const e = n.querySelector("h3"), t = n;
        if ((d = e == null ? void 0 : e.textContent) != null && d.includes("Select Mattress and Save") || (a = e == null ? void 0 : e.textContent) != null && a.includes("Choose Mattress GET 50% Off")) {
          t.classList.add("crs-mattress-dialog"), e.innerHTML = 'Choose Mattress <span style="color: #ED0006">GET 50% Off</span>';
          const c = t.querySelector("div:has(> .card-addons)"), p = n.querySelector(".crs-no-mattress");
          if (p && p.remove(), c) {
            const m = (
              /* HTML */
              `
            <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
              <div class="card-body">
                <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                  <img src="${S}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                </div>
                <div class="card-details add-on">
                  <div class="title-card line-clamp-1 align-center">No Mattress</div>
                </div>
              </div>
            </div>
          `
            );
            (l = c.querySelector(".card-addons")) == null || l.insertAdjacentHTML("beforebegin", m);
          }
        }
        if ((h = e == null ? void 0 : e.textContent) != null && h.includes("Choose Mattress GET 50% Off")) {
          const c = t.querySelector("div:has(> .card-addons)"), p = n.querySelector(".crs-no-mattress");
          if (p && (p.remove(), c)) {
            const m = (
              /* HTML */
              `
              <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
                <div class="card-body">
                  <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                    <img src="${S}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                  </div>
                  <div class="card-details add-on">
                    <div class="title-card line-clamp-1 align-center">No Mattress</div>
                  </div>
                </div>
              </div>
            `
            );
            (g = c.querySelector(".card-addons")) == null || g.insertAdjacentHTML("beforebegin", m);
          }
        }
        const o = new AbortController(), s = t.querySelector("button.absolute");
        s == null || s.addEventListener(
          "click",
          () => {
            _("exp_pdp_imp__popup_close", "Close", "click", "Choose Mattress "), this.aborters.forEach((c) => {
              c.abort();
            });
          },
          {
            signal: o.signal
          }
        ), this.aborters.push(o);
        const r = new AbortController();
        this.aborters.includes(r) || window.addEventListener(
          "click",
          (c) => {
            const p = c.target;
            p !== t && !t.contains(p) && p.matches(".absolute.inset-0.overflow-hidden") && p.contains(t) && (s == null || s.click());
          },
          {
            signal: r.signal
          }
        ), this.aborters.push(r), t == null || t.addEventListener(
          "click",
          (c) => {
            var m, x, f;
            const p = c.target;
            if (p.closest(".crs-no-mattress")) {
              s == null || s.addEventListener("click", () => {
                _("exp_pdp_imp__popup_close", "Close", "click", "Choose Mattress ");
              });
              const v = document.querySelector(".crs-mattress--hidden .border-btn.no-border");
              s == null || s.click(), v && v.click();
            }
            if (p !== t && !t.contains(p) && (s == null || s.click()), p.closest(".card-addons:not(.crs-no-mattress)") && !p.closest("button")) {
              const v = p.closest(".card-addons"), w = t.querySelector(".card-button button"), y = (x = (m = p.closest(".card-addons")) == null ? void 0 : m.querySelector(".title-card")) == null ? void 0 : x.textContent;
              _("exp_pdp_imp__popup_option", `${y}`, "click", "Choose Mattress"), v == null || v.classList.add("crs-addon--active"), w && setTimeout(() => {
                w == null || w.click();
              }, 100);
            }
            if (p.closest(".ss-tabs")) {
              const v = t.querySelector("div:has(> .card-addons)"), w = n.querySelector(".crs-no-mattress");
              if (w && (w.remove(), v)) {
                const y = (
                  /* HTML */
                  `
                  <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
                    <div class="card-body">
                      <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                        <img src="${S}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                      </div>
                      <div class="card-details add-on">
                        <div class="title-card line-clamp-1 align-center">No Mattress</div>
                      </div>
                    </div>
                  </div>
                `
                );
                (f = v.querySelector(".card-addons")) == null || f.insertAdjacentHTML("beforebegin", y);
              }
            }
          },
          {
            signal: o.signal
          }
        );
      });
    }
    addMattressChoosingOption() {
      u(".variant-switch-items ul").then(() => {
        const i = document.querySelectorAll(".product-details .lg\\:block .card-addons");
        if (!i)
          return;
        i.forEach((e, t) => {
          var o;
          if (!((o = e == null ? void 0 : e.textContent) != null && o.includes("Add Mattress & Save")) && !e.querySelector('[x-if="selectedMattress"]')) {
            if (document.querySelector(".variant-switch-items ul .crs-mattress"))
              return;
            const r = document.querySelector(".variant-switch-items ul");
            r == null || r.insertAdjacentHTML(
              "beforeend",
              /* HTML */
              `<li
            class="crs-mattress w-full border-r hover:bg-[#F3FAFF] border-[#C7DFFF] bg-[#F3FAFF] cursor-pointer bg-[#e8f2ff]"
          >
            <div class="w-full flex flex-col justify-between items-center pt-3 pb-2.5 ">
              <div class="text-primary text-xs font-poppins font-semibold mt-1.5">
                Choose Mattress <span style="color: #ED0006">GET 50% Off</span>
              </div>
              <div
                class="text-[#535353] text-[10px] font-poppins font-medium leading-normal mt-1.5 text-center"
                id="crs-chosen-mattress"
              >
                From £219.99
              </div>
            </div>
          </li>`
            );
          }
        });
        const n = document.querySelector(".variant-switch-items ul .crs-mattress");
        n == null || n.addEventListener("click", () => {
          this.changeMattressDialog(), document.querySelectorAll(".product-details .lg\\:block .card-addons").forEach((t) => {
            var o, s, r;
            ((o = t.textContent) != null && o.includes("Add Mattress & Save") || t.querySelector('[x-if="selectedMattress"]')) && ((s = t.querySelector("button")) == null || s.click()), t.querySelector('[x-text*="selectedMattress"]') && ((r = t.querySelector(".card-button button")) == null || r.click(), u(".product-details .lg\\:block .card-addons").then(() => {
              document.querySelectorAll(".product-details .lg\\:block .card-addons").forEach((a) => {
                var l, h;
                ((l = a.textContent) != null && l.includes("Add Mattress & Save") || a.querySelector('[x-if="selectedMattress"]')) && ((h = a.querySelector("button")) == null || h.click());
              });
            }));
          });
        });
      });
    }
    changePositionMattressItemOnDesktop() {
      u(".product-details .lg\\:block .card-addons").then((i) => {
        const n = document.querySelector(".product-details .lg\\:block"), e = document.querySelector(".variant-switch-items ul"), t = document.querySelectorAll(".product-details .lg\\:block .card-addons");
        if (!e || !t)
          return;
        t.forEach((s, r) => {
          var d;
          ((d = s == null ? void 0 : s.textContent) != null && d.includes("Add Mattress & Save") || s.querySelector('[x-if="selectedMattress"]')) && t[r].classList.add("crs-mattress--hidden");
        }), new MutationObserver((s) => {
          s.forEach((r) => {
            r.addedNodes.forEach((d) => {
              var l, h, g, c, p, m, x;
              const a = d;
              if (a.classList.contains("added") && ((l = a.textContent) != null && l.includes("Mattress"))) {
                a.classList.add("crs-mattress--hidden");
                const f = (h = a.querySelector(".title-card")) == null ? void 0 : h.textContent, v = (g = a.querySelector(".price label")) == null ? void 0 : g.textContent, w = (c = a.querySelector(".price span")) == null ? void 0 : c.textContent, y = document.querySelector("#crs-chosen-mattress");
                (p = document.querySelector(".crs-mattress-price")) == null || p.remove();
                const Z = (
                  /* HTML */
                  `
                <div class="crs-mattress-price">
                  <div class="old">${w == null ? void 0 : w.toLocaleLowerCase()}</div>
                  <div class="new">+${v == null ? void 0 : v.toLocaleLowerCase()}</div>
                </div>
              `
                );
                y && f && (y.textContent = f, y.insertAdjacentHTML("afterend", Z), this.changeMattressDialog());
              }
              if ((m = a.textContent) != null && m.includes("Add Mattress & Save")) {
                a.classList.add("crs-mattress--hidden");
                const f = document.querySelector("#crs-chosen-mattress");
                f && (f.textContent = "From £219.99", (x = document.querySelector(".crs-mattress-price")) == null || x.remove(), this.changeMattressDialog());
              }
            });
          });
        }).observe(n, {
          childList: !0
        });
      });
    }
    renderSizeItemsOnDialog() {
      u('[data-variant="size"] .variant-switch-products').then(async (i) => {
        var s, r;
        const n = i;
        if (!document.querySelectorAll(".variant-switch-items ul li"))
          return;
        const t = document.querySelectorAll(".crs-item-dimensional");
        if (t && t.forEach((d) => {
          d.remove();
        }), document.querySelector('[data-type="headboard"]')) {
          const a = (s = document.querySelector(".crs-name-headboard .title").textContent) == null ? void 0 : s.split("&")[0].trim(), l = (r = this.sizes) == null ? void 0 : r.filter(
            (g) => (a == null ? void 0 : a.includes(g.headboard)) || g.headboard.includes(a)
          ), h = n.querySelectorAll("ul li");
          h == null || h.forEach((g) => {
            var p;
            (p = g.querySelector(".crs-item-dimensional")) == null || p.remove();
            const c = g.querySelector('[x-text="item.value"]');
            l == null || l.forEach((m) => {
              var x;
              if ((c == null ? void 0 : c.textContent) === m.size) {
                const f = `${m.dimensions.width ? `W: ${m.dimensions.width}` : ""} ${m.dimensions.length ? `L: ${m.dimensions.length}` : ""} ${m.dimensions.height ? `H: ${m.dimensions.height}` : ""}`;
                (x = c.parentElement) == null || x.insertAdjacentHTML(
                  "beforeend",
                  /* HTML */
                  `<div class="crs-item-dimensional">${f}</div>`
                );
              }
            });
          });
        } else {
          const d = n.querySelectorAll("ul li");
          d == null || d.forEach((a) => {
            var h, g;
            (h = a.querySelector(".crs-item-dimensional")) == null || h.remove();
            const l = a.querySelector('[x-text="item.value"]');
            (g = this.sizes) == null || g.forEach((c, p) => {
              var x;
              const m = `${c.dimensions.width ? `W: ${c.dimensions.width}` : ""} ${c.dimensions.length ? `L: ${c.dimensions.length}` : ""} ${c.dimensions.height ? `H: ${c.dimensions.height}` : ""}`;
              (l == null ? void 0 : l.textContent) === c.size && ((x = l.parentElement) == null || x.insertAdjacentHTML(
                "beforeend",
                /* HTML */
                `<div class="crs-item-dimensional" data-i="${p}">${m}</div>`
              ));
            });
          });
        }
      });
    }
    renderSizeDimension() {
      u(".variant-switch-items ul li").then(() => {
        const i = (t, o) => {
          var h, g;
          const s = t.textContent || "", r = s.replace(/\s*\([^)]*\)/, "").trim(), d = s.match(/\(([^)]+)\)/), a = d ? d[1].trim() : "";
          let l = "";
          if (o === "size") {
            const c = ((h = document.querySelector('[x-html*="headboard"]')) == null ? void 0 : h.textContent) || "", p = (g = this.sizes) == null ? void 0 : g.find(
              (m) => c.includes(m.headboard) && m.size === r
            );
            if (p) {
              const m = `&middot; ${p.dimensions.height ? `H: ${p.dimensions.height}` : ""} ${p.dimensions.length ? `L: ${p.dimensions.length}` : ""} ${p.dimensions.width ? `W: ${p.dimensions.width}` : ""}`;
              l = /* HTML */
              `
              <div class="crs-name-dimensional">
                <span class="title">${r}</span>
                <span class="dimension"> ${m} </span>
                <span class="price">${a}</span>
              </div>
            `;
            }
          } else
            o === "storage" ? l = /* HTML */
            `
            <div class="crs-name-storage">
              <span class="title">${r}</span>
              <span class="price">${a}</span>
            </div>
          ` : o === "headboard" ? l = /* HTML */
            `
            <div class="crs-name-headboard">
              <span class="title">${r}</span>
              <span class="price">${a}</span>
            </div>
          ` : o === "base type" && (l = /* HTML */
            `
            <div class="crs-name-base">
              <span class="title">${r}</span>
              <span class="price">${a}</span>
            </div>
          `);
          l && !t.innerHTML.includes('class="title"') && (t.innerHTML = l);
        }, n = () => {
          if (!this.sizes)
            return;
          Array.from(document.querySelectorAll(".variant-switch-items ul li")).forEach((o) => {
            var l;
            const s = o.querySelector("div.text-primary");
            if (!s)
              return;
            const r = ((l = s.textContent) == null ? void 0 : l.toLowerCase()) || "", d = s.nextElementSibling;
            if (!d)
              return;
            let a = null;
            if (r.includes("size") ? a = "size" : r.includes("storage") ? a = "storage" : r.includes("headboard") ? a = "headboard" : r.includes("base type") && (a = "base type"), s.dataset.type = (a == null ? void 0 : a.replace(" ", "-")) || "", a) {
              const h = () => i(d, a);
              h(), d.getAttribute("data-observed") || (new MutationObserver(() => {
                d.innerHTML.includes('class="title"') || h();
              }).observe(d, { childList: !0, subtree: !0 }), d.setAttribute("data-observed", "true"));
            }
          });
        }, e = setInterval(() => {
          this.sizes && (clearInterval(e), n());
        }, 1e3);
      });
    }
    openDialog(i) {
      var t;
      if (!this.dialog || !i)
        return;
      const n = C[i].title, e = this.dialog.querySelector(".crs-variant-dialog__header h3");
      this.dialog.dataset.variant = i, e && (e.textContent = n, (t = this.dialog) == null || t.showModal(), this.toggleSwitchProducts(!0), this.addSaveButtonToHeadboardDialog(), this.changeBaseTypeDialog(), i === "size" && this.sizes && this.renderSizeItemsOnDialog(), i === "mattress" && this.renderMattressSizeDialogContent(), document.body.classList.add("is-dialog-open"), document.body.style.position = "fixed", document.body.style.top = `-${window.scrollY}px`);
    }
    closeDialog() {
      var n;
      (n = this.dialog) == null || n.classList.add("closing"), setTimeout(() => {
        var e, t;
        (e = this.dialog) == null || e.close(), (t = this.dialog) == null || t.classList.remove("closing"), this.toggleSwitchProducts(!1);
      }, 500), this.aborters.length > 0 && this.aborters.forEach((e) => {
        e.abort();
      }), document.body.classList.remove("is-dialog-open");
      const i = document.body.style.top;
      document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, parseInt(i || "0") * -1);
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = $, document.head.appendChild(i);
    }
  }
  const P = `.variant-switch-items ul {
  grid-template-columns: 1fr;
}

.variant-switch-items ul li {
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
  border-right: none;
}

@media (min-width: 768px) {
  .variant-switch-items ul li:nth-of-type(2) {
    border-top: 1px solid #dbdbdb;
  }
}

.variant-switch-items ul li div svg {
  display: none;
}

.variant-switch-items ul li div {
  align-items: flex-start;
  gap: 6px;
}

.variant-switch-items ul li div > div[x-text='option.name'],
.variant-switch-items ul li div > div.text-primary {
  margin: 0;
  color: #1e3851;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-transform: capitalize;
}

.variant-switch-items ul li div > div:not([x-text='option.name']):not(.text-primary) {
  margin: 0;
  padding: 0;
  color: #a3adbd;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  min-height: auto;
}

.variant-switch-items ul li div > div:not([x-text='option.name']):not(.text-primary) br {
  display: none;
}`;
  class j {
    constructor() {
      this.variantSwitchPopup = new T(), this.variantColorPopup = new A(), this.init();
    }
    init() {
      this.initStyles(), this.eventsListeners();
    }
    eventsListeners() {
      u(".variant-switch-items").then((i) => {
        i.addEventListener("click", (n) => {
          var t, o, s;
          const e = n.target;
          if (e.closest("li")) {
            const r = (s = (o = (t = e.closest("li")) == null ? void 0 : t.querySelector(".text-primary")) == null ? void 0 : o.textContent) == null ? void 0 : s.toLowerCase(), d = r === "size" ? "size" : r === "storage" ? "storage" : r === "headboard" ? "headboard" : r === "base type" ? "baseType" : "";
            this.variantSwitchPopup.openDialog(d), _("exp_pdp_imp__option", `${r}`, "click", "Select Option");
          }
        });
      }), u('[x-text="selectedProduct"]').then((i) => {
        document.querySelectorAll('[x-text="selectedProduct"]').forEach((e) => {
          e.parentElement.addEventListener("click", () => {
            this.variantColorPopup.openDialog(), _("exp_pdp_imp__option", "color", "click", "Select Option");
          });
        });
      });
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = P, document.head.appendChild(i);
    }
  }
  M({
    name: "Focus on increasing the perceived value of the product on PDP",
    dev: "OS"
  }), O("exp_01_exit_intent");
  class B {
    constructor() {
      this.init();
    }
    async init() {
      await u('#MainContent[x-data="product"]') && (new j(), new E(), new z());
    }
  }
  new B();
})();
