const style = /*html*/`
    <style>
        .elementor-16422 .elementor-element.elementor-element-b1aa2aa, .accountPlans__monthlyPlans-link, .elementor-text-editor.hide, .product-card__advantages:nth-child(2n) { display: none; }
        .elementor-16422 .elementor-element.elementor-element-a2a14e8 {margin-bottom: 11px;}
        .elementor-16422 .elementor-element.elementor-element-f443083 {margin-bottom: 15px;}       

        p.price, .product-card__price {
            color: #000 !important;
            font-weight: 500 !important;
            font-size: 34px !important;
            margin: 0;
            line-height: 22px !important;
            margin-bottom: 22px;
        }

        p.price.white {
            color: #fff !important;
        }

        .product-card__price {
            margin-right: 6px;
        }

        .price span, .product-card__price-note {
            font-weight: bold !important;
            font-size: 18px !important;
            color: #0098B0 !important;
        }

        .price.white span {
            color: #fff !important;
        }

        p.credits {
            font-weight: bold;
            font-size: 19px;
            margin: 0;
            line-height: 22px;
            margin-right: 4px;
            color: #0098B0;
        }

        p.credits.white {
            color: #fff !important;
        }

        .credits span {
            font-weight: normal;
        }

        .tooltip {
            display: inline-block;
            position: relative;
        }

        .tooltip .tooltip-text {
            margin: 0;
            display: block;
            width: 200px;
            padding: 10px 15px;
            visibility: hidden;
            position: absolute;
            top: -72px;
            margin-left: -150px;
            opacity: 0;
            transition: opacity 0.3s;
            font-weight: 600;
            font-size: 12px;
            background: #00A2BB;
            border-radius: 15px;
            color: #fff;
            z-index: 1;
            line-height: 14px;
            box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        }

        .tooltip .tooltip-text.white {
            background: #fff;
            color: #00A2BB;
        }

        .tooltip .tooltip-text::after {
            content: '';
            position: absolute;
            bottom: -7px;
            right: 33px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 22px 12px 0 12px;
            border-color: #00A2BB transparent transparent transparent;
        }

        .tooltip .tooltip-text.white::after {
            border-color: #fff transparent transparent transparent;
        }

        .tooltip img {
            margin-top: -14px;
            margin-right: 4px;
        }

        .tooltip:hover .tooltip-text {
            visibility: visible;
            opacity: 1;
        }

        .credits-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
        }

        .product-card__header-wrap, .product-card__body {
            padding-left: 20px !important;
            padding-right: 20px !important;
        }
    </style>
`

document.head.insertAdjacentHTML('beforeend', style)

window.onload(() => {
if (window.location.hostname.includes('app')) {
    document.querySelectorAll('.product-card').forEach(card => {
        card.querySelector('.product-card__price-note').innerText = ' paid annually'
        let credits = card.querySelectorAll('.product-card__advantages')[0].innerText.split('Annually')[0]

        card.querySelector('.product-card__advantages').innerHTML = /*html*/`
            <div class="credits-wrapper">
                <p class="credits">${credits}</p>            
                <div class="tooltip">
                    <img src="https://conversionratestore.github.io/projects/uplead/img/question_mark.svg" alt="tooltip">
                    <p class="tooltip-text">Each Credit allows you to reveal the contact details for one lead</p>                
                </div>     
                <span>per year</span>
            </div>
        `
    })   
} else {
    const elements = ['b90f425', 'f2eed8c', 'bb6fb2c', '9af5ee2']

    elements.forEach((el, index) => {
        let node = document.querySelector(`[data-id="${el}"]`)

        let price = node.querySelectorAll(`span.blue-credits`)[1]?.innerText || '$0'
        let credits = node.querySelectorAll(`span.blue-credits`)[0]?.innerText || node.querySelectorAll(`span.white-credits`)[0]?.innerText

        let whiteClass = ''
        let whiteClassImg = ''
        let perYear = `<span>per year</span>`

        if (index === 0) {
            whiteClass += 'white'
            whiteClassImg = '_white'
            perYear = ''
        }

        node.querySelector(`.elementor-text-editor`).innerHTML = `<p class="price ${whiteClass}">${price} <span> paid annually</span></p>`
        node.querySelectorAll(`.elementor-text-editor`)[1].innerHTML = /*html*/`
        <div class="credits-wrapper">
            <p class="credits ${whiteClass}">${credits}</p>            
            <div class="tooltip">
                <img src="https://conversionratestore.github.io/projects/uplead/img/question_mark${whiteClassImg}.svg" alt="tooltip">
                <p class="tooltip-text ${whiteClass}">Each Credit allows you to reveal the contact details for one lead</p>                
            </div>     
            ${perYear}   
        </div>
        `
        node.querySelectorAll(`.elementor-text-editor`)[3]?.classList.add('hide')
    })
}

let isTooltips = setInterval(() => {
    if(document.querySelectorAll('.tooltip')[3]) {
        clearInterval(isTooltips)

        document.querySelectorAll('.tooltip').forEach(item => {
            item.addEventListener('mouseenter', (e) => {                
                let plan = e.target?.closest('.product-card')?.querySelector('.product-card__header').innerText || e.target?.closest('[data-element_type="column"]')?.querySelector('.elementor-heading-title').innerText
                
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp: Without month plans',
                    'eventAction': 'Hover on hint',
                    'eventLabel': plan
                });

                console.log('Hover on hint. Label: ', plan);
            })
        })
    }
}, 200) 

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Without month plans',
    'eventAction': 'loaded'
});

clarity('set', 'without_month_plans', 'variant_1');
})