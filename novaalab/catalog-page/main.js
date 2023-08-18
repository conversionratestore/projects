; (function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/novaalab/catalog-page/images'

  const style = /*html*/`
    <style>
#r-1662371412986 {
  display: none !important;
}

body:not(.template-index) .main-content {
  padding-top: 0 !important;
}

/* General styling */
.crs-block {
  color: #3D4852;
  line-height: 1.5;
  font-family: "Urbanist";
}

.container {
  width: min(1200px, (100% - (16px * 2)));
  margin-inline: auto;
}

.banner {
  margin-block: 10px;
}

.banner .container {
  background-color: #F5F5FD;
  border-radius: 6px;
}

.banner__content {
  padding: 13px 0;
  max-width: 663px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner__reviews {
  width: 35%;
}

.banner__companies {
  width: 60%;
}

.banner__rate {
  font-size: 48px;
  font-family: "Montserrat";
  font-weight: 700;
  margin-top: 4px;
  color: #212121;
}

.banner__rate+div {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.banner__rate+div img {
  margin-bottom: 4px;
  width: 128px;
  height: 24px;
  margin-left: -5px;
}

.banner__link {
  color: #3D4852;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.428;
  text-decoration: none;
}

.banner__reviews {
  display: flex;
  align-items: center;
  gap: 12px;
}

.underheading {
  color: #773BD9;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 12px;
}

.heading {
  color: #212121;
  font-family: 'Montserrat';
  font-size: 48px;
  font-weight: 700;
  line-height: 1.33;
}

.wrapper {
  width: min(1200px, calc(100% - (16px * 2)));
  margin-inline: auto;
}

.catalog {
  padding-block: 30px 45px;
}

.filter__buttons {
  display: flex;
  gap: 15px;
  padding-block: 2px 10px;
}

/* buttons */
.btn-filter {
  border: 2px solid #3D4852;
  padding: 10px 22px;
  border-radius: 4px;
  background: #FFF;
  color: #212121;
  font-family: "Urbanist";
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all .5s ease;
}

.btn-filter.btn-filter--active {
  background: #212121;
  color: #FFF;
  border: 2px solid transparent;
}

.btn-filter:not(.btn-filter--active):hover,
.btn-filter:not(.btn-filter--active):focus-visible {
  border: 2px solid #3D4852;
  background: #F5F5FD;
  color: #3D4852;
}

.btn-learn {
  display: inline-block;
  width: 100%;
  border: none;
  border-radius: 4px;
  background: linear-gradient(to right, #6519f4, #a042f3) no-repeat;
  background-size: 100%;

  padding: 12px;
  color: #FFF !important;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Urbanist";
  line-height: 1.5;
  transition: all .8s ease-in-out;
}

.btn-learn:hover,
.btn-learn:focus-visible {
  background-size: 300%;
}

.btn-add {
  display: flex;
  align-items:center;
  border: none;
  border-radius: 4px;
  background: #F5F5FD;
  padding: 9px;
  color: #212121;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.71;
  cursor: pointer;
  font-family: "Urbanist";
  line-height: 1.5;
}

.btn-add img {
  transition: .3s filter ease;
}

.btn-add:hover img,
.btn-add:focus-visible img {
  filter: brightness(0) saturate(100%) invert(28%) sepia(34%) saturate(5226%) hue-rotate(251deg) brightness(86%) contrast(97%);
}

.btn-filter,
/* .btn-add, */
.banner__link,
.product__name,
.table__product-name,
.table-mobile__name {
  transition: all .5s ease;
}

.banner__link:hover,
.banner__link:focus-visible,
.product__name:hover,
.product__name:focus-visible,
.table__product-name:hover,
.table__product-name:focus-visible,
.table-mobile__name:hover,
.table-mobile__name:focus-visible {
  color: #773BD9;
}

.filter__select {
  display: none;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #212121;
  padding: 10px 16px;
  color: #212121;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-family: "Urbanist";
  font-style: normal;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: url(${IMAGE_DIR_URL}/16_arrow.svg) no-repeat calc(100% - 16px) center;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.products>div {
  width: calc(33.3% - 15px);
  margin-top: 30px
}

.product {
  display: none;
}

.product.product--visible {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product__info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 38%;
}

.product__img-wrapper {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  max-height: 350px;
}

.product__img-wrapper a img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.products .product:first-child .product__img-wrapper a img {
  object-position: bottom;
}

.product__moneyback {
  position: absolute;
  top: 6px;
  left: 0px;
  width: 194px;
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  gap: 4px;
  background: url(${IMAGE_DIR_URL}/rectangle.svg) no-repeat center;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: 0.7px;
}

.product__moneyback p {
  margin: 0;
}

.product__sale {
  position: absolute;
  top: 40px;
  left: 0;
  width: 86px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${IMAGE_DIR_URL}/rectangle-2.svg) no-repeat center;

  font-size: 13px;
  color: #FFF;
  font-weight: 600;
  line-height: 1.38;
  letter-spacing: 0.65px;
  text-transform: uppercase;
}

.product__rate {
  margin-block: 12px 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #212121;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.product__rate img {
  max-width: 86px;
}

.product__name {
  color: #212121;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 1.2px;
  text-decoration: none;
  margin-block: 4px;
}

.product__subname {
  color: #3D4852;
  font-size: 16px;
  letter-spacing: 0.8px;
  margin-bottom: 0;
}

.product__price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-block: 16px 12px;
}

.product__price [data-price="current"] {
  color: #212121;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: 1.2px;
}

.product__price [data-price="old"] {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.428;
  letter-spacing: 0.7px;
  text-decoration: line-through;
}

.product__price [data-price="discount"] {
  display: flex;
  align-items: center;
  color: #D84432;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.7px;
  border-radius: 100px;
  background: rgba(216, 68, 50, 0.10);
  padding: 2px 8px;
}

.product__buttons {
  display: flex;
  justify-content: space-between;
}

.product__buttons a {
  width: 78%;
}

.product__buttons .btn-add {
  width: 18%;
}

.product__buttons button img {
  margin-inline: auto;
}

.product__buttons button span {
  display: none;
}

.compare {
  padding-block: 45px 0px;
}

.table-mobile-wrapper {
  display: none;
}

.table-mobile-wrapper>div {
  display: flex;
}

.table-wrapper {
  margin-top: 40px;
  border: 1px solid #EAEAEA;
  border-radius: 4px 4px 0px 0px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  background-color: #FFF !important;
}

.table-mobile {
  background-color: #FFF !important;
}

.table th::after, .table td::after,
.table-mobile th::after, .table-mobile td::after {
  display: none !important;
}

/* .table img {
  max-width: 160px;
} */

.table th {
  background: #F5F5FD;
  padding: 8px;
  color: #212121;
text-align: center;
font-family: "Urbanist";
font-size: 16px;
font-weight: 700;
line-height: 1.5;
letter-spacing: 0.8px;
text-transform: none;
}

.table th:first-child {
  border-radius: 4px 0px 0px 0px;
}

.table th:last-child {
  border-radius: 0px 4px 0px 0px;
}

.table th:not(:last-child),
.table td:not(:last-child) {
  border-right: 1px solid #EAEAEA;
}

.table th,
.table tr:not(:last-child) td {
  border-bottom: 1px solid #EAEAEA;
}

.table td {
  padding: 8px;
  text-align: center;
  width: 100%;
  font-weight: 500;
}

th[data-cell="Products"] {
  width: 32.3%;
}

th[data-cell="Zones"] {
  width: 12.5%;
}

th[data-cell="Benefits"] {
  width: 13.3%;
}

th[data-cell="Medical Lights"] {
  width: 16%;
}

th[data-cell="Size"] {
  width: 12.5%;
}

th[data-cell="Size"] {
  width: 13.3%;
}

.table td {
  font-weight: 500;
}

.table td small {
  color: #6D6E75;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.428;
}

td[data-cell="Products"] {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-right: 20px;
}

td[data-cell="Products"]>div {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
}

td[data-cell="Products"] > a {
  max-width: 44%;
  max-height: 150px;
}

td[data-cell="Products"] img {
  border-radius: 4px;
  height: 100%;
  width: 100%;
  object-fit:cover;
}

td[data-cell="Products"] a {
  width: 100%;
}

td[data-cell="Products"] .btn-learn {
  padding: 12px;
}

.table__product-name {
  color: #212121;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.44;
  letter-spacing: 0.9px;
  text-decoration: none;
  text-align: left;
}

td[data-cell="Benefits"] {
  text-align: center;
  letter-spacing: 0.8px;
}

td[data-cell="Medical Lights"] {
  line-height: 1.25;
}

td[data-cell="Medical Lights"]>div {
  display: flex;
  justify-content: space-between;
  max-width: 144px;
  margin-inline: auto;
}

td[data-cell="Medical Lights"]>div:not(:last-child) {
  margin-bottom: 8px;
}

td[data-cell="Medical Lights"]>div>div {
  display: flex;
  align-items: flex-start;
}

td[data-cell="Medical Lights"]>div>div:first-child {
  gap: 4px;
  text-align: left;
}

td[data-cell="Medical Lights"]>div>div:last-child {
  text-align: center;
  font-weight: 600;
}

td[data-cell="Price"] {
  text-align: center;
}

td[data-cell="Price"] small {
  text-decoration: line-through;
}

td[data-cell="Price"] span {
  color: #212121;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 1px;
}

@media screen and (max-width: 800px) {
  .banner {
    margin-block: 8px 16px;
  }

  .banner__content {
    padding: 16px 27px;
    flex-direction: column;
    gap: 12px;
  }

  .banner__rate {
    font-size: 40px;
    line-height: 1.4;
    margin-top: 0;
  }

  .banner__reviews,
  .banner__companies {
    width: 100%;
    justify-content: center;
  }

  .catalog {
    padding-block: 10px 30px;
  }

  .underheading {
    font-size: 18px;
    line-height: 1.44;
    margin-bottom: 8px;
  }

  .heading {
    font-size: 32px;
    line-height: 1.25;
  }

  .btn-learn {
    font-size: 14px;
    line-height: 1.71;
  }

  .btn-add {
    padding: 8px;
  }

  .filter__buttons {
    display: none;
  }

  .filter__select {
    display: block;
    margin-block: 16px 8px;
  }

  .products>div {
    width: calc(50% - 7px);
    margin-top: 16px;
  }

  .product__img-wrapper {
    max-height: 164px;
  }

  .product__moneyback {
    width: 100%;
    top: auto;
    bottom: 0;
    gap: 2px;
    font-size: 12px;
    letter-spacing: 0.6px;
    line-height: 1.166;
    border-radius: 2px;
    background: #F5F5FD;
    justify-content: center;
    padding-left: 0;
  }

  .product__sale {
    background: url(${IMAGE_DIR_URL}/rectangle-3.svg) no-repeat center;
    left: auto;
    top: 0;
    right: 0;
    width: 72px;
    height: 24px;
    justify-content: end;
    padding-right: 5px;
    font-size: 12px;
    letter-spacing: 0.6px;
    line-height: 1;
  }

  .product__rate {
    font-size: 14px;
    letter-spacing: 0.7px;
    line-height: 1.42;
    margin-block: 8px 4px;
  }

  .product__name {
    font-size: 16px;
    letter-spacing: 0.8px;
    line-height: 24px;
  }

  .product__subname {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.6px;
  }

  .product__price {
    margin-block: 8px 12px;
    flex-wrap: wrap;
    gap: 0;
  }

  .product__price [data-price="old"] {
    order: 0;
    width: 100%;
    font-size: 13px;
    line-height: 1.384;
    letter-spacing: 0.65px;
  }

  .product__price [data-price="current"] {
    order: 1;
    margin-right: 8px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.8px;
  }

  .product__price [data-price="discount"] {
    order: 2;
    font-size: 13px;
    line-height: 1.384;
    letter-spacing: 0.65px;
  }

  .product__buttons {
    flex-direction: column;
    gap: 8px;
  }

  .product__buttons>* {
    width: 100% !important;
  }

  .btn-learn {
    padding: 8px;
  }

  .product__buttons button {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .product__buttons button span {
    display: inline;
  }

  .product__buttons button img {
    margin: 0;
  }

  .compare {
    padding-block: 30px 0px;
  }

  .table-wrapper {
    display: none;
  }

  .table-mobile-wrapper {
    display: block;
    overflow-x: scroll;
    margin-top: 24px;
    margin-left: 16px;
    padding-bottom: 32px;
  }

  .table-mobile-wrapper .table-mobile {
    border-collapse: collapse;
    height: 1px;
    /* margin-right: 16px; */
  }

  .table-mobile caption {
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #EAEAEA;
    border-bottom: 0;
    background: #F5F5FD;
    text-align: left;
    padding-left: 17%;
    padding-block: 4px;
  }

  .table-mobile caption span {
    position: sticky;
    text-align: left;
    left: 10px;
    font-size: 14px;
    color: #212121;
    line-height: 1.71;
    letter-spacing: 0.7px;
    font-weight: 700;
  }

  .table-mobile__columns {
    display: flex;
    flex-direction: row;
  }

  .table-mobile tbody tr {
    font-size: 14px;
  }

  .table-mobile tbody tr:nth-child(even) {
    background: #F5F5FD;
    color: #212121;
    font-weight: 700;
    line-height: 1.714;
    letter-spacing: 0.7px;
  } 
  
  .table-mobile tbody tr:nth-child(even) td {padding: 4px 8px;}

  .table-mobile-wrapper td {
    display: table-cell;
    padding: 8px 7px;
    min-width: 146px;
    text-align: center;
    border: 1px solid #EAEAEA;
  }

  .table-mobile-wrapper [data-row="info"] td>div {
    display: flex;
    height: 100%;
    gap: 8px;
    flex-direction: column;
    justify-content: space-between;
  }

  .table-mobile__name {
    display: block;
    color: #212121;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.7px;
    margin-top: 8px;
    text-decoration: none;
  }

  .table-mobile-wrapper [data-row="info"] .table-mobile__img-wrapper {
    display: block;
    margin-inline: auto;
    max-width: 110px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 4px;
  }

  .table-mobile-wrapper [data-row="info"] .table-mobile__img-wrapper img {


    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .table-mobile-wrapper [data-row="info"] td:first-child img {
    object-position: top;
  }

  .table-mobile__price {
    margin-bottom: 8px;
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }

  .table-mobile__price span:first-child {
    color: #6D6E75;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.6px;
    text-decoration: line-through;
  }

  .table-mobile__price span:last-child {
    color: #212121;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.428;
    letter-spacing: 0.7px;
  }

  .table-mobile-wrapper::-webkit-scrollbar {
    height: 3px;
  }

  .table-mobile-wrapper::-webkit-scrollbar-track {
    background: #EAEAEA;
  }

  .table-mobile-wrapper::-webkit-scrollbar-thumb {
    background: #773BD9;
  }

  @supports (scrollbar-color: red blue) {
    .table-mobile-wrapper {
      scrollbar-color: #773BD9 #EAEAEA;
      scrollbar-width: thin;
    }
  }

  .table-mobile-wrapper [data-row="Medical Lights content"] td {
    padding: 4px 8px;
  }  

  [data-row="Medical Lights content"] td>div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 1.428;
  }

  [data-row="Medical Lights content"] td>div>div {
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: start;
    gap: 4px;
  }

  [data-row="Medical Lights content"] td>div>div+div {
    text-align: center;
    line-height: 1.6;
  }

  [data-row="Medical Lights content"] td>div>div+div {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.7px;
  }

  [data-row="Medical Lights content"] td>div>div+div small{
    color: #6D6E75;
    font-weight: 400;
    letter-spacing: normal;
    font-size: 14px;
  }
}
    </style>
  `

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  drawBlockWrapper()
  drawCatalogProducts()
  drawTableProducts()

  const waitForReviews = setInterval(() => {
    const rate = document.querySelector('#m-1662371984680 .opw-font6Xl.opw-font-bold.opw-navbarTextColor.opw-pr-2')
    const reviews = document.querySelector('#m-1662371984680 .opw-fontLg.opw-textColor.opw-mb-auto.opw-capitalize')

    const bannerRate = document.querySelector('.banner__rate')
    const bannerReviews = document.querySelector('.banner__link')

    if (
      rate
      && reviews
      && bannerRate
      && bannerReviews
    ) {
      clearInterval(waitForReviews)

      bannerRate.innerText = rate.innerText
      bannerReviews.innerText = reviews.innerText
    }
  }, WAIT_INTERVAL_TIMEOUT)

  const waitForAddBtns = setInterval(() => {
    if (document.querySelectorAll('.btn-add')[5]) {
      clearInterval(waitForAddBtns)

      handleAddToCartClicks(document.querySelectorAll('.btn-add'))
      handleFilterProducts()
    }
  }, WAIT_INTERVAL_TIMEOUT)

  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity('set', `pl_improvements`, 'variant_1')
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

  const handleVisibilityAndHover = (el, event, threshold = 1) => {
    const ms = 3000
    let timer

    const config = {
      root: null,
      threshold,
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
      event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function drawBlockWrapper() {
    const block = /*html*/`
    <div class="crs-block">

<div class="banner">
  <div class="container">
      <div class="banner__content">
        <div class="banner__reviews">
          <span class="banner__rate">4.8</span>
          <div>
            <img src="${IMAGE_DIR_URL}/stars.svg" alt="">
            <a class="banner__link" href="#m-1662371984680">From 1048 Reviews</a>
          </div>
        </div>
        <div class="banner__companies">
          <img src="${IMAGE_DIR_URL}/companies.png" alt="companies">
        </div>
      </div>
  </div>
</div>

<section class="catalog">
  <div class="container">
    <p class="underheading">Heal faster from home.</p>
    <h2 class="heading">Our home therapy catalog</h2>
    <div class="filter">
      <div class="filter__buttons">
        <button class="btn-filter btn-filter--active" data-filter="all">All products</button>
        <button class="btn-filter" data-filter="body">Whole Body</button>
        <button class="btn-filter" data-filter="gums">Gums and Teeth</button>
        <button class="btn-filter" data-filter="knees">Knees</button>
        <button class="btn-filter" data-filter="skin">Skin</button>
      </div>

      <select name="catalog filter" id="catalog-filter" class="filter__select">
        <option value="All products" data-filter="all">All products</option>
        <option value="Whole Body" data-filter="body">Whole Body</option>
        <option value="Gums and Teeth" data-filter="gums">Gums and Teeth</option>
        <option value="Knees" data-filter="knees">Knees</option>
        <option value="Skin" data-filter="skin">Skin</option>
      </select>

      <div class="products"></div>
    </div>
  </div>
</section>

<section class="compare">
  <div class="container">
    <p class="underheading">Compare and choose!</p>
    <h2 class="heading">Choose a device that better suits you</h2>

    <div class="tables-wrapper">
    
      <div class="table-wrapper">
        <table class="table" role="table">
          <tbody role="rowgroup">
            <tr role="row">
              <th data-cell="Products" role="columnheader">Products</th>
              <th data-cell="Zones" role="columnheader">Zones</th>
              <th data-cell="Benefits" role="columnheader">Benefits</th>
              <th data-cell="Medical Lights" role="columnheader">Medical Lights</th>
              <th data-cell="Size<" role="columnheader">Size</th>
              <th data-cell="Price" role="columnheader">Price</th>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="table-mobile-wrapper">
        <table class="table-mobile" role="table">
          <caption role="caption"><span>Products</span></caption>
          <tbody role="rowgroup">
          </tbody>
        </table>
      </div>

    </div>

  </div>
</section>
</div>
  `

    waitForElement(".main-content").then(el => el.insertAdjacentHTML('afterbegin', block))

    waitForElement('.banner').then(el => handleVisibilityAndHover(
      el,
      ['exp_pl_improv_v_bwb', 'Banner with benefits', 'Visibility', 'Top of the page'])
    )
  }

  function drawCatalogProducts() {
    const productCatalogData = [
      {
        id: 46883225993561,
        name: 'Novaa deep healing pad with remote [2023]',
        pdpLink: 'https://novaalab.com/products/new-red-light-therapy-pad-at-home-with-remote',
        imgUrl: 'https://novaalab.com/cdn/shop/files/redlighttherapypadathomeinfrared5remote-700px_3f94f46c-419e-4fd5-8103-2303cea8d8de_1024x1024.jpg?v=1690021156',
        filter: 'body',
        healing: 'The Deep Healing Therapy',
        rate: '4.8',
        price: '$349.90',
        oldPrice: '$700.00',
        discount: '-50%'
      },
      {
        id: 40322897838134,
        name: 'Novaa light pad [2022]',
        pdpLink: 'https://novaalab.com/products/novaa-light-pad-powerful-red-light-therapy-at-home',
        imgUrl: 'https://novaalab.com/cdn/shop/products/Pad1_1_1_9120d702-160d-47d7-8fc0-4cbb61322f15_1024x1024.jpg?v=1660746782',
        filter: 'body',
        healing: 'The Deep Healing Therapy',
        rate: '4.8',
        price: '$299.90',
        oldPrice: '$540.90',
        discount: '-45%'
      },
      {
        id: 40365298679862,
        name: 'Novaa oral care pro',
        pdpLink: 'https://novaalab.com/products/novaa-oral-care-gums-periodontal-treatment',
        imgUrl: 'https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_1024x1024.jpg?v=1662108128',
        filter: 'gums',
        healing: 'Complete Oral Care',
        rate: '4.6',
        price: '$129.90',
        oldPrice: '$199.90',
        discount: '-35%'
      },
      {
        id: 40156488761398,
        name: 'Novaa extra strength laser',
        pdpLink: 'https://novaalab.com/products/laser-red-light-therapy',
        imgUrl: 'https://novaalab.com/cdn/shop/products/ColdLaserredlighttherapy9_1024x1024.jpg?v=1655115461',
        filter: 'skin',
        healing: 'Extra Power Healing Laser',
        rate: '4.9',
        price: '$299.90',
        oldPrice: '$399.00',
        discount: '-25%'
      },
      {
        id: 32854816784438,
        name: 'Novaa light pro',
        pdpLink: 'https://novaalab.com/products/novaa-light-pro-red-light-laser-therapy-device',
        imgUrl: 'https://novaalab.com/cdn/shop/products/Pro5_1024x1024.jpg?v=1627031589',
        filter: 'body',
        healing: 'The Deep Healing Therapy',
        rate: '4.9',
        price: '$149.90',
        oldPrice: '$299.90',
        discount: '-50%'
      },
      {
        id: 39782656311350,
        name: 'Novaa deep healing pad for your knee',
        pdpLink: 'https://novaalab.com/products/knee-treatment-therapy-wrap-arthritis-relief',
        imgUrl: 'https://novaalab.com/cdn/shop/products/DSC_2736_c5dd20f9-3deb-423c-a550-1d4fbd0bcbdf_1024x1024.jpg?v=1637504400',
        filter: 'knees',
        healing: 'Heal your knee faster',
        rate: '4.8',
        price: '$299.90',
        oldPrice: '$540.90',
        discount: '-45%'
      },
    ]

    const productCatalogTemplate = (id, name, link, src, filter, healing, rate, price, oldPrice, discount) => /*html*/`
    <div class="product product--visible" data-product-filter="${filter}">
      <div class="product__img-wrapper">
        <div class="product__moneyback">
          <img src="${IMAGE_DIR_URL}/24_Guranteed.svg" alt="">
          <p>60 Days money back</p>
        </div>
        <p class="product__sale">On sale</p>
        <a href="${link}">
          <img
            src="${src}"
            alt="${name}">
        </a>
      </div>
      <div class="product__info">
        <div class="product__content-top">
          <div class="product__rate">
            <img src="${IMAGE_DIR_URL}/stars.svg" alt="">
            <span>${rate}</span>
          </div>
          <a href="${link}" class="product__name">${name}</a>
          <p class="product__subname">${healing}</p>
        </div>
        <div class="product__content-bottom">
          <div class="product__price">
            <span data-price="current">${price}</span>
            <span data-price="old">${oldPrice}</span>
            <span data-price="discount">${discount}</span>
          </div>
          <div class="product__buttons">
            <a href="${link}" class="btn-learn">Learn more</a>
            <button class="btn-add" data-product-id="${id}"><img src="${IMAGE_DIR_URL}/24_cart.svg" alt="Add to cart"><span>Add to
                cart</span></button>
          </div>
        </div>
      </div>
    </div>
  `
    const catalogHTML = productCatalogData.map(product => {
      return productCatalogTemplate(
        product.id,
        product.name,
        product.pdpLink,
        product.imgUrl,
        product.filter,
        product.healing,
        product.rate,
        product.price,
        product.oldPrice,
        product.discount,
      )
    }).join('')

    waitForElement('.products')
      .then(el => {
        el.innerHTML = catalogHTML
        el.addEventListener('click', (e) => {
          const target = e.target

          switch (true) {
            case target.classList.contains('btn-learn'):
              pushDataLayer(['exp_pl_improv_b_lm_ps', 'Learn more', 'Button', 'Product section'])
              break
            case target.classList.contains('btn-add'):
              pushDataLayer(['exp_pl_improv_b_atc', 'Add to cart', 'Button', 'Product section'])
              break
          }
        })
      })
  }

  function drawTableProducts() {
    const productsTableData = [
      {
        name: 'Novaa deep healing pad with remote [2023]',
        pdpLink: `https://novaalab.com/products/new-red-light-therapy-pad-at-home-with-remote`,
        imgUrl: `https://novaalab.com/cdn/shop/files/redlighttherapypadathomeinfrared5remote-700px_3f94f46c-419e-4fd5-8103-2303cea8d8de_1024x1024.jpg?v=1690021156`,
        zones: 'Whole Body',
        benefits: `Easy To Use, Deep Pain Relief`,
        lights: [
          {
            iconName: 'deep_red',
            description: 'Deep red',
            nm: '660',
            number: `120`
          },
          {
            iconName: 'infrared',
            description: 'Infrared',
            nm: `850`,
            number: `240`
          },
        ],
        size: '15.7" x 9"',
        price: ['$700.00', '$349.90']
      },
      {
        name: 'Novaa light pad [2022]',
        pdpLink: `https://novaalab.com/products/novaa-light-pad-powerful-red-light-therapy-at-home`,
        imgUrl: `https://novaalab.com/cdn/shop/products/Pad1_1_1_9120d702-160d-47d7-8fc0-4cbb61322f15_1024x1024.jpg?v=1660746782`,
        zones: 'Whole Body',
        benefits: `Strapable, Covers A Large Area, Easy To Use`,
        lights: [
          {
            iconName: 'deep_red',
            description: 'Deep red',
            nm: '660',
            number: `120`
          },
          {
            iconName: 'infrared',
            description: 'Infrared',
            nm: `850`,
            number: `240`
          },
        ],
        size: `15.7" x 9"`,
        price: ['$540.90', '$299.90']
      },
      {
        name: 'Novaa oral care pro',
        pdpLink: `https://novaalab.com/products/novaa-oral-care-gums-periodontal-treatment`,
        imgUrl: `https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_1024x1024.jpg?v=1662108128`,
        zones: `Gums and Teeth`,
        benefits: `Affordable, Easy Daily Oral Care`,
        lights: [
          {
            iconName: 'blue',
            description: 'Blue',
            nm: '450',
            number: `8`
          },
          {
            iconName: 'deep_red',
            description: 'Deep red',
            nm: `660`,
            number: `8`
          },
        ],
        size: `Remote size:<br>5.1" x 1.4" x 1.2"<br>Mouth tray size: 2.2" x 1.4" x 0.8"`,
        price: ['$199.90', '$129.90']
      },
      {
        name: 'Novaa light pro',
        pdpLink: `https://novaalab.com/products/novaa-light-pro-red-light-laser-therapy-device`,
        imgUrl: `https://novaalab.com/cdn/shop/products/Pro5_1024x1024.jpg?v=1627031589`,
        zones: 'Whole Body',
        benefits: `Affordable, Portable, Easy Setup`,
        lights: [
          {
            iconName: 'red',
            description: 'Red',
            nm: '630',
            number: ``
          },
          {
            iconName: 'deep_red',
            description: 'Deep red',
            nm: `660`,
            number: ``
          },
          {
            iconName: 'infrared',
            description: 'Infrared',
            nm: `850`,
            number: ``
          },
        ],
        size: '4.7" x 1"',
        price: ['$299.90', '$149.90']
      },
      {
        name: 'Novaa deep healing pad',
        pdpLink: `https://novaalab.com/products/knee-treatment-therapy-wrap-arthritis-relief`,
        imgUrl: `https://novaalab.com/cdn/shop/products/DSC_2736_c5dd20f9-3deb-423c-a550-1d4fbd0bcbdf_1024x1024.jpg?v=1637504400`,
        zones: 'Knee pain',
        benefits: `Easy To Use, Deep Pain Relief `,
        lights: [
          {
            iconName: 'deep_red',
            description: 'Deep red',
            nm: '660',
            number: `120`
          },
          {
            iconName: 'infrared',
            description: 'Infrared',
            nm: `850`,
            number: `240`
          },
        ],
        size: '15.7" x 9"',
        price: ['$540.90', '$299.90']
      },
      {
        name: 'Novaa extra strength laser',
        pdpLink: `https://novaalab.com/products/laser-red-light-therapy`,
        imgUrl: `https://novaalab.com/cdn/shop/products/ColdLaserredlighttherapy9_1024x1024.jpg?v=1655115461`,
        zones: 'Whole Body',
        benefits: `Extra Power, Portable, Shorter Sessions`,
        lights: [
          {
            iconName: 'deep_red',
            description: 'Deep red',
            nm: '660',
            number: `12`
          },
          {
            iconName: 'infrared',
            description: 'Infrared',
            nm: `808`,
            number: `4`
          },
        ],
        size: '7.9" x 2.3"',
        price: ['$399.00', '$299.90']
      },
    ]

    const productTableRowTemplate = (name, link, src, zones, benefits, lights, size, price) => /*html*/`
  <tr role="row">
    <td data-cell="Products" role="cell">
      <a href="${link}">
        <img src="${src}" alt="${name}">
      </a>
      <div>
        <a href="${link}" class="table__product-name">${name}</a>
        <a href="${link}" class="btn-learn">Learn more</a>
      </div>
    </td>
    <td data-cell="Zones" role="cell">${zones}</td>
    <td data-cell="Benefits" role="cell">${benefits.split(',').join(',<br>')}</td>
    <td data-cell="Medical Lights" role="cell">  
        ${lights.map(light =>
          /*html*/`
          <div>
            <div>
              <img src="${IMAGE_DIR_URL}/24_light_${light.iconName}.svg" alt="">
              <span>${light.description}<br>${light.nm} nm</span>
            </div>
            <div>
              ${light.number ? `<span>${light.number}<br><small>lights</small></span>` : ''}
            </div>
          </div>`
    ).join('')
      }
    </td>
    <td data-cell="Size" role="cell">${size}</td>
    <td data-cell="Price" role="cell"><small>${price[0]}</small><br><span>${price[1]}</span></td>
  </tr>
`

    const tableRowsHTML = productsTableData.map(product => {
      return productTableRowTemplate(
        product.name,
        product.pdpLink,
        product.imgUrl,
        product.zones,
        product.benefits,
        product.lights,
        product.size,
        product.price
      )
    }).join('')

    waitForElement('.table-wrapper tbody')
      .then(el => el.insertAdjacentHTML('beforeend', tableRowsHTML))

    waitForElement('.tables-wrapper').then(el => {
      handleVisibilityAndHover(
        el,
        ['exp_pl_improv_v_ct', 'Сomparison table', 'Visibility', 'Comparison table'],
        0.3
      )

      el.addEventListener('click', (e) => {
        const target = e.target

        e.preventDefault()

        const productName =
          target.closest("[data-product-name]")?.dataset.productName
          || target.closest("[data-cell='Products']")?.querySelector('.table__product-name')?.innerText

        if (productName) {
          switch (true) {
            case target.classList.contains('btn-learn'):
              pushDataLayer(['exp_pl_improv_b_lm_ct', `Learn more - ${productName}`, 'Button', 'Comparison table'])
              break

            case (target.classList.contains('table-mobile__name') || target.classList.contains('table__product-name')):
              pushDataLayer(['exp_pl_improv_t_ct', `${productName}`, 'Title', 'Comparison table'])
              break

            case target.matches('a img'):
              pushDataLayer(['exp_pl_improv_i_ct', `${productName}`, 'Image', 'Comparison table'])
              break
          }
        }
      })
    }
    )

    const productTableRowsMobileTemplate = (data) => {
      const rowConfig = [
        {
          key: "info", cellContent: ({ pdpLink, imgUrl, name, price }) => /*html*/`
      <td role="cell">
        <div data-product-name="${name}">
          <div>
            <a href="${pdpLink}" class="table-mobile__img-wrapper"><img src="${imgUrl}" alt="${name}"></a>
            <a class="table-mobile__name" href="${pdpLink}">
              ${name}
            </a>
          </div>
          <div>
            <p class="table-mobile__price"><span>${price[1]}</span><span>${price[0]}</span></p>
            <a href="${pdpLink}" class="btn-learn">Learn more</a>
          </div>
        </div>
      </td>
      `
        },
        { key: "Zones heading", cellContent: () => `<td>Zones</td>` },
        { key: "Zones content", cellContent: ({ zones }) => `<td>${zones}</td>` },
        { key: "Benefits heading", cellContent: () => `<td>Benefits</td>` },
        { key: "Benefits content", cellContent: ({ benefits }) => `<td><div>${benefits.split(',').join(',<br>')}</div></td>` },
        { key: "Medical Lights heading", cellContent: () => `<td>Medical Lights</td>` },
        {
          key: "Medical Lights content", cellContent: ({ lights }) => `<td>
    ${lights.map(({ iconName, description, nm, number }) =>
      /*html*/`
      <div>
        <div>
          <img src="${IMAGE_DIR_URL}/24_light_${iconName}.svg" alt="">
          <span>${description}<br>${nm} nm</span>
        </div>
        <div>
          ${number ? `<span>${number}<br><small>lights</small></span>` : ''}
        </div>
      </div>`
          ).join('')
            }
    </td>` },
        { key: "Size heading", cellContent: () => `<td>Size</td>` },
        { key: "Size content", cellContent: ({ size }) => `<td>${size}</td>` },
      ]

      const rows = {}

      rowConfig.forEach(config => {
        rows[config.key] = data.map(item => config.cellContent(item))
      })

      return `
    ${rowConfig.map(config => `
      <tr data-row="${config.key}" role="row">
        ${rows[config.key].join("")}
      </tr>
    `).join("")}
  `
    }

    waitForElement('.table-mobile tbody')
      .then(el => el.innerHTML = productTableRowsMobileTemplate(productsTableData))
      .then(() => document.querySelector('.table-mobile-wrapper').addEventListener('scroll', handleHorizontalScroll)
      )
  }

  async function postItemToCart(id) {
    try {
      const response = await fetch("/cart/add.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id,
          quantity: 1,
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to add item to cart. ${response.status} ${response.statusText}`)
      }

      window.location = "https://novaalab.com/cart"
    } catch (error) {
      console.error("An error occurred while adding item to cart:", error)
    }
  }

  function handleAddToCartClicks(buttons) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        postItemToCart(btn.dataset.productId)
      })
    })
  }

  function handleFilterProducts() {
    const buttons = document.querySelectorAll(".filter__buttons button")
    const select = document.querySelector(".filter__select")
    const products = document.querySelectorAll(".product")

    const applyFilter = (filter, name) => {
      products.forEach(card => {
        const cardFilter = card.getAttribute("data-product-filter")
        if (filter === "all" || filter === cardFilter) {
          card.classList.add("product--visible")
        } else {
          card.classList.remove("product--visible")
        }
      })

      pushDataLayer(['exp_pl_improv_b_filter', `Filter - ${name}`, 'Button', 'Top of the page'])
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")
        applyFilter(filter, button.innerText)

        // Update button states
        document.querySelector('.btn-filter--active')?.classList.remove('btn-filter--active')
        button.classList.add("btn-filter--active")
      })
    })

    select.addEventListener("change", () => {
      const selectedOption = select.options[select.selectedIndex]
      const filter = selectedOption.getAttribute("data-filter")
      applyFilter(filter, selectedOption.innerText)
    })
  }

  function handleHorizontalScroll() {
    if (this.scrollLeft > 0) {
      pushDataLayer(['exp_pl_improv_hs_ct', 'Сomparison table', 'Horizontal scroll', 'Comparison table'])
      this.removeEventListener('scroll', handleHorizontalScroll)
    }
  }
})()