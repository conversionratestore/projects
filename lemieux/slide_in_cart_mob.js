let dir = 'https://conversionratestore.github.io/projects/lemieux/';

let currency = window.autoInitData.website && window.autoInitData.website.currency.list[0].symbol ? window.autoInitData.website.currency.list[0].symbol : '';

let style = `
<style>
.cart input::-webkit-outer-spin-button,
.cart input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.cart input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
.loading .cart_container:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
    background: rgba(255,255,255,0.7) url(${dir}img/loading.gif) no-repeat center / 1em;
}
.cart {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.70);
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    color: #212121;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    font-family: 'source-sans-3', sans-serif;
    line-height: 22px;
}
.cart.active {
    opacity: 1;
    pointer-events: auto;
}
.cart_container {
    max-width: 400px;
    margin-left: auto;
    width: 95%;
    height: 100vh;
    overflow-y: auto;
    background-color: #fff;
    transform: translateX(100px);
}
.cart.active .cart_container {
    transform: translateX(0);
}
.cart_head {
    padding: 12px 20px;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #fff;
    font-family: "baskerville-urw", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    border-bottom: 1px solid #D0D2D3;
}
.cart_close {
    padding: 5px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
.cart_topBar {
    background: #F0F0F0;
    padding: 4px;
}
.cart_topBar[hidden], header a[routerlink="/basket"] {
    display: none!important;
}
.cart_topBar.green {
    background: #9FCAB9;
}
.cart_topBar, .coupon_item, .saved_block   {
    font-size: 14px;
    line-height: 18px;
}
.coupon {
    padding: 16px;
}
.coupon_item {
    border: 1px solid #D0D2D3;
    background: #FAFAFA;
    display: block;
    width: 100%;
    padding: 8px 12px;
    margin-top: 10px;
    padding: 0;
}
.coupon_item.is {
    order: 3;
}
.coupon_item.coupon_gift.is {
    order: 4;
}
.coupon_item.coupon_gift {
    order: 5;
}
.ml-auto {
    margin-left: auto;
}

.balance-item {
    color: #595959;
    font-family: 'source-sans-3', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}
.btn_plus {
    position: relative;
    padding: 3px;
    width: 18px;
    height: 18px;
}
.btn_plus:before, .btn_plus:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: #212121;
    transition: all 0.2s ease;
}
.btn_plus:before {
    width: 12px;
    height: 1.3px;
}
.btn_plus:after {
    width: 1.3px;
    height: 12px;
}
.coupon_item.active .btn_plus:after {
    transform: translate(-50%,-50%) rotate(-90deg);
}
.total_content {
    padding: 0 16px;
}
.total_content ul li {
    font-size: 16px;
    font-style: normal;
    line-height: 22px;
    font-weight: 700;
    padding: 7px 0;
}
.total_content ul li .c-red {
    margin: 0;
}
.total_content ul p:not(.price) {
    font-weight: 600;
}
.total_content ul li .pr {
    font-weight: 700;
}
.total_content li[data-name="grand_total"] {
    font-size: 20px;
    line-height: 28px;
    border-top: 1px solid #D0D2D3;
    padding: 12px 0;
    margin-top: 5px;
    order: 3;
}
.saved_block {
    background-color: #822338;
    font-weight: 600;
    line-height: 22px;
    display: none;
    padding: 0 8px;
    color: #fff;
    font-size: 14px;
    width: fit-content;
    border-radius: 4px;
}
.img-feefo {
    margin: 24px auto;
    display: block;
    order: 3;
}
/* klarna */
.klarna_content {
    padding: 13px;
    font-size: 14px;
    font-family: 'source-sans-3', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    order: 2;
    position: relative;
}
.klarna_content:after {
    content: '';
    position: absolute;
    left: 16px;
    bottom: 0;
    width: calc(100% - 32px);
    height: 1px;
    border-bottom: 1px dashed #D0D2D3; 
}
.klarna_content .klarna_pr {
    margin-left: 4px;
}
.img-klarna {
    margin: 0 8px;
    background-color: #F1B6C6;
    padding: 9.5px 7.4px;
    border-radius: 8px;
    width: 46px;
    object-fit: contain;
}
.klarna_popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.70);
    z-index: 99999;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    font-family: 'source-sans-3', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
}
.klarna_popup p {
    color: #595959;
}
.klarna_popup h3+p {
    font-size: 16px;
}
.klarna_popup.active {
    opacity: 1;
    pointer-events: auto;
}
.klarna_popup_container {
    background: #FFF;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.10);
    margin: auto;
    padding: 20px;
    max-width: 335px;
}
.klarna_popup .btn-close {
    padding: 5px;
}
.klarna_popup .btn-close svg {
    pointer-events: none;
}
.klarna_popup h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 8px;
}
.klarna_popup ul {
    padding: 4px 0 24px;
}
.klarna_popup li {
    margin-top: 12px;
    font-weight: 600;
}
.klarna_popup li span {
    margin: 0 10px;
}
.btn {
    color: #FFF;
    font-size: 18px;
    font-weight: 600;
    line-height: 44px;
    background: #212121;
    width: 100%;
    display: block;
    text-align: center;
}
.klarna_popup .btn_continue {
    margin-bottom: 16px;
}
.klarna_popup a {
    font-weight: 600;
}

/* cart empty */
.cart_empty {
    display: none;
    padding: 16px 24px;
}
.cart_favourites {
    display: none;
}
.cart.empty .cart_body, .cart.empty .cart_footer {
    display: none!important;
}
.cart.empty .cart_empty, .cart.empty .cart_favourites {
    display: block;
}
.cart_empty_body {
    border: 1px dashed #D0D2D3;
    padding: 16px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}
.cart_empty h3 {
    font-family: "baskerville-urw", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 8px;
}
.cart_empty p {
    color: #595959;
    font-family: 'source-sans-3', sans-serif;
}
.cart_empty .btn {
    margin-top: 16px;
}
/* product */
.product_content {
    width: 100%;
}
.options .option:not(:last-child):after {
    content: ' | ';
}
.cart_products li {
    padding: 16px;
    border-bottom: 1px solid #D0D2D3;
    font-family: 'source-sans-3', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
}
.cart_products li > a {
    margin-right: 12px;
    width: 100px;
    height: 132px;  
    flex-shrink: 0;
}
.cart_products li > a img {
    width: 100%;
    height: 100%;  
    object-fit: contain;    
}
.cart_products .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
    margin-bottom: 4px;
    padding-right: 10px;
}
.cart_products .pr-line {
    display: block;
}
.cart_products .option {
    letter-spacing: 0.28px;
    color: #595959;
}
.cart_products .option span {
    color: #ACACAC;
}
.prices {
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    display: block;
    line-height: 20px;
}
.pr-line {
    text-decoration-line: line-through;
    color: #ACACAC;
    font-weight: 400;
}
.cart_products .calc {
    border: 1px solid #D0D2D3;   
    padding: 0 6px;
}
.cart_products .calc_button {
    height: 34px;
    width: 21px;
    position: relative;
}
.cart_products .calc_button svg {
    margin: auto;
}
.cart_products .calc_qty {
    color: #212121;
    text-align: center;
    font-family: 'source-sans-3', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px; 
    width: 27px;
}
.m-b-auto {
    margin-bottom: auto;
}
.cart_footer {
    margin-top: auto;
    position: sticky;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 3;
    box-shadow: 0px -2px 6px 0px rgba(0, 0, 0, 0.10);
}
.cart_footer > div {
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
}
.cart_footer price {
    text-align: right;
}
.cart_footer .pr {
    font-weight: 700;
}
.c-red {
    color: #822338;
}
.error-qty {
    font-size: 13px;
}
.btn-remove-code {
    font-family: 'source-sans-3', sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: underline;
}
.coupon_item {
    border: 1px solid #D0D2D3;
    background: #FAFAFA;
    width: 100%;
    color: #595959;
    font-family: 'source-sans-3', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-top: 10px;
}
.coupon_current {
    padding: 9px 14px;
}

.coupon_item .btn-cancel * {
    pointer-events: none;
}
.coupon_item .plus {
    position: relative;
    padding: 3px;
    width: 18px;
    height: 18px;
}
.coupon_item .plus:before, .coupon_item .plus:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: #212121;
    transition: all 0.2s ease;
}
.coupon_item .plus:before {
    width: 12px;
    height: 1.3px;
}
.coupon_item .plus:after {
    width: 1.3px;
    height: 12px;
}
.coupon_item.active .plus:after {
    transform: translate(-50%,-50%) rotate(-90deg);
}
.coupon_promocode_form, .coupon_gift_form {
    display: none;
    padding: 9px 14px;
}
.coupon_item.active .coupon_promocode_form, .coupon_item.active .coupon_gift_form {
    display: block;
}
.coupon_item.is {
    border-style: dashed;
}
product-quick-buy button {
    border-radius: 50%;
}
.container-add-to-bag modal-bottom-container {
    width: 100%;
}
[_nghost-app-c143] .swiper-scrollbar {
    width: 13.75rem!important;
    height: 2px!important;
    left: 50%!important;
    bottom: 0!important;
    transform: translateX(-50%);
}
.container-add-to-bag box .box {
    position: relative;
    display: block;
    min-width: 3.125rem;
    border-color: #cfd2d3;
    background-color: #fff;
    min-width: 2.8125rem;
    padding: 0.375rem;
}
.container-add-to-bag box.is-selected .box {
    border-color: #595959;
    background-color: #595959;
    color: #fff;
}
.container-add-to-bag .btn-add-to-bag *, .container-add-to-bag .btn-add-to-bag.busy {
    pointer-events: none;
}
</style>`;


let cartHTML = `
    <div class="cart empty">
        <div class="cart_container flex-column">
            <div class="cart_head flex flex-middle flex-justify-between">
                <h2>Shopping Bag (<span>1</span>)</h2>
                <svg class="cart_close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3007 0.709727C12.9107 0.319727 12.2807 0.319727 11.8907 0.709727L7.0007 5.58973L2.1107 0.699727C1.7207 0.309727 1.0907 0.309727 0.700703 0.699727C0.310703 1.08973 0.310703 1.71973 0.700703 2.10973L5.5907 6.99973L0.700703 11.8897C0.310703 12.2797 0.310703 12.9097 0.700703 13.2997C1.0907 13.6897 1.7207 13.6897 2.1107 13.2997L7.0007 8.40973L11.8907 13.2997C12.2807 13.6897 12.9107 13.6897 13.3007 13.2997C13.6907 12.9097 13.6907 12.2797 13.3007 11.8897L8.4107 6.99973L13.3007 2.10973C13.6807 1.72973 13.6807 1.08973 13.3007 0.709727Z" fill="#212121"/>
                </svg>
            </div>
            <div class="cart_empty">
                <div class="cart_empty_body">
                    <h3>Your bag is empty</h3>
                    <p>Discover our quality products</p>
                    <a href="/" class="btn">Shop all products</a>
                </div>
            </div>
            <div class="cart_favourites">
                <cms-outlet-block variant="basket-empty" name="Empty Basket" class="w-12 cms-block">
                    <cms-outlet style="display: block; position: relative;" class="ng-star-inserted">
                        <div>
                            <div class="ng-star-inserted">
                                <page-component-product-carousel 
                                    class="ng-star-inserted cms-component page-component-product-carousel">
                                    <div class="center wrap-x">
                                        <h1 sizeclass="XL:h1, MS:h2" class="p-t-5-s b-t-s b-col-42-s h2 ng-star-inserted">Our Favourites</h1>
                                        <p class="m-t-1 p1 ng-star-inserted">New Arrivals</p>
                                        <div class="p-t-3 p-b-3 text ng-star-inserted">
                                            <p class="p1 m-b-0-s ng-star-inserted"></p>
                                        </div>
                                        <div sizeclass="!S: flex flex-justify-center m-t-3" class="col-12 underline m-b-6-s m-b-6-m ng-star-inserted"></div>
                                        
                                        <div sizeclass="XL:m-l-6 m-r-6,SM:m-l m-r" class="p-l-6 p-r-6">
                                            <related-products
                                                class="block m-b-8" _nghost-app-c143="">
                                                <div class="ng-star-inserted">
                                                    <swiper _ngcontent-app-c143 class="p-b-7 swiper">
                                                        <div class="swiper-scrollbar"></div>
                                                        <div class="swiper-wrapper"></div>
                                                        <span class="swiper-notification"></span>
                                                    </swiper>
                                                </div>
                                            </related-products>
                                        </div>
                                    </div>
                                </page-component-product-carousel>
                            </div>
                            <div></div>
                        </div>
                    </cms-outlet>
                </cms-outlet-block>
            </div>

            <div class="cart_body">
                <div class="cart_topBar flex flex-middle flex-justify-center">
                    <svg class="m-r-2" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_128_3164)">
                        <path d="M25.7579 13.9738L23.6766 9.39504C23.5041 9.01671 23.2265 8.69589 22.8769 8.47074C22.5273 8.2456 22.1204 8.12559 21.7046 8.125H17.8757V6.5C17.8752 6.06917 17.7038 5.65612 17.3992 5.35147C17.0945 5.04683 16.6815 4.87547 16.2507 4.875H2.70898C2.27815 4.87547 1.8651 5.04683 1.56045 5.35147C1.25581 5.65612 1.08445 6.06917 1.08398 6.5V13C1.08329 13.0716 1.09679 13.1426 1.1237 13.2089C1.15061 13.2752 1.1904 13.3356 1.24076 13.3864C1.29113 13.4373 1.35107 13.4776 1.41714 13.5052C1.4832 13.5327 1.55406 13.5469 1.62564 13.5469C1.69722 13.5469 1.76808 13.5327 1.83414 13.5052C1.90021 13.4776 1.96015 13.4373 2.01052 13.3864C2.06088 13.3356 2.10067 13.2752 2.12758 13.2089C2.15449 13.1426 2.16799 13.0716 2.1673 13V6.5C2.16746 6.35639 2.22458 6.2187 2.32613 6.11715C2.42768 6.0156 2.56537 5.95848 2.70898 5.95832H16.2507C16.3943 5.95848 16.532 6.0156 16.6335 6.11715C16.7351 6.2187 16.7922 6.35639 16.7923 6.5V15.1667C16.7921 15.3103 16.735 15.4479 16.6335 15.5495C16.5319 15.651 16.3943 15.7081 16.2507 15.7083H9.75067C9.60792 15.7097 9.47149 15.7674 9.37103 15.8688C9.27058 15.9702 9.21423 16.1072 9.21423 16.25C9.21423 16.3927 9.27058 16.5297 9.37103 16.6311C9.47149 16.7326 9.60792 16.7902 9.75067 16.7916H16.2507C16.6815 16.7912 17.0945 16.6198 17.3992 16.3152C17.7038 16.0105 17.8752 15.5975 17.8757 15.1666V9.20832H21.7046C21.9125 9.2086 22.116 9.2686 22.2908 9.38117C22.4657 9.49374 22.6045 9.65416 22.6908 9.84334L22.8946 10.2916H20.5841C20.2968 10.2919 20.0214 10.4061 19.8183 10.6093C19.6152 10.8124 19.501 11.0878 19.5007 11.375V13.5417C19.5009 13.8289 19.6152 14.1043 19.8183 14.3074C20.0214 14.5105 20.2968 14.6247 20.584 14.625H24.8466C24.8931 14.7771 24.917 14.9352 24.9173 15.0942V17.3334C24.9171 17.477 24.86 17.6146 24.7584 17.7161C24.6569 17.8177 24.5193 17.8748 24.3757 17.875H22.696C22.5711 17.2633 22.2388 16.7136 21.7552 16.3188C21.2717 15.924 20.6666 15.7083 20.0423 15.7083C19.418 15.7083 18.8129 15.924 18.3294 16.3188C17.8458 16.7136 17.5134 17.2633 17.3886 17.875H8.61271C8.48783 17.2633 8.1555 16.7136 7.67193 16.3188C7.18836 15.924 6.58325 15.7083 5.95898 15.7083C5.33471 15.7083 4.7296 15.924 4.24603 16.3188C3.76247 16.7136 3.43013 17.2633 3.30526 17.875H2.70898C2.56538 17.8748 2.42771 17.8177 2.32616 17.7161C2.22462 17.6146 2.16749 17.4769 2.1673 17.3333V16.7917C2.31005 16.7903 2.44648 16.7326 2.54693 16.6312C2.64738 16.5298 2.70374 16.3928 2.70374 16.25C2.70374 16.1073 2.64738 15.9703 2.54693 15.8689C2.44648 15.7674 2.31005 15.7097 2.1673 15.7084H0.542298C0.39955 15.7097 0.263118 15.7674 0.162665 15.8689C0.0622119 15.9703 0.00585938 16.1073 0.00585938 16.25C0.00585938 16.3928 0.0622119 16.5298 0.162665 16.6312C0.263118 16.7326 0.39955 16.7903 0.542298 16.7917H1.08398V17.3334C1.08445 17.7642 1.25581 18.1772 1.56045 18.4819C1.8651 18.7865 2.27815 18.9579 2.70898 18.9584H3.30531C3.43018 19.57 3.76252 20.1198 4.24609 20.5146C4.72965 20.9094 5.33476 21.125 5.95903 21.125C6.58331 21.125 7.18841 20.9094 7.67198 20.5146C8.15555 20.1198 8.48788 19.57 8.61276 18.9584H17.3886C17.5135 19.57 17.8458 20.1198 18.3294 20.5146C18.813 20.9094 19.4181 21.125 20.0423 21.125C20.6666 21.125 21.2717 20.9094 21.7553 20.5146C22.2389 20.1198 22.5712 19.57 22.6961 18.9584H24.3757C24.8065 18.9579 25.2195 18.7865 25.5242 18.4819C25.8288 18.1772 26.0002 17.7642 26.0007 17.3334V15.0942C26.0013 14.7076 25.9185 14.3255 25.7579 13.9738ZM5.95898 20.0417C5.63759 20.0417 5.32341 19.9464 5.05618 19.7678C4.78895 19.5893 4.58067 19.3355 4.45768 19.0385C4.33469 18.7416 4.3025 18.4149 4.36521 18.0997C4.42791 17.7844 4.58267 17.4949 4.80993 17.2676C5.03719 17.0404 5.32674 16.8856 5.64196 16.8229C5.95718 16.7602 6.28391 16.7924 6.58084 16.9154C6.87777 17.0384 7.13156 17.2467 7.31012 17.5139C7.48868 17.7811 7.58398 18.0953 7.58398 18.4167C7.58351 18.8475 7.41216 19.2606 7.10751 19.5652C6.80287 19.8699 6.38981 20.0412 5.95898 20.0417ZM20.0423 20.0417C19.7209 20.0417 19.4067 19.9464 19.1395 19.7678C18.8723 19.5893 18.664 19.3355 18.541 19.0385C18.418 18.7416 18.3858 18.4149 18.4485 18.0997C18.5112 17.7844 18.666 17.4949 18.8932 17.2676C19.1205 17.0404 19.4101 16.8856 19.7253 16.8229C20.0405 16.7602 20.3672 16.7924 20.6642 16.9154C20.9611 17.0384 21.2149 17.2467 21.3934 17.5139C21.572 17.7811 21.6673 18.0953 21.6673 18.4167C21.6668 18.8475 21.4955 19.2606 21.1908 19.5652C20.8862 19.8698 20.4732 20.0412 20.0423 20.0417H20.0423ZM20.584 11.375H23.3868L24.3716 13.5417H20.584V11.375Z" fill="#212121"/>
                        <path d="M0.461078 15.1667H2.78892C2.91162 15.1653 3.02888 15.1076 3.11522 15.0062C3.20156 14.9048 3.25 14.7678 3.25 14.625C3.25 14.4823 3.20156 14.3453 3.11522 14.2439C3.02888 14.1424 2.91162 14.0848 2.78892 14.0834H0.461078C0.338384 14.0848 0.221118 14.1424 0.134777 14.2439C0.0484359 14.3453 0 14.4823 0 14.625C0 14.7678 0.0484359 14.9048 0.134777 15.0062C0.221118 15.1076 0.338384 15.1653 0.461078 15.1667Z" fill="#212121"/>
                        <path d="M8.35245 9.74996H12.2322C12.4367 9.74858 12.6321 9.6909 12.776 9.58947C12.9199 9.48804 13.0007 9.35105 13.0007 9.20829C13.0007 9.06553 12.9199 8.92855 12.776 8.82712C12.6321 8.72568 12.4367 8.66801 12.2322 8.66663H8.35245C8.14796 8.66801 7.95251 8.72568 7.80861 8.82712C7.66471 8.92855 7.58398 9.06553 7.58398 9.20829C7.58398 9.35105 7.66471 9.48804 7.80861 9.58947C7.95251 9.6909 8.14796 9.74858 8.35245 9.74996Z" fill="#212121"/>
                        <path d="M6.18448 11.9167H10.0642C10.2687 11.9153 10.4642 11.8576 10.6081 11.7562C10.752 11.6548 10.8327 11.5178 10.8327 11.375C10.8327 11.2323 10.752 11.0953 10.6081 10.9939C10.4642 10.8924 10.2687 10.8348 10.0642 10.8334H6.18448C5.97999 10.8348 5.78455 10.8924 5.64064 10.9939C5.49674 11.0953 5.41602 11.2323 5.41602 11.375C5.41602 11.5178 5.49674 11.6548 5.64064 11.7562C5.78455 11.8576 5.97999 11.9153 6.18448 11.9167Z" fill="#212121"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_128_3164">
                        <rect width="26" height="26" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p></p>
                </div>
                <ul class="cart_products"></ul>

                <div class="coupon"> 
                    <a href="/e-gift-card-173" class="coupon_vouchers coupon_item coupon_current flex flex-middle">
                        <svg class="m-r-3 flex-noshrink" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2521 3.49618H16.5513C16.7473 3.1547 16.8601 2.75959 16.8601 2.33838C16.8601 1.40186 16.3282 0.584379 15.4721 0.204833C14.6159 -0.174748 13.653 -0.0197878 12.9591 0.609102L11.4799 1.94968C11.1651 1.46543 10.6196 1.14421 10.0002 1.14421C9.37981 1.14421 8.83361 1.46638 8.51904 1.95193L7.03728 0.609067C6.34338 -0.0197526 5.38041 -0.174677 4.52436 0.204904C3.66821 0.584379 3.13638 1.40193 3.13638 2.33842C3.13638 2.75963 3.24911 3.1547 3.4451 3.49621H2.74835C1.77569 3.49618 0.984375 4.28749 0.984375 5.26015V7.61212C0.984375 7.93683 1.24763 8.20012 1.57238 8.20012H2.16038V16.236C2.16038 17.2086 2.95169 18 3.92435 18C4.49675 18 15.6345 18 16.0761 18C17.0488 18 17.8401 17.2086 17.8401 16.236V8.20012H18.4281C18.7528 8.20012 19.0161 7.93687 19.0161 7.61212V5.26015C19.0161 4.28749 18.2247 3.49618 17.2521 3.49618ZM8.23624 16.8239H3.92431C3.6001 16.8239 3.33631 16.5602 3.33631 16.2359V8.20012H8.23621L8.23624 16.8239ZM8.23624 7.02412C7.98514 7.02412 2.41328 7.02412 2.16034 7.02412V5.26015C2.16034 4.93593 2.42413 4.67215 2.74835 4.67215C2.95758 4.67215 7.9838 4.67215 8.23624 4.67215V7.02412ZM5.47014 3.49614C4.83174 3.49614 4.31235 2.97678 4.31235 2.33838C4.31235 1.86674 4.56976 1.47107 5.00093 1.27994C5.15843 1.21013 5.32054 1.17583 5.47993 1.17583C5.75696 1.17583 6.02578 1.27951 6.24762 1.4805L8.47182 3.49618L5.47014 3.49614ZM10.0002 2.32021C10.2777 2.32021 10.5103 2.51366 10.5718 2.77266L9.99824 3.29244L9.42792 2.77554C9.48825 2.51511 9.72167 2.32021 10.0002 2.32021ZM10.5882 16.8239H9.41225V8.20012H10.5882V16.8239ZM10.5882 7.02412H9.41225V4.67215C9.83258 4.67215 10.1638 4.67215 10.5882 4.67215V7.02412ZM13.7488 1.48054C14.0983 1.16386 14.5643 1.08891 14.9955 1.28001C15.4267 1.4711 15.6841 1.86681 15.6841 2.33842C15.6841 2.97682 15.1647 3.49621 14.5263 3.49621H11.5246L13.7488 1.48054ZM16.6641 16.236C16.6641 16.5602 16.4003 16.824 16.0761 16.824H11.7642V8.20012H16.6641V16.236ZM17.8401 7.02412C17.5871 7.02412 12.0151 7.02412 11.7642 7.02412V4.67215C12.0116 4.67215 17.0374 4.67215 17.2521 4.67215C17.5763 4.67215 17.8401 4.93593 17.8401 5.26015V7.02412Z" fill="#595959"/>
                        </svg>
                        <span>Buy gift vouchers</span>
                        <svg class="ml-auto flex-noshrink" width="20" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16117 11.8146C0.869956 12.0873 0.427756 12.0554 0.173203 11.7437C-0.0810943 11.4317 -0.0513579 10.9579 0.239597 10.6852L5.23735 6.00012L0.239341 1.31479C-0.0518697 1.04206 -0.0813497 0.568276 0.172947 0.256543C0.427501 -0.0554647 0.8697 -0.087325 1.16091 0.185408L6.76083 5.43543C6.91284 5.57771 7 5.7837 7 6.00012C7 6.21655 6.91284 6.42227 6.76083 6.56482L1.16117 11.8146Z" fill="#212121"/>
                        </svg>
                    </a>
                    <div class="coupon_content flex-column"></div>
                </div>
                <div class="total_content">
                    <ul class="flex-column"></ul>
                    <div class="saved_block ml-auto m-t--2"></div>
                </div>
                <div class="klarna_content">
                    <p class="flex flex-middle flex-justify-center">3 interest free payments of <b class="klarna_pr"></b> <img src="${dir}/img/Klarna_Logo_black.svg" alt="logo" class="img-klarna"> <button type="button" class="btn-more underline">Learn more</button></p>
                </div>
                <img src="${dir}/img/feefo.svg" alt="imgae feefo" class="img-feefo">
            </div>
            <div class="cart_footer p-t-3 p-b-3 p-l p-r">
                <div class="flex flex-justify-between" data-name="grand_total">
                    <p>Order total</p>
                    <price>
                        <span class="">
                            <span class="pr"></span>
                        </span>
                        <span class="saved_block ml-auto m-t-2"></span>
                    </price>
                </div>
                <a href="/checkout" class="btn_submit m-b m-t-2 btn">Checkout securely</a>
                <p class="flex flex-middle flex-justify-center text_guarantee">
                    <svg class="m-r-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 3.47076L8.00338 1.49976L14.75 3.47076V7.51251C14.75 9.58389 14.0981 11.6027 12.8869 13.2831C11.6756 14.9634 9.96629 16.22 8.00113 16.8748C6.03536 16.22 4.32548 14.9633 3.11379 13.2826C1.90209 11.6019 1.25003 9.58256 1.25 7.51063V3.47076Z" stroke="#212121" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M4.625 8.625L7.25 11.25L11.75 6.75" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    60-day money back guarantee
                </p>
            </div>
        </div>
    </div>
    <div class="cdk-overlay-container container-add-to-bag"></div>`;
 

//comes into view
let isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}

//  api
let postFetch = (host, body) => {
    return new Promise((resolve, reject) => {
        let webCode = window.autoInitData.website.websiteCode != 'base' ? '/'+window.autoInitData.website.websiteCode : '';

        fetch(`https://www.lemieuxproducts.com${webCode}/api/p/${host}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => {
            resolve(data)
        }).catch((error) => {
            console.error('Error:', error);
        });
    });
}

let getFetch = (host) => new Promise((resolve, reject) => {

    let webCode = window.autoInitData.website.websiteCode != 'base' ? '/'+window.autoInitData.website.websiteCode : '';

    fetch(`https://www.lemieuxproducts.com${webCode}/api/${host}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }).then(res => res.json()).then(data => {
        console.log(webCode)
        resolve(data)
    }).catch((error) => {
        console.error('Error:', error);
    });
})

let reqCategory = getFetch('n/category/76/verbosity/3');

// pushDataLayer
let pushDataLayer = (name, desc, type, loc) => {
    console.log(name + ' : ' + desc + ' : ' + type + ' : ' + loc)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga4',
        'event_name': name,
        'event_desc': desc,
        'event_type': type,
        'event_loc': loc
    });
}

let updateTotal = (parent, totals, items) => {
    //add total in footer cart
    parent.querySelector('.cart_footer price .pr').innerHTML = currency + totals.grand_total;
    parent.querySelector('.total_content ul').innerHTML = '';

    for (const key in totals) {
        if (!key.includes('tax') && !key.includes('amasty_giftcard')) {
            new Total(
                document.querySelector('.total_content ul'),
                key, 
                totals[key],
                currency,
                totals.subtotal,
                totals.grand_total ).render()
        }
    }

    let compareSum = 0;
    if (items != '') {
        const promises = [];

        for (let i = 0; i < items.length; i++) {
            promises.push(getFetch(`n/product/${items[i].product}/verbosity/3`))
        }

        Promise.all(promises).then(dataItem => {
            console.log(dataItem)

            for (let i = 0; i < dataItem.length; i++) {
                
                let item = dataItem[i].result[0];

                console.log(items[i].rowPrice)
                
                compareSum += item.org_price ? item.org_price * items[i].request.qty : items[i].rowPrice;

                setCompare(compareSum, 'grand_total', totals['grand_total'], totals['shipping'])
                setCompare(compareSum, 'subtotal', totals['subtotal'], totals['shipping'])
                
            }
                
        });
    }
}
//add products
let addProduct = (parent, items, totals, count) => {
   
    console.log(parent) 

    updateTotal(parent, totals, items) 

    for (let i = 0; i < items.length; i++) {
        getFetch(`n/product/${items[i].product}/verbosity/3`).then(dataItem => {
            console.log(dataItem)

            let item = dataItem.result[0];

            let options = '';

            if (item.size) {
                let size = JSON.stringify(window.autoInitData.data.attribute).split(`${item.size},"label":"`)[1].split('"')[0];
       
                let iSlash = size.split('\\') ? size.replace('\\','"') : size;
                options += `<span class="option"><span>Size: </span> ${iSlash}</span> `
            } 
            if (item.color) {
                options += `<span class="option"><span>Colour: </span> ${JSON.stringify(window.autoInitData.data.attribute).split(`${item.color},"label":"`)[1].split('"')[0]}</span> `
            }

            new Product(
                document.querySelector('.cart_products'), 
                item.url, 
                item.image, 
                item.name, 
                items[i].price, 
                item.org_price ? item.org_price : item.price, 
                options, 
                items[i].id,
                item.id,
                currency,
                items[i].request.qty).render()


                parent.classList.remove('loading');

        })
    }

    parent.querySelector('.cart_head span').innerHTML = count;

    if (count != 0) {
        parent.classList.remove('empty');
    } 

}

// remmove item 
let removeItem = (parent, id) => {  // remove item 
    let obj = {
        "ids":[id]
    }
    let cart = document.querySelector(parent);
    cart.classList.add('loading');

    postFetch('basket/remove', obj).then(data => {
        console.log(data)

        !!cart.querySelector(`.cart_products [data-id="${id}"]`) ? cart.querySelector(`.cart_products [data-id="${id}"]`).remove() : ''; 
        
        let items = data.customer.cart.items;
        let totals = data.customer.cart.totals;
        let countCart = data.customer.cart.qty;

        cart.querySelector('.cart_head span').innerHTML = countCart;
        cart.querySelector('.total_content ul').innerHTML = '';

        if (countCart != 0) {
            cart.classList.remove('empty');

            addProduct(cart, items, totals, countCart)

        } else {
            cart.classList.add('empty')
            pushDataLayer('exp_slide_in_cart_bag_is_empty_vis','Your bag is empty','Element visibility','Sidebar cart. Your bag is empty')
        }

        cart.classList.remove('loading');
    })
}

//toggle active
let toggleActive = (selector, open) => {
    if (open) {
        selector.classList.add('active')
    } else {
        selector.classList.remove('active')
    }

    if (selector.classList.contains('coupon_promocode')) {
        pushDataLayer('exp_slide_in_cart_promo_cancel', 'Cancel', 'Button', 'Sidebar. Cart. Have you got a promo code');
    }
}
// update qty item 
let qty = (_this) => {
    _this.closest('.cart').classList.add('loading');

    let id = _this.closest('li').dataset.id;
    let qty = _this.parentElement.querySelector('.calc_qty');


    if (_this.classList.contains('calc_minus')) {
        if (qty.value > 1) {
            qty.value = +qty.value - 1;
        }
    } else if (_this.classList.contains('calc_plus')) {
        qty.value = +qty.value + 1;
    } 

    let objUpdateQty = {"id":id,"qty": qty.value}

    postFetch('basket/qty', objUpdateQty).then(data => {
        console.log(data)

        if (data.error && data.error != '') {
            _this.closest('.product_content').insertAdjacentHTML('beforeend', `<p class="error-qty m-t-1 c-red m-b-0">${data.error}</p>`)
            getFetch('p/customer/data').then(data => {

                let items = data.customer.cart.items;
                for (let i = 0; i < items.length; i++) {
                    if (id == items[i].id)
                    qty.value = items[i].request.qty;
                }
               
                setTimeout(() => {
                    _this.closest('.product_content').querySelector('.error-qty').remove()
                }, 2000);

                _this.closest('.cart').classList.remove('loading');
            })

            return
        } 
        let items = data.customer.cart.items;
        let totals = data.customer.cart.totals;
        let countCart = data.customer.cart.qty;

        addProduct(_this.closest('.cart'), items, totals, countCart)

        _this.closest('.cart').classList.remove('loading');
    })
}

let setCompare = (compareSum, key, value, shipping) => {
    console.log(compareSum, key, value)
    let price = document.querySelectorAll(`[data-name="${key}"] .pr`);
    let compareSumIsShipping = key == 'grand_total' ? compareSum + shipping : compareSum;
    let priceLine = value < (compareSumIsShipping).toFixed(2) ? ' <span class="pr-line m-r-1">' + currency + (compareSumIsShipping).toFixed(2) + '</span>' : ''
   
    
    price.forEach((item, index) => {
        if (item.parentElement.querySelector(`.pr-line`)) {
            item.parentElement.querySelector(`.pr-line`).remove()
        }
    
        item.innerHTML = currency + value.toFixed(2);
    
        if (item.closest('[data-name]').dataset.name == 'grand_total' && key == 'grand_total') {
            document.querySelectorAll('.saved_block').forEach(el => {
                if (value < (compareSumIsShipping).toFixed(2)) {
                    el.innerHTML = 'You just saved ' + currency + (compareSumIsShipping - value).toFixed(2);
                    el.style.display = 'block';
                } else {
                    el.style = '';
                }
            })
        } 

        item.insertAdjacentHTML('beforebegin', priceLine)
    })
   
}
       
let removeCoupon = (code, classes) => {
    let host  = classes == 'coupon_promocode' ? 'coupon' : 'giftcard';

    let codeObj = host == 'coupon' ? {"coupon": code} : {"code": code}

    let coupon = document.querySelector('.' + classes + '[data-code="' + code + '"]');

    coupon.closest('.cart').classList.add('loading');

    postFetch(host+'/remove', codeObj).then(data => {
        console.log(data)

        coupon.closest('.cart').classList.remove('loading');
        coupon.remove();
        if (classes == 'coupon_promocode') {
            new Coupon(
                document.querySelector('.coupon_content'),
                'coupon_promocode',
                ''
            ).render()

            pushDataLayer('exp_slide_in_cart_promo_remove', 'Click here to remove', 'Button', 'Sidebar. Cart. Have you got a promo code');
        } else {
            pushDataLayer('exp_slide_in_cart_gift_remove', 'Click here to remove', 'Button', 'Sidebar. Cart. Have you got a gift card');
        }

        updateTotal(document.querySelector('.cart'), data.customer.cart.totals, data.customer.cart.items) 
        
    })
}
//add coupon
let addCoupon = (e) => {
    let _this = e.currentTarget;
    let parentEl = _this.closest('.coupon_item');
    _this.classList.add('busy');

    let value = parentEl.querySelector(`input`).value;

    if (parentEl.classList.contains('coupon_promocode')) {
        pushDataLayer('exp_slide_in_cart_promo_apply', 'Apply', 'Button', 'Sidebar. Cart. Have you got a promo code');
    } else if (parentEl.classList.contains('coupon_gift')) {
        pushDataLayer('exp_slide_in_cart_gift_apply', 'Apply', 'Button', 'Sidebar. Cart. Have you got a gift card');
    }
   
    if (value != '') {
        if (_this.closest('.coupon_gift_form')) {
            let giftcard = {"code": value}

            postFetch('giftcard/add', giftcard).then(data => {
                console.log(data)

                _this.classList.remove('busy');

                if (data.error && data.error != '') {
                    let message = data.error == "INVALID_GIFTCARD" ? `Sorry, we don't recognise this code` : data.error;
                    parentEl.querySelector(`result`).innerHTML = message;
                    parentEl.querySelector(`result`).classList.remove('ng-hide');

                    pushDataLayer('exp_slide_in_cart_gift_wrong', 'Wrong code', 'Element visibility', 'Sidebar. Cart. Have you got a gift card');
                } else {
                    new Coupon(
                        _this.closest('.coupon_content'), 
                        'coupon_gift', 
                        value).render()

                    parentEl.querySelector(`result`).innerHTML = '';
                    parentEl.querySelector(`result`).classList.add('ng-hide');

                    pushDataLayer('exp_slide_in_cart_gift_applied', 'Promo code applied', 'Element visibility', 'Sidebar. Cart. Have you got a gift card');

                    updateTotal(document.querySelector('.cart'), data.customer.cart.totals, data.customer.cart.items) 
                }
            })
        } else if (_this.closest('.coupon_promocode_form')) {
            let coupon = {"coupon": value}
            
            postFetch('coupon/add', coupon).then(data => {
                console.log(data)
                _this.classList.remove('busy');
                if (data.error && data.error != '') {
                    let message = data.error == "INVALID_GIFTCARD" ? `Sorry, we don't recognise this code` : data.error;
                    parentEl.querySelector('result').innerHTML = message;
                    parentEl.querySelector('result').classList.remove('ng-hide');

                    pushDataLayer('exp_slide_in_cart_promo_wrong', 'Wrong code', 'Element visibility', 'Sidebar. Cart. Have you got a promo code');

                } else {
                    new Coupon(
                        parentEl.closest('.coupon_content'), 
                        'coupon_promocode', 
                        value).render()

                    pushDataLayer('exp_slide_in_cart_promo_applied', 'Promo code applied', 'Element visibility', 'Sidebar. Cart. Have you got a promo code');

                    updateTotal(document.querySelector('.cart'), data.customer.cart.totals, data.customer.cart.items) 

                    parentEl.remove();

                }
            })
        }
    } else {
        _this.classList.remove('busy');
        parentEl.querySelector('validation').classList.remove('ng-hide')
        parentEl.querySelector('.mui-input').classList.add('is-invalid')
        
    }
}

let validCoupon = (e, event = '') => {
    let parentEl = e.currentTarget.closest('.coupon_item');
    if (event == '' && e.currentTarget.value != '') {
        parentEl.querySelector(`.mui-input`).classList.remove('is-invalid')
        parentEl.querySelector(`.mui-input`).classList.add('is-not-empty','is-valid')
    } 
    if (event == 'blur' && e.currentTarget.value == '') {
        parentEl.querySelector(`.mui-input`).classList.remove('is-invalid', 'is-not-empty','is-valid')
    } 
    if (event == 'click') {
        if (parentEl.classList.contains('coupon_promocode')) {
            pushDataLayer('exp_slide_in_cart_promo_input', 'Enter offer code', 'Input', 'Sidebar. Cart. Have you got a promo code');
        } else if (parentEl.classList.contains('coupon_gift')) {
            pushDataLayer('exp_slide_in_cart_gift_input', 'Enter offer code', 'Input', 'Sidebar. Cart. Have you got a gift card');
        }
    }
    parentEl.querySelector(`validation`).classList.add('ng-hide')
}

let checkBalance = (e) => {
    let _this = e.currentTarget;
    _this.classList.add('busy');
                
    let value = _this.closest('.coupon_item').querySelector('input[name="giftcard"]').value;

    pushDataLayer('exp_slide_in_cart_gift_check', 'Check balance', 'Button', 'Sidebar. Cart. Have you got a gift card');

    let giftcard = {"code": value}
    if (value != '') {
        postFetch('giftcard/balance', giftcard).then(data => {
            console.log(data)
            let message = ''
            if (data.error && data.error != '') {
                message = data.error.includes('INVALID_GIFTCARD') ? `Sorry, we don't recognise this code` : data.error;
            } else {
                message = ` <p class="balance-item center">Your balance is&nbsp; <price>${currency + data.balance.toFixed(2)}</price></p>`
            }

            _this.closest('.coupon_item').querySelector('.coupon_gift_form result').innerHTML = message;
            _this.closest('.coupon_item').querySelector('.coupon_gift_form result').classList.remove('ng-hide');

            _this.classList.remove('busy');
        })
    } else {
        _this.classList.remove('busy');
        _this.closest('.coupon_item').querySelector('.coupon_gift_form validation').classList.remove('ng-hide')
        _this.closest('.coupon_item').querySelector('.coupon_gift_form .mui-input').classList.add('is-invalid')
    }
}

let openCoupon = (e) => {
    let parent = e.currentTarget.parentElement;
    parent.classList.toggle('active');

    if (e.currentTarget.closest('.coupon_promocode:not(.is)')) {
        if (parent.classList.contains('active')) {
            pushDataLayer('exp_slide_in_cart_promo_open', 'Open', 'Tab', 'Sidebar. Cart. Have you got a promo code');
        } else {
            pushDataLayer('exp_slide_in_cart_promo_close', 'Close', 'Tab', 'Sidebar. Cart. Have you got a promo code');
        }
    } else if (e.currentTarget.closest('.coupon_gift:not(.is)')) {
        if (parent.classList.contains('active')) {
            pushDataLayer('exp_slide_in_cart_gift_open', 'Open', 'Tab', 'Sidebar. Cart. Have you got a gift card');
        } else {
            pushDataLayer('exp_slide_in_cart_gift_close', 'Close', 'Tab', 'Sidebar. Cart. Have you got a gift card');
        }
    }
}

class Product {
    constructor(parent, link, image, name, price, compare, options, id, idProduct, currency, qty) {
        this.parent = parent;
        this.link = link;
        this.image = image;
        this.name = name;
        this.price = price;
        this.compare = compare;
        this.options = options;
        this.id = id;
        this.idProduct = idProduct;
        this.currency = currency;
        this.qty = qty;

        this.webCode = window.autoInitData.website.websiteCode != 'base' ? '/'+window.autoInitData.website.websiteCode : '';
    }

    render() {
        let element = document.createElement('li');
        element.className = 'flex';
        element.dataset.id = this.id;
        element.dataset.idProduct = this.idProduct;
        
        element.innerHTML = `
        <a href="${this.webCode + this.link}"> <img src="/static/media/catalog/${this.image}" alt="${this.name}"></a>
   
        <div class="product_content flex-column flex-justify-between">
            <div class="flex flex-justify-between">
                <a href="${this.webCode + this.link}" class="name">${this.name}</a>
                <p class="prices">
                    <span class="pr" data-price="${this.price}">${this.currency + (this.price * this.qty).toFixed(2)}</span>
                    ${this.compare != '' && this.compare > this.price ? ' <span class="pr-line" data-compare="' + this.compare + '">' + this.currency + (this.compare * this.qty).toFixed(2) + '</span>' : ''}
                </p>
            </div>
            <p class="options m-b-auto">
               ${this.options}
            </p>
            <div class="flex flex-justify-between flex-middle">
                <div class="calc flex">
                    <button type="button" class="calc_minus calc_button flex" ${this.qty <= 1 ? 'disabled' : ''} " onclick="qty(this)">
                        <svg width="9" height="2" viewBox="0 0 9 2" fill="#ACACAC" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="9" height="1"/>
                        </svg>
                    </button>
                    <input type="number" class="calc_qty" value="${this.qty}" onchange="qty(this)">
                    <button type="button" class="calc_plus calc_button flex" onclick="qty(this)">
                        <svg width="9" height="10" viewBox="0 0 9 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5V0.5H4V4.5H0V5.5H4V9.5H5V5.5H9V4.5H5Z"/>
                        </svg>
                    </button>
                </div>
                <button type="button" class="btn-remove underline" onclick="removeItem('.cart', this.dataset.id)" data-id="${this.id}">Remove</button>
            </div>
        </div> `;


        if (!this.parent.querySelector(`.cart_products [data-id-product="${this.idProduct}"]`)){
            this.parent.appendChild(element);
        } else {

            document.querySelector(`[data-id-product="${this.idProduct}"] .calc_qty`).value = this.qty;
            if (this.qty > 1) {
                document.querySelector(`[data-id-product="${this.idProduct}"] .calc_minus`).disabled = false
            } else {
                document.querySelector(`[data-id-product="${this.idProduct}"] .calc_minus`).disabled = true
            }
            document.querySelector(`[data-id-product="${this.idProduct}"] .pr`).dataset.price = this.price;
            document.querySelector(`[data-id-product="${this.idProduct}"] .pr`).innerHTML = this.currency + (this.price * this.qty).toFixed(2);
            if (!document.querySelector(`[data-id-product="${this.idProduct}"] .pr-line`)) {
                document.querySelector(`[data-id-product="${this.idProduct}"] .pr`).insertAdjacentHTML('afterend',`
                    ${this.compare != '' && this.compare > this.price ? ' <span class="pr-line" data-compare="' + this.compare + '">' + this.currency + (this.compare * this.qty).toFixed(2) + '</span>' : ''}
                `)
            } else {
                document.querySelector(`[data-id-product="${this.idProduct}"] .pr-line`).dataset.compare = this.compare;
                document.querySelector(`[data-id-product="${this.idProduct}"] .pr-line`).innerHTML = this.currency + (this.compare * this.qty).toFixed(2);
            }
           
        }
       
    }
}

class TopBar {
    constructor(parent, subtotal, currency) {
        this.parent = parent;
        this.subtotal = subtotal;
        this.currency = currency;
    }
    render() {


        //update topBar
        let text = '';
        let topBar =  this.parent.parentElement;

        if (window.autoInitData.website.websiteCode != 'base') {
            topBar.hidden = true;
        } else {
            topBar.hidden = false;
        
            if (this.subtotal >= 75 ) {
                topBar.classList.add('green')
                text = 'Congratulation! You have Free UK Delivery';
            } else {
                topBar.classList.remove('green')
                text = `You are ${ this.currency + (75 - this.subtotal).toFixed(2)} away from Free UK Delivery`;
            }

            this.parent.innerHTML = text;
        }
    }
}

class Total {
    constructor(parent, key, value, currency, subtotal, grandTotal) {
        this.parent = parent;
        this.key = key;
        this.value = value;
        this.currency = currency;
        this.subtotal = subtotal;
        this.grandTotal = grandTotal;
    }

    render() {

        let element = document.createElement('li');
        element.classList = `flex flex-middle`;
        element.dataset.name = this.key;


        let letter = this.key.charAt(0);
        let letterUp = this.key.charAt(0).toUpperCase();

        let minusIcon =  this.value.toString().charAt(0) == '-' ?  this.value.toString().charAt(0) : '';

        let total = minusIcon + this.currency +  this.value.toFixed(2).toString().replace(minusIcon,'');

        let price = this.key.includes('shipping') && 
                    this.value == 0 && 
                    this.subtotal >= 75 &&
                    window.autoInitData.website.websiteCode == 'base' ?  '<span class="c-red">FREE</span>' : 
                    this.key == 'giftcards' ? '-'+total : total;

        element.innerHTML =`
        <p class="">${this.key == 'grand_total' ? 'Order total' : this.key == 'shipping' ? 'Delivery' :  this.key.split('_').join(' ').replace(letter,letterUp)}</p>
        <p class="ml-auto prices">
            <span class="pr ${price.includes('-') ? 'c-red' : ''}">${price}</span>
        </p>`;

        if (this.parent.querySelector(`[data-name="${this.key}"]`)) {

            if ((this.key.includes('shipping') && this.subtotal < 75) || (!this.key.includes('shipping') && total.includes(currency+'0.00'))) {
                this.parent.querySelector(`[data-name="${this.key}"]`).remove()
            } else {
                let newPr =  this.parent.querySelector(`[data-name="${this.key}"] .pr`)
                newPr.innerHTML = price;
                newPr.innerHTML.includes('-') ? newPr.classList.add('c-red') : newPr.classList.remove('c-red');
            }
        } else {
            if (price != currency+'0.00' && price != '-'+currency+'0.00' ) {
                this.parent.appendChild(element)
            }
        }

        new TopBar(
            this.parent.closest('.cart_body').querySelector('.cart_topBar p'),
            this.subtotal,
            this.currency
        ).render()
        
        document.body.querySelectorAll('.klarna_pr').forEach(item => {
            item.innerHTML = this.currency + (this.grandTotal / 3).toFixed(2);
        })
        
    }
}

class Coupon {
    constructor(parent, classes, code) {
        this.parent = parent;
        this.code = code;
        this.classes = classes;
        this.svg = this.classes == 'coupon_promocode' ? 
        `<svg class="m-r-3 flex-noshrink" width="20" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7784 18H2.38309C1.99466 17.9995 1.62227 17.845 1.34761 17.5703C1.07295 17.2957 0.918441 16.9233 0.917969 16.5348V8.41621C0.917686 8.12691 1.00336 7.84405 1.16411 7.60353L4.12373 3.16403C4.25734 2.96317 4.43857 2.79849 4.65126 2.68465C4.86396 2.57081 5.10151 2.51136 5.34275 2.5116H12.8188C13.06 2.51136 13.2976 2.57081 13.5103 2.68465C13.7229 2.79849 13.9042 2.96317 14.0378 3.16403L16.9974 7.6035C17.1582 7.84403 17.2438 8.12689 17.2435 8.41618V16.5348C17.2431 16.9233 17.0886 17.2957 16.8139 17.5703C16.5392 17.845 16.1669 17.9995 15.7784 18ZM5.34275 3.76741C5.30828 3.76733 5.27433 3.7758 5.24393 3.79206C5.21354 3.80833 5.18766 3.83189 5.16861 3.86062L2.20895 8.30011C2.18621 8.33458 2.174 8.37492 2.17378 8.41621V16.5348C2.17389 16.5903 2.19597 16.6435 2.2352 16.6827C2.27443 16.722 2.32761 16.744 2.38309 16.7441H15.7784C15.8339 16.744 15.8871 16.722 15.9263 16.6827C15.9655 16.6435 15.9876 16.5903 15.9877 16.5348V8.41621C15.9875 8.37492 15.9753 8.33458 15.9526 8.30011L12.9929 3.86062C12.9739 3.83189 12.948 3.80833 12.9176 3.79206C12.8872 3.7758 12.8532 3.76733 12.8188 3.76741H5.34275Z" fill="#595959"/>
            <path d="M6.56921 14.6512C6.44504 14.6511 6.32366 14.6143 6.22042 14.5453C6.11718 14.4763 6.03671 14.3783 5.9892 14.2635C5.94168 14.1488 5.92925 14.0226 5.95347 13.9008C5.97769 13.779 6.03747 13.6671 6.12527 13.5793L11.1485 8.55606C11.2664 8.43902 11.4259 8.37348 11.592 8.37378C11.7581 8.37408 11.9173 8.44021 12.0348 8.55767C12.1523 8.67513 12.2184 8.83436 12.2187 9.00048C12.219 9.16659 12.1534 9.32606 12.0364 9.44395L7.01316 14.4672C6.95493 14.5256 6.88573 14.5719 6.80955 14.6035C6.73336 14.6351 6.65168 14.6513 6.56921 14.6512Z" fill="#595959"/>
            <path d="M6.98724 11.3024C6.61467 11.3024 6.25047 11.1919 5.9407 10.9849C5.63092 10.7779 5.38948 10.4837 5.24691 10.1395C5.10433 9.7953 5.06703 9.41654 5.13971 9.05114C5.2124 8.68573 5.3918 8.35009 5.65525 8.08664C5.91869 7.8232 6.25434 7.64379 6.61974 7.57111C6.98515 7.49842 7.3639 7.53573 7.70811 7.6783C8.05231 7.82088 8.34651 8.06232 8.55349 8.37209C8.76048 8.68187 8.87096 9.04607 8.87096 9.41863C8.87041 9.91806 8.67177 10.3969 8.31863 10.75C7.96548 11.1032 7.48666 11.3018 6.98724 11.3024ZM6.98724 8.79073C6.86305 8.79073 6.74165 8.82755 6.63839 8.89655C6.53513 8.96554 6.45465 9.06361 6.40713 9.17834C6.3596 9.29308 6.34717 9.41933 6.3714 9.54113C6.39562 9.66293 6.45543 9.77482 6.54324 9.86263C6.63105 9.95044 6.74294 10.0102 6.86474 10.0345C6.98654 10.0587 7.11279 10.0463 7.22753 9.99874C7.34226 9.95122 7.44033 9.87074 7.50932 9.76748C7.57832 9.66422 7.61514 9.54282 7.61514 9.41863C7.61496 9.25216 7.54875 9.09255 7.43103 8.97484C7.31332 8.85712 7.15371 8.79091 6.98724 8.79073Z" fill="#595959"/>
            <path d="M11.1747 15.4884C10.8022 15.4884 10.438 15.3779 10.1282 15.1709C9.81842 14.9639 9.57698 14.6697 9.43441 14.3255C9.29183 13.9813 9.25453 13.6026 9.32721 13.2372C9.3999 12.8718 9.5793 12.5361 9.84275 12.2727C10.1062 12.0092 10.4418 11.8298 10.8072 11.7571C11.1726 11.6845 11.5514 11.7218 11.8956 11.8643C12.2398 12.0069 12.534 12.2484 12.741 12.5581C12.948 12.8679 13.0585 13.2321 13.0585 13.6047C13.0579 14.1041 12.8593 14.5829 12.5061 14.9361C12.153 15.2892 11.6742 15.4878 11.1747 15.4884ZM11.1747 12.9768C11.0505 12.9768 10.9291 13.0136 10.8259 13.0826C10.7226 13.1516 10.6422 13.2496 10.5946 13.3644C10.5471 13.4791 10.5347 13.6054 10.5589 13.7272C10.5831 13.849 10.6429 13.9609 10.7307 14.0487C10.8186 14.1365 10.9304 14.1963 11.0522 14.2205C11.174 14.2447 11.3003 14.2323 11.415 14.1848C11.5298 14.1373 11.6278 14.0568 11.6968 13.9535C11.7658 13.8503 11.8026 13.7289 11.8026 13.6047C11.8025 13.4382 11.7362 13.2786 11.6185 13.1609C11.5008 13.0432 11.3412 12.9769 11.1747 12.9768Z" fill="#595959"/>
            <path d="M10.756 6.27901H7.4072C7.24067 6.27901 7.08096 6.21285 6.96321 6.0951C6.84545 5.97734 6.7793 5.81763 6.7793 5.6511C6.7793 5.48457 6.84545 5.32486 6.96321 5.2071C7.08096 5.08935 7.24067 5.02319 7.4072 5.02319H10.756C10.9226 5.02319 11.0823 5.08935 11.2 5.2071C11.3178 5.32486 11.3839 5.48457 11.3839 5.6511C11.3839 5.81763 11.3178 5.97734 11.2 6.0951C11.0823 6.21285 10.9226 6.27901 10.756 6.27901Z" fill="#595959"/>
            <path d="M9.08103 6.27907C8.91451 6.27903 8.75483 6.21286 8.63708 6.09511C8.51934 5.97737 8.45317 5.81768 8.45312 5.65116V3.44817C8.45417 2.53398 8.8178 1.65753 9.46423 1.0111C10.1107 0.364672 10.9871 0.00104832 11.9013 2.44515e-06H12.595C13.1628 -0.000674408 13.7219 0.139181 14.2225 0.407094C14.7231 0.675007 15.1496 1.06265 15.4639 1.53544C15.6639 1.83598 15.935 2.08239 16.2533 2.25271C16.5715 2.42304 16.927 2.51198 17.288 2.51163H17.4531C17.6197 2.51163 17.7794 2.57778 17.8971 2.69554C18.0149 2.81329 18.081 2.973 18.081 3.13954C18.081 3.30607 18.0149 3.46578 17.8971 3.58353C17.7794 3.70129 17.6197 3.76744 17.4531 3.76744H17.288C16.7202 3.76812 16.1611 3.62826 15.6605 3.36035C15.1599 3.09244 14.7334 2.7048 14.4191 2.232C14.2191 1.93146 13.948 1.68506 13.6297 1.51473C13.3114 1.34441 12.956 1.25546 12.595 1.25582H11.9013C11.3201 1.2565 10.7628 1.48769 10.3518 1.89869C9.94082 2.30969 9.70962 2.86693 9.70894 3.44817V5.65116C9.70889 5.81768 9.64273 5.97737 9.52498 6.09511C9.40723 6.21286 9.24755 6.27903 9.08103 6.27907Z" fill="#595959"/>
        </svg>` :
        `<svg class="m-r-3 flex-noshrink" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6325 0.734985H1.36752C0.613462 0.734985 0 1.34845 0 2.10251V13.8974C0 14.6514 0.613462 15.2649 1.36752 15.2649H18.6325C19.3865 15.2649 20 14.6514 20 13.8974V2.10251C20 1.34845 19.3865 0.734985 18.6325 0.734985ZM18.8034 2.10251V6.16234H9.8809C10.5622 5.32464 10.5067 4.09165 9.72974 3.33533C8.93043 2.55725 7.64957 2.53088 6.79487 3.26144V1.93157H18.6325C18.7268 1.93157 18.8034 2.00823 18.8034 2.10251ZM4.87603 4.27858C5.08316 4.48028 5.3232 5.27118 5.48662 6.09362C4.61115 5.95499 3.74782 5.73345 3.54184 5.53281C3.18876 5.189 3.17171 4.61362 3.52897 4.26584C3.89825 3.90635 4.5106 3.92276 4.87603 4.27858ZM8.90278 4.18781C9.26009 4.53563 9.24299 5.11097 8.88991 5.45477C8.67829 5.66084 7.82231 5.9037 6.93479 6.06926C7.10308 5.21858 7.34769 4.40319 7.55573 4.20054C7.92124 3.84464 8.53346 3.82828 8.90278 4.18781ZM1.36752 1.93157H5.59829V3.33298C4.78632 2.60917 3.48346 2.63272 2.68658 3.4084C1.92808 4.14678 1.88855 5.31746 2.48893 6.16234H1.19658V2.10251C1.19658 2.00823 1.27325 1.93157 1.36752 1.93157ZM1.19658 13.8974V7.35892H4.82598L3.36667 8.834C3.13509 9.06969 3.13833 9.44353 3.37402 9.67516C3.60979 9.90678 3.98077 9.90101 4.21239 9.66533L5.59829 8.24481V14.0683H1.36752C1.27325 14.0683 1.19658 13.9917 1.19658 13.8974ZM18.6325 14.0683H6.79487V8.2064L8.4615 9.82105C8.74718 10.0509 9.03111 10.0471 9.31329 9.8096C9.5438 9.57281 9.53962 9.20387 9.30282 8.9734L7.63491 7.35892H18.8034V13.8974C18.8034 13.9917 18.7268 14.0683 18.6325 14.0683Z" fill="#595959"/>
            <path d="M17.0736 9.97576H10.2624C9.93193 9.97576 9.66406 9.70789 9.66406 9.37747C9.66406 9.04704 9.93193 8.77917 10.2624 8.77917H17.0736C17.404 8.77917 17.6718 9.04704 17.6718 9.37747C17.6718 9.70789 17.404 9.97576 17.0736 9.97576Z" fill="#595959"/>
            <path d="M17.0744 12.6266H15.8151C15.4847 12.6266 15.2168 12.3588 15.2168 12.0283C15.2168 11.6979 15.4847 11.4301 15.8151 11.4301H17.0744C17.4048 11.4301 17.6727 11.6979 17.6727 12.0283C17.6727 12.3588 17.4048 12.6266 17.0744 12.6266Z" fill="#595959"/>
            <path d="M13.409 12.6266H10.2624C9.93193 12.6266 9.66406 12.3588 9.66406 12.0283C9.66406 11.6979 9.93193 11.4301 10.2624 11.4301H13.409C13.7394 11.4301 14.0073 11.6979 14.0073 12.0283C14.0073 12.3588 13.7394 12.6266 13.409 12.6266Z" fill="#595959"/>
        </svg>`;
        this.textCurrent = this.classes == 'coupon_promocode' ? 'Have you got a promo code?' : 'Have you got a gift card?';
        this.name = this.classes == 'coupon_promocode' ? 'coupon' : 'giftcard';
        this.btn = this.classes == 'coupon_promocode' ? 
        `<button type="button" class="w-12 button-1 btn-cancel" onclick="toggleActive(event.target.closest('.coupon_item'), false)"><span>Cancel</span></button>` :
        `<action class="w-12 button-1 btn-check-balance" onclick="checkBalance(event)">
            <span class="button__busy">
                <span class="bounce1"></span>
                <span class="bounce2"></span>
            </span>
            <span class="button__body">
                <span>Check balance</span>
            </span>
        </action>`;


        this.textCurrent = this.code != '' ? 
            (this.classes == 'coupon_promocode' ? 'Voucher' : 'Gift card') + ` <b class="c-red m-b-0 m-r-0"> ${this.code} </b> has been applied
                <button class="btn-remove-code" onclick="removeCoupon('${this.code}', '${this.classes}')">Click here to remove</button>` : 
            this.textCurrent

    }
    render() {
        let element = document.createElement('div');
        element.className = 'coupon_item ' + this.classes + (this.code != '' ? ' is' : '');
        element.dataset.code = this.code;

        let formElement = document.createElement('form');
        formElement.className = this.classes + '_form';
        formElement.innerHTML = `
        <input-wrap class="input-wrap no-validation-icon">
            <div class="has-label is-required mui-input"><!---->
                <input type="text" name="${this.name}" required="" class="input ng-pristine ng-invalid ng-touched" oninput="validCoupon(event)" onblur="validCoupon(event, 'blur')" onclick="validCoupon(event, 'click')">
                <label>Enter offer code</label>
                <validation class="ng-hide">This is a required field.</validation>
            </div>
        </input-wrap>
        <div class="m-t pos-relative">
            <div class="c-12-set m-r-0 m-b-2 flex">
                <div class="w-6 p-r-1">
                    <action class="w-12 button btn-apply" onclick="addCoupon(event)" >
                        <span class="button__busy">
                            <span class="bounce1"></span>
                            <span class="bounce2"></span>
                        </span>
                        <span class="button__body">
                            <span>Apply</span>
                        </span>
                    </action>
                </div>
                <div class="w-6 p-l-1">
                    ${this.btn}
                </div>
            </div>
            <div class="col-2 s1 m-t-1">
                <result class="c1 ng-hide ng-star-inserted" style="">
                    <p class="s2 m-t-1"></p>
                </result>
            </div>
        </div>`

        element.innerHTML = `
        <div class="coupon_current flex flex-middle" onclick="openCoupon(event)">
            ${this.svg}
            <span>${this.textCurrent}</span>
            
            ${this.code != '' ? 
            `<svg class="ml-auto flex-noshrink" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.59375 3.5625 0 8 0C12.4063 0 16 3.59375 16 8C16 12.4375 12.4063 16 8 16C3.5625 16 0 12.4375 0 8ZM11.5938 6.625C11.9375 6.28125 11.9375 5.75 11.5938 5.40625C11.25 5.0625 10.7188 5.0625 10.375 5.40625L7 8.78125L5.59375 7.40625C5.25 7.0625 4.71875 7.0625 4.375 7.40625C4.03125 7.75 4.03125 8.28125 4.375 8.625L6.375 10.625C6.71875 10.9688 7.25 10.9688 7.59375 10.625L11.5938 6.625Z" fill="#822338"/>
            </svg>` : '<span class="plus ml-auto"></span>'}
        </div>`;

        this.parent.appendChild(element)

        if (this.code == '') {
            element.appendChild(formElement)
        } 
    }
}

// Swiper Slider 
let scriptCustom = document.createElement('script')
scriptCustom.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
scriptCustom.async = false

let scriptCustomStyle = document.createElement('link')
scriptCustomStyle.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css'
scriptCustomStyle.rel = 'stylesheet'

let clickBasket = setInterval(() => {
    if (document.querySelector('header basket-qty') && !document.querySelector('.btn-basket') && !document.querySelector('.cart')) {
        clearInterval(clickBasket)

        // add slide in cart html
        document.body.insertAdjacentHTML('afterbegin', style);
        document.body.insertAdjacentHTML('beforeend', cartHTML);

        document.head.appendChild(scriptCustom)
        document.head.appendChild(scriptCustomStyle)


        let buttonBasket = document.querySelector('header basket-qty').parentElement,
            cart = document.querySelector('.cart');

        let appHeight = () => {
            cart.querySelector('.cart_container').style.height = window.innerHeight + 'px';
        }
        window.addEventListener('resize', appHeight)
        appHeight()

        buttonBasket.insertAdjacentHTML('afterend', `<button type="button" class="btn-basket">
        ${document.querySelector('header basket-qty').innerHTML}</button>`)

        cart.querySelector('.btn_submit').addEventListener('click', () => {
            pushDataLayer('exp_slide_in_cart_check_out_securely', 'Check out securely', 'Button', 'Sidebar cart. Order total')
        })
        cart.querySelector('.cart_empty a').addEventListener('click', () => {
            pushDataLayer('exp_slide_in_cart_shop_all_products', 'Shop all products', 'Button', 'Sidebar cart. Your bag is empty')
        })
        cart.querySelector('.coupon_vouchers').addEventListener('click', () => {
            pushDataLayer('exp_slide_in_cart_buy_gift_vouchers', 'Buy gift vouchers', 'Button', 'Sidebar cart. Discounts')
        })

        document.querySelector('.btn-basket').addEventListener('click', (e) => {
            e.stopImmediatePropagation();

            cart.classList.add('loading');
            toggleActive(cart, true)
            init()
        })
        let backdrop = (size, sizeBox, name) => `
      
        <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
        <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: flex-start; align-items: flex-start;">
            <div id="cdk-overlay-1" class="cdk-overlay-pane"
                style="width: 100%; height: 100%; max-width: 100%; position: static; margin: 0px;">
                <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
                <modal-bottom-container tabindex="-1" aria-modal="true"
                    class="modal-container modal-bottom-container ng-tns-c22-24 ng-trigger ng-trigger-modalBottomContainer ng-star-inserted modal-container-overflow-hidden"
                    id="modal-1" role="dialog" style="transform: translateY(0%);">
                    <div class="pos-absolute bottom-0 left-2 right-2 z-3 bg-col-w p-a p-b-5 quick-add-to-basket ng-star-inserted">
                        <button _ngcontent-app-c142="" type="button" class="pos-absolute p-a top-0 right-0" aria-label="Close">
                            <i aria-hidden="true" class="icon-close"></i>
                        </button>
                        <h4 class="h4 col-11 center m-t p-l-14 p-r-14 m-b-5-s">${name}</h4>
                        <div>
                            <lp-product-configurable-options class="w-12 p-l-2 p-r-2 p-t-5 p-r-0-s p-b p-l-0-s center">
                                <p class="p2 col-11 m-b-1 ng-star-inserted">Size: ${size}</p>
                                ${sizeBox}
                            </lp-product-configurable-options>
                            <lp-product-in-stock-date class="ng-star-inserted"></lp-product-in-stock-date>
                            <lp-add-to-basket class="flex-column flex-column-reverse-s flex-grow-s ng-star-inserted">
                                <action cy-basketaddbutton="" class="w-12 button p-r-0-s p-l-0-s btn-add-to-bag">
                                    <span class="button__busy">
                                        <span class="bounce1"></span>
                                            <span _ngcontent-app-c81=""
                                        class="bounce2"></span></span>
                                        <span class="button__body"> Add to bag</span>
                                </action>
                                <result class="block ng-hide c-red">
                                    <p class="s2 m-t-1"></p>
                                </result>
                            </lp-add-to-basket>
                        </div>
                    </div>
                </modal-bottom-container>
                <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
            </div>
        </div>`

        reqCategory.then(data => {
            console.log(data)
            let randomIndexes = [];

            let webCode = window.autoInitData.website.websiteCode != 'base' ? '/'+window.autoInitData.website.websiteCode : '';

            for (let i = 0; i < 11; i++) {
                randomIndexes.push(Math.floor(Math.random() * 100))
            }
          
            for (let i = 0; i < randomIndexes.length; i++) {
                let item =  data.catalog[randomIndexes[i]];

                if (item.plp_label != "Sold Out") {
                    //stars
                    let stars = '';
                    let reviewRating = (item.reviews.rating / 10 / 2).toFixed(1);
                    let reviewCount = item.reviews.count;

                    let iWholeStars = Math.floor(reviewRating);
                    let iEmptyStars = 5 - Math.ceil(reviewRating);

                    let blnHalfStar = (iWholeStars < reviewRating);
                
                    for (var iStar = 1; iStar <= iWholeStars; iStar++) {
                        stars += '<i class="rate-full"></i>'
                    }
                
                    if (blnHalfStar) {
                        stars += '<i class="rate-half"></i>'
                    } 
                    for (let iEmp = 0; iEmp < iEmptyStars; iEmp++) {
                        stars += '<i class="rate-empty"></i>'
                    }

                    //sizes
                    let size = item.size_org ? item.size_org : item.size;
                    let sizes = '';
                    let sizeItem = JSON.stringify(window.autoInitData.data.attribute).split(`${size[0]},"label":"`)[1].split('"')[0].replace('\\','"')


                    for (let k = 0; k < size.length; k++) {

                        sizes += ` 
                        <box class="inline-block va-m cursor-pointer m-t-1 m-r-1 ng-star-inserted ${k == 0 ? 'is-selected' : ''}" data-id="${item.directChildrenIds[k]}" _nghost-app-c120="">
                            <div _ngcontent-app-c120="" class="p2 b-a inline-block center box">${JSON.stringify(window.autoInitData.data.attribute).split(`${size[k]},"label":"`)[1].split('"')[0].replace('\\','"')} </div>
                        </box>`
                    }

                    document.querySelector('.cart_favourites .swiper-wrapper').insertAdjacentHTML('beforeend',`
                    <div class="swiper-slide ng-star-inserted">
                        <product class="w-12 left ng-star-inserted" style="visibility: visible;">
                            <div class="pos-relative flex-column height-100 product-card ng-star-inserted">
                                
                                <div class="ng-star-inserted">
                                    <div class="pos-relative">
                                        <a class="w-12 ratio-3-4 overflow-hidden ng-star-inserted"
                                            href="${webCode+item.url}">
                                            <shell>
                                                <img class="_shellImg">
                                            </shell>
                                            <img class="rf dynamic-image loaded" alt="${item.name}"
                                                src="/tco-images/unsafe/152x203/filters:format(webp):quality(70)/https://www.lemieuxproducts.com/static/media/catalog/${item.image}">
                                        </a>
                                        <div class="product-size" style="display: none;">${sizes}</div>
                                        <product-quick-buy class="pos-absolute bottom-2 right-2 z-1 ng-tns-c133-30 ng-star-inserted" data-size="${sizeItem}" data-name="${item.name}">
                                            <button class="quick-add-btn bg-col-w flex flex-middle flex-justify-center ng-tns-c133-30 ng-star-inserted">
                                                <i aria-hidden="true" class="icon-basket-add flex col-12 p-a-1 ng-tns-c133-30"></i>
                                            </button>
                                        </product-quick-buy>
                                    </div>
                                    <wishlist-toggle _ngcontent-app-c142="" class="product-wishlist ng-star-inserted"><div class="pos-absolute top-2 z-1 right-2"><div><action cy-wishlistaddbtn="" data-id="${item.id}" class="wishlist-button cursor-pointer" _nghost-app-c81=""><span _ngcontent-app-c81="" class="button__busy"><span _ngcontent-app-c81="" class="bounce1"></span><span _ngcontent-app-c81="" class="bounce2"></span></span><!----><span _ngcontent-app-c81="" class="button__body"><i aria-hidden="true" class="inline-flex icon-wishlist" style="font-size: 1.1em;"></i></span></action><!----></div></div><result class="block ng-hide"><p class="s2 m-t-1"></p></result></wishlist-toggle>
                                    <div  class="m-t-3 p-b-1">
                                        <a sizeclass="!SM: p1, SM: p2" cy-listingproductname="" class="p2 col-1" href="${webCode+item.url}">${item.name}</a>
                                        <p sizeclass="!SM: p1, SM: p2" class="m-t-1 col-12 p2 ng-star-inserted"> ${size.length} Colours</p>
                                        <div sizeclass="!SM: p1, SM: p2" class="m-t-1 p1 col-1">
                                            <product-price class="m-r-1 price">
                                                ${window.autoInitData.website.currency.list[0].symbol + item.price.toFixed(2)}
                                            </product-price>
                                            ${item.org_price ? `<product-price class="m-r-1 line-through col-12">` +
                                                window.autoInitData.website.currency.list[0].symbol + item.price.toFixed(2) +
                                            `</product-price>` : '' }
                                        </div>
                                        ${reviewCount > 0 ? ` 
                                        <div class="flex flex-middle m-t-1" style="margin-left: -0.14rem;">
                                            <rating class="inline-flex fs-7-x fs-7-l ng-star-inserted">${stars}</rating>
                                            <span sizeclass="XL:p1, MS:p2" class="m-l-2 p1 ng-star-inserted" style="line-height: 1em;">(${reviewCount})</span>
                                        </div>`: ''}
                                        
                                    </div>
                                </div>
                            </div>
                        </product>
                    </div>`)

                    
                }
            }
            document.querySelectorAll('.cart_favourites product-quick-buy').forEach((el, index) => {
                document.querySelectorAll('.cart_favourites .wishlist-button')[index].addEventListener('click', (e) => {
                    let body = {"product": e.currentTarget.dataset.id};
                    
                    e.currentTarget.classList.add('busy')

                    postFetch('wishlist/add', body).then(dataWishlist => {
                        let webCode = window.autoInitData.website.websiteCode != 'base' ? '/'+window.autoInitData.website.websiteCode : '';
                        if (dataWishlist.error && dataWishlist.error == 'LOGGEDOUT') {
                            window.location.href = webCode + '/login'
                        } else {
                            e.target.closest('.product-wishlist').innerHTML = `<div class="pos-absolute top-2 z-1 w-12 center p-l-2 p-r-2"><div class="p-a-1 bg-col-w flex flex-middle flex-justify-center"><action cy-wishlistaddbtn="" class="wishlist-button cursor-pointer" _nghost-app-c81=""><span _ngcontent-app-c81="" class="button__busy"><span _ngcontent-app-c81="" class="bounce1"></span><span _ngcontent-app-c81="" class="bounce2"></span></span><!----><span _ngcontent-app-c81="" class="button__body"><i aria-hidden="true" class="inline-flex icon-wishlist-fill col-1" style="font-size: 1.1em;"></i></span></action><span sizeclass="XL:p1" class="p-l-2 p3 ng-star-inserted">Added to wishlist</span><!----></div></div>`
                        }
                    })
                })

                el.addEventListener('click', () => {
                    document.querySelector('.container-add-to-bag').innerHTML = backdrop(el.dataset.size, el.previousElementSibling.innerHTML, el.dataset.name)
                    
                    document.querySelectorAll('.container-add-to-bag box').forEach(box => {
                        box.addEventListener('click', (e) => {
                            e.currentTarget.parentElement.querySelector('.is-selected').classList.remove('is-selected');
                            box.classList.add('is-selected');
                            box.parentElement.querySelector('p').innerHTML = 'Size: ' + box.innerText;
                        })
                    })
                    document.addEventListener('click', (e) => {
                        if (e.target.classList.contains('modal-container')) {
                            document.querySelector('.container-add-to-bag').innerHTML = '';
                        }
                    })
                    document.querySelector('.container-add-to-bag .quick-add-to-basket > button').addEventListener('click', () => {
                        document.querySelector('.container-add-to-bag').innerHTML = '';
                    })
                    document.querySelector('.container-add-to-bag .btn-add-to-bag').addEventListener('click', (e) => {
                        e.stopImmediatePropagation()
                        let id = document.querySelector('lp-product-configurable-options box.is-selected').dataset.id;
                        let body = {"products":[{"id":id,"qty":1,"options":{},"bundle_options":{}}]}
                        
                        e.currentTarget.classList.add('busy')
                        cart.classList.add('loading')
                        postFetch('basket/add', body).then(dataAdd => {
                            console.log(dataAdd)
                            if (dataAdd.error && dataAdd.error != '') {
                                document.querySelector('.container-add-to-bag result p').innerHTML = dataAdd.error;
                                document.querySelector('.container-add-to-bag result').classList.remove('ng-hide');
                                document.querySelector('.container-add-to-bag .btn-add-to-bag').classList.remove('busy');
                                document.querySelector('.cart').classList.remove('loading');
                            } else {
                                let items = dataAdd.customer.cart.items;
                                let totals = dataAdd.customer.cart.totals;
    
                                document.querySelector('.container-add-to-bag').innerHTML = '';
    
                                addProduct(document.querySelector('.cart'), items, totals, 1) 
                            }

                        
                        })
                    })
                })
            })

            const waitForSwiper = setInterval(() => {
                if (typeof Swiper !== 'undefined') {
                    clearInterval(waitForSwiper)
            
                    // #1 Main slider 
                    var swiperMainSync = new Swiper(".cart_favourites .swiper", {
                        slidesPerView: 2,
                        slideToClickedSlide: true,
                        spaceBetween: 16,
                        scrollbar: {
                            el: '.swiper-scrollbar',
                            draggable: true,
                            dragSize: 48
                          }
                    })
                }
            })
        })
    }
});

let init = () => {
    let interval = setInterval(() => {
       
        if (document.querySelector('.cart.active')) {
            clearInterval(interval)

            //get currency website
            currency = window.autoInitData.website.currency.list[0].symbol;
            //cart
            let cart = document.querySelector('.cart');
       
            pushDataLayer('exp_slide_in_cart_visibility', 'Cart visibility', 'Element visibility', 'Sidebar cart')

            if (!document.querySelector('.klarna_popup')) {
                // add klarna popup
                document.body.insertAdjacentHTML('beforeend',`<div class="klarna_popup flex">
                    <div class="klarna_popup_container">
                        <div class="head flex flex-middle">
                            <img src="${dir}/img/Klarna_Logo_black.svg" alt="logo">
                            <button type="button" class="btn-close ml-auto">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3007 0.709727C12.9107 0.319727 12.2807 0.319727 11.8907 0.709727L7.0007 5.58973L2.1107 0.699727C1.7207 0.309727 1.0907 0.309727 0.700703 0.699727C0.310703 1.08973 0.310703 1.71973 0.700703 2.10973L5.5907 6.99973L0.700703 11.8897C0.310703 12.2797 0.310703 12.9097 0.700703 13.2997C1.0907 13.6897 1.7207 13.6897 2.1107 13.2997L7.0007 8.40973L11.8907 13.2997C12.2807 13.6897 12.9107 13.6897 13.3007 13.2997C13.6907 12.9097 13.6907 12.2797 13.3007 11.8897L8.4107 6.99973L13.3007 2.10973C13.6807 1.72973 13.6807 1.08973 13.3007 0.709727Z" fill="#212121"/>
                                </svg>
                            </button>
                        </div>
                        <h3>3 interest free payments of <b class="klarna_pr"></b> </h3>
                        <p>Buy what you love and split the cost. It’s easy and interest-free.</p>
                        <ul>
                            <li class="flex flex-middle">
                                <img src="${dir}/img/add-to-basket.svg" alt="icon">
                                <span>Add product(s) to your bag</span>
                            </li>
                            <li class="flex flex-middle">
                                <img src="${dir}/img/k.svg" alt="icon">
                                <span>Go to checkout and choose</span>
                                <img src="${dir}/img/Klarna_Logo_black.svg" alt="logo icon" class="img-klarna">
                            </li>
                            <li class="flex flex-middle">
                                <img src="${dir}/img/credit-card.svg" alt="icon">
                                <span>Enter your debit or credit card information</span>
                            </li>
                            <li class="flex">
                                <img src="${dir}/img/time.svg" alt="icon">
                                <span>Your first payment is taken when the order is processed and the remaining 3 are automatically taken every 14 days.</span>
                            </li>
                        </ul>
                        <button type="button" class="btn_continue btn">Complete purchase</button>
                        <p>Please note that a higher initial payment may be required for some consumers. Fees may apply. Read the <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/en-GB/1.0.1/paylaterin3" target="_blank" class="underline">terms </a> for more information.</p>
                    </div>
                </div>`)

                document.querySelector('.btn-more').addEventListener('click', () => {
                    toggleActive(document.querySelector('.klarna_popup'), true)
                    pushDataLayer('exp_slide_in_cart_clarna_link','Learn more','Link','Sidebar cart. Klarna');
                    pushDataLayer('exp_slide_in_cart_popup_klarna_vis','Klarna Popup','Element visibility','Klarna Popup');
                })  
                document.querySelector('.klarna_popup .btn-close').addEventListener('click', () => {
                    toggleActive(document.querySelector('.klarna_popup'), false);
                    pushDataLayer('exp_slide_in_cart_popup_klarna_close','Close','Button','Klarna Popup');
                })
                document.querySelector('.klarna_popup .btn_continue').addEventListener('click', () => {
                    toggleActive(document.querySelector('.klarna_popup'), false)
                    pushDataLayer('exp_slide_in_cart_popup_klarna_complete','Complete purchase','Button','Klarna Popup');
                })

                document.querySelector('.klarna_popup > div > p a.underline').addEventListener('click', () => {
                    pushDataLayer('exp_slide_in_cart_popup_klarna_terms', 'Terms', 'Link', 'Klarna Popup')
                })

                let viewedKlarna = false;
                document.querySelector('.cart_container').addEventListener('scroll', () => {
                    if (isScrolledIntoView(document.querySelector('.klarna_content')) && viewedKlarna == false) {
                        setTimeout(() => {
                            if (isScrolledIntoView(document.querySelector('.klarna_content')) && viewedKlarna == false) {
                                viewedKlarna = true;
                                pushDataLayer('exp_slide_in_cart_clarna_visibility','Klarna','Element visibility','Sidebar cart. Klarna') 
                            }
                        }, 3000)
                    }
                })
            }
            if (!cart.querySelector(`.coupon_gift[data-code=""]`)) {
                new Coupon(
                    document.querySelector('.coupon_content'),
                    'coupon_gift',
                    ''
                ).render()
            }

            getFetch('p/customer/data').then(data => {
                console.log(data)

                let items = data.customer.cart.items;

                let countCart = data.customer.cart.qty ? data.customer.cart.qty : 0;
                

                // add promocode
                if (data.customer.cart.coupon && data.customer.cart.coupon != '' && !cart.querySelector(`.coupon_promocode[data-code="${data.customer.cart.coupon}"]`)) {
                    new Coupon(
                        document.querySelector('.coupon_content'),
                        'coupon_promocode',
                        data.customer.cart.coupon
                    ).render()
                } else {
                    if (!cart.querySelector(`.coupon_promocode`)) {
                        new Coupon(
                            document.querySelector('.coupon_content'),
                            'coupon_promocode',
                            ''
                        ).render()
                    } 
                }

                if (countCart == 0) {
                    document.querySelector('.cart').classList.add('empty');
                    pushDataLayer('exp_slide_in_cart_bag_is_empty_vis','Your bag is empty','Element visibility','Sidebar cart. Your bag is empty')

                } else {
                    document.querySelector('.cart').classList.remove('empty');

                    let totals = data.customer.cart.totals;
                    let grand_total = totals.grand_total;
                    let giftcards = data.customer.cart.giftcards;

                    // add total in footer cart
                    document.querySelector('.cart_footer price .pr').innerHTML = currency + grand_total;
                    
                    //add giftcards
                    if (giftcards.length > 0) {
                        for (let i = 0; i < giftcards.length; i++) {
                            if (!cart.querySelector(`.coupon_gift[data-code="${giftcards[i].code}"]`)) {
                                new Coupon(
                                    document.querySelector('.coupon_content'),
                                    'coupon_gift',
                                    giftcards[i].code
                                ).render()
                            }
                        }
                        
                    }


                    // add products
                    addProduct(cart, items, totals, countCart)
                }

                document.querySelector('.cart_head h2 span').innerHTML = countCart;
               
                cart.classList.remove('loading');
            })

            document.querySelector('.cart_close').addEventListener('click', (e) => {
                toggleActive(cart, false)
            })

            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('cart')) {
                    toggleActive(cart, false)
                }
            })

        }
    })
}

let addToBagLp = setInterval(() => {
    if (document.querySelector('.cdk-overlay-pane basket-add-notice .icon-close') && document.querySelector('.cart') && document.querySelector('.cdk-overlay-pane').innerText.includes('Added to your bag') && !document.querySelector('.style-lp-exp')) {
        document.querySelector('.cdk-overlay-pane').insertAdjacentHTML('beforebegin',`
        <style class="style-lp-exp">
            .cdk-overlay-pane {
                display: none!important;
            }
        </style>`)
        document.querySelector('.cdk-overlay-pane basket-add-notice .icon-close').click()

        document.querySelector('.cart').classList.add('loading');
        toggleActive(document.querySelector('.cart'), true)

        init()
    }
});

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "exp_slide_in_cart", "variant_1");
    }
}, 100)
