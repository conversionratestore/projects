console.log('initExp');

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/able/payment/',
  clarity: false,
  observe: true,
};

const screenType = (sessionStorage.getItem('isDiscountActivated')) ? 'Second screen' : 'First screen'
const screenNumber = (sessionStorage.getItem('isDiscountActivated')) ? '2' : '1'

//Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      clarity('set', '', 'variant_1');
    }
  }, 1000);
}

const blockVisibility = (selector, viewTime) => {
    let v1 = new IntersectionObserver(entries => {
        entries.forEach(item => {
            if(item.isIntersecting) {
                v1.unobserve(item.target)
                setTimeout(function () {
                    v2.observe(item.target)
                },1000 * viewTime)
            }
        })
    }, {
        threshold: 0.4
    })
  
    let v2 = new IntersectionObserver(entries => {
        entries.forEach(item => {
            if(item.isIntersecting) {
                let attr = JSON.parse(item.target.dataset.visible)
                gaEvent(attr.name, attr.desc, 'View element on screen', attr.loc)
            } else {
                v1.observe(item.target)
            }
            v2.unobserve(item.target)
  
        })
    })
  
    document.querySelectorAll(selector).forEach(item => {
      v1.observe(item)
    })
  }

// Alalytic 3
// function gaEvent(action, label) {
//   if (!label) {
//     label = '';
//   }
//   try {
//     var objData = {
//       event: 'gaEv',
//       eventCategory: 'Experiment — also like',
//       eventAction: action,
//       eventLabel: label,
//       eventValue: '',
//     };
//     console.log('EventFire:', objData);
//     dataLayer.push(objData);
//   } catch (e) {
//     console.log('Event Error:', e);
//   }
// }

// Alalytic 4
function gaEvent(name = '', desc = '', type = '', loc = '') {
  try {
    var objData = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc,
    };
    console.log(name, desc, type, loc);
    dataLayer.push(objData);
  } catch (e) {
    console.log('Event Error:', e);
  }
}
// [class*=paypal-overlay-]
// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // console.log('Added', node);
        // if (node.classList.contains('paypal-checkout-sandbox')) {
        //   let awaitClosePaypal = setInterval(() => {
        //     if (!document.querySelector('.paypal-checkout-sandbox')) {
        //       clearInterval(awaitClosePaypal);
        //       openModal();
        //     }
        //   }, 100);
        // }

        if (
          node.getAttribute('class') &&
          node.getAttribute('class').includes('modalWindowWrapper') &&
          node.querySelector('[class*=cardList]')
        ) {
        //   console.log('Open pay modal');

          node.addEventListener('click', function (e) {
            // console.log(e.target);
            if (
              e.target.getAttribute('class') &&
              e.target.getAttribute('class').includes('modalWindowWrapper')
            ) {
              console.log('Close pay modal');
              e.target.querySelector('[class*=close-]').click();
              openModal();
            }
          });

          node
            .querySelector('[class*=close-]')
            .addEventListener('click', function (e) {
              openModal();
            });

          setTimeout(() => {
            initTip();
          }, 500);
        }
      }

      for (let node of mutation.removedNodes) {
        if (!(node instanceof HTMLElement)) continue;
        if(node.style.zIndex === '2147483647' && !node.getAttribute('data-merchant')) {
            setTimeout(() => {
                if(window.location.pathname === '/payment') {
                    openModal();
                }
            }, 500);
            
        }
        // console.log('Removed', node);
      }
    }
  });

  let demoElem = document.body;

  observer.observe(demoElem, { childList: true, subtree: true });
}

// Styles
const styles = `
  .lav-hide {
    display: none!important;
  }
  button[type='submit'] {
    background: #EB731A;
  }
  .chargebeeInputLabel-0-2-316 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #010101;
    top: -23px;
    left: 0;
    transform: none;
  }
  input::placeholder {
    color: #5E626B!important;;
  }
  .chargebeeInput-0-2-312.focus ~ .chargebeeInputLabel-0-2-316 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #010101;
    top: -23px;
    left: 0;
    transform: none;
  }
  [class*='paymentInfoWrapper'] h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #202B47;
    margin-bottom: 16px;
    text-align: left;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsListItem']:last-child h3 {
    margin-bottom: 0;
  }
  [class*='paymentInfoWrapper'] [class*='infoBlockWrapper'] {
    margin-top: 16px;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsWrapper'] {
    margin-bottom: 16px;
  }
  [class*='paymentInfoWrapper'] [class*='infoBlockText'] {
    margin-bottom: 16px;
    color: #202B47;
  }
  [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] svg {
    // min-width: 16px;
  }
  [class*='paymentInfoWrapper'] [class*='couponWrapper'] {
    margin-bottom: 12px;
    background: #FFFFFF;
    border-radius: 8px;
  }
  [class*='paymentInfoWrapper'] div[class^=divider] {
    border-color: #E0E3EB;
  }
  [class*='paymentInfoWrapper'] [class*='couponApplyButton'] {
    padding: 0;
    height: 32px;
    margin-top: 5px;
    margin-right: 5px;
    max-width: 70px;
  }
  [class*='paymentInfoWrapper'] [class*='couponInput-'] {
    padding-top: 9px;
    padding-bottom: 9px;
  }
  [class*='paymentInfoWrapper'] [class*='couponInput-']::placeholder {
    font-size: 14px;
    line-height: 18px;
    color: #5E626B;
  }
  [class*='paymentInfoWrapper'] [class*='infoBlockTitle'] {
    margin-top: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #202B47;
  }

  .lav-guarantee {
    display: flex;
    align-items: center;
    background: #E0E6F7;
    border-radius: 12px;
    padding: 16px;
    margin-top: 24px;
    font-family: SF Pro Text;
  }
  .lav-guarantee__icon {
    margin-right: 12px;
    flex-shrink: 0;
    line-height: 0;
  }
  .lav-guarantee__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #202B47;
  }
  .lav-guarantee__caption {
    margin-top: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }

  .lav-offer_activated [class*=infoBlockWrapper-][class*= wrappableBlock] {
    display: none!important;
  }
  .lav-offer {
    display: none;
    align-items: center;
    background: #FFE9D2;
    border-radius: 12px;
    padding: 16px;
    margin: 16px 0;
    font-family: SF Pro Text;
  }
  .lav-offer.active {
    display: flex;
  }
  .lav-offer__icon {
    margin-right: 12px;
    flex-shrink: 0;
    line-height: 0;
  }
  .lav-offer__info {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }
  .lav-offer__info span {
    font-weight: 700;
    color: #EB731A;
    white-space: nowrap;
  }
  .lav-modal {
    display: none;
    position: fixed;
    z-index: 999999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s;
    background: rgba(0, 0, 0, 0.8);
    margin-top: auto;
    opacity: 0;
    padding: 15px;
    font-family: SF Pro Text;
  }
  .lav-modal.active {
    display: flex;
  }
  .lav-modal__inner {
    position: relative;
    max-height: 100%;
    width: 100%;
    max-width: 418px;
    background: #fff;
    border-radius: 12px;
    overflow: auto;
    transition: 0.5s;
    padding: 30px;
    margin: auto;
  }

  .lav-overflow {
    overflow: hidden;
  }
  .lav-btn {
    background: #EB731A;
    border-radius: 8px;
    height: 48px;
    outline: none;
    font-weight: 600;
    font-size: 18px;
    padding: 8px 16px;
    line-height: 1;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }
  .lav-modal__close {
    position: absolute;
    top: 32px;
    right: 32px;
    cursor: pointer;
    transition: 0.3s;
    line-height: 0;
  }
  .lav-modal__close:hover {
    opacity: 0.8;
  }
  .lav-disc__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #202B47;
    text-align: center;
  }
  .lav-disc__caption {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #202B47;
    margin-top: 12px;
    text-align: center;
  }
  .lav-disc__image {
    line-height: 0;
    margin-top: 12px;
  }
  .lav-disc__image img {
    max-width: 100%;
    width: 100%;
  }
  .lav-disc__note {
    margin-top: 16px;
    padding: 16px;
    background: #E0E6F7;
    border-radius: 12px;
    display: flex;
  }
  .lav-disc__note-img {
    margin-right: 12px;
    line-height: 0;
    flex-shrink: 0;
  }
  .lav-disc__note-info {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #202B47;
  }
  .lav-disc__note-info span {
    color: #1375D6;
    font-weight: 700;
  }
  .lav-disc__btn {
    margin-top: 20px;
    width: 100%;
  }
  .lav-tip {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.35s;
  }
  .lav-tip__trigger {
    line-height: 0;
  }
  @media(min-width: 851px) {
    .lav-tip:hover {
      opacity: 0.7;
    }
  }

  @media(max-width: 850px) {
    [class*='paymentInfoWrapper'] [class*='couponInput-'] {
      font-size: 14px;
    }
    [class*='modalWindowForm'] {
      max-width: 90%;
    }
    [class*='close'] + [class*='header-'] {
      border-color: #E0E3EB;
      margin-bottom: 24px;
    }
    [class*='continueButton'] {
      margin-top: 24px;
    }
    [class*='paymentInfoWrapper'] h1 {
      letter-spacing: -0.004em;
      font-size: 24px;
      line-height: 34px;
    }
    [class*='paymentInfoWrapper'] {
      background: #F6F6F6;
      border-radius: 10px;
      padding: 16px;
    }
    [class*='infoBlockCouponButton-'] {
      margin-bottom: 12px;
    }
    header + [class*='banner'] {
      margin-bottom: 12px;
    }
    [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] h3 {
      margin-bottom: 0;
    }
    [class*='paymentInfoWrapper'] [class*='checkPointsListItem'] + [class*='checkPointsListItem'] {
      margin-top: 8px;
    }
    [class*='footerContent'] {
      background: #fff;
      padding-top: 0;
      padding-bottom: 28px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #202B47;
    }
    [class*='paymentWrapper'] {
      padding-bottom: 33px;
    }
    [class*='paymentButtonsWrapper'] div[class^=divider] {
      background-color: #E0E3EB;
      margin-top: 28px;
      margin-bottom: 28px;
    }
    [class*='paymentButtonsWrapper'] div[class^=divider]:after {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #202B47;
      padding-left: 20px;
      padding-right: 20px;
    }
    [class*='companyInfo'] span + span {
      font-weight: 700;
      margin-top: 2px;
    }
    [class*='creditCardBtnClass'] {
      background-color: #EB731A;
    }
    .lav-modal {
      padding: 20px 0 0 0;
    }
    .lav-modal__inner {
      transform: translateY(100%);
      margin-top: auto;
      border-radius: 16px 16px 0 0;
    }
    .lav-modal__inner.active {
      transform: translateY(0);
    }
    .lav-disc {
      padding: 16px;
      margin-bottom: 0;
    }
    .lav-disc__title {
      font-size: 24px;
      line-height: 34px;
      letter-spacing: -0.004em;
    }
    .lav-disc__caption {
      margin-top: 16px;
    }
    .lav-disc__image {
      margin-top: 16px;
    }
    .lav-modal__close {
      top: 16px;
      right: 16px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

/********* Custom Code **********/
let logs = '';

console.defaultLog = console.log.bind(console);
console.defaultError = console.log.bind(console);

console.log = function () {
  console.defaultLog.apply(console, arguments);

  try {
    checkErrors(JSON.stringify(arguments));
  } catch (e) {}
};

console.error = function () {
  console.defaultError.apply(console, arguments);

  try {
    checkErrors(JSON.stringify(arguments));
  } catch (e) {}
};

const errosForModal = [
  'PayPal error',
  'PayPal payment canceled',
  'Error! PayPal',
];

let start = setInterval(function() {
    if(window.location.pathname === '/payment') {
        
        clearInterval(start)
        init()
    }
}, 100)


function init() {
  console.log('init');
  initOffer();
  initGuarantee();
  initModal();
  promoCodeDesktop();
  if (window.innerWidth > 850) {
    initTip();
  }

  const awaitCardError = setInterval(() => {
    if (
      document
        .querySelector('[class*=errorWrapper] h3')
        ?.innerText.includes('error occurred while processing')
    ) {
      clearInterval(awaitCardError);
      openModal();
    }
  }, 500);
  const currentPrice = JSON.parse(localStorage.getItem('planCode')).price

  if(sessionStorage.getItem('isDiscountActivated') && +localStorage.getItem('newPrice') === +currentPrice) {
    document.querySelector('.lav-offer').classList.add('active');
  }
  setTimeout(function(){
    setTracking()
  },1000)
    

  let globalObserver = new MutationObserver((muts)=> {
    console.log('>>> global')
    if(window.location.pathname !== '/payment') {
        globalObserver.disconnect()
        let restart = setInterval(function() {
            console.log('>>> restart')
            if(window.location.pathname === '/payment') {
                clearInterval(restart)
                init()
            }
        }, 100)
    }
  })
  globalObserver.observe(document, {
    childList: true,
    subtree: true
  })
}

function checkErrors(val) {
  for (let item of errosForModal) {
    if (val.includes(item)) {
      openModal();
    }
  }
}

function initTip(target = "[id*='card-cvv-']") {
  let el = `
    <div class='lav-tip'>
      <div class='lav-tip__trigger'>
        <img src="${settings.dir}/img/tip.svg" />
      </div>
    </div>
  `;

  if (!document.querySelector(target)) return false;

  document.querySelector(target).insertAdjacentHTML('afterbegin', el);
}

function initOffer() {
  const el = `
  <div class='lav-offer' data-visible='{"name": "exp_discount_getting_51_discount_view", "desc": "You\`re getting 51% discont banner", "loc": "${screenType}"}'>
    <div class='lav-offer__icon'>
      <img src="${settings.dir}/img/icon-gift.svg" />
    </div>
    <div class='lav-offer__info'>Get a <span>51%</span> discount on your personalized <span>7-day trial plan</span></div>
  </div>
  `;

  document
    .querySelector("[class*='paymentInfoWrapper'] [class*='infoBlockText']")
    .insertAdjacentHTML('beforebegin', el);
}

function initGuarantee() {
  const el = `
  <div class='lav-guarantee' data-visible='{"name": "exp_discount_30_money_back${screenNumber}", "desc": "30-Day Money-Back Guarantee banner", "loc": "${screenType}"}'>
    <div class='lav-guarantee__icon'>
      <img src="${settings.dir}/img/icon-guarantee.svg" />
    </div>
    <div class='lav-guarantee__info'>
      <div class='lav-guarantee__title'>30-Day Money-Back Guarantee</div>
      <div class='lav-guarantee__caption'>We will remind you 2 days before your trial ends</div>
    </div>
  </div>
  `;

  if (window.innerWidth < 850) {
    document
      .querySelector("[class*='paymentWrapper']")
      .insertAdjacentHTML('beforeend', el);
  } else {
    document
      .querySelector("[class*='paymentInfoWrapper']")
      .insertAdjacentHTML('beforeend', el);
  }
}

function initModal() {
  const el = `
  <div class='lav-modal-wrapper'>
    <div class='lav-modal' data-visible='{"name": "exp_discount_did_you_know_popup_view", "desc": "Did you know popup", "loc": "${screenType}"}'>
      <div class='lav-modal__inner lav-disc'>
        <div class='lav-modal__close'>
          <img src='${settings.dir}/img/icon-close.svg'>
        </div>
        <div class='lav-disc__title'>Did you know?</div>
        <div class='lav-disc__caption'>A Columbia University study showed that 73% of dieters have lost weight and then gained it back at least once.</div>
        <div class='lav-disc__image'>
          <img src='${settings.dir}/img/graph.svg'>
        </div>
        <div class='lav-disc__note'>
          <div class='lav-disc__note-img'>
            <img src='${settings.dir}/img/icon-disc.svg'>
          </div>
          <div class='lav-disc__note-info' data-visible='{"name": "exp_discount_did_you_know_popup_30_back", "desc": "30-Day Money-Back Guarantee", "loc": "Did you know popup"}'>
            We want you to reach your goal and maintain it, so we are offerning a <span>special discount</span> on your <span>weight-loss program</span>.
          </div>
        </div>
        <button class='lav-disc__btn lav-btn lav-btn_orange'>Get my discount</button
      </div>
    </div>
  </div>
  `;

  document.querySelector('body').insertAdjacentHTML('beforeend', el);

//   document
//     .querySelector('.lav-guarantee')
//     .addEventListener('click', function () {
//       openModal();
//     });

  document.querySelector('.lav-modal').addEventListener('click', function (e) {
    if (e.target.classList.contains('lav-modal')) {
      e.preventDefault();
      closeModal();
    }
  });

  for (let btn of document.querySelectorAll('.lav-modal__close')) {
    btn.addEventListener('click', function () {
      closeModal();
      gaEvent('exp_discount_did_you_know_popup_close', 'Close', 'Button', 'Did you know popup')
    });
  }

  document
    .querySelector('.lav-disc__btn')
    .addEventListener('click', function () {
      closeModal();
      gaEvent('exp_discount_did_you_know_popup_get_dis', 'Get my discount', 'Button', 'Did you know popup')
    });
}

function openModal() {
  // todo uncomment
  if (sessionStorage.getItem('isDiscountActivated') || +localStorage.getItem('newPrice') === JSON.parse(localStorage.getItem('planCode')).price) return false;
  console.log('>>> open modal')

  sessionStorage.setItem('isDiscountActivated', 'yes');
  let plan = JSON.parse(localStorage.getItem('planCode'))
  plan.price = Math.round(plan.price * 0.49)
  plan.value = (plan.price % 100 === 0) ? `$${plan.price / 100}` : `$${(plan.price / 100).toFixed(2)}`
  localStorage.setItem('planCode', JSON.stringify(plan))
  localStorage.setItem('newPrice', plan.price);
  document.body.classList.add('lav-overflow');
  document.body.classList.add('lav-offer_activated');
  document.querySelector('.lav-offer').classList.add('active');

  if (document.querySelector('.lav-modal__inner.active')) {
    document
      .querySelector('.lav-modal__inner.active')
      .classList.remove('active');
  }

  document.querySelector('.lav-modal').classList.add('active');

  setTimeout(() => {
    document.querySelector('.lav-modal').style.opacity = '1';
    document.querySelector('.lav-modal__inner').classList.add('active');
  }, 200);
}

function closeModal() {
  document.body.classList.remove('lav-overflow');

  if (!document.querySelector('.lav-modal__inner.active')) return false;

  document.querySelector('.lav-modal__inner.active').classList.remove('active');

  document.querySelector('.lav-modal').style.opacity = '0';

  setTimeout(() => {
    document.querySelector('.lav-modal').classList.remove('active');
    if (document.querySelector('.lav-modal__inner[style]')) {
      setTimeout(() => {
        document
          .querySelector('.lav-modal__inner[style]')
          .removeAttribute('style');
          
      }, 50);
    }
    window.location.reload()
  }, 300);
}

function promoCodeDesktop() {
    if(window.innerWidth > 768) {
        document.querySelectorAll('div').forEach(div => {
            if(div.classList.toString().includes('couponWrapper')) {
                console.log('>>> 1 coupon')
                div.style.display = 'none'
                div.insertAdjacentHTML('beforebegin',
                '<p class="open_promo_code" style="margin-bottom: 12px; font-weight: 600; font-size: 14px; color: #1375D6; cursor: pointer;">Got a promo code?</p>')
                document.querySelector('.open_promo_code').addEventListener('click', function(){
                    this.remove()
                    div.style.display = 'block'
                    gaEvent('exp_discount_get_promo_code', 'Get a promo code', 'Link', screenType)
                })
            }
        })
         
    }
}

function setTracking() {
    document.querySelector('header+div').setAttribute('data-visible', '{"name": "exp_discount_spot_with_zya_visibility", "desc": "Spot with Zya visibility", "loc": "Header"}')
    document.querySelectorAll('*').forEach(item => {
        if(item.classList.toString().includes('infoBlockCouponButtonText')) {
            item.addEventListener('click', function(){
                gaEvent('exp_discount_get_promo_code', 'Get a promo code', 'Link', screenType)
            })
        }
        if(item.classList.toString().includes('creditCardBtnClass')) {
            item.addEventListener('click', function() {
                gaEvent(`exp_discount_credit_card${screenNumber}`, 'Credit / Debit card', 'Button', screenType)
                gaEvent('exp_discount_cart_pay_popup_view', 'Сard payment popup', 'View element on screen', screenType)
            })
        }
        if(item.classList.toString().includes('continueButton')) {
            item.addEventListener('click', function() {
                gaEvent(`exp_discount_credit_card${screenNumber}`, 'Credit / Debit card', 'Button', screenType)
            })
        }
        if(item.classList.toString().includes('backButtonIconInnerWrapper')) {
          item.addEventListener('click', function() {
            gaEvent(`exp_discount_back${screenNumber}`, 'Back', 'Button', screenType)
          })
        }
    })


    document.body.addEventListener('click', function(e){
        if(e.target.classList.toString().includes('close')) {
            gaEvent('exp_discount_cart_pay_popup_close', 'Close', 'Button', 'Сard payment popup')
        }

        // if(e.target.getAttribute('class').includes('continueButton') && e.target.closest('.modalWindowForm-0-2-73')) {
        //     gaEvent('exp_discount_cart_pay_popup_continue', 'Continue', 'Button', 'Сard payment popup')
        // }
    })
    blockVisibility('[data-visible]', 1)
    gaEvent('exp_discount_after_payment_attempt_load', 'loaded')
}




