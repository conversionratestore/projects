; (function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/wally/landing-page/img'


  /* CSS & HTML */
  const style = /*html*/`
    <style>
      /* utils */
.m-p-0 p {
  margin-bottom: 0;
}

.ff-primary {
  font-family: "Apercu Medium Pro", sans-serif;
}

/* original elements */
.wally-experience-section {
  background: linear-gradient(to bottom, white 50%, #A2FAA8 50%);
}

.home-v2-floatie {
  display: none;
}

.home-v2-hero-section {
  background-color: #006A5C !important;
}

.home-v2-header-logo {
  filter: brightness(0) saturate(100%) invert(100%) sepia(7%) saturate(30%) hue-rotate(241deg) brightness(107%) contrast(107%);
}

/*.home-v2-hero-price-block .hero-text-dollar-sign,
  .home-v2-hero-price-block #hero-mobile-price,
  .home-v2-hero-price-block #hero-desktop-price {
    color: #A2FAA8 !important;
  }*/

.home-v2-hero-inner #hero-mobile-price {
  color: #FFF !important;
  text-decoration: none;
}

.home-v2-hero-inner-desktop .home-v2-hero-text {
  font-size: 1.2vw;
}

.home-v2-hero-inner-desktop .home-v2-hero-text {
  margin-top: 1em;
}

.home-v2-hero-cardinal-text.home-v2-hero-underline-1 {
  background-image: url(${IMAGE_DIR_URL}/wave-underline.svg) !important;
}

.home-v2-hero-header-inner .primary-button-hero {
  display: none;
}

.home-v2-hero-header-inner img {
  filter: brightness(0) saturate(100%) invert(89%) sepia(21%) saturate(557%) hue-rotate(58deg) brightness(99%) contrast(97%);
}


.home-v2-hero-subtext {
  position: static !important;
} 

.home-v2-hero-inner-desktop .home-v2-hero-subtext {
  font-size: 2vw !important;
  margin-top: 0.3em !important;
}

.home-v2-hero-inner,
.home-v2-hero-inner-desktop,
.home-v2-hero-section {
  padding-bottom: 0 !important;
}

.home-v2-hero-section .btn-primary {
  margin-block: 31px 66px;
}

.home-v2-hero-section .btn-primary {
  margin-block: 42px 66px;
}

 .home-v2-membership {
    background-color: #F8EDDF !important;
  }

  .home-v2-membership-title,
  .home-v2-membership-subtitle,
  .home-v2-membership-what {
    color: var(--green-1, #006A5C) !important;
  }



  .home-v2-membership-list {
    
    color: #76CABB;
 }


 .home-v2-membership-list span{
  color: var(--green-1, #006A5C);
 }

 .home-locations-text {
  background: #F9EFE3;
 }

.as-seen-in-section {
  background-color: #fff !important;
}

.as-seen-in-logos {
  padding-bottom: 50px;
}

.as-seen-in-section {
  padding: 0 !important;
}

.as-seen-in-section .section-tag-bold {
  margin-top: 55px;
}

.seen-in {
  display: grid;
  grid-template-columns: minmax(0, 180px) minmax(0, 140px) minmax(0, 240px) minmax(0, 140px);
  grid-column-gap: 60px;
  align-items: center;
  margin-block: 25px 60px;
}

/* custom elements */
.btn-primary,
.btn-secondary {
  display: flex;
  gap: 48px;

  height: 64px;

  border-radius: 100px;
  border: 2px solid var(--green-2, #006A5C);
  background: var(--white, #FFF);
  padding: 0px 28px;
  justify-content: center;
  align-items: center;

  color: var(--green-1, #006A5C);

  font-family: "Apercu Medium Pro", sans-serif;
  font-size: 22px;

  font-weight: 700;
  line-height: 1;

  transition: opacity .3s ease;
}

.btn-primary img,
.btn-secondary img {
  width: 37px;
  height: 16px;

  filter: brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(629%) hue-rotate(129deg) brightness(93%) contrast(102%);
}


.btn-primary:hover,
.btn-primary:focus-visible,
.btn-secondary:hover,
.btn-secondary:focus-visible {
  opacity: .9;
}

.btn-secondary {
  background: var(--green-1, #006A5C);
  color: var(--white, #FFF);
}

.btn-secondary img {
  filter: brightness(0) saturate(100%) invert(97%) sepia(10%) saturate(422%) hue-rotate(181deg) brightness(118%) contrast(100%);
}

.btn-wrapper-fixed {
  width: 100%;
  position: fixed;
  bottom: 30px;
  left: 0;
  margin: 0;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease-in;
}

.btn-wrapper-fixed button {
  border: 1px solid #a2faa8;
  margin-inline: auto;
    border: 1px solid #a2faa8;
    max-width: 275px;
    width: 100%;
    justify-content: space-between;
}

.btn-wrapper-fixed.btn--visibility {
  opacity: 1;
  pointer-events: all;
}

#popup-trigger {
  display: flex;
  align-items: center;
  gap: 12px;

  color: #fff;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
}

#popup-trigger p {
  line-height: 1;
  position: relative;
}

.reviews__view p::after,
#popup-trigger p::after {
  content: '';
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  width: 100%;
  height: 1px;
  background: #fff;
}

#google-reviews {
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: #A2FAA8;

  color: var(--green-1, #006A5C);
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
}

#google-reviews > img {
  filter: brightness(0) saturate(100%) invert(25%) sepia(92%) saturate(862%) hue-rotate(136deg) brightness(97%) contrast(101%);
}

#popup-trigger img {
  width: 37px;
  height: 16px;
}

.list-block {
  max-width: 828px;
}

.list-block img {
  margin-top: 28px;
  margin-bottom: 40px;
}

#get-list {
  display: grid;
  grid-column-gap: 60px;
  grid-row-gap: 40px;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr minmax(0, 155px) 1fr;
  grid-auto-columns: 1fr;

  margin-bottom: 0;
  padding-left: 0;
  font-size: 28px;
  color: #95CFC4;

}

#get-list li {
  margin-left: 1em;
}

#get-list li span {
  color: #006A5C;
  font-weight: 500;
  line-height: 34px;
  /* 121.429% */
}

.popup {
  z-index: 300;
  width: 100%;
  min-height: 100vh; 
min-height: -webkit-fill-available;
  background-color: #006a5c;
  border: 0 #000;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1em;
  line-height: 1em;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  transform: translateY(-200%);

  transition: transform .5s ease-in-out;
}

.popup__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#what-popup .popup__inner {

  max-width: 1037px;
  max-height: 550px;
  height: 100%;
}

.popup__inner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#tell-popup .popup__inner-wrapper  {
  height: 75%;
}

.popup__title {
  color: var(--green-1, #006A5C);
  font-family: "Cardinal Photo Web Regular", sans-serif;
  font-size: 95px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
}

.popup__title span {
  font-family: "Apercu Medium Pro", sans-serif;
  font-weight: 500;
  font-size: 100px;
}

.popup.popup--show {
  transform: translateY(0);
}

#what-popup {
  background: var(--beige, #FFF);
  color: var(--green-1, #006A5C);
}

#what-popup ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #95CFC4;
  grid-column-gap: 51px;
  margin-block: 71px 15px;
  padding-left: 0;
}

#what-popup ul li {
  font-size: 30px;
  list-style: none;
}


#what-popup ul li p:first-child {
  max-width: 10ch;
}

#what-popup ul li:first-child p:first-child {
  max-width: 12ch;
}

#what-popup ul li p{margin-left: -7px;}

#what-popup ul li {padding-left: 7px;}

#what-popup ul li p:first-child {
  color: var(--green-1, #006A5C);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  /* 120% */
  margin-bottom: 8px;
}

#what-popup ul li p:last-child {
  color: #353640;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  /* 150% */
}

#what-popup button {
  margin-inline: auto;
}

.popup__close {
  position: relative;
  top: -10px;
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(79%) sepia(47%) saturate(184%) hue-rotate(119deg) brightness(91%) contrast(92%);
}

.popup__logo {
  filter: brightness(0) saturate(100%) invert(79%) sepia(47%) saturate(184%) hue-rotate(119deg) brightness(91%) contrast(92%);
}

#tell-popup p {
  text-align: center;
  color: var(--beige, #F8EDDF);
}

#tell-popup div.popup__title {
  display: none;
}

#tell-popup .take-quiz {
  margin: 30px auto 83px;
  max-width: 553px;
  color: var(--beige, #F8EDDF);
text-align: center;
font-size: 28px;
font-weight: 500;
line-height: 135%; /* 37.8px */
}
#tell-popup a.btn-primary {
  text-decoration: none;
  width: fit-content;
  background: var(--beige, #F8EDDF);
  justify-content: space-between;
}

.gradient-line {
  height: 28px;
  width: 100%;
  object-fit: cover;
}

.gradient-line img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#reviews-container>p {
  color: #fff;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 116%;
  text-align: center;
  margin-bottom: 50px;
}

#reviews-container>p span {
  font-family: "Cardinal Photo Web Regular", sans-serif;
  font-weight: 400;
}
#reviews-container .reviews {
  position: relative;
  z-index: 1;
}
.bg-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 0;
}

/* reviews */
.review {
  background-color: #f8eddf;
  padding: 20px;
  margin-bottom: 15px;
}

.review__reviewer {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
}

.review__reviewer>div:first-child img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.review__reviewer>div:last-child p {
  color: var(--green-1, #006A5C);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
}

.review__reviewer>div:last-child img {
  max-width: 70px;
}

.review__text {
  color: var(--green-1, #006A5C);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
}

.reviews__view {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 17px;
  margin-top: 21px;
  position: relative;
}

.reviews__view p {
  position: relative;
  color: var(--white, #FFF);
  margin-right: 4px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;

}
.popup {
    padding: 40px 42px 40px 33px;
  }

  .word-of-mouth-section {
    background: url(https://conversionratestore.github.io/projects/wally/landing-page/img/w-bg.svg) #006A5C no-repeat;
    padding: 4.3em 0 6.8em !important;
  }
  .word-of-mouth-reviews {
    margin-top: 3.3em !important;
  }

.word-of-mouth-section .word-of-mouth-tag p {
  color: var(--white, #FFF);
text-align: center;
font-size: 42px;
font-weight: 700;
line-height: 1; /* 100% */
text-transform: none;
}

.word-of-mouth-section {
  padding: 4.3em 0 7em;
}

.word-of-mouth-section .word-of-mouth-tag p span {
  font-family: "Cardinal Photo Web Regular", sans-serif;
}

.main-faq-section > img {
  display: none;
}

.main-faq-section {
  padding-top: 5em;
}
  
.popup-head {
  display: flex;
  justify-content: space-between; 
  align-items: center;

  width: 100%;

  margin-bottom: 10px;
}

.btn-wrapper {
  margin-inline: auto;
}

@media screen and (min-width: 991px) {
  .home-v2-membership-title {
    color: var(--green-1, #006A5C);
font-size: 80px;
font-weight: 400;
letter-spacing: 2.4px;
  }

  .home-v2-membership-subtitle {
    color: var(--green-1, #006A5C);
font-size: 30px;
font-weight: 500;
line-height: 38px; /* 126.667% */
  }
  .home-v2-membership-what {
    color: var(--green-1, #006A5C);
font-size: 22px;
font-weight: 700;
line-height: 20px; /* 90.909% */
letter-spacing: 3.3px;
  }

  
 .home-v2-membership-list-item {
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: 50px; 
 }

  .home-text-locations-wrapper > div {
  font-family: "Apercu Medium Pro", sans-serif !important;
  color: var(--green-1, #006A5C);
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 96px */
 }

  #popup-trigger img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(78%) saturate(2%) hue-rotate(100deg) brightness(113%) contrast(101%);
  }
}

@media screen and (max-width: 991px) {
  body .word-of-mouth-section {
    padding: 45px 30px 35px !important;
  }


  .home-v2-hero-circled {
    padding-top: 0.15em;
  }

  .home-v2-hero-inner {
    margin-top: 24px !important;
  }

  #google-reviews {
    padding: 10px 0px;
  }

  .home-v2-hero-subtext {
    margin-top: 0 !important;
  }

  .gradient-line {
    height: 23px;
  }

  #popup-trigger {
    gap: 10px;
    color: var(--white, #FFF);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
  }

  #popup-trigger img {
    width: 25px;
    height: 12px;

    filter: brightness(0) saturate(100%) invert(100%) sepia(93%) saturate(2%) hue-rotate(247deg) brightness(102%) contrast(101%);
  }

  .btn-primary, .btn-secondary {
    gap: 12px;
    line-height: 30px !important;
  }

  .btn-primary img {
    width: 25px;
    height: 12px;
  }

  .home-v2-hero-section .btn-primary {
    margin-block: 16px 33px;
    max-width: 275px;
    width: 100%;
    justify-content: space-between;
  }

  .word-of-mouth-section {
    padding-inline: 45px 60px !important;
  }

  .word-of-mouth-tag,
  .word-of-mouth-reviews {
    display: none;
  }

  .wally-revolution-info {
    background-color: #f8eddf !important;
  }

  .word-of-mouth-section {
    position: relative;
    background:#006A5C;
  }

  .reviews__part-two {
    display: none;
  }

  .reviews__part-two .review:last-child {
    margin-bottom: 0;
  }

  #what-popup button {
    margin-inline: 0;
    text-align: left;
    justify-content: space-between;
    max-width: 83%;
  }

  .btn-primary,
  .btn-secondary {
    font-size: 18px;
    line-height: 31px;
    /* 172.222% */
    height: 56px;
    padding: 0px 24px;
  }

  .as-seen-in-ticker-wrapper {
    margin-bottom: 30px;
  }

  .section-tag-bold {
    margin-top: 50px !important;
  }

  .as-seen-in-ticker-wrapper {
    margin-bottom: 40px !important;
  }


  .btn-primary img,
  .btn-secondary img {
    width: 25px;
    height: 12px;
  }

  #tell-popup div.popup__title {
    display: block;
  }

  #tell-popup div.popup__title p:nth-of-type(1) {
    transform: translateX(-22%);
  }
  #tell-popup div.popup__title p:nth-of-type(2) {
    transform: translateX(10%);
  }
  #tell-popup div.popup__title p:nth-of-type(3) {
    transform: translateX(-11%);
  }
  #tell-popup div.popup__title p:nth-of-type(4) {
    transform: translateX(15%);
  }

   #tell-popup div.popup__title p:not(:last-child) {
    margin-bottom: 4px;
   }

  .take-quiz {
    color: var(--beige, #F8EDDF);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 120% */
    text-align: left !important;
  }

  #tell-popup p.popup__title {
    text-align: left;
  }

  .popup__title {
    font-size: 49px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
  }
  
  .popup__close {
    width: 24px;
height: 24px;
  }

  .popup__close svg {
    height: 100%;
    width: 100%;
  }

  #tell-popup .popup__inner-wrapper {
    height: 100%;
  }

  #tell-popup .take-quiz {
    margin: 33px auto 73px;
    color: var(--beige, #F8EDDF);
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 135%; /* 27px */
  }
  
  #tell-popup .popup__inner {
    max-width: 231px;
  }

  #tell-popup a.btn-primary {
    width: auto;
  }

  #what-popup ul {
    grid-template-columns: auto;
    grid-row-gap: 28px;
    margin-block: 48px 0;
  }

  #what-popup ul li {
    font-size: 30px;
  }

  #what-popup ul li p:first-child {
font-size: 20px;
font-weight: 500;
line-height: 24px; /* 120% */
max-width: 100% !important;
  }

  #what-popup ul li p:last-child {
font-size: 16px;
font-weight: 400;
line-height: 24px; /* 150% */
  }

  #what-popup ul li:nth-of-type(1) {
    order: 0;
  }
  #what-popup ul li:nth-of-type(2) {
    order: 2;
  }
  #what-popup ul li:nth-of-type(3) {
    order: 1;
  }

  
.popup__logo {
  top: 28px;
  left: 28px;
  width: 88px;
height: 39px;
}

 .popup__title {
  font-size: 46px;
  line-height: 49px; /* 98% */
 }

 .popup__title span {
  font-size: 50px;
 }

 #what-popup ul  p:first-child {
  max-width: 100%;
 }
 #what-popup ul li p:last-child {
  line-height: 135%; /* 24.3px */
  font-size: 18px;
 }

 #what-popup .popup__inner {
  max-height: 100%;
 }

 .popup {
  padding: 28px;
 }
 .popup__close {
  top: auto;
 }

 #what-popup .popup__inner {
  justify-content: normal;
 }

 .popup__info {
  height: 86%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
 }

 .btn-wrapper {
  margin-inline: 0;
}
}

@media screen and (max-width: 768px) {
.wally-revolution-info {
  display: none !important;
}

.home-text-locations-wrapper > div {
  color: var(--green-1, #006A5C);
font-size: 52px;
font-weight: 700;
line-height: 100%; /* 52px */
font-family: "Apercu Medium Pro", sans-serif !important;
}

.home-locations-text-title-1 {
  margin-left: 0.8em !important;
}
}

@media screen and (max-width: 479px) {
  .home-v2-hero-subtext {
    font-size: 1.1em;
    line-height: 1.29;
  }
  .home-v2-hero-text {
    margin-bottom: 5.3em !important;
  }

  .wally-experience-section {
    padding-top: 0 !important;  
  }
}
    </style>`

  const popupTrigger = /*html*/`
    <div id="popup-trigger" class="m-p-0 ff-primary">
      <p>How Does It Work?</p>
    </div>`

  const button = (type, eventLocation) =>/*html*/`
  <button class="btn-${type}" data-btn="become" data-location="${eventLocation}">
    <span>Become a Member</span>
    <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/6111718306355f781c8feaeb_arrow-dark.svg" alt="next arrow">
  </button>`

  const fixedButton = /*html*/`
    <div class="btn-wrapper-fixed">
      ${button('secondary', 'Sticky button')}
    </div>
  `

  const googleReviews = /*html*/`
    <div id="google-reviews" class="m-p-0 ff-primary">
      <img src="${IMAGE_DIR_URL}/stars.svg" alt="5 stars">
      <p>
        <strong style="margin-inline: 4px 8px;">4.9</strong>(Based on <strong>486</strong>
            <img src="${IMAGE_DIR_URL}/google-logo.svg" alt="google logo"> 
          reviews)
      </p>
    </div>`

  const whatPopup =  /*html*/`
    <div id="what-popup" class="popup m-p-0">
      <div class="popup-head">
          <div class="popup__logo">
            <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/60ec951925b835320d82efe8_header-logo.svg" alt="wally logo">
          </div>
          <div class="popup__close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M6.9043 34.7L16.7043 18.8917L8.24596 5.30005H14.7793L19.971 13.7L25.221 5.30005H31.696L23.296 18.8917L33.096 34.7H26.621L19.971 24.1417L13.321 34.7H6.9043Z" fill="#006A5C"/>
            </svg>
          </div>
        </div>
      <div class="popup__inner-wrapper">
        <div class="popup__inner">
        <div class="popup__info">
        <p class="popup__title"><span>How</span> It Works.</p>
          <ul class="ff-primary">
            <li>
              <p>Book your first appointment</p>
              <p>Get your membership for $199 (no fees, no insurance needed) and we text your booking link instantly.</p>
            </li>
            <li>
              <p>Have your first visit</p>
              <p>Get your x-rays, checkup, remove surface stains, and get your cleaning.</p>
            </li>
            <li>
              <p>Continue your care</p>
              <p>Book ongoing cleanings, get your personal whitening kit shipped to your door.</p>
            </li>
          </ul>
        </div>
        ${button('secondary', 'Whats is wallys dental care')}
        </div>
      </div>
    </div>`

  const tellUSPopup = /*html*/`
      <div id="tell-popup" class="popup m-p-0 ff-primary">
        <div class="popup-head">
          <div class="popup__logo">
            <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/60ec951925b835320d82efe8_header-logo.svg" alt="wally logo">
          </div>
          <div class="popup__close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M6.9043 34.7L16.7043 18.8917L8.24596 5.30005H14.7793L19.971 13.7L25.221 5.30005H31.696L23.296 18.8917L33.096 34.7H26.621L19.971 24.1417L13.321 34.7H6.9043Z" fill="#006A5C"/>
            </svg>
          </div>
        </div>
        <div class="popup__inner-wrapper">
          <div class="popup__inner">
            <p class="popup__title">First Things <span>First.</span></p>

            <p class="take-quiz">Because founding memberships are limited, take a 2-min quiz to see if you’re a fit.</p>

            <div class="btn-wrapper">
            <a class="btn-primary" href="https://wallyhealth.pro.typeform.com/to/pVusBqL3?typeform-source=www.carebywally.com">Start Quiz! <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/6111718306355f781c8feaeb_arrow-dark.svg" alt=""></a></div>
          </div>
        </div>
      </div>
  `

  const reviews = /*html*/`
       <div id="reviews-container" class="ff-primary m-p-0">
        <img class="bg-lines" src="${IMAGE_DIR_URL}/lines-bg.svg" alt="">
    <p>Word of<br><span>Mouth</span></p>

    <div class="reviews">
      <div class="reviews__part-one">
        <div class="review">
          <div class="review__reviewer">
            <div>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/636d1babd7aa4af51918c2f4_google.svg"
                alt="google">
            </div>
            <div>
              <p>JUSTIN J.</p>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/633b77f2aeac35f1ae504036_stars.svg"
                alt="5 stars">
            </div>
          </div>

          <div class="review__text">
            <p>This place is so amazing, I never felt treated with so much care for my teeth untill being introduced to
              Wally. So much insight and education on my teeth, this place may have saved me from a real serious tooth
              disease.</p>
          </div>
        </div>

        <div class="review">
          <div class="review__reviewer">
            <div>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/636d1babd7aa4af51918c2f4_google.svg"
                alt="google">
            </div>
            <div>
              <p>AMUL C.</p>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/633b77f2aeac35f1ae504036_stars.svg"
                alt="5 stars">
            </div>
          </div>

          <div class="review__text">
            <p>I've only had one visit so far, walked away feeling like the people were knowledgeable and looking out
              for my best interest, Regardless if you have dental insurance or not, Wally is an incredible value and I
              completely recommend it.</p>
          </div>
        </div>

        <div class="review">
          <div class="review__reviewer">
            <div>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/636d1babd7aa4af51918c2f4_google.svg"
                alt="google">
            </div>
            <div>
              <p>NATASHA S.</p>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/633b77f2aeac35f1ae504036_stars.svg"
                alt="5 stars">
            </div>
          </div>

          <div class="review__text">
            <p>Wally Health is the best dental experience I’ve ever had. They really go above and beyond to understand
              your dental history, how you feel, what your worries are. They’re wonderful at explaining the how’s and
              why’s of what they’re doing. I tell everyone I know to go there.</p>
          </div>
        </div>
      </div>
      <div class="reviews__view">
        <p>View More</p>
      </div>
      <div class="reviews__part-two">
        <div class="review">
          <div class="review__reviewer">
            <div>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/636d1babd7aa4af51918c2f4_google.svg"
                alt="google">
            </div>
            <div>
              <p>KAITLIN S.</p>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/633b77f2aeac35f1ae504036_stars.svg"
                alt="5 stars">
            </div>
          </div>

          <div class="review__text">
            <p>My visit was fantastic. No wait, attentive staff, the hygienist was excellent and the dentist was really
              kind!They even did a virtual consult after to go through my x-rays and personalized recommendations and
              talk me through next steps.</p>
          </div>
        </div>

        <div class="review">
          <div class="review__reviewer">
            <div>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/636d1babd7aa4af51918c2f4_google.svg"
                alt="google">
            </div>
            <div>
              <p>AMY D.</p>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/633b77f2aeac35f1ae504036_stars.svg"
                alt="5 stars">
            </div>
          </div>

          <div class="review__text">
            <p>This was the most thorough visit I have ever had with a dental office!! They took the time to explain
              everything, they were so kind and friendly, and I felt cared for from beginning to end. Best decision I
              made for my dental health.</p>
          </div>
        </div>


        <div class="review">
          <div class="review__reviewer">
            <div>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/636d1babd7aa4af51918c2f4_google.svg"
                alt="google">
            </div>
            <div>
              <p>CLAY M.</p>
              <img src="https://uploads-ssl.webflow.com/60a81d43a468febf25fad764/633b77f2aeac35f1ae504036_stars.svg"
                alt="5 stars">
            </div>
          </div>

          <div class="review__text">
            <p>Super impressive dental care - I'm still surprised at how easy and straightforward they make
              everything... I keep expecting to have a mediocre conventional dentist experience, but they have continued
              to go above and beyond with every aspect of the experience!</p>
          </div>
        </div>

      </div>
    </div>
  </div> `

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  const waitForSections = setInterval(() => {
    const $homeHeroSection = document.querySelector('.home-v2-hero-section')
    const $homeHeroInnerDesktopSection = document.querySelector('.home-v2-hero-inner-desktop')
    const $homeHeroInnerMobileSection = document.querySelector('.home-v2-hero-inner')
    const $revolutionSection = document.querySelector('.wally-revolution-section')
    const $experienceSection = document.querySelector('.wally-experience-section')
    const $faqSection = document.querySelector('.main-faq-section')
    const $asSeenSection = document.querySelector('.as-seen-in-section')

    const $homeLocationsSection = document.querySelector('.home-locations-section')
    const $homeTicker = document.querySelector('.home-generic-ticker')
    const $stackSection = document.querySelector('.stack-up-section')

    const $topHeaderBtn = document.getElementById('top-header-button')

    const $reviewsSection = document.querySelector('.word-of-mouth-section')

    if (
      $homeHeroSection
      && $homeHeroInnerDesktopSection
      && $homeHeroInnerMobileSection
      && $revolutionSection
      && $experienceSection
      && $topHeaderBtn
      && $asSeenSection
      && $reviewsSection
      && $homeTicker
    ) {
      clearInterval(waitForSections)

      /* replace elements order */
      $homeLocationsSection.insertAdjacentElement('beforebegin', $stackSection)
      $homeLocationsSection.insertAdjacentElement('beforebegin', $homeTicker)

      $reviewsSection.insertAdjacentElement('afterend', $experienceSection)

      /* add custom elements */
      $topHeaderBtn.insertAdjacentHTML('beforebegin', popupTrigger)
      $homeHeroSection.insertAdjacentHTML('beforeend', googleReviews)

      if (DEVICE === 'desktop') {
        $homeHeroInnerDesktopSection.insertAdjacentHTML('beforeend', button('primary', 'First screen'))

        $asSeenSection.insertAdjacentHTML('afterbegin', /*html*/`
        <div class="gradient-line" >
        <img src="${IMAGE_DIR_URL}/seen-in-1.svg" alt=""></div>
      `)

      } else {
        $homeHeroInnerMobileSection.insertAdjacentHTML('beforeend', button('primary', 'First screen'))

        $reviewsSection.insertAdjacentHTML('beforeend', reviews)

        $asSeenSection.insertAdjacentHTML('afterbegin', /*html*/`
        <img class="gradient-line" src="${IMAGE_DIR_URL}/gradient-mob-1.svg" alt="">
      `)



        const waitForViewMoreReviews = setInterval(() => {
          const reviewsPartTwo = document.querySelector('.reviews__part-two')
          const reviewsView = document.querySelector('.reviews__view')
          if (reviewsPartTwo && reviewsView) {
            clearInterval(waitForViewMoreReviews)

            reviewsView.addEventListener('click', () => {
              reviewsView.style.display = "none"
              reviewsPartTwo.style.display = "block"

              pushDataLayer(['exp_new_hp_b_wm_vm', 'View more', 'Button', 'World of mouth'])
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)

      }

      // $revolutionSection.insertAdjacentHTML('afterend', /*html*/`
      // <div class="gradient-line" >
      // <img src="${IMAGE_DIR_URL}/gradient-mob-3.svg" alt="">
      // </div>
      // `)


    }
  }, WAIT_INTERVAL_TIMEOUT)

  document.body.insertAdjacentHTML('beforeend', fixedButton)
  document.body.insertAdjacentHTML('beforeend', whatPopup)
  document.body.insertAdjacentHTML('beforeend', tellUSPopup)

  waitForElement('.word-of-mouth-section .word-of-mouth-tag').then(el => el.innerHTML = '<p>Word of <span>Mouth</span></p>')

  /* add handlers */
  const waitForWhatPopupAndTrigger = setInterval(() => {
    const popupTrigger = document.getElementById('popup-trigger')
    const popup = document.getElementById('what-popup')

    if (popupTrigger && popup) {
      clearInterval(waitForWhatPopupAndTrigger)

      popupTrigger.addEventListener('click', () => {
        popup.classList.add('popup--show')
        pushDataLayer(['exp_new_hp_l_fs_hdiw', 'How does it work', 'Link', 'First screen'])

        pushDataLayer(['exp_new_hp_v_pp_wiwdc', 'Pop up 1', 'Visibility', 'Whats is wallys dental care'])
      })
    }
  }, WAIT_INTERVAL_TIMEOUT)

  const waitForHomeBtn = setInterval(() => {
    const homeSection = document.querySelector('.home-v2-hero-section')
    const homeBtn = document.querySelector('.btn-wrapper-fixed')

    if (homeSection && homeBtn) {
      clearInterval(waitForHomeBtn)

      handleBtnVisibility(homeSection, homeBtn)
    }
  }, WAIT_INTERVAL_TIMEOUT)

  const waitForPopupCloseX = setInterval(() => {
    if (document.querySelectorAll('.popup__close')[0]) {
      clearInterval(waitForPopupCloseX)

      for (const closeX of document.querySelectorAll('.popup__close')) {
        closeX.addEventListener('click', () => {
          //closeX.closest('.popup').classList.remove('popup--show')

          for (const popup of document.querySelectorAll('.popup--show')) {
            popup.classList.remove('popup--show')
          }

          if (closeX.closest('#what-popup')) {
            pushDataLayer(['exp_new_hp_c_wiwdc_pp', 'Pop up 1', 'Close', 'Whats is wallys dental care'])
          } else {
            pushDataLayer(['exp_new_hp_c_tu_pp', 'Pop up 2', 'Close', 'Tell us'])
          }
        })
      }

    }
  }, WAIT_INTERVAL_TIMEOUT)

  waitForElement('#tell-popup a.btn-primary').then(el => el.addEventListener('click', () => {
    pushDataLayer(['exp_new_hp_c_tu_pp', 'Start quiz', 'Button', 'Tell us'])
  }))

  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity('set', `new_hp`, 'variant_1')

    }
  }, WAIT_INTERVAL_TIMEOUT)

  const waitForBecomeMemberBtns = setInterval(() => {
    if (document.querySelectorAll('[data-btn="become"]')[2]) {
      clearInterval(waitForBecomeMemberBtns)

      for (const btn of document.querySelectorAll('[data-btn="become"]')) {
        btn.addEventListener('click', () => {
          document.getElementById('tell-popup').classList.add('popup--show')

          pushDataLayer(['exp_new_hp_v_tu_pp', 'Pop up 2', 'Visibility', 'Tell us'])

          const eventLocation = btn.dataset.location

          switch (eventLocation) {
            case 'First screen':
              pushDataLayer(['exp_new_hp_b_fs_bm', 'Become a member', 'Button', 'First screen'])
              break
            case 'Sticky button':
              pushDataLayer(['exp_new_hp_b_sb_bm', 'Become a member', 'Button', 'Sticky button'])
            case 'Whats is wallys dental care':
              pushDataLayer(['exp_new_hp_b_wiwdc_bm', 'Become a member', 'Button', 'Whats is wallys dental care'])
            default:
              break
          }


        })
      }


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

  const handleVisibilityAndHover = (el, event) => {
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

  const pushDataLayer = ([event_name, event_desc, event_type, event_loc]) => { // Send a Google Analytics event
    const eventData = {
      'event': 'event-to-ga4', event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)
  }

  function handleBtnVisibility(visibleElement, btn) {
    const config = {
      root: null,
      rootMargin: '-50px 0px 0px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          btn.classList.remove('btn--visibility')
        } else {
          btn.classList.add('btn--visibility')
        }
      })
    }, config)

    observer.observe(visibleElement)
  }
})()