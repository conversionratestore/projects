(function() {
  "use strict";
  const O = ({ name: o, dev: n }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, k = (o) => document.querySelectorAll(o), e = (o) => document.querySelector(o), T = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="12"
  viewBox="0 0 16 12"
  fill="none"
>
  <path
    d="M15 6H1M1 6L6 11M1 6L6 1"
    stroke="#161718"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), L = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="24"
  viewBox="0 0 18 24"
  fill="none"
>
  <path
    d="M16.5019 9.94033H15.535H15.5348V6.53486C15.5347 2.93159 12.6032 0 8.99985 0C5.39668 0 2.46509 2.93159 2.46509 6.53491V9.94038H1.49805C0.733594 9.94038 0.11377 10.5601 0.11377 11.3246V12.1667V21.7737V22.6157C0.11377 23.3803 0.733545 24 1.49805 24H8.9999H16.5019C17.2663 24 17.886 23.3803 17.886 22.6157V21.7737V12.1667V11.3246C17.886 10.5601 17.2663 9.94033 16.5019 9.94033ZM10.4733 19.8559H7.52656L8.05395 17.3428C7.56074 17.029 7.2313 16.4809 7.2313 15.853C7.2313 14.8763 8.02319 14.0845 8.9999 14.0845C9.97666 14.0845 10.7684 14.8763 10.7684 15.853C10.7684 16.4809 10.4391 17.029 9.9459 17.3427L10.4733 19.8559ZM13.203 9.94033H8.9999H4.79702H4.79678V6.53486C4.79678 4.21704 6.68218 2.33169 8.9999 2.33169C11.3177 2.33169 13.203 4.21709 13.203 6.53486V9.94033Z"
    fill="white"
  />
</svg>`
  ), D = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="10"
  viewBox="0 0 12 10"
  fill="none"
>
  <path d="M11 1L5 8L1 4" stroke="white" stroke-width="2" />
</svg>`
  ), z = (
    /* HTML */
    '<h3 class="crs-step-title">Provide your personal information</h3>'
  ), B = (
    /* HTML */
    '<h3 class="crs-step-title">Provide your billing details</h3>'
  ), P = (
    /* HTML */
    `
  <div class="nextStepBtn">
    <button>${L} Secure Checkout</button>
  </div>
`
  ), E = (
    /* HTML */
    `
  <div class="submitBtn">
    <button>${L} Submit Purchase</button>
  </div>
`
  ), I = (
    /* HTML */
    `<button class="crs-back-btn">${T} Back</button>`
  ), M = (
    /* HTML */
    ` <div class="crs-sticky-cta-container">
  <div class="crs-order-details">
    <span class="crs-order-details__text">Total:</span> <span class="crs-order-details__sale">67% off</span>
    <span class="crs-order-details__price-container">
      <span class="crs-order-details__price-amount">$396</span>
      <span class="crs-order-details__currency">usd</span>
      <span class="crs-order-details__payment-info">
        <span class="crs-order-details__monthly-payments">x 3 monthly payments</span>
        <span class="crs-order-details__one-time-price">$996 one-time price</span>
      </span>
    </span>
  </div>
  <div class="crs-order-button"></div>
  <div class="crs-guarantee"><span>30</span>- day action-based money-back guarantee</div>
</div>`
  ), A = (
    /* HTML */
    `
  <div class="crs-custom-options">
    <div class="crs-custom-options__title">Choose payment plan</div>
    <div class="crs-custom-options__groups">
      <div class="crs-custom-options__group">
        <input id="crs-monthly" type="radio" name="crs-payment" value="monthly" checked />
        <label for="crs-monthly"><b>$396 x</b> 3 monthly payments</label>
      </div>
      <div class="crs-custom-options__group">
        <input id="crs-onetime" type="radio" name="crs-payment" value="onetime" />
        <label for="crs-onetime"><b>$996</b> one-time payment </label>
      </div>
    </div>
  </div>
`
  ), j = (
    /* HTML */
    `
  <div class="crs-order-summary">
    <h3 class="crs-order-summary__title">Order summary</h3>
    <ul class="crs-order-summary__list">
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Drop Servicing Partner Program Course</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$800</span>$269</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Live Video Coaching Calls (3x every week)</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$600</span>$199</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Private Drop Servicing Community</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$150</span>$49</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Done For You Partnership</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$900</span>$299</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Drop Servicing AI Software</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$550</span>$180</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"
          ><b>Bonus 1</b> - $200 Cash Back <b>Get it by posting your first sale</b></span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$200</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 2</b> - Everything Inside My Business</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$300</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 3</b> - Drop Servicing Blueprint 3.0</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$240</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 4</b> - 200+ ‘Done For You’ Templates</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$200</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 5</b> - ‘Done For You’ Website Template</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$160</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 6</b> - Quality Stamp of Approval</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$100</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 7</b> - 10 Highest Demand Services</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$80</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 8</b> - Extra Full Membership</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$3000</span>$0</span>
      </li>
    </ul>
  </div>
`
  ), V = (
    /* HTML */
    `
  <ul class="crs-comments">
    <li class="crs-comment">
      <div class="crs-comment__user">
        <img
          src="https://start.dropservicing.com/hosted/images/c9/d7c03783bd4954b348c21c54c39538/73x73-3-.png"
          alt="Michelle Roe avatar"
        />
        <span class="crs-comment__username">Michelle Roe</span>
      </div>
      <div class="crs-comments__title">The best course to build a successful online business!</div>
      <div class="crs-comments__text">
        His course is so complete, detailed, and clearly explained that it makes the process of building a professional
        and successful online business easy. The weekly live coaching and the Facebook community give you all the
        support and motivation to go through the course and build and grow your business. Thank you, Dylan!
      </div>
      <div class="crs-comments__rating">⭐ ⭐ ⭐ ⭐ ⭐</div>
    </li>
  </ul>
`
  ), R = `.crsTargetSection [data-col='left'] .elHeadlineWrapper,
.order2StepHeader,
.order2stepbutton,
.order2ButtonSubText,
.goBacktoStepOneOrderBump,
.crsTargetSection [data-col='right'] :is(.elImageWrapper, .elHeadlineWrapper, .elBulletList, .elFeatureImage),
.elOrder2Step + .elImageWrapper,
.crs-order-summary + .col-inner {
  display: none !important;
}

.container:has(.crsTargetSection) {
  background: 0 !important;
}

.crsTargetSection {
  display: flex;
  justify-content: space-between;
  width: 100% !important;
  margin: 0 !important;
  background: none;
}

.crsTargetSection::before,
.crsTargetSection::after {
  position: absolute;
}
.crsTargetSection [data-col='left'] {
  width: 60.3% !important;
  max-width: 662px !important;
  padding: 0;
}

.crsTargetSection [data-col='right'] {
  width: 40.7% !important;
  max-width: 407px !important;
  padding: 0;
  padding-bottom: 26px;
  border: 1px solid #ddd;
}

.crsTargetSection [data-col='left'] > .col-inner {
  padding: 0 !important;
}

.o2step_step1,
.o2step_step2 {
  border: 1px solid #ddd;
  padding: 22px 30px 40px !important;
  margin-bottom: 30px;
}
@media screen and (max-width: 768px) {
  .crsTargetSection {
    flex-direction: column;
  }

  .crsTargetSection [data-col='left'] {
    width: 100% !important;
  }

  .crsTargetSection [data-col='right'] {
    width: 100% !important;
  }
}

.elOrder2Step {
  border: none;
}
.crsTargetSection [data-col='left'] .bgCover:first-of-type {
  background-color: #fff !important;
  padding: 22px 30px;
}

.crsTargetSection [data-col='left'] .col-inner {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.crs-step-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.crs-back-btn {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border: 0;
  background: 0;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

:is(.nextStepBtn, .submitBtn) button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 62px;
  border-radius: 3px;
  border: none;
  background: #17aa1c;
  padding: 10px 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
}

.o2step_step1 .formInstructionNote {
  display: none;
}

.o2step_step1 p:not(.formInstructionNote) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 23px;
}

:is(.o2step_step1, .o2step_step2) :is(input, select) {
  margin: 0 !important;
  height: 50px;
}

:is(.o2step_step1, .o2step_step2) .labelUnderInput {
  position: static;
}

.o2step_step1 input[name='name'] {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.o2step_step1 input[name='name'] + .labelUnderInput {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.o2step_step1 input[name='email'] {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.o2step_step1 input[name='email'] + .labelUnderInput {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

@media screen and (max-width: 768px) {
  .o2step_step1 p:not(.formInstructionNote) {
    grid-template-columns: 1fr;
  }

  .o2step_step1 input[name='name'] {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .o2step_step1 input[name='name'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .o2step_step1 input[name='email'] {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .o2step_step1 input[name='email'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}

.elOS1Shipping {
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  gap: 0 23px;
}
.elS1ShippingWrap {
  display: none;
}
.elOS1Shipping [name='shipping_address'] {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.elOS1Shipping [name='shipping_address'] + .labelUnderInput {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.elOS1Shipping [name='shipping_city'] {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}

.elOS1Shipping [name='shipping_city'] + .labelUnderInput {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

.elOS1Shipping [name='shipping_country'] {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
}

.elOS1Shipping [name='shipping_country'] + .labelUnderInput {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.elOS1Shipping .elStateDiv {
  grid-column: 2 / 3;
  grid-row: 3 / 5;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}

.elOS1Shipping .elZipCodeDiv {
  grid-column: 3 / 4;
  grid-row: 3 / 5;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .elOS1Shipping {
    grid-template-columns: 1fr;
  }

  .elOS1Shipping [name='shipping_address'] {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .elOS1Shipping [name='shipping_address'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .elOS1Shipping [name='shipping_city'] {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .elOS1Shipping [name='shipping_city'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .elOS1Shipping [name='shipping_country'] {
    grid-column: 1 / 2;
    grid-row: 6 / 7;
  }

  .elOS1Shipping [name='shipping_country'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }

  .elOS1Shipping .elStateDiv {
    grid-column: 1 / 2;
    grid-row: 8 / 9;
  }

  .elOS1Shipping .elZipCodeDiv {
    grid-column: 1 / 2;
    grid-row: 10 / 11;
  }
}
.elOrderProductOptions {
  display: flex;
  padding-inline: 30px;
}

.crs-comments {
  display: grid;
  list-style-type: none;
  padding: 0;
}
.crs-comment {
  position: relative;
  padding: 16px 30px 50px;
  overflow: hidden;
  background-color: white;
  z-index: 0;
}

.crs-comment::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="662" height="238" viewBox="0 0 662 238" fill="none"><path d="M0 9.99999C0 4.47715 4.47715 0 10 0H652C657.523 0 662 4.47715 662 10V202C662 207.523 657.523 212 652 212H151.5H65.75H45.3102C34.1919 212 23.5752 216.628 16.0071 224.773L5.19772 236.406C3.34209 238.403 0 237.09 0 234.364V9.99999Z" fill="%23F2EBFC" fill-opacity="0.8"/></svg>');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top;
  z-index: -1;
}

@media screen and (max-width: 768px) {
  .crs-comment::after {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="343" height="328" viewBox="0 0 343 328" fill="none"><path d="M0 10C0 4.47716 4.47715 0 10 0H333C338.523 0 343 4.47715 343 10V292C343 297.523 338.523 302 333 302H151.5H65.75H45.3102C34.1919 302 23.5752 306.628 16.0071 314.773L5.19772 326.406C3.34209 328.403 0 327.09 0 324.364V10Z" fill="white"/></svg>');
  }
}

.crs-comment__user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.crs-comment__user {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2f2f2f;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
.crs-comment__user img {
  width: 41px;
  height: 41px;
  border-radius: 50%;
}
.crs-comments__title {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
}
.crs-comments__text {
  margin-top: 9px;
  color: #2f2f2f;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
}

.crs-comments__rating {
  margin-top: 9px;
}

.crs-order-summary {
  background-color: #fff;
  padding: 22px 30px;
}

.crs-order-summary__title {
  color: var(--Black, #161718);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.crs-order-summary__list {
  display: grid;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.crs-order-summary__item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.crs-order-summary__text {
  max-width: 260px;
}
.crs-order-summary__text b {
  font-weight: 700;
}

.crs-order-summary__price {
  display: flex;
  gap: 6px;
  color: #161718;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}

.crs-order-summary__old-price {
  color: #8a8a8b;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: line-through;
}

.crs-custom-options {
  padding: 20px 30px;
  padding-top: 0;
}
.crs-custom-options__title {
  border-top: 1px solid #ddd;
  padding-top: 20px;
  color: var(--Black, #161718);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.crs-custom-options__groups {
  margin-top: 20px;
  display: grid;
  gap: 14px;
}

.crs-custom-options__group {
  display: flex;
  align-items: center;
  gap: 11px;
  height: 24px;
}
.crs-custom-options__group label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
.crs-custom-options__group label b {
  font-weight: 700;
}

.crs-sticky-cta-container {
  position: sticky;
  top: 0;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding-inline: 30px;
}

.crs-sticky-cta-container--fixed {
  position: fixed;
  top: auto;
  bottom: 0;
  right: 108px;
  width: 407px;
  height: max-content;
  z-index: 10;
  padding: 12px 16px;
  background-color: #fff;
  padding-inline: 30px;
  box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.07);
}

@media screen and (max-width: 768px) {
  .crs-sticky-cta-container--fixed {
    width: 100% !important;
    left: 0 !important;
    padding-inline: 16px;
  }
}
.crs-order-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.crs-order-details__text {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-right: 37px;
}
.crs-order-details__price-container {
  display: flex;
  align-items: center;
}
.crs-order-details__sale {
  border-radius: 34px;
  background: #ea4458;
  padding: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
}

.crs-order-details__price-amount {
  font-size: 18px;
  font-weight: 800;
  line-height: 18px;
}

.crs-order-details__currency {
  font-size: 12px;
  font-weight: 800;
  line-height: 18px;
}

.crs-order-details__payment-info {
  display: inline-flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 10px;
}

.crs-order-details__monthly-payments {
  font-weight: 700;
}

.crs-order-details__one-time-price {
  font-weight: 500;
  color: #8a8a8b;
}

.crs-input-error {
  position: relative;
  border: 1px solid #fda29b !important;
  background: var(--White, #fff);
  z-index: 1; /* Додаємо z-index */
}

.crs-input-error::before {
  position: absolute;
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  background-color: white;
  padding: 2px 5px;
  color: red;
  padding: 2px 5px;
  top: 100%;
  left: 0;
  white-space: nowrap;
  z-index: 2; /* Додаємо z-index */
  border: 1px solid red; /* Додаємо рамку для видимості */
}

.email_suggestion + label {
  display: none;
}

.elOrder2Step label {
  margin-top: 25px;
}

[data-title='cf-order-summary'] {
  display: none !important;
}

.elCreditCardForm {
  background: none !important;
  border: none !important;
  padding: 0 !important;
}

.crs-guarantee {
  margin-top: 14px;
  color: var(--Black, #161718);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
}
.crs-guarantee span {
  width: 30px;
  height: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none"><path d="M25.1043 4.06818C22.6011 1.55228 19.2197 0.147152 15.7001 0.160295C13.9288 0.152143 12.1739 0.504229 10.5385 1.19584C8.90308 1.88745 7.42018 2.90463 6.17702 4.18754C6.11165 4.25496 6.06008 4.3349 6.02529 4.42272C5.9905 4.51055 5.97318 4.60452 5.97433 4.69919C5.97549 4.79387 5.9951 4.88737 6.03202 4.97429C6.06895 5.06121 6.12246 5.13982 6.18945 5.20558C6.32702 5.33756 6.50965 5.41003 6.69878 5.40767C6.8879 5.40531 7.06872 5.32832 7.20307 5.19294C8.31272 4.04905 9.63599 3.14218 11.0951 2.52559C12.5543 1.90899 14.1199 1.59512 15.7001 1.60241C22.2458 1.59679 27.5679 6.93555 27.5679 13.5002C27.5679 20.0648 22.2458 25.4036 15.7001 25.4036C9.15435 25.4036 3.83217 20.0648 3.83217 13.5002V13.3499L5.01427 14.5351C5.14956 14.6701 5.33153 14.7457 5.52107 14.7457C5.71062 14.7457 5.89259 14.6701 6.02788 14.5351C6.09436 14.4688 6.14716 14.3897 6.18321 14.3024C6.21926 14.2151 6.23783 14.1214 6.23783 14.0268C6.23783 13.9321 6.21926 13.8384 6.18321 13.7511C6.14716 13.6638 6.09436 13.5847 6.02788 13.5184L3.62917 11.106C3.49388 10.971 3.31191 10.8954 3.12236 10.8954C2.93282 10.8954 2.75085 10.971 2.61556 11.106L0.209943 13.5184C0.14347 13.5847 0.0906646 13.6638 0.054616 13.7511C0.0185675 13.8384 0 13.9321 0 14.0268C0 14.1214 0.0185675 14.2151 0.054616 14.3024C0.0906646 14.3897 0.14347 14.4688 0.209943 14.5351C0.490276 14.8159 0.944608 14.8159 1.22494 14.5351L2.40565 13.3499V13.5002C2.40333 15.2572 2.74694 16.997 3.41624 18.6169C4.08553 20.2368 5.06697 21.704 6.30269 22.9322C8.8059 25.4481 12.1873 26.8532 15.707 26.8401C19.256 26.8401 22.5979 25.4513 25.1098 22.9322C26.3446 21.7036 27.3249 20.2361 27.993 18.6162C28.6611 16.9963 29.0035 15.2568 29 13.5002C29.0025 11.7432 28.6591 10.0035 27.99 8.38366C27.321 6.76377 26.3398 5.29645 25.1043 4.06818Z" fill="%238F53E3"/></svg>');
  background-repeat: no-repeat;
  background-position: 0 0;
  color: #8f53e3;
  font-size: 13.82px;
  font-style: normal;
  font-weight: 700;
  line-height: 27.641px;
}
`;
  class F {
    constructor() {
      this.init();
    }
    init() {
      this.initStyles(), this.changes(), this.observeInputs();
    }
    changes() {
      var H;
      const n = e(".row:has(.order2stepbuttonOrder)");
      e(".elOrder2Step");
      const r = e(".o2step_step1"), c = e(".o2step_step2"), p = e(".order2stepbuttonOrder"), t = n == null ? void 0 : n.querySelector('[data-col="right"]'), d = n == null ? void 0 : n.querySelector('[data-col="left"]'), m = e(".elOS1Shipping"), b = e(".elOrderProductOptions");
      let u, g;
      if (!r || !c)
        return;
      if (n && n.classList.add("crsTargetSection"), b) {
        b.style.display = "none";
        const a = b.querySelector(".elOrderProductOptinItem"), h = b.querySelectorAll(".elOrderProductOptinProducts");
        a && (a.style.display = "none"), t == null || t.insertAdjacentHTML("beforeend", A), k(".crs-custom-options input").forEach((l) => {
          l.addEventListener("input", (v) => {
            var y, s, i;
            ((y = v.target) == null ? void 0 : y.value) === "monthly" ? (console.log(
              "Monthly payment selected",
              e('input[data-product="Partner Program (3 monthly payments)"]')
            ), (s = e('input[data-product-name="Partner Program (3 monthly payments)"]')) == null || s.click()) : (console.log("One-time payment selected", e('input[data-product="Partner Program"]')), (i = e('input[data-product-name="Partner Program"]')) == null || i.click());
          });
        }), h.forEach((l) => {
          var x, y;
          (x = l.textContent) != null && x.includes("3 monthly payments") && (l.after(l.previousElementSibling), (y = l.querySelector("input")) == null || y.click());
        });
      }
      if (p) {
        p.style.display = "none", t == null || t.insertAdjacentHTML("beforeend", M);
        const a = e(".crs-sticky-cta-container"), h = e(".crs-sticky-cta-container .crs-order-button");
        if (h == null || h.insertAdjacentHTML("beforeend", P), h == null || h.insertAdjacentHTML("beforeend", E), !a)
          return;
        const _ = document.createElement("div");
        _.style.position = "absolute", _.style.top = "0", _.style.width = "100%", _.style.height = "1px", (H = a.parentNode) == null || H.insertBefore(_, a);
        let l = !1, v = 0, x = 0;
        new IntersectionObserver(
          (s) => {
            s.forEach((i) => {
              const w = a.getBoundingClientRect();
              console.log(i.isIntersecting, i.intersectionRect.top > 0, !l), i.isIntersecting && i.intersectionRect.top > 0 && !l ? (v = window.innerWidth - w.right, x = w.width, a.classList.add("crs-sticky-cta-container--fixed"), a.style.right = `${v}px`, a.style.width = `${x}px`, l = !0) : (a.classList.remove("crs-sticky-cta-container--fixed"), a.style.right = "", a.style.width = "", l = !1);
            });
          },
          {
            root: null,
            threshold: 0
          }
        ).observe(_), u = e(".nextStepBtn"), g = e(".submitBtn"), u == null || u.addEventListener("click", () => {
          const s = e('.o2step_step1 input[name="name"]'), i = e('.o2step_step1 input[name="email"]');
          if (console.log(s), !s || !i)
            return;
          const w = s == null ? void 0 : s.value, C = i == null ? void 0 : i.value;
          let S = !0;
          !w || w.trim() === "" ? (s.classList.add("crs-input-error"), console.log("Invalid name"), S = !1) : s.classList.remove("crs-input-error");
          const Y = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          !C || C.trim() === "" || !Y.test(C) ? (console.log("Invalid email"), i.classList.add("crs-input-error"), S = !1) : i.classList.remove("crs-input-error"), S && (r.style.display = "none", c.style.display = "block", g && (g.style.display = ""), u && (u.style.display = "none"));
        }), g && (g.style.display = "none", g.addEventListener("click", () => {
          console.log("Custom order button clicked");
          const s = p.querySelector("a");
          s == null || s.click();
        }));
      }
      m && c.insertAdjacentElement("afterbegin", m), r.insertAdjacentHTML("afterbegin", z), c.insertAdjacentHTML("afterbegin", B), c.insertAdjacentHTML("afterbegin", I), d == null || d.insertAdjacentHTML("beforeend", V), t == null || t.insertAdjacentHTML("afterbegin", j);
      const $ = e(".crs-back-btn");
      $ && $.addEventListener("click", () => {
        r.style.display = "block", c.style.display = "none", g && (g.style.display = "none"), u && (u.style.display = "block");
      });
    }
    initStyles() {
      document.head.insertAdjacentHTML("beforeend", `<style>${R}</style>`);
    }
    observeInputs() {
      const n = document.querySelectorAll("input, select"), r = (p) => {
        p.forEach((t) => {
          if (t.type === "attributes" && t.attributeName === "style") {
            const d = t.target, m = d.style;
            m.borderColor === "rgb(185, 21, 23)" && m.borderWidth === "3px" && (d.classList.add("crs-input-error"), document.createElement("div").classList.add("input-wrapper"));
          }
        });
      }, c = new MutationObserver(r);
      n.forEach((p) => {
        c.observe(p, { attributes: !0, attributeFilter: ["style"] });
      });
    }
  }
  const U = `.crs-header {
  display: flex;
  justify-content: space-between;
}
.crs-header .elHeadlineWrapper {
  display: flex;
  align-items: center;
  font-size: 14px !important;
}
.crs-header__guarantee {
  display: flex;
  align-items: center;
  color: #fff;
  gap: 9px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-header__guarantee  span {
  width: 30px;
  height: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none"><path d="M25.1043 4.06818C22.6011 1.55228 19.2197 0.147152 15.7001 0.160295C13.9288 0.152143 12.1739 0.504229 10.5385 1.19584C8.90308 1.88745 7.42018 2.90463 6.17702 4.18754C6.11165 4.25496 6.06008 4.3349 6.02529 4.42272C5.9905 4.51055 5.97318 4.60452 5.97433 4.69919C5.97549 4.79387 5.9951 4.88737 6.03202 4.97429C6.06895 5.06121 6.12246 5.13982 6.18945 5.20558C6.32702 5.33756 6.50965 5.41003 6.69878 5.40767C6.8879 5.40531 7.06872 5.32832 7.20307 5.19294C8.31272 4.04905 9.63599 3.14218 11.0951 2.52559C12.5543 1.90899 14.1199 1.59512 15.7001 1.60241C22.2458 1.59679 27.5679 6.93555 27.5679 13.5002C27.5679 20.0648 22.2458 25.4036 15.7001 25.4036C9.15435 25.4036 3.83217 20.0648 3.83217 13.5002V13.3499L5.01427 14.5351C5.14956 14.6701 5.33153 14.7457 5.52107 14.7457C5.71062 14.7457 5.89259 14.6701 6.02788 14.5351C6.09436 14.4688 6.14716 14.3897 6.18321 14.3024C6.21926 14.2151 6.23783 14.1214 6.23783 14.0268C6.23783 13.9321 6.21926 13.8384 6.18321 13.7511C6.14716 13.6638 6.09436 13.5847 6.02788 13.5184L3.62917 11.106C3.49388 10.971 3.31191 10.8954 3.12236 10.8954C2.93282 10.8954 2.75085 10.971 2.61556 11.106L0.209943 13.5184C0.14347 13.5847 0.0906646 13.6638 0.054616 13.7511C0.0185675 13.8384 0 13.9321 0 14.0268C0 14.1214 0.0185675 14.2151 0.054616 14.3024C0.0906646 14.3897 0.14347 14.4688 0.209943 14.5351C0.490276 14.8159 0.944608 14.8159 1.22494 14.5351L2.40565 13.3499V13.5002C2.40333 15.2572 2.74694 16.997 3.41624 18.6169C4.08553 20.2368 5.06697 21.704 6.30269 22.9322C8.8059 25.4481 12.1873 26.8532 15.707 26.8401C19.256 26.8401 22.5979 25.4513 25.1098 22.9322C26.3446 21.7036 27.3249 20.2361 27.993 18.6162C28.6611 16.9963 29.0035 15.2568 29 13.5002C29.0025 11.7432 28.6591 10.0035 27.99 8.38366C27.321 6.76377 26.3398 5.29645 25.1043 4.06818Z" fill="%238F53E3"/></svg>');
  background-repeat: no-repeat;
  background-position: 0 0;
  color: #fff;
  font-size: 13.82px;
  font-style: normal;
  font-weight: 700;
  line-height: 27.641px;
}
.crs-header__headline {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}
.containerInner:has(.crs-header) {
  width: 100% !important;
}

@media (max-width: 768px) {
  .crs-header {
    flex-direction: column;
    align-items: center;
  }

  .crs-header__headline {
    text-align: center;
    font-size: 14px;
  }

  .crs-header .elHeadlineWrapper:last-child {
    display: none;
  }
}`;
  class W {
    constructor() {
      this.init();
    }
    init() {
      this.initStyles(), this.changes();
    }
    changes() {
      k(".col-inner").forEach((r) => {
        var c;
        if ((c = r.textContent) != null && c.includes("DROP SERVICING PARTNER PROGRAM")) {
          const p = (
            /* HTML */
            ` <div class="crs-header__guarantee">
          <span>30</span>- day action-based money-back guarantee
        </div>`
          ), t = r.querySelector(".elHeadlineWrapper"), d = r.querySelectorAll("b");
          d == null || d.forEach((m) => {
            m.textContent === "DROP SERVICING PARTNER PROGRAM" && m.classList.add("crs-header__headline");
          }), r.classList.add("crs-header"), t && t.insertAdjacentHTML("afterend", p);
        }
      });
    }
    initStyles() {
      const n = document.createElement("style");
      n.textContent = U, document.head.appendChild(n);
    }
  }
  const q = `.crs-schedule {
  margin-block: 40px;
}

.crs-schedule::before {
  content: '';
  position: absolute;
  inset: 0;
  display: block;
  background: #F2EBFC;
  height: 440px;
  z-index: -1;
}

.crs-schedule__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;
}

@media screen and (max-width: 768px) {
  .crs-schedule__title {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }
  
}

.crs-schedule__title span {
  color: #8F53E3;
}

.crs-schedule__wrap {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  width: 100%;
}

.crs-schedule__block {
  position: relative;
  background: #e8dbfa;

  padding: 14px 0 14px 28px;
  width: 204px;
  height: 128px;
  flex-shrink: 0;
  clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%);
}

.crs-schedule__block:first-child {
  padding-left: 14px;
  clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 0%);
}

.crs-schedule__block:last-child {
  background: #DCE9E1;;
  clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 10% 50%, 0% 0%);
}

.crs-schedule__today,
.crs-schedule__check {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0px 0px 0px 11px;
  padding: 2px 10px;
}

.crs-schedule__today {
  background: #a165f5;
  padding-right: 25px;
  z-index: 2;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
}

.crs-schedule__check {
  background: #17aa1c;
}

.crs-schedule__date {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: max-content;
  padding: 2px 10px;
  background: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
}

.crs-schedule__text {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
`;
  function f(o) {
    const n = { month: "short", day: "numeric", year: "numeric" };
    return o.toLocaleDateString("en-US", n);
  }
  class N {
    constructor() {
      this.init();
    }
    init() {
      this.getDates(), this.render();
    }
    render() {
      const n = (
        /* HTML */
        `
      <div class="crs-schedule">
        <div class="crs-schedule__header">
          <h3 class="crs-schedule__title">
            Secure your spot in the Drop Servicing Partner Program – Save <span>$2,000</span> and Get 8 Exclusive Bonuses Today
          </h3>
        </div>
        <div class="crs-schedule__wrap">
          <div class="crs-schedule__block">
            <div class="crs-schedule__date">${f(this.today)}</div>
            <div class="crs-schedule__today">today</div>
            <div class="crs-schedule__text">Join Drop Servicing Partner Program</div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__date">${f(this.today)}</div>
            <div class="crs-schedule__text">
              Access the full Drop Servicing Partner Program package, community and support
            </div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__date">${f(this.date2DaysLater)}</div>
            <div class="crs-schedule__text">
              Attend live video calls and receive personalized coaching (3x every week)
            </div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__date">${f(this.date17DaysLater)}</div>
            <div class="crs-schedule__text">Launch your first drop servicing business</div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__check">${D}</div>
            <div class="crs-schedule__date">${f(this.date31DaysLater)}</div>
            <div class="crs-schedule__text">30 days action-based money-back guarantee</div>
          </div>
        </div>
      </div>
    `
      ), r = document.querySelector(".crsTargetSection");
      r && (this.initStyles(), r.insertAdjacentHTML("beforebegin", n));
    }
    getDates() {
      this.today = /* @__PURE__ */ new Date(), this.date2DaysLater = new Date(this.today), this.date2DaysLater.setDate(this.today.getDate() + 2), this.date17DaysLater = new Date(this.today), this.date17DaysLater.setDate(this.today.getDate() + 17), this.date31DaysLater = new Date(this.today), this.date31DaysLater.setDate(this.today.getDate() + 31);
    }
    initStyles() {
      document.head.insertAdjacentHTML("beforeend", `<style>${q}</style>`);
    }
  }
  O({ name: "Improvements on Checkout Page", dev: "OS" });
  const Z = "/partner-offer";
  class G {
    constructor() {
      this.init();
    }
    init() {
      window.location.pathname === Z && (console.log("Experiment launched"), new F(), new N(), new W());
    }
  }
  new G();
})();
//# sourceMappingURL=index.js.map
