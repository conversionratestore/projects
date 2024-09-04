(function() {
  "use strict";
  const l = (a, n) => {
    const t = setInterval(() => {
      document.querySelector(a) && (clearInterval(t), n());
    }, 100);
  }, C = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class f {
    constructor(n) {
      this.elements = typeof n == "string" ? document.querySelectorAll(n) : n instanceof Element ? [n] : n;
    }
    on(n, t, e) {
      return typeof t == "function" && (e = t, t = ""), this.elements.forEach(function(s) {
        s.addEventListener(n, function(r) {
          var p;
          if (t) {
            let c = (p = r.target) == null ? void 0 : p.closest(t);
            s.contains(c) && (e == null || e.call(c, r));
          } else
            e == null || e.call(s, r);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.toggle(n);
      }), this;
    }
    each(n) {
      return this.elements.forEach((t, e) => {
        n(t, e);
      }), this;
    }
    style(n, t) {
      const e = n.split("-").map((s, r) => r === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[e] = t;
      }), this;
    }
  }
  const i = (a) => new f(a), d = `.variant1 {
  padding: 20px;
  height: 100%;
  overflow: auto;
}
.variant1 h1 {
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 12px;
}
.variant1 h1 span {
  color: #066fde;
}
.variant1 > p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 8px;
  display: flex;
}
.variant1 > p b {
  font-weight: 700;
  color: #066fde;
}
.variant1 > p svg {
  margin-right: 12px;
}
.variant1 .special_offer {
  margin-top: 12px;
}
.variant1 .special_offer > span {
  display: none;
  border-radius: 8px 8px 0px 0px;
  background: #005bbb;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
}
.variant1 .special_offer .bottom_part {
  border: 1px solid #c2cad8;
  border-radius: 8px;
  background: #fbfbfb;
  padding: 16px;
}
.variant1 .special_offer .total {
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: #121620;
  display: flex;
  justify-content: space-between;
}
.variant1 .special_offer .total span {
  color: #066fde;
}
.variant1 .special_offer .code {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
  line-height: 18px;
  color: #04a777;
  font-weight: 600;
}
.variant1 .special_offer .code svg {
  margin-right: 8px;
}
.variant1 .special_offer .info {
  font-size: 12px;
  color: #6b7baa;
  margin-top: 8px;
}
.variant1 .special_offer .info > * {
  color: #6b7baa;
  display: block;
}
.variant1 > a {
  margin-top: 12px;
  padding: 0 20px;
  display: block;
}

.payment_labels {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
  padding: 0 20px;
}
.payment_labels p {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 18px;
  color: #4b536a;
  font-weight: 700;
}
.payment_labels p svg {
  flex-shrink: 0;
}

.crs_timer {
  margin-bottom: 12px;
}
.crs_timer .timer_wrapper {
  width: 100%;
  border-radius: 6px;
  background: #3e9cff;
  position: relative;
  overflow: hidden;
  height: 24px;
}
.crs_timer .timer_wrapper .timer_line {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  background: #005bbb;
  border-radius: 6px;
}
.crs_timer .timer_wrapper p {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  z-index: 2;
}
.crs_timer .timer_wrapper p span {
  font-weight: 700;
}

.sticky > .w-full.font-bold {
  display: none;
}

#primer-checkout-scene-credit-card-form {
  margin-top: 25px;
}/*# sourceMappingURL=style.css.map */`, h = "https://conversionratestore.github.io/projects/hint/img", o = {
    hand: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <g clip-path="url(#clip0_80_7276)">
    <path d="M26.3157 23.7873L23.0191 20.4906L21.8542 21.6556L21.2217 21.0231C21.9442 20.0604 22.3726 18.865 22.3726 17.5715C22.3726 15.2765 21.0239 13.2907 19.0776 12.3646L19.0777 7.77492C19.0777 6.4143 17.9707 5.3072 16.6101 5.30709H16.61C16.32 5.30709 16.0415 5.35735 15.7828 5.44966V4.88163C15.7828 3.52105 14.6759 2.41396 13.3151 2.4138C13.0251 2.4138 12.7466 2.46405 12.488 2.55637V2.46772C12.4879 1.1072 11.3809 0.000164062 10.0202 0C8.65947 0 7.55243 1.10709 7.55243 2.46783V2.55637C7.29381 2.46405 7.01534 2.4138 6.72539 2.41374C5.3646 2.41374 4.25756 3.52078 4.25756 4.88157L4.25751 8.76843C3.99714 8.67502 3.71659 8.62411 3.42456 8.62411C2.06705 8.62411 0.962585 9.72852 0.962585 11.086V17.4982C0.962531 20.1525 2.11053 22.6319 4.12637 24.3625V28H15.9137V24.3625C16.288 24.0412 16.6316 23.6935 16.9442 23.3242C18.1091 23.2573 19.1825 22.843 20.0618 22.1832L20.6942 22.8157L19.5292 23.9806L22.8258 27.2773C23.7915 28.2534 25.3728 28.2212 26.3157 27.2773C27.2779 26.315 27.2779 24.7494 26.3157 23.7873ZM16.61 6.94766C17.066 6.94777 17.4371 7.31883 17.4371 7.77487L17.437 11.8683C17.1669 11.8293 16.8908 11.8087 16.61 11.8087C16.3292 11.8087 16.0531 11.8293 15.7829 11.8683V7.77487C15.7829 7.31877 16.154 6.94772 16.61 6.94766ZM14.273 23.5764V26.3594H5.76694V23.5764C3.80552 22.1718 2.59244 19.9088 2.60316 17.4982V11.086C2.60316 10.6332 2.97159 10.2647 3.42451 10.2647C3.88377 10.2647 4.25745 10.6384 4.25745 11.0976L4.2574 16.0787H5.07771C7.35063 16.0787 9.19978 17.9279 9.19978 20.2008H10.8404C10.8404 17.3018 8.68834 14.8958 5.89802 14.4963L5.89813 4.88157C5.89813 4.42548 6.26919 4.05437 6.72523 4.05437C7.18132 4.05442 7.55237 4.42553 7.55237 4.88157V12.7142H9.193V2.46783C9.193 2.01168 9.56405 1.64062 10.02 1.64062C10.4762 1.64068 10.8473 2.01184 10.8474 2.46783V12.7142H12.488V4.88163C12.488 4.42553 12.859 4.05442 13.315 4.05442C13.7712 4.05448 14.1422 4.42559 14.1422 4.88163V12.3646C12.1959 13.2908 10.8472 15.2765 10.8472 17.5715C10.8472 20.1517 12.5519 22.3414 14.8942 23.0734C14.7987 23.1627 14.417 23.465 14.273 23.5764ZM16.61 21.6935C14.3371 21.6935 12.4879 19.8444 12.4879 17.5715C12.4879 15.2986 14.3371 13.4494 16.61 13.4494C18.8829 13.4494 20.7321 15.2986 20.7321 17.5715C20.7321 19.8444 18.8829 21.6935 16.61 21.6935ZM25.1556 26.1171C24.8331 26.4395 24.3084 26.4396 23.9859 26.1171L21.8493 23.9806L23.0191 22.8108L25.1556 24.9473C25.4782 25.2698 25.4782 25.7946 25.1556 26.1171Z" fill="#066FDE"/>
    </g>
    <defs>
    <clipPath id="clip0_80_7276">
    <rect width="28" height="28" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
    chat: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M25.5391 8.25734H19.7969V4.15577C19.7969 2.7988 18.6929 1.69482 17.336 1.69482H2.46094C1.10398 1.69482 0 2.7988 0 4.15577V13.9995C0 15.3565 1.10398 16.4605 2.46094 16.4605H3.28126V18.9214C3.28126 19.5784 4.01505 19.9649 4.55657 19.604L8.20314 17.1729V20.562C8.20314 21.919 9.30712 23.023 10.6641 23.023H18.7282L23.4434 26.1665C23.9857 26.528 24.7187 26.1411 24.7187 25.4839V23.023H25.5391C26.896 23.023 28 21.919 28 20.562V10.7183C28.0001 9.36132 26.8961 8.25734 25.5391 8.25734ZM8.56616 14.9591C8.56539 14.9597 8.56457 14.9602 8.56381 14.9607L4.92188 17.3886V15.6402C4.92188 15.1871 4.5546 14.8198 4.10157 14.8198H2.46094C2.00862 14.8198 1.64063 14.4519 1.64063 13.9995V4.15577C1.64063 3.70345 2.00862 3.33545 2.46094 3.33545H17.336C17.7883 3.33545 18.1563 3.70345 18.1563 4.15577V13.9995C18.1563 14.4519 17.7883 14.8198 17.336 14.8198H9.02346C8.8647 14.8198 8.70063 14.869 8.56616 14.9591ZM26.3594 20.562C26.3594 21.0144 25.9914 21.3824 25.5391 21.3824H23.8985C23.4455 21.3824 23.0782 21.7496 23.0782 22.2027V23.9511L19.4316 21.5201C19.2969 21.4303 19.1385 21.3824 18.9766 21.3824H10.6641C10.2118 21.3824 9.84377 21.0144 9.84377 20.562V16.4605H17.336C18.6929 16.4605 19.7969 15.3565 19.7969 13.9995V9.89796H25.5391C25.9914 9.89796 26.3594 10.266 26.3594 10.7183V20.562Z" fill="#066FDE"/>
    <path d="M10.6641 9.89796H4.10156C3.64853 9.89796 3.28125 10.2652 3.28125 10.7183C3.28125 11.1713 3.64853 11.5386 4.10156 11.5386H10.6641C11.1171 11.5386 11.4844 11.1713 11.4844 10.7183C11.4844 10.2652 11.1171 9.89796 10.6641 9.89796Z" fill="#066FDE"/>
    <path d="M15.6953 6.61671H4.10156C3.64853 6.61671 3.28125 6.984 3.28125 7.43703C3.28125 7.89006 3.64853 8.25734 4.10156 8.25734H15.6953C16.1484 8.25734 16.5157 7.89006 16.5157 7.43703C16.5157 6.984 16.1484 6.61671 15.6953 6.61671Z" fill="#066FDE"/>
    </svg>`,
    discount: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M8.125 8.125C8.47018 8.125 8.75 7.84518 8.75 7.5C8.75 7.15482 8.47018 6.875 8.125 6.875C7.77982 6.875 7.5 7.15482 7.5 7.5C7.5 7.84518 7.77982 8.125 8.125 8.125Z" fill="#04A777"/>
    <path d="M11.875 13.125C12.2202 13.125 12.5 12.8452 12.5 12.5C12.5 12.1548 12.2202 11.875 11.875 11.875C11.5298 11.875 11.25 12.1548 11.25 12.5C11.25 12.8452 11.5298 13.125 11.875 13.125Z" fill="#04A777"/>
    <path d="M17.5 6.05375V3.75C17.5 3.405 17.22 3.125 16.875 3.125H3.125C2.78 3.125 2.5 3.405 2.5 3.75V6.05375C0.9875 6.7575 0 8.29 0 10C0 11.7087 0.9875 13.2425 2.5 13.9462V16.25C2.5 16.595 2.78 16.875 3.125 16.875H16.875C17.22 16.875 17.5 16.595 17.5 16.25V13.9462C19.0125 13.2425 20 11.7087 20 10C20 8.29 19.0125 6.7575 17.5 6.05375ZM8.125 5.625C9.15875 5.625 10 6.46625 10 7.5C10 8.53375 9.15875 9.375 8.125 9.375C7.09125 9.375 6.25 8.53375 6.25 7.5C6.25 6.46625 7.09125 5.625 8.125 5.625ZM6.875 14.375C6.73375 14.375 6.5925 14.3275 6.475 14.23C6.21 14.0087 6.17375 13.615 6.395 13.35L12.645 5.85C12.8675 5.58375 13.2612 5.55125 13.525 5.77C13.79 5.99125 13.825 6.385 13.6038 6.65125L7.35375 14.1512C7.23125 14.2975 7.05375 14.375 6.875 14.375ZM11.875 14.375C10.8413 14.375 10 13.5337 10 12.5C10 11.4663 10.8413 10.625 11.875 10.625C12.9087 10.625 13.75 11.4663 13.75 12.5C13.75 13.5337 12.9087 14.375 11.875 14.375Z" fill="#04A777"/>
    </svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_80_7346)">
    <path d="M20.003 4.75028C20.003 3.23303 18.7698 2 17.2525 2H2.75046C1.23321 2 0 3.23303 0 4.75028V8.00088H20.003V4.75028Z" fill="#066FDE"/>
    <path d="M5.00027 5.00079C4.44721 5.00079 4 4.55267 4 4.00052V1.00008C4 0.448125 4.44721 0 5.00027 0C5.55333 0 6.00035 0.448125 6.00035 1.00008V4.00052C6.00035 4.55267 5.55333 5.00079 5.00027 5.00079Z" fill="#066FDE"/>
    <path d="M15.0022 5.00079C14.4491 5.00079 14.0021 4.55267 14.0021 4.00052V1.00008C14.0021 0.448125 14.4491 0 15.0022 0C15.5552 0 16.0022 0.448125 16.0022 1.00008V4.00052C16.0022 4.55267 15.5552 5.00079 15.0022 5.00079Z" fill="#066FDE"/>
    <path d="M8.00123 19.0027H3.00044C1.3462 19.0027 0 17.6565 0 16.0023V6.00088C0 5.44873 0.447026 5.00079 1.00008 5.00079C1.55314 5.00079 2.00035 5.44873 2.00035 6.00088V16.0023C2.00035 16.5535 2.44829 17.0025 3.00044 17.0025H8.00123C8.55429 17.0025 9.00131 17.4505 9.00131 18.0026C9.00131 18.5548 8.55429 19.0027 8.00123 19.0027Z" fill="#066FDE"/>
    <path d="M19.004 9.0015C18.4509 9.0015 18.0039 8.55337 18.0039 8.00141V6.00106C18.0039 5.44892 18.4509 5.00098 19.004 5.00098C19.5571 5.00098 20.0043 5.44892 20.0043 6.00106V8.00141C20.0043 8.55337 19.5571 9.0015 19.004 9.0015Z" fill="#066FDE"/>
    <path d="M22.1001 12.9057C19.5657 10.3713 15.441 10.3713 12.9066 12.9057C10.3723 15.44 10.3723 19.5647 12.9066 22.0991C15.441 24.6334 19.5657 24.6334 22.1001 22.0991C24.6344 19.5647 24.6344 15.44 22.1001 12.9057ZM18.7405 20.1548L17.5033 18.9166L16.2662 20.1537C15.8761 20.5437 15.2419 20.5437 14.8519 20.1537C14.4618 19.7636 14.4618 19.1296 14.8519 18.7395L16.0891 17.5023L14.8519 16.2652C14.4618 15.8751 14.4618 15.241 14.8519 14.8509C15.2419 14.4608 15.8761 14.4608 16.2662 14.8509L17.5033 16.0881L18.7405 14.8509C19.1306 14.4608 19.7646 14.4608 20.1546 14.8509C20.5447 15.241 20.5447 15.8751 20.1546 16.2652L18.9176 17.5023L20.1546 18.7395C20.5447 19.1296 20.5447 19.7636 20.1546 20.1537C19.7646 20.5448 19.1315 20.5448 18.7405 20.1548Z" fill="#066FDE"/>
    </g>
    <defs>
    <clipPath id="clip0_80_7346">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21.4319 3.42545C16.665 3.42545 12.5755 0.218965 12.5326 0.184671C12.3813 0.0650635 12.194 0 12.0011 0C11.8081 0 11.6209 0.0650635 11.4695 0.184671C11.4266 0.218965 7.35424 3.42545 2.57024 3.42545C2.34286 3.42545 2.12479 3.51577 1.964 3.67656C1.80322 3.83734 1.71289 4.05541 1.71289 4.28279V11.9989C1.71289 17.7517 4.0363 20.5724 11.6496 23.9246C11.7601 23.9743 11.8799 24 12.0011 24C12.1222 24 12.242 23.9743 12.3526 23.9246C19.9658 20.5724 22.2892 17.7517 22.2892 11.9989V4.28279C22.2892 4.05541 22.1989 3.83734 22.0381 3.67656C21.8773 3.51577 21.6593 3.42545 21.4319 3.42545ZM12.0011 18.8577C10.6445 18.8577 9.31845 18.4554 8.19053 17.7018C7.06261 16.9481 6.1835 15.8769 5.66438 14.6237C5.14525 13.3704 5.00942 11.9913 5.27407 10.6608C5.53872 9.33037 6.19195 8.10825 7.15117 7.14903C8.11039 6.18981 9.33251 5.53658 10.663 5.27193C11.9935 5.00728 13.3725 5.14311 14.6258 5.66223C15.8791 6.18136 16.9503 7.06047 17.7039 8.18839C18.4576 9.31631 18.8598 10.6424 18.8598 11.9989C18.8598 13.818 18.1372 15.5625 16.851 16.8488C15.5647 18.1351 13.8201 18.8577 12.0011 18.8577Z" fill="#066FDE"/>
    <path d="M13.9646 9.67597L11.1439 12.5052L10.0379 11.3907C9.95799 11.3107 9.86309 11.2473 9.75865 11.2041C9.65421 11.1608 9.54226 11.1385 9.42921 11.1385C9.31617 11.1385 9.20422 11.1608 9.09978 11.2041C8.99534 11.2473 8.90044 11.3107 8.8205 11.3907C8.74056 11.4706 8.67715 11.5655 8.63389 11.6699C8.59063 11.7744 8.56836 11.8863 8.56836 11.9994C8.56836 12.1124 8.59063 12.2244 8.63389 12.3288C8.67715 12.4333 8.74056 12.5282 8.8205 12.6081L10.5352 14.3228C10.6149 14.4031 10.7097 14.4669 10.8142 14.5105C10.9187 14.554 11.0307 14.5764 11.1439 14.5764C11.2571 14.5764 11.3692 14.554 11.4736 14.5105C11.5781 14.4669 11.6729 14.4031 11.7526 14.3228L15.182 10.8934C15.262 10.8135 15.3254 10.7186 15.3686 10.6141C15.4119 10.5097 15.4342 10.3977 15.4342 10.2847C15.4342 10.1716 15.4119 10.0597 15.3686 9.95525C15.3254 9.8508 15.262 9.7559 15.182 9.67597C15.1021 9.59603 15.0072 9.53262 14.9027 9.48936C14.7983 9.44609 14.6863 9.42383 14.5733 9.42383C14.4603 9.42383 14.3483 9.44609 14.2439 9.48936C14.1394 9.53262 14.0445 9.59603 13.9646 9.67597Z" fill="#066FDE"/>
    </svg>`
  }, g = (
    /* html */
    `
  <div class="crs_block variant1">
    <style>${d}</style>
    <h1>Transform your life with a<br><span>Power of Palmistry</span></h1>
    <p>${o.hand}<span><b>Unlimited</b>&nbsp;personalized palm readings</span></p>
    <p>${o.chat}<span><b>Unlimited</b>&nbsp;chats with palmistry experts</span></p>
    <div class="special_offer">
      <span>Special offer</span>
      <div class="bottom_part">
        <p class="total">Total due today:<span></span></p>
        <p class="code">${o.discount}Code HINT24 applied!</p>
        <p class="info"></p>
      </div>
    </div>
    <a href="https://www.reviews.io/company-reviews/store/hint.app" target="_blank">
      <img src="${h}/reviews_checkout.png" alt="reviews" />
    </a>
  </div>
`
  ), m = (
    /* html */
    `
  <div class="payment_labels">
    <p>${o.calendar}No commitment. Cancel anytime.</p>
    <p>${o.shield}30-Day Money-Back Guarantee</p>
  </div>
`
  ), w = (
    /* html */
    `
  <div class="crs_timer">
    <div class="timer_wrapper">
      <p>Your exclusive offer ends in:&nbsp;<span></span></p>
      <div class="timer_line"></div>
    </div>
  </div>
`
  );
  let v = setInterval(function() {
    typeof window.clarity == "function" && (clearInterval(v), window.clarity("set", "exp_hypothesis_3", "variant_2"));
  }, 1e3);
  C({ name: "Checkout Optimization", dev: "YK" });
  class x {
    constructor() {
      this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.data = {}, this.init();
    }
    init() {
      l("span.text-primary.font-bold", () => {
        this.getData();
      }), l(".flex-grow.overflow-auto.pt-4", () => {
        this.render();
      }), this.setTimer();
    }
    getData() {
      const n = i(".items-center+.w-full.flex-col").elements[0].innerHTML;
      this.data = { ...this.data, text: n };
      const t = i(".text-primary.font-bold").elements[0].innerHTML;
      this.data = { ...this.data, price: t };
    }
    render() {
      const n = i(".flex-grow.overflow-auto.pt-4").elements[0], t = i(".sticky.w-full").elements[0];
      n.style.display = "none", n.insertAdjacentHTML("afterend", g), t.insertAdjacentHTML("afterbegin", m), i(".special_offer .total span").elements[0].innerHTML = this.data.price, i(".special_offer .info").elements[0].innerHTML = this.data.text, i(".crs_block").elements[0].insertAdjacentHTML("afterbegin", w);
    }
    setTimer() {
      setInterval(() => {
        const n = JSON.parse(localStorage.getItem("timer"));
        i(".crs_timer .timer_wrapper p span").elements[0].innerHTML = `${n.minutes}:${n.seconds < 10 ? "0" + n.seconds : n.seconds}`, i(".crs_timer .timer_line").elements[0].style.width = `${(n.minutes * 60 + n.seconds) * 100 / 900}%`;
      }, 1e3);
    }
  }
  new x();
})();
//# sourceMappingURL=index.js.map
