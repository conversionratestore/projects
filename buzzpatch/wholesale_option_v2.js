let styles = `
<style>
    .btns_head {
        display: flex;
        border: 1px solid #FF3C81;
        border-radius: 100px;
        max-width: 265px;
    }
    .btns_head input, .btns_head a, .bitepatch-template header nav .btns_head .js-btn.btn-primary {
        font-family: 'DINEngschrift LT';
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        text-transform: uppercase;
        text-align: center;
        padding: 4px 13px;
        white-space: nowrap;
        margin: 0;
        border-radius: 0;
     }
     .bitepatch-template header nav .btns_head .js-btn.btn-primary {
        width: 124px;
        border-radius: 0 100px 100px 0;
     }
    .btns_head input.a-link {
        background: #FFFFFF;
        color: #FF3C81;
        width: 143px;
        border-radius: 100px 0 0 100px;
        transition: all 0.25s ease;
    }
    .btns_head input.a-link.active, .btns_head input.a-link.active:hover  {
        background: rgba(254, 194, 212, 0.95);
        color: #0D0B0B;
        box-shadow: none;
        border-color: transparent;
    }
    .btns_head input.a-link:hover, .btns_head input.a-link:hover  {
        background: #FEC2D4;
        color: #FF3C81;
        box-shadow: none;
        border-color: transparent;
    }
    .btn_become_reseller {
        background: rgba(255, 255, 255, 0.95);
        border: 2px solid #FEC2D4;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
        border-radius: 70px;
        font-family: 'DINEngschrift LT';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        text-transform: uppercase;
        color: #FF3C81;
        width: 100%;
        max-width: 331px;
        margin: 15px auto;
        transition: all 0.2s ease;
        padding: 12px;
    }
    .btn_become_reseller.active, .btn_become_reseller.active:hover {
        background-color: rgba(254, 194, 212, 0.95)!important;
        border: 2px solid #FEC2D4!important;
        box-shadow: none!important;
        color: #0D0B0B!important;
    }
    .btn_become_reseller:hover {
        background-color: #FEC2D4!important;
        border: 2px solid #FEC2D4!important;
        color: #FF3C81!important;
        box-shadow: none!important;
    }
    .footer-nav ul {
        margin-right: 17px;
    }

    #mainContent > div.icartShopifyCartContent > div > header > nav > div > div.row.no-gutters  {
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }

    #mainContent > div.icartShopifyCartContent > div > header > nav > div > div.row.no-gutters > div {
        width: auto!important;
        flex: 0!important;
        max-width: none!important;
    }
    @media only screen and (min-width: 768px) {
        #mainContent > div.icartShopifyCartContent > div > header > nav > div > div.row.no-gutters > div.col-lg-9 {
            margin: 0 auto!important;
            display: flex;
        }
    }
    @media only screen and (min-width: 992px) {
        .navbar-expand-lg .navbar-nav .nav-link {
            padding: 0 2px!important;
            white-space: nowrap;
        }
    }

    @media only screen and (min-width: 1265px) {
        .navbar-expand-lg .navbar-nav .nav-link {
            font-size: 20px;
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        #mainContent > div.icartShopifyCartContent > div > header > nav > div > div > div.col-lg-9.col-sm-5.col-xs-5 {
            display: none;
        }
    }
    @media (max-width: 1128px) {
        header .navbar-nav li {
            padding: 0 3px;
        }
        header .navbar.fixed-top {
            padding: 10px 0%;
        }
    }
    @media only screen and (max-width: 365px) {
        .btns_head input.a-link, .bitepatch-template header nav .btns_head .js-btn.btn-primary {
            width: auto;
            font-size: 16px;
        }
    }

</style>`

let htmlBtn = (className) => `<input type="button" class="a-link nav-link ${className}" value="Become a reseller" onclick="clickOnBecomeReseller(this)" />`

let btnGetNowInHeader = window.matchMedia(`(max-width: 768px)`).matches ? '.icartShopifyCartContent > div > header > nav > div > div > div.col-lg-9.col-sm-5.col-xs-5 > a[href="#getNow"]' : '.icartShopifyCartContent > div > header > nav > div > div > div.col-lg-2.col-sm-3.col-xs-3.no-mob > a';

function clickOnBecomeReseller(target) {
    target.classList.add('active')
    window.location.href = '/pages/retail2023v1';
}

//push dataLayer
function pushDataLayer(action, label = '') {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Wholesale option',
        'eventAction': action,
        'eventLabel': label
    });
}

//comes into view
function isScrolledIntoView(el) {
    let rect = document.querySelector(el).getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight) ;

    return isVisible;
}
let viewedHeader = false;
let viewedFooter = false;

let start = setInterval(() => {
    if (document.querySelector(btnGetNowInHeader) != null && document.querySelector('footer a.js-logo') != null) {
        clearInterval(start)
        document.body.insertAdjacentHTML('afterbegin', styles)

        document.querySelector(btnGetNowInHeader).insertAdjacentHTML('afterend',`<div class="btns_head">${htmlBtn('')}</div>`)

        document.querySelector('.btns_head input').after(document.querySelector(btnGetNowInHeader))

        if (window.matchMedia(`(max-width: 992px)`).matches) {
            document.querySelector('footer a.navbar-brand.js-logo').insertAdjacentHTML('afterend', htmlBtn('btn_become_reseller'))
        } else {
            document.querySelector('footer > div').insertAdjacentHTML('afterbegin', htmlBtn('btn_become_reseller'))
        }

        //events
        document.querySelector('.btns_head input').addEventListener('click', () => {
            pushDataLayer('Click on Become a reseller button', 'Header')
        })
        document.querySelector('.btn_become_reseller').addEventListener('click', () => {
            pushDataLayer('Click on Become a reseller button', 'Footer')
        })

        function isBtn() {
            if (isScrolledIntoView('.btns_head input') == true && viewed1 == false || sScrolledIntoView('.btn_become_reseller') == true && viewed2 == false) {
                setTimeout(() => {
                    if (isScrolledIntoView('.btns_head input') == true && viewed1 == false) {
                        viewed1 = true;
                        pushDataLayer('Visibility on Become a reseller button', `Header`);
                    }
                    if (isScrolledIntoView('.btn_become_reseller') == true && viewed2 == false) {
                        viewed2 = true;
                        pushDataLayer('Visibility on Become a reseller button', `Footer`);
                    }
                }, 2000)
            }
        }
        isBtn()
        window.addEventListener('scroll', (e) => isBtn())
       
        pushDataLayer('loaded')

    }
})

const isClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(isClarity)
        clarity('set', `exp_wholesale_option`, 'variant_1')
    }
}, 100)
