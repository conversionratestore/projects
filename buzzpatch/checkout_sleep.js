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
        .order-summary-toggle__text,
         a, .link, a:hover, .link:hover,
         .icon-svg--color-accent {
          color: #0092D8;
        }
        
        .order-summary-toggle__icon, 
        .order-summary-toggle__dropdown,
         .order-summary-toggle:hover .order-summary-toggle__icon,
          .order-summary-toggle:focus .order-summary-toggle__icon {
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
       
    </style>
`

let freeShipping = `
    <div class="free_shipping">
      <img src="${imgUrl}" alt="free shipping">
    </div>
`

document.body.insertAdjacentHTML('afterbegin', style)

document.querySelector('.money-back.js-mobile').insertAdjacentHTML('afterend', freeShipping)
if (document.querySelector('.skeleton-while-loading.order-summary__small-text')) {
    document.querySelector('.skeleton-while-loading.order-summary__small-text').innerText = 'Free'
}

document.querySelectorAll('.review-item').forEach((item, i) => {
    item.querySelector('img').setAttribute('src', `https://conversionratestore.github.io/projects/buzzpatch/img/${reviews[i].img}`)
    item.querySelector('p').innerText = reviews[i].text
})

document.querySelector('.review-top img').setAttribute('src', `https://conversionratestore.github.io/projects/buzzpatch/img/reviews-total.png`)
