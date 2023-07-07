// -------------------------------------
// CONSTANTS
// -------------------------------------
const DEVICE = screen.width < 768 ? 'mobile' : 'desktop'
const WAIT_INTERVAL_TIMEOUT = 100
const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/novaalab/img'

// Function to format time as "MM:SS"
const formatTime = (time) => {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0')
  const seconds = Math.floor(time % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

// Calculate scroll depth
const getScrollDepth = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  const totalScrollableDistance = scrollHeight - clientHeight
  const scrolledPercentage = (scrollTop / totalScrollableDistance) * 100

  return Math.round(scrolledPercentage)
}

// Function to start the timer
const startTimer = () => {
  let timerName = window.location.pathname.includes('cart') ? 'timerStart' : 'timerExclusiveStart'
  let startTime = sessionStorage.getItem(timerName)
  let elapsedTime = 0

  // If there is no start time in session storage, start a new session
  if (!startTime) {
    startTime = new Date().getTime()
    sessionStorage.setItem(timerName, startTime)
  } else {
    startTime = parseInt(startTime, 10)
    const currentTime = new Date().getTime()
    elapsedTime = Math.floor((currentTime - startTime) / 1000)
  }

  // Calculate remaining time
  const totalTime = 15 * 60 // 15 minutes in seconds
  let remainingTime = Math.max(totalTime - elapsedTime, 0)

  // Update the timer display
  const timerElement = document.getElementById('timer')
  timerElement.textContent = formatTime(remainingTime)

  // Start the countdown
  const countdown = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(countdown)
      timerElement.textContent = '00:00'

      // Timer has ended, perform any necessary actions here
    } else {
      remainingTime--
      timerElement.textContent = formatTime(remainingTime)
    }
  }, 1000)
}

const sendGAEventNew = (eventName, eventDesc, eventType, eventLoc) => { // Send a Google Analytics event
  let eventData = {}

  if (eventName === 'loaded') {
    eventData = {
      'event': 'event-to-ga4',
      'event_name': eventName,
    }
  } else {
    eventData = {
      'event': 'event-to-ga4',
      'event_name': eventName,
      'event_desc': eventDesc,
      'event_type': eventType,
      'event_loc': eventLoc
    }
  }

  window.dataLayer = window.dataLayer || []
  dataLayer.push(eventData)
  console.log(eventData)
}

const checkVisibility = (el, eventName, eventDesc, eventType, eventLoc) => {
  if (DEVICE === 'desktop') {
    const hoverHandler = function () {
      // Code to execute when the element is hovered
      sendGAEventNew(eventName, eventDesc, eventType, eventLoc)

      // Remove the event listener after it has been executed
      el.removeEventListener("mouseenter", hoverHandler)
    }

    el.addEventListener("mouseenter", hoverHandler)
  } else {
    let timer

    const config = {
      root: null,
      threshold: 0.6
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            sendGAEventNew(eventName, eventDesc, eventType, eventLoc)
            observer.disconnect()
          }, 3000)
        } else {
          clearTimeout(timer)
        }
      })
    }, config)

    observer.observe(el)
  }
}

const removeCartItem = async (variantId) => {
  const response = await fetch("/cart/change.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: variantId,
      quantity: 0,
    }),
  })
  if (!response.ok) {
    throw new Error(`Failed to remove item from cart. ${response.status} ${response.statusText}`)
  }
  // Reload or update the cart display on the page
  // Example: location.reload();
}

const addItem = async (title, id, removeThisId) => {
  if (removeThisId) {
    await removeCartItem(String(removeThisId))

    let name = 'Novaa light Pad'

    if (removeThisId === 32854816784438) {
      name = 'Novaa light Pro'
    }

    sendGAEventNew('exp_bundle_cart_remove_product', `Remove - ${name}`, 'Event', 'Checkout')
  }

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

  sendGAEventNew('exp_bundle_cart_bundle_pc', `Add to cart - ${title}`, 'Button', 'Bundle up and save section')

  location.reload()
}

const handleAddToCart = async (id, name) => {
  // document.querySelectorAll('.upsellrow .btn-default a')[index].click()

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

  sendGAEventNew('exp_bundle_cart_also_like_add', `Add to cart - ${name}`, 'Button', 'You may also like')

  location.reload()
}

const waitForTimer = setInterval(() => {
  if (document.querySelector('#timer')) {
    clearInterval(waitForTimer)

    startTimer()
  }
}, WAIT_INTERVAL_TIMEOUT)

if (window.location.pathname.includes('cart')) {
  let isCompleted

  // 40322897838134 // "The Novaa Deep Healing Therapy Pad" "/products/novaa-light-pad-powerful-red-light-therapy-at-home?variant=40322897838134"
  // 40365298679862 //"Novoral Care Pro - Oral Care at home - Complete Oral Care" "/products/novaa-oral-care-gums-periodontal-treatment?variant=40365298679862"
  // 40156488761398 // "Novaa Extra-Strength Healing Laser - Professional-grade Laser Home Therapy" "/products/laser-red-light-therapy?variant=40156488761398"
  // 32854816784438 // "Novaa Light Pro - Limited sale price - 1 Novaa Light Pro" // "/products/novaa-light-pro-red-light-laser-therapy-device?variant=32854816784438"
  // 39758302806070 // "Novaa Deep Healing Pad + Novaa Light Pro" 
  // 39782656311350 "The Novaa Deep Healing Pad for Knee"
  // 39737414484022  "Novaa Deep Healing Pad for Knee Pain"

  const bundles = {
    40322897838134: [39758302806070, "novaa-knee-deep-healing-therapy™-novaa-light-pro™", '$800.00', '$399.90', '$400.10'],
    40365298679862: [32854816784438, 'novaa-light-pro-red-light-laser-therapy-device', '$299.90', '$149.90', '$150.00'],
    40156488761398: [40365298679862, 'novaa-oral-care-gums-periodontal-treatment', '$199.90', '$129.90', '$70.00'],
    32854816784438: [39758302806070, "novaa-knee-deep-healing-therapy™-novaa-light-pro™", '$800.00', '$399.90', '$400.10'],
    39758302806070: [40365298679862, 'novaa-oral-care-gums-periodontal-treatment', '$199.90', '$129.90', '$70.00'],
    39782656311350: [32854816784438, 'novaa-light-pro-red-light-laser-therapy-device', '$299.90', '$149.90', '$150.00'],
    39737414484022: [32854816784438, 'novaa-light-pro-red-light-laser-therapy-device', '$299.90', '$149.90', '$150.00'],
  }

  let discountShopacado = {
    40365298679862: { //Novaa Oral Care Pro (varinat id)
      'nameOffer': 'Oral Care Pro - Black Friday Bundle discount',
      'details': ['2/$99.90', '3/$89.90']
    },
    40156488761398: { //Novaa Extra-Strength Healing Laser
      'nameOffer': 'Laser - Black Friday Bundle discount',
      'details': ['2/$269.90', '3/$229.90']
    },
    32854816784438: { //Novaa Light Pro™ - Limited sale price
      'nameOffer': 'Light Pro - Black Friday Bundle discount',
      'details': ['2/$129.90', '3/$99.90']
    },
    // '': { //The Novaa Deep Healing Therapy Pad™
    //   'nameOffer': 'Deep Healing Pad for Knee - Black Friday Bundle discount',
    //   'details': ['2/239.90', '3/199.90']
    // },
    40322897838134: { //The Novaa Deep Healing Therapy Pad™
      'nameOffer': 'Deep Healing Pad - Black Friday Bundle discount',
      'details': ['2/$249.90', '3/$229.90']
    },
    39413432909878: { //Novaa Deep Healing Pad™ for professionals
      'nameOffer': 'RLT Pad for Professionals - Volume Discount',
      'details': ['3/$209.90', '5/$199.90']
    },
    33084012134454: { //Novaa Light Pro™ - for Professionals
      'nameOffer': 'RLT HH for Professionals - Volume Discount',
      'details': ['5/$99.90', '10/$94.90']
    }
  }

  const style = /*html*/`
  <style>


  .may_like_only_inner {
    max-width: 792px;
    margin: 0 auto;
    padding-bottom: 36px;
  }

  .may_like_only_inner .may_like {
    margin: 0 !important;
    box-shadow: none !important;
    padding-top: 16px;
  }

  .p10 {
    padding: 10px;
  }

  p.bundle_special_img {
    width: 120px;
    height: 120px;
    padding: 10px;
  }

  p.bundle_special_img img {
    width: auto;
    height: auto;
  }

  .bundle_special {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .bundle_special > div {
    flex-shrink: 0;
  }

  .splitit_fixed.hide_footer {
      bottom: -100%;
    }

    #custom_cart .garunteesec {
      margin: 16px 20px;
    }


    #custom_cart .garunteetext {
      margin-top: 10px;
    }

     #appikon-notification-bar,
    #PageContainer main {
      display: none !important;
    } 

    /* Chrome, Safari, Edge, Opera */
    #custom_cart input[type=number]::-webkit-outer-spin-button,
    #custom_cart input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none; 
      margin: 0;
    }

    /* Firefox */
     #custom_cart input[type=number] {
      -moz-appearance: textfield;
    }

    /*

    html.fixed_body,
    html.gemapp.video.fixed_body {
      width: 100%;
      overflow: hidden !important;
    } */

    /* #custom_cart {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999999999;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      font-family: 'Urbanist', sans-serif;
      color: #212121;
      font-size: 16px;
      line-height: 16px;
    } */

    /* #custom_cart.loading:after {
      content: 'loading...';
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 351px;
      background: rgba(255, 255, 255, 0.8);
      height: 100vh;
      color: #000;
      z-index: 99;
    }

    #custom_cart.active {
      opacity: 1;
      pointer-events: auto;
    }

    #custom_cart.active>.container {
      transform: translateX(0);
    }

    #custom_cart_close {
      cursor: pointer;
    }

    #custom_cart_close:hover path {
      fill: #212121;
    } */

    #custom_cart p,
    #custom_cart ul {
      margin: 0;
      list-style-type: none;
    }

    #custom_cart>.container {
      width: 100%;
      max-width: 351px;
      background: #FFFFFF;
      height: 100vh;
      overflow-y: auto;
      margin: 0 0 0 auto;
      padding: 0;
      transition: all 0.3s ease;
      transform: translateX(300px);
    }

    .slide_in__timer {
      text-align: center;
      padding: 15px;
      background: #E5E5FF;
    }

    .slide_in__timer p {
      color: #212121;
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
    }

    .slide_in__header {
      padding: 16px 20px;
      background: #F5F5F5;
    }

    .slide_in__header p {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #0A0A0A;
    }

    /* .slide_in__header {
      border-bottom: 1px solid #F5F5F5;
      padding: 15px 20px;
      position: sticky;
      top: 0;
      background-color: #fff;
      z-index: 2;
      font-weight: 600;
      color: #0A0A0A
    }

    .slide_in__header p {
      position: relative;
    }

    .slide_in__header .loading:before, */
    
    .btn-purple.loading_discount:before {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      width: 19px;
      height: 19px;
      background: url(https://conversionratestore.github.io/projects/novaalab/img/loading.gif) no-repeat center / 100%;
    }

    .btn-purple.loading_discount:before {
      left: auto;
      right: calc(100% + 5px);
    }

    .slide_in__products {
      padding: 20px;
    }

    .btn-purple {
      background: radial-gradient(90.92% 2726% at 2.15% 56%, #691BEA 0%, #9E41EF 100%) !important;
      border-radius: 4px;
      font-family: 'Urbanist';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 36px;
      text-align: center;
      letter-spacing: 1px;
      color: #FFFFFF;
      border: none;
      width: 100%;
      display: block;
      position: relative;
    }

    .btn-purple:hover,
    .btn-purple:active {
      background: #691BEA;
      color: #FFFFFF;
    }

    .btn-purple[disabled] {
      background: radial-gradient(90.92% 2726% at 2.15% 56%, #691BEA 0%, #9E41EF 100%) !important;
      opacity: 0.5 !important;
      cursor: no-drop;
    }

    /* empty */
    .slide_in__empty {
      border: 1px dashed #E2E2E2;
      border-radius: 6px;
      padding: 20px;
      font-family: 'Urbanist';
      font-style: normal;
      text-align: center;
      color: #474444;
      margin-bottom: 20px;
    }

    .slide_in__empty p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      padding: 0 10px;
    }

    .slide_in__empty p.name {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
    }

    .slide_in__empty .btn-purple {
      font-size: 18px;
      line-height: 50px;
      margin-top: 16px;
    }

    /* product item*/
    .item_product {
      font-family: 'Urbanist';
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 22px;
      font-style: normal;
      font-weight: 500;
      width: 100%;
    }

    .item_product:last-child {
      margin: 0;
    }

    .item_product__name {
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: #212121;
    }

    .slide_in__message[hidden],
    .slide_in__message[hidden="true"] {
      display: none !important;
    }

    .item_product>div:not(.slide_in__message)>div {
      width: calc(100% - 134px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .item_product img {
      width: 120px;
      height: 120px;
      margin-right: 12px;
      border-radius: 6px;
      border: 1px solid #E2E2E2;
      background: #fff;
    }

    .item_product img {
      object-fit: cover;
    }

    p.item_product__price {
      margin: 6px 0 !important;
    }

    .item_product__price .compare {
      color: #939393;
      padding-right: 4px;
      text-decoration: line-through;
    }

    .calc_action {
      width: 35px;
      height: 36px;
      
      position: relative;
      border: 1px solid #E2E2E2 !important;
    }

    .calc_action:after,
    .calc_action:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #7B26D6;
      pointer-events: none;
    }

    .calc_action:before {
      width: 12px;
      height: 2px;
    }

    .calc_action:hover {
      border-color: #773BD9 !important;
    }

    /*

    .calc_action:hover {
      border-color: #773BD9;
    }

    .calc_action:hover:before,
    .calc_action:hover:after {
      background-color: #773BD9;
    }

    */

    .calc_action.calc_action__minus {
      border-radius: 4px 0 0 4px;
    }

    .calc_action.calc_action__plus {
      border-radius: 0 4px 4px 0;
    }

    .calc_action.calc_action__plus:after {
      width: 2px;
      height: 12px;
    }

    /*.calc_action:hover:after,
    .calc_action:hover:before {
      background-color: #0A0A0A;
    }*/

    input.clac_qty {
      width: 36px;
      line-height: 34px;
      padding: 0;
      text-align: center;
      border: none;
      border-top: 1px solid #E2E2E2;
      border-bottom: 1px solid #E2E2E2;
      background: transparent;
      font-weight: 700;
      font-size: 16px;
      color: #212121;
    }

    .item_product__delete {
      border: 1px solid #E2E2E2 !important;
      border-radius: 4px;
      width: 36px;
      height: 36px;
      padding: 0 !important;
      margin-top: auto;
    }

    .item_product__delete svg {
      flex-shrink: 0;
      width: 12px;
      height: 14px;
    }

    .item_product__delete:hover svg path {
      fill: #773BD9;
    }

    .item_product__delete:hover {
      border-color: #773BD9 !important;
    }

    /* message block*/
    .slide_in__message {
      background: #F5F5FD;
      border-radius: 6px;
      padding: 8px 12px;
      
      margin: 0;

      min-height: 42px;
    }

    .slide_in__message p {
      font-size: 14px;
      line-height: 19px;
      font-weight: 500;
    }

    .slide_in__message[hidden="true"] {
      display: none !important;
    }

    .slide_in__message svg {
      flex-shrink: 0;
      margin-right: 8px;
    }

    .slide_in__message .c-grey-300 {
      margin-bottom: 2px;
    }
    
    .slide_in__message p {
      color: #212121;
    }

    /* total */
    .slide_in__total {
      padding: 0 20px 16px;
    }

    .slide_in__total.element-grid {
      display: grid;
    }

    .slide_in__subtotal {
      padding: 12px 0;
      border-top: 1px solid #E2E2E2;
    }

    .slide_in__subtotal p {
      font-weight: 600;
      line-height: 15px;
      text-transform: uppercase;
      color: #252726;
      position: relative;
    }

    .slide_in__subtotal .compare {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #939393;
      text-decoration: line-through;
      margin-right: 4px;
    }

    .slide_in__total>div:not(.slide_in__discount) p:first-child {
      letter-spacing: 1.4px;
    }

    .slide_in__shipping {
      font-weight: 400;
      font-size: 14px;
      line-height: 15px;
      padding: 10px 0 12px;
      order: -1;
    }

    .slide_in__shipping p {
      color: #212121;
    }

    .slide_in__saved {
      background: rgba(216, 68, 50, 0.2);
      padding: 5px 6px 4px 12px;
      position: relative;
      font-size: 14px;
      line-height: 17px;
      color: #D84432;
      margin-left: auto;
      width: fit-content;
      border-radius: 2px;
    }

    .slide_in__saved:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 11px 0 11px 8px;
      border-color: transparent transparent transparent #fff;
    }

    /* discount */
    .slide_in__bundle {
      padding: 16px 20px;
      background: #F5F5F5;
      box-shadow: inset 0px 0px 8px rgba(107, 29, 235, 0.16);
      margin-bottom: 20px !important;
    }
    

    .slide_in__bundle li>div>p {
      background: #FFFFFF;
      /* padding: 10px; 
      width: 120px;
      height: 120px;
      */
      flex-shrink: 0;
      margin-right: 14px !important;
    }

    .slide_in__bundle li>div>p + div {
      display: flex;
    flex-direction: column;
    justify-content: space-between;
    }

    .slide_in__bundle img {
      width: 120px;
      height: 120px;
    }

    #custom_cart .slide_in__bundle>p {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 12px;
    }

    .btn-discount {
      font-size: 14px;
      line-height: 10px;
      text-decoration-line: underline;
      padding: 13px 0;
      cursor: pointer;
    }

    .slide_in__discount {
      position: relative;
      margin-bottom: 4px;
    }

    .slide_in__discount_message {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #FF0000;
      margin-top: 4px !important;
      
    }

    .slide_in__discount.error .slide_in__discount_message {
      display: block;
    }

    .slide_in__discount.error input {
      border-color: #FF0000;
    }

    .slide_in__discount input {
      background: #FFFFFF;
      border: 1px solid #E2E2E2;
      border-radius: 4px;
      padding: 9px 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      width: 100%;
      outline: none;
      font-style: initial;
    }

    .slide_in__discount input:focus,
    .slide_in__discount input:valid {
      border-color: #773BD9;
    }

    .slide_in__discount button {
      width: 86px;
      position: absolute;
      right: 0;
      top: 0;
      height: 37px;
    }

    .slide_in__discount_completed {
      letter-spacing: 1.4px;
    }

    .slide_in__discount_completed,
    .slide_in__discount_item {
      font-size: 14px;
      line-height: 15px;
      text-transform: uppercase;
    }

    .slide_in__discount_delete {
      padding: 8px;
      cursor: pointer;
    }

    .slide_in__discount_delete svg {
      pointer-events: none;
    }

    .slide_in__discount.completed {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 0 15px;
      margin: 0;
    }

    .slide_in__discount.completed button {
      top: 3px;
    }

    /* may_like */
    .may_like {
      background: #F5F5F5;
      padding: 20px;
      margin-top: 16px !important;
      box-shadow: inset 0px 0px 8px rgba(107, 29, 235, 0.16);
    }

    .may_like h4 {
      font-size: 16px;
      line-height: 19px;
      color: #212121 !important;
      margin-bottom: 16px;
      font-family: 'Urbanist';
      text-transform: none;

      letter-spacing: normal;
    }

    .may_like li>div>a {
      background: #FFFFFF;
      border: 1px solid #EAEBEA;
    }

    .may_like .d-flex > p {
      width: 120px;
      height: 120px;
      margin-right: 12px !important;
    }

    .may_like .d-flex > p img {
      width: auto;
      height: auto;
      margin: 0;
    }

    /* footer cart */
    .slide_in__saved + .splitit_wrap {
      margin-top: 20px;
    }

    .splitit_fixed {
      left: 0;
      padding: 20px;
      position: fixed;
      width: 100%;
      bottom: 0;
      background: #fff;
      z-index: 2;
      box-shadow: 0px 0px 16px rgba(107, 28, 235, 0.16);
      transition: bottom 0.7s ease-in-out;
    }

    .splitit_inner {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
    }

    .splitit_inner p{
      color: #6D6E75;
      font-size: 14px;
      font-weight: 600;
      line-height: 10px;
      max-width: 296px;
      letter-spacing: normal !important;
    }

    .splitit_inner img{
      width: 61px;
      height: 20px;
      margin: 0 10px 0 8px;
    }

    .splitit_inner span.learn {
      color: #7C28D0;
      font-size: 14px;
      font-weight: 700;
      line-height: 10px;
      text-decoration-line: underline;
      cursor: pointer;
    }

    .slide_in__to_checkout  {
      display: flex;
      padding: 11px;
      justify-content: space-evenly;
    }

    .slide_in__to_checkout  span {
      color: #FFF;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 1px;
    }

    .slide_in__to_checkout .vertical_line {
      width: 1px;
      background: #fff;
    }

    .bottom_icons {
      display: flex;
      margin-top: 16px;
      gap: 16px;
    }

    .bottom_icons > div {
      display: flex;
      border-radius: 5px;
      background: #E5E5FF;
      padding: 5px 12px;
    }

    .bottom_icons > div svg {
      margin-right: 6px;
      flex-shrink: 0;
    }

    .bottom_icons > div span {
      color: #212121;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }

    .bottom_icons > div span b {
      font-weight: 700;
    }

    .slide_in__to_checkout {
      font-size: 18px;
      line-height: 48px;
    }

    /* popup */
    /* .splitit-iframe-popup {
      opacity: 0;
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: 9999999999;
      overflow-y: auto;
    }

    .splitit-iframe-popup.active {
      opacity: 1;
      pointer-events: auto;
    }

    .slide_in__splitit {
      margin-bottom: 12px;
    }

    .slide_in__splitit p {
      font-weight: 600;
      font-size: 14px;
      line-height: 10px;
      color: #6D6E75;
    }

    .slide_in__splitit a {
      font-weight: 700;
      font-size: 14px;
      line-height: 10px;
      text-decoration-line: underline;
      color: #7C28D0;
    }

    .slide_in__splitit img {
      margin: 0 10px 0 8px;
    }

    .splitit-iframe-popup .grid,
    .splitit-iframe-popup .grid--rev,
    .splitit-iframe-popup .grid--full,
    .splitit-iframe-popup .grid-uniform {
      margin-left: 0 !important;
    }

    .splitit-iframe-popup .grid-cols-4 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .splitit-iframe-popup .grid:after {
      content: none !important;
    }

    .selected.svelte-5no3ze {
      position: relative;
      border-width: 2px;
      --tw-border-opacity: 1;
      border-color: rgb(61 28 81 / var(--tw-border-opacity));
      --tw-bg-opacity: 1;
      background-color: rgb(236 232 238 / var(--tw-bg-opacity));
      --tw-shadow: 0 4px 10px rgb(0 0 0 / 25%);
      --tw-shadow-colored: 0 4px 10px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .selected-wrapper.svelte-5no3ze:after {
      --tw-content: "";
      content: var(--tw-content);
    }

    .selected-wrapper.svelte-5no3ze:after {
      position: absolute;
      right: 50%;
      height: 0.75rem;
      width: 0.75rem;
      --tw-translate-y: -50%;
      --tw-translate-x: 50%;
      --tw-rotate: 45deg;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      border-bottom-width: 2px;
      border-right-width: 2px;
      border-bottom-color: rgb(61 28 81 / var(--tw-border-opacity));
      --tw-border-opacity: 1;
      border-right-color: rgb(61 28 81 / var(--tw-border-opacity));
      --tw-bg-opacity: 1;
      background-color: rgb(236 232 238 / var(--tw-bg-opacity));
    } */

    /* fonts */
    .fw-bold {
      font-weight: 700 !important;
    }

    .fw-semi {
      font-weight: 600 !important;
    }

    .fw-medium {
      font-weight: 500 !important;
    }

    .c-purple {
      color: #773BD9;
    }

    .c-grey-300 {
      color: #6D6E75;
    }

    .text-center {
      text-align: center;
    }

    /* flex */
    .d-flex {
      display: flex;
    }

    .items-center {
      align-items: center;
    }

    .flx {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .flx-between {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .m-auto {
      margin: auto;
    }

    .mb-auto {
      margin-bottom: auto;
    }

    @media screen and (min-width:768px) {
      .item_product img {
        background: transparent;
      }

      .splitit_wrap.splitit_fixed {
        display: none !important; 
      }

      .slide_in__timer p {
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
      }

      .content_wrap {
        max-width: 1248px;
        margin: 0 auto;
        padding: 0 24px;
      }

      .left_part {
          max-width: 66%;
          width: 100%;
      }

      .right_part {
          max-width: 32%;
        }

      .content_inner {
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
      }

      #custom_cart {
        background: #F5F5F5;

      }

      .slide_in__header {
        padding: 40px 0 16px;
      }

      .slide_in__header p {
        font-size: 22px;
        font-weight: 700;
        line-height: 32px;
      }   

      .item_product>div:not(.slide_in__message)>div {
        justify-content: flex-start;
      }

      .may_like,
      .slide_in__bundle,
      .slide_in__products {
        padding: 0;
      }

      .slide_in__total,
      .slide_in__products .item_product {
        background: #FFF;
        box-shadow: 0px 6px 16px 0px rgba(107, 28, 235, 0.16);
      }

      .slide_in__total,
      .item_product {
        padding: 20px;
      }

      .item_product__name {
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
      }

      .slide_in__bundle {
        margin: 40px 0 !important;
        box-shadow: none;
      }
    
      #custom_cart .slide_in__bundle>p {
        font-size: 22px;
        font-weight: 700;
        line-height: 32px;
      }

      .slide_in__bundle li {
        padding: 20px;
        border: 1px solid #E2E2E2;
        background:#F5F5FD;
      }

      .slide_in__bundle li > div {
        justify-content: space-between;
        gap: 10px;
      }

      .slide_in__bundle li > div div:first-child{
        text-align:center;
      }

      .slide_in__bundle li > div div:last-child{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        min-width: 43%;
      }

      .slide_in__bundle p img {
        width: auto;
        height: 100px;
        object-fit: cover;
      }

      .slide_in__bundle p.item_product__price {
        margin: 0 0 6px 0 !important;
      }

      .slide_in__bundle .btn-purple {
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 1px;
        padding: 11px;
      }

      .slide_in__bundle .splitit_inner {
        margin-bottom: 0;
      }

      .bottom_icons > div {
        padding: 5px 18px 5px 12px;
      }

      .slide_in__shipping p {
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
      }

      .slide_in__subtotal p:first-child {
        color: #252726;
        font-size: 16px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
      }

      .slide_in__subtotal span {
        font-size: 18px !important;
        line-height: 26px !important;

      }

      #custom_cart .garunteesec {
        margin: 16px 0 0;
        padding: 20px;
      }

      #custom_cart .garunteelogo {
        width: 90px;
      }

      #custom_cart .garunteelogo h6 {
          display: none;
      }

      #custom_cart .garunteetext {
          width: 100%;
          padding-left: 15px;
          margin: 0;
      }

      #custom_cart .garunteetext h6 {
          display: block;
          font-weight: 700;
      }

      .may_like {
        box-shadow: none;
        margin: 40px 0 31px;
      }

      .may_like p.item_product__price {
        margin: 12px 0 0;
      }

      .may_like .item_product {
        border: 1px solid #E2E2E2;
      background: #F5F5FD;
      }

      .may_like h4 {
      font-size: 22px;
      font-weight: 700;
      line-height: 32px;
      }

      #custom_cart .garunteelogo img {
        min-width: 77px;
      }

      #custom_cart .garunteesec {
        flex-wrap: nowrap;
      }

      .slide_in__products .d-flex img + div {
        width: 100%;
      }

      .item_product .inner_content {
        display: flex;
        flex-direction: row !important;
        align-items: center;
        justify-content: space-between !important;
        gap: 10px;
      }

      .item_product .add-to-cart {
        max-width: 203px;
        min-height: 50px;
      }

      .may_like .d-flex > p,
      .item_product img {
        margin-right: 20px !important;
      }

    }

    

    /* .splitit-iframe-popup .single-option,
    .splitit-iframe-popup .single {
      max-width: 311px;
      width: 100%;
    } */

    /* @media screen and (min-width:600px) {
      .text-sm-center {
        text-align: center;
      }

      .selected.svelte-5no3ze {
        --tw-border-opacity: 1;
        border-color: rgb(57 188 167 / var(--tw-border-opacity));
        --tw-bg-opacity: 1;
        background-color: rgb(234 247 246 / var(--tw-bg-opacity));
        --tw-text-opacity: 1;
        color: rgb(57 188 167 / var(--tw-text-opacity));
      }

      .selected-wrapper.svelte-5no3ze:after {
        border-bottom-color: rgb(57 188 167 / var(--tw-border-opacity));
        --tw-border-opacity: 1;
        border-right-color: rgb(57 188 167 / var(--tw-border-opacity));
        --tw-bg-opacity: 1;
        background-color: rgb(234 247 246 / var(--tw-bg-opacity));
      }

      .selected.svelte-1kctpzc {
        --tw-shadow: 0 4px 10px rgb(0 0 0 / 25%);
        --tw-shadow-colored: 0 4px 10px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }
    } */

    /* @media (min-width: 960px) {
      .selected-wrapper.svelte-5no3ze:after {
        height: 1.25rem;
        width: 1.25rem;
      }
    } */

    /* .gf_product-quantity-minus,
    .gf_product-quantity-plus {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    } */

    @media only screen and (min-width:768px) and (max-width:1080px) {
      .bottom_icons > div {
        padding: 5px;
      }
    }
  </style>
  `

  const splititStyle = /*html*/`
<style>
/* splitit */

.splitit_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  opacity: 0;
  transition: all 0.4s ease-in-out;
  overflow-y: auto;
  z-index: -1;
}

.splitit_overlay.opened_splitit_popup {
  z-index: 10000000000;
  opacity: 1;
}

.splitit_popup_container {
  max-width: 850px;
  position: relative;
  width: 73.333333%;
  border-radius: 0.5rem;
  padding: 2rem 2.5rem;
  --tw-shadow: 0 4px 10px rgb(0 0 0 / 25%);
  --tw-shadow-colored: 0 4px 10px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #fff;
  margin: 20px auto;
}

.splitit_popup_container .content {
  padding: 0 1rem 1rem;
}

.close_splitit_wrap {
  margin: 0 -1rem !important;
}

.splitit_popup_container .content p,
.splitit_popup_container .content li,
.splitit_popup_container .top * {
  margin: 0;
  font-family: 'NotoSans', 'Urbanist', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
}

.splitit_popup_container .content span {
  font-family: 'NotoSans', 'Urbanist', sans-serif;
}

.splitit_popup_container .head {
  display: flex;
  align-items: center;
}

.splitit_popup_container .head>div {
  width: 40px;
  height: 40px;
  background-color: #94d6d04d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
}

.splitit_popup_container .content .head p {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #000;
}

.steps_container {
  padding-top: 1.25rem;
}

.calculations_container {
  padding-bottom: 1.25rem;
}

.splitit_popup_container .content .splitit_step span,
.splitit_popup_container .content .use p,
.splitit_popup_container .content .how {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(33, 33, 33);
}

.splitit_popup_container .how {
  padding-top: 0.75rem;
}

.splitit_steps {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 0.75rem;
}

.splitit_step {
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.splitit_step>div {
  display: flex;
  flex-direction: column;
}

.splitit_step span {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.payments span,
.splitit_step p {
  font-size: .875rem;
  line-height: 1.25rem;
}

.payments b {
  min-width: 21px;
  display: inline-block;
  font-weight: 600;
}

.splitit_popup_container ul {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  background: rgb(234, 247, 246);
  padding: 12px;
  margin-left: 0;
  margin-right: 0;
}

.splitit_popup_container ul li {
  padding: 0;
  list-style: none;
  margin: 0 0.25rem !important;
}

.splitit_popup_container .dot {
  display: block;
  width: 6px;
  height: 6px;
  background: #000;
  border-radius: 50%;
}

.splitit_popup_container .mob_payment {
  display: none;
}

.splitit_popup_container .label {
  display: flex;
  flex-direction: row;
  padding: 8px 10px 8px 4px;
  background-color: #94d6d04d;
  margin-top: 0.25rem;
}


.splitit_popup_container .content .label p {
  font-size: 12px;
  color: rgb(61, 28, 81);
  line-height: normal;
  text-align: left;
  padding-left: 2px;
  line-height: 14px !important;
}

.calculations_container>div {
  margin-left: auto;
  margin-right: auto;
}

.splitit_popup_container .top {
  max-width: 327px;
  margin-top: 1rem;
  padding: 1rem 0.75rem;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 0.5rem;
}

.splitit_popup_container .top+div {
  max-width: 290px;
  padding: 0.75rem 1.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
  margin: 1rem auto;
  position: relative;
}

.splitit_popup_container .total,
.splitit_popup_container .payments>div {
  display: flex;
  justify-content: space-between;
}

.splitit_popup_container .payments>div {
  padding: 4px 0;
}

.splitit_popup_container .total {
  padding: 0.5rem;
  padding-left: 0;
  border-top: 1px solid rgb(224, 224, 224);
}

.splitit_popup_container .total [data-price] {
  font-weight: 700;
}

.powered div {
  display: flex;
  align-items: center;

}

.powered div img {
  width: 75px;
  height: 22px;
  margin-left: 4px;
}

.powered {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(224, 224, 224);
}

.splitit_popup_container button {
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.25rem;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
}

.splitit_popup_container .need_know {
  padding-top: 0.5rem;
}



.splitit_popup_container .need_know p {
  font-size: .75rem;
  line-height: 1rem;
  color: #000;
  opacity: .5;
}

.splitit_popup_container p.things {
  font-size: .875rem;
  line-height: 1.25rem;
  color: #000;
  opacity: .7;
}

.need_know p.things {
  margin-bottom: 4px;
}

.need_know p {
  margin-bottom: 2px !important;
}

.close_splitit.closex {
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;
  cursor: pointer;
}

.close_splitit_wrap {
  display: none;
  cursor: pointer;
}

.use img {
  display: none;
}


@media (max-width: 768px) {

/* splitit */
  .splitit_popup_container {
    max-width: none;
    width: auto;
    padding: 0;
  }

  .splitit_popup_container .content {
    border-radius: 0;
    max-width: none;
    width: auto;
  }

  .close_splitit.closex {
    display: none;
  }

  .close_splitit_wrap {
    display: block;
    --tw-bg-opacity: 1;
    background-color: rgb(61 28 81 / var(--tw-bg-opacity));
    padding: 1.25rem 0.75rem 1rem;
    margin: 0;
  }

  .splitit_popup_container .content {
    margin: 0;
    background-color: #F9F8FA;
  }

  .splitit_popup_container .head {
    display: none;
  }

  .splitit_step>div {
    flex-direction: row-reverse;
    align-items: center;
  }

  .splitit_step {
    width: 100%;
    flex-direction: row;
  }

  .mob_payment {
    flex-direction: column !important;
  }

  .mob_payment img {
    margin: 0 !important;
  }

  .splitit_popup_container .mob_payment,
  .splitit_popup_container .mob_payment .label {
    display: flex;

  }

  .splitit_popup_container .mob_payment {
    align-items: flex-start;
  }

  .splitit_popup_container .mob_payment .label {
    align-items: center;
  }

  .splitit_popup_container .label {
    display: none;
  }

  .splitit_popup_container .content .label p {
    font-size: 0.75rem !important;
  }

  .splitit_step>div img {
    margin-left: 16px;
    margin-right: 10px;
  }

  .splitit_step {
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }


  .splitit_popup_container .content li,
  .splitit_popup_container .top *,
  .splitit_popup_container .total {
    font-size: 14px !important;
    line-height: 1.25rem !important;
  }


  .splitit_popup_container .content p {
    line-height: 1.25rem !important;
  }

  .use {
    display: flex;
    align-items: flex-start;
  }

  .use img {
    display: block;
    margin-right: 4px;
  }

  .splitit_popup_container .content .use p,
  .splitit_popup_container .content .how {
    font-size: 1rem;
  }

  .number_step {
    width: 32px;
    height: 32px;
    background-color: #94d6d04d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .number_step span {
    margin: 0;
  }

  .splitit_popup_container ul {
    flex-direction: column;
    background-color: #b4a4bd4d;
  }

  .splitit_popup_container .top,
  .splitit_popup_container .top+div {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .splitit_popup_container .top+div {
    background: none;
    padding: 0.75rem;
  }

  .splitit_popup_container .top+div {
    margin-top: 0;
    opacity: 0;
    max-height: 0;
    transition: all 0.5s ease-in-out;
    z-index: -1;
  }

  .calculations_container.opened_this .top {
    position: relative;
    border-width: 2px;
    --tw-border-opacity: 1;
    border-color: rgb(61 28 81 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(236 232 238 / var(--tw-bg-opacity));
    --tw-shadow: 0 4px 10px rgb(0 0 0 / 25%);
    --tw-shadow-colored: 0 4px 10px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  .calculations_container.opened_this .top::after {
    position: absolute;
    right: 50%;
    height: 0.75rem;
    width: 0.75rem;
    --tw-translate-y: -50%;
    --tw-translate-x: 50%;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    border-bottom-width: 2px;
    border-right-width: 2px;
    border-bottom-color: rgb(61 28 81 / var(--tw-border-opacity));
    --tw-border-opacity: 1;
    border-right-color: rgb(61 28 81 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(236 232 238 / var(--tw-bg-opacity));
  }

  .calculations_container.opened_this .top+div {
    opacity: 1;
    max-height: 1500px;
    /* margin-left: -1rem;
      margin-right: -1rem; */
    background-color: #fff;
    margin: 0 -1rem;
    padding: 0.25rem 1.5rem 0.5rem;
    max-width: 100vw;
    z-index: 1;
    margin-top: 15px;
  }

  .splitit_popup_container .total {
    padding-bottom: 0;
  }

  .splitit_popup_container .footer {
    display: flex;
    flex-direction: column-reverse;
  }

  .powered {
    padding-bottom: 0;
    border: none;
    padding-top: 12px;
  }

  .powered div {
    flex-direction: column;
  }

  .powered div p {
    font-size: 12px !important;
  }

  .splitit_popup_container .need_know p {
    line-height: 1rem !important;
  }

  .calculations_container {
    padding-bottom: 1rem;
  }

  .mob_payment p,
  .splitit_step>div+p {
    font-size: 0.875rem !important;
  }

  .splitit_popup_container {
    margin: 0;
  }

  .total span {
    font-weight: 700;
  }
}
</style>

  `

  // -------------------------------------
  // HTML ELEMENTS
  // -------------------------------------
  const splititHTML = (isFixed) => {
    const checkoutInnerBtn = isFixed ? `<span>Checkout</span><span class="vertical_line"></span><span class="price"></span>` : `<span>Checkout</span>`

    return /*html*/`
<div class="splitit_wrap ${isFixed ? 'splitit_fixed' : ''}">
      <div class="splitit_inner">
        <p>Pay <span></span>/month with</p>
        <img src="//upstream.production.splitit.com/v1/img/logo/logo-purple.svg?v=1.3.48" alt="splitit">
        <span class="learn">Learn more</span>
      </div>

      <a href="/checkout" class="slide_in__to_checkout btn-purple">
        ${checkoutInnerBtn}
      </a>
      <div class="bottom_icons">
        <div>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0043 8.80859C10.6929 8.80859 8.8125 10.689 8.8125 13.0002C8.8125 15.3116 10.6929 17.192 13.0043 17.192C15.3155 17.192 17.1959 15.3116 17.1959 13.0002C17.1959 10.689 15.3155 8.80859 13.0043 8.80859ZM15.493 12.2108L12.49 15.2138C12.364 15.3398 12.1986 15.4029 12.0335 15.4029C11.8683 15.4029 11.7032 15.34 11.5771 15.2138L10.4295 14.0662C10.1774 13.8143 10.1774 13.4056 10.4295 13.1535C10.6815 12.9014 11.0902 12.9014 11.3423 13.1535L12.0335 13.8447L14.5802 11.2981C14.8321 11.046 15.2409 11.046 15.493 11.2981C15.7451 11.55 15.7451 11.9587 15.493 12.2108Z" fill="#773BD9"/>
<path d="M22.3452 7.96917L22.3445 7.95205C22.3349 7.74073 22.3286 7.51716 22.3247 7.26841C22.3067 6.05538 21.3425 5.052 20.1293 4.98419C17.5998 4.84303 15.6431 4.01823 13.9711 2.38861L13.9569 2.37501C13.4115 1.875 12.5889 1.875 12.0434 2.37501L12.0292 2.38861C10.3572 4.01823 8.40049 4.84303 5.87104 4.98435C4.65801 5.052 3.69357 6.05538 3.67561 7.26858C3.67191 7.51565 3.66537 7.73922 3.6558 7.95205L3.65479 7.99183C3.60561 10.5711 3.54452 13.7812 4.6184 16.6948C5.20888 18.2971 6.10317 19.6899 7.27625 20.8348C8.61231 22.1386 10.3623 23.1737 12.4775 23.9112C12.5463 23.9352 12.6178 23.9547 12.6906 23.9693C12.7934 23.9898 12.8968 24 13.0002 24C13.1035 24 13.2071 23.9898 13.3097 23.9693C13.3825 23.9547 13.4545 23.9351 13.5237 23.9109C15.6363 23.172 17.3845 22.1364 18.7194 20.8328C19.8919 19.6875 20.7862 18.2944 21.3772 16.6918C22.4551 13.7694 22.3942 10.5533 22.3452 7.96917ZM12.9998 18.4831C9.97656 18.4831 7.51711 16.0236 7.51711 13.0004C7.51711 9.97712 9.97656 7.51766 12.9998 7.51766C16.0229 7.51766 18.4825 9.97712 18.4825 13.0004C18.4825 16.0236 16.0229 18.4831 12.9998 18.4831Z" fill="#773BD9"/>
</svg>
<span><b>60-day</b> money-
back guarantee</span>
  </div>
<div>
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7083 20.55C11.5378 19.7493 11.6655 18.4952 10.9936 17.7489C10.3217 17.0025 9.10468 17.0465 8.27525 17.8472C7.44582 18.6478 7.3181 19.9019 7.98998 20.6483C8.66186 21.3946 9.87891 21.3506 10.7083 20.55Z" fill="#773BD9"/>
<path d="M21.6849 20.55C22.5143 19.7493 22.642 18.4952 21.9702 17.7489C21.2983 17.0025 20.0812 17.0465 19.2518 17.8472C18.4224 18.6478 18.2947 19.9019 18.9665 20.6483C19.6384 21.3946 20.8555 21.3506 21.6849 20.55Z" fill="#773BD9"/>
<path d="M2 10.5C2 10.2239 1.55228 10 1 10C0.447715 10 0 10.2239 0 10.5C0 10.7761 0.447715 11 1 11C1.55228 11 2 10.7761 2 10.5Z" fill="#773BD9"/>
<path d="M17.5898 18.9984C17.8978 17.3948 19.3355 16.1206 20.8808 16.1206C22.3688 16.1206 23.4413 17.3024 23.4118 18.822C25.021 18.8664 25.469 16.6337 25.469 16.6337C25.6045 16.0094 25.8069 14.7923 25.9763 13.5976C26.0319 13.2288 25.9892 12.851 25.8531 12.5061C25.4324 11.4715 24.924 10.479 24.3341 9.54064C23.7761 8.6635 22.8401 8.14395 21.7717 8.12524C21.1345 8.11455 20.5089 8.10814 20.0366 8.10814L20.0326 8.10386C19.9717 7.03055 19.229 6.20846 18.1864 6.11011C17.5081 6.0465 14.8214 6 13.5318 6C13.0194 6 12.2843 6.00748 11.5405 6.02031V6.0171H11.5344H2.59241C2.4786 6.01703 2.36589 6.0406 2.26073 6.08646C2.15557 6.13231 2.06002 6.19956 1.97955 6.28435C1.89907 6.36914 1.83525 6.46981 1.79173 6.5806C1.74821 6.6914 1.72584 6.81015 1.7259 6.93006V6.93434C1.7259 7.17533 1.81677 7.40646 1.97851 7.57687C2.14025 7.74728 2.35961 7.84302 2.58835 7.84302H4.39086C4.6079 7.85988 4.81088 7.96257 4.95907 8.1305C5.10726 8.29843 5.18971 8.51919 5.18989 8.74849V8.7533C5.19022 8.87333 5.16809 8.99224 5.12476 9.10325C5.08142 9.21425 5.01774 9.31516 4.93735 9.40021C4.85697 9.48525 4.76145 9.55276 4.65627 9.59887C4.55109 9.64498 4.43832 9.66879 4.3244 9.66893H3.40006C3.17039 9.66893 2.95012 9.76506 2.78771 9.93617C2.6253 10.1073 2.53407 10.3394 2.53407 10.5813C2.534 10.7012 2.55635 10.8199 2.59984 10.9307C2.64333 11.0414 2.70711 11.1421 2.78753 11.2269C2.86795 11.3117 2.96344 11.3789 3.06854 11.4248C3.17364 11.4707 3.2863 11.4943 3.40006 11.4943H4.3244C4.55421 11.4943 4.77461 11.5905 4.93711 11.7617C5.09961 11.9329 5.1909 12.1651 5.1909 12.4073C5.1909 12.6494 5.09961 12.8816 4.93711 13.0528C4.77461 13.224 4.55421 13.3202 4.3244 13.3202H0.866504C0.63678 13.3202 0.416459 13.4163 0.253972 13.5874C0.0914859 13.7585 0.000134498 13.9906 0 14.2326C0 14.4748 0.0912921 14.707 0.253793 14.8782C0.416294 15.0494 0.636693 15.1456 0.866504 15.1456H4.3244C4.55421 15.1456 4.77461 15.2418 4.93711 15.413C5.09961 15.5842 5.1909 15.8164 5.1909 16.0586C5.19064 16.3005 5.09922 16.5324 4.93675 16.7034C4.77428 16.8744 4.55404 16.9704 4.3244 16.9704H3.25497C3.02529 16.9704 2.80502 17.0666 2.64262 17.2377C2.48021 17.4088 2.38897 17.6409 2.38897 17.8829C2.38897 18.1249 2.4802 18.357 2.64259 18.5282C2.80498 18.6994 3.02525 18.7957 3.25497 18.7958L6.66721 18.7931L6.9508 18.0486C7.53168 16.9197 8.68736 16.12 9.91101 16.12C11.4568 16.12 12.5547 17.3954 12.4339 19H17.5893M8.9953 10.0939H7.83252C7.83142 10.094 7.83038 10.0944 7.82956 10.0952C7.82874 10.096 7.82817 10.097 7.82796 10.0981L7.72091 10.8999C7.72075 10.9006 7.72074 10.9012 7.72087 10.9019C7.721 10.9025 7.72128 10.9031 7.72167 10.9037C7.72207 10.9042 7.72257 10.9046 7.72314 10.9049C7.72371 10.9052 7.72434 10.9053 7.72497 10.9053H8.59046C8.63294 10.904 8.67516 10.9127 8.71403 10.9308C8.7529 10.9489 8.78745 10.9759 8.81516 11.0099C8.84286 11.0438 8.86303 11.0839 8.87418 11.1271C8.88534 11.1703 8.8872 11.2156 8.87963 11.2597C8.8648 11.3565 8.81839 11.4449 8.74839 11.5096C8.67838 11.5742 8.58917 11.6112 8.4961 11.614H7.62959C7.62854 11.614 7.62751 11.6144 7.62668 11.615C7.62584 11.6157 7.62526 11.6167 7.62503 11.6178L7.46979 12.7825C7.45496 12.8793 7.40855 12.9677 7.33854 13.0324C7.26854 13.0971 7.17932 13.134 7.08625 13.1369C7.04379 13.1382 7.00158 13.1294 6.96273 13.1113C6.92387 13.0932 6.88935 13.0662 6.86168 13.0322C6.83401 12.9983 6.8139 12.9582 6.80281 12.915C6.79172 12.8718 6.78994 12.8265 6.79759 12.7825L7.2004 9.7614C7.21636 9.65912 7.26558 9.56586 7.33962 9.4976C7.41366 9.42934 7.50792 9.39033 7.60626 9.38724H9.08916C9.13162 9.38595 9.17383 9.39467 9.21268 9.41278C9.25154 9.43088 9.28606 9.4579 9.31373 9.49187C9.3414 9.52584 9.36151 9.56589 9.3726 9.60911C9.38369 9.65232 9.38547 9.69759 9.37782 9.74162C9.36278 9.83799 9.31639 9.92585 9.24659 9.99012C9.1768 10.0544 9.08796 10.0911 8.9953 10.0939ZM12.1031 9.62777C12.2239 9.74069 12.3089 9.88995 12.3467 10.0554C12.3888 10.2428 12.3957 10.4371 12.367 10.6273C12.3317 10.9233 12.2167 11.2024 12.0357 11.4318C11.9251 11.5695 11.7847 11.6771 11.6263 11.7455C11.6256 11.7463 11.6252 11.7474 11.6252 11.7485C11.6252 11.7496 11.6256 11.7506 11.6263 11.7514L11.9144 12.6275C11.992 12.8627 11.7927 13.1369 11.5446 13.1369H11.5284C11.4682 13.1387 11.409 13.1204 11.3594 13.0844C11.3097 13.0485 11.2723 12.9968 11.2524 12.937L10.9038 11.8679C10.9033 11.8671 10.9027 11.8665 10.9019 11.866C10.9011 11.8655 10.9002 11.8653 10.8993 11.8653H10.1586C10.1576 11.8653 10.1566 11.8657 10.1557 11.8664C10.1549 11.867 10.1543 11.868 10.154 11.869L10.0323 12.782C10.0174 12.8788 9.97102 12.9672 9.90102 13.0319C9.83102 13.0965 9.7418 13.1335 9.64873 13.1363C9.60626 13.1376 9.56406 13.1289 9.5252 13.1108C9.48635 13.0927 9.45182 13.0657 9.42416 13.0317C9.39649 12.9977 9.37637 12.9577 9.36528 12.9145C9.35419 12.8713 9.35241 12.826 9.36006 12.782L9.76288 9.76086C9.77884 9.65858 9.82805 9.56533 9.90209 9.49707C9.97613 9.42881 10.0704 9.38979 10.1687 9.3867H11.3153C11.3153 9.3867 11.8185 9.37013 12.1031 9.62777ZM15.2587 9.7165C15.2449 9.80696 15.2016 9.88952 15.1362 9.94992C15.0708 10.0103 14.9874 10.0448 14.9005 10.0474H13.5668C13.5657 10.0474 13.5647 10.0478 13.5639 10.0485C13.5631 10.0492 13.5625 10.0501 13.5622 10.0511L13.4562 10.8443C13.456 10.845 13.456 10.8456 13.4561 10.8463C13.4563 10.8469 13.4565 10.8476 13.4569 10.8481C13.4573 10.8486 13.4578 10.849 13.4584 10.8493C13.459 10.8496 13.4596 10.8497 13.4602 10.8497H14.4962C14.5359 10.8484 14.5753 10.8566 14.6116 10.8734C14.6479 10.8903 14.6802 10.9156 14.706 10.9473C14.7319 10.979 14.7507 11.0164 14.7611 11.0567C14.7715 11.0971 14.7732 11.1394 14.7661 11.1805C14.7523 11.271 14.709 11.3536 14.6436 11.414C14.5782 11.4744 14.4948 11.5088 14.4079 11.5114H13.3714C13.3704 11.5115 13.3694 11.5119 13.3686 11.5125C13.3678 11.5132 13.3672 11.5141 13.3669 11.5152L13.2395 12.4698C13.2395 12.4711 13.24 12.4724 13.2408 12.4734C13.2417 12.4744 13.2429 12.475 13.2441 12.4751H14.5768C14.6165 12.4739 14.6559 12.482 14.6923 12.4989C14.7286 12.5158 14.7608 12.541 14.7867 12.5727C14.8126 12.6044 14.8314 12.6419 14.8418 12.6822C14.8522 12.7226 14.8539 12.7649 14.8467 12.806C14.8329 12.8965 14.7896 12.979 14.7242 13.0394C14.6588 13.0998 14.5755 13.1343 14.4886 13.1369H12.8347C12.7901 13.1375 12.7459 13.1278 12.7052 13.1085C12.6645 13.0892 12.6284 13.0606 12.5993 13.0249C12.5703 12.9892 12.549 12.9472 12.5371 12.9019C12.5252 12.8566 12.5229 12.8091 12.5303 12.7627L12.9306 9.763C12.9465 9.66072 12.9958 9.56746 13.0698 9.49921C13.1438 9.43095 13.2381 9.39193 13.3364 9.38884H14.9898C15.0291 9.38786 15.0681 9.39605 15.104 9.41282C15.1399 9.42959 15.1719 9.45453 15.1976 9.48585C15.2233 9.51716 15.2421 9.55409 15.2527 9.59396C15.2632 9.63384 15.2653 9.67569 15.2587 9.7165ZM18.0292 9.7165C18.0154 9.80696 17.972 9.88952 17.9067 9.94992C17.8413 10.0103 17.7579 10.0448 17.671 10.0474H16.3372C16.3362 10.0474 16.3352 10.0478 16.3344 10.0485C16.3336 10.0492 16.333 10.0501 16.3327 10.0511L16.2272 10.8443C16.227 10.845 16.227 10.8456 16.2271 10.8463C16.2272 10.8469 16.2275 10.8476 16.2279 10.8481C16.2283 10.8486 16.2288 10.849 16.2294 10.8493C16.23 10.8496 16.2306 10.8497 16.2312 10.8497H17.2672C17.3068 10.8484 17.3463 10.8566 17.3826 10.8734C17.4189 10.8903 17.4512 10.9156 17.477 10.9473C17.5029 10.979 17.5217 11.0164 17.5321 11.0567C17.5425 11.0971 17.5442 11.1394 17.5371 11.1805C17.5233 11.271 17.4799 11.3536 17.4146 11.414C17.3492 11.4744 17.2658 11.5088 17.1789 11.5114H16.1419C16.1409 11.5115 16.1399 11.5119 16.1391 11.5125C16.1383 11.5132 16.1377 11.5141 16.1374 11.5152L16.01 12.4698C16.01 12.4711 16.0105 12.4724 16.0113 12.4734C16.0122 12.4744 16.0133 12.475 16.0146 12.4751H17.3473C17.387 12.4739 17.4264 12.482 17.4627 12.4989C17.499 12.5158 17.5313 12.541 17.5572 12.5727C17.5831 12.6044 17.6019 12.6419 17.6123 12.6822C17.6226 12.7226 17.6243 12.7649 17.6172 12.806C17.6034 12.8965 17.5601 12.979 17.4947 13.0394C17.4293 13.0998 17.346 13.1343 17.259 13.1369H15.6052C15.5606 13.1375 15.5163 13.1278 15.4757 13.1085C15.435 13.0892 15.3988 13.0606 15.3698 13.0249C15.3408 12.9892 15.3195 12.9472 15.3076 12.9019C15.2957 12.8566 15.2933 12.8091 15.3008 12.7627L15.7011 9.763C15.717 9.66072 15.7662 9.56746 15.8403 9.49921C15.9143 9.43095 16.0086 9.39193 16.1069 9.38884H17.7603C17.7996 9.38786 17.8386 9.39605 17.8745 9.41282C17.9104 9.42959 17.9424 9.45453 17.9681 9.48585C17.9938 9.51716 18.0126 9.55409 18.0231 9.59396C18.0337 9.63384 18.0358 9.67569 18.0292 9.7165ZM19.957 9.37387C20.41 9.37387 20.9965 9.38029 21.585 9.39044C22.2983 9.40274 22.9223 9.74804 23.2967 10.3371C23.6966 10.9723 24.056 11.6348 24.3727 12.3201C24.5401 12.6793 24.2322 13.147 23.8288 13.147H19.5039L19.957 9.37387Z" fill="#773BD9"/>
<path d="M11.1014 11H10L10.2091 10.0005H11.3098C11.3098 10.0005 12.1178 9.96581 11.9853 10.5002C11.9888 10.5002 11.8961 11 11.1014 11Z" fill="#773BD9"/>
</svg>
<span><b>Free shipping</b> to 
the United States</span>
</div>
        </div>
      </div>
    </div>
    `
  }

  const splititPopup = /*html*/`
<div class="splitit_overlay" data-product="light2">
            <div class="splitit_popup_container">
                <div class="content">
                    <div class="close_splitit closex">
                        <img src="https://documents.production.splitit.com/assets/svgs/close.svg" alt="close">
                    </div>
                    <div class="close_splitit_wrap">
                        <div class="close_splitit">
                            <img src="https://documents.production.splitit.com/assets/svgs/back.svg" alt="back">
                        </div>
                    </div>
                    <div class="head">
                        <div><img src="https://documents.production.splitit.com/assets/svgs/split.svg" alt=""></div>
                        <p>Мonthly payments on your credit card </p>
                    </div>
                    <div class="steps_container">
                        <div class="use">
                            <img src="https://documents.production.splitit.com/assets/svgs/split.svg" alt="split">
                            <p>Use your existing credit card to split your purchase into smaller payment amounts.
                            </p>
                        </div>
                        <p class="how"><b>How does it work?</b></p>
                        <div class="splitit_steps">
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/select_step.svg" 
                                        alt="">
                                    <div class="number_step">
                                        <span>1</span>
                                    </div>
                                </div>
                                <div class="mob_payment">
                                    <p>Add your item(s) to cart</p>
                                    <div class="label">
                                        <img src="https://documents.production.splitit.com/assets/svgs/split.svg" 
                                            alt="">
                                        <p>Monthly<br>Payments</p>
                                    </div>
                                </div>
                                <div class="label">
                                    <img src="https://documents.production.splitit.com/assets/svgs/split.svg"  alt="">
                                    <p>Monthly<br>Payments</p>
                                </div>
                            </div>
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/pay_step.svg"  alt="">
                                    <div class="number_step">
                                        <span>2</span>
                                    </div>
                                </div>
                                <p>Enter your credit card details</p>
                            </div>
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/choose_step.svg"
                                        alt="">
                                    <div class="number_step">
                                        <span>3</span>
                                    </div>
                                </div>
                                <p>Choose the number of installments</p>
                            </div>
                            <div class="splitit_step">
                                <div>
                                    <img src="https://documents.production.splitit.com/assets/svgs/held_step.svg"
                                        alt="">
                                    <div class="number_step">
                                        <span>4</span>
                                    </div>
                                </div>
                                <p>Make your first payment.</p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>No new loans</li>
                        <li><span class="dot"></span></li>
                        <li>No applications</li>
                        <li><span class="dot"></span></li>
                        <li>No additional interest or fees</li>
                    </ul>
                    <div class="calculations_container">
                        <div class="top">
                            <div data-price>
                                <span></span>
                            </div>
                            <p>6 рayments</p>
                        </div>
                        <div>
                            <div class="payments">
                                <div>
                                    <b><span>1<sup>st</sup> Now</span></b>
                                    <div data-price>
                                      <span></span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>2<sup>nd</sup></b> payment</span>
                                    <div data-price>
                                    <span></span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>3<sup>rd</sup></b> payment</span>
                                    <div data-price>
                                    <span></span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>4<sup>th</sup></b> payment</span>
                                    <div data-price>
                                    <span></span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>5<sup>th</sup></b> payment</span>
                                    <div data-price>
                                    <span></span>
                                    </div>
                                </div>
                                <div>
                                    <span><b>6<sup>th</sup></b> payment</span>
                                    <div data-price>
                                    <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="total">
                                <span>Total</span>
                                <div data-price>
                                    <span><b></b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="powered">
                            <div>
                                <p>Powered by</p>
                                <img src="https://documents.production.splitit.com/assets/svgs/logo.svg" alt="">
                            </div>
                            <button>Continue shopping</button>
                        </div>
                        <div class="need_know">
                            <p class="things">Things you need to know:</p>
                            <p>* Payments will be made automatically according to your agreed installment schedule. You
                                must
                                maintain sufficient available funds on your card until the plan is completed.</p>
                            <p>* We will not charge you interest or fees. Your standard credit card terms and conditions
                                apply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `

  const garuntsec = /*html*/`
<div class="garunteesec">
          <div class="garunteelogo"><img src="//novaalab.com/cdn/shop/files/pd-garunteeimg_a97b6a4c-ef22-4e01-875c-4f7fa196bbcb.png?v=1664470434" alt="" width="119" height="105">
            <h6>Your satisfaction is<br class="mobbr"> guaranteed</h6>
          </div>
          <div class="garunteetext">
            <h6>Your satisfaction is<br class="mobbr"> guaranteed</h6>
            <p>We're confident we design and sell the very best Red Light equipment available at an affordable price, and we want you to share our confidence! That's why we back every sale with a <strong>60-day money back guarantee.</strong></p>
          </div>
        </div>
  `

  const cartHTML = /*html*/`
  <div id="custom_cart">
    <div class="slide_in__timer">
      <p hidden="true"><span class="c-purple">Save up to 50%</span> on bundles. Offer is reserved for <span id="timer" class="c-purple">14:59:59</span></p>
      <p hidden="true">Yay! You just saved <span class="c-purple"></span></p>
    </div>
    <div class="slide_in__header">
      <p>Shopping cart (<span>0</span>)</p>
    </div>
    <div class="slide_in__body">
      <ul class="slide_in__products"></ul>
      <ul class="slide_in__bundle"></ul>
      <div class="slide_in__total">
        <div class="slide_in__discount"> </div>
        <div class="slide_in__shipping flx-between">
          <p>SHIPPING</p>
          <p class="fw-semi">FREE US shipping</p>
        </div>
        <div class="slide_in__subtotal flx-between">
          <p>Subtotal</p>
          <p><span class="compare"></span><span class="pr c-purple fw-bold"></span> </p>
        </div>
        <div class="slide_in__saved fw-semi"></div>
        ${splititHTML(false)}
      </div>
          <div class="may_like" hidden="true">
      <h4 class="fw-semi">You may also like</h4>
      <ul></ul>
      ${splititHTML(true)}
      ${garuntsec}
      <div class="splitit_inner">
        <p>Pay <span></span>/month with</p>
        <img src="//upstream.production.splitit.com/v1/img/logo/logo-purple.svg?v=1.3.48" alt="splitit">
        <span class="learn">Learn more</span>
      </div>
    </div>
    </div>    
  </div>
  
  `

  const cartHTMLDesktop = /*html*/`
    <div id="custom_cart">
    <div class="slide_in__timer">
      <p hidden="true"><span class="c-purple">Save up to 50%</span> on bundles. Offer is reserved for <span id="timer"
          class="c-purple">15:00</span></p>
      <p hidden="true">Yay! You just saved <span class="c-purple"></span></p>
    </div>
    <div class="content_wrap">
        <div class="slide_in__header">
          <p>Shopping cart (<span>0</span>)</p>
        </div>
        <div class="content_inner">
      <div class="left_part">
        <div class="slide_in__body">
          <ul class="slide_in__products"></ul>
          <ul class="slide_in__bundle"></ul>
          <div class="may_like" hidden="true">
            <h4 class="fw-semi">You may also like</h4>
            <ul></ul>
          </div>
        </div>
      </div>
      <div class="right_part">
        <div class="slide_in__total">
          <div class="slide_in__discount"> </div>
          <div class="slide_in__shipping flx-between">
            <p>SHIPPING</p>
            <p class="fw-semi">FREE US shipping</p>
          </div>
          <div class="slide_in__subtotal flx-between">
            <p>Subtotal</p>
            <p><span class="compare"></span><span class="pr c-purple fw-bold"></span> </p>
          </div>
          <div class="slide_in__saved fw-semi"></div>
          ${splititHTML(false)}
          ${garuntsec}
        </div>
        </div>
      </div>
    </div>
  </div>
    `

  let drawMayLikeUpsell = (img, name, oldPrice, currentPrice, id) => /*html*/`
<li class="item_product">
  <div class="d-flex">
      <p><img src="${img}" alt="${name}"></p>
      <div>
          <p class="item_product__name">${name}</p>
          <p class="item_product__price"><span class="compare">${oldPrice}</span> <span class="pr c-purple fw-bold">${currentPrice}</span></p>
          <button type="button" class="btn-purple add-to-cart" onclick="handleAddToCart(${id}, '${name}')">Add to cart</button>
      </div>
  </div></li>
  `

  if (DEVICE === 'desktop') {
    drawMayLikeUpsell = (img, name, oldPrice, currentPrice, id) => /*html*/`
<li class="item_product">
  <div class="d-flex">
      <p><img src="${img}" alt="${name}"></p>
      <div class="inner_content">
          <div>
            <p class="item_product__name">${name}</p>
            <p class="item_product__price"><span class="compare">${oldPrice}</span> <span class="pr c-purple fw-bold">${currentPrice}</span></p>
          </div>
          <button type="button" class="btn-purple add-to-cart" onclick="handleAddToCart(${id}, '${name}')">Add to cart</button>
      </div>

  </div></li>
`
  }

  let cartItemHTML = (id, variantId, title, image, qty, oldPrice, currPrice) => {
    const svg = /*html*/`<svg class="m-auto" width="12" height="14" viewBox="0 0 12 14" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0.857143 12.6875C0.857143 13.4258 1.41964 14 2.14286 14H9.85714C10.5536 14 11.1429 13.4258 11.1429 12.6875V3.5H0.857143V12.6875ZM8.14286 5.6875C8.14286 5.46875 8.33036 5.25 8.57143 5.25C8.78571 5.25 9 5.46875 9 5.6875V11.8125C9 12.0586 8.78571 12.25 8.57143 12.25C8.33036 12.25 8.14286 12.0586 8.14286 11.8125V5.6875ZM5.57143 5.6875C5.57143 5.46875 5.75893 5.25 6 5.25C6.21429 5.25 6.42857 5.46875 6.42857 5.6875V11.8125C6.42857 12.0586 6.21429 12.25 6 12.25C5.75893 12.25 5.57143 12.0586 5.57143 11.8125V5.6875ZM3 5.6875C3 5.46875 3.1875 5.25 3.42857 5.25C3.64286 5.25 3.85714 5.46875 3.85714 5.6875V11.8125C3.85714 12.0586 3.64286 12.25 3.42857 12.25C3.1875 12.25 3 12.0586 3 11.8125V5.6875ZM11.5714 0.875H8.35714L8.08929 0.382812C7.98214 0.164062 7.76786 0 7.52679 0H4.44643C4.20536 0 3.99107 0.164062 3.88393 0.382812L3.64286 0.875H0.428571C0.1875 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.1875 2.625 0.428571 2.625H11.5714C11.7857 2.625 12 2.43359 12 2.1875V1.3125C12 1.09375 11.7857 0.875 11.5714 0.875Z"
    fill="#BBBBBB"></path>
  </svg>`

    return/*html*/`
  <li class="item_product" data-id="${id}" data-variant-id="${variantId}">
    <div class="d-flex">
    <img ${id === 39758302806070 ? 'class="p10"' : ''} src="${image}" alt="${title}">
      <div>
        <p class="item_product__name">${title}
        </p>
        <p class="item_product__price"><span class="compare">${oldPrice}</span> <span
            class="pr c-purple fw-bold">${currPrice}</span></p>
        
          <div class="d-flex calc_block">
            <button type="button" class="calc_action calc_action__minus"></button>
            <input type="number" value="${qty}" class="clac_qty" min="1">
            <button type="button" class="calc_action calc_action__plus"></button>
          </div>
        
        
      </div>
      <button type="button" class="item_product__delete d-flex">
            ${svg}
          </button>
    </div>
    <div class="slide_in__message d-flex items-center _1" hidden="true" style="margin-top: 16px;">
        <p class="text-center fw-bold" style="width: 100%;"></p>
      </div>
  </li>`
  }

  if (DEVICE === 'desktop') {
    cartItemHTML = (id, variantId, title, image, qty, oldPrice, currPrice) => {
      const svg = /*html*/`<svg class="m-auto" width="12" height="14" viewBox="0 0 12 14" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.857143 12.6875C0.857143 13.4258 1.41964 14 2.14286 14H9.85714C10.5536 14 11.1429 13.4258 11.1429 12.6875V3.5H0.857143V12.6875ZM8.14286 5.6875C8.14286 5.46875 8.33036 5.25 8.57143 5.25C8.78571 5.25 9 5.46875 9 5.6875V11.8125C9 12.0586 8.78571 12.25 8.57143 12.25C8.33036 12.25 8.14286 12.0586 8.14286 11.8125V5.6875ZM5.57143 5.6875C5.57143 5.46875 5.75893 5.25 6 5.25C6.21429 5.25 6.42857 5.46875 6.42857 5.6875V11.8125C6.42857 12.0586 6.21429 12.25 6 12.25C5.75893 12.25 5.57143 12.0586 5.57143 11.8125V5.6875ZM3 5.6875C3 5.46875 3.1875 5.25 3.42857 5.25C3.64286 5.25 3.85714 5.46875 3.85714 5.6875V11.8125C3.85714 12.0586 3.64286 12.25 3.42857 12.25C3.1875 12.25 3 12.0586 3 11.8125V5.6875ZM11.5714 0.875H8.35714L8.08929 0.382812C7.98214 0.164062 7.76786 0 7.52679 0H4.44643C4.20536 0 3.99107 0.164062 3.88393 0.382812L3.64286 0.875H0.428571C0.1875 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.1875 2.625 0.428571 2.625H11.5714C11.7857 2.625 12 2.43359 12 2.1875V1.3125C12 1.09375 11.7857 0.875 11.5714 0.875Z"
      fill="#BBBBBB"></path>
    </svg>`

      return/*html*/`
    <li class="item_product" data-id="${id}" data-variant-id="${variantId}">
      <div class="d-flex">
      <img ${id === 39758302806070 ? 'class="p10"' : ''} src="${image}" alt="${title}">
        <div>
          <p class="item_product__name">${title}
          </p>
          <p class="item_product__price"><span class="compare">${oldPrice}</span> <span
              class="pr c-purple fw-bold">${currPrice}</span></p>
      
              <div class="slide_in__message d-flex items-center _1" hidden="true" style="margin-top: 16px;">
          <p class="text-center fw-bold" style="width: 100%;"></p>
        </div>
          
        </div>
        <div style="align-items: flex-end;">        
        <div class="d-flex calc_block">
              <button type="button" class="calc_action calc_action__minus"></button>
              <input type="number" value="${qty}" class="clac_qty" min="1">
              <button type="button" class="calc_action calc_action__plus"></button>
            </div>
        <button type="button" class="item_product__delete d-flex">
              ${svg}
            </button>
            </div>
      </div>
    </li>`
    }
  }

  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
  const waitForElement = (selector) => {
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

  const getCart = async () => {
    const response = await fetch('/cart.json')
    if (!response.ok) throw new Error(`Failed to get cart. ${response.status} ${response.statusText}`)

    return response.json()
  }

  function fetchCartData() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/cart?view=cw-cart',
        dataType: 'json',
        method: 'GET',
        success: function (data) {
          resolve(data)
        },
        error: function (xhr, status, error) {
          console.log('AJAX request failed:', error)
          // Reject the promise with the error for error handling
          reject(error)
        }
      })
    })
  }

  const displayPurpleYayBannerVariant = () => {
    if (appikon.cart.item_count > 1) {
      document.querySelector('.slide_in__timer p:first-child').hidden = true
      document.querySelector('.slide_in__timer p:last-child').hidden = false
    } else {
      document.querySelector('.slide_in__timer p:first-child').hidden = false
      document.querySelector('.slide_in__timer p:last-child').hidden = true
    }
  }

  class Discount {
    constructor(parent, completed) {
      this.parent = parent
      this.completed = completed
    }
    renderCompleted(code, price) {
      this.parent.parentElement.classList.add('element-grid')
      return `
        <p class="d-flex items-center">
            <span class="slide_in__discount_completed c-purple fw-bold">${code}</span>
            <span class="slide_in__discount_delete">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00091 3.58579L1.46537 0.0502526L0.0511592 1.46447L3.58669 5L0.0511588 8.53553L1.46537 9.94975L5.00091 6.41421L8.53644 9.94975L9.95065 8.53553L6.41512 5L9.95065 1.46447L8.53644 0.0502526L5.00091 3.58579Z" fill="#FF0000"/>
                </svg>
            </span>
        </p>
        <p class="slide_in__discount_item c-purple">-$${price}</p>`
    }
    render() {
      if (this.completed == false) {
        this.parent.innerHTML = ` <p class="btn-discount c-purple fw-bold">Apply discount code</p>`

        this.parent.parentElement.classList.remove('element-grid')
        this.parent.querySelector('.btn-discount').addEventListener('click', (e) => {
          e.stopImmediatePropagation()
          this.parent.classList.remove('completed')
          sendGAEventNew('exp_bundle_cart_apply_disc_code_discount', 'Apply discount code', 'Button', 'Discount')

          this.parent.innerHTML = `
                <input type="text" placeholder="Discount code" required>
                <button type="button" class="btn-purple">Apply</button>
                <p class="slide_in__discount_message"></p>`

          // sendGAEvent('Visibility of discount code input')
          this.parent.querySelector('input').addEventListener('click', (e) => {
            // sendGAEvent('Click on discount code input')
          })

          this.parent.querySelector('.btn-purple').addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            let discountCode = e.target.previousElementSibling.value.trim()

            window.appikonDiscount.setCookieMinutes("appikon_discount_" + window.appikonDiscount.settings.shop, discountCode, 5)
            window.appikon.discount_code = discountCode
            window.appikonDiscount.triggerDiscountCalculation($)
            window.appikonDiscount.reloadCurrency()

            this.parent.querySelector('.btn-purple').classList.add('loading_discount')
            sendGAEventNew('exp_bundle_cart_apply_purple_btn_discount', 'Apply Purple Button', 'Button', 'Discount')
            if (discountCode != '') {
              let isDiscount = setInterval(() => {
                if (window.appikon['discounts']['discount_code_error'] != null && window.appikon['discounts']['discount_code_error'] != '') {
                  clearInterval(isDiscount)
                  this.parent.classList.add('error')
                  let firstLetter = window.appikon['discounts']['discount_code_error'].charAt(0)
                  this.parent.querySelector('.slide_in__discount_message').innerHTML = window.appikon['discounts']['discount_code_error'].toLowerCase().replace(firstLetter.toLowerCase(), firstLetter.toUpperCase())
                  this.parent.querySelector('.btn-purple').classList.remove('loading_discount')
                  // sendGAEvent('Visibility of error messages on discount code')
                  isCompleted = false
                }
                if (window.appikon['discounts']['additional_discount_value'] != null && window.appikon['discounts']['additional_discount_value'] != 0) {
                  clearInterval(isDiscount)
                  this.parent.classList.remove('error')
                  this.parent.classList.add('completed')

                  this.parent.innerHTML = this.renderCompleted(discountCode, window.appikon['discounts']['additional_discount_value'])

                  // let subtotal = this.parent.parentElement.querySelector('.slide_in__subtotal .pr')
                  // subtotal.innerHTML = '$' + (+subtotal.innerHTML.replace('$', '') - window.appikon['discounts']['additional_discount_value']).toFixed(2)

                  // let saved = this.parent.parentElement.querySelector('.slide_in__saved')
                  // saved.innerHTML = `You just saved $` + (+subtotal.previousElementSibling.innerHTML.replace('$', '') - +subtotal.innerHTML.replace('$', '')).toFixed(2)

                  // sendGAEvent('Visibility of applied code')
                  new Discount(this.parent, true).render()
                  isCompleted = true
                }
              }, 100)
            } else {
              this.parent.classList.add('error')
              this.parent.querySelector('.btn-purple').classList.remove('loading_discount')
              this.parent.querySelector('.slide_in__discount_message').innerHTML = 'Discount code not found'
              // sendGAEvent('Visibility of error messages on discount code')
            }
          })
        })
      } else {
        this.parent.classList.add('flx-between')
        this.parent.innerHTML = this.renderCompleted(window.appikon.discount_code, window.appikon['discounts']['additional_discount_value'])

      }

      if (this.parent.querySelector('.slide_in__discount_delete') != null) {
        this.parent.querySelector('.slide_in__discount_delete').addEventListener('click', (e) => {
          window.appikonDiscount.deleteCookie("appikon_discount_" + window.appikonDiscount.settings.shop)
          delete window.appikon.discount_code
          window.appikonDiscount.triggerDiscountCalculation($)
          window.appikonDiscount.reloadCurrency()

          sendGAEventNew('exp_bundle_cart_remove_disc_code_discount', 'Remove discount', 'Button', 'Discount')

          let deletedInterval = setInterval(() => {
            if (window.appikon.discount_code == null) {
              clearInterval(deletedInterval)
              isCompleted = false
              this.parent.closest('#custom_cart').querySelector('.slide_in__subtotal').dataset.discount = 0

              new Discount(document.querySelector('.slide_in__discount'), false).render()
            }
          })
        })
      }

      drawTotalPrices()
    }
  }

  function formatPrice(price) {
    const dollars = Math.floor(price / 100)
    const cents = price % 100
    return `$${dollars}.${cents.toString().padStart(2, '0')}`
  }

  function updateQty(id, qty, isReload = false) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: {
          id: parseFloat(id),
          quantity: qty,
        },
        success: function (success_data) {
          sendGAEventNew('exp_bundle_cart_change_qty_sh_cart', `Changing the quantity - ${qty}`, 'Event', 'Shopping cart')

          isReload ? location.reload() : null
          resolve(success_data)
        },
        error: function (data) {
          reject(data)
        }
      })
    })
  }

  const appikonMsgDiscount = (id, qtyNumber, index) => {
    if (discountShopacado[id]) {

      let itemPrice
      let buyItemCount
      let forPrice

      let qty = Number(qtyNumber)

      let hideAppikonDiscountMsg = false

      let msgType = 0

      if (qty < Number(discountShopacado[id].details[0].split('/')[0])) {
        msgType = 2

        itemPrice = formatPrice(appikon.cart.items[index].price)
        buyItemCount = discountShopacado[id].details[0].split('/')[0]
        forPrice = discountShopacado[id].details[0].split('/')[1]
      }
      else if (qty < Number(discountShopacado[id].details[1].split('/')[0])) {
        msgType = 1

        itemPrice = discountShopacado[id].details[0].split('/')[1]
        buyItemCount = discountShopacado[id].details[1].split('/')[0]
        forPrice = discountShopacado[id].details[1].split('/')[1]

      } else if (qty >= Number(discountShopacado[id].details[1].split('/')[0])) {
        itemPrice = discountShopacado[id].details[1].split('/')[1]
        buyItemCount = ''
        forPrice = ''
        hideAppikonDiscountMsg = true
      }

      document.querySelectorAll('.item_product__price .pr')[index].innerText = itemPrice

      if (hideAppikonDiscountMsg) {
        document.querySelectorAll('.slide_in__message')[index].hidden = true
        document.querySelectorAll('.slide_in__message p')[index].innerHTML = ''
      } else {
        document.querySelectorAll('.slide_in__message ')[index].hidden = false

        if (msgType === 1) {
          document.querySelectorAll('.slide_in__message p')[index].innerHTML = `Buy ${buyItemCount} and get each for <span class="c-purple">${forPrice}</span>, saving even more`
        } else {
          document.querySelectorAll('.slide_in__message p')[index].innerHTML = `Buy ${buyItemCount} to get <span class="c-purple">${forPrice}</span> off each`
        }
      }
    }
  }

  function priceSubstr(price) {
    let str = price.toString()
    return str.substr(0, str.length - 2) + '.' + str.substr(str.length - 2, str.length)
  }

  const drawCartItems = async (data) => {
    const cart = data
    const cartItems = cart.items
    const cartItemsLength = cartItems.length

    const $itemsWrapper = document.querySelector('.slide_in__products')

    cartItems.forEach(({ id, variant_id, title, image, quantity }, index) => {
      const waitForEl = setInterval(() => {
        if (
          document.querySelectorAll('.oldprice strong')[index]
          && document.querySelectorAll('.discounted_price')[index]
        ) {
          clearInterval(waitForEl)

          const clientItemOldPrice = document.querySelectorAll('.oldprice strong')[index].innerText
          const clientCurrentPrice = document.querySelectorAll('.discounted_price')[index].innerText

          $itemsWrapper.insertAdjacentHTML('beforeend', cartItemHTML(id, variant_id, title, image, quantity, clientItemOldPrice, clientCurrentPrice))
        }
      }, WAIT_INTERVAL_TIMEOUT)
    })

    drawBundle(cartItems)

    const waitForQtySigns = setInterval(() => {
      if (document.querySelectorAll('.calc_action.calc_action__plus')[cartItemsLength - 1]) {
        clearInterval(waitForQtySigns)

        const qtyBlocks = document.querySelectorAll('.calc_block')

        qtyBlocks.forEach((block, index) => {

          appikonMsgDiscount(block.closest('.item_product').dataset.id, block.querySelector('.clac_qty').value, index)

          block.addEventListener('click', (e) => {
            const target = e.target

            if (target.closest('.calc_action__minus')) {
              // sendGAEvent('click on the minus', index)

              if (block.querySelector('.clac_qty').value > 1) {
                block.querySelector('.clac_qty').value = block.querySelector('.clac_qty').value - 1

                updateQty(
                  document.querySelectorAll('.clac_qty')[index].closest('.item_product').dataset.id,
                  block.querySelector('.clac_qty').value)
                  .then(() => {
                    drawTotalPrices()
                    appikonMsgDiscount(block.closest('.item_product').dataset.id, block.querySelector('.clac_qty').value, index)
                  })
              }
            }

            if (target.closest('.calc_action__plus')) {
              block.querySelector('.clac_qty').value = Number(block.querySelector('.clac_qty').value) + 1

              updateQty(
                document.querySelectorAll('.clac_qty')[index].closest('.item_product').dataset.id,
                block.querySelector('.clac_qty').value)
                .then(() => {
                  drawTotalPrices()
                  appikonMsgDiscount(block.closest('.item_product').dataset.id, block.querySelector('.clac_qty').value, index)
                })

              // sendGAEvent('click on the plus', index)
            }
          })
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)

    const waitForQtyInputs = setInterval(() => {
      if (document.querySelectorAll('.clac_qty')[cartItemsLength - 1]) {
        clearInterval(waitForQtyInputs)

        document.querySelectorAll('.clac_qty').forEach((input, index) => {
          let initialValue = input.value

          input.addEventListener('blur', (event) => {
            let newValue = event.target.value

            // Compare the new value with the previous value
            if (newValue !== initialValue) {
              // The user has typed a new number             

              updateQty(document.querySelectorAll('.clac_qty')[index].closest('.item_product').dataset.id, newValue, true)
            }
          })
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)

    const waitForDeletes = setInterval(() => {
      if (document.querySelectorAll('.item_product__delete')[cartItemsLength - 1]) {
        clearInterval(waitForDeletes)

        document.querySelectorAll('.item_product__delete').forEach((element, index) => {
          element.addEventListener('click', () => {

            let name = element.closest('.item_product').querySelector('.item_product__name').innerText

            sendGAEventNew('exp_bundle_cart_delete_sh_cart', `Delete - ${name}`, 'Button', 'Shopping cart')
            document.querySelectorAll('.delbutton a')[index].click()
          })
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function extractNumbers(str) {
    return Number(str.replace(/[^0-9]/g, ""))
  }

  function dividePriceInto6Payments(price) {
    // Remove the dollar sign and convert the price to a number
    const numericPrice = Number(price.replace('$', ''))

    // Calculate the amount for each payment
    const paymentAmount = Math.floor((numericPrice / 6) * 100) / 100

    // Calculate the rounded payment amount
    const roundedPaymentAmount = paymentAmount.toFixed(2)

    // Create an array to store the payments
    const payments = []

    // Add the rounded payment amount to the array for the first 5 payments
    for (let i = 0; i < 5; i++) {
      payments.push('$' + roundedPaymentAmount)
    }

    // Calculate the remaining amount for the last payment
    const lastPayment = (numericPrice - roundedPaymentAmount * 5).toFixed(2)

    // Add the last payment to the array
    payments.push('$' + lastPayment)

    return payments
  }

  const drawTotalPrices = () => {
    fetchCartData().then((data) => {
      const itemsCount = data.item_count // Shopping cart (2)
      const itemsLength = data.items.length

      const waitForElsPrice = setInterval(() => {
        if (
          document.querySelectorAll('.slide_in__products .item_product__price .compare')[itemsLength - 1]
          && document.querySelectorAll('.slide_in__products .item_product__price .pr')[itemsLength - 1]
          && typeof appikon?.discounts?.additional_discount_value !== 'undefined'
        ) {
          clearInterval(waitForElsPrice)

          const itemsPrice = document.querySelectorAll('.slide_in__products .item_product__price')

          let itemsTotal = 0
          let subTotalItemsSum = 0
          let emptyCompareFixSum = 0

          itemsPrice.forEach((element, index) => {
            itemTotal = element.querySelector('.compare').innerText
            itemCurrent = element.querySelector('.pr').innerText
            let qty = data.items[index].quantity

            itemsTotal = itemsTotal + (extractNumbers(itemTotal) * qty)
            subTotalItemsSum = subTotalItemsSum + (extractNumbers(itemCurrent) * qty)

            if (!itemsTotal) {
              emptyCompareFixSum = emptyCompareFixSum + subTotalItemsSum
            }
          })

          let saveDifference = (itemsTotal - subTotalItemsSum) + emptyCompareFixSum
          // let splititPrice = (priceSubstr(subTotalItemsSum) / 6).toFixed(2)
          let splititPrice = dividePriceInto6Payments(priceSubstr(subTotalItemsSum))[0]

          const discountPrice = appikon?.discounts?.additional_discount_value || 0

          const waitForEls = setInterval(() => {
            if (
              document.querySelector(".slide_in__subtotal .compare")
              && document.querySelector(".slide_in__subtotal .pr")
              && document.querySelector('.slide_in__saved')
              && document.querySelector('.slide_in__timer p + p .c-purple')
            ) {
              clearInterval(waitForEls)

              document.querySelector(".slide_in__subtotal .compare").innerText = '$' + priceSubstr(itemsTotal + emptyCompareFixSum)
              document.querySelector(".slide_in__subtotal .pr").innerText = '$' + (+priceSubstr(subTotalItemsSum) - discountPrice).toFixed(2)
              document.querySelector('.slide_in__saved').innerText = 'You just saved ' + '$' + (+priceSubstr(saveDifference) + discountPrice).toFixed(2)
              document.querySelector('.slide_in__timer p + p .c-purple').innerText = '$' + (+priceSubstr(saveDifference) + discountPrice).toFixed(2)

              displayPurpleYayBannerVariant()

              // document.querySelector('.slide_in__total .compare + span').innerText = currentPrice || originalPrice
              // document.querySelector('.slide_in__total .slide_in__saved').innerText = `You just saved ${formattedSaved}`
              // document.querySelector('.slide_in__timer .c-purple').innerText = `${formattedSaved}`
            }
          }, WAIT_INTERVAL_TIMEOUT)

          if (DEVICE === 'desktop') {
            const waitForEl = setInterval(() => {
              if (document.querySelector('.right_part .splitit_inner p span')) {
                clearInterval(waitForEl)

                document.querySelector('.right_part .splitit_inner p span').innerText = splititPrice
              }
            }, WAIT_INTERVAL_TIMEOUT)
          } else {
            const waitForEl = setInterval(() => {
              if (
                document.querySelector(".splitit_fixed .price")
                && document.querySelector(".slide_in__total .splitit_inner p span")

              ) {
                clearInterval(waitForEl)

                document.querySelector(".splitit_fixed .price").innerText = '$' + (+priceSubstr(subTotalItemsSum) - discountPrice).toFixed(2)

                document.querySelector(".slide_in__total .splitit_inner p span").innerText = splititPrice
                document.querySelector(".splitit_fixed .splitit_inner p span").innerText = splititPrice
                document.querySelector(".garunteesec + .splitit_inner p span").innerText = splititPrice
              }
            }, WAIT_INTERVAL_TIMEOUT)
          }
        }
      }, WAIT_INTERVAL_TIMEOUT)

      const waitForItemsCount = setInterval(() => {
        if (document.querySelector('.slide_in__header span')) {
          clearInterval(waitForItemsCount)

          document.querySelector('.slide_in__header span').innerText = itemsCount
        }
      }, WAIT_INTERVAL_TIMEOUT)
    })
  }

  const drawBundle = async (items) => {
    let obj = {}

    items.forEach(element => {
      obj[element.id] = 'true'
    })

    const firstItemId = items[0].id

    const upsell = bundles[firstItemId]

    if (upsell) {
      const upsellId = upsell[0]
      const upsellHandle = upsell[1]

      for (const item of items) {
        if (obj[upsellId]) {
          // console.log("Found similar item!", item.title)
          break // Stop the loop
        } else {

          let removeFirstCartItem = (firstItemId === 40322897838134 || firstItemId === 32854816784438) && items[0].quantity === 1

          const product = await fetch(`/products/${upsellHandle}.js`).then(response => response.json())

          if (DEVICE === 'desktop') {

            if (firstItemId === 40322897838134 || firstItemId === 32854816784438) {
              document.querySelector('.slide_in__bundle').innerHTML = /*html*/`
            <p class="c-purple fw-medium"><span class="fw-bold">Bundle up and save</span>: get ${upsell[4]} off when you buy our
              package deal!</p>
            <li>
              <div class="d-flex">
                <div class="bundle_special">
                <div>
                  <p><img src="${IMAGE_DIR_URL}/bundle_part_1.png" alt=""></p>
                  <p class="item_product__name">Novaa light Pro</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g id="Add" clip-path="url(#clip0_774_8484)">
                  <path id="Vector" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#212121"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_774_8484">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                <div style="align-items: center;">
                  <p><img src="${IMAGE_DIR_URL}/bundle_part_2.png" alt=""></p>
                  <p class="item_product__name">Novaa light Pad</p>
                </div>
                </div>
                <div>
                  <p class="item_product__price"><span class="compare">${upsell[2]}</span> 
                  <span
                      class="pr c-purple fw-bold">${upsell[3]}</span></p>
                      <div class="splitit_inner">
          <p>Pay <span>${dividePriceInto6Payments(upsell[3])[0]}</span>/month with</p>
          <img src="//upstream.production.splitit.com/v1/img/logo/logo-purple.svg?v=1.3.48" alt="splitit">
          <span class="learn">Learn more</span>
        </div>
                      <button type="button" class="btn-purple add-to-cart" onclick="addItem('${product.title}', ${upsellId}, ${removeFirstCartItem ? firstItemId : null})">Add to cart</button>
                </div>
              </div>
            </li>`
            } else {
              document.querySelector('.slide_in__bundle').innerHTML = /*html*/`
          <p class="c-purple fw-medium"><span class="fw-bold">Bundle up and save</span>: get ${upsell[4]} off when you buy our
            package deal!</p>
          <li>
            <div class="d-flex">
              <div>
                <p><img src="${product.featured_image}" alt=""></p>
                <p class="item_product__name">${product.title}</p>
              </div>
              <div>
                <p class="item_product__price"><span class="compare">${upsell[2]}</span> 
                <span
                    class="pr c-purple fw-bold">${upsell[3]}</span></p>
                    <div class="splitit_inner">
        <p>Pay <span>${dividePriceInto6Payments(upsell[3])[0]}</span>/month with</p>
        <img src="//upstream.production.splitit.com/v1/img/logo/logo-purple.svg?v=1.3.48" alt="splitit">
        <span class="learn">Learn more</span>
      </div>
                    <button type="button" class="btn-purple add-to-cart" onclick="addItem('${product.title}', ${upsellId}, ${removeFirstCartItem ? firstItemId : null})">Add to cart</button>
              </div>
            </div>
          </li>`
            }
          } else {
            document.querySelector('.slide_in__bundle').innerHTML = /*html*/`
      <p class="c-purple fw-medium"><span class="fw-bold">Bundle up and save</span>: get ${upsell[4]} off when you buy our
        package deal!</p>
      <li>
        <div class="d-flex">
          <p ${(firstItemId === 40322897838134 || firstItemId === 32854816784438) ? 'class="bundle_special_img"' : ''}><img src="${product.featured_image}" alt=""></p>
          <div>
            <p class="item_product__name">${product.title}</p>
            <p class="item_product__price"><span class="compare">${upsell[2]}</span> <span
                class="pr c-purple fw-bold">${upsell[3]}</span></p>
                <button type="button" class="btn-purple add-to-cart" onclick="addItem('${product.title}', ${upsellId}, ${removeFirstCartItem ? firstItemId : null})">Add to cart</button>
          </div>
        </div>
      </li>`
          }

          waitForElement('.slide_in__bundle').then(el => {
            checkVisibility(el,
              'exp_bundle_cart_bundle_v',
              'Product title',
              'Visibility or Hover',
              'Bundle up and save section',
            )
          })

          break // Stop the loop
        }
      }

      drawMayLike(items, upsellId)
    } else {
      drawMayLike(items)
    }
  }

  const splititLogicFixed = () => {
    const waitForEls = setInterval(() => {
      const hideElement = document.querySelector('.splitit_fixed')
      const targetElement = document.querySelector('.slide_in__subtotal')

      if (targetElement && hideElement) {
        clearInterval(waitForEls)

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              hideElement.classList.add('hide_footer')
            } else {
              hideElement.classList.remove('hide_footer')
            }
          })
        })

        observer.observe(targetElement)

      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  const drawMayLike = (cartItems, upsellId) => {
    let obj = {}

    cartItems.forEach(element => {
      obj[element.id] = 'true'
    })

    if (upsellId) {
      obj[upsellId] = 'true'
    }

    if (document.querySelectorAll('.upsellrow').length > 0) {
      let items = []

      document.querySelectorAll('.upsellrow').forEach((item, index) => {
        const img = item.querySelector('.upsellimg img')?.src
        const name = item.querySelector('.prodnamecart').innerText
        const oldPrice = item.querySelector('.upsellprice em').innerText
        const currPrice = item.querySelector('.upsellprice strong').innerText
        const id = item.querySelector('[data-variant]').dataset.variant

        // Create an object with the item information
        const itemInfo = {
          id,
          img,
          name,
          oldPrice,
          currPrice,
          index,
        }

        items.push(itemInfo)
        // Save the updated items array to session storage
        sessionStorage.setItem('mayLikeItems', JSON.stringify(items))

        if (!obj[id]) {
          document.querySelector('.may_like ul').insertAdjacentHTML('beforeend', drawMayLikeUpsell(img, name, oldPrice, currPrice, id))
        }
      })
    }

    if (document.querySelectorAll('.may_like ul li').length > 0) {
      document.querySelector('.may_like').hidden = false

      checkVisibility(document.querySelector('.may_like'),
        'exp_bundle_cart_also_like_v',
        'You may also like',
        'Visibility or Hover',
        'You may also like'
      )
    }
  }

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  getCart().then((data) => {
    document.head.insertAdjacentHTML('beforeend', style)

    if (data.items.length > 0) {
      waitForElement('.shopping_cart form div').then(() => {
        document.head.insertAdjacentHTML('beforeend', /*html*/`
        <style>
          @media only screen and (max-width:768px) {
            #PageContainer {
                padding-bottom: 170px;
            }
          }
        </style>
        `)
        document.head.insertAdjacentHTML('beforeend', splititStyle)

        if (DEVICE === 'desktop') {
          waitForElement('#PageContainer main').then(el => el.insertAdjacentHTML('afterend', cartHTMLDesktop))
        } else {
          waitForElement('#PageContainer main').then(el => el.insertAdjacentHTML('afterend', cartHTML))
        }

        const waitForCart = setInterval(() => {
          if (
            document.querySelector('.slide_in__products')
            && document.querySelector('.slide_in__discount')
          ) {
            clearInterval(waitForCart)

            drawCartItems(data).then(() => drawTotalPrices())

            const waitForAppikonDiscountVar = setInterval(() => {
              if (typeof appikon?.discounts?.additional_discount_value !== 'undefined') {
                clearInterval(waitForAppikonDiscountVar)
                // waitForElement('#apply-appikon-discount').then(() => {
                if (appikon['discounts']['additional_discount_value'] != null && appikon['discounts']['additional_discount_value'] != 0) {
                  isCompleted = true
                }

                if (isCompleted == true) {
                  let completedIntervat = setInterval(() => {
                    if (appikon['discounts']['additional_discount_value'] != null && appikon['discounts']['additional_discount_value'] != 0) {
                      clearInterval(completedIntervat)
                      new Discount(document.querySelector('.slide_in__discount'), true).render()
                    }
                  }, 200)
                } else {
                  let notCompletedIntervat = setInterval(() => {
                    if (appikon['discounts']['additional_discount_value'] == null || appikon['discounts']['additional_discount_value'] == 0) {
                      clearInterval(notCompletedIntervat)
                      new Discount(document.querySelector('.slide_in__discount'), false).render()
                    }
                  }, 200)
                }
                // })
              }
            }, WAIT_INTERVAL_TIMEOUT)

            if (DEVICE === 'mobile') {
              splititLogicFixed()
            }

            document.body.insertAdjacentHTML('beforeend', splititPopup)
          }
        }, WAIT_INTERVAL_TIMEOUT)

        // splitit
        const waitForSplitit = setInterval(() => {
          if (
            document.getElementById('custom_cart')
            && document.querySelector('.splitit_popup_container .top')
            && document.querySelector('.calculations_container')
            && document.querySelectorAll('.close_splitit')[1]
          ) {
            clearInterval(waitForSplitit)

            document.getElementById('custom_cart').addEventListener('click', (e) => {
              if (e.target.matches('span.learn')) {
                let totalPrice = ''

                if (e.target.closest('.slide_in__bundle')) {
                  totalPrice = document.querySelector('.slide_in__bundle .pr').innerText
                } else {
                  totalPrice = document.querySelector('.slide_in__subtotal .pr').innerText
                }

                document.querySelector('.top [data-price] span').innerText = dividePriceInto6Payments(totalPrice)[0] + ' /month'
                document.querySelector('.total [data-price] span').innerText = totalPrice

                document.querySelectorAll('.payments [data-price] span').forEach((span, index) => {
                  span.innerText = dividePriceInto6Payments(totalPrice)[index]
                })

                document.querySelector('.splitit_overlay').classList.add('opened_splitit_popup')
              }
            })

            const closeSplititPopup = () => {
              document.querySelector('.splitit_overlay').classList.remove('opened_splitit_popup')
              sendGAEventNew('exp_bundle_cart_splitit_popup_close', 'Close', 'Event', 'Splitit Popup')
            }

            document.querySelector('.splitit_overlay').addEventListener('click', function (event) {
              // check if the clicked element is not inside the popup container
              if (!document.querySelector('.splitit_popup_container').contains(event.target) && document.querySelector('.opened_splitit_popup')) {
                // remove the "opened_splitit_popup" class from the popup container
                closeSplititPopup()
              }
            })

            document.querySelector('.splitit_popup_container button').addEventListener('click', function (event) {
              closeSplititPopup()
            })

            if (DEVICE === 'mobile') {
              document.querySelector('.splitit_popup_container .top').addEventListener('click', () => {
                document.querySelector('.calculations_container').classList.add('opened_this')
                // sendGAEvent('Click on payments', 'Splitit popup')
              })
            }

            for (const close of document.querySelectorAll('.close_splitit')) {
              close.addEventListener('click', () => {
                closeSplititPopup()
              })
            }
          }
        }, WAIT_INTERVAL_TIMEOUT)

        const waitForHighlight = setInterval(() => {
          if (document.querySelectorAll('.slide_in__timer p')[1]) {
            clearInterval(waitForHighlight)

            checkVisibility(
              document.querySelector('.slide_in__timer p'),
              'exp_bundle_cart_save_50_v',
              'Save up to 50% on bundles',
              'Visibility or Hover',
              'Highlight',
            )
            checkVisibility(document.querySelector('.slide_in__timer p + p'),
              'exp_bundle_cart_yay_v',
              'Yay! You just saved',
              'Visibility or Hover',
              'Highlight',
            )
          }
        }, WAIT_INTERVAL_TIMEOUT)

        const waitForTotalCheckout = setInterval(() => {
          if (
            document.querySelector('.slide_in__total .splitit_wrap a')
            && document.querySelector('.slide_in__total .learn')
          ) {
            clearInterval(waitForTotalCheckout)

            checkVisibility(document.querySelector('.slide_in__total .splitit_wrap'),
              'exp_bundle_cart_checkoutsub_v',
              'Checkout',
              'Visibility or Hover',
              'New checkout section under subtotal'
            )

            document.querySelector('.slide_in__total .splitit_wrap a').addEventListener('click', () => {
              sendGAEventNew('exp_bundle_cart_checkoutsub_b', 'Checkout', 'Button', 'New checkout section under subtotal')
            })

            document.querySelector('.slide_in__total .learn').addEventListener('click', () => {
              sendGAEventNew('exp_bundle_cart_checkoutsub_lm', 'Learn more', 'Button', 'New checkout section under subtotal')
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)

        if (DEVICE === 'mobile') {
          const waitForFixedCheckout = setInterval(() => {
            if (
              document.querySelector('.splitit_fixed a')
              && document.querySelector('.splitit_fixed .learn')
              && document.querySelector('#custom_cart .garunteesec + .splitit_inner .learn')
            ) {
              clearInterval(waitForFixedCheckout)

              checkVisibility(document.querySelector('.splitit_fixed'),
                'exp_bundle_cart_checkoutst_v',
                'Checkout',
                'Visibility or Hover',
                'New checkout stiky section'
              )

              document.querySelector('.splitit_fixed a').addEventListener('click', () => {
                sendGAEventNew('exp_bundle_cart_checkoutst_b', `Checkout - ${getScrollDepth()}`, 'Button', 'New checkout stiky section')
              })

              document.querySelector('.splitit_fixed .learn').addEventListener('click', () => {
                sendGAEventNew('exp_bundle_cart_checkoutst_lm', 'Learn more', 'Button', 'New checkout stiky section')
              })

              document.querySelector('#custom_cart .garunteesec + .splitit_inner .learn').addEventListener('click', () => {
                sendGAEventNew('exp_bundle_cart_under_guarantee_lm', 'Learn more', 'Button', 'New checkout section under guarantee')
              })
            }
          }, WAIT_INTERVAL_TIMEOUT)
        }
      })
    } else {

      if (sessionStorage.getItem('mayLikeItems')) {
        document.head.insertAdjacentHTML('beforeend', style)

        const items = JSON.parse(sessionStorage.getItem('mayLikeItems'))
        let itemsHTML = ''

        items.forEach(({ id, img, name, oldPrice, currPrice }) => {
          itemsHTML = itemsHTML + drawMayLikeUpsell(img, name, oldPrice, currPrice, id)
        })

        waitForElement('#PageContainer main').then(el => el.insertAdjacentHTML('afterend', /*html*/`
            <div id="custom_cart">
              <div class="may_like_only_inner">
                <div class="slide_in__header">
                  <p>Shopping cart</p>
                </div>
                <div class="may_like">
                  <h4 class="fw-semi">You may also like</h4>
                  <ul>${itemsHTML}</ul>
                </div>
              </div>
            </div>
        `))

        waitForElement('.may_like').then((el) => {
          checkVisibility(el,
            'exp_bundle_cart_also_like_v',
            'You may also like',
            'Visibility or Hover',
            'You may also like'
          )
        })
      }
    }
  })
} else {

  const thankBlockStyle = /*html*/`
  <style>
    #as_after_customer_info {
      display: none !important;
    }

    .offer {
      border-radius: 4px;
      border: 2px solid #F5F5FD;
      margin-top: 40px;
    }

    .offer p {
      margin: 0;
    }

    .offer_header {
      padding: 8px 16px;
      background: #F5F5FD;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .offer_header p {
      /* H - Type/18 Bold - H6 */
      font-size: 18px;
      
      font-weight: 700;
      line-height: 26px;
      color: #212121;
    }

    .offer_header span {
      color: #7B26D6;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
    }

    .d-flex {
      display: flex;

    }

    .offer_item {
      display: flex;
    }

    .item_info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }

    .offer_body {
      padding: 20px;
    }

    .username {
      color: #7B26D6;
      font-size: 20px;
      
      font-weight: 600;
      line-height: 28px;
    }

    .offer_item {
      margin: 16px 0;
    }

    .offer img {
      width: 120px;
      height: 120px;
      flex-shrink: 0;
      border-radius: 6px;
      border: 1px solid #E2E2E2;
      margin-right: 24px;
    }

    .slide_in__saved {
      background: rgba(216, 68, 50, 0.2);
      padding: 5px 6px 4px 12px;
      position: relative;
      font-size: 14px;
      line-height: 15px;
      color: #D84432;
      margin-left: auto;
      width: fit-content;
      border-radius: 2px;
      margin-left: 16px;
      font-weight: 600;
      border-radius: 2px;
    }

    .slide_in__saved::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 11px 0 11px 8px;
      border-color: transparent transparent transparent #fff;
    }

    .btn-purple {
      background: radial-gradient(90.92% 2726% at 2.15% 56%, #691BEA 0%, #9E41EF 100%) !important;
      border-radius: 4px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 36px;
      text-align: center;
      letter-spacing: 1px;
      color: #FFFFFF;
      border: none;
      width: 100%;
      display: block;
      position: relative;
      min-height: 50px;
      cursor: pointer;
    }

    .item_info>p {
      color: #212121;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
    }


    .item_info .old {
      color: #939393;
      text-decoration: line-through;
      /* H - Type/18 Regular - H6 */
      font-size: 18px;
      line-height: 26px;
      font-weight: 500;
    }

    .item_info .new {
      color: #773BD9;
      /* H - Type/18 Bold - H6 */
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
    }

    /* Chrome, Safari, Edge, Opera */
    .offer input[type=number]::-webkit-outer-spin-button,
    .offer input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .calc_action {
      width: 35px;
      height: 36px;
      background-color: #fff;

      position: relative;
      border: 1px solid #E2E2E2 !important;
    }

    .calc_action:after,
    .calc_action:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #7B26D6;
      pointer-events: none;
    }

    .calc_action:before {
      width: 12px;
      height: 2px;
    }

    .calc_action:hover {
      border-color: #773BD9 !important;
    }

    .calc_action.calc_action__minus {
      border-radius: 4px 0 0 4px;
      cursor: pointer;
    }

    .calc_action.calc_action__plus {
      border-radius: 0 4px 4px 0;
      cursor: pointer;
    }

    .calc_action.calc_action__plus:after {
      width: 2px;
      height: 12px;
    }

    /*.calc_action:hover:after,
    .calc_action:hover:before {
      background-color: #0A0A0A;
    }*/

    input.clac_qty {
      width: 36px;
      line-height: 34px;
      padding: 0;
      text-align: center;
      border: none;
      border-top: 1px solid #E2E2E2;
      border-bottom: 1px solid #E2E2E2;
      background: transparent;
      font-weight: 700;
      font-size: 16px;
      color: #212121;
    }

    .custom-select {
      position: relative;
      display: inline-block;
    }

    .custom-select select {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      padding: 8px 32px 8px 8px;
      border: 1px solid var(--border, #E2E2E2);
      border-radius: 4px;
      background-color: white;
      color:  #212121;
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;     
      
    }

    .custom-select svg {
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      pointer-events: none;
    }

    .signs_row {
      justify-content: space-between;
    }

    @media only screen and (max-width: 768px) {
      .slide_in__saved {
        margin: 0;
      }

      .offer_header span,
      .offer_header p,
      .item_info>p,
      .item_info .old
      .item_info .new {
        font-size: 14px;
        line-height: 20px;
      }

      .item_info.bottom {
        flex-direction: row;
        margin: 16px 0;
      }

      .bottom .item_info .old,
      .bottom .item_info .new {
        font-size: 16px;
      }
      
      .custom-select,
      .custom-select select {
        width: 100%;
      }
    }
  </style>
  `

  let thankBlock = (name, imgUrl, itemTitle, options) => /*html*/`
   <div class="offer">
    <div class="offer_header">
      <p>Personalized offer is reserved for:</p>
      <span id="timer">15:00</span>
    </div>
    <div class="offer_body">
      <p class="username">Exclusive offer only for you, <span>${name}</span></p>
      <div class="offer_item">
        <img src="${imgUrl}" alt="${itemTitle}">
        <div class="item_info">
          <p>${itemTitle}</p>
          <div class="d-flex">
            <p>
              <span class="old"></span>
              <span class="new"></span>
            </p>
            <div class="slide_in__saved fw-semi">You saved <span></span></div>
          </div>
          <div class="d-flex signs_row">
            <div class="d-flex calc_block">
              <button type="button" class="calc_action calc_action__minus"></button>
              <input type="number" value="1" class="clac_qty" min="1">
              <button type="button" class="calc_action calc_action__plus"></button>
            </div>
            <div class="custom-select">
              <select>
                ${options}
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <g id="Frame 36042">
                  <path id="Vector 988" d="M0.875 3L6.875 9L12.875 3" stroke="#773BD9" stroke-width="2" />
                </g>
              </svg>
            </div>

          </div>
        </div>
      </div>
      <button class="btn-purple">
        <span>Accept</span>
      </button>
    </div>
  </div>
  `

  if (DEVICE === 'mobile') {
    thankBlock = (name, imgUrl, itemTitle, options) => /*html*/`
   <div class="offer">
    <div class="offer_header">
      <p>Personalized offer is reserved for:</p>
      <span id="timer">15:00</span>
    </div>
    <div class="offer_body">
      <p class="username">Exclusive offer only for you, <span>${name}</span></p>
      <div class="offer_item">
        <img src="${imgUrl}" alt="${itemTitle}">
        <div class="item_info">
          <p>${itemTitle}</p>
          <div class="d-flex">
            <p>
              <span class="old"></span>
              <span class="new"></span>
            </p>
          </div>
          <div class="d-flex signs_row">
            <div class="d-flex calc_block">
              <button type="button" class="calc_action calc_action__minus"></button>
              <input type="number" value="1" class="clac_qty" min="1">
              <button type="button" class="calc_action calc_action__plus"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-select">
              <select>
                ${options}
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <g id="Frame 36042">
                  <path id="Vector 988" d="M0.875 3L6.875 9L12.875 3" stroke="#773BD9" stroke-width="2" />
                </g>
              </svg>
            </div>
      <div class="d-flex bottom item_info">
            <p>
              <span class="old"></span>
              <span class="new"></span>
            </p>
            <div class="slide_in__saved fw-semi"><span></span></div>
          </div>
      <button class="btn-purple">
        <span>Accept</span>
      </button>
    </div>
  </div>
  `
  }

  document.head.insertAdjacentHTML('beforeend', thankBlockStyle)

  const waitForEl = setInterval(() => {
    if (
      document.getElementById('main-header')
      && document.querySelector('.thank-you__additional-content')
      && document.querySelector('.as-product-title')
      && document.querySelector('.as-img')
      && document.querySelector('.as-product-variants select')
    ) {
      clearInterval(waitForEl)

      const name = document.getElementById('main-header').innerText.split(', ')[1]
      const title = document.querySelector('.as-product-title').innerText
      const imageUrl = getBackgroundImageUrl(document.querySelector('.as-img'))
      const variants = document.querySelector('.as-product-variants select').innerHTML

      document.querySelector('.thank-you__additional-content').insertAdjacentHTML('beforebegin', thankBlock(name, imageUrl, title, variants))

      const waitForPrice = setInterval(() => {
        if (
          document.getElementById('as-price')
          && document.getElementById('as-compare-price')
          && document.querySelector('.new')
          && document.querySelector('.old')
          && document.querySelector('.slide_in__saved')
          && document.querySelectorAll('.calc_block button')[1]
          && document.querySelector('.calc_block input')
          && document.querySelector('.btn-purple')
          && document.querySelector('.as-product-atc')
        ) {
          clearInterval(waitForPrice)

          updatePrice()

          document.querySelector('.calc_block .calc_action__minus').addEventListener('click', () => {
            if (document.querySelector('.clac_qty').value > 1) {
              document.querySelector('.clac_qty').value = +document.querySelector('.clac_qty').value - 1
              document.getElementById('as-qty-minus').click()
              updatePrice()

              sendGAEventNew('exp_bundle_cart_change_qty_ty_page', `Changing the quantity - ${document.querySelector('.clac_qty').value}`, 'Event', 'Thank you Page')
            }
          })

          document.querySelector('.calc_block .calc_action__plus').addEventListener('click', () => {
            document.querySelector('.clac_qty').value = +document.querySelector('.clac_qty').value + 1
            document.getElementById('as-qty-plus').click()
            updatePrice()

            sendGAEventNew('exp_bundle_cart_change_qty_ty_page', `Changing the quantity - ${document.querySelector('.clac_qty').value}`, 'Event', 'Thank you Page')
          })

          document.querySelector('.clac_qty').addEventListener('input', function (event) {
            const inputValue = event.target.value
            const inputElement = document.querySelector('.as-quantitySelection input')

            // if (!inputValue) {
            //   event.target.value = '1'
            // } else {

            // }

            let newValue = event.target.value

            // Modify the input value
            inputElement.value = newValue

            // Create and dispatch the 'input' event
            const inputEvent = new Event('change', { bubbles: true })
            inputElement.dispatchEvent(inputEvent)

            sendGAEventNew('exp_bundle_cart_change_qty_ty_page', `Changing the quantity - ${document.querySelector('.clac_qty').value}`, 'Event', 'Thank you Page')

            updatePrice()
          })

          document.querySelector('.btn-purple').addEventListener('click', () => {
            document.querySelector('.as-product-atc').click()
            sendGAEventNew('exp_bundle_cart_accept_ty_page', 'Accept', 'Button', 'Thank you Page')
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }
  }, WAIT_INTERVAL_TIMEOUT)

  function getBackgroundImageUrl(element) {
    const style = getComputedStyle(element)
    const backgroundImage = style.backgroundImage
    const urlRegex = /url\(['"]?(.*?)['"]?\)/
    const matches = backgroundImage.match(urlRegex)

    if (matches && matches.length > 1) {
      return matches[1]
    } else {
      return null
    }
  }

  function calculatePriceDifference(currPrice, oldPrice) {
    // Extract the numeric values from the price strings
    const currPriceValue = parseFloat(currPrice.textContent.replace(/[^0-9.-]+/g, ''))
    const oldPriceValue = parseFloat(oldPrice.textContent.replace(/[^0-9.-]+/g, ''))

    // Calculate the price difference
    const priceDifference = oldPriceValue - currPriceValue

    // Generate the message based on the price difference
    let message = ''
    if (priceDifference > 0) {
      message = `You save $${priceDifference.toFixed(2)}`
    }

    return message
  }

  function updatePrice() {
    setTimeout(() => {
      running = false

      const currPrice = document.getElementById('as-price') // $104.93
      const oldPrice = document.getElementById('as-compare-price') // $299.90

      let diff = calculatePriceDifference(currPrice, oldPrice)

      document.querySelector('.new').innerText = currPrice.innerText
      document.querySelector('.old').innerText = oldPrice.innerText

      document.querySelector('.slide_in__saved').innerText = diff

      if (DEVICE === 'mobile') {
        document.querySelector('.bottom .new').innerText = currPrice.innerText
        document.querySelector('.bottom  .old').innerText = oldPrice.innerText
      }
    }, 500)
  }
}

// GA loaded and Clarity
sendGAEventNew('loaded')

const recordClarity = setInterval(() => {
  if (typeof clarity === 'function') {
    clearInterval(recordClarity)
    clarity('set', `bundle_cart_${DEVICE}`, 'variant_1')
  }
}, WAIT_INTERVAL_TIMEOUT)