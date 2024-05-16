(function() {
  "use strict";
  const h = (t, n, e, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: i
    }), console.log(`Event: ${t} | ${n} | ${e} | ${i}`);
  }, x = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, c = (t) => document.querySelectorAll(t), o = (t) => document.querySelector(t), w = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, g = (t, n, e, i, a = 3e3, r = 0.5) => {
    let p, d;
    if (p = new IntersectionObserver(
      function(f) {
        f[0].isIntersecting === !0 ? d = setTimeout(() => {
          h(
            n,
            f[0].target.dataset.visible || i || "",
            "Visibility",
            e
          ), p.disconnect();
        }, a) : clearTimeout(d);
      },
      { threshold: [r] }
    ), typeof t == "string") {
      const f = document.querySelector(t);
      f && p.observe(f);
    } else
      p.observe(t);
  };
  function l(t) {
    return new Promise((n) => {
      if (document.querySelector(t))
        return n(document.querySelector(t));
      const e = new MutationObserver(() => {
        document.querySelector(t) && (n(document.querySelector(t)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(t) {
    t = t === void 0 ? {} : t;
    let n, e, i, a, r = (t == null ? void 0 : t.delay) || 50;
    function p() {
      n = null, a = 0;
    }
    return p(), function() {
      return e = window.scrollY, n != null && (a = e - n), n = e, clearTimeout(i), i = setTimeout(p, r), a;
    };
  })();
  function m(t) {
    return new Promise((n) => setTimeout(n, t));
  }
  const _ = async (t, n) => {
    const e = t, a = (n == null ? void 0 : n.getBoundingClientRect().top) + window.pageYOffset - e;
    return window.scrollTo({
      top: a,
      behavior: "smooth"
    }), await m(800), !0;
  }, s = "https://conversionratestore.github.io/projects/buzzpatch/img/", u = {
    giftIcon: (
      /* HTML */
      `
    <svg class="gift_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_2116_894)">
        <path
          d="M7.10441 8.88452C5.78666 8.88452 1.90835 8.88452 1.90835 8.88452C1.49664 8.88452 1.15976 9.22135 1.15976 9.63306V15.2516C1.15976 15.6633 1.49664 16.0001 1.90835 16.0001C1.90835 16.0001 5.86781 16.0001 7.19178 16.0001C7.36788 16.0001 7.36788 15.8109 7.36788 15.8109V9.13889C7.36788 9.13889 7.36783 8.88452 7.10441 8.88452Z"
          fill="#FF3C7F"
        />
        <path
          d="M14.0917 8.88452C14.0917 8.88452 10.1986 8.88452 8.90094 8.88452C8.58478 8.88452 8.63212 9.21377 8.63212 9.21377V15.817C8.63212 15.817 8.62956 15.9999 8.81973 15.9999C10.1377 15.9999 14.0916 15.9999 14.0916 15.9999C14.5033 15.9999 14.8402 15.6631 14.8402 15.2514V9.63306C14.8403 9.22135 14.5034 8.88452 14.0917 8.88452Z"
          fill="#FF3C7F"
        />
        <path
          d="M7.36783 4.46362C7.36783 4.46362 7.36783 4.20996 7.11718 4.20996C5.61623 4.20996 1.06301 4.20996 1.06301 4.20996C0.651304 4.20996 0.314423 4.54684 0.314423 4.9585V7.29518C0.314423 7.70689 0.651304 8.04372 1.06301 8.04372C1.06301 8.04372 5.63663 8.04372 7.13768 8.04372C7.36783 8.04372 7.36783 7.84411 7.36783 7.84411V4.46362Z"
          fill="#FF3C7F"
        />
        <path
          d="M14.937 4.20996C14.937 4.20996 10.3819 4.20996 8.86353 4.20996C8.63223 4.20996 8.63223 4.43035 8.63223 4.43035V7.84874C8.63223 7.84874 8.63223 8.04372 8.91343 8.04372C10.4193 8.04372 14.937 8.04372 14.937 8.04372C15.3487 8.04372 15.6856 7.70689 15.6856 7.29518V4.9585C15.6856 4.54684 15.3487 4.20996 14.937 4.20996Z"
          fill="#FF3C7F"
        />
        <path
          d="M4.82171 3.65623C4.47921 3.65623 4.16638 3.62907 3.89206 3.57546C3.19528 3.43933 2.71638 3.17439 2.42798 2.76557C2.16958 2.39918 2.0905 1.9475 2.19287 1.42301C2.37219 0.50535 2.98847 0 3.92805 0C4.1269 0 4.34527 0.0229605 4.57716 0.0682817C5.16705 0.183521 5.92153 0.521766 6.59545 0.973068C7.73885 1.73884 7.7954 2.2149 7.73846 2.50641C7.65475 2.93475 7.25438 3.24082 6.51447 3.44217C6.01457 3.57819 5.39758 3.65623 4.82171 3.65623ZM3.92811 1.19978C3.56423 1.19978 3.43917 1.30144 3.37051 1.65305C3.31433 1.94052 3.38518 2.04092 3.40841 2.07392C3.50571 2.2119 3.75915 2.32698 4.1221 2.39782C4.31794 2.43611 4.55993 2.45634 4.82166 2.45634C5.3972 2.45634 5.90424 2.36913 6.24068 2.27375C6.26517 2.26682 6.30319 2.23786 6.26245 2.21359C5.8226 1.85528 5.01789 1.37681 4.34712 1.24576C4.19087 1.21533 4.04984 1.19978 3.92811 1.19978Z"
          fill="#FF3C7F"
        />
        <path
          d="M11.1956 3.65618C11.1956 3.65618 11.1956 3.65618 11.1955 3.65618C10.6197 3.65618 10.0027 3.57813 9.50282 3.44212C8.76285 3.24082 8.36254 2.93469 8.27882 2.50641C8.22194 2.2149 8.27839 1.73884 9.42189 0.973069C10.0957 0.521766 10.8502 0.183521 11.4402 0.0682817C11.6721 0.0229605 11.8904 0 12.0891 0C13.0289 0 13.6452 0.505404 13.8243 1.42306C13.9268 1.9475 13.8478 2.39918 13.5893 2.76557C13.3009 3.17444 12.8221 3.43933 12.1251 3.57546C11.8509 3.62896 11.5381 3.65618 11.1956 3.65618ZM9.76444 2.20612C9.72545 2.22875 9.74432 2.26448 9.76455 2.27031C10.1008 2.36701 10.6132 2.45634 11.1955 2.45634C11.4574 2.45634 11.6992 2.43611 11.8951 2.39782C12.258 2.32692 12.5116 2.2119 12.6088 2.07392C12.6322 2.04092 12.7031 1.94052 12.6467 1.65305C12.5781 1.30144 12.453 1.19978 12.0891 1.19978C11.9674 1.19978 11.8265 1.21527 11.6701 1.24581C10.9993 1.37681 10.2043 1.84775 9.76444 2.20612Z"
          fill="#FF3C7F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2116_894">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    closeIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_2127_1144)">
        <path
          d="M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12Z"
          fill="#FF3C7F"
          stroke="white"
        />
        <path
          d="M16 8.80571L15.1943 8L12 11.1943L8.80571 8L8 8.80571L11.1943 12L8 15.1943L8.80571 16L12 12.8057L15.1943 16L16 15.1943L12.8057 12L16 8.80571Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2127_1144">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    borderIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="34" viewBox="0 0 134 34" fill="none">
      <rect y="21" width="134" height="5" rx="2.5" fill="black" />
    </svg>
  `
    )
  }, b = (t, n = "") => (
    /*HTML */
    `
  <div class="gift_box_wrapper">
    <div class="gift_box ${n}">
      ${u.giftIcon}
      ${t ? "<p><b>Limited Time Offer:</b> Get a free NATPAT sticker set with your purchase</p>" : '<p>Get a free <span class="trigger_popup_open">NATPAT sticker set</span> with any 2-4 pack purchase.</p>'}
    </div>
  </div>
`
  ), y = (
    /* HTML */
    `
  <img src="${s}gift_img_1.png" alt="stickers 16 magical characters" />
  <img src="${s}gift_img_2.png" alt="stickers 16 magical characters" />
  <h3 class="gift_stickers_title">16 magical characters</h3>
  <div class="border_icon">${u.borderIcon}</div>
`
  ), C = (
    /* HTML */
    `
  <div class="new_popup_backdrop is_hidden">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">${u.closeIcon}</button>
      <div class="new_popup_content">${y}</div>
    </div>
  </div>
`
  ), v = `body .gift_box_wrapper .gift_box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  max-width: 302px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 16px;
  border-radius: 6px;
  border: 2px solid #fee6ee;
  background: #fff;
}
body .gift_box_wrapper .gift_box.cta_box {
  border-radius: 12px;
  margin-top: -15px;
  padding-top: 25px;
}
body .gift_box_wrapper .gift_box.banner_box {
  margin-top: -80px;
  z-index: 1;
  position: relative;
}
body .gift_box_wrapper .gift_box.bundle_box {
  max-width: 100%;
  padding: 10.5px 16px;
  border-radius: 4px;
  margin: 0 auto 12px;
}
body .gift_box_wrapper .gift_box.bundle_box p {
  max-width: 249px;
}
body .gift_box_wrapper .gift_box svg {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  margin-top: 3px;
}
body .gift_box_wrapper .gift_box p {
  color: #212529 !important;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  margin: 0 !important;
  text-align: left;
  letter-spacing: normal;
}
body .gift_box_wrapper .gift_box p span {
  color: #1e4fd1;
  font-weight: 600;
  text-decoration-line: underline;
  cursor: pointer;
}

body .js-heading.js-mobile .no-padding {
  margin-top: -30px;
}

body .hand-banner a.get-it {
  margin-top: 16px !important;
}

.effectiveness {
  padding-bottom: 56px !important;
}

.bp-comparison {
  padding-bottom: 0 !important;
}

.ingredients {
  padding-bottom: 26px !important;
}

.row .text-center a.get-it {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  z-index: 1;
  position: relative;
  padding: 0;
  margin: 0 auto !important;
  font-size: 18px;
  letter-spacing: 0.27px;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
}

#getNow {
  position: relative;
  padding: 0 16px !important;
}
#getNow > h2 {
  text-align: left;
  color: #212529;
  font-family: "DINEngschrift LT";
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.72px;
  text-transform: uppercase;
}
#getNow > h2 + p {
  text-align: left;
  color: #212529;
  font-family: "Roboto", sans-serif;
  font-size: 16px !important;
  font-weight: 500 !important;
  line-height: 24px !important;
  margin: 8px 0 31px;
}
#getNow p > br {
  display: none;
}
#getNow .sub.js-desktop + img {
  position: absolute;
  top: -10px;
  right: 13px;
  max-width: 135px;
}
#getNow .js-packs:nth-child(1) input[type=radio] + label {
  border-top-left-radius: 0;
}
#getNow input[type=radio] + label {
  font-family: "DIN Condensed";
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 8.4px 20px;
}
#getNow input[type=radio] + label .gift_icon {
  position: absolute;
  right: 6px;
  top: 6px;
}
#getNow input[type=radio] + label span {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
#getNow .gift_box_wrapper {
  padding: 0 14px;
}
#getNow .form {
  padding: 0 14px;
}
#getNow .form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px 16px;
  margin: 0 !important;
}
#getNow .form-group .js-packs {
  max-width: calc(50% - 8px);
  margin: 0;
}
#getNow .new-bundle-pack {
  max-width: 100%;
  margin: auto;
  padding: 14px 0 12px;
}
#getNow .new-bundle-pack h3 {
  color: #212529;
  font-family: "DIN Condensed";
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0;
}
#getNow .new-bundle-pack .bundle-off {
  color: #fff;
  font-family: "DIN Condensed";
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 2px 2px 0px 0px;
  background: #000;
  margin-top: -24px;
}
#getNow .new-bundle-pack input[type=radio] + label {
  padding: 6px 8px 3px 11px;
}
#getNow .new-bundle-pack input[type=radio] + label .gift_icon {
  right: 8px;
  top: 8px;
}
#getNow .new-bundle-pack input[type=radio] + label span {
  font-weight: 400;
  margin-top: 4px;
  display: inline-block;
}
#getNow .new-bundle-pack input[type=radio] + label span.pack-title {
  font-weight: 700;
  line-height: 22px;
  margin: 0;
}
#getNow .new-bundle-pack img {
  background: inherit !important;
  padding: 0 !important;
  width: 78px;
  margin-right: 21px !important;
}
#getNow .new-bundle-pack .btn-tooltip {
  right: 8px;
  bottom: 8px;
  width: 20px;
}
#getNow .prices .js-total {
  color: #181717;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 4px;
}
#getNow .prices .js-regular {
  margin-bottom: 12px;
}
#getNow #addToCart {
  padding: 20px 10px;
}
#getNow .days {
  margin-top: 0 !important;
  margin-bottom: 23px !important;
}

.js-packs input[type=radio]:checked + label .gift_icon path,
.new-bundle-pack .js-packs input[type=radio]:checked + label .pack-label .gift_icon path {
  fill: white;
}

.new_popup_backdrop {
  background: linear-gradient(180deg, #fff 0%, #fff4f8 100%);
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000000000;
  transition: all 0.8s ease 0s;
  overflow: auto;
}

.new_popup_backdrop.is_hidden {
  opacity: 0;
  pointer-events: none;
}

.new_popup {
  position: absolute;
  height: 100%;
  width: 100%;
}

.new_popup_close {
  position: absolute;
  background: none;
  padding: 0;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  z-index: 1;
  border: none;
  transition: all 0.8s ease 0s;
}
.new_popup_close svg {
  vertical-align: baseline;
}

.new_popup_content {
  padding: 32px 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.new_popup_content img {
  margin: 0 auto;
  display: block;
}
.new_popup_content img:nth-child(1) {
  width: 100%;
  max-width: 240px;
}
.new_popup_content img:nth-child(2) {
  width: 100%;
  max-width: 335px;
  margin-top: 24px;
}
.new_popup_content .gift_stickers_title {
  color: #2c56a5;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 40px 0 12px;
}
.new_popup_content .border_icon {
  display: none;
  text-align: center;
  margin: auto auto 0;
  width: -moz-max-content;
  width: max-content;
}

.nudge-ui-container {
  display: none !important;
}/*# sourceMappingURL=main.css.map */`, k = window.innerWidth < 768 ? "mobile" : "desktop";
  class L {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      x({ name: "Exit Intent Popup v.B", dev: "SKh" }), w("exp_introduce_b"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${v}</style>`), this.createPopup(), this.rendergGiftElements(), this.triggerPopupOpen(), this.clickAddToCartBtnHandler(), this.visibleHandler(), this.handleClickGetNow();
    }
    rendergGiftElements() {
      c(".row .text-center a.get-it").forEach((n) => {
        var e;
        n.innerHTML = "buy buzzpatch <br/> stickers", (e = n.nextElementSibling) != null && e.classList.contains(".cta_box") || n.insertAdjacentHTML("afterend", b(!0, "cta_box"));
      }), c(".hand-banner a.get-it").forEach((n) => {
        var e;
        (e = n.previousElementSibling) != null && e.classList.contains(".banner_box") || n.insertAdjacentHTML("beforebegin", b(!0, "banner_box"));
      }), c("#getNow .prices").forEach((n) => {
        var e;
        (e = n.previousElementSibling) != null && e.classList.contains(".bundle_box") || n.insertAdjacentHTML("beforebegin", b(!1, "bundle_box"));
      }), c("#getNow input[type=radio] + label").forEach((n) => {
        n.getAttribute("for") !== "radios-3" && n.insertAdjacentHTML("afterbegin", u.giftIcon);
      }), o(".new-bundle-pack img").src !== `${s}new_bundle_img.png` && (o(".new-bundle-pack img").src = `${s}new_bundle_img.png`), o("#getNow .days").src !== `${s}new_trustpilot_reviews_img.png` && (o("#getNow .days").src = `${s}new_trustpilot_reviews_img.png`);
    }
    triggerPopupOpen() {
      l(".trigger_popup_open").then((n) => {
        o(".trigger_popup_open").addEventListener("click", (e) => {
          e.preventDefault(), h("exp_introduce_b_link_01", "16 magical characters", "Link", "Shopping section"), this.handleShowPopup();
        });
      });
    }
    createPopup() {
      o(".new_popup_backdrop") || o("body").insertAdjacentHTML("afterbegin", C), l(".new_popup_backdrop").then((n) => {
        this.handleClosePopup();
      });
    }
    handleShowPopup() {
      const n = o("body"), e = o(".new_popup_backdrop"), i = o("html");
      e.classList.contains("is_hidden") && e.classList.remove("is_hidden"), n.style.overflow = "hidden", i.style.overflow = "hidden", h("exp_introduce_b_popup_01", "16 magical characters", "Visibility", "Pop up");
    }
    handleClosePopup() {
      const n = o("body"), e = o(".new_popup_backdrop"), i = o(".new_popup"), a = i.querySelectorAll('[data-popup="close"]'), r = o("html");
      a.forEach((p) => {
        p.addEventListener("click", (d) => {
          d.currentTarget && (h("exp_introduce_b_button_01", "Close", "Button", "Pop up"), e.classList.add("is_hidden"), n.style.overflow = "initial", r.style.overflow = "initial");
        });
      });
    }
    clickAddToCartBtnHandler() {
      var n;
      (n = o("#addToCart")) == null || n.addEventListener("click", (e) => {
        var r;
        e.preventDefault();
        let i = (r = o(".js-packs input[type=radio]:checked+label")) == null ? void 0 : r.previousElementSibling.value;
        console.log(i, "idValue"), i === "39542857695276" ? this.addToCartGiftHandler(i, !1) : this.addToCartGiftHandler(i);
      });
    }
    async addToCartGiftHandler(n, e = !0) {
      await fetch("/cart/clear.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let i = [
        {
          id: n,
          quantity: 1
        }
      ];
      e && i.push({
        id: 43320074436652,
        quantity: 1
      }), await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: i
        })
      }), window.location.href = "/checkout";
    }
    visibleHandler() {
      l(".hand-banner .banner_box").then((n) => {
        g(".hand-banner .banner_box", "exp_introduce_b_element_01", "First screen", "Limited time offer");
      }), l(".effectiveness .cta_box").then((n) => {
        g(
          ".effectiveness .cta_box",
          "exp_introduce_b_element_02",
          "Limited Time Offer",
          "Limited time offer - 1"
        );
      }), l(".bp-comparison .cta_box").then((n) => {
        g(
          ".bp-comparison .cta_box",
          "exp_introduce_b_element_02",
          "Limited Time Offer",
          "Limited time offer - 2"
        );
      }), l("#ingredients .cta_box").then((n) => {
        g(
          "#ingredients .cta_box",
          "exp_introduce_b_element_02",
          "Limited Time Offer",
          "Limited time offer - 3"
        );
      }), l("#getNow .bundle_box").then((n) => {
        g("#getNow .bundle_box", "exp_introduce_b_element_03", "Shopping section", "Limited time offer");
      });
    }
    handleClickGetNow() {
      l("#getNow").then((n) => {
        c('[href="#getNow"]').forEach((e) => {
          e.addEventListener("click", (i) => {
            i.preventDefault(), i.stopPropagation(), $("html, body").stop();
            let a = o("#getNow"), r = 35, p = !0, d = setInterval(async () => {
              a.getBoundingClientRect().top > r - 1 && a.getBoundingClientRect().top <= r + 1 ? clearInterval(d) : p && (p = !1, p = await _(r, a));
            }, 100);
          });
        });
      });
    }
  }
  window.location.pathname.match("pages") && new L(k);
})();
//# sourceMappingURL=index.js.map
