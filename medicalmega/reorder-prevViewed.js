document.body.insertAdjacentHTML('afterbegin', `
<style>
    [hidden] {
        display: none!important; }
    button {
        outline: none;}
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0; }
    input[type=number] {
        -moz-appearance: textfield;}
    .gallery {
        margin: 10px 0 0 10px;
        flex-wrap: wrap;
        display: flex;}
    .gallery dd span {
        width: 100%;
        height: 140px;
        margin-bottom: 5px;
        display: inline-flex;}
    .gallery dd span a {
        margin: auto;}
    .gallery dd a {
        word-break: break-word;}
    .gallery dd a br {
        display: none;}
    .gallery dd {
        padding-bottom: 10px;
        width: 140px;
        line-height: 15px;
        display: flex!important;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;}
    .gallery dd:nth-child(4n+4) {
        padding-right: 0;}
    .gallery dd b {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        font-weight: 600;
        font-size: 18px;
        padding-top: 7px;
        margin: auto 0 0;
        line-height: 1;}
    .gallery dd b s{
        font-weight: 450;
        font-size: 12px;
        line-height: 15px;
        text-decoration-line: line-through;
        margin-left: 5px;
        color: #9E9E9E;}
    .gallery-parent {
        padding-bottom: 10px;}
    h2.title, .title {
        text-align: left;
        padding-left: 10px;
        font-size: 24px;
        line-height: 33px;
        font-weight: 700;
        color: #222222;
        text-transform: capitalize;}
    .add-to-cart {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0 0;
        width: 100%;}
    .add-to-cart button {
        color: #FFFFFF;
        padding: 0 9px;
        margin-bottom: 0;
        line-height: 33px!important;
        outline: none;
        cursor: pointer;
        background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
        border: 0.5px solid #780F11;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        text-transform: capitalize;}
    .add-to-cart input {
        font-size: 18px;
        line-height: 20px;
        color: #000000;
        padding: 6.5px 0;
        width: 33px;
        text-align: center;
        background: #EEEEEE;
        border: 0.5px solid #CCCCCC;
        border-radius: 4px;}   
    .show-more, .view-more {
        cursor: pointer;
        padding: 0 28px;
        font-weight: 450;
        font-size: 15px;
        line-height: 33px;
        text-align: center;
        text-transform: capitalize;
        color: #666666;
        display: block;
        margin: 10px 10px 0;
        background: #EEEEEE;
        border: 0.5px solid #CCCCCC;
        border-radius: 4px;}    
    .homeslider__container {
        margin: 10px 0 10px 10px!important;}
    .homepage-container {
        display: grid;}
    .trustpilot-widget-container {
        order: 3;}
    .main-page-message {
        width: 536px;
        margin: 18px 0 0 10px!important;}
    .gallery-parent {
        width: 618px; }
    .gallery-parent h2.title, .gallery-parent .title {
        font-size: 20px;
        line-height: 20px;
        padding-top: 30px; }
    .gallery-parent.viewed .gallery dd:nth-child(n+5) {
        display: none!important;}
    .gallery-parent.viewed .gallery dd.visible {
        display: flex!important;}
    .view-more {
        width: calc(100% - 20px);}
</style>`);

if (window.location.pathname == '/') {
    document.querySelectorAll('.gallery').forEach((item, index) => {
        let galleryWrapper = document.createElement('div');
        galleryWrapper.className = 'gallery-parent';

        let htmlTitle = `<h2 class="title"></h2>`;
        if (index < 6) {
            galleryWrapper.insertAdjacentHTML('afterbegin', htmlTitle);
        }

        item.parentNode.appendChild(galleryWrapper);

        return galleryWrapper.appendChild(item);
    });

    const galleryDd = document.querySelectorAll('.gallery dd');
    for (let i = 0; i < galleryDd.length; i++) {
        galleryDd[i].insertAdjacentHTML('beforeend', `<div class="add-to-cart"><button type="button">add to cart</button><input type="number" value="1"></div>`);
    }

    const galleryParent = document.querySelectorAll('.gallery-parent');
    for (let i = 0; i < galleryParent.length; i++) {
        if (i < 5) {
            galleryParent[i].insertAdjacentHTML('beforeend', `<a href="#" class="show-more">Show more</a>`);
        }
    }
    const arrTitle = ['New products', 'Ostomy', 'Wound care', 'Hand Sanitizing', 'Protective Gear', 'All products'],
        galleryTitle = document.querySelectorAll('.title'),
        showMore = document.querySelectorAll('.show-more');

    showMore.forEach((item) => {
        item.addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'CRO - A/B - PL and cart improvements - Live',
                'eventAction': 'click on button — show more'
            });
        });
    });

    for (let i = 0; i < arrTitle.length; i++) {
        galleryTitle[i].innerHTML = arrTitle[i];
        let changedTitle = arrTitle[i].split(' ').join('-').toLowerCase();
        if (i < 5) {
            showMore[i].setAttribute('href', `https://medicalmega.com/category/${changedTitle}`);
        }
    }

    if (localStorage.getItem('recentlyViewedProducts')) {
        document.querySelectorAll('.gallery-parent')[0].insertAdjacentHTML('beforebegin',`
        <div class="gallery-parent viewed">
            <h2 class="title">Recently viewed Products</h2>
            <dl class="gallery"></dl>
            <button type="button" class="view-more" hidden>View more products</button>
        </div>`);

        let cards = JSON.parse(localStorage.getItem('recentlyViewedProducts'));
        for (let i = 0; i < cards.length; i++) {
            document.querySelector('.gallery-parent.viewed .gallery').insertAdjacentHTML('beforeend',
            `<dd class="product-card" data-product-id="${cards[i].productid}" data-product-variant-id="${cards[i].variationid}">
                    <span>&nbsp;<a href="${cards[i].href}"><img src="${cards[i].imgsrc}" alt="${cards[i].name}"></a>&nbsp;</span>
                    <a href="${cards[i].href}">${cards[i].name}</a>
                    <b>${cards[i].price}</b>
                    <form action="https://medicalmega.com/cart.html" method="post">
                        <input type="hidden" name="product_id" value="${cards[i].productid}">
                        <input type="hidden" name="product_variant_id" value="${cards[i].variationid}">
                        <input type="hidden" name="quantity" value="1">
                    </form>
                    <div class="add-to-cart"><button type="button">add to cart</button><input type="number" value="1"></div>
                   </dd>`)
        }
        if (cards.length > 4) {
            document.querySelector('.view-more').hidden = false;
        }
        document.querySelector('.view-more').addEventListener('click', (e) => {
            document.querySelectorAll('.gallery-parent.viewed .gallery dd:nth-child(n+5)').forEach((el) => {
                e.target.hidden = true;
                el.classList.add('visible');
            })
        });
    }
}

if (document.querySelectorAll('.add-to-cart')) {
    document.querySelectorAll('.add-to-cart button').forEach((item, index) => {
        item.addEventListener('click', () => {
            let valueP = 1,
                num = +document.querySelector('.by_num span').innerHTML;

            valueP = +item.nextElementSibling.value;

            document.querySelector('.by_num span').innerHTML = num + valueP;

            let dataProductVariantId = item.closest('.product-card').getAttribute('data-product-variant-id'),
                productId = item.closest('.product-card').getAttribute('data-product-id');

            fetch('/cart.html', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: "POST",
                body: `product_variant_id=${dataProductVariantId}&quantity=${valueP}&product_id=${productId}&add_to_cart=variant`
            })
        });
    });
    document.querySelectorAll('.add-to-cart').forEach( (item) => {
        item.addEventListener('change', () => {
            if (item.querySelector('input').value <= 1) {
                item.querySelector('input').value = 1;
            }
        });
    });
}

let recentlyViewedProducts = [];
function pushProducts() {
    recentlyViewedProducts.push({
        'productid': document.querySelector('input[name="product_id"]').value,
        'price': document.querySelector('.product-price').innerHTML,
        'variationid': document.querySelector('input[name="product_variant_id"]').value,
        'imgsrc': document.querySelectorAll('.product_img')[0].getAttribute('src'),
        'href': window.location.href,
        'name': document.querySelectorAll('.center h3')[0].innerHTML,
    });
}

if (location.pathname.includes('product')) {
    if (localStorage.getItem('recentlyViewedProducts') != null && localStorage.getItem('recentlyViewedProducts') != []){
        let storageItems = JSON.parse(localStorage.getItem('recentlyViewedProducts'));
        for (let i = 0; i < storageItems.length; i++) {
            recentlyViewedProducts.push(JSON.parse(localStorage.getItem('recentlyViewedProducts'))[i]);
        }
        pushProducts();
    } else {
        pushProducts();
    }

    recentlyViewedProducts = recentlyViewedProducts.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.place === thing.place && t.productid === thing.productid
        ))
    )
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(recentlyViewedProducts));
}

// (function(){
//     var http = new XMLHttpRequest();
//     http.open('GET', `link`);
//     http.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var doc = new DOMParser().parseFromString(this.responseText, "text/html");
//
//         }
//     }
//     http.send(null);
// })()
