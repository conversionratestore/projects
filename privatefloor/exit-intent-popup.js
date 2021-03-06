let products = [],
    haveLink = false,
    action,
    currency,
    count = 0,
    today = new Date();

today = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

if (!localStorage.getItem('todayItem') && localStorage.getItem('todayItem') == null) {
    localStorage.setItem('todayItem', JSON.stringify(today))
    console.log(JSON.parse(localStorage.getItem('todayItem')))
} else {
    let dayStorage = JSON.parse(localStorage.getItem('todayItem'))
    console.log(dayStorage)
    if (dayStorage !== today) {
        localStorage.setItem('todayItem', JSON.stringify(today))
        localStorage.setItem('wasPopup', 'false');
    }
    console.log(JSON.parse(localStorage.getItem('todayItem')))
}

let objGeo = {
    '/www.' : {
        'title': `Le produit dans votre panier est en forte demande actuellement`,
        'title2': `Les produits dans votre panier sont en forte demande actuellement`,
        'text': `Nous ne pouvons garantir sa disponibilité si vous ne le validez pas aujourd’hui.`,
        'text2': `Nous ne pouvons garantir leur disponibilité si vous ne le validez pas aujourd’hui.`,
        'textBtn': 'TERMINER MA COMMANDE MAINTENANT',
        'choiceText': `C'est un choix populaire, nous pourrions bientôt être en rupture de stock`,
        'currency': '€'
    },
    '/uk.' : {
        'title': `Item in your cart is in high demand now`,
        'title2': `Items in your cart are in high demand now`,
        'text': 'We can’t guarantee the availability of the product in your cart if you don’t complete the purchase now',
        'text2': 'We can’t guarantee the availability of all products in your cart if you don’t complete the purchase now',
        'textBtn': 'complete my order now',
        'choiceText': `This is a popular choice, <span class="text-nowrap"> we may </span> run out of stock soon`,
        'currency': '£'
    },
    '/it.' : {
        'title': `L’articolo nel tuo carrello è molto richiesto in questo momento`,
        'title2': `Gli articoli nel tuo carrello sono molto richiesti in questo momento`,
        'text': `Non possiamo garantire la disponibilità dell’articolo nel tuo carrello se non completi l’acquisto ora.`,
        'text2': `Non possiamo garantire la disponibilità di tutti gli articoli nel tuo carrello se non completi l’acquisto ora.`,
        'textBtn': 'COMPLETA IL MIO ORDINE ORA',
        'choiceText': `Questa è una scelta popolare, potremmo esaurire presto le scorte`,
        'currency': '€'
    },
    '/de.' : {
        'title': `Die Nachfrage nach dem Produkt in deinem Warenkorb ist momentan sehr hoch`,
        'title2': `Die Nachfrage nach den Produkten in deinem Warenkorb ist momentan sehr hoch`,
        'text': 'Wir können die Verfügbarkeit des Produktes in deinem Warenkorb nicht garantieren, wenn du die Bestellung nicht sofort abschließen solltest.',
        'text2': 'Wir können die Verfügbarkeit der Produkte in deinem Warenkorb nicht garantieren, wenn du die Bestellung nicht sofort abschließen solltest.',
        'textBtn': 'COMPLETA IL MIO ORDINE ORA',
        'choiceText': `Dies ist eine beliebte Wahl, wir könnten bald ausverkauft sein`,
        'currency': '€'
    },
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

function pushProducts(imgUrl,name,price,currency,id,qty, filter) {
    products.push({
        'imgUrl': `${imgUrl}`,
        'name': `${name}`,
        'price': `${price}`,
        'currency': `${currency}`,
        'id': `${id}`,
        'qty': `${qty}`
    })
    if (localStorage.getItem('products') != null && localStorage.getItem('products') != '') {
        products = [...products,...JSON.parse(localStorage.getItem('products'))]
    }

    if (filter === true) {
        products = products.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.place === thing.place && t.id === thing.id
            ))
        )
    }

    if (localStorage.getItem('updatedProducts') != '' && localStorage.getItem('updatedProducts') != null) {
        let updatedProducts = JSON.parse(localStorage.getItem('updatedProducts'));

        for (let i = 0; i < products.length; i++) {
            console.log('products last: ' + products[i])
            if (products[i].id === updatedProducts[0].id) {
                console.log(products[i].id === updatedProducts[0].id)
                console.log(updatedProducts)
                console.log("before", products[i].id + " : " + products[i].qty)

                products[i].qty = updatedProducts[0].qty ;
                console.log("after", products[i].id + " : " + products[i].qty)

                localStorage.setItem('updatedProducts', '')
            }
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
}

function addProduct() {
    let productsLocalStorage = JSON.parse(localStorage.getItem('products')),
        total = 0;

    document.querySelector('.popup_slider').innerHTML = ``;

    for (let i = 0; i < productsLocalStorage.length; i++) {
        let newPrice = +productsLocalStorage[i].price.split(',').join('') * +productsLocalStorage[i].qty;

        if(productsLocalStorage.length > 1) {
            document.querySelector('.popup_slider').insertAdjacentHTML('afterbegin',`
            <div class="popup_slide" data-qty="${productsLocalStorage[i].qty}">
                <div>
                    <img src="${productsLocalStorage[i].imgUrl}" alt="${productsLocalStorage[i].name}">
                    <p class="slide_name">${productsLocalStorage[i].name}</p>   
                </div>
                <p class="slide_price" data-total="${newPrice.toFixed(2)}">${productsLocalStorage[i].currency + productsLocalStorage[i].price}</p>
            </div>`)
        } else {
            document.querySelector('.popup_slider').insertAdjacentHTML('afterbegin',`
            <div class="popup_slide popup_slide_one" data-qty="${productsLocalStorage[i].qty}">
                <img src="${productsLocalStorage[i].imgUrl}" alt="${productsLocalStorage[i].name}">
                <div class="popup_slide_row">
                    <p class="slide_name">${productsLocalStorage[i].name}</p>   
                    <p class="slide_price" data-total="${newPrice.toFixed(2)}">${productsLocalStorage[i].currency + productsLocalStorage[i].price}</p>
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
        for (const [key, value] of Object.entries(objGeo)) {
            if (location.href.includes(`${key}`)) {
                if (productsLocalStorage.length > 1) {
                    document.querySelector('.popup_content h2').innerHTML = value.title2;
                    document.querySelector('.popup_message p').innerHTML = value.text2;
                } else {
                    document.querySelector('.popup_content h2').innerHTML = value.title;
                    document.querySelector('.popup_message p').innerHTML = value.text;
                }
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
        z-index: 999999999!important;
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
        width: 25px;
        display: block;
        height: 25px;
        margin: -5px -5px 13px auto;
        background: url("https://conversionratestore.github.io/projects/privatefloor/img/close.svg") no-repeat center / 20px;
    }
    .popup_content h2{
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        text-transform: uppercase;
        color: #2B2B2B;
        max-width: 339px;
        margin: 0 auto 39px;
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
        position: relative;
    }
     .popup_slide:before {
        content: attr(data-qty);
        position: absolute;
        border-radius: 50%;
        background-color: #f8f8f8;
        right: 0;
        top: 0;
        font-size: 14px;
        line-height: 25px;
        width: 25px;
        text-align: center;
        color: #2B2B2B;
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
        color: #FFFFFF!important;
        padding: 25px;
        width: 100%;
        display: block;;
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

for (const [key, value] of Object.entries(objGeo)) {
    if (location.href.includes(`${key}`)) {
        document.body.insertAdjacentHTML( 'beforeend',`
            <div class="popup_exit_intent">
                <div class="popup_container">
                    <div class="popup_content">
                        <button class="btn_close" type="button"></button>
                        <h2>${value.title}</h2>
                        <div class="popup_products">
                            <button class="btn_arrow btn_arrow_prev" type="button"></button>
                            <div class="popup_slider"></div>
                            <button class="btn_arrow btn_arrow_next" type="button"></button>
                        </div>
                        <div class="popup_total">
                            <p>Total:</p>
                            <p class="popup_total_price"></p>
                        </div>
                    </div>
                    <div class="popup_message">
                        <img src="https://conversionratestore.github.io/projects/privatefloor/img/notification.svg" alt="icon notification">
                        <p>${value.text}</p>
                    </div>
                    <a href="https:/${key}privatefloor.com/cart" class="btn-complete">${value.textBtn}</a>
                </div>
            </div>`);
        currency = value.currency

        document.querySelector('.btn_close').addEventListener('click', (e) => {
            action = 'Close pop up';
            pushDataLayer(action)
            document.querySelector('.popup_exit_intent').classList.remove('active');
        })
        document.querySelector('.btn-complete').addEventListener('click', () => {
            document.querySelector('.popup_exit_intent').classList.remove('active');
            action = 'Click Complete order';
            pushDataLayer(action)
        })
    }
}

function spliceProduct(productsLocalStorage,i) {
    productsLocalStorage.splice(i, 1)
    localStorage.setItem('products', JSON.stringify(productsLocalStorage));
    localStorage.setItem('wasPopup', 'false');
}

function removeProductMobile(item) {
    if (!document.querySelectorAll('.product-list .product')) {
        localStorage.setItem('products', '');
        localStorage.setItem('wasPopup', 'false');
    } else {
        let id = item.closest('.product').getAttribute('data-item-id'),
            productsLocalStorage = JSON.parse(localStorage.getItem('products'));
        for (let i = 0; i < productsLocalStorage.length; i++) {
            if (productsLocalStorage[i].id === id) {
                spliceProduct(productsLocalStorage,i)
            }
        }
    }
    localStorage.setItem('wasPopup', 'false');
}

function removeProductDesktop(item) {
    item.addEventListener('click', () => {
        if (!document.querySelectorAll('.table.cartlist tbody tr')) {
            localStorage.setItem('products', '');
            localStorage.setItem('wasPopup', 'false');
        } else {
            let id = item.closest('tr').getAttribute('data-item-id'),
                productsLocalStorage = JSON.parse(localStorage.getItem('products'));

            for (let i = 0; i < productsLocalStorage.length; i++) {
                if (productsLocalStorage[i].id === id) {
                    spliceProduct(productsLocalStorage,i);
                }
            }
        }
    })
}

function addQtyProducts(qty,id) {
    let updatedProducts = [];
    if (localStorage.getItem('products')) {
        let productsLocalStorage = JSON.parse(localStorage.getItem('products'));
        for (let i = 0; i < productsLocalStorage.length; i++) {
            if (productsLocalStorage[i].id === id) {
                console.log('qty2: ' + qty)
                qty = +qty + +productsLocalStorage[i].qty
                updatedProducts.push({
                    'id': `${id}`,
                    'qty': `${qty}`
                })
                console.log('updatedProducts',updatedProducts)
                localStorage.setItem('updatedProducts', JSON.stringify(updatedProducts));

            }
            console.log('qty3: ' + qty)
        }
    }
}
if (document.querySelector('.cartbtn #count_product_in_cart') && document.querySelector('.cartbtn #count_product_in_cart').innerText == '0') {
    localStorage.setItem('products', '');
}

let mut = new MutationObserver(function (muts) {
    if (window.location.pathname.includes('/catalog/product')) {
        if (detectMob() == false) {
            if (document.querySelector('#btn-add-item-cart') && document.querySelector('#btn-add-item-cart') != null) {
                mut.disconnect()
                document.querySelector('#btn-add-item-cart').addEventListener('click', (e) => {
                    if (count === 0) {
                        console.log(count)
                        let imgUrl = document.querySelector('.slide.selected img').getAttribute('data-mobile-src'),
                            name = document.querySelector('.slide.selected img').getAttribute('data-name-gtm'),
                            price = document.querySelector('.slide.selected img').getAttribute('data-price-gtm'),
                            id = document.querySelector('.slide.selected img').getAttribute('data-item-id-gtm'),
                            qty = document.querySelector('#qty-input').value;

                        addQtyProducts(qty,id)
                        localStorage.setItem('wasPopup', 'false');
                        pushProducts(imgUrl,name,price,currency,id,qty,true);
                        count++
                    }
                    console.log(count)
                })
            }
            if (document.querySelector('.mfp-content') && document.querySelector('#popup-add-item-cart') != null && window.location.pathname.includes('/catalog/product')) {
                mut.disconnect();
                setTimeout(()=> {
                    count = 0;
                },100)
            }
        }
    }

    mut.observe(document, optionMut);

    if (window.location.pathname.includes('/cart')) {
        if (detectMob() == false && document.querySelectorAll('.removeItem') && document.querySelectorAll('.minus_cart')) {
            mut.disconnect()
            document.querySelectorAll('.minus_cart').forEach(item => {
                if (item.nextElementSibling.innerText == '1') {
                    removeProductDesktop(item)
                }
            })
            document.querySelectorAll('.removeItem').forEach(item => {
                removeProductDesktop(item)
            })
            let runInterval = setInterval(() => {
                clearInterval(runInterval);

                document.querySelectorAll('.item').forEach((item) => {
                    products = [];
                    let imgUrl = item.querySelector('.preview img').getAttribute('src'),
                        name = item.querySelector('.title').innerText.split('\n')[0],
                        id = item.getAttribute('data-item-id'),
                        qty = item.querySelector('.qty').innerText,
                        num = item.querySelector('.price').innerText.split(',').join('').split('.').join('').split(' ').join('').replace(currency, '');

                    let spt = num.substr(num.length - 2);
                    let price = num.split(spt).join('.') + spt;

                    item.querySelectorAll('.quantity-selector i').forEach( btn => {
                        btn.addEventListener('click', () => {
                            qty = item.querySelector('.qty').innerText;
                            localStorage.setItem('wasPopup', 'false');
                        })
                    })
                    pushProducts(imgUrl, name, price, currency, id,qty, true);
                })
            },200)
        }
    }

    mut.observe(document, optionMut);

    if(localStorage.getItem('products') && localStorage.getItem('products') != null && localStorage.getItem('products') != ''){
        if (detectMob() == false && document.querySelector('.btn_arrow_prev') && document.querySelector('.popup_slider')) {
            mut.disconnect()
            document.body.classList.add('js-desktop');
            document.querySelector('.btn_arrow_prev').addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                document.querySelector('.popup_slider').scrollLeft -= 195;
                action = 'Scroll items';
                pushDataLayer(action);
            })
            document.querySelector('.btn_arrow_next').addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                document.querySelector('.popup_slider').scrollLeft += 195;
                action = 'Scroll items';
                pushDataLayer(action);
            })

            addEvent(document.body, 'mouseout', function(evt) {
                if (evt.relatedTarget == null && evt.toElement == null) {
                    let productsLocalStorage, wasPopup;
                    if(localStorage.getItem('products')) {
                        productsLocalStorage = JSON.parse(localStorage.getItem('products'));
                        wasPopup = JSON.parse(localStorage.getItem('wasPopup'));
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
                        localStorage.setItem('wasPopup', 'true');
                        action = 'Pop-up opened';
                        pushDataLayer(action);
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
