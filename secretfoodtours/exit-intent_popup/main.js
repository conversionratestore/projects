(function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/secretfoodtours/exit-intent_popup/img'

  const tours = {
    // America
    "portland-oregon": {
      "name": "Portland Food Tour",
      "price": "$99",
      "rate": "4.98",
      "img": "/img/portland/portland-food-tour-featured-01.jpg",
      "link": "/portland-oregon/food-tours-portland-oregon/",
      "region": "america"
    },
    dallas:
    {
      "name": "Dallas Food Tour",
      "price": "$89",
      "rate": "4.91",
      "img": "/img/dallas/secret-food-tours-dallas.jpg",
      "link": "/dallas/food-tours-dallas/",
      "region": "america"
    },
    "key-west":
    {
      "name": "Key-west Food Tour",
      "price": "$89",
      "rate": "4.92",
      "img": "/img/key-west/secret-food-tours-key-west.jpg",
      "link": "/key-west/food-tours-key-west/", "region": "america"
    },
    "los-angeles":
    {
      "name": "Venice Beach LA Food Tour",
      "price": "$79",
      "rate": "4.92",
      "img": "/img/los-angeles/secret-food-tours-los-angeles.jpg",
      "link": "/los-angeles/food-tours-los-angeles/", "region": "america"
    },
    milwaukee:
    {
      "name": "Milwaukee Food Tour",
      "price": "$89",
      "rate": "4.97",
      "img": "/img/milwaukee/secret-food-tours-milwaukee.jpg",
      "link": "/milwaukee/food-tours-milwaukee/", "region": "america"
    },
    philadelphia:
    {
      "name": "Philadelphia Food Tours",
      "price": "",
      "rate": "4.98",
      "img": "/img/philadelphia/secret-food-tours-philadelphia.jpg?v2",
      "link": "/philadelphia/food-tours-philadelphia/", "region": "america"
    },
    "san-diego":
    {
      "name": "San Diego Food Tour",
      "price": "$85",
      "rate": "4.97",
      "img": "/img/san-diego/secret-food-tours-sandiego.jpg",
      "link": "/san-diego/food-tours-san-diego/", "region": "america"
    },
    "washington-DC":
    {
      "name": "Washington Food Tour",
      "price": "$85",
      "rate": "4.97",
      "img": "/img/washington/secret-food-tour-washington-HP-3.jpg",
      "link": "/washington-DC/food-tours-washington/", "region": "america"
    },
    // Europe
    belfast:
    {
      "name": "Belfast Food Tour",
      "price": "£69",
      "rate": "4.98",
      "img": "/img/belfast/secret-food-tours-belfast-10.jpg",
      "link": "/belfast/food-tours-belfast/", "region": "europe"
    },
    istanbul:
    {
      "name": "Lunch Food Tour Istanbul-kadikoy",
      "price": "€69",
      "rate": "4.96",
      "img": "/img/istanbul/secret-food-tours-istanbul.jpg",
      "link": "/istanbul/food-tours-istanbul/", "region": "europe"
    },
    krakow:
    {
      "name": "Krakow Food Tour",
      "price": "€79",
      "rate": "4.97",
      "img": "/img/krakow/secret-food-tours-krakow.jpg",
      "link": "/krakow/food-tours-krakow/", "region": "europe"
    },
    milan:
    {
      "name": "Milan Food Tour",
      "price": "€89",
      "rate": "4.97",
      "img": "/img/milan/food-tours-milan-featured-01.jpg",
      "link": "/milan/food-tours-milan/", "region": "europe"
    },
    porto:
    {
      "name": "Porto Food Tour",
      "price": "€69",
      "rate": "4.98",
      "img": "/img/porto/secret-food-tours-porto.jpg",
      "link": "/porto/food-tours-porto/", "region": "europe"
    },
    prague:
    {
      "name": "Prague Food Tour",
      "price": "€76",
      "rate": "4.97",
      "img": "/img/prague/secret-food-tours-prague.jpg",
      "link": "/prague/food-tours-prague/", "region": "europe"
    },
    seville:
    {
      "name": "Seville Food Tour",
      "price": "€79",
      "rate": "4.93",
      "img": "/img/seville/secret-food-tours-seville.jpg",
      "link": "/seville/food-tours-seville/", "region": "europe"
    },
    // Asia
    bangkok:
    {
      "name": "Bangkok Food Tour",
      "price": "$59",
      "rate": "4.97",
      "img": "/img/bangkok/secret-food-tours-bangkok.jpg?v2",
      "link": "/bangkok/food-tours-bangkok/", "region": "asia"
    },
    "hong-kong":
    {
      "name": "Hong Kong Food Tour",
      "price": "",
      "rate": "4.95",
      "img": "/img/hong-kong/secret-food-tours-hongkong-2.jpg",
      "link": "/hong-kong/food-tours-hong-kong/", "region": "asia"
    },
    singapore:
    {
      "name": "Singapore Food Tours",
      "price": "",
      "rate": "4.95",
      "img": "/img/singapore/secret-food-tours-singapore.jpg",
      "link": "/singapore/food-tours-singapore/", "region": "asia"
    },
  }

  const pathname = window.location.pathname
  const cityName = pathname.split('/')[1]
  const isEuropeanCity = checkIsEuropeanCity(cityName)
  const promocode = isEuropeanCity ? 'FREEUPGRADE7812' : 'BOOK10'
  const isBookMobilePage = pathname.includes('book')

  const currentTour = tours[cityName]
  const filteredTours = displayCities(cityName)

  // -------------------------------------
  // CSS & HTML
  // -------------------------------------
  const style = /*html*/`
<style>
/* Client's website */
html .CampaignType--popup,
html #om-h6gev8aslrdfs94jomxz,
html #om-ewmxd7y3oz2noro3ilwe {
  opacity: 0;
  pointer-events: none;
  display: none !important;
}
html.om-position-popup head + body {
  overflow: initial !important;
}
.heading.no-mobile,
.price.no-mobile {
  text-align: center;
}
.col-4.plugin-col {
  top: -10px;
  border-radius: 6px;
}
.destination_page_wr .tour-intro #plugin {padding-top: 34px;}
.destination_page_wr .tour-intro .plugin_right .price {margin-bottom: 8px;}
/* Utils */
.ff-primary , .ff-primary * {
  font-family: JosefinSans-Regular, "Segoe UI",Arial,sans-serif;
}

.accent {
  color: #F00 !important;
  font-weight: 600 !important;
}

.flow> :not(:last-child) {
  margin-block: 0 4px;
}

.p-m-0 p {
  margin: 0;
}

/* Buttons */
.btn-custom-primary {
  width: 100%;
  color:  #FFF;
  font-family: JosefinSans-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.428;
  letter-spacing: 1px;
  text-transform: uppercase;
  background:  #C49959;
  padding: 16px 24px;
  text-align: center;
  border: 0;
  margin-top: 16px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.btn-custom-primary:hover,
.btn-custom-primary:focus-visible {
  background:  #A47A3F;
}


.btn-continue {
  width: 100%;
  color:  #FFF;
  font-family: JosefinSans-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.428;
  letter-spacing: 1px;
  text-transform: uppercase;

  border: 0 !important;
  background: #144733;
  cursor: pointer;
  transition: all 0.5s ease;
  padding: 14px 10px 10px;height: 44px;
}

.btn-continue:hover,
.btn-continue:focus-visible {
  color: #C49959;
}

/* Timer  */
.timer {
  display: flex;
  text-align: center;
  color: #144733;
  font-family: JosefinSans-Regular;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12;
}

.timer span {
  display: inline-block;
  width: 40px;
  height: 46px;
  padding: 9px 5px 9px 6px;
  background: #F4F2ED;
  line-height: 1.12;
}

.timer>div>p span:last-child {
  margin-left: 2px;
}

p.timer__moments {
  color:  #859F95;
  text-align: center;
  font-family: JosefinSans-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 5px;
}

p.timer__colon {
  font-size: 32px;
  margin-inline: 6px;
}

/* General styling */
.copy-coupon {
  display: flex;
  gap: 8px;
}

.copy-coupon__code {
  display: flex;
  gap: 8px;
  cursor: pointer;
} 

.copy-coupon__code > div {
  position: relative;
  flex-shrink: 0;
}

.copy-coupon__notif {
  position: absolute;
  top: 0;
  right: 50%;
  min-width: 138px;

  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 100px;
  border: 1px solid  #C49959;
  background: #FFF;

  padding: 4px 12px 4px 6px;
  margin: 0 5px;

  opacity: 0;
  pointer-events: none;

  transition: all .3s ease-in;

  transform: translate(50%, 0);
}

.exit-popup .copy-coupon__notif {
  transform: translate(0, 0);
}

body .copy-coupon__notif p {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
}

.copy-coupon__notif--show {
  opacity: 1;
  transform: translate(50%, -125%);
}

/* Book Your Tour */
.plugin_right .book-code  {
  margin-top: 8px;
}

.book-code {
  border-radius: 2px;
  border: 1px dashed  #C49959;
  background: rgba(196, 153, 89, 0.03);
  padding: 16px;
  display: flex;
  gap: 8px;
}

.book-code p {
  color: #000;
  font-family: "JosefinSans-Regular";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}

.book-code__copy p {
  margin: 0;
}

/* Mobile tour info */
.mobile-tour-info {
  display: none;
}
.mobile-tour-info__name {
  color: #000;
  font-family: Arial;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.66;
  margin-block: 4px;
}
.mobile-tour-info__price {
  margin-block: 7px;
}
.mobile-tour-info__price p span:first-child {
  color: #144733;
  font-family: JosefinSans-Regular;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  margin-right: 8px;

}

.mobile-tour-info__price p span:last-child {
  color:  #859F95;
  font-family: JosefinSans-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
}

/* LIKELY TO SELL OUT */
.desktop-tour-info {
  margin-bottom: 8px;
}


.likely-sell-out {
  color:  #FFF;
  font-size: 14px;
  height: 24px;
  font-weight: 600;
  line-height: 1.64;
  border-radius: 2px;
  background:  #C49959;
  padding: 2px 8px;
  width: fit-content;  font-family: JosefinSans-Regular;
}



/* Offer reserved only for: */
.shadow_mobile + .reserved {
  margin-top: 40px;
  margin-bottom: -2px;
}

.breadcrumbs + .reserved {
  display: none;
}


.reserved {
  display: flex;
  border: 1px dashed #C49959;
  background: #FDFCFA;

  color: #000;
  font-family: JosefinSans-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.reserved>div {
  flex-direction: column;
  display: flex;
  justify-content: center;
  padding: 26px 32px;
}

.reserved>div:first-child {
  border-right: 1px dashed #C49959;
  align-items: center;
  width: 53%;
}

.reserved>div:last-child {
  width: 100%;
}

p.reserved__offer {
  margin-bottom: 12px;
  max-width: 12ch;
  text-align: center;
}

p.reserved__tour-name {
  color: #000;
  font-family: JosefinSans-Regular;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.27;
  margin-bottom: 8px;
}

p.reserved__book-now {
  margin-bottom: 4px;
}

.reserved__dash {
  display: none !important;
  height: 1px;
  width: calc(100% - 40px);
  border-top: 1px dashed #C49959;
  padding: 0 !important;
  margin-inline: auto;
}

.exit-popup__overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.exit-popup {
  display: flex;
  position: relative;
  background-color: #FFF;
  width: fit-content;
  margin: 15px;
}

.exit-popup__heading {
  color: #000;
  text-align: center;
  font-family: JosefinSans-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
}

.exit-popup__heading--mobile {
  display: none;
}

.exit-popup__text {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 32px;
  align-items: center;
  justify-content: center;
}

.exit-popup__text .timer {
  justify-content: center;
  margin-block: 15px 24px;
}

.exit-popup__pdp {
  display: flex;
  gap: 16px;
  max-width: 280px;
  width: 100%;
  text-align: left;
}

.exit-popup__pdp>div:first-child {
  width: 104px;
  height: 88px;
  flex-shrink: 0;
}

.exit-popup__pdp>div:first-child img {
  height: 100%;
  object-fit: cover;
}

.exit-popup__pdp-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #212529;
  gap: 4px;
  font-family: JosefinSans-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.55;
}

.exit-popup__pdp-info>div {
  display: flex;
  align-items: center;
  gap: 8px;

  color: #212529;
  font-family: JosefinSans-Regular;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.23;
}

p.exit-popup__usually {
  color: #000;
  text-align: center;
  font-family: JosefinSans-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 16px;

}

.exit-popup__usually span {
  color:  #C49959;
  text-decoration: underline;
}

.exit-popup__enter {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 54px;
  border: 1px dashed #859F95;
  margin-top: 24px;
}

.exit-popup__enter>p {
  color: #000;
  text-align: center;
  font-family: JosefinSans-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.44;
}

.exit-popup__enter>div {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid #D4D3D3;
  padding: 10px;
  cursor: pointer;
  height: 44px;
  width: 280px;
}

.exit-popup__enter .accent {
  font-size: 16px;
}

.exit-popup__food img {
  min-height: 100%;
}

.exit-popup__close {
  position: absolute;
  top: -9px;
  right: -9px;
  cursor: pointer;
}

.exit-popup .copy-coupon {
  position: relative;
}

.copy-coupon--disabled {
  pointer-events: disabled;
}

.exit-popup .copy-coupon>img {
  position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
}

.exit-popup .copy-coupon__notif {
  right: -15%;
}

.exit-popup .copy-coupon__notif--show {
  transform: translate(0%, -125%);
}

/* Slide */
.interested  {
  --swiper-theme-color: #C49959 !important;
  /* --swiper-pagination-bullet-inactive-color: #EBEBE8 !important;
  --swiper-pagination-bullet-inactive-opacity: 1 !important;

  */
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bottom: 0;
  --swiper-pagination-bullet-horizontal-gap: 8px;
}

.interested {
  display: none;
}

.interested  .swiper-container-horizontal>.swiper-pagination-bullets {
  bottom: 0;
}

.interested {
  padding: 14px 0px 18px 16px;
}

.interested>p {
  color: #000;
  font-family: JosefinSans-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.44;
  margin-bottom: 16px;
}

.interested__slide {
  display: flex !important;
  gap: 8px;
  padding-bottom: 24px;
}

.interested__tour-img {
  width: 104px;
  height: 88px;
  flex-shrink: 0;
}

.interested__tour-img img {
  height: 100%;
  object-fit:cover;
}

.interested__tour-info {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding-right: 5px;
}

.interested__tour-rate {
  display: flex;
  gap: 8px;
  color: #212529;
  font-family: JosefinSans-Regular;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.23;
  /* 123.077% */
}

p.interested__tour-name {
  color: #212529;
  font-family: JosefinSans-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.285;
  margin-block: 4px 8px;
  min-height: 36px;
  /* 128.571% */
}

.interested__slide a {
  color: #144733;
  font-family: JosefinSans-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;

  text-decoration-line: underline;
  text-transform: uppercase;
}

.article__content.p_100 {
  padding: 0 !important;
}
.destination_page_wr .about-cont h1 {
padding: 0 !important;
color: #000;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 1.33; /* 133.333% */
margin: 20px 0 !important;
}
.destination_page_wr .about-cont h1 + .book-code{
    margin-bottom: 20px;
    display: none;
}

@media only screen and (max-width: 767px) {

  .interested  + .banner_top.banner_padding {
    padding-top: 0;
  }

  .fixed_header + .interested {
    margin-top: 60px;
  }


  .destination_page_wr .about-cont h1 + .book-code {
    display: flex;
  }

  .book-code__copy+p {
    font-size: 14px;
    line-height: 1.42;
  }

  .mobile-tour-info {
    display: block;
    padding-bottom: 20px;
  }
  .desktop-tour-info {
    display: none;
  }


  .likely-sell-out {
    font-size: 13px;
    line-height: 1.9;
  }

  .breadcrumbs {
    padding: 20px 0 22px;
}

  .breadcrumbs,.mobile-tour-info {
    margin-inline: -15px
  }

  .shadow_mobile + .reserved {
    display: none;
  }
  .breadcrumbs + .reserved {
  display: block;
  }

  .copy-coupon {
    font-size: 16px;
  }

  .reserved {
    flex-direction: column;
    font-size: 18px;
    line-height: 1.44;
    margin-top: 32px;
    margin-inline: -15px;
  }

  .reserved>div {
    padding: 24px;
    align-items: center;
    text-align: center;
  }

  .reserved>div:first-child {
    padding-bottom: 20px;
    border-right: 0;
    width: 100%;
  }

  .reserved>div:last-child {
    padding-top: 20px;
  }

  p.reserved__offer {
    margin-bottom: 8px;
    font-size: 16px;
    max-width: 100%;
  }

  p.reserved__tour-name {
    font-size: 20px;
    line-height: 1.3;
    /* 130% */
  }

  p.reserved__book-now {
    margin-bottom: 8px;
    max-width: 22ch;
  }

  .reserved__dash {
    display: block !important;
  }


  .exit-popup__food {
    display: none;
  }

  .exit-popup__text {
    padding: 40px 21px 20px;
  }

  .exit-popup__heading {
    font-size: 20px;
    line-height: 1.4;
  }

  .exit-popup__heading--desktop {
    display: none;
  }

  .exit-popup__heading--mobile {
    display: block;
  }

  .exit-popup__text .timer {
    font-size: 22px;
    margin-block: 15px 17px;
  }

  .exit-popup__text .timer span {
    width: 27px;
    height: 32px;
    padding: 6px;
  }

  .exit-popup__text p.timer__moments {
    font-size: 15px;
  }

  .exit-popup__pdp {
    max-width: 244px;
    grid-column-gap: 12px;
  }

  .exit-popup__pdp>div:first-child {
    width: 80px;
    height: 71px;
  }

  .exit-popup__pdp-info>div {
    flex-direction: row-reverse;
    align-items: start;
    justify-content: flex-end;
  }

  .exit-popup__pdp-info {
    font-size: 18px;
    line-height: 1.44;
  }

  .exit-popup__usually {
    font-size: 15px;
  }

  .exit-popup__enter {
    padding: 16px;
    margin-top: 20px;
  }

  .exit-popup__enter>p {
    font-size: 16px;
  }

  .exit-popup__enter>div {
    width: 256px;
  }

  .interested {
    display: block;
  }
}

</style>`

  const copyCoupon = /*html*/`
<div class="copy-coupon__code ff-primary">
  <p class="accent">${promocode}</p>
  <div>
    <img src="https://conversionratestore.github.io/projects/secretfoodtours/exit-intent_popup/img/16_copy.svg"
      alt="copy code">

    <div class="copy-coupon__notif"><img
        src="https://conversionratestore.github.io/projects/secretfoodtours/exit-intent_popup/img/check.svg"
        alt="">
      <p>Code copied</p>
    </div>
  </div>
</div>`
  const bookWithCode = () => {
    const bookNow = isEuropeanCity
      ? 'Book now & get <span class="accent">Free drinks upgrade</span>'
      : `Book now & enjoy <span class="accent">10% OFF</span>`

    const icon = isEuropeanCity ? 'drink' : '24_sale'

    return /*html*/`
<div class="book-code p-m-0 ff-primary">
  <div>
    <img src="https://conversionratestore.github.io/projects/secretfoodtours/exit-intent_popup/img/${icon}.svg"
      alt="">
  </div>
  <div class="flow">
    <p>${bookNow}</p>
    <div class="book-code__copy copy-coupon">
      <p>With code: </p>
      ${copyCoupon}
    </div>
    <p>Enter code after choosing a date</p>
  </div>
</div>`
  }
  const desktopTourInfo = /*html*/`
<div class="desktop-tour-info p-m-0 ff-primary">
  <p class="likely-sell-out">LIKELY TO SELL OUT</p>
</div>
`
  const mobileTourInfo =  /*html*/`
<div class="mobile-tour-info p-m-0 ff-primary">
  <p class="likely-sell-out">LIKELY TO SELL OUT</p>
  <div class="mobile-tour-info__price">
    <p><span></span><span>/ person</span></p>
  </div>
  ${bookWithCode()}
</div>
`
  const reserved = () => {
    const bookNow = isEuropeanCity
      ? 'Book now & get your <span class="accent">Free drinks upgrade</span>'
      : `Book now & enjoy <span class="accent">10% OFF</span> on your tickets`

    return `
  <div class="reserved p-m-0 ff-primary">
<div>
  <p class="reserved__offer">Offer reserved only for:</p>
  <div class="timer">
    <div>
      <p class="timer__minutes"><span>0</span><span>0</span></p>
      <p class="timer__moments">minutes</p>
    </div>
    <p class="timer__colon">:</p>
    <div>
      <p class="timer__seconds"><span>0</span><span>0</span></p>
      <p class="timer__moments">seconds</p>
    </div>
  </div>
</div>
<div class="reserved__dash"></div>
<div>
  <p class="reserved__tour-name">Secret Food Tours: </p>
  <p class="reserved__book-now">${bookNow}</p>
  <div class="copy-coupon">
    <p>Your code: </p>
    ${copyCoupon}
  </div>
  <button class="btn-custom-primary">Book a tour</button>
</div>
</div>`
  }
  const exitPopup = (tour) => {
    const bookNow = isEuropeanCity
      ? '<span class="accent">Free drinks upgrade</span>'
      : `<span class="accent">10% OFF</span> on your tickets`

    return /*html*/`
  <div class="exit-popup__overlay ff-primary">
<div class="exit-popup">
  <div class="exit-popup__text p-m-0">
    <div class="exit-popup__heading exit-popup__heading--desktop">
      <p>BOOK NOW & get</p>
      <p>${bookNow}</p>
    </div>
    <div class="exit-popup__heading exit-popup__heading--mobile">
      <p>BOOK NOW &</p>
      <p>get ${bookNow}</p>
    </div>
    <div class="timer">
      <div>
        <p class="timer__minutes"><span>0</span><span>0</span></p>
        <p class="timer__moments">minutes</p>
      </div>
      <p class="timer__colon">:</p>
      <div>
        <p class="timer__seconds"><span>0</span><span>0</span></p>
        <p class="timer__moments">seconds</p>
      </div>
    </div>
    <div class="exit-popup__pdp">
      <div>
        <img src="${tour.img}" alt="">
      </div>
      <div class="exit-popup__pdp-info">
        <p>Secret food tours: </p>
        <div>
          <img src="${IMAGE_DIR_URL}/stars.svg" alt="stars">
          <span>${tour.rate}</span>
        </div>
      </div>
    </div>
    <p class="exit-popup__usually">Usually it’s fully booked within <span>72 hours</span></p>
    <div class="exit-popup__enter">
      <p>Enter code after choosing a date</p>
      <div class="copy-coupon">
        <p class="accent">${promocode}</p>
        <img src="${IMAGE_DIR_URL}/16_copy_green.svg" alt="copy code">

        <div class="copy-coupon__notif"><img
            src="https://conversionratestore.github.io/projects/secretfoodtours/exit-intent_popup/img/check.svg"
            alt="">
          <p>Code copied</p>
        </div>
      </div>
      <button class="btn-continue">Continue booking</button>
    </div>
  </div>
  <div class="exit-popup__food">
    <img src="${IMAGE_DIR_URL}/food.jpg" alt="food">
  </div>
  <div class="exit-popup__close">
    <img src="${IMAGE_DIR_URL}/cross.svg" alt="close popup">
  </div>
</div>
</div>
  `
  }
  const interestedSlider = () => {
    function generateTourHTML(tourInfo) {
      return `
    <div class="swiper-slide interested__slide">
      <div class="interested__tour-img">
        <a href="${tourInfo.link}"><img src="${tourInfo.img}" alt="${tourInfo.name}"></a>        
      </div>
      <div class="interested__tour-info">
        <div class="interested__tour-rate">
          <img src="${IMAGE_DIR_URL}/stars.svg" alt="stars">
          <span>${tourInfo.rate}</span>
        </div>
        <p class="interested__tour-name">${tourInfo.name}</p>
        <a href="${tourInfo.link}">learn more ></a>
      </div>
    </div>`
    }
    function generateAllToursHTML(tourNames) {
      const allToursHTML = tourNames
        .map(tourName => {
          const tourInfo = tours[tourName]
          if (tourInfo) {
            return generateTourHTML(tourInfo)
          } else {
            return ''
          }
        })
        .join('')

      return allToursHTML
    }

    return /*html*/`
  <div class="interested p-m-0 ff-primary">
    <p>Customers also interested:</p>
    <div class="swiper interested__slider">
      <div class="swiper-wrapper">
        ${generateAllToursHTML(filteredTours)}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>`
  }

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  if (isBookMobilePage) {
    waitForElement('.destination_page_wr .about-cont h1 ')
      .then(el => el.insertAdjacentHTML('afterend', bookWithCode()))
      .then(() =>
        waitForElement('.book-code')
          .then(el => handleVisibilityAndHover(
            el,
            ['exp_pdp_d_code_vis', 'Code', 'Element visibility', 'Above the booking calendar']            
          )))
  } else {
    if (DEVICE === 'desktop') {
      waitForElement('.tour-intro .breadcrumbs')
        .then(el => el.insertAdjacentHTML('afterbegin', desktopTourInfo))
        .then(() =>
          waitForElement('.desktop-tour-info .likely-sell-out')
            .then(el => handleVisibilityAndHover(el, ['exp_pdp_likelly_to_sell_out_visibility', 'Likelly to sell out', 'Element visibility', 'First screen'])))


      waitForElement('.plugin_right .plugin')
        .then(el => el.insertAdjacentHTML('beforebegin', bookWithCode()))
        .then(() =>
          waitForElement('.book-code')
            .then(el => handleVisibilityAndHover(
              el,
              ['exp_pdp_book_now_enjoy_visibility', 'Book now and enjoy 10% off', 'Element visibility', 'Right sidebar']
            )))
    } else {
      waitForElement('.tour-intro .breadcrumbs')
        .then(el => el.insertAdjacentHTML('afterend', mobileTourInfo))
        .then(() => {
          const waitForPrice = setInterval(() => {
            const price = document.querySelector('.price.no-mobile span')
            const myTourPrice = document.querySelector('.mobile-tour-info__price span')

            if (price && myTourPrice) {
              clearInterval(waitForPrice)

              myTourPrice.innerText = price.innerText
            }
          }, WAIT_INTERVAL_TIMEOUT)
        })
    }

    waitForElement('.shadow_mobile')
      .then(el => {
        el.insertAdjacentHTML(DEVICE === 'desktop' ? 'afterend' : 'beforebegin', reserved())
        setTourName('.reserved__tour-name')

        handleClickOnBookTour()
      })
      .then(() =>
        waitForElement('.reserved')
          .then(el => handleVisibilityAndHover(
            el,
            ['exp_pdp_offer_reserved_only_for', 'Offer reserved only for', 'Element visibility', 'What you will do section']
          )))

    if (DEVICE === 'mobile') {
      waitForElement('.banner_top')
        .then(el => el.insertAdjacentHTML('beforebegin', interestedSlider()))
        .then(() => initSlider())
        .then(() =>
          waitForElement('.interested')
            .then(el => {
              handleVisibilityAndHover(
                el,
                ['exp_pdp_customers_interested_visibility', 'Customers also interested', 'Element visibility', 'First screen']
              )

              el.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                  e.preventDefault()

                  if (e.target.closest('.interested__tour-img')) {
                    pushDataLayer(['exp_pdp_customers_interested_img', `Img. ${cityName} — ${e.target.href}`, 'Link', 'Customers also interested'])
                  } else if (e.target.closest('.interested__tour-info')) {
                    pushDataLayer(['exp_pdp_customers_interested_learn_more', `Learn more. ${cityName} — ${e.target.href}`, 'Link', 'Customers also interested'])
                  }

                  window.location = e.target.href
                }
              })

              const paginationContainer = el.querySelector('.swiper-pagination')
              paginationContainer.addEventListener('click', (e) => {
                if (e.target.tagName === 'SPAN') {
                  const spanElements = Array.from(paginationContainer.querySelectorAll('span'))
                  const clickedIndex = spanElements.indexOf(e.target)

                  pushDataLayer(['exp_pdp_customers_interested_navigation', `Navigation ${+clickedIndex + 1}`, 'Button', 'Customers also interested'])
                }
              })
            }
            ))
    }

  }

  setCopyCouponLogic()

  waitForElement('body')
    .then(el => {
      el.insertAdjacentHTML('beforeend', exitPopup(currentTour))

      setTourName('.exit-popup__pdp-info > p')

      setExitPopupLogic()
    })

  startCountdownTimer(30, 0)

  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity('set', `exp_pdp`, 'variant_1')
    }
  }, WAIT_INTERVAL_TIMEOUT)

  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
  function waitForElement(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector))
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector))
          observer.disconnect()
        }
      })

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      })
    })
  }
  function handleVisibilityAndHover(el, event) {
    const ms = 3000
    let timer

    const config = {
      root: null,
      threshold: 1,
    }

    if (DEVICE === 'mobile') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => {
              pushDataLayer(event)
            }, ms)
          } else {
            clearTimeout(timer)
          }
        })
      }, config)

      observer.observe(el)
    } else {
      function handleHover() {
        pushDataLayer(event)
        el.removeEventListener('mouseenter', handleHover)
      }

      el.addEventListener('mouseenter', handleHover)
    }
  }
  function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
    const eventData = {
      'event': 'event-to-ga4', event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function checkIsEuropeanCity(city) {
    const validCityNames = ['belfast', 'istanbul', 'krakow', 'milan', 'porto', 'prague', 'seville']
    console.log(validCityNames.includes(city))
    return validCityNames.includes(city)
  }
  function setCopyCouponLogic() {
    let copiesCouponIndex = 2
    if (isBookMobilePage) {
      copiesCouponIndex = 0
    }

    const waitForEl = setInterval(() => {
      if (document.querySelectorAll('.copy-coupon')[copiesCouponIndex]) {
        clearInterval(waitForEl)

        const copiesCoupon = document.querySelectorAll('.copy-coupon')

        for (const copy of copiesCoupon) {
          copy.addEventListener('click', function () {
            if (!this.classList.contains('copy-coupon--disabled')) {
              this.classList.add('copy-coupon--disabled') // Add the 'copy-coupon--disabled' class to disable the button

              const textToCopy = this.querySelector('.accent').textContent
              const notif = this.querySelector('.copy-coupon__notif')

              // Use the Clipboard API to copy the text
              navigator.clipboard.writeText(textToCopy).then(function () {
                notif.classList.add('copy-coupon__notif--show')

                setTimeout(() => {
                  notif.classList.remove('copy-coupon__notif--show')
                  copy.classList.remove('copy-coupon--disabled') // Re-enable the button
                }, 1500)
              }).catch(function (err) {
                console.error("Unable to copy text: ", err)
                copy.classList.remove('copy-coupon--disabled') // Re-enable the button in case of an error
              })
            }

            if (copy.closest('#plugin')) {
              pushDataLayer(['exp_pdp_book_now_copy_discount_code', 'Copy discount code', 'Button', 'Book now and enjoy 10% off'])
            } else if (copy.closest('.reserved')) {
              pushDataLayer(['exp_pdp_offer_reserv_copy_discount_code', 'Copy discount code', 'Button', 'Offer reserved only for'])
            } else if (copy.closest('.exit-popup__enter')) {
              pushDataLayer(['exp_pdp_popup_book_now_copy_disc_code', 'Copy discount code', 'Button', 'Book now and enjoy 10% off'])
            } else if (isBookMobilePage) {
              pushDataLayer(['exp_pdp_d_code_copy', 'Code', 'Copy', 'Above the booking calendar'])
            }
          })
        }
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function startCountdownTimer(minutes, seconds) {
    let timersIndex = 1
    if (isBookMobilePage) {
      timersIndex = 0
    }

    const waitForEl = setInterval(() => {
      if (document.querySelectorAll('.timer__seconds span:last-child')[timersIndex]) {
        clearInterval(waitForEl)

        let totalSeconds = minutes * 60 + seconds
        const containers = document.querySelectorAll(".timer")

        // Retrieve the remaining time from session storage
        const storedTime = sessionStorage.getItem("countdownTime")
        if (storedTime !== null) {
          totalSeconds = parseInt(storedTime, 10)
        }

        function updateTimerDisplay(container) {
          let minutes = Math.floor(totalSeconds / 60)
          let seconds = totalSeconds % 60

          container.querySelector(".timer__minutes span:first-child").textContent = Math.floor(minutes / 10)
          container.querySelector(".timer__minutes span:last-child").textContent = minutes % 10
          container.querySelector(".timer__seconds span:first-child").textContent = Math.floor(seconds / 10)
          container.querySelector(".timer__seconds span:last-child").textContent = seconds % 10
        }

        function countdown() {
          if (totalSeconds > 0) {
            totalSeconds--
          } else {
            clearInterval(interval)
          }

          // Store the remaining time in session storage
          sessionStorage.setItem("countdownTime", totalSeconds)
          containers.forEach(updateTimerDisplay)
        }

        containers.forEach(updateTimerDisplay)
        const interval = setInterval(countdown, 1000)
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function handleClickOnBookTour() {
    const waitForEl = setInterval(() => {
      if (document.querySelector('.reserved .btn-custom-primary')) {
        clearInterval(waitForEl)

        document.querySelector('.reserved .btn-custom-primary').addEventListener('click', () => {

          pushDataLayer(['exp_pdp_offer_reserved_book_a_tour', 'Book a tour', 'Button', 'Offer reserved only for'])

          if (DEVICE === 'desktop') {
            const targetElement = $("#plugin")
            const offset = targetElement.offset().top

            $("html, body").animate({
              scrollTop: offset
            }, 200)
          } else {
            window.location = `https://www.secretfoodtours.com/${cityName}/book`
          }
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function setExitPopupLogic() {
    const overlay = document.querySelector('.exit-popup__overlay')
    const closeX = document.querySelector('.exit-popup__close')
    const continueBtn = document.querySelector('.exit-popup .btn-continue')

    const waitForEl = setInterval(() => {
      if (overlay && closeX && continueBtn) {
        clearInterval(waitForEl)

        function openPopup() {
          if (sessionStorage.getItem("exitPopupShowned") == null) {

            let purchased = false

            window.dataLayer = window.dataLayer || []

            for (let i = window.dataLayer.length - 1; i >= 0; i--) {
              if (window.dataLayer[i][1] === 'purchase') {
                // console.log('Found "purchase" at index', i)
                sessionStorage.setItem("exitPopupShowned", "true")
                purchased = true
                break
              }
            }

            if (!purchased) {
              overlay.style.display = 'flex'
              sessionStorage.setItem("exitPopupShowned", "true")

              pushDataLayer(['exp_pdp_popup_book_now_visibility', 'Popup visibility', 'Element visibility', 'Book now and enjoy 10% off'])
            }
          }
        }

        function closePopup() {
          overlay.style.display = 'none'
        }

        function exitIntentPopupLogic() {
          function handleMouseOut(e) {
            // Check if the mouse pointer is leaving the viewport and going towards the top
            if (!e.toElement && !e.relatedTarget && e.clientY < 5) {
              openPopup()
              // Remove the event listener since the condition is met
              document.removeEventListener("mouseout", handleMouseOut)
            }
          }

          document.addEventListener("mouseout", handleMouseOut)

          // check unfocused
          let hidden = false
          document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
              // Page becomes hidden (user navigates away)
              hidden = true
            } else if (hidden) {
              // Page becomes visible (user returns)
              hidden = false

              openPopup()
            }
          })

          if (DEVICE === 'mobile') {
            let lastPosition = 0,
              newPosition = 0,
              currentSpeed = 0

            let scrollSpeed = () => {
              lastPosition = window.scrollY
              setTimeout(() => {
                newPosition = window.scrollY
              }, 70)
              currentSpeed = newPosition - lastPosition

              if (currentSpeed > 70) {
                openPopup()
                document.removeEventListener("scroll", scrollSpeed)
              }
            }

            document.addEventListener("scroll", scrollSpeed)
          }
        }

        exitIntentPopupLogic()

        closeX.addEventListener('click', () => {
          pushDataLayer(['exp_pdp_popup_book_now_close', 'Close', 'Button', 'Book now and enjoy 10% off'])
          closePopup()
        })
        continueBtn.addEventListener('click', () => {
          pushDataLayer(['exp_pdp_popup_book_nowcontinue_booking', 'Continue booking', 'Button', 'Book now and enjoy 10% off'])
          closePopup()
        })

        // overlay.addEventListener('click', function (event) {
        //   if (event.target === overlay) {
        //     closePopup()
        //   }
        // })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function displayCities(selectedCity) {
    const allCities = Object.keys(tours).filter(city => city !== selectedCity)

    const asianCities = allCities.filter(city => tours[city].region === "asia")
    const europeanCities = allCities.filter(city => tours[city].region === "europe")
    const americanCities = allCities.filter(city => tours[city].region === "america")

    let displayOrder = []

    if (selectedCity && tours[selectedCity] && tours[selectedCity].region === "asia") {
      displayOrder = allCities
    } else if (selectedCity && tours[selectedCity] && tours[selectedCity].region === "europe") {
      displayOrder = [...europeanCities, ...asianCities]
    } else if (selectedCity && tours[selectedCity] && tours[selectedCity].region === "america") {
      displayOrder = [...americanCities, ...asianCities]
    }

    shuffleArray(displayOrder)

    return displayOrder

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  function initSlider() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
    script.async = false
    document.head.appendChild(script)

    const style = document.createElement('link')
    style.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css'
    style.rel = 'stylesheet'
    document.head.appendChild(style)

    const waitForSlider = setInterval(() => {
      if (typeof Swiper !== 'undefined' && document.querySelectorAll('.interested__slider a')[filteredTours.length - 1]) {
        clearInterval(waitForSlider)

        const swiper = new Swiper('.swiper', {
          slidesPerView: 1.5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function setTourName(elSelector) {
    const waitForName = setInterval(() => {
      const elementTourName = document.querySelector(`${elSelector}`)
      const tourName = document.querySelector('.breadcrumbs ul li:last-child')

      if (tourName && elementTourName) {
        clearInterval(waitForName)

        elementTourName.innerText = tourName.innerText
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
})()