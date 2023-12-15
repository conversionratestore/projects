const dir = "https://conversionratestore.github.io/projects/7879co/img/";

const $$el = (selector) => document.querySelectorAll(selector);
const $el = (selector) => document.querySelector(selector);

const device = window.innerWidth < 769 ? "mobile" : "desktop";

let dataCart = [];

let usedDefaultLog = false;
let isProductsInCart = false;
let clickAddToCart = false;

let startTime = 0;
let startTimeInterval;

function addCommasToNumber(number) {
  var parts = number.toString().split(".");
  var integerPart = parts[0];
  var decimalPart = parts.length > 1 ? "." + parts[1] : "";

  var formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedIntegerPart + decimalPart;
}

function handleScroll(e) {
  let verticalScrollPercentage =
    (e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight)) *
    100;
  this.pushDataLayer([
    "exp_exit_int_popup_scro_almos_vert",
    `percent_scrolled: ${verticalScrollPercentage}`,
    "Scroll ",
    "Popup It’s almost yours! Products group",
  ]);
}

class ExitIntentPopup {
  constructor(device) {
    this.device = device;
    this.init();
    this.isLongInactivityInBag = false
  }

  init() {
    const globalMutation = new MutationObserver((mutations) => {
      this.styleAppend();
      this.addDataCartInStorage();
      this.addPopup();

      if (this.checkPageUrl() === "bag" || this.checkPageUrl() === "checkout") {
        this.longInactivityInBag();
      } else {
        this.isLongInactivityInBag = false
      }
      if (this.checkPageUrl() === "bag") {
        this.removeItemCartInStorage();

        if (localStorage.getItem('showPopupRegister')) {
          localStorage.removeItem('showPopupRegister')
          $el('[data-testid="checkout-button"]').click()
        }
      }

      if (this.checkPageUrl() === "checkout" && 
          clickAddToCart == false && 
          this.device == 'mobile'
      ) {
        $$el('button').forEach(item => {
          if (item.innerText.includes('Save and Continue')) {
            item.addEventListener('click', () =>{
              clickAddToCart = true

              if (window.scrollY == 0) {
                clickAddToCart = false;
              }
      
              window.addEventListener("scroll", (e) => {
                if (window.scrollY == 0) {
                  clickAddToCart = false;
                }
              });
            })
          }
        })
      }


      if (
        isProductsInCart == false &&
        localStorage.getItem("crs_cart") &&
        $el(".crs_popup .crs_list")
      ) {
        isProductsInCart = true;
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
    } else if (pageUrl.includes("/bag/")) {
      return "bag";
    } else if (pageUrl.includes("/shop/")) {
      return "shop";
    } else if (pageUrl.includes("/collections/")) {
      return "collections";
    } else if (pageUrl.includes("/about-us")) {
      return "about-us";
    } else {
      return "other";
    }
  }

  styleAppend() {
    const style = /* html */ `
      <style class="crs-style">
        body.crs_fixed {
          overflow: hidden!important;
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
            background: rgba(12, 10, 10, 0.60);
        }
        .crs_popup.active {
          opacity: 1;
          pointer-events: auto;
        }
        .crs_popup .container {
            background: #FFF;
            width: 100%;
            padding: 40px 24px 16px;
            position: relative;
            transition: all 0.2s ease;
            flex-direction: column;
            max-width: 580px;
            margin: auto;
        }
        .crs_popup_close {
            position: absolute;
            right: 0;
            top: 0;
            padding: 12px;
        }
        .crs_popup h2 {
            font-size: 28px;
            font-style: normal;
            font-weight: 400;
            line-height: 32px; /* 114.286% */
            text-transform: uppercase;
            margin-bottom: 16px;
        }
        .crs_popup h2 span {
            display: block;
            color: var(--Grey, #484850);
            font-size: 16px;
            line-height: 24px; 
            margin-top: 4px;
            text-transform: initial;
        }
        .crs_popup_message {
            background: var(--Gold-100, #E2D098);
            padding: 8px;
            margin: 0 0 24px;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px; /* 123.077% */
            text-transform: uppercase;
        }
        .crs_list img {
            width: 72px;
            height: 72px;
            margin-right: 12px;
            background: #F4F4F5;
        }
        .crs_list p {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin-bottom: 4px;
        }
        .crs_list p b {
          font-weight: 600;
        }
        .crs_list {
          overflow-y: auto;
          margin-bottom: 20px;
        }
        .crs_list:not(.crs_list_1) li {
          display: flex;
        }
        .crs_list_1 {
            text-align: center;
        }
        .crs_list_1 img {
            width: 192px;
            height: 160px;
            margin: 0 auto 12px;
        }
        .crs_popup_name,
        .crs_popup_price {
            font-weight: 600;
            margin-bottom: 4px;
        }
        .crs_popup_span {
            color: #878789;
        }
        .crs_list p.crs_popup_left_stock {
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; 
            margin: 0;
        }
        .crs_popup_left_stock:not(.flex) {
            display: none;
        }
        .crs_popup_left_stock svg {
            margin-right: 4px;
        }
        .crs_popup_info {
            background: #F4F4F5;
            padding: 8px 12px;
            color: var(--Grey, #484850);
            font-size: 13px;
            font-weight: 500;
            line-height: 16px;
            margin: 0 0 20px;
        }
        .crs_popup_info:not(.flex) {
            display: none;
        }
        .crs_popup_info svg {
            margin-right: 12px;
            flex-shrink: 0;
        }
        .crs_popup_complete {
          background: var(--Black, #000);
          padding: 16px;
          color: #FFF;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; 
          text-align: center;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          margin: auto auto 0;
          max-width: 360px;
          width: 100%;
        }
        @media (max-width: 769px) {
          .crs_popup .container {
            height: 100%;
          }
          .crs_popup_message {
            margin: 0 -24px 16px;
          }
        }
        @media (min-width: 770px) {
          .crs_popup .container {
            padding: 48px 24px;
          }
          .crs_list img {
            width: 120px;
            height: 120px;
            margin-right: 16px;
          }
          .crs_list_1 img {
            width: 168px;
            height: 140px;
            margin: 0 auto 16px;
          }
          .crs_list:not(.crs_list_1) li > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .crs_list p.crs_popup_left_stock {
            margin: 10px 0 0 0;
          }
          .crs_list.gap-6 {
            gap: 16px;
            max-height: 294px;
            margin-bottom: 24px;
          }
          .crs_list.gap-6::-webkit-scrollbar {
            background: #D5D5D8;
            border-radius: 2px;
            width: 2px;
            height: 2px;
          }
          .crs_list.gap-6::-webkit-scrollbar-thumb {
            background: #000;
            border-radius: 2px;
          }
          .crs_popup_info {
            margin: 0 0 24px;
            padding: 8px 16px;
            font-size: 14px;
            line-height: 20px;
          }
          .crs_popup h2 {
            font-size: 32px;
            line-height: 36px;
          }
          .crs_popup h2 span {
            margin-top: 8px;
          }
          .crs_popup_close {
            padding: 16px;
          }
          .crs_popup_close svg {
            width: 16px;
            height: 16px;
          }
        }
      </style>
    `;
    if (!$el(".crs-style")) {
      $el("body").insertAdjacentHTML("afterbegin", style);
    }
  }

  handleVisibility(el, eventParams) {
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
            this.pushDataLayer(eventData);
            observer.disconnect();
          }
        }
      });
    }, config);

    observer.observe(el);
  }

  pushDataLayer([event_name, event_desc, event_type, event_loc]) {
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

  longInactivityInBag() {
    if (!sessionStorage.getItem("popupShown") && this.isLongInactivityInBag == false ) {
      this.isLongInactivityInBag = true
      let idleTimer;
      const idleTime = 60000; 

      console.log(this.isLongInactivityInBag)
      function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
          if (
            (
              new ExitIntentPopup(device).checkPageUrl() === "bag" || 
              new ExitIntentPopup(device).checkPageUrl() === "checkout"
            ) &&
            localStorage.getItem("crs_cart") &&
            !sessionStorage.getItem("popupShown")
          ) {
            new ExitIntentPopup(device).showPopup();
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
  }

  showPopup() {
    if ($el(".crs_popup.active")) return;
    if (sessionStorage.getItem("popupShown")) return;

    startTime = 0;
    $el(".crs_popup").classList.add("active");
    document.body.classList.add("crs_fixed");

    startTimeInterval = setInterval(() => {
      startTime += 1;
    }, 1000);

    sessionStorage.setItem("popupShown", "true");
    console.log("showPopup");
  }

  setExitIntentPopup() {
    if (this.device == 'desktop') {
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
            if (
              localStorage.getItem("crs_cart") &&
              clickAddToCart == false &&
              !sessionStorage.getItem("popupShown")
            ) {
              new ExitIntentPopup(device).showPopup();
            }
          }
        },
        { once: true }
      );
    } else {
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

        if (
          currentSpeed > speedValue &&
          localStorage.getItem("crs_cart") &&
          window.scrollY != 0 &&
          clickAddToCart == false &&
          !sessionStorage.getItem("popupShown")
        ) {
          console.log("currentSpeed: " + currentSpeed);

          document.removeEventListener("scroll", scrollSpeed);
          this.showPopup();
        }
      };

      document.addEventListener("scroll", scrollSpeed);
    }
    
  }

  addPopup() {
    const popup = `
    <div class="crs_popup">
        <div class="container flex">
            <button class="crs_popup_close" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13" stroke="black" stroke-width="0.753225" stroke-linecap="round"/>
                    <path d="M13 1L1 13" stroke="black" stroke-width="0.753225" stroke-linecap="round"/>
                </svg>
            </button>
            <h2 class="text-center">It’s almost yours!
                <span>Only one step left:</span>
            </h2>
            <div class="crs_popup_message text-center">Popular choice, stocks are limited!</div>
            <ul class="crs_list_1 crs_list grid gap-6"></ul>
         
            <div class="crs_popup_info flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_128_3748)">
                      <path d="M8.15625 10.1875V10.6875H8.65625H9.09375C9.12837 10.6875 9.16806 10.7023 9.20162 10.7359C9.23518 10.7694 9.25 10.8091 9.25 10.8438C9.25 10.8988 9.23038 10.9339 9.20678 10.9568C9.18108 10.9818 9.14224 11 9.09375 11H6.90625C6.83714 11 6.80352 10.9773 6.78812 10.9619C6.77273 10.9465 6.75 10.9129 6.75 10.8438C6.75 10.7953 6.76824 10.7564 6.79321 10.7307C6.81613 10.7071 6.85119 10.6875 6.90625 10.6875H7.34375H7.84375V10.1875V8.4375V7.9375H7.34375H7.125C7.05589 7.9375 7.02227 7.91477 7.00687 7.89938C6.99148 7.88398 6.96875 7.85036 6.96875 7.78125C6.96875 7.73276 6.98699 7.69392 7.01196 7.66822C7.03488 7.64462 7.06994 7.625 7.125 7.625H8C8.03462 7.625 8.07431 7.63982 8.10787 7.67338C8.14143 7.70694 8.15625 7.74663 8.15625 7.78125V10.1875ZM15.5 8C15.5 3.86839 12.1316 0.5 8 0.5C3.83977 0.5 0.5 3.86966 0.5 8C0.5 12.159 3.84105 15.5 8 15.5C12.1303 15.5 15.5 12.1602 15.5 8ZM7.625 5.375C7.625 5.17611 7.79404 5 8 5C8.1887 5 8.375 5.1863 8.375 5.375C8.375 5.58096 8.19889 5.75 8 5.75C7.78396 5.75 7.625 5.59104 7.625 5.375Z" stroke="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_128_3748">
                        <rect width="16" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                </svg>
                <p></p>
            </div>
            <a href="#" class="crs_popup_complete">complete my order now</a>
            
        </div>
    </div>`;

    if ($el(".crs_popup")) return;
    document.body.insertAdjacentHTML("beforeend", popup);

    $el(".crs_popup_close").addEventListener("click", () => {
      $el(".crs_popup").classList.remove("active");

      document.body.classList.remove("crs_fixed");

      clearInterval(startTimeInterval);

      const page =
        $$el('[aria-label="Breadcrumb"] li').length >= 3 &&
        this.checkPageUrl() == "shop"
          ? "PDP"
          : this.checkPageUrl();
      this.pushDataLayer([
        "exp_exit_int_popup_vis_almos_focu",
        `${startTime} - ${page}`,
        "Visibility ",
        "Popup It’s almost yours!",
      ]);
      this.pushDataLayer([
        "exp_exit_int_popup_vis_almcompl_focu",
        startTime,
        "Visibility ",
        "Popup It’s almost yours! Complete my order now",
      ]);
      this.pushDataLayer([
        "exp_exit_int_popup_but_almos_close",
        "Close",
        "Button",
        "Popup It’s almost yours!",
      ]);
    });

    $el(".crs_popup").addEventListener("click", (e) => {
      if (e.target.classList.contains("crs_popup")) {
        $el(".crs_popup").classList.remove("active");

        document.body.classList.remove("crs_fixed");

        clearInterval(startTimeInterval);

        const page =
          $$el('[aria-label="Breadcrumb"] li').length >= 3 &&
          this.checkPageUrl() == "shop"
            ? "PDP"
            : this.checkPageUrl();
        this.pushDataLayer([
          "exp_exit_int_popup_vis_almos_focu",
          `${startTime} - ${page}`,
          "Visibility ",
          "Popup It’s almost yours!",
        ]);
        this.pushDataLayer([
          "exp_exit_int_popup_vis_almcompl_focu",
          startTime,
          "Visibility ",
          "Popup It’s almost yours! Complete my order now",
        ]);
      }
    });

    $el(".crs_popup_complete").addEventListener("click", (e) => {
      e.preventDefault();

      if (this.checkPageUrl() != "checkout") {

        let bagLink = '/bag'

        if (this.device == 'desktop') {
          bagLink = $el('[data-testid="bag-button"]') ? $el('[data-testid="bag-button"]').href : '/bag'
        } else {
          bagLink = $el('[data-testid="bag-button-mobile"]') ? $el('[data-testid="bag-button-mobile"]').href : '/bag'
        }
        
        console.log(bagLink)
        console.log(bagLink.replace('/bag/','/checkoutv2/'))

        let login = !!$el('[data-testid="my-portfolio"]');

        if (login) {
          window.location.href  = bagLink.replace('/bag/','/checkoutv2/')
        } else {
          localStorage.setItem('showPopupRegister', true)
          if (this.checkPageUrl() == 'bag') {
            $el(".crs_popup").classList.remove("active");
            document.body.classList.remove("crs_fixed");
            localStorage.removeItem('showPopupRegister')
            $el('[data-testid="checkout-button"]').click()
          } else {
            window.location.href = bagLink
          }
        }
      } else {
        $el(".crs_popup").classList.remove("active");
        document.body.classList.remove("crs_fixed");
      }
      this.pushDataLayer([
        "exp_exit_int_popup_but_almos_compl",
        "Complete my order now",
        "Button",
        "Popup It’s almost yours!",
      ]);

      clearInterval(startTimeInterval);

      const page =
        $$el('[aria-label="Breadcrumb"] li').length >= 3 &&
        this.checkPageUrl() == "shop"
          ? "PDP"
          : this.checkPageUrl();
      this.pushDataLayer([
        "exp_exit_int_popup_vis_almos_focu",
        `${startTime} - ${page}`,
        "Visibility ",
        "Popup It’s almost yours!",
      ]);
      this.pushDataLayer([
        "exp_exit_int_popup_vis_almcompl_focu",
        startTime,
        "Visibility ",
        "Popup It’s almost yours! Complete my order now",
      ]);
    });
    //event "percent_scrolled"
    let scrollTimer;

    $el(".crs_popup ul").addEventListener("scroll", (e) => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(() => {
        handleScroll.call(this, e);
        scrollTimer = null;
      }, 100);
    });

    this.setExitIntentPopup();

    let testid = this.device == 'desktop' ? 'bag-button' : 'bag-button-mobile'
    
    if (
      $el('[aria-label="Bag"]') && 
      $el(`[data-testid="${testid}"]`) &&
      $el(`[data-testid="${testid}"]`).innerText == '' &&
      localStorage.getItem("crs_cart")
    ) {
      localStorage.removeItem("crs_cart")
    }
   
    if (device == "desktop") return;

    const appHeight = () => {
      $el(".crs_popup").style.height = window.innerHeight + "px";
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  }

  addDataCartInStorage() {
    if ($el("#main .layout-container h1")) {
      $$el("button.tracking-widest").forEach((item) => {
        if (
          item.innerText.toLowerCase().includes("add to bag") &&
          usedDefaultLog == false
        ) {
          usedDefaultLog = true;

          function checkData(val) {
            if (val.includes("item_id")) {
              try {
                const parsedData = JSON.parse(val);

                let title = parsedData[0]
                  .split('"item_name":')[1]
                  .split(",")[0]
                  .split('"')
                  .join("")
                  .trim();
                console.log(title);

                if (
                  $el("#main .layout-container h1").innerText.includes(title)
                ) {
                  let metal = $el("label.sr-only")
                    ? $el("label.sr-only")
                        .nextElementSibling.querySelector(
                          '.cursor-pointer[data-headlessui-state="checked"]'
                        )
                        .innerText.replace("Pure ", "")
                    : "";

                  let weight = $el("label.sr-only")
                    .closest(".flex-col")
                    .querySelector(".flex-col .text-p")
                    .innerText.replace("24K ", "");
                  let image = $el("#carousel-slide-0 > img")
                    ? $el("#carousel-slide-0 > img").src
                    : $el(".sticky img.object-cover")
                    ? $el(".sticky img.object-cover").src
                    : "";

                  let price = $el("#main .layout-container h1").parentElement.querySelector('.my-7 > div > h3').innerText

                  price = price[0] + (parseFloat(parsedData[0].split('"price":')[1].split("}")[0].trim()) / parseFloat(parsedData[0].split('"quantity":')[1].split(",")[0].trim())).toFixed(2)
                  
                  dataCart.push({
                    item_name: title,
                    price: addCommasToNumber(price),
                    low_stock: +parsedData[0]
                      .split('"low_stock":')[1]
                      .split(",")[0]
                      .trim(),
                    image: image,
                    item_id: parsedData[0]
                      .split('"item_id":')[1]
                      .split(",")[0]
                      .trim(),
                    item_variant: parsedData[0]
                      .split('"item_variant": ')[1]
                      .split(",")[0]
                      .split('"')
                      .join("")
                      .trim(),
                    metal: metal + ", " + weight,
                  });

                  if (
                    localStorage.getItem("crs_cart") != "undefined" &&
                    localStorage.getItem("crs_cart") != null &&
                    localStorage.getItem("crs_cart") != ""
                  ) {
                    dataCart = [
                      ...dataCart,
                      ...JSON.parse(localStorage.getItem("crs_cart")),
                    ];
                  }
                  dataCart = dataCart.filter(
                    (thing, index, self) =>
                      index ===
                      self.findIndex(
                        (t) =>
                          t.item_name === thing.item_name &&
                          t.item_variant === thing.item_variant
                      )
                  );

                  localStorage.setItem("crs_cart", JSON.stringify(dataCart));

                  clickAddToCart = true

                  new ExitIntentPopup(device).updateProductsInPopup();

                  if (window.scrollY == 0) {
                    clickAddToCart = false;
                    new ExitIntentPopup(device).setExitIntentPopup();
                  }

                  window.addEventListener("scroll", (e) => {
                    if (window.scrollY == 0) {
                      clickAddToCart = false;
                      new ExitIntentPopup(device).setExitIntentPopup();
                    }
                  });
                 
                }
              } catch (error) {
                console.error("Error parsing JSON:", error);
              }
            }
          }

          console.defaultLog = console.log.bind(console);
          console.defaultError = console.log.bind(console);

          console.log = function () {
            console.defaultLog.apply(console, arguments);

            try {
              checkData(JSON.stringify(arguments));
            } catch (e) {}
          };
        }
      });
    }
  }

  removeItemCartInStorage() {
    if (localStorage.getItem("crs_cart")) {
      $$el(
        ".flex-col > .justify-start.gap-4 > div:last-child > .text-black > button"
      ).forEach((el) => {
        el.addEventListener("click", (e) => {

          dataCart = JSON.parse(localStorage.getItem("crs_cart"));

          let itemName = el
            .closest(".relative")
            .querySelectorAll("h5")[0]
            .innerText.toLowerCase();

          let itemMetal = itemName.includes('platinum') ? 'platinum' : 'gold'
          let newItemName = itemName.replace("gold", "").replace("platinum", "").trim()

          for (let i = 0; i < dataCart.length; i++) {
            console.log("remove: " + dataCart[i].item_name.toLowerCase() + ' / ' +  dataCart[i].metal.toLowerCase());

            if (
              dataCart[i]['item_name'].toLowerCase().includes(newItemName) &&
              dataCart[i]['metal'].toLowerCase().includes(itemMetal)
            ) {
              dataCart.splice(i, 1);

              localStorage.setItem("crs_cart", JSON.stringify(dataCart));

              if (localStorage.getItem("crs_cart") == "[]") {
                localStorage.removeItem("crs_cart");
              } else {
                this.updateProductsInPopup();
              }
            }
          }
        });
      });
    }
  }

  updateProductsInPopup() {
    if (!localStorage.getItem("crs_cart") && !$el(".crs_popup .crs_list"))
      return;

    dataCart = JSON.parse(localStorage.getItem("crs_cart"));

    const listPopup = $el(".crs_popup .crs_list");
    const info = $el(".crs_popup_info");

    listPopup.innerHTML = "";

    let lengthMadeForYou = 0;

    for (let i = 0; i < dataCart.length; i++) {
      let madeForYou =
        dataCart[i].low_stock == 0 && typeof dataCart[i].low_stock != "object"
          ? "MADE FOR YOU"
          : "";

      lengthMadeForYou += madeForYou != "" ? 1 : 0;

      $el(".crs_popup .crs_list").insertAdjacentHTML(
        "beforeend",
        `
        <li data-id="${dataCart[i].item_id}">
          <img src="${dataCart[i].image}" alt="${dataCart[i].item_name}">
          <div>
              <p class="crs_popup_name"><b>${dataCart[i].item_name}</b></p>
              <p class="crs_popup_span">${dataCart[i].metal}</p>
              <p class="crs_popup_price"><b>${dataCart[i].price}</b></p>
              <p class="crs_popup_left_stock ${
                dataCart.length > 1 ? "" : "justify-center"
              } items-center ${
                dataCart[i].low_stock <= 4 &&
                typeof dataCart[i].low_stock != "object"
                  ? "flex"
                  : ""
              }" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_128_3836)">
                    <path d="M13.9658 9.36778C13.7825 6.98156 12.6715 5.48622 11.6914 4.16665C10.7838 2.94503 10 1.89009 10 0.333904C10 0.208904 9.93 0.0946543 9.819 0.037373C9.70766 -0.020252 9.57387 -0.0108145 9.47266 0.062748C8.00066 1.11606 6.77247 2.89134 6.34344 4.58522C6.04559 5.7645 6.00619 7.09025 6.00066 7.96584C4.64128 7.6755 4.33334 5.64212 4.33009 5.61997C4.31478 5.5145 4.25034 5.42272 4.15659 5.37259C4.06188 5.32312 3.95053 5.31953 3.8545 5.36706C3.78322 5.40156 2.10481 6.25437 2.00716 9.6594C2.00031 9.77269 2 9.88631 2 9.9999C2 13.3079 4.69172 15.9995 8 15.9995C8.00456 15.9998 8.00944 16.0005 8.01334 15.9995C8.01466 15.9995 8.01594 15.9995 8.01756 15.9995C11.3177 15.99 14 13.3021 14 9.9999C14 9.83356 13.9658 9.36778 13.9658 9.36778ZM8 15.3329C6.89713 15.3329 6 14.3772 6 13.2025C6 13.1625 5.99969 13.1221 6.00259 13.0726C6.01594 12.5772 6.11003 12.239 6.21322 12.0141C6.40659 12.4294 6.75228 12.8112 7.31381 12.8112C7.49806 12.8112 7.64716 12.6622 7.64716 12.4779C7.64716 12.0034 7.65694 11.4559 7.77509 10.9617C7.88025 10.5236 8.13153 10.0575 8.44991 9.68384C8.5915 10.1688 8.86756 10.5614 9.13709 10.9445C9.52284 11.4926 9.92159 12.0593 9.99159 13.0257C9.99581 13.083 10.0001 13.1407 10.0001 13.2025C10 14.3772 9.10287 15.3329 8 15.3329Z" fill="#D9BA58"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_128_3836">
                        <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <span>${
                  madeForYou != ""
                    ? madeForYou
                    : `Only ` + dataCart[i].low_stock + `pcs left in stock`
                }
                </span> 
              </p>
          </div>
      </li>`
      );
    }

    if (dataCart.length > 1) {
      listPopup.classList.remove("crs_list_1");
      info.querySelector(
        "p"
      ).innerHTML = `We can’t guarantee the availability of all products in your bag if you don’t complete the purchase now`;
    } else {
      listPopup.classList.add("crs_list_1");
      info.querySelector(
        "p"
      ).innerHTML = `We can’t guarantee its availability if you don't complete the purchase now`;
    }

    if (dataCart.length == lengthMadeForYou) {
      info.classList.remove("flex");
    } else {
      info.classList.add("flex");
    }

    if (device == "desktop") return;
    listPopup.style = `max-height: calc(100vh - ${
      listPopup.getBoundingClientRect().top
    }px - 20px - 56px - ${info.offsetHeight}px)`;
  }
}

new ExitIntentPopup(device);

(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:2667925,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
