const style = `
    <style>
      .tabs-menu.w-tab-menu,
      .div-block-3 {
        display: none;
      }
      
      .div[data-w-tab="Annual"] .text-block-3 {
        font-weight: 400;
      }
      
      .div[data-w-tab="Annual"] .text-block-4 {
        font-weight: 700;
      }
    </style>
`
if(window.location.pathname.includes('application')) {
    const draw = setInterval(function () {
        if(document.querySelector('#__layout > main > section > div > div.container.max-w-2xl.section--content.fade-in-2 > div.mb-16 > p.mt-5.text-lg.font-medium')) {
            if(document.querySelector('#__layout > main > section > div > div.container.max-w-2xl.section--content.fade-in-2 > div.mb-16 > p.mt-5.text-lg.font-medium').innerHTML === 'Starting at $8 per month') {
                document.querySelector('#__layout > main > section > div > div.container.max-w-2xl.section--content.fade-in-2 > div.mb-16 > p.mt-5.text-lg.font-medium').innerHTML = 'Starting at $84 per year'
            }
        }
    }, 1000)
    setTimeout(function () {
        clearInterval(draw)
    }, 5000)
} else {
    document.body.insertAdjacentHTML('afterbegin', style)
    const draw = setInterval(function () {
        if (document.querySelector('.pricing-tab-link[data-w-tab="Annual"]')) {
            clearInterval(draw)
            document.querySelector('.pricing-tab-link[data-w-tab="Annual"]').click()
        }
    }, 100)
}


let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity("set", "Change subscription plan", "annual");
    }
}, 100)

pushDataLayer('loaded')

function pushDataLayer(action, label = '') {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Change subscription plan (annual)',
        'eventAction': action,
        'eventLabel': label
    })
}

