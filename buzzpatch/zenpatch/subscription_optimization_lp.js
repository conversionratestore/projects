(function() {
  "use strict";
  const u = (r, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), console.dir(`Event: ${r} | ${t} | ${e} | ${n}`);
  }, C = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (r) => document.querySelectorAll(r), p = (r) => document.querySelector(r), L = async (r) => {
    const t = (e) => new Promise((n, i) => {
      const c = e.split(".").pop();
      if (c === "js") {
        if (Array.from(document.scripts).map((a) => a.src.toLowerCase()).includes(e.toLowerCase()))
          return console.log(`Script ${e} allready downloaded!`), n("");
        const s = document.createElement("script");
        s.src = e, s.onload = n, s.onerror = i, document.head.appendChild(s);
      } else if (c === "css") {
        if (Array.from(document.styleSheets).map((a) => {
          var l;
          return (l = a.href) == null ? void 0 : l.toLowerCase();
        }).includes(e.toLowerCase()))
          return console.log(`Style ${e} allready downloaded!`), n("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = e, s.onload = n, s.onerror = i, document.head.appendChild(s);
      }
    });
    for (const e of r)
      await t(e), console.log(`Loaded librari ${e}`);
    console.log("All libraries loaded!");
  }, E = (r, t = "variant_1") => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, t), console.log("set", r, t));
    }, 1e3);
  }, v = (r, t, e, n, i = "Visibility", c = 600, o = 0.3) => {
    let s, a;
    if (s = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? a = setTimeout(() => {
          u(
            t,
            l[0].target.dataset.visible || n || "",
            i,
            e
          ), s.disconnect();
        }, c) : clearTimeout(a);
      },
      { threshold: [o] }
    ), typeof r == "string") {
      const l = document.querySelector(r);
      l && s.observe(l);
    } else
      s.observe(r);
  };
  function _(r) {
    return new Promise((t) => {
      if (document.querySelector(r))
        return t(document.querySelector(r));
      const e = new MutationObserver(() => {
        document.querySelector(r) && (t(document.querySelector(r)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(r) {
    r = r === void 0 ? {} : r;
    let t, e, n, i, c = (r == null ? void 0 : r.delay) || 50;
    function o() {
      t = null, i = 0;
    }
    return o(), function() {
      return e = window.scrollY, t != null && (i = e - t), t = e, clearTimeout(n), n = setTimeout(o, c), i;
    };
  })();
  const x = {
    orangeArrowIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
      <path
        d="M4.51427 3.16832C4.42131 2.62391 4.78729 2.10723 5.33169 2.01428L14.2033 0.499517C14.7477 0.406565 15.2644 0.772539 15.3573 1.31695C15.4503 1.86135 15.0843 2.37803 14.5399 2.47099L6.65404 3.81744L8.00049 11.7033C8.09345 12.2477 7.72747 12.7644 7.18307 12.8574C6.63866 12.9503 6.12198 12.5843 6.02903 12.0399L4.51427 3.16832ZM2.38236 19.5293C3.14385 20.9572 4.96064 21.8193 7.22273 21.8991C9.46036 21.978 11.8203 21.266 13.3415 19.9349C14.0907 19.2793 14.6241 18.4866 14.87 17.5684C15.1151 16.6532 15.0935 15.5433 14.6207 14.2189C13.6612 11.5309 10.8617 8.02327 4.92199 3.81604L6.07801 2.18398C12.1383 6.47657 15.3388 10.2813 16.5043 13.5465C17.094 15.1986 17.1662 16.7255 16.8019 18.0857C16.4384 19.4429 15.6593 20.5643 14.6585 21.44C12.6797 23.1715 9.78964 23.9908 7.15227 23.8978C4.53936 23.8057 1.85615 22.7928 0.617638 20.4705L2.38236 19.5293Z"
        fill="#F4BE00"
      />
    </svg>
  `
    ),
    percentIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
      <path
        d="M7.58207 5.625C7.58207 6.12228 7.38431 6.59919 7.03228 6.95083C6.68026 7.30246 6.20281 7.5 5.70498 7.5C5.20714 7.5 4.72969 7.30246 4.37767 6.95083C4.02565 6.59919 3.82788 6.12228 3.82788 5.625C3.82788 5.12772 4.02565 4.65081 4.37767 4.29917C4.72969 3.94754 5.20714 3.75 5.70498 3.75C6.20281 3.75 6.68026 3.94754 7.03228 4.29917C7.38431 4.65081 7.58207 5.12772 7.58207 5.625ZM6.33067 5.625C6.33067 5.45924 6.26475 5.30027 6.14741 5.18306C6.03007 5.06585 5.87092 5 5.70498 5C5.53903 5 5.37988 5.06585 5.26254 5.18306C5.1452 5.30027 5.07928 5.45924 5.07928 5.625C5.07928 5.79076 5.1452 5.94973 5.26254 6.06694C5.37988 6.18415 5.53903 6.25 5.70498 6.25C5.87092 6.25 6.03007 6.18415 6.14741 6.06694C6.26475 5.94973 6.33067 5.79076 6.33067 5.625Z"
        fill="#2A7B72"
      />
      <path
        d="M2.57659 1.25H8.31549C8.64736 1.25007 8.9656 1.38181 9.20023 1.61625L17.96 10.3663C18.1946 10.6007 18.3264 10.9185 18.3264 11.25C18.3264 11.5815 18.1946 11.8993 17.96 12.1337L12.2211 17.8663C11.9864 18.1006 11.6682 18.2322 11.3364 18.2322C11.0045 18.2322 10.6863 18.1006 10.4516 17.8663L1.69185 9.11625C1.45716 8.88188 1.32527 8.56399 1.3252 8.2325V2.5C1.3252 2.16848 1.45704 1.85054 1.69172 1.61612C1.9264 1.3817 2.2447 1.25 2.57659 1.25ZM2.57659 8.2325L11.3364 16.9825L17.0753 11.25L8.31549 2.5H2.57659V8.2325Z"
        fill="#2A7B72"
      />
    </svg>
  `
    ),
    tooltipIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <circle cx="12.5" cy="12" r="8" fill="#0091D7" />
      <path
        d="M11.8333 15.0523H13.1667V16.3856H11.8333V15.0523ZM10.5 8.98693C10.5 8.71678 10.5523 8.4597 10.6569 8.21569C10.7614 7.97168 10.9052 7.76253 11.0882 7.58824C11.2712 7.40523 11.4847 7.26144 11.7288 7.15686C11.9728 7.05229 12.2342 7 12.5131 7C12.8355 7 13.1275 7.06536 13.3889 7.19608C13.659 7.3268 13.8813 7.5098 14.0556 7.7451C14.1427 7.8671 14.2124 7.98039 14.2647 8.08497C14.3257 8.18954 14.3736 8.30283 14.4085 8.42484C14.4434 8.53813 14.4651 8.66885 14.4739 8.81699C14.4913 8.96514 14.5 9.13943 14.5 9.33987C14.5 9.56645 14.4956 9.75817 14.4869 9.91503C14.4869 10.0632 14.4782 10.1939 14.4608 10.3072C14.4434 10.4205 14.4216 10.5207 14.3954 10.6078C14.3693 10.6863 14.3344 10.7603 14.2908 10.8301L13.3889 12.3725C13.3279 12.4771 13.2756 12.5861 13.232 12.6993C13.1885 12.8039 13.1667 12.9172 13.1667 13.0392V14.085H11.8333V12.8693C11.8333 12.6776 11.8638 12.4946 11.9248 12.3203C11.9858 12.146 12.0643 11.976 12.1601 11.8105L12.9967 10.451C13.0664 10.3377 13.11 10.2157 13.1275 10.085C13.1536 9.95425 13.1667 9.82353 13.1667 9.69281V9C13.1667 8.81699 13.1013 8.66013 12.9706 8.52941C12.8486 8.39869 12.6961 8.33333 12.5131 8.33333C12.3562 8.33333 12.2037 8.38998 12.0556 8.50327C11.9074 8.61656 11.8333 8.78214 11.8333 9V9.75817H10.5V8.98693Z"
        fill="white"
      />
    </svg>
  `
    ),
    arrowLeftBackIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
      <path
        d="M0.292893 6.79289C-0.0976311 7.18342 -0.0976311 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292893 6.79289ZM1 8.5H17V6.5H1V8.5Z"
        fill="#2A7B72"
      />
    </svg>
  `
    ),
    closeIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <g clip-path="url(#clip0_17_3068)">
        <path
          d="M0.5 12.5C0.5 6.14873 5.64873 1 12 1C18.3513 1 23.5 6.14873 23.5 12.5C23.5 18.8513 18.3513 24 12 24C5.64873 24 0.5 18.8513 0.5 12.5Z"
          fill="#2A7B72"
          stroke="white"
        />
        <path
          d="M16 9.30571L15.1943 8.5L12 11.6943L8.80571 8.5L8 9.30571L11.1943 12.5L8 15.6943L8.80571 16.5L12 13.3057L15.1943 16.5L16 15.6943L12.8057 12.5L16 9.30571Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_17_3068">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  `
    )
  }, S = {
    subscribe: `
  <div class='tooltip_block'>
  <p>Free delivery</p>
  <p>No fees. Skip or cancel anytime!</p>
  <ul>
  <li><p>You can easily change your subscription in your account.</p></li>
  <li><p>We'll always send you a reminder 5 days in advance of your subscription payment so that you can stay in control. Don't need anymore yet? Just hit the skip or cancel button! No fees.</p></li>
  </ul>
  </div>
  `
  }, T = (r = !1, t) => (
    /* HTML */
    `
    <div class="new_subscription" id="subscription${t}">
      <div class="new_subscription_block ${r ? "is_disabled" : ""}">
        <div class="plan_selection">
          <input
            type="radio"
            name="plan${t}"
            value="oneTime"
            id="oneTime${t}"
            ${r ? "checked" : ""}
          />
          <label for="oneTime${t}" class="one_time_variant"> One-time</label>

          <input
            type="radio"
            name="plan${t}"
            value="subscribeSave"
            id="subscribeSave${t}"
            ${r ? "" : "checked"}
          />
          <label for="subscribeSave${t}" class="subscribe_save_variant"> Subscribe & Save</label>
        </div>
        <div class="plan_comment">
          A choice that saves both time and money ${x.orangeArrowIcon}<span
            data-tooltip
            data-title="${S.subscribe}"
            >${x.tooltipIcon}</span
          >
        </div>
        <div class="is_active_one_pack">
          Select 2, 3 or 4 packs to subscribe with an extra of 15% off — save time and money ${x.orangeArrowIcon}<span
            data-tooltip
            data-title="${S.subscribe}"
            >${x.tooltipIcon}</span
          >
        </div>
        <ul class="plan_details  ${r ? "one_time_checked" : ""}">
          <li>100% Money-Back Guarantee</li>
          <li>Free, Fast Shipping Worldwide</li>
          <li>Extra 15% Off First and Future Orders</li>
          <li>Priority Customer Service</li>
          <li>5 Day Reminder - Cancel Anytime</li>
        </ul>
      </div>
    </div>
  `
  ), N = (
    /* HTML */
    `
  <div class="custom_dropdown">
    <div class="dropdown_toggle">Select an option</div>
    <div class="dropdown_menu"></div>
  </div>
`
  ), I = (r, t, e) => (
    /* HTML */
    `
    <div class="new_price_wrapper">
      <div class="new_reg_price">${r}</div>
      <div class="new_sale_price">${t}</div>
      <div class="percent_off">${x.percentIcon} ${e}% OFF</div>
    </div>
  `
  ), B = (
    /* HTML */
    `
  <div class="header_slide_in_cart">
    <h2>select <span class="active_title">package</span></h2>
    <p class="step_wrapper"><span class="active_step">1</span>/2</p>
  </div>
`
  ), A = (
    /* HTML */
    '<div class="next_step_btn">Next step 1/2</div> '
  ), z = (
    /* HTML */
    `
  <div class="body_slide_in_cart">
    <div class="main_title_wrapper">
      <p class="main_title">SELECTED Package</p>
      <div data-btnBack class="change_btn">Change</div>
    </div>
  </div>
`
  ), P = (r, t, e, n, i) => (
    /* HTML */
    `
    <div class="info_wrapper">
      <div class="details_wrapper">
        <div class="details_img_wrapper">
          <img src="${e}" alt="packs" />
        </div>
        <div class="details_quantity_wrapper">
          <p class="details_price_for_pack">${n}</p>
          <p class="details_quantity">${i}</p>
        </div>
      </div>
      <div class="price_wrapper">
        <span class="new_reg_price">${r}</span>
        <span class="new_sale_price">${t}</span>
      </div>
    </div>
  `
  ), j = `body #getNow {
  background: #fbfbf9;
  padding: 16px 0 21px;
}
body #getNow .js-heading {
  margin-bottom: 16px;
}
body #getNow .js-heading h2 {
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 32px !important;
  font-weight: 400 !important;
  line-height: 40px;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
body #getNow .js-heading .free-shipping-checkout {
  margin-bottom: 0;
  margin-top: 0;
}
body #getNow .magicpatch-packs {
  padding: 0 24px;
}
body #getNow .magicpatch-packs .list-packs {
  border-radius: 6px;
  border: 2px solid #eceef0;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.1), 0px 12px 32px 0px rgba(0, 0, 0, 0.05);
  padding: 5.2px 8px !important;
}
body #getNow .magicpatch-packs .list-packs.active-slide {
  border: 2px solid #2a7b72;
  background-color: #ecf2f1 !important;
  outline: none;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices {
  gap: 8px;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .info .pack-price {
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 20px !important;
  font-weight: 400;
  line-height: 110% !important;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .info .pcs {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 130% !important;
  margin: 4px 0;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices {
  gap: 4px;
  align-items: flex-end;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices .strikethrough {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif !important;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 130% !important;
  text-decoration: line-through;
  letter-spacing: normal;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices .strikethrough.hidden {
  display: block !important;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices .after-price {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 130% !important;
  letter-spacing: normal;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .sticker-image {
  max-width: 64px;
  max-height: 64px;
  border-radius: 4px;
  border: none;
  padding: 0;
}
body #getNow .magicpatch-packs .list-packs .stickers-prices .sticker-image img {
  border-radius: 4px;
  max-width: 100% !important;
  max-height: 100% !important;
  border-radius: 3px;
  border: 1px solid #eceef0;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker {
  gap: 4px;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker .save-btn,
body #getNow .magicpatch-packs .list-packs .buttons-sticker .top-seller-btn,
body #getNow .magicpatch-packs .list-packs .buttons-sticker .best-deal-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 73px;
  padding: 6px;
  color: #fff;
  text-align: center;
  font-family: "DINEngschrift LT" !important;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 12px !important;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  border-radius: 3px;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker .best-deal-btn {
  color: #0c0b0b;
  background: #efae16;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker .save-btn {
  background: #4caf50;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker .save-btn.hidden {
  display: flex !important;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker .save-btn.hidden span:not(.new_save_txt) {
  display: none !important;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker .save-btn span {
  margin-left: 2px;
}
body #getNow .magicpatch-packs .list-packs .buttons-sticker .top-seller-btn {
  background: #0c0b0b;
}
body #getNow .view-prices {
  gap: 0;
  margin: 0;
  padding: 0 24px;
}
body #getNow .view-prices > h3,
body #getNow .view-prices .hide-price-pack,
body #getNow .view-prices .stay-container .np-one-pack {
  display: none !important;
}
body #getNow .view-prices .stay-container {
  display: none !important;
}
body #getNow .view-prices #no-icart-open {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 60px;
  background: #2a7b72;
  color: #fefefe;
  font-family: "DINEngschrift LT";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin: 12px auto 0;
  max-width: 100%;
  box-shadow: none;
}
body #getNow .reviews-slide {
  margin-top: 16px !important;
  padding: 0 !important;
}
body #getNow .reviews-slide img {
  max-width: 267px;
  margin: 0;
  -o-object-fit: contain;
     object-fit: contain;
}
body #cons {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 350px;
  background: #fcfcfa;
  padding: 0 !important;
}
body #cons .title-logo {
  background: #f9f9f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 45px;
  width: 100%;
  max-width: 100%;
  padding: 16px 16px 8px 16px;
  margin: 0 !important;
}
body #cons .title-logo .slide-logo {
  display: none;
}
body #cons .title-logo .header_slide_in_cart {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
}
body #cons .title-logo .header_slide_in_cart .is_hidden {
  display: none;
}
body #cons .title-logo .header_slide_in_cart svg {
  width: 16px;
  flex-shrink: 0;
}
body #cons .title-logo .header_slide_in_cart h2 {
  color: #212529;
  font-family: "DINEngschrift LT";
  font-size: 26px;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  margin: 0;
}
body #cons .title-logo .header_slide_in_cart .step_wrapper {
  color: #d3d3d3;
  font-family: "DINEngschrift LT";
  font-size: 26px !important;
  font-weight: 400;
  line-height: 110% !important;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  margin: 0;
}
body #cons .title-logo .close-btn {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
body #cons .magicpatch-packs {
  padding: 16px;
}
body #cons .magicpatch-packs.active_step_second {
  display: none !important;
}
body #cons .magicpatch-packs ul {
  gap: 12px;
}
body #cons .magicpatch-packs .list-packs {
  border-radius: 6px;
  border: 2px solid #eceef0;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.1), 0px 12px 32px 0px rgba(0, 0, 0, 0.05);
  padding: 5.2px 8px !important;
}
body #cons .magicpatch-packs .list-packs.active-slide {
  border: 2px solid #2a7b72;
  background-color: #ecf2f1 !important;
  outline: none;
}
body #cons .magicpatch-packs .list-packs .stickers-prices {
  gap: 8px;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .info .pack-price {
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 20px !important;
  font-weight: 400;
  line-height: 110% !important;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .info .pcs {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 130% !important;
  margin: 4px 0;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices {
  gap: 4px;
  align-items: flex-end;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices .strikethrough {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif !important;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 130% !important;
  text-decoration: line-through;
  letter-spacing: normal;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices .strikethrough.hidden {
  display: block !important;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .info .before-after-prices .after-price {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 130% !important;
  letter-spacing: normal;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .sticker-image {
  max-width: 64px;
  max-height: 64px;
  border-radius: 4px;
  border: none;
  padding: 0;
}
body #cons .magicpatch-packs .list-packs .stickers-prices .sticker-image img {
  border-radius: 4px;
  max-width: 100% !important;
  max-height: 100% !important;
  border-radius: 3px;
  border: 1px solid #eceef0;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker {
  gap: 4px;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker .save-btn,
body #cons .magicpatch-packs .list-packs .buttons-sticker .top-seller-btn,
body #cons .magicpatch-packs .list-packs .buttons-sticker .best-deal-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 73px;
  padding: 6px;
  color: #fff;
  text-align: center;
  font-family: "DINEngschrift LT" !important;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 12px !important;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  border-radius: 3px;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker .best-deal-btn {
  color: #0c0b0b;
  background: #efae16;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker .save-btn {
  background: #4caf50;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker .save-btn.hidden {
  display: flex !important;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker .save-btn.hidden span:not(.new_save_txt) {
  display: none !important;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker .save-btn span {
  margin-left: 2px;
}
body #cons .magicpatch-packs .list-packs .buttons-sticker .top-seller-btn {
  background: #0c0b0b;
}
body #cons .view-prices {
  gap: 0;
  width: 100%;
  margin: auto 0 0 !important;
  max-width: 100%;
  background: #fff;
  box-shadow: 12px 0px 32px 0px rgba(0, 0, 0, 0.08);
  padding: 16px;
}
body #cons .view-prices.active_step_second .new_subscription {
  display: block;
}
body #cons .view-prices > h3,
body #cons .view-prices .hide-price-pack,
body #cons .view-prices .stay-container .np-one-pack {
  display: none !important;
}
body #cons .view-prices .stay-container {
  display: none !important;
}
body #cons .view-prices .reviews-slide {
  max-width: 267px;
  margin: 12px 0 0 !important;
  padding: 0 !important;
}
body #cons .view-prices .reviews-slide > img {
  width: 100%;
}
body #cons .view-prices #no-icart-open,
body #cons .view-prices .next_step_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  height: 50px;
  border-radius: 60px;
  background: #2a7b72;
  color: #fefefe;
  font-family: "DINEngschrift LT";
  font-size: 20px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 12px;
  box-shadow: none;
}
body #cons .view-prices #no-icart-open {
  display: none;
}
body #cons .view-prices .next_step_btn.active_step_second {
  display: none;
}
body #cons .body_slide_in_cart {
  padding: 15px 16px;
  margin: 0;
  width: 100%;
  max-width: 100%;
}
body #cons .body_slide_in_cart .main_title_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
body #cons .body_slide_in_cart .main_title_wrapper .main_title {
  color: #212529;
  font-family: "Roboto", sans-serif;
  font-size: 15px !important;
  font-weight: 700;
  line-height: normal !important;
  text-transform: uppercase;
  letter-spacing: normal;
  margin: 0;
}
body #cons .body_slide_in_cart .main_title_wrapper .change_btn {
  color: #2a7b72;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: uppercase;
  letter-spacing: normal;
  margin: 0;
}
body #cons .body_slide_in_cart .info_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid #eceef0;
  background: #fff;
}
body #cons .body_slide_in_cart .info_wrapper .details_wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
}
body #cons .body_slide_in_cart .info_wrapper .details_wrapper .details_img_wrapper {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #eceef0;
}
body #cons .body_slide_in_cart .info_wrapper .details_wrapper .details_img_wrapper img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
body #cons .body_slide_in_cart .info_wrapper .details_wrapper .details_quantity_wrapper .details_price_for_pack {
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 16px !important;
  font-weight: 400;
  line-height: 110% !important;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  margin: 0;
}
body #cons .body_slide_in_cart .info_wrapper .details_wrapper .details_quantity_wrapper .details_quantity {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 130% !important;
  letter-spacing: normal;
  margin: 0;
}
body #cons .body_slide_in_cart .info_wrapper .price_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
}
body #cons .body_slide_in_cart .info_wrapper .price_wrapper .new_reg_price {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  text-decoration: line-through;
  margin: 0;
}
body #cons .body_slide_in_cart .info_wrapper .price_wrapper .new_sale_price {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
}
body #cons .new_subscription {
  padding: 0;
  margin: 12px 0;
  display: none;
}
body #cons .new_subscription .new_subscription_block .plan_selection {
  gap: 10px;
}
body #cons .new_subscription .new_subscription_block .plan_selection label.subscribe_save_variant {
  width: -moz-max-content;
  width: max-content;
}
@media (max-width: 361px) {
  body #cons .new_subscription .new_subscription_block .plan_selection label.subscribe_save_variant {
    width: calc((100% - 12px) / 2);
  }
}
body #cons .new_subscription .new_subscription_block .plan_details {
  padding: 12px;
}
body #cons .new_subscription .new_subscription_block .plan_comment {
  gap: 0;
}
body #cons .new_subscription .new_subscription_block .plan_comment > svg {
  margin-left: 5px;
}
body #cons .new_subscription .new_subscription_block .plan_comment > span {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
}
body #cons .new_subscription .new_subscription_block .plan_comment > span svg {
  width: 100%;
  height: 100%;
}
body #cons .new_subscription .new_subscription_block [data-tippy-root] {
  right: 0px !important;
}
@media (max-width: 345px) {
  body #cons .new_subscription .new_subscription_block .tippy-box {
    max-width: 310px !important;
  }
}
body #cons .new_subscription .new_subscription_block .tippy-box[data-placement^=bottom] > .tippy-arrow:before,
body #cons .new_subscription .new_subscription_block .tippy-box[data-placement^=top] > .tippy-arrow:before {
  left: 0px !important;
}
body #cons .new_subscription .new_subscription_block.is_disabled .is_active_one_pack {
  margin: 12px auto;
  text-align: center;
  gap: 0;
}
body #cons .new_subscription .new_subscription_block.is_disabled .is_active_one_pack > svg {
  width: 16px;
  height: 22px;
  flex-shrink: 0;
  margin-left: -14px;
}
body #cons .new_subscription .new_subscription_block.is_disabled .is_active_one_pack > span {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}
body #cons .new_subscription .new_subscription_block.is_disabled .is_active_one_pack > span svg {
  width: 100%;
  height: 100%;
}

.new_subscription {
  margin: 34px 0 12px;
  padding: 0;
}
.new_subscription .new_subscription_block.is_disabled .plan_selection label {
  color: #d3d3d3;
}
.new_subscription .new_subscription_block.is_disabled .plan_comment {
  display: none;
}
.new_subscription .new_subscription_block.is_disabled .is_active_one_pack {
  position: relative;
  display: flex;
  gap: 4px;
  max-width: 320px;
  color: #2a7b72;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  line-height: 22px;
  text-decoration-line: underline;
  letter-spacing: normal;
  margin: 4px 0 12px auto;
}
@media (max-width: 345px) {
  .new_subscription .new_subscription_block.is_disabled .is_active_one_pack {
    font-size: 13px;
  }
}
.new_subscription .new_subscription_block.is_disabled .is_active_one_pack > svg {
  width: 15px;
  height: 20px;
  flex-shrink: 0;
}
.new_subscription .new_subscription_block.is_disabled .is_active_one_pack > span {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.new_subscription .new_subscription_block .plan_selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.new_subscription .new_subscription_block .plan_selection label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 12px) / 2);
  padding: 9.2px 7px;
  margin: 0;
  color: #717171;
  font-family: "Roboto", sans-serif !important;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 6px;
  border: 2px solid #d3d3d3;
  background: #fff;
  letter-spacing: initial;
  cursor: pointer;
}
@media (max-width: 361px) {
  .new_subscription .new_subscription_block .plan_selection label {
    font-size: 13px;
  }
}
.new_subscription .new_subscription_block .plan_selection label.subscribe_save_variant {
  position: relative;
}
.new_subscription .new_subscription_block .plan_selection label.subscribe_save_variant::before {
  content: "Save extra 15%";
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: -moz-max-content;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px 2px 8px;
  border-radius: 4px 4px 0px 0px;
  background: #2a7b72;
  color: #fff;
  font-family: "DINEngschrift LT";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 1;
}
.new_subscription .new_subscription_block .plan_selection input[type=radio] {
  display: none;
}
.new_subscription .new_subscription_block .plan_selection input[type=radio]:checked + label {
  color: #212529;
  border: 2px solid #2a7b72;
  background: #fff;
}
.new_subscription .new_subscription_block .plan_comment {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  color: #2a7b72;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  line-height: 26px;
  text-decoration-line: underline;
  margin: 4px 0 4px auto;
  letter-spacing: initial;
}
@media (max-width: 361px) {
  .new_subscription .new_subscription_block .plan_comment {
    gap: 8px;
  }
}
@media (max-width: 345px) {
  .new_subscription .new_subscription_block .plan_comment {
    font-size: 12px;
  }
}
.new_subscription .new_subscription_block .plan_comment > svg {
  width: 15px;
  height: 20px;
}
.new_subscription .new_subscription_block [data-tooltip] {
  cursor: pointer;
}
.new_subscription .new_subscription_block [data-tippy-root] {
  right: -20px !important;
  z-index: 10 !important;
}
@media (max-width: 345px) {
  .new_subscription .new_subscription_block [data-tippy-root] {
    right: -3px !important;
  }
}
.new_subscription .new_subscription_block .tippy-box {
  background-color: #fff;
  filter: drop-shadow(0px 12px 32px rgba(0, 0, 0, 0.1));
  box-shadow: 30px 18px 39px 79px rgba(0, 0, 0, 0.08);
  max-width: 330px !important;
  border-radius: 8px;
}
.new_subscription .new_subscription_block .tippy-box .tippy-content {
  padding: 16px;
}
.new_subscription .new_subscription_block .tippy-box .tippy-content .tooltip_block p {
  color: #212529;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 8px;
  text-transform: initial;
  font-style: normal;
  text-align: left;
}
.new_subscription .new_subscription_block .tippy-box .tippy-content .tooltip_block ul {
  padding-left: 20px;
  margin: 0;
  text-align: left;
}
.new_subscription .new_subscription_block .tippy-box .tippy-content .tooltip_block ul li {
  color: #515151;
  list-style: disc;
  font-size: 11px;
}
.new_subscription .new_subscription_block .tippy-box .tippy-content .tooltip_block ul li + li {
  margin-top: 15px;
}
.new_subscription .new_subscription_block .tippy-box .tippy-content .tooltip_block ul li p {
  color: #515151;
  font-weight: 400;
  margin: 0;
}
.new_subscription .new_subscription_block .tippy-box[data-placement^=bottom] > .tippy-arrow, .new_subscription .new_subscription_block .tippy-box[data-placement^=top] > .tippy-arrow {
  display: block;
  color: white;
}
.new_subscription .new_subscription_block .tippy-box[data-placement^=bottom] > .tippy-arrow:before, .new_subscription .new_subscription_block .tippy-box[data-placement^=top] > .tippy-arrow:before {
  left: -20px !important;
}
@media (max-width: 345px) {
  .new_subscription .new_subscription_block .tippy-box[data-placement^=bottom] > .tippy-arrow:before, .new_subscription .new_subscription_block .tippy-box[data-placement^=top] > .tippy-arrow:before {
    left: -3px !important;
  }
}
.new_subscription .new_subscription_block .is_active_one_pack {
  display: none;
}
.new_subscription .new_subscription_block .plan_details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 4px;
  border: 2px solid var(--D3D3D3, #d3d3d3);
  background: #ecf2f1;
  margin: 0;
  list-style: none;
}
.new_subscription .new_subscription_block .plan_details li {
  position: relative;
  color: #000;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  padding-left: 22px;
}
.new_subscription .new_subscription_block .plan_details li::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 13.9px;
  height: 13.9px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/checkmark_done_complete_green.svg) no-repeat center center;
  background-size: inherit;
  border-radius: 50%;
}
.new_subscription .new_subscription_block .plan_details.one_time_checked + .custom_dropdown {
  display: none;
}
.new_subscription .new_subscription_block .plan_details.one_time_checked li:nth-child(3),
.new_subscription .new_subscription_block .plan_details.one_time_checked li:nth-child(4),
.new_subscription .new_subscription_block .plan_details.one_time_checked li:nth-child(5) {
  color: #c3c3c3;
}
.new_subscription .new_subscription_block .plan_details.one_time_checked li:nth-child(3)::before,
.new_subscription .new_subscription_block .plan_details.one_time_checked li:nth-child(4)::before,
.new_subscription .new_subscription_block .plan_details.one_time_checked li:nth-child(5)::before {
  content: "";
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/stop_icon.svg) no-repeat center center;
  background-size: contain;
}

.custom_dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 12px;
}
.custom_dropdown .dropdown_toggle {
  position: relative;
  width: 100%;
  text-align: left;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  background: #fff;
  padding: 8px 12px;
  cursor: pointer;
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: normal;
}
.custom_dropdown .dropdown_toggle.disabled {
  pointer-events: none;
  color: #c3c3c3;
  opacity: 0.7;
}
.custom_dropdown .dropdown_toggle::after {
  content: "";
  position: absolute;
  background-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/select_form_icon_green.svg);
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.custom_dropdown .dropdown_toggle.active::after {
  transform: rotateX(180deg) translateY(50%);
}
.custom_dropdown .dropdown_menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  background-color: #fff;
  z-index: 5;
  margin-top: 1px;
}
.custom_dropdown .dropdown_menu.show {
  display: block;
}
.custom_dropdown .text_transform {
  text-transform: lowercase;
}
.custom_dropdown .most_common {
  color: #717171;
}
.custom_dropdown .dropdown_item {
  padding: 5px 10px;
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  letter-spacing: normal;
}
.custom_dropdown .dropdown_item.selected {
  background: #2a7b72;
  color: white;
}
.custom_dropdown .dropdown_item.selected .most_common {
  color: white;
}
.custom_dropdown .dropdown_item:hover {
  background: #1f4fc9;
  color: white;
}
.custom_dropdown .dropdown_item:hover .most_common {
  color: white;
}

.new_price_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.new_price_wrapper .new_reg_price {
  color: #616267;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1.3px;
  text-decoration: line-through;
  text-transform: uppercase;
}
.new_price_wrapper .new_sale_price {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.new_price_wrapper .percent_off {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #2a7b72;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.new_price_wrapper .percent_off svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}/*# sourceMappingURL=main.css.map */`, $ = window.innerWidth < 768 ? "mobile" : "desktop";
  class O {
    constructor(t) {
      this.device = t, this.observer = null, this.isActiveOnePack = !1, this.isActiveTwoPack = !1, this.uniqueId = "", this.init();
    }
    init() {
      C({ name: "NatPat: subscription Optimization", dev: "SKh" }), E("exp_sub_land"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${j}</style>`), this.checkSubscriptionInitDefault(), this.changeSaveTxtOnePack(), this.renderNewSubscriptionBlock(), this.changeActivePackHandler(), this.changeTxtMainBtnToSubscribeAndSaveBtn(), this.changeSrcLogoUnderButton(), this.renderHeaderSlideInCart(), this.changeSrcCloseButtonSlideInCart(), this.renderNextStepBtnSlideInCart(), this.changeNextStepSlideInCart(), this.replaceLogoSlideInCart(), this.addEventsProceedToCheckoutBtn(), this.observeElementVisibility();
    }
    changeSaveTxtOnePack() {
      _(".list-packs-1 .save-btn span").then((t) => {
        b(".list-packs-1 .save-btn span").forEach((n) => {
          var i;
          (i = n.nextElementSibling) != null && i.classList.contains("new_save_txt") || n.insertAdjacentHTML("afterend", `<span class="new_save_txt">${n.getAttribute("data-price")}</span>`);
        });
      });
    }
    renderNewSubscriptionBlock() {
      _(".stay-container").then((t) => {
        const e = b(".stay-container");
        let n = !1;
        this.uniqueId = "Cons", e.forEach((i) => {
          i.closest("#getNow") && (this.uniqueId = "GetNow"), i.previousElementSibling.classList.contains("new_subscription") || (this.isActiveOnePack && (n = !0), i.insertAdjacentHTML("beforebegin", T(n, this.uniqueId)));
        });
      }), this.newSubscriptionBlockHandlers();
    }
    newSubscriptionBlockHandlers() {
      _(".new_subscription").then((t) => {
        this.isActiveOnePack || this.checkSubscriptionDefault(), this.renderCustomDropdown(), this.changeSubscriptionPlanHandler(), this.renderNewPriceBlock(), this.initTooltip();
      });
    }
    checkSubscriptionInitDefault() {
      console.log("checkSubscriptionInitDefault"), _("#cons #rtxSubscribe + label").then((t) => {
        b("#cons #rtxSubscribe").forEach((n) => {
          const i = n.nextElementSibling;
          console.log(n.checked, i, "inputControlVar.checked"), n.checked || i.click(), console.log(n.checked, i, "inputControlVar.checked");
        });
      });
    }
    checkSubscriptionDefault() {
      console.log("checkSubscriptionDefault"), _("#cons #rtxSubscribe + label").then((t) => {
        const e = p("#cons #rtxSubscribe"), n = e.nextElementSibling;
        e.checked || n.click(), console.log(e.checked, n, "inputControlVar.checked");
      });
    }
    renderCustomDropdown() {
      _(".new_subscription_block").then((t) => {
        b(".new_subscription_block").forEach((n) => {
          n.querySelector(".custom_dropdown") || n.insertAdjacentHTML("beforeend", N);
        }), this.renderCustomOptions();
      });
    }
    renderCustomOptions() {
      _(".subscribe-frequency select option").then((t) => {
        _(".custom_dropdown").then((e) => {
          const n = p("#getNow .subscribe-frequency select"), i = b("#getNow .subscribe-frequency select option"), c = b(".dropdown_menu"), o = b(".dropdown_toggle");
          i.forEach((s) => {
            var h, m, g, w;
            let a = s.getAttribute("selected") !== null ? "selected" : "";
            const l = s.getAttribute("value");
            let f = (h = s.textContent) != null && h.includes("Every") ? `<b>Ship every:</b> <span class="text_transform">${(m = s.textContent) == null ? void 0 : m.split("Every ")[1]}</span>` : s.textContent;
            (g = s.textContent) != null && g.includes("2 Months") && (f = `<b>Ship every:</b> <span class="text_transform">${(w = s.textContent) == null ? void 0 : w.split(
              "Every "
            )[1]}</span> <span class="most_common"> (most common)</span>`), n && n.value === l && o.forEach((d) => {
              d.innerHTML = `${f}`, a = "selected";
            }), p(".one_time_checked") && o.forEach((d) => {
              d.classList.add("disabled");
            }), c.forEach((d) => {
              d.insertAdjacentHTML(
                "beforeend",
                `<div class="dropdown_item ${a}" data-value="${l}">${f}</div>`
              );
            });
          }), this.changeCustomDropdownHandler(".custom_dropdown");
        });
      });
    }
    changeCustomDropdownHandler(t) {
      b(t).forEach((n) => {
        const i = n.querySelector(".dropdown_toggle"), c = n.querySelector(".dropdown_menu"), o = n.querySelectorAll(".dropdown_item"), s = b(".subscribe-frequency select option");
        i.addEventListener("click", () => {
          i.closest("#getNow") && u("exp_sub_land_element_04", "Sub_plan", "Click", "Order Selection & Confirmation"), i.closest("#cons") && u("exp_sub_land_element_03", "Sub_plan", "Click", "Sticky cart"), c.classList.toggle("show"), this.adjustDropdownPosition(c), i.classList.toggle("active");
        }), o.forEach((l) => {
          l.addEventListener("click", (f) => {
            var g, w;
            const h = f.currentTarget, m = h.getAttribute("data-value");
            this.syncDropdowns(t, m), o.forEach((d) => d.classList.remove("selected")), h.classList.add("selected"), c.style.top = "100%", i.innerHTML = h.innerHTML, c.classList.remove("show"), i.classList.remove("active"), i.closest("#getNow") && u(
              "exp_sub_land_dropdown_02",
              `Selected value: ${(g = h.querySelector(".text_transform")) == null ? void 0 : g.textContent}`,
              "Dropdown",
              "Order Selection & Confirmation"
            ), i.closest("#cons") && u(
              "exp_sub_land_dropdown_01",
              `Selected value: ${(w = h.querySelector(".text_transform")) == null ? void 0 : w.textContent}`,
              "Dropdown",
              "Sticky cart"
            ), s.forEach((d) => {
              d.getAttribute("value") === m && d.closest("select") && (d.closest("select").value = m);
            });
          });
        }), document.addEventListener("click", (l) => {
          const f = l.target;
          n.contains(f) || (c.classList.remove("show"), i.classList.remove("active"), c.style.top = "100%");
        }), new IntersectionObserver(
          (l) => {
            l.forEach((f) => {
              f.isIntersecting || this.adjustDropdownPosition(c);
            });
          },
          {
            root: null,
            threshold: 1
          }
        ).observe(c);
      });
    }
    adjustDropdownPosition(t) {
      const e = t.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight;
      e.bottom > n ? t.style.top = `-${e.height + 2}px` : t.style.top = "100%";
    }
    syncDropdowns(t, e) {
      b(t).forEach((i) => {
        const c = i.querySelector(".dropdown_toggle"), o = i.querySelector(".dropdown_menu"), s = i.querySelectorAll(".dropdown_item");
        s.forEach((a) => {
          a.getAttribute("data-value") === e && (s.forEach((l) => l.classList.remove("selected")), a.classList.add("selected"), c.innerHTML = a.innerHTML, o.classList.remove("show"), c.classList.remove("active"));
        });
      });
    }
    changeSubscriptionPlanHandler() {
      _(".new_subscription_block ").then(() => {
        const t = b("#rtxSubscribe"), e = b(".plan_selection label");
        t.forEach((n) => {
          const i = n.nextElementSibling;
          e.forEach((c) => {
            const o = c.cloneNode(!0);
            c.replaceWith(o), o.addEventListener("click", () => {
              var s, a, l, f, h, m, g, w;
              switch (console.log(o.getAttribute("for"), "newLabel.getAttribute('for') "), (o.getAttribute("for") === "oneTimeCons" || o.getAttribute("for") === "subscribeSaveCons") && (this.uniqueId = "Cons"), (o.getAttribute("for") === "oneTimeGetNow" || o.getAttribute("for") === "subscribeSaveGetNow") && (this.uniqueId = "GetNow"), (s = o == null ? void 0 : o.previousElementSibling) == null ? void 0 : s.value) {
                case "oneTime":
                  if (this.uniqueId === "Cons" && u("exp_sub_land_button_05", "One time", "Click", "Sticky cart"), this.uniqueId === "GetNow" && u("exp_sub_land_button_07", "One time", "Click", "Order Selection & Confirmation"), (a = o.previousElementSibling) != null && a.checked)
                    return;
                  n != null && n.checked && (i == null || i.click()), this.changeTxtMainBtnToProceedToCheckoutBtn(), (l = b(".plan_details")) == null || l.forEach((d) => {
                    d.classList.contains("one_time_checked") || d.classList.add("one_time_checked");
                  }), this.syncRadioButtons("oneTime");
                  break;
                case "subscribeSave":
                  if (this.uniqueId === "Cons" && u("exp_sub_land_button_06", "Subscribe & save", "Click", "Sticky cart"), this.uniqueId === "GetNow" && u("exp_sub_land_button_08", "Subscribe & save", "Click", "Order Selection & Confirmation"), (f = o.previousElementSibling) != null && f.checked)
                    return;
                  !(n != null && n.checked) && !this.isActiveOnePack && (i == null || i.click()), this.isActiveOnePack && (this.isActiveTwoPack = !0, p("#getNow .list-packs.list-packs-2").click()), this.changeTxtMainBtnToSubscribeAndSaveBtn(), (h = b(".plan_details")) == null || h.forEach((d) => {
                    d.classList.contains("one_time_checked") && d.classList.remove("one_time_checked");
                  }), this.syncRadioButtons("subscribeSave");
                  break;
              }
              (m = b(".custom_dropdown")) == null || m.forEach((d) => {
                d == null || d.remove();
              }), (g = b(".new_price_wrapper")) == null || g.forEach((d) => {
                d == null || d.remove();
              }), (w = p(".info_wrapper")) == null || w.remove(), this.isActiveTwoPack || this.renderCustomDropdown(), this.isActiveTwoPack = !1, this.renderInfoWrapperSlideInCart(), this.renderNewPriceBlock();
            });
          });
        });
      });
    }
    syncRadioButtons(t) {
      b(".plan_selection input").forEach((n) => {
        n.value === t && (n.checked = !0);
      });
    }
    changeActivePackHandler() {
      _(".magicpatch-packs").then((t) => {
        b(".magicpatch-packs .list-packs").forEach((n) => {
          n.addEventListener("click", (i) => {
            var c, o, s;
            n.classList.contains("list-packs-1") ? (this.isActiveOnePack = !0, this.changeTxtMainBtnToProceedToCheckoutBtn()) : (this.isActiveOnePack = !1, this.changeTxtMainBtnToSubscribeAndSaveBtn()), (c = b(".new_subscription")) == null || c.forEach((a) => {
              a == null || a.remove();
            }), (o = b(".new_price_wrapper")) == null || o.forEach((a) => {
              a == null || a.remove();
            }), (s = p(".info_wrapper")) == null || s.remove(), this.renderNewSubscriptionBlock(), this.renderInfoWrapperSlideInCart(), this.renderNewPriceBlock();
          });
        });
      });
    }
    renderNewPriceBlock() {
      _(".new_subscription").then((t) => {
        _(".list-packs.active-slide").then((e) => {
          var a, l, f, h, m, g, w, d;
          const n = p(".list-packs.active-slide");
          let i = b("#no-icart-open");
          const c = ((l = (a = n.querySelector(".info .before-after-prices .strikethrough")) == null ? void 0 : a.textContent) == null ? void 0 : l.trim()) || "", o = ((h = (f = n.querySelector(".info .before-after-prices .after-price")) == null ? void 0 : f.textContent) == null ? void 0 : h.trim()) || "";
          let s = ((g = (m = n.querySelector(".save-btn span")) == null ? void 0 : m.textContent) == null ? void 0 : g.trim()) || "";
          n.classList.contains("list-packs-1") && (s = ((d = (w = n.querySelector(".save-btn .new_save_txt")) == null ? void 0 : w.textContent) == null ? void 0 : d.trim()) || ""), c !== "" && o !== "" && s !== "" && i.forEach((k) => {
            var y;
            (y = k.previousElementSibling) != null && y.classList.contains("new_price_wrapper") || k.insertAdjacentHTML("beforebegin", I(c, o, s));
          });
        });
      });
    }
    initTooltip() {
      L([
        "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js"
      ]).then(async () => {
        let t = setInterval(() => {
          typeof tippy == "function" && p("[data-tooltip]") && (clearInterval(t), b("[data-tooltip]").forEach((e) => {
            tippy(e, {
              content: e.getAttribute("data-title"),
              trigger: "click",
              allowHTML: !0,
              arrow: !0,
              arrowType: "round",
              appendTo: function() {
                return e.closest(".plan_comment") || e.closest(".is_active_one_pack");
              },
              placement: "bottom-end",
              interactive: !0,
              onShow(n) {
                e.closest(".plan_comment") && u(
                  "exp_sub_land_tooltip_01",
                  "A choice that saves both time and money",
                  "View",
                  "Subscribe section"
                ), e.closest(".is_active_one_pack") && u("exp_sub_land_tooltip_02", "Select 2, 3 or 4 packs..", "View", "Subscribe section");
              }
            });
          }));
        }, 100);
      });
    }
    changeSrcLogoUnderButton() {
      _(".reviews-slide > img").then((t) => {
        const e = b(".reviews-slide > img"), n = "https://conversionratestore.github.io/projects/zenpatch/img/new_logos.png";
        e.forEach((i) => {
          i.src !== n && (i.src = n);
        });
      });
    }
    changeTxtMainBtnToProceedToCheckoutBtn() {
      _("#no-icart-open").then((t) => {
        b("#no-icart-open").forEach((n) => {
          n.textContent !== "PROCEED TO CHECKOUT" && (n.textContent = "PROCEED TO CHECKOUT");
        });
      });
    }
    changeTxtMainBtnToSubscribeAndSaveBtn() {
      _("#no-icart-open").then((t) => {
        b("#no-icart-open").forEach((n) => {
          n.textContent !== "Subscribe & Save" && (n.textContent = "Subscribe & Save");
        });
      });
    }
    renderHeaderSlideInCart() {
      _("#cons .title-logo").then((t) => {
        const e = p("#cons .title-logo");
        p(".header_slide_in_cart") || e.insertAdjacentHTML("afterbegin", B);
      });
    }
    changeSrcCloseButtonSlideInCart() {
      _("#cons .title-logo .close-btn").then((t) => {
        const e = p("#cons .title-logo .close-btn"), n = "https://conversionratestore.github.io/projects/buzzpatch/sunnypatch/img/close.svg";
        e.src !== n && (e.src = n);
      });
    }
    renderNextStepBtnSlideInCart() {
      _("#cons #no-icart-open").then((t) => {
        const e = p("#cons #no-icart-open");
        p(".next_step_btn") || e.insertAdjacentHTML("afterend", A);
      });
    }
    changeNextStepSlideInCart() {
      _("#cons .next_step_btn").then((t) => {
        const e = p("#cons .next_step_btn"), n = p("body #cons .magicpatch-packs"), i = p("#cons .header_slide_in_cart"), c = i == null ? void 0 : i.querySelector(".active_title"), o = i == null ? void 0 : i.querySelector(".active_step"), s = p("#cons #no-icart-open"), a = p("#cons .view-prices");
        e.addEventListener("click", (l) => {
          u("exp_sub_land_button_01", "Next step", "Click", "Sticky cart"), l.currentTarget.classList.add("active_step_second"), n.classList.add("active_step_second"), p(".body_slide_in_cart") || (n.insertAdjacentHTML("beforebegin", z), this.changePrevStepSlideInCart()), this.renderInfoWrapperSlideInCart(), p(".arrow_back") || i.insertAdjacentHTML(
            "afterbegin",
            /* HTML */
            `<span data-btnBack class="arrow_back">${x.arrowLeftBackIcon}</span>`
          ), s.style.display = "flex", c && o && a && (c.textContent = "plan", o.textContent = "2", a.classList.add("active_step_second"));
        });
      });
    }
    renderInfoWrapperSlideInCart() {
      _("#cons .body_slide_in_cart").then((t) => {
        var l, f, h, m, g, w, d, k, y;
        const e = p("#cons .body_slide_in_cart"), n = p(".list-packs.active-slide"), i = ((f = (l = n.querySelector(".info .before-after-prices .strikethrough")) == null ? void 0 : l.textContent) == null ? void 0 : f.trim()) || "", c = ((m = (h = n.querySelector(".info .before-after-prices .after-price")) == null ? void 0 : h.textContent) == null ? void 0 : m.trim()) || "", o = ((g = n.querySelector(".sticker-image img")) == null ? void 0 : g.getAttribute("src")) || "", s = ((d = (w = n.querySelector(".info .pack-price")) == null ? void 0 : w.textContent) == null ? void 0 : d.trim()) || "", a = ((y = (k = n.querySelector(".info .pcs")) == null ? void 0 : k.textContent) == null ? void 0 : y.split("|")[0].trim()) || "";
        p(".info_wrapper") || e.insertAdjacentHTML(
          "beforeend",
          P(i, c, o, s, a)
        );
      });
    }
    changePrevStepSlideInCart() {
      _("#cons .body_slide_in_cart").then((t) => {
        const e = b("#cons [data-btnBack]"), n = p("#cons .next_step_btn"), i = p("#cons .body_slide_in_cart"), c = p("#cons .magicpatch-packs"), o = p("#cons .header_slide_in_cart"), s = o == null ? void 0 : o.querySelector(".active_title"), a = o == null ? void 0 : o.querySelector(".active_step"), l = p("#cons #no-icart-open"), f = p("#cons .view-prices");
        e == null || e.forEach((h) => {
          h.addEventListener("click", (m) => {
            var g;
            h.classList.contains("arrow_back") ? u("exp_sub_land_arrow_back_01", "Arrow Back", "Click", "Sticky cart") : u("exp_sub_land_button_04", "Change", "Click", "Sticky cart"), n.classList.remove("active_step_second"), c.classList.remove("active_step_second"), i == null || i.remove(), l.style.display = "none", (g = p(".arrow_back")) == null || g.remove(), s && a && f && (s.textContent = "package", a.textContent = "1", f.classList.contains("active_step_second") && f.classList.remove("active_step_second"));
          });
        });
      });
    }
    replaceLogoSlideInCart() {
      _("#cons .reviews-slide").then((t) => {
        const e = p("#cons .reviews-slide"), n = p("#cons .view-prices");
        !(n != null && n.querySelector(".reviews-slide")) && n && n.insertAdjacentElement("beforeend", e);
      });
    }
    addEventsProceedToCheckoutBtn() {
      _("#no-icart-open").then((t) => {
        b("#no-icart-open").forEach((n) => {
          n.addEventListener("click", (i) => {
            n.closest("#getNow") && (n.textContent === "Subscribe & Save" && u("exp_sub_land_button_09", "Subscribe & save", "Click", "Order Selection & Confirmation"), n.textContent === "PROCEED TO CHECKOUT" && u("exp_sub_land_button_10", "Proceed to checkout", "Click", "Order Selection & Confirmation")), n.closest("#cons") && (n.textContent === "Subscribe & Save" && u("exp_sub_land_button_02", "Subscribe & save", "Click", "Sticky cart"), n.textContent === "PROCEED TO CHECKOUT" && u("exp_sub_land_button_03", "Proceed to checkout", "Click", "Sticky cart"));
          });
        });
      });
    }
    observeElementVisibility() {
      const t = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }, e = new IntersectionObserver(n, t);
      _("#cons .next_step_btn").then((i) => {
        const c = p(".next_step_btn");
        e.observe(c);
      }), _("#cons .body_slide_in_cart").then((i) => {
        const c = p(".body_slide_in_cart");
        e.observe(c);
      });
      function n(i) {
        i.forEach((c) => {
          c.isIntersecting && (c.target.classList.contains("next_step_btn") ? v(".next_step_btn", "exp_sub_land_element_01", "Sticky cart", "Step 1", "View") : c.target.classList.contains("body_slide_in_cart") && v(".body_slide_in_cart", "exp_sub_land_element_02", "Sticky cart", "Step 2", "View"));
        });
      }
    }
  }
  _("#getNow #rtxSubscribe + label").then((r) => {
    new O($);
  });
})();
//# sourceMappingURL=index.js.map
