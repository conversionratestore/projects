(function() {
  "use strict";
  const u = (t, n, e, p = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: p
    }), console.log(`Event: ${t} | ${n} | ${e} | ${p}`);
  }, _ = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, g = (t) => document.querySelectorAll(t), o = (t) => document.querySelector(t), f = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_1"));
    }, 1e3);
  };
  function d(t) {
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
    let n, e, p, i, a = (t == null ? void 0 : t.delay) || 50;
    function r() {
      n = null, i = 0;
    }
    return r(), function() {
      return e = window.scrollY, n != null && (i = e - n), n = e, clearTimeout(p), p = setTimeout(r, a), i;
    };
  })();
  function w(t) {
    return new Promise((n) => setTimeout(n, t));
  }
  const m = async (t, n) => {
    const e = t, i = (n == null ? void 0 : n.getBoundingClientRect().top) + window.pageYOffset - e;
    return window.scrollTo({
      top: i,
      behavior: "smooth"
    }), await w(800), !0;
  }, s = "https://conversionratestore.github.io/projects/buzzpatch/img/", c = {
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
    ),
    arrowWhiteIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path
        d="M11.7769 4.44951L7.54411 0.21672C7.47447 0.146501 7.39161 0.0907677 7.30032 0.0527335C7.20902 0.0146993 7.1111 -0.00488281 7.0122 -0.00488281C6.91331 -0.00488281 6.81539 0.0146993 6.72409 0.0527335C6.6328 0.0907677 6.54994 0.146501 6.4803 0.21672C6.34076 0.357085 6.26244 0.546963 6.26244 0.744882C6.26244 0.942802 6.34076 1.13268 6.4803 1.27305L9.47696 4.26971H0.749167C0.550476 4.26971 0.359922 4.34864 0.219426 4.48914C0.07893 4.62964 0 4.82019 0 5.01888C0 5.21757 0.07893 5.40813 0.219426 5.54862C0.359922 5.68912 0.550476 5.76805 0.749167 5.76805H9.43951L6.44284 8.72726C6.30276 8.86833 6.22446 9.05927 6.22516 9.25807C6.22586 9.45687 6.30551 9.64725 6.44658 9.78733C6.58765 9.92741 6.77859 10.0057 6.9774 10.005C7.1762 10.0043 7.36658 9.92465 7.50666 9.78358L11.7395 5.55079C11.8179 5.48326 11.8816 5.40019 11.9263 5.30683C11.9711 5.21347 11.996 5.11184 11.9996 5.00836C12.0031 4.90488 11.9851 4.8018 11.9468 4.70561C11.9085 4.60942 11.8506 4.52222 11.7769 4.44951Z"
        fill="white"
      />
    </svg>
  `
    )
  }, b = (t) => (
    /* HTML */
    `
    <div class="new_popup_header">
      <div class="progress_bar"></div>
      <h2>
        ${c.giftIcon}
        <p>Congratulations! You get <span>a FREE GIFT!</span></p>
      </h2>
    </div>
    <div class="new_popup_body">
      <div class="img_wrapper">
        <img src="${s}free_gift_img.png" alt="free gift img" />
        <p>LIMITED COLLECTION</p>
      </div>
      <div class="info_wrapper">
        <p><span class="sticker_price">${t}</span><span>FREE</span></p>
        <p>16 STICKERS</p>
        <p>added to your order</p>
      </div>
    </div>
    <div class="new_popup_footer">
      <div class="new_checkout_btn">Checkout ${c.arrowWhiteIcon}</div>
    </div>
  `
  ), x = (
    /* HTML */
    `
  <div class="new_popup_header">
    <h2>
      ${c.giftIcon}
      <p>Congratulations! You get <span>a FREE GIFT!</span></p>
    </h2>
  </div>
  <div class="new_popup_body">
    <div class="img_wrapper">
      <img src="${s}free_gift_img_c.png" alt="free gift img" />
    </div>
    <div class="info_wrapper">
      <p>NATPAT Silly Socks</p>
      <div class="socks_radio_wrapper">
        <input value="43502214283308" type="radio" name="socks" id="smallSize" />
        <label for="smallSize"> small - 12*8cm </label>

        <input value="43502214316076" type="radio" name="socks" id="mediumSize" />
        <label for="mediumSize"> Medium - 14*9cm </label>

        <input value="43502214348844" type="radio" name="socks" id="largeSize" checked />
        <label for="largeSize"> large - 16*10cm </label>
      </div>
    </div>
  </div>
  <div class="new_popup_footer">
    <div class="new_checkout_btn">Add Gift to order and check out ${c.arrowWhiteIcon}</div>
    <div class="new_no_thanks_btn">No, thanks. I do not want the free gift</div>
  </div>
`
  ), v = (t) => (
    /* HTML */
    `
    <div class="new_popup_backdrop is_hidden">
      <div class="new_popup">
        <!-- <div class="new_popup_content version_b">${b(t)}</div> -->
        <div class="new_popup_content version_c">${x}</div>
      </div>
    </div>
  `
  ), k = `#getNow {
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
  padding: 16px 0 29px;
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
  line-height: 20px;
}
#getNow #addToCart {
  padding: 20px 10px;
  margin-bottom: 19px;
  letter-spacing: 1.5px;
  line-height: 24px;
}
#getNow .days {
  margin-top: 0 !important;
  margin-bottom: 23px !important;
}
#getNow .bestseller {
  font-weight: 700;
}

#nudge-ui-container {
  display: none !important;
}

.js-packs input[type=radio]:checked + label .gift_icon path,
.new-bundle-pack .js-packs input[type=radio]:checked + label .pack-label .gift_icon path {
  fill: white;
}

.new_popup_backdrop {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000000000;
  transition: all 0.5s ease 0s;
  overflow: auto;
}
.new_popup_backdrop.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.new_popup_backdrop.is_hidden .new_popup {
  transform: translateY(100%);
}
.new_popup_backdrop .new_popup {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  transition: transform 0.5s ease;
  border-radius: 30px 30px 0px 0px;
  background: #fff;
  transform: translateY(0);
  box-shadow: 0px -4px 24px 0px rgba(0, 0, 0, 0.26);
  overflow: hidden;
}
.new_popup_backdrop .new_popup_header {
  position: relative;
}
@keyframes fill {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
.new_popup_backdrop .new_popup_header .progress_bar {
  display: block;
  position: absolute;
  top: 1px;
  left: 0;
  height: 4px;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  will-change: transform;
}
.new_popup_backdrop .new_popup_header .progress_bar_fill {
  background: #1e4fd1;
  animation: fill 4s forwards;
}
.new_popup_backdrop .new_popup_header h2 {
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0;
  text-transform: initial;
}
.new_popup_backdrop .new_popup_header h2 p {
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 16px !important;
  font-weight: 700;
  line-height: 21px !important;
  margin: 0;
  letter-spacing: initial;
}
.new_popup_backdrop .new_popup_header h2 p span {
  color: #ff3c81;
}
.new_popup_backdrop .new_popup_body {
  display: flex;
  align-items: center;
  border-top: 2px dashed rgba(0, 0, 0, 0.1);
  border-bottom: 2px dashed rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
}
.new_popup_backdrop .new_popup_body .img_wrapper {
  width: 100%;
}
.new_popup_backdrop .new_popup_body .img_wrapper img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.new_popup_backdrop .new_popup_body .img_wrapper p {
  color: #1e4fd1;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px !important;
  font-weight: 700;
  line-height: 21px !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 9px 0 0 9px;
}
.new_popup_backdrop .new_popup_body .info_wrapper p {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #1e4fd1;
  margin: 0;
}
.new_popup_backdrop .new_popup_footer {
  padding: 16px 24px 24px;
}
.new_popup_backdrop .new_popup_footer .new_checkout_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  color: #fff;
  font-family: Din Condensed, Roboto, sans-serif;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  border-radius: 25px;
  background: #ff3c81;
  cursor: pointer;
}
.new_popup_backdrop .new_popup_footer .new_checkout_btn:hover {
  background: #0c0b0b;
}
.new_popup_backdrop .new_popup_footer .new_checkout_btn:active {
  background-color: #0c0b0b;
  border: none;
}
.new_popup_backdrop .new_popup_footer svg {
  margin-top: -2px;
}

.version_b .new_popup_body {
  padding: 6px 24px 15px 15px;
  justify-content: space-between;
  gap: 16px;
}
@media (max-width: 376px) {
  .version_b .new_popup_body {
    padding: 8px 15px 17px;
  }
}
.version_b .new_popup_body .img_wrapper {
  max-width: 155px;
}
.version_b .new_popup_body .img_wrapper img {
  max-height: 148px;
}
.version_b .new_popup_body .info_wrapper p:nth-child(1) {
  font-size: 36px !important;
  line-height: 24px !important;
  letter-spacing: -2px;
}
.version_b .new_popup_body .info_wrapper p:nth-child(1) span:nth-child(2) {
  color: #ff3c81;
  line-height: 32px !important;
  margin-left: 8px;
}
.version_b .new_popup_body .info_wrapper p:nth-child(1) .sticker_price {
  text-decoration-line: line-through;
}
.version_b .new_popup_body .info_wrapper p:nth-child(2) {
  font-size: 30px !important;
  line-height: 32px !important;
  letter-spacing: -0.8px;
}
.version_b .new_popup_body .info_wrapper p:nth-child(3) {
  font-size: 14px !important;
  line-height: 21px !important;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.version_b .new_popup_body .info_wrapper p + p {
  margin-top: 4px;
}
.version_b .new_popup_footer .new_checkout_btn {
  height: 44px;
  font-size: 20px;
}

.version_c .new_popup_body {
  justify-content: center;
  padding: 16px 19px 16px 9px;
  gap: 24px;
}
@media (max-width: 376px) {
  .version_c .new_popup_body {
    padding: 16px 9px 16px 9px;
    gap: 19px;
  }
}
.version_c .new_popup_body .img_wrapper {
  max-width: 178px;
}
@media (max-width: 361px) {
  .version_c .new_popup_body .img_wrapper {
    max-width: 160px;
  }
}
.version_c .new_popup_body .info_wrapper p {
  font-size: 18px !important;
  line-height: 20px !important;
  letter-spacing: initial;
}
.version_c .new_popup_body .info_wrapper .socks_radio_wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}
.version_c .new_popup_body .info_wrapper .socks_radio_wrapper label {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 132px;
  max-height: 42px;
  color: #212529;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  border-radius: 4px;
  border: 2px solid #d9d9d9;
  background: #fff;
  padding: 12px 8px;
  margin: 0;
}
.version_c .new_popup_body .info_wrapper .socks_radio_wrapper input {
  display: none;
}
.version_c .new_popup_body .info_wrapper .socks_radio_wrapper input:checked + label {
  border: 2px solid #ff3c7f;
  background: #ff3c7f;
  color: #fff;
}
.version_c .new_popup_footer .new_checkout_btn {
  height: 51px;
  font-size: 18px;
}
.version_c .new_popup_footer .new_no_thanks_btn {
  max-width: -moz-max-content;
  max-width: max-content;
  color: #212529;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
  text-align: center;
  margin: 16px auto 0;
}/*# sourceMappingURL=main.css.map */`, y = window.innerWidth < 768 ? "mobile" : "desktop";
  class C {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      _({ name: "Gift hypothesis (second iteration) v.C", dev: "SKh" }), f("exp_introduce_c"), localStorage.getItem("clickCheckoutBtn") === "yes" && localStorage.removeItem("clickCheckoutBtn"), localStorage.getItem("setTimeout3000") === "yes" && localStorage.removeItem("setTimeout3000"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${k}</style>`), this.createPopup(), this.rendergGiftElements(), this.clickProceedToCheckoutBtnHandler(), this.clickNewCheckoutBtnHandler(), this.clickNewNoThanksBtnHandler(), this.clickRadioBtnHandler(), this.handleClickGetNow();
    }
    rendergGiftElements() {
      g("#getNow input[type=radio] + label").forEach((n) => {
        n.getAttribute("for") !== "radios-3" && n.insertAdjacentHTML("afterbegin", c.giftIcon);
      }), o(".new-bundle-pack img").src !== `${s}new_bundle_img.png` && (o(".new-bundle-pack img").src = `${s}new_bundle_img.png`), o("#getNow .days").src !== `${s}new_trustpilot_reviews_img.png` && (o("#getNow .days").src = `${s}new_trustpilot_reviews_img.png`);
    }
    triggerPopupOpenVerC(n) {
      this.handleShowPopup();
    }
    createPopup() {
      var e;
      const n = (e = o(".free-natpat-products .np-decals")) == null ? void 0 : e.getAttribute("data-price-compare");
      o(".new_popup_backdrop") || o("body").insertAdjacentHTML("afterbegin", v(n || "$9.99")), d(".new_popup_backdrop").then((p) => {
        this.handleClosePopup();
      });
    }
    handleShowPopup() {
      var i;
      const n = o("body"), e = o(".new_popup_backdrop"), p = o("html");
      e.classList.contains("is_hidden") && e.classList.remove("is_hidden"), n.style.overflow = "hidden", p.style.overflow = "hidden", (i = o(".progress_bar")) == null || i.classList.add("progress_bar_fill"), u("exp_introduce_v2_element_01", "Popover", "Visibility", "Congratulations! You get a FREE GIFT!  ");
    }
    handleClosePopup() {
      const n = o("body"), e = o(".new_popup_backdrop"), p = o(".new_popup"), i = p.querySelectorAll('[data-popup="close"]'), a = o("html");
      i.forEach((r) => {
        r.addEventListener("click", (l) => {
          l.currentTarget && (e.classList.add("is_hidden"), n.style.overflow = "initial", a.style.overflow = "initial");
        });
      });
    }
    clickProceedToCheckoutBtnHandler() {
      var n;
      (n = o("#addToCart")) == null || n.addEventListener("click", (e) => {
        var a;
        e.preventDefault();
        let p = (a = o(".js-packs input[type=radio]:checked+label")) == null ? void 0 : a.previousElementSibling.value;
        p === "39542857695276" ? this.addToCartGiftHandler(p, !1) : this.triggerPopupOpenVerC(p);
      });
    }
    clickNewCheckoutBtnHandler() {
      d(".new_checkout_btn").then((n) => {
        var e;
        (e = o(".new_checkout_btn")) == null || e.addEventListener("click", (p) => {
          var l, h;
          if (p.preventDefault(), u(
            "exp_introduce_v2_button_04",
            "Add Gift to order and check out",
            "Button",
            "Congratulations! You get a FREE GIFT!  "
          ), localStorage.setItem("clickCheckoutBtn", "yes"), localStorage.getItem("setTimeout3000") === "yes")
            return;
          let i = (l = o(".js-packs input[type=radio]:checked+label")) == null ? void 0 : l.previousElementSibling.value, a = "39542857695276", r = (h = o(".socks_radio_wrapper input[type=radio]:checked")) == null ? void 0 : h.value;
          i === a ? this.addToCartGiftHandler(i, !1) : this.addToCartGiftHandler(i, !0, !0, r);
        });
      });
    }
    clickNewNoThanksBtnHandler() {
      d(".new_no_thanks_btn").then((n) => {
        var e;
        (e = o(".new_no_thanks_btn")) == null || e.addEventListener("click", (p) => {
          var a;
          p.preventDefault(), u(
            "exp_introduce_v2_button_05",
            "No, thanks. I do not want the free gift",
            "Button",
            "Congratulations! You get a FREE GIFT!  "
          );
          let i = (a = o(".js-packs input[type=radio]:checked+label")) == null ? void 0 : a.previousElementSibling.value;
          this.addToCartGiftHandler(i, !1, !0);
        });
      });
    }
    clickRadioBtnHandler() {
      d(".socks_radio_wrapper").then((n) => {
        g(".socks_radio_wrapper label").forEach((e) => {
          e.addEventListener("click", (p) => {
            u(
              "exp_introduce_v2_button_03",
              e.textContent.trim(),
              "Button",
              "Congratulations! You get a FREE GIFT!"
            );
          });
        });
      });
    }
    async addToCartGiftHandler(n, e = !0, p = !1, i) {
      var l;
      await fetch("/cart/clear.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let a = [
        {
          id: n,
          quantity: 1
        }
      ];
      e && a.push({
        id: i ?? 43320074436652,
        quantity: 1
      }), await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: a
        })
      }), p && ((l = o(".new_popup_backdrop")) == null || l.classList.add("is_hidden"), o("body").style.overflow = "initial", o("html").style.overflow = "initial"), window.location.href = "/checkout";
    }
    handleClickGetNow() {
      d("#getNow").then((n) => {
        g('[href="#getFormNow"]').forEach((e) => {
          e.addEventListener("click", (p) => {
            p.preventDefault(), p.stopPropagation(), $("html, body").stop();
            let i = o("#getNow"), a = 65, r = !0, l = setInterval(async () => {
              i.getBoundingClientRect().top > a - 1 && i.getBoundingClientRect().top <= a + 1 ? clearInterval(l) : r && (r = !1, r = await m(a, i));
            }, 100);
          });
        });
      });
    }
  }
  window.location.pathname.match("pages") && new C(y);
})();
//# sourceMappingURL=index.js.map
