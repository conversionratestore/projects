
document.body.insertAdjacentHTML('afterbegin', `
<style>
@media screen and (max-width: 768px) {
    .product-mobile-title .wishlist-mobile-wrap {
        display: none; }
    .catalog-product-view .product-info-main .media {
        position: relative;}
    .product-great {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 3;
        padding: 0 15px 0 5px;}
    .product-great-item {
        background: #66CCCC;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 19px;
        padding: 7.5px 8px;
        margin-left: 10px;
        margin-bottom: 10px;
        letter-spacing: 0.15px;
        color: #232849;
        font-size: 14px;}
    .product-options-wrapper, .htm-trigger, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-label, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-original {
        display: none; }
    .your-text {
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1;
        letter-spacing: 0.0015em;
        color: #232849;
        margin-right: 8px; }
    .catalog-product-view .product-info-main .product-details .bottom-actions .price-container {
        flex-direction: row;
        align-items: center;}
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row {
        width: 100%;}
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .btn {
        width: 100%;
        margin: 0;}
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
        margin-top: 0!important;}
    .bottom-actions__row .product-social-links {
        order: 2;}
    .card {
        background: #FFFFFF;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 100px;
        padding: 16px 8px 10px;
        line-height: 120%;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        position: relative;}
    .card_bottom {
        padding: 0 8px;}
    .card img {
        margin: 0 auto 12px;
        width: 100%;
        height: 183px;
        object-fit: contain;}
    .card a {
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.0018em;
        color: #141729;
        margin-bottom: 16px; }
    .card-price {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.180451px;
        color: #66CCCC;
        margin-bottom: 21px;}
    .btn-view {
        font-weight: 600;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
        color: #232847;
        border: 1px solid #141729;
        border-radius: 8px; }
    .btn-order {
        font-weight: 600;
        font-size: 14px;
        line-height: 40px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-top: 10px;}
    .popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        background: rgba(81, 81, 81, 0.73);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        padding: 14px;
        z-index: 999;}
    .popup.active {
        opacity: 1;
        pointer-events: auto; }
    .popup-container {
        max-width: 343px;
        width: 100%;
        margin: auto;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        padding: 16px 24px 44px;}
    .btn-close {
        width: 13px;
        height: 13px;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/close.svg') no-repeat center / contain;
        display: block;
        margin: 0 -8px 12px auto; }
    .popup-title {
        text-align: center;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 30px;
        letter-spacing: 0.0015em;
        text-transform: uppercase;
        color: #232847; }
    .popup-title span {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        line-height: 22px;
        font-weight: normal;}
    .bottom-actions__row {
        display: block; }
    .hp_strip__container {
        margin: 0 -16px;
        width: calc(100% + 32px);}
    .hp_strip__container ul i {
        display: block;}
}
</style>`);

document.querySelector('.product.media').insertAdjacentHTML('afterbegin', `<div class="product-great"></div>`);
document.querySelector('.catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-wrapper').insertAdjacentHTML('beforebegin', `<p class="your-text">Your price </p>`);

document.body.insertAdjacentHTML('beforeend', `
<div class="popup active">
    <div class="popup-container">
       <button class="btn-close" type="button"></button>
        <h2 class="popup-title">Don’t leave!<span>We have a lot more to offer</span></h2>
        <div class="slider"></div>
    </div>
</div>`);

let card = `
<div class="card">
    <div class="product-great"></div>
    <a href="">
        <img src="" alt="">
        <span>Editions Ghost White with Pure Tapes</span>
    </a>
    <div class="card_bottom">
        <div class="card-price">£19.90</div>
        <a href="#" class="btn-view">VIEW PRODUCT</a>
        <button class="btn-order" type="button">Order free sample</button>
    </div>
</div>`;

let arrGreatFor = [];

document.querySelectorAll('.spec-table__inner__table tr').forEach((el, index) => {
    if(el.querySelector('th').innerHTML === 'Great For:') {
        let tdSplit = el.querySelector('td').innerHTML.split(', ');
        for (let i = 0; i < tdSplit.length; i++) {
            arrGreatFor.push(tdSplit[i]);
            document.querySelector('.product-great').insertAdjacentHTML('beforeend', `<a href="https://www.makemyblinds.co.uk/blinds/${tdSplit[i]}" class="product-great-item">${tdSplit[i]}</a>`);
        }
    }
});

function myScrollSpeedFunction(){
    if(document.body.classList.contains('mobile')) {
        if(my_scroll() < -200){
            document.querySelector(".popup").classList.add('active');
        }
    }
}

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

window.addEventListener('scroll', myScrollSpeedFunction);

document.querySelector(".btn-close").addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    document.querySelector('.popup').classList.remove('active');
});
document.querySelector(".popup-container").addEventListener('click', (e) => {
    e.stopPropagation();
});

fetch('https://www.makemyblinds.co.uk/rest/V1/integration/admin/token', {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify( {
        "username": "conversionrate",
        "password": "gasmaj-mornut-sowZy9"
    })

}).then(res => res.json()).then(data => console.log(data))

fetch('https://makemyblinds.co.uk/rest/V1/products?searchCriteria[page_size]=1', {
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 46q6oqm37chhxvqd8y6l0iaawqa6xyfh"
    },
    method: "POST",
    body: JSON.stringify( {
        "username": "conversionrate",
        "password": "gasmaj-mornut-sowZy9"
    })
}).then(res => res.json()).then(data => console.log(data))


// fetch('http://makemyblinds.co.uk/rest/V1/products', {
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     method: "GET",
// }).then((data) => {
//     console.log(data)
// })

// let arrSolution = [];
// let hrefSolutionItem = document.querySelectorAll('.submenu-solution-col:first-child .submenu-solution-item');
// for (let i = 0; i < hrefSolutionItem.length; i++) {
//     (function(){
//         let http = new XMLHttpRequest();
//         http.open('GET', `${hrefSolutionItem[i].getAttribute('href')}`);
//         http.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 let doc = new DOMParser().parseFromString(this.responseText, "text/html");
//                 if (doc.querySelectorAll('.ais-InfiniteHits-list')[i]) {
//                     mut.disconnect();
//                     console.log(doc.querySelector('.ais-InfiniteHits-list')[i]);
//                 } else {
//                     console.log(doc.querySelector('.ais-InfiniteHits-list')[i]);
//                     console.log('not find');
//
//                 }
//
//                 // arrSolution.push({
//                 //     'name': `${doc.querySelectorAll('.ais-InfiniteHits-list .ais-InfiniteHits-item .result-title')[i].innerText}`,
//                 //     'image': `${doc.querySelectorAll('.ais-InfiniteHits-list .ais-InfiniteHits-item .result-thumbnail img')[i].getAttribute('src')}`,
//                 //     'price': `${doc.querySelectorAll('.ais-InfiniteHits-list .ais-InfiniteHits-item .price-wrapper strong')[i].innerText}`
//                 // })
//                 // console.log(arrSolution);
//             }
//         }
//         http.send(null);
//     })();
// }

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1709958,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'pdp_exit_intent_mobile');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — PDP improvement exit intent mobile',
    'eventAction': 'loaded'
});
