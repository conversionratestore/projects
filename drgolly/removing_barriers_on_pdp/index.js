(function() {
  "use strict";
  const u = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function r(a) {
    return new Promise((n) => {
      if (document.querySelector(a))
        return n(document.querySelector(a));
      const e = new MutationObserver(() => {
        document.querySelector(a) && (n(document.querySelector(a)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const m = `body:has(> dialog[open]) {
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
  class x {
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
                <div class="old-price">$90.91</div>
                <div class="new-price">$37.87</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Little Baby Sleep Program: 4-16 Weeks</div>
                <div class="old-price">$90.91</div>
                <div class="new-price">$37.87</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Big Baby Sleep Program: 4-8 Months</div>
                <div class="old-price">$90.91</div>
                <div class="new-price">$37.87</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Pre-Toddler Sleep Program: 8-12 Months</div>
                <div class="old-price">$90.91</div>
                <div class="new-price">$37.87</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Toddler Sleep Program: 1-2 Years</div>
                <div class="old-price">$90.91</div>
                <div class="new-price">$37.87</div>
              </div>
              <div class="bundle-header">
                <div class="full"><span>2x Program Supplements:</span></div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Second Child Supplement</div>
                <div class="old-price">$45.45</div>
                <div class="new-price">$0.01</div>
              </div>
              <div class="bundle-item">
                <div class="check"></div>
                <div class="title">Twins Supplement</div>
                <div class="old-price">$45.45</div>
                <div class="new-price">$0.01</div>
              </div>
            </div>
          </div>
          <div class="popup-footer">
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
        var e;
        (e = this.popup) == null || e.close();
      }), this.popup.addEventListener("click", (e) => {
        var t;
        e.target === this.popup && ((t = this.popup) == null || t.close());
      });
    }
    openDialog() {
      this.popup && this.popup.showModal();
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = m, document.head.append(n);
    }
  }
  const p = "http://conversionratestore.github.io/projects/drgolly/removing_barriers_on_pdp/", f = `.crs-header-bundle {
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
  class b {
    constructor() {
      this.init(), this.popup = new x();
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
            src="${p}/img/bundle.webp"
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
      ), e = await r(
        ".crs-guarantee-badges"
      );
      e == null || e.insertAdjacentHTML("afterend", n);
    }
    async eventListeners() {
      const n = await r(
        '[data-button="bundle-popup"]'
      );
      console.log("learnMoreBtn", n), n && n.addEventListener("click", () => {
        this.popup.openDialog();
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = f, document.head.append(n);
    }
  }
  const v = `.crs-bundle-section .crs-bundle-section-inner {
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
  class w {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.findAndTransferBundleSection(), this.renderNewBundleSection();
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
                src="${p}/img/bundle.webp"
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
                  <div class="saved-price">$636.36</div>
                  <div class="discount">-60%</div>
                </div>
                <a
                  href="https://drgolly.com/sleep-bundle-deal/"
                  class="buy-btn"
                >
                  <span>Buy Now</span><span class="dot">•</span
                  ><span class="current-price">$227.27</span>
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
                  <div class="old-price">$90.91</div>
                  <div class="new-price">$37.87</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Little Baby Sleep Program: 4-16 Weeks</div>
                  <div class="old-price">$90.91</div>
                  <div class="new-price">$37.87</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Big Baby Sleep Program: 4-8 Months</div>
                  <div class="old-price">$90.91</div>
                  <div class="new-price">$37.87</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">
                    Pre-Toddler Sleep Program: 8-12 Months
                  </div>
                  <div class="old-price">$90.91</div>
                  <div class="new-price">$37.87</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Toddler Sleep Program: 1-2 Years</div>
                  <div class="old-price">$90.91</div>
                  <div class="new-price">$37.87</div>
                </div>
                <div class="bundle-header">
                  <div class="title full">
                    <span>2x Program Supplements:</span>
                  </div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Second Child Supplement</div>
                  <div class="old-price">$45.45</div>
                  <div class="new-price">$0.01</div>
                </div>
                <div class="bundle-item">
                  <div class="check"></div>
                  <div class="title">Twins Supplement</div>
                  <div class="old-price">$45.45</div>
                  <div class="new-price">$0.01</div>
                </div>
              </div>
            </div>
            <div class="actions">
              <div class="buy-action">
                <div class="save-price">
                  <div class="saved-price">$636.36</div>
                  <div class="discount">-60%</div>
                </div>
                <a
                  href="https://drgolly.com/sleep-bundle-deal/"
                  class="buy-btn"
                >
                  <span>Buy Now</span><span class="dot">•</span
                  ><span class="current-price">$227.27</span>
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
      const n = document.querySelector('[data-button="section-bundle-buy"]');
      n && n.addEventListener("click", () => {
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = v, document.head.appendChild(n);
    }
  }
  const C = [
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
  ], y = `.crs-comments-section {
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
  class k {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners();
    }
    render() {
      const n = Array(5).fill(
        `<img src="${p}/img/icons/star.svg" width="20" height="20" loading="lazy" />`
      ).join(""), e = (
        /* HTML */
        `
      <div class="crs-comments-section">
        <div class="crs-comments-container">
          <div class="crs-comments">
            <div class="comments-wrap">
              ${C.map((t) => (
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
      ), i = document.querySelector(".comments-wrap"), s = document.querySelectorAll(".crs-comment").length, d = document.querySelector(".crs-comment"), l = (d == null ? void 0 : d.offsetWidth) || 0;
      e == null || e.addEventListener("click", () => {
        n < s - 1 && (n++, i.scrollLeft = n * l, n === s - 1 ? e.disabled = !0 : t.disabled = !1);
      }), t == null || t.addEventListener("click", () => {
        n > 0 && (n--, i.scrollLeft = n * l, n === 0 ? t.disabled = !0 : e.disabled = !1);
      }), i == null || i.addEventListener("scroll", () => {
        const c = Math.round(i.scrollLeft / l);
        c !== n && (n = c, n === 0 ? (t.disabled = !0, e.disabled = !1) : t.disabled = !1, n === s - 1 ? (e.disabled = !0, t.disabled = !1) : e.disabled = !1);
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = y, document.head.append(n);
    }
  }
  const L = "";
  class _ {
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
  const S = `.crs-compare-section h2 {
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
  class M {
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
      r("#crs-course-help").then((i) => {
        const o = i;
        o == null || o.insertAdjacentHTML("afterend", e);
      });
    }
    eventListeners() {
      r('button[data-button="compare-buy"]').then((n) => {
        const e = n;
        e == null || e.addEventListener("click", () => {
          const t = document.querySelector(
            ".single_add_to_cart_button"
          );
          t == null || t.click();
        });
      });
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = S, document.head.append(n);
    }
  }
  const z = `.crs-course-help #crs-container-help {
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
  class B {
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
            var d;
            (d = s == null ? void 0 : s.textContent) != null && d.includes("Will this course help?") && (s.classList.remove("et_pb_row", "et_pb_row_3_tb_body"), s.classList.add("title-block"), i == null || i.insertAdjacentElement("afterbegin", s)), s.querySelector("h4") && (s.classList.add("empowered"), s.classList.remove("et_pb_row", "et_pb_row_4_tb_body"), i == null || i.insertAdjacentElement("beforeend", s));
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
              style="background-image: url('${p}/img/video_cover.webp');"
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
      r("#crs-video-section").then((s) => {
        s.insertAdjacentHTML("beforeend", t);
        const d = document.querySelector(".ruk_rating_snippet"), l = d == null ? void 0 : d.cloneNode(!0), c = document.querySelector(".crs-video-section .rating");
        c == null || c.appendChild(l);
      });
    }
    eventListeners() {
      r(".video-cover").then((n) => {
        const e = n;
        e == null || e.addEventListener("click", () => {
          const i = e.parentElement.querySelector(
            ".video-iframe"
          );
          e.remove();
          const o = document.createElement("iframe");
          o.src = "https://www.youtube.com/embed/E7u4TtxZLd8?autoplay=1", o.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", o.allowFullscreen = !0, i.appendChild(o), i.style.display = "block";
        });
      }), r('[data-button="buy-now"]').then((n) => {
        n.addEventListener("click", () => {
          const e = document.querySelector(
            ".single_add_to_cart_button"
          );
          e == null || e.click();
        });
      });
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
      n.innerHTML = z, document.head.append(n);
    }
  }
  const g = {
    "0-4 weeks": "/baby-sleep-program/newborns-0-4-weeks/",
    "4-16 weeks": "/baby-sleep-program/little-baby-4-16-weeks/",
    "4-8 months": "/baby-sleep-program/big-baby-4-8-months/",
    "8-12 months": "/toddler-sleep-program/pre-toddler-8-12-months/",
    "1-2 years": "/toddler-sleep-program/1-2-years/",
    "2-5 years": "/toddler-sleep-program/pre-school-2-5-years/"
  }, A = `.crs-different-section {
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
  class $ {
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
      e && (e.classList.add("crs-different-section"), e.setAttribute("id", "crs-different-section"));
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
        <h2>What Makes <br> Dr. Golly Different?</h2>
        <div class="text-block">
          <p>
            Dr. Golly is an experienced paediatrician and trusted Australian
            parenting expert. With a Bachelor of Medicine from the University of
            Melbourne and as a Fellow of the Royal Australasian College of
            Physicians (FRACP), he brings over a decade of expertise to
            supporting families.
          </p>
          <p>
            The Dr. Golly™ Sleep Program A science-backed, self-paced course
            designed for your baby’s age, offering: Gentle Techniques: No
            cry-it-out methods, only nurturing, age-appropriate settling
            techniques. Customizable Routines: Guidance on sleep, feeding, and
            nutrition tailored to your family. Empowered Parenting: Builds
            confidence with practical tools and parental alignment from day one.
            Most babies can sleep 11 PM–7 AM by six weeks and 7 PM–7 AM by six
            months with the right approach. Learn at your own pace, re-watch
            anytime, and feel supported every step of the way.
          </p>
        </div>
      </div>
      <div class="bg">
        <img
          src="${p}/img/drgolly.jpeg"
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
      n.textContent = A, document.head.append(n);
    }
  }
  const j = {
    "4-16 weeks": [
      "How to settle and calm a baby",
      "Feeding and breastfeeding tips",
      "Sleep foundation strategies",
      "Parental alignment and self-care advice",
      "Routines start at 6 weeks when your baby reaches 5-6kg"
    ]
  }, h = {
    sleep: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <g clip-path="url(#clip0_5097_684)">
      <path
        d="M19.6381 15.4089H16.1087C15.7518 15.4089 15.4301 15.1939 15.2935 14.8642C15.157 14.5345 15.2324 14.1549 15.4848 13.9026L17.5079 11.8795H16.1087C15.6214 11.8795 15.2263 11.4844 15.2263 10.9971C15.2263 10.5098 15.6214 10.1147 16.1087 10.1147H19.6381C19.995 10.1147 20.3167 10.3297 20.4533 10.6595C20.5898 10.9892 20.5143 11.3687 20.262 11.621L18.2388 13.6442H19.6381C20.1254 13.6442 20.5204 14.0392 20.5204 14.5265C20.5204 15.0138 20.1254 15.4089 19.6381 15.4089Z"
        fill="#BED9D9"
      />
      <path
        d="M26.6969 8.35002H23.1675C22.8106 8.35002 22.4889 8.13502 22.3523 7.80532C22.2158 7.47561 22.2913 7.09608 22.5436 6.84373L24.5667 4.82061H23.1675C22.6802 4.82061 22.2852 4.42555 22.2852 3.93826C22.2852 3.45097 22.6802 3.05591 23.1675 3.05591H26.6969C27.0538 3.05591 27.3755 3.27091 27.5121 3.60061C27.6486 3.93032 27.5732 4.30985 27.3208 4.5622L25.2977 6.58532H26.6969C27.1842 6.58532 27.5793 6.98038 27.5793 7.46767C27.5793 7.95497 27.1842 8.35002 26.6969 8.35002Z"
        fill="#BED9D9"
      />
      <path
        d="M16.1086 31.4677C7.80516 31.4677 1.0498 24.6989 1.0498 16.3788C1.0498 12.537 2.49498 8.88339 5.11922 6.0911C7.83051 3.2061 11.5817 1.52263 15.6818 1.35081C16.0381 1.33598 16.3668 1.53587 16.5177 1.85793C16.6886 2.22251 16.6176 2.70269 16.1469 3.00757C15.1168 3.67504 11.7557 6.23022 11.7557 11.0847C11.7557 16.4041 16.0833 20.7317 21.4027 20.7317C26.1053 20.7317 28.6293 17.6737 29.4962 16.3589C29.9207 15.7147 30.4861 15.8884 30.6596 15.9697C30.9817 16.1207 31.1816 16.4503 31.1666 16.8056C30.995 20.9017 29.3082 24.6563 26.417 27.3775C23.6147 30.0151 19.9537 31.4677 16.1086 31.4677Z"
        fill="#BED9D9"
      />
    </g>
    <defs>
      <clipPath id="clip0_5097_684">
        <rect
          width="32"
          height="31"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>`
    ),
    refund: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="53"
    height="53"
    viewBox="0 0 53 53"
    fill="none"
  >
    <g clip-path="url(#clip0_5070_3648)">
      <mask
        id="mask0_5070_3648"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="52"
        height="52"
      >
        <path
          d="M51.3569 0.598389H0.512451V51.4428H51.3569V0.598389Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_5070_3648)">
        <path
          d="M42.1191 7.72305L40.9395 6.97359C40.6017 6.89415 40.2932 6.78083 40.0435 6.59911C38.9942 5.83555 38.7772 3.69542 37.6129 3.10097C36.4607 2.51279 34.602 3.59064 33.3545 3.18568C32.1287 2.78766 31.2591 0.820021 29.9579 0.615551C28.6904 0.416344 27.2581 2.01705 25.9346 2.01705C24.6111 2.01705 23.1788 0.416344 21.9113 0.615551C20.61 0.820021 19.7401 2.78776 18.5141 3.18588C17.2666 3.59094 15.4078 2.51318 14.2555 3.10137C13.0912 3.69581 12.8742 5.83604 11.8249 6.5997C10.7707 7.36703 8.66853 6.91579 7.74866 7.83566C6.82889 8.75553 7.28014 10.8576 6.513 11.9119C5.74944 12.961 3.60931 13.178 3.01487 14.3424C2.5377 15.277 3.15677 16.6764 3.19153 17.8374L8.54757 26.0205L3.19133 34.2212C3.15131 35.3788 2.54048 36.7694 3.01536 37.6996C3.6098 38.864 5.75003 39.081 6.51369 40.1302C7.28093 41.1844 6.82978 43.2866 7.74965 44.2066C8.66952 45.1263 10.7716 44.6749 11.8258 45.4422C12.8751 46.2058 13.0921 48.3459 14.2563 48.9403C15.4087 49.5285 17.2672 48.4507 18.5147 48.8557C18.7913 48.9456 19.0498 49.1152 19.2993 49.3267L21.3593 49.9381C35.4847 48.9133 46.6263 37.1294 46.6263 22.7425C46.6264 17.1922 44.9671 12.0302 42.1191 7.72305Z"
          fill="#8BC3C3"
        />
        <path
          d="M48.6787 34.2386L46.4221 26.0206L48.6772 17.8371C48.7117 16.6759 49.3309 15.2764 48.8537 14.3415C48.2593 13.1772 46.1192 12.9602 45.3554 11.911C44.5882 10.8568 45.0394 8.75448 44.1194 7.83471C43.4166 7.13192 42.0278 7.23063 40.9394 6.97363C43.5419 11.2129 45.0434 16.1957 45.0434 21.5347C45.0434 36.2162 33.7018 48.2373 19.2993 49.3265C20.1579 50.0512 20.9013 51.2669 21.9112 51.4256C23.1787 51.6247 24.6112 50.024 25.9346 50.024C27.258 50.024 28.6904 51.6247 29.9578 51.4256C31.2592 51.221 32.1291 49.2534 33.355 48.8553C34.6026 48.45 36.4614 49.528 37.6136 48.9397C38.7779 48.3452 38.995 46.205 40.0442 45.4413C41.0984 44.674 43.2006 45.1253 44.1205 44.2053C45.0402 43.2855 44.5889 41.1833 45.3561 40.1291C46.1198 39.08 48.2598 38.863 48.8542 37.6985C49.3265 36.7735 48.7245 35.3926 48.6787 34.2386Z"
          fill="#8BC3C3"
        />
        <path
          d="M25.9343 8.15723C25.6309 8.15723 25.2851 8.20668 24.9636 8.30827L11.5164 12.5548C10.8341 12.7703 10.3701 13.4032 10.3701 14.1188V17.8372L12.6387 34.2388C15.73 39.8755 21.2492 43.3843 24.476 45.0225C24.9354 45.2557 25.4347 45.3718 25.9344 45.3744L27.5925 26.2614L25.9343 8.15723Z"
          fill="#F4E0B2"
        />
        <path
          d="M40.387 12.5547L26.9397 8.30821C26.6128 8.20494 26.2737 8.15548 25.9348 8.15727V45.3743C26.446 45.3771 26.9574 45.2611 27.4274 45.0224C30.6542 43.3841 36.1735 39.8754 39.2647 34.2386L41.5334 17.8371V14.1187C41.5334 13.4031 41.0695 12.7701 40.387 12.5547Z"
          fill="#F0D28B"
        />
        <path
          d="M44.8001 17.837H3.19127C3.19903 18.106 3.17538 18.3663 3.09922 18.6006C2.7012 19.8264 0.733564 20.6962 0.529093 21.9973C0.330086 23.2648 1.93069 24.6972 1.93069 26.0207C1.93069 27.3441 0.329986 28.7764 0.529193 30.044C0.682819 31.0219 1.83238 31.7563 2.56317 32.5812L4.6033 33.4406H46.3569V19.0143L44.8001 17.837Z"
          fill="#52A7A7"
        />
        <path
          d="M51.3396 21.9974C51.1352 20.6961 49.1674 19.8262 48.7693 18.6C48.6933 18.3658 48.6696 18.1057 48.6774 17.837H44.8003C44.9611 19.0475 45.0434 20.2803 45.0434 21.5347C45.0434 24.5973 44.5462 27.5421 43.6324 30.2973C43.1828 31.653 41.9318 32.5811 40.5034 32.5811H2.56348C2.80508 32.8538 3.00091 33.1364 3.09983 33.441C3.17748 33.6801 3.20092 33.9463 3.19138 34.2212L48.6787 34.2384C48.668 33.9569 48.6902 33.6849 48.7696 33.4404C49.1675 32.2146 51.1352 31.3448 51.3396 30.0437C51.5387 28.7762 49.9381 27.3438 49.9381 26.0205C49.9381 24.6971 51.5387 23.2648 51.3396 21.9974Z"
          fill="#4C9090"
        />
        <path
          d="M32.1058 22.1017C31.9544 21.7304 31.5972 21.4898 31.196 21.4886H31.1936C30.7924 21.4886 30.4344 21.7276 30.2726 22.1202L27.5209 29.3462C27.3599 29.7695 27.5722 30.2431 27.9958 30.4045C28.4178 30.5635 28.8919 30.3528 29.0537 29.93L29.5378 28.6586H32.8281L33.307 29.9277C33.4312 30.256 33.7426 30.4586 34.0742 30.4586C34.1704 30.4586 34.2688 30.4414 34.3641 30.4054C34.7878 30.2456 35.0016 29.7722 34.8414 29.3486L32.1058 22.1017ZM30.1623 27.0184L31.1903 24.3192L32.2091 27.0184H30.1623Z"
          fill="white"
        />
        <path
          d="M23.579 21.5972H21.5649C21.347 21.5972 21.1381 21.6836 20.9842 21.8378C20.8305 21.9919 20.7441 22.2009 20.7449 22.4188L20.7592 29.5311C20.76 29.749 20.8466 29.9575 21.0011 30.111C21.1548 30.264 21.3622 30.3496 21.5793 30.3496H21.5824C21.5824 30.3496 23.0745 30.344 23.6527 30.334C25.7494 30.2976 27.2718 28.4636 27.2718 25.9734C27.2718 23.3557 25.7877 21.5972 23.579 21.5972ZM23.6238 28.6938C23.3404 28.699 22.835 28.7027 22.3978 28.7055L22.3866 23.2372H23.579C25.0927 23.2372 25.6315 24.6507 25.6315 25.9734C25.6316 27.2667 25.0038 28.6697 23.6238 28.6938Z"
          fill="white"
        />
        <path
          d="M45.1677 25.2614C44.2524 24.9242 43.4011 24.5558 43.1568 24.4486C42.9822 24.3133 42.8989 24.1026 42.931 23.8749C42.9526 23.7271 43.0582 23.3671 43.5812 23.2093C44.6711 22.8806 45.6722 23.681 45.6874 23.6934C46.0342 23.9813 46.5491 23.9348 46.8391 23.5901C47.1306 23.2434 47.0858 22.7259 46.739 22.4345C46.6718 22.3776 45.0645 21.0502 43.1088 21.6389C42.1325 21.9328 41.4431 22.7005 41.3077 23.6421C41.1812 24.5231 41.5633 25.3707 42.3048 25.8536C42.3407 25.8773 42.3784 25.8978 42.4177 25.9153C42.4601 25.9342 43.4668 26.3826 44.6008 26.8003C44.9444 26.9271 45.7332 27.2892 45.6234 27.9054C45.5434 28.3539 45.0067 28.8181 44.2483 28.8181C43.4924 28.8181 42.7652 28.5125 42.3014 28.0011C41.9963 27.6652 41.4774 27.6404 41.1426 27.9438C40.8071 28.2482 40.7815 28.7667 41.0858 29.1022C41.8554 29.9511 43.0374 30.4581 44.2483 30.4581C45.7459 30.4581 47.0033 29.5059 47.238 28.1938C47.4132 27.2103 46.9616 25.9233 45.1677 25.2614Z"
          fill="white"
        />
        <path
          d="M40.1799 21.6399C39.7979 21.3917 39.2916 21.5007 39.0451 21.8798L37.4097 24.3925L35.7552 21.8602C35.5078 21.4809 35 21.3752 34.6204 21.6219C34.2416 21.8698 34.1344 22.3779 34.3826 22.7571L36.5899 26.1368L36.5809 29.6359C36.5801 30.0888 36.9461 30.4568 37.3986 30.458H37.401C37.8526 30.458 38.2203 30.0925 38.221 29.6399L38.2301 26.1379L40.4193 22.7742C40.6667 22.3948 40.5594 21.8871 40.1799 21.6399Z"
          fill="white"
        />
        <path
          d="M14.315 30.6243C12.6893 30.6243 11.3662 29.3016 11.3662 27.6755V24.2711C11.3662 22.645 12.6893 21.3224 14.315 21.3224C15.9407 21.3224 17.2638 22.645 17.2638 24.2711V27.6755C17.2638 29.3016 15.9407 30.6243 14.315 30.6243ZM14.315 22.9626C13.5934 22.9626 13.0065 23.5496 13.0065 24.2711V27.6755C13.0065 28.397 13.5934 28.9841 14.315 28.9841C15.0366 28.9841 15.6236 28.397 15.6236 27.6755V24.2711C15.6236 23.5496 15.0366 22.9626 14.315 22.9626Z"
          fill="white"
        />
        <path
          d="M7.46844 30.6245C6.08461 30.6245 4.89691 29.5923 4.70715 28.2231C4.68877 28.0979 4.67993 27.9677 4.67993 27.8356C4.67993 27.3827 5.04676 27.0155 5.5 27.0155C5.95323 27.0155 6.32007 27.3827 6.32007 27.8356C6.32007 27.8892 6.32403 27.9426 6.33129 27.9949C6.40974 28.56 6.89832 28.9844 7.46853 28.9844C8.10201 28.9844 8.6178 28.469 8.6178 27.8356C8.6178 27.2021 8.10201 26.6867 7.46853 26.6867C7.01521 26.6867 6.64847 26.3195 6.64847 25.8666C6.64847 25.4139 7.0153 25.0466 7.46853 25.0466C8.04271 25.0466 8.51045 24.5792 8.51045 24.0047C8.51045 23.4301 8.04271 22.9627 7.46853 22.9627C6.97201 22.9627 6.54191 23.3155 6.44668 23.8021C6.35939 24.2458 5.92532 24.534 5.48401 24.4488C5.03952 24.3611 4.74965 23.9303 4.83694 23.4857C5.08361 22.2324 6.19037 21.3226 7.46853 21.3226C8.94769 21.3226 10.1506 22.5259 10.1506 24.0047C10.1506 24.7158 9.87272 25.3633 9.41938 25.8439C9.93677 26.3503 10.2579 27.0559 10.2579 27.8355C10.2577 29.3735 9.00677 30.6245 7.46844 30.6245Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_5070_3648">
        <rect
          width="52"
          height="52"
          fill="white"
          transform="translate(0.255127 0.240112)"
        />
      </clipPath>
    </defs>
  </svg>`
    ),
    satisfied: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="53"
    height="53"
    viewBox="0 0 53 53"
    fill="none"
  >
    <g clip-path="url(#clip0_5070_3667)">
      <path
        d="M2.68893 28.6967C3.25965 29.2124 3.64866 29.8986 3.79813 30.653C3.94759 31.4076 3.84951 32.1903 3.51849 32.8847C3.30393 33.3307 3.18554 33.817 3.171 34.3118C3.15645 34.8067 3.24606 35.299 3.43405 35.7569C3.62202 36.2149 3.90415 36.6282 4.26215 36.9701C4.62015 37.3121 5.04601 37.5748 5.51213 37.7416C6.271 38.0083 6.91769 38.5232 7.34749 39.2031C7.77729 39.883 7.96506 40.6881 7.8804 41.488C7.88032 41.9945 7.98793 42.4952 8.19608 42.9569C8.40424 43.4187 8.7082 43.8309 9.08779 44.1661C9.46738 44.5015 9.91393 44.7522 10.3978 44.9017C10.8817 45.0514 11.3918 45.0963 11.8944 45.0337C12.6259 45.0399 13.3373 45.274 13.9296 45.7032C14.5219 46.1324 14.9657 46.7356 15.1993 47.4288C15.3627 47.9008 15.6243 48.3327 15.967 48.6961C16.3096 49.0596 16.7254 49.3461 17.1869 49.5371C17.6484 49.728 18.1452 49.819 18.6444 49.8037C19.1436 49.7886 19.634 49.6677 20.0831 49.4492C20.7708 49.1246 21.5437 49.0263 22.2907 49.1682C24.4717 49.5295 24.3914 51.4429 26.9202 51.4429C29.4492 51.4429 29.3689 49.5295 31.5499 49.1415C32.2968 48.9948 33.0712 49.0933 33.7576 49.4224C34.2049 49.6416 34.6936 49.7636 35.1915 49.7805C35.6893 49.7974 36.1851 49.7089 36.6463 49.5205C37.1076 49.3323 37.5237 49.0486 37.8675 48.688C38.2114 48.3276 38.475 47.8984 38.6413 47.4288C38.8808 46.7363 39.3307 46.1359 39.928 45.7113C40.5252 45.2868 41.2401 45.0592 41.9729 45.0605C42.4927 45.1262 43.0206 45.0766 43.5192 44.9154C44.0177 44.7542 44.4748 44.4853 44.8577 44.1279C45.2408 43.7703 45.5405 43.333 45.7356 42.8467C45.9308 42.3604 46.0166 41.8372 45.9869 41.3141C45.9336 40.5446 46.1338 39.7789 46.5565 39.1338C46.9793 38.4888 47.6017 37.9998 48.3284 37.7416C48.8017 37.58 49.2352 37.3193 49.5998 36.9771C49.9645 36.6348 50.2518 36.2188 50.4431 35.7567C50.6342 35.2945 50.7247 34.797 50.7085 34.2971C50.6922 33.7972 50.5696 33.3066 50.3489 32.8579C50.0189 32.1698 49.9188 31.394 50.0634 30.6447C50.2079 29.8955 50.5895 29.2125 51.1517 28.6967C51.5345 28.3638 51.8415 27.9527 52.052 27.491C52.2624 27.0293 52.3712 26.528 52.3712 26.0207C52.3712 25.5133 52.2624 25.0119 52.052 24.5502C51.8415 24.0886 51.5345 23.6774 51.1517 23.3446C50.5809 22.8289 50.192 22.1427 50.0425 21.3882C49.893 20.6336 49.991 19.851 50.3221 19.1567C50.5367 18.7105 50.655 18.2242 50.6696 17.7294C50.6841 17.2346 50.5946 16.7422 50.4066 16.2843C50.2186 15.8263 49.9365 15.413 49.5784 15.0712C49.2204 14.7293 48.7946 14.4664 48.3284 14.2996C47.5696 14.033 46.9229 13.518 46.4931 12.8381C46.0633 12.1582 45.8755 11.3531 45.9602 10.5532C45.9602 10.0468 45.8526 9.54605 45.6445 9.08434C45.4363 8.62261 45.1324 8.21043 44.7528 7.87512C44.3732 7.53981 43.9267 7.28906 43.4427 7.13948C42.9589 6.9899 42.4487 6.94491 41.9462 7.00751C41.2147 7.00131 40.5033 6.76732 39.911 6.33807C39.3187 5.90883 38.8748 5.30566 38.6413 4.61247C38.3998 3.9175 37.9479 3.31488 37.3486 2.88815C36.7493 2.4614 36.032 2.23168 35.2963 2.23081C33.9583 2.23081 33.6237 2.93996 32.2054 2.93996C29.4893 2.96672 29.5963 0.59844 26.9202 0.59844C26.4153 0.595718 25.9155 0.700497 25.4541 0.905814C24.9927 1.11113 24.5802 1.41228 24.2443 1.78927C23.7298 2.36183 23.0436 2.75216 22.2884 2.90173C21.5334 3.05129 20.7502 2.95204 20.0562 2.61883C19.6102 2.40428 19.1239 2.28588 18.6291 2.27133C18.1343 2.25679 17.6419 2.3464 17.184 2.53439C16.7261 2.72236 16.3127 3.0045 15.9708 3.36249C15.6289 3.72049 15.3661 4.14636 15.1993 4.61247C14.9326 5.37136 14.4177 6.01803 13.7378 6.44784C13.0579 6.87763 12.2528 7.0654 11.4529 6.98076C10.9464 6.98066 10.4457 7.08827 9.98399 7.29642C9.52227 7.50458 9.11009 7.80854 8.77478 8.18813C8.43947 8.56771 8.18872 9.01427 8.03913 9.49815C7.88956 9.98203 7.84457 10.4922 7.90717 10.9948C7.90097 11.7263 7.66697 12.4376 7.23773 13.0299C6.80849 13.6222 6.20532 14.0661 5.51213 14.2996C4.81715 14.5413 4.21454 14.993 3.78781 15.5923C3.36106 16.1917 3.13134 16.909 3.13047 17.6447C3.13047 18.9827 3.83962 19.3172 3.83962 20.7355C3.86637 23.4516 1.4981 23.3446 1.4981 26.0207C1.49537 26.5256 1.60016 27.0254 1.80548 27.4868C2.01079 27.9482 2.31194 28.3607 2.68893 28.6967Z"
        fill="#52A7A7"
      />
      <path
        d="M16.52 23.654C16.52 22.8035 16.7295 22.0331 17.1486 21.3429C17.5676 20.6526 18.1408 20.1042 18.8681 19.6974C19.5953 19.2907 20.4088 19.0873 21.3086 19.0873C22.307 19.0873 23.1637 19.3276 23.8786 19.8083C24.6058 20.2891 25.1666 20.9793 25.5611 21.8791C25.9555 22.7666 26.1527 23.845 26.1527 25.1147C26.1527 26.7047 25.9431 28.0481 25.5241 29.1452C25.1174 30.2422 24.5318 31.0742 23.7677 31.6412C23.0034 32.2082 22.1037 32.4917 21.0683 32.4917C20.2424 32.4917 19.4782 32.313 18.7757 31.9555C18.0731 31.598 17.4814 31.0866 17.0007 30.421L18.4244 28.8679C18.7202 29.3239 19.1022 29.6814 19.5707 29.9403C20.0514 30.2114 20.5628 30.347 21.1053 30.347C21.6599 30.347 22.1344 30.1991 22.5289 29.9033C22.9357 29.6075 23.25 29.1822 23.4718 28.6275C23.706 28.0605 23.8293 27.3826 23.8416 26.5938C23.6813 26.8772 23.4595 27.1299 23.176 27.3518C22.9048 27.5737 22.5905 27.7462 22.2331 27.8695C21.8879 27.9804 21.5058 28.0359 21.0868 28.0359C20.2363 28.0359 19.4598 27.8448 18.7572 27.4627C18.0668 27.0682 17.5184 26.5444 17.1117 25.8912C16.7172 25.2256 16.52 24.4798 16.52 23.654ZM21.3086 21.1765C20.8772 21.1765 20.4766 21.2936 20.1069 21.5278C19.7371 21.7497 19.4413 22.0455 19.2194 22.4153C18.9975 22.7851 18.8866 23.1979 18.8866 23.654C18.8866 24.0978 18.9913 24.5045 19.2009 24.8743C19.4228 25.2317 19.7186 25.5214 20.0884 25.7433C20.4582 25.9528 20.8649 26.0576 21.3086 26.0576C21.7524 26.0576 22.1529 25.9528 22.5104 25.7433C22.8802 25.5214 23.176 25.2317 23.3979 24.8743C23.6198 24.5045 23.7307 24.0978 23.7307 23.654C23.7307 23.2103 23.6198 22.8035 23.3979 22.4338C23.176 22.0516 22.8802 21.7497 22.5104 21.5278C22.1406 21.2936 21.74 21.1765 21.3086 21.1765Z"
        fill="white"
      />
      <path
        d="M32.7071 32.242V29.4872H27.3083V27.287L33.5021 19.3368H35.1846V27.2685H36.8116V29.4872H35.1846V32.242H32.7071ZM29.7859 27.2685H32.9844V23.09L29.7859 27.2685Z"
        fill="white"
      />
      <path
        d="M39.6128 25.3411C39.3047 25.3411 39.0243 25.2764 38.7716 25.147C38.5251 25.0176 38.3278 24.8419 38.1799 24.6201C38.0382 24.3982 37.9673 24.1517 37.9673 23.8805C37.9673 23.6094 38.0382 23.3628 38.1799 23.141C38.3278 22.9191 38.5251 22.7434 38.7716 22.614C39.0243 22.4846 39.3047 22.4199 39.6128 22.4199C39.921 22.4199 40.1983 22.4846 40.4448 22.614C40.6975 22.7434 40.8948 22.9191 41.0364 23.141C41.1844 23.3628 41.2583 23.6094 41.2583 23.8805C41.2583 24.1517 41.1844 24.3982 41.0364 24.6201C40.8948 24.8419 40.6975 25.0176 40.4448 25.147C40.1983 25.2764 39.921 25.3411 39.6128 25.3411ZM39.6128 24.5091C39.693 24.5091 39.7669 24.4814 39.8347 24.4259C39.9025 24.3643 39.9548 24.2873 39.9918 24.1948C40.035 24.0963 40.0565 23.9914 40.0565 23.8805C40.0565 23.7635 40.035 23.6586 39.9918 23.5662C39.9548 23.4738 39.9025 23.3998 39.8347 23.3443C39.7669 23.2827 39.693 23.2519 39.6128 23.2519C39.5327 23.2519 39.4588 23.2827 39.3909 23.3443C39.3232 23.3998 39.2677 23.4738 39.2245 23.5662C39.1876 23.6586 39.1691 23.7635 39.1691 23.8805C39.1691 23.9914 39.1876 24.0963 39.2245 24.1948C39.2677 24.2873 39.3232 24.3643 39.3909 24.4259C39.4588 24.4814 39.5327 24.5091 39.6128 24.5091ZM43.5787 29.1683C43.2706 29.1683 42.9901 29.1036 42.7374 28.9742C42.4909 28.8448 42.2937 28.6691 42.1458 28.4473C42.0041 28.2254 41.9332 27.9789 41.9332 27.7077C41.9332 27.4366 42.0041 27.19 42.1458 26.9682C42.2937 26.7463 42.4909 26.5706 42.7374 26.4412C42.9901 26.3118 43.2706 26.2471 43.5787 26.2471C43.8868 26.2471 44.1642 26.3118 44.4107 26.4412C44.6634 26.5706 44.8606 26.7463 45.0023 26.9682C45.1502 27.19 45.2242 27.4366 45.2242 27.7077C45.2242 27.9789 45.1502 28.2254 45.0023 28.4473C44.8606 28.6691 44.6634 28.8448 44.4107 28.9742C44.1642 29.1036 43.8868 29.1683 43.5787 29.1683ZM43.5787 28.3363C43.6589 28.3363 43.7328 28.3086 43.8005 28.2531C43.8684 28.1915 43.9207 28.1145 43.9577 28.022C44.0009 27.9235 44.0224 27.8186 44.0224 27.7077C44.0224 27.5907 44.0009 27.4858 43.9577 27.3934C43.9207 27.301 43.8684 27.227 43.8005 27.1715C43.7328 27.1099 43.6589 27.0791 43.5787 27.0791C43.4986 27.0791 43.4246 27.1099 43.3568 27.1715C43.2891 27.227 43.2336 27.301 43.1904 27.3934C43.1534 27.4858 43.1349 27.5907 43.1349 27.7077C43.1349 27.8186 43.1534 27.9235 43.1904 28.022C43.2336 28.1145 43.2891 28.1915 43.3568 28.2531C43.4246 28.3086 43.4986 28.3363 43.5787 28.3363ZM38.7438 28.475L41.36 25.526L43.6804 22.4106L44.4476 23.104L41.9424 25.9605L39.5111 29.1683L38.7438 28.475Z"
        fill="white"
      />
      <path
        d="M23.6652 8.56321C23.4737 8.36715 23.4051 8.08144 23.488 7.81563C23.571 7.54982 23.7881 7.35875 24.0547 7.31887L25.485 7.10289C25.5567 7.09128 25.619 7.04476 25.6509 6.97661L26.291 5.62595C26.4107 5.37675 26.6501 5.22058 26.9199 5.22058C27.054 5.22058 27.1817 5.25878 27.2902 5.32857C27.3988 5.39999 27.4881 5.49967 27.5488 5.62595L28.1888 6.97661C28.2207 7.04472 28.283 7.09122 28.3549 7.10289L29.7866 7.31887C30.0516 7.35875 30.2687 7.54978 30.3517 7.81563C30.4347 8.08144 30.3676 8.3672 30.1745 8.56321L29.1386 9.61317C29.0875 9.66635 29.0636 9.74277 29.0748 9.81754L29.319 11.3011C29.3653 11.5769 29.2583 11.8494 29.0413 12.0138C28.9183 12.1068 28.7747 12.1534 28.6294 12.1534C28.5177 12.1534 28.406 12.1268 28.3022 12.0703L27.0236 11.3692C26.9582 11.3343 26.8816 11.3343 26.8162 11.3692L25.5375 12.0686C25.2997 12.1998 25.0156 12.1782 24.7986 12.0138C24.5814 11.8494 24.4744 11.5752 24.5208 11.2994L24.765 9.81754C24.7761 9.74277 24.7522 9.66635 24.7011 9.61317L23.6652 8.56321Z"
        fill="#F4E0B2"
      />
      <path
        d="M23.6652 43.2299C23.4737 43.0339 23.4051 42.7481 23.488 42.4824C23.571 42.2166 23.7881 42.0255 24.0547 41.9856L25.485 41.7696C25.5567 41.7579 25.619 41.7115 25.6509 41.6433L26.291 40.2927C26.4107 40.0434 26.6501 39.8873 26.9199 39.8873C27.054 39.8873 27.1817 39.9255 27.2902 39.9953C27.3988 40.0667 27.4881 40.1664 27.5488 40.2927L28.1888 41.6433C28.2207 41.7114 28.283 41.7579 28.3549 41.7696L29.7866 41.9856C30.0516 42.0255 30.2687 42.2165 30.3517 42.4824C30.4347 42.7481 30.3676 43.0339 30.1745 43.2299L29.1386 44.2798C29.0875 44.3331 29.0636 44.4095 29.0748 44.4842L29.319 45.9677C29.3653 46.2436 29.2583 46.5161 29.0413 46.6805C28.9183 46.7735 28.7747 46.8201 28.6294 46.8201C28.5177 46.8201 28.406 46.7935 28.3022 46.737L27.0236 46.0359C26.9582 46.001 26.8816 46.001 26.8162 46.0359L25.5375 46.7353C25.2997 46.8665 25.0156 46.8449 24.7986 46.6805C24.5814 46.5161 24.4744 46.242 24.5208 45.9661L24.765 44.4842C24.7761 44.4095 24.7522 44.3331 24.7011 44.2798L23.6652 43.2299Z"
        fill="#F0D28B"
      />
      <path
        d="M32.8744 11.4728C32.7147 11.3094 32.6575 11.0713 32.7267 10.8498C32.7958 10.6283 32.9768 10.4691 33.1988 10.4358L34.3907 10.2558C34.4505 10.2462 34.5024 10.2074 34.5291 10.1506L35.0625 9.02507C35.1623 8.81741 35.3618 8.68726 35.5866 8.68726C35.6983 8.68726 35.8047 8.71909 35.8952 8.77725C35.9856 8.83676 36.0601 8.91983 36.1106 9.02507L36.644 10.1506C36.6706 10.2074 36.7225 10.2461 36.7823 10.2558L37.9756 10.4358C38.1964 10.4691 38.3772 10.6283 38.4465 10.8498C38.5156 11.0713 38.4598 11.3094 38.2988 11.4728L37.4355 12.3478C37.3929 12.392 37.3729 12.4557 37.3823 12.5181L37.5858 13.7543C37.6244 13.9841 37.5353 14.2112 37.3543 14.3483C37.252 14.4258 37.1322 14.4646 37.0111 14.4646C36.9181 14.4646 36.825 14.4424 36.7385 14.3953L35.673 13.8112C35.6185 13.782 35.5547 13.782 35.5 13.8112L34.4346 14.3939C34.2364 14.5033 33.9997 14.4853 33.8188 14.3483C33.6378 14.2112 33.5488 13.9828 33.5873 13.7529L33.7908 12.5181C33.8001 12.4557 33.7802 12.392 33.7376 12.3478L32.8744 11.4728Z"
        fill="#F4E0B2"
      />
      <path
        d="M32.8744 40.3616C32.7147 40.1982 32.6575 39.9602 32.7267 39.7387C32.7958 39.5172 32.9768 39.3579 33.1988 39.3246L34.3907 39.1447C34.4505 39.135 34.5024 39.0963 34.5291 39.0395L35.0625 37.9139C35.1623 37.7063 35.3618 37.5762 35.5866 37.5762C35.6983 37.5762 35.8047 37.608 35.8952 37.6661C35.9856 37.7256 36.0601 37.8087 36.1106 37.9139L36.644 39.0395C36.6706 39.0962 36.7225 39.135 36.7823 39.1447L37.9756 39.3246C38.1964 39.3579 38.3772 39.5172 38.4465 39.7387C38.5156 39.9602 38.4598 40.1984 38.2988 40.3616L37.4355 41.2366C37.3929 41.2809 37.3729 41.3446 37.3823 41.407L37.5858 42.6432C37.6244 42.873 37.5353 43.1001 37.3543 43.2371C37.252 43.3147 37.1322 43.3535 37.0111 43.3535C36.9181 43.3535 36.825 43.3313 36.7385 43.2842L35.673 42.7C35.6185 42.6709 35.5547 42.6709 35.5 42.7L34.4346 43.2828C34.2364 43.3922 33.9997 43.3742 33.8188 43.2371C33.6378 43.1001 33.5488 42.8716 33.5873 42.6418L33.7908 41.407C33.8001 41.3446 33.7802 41.2809 33.7376 41.2366L32.8744 40.3616Z"
        fill="#F0D28B"
      />
      <path
        d="M15.5411 11.4728C15.3814 11.3094 15.3242 11.0713 15.3934 10.8498C15.4625 10.6283 15.6435 10.4691 15.8656 10.4358L17.0574 10.2558C17.1173 10.2462 17.1692 10.2074 17.1959 10.1506L17.7293 9.02507C17.829 8.81741 18.0286 8.68726 18.2533 8.68726C18.3651 8.68726 18.4715 8.71909 18.562 8.77725C18.6523 8.83676 18.7269 8.91983 18.7774 9.02507L19.3108 10.1506C19.3373 10.2074 19.3892 10.2461 19.4491 10.2558L20.6423 10.4358C20.8631 10.4691 21.044 10.6283 21.1132 10.8498C21.1823 11.0713 21.1265 11.3094 20.9655 11.4728L20.1022 12.3478C20.0597 12.392 20.0397 12.4557 20.0491 12.5181L20.2525 13.7543C20.2911 13.9841 20.2021 14.2112 20.0211 14.3483C19.9187 14.4258 19.799 14.4646 19.6779 14.4646C19.5849 14.4646 19.4917 14.4424 19.4053 14.3953L18.3398 13.8112C18.2852 13.782 18.2214 13.782 18.1668 13.8112L17.1013 14.3939C16.9032 14.5033 16.6664 14.4853 16.4856 14.3483C16.3046 14.2112 16.2155 13.9828 16.2541 13.7529L16.4576 12.5181C16.4668 12.4557 16.447 12.392 16.4043 12.3478L15.5411 11.4728Z"
        fill="#F4E0B2"
      />
      <path
        d="M15.5411 40.3616C15.3814 40.1982 15.3242 39.9602 15.3934 39.7387C15.4625 39.5172 15.6435 39.3579 15.8656 39.3246L17.0574 39.1447C17.1173 39.135 17.1692 39.0963 17.1959 39.0395L17.7293 37.9139C17.829 37.7063 18.0286 37.5762 18.2533 37.5762C18.3651 37.5762 18.4715 37.608 18.562 37.6661C18.6523 37.7256 18.7269 37.8087 18.7774 37.9139L19.3108 39.0395C19.3373 39.0962 19.3892 39.135 19.4491 39.1447L20.6423 39.3246C20.8631 39.3579 21.044 39.5172 21.1132 39.7387C21.1823 39.9602 21.1265 40.1984 20.9655 40.3616L20.1022 41.2366C20.0597 41.2809 20.0397 41.3446 20.0491 41.407L20.2525 42.6432C20.2911 42.873 20.2021 43.1001 20.0211 43.2371C19.9187 43.3147 19.799 43.3535 19.6779 43.3535C19.5849 43.3535 19.4917 43.3313 19.4053 43.2842L18.3398 42.7C18.2852 42.6709 18.2214 42.6709 18.1668 42.7L17.1013 43.2828C16.9032 43.3922 16.6664 43.3742 16.4856 43.2371C16.3046 43.1001 16.2155 42.8716 16.2541 42.6418L16.4576 41.407C16.4668 41.3446 16.447 41.2809 16.4043 41.2366L15.5411 40.3616Z"
        fill="#F0D28B"
      />
    </g>
    <defs>
      <clipPath id="clip0_5070_3667">
        <rect
          width="52"
          height="52"
          fill="white"
          transform="translate(0.625 0.240112)"
        />
      </clipPath>
    </defs>
  </svg>`
    ),
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
  }, P = `.product__title h1 {
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
  color: #095d66;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
}

.crs-payment-options {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #3c3c3b;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; 
}
`;
  class H {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.changeTitle(), this.addImageBadge(), this.changeDescriptionList(), this.addGuaranteeBadges(), this.addMorePaymentOptions();
    }
    async changeTitle() {
      const n = await r(".product__title h1");
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
        <div class="icon">${h.sleep}</div>
        <div class="text">
          Say goodbye to sleepless nights and embrace peaceful routines
        </div>
      </div>
    `
      );
      (await r(
        ".et-db #et-boc .et-l .et_pb_image_0_tb_body.product__image"
      )).insertAdjacentHTML("beforeend", n);
    }
    async changeDescriptionList() {
      var l;
      const n = window.location.pathname, e = await r(
        ".et_pb_wc_description_0_tb_body p"
      );
      e.innerHTML = "What’s included in this program:";
      const t = await r(
        ".text__product-custom-description  ul"
      ), o = (l = Object.entries(g).find(
        ([c, R]) => n.includes(R)
      )) == null ? void 0 : l[0];
      if (!o) return;
      const s = j[o];
      if (!s) return;
      const d = (
        /* HTML */
        `${s.map((c) => `<li>${c}</li>`).join("")}`
      );
      t.innerHTML = d;
    }
    async addGuaranteeBadges() {
      const n = (
        /* HTML */
        `
      <div class="crs-guarantee-badges">
        <div class="guarantee-badge">
          <div class="icon">${h.refund}</div>
          <div class="text">
            Try it risk-free for 30 days. No results? Get a full refund!
          </div>
        </div>
        <div class="guarantee-badge">
          <div class="icon">${h.satisfied}</div>
          <div class="text">
            94% of parents reported better sleep within 4 weeks.
          </div>
        </div>
      </div>
    `
      );
      (await r(
        "#reviews-io-nuggets-widget"
      )).insertAdjacentHTML("afterend", n);
    }
    async addMorePaymentOptions() {
      const n = (
        /* HTML */
        ` <div class="crs-payment-options">
      <div class="text">More Payment Options</div>
      <div class="icon">${h.chevronDown}</div>
    </div>`
      );
      (await r(
        '#wc-stripe-payment-request-wrapper[style*="block"]'
      )).insertAdjacentHTML("afterend", n);
    }
    addStyles() {
      const n = document.createElement("style");
      n.innerHTML = P, document.head.appendChild(n);
    }
  }
  const E = `.crs-sticky {
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
  class T {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners(), this.showStickyBlock();
    }
    render() {
      var s, d;
      const n = (s = document.querySelector("h1")) == null ? void 0 : s.textContent, e = (d = document.querySelector(
        ".woocommerce-Price-amount.amount"
      )) == null ? void 0 : d.textContent;
      if (!n || !e) return;
      let t;
      const i = n.split(":");
      if (i.length > 1) {
        const l = i[0], c = i.slice(1).join(":").trim();
        t = `${l}: <span>${c}</span>`;
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
        t == null || t.click();
      });
    }
    async showStickyBlock() {
      if (await r('button[data-button="buy-now"]'), !document.querySelector(".crs-sticky")) return;
      const e = document.querySelectorAll(
        ".single_add_to_cart_button"
      );
      console.log(e);
      const t = {
        root: null,
        // viewport
        threshold: 0,
        rootMargin: "0px 0px -50% 0px"
      }, i = (s) => {
        s.forEach((d) => {
          d.isIntersecting ? document.body.classList.add("is-crs-sticky") : !d.isIntersecting && d.boundingClientRect.top > 0 && document.body.classList.remove("is-crs-sticky");
        });
      }, o = new IntersectionObserver(
        i,
        t
      );
      e.forEach((s) => o.observe(s));
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = E, document.head.appendChild(n);
    }
  }
  u({
    name: "Removing user barriers on product pages",
    dev: "OS"
  });
  class q {
    constructor() {
      this.init();
    }
    init() {
      const n = window.location.pathname;
      Object.entries(g).some(
        ([i, o]) => n.includes(o)
      ) && (console.log("experiment is running"), new H(), new b(), new k(), new B(), new M(), new $(), new _(), new w(), new T());
    }
  }
  new q();
})();
