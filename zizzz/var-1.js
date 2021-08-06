
let arrLink = ['https://www.zizzz.de/shop/duvetanzug-biobaumwolle-weiss.html','https://www.zizzz.de/shop/kissen-40x80.html ','https://www.zizzz.de/sommer-schlafsack-90.html ','https://www.zizzz.de/shop/swisswool-duvets-4-seasons-eu.html ']
let products = [];
for (let i = 0; i < arrLink.length; i++) {
    (function(){
        var http = new XMLHttpRequest();
        http.open('GET', `${arrLink[i]}`);
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var doc = new DOMParser().parseFromString(this.responseText, "text/html");
                products.push({
                    "title": doc.querySelector('.page-title .base').innerHTML,
                    "img": doc.querySelectorAll('.fotorama__stage__frame img')[0].getAttribute('src'),
                    "reviewsHref": doc.querySelector('.reviews-actions .view').getAttribute('href'),
                    "reviewsCount": doc.querySelector('.reviews-actions .view span').innerHTML,
                    "price": doc.querySelector('.price').innerHTML.replace('€','')
                })
            }
        }
        http.send(null);
    })();

}

let mut = new MutationObserver(function (muts) {
    if(document.querySelector('.post-post_content')) {
        mut.disconnect();
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .banner {
                display: block;
                margin-top: 20px;
                width: 100%;}
            .d-flex {
                flex-wrap: wrap;
                justify-content: space-between;
                display: flex;}
            #popular .product-item {
                list-style-type: none;
                width: 24%;}
            #popular .product-item-name {
                text-align: center; }
            #popular .product-reviews-summary {
                display: flex;
                justify-content: center; }
            #popular .rating-summary .rating-result {
                width: auto;}
            #popular .rating-summary .rating-result>span:before, #popular .rating-summary .rating-result:before {
                font-size: 10px; }
            #popular .product-item .product-reviews-summary .reviews-actions {
                display: flex;
                align-items: center;
                margin-top: 0;}
            #popular .product-item-actions {
                display: flex;;
                justify-content: space-between;
                align-items: center;
                padding: 5px;}
            #popular .product-item-actions .actions-primary+.actions-secondary>.action {
                line-height: 1;
                width: 20px;}
            #popular .product-item-actions .actions-primary+.actions-secondary>.action:before {
            font-size: 13px;}
            #popular .product-item .tocart {
                padding: 7px 10px;
                font-size: 1.2rem;}
            #popular .product-item span.price-container {
                display: block;
                text-align: center; }
            #popular h3 {
                font-weight: 700;
                line-height: 25px;
                padding: 21px 0 15px;
                text-align: center;
                max-width: 290px;
                margin: 0 auto;
                color: #000000;
            }
            @media only screen and (max-width: 880px) {
                #popular .product-item {
                    margin-bottom: 10px;
                    width: 49%;}
                #popular .product-item-info {
                    margin: 0 auto;}
                #popular .product-image-photo {
                    height: 100%;}
                #popular .product-image-wrapper {
                    padding-bottom: 70%!important; }
                #popular .product-item .price-box {
                    margin: 10px 0;}
            }
            @media only screen and (max-width: 767px) {
                #popular .product-item {
                    margin-bottom: 10px;
                    width: 24%;}
            
            }
            @media only screen and (max-width: 660px) {
                #popular .product-item {
                    width: 49%; }
            }
            @media only screen and (max-width: 375px) {
                .d-flex {
                    margin: 0 -25px;}
            }
        </style>`);

        document.querySelectorAll('h2')[0].insertAdjacentHTML('beforebegin',`<a href="#" class="banner"><img src='https://conversionratestore.github.io/projects/zizzz/img/banner-mini.jpg' alt='banner'></a>`);
        document.querySelectorAll('h2')[2].insertAdjacentHTML('beforebegin',`<div id="popular"><h3 class="fw-bold">Most purchased products for the best baby sleep</h3><div class="d-flex"></div></div>`);


        // let products = [
        //     {
        //         link: 'https://www.zizzz.de/shop/duvetanzug-biobaumwolle-weiss.html ',
        //         title: 'BETTWÄSCHE – BETTBEZUG AUS BIO-BAUMWOLLE (PERKAL) – WEISS & GRAU – 6 GRÖSSEN BESTELLBAR AB',
        //         img: 'https://www.zizzz.de/pub/media/catalog/product/cache/c765a4d669c886d3d06da4793fdc6b0d/c/l/clara-53.jpeg',
        //         reviews: 'https://www.zizzz.de/shop/duvetanzug-biobaumwolle-weiss.html#reviews',
        //         price: ''
        //     }
        // ]


        for (let i = 0; i < products.length; i++) {
            document.querySelector('#popular .d-flex').insertAdjacentHTML('beforeend', `
        <li class="item product product-item"> 
            <div class="product-item-info" data-container="product-grid"> 
                <a href="${arrLink[i]}" class="product photo product-item-photo" tabindex="-1"> 
                    <span class="product-image-container" style="width:240px;">
                    <span class="product-image-wrapper" style="padding-bottom: 125%;">
                        <img class="product-image-photo" data-pagespeed-high-res-src="${products[i].img}" max-width="240" max-height="300" alt="${products[i].title}" data-pagespeed-url-hash="339194918" src="${products[i].img}">
                    </span>
                    </span>
                </a> 
                <div class="product details product-item-details"> 
                    <strong class="product name product-item-name">
                        <a class="product-item-link" href="${arrLink[i]}">products[i].title</a>
                    </strong> 
                    <div class="product-reviews-summary short"> 
                    <div class="rating-summary">
                        <span class="label"><span>Bewertung:</span></span> 
                        <div class="rating-result" title="100.00%">
                        <span style="width:100.00%"><span>100.00%</span></span>
                        </div>
                    </div>
                    <div class="reviews-actions">
                        <a class="action view" href="${products[i].reviewsHref}">${products[i].reviewsCount}&nbsp;
                        <span>Review</span>
                        </a>
                    </div>
                    </div> 
                    <div class="price-box price-final_price" data-role="priceBox" data-product-id="542" data-price-box="product-id-542"> 
                    <span class="price-container price-final_price tax weee"> <span class="price-label">Price</span> 
                    <span id="product-price-542" data-price-amount="${products[i].price}" data-price-type="finalPrice" class="price-wrapper ">
                        <span class="price">${products[i].price}&nbsp;€</span>
                    </span> 
                    </span> 
                </div>
                <div class="product-item-inner">
                    <div class="product actions product-item-actions">
                    <div class="actions-primary"> 
                        <form data-role="tocart-form" data-product-sku="19Z501" action="https://www.zizzz.de/checkout/cart/add/uenc/aHR0cHM6Ly93d3cueml6enouZGUvc2hvcC9iYWJ5c2NobGFmc2Fjay9zY2hsYWZzYWNrLTExMC5odG1s/product/542/" method="post">
                        <input type="hidden" name="product" value="542">
                        <input type="hidden" name="uenc" value="aHR0cHM6Ly93d3cueml6enouZGUvY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZW1sNmVub3VaR1V2YzJodmNDOWlZV0o1YzJOb2JHRm1jMkZqYXk5elkyaHNZV1p6WVdOckxURXhNQzVvZEcxcy9wcm9kdWN0LzU0Mi8,">
                        <input name="form_key" type="hidden" value="XANnrqqwbFfDDRLR"> 
                        <button type="submit" data-preorder="{&quot;action&quot;:&quot;https:\/\/www.zizzz.de\/checkout\/cart\/add\/uenc\/aHR0cHM6Ly93d3cueml6enouZGUvc2hvcC9iYWJ5c2NobGFmc2Fjay9zY2hsYWZzYWNrLTExMC5odG1s\/product\/542\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;542&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cueml6enouZGUvY2hlY2tvdXQvY2FydC9hZGQvdWVuYy9hSFIwY0hNNkx5OTNkM2N1ZW1sNmVub3VaR1V2YzJodmNDOWlZV0o1YzJOb2JHRm1jMkZqYXk5elkyaHNZV1p6WVdOckxURXhNQzVvZEcxcy9wcm9kdWN0LzU0Mi8,&quot;,&quot;preorder&quot;:{&quot;status&quot;:0}}}" title="In den Warenkorb" class="action tocart primary">
                            <span>in the cart</span>
                        </button>
                        </form>
                    </div>
                    <div data-role="add-to-links" class="actions-secondary"> 
                        <a href="#" class="action towishlist" title="Zur Wunschliste hinzufügen" aria-label="Zur Wunschliste hinzufügen" data-post="{&quot;action&quot;:&quot;https:\/\/www.zizzz.de\/wishlist\/index\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;542&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cueml6enouZGUvc2hvcC9iYWJ5c2NobGFmc2Fjay9zY2hsYWZzYWNrLTExMC5odG1s&quot;,&quot;preorder&quot;:{&quot;status&quot;:0}}}" data-action="add-to-wishlist" role="button">
                        <span>Zur Wunschliste hinzufügen</span>
                        </a> 
                        <a href="#" class="action tocompare" title="Zur Vergleichsliste hinzufügen" aria-label="Zur Vergleichsliste hinzufügen" data-post="{&quot;action&quot;:&quot;https:\/\/www.zizzz.de\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;542&quot;,&quot;uenc&quot;:&quot;aHR0cHM6Ly93d3cueml6enouZGUvc2hvcC9iYWJ5c2NobGFmc2Fjay9zY2hsYWZzYWNrLTExMC5odG1s&quot;,&quot;preorder&quot;:{&quot;status&quot;:0}}}" role="button">
                        <span>Zur Vergleichsliste hinzufügen</span>
                        </a> 
                    </div>
                    </div>
                </div>
                </div>
            </div> 
        </li>`);

        }

        document.querySelector('.post-list-content').classList.remove('col-sm-8');
        document.querySelector('.post-list-content').classList.add('col-sm-12');
    }
});
mut.observe(document, {
    childList: true,
    subtree: true
});
