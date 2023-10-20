const dir = 'https://conversionratestore.github.io/projects/7879co/img/'

console.log(
  '%c EXP: Improvements at Checkout',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = (selector) => document.querySelectorAll(selector)
const $el = (selector) => document.querySelector(selector)

const pushDataLayer = (name, desc, type = '', loc = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`${name} / ${desc} / ${type} / ${loc}`)
}

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', ' improvements_at_checkout', 'variant_1')
  }
}, 1000)

const device = window.innerWidth < 769 ? 'mobile' : 'desktop'

let clickKlarnaBtn = false;
let clickRemovePromo = false;
let isEvent = false;

class CheckoutUpdate {
  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    const globalMutation = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.target === $el('div#headlessui-portal-root') &&
          mutation.addedNodes.length > 0 &&
          $el('[data-testid="signin-modal"]')
        ) {
          $el('[data-testid="signin-modal"] #signup').click()
        }
        if (this.checkPageUrl() === 'checkout') {
          this.changeHeaders()
          this.addWarantyBanner()
        }
      })
      this.styleAppend()
      this.createCartSummary()
      globalMutation.disconnect()
      this.fixFormAndBlocks()
      if (device == 'mobile') {
        this.createTotalPayment()
      }
      this.createPaymentMethod()
      this.createSearchPostCode()
      globalMutation.observe(document.body, {
        childList: true,
        subtree: true
      })
    })

    globalMutation.observe(document.body, {
      childList: true,
      subtree: true
    })

    this.styleAppend()
    // hide cart summary
  }
  createSearchPostCode() {
    const search = `
    <style>
      .crs-search {
        color: var(--White, #FFF);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        letter-spacing: 1.6px;
        text-transform: uppercase;
        padding: 10px 12px;
        background: var(--Grey-text-light, #B5B5B7);
        position: absolute;
        top: 0;
        right: 0;
      }
      .crs-search.active {
        background: #000000;
      }
      .crs-search + .absolute {
        display: none;
      }
      .relative.show .border-platinum-18 {
        display: block!important;
        top: calc(100% - 24px);
      }
    </style>
    <button type="button" class="flex items-center crs-search ml-1">Search
      <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.248963 0.248899C-0.0829875 0.580898 -0.0829875 1.119 0.248963 1.451L5.64789 6.8499L0.248963 12.2489C-0.0829875 12.5809 -0.0829875 13.119 0.248963 13.451C0.580903 13.7829 1.11909 13.7829 1.45104 13.451L7.45099 7.451C7.78299 7.119 7.78299 6.5809 7.45099 6.2489L1.45104 0.248899C1.11909 -0.0830011 0.580903 -0.0830011 0.248963 0.248899Z" fill="white"/>
      </svg>
    </button>`
    if (!$el('#postcode-input') || $el('.crs-search')) return
    $el('#postcode-input').parentElement.insertAdjacentHTML('afterend', search)
    $el('#postcode-input').parentElement.style = 'width: calc(100% - 110px)'
    $el('.crs-search').addEventListener('click', (e) => {
      e.target.closest('.relative').classList.add('show')
      pushDataLayer('exp_imp_ch_b_scosi_s', 'Search', 'Button', 'Secure checkout Order summery Information');
    })
    $el('#postcode-input').addEventListener('input', (e) => {
      e.target.parentElement.parentElement.classList.remove('show')
      if (e.target.value != '') {
        $el('.crs-search').classList.add('active')
      } else {
        $el('.crs-search').classList.remoe('active')
      }
    })
  }
  checkPageUrl() {
    const pageUrl = window.location.href
    if (pageUrl.includes('checkout')) {
      return 'checkout'
    } else if (pageUrl.includes('/bag/')) {
      return 'cart'
    } else {
      return 'other'
    }
  }

  styleAppend() {
    const style =
      /* html */ `
      <style class="crs-style">
        ${device == 'mobile' ? `
        main>div:first-of-type>.h-30 {
          flex-direction: row;
          height: auto;
          justify-content: space-between;
          padding: 12px 20px;
        }
        main>div:first-of-type>.h-30>.mx-auto {
          margin: 0;
        }
        `:''}
        [for="Country"] + div.absolute {
          pointer-events: none;
        }
        main>div:first-of-type {
          margin-bottom: 0;
        }
        main>div:last-child {
          padding-top: ${device == 'desktop' ? '48px': '0'};
        }
        main>div:last-child>.mb-15 {
          margin: 0 -1.25rem;
          background: #F4F4F5;
        }
        main>div:last-child>.mb-15>div {
          border-top: 1px solid #EAEAEB;
          border-bottom: 1px solid #EAEAEB;
          border-left: none;
          border-right: none;
          padding: 12px 20px;
        }
        main>div:last-child>.mb-15>div>svg {
          flex-shrink: 0;
        }
        .crs-heads {
          margin-top: 20px;
        }
        .crs-heads p {
          font-size: 13px;
        }
        .crs-header-current {
          font-weight: 600;
        }
        .crs-checkbox {
          height: 18px;
          width: 18px;
          margin-right: 11px;
          display: inline-block;
          border: 2px solid #000;
          position: relative;
        }
        .crs-checkbox::after {
          content: '\\2713';
          color: #FFF;
          position: absolute;
          font-size: 16px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }
        input:not([name="promo"]) {
          max-height: 36px;
        }
        input:checked + .crs-checkbox::after {
          opacity: 1;
        }
        input:checked + .crs-checkbox {
          background: #000;
        }
        .input-with-floating-placeholder + .absolute.left-2 + .text-p, 
        .input-with-floating-placeholder + .text-p,
        .flex.w-full.flex-col.gap-2 .w-full + .text-p {
          color: var(--Text, #484850);
        }
        .input-with-floating-placeholder+.absolute > button,
        .input-with-floating-placeholder ~ .border-platinum-18 {
          display: none!important;
        }
        .inline-block > div {
          display: inline;
        }
        #postcode-input {
          padding: 12px 16px!important;
        }
        #postcode-input+label {
          // padding-left: 16px;
          margin-left: 0;
        }
        #checkout-container {
          order: 3;
        }
        #checkout-container + div.mt-5.flex.flex-col {
          border: 1px solid var(--Borders, #EAEAEB);
          background: var(--White, #FFF);
          padding: 16px;
          margin: 12px 0 0 0;
          gap: inherit;
          display: block;
        }
        #checkout-container + div.mt-5.flex.flex-col > div {
          position: relative;
        }
        #checkout-container + div.mt-5.flex.flex-col > div:not(:last-child) {
          margin-bottom: 12px;
          border-bottom: 1px solid var(--Borders, #EAEAEB);
          padding-bottom: 12px;
        }
        #checkout-container + div.mt-5.flex.flex-col > div button.text-base {
          position: absolute;
          top: 0;
          right: 0;
          color: var(--Black, #000);
          font-style: normal;
          font-weight: 600;
        }
        #checkout-container + div.mt-5.flex.flex-col > div button.text-base * {
          font-size: 16px;
          height: auto;
          line-height: 20px;
          text-decoration-line: underline;
        }
        #checkout-container + div.mt-5.flex.flex-col > div .font-semibold {
          color: var(--Grey-text, #878789);
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; 
          margin-bottom: 12px;
        }
        #checkout-container + div.mt-5.flex.flex-col > div p.text-p,
        #checkout-container + div.mt-5.flex.flex-col > div .text-h5 {
          color: var(--Text, #484850);
          font-size: 14px;
          line-height: 20px;
        }
        .crs-delivery p.text-p,
        .crs-billing p.text-p {
          float: left;
        }
        #checkout-container + div.mt-5.flex.flex-col > div:not(:last-child) p.text-p:not(:nth-child(8), .crs-email):after,
        #checkout-container + div.mt-5.flex.flex-col > div p.text-p:last-child {
          content: ', ';
          margin-right: 4px;
        }
        #checkout-container + div.mt-5.flex.flex-col > div.crs-contact p.text-p:last-child:after {
          content: none;
        }
        .crs-free {
          color: var(--Text, #484850);
          font-size: 14px;
          line-height: 20px;
          margin-top: 8px;
          font-weight: 600;
        }
        #primer-checkout-apm-button-container {
          gap: 12px;
        }
        #primer-checkout-apm-button-container * {
          order: 1;
        }
        #primer-checkout-credit-card-button {
          border: 1px solid var(--Borders, #EAEAEB);
          background: var(--Backgraund, #F4F4F5);
          padding: 16px;
          justify-content: flex-start;
        }
        #primer-checkout-credit-card-button > svg,
        #primer-checkout-credit-card-button > span,
        #primer-checkout-go-back,
        #primer-checkout-scene-credit-card-form,
        #primer-checkout-submit-button-container {
          display: none;
        }
        #primer-checkout-apm-button-container > div:last-child {
          order: 0;
          display: block;
        }
        .PrimerCheckout__scene.PrimerCheckout--exited {
          position: inherit;
          visibility: visible;
          display: block;
          opacity: 1;
          transform: none;
        }
        .crs-svg {
          margin-left: 10px;
        }
        .crs-heads + div:not(.hidden) button .rounded, 
        .crs-heads + div.hidden + div button .rounded {
          border-radius: 0;
        }
        .crs-heads + .hidden {
          padding: 0;
          width: 100%;
          margin: 28px auto 18px;
          position: relative;
        }
        .crs-heads + .hidden .text-h3 {
          font-style: normal;
          font-weight: 400;
          margin: 0 0 15px;
          position: relative;
          padding: 0;
          z-index: 1;
          background: #fff;
          width: fit-content;
          font-size: 22px;
          line-height: 32px; 
        }
        .crs-heads + .hidden > .relative {
          position: absolute;
          left: 0;
          top: calc(100% + 16px);
          width: 100%;
          margin: 0;
        }
        .crs-heads + .hidden.relative p {
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
        label.text-platinum-32 {
          line-height: 20px;
        }
        .text-postcode {
          font-size: 13px;
          line-height: 16px;
          margin-top: 8px;
        }
        .crs-timer > div > p > span:last-child {
          color: #000!important;
          font-weight: 400!important;
        }
        .crs-text {
          font-size: 14px!important;
          font-weight: 400;
        }
        .crs-text:last-child {
          font-weight: 600;
        }
        ${device == 'desktop' ? `
        .crs-heads + .hidden {
          border: 1px solid var(--Borders, #EAEAEB);
          padding: 0 20px 20px;
          width: calc(100% - 56px);
          margin: 44px auto 20px;
        }
        .crs-heads + .hidden .text-h3 {
          font-size: 28px;
          line-height: 34px; 
          letter-spacing: -0.7px;
          margin: -20px 0 15px;
          padding: 0 5px;
        }
        #main {
          background: var(--Backgraund, #F4F4F5);
        }
        #main > div.mx-auto.w-full.p-5 > div > div {
          max-width: 551px;
          flex: auto!important;
          background: #fff;
          gap: 0;
        }
        #main > div.mx-auto.w-full.p-5 > div  {
          gap: 48px;
        }
        .overflow-auto {
          padding: 8px 28px;
          gap: 0;
        }
        .overflow-auto img {
          width: 140px;
          height: 140px;
          flex-shrink: 0;
        }
        .overflow-auto .text-p {
          color: var(--Text, #484850);
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
        }
        .overflow-auto .text-p span {
          font-weight: 600;
        }
        .overflow-auto > div {
          padding: 28px 0;
          border-bottom: 1px solid #EAEAEB;
        }
        .overflow-auto + div:not(.flex-1, .crs-summary-footer) {
          display: none;
        }
        .crs-summary-footer {
          padding: 20px 28px;
          gap: 8px;
          display: grid;
        }
        .crs-summary-footer .text-platinum-32 {
          color: var(--Text, #484850);
          font-size: 14px;
          font-weight: 600;
          line-height: 20px; 
        }
        .crs-summary-footer .font-semibold {
          font-size: 20px;
          padding-top: 12px;
        }
        .crs-order-head {
          padding: 28px;
          align-items: center;
        }
        .crs-heads {
          padding: 8px 28px;
        }
        .crs-heads + div:not(.hidden),
        .crs-heads + div.hidden + div {
          padding: 4px 28px 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .crs-heads + div:not(.hidden) > button ,
        .crs-heads + div.hidden + div > button {
          order: 3;
          margin-top: 28px;
        }
        .text-h3 {
          line-height: 34px;
          letter-spacing: -0.7px;
        }
        .crs-summary-total {
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px; 
        }
        .crs-timer {
          margin: 0;
        }
        .crs-timer > div {
          border-color: #EAEAEB;
          border-left: 0;
          border-right: 0;
        }
        .check_border {
          padding: 20px;
        }
        #checkout-container + div.mt-5.flex.flex-col {
          padding: 20px;
          margin-top: 4px;
        }
        #primer-checkout-apm-button-container {
          gap: 12px;
        }
        #primer-checkout-apm-button-container > div {
          width: 100%;
          flex: auto;
        }
        .overflow-auto ~ button {
          display: none;
        }
        .crs-timer > div {
          gap: 12px;
          padding: 0.75rem 0 0.75rem 20px;
        }
        .crs-compare {
          font-size: 16px;
          margin-right: 8px;
        }
        ` : ''}
      </style>
    `
    if (!$el('.crs-style') && this.checkPageUrl() === 'checkout') {
      $el('body').insertAdjacentHTML('afterbegin', style)
    } else if ($el('.crs-style') && this.checkPageUrl() !== 'checkout') {
      $el('.crs-style').remove()
    }
  }

  addWarantyBanner() {
    const banner = /*html*/ `
      <style>
        .crs-warranty-banner {
          width: calc(100% + ${device == 'desktop' ? '0px' : '2.5rem'});
          display: flex;
          align-items: center;
          ${device == 'desktop' ? 'justify-content: center;' : ''}
          font-size: 16px;
          column-gap: 12px;
          padding: 12px 20px;
          background: linear-gradient(0deg, #F2E8D3 0%, #F2E8D3 100%), rgba(223, 183, 164, 0.40);
          color: #000;
          margin: 0 ${device == 'desktop' ? '0' : '-1.25rem'};
        }
        .crs-warranty-banner svg {
          flex-shrink: 0;
        }
      </style>
      <div class="crs-warranty-banner">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
          <path d="M21.0577 6.17956C21.0453 5.5316 21.0336 4.91947 21.0336 4.32728C21.0336 3.86335 20.6576 3.48722 20.1935 3.48722C16.6008 3.48722 13.8655 2.45473 11.5855 0.237863C11.2593 -0.0793438 10.7402 -0.0792318 10.4142 0.237863C8.13437 2.45473 5.39947 3.48722 1.80703 3.48722C1.34309 3.48722 0.966967 3.86335 0.966967 4.32728C0.966967 4.91958 0.955319 5.53193 0.942886 6.18001C0.827741 12.2101 0.670034 20.4686 10.7247 23.9537C10.8138 23.9846 10.9068 24.0001 10.9998 24.0001C11.0927 24.0001 11.1858 23.9846 11.2749 23.9537C21.3303 20.4685 21.1728 12.2098 21.0577 6.17956ZM10.9999 22.2685C2.3767 19.136 2.50708 12.2738 2.62278 6.21205C2.62973 5.84824 2.63645 5.49564 2.64115 5.14998C6.00588 5.00796 8.69654 3.98835 10.9999 1.98183C13.3034 3.98835 15.9945 5.00807 19.3595 5.14998C19.3642 5.49553 19.3709 5.84791 19.3779 6.21149C19.4935 12.2735 19.6237 19.1359 10.9999 22.2685Z" fill="black"/>
          <path d="M13.8926 9.08169L9.83803 13.1361L8.10784 11.4059C7.77977 11.0779 7.24784 11.0779 6.91988 11.4059C6.59181 11.734 6.59181 12.2659 6.91988 12.5939L9.24405 14.9181C9.40803 15.0821 9.62309 15.1641 9.83803 15.1641C10.053 15.1641 10.268 15.0821 10.432 14.9181L15.0805 10.2698C15.4086 9.94169 15.4086 9.40976 15.0806 9.0818C14.7526 8.75373 14.2207 8.75362 13.8926 9.08169Z" fill="black"/>
        </svg>
        Lifetime warranty & 30-day free returns
      </div>
    `
    if ($el('.crs-warranty-banner')) return
    
    if (device == 'desktop') {
      if (!$el('.crs-heads')) return
      $el('.crs-heads').insertAdjacentHTML('beforebegin', banner)
      
    } else {
      if (!$el('main>div:last-child>.mb-15')) return
      $el('main>div:last-child>.mb-15').insertAdjacentHTML('afterend', banner)
    }
  }

  changeHeaders() {
    $$el('p.text-h5').forEach((item) => {
      if (item.innerText.includes('1. Address')) {
        item.innerText = 'Information'
      }
      if (item.innerText.includes('2. Delivery')) {
        item.innerText = 'Delivery'
      }
      if (item.innerText.includes('2. Billing')) {
        item.innerText = 'Billing'
      }
      if (item.innerText.includes('3. Payment')) {
        item.innerText = 'Payment'
      }
    })
    if ( $el('div.gap-2.w-full')) {
      $el('div.gap-2.w-full').classList.add('crs-heads')
      if ($el('.crs-heads .crs-header-current')) {
        $el('.crs-heads .crs-header-current').classList.remove('crs-header-current')
      }
      $$el('.crs-heads .text-black')[ $$el('.crs-heads .text-black').length - 1].classList.add('crs-header-current')

      if (!$el('.crs-calc') || !$el('.overflow-auto+.flex.flex-col.gap-2')) return

      if ($el('.overflow-auto+.flex.flex-col.gap-2').innerText.includes('Shipping') && 
        $el('.overflow-auto+.flex.flex-col.gap-2').innerText.includes('Free') && 
        !$el('.crs-header-current').innerText.includes('Delivery') &&
        !$el('.crs-header-current').innerText.includes('Payment')
      ) {
        $el('.crs-calc').style = ''
        $el('.crs-calc').previousElementSibling.style.display = 'none'
      } else {
        $el('.crs-calc').style.display = 'none'
        $el('.crs-calc').previousElementSibling.style = ''
      }

      if ($el('.crs-header-current').innerText.includes('Information') && $el('.crs-heads + .hidden')) {
        $el('.crs-heads + .hidden').style.display = 'block'
      } else {
        $el('.crs-heads + .hidden').style = ''
      }
     
    }
  }

  createTotalPayment() {
    if (!$el('#checkout-container + .mt-5') || 
        $el('.crs-total')
    ) return

    const total = `
    <style>
      .crs-total {
        border: 1px solid var(--Borders, #EAEAEB);
        background: var(--Backgraund, #F4F4F5);
        padding: 16px;
        margin: 28px 0;
      }
      .crs-total .text-platinum-32 {
        color: var(--Text, #484850);
        font-size: 14px;
        margin-bottom: 8px;
        font-weight: 600;
      }
      .crs-total .crs-promo {
        padding: 8px 0 16px;
        border-bottom: 1px solid #D5D5D8;
        margin-bottom: 16px;
      }
    </style>
    <div class="crs-total">${$el('.overflow-auto+.flex.flex-col.gap-2').innerHTML}</div> `

    $el('#checkout-container + .mt-5').parentElement.insertAdjacentHTML('beforeend', total)

    $$el('.crs-total > div').forEach(item => {
      if (item.innerText.includes('Total') && !item.parentElement.querySelector('.crs-promo')) {
        this.createPromo(item)
      }
      if (!item.querySelector('p')) {
        item.style.display = 'none'
      }
    })
  }
  postPromo(action, promoCode) {
    return new Promise((resolve, reject) => {
      
      let token = '';
        
      const cookieName = '7879_CHECKOUT_V2_TOKEN_uk';
      const cookies = document.cookie.split('; ');

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0] === cookieName) {
          token = decodeURIComponent(cookie[1]);
          break;
        }
      }

      fetch('https://apicdn.7879.co/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "da2-kd47u433qjeqzefxn5toajbaae"
        },

        body: JSON.stringify({
          query: `mutation ${action == 'remove' ? 'checkoutRemovePromoCode': 'checkoutAddPromoCode'}($promoCode: String!, $token: String) {
            ${action == 'remove' ? 'checkoutRemovePromoCode':'checkoutAddPromoCode'}(promoCode: $promoCode, token: $token) {
              checkout {
                  id
                  discount {
                      currency
                      amount
                  }
              }
            }
          }`,
          variables: {"token":token,"promoCode":promoCode}
        })

      }).then(res => res.json()).then(data => {
        resolve(data)
      })
    })
  }

  numberFormat(amount) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2
    }).format(amount);
  }

  createPromo(parent) {

    let loc = $el('.crs-header-current').innerText.includes('Information') ? 'Information' : 'Payment'
    let type = loc ==  'Information' ? 'i' : 'p'

    const getPromo = `
    <style>
      .crs-compare {
        color: var(--Text, #484850);
        font-size: 14px;
        font-weight: 400;
        text-decoration-line: line-through;
      }
      .crs-promo {
        padding: 14px 0 20px;
      }
      .crs-get-promo {
        color: var(--Black, #000);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; 
        text-decoration-line: underline;
        background-color: transparent;
        border: none;
      }
      .crs-error-promo {
        position: absolute;
        left: 0;
        top: 100%;
        font-size: 12px;
        color: red;
        display: none;
      }
      .crs-promo-form {
        position: relative;
      }
      .crs-promo-form input {
        border: 2px solid var(--Borders, #EAEAEB);
        background: #FFF;
        padding: 10px 16px;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        width: 100%;
      }
      .crs-promo-form input:focus {
        border-color: #EAEAEB!important;
        box-shadow: none!important;
      }
      .crs-error .crs-error-promo {
        display: block;
      }
      .crs-apply-promo {
        background: var(--Grey-text-light, #B5B5B7);
        padding: 8px 20px;
        color: var(--White, #FFF);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        margin-left: 4px;
      }
      .crs-promo-result {
        margin-top: -11px;
        margin-bottom: -8px;
      }
      .crs-promo-result .name {
        color: var(--Text, #484850);
      }
      .crs-promo-result p {
          font-size: 14px;
          font-weight: 600;
          line-height: 20px; 
      }
      .crs-promo-price {
          color: var(--Green, #579B31);
      }
      .crs-promo [hidden] {
        display: none!important;
      }
      .crs-remove-promo {
        cursor: pointer;
      }
      ${device == 'desktop' ? `
      .crs-promo {
        border-bottom: 1px solid #EAEAEB;
      }
      ` : ''}
    </style>
    <div class="crs-promo">
        <button type="button" class="crs-get-promo flex items-center">
            <span>Got a promo code?</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.16634 7.83339H10.4747L6.40801 11.9001C6.08301 12.2251 6.08301 12.7584 6.40801 13.0834C6.73301 13.4084 7.25801 13.4084 7.58301 13.0834L13.0747 7.59172C13.3997 7.26672 13.3997 6.74172 13.0747 6.41672L7.59134 0.916724C7.26634 0.591724 6.74134 0.591724 6.41634 0.916724C6.09134 1.24172 6.09134 1.76672 6.41634 2.09172L10.4747 6.16672H1.16634C0.708008 6.16672 0.333008 6.54172 0.333008 7.00006C0.333008 7.45839 0.708008 7.83339 1.16634 7.83339Z" fill="black"/>
            </svg>
        </button>
        <div class="crs-promo-form flex" hidden>
            <input type="text" name="promo" placeholder="Your promo code" onclick="pushDataLayer('exp_imp_ch_i_scos${type}_ypc', 'Your promo code', 'Input', 'Secure checkout Order summery ${loc}');">
            <p class="crs-error-promo">No Voucher found</p>
            <button type="button" class="crs-apply-promo">Apply</button>
        </div>
        <div class="crs-promo-result flex items-center justify-between" hidden>
            <p class="flex items-center">
                <span class="name pr-1"></span>
                <svg class="crs-remove-promo ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.18791 11.3332C1.08489 11.3332 0.984175 11.3027 0.898508 11.2454C0.812841 11.1882 0.746071 11.1068 0.706643 11.0117C0.667215 10.9165 0.656901 10.8118 0.677005 10.7107C0.697109 10.6097 0.746729 10.5169 0.819587 10.444L10.4444 0.819192C10.5421 0.721506 10.6746 0.666626 10.8127 0.666626C10.9509 0.666626 11.0834 0.721506 11.1811 0.819192C11.2787 0.916878 11.3336 1.04937 11.3336 1.18752C11.3336 1.32567 11.2787 1.45816 11.1811 1.55585L1.55624 11.1807C1.50792 11.2291 1.4505 11.2675 1.38729 11.2937C1.32408 11.3198 1.25633 11.3333 1.18791 11.3332Z" fill="#878789"/>
                    <path d="M10.8127 11.3332C10.7443 11.3333 10.6765 11.3198 10.6133 11.2937C10.5501 11.2675 10.4927 11.2291 10.4444 11.1807L0.819558 1.55585C0.721872 1.45816 0.666992 1.32567 0.666992 1.18752C0.666992 1.04937 0.721872 0.916878 0.819558 0.819192C0.917244 0.721506 1.04974 0.666626 1.18788 0.666626C1.32603 0.666626 1.45852 0.721506 1.55621 0.819192L11.181 10.444C11.2539 10.5169 11.3035 10.6097 11.3236 10.7107C11.3437 10.8118 11.3334 10.9165 11.294 11.0117C11.2545 11.1068 11.1878 11.1882 11.1021 11.2454C11.0164 11.3027 10.9157 11.3332 10.8127 11.3332Z" fill="#878789"/>
                </svg>
            </p>
            <p class="crs-promo-price"></p>
        </div>
    </div>`

    parent.insertAdjacentHTML('beforebegin', getPromo)

    $$el('.crs-get-promo').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        e.currentTarget.hidden = true
        e.target.closest('.crs-promo').querySelector('.crs-promo-form').hidden = false
        pushDataLayer(`exp_imp_ch_l_scos${type}_gp`, 'Got a promo code', 'Link', 'Secure checkout Order summery ' + loc)
      })
    })
    $$el('.crs-promo-form input').forEach(item => {
      item.addEventListener('input', (e) => {
        if (item.parentElement.className.includes('crs-error')) {
          item.parentElement.classList.remove('crs-error')
        }
      })
    })

    $$el('.crs-apply-promo').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        let promoCode = item.parentElement.querySelector('input').value; //7879WELCOME10
      
        pushDataLayer(`exp_imp_ch_b_scos${type}_a`, 'Apply', 'Button', 'Secure checkout Order summery ' + loc)

        this.postPromo('add', promoCode).then(data => {
          console.log(data)
          if (data['data']['checkoutAddPromoCode']['checkout'] && data['data']['checkoutAddPromoCode']['checkout']['discount']) {
            let discount = data['data']['checkoutAddPromoCode']['checkout']['discount'];
            let amount = discount.amount;
            let currency = $el('.overflow-auto + div .font-semibold:last-child').innerText.charAt(0)
              
            $$el('.crs-promo').forEach(from => {
              from.querySelector('.crs-promo-result p > .name').innerHTML = promoCode;
              from.querySelector('.crs-promo-price').innerHTML = '- ' + currency + amount.toFixed(2);
              from.querySelector('.crs-promo-form').hidden = true;
              from.querySelector('.crs-get-promo').hidden = true;
              from.querySelector('.crs-promo-result').hidden = false;
            })
            
            let total = $el('.overflow-auto+.flex.flex-col.gap-2').innerHTML.split('Total</p><p class="text-h5 font-semibold">')[1].split('</p>')[0].split(',').join('')
            let compare = ''
            let totalOrder = ''
            
            if ($el('.text-special-priceIncrease')) {
              compare = this.numberFormat((+(total.replace(currency, '')) + amount));
              totalOrder = this.numberFormat((+(total.replace(currency, ''))));
            } else {
              compare = this.numberFormat((+(total.replace(currency, ''))));
              totalOrder = this.numberFormat((+(total.replace(currency, '')) - amount));
            }
           
            $el('.crs-summary-total').innerHTML = `<span class="crs-compare">${currency + compare}</span> ` + currency + totalOrder
              
            if (device == 'mobile') {
              if (!$el('.crs-total .crs-promo+div p:last-child')) return
              $el('.crs-total .crs-promo+div p:last-child').innerHTML = currency + totalOrder
              $el('.crs-summary-footer .crs-promo+div p:last-child').innerHTML = currency + totalOrder
            } else {
              $el('.crs-summary-footer .crs-promo+div p:last-child').innerHTML = `<span class="crs-compare">${currency + compare}</span> ${currency + totalOrder}`
            }

          } else {
            console.log('error')
            item.parentElement.classList.add('crs-error')
          }
        })
      })
    })
   
    $$el('.crs-remove-promo').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        let promoCode = $el('.crs-promo-form input').value; //7879WELCOME10

        clickRemovePromo = true;
        pushDataLayer(`exp_imp_ch_b_scos${type}_r`, 'Remove', 'Button', 'Secure checkout Order summery ' + loc);

        let total = $el('.crs-compare').innerText

        this.postPromo('remove', promoCode).then(data => {
          console.log(data)
          $$el('.crs-promo').forEach(from => {
            from.querySelector('.crs-promo-form').hidden = true;
            from.querySelector('.crs-promo-result').hidden = true;
            from.querySelector('.crs-get-promo').hidden = false;
          })
         
          $el('.crs-summary-total').innerHTML = total
          $el('.crs-summary-footer .crs-promo+div p:last-child').innerHTML = total
          if (device == 'mobile') {
            if ($el('.crs-total')) {
              $el('.crs-total .crs-promo + div p:last-child').innerHTML = total
            }
          } 
        })
      })
    })

  }
  createCartSummary() {
  if (this.checkPageUrl() !== 'checkout') return

  if ($el('h3')) {
    
    $el('h3')
      .closest('.w-full')
      .querySelectorAll('&>div:not(:last-child)')
      .forEach((item, index) => {
        if (!item.innerText.includes('You now have') && device != 'desktop') {
          item.style.display = 'none'
        }
        if (item.innerText.includes('Summary')) {
          item.querySelector('.text-h3').innerText = 'Order summary';
          item.classList.add('crs-order-head');
          
          if (device == 'desktop' && 
            $el('.overflow-auto+.flex.flex-col.gap-2 > div:last-child > .text-h5.font-semibold:last-child') &&
            !$el('.crs-summary-total')
          ) {
            item.insertAdjacentHTML('beforeend', `<p class="crs-summary-total">${$el('.overflow-auto+.flex.flex-col.gap-2 > div:last-child > .text-h5.font-semibold:last-child').innerText}</p>`)
          }

          item.querySelector('svg.stroke-black').style.display = 'none'
        }
      })
    }

    if (!$el('.crs-warranty-banner') ||
        !$el('.overflow-auto+.flex.flex-col.gap-2') ||
        !$el('.crs-header-current')) return

    const footer = `
    <div class="crs-summary-footer">
      ${$el('.overflow-auto+.flex.flex-col.gap-2').innerHTML}
    </div>`;

    const summary =  /*html*/ `
    <style>
      .crs-summary {
        border-top: 1px solid var(--Borders, #EAEAEB);
        border-bottom: 1px solid var(--Borders, #EAEAEB);
      }
      .crs-summary-head {
        padding: 16px 0px;
        cursor: pointer;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        background: var(--White, #FFF);
      }
      .crs-summary-head * {
        pointer-events: none;
      }
      .crs-summary-head svg {
        margin-left: 8px;
      }
      .crs-summary-products div:first-child {
        width: 140px;
        height: 156px;
        flex-shrink: 0;
      }
      .crs-summary-products div > img {
        width: 140px;
        height: 140px;
        flex-shrink: 0;
      }
      .crs-summary-products .bg-rose-24 {
        width: max-content;
      }
      .crs-summary-products > div.gap-2 {
        gap: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #EAEAEB;
        width: 100%;
      }
      .crs-summary-products .text-platinum-32 {
        color: var(--Text, #484850);
      }
      .crs-summary-products p.text-p > span {
        color: var(--Text, #484850);
        font-weight: 600;
      }
      .crs-summary-footer .font-normal .text-platinum-32{
        color: var(--Text, #484850);
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 6px;
      }
      .crs-summary-footer .crs-promo+div {
        border-top: 1px solid #EAEAEB;
        padding: 20px 0;
      }
      .crs-summary-footer .crs-promo+div p {
        font-size: 20px;
        line-height: 28px;
      }
      .crs-summary-body {
        display: none;
      }
      .crs-summary.active .crs-summary-head svg {
        transform: scaleY(-1);
      }
      .crs-summary.active .crs-summary-body {
        display: block;
      }
    </style>
    <div class="crs-summary">
      <div class="crs-summary-head flex items-center justify-between">
          <p class="flex items-center">Order summary
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8183 0.193997C9.57597 -0.0646656 9.18319 -0.0646656 8.94086 0.193997L5.00005 4.40096L1.05916 0.193997C0.816857 -0.0646656 0.424024 -0.0646656 0.181725 0.193997C-0.0605749 0.452652 -0.0605749 0.872022 0.181725 1.13068L4.56129 5.80597C4.80362 6.06468 5.1964 6.06468 5.43873 5.80597L9.8183 1.13068C10.0606 0.872022 10.0606 0.452652 9.8183 0.193997Z" fill="black"/>
              </svg>
          </p>
          <p class="crs-summary-total"></p>
      </div>
      <div class="crs-summary-body">
        <div class="crs-summary-products">
            ${$el('.overflow-auto').innerHTML
                .split('md:font-normal">')
                .join('md:font-normal"><span>Price: </span> ')
                .split('Quantity:')
                .join('<span>Quantity: </span> ')
            }
        </div>
        ${footer}
      </div>
    </div>`;

    if ($el('.crs-summary-footer')) return

    if (device == 'mobile') {
      $el('.crs-warranty-banner').insertAdjacentHTML('afterend', summary)

      $el('.crs-summary-head').addEventListener('click', (event) => {
        event.target.parentElement.classList.toggle('active'); 
        pushDataLayer('exp_imp_ch_d_scosi_os', 'Order summary', 'Dropdown', 'Secure checkout Order summery Information')
      })
    } else {
      if (!$el('.crs-summary-total') &&  $el('.crs-order-head')) {
        $el('.crs-order-head').insertAdjacentHTML('beforeend', ` <p class="crs-summary-total"></p>`)
      }
      $el('.overflow-auto').parentElement.insertAdjacentHTML('beforeend', footer)

    }

    $$el('.crs-summary-footer > div').forEach(item => {
      if (item.innerText.includes('Total')) {

        $el('.crs-summary-total').innerHTML = item.querySelector('p:last-child').innerText
        this.createPromo(item)
      }
      if (!item.querySelector('p') || item.innerText.includes('Voucher') || item.innerText.includes('Discount')) {
        item.style.display = 'none'
      }
      if (item.innerText.includes('Shipping') && 
        item.innerText.includes('Free') && 
        !$el('.crs-calc')
      ) {
        item.querySelector('p:last-child').innerHTML = `<span style="display: none">${item.querySelector('p:last-child').innerHTML}</span><span class="crs-calc">Calculated at next step</span>`
      }
    });
  }

  createPaymentMethod() {
    const payments = `
    <style>
    .crs-payment-methods {
      order: 3;
    }
    .crs-payment-methods > div {
      border: 1px solid var(--Borders, #EAEAEB);
      margin-bottom: 12px;
    }
    .crs-payment-credit #primer-checkout-submit-button-container {
      padding: 0px 16px ;
      margin-bottom: 16px;
    }
    .check_border {
      background: var(--Backgraund, #F4F4F5);
      padding: 16px;
    }
    .check_radio {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: relative;
      border: 1px solid #212121;
      display: block;
    }
    .check_radio:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 10px;
      height: 10px;
      background-color: #212121;
      border-radius: 50%;
      opacity: 0;
    }
    input[name="radio_payment"],
    #primer-checkout-scene-loading,
    #primer-checkout-apm-button-container > div:not(#primer-checkout-apm-googlePay, #primer-checkout-apm-paypal, #primer-checkout-apm-applePay),
    .crs-payment-klarna,
    .crs-payment-methods > div:not(.show) > form,
    .crs-payment-methods > div:not(.show) > div,
    .crs-payment-methods > div:not(.show) > .crs-btn,
    .crs-payment-klarna img.ddtYbK  {
      display: none;
    }
    input[name="radio_payment"]:checked ~ .check_border  {
      background: transparent;
    }
    input[name="radio_payment"]:checked ~ .check_border .check_radio:before  {
      opacity: 1;
    } 
    .crs-payment-klarna label img {
      background: #FFB3C7;
      padding: 6px 7px;
      height: 24px;
      border-radius: 4px;
    }
    .crs-payment-methods .jJoydX, .crs-payment-methods .bqKecf, .crs-payment-methods .hhAkSd {
      height: 40px!important;
      background: #fff!important;
      border: 2px solid #EAEAEB!important;
      border-radius: 0!important;
    }
    .crs-payment-methods .khsPUc {
      height: 42px!important;
      background: transparent;
    }
    .PrimerCheckout__apmButton {
      border: none;
    }
    .crs-payment-methods .PrimerCheckout__formField {
      margin-top: 24px;
      flex-direction: row;
      gap: 12px;
    }
    .crs-payment-methods .PrimerCheckout__formField > div {
      margin-top: 0!important;
    }
    #primer-checkout-card-number-field {
      margin: 0;
    }
    .crs-payment-methods .PrimerCheckout__formField > .PrimerCheckout__label {
      margin-bottom: 0;
      padding: 0 8px;
      position: absolute;
      top: 0;
      left: 8px;
      background: #fff;
      z-index: 2;
      transform: translateY(-50%);
    }
    #primer-checkout-card-form {
      padding: 8px 16px 0;
      margin-bottom: 24px;
    }
    .crs-payment-credit .cIaFpO {
      height: 44px;
    }
    #primer-checkout-submit-button > span {
      display: flex;
      align-items: center;
    }
    #primer-checkout-scene-klarna-payment {
      padding: 0 16px;
    }
    #primer-checkout-scene-klarna-payment .PrimerCheckout__formHeader {
      margin: 0;
    }
    .crs-payment-klarna .dJDRcm {
      font-size: 14px;
      font-weight: 600;
    }
    .crs-payment-klarna .bfvKmd {
      stroke: #579B31;
      border-radius: 50%;
      border: 1px solid #579B31;
      width: 20px;
      height: 20px;
      padding: 2px;
    }
    .crs-payment-klarna .bpbPRL {
      position: relative;
      background: var(--Backgraund, #F4F4F5);
      border-radius: 5px;
    }
    .crs-payment-klarna .bpbPRL:before  {
      content: '';
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
      background: url(${dir}plus.svg) no-repeat center / contain;
    }
    .crs-payment-klarna .bpbPRL[disabled] {
      background: transparent;
    }
    .crs-payment-klarna .bpbPRL[disabled]:before {
      content: none;
    }
    .crs-payment-klarna .bpbPRL[disabled] + .iYCTkD {
      margin: 0 8px 8px!important;
    }
    .crs-payment-klarna .eQlxcA {
      padding-top: 8px;
      border-top: 1px solid #dedfe0;
    }
    .crs-btn {
      max-width: calc(100% - 32px);
      margin: -10px auto 16px;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 1.6px;
      text-transform: uppercase;
    }
    .crs-btn[disabled] {
      background: #B5B5B7;
      cursor: no-drop;
    }
    </style>
    <div class="crs-payment-methods">
        <div class="crs-payment-credit">
            <label class="crs-payment-radio">
                <input type="radio" name="radio_payment" checked>
                <span class="check_border flex items-center">
                  <span class="check_radio mr-3"></span>
                  <span>Pay by Card</span>
                </span>
            </label>
            <button type="button" class="crs-btn cIaFpO"> 
              <span class="flex justify-center items-center ">
                <span>Play now</span>
                <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1.66732 7.83339H10.9757L6.90898 11.9001C6.58398 12.2251 6.58398 12.7584 6.90898 13.0834C7.23398 13.4084 7.75898 13.4084 8.08398 13.0834L13.5757 7.59172C13.9007 7.26672 13.9007 6.74172 13.5757 6.41672L8.09232 0.916724C7.76732 0.591724 7.24232 0.591724 6.91732 0.916724C6.59232 1.24172 6.59232 1.76672 6.91732 2.09172L10.9757 6.16672H1.66732C1.20898 6.16672 0.833984 6.54172 0.833984 7.00006C0.833984 7.45839 1.20898 7.83339 1.66732 7.83339Z" fill="white"/>
                </svg>
              </span>
            </button>
        </div>
        <div class="crs-payment-klarna">
          <label class="crs-payment-radio">
              <input type="radio" name="radio_payment">
              <span class="check_border flex items-center">
                <span class="check_radio mr-3"></span>
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBmb2N1c2FibGU9ImZhbHNlIiB3aWR0aD0iODEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA4MSAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpIj4KICAgICAgICA8cGF0aCBkPSJNNzguMzM1MjU0OSwxNC4zMjkyNzA2IEM3Ny4wNjc4MDE3LDE0LjMyOTI3MDYgNzYuMDQwMzQzOSwxNS4zNTY3Mjg0IDc2LjA0MDM0MzksMTYuNjI0MzU5NyBDNzYuMDQwMzQzOSwxNy44OTE2MzQ4IDc3LjA2NzgwMTcsMTguOTE5MjcwNyA3OC4zMzUyNTQ5LDE4LjkxOTI3MDcgQzc5LjYwMjcwODEsMTguOTE5MjcwNyA4MC42MzAzNDQsMTcuODkxNjM0OCA4MC42MzAzNDQsMTYuNjI0MzU5NyBDODAuNjMwMzQ0LDE1LjM1NjcyODQgNzkuNjAyNzA4MSwxNC4zMjkyNzA2IDc4LjMzNTI1NDksMTQuMzI5MjcwNiIgZmlsbD0icmdiYSgwLCAwLCAwLCAxKSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik03MC43OTU4NTY4LDcuMjI4MTczNDUgTDcwLjc5NTg1NjgsNi40NDY3ODAzIEw3NC40NTI5ODMzLDYuNDQ2NzgwMyBMNzQuNDUyOTgzMywxOC42NjE4MzU2IEw3MC43OTU4NTY4LDE4LjY2MTgzNTYgTDcwLjc5NTg1NjgsMTcuODgxMTU0NyBDNjkuNzYyNjY1NiwxOC41ODU3OTc1IDY4LjUxNTYwNjMsMTkgNjcuMTcwNDI3NywxOSBDNjMuNjEwNzA4MiwxOSA2MC43MjUwMDI3LDE2LjExNDI5NDUgNjAuNzI1MDAyNywxMi41NTQ1NzUgQzYwLjcyNTAwMjcsOC45OTQ4NTU2MSA2My42MTA3MDgyLDYuMTA5MTUwMDkgNjcuMTcwNDI3Nyw2LjEwOTE1MDA5IEM2OC41MTU2MDYzLDYuMTA5MTUwMDkgNjkuNzYyNjY1Niw2LjUyMzM1MjU2IDcwLjc5NTg1NjgsNy4yMjgxNzM0NSBaIE02Ny40Njk3NzE4LDE1LjY5NzQyMDkgQzY5LjMwMDAyNjcsMTUuNjk3NDIwOSA3MC43ODM1Njk2LDE0LjI5MDI3MjIgNzAuNzgzNTY5NiwxMi41NTQ1NzUgQzcwLjc4MzU2OTYsMTAuODE4ODc3OSA2OS4zMDAwMjY3LDkuNDEyMDg1MzYgNjcuNDY5NzcxOCw5LjQxMjA4NTM2IEM2NS42Mzk1MTY4LDkuNDEyMDg1MzYgNjQuMTU1OTczOSwxMC44MTg4Nzc5IDY0LjE1NTk3MzksMTIuNTU0NTc1IEM2NC4xNTU5NzM5LDE0LjI5MDI3MjIgNjUuNjM5NTE2OCwxNS42OTc0MjA5IDY3LjQ2OTc3MTgsMTUuNjk3NDIwOSBaIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDEpIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTU0LjIyNjMzMzMsNi4xMTgyMzE5MSBDNTIuNzY1NDA2LDYuMTE4MjMxOTEgNTEuMzgyODMxNiw2LjU3MTc4ODk2IDUwLjQ1ODQ0NDIsNy44MjMxMjIwNSBMNTAuNDU4NDQ0Miw2LjQ0NzQ5MjYgTDQ2LjgxNjk4ODQsNi40NDc0OTI2IEw0Ni44MTY5ODg0LDE4LjY2MTgzNTYgTDUwLjUwMzE0MSwxOC42NjE4MzU2IEw1MC41MDMxNDEsMTIuMjQyNzY1NyBDNTAuNTAzMTQxLDEwLjM4NTI2NTMgNTEuNzQ4Nzc1Nyw5LjQ3NTY1ODE0IDUzLjI0ODUyMzUsOS40NzU2NTgxNCBDNTQuODU1ODI4NSw5LjQ3NTY1ODE0IDU1Ljc3OTg1OTcsMTAuNDM1ODM4NiA1NS43Nzk4NTk3LDEyLjIxNzQ3OTEgTDU1Ljc3OTg1OTcsMTguNjYxODM1NiBMNTkuNDMyNzEyNCwxOC42NjE4MzU2IEw1OS40MzI3MTI0LDEwLjg5NDAyNTYgQzU5LjQzMjcxMjQsOC4wNTE0MTQyMSA1Ny4xNzI1ODQ0LDYuMTE4MjMxOTEgNTQuMjI2MzMzMyw2LjExODIzMTkxIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDEpIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTQxLjUyNzgwNDQsOC4wMzc4ODA1MSBMNDEuNTI3ODA0NCw2LjQ0Njk1ODM4IEwzNy43ODM0MjEyLDYuNDQ2OTU4MzggTDM3Ljc4MzQyMTIsMTguNjYxODM1NiBMNDEuNTM2MTc0LDE4LjY2MTgzNTYgTDQxLjUzNjE3NCwxMi45NTg4MDUzIEM0MS41MzYxNzQsMTEuMDM0NzA0OCA0My42MjE2MTA0LDEwLjAwMDQ0NTIgNDUuMDY4NjQ3OSwxMC4wMDA0NDUyIEM0NS4wODM0MjgxLDEwLjAwMDQ0NTIgNDUuMDk3MzE4LDEwLjAwMTg2OTggNDUuMTEyMDk4MiwxMC4wMDIwNDc5IEw0NS4xMTIwOTgyLDYuNDQ3NjcwNjggQzQzLjYyNjk1MjYsNi40NDc2NzA2OCA0Mi4yNjA5MzkyLDcuMDgzNTc2NTQgNDEuNTI3ODA0NCw4LjAzNzg4MDUxIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDEpIj48L3BhdGg+CiAgICAgICAgPHBhdGggZD0iTTMyLjIxMjg3ODgsNy4yMjgxNzM0NSBMMzIuMjEyODc4OCw2LjQ0Njc4MDMgTDM1Ljg3MDE4MzMsNi40NDY3ODAzIEwzNS44NzAxODMzLDE4LjY2MTgzNTYgTDMyLjIxMjg3ODgsMTguNjYxODM1NiBMMzIuMjEyODc4OCwxNy44ODExNTQ3IEMzMS4xNzk2ODc2LDE4LjU4NTc5NzUgMjkuOTMyNjI4MywxOSAyOC41ODc2Mjc3LDE5IEMyNS4wMjc5MDgzLDE5IDIyLjE0MjIwMjgsMTYuMTE0Mjk0NSAyMi4xNDIyMDI4LDEyLjU1NDU3NSBDMjIuMTQyMjAyOCw4Ljk5NDg1NTYxIDI1LjAyNzkwODMsNi4xMDkxNTAwOSAyOC41ODc2Mjc3LDYuMTA5MTUwMDkgQzI5LjkzMjYyODMsNi4xMDkxNTAwOSAzMS4xNzk2ODc2LDYuNTIzMzUyNTYgMzIuMjEyODc4OCw3LjIyODE3MzQ1IFogTTI4Ljg4Njc5MzgsMTUuNjk3NDIwOSBDMzAuNzE3MDQ4NywxNS42OTc0MjA5IDMyLjIwMDc2OTcsMTQuMjkwMjcyMiAzMi4yMDA3Njk3LDEyLjU1NDU3NSBDMzIuMjAwNzY5NywxMC44MTg4Nzc5IDMwLjcxNzA0ODcsOS40MTIwODUzNiAyOC44ODY3OTM4LDkuNDEyMDg1MzYgQzI3LjA1NjcxNjksOS40MTIwODUzNiAyNS41NzI5OTU5LDEwLjgxODg3NzkgMjUuNTcyOTk1OSwxMi41NTQ1NzUgQzI1LjU3Mjk5NTksMTQuMjkwMjcyMiAyNy4wNTY3MTY5LDE1LjY5NzQyMDkgMjguODg2NzkzOCwxNS42OTc0MjA5IFoiIGZpbGw9InJnYmEoMCwgMCwgMCwgMSkiPjwvcGF0aD4KICAgICAgICA8cGF0aCBkPSJNMTYuODE1MDg4OSAxOC42NjE4MzU2IDIwLjY0Mjk4OTMgMTguNjYxODM1NiAyMC42NDI5ODkzIDEuMDAzMzgzNDMgMTYuODE1MDg4OSAxLjAwMzM4MzQzeiIgZmlsbD0icmdiYSgwLCAwLCAwLCAxKSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0xNC4xNzcwODU3LDEgTDEwLjIxMDQ2NDksMSBDMTAuMjEwNDY0OSw0LjI1MTExNTQ0IDguNzE1NzAzMjUsNy4yMzUxMTgzNyA2LjEwOTU3NTQ5LDkuMTg3MzU0NyBMNC41MzgwNjM1MywxMC4zNjQyNTI0IEwxMC42MjcxNjA0LDE4LjY2NzM1NTkgTDE1LjYzMzU2MTIsMTguNjY3MzU1OSBMMTAuMDMwNzg3MiwxMS4wMjcyMjU3IEMxMi42ODY1OTc5LDguMzgyNjMzNzMgMTQuMTc3MDg1Nyw0LjgyNDY5NTA1IDE0LjE3NzA4NTcsMSIgZmlsbD0icmdiYSgwLCAwLCAwLCAxKSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik0wIDE4LjY2NjY0MzYgNC4wNTMzNDMzNiAxOC42NjY2NDM2IDQuMDUzMzQzMzYgMSAwIDF6IiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==" alt="klarna"> 
              </span>
          </label>
          <button type="button" class="crs-btn cIaFpO" disabled> 
            <span class="flex justify-center items-center ">
              <span>Confirm</span>
              <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.66732 7.83339H10.9757L6.90898 11.9001C6.58398 12.2251 6.58398 12.7584 6.90898 13.0834C7.23398 13.4084 7.75898 13.4084 8.08398 13.0834L13.5757 7.59172C13.9007 7.26672 13.9007 6.74172 13.5757 6.41672L8.09232 0.916724C7.76732 0.591724 7.24232 0.591724 6.91732 0.916724C6.59232 1.24172 6.59232 1.76672 6.91732 2.09172L10.9757 6.16672H1.66732C1.20898 6.16672 0.833984 6.54172 0.833984 7.00006C0.833984 7.45839 1.20898 7.83339 1.66732 7.83339Z" fill="white"/>
              </svg>
            </span>
          </button>
      </div>
    </div>`

    if ($el('#checkout-container') && !$el('.crs-payment-methods')) {
      $el('#checkout-container').insertAdjacentHTML('beforebegin', payments)

    }
    if ($el('.crs-payment-klarna .bpbPRL[disabled]')) {
      $el('.crs-payment-klarna button.crs-btn').disabled = false;
    }
    if ($el('#primer-checkout-credit-card-button')) {

      if ($el('#primer-checkout-card-form') || !$el('#primer-checkout-credit-card-button')) return
      $el('#primer-checkout-credit-card-button').click()
    }
  }
  
  getFirstLetters(sentence) {
    const words = sentence.split(' ');
  
    const firstLetters = [];
  
    for (const word of words) {
      if (word.length > 0) {
        const firstLetter = word[0].toUpperCase(); 
        firstLetters.push(firstLetter);
      }
    }
  
    const result = firstLetters.join('');
  
    return result;
  }
  addUseAddress(parent) {
    const isUseAddress = `
    <style>
    .isUseAddress {
      position: relative;
    }
    .isUseAddress p:after {
      content: none!important;
    }
    .isUseAddress .ilueL  {
      display: none;
    }
    .isUseAddress.loading .ilueL {
      display: block;
      position: absolute;
      right: -30px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;
    }
    .isUseAddress .ilueL .spinner {
      width: 20px;
      height: 20px;
      margin: 0;
    }
    </style>
    <label class="flex items-center mt-3 isUseAddress">
      <div class="ilueL"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></div>
      <div class="h-6 w-6 bg-white relative" style="height: 20px; width: 20px;">
        <input class="border-platinum-18 h-6 w-6 cursor-pointer" type="checkbox" ${localStorage.getItem('use_address_billing') == 'true' ? 'checked' : ''} style="opacity: 0; position: absolute;">
        <span class="crs-checkbox"></span>
      </div>
      <p class="text-p ml-2 ">Use the same address for billing</p>
    </label>`;

    if ($el('.isUseAddress')) return
    parent.insertAdjacentHTML('beforeend', isUseAddress)

    $el('.isUseAddress input').addEventListener('change', (e) => { 

      if (e.target.checked) {

        e.target.closest('.isUseAddress').classList.add('loading')
        let token = '';
          
        const cookieName = '7879_CHECKOUT_V2_TOKEN_uk';
        const cookies = document.cookie.split('; ');

        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].split('=');
          if (cookie[0] === cookieName) {
            token = decodeURIComponent(cookie[1]);
            break; 
          }
        }
        let header =  {
          "Content-Type": "application/json",
          "x-api-key": "da2-kd47u433qjeqzefxn5toajbaae"
        }
        fetch('https://apicdn.7879.co/', {
          method: 'POST',
          headers: header,
          body: JSON.stringify({
            query: `
              query GetShippingAddress($token: String) {
                checkout(token: $token) {
                  checkout {
                    shippingAddress {
                      firstName
                      lastName
                      companyName
                      streetAddress1
                      streetAddress2
                      city
                      cityArea
                      postalCode
                      country
                      countryArea
                      phone
                    }
                  }
                }
              }
            `,
            variables: {
              "token": token
            }
          })
        }).then(res => res.json()).then(data => {
          console.log(data);
          let billingObj = data.data['checkout']['checkout']['shippingAddress']

          fetch('https://apicdn.7879.co/', {
            method: 'POST',
            headers: header,
    
            body: JSON.stringify({
              query: `mutation checkoutBillingAddressUpdate($billingAddress: AddressInput!, $token: String) {
                checkoutBillingAddressUpdate(billingAddress: $billingAddress, token: $token) {
                  checkout {
                    billingAddress {
                      firstName
                      lastName
                      companyName
                      streetAddress1
                      streetAddress2
                      city
                      cityArea
                      postalCode
                      country
                      countryArea
                      phone
                    }
                  }
                }
              }`,
              variables: {
                "billingAddress": billingObj,
                "token": token,
              }
            })
          }).then(res => res.json()).then(dataBilling => {
            console.log(dataBilling);
            window.location.reload()
          }).catch((error) => {
            console.error('Error:', error);
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      } else {
        $$el('#checkout-container + div.mt-5.flex.flex-col > div').forEach(item => {
          if (item.innerText.includes('Billing Address')) {
            item.style = ''
          }
        })
      }
    })
  }

  fixFormAndBlocks() {
    if ($el('.crs-summary-total > .crs-compare') &&
      device == 'mobile' &&
      $el('.crs-summary-footer .crs-promo+div p:last-child')
    ) {
      $el('.crs-summary-footer .crs-promo+div p:last-child').innerHTML = $el('.crs-summary-total').innerHTML.split('</span>')[1]
    }

    $$el('p.text-h3').forEach(item => {
      if (item.closest('.py-10')) {
        item.closest('.py-10').style.padding = '12px 0 24px'
      }
    })
   
    $$el('form .gap-2').forEach((item, i) => {
      if (i === 0 && !item.innerText.includes('Keep me logged in')) {
        item.style.flexDirection = 'column'
        item.style.gap = '1.5rem'
      }
    })
    $$el('form>div').forEach((item, i) => {
      if (i === 0) {
        item.style.order = '-3'
      }
      if (i === 1) {
        item.style.order = '-2'
      }
      if (item.innerText.includes('in case we need')) {
        item.style.order = '-1'
      }
      if (item.innerText.includes('first line of address') &&
        !$el('.text-postcode')
      ) {
        item.insertAdjacentHTML(
          'beforeend',
          '<p class="text-p text-postcode">Enter your postcode / first line of address to automatically fill the delivery address</p>'
        )
        item.style.flexDirection = 'column'
      }
      if (item.innerText.includes('address manually')) {
        item.style.marginTop = '0'
        item.querySelector('.text-p').innerHTML = `Enter delivery details manually 
        <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1.16634 7.83339H10.4747L6.40801 11.9001C6.08301 12.2251 6.08301 12.7584 6.40801 13.0834C6.73301 13.4084 7.25801 13.4084 7.58301 13.0834L13.0747 7.59172C13.3997 7.26672 13.3997 6.74172 13.0747 6.41672L7.59134 0.916724C7.26634 0.591724 6.74134 0.591724 6.41634 0.916724C6.09134 1.24172 6.09134 1.76672 6.41634 2.09172L10.4747 6.16672H1.16634C0.708008 6.16672 0.333008 6.54172 0.333008 7.00006C0.333008 7.45839 0.708008 7.83339 1.16634 7.83339Z" fill="black"/>
        </svg>`
        item.querySelector('.text-p').style = 'color: #000; font-weight: 600;';
        item.querySelector('button').addEventListener('click', () => {
          pushDataLayer('exp_imp_ch_l_scosi_eddm', 'Enter delivery detaisl manually', 'Link', 'Secure checkout Order summery Information');
        
          $el('.text-postcode')?.remove()
        })
        
      }
      if (item.innerText.includes('Select an option')) {

        item.closest('.border-platinum-18').parentElement.querySelector('.border-t').style.display = 'none'
        item.closest('.border-platinum-18').querySelector('.max-h-80').style.display = 'none'
        item.closest('.border-platinum-18').style.padding = '8px 16px'
        item.querySelectorAll('.text-h5').forEach((text, index) => {
          text.style = 'font-size: 14px;margin: 8px 0;'
        }) 
        
      }
      if (item.closest('.w-full.flex-col') &&
        item.closest('.w-full.flex-col').innerText.includes('Your delivery options')
      ) {
        item.querySelectorAll('.text-h5').forEach(text => {
          text.classList.add('crs-text')
        })
       
        if (device == 'desktop') {
          item.closest('.w-full.flex-col').style = 'padding: 0 28px 28px; margin-top: -30px;'
        }
      }
    })
    $$el('label').forEach((item) => {
      if (item.innerText.includes('the same address for billing')) {
        item.querySelector('&>div').style.height = '20px'
        item.querySelector('&>div').style.width = '20px'
        item.querySelector('input').style.opacity = '0'
        item.querySelector('input').style.position = 'absolute'
        if (!item.className.includes('isUseAddress')) {
          item.style = 'margin: 15px 0 10px!important'
        }
        if (!item.querySelector('.crs-checkbox')) {
          item.querySelector('input').insertAdjacentHTML('afterend', '<span class="crs-checkbox"></span>')
        }
        if (device == 'desktop' && !$el('#checkout-container')) {
          item.style = 'margin: 24px 0 0 0!important; padding: 18px 0 0 0; border-top: 1px solid #EAEAEB;'
        }
        
     
        localStorage.setItem('use_address_billing', item.querySelector('input').checked)

        item.querySelector('input').addEventListener('change', (e) => {
          e.stopImmediatePropagation()
          localStorage.setItem('use_address_billing', e.target.checked)
        })
      }

      if (item.previousElementSibling && item.previousElementSibling.tagName == 'INPUT') {
        item.previousElementSibling.addEventListener('click', (e) => {
          if (isEvent != false) return
          isEvent = true

          let label = item.innerText.replace('*','');
          let title = item.closest('form').parentElement.parentElement.querySelector('.text-h3').innerText;
          let type = 'Input';
          let name = this.getFirstLetters(label) + this.getFirstLetters(title)
        
          if (label.includes('Postcode')) {
            name = 'p'+this.getFirstLetters(title)
          }
          if (label.includes('Country')) {
            type = 'Dropdown'
          }

          let loc = $el('.crs-header-current').innerText.includes('Information') ? 'd' : 'b'

          pushDataLayer(`exp_imp_ch_${loc}_scosi_${name.toLowerCase()}`, label + ' ' + title, type, 'Secure checkout Order summery Information');
        })
        item.previousElementSibling.addEventListener('blur', (e) => {
          isEvent = false
        })
      }
    })
    
    if ($el('.crs-promo-result')) {
      $$el('.flex.w-full.flex-1 .text-p').forEach((item) => {
        if (item.innerText.includes('By registering your details you agree to our')) {
          if (device == 'desktop') {
            item.parentElement.style.display = 'none'
          } else {
            item.style = 'font-size: 14px; color: var(--Text, #484850); line-height: 20px;margin-top: 0!important;'
            item.querySelectorAll('a').forEach(link => {
              link.style.display = 'inline'
              if (!item.querySelector('div')) return
              item.querySelector('div').style.display = 'inline'
            })
          }
        }
        if (device == 'desktop' && !item.innerText.includes('Price') && item.closest('.overflow-auto')) {
          if (item.className.includes('md:font-normal')) {
            item.insertAdjacentHTML('afterbegin', `<span>Price: </span> `)
          }
          if (item.innerText.includes('Quantity')) {
            item.innerHTML = item.innerHTML.replace('Quantity:','<span>Quantity: </span> ')
          }
        }
  
        if (item.innerText.includes('Voucher')) {
          item.parentElement.style.display = 'none';
          if (clickRemovePromo == false) {
            $$el('.crs-promo').forEach((promo) => {
              promo.querySelector('.crs-get-promo').hidden = true;
              promo.querySelector('.crs-promo-result').hidden = false;
              promo.querySelector('.crs-promo-result p > .name').innerHTML = item.innerText.replace('Voucher','').replace('is active','');
              
            })
          }
        }

        if (item.className.includes('text-special-priceIncrease')) {
          item.parentElement.style.display = 'none';
          if (clickRemovePromo == false) {
            $$el('.crs-promo-price').forEach((price) => {
              if (price.innerText != '') return
              price.innerHTML = item.innerText;

              if (!$el('.overflow-auto+.flex.flex-col.gap-2') || !$el('.crs-summary-footer .crs-promo+div p:last-child')) return
              let currency = $el('.overflow-auto + div .font-semibold:last-child').innerText.charAt(0)
              let total = $el('.overflow-auto+.flex.flex-col.gap-2').innerHTML.split('Total</p><p class="text-h5 font-semibold">')[1].split('</p>')[0].replace(currency, '').split(',').join('');
              let amount = item.innerText.split(item.innerText[2])[1]

              if ($el('.crs-summary-total')) {
                let compare = (+total + +amount).toFixed(2)

                $el('.crs-summary-total').innerHTML = `<span class="crs-compare">${currency + this.numberFormat(compare)}</span> ` + currency + this.numberFormat(total)
              }

              $el('.crs-summary-footer .crs-promo+div p:last-child').innerHTML = device == 'mobile' ? 
               currency + total :
               `<span class="crs-compare">${currency + (+total + +amount).toFixed(2)}</span> ` + currency + this.numberFormat(total)
            })
          }
        }
      })
    }

    $$el('.crs-heads ~ .flex.w-full.flex-col').forEach((item) => {
      if (item.innerText.includes('Select your payment method')) {
        item.children[0].style.order = '3'

        if (device == 'desktop') {
          item.children[0].style.padding = '28px 0 16px'
        }

        if (item.querySelector('.text-h3 > span')) return
        item.querySelector('.text-h3').insertAdjacentHTML('beforeend', `<span class="mt-2" style=" color: var(--Text, #484850);
        font-size: 14px; line-height: 20px; display: block;">All transactions are secure and encrypted</span>`)
      }
    })
    $$el('.crs-heads ~ .w-full').forEach((item) => {
      if (
        (
          item.innerText.includes('Add your billing address') || 
          item.innerText.includes('Add your delivery address')
        ) && 
        item.innerText.includes('Edit')
      ) {
        item.querySelectorAll('button').forEach(button => {
          if (button.innerText.includes('Edit')) {
            button.click();
          }
        })
      }

      if (item.innerText.includes('Add your billing address')) {
        localStorage.setItem('use_address_billing', false)
      }
    })
    
    $$el('#checkout-container + div.mt-5.flex.flex-col > div').forEach((item, i) => {
      if (i == 0 && !$el('.crs-contact')) {
        item.parentElement.style.display = 'block';
        if (device == 'desktop') {
          item.parentElement.parentElement.style = 'padding: 0 28px 28px; margin-top: -20px;'
        }

        item.insertAdjacentHTML('beforebegin', `
        <div class="flex flex-1 flex-col items-start justify-between">
          <div class="crs-contact">
            <h5 class="text-h5 mb-4 font-semibold">Contact</h5>
            <p class="text-p" style="display: none"></p>
            <p class="text-p crs-email"></p>
          </div>
          <button type="button" class="text-base" aria-label="" onclick="event.target.closest('#checkout-container + div.mt-5.flex.flex-col').querySelectorAll('button.text-base')[1].click()">
            <div class="text-link bg-transparent hover:underline relative crs-delivery">
              <div class="text-p flex flex-1 items-center justify-center text-left h-10 text-base">Edit</div>
            </div>
          </button>
        </div>`)
      }
      if (item.innerText.includes('Delivery Address')) {
        this.addUseAddress(item)
      }
      if (item.innerText.includes('Delivery Address') || item.innerText.includes('Billing Address')) {
        item.querySelector('.text-h5:not(.font-semibold)').style.display = 'none';
        item.querySelectorAll('.text-p').forEach((text, index) => {
          text.innerText == '' ? text.style.display = 'none' : ''
          
          if ( item.innerText.includes('Billing Address')) {
            text.parentElement.classList.add("crs-billing")
          }

          if (!item.innerText.includes('Delivery Address')) return
          text.parentElement.classList.add("crs-delivery")
          if (index == 6) {
            text.style.display = 'none'
            $$el('.crs-contact p')[1].innerText = text.innerHTML;
          }
          if (index == 4) {
            text.style.display = 'none'
            $$el('.crs-contact p')[0].innerText = text.innerText;
            if (text.innerText != '')  $$el('.crs-contact p')[0].style.display = 'block'
          }

        })
      }

      if (item.innerText.includes('Billing Address') && 
        localStorage.getItem('use_address_billing') == 'true'
      ) {
        item.style.display = 'none'
      }
      if (item.innerText.includes('Delivery Method') &&
        item.innerText.includes('Free hand delivered ') &&
        !$el('.crs-free')
      ) {
        item.insertAdjacentHTML('beforeend', `<p class="crs-free">FREE</p>`)
      }
    })
   
    if ($el('#primer-checkout-card-form') &&
      !$el('.crs-payment-credit > #primer-checkout-card-form') &&
      $el('.crs-payment-credit > label')
    ) {
      $el('.crs-payment-credit > label').after($el('#primer-checkout-card-form'))
      $$el('#primer-checkout-card-form iframe').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopImmediatePropagation()
          let desk = item.closest('.PrimerCheckout__formField').querySelector('.PrimerCheckout__label').innerText
          let type = desk.includes('Expiry') ? 'ed' : desk.includes('CVV') ? 'cvv' : this.getFirstLetters(desk.split('(')[0])
          pushDataLayer('exp_imp_ch_i_scospsypm_' + type.toLowerCase(), desk, 'Input', 'Secure checkout Order summery Payment Select your payment method');
        })
      })
      $el('#primer-checkout-card-form input').addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        pushDataLayer('exp_imp_ch_i_scospsypm_noc', 'Name on card', 'Input', 'Secure checkout Order summery Payment Select your payment method');
      })
    }

    $$el('#primer-checkout-apm-button-container > div').forEach(item => {
      if (item.id == 'primer-checkout-apm-klarna' && 
        $el('.crs-payment-klarna')
      ) {
        $el('.crs-payment-klarna').style.display = 'block';
      }
      if (item.querySelector('img[alt="AFTERPAY"]') || item.querySelector('img[alt="CLEARPAY"]')) {
        item.style.display = 'block'

      }
      
      if (item.querySelector('button')) {
        item.querySelector('button').addEventListener('click', (e) => {
          e.stopImmediatePropagation()
          if (item.querySelector('img[alt="CLEARPAY"]')) {
            pushDataLayer('exp_imp_ch_r_scospsypm_c', 'Clearpay', 'Button', 'Secure checkout Order summery Payment Select your payment method');
          } else if (item.querySelector('img[alt="CLEARPAY"]')) {
            pushDataLayer('exp_imp_ch_r_scospsypm_a', 'Afterpay', 'Button', 'Secure checkout Order summery Payment Select your payment method');
          } else if (item.id == 'primer-checkout-apm-applePay' || item.id == 'primer-checkout-apm-googlePay') {
            pushDataLayer('exp_imp_ch_b_scospsypm_apgp', 'Apple Pay - Gpay', 'Button', 'Secure checkout Order summery Payment Select your payment method');
          }
        })
      }
      if (item.querySelector('iframe')) {

        item.querySelector('iframe').addEventListener('click', (e) => { 
          if (item.id == 'primer-checkout-apm-paypal') {
            e.stopImmediatePropagation()
            pushDataLayer('exp_imp_ch_b_scospsypm_pp', 'PayPal', 'Button', 'Secure checkout Order summery Payment Select your payment method');
          }
        })
      }
    })

    $$el('.crs-payment-radio [name="radio_payment"]').forEach(item => {
      if (item.checked) {
        if (item.closest('.crs-payment-klarna')) {
          if (clickKlarnaBtn == false) {
            clickKlarnaBtn = true
            $el('#primer-checkout-apm-klarna > button').click()
          }
        }
        item.parentElement.parentElement.classList.add('show')
      } else {
        item.parentElement.parentElement.classList.remove('show')
      }
      item.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        if (item.checked) {
          if (item.closest('.crs-payment-credit')) {
            $el('#primer-checkout-credit-card-button').click()
            pushDataLayer('exp_imp_ch_r_scospsypm_pbc', 'Pay by card', 'Radio button', '"Secure checkout Order summery Payment Select your payment method"');
          
          } else {
            $el('#primer-checkout-klarna-button').click()
            pushDataLayer('exp_imp_ch_r_scospsypm_k', 'Klarna', 'Radio button', 'Secure checkout Order summery Payment Select your payment method');
          }
        }
      })
    })

    if ( $el('#primer-checkout-submit-button > span') && 
      $el('#primer-checkout-submit-button > span').innerText != 'Pay now'
    ) {
      $el('#primer-checkout-submit-button > span').innerHTML = `
      Pay now
      <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.16634 7.83339H10.4747L6.40801 11.9001C6.08301 12.2251 6.08301 12.7584 6.40801 13.0834C6.73301 13.4084 7.25801 13.4084 7.58301 13.0834L13.0747 7.59172C13.3997 7.26672 13.3997 6.74172 13.0747 6.41672L7.59134 0.916724C7.26634 0.591724 6.74134 0.591724 6.41634 0.916724C6.09134 1.24172 6.09134 1.76672 6.41634 2.09172L10.4747 6.16672H1.16634C0.708008 6.16672 0.333008 6.54172 0.333008 7.00006C0.333008 7.45839 0.708008 7.83339 1.16634 7.83339Z" fill="white"/>
      </svg>`
    }

    if ($el('#primer-checkout-scene-klarna-payment') && 
      $el('.crs-payment-klarna > label') &&
      !$el('.crs-payment-klarna > #primer-checkout-scene-klarna-payment')
    ) {
      $el('.crs-payment-klarna > label').after($el('#primer-checkout-scene-klarna-payment'))
  
      $$el('#primer-checkout-scene-klarna-payment .kGQuJo > div button').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopImmediatePropagation()
          pushDataLayer('exp_imp_ch_r_scospsypm_k',`Klarna ${item.innerText}`,'Button','Secure checkout Order summery Payment Select your payment method')
        })
      })
    }
   

    //add arrow 'save and continue' button
    if ($el('h3') && $el('h3').closest('.w-full').querySelector('&>button>div>div') && !$el('.crs-svg')) {
      $el('h3').closest('.w-full').querySelector('&>button>div>div').insertAdjacentHTML('beforeend', `
      <svg class="crs-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.16732 7.83327H10.4757L6.40898 11.8999C6.08398 12.2249 6.08398 12.7583 6.40898 13.0833C6.73398 13.4083 7.25898 13.4083 7.58398 13.0833L13.0757 7.5916C13.4007 7.2666 13.4007 6.7416 13.0757 6.4166L7.59232 0.916602C7.26732 0.591602 6.74232 0.591602 6.41732 0.916602C6.09232 1.2416 6.09232 1.7666 6.41732 2.0916L10.4757 6.1666H1.16732C0.708984 6.1666 0.333984 6.5416 0.333984 6.99994C0.333984 7.45827 0.708984 7.83327 1.16732 7.83327Z" fill="white"/>
      </svg>`)
    }

    if ($el('#primer-checkout-submit-button-container button') && $$el('.crs-btn')) {
      $$el('.crs-btn').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopImmediatePropagation()
          if (item.closest('.crs-payment-credit')) {
            pushDataLayer('exp_imp_ch_b_scospsypm_pn', 'Pay now', 'Button', 'Secure checkout Order summery Payment Select your payment method');
          } else {
            pushDataLayer('exp_imp_ch_r_scospsypm_k', 'Klarna Confirm', 'Button', 'Secure checkout Order summery Payment Select your payment method');
            
            if ($el('#primer-checkout-scene-credit-card-form')) {
              $el('#primer-checkout-scene-credit-card-form').after($el('#primer-checkout-scene-klarna-payment'))
              $el('#primer-checkout-scene-credit-card-form').remove()
            }
          }
          setTimeout(() => {
            $el('#primer-checkout-submit-button-container button').disabled = false
            $el('#primer-checkout-submit-button-container button').click()
          }, 300)
        })
      })
    }

    if ($el('.StripeElement iframe')) {
      $el('.StripeElement iframe').addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        pushDataLayer('exp_imp_ch_b_scosi_ecapg', 'Express checkout Apple Pay - Gpay', 'Button', 'Secure checkout Order summery Information');
      })
    }
    if (device == 'desktop') {
      const terms = `
      <style>
        .crs-continue {
          margin-top: 4px;
          background: #000000;
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }
        .crs-footer {
          order: 4;
          ${device == 'mobile' ? 'padding: 0 28px 28px;' : 'padding-top: 28px;'}
        }
        .crs-terms {
          padding: 12px 0 0;
          text-align: center;
          color: var(--Text, #484850);
          font-size: 14px;
          line-height: 20px;
        }
      </style>
      <div class="crs-footer">
        <div class="crs-terms"><p class="text-p mt-2" style="font-size: 14px; color: var(--Text, #484850); line-height: 20px; margin-top: 0px !important;">By registering your details you agree to our <a class="hover:underline inline-block" aria-label="" href="/terms-and-conditions" style="display: inline;"><div class="underline" style="display: inline;">Terms and Conditions</div></a> and <a class="hover:underline inline-block" aria-label="" href="/privacy-policy"><div class="underline">Privacy and Cookie Policy</div></a></p></div>
      </div>`;


      $$el('.py-10').forEach(item => {
        if (!item.innerText.includes('ummary')) {
          if ($el('.crs-terms')) return
          if (item.innerText.includes('Add your delivery address') ||
            item.innerText.includes('Add your billing address') ||
            item.innerText.includes('Your delivery options')
          ) {
            item.parentElement.insertAdjacentHTML('beforeend', terms)
          }
          if (item.innerText.includes('Select your payment method') && 
            $el('#checkout-container + div.mt-5.flex.flex-col')
          ) {
            item.parentElement.insertAdjacentHTML('beforeend', terms)
          }
        }
      })

      if (!$el('#checkout-container') && !$el('.crs-continue') && $el('.crs-footer') && $el('.overflow-auto ~ button')) {
        $el('.crs-footer').insertAdjacentHTML('afterbegin', `
        <button type="button" class="crs-continue flex items-center justify-center text-left p-3 uppercase w-full">
          <span class="p-1">Save and Continue</span>
          <svg class="crs-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1.16732 7.83327H10.4757L6.40898 11.8999C6.08398 12.2249 6.08398 12.7583 6.40898 13.0833C6.73398 13.4083 7.25898 13.4083 7.58398 13.0833L13.0757 7.5916C13.4007 7.2666 13.4007 6.7416 13.0757 6.4166L7.59232 0.916602C7.26732 0.591602 6.74232 0.591602 6.41732 0.916602C6.09232 1.2416 6.09232 1.7666 6.41732 2.0916L10.4757 6.1666H1.16732C0.708984 6.1666 0.333984 6.5416 0.333984 6.99994C0.333984 7.45827 0.708984 7.83327 1.16732 7.83327Z" fill="white"></path>
          </svg>
        </button>`)
        $el('.crs-continue').addEventListener('click', () => {
          $el('.overflow-auto ~ button').click()
        })
      } 
      if ($el('#checkout-container') && $el('.crs-continue')) {
        $el('.crs-continue').remove()
      }

      //timer
      if ($el('main>div:last-child>.mb-15') && 
        $el('#main > div.mx-auto.w-full.p-5 > div.flex.flex-col.items-start.justify-center.gap-4> div.flex.w-full.flex-1.flex-col.gap-4 > div.flex.justify-between') &&
        !$el('#main > div.mx-auto.w-full.p-5 > div.flex.flex-col.items-start.justify-center.gap-4> div.flex.w-full.flex-1.flex-col.gap-4 > div.flex.justify-between +.crs-timer')
      ) {
        $el('main>div:last-child>.mb-15').classList.add('crs-timer')
        $el('#main > div.mx-auto.w-full.p-5 > div.flex.flex-col.items-start.justify-center.gap-4> div.flex.w-full.flex-1.flex-col.gap-4 > div.flex.justify-between').after($el('.crs-timer'))
      }

      $$el('.overflow-auto + div > div').forEach(item => {
        if (item.innerText.includes('Total') || item.className.includes('border-platinum-9')) {
          item.style.order = '1'
        }
        if (item.innerText.includes('Got a promo code?') && !item.className.includes('crs-promo')) {
          item.style.display = 'none';
        }
      })

    }
   
  }
}

new CheckoutUpdate(device)
