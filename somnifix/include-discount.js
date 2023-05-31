let coupon = (discount) => {
    return `
    <div class="includes_discount d-flex items-center">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="17" fill="#60BF7C"/>
            <g clip-path="url(#clip0_1951_2587)">
                <path d="M26.547 7.45285C26.3247 7.23056 25.9643 7.23056 25.742 7.45285L24.0841 9.11073C23.9822 9.06216 23.8746 9.02303 23.7624 8.99499L18.6103 7.72216C18.0318 7.57754 17.4104 7.74963 16.9887 8.17133L7.78454 17.3603C7.11878 18.0261 7.11878 19.1095 7.78454 19.7754L14.2245 26.2153C14.8903 26.8811 15.9737 26.8812 16.6396 26.2153L25.8286 17.0111C26.2503 16.5894 26.4224 15.968 26.2777 15.3894L25.0049 10.2375C24.9768 10.1252 24.9377 10.0176 24.8892 9.91572L26.547 8.25784C26.7693 8.03555 26.7693 7.67514 26.547 7.45285ZM25.1732 15.6656C25.2214 15.8585 25.1641 16.0656 25.0235 16.2062L15.8345 25.4103C15.6125 25.6323 15.2514 25.6323 15.0295 25.4103L8.5895 18.9703C8.36755 18.7484 8.36755 18.3872 8.5895 18.1653L17.7937 8.97632C17.9013 8.86867 18.048 8.80981 18.1975 8.80981C18.2432 8.80981 18.2891 8.81531 18.3342 8.82658L23.1735 10.0212L21.8027 11.3921C21.1681 11.0898 20.3841 11.2007 19.8595 11.7253C19.1936 12.3912 19.1936 13.4745 19.8595 14.1403C20.1924 14.4732 20.6297 14.6397 21.067 14.6397C21.5042 14.6397 21.9416 14.4733 22.2744 14.1403C22.7992 13.6156 22.91 12.8317 22.6077 12.1971L23.9785 10.8262L25.1732 15.6656ZM21.4695 13.3354C21.2476 13.5573 20.8864 13.5573 20.6645 13.3354C20.4426 13.1135 20.4426 12.7523 20.6645 12.5304C20.7755 12.4194 20.9212 12.3639 21.067 12.3639C21.2127 12.3639 21.3585 12.4194 21.4694 12.5303L21.4694 12.5304L21.4695 12.5304C21.6914 12.7523 21.6914 13.1135 21.4695 13.3354Z" fill="white"/>
                <path d="M16.639 14.14C15.9731 13.4742 14.8898 13.4742 14.2239 14.14C13.5582 14.8058 13.5582 15.8892 14.2239 16.555C14.8897 17.2208 15.9731 17.2208 16.639 16.555C17.3048 15.8892 17.3048 14.8058 16.639 14.14ZM15.834 15.75C15.6121 15.9719 15.2509 15.9719 15.029 15.75C14.8071 15.528 14.807 15.1669 15.029 14.945C15.2509 14.7231 15.612 14.723 15.834 14.945C16.0559 15.1669 16.0559 15.528 15.834 15.75Z" fill="white"/>
                <path d="M17.4437 19.775C16.7763 19.1076 15.6962 19.1075 15.0287 19.775C14.3628 20.4408 14.3628 21.5241 15.0287 22.19C15.6961 22.8573 16.7762 22.8575 17.4437 22.19C18.1095 21.5241 18.1095 20.4408 17.4437 19.775ZM16.6387 21.385C16.4163 21.6074 16.0561 21.6075 15.8337 21.385C15.6118 21.1631 15.6118 20.8019 15.8337 20.58C16.0561 20.3576 16.4162 20.3575 16.6387 20.58C16.8606 20.8019 16.8606 21.163 16.6387 21.385Z" fill="white"/>
                <path d="M20.0227 17.7C19.988 17.3876 19.7065 17.1624 19.3941 17.1971L12.1491 18.0021C11.8367 18.0369 11.6115 18.3183 11.6462 18.6307C11.6786 18.9218 11.925 19.1372 12.2113 19.1372C12.2323 19.1372 12.2535 19.136 12.2749 19.1337L19.5198 18.3287C19.8323 18.2939 20.0575 18.0125 20.0227 17.7Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_1951_2587">
                    <rect width="19.4286" height="19.4286" fill="white" transform="translate(7.28516 7.28613)"/>
                </clipPath>
            </defs>
        </svg>
        <p>Congratulations! Your purchase already includes a <span>discount of ${discount}%</span></p>
    </div>`
}

let saving = (saved) => `<td class="saved" colspan="2">Your total saving on this order: $${saved}</td>`

let pushDataLayer = (action, label = '') => {
    console.log(action + " : " + label)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
    'event': 'event-to-ga',
        'eventCategory': 'Exp: Message at checkout',
        'eventAction': action,
        'eventLabel': label
    });
}

let style = `
<style>
    .order-summary__section--product-list .product-table {
        margin-bottom: 13px;
    }
    .includes_discount {
        background: #E4F5F8;
        border-radius: 6px;  
        padding: 12px 10px;  
        margin-bottom: 10px;     
    }
    .includes_discount p {
        padding-left: 12px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #1E415F;
    }
    .includes_discount p span {
        color: #60BF7C;
        font-weight: 700;
    }
    .order-summary__line-through {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 19px;
        margin-right: 8px;
        color: #C6C6C6;
        text-decoration: line-through;
    }
    
    .saved {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        color: #60BF7C;
        padding: 22px 0 10px;
    }
    .btn-coupon {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #535353;
        width: fit-content;
        padding: 2px 0;
        border-bottom: 1px solid #535353;
    }
    .discount-wrapper, .order-summary__section.order-summary__section--discount {
        display: none;
    }
    .discount-wrapper input {
        padding: 11px 14px!important;
        border-radius: 6px 0 0 6px!important;
        color: #20425E;
        border: 1px solid #D9D9D9;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #20425E;
        width: calc(100% - 120px);
        border-right: none;
    }
    .discount-wrapper input::-webkit-input-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #737373; 
    }
    
    .discount-wrapper input:-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #737373; 
    }
    
    .discount-wrapper input::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #737373; 
    }
    
    .discount-wrapper input:-ms-input-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #737373; 
    }

    .discount-wrapper button {
        margin: 0;
        border-radius: 0px 6px 6px 0px!important;
        width: 120px;
        font-weight: 500;
        font-size: 14px;
        line-height: 42px;
        background: #68CAD9;
        color: #14282B;
    }
    .discount-wrapper button[disabled] {
        background: #D9D9D9;
        color: #FFFFFF;
    }
    .total-line__discount .discount-wrapper  {
        padding: 12px 0 0 0!important;
    }
    .discount-wrapper.error input {
        border-color: #E32C2B;
    }
    .discount-wrapper p {
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        color: #E32C2B;
        margin-top: 4px;
        text-align: left;
    }
    .total-line.total-line--reduction .total-line__name > span:first-child, .reduction-code__icon {
        display: none;
    }
    .total-line__name .reduction-code {
        margin: 0;
    }
    .reduction-code svg.btn-remove {
        margin-left: 5px;
    }
    .total-line.total-line--reduction {
        background: #FFFFFF;
        border-radius: 6px;
        border-top: 12px solid #fafafa;
    }
    .total-line.total-line--reduction > td, .total-line.total-line--reduction > th {
        padding: 11px 12px!important;
    }
    .total-line.total-line--reduction .total-line__name, .total-line.total-line--reduction .total-line__price {
        padding: 0;
    }
    .total-line.total-line--reduction .reduction-code__text {
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #20425E;
    }
    .total-line.total-line--reduction .order-summary__emphasis {
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        color: #60BF7C;
    }
    .d-flex {
        display: flex;
    } 
    .items-center  {
        align-items: center;
    }
    @media (min-width: 1000px) {
        .order-summary__section~.order-summary__section {
            border-top: none;
        }

        .total-line.total-line--reduction {
            border-top-width: 20px;
        }
    }
    @media (max-width: 1000px) {
        .order-summary__section.order-summary__section--product-list {
            padding-bottom: 0;
        }
        .order-summary__section~.order-summary__section {
            padding-bottom: 12px;
        }
    }
</style>`

//3 Pack  22% + Subscribe = 30%
//12 Pack 30% + Subscribe = 37%
//1 Pack  0

let packs = {
    '3 Pack': {
        '$50.37': '30',
        '$55.97': '22'
    },
    '12 Pack': {
        '$197.97': '37',
        '$219.97': '30'
    }
}
let mql = window.matchMedia("(min-width: 1000px)").matches;

//coupon message and total saving
let saved = setInterval(() => {
    if (document.querySelector('.product__description__variant.order-summary__small-text') && document.querySelector('.payment-due__price') && document.querySelector('.saved') == null) {

        document.body.insertAdjacentHTML('afterbegin', style)

        let packSelector = document.querySelector('.product__description__variant.order-summary__small-text').innerHTML;
        let pack = !packSelector.includes('1 Pack') && packSelector != '' ? packs[packSelector][document.querySelector('.product__price span').innerHTML] : ''
        let oldPrice = packSelector.includes('3 Pack') ? 71.97 : packSelector.includes('12 Pack') ? 311.87 : '';

        if (pack != '') {
            document.querySelector('.total-line__price').insertAdjacentHTML('afterbegin',
                `<span class="order-summary__line-through skeleton-while-loading"> $${oldPrice} </span>`)
            
            if (document.querySelector('.includes_discount') == null) {
                document.querySelector('.product-table').insertAdjacentHTML('afterend', coupon(pack))
                if (mql) {
                    pushDataLayer('Visibility Congratulations', document.querySelector('.includes_discount p span').innerHTML)
                } else {
                    document.querySelector('.order-summary-toggle').addEventListener('click', () => {
                        pushDataLayer('Visibility Congratulations', document.querySelector('.includes_discount p span').innerHTML)
                    })
                }
            }
            
            //saved
            let saved = oldPrice - +document.querySelector('.payment-due__price').innerText.replace('$','')
            document.querySelector('.total-line-table__footer .total-line').insertAdjacentHTML('afterend',`<tr> ${saving(Math.floor(saved))}</tr>` )
            if (mql) {
                pushDataLayer('Visibility Your total saving on this order', document.querySelector('.saved').innerHTML.split(':')[1])
            } else {
                document.querySelector('.order-summary-toggle').addEventListener('click', () => {
                    pushDataLayer('Visibility Your total saving on this order', document.querySelector('.saved').innerHTML.split(':')[1])
                })
            }
        }
        
    }
});
//used discount
let reductionCode = setInterval(() => {
    if (document.querySelector('.total-line.total-line--reduction .reduction-code__text') && document.querySelector('.tag__button') && document.querySelector('.btn-remove') == null && document.querySelector('.total-line.total-line--discount') != null) {
        document.querySelector('.total-line.total-line--reduction .reduction-code__text').insertAdjacentHTML('afterend', `
        <svg class="btn-remove" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99993 3.58579L1.4644 0.0502526L0.0501826 1.46447L3.58572 5L0.0501823 8.53553L1.4644 9.94975L4.99993 6.41421L8.53546 9.94975L9.94968 8.53553L6.41414 5L9.94968 1.46447L8.53546 0.0502526L4.99993 3.58579Z" fill="#20425E"/>
        </svg>`)

        document.querySelector('.btn-remove').addEventListener('click', (e) => {
            document.querySelector('.tag__button').click()
            
        })

        document.querySelector('.total-line.total-line--shipping').after(document.querySelector('.total-line.total-line--reduction'))
        document.querySelector('.total-line.total-line--discount').style.display = 'none';
    }
})
//discount 
let isVisibleDiscount = false;
let discountCode = setInterval(() => {
    if (document.querySelector('#checkout_reduction_code') && document.querySelector('.total-line-table__tbody') && document.querySelector('.discount-wrapper input') == null) {
        
        let error = document.querySelector('.order-summary__section--discount .field--error') || document.querySelector('.notice--warning') ? 'error' : '',
            errorMessage = document.querySelector('.order-summary__section--discount .field__message') != null ? document.querySelector('.order-summary__section--discount .field__message').innerHTML : '',
            noticeWarning = document.querySelector('.notice--warning') != null ? document.querySelector('.notice--warning .notice__text').innerText : '';
        
        document.querySelector('.total-line-table__tbody').insertAdjacentHTML('beforeend',`
        <tr class="total-line total-line--discount">
            <td class="total-line__discount" colspan="2">
                <p class="btn-coupon" style="${isVisibleDiscount == true ? 'display: none' : ''}">Have a coupon code?</p>
                <div class="discount-wrapper ${error}" style="${isVisibleDiscount == true ? 'display: block' : ''}">
                    <div class="d-flex">
                        <input placeholder="Enter your coupon code">
                        <button type="button" disabled="disabled"> Apply </button>  
                    </div>
                    <p>${errorMessage}</p>
                    <p>${noticeWarning}</p>
                </div>
            </td>
        </tr>`)

        //click on "Have a coupon code?" button
        document.querySelector('.btn-coupon').addEventListener('click', (e) => {
            e.currentTarget.style.display = 'none';
            document.querySelector('.discount-wrapper').style.display = 'block';
            isVisibleDiscount = true;
            pushDataLayer('Click on Have a coupon code?')
            pushDataLayer('Visibility Enter yuor coupon code input')
        })
        //input 
        let inputCode = document.querySelector('#checkout_reduction_code');
        if (inputCode.value != '') {
            document.querySelector('.discount-wrapper input').value = inputCode.value;
            document.querySelector('.discount-wrapper button').disabled = false;
        }
       
        document.querySelector('.discount-wrapper input').addEventListener('input', (e) => {
            document.querySelector('#checkout_reduction_code').value = e.currentTarget.value
            if (e.currentTarget.value != '') {
                document.querySelector('.discount-wrapper button').disabled = false;
                document.querySelector('.anyflexbox .field__input-btn').disabled = false;
            } else {
                document.querySelector('.discount-wrapper button').disabled = true;
            }
        })
        //apply 
        document.querySelector('.discount-wrapper input').addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                document.querySelector('.anyflexbox .field__input-btn').click()
                pushDataLayer('Click on Enter yuor coupon code input')
            }
          });
        document.querySelector('.discount-wrapper button').addEventListener('click', (e) => { 
            document.querySelector('.anyflexbox .field__input-btn').click()
            pushDataLayer('Click on Apply button')
        })
    }
})

pushDataLayer('loaded')

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "message_checkout", "variant_1");
    }
}, 100)
