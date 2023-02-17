const intervalTimeout = 100
const device = screen.width <= 768 ? "Mobile" : "Desktop"

const boxSVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_1549)">
<path d="M9.71709 0.0645996L0.76127 4.38811C0.648965 4.44233 0.577637 4.55601 0.577637 4.68069V15.3193C0.577637 15.444 0.649004 15.5576 0.76127 15.6119L9.71709 19.9354C9.89557 20.0216 10.1036 20.0216 10.2821 19.9354L19.2379 15.6119C19.3502 15.5576 19.4215 15.444 19.4215 15.3193V4.68069C19.4215 4.55601 19.3502 4.44233 19.2379 4.38811L10.2821 0.0645996C10.1036 -0.0215332 9.89557 -0.0215332 9.71709 0.0645996Z" fill="#FFE17D"/>
<path d="M0.63166 4.50269C0.59752 4.55468 0.577637 4.61589 0.577637 4.68054V15.3191C0.577637 15.4438 0.649004 15.5575 0.76127 15.6117L9.71709 19.9352C9.80631 19.9783 9.90295 19.9998 9.99959 19.9998V9.02515L0.63166 4.50269Z" fill="#FFC350"/>
<path d="M19.3679 4.50293C19.4021 4.55492 19.422 4.61613 19.422 4.68078V15.3194C19.422 15.4441 19.3506 15.5577 19.2383 15.612L10.2825 19.9354C10.1933 19.9785 10.0966 20.0001 10 20.0001V9.02539L19.3679 4.50293Z" fill="#FFD164"/>
<path d="M3.25859 14.7523C3.21133 14.7523 3.16308 14.7419 3.11773 14.72L1.73504 14.0525C1.57324 13.9744 1.50566 13.7802 1.58371 13.6187C1.66144 13.4573 1.85625 13.39 2.01742 13.4674L3.40011 14.135C3.56191 14.213 3.62949 14.4072 3.55144 14.5687C3.49562 14.6848 3.37949 14.7523 3.25859 14.7523Z" fill="#FFE17D"/>
<path d="M4.53074 13.9237C4.48348 13.9237 4.43524 13.9132 4.38988 13.8914L1.73645 12.6105C1.57496 12.5325 1.50707 12.3383 1.58512 12.1768C1.66285 12.0156 1.85797 11.948 2.01883 12.0255L4.67223 13.3063C4.83371 13.3844 4.9016 13.5786 4.82356 13.74C4.76778 13.8561 4.65164 13.9237 4.53074 13.9237Z" fill="#FFF6D8"/>
<path d="M16.1939 6.03029L6.79307 1.48877L4.31494 2.68994L13.7369 7.2385L16.1939 6.03029Z" fill="#FF8087"/>
<path d="M13.7368 7.23844V10.7621C13.7368 10.8819 13.862 10.9605 13.9699 10.9084L16.0102 9.92348C16.1225 9.86926 16.1938 9.75559 16.1938 9.6309V6.03027L13.7368 7.23844Z" fill="#E6646E"/>
</g>
<defs>
<clipPath id="clip0_4_1549">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`
const style =  /*html*/`
    <style>
        .select_wrapper {
            display: flex;
            flex-direction: column;
        }

        #country_select {
            font-weight: 700;
            max-width: 297px;
        }

        label.shipping,
        .est_delivery {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.115em;
            text-transform: uppercase;
            color: #000000;
            margin-right: 12px !important;
        }

        .est_delivery {
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .est_date {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;
            color: #000000;
        }

        .delivery_wrapper {
            margin: 17px 0 22px;
        }

        .delivery_wrapper p {
            margin: 0;
        }

        .delivery_wrapper > div {
            display: flex;
            flex-direction: row;
            align-items:center;
        }

        .delivery_wrapper .box {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #000000;
            border-radius: 100px;
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }

        .delivery_wrapper .box svg {
            margin-right: 6px;
        }

        @media screen and (max-width: 768px) {
            #country_select {
                max-width: inherit;
            }
        }
    </style>
`

const countries = [
    'Austria',
    'Australia',
    'Canada',
    'Germany',
    'Switzerland',
    'Netherlands',
    'United Kingdom',
    'United States',
    'Other countries'
]

const myHTML = /*html*/`
    <div class="select_wrapper" data-obj="Ship to">
        <label class="shipping" for="country_select">Ship to</label>
        <select name="" id="country_select">
            ${countries.map(country => `<option value="${country}">${country}</option>`).join('')}
        </select>
    </div>
    <div class="delivery_wrapper" data-obj="Est. delivery">
        <p class="box">${boxSVG} Free Shipping</p>
        <div>
            <p class="est_delivery">Est. delivery</p>
            <p class="est_date"></p>            
        </div>
    </div>
`
let daysDelay = {
    'United Kingdom': [14, 19],
    'United States': [13, 18],
    'Australia': [18, 23],
    'Canada': [15, 20],
    'Germany': [13, 18],
    'Switzerland': [14, 19],
    'Netherlands': [13, 18],
    'Austria': [12, 17],
    'Other countries': [20, null]
}

if (window.location.pathname.includes('products/the-hyrule-3d-map')) {
    daysDelay = {
        'United States': [8, null],
        'Australia': [13, null],
        'Canada': [10, null],
        'Germany': [8, null],
        'United Kingdom': [9, null],
        'Switzerland': [9, null],
        'Netherlands': [8, null],
        'Austria': [7, null],
        'Other countries': [20, null]
    }
}

function addDays(frDay, lstDay) {
    let result = []

    // console.log(lstDay);

    for (let i = 0; i < arguments.length; i++) {
        let date = new Date()
        date.setDate(date.getDate() + arguments[i]);
        let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
        let dayNumber = date.getDate()

        result.push([dayNumber + ' ' + month])
    }

    if (lstDay !== null) {
        return `${result[0]} - ${result[1]}`
    } else {
        return `up to ${result[0]}`
    }
}

const selectUserCountry = (userCountry) => {
    let includes = false

    // console.log(`%c ${userCountry}`, 'color: green');

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        // console.log(country);

        if (includes) {
            break
        }

        if (country.includes(userCountry)) {
            document.getElementById('country_select').value = country
            includes = true

            // console.log(daysDelay[country][0]);
            // console.log(daysDelay[country][1]);

            document.querySelector('.est_date').innerText = addDays(daysDelay[country][0], daysDelay[country][1])
        }
    }
}

async function getCountry() {
    const request = await fetch("https://ipinfo.io/json?token=2349ea2a7a9d08")
    const jsonResponse = await request.json()

    // console.log(jsonResponse.country);
    switch (jsonResponse.country) {
        case 'AT':
            country = 'Austria'
            break;
        case 'AU':
            country = 'Australia'
            break;
        case 'CA':
            country = 'Canada'
            break;
        case 'DE':
            country = 'Germany'
            break;
        case 'CH':
            country = 'Switzerland'
            break;
        case 'NL':
            country = 'Netherlands'
            break;
        case 'US':
            country = 'United States'
            break;
        case 'GB':
            country = 'United Kingdom'
            break;
        default:
            country = 'Other countries'
            break;
    }

    selectUserCountry(country)
}

const checkVisibilityAfterMs = (el, ms = 2000) => {
    let timer;

    const config = {
        root: null,
        threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                timer = setTimeout(() => {
                    sendEvent(`Visibility - ${el.dataset.obj}`)
                }, ms);
            } else {
                clearTimeout(timer);
            }
        });
    }, config);

    observer.observe(el);
}

const sendEvent = (eventAction, eventLabel = '') => { // GO Event
    const obj = {
        event: "event-to-ga",
        eventCategory: "Exp: Delivery time. " + device,
        eventAction,
        eventLabel,
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(obj)
    console.log(obj);
}

document.head.insertAdjacentHTML('beforeend', style)

const waitForPayment = setInterval(() => {
    if (document.querySelector('.payment-buttons')) {
        clearInterval(waitForPayment)

        document.querySelector('.payment-buttons').insertAdjacentHTML('beforebegin', myHTML)
    }
}, intervalTimeout)

const waitForSelect = setInterval(() => {
    if (document.getElementById('country_select') && document.querySelector('.est_date')) {
        clearInterval(waitForSelect)

        // selectUserCountry()
        getCountry()
        checkVisibilityAfterMs(document.querySelector('.select_wrapper'))
        checkVisibilityAfterMs(document.querySelector('.delivery_wrapper'))

        document.getElementById('country_select').addEventListener('click', function (e) {
            if (e.offsetY > 0) {
                sendEvent('Click on dropdown list - Ship to')
            }
        })

        document.getElementById('country_select').addEventListener('change', function () {
            sendEvent('change country on', this.value)

            document.querySelector('.est_date').innerText = addDays(daysDelay[this.value][0], daysDelay[this.value][1])
        })
    }
}, intervalTimeout)

sendEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `delivery_time${device.toLowerCase()}`, 'variant_1')
    }
}, intervalTimeout)
