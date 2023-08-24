
let planObj = [
    {
        'Features Included:': [
            'Verified Emails', 
            'Mobile Phones', 
            'Chrome Extension'
        ]
    },
    {
        'Features Included:': [
            'Verified Emails',
            'Mobile Phones',
            'CRM Integration',
            'Company News Alert'
        ]
    },
    {
        'Everything in Essentials and:': [
            'Data Enrichment',
            'Email Pattern Intel',
            'Technographics',
            'Advanced  Filters',
            'Suppression List Uploads'
        ]
    },
    {
        'Everything in Plus and:': [
            'Buyer Intent data',
            'All Search Filters',
            'Advanced API Access',
            'Advanced CRM Integrations',
            'Competitor Intelligence',
            'Advanced Team Management',
            'Dedicated Success Management',
            'Onboarding Specialist',
            'Priority Phone Support '
        ]
    }
]


function changePlan(item, index) {
    let plan = planObj[index + 1];
    let optionsPlan = '';

    for (const key in plan) {
        item.querySelector('.advantages-list__title').innerHTML = key;

        for (let i = 0; i < plan[key].length; i++) {
            optionsPlan += `<li class="advantages-list-item">${plan[key][i]}</li>`;
        }
    }

    item.querySelector('.advantages-list').innerHTML = optionsPlan;
 
    if (index == 2) {

        if (!item.querySelector('.product-card__action-btn-wrap button').classList.contains('btn--disabled')) {

            item.querySelector('.product-card__price').style = 'font-size: 45px;';
            item.querySelector('.product-card__price').innerHTML = `Let's Chat`;

            item.querySelectorAll('.product-card__action-btn-wrap button').forEach((button, i) => {
                button.style = 'display: none!important';
                button.insertAdjacentHTML('afterend', `
                <a href="https://www.uplead.com/uplead-demo/" class="btn_book_demo btn btn--large btn--blue">Book a Demo</a>`);
            })

            document.querySelectorAll('.btn_book_demo').forEach(book => {
                book.addEventListener('click', () => {
                    let parent = item.closest('.accountPlans__monthlyPlans-wrapper')
                    sendGAEvent(`exp_changing_pricing_${parent ? 'm': 'a' }_bd`, `Book a Demo - ${parent ? 'monthly' : 'annual' }`, 'Button', 'Plan');
                })
            })
        } else {
            item.querySelector('.product-card__price').style = 'font-size: 26px;';
            item.querySelector('.product-card__price').innerHTML = `You’re on this plan`;
        }
       

        if (item.querySelector('.product-card__price-note')) {
            item.querySelector('.product-card__price-note').remove();
        }
        
        item.querySelector('.product-card__advantages-wrap').innerHTML = `<div class="product-card__advantages"><span class="product-card__advantages--title">Custom credits</span></div>`;
    }
}

// sendGAEvent
function sendGAEvent(event_name, event_desc, event_type, event_loc) { // Send a Google Analytics event
    window.dataLayer = window.dataLayer || [];

    const obj = {
      'event': 'event-to-ga4',
      event_name,
      event_desc,
      event_type,
      event_loc
    }

    dataLayer.push(obj)
    console.log(obj)
}

let init = setInterval(() => {
    if (window.location.href.includes('/www.uplead.com/pricing/') && 
        document.querySelectorAll('.elementor-16422 .elementor-element.elementor-element-d21317a > div > div > div') &&
        document.querySelectorAll('.elementor-12884 .elementor-element.elementor-element-3b76a3c > div > div > div')
    ) {
        clearInterval(init)

        document.body.insertAdjacentHTML('afterbegin', `
        <style>
            .elementor-16422 .elementor-element.elementor-element-657058f > .elementor-widget-container,
            .elementor-16422 .elementor-element.elementor-element-2ce0c11 > .elementor-widget-container,
            .elementor-16422 .elementor-element.elementor-element-868f805 > .elementor-widget-container,
            .elementor-12884 .elementor-element.elementor-element-33d262b>.elementor-widget-container,
            .elementor-12884 .elementor-element.elementor-element-397cf31>.elementor-widget-container, 
            .elementor-12884 .elementor-element.elementor-element-42bb927>.elementor-widget-container,
            .elementor-12884 .elementor-element.elementor-element-4a637b7>.elementor-widget-container {
                margin: 0px 0px 46px 0px!important;
            }
            .elementor-16422 .elementor-element.elementor-element-ed72a04, 
            .elementor-12884 .elementor-element.elementor-element-3dbd1a7 {
                font-size: 50px!important;
                margin-bottom: 33px;
            }

            @media (min-width: 768px) {
                .elementor-16422 .elementor-element.elementor-element-d21317a > div > div > div .elementor-widget-icon-list ul,
                .elementor-16422 .elementor-element.elementor-element-3b76a3c > div > div > div .elementor-widget-icon-list ul {
                    min-height: 314px;
                }
                .elementor-element.elementor-element-bb20dfb.elementor-align-justify.elementor-widget.elementor-widget-button {
                    margin-top: 64px;
                }
                .elementor-element.elementor-element-e6d7aec.elementor-align-justify.elementor-widget.elementor-widget-button {
                    margin-top: 29px;
                }
            }
        </style>`)

        function plan(item, index, parent) {
 
            if (index == 3) {
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? 'ed72a04': '3dbd1a7' } .elementor-text-editor`).innerHTML = `Let's Chat`;
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? '29bc775': '0b4de9f' } .elementor-text-editor`).innerHTML = '<span class="blue-credits">Custom credits</span>';
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? '4fddf51': '8f551b7' }`).remove();
               
                if (parent == 'd21317a') {
                    item.querySelector(`.elementor-element.elementor-element-8caf1df`).remove();
                }
               
                
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? 'bb20dfb': 'e6d7aec' } a`).href = 'https://www.uplead.com/uplead-demo/';
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? 'bb20dfb': 'e6d7aec' } a .elementor-button-text`).innerHTML = 'Book a Demo';
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? 'db37ca2': '04bb20b' } a`).href = 'https://www.uplead.com/uplead-demo/';
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? 'db37ca2': '04bb20b' } a .elementor-button-text`).innerHTML = 'Book a Demo';
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? 'bb20dfb': 'e6d7aec' } a`).addEventListener('click', () => {
                    sendGAEvent(`exp_changing_pricing_${parent == 'd21317a' ? 'a': 'm' }_bd`, `Book a Demo - ${parent == 'd21317a' ? 'annual': 'monthly' }`, 'Button', 'Pricing');
                })
                item.querySelector(`.elementor-element.elementor-element-${parent == 'd21317a' ? 'db37ca2': '04bb20b' } a`).addEventListener('click', () => {
                    sendGAEvent(`exp_changing_pricing_${parent == 'd21317a' ? 'a': 'm' }_bd`, `Book a Demo - ${parent == 'd21317a' ? 'annual': 'monthly' }`, 'Button', 'Pricing');
                })
                

            }

            let plan = planObj[index];
            let optionsPlan = '';

            for (const key in plan) {
              
                item.querySelector('.elementor-widget-heading > div > div.elementor-heading-title').innerHTML = key;

                for (let i = 0; i < plan[key].length; i++) {
                    optionsPlan += ` 
                    <li class="elementor-icon-list-item">
                        <span class="elementor-icon-list-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="${index == 0 ? '#fff' : '#00A2BB'}"></circle><path d="M14.8157 6.60132L8.01726 13.3998L5.18457 10.5671" stroke="${index == 0 ? '#00A2BB' : '#fff'}" stroke-miterlimit="10"></path></svg> 
                        </span>
                        <span class="elementor-icon-list-text">${plan[key][i]}</span>
                    </li>`;
                }
            }

            item.querySelector('.elementor-widget-icon-list ul').innerHTML = optionsPlan; 
        }
        document.querySelectorAll('.elementor-16422 .elementor-element.elementor-element-3b76a3c > div > div > div').forEach((item, index) => {
            plan(item, index, '3b76a3c')
        })
        document.querySelectorAll('.elementor-16422 .elementor-element.elementor-element-d21317a > div > div > div').forEach((item, index) => {
            plan(item, index, 'd21317a')
        })
    }

    if (window.location.href.includes('/www.uplead.com/uplead-demo/') && 
        document.querySelector('.elementor-22838 .elementor-element.elementor-element-74ef8e1a .elementor-heading-title') &&
        document.querySelector('.elementor-22838 .elementor-element.elementor-element-7800fc53 .elementor-heading-title')
    ) {
        clearInterval(init)

        document.querySelector('.elementor-22838 .elementor-element.elementor-element-74ef8e1a .elementor-heading-title').innerHTML = '#1 Rated B2B Prospecting Tool';;
        document.querySelector('.elementor-22838 .elementor-element.elementor-element-7800fc53 .elementor-heading-title').innerHTML = '#1 Rated B2B Prospecting Tool';; 
    }

    if (window.location.href.includes('/app.uplead.com/plans') && 
        document.querySelectorAll('.accountPlans__plans-list .product-card').length > 3
        
    ) {
        if (!document.querySelector('.exp-style')) {
            document.body.insertAdjacentHTML('afterbegin',`
            <style class="exp-style">
              
                .accountPlans__plans-list .product-card .advantages-list__note,
                .accountPlans__monthlyPlans-wrapper .accountPlans__plans-list .product-card:last-child,
                .accountPlans__plans-list .product-card:last-child{
                    display: none!important;
                }
                @media (min-width: 1324px) {
                    .accountPlans__plans-list {
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                    .product-card.popular .product-card__body button.btn.btn--large.btn--blue.btn--disabled, .product-card__body .btn_book_demo {
                        margin-top: 100px;
                    }
                    .accountPlans__monthlyPlans-wrapper .product-card__body .btn_book_demo {
                        margin-top: 55px;
                    }
                }
            </style>`)
        }
     
        
        if (!document.querySelectorAll('.accountPlans__plans-list .product-card')[2].innerText.includes(`Let's Chat`) && 
            !document.querySelectorAll('.accountPlans__plans-list .product-card')[2].innerText.includes(`You’re on this plan`)
        ) {
            document.querySelectorAll('.accountPlans__freeUser-container > .accountPlans__plans-list .product-card').forEach((item, index) => {
                changePlan(item, index)
            })
        }
        if (
            document.querySelectorAll('.accountPlans__monthlyPlans-wrapper .accountPlans__plans-list .product-card')[2] &&
            !document.querySelectorAll('.accountPlans__monthlyPlans-wrapper .accountPlans__plans-list .product-card')[2].innerText.includes(`Let's Chat`) && 
            !document.querySelectorAll('.accountPlans__monthlyPlans-wrapper .accountPlans__plans-list .product-card')[2].innerText.includes(`You’re on this plan`)
        ) {
            document.querySelectorAll('.accountPlans__freeUser-container > .accountPlans__monthlyPlans-wrapper .accountPlans__plans-list .product-card').forEach((item, index) => {
                changePlan(item, index)
            })
        }
    }
})