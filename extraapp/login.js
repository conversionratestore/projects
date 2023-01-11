const style = `
    <style>
        .my_banner {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            padding: 15px;
            background: #36F8A3;
            flex-direction: row;
            justify-content: center;
        }

        .my_banner p {
            font-weight: 500;
            font-size: 16px;
            color: #000000;
        }

        .my_txt p:first-child {
            display:none;
        }
    </style>
`

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('utm_source')

let banner = ''

if (product === '25k') {
    banner = `<div class="my_banner"><p>Welcome back to Extra! Earn 25K reward points by completing your application, and start building credit with the Extra Debit Card.*</p></div>`

    const waitForEl = setInterval(() => {
        if (document.querySelector('.disclosure-footer p')) {
            clearInterval(waitForEl)

            document.querySelector('.disclosure-footer p').insertAdjacentHTML('afterend', `<p style="margin-top: 25px;">*Bonus reward points will reflect on your account after 60 active days of membership, and will be rewarded to both membership plans</p>`)
        }
    }, 100)

} else if (product === '0k') {
    banner = `<div class="my_banner"><p>Welcome back to Extra! Complete your application and start building credit with the Extra Debit Card.</p></div>`
}

document.head.insertAdjacentHTML('beforeend', style)

const waitForEl = setInterval(() => {
    if (document.getElementById('__members-area')) {
        clearInterval(waitForEl)

        document.getElementById('__members-area').insertAdjacentHTML('afterbegin', banner)
    }
}, 100)

let device = screen.width <= 768 ? 'Mobile' : 'Desktop'

window.dataLayer = window.dataLayer || []
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Extraapp: Login page test. ' + device,
    'eventAction': 'loaded',
    'eventLabel': ''
})

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', 'login_page_' + device.toLowerCase(), 'variant_1')
    }
}, 100)
