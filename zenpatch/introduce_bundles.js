(function() {
  "use strict";
  const p = (i, t, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: t,
      event_type: n,
      event_loc: o
    }), console.log(`Event: ${i} | ${t} | ${n} | ${o}`);
  }, w = ({ name: i, dev: t }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, l = (i) => document.querySelectorAll(i), e = (i) => document.querySelector(i), y = async (i) => {
    const t = (n) => new Promise((o, r) => {
      const s = n.split(".").pop();
      if (s === "js") {
        if (Array.from(document.scripts).map((c) => c.src.toLowerCase()).includes(n.toLowerCase()))
          return console.log(`Script ${n} allready downloaded!`), o("");
        const a = document.createElement("script");
        a.src = n, a.onload = o, a.onerror = r, document.head.appendChild(a);
      } else if (s === "css") {
        if (Array.from(document.styleSheets).map((c) => {
          var u;
          return (u = c.href) == null ? void 0 : u.toLowerCase();
        }).includes(n.toLowerCase()))
          return console.log(`Style ${n} allready downloaded!`), o("");
        const a = document.createElement("link");
        a.rel = "stylesheet", a.href = n, a.onload = o, a.onerror = r, document.head.appendChild(a);
      }
    });
    for (const n of i)
      await t(n), console.log(`Loaded librari ${n}`);
    console.log("All libraries loaded!");
  }, v = (i) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, m = (i, t, n, o, r = 3e3, s = 0.5) => {
    let h, a;
    if (h = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? a = setTimeout(() => {
          p(
            t,
            c[0].target.dataset.visible || o || "",
            "Visibility",
            n
          ), h.disconnect();
        }, r) : clearTimeout(a);
      },
      { threshold: [s] }
    ), typeof i == "string") {
      const c = document.querySelector(i);
      c && h.observe(c);
    } else
      h.observe(i);
  };
  function d(i) {
    return new Promise((t) => {
      if (document.querySelector(i))
        return t(document.querySelector(i));
      const n = new MutationObserver(() => {
        document.querySelector(i) && (t(document.querySelector(i)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const _ = `html.is_open {
  display: block;
  overflow: hidden;
}

.info_subscription {
  margin: 8px 0 12px;
  max-width: 300px;
}
.info_subscription p {
  color: #0c0b0b;
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: normal;
}

.new_checkout_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 60px;
  background: #2a7b72;
  color: #fefefe;
  font-family: "DINEngschrift LT", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
}
.new_checkout_btn:hover {
  background-color: #0c0b0b;
  color: #515151;
  text-decoration: unset;
}
.new_checkout_btn:active {
  background-color: #0c0b0b;
  color: #fff;
  text-decoration: unset;
}

body #cons .magicpatch-packs > ul {
  gap: 4px !important;
}

li.list-packs {
  border-radius: 6px;
  border: 1px solid #eceef0;
  background: #fff !important;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.1), 0px 12px 32px 0px rgba(0, 0, 0, 0.05);
}
li.list-packs.active-slide {
  outline: unset;
  border: 2px solid #2a7b72;
  background: #ecf2f1;
  background-color: #ecf2f1 !important;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.1), 0px 12px 32px 0px rgba(0, 0, 0, 0.05);
}
li.list-packs .sticker-image {
  border-radius: 3px;
  border: 1px solid #eceef0;
  background: #fff;
  padding: 0;
  max-width: 64px !important;
  max-height: 64px;
}
li.list-packs .sticker-image img {
  max-height: 64px;
}
li.list-packs .stickers-prices {
  gap: 8px;
}
li.list-packs p.pcs {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  line-height: 130% !important;
  margin: 4px 0;
  width: -moz-max-content;
  width: max-content;
}
li.list-packs .before-after-prices {
  gap: 4px;
}
li.list-packs p.strikethrough {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif !important;
  font-size: 12px !important;
  line-height: 128% !important;
}
li.list-packs p.after-price {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  line-height: 130% !important;
}
li.list-packs.list-packs-bundle {
  position: relative;
}
li.list-packs.list-packs-bundle [data-tippy-root] {
  right: -5px !important;
  left: unset !important;
  z-index: 6 !important;
}
li.list-packs.list-packs-bundle .tippy-content {
  padding: 16px;
}
li.list-packs.list-packs-bundle .tippy-box {
  background-color: #fff;
  filter: drop-shadow(0px 12px 32px rgba(0, 0, 0, 0.1));
  max-width: 325px !important;
  border-radius: 8px;
}
li.list-packs.list-packs-bundle .tippy-box[data-placement^=top] > .tippy-arrow {
  border-top-color: #fff;
  left: unset !important;
}
li.list-packs.list-packs-bundle .tippy-box[data-placement^=top] > .tippy-arrow::before {
  border-top-color: white;
}
li.list-packs.list-packs-bundle .tippy-box[data-placement^=bottom] > .tippy-arrow {
  border-bottom-color: #fff;
  left: initial;
}
li.list-packs.list-packs-bundle .tippy-box[data-placement^=bottom] > .tippy-arrow::before {
  border-bottom-color: white;
}
li.list-packs.list-packs-bundle .tippy-arrow {
  display: block;
}
li.list-packs.list-packs-bundle .tippy-popper {
  max-width: 100%;
  /*
  top: 12px !important;
  */
  left: 5px !important;
  z-index: 3 !important;
}
li.list-packs.list-packs-bundle p.pack-name {
  color: #2a7b72;
  font-family: "DINEngschrift LT", sans-serif;
  font-size: 20px !important;
  line-height: 110% !important;
  letter-spacing: 0.4px;
  width: -moz-max-content;
  width: max-content;
}
li.list-packs.list-packs-bundle .tooltip_zone {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  width: 45px;
  height: 45px;
  z-index: 2;
}
li.list-packs.list-packs-bundle .tooltip_zone .tooltip_bgr {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 40px;
  background: #0091d7;
}

.tooltip_block .tooltip_info {
  display: flex;
  gap: 14px;
}
.tooltip_block .tooltip_info img {
  width: 100%;
  height: 100%;
  max-width: 80px !important;
  max-height: 80px !important;
  border-radius: 4px;
  border: 1px solid #eee;
  background: #fff;
}
.tooltip_block .tooltip_info .main_title_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 9px;
}
.tooltip_block .tooltip_info h2 {
  color: #222;
  font-family: "Roboto", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-transform: initial;
  margin: 0;
}
.tooltip_block .tooltip_info .stars_wrapper {
  display: flex;
}
.tooltip_block .tooltip_info .stars_wrapper svg {
  width: 16px;
  height: 16px;
}
.tooltip_block .tooltip_info h3 {
  color: #515151;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  line-height: 20px !important;
  font-weight: 400;
  text-transform: initial;
  margin: 4px 0;
}
.tooltip_block .tooltip_info p {
  color: #0c0b0b;
  font-family: "Barlow";
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 18px !important;
  letter-spacing: normal;
  text-transform: uppercase;
}
.tooltip_block .tooltip_txt {
  color: #515151;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  line-height: 20px !important;
  margin-top: 14px;
  letter-spacing: normal;
}

#cons {
  padding: 0 !important;
  background-color: #fcfcfa !important;
  display: flex;
  flex-direction: column;
}
#cons #slideInCartHeader {
  padding: 16px 16px 4px 16px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 100%;
  background: #f9f9f7;
  z-index: 1;
}
#cons #slideInCartHeader .title-logo {
  margin: 0 !important;
}
#cons #slideInCartHeader .title-logo .slide-logo {
  color: #212529;
  font-family: "DINEngschrift LT", sans-serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 0.52px;
  text-transform: uppercase;
}
#cons #slideInCartScroll {
  position: relative;
  max-width: 100%;
  padding: 61px 16px 32px;
  overflow: auto;
}
#cons #slideInCartScroll::-webkit-scrollbar {
  display: none;
}
#cons #slideInCartScroll .new_scroll_bar {
  position: absolute;
  top: 60px;
  right: 4px;
  background-color: #f1f1f1;
  display: block;
  width: 6px;
  height: 85%;
  border-radius: 10px;
}
#cons #slideInCartScroll .new_thumb {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  width: 6px;
  border-radius: 10px;
  transition: top 0.6s ease-out;
}
#cons #slideInCartScroll.is_checked {
  overflow-y: auto;
}
#cons #slideInCartScroll .close-btn {
  max-height: 24px;
}
#cons #slideInCartScroll.tooltip_open {
  z-index: 1;
}
#cons #slideInCartFooter {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  background: #fff;
  box-shadow: 12px 0px 32px 0px rgba(0, 0, 0, 0.08);
  padding: 16px;
  z-index: 3;
  margin: auto 0 0;
}
#cons #slideInCartFooter .view-prices {
  margin: 0 !important;
}

body #purchase .js-heading > h2 {
  color: #0c0b0b;
  font-family: "DINEngschrift LT", sans-serif;
  font-size: 32px !important;
  font-weight: 400 !important;
  line-height: 40px;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

body #getNow .free-shipping-checkout {
  margin: 0 0 16px;
}

#purchase .magicpatch-packs + .view-prices {
  padding: 0 20px;
  margin-top: 24px;
}

body .view-prices {
  gap: initial;
}
body .view-prices h3 {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  line-height: 28px;
  margin-bottom: 2px;
  letter-spacing: initial;
}
body .view-prices > p {
  color: #6f6f6f;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  letter-spacing: initial;
}
body .view-prices .np-one-pack {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif !important;
  line-height: 20px !important;
  margin: 8px 0 4px;
  letter-spacing: initial;
  max-width: 270px;
}
body .view-prices .rtx-subscription-label__header {
  color: #2a7b72;
  font-family: "Roboto", sans-serif !important;
  line-height: 24px;
  text-decoration-line: underline;
  letter-spacing: initial;
  text-align: center;
  margin: 8px 0 2px;
}
body .view-prices .v-pack-select-label {
  color: #0c0b0b;
  letter-spacing: initial;
}
body .view-prices .sale-price__label {
  font-family: "Roboto", sans-serif !important;
  line-height: 20px;
}
body .view-prices .sale-price__label span {
  font-weight: 700;
}
body .view-prices #no-icart-open {
  width: 100%;
  max-width: 100%;
  height: 56px;
  color: #fefefe;
  text-align: center;
  font-family: "DINEngschrift LT", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  border-radius: 60px;
  background: #2a7b72;
  box-shadow: none;
  margin-top: 8px;
}

body .reviews-slide {
  padding: 0 !important;
  margin: 16px 0 0 !important;
}
body .reviews-slide img.days {
  margin: 0 !important;
  max-width: 267px !important;
}

@media (max-width: 376px) {
  #cons .tippy-content {
    padding: 10px;
  }
  #cons .tooltip_txt {
    margin-top: 5px;
    font-size: 12px !important;
  }
}/*# sourceMappingURL=main.css.map */`, g = "https://conversionratestore.github.io/projects/zenpatch", f = {
    tooltip: (
      /* HTML */
      `
    <svg class="tooltip_icon" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 6 12" fill="none">
      <path
        class="path_var"
        d="M2 10.2953H4V12H2V10.2953ZM0 2.54039C0 2.19499 0.0784317 1.8663 0.235294 1.55432C0.392157 1.24234 0.607843 0.974931 0.882353 0.75209C1.15686 0.518107 1.47712 0.334263 1.84314 0.200558C2.20915 0.0668529 2.60131 0 3.01961 0C3.50327 0 3.94118 0.0835661 4.33333 0.250698C4.73856 0.417828 5.0719 0.651811 5.33333 0.952647C5.46405 1.10864 5.56863 1.25348 5.64706 1.38719C5.73856 1.52089 5.81046 1.66574 5.86275 1.82173C5.91503 1.96657 5.94771 2.1337 5.96078 2.32312C5.98693 2.51253 6 2.73538 6 2.99164C6 3.28134 5.99346 3.52646 5.98039 3.72702C5.98039 3.91644 5.96732 4.08357 5.94118 4.22841C5.91503 4.37326 5.88235 4.50139 5.84314 4.61281C5.80392 4.71309 5.75163 4.8078 5.68627 4.89694L4.33333 6.86908C4.24183 7.00279 4.1634 7.14206 4.09804 7.28691C4.03268 7.42061 4 7.56546 4 7.72145V9.0585H2V7.50418C2 7.25905 2.04575 7.02507 2.13725 6.80223C2.22876 6.57939 2.3464 6.36212 2.4902 6.15042L3.7451 4.41226C3.84967 4.26741 3.91503 4.11142 3.94118 3.94429C3.98039 3.77716 4 3.61003 4 3.4429V2.5571C4 2.32312 3.90196 2.12256 3.70588 1.95543C3.52288 1.7883 3.29412 1.70474 3.01961 1.70474C2.78431 1.70474 2.55556 1.77716 2.33333 1.92201C2.11111 2.06685 2 2.27855 2 2.5571V3.52646H0V2.54039Z"
        fill="white"
      />
    </svg>
  `
    ),
    star: `
    <svg class='star_icon' xmlns='http://www.w3.org/2000/svg' width='17' height='15' viewBox='0 0 17 15' fill='none'>
      <path
        d='M8.51514 0L10.8663 4.76393L16.1236 5.52786L12.3194 9.23607L13.2174 14.4721L8.51514 12L3.81285 14.4721L4.71091 9.23607L0.906684 5.52786L6.164 4.76393L8.51514 0Z'
        fill='#F4BE00'
      />
    </svg>
  `
  }, C = {
    promoting: `
  <div class='tooltip_block'>
    <div class='tooltip_info'>
      <img src='${g}/img/tooltip_img_bundles.png' class='ls-is-cached lazyloaded'/>
      <div>
        <div class='main_title_wrapper'>
          <h2>SleepyPatch</h2>
          <div class='stars_wrapper'>${f.star}${f.star}${f.star}${f.star}${f.star}</div>
        </div>
        <h3>Sleep Promoting Stickers</h3>
        <p>24 patches for bedtime</p>
      </div>
    </div>
    <p class='tooltip_txt'>
      Active Ingredients: Mandarin, Lavender, Sweet Marjoram, Vetiver, Essential Oils ensure the SleepyPatch improves
      sleep quality within 30 minutes, working for 8 - 10 hours, as supported by research.
    </p>
  </div>`
  }, S = (i, t, n) => (
    /* HTML */
    `
    <li class="list-packs list-packs-bundle" data-pack="bundle" data-id="43053597229100">
      <div class="stickers-prices">
        <div class="sticker-image">
          <img src="${g}/img/bundles_img.png" class="ls-is-cached lazyloaded" />
        </div>

        <div class="info">
          <p class="pack-name">All-in-one stress-relief kit</p>
          <p class="pcs pcs-bundle">3 Packs + 24 Bedtime Stickers</p>
          <div class="before-after-prices">
            <p class="strikethrough">
              <span class="reg-price-bundle" data-price="${t}" data-subscription-price="${t}"
                >${i}${t}</span
              >
            </p>
            <p class="after-price">
              <span class="save-price-bundle" data-price="${n}" data-subscription-price="${n}"
                >${i}${n}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="tooltip_zone" data-tooltip data-title="${C.promoting}">
        <div class="tooltip_bgr">${f.tooltip}</div>
      </div>
    </li>
  `
  );
  w({ name: "Introduce bundle on the page", dev: "SKh" }), v("exp_introduce");
  const L = window.innerWidth < 768 ? "mobile" : "desktop";
  class E {
    constructor(t) {
      this.device = t, this.singleClick = !0, this.currency = e(".all-in-one-bundle span").getAttribute("data-currency"), this.salePrice = e(".all-in-one-bundle span").getAttribute("data-price"), this.regularPrice = e(".all-in-one-bundle span").getAttribute("data-price-compare"), this.offPrice = e(".all-in-one-bundle span").getAttribute("data-price-off"), this.savePrice = e(".all-in-one-bundle span").getAttribute("data-price-save"), this.observer = null, this.init();
    }
    init() {
      this.device === "mobile" && (document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Noto+Sans+SC:wght@100..900&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${_}</style>`), this.replaceElemsSlideInCart(), this.renderNewBundleItem(), this.addClickOldPaksHandler(), this.addClickBtnsOpenSlideInCartHandler(), d(".list-packs-bundle").then((t) => {
        this.initTooltip(), this.addClickNewBundleHandlers();
      }), this.addClassScrollBlock(), window.addEventListener("resize", () => {
        this.getHeightSlideInCartScroll();
      }), this.visibleHandler(), this.initCustomScrollBar());
    }
    replaceElemsSlideInCart() {
      e("#cons").insertAdjacentHTML(
        "afterbegin",
        '<div id="slideInCartScroll"><div class="scroll_wrapper"></div><div class="new_scroll_bar"><div class="new_thumb"></div></div></div>'
      ), e("#cons").insertAdjacentHTML("afterbegin", '<div id="slideInCartHeader"></div>'), e("#cons").insertAdjacentHTML("beforeend", '<div id="slideInCartFooter"></div>'), d("#slideInCartHeader").then((t) => {
        e("#slideInCartHeader").insertAdjacentElement("afterbegin", e("#cons .title-logo"));
      }), d("#slideInCartScroll").then((t) => {
        e("#slideInCartScroll .scroll_wrapper").insertAdjacentElement("beforeend", e("#cons .magicpatch-packs"));
      }), d("#slideInCartFooter").then((t) => {
        e("#slideInCartFooter").insertAdjacentElement("afterbegin", e("#cons .view-prices")), e("#slideInCartFooter").insertAdjacentElement("beforeend", e("#cons .reviews-slide"));
      }), l(".reviews-slide img").forEach((t) => {
        t.src = `${g}/img/new_logos.png`;
      }), l(".close-btn").forEach((t) => {
        t.src = `${g}/img/close_icon.svg`;
      }), l(".np-one-pack").forEach((t) => {
        t.innerHTML = "Select 2, 3 or 4 packs to subscribe with an <b>extra 15% off</b> - <span>save time and money</span>";
      });
    }
    renderNewBundleItem() {
      l(".list-packs.list-packs-3").forEach((t) => {
        t.nextElementSibling.classList.contains("list-packs-bundle") || (t.insertAdjacentHTML("afterend", S(this.currency, this.regularPrice, this.salePrice)), this.getHeightSlideInCartScroll());
      });
    }
    renderInfoSubscription() {
      l(".view-prices").forEach((t) => {
        t.querySelector(".info_subscription") || t.querySelector(".stay-container").insertAdjacentHTML(
          "beforebegin",
          '<div class="info_subscription"><p>Subscription is available for 2, 3, or 4 packs of ZenPatch only</p></div>'
        ), t.querySelector(".new_checkout_btn") || (t.querySelector("#no-icart-open").insertAdjacentHTML(
          "beforebegin",
          '<a class="new_checkout_btn" href="#">PROCEED TO CHECKOUT</a>'
        ), this.clickNewCheckoutBtnHandler()), t.querySelector("#no-icart-open").style.display = "none", t.querySelector(".stay-container .np-multiple-pack").style.display = "none", t.querySelector(".stay-container .np-one-pack").style.display = "none", t.querySelector(".sale-price").textContent = this.salePrice, t.querySelector(".off-price").textContent = this.offPrice, t.querySelector(".line-through").textContent = this.currency, t.querySelector(".strikethrough-lg").textContent = this.regularPrice, t.querySelector(".text-save").textContent = `${this.currency}${this.savePrice}`;
      });
    }
    addClickOldPaksHandler() {
      l(".list-packs").forEach((t) => {
        t.addEventListener("click", () => {
          t.classList.contains("list-packs-bundle") || this.removeOrChangeElems(), setTimeout(() => {
            this.getHeightSlideInCartScroll();
          }, 500);
        });
      });
    }
    addClickBtnsOpenSlideInCartHandler() {
      l("#open").forEach((t) => {
        t.addEventListener("click", () => {
          e("html").classList.add("is_open"), document.documentElement.style.overflow = "hidden", this.removeOrChangeElems(), this.getHeightSlideInCartScroll(), this.changeActiveClassHtml(), l("#cons .list-packs").forEach((n) => {
            n.classList.contains("list-packs-bundle") && n.classList.contains("active-slide") && (console.log("list-packs-bundle, .add('active-slide')!!!!!!!!!!!!!!!!!!!!!!!!!"), this.renderInfoSubscription());
          });
        });
      });
    }
    removeOrChangeElems() {
      this.singleClick = !0, l(".info_subscription").forEach((t) => {
        t.remove();
      }), l(".new_checkout_btn").forEach((t) => {
        t.remove();
      }), l("#no-icart-open").forEach((t) => {
        t.style.display = "block";
      });
    }
    addClickNewBundleHandlers() {
      console.log("addClickNewBundleHandlers");
      const t = l(".list-packs-bundle");
      let n;
      t.forEach((o) => {
        o.addEventListener("click", (r) => {
          !r.target.classList.contains("tooltip_zone") && !r.target.classList.contains("tooltip_bgr") && !r.target.classList.contains("tooltip_icon") && !r.target.classList.contains("path_var") && !n && this.singleClick && (n = setTimeout(() => {
            n = null, this.singleClick = !1, this.clickBundleHandler(o);
          }, 300));
        });
      });
    }
    clickBundleHandler(t) {
      l(".list-packs").forEach((n) => {
        !n.classList.contains("list-packs-bundle") && n.classList.contains("active-slide") && n.classList.remove("active-slide"), n.classList.contains("list-packs-bundle") && (n.classList.add("active-slide"), console.log("list-packs-bundle, .add('active-slide')"));
      }), t.closest("#cons") ? p("exp_introduce_packs_02", "Click List Packs Bundle", "Button", "Slide-in Cart") : p("exp_introduce_packs_01", "Click List Packs Bundle", "Button", "Shopping section Stock up and save"), this.renderInfoSubscription();
    }
    async doubleClickBundleHandler(t, n, o = !1) {
      l(".list-packs").forEach((s) => {
        !s.classList.contains("list-packs-bundle") && s.classList.contains("active-slide") && s.classList.remove("active-slide"), s.classList.contains("list-packs-bundle") && (s.classList.add("active-slide"), console.log("list-packs-bundle, .add('active-slide')"));
      }), t.closest("#cons") ? t.closest(".new_checkout_btn") ? p("exp_introduce_link_02", "Click PROCEED TO CHECKOUT", "Button", "Slide-in Cart") : p("exp_introduce_packs_04", "Double Click List Packs Bundle", "Button", "Slide-in Cart") : t.closest("#getNow") && (t.closest(".new_checkout_btn") ? p("exp_introduce_link_01", "Click PROCEED TO CHECKOUT", "Button", "Shopping section Stock up and save") : p(
        "exp_introduce_packs_03",
        "Double Click List Packs Bundle",
        "Button",
        "Shopping section Stock up and save"
      )), o || await fetch("/cart/clear.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((s) => s.json()).catch((s) => {
        console.error("Error:", s);
      }), await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [
            {
              id: n,
              quantity: 1
            }
          ]
        })
      }).then((s) => {
        s.json(), setTimeout(() => {
          console.log("Go to checkout !!!!!!!!!!!!!! "), window.location.href = "/checkout";
        }, 350);
      }).catch((s) => {
        console.error("Error:", s);
      });
    }
    clickNewCheckoutBtnHandler() {
      l(".new_checkout_btn").forEach((t) => {
        t.addEventListener("click", (n) => {
          n.preventDefault(), n.target.getAttribute("data-test") || this.doubleClickBundleHandler(t, 43053597229100, !0), n.target.setAttribute("data-test", "1"), setTimeout(() => {
            n.target.getAttribute("data-test") && n.target.removeAttribute("data-test");
          }, 1e3);
        });
      });
    }
    initTooltip() {
      y([
        "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js"
      ]).then(async () => {
        let t = setInterval(() => {
          typeof tippy == "function" && (clearInterval(t), console.log(">>>>>>>>>>>>>>>>>>>>>>."), l("[data-tooltip]").forEach((n) => {
            tippy(n, {
              content: n.getAttribute("data-title"),
              trigger: "click",
              allowHTML: !0,
              arrow: !0,
              arrowType: "round",
              appendTo: function() {
                return n.closest("li");
              },
              placement: "top-end",
              interactive: !0,
              onShow(o) {
                e("#slideInCartScroll").classList.add("tooltip_open"), n.closest("#cons") ? m(
                  o.reference,
                  "exp_introduce_tooltip_02",
                  "Slide-in Cart",
                  "Tooltip All-in-one stress-relief kit"
                ) : m(
                  o.reference,
                  "exp_introduce_tooltip_01",
                  "Shopping section Stock up and save",
                  "Tooltip All-in-one stress-relief kit"
                );
              },
              onTrigger(o) {
                n.closest("#cons") ? p("exp_introduce_button_02", "All-in-one stress-relief kit", "Button", "Slide-in Cart") : p(
                  "exp_introduce_button_01",
                  "All-in-one stress-relief kit",
                  "Button",
                  "Shopping section Stock up and save"
                );
              },
              onHide(o) {
                e("#slideInCartScroll").classList.toggle("tooltip_open");
              }
            });
          }));
        }, 100);
      });
    }
    addClassScrollBlock() {
      var t;
      (t = l('[for="rtxSubscribe"]')) == null || t.forEach((n) => {
        n.addEventListener("click", () => {
          this.getHeightSlideInCartScroll();
        });
      });
    }
    getHeightSlideInCartScroll() {
      d("#slideInCartScroll").then((t) => {
        var c, u, b, x;
        e("#slideInCartScroll").style.maxHeight = `${((c = e("#cons")) == null ? void 0 : c.clientHeight) - ((u = e("#slideInCartFooter")) == null ? void 0 : u.clientHeight) + 12}px`;
        let n = e("#slideInCartScroll"), o = e(".new_scroll_bar"), r = e(".new_thumb");
        o.style.maxHeight = `${((b = e("#cons")) == null ? void 0 : b.clientHeight) - ((x = e("#slideInCartFooter")) == null ? void 0 : x.clientHeight)}px`, n.scrollHeight > n.clientHeight ? o.style.display = "block" : o.style.display = "none";
        let h = n.scrollHeight, a = n.clientHeight;
        r.style.height = a / h * 100 + "%", n.addEventListener("scroll", function(B) {
          let H = n.scrollTop, k = r.offsetHeight, I = a - k, T = H / (a - k);
          r.style.top = T * I + "px";
        });
      });
    }
    visibleHandler() {
      d("#getNow .list-packs-bundle").then((t) => {
        m(
          "#getNow .list-packs-bundle",
          "exp_introduce_element_01",
          "Shopping section Stock up and save All-in-one stress-relief kit",
          "Element"
        );
      }), d("#cons .list-packs-bundle").then((t) => {
        m("#cons .list-packs-bundle", "exp_introduce_element_02", "Slide-in Cart", "Element");
      });
    }
    changeActiveClassHtml() {
      let t = setInterval(() => {
        !e(".sidebar").classList.contains("active-sidebar") && e("html").classList.contains("is_open") && (clearInterval(t), e("html").classList.remove("is_open"), document.documentElement.style.overflow = "");
      }, 100);
    }
    initCustomScrollBar() {
    }
  }
  d(".all-in-one-bundle").then((i) => {
    setTimeout(() => {
      window.location.pathname.match("pages") && new E(L);
    }, 1e3);
  });
})();
//# sourceMappingURL=index.js.map
