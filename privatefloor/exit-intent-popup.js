let products = [],
    haveLink = false,
    action,
    currency;

let objGeo = {
    '/uk.' : {
        'title': `It’s almost yours!<span>Only one step left:</span>`,
        'textTotal': 'Total',
        'text': 'We can’t guarantee the availability of all products in your cart or favorites if you don’t complete the purchase now',
        'textBtn': 'complete my order now',
        'choiceText': `This is a popular choice, <span class="text-nowrap"> we may </span> run out of stock soon`,
        'currency': '£'
    }
};

let optionMut = {
    attributes: true,
    childList: true,
    subtree: true
}

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

function pushProducts(imgUrl,name,price,currency,id) {
    if (window.location.pathname.includes('/cart')) {
        localStorage.setItem('products','')
    }
    products.push({
        'imgUrl': `${imgUrl}`,
        'name': `${name}`,
        'price': `${price}`,
        'currency': `${currency}`,
        'id': `${id}`
    })

    if (localStorage.getItem('products') != null && localStorage.getItem('products') != '') {
        products = [...products,...JSON.parse(localStorage.getItem('products'))]
    }

    products = products.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.place === thing.place && t.id === thing.id
        ))
    )

    localStorage.setItem('products', JSON.stringify(products));
}

function addProduct() {
    let productsLocalStorage = JSON.parse(localStorage.getItem('products')),
        total = 0;

    document.querySelector('.popup_slider').innerHTML = ``;

    for (let i = 0; i < productsLocalStorage.length; i++) {
        let newPrice = productsLocalStorage[i].price.split(',').join('');

        if(productsLocalStorage.length > 1) {
            document.querySelector('.popup_slider').insertAdjacentHTML('afterbegin',`
            <div class="popup_slide">
                <div>
                    <img src="${productsLocalStorage[i].imgUrl}" alt="${productsLocalStorage[i].name}">
                    <p class="slide_name">${productsLocalStorage[i].name}</p>   
                </div>
                <p class="slide_price" data-price="${newPrice}">${productsLocalStorage[i].currency + productsLocalStorage[i].price}</p>
            </div>`)
        } else {
            document.querySelector('.popup_slider').insertAdjacentHTML('afterbegin',`
            <div class="popup_slide popup_slide_one">
                <img src="${productsLocalStorage[i].imgUrl}" alt="${productsLocalStorage[i].name}">
                <div class="popup_slide_row">
                    <p class="slide_name">${productsLocalStorage[i].name}</p>   
                    <p class="slide_price" data-price="${newPrice}">${productsLocalStorage[i].currency + productsLocalStorage[i].price}</p>
                </div>
            </div>`)
            if (document.querySelector('.popup_slide_one') && !document.querySelector('.popular_choice') && document.querySelector('.popup_slide_one')) {
                for (const key in objGeo) {
                    if (location.href.includes(`${key}`)) {
                        document.querySelector('.popup_products').insertAdjacentHTML('beforebegin',`
                        <div class="popular_choice">
                            <p>${objGeo[key]["choiceText"]}</p>
                        </div>`);
                    }
                }
                document.querySelector('.btn_arrow_prev').style.display = 'none';
                document.querySelector('.btn_arrow_next').style.display = 'none';
                document.querySelector('.popup_total').style.display = 'none';
                document.querySelector('.popup_slider').classList.add('popup_one_slider')
            }
        }
        total += +newPrice;
        document.querySelector('.popup_total_price').innerHTML = productsLocalStorage[i].currency + total.toFixed(2);
    }
    if(productsLocalStorage.length < 3) {
        document.querySelector('.btn_arrow_prev').style.display = 'none';
        document.querySelector('.btn_arrow_next').style.display = 'none';
    }
}

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

function pushDataLayer(action) {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Exit intent pop up',
        'eventAction': `${action}`
    });
}

document.body.insertAdjacentHTML( 'afterbegin',`
<style>
    .popup_exit_intent {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: inline-flex;
        z-index: 9999;
        font-family: "Arial", sans-serif;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        padding: 12px;
    }
    .popup_exit_intent.active {
        opacity: 1;
        pointer-events: auto;
    }
    .popup_container {
        background: #FFFFFF;
        box-shadow: 0 0 7.79487px 2.59829px rgba(190, 190, 190, 0.25);
        max-width: 456px;
        margin: auto;
        width: 100%;
    }
    .popup_content {
        padding: 20px 20px 25px 20px;
    }
    .btn_close {
        margin-left: auto;
        width: 20px;
        display: block;
        height: 20px;
        margin-bottom: 13px;
        background: url("https://conversionratestore.github.io/projects/privatefloor/img/close.svg") no-repeat center / contain;
    }
    .popup_content h2{
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        text-transform: uppercase;
        color: #2B2B2B;
        margin-bottom: 39px;
    }
    .popup_content h2 span {
        display: block;
        font-size: 16px;
        font-weight: 400;
    }
    .popup_slider {
        display: flex;
        overflow-y: hidden;
        overflow-x: auto;
        max-width: 336px;
        margin: 0 auto;
        transition: all 0.3s ease;
        scroll-behavior: smooth;
    }
    .popup_slider::-webkit-scrollbar {
        height: 5px;
        background-color: #E5E5E5;
        border-radius: 2.6px;
    }
    .popup_slider::-webkit-scrollbar-thumb {
        height: 5px;
        background-color: #777777;
        border-radius: 2.6px;
    }
    .popup_slide {
        width: 131px;
        padding-bottom: 10px;
        margin-right: 56px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .popup_slide:last-child {
        margin-right: 0;
    }
    .popup_slide img {
        height: 129px;
        width: 100%;
        object-fit: contain;
        margin-bottom: 13px;
    }
    .popup_slide p, .popup_slide a {
        font-size: 16px;
        line-height: 18px;
        color: #777777!important;
        margin-bottom: 13px;
        display: block;
        text-transform: lowercase;
    }
    .popup_slide p, .popup_slide a:first-letter {
        text-transform: uppercase;
    }
    .popup_total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 25px;
        max-width: 336px;
        margin: 0 auto;
    }
    .popup_total p {
        font-weight: bold;
        font-size: 30px;
        line-height: 34px;
        color: #2B2B2B!important;
    }
    .popup_message {
        border-top: 1.3px dashed #E5E5E5;
        padding: 25px 30px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .popup_message img {
        width: 26.15px;
        height: 27.28px;
        margin-right: 28px;
    }
    .popup_message p {
        font-size: 13px;
        line-height: 19px;
        color: #BDBDBD;
        margin: 0;
    }
    .btn-complete {
        background: #FF450E;
        font-size: 18.188px;
        line-height: 21px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 25px;
        width: 100%;
    }
    .popup_products {
        position: relative;
        width: 100%;
    }
    .btn_arrow {
        position: absolute;
        top: 64.5px;
        width: 50px;
        height: 50px;
        transform: translateY(-50%);
        background: no-repeat center / 14px;
    }
    .btn_arrow_prev {
        left: -17px;
        background-image: url('https://conversionratestore.github.io/projects/privatefloor/img/arrow-prev.svg');
    }
    .btn_arrow_next {
        right: -17px;
        background-image: url('https://conversionratestore.github.io/projects/privatefloor/img/arrow-next.svg');
    }
    .popup_slide_row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .popup_slide_row p, .popup_slide_row a{
        color: #000000!important;
        margin: 0!important;
        font-size: 15.3708px;
    }
    .popup_slide_one.popup_slide img {
        margin-bottom: 29px;
    }
    .popup_slide_row p.slide_price{
        color: #2B2B2B!important;
        font-size: 29.4607px;
        line-height: 34px;
        font-weight: bold;
        padding-left: 15px;
        text-align: right;
        white-space: nowrap;
    }
    .popular_choice {
        margin: 0 auto 27px;
        position: relative;
        max-width: 336px;
        background: #F8F8F8;
        border: 1.2809px solid #EDEDED;
        border-radius: 5.1236px;
        padding: 15px 25px;
        width: 100%;
        text-align: center;
    }
    .popular_choice:before, .popular_choice:after  {
        content: '';
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-style: solid;
    }
    .popular_choice:before {
        top: calc(100% + 1px);
        border-width: 10px 9px 0 10px;
        border-color: #EDEDED transparent transparent transparent;
    }
    .popular_choice:after {
        top: 100%;
        border-width: 9px 8px 0 9px;
        border-color: #F8F8F8 transparent transparent transparent;
    }
    .popular_choice p {
        max-width: 225px;
        margin: 0 auto;
        font-size: 15.3708px;
        line-height: 18px;
        color: #6B6B6B;
    }
    .text-nowrap {
        white-space: nowrap;
    }
    .popup_slide.popup_slide_one {
        width: 100%!important;
        padding-bottom: 0!important;
    }
    .js-mobile  .popup_container {
        max-width: 351px;
    }
    .js-mobile .btn_arrow {
        display: none;
    }
    .js-mobile .popup_slider {
        max-width: 100%;
        margin-right: -20px;
    }
    .js-mobile .popup_slide img {
        height: 99px;
    }
    .js-mobile .popup_slide {
        width: 101px;
        margin-right: 40px;
    }
    .js-mobile .popup_slide p, .js-mobile .popup_slide a {
        font-size: 12px;
        line-height: 14px;
        margim-bottom: 10px;
    }
    .js-mobile .popup_total {
        max-width: 271px;
        padding-top: 20px;
    }
    .js-mobile .popup_total p {
        font-size: 23px;
        line-height: 26px;
    }
    .js-mobile .popup_content {
        padding: 16px 20px 20px 20px;
    }
    .js-mobile .btn_close {
        margin-bottom: 5px;
    }
    .js-mobile .popup_content h2 {
        margin: 0 0 30px;
        font-size: 18px;
        line-height: 20px;
    }
    .js-mobile .popup_content h2 span {
        font-size: 12px;
    }
    .js-mobile .btn_close {
        width: 16px;
        height: 16px;
        margin-right: -5px;
    }
    .js-mobile .popup_message p {
        font-size: 10px;
        line-height: 15px;
    }
    .js-mobile .popup_message img {
        width: 20.13px;
        height: 21px;
        margin-right: 21px;
    }
    .js-mobile .popup_message {
        padding: 20px 20px 20px 30px;
    }
    .js-mobile .btn-complete {
        font-size: 14px;
        line-height: 16px;
        padding: 19px;
    }
    .js-mobile .popup_one_slider.popup_slider {
        max-width: 261px ;
        margin-right: auto;
    }
    .js-mobile .popup_one_slider .popup_slide {
        margin: 0;
    }
    .js-mobile .popup_slide .popup_slide_row p.slide_price {
        font-size: 23px;
        line-height: 26px;
    }
    @media only screen and (max-width: 360px)  {
        .js-mobile .popup_total {
            max-width: 100%;
        }
        .js-mobile .popup_slider {
            max-width: calc(100% + 20px);
        }
    }
    </style>`)
detectMob()

for (const key in objGeo) {
    if (location.href.includes(`${key}`)) {
        console.log(objGeo[key])
        document.body.insertAdjacentHTML( 'beforeend',`
            <div class="popup_exit_intent">
                <div class="popup_container">
                    <div class="popup_content">
                        <button class="btn_close" type="button"></button>
                        <h2>${objGeo[key]["title"]}</h2>
                        <div class="popup_products">
                            <button class="btn_arrow btn_arrow_prev" type="button"></button>
                            <div class="popup_slider"></div>
                            <button class="btn_arrow btn_arrow_next" type="button"></button>
                        </div>
                        <div class="popup_total">
                            <p>${objGeo[key]["textTotal"]}:</p>
                            <p class="popup_total_price"></p>
                        </div>
                    </div>
                    <div class="popup_message">
                        <img src="https://conversionratestore.github.io/projects/privatefloor/img/notification.svg" alt="icon notification">
                        <p>${objGeo[key]["text"]}</p>
                    </div>
                    <button type="button" class="btn-complete">${objGeo[key]["textBtn"]}</button>
                </div>
            </div>`);
        currency = objGeo[key]["currency"]

        document.querySelector('.btn_close').addEventListener('click', (e) => {
            action = 'Close pop up';
            pushDataLayer(action)
            document.querySelector('.popup_exit_intent').classList.remove('active');
        })
        document.querySelector('.btn-complete').addEventListener('click', () => {
            document.querySelector('.popup_exit_intent').classList.remove('active');
            action = 'Click Complete order';
            pushDataLayer(action)
            window.location.href = `https:/${objGeo[key]}privatefloor.com/cart/`;
        })
    }
}

function spliceProduct(productsLocalStorage,i) {
    productsLocalStorage.splice(i, 1)
    localStorage.setItem('products', JSON.stringify(productsLocalStorage));
    sessionStorage.setItem('wasPopup', 'false');
}

function removeProductMobile(item) {
    if (!document.querySelectorAll('.product-list .product')) {
        localStorage.setItem('products', '');
        sessionStorage.setItem('wasPopup', 'false');
    } else {
        let id = item.closest('.product').getAttribute('data-item-id'),
            productsLocalStorage = JSON.parse(localStorage.getItem('products'));
        for (let i = 0; i < productsLocalStorage.length; i++) {
            if (productsLocalStorage[i].id === id) {
                spliceProduct(productsLocalStorage,i)
            }
        }
    }
}

function removeProductDesktop(item) {
    item.addEventListener('click', () => {
        if (!document.querySelectorAll('.table.cartlist tbody tr')) {
            localStorage.setItem('products', '');
            sessionStorage.setItem('wasPopup', 'false');
        } else {
            let id = item.closest('tr').getAttribute('data-item-id'),
                productsLocalStorage = JSON.parse(localStorage.getItem('products'));

            for (let i = 0; i < productsLocalStorage.length; i++) {
                if (productsLocalStorage[i].id === id) {
                    console.log(productsLocalStorage[i].id + ' == ' + id);
                    spliceProduct(productsLocalStorage,i);
                }
            }
        }
    })
}

let mut = new MutationObserver(function (muts) {
    if (window.location.pathname.includes('/catalog') && detectMob() == true && !!document.querySelectorAll('.add-to-cart .btn-atc') && !!document.querySelector('.listing-products')) {
        mut.disconnect()
        document.querySelectorAll('.add-to-cart .btn-atc').forEach(el => {
            el.addEventListener('click',() => {
                let imgUrl = el.closest('.item').querySelector('.preview-pic a img').getAttribute('src'),
                    name = el.closest('.item').querySelector('.title a').innerText,
                    price = el.closest('.item').querySelector('.prices .price').innerText.replace(currency,''),
                    id = el.getAttribute('data-vid');
                sessionStorage.setItem('wasPopup', 'false');
                pushProducts(imgUrl,name,price,currency,id);
            });
        });
    }

    mut.observe(document, optionMut);

    if (window.location.pathname.includes('/catalog/product')) {
        if (detectMob() == true && document.querySelector('.btn-atc')) {
            mut.disconnect()
            document.querySelector('.btn-atc').addEventListener('click', (e) => {
                let imgUrl = document.querySelector('.bullet-color.selected').getAttribute('data-img'),
                    name = document.querySelector('.bullet-color.selected').getAttribute('data-name-gtm'),
                    price = document.querySelector('.bullet-color.selected').getAttribute('data-price-gtm'),
                    id = document.querySelector('.bullet-color.selected').getAttribute('data-item-id-gtm');

                sessionStorage.setItem('wasPopup', 'false');
                pushProducts(imgUrl,name,price,currency,id);
            })
        } else {
            if (document.querySelector('#btn-add-item-cart')) {
                mut.disconnect()
                document.querySelector('#btn-add-item-cart').addEventListener('click', (e) => {
                    let imgUrl = document.querySelector('.slide.selected img').getAttribute('src'),
                        name = document.querySelector('.slide.selected img').getAttribute('data-name-gtm'),
                        price = document.querySelector('.slide.selected img').getAttribute('data-price-gtm'),
                        id = document.querySelector('.slide.selected img').getAttribute('data-item-id-gtm');

                    sessionStorage.setItem('wasPopup', 'false');
                    pushProducts(imgUrl,name,price,currency,id);
                })
            }
        }
    }

    mut.observe(document, optionMut);

    if (window.location.pathname.includes('/cart')) {
        if (detectMob() == true && document.querySelectorAll('.product-list .product .quantity .minus') && document.querySelectorAll('.remove-product-from-cart')) {
            mut.disconnect()

            document.querySelectorAll('.product-list .product .quantity .minus').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (item.nextElementSibling.innerText == '1') {
                        removeProductMobile(item);
                    }
                })
            })
            document.querySelectorAll('.action-and-total a').forEach(item => {
                item.addEventListener('click', (e) => {
                    removeProductMobile(item);
                })
            })
        }
        if (detectMob() == false && document.querySelectorAll('.removeItem') && document.querySelectorAll('.minus_cart') && document.querySelectorAll('.item')) {
            mut.disconnect()
            document.querySelectorAll('.minus_cart').forEach(item => {
                removeProductDesktop(item)
            })
            document.querySelectorAll('.removeItem').forEach(item => {
                removeProductDesktop(item)
            })
            setInterval(()=> {
                document.querySelectorAll('.item').forEach((item) => {
                    localStorage.setItem('products','')
                    let imgUrl = item.querySelector('.preview img').getAttribute('src'),
                        name = item.querySelector('.title').innerText.split('\n')[0],
                        price = item.querySelector('.price').innerText.split(' ')[0].replace(',','.').replace(currency,''),
                        id = item.getAttribute('data-item-id');

                    pushProducts(imgUrl,name,price,currency,id);
                })
            },100)
        }
    }

    mut.observe(document, optionMut);

    if(JSON.parse(localStorage.getItem('products')) && JSON.parse(localStorage.getItem('products')) != null && JSON.parse(localStorage.getItem('products')) != ''){
        if (detectMob() == true) {
            mut.disconnect()
            document.body.classList.add('js-mobile');
            var my_scroll = (function() {
                var last_position, new_position, timer, delta, delay = 50;

                function clear() {
                    last_position = null;
                    delta = 0;
                }

                clear();

                return function(){
                    new_position = window.scrollY;
                    if (last_position != null){
                        delta = new_position -  last_position;
                    }
                    last_position = new_position;
                    clearTimeout(timer);
                    timer = setTimeout(clear, delay);
                    return delta;
                };
            })();

            function myScrollSpeedFunction(){
                if(document.body.classList.contains('js-mobile')) {
                    if(my_scroll() < -200 && localStorage.getItem('products')) {
                        let productsLocalStorage = JSON.parse(localStorage.getItem('products')),
                            wasPopup = JSON.parse(sessionStorage.getItem('wasPopup'));

                        for (let i = 0; i < productsLocalStorage.length; i++) {
                            if (productsLocalStorage[i].link === window.location.href) {
                                haveLink = true
                            }
                        }
                        if (haveLink === false && wasPopup !== true && productsLocalStorage.length > 0) {
                            addProduct();
                            document.querySelector('.popup_exit_intent').classList.add('active');
                            sessionStorage.setItem('wasPopup', 'true');
                        }
                    }
                }
            }

            window.addEventListener('scroll', myScrollSpeedFunction);
        }
        if (detectMob() == false && document.querySelector('.btn_arrow_prev') && document.querySelector('.popup_slider')) {
            mut.disconnect()
            document.body.classList.add('js-desktop');
            document.querySelector('.btn_arrow_prev').addEventListener('click', () => {
                document.querySelector('.popup_slider').scrollLeft -= 195;
                action = 'Scroll items';
                pushDataLayer(action);
            })
            document.querySelector('.btn_arrow_next').addEventListener('click', () => {
                document.querySelector('.popup_slider').scrollLeft += 195;
                action = 'Scroll items';
                pushDataLayer(action);
            })

            addEvent(document, 'mouseout', function(evt) {
                if (evt.toElement == null && evt.relatedTarget == null) {
                    let productsLocalStorage, wasPopup;
                    if(localStorage.getItem('products')) {
                        productsLocalStorage = JSON.parse(localStorage.getItem('products'));
                        wasPopup = JSON.parse(sessionStorage.getItem('wasPopup'));
                        if (window.location.href.includes('/catalog/product')) {
                            for (let i = 0; i < productsLocalStorage.length; i++) {
                                if (productsLocalStorage[i].id === document.querySelector('.slide.selected img').getAttribute('data-item-id-gtm')) {
                                    haveLink = true
                                }
                            }
                        }
                    }

                    if (haveLink === false && wasPopup !== true && productsLocalStorage.length > 0) {
                        addProduct();
                        document.querySelector('.popup_exit_intent').classList.add('active');
                        sessionStorage.setItem('wasPopup', 'true');
                    }
                }
            })
        }
    }

    mut.observe(document, optionMut);
})
mut.observe(document, optionMut);

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1699330,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('event', 'exit_intent');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Exit intent pop up',
    'eventAction': 'loaded'
});
