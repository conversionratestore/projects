let dir = 'https://conversionratestore.github.io/projects/zewood/img/'

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

let style = `
<style class="js-style">
    .needsclick:not(.bottom) {
        transition: none!important;
    }
    .needsclick.kl-teaser-RCtjPB.kl-private-reset-css-Xuajs1 {
        opacity: 0;
        pointer-events: none;
        width: 0!important;
        height: 0!important;
    }
    .gifts-image {
        width: 100%;
        background: #FFE7A9;
        height: 180px;
        margin-bottom: 24px;
    }
    form.needsclick.klaviyo-form {
        padding: 0!important;
        width: 345px!important;
    }
    .needsclick.klaviyo-close-form {
        margin-top: 16px!important;
        margin-right: 16px!important;
    }
    form.needsclick.klaviyo-form > div > div:nth-child(2){
        display: none!important;
    }
    .btn-reveal-discount  {
        color: #fff;
    }
    #ele_sE4nXZrhG0x > p > span {
        letter-spacing: 0.5px;
        font-weight: 700;
        line-height: 32px;
        text-transform: uppercase;    
    }
    form.needsclick.klaviyo-form > div > [data-testid="form-row"] {
        padding: 0 24px;
    }
    form.needsclick.klaviyo-form > div > div:nth-child(4) > div {
        padding: 8px 0 14px!important;
    }
    .kl-private-reset-css-Xuajs1 label {
        font-size: 12px;
        margin-bottom: 6px!important;
    }
    form.needsclick.klaviyo-form [name="email"] {
        border-color: #E8E8E1!important;
        height: 44px!important;
        margin-bottom: 6px;
    }
    form.needsclick.klaviyo-form  div > div:nth-child(6) > div > button, form.needsclick.klaviyo-form .btn-continue {
        background: #CE1E1E!important;
        border-color: #CE1E1E!important;
        font-weight: 500!important;
        font-size: 16px!important;
        line-height: 22px!important;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        height: 50px!important;
        border-radius: 0!important;
    }
    form.needsclick.klaviyo-form .btn-continue {
        color: #FFFFFF;
        padding: 14px;
        width: calc(100% - 48px);
        margin: 0 auto 24px;
    }
    form.needsclick.klaviyo-form div > div:nth-child(6) > div > button svg {
        margin-right: 10px;
    }
    form.needsclick.klaviyo-form > div > div:nth-child(7) > div > button {
        padding: 4px 0 0!important;
        line-height: 24px!important;
        border-bottom: 1px solid #000!important;
        width: fit-content!important;
        margin: 0 auto 14px;
        display: block;
    }
    form.needsclick.klaviyo-form div > div:nth-child(3) > div > div > div:nth-child(2) > svg:first-child, form.needsclick.klaviyo-form svg.needsclick {
        display: none!important;
    }
    form.needsclick.klaviyo-form .title-bold {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 8px;
        display: block;
    }
    form.needsclick.klaviyo-form .text-normal {
        font-size: 17px;
        line-height: 24px;
        letter-spacing: 0.5px;
    }
    .fw-bold {
        font-weight: 700;
    }
    .c-red {
        color: #CE1E1E;
    }
    form.needsclick.klaviyo-form div > div:nth-child(3) > div > div > p {
        margin: -10px -6px 4px!important;
        width: calc(100% + 12px);
    }
    form.needsclick.klaviyo-form div > div:nth-child(4) > div > div > div:nth-child(2) {
        background: #E8E8E0!important;
        border: 1px dashed #000000!important;
    }
    form.needsclick.klaviyo-form div > div:nth-child(4) > div > div > div:nth-child(2) > div {
        font-family: 'Montserrat', sans-serif!important;
        font-style: normal;
        font-weight: 500!important;
        font-size: 20px!important;
        line-height: 22px;
        letter-spacing: 2.6px!important;
        text-transform: uppercase;
        flex: initial!important;
    }
    form.needsclick.klaviyo-form > div > div:nth-child(4) > div > div > div:nth-child(2) > svg {
        margin-left: 15px;
    }
    form.needsclick.klaviyo-form .text-bottom {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.5px;
        padding: 0 24px 4px;
        margin-top: -2px;
    }
    .btn-coupon {
        padding: 8px 12px;
        display: flex;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #000000;
        margin: 10px 0 15px;
        width: 100%;
        text-align: left;
        text-transform: uppercase;
        cursor: pointer;
    }
    .main-content .btn-coupon {
        letter-spacing: 2px;
    }
    .main-content .btn-coupon svg {
        margin: 0 10px 0 auto;
    }
    .btn-coupon * {
        pointer-events: none;
    }
    .btn-coupon-access {
        background: #FFE7A9;
    }
    .btn-coupon-applied {
        background: #E8E8E0;
    }
    .btn-coupon img {
        margin-right: 12px;
        flex-shrink: 0;x
    }
    .btn-coupon svg {
        margin: 0 5px 0 20px;
    }
    .drawer__footer {
        padding-top: 12px;
        height: auto!important;
        background: #fff;
    }
    .drawer__footer .btn-coupon  {
        margin: 0 0 20px 0;
    }
    .text-nowrap {
        white-space: nowrap;
    }
    @media (max-width: 350px) {
        form.needsclick.klaviyo-form {
            width: 300px!important;
        }
        form.needsclick.klaviyo-form [data-testid="form-row"] {
            padding: 0 12px;
        }
    }

    @media (min-width: 768px) {
        .drawer--has-fixed-footer .drawer__inner {
            bottom: 0!important;
            padding-bottom: 215px;
        }
        .main-content .btn-coupon {
            width: fit-content;
            margin-bottom: 20px;
        }
        .main-content .btn-coupon svg {
            margin-right: 3px;
            margin-left: 13px;
        }
        .drawer__cart .btn-coupon svg {
            margin-left: auto;
        }
        .product-section > div > div > div > div:nth-child(2) > div > div:nth-child(4) > hr {
            display: none;
        }
        form.needsclick.klaviyo-form > div {
            padding: 0!important;
        }
        .gifts-image {
            display: none;
        }
        form.needsclick.klaviyo-form > div:nth-child(2) {
            background-color: #FFE7A9;
            background-image: url("${dir}gifts-desk.png")!important;
            margin: 0!important;
            min-height: 424px!important;
            display: block!important;
        }
        form.needsclick.klaviyo-form {
            width: 700px!important;
            min-heigth: 424px;
            border-radius: 12px!important;
        }
        form.needsclick.klaviyo-form > div > [data-testid="form-row"] {
            padding: 0 52px;
        }
        form.needsclick.klaviyo-form > div > div:nth-child(4) > div {
            padding-bottom: 30px!important;
        }
        form.needsclick.klaviyo-form > div > div:nth-child(7) > div > button {
            padding-bottom: 0!important;
            border-color: #E3E3E3!important;
        }
        form.needsclick.klaviyo-form .btn-continue {
            width: calc(100% - 104px);
            margin: 0 auto;
        }
        form.needsclick.klaviyo-form .text-bottom {
            padding: 0 45px;
            margin-bottom: 16px;
            margin-top: -22px;
        }
        form.needsclick.klaviyo-form div > div:nth-child(3) > div > div > p {
            margin-bottom: 22px!important;
        }
    }
</style>`

let device = detectMob() == true ? 'mobile' : 'desktop';

function pushDataLayer(action, label = '') {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': `Exp: First order discount (${device})`,
        'eventAction': action,
        'eventLabel': label
    });
}

let stateUrl = window.location.href;

//buttons HTML (PDP)
let accessBonus = `
<button type="button" class="btn-coupon btn-coupon-access">
    <img src="${dir}coupon.svg" alt="coupon icon">
    <span>Access <span class="text-nowrap">bonus discount</span></span>
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64657 6L0 1.13389L1.2707 0L7 6L1.2707 12L0 10.8661L4.64657 6Z" fill="black"/>
    </svg>
</button>
`

let appliedBonus = `
<div class="btn-coupon btn-coupon-applied">
    <img src="${dir}coupon.svg" alt="coupon icon">
    <span>5% Bonus discount ${window.innerWidth > 768 ? '' : '<br>'} <span class="text-nowrap">applied at checkout</span></span>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#3DB39E"/>
        <path d="M4.5 8.95159L7.66216 12.0855L13.5 6.2998" stroke="white" stroke-width="2"/>
    </svg>
</div>
`

let viewed1 = false;
let viewed11 = false;

//comes into view
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}

function setCouponBtn(selector, klaviyoOnsite, insert = 'afterend', ) {
    let viewedForms = JSON.parse(localStorage.getItem(klaviyoOnsite));


    if (Object.keys(viewedForms["viewedForms"]["modal"]["disabledForms"]).length > 0 && viewedForms["viewedForms"]["modal"]["disabledForms"]["RCtjPB"]["successActionTypes"] != undefined  && viewedForms["viewedForms"]["modal"]["disabledForms"]["RCtjPB"]["successActionTypes"][0] == 'SUBMIT_TO_LIST_AND_TRANSITION_VIEW') {
        document.querySelector(selector).insertAdjacentHTML(insert, appliedBonus)
    } else {
        document.querySelector(selector).insertAdjacentHTML(insert, accessBonus)
    }
}
let isVisibilityPop = false;
let isVisibilityPopOne = false;
let isVisibilityPopTwo = false;
let clickOnNoThanksBtn = false;
let clickOnContinueBtn = false;

let clickOnClose = false;

function start() {
    if (document.querySelector('.js-style') == null) {
        document.body.insertAdjacentHTML('afterbegin', style)
    }
    let isModal = setInterval(() => {
        if (document.querySelector('[aria-label="POPUP Form"] form.needsclick.klaviyo-form.klaviyo-form-version-cid_1.kl-private-reset-css-Xuajs1') != null) {
            let form = document.querySelector('[aria-label="POPUP Form"] form.needsclick.klaviyo-form.klaviyo-form-version-cid_1.kl-private-reset-css-Xuajs1');

            let parent = form.closest('[aria-label="POPUP Form"]').parentElement;
            if (document.querySelector('.gifts-image') == null) {
                form.firstChild.insertAdjacentHTML('afterbegin',`<img src="${dir}gifts.png" alt="gifts image" class="gifts-image">`);    
            }

            if (parent.style.display != 'none') {
                if (document.querySelector('button.needsclick.go3894874857.kl-private-reset-css-Xuajs1') != null && form.querySelector('[name="email"]') != null) {
                    
                    if (form.querySelector('div > div:nth-child(6) > div > button svg') == null) {
                        form.querySelector('#ele_sE4nXZrhG0x > p > span').innerHTML = 'Unlock your bonus discount!';
                        form.querySelector('[name="email"]').insertAdjacentHTML('beforebegin', `<label>Enter your email</label>`)
                        form.querySelector('[name="email"]').placeholder = '';

                        form.querySelector('div > div:nth-child(6) > div > button').style = 'display: none!important'
                            form.querySelector('div > div:nth-child(6) > div > button').insertAdjacentHTML('beforebegin',`<button type="button" class="btn-reveal-discount "><svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5754 8.33427L17.2228 7.47801C18.0734 6.77516 18.4366 5.66033 18.1762 4.60096C17.6645 2.51957 15.1267 1.72944 13.5234 3.1468L11.8991 4.58268L11.5778 2.42924C11.2601 0.309132 8.80554 -0.710868 7.07881 0.552413C6.21542 1.18405 5.75613 2.27291 5.95981 3.37851L3.74178 2.57123C2.65053 2.17396 1.43932 2.73871 1.04206 3.8301L0.0815885 6.46902C-0.0510208 6.83338 0.136854 7.23632 0.50126 7.36888C0.649057 7.42265 11.3173 11.3056 11.4739 11.3626C11.0299 11.3626 1.30662 11.3626 0.878839 11.3626C0.491089 11.3626 0.176745 11.6769 0.176745 12.0647V21.8938C0.176745 23.0552 1.1216 24 2.28298 24H7.89964H10.708H16.3246C17.486 24 18.4309 23.0552 18.4309 21.8938V13.8947L18.974 14.0924C19.3367 14.2245 19.7406 14.0387 19.8739 13.6728L20.8344 11.0339C21.2315 9.94251 20.6668 8.73149 19.5754 8.33427ZM7.19749 22.5959H2.28293C1.89579 22.5959 1.58084 22.2809 1.58084 21.8938V12.7668H7.19749V22.5959ZM10.0058 22.5959H8.60168V12.7668H10.0058V22.5959ZM14.4534 4.19887C15.2678 3.47882 16.5536 3.88274 16.8126 4.93626C17.0889 6.05952 16.0032 7.03349 14.9165 6.63862C13.9922 6.30219 13.5591 6.14455 12.6335 5.80766L14.4534 4.19887ZM7.90784 1.68576C8.78534 1.04385 10.0283 1.56473 10.1892 2.63746L10.5492 5.04894C10.29 4.95463 8.52125 4.3108 8.26639 4.21808C7.17964 3.82232 6.97437 2.36854 7.90784 1.68576ZM8.23859 8.69076L1.64121 6.28949L2.36159 4.31034C2.49401 3.94654 2.89774 3.75838 3.26149 3.89071C3.99978 4.1594 8.97139 5.96891 9.19906 6.05179L8.23859 8.69076ZM10.8776 9.65132L9.55807 9.17104L10.5186 6.53212L11.8381 7.0124L10.8776 9.65132ZM17.0266 21.8938C17.0266 22.2809 16.7117 22.5959 16.3245 22.5959H11.41V12.7668H15.3319L17.0267 13.3836V21.8938H17.0266ZM19.5147 10.5536L18.7944 12.5328L12.197 10.1315L13.1576 7.49259L19.0952 9.65366C19.459 9.78609 19.6472 10.1898 19.5147 10.5536Z" fill="white"/>
                        </svg> Reveal Discount </button>`)
                        
                        document.querySelector('.btn-reveal-discount').addEventListener('click', () => {
                            form.querySelector('div > div:nth-child(6) > div > button').click()
                        })

                        document.querySelector('form.needsclick.klaviyo-form div > div:nth-child(6) > div > button').addEventListener('click', () => {
                            pushDataLayer('Click on Reveal discount button','Unlock your bonus discount');
                            start()
                        })
                    
                        form.querySelector('[name="email"]').addEventListener('click', () => {
                            pushDataLayer('Click on Enter your email input','Unlock your bonus discount');
                        })
                        document.querySelector('form.needsclick.klaviyo-form > div:nth-child(1) > div:nth-child(7) > div > button').addEventListener('click', (e) => {
                            e.stopImmediatePropagation()

                            pushDataLayer('Click on No thanks button','Unlock your bonus discount');
                            clickOnNoThanksBtn = true;
                        })
                    } 
                    if (isVisibilityPopOne == false) {
                        isVisibilityPopOne = true;
                        pushDataLayer('Visibility pop up','Unlock your bonus discount');
                    }

                  
                } 

                if (form.querySelector('div > div:nth-child(4) > div > div > div:nth-child(2) > div') != null && form.querySelector('div > div:nth-child(4) > div > div > div:nth-child(2) > div').innerHTML.includes('LETSSTART')) {
                    if (form.querySelector('div > div:nth-child(3) > div > div > p .title-bold') == null) {
                        form.querySelector('div > div:nth-child(3) > div > div > p').innerHTML = `
                        <span class="title-bold fw-bold">Congratulations!</span> 
                        <span class="text-normal">
                            You' ve unlocked a <span class="fw-bold c-red">5% OFF</span> bonus discount for your first order
                        </span>`;
        
                        form.querySelector(' div > div:nth-child(4) > div > div > div:nth-child(2) > div').insertAdjacentHTML('afterend', `
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4449 4.19727H2.28782C1.24092 4.19727 0.390625 5.04756 0.390625 6.09446V22.1026C0.390625 23.1495 1.24092 23.9998 2.28782 23.9998H13.4449C14.4918 23.9998 15.3421 23.1495 15.3421 22.1026V6.09446C15.3372 5.04756 14.4869 4.19727 13.4449 4.19727ZM14.0101 22.0977C14.0101 22.4123 13.7545 22.6679 13.44 22.6679H2.2829C1.96834 22.6679 1.71276 22.4123 1.71276 22.0977V6.09446C1.71276 5.7799 1.96834 5.52432 2.2829 5.52432H13.44C13.7545 5.52432 14.0101 5.7799 14.0101 6.09446V22.0977Z" fill="black"/>
                            <path d="M17.7105 0H6.55344C5.50655 0 4.65625 0.850297 4.65625 1.89719C4.65625 2.26582 4.95115 2.56072 5.31978 2.56072C5.6884 2.56072 5.9833 2.26582 5.9833 1.89719C5.9833 1.58263 6.23888 1.32705 6.55344 1.32705H17.7105C18.0251 1.32705 18.2807 1.58263 18.2807 1.89719V17.9054C18.2807 18.2199 18.0251 18.4755 17.7105 18.4755C17.3419 18.4755 17.047 18.7704 17.047 19.1391C17.047 19.5077 17.3419 19.8026 17.7105 19.8026C18.7574 19.8026 19.6077 18.9523 19.6077 17.9054V1.89719C19.6077 0.850297 18.7574 0 17.7105 0Z" fill="black"/>
                        </svg>`)
        
                        form.firstChild.insertAdjacentHTML('beforeend', '<p class="text-bottom">Use the above discount code<br> at checkout</p><button type="button" class="btn-continue">Continue Shopping</button>')
                        
                        document.querySelector('.btn-continue').addEventListener('click', (e) => {
                            clickOnContinueBtn = true;
                            pushDataLayer('Click on Continue button','Congratulations')
                            document.querySelector('.klaviyo-close-form').click()
                        })

                        document.addEventListener('click', (e) => {
                            e.stopImmediatePropagation();
                            if (e.target.closest('[data-testid="form-component"]') && e.target.closest('[data-testid="form-component"]').querySelector('div > div:nth-child(2) > div') != null && e.target.closest('[data-testid="form-component"]').querySelector('div > div:nth-child(2) > div').innerHTML == 'LETSSTART') {
                                pushDataLayer('Click on discount code','Congratulations')
                            }
                        })
                    }
                    if (isVisibilityPopTwo == false) {
                        isVisibilityPopTwo = true;
                        pushDataLayer('Visibility pop up','Congratulations')
                    }
    
                }
            } else {
                if (clickOnNoThanksBtn != true && isVisibilityPopOne == true) {
                    pushDataLayer('Close Unlock your bonus discount pop up','Unlock your bonus discount')
                    isVisibilityPopOne = false;
                }
            }
        } else {
            if (localStorage.getItem('klaviyoOnsite') != null ) {
                let viewedForms = JSON.parse(localStorage.getItem('klaviyoOnsite'));
                if (Object.keys(viewedForms["viewedForms"]["modal"]["disabledForms"]).length > 0 && viewedForms["viewedForms"]["modal"]["disabledForms"]["RCtjPB"]["successActionTypes"] != undefined  && viewedForms["viewedForms"]["modal"]["disabledForms"]["RCtjPB"]["successActionTypes"][0] == 'SUBMIT_TO_LIST_AND_TRANSITION_VIEW') {
                    if (isVisibilityPopTwo == true) {
                        if (clickOnContinueBtn != true) {
                            pushDataLayer( 'Close Congratulations pop up','Congratulations');
                        }
                        isVisibilityPopTwo = false;

                        if (document.querySelector('.product-single__meta .btn-coupon') != null) {
                            document.querySelector('.product-single__meta .btn-coupon').remove();

                            if (document.querySelector('.drawer__footer .btn-coupon') != null) {
                                document.querySelector('.drawer__footer .btn-coupon').remove();
                            }
                            start()
                        }
                    }
                }
            }
        }
    })

    let isPDP = setInterval(() => {
        if ((stateUrl.includes('/collections/') || stateUrl.includes('/products/')) && document.querySelector('.product-single__form') != null && document.querySelector('.product-single__meta .btn-coupon') == null && document.querySelector('.product__price.on-sale') != null && localStorage.getItem('klaviyoOnsite') != null) {
            clearInterval(isPDP)
            setCouponBtn('.product__price.on-sale', 'klaviyoOnsite')
            document.querySelector('[name="add"]').addEventListener('click', () => {
                if (document.querySelector('.cart .btn-coupon') != null) {
                    document.querySelector('.cart .btn-coupon').remove()
                }
            })

            if (document.querySelector('.product-single__meta .btn-coupon-access') != null) {
                document.querySelector('.product-single__meta .btn-coupon-access').addEventListener('click', (e) => {
                    document.querySelector('.needsclick.kl-teaser-RCtjPB.kl-private-reset-css-Xuajs1').click();
                    
                    pushDataLayer('Click on Access bonus discount block','PDP') 
                    
                    clickOnNoThanksBtn = false;
                    isVisibilityPopOne = false;
                    clickOnContinueBtn = false;
                    start()
                    
                })
            }

            function isVisible() {
                if (document.querySelector('.product-single__meta .btn-coupon-access') != null && isScrolledIntoView(document.querySelector('.product-single__meta .btn-coupon-access')) == true && viewed1 == false) {
                    viewed1 = true;
                    pushDataLayer('Visibility Access bonus discount block','PDP')
                }
                if (document.querySelector('.product-single__meta .btn-coupon-applied') != null && isScrolledIntoView(document.querySelector('.product-single__meta .btn-coupon-applied')) == true && viewed11 == false) {
                    viewed11 = true;
                    pushDataLayer('Visibility 5% Bonus discount applied','PDP')
                }
            }
            isVisible()
            window.addEventListener('scroll', () => isVisible())
        }
    })

    let isCart = setInterval(() => {
        if (document.querySelector('.drawer--is-open') != null &&  document.querySelector('.cart .btn-coupon') == null && document.querySelector('.drawer__footer') != null && localStorage.getItem('klaviyoOnsite') != null) {
            
            setCouponBtn(`.drawer__footer`, 'klaviyoOnsite', 'afterbegin')

            if (document.querySelector('.drawer__footer .btn-coupon-access') != null) {
                document.querySelector('.drawer__footer .btn-coupon-access').addEventListener('click', (e) => {
                    document.querySelector('#CartDrawer .drawer__close-button').click()
                    document.querySelector('.needsclick.kl-teaser-RCtjPB.kl-private-reset-css-Xuajs1').click();
                    pushDataLayer('Click on Access bonus discount block','Cart')
                    clickOnNoThanksBtn = false;
                    isVisibilityPopOne = false;
                    start()
                })
            }

            if (document.querySelector('.drawer__footer .btn-coupon-access') != null) {
                pushDataLayer('Visibility Access bonus discount block','Cart')
            }
            
            if (document.querySelector('.drawer__footer .btn-coupon-applied') != null) {
                pushDataLayer('Visibility 5% Bonus discount applied','Cart')
            }
        } 
    })

    if (detectMob() == false) {
        let isExitIntentPop = setInterval(() => {
            if (sessionStorage.getItem('isVisible') == null && isVisibilityPopOne == true && sessionStorage.getItem('exit_popup_loaded') != null && sessionStorage.getItem('exit_popup_loaded') == 'true' && document.querySelector('.overlay_popup').classList.contains('is_hidden') && document.querySelector('.main-content .btn-coupon-access') != null) {
            
                if (document.querySelector('#CartDrawer.drawer--is-open') != null && document.querySelector('#CartDrawer .drawer__close-button') != null) {
                    document.querySelector('#CartDrawer .drawer__close-button').click()
                }
                if (document.querySelector('[aria-label="POPUP Form"] .klaviyo-close-form') != null) {
                    
                    console.log('1')
                    if (clickOnClose == false) {
                        clickOnClose = true;
                        document.querySelector('[aria-label="POPUP Form"] .klaviyo-close-form').click()
                    }
                    setTimeout(() => {
                        if (document.querySelector('.needsclick.kl-teaser-RCtjPB.undefined.kl-private-reset-css-Xuajs1') != null ) {
                            console.log('11')
                            document.querySelector('.needsclick.kl-teaser-RCtjPB.undefined.kl-private-reset-css-Xuajs1').click()
                            sessionStorage.setItem('isVisible', 'true');
                            start()
                        }
                    }, 300)
                } else {
                    console.log('2')
                    if (document.querySelector('.needsclick.kl-teaser-RCtjPB.undefined.kl-private-reset-css-Xuajs1') != null) {
                        console.log('22')
                        document.querySelector('.needsclick.kl-teaser-RCtjPB.undefined.kl-private-reset-css-Xuajs1').click()
                        sessionStorage.setItem('isVisible', 'true');
                        start()
                        
                    }
                }
            }
        }, 200)
    }
}

window.onload = () => {
    start()
    pushDataLayer('loaded')
}

//clarify
let isClarify = setInterval(() => {
    if (typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "first_order_discount", "variant_1");
    }
}, 100)
