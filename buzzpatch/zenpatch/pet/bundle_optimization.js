(function() {
  "use strict";
  const _ = (a, p, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: p,
      event_type: e,
      event_loc: n
    }), console.dir(`Event: ${a} | ${p} | ${e} | ${n}`);
  }, g = ({ name: a, dev: p }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${p})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (a) => document.querySelectorAll(a), t = (a) => document.querySelector(a), w = async (a) => {
    const p = (e) => new Promise((n, r) => {
      const l = e.split(".").pop();
      if (l === "js") {
        if (Array.from(document.scripts).map((u) => u.src.toLowerCase()).includes(e.toLowerCase()))
          return console.log(`Script ${e} allready downloaded!`), n("");
        const i = document.createElement("script");
        i.src = e, i.onload = n, i.onerror = r, document.head.appendChild(i);
      } else if (l === "css") {
        if (Array.from(document.styleSheets).map((u) => {
          var d;
          return (d = u.href) == null ? void 0 : d.toLowerCase();
        }).includes(e.toLowerCase()))
          return console.log(`Style ${e} allready downloaded!`), n("");
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = e, i.onload = n, i.onerror = r, document.head.appendChild(i);
      }
    });
    for (const e of a)
      await p(e), console.log(`Loaded librari ${e}`);
    console.log("All libraries loaded!");
  }, k = (a, p = "variant_1") => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", a, p), console.log("set", a, p));
    }, 1e3);
  }, b = (a, p, e, n, r = "Visibility", l = 600, s = 0.3) => {
    let i, u;
    if (i = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? u = setTimeout(() => {
          _(
            p,
            d[0].target.dataset.visible || n || "",
            r,
            e
          ), i.disconnect();
        }, l) : clearTimeout(u);
      },
      { threshold: [s] }
    ), typeof a == "string") {
      const d = document.querySelector(a);
      d && i.observe(d);
    } else
      i.observe(a);
  };
  function o(a) {
    return new Promise((p) => {
      if (document.querySelector(a))
        return p(document.querySelector(a));
      const e = new MutationObserver(() => {
        document.querySelector(a) && (p(document.querySelector(a)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(a) {
    a = a === void 0 ? {} : a;
    let p, e, n, r, l = (a == null ? void 0 : a.delay) || 50;
    function s() {
      p = null, r = 0;
    }
    return s(), function() {
      return e = window.scrollY, p != null && (r = e - p), p = e, clearTimeout(n), n = setTimeout(s, l), r;
    };
  })();
  const f = "https://conversionratestore.github.io/projects/buzzpatch/zenpatch/pet/img/", h = {
    tooltipIcon: `
<svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
  <path d="M2.52002 10.2953H4.52002V12H2.52002V10.2953ZM0.52002 2.54039C0.52002 2.19499 0.598451 1.8663 0.755314 1.55432C0.912177 1.24234 1.12786 0.974931 1.40237 0.75209C1.67688 0.518107 1.99714 0.334263 2.36316 0.200558C2.72917 0.0668529 3.12133 0 3.53963 0C4.02329 0 4.4612 0.0835661 4.85335 0.250698C5.25858 0.417828 5.59192 0.651811 5.85335 0.952647C5.98407 1.10864 6.08865 1.25348 6.16708 1.38719C6.25858 1.52089 6.33048 1.66574 6.38277 1.82173C6.43505 1.96657 6.46773 2.1337 6.4808 2.32312C6.50695 2.51253 6.52002 2.73538 6.52002 2.99164C6.52002 3.28134 6.51348 3.52646 6.50041 3.72702C6.50041 3.91644 6.48734 4.08357 6.4612 4.22841C6.43505 4.37326 6.40237 4.50139 6.36316 4.61281C6.32394 4.71309 6.27165 4.8078 6.20629 4.89694L4.85335 6.86908C4.76185 7.00279 4.68342 7.14206 4.61806 7.28691C4.5527 7.42061 4.52002 7.56546 4.52002 7.72145V9.0585H2.52002V7.50418C2.52002 7.25905 2.56577 7.02507 2.65727 6.80223C2.74878 6.57939 2.86642 6.36212 3.01022 6.15042L4.26512 4.41226C4.36969 4.26741 4.43505 4.11142 4.4612 3.94429C4.50041 3.77716 4.52002 3.61003 4.52002 3.4429V2.5571C4.52002 2.32312 4.42198 2.12256 4.2259 1.95543C4.0429 1.7883 3.81414 1.70474 3.53963 1.70474C3.30433 1.70474 3.07558 1.77716 2.85335 1.92201C2.63113 2.06685 2.52002 2.27855 2.52002 2.5571V3.52646H0.52002V2.54039Z" fill="white"/>
</svg>
  `,
    starIcon: `
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='15' viewBox='0 0 16 15' fill='none'>
  <path d='M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0Z' fill='#F9BF00'/>
</svg>
  `,
    moneyBackGuaranteeIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path d="M9.76001 16.5C7.72391 16.5 5.87531 15.6834 4.52261 14.3616L3.67211 15.2121C3.61781 15.2664 3.54281 15.3 3.46001 15.3C3.32291 15.3 3.20741 15.2079 3.17171 15.0825L1.97171 10.8825C1.96421 10.8561 1.96001 10.8288 1.96001 10.8C1.96001 10.6341 2.09411 10.5 2.26001 10.5C2.28881 10.5 2.31641 10.5042 2.34251 10.5114L6.54251 11.7114C6.66791 11.7474 6.76001 11.8629 6.76001 12C6.76001 12.0828 6.72671 12.1578 6.67211 12.2121L5.79971 13.0845C6.82571 14.0811 8.22011 14.7 9.76001 14.7C12.9031 14.7 15.46 12.1431 15.46 9C15.46 5.8569 12.9031 3.3 9.76001 3.3C6.61691 3.3 4.06001 5.8569 4.06001 9C4.06001 9.1488 4.07111 9.2952 4.08221 9.4416L2.26211 8.9169C2.30681 4.8195 5.65241 1.5 9.76001 1.5C13.8955 1.5 17.26 4.8645 17.26 9C17.26 13.1355 13.8955 16.5 9.76001 16.5Z" fill="#337C6B"/>
  <path d="M9.76011 9.59998C8.60241 9.59998 7.66011 8.79268 7.66011 7.79997C7.66011 6.98607 8.29371 6.29757 9.16011 6.07587V5.39997H10.3601V6.07587C11.2265 6.29757 11.8601 6.98607 11.8601 7.79997H10.6601C10.6601 7.48047 10.2395 7.19998 9.76011 7.19998C9.28071 7.19998 8.86011 7.48047 8.86011 7.79997C8.86011 8.11947 9.28071 8.39997 9.76011 8.39997C10.9178 8.39997 11.8601 9.20728 11.8601 10.2C11.8601 11.0139 11.2265 11.7024 10.3601 11.9241V12.6H9.16011V11.9241C8.29371 11.7024 7.66011 11.0139 7.66011 10.2H8.86011C8.86011 10.5195 9.28071 10.8 9.76011 10.8C10.2395 10.8 10.6601 10.5195 10.6601 10.2C10.6601 9.88048 10.2395 9.59998 9.76011 9.59998Z" fill="#337C6B"/>
</svg>
  `
  }, c = {
    ver_b: {
      id: "43842554855468",
      img: `${f}zenpatch-pet_bundle_img_11zon.webp`,
      title: "Pet Zen Starter Pack",
      description: "Pet Locket + 3 Packs of Pet Zen Vapor Stickers",
      price: "$10.00",
      imgTooltip: `${f}zenpatch-pet_bundle_tooltip_img_11zon.webp`,
      mainTitleTooltip: "Pet Locket",
      subTitleTooltip: "1 locket for pet patches",
      descriptionTooltip: "This locket is designed specifically for easy and convenient use with NATPAT Pet Stickers. Use in just 3 simple steps: open front window -> insert NATPAT Pet Sticker -> clip window into place & loop onto collar."
    }
  }, y = {
    ver_b: `
  <div class='tooltip_block'>
    <div class='tooltip_wrapper'>
      <div class='img_wrapper'>
       <img src='${c.ver_b.imgTooltip}' alt='${c.ver_b.mainTitleTooltip}' />
      </div>
      <div class='tooltip_info'>
        <div>
          <h2>${c.ver_b.mainTitleTooltip}</h2>
         <span>${h.starIcon}${h.starIcon}${h.starIcon}${h.starIcon}${h.starIcon}</span>
        </div>
        <p>${c.ver_b.subTitleTooltip}</p>
      </div>
    </div>
    <p>${c.ver_b.descriptionTooltip}</p>
  </div>
  `
  }, v = (
    /* HTML */
    '<h2 class="stock_up_title">Stock up & Save!</h2>'
  ), C = (a) => (
    /* HTML */
    `
    <div class="new_bundle_pack">
      <h3 class="new_bundle_main_title">Bundle & save</h3>
      <div class="packs">
        <span class="bundle_off">60 % OFF</span>
        <input
          type="radio"
          name="price"
          id="bundle"
          value="${c.ver_b.id}"
          data-tick-id="${c.ver_b.id}"
        />
        <label for="bundle">
          <div class="new_bundle_wrapper" id="${c.ver_b.id}">
            <div class="img_wrapper">
              <img src="${c.ver_b.img}" alt="${c.ver_b.title}" />
            </div>
            <div class="info_wrapper">
              <h2 class="new_bundle_title">${c.ver_b.title}</h2>
              <p class="new_bundle_description">${c.ver_b.description}</p>
              <span class="new_bundle_price">${a} Each item</span>
            </div>
          </div>
        </label>
        ${z}
      </div>
    </div>
  `
  ), z = (
    /* HTML */
    `
  <span class="new_bundle_tooltip" data-tooltip data-title="${y.ver_b}">${h.tooltipIcon}</span>
`
  ), L = (
    /* HTML */
    `
  <div class="guarantee_block">
    <ul>
      <li>
        ${h.moneyBackGuaranteeIcon}
        <span>Money-Back Guarantee</span>
      </li>
      <li>
        <img src="${f}secure_checkout_icon.svg" alt="secure checkout icon" />
        <span>Secure Checkout</span>
      </li>
    </ul>
  </div>
`
  ), T = `@media (min-width: 992px) {
  .lp-tr--purchase .container {
    max-width: 1280px;
  }
}
@media (min-width: 768px) {
  .lp-tr--purchase .container {
    max-width: 1280px;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .container {
    background: #f7f6f4;
    padding: 12px 0 0;
  }
  .lp-tr--purchase .container > .row {
    margin: 0 !important;
  }
}
.lp-tr--purchase h2.lp-tr--section-big-title {
  color: #202020;
  font-family: "Inter", sans-serif !important;
  font-size: 60.742px;
  font-weight: 400;
  line-height: 110px;
  text-transform: uppercase;
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .lp-tr--purchase h2.lp-tr--section-big-title {
    display: none !important;
  }
}
.lp-tr--purchase h3.purchase__title,
.lp-tr--purchase .purchase__text,
.lp-tr--purchase label .lp-tr--pack-price,
.lp-tr--purchase .purchase__risk-free,
.lp-tr--purchase .day-30-mobile {
  display: none !important;
}
.lp-tr--purchase .content-container {
  padding: 60px 50px !important;
}
@media (max-width: 768px) {
  .lp-tr--purchase .content-container {
    padding: 0 !important;
    margin-top: 33px !important;
    background: none !important;
  }
}
.lp-tr--purchase .lp-tr--gray-bg {
  margin: 0;
}
@media (max-width: 768px) {
  .lp-tr--purchase .lp-tr--gray-bg {
    background: none;
  }
  .lp-tr--purchase .lp-tr--gray-bg .lp-tr--desktop {
    padding: 0 22px !important;
  }
  .lp-tr--purchase .lp-tr--gray-bg .lp-tr--purchase-cover {
    max-width: 100%;
  }
}
.lp-tr--purchase .lp-tr--gray-bg > div:nth-child(1) {
  padding: 0;
}
@media (max-width: 768px) {
  .lp-tr--purchase .form {
    padding: 0 30px;
  }
}
.lp-tr--purchase .form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 24px;
  margin-bottom: 16px !important;
}
@media (max-width: 993px) {
  .lp-tr--purchase .form-group {
    display: flex !important;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .form-group {
    gap: 10px 14px;
    -moz-column-gap: 14px !important;
         column-gap: 14px !important;
    margin-bottom: 12px !important;
  }
}
.lp-tr--purchase .form-group .packs {
  width: 100%;
  margin: 0;
  max-width: calc((100% - 24px) / 2);
}
@media (max-width: 768px) {
  .lp-tr--purchase .form-group .packs {
    max-width: calc((100% - 14px) / 2);
  }
}
.lp-tr--purchase .form-group .packs label {
  margin: 0;
  height: 100%;
  padding: 16px !important;
  color: #212529 !important;
  text-align: center !important;
  font-family: "DIN Condensed" !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  line-height: 22px !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  border-radius: 5px;
  border: 2px solid #337c6b;
}
@media (max-width: 993px) {
  .lp-tr--purchase .form-group .packs label {
    height: 100% !important;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .form-group .packs label {
    background: #fff;
  }
}
.lp-tr--purchase .form-group .packs label span:not(.lp-tr--pack-price) {
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 6.8px;
  display: block;
}
@media (max-width: 768px) {
  .lp-tr--purchase .form-group .packs label span:not(.lp-tr--pack-price) {
    margin: 0;
  }
}
.lp-tr--purchase .form-group .packs label[for=pack1] span.lp-tr--pack-price {
  display: block !important;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 6.8px;
}
@media (max-width: 768px) {
  .lp-tr--purchase .form-group .packs label[for=pack1] span.lp-tr--pack-price {
    margin: 0;
  }
}
.lp-tr--purchase .form-group .packs label[for=pack3] {
  position: relative;
  border-radius: 0px 5px 5px 5px;
}
.lp-tr--purchase .form-group .packs label[for=pack3]::before {
  content: "Top Seller";
  position: absolute;
  top: -21px;
  left: -1.5px;
  max-width: 69px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5px 10px 0;
  color: #fff;
  font-family: "DIN Condensed" !important;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 2px 2px 0px 0px;
  background: #000;
}
.lp-tr--purchase .new_bundle_pack .new_bundle_main_title {
  color: #000;
  font-family: "DIN Condensed";
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
}
.lp-tr--purchase .new_bundle_pack .packs {
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0;
}
.lp-tr--purchase .new_bundle_pack .bundle_off {
  position: absolute;
  right: 0;
  top: -19px;
  display: flex;
  padding: 1.5px 8.7px 0;
  justify-content: center;
  align-items: center;
  border-radius: 2px 2px 0px 0px;
  background: #000;
  color: #fff;
  font-family: "DIN Condensed";
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.lp-tr--purchase .new_bundle_pack label {
  padding: 0 !important;
  margin: 0;
  border-radius: 4px 0px 4px 4px !important;
  background: #fff;
}
.lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 12px;
  padding: 4px;
}
.lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .img_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90px;
  max-height: 90px;
  width: 100%;
  height: 100%;
  min-height: 90px;
  border-radius: 2px;
  background: #fff;
  padding: 5px;
}
.lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .img_wrapper img {
  width: 100%;
  height: 100%;
}
.lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .new_bundle_title {
  color: #212529;
  font-family: "DIN Condensed" !important;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: left;
  margin: 0 0 2px;
}
@media (max-width: 768px) {
  .lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .new_bundle_title {
    font-family: "Roboto", sans-serif !important;
    font-size: 14px;
    margin-bottom: 1px;
    letter-spacing: initial;
    text-transform: initial;
  }
}
.lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .new_bundle_description {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 0 7px;
  text-transform: initial;
  text-align: left;
  letter-spacing: normal;
}
@media (max-width: 993px) {
  .lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .new_bundle_description {
    font-size: 11px;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .new_bundle_description {
    font-size: 14px;
    max-width: 197px;
    margin-bottom: 5px;
  }
}
@media (max-width: 345px) {
  .lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .new_bundle_description {
    font-size: 13px;
  }
}
.lp-tr--purchase .new_bundle_pack label .new_bundle_wrapper .new_bundle_price {
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 18px !important;
  margin: 0;
  text-transform: initial;
  letter-spacing: initial;
  color: #212529;
  text-align: left;
}
.lp-tr--purchase .new_bundle_pack input[type=radio]:checked + label .new_bundle_title,
.lp-tr--purchase .new_bundle_pack input[type=radio]:checked + label .new_bundle_description,
.lp-tr--purchase .new_bundle_pack input[type=radio]:checked + label .new_bundle_price {
  color: #fff;
}
.lp-tr--purchase .new_bundle_tooltip {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  border-radius: 40px;
  background: #337c6b;
  z-index: 111;
  cursor: pointer;
}
@media (max-width: 768px) {
  .lp-tr--purchase .new_bundle_tooltip {
    bottom: 9px;
    right: 20px;
  }
}
.lp-tr--purchase [data-tippy-root] {
  z-index: 100 !important;
}
.lp-tr--purchase [data-tippy-root] .tippy-box {
  background-color: #fff;
  max-width: 330px !important;
  left: 19px !important;
  filter: drop-shadow(0px 12px 8px rgba(0, 0, 0, 0.02)) drop-shadow(0px 2px 2px rgba(28, 5, 77, 0.12));
}
@media (max-width: 361px) {
  .lp-tr--purchase [data-tippy-root] .tippy-box {
    left: 12px !important;
  }
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tippy-content {
  padding: 17px 16px 14px;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tippy-arrow {
  display: block !important;
  color: #fff;
  left: -18px !important;
}
@media (max-width: 361px) {
  .lp-tr--purchase [data-tippy-root] .tippy-box .tippy-arrow {
    left: -12px !important;
  }
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper {
  display: flex;
  gap: 14px;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .img_wrapper {
  max-width: 45px;
  max-height: 70px;
  min-height: 70px;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .img_wrapper img {
  width: 100%;
  height: 100%;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info > div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 9px;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info > div span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info > div span svg {
  height: 16px;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info h2 {
  color: #1f4fc9;
  font-family: "Roboto", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin: 0;
  text-transform: initial;
  letter-spacing: initial;
  text-align: left;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info p {
  color: #1f4fc9;
  font-family: "Barlow", sans-serif !important;
  font-size: 14px !important;
  font-weight: 600;
  line-height: 18px !important;
  margin: 6px 0 0;
  text-transform: uppercase;
  letter-spacing: initial;
  text-align: left;
}
.lp-tr--purchase [data-tippy-root] .tippy-box .tooltip_block > p {
  color: #212529;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 22px !important;
  margin: 14px 0 0;
  letter-spacing: initial;
  text-transform: initial;
  text-align: left;
}
.lp-tr--purchase input[type=radio]:checked + label + .new_bundle_tooltip {
  background: #fff;
}
.lp-tr--purchase input[type=radio]:checked + label + .new_bundle_tooltip svg path {
  fill: #337c6b;
}
.lp-tr--purchase input[type=radio]:checked + label {
  color: #fff !important;
  background: #337c6b;
}
.lp-tr--purchase input[type=radio]:checked + label span:not(.lp-tr--pack-price) {
  font-weight: 500;
}
.lp-tr--purchase .purchase__regular-price {
  display: block !important;
  color: #6f6f6f;
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
.lp-tr--purchase .purchase__regular-price.is_hidden {
  display: none !important;
}
@media (max-width: 768px) {
  .lp-tr--purchase .purchase__regular-price {
    background: #fff;
  }
}
.lp-tr--purchase .purchase__pet-locket {
  gap: 0;
  margin: 16px auto 30px;
  border-radius: 4px;
  border: 2px solid #f0f0f4;
  background: #fff;
  padding: 8px 27px;
  cursor: pointer;
}
@media (max-width: 995px) {
  .lp-tr--purchase .purchase__pet-locket {
    margin: 16px auto 20px;
  }
}
.lp-tr--purchase .purchase__pet-locket.is_selected {
  border: 2px solid #337c6b;
}
.lp-tr--purchase .purchase__pet-locket label:not(.custom-label) {
  color: #212529;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  margin-left: 5px;
}
@media (max-width: 995px) {
  .lp-tr--purchase .purchase__pet-locket label:not(.custom-label) {
    font-size: 12px;
  }
}
.lp-tr--purchase .overall-price.lp-tr--mobile {
  color: #515151;
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  font-size: 40px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0.6px;
  margin-bottom: 12px;
}
.lp-tr--purchase .overall-price.lp-tr--mobile.is_hidden {
  display: none !important;
}
@media (max-width: 1095px) {
  .lp-tr--purchase .overall-price.lp-tr--mobile {
    font-size: 38px;
  }
}
@media (max-width: 995px) {
  .lp-tr--purchase .overall-price.lp-tr--mobile {
    font-size: 28px;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .overall-price.lp-tr--mobile {
    font-size: 24px;
    letter-spacing: initial;
    font-weight: 700;
    line-height: 32px;
    background: #fff;
    margin: 0;
    padding: 8px 22px 2px;
  }
}
.lp-tr--purchase .lp-tr--btn {
  display: none !important;
  margin: 16px 0;
}
@media (max-width: 993px) {
  .lp-tr--purchase .lp-tr--btn {
    margin: 16px 0 !important;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .lp-tr--btn {
    background: #fff;
    margin: 0 !important;
    padding: 12px 22px;
  }
}
.lp-tr--purchase .lp-tr--btn a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  max-width: 345px;
  margin: 0 auto;
  font-family: "DIN Condensed";
  font-size: 22px !important;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 2px 0 0 !important;
  display: none !important;
}
@media (max-width: 768px) {
  .lp-tr--purchase .lp-tr--btn a {
    height: 54px;
    font-size: 20px !important;
    max-width: 100%;
  }
}
.lp-tr--purchase .stock_up_title {
  color: #212529;
  text-align: center;
  font-family: "DINEngschrift LT" !important;
  font-size: 42px;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 0.84px;
  text-transform: uppercase;
  margin-bottom: 50px;
}
@media (max-width: 768px) {
  .lp-tr--purchase .stock_up_title {
    font-size: 36px;
    line-height: 110%;
    letter-spacing: 0.72px;
    margin-bottom: 8px;
  }
}
.lp-tr--purchase .new_pet_locket_wrapper {
  padding: 12px 30px;
}
.lp-tr--purchase .new_pet_locket_wrapper .purchase__pet-locket {
  margin: 0;
  padding: 8px 6px 8px 12px;
}
.lp-tr--purchase .new_pet_locket_wrapper .purchase__pet-locket label:not(.custom-label) {
  font-size: 14px;
  text-align: left;
}
@media (max-width: 361px) {
  .lp-tr--purchase .new_pet_locket_wrapper .purchase__pet-locket label:not(.custom-label) {
    font-size: 13px;
  }
}
@media (max-width: 345px) {
  .lp-tr--purchase .new_pet_locket_wrapper .purchase__pet-locket label:not(.custom-label) {
    font-size: 12px;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .guarantee_block {
    padding: 0 22px;
    background: #fff;
  }
}
.lp-tr--purchase .guarantee_block ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
@media (max-width: 768px) {
  .lp-tr--purchase .guarantee_block ul {
    gap: 10px;
  }
}
.lp-tr--purchase .guarantee_block ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
}
.lp-tr--purchase .guarantee_block ul li svg {
  height: 18px;
  width: 18px;
  -o-object-fit: cover;
     object-fit: cover;
}
.lp-tr--purchase .guarantee_block ul li span {
  color: #515151;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}
@media (max-width: 995px) {
  .lp-tr--purchase .guarantee_block ul li span {
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .guarantee_block ul li span {
    font-size: 14px;
  }
}
@media (max-width: 361px) {
  .lp-tr--purchase .guarantee_block ul li span {
    font-size: 12px;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .new_bundle_price_wrapper {
    background: #fff;
    padding: 8px 30px 0;
  }
}
.lp-tr--purchase .new_bundle_price_wrapper .new_bundle_price_total {
  color: #515151;
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  font-size: 40px;
  font-weight: 900;
  line-height: 47px;
  letter-spacing: 0.6px;
  margin-bottom: 12px;
}
@media (max-width: 1095px) {
  .lp-tr--purchase .new_bundle_price_wrapper .new_bundle_price_total {
    font-size: 38px;
  }
}
@media (max-width: 995px) {
  .lp-tr--purchase .new_bundle_price_wrapper .new_bundle_price_total {
    font-size: 28px;
  }
}
@media (max-width: 768px) {
  .lp-tr--purchase .new_bundle_price_wrapper .new_bundle_price_total {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 2px;
  }
}
.lp-tr--purchase .new_bundle_price_wrapper .new_bundle_reg_price_total {
  color: #6f6f6f;
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

@media (max-width: 768px) {
  body.tooltip_open {
    position: relative;
    overflow: hidden;
  }
  body.tooltip_open::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    display: block;
    z-index: 11;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    -webkit-backdrop-filter: blur(2px);
            backdrop-filter: blur(2px);
  }
  body.tooltip_open .new_bundle_tooltip {
    background: #fff;
  }
  body.tooltip_open .new_bundle_tooltip svg path {
    fill: #337c6b;
  }
}

.purchase__pet-locket input[type=checkbox]:checked + .custom-label:before {
  background-color: #fff !important;
  border-color: #337c6b !important;
}

.purchase__pet-locket input[type=checkbox]:checked + .custom-label:after {
  border: solid #337c6b !important;
  border-width: 0 3px 3px 0 !important;
}

.new_proceed_to_checkout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  max-width: 345px;
  margin: 16px auto;
  border-radius: 50px;
  background: #337c6b;
  font-family: "DIN Condensed";
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 2px 0 0;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 768px) {
  .new_proceed_to_checkout {
    height: 54px;
    font-size: 20px;
    max-width: 100%;
  }
}/*# sourceMappingURL=main.css.map */`, P = window.innerWidth < 768 ? "mobile" : "desktop";
  class S {
    constructor(p) {
      this.device = p, this.idValue = "", this.init();
    }
    init() {
      g({ name: 'Starter Pack" Bundle and UX Improvements on Shopping block', dev: "SKh" }), k("exp_zen_introduce", "variant_1"), t(".crs_font") || document.head.insertAdjacentHTML(
        "afterbegin",
        'link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${T}</style>`), this.renderNewTitle(), this.changePurchaseBlock(), this.clickPetLocketInputHandler(), this.renderGuaranteeBlock(), this.renderNewProceedToCheckoutBtn(), this.renderNewBundle(), this.clickBundleHandler(), this.clickProceedToCheckoutBtnHandler(), this.visibleHandler();
    }
    renderNewTitle() {
      o("h3.purchase__title").then((p) => {
        let e = "h3.purchase__title";
        this.device === "mobile" && (e = ".lp-tr--purchase h2.lp-tr--section-big-title"), t(".stock_up_title") || t(e).insertAdjacentHTML("afterend", v);
      });
    }
    changePurchaseBlock() {
      o(".lp-tr--purchase .form-group .packs label span:not(.lp-tr--pack-price)").then((p) => {
        m(".lp-tr--purchase .form-group .packs label span:not(.lp-tr--pack-price)").forEach((n) => {
          const l = n.textContent.match(/\(([^)]+)\/each\)/i);
          if (l) {
            const s = l[1];
            n.textContent = `${s} Each`;
          }
        });
      }), o(".lp-tr--purchase .form-group .packs label[for=pack1] span.lp-tr--pack-price").then((p) => {
        const e = t(".lp-tr--purchase .form-group .packs label[for=pack1] span.lp-tr--pack-price");
        e && (e.textContent = `${e.textContent} Each`);
      }), o(".lp-tr--purchase .lp-tr--gray-bg > .lp-tr--desktop img").then((p) => {
        m(".lp-tr--purchase .lp-tr--gray-bg > .lp-tr--desktop img").forEach((n) => {
          let r = `${f}zenpatch-pet_img_11zon.webp`;
          this.device === "mobile" && (r = `${f}zenpatch-pet_img_mob.webp`), n && n.src !== r && (n.src = r);
        });
      }), o(".lp-tr--purchase .purchase__pet-locket").then((p) => {
        const e = t(".lp-tr--purchase .purchase__pet-locket"), n = t("#lptrPurchase .form"), r = t(".lp-tr--purchase .purchase__pet-locket label:not(.custom-label)");
        this.device === "desktop" && !t("#lptrPurchase .form + .purchase__pet-locket") && n && t("#lptrPurchase .form").insertAdjacentElement("afterend", e), this.device === "mobile" && (t("#lptrPurchase .new_pet_locket_wrapper") || t("#lptrPurchase .form").insertAdjacentHTML("afterend", '<div class="new_pet_locket_wrapper"></div>'), o(".lp-tr--purchase .new_pet_locket_wrapper").then((l) => {
          !t("#lptrPurchase .new_pet_locket_wrapper .purchase__pet-locket") && n && t("#lptrPurchase .new_pet_locket_wrapper").insertAdjacentElement("beforeend", e);
        })), r.textContent.includes("separately") || (r.textContent = `Add a Pet Locket separately for ${r.textContent.split("for")[1]}`);
      });
    }
    clickPetLocketInputHandler() {
      o(".purchase__pet-locket").then((p) => {
        const e = t(".purchase__pet-locket"), n = t("#petlocket");
        n && (e.addEventListener("click", (r) => {
          r.target.getAttribute("data-test") || r.target.classList.contains("purchase__pet-locket") && (n == null || n.click(), e.classList.toggle("is_checked")), r.target.setAttribute("data-test", "1"), setTimeout(() => {
            r.target.getAttribute("data-test") && r.target.removeAttribute("data-test");
          }, 400);
        }), n.addEventListener("change", () => {
          n.checked ? e.classList.add("is_selected") : e.classList.remove("is_selected");
        }));
      });
    }
    renderGuaranteeBlock() {
      o(".lp-tr--purchase .lp-tr--btn").then((p) => {
        t(".guarantee_block") || t(".lp-tr--purchase .lp-tr--btn").insertAdjacentHTML("afterend", L);
      });
    }
    renderNewProceedToCheckoutBtn() {
      o(".guarantee_block").then((p) => {
        t(".new_proceed_to_checkout") || t(".guarantee_block").insertAdjacentHTML(
          "beforebegin",
          '<div class="new_proceed_to_checkout">Get pet zen now</div>'
        );
      });
    }
    renderNewBundle() {
      o("#lptrPurchase .form .form-group").then((p) => {
        var n;
        const e = ((n = t(".pet-zenp-starter-pack span")) == null ? void 0 : n.getAttribute("data-each-price")) ?? "";
        t(".new_bundle_wrapper") || t("#lptrPurchase .form .form-group").insertAdjacentHTML("afterend", C(e)), this.initTooltip(), this.initCheckedBundle();
      });
    }
    initCheckedBundle() {
      o(".new_bundle_pack").then((p) => {
        localStorage.getItem("petZenStarterPack") && (t("#bundle").checked = !0, t(".lp-tr--purchase .overall-price.lp-tr--mobile").classList.add("is_hidden"), t(".lp-tr--purchase .purchase__regular-price").classList.add("is_hidden"), t(".new_bundle_price_wrapper") || t(".lp-tr--purchase .overall-price.lp-tr--mobile").insertAdjacentHTML(
          "afterend",
          this.newPricePetZenStarterPackHtml("43842554855468")
        ), localStorage.removeItem("petZenStarterPack"));
      });
    }
    clickBundleHandler() {
      o(".new_bundle_pack").then((p) => {
        const e = "43842554855468";
        m(".lp-tr--purchase input[type=radio] + label").forEach((n) => {
          n.addEventListener("click", (r) => {
            var l;
            n.getAttribute("for") === "pack3" || n.getAttribute("for") === "pack2" || n.getAttribute("for") === "pack1" || n.getAttribute("for") === "pack4" ? (t(".lp-tr--purchase .overall-price.lp-tr--mobile").classList.contains("is_hidden") && t(".lp-tr--purchase .overall-price.lp-tr--mobile").classList.remove("is_hidden"), t(".lp-tr--purchase .purchase__regular-price").classList.contains("is_hidden") && t(".lp-tr--purchase .purchase__regular-price").classList.remove("is_hidden"), (l = t(".new_bundle_price_wrapper")) == null || l.remove()) : (_("exp_zen_introduce_click_01", "Pet Zen Starter Pack", "Click", "Bundle & save"), t(".lp-tr--purchase .overall-price.lp-tr--mobile").classList.add("is_hidden"), t(".lp-tr--purchase .purchase__regular-price").classList.add("is_hidden"), t(".new_bundle_price_wrapper") || t(".lp-tr--purchase .overall-price.lp-tr--mobile").insertAdjacentHTML(
              "afterend",
              this.newPricePetZenStarterPackHtml(e)
            ));
          });
        });
      });
    }
    newPricePetZenStarterPackHtml(p) {
      const e = m(".pet-zenp-starter-pack span");
      let n = "";
      return e ? e == null || e.forEach((r) => {
        r.getAttribute("data-variant-id") === p && (n = /* HTML */
        `
            <div class="new_bundle_price_wrapper">
              <div class="new_bundle_price_total">
                <span class="new_price">${r.getAttribute("data-price")}</span>
                <span class="new_price_off">(${r.getAttribute("data-price-off")}% OFF)</span>
              </div>
              <div class="new_bundle_reg_price_total">
                Reg. Price: <span>${r.getAttribute("data-price-reg")}</span> (Save
                <span>${r.getAttribute("data-price-save")}</span>)
              </div>
            </div>
          `);
      }) : n = "", n;
    }
    clickProceedToCheckoutBtnHandler() {
      o(".new_bundle_pack").then((p) => {
        o(".new_proceed_to_checkout").then((e) => {
          t(".new_proceed_to_checkout").addEventListener("click", (n) => {
            var r;
            _("exp_zen_get_pet_zen_now_click_01", "Get Pet Zen Now", "Click", "Bundle & save"), this.idValue = (r = t(".lp-tr--purchase input[type=radio]:checked+label")) == null ? void 0 : r.previousElementSibling.getAttribute(
              "data-tick-id"
            ), this.idValue === "43842554855468" && localStorage.setItem("petZenStarterPack", "yes"), t("#petlocket:checked") ? this.addToCartHandler(+this.idValue, !0) : this.addToCartHandler(+this.idValue);
          });
        });
      });
    }
    async addToCartHandler(p, e = !1) {
      const n = "/cart/clear.js", r = "/cart/add.js";
      try {
        if (!(await fetch(n, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        })).ok)
          throw new Error("Failed to clear the cart");
        console.log("Cart cleared successfully");
        const i = [{ id: p, quantity: 1 }];
        e && i.push({ id: 43558182027308, quantity: 1 });
        const d = await fetch(r, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ items: i })
        }).then((x) => x.json()).then((x) => {
          console.log("Items added to cart", p, e, x), window.location.href = "/checkout";
        });
      } catch (s) {
        console.error("Error in addToCartHandler:", s), console.log("There was an error adding items to the cart. Please try again.");
      }
    }
    initTooltip() {
      w([
        "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js"
      ]).then(async () => {
        let p = setInterval(() => {
          typeof tippy == "function" && t("[data-tooltip]") && (clearInterval(p), m("[data-tooltip]").forEach((e) => {
            tippy(e, {
              content: e.getAttribute("data-title"),
              trigger: "click",
              allowHTML: !0,
              arrow: !0,
              arrowType: "round",
              appendTo: function() {
                return e.closest(".new_bundle_pack");
              },
              placement: "top-end",
              interactive: !0,
              onShow(n) {
              },
              onTrigger(n) {
                t("body").classList.add("tooltip_open"), _("exp_zen_introduce_click_02", "Pet Zen Starter Pack", "Click", "Bundle & save");
              },
              onHide(n) {
                setTimeout(() => {
                  t("body").classList.remove("tooltip_open");
                }, 200);
              }
            });
          }));
        }, 100);
      });
    }
    visibleHandler() {
      o(".new_bundle_pack").then((p) => {
        b(
          ".new_bundle_pack",
          "exp_zen_introduce_element_01",
          "Bundle & save",
          "Pet Zen Starter Pack",
          "View"
        );
      }), o(".guarantee_block").then((p) => {
        b(".guarantee_block", "exp_zen_introduce_element_02", "Bundle & save", "Guarantee", "View");
      });
    }
  }
  window.location.pathname.match("pages") && new S(P);
})();
//# sourceMappingURL=index.js.map
