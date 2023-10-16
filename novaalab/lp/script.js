;(function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/novaalab/lp/images'

  const productsData = {
    remote: {
      id: '46883225993561',
      name: 'Novaa deep healing pad with remote [2023]',
      pdpLink: `https://novaalab.com/products/new-red-light-therapy-pad-at-home-with-remote`,
      imgUrl: `https://ucarecdn.com/d556b2cd-e77a-4265-b5c7-803a591a5b8d/-/format/auto/-/preview/3000x3000/-/quality/lighter/red%20light%20therapy%20pad%20at%20home%20infrared%205%20-%20700px.jpg`,
      price: ['$700.00', '$349.90', '-50%'],
      list: ['Bestseller', 'Deep Healing Therapy with patented remote', '5.7" x 9"'],
      rate: '4.7'
    },
    oral: {
      id: '40365298679862',
      name: 'Novaa oral care pro',
      pdpLink: `https://novaalab.com/products/novaa-oral-care-gums-periodontal-treatment`,
      imgUrl: `https://novaalab.com/cdn/shop/products/IMG_1001-600pxquaqre_1024x1024.jpg?v=1662108128`,
      price: ['$199.90', '$129.90', '-35%'],
      list: [''],
      rate: '4.7'
    },
    'oral-bundle': {
      id: '46932997865817',
      name: '1 novoral care pro + 1 sonic toothbrush',
      pdpLink: `https://novaalab.com/products/novoral-care-pro-oral-care-at-home-new#shopify-section-template--19620217061721__37c4e062-a8ba-4b9f-8d95-69467430cc3c`,
      imgUrl: `//novaalab.com/cdn/shop/files/Novoralcarepro_sonictoothbrush_medium.png?v=1689758579`,
      price: ['$330.00', '$179.80', '-35%'],
      list: [''],
      rate: '4.8'
    },
    pro: {
      id: '32854816784438',
      name: 'Novaa light pro',
      pdpLink: `https://novaalab.com/products/novaa-light-pro-red-light-laser-therapy-device`,
      imgUrl: `https://novaalab.com/cdn/shop/products/Pro5_1024x1024.jpg?v=1627031589`,
      price: ['$299.90', '$149.90', '-50%'],
      list: [
        'The #1 portable light therapy',
        'Affordable light therapy',
        'Pain treatment',
        'Skin treatment',
        '4.7" x 1"'
      ],
      rate: '4.9'
    },
    deep: {
      id: '39782656311350',
      name: 'Novaa deep healing pad for your knee',
      pdpLink: `https://novaalab.com/products/knee-treatment-therapy-wrap-arthritis-relief`,
      imgUrl: `https://novaalab.com/cdn/shop/products/DSC_2736_b613cc30-9fe4-4bc2-9945-dae336978c32_1024x1024.jpg?v=1634830839`,
      price: ['$540.90', '$299.90', '-45%'],
      list: ['Deep Healing Therapy designed for the knee', '15.7" x 9"'],
      rate: '4.8'
    },
    laser: {
      id: '40156488761398',
      name: 'Novaa extra strength laser',
      pdpLink: `https://novaalab.com/products/laser-red-light-therapy`,
      imgUrl: `https://novaalab.com/cdn/shop/products/ColdLaserredlighttherapy9_1024x1024.jpg?v=1655115461`,
      price: ['$399.00', '$299.90', '-25%'],
      list: ['Extra Power Healing Laser', 'Pain treatment', 'Skin treatment', '7.9" x 2.3"'],
      rate: '4.9'
    },
    mask: {
      id: '47048817607001',
      name: 'Novaa glow therapy mask',
      pdpLink: `https://novaalab.com/products/novaa-glow-therapy-mask`,
      imgUrl: `https://novaalab.com/cdn/shop/files/IMGpurplemask700pxcompressee_1024x1024.jpg?v=1692889719`,
      price: ['$299.00', '$249.90', '-20%'],
      list: [''],
      rate: '4.8'
    }
  }

  // -------------------------------------
  // CSS & HTML
  // -------------------------------------
  const style = /*html*/ `
    <style>
      /* client's elements  */
      #r-1653306391810 {
        display: none !important;
      }
      

     /* Remove default margin */
.crs * {
  margin: 0;
  padding: 0;
  font: inherit;
}

:root {
  --font-family-primary: "Urbanist", "Montserrat", sans-serif;
  --font-family-secondary: "Montserrat", sans-serif;
}

/* Utility classes */
.ff-primary {
  font-family: var(--font-family-primary);
}

.ff-secondary {
  font-family: var(--font-family-secondary);
}

.padding-block-500 {
  padding-block: 50px 60px;
}

.padding-block-700 {
  padding-block: 72px;
}

.padding-block-800 {
  padding-block: 80px;
}

.heading-1 {
  color: var(--colors-black-500, #212121);
  font-family: var(--font-family-primary);
  font-size: 48px;
  font-weight: 700;
  line-height: 1.16;
  letter-spacing: normal;
  text-transform: none;
}

.heading-2 {
  color: var(--colors-black-500, #212121);
  font-family: var(--font-family-primary);
  font-size: 42px;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: normal;
  text-transform: none;
}

.heading-3 {
  color: var(--colors-black-500, #212121);
  font-family: var(--font-family-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: normal;
  text-transform: none;
  /* 122.222% */
}

.heading-4 {
  color: var(--colors-black-500, #212121);

  font-family: var(--font-family-primary);
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  /* 125% */
  max-width: 569px;
  margin-top: 8px;
  letter-spacing: normal;
  text-transform: none;
}

.fs-400 {
  font-size: 16px;
}

.fs-500 {
  font-size: 18px;
}

.fw-400 {
  font-weight: 400;
}

.fw-600 {
  font-weight: 600;
}

.fw-700 {
  font-weight: 700;
}

.fw-800 {
  font-weight: 800;
}

.lh-400 {
  line-height: 1.44;
}

/* .lh-500 {
  line-height: 1.5;
} */

.even-columns {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: 20px;
}

.bg-primary {
  background: var(--colors-purple, #773BD9);
}

:where(.flow > :not(:first-child)) {
  margin-top: 24px;
}

:where(.flow-sm > :not(:first-child)) {
  margin-top: 12px;
}

.flx {
  display: flex;
}

.align-center {
  align-items: center;
}

.jc-center {
  justify-content: center;
}

.flx-col {
  display: flex;
  flex-direction: column;
}

.jc-between {
  justify-content: space-between;
}

/* general styling */
.crs {
  color: var(--colors-grey-400, #3D4852);
  font-family: var(--font-family-secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}

.button {
  display: block;
  cursor: pointer;
  text-decoration: none;
  border: 0;
  text-align: center;
  border-radius: 4px;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #FFF !important;
  background: linear-gradient(to right, #6519f4, #a042f3) no-repeat;

  font-family: var(--font-family-primary);
}


.button[data-type="inverted"] {
  background: #FFF;
  color: var(--colors-purple, #773BD9) !important;
  border: 1px solid var(--colors-purple, #773BD9);
}

.list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}

.list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  color: var(--colors-black-500, #212121);

  /* Body/16 Semi Body */
  font-family: var(--font-family-secondary);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  /* 150% */
}

.list li:last-child {
  margin-bottom: 0;
}

.list li:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  background-image: url(${IMAGE_DIR_URL}/check.svg);
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
  margin-top: 4px;
}

.marks {
  display: flex;
  margin-top: 24px;
  gap: 24px;

}

.marks>div {
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 8px 15px;

  border-radius: 6px;
  background: var(--colors-purple-background, #F5F5FD);

  color: var(--colors-grey-400, #3D4852);
  font-family: var(--font-family-primary);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  /* 125% */
}

.marks>div:first-child {
  max-width: 196px;
}

.marks>div:last-child {
  max-width: 216px;
}

.marks>div strong {
  font-weight: 700;
}

/* product START */
.product {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid var(--colors-border, #E2E2E2);
  background: #FFF;
}

.product__info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  /* height: 38%; */
  padding: 12px 16px 16px 16px;
}

.product__img-wrapper {
  position: relative;
  overflow: hidden;
  max-height: 260px;
}

.product__img-wrapper img {
  object-fit: cover; 
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
  width: 182px;
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  gap: 2px;
  background: url(https://conversionratestore.github.io/projects/novaalab/catalog-page/images/rectangle.svg) no-repeat center;

  background-position: -12px;

  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.6px;
}

.product__moneyback img {
  width: 24px;
  height: 24px;
}

.product__moneyback p {
  margin: 0;
}

.product__sale {
  position: absolute;
  top: 40px;
  left: -1px;
  width: 86px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(https://conversionratestore.github.io/projects/novaalab/catalog-page/images/rectangle-2.svg) no-repeat center;

  font-size: 12px;
  color: #FFF;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.product__rate {
  margin-bottom: 4px;
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
  display: block;
  color: #212121;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;
  margin-block: 4px 12px;
}

.product__subname {
  display: none;
  color: #3D4852;
  font-size: 16px;
  letter-spacing: 0.8px;
  margin-block: -8px 0;
}

.product__characteristics {
  color: #691BEA;
}

.product__characteristics li {
  margin-left: 19px;
  margin-bottom: 4px;
}

.product__characteristics li:last-child {
  margin-bottom: 0;
}

.product__characteristics span {
  color: var(--colors-grey-400, #3D4852);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 150% */
}

.product__price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-block: 12px;
}

.product__price [data-price="current"] {
  color: #212121;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.36;
  letter-spacing: 1.1px;
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
  width: 70%;
}

.product__buttons .btn-add {
  border: 0;
  cursor: pointer;
  width: 25.5%;
  border-radius: 4px;
  background: var(--Purple-background, #F5F5FD);
}

.product__buttons button img {
  margin-inline: auto;
}

.product__buttons button span {
  display: none;
}

/* product END */
.container {
  --max-width: 1280px;
  --padding: 16px;

  width: min(var(--max-width), 100% - (var(--padding) * 2));
  margin-inline: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-left,
.col-right {
  width: 100%;
}

/* head section START */
section.head .row>div:first-child {
  display: flex;
  flex-direction: column;
  max-width: 46.25%;
  flex-grow: 1;
}

section.head .row>div:last-child {
  max-width: 48.67%;
  flex-grow: 1;
}

.col-left__content {
  margin-block: auto;
}

.col-left .heading-1 {
  display: inline-block;
  width: 100%;
}

section.head .heading-1+p {
  margin-top: 24px;
}

section.head .heading-1 span {
  display: block;
}

.reviews-wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-block: 24px;
}

.reviews-wrapper>div {
  gap: 8px;
}

.reviews-wrapper>div > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.reviews-wrapper>div p {
  color: var(--colors-black-500, #212121);
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;
}

.reviews-wrapper>div a {
  color: var(--colors-grey-400, #3D4852);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.38;
  text-decoration-line: underline;
}

section.head .button {
  padding-block: 20px;
}

.guaranteed {
  gap: 12px;
  padding: 10px 24px;
  border-radius: 6px;
  background: var(--Gradient-2, linear-gradient(90deg, #9D27F0 0%, #E20F55 100%));

  color: #FFF;

  /* H - Type/18 Semi - H6 */
  font-size: 18px;
  font-weight: 600;
  line-height: 1.44;
  margin-top: 15px;
}

.percentage-info {
  max-width: 1194px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
}

.percentage-info .percentage-info__item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;
}

.percentage-info__item p:first-child {
  color: var(--colors-purple, #773BD9);
  font-family: var(--font-family-primary);
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 72px;
  /* 112.5% */
  letter-spacing: 0.6px;
}

.percentage-info__item p:last-child {
  color: var(--colors-grey-400, #3D4852);
  font-family: var(--font-family-secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  /* 144.444% */
}

section.head .col-right img {
  border-radius: 4px;
}

.fda-wrapper {
  position: absolute;
  bottom: 0;
  left: 8px;
  padding: 6px 8px 3px;
  width: fit-content;
  background-color: #fff;
  border-radius: 4px 4px 0px 0px;
}

section.head .col-right {
  position: relative;
}

/* head section END */

/* navigation section START */
section.navigation {
  background: radial-gradient(2726% 90.92% at 2.15% 56%, rgba(105, 27, 234, 0.25) 0%, rgba(158, 65, 239, 0.25) 100%), #FFF;
  padding-block: 56px;
}

section.navigation nav {
  margin-top: 24px;
}

section.navigation ul {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  grid-auto-flow: dense;
  padding: 0;
  list-style: none;
  gap: 8px;
}

section.navigation ul li {
  flex: 1 1 209px;
}

section.navigation ul li .button {
  padding: 12px 5px;
}

/* navigation section END */

/* back pain section START */
.novaalab {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}

.novaalab p {
  white-space: nowrap;
  color: var(--colors-purple, #773BD9);

  /* H - Type/22 - H4 */
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  /* 133.333% */
}

.novaalab div {
  height: 1px;
  width: 100%;
  background: #E2E2E2;
}

section.back-pain .col-left {
  max-width: 71.3%;
}

section.back-pain .col-right {
  max-width: 23.8%;
}

section.back-pain .section-info {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

section.back-pain .section-info>div:first-child {
  max-width: 46%;
  width: 100%;
}

section.back-pain .section-info>div:last-child {
  max-width: 48%;
  width: 100%;
}

.section-info__txt strong {
  font-weight: 700;
}

.back-pain .product .product__characteristics {
  display: none;
}

/* back pain section END */

/* For knee section START */
section.knee {
  background: #F5F5FD;
}

section.knee .col-left {
  max-width: 39%;
}

section.knee .col-right {
  max-width: 49%;
}

section.knee .col-right > div {
  width: 48.8%;
}

section.knee .col-right {
  display: flex;
  justify-content: space-between;
}

section.knee .marks>div {
  background: #E5E5FF;
}

section.knee .section-info__txt {
  margin-block: 40px 32px;
}

section.knee .marks {
  margin-top: 40px;
}

/* For knee section END */

/* joint pain section START */
section.joint .section-info {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

section.joint .section-info>div:first-child {
  max-width: 46.875%;
  width: 100%;
}

section.joint .section-info>div:last-child {
  max-width: 38%;
  width: 100%;
}

.products-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 64px;
}

.products-wrapper>div {
  width: 23.75%;
}

/* joint pain section END */

/* periodontal section START */
section.periodontal {
  background: #F5F5FD;
}

section.periodontal .col-left {
  max-width: 46.875%;
}



section.periodontal .col-right {
  max-width: 49%;
  gap: 0;
}

section.periodontal .col-right > div {
  width: 48.8%;
}

section.periodontal .col-right {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

section.periodontal .section-info {
  max-width: 90%;
}


section.periodontal .marks>div {
  background: #E5E5FF;
}

section.periodontal .section-info__txt {
  margin-block: 40px 32px;
}

section.periodontal .marks {
  margin-top: 40px;
}

section.periodontal .product__subname {
  display: block;
}

section.periodontal .product__characteristics {
  display: NONE;
}

section.periodontal .product__img-wrapper {
  background: #fff;
}

/* periodontal section END */

/* skin section START */
section.skin .col-left {
  max-width: 71%;
}

section.skin .col-left .heading-2 {
  max-width: 52.5%;
}

section.skin .col-right {
  max-width: 23.8%;
}

section.skin .section-info {
  margin-top: 40px;
}

section.skin .section-info {
  display: flex;
  justify-content: space-between;

}

section.skin .section-info>div:first-child {
  max-width: 47.5%;
}

section.skin .section-info>div:last-child {
  max-width: 50%;
}

section.skin .product__characteristics {
  display: none;
}

.skin__line {
  margin-top: 88px;
  width: 100%;
  height: 1px;
  background: #EAEAEA;
}

/* skin section END */

/* compare section START */
section.compare {
  padding-block: 40px 50px;
}

section.compare .tables-wrapper {
  max-width: 1200px;
}

.table-mobile-wrapper {
  display: none;
}

.tables-wrapper .button {
  padding: 8px 24px;
}

.table-mobile-wrapper>div {
  display: flex;
}

.table-wrapper {
  margin-top: 40px;
  border: 1px solid #EAEAEA;
  border-radius: 4px 4px 0px 0px;
  overflow: hidden;
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

.table th::after,
.table td::after,
.table-mobile th::after,
.table-mobile td::after {
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

.table th:not(:first-child),
.table td:not(:first-child) {
  border-left: 1px solid #EAEAEA;
}

.table tr:not(:last-child) {
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

td[data-cell="Products"]>a {
  max-width: 44%;
  max-height: 150px;
}

td[data-cell="Products"] img {
  border-radius: 4px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

td[data-cell="Products"] a {
  width: 100%;
}

td[data-cell="Products"] .btn-learn {
  padding: 8px;
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
  line-height: 1.5;
  /* 150% */
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

tbody tr:last-child td[data-cell="Medical Lights"]>div {
  display: inline-flex;
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

td[data-cell="Price"] small {
  letter-spacing: 0.7px;
}

/* table mobile */
.table-mobile-wrapper {
  display: block;
  overflow: auto;
  margin-top: 24px;
}

.table-mobile-wrapper .table-mobile {
  border-collapse: collapse;
  height: 1px;
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

.table-mobile tbody tr:nth-child(even) td {
  padding: 4px 8px;
}

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

/* .table-mobile-wrapper::-webkit-scrollbar {
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
} */

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
  line-height: 1.428;
}

[data-row="Medical Lights content"] td>div>div+div {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.7px;
}

[data-row="Medical Lights content"] td>div>div+div small {
  color: #6D6E75;
  font-weight: 400;
  letter-spacing: normal;
  font-size: 14px;
}

/* compare section END */

/* mitochondria section START */
section.mitochondria .col-left {
  max-width: 46%;
}

section.mitochondria .col-right {
  max-width: 46%;
}

.order-list {
  list-style: none;
  counter-reset: my-awesome-counter;
  margin-top: 105px;

}

.order-list li {
  counter-increment: my-awesome-counter;
  display: flex;
  align-items: center;
  color: var(--colors-grey-400, #3D4852);

  /* Body/18 Regular Body */
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  padding-block: 20px;
  border-bottom: 1px solid var(--colors-border, #E2E2E2);
  /* 144.444% */
}

.order-list li:first-child {
  padding-top: 0;
}

.order-list li:last-child {
  border: 0;
  padding-bottom: 0;
}

.order-list li::before {
  content: counter(my-awesome-counter);
  color: var(--colors-purple, #773BD9);
  font-family: var(--font-family-primary);
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.22;
  margin-inline: 5px 24px;
  text-align: right;
  min-width: 21px;
  /* 122.222% */
}

.mitochondria__img-wrapper {
  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 49%;
  text-align: center;
  background: url(https://conversionratestore.github.io/projects/novaalab/img/rectangle.svg);
  background-repeat: repeat-x;
  background-position: center;
  max-width: none;
}

/* mitochondria section END */

/* proven section START */
section.proven {
  padding-block: 60px 50px;
}

section.proven .col-left {
  max-width: 49%;
}

section.proven .col-right {
  max-width: 40.5%;
}

.proven__img-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(https://conversionratestore.github.io/projects/novaalab/img/rectangle.svg);
  background-repeat: repeat-x;
  background-position: center;

}

.proven__img-wrapper img {
  max-height: 308px;
}

.proven_fda {
  width: 100px;
  height: 100px;
  transform: rotate(-12.243deg);
  position: absolute;
  top: 18%;
  left: 0;
}

.proven .section-info__txt {
  margin-top: 40px;
}

/* proven section END */

/* efficient section START */
section.efficient {
  background: url(${IMAGE_DIR_URL}/efficient-bg.svg);
  background-repeat: repeat-x;
  background-position: center;
  max-width: none;
}

.efficient__content {
  max-width: 680px;
  border-radius: 6px;
  border: 1px solid var(--colors-border, #E2E2E2);
  background: var(--colors-wight, #FFF);
  padding: 30px;
  margin-inline: auto;
}

section.efficient .section-info__txt {
  margin-block: 16px;
}

.button[data-btn="choose-kit"] {
  max-width: 267px;
}

/* efficient section END */

/* ailments section START */
section.ailments .col-left {
  max-width: 41%;
}

section.ailments .col-right {
  max-width: 49%;
}

.ailments__img-wrapper {
  max-width: 1200px;
}

.ailments__img-wrapper {
  margin: 48px auto;
}

.ailments__btn-wrapper a {
  margin-inline: auto;
}

/* ailments section END */

/* header START */
.custom-header {
    background-color: #fff;
    color: #fff;

    padding: 19px;
}

.custom-header a {
  display: block;
}

.custom-header > div {
  display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-left: 40px;
    text-align: center;
}

.menu ul li {
    margin: 0;
}

.menu ul li a {
  text-decoration: none;
  color: var(--colors-black-500, #212121);
  font-family: var(--font-family-secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  text-transform: uppercase;
}

.bubble-cart {
  position: relative;
}

.bubble-cart::after {
  content: '';
  display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: #7827f4;
    border-radius: 50%;
}

.custom-header--fixed {
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transform: scaleY(0);
    transition: transform 0.3s ease-in-out;
    transform-origin: top;
    height: 72px;
}

.show-fixed-header {
    transform: scaleY(1);
}
/* header END */

/* navbar START */
.navbar {
  transform: scaleY(0);
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  background-color: #F5F5FD;
  box-shadow: 0px 10px 10px 0px rgba(60, 32, 88, 0.08);
  z-index: 999;
  transform-origin: top;
  transition: all .3s ease-in-out;
}

.navbar.navbar--show {
  transform: scaleY(1);
}

.navbar-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
  transition: scroll 1s ease-in-out;

}

.navbar-item {
  display: inline-block;

  margin: 0 20px;
  border-bottom: 2px solid transparent;
}

.navbar-item a {
  display: block;
  padding: 20px 0;
  font-family: var(--font-family-primary);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.36;
  text-decoration: none;
  color: #3D4852;
}

.navbar-item.navbar-item--active {
  border-bottom-color: #773BD9;
}

.navbar-item.navbar-item--active a {
  color: #773BD9;
}

/* navbar END */

.mobile {
  display: none;
}

@media screen and (min-width: 1224px) {
  section.navigation ul {
    gap: 20px;
  }
}

@media (min-width: 769px) {
  .site-header {
    display: none;
  }
}


@media screen and (max-width: 768px) {
  .fs-400 {
    font-size: 14px;
  }

  .fs-500 {
    font-size: 14px;
  }

  .even-columns {
    grid-auto-flow: row;
  }

  .heading-2 {
    font-size: 24px;
    line-height: 1.33;
    /* 133.333% */
  }

  .heading-3 {
    font-size: 22px;
    line-height: 1.45; /* 145.455% */
  }

  .heading-4 {
    font-size: 22px;
    line-height: 1.45;
    /* 145.455% */
  }

  .padding-block-800 {
    padding-block: 40px;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .col-left,
  .col-right {
    max-width: 100% !important;
  }

  /* .navbar {
    display: none;
  } */

  .navbar {
    top: 0;
  }

  .padding-block-700 {
    padding-block: 44px;
  }

  .novaalab {
    margin-bottom: 8px;
  }

  .novaalab p {
    font-size: 18px;
  }

  .novaalab div {
    display: none;
  }

  .marks {
    gap: 8px;
  }

  .marks>div {
    font-size: 12px;
    line-height: 1.33;
    /* 133.333% */
    padding: 8px 13px;
  }

  .marks>div {
    max-width: 48.8% !important;
  }


  .button {
    padding: 8px;
  }

  .custom-header {
    display: none !important;
  }

  /* product START */
  .product {
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .product__img-wrapper {
    border-radius: 4px;
    height: 164px;
  }

  .product__sale {
    height: 24px;
    width: 72px;
    top: 0;
    right: 0;
    left: auto;
    background: url(${IMAGE_DIR_URL}/sale-mob.svg) no-repeat center;
    background-size: cover;
  }

  .product__sale {
    margin-right: -5px;
  }

  .product__moneyback {
    width: 100%;
    top: auto;
    bottom: 0;
    background: #F5F5FD;
    border-radius: 4px 4px 0 0;
  }

  .product__info {
    padding: 8px 0 0 0;
  }

  .product__rate {
    font-size: 14px;
  }

  .product__name {
    font-size: 16px;
    line-height: 1.5;
    /* 150% */
  }

  .product__content-bottom.mobile .product__price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin-block: 8px 12px;
  }

  .product__content-bottom.mobile .product__price>div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .product__price [data-price="old"] {
    font-size: 13px;
    letter-spacing: 0.65px;
    line-height: 18px;
    /* 138.462% */
  }

  .product__price [data-price="current"] {
    font-size: 16px;
    letter-spacing: 0.8px;
    line-height: 1.5;
    /* 150% */
  }

  .product__price [data-price="discount"] {
    font-size: 13px;
  }

  .product__characteristics span {
    font-size: 14px;
    line-height: 1.28;
    /* 128.571% */
  }

  .product__buttons {
    flex-direction: column;
    gap: 8px;
  }

  .product__buttons>a,
  .product__buttons>.btn-add {
    width: 100%;
  }

  .product__subname {
    font-size: 14px;
    line-height: 1.28;
  }

  .product__buttons>.btn-add {
    display: flex;
    padding: 8px;
    justify-content: center;
  }

  .product__buttons>.btn-add span {
    display: block;
    color: var(--colors-black-500, #212121);
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    /* 171.429% */
  }

  .product__buttons button img {
    margin-inline: 0 8px;
  }

  /* product END */

  .navbar-list {
    padding: 10px;
  }

  .navbar-item {

    margin: 0 8px;
    border: 0 !important;
  }

  .navbar-item a {
    font-size: 14px;
font-weight: 600;
line-height: 21px; /* 142.857% */
letter-spacing: 0.7px;
border-radius: 4px;
border: 2px solid var(--colors-black-500, #212121);
background: #FFF;
padding: 8px 16px;

  }

  .navbar-item.navbar-item--active a {
    border: 0;
    color: #fff;
    background: linear-gradient(to right, #6519f4, #a042f3) no-repeat;
    padding: 10px 18px;
    line-height: 20px; 
  } 

  /* head section START */
  section.head .row {
    flex-direction: column-reverse;
  }

  section.head .col-right img {
    max-height: 220px;
    width: 100%;
    object-fit: cover;
  }

  .reviews-wrapper.mobile {
    display: flex;
    gap: 32px;
    margin-block: 22px 0;
  }

  .reviews-wrapper>div {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }

  .reviews-wrapper>div>div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .reviews-wrapper>div p {
    font-size: 18px;
    line-height: 20px;
    /* 111.111% */
  }

  .reviews-wrapper img {
    max-height: 16px;
  }

  section.head .heading-1 {
    margin-top: 8px;
    font-size: 24px;
    line-height: 32px;
    /* 133.333% */
  }

  section.head .heading-1 span {
    display: inline;
    font-weight: 700;
  }

  section.head .heading-1+p {
    margin-top: 8px;
  }

  .even-columns {
    margin-top: 16px;
    gap: 8px;
  }

  section.head .button {
    padding: 12px;
  }

  .percentage-info {
    gap: 24px;
  }

  .percentage-info .percentage-info__item {
    flex: 100%;
    gap: 8px;
  }

  .percentage-info__item p:first-child {
    font-size: 40px;
    line-height: 48px;
    /* 120% */
  }

  .percentage-info__item p:last-child {
    font-size: 14px;
    line-height: 20px;
    /* 142.857% */
    font-weight: 600;
  }

  .guaranteed.mobile {
    display: flex;
    padding: 10px 12px;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    /* 153.846% */
    margin-block: 0 50px;
  }

  /* navigation section START */
  section.navigation {
    padding-block: 32px;
  }

  section.navigation nav {
    margin-top: 20px;
  }

  section.navigation ul {
    gap: 8px;
  }

  /* navigation section END */

  /* back pain section START */
  section.back-pain .section-info {
    margin-top: 20px;
    flex-direction: column;
    gap: 24px;
  }

  section.back-pain .section-info>div {
    max-width: 100% !important;
  }

  section.back-pain .col-right {
    width: 48.8%;
    margin-top: 24px;
  }

  /* back pain section END */

  /* For knee section START */
  section.knee {
    padding-block: 32px;
  }

  section.knee .section-info__txt {
    margin-block: 20px 24px;
  }

  section.knee .marks {
    margin-block: 24px;
  }

  section.knee .col-right {
    gap: 0;
  }

  section.knee .col-right>div {
    width: 47.8%;
  }

  section.knee .col-right .product__moneyback {
    background: #FFF;
  }

  section.knee .product__buttons>.btn-add {
    border: 1px solid var(--colors-border, #E2E2E2);
    background: #FFF;
  }

  /* For knee section END */

  /* joint pain section START */
  section.joint .section-info {
    margin-top: 20px;
  }

  section.joint .section-info {
    flex-direction: column;
  }

  section.joint .section-info>div {
    max-width: 100% !important;
  }

  section.joint .section-info .list {
    margin-block: 24px;
  }

  .marks.mobile {
    display: flex;

  }

  section.joint .marks {
    margin: 0 0 4px 0;
  }

  section.joint .products-wrapper {
    margin: 0;
  }

  .products-wrapper>div {
    width: 47.8% !important;
    margin-top: 20px;
  }

  /* joint pain section END */

  /* periodontal section START */

  section.periodontal .col-right {
    gap: 0;
  }

  section.periodontal .col-right>div {
    width: 47.8%;
  }

  section.periodontal .section-info {
    max-width: 100%;
  }

  section.periodontal .section-info__txt {
    margin-block: 20px;
  }

  section.periodontal .marks {
    margin-block: 24px;
  }

  section.periodontal .product__moneyback {
    background: #fff;
  }

  section.periodontal .product__buttons>.btn-add {
    border: 1px solid var(--colors-border, #E2E2E2);
    background: #FFF;
  }

  /* periodontal section END */

  /* skin section START */
  section.skin .col-left .heading-2 {
    max-width: 95%;
  }

  section.skin .section-info {
    margin-top: 20px;
    flex-direction: column;
  }

  section.skin .section-info>div {
    max-width: 100% !important;
  }

  section.skin .list {
    margin-top: 24px;
  }

  section.skin .marks {
    margin-block: 24px;
  }

  section.skin .col-right {
    width: 47.8%;
  }

  .skin__line {
    display: none;
  }

  /* skin section END */

  /* compare section START */
  section.compare {
    padding-block: 0;
  }

  [data-row="Medical Lights content"] td:last-child span br:last-child {
    display: none;
  }

  /* compare section END */

  /* mitochondria section START */
  section.mitochondria {
    padding-block: 40px 20px;
  }

  section.mitochondria .section-info__txt {
    margin-top: 24px;
  }

  .mitochondria__img-wrapper {
    margin-block: 24px;
    padding-block: 20px;
    background: url(${IMAGE_DIR_URL}/mob-rectangle.svg);
    margin-inline: -16px;
  }

  .mitochondria__img-wrapper img {
    width: 128px;
    height: 124px;

    margin-inline: auto;
  }

  .order-list {
    margin: 0;
  }

  .order-list li {
    align-items: flex-start;
    font-size: 16px;
    line-height: 1.5;
    /* 150% */
    padding-block: 8px;
  }

  .order-list li::before {
    margin-inline: 0 16px;
  }

  /* mitochondria section END */

  /* proven section START */
  section.proven {
    padding-block: 20px 26px;
  }

  .proven .section-info__txt {
    margin-top: 20px;
  }

  .proven__img-wrapper {
    background: url(${IMAGE_DIR_URL}/mob-rectangle.svg);
    margin: 24px -16px;
  }

  .proven__img-wrapper img:first-child {
    width: 144px;
    height: 190px;
  }

  .proven__img-wrapper img:last-child {
    width: 76px;
    height: 76px;
    left: 10%;

  }

  /* proven section END */

  /* efficient section START */
  section.efficient {
    padding-block: 36px 20px;
  }

  .efficient__content {
    padding: 24px;
  }

  .section.efficient .section-info__txt {
    margin-block: 8px 16px;
  }
  /* efficient section END */

  /* ailments section START */
  section.ailments {
    padding-block: 20px;
  }

  section.ailments .section-info__txt {
    margin-top: 24px;
  }

  .ailments__img-wrapper {
    margin: 24px -16px;
  }
  /* ailments section END */

  .button[data-btn="choose-kit"] {
    max-width: 100%;
    padding: 12px;
  }
}
    </style>`

  const customHeader = (isBubble) => /*html*/ `


    <header class="custom-header">
        <div class="container">
        <div class="logo">
            <a href="/"><img src="//novaalab.com/cdn/shop/files/Logo_novaalab_color_rgb_-_250px_190x.png?v=1655278058" alt="novaalab logo"></a>
        </div>
        <nav class="menu">
            <ul>
                <li><a href="/collections/best-red-light-therapy-catalog">Our catalog</a></li>
                <li data-link="mitochondria"><a href="#mitochondria-section">HOW IT WORKS</a></li>
                <li><a href="https://novaalab.com/pages/novaalab-reviews-red-light-therapy">read our reviews</a></li>
                <li><a href="/blogs/infos">blog</a></li>
                <li><a href="/cart">my cart</a></li>
                <li class="${
                  isBubble ? 'bubble-cart' : ''
                }"><a href="/cart"><img src="https://conversionratestore.github.io/projects/novaalab/catalog-page/images/24_cart.svg" alt="cart"></a></li>
            </ul>
        </nav>
        </div>
    </header>

    <header class="custom-header custom-header--fixed">
        <div class="container">
        <div class="logo">
            <a href="/"><img src="//novaalab.com/cdn/shop/files/Logo_novaalab_color_rgb_-_250px_190x.png?v=1655278058" alt="novaalab logo"></a>
        </div>
        <nav class="menu">
            <ul>
                <li><a href="/collections/best-red-light-therapy-catalog">Our catalog</a></li>
                <li data-link="mitochondria"><a href="#mitochondria-section">HOW IT WORKS</a></li>
                <li><a href="https://novaalab.com/pages/novaalab-reviews-red-light-therapy">read our reviews</a></li>
                <li><a href="/blogs/infos">blog</a></li>
                <li><a href="/cart">my cart</a></li>
                <li class="${
                  isBubble ? 'bubble-cart' : ''
                }"><a href="/cart"><img src="https://conversionratestore.github.io/projects/novaalab/catalog-page/images/24_cart.svg" alt="cart"></a></li>
            </ul>
        </nav>
        </div>
    </header>
  `

  const html = /*html*/ `
    <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item"><a href="#back-pain-section">Back pain</a></li>
      <li class="navbar-item"><a href="#knee-section">Knee or hand pain</a></li>
      <li class="navbar-item"><a href="#joint-section">Joints pain or arthritis</a></li>
      <li class="navbar-item"><a href="#periodontal-section">Periodontal gum disease</a></li>
      <li class="navbar-item"><a href="#skin-section">Skin problems</a></li>
    </ul>
  </nav>

  <div class="crs">
    <section id="head-section" class="head">
      <div class="container">

        <div class="row">
          <div class="col-left">
            <div class="col-left__content flow">
              <div class="reviews-wrapper | flx align-center mobile">

                <div class="reviews--plugin | flx ">
                  <div>
                    <p>4.7</p>
                    <img src="${IMAGE_DIR_URL}/stars.svg" alt="5 stars">
                  </div>
                  <div>
                    <a href="#m-1662370254624">from 1044 reviews</a>
                  </div>
                </div>

                <div class="reviews--trust | flx ">
                  <div>
                    <p>4.6</p>
                    <img src="${IMAGE_DIR_URL}/trust.svg" alt="trustadvisor 5 stars">
                  </div>
                  <div>
                    <a href="https://www.trustpilot.com/review/novaalab.com" target="_blank">from 160 reviews</a>
                  </div>
                </div>
              </div>

              <h1 class="heading-1">Forget your pain in 4 weeks <span class="fw-400">with our easy-to-use</span>
                red light therapy</h1>
              <p class="subtext fs-500 lh-400">Clinically proven to help with back pain, joint pain, muscle, bones and gems.</p>

              <div class="reviews-wrapper | flx align-center desktop">
                <img src="${IMAGE_DIR_URL}/fda.svg" alt="fda approved">

                <div class="reviews--plugin | flx align-center">
                  <div>
                    <p>4.7</p>
                  </div>
                  <div>
                    <img src="${IMAGE_DIR_URL}/stars.svg" alt="5 stars">
                    <a href="#m-1662370254624">from 1044 reviews</a>
                  </div>
                </div>

                <div class="reviews--trust | flx align-center">
                  <div>
                    <p>4.6</p>
                  </div>
                  <div>
                    <img src="${IMAGE_DIR_URL}/trust.svg" alt="trustadvisor 5 stars">
                    <a href="https://www.trustpilot.com/review/novaalab.com" target="_blank">from 160 reviews</a>
                  </div>
                </div>
              </div>

              <div class="even-columns">
                <button class="button" data-linkTo="https://novaalab.com/products/new-red-light-therapy-pad-at-home-with-remote">Shop Deep Healing Pad</button>
                <a href="#mitochondria-section" class="button" data-type="inverted">About red light therapy</a>
              </div>

            </div>

            <div class="guaranteed | flx align-center jc-center ff-primary desktop">
              <img src="${IMAGE_DIR_URL}/guranteed.svg" alt="">
              <p>Pain relief within 60 days or your money back. Guaranteed.</p>
            </div>

          </div>
          <div class="col-right">
            <img
              src="https://ucarecdn.com/d556b2cd-e77a-4265-b5c7-803a591a5b8d/-/format/auto/-/preview/3000x3000/-/quality/lighter/red%20light%20therapy%20pad%20at%20home%20infrared%205%20-%20700px.jpg"
              alt="Deep Healing Pad">
            <div class="fda-wrapper mobile">
              <img src="${IMAGE_DIR_URL}/fda.svg" alt="">
            </div>
          </div>
        </div>

        <div class="percentage-info | padding-block-700">
          <div class="percentage-info__item">
            <p>87%</p>
            <p>Have improved their ability to walk in 4 weeks.</p>
          </div>
          <div class="percentage-info__item">
            <p>93%</p>
            <p>Have decreased their knee pain and swelling in 2 weeks.</p>
          </div>
          <div class="percentage-info__item">
            <p>89%</p>
            <p>Have decreased their knee pain and swelling in 2 weeks.</p>
          </div>
        </div>

        <div class="guaranteed | flx align-center jc-center ff-primary mobile">
          <img src="${IMAGE_DIR_URL}/guranteed.svg" alt="">
          <p>Pain relief within 60 days or your money back. Guaranteed.</p>
        </div>
      </div>
    </section>

    <section id="navigation-section" class="navigation">
      <div class="container">
        <h2 class="heading-2">What health issue do you want to heal?</h2>
        <nav>
          <ul>
            <li><a href="#back-pain-section" class="button">Back pain</a></li>
            <li><a href="#knee-section" class="button">Knee or hand pain</a></li>
            <li><a href="#joint-section" class="button">Joints pain or arthritis</a></li>
            <li><a href="#periodontal-section" class="button">Periodontal (gum) disease</a></li>
            <li><a href="#skin-section" class="button">Skin problems</a></li>
          </ul>
        </nav>
      </div>
    </section>

    <section id="back-pain-section" class="back-pain | padding-block-800">
      <div class="container">
        <div class="novaalab">
          <p>Novaalab</p>
          <div></div>
        </div>
        <div class="row">
          <div class="col-left">
            <h2 class="heading-2">For back pain</h2>
            <h4 class="heading-4">Get back to your active life in 4 weeks (or your money back).</h4>
            <div class="section-info">
              <div class="section-info__txt flow-sm">
                <p>Back pain is often the result of inflammation, tissue, and muscle damage. However, research shows
                  that the energizing effect of Red Light Therapy is enough to help <strong>regenerate cells, restore
                    proper cell function, and improve circulation</strong>.
                </p>
                <p>
                  This means that consistent use of the <strong>Novaa Pad can help ease back pain for good</strong>.
                  That means less time worrying about whether you can bend over to pick up the shopping, and more time
                  doing the activities you love.</p>
              </div>
              <div class="flx-col jc-between">
                <ul class="list">
                  <li><span>Heal your back, knees, neck</span></li>
                  <li><span>Get rid of back pain, muscle pain, joint pain</span></li>
                  <li><span>Reduce arthritis, inflammations and chronic pains</span></li>
                  <li><span>Treat neuropathy and chronic pain conditions</span></li>
                  <li><span>Heal faster after replacement/surgery</span></li>
                </ul>

                <div class="marks">
                  <div>
                    <img src="${IMAGE_DIR_URL}/fda-text.svg" alt="">
                    <p class="desktop"><strong>FDA</strong> - cleared medical devices</p>
                    <p class="mobile"><strong>FDA</strong> cleared as a medical devices</p>
                  </div>
                  <div>
                    <img src="${IMAGE_DIR_URL}/guranteed-small.svg" alt="">
                    <p><strong>60-day</strong> Money back guarantee</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-right">
            ${drawProduct('remote')}
          </div>
        </div>
      </div>
    </section>

    <section id="knee-section" class="knee | padding-block-800">
      <div class="container">
        <div class="novaalab">
          <p>Novaalab</p>
          <div></div>
        </div>
        <div class="row">
          <div class="col-left">
            <h2 class="heading-2">For knee or hand pain</h2>
            <div class="section-info">
              <div class="section-info__txt flow-sm">
                <p>Pain in the tissues or joints of your hands and knees is often caused by inflammation, and
                  inflammation is the result of tissue damage.</p>
                <p>By providing the cells in these areas with more energy via the Novaa Light Pad, you can <strong>
                    accelerate
                    the healing process
                  </strong> - and by healing the underlying tissue, you can <strong>remove inflammation and
                    pain</strong>.</p>
              </div>
              <div class="flx-col jc-between">
                <ul class="list">
                  <li><span>Ease your joint pain, osteoarthritis, rheumatoid arthritis</span></li>
                  <li><span>Reduce inflammation and swelling</span></li>
                  <li><span>Nerve pain and neuropathy relief</span></li>
                  <li><span>Faster healing after surgery</span></li>
                  <li><span>Quicker recovery from sports injuries</span></li>
                  <li><span>Faster muscle recovery</span></li>
                </ul>

                <div class="marks">
                  <div>
                    <img src="${IMAGE_DIR_URL}/fda-text.svg" alt="">
                    <p class="desktop"><strong>FDA</strong> - cleared medical devices</p>
                    <p class="mobile"><strong>FDA</strong> cleared as a medical devices</p>
                  </div>
                  <div>
                    <img src="${IMAGE_DIR_URL}/guranteed-small.svg" alt="">
                    <p><strong>60-day</strong> Money back guarantee</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-right">
            ${drawProduct('deep')}
            ${drawProduct('remote')}
          </div>
        </div>
      </div>
    </section>

    <section id="joint-section" class="joint | padding-block-800">
      <div class="container">
        <div class="novaalab">
          <p>Novaalab</p>
          <div></div>
        </div>
        <h2 class="heading-2">For joint pain and arthritis</h2>
        <div class="section-info">
          <div>
            <div class="section-info__txt flow-sm">
              <p>Arthritis and Joint Pain occurs when the cartilage in your joints gets worn down overtime or is
                negatively affected by inflammation. </p>
              <p>Applying the Novaa Light Pad over affected joints can help <strong>heal the cells in that area,
                  relieving
                  joint pain and restoring mobility</strong>.</p>
            </div>
            <div class="marks | desktop">
              <div>
                <img src="${IMAGE_DIR_URL}/fda-text.svg" alt="">
                <p class="desktop"><strong>FDA</strong> - cleared medical devices</p>
                <p class="mobile"><strong>FDA</strong> cleared as a medical devices</p>
              </div>
              <div>
                <img src="${IMAGE_DIR_URL}/guranteed-small.svg" alt="">
                <p><strong>60-day</strong> Money back guarantee</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flx-col jc-between">
              <ul class="list">
                <li><span>Ease your joint pain, osteoarthritis, rheumatoid arthritis</span></li>
                <li><span>Reduce inflammation and swelling</span></li>
                <li><span>Nerve pain and neuropathy relief</span></li>
                <li><span>Faster healing after surgery</span></li>
                <li><span>Quicker recovery from sports injuries</span></li>
                <li><span>Faster muscle recovery</span></li>
              </ul>
            </div>

            <div class="marks | mobile">
              <div>
                <img src="${IMAGE_DIR_URL}/fda-text.svg" alt="">
                <p class="desktop"><strong>FDA</strong> - cleared medical devices</p>
                <p class="mobile"><strong>FDA</strong> cleared as a medical devices</p>
              </div>
              <div>
                <img src="${IMAGE_DIR_URL}/guranteed-small.svg" alt="">
                <p><strong>60-day</strong> Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>
        <div class="products-wrapper">
          ${drawProduct('remote')}
          ${drawProduct('deep')}
          ${drawProduct('laser')}
          ${drawProduct('pro')}
        </div>
      </div>
    </section>

    <section id="periodontal-section" class="periodontal | padding-block-800">
      <div class="container">
        <div class="novaalab">
          <p>Novaalab</p>
          <div></div>
        </div>
        <div class="row">
          <div class="col-left">
            <h2 class="heading-2">For periodontal (gum) disease</h2>
            <div class="section-info">
              <div class="section-info__txt flow-sm">
                <p><strong>Rejuvenate your gums and teeth, and speed up recovery</strong> with the most powerful oral
                  care device on the market (5 times more light power than other devices).</p>
                <p>The combination Red + Blue medical lights will make a real difference for your oral health:
                </p>


              </div>
              <div class="flx-col jc-between">
                <ul class="list">
                  <li><span>Treats receding gums and periodontal (gum) disease</span></li>
                  <li><span>Kills bad breath and mouth bacteria</span></li>
                  <li><span>Gently whitens your teeth for a brighter smile</span></li>
                  <li><span>Helps with teeth sensitivity and surgery recovery</span></li>
                  <li><span>High power: only 5 minutes per day to treat the whole mouth</span></li>
                </ul>

                <div class="marks">
                  <div>
                    <img src="${IMAGE_DIR_URL}/fda-text.svg" alt="">
                    <p class="desktop"><strong>FDA</strong> - cleared medical devices</p>
                    <p class="mobile"><strong>FDA</strong> cleared as a medical devices</p>
                  </div>
                  <div>
                    <img src="${IMAGE_DIR_URL}/guranteed-small.svg" alt="">
                    <p><strong>60-day</strong> Money back guarantee</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-right">
            ${drawProduct('oral')}
            ${drawProduct('oral-bundle')}
          </div>
        </div>
      </div>
    </section>

    <section id="skin-section" class="skin | padding-block-800">
      <div class="container">
        <div class="novaalab">
          <p>Novaalab</p>
          <div></div>
        </div>
        <div class="row">
          <div class="col-left">
            <h2 class="heading-2">For a healthy and glowing skin</h2>

            <div class="section-info">
              <div class="section-info__txt flow-sm">
                <p>Unlock the secret to <strong>flawless and youthful-looking skin</strong> with our cutting-edge Glow
                  Therapy Mask.</p>
                <p>Designed to elevate your skincare game to unprecedented heights, Glow Therapy Mask harnesses the
                  power of six different modes <strong>to address a wide range of skin concerns</strong>.</p>
                <p><strong>Say goodbye to dullness, aging signs, acne breakouts, and uneven skin tone</strong> - our
                  mask is here to transform your complexion and leave you feeling radiant and confident.</p>
              </div>
              <div class="flx-col jc-between">
                <ul class="list">
                  <li><span>Rejuvenates your skin for an age-defying glow</span></li>
                  <li><span>Reduces lines and winkles</span></li>
                  <li><span>Improves skin elasticity</span></li>
                  <li><span>Reduces lines and winkles</span></li>
                  <li><span>Reduces redness and evens skin tone</span></li>
                </ul>

                <div class="marks">
                  <div>
                    <img src="${IMAGE_DIR_URL}/fda-text.svg" alt="">
                    <p class="desktop"><strong>FDA</strong> - cleared medical devices</p>
                    <p class="mobile"><strong>FDA</strong> cleared as a medical devices</p>
                  </div>
                  <div>
                    <img src="${IMAGE_DIR_URL}/guranteed-small.svg" alt="">
                    <p><strong>60-day</strong> Money back guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-right">
            ${drawProduct('mask')}
          </div>
        </div>
        <div class="skin__line"></div>
      </div>
    </section>

    <section class="compare">
      <div class="container">
        <div class="novaalab">
          <p>Compare and choose!</p>
        </div>
        <h2 class="heading-2">Choose a device that better suits you</h2>

        <div class="tables-wrapper ff-primary">

          <div class="table-wrapper | desktop">
            <table class="table" role="table">
              <tbody role="rowgroup">
                <tr role="row">
                  <th data-cell="Products" role="columnheader">Products</th>
                  <th data-cell="Zones" role="columnheader">Zones</th>
                  <th data-cell="Benefits" role="columnheader">Benefits</th>
                  <th data-cell="Medical Lights" role="columnheader">Medical Lights</th>
                  <th data-cell="Size" role="columnheader">Size</th>
                  <th data-cell="Price" role="columnheader">Price</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-mobile-wrapper | mobile">
            <table class="table-mobile" role="table">
              <caption role="caption"><span>Products</span></caption>
              <tbody role="rowgroup">
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

    <section id="mitochondria-section" class="mitochondria | padding-block-500" >
      <div class="container">
        <div class="novaalab">
          <p>Why Novaa Light will help YOU</p>
          <div></div>
        </div>
        <div class="row | desktop">
          <div class="col-left">
            <h2 class="heading-2">Why is Red Light Therapy so efficient and how does it work?</h2>
            <ol class="order-list">
              <li>As we all know, the mitochondria is the powerhouse of our cells: it makes them rejuvenate and produce
                more healthy cells.</li>
              <li>A cell which is injured won't be able to use mitochondria to repair itself and duplicate into new
                young
                and healthy cells.</li>
              <li>Red and Infrared Light Therapy sends energy to our cells, including the injured ones.</li>
              <li>With that additional energy they receive, these injured cells are able activate the mitochondria that
                was stopped.</li>
            </ol>
          </div>
          <div class="col-right">
            <div class="section-info__txt flow-sm">
              <p>Red light therapy is a treatment that may help skin, muscle tissue, and other parts of your body heal.
                <strong>Red Light Therapy helps injured cells repair themselves</strong> and become healthier by giving
                them the energy they lack.
              </p>
              <p>Red Light Therapy works its “magic” by delivering safe, concentrated wavelengths of specific light into
                your tissues (up to 1 inch for infrared), where it’s absorbed by your deep cells. It means it can reach
                deep injured cells that <strong>no other topical treatment can</strong>.</p>
            </div>
            <div class="mitochondria__img-wrapper">
              <img src="https://conversionratestore.github.io/projects/novaalab/img/mitochondria.svg"
                alt="mitochondria">
            </div>
          </div>
        </div>
      </div>

      <div class="mobile">
        <div class="container">
          <h2 class="heading-2">Why is Red Light Therapy so efficient and how does it work?</h2>
          <div class="section-info__txt flow-sm">
            <p>Red light therapy is a treatment that may help skin, muscle tissue, and other parts of your body heal.
              <strong>Red Light Therapy helps injured cells repair themselves</strong> and become healthier by giving
              them the energy they lack.
            </p>
            <p>Red Light Therapy works its “magic” by delivering safe, concentrated wavelengths of specific light into
              your tissues (up to 1 inch for infrared), where it’s absorbed by your deep cells. It means it can reach
              deep injured cells that <strong>no other topical treatment can</strong>.</p>
          </div>
          <div class="mitochondria__img-wrapper">
            <div class="container">
              <img src="https://conversionratestore.github.io/projects/novaalab/img/mitochondria.svg"
                alt="mitochondria">
            </div>
          </div>
          <ol class="order-list">
            <li>As we all know, the mitochondria is the powerhouse of our cells: it makes them rejuvenate and produce
              more healthy cells.</li>
            <li>A cell which is injured won't be able to use mitochondria to repair itself and duplicate into new
              young
              and healthy cells.</li>
            <li>Red and Infrared Light Therapy sends energy to our cells, including the injured ones.</li>
            <li>With that additional energy they receive, these injured cells are able activate the mitochondria that
              was stopped.</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="proven">
      <div class="container">
        <div class="novaalab">
          <p>Scientifically proven</p>
          <div></div>
        </div>

        <div class="row">
          <div class="col-left">
            <h2 class="heading-2">Scientifically proven by more than 3,000 clinical studies</h2>
            <div class="section-info__txt flow-sm">
              <p>It seems unbelievable but it's true.</p>
              <p>Red light therapy helps so many health conditions that more than 3,000 clinical studies have proven its
                benefits.</p>
              <p>That's why the Novaa Deep Healing Pad is recognized as a medical device by the FDA.</p>
            </div>
          </div>
          <div class="col-right">
            <div class="proven__img-wrapper"><img
                src="https://conversionratestore.github.io/projects/novaalab/img/doctor.png" alt="doctor">
              <img class="proven_fda" src="${IMAGE_DIR_URL}/fda.svg" alt="fda">
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="efficient | padding-block-500">
      <div class="container">
        <div class="efficient__content">
          <p class="heading-3">What makes it so efficient?</p>
          <div class="section-info__txt flow-sm">
            <p>Novaa Deep Healing Pad delivers the exact wavelengths found by NASA studies to
              <strong>penetrate deep
                into the skin, sending healing energy to injured cells</strong>.
            </p>
            <p>With more <strong>energy, injured cells can function more efficiently, rejuvenate themselves, and repair
                damage. Novaa Light Pad</strong> is the only treatment that can activate the healing of your deeper
              cells.</p>
            <p>Imagine this healing light reaching your <strong>tissues, muscles, tendons and even bones</strong>,
              increasing blood circulation, further promoting the healing process.</p>
          </div>
          <a href="#navigation-section" class="button" data-btn="choose-kit">Choose your kit</a>
        </div>
      </div>
    </section>

    <section class="ailments | padding-block-500">
      <div class="container">
        <div class="novaalab">
          <p>Heal dozens of ailments</p>
          <div></div>
        </div>
        <div class="row">
          <div class="col-left">
            <h2 class="heading-2">When will Novaa Light help you?</h2>
          </div>
          <div class="col-right">
            <div class="section-info__txt flow-sm">
              <p>Red Light Therapy helps for so many health conditions that more than 3,000 clinical studies have proven
                its benefits.</p>
              <p> During the last years, our clients told us they relieved their pain for these conditions:</p>
            </div>
          </div>
        </div>
        <div class="ailments__img-wrapper">
          <img class="desktop" src="https://ucarecdn.com/cdb9e201-2a53-4263-8b74-7eab4feae96f/Group%20220%20_2_%20_1_.svg"
            alt="relieved pain conditions">

          <img class="mobile" src="https://conversionratestore.github.io/projects/novaalab/img/proven_mobile.jpg" alt="relieved pain conditions">

        </div>
        <div class="ailments__btn-wrapper">
          <a href="#navigation-section" class="button" data-btn="choose-kit">Choose your kit</a>
        </div>
      </div>
    </section>
  </div>
  `

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  waitForElement('.cart-link__bubble').then((el) => {
    const clientHeader = document.querySelector('.site-header')

    if (el.classList.contains('cart-link__bubble--visible')) {
      clientHeader.insertAdjacentHTML('afterend', customHeader(true))
    } else {
      clientHeader.insertAdjacentHTML('afterend', customHeader(false))
    }

    const waitForHeaders = setInterval(() => {
      const customHeader = document.querySelector('.custom-header')
      const fixedCustomHeader = document.querySelector('.custom-header--fixed')
      // const announcementBar = document.querySelector('.announcement-bar')

      if (customHeader && fixedCustomHeader) {
        clearInterval(waitForHeaders)

        // const headerHeight = customHeader.clientHeight + announcementBar.clientHeight
        const headerHeight = customHeader.clientHeight

        window.addEventListener('scroll', function () {
          const scrollPosition = window.scrollY

          if (scrollPosition >= headerHeight) {
            customHeader.style.visibility = 'hidden'
            fixedCustomHeader.classList.add('show-fixed-header')
          } else {
            customHeader.style.visibility = 'visible'
            fixedCustomHeader.classList.remove('show-fixed-header')
          }
        })

        // customHeader.addEventListener('click', (e) => {
        //   if (e.target.closest()) {

        //   }
        // })

        const waitForLinks = setInterval(() => {
          if (document.querySelectorAll('.custom-header a')[13]) {
            clearInterval(waitForLinks)

            document.querySelectorAll('.custom-header a').forEach((link) => {
              link.addEventListener('focus', () => {
                if (link.closest('.bubble-cart')) {
                  pushDataLayer('exp_hopg_impr_b_header_menu_basket', 'Basket', 'Button', 'Header menu')
                } else if (link.closest('.logo')) {
                  pushDataLayer('exp_hopg_impr_b_header_sticky_logo', 'Logo', 'Image', 'Header menu')
                } else {
                  pushDataLayer('exp_hopg_impr_b_header_sticky_menu_item', link.innerText, 'Button', 'Header menu')
                }
              })
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)
      }
    }, WAIT_INTERVAL_TIMEOUT)
  })
  waitForElement('#r-1653306391810').then((el) => el.insertAdjacentHTML('afterend', html))

  const waitForNavSections = setInterval(() => {
    const sections = document.querySelectorAll(
      '#shopify-section-header, #head-section, #navigation-section, #back-pain-section, #knee-section, #joint-section, #periodontal-section, #skin-section'
    )

    const navbarItems = document.querySelectorAll('.navbar-item')
    const navSectionItems = document.querySelectorAll('#navigation-section ul li')

    if (navbarItems?.length >= 5 && navSectionItems?.length >= 5 && sections?.length >= 8) {
      clearInterval(waitForNavSections)

      const navbar = document.querySelector('.navbar')

      // Function to scroll to the active item
      function scrollToActiveNavItem() {
        const navbar = document.querySelector('.navbar-list')
        const activeItem = document.querySelector('.navbar-item--active')

        if (navbar && activeItem) {
          const navbarRect = navbar.getBoundingClientRect()
          const activeItemRect = activeItem.getBoundingClientRect()

          // Calculate the left offset of the active item relative to the navbar
          const activeItemOffset = activeItemRect.left - navbarRect.left

          // Calculate the desired spacing on the left and right sides
          const spacing = 20 // Adjust this value as needed

          // Calculate the amount to scroll to make the active item fully visible with spacing
          let scrollAmount = 0
          if (activeItemOffset < spacing) {
            // Scroll left to make the entire active item visible with spacing
            scrollAmount = activeItemOffset - spacing
          } else if (activeItemOffset + activeItemRect.width > navbarRect.width - spacing) {
            // Scroll right to make the entire active item visible with spacing
            scrollAmount = activeItemOffset + activeItemRect.width - (navbarRect.width - spacing)
          }

          // Scroll only if necessary
          if (scrollAmount !== 0) {
            navbar.scrollLeft += scrollAmount
          }
        }
      }

      // Function to check if the bottom of the navbar touches the section
      function isNavbarTouchingSection() {
        const navbarRect = navbar.getBoundingClientRect()
        let activeSection = null

        sections.forEach((section, index) => {
          const sectionRect = section.getBoundingClientRect()

          // Check if the bottom of the navbar touches the section
          if (navbarRect.bottom >= sectionRect.top && navbarRect.bottom <= sectionRect.bottom) {
            activeSection = section.id
          }
        })

        const navbarToHide = document.querySelector('.navbar')

        if (
          activeSection === 'shopify-section-header' ||
          activeSection === 'head-section' ||
          activeSection === 'navigation-section'
        ) {
          // Hide the navbar for the navigation section
          navbarToHide.classList.remove('navbar--show')
        } else if (!document.querySelector('.navbar--show')) {
          navbarToHide.classList.add('navbar--show')
        }

        if (activeSection) {
          navbarItems.forEach((item) => {
            // Skip the 'navigation' section item in the navbar
            if (item.querySelector(`a[href="#${activeSection}"]`) !== null) {
              item.classList.add('navbar-item--active')
            } else {
              item.classList.remove('navbar-item--active')
            }
          })

          scrollToActiveNavItem()
        } else {
          document.querySelector('.navbar-item--active')?.classList.remove('navbar-item--active')
        }
      }

      const waitForjQuery = setInterval(() => {
        if (jQuery && jQuery.fn.jquery) {
          clearInterval(waitForjQuery)

          // Function to handle navbar item click
          function handleNavbarItemClick(event) {
            event.preventDefault()

            var navbarListHeight = $('.navbar-list').height()
            let offsetTop = navbarListHeight - (DEVICE === 'mobile' ? 15 : 0)

            if ($(this).closest('.navbar-list').length > 0) {
              pushDataLayer('exp_hopg_impr_b_header_menu_item', $(this).find('a').text(), 'Button', 'Header')
            } else if ($(this).closest('#navigation-section').length > 0) {
              pushDataLayer(
                'exp_hopg_impr_b_whiwh_bn',
                $(this).find('a').text(),
                'Button',
                'What health issue do you want to heal?'
              )
            } else if ($(this).closest('.custom-header').length > 0 && DEVICE !== 'mobile') {
              offsetTop = 110
            }

            const sectionId = $(this).find('a').attr('href')
            const $section = $(sectionId)

            // const offsetTop = DEVICE === 'mobile' ? 0 : 150

            $('html, body').animate(
              {
                scrollTop: $section.offset().top - offsetTop
              },
              1000
            ) // You can adjust the duration (in milliseconds) for smooth scrolling
          }

          navbarItems.forEach((item) => {
            item.addEventListener('click', handleNavbarItemClick)
          })

          navSectionItems.forEach((item) => {
            item.addEventListener('click', handleNavbarItemClick)
          })

          const waitForHowWorksLinks = setInterval(() => {
            if (document.querySelectorAll('[data-link="mitochondria"]')[1]) {
              clearInterval(waitForHowWorksLinks)

              document.querySelectorAll('[data-link="mitochondria"]').forEach((el) => {
                el.addEventListener('click', handleNavbarItemClick)
              })
            }
          }, WAIT_INTERVAL_TIMEOUT)
        }
      }, WAIT_INTERVAL_TIMEOUT)

      window.addEventListener('scroll', isNavbarTouchingSection)
    }
  }, WAIT_INTERVAL_TIMEOUT)

  drawTableProducts()

  const waitForAddBtns = setInterval(() => {
    if (document.querySelectorAll('[data-product-id]')[20]) {
      clearInterval(waitForAddBtns)

      document.querySelectorAll('[data-product-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const sectionId = btn.closest('section').id
          let productName = ''
          if (btn.closest('[data-product-name]')) {
            btn.closest('[data-product-name]').dataset.productName
          }
          switch (sectionId) {
            case 'head-section':
              pushDataLayer('exp_hopg_impr_b_fs_sdhp', 'Shop Deep Healing Pad', 'Button', 'First screen')
              break
            case 'back-pain-section':
              pushDataLayer(
                'exp_hopg_impr_b_bps_atc',
                `Add to cart - ${productName}`,
                'Button',
                'For back pain section'
              )
              break
            case 'knee-section':
              pushDataLayer(
                'exp_hopg_impr_b_khp_atc',
                `Add to cart - ${productName}`,
                'Button',
                'For knee or hand pain'
              )
              break
            case 'joint-section':
              pushDataLayer(
                'exp_hopg_impr_b_jpa_atc',
                `Add to cart - ${productName}`,
                'Button',
                'For joint pain and arthritis'
              )
              break
            case 'periodontal-section':
              pushDataLayer(
                'exp_hopg_impr_b_pgd_atc',
                `Add to cart - ${productName}`,
                'Button',
                'For periodontal (gum) disease'
              )
              break
            case 'skin-section':
              pushDataLayer(
                'exp_hopg_impr_b_hgs_atc',
                `Add to cart - ${productName}`,
                'Button',
                'For a healthy and glowing skin'
              )
              break

            default:
              break
          }

          addProductToCart(btn.dataset.productId)
        })
      })
    }
  }, WAIT_INTERVAL_TIMEOUT)

  window._mfq.push(['setVariable', 'home_page_improvements', 'var1'])

  const waitForReviews = setInterval(() => {
    if (document.querySelectorAll('.reviews--plugin a')[1]) {
      clearInterval(waitForReviews)

      document.querySelectorAll('.reviews--plugin a').forEach((element) => {
        element.addEventListener('click', () => {
          pushDataLayer('exp_hopg_impr_l_fs_ysr', 'Yellow star reviews', 'Link', 'First screen')
        })
      })
    }
  }, WAIT_INTERVAL_TIMEOUT)

  const waitForReviewsTrust = setInterval(() => {
    if (document.querySelectorAll('.reviews--trust  a')[1]) {
      clearInterval(waitForReviewsTrust)

      document.querySelectorAll('.reviews--trust  a').forEach((element) => {
        element.addEventListener('click', () => {
          pushDataLayer('exp_hopg_impr_l_fs_gsr', 'Green star reviews', 'Link', 'First screen')
        })
      })
    }
  }, WAIT_INTERVAL_TIMEOUT)

  const waitForProducts = setInterval(() => {
    if (document.querySelectorAll('.product')[9]) {
      clearInterval(waitForProducts)

      document.querySelectorAll('.product').forEach((element) => {
        element.addEventListener('click', (e) => {
          const sectionId = e.target.closest('section').id
          const productName = element.dataset.productName

          if (e.target.matches('.button') || e.target.closest('.button')) {
            switch (sectionId) {
              case 'back-pain-section':
                pushDataLayer(
                  'exp_hopg_impr_b_bps_lm',
                  `Learn more - ${productName}`,
                  'Button',
                  'For back pain section'
                )
                break
              case 'knee-section':
                pushDataLayer(
                  'exp_hopg_impr_b_khp_lm',
                  `Learn more - ${productName}`,
                  'Button',
                  'For knee or hand pain'
                )
                break
              case 'joint-section':
                pushDataLayer(
                  'exp_hopg_impr_b_jpa_lm',
                  `Learn more - ${productName}`,
                  'Button',
                  'For joint pain and arthritis'
                )
                break
              case 'periodontal-section':
                pushDataLayer(
                  'exp_hopg_impr_b_pgd_lm',
                  `Learn more - ${productName}`,
                  'Button',
                  'For periodontal (gum) disease'
                )
                break
              case 'skin-section':
                pushDataLayer(
                  'exp_hopg_impr_b_hgs_lm',
                  `Learn more - ${productName}`,
                  'Button',
                  'For a healthy and glowing skin'
                )
                break
              default:
                break
            }
          }
          if (e.target.matches('.product__img-wrapper a') || e.target.closest('.product__img-wrapper a')) {
            switch (sectionId) {
              case 'back-pain-section':
                pushDataLayer('exp_hopg_impr_i_bps_i', `Image - ${productName}`, 'Image', 'For back pain section')
                break
              case 'knee-section':
                pushDataLayer('exp_hopg_impr_i_khp_i', `Image - ${productName}`, 'Image', 'For knee or hand pain')
                break
              case 'joint-section':
                pushDataLayer(
                  'exp_hopg_impr_i_jpa_i',
                  `Image - ${productName}`,
                  'Image',
                  'For joint pain and arthritis'
                )
                break
              case 'periodontal-section':
                pushDataLayer(
                  'exp_hopg_impr_i_pgd_i',
                  `Image - ${productName}`,
                  'Image',
                  'For periodontal (gum) disease'
                )
                break
              case 'skin-section':
                pushDataLayer(
                  'exp_hopg_impr_i_hgs_i',
                  `Image - ${productName}`,
                  'Image',
                  'For a healthy and glowing skin'
                )
                break

              default:
                break
            }
          }
          if (e.target.matches('.product__name') || e.target.closest('.product__name')) {
            switch (sectionId) {
              case 'back-pain-section':
                pushDataLayer('exp_hopg_impr_t_bps_it', `Image text - ${productName}`, 'Text', 'For back pain section')
                break
              case 'knee-section':
                pushDataLayer('exp_hopg_impr_t_khp_it', `Image text - ${productName}`, 'Text', 'For knee or hand pain')
                break
              case 'joint-section':
                pushDataLayer(
                  'exp_hopg_impr_t_jpa_it',
                  `Image text - ${productName}`,
                  'Text',
                  'For joint pain and arthritis'
                )
                break
              case 'periodontal-section':
                pushDataLayer(
                  'exp_hopg_impr_t_pgd_it',
                  `Image text - ${productName}`,
                  'Text',
                  'For periodontal (gum) disease'
                )
                break
              case 'skin-section':
                pushDataLayer(
                  'exp_hopg_impr_t_hgs_it',
                  `Image text - ${productName}`,
                  'Text',
                  'For a healthy and glowing skin'
                )
                break

              default:
                break
            }
          }
        })
      })
    }
  }, WAIT_INTERVAL_TIMEOUT)

  // check for the reviews section and rate stars, to update the main product rate
  waitForElement('div.opw-fontLg.opw-textColor.opw-mb-auto.opw-capitalize').then((el) => {
    const reviews = el.innerText
    const rate = document.querySelector('.opw-font6Xl.opw-font-bold.opw-navbarTextColor.opw-pr-2')?.innerText

    const waitForEl = setInterval(() => {
      if (
        document.querySelectorAll('.reviews--plugin a')[1] &&
        document.querySelectorAll('.reviews--plugin p')[1] &&
        document.querySelectorAll(
          '[data-product-name="Novaa deep healing pad with remote [2023]"] .product__rate span'
        )[2]
      ) {
        clearInterval(waitForEl)

        document.querySelectorAll('.reviews--plugin a').forEach((element) => {
          element.innerText = reviews.toLowerCase()
        })

        document.querySelectorAll('.reviews--plugin p').forEach((element) => {
          element.innerText = rate
        })

        document
          .querySelectorAll('[data-product-name="Novaa deep healing pad with remote [2023]"] .product__rate span')
          .forEach((element) => {
            element.innerText = rate
          })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  })

  const record = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(record)

      clarity('set', 'exp_hopg_impr', 'variant_1')
    }
  }, WAIT_INTERVAL_TIMEOUT)

  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
  function waitForElement(selector) {
    return new Promise((resolve) => {
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

  // function handleVisibilityAndHover(el, event) {
  //   const ms = 3000
  //   let timer

  //   const config = {
  //     root: null,
  //     threshold: 1,
  //   }

  //   if (DEVICE === 'mobile') {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           timer = setTimeout(() => {
  //             pushDataLayer(event)
  //           }, ms)
  //         } else {
  //           clearTimeout(timer)
  //         }
  //       })
  //     }, config)

  //     observer.observe(el)
  //   } else {
  //     function handleHover() {
  //       pushDataLayer(event)
  //       el.removeEventListener('mouseenter', handleHover)
  //     }

  //     el.addEventListener('mouseenter', handleHover)
  //   }
  // }

  function pushDataLayer(event_name, event_desc, event_type, event_loc) {
    // Send a Google Analytics event
    const eventData = {
      event: 'event-to-ga4',
      event_name,
      event_desc,
      event_type,
      event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function drawTableProducts() {
    const productsTableData = [
      {
        name: 'Novaa deep healing pad with remote [2023]',
        pdpLink: `https://novaalab.com/products/new-red-light-therapy-pad-at-home-with-remote`,
        imgUrl: `https://ucarecdn.com/d556b2cd-e77a-4265-b5c7-803a591a5b8d/-/format/auto/-/preview/3000x3000/-/quality/lighter/red%20light%20therapy%20pad%20at%20home%20infrared%205%20-%20700px.jpg`,
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
          }
        ],
        size: '15.7" x 9"',
        price: ['$700.00', '$349.90']
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
          }
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
          }
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
          }
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
            iconName: 'red',
            description: 'Red',
            nm: '630',
            number: ``
          },
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
          }
        ],
        size: '7.9" x 2.3"',
        price: ['$399.00', '$299.90']
      },
      {
        name: 'Novaa glow therapy mask',
        pdpLink: `https://novaalab.com/products/novaa-glow-therapy-mask`,
        imgUrl: `https://novaalab.com/cdn/shop/files/IMGpurplemask700pxcompressee_1024x1024.jpg?v=1692889719`,
        zones: 'Face',
        benefits: `6 different beauty modes. Extra Power. Easy To Use.`,
        lights: [
          {
            iconName: 'red',
            description: 'Red',
            nm: `630 nm <br>+ 10`,
            number: ``
          },
          {
            iconName: 'yellow',
            description: 'Yellow',
            nm: `580 nm <br>+ 10`,
            number: ``
          },
          {
            iconName: 'blue',
            description: 'Blue',
            nm: `450 nm <br>+ 10`,
            number: ``
          },
          {
            iconName: 'infrared',
            description: 'Infrared',
            nm: `830 nm <br>+ 10`,
            number: ``
          }
        ],
        size: '7.52" x 6.22" x 9.13"',
        price: ['$299.00', '$249.90']
      }
    ]

    const productTableRowTemplate = (name, link, src, zones, benefits, lights, size, price) => /*html*/ `
  <tr role="row">
  <td data-cell="Products" role="cell" data-product-name="${name}">
      <a href="${link}" class="table__img">
        <img src="${src}" alt="${name}">
      </a>
      <div>
        <a href="${link}" class="table__product-name">${name}</a>
        <a href="${link}" class="button">Learn more</a>
      </div>
    </td>
    <td data-cell="Zones" role="cell">${zones}</td>
    <td data-cell="Benefits" role="cell">${benefits.split(',').join(',<br>')}</td>
    <td data-cell="Medical Lights" role="cell">  
        ${lights
          .map(
            (light) => /*html*/ `
          <div>
            <div>
              <img src="https://conversionratestore.github.io/projects/novaalab/catalog-page/images/24_light_${
                light.iconName
              }.svg" alt="">
              <span>${light.description}<br>${light.nm} nm</span>
            </div>
            <div>
              ${light.number ? `<span>${light.number}<br><small>lights</small></span>` : ''}
            </div>
          </div>`
          )
          .join('')}
    </td>
    <td data-cell="Size" role="cell">${size}</td>
    <td data-cell="Price" role="cell"><small>${price[0]}</small><br><span>${price[1]}</span></td>
  </tr>
`

    const tableRowsHTML = productsTableData
      .map((product) => {
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
      })
      .join('')

    waitForElement('.table-wrapper tbody').then((el) => el.insertAdjacentHTML('beforeend', tableRowsHTML))

    waitForElement('.tables-wrapper').then((el) =>
      el.addEventListener('click', (e) => {
        if (e.target.matches('.button') || e.target.closest('.button')) {
          pushDataLayer(
            'exp_hopg_impr_b_scc_pn',
            `Learn more - ${e.target.closest('[data-product-name]').dataset.productName}`,
            'Button',
            'Section Compare and choose!'
          )
        }

        if (
          e.target.matches('.table__img') ||
          e.target.closest('.table__img') ||
          e.target.matches('.table-mobile__img-wrapper') ||
          e.target.closest('.table-mobile__img-wrapper')
        ) {
          pushDataLayer(
            'exp_hopg_impr_b_scc_pn_image',
            `Image - ${e.target.closest('[data-product-name]').dataset.productName}`,
            'Image',
            'Section Compare and choose!'
          )
        }

        if (
          e.target.matches('.table__product-name') ||
          e.target.closest('.table__product-name') ||
          e.target.matches('.table-mobile__name') ||
          e.target.closest('.table-mobile__name')
        ) {
          pushDataLayer(
            'exp_hopg_impr_b_scc_pn_title',
            `Image text - ${e.target.closest('[data-product-name]').dataset.productName}`,
            'Text',
            'Section Compare and choose!'
          )
        }
      })
    )

    const productTableRowsMobileTemplate = (data) => {
      const rowConfig = [
        {
          key: 'info',
          cellContent: ({ pdpLink, imgUrl, name, price }) => /*html*/ `
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
            <a href="${pdpLink}" class="button">Learn more</a>
          </div>
        </div>
      </td>
      `
        },
        { key: 'Zones heading', cellContent: () => `<td>Zones</td>` },
        { key: 'Zones content', cellContent: ({ zones }) => `<td>${zones}</td>` },
        { key: 'Benefits heading', cellContent: () => `<td>Benefits</td>` },
        {
          key: 'Benefits content',
          cellContent: ({ benefits }) => `<td><div>${benefits.split(',').join(',<br>')}</div></td>`
        },
        { key: 'Medical Lights heading', cellContent: () => `<td>Medical Lights</td>` },
        {
          key: 'Medical Lights content',
          cellContent: ({ lights }) => `<td>
    ${lights
      .map(
        ({ iconName, description, nm, number }) => /*html*/ `
      <div>
        <div>
          <img src="https://conversionratestore.github.io/projects/novaalab/catalog-page/images/24_light_${iconName}.svg" alt="">
          <span>${description}<br>${nm} nm</span>
        </div>
        <div>
          ${number ? `<span>${number}<br><small>lights</small></span>` : ''}
        </div>
      </div>`
      )
      .join('')}
    </td>`
        },
        { key: 'Size heading', cellContent: () => `<td>Size</td>` },
        { key: 'Size content', cellContent: ({ size }) => `<td>${size}</td>` }
      ]

      const rows = {}

      rowConfig.forEach((config) => {
        rows[config.key] = data.map((item) => config.cellContent(item))
      })

      return `
    ${rowConfig
      .map(
        (config) => `
      <tr data-row="${config.key}" role="row">
        ${rows[config.key].join('')}
      </tr>
    `
      )
      .join('')}
  `
    }

    waitForElement('.table-mobile tbody').then(
      (el) => (el.innerHTML = productTableRowsMobileTemplate(productsTableData))
    )
    // .then(
    //   () => document.querySelector('.table-mobile-wrapper').addEventListener('scroll', handleHorizontalScroll)
    // )

    waitForElement('[data-linkTo]').then((el) => {
      el.addEventListener('click', (e) => {
        window.location.href = e.target.dataset.linkto
      })
    })

    waitForElement('.efficient__content [data-btn="choose-kit"]').then((el) =>
      el.addEventListener('click', function (e) {
        e.preventDefault()

        // Get the 'href' attribute from the clicked element and remove the '#' character to get the target anchor.
        var targetAnchor = $(this).attr('href').substring(1)

        // Check if the target anchor element exists on the page.
        var $target = $('#' + targetAnchor)

        var navbarListHeight = $('.navbar-list').height()
        let offsetTop = navbarListHeight - (DEVICE === 'mobile' ? 15 : 0)

        if ($target.length) {
          $('html, body').animate(
            {
              scrollTop: $target.offset().top - offsetTop
            },
            1000
          ) // You can adjust the duration (in milliseconds) for smooth scrolling
        }

        pushDataLayer(
          'exp_hopg_impr_b_spmcs_cyk',
          'Choose your kit 1 ',
          'Button',
          'Scientifically proven by more than 3,000 clinical studies'
        )
      })
    )
    waitForElement('.ailments [data-btn="choose-kit"]').then((el) =>
      el.addEventListener('click', function (e) {
        e.preventDefault()

        // Get the 'href' attribute from the clicked element and remove the '#' character to get the target anchor.
        var targetAnchor = $(this).attr('href').substring(1)

        // Check if the target anchor element exists on the page.
        var $target = $('#' + targetAnchor)

        var navbarListHeight = $('.navbar-list').height()
        let offsetTop = navbarListHeight - (DEVICE === 'mobile' ? 15 : 0)

        if ($target.length) {
          $('html, body').animate(
            {
              scrollTop: $target.offset().top - offsetTop
            },
            1000
          ) // You can adjust the duration (in milliseconds) for smooth scrolling
        }

        pushDataLayer('exp_hopg_impr_b_wwnlhy_cyk', 'Choose your kit 2', 'Button', 'When will Novaa Light help you?')
      })
    )

    waitForElement('.even-columns a').then((el) =>
      el.addEventListener('click', function (e) {
        e.preventDefault()

        // Get the 'href' attribute from the clicked element and remove the '#' character to get the target anchor.
        var targetAnchor = $(this).attr('href').substring(1)

        // Check if the target anchor element exists on the page.
        var $target = $('#' + targetAnchor)

        var navbarListHeight = $('.navbar-list').height()
        let offsetTop = navbarListHeight + (DEVICE === 'mobile' ? 0 : 74)

        if ($target.length) {
          $('html, body').animate(
            {
              scrollTop: $target.offset().top - offsetTop
            },
            1000
          ) // You can adjust the duration (in milliseconds) for smooth scrolling
        }

        pushDataLayer('exp_hopg_impr_b_fs_arlt', 'About red light therapy', 'Button', 'First screen')
      })
    )
  }

  function drawProduct(name) {
    const item = productsData[name]

    const listItems = item.list.map((item) => `<li><span>${item}</span></li>`).join('')

    return /*html*/ `
      <div class="product ff-primary" data-product-name="${item.name}">
              <div class="product__img-wrapper">
                <div class="product__moneyback">
                  <img src="${IMAGE_DIR_URL}/guranteed-small.svg" alt="">
                  <p>60 Days money back</p>
                </div>
                <p class="product__sale">On sale</p>
                <a href="${item.pdpLink}">
                  <img
                    src="${item.imgUrl}"
                    alt="">
                </a>
              </div>
              <div class="product__info">
                <div class="product__content-top">
                  <div class="product__rate">
                    <img src="https://conversionratestore.github.io/projects/novaalab/catalog-page/images/stars.svg"
                      alt="">
                    <span>${item.rate}</span>
                  </div>
                  <a href="${item.pdpLink}" class="product__name">${item.name}</a>
                  <p class="product__subname">Complete Oral Care</p>
                  <ul class="product__characteristics">
                    ${listItems}
                  </ul>
                </div>
                <div class="product__content-bottom desktop">
                  <div class="product__price">
                    <span data-price="current">${item.price[1]}</span>
                    <span data-price="old">${item.price[0]}</span>
                    <span data-price="discount">${item.price[2]}</span>
                  </div>
                  <div class="product__buttons">
                    <a href="${item.pdpLink}" class="button">Learn more</a>
                    <button class="btn-add" data-product-id="${item.id}"><img
                        src="https://conversionratestore.github.io/projects/novaalab/catalog-page/images/24_cart.svg"
                        alt="Add to cart">
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
                <div class="product__content-bottom mobile">
                  <div class="product__price">
                  <span data-price="old">${item.price[0]}</span>
                    <div>
                    <span data-price="current">${item.price[1]}</span>
                    <span data-price="discount">${item.price[2]}</span>
                    </div>

                  </div>
                  <div class="product__buttons">
                    <a href="${item.pdpLink}" class="button">Learn more</a>
                    <button class="btn-add" data-product-id="${item.id}"><img
                        src="https://conversionratestore.github.io/projects/novaalab/catalog-page/images/24_cart.svg"
                        alt="Add to cart">
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    `
  }

  async function addProductToCart(id) {
    try {
      const response = await fetch('/cart/add.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          id,
          quantity: 1
        })
      })

      if (!response.ok) {
        throw new Error(`Failed to add item to cart. ${response.status} ${response.statusText}`)
      }

      window.location = 'https://novaalab.com/cart'
    } catch (error) {
      console.error('An error occurred while adding item to cart:', error)
    }
  }

  setTimeout(() => {
    document.querySelector('.exp-loading')?.remove()
  }, 4000)
})()
