(function() {
  "use strict";
  const P = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), console.log(`Event: ${n} | ${e} | ${t} | ${i}`);
  }, Ue = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, _e = (n) => document.querySelector(n), Xe = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  };
  function W(n) {
    return new Promise((e) => {
      if (document.querySelector(n))
        return e(document.querySelector(n));
      const t = new MutationObserver(() => {
        document.querySelector(n) && (e(document.querySelector(n)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const F = (n, e, t, i, s = 1, o) => {
    let r = new IntersectionObserver(
      (a) => {
        a.forEach((c) => {
          c.isIntersecting && (r.unobserve(c.target), setTimeout(function() {
            l.observe(c.target);
          }, 1e3 * s));
        });
      },
      {
        threshold: 0.5
      }
    ), l = new IntersectionObserver((a) => {
      a.forEach((c) => {
        c.isIntersecting ? (P(
          e || `view_element_${c.target.id}`,
          t || `View element on screen (${s} sec or more)`,
          "view",
          i || c.target.id
        ), o && o(), r.unobserve(c.target)) : r.observe(c.target), l.unobserve(c.target);
      });
    });
    document.querySelectorAll(n).forEach((a) => {
      r.observe(a);
    });
  }, Qe = function(n = {}) {
    let e, t, i, s, o = n.delay || 50;
    function r() {
      e = null, s = 0;
    }
    return r(), function() {
      return t = window.scrollY, e !== null && (s = t - e), e = t, clearTimeout(i), i = setTimeout(r, o), s;
    };
  }();
  function Ze(n) {
    const e = document.cookie.split(";");
    for (let t = 0; t < e.length; t++) {
      const i = e[t].trim(), [s, o] = i.split("=");
      if (s === n)
        return o;
    }
  }
  const Ae = "cartPopupShown", ke = "promoPopupShown", Te = "giftPopupShown", V = "userWatchedPopup", Q = "CRS_DISCOUNT", Ce = "KEY0624", le = "savedGift", Ke = "https://conversionratestore.github.io/projects/msb/", Je = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    d="M14.3877 0H5.30462C4.8775 0.00162093 4.46835 0.172009 4.16633 0.474025C3.86432 0.77604 3.69393 1.1852 3.69231 1.61231V3.69231H1.61231C1.1852 3.69393 0.77604 3.86432 0.474025 4.16633C0.172009 4.46835 0.00162093 4.8775 0 5.30462V14.3877C0.00162093 14.8148 0.172009 15.224 0.474025 15.526C0.77604 15.828 1.1852 15.9984 1.61231 16H10.6954C11.1225 15.9984 11.5317 15.828 11.8337 15.526C12.1357 15.224 12.3061 14.8148 12.3077 14.3877V12.3077H14.3877C14.8148 12.3061 15.224 12.1357 15.526 11.8337C15.828 11.5317 15.9984 11.1225 16 10.6954V1.61231C15.9984 1.1852 15.828 0.77604 15.526 0.474025C15.224 0.172009 14.8148 0.00162093 14.3877 0ZM11.0769 14.3877C11.0769 14.4889 11.0367 14.5859 10.9652 14.6575C10.8936 14.729 10.7966 14.7692 10.6954 14.7692H1.61231C1.51112 14.7692 1.41407 14.729 1.34252 14.6575C1.27097 14.5859 1.23077 14.4889 1.23077 14.3877V5.30462C1.23077 5.20343 1.27097 5.10638 1.34252 5.03483C1.41407 4.96327 1.51112 4.92308 1.61231 4.92308H10.6954C10.7966 4.92308 10.8936 4.96327 10.9652 5.03483C11.0367 5.10638 11.0769 5.20343 11.0769 5.30462V14.3877ZM14.7692 10.6954C14.7692 10.7966 14.729 10.8936 14.6575 10.9652C14.5859 11.0367 14.4889 11.0769 14.3877 11.0769H12.3077V5.30462C12.3061 4.8775 12.1357 4.46835 11.8337 4.16633C11.5317 3.86432 11.1225 3.69393 10.6954 3.69231H4.92308V1.61231C4.92308 1.51112 4.96327 1.41407 5.03483 1.34252C5.10638 1.27097 5.20343 1.23077 5.30462 1.23077H14.3877C14.4889 1.23077 14.5859 1.27097 14.6575 1.34252C14.729 1.41407 14.7692 1.51112 14.7692 1.61231V10.6954Z"
    fill="currentColor"
  />
</svg>`
  ), et = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M12 0C5.388 0 0 5.388 0 12C0 18.612 5.388 24 12 24C18.612 24 24 18.612 24 12C24 5.388 18.612 0 12 0ZM17.736 9.24L10.932 16.044C10.764 16.212 10.536 16.308 10.296 16.308C10.056 16.308 9.828 16.212 9.66 16.044L6.264 12.648C5.916 12.3 5.916 11.724 6.264 11.376C6.612 11.028 7.188 11.028 7.536 11.376L10.296 14.136L16.464 7.968C16.812 7.62 17.388 7.62 17.736 7.968C18.084 8.316 18.084 8.88 17.736 9.24Z"
    fill="#A11A17"
  />
</svg>`
  ), ce = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="13"
  viewBox="0 0 13 13"
  fill="none"
>
  <path
    d="M1.67181 2L11 11.3M1.67181 11.3L11 2"
    stroke="#333333"
    stroke-width="2.325"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), tt = `.crs-promocode {
  font-family: Arial;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs-promocode__title {
  color: var(--Untitled-Black, var(--H1-Font, #333));
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  margin: 0 !important;
}
.crs-promocode__code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 18px;
  min-height: 54px;
  color: #a11a17;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 4.2px;
  text-transform: uppercase;
}
.crs-promocode__code.copied span {
  opacity: 0.5;
}
.crs-promocode__copy-btn {
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  color: #a11a17;
  svg {
    width: 24px;
    height: 24px;
  }
}
.crs-promocode__copy-btn:focus,
.crs-promocode__copy-btn:hover,
.crs-promocode__copy-btn:active {
  outline: none;
  border: none;
  background: none;
}`;
  class Ee {
    constructor(e, t) {
      this.container = document.querySelector(e), this.promocode = t, this.init();
    }
    init() {
      this.render();
    }
    render() {
      const e = (
        /* HTML */
        ` <div class="crs-promocode">
      <p class="crs-promocode__title">Enter code at checkout</p>
      <div class="crs-promocode__code">
        <span>${this.promocode} </span>
        <button type="button" class="crs-promocode__copy-btn" data-action="copy-promo">${Je}</button>
      </div>
    </div>`
      );
      if (this.container) {
        document.head.insertAdjacentHTML("beforeend", `<style>${tt}</style>`), this.container.insertAdjacentHTML("beforeend", e);
        const t = this.container.querySelector("[data-action='copy-promo']");
        t && t.addEventListener("click", this.copyPromo.bind(this));
      }
    }
    copyPromo(e) {
      const t = e.currentTarget, i = t.closest(".crs-promocode__code");
      t.innerHTML = `${et}`, navigator.clipboard.writeText(this.promocode), i.classList.add("copied"), localStorage.setItem(Q, this.promocode);
    }
  }
  var O = /* @__PURE__ */ ((n) => (n.AU = "au", n.US = "us", n.CA = "ca", n.UK = "uk", n.IE = "ie", n.NZ = "nz", n))(O || {}), j = /* @__PURE__ */ ((n) => (n.Mobile = "Mobile", n.Desktop = "Desktop", n))(j || {}), Z = /* @__PURE__ */ ((n) => (n.WELCOME10 = "WELCOME10", n.WELCOME15 = "WELCOME15", n))(Z || {});
  const U = [
    {
      id: 538,
      name: "The Mimi",
      description: "Leather Heart Key Ring",
      price: { uk: "£48.00", ca: "$94.00", us: "$63.00", au: "$101.00", ie: "€64.00", nz: "$112.00" },
      url: "/products/mimi-heart-shaped-leather-key-ring.html",
      colours: {
        "Chestnut Tan": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/i/mimi_chestnut_tan_01.jpg",
        "Dark Chocolate Brown": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/i/mimi_dark_brown_01.jpg",
        "Night Black": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/i/mimi_black_01.jpg",
        Wine: "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/i/mimi_wine_01.jpg",
        Red: "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/i/mimi_red_01.jpg",
        Petrol: "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/i/mimi_petrol_01.jpg"
      }
    },
    {
      id: 601,
      name: "The Ponte",
      description: "Leather Key Ring",
      url: "/products/ponte-leather-key-ring.html",
      price: { uk: "£51.00", ca: "$99.00", us: "$68.00", au: "$110.00", ie: "€68.00", nz: "$119.00" },
      colours: {
        "Chestnut Tan": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/k/e/keyring2_front_tan_3.jpg",
        "Dark Chocolate Brown": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/k/e/keyring2_front_choc_1.jpg",
        "Night Black": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/k/e/keyring2_front_black_2.jpg"
      }
    },
    {
      id: 292,
      name: "The Alberi",
      description: "Leather Card Holder",
      url: "/products/alberi-personalised-leather-credit-card-holder.html",
      price: { uk: "£55.00", ca: "$107.00", us: "$73.00", au: "$129.00", ie: "€73.00", nz: "$128.00" },
      colours: {
        "Chestnut Tan": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/a/l/alberi_tan_back.jpg",
        // 'Dark Chocolate Brown': '/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/a/l/alberi_choc_front.jpg',
        "Night Black": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/a/l/alberi_black_back.jpg"
      }
    },
    {
      id: 16,
      name: "The Marco",
      description: "Leather Card Holder",
      url: "/products/marco-leather-card-holder-personalised.html",
      price: { uk: "£68.00", ca: "$132.00", us: "$90.00", au: "$149.00", ie: "€90.00", nz: "$159.00" },
      colours: {
        "Chestnut Tan": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/a/marco_tan_back.jpg",
        "Dark Chocolate Brown": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/a/marco_choc_back_1.jpg",
        "Night Black": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/a/marco_black_back.jpg"
      }
    }
  ], nt = {
    "Chestnut Tan": 4,
    "Dark Chocolate Brown": 5,
    "Night Black": 3,
    Wine: 93,
    Red: 80,
    Petrol: 99
  }, it = {
    "Chestnut Tan": "https://www.maxwellscottbags.com/media/attribute/swatch/swatch_image/30x20/c/h/chestnut-tan_1.png",
    "Dark Chocolate Brown": "https://www.maxwellscottbags.com/media/attribute/swatch/swatch_image/30x20/d/a/dark-chocolate-brown_1.png",
    "Night Black": "https://www.maxwellscottbags.com/media/attribute/swatch/swatch_image/30x20/n/i/night-black_1.png",
    Wine: "https://www.maxwellscottbags.com/media/attribute/swatch/swatch_image/30x20/w/i/wine_1.png",
    Red: "https://www.maxwellscottbags.com/media/attribute/swatch/swatch_image/30x20/r/e/red.jpg",
    Petrol: "https://www.maxwellscottbags.com/media/attribute/swatch/swatch_image/30x20/p/e/petrol_1.png"
  }, Pe = {
    uk: "£",
    us: "$",
    ca: "$",
    au: "$",
    ie: "€",
    nz: "$"
  }, R = [O.UK, O.IE, O.NZ, O.US], st = `.popup-hidden {
  display: none !important;
}
.crs-hide-font {
  font-size: 0 !important;
}
.os-subsribe {
  background: rgb(161, 26, 23);
  width: 100%;
  min-height: 54px;
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 2px;
}

.os-subsribe:hover {
  background: rgb(161, 26, 23);
  color: #fff;
}

.os-submit {
  min-height: 54px !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  line-height: 22px !important;
  letter-spacing: 2px !important;
}

button.needsclick.go397051626:first-child {
  background: #a11a17 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
button.needsclick.go397051626:first-child:hover,
button.needsclick.go397051626:first-child:focus {
  background: #a11a17 !important;
}
button.needsclick.go397051626:first-child span {
  font-size: 12px;
  visibility: visible;
  text-transform: uppercase;
}
div[data-testid='form-component']:last-child {
  padding-bottom: 10px !important;
}

form:has([id^='first_name']),
form:has(.crs-promo-form),
form:has([id^='DateOfBirth']),
form:has([id^='Birthday']) {
  border: none !important;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  min-height: 537px;
}

@media (max-width: 769px) {
  form:has([id^='first_name']),
  form:has(.crs-promo-form),
  form:has([id^='DateOfBirth']),
  form:has([id^='Birthday']) {
    min-height: auto;
    padding-bottom: 32px !important;
  }
}

div:has(> [id^='first_name']) {
  display: none !important;
}

div.needsclick[style^='background-image'] {
  background-image: url('https://www.maxwellscottbags.com/media/wysiwyg/Static-Pages/about/loreto-min.jpg') !important;
  background-position: 85% !important;
  transform: scaleX(-1);
}

div.needsclick:has(> img.needsclick) {
  background-image: url('https://www.maxwellscottbags.com/media/wysiwyg/Static-Pages/about/loreto-min.jpg');
  background-size: 191%;
  background-position: 88% 77%;
  width: 350px !important;
  height: 160px !important;
}
div.needsclick:has(> img.needsclick) img {
  display: none;
}

@media (max-width: 768px) {
  div.needsclick:has(> #rich-text-111704229),
  div.needsclick:has(> #rich-text-107195066),
  div.needsclick:has(> #rich-text-107194031),
  div.needsclick:has(> #rich-text-111704235),
  div.needsclick:has(> #rich-text-107194037),
  div.needsclick:has(> #rich-text-107195077) {
    padding-top: 20px !important;
  }
}

.os-popup-title {
  color: #333 !important;
  font-family: 'adobe-garamond-pro', serif !important;
  font-size: 38px !important;
  font-weight: 400 !important;
  line-height: 46px !important;
  margin-bottom: -15px !important;
  padding-bottom: 0 !important;
}

.os-popup-title:has(.os-low-size) {
  font-size: 38px !important;
}

@media (max-width: 768px) {
  .os-popup-title {
    font-size: 32px !important;
    line-height: 38px !important;
  }
}

div:has(> .os-popup-title) {
  padding-bottom: 0 !important;
}

@media (max-width: 768px) {
  div:has(> .os-popup-title) {
    padding-top: 10px !important;
  }
}

.os-first-descr {
  color: #646464 !important;
  font-family: Arial !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  text-align: left;
}

.os-first-descr--enhance span {
  padding-top: 4px;
}

@media (max-width: 768px) {
  [data-testid='form-row']:has(.os-first-descr--enhance) {
    margin-bottom: 20px;
  }
}
.crs-promo-form__title,
.os-popup-title > p:first-child span {
  color: #333 !important;
  font-family: 'adobe-garamond-pro', serif !important;
  font-size: 32px !important;
  font-weight: 400;
  line-height: 40px;
  margin-top: -40px;
  margin-bottom: -15px;
}

.crs-promo-form__title {
  margin-top: 0 !important;
  margin-bottom: 10px !important;
}

@media (max-width: 768px) {
  .crs-promo-form__title {
    margin-top: 10px !important;
  }
}

.crs-promo-form__list {
  color: #646464;
  margin-bottom: 10px;
  padding-left: 25px;
  line-height: 22px;
}

form[data-testid^='klaviyo-form'] [id^='first_name'] {
  display: none;
}

form[data-testid^='klaviyo-form'] [id^='email'],
form[data-testid^='klaviyo-form'] [id^='DateOfBirth'],
form[data-testid^='klaviyo-form'] [id^='Birthday'] {
  margin-bottom: 0;
  border: solid 1px #ccc !important;
  min-height: 54px !important;
}
form[data-testid^='klaviyo-form'] [id^='email'] {
  margin-bottom: 14px !important;
}
form[data-testid^='klaviyo-form']:has([id^='DateOfBirth']) [data-testid='form-row'] > div,
form[data-testid^='klaviyo-form']:has([id^='Birthday']) [data-testid='form-row'] > div {
  padding-block: 0 !important;
}

form[data-testid^='klaviyo-form']:has([id^='DateOfBirth']) [data-testid='form-row'],
form[data-testid^='klaviyo-form']:has([id^='Birthday']) [data-testid='form-row'] {
  margin-bottom: 20px;
}

form[data-testid^='klaviyo-form']:has([id^='DateOfBirth']) [data-testid='form-row']:first-of-type,
form[data-testid^='klaviyo-form']:has([id^='Birthday']) [data-testid='form-row']:first-of-type {
  margin-bottom: 33px;
}

@media (min-width: 768px) {
  form[data-testid^='klaviyo-form']:has([id^='DateOfBirth']) [data-testid='form-row']:first-of-type,
  form[data-testid^='klaviyo-form']:has([id^='Birthday']) [data-testid='form-row']:first-of-type {
    margin-bottom: 33px;
  }
}

form[data-testid^='klaviyo-form']:has([id^='DateOfBirth']) [data-testid='form-row']:has(.os-submit),
form[data-testid^='klaviyo-form']:has([id^='Birthday']) [data-testid='form-row']:has(.os-submit) {
  margin-bottom: 0;
}

form[data-testid^='klaviyo-form']:has([id^='DateOfBirth']) [data-testid='form-row']:nth-of-type(2),
form[data-testid^='klaviyo-form']:has([id^='Birthday']) [data-testid='form-row']:nth-of-type(2) {
  padding-bottom: 10px;
}

div:has(form[data-testid^='klaviyo-form']) button.klaviyo-close-form {
  background: url('data:image/svg+xml,<svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23a)"><path d="m6 2 9 9m-9 0 9-9" stroke="%23fff" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/></g><defs><filter id="a" x=".837" y=".837" width="19.325" height="19.325" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1281_6731"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_1281_6731" result="shape"/></filter></defs></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

div:has(form[data-testid^='klaviyo-form']) button.klaviyo-close-form:hover {
  border: none;
}

div:has(form[data-testid^='klaviyo-form']) button.klaviyo-close-form svg {
  display: none;
}
label[id^='label-DateOfBirth'],
label[id^='label-Birthday'],
label[id^='kl_Content'] {
  font-size: 12px !important;
  margin-bottom: 6px !important;
  padding-bottom: 0 !important;
  line-height: 22px !important;
}

form[data-testid^='klaviyo-form'] div[role='group'] {
  label {
    line-height: 22px !important;
    padding-bottom: 10px !important;
    > div {
      line-height: 22px;
    }
    &:last-of-type {
      padding-bottom: 0 !important;
    }
  }
  input {
    margin: 0 !important;
  }
}
.crs-promo-form__close {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}
@media (max-width: 768px) {
  .crs-promo-form__close {
    padding-bottom: 0;
  }
}
.crs-promo-form__close-btn,
.crs-promo-form__close-btn:focus,
.crs-promo-form__close-btn:hover,
.crs-promo-form__enhance,
.crs-promo-form__enhance:focus,
.crs-promo-form__enhance:hover {
  background: none;
  border: none;
  padding: 0;
  height: 36px;
  margin-top: 10px;
  cursor: pointer;
  color: var(--MSB-UI-Dark-gray, #646464);
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.crs-promo-form__close-btn,
.crs-promo-form__close-btn:focus,
.crs-promo-form__close-btn:hover {
  margin-top: 0;
}
.crs-promo-form__img {
  transform: scaleX(-1) !important;
  background-position: 85% 50% !important;
}

.crs-promo-form {
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .crs-promo-form {
    flex-direction: column;
  }
}

.crs-promo-form__content {
  padding: 0 20px 0;
}
.crs-promo-form__descr {
  color: #646464;
  font-size: 16px;
  line-height: 22px;
}
.crs-promo-form__actions {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.crs-promo-form__continue,
.crs-promo-form__continue:focus,
.crs-promo-form__continue:hover {
  width: 100%;
  min-height: 54px;
  background: #a11a17;
  color: var(--Untitled-White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.crs-promo-form .crs-promocode {
  gap: 8px;
}

@media (min-width: 768px) {
  .crs-promo-form__list {
    margin-top: 20px;
    padding-left: 25px;
  }
  .os-popup-title,
  .crs-promo-form__title,
  .os-popup-title > p:first-child span {
    font-size: 40px !important;
    line-height: 46px;
    margin-top: 0;
  }

  [data-testid^='klaviyo-form'] {
    width: 890px !important;
  }
  [data-testid^='klaviyo-form'] > div {
    min-width: 50% !important;
  }
  .crs-promo-form__content {
    padding-bottom: 0 !important;
    padding: 50px 36px 20px;
    margin-bottom: 50px;
  }
  .crs-promo-form .crs-promocode {
    gap: 8px;
  }
  .crs-promo-form__content .crs-promocode__code {
    padding: 12px !important;
  }
}

form:has(.os-popup-title) [role='group'] {
  display: block !important;
}
`, ot = 'input[aria-label="First Name*"]', rt = 50, K = '.needsclick[role="dialog"]', B = 'div[role="dialog"] .klaviyo-close-form', J = ".crs-promo-form", at = ".crs-promo-form__enhance", lt = ".crs-promo-form__continue", de = 'form[data-testid^="klaviyo-form"]:has([id^="first_name"])', pe = (n) => ({
    closeBtn: (e) => {
      n();
    },
    closeByClickOutside: (e) => {
      e.target.closest('div[role="dialog"]') || n();
    }
  });
  class Ie {
    constructor({ country: e, device: t }) {
      this.inputInterval = null, this.country = e, this.device = t, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${st}</style>`), this.checkPopupVisibility(), this.setPopupChanges();
    }
    async setPopupChanges() {
      var l, a, c, d, u;
      const t = pe(() => {
        var g;
        const m = (g = document.querySelector(".os-popup-title")) == null ? void 0 : g.textContent;
        P("exp_pop_car_retent_2_but_firorduca_clos", `Close - ${m}`, "click", "Pop up Get 10% Off");
      }), i = new MutationObserver((m) => {
        m.forEach((g) => {
          const h = g.target, v = h.querySelector('[id^="DateOfBirth"]') || h.querySelector('[id^="Birthday"]'), x = v == null ? void 0 : v.closest("form > div");
          x && x.dataset.hidden !== "not-hidden" && this.handleEnhanceForm(x, i, t);
        });
      }), s = await W(de);
      if (s) {
        const m = s;
        this.renderNewCloseButton(t), this.changeTextOnFirstStep(), i.observe(m, {
          childList: !0,
          subtree: !0
        });
      }
      (l = document.querySelector(B)) == null || l.removeEventListener("click", t.closeBtn), (a = document.querySelector(B)) == null || a.addEventListener("click", t.closeBtn);
      const o = document.querySelector(K);
      o && ((c = o.parentElement) == null || c.removeEventListener("mousedown", t.closeByClickOutside), (d = o.parentElement) == null || d.addEventListener("mousedown", t.closeByClickOutside));
      const r = (u = document.querySelector(".os-popup-title")) == null ? void 0 : u.textContent;
      F(
        B,
        "exp_pop_car_retent_2_vis_firorduca_view",
        `Pop up view - ${r}`,
        "Pop up Get 10% Off"
      );
    }
    changeTextOnFirstStep() {
      const e = document.querySelector(de);
      if (!e)
        return;
      let t;
      e.querySelectorAll('div[id^="rich-text"]').forEach((r) => {
        var l, a;
        if ((l = r.textContent) != null && l.includes("10%") && (R.includes(this.country) ? this.device === "Mobile" ? t = /* HTML */
        "Get 10% off & free delivery!" : t = /* HTML */
        '<span class="os-low-size">Get 10% off plus free next-day delivery!</span>' : t = /* HTML */
        `Get 10% off <br class="os-desktop" />
            your first order!`, r.innerHTML = t, r.classList.add("os-popup-title"), location.pathname.includes("sign-up"))) {
          const c = r.closest('div[data-testid="form-row"]');
          c && c.insertAdjacentHTML(
            "afterend",
            /* HTML */
            `<div
              data-testid="form-row"
              class="needsclick  kl-private-reset-css-Xuajs1"
              style="display: flex; flex-direction: row; align-items: stretch; position: relative;"
            >
              <div
                component="[object Object]"
                data-testid="form-component"
                class="needsclick  kl-private-reset-css-Xuajs1"
                style="display: flex; justify-content: flex-start; padding: 10px 30px 20px; position: relative; flex: 1 0 0px;"
              >
                <div
                  class="kl-private-reset-css-Xuajs1 go3176171171 os-first-descr"
                  id="rich-text-114396462"
                  style="width: 100%;"
                >
                  Subscribe to our newsletter and save on your entire first order, no limits.
                </div>
              </div>
            </div>`
          );
        }
        (a = r.textContent) != null && a.includes("The Newsletter") && (r.textContent = "Subscribe to our newsletter and save on your entire first order, no limits.", r.classList.add("os-first-descr"));
      });
      const s = e == null ? void 0 : e.querySelector('[id^="email"]'), o = document.querySelectorAll("button.needsclick");
      s && (s.placeholder = "Email", s.addEventListener("change", () => {
        P("exp_pop_car_retent_2_inp_firorduca_email", `Email - ${t}`, "input", "Pop up Get 10% Off");
      })), o.forEach((r) => {
        var l;
        if (r.textContent === "SUBSCRIBE NOW") {
          r.style.display = "none";
          const a = document.createElement("button");
          a.classList.add("os-subsribe"), a.innerHTML = "Get 10% discount", (l = r.parentElement) == null || l.appendChild(a), a.addEventListener("click", () => {
            r.click(), P(
              "exp_pop_car_retent_2_but_firorduca_getdis",
              `Get discount - ${t}`,
              "click",
              "Pop up Get 10% Off"
            );
          });
        }
      });
    }
    handleEnhanceForm(e, t, i) {
      var d, u, m, g, h, v, x, p;
      t.disconnect(), e.style.display = "none";
      const s = this.getNewPopupWithPromoHtml();
      if (document.querySelector(J))
        return;
      e.closest("form").insertAdjacentHTML("afterbegin", s);
      const r = (d = document.querySelector(".crs-promo-form__title")) == null ? void 0 : d.textContent;
      F(
        J,
        "exp_pop_car_retent_2_vis_youlisuca_view",
        `Pop up view - ${r}`,
        "Pop up You are on the list"
      ), new Ee(".crs-promocode__container", Z.WELCOME10), (u = document.querySelector(".crs-promo-form .crs-promocode__copy-btn")) == null || u.addEventListener("click", () => {
        var w;
        const f = (w = document.querySelector(".crs-promo-form__title")) == null ? void 0 : w.textContent;
        P(
          "exp_pop_car_retent_2_but_youlisuca_code",
          `Promo code - ${f}`,
          "click",
          "Pop up You are on the list"
        );
      }), this.updateCloseBtnEvent(i), (m = document.querySelector(B)) == null || m.removeEventListener("click", i.closeBtn);
      const l = document.querySelector(K);
      (g = l == null ? void 0 : l.parentElement) == null || g.removeEventListener("mousedown", i.closeByClickOutside);
      const c = pe(() => {
        P("exp_pop_car_retent_2_but_youlisuca_clos", `Close - ${r}`, "click", "Pop up You are on the list");
      });
      if ((h = l == null ? void 0 : l.parentElement) == null || h.addEventListener("mousedown", c.closeByClickOutside), (v = document.querySelector(B)) == null || v.addEventListener("click", c.closeBtn), this.device === "Mobile") {
        const f = (x = e.querySelector('[data-testid="form-row"]:first-child')) == null ? void 0 : x.cloneNode(!0);
        (p = document.querySelector(J)) == null || p.prepend(f);
      }
      this.addContinueButtonListener(c), this.addEnhanceButtonListener(e, t, c);
    }
    getNewPopupWithPromoHtml() {
      return (
        /* HTML */
        `
      <div class="crs-promo-form">
        <div class="crs-promo-form__content">
          <h2 class="crs-promo-form__title">You are on the list</h2>
          ${this.getPromoFormContent()}
          <div class="crs-promocode__container"></div>
          <div class="crs-promo-form__actions">
            <button type="button" class="crs-promo-form__continue" data-popup="promocode">Continue shopping</button>
            <button type="button" class="crs-promo-form__enhance">Enhance your experience</button>
          </div>
        </div>
      </div>
    `
      );
    }
    async renderNewCloseButton(e) {
      var o, r;
      const t = (
        /* HTML */
        `
      <div class="crs-promo-form__close">
        <button type="button" class="crs-promo-form__close-btn">No, thanks</button>
      </div>
    `
      ), i = (r = (o = document.querySelector("button.needsclick.go397051626:first-child")) == null ? void 0 : o.parentElement) == null ? void 0 : r.parentElement;
      if (!i)
        return;
      i.insertAdjacentHTML("afterend", t), document.querySelector(".crs-promo-form__close").addEventListener("click", (l) => {
        var d, u, m;
        l.preventDefault();
        const a = document.querySelector(".klaviyo-close-form");
        (d = document.querySelector(B)) == null || d.removeEventListener("click", e.closeBtn);
        const c = (u = document.querySelector(".os-popup-title")) == null ? void 0 : u.textContent;
        P("exp_pop_car_retent_2_but_firorduca_no", `No, thanks - ${c}`, "click", "Pop up Get 10% Off"), a && (a.click(), (m = document.querySelector(B)) == null || m.addEventListener("click", e.closeBtn)), location.pathname.includes("sign-up") && (location.href = "/");
      });
    }
    getPromoFormContent() {
      return R.includes(this.country) ? (
        /* HTML */
        `<ul class="crs-promo-form__list">
          <li>
            Your 10% first order discount is ready (no minimum spend, no <br class="os-mobile" />
            exclusions).
          </li>
          <li>Plus, <b>FREE</b> next-day delivery.</li>
        </ul>`
      ) : (
        /* HTML */
        `<p class="crs-promo-form__descr">
          Your 10% first order discount is ready (no minimum spend, no exclusions).
        </p>`
      );
    }
    updateCloseBtnEvent(e) {
      var t, i;
      (t = document.querySelector(B)) == null || t.removeEventListener("click", e.closeBtn), (i = document.querySelector(B)) == null || i.addEventListener("click", e.closeBtn);
    }
    addContinueButtonListener(e) {
      var t;
      (t = document.querySelector(lt)) == null || t.addEventListener("click", () => {
        var o, r, l;
        (o = document.querySelector(B)) == null || o.removeEventListener("click", e.closeBtn);
        const i = document.querySelector(".klaviyo-close-form"), s = (r = document.querySelector(".crs-promo-form__title")) == null ? void 0 : r.textContent;
        P(
          "exp_pop_car_retent_2_but_youlisuca_cont",
          `Continue shopping - ${s}`,
          "click",
          "Pop up You are on the list"
        ), location.pathname.includes("sign-up") ? location.href = "/" : i.click(), (l = document.querySelector(B)) == null || l.addEventListener("click", e.closeBtn);
      });
    }
    addEnhanceButtonListener(e, t, i) {
      var s;
      (s = document.querySelector(at)) == null || s.addEventListener("click", () => {
        var r;
        const o = (r = document.querySelector(".crs-promo-form__title")) == null ? void 0 : r.textContent;
        P(
          "exp_pop_car_retent_2_but_youlisuca_exper",
          `Enhance your experience with us - ${o}`,
          "click",
          "Pop up You are on the list"
        ), this.handleEnhanceButtonClick(e, t, i);
      });
    }
    handleEnhanceButtonClick(e, t, i) {
      e.style.display = "block", e.dataset.hidden = "not-hidden";
      const s = document.querySelector(J);
      s.style.display = "none";
      const o = document.querySelector("form.klaviyo-form-version-cid_3") || document.querySelector("form.klaviyo-form-version-cid_2");
      o && t.observe(o, {
        childList: !0,
        subtree: !0
      }), this.updateComponentItems(i);
    }
    updateComponentItems(e) {
      document.querySelectorAll("div[component]").forEach((t) => {
        var s, o, r, l, a;
        const i = t;
        if ((s = i == null ? void 0 : i.innerText) != null && s.includes("SUBSCRIBE NOW") && ((o = i.querySelector("button")) == null || o.classList.add("crs-hide-font")), i.innerText.toLowerCase().includes("skip")) {
          const c = i.parentElement;
          c && (c.style.display = "none");
        }
        if (i.innerText.includes("SUBMIT")) {
          const c = document.querySelector(B), d = document.querySelector(K), u = i.closest("form");
          document.querySelectorAll("button.needsclick").forEach((b) => {
            var y;
            b.textContent === "SUBMIT" && (b.classList.add("os-submit"), location.pathname.includes("sign-up") && b.addEventListener("click", (E) => {
              u.classList.add("os-submitted"), location.href = "/";
            })), (y = b.textContent) != null && y.includes("SKIP AND REVEAL CODE") && (b.style.display = "none");
          }), c == null || c.removeEventListener("click", e.closeBtn), (r = d == null ? void 0 : d.parentElement) == null || r.removeEventListener("mousedown", e.closeByClickOutside);
          const g = '[id^="DateOfBirth"]', h = u == null ? void 0 : u.querySelectorAll('div[id^="rich-text"]');
          h == null || h.forEach((b) => {
            var y;
            (y = b.textContent) != null && y.includes("Enhance your") && (b.classList.add("os-popup-title", "os-popup-title--enhance"), b.closest('[data-testid="form-row"]'));
          });
          const v = d == null ? void 0 : d.querySelectorAll("span");
          v == null || v.forEach((b) => {
            var y;
            (y = b.textContent) != null && y.includes("We'd love to get to know you better.") && b.children.length === 0 && b.classList.add("os-first-descr", "os-first-descr--enhance");
          }), F(
            g,
            "exp_pop_car_retent_2_but_enhance_vis",
            "Pop up view - Enhance your experience with us",
            "Pop up Enhance your experience with us"
          );
          const x = () => {
            P(
              "exp_pop_car_retent_2_but_enhance_close",
              "Close - Enhance your experience with us",
              "click",
              "Pop up Enhance your experience with us"
            );
          }, p = document.querySelector(g);
          p && p.addEventListener("change", () => {
            P(
              "exp_pop_car_retent_2_but_enhance_inp",
              "Date - Enhance your experience with us",
              "input",
              "Pop up Enhance your experience with us"
            );
          });
          const f = document.querySelector(".os-submit");
          f == null || f.addEventListener("mousedown", () => {
            const b = document.querySelectorAll('.needsclick[role="group"] input:checked + label'), y = Array.from(b).map((E) => E.textContent).join(", ");
            P(
              "exp_pop_car_retent_2_but_enhance_submit",
              "Submit - Enhance your experience with us",
              // @ts-ignore
              `Button - ${y}`,
              "Pop up Enhance your experience with us"
            );
          });
          const w = pe(x);
          c == null || c.addEventListener("click", w.closeBtn), (l = d == null ? void 0 : d.parentElement) == null || l.addEventListener("mousedown", w.closeByClickOutside), (a = i.querySelector("button")) == null || a.addEventListener("click", () => {
            const b = document.querySelector(".klaviyo-close-form");
            b == null || b.removeEventListener("click", w.closeBtn), b && b.click();
          });
        }
      });
    }
    setInputValue() {
      const e = document.querySelector(ot);
      e && e.value !== "CRS" ? (e.value = "CRS", e.dispatchEvent(new Event("input"))) : this.inputInterval && (clearInterval(this.inputInterval), this.inputInterval = null);
    }
    async checkPopupVisibility() {
      const e = new IntersectionObserver(
        (i) => {
          i.forEach((s) => {
            var o;
            if (s.isIntersecting && (this.inputInterval = setInterval(() => this.setInputValue(), rt)), s.isIntersecting) {
              const r = document.querySelector(K);
              if (!r)
                return;
              const l = (d) => {
                var m;
                d.target.closest('div[role="dialog"]') || (sessionStorage.setItem(V, "true"), (m = r.parentElement) == null || m.removeEventListener("mousedown", l));
              };
              (o = r.parentElement) == null || o.addEventListener("mousedown", l);
              const a = document.querySelector(B), c = () => {
                sessionStorage.setItem(V, "true"), a == null || a.removeEventListener("click", c);
              };
              a == null || a.addEventListener("click", c);
            }
          });
        },
        {
          threshold: 0.5
        }
      ), t = await W(de);
      if (t) {
        const i = t;
        e.observe(i);
      }
    }
  }
  const ct = `.os-cart {
  background-color: #fff;
  border: none;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  max-width: 334px;
  padding: 0;
}

.os-cart::backdrop {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
}

.os-cart .os-wrap {
  padding: 43px 50px 40px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .os-cart .os-wrap {
    padding: 35px 23px;
  }
}

.os-cart .os-close {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.os-cart .os-close:focus,
.os-cart .os-close:hover,
.os-cart .os-close:active {
  outline: none;
  border: none;
  background: none;
}

.os-cart .os-title {
  color: #333;
  font-family: 'adobe-garamond-pro', serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  margin: 0;
}

@media (min-width: 768px) {
  .os-cart .os-title {
    font-size: 40px;
    font-weight: 400;
    line-height: 46px;
    padding-right: 90px;
  }
}

.os-cart .os-title span {
  color: rgb(161, 26, 23);
}

.os-cart .os-title span.desktop {
  color: #333;
}

@media (min-width: 768px) {
  .os-cart .os-title span.desktop {
    color: rgb(161, 26, 23);
  }
}

.os-cart .os-top-note {
  font-size: 12px;
  line-height: 22px;
  color: #333;
  margin-top: 2px;
  font-weight: 400;
}

.os-cart .os-content {
  margin-top: 14px;
}

@media (max-width: 768px) {
  .os-cart .os-content {
    margin-top: 8px;
  }
}

.os-cart .os-descr {
  position: relative;
  background: #f9efe1;
  width: fit-content;
  margin: 0 auto;
  padding: 8px 16px;
  text-align: center;
  color: var(--MSB-UI-Black, var(--H1-Font, #333));
  text-align: center;
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.7px;
}

.os-cart .os-descr::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: #f9efe1 transparent transparent transparent;
}

.os-cart .os-descr-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.os-cart .os-badges {
  display: flex;
  gap: 24px;
}

.os-cart .crs-promocode {
  gap: 6px;
}

.os-cart .crs-promocode .crs-promocode__code {
  padding-block: 14px;
}

.os-cart .ps-warranty,
.os-cart .os-return {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Untitled-Black, var(--H1-Font, #333));
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
}

.os-cart .os-note {
  margin-top: 11px;
  font-size: 12px;
  line-height: 22px;
  text-align: left;
  color: #646464;
  font-weight: 400;
}

.os-cart .os-action {
  margin-top: 11px;
}

.os-cart .os-checkout,
.os-cart .os-checkout {
  display: block;
  width: 100%;
  background: var(--MSB-UI-Red, #a11a17);
  padding-block: 16px;
  color: var(--Untitled-White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  .os-cart {
    max-width: 560px;
  }

  .os-cart .os-descr {
    width: 100% !important;
  }

  .os-cart .os-badges {
    justify-content: center;
    gap: 52px;
  }
}

.os-cart .os-promocode-container {
  margin-top: 16px;
}

.os-cart .os-producs {
  position: relative;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
}

.os-cart .os-producs .os-product {
  display: flex;
  gap: 12px;
  height: 90px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-right: 10px;
}

.os-cart .os-producs .os-product:has(.minicart-regular-price) {
  display: none;
}

.os-cart .os-producs .os-product .os-img {
  width: 71px;
  height: 71px;
  object-fit: contain;
}

.os-cart .os-producs .os-product .os-content {
  margin-top: 0;
  width: 100%;
}

.os-cart .os-producs .os-product .os-content .os-title,
.os-cart .os-producs .os-product .os-content .os-price,
.os-cart .os-producs .os-product .os-content .os-price .price,
.os-cart .os-producs .os-product .os-content .os-color {
  margin: 0;
  color: #646464;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.os-cart .os-producs .os-product .os-content .os-title {
  padding-right: 15px;
}

@media (max-width: 768px) {
  .os-cart .os-producs .os-product .os-content .os-title {
    max-width: 110px;
  }
}

.os-cart .os-producs .os-product .os-content .os-qty {
  color: #646464;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
}

.os-cart .os-producs .os-product .os-content .os-color {
  line-height: 16px;
  margin-top: 9px;
}

.os-cart .os-producs .os-product .os-content .os-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.os-cart .os-producs .os-product .os-content .os-header .os-title {
  color: var(--Untitled-Black, var(--H1-Font, #333));
  font-family: 'adobe-garamond-pro', serif;
  font-size: 18px;
  line-height: 21px;
}

@media (max-width: 768px) {
  .os-cart .os-producs .os-product .os-content .os-header .os-title {
    font-size: 16px;
    line-height: 21px;
  }
}

.os-cart .os-producs .os-product .os-content .os-header .os-title .os-qty {
  font-family: Arial;
  font-size: 16px;
  line-height: 23px;
  color: #333;
}

@media (max-width: 768px) {
  .os-cart .os-producs .os-product .os-content .os-header .os-title .os-qty {
    font-size: 14px;
  }
}

.os-cart .os-producs .os-product .os-content .os-header .os-title .os-qty {
  font-family: Arial;
  font-size: 16px;
  line-height: 23px;
  color: #333;
}

@media (max-width: 768px) {
  .os-cart .os-producs .os-product .os-content .os-header .os-title .os-qty {
    font-size: 14px;
  }
}

.os-cart .os-producs .os-product .os-content .os-price .price {
  color: var(--MSB-UI-Black, var(--H1-Font, #333)) !important;
  font-family: Arial, serif !important;
  font-size: 14px !important;
  line-height: 20px;
}
`;
  class dt {
    constructor({ country: e, device: t }) {
      this.country = e, this.device = t, this.init();
    }
    init() {
      this.render(), this.closePopupHandlers(), new Ee("#cart-popup .os-promocode-container", Z.WELCOME15);
    }
    render() {
      const e = (
        /* HTML */
        `<dialog id="cart-popup" class="os-dialog os-cart">
      <div class="os-wrap">
        <button class="os-close">${ce}</button>
        ${R.includes(this.country) ? (
          /* HTML */
          '<h2 class="os-title">Check out now and get <span>15% off & free delivery</span></h2>'
        ) : (
          /* HTML */
          '<h2 class="os-title">Check out now and get <span>15% off</span> <span class="desktop">your first order</span></h2>'
        )}
        ${R.includes(this.country) ? (
          /* HTML */
          '<div class="os-top-note">*15% discount applies to your first order only</div>'
        ) : ""}

        <div class="os-content"></div>
        <div class="os-promocode-container"></div>
        <div class="os-note">*The final price will be calculated at checkout</div>
        <div class="os-action">
          <button class="os-checkout">Complete my order now</button>
        </div>
      </div>
    </dialog>`
      );
      document.head.insertAdjacentHTML("beforeend", `<style>${ct}</style>`), document.body.insertAdjacentHTML("beforeend", e), this.popup = document.querySelector("#cart-popup");
    }
    show(e = !0) {
      var c, d, u;
      if (!this.popup || (e ? JSON.parse(sessionStorage.getItem(Ae)) : !1) || location.pathname.includes("checkout"))
        return;
      const i = (d = (c = JSON.parse(localStorage.getItem("mage-cache-storage"))) == null ? void 0 : c.cart) == null ? void 0 : d.items;
      if (!i)
        return;
      const s = this.popup.querySelector(".os-content"), o = (
        /* HTML */
        `<div class="os-producs">
      ${i.map((m) => (
          /* HTML */
          `
            <div class="os-product">
              <img class="os-img" src="${m.product_image.src}" alt="${m.product_image.alt}" />
              <div class="os-content">
                <div class="os-header">
                  <h3 class="os-title">${m.product_name} <span class="os-qty">(${m.qty})</span></h3>
                  <div class="os-price">${m.product_price}</div>
                </div>

                <p class="os-color">
                  Colour:
                  ${m.options.map((g) => {
            if (g.label === "Colour" || g.label === "Color")
              return g.value;
          })}
                </p>
              </div>
            </div>
          `
        )).join("")}
    </div>`
      );
      s.innerHTML = o, this.popup.showModal(), sessionStorage.setItem(Ae, JSON.stringify(!0));
      const r = (u = this.popup.querySelector(".os-title")) == null ? void 0 : u.textContent;
      F(
        "#cart-popup",
        "exp_pop_car_retent_2_vis_popchecuca_view",
        `Pop up view - ${r}`,
        "Pop up Check out now and get 15% off your first order"
      );
      const l = this.popup.querySelector(".os-checkout");
      l == null || l.addEventListener("click", () => {
        sessionStorage.setItem(Q, Z.WELCOME15), setTimeout(() => {
          location.href = "/checkout";
        }), P(
          "exp_pop_car_retent_2_but_popchecuca_comp",
          `Complete my order now - ${r}`,
          "click",
          "Pop up Check out now and get 15% off your first order"
        );
      });
      const a = this.popup.querySelector(".crs-promocode__copy-btn");
      a == null || a.addEventListener("click", () => {
        P("exp_pop_car_retent_2_but_with_prod_code", `Promo code - ${r}`, "click", "Pop up Check out now and get 15% off your first order");
      });
    }
    closePopupHandlers() {
      var i;
      const e = () => {
        var o, r;
        const s = (r = (o = this.popup) == null ? void 0 : o.querySelector(".os-title")) == null ? void 0 : r.textContent;
        P("exp_pop_car_retent_2_but_popchecuca_clos", `Close - ${s}`, "click", "Pop up Check out now and get 15% off your first order");
      };
      if (!this.popup)
        return;
      const t = this.popup.querySelector(".os-close");
      t == null || t.addEventListener("click", () => {
        var s;
        (s = this.popup) == null || s.close(), e();
      }), (i = this.popup) == null || i.addEventListener("click", (s) => {
        var o;
        s.target === this.popup && ((o = this.popup) == null || o.close(), e());
      });
    }
  }
  function Le(n) {
    return n !== null && typeof n == "object" && "constructor" in n && n.constructor === Object;
  }
  function ue(n, e) {
    n === void 0 && (n = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
      typeof n[t] > "u" ? n[t] = e[t] : Le(e[t]) && Le(n[t]) && Object.keys(e[t]).length > 0 && ue(n[t], e[t]);
    });
  }
  const Me = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function Y() {
    const n = typeof document < "u" ? document : {};
    return ue(n, Me), n;
  }
  const pt = {
    document: Me,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(n) {
      return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
    },
    cancelAnimationFrame(n) {
      typeof setTimeout > "u" || clearTimeout(n);
    }
  };
  function z() {
    const n = typeof window < "u" ? window : {};
    return ue(n, pt), n;
  }
  function ut(n) {
    return n === void 0 && (n = ""), n.trim().split(" ").filter((e) => !!e.trim());
  }
  function ft(n) {
    const e = n;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {
      }
      try {
        delete e[t];
      } catch {
      }
    });
  }
  function fe(n, e) {
    return e === void 0 && (e = 0), setTimeout(n, e);
  }
  function ee() {
    return Date.now();
  }
  function mt(n) {
    const e = z();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(n, null)), !t && n.currentStyle && (t = n.currentStyle), t || (t = n.style), t;
  }
  function gt(n, e) {
    e === void 0 && (e = "x");
    const t = z();
    let i, s, o;
    const r = mt(n);
    return t.WebKitCSSMatrix ? (s = r.transform || r.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((l) => l.replace(",", ".")).join(", ")), o = new t.WebKitCSSMatrix(s === "none" ? "" : s)) : (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = o.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? s = o.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? s = o.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])), s || 0;
  }
  function te(n) {
    return typeof n == "object" && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === "Object";
  }
  function ht(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? n instanceof HTMLElement : n && (n.nodeType === 1 || n.nodeType === 11);
  }
  function $() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !ht(i)) {
        const s = Object.keys(Object(i)).filter((o) => e.indexOf(o) < 0);
        for (let o = 0, r = s.length; o < r; o += 1) {
          const l = s[o], a = Object.getOwnPropertyDescriptor(i, l);
          a !== void 0 && a.enumerable && (te(n[l]) && te(i[l]) ? i[l].__swiper__ ? n[l] = i[l] : $(n[l], i[l]) : !te(n[l]) && te(i[l]) ? (n[l] = {}, i[l].__swiper__ ? n[l] = i[l] : $(n[l], i[l])) : n[l] = i[l]);
        }
      }
    }
    return n;
  }
  function ne(n, e, t) {
    n.style.setProperty(e, t);
  }
  function Oe(n) {
    let {
      swiper: e,
      targetPosition: t,
      side: i
    } = n;
    const s = z(), o = -e.translate;
    let r = null, l;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > o ? "next" : "prev", d = (m, g) => c === "next" && m >= g || c === "prev" && m <= g, u = () => {
      l = (/* @__PURE__ */ new Date()).getTime(), r === null && (r = l);
      const m = Math.max(Math.min((l - r) / a, 1), 0), g = 0.5 - Math.cos(m * Math.PI) / 2;
      let h = o + g * (t - o);
      if (d(h, t) && (h = t), e.wrapperEl.scrollTo({
        [i]: h
      }), d(h, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [i]: h
          });
        }), s.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = s.requestAnimationFrame(u);
    };
    u();
  }
  function H(n, e) {
    return e === void 0 && (e = ""), [...n.children].filter((t) => t.matches(e));
  }
  function ie(n) {
    try {
      console.warn(n);
      return;
    } catch {
    }
  }
  function se(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...Array.isArray(e) ? e : ut(e)), t;
  }
  function wt(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), n = i;
    }
    return t;
  }
  function vt(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), n = i;
    }
    return t;
  }
  function q(n, e) {
    return z().getComputedStyle(n, null).getPropertyValue(e);
  }
  function oe(n) {
    let e = n, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Be(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
    return t;
  }
  function me(n, e, t) {
    const i = z();
    return t ? n[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : n.offsetWidth;
  }
  function L(n) {
    return (Array.isArray(n) ? n : [n]).filter((e) => !!e);
  }
  let ge;
  function bt() {
    const n = z(), e = Y();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in n || n.DocumentTouch && e instanceof n.DocumentTouch)
    };
  }
  function ze() {
    return ge || (ge = bt()), ge;
  }
  let he;
  function xt(n) {
    let {
      userAgent: e
    } = n === void 0 ? {} : n;
    const t = ze(), i = z(), s = i.navigator.platform, o = e || i.navigator.userAgent, r = {
      ios: !1,
      android: !1
    }, l = i.screen.width, a = i.screen.height, c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = o.match(/(iPad).*OS\s([\d_]+)/);
    const u = o.match(/(iPod)(.*OS\s([\d_]+))?/), m = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = s === "Win32";
    let h = s === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && h && t.touch && v.indexOf(`${l}x${a}`) >= 0 && (d = o.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), h = !1), c && !g && (r.os = "android", r.android = !0), (d || m || u) && (r.os = "ios", r.ios = !0), r;
  }
  function $e(n) {
    return n === void 0 && (n = {}), he || (he = xt(n)), he;
  }
  let we;
  function yt() {
    const n = z(), e = $e();
    let t = !1;
    function i() {
      const l = n.navigator.userAgent.toLowerCase();
      return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
    }
    if (i()) {
      const l = String(n.navigator.userAgent);
      if (l.includes("Version/")) {
        const [a, c] = l.split("Version/")[1].split(" ")[0].split(".").map((d) => Number(d));
        t = a < 16 || a === 16 && c < 2;
      }
    }
    const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent), o = i(), r = o || s && e.ios;
    return {
      isSafari: t || o,
      needPerspectiveFix: t,
      need3dFix: r,
      isWebView: s
    };
  }
  function St() {
    return we || (we = yt()), we;
  }
  function _t(n) {
    let {
      swiper: e,
      on: t,
      emit: i
    } = n;
    const s = z();
    let o = null, r = null;
    const l = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    }, a = () => {
      !e || e.destroyed || !e.initialized || (o = new ResizeObserver((u) => {
        r = s.requestAnimationFrame(() => {
          const {
            width: m,
            height: g
          } = e;
          let h = m, v = g;
          u.forEach((x) => {
            let {
              contentBoxSize: p,
              contentRect: f,
              target: w
            } = x;
            w && w !== e.el || (h = f ? f.width : (p[0] || p).inlineSize, v = f ? f.height : (p[0] || p).blockSize);
          }), (h !== m || v !== g) && l();
        });
      }), o.observe(e.el));
    }, c = () => {
      r && s.cancelAnimationFrame(r), o && o.unobserve && e.el && (o.unobserve(e.el), o = null);
    }, d = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
        a();
        return;
      }
      s.addEventListener("resize", l), s.addEventListener("orientationchange", d);
    }), t("destroy", () => {
      c(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d);
    });
  }
  function At(n) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: s
    } = n;
    const o = [], r = z(), l = function(d, u) {
      u === void 0 && (u = {});
      const m = r.MutationObserver || r.WebkitMutationObserver, g = new m((h) => {
        if (e.__preventObserver__)
          return;
        if (h.length === 1) {
          s("observerUpdate", h[0]);
          return;
        }
        const v = function() {
          s("observerUpdate", h[0]);
        };
        r.requestAnimationFrame ? r.requestAnimationFrame(v) : r.setTimeout(v, 0);
      });
      g.observe(d, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData
      }), o.push(g);
    }, a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = Be(e.hostEl);
          for (let u = 0; u < d.length; u += 1)
            l(d[u]);
        }
        l(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), l(e.wrapperEl, {
          attributes: !1
        });
      }
    }, c = () => {
      o.forEach((d) => {
        d.disconnect();
      }), o.splice(0, o.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), i("init", a), i("destroy", c);
  }
  var kt = {
    on(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function")
        return i;
      const s = t ? "unshift" : "push";
      return n.split(" ").forEach((o) => {
        i.eventsListeners[o] || (i.eventsListeners[o] = []), i.eventsListeners[o][s](e);
      }), i;
    },
    once(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function")
        return i;
      function s() {
        i.off(n, s), s.__emitterProxy && delete s.__emitterProxy;
        for (var o = arguments.length, r = new Array(o), l = 0; l < o; l++)
          r[l] = arguments[l];
        e.apply(i, r);
      }
      return s.__emitterProxy = e, i.on(n, s, t);
    },
    onAny(n, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof n != "function")
        return t;
      const i = e ? "unshift" : "push";
      return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t;
    },
    offAny(n) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
        return e;
      const t = e.eventsAnyListeners.indexOf(n);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(n, e) {
      const t = this;
      return !t.eventsListeners || t.destroyed || !t.eventsListeners || n.split(" ").forEach((i) => {
        typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((s, o) => {
          (s === e || s.__emitterProxy && s.__emitterProxy === e) && t.eventsListeners[i].splice(o, 1);
        });
      }), t;
    },
    emit() {
      const n = this;
      if (!n.eventsListeners || n.destroyed || !n.eventsListeners)
        return n;
      let e, t, i;
      for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++)
        o[r] = arguments[r];
      return typeof o[0] == "string" || Array.isArray(o[0]) ? (e = o[0], t = o.slice(1, o.length), i = n) : (e = o[0].events, t = o[0].data, i = o[0].context || n), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
        n.eventsAnyListeners && n.eventsAnyListeners.length && n.eventsAnyListeners.forEach((c) => {
          c.apply(i, [a, ...t]);
        }), n.eventsListeners && n.eventsListeners[a] && n.eventsListeners[a].forEach((c) => {
          c.apply(i, t);
        });
      }), n;
    }
  };
  function Tt() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null ? e = n.params.width : e = i.clientWidth, typeof n.params.height < "u" && n.params.height !== null ? t = n.params.height : t = i.clientHeight, !(e === 0 && n.isHorizontal() || t === 0 && n.isVertical()) && (e = e - parseInt(q(i, "padding-left") || 0, 10) - parseInt(q(i, "padding-right") || 0, 10), t = t - parseInt(q(i, "padding-top") || 0, 10) - parseInt(q(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(n, {
      width: e,
      height: t,
      size: n.isHorizontal() ? e : t
    }));
  }
  function Ct() {
    const n = this;
    function e(S, k) {
      return parseFloat(S.getPropertyValue(n.getDirectionLabel(k)) || 0);
    }
    const t = n.params, {
      wrapperEl: i,
      slidesEl: s,
      size: o,
      rtlTranslate: r,
      wrongRTL: l
    } = n, a = n.virtual && t.virtual.enabled, c = a ? n.virtual.slides.length : n.slides.length, d = H(s, `.${n.params.slideClass}, swiper-slide`), u = a ? n.virtual.slides.length : d.length;
    let m = [];
    const g = [], h = [];
    let v = t.slidesOffsetBefore;
    typeof v == "function" && (v = t.slidesOffsetBefore.call(n));
    let x = t.slidesOffsetAfter;
    typeof x == "function" && (x = t.slidesOffsetAfter.call(n));
    const p = n.snapGrid.length, f = n.slidesGrid.length;
    let w = t.spaceBetween, b = -v, y = 0, E = 0;
    if (typeof o > "u")
      return;
    typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * o : typeof w == "string" && (w = parseFloat(w)), n.virtualSize = -w, d.forEach((S) => {
      r ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (ne(i, "--swiper-centered-offset-before", ""), ne(i, "--swiper-centered-offset-after", ""));
    const G = t.grid && t.grid.rows > 1 && n.grid;
    G ? n.grid.initSlides(d) : n.grid && n.grid.unsetSlides();
    let T;
    const M = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((S) => typeof t.breakpoints[S].slidesPerView < "u").length > 0;
    for (let S = 0; S < u; S += 1) {
      T = 0;
      let k;
      if (d[S] && (k = d[S]), G && n.grid.updateSlide(S, k, d), !(d[S] && q(k, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          M && (d[S].style[n.getDirectionLabel("width")] = "");
          const A = getComputedStyle(k), _ = k.style.transform, C = k.style.webkitTransform;
          if (_ && (k.style.transform = "none"), C && (k.style.webkitTransform = "none"), t.roundLengths)
            T = n.isHorizontal() ? me(k, "width", !0) : me(k, "height", !0);
          else {
            const I = e(A, "width"), N = e(A, "padding-left"), Xn = e(A, "padding-right"), Re = e(A, "margin-left"), Ye = e(A, "margin-right"), We = A.getPropertyValue("box-sizing");
            if (We && We === "border-box")
              T = I + Re + Ye;
            else {
              const {
                clientWidth: Qn,
                offsetWidth: Zn
              } = k;
              T = I + N + Xn + Re + Ye + (Zn - Qn);
            }
          }
          _ && (k.style.transform = _), C && (k.style.webkitTransform = C), t.roundLengths && (T = Math.floor(T));
        } else
          T = (o - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), d[S] && (d[S].style[n.getDirectionLabel("width")] = `${T}px`);
        d[S] && (d[S].swiperSlideSize = T), h.push(T), t.centeredSlides ? (b = b + T / 2 + y / 2 + w, y === 0 && S !== 0 && (b = b - o / 2 - w), S === 0 && (b = b - o / 2 - w), Math.abs(b) < 1 / 1e3 && (b = 0), t.roundLengths && (b = Math.floor(b)), E % t.slidesPerGroup === 0 && m.push(b), g.push(b)) : (t.roundLengths && (b = Math.floor(b)), (E - Math.min(n.params.slidesPerGroupSkip, E)) % n.params.slidesPerGroup === 0 && m.push(b), g.push(b), b = b + T + w), n.virtualSize += T + w, y = T, E += 1;
      }
    }
    if (n.virtualSize = Math.max(n.virtualSize, o) + x, r && l && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${n.virtualSize + w}px`), t.setWrapperSize && (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + w}px`), G && n.grid.updateWrapperSize(T, m), !t.centeredSlides) {
      const S = [];
      for (let k = 0; k < m.length; k += 1) {
        let A = m[k];
        t.roundLengths && (A = Math.floor(A)), m[k] <= n.virtualSize - o && S.push(A);
      }
      m = S, Math.floor(n.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(n.virtualSize - o);
    }
    if (a && t.loop) {
      const S = h[0] + w;
      if (t.slidesPerGroup > 1) {
        const k = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup), A = S * t.slidesPerGroup;
        for (let _ = 0; _ < k; _ += 1)
          m.push(m[m.length - 1] + A);
      }
      for (let k = 0; k < n.virtual.slidesBefore + n.virtual.slidesAfter; k += 1)
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + S), g.push(g[g.length - 1] + S), n.virtualSize += S;
    }
    if (m.length === 0 && (m = [0]), w !== 0) {
      const S = n.isHorizontal() && r ? "marginLeft" : n.getDirectionLabel("marginRight");
      d.filter((k, A) => !t.cssMode || t.loop ? !0 : A !== d.length - 1).forEach((k) => {
        k.style[S] = `${w}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let S = 0;
      h.forEach((A) => {
        S += A + (w || 0);
      }), S -= w;
      const k = S - o;
      m = m.map((A) => A <= 0 ? -v : A > k ? k + x : A);
    }
    if (t.centerInsufficientSlides) {
      let S = 0;
      h.forEach((A) => {
        S += A + (w || 0);
      }), S -= w;
      const k = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (S + k < o) {
        const A = (o - S - k) / 2;
        m.forEach((_, C) => {
          m[C] = _ - A;
        }), g.forEach((_, C) => {
          g[C] = _ + A;
        });
      }
    }
    if (Object.assign(n, {
      slides: d,
      snapGrid: m,
      slidesGrid: g,
      slidesSizesGrid: h
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      ne(i, "--swiper-centered-offset-before", `${-m[0]}px`), ne(i, "--swiper-centered-offset-after", `${n.size / 2 - h[h.length - 1] / 2}px`);
      const S = -n.snapGrid[0], k = -n.slidesGrid[0];
      n.snapGrid = n.snapGrid.map((A) => A + S), n.slidesGrid = n.slidesGrid.map((A) => A + k);
    }
    if (u !== c && n.emit("slidesLengthChange"), m.length !== p && (n.params.watchOverflow && n.checkOverflow(), n.emit("snapGridLengthChange")), g.length !== f && n.emit("slidesGridLengthChange"), t.watchSlidesProgress && n.updateSlidesOffset(), n.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const S = `${t.containerModifierClass}backface-hidden`, k = n.el.classList.contains(S);
      u <= t.maxBackfaceHiddenSlides ? k || n.el.classList.add(S) : k && n.el.classList.remove(S);
    }
  }
  function Et(n) {
    const e = this, t = [], i = e.virtual && e.params.virtual.enabled;
    let s = 0, o;
    typeof n == "number" ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed);
    const r = (l) => i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((l) => {
          t.push(l);
        });
      else
        for (o = 0; o < Math.ceil(e.params.slidesPerView); o += 1) {
          const l = e.activeIndex + o;
          if (l > e.slides.length && !i)
            break;
          t.push(r(l));
        }
    else
      t.push(r(e.activeIndex));
    for (o = 0; o < t.length; o += 1)
      if (typeof t[o] < "u") {
        const l = t[o].offsetHeight;
        s = l > s ? l : s;
      }
    (s || s === 0) && (e.wrapperEl.style.height = `${s}px`);
  }
  function Pt() {
    const n = this, e = n.slides, t = n.isElement ? n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset = (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - n.cssOverflowAdjustment();
  }
  const De = (n, e, t) => {
    e && !n.classList.contains(t) ? n.classList.add(t) : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function It(n) {
    n === void 0 && (n = this && this.translate || 0);
    const e = this, t = e.params, {
      slides: i,
      rtlTranslate: s,
      snapGrid: o
    } = e;
    if (i.length === 0)
      return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let r = -n;
    s && (r = n), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < i.length; a += 1) {
      const c = i[a];
      let d = c.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
      const u = (r + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + l), m = (r - o[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + l), g = -(r - d), h = g + e.slidesSizesGrid[a], v = g >= 0 && g <= e.size - e.slidesSizesGrid[a], x = g >= 0 && g < e.size - 1 || h > 1 && h <= e.size || g <= 0 && h >= e.size;
      x && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(a)), De(c, x, t.slideVisibleClass), De(c, v, t.slideFullyVisibleClass), c.progress = s ? -u : u, c.originalProgress = s ? -m : m;
    }
  }
  function Lt(n) {
    const e = this;
    if (typeof n > "u") {
      const d = e.rtlTranslate ? -1 : 1;
      n = e && e.translate && e.translate * d || 0;
    }
    const t = e.params, i = e.maxTranslate() - e.minTranslate();
    let {
      progress: s,
      isBeginning: o,
      isEnd: r,
      progressLoop: l
    } = e;
    const a = o, c = r;
    if (i === 0)
      s = 0, o = !0, r = !0;
    else {
      s = (n - e.minTranslate()) / i;
      const d = Math.abs(n - e.minTranslate()) < 1, u = Math.abs(n - e.maxTranslate()) < 1;
      o = d || s <= 0, r = u || s >= 1, d && (s = 0), u && (s = 1);
    }
    if (t.loop) {
      const d = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), m = e.slidesGrid[d], g = e.slidesGrid[u], h = e.slidesGrid[e.slidesGrid.length - 1], v = Math.abs(n);
      v >= m ? l = (v - m) / h : l = (v + h - g) / h, l > 1 && (l -= 1);
    }
    Object.assign(e, {
      progress: s,
      progressLoop: l,
      isBeginning: o,
      isEnd: r
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(n), o && !a && e.emit("reachBeginning toEdge"), r && !c && e.emit("reachEnd toEdge"), (a && !o || c && !r) && e.emit("fromEdge"), e.emit("progress", s);
  }
  const ve = (n, e, t) => {
    e && !n.classList.contains(t) ? n.classList.add(t) : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function Mt() {
    const n = this, {
      slides: e,
      params: t,
      slidesEl: i,
      activeIndex: s
    } = n, o = n.virtual && t.virtual.enabled, r = n.grid && t.grid && t.grid.rows > 1, l = (u) => H(i, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    let a, c, d;
    if (o)
      if (t.loop) {
        let u = s - n.virtual.slidesBefore;
        u < 0 && (u = n.virtual.slides.length + u), u >= n.virtual.slides.length && (u -= n.virtual.slides.length), a = l(`[data-swiper-slide-index="${u}"]`);
      } else
        a = l(`[data-swiper-slide-index="${s}"]`);
    else
      r ? (a = e.filter((u) => u.column === s)[0], d = e.filter((u) => u.column === s + 1)[0], c = e.filter((u) => u.column === s - 1)[0]) : a = e[s];
    a && (r || (d = vt(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), c = wt(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]))), e.forEach((u) => {
      ve(u, u === a, t.slideActiveClass), ve(u, u === d, t.slideNextClass), ve(u, u === c, t.slidePrevClass);
    }), n.emitSlidesClasses();
  }
  const re = (n, e) => {
    if (!n || n.destroyed || !n.params)
      return;
    const t = () => n.isElement ? "swiper-slide" : `.${n.params.slideClass}`, i = e.closest(t());
    if (i) {
      let s = i.querySelector(`.${n.params.lazyPreloaderClass}`);
      !s && n.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        i.shadowRoot && (s = i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`), s && s.remove());
      })), s && s.remove();
    }
  }, be = (n, e) => {
    if (!n.slides[e])
      return;
    const t = n.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, xe = (n) => {
    if (!n || n.destroyed || !n.params)
      return;
    let e = n.params.lazyPreloadPrevNext;
    const t = n.slides.length;
    if (!t || !e || e < 0)
      return;
    e = Math.min(e, t);
    const i = n.params.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView), s = n.activeIndex;
    if (n.params.grid && n.params.grid.rows > 1) {
      const r = s, l = [r - e];
      l.push(...Array.from({
        length: e
      }).map((a, c) => r + i + c)), n.slides.forEach((a, c) => {
        l.includes(a.column) && be(n, c);
      });
      return;
    }
    const o = s + i - 1;
    if (n.params.rewind || n.params.loop)
      for (let r = s - e; r <= o + e; r += 1) {
        const l = (r % t + t) % t;
        (l < s || l > o) && be(n, l);
      }
    else
      for (let r = Math.max(s - e, 0); r <= Math.min(o + e, t - 1); r += 1)
        r !== s && (r > o || r < s) && be(n, r);
  };
  function Ot(n) {
    const {
      slidesGrid: e,
      params: t
    } = n, i = n.rtlTranslate ? n.translate : -n.translate;
    let s;
    for (let o = 0; o < e.length; o += 1)
      typeof e[o + 1] < "u" ? i >= e[o] && i < e[o + 1] - (e[o + 1] - e[o]) / 2 ? s = o : i >= e[o] && i < e[o + 1] && (s = o + 1) : i >= e[o] && (s = o);
    return t.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
  }
  function Bt(n) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: i,
      params: s,
      activeIndex: o,
      realIndex: r,
      snapIndex: l
    } = e;
    let a = n, c;
    const d = (g) => {
      let h = g - e.virtual.slidesBefore;
      return h < 0 && (h = e.virtual.slides.length + h), h >= e.virtual.slides.length && (h -= e.virtual.slides.length), h;
    };
    if (typeof a > "u" && (a = Ot(e)), i.indexOf(t) >= 0)
      c = i.indexOf(t);
    else {
      const g = Math.min(s.slidesPerGroupSkip, a);
      c = g + Math.floor((a - g) / s.slidesPerGroup);
    }
    if (c >= i.length && (c = i.length - 1), a === o && !e.params.loop) {
      c !== l && (e.snapIndex = c, e.emit("snapIndexChange"));
      return;
    }
    if (a === o && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = d(a);
      return;
    }
    const u = e.grid && s.grid && s.grid.rows > 1;
    let m;
    if (e.virtual && s.virtual.enabled && s.loop)
      m = d(a);
    else if (u) {
      const g = e.slides.filter((v) => v.column === a)[0];
      let h = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(h) && (h = Math.max(e.slides.indexOf(g), 0)), m = Math.floor(h / s.grid.rows);
    } else if (e.slides[a]) {
      const g = e.slides[a].getAttribute("data-swiper-slide-index");
      g ? m = parseInt(g, 10) : m = a;
    } else
      m = a;
    Object.assign(e, {
      previousSnapIndex: l,
      snapIndex: c,
      previousRealIndex: r,
      realIndex: m,
      previousIndex: o,
      activeIndex: a
    }), e.initialized && xe(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (r !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function zt(n, e) {
    const t = this, i = t.params;
    let s = n.closest(`.${i.slideClass}, swiper-slide`);
    !s && t.isElement && e && e.length > 1 && e.includes(n) && [...e.slice(e.indexOf(n) + 1, e.length)].forEach((l) => {
      !s && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (s = l);
    });
    let o = !1, r;
    if (s) {
      for (let l = 0; l < t.slides.length; l += 1)
        if (t.slides[l] === s) {
          o = !0, r = l;
          break;
        }
    }
    if (s && o)
      t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = r;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var $t = {
    updateSize: Tt,
    updateSlides: Ct,
    updateAutoHeight: Et,
    updateSlidesOffset: Pt,
    updateSlidesProgress: It,
    updateProgress: Lt,
    updateSlidesClasses: Mt,
    updateActiveIndex: Bt,
    updateClickedSlide: zt
  };
  function Dt(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this, {
      params: t,
      rtlTranslate: i,
      translate: s,
      wrapperEl: o
    } = e;
    if (t.virtualTranslate)
      return i ? -s : s;
    if (t.cssMode)
      return s;
    let r = gt(o, n);
    return r += e.cssOverflowAdjustment(), i && (r = -r), r || 0;
  }
  function Gt(n, e) {
    const t = this, {
      rtlTranslate: i,
      params: s,
      wrapperEl: o,
      progress: r
    } = t;
    let l = 0, a = 0;
    const c = 0;
    t.isHorizontal() ? l = i ? -n : n : a = n, s.roundLengths && (l = Math.floor(l), a = Math.floor(a)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : a, s.cssMode ? o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : s.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(), o.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`);
    let d;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? d = 0 : d = (n - t.minTranslate()) / u, d !== r && t.updateProgress(n), t.emit("setTranslate", t.translate, e);
  }
  function Ht() {
    return -this.snapGrid[0];
  }
  function qt() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Nt(n, e, t, i, s) {
    n === void 0 && (n = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = !0);
    const o = this, {
      params: r,
      wrapperEl: l
    } = o;
    if (o.animating && r.preventInteractionOnTransition)
      return !1;
    const a = o.minTranslate(), c = o.maxTranslate();
    let d;
    if (i && n > a ? d = a : i && n < c ? d = c : d = n, o.updateProgress(d), r.cssMode) {
      const u = o.isHorizontal();
      if (e === 0)
        l[u ? "scrollLeft" : "scrollTop"] = -d;
      else {
        if (!o.support.smoothScroll)
          return Oe({
            swiper: o,
            targetPosition: -d,
            side: u ? "left" : "top"
          }), !0;
        l.scrollTo({
          [u ? "left" : "top"]: -d,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return e === 0 ? (o.setTransition(0), o.setTranslate(d), t && (o.emit("beforeTransitionStart", e, s), o.emit("transitionEnd"))) : (o.setTransition(e), o.setTranslate(d), t && (o.emit("beforeTransitionStart", e, s), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(m) {
      !o || o.destroyed || m.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, o.animating = !1, t && o.emit("transitionEnd"));
    }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0;
  }
  var Ft = {
    getTranslate: Dt,
    setTranslate: Gt,
    minTranslate: Ht,
    maxTranslate: qt,
    translateTo: Nt
  };
  function Vt(n, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${n}ms`, t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : ""), t.emit("setTransition", n, e);
  }
  function Ge(n) {
    let {
      swiper: e,
      runCallbacks: t,
      direction: i,
      step: s
    } = n;
    const {
      activeIndex: o,
      previousIndex: r
    } = e;
    let l = i;
    if (l || (o > r ? l = "next" : o < r ? l = "prev" : l = "reset"), e.emit(`transition${s}`), t && o !== r) {
      if (l === "reset") {
        e.emit(`slideResetTransition${s}`);
        return;
      }
      e.emit(`slideChangeTransition${s}`), l === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`);
    }
  }
  function jt(n, e) {
    n === void 0 && (n = !0);
    const t = this, {
      params: i
    } = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(), Ge({
      swiper: t,
      runCallbacks: n,
      direction: e,
      step: "Start"
    }));
  }
  function Rt(n, e) {
    n === void 0 && (n = !0);
    const t = this, {
      params: i
    } = t;
    t.animating = !1, !i.cssMode && (t.setTransition(0), Ge({
      swiper: t,
      runCallbacks: n,
      direction: e,
      step: "End"
    }));
  }
  var Yt = {
    setTransition: Vt,
    transitionStart: jt,
    transitionEnd: Rt
  };
  function Wt(n, e, t, i, s) {
    n === void 0 && (n = 0), t === void 0 && (t = !0), typeof n == "string" && (n = parseInt(n, 10));
    const o = this;
    let r = n;
    r < 0 && (r = 0);
    const {
      params: l,
      snapGrid: a,
      slidesGrid: c,
      previousIndex: d,
      activeIndex: u,
      rtlTranslate: m,
      wrapperEl: g,
      enabled: h
    } = o;
    if (!h && !i && !s || o.destroyed || o.animating && l.preventInteractionOnTransition)
      return !1;
    typeof e > "u" && (e = o.params.speed);
    const v = Math.min(o.params.slidesPerGroupSkip, r);
    let x = v + Math.floor((r - v) / o.params.slidesPerGroup);
    x >= a.length && (x = a.length - 1);
    const p = -a[x];
    if (l.normalizeSlideIndex)
      for (let w = 0; w < c.length; w += 1) {
        const b = -Math.floor(p * 100), y = Math.floor(c[w] * 100), E = Math.floor(c[w + 1] * 100);
        typeof c[w + 1] < "u" ? b >= y && b < E - (E - y) / 2 ? r = w : b >= y && b < E && (r = w + 1) : b >= y && (r = w);
      }
    if (o.initialized && r !== u && (!o.allowSlideNext && (m ? p > o.translate && p > o.minTranslate() : p < o.translate && p < o.minTranslate()) || !o.allowSlidePrev && p > o.translate && p > o.maxTranslate() && (u || 0) !== r))
      return !1;
    r !== (d || 0) && t && o.emit("beforeSlideChangeStart"), o.updateProgress(p);
    let f;
    if (r > u ? f = "next" : r < u ? f = "prev" : f = "reset", m && -p === o.translate || !m && p === o.translate)
      return o.updateActiveIndex(r), l.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), l.effect !== "slide" && o.setTranslate(p), f !== "reset" && (o.transitionStart(t, f), o.transitionEnd(t, f)), !1;
    if (l.cssMode) {
      const w = o.isHorizontal(), b = m ? p : -p;
      if (e === 0) {
        const y = o.virtual && o.params.virtual.enabled;
        y && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), y && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          g[w ? "scrollLeft" : "scrollTop"] = b;
        })) : g[w ? "scrollLeft" : "scrollTop"] = b, y && requestAnimationFrame(() => {
          o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1;
        });
      } else {
        if (!o.support.smoothScroll)
          return Oe({
            swiper: o,
            targetPosition: b,
            side: w ? "left" : "top"
          }), !0;
        g.scrollTo({
          [w ? "left" : "top"]: b,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return o.setTransition(e), o.setTranslate(p), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit("beforeTransitionStart", e, i), o.transitionStart(t, f), e === 0 ? o.transitionEnd(t, f) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(b) {
      !o || o.destroyed || b.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(t, f));
    }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0;
  }
  function Ut(n, e, t, i) {
    n === void 0 && (n = 0), t === void 0 && (t = !0), typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    if (s.destroyed)
      return;
    typeof e > "u" && (e = s.params.speed);
    const o = s.grid && s.params.grid && s.params.grid.rows > 1;
    let r = n;
    if (s.params.loop)
      if (s.virtual && s.params.virtual.enabled)
        r = r + s.virtual.slidesBefore;
      else {
        let l;
        if (o) {
          const m = r * s.params.grid.rows;
          l = s.slides.filter((g) => g.getAttribute("data-swiper-slide-index") * 1 === m)[0].column;
        } else
          l = s.getSlideIndexByData(r);
        const a = o ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length, {
          centeredSlides: c
        } = s.params;
        let d = s.params.slidesPerView;
        d === "auto" ? d = s.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(s.params.slidesPerView, 10)), c && d % 2 === 0 && (d = d + 1));
        let u = a - l < d;
        if (c && (u = u || l < Math.ceil(d / 2)), i && c && s.params.slidesPerView !== "auto" && !o && (u = !1), u) {
          const m = c ? l < s.activeIndex ? "prev" : "next" : l - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
          s.loopFix({
            direction: m,
            slideTo: !0,
            activeSlideIndex: m === "next" ? l + 1 : l - a + 1,
            slideRealIndex: m === "next" ? s.realIndex : void 0
          });
        }
        if (o) {
          const m = r * s.params.grid.rows;
          r = s.slides.filter((g) => g.getAttribute("data-swiper-slide-index") * 1 === m)[0].column;
        } else
          r = s.getSlideIndexByData(r);
      }
    return requestAnimationFrame(() => {
      s.slideTo(r, e, t, i);
    }), s;
  }
  function Xt(n, e, t) {
    e === void 0 && (e = !0);
    const i = this, {
      enabled: s,
      params: o,
      animating: r
    } = i;
    if (!s || i.destroyed)
      return i;
    typeof n > "u" && (n = i.params.speed);
    let l = o.slidesPerGroup;
    o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const a = i.activeIndex < o.slidesPerGroupSkip ? 1 : l, c = i.virtual && o.virtual.enabled;
    if (o.loop) {
      if (r && !c && o.loopPreventsSliding)
        return !1;
      if (i.loopFix({
        direction: "next"
      }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && o.cssMode)
        return requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + a, n, e, t);
        }), !0;
    }
    return o.rewind && i.isEnd ? i.slideTo(0, n, e, t) : i.slideTo(i.activeIndex + a, n, e, t);
  }
  function Qt(n, e, t) {
    e === void 0 && (e = !0);
    const i = this, {
      params: s,
      snapGrid: o,
      slidesGrid: r,
      rtlTranslate: l,
      enabled: a,
      animating: c
    } = i;
    if (!a || i.destroyed)
      return i;
    typeof n > "u" && (n = i.params.speed);
    const d = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (c && !d && s.loopPreventsSliding)
        return !1;
      i.loopFix({
        direction: "prev"
      }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    const u = l ? i.translate : -i.translate;
    function m(p) {
      return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
    }
    const g = m(u), h = o.map((p) => m(p));
    let v = o[h.indexOf(g) - 1];
    if (typeof v > "u" && s.cssMode) {
      let p;
      o.forEach((f, w) => {
        g >= f && (p = w);
      }), typeof p < "u" && (v = o[p > 0 ? p - 1 : p]);
    }
    let x = 0;
    if (typeof v < "u" && (x = r.indexOf(v), x < 0 && (x = i.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (x = x - i.slidesPerViewDynamic("previous", !0) + 1, x = Math.max(x, 0))), s.rewind && i.isBeginning) {
      const p = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
      return i.slideTo(p, n, e, t);
    } else if (s.loop && i.activeIndex === 0 && s.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(x, n, e, t);
      }), !0;
    return i.slideTo(x, n, e, t);
  }
  function Zt(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return typeof n > "u" && (n = i.params.speed), i.slideTo(i.activeIndex, n, e, t);
  }
  function Kt(n, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const s = this;
    if (s.destroyed)
      return;
    typeof n > "u" && (n = s.params.speed);
    let o = s.activeIndex;
    const r = Math.min(s.params.slidesPerGroupSkip, o), l = r + Math.floor((o - r) / s.params.slidesPerGroup), a = s.rtlTranslate ? s.translate : -s.translate;
    if (a >= s.snapGrid[l]) {
      const c = s.snapGrid[l], d = s.snapGrid[l + 1];
      a - c > (d - c) * i && (o += s.params.slidesPerGroup);
    } else {
      const c = s.snapGrid[l - 1], d = s.snapGrid[l];
      a - c <= (d - c) * i && (o -= s.params.slidesPerGroup);
    }
    return o = Math.max(o, 0), o = Math.min(o, s.slidesGrid.length - 1), s.slideTo(o, n, e, t);
  }
  function Jt() {
    const n = this;
    if (n.destroyed)
      return;
    const {
      params: e,
      slidesEl: t
    } = n, i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let s = n.clickedIndex, o;
    const r = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (n.animating)
        return;
      o = parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? s < n.loopedSlides - i / 2 || s > n.slides.length - n.loopedSlides + i / 2 ? (n.loopFix(), s = n.getSlideIndex(H(t, `${r}[data-swiper-slide-index="${o}"]`)[0]), fe(() => {
        n.slideTo(s);
      })) : n.slideTo(s) : s > n.slides.length - i ? (n.loopFix(), s = n.getSlideIndex(H(t, `${r}[data-swiper-slide-index="${o}"]`)[0]), fe(() => {
        n.slideTo(s);
      })) : n.slideTo(s);
    } else
      n.slideTo(s);
  }
  var en = {
    slideTo: Wt,
    slideToLoop: Ut,
    slideNext: Xt,
    slidePrev: Qt,
    slideReset: Zt,
    slideToClosest: Kt,
    slideToClickedSlide: Jt
  };
  function tn(n) {
    const e = this, {
      params: t,
      slidesEl: i
    } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
      return;
    const s = () => {
      H(i, `.${t.slideClass}, swiper-slide`).forEach((u, m) => {
        u.setAttribute("data-swiper-slide-index", m);
      });
    }, o = e.grid && t.grid && t.grid.rows > 1, r = t.slidesPerGroup * (o ? t.grid.rows : 1), l = e.slides.length % r !== 0, a = o && e.slides.length % t.grid.rows !== 0, c = (d) => {
      for (let u = 0; u < d; u += 1) {
        const m = e.isElement ? se("swiper-slide", [t.slideBlankClass]) : se("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(m);
      }
    };
    if (l) {
      if (t.loopAddBlankSlides) {
        const d = r - e.slides.length % r;
        c(d), e.recalcSlides(), e.updateSlides();
      } else
        ie("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      s();
    } else if (a) {
      if (t.loopAddBlankSlides) {
        const d = t.grid.rows - e.slides.length % t.grid.rows;
        c(d), e.recalcSlides(), e.updateSlides();
      } else
        ie("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      s();
    } else
      s();
    e.loopFix({
      slideRealIndex: n,
      direction: t.centeredSlides ? void 0 : "next"
    });
  }
  function nn(n) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: s,
      activeSlideIndex: o,
      byController: r,
      byMousewheel: l
    } = n === void 0 ? {} : n;
    const a = this;
    if (!a.params.loop)
      return;
    a.emit("beforeLoopFix");
    const {
      slides: c,
      allowSlidePrev: d,
      allowSlideNext: u,
      slidesEl: m,
      params: g
    } = a, {
      centeredSlides: h
    } = g;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && g.virtual.enabled) {
      t && (!g.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : g.centeredSlides && a.snapIndex < g.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = u, a.emit("loopFix");
      return;
    }
    let v = g.slidesPerView;
    v === "auto" ? v = a.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(g.slidesPerView, 10)), h && v % 2 === 0 && (v = v + 1));
    const x = g.slidesPerGroupAuto ? v : g.slidesPerGroup;
    let p = x;
    p % x !== 0 && (p += x - p % x), p += g.loopAdditionalSlides, a.loopedSlides = p;
    const f = a.grid && g.grid && g.grid.rows > 1;
    c.length < v + p ? ie("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : f && g.grid.fill === "row" && ie("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const w = [], b = [];
    let y = a.activeIndex;
    typeof o > "u" ? o = a.getSlideIndex(c.filter((_) => _.classList.contains(g.slideActiveClass))[0]) : y = o;
    const E = i === "next" || !i, G = i === "prev" || !i;
    let T = 0, M = 0;
    const S = f ? Math.ceil(c.length / g.grid.rows) : c.length, A = (f ? c[o].column : o) + (h && typeof s > "u" ? -v / 2 + 0.5 : 0);
    if (A < p) {
      T = Math.max(p - A, x);
      for (let _ = 0; _ < p - A; _ += 1) {
        const C = _ - Math.floor(_ / S) * S;
        if (f) {
          const I = S - C - 1;
          for (let N = c.length - 1; N >= 0; N -= 1)
            c[N].column === I && w.push(N);
        } else
          w.push(S - C - 1);
      }
    } else if (A + v > S - p) {
      M = Math.max(A - (S - p * 2), x);
      for (let _ = 0; _ < M; _ += 1) {
        const C = _ - Math.floor(_ / S) * S;
        f ? c.forEach((I, N) => {
          I.column === C && b.push(N);
        }) : b.push(C);
      }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }), G && w.forEach((_) => {
      c[_].swiperLoopMoveDOM = !0, m.prepend(c[_]), c[_].swiperLoopMoveDOM = !1;
    }), E && b.forEach((_) => {
      c[_].swiperLoopMoveDOM = !0, m.append(c[_]), c[_].swiperLoopMoveDOM = !1;
    }), a.recalcSlides(), g.slidesPerView === "auto" ? a.updateSlides() : f && (w.length > 0 && G || b.length > 0 && E) && a.slides.forEach((_, C) => {
      a.grid.updateSlide(C, _, a.slides);
    }), g.watchSlidesProgress && a.updateSlidesOffset(), t) {
      if (w.length > 0 && G) {
        if (typeof e > "u") {
          const _ = a.slidesGrid[y], I = a.slidesGrid[y + T] - _;
          l ? a.setTranslate(a.translate - I) : (a.slideTo(y + Math.ceil(T), 0, !1, !0), s && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I));
        } else if (s) {
          const _ = f ? w.length / g.grid.rows : w.length;
          a.slideTo(a.activeIndex + _, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
        }
      } else if (b.length > 0 && E)
        if (typeof e > "u") {
          const _ = a.slidesGrid[y], I = a.slidesGrid[y - M] - _;
          l ? a.setTranslate(a.translate - I) : (a.slideTo(y - M, 0, !1, !0), s && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I));
        } else {
          const _ = f ? b.length / g.grid.rows : b.length;
          a.slideTo(a.activeIndex - _, 0, !1, !0);
        }
    }
    if (a.allowSlidePrev = d, a.allowSlideNext = u, a.controller && a.controller.control && !r) {
      const _ = {
        slideRealIndex: e,
        direction: i,
        setTranslate: s,
        activeSlideIndex: o,
        byController: !0
      };
      Array.isArray(a.controller.control) ? a.controller.control.forEach((C) => {
        !C.destroyed && C.params.loop && C.loopFix({
          ..._,
          slideTo: C.params.slidesPerView === g.slidesPerView ? t : !1
        });
      }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
        ..._,
        slideTo: a.controller.control.params.slidesPerView === g.slidesPerView ? t : !1
      });
    }
    a.emit("loopFix");
  }
  function sn() {
    const n = this, {
      params: e,
      slidesEl: t
    } = n;
    if (!e.loop || n.virtual && n.params.virtual.enabled)
      return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach((s) => {
      const o = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
      i[o] = s;
    }), n.slides.forEach((s) => {
      s.removeAttribute("data-swiper-slide-index");
    }), i.forEach((s) => {
      t.append(s);
    }), n.recalcSlides(), n.slideTo(n.realIndex, 0);
  }
  var on = {
    loopCreate: tn,
    loopFix: nn,
    loopDestroy: sn
  };
  function rn(n) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = n ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function an() {
    const n = this;
    n.params.watchOverflow && n.isLocked || n.params.cssMode || (n.isElement && (n.__preventObserver__ = !0), n[n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", n.isElement && requestAnimationFrame(() => {
      n.__preventObserver__ = !1;
    }));
  }
  var ln = {
    setGrabCursor: rn,
    unsetGrabCursor: an
  };
  function cn(n, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === Y() || i === z())
        return null;
      i.assignedSlot && (i = i.assignedSlot);
      const s = i.closest(n);
      return !s && !i.getRootNode ? null : s || t(i.getRootNode().host);
    }
    return t(e);
  }
  function He(n, e, t) {
    const i = z(), {
      params: s
    } = n, o = s.edgeSwipeDetection, r = s.edgeSwipeThreshold;
    return o && (t <= r || t >= i.innerWidth - r) ? o === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function dn(n) {
    const e = this, t = Y();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const s = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (s.pointerId !== null && s.pointerId !== i.pointerId)
        return;
      s.pointerId = i.pointerId;
    } else
      i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      He(e, i, i.targetTouches[0].pageX);
      return;
    }
    const {
      params: o,
      touches: r,
      enabled: l
    } = e;
    if (!l || !o.simulateTouch && i.pointerType === "mouse" || e.animating && o.preventInteractionOnTransition)
      return;
    !e.animating && o.cssMode && o.loop && e.loopFix();
    let a = i.target;
    if (o.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || s.isTouched && s.isMoved)
      return;
    const c = !!o.noSwipingClass && o.noSwipingClass !== "", d = i.composedPath ? i.composedPath() : i.path;
    c && i.target && i.target.shadowRoot && d && (a = d[0]);
    const u = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, m = !!(i.target && i.target.shadowRoot);
    if (o.noSwiping && (m ? cn(u, a) : a.closest(u))) {
      e.allowClick = !0;
      return;
    }
    if (o.swipeHandler && !a.closest(o.swipeHandler))
      return;
    r.currentX = i.pageX, r.currentY = i.pageY;
    const g = r.currentX, h = r.currentY;
    if (!He(e, i, g))
      return;
    Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), r.startX = g, r.startY = h, s.touchStartTime = ee(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = !1);
    let v = !0;
    a.matches(s.focusableElements) && (v = !1, a.nodeName === "SELECT" && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== a && t.activeElement.blur();
    const x = v && e.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || x) && !a.isContentEditable && i.preventDefault(), o.freeMode && o.freeMode.enabled && e.freeMode && e.animating && !o.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i);
  }
  function pn(n) {
    const e = Y(), t = this, i = t.touchEventsData, {
      params: s,
      touches: o,
      rtlTranslate: r,
      enabled: l
    } = t;
    if (!l || !s.simulateTouch && n.pointerType === "mouse")
      return;
    let a = n;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (i.touchId !== null || a.pointerId !== i.pointerId))
      return;
    let c;
    if (a.type === "touchmove") {
      if (c = [...a.changedTouches].filter((E) => E.identifier === i.touchId)[0], !c || c.identifier !== i.touchId)
        return;
    } else
      c = a;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", a);
      return;
    }
    const d = c.pageX, u = c.pageY;
    if (a.preventedByNestedSwiper) {
      o.startX = d, o.startY = u;
      return;
    }
    if (!t.allowTouchMove) {
      a.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(o, {
        startX: d,
        startY: u,
        currentX: d,
        currentY: u
      }), i.touchStartTime = ee());
      return;
    }
    if (s.touchReleaseOnEdges && !s.loop) {
      if (t.isVertical()) {
        if (u < o.startY && t.translate <= t.maxTranslate() || u > o.startY && t.translate >= t.minTranslate()) {
          i.isTouched = !1, i.isMoved = !1;
          return;
        }
      } else if (d < o.startX && t.translate <= t.maxTranslate() || d > o.startX && t.translate >= t.minTranslate())
        return;
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(i.focusableElements)) {
      i.isMoved = !0, t.allowClick = !1;
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", a), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = d, o.currentY = u;
    const m = o.currentX - o.startX, g = o.currentY - o.startY;
    if (t.params.threshold && Math.sqrt(m ** 2 + g ** 2) < t.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
      let E;
      t.isHorizontal() && o.currentY === o.startY || t.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : m * m + g * g >= 25 && (E = Math.atan2(Math.abs(g), Math.abs(m)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? E > s.touchAngle : 90 - E > s.touchAngle);
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (i.startMoving = !0), i.isScrolling || a.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving)
      return;
    t.allowClick = !1, !s.cssMode && a.cancelable && a.preventDefault(), s.touchMoveStopPropagation && !s.nested && a.stopPropagation();
    let h = t.isHorizontal() ? m : g, v = t.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
    s.oneWayMovement && (h = Math.abs(h) * (r ? 1 : -1), v = Math.abs(v) * (r ? 1 : -1)), o.diff = h, h *= s.touchRatio, r && (h = -h, v = -v);
    const x = t.touchesDirection;
    t.swipeDirection = h > 0 ? "prev" : "next", t.touchesDirection = v > 0 ? "prev" : "next";
    const p = t.params.loop && !s.cssMode, f = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
      if (p && f && t.loopFix({
        direction: t.swipeDirection
      }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const E = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        t.wrapperEl.dispatchEvent(E);
      }
      i.allowMomentumBounce = !1, s.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a);
    }
    let w;
    if ((/* @__PURE__ */ new Date()).getTime(), i.isMoved && i.allowThresholdMove && x !== t.touchesDirection && p && f && Math.abs(h) >= 1) {
      Object.assign(o, {
        startX: d,
        startY: u,
        currentX: d,
        currentY: u,
        startTranslate: i.currentTranslate
      }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
      return;
    }
    t.emit("sliderMove", a), i.isMoved = !0, i.currentTranslate = h + i.startTranslate;
    let b = !0, y = s.resistanceRatio;
    if (s.touchReleaseOnEdges && (y = 0), h > 0 ? (p && f && !w && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > t.minTranslate() && (b = !1, s.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + h) ** y))) : h < 0 && (p && f && !w && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (s.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
    }), i.currentTranslate < t.maxTranslate() && (b = !1, s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - h) ** y))), b && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), s.threshold > 0)
      if (Math.abs(h) > s.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, o.diff = t.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && t.freeMode || s.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
  }
  function un(n) {
    const e = this, t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let s;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (s = [...i.changedTouches].filter((y) => y.identifier === t.touchId)[0], !s || s.identifier !== t.touchId)
        return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId)
        return;
      s = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    t.pointerId = null, t.touchId = null;
    const {
      params: r,
      touches: l,
      rtlTranslate: a,
      slidesGrid: c,
      enabled: d
    } = e;
    if (!d || !r.simulateTouch && i.pointerType === "mouse")
      return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && r.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return;
    }
    r.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = ee(), m = u - t.touchStartTime;
    if (e.allowClick) {
      const y = i.path || i.composedPath && i.composedPath();
      e.updateClickedSlide(y && y[0] || i.target, y), e.emit("tap click", i), m < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
    }
    if (t.lastClickTime = ee(), fe(() => {
      e.destroyed || (e.allowClick = !0);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return;
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let g;
    if (r.followFinger ? g = a ? e.translate : -e.translate : g = -t.currentTranslate, r.cssMode)
      return;
    if (r.freeMode && r.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: g
      });
      return;
    }
    const h = g >= -e.maxTranslate() && !e.params.loop;
    let v = 0, x = e.slidesSizesGrid[0];
    for (let y = 0; y < c.length; y += y < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const E = y < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof c[y + E] < "u" ? (h || g >= c[y] && g < c[y + E]) && (v = y, x = c[y + E] - c[y]) : (h || g >= c[y]) && (v = y, x = c[c.length - 1] - c[c.length - 2]);
    }
    let p = null, f = null;
    r.rewind && (e.isBeginning ? f = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (p = 0));
    const w = (g - c[v]) / x, b = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (m > r.longSwipesMs) {
      if (!r.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (w >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? p : v + b) : e.slideTo(v)), e.swipeDirection === "prev" && (w > 1 - r.longSwipesRatio ? e.slideTo(v + b) : f !== null && w < 0 && Math.abs(w) > r.longSwipesRatio ? e.slideTo(f) : e.slideTo(v));
    } else {
      if (!r.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(v + b) : e.slideTo(v) : (e.swipeDirection === "next" && e.slideTo(p !== null ? p : v + b), e.swipeDirection === "prev" && e.slideTo(f !== null ? f : v));
    }
  }
  function qe() {
    const n = this, {
      params: e,
      el: t
    } = n;
    if (t && t.offsetWidth === 0)
      return;
    e.breakpoints && n.setBreakpoint();
    const {
      allowSlideNext: i,
      allowSlidePrev: s,
      snapGrid: o
    } = n, r = n.virtual && n.params.virtual.enabled;
    n.allowSlideNext = !0, n.allowSlidePrev = !0, n.updateSize(), n.updateSlides(), n.updateSlidesClasses();
    const l = r && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !l ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.params.loop && !r ? n.slideToLoop(n.realIndex, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0), n.autoplay && n.autoplay.running && n.autoplay.paused && (clearTimeout(n.autoplay.resizeTimeout), n.autoplay.resizeTimeout = setTimeout(() => {
      n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume();
    }, 500)), n.allowSlidePrev = s, n.allowSlideNext = i, n.params.watchOverflow && o !== n.snapGrid && n.checkOverflow();
  }
  function fn(n) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && n.preventDefault(), e.params.preventClicksPropagation && e.animating && (n.stopPropagation(), n.stopImmediatePropagation())));
  }
  function mn() {
    const n = this, {
      wrapperEl: e,
      rtlTranslate: t,
      enabled: i
    } = n;
    if (!i)
      return;
    n.previousTranslate = n.translate, n.isHorizontal() ? n.translate = -e.scrollLeft : n.translate = -e.scrollTop, n.translate === 0 && (n.translate = 0), n.updateActiveIndex(), n.updateSlidesClasses();
    let s;
    const o = n.maxTranslate() - n.minTranslate();
    o === 0 ? s = 0 : s = (n.translate - n.minTranslate()) / o, s !== n.progress && n.updateProgress(t ? -n.translate : n.translate), n.emit("setTranslate", n.translate, !1);
  }
  function gn(n) {
    const e = this;
    re(e, n.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function hn() {
    const n = this;
    n.documentTouchHandlerProceeded || (n.documentTouchHandlerProceeded = !0, n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
  }
  const Ne = (n, e) => {
    const t = Y(), {
      params: i,
      el: s,
      wrapperEl: o,
      device: r
    } = n, l = !!i.nested, a = e === "on" ? "addEventListener" : "removeEventListener", c = e;
    !s || typeof s == "string" || (t[a]("touchstart", n.onDocumentTouchStart, {
      passive: !1,
      capture: l
    }), s[a]("touchstart", n.onTouchStart, {
      passive: !1
    }), s[a]("pointerdown", n.onTouchStart, {
      passive: !1
    }), t[a]("touchmove", n.onTouchMove, {
      passive: !1,
      capture: l
    }), t[a]("pointermove", n.onTouchMove, {
      passive: !1,
      capture: l
    }), t[a]("touchend", n.onTouchEnd, {
      passive: !0
    }), t[a]("pointerup", n.onTouchEnd, {
      passive: !0
    }), t[a]("pointercancel", n.onTouchEnd, {
      passive: !0
    }), t[a]("touchcancel", n.onTouchEnd, {
      passive: !0
    }), t[a]("pointerout", n.onTouchEnd, {
      passive: !0
    }), t[a]("pointerleave", n.onTouchEnd, {
      passive: !0
    }), t[a]("contextmenu", n.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && s[a]("click", n.onClick, !0), i.cssMode && o[a]("scroll", n.onScroll), i.updateOnWindowResize ? n[c](r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", qe, !0) : n[c]("observerUpdate", qe, !0), s[a]("load", n.onLoad, {
      capture: !0
    }));
  };
  function wn() {
    const n = this, {
      params: e
    } = n;
    n.onTouchStart = dn.bind(n), n.onTouchMove = pn.bind(n), n.onTouchEnd = un.bind(n), n.onDocumentTouchStart = hn.bind(n), e.cssMode && (n.onScroll = mn.bind(n)), n.onClick = fn.bind(n), n.onLoad = gn.bind(n), Ne(n, "on");
  }
  function vn() {
    Ne(this, "off");
  }
  var bn = {
    attachEvents: wn,
    detachEvents: vn
  };
  const Fe = (n, e) => n.grid && e.grid && e.grid.rows > 1;
  function xn() {
    const n = this, {
      realIndex: e,
      initialized: t,
      params: i,
      el: s
    } = n, o = i.breakpoints;
    if (!o || o && Object.keys(o).length === 0)
      return;
    const r = n.getBreakpoint(o, n.params.breakpointsBase, n.el);
    if (!r || n.currentBreakpoint === r)
      return;
    const a = (r in o ? o[r] : void 0) || n.originalParams, c = Fe(n, i), d = Fe(n, a), u = n.params.grabCursor, m = a.grabCursor, g = i.enabled;
    c && !d ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), n.emitContainerClasses()) : !c && d && (s.classList.add(`${i.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`), n.emitContainerClasses()), u && !m ? n.unsetGrabCursor() : !u && m && n.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((w) => {
      if (typeof a[w] > "u")
        return;
      const b = i[w] && i[w].enabled, y = a[w] && a[w].enabled;
      b && !y && n[w].disable(), !b && y && n[w].enable();
    });
    const h = a.direction && a.direction !== i.direction, v = i.loop && (a.slidesPerView !== i.slidesPerView || h), x = i.loop;
    h && t && n.changeDirection(), $(n.params, a);
    const p = n.params.enabled, f = n.params.loop;
    Object.assign(n, {
      allowTouchMove: n.params.allowTouchMove,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev
    }), g && !p ? n.disable() : !g && p && n.enable(), n.currentBreakpoint = r, n.emit("_beforeBreakpoint", a), t && (v ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides()) : !x && f ? (n.loopCreate(e), n.updateSlides()) : x && !f && n.loopDestroy()), n.emit("breakpoint", a);
  }
  function yn(n, e, t) {
    if (e === void 0 && (e = "window"), !n || e === "container" && !t)
      return;
    let i = !1;
    const s = z(), o = e === "window" ? s.innerHeight : t.clientHeight, r = Object.keys(n).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return {
          value: o * a,
          point: l
        };
      }
      return {
        value: l,
        point: l
      };
    });
    r.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < r.length; l += 1) {
      const {
        point: a,
        value: c
      } = r[l];
      e === "window" ? s.matchMedia(`(min-width: ${c}px)`).matches && (i = a) : c <= t.clientWidth && (i = a);
    }
    return i || "max";
  }
  var Sn = {
    setBreakpoint: xn,
    getBreakpoint: yn
  };
  function _n(n, e) {
    const t = [];
    return n.forEach((i) => {
      typeof i == "object" ? Object.keys(i).forEach((s) => {
        i[s] && t.push(e + s);
      }) : typeof i == "string" && t.push(e + i);
    }), t;
  }
  function An() {
    const n = this, {
      classNames: e,
      params: t,
      rtl: i,
      el: s,
      device: o
    } = n, r = _n(["initialized", t.direction, {
      "free-mode": n.params.freeMode && t.freeMode.enabled
    }, {
      autoheight: t.autoHeight
    }, {
      rtl: i
    }, {
      grid: t.grid && t.grid.rows > 1
    }, {
      "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
      android: o.android
    }, {
      ios: o.ios
    }, {
      "css-mode": t.cssMode
    }, {
      centered: t.cssMode && t.centeredSlides
    }, {
      "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...r), s.classList.add(...e), n.emitContainerClasses();
  }
  function kn() {
    const n = this, {
      el: e,
      classNames: t
    } = n;
    !e || typeof e == "string" || (e.classList.remove(...t), n.emitContainerClasses());
  }
  var Tn = {
    addClasses: An,
    removeClasses: kn
  };
  function Cn() {
    const n = this, {
      isLocked: e,
      params: t
    } = n, {
      slidesOffsetBefore: i
    } = t;
    if (i) {
      const s = n.slides.length - 1, o = n.slidesGrid[s] + n.slidesSizesGrid[s] + i * 2;
      n.isLocked = n.size > o;
    } else
      n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked), t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked), e && e !== n.isLocked && (n.isEnd = !1), e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
  }
  var En = {
    checkOverflow: Cn
  }, Ve = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: !1,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: !1,
    // Set wrapper width
    setWrapperSize: !1,
    // Virtual Translate
    virtualTranslate: !1,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: !0,
    // Round length
    roundLengths: !1,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    // Unique Navigation Elements
    uniqueNavElements: !0,
    // Resistance
    resistance: !0,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: !1,
    // Cursor
    grabCursor: !1,
    // Clicks
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    // loop
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    // rewind
    rewind: !1,
    // Swiping/no swiping
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: !0,
    // Internals
    _emitClasses: !1
  };
  function Pn(n, e) {
    return function(i) {
      i === void 0 && (i = {});
      const s = Object.keys(i)[0], o = i[s];
      if (typeof o != "object" || o === null) {
        $(e, i);
        return;
      }
      if (n[s] === !0 && (n[s] = {
        enabled: !0
      }), s === "navigation" && n[s] && n[s].enabled && !n[s].prevEl && !n[s].nextEl && (n[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && n[s] && n[s].enabled && !n[s].el && (n[s].auto = !0), !(s in n && "enabled" in o)) {
        $(e, i);
        return;
      }
      typeof n[s] == "object" && !("enabled" in n[s]) && (n[s].enabled = !0), n[s] || (n[s] = {
        enabled: !1
      }), $(e, i);
    };
  }
  const ye = {
    eventsEmitter: kt,
    update: $t,
    translate: Ft,
    transition: Yt,
    slide: en,
    loop: on,
    grabCursor: ln,
    events: bn,
    breakpoints: Sn,
    checkOverflow: En,
    classes: Tn
  }, Se = {};
  class D {
    constructor() {
      let e, t;
      for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
        s[o] = arguments[o];
      s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? t = s[0] : [e, t] = s, t || (t = {}), t = $({}, t), e && !t.el && (t.el = e);
      const r = Y();
      if (t.el && typeof t.el == "string" && r.querySelectorAll(t.el).length > 1) {
        const d = [];
        return r.querySelectorAll(t.el).forEach((u) => {
          const m = $({}, t, {
            el: u
          });
          d.push(new D(m));
        }), d;
      }
      const l = this;
      l.__swiper__ = !0, l.support = ze(), l.device = $e({
        userAgent: t.userAgent
      }), l.browser = St(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const a = {};
      l.modules.forEach((d) => {
        d({
          params: t,
          swiper: l,
          extendParams: Pn(t, a),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      const c = $({}, Ve, a);
      return l.params = $({}, c, Se, t), l.originalParams = $({}, l.params), l.passedParams = $({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((d) => {
        l.on(d, l.params.on[d]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: !0,
        isEnd: !1,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: l.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: !0,
        // Touches
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.emit("_swiper"), l.params.init && l.init(), l;
    }
    getDirectionLabel(e) {
      return this.isHorizontal() ? e : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      }[e];
    }
    getSlideIndex(e) {
      const {
        slidesEl: t,
        params: i
      } = this, s = H(t, `.${i.slideClass}, swiper-slide`), o = oe(s[0]);
      return oe(e) - o;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
    }
    recalcSlides() {
      const e = this, {
        slidesEl: t,
        params: i
      } = e;
      e.slides = H(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const s = i.minTranslate(), r = (i.maxTranslate() - s) * e + s;
      i.translateTo(r, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el)
        return;
      const t = e.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el)
        return;
      const t = [];
      e.slides.forEach((i) => {
        const s = e.getSlideClasses(i);
        t.push({
          slideEl: i,
          classNames: s
        }), e.emit("_slideClass", i, s);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this, {
        params: s,
        slides: o,
        slidesGrid: r,
        slidesSizesGrid: l,
        size: a,
        activeIndex: c
      } = i;
      let d = 1;
      if (typeof s.slidesPerView == "number")
        return s.slidesPerView;
      if (s.centeredSlides) {
        let u = o[c] ? Math.ceil(o[c].swiperSlideSize) : 0, m;
        for (let g = c + 1; g < o.length; g += 1)
          o[g] && !m && (u += Math.ceil(o[g].swiperSlideSize), d += 1, u > a && (m = !0));
        for (let g = c - 1; g >= 0; g -= 1)
          o[g] && !m && (u += o[g].swiperSlideSize, d += 1, u > a && (m = !0));
      } else if (e === "current")
        for (let u = c + 1; u < o.length; u += 1)
          (t ? r[u] + l[u] - r[c] < a : r[u] - r[c] < a) && (d += 1);
      else
        for (let u = c - 1; u >= 0; u -= 1)
          r[c] - r[u] < a && (d += 1);
      return d;
    }
    update() {
      const e = this;
      if (!e || e.destroyed)
        return;
      const {
        snapGrid: t,
        params: i
      } = e;
      i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
        r.complete && re(e, r);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function s() {
        const r = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(r, e.maxTranslate()), e.minTranslate());
        e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let o;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        s(), i.autoHeight && e.updateAutoHeight();
      else {
        if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
          const r = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          o = e.slideTo(r.length - 1, 0, !1, !0);
        } else
          o = e.slideTo(e.activeIndex, 0, !1, !0);
        o || s();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this, s = i.params.direction;
      return e || (e = s === "horizontal" ? "vertical" : "horizontal"), e === s || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((o) => {
        e === "vertical" ? o.style.width = "" : o.style.height = "";
      }), i.emit("changeDirection"), t && i.update()), i;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted)
        return !0;
      let i = e || t.params.el;
      if (typeof i == "string" && (i = document.querySelector(i)), !i)
        return !1;
      i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
      const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : H(i, s())[0];
      return !r && t.params.createElements && (r = se("div", t.params.wrapperClass), i.append(r), H(i, `.${t.params.slideClass}`).forEach((l) => {
        r.append(l);
      })), Object.assign(t, {
        el: i,
        wrapperEl: r,
        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
        hostEl: t.isElement ? i.parentNode.host : i,
        mounted: !0,
        // RTL
        rtl: i.dir.toLowerCase() === "rtl" || q(i, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || q(i, "direction") === "rtl"),
        wrongRTL: q(r, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1)
        return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((o) => {
        o.complete ? re(t, o) : o.addEventListener("load", (r) => {
          re(t, r.target);
        });
      }), xe(t), t.initialized = !0, xe(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this, {
        params: s,
        el: o,
        wrapperEl: r,
        slides: l
      } = i;
      return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), o && typeof o != "string" && o.removeAttribute("style"), r && r.removeAttribute("style"), l && l.length && l.forEach((a) => {
        a.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
      })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((a) => {
        i.off(a);
      }), e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), ft(i)), i.destroyed = !0), null;
    }
    static extendDefaults(e) {
      $(Se, e);
    }
    static get extendedDefaults() {
      return Se;
    }
    static get defaults() {
      return Ve;
    }
    static installModule(e) {
      D.prototype.__modules__ || (D.prototype.__modules__ = []);
      const t = D.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((t) => D.installModule(t)), D) : (D.installModule(e), D);
    }
  }
  Object.keys(ye).forEach((n) => {
    Object.keys(ye[n]).forEach((e) => {
      D.prototype[e] = ye[n][e];
    });
  }), D.use([_t, At]);
  function je(n, e, t, i) {
    return n.params.createElements && Object.keys(i).forEach((s) => {
      if (!t[s] && t.auto === !0) {
        let o = H(n.el, `.${i[s]}`)[0];
        o || (o = se("div", i[s]), o.className = i[s], n.el.append(o)), t[s] = o, e[s] = o;
      }
    }), t;
  }
  function In(n) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: s
    } = n;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), e.navigation = {
      nextEl: null,
      prevEl: null
    };
    function o(h) {
      let v;
      return h && typeof h == "string" && e.isElement && (v = e.el.querySelector(h), v) ? v : (h && (typeof h == "string" && (v = [...document.querySelectorAll(h)]), e.params.uniqueNavElements && typeof h == "string" && v && v.length > 1 && e.el.querySelectorAll(h).length === 1 ? v = e.el.querySelector(h) : v && v.length === 1 && (v = v[0])), h && !v ? h : v);
    }
    function r(h, v) {
      const x = e.params.navigation;
      h = L(h), h.forEach((p) => {
        p && (p.classList[v ? "add" : "remove"](...x.disabledClass.split(" ")), p.tagName === "BUTTON" && (p.disabled = v), e.params.watchOverflow && e.enabled && p.classList[e.isLocked ? "add" : "remove"](x.lockClass));
      });
    }
    function l() {
      const {
        nextEl: h,
        prevEl: v
      } = e.navigation;
      if (e.params.loop) {
        r(v, !1), r(h, !1);
        return;
      }
      r(v, e.isBeginning && !e.params.rewind), r(h, e.isEnd && !e.params.rewind);
    }
    function a(h) {
      h.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), s("navigationPrev"));
    }
    function c(h) {
      h.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), s("navigationNext"));
    }
    function d() {
      const h = e.params.navigation;
      if (e.params.navigation = je(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(h.nextEl || h.prevEl))
        return;
      let v = o(h.nextEl), x = o(h.prevEl);
      Object.assign(e.navigation, {
        nextEl: v,
        prevEl: x
      }), v = L(v), x = L(x);
      const p = (f, w) => {
        f && f.addEventListener("click", w === "next" ? c : a), !e.enabled && f && f.classList.add(...h.lockClass.split(" "));
      };
      v.forEach((f) => p(f, "next")), x.forEach((f) => p(f, "prev"));
    }
    function u() {
      let {
        nextEl: h,
        prevEl: v
      } = e.navigation;
      h = L(h), v = L(v);
      const x = (p, f) => {
        p.removeEventListener("click", f === "next" ? c : a), p.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      h.forEach((p) => x(p, "next")), v.forEach((p) => x(p, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? g() : (d(), l());
    }), i("toEdge fromEdge lock unlock", () => {
      l();
    }), i("destroy", () => {
      u();
    }), i("enable disable", () => {
      let {
        nextEl: h,
        prevEl: v
      } = e.navigation;
      if (h = L(h), v = L(v), e.enabled) {
        l();
        return;
      }
      [...h, ...v].filter((x) => !!x).forEach((x) => x.classList.add(e.params.navigation.lockClass));
    }), i("click", (h, v) => {
      let {
        nextEl: x,
        prevEl: p
      } = e.navigation;
      x = L(x), p = L(p);
      const f = v.target;
      let w = p.includes(f) || x.includes(f);
      if (e.isElement && !w) {
        const b = v.path || v.composedPath && v.composedPath();
        b && (w = b.find((y) => x.includes(y) || p.includes(y)));
      }
      if (e.params.navigation.hideOnClick && !w) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === f || e.pagination.el.contains(f)))
          return;
        let b;
        x.length ? b = x[0].classList.contains(e.params.navigation.hiddenClass) : p.length && (b = p[0].classList.contains(e.params.navigation.hiddenClass)), s(b === !0 ? "navigationShow" : "navigationHide"), [...x, ...p].filter((y) => !!y).forEach((y) => y.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const m = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), d(), l();
    }, g = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u();
    };
    Object.assign(e.navigation, {
      enable: m,
      disable: g,
      update: l,
      init: d,
      destroy: u
    });
  }
  function X(n) {
    return n === void 0 && (n = ""), `.${n.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function Ln(n) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: s
    } = n;
    const o = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (p) => p,
        formatFractionTotal: (p) => p,
        bulletClass: `${o}-bullet`,
        bulletActiveClass: `${o}-bullet-active`,
        modifierClass: `${o}-`,
        currentClass: `${o}-current`,
        totalClass: `${o}-total`,
        hiddenClass: `${o}-hidden`,
        progressbarFillClass: `${o}-progressbar-fill`,
        progressbarOppositeClass: `${o}-progressbar-opposite`,
        clickableClass: `${o}-clickable`,
        lockClass: `${o}-lock`,
        horizontalClass: `${o}-horizontal`,
        verticalClass: `${o}-vertical`,
        paginationDisabledClass: `${o}-disabled`
      }
    }), e.pagination = {
      el: null,
      bullets: []
    };
    let r, l = 0;
    function a() {
      return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
    }
    function c(p, f) {
      const {
        bulletActiveClass: w
      } = e.params.pagination;
      p && (p = p[`${f === "prev" ? "previous" : "next"}ElementSibling`], p && (p.classList.add(`${w}-${f}`), p = p[`${f === "prev" ? "previous" : "next"}ElementSibling`], p && p.classList.add(`${w}-${f}-${f}`)));
    }
    function d(p) {
      const f = p.target.closest(X(e.params.pagination.bulletClass));
      if (!f)
        return;
      p.preventDefault();
      const w = oe(f) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === w)
          return;
        e.slideToLoop(w);
      } else
        e.slideTo(w);
    }
    function u() {
      const p = e.rtl, f = e.params.pagination;
      if (a())
        return;
      let w = e.pagination.el;
      w = L(w);
      let b, y;
      const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, G = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? (y = e.previousRealIndex || 0, b = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (b = e.snapIndex, y = e.previousSnapIndex) : (y = e.previousIndex || 0, b = e.activeIndex || 0), f.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
        const T = e.pagination.bullets;
        let M, S, k;
        if (f.dynamicBullets && (r = me(T[0], e.isHorizontal() ? "width" : "height", !0), w.forEach((A) => {
          A.style[e.isHorizontal() ? "width" : "height"] = `${r * (f.dynamicMainBullets + 4)}px`;
        }), f.dynamicMainBullets > 1 && y !== void 0 && (l += b - (y || 0), l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)), M = Math.max(b - l, 0), S = M + (Math.min(T.length, f.dynamicMainBullets) - 1), k = (S + M) / 2), T.forEach((A) => {
          const _ = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((C) => `${f.bulletActiveClass}${C}`)].map((C) => typeof C == "string" && C.includes(" ") ? C.split(" ") : C).flat();
          A.classList.remove(..._);
        }), w.length > 1)
          T.forEach((A) => {
            const _ = oe(A);
            _ === b ? A.classList.add(...f.bulletActiveClass.split(" ")) : e.isElement && A.setAttribute("part", "bullet"), f.dynamicBullets && (_ >= M && _ <= S && A.classList.add(...`${f.bulletActiveClass}-main`.split(" ")), _ === M && c(A, "prev"), _ === S && c(A, "next"));
          });
        else {
          const A = T[b];
          if (A && A.classList.add(...f.bulletActiveClass.split(" ")), e.isElement && T.forEach((_, C) => {
            _.setAttribute("part", C === b ? "bullet-active" : "bullet");
          }), f.dynamicBullets) {
            const _ = T[M], C = T[S];
            for (let I = M; I <= S; I += 1)
              T[I] && T[I].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
            c(_, "prev"), c(C, "next");
          }
        }
        if (f.dynamicBullets) {
          const A = Math.min(T.length, f.dynamicMainBullets + 4), _ = (r * A - r) / 2 - k * r, C = p ? "right" : "left";
          T.forEach((I) => {
            I.style[e.isHorizontal() ? C : "top"] = `${_}px`;
          });
        }
      }
      w.forEach((T, M) => {
        if (f.type === "fraction" && (T.querySelectorAll(X(f.currentClass)).forEach((S) => {
          S.textContent = f.formatFractionCurrent(b + 1);
        }), T.querySelectorAll(X(f.totalClass)).forEach((S) => {
          S.textContent = f.formatFractionTotal(G);
        })), f.type === "progressbar") {
          let S;
          f.progressbarOpposite ? S = e.isHorizontal() ? "vertical" : "horizontal" : S = e.isHorizontal() ? "horizontal" : "vertical";
          const k = (b + 1) / G;
          let A = 1, _ = 1;
          S === "horizontal" ? A = k : _ = k, T.querySelectorAll(X(f.progressbarFillClass)).forEach((C) => {
            C.style.transform = `translate3d(0,0,0) scaleX(${A}) scaleY(${_})`, C.style.transitionDuration = `${e.params.speed}ms`;
          });
        }
        f.type === "custom" && f.renderCustom ? (T.innerHTML = f.renderCustom(e, b + 1, G), M === 0 && s("paginationRender", T)) : (M === 0 && s("paginationRender", T), s("paginationUpdate", T)), e.params.watchOverflow && e.enabled && T.classList[e.isLocked ? "add" : "remove"](f.lockClass);
      });
    }
    function m() {
      const p = e.params.pagination;
      if (a())
        return;
      const f = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
      let w = e.pagination.el;
      w = L(w);
      let b = "";
      if (p.type === "bullets") {
        let y = e.params.loop ? Math.ceil(f / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && y > f && (y = f);
        for (let E = 0; E < y; E += 1)
          p.renderBullet ? b += p.renderBullet.call(e, E, p.bulletClass) : b += `<${p.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${p.bulletClass}"></${p.bulletElement}>`;
      }
      p.type === "fraction" && (p.renderFraction ? b = p.renderFraction.call(e, p.currentClass, p.totalClass) : b = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`), p.type === "progressbar" && (p.renderProgressbar ? b = p.renderProgressbar.call(e, p.progressbarFillClass) : b = `<span class="${p.progressbarFillClass}"></span>`), e.pagination.bullets = [], w.forEach((y) => {
        p.type !== "custom" && (y.innerHTML = b || ""), p.type === "bullets" && e.pagination.bullets.push(...y.querySelectorAll(X(p.bulletClass)));
      }), p.type !== "custom" && s("paginationRender", w[0]);
    }
    function g() {
      e.params.pagination = je(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      const p = e.params.pagination;
      if (!p.el)
        return;
      let f;
      typeof p.el == "string" && e.isElement && (f = e.el.querySelector(p.el)), !f && typeof p.el == "string" && (f = [...document.querySelectorAll(p.el)]), f || (f = p.el), !(!f || f.length === 0) && (e.params.uniqueNavElements && typeof p.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...e.el.querySelectorAll(p.el)], f.length > 1 && (f = f.filter((w) => Be(w, ".swiper")[0] === e.el)[0])), Array.isArray(f) && f.length === 1 && (f = f[0]), Object.assign(e.pagination, {
        el: f
      }), f = L(f), f.forEach((w) => {
        p.type === "bullets" && p.clickable && w.classList.add(...(p.clickableClass || "").split(" ")), w.classList.add(p.modifierClass + p.type), w.classList.add(e.isHorizontal() ? p.horizontalClass : p.verticalClass), p.type === "bullets" && p.dynamicBullets && (w.classList.add(`${p.modifierClass}${p.type}-dynamic`), l = 0, p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)), p.type === "progressbar" && p.progressbarOpposite && w.classList.add(p.progressbarOppositeClass), p.clickable && w.addEventListener("click", d), e.enabled || w.classList.add(p.lockClass);
      }));
    }
    function h() {
      const p = e.params.pagination;
      if (a())
        return;
      let f = e.pagination.el;
      f && (f = L(f), f.forEach((w) => {
        w.classList.remove(p.hiddenClass), w.classList.remove(p.modifierClass + p.type), w.classList.remove(e.isHorizontal() ? p.horizontalClass : p.verticalClass), p.clickable && (w.classList.remove(...(p.clickableClass || "").split(" ")), w.removeEventListener("click", d));
      })), e.pagination.bullets && e.pagination.bullets.forEach((w) => w.classList.remove(...p.bulletActiveClass.split(" ")));
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el)
        return;
      const p = e.params.pagination;
      let {
        el: f
      } = e.pagination;
      f = L(f), f.forEach((w) => {
        w.classList.remove(p.horizontalClass, p.verticalClass), w.classList.add(e.isHorizontal() ? p.horizontalClass : p.verticalClass);
      });
    }), i("init", () => {
      e.params.pagination.enabled === !1 ? x() : (g(), m(), u());
    }), i("activeIndexChange", () => {
      typeof e.snapIndex > "u" && u();
    }), i("snapIndexChange", () => {
      u();
    }), i("snapGridLengthChange", () => {
      m(), u();
    }), i("destroy", () => {
      h();
    }), i("enable disable", () => {
      let {
        el: p
      } = e.pagination;
      p && (p = L(p), p.forEach((f) => f.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }), i("lock unlock", () => {
      u();
    }), i("click", (p, f) => {
      const w = f.target, b = L(e.pagination.el);
      if (e.params.pagination.el && e.params.pagination.hideOnClick && b && b.length > 0 && !w.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && w === e.navigation.nextEl || e.navigation.prevEl && w === e.navigation.prevEl))
          return;
        const y = b[0].classList.contains(e.params.pagination.hiddenClass);
        s(y === !0 ? "paginationShow" : "paginationHide"), b.forEach((E) => E.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
    const v = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: p
      } = e.pagination;
      p && (p = L(p), p.forEach((f) => f.classList.remove(e.params.pagination.paginationDisabledClass))), g(), m(), u();
    }, x = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: p
      } = e.pagination;
      p && (p = L(p), p.forEach((f) => f.classList.add(e.params.pagination.paginationDisabledClass))), h();
    };
    Object.assign(e.pagination, {
      enable: v,
      disable: x,
      render: m,
      update: u,
      init: g,
      destroy: h
    });
  }
  const Mn = `.os-gift {
  background-color: #fff;
  border: none;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  max-width: 334px;
  padding: 0;
}

@media (min-width: 768px) {
  .os-gift {
    max-width: 873px;
    width: 100%;
  }
}

.os-gift::backdrop {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
}

.os-gift .os-wrap {
  padding: 28px 23px 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .os-gift .os-wrap {
    padding: 28px 50px;
  }
}

.os-gift .os-close {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .os-gift .os-close {
    top: 0;
  }
}

.os-gift .os-close:focus,
.os-gift .os-close:hover,
.os-gift .os-close:active {
  outline: none;
  border: none;
  background: none;
}

.os-gift .os-title {
  color: var(--MSB-UI-Black, var(--H1-Font, #333));
  font-family: 'adobe-garamond-pro', serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  margin: 0;
  text-align: left;
}

@media (min-width: 768px) {
  .os-gift .os-title {
    font-size: 40px;
    line-height: 46px;
    margin-top: 8px;
    text-align: center;
  }
}

.os-gift .os-title span {
  color: rgb(161, 26, 23);
}

.os-gift .os-timer {
  width: 100%;
  background: rgba(161, 26, 23, 0.07);
  color: #333333;
  padding-block: 4px;
  font-size: 15px;
  line-height: 22px;
  font-weight: 400;
  text-align: center;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .os-gift .os-timer {
    font-size: 13px;
  }
}

.os-gift .os-timer span {
  color: rgb(161, 26, 23);
  font-weight: 700;
}

.os-gift .os-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 272px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .os-gift .os-product {
    padding-inline: 36px;
  }
}

.os-gift .os-product img {
  width: 198px;
}

.os-gift .os-product .os-title,
.os-gift .os-product .os-description {
  font-family: 'adobe-garamond-pro', serif;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.5px;
}

.os-gift .os-product .os-price {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 14px;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
}

.os-gift .os-product .os-price .old {
  color: rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: line-through;
}

.os-gift .os-product .os-price .new {
  color: rgb(161, 26, 23);
  font-size: 16px;
}

.os-gift .os-product .os-colors {
  display: flex;
  justify-content: center;
  gap: 6px;
  padding-top: 14px;
}

.os-gift .os-product .os-colors .os-color {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
  width: 20px;
  height: 20px;
  transition: outline 0.3s;
}

.os-gift .os-product .os-colors .os-color.active {
  outline: 1px solid black;
  outline-offset: 2px;
}

.os-gift .os-product .os-colors .os-color img {
  max-width: 20px;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.os-gift .swiper-button-next,
.os-gift .swiper-button-prev {
  &::after {
    content: '';
    font-family: serif;
    width: 12px;
    height: 18px;
    background-image: url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18"><path d="m1.625 0-2.25 2.25L6.125 9l-6.75 6.75L1.625 18l6.75-6.75L10.625 9l-2.25-2.25L1.625 0Z" clip-rule="evenodd" fill="%23B68B51" fill-rule="evenodd"/></svg>');
    background-repeat: no-repeat;
  }
}

.os-gift .swiper-button-prev::after {
  transform: rotate(180deg);
}

.os-gift .os-note {
  margin-top: 8px;
  color: rgb(51, 51, 51);
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
}

@media (max-width: 768px) {
  .os-gift .os-note {
    margin-top: 8px;
  }
}

.os-gift .os-promo-note {
  margin-inline: auto;
  margin-top: 14px;
  width: 100%;
  max-width: 272px;
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
}

@media (max-width: 768px) {
  .os-gift .os-promo-note {
    margin-top: 8px;
  }
}

.os-gift .os-actions {
  display: flex;
  justify-content: center;
  margin-top: 22px;
}

.os-gift .os-actions.os-mobile {
  margin-top: 8px;
}

@media (min-width: 768px) {
  .os-gift .os-actions.os-mobile {
    display: none;
  }
}

@media (max-width: 767px) {
  .os-gift .os-actions.os-desktop {
    display: none;
  }
}

.os-gift .os-actions button,
.os-gift .os-actions a {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(161, 26, 23);
  border: none;
  width: 100%;
  min-height: 54px;
  color: rgb(255, 255, 255);
  font-family: Arial;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  min-width: 200px;
  max-width: 272px;
  width: 100%;
  padding-inline: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.os-gift .os-actions button:hover,
.os-gift .os-actions a:hover {
  text-decoration: none;
}

@media (min-width: 768px) {
  .os-gift .os-actions button:not([data-btn='popup-checkout']),
  .os-gift .os-actions a:not([data-btn='popup-checkout']) {
    font-size: 12px;
    min-height: 48px;
  }
}

[data-step='2'] .os-gift .os-actions {
  margin-top: 14px;
}

@media (max-width: 768px) {
  [data-step='2'] .os-gift .os-actions {
    margin-top: 8px;
  }
}

.os-gift .swiper-pagination {
  margin-top: 8px;
  position: static;
}

.os-gift .swiper-pagination .swiper-pagination-bullets {
  background: rgb(232, 232, 232);
}

.os-gift .swiper-pagination .swiper-pagination-bullet-active {
  background: rgb(182, 139, 81);
}`, On = `/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */

/* FONT_START */
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */
`, Bn = `:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}
.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}
.swiper-button-prev svg,
.swiper-button-next svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: center;
}
.swiper-rtl .swiper-button-prev svg,
.swiper-rtl .swiper-button-next svg {
  transform: rotate(180deg);
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-lock {
  display: none;
}
/* Navigation font start */
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: 'prev';
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: 'next';
}
/* Navigation font end */
`, zn = `:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-border-radius: 50%;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: var(--swiper-pagination-bottom, 8px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
          appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet:only-child {
  display: none !important;
}
.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: var(--swiper-pagination-right, 8px);
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform,
        200ms top;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform,
        200ms left;
}
.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform,
    200ms right;
}
/* Fraction */
.swiper-pagination-fraction {
  color: var(--swiper-pagination-fraction-color, inherit);
}
/* Progress */
.swiper-pagination-progressbar {
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}
.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-lock {
  display: none;
}
`, $n = {
    modules: [In, Ln],
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 35,
    centeredSlides: !0,
    loop: !0,
    pagination: {
      el: ".swiper-pagination",
      clickable: !0
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
        centeredSlides: !0
      },
      768: {
        loop: !1,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: !1
      }
    }
  };
  class Dn {
    constructor({ country: e }) {
      this.giftAdded = !1, this.selectedColors = {}, this.country = e, this.baseUrl = this.country === O.US ? "https://us.maxwellscottbags.com/" : this.country === O.AU ? "https://au.maxwellscottbags.com/" : this.country === O.IE ? "https://ie.maxwellscottbags.com/" : this.country === O.CA ? "https://ca.maxwellscottbags.com/" : this.country === O.NZ ? "https://nz.maxwellscottbags.com/" : "https://www.maxwellscottbags.com/", this.init();
    }
    init() {
      this.render(), this.closePopupHandlers(), this.colorSelectionHandler(), this.addGiftHandler();
    }
    render() {
      var s, o;
      const e = (
        /* HTML */
        `<dialog id="gift-popup" class="os-dialog os-gift">
      <div class="os-wrap">
        <button type="button" class="os-close">${ce}</button>
        <div data-step="1">
          ${R.includes(this.country) ? (
          /* HTML */
          `<h2 class="os-title">
                Check out now and get<br class="os-mobile" />
                a <br class="os-desktop" />
                <span>free gift & free delivery</span>
              </h2>`
        ) : (
          /* HTML */
          `<h2 class="os-title">
                Complete your purchase and <br class="os-desktop" />
                get a <span>free gift!</span>
              </h2>`
        )}

          <div class="os-timer">Offer expires in <span>10:00</span></div>

          <div class="os-content">
            <div class="swiper">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                ${U.map(
          (r) => (
            /* HTML */
            `<div class="swiper-slide">
                        <div class="os-product" data-product-id="${r.id}">
                          <img src="${r.colours["Chestnut Tan"]}" alt="${r.name}" />
                          <div class="os-title">${r.name}</div>
                          <div class="os-description">${r.description}</div>
                          <div class="os-price">
                            <span class="old">${r.price[this.country]}</span
                            ><span class="new">${Pe[this.country]}0.00</span>
                          </div>
                          <div class="os-colors">
                            ${Object.keys(r.colours).map(
              (l) => (
                /* HTML */
                `<button
                                    title="${l}"
                                    class="os-color ${l === "Chestnut Tan" ? "active" : ""} "
                                    data-color="${l}"
                                  >
                                    <img src="${it[l]}" alt="${l}" />
                                  </button>`
              )
            ).join("")}
                          </div>
                          <div class="os-actions os-desktop">
                            <button data-btn="item-action">Add gift to my order</button>
                          </div>
                        </div>
                      </div>`
          )
        ).join("")}
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-scrollbar"></div>
            </div>
            <div class="os-note">*Choose either a free gift or a discount promo code</div>
            <div class="os-actions os-mobile">
              <button data-btn="popup-action">Add gift to my order</button>
            </div>
          </div>
        </div>
        <div data-step="2" style="display:none">
          ${R.includes(this.country) ? (
          /* HTML */
          `<h2 class="os-title">
                Success! Your <span>free gift & free delivery</span> has <br class="os-desktop" />
                been added to your order
              </h2>`
        ) : (
          /* HTML */
          '<h2 class="os-title">Success! Your <span>free gift</span> has been added to <br class="os-desktop"> your order</span></h2>'
        )}
          <div class="os-content">
            <div class="os-product">
              <img src="" alt="" />
              <div class="os-title">The Ponte</div>
              <div class="os-description">Leather Key</div>
              <div class="os-price">
                <span class="old"></span><span class="new">${Pe[this.country]}0.00</span>
              </div>
            </div>
            <div class="os-promo-note">
              *Please note that if you use a promo code, your gift will be automatically removed from your shopping
              cart.
            </div>
            <div class="os-actions">
              <a href="/checkout" data-btn="popup-checkout">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    </dialog>`
      );
      document.head.insertAdjacentHTML("beforeend", `<style>${Mn}</style>`), document.body.insertAdjacentHTML("beforeend", e), this.popup = document.querySelector("#gift-popup"), this.initSwiper();
      const t = (s = this.popup) == null ? void 0 : s.querySelectorAll(".os-actions button");
      t && t.forEach((r) => {
        r.addEventListener("click", () => {
          var a, c;
          const l = (c = (a = this.popup) == null ? void 0 : a.querySelector(".os-title")) == null ? void 0 : c.textContent;
          P("exp_pop_car_retent_2_but_popupfree_add", `Add gift - ${l}`, "click", "Pop up free gift");
        });
      });
      const i = (o = this.popup) == null ? void 0 : o.querySelector('[data-btn="popup-checkout"]');
      i && i.addEventListener("click", (r) => {
        var a, c, d;
        const l = (c = (a = this.popup) == null ? void 0 : a.querySelector(".os-title")) == null ? void 0 : c.textContent;
        P(
          "exp_pop_car_retent_2_but_popupfree_proc",
          `Proceed to checkout - ${l}`,
          "click",
          "Pop up free gift"
        ), (d = this.popup) == null || d.close();
      });
    }
    colorSelectionHandler() {
      if (!this.popup)
        return;
      this.popup.querySelectorAll(".os-color").forEach((t) => {
        t.addEventListener("click", (i) => {
          var l;
          const s = i.currentTarget, o = s.closest(".os-colors");
          (l = o == null ? void 0 : o.querySelectorAll(".os-color")) == null || l.forEach((a) => a.classList.remove("active")), s.classList.add("active");
          const r = s.closest(".os-product");
          if (r) {
            const a = r.dataset.productId;
            if (!a)
              return;
            this.selectedColors[a] = s.dataset.color;
            const c = U.find((d) => d.id === parseInt(a));
            if (c && this.selectedColors[a]) {
              const d = c.colours[this.selectedColors[a]], u = r.querySelector("img");
              u && (u.src = d);
            }
          }
        });
      });
    }
    addGiftHandler() {
      if (!this.popup)
        return;
      const e = (r) => {
        sessionStorage.setItem(Q, r);
      }, t = (r) => {
        const l = this.selectedColors[r] || "Chestnut Tan";
        e(Ce);
        const a = {
          couponCode: Ce
        }, c = `${this.baseUrl}/scommerce/minicart/couponcode/`, d = `${this.baseUrl}amasty_promo/cart/add/`, u = nt[l], m = {
          uenc: "aHR0cHM6Ly93d3cubWF4d2VsbHNjb3R0YmFncy5jb20vY2hlY2tvdXQva2xhcm5hLw,",
          isPromoItems: !0,
          product_id: r,
          "super_attribute[92]": u,
          form_key: Ze("form_key")
        };
        console.log("giftData", m), jQuery.ajax({
          type: "POST",
          url: c,
          data: a
        }).done(function(g) {
          jQuery.ajax({
            type: "POST",
            url: d,
            data: m
          }).done(function(h) {
            console.log("gift added"), this.giftAdded = !0;
          });
        });
      }, i = (r) => {
        var c, d;
        t(r);
        const l = (c = this.popup) == null ? void 0 : c.querySelector('[data-step="1"]'), a = (d = this.popup) == null ? void 0 : d.querySelector('[data-step="2"]');
        if (l && a) {
          l.style.display = "none", a.style.display = "block";
          const u = U.find((x) => x.id === parseInt(r)), m = a.querySelector(".os-product .os-title"), g = a.querySelector(".os-product img"), h = a.querySelector(".os-product .os-description"), v = a.querySelector(".os-product .os-price .old");
          u && m && g && h && v && (m.textContent = u.name, g.src = u.colours[this.selectedColors[r]] || u.colours["Chestnut Tan"], h.textContent = u.description, v.textContent = u.price[this.country]);
        }
      };
      this.popup.querySelectorAll('#gift-popup [data-btn="item-action"]').forEach((r) => {
        r == null || r.addEventListener("click", (l) => {
          const c = l.currentTarget.closest(".os-product");
          if (!c)
            return;
          const d = c.dataset.productId;
          d && i(d);
        });
      });
      const o = this.popup.querySelector('#gift-popup [data-btn="popup-action"]');
      o == null || o.addEventListener("click", () => {
        const r = document.querySelector("#gift-popup .swiper-slide-active .os-product"), l = r == null ? void 0 : r.dataset.productId;
        !r || !l || i(l);
      });
    }
    startTimer() {
      let e = 10, t = 0;
      if (!this.popup)
        return;
      const i = this.popup.querySelector(".os-timer span");
      this.timerId = window.setInterval(() => {
        if (t === 0)
          if (e === 0) {
            this.stopTimer();
            return;
          } else
            e--, t = 59;
        else
          t--;
        const s = `${e.toString().padStart(2, "0")}:${t.toString().padStart(2, "0")}`;
        i && (i.textContent = s);
      }, 1e3);
    }
    stopTimer() {
      this.timerId !== null && (window.clearInterval(this.timerId), this.timerId = null);
    }
    initSwiper() {
      this.swiper = new D("#gift-popup .swiper", $n), document.head.insertAdjacentHTML("beforeend", `<style>${On}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${Bn}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${zn}</style>`);
    }
    show(e = !0) {
      var s;
      if (!this.popup || (e ? JSON.parse(sessionStorage.getItem(Te) || "false") : !1))
        return;
      this.popup.showModal(), this.startTimer(), sessionStorage.setItem(Te, JSON.stringify(!0));
      const i = (s = this.popup.querySelector(".os-title")) == null ? void 0 : s.textContent;
      F(
        "#gift-popup",
        "exp_pop_car_retent_2_vis_popupfree",
        `Pop up view - ${i}`,
        "Pop up free gift"
      );
    }
    closePopupHandlers() {
      var i;
      const e = () => {
        var o, r;
        const s = (r = (o = this.popup) == null ? void 0 : o.querySelector(".os-title")) == null ? void 0 : r.textContent;
        P("exp_pop_car_retent_2_but_popupfree_close", `Close - ${s}`, "click", "Pop up free gift");
      };
      if (!this.popup)
        return;
      const t = this.popup.querySelector(".os-close");
      t == null || t.addEventListener("click", () => {
        var s;
        (s = this.popup) == null || s.close(), this.stopTimer(), e();
      }), (i = this.popup) == null || i.addEventListener("click", (s) => {
        var o;
        s.target === this.popup && ((o = this.popup) == null || o.close(), this.stopTimer(), e());
      });
    }
  }
  const Gn = {
    uk: {
      men: [
        {
          title: "Men's wallets",
          image: "img/exit_popup/mens_wallets.png",
          link: "/men/personalised-leather-wallet-mens.html"
        },
        {
          title: "Men's briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/luxury-leather-briefcases.html"
        },
        {
          title: "Men's luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/luxury-leather-luggage.html"
        }
      ],
      women: [
        {
          title: "Women's Handbags",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/classic-ladies-leather-handbags.html"
        },
        {
          title: "Women's Purses",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/classic-leather-purses-ladies.html"
        },
        {
          title: "Women's Briefcases",
          image: "img/exit_popup/womens_briefcases.png",
          link: "/women/business/ladies-best-leather-briefcases.html"
        }
      ]
    },
    us: {
      men: [
        {
          title: "Men's wallets",
          image: "img/exit_popup/mens_wallets.png",
          link: "/men/leather-wallets.html"
        },
        {
          title: "Men's briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/best-leather-briefcases.html"
        },
        {
          title: "Men's luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/leather-duffel-bags.html"
        }
      ],
      women: [
        {
          title: "Women's Purses",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/leather-handbags-purses.html"
        },
        {
          title: "Women's Wallets",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/ladies-leather-wallets.html"
        },
        {
          title: "Women's briefcases",
          image: "img/exit_popup/womens_briefcases.png",
          link: "/women/business/ladies-leather-briefcases.html"
        }
      ]
    },
    au: {
      men: [
        {
          title: "Men's wallets",
          image: "img/exit_popup/mens_wallets.png",
          link: "/men/leather-wallets.html"
        },
        {
          title: "Men's briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/leather-briefcases.html"
        },
        {
          title: "Men's luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/luxury-leather-luggage.html"
        }
      ],
      women: [
        {
          title: "Women's Handbags",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/leather-handbags.html"
        },
        {
          title: "Women's Purses",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/classic-leather-purses-ladies.html"
        },
        {
          title: "Women's Briefcases",
          image: "img/exit_popup/womens_briefcases.png",
          link: "/women/business/ladies-leather-briefcases.html"
        }
      ]
    },
    ca: {
      men: [
        {
          title: "Men's wallets",
          image: "img/exit_popup/mens_wallets.png",
          link: "/men/personalised-leather-wallet-mens.html"
        },
        {
          title: "Men's briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/luxury-leather-briefcases.html"
        },
        {
          title: "Men's luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/luxury-leather-luggage.html"
        }
      ],
      women: [
        {
          title: "Women's Handbags",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/classic-ladies-leather-handbags.html"
        },
        {
          title: "Women's Purses",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/classic-leather-purses-ladies.html"
        },
        {
          title: "Women's Briefcases",
          image: "img/exit_popup/womens_briefcases.png",
          link: "/women/business/ladies-best-leather-briefcases.html"
        }
      ]
    }
  }, Hn = `.crs-promo {
  background-color: #fff;
  border: none;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  max-width: 334px;
  padding: 0;
}
.crs-dialog__wrap {
  padding: 28px 14px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs-dialog::backdrop {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
}
.crs-dialog__close {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
}
.crs-dialog__close:focus,
.crs-dialog__close:hover,
.crs-dialog__close:active {
  outline: none;
  border: none;
  background: none;
}
.crs-dialog__title {
  color: var(--MSB-UI-Black, var(--H1-Font, #333));
  font-family: 'adobe-garamond-pro', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  margin: 0;
}
#cart-popup .crs-dialog__title {
  text-align: left;
}
.crs-dialog__title span {
  color: var(--MSB-UI-Red, var(--H1-Font, #a11a17));
  text-transform: uppercase;
}
.crs-dialog__descr {
  color: var(--MSB-UI-Dark-gray, #646464);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
.crs-promo__blocks {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: -14px;
  width: calc(100% + 28px);
}
.crs-promo__block {
  background: var(--H1-Font, #333);
  display: grid;
  grid-template-columns: 145px 1fr;
  grid-template-rows: 1fr 1fr;
  height: 133px;
}
.crs-promo__block-img {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.crs-promo__block-header {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  padding: 12px;
  padding-bottom: 0;
  min-height: 20px;
}
.crs-promo__block-title {
  color: #fff;
  font-family: 'adobe-garamond-pro', serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 144.444% */
  text-transform: uppercase;
  margin: 0;
}
.crs-promo__block-action {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding: 12px;
}
.crs-promo__block-link {
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 32px;
  letter-spacing: 2px;
  &:hover {
    text-decoration: none;
  }
}
.crs-dialog__action {
  margin-top: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.crs-promo .crs-dialog__wrap {
  padding-bottom: 0;
}

@media screen and (min-width: 768px) {
  .crs-dialog {
    max-width: 800px;
  }
  .crs-dialog__wrap {
    padding: 35px 50px;
  }

  .crs-dialog__title,
  .crs-dialog__descr {
    text-align: center;
  }
  .crs-dialog__title {
    font-size: 40px;
    line-height: 46px;
  }
  .crs-promo__blocks {
    flex-direction: row;
    gap: 20px;
    width: 100%;
    justify-content: center;
    margin: auto;
    margin-bottom: 20px;
  }
  .crs-promo__block {
    width: 240px;
    grid-template-columns: 1fr;
    grid-template-rows: 72px 1fr 72px;
    height: max-content;
    background: #fff;
  }
  .crs-promo__block-header {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background:
      linear-gradient(0deg, var(--H1-Font, #333) 0%, var(--H1-Font, #333) 100%),
      lightgray 0px -72.789px / 100% 450.802% no-repeat;
  }
  .crs-promo__block-img {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 260px;
  }
  .crs-promo__block-action {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    padding: 0;
    padding-top: 20px;
  }
  .crs-promo__block-link {
    width: 100%;
    background: #a11a17;
    color: #fff !important;
  }
}
`;
  class qn {
    constructor({ country: e }) {
      this.closePopup = () => {
        var t;
        (t = this.popup) == null || t.close(), P("exp_pop_car_retent_2_explore_close", "Close -Pop up Explore our best", "click", "Pop up Explore our best");
      }, this.country = e, this.init();
    }
    init() {
      this.render(), this.closePopupHandlers();
    }
    render() {
      const e = (
        /* HTML */
        `<dialog id="promo-popup" class="crs-dialog crs-promo">
      <div class="crs-dialog__wrap">
        <button class="crs-dialog__close">${ce}</button>
        <h2 class="crs-dialog__title">Explore our best</h2>
        <p class="crs-dialog__descr">Take a closer look at our top picks crafted just for you.</p>
        <div class="crs-dialog__content crs-promo__content"></div>
      </div>
    </dialog>`
      );
      document.head.insertAdjacentHTML("beforeend", `<style>${Hn}</style>`), document.body.insertAdjacentHTML("beforeend", e), this.popup = document.querySelector("#promo-popup");
    }
    show(e = !0) {
      var c;
      if (!this.popup || (e ? sessionStorage.getItem(ke) : !1) || location.pathname.includes("checkout"))
        return;
      const i = JSON.parse(localStorage.getItem("__kla_viewed")) || [], s = this.getGenderByViewedProducts(i), r = this.getGenderByCurrentPage() || s, l = this.popup.querySelector(".crs-promo__content");
      l.innerHTML = /* HTML */
      `
      <div class="crs-promo__blocks">
        ${Gn[this.country.toLowerCase()][r].map((d) => (
        /* HTML */
        `
              <div class="crs-promo__block">
                <img class="crs-promo__block-img" src="${Ke}${d.image}" alt="" />
                <div class="crs-promo__block-header">
                  <h3 class="crs-promo__block-title">${d.title}</h3>
                </div>
                <div class="crs-promo__block-action">
                  <a class="crs-promo__block-link" href="${d.link}">Shop Now</a>
                </div>
              </div>
            `
      )).join("")}
      </div>
    `, this.popup.showModal(), sessionStorage.setItem(ke, JSON.stringify(!0)), F(
        "#promo-popup",
        "exp_pop_car_retent_2_but_youlisuca_explore",
        "Pop up view",
        "Pop up Explore our best"
      );
      const a = (c = this.popup) == null ? void 0 : c.querySelectorAll(".crs-promo__block");
      a && a.forEach((d, u) => {
        var h;
        const m = d.querySelector(".crs-promo__block-link"), g = (h = d.querySelector(".crs-promo__block-title")) == null ? void 0 : h.textContent;
        !m || !g || m.addEventListener("mousedown", () => {
          P("exp_pop_car_retent_2_but_popsale_title", `${g} - Shop Now`, "click", "Pop up Explore our best");
        });
      });
    }
    getGenderByViewedProducts(e) {
      const t = {
        men: ["men", "father", "him"],
        women: ["women", "mother", "her"]
      }, i = e.reduce(
        (s, o) => {
          const r = o[0].Categories;
          for (let l of r) {
            const a = l.toLowerCase().split(" ");
            t.men.some((c) => a.includes(c)) && s.men++, t.women.some((c) => a.includes(c)) && s.women++;
          }
          return s;
        },
        { men: 0, women: 0 }
      );
      return i.men > i.women ? "men" : "women";
    }
    getGenderByCurrentPage() {
      return location.pathname.includes("women") || location.pathname.includes("men") ? location.pathname.includes("men") ? "men" : "women" : null;
    }
    closePopupHandlers() {
      if (!this.popup)
        return;
      const e = this.popup.querySelector(".crs-dialog__close");
      e == null || e.addEventListener("click", this.closePopup), this.popup.addEventListener("click", (t) => {
        t.target === this.popup && (this.closePopup(), P("exp_pop_car_retent_2_explore_close", "Close -Pop up Explore our best", "click", "Pop up Explore our best"));
      });
    }
  }
  class Nn {
    constructor({ country: e, device: t }) {
      this.getTotalCartValue = async () => {
        var r, l;
        const i = (l = (r = JSON.parse(localStorage.getItem("mage-cache-storage"))) == null ? void 0 : r.cart) == null ? void 0 : l.items;
        if (!i)
          return 0;
        this.priceContainer && this.priceContainer.remove(), this.priceContainer = document.createElement("div"), this.priceContainer.classList.add("price_container", "os-hide"), this.priceContainer.style.display = "none", document.body.appendChild(this.priceContainer), i.forEach((a) => {
          for (let c = 0; c < a.qty; c++)
            this.priceContainer.insertAdjacentHTML("beforeend", a.product_price);
        });
        const s = Array.from(this.priceContainer.querySelectorAll(".price:not(.minicart-regular-price .price)"));
        let o = 0;
        return o = await new Promise((a) => {
          setTimeout(() => {
            const c = s.map((d) => parseFloat(d.innerText.replace(/[^0-9.-]+/g, ""))).reduce((d, u) => d + u, 0);
            a(c);
          }, 200);
        }), o;
      }, this.idleTime = 40, this.idleTimeAfterAddToCart = 45, this.sessionTime = 180, this.device = t, this.country = e, this.cartPopupViewCount = 0, this.init();
    }
    init() {
      this.promoPopup = new qn({ country: this.country }), this.cartPopup = new dt({ country: this.country, device: this.device }), this.giftPopup = new Dn({ country: this.country }), this.handleAddToCart(), this.triggers();
    }
    triggers() {
      this.setupSessionTimeTriggerToPromoPopup(), this.setupSessionTimeTriggerToCartAndGiftPopup(), this.setupAddToCartTrigger(), this.setupScrollTrigger(), this.setupMouseLeaveAndFocusTriggers(), this.setupCartPopupTrigger(), this.setupIdleTimeTrigger(this.idleTime, () => {
        this.isUserWatchedPopup() && !this.checkProductsInCart() && (console.log("Idle time"), this.promoPopup.show());
      });
    }
    isUserWatchedPopup() {
      const e = sessionStorage.getItem(V);
      return e ? e === "true" : !1;
    }
    checkProductsInCart() {
      var t, i;
      const e = (i = (t = JSON.parse(localStorage.getItem("mage-cache-storage"))) == null ? void 0 : t.cart) == null ? void 0 : i.items;
      return (e == null ? void 0 : e.length) > 0;
    }
    setupCartPopupTrigger() {
      const e = document.querySelector(".block-minicart"), t = document.querySelector(".mobile-basket-block");
      let i = !1, s = !1;
      const o = () => {
        let d = sessionStorage.getItem("cartPopupViewCount");
        if (d || (d = "1"), sessionStorage.setItem("cartPopupViewCount", (parseInt(d) + 1).toString()), parseInt(d) >= 2) {
          const u = sessionStorage.getItem("productAddedTime");
          u && Date.now() - parseInt(u) > 12e4 && (console.log("Cart popup view count:", d), this.showGiftOrCartPopup(), sessionStorage.removeItem("cartPopupViewCount"), sessionStorage.removeItem("productAddedTime"));
        }
      }, r = (d, u) => {
        d.forEach((m) => {
          m.type === "attributes" && (m.attributeName === "style" || m.attributeName === "class") && ((m.attributeName === "style" ? m.target.style.display === "block" : m.target.classList.contains("active")) && _e("#mini-cart") ? ((u === a && !i || u === c && !s) && o(), u === a ? i = !0 : u === c && (s = !0)) : u === a ? i = !1 : u === c && (s = !1));
        });
      }, l = { attributes: !0, attributeFilter: ["style", "class"] };
      let a, c;
      this.device === j.Desktop && e && (a = new MutationObserver((d) => r(d, a)), a.observe(e, l)), this.device === j.Mobile && t && (c = new MutationObserver((d) => r(d, c)), c.observe(t, l));
    }
    handleAddToCart() {
      const e = _e("#product-addtocart-button");
      e && (e == null || e.addEventListener("click", () => {
        sessionStorage.setItem("productAddedTime", Date.now().toString());
      }));
    }
    setupIdleTimeTrigger(e, t) {
      let i, s = 0;
      const o = () => {
        clearInterval(i), s = 0, i = setInterval(r, 1e3);
      }, r = () => {
        s++, s >= e && (t(), o());
      };
      window.addEventListener("load", o), window.addEventListener("mousemove", o), window.addEventListener("mousedown", o), window.addEventListener("touchstart", o), window.addEventListener("click", o), window.addEventListener("keypress", o), i = setInterval(r, 1e3);
    }
    setupAddToCartTrigger() {
      this.setupIdleTimeTrigger(this.idleTimeAfterAddToCart, () => {
        this.showGiftOrCartPopup();
      });
    }
    async showGiftOrCartPopup(e = !0) {
      const t = this.checkProductsInCart(), i = await this.getTotalCartValue();
      t && (i >= 300 && i <= 600 ? this.giftPopup.show(e) : this.cartPopup.show(e));
    }
    setupSessionTimeTriggerToCartAndGiftPopup() {
      const e = "productAddedTime", t = () => {
        let i = sessionStorage.getItem(e);
        const s = setInterval(() => {
          this.sessionTime * 1e3 - (Date.now() - Number(i)) <= 0 && (console.log("Session time is over for cart of gift popup"), this.showGiftOrCartPopup(), clearInterval(s));
        }, 1e3);
      };
      if (sessionStorage.getItem(e))
        t();
      else {
        const i = new MutationObserver(() => {
          sessionStorage.getItem(e) && (i.disconnect(), console.log("Session time is start for cart of gift popup"), t());
        });
        i.observe(document, { childList: !0, subtree: !0 });
      }
    }
    setupSessionTimeTriggerToPromoPopup() {
      const e = "crsVisitTime", t = () => {
        let i = sessionStorage.getItem(e);
        i || (sessionStorage.setItem(e, Date.now().toString()), i = sessionStorage.getItem(e));
        const s = setInterval(() => {
          if (18e4 - (Date.now() - Number(i)) <= 0) {
            console.log("Session time is over");
            const r = this.checkProductsInCart();
            this.isUserWatchedPopup() && !r && this.promoPopup.show(), this.isUserWatchedPopup() || this.waitForUserWatchedPopup(s), clearInterval(s);
          }
        }, 1e3);
      };
      if (sessionStorage.getItem(V))
        t();
      else {
        const i = new MutationObserver(() => {
          sessionStorage.getItem(V) && (i.disconnect(), t());
        });
        i.observe(document, { childList: !0, subtree: !0 });
      }
    }
    waitForUserWatchedPopup(e) {
      setTimeout(() => {
        this.isUserWatchedPopup() ? (this.promoPopup.show(), e && clearInterval(e)) : this.waitForUserWatchedPopup(e);
      }, 50);
    }
    setupScrollTrigger() {
      window.addEventListener("scroll", () => {
        this.showPopupsOnFastScroll(), this.showPopupsOnPageCenter(), this.showPopupsOnPageBottom();
      });
    }
    showPopupsOnFastScroll() {
      const e = Qe(), t = this.device === j.Desktop ? 70 : 120;
      (e < -t || e > t) && (console.log("Fast scroll"), this.showPopupsBasedOnCartStatus());
    }
    showPopupsOnPageCenter() {
      const e = document.documentElement.scrollHeight, t = window.innerHeight, i = window.scrollY, s = this.checkProductsInCart();
      i / (e - t) * 100 >= 50 && this.isUserWatchedPopup() && !s && (console.log("Page center"), this.promoPopup.show());
    }
    showPopupsOnPageBottom() {
      this.device === "Mobile" && window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && (console.log("Page bottom"), this.showPopupsBasedOnCartStatus());
    }
    setupMouseLeaveAndFocusTriggers() {
      this.device === "Desktop" && document.addEventListener("mouseout", (e) => {
        (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) && (console.log("Mouse leave"), this.showPopupsBasedOnCartStatus());
      }), window.addEventListener("focus", () => {
        this.showPopupsBasedOnCartStatus();
      });
    }
    async showPopupsBasedOnCartStatus() {
      const e = this.checkProductsInCart();
      console.log("isProductInCart:", e), e && this.showGiftOrCartPopup(), this.isUserWatchedPopup() && !e && this.promoPopup.show();
    }
  }
  const Fn = `.ampromo-overlay {
  opacity: 0 !important;
}

.ampromo-overlay.os-show {
  opacity: 1 !important;
}

.messages .message-error {
  display: none !important;
}

`;
  class Vn {
    constructor({ country: e }) {
      this.country = e, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Fn}</style>`), sessionStorage.removeItem(Q);
    }
  }
  class jn {
    constructor({ country: e }) {
      this.cartItem = null, this.country = O.UK, this.country = e;
    }
    updateCart() {
      const e = sessionStorage.getItem(le), t = sessionStorage.getItem("CRS_DISCOUNT");
      if (!e || !t)
        return;
      const { giftId: i, colour: s } = JSON.parse(e);
      this.addGiftToCart({ giftId: i, colour: s });
    }
    async addGiftToCart({ giftId: e, colour: t }) {
      var g;
      const i = U.find((h) => h.id === parseInt(e));
      if (!i)
        return;
      const s = (
        /* HTML */
        ` <li class="item product product-item" role="product-item" data-os="product-item" data-osid="${e}">
      <div class="product row no-gutters flex-nowrap">
        <!-- ko if: product_has_url -->
        <div class="col-3">
          <a
            data-bind="attr: {href: product_url, title: product_name}"
            tabindex="-1"
            class="product-item-photo"
            href="${i.url}"
            title="FREE -  ${i.name}"
          >
            <!-- ko foreach: $parent.getRegion('itemImage') -->
            <!-- ko template: {name: getTemplate(), data: item.product_image} -->
            <span class="product-image-container" data-bind="style: {width: width/2 + 'px'}" style="width: 75px;">
              <span
                class="product-image-wrapper"
                data-bind="style: {'padding-bottom': height/width*100 + '%'}"
                style="padding-bottom: 100%;"
              >
                <img
                  class="product-image-photo"
                  data-bind="attr: {src: src, alt: alt}, style: {width: 'auto', height: 'auto'}"
                  src="${i.colours[t]}"
                  alt="${i} - ${t}"
                  style="width: auto; height: auto;"
                />
              </span>
            </span>
            <!-- /ko -->
            <!-- /ko -->
          </a>
        </div>
        <div class="col-9">
          <div class="row no-gutters">
            <div class="col-7">
              <span class="product-item-name tests">
                <!-- ko if: product_has_url -->
                <a data-bind="attr: {href: product_url}, html: product_name" href="${i.url}">FREE - ${i.name}</a>
                <!-- /ko -->
                <!-- ko ifnot: product_has_url --><!-- /ko -->
              </span>
            </div>
            <div class="col-5 text-right">
              <!-- ko ifnot: canApplyMsrp -->
              <!-- ko foreach: $parent.getRegion('priceSidebar') -->
              <!-- ko template: {name: getTemplate(), data: item.product_price, as: 'price'} -->
              <div class="price-container">
                <span class="price-wrapper" data-bind="html: price">
                  <span class="price-including-tax" data-label="Incl. VAT">
                    <span class="minicart-price">
                      <span class="minicart-regular-price"><span class="price">${i.price[this.country]}</span></span>
                      <span class="minicart-sprcial-price-maroon"> <span class="price">£0.00</span> </span></span
                    >
                  </span>
                </span>
              </div>
              <!-- /ko -->
              <!-- /ko -->
              <!-- /ko -->
            </div>
          </div>
          <div class="product-item-details" role="tablist">
            <!-- ko if: options.length -->
            <div
              class="product options"
              data-collapsible="true"
              role="tab"
              aria-selected="false"
              aria-expanded="false"
              tabindex="0"
            >
              <!--<span data-role="title" class="toggle">&lt;!&ndash; ko i18n: 'See Details' &ndash;&gt;&lt;!&ndash; /ko &ndash;&gt;</span>-->

              <div data-role="content" class="content">
                <strong class="subtitle"
                  ><!-- ko i18n: 'Options Details' --><span>Options Details</span
                  ><!-- /ko --></strong
                >
                <div class="product options list">
                  <div class="option-wrapper">
                    <div
                      class="label"
                      data-bind="i18n: 'Qty', attr: {for: 'cart-item-'+item_id+'-qty'}"
                      for="cart-item-649887-qty"
                    >
                      Qty
                    </div>
                    <div class="values">
                      <span data-bind="text: qty">1</span>
                    </div>
                  </div>

                  <!-- ko foreach: { data: options, as: 'option' } -->
                  <div class="option-wrapper">
                    <div class="label"><!-- ko text: option.label -->Colour<!-- /ko --></div>
                    <div class="values">
                      <!-- ko if: Array.isArray(option.value) --><!-- /ko -->
                      <!-- ko ifnot: Array.isArray(option.value) -->
                      <span data-bind="text: option.value">${t}</span>
                      <!-- /ko -->
                    </div>
                  </div>
                  <!-- /ko -->
                  <!-- ko if: item.gift_message_show--><!-- /ko -->
                </div>
              </div>
            </div>
            <!-- /ko -->
            <div class="product-item-pricing"><!-- ko if: canApplyMsrp --><!-- /ko --></div>
          </div>
        </div>
        <!-- /ko -->
        <!-- ko ifnot: product_has_url --><!-- /ko -->
      </div>
      <div class="row no-gutters">
        <div class="col-11"><!-- ko if: product_out_of_stock_message --><!-- /ko --></div>
        <div class="col-1">
          <div class="product actions">
            <div class="secondary">
              <a
                href="#"
                data-bind="attr: {'data-cart-item': item_id, title: $t('Remove item')}"
                class="action delete os-delete"
                title="Remove"
              >
                <i class="fas fa-trash"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>`
      ), o = (g = U.find((h) => h.id === parseInt(e))) == null ? void 0 : g.name;
      sessionStorage.setItem(le, JSON.stringify({ giftId: e, colour: t, name: o }));
      const r = await W(".mobile-basket-block #mini-cart"), l = await W(".block-minicart #mini-cart"), a = r, c = l;
      c && c.insertAdjacentHTML("beforeend", s), a && a.insertAdjacentHTML("beforeend", s);
      const d = document.querySelector(".counter-number"), u = document.querySelector(".mobile-basket__btn span");
      ae(d, "add"), ae(u, "add"), document.querySelectorAll('li.item.product.product-item[data-os="product-item"]').forEach((h) => {
        var x;
        const v = h;
        (x = v.querySelector(".action.delete")) == null || x.addEventListener("click", (p) => {
          p.preventDefault();
          const f = v.dataset.osid;
          document.querySelectorAll(`li.item.product.product-item[data-os="product-item"][data-osid="${f}"]`).forEach((b) => b.remove()), sessionStorage.removeItem(le), ae(d, "remove"), ae(u, "remove");
        });
      });
    }
  }
  function ae(n, e) {
    n && setTimeout(() => {
      var i;
      const t = parseInt(((i = n.textContent) == null ? void 0 : i.replace(/[^\d]/g, "")) || "0");
      n.textContent = `(${(e === "add" ? t + 1 : t - 1).toString()})`;
    }, 0);
  }
  const Rn = `br.os-mobile {
  @media (min-width: 768px) {
    display: none;
  }
}

br.os-desktop {
  @media (max-width: 768px) {
    display: none;
  }
}`, Yn = `.os-popup-title p {
  margin-bottom: 0 !important;
}

.os-popup-title > div[style='line-height: 200%;'] {
  margin-top: 0;
  line-height: 0 !important;
}
.os-popup-title > div[style="line-height: 200%;"]:last-of-type {
  margin-top: 4px;
}
.os-popup-title > div[style="line-height: 200%;"]:last-of-type * {
  line-height: 22px !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  color: #646464 !important;
}

.os-popup-title * :not(div[style="line-height: 200%;"]:last-of-type *) {
  font-family: 'adobe-garamond-pro', serif !important;
  font-size: 40px !important;
  line-height: 46px !important;
}

@media (max-width: 768px) {
  .os-popup-title * :not(div[style="line-height: 200%;"]:last-of-type *) {
    font-size: 32px !important;
    line-height: 40px !important;
  }
}

div[role="group"] label:last-of-type {
  padding-bottom: 0 !important;
}

form.needsclick.os-submitted {
  display: none !important;
}
@media (max-width: 768px) {
  form.needsclick {
    width: 350px !important;
  }

}`;
  class Wn {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Yn}</style>`), console.log("hrere"), W(".os-popup-title").then(() => {
        var t;
        const e = (t = document.querySelector(".os-popup-title")) == null ? void 0 : t.textContent;
        sessionStorage.setItem(V, "true"), F(
          "form.klaviyo-form",
          "exp_pop_car_retent_2_vis_firorduca_view",
          `Pop up view - ${e}`,
          "Pop up Get 10% Off"
        );
      });
    }
  }
  Ue({ name: "Exit Popup For Cart Retention", dev: "OS" }), Xe("exp_pop_car_retent");
  class Un {
    constructor() {
      this.device = screen.width <= 768 ? j.Mobile : j.Desktop, this.country = window.location.host.includes("au") ? O.AU : window.location.host.includes("us") ? O.US : window.location.host.includes("ca") ? O.CA : O.UK, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Rn}</style>`), !location.pathname.includes("checkout") && !location.pathname.includes("sign-up") && (new Ie({ country: this.country, device: this.device }), new Nn({ country: this.country, device: this.device }), new jn({ country: this.country }).updateCart()), location.pathname.includes("sign-up") && (new Ie({ country: this.country, device: this.device }), new Wn()), location.pathname.includes("checkout") && new Vn({ country: this.country });
    }
  }
  new Un();
})();
