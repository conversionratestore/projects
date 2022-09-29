/** Variables */
let device = ''

if (screen.width > 480) {
    device = 'Desktop'
} else {
    device = 'Mobile'
}

const style = /*html*/`
        <style>
            .my_text p {
                margin: 0 0 12px 0;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                color: #555555;
            }

            .my_text h3 {
                font-weight: 330;
                font-size: 28px;
                line-height: 34px;
                color: #526EFF;
                margin-bottom: 20px;
            }

            .calc {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background: #FFFFFF;
                border: 1px solid #D3D4D6;
                box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);
                border-radius: 10px;
                padding: 48px;
            }
            .calc h4,
            .calc h5 {
                text-transform: none;
            }
            .calc h5 {
                margin-bottom: 0;
            }

            .middle_line {
                width: 1px;
                background: #D3D4D6;
            }

            .left_part,
            .right_part {
                width: 46%;
            }

            .select_wrapper {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
            }           
            .select_wrapper label {
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: #555555;
                margin-bottom: 4px;
            }
            .select_wrapper select {
                padding: 0px 8px 0px 12px;
                width: 100%;
                height: 46px;
                background: #FFFFFF;
                border: 1px solid #D3D4D6;
                border-radius: 4px;              
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                color: #333333;
                transition: all 100ms ease 0s;
                padding-right: 30px;
                /* for Firefox */
                -moz-appearance: none;
                /* for Chrome */
                -webkit-appearance: none;
            }
            /* For IE10 */
            .select_wrapper select::-ms-expand {
                display: none;
            }
            .select_wrapper select:hover {
                border-color: rgb(154, 153, 153);
            }
            .select_wrapper .wrap {
                position: relative;
            }
            .select_wrapper .wrap::after {
                content: "";
                position: absolute;
                top: 20px;
                right: 12px;
                background: url('https://conversionratestore.github.io/projects/moneygeek/img/arr_down.svg');
                background-size: cover;
                width: 12px;
                height: 7px;
                pointer-events: none;
                transition: all .3s ease;
            }
            .select_wrapper .wrap:hover::after {
                filter: invert(70%) sepia(0%) saturate(93%) hue-rotate(196deg) brightness(89%) contrast(83%);
            }

            .two_selects {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .two_selects .select_wrapper {
                width: 48%;
            }

            .right_part .txt {
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #555555;
            }

            .calc .e1ssirya0 .header,
            .calc .e1ssirya0 .row {
                margin: 0;
            }

            .graph {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
                margin-bottom: 20px;
                border-bottom: 1px solid #D3D4D6;
            }

            .graph > div {
                width: 32.5%;            
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;  
                border-top: 16px solid; 
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                cursor: pointer;
                background: #EBEBEB;
            }
            .graph > div.low {
                height: 70px;               
                border-color: #A3D052;
            }
            .graph > div.low.selected_pack {
                background: #EBF6D9;
            }
            .graph > div.average {
                height: 78px;                
                border-color: #F8D56E;
            }
            .graph > div.average.selected_pack {
                background: #FFF6DE;                
            }
            .graph > div.average p.small {
                font-size: 14px;
            }
            .graph > div.high {
                height: 118px;
                background: #EBEBEB;
                border-color: #E98676;
            }
            .graph > div.high.selected_pack {
                background: #FEE6E3;                
            }
            .graph > div p {
                margin: 0;
            }
            .graph > div p:first-child {
                font-size: 19px;
                line-height: 20px;
                font-weight: bold;
                color: #555555;
                margin-bottom: 4px;
            }
            .graph > div p:last-child {
                font-weight: 400;
                font-size: 14px;
                line-height: 14px;
                color: #555555;
            }

            .calc .css-0 {
                display: none;
            }

            .my_btn2 {
                margin-top: 32px;
                white-space: normal !important;
                height: auto !important;
                min-height: 2.5rem;
                font-size: 14px !important;
                padding: 8px;
            }

            @media screen and (max-width: 767px) {
                .calc {
                    padding: 32px 20px;
                    flex-direction: column;
                }

                .left_part, .right_part {
                    width: 100%;
                }

                .middle_line {
                    display: none;
                }

                .graph > div p:first-child {
                    font-size: 18px;
                }
            }
        </style>
    `
const intervalTimeout = 200

const options = {
    'states': [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'District of Columbia', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ],
    'prices': [
        '$400-$500', '$500-$600', '$600-$700', '$700-$800', '$800-$900', '$900-$1000', '$1000-$1100', '$1100-$1200', '$1200-$1300', 'more than $1300'
    ]
}
/** Functions */
const addOptions = (arr, selected) => arr.map(item => `<option value="${item}" ${item === selected ? 'selected' : ''}>${item}</option>`).join('')

const changeCompaniesAndPrice = () => {
    /* change companies */
    if (!document.querySelector('.e1ssirya3 .e1ssirya0')) {
        document.querySelector('.no_data').hidden = false
        document.querySelector('.calc .e1ssirya0').hidden = true
        document.querySelector('.companies_sub').hidden = true
    } else {
        document.querySelector('.no_data').hidden = true
        document.querySelector('.companies_sub').hidden = false
        document.querySelector('.calc .e1ssirya0').replaceWith(document.querySelector('.e1ssirya0').cloneNode(true)) // copy companies table
        document.querySelector('.calc .e1ssirya0').hidden = false
    }

    for (let i = 0; i < 4; i++) { // copy values from client's calc to my calc
        if (i !== 1) {
            let mySelectIndex

            switch (i) {
                case 0:
                    mySelectIndex = 0
                    break;
                case 2:
                    mySelectIndex = 1
                    break;
                case 3:
                    mySelectIndex = 2
                    break;
                default:
                    break;
            }

            document.querySelectorAll('.select_wrapper select')[mySelectIndex].value = document.querySelectorAll('.css-1uccc91-singleValue')[i].innerText
        }
    }

    /* change price */
    const elements = [
        ['low-end'],
        ['average'],
        ['high-end']
    ]

    elements.forEach((element, index) => {
        let price = ''

        document.querySelectorAll(`.calc .graph > div p:first-child`)[index].innerText = ''

        document.querySelectorAll(`.${element[0]} .text-transition_placeholder`).forEach(symbol => {
            price = price + symbol.textContent
        });

        document.querySelector(`.calc [data-price="${element[0]}"] p`).innerText = price
    });
}

const runObserver = () => {
    const target = document.querySelector('.e1ssirya3');
    const config = {
        childList: true,
        subtree: true
    };

    const callback = (mutations) => {
        for (let mutation of mutations) {
            if (
                mutation.target.matches('.e1ssirya1')
                || mutation.target.matches('.e1ssirya0')
            ) {
                changeCompaniesAndPrice()
            } else {
                for (let node of mutation.removedNodes) {
                    if (!(node instanceof HTMLElement)) continue
                    changeCompaniesAndPrice()
                }
            }
        }
    }

    const observer = new MutationObserver(callback);
    observer.observe(target, config);
}

const simulateSelectEvents = (selectIndex, optionIndex) => {
    const x = window.scrollX;
    const y = window.scrollY;

    const selectEvents = ['mousedown', 'focusin'];

    switch (selectIndex) {
        case 0:
            selectIndex = 0
            break;
        case 1:
            selectIndex = 2
            break;
        case 2:
            selectIndex = 3
            break;
        default:
            break;
    }

    const select = document.querySelectorAll('.css-2b097c-container input')[selectIndex]

    selectEvents.forEach(eventType =>
        select.dispatchEvent(
            new MouseEvent(eventType, { bubbles: true, })
        )
    );

    const waitForOptions = setInterval(() => {
        if (document.querySelector('.css-11unzgr')) {
            clearInterval(waitForOptions)

            document.querySelectorAll('.css-11unzgr div')[optionIndex].click()
        }
    }, intervalTimeout)

    // Scroll to the previous location
    setTimeout(() => {
        window.scrollTo(x, y);
    }, 0);
}

const callEvent = (eventAction, eventLabel = '') => {
    window.dataLayer = window.dataLayer || []
    const obj = {
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Educate users. ' + device,
        eventAction,
        eventLabel
    }
    dataLayer.push(obj)
    console.log(obj);
}

/* HTML elements */
const calculator = /*html*/`
        <div class="my_text">
            <h2>Learn how to stop overpaying for your car insurance</h2>
            <p>Research by <a href="https://www.forbes.com/advisor/car-insurance/survey-drivers-overpaying-car-insurance/" target="_blank">Forbes</a> reveals that almost 58% of car owners are being overcharged for their insurance.</p>
            <p>Normally, businesses will appreciate loyalty and offer their long-term customers the best rates. However, the car insurance industry generally does the opposite. Insurance companies tend to charge existing customers higher fees so so they can afford to create discounted deals that are used to attract new customers. In fact, a recent report by Expertise shows that 62% of car owners will stick with the same deal instead of looking for a better one.</p>
            <p>That’s why we recommend you shop for a better car insurance deal every 12 months.</p>
            <p>Another reason is that carriers will often change the criteria used for their underwriting, allowing you to potentially qualify for better rates than you were offered in the past.</p>
            <h3 id="my_anchor">We can help you determine how much you can save on your new car insurance</h3>
        </div>
        <div class="calc">
            <div class="left_part">
                <h4>Calculate the price of your car insurance if you switch to another provider</h4>
                <div class="select_wrapper">
                    <label for="state">State</label>
                    <div class="wrap">
                        <select name="state" id="my_state">
                            ${addOptions(options.states, 'Alaska')}
                        </select>                    
                    </div>                    
                </div>
                <div class="two_selects">                
                    <div class="select_wrapper">
                        <label for="age">Age</label>
                        <div class="wrap">
                            <select name="age" id="my_age">
                                <option value="19-20">19-20</option>
                                <option value="21-22">21-22</option>
                                <option value="23-25">23-25</option>
                                <option value="26-29">26-29</option>
                                <option value="30-65" selected>30-65</option>
                                <option value="65+">65+</option>
                            </select>
                        </div>
                    </div>
                    <div class="select_wrapper">
                        <label for="driving">Driving Record</label>
                        <div class="wrap">
                            <select name="driving" id="my_driving">
                                <option value="Clean" selected>Clean</option>
                                <option value="Speeding">Speeding</option>
                                <option value="At-Fault Accident">At-Fault Accident</option>
                                <option value="DUI">DUI</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="select_wrapper">
                    <label for="insurance">How much are you currently paying for your car insurance?</label>
                    <div class="wrap">
                        <select name="insurance" id="my_insurance">                    
                            ${addOptions(options.prices, '$400-$500')}
                        </select>
                    </div>
                </div>
            </div>
            <div class="middle_line"></div>
            <div class="right_part">
                <h5>Average Annual Auto Insurance Rates</h5>
                <p class="txt">Click the section of the wheel in your price range to see options.</p>
                <div class="graph">
                    <div class="low selected_pack" data-price="low-end">
                        <p>$457</p>
                        <p>low end</p>
                    </div>
                    <div class="average" data-price="average">
                        <p>$596</p>
                        <p>on average</p>
                    </div>
                    <div class="high" data-price="high-end">
                        <p>$967</p>
                        <p>high end</p>
                    </div>
                </div>
                <p class="txt companies_sub">Click an insurer below to visit their review page or continue to your personalized quote.</p>                
                <div color="#EAF6D6" class="css-107z8q1 e1ssirya0">
                    <div class="header">
                        <p>Company</p>
                        <p>Average Annual Rates</p>
                    </div>
                    <div class="row"><span>
                            <p class="ranking">1.</p><a class="link" href="/insurance/auto/reviews/usaa/">USAA</a>
                        </span>
                        <p class="value">$363</p>
                    </div>
                    <div class="row"><span>
                            <p class="ranking">2.</p><a class="link" href="/insurance/auto/reviews/geico/">GEICO</a>
                        </span>
                        <p class="value">$474</p>
                    </div>
                    <div class="row"><span>
                            <p class="ranking">3.</p><a class="link" href="/insurance/auto/reviews/allstate/">Allstate</a>
                        </span>
                        <p class="value">$535</p>
                    </div>
                    <div class="css-0">
                        <div class="css-0"></div>
                        <button class="css-15hckgf">See How Much You Can Save on New Insurance</button>
                    </div>
                </div>
                <p class="no_data" hidden>MoneyGeek does not currently have data for your car and driver's selected characteristics</p>
                <button class="css-15hckgf my_btn2">See How Much You Can Save on New Insurance</button>
            </div>
        </div>
    `

/** Parse HTML, CSS and run functions. */
document.head.insertAdjacentHTML('beforeend', style)

const waitForDOM = setInterval(() => {
    if (
        (document.readyState == 'interactive' || document.readyState == 'complete')
        && document.querySelectorAll('.e159ls2j0')[1]
        && document.querySelector('.continue')
    ) {
        clearInterval(waitForDOM)

        document.querySelectorAll('.e159ls2j0')[1].insertAdjacentHTML('afterend', calculator)

        const waitForCompanies = setInterval(() => {
            if (document.querySelector('.calc .e1ssirya0') && document.querySelector('.e1ssirya0')) {
                clearInterval(waitForCompanies)

                runObserver()

                document.querySelector('.calc .e1ssirya0').addEventListener('click', (e) => {
                    if (e.target.matches('.link')) {
                        e.preventDefault()
                        callEvent(e.target.textContent + ' company clicked')
                    }
                })
            }
        }, intervalTimeout)

        const waitForLink = setInterval(() => {
            if (document.querySelector('.my_text a')) {
                clearInterval(waitForLink)

                document.querySelector('.my_text a').addEventListener('click', () => callEvent('Forbes link clicked'))
            }
        }, intervalTimeout)

        const waitForGraph = setInterval(() => {
            if (document.querySelector('.graph')) {
                clearInterval(waitForGraph)

                document.querySelector('.graph').addEventListener('click', (e) => {
                    if (e.target.closest('.graph > div')) {
                        const priceBlock = e.target.closest('.graph > div')

                        document.querySelector(`.${priceBlock.dataset.price}`).click()
                        document.querySelector('.selected_pack').classList.remove('selected_pack')
                        priceBlock.classList.add('selected_pack')
                        callEvent(priceBlock.className + ' rates clicked')
                    }
                })
            }
        }, intervalTimeout)

        const waitForBtn = setInterval(() => {
            if (document.querySelector('.my_btn2') && document.querySelector('.e1ssirya6 .css-15hckgf')) {
                clearInterval(waitForBtn)

                document.querySelector('.my_btn2').addEventListener('click', () => {
                    const waitForEl = setInterval(() => {
                        if (document.querySelector('.e1ssirya6 .css-15hckgf')) {
                            clearInterval(waitForEl)

                            document.querySelector('.e1ssirya6 .css-15hckgf').click()
                            callEvent('See how much you can save CTA clicked')
                        }
                    }, intervalTimeout)
                })
            }
        }, intervalTimeout)
    }
}, intervalTimeout)

const waitForSelects = setInterval(() => {
    if (document.querySelectorAll('.select_wrapper select')[3] && document.querySelector('.my_text h3')) {
        clearInterval(waitForSelects)

        document.querySelectorAll('.select_wrapper select').forEach((select, index) => {
            select.addEventListener('click', () => {
                callEvent(select.name + ' dropdown opened')
            })

            select.addEventListener('change', (e) => {
                if (index !== 3) {
                    simulateSelectEvents(index, e.target.selectedIndex);
                }

                callEvent(select.name + ' dropdown opened ' + select.value + ' selected')
            })
        })
    }
}, intervalTimeout)

callEvent('loaded')

const record2 = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record2)
        clarity('set', `educate_users_` + device.toLowerCase(), 'variant_1')
    }
}, intervalTimeout)