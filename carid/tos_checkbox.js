//init variables
let base = 60;
let clocktimer, dateObj, dh, dm, ds, ms;
let readout = '';
let h = 1,
  m = 1,
  tm = 1,
  s = 0,
  ts = 0,
  mss = 0,
  init = 0;

//to clear the filed
function ClearСlock() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  mss = 0;
  init = 0;
  readout = '00:00:00';
  sessionStorage.setItem('tos_checkbox', readout);
}

//to start stopwatch
function StartTIME() {
  let cdateObj = new Date();
  let t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((mss / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((mss / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  mss = Math.round(t / 10);
  if (mss > 99) {
    mss = 0;
  }
  if (mss == 0) {
    mss = '00';
  }
  if (mss > 0 && mss <= 9) {
    mss = '0' + mss;
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  dh = h - 1;
  if (dh > 0) {
    if (dh < 10) {
      dh = '0' + dh;
    }
  } else {
    dh = '00';
  }
  readout = dh + ':' + dm + ':' + ds;
  sessionStorage.setItem('tos_checkbox', readout);
  clocktimer = setTimeout("StartTIME()", 1);
}

//start and stop
function StartStop() {
  if (init == 0) {
    ClearСlock();
    dateObj = new Date();
    StartTIME();
    init = 1;
  } else {
    clearTimeout(clocktimer);
    init = 0;
  }
}
//push dataLayer
function pushDataLayer(action) {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Accept TOS checkbox',
        'eventAction': action
    });
}

let viewed = false;

let interval = setInterval(() => {
    if (viewed == false && window.location.href.includes('/cart.php?mode=checkout') && document.querySelector('#checkout_form > div.cart-main-form-wrapper > div.payment-form-wrapper > div.checkout-iframe-holder > iframe') != null) {
        // clearInterval(interval)
        viewed = true
        document.body.insertAdjacentHTML('afterbegin',`<style>
            #checkout_form > div.cart-main-form-wrapper > div.payment-form-wrapper > div.checkout-iframe-holder > iframe {
                min-height: 418px;
            }
        </style>`)
        APP.abTermsCheckboxVerification()
        StartStop()

        document.querySelector('header .header-simple-logo-a').addEventListener('click', (e) => {
            e.preventDefault()
            pushDataLayer(`Avg. ${sessionStorage.getItem('tos_checkbox')} on the step 2 of the checkout`) 
            sessionStorage.setItem('tos_checkbox', '');
            window.location.href = e.href;
        })
        document.querySelectorAll('.cart-section a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                pushDataLayer(`Avg. ${sessionStorage.getItem('tos_checkbox')} on the step 2 of the checkout`) 
                sessionStorage.setItem('tos_checkbox', '');
                window.location.href = e.href;
            })
        })
    }
    if (viewed == false && !window.location.href.includes('/cart.php?mode=checkout') && sessionStorage.getItem('tos_checkbox') != null && sessionStorage.getItem('tos_checkbox') != '00:00:00' && sessionStorage.getItem('tos_checkbox') != '') {
        viewed = true
        pushDataLayer(`Avg. ${sessionStorage.getItem('tos_checkbox')} on the step 2 of the checkout`) 
        sessionStorage.setItem('tos_checkbox', '');
    }
})

pushDataLayer('loaded')

let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "tos_checkbox", "variant_1");
    }
}, 100)
