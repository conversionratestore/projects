renderDelivery()

function renderDelivery() {
  if (window.innerWidth <= 768) {
    console.log(`mobileVar`)
    mobileVar()
  } else {
    console.log(`desktopVar`)
    desktopVar()
  }
}

// event
let actionDataLayer = "",
  labelDataLayer = "",
  eventVar = "desktop"

if (window.innerWidth <= 768) {
  eventVar = "mobile"
}

function pushDataLayer(actionDataLayer, labelDataLayer) {
  window.dataLayer = window.dataLayer || []
  if (labelDataLayer) {
    console.log(actionDataLayer + " : " + labelDataLayer)
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: `Exp: New free trial flow ${eventVar}`,
      eventAction: `${actionDataLayer}`,
      eventLabel: `${labelDataLayer}`,
    })
  } else {
    console.log(actionDataLayer)
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: `Exp: New free trial flow ${eventVar}`,
      eventAction: `${actionDataLayer}`,
    })
  }
}

function mobileVar() {
  let startFuncMob = setInterval(() => {
    if (document.querySelector(".home.page-template-default.page.page-id-106.page-home")) {
      clearInterval(startFuncMob)

      // click on btn try_for_free
      document.querySelector(".button.button--solid.button--large.button--hover-blue-dark.button--icon-right").addEventListener("click", (e) => {
        e.preventDefault()
        onClickPricingUrl()
      })

      document.querySelector(".block.block-cta.block-cta--a.block-cta--dark .buttons a").addEventListener("click", (e) => {
        e.preventDefault()
        onClickPricingUrl()
      })

      function onClickPricingUrl() {
        document.location = "https://checkout.samcart.com/products/samcart-grow-yearly-trial?_ga=2.142421298.1224594291.1644311332-453639727.1633503243"
      }
    }
  }, 10)

  let startFunkMob2 = setInterval(() => {
    if (document.querySelector(".ng-scope")) {
      clearInterval(startFunkMob2)

      let styleBox = /* html*/ `
      <style>
        .sc-row:nth-child(3),
        #sc3294902f-6f2d-47dc-89f9-07d498b310f3 {
          display: none;
        }

        section.tpl-t1.pb-sm-40.pb-24 .tpl-t1__col-form {
          height: 725px;
          padding: 0 !important;
        }

        #recaptcha-error {
          text-align: center !important;
        }

        #sc-checkout {
          margin-bottom: 20px !important;
        }

        .sc-element:nth-child(5) .mobile-column-width .sc-text {
          padding: 0 !important;
        }

        .sc-headline:nth-child(1) {
          margin-bottom: 16px !important;
          padding: 0 !important;
        }

        #sc51e54003-0fac-46db-80a2-881825e46c45 h1 {
          font-weight: 600;
          font-family: "Poppins", sans-serif !important;
          font-size: 48px !important;
          line-height: 53px;
          align-items: center;
          color: #ffffff !important;
        }

        .sc-element .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font {
          display: block;
          font-family: "Poppins", sans-serif !important;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          color: #ffffff !important;
        }

        .v2-horizontal-grid-container,
        div[ng-if="subscriptionsByProductId[checkoutContext.order.invoice.items[0].product_id]"] {
          display: none;
        }

        .steps {
          margin: 24px 0 0;
        }

        .steps ol {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          padding: 0;
          margin: 0;
        }

        .steps ol li {
          position: relative;
          list-style: none;
          display: flex;
          align-items: flex-start;
        }

        .steps ol li:nth-child(1) {
          padding-bottom: 18px;
          margin-bottom: 41px;
        }

        .steps ol li:nth-child(2) {
          padding-bottom: 34px;
          margin-bottom: 41px;
        }

        .steps ol li:nth-child(1):before,
        .steps ol li:nth-child(2):before {
          position: absolute;
          content: "";
          width: 2px;
          height: 100%;
          background: #ffffff;
          border-radius: 7px;
          left: 14px;
          top: 35px;
        }

        .steps ol li:nth-child(2):before {
          background: #98b9e9;
        }

        .steps ol li:nth-child(1)::after {
          position: absolute;
          content: "Today";
          left: 50px;
          bottom: -8px;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: rgb(255 255 255 / 50%);
        }

        .steps ol li > span {
          width: 30px;
          height: 30px;

          border: 1px solid #98b9e9;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;

          font-family: "Poppins", sans-serif !important;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #98b9e9;
          padding: 12px 13px;
          margin-right: 20px;
        }

        .steps ol li > span.active {
          background: #ffffff;
          color: #286cd2;
        }

        .absolute_box {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .absolute_box p {
          font-family: "Poppins", sans-serif !important;
          font-weight: 700;
          font-size: 14px !important;
          line-height: 16px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 5px !important;
        }

        .steps ol li:nth-child(2) .absolute_box p,
        .steps ol li:nth-child(3) .absolute_box p {
          color: #98b9e9;
        }

        .absolute_box > span {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: rgb(255 255 255 / 50%);
        }

        .absolute_box p span,
        p.total_text > span,
        p.hint_plan > span {
          position: relative;
        }

        .absolute_box p span .hidden_text,
        p.total_text > span .hidden_text,
        p.hint_plan > span .hidden_text {
          position: absolute;
          opacity: 0;
          width: 230px;
          background: #ffffff;
          box-shadow: 0px 0.688073px 2.06422px rgba(24, 59, 86, 0.1), 0px 5.26px 20px rgba(8, 32, 125, 0.2);
          border-radius: 10px;
          padding: 15px;
          font-family: "Poppins", sans-serif !important;
          font-weight: 300;
          font-size: 12px;
          line-height: 17px;
          color: #5a7386;
          top: -211px;
          right: -58px;
          z-index: 5;
          text-transform: none;
          transition: all 250ms ease;
          text-align: left;
          pointer-events: none;
        }

        p.hint_plan > span .hidden_text {
          top: -160px;
          right: -145px;
        }

        p.total_text span .hidden_text {
          left: unset;
          right: -28px;
          top: -193px;
        }

        .absolute_box p span .mini_box,
        p.total_text span .mini_box,
        p.hint_plan span .mini_box {
          position: absolute;
          opacity: 0;
          top: -12px;
          left: -11px;
          z-index: 7;
          width: 39.84px;
          height: 9.75px;
          transition: all 250ms ease;
        }

        p.total_text span .mini_box {
          left: unset;
          right: -13px;
        }

        .hint {
          cursor: pointer;
        }

        p.total_text {
          font-family: "Poppins", sans-serif !important;
          font-weight: 300;
          font-size: 8px;
          line-height: 18px;
          text-align: right;
          color: #5a7386;
        }

        p.total_text .accent_color {
          font-weight: 500;
          font-size: 9px;
          line-height: 18px;
          color: #5a7386;
        }

        .card_box .invoice-item.total-row {
          display: flex;
          justify-content: space-between;
        }

        .card_box .invoice-item.total-row .invoice-amount-col.float-right.text-right {
          float: unset !important;
        }

        .invoice-item.total-row .invoice-label-col .invoice-item-label {
          font-family: "Poppins", sans-serif !important;
          font-weight: 500 !important;
          font-size: 16px !important;
          line-height: 24px !important;
          text-transform: uppercase !important;
          color: #5a7386 !important;
        }

        .card_box .invoice-item.total-row .invoice-amount-col.float-right.text-right #total {
          font-family: "Poppins", sans-serif !important;
          font-weight: 700 !important;
          font-size: 16px !important;
          line-height: 24px !important;
          text-transform: uppercase !important;
          color: #286cd2 !important;
        }

        /*3d card */
        .tpl-t1__col-form {
          height: 100%;
        }

        #paymentForm {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .wrapper_card {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: #ffffff;
          padding: 25px 25px;
          border-radius: 10px;
        }

        .card_box {
          position: relative;
          perspective: 2000px;
          width: 100%;
          height: 100%;
        }
        .card_box .front,
        .card_box .back {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          transition: all 1s 0s cubic-bezier(0.47, 0, 0.75, 0.72);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: #ffffff;
        }

        .card_box .front {
          z-index: 10;
        }
        .card_box .back {
          transform: rotateY(-180deg);
          opacity: 0;
          display: none;
        }

        .card_box .front button.btn_continue,
        .card_box #placeOrder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100% !important;
          height: 80px;
          padding: 18px;
          background: #273542 !important;
          border-radius: 7px;
          font-family: "Poppins", sans-serif !important;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          text-transform: capitalize;
          color: #ffffff;
          margin-top: 32px;
          position: relative;
          border: none;
          cursor: pointer;
        }

        .card_box #order-summary-widget {
          margin: 25px 0 !important;
          background: #f4f5f6 !important;
          border-radius: 4px !important;
          padding: 12px !important;
        }

        .card_box #placeOrder {
          text-transform: unset;
          margin: 0 0 15px !important;
        }

        .card_box .front button.btn_continue svg {
          margin-left: 8px;
        }

        .card_box .front .mb-24.text-uppercase,
        .card_box .back .my-32.text-uppercase {
          font-family: "Poppins", sans-serif !important;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-transform: uppercase !important;
          color: #5a7386 !important;
          margin-bottom: 27px !important;
          margin-top: 0 !important;
        }

        #paymentForm .card_box .back .stripe-processor-form .CVV2-label,
        #paymentForm .card_box .back .stripe-processor-form .exp-label,
        #paymentForm .card_box .back .stripe-processor-form .stripe-label,
        #paymentForm .card_box .back .tab-content > .tab-pane {
          display: block !important;
        }

        #paymentForm .card_box .front label,
        #paymentForm .card_box .back label {
          font-family: "Poppins", sans-serif !important;
          font-weight: 500;
          font-size: 12px;
          line-height: 12px;
          text-transform: capitalize;
          color: #5a7386;
          margin: 0px 0 8px;
        }

        #paymentForm .card_box .front label.error {
          color: #ff3465;
          margin-top: 7px;
        }

        #payments .mt-4,
        .my-4 {
          margin-top: 18px !important;
        }

        .card_box .back .tpl-t1__terms.mx-auto.text-center {
          text-align: left !important;
          position: relative;
          margin-top: 18px;
        }

        #paymentForm .card_box .back label#terms_conditions_checkbox-error {
          position: absolute;
          top: 17px;
          left: 29px;
          color: red;
        }

        .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
          border: none !important;
        }

        #paymentForm .card_box .back label[for="terms_conditions_checkbox"]:not(.error) {
          color: #5f7384;
          font-weight: 400;
          text-transform: unset;
        }

        #paymentForm .card_box .back label[for="terms_conditions_checkbox"]:not(.error) a {
          font-weight: 700;
        }

        .card_box .front .form-control,
        .card_box .stripe-processor-form .StripeElement,
        .card_box select,
        .card_box .ElementsApp input,
        .card_box .ElementsApp .InputElement input {
          border: 1px solid #bfc7ce;
          border-radius: 3px;
          height: 41px;
          font-family: "Poppins", sans-serif !important;
          font-weight: 400 !important;
          font-size: 12px !important;
          line-height: 18px !important;
          color: #5a7386;
          opacity: 0.5;
          padding: 11px !important;
        }

        .card_box .front .border-bottom.mb-16 {
          margin-bottom: 0 !important;
        }

        .card_box .front select.form-control {
          background: url(https://conversionratestore.github.io/projects/samcart/img/chevron-down.svg) right 0.75rem center/15px 14px no-repeat #fff !important;
        }

        #product-list {
          display: none;
        }

        .g-recaptcha-container {
          margin: 20px 0 !important;
        }

        /*quarantee */
        .quarantee {
          border: 1px solid #bfc7ce;
          border-radius: 6px;
          padding: 10px 17px 10px 10px;
          display: flex;
          align-items: center;
          margin-top: 42px;
          flex-direction: column;
          text-align: center;
        }

        .quarantee div:first-child {
          margin-bottom: 16px;
          max-width: 120px;
          max-height: 120px;
        }

        .quarantee div:first-child img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .quarantee div:last-child > p:first-child {
          font-family: "Poppins", sans-serif !important;
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
          text-transform: uppercase;
          color: #0b1a26;
          margin-bottom: 8px;
        }

        .quarantee div:last-child > p:last-child {
          font-family: "Poppins", sans-serif !important;
          font-weight: 300;
          font-size: 12px;
          line-height: 17px;
          color: #0b1a26;
          margin: 0;
        }

        .btn_back {
          color: #183b56;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          font-weight: 600;
          font-size: 18px;
          line-height: 18px;
          margin-bottom: 30px;
        }

        .btn_back > svg {
          margin-right: 10px;
        }
        .absolute_box p span .mini_box.toggle_opacity,
        p.total_text span .mini_box.toggle_opacity,
        p.hint_plan span .mini_box.toggle_opacity,
        .absolute_box p span .hidden_text.toggle_opacity,
        p.total_text > span .hidden_text.toggle_opacity,
        p.hint_plan > span .hidden_text.toggle_opacity {
          opacity: 1;
        }

        p.hint_plan {
          font-weight: 600;
          font-size: 16px;
          line-height: 18px;
          text-transform: uppercase;
          color: #ffffff;
        }

        iframe[title="reCAPTCHA"] {
          width: 100%;
        }

        .col-6.px-8 {
          max-width: 100%;
          flex: 0 0 100%;
        }

        .stripe-processor-form .error {
          font-size: 12px;
          padding: 0;
          margin: 7px 0 8px;
        }

        .back .form-group,
        .back .form-group .exp-col.col-md-6:not(:last-child) {
          margin-bottom: 9px;
        }

         @media (max-width: 360px) {
           .absolute_box p span .hidden_text{
             right: -154px;
           }

           .card_box #placeOrder{
             font-size: 17px;
           }

           p.total_text{
             font-size: 6px;
           }

           .quarantee div:last-child > p:last-child{
             font-size: 10px;
           }
           .quarantee div:last-child > p:first-child{
             font-size: 10px;
           }
           .card_box .front .mb-24.text-uppercase, .card_box .back .my-32.text-uppercase{
             font-size: 13px;
           }
         }

         @media (width: 320px) {
           p.hint_plan > span .hidden_text.toggle_opacity{
             right: -61px;
           }
           .absolute_box p span .hidden_text {
              right: -120px;
          }
         }

          @media (width: 280px) {
            .absolute_box p span .hidden_text {
                right: -120px;
            }

            .card_box #placeOrder {
                font-size: 14px;
            }
            p.total_text {
                font-size: 4px;
            }
            p.total_text .accent_color {
                font-size: 7px;
            }

            .stripe-processor-form .error{
              font-size: 9px;
            }

            #paymentForm .card_box .back label#terms_conditions_checkbox-error{
              top: 28px;
            }
          }
      </style>
    `

      let steps = /* html*/ `
      <div class="steps">
        <ol>
          <li>
            <span class="active">1</span>
            <div class="absolute_box">
              <p>Start your free trial and get access to samcart</p>
              <span>Feb / 03 / 22</span>
            </div>
          </li>
          <li>
            <span>2</span>
            <div class="absolute_box">
              <p>Create your new marketplace</p>
              <span>Feb / 03 / 22</span>
            </div>
          </li>
          <li>
            <span>3</span>
            <div class="absolute_box">
              <p>
                Risk-free trial. Cancel anytime during the next 14 days.
                <span>
                  <svg class="hint" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 5.25H9.75V6.75H8.25V5.25Z" fill="#98B9E9" />
                    <path d="M8.25 8.25H9.75V12.75H8.25V8.25Z" fill="#98B9E9" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 9C1.5 4.86 4.85999 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.85999 16.5 1.5 13.14 1.5 9ZM3 9C3 12.3075 5.69247 15 9 15C12.3075 15 15 12.3075 15 9C15 5.6925 12.3075 3 9 3C5.69247 3 3 5.6925 3 9Z"
                      fill="#98B9E9"
                    />
                  </svg>
                  <svg class="mini_box" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5568 8.72844C10.7889 9.52248 9.52275 9.5437 8.72872 8.77586L0.0002195 0.335198L19.9974 -6.09158e-05L11.5568 8.72844Z" fill="white" />
                  </svg>
                  <span class="hidden_text"
                    >Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your
                    risk-free trial within 14 days and we will not charge you anything.</span
                  >
                </span>
              </p>
              <span>Mar / 05 / 22</span>
            </div>
          </li>
        </ol>
      </div>
    `
      let hintPlan = /* html*/ `
      <p class="hint_plan">
        Your plan will start after the end of the Free Trial
        <span>
          <svg class="hint" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 5.25H9.75V6.75H8.25V5.25Z" fill="white" />
            <path d="M8.25 8.25H9.75V12.75H8.25V8.25Z" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.5 9C1.5 4.86 4.85999 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.85999 16.5 1.5 13.14 1.5 9ZM3 9C3 12.3075 5.69247 15 9 15C12.3075 15 15 12.3075 15 9C15 5.6925 12.3075 3 9 3C5.69247 3 3 5.6925 3 9Z"
              fill="white"
            />
          </svg>

          <svg class="mini_box" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5568 8.72844C10.7889 9.52248 9.52275 9.5437 8.72872 8.77586L0.0002195 0.335198L19.9974 -6.09158e-05L11.5568 8.72844Z" fill="white" />
          </svg>
          <span class="hidden_text"
            >Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your risk-free
            trial within 14 days and we will not charge you anything.</span
          >
        </span>
      </p>
    `
      let card = /* html*/ `
      <div class="wrapper_card">
        <div class="card_box">
          <div class="front">
            <span class="testik"></span>
            <button class="btn_continue">
              Continue
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16699 10H15.8337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="back">
            <span class="btn_back">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect x="14.875" width="14" height="14.875" transform="rotate(90 14.875 0)" fill="url(#pattern0)" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_20_788" transform="scale(0.0625 0.0588235)" />
                  </pattern>
                  <image
                    id="image0_20_788"
                    width="16"
                    height="17"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAuElEQVQ4Ee2TwQ3DIAxFGaEjILMAB/uOTAfJRs0m7QjZoNmk3aDVJzJCDSLqsVIjIYz/+w44xLnBQ6IrSb4PkLEUJL8wxtRA/Rdw7od6EDjfcGF8TL79qr0jgAEbOF8rG1gXwMT68JKiCZ8FoIEpedbFOOdjOmEXZgiiE0Rbb7FOtgYLTy1gAYnOBhHrpcZtXnQ2vjvj7Wbcz9vOusY26fmciPPTCiBGrmUO49Kw8jvr2jb20Pgt8Ab/wWmi0HxujAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
              Back
            </span>
            <span class="testik2"></span>
            <div class="quarantee">
              <div>
                <img src="https://conversionratestore.github.io/projects/samcart/img/mask_group_mobile.png" alt="quarantee" />
              </div>
              <div>
                <p>Risk-free trial. Cancel anytime during the next 14 days</p>
                <p>
                  Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your
                  risk-free trial within 14 days and we will not charge you anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      let totalText = /* html*/ `
      <p class="total_text">
        <span class="accent_color">*You pay nothing today.</span> <br />
        Then $950 yearly starting in 2 weeks.
        <span>
          <svg class="hint" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_96_133)">
              <path
                d="M5.05947 1.44767C7.38775 1.44767 9.27519 3.31315 9.27519 5.61434C9.27519 7.91553 7.38775 9.78101 5.05947 9.78101C2.73119 9.78101 0.84375 7.91553 0.84375 5.61434C0.84375 3.31315 2.73119 1.44767 5.05947 1.44767Z"
                stroke="#69727A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M5.05859 7.28125V5.61458" stroke="#69727A" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.05859 3.94775H5.06959" stroke="#69727A" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_96_133">
                <rect width="10.1177" height="10" fill="white" transform="matrix(1 0 0 -1 0 10.6145)" />
              </clipPath>
            </defs>
          </svg>

          <svg class="mini_box" width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5568 8.72844C10.7889 9.52248 9.52275 9.5437 8.72872 8.77586L0.0002195 0.335198L19.9974 -6.09158e-05L11.5568 8.72844Z" fill="white" />
          </svg>
          <span class="hidden_text"
            >Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your risk-free
            trial within 14 days and we will not charge you anything.</span
          >
        </span>
      </p>
    `
      let quaranteeBlock = /* html*/ `
      <div class="quarantee">
        <div>
          <img src="https://conversionratestore.github.io/projects/samcart/img/mask_group_mobile.png" alt="quarantee" />
        </div>
        <div>
          <p>Risk-free trial. Cancel anytime during the next 14 days</p>
          <p>
            Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your risk-free
            trial within 14 days and we will not charge you anything.
          </p>
        </div>
      </div>
    `
      let btnBack = /* html*/ `
      <span class="btn_back">
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect x="14.875" width="14" height="14.875" transform="rotate(90 14.875 0)" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_20_788" transform="scale(0.0625 0.0588235)" />
            </pattern>
            <image
              id="image0_20_788"
              width="16"
              height="17"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAuElEQVQ4Ee2TwQ3DIAxFGaEjILMAB/uOTAfJRs0m7QjZoNmk3aDVJzJCDSLqsVIjIYz/+w44xLnBQ6IrSb4PkLEUJL8wxtRA/Rdw7od6EDjfcGF8TL79qr0jgAEbOF8rG1gXwMT68JKiCZ8FoIEpedbFOOdjOmEXZgiiE0Rbb7FOtgYLTy1gAYnOBhHrpcZtXnQ2vjvj7Wbcz9vOusY26fmciPPTCiBGrmUO49Kw8jvr2jb20Pgt8Ab/wWmi0HxujAAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
        Back
      </span>
    `

      document.head.insertAdjacentHTML("beforeend", styleBox)

      if (document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font")) {
        document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font").insertAdjacentHTML("afterend", steps)
      }

      if (document.querySelector(".steps")) {
        let today = new Date().toDateString().split(" ")
        let dayFourteenthToday = new Date(new Date().setDate(new Date().getDate() + 14)).toDateString().split(" ")
        document.querySelectorAll(".absolute_box > span")[0].textContent = `${today[1]} / ${today[2]} / ${today[3]}`
        document.querySelectorAll(".absolute_box > span")[1].textContent = `${today[1]} / ${today[2]} / ${today[3]}`
        document.querySelectorAll(".absolute_box > span")[2].textContent = `${dayFourteenthToday[1]} / ${dayFourteenthToday[2]} / ${dayFourteenthToday[3]}`
      }

      if (document.querySelector("#sc51e54003-0fac-46db-80a2-881825e46c45 h1 strong")) {
        document.querySelector("#sc51e54003-0fac-46db-80a2-881825e46c45 h1 strong").innerHTML = `Create your new <br/> business <br/> today!`
      }

      if (document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font")) {
        document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font").textContent =
          "Create your account to start your 14-day trial and set up your new marketplace."
      }

      if (document.querySelector("#sce5f6c91d-ac8c-41bd-8893-48dd2b58872c")) {
        document.querySelector("#sce5f6c91d-ac8c-41bd-8893-48dd2b58872c").innerHTML = hintPlan
      }

      // 3d card
      document.querySelector("#paymentForm")?.insertAdjacentHTML("afterbegin", card)
      document.querySelector(".testik")?.after(document.querySelector(".mb-24.text-uppercase"))
      document.querySelector(".front .mb-24.text-uppercase")?.after(document.querySelectorAll(".border-bottom.mb-16")[0])
      document.querySelector(".testik2").after(document.querySelector(".my-32.text-uppercase"))
      document.querySelector(".back .my-32.text-uppercase")?.after(document.querySelector("#payments"))
      document.querySelector(".back #payments")?.after(document.querySelector(".tpl-t1__terms.mx-auto.text-center"))
      document.querySelector(".tpl-t1__terms.mx-auto.text-center")?.after(document.querySelector("#order-summary-widget"))
      document.querySelector(".tpl-t1__terms.mx-auto.text-center")?.after(document.querySelector(".g-recaptcha-container"))
      // document.querySelector(".back")?.append(document.querySelector(".g-recaptcha-container"))
      if (document.querySelector("#placeOrder")) {
        document.querySelector(".back #order-summary-widget")?.after(document.querySelector("#placeOrder"))
      }
      if (document.querySelector("#payment-request-button")) {
        document.querySelector(".back #order-summary-widget")?.after(document.querySelector("#payment-request-button"))
      }

      if (document.querySelector(".card_box")) {
        //placeholder input front card
        document.querySelector('input[name="fname"]').placeholder = "John"
        document.querySelector('input[name="lname"]').placeholder = "Smith"
        document.querySelector('input[name="email"]').placeholder = "johnsmth@gmail.com"
        // document.querySelector('input[name="phone"]').placeholder = "+1 (000) - 000 - 0000"

        // click on btn_continue
        document.querySelector(".card_box .front button.btn_continue").addEventListener("click", () => {
          pushDataLayer("Click on Continue button", "Step 1")

          validationForm("form .wrapper_card .card_box .front")
        })

        // hover on hint -> event
        function toggleHint(parent) {
          document.querySelector(`${parent} .hidden_text`).classList.toggle("toggle_opacity")
          document.querySelector(`${parent} .mini_box`).classList.toggle("toggle_opacity")

          document.addEventListener("click", (e) => {
            document.querySelector(`${parent} .hidden_text`)?.classList.remove("toggle_opacity")
            document.querySelector(`${parent} .mini_box`)?.classList.remove("toggle_opacity")
          })
        }

        if (document.querySelector(".steps ol li + li .absolute_box .hint")) {
          document.querySelector(".steps ol li + li .absolute_box .hint").addEventListener("click", (e) => {
            pushDataLayer("click on the tips Risk free trial")

            e.stopPropagation()

            toggleHint(".steps")
          })
        }

        if (document.querySelector("p.hint_plan span .hint")) {
          document.querySelector("p.hint_plan span .hint").addEventListener("click", (e) => {
            pushDataLayer("click on the tips Plan free trial")

            e.stopPropagation()

            toggleHint("p.hint_plan span")
          })
        }

        setTimeout(() => {
          if (document.querySelector(".card_box .back #summary-totals .hint")) {
            document.querySelector(".card_box .back .hint").addEventListener("click", (e) => {
              pushDataLayer("click on you pay nothing today")

              e.stopPropagation()

              toggleHint(".card_box .back #summary-totals")
            })
          }
        }, 100)

        // click on btn_back
        let onBtnBack = setInterval(() => {
          if (document.querySelector(".btn_back")) {
            clearInterval(onBtnBack)

            if (document.querySelector(".btn_back")) {
              document.querySelector(".btn_back").addEventListener("click", function (e) {
                e.preventDefault()
                pushDataLayer("Click on Back link", "Step 2")

                document.querySelector(".front").style.transform = "rotateY(0deg)"
                document.querySelector(".back").style.transform = "rotateY(-180deg)"
                document.querySelector(".front").style.zIndex = "15"
                setTimeout(() => {
                  document.querySelector("section.tpl-t1.pb-sm-40.pb-24 .tpl-t1__col-form").style.height = "725px"
                  document.querySelector(".back").style.opacity = "0"
                  document.querySelector(".back").style.display = "none"
                }, 1010)
              })
            }
          }
        }, 10)

        //label, input textContent back card
        if (document.querySelector(".card_box .back h3.my-32.text-uppercase")) {
          document.querySelector(".card_box .back h3.my-32.text-uppercase").innerHTML = "Please add your payment details  <br> to start free trial"
        }

        if (document.querySelector("#placeOrder")) {
          document.querySelector("#placeOrder").textContent = "Start your free trial now"
        }

        setTimeout(() => {
          if (document.querySelector("#payments #cards")) {
            if (document.querySelector('label[for="card-number"]')) {
              document.querySelector('label[for="card-number"]').textContent = "Card Number"
            }

            if (document.querySelector(".extra-row.row.mobile-display .exp-label")) {
              document.querySelector(".extra-row.row.mobile-display .exp-label").textContent = "Exp. Date"
            }

            if (document.querySelector(".extra-row.row.mobile-display .CVV2-label")) {
              document.querySelector(".extra-row.row.mobile-display .CVV2-label").textContent = "CVV"
            }

            if (document.querySelector('label[for="postal-code"]')) {
              document.querySelector('label[for="postal-code"]').textContent = "Zip Code *"
            }

            if (document.querySelector('input[name="cardnumber"]')) {
              document.querySelector('input[name="cardnumber"]').placeholder = "1234 5678 9012 3456"
            }

            if (document.querySelector('input[name="cvc"]')) {
              document.querySelector('input[name="cvc"]').placeholder = "***"
            }

            if (document.querySelector('input[name="postal"]')) {
              document.querySelector('input[name="postal"]').placeholder = "000000"
            }
          }
        }, 100)

        document.querySelector("#order-summary-widget .invoice-amount-col #total").insertAdjacentHTML("afterend", totalText)

        // validate form
        if (document.querySelector("form .front .border-bottom.mb-16")) {
          function validationForm(parent) {
            let inputValueName = document.querySelector(`${parent} input[name='fname']`).value.match(/^.{1,30}$/)
            let inputValueLastName = document.querySelector(`${parent} input[name='lname']`).value.match(/^.{1,30}$/)
            // let inputValuePhone = document.querySelector(`${parent} input[name='phone']`).value.match(/(?<=^|\s|>|\;|\:|\))(?:\+|7|8|9|\()[\d\-\(\) ]{8,}\d/)
            let inputValueEmail = document.querySelector(`${parent} input[name='email']`).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)
            let selectValue = document.querySelector(`${parent} select[name='custom_ubiGdEid']`).value

            // name
            if (inputValueName === null) {
              document.querySelector(`${parent} input[name='fname']`).classList.add("error")
            } else {
              document.querySelector(`${parent} input[name='fname']`).classList.remove("error")
            }

            // lname
            if (inputValueLastName === null) {
              document.querySelector(`${parent} input[name='lname']`).classList.add("error")
            } else {
              document.querySelector(`${parent} input[name='lname']`).classList.remove("error")
            }

            // phone
            // if (inputValuePhone === null) {
            //   document.querySelector(`${parent} input[name='phone']`).classList.add("error")
            // } else {
            //   document.querySelector(`${parent} input[name='phone']`).classList.remove("error")
            // }

            // email
            if (inputValueEmail === null) {
              document.querySelector(`${parent} input[name='email']`).classList.add("error")
            } else {
              document.querySelector(`${parent} input[name='email']`).classList.remove("error")
            }

            // select
            if (selectValue === "") {
              document.querySelector(`${parent} select[name='custom_ubiGdEid']`).classList.add("error")
            } else if (selectValue !== "") {
              document.querySelector(`${parent} select[name='custom_ubiGdEid']`).classList.remove("error")
            }

            if (document.querySelector(`${parent} input.error`) == null && document.querySelector(`${parent} select.error`) == null) {
              document.querySelector(".front").style.transform = "rotateY(-180deg)"
              document.querySelector(".back").style.transform = "rotateY(-360deg)"
              document.querySelector(".front").style.zIndex = "0"

              setTimeout(() => {
                document.querySelector("section.tpl-t1.pb-sm-40.pb-24 .tpl-t1__col-form").style.height = "1420px"
                document.querySelector(".back").style.opacity = "1"
                document.querySelector(".back").style.display = "block"
              }, 400)

              setTimeout(() => {
                if (document.querySelector("#paymentForm .card_box .back label#terms_conditions_checkbox-error")) {
                  document.querySelector("#paymentForm .card_box .back label#terms_conditions_checkbox-error").remove()
                }
              }, 100)
            }
          }
        }

        // observe Form
        const options = {
          childList: true,
          subtree: true,
        }

        let observerForm = new MutationObserver(() => {
          if (document.querySelector("form")) {
            observerForm.disconnect()

            onObserverForm("#placeOrder")
            onObserverForm("#payment-request-button")

            function onObserverForm(selectorBtn) {
              if (document.querySelector(`${selectorBtn}`)) {
                document.querySelector(".back #order-summary-widget")?.after(document.querySelector(`${selectorBtn}`))

                if (selectorBtn === "#placeOrder") {
                  document.querySelector(`${selectorBtn}`).textContent = "Start your free trial now"
                }

                if (!document.querySelector(".quarantee")) {
                  document.querySelector(`.back ${selectorBtn}`).insertAdjacentHTML("afterend", quaranteeBlock)
                }

                // if (document.querySelector(".quarantee")){
                //   if(!document.querySelector('.btn_back')){
                //     document
                //     .querySelector(`.back .quarantee`)
                //     .insertAdjacentHTML("beforebegin", btnBack);
                //   }
                // }
              }
            }

            observerForm.observe(document.querySelector("form"), options)
          }
        })

        observerForm.observe(document.querySelector("form"), options)
        pushDataLayer("loaded")

        clarity("set", "new_free_trial_flow", "variant_1")
      }
    }
  }, 10)
}

function desktopVar() {
  let startFunc = setInterval(() => {
    if (document.querySelector(".home.page-template-default.page.page-id-106.page-home")) {
      clearInterval(startFunc)

      // click on btn try_for_free and pricing
      document.querySelector(".button.button--solid.button--large.button--hover-blue-dark.button--icon-right").addEventListener("click", (e) => {
        e.preventDefault()
        onClickPricingUrl()
      })
      document.querySelector(".nav-try a.button.button--solid.button--small").addEventListener("click", (e) => {
        e.preventDefault()
        onClickPricingUrl()
      })

      function onClickPricingUrl() {
        document.location = "https://checkout.samcart.com/products/samcart-grow-yearly-trial?_ga=2.142421298.1224594291.1644311332-453639727.1633503243"
      }
    }
  }, 10)

  let startFunk2 = setInterval(() => {
    if (document.querySelector(".ng-scope")) {
      clearInterval(startFunk2)

      let styleBox = /* html*/ `
<style>
  section.tpl-t1.pb-sm-40.pb-24 .tpl-t1__col-form {
    padding-top: 65px;
  }

  #recaptcha-error {
    text-align: center !important;
  }

  #sc51e54003-0fac-46db-80a2-881825e46c45 h1 {
    max-width: 445px;
    font-family: "Poppins", sans-serif !important;
    font-size: 41px !important;
    line-height: 50px;
    align-items: center;
    color: #ffffff !important;
  }

  .sc-element .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font {
    display: block;
    max-width: 401px;
    font-family: "Poppins", sans-serif !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff !important;
  }

  .v2-horizontal-grid-container,
  div[ng-if="subscriptionsByProductId[checkoutContext.order.invoice.items[0].product_id]"] {
    display: none;
  }

  .steps {
    margin: 96px 0 54px;
  }

  .steps ol {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .steps ol li {
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
  }

  .steps ol li + li {
    margin-left: 20px;
  }

  .steps ol li:nth-child(1)::after {
    position: absolute;
    content: "Today";
    left: 0;
    bottom: -17px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    color: #ffffff;
    opacity: 0.5;
  }

  .steps ol li > span {
    width: 21px;
    height: 20px;

    border: 1px solid #ffffff;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 8px;
    line-height: 9px;
    color: #ffffff;
    padding: 5px 8px;
    margin-right: 20px;
  }

  .steps ol li > span.active {
    background: #ffffff;
    color: #286cd2;
  }

  .steps ol li:nth-child(1) .absolute_box {
    width: 145px;
  }

  .steps ol li:nth-child(2) .absolute_box {
    width: 110px;
  }

  .steps ol li:nth-child(3) .absolute_box {
    width: 175px;
  }

  .absolute_box {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -50px;
    left: 0;
    justify-content: space-between;
  }

  .absolute_box p {
    font-family: "Poppins", sans-serif !important;
    font-weight: 400;
    font-size: 9px !important;
    line-height: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 5px !important;
  }

  .absolute_box > span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    color: #ffffff;
    opacity: 0.5;
  }

  .absolute_box p span,
  p.total_text > span {
    position: relative;
  }

  .absolute_box p span .hidden_text,
  p.total_text > span .hidden_text {
    position: absolute;
    opacity: 0;
    width: 230px;
    background: #f4f5f6;
    box-shadow: 0px 0.688073px 2.06422px rgba(24, 59, 86, 0.1), 0px 5.26px 20px rgba(8, 32, 125, 0.2);
    border-radius: 10px;
    padding: 15px;
    font-family: "Poppins", sans-serif !important;
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    color: #5a7386;
    top: 25px;
    left: -33px;
    z-index: 5;
    text-transform: none;
    transition: all 250ms ease;
    text-align: left;
    pointer-events: none;
  }

  p.total_text span .hidden_text {
    left: unset;
    right: -28px;
  }

  .absolute_box p span .mini_box,
  p.total_text span .mini_box {
    position: absolute;
    opacity: 0;
    top: 17px;
    left: -14px;
    z-index: 7;
    width: 39.84px;
    height: 9.75px;
    transition: all 250ms ease;
  }

  p.total_text span .mini_box {
    left: unset;
    right: -13px;
  }

  .hint {
    cursor: pointer;
  }

  .absolute_box p span .hint:hover ~ .mini_box,
  .absolute_box p span .hint:hover ~ .hidden_text,
  p.total_text span .hint:hover ~ .mini_box,
  p.total_text span .hint:hover ~ .hidden_text {
    opacity: 1;
  }

  p.total_text {
    font-family: "Poppins", sans-serif !important;
    font-weight: 400;
    font-size: 7px;
    line-height: 13px;
    text-align: right;
    color: #5a7386;
  }

  p.total_text .accent_color {
    font-weight: 600;
  }

  .card_box .invoice-item.total-row {
    display: flex;
    justify-content: space-between;
  }

  .card_box .invoice-item.total-row .invoice-amount-col.float-right.text-right {
    float: unset !important;
  }

  .invoice-item.total-row .invoice-label-col .invoice-item-label {
    font-family: "Poppins", sans-serif !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 24px !important;
    text-transform: uppercase !important;
    color: #5a7386 !important;
  }

  .card_box .invoice-item.total-row .invoice-amount-col.float-right.text-right #total {
    font-family: "Poppins", sans-serif !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 24px !important;
    text-transform: uppercase !important;
    color: #286cd2 !important;
  }

  @media (max-width: 1210px) {
    .steps ol li:nth-child(1) .absolute_box {
      width: 135px;
    }

    .steps ol li:nth-child(2) .absolute_box {
      width: 85px;
    }

    .steps ol li:nth-child(3) .absolute_box {
      width: 132px;
    }

    .absolute_box {
      top: -65px;
    }
  }

  @media (max-width: 1098px) {
    .steps ol li:nth-child(1) .absolute_box {
      width: 105px;
    }

    .steps ol li:nth-child(2) img {
      max-width: 100px;
    }

    .steps ol li:nth-child(2) .absolute_box {
      width: 67px;
    }

    .steps ol li:nth-child(2) .absolute_box p {
      margin-bottom: 18px !important;
    }

    .steps ol li:nth-child(2) img {
      max-width: 70px;
    }

    .steps ol li:nth-child(3) .absolute_box {
      width: 95px;
    }

    .absolute_box {
      top: -77px;
    }
  }

  /*3d card */
  .tpl-t1__col-form {
    height: 100%;
  }

  #paymentForm {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .wrapper_card {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #ffffff;
  }

  .card_box {
    position: relative;
    perspective: 5000px;
    width: 100%;
    height: 100%;
  }
  .card_box .front,
  .card_box .back {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: all 1s 0s cubic-bezier(0.47, 0, 0.75, 0.72);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    background: #ffffff;
  }

  .card_box .front {
    z-index: 10;
  }
  .card_box .back {
    transform: rotateY(-180deg);
  }

  .card_box .front button.btn_continue,
  .card_box #placeOrder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    height: 65px;
    padding: 18px;
    background: #273542 !important;
    border-radius: 7px;
    font-family: "Poppins", sans-serif !important;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #ffffff;
    margin-top: 30px;
    position: relative;
    border: none;
    cursor: pointer;
  }

  .card_box #order-summary-widget {
    margin: 20px 0 !important;
    background: #f4f5f6 !important;
    border-radius: 4px !important;
    padding: 10px 20px 5px !important;
  }

  .card_box #placeOrder {
    text-transform: unset;
    margin: 0 0 15px !important;
  }

  .card_box .front button.btn_continue svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
  }

  .card_box .front .mb-24.text-uppercase,
  .card_box .back .my-32.text-uppercase {
    font-family: "Poppins", sans-serif !important;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.1em;
    text-transform: uppercase !important;
    color: #5a7386 !important;
    margin-bottom: 10px !important;
    margin-top: 0 !important;
  }

  #paymentForm .card_box .back .stripe-processor-form .CVV2-label,
  #paymentForm .card_box .back .stripe-processor-form .exp-label,
  #paymentForm .card_box .back .stripe-processor-form .stripe-label,
  #paymentForm .card_box .back .tab-content > .tab-pane {
    display: block !important;
  }

  #paymentForm .card_box .front label,
  #paymentForm .card_box .back label {
    font-family: "Poppins", sans-serif !important;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-transform: capitalize;
    color: #5a7386;
    margin-bottom: 5px;
  }

  #paymentForm .card_box .front label.error{
    color: #FF3465;
  }

  .card_box .back .tpl-t1__terms.mx-auto.text-center {
    text-align: left !important;
    position: relative;
  }

  #paymentForm .card_box .back label#terms_conditions_checkbox-error {
    position: absolute;
    top: 0px;
    right: 0px;
    color: red;
  }

  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    border: none !important;
  }

  #paymentForm .card_box .back label[for="terms_conditions_checkbox"]:not(.error) {
    color: #5f7384;
    font-weight: 400;
    text-transform: unset;
  }

  #paymentForm .card_box .back label[for="terms_conditions_checkbox"]:not(.error) a {
    font-weight: 700;
  }

  .card_box .front .form-control,
  .card_box .stripe-processor-form .StripeElement,
  .card_box select,
  .card_box .ElementsApp input,
  .card_box .ElementsApp .InputElement input {
    border: 1px solid #bfc7ce;
    border-radius: 3px;
    height: 41px;
    font-family: "Poppins", sans-serif !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 18px !important;
    color: #5a7386;
    opacity: 0.5;
    padding: 11px !important;
  }

  .card_box .front .border-bottom.mb-16 {
    margin-bottom: 0 !important;
  }

  .card_box .front select.form-control {
    background: url(https://conversionratestore.github.io/projects/samcart/img/chevron-down.svg) right 0.75rem center/15px 14px no-repeat #fff !important;
  }

  #product-list {
    display: none;
  }

  .g-recaptcha-container {
    margin: 20px 0 !important;
  }

  /*quarantee */
  .quarantee {
    border: 1px solid #bfc7ce;
    border-radius: 6px;
    padding: 10px 17px 10px 10px;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .quarantee div:first-child {
    width: 31%;
    min-width: 48px;
    max-width: 48px;
    margin-right: 10px;
  }

  .quarantee div:first-child img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .quarantee div:last-child > p:first-child {
    font-family: "Poppins", sans-serif !important;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: #273542;
    margin-bottom: 5px;
  }

  .quarantee div:last-child > p:last-child {
    font-family: "Poppins", sans-serif !important;
    font-weight: 300;
    font-size: 9px;
    line-height: 13px;
    color: #5a7386;
    margin: 0;
  }

  .btn_back {
    color: #183B56;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 30px;
  }

  .btn_back >svg{
    margin-right: 10px;
  }
</style>
      `

      let steps = /* html*/ `
    <div class="steps">
    <ol>
        <li>
        <span class="active">1</span>
        <img src="https://conversionratestore.github.io/projects/samcart/img/line1.png" alt="line" />
        <div class="absolute_box">
            <p>Start your free trial and get access to samcart</p>
            <span>Feb / 03 / 22</span>
        </div>
        </li>
        <li>
        <span>2</span>
        <img src="https://conversionratestore.github.io/projects/samcart/img/line2.png" alt="line" />
        <div class="absolute_box">
            <p>Create your new marketplace</p>
            <span>Feb / 03 / 22</span>
        </div>
        </li>
        <li>
        <span>3</span>
        <div class="absolute_box">
            <p>
            Risk-free trial. Cancel anytime during the next 14 days.
            <span>
                <svg class="hint" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_98_179)">
                    <path
                    d="M5.00065 1.3254C7.30184 1.3254 9.16732 3.16917 9.16732 5.44358C9.16732 7.71799 7.30184 9.56177 5.00065 9.56177C2.69946 9.56177 0.833984 7.71799 0.833984 5.44358C0.833984 3.16917 2.69946 1.3254 5.00065 1.3254Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                    <path d="M5 7.09082V5.44355" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 3.79639H5.011" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_98_179">
                    <rect width="10" height="9.88364" fill="white" transform="matrix(1 0 0 -1 0 10.3855)" />
                    </clipPath>
                </defs>
                </svg>
                <svg class="mini_box" width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.242 0.47532C19.3515 -0.0677717 20.6497 -0.0677726 21.7592 0.475319L39.9192 9.3645H0.0820312L18.242 0.47532Z" fill="#F4F5F6" />
                </svg>
                <span class="hidden_text"
                >Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your
                risk-free trial within 14 days and we will not charge you anything.</span
                >
            </span>
            </p>
            <span>Mar / 05 / 22</span>
        </div>
        </li>
    </ol>
    </div>
    `

      let card = /* html*/ `
    <div class="wrapper_card">
    <div class="card_box">
        <div class="front">
        <span class="testik"></span>
        <button class="btn_continue">
            Continue
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16699 10H15.8337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 4.16675L15.8333 10.0001L10 15.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        </div>
        <div class="back">
        <span class="btn_back">
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="14.875" width="14" height="14.875" transform="rotate(90 14.875 0)" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_20_788" transform="scale(0.0625 0.0588235)"/>
            </pattern>
            <image id="image0_20_788" width="16" height="17" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAuElEQVQ4Ee2TwQ3DIAxFGaEjILMAB/uOTAfJRs0m7QjZoNmk3aDVJzJCDSLqsVIjIYz/+w44xLnBQ6IrSb4PkLEUJL8wxtRA/Rdw7od6EDjfcGF8TL79qr0jgAEbOF8rG1gXwMT68JKiCZ8FoIEpedbFOOdjOmEXZgiiE0Rbb7FOtgYLTy1gAYnOBhHrpcZtXnQ2vjvj7Wbcz9vOusY26fmciPPTCiBGrmUO49Kw8jvr2jb20Pgt8Ab/wWmi0HxujAAAAABJRU5ErkJggg=="/>
            </defs>
            </svg>
            Back
        </span>
        <span class="testik2"></span>
        <div class="quarantee">
            <div>
            <img src="https://conversionratestore.github.io/projects/samcart/img/mask_group.png" alt="quarantee">
            </div>
            <div>
            <p>Risk-free trial. Cancel anytime during the next 14 days</p>
            <p>
                Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your
                risk-free trial within 14 days and we will not charge you anything.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
    `

      let totalText = /* html*/ `
    <p class="total_text">
    <span class="accent_color">*You pay nothing today.</span> Then $950 yearly starting in 2 weeks.
    <span>
        <svg class="hint" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_96_133)">
            <path
            d="M5.05947 1.44767C7.38775 1.44767 9.27519 3.31315 9.27519 5.61434C9.27519 7.91553 7.38775 9.78101 5.05947 9.78101C2.73119 9.78101 0.84375 7.91553 0.84375 5.61434C0.84375 3.31315 2.73119 1.44767 5.05947 1.44767Z"
            stroke="#69727A"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
            <path d="M5.05859 7.28125V5.61458" stroke="#69727A" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.05859 3.94775H5.06959" stroke="#69727A" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_96_133">
            <rect width="10.1177" height="10" fill="white" transform="matrix(1 0 0 -1 0 10.6145)" />
            </clipPath>
        </defs>
        </svg>
        <svg class="mini_box" width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.242 0.47532C19.3515 -0.0677717 20.6497 -0.0677726 21.7592 0.475319L39.9192 9.3645H0.0820312L18.242 0.47532Z" fill="#F4F5F6" />
        </svg>
        <span class="hidden_text"
        >Our templates can help you start your online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your risk-free
        trial within 14 days and we will not charge you anything.</span
        >
    </span>
    </p>
    `

      let quaranteeBlock = /* html*/ `
    <div class="quarantee">
    <div>
        <img src="https://conversionratestore.github.io/projects/samcart/img/mask_group.png" alt="quarantee">
    </div>
    <div>
        <p>Risk-free trial. Cancel anytime during the next 14 days</p>
        <p>
        Our templates can help you start your new online business within days. If you decide that you are not yet ready to create your new marketplace, simply cancel your risk-free
        trial within 14 days and we will not charge you anything.
        </p>
    </div>
    </div>

    `

      let btnBack = /* html*/ `
    <span class="btn_back">
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect x="14.875" width="14" height="14.875" transform="rotate(90 14.875 0)" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_20_788" transform="scale(0.0625 0.0588235)"/>
      </pattern>
      <image id="image0_20_788" width="16" height="17" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAuElEQVQ4Ee2TwQ3DIAxFGaEjILMAB/uOTAfJRs0m7QjZoNmk3aDVJzJCDSLqsVIjIYz/+w44xLnBQ6IrSb4PkLEUJL8wxtRA/Rdw7od6EDjfcGF8TL79qr0jgAEbOF8rG1gXwMT68JKiCZ8FoIEpedbFOOdjOmEXZgiiE0Rbb7FOtgYLTy1gAYnOBhHrpcZtXnQ2vjvj7Wbcz9vOusY26fmciPPTCiBGrmUO49Kw8jvr2jb20Pgt8Ab/wWmi0HxujAAAAABJRU5ErkJggg=="/>
      </defs>
    </svg>
    Back
  </span>
    `

      document.head.insertAdjacentHTML("beforeend", styleBox)

      if (document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font")) {
        document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font").insertAdjacentHTML("afterend", steps)
      }

      if (document.querySelector(".steps")) {
        let today = new Date().toDateString().split(" ")
        let dayFourteenthToday = new Date(new Date().setDate(new Date().getDate() + 14)).toDateString().split(" ")
        document.querySelectorAll(".absolute_box > span")[0].textContent = `${today[1]} / ${today[2]} / ${today[3]}`
        document.querySelectorAll(".absolute_box > span")[1].textContent = `${today[1]} / ${today[2]} / ${today[3]}`
        document.querySelectorAll(".absolute_box > span")[2].textContent = `${dayFourteenthToday[1]} / ${dayFourteenthToday[2]} / ${dayFourteenthToday[3]}`
      }

      if (document.querySelector("#sc51e54003-0fac-46db-80a2-881825e46c45 h1 strong")) {
        document.querySelector("#sc51e54003-0fac-46db-80a2-881825e46c45 h1 strong").textContent = "Create your business in SamCart today!"
      }

      if (document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font")) {
        document.querySelector(".sc-element  .mobile-column-width #sc5d10c341-d9b7-4b33-992c-37c47d5322e2 p font").textContent =
          "Create your account to start your 14-day trial and set up your new marketplace."
      }

      // 3d card
      document.querySelector("#paymentForm")?.insertAdjacentHTML("afterbegin", card)
      document.querySelector(".testik")?.after(document.querySelector(".mb-24.text-uppercase"))
      document.querySelector(".front .mb-24.text-uppercase")?.after(document.querySelectorAll(".border-bottom.mb-16")[0])
      document.querySelector(".testik2").after(document.querySelector(".my-32.text-uppercase"))
      document.querySelector(".back .my-32.text-uppercase")?.after(document.querySelector("#payments"))
      document.querySelector(".back #payments")?.after(document.querySelector(".tpl-t1__terms.mx-auto.text-center"))
      document.querySelector(".tpl-t1__terms.mx-auto.text-center")?.after(document.querySelector("#order-summary-widget"))
      document.querySelector(".tpl-t1__terms.mx-auto.text-center")?.after(document.querySelector(".g-recaptcha-container"))
      // document.querySelector(".back")?.append(document.querySelector(".g-recaptcha-container"))
      if (document.querySelector("#placeOrder")) {
        document.querySelector(".back #order-summary-widget")?.after(document.querySelector("#placeOrder"))
      }
      if (document.querySelector("#payment-request-button")) {
        document.querySelector(".back #order-summary-widget")?.after(document.querySelector("#payment-request-button"))
      }

      if (document.querySelector(".card_box")) {
        //placeholder input front card
        document.querySelector('input[name="fname"]').placeholder = "John"
        document.querySelector('input[name="lname"]').placeholder = "Smith"
        document.querySelector('input[name="email"]').placeholder = "johnsmth@gmail.com"
        // document.querySelector('input[name="phone"]').placeholder = "+1 (000) - 000 - 0000"

        // click on btn_continue
        document.querySelector(".card_box .front button.btn_continue").addEventListener("click", () => {
          pushDataLayer("Click on Continue button", "Step 1")

          validationForm("form .wrapper_card .card_box .front")
        })

        // hover on hint -> event
        if (document.querySelector(".steps ol li + li .absolute_box .hint")) {
          document.querySelector(".steps ol li + li .absolute_box .hint").addEventListener("mouseenter", () => {
            pushDataLayer("Hover on the tips Risk free trial")
          })
        }

        setTimeout(() => {
          if (document.querySelector(".card_box .back #summary-totals .hint")) {
            document.querySelector(".card_box .back .hint").addEventListener("mouseenter", () => {
              pushDataLayer("Hover on you pay nothing today")
            })
          }
        }, 100)

        // click on btn_back
        let onBtnBack = setInterval(() => {
          if (document.querySelector(".btn_back")) {
            clearInterval(onBtnBack)

            if (document.querySelector(".btn_back")) {
              document.querySelector(".btn_back").addEventListener("click", function (e) {
                e.preventDefault()
                pushDataLayer("Click on Back link", "Step 2")

                document.querySelector(".front").style.transform = "rotateY(0deg)"
                document.querySelector(".back").style.transform = "rotateY(-180deg)"
                document.querySelector(".front").style.zIndex = "15"
              })
            }
          }
        }, 10)

        //label, input textContent back card
        if (document.querySelector(".card_box .back h3.my-32.text-uppercase")) {
          document.querySelector(".card_box .back h3.my-32.text-uppercase").innerHTML = "Please add your payment details  <br> to start free trial"
        }

        if (document.querySelector("#placeOrder")) {
          document.querySelector("#placeOrder").textContent = "Start your free trial now"
        }

        setTimeout(() => {
          if (document.querySelector("#payments #cards")) {
            if (document.querySelector('label[for="card-number"]')) {
              document.querySelector('label[for="card-number"]').textContent = "Card Number"
            }

            if (document.querySelector(".extra-row.row.mobile-display .exp-label")) {
              document.querySelector(".extra-row.row.mobile-display .exp-label").textContent = "Exp. Date"
            }

            if (document.querySelector(".extra-row.row.mobile-display .CVV2-label")) {
              document.querySelector(".extra-row.row.mobile-display .CVV2-label").textContent = "CVV"
            }

            if (document.querySelector('label[for="postal-code"]')) {
              document.querySelector('label[for="postal-code"]').textContent = "Zip Code *"
            }

            if (document.querySelector('input[name="cardnumber"]')) {
              document.querySelector('input[name="cardnumber"]').placeholder = "1234 5678 9012 3456"
            }

            if (document.querySelector('input[name="cvc"]')) {
              document.querySelector('input[name="cvc"]').placeholder = "***"
            }

            if (document.querySelector('input[name="postal"]')) {
              document.querySelector('input[name="postal"]').placeholder = "000000"
            }
          }
        }, 100)

        document.querySelector("#order-summary-widget .invoice-amount-col #total").insertAdjacentHTML("afterend", totalText)

        // validate form
        if (document.querySelector("form .front .border-bottom.mb-16")) {
          function validationForm(parent) {
            let inputValueName = document.querySelector(`${parent} input[name='fname']`).value.match(/^.{1,30}$/)
            let inputValueLastName = document.querySelector(`${parent} input[name='lname']`).value.match(/^.{1,30}$/)
            // let inputValuePhone = document.querySelector(`${parent} input[name='phone']`).value.match(/(?<=^|\s|>|\;|\:|\))(?:\+|7|8|9|\()[\d\-\(\) ]{8,}\d/)
            let inputValueEmail = document.querySelector(`${parent} input[name='email']`).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)
            let selectValue = document.querySelector(`${parent} select[name='custom_ubiGdEid']`).value

            // name
            if (inputValueName === null) {
              document.querySelector(`${parent} input[name='fname']`).classList.add("error")
            } else {
              document.querySelector(`${parent} input[name='fname']`).classList.remove("error")
            }

            // lname
            if (inputValueLastName === null) {
              document.querySelector(`${parent} input[name='lname']`).classList.add("error")
            } else {
              document.querySelector(`${parent} input[name='lname']`).classList.remove("error")
            }

            // phone
            // if (inputValuePhone === null) {
            //   document.querySelector(`${parent} input[name='phone']`).classList.add("error")
            // } else {
            //   document.querySelector(`${parent} input[name='phone']`).classList.remove("error")
            // }

            // email
            if (inputValueEmail === null) {
              document.querySelector(`${parent} input[name='email']`).classList.add("error")
            } else {
              document.querySelector(`${parent} input[name='email']`).classList.remove("error")
            }

            // select
            if (selectValue === "") {
              document.querySelector(`${parent} select[name='custom_ubiGdEid']`).classList.add("error")
            } else if (selectValue !== "") {
              document.querySelector(`${parent} select[name='custom_ubiGdEid']`).classList.remove("error")
            }

            if (document.querySelector(`${parent} input.error`) == null && document.querySelector(`${parent} select.error`) == null) {
              document.querySelector(".front").style.transform = "rotateY(-180deg)"
              document.querySelector(".back").style.transform = "rotateY(-360deg)"
              document.querySelector(".front").style.zIndex = "0"

              setTimeout(() => {
                if (document.querySelector("#paymentForm .card_box .back label#terms_conditions_checkbox-error")) {
                  document.querySelector("#paymentForm .card_box .back label#terms_conditions_checkbox-error").remove()
                }
              }, 100)
            }
          }
        }

        // observe Form
        const options = {
          childList: true,
          subtree: true,
        }

        let observerForm = new MutationObserver(() => {
          if (document.querySelector("form")) {
            observerForm.disconnect()

            onObserverForm("#placeOrder")
            onObserverForm("#payment-request-button")

            function onObserverForm(selectorBtn) {
              if (document.querySelector(`${selectorBtn}`)) {
                document.querySelector(".back #order-summary-widget")?.after(document.querySelector(`${selectorBtn}`))

                if (selectorBtn === "#placeOrder") {
                  document.querySelector(`${selectorBtn}`).textContent = "Start your free trial now"
                }

                if (!document.querySelector(".quarantee")) {
                  document.querySelector(`.back ${selectorBtn}`).insertAdjacentHTML("afterend", quaranteeBlock)
                }

                // if (document.querySelector(".quarantee")){
                //   if(!document.querySelector('.btn_back')){
                //     document
                //     .querySelector(`.back .quarantee`)
                //     .insertAdjacentHTML("beforebegin", btnBack);
                //   }
                // }
              }
            }

            observerForm.observe(document.querySelector("form"), options)
          }
        })

        observerForm.observe(document.querySelector("form"), options)
        pushDataLayer("loaded")

        clarity("set", "new_free_trial_flow", "variant_1")
      }
    }
  }, 10)
}
