(function() {
  "use strict";
  const l = (d, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: d,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), console.log(`Event: ${d} | ${n} | ${e} | ${t}`);
  }, m = ({ name: d, dev: n }) => {
    console.log(
      `%c EXP: ${d} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function c(d) {
    return new Promise((n) => {
      if (document.querySelector(d))
        return n(document.querySelector(d));
      const e = new MutationObserver(() => {
        document.querySelector(d) && (n(document.querySelector(d)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const h = (d, n, e, t) => {
    let i = [];
    if (typeof d == "string")
      i = document.querySelectorAll(d);
    else if (d instanceof Element)
      i = [d];
    else {
      console.error("Invalid target type:", d);
      return;
    }
    let o = new IntersectionObserver(
      (r) => {
        r.forEach((a) => {
          a.isIntersecting && (o.unobserve(a.target), setTimeout(function() {
            s.observe(a.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.2
      }
    ), s = new IntersectionObserver((r) => {
      r.forEach((a) => {
        a.isIntersecting ? (l(n || `view_element_${a.target.id}`, e || "Element visibility", "view", t || a.target.id), o.unobserve(a.target)) : o.observe(a.target), s.unobserve(a.target);
      });
    });
    i.forEach((r) => {
      o.observe(r);
    });
  }, b = `body:has(> dialog[open]) {
  overflow: hidden;
}

.bundle-popup {
  padding: 24px 12px;
  border: none;
  background-color: #dcfaf8;
}

@media (min-width: 981px) {
  .bundle-popup {
    width: min(535px, 100%);
    padding: 24px;
    border-radius: 32px;
  }
}

.bundle-popup .close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 19px;
  height: 19px;
  cursor: pointer;
  border: none;
  background: none;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><g clip-path="url(%23clip0_5153_743)"><path d="M17.5 1L1 17.5" stroke="%23095D66" stroke-width="2"/><path d="M1 1L17.5 17.5" stroke="%23095D66" stroke-width="2"/></g><defs><clipPath id="clip0_5153_743"><rect width="19" height="19" fill="white"/></clipPath></defs></svg>');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.bundle-popup .close-btn::after {
  content: '';
  position: absolute;
  inset: -8px;
}

.bundle-popup .badge {
  margin-inline: auto;
  width: max-content;
  padding: 8px 15px;
  border-radius: 75px;
  background: #feedc7;
  color: #3c3c3b;
  text-align: center;
  font-family: Raleway;
  font-size: 16.5px;
  font-weight: 500;
  line-height: 27.58px;
}

@media (min-width: 981px) {
  .bundle-popup .badge {
    display: none;
  }
}

.bundle-popup h3 {
  margin-top: 12px;
  padding: 0;
  color: #095d66;
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
}

@media (min-width: 981px) {
  .bundle-popup h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 44px;
  }
}
.bundle-popup .bundle-container {
  margin-top: 16px;
}
.bundle-container {
  display: grid;
  grid-template-columns: 1fr;
  border-collapse: collapse;
  margin: 1rem 0;
}

.bundle-header,
.bundle-item {
  display: grid;
  grid-template-columns: 24px 1fr repeat(2, 65px);
}

@media (min-width: 981px) {
  .bundle-header,
  .bundle-item {
    grid-template-columns: 24px 1fr repeat(2, 70px);
  }
}

.bundle-header {
  color: #3c3c3b;
  font-family: Raleway;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
}

.bundle-header > div:not(.title),
.bundle-item > div:not(.title) {
  text-align: right;
}
.bundle-item > div {
  padding: 20px 0;
}

.bundle-item:not(:last-child):not(:has(+ .bundle-header)) > div {
  border-bottom: 1px solid #dcfaf8;
  box-shadow: inset 0px -1px 0px 0px #b5e0dd;
}

.bundle-header .full {
  grid-column: 1 / -1;
}
.bundle-header .title span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-inline: 6px;
  background: #52a7a7;
  color: #fff;
  font-family: Raleway;
  font-size: 15px;
  font-weight: 700;
  line-height: 21px;
}

.bundle-item .title {
  display: flex;
  gap: 8px;
  color: #095d66;
  text-align: left;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
}

.bundle-item .old-price {
  color: #3c3c3b;
  font-family: Raleway;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  text-decoration: line-through;
}

.bundle-item .new-price {
  color: #3c3c3b;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
}
.bundle-item .check {
  display: flex;
  justify-content: center;
}
.bundle-item .check::before {
  content: '';
  display: block;
  width: 18px;
  height: 14px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M16.7134 2.4982L15.5579 3.79113L14.6218 4.8389L14.0693 5.45681L13.8365 5.7154V5.71875L13.7795 5.78088L12.6259 7.07045L7.3444 12.9809C6.97769 13.3924 6.46362 13.6022 5.94781 13.6022C5.51249 13.6022 5.07543 13.4511 4.72376 13.1472L0.932648 9.85277C0.408519 9.39602 0.353263 8.60177 0.807058 8.07627C1.26085 7.55068 2.05457 7.49359 2.5787 7.9486L5.89426 10.83L10.757 5.38797L12.3512 3.60642L13.1348 2.72825L13.6875 2.11033L14.8429 0.817404C15.305 0.298555 16.0988 0.254896 16.6162 0.720013C17.132 1.18345 17.1754 1.97935 16.7134 2.4982Z" fill="%2352A7A7"/></svg>');
  background-repeat: no-repeat;
}

.popup-footer .buy-action {
  display: grid;
  justify-items: center;
  width: 100%;
}
.popup-footer .save-price {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: max-content;
  height: 29px;
  padding: 10px 24px;
  border-radius: 75px 75px 0px 0px;
  background: #78bebe;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
}

.popup-footer .saved-price {
  color: #fff;
  text-decoration-line: line-through;
}

.popup-footer .discount {
  color: #f0d28b;
}

.popup-footer .buy-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 64px;
  width: 100%;
  border: none;
  border-radius: 75px;
  background: #095d66;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
}

.popup-footer :is(.current-price, .dot) {
  color: #f0d28b;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
}
`;
  class f {
    constructor() {
      this.init();
    }
    init() {
      this.render(), this.addStyles(), this.eventListeners();
    }
    render() {
      document.body.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
      <dialog class="bundle-popup" id="bundle-popup">
        <div class="popup-content">
          <div class="popup-header">
            <div class="badge">0-5 Years</div>
            <h3>Bundle includes:</h3>
            <button class="close-btn" data-button="bundle-popup-close"></button>
          </div>
          <div class="popup-body">
            <div class="bundle-container">
              <div class="bundle-header">
                <div></div>
                <div class="title"><span>x 6 Courses:</span></div>
                <div>Full price</div>
                <div>Your price</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Preparation to Newborns: 0-4 Weeks</div>
                <div class="old-price">$100.00</div>
                <div class="new-price">$36.00</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Little Baby Sleep Program: 4-16 Weeks</div>
                <div class="old-price">$100.00</div>
                <div class="new-price">$36.00</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Big Baby Sleep Program: 4-8 Months</div>
                <div class="old-price">$100.00</div>
                <div class="new-price">$36.00</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Pre-Toddler Sleep Program: 8-12 Months</div>
                <div class="old-price">$100.00</div>
                <div class="new-price">$36.00</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Toddler Sleep Program: 1-2 Years</div>
                <div class="old-price">$100.00</div>
                <div class="new-price">$36.00</div>
              </div>
              <div class="bundle-header">
                <div class="full"><span>2x Program Supplements:</span></div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Second Child Supplement</div>
                <div class="old-price">$50.00</div>
                <div class="new-price">$18.00</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Twins Supplement</div>
                <div class="old-price">$50.00</div>
                <div class="new-price">$18.00</div>
              </div>
            </div>
          </div>
          <div class="popup-footer">
            <div class="buy-action">
              <div class="save-price">
                <div class="saved-price">$700.00</div>
                <div class="discount">-64%</div>
              </div>
              <a
                href="https://drgolly.com/sleep-bundle-deal/"
                class="buy-btn"
                data-button="bundle-buy"
              >
                <span>Buy Now</span><span class="dot">•</span
                ><span class="current-price">$250</span>
              </a>
            </div>
          </div>
        </div>
      </dialog>
    `
      ), this.popup = document.querySelector("#bundle-popup");
    }
    eventListeners() {
      if (!this.popup) return;
      const n = this.popup.querySelector(
        '[data-button="bundle-popup-close"]'
      );
      n == null || n.addEventListener("click", () => {
        var t;
        (t = this.popup) == null || t.close(), l("exp_pdp_imp__button_06", "Close", "click", "Bundle includes");
      }), this.popup.addEventListener("click", (t) => {
        var i;
        t.target === this.popup && ((i = this.popup) == null || i.close(), l("exp_pdp_imp__button_06", "Close", "click", "Bundle includes"));
      });
      const e = this.popup.querySelector(
        '[data-button="bundle-buy"]'
      );
      e == null || e.addEventListener("click", () => {
        l("exp_pdp_imp__button_05", "Buy now", "click", "Bundle includes");
      });
    }
    openDialog() {
      this.popup && (this.popup.showModal(), l(
        "exp_pdp_imp__view_01",
        "Bundle includes",
        "view",
        "Bundle includes"
      ));
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = b, document.head.append(n);
    }
  }
  const u = "http://conversionratestore.github.io/projects/drgolly/removing_barriers_on_pdp/", x = `.crs-header-bundle {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 12px;
  border-radius: 24px;
  background: #c3e6e4;
  padding: 24px 16px;
  font-family: Raleway;
}

@media (max-width: 980px) {
  .crs-header-bundle {
    grid-template-columns: 1fr;
    row-gap: 0;
  }
}
.crs-header-bundle .header {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  gap: 12px;
  justify-items: center;
}

@media (max-width: 980px) {
  .crs-header-bundle .header {
    gap: 0;
  }
}

.crs-header-bundle .bg {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  align-self: center;
}

@media (max-width: 980px) {
  .crs-header-bundle .bg {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
}

.crs-header-bundle .footer {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

@media (max-width: 980px) {
  .crs-header-bundle .footer {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}
.crs-header-bundle .header .badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 102px;
  height: 36px;
  padding: 8px 15px;
  border-radius: 75px;
  background: #feedc7;
  color: #3c3c3b;
  font-size: 16.5px;
  font-weight: 500;
  line-height: 27.58px;
}

.crs-header-bundle .header .title {
  color: #095d66;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

@media (max-width: 980px) {
  .crs-header-bundle .header .title {
    line-height: 44px;
  }
}
.crs-header-bundle .header .save-text {
  color: #3c3c3b;
  font-family: Montserrat, sans-serif;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
}

.crs-header-bundle .bg {
  display: flex;
  justify-content: flex-end;
  width: calc(100% + 16px);
  margin-right: -16px;
}

@media (max-width: 980px) {
  .crs-header-bundle .bg {
    width: calc(100% + 32px);
    margin-left: -16px;
  }
}
.crs-header-bundle .bg img {
  width: 120%;
  max-width: 120%;
  object-position: 50px 0;
}

@media (max-width: 980px) {
  .crs-header-bundle .bg img {
    width: 100%;
    object-position: 0 0;
  }
}

.crs-header-bundle .footer .description {
  display: none;
}

@media (max-width: 980px) {
  .crs-header-bundle .footer .description {
    display: block;
    margin-top: 16px;
    color: #3c3c3b;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
  }
}

.crs-header-bundle .footer .actions {
  display: grid;
  justify-items: center;
  gap: 12px;
}

.crs-header-bundle .footer .buy-action {
  display: grid;
  justify-items: center;
  width: 100%;
}

@media (max-width: 980px) {
  .crs-header-bundle .footer .buy-action {
    margin-top: 16px;
  }
}
.crs-header-bundle .footer .save-price {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: max-content;
  height: 29px;
  padding: 10px 24px;
  border-radius: 75px 75px 0px 0px;
  background: #78bebe;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
}

.crs-header-bundle .footer .saved-price {
  color: #fff;
  text-decoration-line: line-through;
}

.crs-header-bundle .footer .discount {
  color: #f0d28b;
}

.crs-header-bundle .footer .buy-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 64px;
  width: 100%;
  border: none;
  border-radius: 75px;
  background: #095d66;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
}

.crs-header-bundle .footer :is(.current-price, .dot) {
  color: #f0d28b;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
}

.crs-header-bundle .footer .learn-more-btn {
  border: none;
  background: none;
  color: #095d66;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
}

@media (max-width: 980px) {
  .crs-header-bundle .footer .learn-more-btn {
    font-size: 15px;
    font-weight: 500;
    line-height: 28px;
  }
}
`;
  class v {
    constructor() {
      this.init(), this.popup = new f();
    }
    init() {
      this.addStyles(), this.addHeaderBundle(), this.eventListeners();
    }
    async addHeaderBundle() {
      const n = (
        /* HTML */
        `
      <div class="crs-header-bundle">
        <div class="header">
          <div class="badge">0-5 Years</div>
          <div class="title">Bundle & Save</div>
          <div class="save-text">
            Save $400 when you get the sleep bundle deal!
          </div>
        </div>
        <div class="bg">
          <img
            src="${u}/img/bundle.webp"
            alt=""
            width="254"
            height="264"
            loading="lazy"
          />
        </div>
        <div class="footer">
          <div class="description">Everything you need for 0-5 Years!</div>
          <div class="actions">
            <div class="buy-action">
              <div class="save-price">
                <div class="saved-price">$636.36</div>
                <div class="discount">-60%</div>
              </div>
              <a
                href="https://drgolly.com/sleep-bundle-deal/"
                class="buy-btn"
                data-button="bundle-buy"
              >
                <span>Buy Now</span><span class="dot">•</span
                ><span class="current-price">$227.27</span>
              </a>
            </div>
            <button
              type="button"
              class="learn-more-btn"
              data-button="bundle-popup"
            >
              Learn more what includes
            </button>
          </div>
        </div>
      </div>
    `
      ), e = await c(
        ".crs-guarantee-badges"
      );
      e == null || e.insertAdjacentHTML("afterend", n);
    }
    async eventListeners() {
      c(".crs-header-bundle a.buy-btn").then((n) => {
        n.addEventListener("click", () => {
          l(
            "exp_pdp_imp__button_03",
            "Buy Now",
            "click",
            "Bundle & Save 1"
          );
        });
      }), c('[data-button="bundle-popup"]').then((n) => {
        n.addEventListener("click", () => {
          this.popup.openDialog(), l(
            "exp_pdp_imp__button_04",
            "Learn more what includes",
            "click",
            "Bundle & Save 1"
          );
        });
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = x, document.head.append(n);
    }
  }
  const w = `.crs-bundle-section .crs-bundle-section-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 32px;
  row-gap: 44px;
  justify-items: center;
}

@media (max-width: 980px) {
  .crs-bundle-section .crs-bundle-section-inner {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

.crs-bundle-section .section-header {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
@media (max-width: 980px) {
  .crs-bundle-section .section-header {
    gap: 5px;
  }
}
.crs-bundle-section .bundle-presentation {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  width: 100%;
}

@media (max-width: 980px) {
  .crs-bundle-section .bundle-presentation {
    grid-column: 1 / -1;
  }
}

.crs-bundle-section .bundle-details {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

@media (max-width: 980px) {
  .crs-bundle-section .bundle-details {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
  }
}

.crs-bundle-section .section-header .badge {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-radius: 75px;
  background: #feedc7;
  padding: 8px 15px;
  color: #3c3c3b;
  text-align: center;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
}

@media (max-width: 980px) {
  .crs-bundle-section .section-header .badge {
    height: 36px;
    font-size: 16.5px;
    font-weight: 500;
    line-height: 27.58px;
  }
}

.crs-bundle-section .section-header h2 {
  padding: 0;
  color: #095d66;
  text-align: center;
  font-family: Raleway;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 67.68px;
}

@media (max-width: 980px) {
  .crs-bundle-section .section-header h2 {
    color: #095d66;
    text-align: center;
    font-family: Raleway;
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
  }
}
.crs-bundle-section .section-header .description {
  color: #3c3c3b;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
}

@media (max-width: 980px) {
  .crs-bundle-section .section-header .description {
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
  }
}

.crs-bundle-section .bundle-presentation .bundle-image {
  width: 100%;
}

@media (max-width: 980px) {
  .crs-bundle-section .bundle-presentation .bundle-image {
    margin-left: -25px;
    margin-right: -25px;
    width: calc(100% + 50px);
  }
}

.crs-bundle-section .bundle-presentation .bundle-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.crs-bundle-section .bundle-presentation .description {
  margin-top: 32px;
  color: #095d66;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 27.58px;
}

@media (max-width: 980px) {
  .crs-bundle-section .bundle-presentation .description {
    margin-top: 16px;
    color: #3c3c3b;
    text-align: center;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
  }
}
.crs-bundle-section .bundle-includes {
  padding: 24px;
  border-radius: 32px;
  background: #c3e6e4;
}

@media (max-width: 980px) {
  .crs-bundle-section .bundle-includes {
    padding: 0;
    background: none;
  }
}

.crs-bundle-section .bundle-includes .details-title {

  margin-bottom: 16px;
  color: #095d66;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 44px;
}

@media (max-width: 980px) {
  .crs-bundle-section .bundle-includes .details-title {
    margin-top: 32px;
    color: #095d66;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 44px; 
  }
}




.crs-bundle-section .actions {
  margin-top: 32px;
  display: grid;
  justify-items: center;
  gap: 12px;
}




.crs-bundle-section .actions--mob  {
  margin-top: 16px;
}

@media (min-width: 980px) {
  .crs-bundle-section .actions--mob {
    display: none;
  }
}

.crs-bundle-section .buy-action {
  display: grid;
  justify-items: center;
  width: 100%;
}


.crs-bundle-section .save-price {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: max-content;
  height: 29px;
  padding: 10px 24px;
  border-radius: 75px 75px 0px 0px;
  background: #78bebe;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
}

.crs-bundle-section .saved-price {
  color: #fff;
  text-decoration-line: line-through;
}

.crs-bundle-section .discount {
  color: #f0d28b;
}

.crs-bundle-section .buy-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 64px;
  width: 100%;
  border: none;
  border-radius: 75px;
  background: #095d66;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
}

.crs-bundle-section :is(.current-price, .dot) {
  color: #f0d28b;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
}
`;
  class y {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.findAndTransferBundleSection(), this.renderNewBundleSection(), this.eventListeners();
    }
    findAndTransferBundleSection() {
      const n = document.querySelectorAll(".et_pb_section"), e = Array.from(n).find((i) => {
        var s;
        const o = i.querySelector("h2");
        return o && ((s = o.textContent) == null ? void 0 : s.includes("Bundle & Save"));
      });
      if (!e)
        return;
      e.classList.add("crs-bundle-section"), e.setAttribute("id", "crs-bundle-section");
      const t = document.querySelector("#crs-comments-section");
      t && t.insertAdjacentElement("afterend", e);
    }
    renderNewBundleSection() {
      const n = (
        /* HTML */
        `
      <div class="et_pb_row et_pb_row_2_tb_body">
        <div class="crs-bundle-section-inner">
          <div class="section-header">
            <div class="badge">0-5 Years</div>
            <h2>Bundle & Save</h2>
            <div class="description">
              Save $400 when you get the sleep bundle deal!
            </div>
          </div>
          <div class="bundle-presentation">
            <div class="bundle-image">
              <img
                src="${u}/img/bundle.webp"
                alt=""
                width="254"
                height="264"
                loading="lazy"
              />
            </div>
            <div class="description">Everything you need for 0-5 Years!</div>
          </div>
          <div class="bundle-details">
            <div class="actions actions--mob">
              <div class="buy-action">
                <div class="save-price">
                  <div class="saved-price">$700.00</div>
                  <div class="discount">-64%</div>
                </div>
                <a
                  href="https://drgolly.com/sleep-bundle-deal/"
                  class="buy-btn"
                  data-button="section-bundle-buy-mob"
                >
                  <span>Buy Now</span><span class="dot">•</span
                  ><span class="current-price">$250</span>
                </a>
              </div>
            </div>

            <div class="bundle-includes">
              <div class="details-title">Bundle includes:</div>
              <div class="bundle-container">
                <div class="bundle-header">
                  <div></div>
                  <div class="title"><span>x 6 Courses:</span></div>
                  <div>Full price</div>
                  <div>Your price</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Preparation to Newborns: 0-4 Weeks</div>
                  <div class="old-price">$100.00</div>
                  <div class="new-price">$36.00</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Little Baby Sleep Program: 4-16 Weeks</div>
                  <div class="old-price">$100.00</div>
                  <div class="new-price">$36.00</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Big Baby Sleep Program: 4-8 Months</div>
                  <div class="old-price">$100.00</div>
                  <div class="new-price">$36.00</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">
                    Pre-Toddler Sleep Program: 8-12 Months
                  </div>
                  <div class="old-price">$100.00</div>
                  <div class="new-price">$36.00</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Toddler Sleep Program: 1-2 Years</div>
                  <div class="old-price">$100.00</div>
                  <div class="new-price">$36.00</div>
                </div>
                <div class="bundle-header">
                  <div class="title full">
                    <span>2x Program Supplements:</span>
                  </div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Second Child Supplement</div>
                  <div class="old-price">$50.00</div>
                  <div class="new-price">$18.00</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Twins Supplement</div>
                  <div class="old-price">$50.00</div>
                  <div class="new-price">$18.00</div>
                </div>
              </div>
            </div>
            <div class="actions">
              <div class="buy-action">
                <div class="save-price">
                  <div class="saved-price">$700.00</div>
                  <div class="discount">-64%</div>
                </div>
                <a
                  href="https://drgolly.com/sleep-bundle-deal/"
                  class="buy-btn"
                  data-button="section-bundle-buy"
                >
                  <span>Buy Now</span><span class="dot">•</span
                  ><span class="current-price">$250</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      ), e = document.querySelector("#crs-bundle-section");
      e && (e.innerHTML = n);
    }
    eventListeners() {
      h(
        "#crs-bundle-section",
        "exp_pdp_imp__view_06",
        "Bundle & Save 2",
        "Bundle & Save 2"
      ), h(
        "#crs-bundle-section .bundle-includes",
        "exp_pdp_imp__view_07",
        "Bundle includes 2",
        "Bundle includes 2"
      );
      const n = document.querySelector(
        '[data-button="section-bundle-buy-mob"]'
      );
      n == null || n.addEventListener("click", () => {
        l("exp_pdp_imp__button_10", "Buy Now", "click", "Bundle & Save 2");
      });
      const e = document.querySelector(
        '[data-button="section-bundle-buy"]'
      );
      e == null || e.addEventListener("click", () => {
        l("exp_pdp_imp__button_11", "Buy Now", "click", "Bundle & Save 2");
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = w, document.head.appendChild(n);
    }
  }
  const _ = [
    {
      id: 1,
      user: "Kate C",
      comment: "We are Doctor Golly converts! We had some friends give the book as a gift and since then we have gone onto the sleep program online. We couldn’t have felt more prepared by his approachable and practical solutions to the first 4 weeks of Bub and beyond. It has been more impactful than any In person classes we did as we had the class in our pocket to refer to and brush up on. Thank you Dr golly",
      date: "25 days ago"
    },
    {
      id: 2,
      user: "Jelena B",
      comment: "Really helpful and affordable! Its great to be able to get PD advice on the go and i can go through it in my own time.",
      date: "11 days ago"
    },
    {
      id: 3,
      user: "Jessica P",
      comment: "Our bub is just four weeks now - we loved Dr Golly’s book for the first four weeks, and so far we’re finding the modules for this next stage super helpful. It’s also very...",
      date: "3 days ago"
    }
  ], k = `.crs-comments-section {
  margin-bottom: 44px;
}

.crs-comments-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1354px;
  padding-inline: 15px;
  margin-inline: auto;
}

.crs-comments .comments-wrap {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  justify-content: space-between;
  gap: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.crs-comments .comments-wrap::-webkit-scrollbar {
  display: none;
}

@media (max-width: 980px) {
  .crs-comments .comments-wrap {
    --transform: 0;
    overflow-x: scroll;
    transition: transform 0.5s;
    scroll-snap-type: both mandatory;
    scroll-behavior: smooth;
  }
}

.crs-comment {
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 422px;
  flex: 1;
  padding: 26px 25px;
  border-radius: 24px;
  background: #f2f2f2;
  box-shadow: 0px 1.25px 5px -4px rgba(0, 0, 0, 0.05);
}

@media (max-width: 980px) {
  .crs-comment {
    width: calc(100vw - 30px);
    max-width: 100%;
  }
}

.crs-comment .header {
  display: flex;
  flex-wrap: wrap;
  column-gap: 9px;
  row-gap: 7px;
}

.crs-comment .user-name {
  color: #0e1311;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.8px;
}

.crs-comment .rating {
  display: flex;
  align-items: center;
}

.crs-comment .user-status {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #0e1311;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.4px; /* 140% */
}

.crs-comment .user-status::before {
  content: '';
  width: 15px;
  height: 15px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none"><path d="M10.9863 7L8.32031 10.3984C8.11523 10.6621 7.84424 10.8184 7.50732 10.8672C7.17041 10.916 6.86523 10.8428 6.5918 10.6475C6.57227 10.6279 6.55029 10.6084 6.52588 10.5889C6.50146 10.5693 6.47949 10.5498 6.45996 10.5303L4.84863 9.00684C4.70215 8.86035 4.62646 8.68457 4.62158 8.47949C4.6167 8.27441 4.6875 8.09863 4.83398 7.95215C4.9707 7.7959 5.1416 7.71533 5.34668 7.71045C5.55176 7.70557 5.73242 7.77637 5.88867 7.92285L7.30957 9.27051L9.81445 6.07715C9.94141 5.91113 10.1074 5.81592 10.3125 5.7915C10.5176 5.76709 10.7031 5.81836 10.8691 5.94531C11.0254 6.07227 11.1157 6.23828 11.1401 6.44336C11.1646 6.64844 11.1133 6.83398 10.9863 7ZM13.5645 8.04004C13.5742 7.59082 13.4497 7.18066 13.1909 6.80957C12.9321 6.43848 12.5879 6.17969 12.1582 6.0332C12.3633 5.63281 12.4316 5.20801 12.3633 4.75879C12.2949 4.30957 12.1045 3.91895 11.792 3.58691C11.4893 3.26465 11.1182 3.06934 10.6787 3.00098C10.2393 2.93262 9.82422 3.00098 9.43359 3.20605C9.30664 2.77637 9.06494 2.4248 8.7085 2.15137C8.35205 1.87793 7.94922 1.74121 7.5 1.74121C7.05078 1.74121 6.64795 1.87793 6.2915 2.15137C5.93506 2.4248 5.69336 2.77637 5.56641 3.20605C5.17578 3.00098 4.76074 2.93262 4.32129 3.00098C3.88184 3.06934 3.51074 3.26465 3.20801 3.58691C2.89551 3.91895 2.70508 4.30957 2.63672 4.75879C2.56836 5.20801 2.63672 5.63281 2.8418 6.0332C2.42188 6.18945 2.08252 6.45068 1.82373 6.81689C1.56494 7.18311 1.43555 7.59082 1.43555 8.04004C1.43555 8.48926 1.56494 8.89697 1.82373 9.26318C2.08252 9.62939 2.42188 9.89062 2.8418 10.0469C2.63672 10.4473 2.56836 10.8721 2.63672 11.3213C2.70508 11.7705 2.89551 12.1611 3.20801 12.4932C3.51074 12.8154 3.88184 13.0107 4.32129 13.0791C4.76074 13.1475 5.17578 13.0791 5.56641 12.874C5.69336 13.3037 5.93506 13.6553 6.2915 13.9287C6.64795 14.2021 7.05078 14.3389 7.5 14.3389C7.94922 14.3389 8.35205 14.2021 8.7085 13.9287C9.06494 13.6553 9.30664 13.3037 9.43359 12.874C9.82422 13.0791 10.2393 13.1475 10.6787 13.0791C11.1182 13.0107 11.4893 12.8154 11.792 12.4932C12.1045 12.1611 12.2949 11.7705 12.3633 11.3213C12.4316 10.8721 12.3633 10.4473 12.1582 10.0469C12.5879 9.90039 12.9321 9.6416 13.1909 9.27051C13.4497 8.89941 13.5742 8.48926 13.5645 8.04004Z" fill="%230E1311"/></svg>');
  background-repeat: no-repeat;
}

.crs-comment .content {
  margin-top: 7px;
  color: #0e1311;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Кількість видимих рядків */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.crs-comment .footer {
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
}

.crs-comment .date {
  color: #0e1311;
  text-align: right;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 500;
  line-height: 15.4px;
}

.crs-comments-container .actions {
  display: flex;
  justify-content: center;
}

.crs-comments-container .actions button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  border: none;
  background: none;
  background-repeat: no-repeat;
  background-position: center;
}

.crs-comments-container .actions button:disabled {
  opacity: 0.5;
}

@media (min-width: 981px) {
  .crs-comments-container .actions button {
    display: none;
  }
}

.crs-comments-container .actions button[data-button='comment-next'] {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M7.83844 4.55322L15.7369 12.7563L7.83844 21.0063C7.65094 21.1626 7.55719 21.3306 7.55719 21.5103C7.55719 21.6899 7.65094 21.8735 7.83844 22.061C7.99469 22.2642 8.16266 22.3657 8.34235 22.3657C8.52203 22.3657 8.70563 22.2642 8.89313 22.061L17.5884 13.2954C17.7447 13.1235 17.8228 12.9517 17.8228 12.7798C17.8228 12.6079 17.7447 12.4204 17.5884 12.2173L8.89313 3.45166C8.70563 3.24854 8.52203 3.14697 8.34235 3.14697C8.16266 3.14697 7.99469 3.24854 7.83844 3.45166C7.65094 3.62354 7.55719 3.80322 7.55719 3.99072C7.55719 4.17822 7.65094 4.36572 7.83844 4.55322Z" fill="%230E1311"/></svg>');
}
.crs-comments-container .actions button[data-button='comment-back'] {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M17.1616 4.55322L9.26312 12.7563L17.1616 21.0063C17.3491 21.1626 17.4428 21.3306 17.4428 21.5103C17.4428 21.6899 17.3491 21.8735 17.1616 22.061C17.0053 22.2642 16.8373 22.3657 16.6577 22.3657C16.478 22.3657 16.2944 22.2642 16.1069 22.061L7.41156 13.2954C7.25531 13.1235 7.17719 12.9517 7.17719 12.7798C7.17719 12.6079 7.25531 12.4204 7.41156 12.2173L16.1069 3.45166C16.2944 3.24854 16.478 3.14697 16.6577 3.14697C16.8373 3.14697 17.0053 3.24854 17.1616 3.45166C17.3491 3.62354 17.4428 3.80322 17.4428 3.99072C17.4428 4.17822 17.3491 4.36572 17.1616 4.55322Z" fill="%230E1311"/></svg>');
}
`;
  class C {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners();
    }
    render() {
      const n = Array(5).fill(
        `<img src="${u}/img/icons/star.svg" width="20" height="20" loading="lazy" />`
      ).join(""), e = (
        /* HTML */
        `
      <div class="crs-comments-section">
        <div class="crs-comments-container">
          <div class="crs-comments">
            <div class="comments-wrap">
              ${_.map((t) => (
          /* HTML */
          `
                    <div class="crs-comment" id="comment-${t.id}">
                      <div class="header">
                        <div class="user-name">${t.user}</div>
                        <div class="rating">${n}</div>
                        <div class="user-status">Verified Customer</div>
                      </div>
                      <div class="content">${t.comment}</div>
                      <div class="footer">
                        <div class="date">${t.date}</div>
                      </div>
                    </div>
                  `
        )).join("")}
            </div>
          </div>
          <div class="actions">
            <button data-button="comment-back" disabled></button>
            <button data-button="comment-next"></button>
          </div>
        </div>
      </div>
    `
      );
      document.querySelectorAll(".et_pb_section").forEach((t) => {
        t.querySelector("h1") && t.insertAdjacentHTML("afterend", e);
      });
    }
    eventListeners() {
      let n = 0;
      const e = document.querySelector(
        '[data-button="comment-next"]'
      ), t = document.querySelector(
        '[data-button="comment-back"]'
      ), i = document.querySelector(".comments-wrap"), s = document.querySelectorAll(".crs-comment").length, r = document.querySelector(".crs-comment"), a = (r == null ? void 0 : r.offsetWidth) || 0;
      e == null || e.addEventListener("click", () => {
        n < s - 1 && (n++, i.scrollLeft = n * a, n === s - 1 ? e.disabled = !0 : t.disabled = !1);
      }), t == null || t.addEventListener("click", () => {
        n > 0 && (n--, i.scrollLeft = n * a, n === 0 ? t.disabled = !0 : e.disabled = !1);
      }), i == null || i.addEventListener("scroll", () => {
        const p = Math.round(i.scrollLeft / a);
        p !== n && (n = p, n === 0 ? (t.disabled = !0, e.disabled = !1) : t.disabled = !1, n === s - 1 ? (e.disabled = !0, t.disabled = !1) : e.disabled = !1);
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = k, document.head.append(n);
    }
  }
  const L = "";
  class S {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.findTargetSection(), this.render(), this.findCommentsSection();
    }
    findTargetSection() {
      const n = document.querySelectorAll(".et_pb_section"), e = Array.from(n).find(
        (t) => t.querySelector("#ReviewsWidget")
      );
      e && (e.classList.add("crs-comments-section"), e.setAttribute("id", "crs-comments-section"));
    }
    findCommentsSection() {
      const n = document.querySelectorAll(".et_pb_section"), e = Array.from(n).find((t) => {
        var o;
        const i = t.querySelector(".et_pb_text_inner p");
        return i && ((o = i.textContent) == null ? void 0 : o.includes("As featured in"));
      });
      e && (e.classList.add("crs-featured-section"), e.setAttribute("id", "crs-featured-section"));
    }
    render() {
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = L, document.head.appendChild(n);
    }
  }
  const z = `.crs-compare-section h2 {
  padding: 0 !important;
  color: #095d66 !important;
  text-align: center;
  font-family: Raleway;
  font-size: 30px !important;
  font-weight: 600 !important;
  line-height: 40px !important;
  text-transform: capitalize !important;
}

.crs-compare-section h2 span {
  color: #8bc3c3 !important;
}

.compare-block {
  margin-top: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media (max-width: 980px) {
  .compare-block {
    margin-top: 32px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.compare-block .header,
.compare-block .row,
.compare-block .footer {
  display: contents;
}

@media (max-width: 980px) {
}

.compare-block .header > .header-cell {
  display: flex;
  align-items: flex-end;
  text-align: center;
}

.compare-block .header > .header-cell > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 8px 12px;
  border-top: 1px solid #e2f1f1;
  border-right: 1px solid #e2f1f1;
  border-bottom: 1px solid #e2f1f1;
  background: #f1fafa;
  color: #000;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}

.compare-block .header > .header-cell:last-child > div {
  border-radius: 0px 32px 0px 0px;
}

@media (max-width: 980px) {
  .compare-block .header > .header-cell:last-child > div {
    border-radius: 0px 12px 0px 0px;
  }
}
.compare-block .header > .drgolly {
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  padding: 8px 12px;
  border-radius: 32px 32px 0px 0px;
  background: #c3eaea;
}

@media (max-width: 980px) {
  .compare-block .header > .drgolly {
    grid-column: 1 / 2;
    height: 60px;
    border-radius: 12px 0px 0px 0px;
  }

  .compare-block .header > .drgolly img {
    max-height: 43px;
  }
}

.compare-block .row > .name {
  grid-column: 1 / 2;
  padding-block: 12px;
  text-align: left;
  border-bottom: 1px solid #e1f4f4;
  color: #000;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
}

@media (max-width: 980px) {
  .compare-block .row > .name {
    grid-column: 1 / -1;
    text-align: center;
    padding-inline: 25px;
    border-bottom: none;
    border-inline: 1px solid #e2f1f1;
  }
}

.compare-block .row > div {
  min-height: 60px;
}

@media (max-width: 980px) {
  .compare-block .row > div {
    min-height: 42px;
  }
}
.compare-block .row .checked--golly {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-top: 1px solid #d3f9f9;
  background: #c3eaea;
}

.compare-block .row :is(.checked, .unchecked) {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-right: 1px solid #e2f1f1;
  border-bottom: 1px solid #e2f1f1;
  background: #f1fafa;
}

.compare-block .row .checked::after {
  content: '';
  width: 18px;
  height: 14px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none"><path d="M16.4529 2.3079L15.2974 3.60082L14.3613 4.64859L13.8088 5.2665L13.576 5.52509V5.52845L13.5191 5.59057L12.3654 6.88014L7.08391 12.7906C6.71719 13.202 6.20312 13.4119 5.68731 13.4119C5.25199 13.4119 4.81493 13.2608 4.46326 12.9569L0.67215 9.66246C0.148021 9.20571 0.0927645 8.41146 0.54656 7.88596C1.00036 7.36037 1.79407 7.30328 2.3182 7.7583L5.63376 10.6397L10.4965 5.19766L12.0907 3.41611L12.8743 2.53794L13.427 1.92002L14.5824 0.627097C15.0445 0.108247 15.8383 0.0645885 16.3557 0.529705C16.8715 0.993147 16.9149 1.78905 16.4529 2.3079Z" fill="%23B0C2C2"/></svg>');
}

.compare-block .row .unchecked::after {
  content: '';
  width: 14px;
  height: 14px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><g clip-path="url(%23clip0_5070_3895)"><path d="M8.47593 6.80967L12.8431 2.44248C13.3332 1.95498 13.3332 1.16533 12.8482 0.675295C12.3607 0.185256 11.571 0.185256 11.081 0.670217L11.0785 0.672756L6.71128 5.03994L2.34155 0.675295C1.85405 0.187795 1.06187 0.187795 0.574365 0.675295C0.0868652 1.1628 0.0868652 1.95498 0.574365 2.44248L4.94155 6.80967L0.574365 11.1769C0.0868652 11.6644 0.0868652 12.4565 0.574365 12.944C1.06187 13.4315 1.85405 13.4315 2.34155 12.944L6.70874 8.57686L11.0759 12.944C11.5634 13.4315 12.3556 13.4315 12.8431 12.944C13.3306 12.4565 13.3306 11.6644 12.8431 11.1769L8.47593 6.80967Z" fill="%23B0C2C2"/></g><defs><clipPath id="clip0_5070_3895"><rect width="13" height="13" fill="white" transform="translate(0.20874 0.309814)"/></clipPath></defs></svg>');
}

.compare-block .row .checked--golly::after {
  content: '';
  width: 18px;
  height: 14px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M16.9468 2.49808L15.7913 3.79101L14.8552 4.83877L14.3027 5.45669L14.0699 5.71527V5.71863L14.0129 5.78076L12.8593 7.07032L7.5778 12.9808C7.21109 13.3922 6.69702 13.6021 6.1812 13.6021C5.74589 13.6021 5.30882 13.451 4.95716 13.1471L1.16605 9.85265C0.641918 9.3959 0.586661 8.60165 1.04046 8.07615C1.49425 7.55056 2.28797 7.49346 2.8121 7.94848L6.12765 10.8299L10.9904 5.38785L12.5846 3.6063L13.3682 2.72812L13.9209 2.11021L15.0763 0.817282C15.5384 0.298432 16.3321 0.254774 16.8496 0.719891C17.3654 1.18333 17.4088 1.97923 16.9468 2.49808Z" fill="%2352A7A7"/></svg>');
}

.compare-block .footer > .buy {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 0px 0px 32px 32px;
  border-top: 1px solid #d3f9f9;
  background: #c3eaea;
}


@media (max-width: 980px) {
  .compare-block .footer > .buy {
    grid-column: 1 / -1;
    gap: 16px;
    padding: 0;
    background: transparent;
  }
}

.compare-block .footer > .buy .product-name {
  color: #095d66;
  text-align: center;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.45px;
}

@media (max-width: 980px) {
  .compare-block .footer > .buy .product-name {
    margin-top: 32px;
    font-size: 17px;
    line-height: 24px;
  }
}

.compare-block .footer > .buy button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 100%;
  border-radius: 75px;
  border: none;
  background: #095d66;
  color: #fff;
  text-align: center;
  font-family: Raleway;
  font-size: 22px;
  font-weight: 700;
  line-height: 28.05px;
  cursor: pointer;
}
`;
  class B {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners();
    }
    render() {
      var t;
      const e = (
        /* HTML */
        `
      <div class="et_pb_section crs-compare-section" id="crs-compare-section">
        <div class="et_pb_row et_pb_row_2_tb_body">
          <h2>Dr.Golly vs <span>other baby sleep products</span></h2>
          <div class="compare-block">
            <div class="header">
              <div class="header-cell drgolly">
                <img
                  decoding="async"
                  src="https://drgolly.com/wp-content/uploads/2022/05/logo-drgolly.svg"
                  alt="logo drgolly"
                  title="logo drgolly"
                  class="wp-image-28"
                />
              </div>
              <div class="header-cell"><div>Sleep Consultant</div></div>
              <div class="header-cell"><div>Free Resources</div></div>
            </div>
            <div class="row">
              <div class="name">Is it led by a pediatric expert?</div>
              <div class="checked--golly"></div>
              <div class="checked"></div>
              <div class="unchecked"></div>
            </div>
            <div class="row">
              <div class="name">
                Provides actionable, step-by-step guidance?
              </div>
              <div class="checked--golly"></div>
              <div class="checked"></div>
              <div class="unchecked"></div>
            </div>
            <div class="row">
              <div class="name">Cost and effort effectiveness</div>
              <div class="checked--golly"></div>
              <div class="unchecked"></div>
              <div class="unchecked"></div>
            </div>
            <div class="row">
              <div class="name">Accessible 24/7?</div>
              <div class="checked--golly"></div>
              <div class="unchecked"></div>
              <div class="unchecked"></div>
            </div>
            <div class="row">
              <div class="name">
                Trust-building guarantees (e.g., money-back)?
              </div>
              <div class="checked--golly"></div>
              <div class="unchecked"></div>
              <div class="unchecked"></div>
            </div>
            <div class="row">
              <div class="name">
                Includes comprehensive resources (e.g., videos, PDFs)?
              </div>
              <div class="checked--golly"></div>
              <div class="unchecked"></div>
              <div class="unchecked"></div>
            </div>
            <div class="row">
              <div class="name">Ease of implementation</div>
              <div class="checked--golly"></div>
              <div class="checked"></div>
              <div class="unchecked"></div>
            </div>
            <div class="footer">
              <div class="buy">
                <div class="product-name" >
                  ${(t = document.querySelector("h1")) == null ? void 0 : t.textContent}
                </div>
                <button data-button="compare-buy">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      );
      c("#crs-course-help").then((i) => {
        const o = i;
        o == null || o.insertAdjacentHTML("afterend", e);
      });
    }
    eventListeners() {
      c('button[data-button="compare-buy"]').then((n) => {
        const e = n;
        e == null || e.addEventListener("click", () => {
          const t = document.querySelector(
            ".single_add_to_cart_button"
          );
          t == null || t.click(), l("exp_pdp_imp__button_08", "Buy now", "click", "Dr.Golly vs other baby sleep products");
        }), h(".crs-compare-section", "exp_pdp_imp__view_04", "Dr.Golly vs other baby sleep products", "Dr.Golly vs other baby sleep products");
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = z, document.head.append(n);
    }
  }
  const A = `.crs-course-help #crs-container-help {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 92px;
  row-gap: 36px;
}

@media (max-width: 980px) {
  .crs-course-help #crs-container-help {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    row-gap: 36px;
  }
}

.crs-course-help .title-block {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  max-width: 100% !important;
  width: 100% !important;
  padding: 0 !important;
}

.crs-course-help .empowered {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.crs-course-help#crs-course-help
  .et_pb_bg_layout_light
  .et_pb_text_inner
  h2.text__montserrat {
  margin-top: 79px;
  padding: 0;
  color: #095d66 !important;
  text-align: left !important;
  font-family: Raleway;
  font-size: 40px !important;
  font-weight: 700 !important;
  line-height: 50px !important;
}

@media (max-width: 980px) {
  .crs-course-help#crs-course-help
    .et_pb_bg_layout_light
    .et_pb_text_inner
    h2.text__montserrat {
    margin-top: 0;
    text-align: center !important;
    font-size: 36px !important;
    font-weight: 700;
  }
}

.crs-course-help#crs-course-help .et_pb_bg_layout_light .et_pb_text_inner h3 {
  margin-top: 12px;
  color: #25a7a7;
  text-align: left !important;
  font-size: 40px !important;
  font-weight: 400;
  line-height: 50px; /* 125% */
}

@media (max-width: 980px) {
  .crs-course-help#crs-course-help .et_pb_bg_layout_light .et_pb_text_inner h3 {
    text-align: center !important;
  }
}

.crs-course-help .empowered > div {
  width: 100% !important;
  margin: 0 !important;
}

.crs-course-help .empowered > div > * {
  text-align: left !important;
}

.crs-course-help #crs-container-help .empowered div.et_pb_module {
  margin-bottom: 0 !important;
}

.crs-course-help .empowered .et_pb_text_inner {
  color: #3c3c3b;
  font-family: Montserrat;
  font-size: 15px !important;
  font-style: normal;
  font-weight: 500 !important;
  line-height: 28.89px !important;
}

@media (max-width: 980px) {
  .crs-course-help .empowered .et_pb_text_inner {
    text-align: center;
  }
}

.crs-course-help .empowered h4 {
  margin-bottom: 16px;
  padding: 0 !important;
  color: #3c3c3b;
  font-family: Raleway;
  font-size: 18px !important;
  font-style: normal;
  font-weight: 700 !important;
  line-height: 26px !important;
}
#crs-video-section {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

@media (max-width: 980px) {
  #crs-video-section {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}

.crs-video-section {
  border-radius: 24px;
  background: #f1fafa;
  padding: 32px 52px;
  max-width: 524px;
}

@media (max-width: 980px) {
  .crs-video-section {
    max-width: 100%;
    padding: 16px;
  }
}
.crs-video-section .badges {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 12px 32px;
}

@media (max-width: 980px) {
  .crs-video-section .badges .wp-image-1719 {
    display: none;
  }
}

.crs-video-section img {
  height: auto;
  max-height: 72px;
  width: auto;
  max-width: 100px;
}

@media (max-width: 980px) {
  .crs-video-section img {
    max-height: 52px;
  }
}
.crs-video-section .video {
  width: 100%;
  height: auto;
}
.crs-video-section .video-container {
  margin-top: 12px;
  width: 100%;
}
.crs-video-section :is(.video-cover, .video-iframe, iframe) {
  width: 100%;
  height: 340px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}

@media (max-width: 980px) {
  .crs-video-section :is(.video-cover, .video-iframe, iframe) {
    height: 236px;
  }
}
.crs-video-section .rating {
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crs-video-section .rating .ruk_rating_snippet {
  height: auto !important;
}
.crs-video-section .buy-now {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

@media (max-width: 980px) {
  .crs-video-section .buy-now {
    margin-top: 12px;
  }
}

.crs-video-section .buy-now button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 62px;
  border-radius: 75px;
  border: none;
  background: #095d66;
  color: #fff;
  text-align: center;
  font-family: Raleway;
  font-size: 22px;
  font-weight: 700;
  line-height: 28.05px;
  cursor: pointer;
}
.crs-video-section .title {
  margin-top: 12px;
  color: #095d66;
  text-align: center;
  font-family: Raleway;
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.45px;
}

.crs-video-section .description {
  margin-top: 16px;
  color: #095d66;
  text-align: center;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 140% */
}

@media (max-width: 980px) {
  .crs-video-section .description {
    margin-top: 12px;
    font-size: 13px;
  }
}

.crs-result__container 
.crs-result h2 {
  color: #095d66;
  text-align: center;
  font-family: Raleway;
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  text-transform: capitalize;
}

.crs-result .timeline {
  position: relative;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  border-radius: 24px;
  background: #f1fafa;
}

@media (max-width: 980px) {
  .crs-result .timeline {
    margin-top: 36px;
    flex-direction: column;
    padding: 16px;
    gap: 43px;
  }
}

.crs-result .timeline::after {
  content: '';
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 5px;
  width: 80%;
  background: #d3ebeb;
}

@media (max-width: 1500px) {
  .crs-result .timeline::after {
    width: 76%;
  }
}

@media (max-width: 980px) {
  .crs-result .timeline::after {
    top: 50%;
    left: 81px;
    transform: translate(0, -50%);
    width: 5px;
    height: 74%;
  }
}

.crs-result .breakpoint {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-width: 192px;
}

@media (max-width: 980px) {
  .crs-result .breakpoint {
    flex-direction: row;
    max-width: 100%;
  }
}

.crs-result .breakpoint .date {
  color: #52a7a7;

  font-family: Raleway;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
}

@media (max-width: 980px) {
  .crs-result .breakpoint .date {
    margin-right: 12px;
  }
}

.crs-result .breakpoint .point {
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 20px;
  height: 20px;
  background-color: #d3ebeb;
  border: 4px solid #f1fafa;
  border-radius: 50%;
  z-index: 2;
}

@media (max-width: 980px) {
  .crs-result .breakpoint .point {
    margin-top: 0;
    margin-right: 16px;
  }
}
.crs-result .breakpoint .point::after {
  content: '';
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  background-color: #52a7a7;
  border-radius: 50%;
}

@media (max-width: 980px) {
  .crs-result .breakpoint .point {
    margin-top: 0;
  }
}

.crs-result .breakpoint .description {
  margin-top: 8px;
  color: #3c3c3b;
  text-align: center;
  font-family: Raleway, serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
}

@media (max-width: 980px) {
  .crs-result .breakpoint .description {
    margin-top: 0;
    text-align: left;
  }
}
`;
  class M {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.sectionChanges(), this.renderVideoBlock(), this.eventListeners(), this.resultBlock();
    }
    sectionChanges() {
      document.querySelectorAll(".et_pb_section").forEach((n) => {
        const e = n.querySelector("h2");
        if (e && e.textContent === "Will this course help?") {
          n.classList.add("crs-course-help"), n.setAttribute("id", "crs-course-help"), n.insertAdjacentHTML(
            "beforeend",
            /* HTML */
            `
          <div id="crs-container-help"></div>
        `
          );
          const i = document.querySelector("#crs-container-help");
          n.querySelectorAll(".et_pb_row").forEach((s) => {
            var r;
            (r = s == null ? void 0 : s.textContent) != null && r.includes("Will this course help?") && (s.classList.remove("et_pb_row", "et_pb_row_3_tb_body"), s.classList.add("title-block"), i == null || i.insertAdjacentElement("afterbegin", s)), s.querySelector("h4") && (s.classList.add("empowered"), s.classList.remove("et_pb_row", "et_pb_row_4_tb_body"), i == null || i.insertAdjacentElement("beforeend", s));
          }), i == null || i.insertAdjacentHTML(
            "beforeend",
            /* HTML */
            `
          <div id="crs-video-section"></div>
        `
          ), i == null || i.classList.add("et_pb_row", "et_pb_row_2_tb_body");
        }
      });
    }
    renderVideoBlock() {
      var i, o;
      const n = (i = document.querySelector("h1")) == null ? void 0 : i.textContent, e = (o = document.querySelector(
        ".woocommerce-Price-amount.amount"
      )) == null ? void 0 : o.textContent, t = (
        /* HTML */
        `
      <div class="crs-video-section">
        <div class="badges">
          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1718 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/Baby-Sleep-Consultant-Badge.png"
            alt="Baby Sleep Consultant Badge"
            width="900"
            height="900"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/Baby-Sleep-Consultant-Badge.png         900w,
              https://drgolly.com/wp-content/uploads/2022/06/Baby-Sleep-Consultant-Badge-480x480.png 480w
            "
            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 900px, 100vw"
          />
          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1721 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/ABA-logo.png"
            alt="ABA logo"
            width="250"
            height="119"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo.png       250w,
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo-24x11.png  24w,
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo-36x17.png  36w,
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo-48x23.png  48w
            "
            sizes="(max-width: 250px) 100vw, 250px"
          />
          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1719 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/ibclc.png"
            alt="ibclc"
            width="300"
            height="300"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/ibclc.png         300w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-100x100.png 100w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-150x150.png 150w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-24x24.png    24w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-36x36.png    36w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-48x48.png    48w
            "
            sizes="(max-width: 300px) 100vw, 300px"
          />
          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1720 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/RACP-logo.png"
            alt="RACP logo"
            width="213"
            height="160"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo.png       213w,
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo-24x18.png  24w,
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo-36x27.png  36w,
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo-48x36.png  48w
            "
            sizes="(max-width: 213px) 100vw, 213px"
          />
        </div>
        <div class="video">
          <div class="video-container">
            <div
              class="video-cover"
              style="background-image: url('${u}/img/video_cover.webp');"
            ></div>
            <div class="video-iframe" style="display: none;"></div>
          </div>
        </div>
        <div class="rating"></div>
        <div class="title">${n}</div>
        <div class="buy-now">
          <button data-button="buy-now">
            <span>Buy Now</span><span class="dot">•</span
            ><span>${e}</span>
          </button>
        </div>
        <div class="description">Less than the cost of a sleepless night!</div>
      </div>
    `
      );
      c("#crs-video-section").then((s) => {
        s.insertAdjacentHTML("beforeend", t);
        const r = document.querySelector(".ruk_rating_snippet"), a = r == null ? void 0 : r.cloneNode(!0), p = document.querySelector(".crs-video-section .rating");
        p == null || p.appendChild(a);
      });
    }
    eventListeners() {
      c(".video-cover").then((n) => {
        const e = n;
        e == null || e.addEventListener("click", () => {
          const i = e.parentElement.querySelector(
            ".video-iframe"
          );
          e.remove();
          const o = document.createElement("iframe");
          o.src = "https://www.youtube.com/embed/E7u4TtxZLd8?autoplay=1", o.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", o.allowFullscreen = !0, i.appendChild(o), i.style.display = "block";
        }), h(
          ".crs-video-section",
          "exp_pdp_imp__view_02",
          "2 min video",
          "2 min video"
        );
      }), c('[data-button="buy-now"]').then((n) => {
        n.addEventListener("click", () => {
          const e = document.querySelector(
            ".single_add_to_cart_button"
          );
          e == null || e.click(), l("exp_pdp_imp__button_07", "Buy now", "click", "2 min video");
        });
      }), h(".crs-result", "exp_pdp_imp__view_03", "When will I see results from the program?", "When will I see results from the program?");
    }
    resultBlock() {
      const n = (
        /* HTML */
        ` <div class="et_pb_row et_pb_row_2_tb_body">
      <div class="crs-result">
        <div class="crs-result__container">
          <h2>When will I see results from the program?</h2>
          <div class="timeline">
            <div class="breakpoint">
              <div class="date">Week 1</div>
              <div class="point"></div>
              <div class="description">Establishing Foundations</div>
            </div>
            <div class="breakpoint">
              <div class="date">Week 2</div>
              <div class="point"></div>
              <div class="description">Implementing Routines</div>
            </div>
            <div class="breakpoint">
              <div class="date">Week 3</div>
              <div class="point"></div>
              <div class="description">Adapting to Challenges</div>
            </div>
            <div class="breakpoint">
              <div class="date">Week 4</div>
              <div class="point"></div>
              <div class="description">
                Confident in supporting helping my baby have a health safe sleep
                routine.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
      ), e = document.querySelector("#crs-course-help");
      e == null || e.insertAdjacentHTML("beforeend", n);
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = A, document.head.append(n);
    }
  }
  const g = {
    "0-4 weeks": "/baby-sleep-program/newborns-0-4-weeks/",
    "4-16 weeks": "/baby-sleep-program/little-baby-4-16-weeks/",
    "4-8 months": "/baby-sleep-program/big-baby-4-8-months/",
    "8-12 months": "/toddler-sleep-program/pre-toddler-8-12-months/",
    "1-2 years": "/toddler-sleep-program/1-2-years/",
    "2-5 years": "/toddler-sleep-program/pre-school-2-5-years/"
  }, $ = `.crs-different-section {
  position: relative;
}

.crs-different-section .et_pb_row {
  position: static !important;
}
.crs-different-section-inner {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-block: 62px;
}

@media (max-width: 980px) {
  .crs-different-section-inner {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-block: 32px;
  }
}
.crs-different-section h2 {
  margin-top: 24px;
  padding: 0;
  color: #8bc3c3;
  font-family: Raleway;
  font-size: 40.5px;
  font-weight: 700;
  line-height: 57.11px;
}

@media (min-width: 981px) {
  .crs-different-section h2 br {
    display: none;
  }
}

@media (max-width: 980px) {
  .crs-different-section h2 {
    margin-top: 28px;
    text-align: center;
    font-size: 36px;
    line-height: 50.76px;
  }
}
.crs-different-section .badges {
  display: flex;
  align-items: center;
  gap: 70px;
}

@media (max-width: 980px) {
  .crs-different-section .badges {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }
}

.crs-different-section .badges img {
  width: auto;
  max-width: 158px;
  height: auto;
  max-height: 75px;
}

@media (max-width: 980px) {
  .crs-different-section .badges img {
    max-width: 84px;
    max-height: 40px;
  }
}

.crs-different-section .bg {
  position: absolute;
  inset: 0;
  background-color: #f8f8f8;
}

@media (max-width: 980px) {
  .crs-different-section .bg {
    order: 1;
    position: static;
    margin-left: -25px;
    margin-right: -25px;
    width: calc(100% + 50px);
    height: 350px;
  }
}
.crs-different-section .bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: -130px 0;
}

@media (max-width: 980px) {
  .crs-different-section .bg img {
    object-position: 0 0;
  }
}

.different-content {
  position: relative;
  z-index: 2;
  max-width: 688px;
}

@media (max-width: 980px) {
  .different-content {
    order: 2;
  }
}
.different-content .text-block {
  margin-top: 12px;
}

@media (max-width: 980px) {
  .different-content .text-block {
    margin-top: 22px;
    text-align: center;
  }
}

.different-content .text-block p {
  color: #3c3c3b;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.58px;
}

@media (max-width: 980px) {
  .different-content .text-block p {
    line-height: 26.46px;
  }
}
`;
  class j {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.findTargetSection(), this.render(), this.findAndPassFeaturedSection();
    }
    findTargetSection() {
      const n = document.querySelectorAll(".et_pb_section"), e = Array.from(n).find((t) => {
        var o;
        const i = t.querySelector("h2");
        return i && ((o = i.textContent) == null ? void 0 : o.includes("What’s covered in"));
      });
      e && (e.classList.add("crs-different-section"), e.setAttribute("id", "crs-different-section"), h(
        "#crs-different-section",
        "exp_pdp_imp__view_05",
        "What Makes Dr. Golly Different?",
        "What Makes Dr. Golly Different?"
      ));
    }
    findAndPassFeaturedSection() {
      const n = document.querySelectorAll(".et_pb_section"), e = Array.from(n).find((i) => {
        var s;
        const o = i.querySelector(".et_pb_text_inner p");
        return o && ((s = o.textContent) == null ? void 0 : s.includes("As featured in"));
      });
      if (!e)
        return;
      e.classList.add("crs-featured-section"), e.setAttribute("id", "crs-featured-section");
      const t = document.querySelector("#crs-different-section");
      t && t.insertAdjacentElement("beforebegin", e);
    }
    render() {
      const n = (
        /* HTML */
        ` <div class="crs-different-section-inner">
      <div class="different-content">
        <div class="badges">
          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1718 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/Baby-Sleep-Consultant-Badge.png"
            alt="Baby Sleep Consultant Badge"
            width="900"
            height="900"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/Baby-Sleep-Consultant-Badge.png         900w,
              https://drgolly.com/wp-content/uploads/2022/06/Baby-Sleep-Consultant-Badge-480x480.png 480w
            "
            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 900px, 100vw"
          />
          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1720 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/RACP-logo.png"
            alt="RACP logo"
            width="213"
            height="160"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo.png       213w,
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo-24x18.png  24w,
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo-36x27.png  36w,
              https://drgolly.com/wp-content/uploads/2022/06/RACP-logo-48x36.png  48w
            "
            sizes="(max-width: 213px) 100vw, 213px"
          />

          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1719 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/ibclc.png"
            alt="ibclc"
            width="300"
            height="300"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/ibclc.png         300w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-100x100.png 100w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-150x150.png 150w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-24x24.png    24w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-36x36.png    36w,
              https://drgolly.com/wp-content/uploads/2022/06/ibclc-48x48.png    48w
            "
            sizes="(max-width: 300px) 100vw, 300px"
          />
          <img
            loading="lazy"
            decoding="async"
            class="wp-image-1721 alignnone size-full"
            src="https://drgolly.com/wp-content/uploads/2022/06/ABA-logo.png"
            alt="ABA logo"
            width="250"
            height="119"
            srcset="
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo.png       250w,
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo-24x11.png  24w,
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo-36x17.png  36w,
              https://drgolly.com/wp-content/uploads/2022/06/ABA-logo-48x23.png  48w
            "
            sizes="(max-width: 250px) 100vw, 250px"
          />
        </div>
        <h2>
          What Makes <br />
          Dr. Golly Different?
        </h2>
        <div class="text-block">
          <p>
            Dr. Golly is an experienced paediatrician and trusted Australian
            parenting expert. With a Bachelor of Medicine from the University of
            Melbourne and as a Fellow of the Royal Australasian College of
            Physicians (FRACP), he brings over a decade of expertise to
            supporting families.
          </p>
          <p>
            The Dr Golly Program offers a range of different settling
            techniques, both gentle and more traditional methods. Dr Golly does
            not recommend letting babies cry it out. The settling techniques
            differ depending on age. We recommend selecting techniques based on
            your baby’s temperament and your own parenting style. There are
            lists of pros and cons in each of the age based programs to help you
            choose the best settling solution for your family. Customizable
            Routines: Guidance on sleep, feeding, and nutrition tailored to your
            family. Empowered Parenting: Builds confidence with practical tools
            and parental alignment from day one. Most babies can sleep 11 PM–7
            AM by six weeks and 7 PM–7 AM by six months with the right approach.
            Learn at your own pace, re-watch anytime, and feel supported every
            step of the way.
          </p>
        </div>
      </div>
      <div class="bg">
        <img
          src="${u}/img/drgolly.jpeg"
          alt=""
          width="1440"
          height="622"
          loading="lazy"
        />
      </div>
    </div>`
      ), e = document.querySelector(
        "#crs-different-section .et_pb_row"
      );
      e && (e.innerHTML = n, e.classList.remove("et_pb_row_5_tb_body", "et_pb_gutters1"), e.classList.add("et_pb_row_2_tb_body"));
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = $, document.head.append(n);
    }
  }
  const P = {
    "4-16 weeks": [
      "How to settle and calm a baby",
      "Feeding and breastfeeding tips",
      "Sleep foundation strategies",
      "Parental alignment and self-care advice",
      "Routines start at 6 weeks when your baby reaches 5-6kg"
    ]
  }, E = {
    chevronDown: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
  >
    <path
      d="M12.0853 0.917481L6.44011 6.56264L0.794922 0.91748"
      stroke="#3C3C3B"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`
    )
  }, q = (
    /* HTML */
    `<div class="et_builder_inner_content et_pb_gutters3">
  <div class="et_pb_section et_pb_section_0 section__header-standard et_pb_with_background et_section_regular">
    <div class="et_pb_row et_pb_row_0">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_post_title et_pb_post_title_0 et_pb_bg_layout_light  et_pb_text_align_left">
          <div class="et_pb_title_container">
            <h2 class="entry-title">Refund Policy</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="et_pb_section et_pb_section_1 et_section_regular">
    <div class="et_pb_row et_pb_row_1">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
          <div class="et_pb_text_inner">
            <p>In some extreme cases, we will issue a full refund of your purchase.</p>
            <p>
              We have a 30-day return policy, which means you have 30 days after purchasing your online course to
              request a refund.
            </p>
            <p><strong>To be eligible for a refund, you will need to have:</strong></p>
            <p>a) completed all components of the course;</p>
            <p>b) complete a feedback questionnaire;</p>
            <p>
              c) troubleshoot with our team what you had problems with or where the program fell short, our team will
              work with you to resolve the issues;
            </p>
            <p>d) you’ll also need the receipt or proof of purchase.</p>
            <p>
              Refunds may be issued to those where the program and troubleshooting does not work for their family after
              considerable effort.
            </p>
            <p>
              <strong>Please note:</strong> the program is only advertised as a sleep and settling course NOT MEDICAL
              ADVICE.&nbsp; If one of the reasons your baby is unsettled and not sleeping is medical in nature you will
              always need to see a Health Care Professional to resolve.&nbsp; Dr Golly is not able to provide medical
              advice unless you book a face to face consult with him.
            </p>
            <p>To start a return, you can contact us at hello@drgolly.com.</p>
            <p><strong>Exceptions / non-refundable items</strong></p>
            <p>Unfortunately, we cannot accept returns on gift cards.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  ), T = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="19"
  height="19"
  viewBox="0 0 19 19"
  fill="none"
>
  <g clip-path="url(#clip0_447_352)">
    <path d="M17.5 1L1 17.5" stroke="#095D66" stroke-width="2" />
    <path d="M1 1L17.5 17.5" stroke="#095D66" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_447_352">
      <rect width="19" height="19" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), R = `dialog.crs-popup {
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  border: none;
  padding: 0;
  margin: 0;
}

body:has(.crs-popup[open]) {
  overflow: hidden;
}

dialog.crs-popup h2 {
  color: #8bc3c3;
  font-family: Raleway;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  line-height: 44.7px;
  letter-spacing: -0.45px;
}

dialog.crs-popup .et_pb_section  + .et_pb_section  {
  margin-top: 40px;
}
.crs-popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 19px;
  height: 19px;
  border: none;
  background: none;
  z-index: 9999;
  cursor: pointer;
}

.crs-popup__header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 262px;
  background: #f0efeb;
}

.crs-popup__title {
  color: #8bc3c3;
  text-align: center;
  font-family: Raleway;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50.76px; /* 141% */
}

.crs-popup__content {
  padding-inline: 16px;
  color: #3c3c3b;
  font-family: Montserrat;
  font-size: 15px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 26.46px; /* 176.4% */
}

.crs-popup__content .et_pb_section_0.et_pb_section {
  margin-top: 0 !important;
}

.crs-popup__content .et_pb_section_1.et_pb_section {
  padding-top: 0 !important;
}
.crs-popup__content :is(p, ul) {
  font-size: 15px !important;
  padding: 0;
  margin-bottom: 24px;
}

.crs-popup__content :is(p, ul):last-child {
  margin-bottom: 0;
}
.crs-popup__content .et_pb_toggle_close p {
  margin-bottom: 0;
}
.crs-popup__content p:empty {
  display: none;
  height: 0;
}
.crs-popup__content h2 {
  color: #3c3c3b;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.84px; /* 141% */
}
.crs-popup__content .et_pb_column .et_pb_row_inner {
  padding: 0 !important;
  margin-bottom: 30px;
}

.section__header-standard {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0efeb;
  margin-left: -16px;
  margin-right: -16px;
  width: calc(100% + 32px);
  height: 282px !important;
  min-height: auto;
}
.crs-popup__content .et_pb_row {
  width: 100%;
}

.crs-popup__content h1 {
  color: #8bc3c3;
  text-align: center;
  font-family: Raleway;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50.76px; /* 141% */
  padding: 0 !important;
}

.crs-popup__content .et_pb_row_0.et_pb_row {
  padding: 0 !important;
}
.crs-popup__content .et_pb_column .et_pb_module {
  margin-bottom: 14px;
}

.crs-popup__content .et_pb_row_0.et_pb_row .et_pb_text_inner p {
  color: #095d66;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20.11px; /* 125.688% */
}

.crs-popup__content .et_pb_row_0.et_pb_row h1:not(.entry-title) {
  margin-top: 44px;
}

.crs-popup__content .et_pb_toggle {
  border: none;
  background: #fff !important;
  border-top: 1px solid #a9b1b5;
  margin-bottom: 0 !important;
}

.crs-popup__content .et_pb_toggle_title {
  color: #095d66;
  font-family: Montserrat;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 600 !important;
  line-height: 22.5px !important;
  text-transform: inherit;
}

.et_pb_toggle_title:before {
  content: '' !important;
  width: 21px;
  height: 21px;
  background-size: contain;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><g clip-path="url(%23clip0_206_9803)"><path d="M15.0002 9.75446L11.2063 13.5484L7.41235 9.75446C7.28931 9.61774 7.1355 9.54938 6.95093 9.54938C6.76636 9.54938 6.61255 9.61774 6.4895 9.75446C6.35278 9.8775 6.28442 10.0279 6.28442 10.2056C6.28442 10.3834 6.35278 10.5406 6.4895 10.6773L10.7346 14.9224C10.803 14.9908 10.8782 15.0421 10.9602 15.0762C11.0422 15.1104 11.1243 15.1275 11.2063 15.1275C11.2883 15.1275 11.3704 15.1104 11.4524 15.0762C11.5344 15.0421 11.6096 14.9908 11.678 14.9224L15.9231 10.6773C16.0598 10.5406 16.1282 10.3834 16.1282 10.2056C16.1282 10.0279 16.0598 9.8775 15.9231 9.75446C15.8 9.61774 15.6462 9.54938 15.4617 9.54938C15.2771 9.54938 15.1233 9.61774 15.0002 9.75446ZM11.2473 2.10504C9.8938 2.10504 8.62231 2.35797 7.43286 2.86383C6.24341 3.38336 5.20776 4.08405 4.32593 4.96588C3.44409 5.84772 2.74341 6.88336 2.22388 8.07281C1.71802 9.26227 1.46509 10.5338 1.46509 11.8873C1.46509 13.2408 1.71802 14.5123 2.22388 15.7017C2.74341 16.8912 3.44409 17.9302 4.32593 18.8189C5.20776 19.7076 6.24341 20.4048 7.43286 20.9107C8.62231 21.4302 9.8938 21.69 11.2473 21.69C12.6008 21.69 13.8723 21.4302 15.0618 20.9107C16.2512 20.4048 17.2903 19.7076 18.179 18.8189C19.0676 17.9302 19.7649 16.8912 20.2708 15.7017C20.7903 14.5123 21.05 13.2408 21.05 11.8873C21.05 10.5338 20.7903 9.26227 20.2708 8.07281C19.7649 6.88336 19.0676 5.84772 18.179 4.96588C17.2903 4.08405 16.2512 3.38336 15.0618 2.86383C13.8723 2.35797 12.6008 2.10504 11.2473 2.10504ZM11.2473 20.3775C10.0852 20.3775 8.98462 20.1519 7.94556 19.7007C6.92017 19.2632 6.02466 18.6617 5.25903 17.8961C4.49341 17.1304 3.88501 16.2281 3.43384 15.189C2.99634 14.1636 2.77759 13.063 2.77759 11.8873C2.77759 10.7252 2.99634 9.62457 3.43384 8.58551C3.88501 7.56012 4.49341 6.66461 5.25903 5.89899C6.02466 5.13336 6.92017 4.52496 7.94556 4.07379C8.98462 3.63629 10.0852 3.41754 11.2473 3.41754C12.4231 3.41754 13.5237 3.63629 14.5491 4.07379C15.5881 4.52496 16.4905 5.13336 17.2561 5.89899C18.0217 6.66461 18.6233 7.56012 19.0608 8.58551C19.512 9.62457 19.7375 10.7252 19.7375 11.8873C19.7375 13.063 19.512 14.1636 19.0608 15.189C18.6233 16.2281 18.0217 17.1304 17.2561 17.8961C16.4905 18.6617 15.5881 19.2632 14.5491 19.7007C13.5237 20.1519 12.4231 20.3775 11.2473 20.3775Z" fill="%235EB9B9"/></g><defs><clipPath id="clip0_206_9803"><rect width="21" height="21" fill="white" transform="matrix(1 0 0 -1 0.0500488 21.69)"/></clipPath></defs></svg>');
}

.crs-popup__content .et_pb_toggle_open .et_pb_toggle_title:before {
  position: absolute;
  display: block !important;
  right: -0.563rem !important;
  top: 50%;
  margin-top: -0.5em;
  content: '' !important;
  width: 21px;
  height: 21px;
  transform: rotate(180deg);
  background-size: contain;

  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><g clip-path="url(%23clip0_206_9803)"><path d="M15.0002 9.75446L11.2063 13.5484L7.41235 9.75446C7.28931 9.61774 7.1355 9.54938 6.95093 9.54938C6.76636 9.54938 6.61255 9.61774 6.4895 9.75446C6.35278 9.8775 6.28442 10.0279 6.28442 10.2056C6.28442 10.3834 6.35278 10.5406 6.4895 10.6773L10.7346 14.9224C10.803 14.9908 10.8782 15.0421 10.9602 15.0762C11.0422 15.1104 11.1243 15.1275 11.2063 15.1275C11.2883 15.1275 11.3704 15.1104 11.4524 15.0762C11.5344 15.0421 11.6096 14.9908 11.678 14.9224L15.9231 10.6773C16.0598 10.5406 16.1282 10.3834 16.1282 10.2056C16.1282 10.0279 16.0598 9.8775 15.9231 9.75446C15.8 9.61774 15.6462 9.54938 15.4617 9.54938C15.2771 9.54938 15.1233 9.61774 15.0002 9.75446ZM11.2473 2.10504C9.8938 2.10504 8.62231 2.35797 7.43286 2.86383C6.24341 3.38336 5.20776 4.08405 4.32593 4.96588C3.44409 5.84772 2.74341 6.88336 2.22388 8.07281C1.71802 9.26227 1.46509 10.5338 1.46509 11.8873C1.46509 13.2408 1.71802 14.5123 2.22388 15.7017C2.74341 16.8912 3.44409 17.9302 4.32593 18.8189C5.20776 19.7076 6.24341 20.4048 7.43286 20.9107C8.62231 21.4302 9.8938 21.69 11.2473 21.69C12.6008 21.69 13.8723 21.4302 15.0618 20.9107C16.2512 20.4048 17.2903 19.7076 18.179 18.8189C19.0676 17.9302 19.7649 16.8912 20.2708 15.7017C20.7903 14.5123 21.05 13.2408 21.05 11.8873C21.05 10.5338 20.7903 9.26227 20.2708 8.07281C19.7649 6.88336 19.0676 5.84772 18.179 4.96588C17.2903 4.08405 16.2512 3.38336 15.0618 2.86383C13.8723 2.35797 12.6008 2.10504 11.2473 2.10504ZM11.2473 20.3775C10.0852 20.3775 8.98462 20.1519 7.94556 19.7007C6.92017 19.2632 6.02466 18.6617 5.25903 17.8961C4.49341 17.1304 3.88501 16.2281 3.43384 15.189C2.99634 14.1636 2.77759 13.063 2.77759 11.8873C2.77759 10.7252 2.99634 9.62457 3.43384 8.58551C3.88501 7.56012 4.49341 6.66461 5.25903 5.89899C6.02466 5.13336 6.92017 4.52496 7.94556 4.07379C8.98462 3.63629 10.0852 3.41754 11.2473 3.41754C12.4231 3.41754 13.5237 3.63629 14.5491 4.07379C15.5881 4.52496 16.4905 5.13336 17.2561 5.89899C18.0217 6.66461 18.6233 7.56012 19.0608 8.58551C19.512 9.62457 19.7375 10.7252 19.7375 11.8873C19.7375 13.063 19.512 14.1636 19.0608 15.189C18.6233 16.2281 18.0217 17.1304 17.2561 17.8961C16.4905 18.6617 15.5881 19.2632 14.5491 19.7007C13.5237 20.1519 12.4231 20.3775 11.2473 20.3775Z" fill="%235EB9B9"/></g><defs><clipPath id="clip0_206_9803"><rect width="21" height="21" fill="white" transform="matrix(1 0 0 -1 0.0500488 21.69)"/></clipPath></defs></svg>');
}

#crs-contact-form form {
  max-width: 73.375rem;

  background-color: #e8eff3;
  border-radius: 0.875rem;
  position: relative;
  padding: 2.5rem 1.333rem;

  max-width: none;
}

#crs-contact-form form label {
  color: #095d66;
  font-weight: 600;
  font-size: 1.333rem;
}
#crs-contact-form form :is(input, textarea) {
  margin-block: 1rem;

  border: 1px solid #818c93;
  background: #fff;
  font-family: var(--heading-font);
  font-size: 1.375rem;
  font-weight: 600;
  width: 100%;
  color: var(--base-color);
  padding: 0.667rem 1rem;
}

#crs-contact-form form input[type='submit'] {
  background-color: rgb(94, 185, 185);
  color: #fff;
  border-color: #5eb9b9;
  font-size: 1.5rem;
  width: 26.667rem;
  text-align: center;
  max-width: 18rem;
  padding: 1rem 0.9375rem;
  margin-inline: auto;
}

@media (min-width: 991px) {
  dialog.crs-popup {
  }
}
`;
  class D {
    constructor() {
      this.popup = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.events();
    }
    render() {
      const n = (
        /* HTML */
        `
      <dialog class="crs-popup">
        <div class="crs-popup__wrap">
          <button class="crs-popup__close">${T}</button>

          <div class="crs-popup__content">${q}</div>
        </div>
      </dialog>
    `
      );
      document.body.insertAdjacentHTML("beforeend", n), this.popup = document.querySelector(".crs-popup");
    }
    events() {
      var e;
      const n = (e = this.popup) == null ? void 0 : e.querySelector(".crs-popup__close");
      n == null || n.addEventListener("click", () => this.close());
    }
    open() {
      var n;
      this.popup && ((n = this.popup) == null || n.showModal());
    }
    close() {
      var n;
      (n = this.popup) == null || n.close();
    }
    initStyles() {
      const n = document.createElement("style");
      n.innerHTML = R, document.head.appendChild(n);
    }
  }
  const H = `.product__title h1 {
  font-size: 30px;
  font-weight: 700;
  line-height: 44.7px;
  letter-spacing: -0.45px;
}

.product__title h1 span {
  display: block;
  color: #095d66;
}

@media (max-width: 767px) {
  .product__title h1 span {
    display: inline;
  }
}

.crs-product__badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 325px;
  max-width: 90%;
  padding: 12px;
  border-radius: 0px 0px 12px 12px;
  border-right: 1px solid #e8f3f3;
  border-bottom: 1px solid #e8f3f3;
  border-left: 1px solid #e8f3f3;
  background: #ebf5f5;
}

@media (max-width: 992px) {
  .et-db #et-boc .et-l .et_pb_image_0_tb_body.product__image .et_pb_image_wrap {
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
  }
  .crs-product__badge {
    position: static;
    transform: none;
    width: 100%;
    max-width: 100%;
    padding: 8px 12px;
  }
}

.crs-product__badge .text {
  color: #095d66;
  font-family: Raleway;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 161.538% */
}

@media (max-width: 980px) {
  .product__category {
    display: none;
  }
}

square-placement {
  display: none;
}

form.cart .single_add_to_cart_button {
  width: 100%;
}

#reviews-io-nuggets-widget {
  display: none;
}

.crs-guarantee-badges {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: Raleway, sans-serif;
}

.guarantee-badge {
  flex: 1;
  display: grid;
  place-content: center;
  gap: 8px;
}

.guarantee-badge .icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.guarantee-badge .text {
  padding-inline: 5px;
  color: #095d66;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
}

.guarantee-badge button {
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  text-decoration: underline;
  cursor: pointer;
}
.crs-payment-options {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #3c3c3b;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
}

.crs-payment-options button {
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
}

body.product-template-default
  #wc-stripe-payment-request-wrapper[style*='block'] {
  display: block !important;
}
`;
  class I {
    constructor() {
      this.init(), this.refundPopup = new D();
    }
    init() {
      this.addStyles(), this.changeTitle(), this.addImageBadge(), this.changeDescriptionList(), this.addGuaranteeBadges(), this.addMorePaymentOptions(), this.addEventListeners();
    }
    async changeTitle() {
      const n = await c(".product__title h1");
      if (n) {
        const e = n.textContent;
        if (!e) return;
        const t = e.split(":");
        if (t.length > 1) {
          const i = t[0], o = t.slice(1).join(":").trim();
          n.innerHTML = `${i}: <span>${o}</span>`;
        }
      }
    }
    async addImageBadge() {
      const n = (
        /* HTML */
        `
      <div class="crs-product__badge">
        <div class="icon">
          <img
            src="${u}/img/icons/sleep.svg"
            alt=""
            width="32"
            height="32"
            loading="lazy"
          />
        </div>
        <div class="text">
          Say goodbye to sleepless nights and embrace peaceful routines
        </div>
      </div>
    `
      );
      (await c(
        ".et-db #et-boc .et-l .et_pb_image_0_tb_body.product__image"
      )).insertAdjacentHTML("beforeend", n);
    }
    async changeDescriptionList() {
      var a;
      const n = window.location.pathname, e = await c(
        ".et_pb_wc_description_0_tb_body p"
      );
      e.innerHTML = "What’s included in this program:";
      const t = await c(
        ".text__product-custom-description  ul"
      ), o = (a = Object.entries(g).find(
        ([p, O]) => n.includes(O)
      )) == null ? void 0 : a[0];
      if (!o) return;
      const s = P[o];
      if (!s) return;
      const r = (
        /* HTML */
        `${s.map((p) => `<li>${p}</li>`).join("")}`
      );
      t.innerHTML = r;
    }
    async addGuaranteeBadges() {
      const n = (
        /* HTML */
        `
      <div class="crs-guarantee-badges">
        <div class="guarantee-badge">
          <div class="icon">
            <img
              src="${u}/img/icons/refund.svg"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>
          <div class="text">
            Try it risk-free for 30 days. No results? Get a
            <button data-button="refund-popup">full refund!</button>
          </div>
        </div>
        <div class="guarantee-badge">
          <div class="icon">
            <img
              src="${u}/img/icons/satisfied.svg"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>
          <div class="text">
            94% of parents reported better sleep within 4 weeks.
          </div>
        </div>
      </div>
    `
      );
      (await c(
        "#reviews-io-nuggets-widget"
      )).insertAdjacentHTML("afterend", n);
    }
    async addMorePaymentOptions() {
      const n = (
        /* HTML */
        ` <div type="button" class="crs-payment-options">
      <button data-button="more-payment-options">
        <div class="text">More Payment Options</div>
        <div class="icon">${E.chevronDown}</div>
      </button>
    </div>`
      );
      (await c(
        '#wc-stripe-payment-request-wrapper[style*="block"]'
      )).insertAdjacentHTML("afterend", n);
    }
    addEventListeners() {
      c('[data-button="more-payment-options"]').then((n) => {
        const e = n;
        e == null || e.addEventListener("click", () => {
          const t = document.querySelector(
            ".single_add_to_cart_button"
          );
          t == null || t.click(), l("exp_pdp_imp__button_02", "More Payment Options", "click", "Product info");
        });
      }), c('[data-button="refund-popup"]').then((n) => {
        const e = n;
        e == null || e.addEventListener("click", () => {
          this.refundPopup.open();
        });
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = H, document.head.appendChild(n);
    }
  }
  const W = `.crs-sticky {
  display: none;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 20px;
  background: #fff;
  z-index: 1000;
}

body.is-crs-sticky .crs-sticky {
  display: flex;
}

body.is-crs-sticky .grecaptcha-badge {
  bottom: 120px !important;
}

@media (max-width: 980px) {
  body.is-crs-sticky .grecaptcha-badge {
    bottom: 100px !important;
  }
}
@media (max-width: 980px) {
  .crs-sticky {
    padding: 8px 20px;
  }
}
.crs-sticky__inner {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 8px;
  border-radius: 1111px;
  border: 1px solid #8bc3c3;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(9, 93, 102, 0.12);
}

@media (max-width: 980px) {
  .crs-sticky__inner {
    display: contents;
  }
}

.crs-sticky .title {
  padding-inline: 24px;
  color: #8bc3c3;
  text-align: center;
  font-family: Raleway;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 141.176% */
  letter-spacing: -0.45px;
}

@media (max-width: 980px) {
  .crs-sticky .title {
    display: none;
  }
}
.crs-sticky .title span {
  display: block;
  color: #095d66;
}

.crs-sticky .buy button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 316px;
  min-height: 62px;
  border-radius: 75px;
  border: none;
  background: #095d66;
  color: #fff;
  text-align: center;
  font-family: Raleway;
  font-size: 22px;
  font-weight: 700;
  line-height: 28.05px;
  cursor: pointer;
}

@media (max-width: 980px) {
  .crs-sticky .buy, .crs-sticky .buy button {
    min-width: 100%;
  }
}`;
  class G {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners(), this.showStickyBlock();
    }
    render() {
      var s, r;
      const n = (s = document.querySelector("h1")) == null ? void 0 : s.textContent, e = (r = document.querySelector(
        ".woocommerce-Price-amount.amount"
      )) == null ? void 0 : r.textContent;
      if (!n || !e) return;
      let t;
      const i = n.split(":");
      if (i.length > 1) {
        const a = i[0], p = i.slice(1).join(":").trim();
        t = `${a}: <span>${p}</span>`;
      }
      const o = (
        /* HTML */
        `
      <div class="crs-sticky">
        <div class="crs-sticky__inner">
          <div class="title">${t}</div>
          <div class="buy">
            <button type="button" data-button="sticky-buy">
              <span>Buy Now</span><span class="dot">•</span
              ><span>${e}</span>
            </button>
          </div>
        </div>
      </div>
    `
      );
      document.body.insertAdjacentHTML("beforeend", o);
    }
    eventListeners() {
      const n = document.querySelector(
        'button[data-button="sticky-buy"]'
      );
      n && n.addEventListener("click", (e) => {
        const t = document.querySelector(
          ".single_add_to_cart_button"
        );
        t == null || t.click(), l("exp_pdp_imp__button_01", "Buy now", "click", "Sticky button");
      });
    }
    async showStickyBlock() {
      if (await c('button[data-button="buy-now"]'), !document.querySelector(".crs-sticky")) return;
      const e = document.querySelectorAll(
        ".single_add_to_cart_button"
      ), t = {
        root: null,
        // viewport
        threshold: 0,
        rootMargin: "0px 0px -50% 0px"
      }, i = (s) => {
        s.forEach((r) => {
          r.isIntersecting ? document.body.classList.add("is-crs-sticky") : !r.isIntersecting && r.boundingClientRect.top > 0 && document.body.classList.remove("is-crs-sticky");
        });
      }, o = new IntersectionObserver(
        i,
        t
      );
      e.forEach((s) => o.observe(s));
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = W, document.head.appendChild(n);
    }
  }
  m({
    name: "Removing user barriers on product pages",
    dev: "OS"
  });
  class Z {
    constructor() {
      this.init();
    }
    init() {
      const n = window.location.pathname;
      Object.entries(g).some(
        ([i, o]) => n.includes(o)
      ) && (new I(), new v(), new C(), new M(), new B(), new j(), new S(), new y(), new G());
    }
  }
  new Z();
})();
