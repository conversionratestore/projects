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
        flex-wrap: wrap;
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
        border-radius: 8px;
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
    a.btn-view {
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        display: block;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
        color: #232847!important;
        border: 1px solid #141729;
        border-radius: 8px; }
    .btn-order {
        width: 100%;
        border-radius: 8px;
        background: #232849;
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
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .product-social-links, .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
        width: 100%;}
    .category {
        padding-top: 40px; }
    .category-title {
        font-family: 'Barlow-medium', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 120%;
        text-align: center;
        margin-bottom: 29px;
        color: #232849;}
    .view-more {
        font-family: 'Overpass', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.15px;
        text-decoration-line: underline;
        padding: 12px 44px 12px 16px;
        display: block;
        margin-left: auto;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/arrow-right.svg') no-repeat right 10px center / 12px;
        color: #232849;}
    .category-slider {
        padding-bottom: 44px;
        position: relative;}
    .slider__wrapper {
        overflow: hidden; }
    .slider__item {
          flex: 0 0 50%;
          max-width: 50%;}
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev, .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        top: auto;
        bottom: 10px;
        transform: none;
        margin-top: 0;
        width: 24px;
        height: 24px;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/arrow.svg') no-repeat center / 60%; }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        transform: scaleX(-1);
        left: 16px;}
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        right: 16px;}
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

// function cardPopup(img,name,price) {
// `<div class="card">
//     <div class="product-great"></div>
//     <a href="${name}">
//         <img src="https://www.makemyblinds.co.uk/media/catalog/product${img}" alt="${name}">
//         <span>${name}</span>
//     </a>
//     <div class="card_bottom">
//         <div class="card-price">£${price}</div>
//         <a href="#" class="btn-view">VIEW PRODUCT</a>
//         <button class="btn-order" type="button">Order free sample</button>
//     </div>
// </div>`
// }


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

let titleArr = ['Privacy','Cordless','No Drill','Fire Retardant','Thermal Blinds','Blinds for Better Sleep'];
for (let i = 0; i < titleArr.length; i++) {
    document.querySelector('.hp_strip').insertAdjacentHTML('afterend', `
    <div class="category">
        <h3 class="category-title">${titleArr[i]}</h3>
        <div class="category-slider"></div>
    </div>`);
}
document.querySelector('.product-specs--new').insertAdjacentHTML('beforebegin',`<button type="button" class="view-more">View more</button>`)
function card(index,img,name,price,sku) {
    let card = `
    <div class="card">
        <div class="product-great"></div>
        <a href="${name}">
            <img src="https://www.makemyblinds.co.uk/media/catalog/product${img}" alt="${name}">
            <span>${name}</span>
        </a>
        <div class="card_bottom">
            <div class="card-price">£${price}</div>
            <div class="product-social-links">
                <div class="product-addto-links" data-role="add-to-links">
                    <a href="#" class="action towishlist btn plain full-width blue-text" data-action="add-to-wishlist" data-event="addToWishlist" data-event-attributes="{&quot;id&quot;:&quot;${sku}&quot;,&quot;name&quot;:&quot;${name}&quot;,&quot;price&quot;:${price}" data-event-label="${name}">
                        <i class="mmb-icon love"></i>
                        <span>Free sample</span>
                    </a>
                    <a href="#" data-role="add-to-links" class="action tocompare" data-event="addToCompare" data-event-label="Editions Golden Pecan">
                        <span>Add to Compare</span>
                    </a>
                </div>
              </div>
            <button class="btn-order" type="button">BUY NOW</button>
        </div>
    </div>`;
    document.querySelectorAll('.category-slider')[index].insertAdjacentHTML('beforeend', card);
}

let token = [];
let thermalItems = [];
let privacyItems = [];
let cordlessItems = [];
let noDrillItems = [];
let betterSleepItems = [];
let fireRetardantItems = [];
fetch('https://www.makemyblinds.co.uk/rest/V1/integration/admin/token', {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify( {
        "username": "conversionrate",
        "password": "gasmaj-mornut-sowZy9"
    })

}).then(res => res.json()).then(data => {
    token.push(data);
    console.log('data from server', token[0]);
    fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=176& searchCriteria[pageSize]=6& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Thermal', data);
        thermalItems.push(data);

        for (let i = 0; i < thermalItems[0]["items"].length; i++) {
          card(1,thermalItems[0]["items"][i]["media_gallery_entries"][0]["file"],thermalItems[0]["items"][i]["name"],thermalItems[0]["items"][i]["price"],thermalItems[0]["items"][i]["sku"]);
        }
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
    fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=232& searchCriteria[pageSize]=6& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Privacy', data);
        privacyItems.push(data);
        for (let i = 0; i < privacyItems[0]["items"].length; i++) {
            card(5,privacyItems[0]["items"][i]["media_gallery_entries"][0]["file"],privacyItems[0]["items"][i]["name"],privacyItems[0]["items"][i]["price"],privacyItems[0]["items"][i]["sku"]);
        }
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
    fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=229& searchCriteria[pageSize]=6& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Cordless', data);
        cordlessItems.push(data);
        for (let i = 0; i < cordlessItems[0]["items"].length; i++) {
            card(4,cordlessItems[0]["items"][i]["media_gallery_entries"][0]["file"],cordlessItems[0]["items"][i]["name"],cordlessItems[0]["items"][i]["price"],cordlessItems[0]["items"][i]["sku"]);
        }
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
    fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_opacity&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=241&searchCriteria[pageSize]=6& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Better sleep', data);
        betterSleepItems.push(data);
        for (let i = 0; i < betterSleepItems[0]["items"].length; i++) {
            card(0,betterSleepItems[0]["items"][i]["media_gallery_entries"][0]["file"],betterSleepItems[0]["items"][i]["name"],betterSleepItems[0]["items"][i]["price"],betterSleepItems[0]["items"][i]["sku"]);
        }
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=231&searchCriteria[pageSize]=6& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('No Drill', data);
        noDrillItems.push(data);
        for (let i = 0; i < noDrillItems[0]["items"].length; i++) {
            card(3,noDrillItems[0]["items"][i]["media_gallery_entries"][0]["file"],noDrillItems[0]["items"][i]["name"],noDrillItems[0]["items"][i]["price"],noDrillItems[0]["items"][i]["sku"]);
        }
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    // fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=183&searchCriteria[pageSize]=6& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${token[0]}`
    //     }
    // }).then(res => res.json()).then(data => {
    //     console.log('Fire Retardant', data);
    //     fireRetardantItems.push(data);
    //     for (let i = 0; i < fireRetardantItems[0]["items"].length; i++) {
    //         card(2,fireRetardantItems[0]["items"][i]["media_gallery_entries"][0]["file"],fireRetardantItems[0]["items"][i]["name"],fireRetardantItems[0]["items"][i]["price"],fireRetardantItems[0]["items"][i]["sku"]);
    //     }
    // }).catch(err => {
    //     console.log('Failed fetch ', err);
    // });
}).catch(err => {
    console.log('Failed fetch ', err);
});

document.head.insertAdjacentHTML('beforeend',`
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
`);
document.body.insertAdjacentHTML('beforeend',`
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
`);

let linkCustom = document.createElement('link');
linkCustom.href =
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
linkCustom.rel = 'stylesheet';
document.head.appendChild(linkCustom);

let scriptCustom = document.createElement('script');
scriptCustom.src =
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let categoryInterval = setInterval(() => {
    if (typeof tns == 'function' && document.querySelectorAll('.category')[5].querySelectorAll('.card')[5]) {
        clearInterval(categoryInterval)

        document.querySelectorAll('.category-slider').forEach(slider => {
            tns({
                container: slider,
                items: 2,
                autoplay: false,
                controls: false,
                loop: true,
                autoplayButton: false,
                autoplayButtonOutput: false,
                nav: true,
                mouseDrag: true,
                preventScrollOnTouch: 'auto',
                swipeAngle: false,
            });
        });

        // let sliderCategories = tns({
            // container: document.querySelectorAll('.category-slider'),
            // items: 2,
            // autoplay: false,
            // controls: false,
            // loop: true,
            // autoplayButton: false,
            // autoplayButtonOutput: false,
            // nav: true,
            // mouseDrag: true,
            // preventScrollOnTouch: 'auto',
            // swipeAngle: false,
            // prevButton: document.querySelector('.lyon-item__arrow_prev'),
            // nextButton: document.querySelector('.lyon-item__arrow_next'),
        // });
    }
}, 1000);
// (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:1709958,hjsv:6};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
// })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
// window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
// hj('trigger', 'pdp_exit_intent_mobile');
//
// window.dataLayer = window.dataLayer || [];
// dataLayer.push({
//     'event': 'event-to-ga',
//     'eventCategory': 'Exp — PDP improvement exit intent mobile',
//     'eventAction': 'loaded'
// });
