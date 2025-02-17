(function() {
  "use strict";
  const b = (x, o, n, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: x,
      event_desc: o,
      event_type: n,
      event_loc: e
    }), console.log(`Event: ${x} | ${o} | ${n} | ${e}`);
  }, S = ({ name: x, dev: o }) => {
    console.log(
      `%c EXP: ${x} (DEV: ${o})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, M = (x) => {
    let o = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(o), window.clarity("set", x, "variant_1"));
    }, 1e3);
  };
  function h(x) {
    return new Promise((o) => {
      if (document.querySelector(x))
        return o(document.querySelector(x));
      const n = new MutationObserver(() => {
        document.querySelector(x) && (o(document.querySelector(x)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const w = {
    mobile: "mobile",
    desktop: "desktop"
  }, C = "https://conversionratestore.github.io/projects/sonno", O = `body:has(dialog[open]), body.is-dialog-open {
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

.price-pro {
  margin-top: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4px;
  row-gap: 8px;
  padding: 8px 12px 16px;
  border-radius: 0 0 12px 12px;
}

.price-pro > div:first-child {
  grid-column: 1 / 2;
}

.price-pro > div:nth-child(2) {
  grid-column: 2 / 3;
  flex-direction: row;
  gap: 8px;
}

.price-pro > div:last-child {
  grid-column: 1 / -1;
  max-width: 261px;
  justify-content: center;
  align-items: flex-start;
}

.price-pro > div:nth-child(2) > div:first-child {
  color: #939393;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.price-pro > div:nth-child(2) > div:last-child {
  padding: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
}

.price-pro > div:last-child * {
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
}

.price-pro > div:last-child > div:last-child {
  margin-top: 4px;
  padding: 0;
}

.price-pro > div:last-child > div:last-child svg {
  height: 4px;
}

.price-pro > div:last-child > div:last-child svg path {
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
.card-addons .card-button .border-btn {
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

.crs-chosen-option {
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
  class D {
    constructor() {
      this.device = window.innerWidth < 768 ? w.mobile : w.desktop, this.init();
    }
    init() {
      this.initStyles(), this.addNewDeliverySection(), this.changePriceElementPosition(), this.changeAboutPaymentPosition(), this.addChosenOption();
    }
    addNewDeliverySection() {
      h(".footer-add-cart").then((o) => {
        var s;
        const n = o, t = (
          /* HTML */
          `<section class="crs-delivery">
        <div class="crs-delivery__inner">
          <div class="crs-delivery__title">Free Delivery:</div>
          <div class="crs-delivery__date">${(s = document.querySelector(
            ".estimate-delivery-ele .estimate-delivery-item:last-child .estimate-delivery-date"
          )) == null ? void 0 : s.textContent}</div>
        </div>
      </section>`
        );
        n.insertAdjacentHTML("beforebegin", t);
      });
    }
    changePriceElementPosition() {
      h(".price-pro").then((o) => {
        h(".crs-delivery").then((n) => {
          const e = o, t = n;
          e && t && t.insertAdjacentElement("afterend", e);
        });
      });
    }
    changeAboutPaymentPosition() {
      h(".about-payment-details").then((o) => {
        const n = document.querySelector(".footer-add-cart"), e = o;
        e && n && n.insertAdjacentElement("afterend", e);
      });
    }
    addChosenOption() {
      h(".variant-switch-items ul").then((o) => {
        const n = () => {
          document.querySelectorAll(
            '.variant-switch-items ul li div > div:not([x-text="option.name"]):not(.text-primary)'
          ).forEach((s) => {
            var i, r;
            s.classList.contains("text-[#535353]") && s.classList.add("crs-chosen-option"), ((i = s.textContent) != null && i.includes("No Storage") || (r = s.textContent) != null && r.includes("From ")) && s.classList.remove("crs-chosen-option");
          });
        };
        n(), new MutationObserver((t) => {
          t.forEach((s) => {
            s.target.classList.contains("text-[#535353]") && n();
          });
        }).observe(o, {
          childList: !0,
          subtree: !0
        });
      });
    }
    initStyles() {
      const o = document.createElement("style");
      o.innerHTML = O, document.head.appendChild(o);
    }
  }
  const q = `.crs-sticky {
  position: fixed;
  display: none;
  bottom: 0;
  width: 100%;
  height: 102px;
  padding: 0 14px 14px;
  border-top: 1px solid #dbdbdb;
  background: #fff;
  z-index: 999;
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
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 133.333% */
    text-decoration-line: line-through;
  }

  .crs-sticky__product-price .save {
    padding: 4px;
    border-radius: 2px;
    background: #e00d46;
    color: #fff;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px; /* 100% */
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
    margin-left: 55px;
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
`;
  class E {
    constructor() {
      this.sticky = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.fillProductData(), this.eventListeners(), this.showSticky();
    }
    render() {
      h(".productGalleryLightbox li img").then((o) => {
        var d, g, p, u;
        const n = (d = document.querySelector("section.product-details p.leading-normal ")) == null ? void 0 : d.textContent, e = (g = document.querySelector('td[x-text="calculation.total"]')) == null ? void 0 : g.textContent, t = (p = document.querySelector(".price-pro div:nth-child(2) > div:first-child")) == null ? void 0 : p.textContent, s = (u = document.querySelector(".price-pro div:nth-child(2) > div:last-child")) == null ? void 0 : u.textContent, i = o, r = (
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
                src="${i.src}"
                alt="${i.alt}"
                width="85"
                height="60"
              />
              <div class="crs-sticky__product">
                <div class="crs-sticky__product-name">${n}</div>
                <div class="crs-sticky__product-price">
                  <span class="current">${e}</span>
                  <div class="old">
                    <span class="compare">${t}</span>
                    <span class="save">${s}</span>
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
        const a = document.querySelector(".crs-sticky");
        a && (this.sticky = a);
      });
    }
    showSticky() {
      h(".product-details .footer-add-cart button").then((o) => {
        const n = o;
        n && new IntersectionObserver(
          (t) => {
            t.forEach((s) => {
              var r, a;
              const i = s.boundingClientRect;
              !s.isIntersecting && i.top < 0 ? (r = this.sticky) == null || r.classList.add("crs-sticky--show") : (a = this.sticky) == null || a.classList.remove("crs-sticky--show");
            });
          },
          { threshold: 0.5 }
        ).observe(n);
      });
    }
    eventListeners() {
      h('[data-button="to-options"]').then((o) => {
        document.querySelectorAll('[data-button="to-options"]').forEach((e) => {
          e.addEventListener("click", () => {
            const t = document.querySelector(".shopify-product-form");
            t && (b("exp_pdp_imp__options_sticky", "Choose options", "click", "Sticky section"), t.scrollIntoView({ behavior: "smooth" }));
          });
        });
      }), h('[data-button="add-to-basket"]').then((o) => {
        o.addEventListener("click", () => {
          const e = document.querySelector(".footer-add-cart button");
          e && (e.click(), b("exp_pdp_imp__add_sticky", "Add to Basket", "click", "Sticky section"));
        });
      });
    }
    fillProductData() {
      const o = { attributes: !0, childList: !0, subtree: !0 }, n = new MutationObserver((t) => {
        t.forEach((s) => {
          var r;
          if (s.target.classList.contains("product-img")) {
            const a = document.querySelector(".productGalleryLightbox li img"), d = (r = this.sticky) == null ? void 0 : r.querySelector(".crs-sticky__product-img");
            d && (d.setAttribute("src", (a == null ? void 0 : a.getAttribute("src")) || ""), d.setAttribute("alt", (a == null ? void 0 : a.getAttribute("alt")) || ""));
          }
        });
      });
      h(".productGalleryLightbox").then((t) => {
        n.observe(t, o);
      });
      const e = new MutationObserver((t) => {
        t.forEach((s) => {
          var r, a, d, g, p, u;
          if (s.target.getAttribute("x-text") === "calculation.total") {
            const c = (r = document.querySelector("section.price-pro > div")) == null ? void 0 : r.textContent, l = (a = document.querySelector(".price-pro div:nth-child(2) > div:first-child")) == null ? void 0 : a.textContent, m = (d = document.querySelector(".price-pro div:nth-child(2) > div:last-child")) == null ? void 0 : d.textContent, v = (g = this.sticky) == null ? void 0 : g.querySelector(".crs-sticky__product-price .current"), y = (p = this.sticky) == null ? void 0 : p.querySelector(".crs-sticky__product-price .compare"), f = (u = this.sticky) == null ? void 0 : u.querySelector(".crs-sticky__product-price .save");
            v && c && (v.textContent = c, y && l && f && m && (y.textContent = l, f.textContent = m));
          }
        });
      });
      h('td[x-text="calculation.total"]').then((t) => {
        e.observe(t, o);
      });
    }
    initStyles() {
      const o = document.createElement("style");
      o.innerHTML = q, document.head.appendChild(o);
    }
  }
  const z = `@media (min-width: 768px) {
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
    max-height: calc(100dvh - 100px);
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
  class H {
    constructor() {
      this.dialog = null, this.device = window.innerWidth < 768 ? w.mobile : w.desktop, this.init();
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
      h('[x-text="getColorName(product)"]').then((o) => {
        document.querySelector('[x-text="getColorName(product)]');
        const n = o.closest("ul");
        if (n) {
          const e = document.querySelector("#variant-color-products-dialog-list");
          if (!e)
            return;
          n.querySelectorAll("li").forEach((s) => {
            const i = s.querySelector("img"), r = s.querySelector("span:last-child"), d = (
              /* HTML */
              `
            <li class="crs-color__item ${s.classList.contains("border-tertiary") ? "crs-color__item--selected" : ""}">
              <img src="${i.src}" alt="${r.textContent}" width="97" height="67" loading="lazy" />
              <span>${r.textContent}</span>
            </li>
          `
            );
            e.insertAdjacentHTML("beforeend", d);
          });
        }
      });
    }
    eventListeners() {
      if (h(".crs-color__item").then((o) => {
        const n = document.querySelector("#variant-color-products-dialog-list");
        n && n.addEventListener("click", (e) => {
          var i;
          const s = e.target.closest(".crs-color__item");
          if (s) {
            const r = (i = s.querySelector("span")) == null ? void 0 : i.textContent;
            if (!r)
              return;
            document.querySelectorAll('[x-text="getColorName(product)"]').forEach((d) => {
              if (d.textContent === r) {
                const g = d.closest("li");
                if (g) {
                  g.click();
                  const p = document.querySelector(".crs-color__item--selected");
                  p == null || p.classList.remove("crs-color__item--selected"), s.classList.add("crs-color__item--selected"), setTimeout(() => {
                    var u;
                    (u = this.dialog) == null || u.close();
                  }, 100);
                }
              }
            });
          }
        });
      }), this.dialog) {
        const o = document.querySelector("#variant-color-products-close");
        o == null || o.addEventListener("click", () => {
          this.closeDialog();
        }), this.dialog.addEventListener("click", (n) => {
          n.target === this.dialog && this.closeDialog();
        });
      }
    }
    addMouseDragScroll() {
      this.device !== w.mobile && h(".crs-colors--desktop ul").then((o) => {
        const n = o;
        let e = !1, t, s;
        n.addEventListener("mousedown", (i) => {
          e = !0, t = i.pageX - n.offsetLeft, s = n.scrollLeft;
        }), n.addEventListener("mouseleave", () => {
          e = !1;
        }), n.addEventListener("mouseup", () => {
          e = !1;
        }), n.addEventListener("mousemove", (i) => {
          if (!e)
            return;
          i.preventDefault();
          const a = (i.pageX - n.offsetLeft - t) * 1;
          n.scrollLeft = s - a;
        });
      });
    }
    showHiddenColorsOnDesktop() {
      h(".shopify-product-form .lg\\:hidden:has(strong)").then((o) => {
        const n = o;
        document.querySelector(".shopify-product-form .lg\\:hidden:has(strong)"), n && (n.classList.remove("lg:hidden"), n.classList.add("crs-colors--desktop"));
      });
    }
    openDialog() {
      !this.dialog || this.device === w.mobile || (this.toggleColors(), this.dialog.showModal(), document.body.classList.add("is-dialog-open"), document.body.style.position = "fixed", document.body.style.top = `-${window.scrollY}px`);
    }
    closeDialog() {
      var n;
      (n = this.dialog) == null || n.classList.add("closing"), setTimeout(() => {
        var e, t;
        (e = this.dialog) == null || e.close(), (t = this.dialog) == null || t.classList.remove("closing");
      }, 500), document.body.classList.remove("is-dialog-open");
      const o = document.body.style.top;
      document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, parseInt(o || "0") * -1);
    }
    initStyles() {
      const o = document.createElement("style");
      o.innerHTML = z, document.head.appendChild(o);
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
  ), A = `.variant-switch {
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

.crs-mattress-dialog .ss-tabs + div {
  margin: 0;
  height: calc(80dvh - 150px);
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}

.crs-mattress-dialog .card-addons {
  position: relative;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background: #fff;
}

.crs-mattress-dialog .image-card .absolute {
  display: none;
}

.crs-mattress-dialog .card-addons.border-tertiary {
  border: 2px solid #3589da;
}

.crs-mattress-dialog .card-addons.border-tertiary::after {
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
`, _ = {
    size: {
      title: "Choose Size",
      button: {
        title: "View Dimensions",
        icon: L
      }
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
      this.dialog = null, this.device = window.innerWidth < 768 ? w.mobile : w.desktop, this.sizes = null, this.aborters = [], this.init();
    }
    init() {
      this.initStyles(), this.render(), this.getProductData(), this.eventListeners(), this.changeMattressDialog(), this.changeDimensionDialog(), this.changeOpenDialog(), this.changeBaseTypeDialog(), this.changePositionMattressItemOnDesktop(), this.addMattressChoosingOption(), this.renderSizeDimension();
    }
    async getProductData() {
      const n = await (await fetch("https://sonno.co.uk/products/moscow-divan-bed-silver-chenille?sections=product-json")).json(), e = n["product-json"].indexOf("{"), t = n["product-json"].lastIndexOf("}") + 1;
      if (e === -1 || t === 0) {
        console.error("JSON дані не знайдено");
        return;
      }
      const s = n["product-json"].substring(e, t);
      try {
        const i = JSON.parse(s), r = JSON.parse(i.information_headboard).map((a) => {
          const d = a.data;
          return {
            size: a.size_by_beds,
            dimensions: {
              width: d.sizes_dimension[2],
              length: d.sizes_dimension[1],
              height: d.sizes_dimension[0]
            },
            headboard: a.headboard_type.split("&")[0]
          };
        });
        this.sizes = r;
      } catch (i) {
        console.error("Помилка розбору JSON:", i);
      }
    }
    render() {
      const o = (
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
              <span>${_.size.button.icon}</span><span>${_.size.button.title}</span>
            </button>
            <button class="crs-variant-dialog__dimension-btn" data-button="storage-dimension">
              <span>${_.storage.button.icon}</span><span>${_.storage.button.title}</span>
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
      document.body.insertAdjacentHTML("beforeend", o);
      const n = document.querySelector("#variant-switch-products-dialog");
      n && (this.dialog = n);
    }
    toggleSwitchProducts(o) {
      var i;
      const n = document.querySelector(".variant-switch-products"), e = document.querySelector(".variant-switch-items"), t = document.querySelector("#crs-variant-dialog-content"), s = new AbortController();
      (i = this.aborters) == null || i.push(s), !(!n || !e || !t) && (o ? (t == null || t.insertAdjacentElement("beforeend", n), t.querySelector(".variant-switch-products"), t.addEventListener(
        "click",
        (r) => {
          var p, u, c, l, m, v, y, f;
          const a = r.target, d = ((c = (u = (p = a.closest("li")) == null ? void 0 : p.querySelector('[x-text="item.value"]')) == null ? void 0 : u.textContent) == null ? void 0 : c.toLowerCase()) || ((m = (l = a.closest("li")) == null ? void 0 : l.querySelector(".crs-headboard-item__title")) == null ? void 0 : m.textContent), g = (f = (y = (v = a.closest(".crs-variant-dialog")) == null ? void 0 : v.querySelector("h3")) == null ? void 0 : y.textContent) == null ? void 0 : f.toLowerCase();
          (a.closest("li") || a.closest(".crs-item-dimensional")) && (this.renderSizeItemsOnDialog(), setTimeout(() => {
            g != null && g.includes("headboard") || this.closeDialog();
          }, 500), b("exp_pdp_imp__popup_option", `${d}`, "click", `${g}`));
        },
        { signal: s.signal }
      )) : (e == null || e.insertAdjacentElement("afterend", n), this.renderSizeDimension()));
    }
    eventListeners() {
      if (h('[data-button="size-dimension"]').then((n) => {
        n.addEventListener("click", () => {
          const t = document.querySelector('[x-show*="Size"] span');
          t && t.click(), this.closeDialog();
        });
      }), h('[data-button="storage-dimension"]').then((n) => {
        n.addEventListener("click", () => {
          const t = document.querySelector('[x-show*="Storage"] span');
          t && t.click(), this.closeDialog();
        });
      }), h('[data-button="basetype"]').then((n) => {
        n.addEventListener("click", () => {
          const t = document.querySelector('[x-show*="Base"] span');
          t && t.click(), this.closeDialog();
        });
      }), !this.dialog)
        return;
      const o = document.querySelector("#crs-variant-dialog-close");
      o == null || o.addEventListener("click", () => {
        var e, t;
        this.closeDialog();
        const n = (t = (e = this.dialog) == null ? void 0 : e.querySelector("h3")) == null ? void 0 : t.textContent;
        b("exp_pdp_imp__popup_close", "Close", "click", `${n}`);
      }), this.dialog.addEventListener("click", (n) => {
        n.target === this.dialog && this.closeDialog();
      });
    }
    changeDimensionDialog() {
      h('[x-show="slideOverDimension"] .w-screen').then((o) => {
        document.querySelectorAll('[x-show="slideOverDimension"] .w-screen').forEach((n) => {
          n.insertAdjacentHTML(
            "afterbegin",
            /* HTML */
            ' <button class="crs-dimension__back" data-button="size-back"></button> '
          );
          const t = n.querySelector('[data-button="size-back"]');
          t == null || t.addEventListener("click", () => {
            const s = n.querySelector("button.absolute");
            s == null || s.click(), this.openDialog("size");
          });
        });
      }), h('[x-show="slideOverOpen"].w-screen').then((o) => {
        document.querySelectorAll('[x-show="slideOverOpen"].w-screen').forEach((n) => {
          const e = n.querySelector("h3");
          if ((e == null ? void 0 : e.textContent) === "Storage Dimensions") {
            n.insertAdjacentHTML(
              "afterbegin",
              /* HTML */
              ' <button class="crs-dimension__back" data-button="storage-back"></button> '
            );
            const s = n.querySelector('[data-button="storage-back"]');
            s == null || s.addEventListener("click", () => {
              const i = n.querySelector("button.absolute");
              i == null || i.click(), this.openDialog("storage");
            });
          }
        });
      });
    }
    changeOpenDialog() {
      h('[x-show="slideOverOpen"].w-screen').then(() => {
        document.querySelectorAll('[x-show="slideOverOpen"].w-screen').forEach((n) => {
          var e, t;
          if ((t = (e = n.querySelector("h3")) == null ? void 0 : e.textContent) != null && t.includes("Base Type")) {
            const s = n;
            s.insertAdjacentHTML(
              "afterbegin",
              /* HTML */
              ' <button class="crs-open__back" data-button="open-back"></button> '
            );
            const r = s.querySelector('[data-button="open-back"]');
            r == null || r.addEventListener("click", () => {
              const a = s.querySelector("button.absolute");
              a == null || a.click(), this.openDialog("baseType");
            });
          }
        });
      });
    }
    mockHeadboardDialogContent() {
      h('[data-variant="headboard"] ul li [x-text="item.value"]').then(() => {
        const o = document.querySelector('[data-variant="headboard"]');
        if (!o)
          return;
        const n = o.querySelector("ul"), e = n == null ? void 0 : n.querySelectorAll("li");
        if (!n || n.querySelector(".crs-headboard-item"))
          return;
        e == null || e.forEach((i) => {
          var u, c, l, m;
          if ((u = i.previousElementSibling) != null && u.classList.contains("crs-headboard-item"))
            return;
          const r = (c = i.querySelector("svg")) == null ? void 0 : c.cloneNode(!0), a = (l = i.querySelector(['[x-text="item.value"]'])) == null ? void 0 : l.textContent, d = (m = i.querySelector(['[x-text="item.value"] + div'])) == null ? void 0 : m.textContent, p = (
            /* HTML */
            `<li>
          <div class="crs-headboard-item ${i.querySelector(".border-tertiary") ? "crs-headboard-item--active" : ""}">
            <div class="crs-headboard-item__image">${r.outerHTML}</div>
            <div class="crs-headboard-item__title">${a}</div>
            <div class="crs-headboard-item__price">${d}</div>
          </div>
        </li>`
          );
          i.insertAdjacentHTML("beforebegin", p), i.style.display = "none";
        });
        const s = n == null ? void 0 : n.querySelectorAll(".crs-headboard-item");
        s == null || s.forEach((i) => {
          i.addEventListener("click", () => {
            s == null || s.forEach((r) => {
              r.classList.remove("crs-headboard-item--active");
            }), i.classList.add("crs-headboard-item--active");
          });
        });
      }), h("[data-variant='headboard'] div :has(> hr) > ul").then(() => {
        const o = document.querySelector('[data-variant="headboard"]');
        if (!o)
          return;
        const n = o.querySelector("[data-variant='headboard'] div :has(> hr) > ul");
        if (!n)
          return;
        const e = n.querySelectorAll("li");
        if (n == null ? void 0 : n.querySelector(".crs-headboard-btn"))
          return;
        e.forEach((i, r) => {
          var p;
          const a = (p = i.querySelector('[x-text="button.name"]')) == null ? void 0 : p.textContent, g = (
            /* HTML */
            `
          <button class="crs-headboard-btn ${i.querySelector(".border-tertiary") ? "crs-headboard-btn--active" : ""}">${a}</button>
        `
          );
          i.insertAdjacentHTML("beforebegin", g), i.style.display = "none";
        });
        const s = n == null ? void 0 : n.querySelectorAll(".crs-headboard-btn");
        s.forEach((i) => {
          i == null || i.addEventListener("click", () => {
            s == null || s.forEach((r) => {
              r.classList.remove("crs-headboard-btn--active");
            }), i.classList.add("crs-headboard-btn--active");
          });
        });
      });
    }
    addSaveButtonToHeadboardDialog() {
      const o = document.querySelector(".crs-headboard__save");
      if (this.mockHeadboardDialogContent(), o)
        return;
      const n = document.querySelector('[data-variant="headboard"] div :has(> hr) > ul');
      if (!n)
        return;
      const e = document.createElement("button");
      e.textContent = "Save & Continue", e.classList.add("crs-headboard__save"), n.insertAdjacentElement("afterend", e), e.addEventListener("click", () => {
        var i;
        const t = document.querySelector(".crs-headboard-item--active"), s = document.querySelector(".crs-headboard-btn--active");
        if (t) {
          const r = (i = t.closest("li")) == null ? void 0 : i.nextElementSibling;
          r == null || r.click();
        }
        if (s) {
          const r = s.nextElementSibling;
          r == null || r.click();
        }
        this.closeDialog(), b("exp_pdp_imp__save_button", "Save & continue", "click", "Choose Headboard");
      });
    }
    changeBaseTypeDialog() {
      h('[data-variant="baseType"] ul li svg').then((o) => {
        document.querySelectorAll('[data-variant="baseType"] ul li').forEach((e) => {
          const t = e.querySelector("div"), s = e == null ? void 0 : e.querySelector("svg"), i = e == null ? void 0 : e.querySelector("small");
          !t || !s || !i || (t.insertAdjacentElement("beforeend", s), t.insertAdjacentElement("beforeend", i));
        });
      });
    }
    changeMattressDialog() {
      document.querySelectorAll('[x-show="slideOverOpenSide"].w-screen').forEach((n) => {
        var a, d, g, p, u;
        const e = n.querySelector("h3"), t = n;
        if ((a = e == null ? void 0 : e.textContent) != null && a.includes("Select Mattress and Save") || (d = e == null ? void 0 : e.textContent) != null && d.includes("Choose Mattress GET 50% Off")) {
          t.classList.add("crs-mattress-dialog"), e.innerHTML = 'Choose Mattress <span style="color: #ED0006">GET 50% Off</span>';
          const c = t.querySelector("div:has(> .card-addons)"), l = n.querySelector(".crs-no-mattress");
          if (l && l.remove(), c) {
            const m = (
              /* HTML */
              `
            <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
              <div class="card-body">
                <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                  <img src="${C}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
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
        if ((p = e == null ? void 0 : e.textContent) != null && p.includes("Choose Mattress GET 50% Off")) {
          const c = t.querySelector("div:has(> .card-addons)"), l = n.querySelector(".crs-no-mattress");
          if (l && (l.remove(), c)) {
            const m = (
              /* HTML */
              `
              <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
                <div class="card-body">
                  <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                    <img src="${C}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                  </div>
                  <div class="card-details add-on">
                    <div class="title-card line-clamp-1 align-center">No Mattress</div>
                  </div>
                </div>
              </div>
            `
            );
            (u = c.querySelector(".card-addons")) == null || u.insertAdjacentHTML("beforebegin", m);
          }
        }
        const s = new AbortController(), i = t.querySelector("button.absolute");
        i == null || i.addEventListener(
          "click",
          () => {
            b("exp_pdp_imp__popup_close", "Close", "click", "Choose Mattress "), this.aborters.forEach((c) => {
              c.abort();
            });
          },
          {
            signal: s.signal
          }
        ), this.aborters.push(s);
        const r = new AbortController();
        this.aborters.includes(r) || window.addEventListener(
          "click",
          (c) => {
            const l = c.target;
            l !== t && !t.contains(l) && l.matches(".absolute.inset-0.overflow-hidden") && l.contains(t) && (i == null || i.click());
          },
          {
            signal: r.signal
          }
        ), this.aborters.push(r), t == null || t.addEventListener(
          "click",
          (c) => {
            var m, v, y;
            const l = c.target;
            if (l.closest(".crs-no-mattress") && (i == null || i.addEventListener("click", () => {
              b("exp_pdp_imp__popup_close", "Close", "click", "Choose Mattress ");
            }), i == null || i.click()), l !== t && !t.contains(l) && (i == null || i.click()), l.closest(".card-addons") && !l.closest("button")) {
              const f = t.querySelector(".card-button button"), k = (v = (m = l.closest(".card-addons")) == null ? void 0 : m.querySelector(".title-card")) == null ? void 0 : v.textContent;
              b("exp_pdp_imp__popup_option", `${k}`, "click", "Choose Mattress"), f && (f == null || f.click());
            }
            if (l.closest(".ss-tabs")) {
              const f = t.querySelector("div:has(> .card-addons)"), k = n.querySelector(".crs-no-mattress");
              if (k && (k.remove(), f)) {
                const $ = (
                  /* HTML */
                  `
                  <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
                    <div class="card-body">
                      <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                        <img src="${C}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                      </div>
                      <div class="card-details add-on">
                        <div class="title-card line-clamp-1 align-center">No Mattress</div>
                      </div>
                    </div>
                  </div>
                `
                );
                (y = f.querySelector(".card-addons")) == null || y.insertAdjacentHTML("beforebegin", $);
              }
            }
          },
          {
            signal: s.signal
          }
        );
      });
    }
    addMattressChoosingOption() {
      h(".variant-switch-items ul").then(() => {
        if (document.querySelector(".variant-switch-items ul .crs-mattress"))
          return;
        const n = document.querySelector(".variant-switch-items ul");
        n == null || n.insertAdjacentHTML(
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
        const t = document.querySelector(".variant-switch-items ul .crs-mattress");
        t == null || t.addEventListener("click", () => {
          this.changeMattressDialog(), document.querySelectorAll(".product-details .lg\\:block .card-addons").forEach((i) => {
            var r, a, d;
            ((r = i.textContent) != null && r.includes("Add Mattress & Save") || i.querySelector('[x-if="selectedMattress"]')) && ((a = i.querySelector("button")) == null || a.click()), i.querySelector('[x-text*="selectedMattress"]') && ((d = i.querySelector(".card-button button")) == null || d.click(), h(".product-details .lg\\:block .card-addons").then(() => {
              document.querySelectorAll(".product-details .lg\\:block .card-addons").forEach((p) => {
                var u, c;
                ((u = p.textContent) != null && u.includes("Add Mattress & Save") || p.querySelector('[x-if="selectedMattress"]')) && ((c = p.querySelector("button")) == null || c.click());
              });
            }));
          });
        });
      });
    }
    changePositionMattressItemOnDesktop() {
      h(".product-details .lg\\:block .card-addons").then((o) => {
        const n = document.querySelector(".product-details .lg\\:block"), e = document.querySelector(".variant-switch-items ul"), t = document.querySelectorAll(".product-details .lg\\:block .card-addons");
        if (!e || !t)
          return;
        t.forEach((i, r) => {
          var a;
          ((a = i == null ? void 0 : i.textContent) != null && a.includes("Add Mattress & Save") || i.querySelector('[x-if="selectedMattress"]')) && t[r].classList.add("crs-mattress--hidden");
        }), new MutationObserver((i) => {
          i.forEach((r) => {
            r.addedNodes.forEach((a) => {
              var g, p, u;
              const d = a;
              if (d.classList.contains("added") && ((g = d.textContent) != null && g.includes("Mattress"))) {
                d.classList.add("crs-mattress--hidden");
                const c = (p = d.querySelector(".title-card")) == null ? void 0 : p.textContent, l = document.querySelector("#crs-chosen-mattress");
                l && c && (l.textContent = c, this.changeMattressDialog());
              }
              if ((u = d.textContent) != null && u.includes("Add Mattress & Save")) {
                d.classList.add("crs-mattress--hidden");
                const c = document.querySelector("#crs-chosen-mattress");
                c && (c.textContent = "From £219.99", this.changeMattressDialog());
              }
            });
          });
        }).observe(n, {
          childList: !0
        });
      });
    }
    renderSizeItemsOnDialog() {
      h('[data-variant="size"] .variant-switch-products').then((o) => {
        const n = o, e = document.querySelectorAll(".variant-switch-items ul li");
        if (!e)
          return;
        const t = document.querySelectorAll(".crs-item-dimensional");
        t && t.forEach((s) => {
          s.remove();
        }), e.forEach((s) => {
          var r, a;
          const i = s.querySelector('[x-text="option.name"]');
          if ((r = i == null ? void 0 : i.textContent) != null && r.toLowerCase().includes("headboard")) {
            const g = i.nextElementSibling.textContent, p = (a = this.sizes) == null ? void 0 : a.filter((c) => g == null ? void 0 : g.includes(c.headboard)), u = n.querySelectorAll("ul li");
            u == null || u.forEach((c) => {
              const l = c.querySelector('[x-text="item.value"]');
              p == null || p.forEach((m) => {
                var v;
                (l == null ? void 0 : l.textContent) === m.size && ((v = l.parentElement) == null || v.insertAdjacentHTML(
                  "beforeend",
                  /* HTML */
                  `<div class="crs-item-dimensional">
                    W: ${m.dimensions.width} L: ${m.dimensions.length} H: ${m.dimensions.height}
                  </div>`
                ));
              });
            });
          }
        });
      });
    }
    renderSizeDimension() {
      this.device === w.desktop && h(".variant-switch-items ul li").then(() => {
        const o = () => {
          if (!this.sizes)
            return;
          Array.from(document.querySelectorAll(".variant-switch-items ul li")).forEach((t) => {
            var r;
            const s = t.querySelector('[x-text="option.name"]');
            if (!s)
              return;
            if ((((r = s.textContent) == null ? void 0 : r.toLowerCase()) || "").includes("size")) {
              const a = s.nextElementSibling, d = () => {
                var l, m;
                const p = (a.textContent || "").replace(/\s*\([^)]*\)/, "").trim(), u = ((l = document.querySelector('[x-html*="headboard"]')) == null ? void 0 : l.textContent) || "", c = (m = this.sizes) == null ? void 0 : m.find(
                  (v) => u.includes(v.headboard) && v.size === p
                );
                if (c) {
                  const v = (
                    /* HTML */
                    `
                  <span class="title">${p}</span> &middot;
                  <span class="dimension">
                    H: ${c.dimensions.height} L: ${c.dimensions.length} W:
                    ${c.dimensions.width}
                  </span>
                `
                  );
                  a.innerHTML.includes('class="title"') || (a.innerHTML = v);
                }
              };
              d(), a.getAttribute("data-observed") || (new MutationObserver(() => {
                a.innerHTML.includes('class="title"') || d();
              }).observe(a, { childList: !0, subtree: !0 }), a.setAttribute("data-observed", "true"));
            }
          });
        }, n = setInterval(() => {
          this.sizes && (clearInterval(n), o());
        }, 1e3);
      });
    }
    openDialog(o) {
      var t;
      if (!this.dialog || !o)
        return;
      const n = _[o].title, e = this.dialog.querySelector(".crs-variant-dialog__header h3");
      this.dialog.dataset.variant = o, e && (e.textContent = n, (t = this.dialog) == null || t.showModal(), this.toggleSwitchProducts(!0), this.addSaveButtonToHeadboardDialog(), this.changeBaseTypeDialog(), o === "size" && this.sizes && this.renderSizeItemsOnDialog(), document.body.classList.add("is-dialog-open"), document.body.style.position = "fixed", document.body.style.top = `-${window.scrollY}px`);
    }
    closeDialog() {
      var n;
      (n = this.dialog) == null || n.classList.add("closing"), setTimeout(() => {
        var e, t;
        (e = this.dialog) == null || e.close(), (t = this.dialog) == null || t.classList.remove("closing"), this.toggleSwitchProducts(!1);
      }, 500), this.aborters.length > 0 && this.aborters.forEach((e) => {
        e.abort();
      }), document.body.classList.remove("is-dialog-open");
      const o = document.body.style.top;
      document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, parseInt(o || "0") * -1);
    }
    initStyles() {
      const o = document.createElement("style");
      o.innerHTML = A, document.head.appendChild(o);
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
  class B {
    constructor() {
      this.variantSwitchPopup = new T(), this.variantColorPopup = new H(), this.init();
    }
    init() {
      this.initStyles(), this.eventsListeners();
    }
    eventsListeners() {
      h(".variant-switch-items").then((o) => {
        o.addEventListener("click", (n) => {
          var t, s, i;
          const e = n.target;
          if (e.closest("li")) {
            const r = (i = (s = (t = e.closest("li")) == null ? void 0 : t.querySelector(".text-primary")) == null ? void 0 : s.textContent) == null ? void 0 : i.toLowerCase(), a = r === "size" ? "size" : r === "storage" ? "storage" : r === "headboard" ? "headboard" : r === "base type" ? "baseType" : "";
            this.variantSwitchPopup.openDialog(a), b("exp_pdp_imp__option", `${r}`, "click", "Select Option");
          }
        });
      }), h('[x-text="selectedProduct"]').then((o) => {
        document.querySelectorAll('[x-text="selectedProduct"]').forEach((e) => {
          e.parentElement.addEventListener("click", () => {
            this.variantColorPopup.openDialog(), b("exp_pdp_imp__option", "color", "click", "Select Option");
          });
        });
      });
    }
    initStyles() {
      const o = document.createElement("style");
      o.innerHTML = P, document.head.appendChild(o);
    }
  }
  S({
    name: "Focus on increasing the perceived value of the product on PDP",
    dev: "OS"
  }), M("exp_01_exit_intent");
  class j {
    constructor() {
      this.init();
    }
    async init() {
      await h('#MainContent[x-data="product"]') && (new B(), new E(), new D());
    }
  }
  new j();
})();
