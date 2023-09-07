console.log("**exp** initExp");
if (window._mfq) {
  window._mfq.push(["improving_pdp", "variant_1"]);
}

// (function () {
/********* exp **********/
const exp = {
  dir: "https://flopsi69.github.io/crs/llvws/new_pdp",
  observer: false,
  clarity: {
    enable: true,
    params: ["set", "booking_page_exp", "variant_1"],
  },
  debug: false,
};

let settings = null;
let product = null;
let productType = "rental";

fetch(`${exp.dir}/settings.json`)
  .then((response) => response.json())
  .then((json) => {
    settings = json;
    product = json.rental.find((p) => $(".fl-heading-text").innerText.toLowerCase().includes(p.name.toLowerCase()));

    if (!product) {
      product = json.events.find((p) => $(".fl-heading-text").innerText.toLowerCase().includes(p.name.toLowerCase()));

      productType = "event";
      document.body.classList.add("lav-event-page");
    }

    console.log("productType", productType);
    console.log("product", product);
  });

// Observer
if (exp.observer) {
  initObserver((el) => {
    console.log(el);
  });
}

/*** STYLES / Start ***/
const styles = `
#custom-topbar {
  display: none;
}
header .custom-logo-link img {
  max-height: 72px;
  width: auto;
}
.header .custom-logo-link {
  display: inline-flex;
}
.ast-site-identity {
  padding: 0;
}
.main-header-bar {
  padding: 12px 0;
}
#primary-menu li a {
  font-size: 14px;
  font-weight: 700 !important;
}
.main-header-menu .menu-link {
  padding: 0 12px;
}

:root {
  --main-color: #333;
  --secondary-color: #000;
}

.lav-page {
  padding: 0 40px;
  max-width: 1800px;
  font-family: "Lato", sans-serif;
  color: var(--main-color);
  margin: 32px auto 0;
}

.lav-page h2,
.lav-page h4,
.lav-page h5,
.lav-page h6 {
  color: var(--secondary-color);
}

.lav-page h2 {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}

.lav-page h3 {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.lav-page h4 {
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.lav-page h5 {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

.lav-page h6 {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
}

.lav-page a {
  color: inherit;
}

.lav-page li,
.lav-page p {
  color: var(--main-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.lav-product {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}

.lav-product__left {
  max-width: 57.3%;
  width: 100%;
}

.lav-product__divider {
  width: 1px;
  background-color: #ddd;
}

.lav-product__right {
  position: sticky;
  top: 0;
  align-self: flex-start;
  max-width: 38%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
iframe.rezdy {
  width: 100%;
}

/* Heading */
.lav-product__head {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.lav-product__head h2 {
  line-height: 1.2;
}
.lav-product__head h3 {
  margin-top: 4px;
  line-height: 1.3;
}
.main_slider .lav-product__head-icons {
  display: none;
}
.lav-product__head-icons {
  position: relative;
  display: flex;
  gap: 16px;
  list-style: none;
  white-space: nowrap;
  margin-left: 12px;
}

.lav-product__head-icons p {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  cursor: pointer;
  margin: 0;
  transition: 0.35s;
}

@media (hover: hover) {
  .lav-product__head-icons p:hover {
    opacity: 0.7;
  }
}

.lav-product__head-icons svg + span {
  border-bottom: 1px solid #333;
  line-height: 1.2;
  margin-left: 3px;
}

.lav-product__head-icons .copied {
  /* display: none; */
  opacity: 0;
  align-items: center;
  position: absolute;
  top: 90%;
  border-radius: 40px;
  background: #fff;
  padding: 5px 20px;
  white-space: nowrap;
  right: 0;
  transform: translateX(31%);
  line-height: 24px !important;
  z-index: 2;
  text-decoration-line: none !important;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  pointer-events: none;
}

.lav-product__head-icons .copied.active {
  opacity: 1;
  top: calc(100% + 11px);
}

/* SWIPER SLIDER GENERAL STYLES */
.swiper_arrow {
  width: 40px !important;
  height: 40px !important;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.4);
}

.swiper .swiper-button-next::after,
.swiper .swiper-button-prev::after {
  content: "";
}

/* MAIN SLIDER */
.main_slider {
  margin-top: 22px;
  margin-bottom: 8px;
  display: block;
  border-radius: 8px;
}

.main_slider .swiper-slide img {
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  max-height: 500px;
}

.lav-event-page .swiper-slide img {
  object-fit: contain;
}

.main_slider .swiper-slide {
  text-align: center;
  height: auto;
}

.main_slider .swiper-pagination {
  display: flex;
  align-items: center;
  border-radius: 40px;
  background: rgba(0, 0, 0, 0.7);
  width: fit-content;
  padding: 2px 8px;
  top: 16px;
  left: 16px;
  right: auto;
  bottom: auto;
}

.main_slider .swiper-pagination span {
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}
.main_slider_sync {
  margin-bottom: 32px;
}
.main_slider_sync .swiper-slide img {
  border-radius: 4px;
  height: 120px;
  min-width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid transparent;
  transition: 0.35s;
  object-fit: cover;
}

@media (hover: hover) {
  .main_slider_sync .swiper-slide:not(.swiper-slide-thumb-active) img:hover {
    opacity: 0.6;
  }
}

.main_slider_sync .swiper-slide-thumb-active img {
  border-color: #000;
}

/* 4 people are looking at this at the moment */
.looking {
  display: flex;
  gap: 11px;
  margin: 19px 0 0;
}

.looking > div {
  display: flex;
  align-items: center;
}

.looking p {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
}
.looking svg {
  margin-right: 3px;
}

/* Boat types available */
.boat_available {
  display: none;
  margin: 16px 0 32px;
}

.boat_available.active {
  display: block;
}

.boats {
  margin-top: 16px;
}

.boat {
  display: flex !important;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--dddddd, #ddd);
  background: #fff;
  box-sizing: border-box;
}

.boat img {
  max-width: 116px;
  max-height: 116px;
  border-radius: 4px;
  margin-right: 16px;
}

.boat p {
  color: #000;
  font-size: 17px;
  margin-bottom: 4px;
  font-weight: 700;
  line-height: 26px;
}
.boat_info ul {
  margin-left: 22px;
  margin-bottom: 0;
}
.boat_info ul span {
  font-weight: 700;
}

.about {
  margin-bottom: 24px;
}
.about .read_more_block {
  margin-top: 16px;
}

.about p {
  margin-bottom: 0;
}

/* START Read more */

.read_more {
  font-weight: 700;
  cursor: pointer;
  border-bottom: 1px solid #333;
  transition: 0.35s;
}

.about .read_more {
  margin-left: 7px;
}

@media (hover: hover) {
  .read_more:hover {
    opacity: 0.7;
  }
}

.full_text {
  display: none;
}

.full_text span {
  display: block;
}

/* END Read more */
.includes + .includes {
  margin-top: 32px;
}
.includes h6 {
  margin-bottom: 16px;
}
.includes ul {
  margin-bottom: 0;
  margin-left: 22px;
}
.includes li + li {
  margin-top: 3px;
}

.choice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--dddddd, #ddd);
  border-bottom: 1px solid var(--dddddd, #ddd);
  background: #fff;
  padding: 20px 0px;
  margin-top: 32px;
}

.choice p {
  margin-bottom: 0;
  color: var(--0-f-0900, #0f0900);
}

.choice p a {
  border-bottom: 1px solid #333;
  transition: 0.35;
}

@media (hover: hover) {
  .choice p a:hover {
    opacity: 0.7;
  }
}

.choice > img {
  width: 173px;
  height: 41px;
}

.choice div {
  margin-right: 15%;
}

.choice div > img {
  width: 183px;
}

/* ACCORDION */
.accordion_item {
  border-bottom: 1px solid #ccc;
}
.accordion_item p,
.accordion_item ul {
  margin-bottom: 0;
}
.accordion_item p + p,
.accordion_item ul + ul,
.accordion_item p + ul,
.accordion_item ul + p {
  margin-top: 10px;
}
.accordion_item ul {
  margin-left: 22px;
}

.accordion_header {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  cursor: pointer;
  transition: 0.35s;
}
.accordion_header h6 {
  line-height: 1.2;
}

@media (hover: hover) {
  .accordion_header:hover {
    opacity: 0.6;
  }
}

.accordion_content {
  display: none;
  padding-bottom: 16px;
}

.accordion_content a {
  text-decoration: underline;
  transition: 0.35s;
  cursor: pointer;
  color: #0170b9;
}
@media (hover: hover) {
  .accordion_content a:hover {
    text-decoration: underline;
    opacity: 0.7;
  }
}

.accordion_header svg {
  transition: 0.35s;
}

.accordion_header.active svg {
  transform: rotate(180deg);
}

.accordion_header.active + .accordion_content {
  display: block;
  margin-top: -4px;
}

.logos {
  margin-top: 24px;
}

/* You may also like && Read inspired story */
.similar_style {
  position: relative;
}

.similar_style .swiper {
  margin-top: 24px;
  width: 100%;
}

.similar_style_after .swiper::after {
  content: "";
  position: absolute;
  right: -5px;
  top: 0;
  height: 100%;
  width: 300px;
  background: linear-gradient(270deg, #fff 14.85%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
  pointer-events: none;
}

.similar_style .swiper_arrow {
  background: #000;
  top: 50%;
  transform: translateY(-50%);
}

.similar_style .swiper_arrow.swiper-button-disabled {
  opacity: 0 !important;
}

.similar_style .swiper-slide {
  border-radius: 8px;
  border: 1px solid var(--dddddd, #ddd);
  box-sizing: border-box;
  background: #fff;
  padding: 16px;
  /* max-width: 325px; */
}

.may_like .swiper-slide {
  height: auto;
}

.may_like .swiper-slide img {
  width: 100%;
  border-radius: 6px;
}

.similar_style .swiper-slide h6 {
  margin-top: 14px;
  margin-bottom: 5px;
}

.similar_style .swiper-slide p {
  margin-bottom: 4px;
}

.similar_style .swiper-slide p span {
  font-weight: 700;
}

.similar_style .swiper-slide p:last-child {
  margin-bottom: 0;
}

.similar_style .swiper-pagination,
.boats .swiper-pagination {
  position: relative !important;
  margin-top: 24px;
}

.similar_style .swiper-pagination-bullet,
.boats .swiper-pagination-bullet {
  width: 24px !important;
  height: 2px !important;
  border-radius: 0 !important;
}

.similar_style .swiper-pagination-bullet-active,
.boats .swiper-pagination-bullet-active {
  background: #000 !important;
}

/* Read inspired story from our customers */
.stories {
  margin-top: 64px;
}

.stories .preview_text {
  white-space: pre-line;
}

.stories h4 .divider {
  margin-inline: 8px;
}

.stories h4 .red_number {
  color: #e60023;
}

.stories .swiper-slide {
  padding: 24px;
  position: relative;
  box-sizing: border-box;
}

.service {
  position: absolute;
  top: 16px;
  right: 16px;
  line-height: 0;
}

.service img {
  max-width: 95px;
  max-height: 20px;
}

.stories .name {
  color: #010101;
  font-weight: 700;
}

p.verified {
  display: flex;
  align-items: center;
  color: #09b62c;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin: 7px 0 15px;
}

.stories .read_more_block .preview_text {
  font-size: 15px;
  height: 150px;
  overflow: hidden;
}

.stories .read_more_block .preview_text.active {
  height: auto;
}

.stories .read_more {
  display: inline-block;
}

.stories .read_more.disable {
  opacity: 0;
  pointer-events: none;
}

/* Sale */
.popup-trigger {
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 15px 20px;
}
.book_now_block > svg {
  display: none;
}
.book_now_wrapp {
  display: flex;
  justify-content: space-between;
}
.code_wrapp {
  position: relative;
}
p.copied {
  display: flex;
  align-items: center;
  gap: 2px;
  position: absolute;
  right: -19px;
  top: 47px;
  border-radius: 40px;
  border: 1px solid #f1f0e8;
  background: #fff;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.1);
  margin: 0 !important;
  padding: 4px 20px;
}
p.copied > span {
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-transform: initial;
}
p.book_now_txt,
.code_wrapp p:nth-child(1) {
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
}
.book_now_txt .accent_color,
.popup__copy-icon {
  display: block;
  color: #18aae2;
  font-size: 20px;
  text-transform: uppercase;
}
.popup__copy-icon {
  display: inline-block;
  margin-left: 5px;
  cursor: pointer;
}
.popup__copy-icon svg {
  margin-left: 4px;
}
.code_wrapp p:nth-child(2) {
  color: #333;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}

/* POPUP */
.popup {
  padding: 48px 53px;
  border: none;
  border-radius: 4px;
  background: #fff;
  max-width: 450px;
  text-align: center;
}

.popup__close {
  position: absolute;
  top: 11px;
  right: 11px;
  cursor: pointer;
  padding: 5px;
  transition: 0.35s;
}

@media (hover: hover) {
  .popup__close:hover {
    opacity: 0.65;
  }
}

.popup__title {
  margin-top: 16px;
  color: var(--000000, #000);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.popup__title span {
  color: #0170b9;
}

.popup__caption {
  margin-top: 12px;
  color: var(--333333, #333);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.popup__input-wrap {
  position: relative;
  margin-top: 32px;
}

.popup__copy {
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  bottom: 10px;
  right: 8px;
  transition: 0.35s;
}

.popup__copy-check {
  display: none;
}

.popup__copy.active .popup__copy-check {
  display: block;
}

.popup__copy.active .popup__copy-icon {
  display: none;
}

@media (hover: hover) {
  .popup__copy:not(.active):hover {
    opacity: 0.65;
    cursor: pointer;
  }
}

.popup__input-caption {
  color: #000;
  text-align: center;
  font-family: "Inter", "Lato", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.popup__input {
  width: 100%;
  padding: 5px 16px;
  height: 44px !important;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
  margin-top: 8px;
  color: #000 !important;

  text-align: center;
  pointer-events: none;
  font-weight: 700;
  border-radius: 4px !important;
  border: 1px solid #ddd !important;
  background: #fafafa !important;
}
.popup__input.error {
  border-color: red;
}
.popup__input:focus,
.popup__input[type="text"]:focus {
  border: 1px solid #18aae2 !important;
  outline: inherit !important;
}

.popup__input::placeholder {
  color: #a7a7a7;
}

.popup__btn {
  margin-top: 20px;
  border-radius: 100px;
  background: var(--18-aae-2, #18aae2);
  color: var(--ffffff, #fff);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  padding: 12px 32px;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;
}

@media (hover: hover) {
  .popup__btn:focus {
    background-color: #18aae2 !important;
  }
}

.popup::backdrop {
  background: rgba(11, 25, 51, 0.6);
}

.lav-cancel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}
.lav-cancel > div {
  width: 50%;
}
.lav-cancel_txt {
  width: 44% !important;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 10px;
}
.lav-cancel__check {
  display: none;
}
.lav-cancel__text {
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
}
.lav-cancel__text span {
  display: block;
  color: #07a64f;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
}
.main_slider .lav-product__head-icons {
  display: flex;
  position: absolute;
  top: 13px;
  right: 16px;
}
.lav-product__head-icons .copied {
  right: 39px;
  top: 26px;
}
.lav-mob,
.lav-mob-flex {
  display: none;
}
.lav-slide-vert img {
  object-fit: contain !important;
}
@media (max-width: 992px) {
  .lav-product {
    display: block;
  }
  .lav-product__left {
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .popup-trigger {
    padding: 15px;
    width: 100%;
  }
  .book_now_block {
    display: flex;
    gap: 15px;
  }
  .book_now_block > svg {
    display: block;
  }
  .book_now_wrapp,
  .lav-cancel {
    flex-direction: column;
    align-items: flex-start;
  }
  .book_now_txt .accent_color,
  .popup__copy-icon {
    display: inline-block;
  }
  .popup__copy-icon {
    color: #000;
    display: inline-flex;
    align-items: center;
  }
  .popup__copy-icon svg {
    margin: 0 0 0 4px;
    width: 21px;
    height: 21px;
  }
  .lav-cancel > div,
  .lav-cancel_txt {
    width: 100% !important;
  }
  .lav-cancel_txt {
    margin-left: 50px;
    max-width: 215px;
    margin-top: 2px;
  }
  .lav-cancel__text span {
    font-size: 20px;
  }
  .code_wrapp p:nth-child(2) {
    margin: 4px 0 0;
  }
  .lav-cancel > div:nth-child(1) {
    display: flex;
    gap: 15px;
  }
  .lav-cancel__check {
    display: block;
    width: 35px;
    height: 35px;
  }
  p.copied {
    right: -80px;
    top: 32px;
  }
  .lav-desk {
    display: none;
  }
  .main_slider .swiper-pagination {
    top: 11px;
  }
  #chat-widget-container[style*="max-height: calc(100% - 0px)"],
  #chat-widget-container[style*="height: 138px"] {
    bottom: 50px !important;
  }
  .popup__btn:hover {
    background: var(--18-aae-2, #18aae2) !important;
  }
  .lav-mob {
    display: block;
  }
  .lav-mob-flex {
    display: flex;
  }
  header .custom-logo-link img {
    max-height: 56px;
  }
  .main-header-bar {
    padding: 8px 0;
  }
  .accordion_content p,
  .accordion_content li {
    font-size: 14px;
    line-height: 1.45;
  }
  .accordion_content li + li {
    margin-top: 4px;
  }
  .tooltip.active .tooltip__body {
    display: block;
  }
  .tooltip__body {
    font-size: 13px;
    line-height: 18px;
  }
  .ast-button-wrap .menu-toggle .menu-toggle-icon {
    color: black;
  }
  .lav-page {
    padding: 0 20px;
    margin-top: 20px;
  }
  .lav-product__head h2 {
    font-size: 24px;
    line-height: 32px;
  }
  .lav-product__head h3 {
    margin-top: 2px;
  }
  .main_slider {
    height: 300px;
    margin: 16px 0 0;
    width: calc(100% + 40px);
    left: -20px;
    border-radius: 0;
    padding-top: 52px !important;
    border-top: 1px solid var(--Yellow-stroke, #e7e6de);
    background: var(--lake-fafafa, #fafafa);
    backdrop-filter: blur(2px);
  }
  .main_slider_sync {
    display: none !important;
  }
  .lav-gallery__actions .lav-product__head-icons {
    margin-left: 0;
    padding: 0 20px;
    display: inline-flex;
  }
  .lav-gallery__actions {
    padding: 16px 0;
    margin: 0 -20px;
    background: var(--fafafa, #fafafa);
  }
  .lav-gallery__actions-divider {
    display: none;
    margin: 16px 0;
    background: #ddd;
    height: 1px;
  }
  .lav-gallery__actions .lav-advisor {
    padding: 0 20px;
  }
  .lav-advisor > img {
    height: 20px;
  }
  .lav-advisor > p {
    margin-bottom: 0;
    margin-top: 4px;
    color: #0f0900;
    font-size: 13px;
    line-height: 18px;
  }
  .lav-advisor__count {
    font-weight: 600;
  }
  .lav-advisor a {
    border-bottom: 1px solid #0f0900;
  }
  .main_slider .swiper-pagination .swiper-pagination-current {
    margin-left: 3px;
  }
  .looking {
    margin: 20px 0 0;
    display: block;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  .looking p {
    line-height: 20px;
    font-weight: 500;
    color: var(--333333, #333);
  }
  .looking > div + div {
    margin-top: 10px;
  }
  .boat_available {
    margin-top: 20px;
    margin-bottom: 0;
  }
  .boats {
    position: relative;
    width: calc(100% + 40px);
    left: -20px;
    padding: 0 20px !important;
  }
  .boat p {
    font-size: 16px;
  }
  .boat {
    padding: 10px;
  }
  .boat img {
    margin-right: 12px;
  }
  .similar_style .swiper-pagination,
  .boats .swiper-pagination {
    margin-top: 18px;
  }
  .accordion {
    margin-top: 20px;
  }
  .includes {
    margin-top: 20px;
  }
  p.includes {
    margin-bottom: 0;
  }
  .includes h6 {
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.5;
  }
  .accordion_header h6 {
    font-size: 16px;
    line-height: 1.5;
  }
  .includes + .includes {
    margin-top: 20px;
  }
  .choice {
    border-top: none;
    margin-top: 20px;
    padding-top: 0;
  }
  .choice-caption {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
  }
  .similar_style_after .swiper::after {
    display: none;
  }
  .lav-product {
    margin-bottom: 34px;
  }
  .may_like h4 {
    font-size: 20px;
    line-height: 28px;
  }
  .similar_style .swiper {
    margin-top: 16px;
    width: calc(100% + 40px);
    left: -20px;
    padding: 0 20px !important;
  }
  .similar_style .swiper-slide h6 {
    margin-top: 12px;
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 1.4;
  }
  .similar_style .swiper_arrow {
    display: none;
  }
  .stories {
    margin-top: 35px;
  }
  .stories h4 {
    font-size: 20px;
    line-height: 28px;
  }
  .stories .main-text {
    display: block;
  }
  .stories .red_number {
    color: var(--e-60023, #e60023);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  .red_number-caption {
    color: var(--333333, #333);
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  .stories .swiper-wrapper {
    display: block;
  }
  .stories .swiper-slide + .swiper-slide {
    margin-top: 8px;
  }
  .stories .swiper-pagination {
    display: none;
  }
  .stories .read_more.disable {
    display: none;
  }
  .stories:not(.stories_revealed) .swiper-slide:nth-child(n + 3) {
    display: none;
  }
  .lav-loader {
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1px solid var(--333333, #333);
    background: #fff;
    color: var(--333333, #333);
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    height: 56px;
    margin-top: 24px;
    width: 100%;
  }
  .lav-loader img {
    margin-right: 8px;
    position: relative;
    top: 1px;
  }
  .lav-product__right {
    width: 100%;
    max-width: initial;
    position: relative;
    margin-top: 10px;
  }
  .logos {
    margin-top: 40px;
  }
}
@media (max-width: 530px) {
  .popup {
    max-width: 92%;
    padding: 32px 24px;
  }
  .popup__close {
    top: 6px;
    right: 6px;
  }
  .popup__title {
    margin-top: 12px;
    font-size: 22px;
    line-height: 30px;
  }
  .popup__caption {
    margin-top: 8px;
  }
  .popup__input-wrap {
    margin-top: 24px;
  }
  .main_slider .swiper-slide img {
    max-height: 300px;
  }
}
@media (max-width: 405px) {
  .similar_style .swiper-slide p {
    font-size: 14px;
  }
  .lav-product__right iframe {
    width: 100%;
  }
  .boat img {
    max-width: 105px;
    max-height: 105px;
    margin-right: 8px;
  }
  .boat_info ul {
    font-size: 14px;
  }
}

  `;
/*** STYLES / End ***/

const html = `
  <div class="lav-page">
    <div class="lav-product">
      <div class="lav-product__left">
        <div class="lav-product__head">
          <div class="lav-product__head-info">
            <h2></h2>
            <h3></h3>
          </div>

          <div class="lav-product__head-icons lav-desk">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C10.1441 3.00201 8.36488 3.70629 7.05258 4.95835C5.74028 6.2104 5.00211 7.90797 5 9.67864C5 15.3934 11.3636 19.7095 11.6349 19.8901C11.7419 19.9616 11.8694 20 12 20C12.1306 20 12.2581 19.9616 12.3651 19.8901C12.6364 19.7095 19 15.3934 19 9.67864C18.9979 7.90797 18.2597 6.2104 16.9474 4.95835C15.6351 3.70629 13.8559 3.00201 12 3ZM12 7.25004C12.5034 7.25004 12.9956 7.39248 13.4142 7.65934C13.8328 7.92619 14.159 8.30549 14.3517 8.74925C14.5444 9.19302 14.5948 9.68133 14.4965 10.1524C14.3983 10.6235 14.1559 11.0563 13.7999 11.3959C13.4439 11.7356 12.9904 11.9669 12.4966 12.0606C12.0028 12.1543 11.491 12.1062 11.0259 11.9224C10.5608 11.7386 10.1632 11.4273 9.88353 11.0279C9.60383 10.6285 9.45455 10.159 9.45455 9.67864C9.45455 9.03453 9.72273 8.41681 10.2001 7.96136C10.6775 7.50591 11.3249 7.25004 12 7.25004Z"
                  fill="#333333" />
              </svg>
              <span>How to find us</span>
            </p>

            <p class="icon_share">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15.2727V10.7727V6.27271" stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M15 9L12 6L9 9" stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
                <path
                  d="M6 13V17C6 17.2652 6.11493 17.5196 6.31952 17.7071C6.5241 17.8946 6.80158 18 7.09091 18H16.9091C17.1984 18 17.4759 17.8946 17.6805 17.7071C17.8851 17.5196 18 17.2652 18 17V13"
                  stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <span>Share</span>
            </p>

            <p class="copied">
              <img src="${exp.dir}/img/check_green.svg"><span>Link copied</span>
            </p>
          </div>
        </div>

        <div class="swiper main_slider">
                  <div class="lav-product__head-icons lav-observe">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C10.1441 3.00201 8.36488 3.70629 7.05258 4.95835C5.74028 6.2104 5.00211 7.90797 5 9.67864C5 15.3934 11.3636 19.7095 11.6349 19.8901C11.7419 19.9616 11.8694 20 12 20C12.1306 20 12.2581 19.9616 12.3651 19.8901C12.6364 19.7095 19 15.3934 19 9.67864C18.9979 7.90797 18.2597 6.2104 16.9474 4.95835C15.6351 3.70629 13.8559 3.00201 12 3ZM12 7.25004C12.5034 7.25004 12.9956 7.39248 13.4142 7.65934C13.8328 7.92619 14.159 8.30549 14.3517 8.74925C14.5444 9.19302 14.5948 9.68133 14.4965 10.1524C14.3983 10.6235 14.1559 11.0563 13.7999 11.3959C13.4439 11.7356 12.9904 11.9669 12.4966 12.0606C12.0028 12.1543 11.491 12.1062 11.0259 11.9224C10.5608 11.7386 10.1632 11.4273 9.88353 11.0279C9.60383 10.6285 9.45455 10.159 9.45455 9.67864C9.45455 9.03453 9.72273 8.41681 10.2001 7.96136C10.6775 7.50591 11.3249 7.25004 12 7.25004Z"
                  fill="#333333" />
              </svg>
              <span>How to find us</span>
            </p>

            <p class="icon_share">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15.2727V10.7727V6.27271" stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
                <path d="M15 9L12 6L9 9" stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
                <path
                  d="M6 13V17C6 17.2652 6.11493 17.5196 6.31952 17.7071C6.5241 17.8946 6.80158 18 7.09091 18H16.9091C17.1984 18 17.4759 17.8946 17.6805 17.7071C17.8851 17.5196 18 17.2652 18 17V13"
                  stroke="#333333" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <span>Share</span>
            </p>

            <p class="copied">
              <img src="${exp.dir}/img/check_green.svg"><span>Link copied</span>
            </p>
          </div>
          <div class="swiper-wrapper"></div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev swiper_arrow"><img src="${exp.dir}/img/slider_arr_l.svg"></div>
          <div class="swiper-button-next swiper_arrow"><img src="${exp.dir}/img/slider_arr_r.svg"></div>
        </div>

        <div class="swiper main_slider_sync">
          <div class="swiper-wrapper"></div>
        </div>

        <div class='lav-gallery__actions lav-mob'>
          <div class='lav-advisor lav-observe'>
            <img src="${exp.dir}/img/tripadvisor_points.png">
            <p>based on <span class="lav-advisor__count">948 reviews</span> <span style="margin-inline: 8px;">·</span> <a href="https://www.tripadvisor.ru/Attraction_Review-g45963-d7161682-Reviews-Lake_Las_Vegas_Water_Sports-Las_Vegas_Nevada.html" target='_blank'>See all Reviews</a></p>
          </div>

          <div class='lav-gallery__actions-divider'></div>
        </div>

        <div class="boat_available lav-observe">
          <h5 class="boat_available-title">Boat types available</h5>

          <div class="swiper boats">
            <div class="swiper-wrapper">
              <div class="swiper-slide boat">
                <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/10/IMG_9594-3-1024x683.jpg"
                >
                <div class="boat_info">
                  <p>Regular electric boat:</p>
                  <ul>
                    <li>up to <span>9</span> guests</li>
                    <li>from <span>$199</span> per boat</li>
                    <li>no license needed</li>
                  </ul>
                </div>
              </div>
              <div class="swiper-slide boat">
                <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg"
                >
                <div class="boat_info">
                  <p>XL electric boat:</p>
                  <ul>
                    <li>up to <span>12</span> guests</li>
                    <li>from <span>$299</span> per boat</li>
                    <li>no license needed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="choice lav-mob">
          <div class="choice-caption">Awards</div>
          <img src="${exp.dir}/img/choice.png">
        </div>

        <div class="about lav-desk">
          <h5>ABOUT LAKE LAS VEGAS</h5>
          <div class="read_more_block">
            <p class="preview_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
              scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
              picturing Las Vegas. <span class="read_more">Read more ></span></p>
            <p class="full_text">Majestic palm trees, shimmering lake waters, and sunny skies! Beautiful outdoor
              scenery, an Italian-style village, and lakefront resorts are not typically what one thinks of when
              picturing Las Vegas. However, that is what is to be found only 20 miles from the famous Las Vegas Strip,
              where desert, lights, and gambling convert into a scenic, quiet retreat with Lake Mead National Park
              (Hoover Dam), Valley of Fire State Park right around the corner!</p>
          </div>
        </div>

        <div class="choice lav-desk">
          <img src="${exp.dir}/img/choice.png">
          <div class='lav-advisor'>
            <img src="${exp.dir}/img/tripadvisor_points.png">
            <p>based on 948 reviews <span style="margin-inline: 8px;">·</span> <a href="https://www.tripadvisor.ru/Attraction_Review-g45963-d7161682-Reviews-Lake_Las_Vegas_Water_Sports-Las_Vegas_Nevada.html" target='_blank'>See all Reviews</a></p>
          </div>
        </div>

        <div class="accordion"></div>

        <div class="logos lav-desk">
          <img src="${exp.dir}/img/logos.png">
        </div>
      </div>

      <div class="lav-product__divider"></div>

      <div class="lav-product__right">
        <div class="popup-trigger">
        <div class="book_now_block">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3685 7.7915H20.6315C25.5926 7.7915 28.0732 7.7915 29.6154 9.32972C30.6785 10.3876 31.0079 11.8903 31.1116 14.3394C31.1313 14.825 31.1418 15.0691 31.0512 15.2306C30.9593 15.392 30.5984 15.5954 29.8739 15.9997C29.4658 16.2272 29.1259 16.5596 28.8892 16.9624C28.6526 17.3653 28.5278 17.824 28.5278 18.2913C28.5278 18.7585 28.6526 19.2172 28.8892 19.6201C29.1259 20.023 29.4658 20.3553 29.8739 20.5828C30.5984 20.9884 30.9606 21.1905 31.0512 21.3519C31.1418 21.5134 31.1313 21.7562 31.1103 22.2418C31.0079 24.6922 30.6771 26.195 29.6154 27.2528C28.0745 28.791 25.594 28.791 20.6315 28.791H15.3685C10.4074 28.791 7.9268 28.791 6.38464 27.2528C5.32154 26.195 4.99211 24.6922 4.88843 22.2431C4.86874 21.7575 4.85824 21.5134 4.9488 21.3519C5.04067 21.1905 5.4016 20.9884 6.12609 20.5828C6.53418 20.3553 6.87411 20.023 7.11076 19.6201C7.3474 19.2172 7.47217 18.7585 7.47217 18.2913C7.47217 17.824 7.3474 17.3653 7.11076 16.9624C6.87411 16.5596 6.53418 16.2272 6.12609 15.9997C5.4016 15.5954 5.03936 15.392 4.9488 15.2306C4.85824 15.0691 4.86874 14.8263 4.88974 14.3394C4.99211 11.8903 5.32286 10.3889 6.38464 9.32972C7.92548 7.7915 10.4061 7.7915 15.3685 7.7915ZM22.6566 13.6582C22.7481 13.7495 22.8206 13.858 22.8701 13.9773C22.9196 14.0967 22.9451 14.2246 22.9451 14.3539C22.9451 14.4831 22.9196 14.611 22.8701 14.7304C22.8206 14.8497 22.7481 14.9582 22.6566 15.0495L14.7621 22.9243C14.5769 23.1089 14.3261 23.2125 14.0646 23.2125C13.8031 23.2125 13.5522 23.1089 13.367 22.9243C13.2755 22.833 13.203 22.7245 13.1535 22.6052C13.104 22.4858 13.0786 22.3579 13.0786 22.2287C13.0786 22.0995 13.104 21.9715 13.1535 21.8522C13.203 21.7328 13.2755 21.6244 13.367 21.5331L21.2602 13.6582C21.4455 13.4733 21.6966 13.3694 21.9584 13.3694C22.2202 13.3694 22.4714 13.4733 22.6566 13.6582ZM21.3009 22.8849C21.4782 22.8928 21.6552 22.8648 21.8214 22.8024C21.9875 22.74 22.1393 22.6446 22.2676 22.522C22.3958 22.3993 22.4979 22.2519 22.5677 22.0887C22.6374 21.9255 22.6734 21.7499 22.6734 21.5724C22.6734 21.395 22.6374 21.2193 22.5677 21.0561C22.4979 20.8929 22.3958 20.7456 22.2676 20.6229C22.1393 20.5003 21.9875 20.4049 21.8214 20.3425C21.6552 20.2801 21.4782 20.252 21.3009 20.26C20.5738 20.26 19.9845 20.848 19.9845 21.5724C19.9845 22.2969 20.5751 22.8849 21.3009 22.8849ZM14.7215 16.3226C15.4486 16.3226 16.0379 15.7346 16.0379 15.0101C16.0379 14.2856 15.4486 13.6976 14.7215 13.6976C14.5442 13.6897 14.3671 13.7178 14.2009 13.7801C14.0348 13.8425 13.883 13.9379 13.7548 14.0606C13.6265 14.1832 13.5244 14.3306 13.4547 14.4938C13.3849 14.657 13.349 14.8326 13.349 15.0101C13.349 15.1876 13.3849 15.3632 13.4547 15.5264C13.5244 15.6896 13.6265 15.8369 13.7548 15.9596C13.883 16.0823 14.0348 16.1777 14.2009 16.24C14.3671 16.3024 14.5442 16.3305 14.7215 16.3226Z" fill="#18AAE2"/></svg>
        <div class="book_now_wrapp lav-observe">
        <p class="book_now_txt">Book now & enjoy <span class="accent_color">10% off</span></p>
          <div class="code_wrapp">
          <p>
            <span>With code:</span>
            <span class="popup__copy-icon">BOOK10
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.598 3.63594H11.4163V1.41016C11.4163 1.18364 11.2363 1 11.0143 1H2.40202C2.18 1 2 1.18364 2 1.41016V11.9539C2 12.1804 2.18 12.3641 2.40202 12.3641H4.58368V14.5898C4.58368 14.8164 4.76368 15 4.9857 15H13.598C13.82 15 14 14.8164 14 14.5898V4.04609C14 3.81958 13.82 3.63594 13.598 3.63594ZM2.80405 11.5438V1.82031H10.6123V4.03923C10.6122 4.04153 10.6119 4.04377 10.6119 4.04609C10.6119 4.04842 10.6122 4.05066 10.6123 4.05298V11.5438H2.80405ZM13.196 14.1797H5.38773V12.3641H11.0143C11.2363 12.3641 11.4163 12.1804 11.4163 11.9539V4.45625H13.196V14.1797Z" fill="#18AAE2"/>
</svg>
            </span>
          </p>
          <p>Enter code when booking a rental</p>
         </div>
        </div>
        </div>
         <div class='lav-cancel'>
           <div>
           <img class="lav-cancel__check" src="${exp.dir}/img/check_green.svg">
           <div class='lav-cancel__text lav-observe'><span>Free cancelation</span> up to 24 hours before the event</div>
           </div>
           <div class="lav-cancel_txt">For cancelations, please send us an email or submit your request via chat or SMS</div>
         </div>
        </div>

        <div class="looking lav-observe">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.87143 11.982C9.87143 12.5271 10.088 13.0498 10.4734 13.4352C10.8588 13.8206 11.3815 14.0372 11.9266 14.0372C12.4717 14.0372 12.9944 13.8206 13.3798 13.4352C13.7652 13.0498 13.9818 12.5271 13.9818 11.982C13.9818 11.4369 13.7652 10.9142 13.3798 10.5288C12.9944 10.1434 12.4717 9.92683 11.9266 9.92683C11.3815 9.92683 10.8588 10.1434 10.4734 10.5288C10.088 10.9142 9.87143 11.4369 9.87143 11.982ZM19.894 11.5086C18.1545 7.84414 15.525 6 12 6C8.47319 6 5.84551 7.84414 4.10596 11.5104C4.03619 11.6582 4 11.8195 4 11.9829C4 12.1463 4.03619 12.3077 4.10596 12.4554C5.84551 16.1199 8.47502 17.964 12 17.964C15.5268 17.964 18.1545 16.1199 19.894 12.4536C20.0353 12.1563 20.0353 11.8113 19.894 11.5086ZM11.9266 15.2115C10.143 15.2115 8.69705 13.7656 8.69705 11.982C8.69705 10.1984 10.143 8.75245 11.9266 8.75245C13.7102 8.75245 15.1561 10.1984 15.1561 11.982C15.1561 13.7656 13.7102 15.2115 11.9266 15.2115Z"
                fill="#B12704" />
            </svg>
            <p><span>4</span> people are looking at this at the moment</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 6H15.5V5.5C15.5 5.36739 15.4473 5.24021 15.3536 5.14645C15.2598 5.05268 15.1326 5 15 5C14.8674 5 14.7402 5.05268 14.6464 5.14645C14.5527 5.24021 14.5 5.36739 14.5 5.5V6H9.5V5.5C9.5 5.36739 9.44732 5.24021 9.35355 5.14645C9.25979 5.05268 9.13261 5 9 5C8.86739 5 8.74021 5.05268 8.64645 5.14645C8.55268 5.24021 8.5 5.36739 8.5 5.5V6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM7 9V7H8.5V7.5C8.5 7.63261 8.55268 7.75979 8.64645 7.85355C8.74021 7.94732 8.86739 8 9 8C9.13261 8 9.25979 7.94732 9.35355 7.85355C9.44732 7.75979 9.5 7.63261 9.5 7.5V7H14.5V7.5C14.5 7.63261 14.5527 7.75979 14.6464 7.85355C14.7402 7.94732 14.8674 8 15 8C15.1326 8 15.2598 7.94732 15.3536 7.85355C15.4473 7.75979 15.5 7.63261 15.5 7.5V7H17V9H7Z"
                fill="#B12704" />
              <path d="M11.7485 15L10 13.104L10.4371 12.6299L11.7485 14.052L14.5629 11L15 11.474L11.7485 15Z"
                fill="white" />
            </svg>
            <p>Booked <span>3</span> times today</p>
          </div>
        </div>

      </div>
    </div>

    <div class="lav-additional">
      <div class="may_like similar_style similar_style_after lav-observe">
        <h4>You may also like</h4>
        <div class="swiper">
          <div class="swiper-wrapper"></div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev swiper_arrow"><img src="${exp.dir}/img/slider_arr_l.svg"></div>
          <div class="swiper-button-next swiper_arrow"><img src="${exp.dir}/img/slider_arr_r.svg"></div>
        </div>
      </div>

      <div class="stories similar_style similar_style_after lav-observe">
        <h4><span class='main-text'>Be inspired by our customers' stories</span><span class='lav-desk divider'>·</span><span class="red_number">1.56k</span> <span class="red_number-caption">Reviews</span></h4>
        <div class="swiper">
          <div class="swiper-wrapper">
          </div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev swiper_arrow"><img src="${exp.dir}/img/slider_arr_l.svg"></div>
          <div class="swiper-button-next swiper_arrow"><img src="${exp.dir}/img/slider_arr_r.svg"></div>
        </div>
        <button class="lav-loader lav-mob-flex"><img src="${exp.dir}/img/load.svg"> Load more</button>
      </div>
    </div>

    <div class="logos lav-mob">
      <img src="${exp.dir}/img/logos-mob.png">
    </div>
  </div>

  <div class='lav-sticky'>
    <div class="lav-sticky__btn">Book now</div>
  </div>
`;

/********* Custom Code **********/
let isReadyMainSlider = false;

waitFor(
  () => document.head,
  () => {
    addStyles();
    addSwiper();
    init();
    observerView();
  },
  100
);

// *** Functions *** //
function init() {
  console.log("**exp** init");

  // Add New Page
  $("#content").insertAdjacentHTML("beforebegin", html);

  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    if ($(".lav-product__left .lav-product__right")) {
      const { bottom, height, top } = $(".lav-product__right iframe").getBoundingClientRect();

      if (bottom - height / 2 - window.innerHeight < 0 && bottom > 40) {
        $(".lav-sticky").classList.add("lav-sticky_disable");
      } else if ($(".lav-sticky").classList.contains("lav-sticky_disable")) {
        $(".lav-sticky").classList.remove("lav-sticky_disable");
      }

      console.debug("bottomDiff:", bottom - window.innerHeight);
      console.debug("bottom:", bottom, "height:", height, "top:", top);
    }
  }

  changeFooter();

  handleProductInfo();

  // Init Swiper
  waitFor(
    () => typeof Swiper !== "undefined" && settings && product !== null,
    () => {
      initSwiper();
    }
  );

  // Init Popup
  waitFor(
    () => $(".popup"),
    () => initPopup()
  );

  // Init Iframe
  if (window.innerWidth < 992) {
    $(".choice.lav-mob").insertAdjacentElement("beforebegin", $(".lav-product__right"));
  }

  // $('.lav-product__right iframe').src = $('#booking-form iframe.rezdy').src;
  $(".lav-product__right").insertAdjacentElement("afterbegin", $("#booking-form iframe.rezdy"));

  $(".lav-sticky__btn").addEventListener("click", () => {
    $(".lav-product__right").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    pushDataLayer("exp_improving_pdp_sb_book", "Book now", "Button", "Sticky button");
  });
}

function handleProductInfo() {
  // Title
  $(".lav-product__head h2").innerText = $(".fl-heading-text").innerText;

  waitFor(
    () => settings && product !== null,
    () => {
      if (!product || !product.caption) {
        $(".lav-product__head h3").remove();
        return false;
      }

      $(".lav-product__head h3").innerText = product.caption;
    }
  );

  // Share
  for (let share of $$(".icon_share")) {
    share.addEventListener("click", () => {
      pushDataLayer("exp_improving_pdp_add_b_c", "Share", "Button", "Additional buttons");
      navigator.clipboard
        .writeText(window.location)
        .then(() => {
          share.nextElementSibling.classList.add("active");

          setTimeout(() => {
            share.nextElementSibling.classList.remove("active");
          }, 1200);
        })
        .catch((error) => {
          console.error("Failed to copy link:", error);
        });
    });
  }

  // Slider
  waitFor(
    () => $(".fl-slideshow-container .fl-slideshow-thumbs .fl-slideshow-image-img"),
    () => {
      setTimeout(() => {
        let isChangeDirection = false;
        $$(".fl-slideshow-container .fl-slideshow-thumbs .fl-slideshow-image-img").forEach((slide) => {
          const src = slide.src.replace("-150x150", "");
          const isVert = src.includes("Brown_Vintage_Cowboy");

          if (src.includes("516A2034_lg")) {
            isChangeDirection = true;
            return;
          }

          $(".main_slider .swiper-wrapper").insertAdjacentHTML(
            "beforeend",
            `
              <div class="swiper-slide ${isVert ? "lav-slide-vert" : ""}">
                <img src="${src}" loading="lazy">
                <div class="swiper-lazy-preloader"></div>
              </div>
            `
          );

          $(".main_slider_sync .swiper-wrapper").insertAdjacentHTML(
            "beforeend",
            `
              <div class="swiper-slide">
                <img src="${src}" loading="lazy">
                <div class="swiper-lazy-preloader"></div>
              </div>
            `
          );

          if (isChangeDirection) {
            isChangeDirection = false;
            $(".main_slider .swiper-wrapper").insertAdjacentHTML(
              "beforeend",
              `
                <div class="swiper-slide">
                  <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2020/03/516A2034_lg.jpg" loading="lazy">
                  <div class="swiper-lazy-preloader"></div>
                </div>
              `
            );

            $(".main_slider_sync .swiper-wrapper").insertAdjacentHTML(
              "beforeend",
              `
                <div class="swiper-slide">
                  <img src="https://lakelasvegaswatersports.com/wp-content/uploads/2020/03/516A2034_lg.jpg" loading="lazy">
                  <div class="swiper-lazy-preloader"></div>
                </div>
              `
            );
          }
        });

        isReadyMainSlider = true;
      }, 500);
    }
  );

  $(".lav-gallery__actions .lav-advisor a").addEventListener("click", () => {
    pushDataLayer("exp_improving_pdp_see_fs", "See all Reviews", "Link", "First screen");
  });

  // Looking & Booked
  $(".looking>div:first-child span").innerText = $(".persons .grid").innerText;
  $(".looking>div:last-child span").innerText = $(".booked .grid").innerText;

  // Boats type
  if (!$(".lav-product__head h2").innerText.trim().includes("Hour Electric Boat Rental")) {
    $(".boat_available").remove();
  } else {
    $(".boat_available").classList.add("active");
  }

  // About
  $(".about .read_more").addEventListener("click", function () {
    const readMoreBlock = this.closest(".read_more_block");

    readMoreBlock.querySelector(".preview_text").style.display = "none";
    readMoreBlock.querySelector(".full_text").style.display = "block";
  });

  // Included and Accordion
  let beforeAccordionHandled = false;
  $$(".fl-rich-text>p>strong").forEach((el) => {
    const text = el.innerText.toLowerCase().trim();
    const parent = el.closest("p");

    if (!beforeAccordionHandled) {
      beforeAccordionHandled = true;
      let prevElement = parent.previousElementSibling;
      while (prevElement) {
        const cloneEl = prevElement.cloneNode(true);
        cloneEl.classList.add("includes");

        $(".about.lav-desk").insertAdjacentElement("beforebegin", cloneEl);
        prevElement = prevElement.previousElementSibling;
      }
    }

    if ((text === "about lake las vegas" && window.innerWidth > 768) || !text) {
      return false;
    }

    if (text === "note:" || text === "neon paddle | 2.5 hour event | neon glow paddle with dj") {
      $(".choice.lav-desk").insertAdjacentHTML("beforebegin", `<div class="includes">${parent.innerHTML}</div>`);
    } else if (text.includes("include")) {
      let title = el.innerText[0].toUpperCase() + el.innerText.substring(1).toLowerCase();

      if (title.trim().startsWith("2023")) {
        title = "2023 " + el.innerText[5].toUpperCase() + el.innerText.substring(6).toLowerCase();
      }

      const includes = `
          <div class="includes">
            <h6>${title}</h6>
            <ul>
              ${parent.nextElementSibling.innerHTML}
            </ul>
          </div>
        `;

      $(".choice.lav-desk").insertAdjacentHTML("beforebegin", includes);
    } else {
      const accordionEl = document.createElement("div");
      accordionEl.classList.add("accordion_item");
      accordionEl.innerHTML = `
          <div class="accordion_header">
            <h6>${el.innerText[0].toUpperCase() + el.innerText.substring(1).toLowerCase()}</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 14L17 10" stroke="#333333" stroke-width="2" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="accordion_content"></div>
        `;

      let nextEl = parent.nextElementSibling;
      let nextElText = nextEl?.querySelector("strong")?.innerText.toLowerCase().trim();

      while (nextEl && !(nextEl.tagName === "P" && nextEl.children.length === 1 && nextEl.children[0].tagName === "STRONG")) {
        accordionEl.querySelector(".accordion_content").insertAdjacentHTML("beforeend", nextEl.outerHTML);

        nextEl = nextEl.nextElementSibling;
        nextElText = nextEl?.querySelector("strong")?.innerText.toLowerCase().trim();
      }

      $(".accordion").insertAdjacentElement("beforeend", accordionEl);
    }
  });

  $(".accordion").insertAdjacentHTML(
    "beforeend",
    `
      <div class="accordion_item">
        <div class="accordion_header">
          <h6>Cancellation & Refunds</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 14L17 10" stroke="#333333" stroke-width="2" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="accordion_content">
          <p>Our cancellation policy allows for free cancellations up to 24 hours before the event. For cancellations, please send us an email or submit your request via chat or SMS. Refunds will be processed according to our terms and conditions.</p>
        </div>
      </div>
    `
  );

  // Init Accordion
  initAccordion();
}

function changeFooter() {
  const howFindHtml = `
      <style>
        .lav-find {
          margin-top: 65px;
          margin-bottom: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .lav-find__info {
          max-width: 400px;
          width: 100%;
          margin-right: 20px;
        }
        .lav-find__descr {
          margin: 20px 0;
        }
        .lav-find__list {
          font-weight: 700;
        }
        .lav-find__item + .lav-find__item {
          margin-top: 16px;
        }
        .lav-find__item {
          font-size: 16px;
          font-style: normal;
          font-weight: 700!important;
          line-height: 24px; 
        }
        .lav-find__list {
          margin: 0;
          list-style: none;
        }
        .lav-find__item img {
          filter: invert(100%) sepia(34%) saturate(0%) hue-rotate(193deg) brightness(92%) contrast(74%);
          width: 18px;
          margin-right: 10px;
        }

        .footer-adv-widget-4 {
          display: none;
        }
        .footer-adv-overlay {
          padding-bottom: 5px;
        }
        #footer-form input[type="submit"] {
          border-radius: 100px;
          width: 100%;
          margin-bottom: 0;
          margin-top: 4px;
          transition: 0.35s;
        }
        @media(hover: hover) {
          #footer-form input[type="submit"]:hover {
            opacity: 0.8;
          }
        }
        .footer-adv-widget-2 {
          display: flex;
          justify-content: center;
        }
        .site-footer .widget-title {
          margin-bottom: 16px;
          font-size: 24px;
          line-height: 32px;
        }
      
        .footer-contact li img {
          top: 4px;
        }
        .footer-contact li {
          font-family: 'Lato', sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
        }
        .footer-adv-widget-3 .footer-contact + p {
          display: none;
        }
        .footer-adv-widget-3 ul + ul, .footer-adv-widget-3 li + li {
          margin-top: 16px;
        }
        [href="mailto:info@llvws.com"], [href="sms: 702-600-9860"] {
          text-decoration: underline;
        }
        .lav-find__map {
          max-width: 800px;
          width: 100%;
          line-height: 0;
          height: 400px;
        }
        .lav-find__map iframe {
          height: 100%;
        }
      </style>

      <div class='lav-find'>
        <div class='lav-find__info'>
          <h4 class='lav-find__title'>How to find us</h4>
          <p class='lav-find__descr lav-desk'>You can find us just 20 miles away from the renowned Las Vegas Strip. Here, the desert, lights, and gambling transform into a tranquil, picturesque getaway with Lake Mead National Park (Hoover Dam) and Valley of Fire State Park right around the corner!</p>
          <ul class='lav-find__list lav-desk'>
          </ul>
        </div>

        <div class='lav-find__map'></div>
      </div>
    `;

  $(".lav-page").insertAdjacentHTML("beforeend", howFindHtml);

  $$(".lav-product__head-icons p:first-child").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      $(".lav-find").scrollIntoView({ block: "center", behavior: "smooth" });
      pushDataLayer("exp_improving_pdp_add_b_c", "How to find us", "Button", "Additional buttons");
    });
  });

  $$(".footer-adv-widget-3 li").forEach((item) => {
    const cloneEl = item.cloneNode(true);
    cloneEl.classList.add("lav-find__item");
    $(".lav-find__list").insertAdjacentElement("beforeend", cloneEl);
  });

  $(".lav-find__map").insertAdjacentElement("beforeend", $(".footer-adv-widget-4 iframe"));

  $$(".footer-adv-widget").forEach((item) => {
    item.classList.remove("ast-col-lg-3", "ast-col-md-3");
    item.classList.add("ast-col-lg-4", "ast-col-md-4");
  });

  $(".footer-adv-widget-3").insertAdjacentHTML(
    "beforeend",
    `
      <style>
      .lav-follow {
        margin-top: -15px;
      }
      .lav-follow__title {
        color: var(--ffffff, #FFF);
        font-family: Lato;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
      }
      .lav-follow__links {
        margin-top: 15px;
      }
      .lav-follow__link {
        display: inline-flex;
        transition: 0.35s;
      }
      .lav-sticky {
        position: fixed;
        z-index: 88;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        padding: 8px 16px;
        background: var(--fafafa, #FAFAFA);
      }
      .lav-sticky__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        border-radius: 100px;
        background: var(--18-aae-2, #18AAE2);
        color: var(--ffffff, #FFF);
        text-align: center;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
      }
      @media(hover: hover) {
        .lav-follow__link:hover {
          opacity: 0.7;
        }
      }
      .lav-follow__link + .lav-follow__link {
        margin-left: 12px;
      }
      @media (max-width: 768px) {
        .lav-sticky {
          display: block;
          transition: 0.35s;
        }
        .lav-sticky_disable {
          opacity: 0;
          pointer-events: none;
        }
        .site-footer {
          margin-bottom: 64px;
        }
        .footer-adv-widget-2 {
          display: block;
        }
        .footer-adv-widget-1 .widget:last-child {
          margin-bottom: 0;
        }
        .footer-contact li {
          font-size: 14px;
        }
        .lav-follow {
          display: flex;
          padding-bottom: 25px;
          margin-top: -5px;
          align-items: center;
        }
        .lav-follow__links {
          margin-top: 0;
          line-height: 0;
          margin-left: 20px;
        }
        .lav-find {
          display: block;
          margin-top: 40px;
          margin-bottom: 64px;
        }
        .lav-find__info {
          margin-right: 0;
          margin-bottom: 16px;
        }
        .lav-find__info .lav-find__title {
          font-size: 20px;
          line-height: 28px;
        }
        .lav-find__map {
          height: 340px;
        }
      }
      .entry-content.clear {
        // display: none!important;
      }
      </style>
      <div class='lav-follow'>
        <div class='lav-follow__title'>Follow us:</div>
        <div class='lav-follow__links'>
          <a target='_blank' href='https://www.facebook.com/lakelasvegaswatersports' class='lav-follow__link'>
            <img src='${exp.dir}/img/logo-fb.svg' />
          </a>
          <a target='_blank' href='https://www.instagram.com/lakelasvegaswatersports/' class='lav-follow__link'>
            <img src='${exp.dir}/img/logo-instagram.svg' />
          </a>
          <a target='_blank' href='https://www.youtube.com/channel/UC6ak3hPg1vhQgnjHWu1cPWg' class='lav-follow__link'>
            <img src='${exp.dir}/img/logo-yt.svg' />
          </a>
        </div>
      </div>
    `
  );
}

function initAccordion() {
  const accordionItems = $$(".accordion_item");
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion_header");
    // const content = item.querySelector('.accordion_content')

    header.addEventListener("click", () => {
      pushDataLayer("exp_improving_pdp_dd_ret", header.innerText.trim(), "Dropdown", "Accordion");
      header.classList.toggle("active");
    });
  });
}

function initSwiper() {
  function parseIdFromUrl(url) {
    var id = null;
    var match = url.match(/\/file\/d\/([^/]+)/);
    if (match && match[1]) {
      id = match[1];
    }
    return id;
  }

  const prTitle = $(".fl-heading-text").innerText.toLowerCase();

  if ($(".fl-slideshow-main-image")) {
    $(".fl-slideshow-main-image").click();
  }
  // #1 Main slider
  setTimeout(() => {
    if ($(".fl-slideshow-main-image")) {
      $(".fl-slideshow-main-image").click();
    }
    isReadyMainSlider = true;
  }, 5000);
  waitFor(
    () => isReadyMainSlider,
    () => {
      const images = productType === "event" ? settings.eventShare.images : product?.images;

      if (images?.length && !prTitle.includes("guided sunset") && !prTitle.includes("neon paddle") && !prTitle.includes("doggie paddle")) {
        for (let src of images) {
          const id = parseIdFromUrl(src);
          const isVert = id.includes("vgFvvU1y") || id.includes("6oUlE4CxcWAJG") || id.includes("11FIoExLh");
          if ((prTitle.includes("country cruise") && id.includes("ovgFvvU1y")) || (prTitle.includes("throwback cruise") && id.includes("ovgFvvU1y")) || (prTitle.includes("sunset session") && id.includes("ovgFvvU1y")) || (prTitle.includes("emo night") && id.includes("ovgFvvU1y")) || (prTitle.includes("after dark neon") && id.includes("ovgFvvU1y"))) {
            continue;
          }

          $(".main_slider .swiper-wrapper").insertAdjacentHTML(
            "beforeend",
            `
            <div class="swiper-slide ${isVert ? "lav-slide-vert" : ""}">
              <img src="https://drive.google.com/uc?export=view&id=${id}" loading="lazy">
              <div class="swiper-lazy-preloader"></div>
            </div>
          `
          );

          $(".main_slider_sync .swiper-wrapper").insertAdjacentHTML(
            "beforeend",
            `
            <div class="swiper-slide">
              <img src="https://drive.google.com/uc?export=view&id=${id}" loading="lazy">
              <div class="swiper-lazy-preloader"></div>
            </div>
          `
          );
        }
      }

      $("#content").style.display = "none";
      const swiperMainSync = new Swiper(".main_slider_sync", {
        slidesPerView: 6,
        slideToClickedSlide: true,
        spaceBetween: 8,
        on: {
          init: () => {
            $$(".main_slider_sync .swiper-slide").forEach((slide) => {
              slide.addEventListener("click", () => {
                pushDataLayer("exp_improving_pdp_add_img_fs", "Additional image", "Image", "First screen");
              });
            });
          },
        },
      });

      let diff = 0;

      const swiperMain = new Swiper(".main_slider", {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return `<img src="${exp.dir}/img/24_picture.svg"><span class="${currentClass}"></span><span>/</span><span class="${totalClass}"></span>`;
          },
        },
        touchEventsTarget: "wrapper",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiperMainSync,
        },
        on: {
          init: () => {
            $(".main_slider .swiper-button-next").addEventListener("click", () => {
              pushDataLayer("exp_improving_pdp_img_fs", "right arrow", "Image", "First screen");
            });

            $(".main_slider .swiper-button-prev").addEventListener("click", () => {
              pushDataLayer("exp_improving_pdp_img_fs", "left arrow", "Image", "First screen");
            });
          },
          slideChange: (swiper) => {
            if (diff === swiper.touches.diff) return false;
            diff = swiper.touches.diff;
            pushDataLayer("exp_improving_pdp_img_fs", `swipe ${diff > 0 ? "left" : "right"}`, "Image", "First screen");
          },
        },
      });
    }
  );

  if (productType === "rental") {
    for (let item of settings.rentalAlsoLike.filter((p) => !prTitle.includes(p.name.toLowerCase()))) {
      let slide = `
          <a href="${item.url}" class="swiper-slide">
            <img src="${item.src}" loading="lazy">
            <div class="swiper-lazy-preloader"></div>
            <h6>${item.alias || item.name}</h6>
            <p>
              ${item.caption}
            </p>
          </a>
        `;

      $(".may_like .swiper-wrapper").insertAdjacentHTML("beforeend", slide);
    }
  } else {
    for (let item of settings.eventShare.alsoLike.filter((p) => !prTitle.includes(p.name.toLowerCase()))) {
      let slide = `
          <a href="${item.url}" class="swiper-slide">
            <img src="${item.src}" loading="lazy">
            <div class="swiper-lazy-preloader"></div>
            <h6>${item.alias || item.name}</h6>
            <p>
              ${item.caption}
            </p>
          </a>
        `;

      $(".may_like .swiper-wrapper").insertAdjacentHTML("beforeend", slide);
    }
  }

  // #2 You may also like slider
  const swiperMay = new Swiper(".may_like .swiper", {
    slidesPerView: 1.5,
    // slideToClickedSlide: true,
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      dynamicMainBullets: 2,
      clickable: true,
    },
    breakpoints: {
      1100: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
        dynamicBullets: false,
        spaceBetween: 20,
      },
    },
    on: {
      slideChange: (swiper) => {
        pushDataLayer("exp_improving_pdp_ymal_hs", "You may also like", "horizontal scroll", "You may also like");
      },
      reachEnd: function () {
        this.slidesEl.closest(".similar_style").classList.remove("similar_style_after");
      },
    },
  });

  let reviews = productType === "event" ? settings.eventShare.reviews : product?.reviews;

  if (prTitle.includes("guided sunset") || prTitle.includes("neon paddle") || prTitle.includes("doggie paddle")) {
    reviews = settings.eventShare.reviewsPaddle;
  }

  if (!product || (!reviews?.length && productType === "event")) {
    $(".stories").remove();
  } else {
    if (!reviews?.length) {
      reviews = settings.rental
        .filter((p) => p.reviews?.length)
        .map((p) => {
          if (p.name === "Pink Electric") {
            return p.reviews[1];
          }
          return p.reviews[0];
        });
    }
    $(".lav-loader").addEventListener("click", function () {
      this.remove();
      pushDataLayer("exp_improving_pdp_rev_load", "Load more", "Button", "Be inspired by our customers' stories");
      $(".stories").classList.add("stories_revealed");
    });

    for (let review of reviews) {
      const el = document.createElement("div");
      el.classList.add("swiper-slide");
      el.innerHTML = `
          <div class="service">
              <img src="${exp.dir}/img/${review.type}.svg">
            </div>
            <p class="name">${review.name}</p>
            <p class="verified">
              <img src="${exp.dir}/img/check_green.svg">
              <span>Verified customer</span>
            </p>
            <div class="read_more_block">
              <p class="preview_text">
                ${review.text}
              </p>

              <span class="read_more">Read more ></span>
            </div>
        `;

      el.querySelector(".read_more").addEventListener("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.remove();
        pushDataLayer("exp_improving_pdp_rev_read", "Review", "Link", "Be inspired by our customers' stories");
        el.querySelector(".preview_text").classList.add("active");
        if (swiperStories) {
          swiperStories.updateAutoHeight(500);
        }
      });

      $(".stories .swiper-wrapper").insertAdjacentElement("beforeend", el);
    }
    let swiperStories;

    // #3 Read inspired story
    if (window.innerWidth > 768) {
      swiperStories = new Swiper(".stories .swiper", {
        slidesPerView: 1.5,
        // slideToClickedSlide: true,
        autoHeight: true,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          dynamicBullets: true,
          dynamicMainBullets: 2,
          clickable: true,
        },
        breakpoints: {
          1250: {
            slidesPerView: 3.5,
          },
          992: {
            slidesPerView: 2.5,
          },
        },
        on: {
          init: function () {
            for (let item of $$(".stories .swiper .preview_text")) {
              if (item.scrollHeight <= 150) {
                item.nextElementSibling.innerHTML = "&nbsp";
                item.nextElementSibling.classList.add("disable");
              }
            }
          },
          slideChange: function () {
            pushDataLayer("exp_improving_pdp_reviews_types_hs", "Be inspired by our customers' stories", "horizontal scroll", "Be inspired by our customers' stories");
          },
          resize: function () {
            if (window.innerWidth < 768) {
              swiperStories.destroy();
              swiperStories.disable();
            }
          },
          reachEnd: function () {
            this.slidesEl.closest(".similar_style").classList.remove("similar_style_after");
          },
        },
      });
    } else {
      for (let item of $$(".stories .swiper .preview_text")) {
        if (item.scrollHeight <= 150) {
          item.classList.add("active");
          item.nextElementSibling.classList.add("disable");
        }
      }
    }
  }

  if ($(".boat_available")) {
    const swiperBoats = new Swiper(".swiper.boats", {
      slidesPerView: 1.07,
      slideToClickedSlide: true,
      spaceBetween: 4,
      navigation: false,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      },
      on: {
        slideChange: function () {
          pushDataLayer("exp_improving_pdp_boat_types_hs", "Additional options", "horizontal scroll", "Boat types available");
        },
      },
    });
  }
}

function initPopup() {
  const popup = $(".popup");

  $(".popup-trigger").addEventListener("click", () => {
    pushDataLayer("exp_improving_pdp_get", "Get your 10% off", "Button", "Under booking");
    popup.showModal();
  });

  $(".popup__close").addEventListener("click", () => {
    popup.close();
    pushDataLayer("exp_improving_pdp_pp_s_c", "Close - " + $(".popup").dataset.step, "Button", "Popup PDP- Checkout/Custom booking form");
  });

  let isInputFire = false;

  $(".popup__input").addEventListener("input", () => {
    $(".popup__input").classList.remove("error");
    if (!isInputFire) {
      isInputFire = true;
      pushDataLayer("exp_improving_pdp_pp_s1_email", "Email - Step 1", "Input", "Popup PDP- Checkout/Custom booking form");
    }
  });

  // $('.popup__input').addEventListener('click', (e) => {
  //   if (
  //     $('.popup').dataset.step === '2' &&
  //     !e.target.closest('.popup__copy')
  //   ) {
  //     $('.popup__copy').click();
  //   }
  // });

  $(".popup__btn").addEventListener("click", () => {
    popup.close();
    pushDataLayer("exp_improving_pdp_pp_s1_b", "Continue shopping", "Button", "Popup PDP- Checkout/Custom booking form");
  });

  popup.addEventListener("click", (e) => {
    const dialogDimensions = popup.getBoundingClientRect();
    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
      popup.close();
    }
  });

  function validateEmail(email) {
    // Regular expression pattern for email validation
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return pattern.test(email);
  }
}

$(".popup__copy-icon")?.addEventListener("click", () => {
  pushDataLayer("exp_im_pdp_b_bnehp_cc", "Copy code", "Button", "Book now enjoy HP");
  navigator.clipboard.writeText("BOOK10");
  document.querySelector(".copied")?.remove();
  document.querySelector(".code_wrapp").insertAdjacentHTML(
    "beforeend",
    `<p class="copied">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="8" fill="#18AAE2"/>
<path d="M15 10L11.5 14.5L9 12.5" stroke="white"/>
</svg>
                <span>Code is copied</span>
              </p>`
  );
  setTimeout(() => {
    document.querySelectorAll(".copied")?.forEach((el) => {
      el.remove();
    });
  }, 3000);
});

function addStyles() {
  const style = document.createElement("style");
  style.innerHTML = styles;
  document.head.appendChild(style);
}

function addSwiper() {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
  script.async = false;
  document.head.appendChild(script);

  const style = document.createElement("link");
  style.href = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
  style.rel = "stylesheet";
  document.head.appendChild(style);
}
// *** Utils *** //

// Waiting for loading by condition
function waitFor(condition, cb, ms = 1000) {
  if (condition()) {
    if (typeof cb == "function") cb();
    return;
  }

  let interval = setInterval(function () {
    if (condition()) {
      clearInterval(interval);
      if (typeof cb == "function") cb();
    }
  }, ms);
}

// Alalytic 4
function pushDataLayer(name = "", desc = "", type = "", loc = "") {
  try {
    var objData = {
      event: "event-to-ga4",
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.log("**exp** eventFire", objData);
    if (!exp.debug) {
      dataLayer.push(objData);
    }
  } catch (e) {
    console.log("**exp** Event Error:", e);
  }
}

// Mutation Observer
function initObserver(cb) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        cb(node);
      }
    }
  });

  waitFor(
    () => document.body,
    () => {
      observer.observe(document.body, { childList: true, subtree: true });
    },
    100
  );
}

// Intersection Observer
function observerView(observeEl) {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-20%",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        if (target.classList.contains("stories")) {
          isElementInViewport(target, ["exp_improving_pdp_rev_v", "Review", "Visibility", "Be inspired by our customers' stories"]);
        }

        if (target.classList.contains("may_like")) {
          isElementInViewport(target, ["exp_improving_pdp_ymal_v", "You may also like", "Visibility", "You may also like"]);
        }

        if (target.classList.contains("lav-cancel__text")) {
          isElementInViewport(target, ["exp_im_pdp_v_bnehp_fc", "Free cancelation", "Visibility", "Book now enjoy HP"]);
        }

        if (target.classList.contains("lav-advisor")) {
          isElementInViewport(target, ["exp_improving_pdp_trip_v", "Tripadvisor", "Visibility", "First screen"]);
        }

        if (target.classList.contains("lav-product__head-icons")) {
          isElementInViewport(target, ["exp_improving_pdp_add_b_v", "Additional buttons", "Visibility", "Additional buttons"]);
        }

        if (target.classList.contains("looking")) {
          isElementInViewport(target, ["exp_im_pdp_v_bnehp_t", "Tips", "Visibility", "Book now enjoy HP"]);
        }

        if (target.classList.contains("boat_available")) {
          isElementInViewport(target, ["exp_improving_pdp_boat_types", "Additional options", "Visibility", "Boat types available"]);
        }

        if (target.classList.contains("book_now_wrapp")) {
          isElementInViewport(target, ["exp_im_pdp_v_bnehp_cc", "Copy code", "Visibility", "Book now enjoy HP"]);
        }
      }
    });
  }, observerOptions);

  if (observeEl) {
    observer.observe(observeEl);
  } else {
    for (let el of Array.from(document.querySelectorAll(".lav-observe"))) {
      observer.observe(el);
    }
  }

  function isElementInViewport(el, event, timeout = 5) {
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top + rect.height * 0.3 < windowHeight && rect.bottom > rect.height * 0.3) {
        observer.unobserve(el);
        if (!el.classList.contains("in-view")) {
          pushDataLayer(...event);
          el.classList.add("in-view");
        }
      }
    }, timeout * 1000);
  }
}

//Clarity
if (!exp.debug && exp.clarity.enable) {
  waitFor(
    () => typeof clarity == "function",
    () => {
      clarity(...exp.clarity.params);
    }
  );
}

function $(selector, context = document) {
  return context.querySelector(selector);
}

function $$(selector, context = document) {
  return context.querySelectorAll(selector);
}
// })();
