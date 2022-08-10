let style = `
<style>
    .modal__popular hr {
        height: 2px;
        width: 100%;
        background: #D8D8D8;
        max-width: 222px;
    }
    [hidden] {
        display: none!important;
    }
    .modal__popular {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        overflow-y: auto;
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
    }
    .modal__popular.show {
        opacity: 1;
        pointer-events: auto;
    }
    .modal__popular.show .container {
        transform: translateY(0);
    }
    .modal__popular * {
        box-sizing: border-box;
    }
    .modal__popular .container {
        background: #FFFFFF;
        padding: 30px 0 15px;
        max-width: 556px;
        width: calc(100% - 40px);
        margin: auto;
        position: relative;
        transform: translateY(100px);
        transition: all 0.3s ease;
    }
    .modal__header, .modal__footer {
        padding: 0 30px;
    }
    .btn_close {
        border: none;
        position: absolute;
        right: 30px;
        top: 30px;
        width: 15px;
        height: 15px;
        opacity: 0.3;
        background: url(https://conversionratestore.github.io/projects/carid/img/close.svg) no-repeat center / 100%;
        cursor: pointer;
    }
    .modal__popular h2 {
        font-size: 30px;
        line-height: 30px;
        text-align: center;
        text-transform: uppercase;
        color: #111111;
        margin-bottom: 15px;
        font-weight: 400;
    }
    .modal__popular p {
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: #464646;
    }
    .message__block {
        background: #F9FBFC;
        border: 1px solid #068922;
        border-radius: 5px;
        margin: 15px 0;
        width: 100%;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #068922;
        padding: 10px;
    }
    .modal__products {
        text-align: left;
        overflow: hidden;
        padding: 0 30px 15px;
    }
    .modal__body {
        position: relative;
    }
    .modal__body.top:before {
        background: linear-gradient(360deg, rgba(255, 255, 255, 0) 83.55%, #FFFFFF 100%);
    }
    .modal__body.bottom:after {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 83.55%, #FFFFFF 100%);
    }
    .modal__products li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 15px 0;
    }
    .modal__products li img {
        width: 90px;
        height: 90px;
        flex-shrink: 0;
        object-fit: cover;
        margin-right: 18px;
    }
    .modal__products li .name {
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        text-transform: uppercase;
        color: #464646;
        margin-bottom: 4px
    }
    .modal__products li .desc {
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        color: #464646;
        display: block;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .modal__products li .price {
        font-size: 14px;
        line-height: 26px;
        text-align: right;
        color: #111111;
        padding-left: 20px;
    }
    .modal__popular .btn {
        background: #068922;
        border-radius: 5px;
        line-height: 52px;
        border: none;
        width: 100%;
        font-weight: 800;
        font-size: 14px;
        text-transform: uppercase;
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .modal__popular .btn img, .modal__popular .btn svg {
        margin-left: 10px;
    }
    .modal__popular .btn__google-pay, .modal__popular .btn__apple-pay {
        background: #111111;
        font-weight: 400;
        text-transform: inherit;
    }
    .modal__popular .btn__paypal, .modal__popular .btn__affirm {
        background: #F0F0F0;
        font-weight: 400;
        color: #4D4D4D;
        text-transform: inherit;
    }
    .modal__popular .btn__paypal img {
        margin-bottom: 4px;
    }
    .modal__popular .btn__affirm img {
        margin-bottom: 11px;
    }
    .modal__popular .btns .btn {
        margin-bottom: 15px;
    }
    .modal__popular .btns .btn:hover {
        text-decoration: underline;
    }
    .modal__popular .heading {
        border-top: 2px solid #d8d8d8;
        margin: 24px 0;
        max-width: 100%;
        position: relative;
    }
    .modal__popular .heading::after {
        content: "or";
        background: #fff;
        color: #464646;
        font-size: 14px;
        left: 50%;
        top: calc(50% - 1px);
        transform: translate(-50%,-50%);
        line-height: 1;
        padding: 0 20px;
        position: absolute;
    }
    .d-flex {
        display: flex;
    }
    @media only screen and (min-width: 557px)  {
        .items-sm-center {
            display: flex;
            align-items: center;
        }
    }
    @media only screen and (max-width: 556px)  {
        .modal__popular .container { 
            max-width: 335px;
        }
        .modal__popular h2 {
            font-size: 24px;
            line-height: 28px;
            margin-bottom: 10px;
        }
        .btn_close {
            right: 18px;
            top: 18px;
            width: 10px;
            height: 10px;
        }
        .modal__popular p {
            font-size: 16px;
            line-height: 19px;
        }
        .message__block {
            font-size: 12px;
            padding: 8px;
        }
        .modal__products li img {
            width: 70px;
            height: 70px;
            margin-right: 10px;
        }
        .modal__products li .desc {
            font-size: 12px;
            line-height: 20px;  
            -webkit-line-clamp: 2;
        }
        .modal__products li {
            align-items: flex-start;
        }
        .modal__products li .price {
            font-weight: 500;
	        padding-left: 7px;
        }
    }
    
    @media only screen and (max-width: 360px)  {
    	.modal__header, .modal__footer {
            padding: 0 15px;
        }
        .modal__products {
            padding: 0 15px 10px;
        }
    }
</style>`

/* Classes method for Product */
class Products {
    constructor(name,image,price) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.desc = name.includes(' - ') ? name.split(' - ')[1] : '';
    }

    render() {
        let element = document.createElement('li');

        element.innerHTML = `
            <div class="items-sm-center d-flex">
                <img src="${this.image}" alt="${this.name}">
                <span>
                    <span class="name">${this.name.includes(' - ') ? this.name.split(' - ')[0] : this.name}</span>
                    <span class="desc">${this.desc}</span>
                </span>
            </div>
            <p class="price">${this.price}</p>
        `

        document.querySelector('.modal__products').appendChild(element);
    }
}

//exit intent
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

//detect mobile
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

//push data layer
function pushDataLayer(action,label) {
    window.dataLayer = window.dataLayer || [];
    if (label) {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': `Exp: Exit-intent pop-up - ${detectMob() == true ? 'mobile' : 'desktop'}`,
            'eventAction': action,
            'eventLabel': label
        });
    } else {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': `Exp: Exit-intent pop-up - ${detectMob() == true ? 'mobile' : 'desktop'}`,
            'eventAction': action
        });
    }
}

//PDP
//html google pay button
let googlePayBtn = `
<button type="button" class="btn btn__google-pay">
    Check out with 
    <svg width="42" height="17" viewBox="0 0 42 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.8478 4.35853L36.3856 16.5632H34.696L36.7256 12.2923L33.1294 4.35722H34.9066L37.5089 10.4393H37.5429L40.0628 4.35722L41.8478 4.35853ZM19.1541 8.13253V13.0769H17.4371V0.872222H21.98C23.0584 0.842662 24.1086 1.21931 24.9223 1.92753C25.7266 2.58792 26.1686 3.52161 26.1555 4.50892C26.161 5.00578 26.0528 5.49732 25.839 5.94589C25.6253 6.39446 25.3117 6.78816 24.9223 7.09684C24.1325 7.79122 23.1517 8.13253 21.98 8.13253H19.1541ZM19.1476 2.37738V6.63392H22.0219C22.6476 6.65636 23.257 6.4313 23.718 6.00753C24.1613 5.61261 24.4058 5.07384 24.4058 4.51545C24.4058 3.95053 24.16 3.41176 23.718 3.02338C23.4922 2.80852 23.226 2.64065 22.9349 2.52953C22.6437 2.41841 22.3334 2.36625 22.0219 2.37607L19.1476 2.37738ZM29.5947 4.35853C30.684 4.35853 31.5497 4.66453 32.1826 5.2713C32.8156 5.87807 33.1294 6.70845 33.1294 7.76376V12.8101H31.7132V11.6725H31.6517C31.0384 12.6061 30.2276 13.0756 29.2129 13.0756C28.3406 13.0756 27.6188 12.8101 27.033 12.2714C26.7503 12.0212 26.5253 11.7126 26.3736 11.3669C26.2219 11.0212 26.147 10.6467 26.1542 10.2693C26.1542 9.42453 26.4602 8.75107 27.08 8.2463C27.6933 7.74938 28.5172 7.49699 29.545 7.49699C30.4238 7.49699 31.1456 7.66699 31.7106 8.00045V7.64607C31.7124 7.38882 31.6592 7.13415 31.5546 6.89914C31.4499 6.66413 31.2962 6.45421 31.1038 6.28345C30.7162 5.92066 30.204 5.72075 29.6732 5.72507C28.8493 5.72507 28.1955 6.08599 27.7116 6.80784L26.4105 5.96307C27.1258 4.89338 28.1876 4.35592 29.5908 4.35592L29.5947 4.35853ZM27.6816 10.3046C27.6787 10.4984 27.7215 10.6901 27.8068 10.8642C27.892 11.0383 28.0171 11.1897 28.172 11.3063C28.4989 11.5718 28.9082 11.7156 29.3227 11.7078C29.9426 11.7078 30.5415 11.4488 30.9848 10.9925C31.4543 10.557 31.721 9.94369 31.721 9.30292C31.2581 8.92107 30.6173 8.73015 29.7935 8.73015C29.1867 8.73015 28.6898 8.88053 28.2883 9.17999C27.8869 9.48599 27.6816 9.85476 27.6816 10.3033V10.3046ZM7.11942 0.872222C8.88009 0.850987 10.5827 1.50145 11.8807 2.69122L9.85119 4.68022C9.10979 3.99238 8.13057 3.61878 7.11942 3.63799C6.23702 3.64231 5.3779 3.92143 4.66146 4.43656C3.94502 4.95168 3.40687 5.67721 3.1218 6.5123C2.82228 7.3772 2.82228 8.3177 3.1218 9.18261C3.40687 10.0177 3.94502 10.7432 4.66146 11.2584C5.3779 11.7735 6.23702 12.0526 7.11942 12.0569C8.07926 12.0569 8.90442 11.8189 9.54388 11.3965C9.91177 11.157 10.2271 10.845 10.4705 10.4797C10.714 10.1144 10.8806 9.70329 10.9601 9.27153H7.11811V6.58815H13.8266C13.909 7.05761 13.9495 7.52838 13.9495 8.00438C13.9495 10.1294 13.1727 11.9275 11.831 13.1397C10.6528 14.2028 9.03911 14.8214 7.11811 14.8214C5.8069 14.8281 4.51925 14.473 3.39682 13.7951C2.27438 13.1173 1.36067 12.143 0.756186 10.9794C0.259197 10.0097 0 8.93575 0 7.84615C0 6.75654 0.259197 5.68257 0.756186 4.71292C1.35994 3.55043 2.2724 2.57682 3.39335 1.89904C4.51429 1.22126 5.80035 0.865529 7.11026 0.870916L7.11942 0.872222Z" fill="#F8F8F8"/>
    </svg>
</button>
`
//html apple pay button
let applePayBtn = `
<button type="button" class="btn btn__apple-pay">
    Check out with 
    <svg width="42" height="18" viewBox="0 0 42 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.52101 2.63186C7.03758 3.20786 6.26744 3.66429 5.49858 3.59743C5.39701 2.82086 5.78015 1.989 6.22244 1.47343C6.70458 0.885857 7.54801 0.464142 8.23201 0.429428C8.31301 1.24071 7.99672 2.03786 7.5223 2.63186H7.52101ZM8.2243 3.75043C7.10701 3.68229 6.14787 4.392 5.61815 4.392C5.07687 4.392 4.26558 3.78386 3.3823 3.80443C2.23673 3.81857 1.16572 4.473 0.583296 5.526C-0.629132 7.62043 0.268296 10.7216 1.43315 12.429C2.00272 13.2724 2.68415 14.1969 3.58287 14.1711C4.43272 14.1364 4.77472 13.6093 5.79944 13.6093C6.83701 13.6093 7.13144 14.1711 8.03658 14.1506C8.96615 14.1364 9.55501 13.3071 10.1246 12.4637C10.7739 11.5059 11.0413 10.5673 11.0554 10.521C11.0413 10.5004 9.25415 9.81129 9.2413 7.73486C9.22715 5.99271 10.6466 5.16343 10.707 5.11586C9.90987 3.91114 8.65115 3.78386 8.22301 3.75171L8.2243 3.75043ZM14.6734 1.39243V14.0631H16.6213V9.73157H19.3149C21.7719 9.73157 23.4999 8.02414 23.4999 5.55943C23.4999 3.08957 21.8066 1.39371 19.3817 1.39371L14.6734 1.39243ZM16.6213 3.05357H18.8649C20.5517 3.05357 21.5173 3.96386 21.5173 5.56457C21.5173 7.16529 20.5517 8.08329 18.852 8.08329H16.6213V3.05357ZM27.0472 14.157C28.2724 14.157 29.4039 13.5347 29.9207 12.5421H29.9619V14.0631H31.7619V7.75414C31.7619 5.93357 30.3167 4.74943 28.086 4.74943C26.0237 4.74943 24.4963 5.94772 24.4436 7.58829H26.1909C26.3387 6.80529 27.0484 6.29614 28.0333 6.29614C29.2252 6.29614 29.8886 6.858 29.8886 7.89043V8.586L27.465 8.73386C25.2009 8.874 23.982 9.80486 23.982 11.4326C23.982 13.0731 25.242 14.1583 27.0484 14.1583L27.0472 14.157ZM27.5769 12.6566C26.538 12.6566 25.8759 12.1539 25.8759 11.385C25.8759 10.5879 26.5123 10.1186 27.7234 10.044L29.8873 9.91029V10.6264C29.8873 11.8131 28.8896 12.6566 27.5692 12.6566H27.5769ZM34.1662 17.5114C36.06 17.5114 36.9523 16.7747 37.7289 14.5581L41.1437 4.87543H39.1689L36.879 12.3544H36.8379L34.548 4.87543H32.5127L35.808 14.0966L35.6332 14.6584C35.331 15.6034 34.8502 15.9699 33.9926 15.9699C33.8383 15.9699 33.5439 15.9506 33.423 15.9377V17.4587C33.5362 17.4909 34.0196 17.505 34.1597 17.505L34.1662 17.5114Z" fill="#F8F8F8"/>
    </svg>
</button>
`

let setTime = 0;

function startimeInterval() {
    timeInterval = setInterval(() => {
        setTime++
    }, 1000);
}

function stoptimeInterval() {
    clearInterval(timeInterval);
    pushDataLayer(`Visibility equals the pop-up its almost yours`,  setTime)
}

let intervalCart = setInterval(() => {
    //google pay button
    if (document.querySelector('.btn__google-pay') == null && document.querySelector('.cart-order .google-pay-button') != null && document.querySelector('.cart-order .google-pay-button.hidden') == null &&  document.querySelector('.btns .heading') != null) {
        document.querySelector('.btns .heading').insertAdjacentHTML('afterend', googlePayBtn) //add google pay button

        document.querySelector('.btn__google-pay').addEventListener('click', (e) => {  //click on google pay button
            document.querySelector('.cart-order .google-pay-button button').click();
            pushDataLayer('Click on check out with GPay button');
            hideModal();
        })
    }
    //apple pay button
    if (document.querySelector('.btn__apple-pay') == null && document.querySelector('.cart-order .apple-pay-button') != null && document.querySelector('.cart-order .apple-pay-button.hidden') == null &&  document.querySelector('.btns .heading') != null) {
        document.querySelector('.btns .heading').insertAdjacentHTML('afterend', applePayBtn) //add apple pay button

        document.querySelector('.btn__apple-pay').addEventListener('click', (e) => { //click on apple pay button
            document.querySelector('.cart-order .apple-pay-button').click();
            pushDataLayer('Click on check out with ApplePay button');
            hideModal();
        })
    }
})

//show modal
function showModal() {
    document.querySelector('.modal__popular').classList.add('show');
    setTime = 0;
    pushDataLayer('Showed pop-up its almost yours')
    startimeInterval()
}

//hide modal
function hideModal() {
    document.querySelector('.modal__popular').classList.remove('show');
    stoptimeInterval()
}

window.onload = function() {
    //cart
    if (window.location.pathname.includes('/cart.php') && sessionStorage.getItem('popular_products') != null && sessionStorage.getItem('popular_products') != '' && sessionStorage.getItem('popular_products') != []) {

        //html modal
        let html = `
            <div class="modal__popular">
                <div class="container">
                    <div class="modal__header">
                        <button type="button" class="btn_close"></button>
                        <h2>It’s almost yours! </h2>
                        <p>One step remaining</p>
                        <div class="message__block">This is a popular product <br>
                        Complete your order now while it is still in stock</div>
                    </div>
                    <div class="modal__body">
                        <ul class="modal__products"></ul>
                    </div>
                    <div class="modal__footer">
                        <button type="button" class="btn btn_complete">complete my order now</button>
                        <div class="btns" hidden>
                            <a class="btn btn_credit_card_checkout" href="${document.querySelector('.cart-order a.simple-btn') != null ? document.querySelector('.cart-order a.simple-btn').href : ''}">Credit Card Checkout</a>
                            <div class="heading"></div>
                        
                            <a href="${document.querySelector('.cart-order a.-paypal') != null ? document.querySelector('.cart-order a.-paypal').href : '#'}" class="btn btn__paypal" ${document.querySelector('.cart-order a.-paypal') == null ? 'hidden' : ''}>
                                Check out with
                                <img src="https://conversionratestore.github.io/projects/carid/img/paypal.svg" alt="paypal">
                            </a>
                            <a href="${document.querySelector('.cart-order a.-affirm-monthly') != null ? document.querySelector('.cart-order a.-affirm-monthly').href : '#'}" class="btn btn__affirm" ${document.querySelector('.cart-order a.-affirm-monthly') == null ? 'hidden' : ''}>
                                Monthly Payment 
                                <img src="https://conversionratestore.github.io/projects/carid/img/monthly-payment.svg" alt="monthly payment affirm"> 
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
            `

        document.body.insertAdjacentHTML('afterbegin', style); //insert styles
        document.body.insertAdjacentHTML('beforeend', html); //insert html

        //render last added product
        let items = JSON.parse(sessionStorage.getItem('popular_products'));

        let cards = document.querySelectorAll('.cart-section'); //products in cart
        let countLast = 0;
        for (let i = 0; i < items.length; i++) {
            for (let k = 0; k < cards.length; k++) {
                if (items[i].price != '$0.00' && items[i].price != '$00.00' && items[i].price != '$0.0') {
                    let priceProductCart = '';
                    if (cards[k].querySelector('.cart_prod_each_prc') != null) {
                        priceProductCart = cards[k].querySelector('.cart_prod_each_prc').innerHTML.split('<span>')[0];
                    } else if (cards[k].querySelector('.cart-product-price-original') != null && cards[k].querySelector('.cart_prod_each_prc') == null) {
                        priceProductCart = cards[k].querySelector('.cart-product-total-price').innerHTML.split('</span>')[1];
                    } else {
                        priceProductCart = cards[k].querySelector('.cart-product-total-price').innerHTML;
                    }

                    let nameItems = items[i].name.toLowerCase().replace('...','').split('&amp;').join('&').split('dfr1™').join('™'),
                        nameItemsCart = cards[k].querySelector('.cart_prod_name').innerText.toLowerCase();

                    if (nameItems.includes('®') && nameItems.includes('-')) {
                        let toHyphen = nameItems.split('®')[0],
                            fromHyphen = nameItems.split(/\s-\s(.*)/g)[1];
                        if (nameItemsCart.includes(toHyphen) && nameItemsCart.includes(fromHyphen) && countLast == 0 && priceProductCart.includes(items[i].price)) {
                            countLast = 1;

                            new Products(cards[k].querySelector('.cart_prod_name').innerText, cards[k].querySelector('.cart-prod-img-item').src, priceProductCart).render();
                        }
                    } else {
                        if (nameItemsCart.includes(nameItems) && countLast == 0 && priceProductCart.includes(items[i].price)) {
                            countLast = 1;

                            new Products(cards[k].querySelector('.cart_prod_name').innerText, cards[k].querySelector('.cart-prod-img-item').src, priceProductCart).render();
                        }
                    }
                }
            }
        }

        //show modal mobile
        if (detectMob() == true) {
            let lastPosition = 0, newPosition = 0, currentSpeed = 0;
            let scrollSpeed = (e) => {
                lastPosition = window.scrollY;
                setTimeout(() => {
                    newPosition = window.scrollY;
                }, 100);
                currentSpeed = newPosition - lastPosition;

                if (currentSpeed > 70 && document.querySelector('.gbox_portal') == null && sessionStorage.getItem('modal_loaded') == null && document.querySelector('.modal__products').innerHTML != '') {
                    sessionStorage.setItem('modal_loaded', 'true'); //set status modal true
                    showModal() //show modal

                    document.removeEventListener("scroll", scrollSpeed);
                }
            };

            document.addEventListener("scroll", scrollSpeed);
        } else {
            //show modal desktop
            let exitModal = (e) => {
                if (e.relatedTarget == null && e.target.closest('.gbox_portal') == null && sessionStorage.getItem('modal_loaded') == null && document.querySelector('.modal__products').innerHTML != '') {
                    sessionStorage.setItem('modal_loaded', 'true'); //refresh status modal
                    showModal() //show modal

                    document.removeEventListener("mouseout", exitModal);
                }
            }
            addEvent(document, 'mouseout', exitModal)
        }

        //close modal
        document.querySelector('.btn_close').addEventListener('click', () => {
            hideModal();
            pushDataLayer(`Click close on the pop-up its almost yours`)
        })
        document.querySelector('.modal__popular').addEventListener('click', (e) => {
            if (e.target.matches('.modal__popular')) {
                hideModal()
                pushDataLayer(`Click on the pop-up outside its almost yours`)
            }
        })

        //click on btns in modal
        document.querySelector('.btn_complete').addEventListener('click', (e) => {
            e.target.hidden = true;
            document.querySelector('.btns').hidden = false;
            pushDataLayer('Click on complete my order now button')
        })

        document.querySelector('.btn_credit_card_checkout').addEventListener('click', (e) => {
            pushDataLayer('Click on credit card checkout button')
            hideModal()
        })

        document.querySelector('.btn__paypal').addEventListener('click', (e) => {
            pushDataLayer('Click on check out with PayPal button')
            hideModal()
        })

        document.querySelector('.btn__affirm').addEventListener('click', (e) => {
            pushDataLayer('Click on monthly payment affirm button')
            hideModal()
        })

        //refresh status modal
        document.querySelectorAll('.cart-body-wrap .icon-delete').forEach(button => {
            button.addEventListener('click', () => sessionStorage.removeItem('modal_loaded'))
        });
    }
};

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': `Exp: Exit-intent pop-up - ${detectMob() == true ? 'mobile' : 'desktop'}`,
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
    if (typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity('set', `Exit_intent_pop_up_${detectMob() == true ? 'mobile' : 'desktop'}`, 'variant_1')
    }
}, 100)
