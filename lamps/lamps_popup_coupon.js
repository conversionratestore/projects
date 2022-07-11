let startFunk = setInterval(() => {
  if (document.querySelector("#main-wrapper")) {
    clearInterval(startFunk)

    document.cookie = "login_alt = true"

    // event
    let eventVar = "desktop"

    if (window.innerWidth <= 768) {
      eventVar = "mobile"
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sign up discount ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sign up discount ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let popUpStyle = /*html */ `
    <style>
    #cart-panel .mkt.i-block.text-center {
      display: none;
    }

    body.no-scroll {
      overflow: hidden !important;
    }

    .backdrop_popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(0 0 0 / 65%);
      display: flex;
      overflow-y: auto;
      z-index: 5500000595;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    .backdrop_popup.show {
      opacity: 1;
      pointer-events: auto;
    }

    .backdrop_popup.show .container_popup {
      transform: translateY(0);
    }

    .backdrop_popup .container_popup {
      background: #ffffff;
      max-width: 720px;
      width: calc(100% - 40px);
      margin: 60px auto auto;
      position: relative;
      transform: translateY(-100px);
      transition: all 0.3s ease;
    }

    .btn_close {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }

    .body_popup {
      display: flex;
    }

    .body_popup > div {
      flex: 1;
    }

    .body_popup > div > img{
      height: 100%;
    }

    .body_popup .form_wrap {
      padding: 45px 30px;
      display: none;
      position: relative;
    }

    .body_popup .form_wrap.active {
      display: block;
    }

    .form_wrap > h2 {
      font-family: "Jost", sans-serif;
      font-weight: 600;
      font-size: 28px;
      line-height: 121%;
      color: #286278;
      margin-bottom: 10px;
      text-align: center;
    }

    .form_wrap .coupon_value {
      font-family: "Jost", sans-serif;
      background: #f2f2f2;
      border: 1px dashed #286278;
      border-radius: 4px;
      padding: 12px 0;
      max-width: 148px;
      margin: 0 auto 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 0.5px;
      color: #333333;
    }

    .form_wrap > p {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #333333;
      margin-bottom: 30px;
      text-align: center;
    }

    .form_wrap > p.coupon_var {
      font-size: 14px;
    }

    .form_wrap > p.coupon_var:last-child {
      position: absolute;
      bottom: 44px;
      left: 0;
      width: 100%;
      margin: 0 30px;
      max-width: 300px;
    }

    .form_wrap > p:last-child {
      border-top: 1px solid #e5e5e5;
      padding-top: 10px;
      margin: 0;
    }

    .form_wrap > p > span {
      text-decoration: underline;
      font-weight: 600;
      cursor: pointer;
    }

    .form_wrap > span {
      text-align: center;
      display: block;
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #333333;
      position: relative;
    }

    .form_wrap > span::before,
    .form_wrap > span::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 39%;
      border-bottom: 1px solid #e5e5e5;
    }

    .form_wrap > span::after {
      right: 0;
      left: unset;
    }

    .form_wrap > ul {
      display: flex;
      margin: 15px 0 30px;
      gap: 15px;
      align-items: center;
      justify-content: space-between;
    }

    .form_wrap > ul li {
      display: flex;
      align-items: center;
      width: 30%;
      border: 1px solid #e5e5e5;
      box-shadow: 0px 3px 6px rgba(208, 208, 208, 0.25);
      border-radius: 4px;
      cursor: pointer;
      height: 48px;
      justify-content: center;
      align-items: center;
    }

    .form_wrap button {
      background: #286278;
      box-shadow: 0px 3px 6px rgb(208 208 208 / 50%);
      border-radius: 60px;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Jost", sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 16px;
    }

    .new_form {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }

    .new_form > div {
      position: relative;
      background: #f2f2f2;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      height: 38px;
      display: flex;
      align-items: center;
      padding: 13px 0 13px 12px;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.5px;
      color: #333333;
      width: 100%;
    }

    .new_form > div:nth-child(1),
    .new_form > div:nth-child(2) {
      width: 47.5%;
    }

    .new_form > div.input_error {
      border: 1px solid rgb(255 0 0 / 30%);
    }

    .new_form > div input {
      width: 100%;
    }

    .new_form > div input::placeholder {
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.5px;
      color: #333333;
    }

    .new_form > div label {
      position: absolute;
      top: -2px;
      left: 12px;
      font-size: 8px;
      color: rgb(51 51 51 / 70%);
      opacity: 0;
    }

    .new_form span.text_validation {
      display: none;
      position: absolute;
      top: 38px;
      left: 12px;
      font-size: 10px;
      color: red;
    }

    /*discount_cart */
    .discount_cart,
    .discount_cart.sign_up,
    .discount_pdp,
    .discount_pdp.sign_up {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 32px;
      font-weight: 600;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #ffffff;
      background: #1b963e;
      margin-bottom: -5px;
    }

    .discount_cart{
      height: 44px;
    }

    .discount_cart.sign_up{
      font-size: 14px;
      line-height: 16px;
      background: #286278;
    }

    .discount_pdp,
    .discount_pdp.sign_up {
      border-radius: 8px;
      max-width: 260px;
      margin: 14px 0 0 15px;
    }

    .discount_pdp{
      margin-top: 8px;
      height: 44px;
    }

    .catalog-product-view .product-essential .p-price .final-price.active_sales{
      display: block;
      width: fit-content;
      float: left;
    }

    .catalog-product-view .product-essential .p-price .orig-price{
      margin-left: 10px;
    }

    .discount_pdp.sign_up {
      max-width: 252px;
      font-size: 14px;
      line-height: 16px;
      color: #286278;
      background: unset;
    }

    .discount_cart.sign_up span,
    .discount_pdp.sign_up span {
      text-decoration: underline;
      cursor: pointer;
      margin: 0 0 0 5px;
    }

    .discount_pdp span,
    .discount_cart span{
      margin: 0 0 0 5px;
    }

    .img_lamps_mob {
      display: none;
    }

    .form_wrap  > .error_msg{
      color: #850000;
      background-color: #fcc;
      border-color: #ffb8b8;
      width: 100%;
      display: none;
      font-size: 12px;
      padding: 5px;
    }

    .coupon_price{
      font-weight: 400;
      font-size: 12px;
      line-height: 117%;
      text-decoration-line: line-through;
      color: #A7A7A7;
    }

    .final_coupon_price{
      font-weight: 600;
      font-size: 14px;
      line-height: 1;
      color: #333333;
      display: block;
    }

    @media (max-width: 768px) {
      .form_wrap > .error_msg{
        font-size: 10px;
      }
      
      .body_popup {
        flex-direction: column;
      }

      .body_popup .form_wrap {
        order: 2;
        padding: 30px;
      }

      .body_popup > div:last-child {
        order: 1;
      }

      .img_lamps {
        display: none;
      }

      .img_lamps_mob {
        display: block;
        width: 100%;
        height: 100%;
      }

      .backdrop_popup .container_popup {
        margin: 20px auto;
      }

      .new_form > div:nth-child(1),
      .new_form > div:nth-child(2) {
        width: 47%;
      }

      .form_wrap > p.coupon_var {
        line-height: 171%;
      }

      .body_popup .form_wrap:nth-child(2) button {
        margin-bottom: 30px;
      }

      .form_wrap > p.coupon_var:last-child {
        position: unset;
        margin: 0;
      }

      .discount_pdp, 
      .discount_pdp.sign_up{
        margin: 14px 0 0 6px;
      }

      .discount_pdp {
          margin-top: 8px;
      }
    }

    @media (max-width: 320px) {
      .new_form > div:nth-child(1),
      .new_form > div:nth-child(2) {
        width: 46.5%;
      }

      .form_wrap > h2 {
        font-size: 22px;
      }

      .form_wrap > p {
        font-size: 12px;
      }

      .form_wrap > ul {
        gap: 10px;
      }

      .form_wrap > ul li {
        height: 42px;
      }

      .form_wrap > ul li img {
        width: 100%;
        max-width: 45px;
      }

      .new_form > div input::placeholder {
        font-size: 10px;
      }

      .form_wrap > span::before,
      .form_wrap > span::after {
        width: 35%;
      }

      .form_wrap > p.coupon_var {
        font-size: 10px;
      }
    }

    @media (max-width: 280px) {
      .form_wrap > h2 {
        font-size: 19px;
      }

      .form_wrap > p {
        font-size: 10px;
      }

      .new_form > div:nth-child(1),
      .new_form > div:nth-child(2) {
        width: 45.7%;
      }

      .form_wrap > span::before,
      .form_wrap > span::after {
        width: 33%;
      }

      .form_wrap > p.coupon_var {
        font-size: 9px;
      }
    }
    </style>
    `

    let popUp = /*html */ `
    <div class="backdrop_popup">
        <div class="container_popup">
            <svg class="btn_close" width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_932_840)">
              <path d="M14.5594 16.9406C15.1453 17.5266 15.1453 18.4758 14.5594 19.0617C14.2688 19.3547 13.8844 19.5 13.5 19.5C13.1156 19.5 12.7322 19.3535 12.4397 19.0606L7.5 14.1234L2.56078 19.0594C2.26781 19.3547 1.88391 19.5 1.5 19.5C1.11609 19.5 0.732656 19.3547 0.439453 19.0594C-0.146484 18.4734 -0.146484 17.5242 0.439453 16.9383L5.38008 11.9977L0.439453 7.05939C-0.146484 6.47345 -0.146484 5.52423 0.439453 4.93829C1.02539 4.35236 1.97461 4.35236 2.56055 4.93829L7.5 9.88126L12.4406 4.94064C13.0266 4.3547 13.9758 4.3547 14.5617 4.94064C15.1477 5.52657 15.1477 6.47579 14.5617 7.06173L9.62109 12.0024L14.5594 16.9406Z" fill="#A7A7A7"/>
              </g>
              <defs>
              <clipPath id="clip0_932_840">
              <rect width="15" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>

            <div class="body_popup">

            </div>
        </div>
    </div>
    `

    let bodyPopup = /*html */ `
    <div class="form_wrap active">
      <h2>Save 15% on today’s order</h2>
      <p>Sign up below and get instant savings on items over $75</p>
      <p class="error_msg">An account is already registered with this email address.</p>
      <div class="new_form">
        <div>
          <input type="text" id="firstName" placeholder="First Name" name="firstName" required="required" autocomplete="off"> 
          <span class="text_validation">This value is required.</span>
          <label for="firstName">First Name</label>
        </div>
        <div>
          <input type="text" id="lastName" placeholder="Last Name" name="lastName" required="required" autocomplete="off"> 
          <span class="text_validation">This value is required.</span>
          <label for="lastName">Last Name</label>
        </div>
        <div>
          <input type="email" id="registerEmail" placeholder="Email address" name="registerEmail" required="required"> 
          <span class="text_validation">This value is required.</span>
          <label for="registerEmail">Email address</label>
        </div>
        <div>
          <input minlength="7" maxlength="24" type="password" id="registerPassword" name="registerPassword" placeholder="Password" autocomplete="off" required="required"> 
          <span class="text_validation">You need to enter at least 7 characters. <br> This value length is invalid. It should be between 7 and 24 characters long.</span>
          <label for="registerPassword">Password</label>
        </div>
        <button id="btnRegisterSubmit">Sign Up</button>
      </div>
      <span>or with</span>
      <ul>
        <li class="fb">
          <img src="https://conversionratestore.github.io/projects/lamps/img/fb.png" alt="logo Facebook">
        </li>
        <li class="google">
          <img src="https://conversionratestore.github.io/projects/lamps/img/google.png" alt="logo Google">
        </li>
        <li class="amazon">
          <img src="https://conversionratestore.github.io/projects/lamps/img/amazon.png" alt="logo Amazon">
        </li>
      </ul>
      <p>Already have an account? <span>Login</span></p>
    </div>
    
    <div class="form_wrap">
      <h2>Thank you!</h2>
      <p>Here’s a 15% off Coupon Code:</p>
      <div class="coupon_value">WLS1-QFT5</div>
      <p class="coupon_var">It will be <b>automatically applied</b> at checkout*</p>
      <button id="continueBtn">Continue Shopping </button>
      <p class="coupon_var">*Brand restrictions apply. Excludes closeout items. Cannot be combined with any other sales or promotions.</p>
    </div>
    <div>
      <img class="img_lamps" src="https://conversionratestore.github.io/projects/lamps/img/lamps.jpg" alt="lamps">
      <img class="img_lamps_mob" src="https://conversionratestore.github.io/projects/lamps/img/lamps_mob.jpg" alt="lamps">
    </div>
    `

    let discountCart = /*html */ `
    <div class="discount_cart">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49977 14.25L11.6248 10.125M9.74977 16.5L11.6248 14.625M3.31027 12.4395L11.5603 4.1895C11.8415 3.90818 12.223 3.75008 12.6208 3.75H18.7498C19.1476 3.75 19.5291 3.90804 19.8104 4.18934C20.0917 4.47064 20.2498 4.85218 20.2498 5.25V11.379C20.2497 11.7768 20.0916 12.1583 19.8103 12.4395L11.5603 20.6895C11.279 20.9707 10.8975 21.1287 10.4998 21.1287C10.102 21.1287 9.72057 20.9707 9.43927 20.6895L3.31027 14.5605C3.02907 14.2792 2.87109 13.8977 2.87109 13.5C2.87109 13.1023 3.02907 12.7208 3.31027 12.4395V12.4395Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.25 7.5C17.25 7.69891 17.171 7.88968 17.0303 8.03033C16.8897 8.17098 16.6989 8.25 16.5 8.25C16.3011 8.25 16.1103 8.17098 15.9697 8.03033C15.829 7.88968 15.75 7.69891 15.75 7.5C15.75 7.30109 15.829 7.11032 15.9697 6.96967C16.1103 6.82902 16.3011 6.75 16.5 6.75C16.6989 6.75 16.8897 6.82902 17.0303 6.96967C17.171 7.11032 17.25 7.30109 17.25 7.5Z" fill="white"/>
      </svg>  
      <span>15% discount applied</span>
    </div>
    `

    let discountCartSignUp = /*html */ `
    <div class="discount_cart sign_up">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49977 14.25L11.6248 10.125M9.74977 16.5L11.6248 14.625M3.31027 12.4395L11.5603 4.1895C11.8415 3.90818 12.223 3.75008 12.6208 3.75H18.7498C19.1476 3.75 19.5291 3.90804 19.8104 4.18934C20.0917 4.47064 20.2498 4.85218 20.2498 5.25V11.379C20.2497 11.7768 20.0916 12.1583 19.8103 12.4395L11.5603 20.6895C11.279 20.9707 10.8975 21.1287 10.4998 21.1287C10.102 21.1287 9.72057 20.9707 9.43927 20.6895L3.31027 14.5605C3.02907 14.2792 2.87109 13.8977 2.87109 13.5C2.87109 13.1023 3.02907 12.7208 3.31027 12.4395V12.4395Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.25 7.5C17.25 7.69891 17.171 7.88968 17.0303 8.03033C16.8897 8.17098 16.6989 8.25 16.5 8.25C16.3011 8.25 16.1103 8.17098 15.9697 8.03033C15.829 7.88968 15.75 7.69891 15.75 7.5C15.75 7.30109 15.829 7.11032 15.9697 6.96967C16.1103 6.82902 16.3011 6.75 16.5 6.75C16.6989 6.75 16.8897 6.82902 17.0303 6.96967C17.171 7.11032 17.25 7.30109 17.25 7.5Z" fill="white"/>
      </svg> 
      <span data-sign="signUup">get 15% off with a coupon</span>
    </div>
    `

    let discountPdp = /*html */ `
    <div class="discount_pdp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49977 14.25L11.6248 10.125M9.74977 16.5L11.6248 14.625M3.31027 12.4395L11.5603 4.1895C11.8415 3.90818 12.223 3.75008 12.6208 3.75H18.7498C19.1476 3.75 19.5291 3.90804 19.8104 4.18934C20.0917 4.47064 20.2498 4.85218 20.2498 5.25V11.379C20.2497 11.7768 20.0916 12.1583 19.8103 12.4395L11.5603 20.6895C11.279 20.9707 10.8975 21.1287 10.4998 21.1287C10.102 21.1287 9.72057 20.9707 9.43927 20.6895L3.31027 14.5605C3.02907 14.2792 2.87109 13.8977 2.87109 13.5C2.87109 13.1023 3.02907 12.7208 3.31027 12.4395V12.4395Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.25 7.5C17.25 7.69891 17.171 7.88968 17.0303 8.03033C16.8897 8.17098 16.6989 8.25 16.5 8.25C16.3011 8.25 16.1103 8.17098 15.9697 8.03033C15.829 7.88968 15.75 7.69891 15.75 7.5C15.75 7.30109 15.829 7.11032 15.9697 6.96967C16.1103 6.82902 16.3011 6.75 16.5 6.75C16.6989 6.75 16.8897 6.82902 17.0303 6.96967C17.171 7.11032 17.25 7.30109 17.25 7.5Z" fill="white"/>
      </svg>  
      <span>15% discount applied on cart</span>
    </div>
    `

    let discounPdpSignUp = /*html */ `
    <div class="discount_pdp sign_up">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49977 14.25L11.6248 10.125M9.74977 16.5L11.6248 14.625M3.31027 12.4395L11.5603 4.1895C11.8415 3.90818 12.223 3.75008 12.6208 3.75H18.7498C19.1476 3.75 19.5291 3.90804 19.8104 4.18934C20.0917 4.47064 20.2498 4.85218 20.2498 5.25V11.379C20.2497 11.7768 20.0916 12.1583 19.8103 12.4395L11.5603 20.6895C11.279 20.9707 10.8975 21.1287 10.4998 21.1287C10.102 21.1287 9.72057 20.9707 9.43927 20.6895L3.31027 14.5605C3.02907 14.2792 2.87109 13.8977 2.87109 13.5C2.87109 13.1023 3.02907 12.7208 3.31027 12.4395V12.4395Z" stroke="#286278" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.25 7.5C17.25 7.69891 17.171 7.88968 17.0303 8.03033C16.8897 8.17098 16.6989 8.25 16.5 8.25C16.3011 8.25 16.1103 8.17098 15.9697 8.03033C15.829 7.88968 15.75 7.69891 15.75 7.5C15.75 7.30109 15.829 7.11032 15.9697 6.96967C16.1103 6.82902 16.3011 6.75 16.5 6.75C16.6989 6.75 16.8897 6.82902 17.0303 6.96967C17.171 7.11032 17.25 7.30109 17.25 7.5Z" fill="#286278"/>
      </svg>
      <span data-sign="signUup">get 15% off with a coupon</span>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", popUpStyle)
    document.body.insertAdjacentHTML("beforeend", popUp)
    document.querySelector(".body_popup")?.insertAdjacentHTML("afterbegin", bodyPopup)

    renderToPdp()
    renderToCart()

    // render text on cart
    function renderToCart() {
      if (document.querySelector("#cart-panel #minicart-items")) {
        document.querySelectorAll("#cart-panel #minicart-items > div").forEach((el) => {
          let dataProduct = JSON.parse(el.getAttribute("data-product"))
          let salesProduct = dataProduct.salesproduct
          let dataLayerCustomer = window.dataLayer

          if (salesProduct) {
            if (document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent === "Account") {
              dataLayerCustomer.forEach((item) => {
                let customer = item.customer
                if (customer) {
                  for (key in customer) {
                    if (customer[key] === "General") {
                      if (!el.querySelector(".discount_cart")) {
                        console.log(customer[key])
                        activateCoupon()
                        el.insertAdjacentHTML("beforeend", discountCart)
                        el.querySelector(".final-price .price").classList.add("coupon_price")
                        el.querySelector(".col-6.mc-price.mt-2").insertAdjacentHTML("afterbegin", `<span class="final_coupon_price"></span>`)
                        if (el.querySelector(".final_coupon_price")) {
                          let newPrice = el.querySelector(".final-price .price.coupon_price").textContent.slice(1).replace(/,/g, "")
                          console.log(typeof newPrice)

                          let newPriceCoupon = +newPrice * 0.85

                          el.querySelector(".final_coupon_price").textContent = `$${newPriceCoupon.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}`
                        }
                        // startCoupon()
                      }
                    }
                  }
                }
              })
            } else {
              if (!el.querySelector(".discount_cart.sign_up")) {
                el.insertAdjacentHTML("beforeend", discountCartSignUp)
              }
              onClickSignUp("#cart-panel")
            }
          }
        })
      }
    }

    // render text on cart
    function renderToPdp() {
      if (document.querySelector("#main-wrapper #item-details")) {
        let dataProduct = JSON.parse(document.querySelector("#main-wrapper #item-details").getAttribute("data-product"))
        let salesProduct = dataProduct.salesproduct
        let dataLayerCustomer = window.dataLayer

        if (salesProduct) {
          if (document.querySelector(".catalog-product-view .product-essential .p-price .final-price")) {
            if (!document.querySelector(".catalog-product-view .product-essential .p-price .final-price").classList.contains("active_sales")) {
              document.querySelector(".catalog-product-view .product-essential .p-price .final-price").classList.add("active_sales")
            }
          }

          if (document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent === "Account") {
            dataLayerCustomer.forEach((item) => {
              let customer = item.customer
              if (customer) {
                for (key in customer) {
                  if (customer[key] === "General") {
                    if (!document.querySelector(".discount_pdp")) {
                      console.log(customer[key])
                      document.querySelector(".catalog-product-view .product-essential .p-price .final-price.mt-3")?.insertAdjacentHTML("afterend", discountPdp)
                    }
                  }
                }
              }
            })
          } else {
            if (!document.querySelector(".discount_pdp.sign_up")) {
              document.querySelector(".catalog-product-view .product-essential .p-price .final-price.mt-3")?.insertAdjacentHTML("afterend", discounPdpSignUp)

              onClickSignUp("#main-wrapper")
            }
          }
        }
      }
    }

    // startCoupon()
    // coupon activate
    // function startCoupon() {
    //   const startCoupon = setInterval(() => {
    //     const couponInput = document.querySelector(".inner-panel .i-block #sidebar-discount-coupon-form input")
    //     if (couponInput) {
    //       clearInterval(startCoupon)

    //       if (document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent === "Account") {
    //         if (couponInput.value !== "WLS1-QFT5") {
    //           couponInput.value = "WLS1-QFT5"
    //           document.querySelector(".inner-panel .i-block #submit-coupon")?.click()
    //         }
    //       }
    //     }
    //   }, 1000)
    // }

    //new_customer_coupon
    function activateCoupon() {
      if (document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent === "Account") {
        const cookieName = "new_customer_coupon"
        let cookieValue = "true"
        let myDate = new Date()
        myDate.setMonth(myDate.getMonth() + 12)
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate + ";domain=.www.lamps.com;path=/"
        // document.cookie = `${cookieName}=${cookieValue};expires=-1;domain=.www.lamps.com;path=/`
      }
    }

    onClickLogout()
    // onClick logout
    function onClickLogout() {
      if (document.querySelector("#btn-logout")) {
        document.querySelector("#btn-logout").addEventListener("click", function () {
          setTimeout(() => {
            document.cookie = "new_customer_coupon" + "=" + "" + ";max-age=" + -1 + ";domain=.www.lamps.com;path=/"
          }, 1000)
        })
      }
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document.querySelector("#main-wrapper")) {
        observer.disconnect()
        renderToPdp()
        onClickLogout()

        observer.observe(document.querySelector("#main-wrapper"), {
          childList: true,
          subtree: true,
        })
      }
    })

    observer.observe(document.querySelector("#main-wrapper"), {
      childList: true,
      subtree: true,
    })

    let observerCart = new MutationObserver((muts) => {
      if (document.querySelector("#cart-panel")) {
        observerCart.disconnect()
        renderToCart()
        onClickLogout()

        observerCart.observe(document.querySelector("#cart-panel"), {
          childList: true,
          subtree: true,
        })
      }
    })

    observerCart.observe(document.querySelector("#cart-panel"), {
      childList: true,
      subtree: true,
    })

    // click on SIGN UP
    function onClickSignUp(parent) {
      document.querySelectorAll(`${parent} [data-sign]`).forEach((el) => {
        if (!el.getAttribute("data-click")) {
          el.addEventListener("click", function () {
            if (parent === "#main-wrapper") {
              pushDataLayer("15% off link on PDP clicked")
            }

            if (parent === "#cart-panel") {
              pushDataLayer("15% off button on Cart clicked")
            }

            document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"]').click()
          })
        }
        el.setAttribute("data-click", "1")
      })
    }

    // TO show POPUP
    showFirstPopup()
    function showFirstPopup() {
      setTimeout(() => {
        if (document.querySelector("#main-wrapper #item-details")) {
          let dataProduct = JSON.parse(document.querySelector("#main-wrapper #item-details")?.getAttribute("data-product"))
          let salesProduct = dataProduct.salesproduct

          if (
            !document.querySelector("#overlay") &&
            !sessionStorage.getItem("successSign") &&
            salesProduct &&
            document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent !== "Account"
          ) {
            showPopup()
          }
        }
      }, 3000)
    }

    document.querySelector(".btn_close").addEventListener("click", function () {
      if (this.getAttribute("successCoupon") || document.querySelector(".body_popup .form_wrap:nth-child(2)").classList.contains("active")) {
        pushDataLayer("TY after registration pop up closed by X")
      } else {
        pushDataLayer("Registration pop up closed by X")
      }

      hidePopup()
    })

    document.querySelector(".backdrop_popup").addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_popup")) {
        pushDataLayer("Registration pop up closed by backdrop")
        hidePopup()
      }
    })

    //show popup
    function showPopup() {
      document.querySelector(".backdrop_popup").classList.add("show")
      document.body.style.overflow = "hidden"
    }

    //hide popup
    function hidePopup() {
      document.querySelector(".backdrop_popup").classList.remove("show")
      document.body.style.overflow = "unset"
    }

    // form
    if (document.querySelector(".form_wrap > ul")) {
      document.querySelectorAll(".form_wrap > ul li").forEach((el) => {
        el.addEventListener("click", () => {
          if (el.classList.contains("fb")) {
            document.querySelector(".i-block.m-0 .fab.fa-facebook").closest("a").click()
          }

          if (el.classList.contains("google")) {
            document.querySelector(".i-block.m-0 .fab.fa-google").closest("a").click()
          }

          if (el.classList.contains("amazon")) {
            document.querySelector(".i-block.m-0 .fab.fa-amazon").closest("a").click()
          }
        })
      })
    }

    document.querySelector(".form_wrap > p > span")?.addEventListener("click", () => {
      hidePopup()
      document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"]')?.click()
      document.querySelector("#account-panel .content-panel #btn-login-show")?.click()
    })

    document.querySelector(".form_wrap button#continueBtn")?.addEventListener("click", () => {
      pushDataLayer("Continue Shopping clicked")
      hidePopup()
      window.location.reload()
    })

    document.querySelector(".form_wrap button#btnRegisterSubmit")?.addEventListener("click", () => {
      validationForm(`.new_form`)
    })

    let newPopup = setInterval(() => {
      if (document.querySelector('.header-container .header-actions .action-links [data-account-trigger="true"] span').textContent === "Account") {
        if (sessionStorage.getItem("successCoupon")) {
          clearInterval(newPopup)
          document.querySelectorAll(".body_popup .form_wrap")[1].classList.add("active")
          document.querySelectorAll(".body_popup .form_wrap")[0].classList.remove("active")
          showPopup()
          if (sessionStorage.getItem("successCoupon")) {
            sessionStorage.removeItem("successCoupon")
          }
        }
      }
    }, 10)

    // validate form
    function validationForm(parent) {
      let inputValueName = document.querySelector(`${parent} input[name='firstName']`).value.match(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)
      let inputLastName = document.querySelector(`${parent} input[name='lastName']`).value.match(/^[а-яА-ЯёЁa-zA-Z0-9]+$/)
      let inputValueEmail = document.querySelector(`${parent} input[name='registerEmail']`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

      let inputValuePassword = document.querySelector(`${parent} input[name='registerPassword']`).value.match(/^.{7,24}$/)

      // first_name
      if (inputValueName === null) {
        document.querySelector(`${parent} input[name='firstName']`)?.closest("div").classList.add("input_error")
        document.querySelector(`${parent} input[name='firstName'] + .text_validation`).style.display = "block"
      } else {
        document.querySelector(`${parent} input[name='firstName']`)?.closest("div").classList.remove("input_error")
        document.querySelector(`${parent} input[name='firstName'] + .text_validation`).style.display = "none"
      }

      // dog_name
      if (inputLastName === null) {
        document.querySelector(`${parent} input[name='lastName']`)?.closest("div").classList.add("input_error")
        document.querySelector(`${parent} input[name='lastName'] + .text_validation`).style.display = "block"
      } else {
        document.querySelector(`${parent} input[name='lastName']`)?.closest("div").classList.remove("input_error")
        document.querySelector(`${parent} input[name='lastName'] + .text_validation`).style.display = "none"
      }

      if (inputValueEmail === null) {
        document.querySelector(`${parent} input[name='registerEmail']`).closest("div").classList.add("input_error")
        document.querySelector(`${parent} input[name='registerEmail'] + .text_validation`).style.display = "block"
      } else {
        document.querySelector(`${parent} input[name='registerEmail']`).closest("div").classList.remove("input_error")
        document.querySelector(`${parent} input[name='registerEmail'] + .text_validation`).style.display = "none"
      }

      if (inputValuePassword === null) {
        document.querySelector(`${parent} input[name='registerPassword']`).closest("div").classList.add("input_error")
        document.querySelector(`${parent} input[name='registerPassword'] + .text_validation`).style.display = "block"
        document.querySelector(".form_wrap button").style.marginTop = "30px"
      } else {
        document.querySelector(`${parent} input[name='registerPassword']`).closest("div").classList.remove("input_error")
        document.querySelector(`${parent} input[name='registerPassword'] + .text_validation`).style.display = "none"
        document.querySelector(".form_wrap button").style.marginTop = "0px"
      }

      if (document.querySelector(`${parent} > div.input_error`) === null) {
        document.querySelector("#signup-email").click()
        document.querySelector("#first-name").value = document.querySelector(`${parent} input[name='firstName']`).value
        document.querySelector("#last-name").value = document.querySelector(`${parent} input[name='lastName']`).value
        document.querySelector("#register-email").value = document.querySelector(`${parent} input[name='registerEmail']`).value
        document.querySelector("#register-password").value = document.querySelector(`${parent} input[name='registerPassword']`).value

        postForm(
          document.querySelector(`${parent} input[name='registerEmail']`).value,
          document.querySelector(`${parent} input[name='registerPassword']`).value,
          document.querySelector(`${parent} input[name='firstName']`).value,
          document.querySelector(`${parent} input[name='lastName']`).value
        )
      }
    }

    function postForm(email, passwordVal, firstName, lastName) {
      let form = new FormData()

      form.append("form_key", window.form_key)
      form.append("submit_type", "register")
      form.append("emailAddress", email)
      form.append("password", passwordVal)
      form.append("firstname", firstName)
      form.append("lastname", lastName)

      fetch(`https://www.lamps.com/l-c/ajax/`, {
        body: form,
        method: "POST",
      })
        .then((res) => {
          return res.status
        })
        .then((data) => {
          if (data === 403) {
            document.querySelector(".form_wrap  > .error_msg").style.display = "block"
          } else {
            document.querySelector(".form_wrap  > .error_msg").style.display = "none"
            pushDataLayer("Sign Up clicked")
            document.querySelector(".btn_close").setAttribute("successCoupon", "true")
            document.querySelector("#btn-register-submit").click()
            sessionStorage.setItem("successCoupon", true)
            sessionStorage.setItem("successSign", true)
            hidePopup()
          }
        })
        .catch((err) => {
          console.log("Failed fetch ", err)
        })
    }

    pushDataLayer("loaded")
    clarity("set", `signup_discount_${eventVar}`, "variant_1")
  }
}, 10)
