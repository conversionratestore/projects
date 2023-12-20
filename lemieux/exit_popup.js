console.log(
  '%c EXP: Exit intent popup (DEV: Olha)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)

const dir = "https://conversionratestore.github.io/projects/lemieux/img/";

const $$el = (selector) => document.querySelectorAll(selector);
const $el = (selector) => document.querySelector(selector);

const clarityInterval = setInterval(function () {
  if (typeof clarity == "function") {
    clearInterval(clarityInterval);
    clarity("set", "exit_intent_popup", "variant_1");
  }
}, 200);

const device = window.innerWidth < 769 ? "mobile" : "desktop";

const dataIcons = {
  closeIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.6007 0.41297C17.0683 -0.119454 16.2082 -0.119454 15.6758 0.41297L9 7.07509L2.32423 0.399317C1.79181 -0.133106 0.931741 -0.133106 0.399317 0.399317C-0.133106 0.931741 -0.133106 1.79181 0.399317 2.32423L7.07509 9L0.399317 15.6758C-0.133106 16.2082 -0.133106 17.0683 0.399317 17.6007C0.931741 18.1331 1.79181 18.1331 2.32423 17.6007L9 10.9249L15.6758 17.6007C16.2082 18.1331 17.0683 18.1331 17.6007 17.6007C18.1331 17.0683 18.1331 16.2082 17.6007 15.6758L10.9249 9L17.6007 2.32423C18.1195 1.80546 18.1195 0.931741 17.6007 0.41297Z" fill="#393F46"/>
    </svg>`,
  peopleIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
      <mask id="mask0_2068_1871" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="26" height="26">
        <path d="M27.5 2.77759H2.5V27.7776H27.5V2.77759Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_2068_1871)">
        <mask id="mask1_2068_1871" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="2" width="26" height="26">
          <path d="M2.5 2.77759H27.5V27.7776H2.5V2.77759Z" fill="white"/>
        </mask>
        <g mask="url(#mask1_2068_1871)">
          <path d="M9.33594 7.6604C9.33594 6.58169 8.46152 5.70728 7.38281 5.70728C6.3041 5.70728 5.42969 6.58169 5.42969 7.6604C5.42969 8.73911 6.3041 9.61353 7.38281 9.61353C8.46152 9.61353 9.33594 8.73911 9.33594 7.6604Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.6641 7.6604C20.6641 6.58169 21.5385 5.70728 22.6172 5.70728C23.6959 5.70728 24.5703 6.58169 24.5703 7.6604C24.5703 8.73911 23.6959 9.61353 22.6172 9.61353C21.5385 9.61353 20.6641 8.73911 20.6641 7.6604Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.8125 12.4944H24.5703C25.649 12.4944 26.5234 13.3688 26.5234 14.4475V18.7444C26.5234 19.8231 25.649 20.6975 24.5703 20.6975V26.801" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.6641 26.801V20.6975C19.5854 20.6975 18.7109 19.8231 18.7109 18.7444" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.1875 12.4944H5.42969C4.35098 12.4944 3.47656 13.3688 3.47656 14.4475V18.7444C3.47656 19.8231 4.35098 20.6975 5.42969 20.6975V26.801" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.33594 26.801V20.6975C10.4146 20.6975 11.2891 19.8231 11.2891 18.7444" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.9531 26.801V19.7698C18.0318 19.7698 18.9062 18.8954 18.9062 17.8167V12.4944C18.9062 11.4157 18.0318 10.5413 16.9531 10.5413H13.0469C11.9682 10.5413 11.0938 11.4157 11.0938 12.4944V17.8167C11.0938 18.8954 11.9682 19.7698 13.0469 19.7698V26.801" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.0469 5.70728C13.0469 4.62856 13.9213 3.75415 15 3.75415C16.0787 3.75415 16.9531 4.62856 16.9531 5.70728C16.9531 6.78599 16.0787 7.6604 15 7.6604C13.9213 7.6604 13.0469 6.78599 13.0469 5.70728Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10"/>
        </g>
      </g>
    </svg>`,
};

const dataIdKlaviyo = {
  base: "RQWev3",
  us: "YcWzQc",
  ie: "VvW8ER",
  ca: "S2r889",
  au: "ULJjMh",
  eu: "SX2c2y",
  de: "",
  uae: "YzB7qg",
  nz: "UTpQ4B",
  sa: "WVHJyK",
  nl: "",
  fr: "",
};

function handleVisibility(el, eventParams) {
  let isVisible = false;
  let entryTime;
  const config = {
    root: null,
    threshold: 0, // Trigger when any part of the element is out of viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!isVisible) {
          // The element has become visible
          isVisible = true;
          entryTime = new Date().getTime();
        }
      } else if (isVisible) {
        // The element is out of the viewport, calculate visibility duration
        isVisible = false;
        const exitTime = new Date().getTime();
        const visibilityDuration = (exitTime - entryTime) / 1000; // Convert to seconds
        const roundedDuration = Math.round(visibilityDuration);

        if (roundedDuration) {
          const eventData = eventParams;
          eventData[1] = roundedDuration;
          pushDataLayer(eventData);
          observer.disconnect();
        }
      }
    });
  }, config);

  observer.observe(el);
}

function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
  // Send a Google Analytics event
  const eventData = {
    event: "event-to-ga4",
    event_name,
    event_desc,
    event_type,
    event_loc,
  };

  window.dataLayer = window.dataLayer || [];
  dataLayer.push(eventData);
  console.log(
    event_name + " / " + event_desc + " / " + event_type + " / " + event_loc
  );
}

// set cookie new user
function setCookie() {
  const id = Math.random().toString(36).substr(2, 9);
  document.cookie = "user_id=" + id + "; path=/";
}

function copyText(target) {
  // Get the input element
  var inputElement = $el(target);

  inputElement.nextElementSibling.querySelector("span").innerText = "Copied";

  setTimeout(() => {
    inputElement.nextElementSibling.querySelector("span").innerText =
      inputElement.value;
  }, 2000);

  // Select the text in the input element
  inputElement.select();
  inputElement.setSelectionRange(0, 99999); // For mobile devices

  let nameEvent = inputElement.closest('.crs_popup_content').querySelectorAll('.crs_list li').length > 1 ? 'seve': 'one'
  let locEvent = nameEvent == 'one' ? 'One product ' : 'Several products '
  pushDataLayer([`exp_exi_int_popup_but_${nameEvent}first_promo`,'Promo code','Button',`Popup ${locEvent} ${inputElement.closest('.crs_popup_content').querySelector('h2').innerText}`])

  try {
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(inputElement.value);
    console.log("Text copied: " + inputElement.value);
  } catch (err) {
    console.error("Unable to copy text: ", err);
  }
}

function isUrlValid(value) {
  let res = value.match(
    /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res == null) return false;
  else return true;
}

function startTimer() {
  let minutes = 15;
  let seconds = 0;

  const timerInterval = setInterval(function () {
    // Виводимо час

    $el(".crs_timer_min").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    $el(".crs_timer_sec").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // Зменшуємо час на 1 секунду
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    }

    // Перевіряємо, чи таймер закінчився
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      console.log("Таймер завершено!");
    }
  }, 1000);
}

function getFetch(api) {
  return new Promise((resolve, reject) => {
    let webCode =
      window.autoInitData.website.websiteCode != "base"
        ? "/" + window.autoInitData.website.websiteCode
        : "";

    fetch(`${webCode}/api/${api}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

// Swiper Slider
let scriptCustom = document.createElement("script");
scriptCustom.src =
  "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
scriptCustom.async = false;

let scriptCustomStyle = document.createElement("link");
scriptCustomStyle.href =
  "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
scriptCustomStyle.rel = "stylesheet";

function initSwiper() {
  let waitForSwiper = setInterval(() => {
    if (typeof Swiper !== "undefined") {
      clearInterval(waitForSwiper);

      new Swiper(`.crs_popup[data-query="c"] .swiper`, {
        slidesPerView: 1,
        // slideToClickedSlide: true,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  });
}

let startTime = 0;
let startTimeInterval;

class ExitIntentPopup {
  constructor(device, userId, website) {
    this.device = device;
    this.currency = website.currency.list[0].symbol;
    this.isUpdateItemsInPopup = true;
    this.itemsLengthBasket = $el('basket-qty [qty-bullet]') ? parseFloat($el('basket-qty [qty-bullet]').getAttribute('qty-bullet')) : 0;
    this.userId = userId;
    this.idKlaviyoForm = dataIdKlaviyo[website.websiteCode];
    this.webCode = website.websiteCode != "base" ? "/" + website.websiteCode : "";
    this.nameCountEvent = '';
    this.locCountEvent = '';
    this.init();
  }

  init() {
    document.head.appendChild(scriptCustom);
    document.head.appendChild(scriptCustomStyle);

    this.styleAppend();

    if (this.userId == true && !sessionStorage.getItem('popupShownC') && !sessionStorage.getItem('popupShownB')) {
      this.addPopupAlmost();
      this.addPopupNewCollection();
    } else {
      this.addPopupFirst();
      this.addPopupWelcomeTo();
      setCookie()
    }

    this.updateProductsInPopup();

    const globalMutation = new MutationObserver((mutations) => {

      if (
        this.checkPageUrl() === "basket" ||
        this.checkPageUrl() === "checkout"
      ) {
        this.longInactivityInBag();
      }

      this.locCountEvent = this.itemsLengthBasket == 1 ? 'Popup One product ' :  this.itemsLengthBasket > 1 ? 'Popup Several products ' : 'Popup '
      this.nameCountEvent = this.locCountEvent.includes('One') ? 'one' : this.locCountEvent.includes('Several') ? 'seve' : ''

      $$el("action").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.stopPropagation()
          this.isUpdateItemsInPopup = false;
        });
      });

      if (this.isUpdateItemsInPopup == false) {
        this.isUpdateItemsInPopup = true;

        console.log('updated ProductsInPopup: ' + this.isUpdateItemsInPopup);
        this.updateProductsInPopup();
      }

      globalMutation.disconnect();

      globalMutation.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });

    globalMutation.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  checkPageUrl() {
    const pageUrl = window.location.href;

    if (pageUrl.includes("/checkout")) {
      return "checkout";
    } else if (pageUrl.includes("/basket")) {
      return "basket";
    } else {
      return "other";
    }
  }

  styleAppend() {
    const style = /* html */ `
      <style class="crs-style">
        .crs_c-red {
          color: var(--Sale, #8E1538);
        }
        .needsclick.kl-private-reset-css-Xuajs1 {
          opacity: 0;
          pointer-events: none;
        }
        .text-center {
          text-align: center;
        }
        .crs_popup {
          position: fixed;
          z-index: 99999999999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow-y: auto;
          opacity: 0;
          display: flex;
          pointer-events: none;
          transition: all 0.2s ease;
          background: rgba(0, 0, 0, 0.70);
          padding: 20px;
        }
        .crs_popup.active {
          opacity: 1;
          pointer-events: auto;
        }
        .crs_popup .container {
          background: #FFF;
          width: 100%;
          padding: 32px 14px 14px;
          position: relative;
          transition: all 0.2s ease;
          flex-direction: column;
          max-width: 335px;
          margin: auto;
        }
        .crs_popup_close {
          z-index: 2;
          position: absolute;
          right: 0;
          top: 0;
          padding: 10px 14px;
        }
        .crs_popup h2 {
          margin-bottom: 21px;
          color: #212121;
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 30px;
          font-family: baskerville-urw;
        }
        .crs_popup h2 span:not(.crs_c-red) {
          display: block;
          margin-top: 6px;
          color: var(--H-Black, #212121);
          font-family: source-sans-3;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .crs_popup_message {
          background: var(--Gold-100, #FFF7EC);
          border: 1px solid #EEE6DB;
          padding: 7px;
          margin: 0;
          color: var(--Black, #212121);
          font-family: source-sans-3;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px; /* 142.857% */
          text-transform: uppercase;
          position: relative;
          margin: 0 0 11px;
        }
        .crs_popup_message:after, 
        .crs_popup_message:before {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-style: solid;
          border-bottom: 0;
        }
        .crs_popup_message:before {
          border-right: 7px solid transparent;
          border-left: 7px solid transparent;
          border-top: 11px solid #EEE6DB;
        }
        .crs_popup_message:after {
          border-right: 6px solid transparent;
          border-left: 6px solid transparent;
          border-top: 10px solid #FFF7EC;
        }
        .crs_list {
          overflow: scroll;
          padding: 14px;
          margin: 0 -14px 14px;
          display: flex;
        }
        .crs_list img {
          width: 175px;
          height: 110px;
          background: #F6F6F6;
          border-radius: 4px;
          object-fit: contain;
        }
        .crs_list_1 .crs_list img {
          height: 123px;
          width: 116px;
          margin-right: 16px;
        }
        .crs_list p {
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          color: var(--H-Black, #212121);
          font-family: source-sans-3;
        }
        .crs_list_1 .crs_list p {
          margin-bottom: 4px;
        }
        div:not(.crs_list_1) > .crs_list li {
          text-align: center;
          padding: 0 5px;
          margin: 0 auto;
          max-width: 185px;
        }
        .crs_list p b {
          font-weight: 600;
        }
        .crs_list_1 .crs_list li {
          display: flex;
          align-items: center;
        }
        div:not(.crs_list_1) > .crs_list {
          text-align: center;
        }
        p.crs_popup_span {
          font-size: 14px;
          color: var(--Grey-300, #ACACAC);
        }
        p.crs_popup_stars {
          font-size: 18px;
          margin-left: -3px;
        }
        p.crs_popup_stars b {
          margin-left: 3px;
        }
        .crs_popup_info {
          border: 1px solid var(--Border, #D0D2D3);
          padding: 12px 10px;
          margin: 0 0 14px;
          color: var(--Black, #212121);
          font-family: source-sans-3;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
        }
        .crs_popup_info svg {
          margin-right: 8px;
          flex-shrink: 0;
        }
        .crs_popup_complete {
          background: var(--Black, #000);
          padding: 14px;
          text-align: center;
          width: 100%;
          color: var(--White, #FFF);
          font-family: source-sans-3;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px;
          display: block;
        }
        .crs_list.gap-6::-webkit-scrollbar {
          background: #F0F0F0;
          border-radius: 2px;
          width: 5px;
          hegiht: 5px;
        }
        .crs_list.gap-6::-webkit-scrollbar-thumb {
          background: #212121;
          border-radius: 2px;
        }
        @media (max-width: 769px) {
          .crs_popup_close svg {
            width: 14px;
            height: 14px;
          }
          .crs_popup_close svg path {
            fill: #B3B3B3;
          }
        }
        @media (min-width: 770px) {
          .crs_popup[data-query="c"] .container,
          .crs_popup[data-query="b"] .container {
            padding: 0;
            max-width: 890px;
            flex-direction: row;
          }
          .crs_popup[data-query="d"] .container {
            max-width: 800px;
            padding: 20px 10px;
          }
          .crs_popup .crs_popup_content {
            padding: 20px 36px;
            width: 445px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .crs_popup .crs_popup_content + img {
            width: 445px;
          }
          .crs_popup_close svg {
            width: 18px;
            height: 18px;  
          }
          .crs_popup_close svg * {
            fill: #393F46; 
          }
          .crs_popup_close {
            padding: 10px!important;
            border-radius: 30px;
            background: #FFF;
            top: 10px;
            right: 10px;
            display: flex;
          }
          div:not(.crs_list_1) > .crs_list {
            max-height: 190px;
          }
          [data-query="a"] div:not(.crs_list_1) > .crs_list {
            max-height: 307px;
          }
          div:not(.crs_list_1) > .crs_list li {
            margin: 0;
            max-width: 100%;
            text-align: left;
          }
          div:not(.crs_list_1) > .crs_list li:not(:last-child) {
            margin: 0 0 12px 0;
          }
          .crs_popup .container {
            padding: 34px 36px 20px;
            max-width: 560px;
          }
          .crs_list img {
            width: 147px;
            height: 101px;
            margin-right: 24px;
            flex-shrink: 0;
          }
          .crs_list li {
            display: flex;
            align-items: center;
          }
          .crs_list.gap-6 {
            gap: 12px;
            max-height: 294px;
            margin-bottom: 20px;
          }
          .crs_list.gap-6::-webkit-scrollbar {
            background: #fff;
          }
          .crs_list.gap-6::-webkit-scrollbar-thumb {
            background: #F0F0F0;
          }
          .crs_popup_info {
            margin: 0 0 20px;
          }
          
          .crs_list {
            display: block;
          }
          .flex-md {
            display: flex;
          }
        }
      </style>
    `;
    if (!$el(".crs-style")) {
      $el("body").insertAdjacentHTML("afterbegin", style);
    }
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  longInactivityInBag() {
    let idleTimer;
    const idleTime = 60000; // час (в мілісекундах), який вважається "неактивним"

    const page = this.checkPageUrl()
    const showPopupTimer = () => this.showPopup()

    function resetIdleTimer() {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        if (
          page === "basket" ||
          page === "checkout"
        ) {
          showPopupTimer()
        }
      }, idleTime);
    }

    // Додайте обробники подій для відслідковування активності користувача
    document.addEventListener("mousemove", resetIdleTimer);
    document.addEventListener("keydown", resetIdleTimer);
    document.addEventListener("click", resetIdleTimer);

    // Початкове запускання таймера
    resetIdleTimer();
  }

  showPopup() {
    if ($el(".crs_popup.active")) return;

    console.log(this.itemsLengthBasket)

    startTime = 0;

    if ($el(`.crs_popup .crs_list`)) {
      $el(`.crs_popup .crs_list`).scrollLeft =
        ($el(".crs_list").scrollWidth - $el(".crs_list").clientWidth) / 2;
    }

    startTimeInterval = setInterval(() => {
      startTime += 1;
    }, 1000);

    if (this.itemsLengthBasket == 0) {
      if (
        !sessionStorage.getItem("popupShownB") &&
        $el(`.crs_popup[data-query="b"]`)
      ) {
        sessionStorage.setItem("popupShownB", "true");

        window._klOnsite = window._klOnsite || [];
        window._klOnsite.push(["openForm", this.idKlaviyoForm]);

        $el(`.crs_popup[data-query="b"]`).classList.add("active");
      } else if (
        !sessionStorage.getItem("popupShownD") &&
        $el(`.crs_popup[data-query="d"]`)
      ) {
        sessionStorage.setItem("popupShownD", "true");
        $el(`.crs_popup[data-query="d"]`).classList.add("active");
      }
    } else {
      if (
        !sessionStorage.getItem("popupShownA") &&
        $el(`.crs_popup[data-query="a"]`)
      ) {
        sessionStorage.setItem("popupShownA", "true");
        $el(`.crs_popup[data-query="a"]`).classList.add("active");
      } else if (
        !sessionStorage.getItem("popupShownC") &&
        $el(`.crs_popup[data-query="c"]`)
      ) {
        sessionStorage.setItem("popupShownC", "true");
        $el(`.crs_popup[data-query="c"]`).classList.add("active");
        startTimer();
      }
    }
  }

  actionExitIntentPopup() {

    const showPopupDesk = () => {
      console.log(this.itemsLengthBasket);
      this.showPopup()
    }

    if (this.device == "desktop") {
      let x = 0,
        y = 0;
      window.addEventListener("mousemove", function (e) {
        x = e.clientX;
        y = e.clientY;
      });
      document.body.addEventListener(
        "mouseleave",
        function () {
          if (
            x < 50 ||
            y < 50 ||
            x > window.innerWidth - 50 ||
            y > window.innerHeight - 50
          ) {
            if ($$el(".crs_popup").length > 1) {
              showPopupDesk()
            }
            
          }
        },
        { once: true }
      );
    }

    let speedValue = /android/i.test(navigator.userAgent) ? 150 : 150;

    let lastPosition = 0,
      newPosition = 0,
      currentSpeed = 0;

    let scrollSpeed = () => {
      lastPosition = window.scrollY;
      setTimeout(() => {
        newPosition = window.scrollY;
      }, 100);

      currentSpeed = newPosition - lastPosition;

      if (currentSpeed > speedValue && window.scrollY != 0) {
        console.log("currentSpeed: " + currentSpeed);

        document.removeEventListener("scroll", scrollSpeed);
        this.showPopup();
      }
    };

    document.addEventListener("scroll", scrollSpeed);
  }

  actionPopup(selector) {
    let locEvent = selector.querySelector('h2').innerText.includes('Would you like') ? 'Welcome to LeMieux' : selector.querySelector('h2').innerText
    let nameEvent = locEvent.toLowerCase().includes('almost yours') ? 'almo' : locEvent.toLowerCase().includes('welcome') ? 'welcome' : locEvent.toLowerCase().includes('check out now') ? 'first' : 'autwint'

    selector.querySelector(".crs_popup_close").addEventListener("click", () => {
      clearInterval(startTimeInterval);
      selector.classList.remove("active");

      pushDataLayer([
        `exp_exi_int_popup_but_${this.nameCountEvent+nameEvent}_clos`,
        "Close",
        "Button",
        this.locCountEvent + locEvent
      ])
      pushDataLayer([
        `exp_exi_int_popup_vis_${this.nameCountEvent+nameEvent}_focu`,
        startTime,
        "Visibility",
        this.locCountEvent + locEvent
      ])
    });

    selector.addEventListener("click", (e) => {
      if (e.target.classList.contains("crs_popup")) {
        clearInterval(startTimeInterval);
        selector.classList.remove("active");

        pushDataLayer([
          `exp_exi_int_popup_vis_${this.nameCountEvent+nameEvent}_focu`,
          startTime,
          "Visibility",
          this.locCountEvent + locEvent
        ])
      }
    });

    if (selector.getAttribute('data-query') == 'd') {
      selector.querySelectorAll(".crs_popup_complete").forEach(item => {
        item.addEventListener('click', (e) => {
          pushDataLayer([
            `exp_exi_int_popup_but_autwint_kit`,
            `${item.closest('.col-md-4').querySelector('p').innerText} - Shop Now`,
            "Button",
            "Popup Autumn/winter 2024 most wanted"
          ])

          clearInterval(startTimeInterval);

          pushDataLayer([
            `exp_exi_int_popup_vis_autwint_focu`,
            startTime,
            "Visibility",
            "Popup Autumn/winter 2024most wanted"
          ])
        })
      })

      return
    }

    selector
      .querySelector(".crs_popup_complete")
      .addEventListener("click", (e) => {
        e.preventDefault();

        console.log( e.target)
        let nameBtn = e.target.innerText.includes('Complete') ? 'compl' : e.target.innerText.includes('Sign up') ? 'sign' : 'check'

        pushDataLayer([
          `exp_exi_int_popup_but_${this.nameCountEvent+nameEvent}_${nameBtn}`,
          e.target.innerText,
          "Button",
          this.locCountEvent + locEvent
        ])

        if (selector.getAttribute("data-query") == "b") {
          let value = selector.querySelector("input").value;

          if (value != "" && isUrlValid(value)) {
            console.log("sing up true");
            selector
              .querySelector("input")
              .parentElement.classList.remove("crs_error");

            let waitFoundBtnKlaviyo = setInterval(() => {
              if (
                $el('.needsclick.kl-private-reset-css-Xuajs1 [type="email"]')
              ) {
                clearInterval(waitFoundBtnKlaviyo);

                const inputElement = $el(
                  '.needsclick.kl-private-reset-css-Xuajs1 input[type="email"]'
                );
                inputElement.value = value;
                inputElement.dispatchEvent(
                  new Event("input", { bubbles: true })
                );

                console.log(value);
                console.log(inputElement.value);
                console.log(
                  $el(
                    '.needsclick.kl-private-reset-css-Xuajs1 [data-testid="form-component"] button'
                  )
                );

                $el(
                  '.needsclick.kl-private-reset-css-Xuajs1 [data-testid="form-component"] button'
                ).click();

                let waitGetDiscount = setInterval(() => {
                  if (
                    $el(".needsclick.kl-private-reset-css-Xuajs1") &&
                    ($el(".needsclick.kl-private-reset-css-Xuajs1")
                      .innerText.toUpperCase()
                      .includes("LMWELCOME10") ||
                      $el(".needsclick.kl-private-reset-css-Xuajs1")
                        .innerText.toUpperCase()
                        .includes("FIRSTORDERFREE"))
                  ) {
                    clearInterval(waitGetDiscount);
                    clearInterval(startTimeInterval);

                    selector.classList.remove("active");

                    pushDataLayer([
                      `exp_exi_int_popup_vis_${this.nameCountEvent+nameEvent}_focu`,
                      startTime,
                      "Visibility",
                      this.locCountEvent + locEvent
                    ])

                    document.body.insertAdjacentHTML(
                      "afterbegin",
                      `
                      <style class="crs_style_klaviyo">
                        .needsclick.kl-private-reset-css-Xuajs1 {
                          opacity: 1!important;
                          pointer-events: auto!important;
                        }
                      </style`
                    );
                  }
                }, 100);
              } else {
                window._klOnsite = window._klOnsite || [];
                window._klOnsite.push(["openForm", e.target.dataset.id]);
              }
            }, 100);
          } else {
            console.log("sing up false");
            selector
              .querySelector("input")
              .parentElement.classList.add("crs_error");
          }

          return;
        }

        clearInterval(startTimeInterval);
    
        pushDataLayer([
          `exp_exi_int_popup_vis_${this.nameCountEvent+nameEvent}_focu`,
          startTime,
          "Visibility",
          this.locCountEvent + locEvent
        ])

        if (this.checkPageUrl() != "checkout") {
          window.location.href = this.webCode + "/checkout/";
        } else {
          selector.classList.remove("active");
        }

      });
  }

  addPopupFirst() {
    const popup = `
    <div class="crs_popup" data-query="c">
    <style>
      .crs_list_1 {
        border: 1px dashed var(--Border, #D0D2D3);
      }
      .crs_list_1 .crs_list {
        margin: 0;
        padding: 12px;
      }
      .crs_popup_info {
        background: #F3F5F4;
        padding: 7px 12px;
        border: none;
        margin: 0;
      }
      .crs_code h4 {
        color: var(--H-Black, #212121);
        font-family: source-sans-3;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        margin: 16px 0 9px;
      }
      .crs_code button {
        border: 1px solid var(--Borders, #CECDCD);
        background: var(--White, #FFF);   
        padding: 15px 16px;
        color: var(--Sale, #8E1538);
        font-family: source-sans-3;
        width: 100%;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        letter-spacing: 0.96px;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .crs_timer {
        color: #000;
        font-family: baskerville-urw;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 36px; 
        position: relative;
        z-index: 2;
      }
      .crs_timer > div > div {
        letter-spacing: 23px;
        min-width: 82px;
        position: relative;
        z-index: 2;
      }
      .crs_timer > div:first-child {
        margin-right: -5px;
      }
      .crs_timer > div:last-child {
        margin-right: -17px;
      }
      .crs_timer p {
        color: var(--Grey-300, #ACACAC);
        font-family: source-sans-3;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        margin: 14px 0 16px;
      }
      .crs_timer_sec {
        margin-left: 17px;
      }
      .crs_timer_min {
        margin-left: -5px;
      }
      .crs_timer_sec:before, 
      .crs_timer_sec:after ,
      .crs_timer_min:before,
      .crs_timer_min:after {
          content: '';
          position: absolute;
          top: -2px;
          width: 40px;
          height: 46px;
          z-index: -1;
          background: #F3F5F4;
      }
      .crs_timer_sec:before,
      .crs_timer_min:before {
          left: -11px;
      }
      .crs_timer_sec:after,
      .crs_timer_min:after {
          right: 11px;
      }
      .crs_timer_sec+ p {
        margin-left: -5px;
      }
      .crs_timer_min+ p {
        margin-left: -28px;
      }
      @media (max-width: 769px) {
        .crs_popup .swiper {
          display: none;
        }
      }
      @media (min-width: 769px) {
        .crs_popup_info {
          padding: 6px 10px;
        }
        .crs_popup_info svg {
          width: 28px;
          height: 28px;
        }
        .swiper-pagination {
          display: flex!important;
          justify-content: center;
          align-items: center;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #fff;
          border: 4px solid transparent;
          margin: 0 3px 33px!important;
          opacity: 1;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          border-color: #C0C0C0;
          width: 20px;
          height: 20px;
        }
        .crs_popup .swiper {
          width: 445px;
          min-height: 547px;
          margin: 0;
        }
        .crs_popup .swiper img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    </style>
        <div class="container flex">
            <button class="crs_popup_close" type="button">
                ${dataIcons.closeIcon}
            </button>
            <div class="crs_popup_content">
              <h2 class="text-center">
                ${this.idKlaviyoForm == "RQWev3" ? 
                `Check out now and get <br><span class="crs_c-red">free delivery</span>  on your first order` : 
                `Check out now and get <br><span class="crs_c-red">10% off</span> your first order`}
              </h2>
              <div class="crs_timer flex text-center flex-justify-center">
                <div>
                  <div class="crs_timer_min">15</div>
                  <p>minutes</p>
                </div>
                :
                <div>
                  <div class="crs_timer_sec">00</div>
                  <p>seconds</p>
                </div>
              </div>
              <div class="crs_list_1">
                <ul class=" crs_list"></ul>
            
                <div class="crs_popup_info flex flex-middle">
                  ${dataIcons.peopleIcon}
                    <p> Popular product. <b>${this.getRandomNumber(
                      1,
                      10
                    )} people</b> are currently looking at it.</p>
                </div>
              </div>
              <div class="crs_code">
                <h4 class="text-center">Enter code at checkout</h4>
                <input type="text" value="${this.idKlaviyoForm == "RQWev3" ? 'FIRSTORDERFREE' : 'LMWELCOME10'}" hidden>
                <button type="button" class="flex flex-justify-between flex-middle" onclick="copyText('.crs_code input')">
                  <span>${this.idKlaviyoForm == "RQWev3" ? 'FIRSTORDERFREE' : 'LMWELCOME10'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14.3877 0H5.30462C4.8775 0.00162093 4.46835 0.172009 4.16633 0.474025C3.86432 0.77604 3.69393 1.1852 3.69231 1.61231V3.69231H1.61231C1.1852 3.69393 0.77604 3.86432 0.474025 4.16633C0.172009 4.46835 0.00162093 4.8775 0 5.30462V14.3877C0.00162093 14.8148 0.172009 15.224 0.474025 15.526C0.77604 15.828 1.1852 15.9984 1.61231 16H10.6954C11.1225 15.9984 11.5317 15.828 11.8337 15.526C12.1357 15.224 12.3061 14.8148 12.3077 14.3877V12.3077H14.3877C14.8148 12.3061 15.224 12.1357 15.526 11.8337C15.828 11.5317 15.9984 11.1225 16 10.6954V1.61231C15.9984 1.1852 15.828 0.77604 15.526 0.474025C15.224 0.172009 14.8148 0.00162093 14.3877 0ZM11.0769 14.3877C11.0769 14.4889 11.0367 14.5859 10.9652 14.6575C10.8936 14.729 10.7966 14.7692 10.6954 14.7692H1.61231C1.51112 14.7692 1.41407 14.729 1.34252 14.6575C1.27097 14.5859 1.23077 14.4889 1.23077 14.3877V5.30462C1.23077 5.20343 1.27097 5.10638 1.34252 5.03483C1.41407 4.96327 1.51112 4.92308 1.61231 4.92308H10.6954C10.7966 4.92308 10.8936 4.96327 10.9652 5.03483C11.0367 5.10638 11.0769 5.20343 11.0769 5.30462V14.3877ZM14.7692 10.6954C14.7692 10.7966 14.729 10.8936 14.6575 10.9652C14.5859 11.0367 14.4889 11.0769 14.3877 11.0769H12.3077V5.30462C12.3061 4.8775 12.1357 4.46835 11.8337 4.16633C11.5317 3.86432 11.1225 3.69393 10.6954 3.69231H4.92308V1.61231C4.92308 1.51112 4.96327 1.41407 5.03483 1.34252C5.10638 1.27097 5.20343 1.23077 5.30462 1.23077H14.3877C14.4889 1.23077 14.5859 1.27097 14.6575 1.34252C14.729 1.41407 14.7692 1.51112 14.7692 1.61231V10.6954Z" fill="#8E1538"/>
                  </svg>
                </button>
              </div>
              <a href="/checkout" class="crs_popup_complete">Checkout Now</a>
            </div>
            <swiper class="swiper d-md-block d-none">
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
            </swiper>
        </div>
    </div>`;

    if ($el(".crs_popup[data-query='c']")) return;

    document.body.insertAdjacentHTML("beforeend", popup);

    this.actionPopup($el(".crs_popup[data-query='c']"));

    // this.updateProductsInPopup();
  }

  addPopupAlmost() {
    const popup = `
    <div class="crs_popup" data-query="a">
        <div class="container flex">
            <button class="crs_popup_close" type="button">
                ${dataIcons.closeIcon}
            </button>
            <h2 class="text-center">It’s almost yours!
                <span>Only one step left:</span>
            </h2>
            <div class="crs_popup_message text-center">Popular choice, <br>we may run out of stock soon</div>

            <div class="crs_list_1">
              <ul class=" crs_list"></ul>
            </div>
         
            <div class="crs_popup_info flex items-center">
               ${dataIcons.peopleIcon}
                <p>There are <b>${this.getRandomNumber(
                  4,
                  15
                )} people</b> looking at this product. We can’t guarantee its availability if you don't complete the purchase now</p>
            </div>
            <a href="#" class="crs_popup_complete">Complete my order now</a>
            
        </div>
    </div>`;

    if ($el(".crs_popup[data-query='a']")) return;

    console.log("addPopupAlmost");
    document.body.insertAdjacentHTML("beforeend", popup);

    this.actionPopup($el(".crs_popup[data-query='a']"));

    // this.updateProductsInPopup();
  }

  addPopupWelcomeTo() {
    let id = this.idKlaviyoForm;

    const popup = `
    <div class="crs_popup" data-query="b">
      <style>
        .crs_popup h4 {
          color: var(--H-Black, #212121);
          font-family: source-sans-3;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
          margin-bottom: 12px;
        }
        .crs_popup h2 span:not(.crs_c-red) {
          font-size: 16px;
          margin-top: 8px;
          text-transform: none;
          letter-spacing: normal;
          color: var(--Body-grey, #595959);
        }
        .crs_popup input {
          border: 1px solid var(--Borders, #CECDCD);
          background: var(--White, #FFF);
          font-family: source-sans-3;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 1px;
          padding: 10px 16px;
          width: 100%;
          margin-bottom: 12px;
        }
        .crs_popup[data-query="b"] .container {

        }
      </style>
        <div class="container flex">
            <button class="crs_popup_close" type="button">
                ${dataIcons.closeIcon}
            </button>
            <div class="crs_popup_content">
              <h4 class="text-center">Welcome to LeMieux</h4>
              <h2 class="text-center">
                ${
                  id == "RQWev3"
                    ? `Would you like Free <br> UK Delivery? <span>Enter your email to get free delivery on<br> your first order</span>`
                    : `Would you like <span class="crs_c-red">10% off</span> your first order?
                <span>Enter your email to get 10% off your first order</span>`
                }
              </h2>
              <input type="email" placeholder="Email" onclick="pushDataLayer(['exp_exi_int_popup_inp_welcome_emai','Email','Input','Popup Welcome to LeMieux'])">
              <a href="#" class="crs_popup_complete" data-id="${id}">Sign up</a>
            </div>
            <img src="${dir}image-welcome.png" alt="image" class="d-md-block d-none" height="537px">
        </div>
      </div>
      `;

    if ($el('.crs_popup[data-query="b"]')) return;
    if (id == "") return;

    document.body.insertAdjacentHTML("beforeend", popup);

    console.log(
      "addPopupWelcomeTo this.itemsLengthBasket: " + this.itemsLengthBasket
    );
    console.log("addPopupWelcomeTo id: " + id);

    this.actionPopup($el('.crs_popup[data-query="b"]'));

    setTimeout(() => {
      if (
        !sessionStorage.getItem("popupShownB") &&
        this.itemsLengthBasket == 0
      ) {
        console.log('setTimeout showPopupWelcomeTo: ' + this.itemsLengthBasket)

        sessionStorage.setItem("popupShownB", "true");

        window._klOnsite = window._klOnsite || [];
        window._klOnsite.push(["openForm", id]);

        $el(`.crs_popup[data-query="b"]`).classList.add("active");
      }
    }, 20000);
  }

  addPopupNewCollection() {
    const popup = `
      <div class="crs_popup" data-query="d">
      <style>
        .col-md-4 {
          width: 100%;
        }
        .crs_popup[data-query="d"] p {
          color: #FFF;
          font-family: baskerville-urw;
          font-size: 25px;
          font-style: normal;
          font-weight: 600;
          line-height: 30px;
          text-transform: uppercase;
          padding: 14px;
        }
        .crs_popup[data-query="d"] img {
          width: 165px;
          height: 133px;
          flex-shrink: 0;
          object-fit: cover;
          object-position: top;
        }
        @media (max-width: 769px) {
          .crs_popup[data-query="d"] p {
            width: calc(100% - 165px);
            height: 133px;
          }
          .crs_popup[data-query="d"] .container {
            padding: 34px 0 0 0;
          }
          .crs_popup[data-query="d"] a {
            position: absolute;
            right: 14px;
            bottom: 14px;
            width: calc(100% - 165px - 28px);
            background: #FFF;
            color: #000;
            padding: 12px;
          }
          .col-md-4 {
            display: flex;
            flex-direction: row-reverse;
            position: relative;
          }
          .col-md-4:not(:last-child) {
            padding-bottom: 4px;
          }
          .crs_popup[data-query="d"] h2 {
            font-size: 30px;
            line-height: 32px;
          }
        }
        @media (min-width: 770px) {
          .col-md-4 {
            padding: 0 10px;
            width: 33.33%;
          }
          .crs_popup[data-query="d"] h2 {
            font-size: 35px;
            line-height: 38px;
          }
          .crs_popup[data-query="d"] h2 span {
            font-size: 20px;
          }
          .crs_popup[data-query="d"] p {
            text-align: center;
            padding: 21px;
            width: 100%;
          }
          .crs_popup[data-query="d"] img {
            width: 100%;
            height: 286px;
          }
          .crs_popup[data-query="d"] a  {
            margin-top: 20px;
          }
        }
      </style>
        <div class="container flex">
            <button class="crs_popup_close" type="button">
                ${dataIcons.closeIcon}
            </button>
            <h2 class="text-center">Autumn/winter 2024 most wanted
              <span>SHOP the season’s most popular designs</span>
            </h2>
            <div class="flex-md">
              <div class="col-md-4">
                <p style="background-color: #743F45;">Orchid</p>
                <img src="${dir}new_collection_1.png" alt="image Orchid">
                <a href="https://www.lemieux.com${this.webCode}/collections/colour/atlantic" class="crs_popup_complete">Shop Now</a>
              </div>
              <div class="col-md-4">
                <p style="background-color: #192D2E;">Spruce</p>
                <img src="${dir}new_collection_2.png" alt="image Spruce">
                <a href="https://www.lemieux.com${this.webCode}/collections/colour/spruce" class="crs_popup_complete">Shop Now</a>
              </div>
              <div class="col-md-4">
                <p style="background-color: #2A3642;">Atlantic</p>
                <img src="${dir}new_collection_3.png" alt="image Atlantic">
                <a href="https://www.lemieux.com${this.webCode}/collections/colour/orchid" class="crs_popup_complete">Shop Now</a>
              </div>
            </div>
        </div>
      </div>
      `;

    if ($el('.crs_popup[data-query="d"]')) return;

    document.body.insertAdjacentHTML("beforeend", popup);

    this.actionPopup($el('.crs_popup[data-query="d"]'));
  }

  updateProductsInPopup() {
    const listPopup = $el(`.crs_popup .crs_list`);

    listPopup.innerHTML = "";

    console.log("updateProductsInPopup");

    getFetch("p/customer/data").then((data) => {
      const itemsBasket = data["customer"]["cart"]["items"];
      let slide = "";

      console.log(itemsBasket);

      this.itemsLengthBasket = itemsBasket.length;

      if (this.itemsLengthBasket == 1) {
        $el(`.crs_popup .crs_list`).parentElement.classList.add("crs_list_1");
      } else {
        $el(`.crs_popup .crs_list`).parentElement.classList.remove(
          "crs_list_1"
        );
      }

      if (this.itemsLengthBasket > 0) {
        for (let i = 0; i < this.itemsLengthBasket; i++) {
          getFetch(`n/product/${itemsBasket[i].product}/verbosity/3`).then(
            (dataItem) => {
              const item = dataItem.result[0];

              console.log(item);

              let size;
              let color;
              let options = ''

              const isBundle = item.type_id == "bundle" ? 'Bundle' : ''

              if (isBundle == '') {
                if (item.size) {
                  size = JSON.stringify(window.autoInitData.data.attribute)
                    .split(`${item.size},"label":"`)[1]
                    .split('"')[0];
                  size = size.split("\\") ? size.replace("\\", '"') : size;
                }
                if (item.color) {
                  color = JSON.stringify(window.autoInitData.data.attribute)
                    .split(`${item.color},"label":"`)[1]
                    .split('"')[0];
                }
                options = `${size} | ${color}`
              } else {
                options = isBundle
              }

              let stars = '';
              
              if (item.reviews) {
                  //stars
                  let reviewRating = (item.reviews.rating / 10 / 2).toFixed(1);

                  let iWholeStars = Math.floor(reviewRating);
                  let iEmptyStars = 5 - Math.ceil(reviewRating);

                  let blnHalfStar = (iWholeStars < reviewRating);
              
                  for (var iStar = 1; iStar <= iWholeStars; iStar++) {
                      stars += '<i class="rate-full"></i>'
                  }
              
                  if (blnHalfStar) {
                      stars += '<i class="rate-half"></i>'
                  } 
                  for (let iEmp = 0; iEmp < iEmptyStars; iEmp++) {
                      stars += '<i class="rate-empty"></i>'
                  }
                

              }

              $el(`.crs_popup .crs_list`).insertAdjacentHTML(
                "beforeend",
                `<li data-id="${itemsBasket[i].id}" data-product="${
                  itemsBasket[i].product
                }">
                <img src="/static/media/catalog${item.image}" alt="${
                  item.meta.title
                }">
                <div>
                    <p class="crs_popup_name"><b>${item.meta.title}</b></p>
                    <p class="crs_popup_span">${options}</p>
                    <p class="crs_popup_price"><b>${
                      this.currency + itemsBasket[i].price
                    }</b></p>
                    ${stars != '' ? `<rating class="crs_popup_stars flex">${stars} <b>(${item.reviews.count})</b></rating>` : ''}
                </div>
              </li>`
              );

              if ($el('.crs_popup[data-query="c"] .swiper-wrapper')) {
                let image = item.image_alt && item.image_alt != 'undefined' ? item.image_alt : item.media[0].image
                console.log(image)
                slide += `<div class="swiper-slide"><img src="/static/media/catalog${image}" alt="image"></div>`;
              }

              if (
                i >= this.itemsLengthBasket - 1 &&
                $el('.crs_popup[data-query="c"] .swiper-wrapper')
              ) {
                console.log("init swiper");
                $el('.crs_popup[data-query="c"] .swiper-wrapper').innerHTML =
                  slide;
                initSwiper();
              }
            }
          );
        }
      }

      this.actionExitIntentPopup();
    });
  }
}

let waitWebsiteCode = setInterval(() => {
  if (window.autoInitData.website && window.autoInitData.website.websiteCode && window.autoInitData.website.currency && window.autoInitData.website.currency.list[0].symbol) {
    clearInterval(waitWebsiteCode)

    const userId = document.cookie.includes("user_id=") ? true : false;
    const website = window.autoInitData.website
    console.log(window.autoInitData.website.currency.list[0].symbol)
    new ExitIntentPopup(device, userId, website);
  }
})
