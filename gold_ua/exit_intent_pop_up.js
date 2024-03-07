console.log("%c EXP: exit intent popup (DEV: SKh)", "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");

const $$el = (selector) => document.querySelectorAll(selector);
const $el = (selector) => document.querySelector(selector);
const git = "https://conversionratestore.github.io/projects/";
// clarity script
const clarityInterval = setInterval(function () {
  if (typeof clarity == "function") {
    clearInterval(clarityInterval);
    clarity("set", "exp_exit_pop_up", "variant_1");
  }
}, 1000);
// funtion for push data to GA4
const pushDataLayer = (name, desc, type = "", loc = "") => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "event-to-ga4",
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc,
  });
  console.log(`Event: ${name} ${desc} ${type} ${loc}`);
};

function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.getAttribute("data-startShow")) {
        entry.target.setAttribute("data-startShow", new Date().getTime());
      } else if (!entry.isIntersecting && entry.target.getAttribute("data-startShow")) {
        const startShow = entry.target.getAttribute("data-startShow");
        const endShow = new Date().getTime();
        const timeShow = Math.round(endShow - startShow);
        console.log(timeShow, `timeShow`);
        entry.target.removeAttribute("data-startShow");
        pushDataLayer(event, `Block view`, "Visibility", location);
        checker.unobserve(entry.target);
      }
    });
  });

  checker.observe(document.querySelector(selector));
}

const checkScrollSpeed = (function (settings) {
  settings = settings || {};

  let lastPos;
  let newPos;
  let timer;
  let delta,
    delay = settings.delay || 50;

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function () {
    newPos = window.scrollY;
    if (lastPos != null) {
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
  };
})();

function checkScrollPosition(headerOff, elPosition) {
  const headerOffset = headerOff;
  const elementPosition = elPosition?.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
// load script
const loadScriptOrStyle = (url) => {
  return new Promise((resolve, reject) => {
    // check script by document.scripts
    const type = url.split(".").pop();
    if (type === "js") {
      const loadedScripts = Array.from(document.scripts).map((script) => script.src.toLowerCase());
      if (loadedScripts.includes(url.toLowerCase())) {
        console.log(`Script ${url} allready downloaded!`);
        return resolve("");
      }
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    } else if (type === "css") {
      const loadedStyles = Array.from(document.styleSheets).map((style) => style.href?.toLowerCase());
      if (loadedStyles.includes(url.toLowerCase())) {
        console.log(`Style ${url} allready downloaded!`);
        return resolve("");
      }
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = url;
      style.onload = resolve;
      style.onerror = reject;
      document.head.appendChild(style);
    }
  });
};
// load list of scripts
const loadScriptsOrStyles = async (urls) => {
  for (const url of urls) {
    await loadScriptOrStyle(url);
    console.log(`Loaded librari ${url}`);
  }
  console.log("All libraries loaded!");
};
function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  });
}
const icons = {
  close: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 1L13 13" stroke="black" stroke-width="0.753225" stroke-linecap="round" />
      <path d="M13 1L1 13" stroke="black" stroke-width="0.753225" stroke-linecap="round" />
    </svg>
  `,
  info: /* html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8.00001 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8.00001C14.6667 4.33334 11.6667 1.33334 8.00001 1.33334C4.33334 1.33334 1.33334 4.33334 1.33334 8.00001C1.33334 11.6667 4.33334 14.6667 8.00001 14.6667Z" stroke="#6B40A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 5.33334V8.66668" stroke="#6B40A5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.99634 10.6667H8.00233" stroke="#6B40A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  flames: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
      <path
        d="M9.47436 7.02583C9.33689 5.23617 8.50364 4.11466 7.76855 3.12499C7.08788 2.20877 6.5 1.41757 6.5 0.250428C6.5 0.156678 6.4475 0.0709907 6.36425 0.0280298C6.28074 -0.015189 6.1804 -0.00811086 6.10449 0.047061C5.00049 0.837045 4.07935 2.16851 3.75758 3.43891C3.53419 4.32337 3.50464 5.31768 3.50049 5.97438C2.48096 5.75662 2.25001 4.23159 2.24757 4.21497C2.23609 4.13587 2.18776 4.06704 2.11744 4.02944C2.04641 3.99234 1.9629 3.98965 1.89087 4.02529C1.83741 4.05117 0.578609 4.69078 0.505367 7.24455C0.500234 7.32951 0.5 7.41473 0.5 7.49993C0.5 9.98095 2.51879 11.9996 5 11.9996C5.00342 11.9999 5.00708 12.0003 5.01001 11.9996C5.01099 11.9996 5.01195 11.9996 5.01317 11.9996C7.48829 11.9925 9.5 9.97656 9.5 7.49993C9.5 7.37517 9.47436 7.02583 9.47436 7.02583ZM5 11.4997C4.17284 11.4997 3.5 10.7829 3.5 9.90187C3.5 9.87185 3.49976 9.84156 3.50194 9.80446C3.51195 9.43291 3.58252 9.17927 3.65991 9.01056C3.80494 9.32207 4.06421 9.60843 4.48536 9.60843C4.62355 9.60843 4.73537 9.49661 4.73537 9.35845C4.73537 9.00253 4.7427 8.5919 4.83132 8.22131C4.91019 7.89271 5.09865 7.54312 5.33743 7.26288C5.44362 7.62663 5.65067 7.92103 5.85282 8.20837C6.14213 8.61946 6.44119 9.0445 6.49369 9.76931C6.49686 9.81227 6.50004 9.85549 6.50004 9.90187C6.5 10.7829 5.82715 11.4997 5 11.4997Z"
        fill="#EB3300"
      />
    </svg>
  `,
  arrowPrev: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path d="M5 8.5L1.5 5L5 1.5" stroke="#212529" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  arrowNext: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path d="M1 1.5L4.5 5L1 8.5" stroke="#212529" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
};

const localTxt = {
  ua: {
    productsHeaderTitle: "Вже майже ваше!",
    outOfStockTxtPart1: "Залишилося менше",
    outOfStockTxtPart2: "шт. на складі",
    productsPriceTxt: "Ціна зі знижкою:",
    productsFooterInfoTxt: 'Ми не можемо гарантувати наявність, якщо ви не <span class="accent_color">зробите замовлення зараз</span>',
    orderBtn: "Оформити замовлення",
    hrefBtn: "https://gold.ua/ua/order/create",
  },
  ru: {
    productsHeaderTitle: "Уже почти ваше!",
    outOfStockTxtPart1: "Осталось меньше",
    outOfStockTxtPart2: "шт. на складе",
    productsPriceTxt: "Цена со скидкой:",
    productsFooterInfoTxt: 'Мы не можем гарантировать наличие, если вы не <span class="accent_color">сделаете заказ сейчас</span>',
    orderBtn: "Оформить заказ",
    hrefBtn: "https://gold.ua/order/create",
  },
};

const locationHref = window.location.href;
let locale = null;
let localTxtValue = null;
if (locationHref.includes("/ua/")) {
  locale = "ua";
} else {
  locale = "ru";
}

// IntentPopup
class IntentPopup {
  constructor(locale, delayTime, lastAddedTimerStart) {
    this.locale = locale;
    this.delayTime = delayTime;
    this.timeoutId = null;
    this.sessionKey = "exitIntentPopupShown";
    this.checkLastAddedTimer = null;
    this.lastAddedTimerStart = lastAddedTimerStart;
    this.maxPopupCount = 1;
    this.outOfStockNumbers = [2, 3, 4, 5];
    this.device = screen.width <= 768 ? "Mobile" : "Desktop";
  }

  init() {
    localTxtValue = localTxt[this.locale];
    this.initMainStyles();
    this.createPopup();
    this.intentPopupTriggers();

    console.log(`ONLY POPUP >>>>>`, this.locale);
  }

  // IntentPopup
  intentPopupTriggers() {
    if (this.device === "Mobile") {
      // Скролл вверх (JS speed value: 70) для всіх сторінок
      // Свайп різкий вверх, вниз для всіх сторінок
      document.addEventListener("scroll", () => {
        const scrollSpeed = checkScrollSpeed();
        if (+scrollSpeed < -100 || +scrollSpeed > 100) {
          if (!sessionStorage.getItem("scrollForPopup")) {
            console.log(scrollSpeed, `scrollSpeed`);
            sessionStorage.setItem("scrollForPopup", "yes");
            this.getItemsBasket();
          }
        }
      });

      // На 30ту секунду на поп-апі із чекаутом (https://monosnap.com/file/CCs1KFK0zBy9c4uMsOGY1SuxdXipot)
      // чи на чекаут сторінці(https://gold.ua/ua/order/create), якщо немає ніякої активності ці 30 сек.
      waitForElement("#b4Modal").then((i) => {
        this.delayTime = 30000;
        this.setupListeners();
        this.resetTimer();
      });

      if (window.location.href === localTxtValue["hrefBtn"]) {
        this.delayTime = 30000;
        this.setupListeners();
        this.resetTimer();
      }
    }

    if (this.device === "Desktop") {
      // Скролл вверх (JS speed value: 70) для всіх сторінок
      document.addEventListener("scroll", () => {
        const scrollSpeed = checkScrollSpeed();

        if (+scrollSpeed < -70) {
          if (!sessionStorage.getItem("scrollForPopup")) {
            sessionStorage.setItem("scrollForPopup", "yes");
            this.getItemsBasket();
          }
        }
      });
      // Курсор виходить за межі рамки сторінки в браузері, для вісх сторінок
      document.addEventListener("mouseout", (event) => {
        if (!event.relatedTarget) {
          this.getItemsBasket();
        }
      });
    }

    // На 180 секунду після додовання крайнього товару в кошик, на будь якій сторінці сайту,
    // якщо не було чекауту(користувач додав товар у кошик і серфить сайт далі та не повертається у кошик, та не додає нові товари)
    this.initMutationObserverCartPopup();
    this.checkLastAddedTime();

    // На 60 секунду на будь якій сторінці на сайті, якщо не відбувається ніякої дії.
    this.setupListeners();
    this.resetTimer();

    // Зміна фокусу екрану, якщо користувач перемкнувся на інше вікно/інший таб у браузері (чи відкрив якийсь інший додаток і тп)
    // і знову повернувся на сайт, і при цьому у нього доданий товар у кошик.
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        console.log("Зміна фокусу екрану: сторінка стала видимою");
        this.getItemsBasket();
      }
    });
  }
  async getItemsBasket() {
    if (this.isPopupOpen()) {
      return;
    }

    if (sessionStorage.getItem("intentPopup")) {
      sessionStorage.removeItem("intentPopup");
    }

    let res = await fetch(localTxtValue["hrefBtn"]);
    res = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(res, "text/html");
    const itemsBasket = doc.querySelectorAll(".basket-page .product-item");
    if (itemsBasket.length !== 0) {
      this.showIntentPopup();

      itemsBasket.forEach((el) => {
        const link = el.querySelector(".image.me-3 > a")?.href;
        const img = el.querySelector(".image.me-3 > a")?.innerHTML;
        const title = el.querySelector(".info .name a")?.textContent;
        const price = el.querySelector(".info .price")?.textContent.split("x")[0];

        waitForElement(".product_list").then((i) => {
          if (itemsBasket.length === 1) {
            i.closest(".swiper").classList.add("one_item");
          }
          if (i.length !== el.children.length) {
            i.insertAdjacentHTML("beforeend", this.productItemHtml(link, img, this.generateMessageOutOfStock(), title, price));
          }
        });
      });

      this.allGroupProductSlider();
      this.onClickProductItemInfo();
      this.onClickOrderBtn();
    }
  }
  // Тріггери для поп-апу (товар доданий до кошику)
  initMutationObserverCartPopup() {
    const cartList = document.body;
    let observer = new MutationObserver((muts) => {
      for (let mutation of muts) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches(".modal-backdrop.show")) {
            sessionStorage.setItem("lastAddedTime", new Date().getTime());
          }
        }
      }
    });

    observer.observe(cartList, {
      childList: true,
      subtree: true,
    });
  }
  resetTimer() {
    clearTimeout(this.timeoutId); // Clear the previous timeout
    this.timeoutId = setTimeout(() => this.getItemsBasket(), this.delayTime); // Set a new timeout
  }
  setupListeners() {
    // Attach the resetTimer function to relevant events
    document.addEventListener("mousemove", () => this.resetTimer());
    document.addEventListener("keydown", () => this.resetTimer());

    // Add touch event listeners for mobile devices
    if (this.device === "Mobile") {
      document.addEventListener("touchstart", () => this.resetTimer());
      document.addEventListener("touchmove", () => this.resetTimer());
    }
  }
  productItemHtml(pdpLink, img, outOfStock, title, price) {
    const productItem = /* HTML */ `
      <div class="product_item_wrapper swiper-slide">
        <div class="product_item">
          <div class="img_wrapper">
            <a data-info="${pdpLink}" href="${pdpLink}"> ${img} </a>
          </div>
          <div class="product_item_descr">
            <div class="out_of_stock_wrapper">${icons.flames} ${outOfStock}</div>
            <div class="product_item_info" data-info="${pdpLink}">
              <a href="${pdpLink}">
                <h3 class="product_item_title">${title}</h3>
              </a>
              <a href="${pdpLink}">
                <div class="product_item_price_wrapper">
                  <span class="product_item_price_txt">${localTxtValue["productsPriceTxt"]}</span>
                  <span class="product_item_price_value">${price}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    return productItem;
  }
  generateMessageOutOfStock() {
    const randomIndex = Math.floor(Math.random() * this.outOfStockNumbers.length);
    const randomNumber = this.outOfStockNumbers[randomIndex];
    const outOfStockTxt = `<p>${localTxtValue["outOfStockTxtPart1"]} <span class="out_of_stock_count">${randomNumber}</span> ${localTxtValue["outOfStockTxtPart2"]}</p>`;
    return outOfStockTxt;
  }
  showIntentPopup() {
    const popupStyle = /* HTML */ `
      <style>
        .accent_color {
          color: #955bc3;
          font-weight: 600;
        }
        .products_popup {
          display: flex;
          flex-direction: column;
          background: #f5f5f5;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .products_header {
          padding: 12px 16px 8px;
        }
        .products_header h2 {
          color: #000;
          text-align: center;
          font-family: "Lora";
          font-size: 22px;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: -0.44px;
          margin: 0;
        }
        .products_header p {
          color: #666;
          text-align: center;
          font-family: "Euclid Circular A";
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.28px;
          margin: 0;
        }
        .products_banner_limit {
          background: #ffebe7;
          padding: 8px 20px;
        }
        .products_banner_limit p {
          color: #000;
          text-align: center;
          font-family: "Euclid Circular A";
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin: 0;
        }
        .products_body {
          padding: 16px 0 0;
          background: #fff;
        }
        .products_footer {
          padding: 24px 16px 16px 16px;
          background: #fff;
        }
        .products_footer_info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          padding: 8px 11px 8px 12px;
          margin-bottom: 12px;
          background: rgba(63, 18, 99, 0.05);
          display: none;
        }
        .products_footer_info p {
          color: #666;
          font-family: "Euclid Circular A";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: -0.28px;
          margin: 0;
        }
        .products_footer_info svg {
          flex: 0 0 16px;
        }
        .products_footer .order_btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 56px;
          color: #fff;
          font-family: "Euclid Circular A";
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0.64px;
          text-transform: uppercase;
          background: #7a3dab;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .products_header {
            padding: 12px 16px 8px;
          }
          .products_footer {
            padding: 12px 16px 16px;
          }
        }
      </style>
    `;

    const productItemStyle = /* HTML */ `
      <style>
        .product_item {
          display: flex !important;
          gap: 12px;
          align-items: center;
          justify-content: flex-start;
          flex: 1 0 335px;
          flex-direction: column;
          padding: 0 16px;
        }
        .swiper.one_item .swiper-wrapper .product_item {
          flex: initial;
        }
        .product_item .img_wrapper {
          max-width: 220px;
          max-height: 220px;
          width: 100%;
          height: 100%;
        }
        .product_item .img_wrapper a,
        .product_item .img_wrapper img {
          width: 100%;
          height: 100%;
          display: block;
          max-width: 220px;
          max-height: 220px;
          object-fit: none;
        }
        .product_item .out_of_stock_wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-bottom: 8px;
        }
        .product_item .out_of_stock_wrapper p {
          color: #eb3300;
          font-family: "Euclid Circular A";
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          letter-spacing: -0.24px;
          margin: 0;
        }
        .product_item .product_item_descr a {
          text-decoration: none;
        }
        .product_item_info {
          text-align: center;
        }
        .product_item .product_item_title {
          color: #000;
          text-overflow: ellipsis;
          font-family: "Lora";
          font-size: 16px;
          font-weight: 500;
          line-height: 22px;
          letter-spacing: -0.16px;
          margin: 0 auto 12px;
          max-width: 280px;
        }
        .product_item_price_txt {
          color: #666;
          text-align: center;
          font-family: "Euclid Circular A";
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.32px;
        }
        .product_item_price_value {
          color: #3f1263;
          font-family: "Euclid Circular A";
          font-size: 18px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: -0.36px;
        }
        /*.swiper */
        .swiper {
          padding-bottom: 25px;
        }
        .swiper.one_item {
          padding-bottom: 0;
        }
        .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
        .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
          bottom: 0;
        }
        .swiper-button-next,
        .swiper-button-prev {
          bottom: 0 !important;
          top: unset;
          width: 4px;
          height: 7px;
        }
        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after,
        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
          content: unset;
        }
        .swiper-button-next,
        .swiper-rtl .swiper-button-prev {
          right: 190px;
        }
        .swiper-button-prev,
        .swiper-rtl .swiper-button-next {
          left: 190px;
        }
        .swiper-pagination-bullet {
          background: #d9d9d9;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #212121;
        }

        .swiper .swiper-wrapper .product_item_wrapper:not(:last-child) {
          border-right: 1px solid rgba(0, 0, 0, 0.06);
        }

        .swiper .swiper-wrapper .product_item_wrapper {
          flex: 1 0 355px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 768px) {
          .swiper .swiper-wrapper .product_item_wrapper {
            flex: 1 0 271px;
          }
          .product_item {
            flex: 1 0 335px;
          }
          .product_item .product_item_title {
            max-width: 239px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      </style>
    `;
    const productsPopup = /* HTML */ `
      ${popupStyle}
      <div class="products_popup">
        <div class="products_header">
          <h2>${localTxtValue["productsHeaderTitle"]}</h2>
        </div>
        <div class="products_body">
          <div class="product_list_wrapper">
            ${productItemStyle}
            <div class="swiper">
              <div class="swiper-wrapper product_list"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev">${icons.arrowPrev}</div>
              <div class="swiper-button-next">${icons.arrowNext}</div>
            </div>
          </div>
        </div>
        <div class="products_footer">
          <div class="products_footer_info">
            ${icons.info}
            <p>${localTxtValue["productsFooterInfoTxt"]}</p>
          </div>
          <a class="order_btn" href="${localTxtValue["hrefBtn"]}">${localTxtValue["orderBtn"]}</a>
        </div>
      </div>
    `;

    // Показувати поп-ап максимум 3 рази на унікальну сессію
    const popupCount = this.getPopupCount();
    if (popupCount < this.maxPopupCount && !sessionStorage.getItem("intentPopup")) {
      if (sessionStorage.getItem("scrollForPopup")) {
        sessionStorage.removeItem("scrollForPopup");
      }
      this.handleShowPopup(productsPopup);
      this.savePopupCount(popupCount + 1);
    }
  }
  getPopupCount() {
    const sessionData = sessionStorage.getItem(this.sessionKey);
    return sessionData ? parseInt(sessionData, 10) : 0;
  }
  savePopupCount(count) {
    sessionStorage.setItem(this.sessionKey, count);
  }
  isPopupOpen() {
    return $el(".new-popup__content")?.children.length > 0;
  }
  onClickProductItemInfo() {
    waitForElement(".product_item_wrapper").then((el) => {
      $$el("[data-info]")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget.getAttribute("data-info")) {
            pushDataLayer("exp_exit_pop_up_link_prodcart_item", e.currentTarget.getAttribute("data-info"), "Link", "Exit popup for users with product in cart");
          }
        });
      });
    });
  }
  onClickOrderBtn() {
    waitForElement(".products_footer .order_btn").then((el) => {
      el.addEventListener("click", (e) => {
        pushDataLayer("exp_exit_pop_up_but_prodcart_order", "Make an order", "Button", "Exit popup for users with product in cart");
      });
    });
  }
  checkLastAddedTime() {
    let timer = setInterval(() => {
      const timesTamp = sessionStorage.getItem("lastAddedTime");
      if (new Date().getTime() - +timesTamp >= 180000 && window.location.href !== localTxtValue["hrefBtn"]) {
        clearInterval(timer);
        this.getItemsBasket();
      }
    }, 1000);
  }
  allGroupProductSlider() {
    loadScriptsOrStyles(["https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css", "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"]).then(async () => {
      let s = setInterval(() => {
        if (typeof Swiper === "function" && $el(".swiper")) {
          clearInterval(s);
          console.log(typeof Swiper, `typeof Swiper `);

          const swiperMain = new Swiper(".swiper", {
            // Optional parameters
            direction: "horizontal",
            slidesPerView: "auto",

            pagination: {
              el: ".swiper-pagination",
              dynamicBullets: true,
              clickable: true,
            },

            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        }
      }, 100);
    });
  }

  // common func
  createPopup() {
    const popupStyle = /* HTML */ `
      <style>
        .new-popup-backdrop {
          background: rgba(39, 48, 56, 0.65);
          backdrop-filter: blur(5px);
          position: fixed;
          opacity: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000000000000;
          transition: all 0.8s ease 0s;
        }
        .new-popup-backdrop.is-hidden {
          opacity: 0;
          pointer-events: none;
        }
        .new-popup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 490px;
          width: calc(100% - 32px);
          background: #eef4fc;
        }
        .new-popup__close {
          position: absolute;
          top: 12px;
          right: 16px;
          width: 16px;
          height: 16px;
          z-index: 1;
          cursor: pointer;
        }
        .new-popup__close svg {
          width: 100%;
          height: 100%;
          vertical-align: super;
        }
        .new-popup__close:hover,
        .new-popup__close:focus {
          background: none;
        }
        @media (max-width: 768px) {
          .new-popup {
            max-width: 340px;
            width: 100%;
            top: 57px;
            transform: translateX(-50%);
          }
          .new-popup__close {
            width: 12px;
            height: 12px;
          }
        }
      </style>
    `;
    const popup = /* HTML */ `
      ${popupStyle}
      <div class="new-popup-backdrop is-hidden">
        <div class="new-popup">
          <span class="new-popup__close" data-popup="close">${icons.close}</span>
          <div class="new-popup__content"></div>
        </div>
      </div>
    `;

    if (!$el(".new-popup-backdrop")) {
      this.insert(popup, "body", "afterbegin");
    }
    waitForElement(".new-popup-backdrop").then((el) => {
      this.handleClosePopup();
    });
  }
  handleShowPopup(content) {
    const body = $el("body"),
      backdrop = $el(".new-popup-backdrop"),
      popup = $el(".new-popup .new-popup__content");

    if (backdrop.classList.contains("is-hidden")) {
      backdrop.classList.remove("is-hidden");
    }
    body.style.overflow = "hidden";
    popup.innerHTML = content;
    sessionStorage.setItem("intentPopup", `yes`);
    checkFocusTime(".products_popup", "exp_exit_pop_up_vis_prodcart_block", "Exit popup for users with product in cart");
    this.handleClosePopup();
  }
  handleClosePopup() {
    const body = $el("body"),
      backdrop = $el(".new-popup-backdrop"),
      popup = $el(".new-popup"),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]');
    closePopupBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.currentTarget) {
          if (!e.currentTarget.getAttribute("data-test")) {
            backdrop.classList.add("is-hidden");
            body.style.overflow = "initial";

            pushDataLayer("exp_exit_pop_up_but_prodcart_close", "Close", "Button", "Exit popup for users with product in cart");

            setTimeout(() => {
              $el(".new-popup__content").innerHTML = "";
            }, 500);
          }
          e.currentTarget.setAttribute("data-test", "1");
        }
      });
    });
    backdrop.addEventListener(this.device === "Mobile" ? "click" : "mousedown", (e) => {
      if (!e.target.getAttribute("data-test")) {
        if (e.target.matches(".new-popup-backdrop")) {
          backdrop.classList.add("is-hidden");
          body.style.overflow = "initial";

          pushDataLayer("exp_exit_pop_up_clibeh_prodcart_close", "Close", "Сlick behind the pop-up area", "Exit popup for users with product in cart");
          setTimeout(() => {
            $el(".new-popup__content").innerHTML = "";
          }, 500);
        }
      }
      e.target.setAttribute("data-test", "1");
      setTimeout(() => {
        if (e.target.getAttribute("data-test")) {
          e.target.removeAttribute("data-test");
        }
      }, 1000);
    });
  }
  insertElem(html, selector, position = "afterbegin") {
    $el(selector)?.insertAdjacentElement(position, html);
  }
  insert(html, selector, position = "beforeend") {
    $el(selector).insertAdjacentHTML(position, html);
  }
  // common styles
  initMainStyles() {
    const mainStyles = /* HTML */ `
      <style>
        @font-face {
          font-family: "Euclid Circular A";
          src: url(https://conversionratestore.github.io/projects/gold_ua/fonts/EuclidCircularA/EuclidCircularA-Bold.woff) format("woff");
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "Euclid Circular A";
          src: url(https://conversionratestore.github.io/projects/gold_ua/fonts/EuclidCircularA/EuclidCircularA-SemiBold.woff) format("woff");
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: "Euclid Circular A";
          src: url(https://conversionratestore.github.io/projects/gold_ua/fonts/EuclidCircularA/EuclidCircularA-Medium.woff) format("woff");
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: "Euclid Circular A";
          src: url(https://conversionratestore.github.io/projects/gold_ua/fonts/EuclidCircularA/EuclidCircularA-Regular.woff) format("woff");
          font-weight: 400;
          font-style: normal;
        }
        .dn_desk {
          display: none;
        }

        @media (max-width: 768px) {
          .dn_mob {
            display: none;
          }
          .dn_desk {
            display: block;
          }
        }
      </style>
    `;
    this.insert(mainStyles, "head");
  }
}

const exitIntentPopup = new IntentPopup(locale, 60000, 180000);
exitIntentPopup.init();
