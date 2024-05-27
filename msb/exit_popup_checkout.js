(function() {
  "use strict";
  const I = (i, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), console.log(`Event: ${i} | ${e} | ${t} | ${s}`);
  }, Qe = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, R = (i, e, t, s, r = 1, o) => {
    let a = new IntersectionObserver(
      (n) => {
        n.forEach((c) => {
          c.isIntersecting && (a.unobserve(c.target), setTimeout(function() {
            l.observe(c.target);
          }, 1e3 * r));
        });
      },
      {
        threshold: 0.5
      }
    ), l = new IntersectionObserver((n) => {
      n.forEach((c) => {
        c.isIntersecting ? (I(
          e || `view_element_${c.target.id}`,
          t || `View element on screen (${r} sec or more)`,
          "view",
          s || c.target.id
        ), o && o(), a.unobserve(c.target)) : a.observe(c.target), l.unobserve(c.target);
      });
    });
    document.querySelectorAll(i).forEach((n) => {
      a.observe(n);
    });
  };
  function q(i) {
    return new Promise((e) => {
      if (document.querySelector(i))
        return e(document.querySelector(i));
      const t = new MutationObserver(() => {
        document.querySelector(i) && (e(document.querySelector(i)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const Y = (i) => document.querySelectorAll(i), A = (i) => document.querySelector(i), Ke = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, Je = function(i = {}) {
    let e, t, s, r, o = i.delay || 50;
    function a() {
      e = null, r = 0;
    }
    return a(), function() {
      return t = window.scrollY, e !== null && (r = t - e), e = t, clearTimeout(s), s = setTimeout(a, o), r;
    };
  }(), ke = "cartPopupShown", _e = "promoPopupShown", Ce = "giftPopupShown", Ae = "userWatchedPopup", U = "CRS_DISCOUNT", et = "KEY0624", K = "savedGift", tt = "https://conversionratestore.github.io/projects/msb/", Te = (
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
  ), it = (
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
  ), st = (
    /* HTML */
    ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  viewBox="0 0 25 25"
  fill="none"
>
  <g clip-path="url(#clip0_197_63534)">
    <path
      d="M24.1 12.5C24.1 11.3 22.7 10.3 22.4 9.29999C22 8.19999 22.6 6.59999 21.9 5.69999C21.2 4.79999 19.6 4.79999 18.6 4.09999C17.7 3.39999 17.2 1.79999 16.1 1.49999C15 1.09999 13.7 1.99999 12.5 1.99999C11.3 1.99999 10 0.999986 8.90002 1.39999C7.80002 1.79999 7.30002 3.39999 6.40002 3.99999C5.40002 4.69999 3.80002 4.69999 3.10002 5.69999C2.40002 6.59999 2.90002 8.19999 2.60002 9.29999C2.30002 10.4 0.900024 11.3 0.900024 12.5C0.900024 13.7 2.30002 14.7 2.60002 15.7C3.00002 16.8 2.40002 18.4 3.10002 19.3C3.80002 20.2 5.40002 20.2 6.40002 20.9C7.30002 21.6 7.80002 23.2 8.90002 23.5C10 23.8 11.3 22.9 12.5 22.9C13.7 22.9 15 23.9 16.1 23.5C17.2 23.1 17.7 21.6 18.6 20.9C19.5 20.2 21.2 20.2 21.9 19.3C22.6 18.4 22.1 16.8 22.4 15.7C22.8 14.7 24.1 13.7 24.1 12.5ZM12.5 21.5C7.50002 21.5 3.50002 17.5 3.50002 12.5C3.50002 7.49999 7.50002 3.49999 12.5 3.49999C17.5 3.49999 21.5 7.49999 21.5 12.5C21.5 17.5 17.5 21.5 12.5 21.5Z"
      fill="#B68B52"
    />
    <path
      d="M18.2 6.80002C16.7 5.30002 14.7 4.40002 12.5 4.40002C10.3 4.40002 8.30002 5.30002 6.80002 6.80002C5.30002 8.30002 4.40002 10.3 4.40002 12.5C4.40002 14.7 5.20002 16.7 6.80002 18.2C8.30002 19.7 10.3 20.6 12.5 20.6C14.7 20.6 16.7 19.8 18.2 18.2C19.7 16.7 20.6 14.7 20.6 12.5C20.6 10.3 19.7 8.30002 18.2 6.80002Z"
      fill="#B68B52"
    />
    <path
      d="M8.00007 15.0999V14.3999C8.80007 13.7999 9.40007 13.2999 9.90007 12.8999C10.6001 12.2999 10.7001 11.8999 10.7001 11.4999C10.7001 10.9999 10.3001 10.5999 9.70007 10.5999C9.10007 10.5999 8.60007 11.0999 8.70007 11.7999H7.80007C7.70007 10.6999 8.40007 9.79993 9.70007 9.79993C10.9001 9.79993 11.6001 10.5999 11.6001 11.4999C11.6001 11.9999 11.4001 12.5999 10.8001 13.1999C10.5001 13.5999 10.0001 13.8999 9.30007 14.3999H11.7001V15.1999H8.00007V15.0999Z"
      fill="white"
    />
    <path
      d="M13.6001 9.8999H16.9001V10.6999H14.3001L14.2001 11.8999C14.5001 11.6999 14.9001 11.4999 15.3001 11.4999C16.2001 11.4999 17.1001 12.1999 17.1001 13.2999C17.1001 14.3999 16.2001 15.1999 15.1001 15.1999C14.0001 15.1999 13.4001 14.5999 13.1001 13.9999L13.9001 13.6999C14.1001 14.0999 14.5001 14.3999 15.0001 14.3999C15.7001 14.3999 16.1001 13.8999 16.1001 13.2999C16.1001 12.6999 15.6001 12.1999 15.0001 12.1999C14.6001 12.1999 14.3001 12.3999 14.0001 12.5999L13.2001 12.3999L13.6001 9.8999Z"
      fill="white"
    />
  </g>
  <defs>
    <clipPath id="clip0_197_63534">
      <rect width="25" height="25" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), ot = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="19"
  height="19"
  viewBox="0 0 19 19"
  fill="none"
>
  <path
    d="M17.0759 0H1.84388C0.801688 0 0 0.881857 0 1.92405V17.0759C0 18.1181 0.881856 19 1.92405 19H17.0759C18.1181 19 19 18.1181 19 17.0759V1.92405C18.9198 0.881857 18.1181 0 17.0759 0ZM9.45992 15.7131C6.73418 15.7131 4.48945 13.4684 4.48945 10.7426H5.69198C5.69198 12.827 7.37553 14.4304 9.37975 14.4304C11.4641 14.4304 13.0675 12.7468 13.0675 10.7426C13.0675 8.65823 11.384 7.05485 9.37975 7.05485V9.54008L6.4135 6.4135L9.54009 3.28692V5.77215C12.2658 5.77215 14.5105 8.01688 14.5105 10.7426C14.4304 13.4684 12.1857 15.7131 9.45992 15.7131Z"
    fill="#B68B52"
  />
</svg>`
  ), de = (
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
  ), rt = ".crs-promocode{font-family:Arial;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px}.crs-promocode__title{color:#333;color:var(--Untitled-Black, var(--H1-Font, #333));font-size:12px;font-weight:700;line-height:22px;margin:0}.crs-promocode__code{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;border:1px solid #ccc;padding:18px;min-height:54px;color:#a11a17;font-size:14px;font-weight:700;line-height:24px;letter-spacing:4.2px;text-transform:uppercase}.crs-promocode__copy-btn{width:24px;height:24px;background:none;border:none;padding:0;color:#a11a17}.crs-promocode__copy-btn svg{width:24px;height:24px}.crs-promocode__copy-btn:focus,.crs-promocode__copy-btn:hover,.crs-promocode__copy-btn:active{outline:none;border:none;background:none}";
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
        ${this.promocode}
        <button class="crs-promocode__copy-btn" data-action="copy-promo">
          ${Te}
        </button>
      </div>
    </div>`
      );
      if (this.container) {
        document.head.insertAdjacentHTML("beforeend", `<style>${rt}</style>`), this.container.insertAdjacentHTML("beforeend", e);
        const t = this.container.querySelector("[data-action='copy-promo']");
        t && t.addEventListener("click", this.copyPromo);
      }
    }
    copyPromo(e) {
      const t = e.currentTarget;
      t.innerHTML = `${it}`, navigator.clipboard.writeText(this.promocode), localStorage.setItem(U, this.promocode), setTimeout(() => t.innerHTML = `${Te}`, 1e3);
    }
  }
  var G = /* @__PURE__ */ ((i) => (i.AU = "au", i.US = "us", i.CA = "ca", i.UK = "uk", i.IE = "ie", i.NZ = "nz", i))(G || {}), J = /* @__PURE__ */ ((i) => (i.Mobile = "Mobile", i.Desktop = "Desktop", i))(J || {}), ee = /* @__PURE__ */ ((i) => (i.WELCOME10 = "WELCOME10", i.WELCOME15 = "WELCOME15", i))(ee || {});
  const X = [
    {
      id: 1,
      name: "The Mimi",
      description: "Leather Heart Key Ring",
      price: { uk: "£48", ca: "$94", us: "$63", au: "$101", ie: "€64", nz: "$112" },
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
      id: 2,
      name: "The Ponte",
      description: "Leather Key Ring",
      url: "/products/ponte-leather-key-ring.html",
      price: { uk: "£51", ca: "$99", us: "$68", au: "$110", ie: "€68", nz: "$119" },
      colours: {
        "Chestnut Tan": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/k/e/keyring2_front_tan_3.jpg",
        "Dark Chocolate Brown": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/k/e/keyring2_front_choc_1.jpg",
        "Night Black": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/k/e/keyring2_front_black_2.jpg"
      }
    },
    {
      id: 3,
      name: "The Alberi",
      description: "Leather Card Holder",
      url: "/products/alberi-personalised-leather-credit-card-holder.html",
      price: { uk: "£55", ca: "$107", us: "$73", au: "$129", ie: "€73", nz: "$128" },
      colours: {
        "Chestnut Tan": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/a/l/alberi_tan_back.jpg",
        "Dark Chocolate Brown": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/a/l/alberi_choc_front.jpg",
        "Night Black": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/a/l/alberi_black_back.jpg"
      }
    },
    {
      id: 4,
      name: "The Marco",
      description: "Leather Credit Card Holder",
      url: "/products/marco-leather-card-holder-personalised.html",
      price: { uk: "£68", ca: "$132", us: "$90", au: "$149", ie: "€90", nz: "$159" },
      colours: {
        "Chestnut Tan": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/a/marco_tan_back.jpg",
        "Dark Chocolate Brown": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/a/marco_choc_back_1.jpg",
        "Night Black": "/media/catalog/product/cache/e796be8b07bb6c78ccb4a1b786cd7804/m/a/marco_black_back.jpg"
      }
    }
  ], nt = {
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
  }, Z = [G.UK, G.IE, G.NZ, G.US], at = ".popup-hidden{display:none!important}.crs-hide-font{font-size:0!important}.os-subsribe{background:#a11a17;width:100%;min-height:54px;text-transform:uppercase;color:#fff;font-size:14px;font-weight:700;line-height:22px}.os-subsribe:hover{background:#a11a17;color:#fff}.os-submit{min-height:54px!important;font-size:14px!important;font-weight:700!important;line-height:22px!important}button.needsclick.go397051626:first-child{background:#a11a17!important;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}button.needsclick.go397051626:first-child:hover,button.needsclick.go397051626:first-child:focus{background:#a11a17!important}button.needsclick.go397051626:first-child span{font-size:12px;visibility:visible;text-transform:uppercase}div[data-testid=form-component]:last-child{padding-bottom:10px!important}.js-has-pseudo [csstools-has-2u-33-36-31-1m-2w-2p-37-14-2j-2x-2s-2m-1p-13-2u-2x-36-37-38-2n-32-2p-31-2t-13-2l-15]:not(does-not-exist),.js-has-pseudo [csstools-has-2u-33-36-31-1m-2w-2p-37-14-1a-2r-36-37-19-34-36-33-31-33-19-2u-33-36-31-15]:not(does-not-exist),.js-has-pseudo [csstools-has-2u-33-36-31-1m-2w-2p-37-14-2j-2x-2s-2m-1p-13-1w-2p-38-2t-27-2u-1u-2x-36-38-2w-13-2l-15]:not(does-not-exist){border:none!important;min-height:537px}form:has([id^=first_name]),form:has(.crs-promo-form),form:has([id^=DateOfBirth]){border:none!important;min-height:537px}@media (max-width: 769px){.js-has-pseudo [csstools-has-2u-33-36-31-1m-2w-2p-37-14-2j-2x-2s-2m-1p-13-2u-2x-36-37-38-2n-32-2p-31-2t-13-2l-15]:not(does-not-exist),.js-has-pseudo [csstools-has-2u-33-36-31-1m-2w-2p-37-14-1a-2r-36-37-19-34-36-33-31-33-19-2u-33-36-31-15]:not(does-not-exist),.js-has-pseudo [csstools-has-2u-33-36-31-1m-2w-2p-37-14-2j-2x-2s-2m-1p-13-1w-2p-38-2t-27-2u-1u-2x-36-38-2w-13-2l-15]:not(does-not-exist){min-height:auto;padding-bottom:32px!important}form:has([id^=first_name]),form:has(.crs-promo-form),form:has([id^=DateOfBirth]){min-height:auto;padding-bottom:32px!important}}.js-has-pseudo [csstools-has-2s-2x-3a-1m-2w-2p-37-14-1q-w-2j-2x-2s-2m-1p-13-2u-2x-36-37-38-2n-32-2p-31-2t-13-2l-15]:not(does-not-exist){display:none!important}div:has(>[id^=first_name]){display:none!important}div.needsclick[style^=background-image]{background-image:url(https://www.maxwellscottbags.com/media/wysiwyg/Static-Pages/about/loreto-min.jpg)!important;background-position:85%!important;transform:scaleX(-1)}.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-2x-31-2v-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-15]:not(.does-not-exist):not(does-not-exist):not(does-not-exist){background-image:url(https://www.maxwellscottbags.com/media/wysiwyg/Static-Pages/about/loreto-min.jpg);background-size:191%;background-position:88% 77%;width:350px!important;height:160px!important}div.needsclick:has(>img.needsclick){background-image:url(https://www.maxwellscottbags.com/media/wysiwyg/Static-Pages/about/loreto-min.jpg);background-size:191%;background-position:88% 77%;width:350px!important;height:160px!important}.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-2x-31-2v-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-15-w-2x-31-2v]:not(.does-not-exist):not(does-not-exist):not(does-not-exist):not(does-not-exist){display:none}div.needsclick:has(>img.needsclick) img{display:none}@media (max-width: 768px){.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-z-36-2x-2r-2w-19-38-2t-3c-38-19-1d-1d-1d-1j-1c-1g-1e-1e-1l-15]:not(#does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-z-36-2x-2r-2w-19-38-2t-3c-38-19-1d-1c-1j-1d-1l-1h-1c-1i-1i-15]:not(#does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-z-36-2x-2r-2w-19-38-2t-3c-38-19-1d-1c-1j-1d-1l-1g-1c-1f-1d-15]:not(#does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-z-36-2x-2r-2w-19-38-2t-3c-38-19-1d-1d-1d-1j-1c-1g-1e-1f-1h-15]:not(#does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-z-36-2x-2r-2w-19-38-2t-3c-38-19-1d-1c-1j-1d-1l-1g-1c-1f-1j-15]:not(#does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-2s-2x-3a-1a-32-2t-2t-2s-37-2r-30-2x-2r-2z-1m-2w-2p-37-14-1q-w-z-36-2x-2r-2w-19-38-2t-3c-38-19-1d-1c-1j-1d-1l-1h-1c-1j-1j-15]:not(#does-not-exist):not(does-not-exist){padding-top:20px!important}div.needsclick:has(>#rich-text-111704229),div.needsclick:has(>#rich-text-107195066),div.needsclick:has(>#rich-text-107194031),div.needsclick:has(>#rich-text-111704235),div.needsclick:has(>#rich-text-107194037),div.needsclick:has(>#rich-text-107195077){padding-top:20px!important}}#rich-text-111704229,#rich-text-107195066,#rich-text-107194031{color:#333;font-family:adobe-garamond-pro,serif!important;font-size:40px;font-weight:400;line-height:46px}@media (max-width: 768px){#rich-text-111704229,#rich-text-107195066,#rich-text-107194031{font-size:32px;line-height:38px}}#rich-text-111704230,#rich-text-107194032,#rich-text-107195067{color:#646464;font-family:Arial;font-size:16px;font-weight:400;line-height:22px;text-align:left}#rich-text-100045421,#rich-text-100045179,#rich-text-100045283,.crs-promo-form__title,#rich-text-100045185>p:first-child span,#rich-text-100045289>p:first-child span,#rich-text-100045427>p:first-child span,#rich-text-111704235>p:first-child span,#rich-text-107194037>p:first-child span,#rich-text-107195077>p:first-child span{color:#333!important;color:var(--MSB-UI-Black, #333)!important;font-family:adobe-garamond-pro,serif!important;font-size:32px!important;font-weight:400;line-height:40px;margin-top:-40px;margin-bottom:-15px}#rich-text-100045185,#rich-text-100045289,#rich-text-100045427{margin-top:-40px}.crs-promo-form__title{margin-top:0!important;margin-bottom:10px!important}@media (max-width: 768px){.crs-promo-form__title{margin-top:10px!important}}.crs-promo-form__list{margin-bottom:10px}#rich-text-100045179{font-size:30px!important}#rich-text-100045421 span,#rich-text-100045179 span,#rich-text-100045283 span{color:#a11a17;color:var(--MSB-UI-Red, #a11a17);font-family:adobe-garamond-pro,serif;text-transform:uppercase}form[data-testid^=klaviyo-form] [id^=first_name]{display:none}form[data-testid^=klaviyo-form] [id^=email]{margin-bottom:14px!important;border:solid 1px #ccc!important;min-height:54px!important}#rich-text-100045180,#rich-text-100045422,#rich-text-100045284{color:#646464;color:var(--MSB-UI-Dark-gray, #646464);font-family:Arial;font-size:16px;font-style:normal;font-weight:400;line-height:22px}label[id^=label-DateOfBirth],label[id^=kl_Content]{font-size:12px!important;margin-bottom:6px!important}.crs-promo-form__close{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;padding-bottom:50px}@media (max-width: 768px){.crs-promo-form__close{padding-bottom:0}}.crs-promo-form__close-btn,.crs-promo-form__close-btn:focus,.crs-promo-form__close-btn:hover,.crs-promo-form__enhance,.crs-promo-form__enhance:focus,.crs-promo-form__enhance:hover{background:none;border:none;padding:0;height:36px;margin-top:10px;cursor:pointer;color:#646464;color:var(--MSB-UI-Dark-gray, #646464);text-align:center;font-size:14px;font-weight:700;line-height:22px;letter-spacing:2px;text-transform:uppercase}.crs-promo-form__close-btn,.crs-promo-form__close-btn:focus,.crs-promo-form__close-btn:hover{margin-top:0}.crs-promo-form__img{transform:scaleX(-1)!important;background-position:85% 50%!important}.crs-promo-form{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center}@media (max-width: 768px){.crs-promo-form{flex-direction:column}}.crs-promo-form__content{padding:0 20px 20px}.crs-promo-form__descr{color:var(#646464);font-size:16px;line-height:22px}.crs-promo-form__actions{margin-top:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center}.crs-promo-form__continue,.crs-promo-form__continue:focus,.crs-promo-form__continue:hover{width:100%;min-height:54px;background:#a11a17;color:#fff;color:var(--Untitled-White, #fff);text-align:center;font-size:14px;font-weight:700;line-height:22px;letter-spacing:2px;text-transform:uppercase}@media (min-width: 768px){.crs-promo-form__list{margin-top:20px;padding-left:30px}#rich-text-100045421,#rich-text-100045179,#rich-text-100045283,.crs-promo-form__title,#rich-text-100045185>p:first-child span,#rich-text-100045289>p:first-child span,#rich-text-100045427>p:first-child span,#rich-text-111704235>p:first-child span,#rich-text-107194037>p:first-child span,#rich-text-107195077>p:first-child span{font-size:40px!important;line-height:46px;margin-top:0}#rich-text-100045185,#rich-text-100045289,#rich-text-100045427{margin-top:0;padding-right:20px}[data-testid^=klaviyo-form]{width:890px!important}[data-testid^=klaviyo-form]>div{min-width:50%!important}.crs-promo-form__content{padding-bottom:0!important;padding:50px 36px 20px;margin-bottom:50px}.crs-promo-form__content .crs-promocode{gap:8px}.crs-promo-form__content .crs-promocode__code{padding:12px!important}}", lt = 'input[aria-label="First Name*"]', ct = 50, pe = '.needsclick[role="dialog"]', D = 'div[role="dialog"] .klaviyo-close-form', te = ".crs-promo-form", dt = ".crs-promo-form__enhance", pt = ".crs-promo-form__continue", Le = 'form[data-testid^="klaviyo-form"]:has([id^="first_name"])', j = {
    au: "#rich-text-107195066",
    us: "#rich-text-107194031",
    default: "#rich-text-111704229"
  }, Ie = {
    au: "#rich-text-107195067",
    us: "#rich-text-107194032",
    default: "#rich-text-111704230"
  }, Me = {
    au: "#rich-text-107195077",
    us: "#rich-text-107194037",
    default: "#rich-text-111704235"
  }, ze = {
    au: "#email_107195069",
    us: "#email_107194034",
    default: "#email_111704232"
  }, ue = (i) => ({
    closeBtn: (e) => {
      i();
    },
    closeByClickOutside: (e) => {
      e.target.closest('div[role="dialog"]') || i();
    }
  });
  class ut {
    constructor({ country: e, device: t }) {
      this.inputInterval = null, this.country = e, this.device = t, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${at}</style>`), this.checkPopupVisibility(), this.setPopupChanges();
    }
    async setPopupChanges() {
      var n, c, p, u, m;
      const t = ue(() => {
        var b;
        const h = j[this.country] || j.default, g = (b = A(h)) == null ? void 0 : b.textContent;
        I("exp_pop_car_retent_2_but_firorduca_clos", `Close - ${g}`, "click", "Pop up Get 10% Off");
      }), s = new MutationObserver((h) => {
        h.forEach((g) => {
          const v = g.target.querySelector('[id^="DateOfBirth"]'), d = v == null ? void 0 : v.closest("form > div");
          d && d.dataset.hidden !== "not-hidden" && this.handleEnhanceForm(d, s, t);
        });
      }), r = await q(Le);
      if (r) {
        const h = r;
        this.renderNewCloseButton(t), this.changeTextOnFirstStep(), s.observe(h, {
          childList: !0,
          subtree: !0
        });
      }
      (n = A(D)) == null || n.removeEventListener("click", t.closeBtn), (c = A(D)) == null || c.addEventListener("click", t.closeBtn);
      const o = A(pe);
      o && ((p = o.parentElement) == null || p.removeEventListener("mousedown", t.closeByClickOutside), (u = o.parentElement) == null || u.addEventListener("mousedown", t.closeByClickOutside));
      const a = j[this.country] || j.default, l = (m = A(a)) == null ? void 0 : m.textContent;
      console.log("title", l), R(
        D,
        "exp_pop_car_retent_2_vis_firorduca_view",
        `Pop up view - ${l}`,
        "Pop up Get 10% Off"
      );
    }
    changeTextOnFirstStep() {
      const e = j[this.country] || j.default, t = Ie[this.country] || Ie.default, s = A(e), r = A(t);
      let o = ze[this.country] ?? ze.default;
      const a = A(o), l = Y("button.needsclick");
      if (s && (Z.includes(this.country) ? s.innerHTML = /* HTML */
      "Get 10% off & free delivery!" : s.innerHTML = /* HTML */
      `Get 10% off <br class="os-desktop" />
          your first order!`), r && (r.textContent = "Subscribe to our newsletter and save on your entire first order, no limits."), a) {
        a.placeholder = "Email";
        const n = (s == null ? void 0 : s.textContent) || "";
        a.addEventListener("change", () => {
          I("exp_pop_car_retent_2_inp_firorduca_email", `Email - ${n}}`, "input", "Pop up Get 10% Off");
        });
      }
      l.forEach((n) => {
        var c;
        if (n.textContent === "SUBSCRIBE NOW") {
          n.style.display = "none";
          const p = document.createElement("button");
          p.classList.add("os-subsribe"), p.innerHTML = "Get 10% discount", (c = n.parentElement) == null || c.appendChild(p), p.addEventListener("click", () => {
            n.click();
            const u = (s == null ? void 0 : s.textContent) || "";
            I(
              "exp_pop_car_retent_2_but_firorduca_getdis",
              `Get discount - ${u}`,
              "click",
              "Pop up Get 10% Off"
            );
          });
        }
      });
    }
    handleEnhanceForm(e, t, s) {
      var p, u, m, h, g, b, v, d;
      t.disconnect(), e.style.display = "none";
      const r = this.getNewPopupWithPromoHtml();
      if (A(te))
        return;
      e.closest("form").insertAdjacentHTML("afterbegin", r);
      const a = (p = A(".crs-promo-form__title")) == null ? void 0 : p.textContent;
      R(
        te,
        "exp_pop_car_retent_2_vis_youlisuca_view",
        `Pop up view - ${a}`,
        "Pop up You are on the list"
      ), new Ee(".crs-promocode__container", ee.WELCOME10), (u = A(".crs-promo-form .crs-promocode__copy-btn")) == null || u.addEventListener("click", () => {
        var w;
        const f = (w = A(".crs-promo-form__title")) == null ? void 0 : w.textContent;
        I(
          "exp_pop_car_retent_2_but_youlisuca_code",
          `Promo code - ${f}`,
          "click",
          "Pop up You are on the list"
        );
      }), this.updateCloseBtnEvent(s), (m = A(D)) == null || m.removeEventListener("click", s.closeBtn);
      const l = A(pe);
      (h = l == null ? void 0 : l.parentElement) == null || h.removeEventListener("mousedown", s.closeByClickOutside);
      const c = ue(() => {
        I("exp_pop_car_retent_2_but_youlisuca_clos", `Close - ${a}`, "click", "Pop up You are on the list");
      });
      if ((g = l == null ? void 0 : l.parentElement) == null || g.addEventListener("mousedown", c.closeByClickOutside), (b = A(D)) == null || b.addEventListener("click", c.closeBtn), this.device === "Mobile") {
        const f = (v = e.querySelector('[data-testid="form-row"]:first-child')) == null ? void 0 : v.cloneNode(!0);
        (d = A(te)) == null || d.prepend(f);
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
            <button class="crs-promo-form__continue" data-popup="promocode">Continue shopping</button>
            <button class="crs-promo-form__enhance">Enhance your experience</button>
          </div>
        </div>
      </div>
    `
      );
    }
    async renderNewCloseButton(e) {
      var o, a;
      const t = (
        /* HTML */
        `
      <div class="crs-promo-form__close">
        <button type="button" class="crs-promo-form__close-btn">No, thanks</button>
      </div>
    `
      ), s = (a = (o = A("button.needsclick.go397051626:first-child")) == null ? void 0 : o.parentElement) == null ? void 0 : a.parentElement;
      if (!s)
        return;
      s.insertAdjacentHTML("afterend", t), A(".crs-promo-form__close").addEventListener("click", (l) => {
        var u, m, h;
        l.preventDefault();
        const n = A(".klaviyo-close-form");
        (u = A(D)) == null || u.removeEventListener("click", e.closeBtn);
        const c = j[this.country] || j.default, p = (m = A(c)) == null ? void 0 : m.textContent;
        I("exp_pop_car_retent_2_but_firorduca_no", `No, thanks - ${p}`, "click", "Pop up Get 10% Off"), n && (n.click(), (h = A(D)) == null || h.addEventListener("click", e.closeBtn));
      });
    }
    getPromoFormContent() {
      return this.country === "uk" ? (
        /* HTML */
        `<ul class="crs-promo-form__list">
          <li>Your 10% first order discount is ready (no minimum spend, no exclusions).</li>
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
      var t, s;
      (t = A(D)) == null || t.removeEventListener("click", e.closeBtn), (s = A(D)) == null || s.addEventListener("click", e.closeBtn);
    }
    addContinueButtonListener(e) {
      var t;
      (t = A(pt)) == null || t.addEventListener("click", () => {
        var o, a, l;
        (o = A(D)) == null || o.removeEventListener("click", e.closeBtn);
        const s = A(".klaviyo-close-form"), r = (a = A(".crs-promo-form__title")) == null ? void 0 : a.textContent;
        I(
          "exp_pop_car_retent_2_but_youlisuca_cont",
          `Continue shopping - ${r}`,
          "click",
          "Pop up You are on the list"
        ), s.click(), (l = A(D)) == null || l.addEventListener("click", e.closeBtn);
      });
    }
    addEnhanceButtonListener(e, t, s) {
      var r;
      (r = A(dt)) == null || r.addEventListener("click", () => {
        var a;
        const o = (a = A(".crs-promo-form__title")) == null ? void 0 : a.textContent;
        I(
          "exp_pop_car_retent_2_but_youlisuca_exper",
          `Enhance your experience with us - ${o}`,
          "click",
          "Pop up You are on the list"
        ), this.handleEnhanceButtonClick(e, t, s);
      });
    }
    handleEnhanceButtonClick(e, t, s) {
      e.style.display = "block", e.dataset.hidden = "not-hidden";
      const r = A(te);
      r.style.display = "none";
      const o = A("form.klaviyo-form-version-cid_3");
      t.observe(o, {
        childList: !0,
        subtree: !0
      }), this.updateComponentItems(s);
    }
    updateComponentItems(e) {
      Y("div[component]").forEach((t) => {
        var r, o, a, l, n, c, p;
        const s = t;
        if ((r = s == null ? void 0 : s.innerText) != null && r.includes("SUBSCRIBE NOW") && ((o = s.querySelector("button")) == null || o.classList.add("crs-hide-font")), s.innerText.toLowerCase().includes("skip")) {
          const u = s.parentElement;
          u && (u.style.display = "none");
        }
        if (s.innerText.includes("SUBMIT")) {
          const u = A(D), m = A(pe);
          Y("button.needsclick").forEach((S) => {
            S.textContent === "SUBMIT" && S.classList.add("os-submit");
          }), u.removeEventListener("click", e.closeBtn), (a = m == null ? void 0 : m.parentElement) == null || a.removeEventListener("mousedown", e.closeByClickOutside);
          const g = '[id^="DateOfBirth"]', b = Me[this.country] || Me.default, v = (n = (l = A(b)) == null ? void 0 : l.querySelector("p:first-child")) == null ? void 0 : n.textContent;
          R(
            g,
            "exp_pop_car_retent_2_but_enhance_vis",
            `Pop up view - ${v}`,
            "Pop up Enhance your experience with us"
          );
          const d = () => {
            I(
              "exp_pop_car_retent_2_but_enhance_close",
              `Close - ${v}`,
              "click",
              "Pop up Enhance your experience with us"
            );
          }, f = A(g);
          f && f.addEventListener("change", () => {
            I(
              "exp_pop_car_retent_2_but_enhance_inp",
              `Date - ${v}`,
              "input",
              "Pop up Enhance your experience with us"
            );
          });
          const w = A(".os-submit");
          w == null || w.addEventListener("mousedown", () => {
            const S = Y('.needsclick[role="group"] input:checked + label'), E = Array.from(S).map(($) => $.textContent).join(", ");
            I(
              "exp_pop_car_retent_2_but_enhance_submit",
              `Submit - ${v}`,
              // @ts-ignore
              `Button - ${E}`,
              "Pop up Enhance your experience with us"
            );
          });
          const x = ue(d);
          u.addEventListener("click", x.closeBtn), (c = m == null ? void 0 : m.parentElement) == null || c.addEventListener("mousedown", x.closeByClickOutside), (p = s.querySelector("button")) == null || p.addEventListener("click", () => {
            const S = A(".klaviyo-close-form");
            S && S.click();
          });
        }
      });
    }
    setInputValue() {
      const e = A(lt);
      e && e.value !== "CRS" ? (e.value = "CRS", e.dispatchEvent(new Event("input"))) : this.inputInterval && (clearInterval(this.inputInterval), this.inputInterval = null);
    }
    async checkPopupVisibility() {
      let e = !1;
      const t = new IntersectionObserver(
        (r) => {
          r.forEach((o) => {
            o.isIntersecting && (this.inputInterval = setInterval(() => this.setInputValue(), ct)), o.isIntersecting && e ? sessionStorage.setItem(Ae, "true") : o.isIntersecting && (console.log("Popup is visible"), e = !0);
          });
        },
        {
          threshold: 0.5
        }
      ), s = await q(Le);
      if (s) {
        const r = s;
        t.observe(r);
      }
    }
  }
  const ft = '.os-cart{background-color:#fff;border:none;box-shadow:0 5px 15px #00000026;max-width:334px;padding:0}.os-cart::backdrop{background:#ffffffd9;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.os-cart .os-wrap{padding:28px 14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px}.os-cart .os-close{position:absolute;top:5px;right:5px;background:none;border:none;cursor:pointer}.os-cart .os-close:focus,.os-cart .os-close:hover,.os-cart .os-close:active{outline:none;border:none;background:none}.os-cart .os-title{color:#333;color:var(--MSB-UI-Black, var(--H1-Font, #333));font-family:adobe-garamond-pro,serif;font-size:28px;font-weight:400;line-height:36px;margin:0}@media (min-width: 768px){.os-cart .os-title{font-size:40px;font-weight:400;line-height:46px;padding-right:90px}}.os-cart .os-title span{color:#a11a17}.os-cart .os-descr{position:relative;background:#f9efe1;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;margin:0 auto;padding:8px 16px;color:#333;color:var(--MSB-UI-Black, var(--H1-Font, #333));text-align:center;font-family:Arial;font-size:14px;font-style:normal;font-weight:400;line-height:19px;letter-spacing:.7px}.os-cart .os-descr:after{content:"";position:absolute;top:100%;left:50%;margin-left:-10px;border-width:10px;border-style:solid;border-color:#f9efe1 transparent transparent transparent}.os-cart .os-descr-icon{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;justify-content:center;align-items:center}.os-cart .os-badges{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:24px}.os-cart .ps-warranty,.os-cart .os-return{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:8px;color:#333;color:var(--Untitled-Black, var(--H1-Font, #333));font-size:12px;font-weight:400;line-height:22px}.os-cart .os-checkout,.os-cart .os-checkout:visited{display:block;width:100%;background:#a11a17;background:var(--MSB-UI-Red, #a11a17);padding-top:16px;padding-bottom:16px;color:#fff;color:var(--Untitled-White, #fff);text-align:center;font-size:14px;font-weight:700;line-height:22px;letter-spacing:2px;text-transform:uppercase}@media screen and (min-width: 768px){.os-cart{max-width:560px}.os-cart .os-descr{width:100%!important}.os-cart .os-badges{justify-content:center;gap:52px}}.os-cart .os-producs{position:relative;max-height:200px;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:10px;padding:10px 0}.os-cart .os-producs:after{content:"";position:absolute;bottom:0;width:100%;height:3px;background:#d9d9d9;filter:blur(7px)}.os-cart .os-producs .os-product{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:12px;height:90px;width:100%;justify-content:flex-start;align-items:center}.os-cart .os-producs .os-product .os-img{width:71px;height:71px;-o-object-fit:contain;object-fit:contain}.os-cart .os-producs .os-product .os-content{width:100%}.os-cart .os-producs .os-product .os-content .os-title,.os-cart .os-producs .os-product .os-content .os-qty,.os-cart .os-producs .os-product .os-content .os-price,.os-cart .os-producs .os-product .os-content .os--price .price,.os-cart .os-producs .os-product .os-content .os-color{margin:0;color:#646464;font-size:14px;font-weight:400;line-height:22px}.os-cart .os-producs .os-product .os-content .os-header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}.os-cart .os-producs .os-product .os-content .os-header .os-title{color:#333;color:var(--Untitled-Black, var(--H1-Font, #333));font-family:adobe-garamond-pro,serif;font-size:18px;font-weight:700}.os-cart .os-producs .os-product .os-content .os-header .os-price .price{color:#333!important;color:var(--MSB-UI-Black, var(--H1-Font, #333))!important;font-family:adobe-garamond-pro,serif!important;font-size:16px!important;font-weight:600!important}';
  class mt {
    constructor({ country: e, device: t }) {
      this.country = e, this.device = t, this.init();
    }
    init() {
      this.render(), this.closePopupHandlers(), new Ee("#cart-popup .os-promocode-container", ee.WELCOME15);
    }
    render() {
      const e = (
        /* HTML */
        `<dialog id="cart-popup" class="os-dialog os-cart">
      <div class="os-wrap">
        <button class="os-close">${de}</button>
        ${Z.includes(this.country) ? (
          /* HTML */
          '<h2 class="os-title">Check out now and get <span>15% off & free delivery</span></h2>'
        ) : (
          /* HTML */
          '<h2 class="os-title">Check out now and get <span>15% off your first order</span></h2>'
        )}
        ${Z.includes(this.country) ? (
          /* HTML */
          "<div>*15% discount applies to your first order only</div>"
        ) : ""}

        <div class="os-content"></div>
        <div class="os-badges">
          <div class="os-warranty">${st} 25-Year Warranty</div>
          <div class="os-return">${ot} 60-Day Return</div>
        </div>
        <div class="os-promocode-container"></div>
        <div class="os-note">*The final price will be calculated at checkout</div>
        <div class="os-action">
          <button class="os-checkout">Complete my order now</button>
        </div>
      </div>
    </dialog>`
      );
      document.head.insertAdjacentHTML("beforeend", `<style>${ft}</style>`), document.body.insertAdjacentHTML("beforeend", e), this.popup = document.querySelector("#cart-popup");
    }
    show(e = !0) {
      var c, p, u;
      if (!this.popup || (e ? JSON.parse(sessionStorage.getItem(ke)) : !1) || location.pathname.includes("checkout"))
        return;
      const s = (p = (c = JSON.parse(localStorage.getItem("mage-cache-storage"))) == null ? void 0 : c.cart) == null ? void 0 : p.items;
      if (!s)
        return;
      const r = this.popup.querySelector(".os-content"), o = (
        /* HTML */
        `<div class="os-producs">
      ${s.map((m) => (
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
                  ${m.options.map((h) => {
            if (h.label === "Colour")
              return h.value;
          })}
                </p>
              </div>
            </div>
          `
        )).join("")}
    </div>`
      );
      r.innerHTML = o, this.popup.showModal(), sessionStorage.setItem(ke, JSON.stringify(!0));
      const a = (u = this.popup.querySelector(".os-title")) == null ? void 0 : u.textContent;
      R(
        "#cart-popup",
        "exp_pop_car_retent_2_vis_popchecuca_view",
        `Pop up view - ${a}`,
        "Pop up Check out now and get 15% off your first order"
      );
      const l = this.popup.querySelector(".os-checkout");
      l == null || l.addEventListener("click", () => {
        sessionStorage.setItem(U, ee.WELCOME15), setTimeout(() => {
          location.href = "/checkout";
        }), I(
          "exp_pop_car_retent_2_but_popchecuca_comp",
          `Complete my order now - ${a}`,
          "click",
          "Pop up Check out now and get 15% off your first order"
        );
      });
      const n = this.popup.querySelector(".crs-promocode__copy-btn");
      n == null || n.addEventListener("click", () => {
        I("exp_pop_car_retent_2_but_with_prod_code", `Promo code - ${a}`, "click", "Pop up Check out now and get 15% off your first order");
      });
    }
    closePopupHandlers() {
      var s;
      const e = () => {
        var o, a;
        const r = (a = (o = this.popup) == null ? void 0 : o.querySelector(".os-title")) == null ? void 0 : a.textContent;
        I("exp_pop_car_retent_2_but_popchecuca_clos", `Close - ${r}`, "click", "Pop up Check out now and get 15% off your first order");
      };
      if (!this.popup)
        return;
      const t = this.popup.querySelector(".os-close");
      t == null || t.addEventListener("click", () => {
        var r;
        (r = this.popup) == null || r.close(), e();
      }), (s = this.popup) == null || s.addEventListener("click", (r) => {
        var o;
        r.target === this.popup && ((o = this.popup) == null || o.close(), e());
      });
    }
  }
  function Oe(i) {
    return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
  }
  function fe(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
      typeof i[t] > "u" ? i[t] = e[t] : Oe(e[t]) && Oe(i[t]) && Object.keys(e[t]).length > 0 && fe(i[t], e[t]);
    });
  }
  const Be = {
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
  function W() {
    const i = typeof document < "u" ? document : {};
    return fe(i, Be), i;
  }
  const ht = {
    document: Be,
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
    requestAnimationFrame(i) {
      return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
    },
    cancelAnimationFrame(i) {
      typeof setTimeout > "u" || clearTimeout(i);
    }
  };
  function O() {
    const i = typeof window < "u" ? window : {};
    return fe(i, ht), i;
  }
  function gt(i) {
    return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
  }
  function wt(i) {
    const e = i;
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
  function me(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e);
  }
  function ie() {
    return Date.now();
  }
  function bt(i) {
    const e = O();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
  }
  function vt(i, e) {
    e === void 0 && (e = "x");
    const t = O();
    let s, r, o;
    const a = bt(i);
    return t.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((l) => l.replace(",", ".")).join(", ")), o = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (o = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = o.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? r = o.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? r = o.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])), r || 0;
  }
  function se(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
  }
  function xt(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
  }
  function B() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (s != null && !xt(s)) {
        const r = Object.keys(Object(s)).filter((o) => e.indexOf(o) < 0);
        for (let o = 0, a = r.length; o < a; o += 1) {
          const l = r[o], n = Object.getOwnPropertyDescriptor(s, l);
          n !== void 0 && n.enumerable && (se(i[l]) && se(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : B(i[l], s[l]) : !se(i[l]) && se(s[l]) ? (i[l] = {}, s[l].__swiper__ ? i[l] = s[l] : B(i[l], s[l])) : i[l] = s[l]);
        }
      }
    }
    return i;
  }
  function oe(i, e, t) {
    i.style.setProperty(e, t);
  }
  function $e(i) {
    let {
      swiper: e,
      targetPosition: t,
      side: s
    } = i;
    const r = O(), o = -e.translate;
    let a = null, l;
    const n = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > o ? "next" : "prev", p = (m, h) => c === "next" && m >= h || c === "prev" && m <= h, u = () => {
      l = (/* @__PURE__ */ new Date()).getTime(), a === null && (a = l);
      const m = Math.max(Math.min((l - a) / n, 1), 0), h = 0.5 - Math.cos(m * Math.PI) / 2;
      let g = o + h * (t - o);
      if (p(g, t) && (g = t), e.wrapperEl.scrollTo({
        [s]: g
      }), p(g, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [s]: g
          });
        }), r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(u);
    };
    u();
  }
  function N(i, e) {
    return e === void 0 && (e = ""), [...i.children].filter((t) => t.matches(e));
  }
  function re(i) {
    try {
      console.warn(i);
      return;
    } catch {
    }
  }
  function ne(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : gt(e)), t;
  }
  function yt(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
      const s = i.previousElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function St(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
      const s = i.nextElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function F(i, e) {
    return O().getComputedStyle(i, null).getPropertyValue(e);
  }
  function ae(i) {
    let e = i, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Ge(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
      e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
    return t;
  }
  function he(i, e, t) {
    const s = O();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth;
  }
  function M(i) {
    return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
  }
  let ge;
  function kt() {
    const i = O(), e = W();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    };
  }
  function De() {
    return ge || (ge = kt()), ge;
  }
  let we;
  function _t(i) {
    let {
      userAgent: e
    } = i === void 0 ? {} : i;
    const t = De(), s = O(), r = s.navigator.platform, o = e || s.navigator.userAgent, a = {
      ios: !1,
      android: !1
    }, l = s.screen.width, n = s.screen.height, c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
    let p = o.match(/(iPad).*OS\s([\d_]+)/);
    const u = o.match(/(iPod)(.*OS\s([\d_]+))?/), m = !p && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = r === "Win32";
    let g = r === "MacIntel";
    const b = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !p && g && t.touch && b.indexOf(`${l}x${n}`) >= 0 && (p = o.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), g = !1), c && !h && (a.os = "android", a.android = !0), (p || m || u) && (a.os = "ios", a.ios = !0), a;
  }
  function He(i) {
    return i === void 0 && (i = {}), we || (we = _t(i)), we;
  }
  let be;
  function Ct() {
    const i = O(), e = He();
    let t = !1;
    function s() {
      const l = i.navigator.userAgent.toLowerCase();
      return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
    }
    if (s()) {
      const l = String(i.navigator.userAgent);
      if (l.includes("Version/")) {
        const [n, c] = l.split("Version/")[1].split(" ")[0].split(".").map((p) => Number(p));
        t = n < 16 || n === 16 && c < 2;
      }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), o = s(), a = o || r && e.ios;
    return {
      isSafari: t || o,
      needPerspectiveFix: t,
      need3dFix: a,
      isWebView: r
    };
  }
  function At() {
    return be || (be = Ct()), be;
  }
  function Tt(i) {
    let {
      swiper: e,
      on: t,
      emit: s
    } = i;
    const r = O();
    let o = null, a = null;
    const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    }, n = () => {
      !e || e.destroyed || !e.initialized || (o = new ResizeObserver((u) => {
        a = r.requestAnimationFrame(() => {
          const {
            width: m,
            height: h
          } = e;
          let g = m, b = h;
          u.forEach((v) => {
            let {
              contentBoxSize: d,
              contentRect: f,
              target: w
            } = v;
            w && w !== e.el || (g = f ? f.width : (d[0] || d).inlineSize, b = f ? f.height : (d[0] || d).blockSize);
          }), (g !== m || b !== h) && l();
        });
      }), o.observe(e.el));
    }, c = () => {
      a && r.cancelAnimationFrame(a), o && o.unobserve && e.el && (o.unobserve(e.el), o = null);
    }, p = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        n();
        return;
      }
      r.addEventListener("resize", l), r.addEventListener("orientationchange", p);
    }), t("destroy", () => {
      c(), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", p);
    });
  }
  function Et(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: r
    } = i;
    const o = [], a = O(), l = function(p, u) {
      u === void 0 && (u = {});
      const m = a.MutationObserver || a.WebkitMutationObserver, h = new m((g) => {
        if (e.__preventObserver__)
          return;
        if (g.length === 1) {
          r("observerUpdate", g[0]);
          return;
        }
        const b = function() {
          r("observerUpdate", g[0]);
        };
        a.requestAnimationFrame ? a.requestAnimationFrame(b) : a.setTimeout(b, 0);
      });
      h.observe(p, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData
      }), o.push(h);
    }, n = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const p = Ge(e.hostEl);
          for (let u = 0; u < p.length; u += 1)
            l(p[u]);
        }
        l(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), l(e.wrapperEl, {
          attributes: !1
        });
      }
    }, c = () => {
      o.forEach((p) => {
        p.disconnect();
      }), o.splice(0, o.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", n), s("destroy", c);
  }
  var Pt = {
    on(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function")
        return s;
      const r = t ? "unshift" : "push";
      return i.split(" ").forEach((o) => {
        s.eventsListeners[o] || (s.eventsListeners[o] = []), s.eventsListeners[o][r](e);
      }), s;
    },
    once(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function")
        return s;
      function r() {
        s.off(i, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var o = arguments.length, a = new Array(o), l = 0; l < o; l++)
          a[l] = arguments[l];
        e.apply(s, a);
      }
      return r.__emitterProxy = e, s.on(i, r, t);
    },
    onAny(i, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof i != "function")
        return t;
      const s = e ? "unshift" : "push";
      return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t;
    },
    offAny(i) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
        return e;
      const t = e.eventsAnyListeners.indexOf(i);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(i, e) {
      const t = this;
      return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach((s) => {
        typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((r, o) => {
          (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[s].splice(o, 1);
        });
      }), t;
    },
    emit() {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
        return i;
      let e, t, s;
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return typeof o[0] == "string" || Array.isArray(o[0]) ? (e = o[0], t = o.slice(1, o.length), s = i) : (e = o[0].events, t = o[0].data, s = o[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((n) => {
        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((c) => {
          c.apply(s, [n, ...t]);
        }), i.eventsListeners && i.eventsListeners[n] && i.eventsListeners[n].forEach((c) => {
          c.apply(s, t);
        });
      }), i;
    }
  };
  function Lt() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(F(s, "padding-left") || 0, 10) - parseInt(F(s, "padding-right") || 0, 10), t = t - parseInt(F(s, "padding-top") || 0, 10) - parseInt(F(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
      width: e,
      height: t,
      size: i.isHorizontal() ? e : t
    }));
  }
  function It() {
    const i = this;
    function e(y, C) {
      return parseFloat(y.getPropertyValue(i.getDirectionLabel(C)) || 0);
    }
    const t = i.params, {
      wrapperEl: s,
      slidesEl: r,
      size: o,
      rtlTranslate: a,
      wrongRTL: l
    } = i, n = i.virtual && t.virtual.enabled, c = n ? i.virtual.slides.length : i.slides.length, p = N(r, `.${i.params.slideClass}, swiper-slide`), u = n ? i.virtual.slides.length : p.length;
    let m = [];
    const h = [], g = [];
    let b = t.slidesOffsetBefore;
    typeof b == "function" && (b = t.slidesOffsetBefore.call(i));
    let v = t.slidesOffsetAfter;
    typeof v == "function" && (v = t.slidesOffsetAfter.call(i));
    const d = i.snapGrid.length, f = i.slidesGrid.length;
    let w = t.spaceBetween, x = -b, S = 0, E = 0;
    if (typeof o > "u")
      return;
    typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * o : typeof w == "string" && (w = parseFloat(w)), i.virtualSize = -w, p.forEach((y) => {
      a ? y.style.marginLeft = "" : y.style.marginRight = "", y.style.marginBottom = "", y.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (oe(s, "--swiper-centered-offset-before", ""), oe(s, "--swiper-centered-offset-after", ""));
    const $ = t.grid && t.grid.rows > 1 && i.grid;
    $ ? i.grid.initSlides(p) : i.grid && i.grid.unsetSlides();
    let T;
    const z = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((y) => typeof t.breakpoints[y].slidesPerView < "u").length > 0;
    for (let y = 0; y < u; y += 1) {
      T = 0;
      let C;
      if (p[y] && (C = p[y]), $ && i.grid.updateSlide(y, C, p), !(p[y] && F(C, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          z && (p[y].style[i.getDirectionLabel("width")] = "");
          const _ = getComputedStyle(C), k = C.style.transform, P = C.style.webkitTransform;
          if (k && (C.style.transform = "none"), P && (C.style.webkitTransform = "none"), t.roundLengths)
            T = i.isHorizontal() ? he(C, "width", !0) : he(C, "height", !0);
          else {
            const L = e(_, "width"), V = e(_, "padding-left"), Xi = e(_, "padding-right"), Ue = e(_, "margin-left"), Xe = e(_, "margin-right"), Ze = _.getPropertyValue("box-sizing");
            if (Ze && Ze === "border-box")
              T = L + Ue + Xe;
            else {
              const {
                clientWidth: Zi,
                offsetWidth: Qi
              } = C;
              T = L + V + Xi + Ue + Xe + (Qi - Zi);
            }
          }
          k && (C.style.transform = k), P && (C.style.webkitTransform = P), t.roundLengths && (T = Math.floor(T));
        } else
          T = (o - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), p[y] && (p[y].style[i.getDirectionLabel("width")] = `${T}px`);
        p[y] && (p[y].swiperSlideSize = T), g.push(T), t.centeredSlides ? (x = x + T / 2 + S / 2 + w, S === 0 && y !== 0 && (x = x - o / 2 - w), y === 0 && (x = x - o / 2 - w), Math.abs(x) < 1 / 1e3 && (x = 0), t.roundLengths && (x = Math.floor(x)), E % t.slidesPerGroup === 0 && m.push(x), h.push(x)) : (t.roundLengths && (x = Math.floor(x)), (E - Math.min(i.params.slidesPerGroupSkip, E)) % i.params.slidesPerGroup === 0 && m.push(x), h.push(x), x = x + T + w), i.virtualSize += T + w, S = T, E += 1;
      }
    }
    if (i.virtualSize = Math.max(i.virtualSize, o) + v, a && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + w}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + w}px`), $ && i.grid.updateWrapperSize(T, m), !t.centeredSlides) {
      const y = [];
      for (let C = 0; C < m.length; C += 1) {
        let _ = m[C];
        t.roundLengths && (_ = Math.floor(_)), m[C] <= i.virtualSize - o && y.push(_);
      }
      m = y, Math.floor(i.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(i.virtualSize - o);
    }
    if (n && t.loop) {
      const y = g[0] + w;
      if (t.slidesPerGroup > 1) {
        const C = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), _ = y * t.slidesPerGroup;
        for (let k = 0; k < C; k += 1)
          m.push(m[m.length - 1] + _);
      }
      for (let C = 0; C < i.virtual.slidesBefore + i.virtual.slidesAfter; C += 1)
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + y), h.push(h[h.length - 1] + y), i.virtualSize += y;
    }
    if (m.length === 0 && (m = [0]), w !== 0) {
      const y = i.isHorizontal() && a ? "marginLeft" : i.getDirectionLabel("marginRight");
      p.filter((C, _) => !t.cssMode || t.loop ? !0 : _ !== p.length - 1).forEach((C) => {
        C.style[y] = `${w}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let y = 0;
      g.forEach((_) => {
        y += _ + (w || 0);
      }), y -= w;
      const C = y - o;
      m = m.map((_) => _ <= 0 ? -b : _ > C ? C + v : _);
    }
    if (t.centerInsufficientSlides) {
      let y = 0;
      if (g.forEach((C) => {
        y += C + (w || 0);
      }), y -= w, y < o) {
        const C = (o - y) / 2;
        m.forEach((_, k) => {
          m[k] = _ - C;
        }), h.forEach((_, k) => {
          h[k] = _ + C;
        });
      }
    }
    if (Object.assign(i, {
      slides: p,
      snapGrid: m,
      slidesGrid: h,
      slidesSizesGrid: g
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      oe(s, "--swiper-centered-offset-before", `${-m[0]}px`), oe(s, "--swiper-centered-offset-after", `${i.size / 2 - g[g.length - 1] / 2}px`);
      const y = -i.snapGrid[0], C = -i.slidesGrid[0];
      i.snapGrid = i.snapGrid.map((_) => _ + y), i.slidesGrid = i.slidesGrid.map((_) => _ + C);
    }
    if (u !== c && i.emit("slidesLengthChange"), m.length !== d && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== f && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !n && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const y = `${t.containerModifierClass}backface-hidden`, C = i.el.classList.contains(y);
      u <= t.maxBackfaceHiddenSlides ? C || i.el.classList.add(y) : C && i.el.classList.remove(y);
    }
  }
  function Mt(i) {
    const e = this, t = [], s = e.virtual && e.params.virtual.enabled;
    let r = 0, o;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const a = (l) => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((l) => {
          t.push(l);
        });
      else
        for (o = 0; o < Math.ceil(e.params.slidesPerView); o += 1) {
          const l = e.activeIndex + o;
          if (l > e.slides.length && !s)
            break;
          t.push(a(l));
        }
    else
      t.push(a(e.activeIndex));
    for (o = 0; o < t.length; o += 1)
      if (typeof t[o] < "u") {
        const l = t[o].offsetHeight;
        r = l > r ? l : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function zt() {
    const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
      e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment();
  }
  function Ot(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this, t = e.params, {
      slides: s,
      rtlTranslate: r,
      snapGrid: o
    } = e;
    if (s.length === 0)
      return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -i;
    r && (a = i), s.forEach((n) => {
      n.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let n = 0; n < s.length; n += 1) {
      const c = s[n];
      let p = c.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (p -= s[0].swiperSlideOffset);
      const u = (a + (t.centeredSlides ? e.minTranslate() : 0) - p) / (c.swiperSlideSize + l), m = (a - o[0] + (t.centeredSlides ? e.minTranslate() : 0) - p) / (c.swiperSlideSize + l), h = -(a - p), g = h + e.slidesSizesGrid[n], b = h >= 0 && h <= e.size - e.slidesSizesGrid[n];
      (h >= 0 && h < e.size - 1 || g > 1 && g <= e.size || h <= 0 && g >= e.size) && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(n), s[n].classList.add(t.slideVisibleClass)), b && s[n].classList.add(t.slideFullyVisibleClass), c.progress = r ? -u : u, c.originalProgress = r ? -m : m;
    }
  }
  function Bt(i) {
    const e = this;
    if (typeof i > "u") {
      const p = e.rtlTranslate ? -1 : 1;
      i = e && e.translate && e.translate * p || 0;
    }
    const t = e.params, s = e.maxTranslate() - e.minTranslate();
    let {
      progress: r,
      isBeginning: o,
      isEnd: a,
      progressLoop: l
    } = e;
    const n = o, c = a;
    if (s === 0)
      r = 0, o = !0, a = !0;
    else {
      r = (i - e.minTranslate()) / s;
      const p = Math.abs(i - e.minTranslate()) < 1, u = Math.abs(i - e.maxTranslate()) < 1;
      o = p || r <= 0, a = u || r >= 1, p && (r = 0), u && (r = 1);
    }
    if (t.loop) {
      const p = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), m = e.slidesGrid[p], h = e.slidesGrid[u], g = e.slidesGrid[e.slidesGrid.length - 1], b = Math.abs(i);
      b >= m ? l = (b - m) / g : l = (b + g - h) / g, l > 1 && (l -= 1);
    }
    Object.assign(e, {
      progress: r,
      progressLoop: l,
      isBeginning: o,
      isEnd: a
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), o && !n && e.emit("reachBeginning toEdge"), a && !c && e.emit("reachEnd toEdge"), (n && !o || c && !a) && e.emit("fromEdge"), e.emit("progress", r);
  }
  function $t() {
    const i = this, {
      slides: e,
      params: t,
      slidesEl: s,
      activeIndex: r
    } = i, o = i.virtual && t.virtual.enabled, a = i.grid && t.grid && t.grid.rows > 1, l = (u) => N(s, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    e.forEach((u) => {
      u.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
    });
    let n, c, p;
    if (o)
      if (t.loop) {
        let u = r - i.virtual.slidesBefore;
        u < 0 && (u = i.virtual.slides.length + u), u >= i.virtual.slides.length && (u -= i.virtual.slides.length), n = l(`[data-swiper-slide-index="${u}"]`);
      } else
        n = l(`[data-swiper-slide-index="${r}"]`);
    else
      a ? (n = e.filter((u) => u.column === r)[0], p = e.filter((u) => u.column === r + 1)[0], c = e.filter((u) => u.column === r - 1)[0]) : n = e[r];
    n && (n.classList.add(t.slideActiveClass), a ? (p && p.classList.add(t.slideNextClass), c && c.classList.add(t.slidePrevClass)) : (p = St(n, `.${t.slideClass}, swiper-slide`)[0], t.loop && !p && (p = e[0]), p && p.classList.add(t.slideNextClass), c = yt(n, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(t.slidePrevClass))), i.emitSlidesClasses();
  }
  const le = (i, e) => {
    if (!i || i.destroyed || !i.params)
      return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, s = e.closest(t());
    if (s) {
      let r = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !r && i.isElement && (s.shadowRoot ? r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s.shadowRoot && (r = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), r && r.remove());
      })), r && r.remove();
    }
  }, ve = (i, e) => {
    if (!i.slides[e])
      return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, xe = (i) => {
    if (!i || i.destroyed || !i.params)
      return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
      return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), r = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const a = r, l = [a - e];
      l.push(...Array.from({
        length: e
      }).map((n, c) => a + s + c)), i.slides.forEach((n, c) => {
        l.includes(n.column) && ve(i, c);
      });
      return;
    }
    const o = r + s - 1;
    if (i.params.rewind || i.params.loop)
      for (let a = r - e; a <= o + e; a += 1) {
        const l = (a % t + t) % t;
        (l < r || l > o) && ve(i, l);
      }
    else
      for (let a = Math.max(r - e, 0); a <= Math.min(o + e, t - 1); a += 1)
        a !== r && (a > o || a < r) && ve(i, a);
  };
  function Gt(i) {
    const {
      slidesGrid: e,
      params: t
    } = i, s = i.rtlTranslate ? i.translate : -i.translate;
    let r;
    for (let o = 0; o < e.length; o += 1)
      typeof e[o + 1] < "u" ? s >= e[o] && s < e[o + 1] - (e[o + 1] - e[o]) / 2 ? r = o : s >= e[o] && s < e[o + 1] && (r = o + 1) : s >= e[o] && (r = o);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
  }
  function Dt(i) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: s,
      params: r,
      activeIndex: o,
      realIndex: a,
      snapIndex: l
    } = e;
    let n = i, c;
    const p = (h) => {
      let g = h - e.virtual.slidesBefore;
      return g < 0 && (g = e.virtual.slides.length + g), g >= e.virtual.slides.length && (g -= e.virtual.slides.length), g;
    };
    if (typeof n > "u" && (n = Gt(e)), s.indexOf(t) >= 0)
      c = s.indexOf(t);
    else {
      const h = Math.min(r.slidesPerGroupSkip, n);
      c = h + Math.floor((n - h) / r.slidesPerGroup);
    }
    if (c >= s.length && (c = s.length - 1), n === o && !e.params.loop) {
      c !== l && (e.snapIndex = c, e.emit("snapIndexChange"));
      return;
    }
    if (n === o && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = p(n);
      return;
    }
    const u = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop)
      m = p(n);
    else if (u) {
      const h = e.slides.filter((b) => b.column === n)[0];
      let g = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(e.slides.indexOf(h), 0)), m = Math.floor(g / r.grid.rows);
    } else if (e.slides[n]) {
      const h = e.slides[n].getAttribute("data-swiper-slide-index");
      h ? m = parseInt(h, 10) : m = n;
    } else
      m = n;
    Object.assign(e, {
      previousSnapIndex: l,
      snapIndex: c,
      previousRealIndex: a,
      realIndex: m,
      previousIndex: o,
      activeIndex: n
    }), e.initialized && xe(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (a !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Ht(i, e) {
    const t = this, s = t.params;
    let r = i.closest(`.${s.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((l) => {
      !r && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (r = l);
    });
    let o = !1, a;
    if (r) {
      for (let l = 0; l < t.slides.length; l += 1)
        if (t.slides[l] === r) {
          o = !0, a = l;
          break;
        }
    }
    if (r && o)
      t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var Nt = {
    updateSize: Lt,
    updateSlides: It,
    updateAutoHeight: Mt,
    updateSlidesOffset: zt,
    updateSlidesProgress: Ot,
    updateProgress: Bt,
    updateSlidesClasses: $t,
    updateActiveIndex: Dt,
    updateClickedSlide: Ht
  };
  function jt(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this, {
      params: t,
      rtlTranslate: s,
      translate: r,
      wrapperEl: o
    } = e;
    if (t.virtualTranslate)
      return s ? -r : r;
    if (t.cssMode)
      return r;
    let a = vt(o, i);
    return a += e.cssOverflowAdjustment(), s && (a = -a), a || 0;
  }
  function Ft(i, e) {
    const t = this, {
      rtlTranslate: s,
      params: r,
      wrapperEl: o,
      progress: a
    } = t;
    let l = 0, n = 0;
    const c = 0;
    t.isHorizontal() ? l = s ? -i : i : n = i, r.roundLengths && (l = Math.floor(l), n = Math.floor(n)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : n, r.cssMode ? o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -n : r.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : n -= t.cssOverflowAdjustment(), o.style.transform = `translate3d(${l}px, ${n}px, ${c}px)`);
    let p;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? p = 0 : p = (i - t.minTranslate()) / u, p !== a && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
  }
  function Vt() {
    return -this.snapGrid[0];
  }
  function Rt() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function qt(i, e, t, s, r) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
    const o = this, {
      params: a,
      wrapperEl: l
    } = o;
    if (o.animating && a.preventInteractionOnTransition)
      return !1;
    const n = o.minTranslate(), c = o.maxTranslate();
    let p;
    if (s && i > n ? p = n : s && i < c ? p = c : p = i, o.updateProgress(p), a.cssMode) {
      const u = o.isHorizontal();
      if (e === 0)
        l[u ? "scrollLeft" : "scrollTop"] = -p;
      else {
        if (!o.support.smoothScroll)
          return $e({
            swiper: o,
            targetPosition: -p,
            side: u ? "left" : "top"
          }), !0;
        l.scrollTo({
          [u ? "left" : "top"]: -p,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return e === 0 ? (o.setTransition(0), o.setTranslate(p), t && (o.emit("beforeTransitionStart", e, r), o.emit("transitionEnd"))) : (o.setTransition(e), o.setTranslate(p), t && (o.emit("beforeTransitionStart", e, r), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(m) {
      !o || o.destroyed || m.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, t && o.emit("transitionEnd"));
    }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0;
  }
  var Yt = {
    getTranslate: jt,
    setTranslate: Ft,
    minTranslate: Vt,
    maxTranslate: Rt,
    translateTo: qt
  };
  function Wt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
  }
  function Ne(i) {
    let {
      swiper: e,
      runCallbacks: t,
      direction: s,
      step: r
    } = i;
    const {
      activeIndex: o,
      previousIndex: a
    } = e;
    let l = s;
    if (l || (o > a ? l = "next" : o < a ? l = "prev" : l = "reset"), e.emit(`transition${r}`), t && o !== a) {
      if (l === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`), l === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`);
    }
  }
  function Ut(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(), Ne({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "Start"
    }));
  }
  function Xt(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    t.animating = !1, !s.cssMode && (t.setTransition(0), Ne({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "End"
    }));
  }
  var Zt = {
    setTransition: Wt,
    transitionStart: Ut,
    transitionEnd: Xt
  };
  function Qt(i, e, t, s, r) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const o = this;
    let a = i;
    a < 0 && (a = 0);
    const {
      params: l,
      snapGrid: n,
      slidesGrid: c,
      previousIndex: p,
      activeIndex: u,
      rtlTranslate: m,
      wrapperEl: h,
      enabled: g
    } = o;
    if (o.animating && l.preventInteractionOnTransition || !g && !s && !r || o.destroyed)
      return !1;
    const b = Math.min(o.params.slidesPerGroupSkip, a);
    let v = b + Math.floor((a - b) / o.params.slidesPerGroup);
    v >= n.length && (v = n.length - 1);
    const d = -n[v];
    if (l.normalizeSlideIndex)
      for (let w = 0; w < c.length; w += 1) {
        const x = -Math.floor(d * 100), S = Math.floor(c[w] * 100), E = Math.floor(c[w + 1] * 100);
        typeof c[w + 1] < "u" ? x >= S && x < E - (E - S) / 2 ? a = w : x >= S && x < E && (a = w + 1) : x >= S && (a = w);
      }
    if (o.initialized && a !== u && (!o.allowSlideNext && (m ? d > o.translate && d > o.minTranslate() : d < o.translate && d < o.minTranslate()) || !o.allowSlidePrev && d > o.translate && d > o.maxTranslate() && (u || 0) !== a))
      return !1;
    a !== (p || 0) && t && o.emit("beforeSlideChangeStart"), o.updateProgress(d);
    let f;
    if (a > u ? f = "next" : a < u ? f = "prev" : f = "reset", m && -d === o.translate || !m && d === o.translate)
      return o.updateActiveIndex(a), l.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), l.effect !== "slide" && o.setTranslate(d), f !== "reset" && (o.transitionStart(t, f), o.transitionEnd(t, f)), !1;
    if (l.cssMode) {
      const w = o.isHorizontal(), x = m ? d : -d;
      if (e === 0) {
        const S = o.virtual && o.params.virtual.enabled;
        S && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), S && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          h[w ? "scrollLeft" : "scrollTop"] = x;
        })) : h[w ? "scrollLeft" : "scrollTop"] = x, S && requestAnimationFrame(() => {
          o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1;
        });
      } else {
        if (!o.support.smoothScroll)
          return $e({
            swiper: o,
            targetPosition: x,
            side: w ? "left" : "top"
          }), !0;
        h.scrollTo({
          [w ? "left" : "top"]: x,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return o.setTransition(e), o.setTranslate(d), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", e, s), o.transitionStart(t, f), e === 0 ? o.transitionEnd(t, f) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(x) {
      !o || o.destroyed || x.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(t, f));
    }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0;
  }
  function Kt(i, e, t, s) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const r = this;
    if (r.destroyed)
      return;
    const o = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = i;
    if (r.params.loop)
      if (r.virtual && r.params.virtual.enabled)
        a = a + r.virtual.slidesBefore;
      else {
        let l;
        if (o) {
          const m = a * r.params.grid.rows;
          l = r.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === m)[0].column;
        } else
          l = r.getSlideIndexByData(a);
        const n = o ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, {
          centeredSlides: c
        } = r.params;
        let p = r.params.slidesPerView;
        p === "auto" ? p = r.slidesPerViewDynamic() : (p = Math.ceil(parseFloat(r.params.slidesPerView, 10)), c && p % 2 === 0 && (p = p + 1));
        let u = n - l < p;
        if (c && (u = u || l < Math.ceil(p / 2)), u) {
          const m = c ? l < r.activeIndex ? "prev" : "next" : l - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
          r.loopFix({
            direction: m,
            slideTo: !0,
            activeSlideIndex: m === "next" ? l + 1 : l - n + 1,
            slideRealIndex: m === "next" ? r.realIndex : void 0
          });
        }
        if (o) {
          const m = a * r.params.grid.rows;
          a = r.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === m)[0].column;
        } else
          a = r.getSlideIndexByData(a);
      }
    return requestAnimationFrame(() => {
      r.slideTo(a, e, t, s);
    }), r;
  }
  function Jt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      enabled: r,
      params: o,
      animating: a
    } = s;
    if (!r || s.destroyed)
      return s;
    let l = o.slidesPerGroup;
    o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const n = s.activeIndex < o.slidesPerGroupSkip ? 1 : l, c = s.virtual && o.virtual.enabled;
    if (o.loop) {
      if (a && !c && o.loopPreventsSliding)
        return !1;
      if (s.loopFix({
        direction: "next"
      }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && o.cssMode)
        return requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + n, i, e, t);
        }), !0;
    }
    return o.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + n, i, e, t);
  }
  function ei(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      params: r,
      snapGrid: o,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: n,
      animating: c
    } = s;
    if (!n || s.destroyed)
      return s;
    const p = s.virtual && r.virtual.enabled;
    if (r.loop) {
      if (c && !p && r.loopPreventsSliding)
        return !1;
      s.loopFix({
        direction: "prev"
      }), s._clientLeft = s.wrapperEl.clientLeft;
    }
    const u = l ? s.translate : -s.translate;
    function m(d) {
      return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
    }
    const h = m(u), g = o.map((d) => m(d));
    let b = o[g.indexOf(h) - 1];
    if (typeof b > "u" && r.cssMode) {
      let d;
      o.forEach((f, w) => {
        h >= f && (d = w);
      }), typeof d < "u" && (b = o[d > 0 ? d - 1 : d]);
    }
    let v = 0;
    if (typeof b < "u" && (v = a.indexOf(b), v < 0 && (v = s.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (v = v - s.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), r.rewind && s.isBeginning) {
      const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
      return s.slideTo(d, i, e, t);
    } else if (r.loop && s.activeIndex === 0 && r.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(v, i, e, t);
      }), !0;
    return s.slideTo(v, i, e, t);
  }
  function ti(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
      return s.slideTo(s.activeIndex, i, e, t);
  }
  function ii(i, e, t, s) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
    const r = this;
    if (r.destroyed)
      return;
    let o = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, o), l = a + Math.floor((o - a) / r.params.slidesPerGroup), n = r.rtlTranslate ? r.translate : -r.translate;
    if (n >= r.snapGrid[l]) {
      const c = r.snapGrid[l], p = r.snapGrid[l + 1];
      n - c > (p - c) * s && (o += r.params.slidesPerGroup);
    } else {
      const c = r.snapGrid[l - 1], p = r.snapGrid[l];
      n - c <= (p - c) * s && (o -= r.params.slidesPerGroup);
    }
    return o = Math.max(o, 0), o = Math.min(o, r.slidesGrid.length - 1), r.slideTo(o, i, e, t);
  }
  function si() {
    const i = this;
    if (i.destroyed)
      return;
    const {
      params: e,
      slidesEl: t
    } = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let r = i.clickedIndex, o;
    const a = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (i.animating)
        return;
      o = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? r < i.loopedSlides - s / 2 || r > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), r = i.getSlideIndex(N(t, `${a}[data-swiper-slide-index="${o}"]`)[0]), me(() => {
        i.slideTo(r);
      })) : i.slideTo(r) : r > i.slides.length - s ? (i.loopFix(), r = i.getSlideIndex(N(t, `${a}[data-swiper-slide-index="${o}"]`)[0]), me(() => {
        i.slideTo(r);
      })) : i.slideTo(r);
    } else
      i.slideTo(r);
  }
  var oi = {
    slideTo: Qt,
    slideToLoop: Kt,
    slideNext: Jt,
    slidePrev: ei,
    slideReset: ti,
    slideToClosest: ii,
    slideToClickedSlide: si
  };
  function ri(i) {
    const e = this, {
      params: t,
      slidesEl: s
    } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
      return;
    const r = () => {
      N(s, `.${t.slideClass}, swiper-slide`).forEach((u, m) => {
        u.setAttribute("data-swiper-slide-index", m);
      });
    }, o = e.grid && t.grid && t.grid.rows > 1, a = t.slidesPerGroup * (o ? t.grid.rows : 1), l = e.slides.length % a !== 0, n = o && e.slides.length % t.grid.rows !== 0, c = (p) => {
      for (let u = 0; u < p; u += 1) {
        const m = e.isElement ? ne("swiper-slide", [t.slideBlankClass]) : ne("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(m);
      }
    };
    if (l) {
      if (t.loopAddBlankSlides) {
        const p = a - e.slides.length % a;
        c(p), e.recalcSlides(), e.updateSlides();
      } else
        re("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r();
    } else if (n) {
      if (t.loopAddBlankSlides) {
        const p = t.grid.rows - e.slides.length % t.grid.rows;
        c(p), e.recalcSlides(), e.updateSlides();
      } else
        re("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r();
    } else
      r();
    e.loopFix({
      slideRealIndex: i,
      direction: t.centeredSlides ? void 0 : "next"
    });
  }
  function ni(i) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: r,
      activeSlideIndex: o,
      byController: a,
      byMousewheel: l
    } = i === void 0 ? {} : i;
    const n = this;
    if (!n.params.loop)
      return;
    n.emit("beforeLoopFix");
    const {
      slides: c,
      allowSlidePrev: p,
      allowSlideNext: u,
      slidesEl: m,
      params: h
    } = n, {
      centeredSlides: g
    } = h;
    if (n.allowSlidePrev = !0, n.allowSlideNext = !0, n.virtual && h.virtual.enabled) {
      t && (!h.centeredSlides && n.snapIndex === 0 ? n.slideTo(n.virtual.slides.length, 0, !1, !0) : h.centeredSlides && n.snapIndex < h.slidesPerView ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0) : n.snapIndex === n.snapGrid.length - 1 && n.slideTo(n.virtual.slidesBefore, 0, !1, !0)), n.allowSlidePrev = p, n.allowSlideNext = u, n.emit("loopFix");
      return;
    }
    let b = h.slidesPerView;
    b === "auto" ? b = n.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(h.slidesPerView, 10)), g && b % 2 === 0 && (b = b + 1));
    const v = h.slidesPerGroupAuto ? b : h.slidesPerGroup;
    let d = v;
    d % v !== 0 && (d += v - d % v), d += h.loopAdditionalSlides, n.loopedSlides = d;
    const f = n.grid && h.grid && h.grid.rows > 1;
    c.length < b + d ? re("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : f && h.grid.fill === "row" && re("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const w = [], x = [];
    let S = n.activeIndex;
    typeof o > "u" ? o = n.getSlideIndex(c.filter((k) => k.classList.contains(h.slideActiveClass))[0]) : S = o;
    const E = s === "next" || !s, $ = s === "prev" || !s;
    let T = 0, z = 0;
    const y = f ? Math.ceil(c.length / h.grid.rows) : c.length, _ = (f ? c[o].column : o) + (g && typeof r > "u" ? -b / 2 + 0.5 : 0);
    if (_ < d) {
      T = Math.max(d - _, v);
      for (let k = 0; k < d - _; k += 1) {
        const P = k - Math.floor(k / y) * y;
        if (f) {
          const L = y - P - 1;
          for (let V = c.length - 1; V >= 0; V -= 1)
            c[V].column === L && w.push(V);
        } else
          w.push(y - P - 1);
      }
    } else if (_ + b > y - d) {
      z = Math.max(_ - (y - d * 2), v);
      for (let k = 0; k < z; k += 1) {
        const P = k - Math.floor(k / y) * y;
        f ? c.forEach((L, V) => {
          L.column === P && x.push(V);
        }) : x.push(P);
      }
    }
    if (n.__preventObserver__ = !0, requestAnimationFrame(() => {
      n.__preventObserver__ = !1;
    }), $ && w.forEach((k) => {
      c[k].swiperLoopMoveDOM = !0, m.prepend(c[k]), c[k].swiperLoopMoveDOM = !1;
    }), E && x.forEach((k) => {
      c[k].swiperLoopMoveDOM = !0, m.append(c[k]), c[k].swiperLoopMoveDOM = !1;
    }), n.recalcSlides(), h.slidesPerView === "auto" ? n.updateSlides() : f && (w.length > 0 && $ || x.length > 0 && E) && n.slides.forEach((k, P) => {
      n.grid.updateSlide(P, k, n.slides);
    }), h.watchSlidesProgress && n.updateSlidesOffset(), t) {
      if (w.length > 0 && $) {
        if (typeof e > "u") {
          const k = n.slidesGrid[S], L = n.slidesGrid[S + T] - k;
          l ? n.setTranslate(n.translate - L) : (n.slideTo(S + Math.ceil(T), 0, !1, !0), r && (n.touchEventsData.startTranslate = n.touchEventsData.startTranslate - L, n.touchEventsData.currentTranslate = n.touchEventsData.currentTranslate - L));
        } else if (r) {
          const k = f ? w.length / h.grid.rows : w.length;
          n.slideTo(n.activeIndex + k, 0, !1, !0), n.touchEventsData.currentTranslate = n.translate;
        }
      } else if (x.length > 0 && E)
        if (typeof e > "u") {
          const k = n.slidesGrid[S], L = n.slidesGrid[S - z] - k;
          l ? n.setTranslate(n.translate - L) : (n.slideTo(S - z, 0, !1, !0), r && (n.touchEventsData.startTranslate = n.touchEventsData.startTranslate - L, n.touchEventsData.currentTranslate = n.touchEventsData.currentTranslate - L));
        } else {
          const k = f ? x.length / h.grid.rows : x.length;
          n.slideTo(n.activeIndex - k, 0, !1, !0);
        }
    }
    if (n.allowSlidePrev = p, n.allowSlideNext = u, n.controller && n.controller.control && !a) {
      const k = {
        slideRealIndex: e,
        direction: s,
        setTranslate: r,
        activeSlideIndex: o,
        byController: !0
      };
      Array.isArray(n.controller.control) ? n.controller.control.forEach((P) => {
        !P.destroyed && P.params.loop && P.loopFix({
          ...k,
          slideTo: P.params.slidesPerView === h.slidesPerView ? t : !1
        });
      }) : n.controller.control instanceof n.constructor && n.controller.control.params.loop && n.controller.control.loopFix({
        ...k,
        slideTo: n.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
      });
    }
    n.emit("loopFix");
  }
  function ai() {
    const i = this, {
      params: e,
      slidesEl: t
    } = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
      return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach((r) => {
      const o = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
      s[o] = r;
    }), i.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }), s.forEach((r) => {
      t.append(r);
    }), i.recalcSlides(), i.slideTo(i.realIndex, 0);
  }
  var li = {
    loopCreate: ri,
    loopFix: ni,
    loopDestroy: ai
  };
  function ci(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function di() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
      i.__preventObserver__ = !1;
    }));
  }
  var pi = {
    setGrabCursor: ci,
    unsetGrabCursor: di
  };
  function ui(i, e) {
    e === void 0 && (e = this);
    function t(s) {
      if (!s || s === W() || s === O())
        return null;
      s.assignedSlot && (s = s.assignedSlot);
      const r = s.closest(i);
      return !r && !s.getRootNode ? null : r || t(s.getRootNode().host);
    }
    return t(e);
  }
  function je(i, e, t) {
    const s = O(), {
      params: r
    } = i, o = r.edgeSwipeDetection, a = r.edgeSwipeThreshold;
    return o && (t <= a || t >= s.innerWidth - a) ? o === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function fi(i) {
    const e = this, t = W();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const r = e.touchEventsData;
    if (s.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== s.pointerId)
        return;
      r.pointerId = s.pointerId;
    } else
      s.type === "touchstart" && s.targetTouches.length === 1 && (r.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
      je(e, s, s.targetTouches[0].pageX);
      return;
    }
    const {
      params: o,
      touches: a,
      enabled: l
    } = e;
    if (!l || !o.simulateTouch && s.pointerType === "mouse" || e.animating && o.preventInteractionOnTransition)
      return;
    !e.animating && o.cssMode && o.loop && e.loopFix();
    let n = s.target;
    if (o.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(n) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || r.isTouched && r.isMoved)
      return;
    const c = !!o.noSwipingClass && o.noSwipingClass !== "", p = s.composedPath ? s.composedPath() : s.path;
    c && s.target && s.target.shadowRoot && p && (n = p[0]);
    const u = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, m = !!(s.target && s.target.shadowRoot);
    if (o.noSwiping && (m ? ui(u, n) : n.closest(u))) {
      e.allowClick = !0;
      return;
    }
    if (o.swipeHandler && !n.closest(o.swipeHandler))
      return;
    a.currentX = s.pageX, a.currentY = s.pageY;
    const h = a.currentX, g = a.currentY;
    if (!je(e, s, h))
      return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), a.startX = h, a.startY = g, r.touchStartTime = ie(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, o.threshold > 0 && (r.allowThresholdMove = !1);
    let b = !0;
    n.matches(r.focusableElements) && (b = !1, n.nodeName === "SELECT" && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== n && t.activeElement.blur();
    const v = b && e.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || v) && !n.isContentEditable && s.preventDefault(), o.freeMode && o.freeMode.enabled && e.freeMode && e.animating && !o.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
  }
  function mi(i) {
    const e = W(), t = this, s = t.touchEventsData, {
      params: r,
      touches: o,
      rtlTranslate: a,
      enabled: l
    } = t;
    if (!l || !r.simulateTouch && i.pointerType === "mouse")
      return;
    let n = i;
    if (n.originalEvent && (n = n.originalEvent), n.type === "pointermove" && (s.touchId !== null || n.pointerId !== s.pointerId))
      return;
    let c;
    if (n.type === "touchmove") {
      if (c = [...n.changedTouches].filter((E) => E.identifier === s.touchId)[0], !c || c.identifier !== s.touchId)
        return;
    } else
      c = n;
    if (!s.isTouched) {
      s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", n);
      return;
    }
    const p = c.pageX, u = c.pageY;
    if (n.preventedByNestedSwiper) {
      o.startX = p, o.startY = u;
      return;
    }
    if (!t.allowTouchMove) {
      n.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(o, {
        startX: p,
        startY: u,
        currentX: p,
        currentY: u
      }), s.touchStartTime = ie());
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop) {
      if (t.isVertical()) {
        if (u < o.startY && t.translate <= t.maxTranslate() || u > o.startY && t.translate >= t.minTranslate()) {
          s.isTouched = !1, s.isMoved = !1;
          return;
        }
      } else if (p < o.startX && t.translate <= t.maxTranslate() || p > o.startX && t.translate >= t.minTranslate())
        return;
    }
    if (e.activeElement && n.target === e.activeElement && n.target.matches(s.focusableElements)) {
      s.isMoved = !0, t.allowClick = !1;
      return;
    }
    s.allowTouchCallbacks && t.emit("touchMove", n), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = u;
    const m = o.currentX - o.startX, h = o.currentY - o.startY;
    if (t.params.threshold && Math.sqrt(m ** 2 + h ** 2) < t.params.threshold)
      return;
    if (typeof s.isScrolling > "u") {
      let E;
      t.isHorizontal() && o.currentY === o.startY || t.isVertical() && o.currentX === o.startX ? s.isScrolling = !1 : m * m + h * h >= 25 && (E = Math.atan2(Math.abs(h), Math.abs(m)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? E > r.touchAngle : 90 - E > r.touchAngle);
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", n), typeof s.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (s.startMoving = !0), s.isScrolling) {
      s.isTouched = !1;
      return;
    }
    if (!s.startMoving)
      return;
    t.allowClick = !1, !r.cssMode && n.cancelable && n.preventDefault(), r.touchMoveStopPropagation && !r.nested && n.stopPropagation();
    let g = t.isHorizontal() ? m : h, b = t.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
    r.oneWayMovement && (g = Math.abs(g) * (a ? 1 : -1), b = Math.abs(b) * (a ? 1 : -1)), o.diff = g, g *= r.touchRatio, a && (g = -g, b = -b);
    const v = t.touchesDirection;
    t.swipeDirection = g > 0 ? "prev" : "next", t.touchesDirection = b > 0 ? "prev" : "next";
    const d = t.params.loop && !r.cssMode, f = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
      if (d && f && t.loopFix({
        direction: t.swipeDirection
      }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const E = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        t.wrapperEl.dispatchEvent(E);
      }
      s.allowMomentumBounce = !1, r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", n);
    }
    let w;
    if ((/* @__PURE__ */ new Date()).getTime(), s.isMoved && s.allowThresholdMove && v !== t.touchesDirection && d && f && Math.abs(g) >= 1) {
      Object.assign(o, {
        startX: p,
        startY: u,
        currentX: p,
        currentY: u,
        startTranslate: s.currentTranslate
      }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
      return;
    }
    t.emit("sliderMove", n), s.isMoved = !0, s.currentTranslate = g + s.startTranslate;
    let x = !0, S = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (S = 0), g > 0 ? (d && f && !w && s.allowThresholdMove && s.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), s.currentTranslate > t.minTranslate() && (x = !1, r.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + g) ** S))) : g < 0 && (d && f && !w && s.allowThresholdMove && s.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), s.currentTranslate < t.maxTranslate() && (x = !1, r.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - g) ** S))), x && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), r.threshold > 0)
      if (Math.abs(g) > r.threshold || s.allowThresholdMove) {
        if (!s.allowThresholdMove) {
          s.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, s.currentTranslate = s.startTranslate, o.diff = t.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
          return;
        }
      } else {
        s.currentTranslate = s.startTranslate;
        return;
      }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate));
  }
  function hi(i) {
    const e = this, t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let r;
    if (s.type === "touchend" || s.type === "touchcancel") {
      if (r = [...s.changedTouches].filter((S) => S.identifier === t.touchId)[0], !r || r.identifier !== t.touchId)
        return;
    } else {
      if (t.touchId !== null || s.pointerId !== t.pointerId)
        return;
      r = s;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    t.pointerId = null, t.touchId = null;
    const {
      params: a,
      touches: l,
      rtlTranslate: n,
      slidesGrid: c,
      enabled: p
    } = e;
    if (!p || !a.simulateTouch && s.pointerType === "mouse")
      return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && a.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return;
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = ie(), m = u - t.touchStartTime;
    if (e.allowClick) {
      const S = s.path || s.composedPath && s.composedPath();
      e.updateClickedSlide(S && S[0] || s.target, S), e.emit("tap click", s), m < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
    }
    if (t.lastClickTime = ie(), me(() => {
      e.destroyed || (e.allowClick = !0);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return;
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let h;
    if (a.followFinger ? h = n ? e.translate : -e.translate : h = -t.currentTranslate, a.cssMode)
      return;
    if (a.freeMode && a.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: h
      });
      return;
    }
    const g = h >= -e.maxTranslate() && !e.params.loop;
    let b = 0, v = e.slidesSizesGrid[0];
    for (let S = 0; S < c.length; S += S < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      const E = S < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof c[S + E] < "u" ? (g || h >= c[S] && h < c[S + E]) && (b = S, v = c[S + E] - c[S]) : (g || h >= c[S]) && (b = S, v = c[c.length - 1] - c[c.length - 2]);
    }
    let d = null, f = null;
    a.rewind && (e.isBeginning ? f = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (d = 0));
    const w = (h - c[b]) / v, x = b < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (m > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (w >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? d : b + x) : e.slideTo(b)), e.swipeDirection === "prev" && (w > 1 - a.longSwipesRatio ? e.slideTo(b + x) : f !== null && w < 0 && Math.abs(w) > a.longSwipesRatio ? e.slideTo(f) : e.slideTo(b));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(b + x) : e.slideTo(b) : (e.swipeDirection === "next" && e.slideTo(d !== null ? d : b + x), e.swipeDirection === "prev" && e.slideTo(f !== null ? f : b));
    }
  }
  function Fe() {
    const i = this, {
      params: e,
      el: t
    } = i;
    if (t && t.offsetWidth === 0)
      return;
    e.breakpoints && i.setBreakpoint();
    const {
      allowSlideNext: s,
      allowSlidePrev: r,
      snapGrid: o
    } = i, a = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
    const l = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !a ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
      i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
    }, 500)), i.allowSlidePrev = r, i.allowSlideNext = s, i.params.watchOverflow && o !== i.snapGrid && i.checkOverflow();
  }
  function gi(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
  }
  function wi() {
    const i = this, {
      wrapperEl: e,
      rtlTranslate: t,
      enabled: s
    } = i;
    if (!s)
      return;
    i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
    let r;
    const o = i.maxTranslate() - i.minTranslate();
    o === 0 ? r = 0 : r = (i.translate - i.minTranslate()) / o, r !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
  }
  function bi(i) {
    const e = this;
    le(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function vi() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
  }
  const Ve = (i, e) => {
    const t = W(), {
      params: s,
      el: r,
      wrapperEl: o,
      device: a
    } = i, l = !!s.nested, n = e === "on" ? "addEventListener" : "removeEventListener", c = e;
    t[n]("touchstart", i.onDocumentTouchStart, {
      passive: !1,
      capture: l
    }), r[n]("touchstart", i.onTouchStart, {
      passive: !1
    }), r[n]("pointerdown", i.onTouchStart, {
      passive: !1
    }), t[n]("touchmove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[n]("pointermove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[n]("touchend", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointerup", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointercancel", i.onTouchEnd, {
      passive: !0
    }), t[n]("touchcancel", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointerout", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointerleave", i.onTouchEnd, {
      passive: !0
    }), t[n]("contextmenu", i.onTouchEnd, {
      passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && r[n]("click", i.onClick, !0), s.cssMode && o[n]("scroll", i.onScroll), s.updateOnWindowResize ? i[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Fe, !0) : i[c]("observerUpdate", Fe, !0), r[n]("load", i.onLoad, {
      capture: !0
    });
  };
  function xi() {
    const i = this, {
      params: e
    } = i;
    i.onTouchStart = fi.bind(i), i.onTouchMove = mi.bind(i), i.onTouchEnd = hi.bind(i), i.onDocumentTouchStart = vi.bind(i), e.cssMode && (i.onScroll = wi.bind(i)), i.onClick = gi.bind(i), i.onLoad = bi.bind(i), Ve(i, "on");
  }
  function yi() {
    Ve(this, "off");
  }
  var Si = {
    attachEvents: xi,
    detachEvents: yi
  };
  const Re = (i, e) => i.grid && e.grid && e.grid.rows > 1;
  function ki() {
    const i = this, {
      realIndex: e,
      initialized: t,
      params: s,
      el: r
    } = i, o = s.breakpoints;
    if (!o || o && Object.keys(o).length === 0)
      return;
    const a = i.getBreakpoint(o, i.params.breakpointsBase, i.el);
    if (!a || i.currentBreakpoint === a)
      return;
    const n = (a in o ? o[a] : void 0) || i.originalParams, c = Re(i, s), p = Re(i, n), u = s.enabled;
    c && !p ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !c && p && (r.classList.add(`${s.containerModifierClass}grid`), (n.grid.fill && n.grid.fill === "column" || !n.grid.fill && s.grid.fill === "column") && r.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((d) => {
      if (typeof n[d] > "u")
        return;
      const f = s[d] && s[d].enabled, w = n[d] && n[d].enabled;
      f && !w && i[d].disable(), !f && w && i[d].enable();
    });
    const m = n.direction && n.direction !== s.direction, h = s.loop && (n.slidesPerView !== s.slidesPerView || m), g = s.loop;
    m && t && i.changeDirection(), B(i.params, n);
    const b = i.params.enabled, v = i.params.loop;
    Object.assign(i, {
      allowTouchMove: i.params.allowTouchMove,
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev
    }), u && !b ? i.disable() : !u && b && i.enable(), i.currentBreakpoint = a, i.emit("_beforeBreakpoint", n), t && (h ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !g && v ? (i.loopCreate(e), i.updateSlides()) : g && !v && i.loopDestroy()), i.emit("breakpoint", n);
  }
  function _i(i, e, t) {
    if (e === void 0 && (e = "window"), !i || e === "container" && !t)
      return;
    let s = !1;
    const r = O(), o = e === "window" ? r.innerHeight : t.clientHeight, a = Object.keys(i).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const n = parseFloat(l.substr(1));
        return {
          value: o * n,
          point: l
        };
      }
      return {
        value: l,
        point: l
      };
    });
    a.sort((l, n) => parseInt(l.value, 10) - parseInt(n.value, 10));
    for (let l = 0; l < a.length; l += 1) {
      const {
        point: n,
        value: c
      } = a[l];
      e === "window" ? r.matchMedia(`(min-width: ${c}px)`).matches && (s = n) : c <= t.clientWidth && (s = n);
    }
    return s || "max";
  }
  var Ci = {
    setBreakpoint: ki,
    getBreakpoint: _i
  };
  function Ai(i, e) {
    const t = [];
    return i.forEach((s) => {
      typeof s == "object" ? Object.keys(s).forEach((r) => {
        s[r] && t.push(e + r);
      }) : typeof s == "string" && t.push(e + s);
    }), t;
  }
  function Ti() {
    const i = this, {
      classNames: e,
      params: t,
      rtl: s,
      el: r,
      device: o
    } = i, a = Ai(["initialized", t.direction, {
      "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
      autoheight: t.autoHeight
    }, {
      rtl: s
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
    e.push(...a), r.classList.add(...e), i.emitContainerClasses();
  }
  function Ei() {
    const i = this, {
      el: e,
      classNames: t
    } = i;
    e.classList.remove(...t), i.emitContainerClasses();
  }
  var Pi = {
    addClasses: Ti,
    removeClasses: Ei
  };
  function Li() {
    const i = this, {
      isLocked: e,
      params: t
    } = i, {
      slidesOffsetBefore: s
    } = t;
    if (s) {
      const r = i.slides.length - 1, o = i.slidesGrid[r] + i.slidesSizesGrid[r] + s * 2;
      i.isLocked = i.size > o;
    } else
      i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
  }
  var Ii = {
    checkOverflow: Li
  }, qe = {
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
  function Mi(i, e) {
    return function(s) {
      s === void 0 && (s = {});
      const r = Object.keys(s)[0], o = s[r];
      if (typeof o != "object" || o === null) {
        B(e, s);
        return;
      }
      if (i[r] === !0 && (i[r] = {
        enabled: !0
      }), r === "navigation" && i[r] && i[r].enabled && !i[r].prevEl && !i[r].nextEl && (i[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && i[r] && i[r].enabled && !i[r].el && (i[r].auto = !0), !(r in i && "enabled" in o)) {
        B(e, s);
        return;
      }
      typeof i[r] == "object" && !("enabled" in i[r]) && (i[r].enabled = !0), i[r] || (i[r] = {
        enabled: !1
      }), B(e, s);
    };
  }
  const ye = {
    eventsEmitter: Pt,
    update: Nt,
    translate: Yt,
    transition: Zt,
    slide: oi,
    loop: li,
    grabCursor: pi,
    events: Si,
    breakpoints: Ci,
    checkOverflow: Ii,
    classes: Pi
  }, Se = {};
  class H {
    constructor() {
      let e, t;
      for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
        r[o] = arguments[o];
      r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e, t] = r, t || (t = {}), t = B({}, t), e && !t.el && (t.el = e);
      const a = W();
      if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
        const p = [];
        return a.querySelectorAll(t.el).forEach((u) => {
          const m = B({}, t, {
            el: u
          });
          p.push(new H(m));
        }), p;
      }
      const l = this;
      l.__swiper__ = !0, l.support = De(), l.device = He({
        userAgent: t.userAgent
      }), l.browser = At(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const n = {};
      l.modules.forEach((p) => {
        p({
          params: t,
          swiper: l,
          extendParams: Mi(t, n),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      const c = B({}, qe, n);
      return l.params = B({}, c, Se, t), l.originalParams = B({}, l.params), l.passedParams = B({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((p) => {
        l.on(p, l.params.on[p]);
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
        params: s
      } = this, r = N(t, `.${s.slideClass}, swiper-slide`), o = ae(r[0]);
      return ae(e) - o;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
    }
    recalcSlides() {
      const e = this, {
        slidesEl: t,
        params: s
      } = e;
      e.slides = N(t, `.${s.slideClass}, swiper-slide`);
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
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = s.minTranslate(), a = (s.maxTranslate() - r) * e + r;
      s.translateTo(a, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el)
        return;
      const t = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el)
        return;
      const t = [];
      e.slides.forEach((s) => {
        const r = e.getSlideClasses(s);
        t.push({
          slideEl: s,
          classNames: r
        }), e.emit("_slideClass", s, r);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const s = this, {
        params: r,
        slides: o,
        slidesGrid: a,
        slidesSizesGrid: l,
        size: n,
        activeIndex: c
      } = s;
      let p = 1;
      if (typeof r.slidesPerView == "number")
        return r.slidesPerView;
      if (r.centeredSlides) {
        let u = o[c] ? Math.ceil(o[c].swiperSlideSize) : 0, m;
        for (let h = c + 1; h < o.length; h += 1)
          o[h] && !m && (u += Math.ceil(o[h].swiperSlideSize), p += 1, u > n && (m = !0));
        for (let h = c - 1; h >= 0; h -= 1)
          o[h] && !m && (u += o[h].swiperSlideSize, p += 1, u > n && (m = !0));
      } else if (e === "current")
        for (let u = c + 1; u < o.length; u += 1)
          (t ? a[u] + l[u] - a[c] < n : a[u] - a[c] < n) && (p += 1);
      else
        for (let u = c - 1; u >= 0; u -= 1)
          a[c] - a[u] < n && (p += 1);
      return p;
    }
    update() {
      const e = this;
      if (!e || e.destroyed)
        return;
      const {
        snapGrid: t,
        params: s
      } = e;
      s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && le(e, a);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function r() {
        const a = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
        e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let o;
      if (s.freeMode && s.freeMode.enabled && !s.cssMode)
        r(), s.autoHeight && e.updateAutoHeight();
      else {
        if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const a = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          o = e.slideTo(a.length - 1, 0, !1, !0);
        } else
          o = e.slideTo(e.activeIndex, 0, !1, !0);
        o || r();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const s = this, r = s.params.direction;
      return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((o) => {
        e === "vertical" ? o.style.width = "" : o.style.height = "";
      }), s.emit("changeDirection"), t && s.update()), s;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted)
        return !0;
      let s = e || t.params.el;
      if (typeof s == "string" && (s = document.querySelector(s)), !s)
        return !1;
      s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
      const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : N(s, r())[0];
      return !a && t.params.createElements && (a = ne("div", t.params.wrapperClass), s.append(a), N(s, `.${t.params.slideClass}`).forEach((l) => {
        a.append(l);
      })), Object.assign(t, {
        el: s,
        wrapperEl: a,
        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        // RTL
        rtl: s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl"),
        wrongRTL: F(a, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1)
        return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
      const r = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((o) => {
        o.complete ? le(t, o) : o.addEventListener("load", (a) => {
          le(t, a.target);
        });
      }), xe(t), t.initialized = !0, xe(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const s = this, {
        params: r,
        el: o,
        wrapperEl: a,
        slides: l
      } = s;
      return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), o.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach((n) => {
        n.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), n.removeAttribute("style"), n.removeAttribute("data-swiper-slide-index");
      })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((n) => {
        s.off(n);
      }), e !== !1 && (s.el.swiper = null, wt(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
      B(Se, e);
    }
    static get extendedDefaults() {
      return Se;
    }
    static get defaults() {
      return qe;
    }
    static installModule(e) {
      H.prototype.__modules__ || (H.prototype.__modules__ = []);
      const t = H.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((t) => H.installModule(t)), H) : (H.installModule(e), H);
    }
  }
  Object.keys(ye).forEach((i) => {
    Object.keys(ye[i]).forEach((e) => {
      H.prototype[e] = ye[i][e];
    });
  }), H.use([Tt, Et]);
  function Ye(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach((r) => {
      if (!t[r] && t.auto === !0) {
        let o = N(i.el, `.${s[r]}`)[0];
        o || (o = ne("div", s[r]), o.className = s[r], i.el.append(o)), t[r] = o, e[r] = o;
      }
    }), t;
  }
  function zi(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: r
    } = i;
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
    function o(g) {
      let b;
      return g && typeof g == "string" && e.isElement && (b = e.el.querySelector(g), b) ? b : (g && (typeof g == "string" && (b = [...document.querySelectorAll(g)]), e.params.uniqueNavElements && typeof g == "string" && b.length > 1 && e.el.querySelectorAll(g).length === 1 && (b = e.el.querySelector(g))), g && !b ? g : b);
    }
    function a(g, b) {
      const v = e.params.navigation;
      g = M(g), g.forEach((d) => {
        d && (d.classList[b ? "add" : "remove"](...v.disabledClass.split(" ")), d.tagName === "BUTTON" && (d.disabled = b), e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](v.lockClass));
      });
    }
    function l() {
      const {
        nextEl: g,
        prevEl: b
      } = e.navigation;
      if (e.params.loop) {
        a(b, !1), a(g, !1);
        return;
      }
      a(b, e.isBeginning && !e.params.rewind), a(g, e.isEnd && !e.params.rewind);
    }
    function n(g) {
      g.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), r("navigationPrev"));
    }
    function c(g) {
      g.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), r("navigationNext"));
    }
    function p() {
      const g = e.params.navigation;
      if (e.params.navigation = Ye(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(g.nextEl || g.prevEl))
        return;
      let b = o(g.nextEl), v = o(g.prevEl);
      Object.assign(e.navigation, {
        nextEl: b,
        prevEl: v
      }), b = M(b), v = M(v);
      const d = (f, w) => {
        f && f.addEventListener("click", w === "next" ? c : n), !e.enabled && f && f.classList.add(...g.lockClass.split(" "));
      };
      b.forEach((f) => d(f, "next")), v.forEach((f) => d(f, "prev"));
    }
    function u() {
      let {
        nextEl: g,
        prevEl: b
      } = e.navigation;
      g = M(g), b = M(b);
      const v = (d, f) => {
        d.removeEventListener("click", f === "next" ? c : n), d.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      g.forEach((d) => v(d, "next")), b.forEach((d) => v(d, "prev"));
    }
    s("init", () => {
      e.params.navigation.enabled === !1 ? h() : (p(), l());
    }), s("toEdge fromEdge lock unlock", () => {
      l();
    }), s("destroy", () => {
      u();
    }), s("enable disable", () => {
      let {
        nextEl: g,
        prevEl: b
      } = e.navigation;
      if (g = M(g), b = M(b), e.enabled) {
        l();
        return;
      }
      [...g, ...b].filter((v) => !!v).forEach((v) => v.classList.add(e.params.navigation.lockClass));
    }), s("click", (g, b) => {
      let {
        nextEl: v,
        prevEl: d
      } = e.navigation;
      v = M(v), d = M(d);
      const f = b.target;
      if (e.params.navigation.hideOnClick && !d.includes(f) && !v.includes(f)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === f || e.pagination.el.contains(f)))
          return;
        let w;
        v.length ? w = v[0].classList.contains(e.params.navigation.hiddenClass) : d.length && (w = d[0].classList.contains(e.params.navigation.hiddenClass)), r(w === !0 ? "navigationShow" : "navigationHide"), [...v, ...d].filter((x) => !!x).forEach((x) => x.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const m = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), p(), l();
    }, h = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u();
    };
    Object.assign(e.navigation, {
      enable: m,
      disable: h,
      update: l,
      init: p,
      destroy: u
    });
  }
  function Q(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function Oi(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: r
    } = i;
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
        formatFractionCurrent: (d) => d,
        formatFractionTotal: (d) => d,
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
    let a, l = 0;
    function n() {
      return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
    }
    function c(d, f) {
      const {
        bulletActiveClass: w
      } = e.params.pagination;
      d && (d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`], d && (d.classList.add(`${w}-${f}`), d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`], d && d.classList.add(`${w}-${f}-${f}`)));
    }
    function p(d) {
      const f = d.target.closest(Q(e.params.pagination.bulletClass));
      if (!f)
        return;
      d.preventDefault();
      const w = ae(f) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === w)
          return;
        e.slideToLoop(w);
      } else
        e.slideTo(w);
    }
    function u() {
      const d = e.rtl, f = e.params.pagination;
      if (n())
        return;
      let w = e.pagination.el;
      w = M(w);
      let x, S;
      const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, $ = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? (S = e.previousRealIndex || 0, x = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (x = e.snapIndex, S = e.previousSnapIndex) : (S = e.previousIndex || 0, x = e.activeIndex || 0), f.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
        const T = e.pagination.bullets;
        let z, y, C;
        if (f.dynamicBullets && (a = he(T[0], e.isHorizontal() ? "width" : "height", !0), w.forEach((_) => {
          _.style[e.isHorizontal() ? "width" : "height"] = `${a * (f.dynamicMainBullets + 4)}px`;
        }), f.dynamicMainBullets > 1 && S !== void 0 && (l += x - (S || 0), l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)), z = Math.max(x - l, 0), y = z + (Math.min(T.length, f.dynamicMainBullets) - 1), C = (y + z) / 2), T.forEach((_) => {
          const k = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((P) => `${f.bulletActiveClass}${P}`)].map((P) => typeof P == "string" && P.includes(" ") ? P.split(" ") : P).flat();
          _.classList.remove(...k);
        }), w.length > 1)
          T.forEach((_) => {
            const k = ae(_);
            k === x ? _.classList.add(...f.bulletActiveClass.split(" ")) : e.isElement && _.setAttribute("part", "bullet"), f.dynamicBullets && (k >= z && k <= y && _.classList.add(...`${f.bulletActiveClass}-main`.split(" ")), k === z && c(_, "prev"), k === y && c(_, "next"));
          });
        else {
          const _ = T[x];
          if (_ && _.classList.add(...f.bulletActiveClass.split(" ")), e.isElement && T.forEach((k, P) => {
            k.setAttribute("part", P === x ? "bullet-active" : "bullet");
          }), f.dynamicBullets) {
            const k = T[z], P = T[y];
            for (let L = z; L <= y; L += 1)
              T[L] && T[L].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
            c(k, "prev"), c(P, "next");
          }
        }
        if (f.dynamicBullets) {
          const _ = Math.min(T.length, f.dynamicMainBullets + 4), k = (a * _ - a) / 2 - C * a, P = d ? "right" : "left";
          T.forEach((L) => {
            L.style[e.isHorizontal() ? P : "top"] = `${k}px`;
          });
        }
      }
      w.forEach((T, z) => {
        if (f.type === "fraction" && (T.querySelectorAll(Q(f.currentClass)).forEach((y) => {
          y.textContent = f.formatFractionCurrent(x + 1);
        }), T.querySelectorAll(Q(f.totalClass)).forEach((y) => {
          y.textContent = f.formatFractionTotal($);
        })), f.type === "progressbar") {
          let y;
          f.progressbarOpposite ? y = e.isHorizontal() ? "vertical" : "horizontal" : y = e.isHorizontal() ? "horizontal" : "vertical";
          const C = (x + 1) / $;
          let _ = 1, k = 1;
          y === "horizontal" ? _ = C : k = C, T.querySelectorAll(Q(f.progressbarFillClass)).forEach((P) => {
            P.style.transform = `translate3d(0,0,0) scaleX(${_}) scaleY(${k})`, P.style.transitionDuration = `${e.params.speed}ms`;
          });
        }
        f.type === "custom" && f.renderCustom ? (T.innerHTML = f.renderCustom(e, x + 1, $), z === 0 && r("paginationRender", T)) : (z === 0 && r("paginationRender", T), r("paginationUpdate", T)), e.params.watchOverflow && e.enabled && T.classList[e.isLocked ? "add" : "remove"](f.lockClass);
      });
    }
    function m() {
      const d = e.params.pagination;
      if (n())
        return;
      const f = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
      let w = e.pagination.el;
      w = M(w);
      let x = "";
      if (d.type === "bullets") {
        let S = e.params.loop ? Math.ceil(f / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && S > f && (S = f);
        for (let E = 0; E < S; E += 1)
          d.renderBullet ? x += d.renderBullet.call(e, E, d.bulletClass) : x += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`;
      }
      d.type === "fraction" && (d.renderFraction ? x = d.renderFraction.call(e, d.currentClass, d.totalClass) : x = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`), d.type === "progressbar" && (d.renderProgressbar ? x = d.renderProgressbar.call(e, d.progressbarFillClass) : x = `<span class="${d.progressbarFillClass}"></span>`), e.pagination.bullets = [], w.forEach((S) => {
        d.type !== "custom" && (S.innerHTML = x || ""), d.type === "bullets" && e.pagination.bullets.push(...S.querySelectorAll(Q(d.bulletClass)));
      }), d.type !== "custom" && r("paginationRender", w[0]);
    }
    function h() {
      e.params.pagination = Ye(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      const d = e.params.pagination;
      if (!d.el)
        return;
      let f;
      typeof d.el == "string" && e.isElement && (f = e.el.querySelector(d.el)), !f && typeof d.el == "string" && (f = [...document.querySelectorAll(d.el)]), f || (f = d.el), !(!f || f.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...e.el.querySelectorAll(d.el)], f.length > 1 && (f = f.filter((w) => Ge(w, ".swiper")[0] === e.el)[0])), Array.isArray(f) && f.length === 1 && (f = f[0]), Object.assign(e.pagination, {
        el: f
      }), f = M(f), f.forEach((w) => {
        d.type === "bullets" && d.clickable && w.classList.add(...(d.clickableClass || "").split(" ")), w.classList.add(d.modifierClass + d.type), w.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.type === "bullets" && d.dynamicBullets && (w.classList.add(`${d.modifierClass}${d.type}-dynamic`), l = 0, d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)), d.type === "progressbar" && d.progressbarOpposite && w.classList.add(d.progressbarOppositeClass), d.clickable && w.addEventListener("click", p), e.enabled || w.classList.add(d.lockClass);
      }));
    }
    function g() {
      const d = e.params.pagination;
      if (n())
        return;
      let f = e.pagination.el;
      f && (f = M(f), f.forEach((w) => {
        w.classList.remove(d.hiddenClass), w.classList.remove(d.modifierClass + d.type), w.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.clickable && (w.classList.remove(...(d.clickableClass || "").split(" ")), w.removeEventListener("click", p));
      })), e.pagination.bullets && e.pagination.bullets.forEach((w) => w.classList.remove(...d.bulletActiveClass.split(" ")));
    }
    s("changeDirection", () => {
      if (!e.pagination || !e.pagination.el)
        return;
      const d = e.params.pagination;
      let {
        el: f
      } = e.pagination;
      f = M(f), f.forEach((w) => {
        w.classList.remove(d.horizontalClass, d.verticalClass), w.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass);
      });
    }), s("init", () => {
      e.params.pagination.enabled === !1 ? v() : (h(), m(), u());
    }), s("activeIndexChange", () => {
      typeof e.snapIndex > "u" && u();
    }), s("snapIndexChange", () => {
      u();
    }), s("snapGridLengthChange", () => {
      m(), u();
    }), s("destroy", () => {
      g();
    }), s("enable disable", () => {
      let {
        el: d
      } = e.pagination;
      d && (d = M(d), d.forEach((f) => f.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }), s("lock unlock", () => {
      u();
    }), s("click", (d, f) => {
      const w = f.target, x = M(e.pagination.el);
      if (e.params.pagination.el && e.params.pagination.hideOnClick && x && x.length > 0 && !w.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && w === e.navigation.nextEl || e.navigation.prevEl && w === e.navigation.prevEl))
          return;
        const S = x[0].classList.contains(e.params.pagination.hiddenClass);
        r(S === !0 ? "paginationShow" : "paginationHide"), x.forEach((E) => E.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
    const b = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: d
      } = e.pagination;
      d && (d = M(d), d.forEach((f) => f.classList.remove(e.params.pagination.paginationDisabledClass))), h(), m(), u();
    }, v = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: d
      } = e.pagination;
      d && (d = M(d), d.forEach((f) => f.classList.add(e.params.pagination.paginationDisabledClass))), g();
    };
    Object.assign(e.pagination, {
      enable: b,
      disable: v,
      render: m,
      update: u,
      init: h,
      destroy: g
    });
  }
  const Bi = `.os-gift{background-color:#fff;border:none;box-shadow:0 5px 15px #00000026;max-width:334px;padding:0}@media (min-width: 768px){.os-gift{max-width:873px;width:100%}}.os-gift::backdrop{background:#ffffffd9;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.os-gift .os-wrap{padding:28px 14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px}@media (min-width: 768px){.os-gift .os-wrap{padding:28px 50px}}.os-gift .os-close{position:absolute;top:5px;right:5px;background:none;border:none;cursor:pointer}.os-gift .os-close:focus,.os-gift .os-close:hover,.os-gift .os-close:active{outline:none;border:none;background:none}.os-gift .os-title{color:#333;color:var(--MSB-UI-Black, var(--H1-Font, #333));font-family:adobe-garamond-pro,serif;font-size:28px;font-weight:400;line-height:36px;text-align:center;margin:0}@media (min-width: 768px){.os-gift .os-title{font-size:40px;line-height:46px}}.os-gift .os-title span{color:#a11a17}.os-gift .os-timer{width:100%;background:#a11a1712;padding-top:4px;padding-bottom:4px;font-size:15px;line-height:22px;font-weight:400;text-align:center;margin-top:8px}@media (max-width: 768px){.os-gift .os-timer{font-size:13px}}.os-gift .os-timer span{color:#a11a17;font-weight:700}.os-gift .os-product{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;max-width:272px;margin:0 auto}@media (min-width: 768px){.os-gift .os-product{padding-left:36px;padding-right:36px}}.os-gift .os-product img{width:198px}.os-gift .os-product .os-title,.os-gift .os-product .os-description{font-family:adobe-garamond-pro,serif;font-size:16px;line-height:18px;text-align:center}.os-gift .os-product .os-price{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;gap:4px;margin-top:14px;text-align:center;font-size:14px;line-height:20px}.os-gift .os-product .os-price .old{color:#333;font-size:14px;font-weight:400;line-height:20px;-webkit-text-decoration:line-through;text-decoration:line-through}.os-gift .os-product .os-price .new{color:#a11a17;font-size:16px}.os-gift .os-product .os-colors{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;gap:6px;padding-top:14px}.os-gift .os-product .os-colors .os-color{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;border:none;background:none;padding:0;width:20px;height:20px;transition:outline .3s}.os-gift .os-product .os-colors .os-color.active{outline:1px solid black;outline-offset:2px}.os-gift .os-product .os-colors .os-color img{max-width:20px;width:20px;height:20px;-o-object-fit:contain;object-fit:contain}.os-gift .swiper-button-next:after,.os-gift .swiper-button-prev:after{content:"";font-family:serif;width:12px;height:18px;background-image:url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18"><path d="m1.625 0-2.25 2.25L6.125 9l-6.75 6.75L1.625 18l6.75-6.75L10.625 9l-2.25-2.25L1.625 0Z" clip-rule="evenodd" fill="%23B68B51" fill-rule="evenodd"/></svg>');background-repeat:no-repeat}.os-gift .swiper-button-prev:after{transform:rotate(180deg)}.os-gift .os-note{margin-top:21px;color:#333;font-size:12px;font-weight:400;line-height:22px;text-align:center}.os-gift .os-actions{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;margin-top:14px}@media (min-width: 768px){.os-gift .os-actions.os-mobile{display:none}}@media (max-width: 767px){.os-gift .os-actions.os-desktop{display:none}}.os-gift .os-actions button,.os-gift .os-actions a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#a11a17;border:none;min-height:54px;color:#fff;font-family:Arial;font-size:14px;font-weight:700;line-height:22px;min-width:200px;max-width:272px;width:100%;text-transform:uppercase}@media (min-width: 768px){.os-gift .os-actions button:not([data-btn=popup-checkout]),.os-gift .os-actions a:not([data-btn=popup-checkout]){font-size:12px}}.os-gift .swiper-slide{width:80%}.os-gift .swiper-pagination{margin-top:16px;position:static}.os-gift .swiper-pagination .swiper-pagination-bullets{background:#e8e8e8}.os-gift .swiper-pagination .swiper-pagination-bullet-active{background:#b68b51}`, $i = '@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;transition-property:transform;transition-timing-function:ease;transition-timing-function:initial;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-left:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-top:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid #007aff;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}', Gi = ':root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;top:var(--swiper-navigation-top-offset, 50%);width:-webkit-calc(44px / 44 * 27);width:-moz-calc(44px / 44 * 27);width:27px;width:-webkit-calc(var(--swiper-navigation-size) / 44 * 27);width:-moz-calc(var(--swiper-navigation-size) / 44 * 27);width:calc(var(--swiper-navigation-size) / 44 * 27);height:44px;height:var(--swiper-navigation-size);margin-top:-webkit-calc(0px - (44px / 2));margin-top:-moz-calc(0px - (44px / 2));margin-top:-22px;margin-top:-webkit-calc(0px - (var(--swiper-navigation-size) / 2));margin-top:-moz-calc(0px - (var(--swiper-navigation-size) / 2));margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-feature-settings:;font-variant:normal;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}', Di = ".swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:8px;bottom:var(--swiper-pagination-bottom, 8px);top:auto;top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:8px;height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:50%;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:#000;background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:.2;opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:1;opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:8px;right:var(--swiper-pagination-right, 8px);left:auto;left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px;margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:inherit;color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:#00000040;background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:4px;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:4px;width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}";
  class We {
    constructor({ country: e }) {
      this.cartItem = null, this.country = G.UK, this.country = e;
    }
    updateCart() {
      const e = sessionStorage.getItem(K), t = sessionStorage.getItem("CRS_DISCOUNT");
      if (!e || !t)
        return;
      const { giftId: s, colour: r } = JSON.parse(e);
      this.addGiftToCart({ giftId: s, colour: r });
    }
    async addGiftToCart({ giftId: e, colour: t }) {
      var h;
      const s = X.find((g) => g.id === parseInt(e));
      if (!s)
        return;
      const r = (
        /* HTML */
        ` <li class="item product product-item" role="product-item" data-os="product-item" data-osid="${e}">
      <div class="product row no-gutters flex-nowrap">
        <!-- ko if: product_has_url -->
        <div class="col-3">
          <a
            data-bind="attr: {href: product_url, title: product_name}"
            tabindex="-1"
            class="product-item-photo"
            href="${s.url}"
            title="FREE -  ${s.name}"
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
                  src="${s.colours[t]}"
                  alt="${s} - ${t}"
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
                <a data-bind="attr: {href: product_url}, html: product_name" href="${s.url}">FREE - ${s.name}</a>
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
                      <span class="minicart-regular-price"><span class="price">${s.price[this.country]}</span></span>
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
      ), o = await q(".mobile-basket-block #mini-cart"), a = await q(".block-minicart #mini-cart"), l = o, n = a;
      n && n.insertAdjacentHTML("beforeend", r), l && l.insertAdjacentHTML("beforeend", r);
      const c = A(".counter-number"), p = A(".mobile-basket__btn span");
      ce(c, "add"), ce(p, "add");
      const u = (h = X.find((g) => g.id === parseInt(e))) == null ? void 0 : h.name;
      sessionStorage.setItem(K, JSON.stringify({ giftId: e, colour: t, name: u })), Y('li.item.product.product-item[data-os="product-item"]').forEach((g) => {
        var v;
        const b = g;
        (v = b.querySelector(".action.delete")) == null || v.addEventListener("click", (d) => {
          d.preventDefault();
          const f = b.dataset.osid;
          Y(`li.item.product.product-item[data-os="product-item"][data-osid="${f}"]`).forEach((x) => x.remove()), sessionStorage.removeItem(K), ce(c, "remove"), ce(p, "remove");
        });
      });
    }
  }
  function ce(i, e) {
    i && setTimeout(() => {
      var s;
      const t = parseInt(((s = i.textContent) == null ? void 0 : s.replace(/[^\d]/g, "")) || "0");
      i.textContent = `(${(e === "add" ? t + 1 : t - 1).toString()})`;
    }, 0);
  }
  const Hi = {
    modules: [zi, Oi],
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
        slidesPerView: 1,
        spaceBetween: 35,
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
  class Ni {
    constructor({ country: e }) {
      this.selectedColors = {}, this.country = e, this.init();
    }
    init() {
      this.render(), this.closePopupHandlers(), this.colorSelectionHandler(), this.addGiftHandler();
    }
    render() {
      var r, o;
      const e = (
        /* HTML */
        `<dialog id="gift-popup" class="os-dialog os-gift">
      <div class="os-wrap">
        <button class="os-close">${de}</button>
        <div data-step="1">
          ${Z.includes(this.country) ? (
          /* HTML */
          `<h2 class="os-title">
                Check out now and get a <br class="os-desktop"> <span>free gift & free delivery</span>
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
                ${X.map(
          (a) => (
            /* HTML */
            `<div class="swiper-slide">
                        <div class="os-product" data-product-id="${a.id}">
                          <img src="${a.colours["Chestnut Tan"]}" alt="${a.name}" />
                          <div class="os-title">${a.name}</div>
                          <div class="os-description">${a.description}</div>
                          <div class="os-price">
                            <span class="old">${a.price[this.country]}</span
                            ><span class="new">${Pe[this.country]}0.00</span>
                          </div>
                          <div class="os-colors">
                            ${Object.keys(a.colours).map(
              (l) => (
                /* HTML */
                `<button
                                    title="${l}"
                                    class="os-color ${l === "Chestnut Tan" ? "active" : ""} "
                                    data-color="${l}"
                                  >
                                    <img src="${nt[l]}" alt="${l}" />
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
          ${Z.includes(this.country) ? (
          /* HTML */
          `<h2 class="os-title">
                Success! Your <span>free gift and delivery</span> have <br class="os-desktop"> been added to your order
              </h2>`
        ) : (
          /* HTML */
          '<h2 class="os-title">Success! Your <span>free gift</span> have been added to <br class="os-desktop"> your order</span></h2>'
        )}
          <div class="os-content">
            <div class="os-product">
              <img src="" alt="" />
              <div class="os-title">The Ponte</div>
              <div class="os-description">Leather Key</div>
              <div class="os-price">
                <span class="old">51</span><span class="new">${Pe[this.country]}0.00</span>
              </div>
            </div>
            <div class="os-actions">
              <a href="/checkout" data-btn="popup-checkout">Proceed to checkout</a>
            </div>
          </div>
        </div>
      </div>
    </dialog>`
      );
      document.head.insertAdjacentHTML("beforeend", `<style>${Bi}</style>`), document.body.insertAdjacentHTML("beforeend", e), this.popup = document.querySelector("#gift-popup"), this.initSwiper();
      const t = (r = this.popup) == null ? void 0 : r.querySelectorAll(".os-actions button");
      t && t.forEach((a) => {
        a.addEventListener("click", () => {
          var n, c;
          const l = (c = (n = this.popup) == null ? void 0 : n.querySelector(".os-title")) == null ? void 0 : c.textContent;
          I("exp_pop_car_retent_2_but_popupfree_add", `Add gift - ${l}`, "click", "Pop up free gift");
        });
      });
      const s = (o = this.popup) == null ? void 0 : o.querySelector('[data-btn="popup-checkout"]');
      s && s.addEventListener("click", () => {
        var l, n;
        const a = (n = (l = this.popup) == null ? void 0 : l.querySelector(".os-title")) == null ? void 0 : n.textContent;
        I("exp_pop_car_retent_2_but_popupfree_proc", `Proceed to checkout - ${a}`, "click", "Pop up free gift");
      });
    }
    colorSelectionHandler() {
      if (!this.popup)
        return;
      this.popup.querySelectorAll(".os-color").forEach((t) => {
        t.addEventListener("click", (s) => {
          var l;
          const r = s.currentTarget, o = r.closest(".os-colors");
          (l = o == null ? void 0 : o.querySelectorAll(".os-color")) == null || l.forEach((n) => n.classList.remove("active")), r.classList.add("active");
          const a = r.closest(".os-product");
          if (a) {
            const n = a.dataset.productId;
            if (!n)
              return;
            this.selectedColors[n] = r.dataset.color;
            const c = X.find((p) => p.id === parseInt(n));
            if (c && this.selectedColors[n]) {
              const p = c.colours[this.selectedColors[n]], u = a.querySelector("img");
              u && (u.src = p);
            }
          }
        });
      });
    }
    addGiftHandler() {
      if (!this.popup)
        return;
      const e = (a) => {
        sessionStorage.setItem(U, a), q(".minicart-coupon-input").then((l) => {
          const n = l, c = n.querySelector("input");
          console.log("promocodeInput", c), n.querySelector("span");
        });
      }, t = (a) => {
        const l = this.selectedColors[a] || "Chestnut Tan";
        new We({ country: this.country }).addGiftToCart({ giftId: a, colour: l }), e(et);
      }, s = (a) => {
        var c, p;
        t(a);
        const l = (c = this.popup) == null ? void 0 : c.querySelector('[data-step="1"]'), n = (p = this.popup) == null ? void 0 : p.querySelector('[data-step="2"]');
        if (l && n) {
          l.style.display = "none", n.style.display = "block";
          const u = X.find((v) => v.id === parseInt(a)), m = n.querySelector(".os-product .os-title"), h = n.querySelector(".os-product img"), g = n.querySelector(".os-product .os-description"), b = n.querySelector(".os-product .os-price .old");
          u && m && h && g && b && (m.textContent = u.name, h.src = u.colours[this.selectedColors[a]] || u.colours["Chestnut Tan"], g.textContent = u.description, b.textContent = u.price[this.country]);
        }
      };
      this.popup.querySelectorAll('#gift-popup [data-btn="item-action"]').forEach((a) => {
        a == null || a.addEventListener("click", (l) => {
          const c = l.currentTarget.closest(".os-product");
          if (!c)
            return;
          const p = c.dataset.productId;
          p && s(p);
        });
      });
      const o = this.popup.querySelector('#gift-popup [data-btn="popup-action"]');
      o == null || o.addEventListener("click", () => {
        const a = A("#gift-popup .swiper-slide-active .os-product"), l = a == null ? void 0 : a.dataset.productId;
        !a || !l || s(l);
      });
    }
    startTimer() {
      let e = 10, t = 0;
      if (!this.popup)
        return;
      const s = this.popup.querySelector(".os-timer span");
      this.timerId = window.setInterval(() => {
        if (t === 0)
          if (e === 0) {
            this.stopTimer();
            return;
          } else
            e--, t = 59;
        else
          t--;
        const r = `${e.toString().padStart(2, "0")}:${t.toString().padStart(2, "0")}`;
        s && (s.textContent = r);
      }, 1e3);
    }
    stopTimer() {
      this.timerId !== null && (window.clearInterval(this.timerId), this.timerId = null);
    }
    initSwiper() {
      this.swiper = new H("#gift-popup .swiper", Hi), document.head.insertAdjacentHTML("beforeend", `<style>${$i}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${Gi}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${Di}</style>`);
    }
    show(e = !0) {
      var r;
      if (!this.popup || (e ? JSON.parse(sessionStorage.getItem(Ce) || "false") : !1))
        return;
      this.popup.showModal(), this.startTimer(), sessionStorage.setItem(Ce, JSON.stringify(!0));
      const s = (r = this.popup.querySelector(".os-title")) == null ? void 0 : r.textContent;
      R("#gift-popup", "exp_pop_car_retent_2_vis_popupfree", `Pop up view - ${s}`, "Pop up free gift");
    }
    closePopupHandlers() {
      var s;
      const e = () => {
        var o, a;
        const r = (a = (o = this.popup) == null ? void 0 : o.querySelector(".os-title")) == null ? void 0 : a.textContent;
        I("exp_pop_car_retent_2_but_popupfree_close", `Close - ${r}`, "click", "Pop up free gift");
      };
      if (!this.popup)
        return;
      const t = this.popup.querySelector(".os-close");
      t == null || t.addEventListener("click", () => {
        var r;
        (r = this.popup) == null || r.close(), this.stopTimer(), e();
      }), (s = this.popup) == null || s.addEventListener("click", (r) => {
        var o;
        r.target === this.popup && ((o = this.popup) == null || o.close(), this.stopTimer(), e());
      });
    }
  }
  const ji = {
    uk: {
      men: [
        {
          title: "Men's wallets",
          image: "img/exit_popup/mens_wallets.png",
          link: "/men/personalised-leather-wallet-mens.html"
        },
        {
          title: "men’s briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/luxury-leather-briefcases.html"
        },
        {
          title: "men’s luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/luxury-leather-luggage.html"
        }
      ],
      women: [
        {
          title: "women's handbags",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/classic-ladies-leather-handbags.html"
        },
        {
          title: "women’s purses",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/classic-leather-purses-ladies.html"
        },
        {
          title: "women’s briefcases",
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
          title: "men’s briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/best-leather-briefcases.html"
        },
        {
          title: "men’s luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/leather-duffel-bags.html"
        }
      ],
      women: [
        {
          title: "Leather Purses",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/leather-handbags-purses.html"
        },
        {
          title: "Ladies' Wallets",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/ladies-leather-wallets.html"
        },
        {
          title: "women’s briefcases",
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
          title: "men’s briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/leather-briefcases.html"
        },
        {
          title: "men’s luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/luxury-leather-luggage.html"
        }
      ],
      women: [
        {
          title: "Leather Handbags",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/leather-handbags.html"
        },
        {
          title: "Leather Purses",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/classic-leather-purses-ladies.html"
        },
        {
          title: "women’s briefcases",
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
          title: "men’s briefcases",
          image: "img/exit_popup/mens_briefcases.png",
          link: "/men/business/luxury-leather-briefcases.html"
        },
        {
          title: "men’s luggage",
          image: "img/exit_popup/mens_luggage.png",
          link: "/men/travel/luxury-leather-luggage.html"
        }
      ],
      women: [
        {
          title: "Leather Handbags",
          image: "img/exit_popup/womens_handbags.png",
          link: "/women/classic-ladies-leather-handbags.html"
        },
        {
          title: "Leather Purses",
          image: "img/exit_popup/womens_purses.png",
          link: "/women/classic-leather-purses-ladies.html"
        },
        {
          title: "women’s briefcases",
          image: "img/exit_popup/womens_briefcases.png",
          link: "/women/business/ladies-best-leather-briefcases.html"
        }
      ]
    }
  }, Fi = ".crs-promo{background-color:#fff;border:none;box-shadow:0 5px 15px #00000026;max-width:334px;padding:0}.crs-dialog__wrap{padding:28px 14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px}.crs-dialog::backdrop{background:#ffffffd9;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.crs-dialog__close{position:absolute;top:5px;right:5px;background:none;border:none;cursor:pointer}.crs-dialog__close:focus,.crs-dialog__close:hover,.crs-dialog__close:active{outline:none;border:none;background:none}.crs-dialog__title{color:#333;color:var(--MSB-UI-Black, var(--H1-Font, #333));font-family:adobe-garamond-pro,serif;font-size:28px;font-weight:400;line-height:36px;margin:0}#cart-popup .crs-dialog__title{text-align:left}.crs-dialog__title span{color:#a11a17;color:var(--MSB-UI-Red, var(--H1-Font, #a11a17));text-transform:uppercase}.crs-dialog__descr{color:#646464;color:var(--MSB-UI-Dark-gray, #646464);font-size:16px;font-weight:400;line-height:22px}.crs-promo__blocks{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:4px;margin-left:-14px;width:-webkit-calc(100% + 28px);width:-moz-calc(100% + 28px);width:calc(100% + 28px)}.crs-promo__block{background:#333;background:var(--H1-Font, #333);display:grid;grid-template-columns:145px 1fr;grid-template-rows:1fr 1fr;height:133px}.crs-promo__block-img{grid-column:1 / 2;grid-row:1 / 3;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.crs-promo__block-header{grid-column:2 / 3;grid-row:1 / 2;padding:12px 12px 0;min-height:20px}.crs-promo__block-title{color:#fff;font-family:adobe-garamond-pro,serif;font-size:18px;font-style:normal;font-weight:600;line-height:26px;text-transform:uppercase;margin:0}.crs-promo__block-action{grid-column:2 / 3;grid-row:2 / 3;padding:12px}.crs-promo__block-link{justify-self:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#fff;color:#333;font-size:14px;font-weight:700;line-height:22px;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;padding:14px 32px}.crs-dialog__action{margin-top:11px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.crs-promo .crs-dialog__wrap{padding-bottom:0}@media screen and (min-width: 768px){.crs-dialog{max-width:800px}.crs-dialog__wrap{padding:35px 50px}.crs-dialog__title,.crs-dialog__descr{text-align:center}.crs-dialog__title{font-size:40px}.crs-promo__blocks{flex-direction:row;gap:20px;width:100%;justify-content:center;margin:auto auto 20px}.crs-promo__block{width:240px;grid-template-columns:1fr;grid-template-rows:72px 1fr 72px;height:-moz-max-content;height:-webkit-max-content;height:max-content;background:#fff}.crs-promo__block-header{grid-column:1 / 2;grid-row:1 / 2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;padding:0;background:-webkit-gradient(linear,left bottom,left top,from(#333),to(#333)),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat;background:-webkit-linear-gradient(bottom,#333 0%,#333 100%),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat;background:-moz-linear-gradient(bottom,#333 0%,#333 100%),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat;background:linear-gradient(0deg,#333,#333),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat;background:-webkit-gradient(linear,left bottom,left top,from(var(--H1-Font, #333)),to(var(--H1-Font, #333))),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat;background:-webkit-linear-gradient(bottom,var(--H1-Font, #333) 0%,var(--H1-Font, #333) 100%),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat;background:-moz-linear-gradient(bottom,var(--H1-Font, #333) 0%,var(--H1-Font, #333) 100%),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat;background:linear-gradient(0deg,var(--H1-Font, #333) 0%,var(--H1-Font, #333) 100%),#d3d3d3 0px -72.789px / 100% 450.802% no-repeat}.crs-promo__block-img{grid-column:1 / 2;grid-row:2 / 3;height:260px}.crs-promo__block-action{grid-column:1 / 2;grid-row:3 / 4;padding:20px 0 0}.crs-promo__block-link{width:100%;background:#a11a17;color:#fff!important}}";
  class Vi {
    constructor({ country: e }) {
      this.closePopup = () => {
        var t;
        (t = this.popup) == null || t.close();
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
        <button class="crs-dialog__close">${de}</button>
        <h2 class="crs-dialog__title">Explore our best</h2>
        <p class="crs-dialog__descr">Take a closer look at our top picks crafted just for you.</p>
        <div class="crs-dialog__content crs-promo__content"></div>
      </div>
    </dialog>`
      );
      document.head.insertAdjacentHTML("beforeend", `<style>${Fi}</style>`), document.body.insertAdjacentHTML("beforeend", e), this.popup = document.querySelector("#promo-popup");
    }
    show(e = !0) {
      var c;
      if (!this.popup || (e ? sessionStorage.getItem(_e) : !1) || location.pathname.includes("checkout"))
        return;
      const s = JSON.parse(localStorage.getItem("__kla_viewed")) || [], r = this.getGenderByViewedProducts(s), a = this.getGenderByCurrentPage() || r, l = this.popup.querySelector(".crs-promo__content");
      l.innerHTML = /* HTML */
      `
      <div class="crs-promo__blocks">
        ${ji[this.country.toLowerCase()][a].map((p) => (
        /* HTML */
        `
              <div class="crs-promo__block">
                <img class="crs-promo__block-img" src="${tt}${p.image}" alt="" />
                <div class="crs-promo__block-header">
                  <h3 class="crs-promo__block-title">${p.title}</h3>
                </div>
                <div class="crs-promo__block-action">
                  <a class="crs-promo__block-link" href="${p.link}">Shop Now</a>
                </div>
              </div>
            `
      )).join("")}
      </div>
    `, this.popup.showModal(), sessionStorage.setItem(_e, JSON.stringify(!0)), R(
        "#promo-popup",
        "exp_pop_car_retent_2_but_youlisuca_exper",
        "Pop up view",
        "Pop up Explore our best"
      );
      const n = (c = this.popup) == null ? void 0 : c.querySelectorAll(".crs-promo__block");
      n && n.forEach((p, u) => {
        var g;
        const m = p.querySelector(".crs-promo__block-link"), h = (g = p.querySelector(".crs-promo__block-title")) == null ? void 0 : g.textContent;
        !m || !h || m.addEventListener("mousedown", () => {
          I("exp_pop_car_retent_2_but_popsale_title", `${h} - Shop Now`, "click", "Pop up Explore our best");
        });
      });
    }
    getGenderByViewedProducts(e) {
      const t = {
        men: ["men", "father", "him"],
        women: ["women", "mother", "her"]
      }, s = e.reduce(
        (r, o) => {
          const a = o[0].Categories;
          for (let l of a) {
            const n = l.toLowerCase().split(" ");
            t.men.some((c) => n.includes(c)) && r.men++, t.women.some((c) => n.includes(c)) && r.women++;
          }
          return r;
        },
        { men: 0, women: 0 }
      );
      return s.men > s.women ? "men" : "women";
    }
    getGenderByCurrentPage() {
      return location.pathname.includes("women") || location.pathname.includes("men") ? location.pathname.includes("men") ? "men" : "women" : null;
    }
    closePopupHandlers() {
      if (!this.popup)
        return;
      const e = this.popup.querySelector(".crs-dialog__close");
      e == null || e.addEventListener("click", this.closePopup), this.popup.addEventListener("click", (t) => {
        t.target === this.popup && this.closePopup();
      });
    }
  }
  class Ri {
    constructor({ country: e, device: t }) {
      this.idleTime = 40, this.idleTimeAfterAddToCart = 45, this.sessionTime = 180, this.device = t, this.country = e, this.cartPopupViewCount = 0, this.init();
    }
    init() {
      this.promoPopup = new Vi({ country: this.country }), this.cartPopup = new mt({ country: this.country, device: this.device }), this.giftPopup = new Ni({ country: this.country }), this.handleAddToCart(), this.triggers();
    }
    triggers() {
      this.setupSessionTimeTrigger(), this.setupAddToCartTrigger(), this.setupScrollTrigger(), this.setupMouseLeaveAndFocusTriggers(), this.setupCartPopupTrigger(), this.setupIdleTimeTrigger(this.idleTime, () => {
        !this.isUserWatchedPopup() && !this.checkProductsInCart() && this.promoPopup.show();
      });
    }
    isUserWatchedPopup() {
      return sessionStorage.getItem(Ae) || !1;
    }
    getTotalCartValue() {
      var t, s;
      const e = (s = (t = JSON.parse(localStorage.getItem("mage-cache-storage"))) == null ? void 0 : t.cart) == null ? void 0 : s.items;
      return e ? e.reduce((r, o) => r + o.product_price_value * o.qty, 0) : 0;
    }
    checkProductsInCart() {
      var t, s;
      const e = (s = (t = JSON.parse(localStorage.getItem("mage-cache-storage"))) == null ? void 0 : t.cart) == null ? void 0 : s.items;
      return (e == null ? void 0 : e.length) > 0;
    }
    setupCartPopupTrigger() {
      const e = document.querySelector(".block-minicart"), t = document.querySelector(".mobile-basket-block");
      let s = !1, r = !1;
      const o = () => {
        let p = sessionStorage.getItem("cartPopupViewCount");
        if (p || (p = "1"), sessionStorage.setItem("cartPopupViewCount", (parseInt(p) + 1).toString()), parseInt(p) > 2) {
          const u = sessionStorage.getItem("productAddedTime");
          u && Date.now() - parseInt(u) > 12e4 && setTimeout(() => {
            this.showGiftOrCartPopup(!1);
          }, 12e3);
        }
      }, a = (p, u) => {
        p.forEach((m) => {
          m.type === "attributes" && (m.attributeName === "style" || m.attributeName === "class") && ((m.attributeName === "style" ? m.target.style.display === "block" : m.target.classList.contains("active")) ? ((u === n && !s || u === c && !r) && o(), u === n ? s = !0 : u === c && (r = !0)) : u === n ? s = !1 : u === c && (r = !1));
        });
      }, l = { attributes: !0, attributeFilter: ["style", "class"] };
      let n, c;
      e && (n = new MutationObserver((p) => a(p, n)), n.observe(e, l)), t && (c = new MutationObserver((p) => a(p, c)), c.observe(t, l));
    }
    handleAddToCart() {
      const e = A("#product-addtocart-button");
      e && (e == null || e.addEventListener("click", () => {
        sessionStorage.setItem("productAddedTime", Date.now().toString());
      }));
    }
    setupIdleTimeTrigger(e, t) {
      let s, r = 0;
      const o = () => {
        clearInterval(s), r = 0, s = setInterval(a, 1e3);
      }, a = () => {
        r++, r >= e && (t(), o());
      };
      window.onload = o, window.onmousemove = o, window.onmousedown = o, window.ontouchstart = o, window.onclick = o, window.onkeypress = o, s = setInterval(a, 1e3);
    }
    setupAddToCartTrigger() {
      var e;
      (e = A("#product-addtocart-button")) == null || e.addEventListener("click", () => {
        setTimeout(() => {
          this.showGiftOrCartPopup();
        }, 18e4), this.setupIdleTimeTrigger(this.idleTimeAfterAddToCart, () => {
          this.checkProductsInCart() && this.showGiftOrCartPopup();
        });
      });
    }
    showGiftOrCartPopup(e = !0) {
      const t = this.checkProductsInCart(), s = this.getTotalCartValue();
      t && (s >= 300 && s <= 600 ? this.giftPopup.show(e) : this.cartPopup.show(e));
    }
    setupSessionTimeTrigger() {
      const e = setTimeout(() => {
        this.showPopupsBasedOnCartStatus(), this.isUserWatchedPopup() || this.waitForUserWatchedPopup(e);
      }, this.sessionTime * 1e3);
    }
    waitForUserWatchedPopup(e) {
      setTimeout(() => {
        this.isUserWatchedPopup() ? (this.promoPopup.show(), clearInterval(e)) : this.waitForUserWatchedPopup(e);
      }, 50);
    }
    setupScrollTrigger() {
      window.addEventListener("scroll", () => {
        this.showPopupsOnFastScroll(), this.showPopupsOnPageCenter(), this.showPopupsOnPageBottom();
      });
    }
    showPopupsOnFastScroll() {
      const e = Je(), t = this.device === J.Desktop ? 70 : 120;
      (e < -t || e > t) && this.showPopupsBasedOnCartStatus();
    }
    showPopupsOnPageCenter() {
      const e = document.documentElement.scrollHeight, t = window.innerHeight;
      window.scrollY / (e - t) * 100 >= 50 && this.isUserWatchedPopup() && this.promoPopup.show();
    }
    showPopupsOnPageBottom() {
      this.device === "Mobile" && window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 && this.showPopupsBasedOnCartStatus();
    }
    setupMouseLeaveAndFocusTriggers() {
      this.device === "Desktop" && (document.addEventListener("mouseleave", (e) => {
        (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) && this.showPopupsBasedOnCartStatus();
      }), window.addEventListener("focus", () => {
        this.showPopupsBasedOnCartStatus();
      }));
    }
    showPopupsBasedOnCartStatus() {
      const e = this.checkProductsInCart(), t = this.getTotalCartValue();
      e && (t >= 300 && t <= 600 ? this.giftPopup.show() : this.cartPopup.show()), this.isUserWatchedPopup() && !e && this.promoPopup.show();
    }
  }
  const qi = `.ampromo-overlay {
  opacity: 0 !important;
}

.messages .message-error {
  display: none !important;
}

.loading-mask {
  display: none !important;
}`;
  class Yi {
    constructor({ country: e }) {
      this.country = e, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${qi}</style>`), this.setCoupon(), this.chooseGift();
    }
    async chooseGift() {
      const e = await q(".ampromo-overlay.-show");
      if (!e)
        return;
      const s = e.querySelectorAll(".ampromo-items-form");
      if (!s)
        return;
      const r = JSON.parse(sessionStorage.getItem(K));
      s.forEach((o) => {
        var l;
        const a = (l = o.querySelector(".ampromo-title a")) == null ? void 0 : l.textContent;
        if (a && a.includes(r.name)) {
          const n = o.querySelector(".super-attribute-select");
          if (!n)
            return;
          n.querySelectorAll("option").forEach((p) => {
            var u;
            if ((u = p.textContent) != null && u.includes(r.colour)) {
              n.value = p.value;
              const m = o.querySelector(".tocart");
              if (!m)
                return;
              m.click();
            }
          });
        }
      });
    }
    async setCoupon() {
      console.log("setCoupon");
      const e = sessionStorage.getItem(U);
      if (console.log("coupon", e), !e)
        return;
      let t = this.country === G.US ? "https://us.maxwellscottbags.com/rest/default_us/" : this.country === G.AU ? "https://au.maxwellscottbags.com/rest/default_australia/" : "https://www.maxwellscottbags.com/rest/default/";
      try {
        const s = await fetch(
          // @ts-ignore
          t + `V1/guest-carts/${window.checkoutConfig.quoteData.entity_id}/coupons/${e.toLowerCase()}`,
          {
            method: "PUT"
          }
        ), r = await s.json();
        if (console.log(r), !s.ok)
          throw new Error("Failed to apply coupon");
        sessionStorage.removeItem(U), console.log("reloading"), location.reload();
      } catch (s) {
        console.log(s);
      }
    }
  }
  const Wi = "@media (min-width: 768px){br.os-mobile{display:none}}@media (max-width: 768px){br.os-desktop{display:none}}";
  Qe({ name: "exp_pop_car_retent", dev: "OS" }), Ke("");
  class Ui {
    constructor() {
      this.device = screen.width <= 768 ? J.Mobile : J.Desktop, this.country = window.location.host.includes("au") ? G.AU : window.location.host.includes("us") ? G.US : window.location.host.includes("ca") ? G.CA : G.UK, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Wi}</style>`), location.pathname.includes("checkout") || (new ut({ country: this.country, device: this.device }), new Ri({ country: this.country, device: this.device }), new We({ country: this.country }).updateCart()), location.pathname.includes("checkout") && new Yi({ country: this.country });
    }
  }
  new Ui();
})();
