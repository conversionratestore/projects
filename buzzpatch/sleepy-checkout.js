const imgUrl = 'https://conversionratestore.github.io/projects/buzzpatch/img/free-shipping.svg'

const reviews = [
    {
        img: 'review1.png',
        text: 'I don’t know how it works but the formulations of essential oils for SleepyPatch just knock my kids out at night without me resorting to the use of melatonin. All I can say is you have a loyal customer for life.'
    },
    {
        img: 'review2.png',
        text: 'My children jump into bed under their covers to get their sticker - which reduces the hassles of getting them into bed. Also, about after about a week of using the stickers, I have now had 4 straight nights where they have slept through the night.'
    },
    {
        img: 'review3.png',
        text: 'The SleepyPatch has helped me fall asleep from the first night I started wearing it. It’s amazing!'
    }
]

const style = `
    <style>
        header .wrap>.logo.logo--center span {
          display: none;
        }
        
        header.banner {
          padding-top: 0;
        }
    
        .order-summary-toggle__text,
        a, .link, a:hover, .link:hover,
        .icon-svg--color-accent,
        .order-summary-toggle:hover .order-summary-toggle__text,
        .order-summary-toggle:focus .order-summary-toggle__text {
          color: #0092D8;
        }
        
        .order-summary-toggle__icon, 
        .order-summary-toggle__dropdown,
        .order-summary-toggle:hover .order-summary-toggle__icon,
        .order-summary-toggle:focus .order-summary-toggle__icon,
        .order-summary-toggle:hover .order-summary-toggle__dropdown,
        .order-summary-toggle:focus .order-summary-toggle__dropdown{
          fill: #0092D8;
        }
        
        .input-checkbox:checked,
        .input-radio:checked,
        .field__input:focus,
        .input-checkbox:checked:hover,
        .input-radio:checked:hover {
          border-color: #0092D8;
        }
        .field__input:focus {
        box-shadow: 0 0 0 1px #0092D8;
        }
        
        .btn, .sp-modal-toggle,
        .btn:hover, .sp-modal-toggle:hover {
          background-color: #0092D8;
        }
        
        .free_shipping {
          margin-top: 10px;
        }
        
        .free_shipping img{
           display: block;
           margin: 0 auto;
        }
        
        .skeleton-while-loading.order-summary__small-text {
          font-weight: 700;
          font-size: 14px;
        }
        
        .logo--center img {
          width: 100%;
        }
       
    </style>
`

let freeShipping = `
    <div class="free_shipping">
      <img src="${imgUrl}" alt="free shipping">
    </div>
`

document.body.insertAdjacentHTML('afterbegin', style)


const init = setInterval(() => {
    console.log('>>> test')
    if (document.querySelector('.review-top img')) {
        clearInterval(init)
        start()
    }
})


function start() {

const int = setInterval(() => {
    if (document.querySelector('.skeleton-while-loading.order-summary__small-text')) {
        clearInterval(int)
        document.querySelector('.skeleton-while-loading.order-summary__small-text').innerText = 'Free'
    }
}, 200)

const int2 = setInterval(() => {
    if (document.querySelector('header .wrap>.logo.logo--center')) {
        clearInterval(int2)
        document.querySelector('header .wrap>.logo.logo--center').insertAdjacentHTML('afterbegin', `<img src="https://conversionratestore.github.io/projects/buzzpatch/img/header.svg">`)
        document.querySelector('.money-back.js-mobile').insertAdjacentHTML('afterend', freeShipping)
    }
}, 200)

setTimeout(() => {
    clearInterval(int)
}, 4000)


document.querySelectorAll('.review-item').forEach((item, i) => {
    item.querySelector('img').setAttribute('src', `https://conversionratestore.github.io/projects/buzzpatch/img/${reviews[i].img}`)
    item.querySelector('p').innerText = reviews[i].text
})

document.querySelector('.review-top img').setAttribute('src', `https://conversionratestore.github.io/projects/buzzpatch/img/reviews-total.svg`)


let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity("set", "checkout_hypothesis", "sleepypatch");
    }
}, 100)

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Checkout_hypothesis',
    'eventAction': 'loaded'
});
}
