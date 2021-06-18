let mut = new MutationObserver(function (muts) {
    if(document.querySelector('.post-post_content')) {
        mut.disconnect();
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .banner {
                display: block;
                margin-top: 20px;
                width: 100%;}
            .banner img{
                width: 100%;}
            .d-flex {
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
        </style>`);

        document.querySelectorAll('h2')[0].insertAdjacentHTML('beforebegin',`<a href="#" class="banner"><img src='https://conversionratestore.github.io/projects/zizzz/img/banner1.png' alt='banner'></a>`);
        document.querySelectorAll('h2')[5].insertAdjacentHTML('beforebegin',`<a href="#" class="banner"><img src='https://conversionratestore.github.io/projects/zizzz/img/banner2.png' alt='banner'></a>`);
        document.querySelectorAll('h2')[2].insertAdjacentHTML('beforebegin',`<div id="popular"><h3 class="fw-bold">Most purchased products for the best baby sleep</h3><div class="d-flex"></div></div>`);

        let card = `
        <li class="item product product-item"> 
        <div class="product-item-info" data-container="product-grid"> 
        <a href="https://www.zizzz.de/babyschlafsack-blue-stripes-24-48-monate-110cm.html" class="product photo product-item-photo" tabindex="-1"> 
            <span class="product-image-container" style="width:240px;">
            <span class="product-image-wrapper" style="padding-bottom: 125%;">
                <img class="product-image-photo" data-pagespeed-high-res-src="https://www.zizzz.de/pub/media/catalog/product/cache/c8a6fd6c83603a6867472f5217b5f2e4/1/9/x19z501_blue_stripes_24-48m_-_sin_sombra-21.png.pagespeed.ic.7m713DT5T0.webp" max-width="240" max-height="300" alt="Babyschlafsack Blue Stripes  / 24-48 Monate (110cm)" data-pagespeed-url-hash="3960650855" src="https://www.zizzz.de/pub/media/catalog/product/cache/c8a6fd6c83603a6867472f5217b5f2e4/1/9/x19z501_blue_stripes_24-48m_-_sin_sombra-21.png.pagespeed.ic.7m713DT5T0.webp" onload="pagespeed.switchToHighResAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.switchToHighResAndMaybeBeacon(this);">
            </span>
            </span>
        </a> 
        <div class="product details product-item-details"> 
            <strong class="product name product-item-name">
            <a class="product-item-link" href="https://www.zizzz.de/babyschlafsack-blue-stripes-24-48-monate-110cm.html">Babyschlafsack Blue Stripes / 24-48 Monate (110cm)</a>
            </strong> 
            <div class="product-reviews-summary short"> 
            <div class="rating-summary">
                <span class="label"><span>Bewertung:</span></span> 
                <div class="rating-result" title="100.00%">
                <span style="width:100.00%"><span>100.00%</span></span>
                </div>
            </div>
            <div class="reviews-actions">
                <a class="action view" href="https://www.zizzz.de/babyschlafsack-blue-stripes-24-48-monate-110cm.html#reviews">1&nbsp;
                <span>Review</span>
                </a>
            </div>
            </div> 
            <div class="price-box price-final_price" data-role="priceBox" data-product-id="542" data-price-box="product-id-542"> 
            <span class="price-container price-final_price tax weee"> <span class="price-label">Price</span> 
            <span id="product-price-542" data-price-amount="109" data-price-type="finalPrice" class="price-wrapper ">
                <span class="price">109,00&nbsp;€</span>
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
        </li>`;

        let n = 4;
        while (n--) {
            document.querySelector('#popular .d-flex').insertAdjacentHTML('beforeend', card);
        }  
    }
});
mut.observe(document, {
    childList: true,
    subtree: true
});
