let recentlyViewedProducts = [];
let action,
    label;

let recentlyOrderedProducts = false,
    changed = false;

let optionFetch = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `api=c&cart_action=last_order&ctoken=${mm.ctoken}`
}

let optionMut = {
    childList: true,
    subtree: true
}

function resData(data) {
    if (mm.userId != 0) {
        let dateArr = data.date.split('-'),
            dateFormat = `${dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0]}`;
        if (document.querySelectorAll('.gallery-parent') && window.location.pathname == '/' && data["items"].length > 0 ) {
            document.querySelectorAll('.gallery-parent')[0].insertAdjacentHTML('beforebegin',`
            <div class="gallery-parent ordered">
                <h2 class="title">Your recent orders</h2>
                <p class="id-order">Order #${data.number}</p>
                <dl class="gallery"></dl>
                <button type="button" class="view-more" hidden>View more products</button>
                
                <div class="ordered-bottom">
                    <div class="d-flex">
                        <div>
                            <p class="c-gray">Order date:</p>
                            <p class="c-gray">Total:</p>
                        </div>
                        <div>
                            <p>${dateFormat}</p>
                            <p class="sum"></p>
                        </div>
                    </div>
                    <a href="https://medicalmega.com/reorder/${data.number}" class="btn-reorder">Reorder</a>
                </div>
                <a href="https://medicalmega.com/myaccount/orderhistory" class="show-more">Show more Orders</a>
            </div>`);

            document.querySelector('.ordered-bottom .sum').innerHTML = `$${data.total.toFixed(2)}`;
            document.querySelector('.btn-reorder').addEventListener('click', () => {
                action = 'Click on Reorder button';
                label = 'PL section Your recent orders';
                pushDataLayer(action,label)
            })
        }

        if (window.location.pathname.includes('/product') && data["items"].length > 0) {
            document.querySelector('.center .products_gallery').insertAdjacentHTML('beforebegin',`
            <div class="ordered-products ordered gallery-parent">
                <h2 class="title">Recently Ordered Products</h2>
                <dl class="gallery"></dl>
                <button type="button" class="view-more" hidden>View more products</button>
            </div>`);
        }
        for (let i = 0; i < data["items"].length; i++) {
            let card = `<dd class="product-card" data-product-id="${data["items"][i].product_id}" data-product-variant-id="${data["items"][i].variant_id}">
                <span>&nbsp;<a href="${data["items"][i].url}"><img src="${data["items"][i].image_url}" alt="${data["items"][i].title}"></a>&nbsp;</span>
                <a href="${data["items"][i].url}">${data["items"][i].title}</a>
                <b>$ ${data["items"][i].price.toFixed(2)}</b>
                <form action="https://medicalmega.com/cart.html" method="post">
                    <input type="hidden" name="product_id" value="${data["items"][i].product_id}">
                    <input type="hidden" name="product_variant_id" value="${data["items"][i].variant_id}">
                    <input type="hidden" name="quantity" value="1">
                </form>
                <div class="add-to-cart"><button type="button">add to cart</button><input type="number" value="${data["items"][i].qty}"></div>
            </dd>`;
            if (document.querySelectorAll('.gallery-parent') && window.location.pathname == '/') {
                document.querySelector('.gallery-parent.ordered .gallery').insertAdjacentHTML('beforeend', card);
            }
            if (window.location.pathname.includes('/product')) {
                document.querySelector('.gallery').insertAdjacentHTML('beforeend', card);
            }
            addToCart();
        }
        if (data["items"].length > 4) {
            document.querySelector('.ordered .view-more').hidden = false;
        }
    }
}
function pushDataLayer(action,label) {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Easy reorder desktop',
        'eventAction': `${action}`,
        'eventLabel': `${label}`
    });
}
function addToCart() {
    if (document.querySelectorAll('.add-to-cart')) {
        document.querySelectorAll('.add-to-cart button').forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
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
                }).then(res => {
                    window.location.pathname = '/cart.html'
                });
                
                action = 'Click on add to cart button';

                if (item.closest('.gallery-parent')) {
                    label = `PL section ${item.closest('.gallery-parent').querySelector('.title').innerText}`;
                } else {
                    label = `PL section Other products`;
                }
                pushDataLayer(action,label)
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
    document.querySelectorAll('.product-card a').forEach( (item) => {
        item.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            action = 'Click on product';
            if (item.closest('.gallery-parent')) {
                label = `PL section ${item.closest('.gallery-parent').querySelector('.title').innerText}`;
            } else {
                label = `PL section Other products`;
            }
            pushDataLayer(action,label)
            window.location.href = item.getAttribute('href')
        });
    });

    document.querySelectorAll('.view-more').forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            item.closest('.gallery-parent').querySelectorAll('.gallery dd:nth-child(n+5)').forEach((el) => {
                el.classList.toggle('visible');
                if (!el.classList.contains('visible')) {
                    e.target.innerHTML = 'View more products';
                    if (el.closest('.viewed')) {
                        action = 'Click on button Hide more products';
                        label = 'PL section Recently viewed Products';
                    }
                    if (window.location.href == 'https://medicalmega.com/' && item.closest('.ordered')) {
                        action = 'Click on button Hide more products';
                        label = 'PL section Recently Ordered Products';
                    }
                    if (item.closest('.ordered-products')) {
                        action = 'Click on button Hide more products';
                        label = 'PDP section Recently ordered Products';
                    }
                } else {
                    e.target.innerHTML = 'Hide more products';
                    if (el.closest('.viewed')) {
                        action = 'Click on button View more products';
                        label = 'PL section Recently viewed Products';
                    }
                    if (item.closest('.ordered-products')) {
                        action = 'Click on button View more products';
                        label = 'PDP section Recently ordered Products';
                    }
                    if (window.location.href == 'https://medicalmega.com/' && item.closest('.ordered')) {
                        action = 'Click on button View more products';
                        label = 'PL section Recently ordered Products';
                    }
                }
                pushDataLayer(action,label)
            })
        });
    });
}

function pushProducts() {
    recentlyViewedProducts.unshift({
        'productid': document.querySelector('input[name="product_id"]').value,
        'price': document.querySelector('.product-price').innerHTML.replace('$','$ '),
        'variationid': document.querySelector('input[name="product_variant_id"]').value,
        'imgsrc': document.querySelectorAll('.product_img')[0].getAttribute('src'),
        'href': window.location.href,
        'name': document.querySelectorAll('.center h3')[0].innerHTML,
    });
    if (localStorage.getItem('recentlyViewedProducts') != null && localStorage.getItem('recentlyViewedProducts') != '' && document.querySelector('.product-price')) {
        recentlyViewedProducts = [...recentlyViewedProducts,...JSON.parse(localStorage.getItem('recentlyViewedProducts'))]
    } else {
        if (document.querySelector('.product-price')) {
            recentlyViewedProducts.unshift({
                'productid': document.querySelector('input[name="product_id"]').value,
                'price': document.querySelector('.product-price').innerHTML.replace('$','$ '),
                'variationid': document.querySelector('input[name="product_variant_id"]').value,
                'imgsrc': document.querySelectorAll('.product_img')[0].getAttribute('src'),
                'href': window.location.href,
                'name': document.querySelectorAll('.center h3')[0].innerHTML,
            });
        }
    }

    recentlyViewedProducts = recentlyViewedProducts.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.place === thing.place && t.productid === thing.productid
        ))
    )
    localStorage.setItem('recentlyViewedProducts', JSON.stringify(recentlyViewedProducts));
    console.log(recentlyViewedProducts)
}

let style = `
         <style>
            #g-switch-user {
                pointer-events: none;}
            .gallery dd span img {
                    max-height: 140px;}
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
            .gallery dd {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: left;}
            .gallery dd span a {
                margin: auto;}
            .gallery dd a {
                font-size: 12px;
                line-height: 16px;
                word-break: break-word;}
            .gallery dd a br {
                display: none;}
            .gallery-parent .gallery dd {
                padding-bottom: 10px;
                width: 140px;
                line-height: 15px;}
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
            .add-to-cart button:focus {
                background: linear-gradient(180deg, #E44640 100%, #C11008 0);}
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
            .gallery-parent.ordered .view-more {
                margin-bottom: 10px; }
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
                opacity: 0;
                height: 0;
                width: 618px; }
            .gallery-parent h2.title, .gallery-parent .title {
                font-size: 20px;
                line-height: 20px;
                padding-top: 30px; }
            .gallery-parent.viewed .gallery dd:nth-child(n+5), .gallery-parent.ordered .gallery dd:nth-child(n+5){ 
                display: none;}
            .gallery-parent.viewed .gallery dd.visible, .gallery-parent.ordered .gallery dd.visible {
                display: flex!important;}
            .view-more {
                width: calc(100% - 20px);}
            .id-order {
                margin: 8px 0 10px 10px;
                font-weight: bold;
                font-size: 14px;
                line-height: 16px;
                color: #C23D31;}
            .d-flex {
                display: flex;}
            .ordered-bottom {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                padding: 12px 0;
                margin: 0 10px;
                border-top: 1px solid #C0C0C0;}
            .ordered-bottom p {
                margin-right: 10px;
                margin-bottom: 12px;
                font-size: 14px;
                line-height: 18px;
                color: #171717;}
            .btn-reorder {
                box-sizing: border-box;
                font-weight: bold;
                font-size: 14px;
                line-height: 33px;
                text-align: center;
                color: #FFFFFF;
                background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
                border: 1px solid #780F11;
                border-radius: 4px;
                max-width: 140px;
                width: 100%;}
            .ordered-bottom p.c-gray {
                margin-bottom: 16px;
                color: #666666;}
            .ordered-bottom p.sum {
                font-weight: bold;
                font-size: 21px;
                line-height: 23px;
            }
            @media only screen and (max-width: 1010px)  {
                .gallery-parent {
                    max-width: 500px;
                    width: 100%;
                }
                .gallery {
                    max-width: 420px;
                    width: 100%;
                    margin: 16px auto 0;
                    justify-content: space-around;
                }
                .ordered-bottom {
                    display: block;
                }
                .ordered-bottom .d-flex {
                    justify-content: space-between;
                }
                .btn-reorder {
                    max-width: 100%;
                    display: block;
                }
                .show-more, .view-more {
                    margin: 0 10px;
                }
            }
            @media only screen and (max-width: 758px)  {
                .gallery-parent {
                    max-width: 458px
                }
                .gallery {
                    max-width: 375px;
                }
            }
            @media only screen and (max-width: 480px)  {
                .gallery {
                    max-width: 300px;
                    justify-content: space-between;
                    margin: 20px auto 10px!important;
                }
            }
        </style>`;

const arrTitle = {
    'Other products': 0,
    'Wound care': '21',
    'Ostomy': '7',
    'Protective Gear': '11208',
    'Hand Sanitizing': '11212',
    'New products': '408',
};

function setCard(productId,productVariantid,url,imageUrl,title,price,idCategory) {
    document.querySelector(`.gallery[data-id="${idCategory}"]`).insertAdjacentHTML('beforeend', `  
    <dd class="product-card" data-product-id="${productId}" data-product-variant-id="${productVariantid}">
        <span>
            <a href="${url}">
                <img src="${imageUrl}" alt="${title}">
            </a>
        </span>
        <a href="${url}">${title}</a>
        <b>
        $
        ${price}</b>
        <form action="https://medicalmega.com/cart.html" method="post">
            <input type="hidden" name="product_id" value="${productId}">
            <input type="hidden" name="product_variant_id" value="${productVariantid}">
            <input type="hidden" name="quantity" value="1">
        </form>
        <div class="add-to-cart">
            <button type="button">add to cart</button>
            <input type="number" value="1">
        </div>
    </dd>`)
}
function setGalleryParent(titleGallery, idCategory) {
    let gallery;
    if (idCategory == 0) {
        gallery = `
        <div class="gallery-parent" >
            <h2 class="title">${titleGallery}</h2>
        </div> `
    } else {
        let changedTitle = titleGallery.split(' ').join('-').toLowerCase();
        gallery =  `
        <div class="gallery-parent" >
            <h2 class="title">${titleGallery}</h2>
            <dl class="gallery" data-id="${idCategory}"></dl>
            <a href="https://medicalmega.com/category/${changedTitle}" class="show-more">Show more</a>
        </div> `
    }
    return gallery;
}

let mut = new MutationObserver(function (muts) {
    if (document.querySelector('.homeslider__container') && changed === false && document.querySelectorAll('.gallery').length == 6) {
        mut.disconnect();
        changed = true;
        document.body.insertAdjacentHTML('afterbegin', style);
        
        for (let key in arrTitle) {
            document.querySelector('.homeslider__container').insertAdjacentHTML('afterend', setGalleryParent(key, arrTitle[key]))
            if (arrTitle[key] != 0) {
                fetch(`/api/products&offset=0&limit=4&ctoken=${mm.ctoken}&category=${arrTitle[key]}`, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    method: "GET",
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    dataProducts = data["products"];
                    for (let i = 0; i < dataProducts.length; i++) {
                        setCard(dataProducts[i]["variants"][0]["product_id"],dataProducts[i]["variants"][0]["variant_id"],dataProducts[i]["url"],dataProducts[i]["variants"][0]["image_url"],dataProducts[i]["title"],dataProducts[i]["variants"][0]["price"].toFixed(2),arrTitle[key])  
                    }
                    document.querySelectorAll('.gallery-parent').forEach((element, index) => {
                        element.style.height = 'auto';
                        element.style.opacity = 1;
                    });
                   
                })
            }
          
        }
        document.querySelectorAll('.show-more').forEach(item => {
            item.addEventListener('click', (e) => {
                action = 'Click on Show more products button';
                label = `PL section ${item.closest('.gallery-parent').querySelector('.title').innerText}`; 
                pushDataLayer(action,label)
            })
        })
     
        const galleryDd = document.querySelectorAll('.gallery dd');
        for (let i = 0; i < galleryDd.length; i++) {
            if (!galleryDd[i].querySelector('.add-to-cart') && galleryDd[i].querySelector('.add-to-cart') == null) {
                galleryDd[i].insertAdjacentHTML('beforeend', `<div class="add-to-cart"><button type="button">add to cart</button><input type="number" value="1"></div>`);
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
                if (i < 12) {
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
            }
            if (cards.length > 4) {
                document.querySelector('.view-more').hidden = false;
            }
        }

        fetch("/cart.html", optionFetch).then(res => res.json())
            .then(data => {
                console.log(data)
                resData(data)
            })
            .catch(error => console.log('error', error));
        addToCart();
    }
    mut.observe(document, optionMut);
    if (window.location.pathname.includes('/product') && recentlyOrderedProducts === false && document.querySelector('input[name="product_id"]') && document.querySelectorAll('.product_img[src]')[0]) {
        mut.disconnect();
        recentlyOrderedProducts = true;
        document.body.insertAdjacentHTML('afterbegin', style);
        document.body.insertAdjacentHTML('afterbegin', `
        <style>
            #mainbody {
                overflow: visible;
            }
            .ordered-products.gallery-parent .gallery dd {
                width: 25%;
                box-sizing: border-box;
                padding-right: 10px;
            }
            .ordered-products.gallery-parent {
                width: calc(100% + 15px);
            }
            .ordered-products.gallery-parent h2.title, .ordered-products.gallery-parent .title {
                padding-left: 0;
                font-size: 24px;
                line-height: 33px;
            }
            .ordered-products .view-more {
                margin: 10px 0 0 0;
                width: calc(100% - 10px);
            }
            .gallery {
                margin-left: 0!important;
            }
            .show-more {
                margin: 10px 0!important;
            }
            @media only screen and (min-width: 1011px)  {
                .ordered-products.gallery-parent {
                    width: calc(100% - 20px);
                    margin: 0 0 0 20px;
                }
            }
            @media only screen and (max-width: 1010px)  {
                .ordered-products.gallery-parent {
                    width: 100%;
                }
                .ordered-products.gallery-parent .gallery {
                    max-width: calc(100% + 15px);
                }
                .ordered-products.gallery-parent .gallery dd {
                    width: 33.33%;
                    padding-right: 15px;
                    box-sizing: content-box;
                }
            }
            @media only screen and (max-width: 758px)  {
                .ordered-products.gallery-parent h2.title, .ordered-products.gallery-parent .title {
                    font-size: 20px;
                    line-height: 20px;
                    padding-top: 0;
                }
                dl.gallery dd:last-child {
                    margin-right: 0;
                9}
                .ordered-products.gallery-parent .gallery dd {
                    width: 140px;
                }
            }
            @media only screen and (max-width: 479px)  {
                dl.gallery {
                    width: calc(100% + 15px);
                }
            }
        </style>`)
        if (localStorage.getItem('recentlyViewedProducts') != null && localStorage.getItem('recentlyViewedProducts') != []){
            let storageItems = JSON.parse(localStorage.getItem('recentlyViewedProducts'));
            for (let i = 0; i < storageItems.length; i++) {
                recentlyViewedProducts.push(JSON.parse(localStorage.getItem('recentlyViewedProducts'))[i]);
            }
            pushProducts();
        } else {
            pushProducts();
        }

        fetch("/cart.html", optionFetch).then(res => res.json())
            .then(data => {
                console.log(data)
                resData(data)
            })
            .catch(error => console.log('error', error));
    }

    mut.observe(document, optionMut);
    if (document.querySelectorAll('.add-to-cart button') && document.querySelectorAll('.add-to-cart button') != []){
        mut.disconnect();
        addToCart();
    }
    mut.observe(document, optionMut);
})

mut.observe(document, optionMut);

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1483840,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('event', 'easy_reorder');
window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Easy reorder desktop',
    'eventAction': 'loaded'
});
