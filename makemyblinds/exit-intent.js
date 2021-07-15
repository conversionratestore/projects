
document.body.insertAdjacentHTML('afterbegin', `
<style>
    .product-mobile-title .wishlist-mobile-wrap {
        display: none; }
    .catalog-product-view .product-info-main .media {
        position: relative;
    }
    .product-great {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 3;
        padding: 0 15px 0 5px;
     }
    .product-great-item {
        background: #66CCCC;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 19px;
        padding: 7.5px 8px;
        margin-left: 10px;
        margin-bottom: 10px;
        letter-spacing: 0.15px;
        color: #232849;
        font-size: 14px;
    }
    .product-options-wrapper, .htm-trigger, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-label, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-original {
        display: none;
    }
    .your-text {
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1;
        letter-spacing: 0.0015em;
        color: #232849;
        margin-right: 8px;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .price-container {
        flex-direction: row;
        align-items: center;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row {
        width: 100%;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .btn {
        width: 100%;
        margin: 0;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
        margin-top: 0!important;
    }
    .bottom-actions__row .product-social-links {
        order: 2;
    }
</style>`);

document.querySelector('.product.media').insertAdjacentHTML('afterbegin', `<div class="product-great"></div>`);
document.querySelector('.catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-wrapper').insertAdjacentHTML('beforebegin', `<p class="your-text">Your price </p>`);

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
