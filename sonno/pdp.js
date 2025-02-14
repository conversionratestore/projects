(function() {
  "use strict";
  const f = (u, t, n, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: u,
      event_desc: t,
      event_type: n,
      event_loc: e
    }), console.log(`Event: ${u} | ${t} | ${n} | ${e}`);
  }, C = ({ name: u, dev: t }) => {
    console.log(
      `%c EXP: ${u} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, L = (u) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", u, "variant_1"));
    }, 1e3);
  };
  function h(u) {
    return new Promise((t) => {
      if (document.querySelector(u))
        return t(document.querySelector(u));
      const n = new MutationObserver(() => {
        document.querySelector(u) && (t(document.querySelector(u)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const b = {
    mobile: "mobile",
    desktop: "desktop"
  }, w = "https://conversionratestore.github.io/projects/sonno", S = `@media (min-width: 768px) {
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
`;
  class M {
    constructor() {
      this.device = window.innerWidth < 768 ? b.mobile : b.desktop, this.init();
    }
    init() {
      this.initStyles(), this.addNewDeliverySection(), this.changePriceElementPosition(), this.changeAboutPaymentPosition();
    }
    addNewDeliverySection() {
      h(".footer-add-cart").then((t) => {
        var o;
        const n = t, i = (
          /* HTML */
          `<section class="crs-delivery">
        <div class="crs-delivery__inner">
          <div class="crs-delivery__title">Free Delivery:</div>
          <div class="crs-delivery__date">${(o = document.querySelector(".estimate-delivery-ele .estimate-delivery-item:last-child .estimate-delivery-date")) == null ? void 0 : o.textContent}</div>
        </div>
      </section>`
        );
        n.insertAdjacentHTML("beforebegin", i);
      });
    }
    changePriceElementPosition() {
      h(".price-pro").then((t) => {
        h(".crs-delivery").then((n) => {
          const e = t, i = n;
          e && i && i.insertAdjacentElement("afterend", e);
        });
      });
    }
    changeAboutPaymentPosition() {
      h(".about-payment-details").then((t) => {
        const n = document.querySelector(".footer-add-cart"), e = t;
        e && n && n.insertAdjacentElement("afterend", e);
      });
    }
    initStyles() {
      const t = document.createElement("style");
      t.innerHTML = S, document.head.appendChild(t);
    }
  }
  const O = `.crs-sticky {
  position: fixed;
  display: none;
  bottom: 0;
  width: 100%;
  height: 102px;
  padding: 0 14px 14px;
  border-top: 1px solid #dbdbdb;
  background: #fff;
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
    text-decoration-line: strikethrough;
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
  class D {
    constructor() {
      this.sticky = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.fillProductData(), this.eventListeners(), this.showSticky();
    }
    render() {
      h(".productGalleryLightbox li img").then((t) => {
        var d, l, c, p;
        const n = (d = document.querySelector("section.product-details p.leading-normal ")) == null ? void 0 : d.textContent, e = (l = document.querySelector('td[x-text="calculation.total"]')) == null ? void 0 : l.textContent, i = (c = document.querySelector(".price-pro div:nth-child(2) > div:first-child")) == null ? void 0 : c.textContent, o = (p = document.querySelector(".price-pro div:nth-child(2) > div:last-child")) == null ? void 0 : p.textContent, s = t, a = (
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
                    <span class="compare">${i}</span>
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
        document.body.insertAdjacentHTML("beforeend", a);
        const r = document.querySelector(".crs-sticky");
        r && (this.sticky = r);
      });
    }
    showSticky() {
      h(".product-details .footer-add-cart button").then((t) => {
        const n = t;
        n && new IntersectionObserver(
          (i) => {
            i.forEach((o) => {
              var a, r;
              const s = o.boundingClientRect;
              !o.isIntersecting && s.top < 0 ? (a = this.sticky) == null || a.classList.add("crs-sticky--show") : (r = this.sticky) == null || r.classList.remove("crs-sticky--show");
            });
          },
          { threshold: 0.5 }
        ).observe(n);
      });
    }
    eventListeners() {
      h('[data-button="to-options"]').then((t) => {
        document.querySelectorAll('[data-button="to-options"]').forEach((e) => {
          e.addEventListener("click", () => {
            const i = document.querySelector(".shopify-product-form");
            i && (f("exp_pdp_imp__options_sticky", "Choose options", "click", "Sticky section"), i.scrollIntoView({ behavior: "smooth" }));
          });
        });
      }), h('[data-button="add-to-basket"]').then((t) => {
        t.addEventListener("click", () => {
          const e = document.querySelector(".footer-add-cart button");
          e && (e.click(), f("exp_pdp_imp__add_sticky", "Add to Basket", "click", "Sticky section"));
        });
      });
    }
    fillProductData() {
      const t = { attributes: !0, childList: !0, subtree: !0 }, n = new MutationObserver((i) => {
        i.forEach((o) => {
          var a;
          if (o.target.classList.contains("product-img")) {
            const r = document.querySelector(".productGalleryLightbox li img"), d = (a = this.sticky) == null ? void 0 : a.querySelector(".crs-sticky__product-img");
            d && (d.setAttribute("src", (r == null ? void 0 : r.getAttribute("src")) || ""), d.setAttribute("alt", (r == null ? void 0 : r.getAttribute("alt")) || ""));
          }
        });
      });
      h(".productGalleryLightbox").then((i) => {
        n.observe(i, t);
      });
      const e = new MutationObserver((i) => {
        i.forEach((o) => {
          var a, r, d, l, c, p;
          if (o.target.getAttribute("x-text") === "calculation.total") {
            const g = (a = document.querySelector("section.price-pro > div")) == null ? void 0 : a.textContent, m = (r = document.querySelector(".price-pro div:nth-child(2) > div:first-child")) == null ? void 0 : r.textContent, v = (d = document.querySelector(".price-pro div:nth-child(2) > div:last-child")) == null ? void 0 : d.textContent, x = (l = this.sticky) == null ? void 0 : l.querySelector(".crs-sticky__product-price .current"), _ = (c = this.sticky) == null ? void 0 : c.querySelector(".crs-sticky__product-price .compare"), k = (p = this.sticky) == null ? void 0 : p.querySelector(".crs-sticky__product-price .save");
            x && g && (x.textContent = g, _ && m && k && v && (_.textContent = m, k.textContent = v));
          }
        });
      });
      h('td[x-text="calculation.total"]').then((i) => {
        e.observe(i, t);
      });
    }
    initStyles() {
      const t = document.createElement("style");
      t.innerHTML = O, document.head.appendChild(t);
    }
  }
  const E = `@media (min-width: 768px) {
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
`;
  class q {
    constructor() {
      this.dialog = null, this.device = window.innerWidth < 768 ? b.mobile : b.desktop, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.eventListeners(), this.closeDialog(), this.showHiddenColorsOnDesktop();
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
      h('[x-text="getColorName(product)"]').then((t) => {
        document.querySelector('[x-text="getColorName(product)]');
        const n = t.closest("ul");
        if (n) {
          const e = document.querySelector("#variant-color-products-dialog-list");
          if (!e)
            return;
          n.querySelectorAll("li").forEach((o) => {
            const s = o.querySelector("img"), a = o.querySelector("span:last-child"), d = (
              /* HTML */
              `
            <li class="crs-color__item ${o.classList.contains("border-tertiary") ? "crs-color__item--selected" : ""}">
              <img src="${s.src}" alt="${a.textContent}" width="97" height="67" loading="lazy" />
              <span>${a.textContent}</span>
            </li>
          `
            );
            e.insertAdjacentHTML("beforeend", d);
          });
        }
      });
    }
    eventListeners() {
      if (h(".crs-color__item").then((t) => {
        const n = document.querySelector("#variant-color-products-dialog-list");
        n && n.addEventListener("click", (e) => {
          var s;
          const o = e.target.closest(".crs-color__item");
          if (o) {
            const a = (s = o.querySelector("span")) == null ? void 0 : s.textContent;
            if (!a)
              return;
            document.querySelectorAll('[x-text="getColorName(product)"]').forEach((d) => {
              if (d.textContent === a) {
                const l = d.closest("li");
                if (l) {
                  l.click();
                  const c = document.querySelector(".crs-color__item--selected");
                  c == null || c.classList.remove("crs-color__item--selected"), o.classList.add("crs-color__item--selected"), setTimeout(() => {
                    var p;
                    (p = this.dialog) == null || p.close();
                  }, 100);
                }
              }
            });
          }
        });
      }), this.dialog) {
        const t = document.querySelector("#variant-color-products-close");
        t == null || t.addEventListener("click", () => {
          this.closeDialog();
        }), this.dialog.addEventListener("click", (n) => {
          n.target === this.dialog && this.closeDialog();
        });
      }
    }
    showHiddenColorsOnDesktop() {
      h(".shopify-product-form .lg\\:hidden:has(strong)").then((t) => {
        const n = t;
        document.querySelector(".shopify-product-form .lg\\:hidden:has(strong)"), n && n.classList.remove("lg:hidden");
      });
    }
    openDialog() {
      !this.dialog || this.device === b.mobile || (this.toggleColors(), this.dialog.showModal());
    }
    closeDialog() {
      var t;
      (t = this.dialog) == null || t.classList.add("closing"), setTimeout(() => {
        var n, e;
        (n = this.dialog) == null || n.close(), (e = this.dialog) == null || e.classList.remove("closing");
      }, 500);
    }
    initStyles() {
      const t = document.createElement("style");
      t.innerHTML = E, document.head.appendChild(t);
    }
  }
  const z = (
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
  ), H = `.variant-switch {
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
  background: rgba(30, 56, 81, 0.70);
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
  display: flex;
  justify-content: space-between;
}

.crs-variant-dialog__title {
  color: #1e3851;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}

.crs-variant-dialog__dimension-btn {
  display: none;
}

[data-variant='size'] .crs-variant-dialog__dimension-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.crs-variant-dialog__content {
  margin-top: 14px;
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
  grid-template-rows: 1fr 1fr;
  column-gap: 12px;
  height: 88px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
}

.crs-variant-dialog .variant-switch-products > ul li > div.border-tertiary {
  border: 2px solid #3589da;
}

.crs-variant-dialog .variant-switch-products > ul li .custom-svg-icon-height {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
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

.crs-variant-dialog .variant-switch-products ul li [x-text='item.value'] .crs-item-dimensional {
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
}
.w-screen:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) > div {
  padding: 14px;
}

:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']):is(.bg-black\\/60, .bg-black\\/20) {
  background: rgba(30, 56, 81, 0.70);
}
:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) .bg-black {
  background: rgba(30, 56, 81, 0.50);

}
:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) button.absolute {
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

:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) .px-4:has(button.absolute) > div {
  justify-content: flex-end;
}

@media (min-width: 768px) {
  :is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) .px-4:has(button.absolute)  {
    padding-inline: 0;
  }
}

:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) button.absolute svg {
  display: none;
}

:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) .absolute.mt-12 {
  margin-top: 14px;
}
:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) h3 {
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

:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) h3 + p {
  margin-top: 0;
}

:is([x-show='slideOverDimension'], [x-show='slideOverOpen'], [x-show='slideOverOpenSide'], [x-show='showDivanModal']) .h-full > .px-6 {
  padding: 0;
}

[x-show='slideOverOpenSide'] .relative.overflow-hidden {
  overflow-y: auto;
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

@media (max-width: 768px) {
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
  height: 300px;
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
  text-decoration-line: strikethrough;
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
`, y = {
    size: {
      title: "Choose Size",
      button: {
        title: "View Dimensions",
        icon: z
      }
    },
    storage: {
      title: "Choose Storage"
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
      this.dialog = null, this.device = window.innerWidth < 768 ? b.mobile : b.desktop, this.sizes = null, this.aborters = [], this.init();
    }
    init() {
      this.initStyles(), this.render(), this.getProductData(), this.eventListeners(), this.changeMattressDialog(), this.changeDimensionDialog(), this.changeOpenDialog(), this.changeBaseTypeDialog(), this.changePositionMattressItemOnDesktop(), this.addMattressChoosingOption(), this.renderSizeDimension();
    }
    async getProductData() {
      const n = await (await fetch("https://sonno.co.uk/products/moscow-divan-bed-silver-chenille?sections=product-json")).json(), e = n["product-json"].indexOf("{"), i = n["product-json"].lastIndexOf("}") + 1;
      if (e === -1 || i === 0) {
        console.error("JSON дані не знайдено");
        return;
      }
      const o = n["product-json"].substring(e, i);
      try {
        const s = JSON.parse(o), a = JSON.parse(s.information_headboard).map((r) => {
          const d = r.data;
          return {
            size: r.size_by_beds,
            dimensions: {
              width: d.sizes_dimension[2],
              length: d.sizes_dimension[1],
              height: d.sizes_dimension[0]
            },
            headboard: r.headboard_type.split("&")[0]
          };
        });
        this.sizes = a;
      } catch (s) {
        console.error("Помилка розбору JSON:", s);
      }
    }
    render() {
      const t = (
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
            <button class="crs-variant-dialog__dimension-btn" data-button="dimension">
              <span>${y.size.button.icon}</span><span>${y.size.button.title}</span>
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
      document.body.insertAdjacentHTML("beforeend", t);
      const n = document.querySelector("#variant-switch-products-dialog");
      n && (this.dialog = n);
    }
    toggleSwitchProducts(t) {
      var s;
      const n = document.querySelector(".variant-switch-products"), e = document.querySelector(".variant-switch-items"), i = document.querySelector("#crs-variant-dialog-content"), o = new AbortController();
      (s = this.aborters) == null || s.push(o), !(!n || !e || !i) && (t ? (i == null || i.insertAdjacentElement("beforeend", n), i.querySelector(".variant-switch-products"), i.addEventListener(
        "click",
        (a) => {
          var c, p, g, m, v, x;
          const r = a.target, d = (g = (p = (c = r.closest("li")) == null ? void 0 : c.querySelector('[x-text="item.value"]')) == null ? void 0 : p.textContent) == null ? void 0 : g.toLowerCase(), l = (x = (v = (m = r.closest(".crs-variant-dialog")) == null ? void 0 : m.querySelector("h3")) == null ? void 0 : v.textContent) == null ? void 0 : x.toLowerCase();
          (r.closest("li") || r.closest(".crs-item-dimensional")) && (this.renderSizeItemsOnDialog(), setTimeout(() => {
            console.log("dialogTitle", l, l !== "Choose Headboard"), l != null && l.includes("headboard") || this.closeDialog();
          }, 500), f("exp_pdp_imp__popup_option", `${d}`, "click", `${l}`));
        },
        { signal: o.signal }
      )) : (e == null || e.insertAdjacentElement("afterend", n), this.renderSizeDimension()));
    }
    eventListeners() {
      if (h('[data-button="dimension"]').then((n) => {
        n.addEventListener("click", () => {
          const i = document.querySelector('[x-show*="Size"] span');
          i && i.click(), this.closeDialog();
        });
      }), h('[data-button="basetype"]').then((n) => {
        n.addEventListener("click", () => {
          const i = document.querySelector('[x-show*="Base"] span');
          i && i.click(), this.closeDialog();
        });
      }), !this.dialog)
        return;
      const t = document.querySelector("#crs-variant-dialog-close");
      t == null || t.addEventListener("click", () => {
        var e, i;
        this.closeDialog();
        const n = (i = (e = this.dialog) == null ? void 0 : e.querySelector("h3")) == null ? void 0 : i.textContent;
        f("exp_pdp_imp__popup_close", "Close", "click", `${n}`);
      }), this.dialog.addEventListener("click", (n) => {
        n.target === this.dialog && this.closeDialog();
      });
    }
    changeDimensionDialog() {
      h('[x-show="slideOverDimension"].w-screen').then((t) => {
        const n = t;
        n.insertAdjacentHTML(
          "afterbegin",
          /* HTML */
          ' <button class="crs-dimension__back" data-button="back"></button> '
        );
        const i = n.querySelector('[data-button="back"]');
        i == null || i.addEventListener("click", () => {
          const o = n.querySelector("button.absolute");
          o == null || o.click(), this.openDialog("size");
        });
      });
    }
    changeOpenDialog() {
      h('[x-show="slideOverOpen"].w-screen').then(() => {
        document.querySelectorAll('[x-show="slideOverOpen"].w-screen').forEach((n) => {
          var e, i;
          if ((i = (e = n.querySelector("h3")) == null ? void 0 : e.textContent) != null && i.includes("Base Type")) {
            const o = n;
            o.insertAdjacentHTML(
              "afterbegin",
              /* HTML */
              ' <button class="crs-open__back" data-button="open-back"></button> '
            );
            const a = o.querySelector('[data-button="open-back"]');
            a == null || a.addEventListener("click", () => {
              const r = o.querySelector("button.absolute");
              r == null || r.click(), this.openDialog("baseType");
            });
          }
        });
      });
    }
    addSaveButtonToHeadboardDialog() {
      if (document.querySelector(".crs-headboard__save"))
        return;
      const n = document.querySelector('[data-variant="headboard"] div :has(> hr) > ul');
      if (!n)
        return;
      const e = document.createElement("button");
      e.textContent = "Save & Continue", e.classList.add("crs-headboard__save"), n.insertAdjacentElement("afterend", e), e.addEventListener("click", () => {
        this.closeDialog(), f("exp_pdp_imp__save_button", "Save & continue", "click", "Choose Headboard");
      });
    }
    changeBaseTypeDialog() {
      h('[data-variant="baseType"] ul li svg').then((t) => {
        document.querySelectorAll('[data-variant="baseType"] ul li').forEach((e) => {
          const i = e.querySelector("div"), o = e == null ? void 0 : e.querySelector("svg"), s = e == null ? void 0 : e.querySelector("small");
          !i || !o || !s || (i.insertAdjacentElement("beforeend", o), i.insertAdjacentElement("beforeend", s));
        });
      });
    }
    changeMattressDialog() {
      document.querySelectorAll('[x-show="slideOverOpenSide"].w-screen').forEach((n) => {
        var a, r, d, l;
        const e = n.querySelector("h3"), i = n;
        if ((a = e == null ? void 0 : e.textContent) != null && a.includes("Select Mattress and Save")) {
          i.classList.add("crs-mattress-dialog"), e.innerHTML = 'Choose Mattress <span style="color: #ED0006">GET 50% Off</span>';
          const c = i.querySelector("div:has(> .card-addons)");
          if (c) {
            const p = (
              /* HTML */
              `
            <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
              <div class="card-body">
                <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                  <img src="${w}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                </div>
                <div class="card-details add-on">
                  <div class="title-card line-clamp-1 align-center">No Mattress</div>
                </div>
              </div>
            </div>
          `
            );
            (r = c.querySelector(".card-addons")) == null || r.insertAdjacentHTML("beforebegin", p);
          }
        }
        if ((d = e == null ? void 0 : e.textContent) != null && d.includes("Choose Mattress GET 50% Off")) {
          const c = i.querySelector("div:has(> .card-addons)"), p = n.querySelector(".crs-no-mattress");
          if (p && (p.remove(), c)) {
            const g = (
              /* HTML */
              `
              <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
                <div class="card-body">
                  <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                    <img src="${w}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                  </div>
                  <div class="card-details add-on">
                    <div class="title-card line-clamp-1 align-center">No Mattress</div>
                  </div>
                </div>
              </div>
            `
            );
            (l = c.querySelector(".card-addons")) == null || l.insertAdjacentHTML("beforebegin", g);
          }
        }
        const o = new AbortController(), s = i.querySelector("button.absolute");
        s == null || s.addEventListener(
          "click",
          () => {
            f("exp_pdp_imp__popup_close", "Close", "click", "Choose Mattress "), this.aborters.forEach((c) => {
              c.abort();
            });
          },
          {
            signal: o.signal
          }
        ), this.aborters.push(o), i == null || i.addEventListener("click", (c) => {
          var g;
          const p = c.target;
          if (p.closest(".crs-no-mattress") && (s == null || s.addEventListener("click", () => {
            f("exp_pdp_imp__popup_close", "Close", "click", "Choose Mattress ");
          }), s == null || s.click()), p.closest(".ss-tabs")) {
            const m = i.querySelector("div:has(> .card-addons)"), v = n.querySelector(".crs-no-mattress");
            if (v && (v.remove(), m)) {
              const x = (
                /* HTML */
                `
                <div class="card-addons  added cursor-pointer hover:border-tertiary border-2 crs-no-mattress">
                  <div class="card-body">
                    <div class="image-card relative" style="background-color: #DBDBDB; border-radius: 6px;">
                      <img src="${w}/img/no-mattress.webp" alt="" width="72" height="72" loading="lazy" />
                    </div>
                    <div class="card-details add-on">
                      <div class="title-card line-clamp-1 align-center">No Mattress</div>
                    </div>
                  </div>
                </div>
              `
              );
              (g = m.querySelector(".card-addons")) == null || g.insertAdjacentHTML("beforebegin", x);
            }
          }
        });
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
          <div class="text-[#535353] text-[10px] font-poppins font-medium leading-normal mt-1.5 text-center">
            From £219.99
          </div>
        </div>
      </li>`
        );
        const i = document.querySelector(".variant-switch-items ul .crs-mattress");
        i == null || i.addEventListener("click", () => {
          this.changeMattressDialog(), document.querySelectorAll(".product-details .lg\\:block .card-addons").forEach((s) => {
            var a, r, d;
            ((a = s.textContent) != null && a.includes("Add Mattress & Save") || s.querySelector('[x-if="selectedMattress"]')) && ((r = s.querySelector("button")) == null || r.click()), s.querySelector('[x-text*="selectedMattress"]') && ((d = s.querySelector(".card-button button")) == null || d.click(), h(".product-details .lg\\:block .card-addons").then(() => {
              document.querySelectorAll(".product-details .lg\\:block .card-addons").forEach((c) => {
                var p, g;
                ((p = c.textContent) != null && p.includes("Add Mattress & Save") || c.querySelector('[x-if="selectedMattress"]')) && ((g = c.querySelector("button")) == null || g.click());
              });
            }));
          });
        });
      });
    }
    changePositionMattressItemOnDesktop() {
      h(".product-details .lg\\:block .card-addons").then((t) => {
        const n = document.querySelector(".product-details .lg\\:block"), e = document.querySelector(".variant-switch-items ul"), i = document.querySelectorAll(".product-details .lg\\:block .card-addons");
        if (!e || !i)
          return;
        i.forEach((s, a) => {
          var r;
          ((r = s == null ? void 0 : s.textContent) != null && r.includes("Add Mattress & Save") || s.querySelector('[x-if="selectedMattress"]')) && i[a].classList.add("crs-mattress--hidden");
        }), new MutationObserver((s) => {
          s.forEach((a) => {
            a.addedNodes.forEach((r) => {
              var l, c;
              const d = r;
              d.classList.contains("added") && ((l = d.textContent) != null && l.includes("Mattress")) && d.classList.add("crs-mattress--hidden"), (c = d.textContent) != null && c.includes("Add Mattress & Save") && d.classList.add("crs-mattress--hidden");
            });
          });
        }).observe(n, {
          childList: !0
        });
      });
    }
    renderSizeItemsOnDialog() {
      h('[data-variant="size"] .variant-switch-products').then((t) => {
        const n = t, e = document.querySelectorAll(".variant-switch-items ul li");
        e && e.forEach((i) => {
          var s, a;
          const o = i.querySelector('[x-text="option.name"]');
          if ((s = o == null ? void 0 : o.textContent) != null && s.toLowerCase().includes("headboard")) {
            const d = o.nextElementSibling.textContent, l = (a = this.sizes) == null ? void 0 : a.filter((p) => d == null ? void 0 : d.includes(p.headboard)), c = n.querySelectorAll("ul li");
            c == null || c.forEach((p) => {
              const g = p.querySelector('[x-text="item.value"]');
              l == null || l.forEach((m) => {
                (g == null ? void 0 : g.textContent) === m.size && g.insertAdjacentHTML(
                  "beforeend",
                  /* HTML */
                  `<div class="crs-item-dimensional">
                    W: ${m.dimensions.width} L: ${m.dimensions.length} H: ${m.dimensions.height}
                  </div>`
                );
              });
            });
          }
        });
      });
    }
    renderSizeDimension() {
      this.device === b.desktop && h(".variant-switch-items ul li").then(() => {
        const t = () => {
          if (!this.sizes)
            return;
          Array.from(document.querySelectorAll(".variant-switch-items ul li")).forEach((i) => {
            var a;
            const o = i.querySelector('[x-text="option.name"]');
            if (!o)
              return;
            if ((((a = o.textContent) == null ? void 0 : a.toLowerCase()) || "").includes("size")) {
              const r = o.nextElementSibling, d = () => {
                var m, v;
                const c = (r.textContent || "").replace(/\s*\([^)]*\)/, "").trim(), p = ((m = document.querySelector('[x-html*="headboard"]')) == null ? void 0 : m.textContent) || "", g = (v = this.sizes) == null ? void 0 : v.find(
                  (x) => p.includes(x.headboard) && x.size === c
                );
                if (g) {
                  const x = (
                    /* HTML */
                    `
                  <span class="title">${c}</span> &middot;
                  <span class="dimension">
                    H: ${g.dimensions.height} L: ${g.dimensions.length} W:
                    ${g.dimensions.width}
                  </span>
                `
                  );
                  r.innerHTML.includes('class="title"') || (r.innerHTML = x);
                }
              };
              d(), r.getAttribute("data-observed") || (new MutationObserver(() => {
                r.innerHTML.includes('class="title"') || d();
              }).observe(r, { childList: !0, subtree: !0 }), r.setAttribute("data-observed", "true"));
            }
          });
        }, n = setInterval(() => {
          this.sizes && (clearInterval(n), t());
        }, 1e3);
      });
    }
    openDialog(t) {
      var i;
      if (!this.dialog || !t)
        return;
      const n = y[t].title, e = this.dialog.querySelector(".crs-variant-dialog__header h3");
      this.dialog.dataset.variant = t, e && (e.textContent = n, (i = this.dialog) == null || i.showModal(), this.toggleSwitchProducts(!0), this.addSaveButtonToHeadboardDialog(), this.changeBaseTypeDialog(), t === "size" && this.sizes && this.renderSizeItemsOnDialog());
    }
    closeDialog() {
      var t;
      (t = this.dialog) == null || t.classList.add("closing"), setTimeout(() => {
        var n, e;
        (n = this.dialog) == null || n.close(), (e = this.dialog) == null || e.classList.remove("closing"), this.toggleSwitchProducts(!1);
      }, 500), this.aborters.length > 0 && this.aborters.forEach((n) => {
        n.abort();
      });
    }
    initStyles() {
      const t = document.createElement("style");
      t.innerHTML = H, document.head.appendChild(t);
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
}
`;
  class A {
    constructor() {
      this.variantSwitchPopup = new T(), this.variantColorPopup = new q(), this.init();
    }
    init() {
      this.initStyles(), this.eventsListeners();
    }
    eventsListeners() {
      h(".variant-switch-items").then((t) => {
        t.addEventListener("click", (n) => {
          var i, o, s;
          const e = n.target;
          if (e.closest("li")) {
            const a = (s = (o = (i = e.closest("li")) == null ? void 0 : i.querySelector(".text-primary")) == null ? void 0 : o.textContent) == null ? void 0 : s.toLowerCase(), r = a === "size" ? "size" : a === "storage" ? "storage" : a === "headboard" ? "headboard" : a === "base type" ? "baseType" : "";
            this.variantSwitchPopup.openDialog(r), f("exp_pdp_imp__option", `${a}`, "click", "Select Option");
          }
        });
      }), h('[x-text="selectedProduct"]').then((t) => {
        document.querySelectorAll('[x-text="selectedProduct"]').forEach((e) => {
          e.parentElement.addEventListener("click", () => {
            this.variantColorPopup.openDialog(), f("exp_pdp_imp__option", "color", "click", "Select Option");
          });
        });
      });
    }
    initStyles() {
      const t = document.createElement("style");
      t.innerHTML = P, document.head.appendChild(t);
    }
  }
  C({
    name: "Focus on increasing the perceived value of the product on PDP",
    dev: "OS"
  }), L("exp_01_exit_intent");
  class B {
    constructor() {
      this.init();
    }
    async init() {
      await h('#MainContent[x-data="product"]') && (new A(), new D(), new M());
    }
  }
  new B();
})();
