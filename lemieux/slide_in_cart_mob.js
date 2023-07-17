let dir = 'https://conversionratestore.github.io/projects/lemieux/';

//get currency website
let currency = window.autoInitData.website.currency.list[0].symbol;

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
.loading:after {
    content: 'Loading..';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: rgba(255,255,255,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
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
    max-width: 355px;
    margin-left: auto;
    width: 100%;
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
}
.ml-auto {
    margin-left: auto;
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
.total_content ul p:not(.price) {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
}
.total_content ul li {
    padding: 7px 0;
}
.total_content [data-name="grand_total"] {
    font-size: 20px;
    line-height: 28px;
    border-top: 1px solid #D0D2D3;
    padding: 12px 0;
    margin-top: 5px;
}
.saved_block {
    background-color: #822338;
    font-weight: 600;
    line-height: 22px;
    display: none;
}
.img-feefo {
    margin: 24px auto;
    display: block;
    order: 3;
}
/* klarna */
.klarna_content {
    padding: 13px 16px;
    font-size: 14px;
    font-family: 'source-sans-3', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    order: 2;
}
.klarna_content .klarna_pr {
    margin-left: 4px;
}
.img-klarna {
    margin: 0 8px;
    background-color: #F1B6C6;
    padding: 7px 5.4px;
    border-radius: 8px;
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
.cart.empty .cart_body, .cart.empty .cart_footer {
    display: none!important;
}
.cart.empty .cart_empty {
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
</style>`;


let cartHTML = `
    <div class="cart">
        <div class="cart_container">
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
            <div class="cart_body">
                <div class="cart_topBar flex flex-middle flex-justify-center">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <svg class="m-r-2" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2521 3.49618H16.5513C16.7473 3.1547 16.8601 2.75959 16.8601 2.33838C16.8601 1.40186 16.3282 0.584379 15.4721 0.204833C14.6159 -0.174748 13.653 -0.0197878 12.9591 0.609102L11.4799 1.94968C11.1651 1.46543 10.6196 1.14421 10.0002 1.14421C9.37981 1.14421 8.83361 1.46638 8.51904 1.95193L7.03728 0.609067C6.34338 -0.0197526 5.38041 -0.174677 4.52436 0.204904C3.66821 0.584379 3.13638 1.40193 3.13638 2.33842C3.13638 2.75963 3.24911 3.1547 3.4451 3.49621H2.74835C1.77569 3.49618 0.984375 4.28749 0.984375 5.26015V7.61212C0.984375 7.93683 1.24763 8.20012 1.57238 8.20012H2.16038V16.236C2.16038 17.2086 2.95169 18 3.92435 18C4.49675 18 15.6345 18 16.0761 18C17.0488 18 17.8401 17.2086 17.8401 16.236V8.20012H18.4281C18.7528 8.20012 19.0161 7.93687 19.0161 7.61212V5.26015C19.0161 4.28749 18.2247 3.49618 17.2521 3.49618ZM8.23624 16.8239H3.92431C3.6001 16.8239 3.33631 16.5602 3.33631 16.2359V8.20012H8.23621L8.23624 16.8239ZM8.23624 7.02412C7.98514 7.02412 2.41328 7.02412 2.16034 7.02412V5.26015C2.16034 4.93593 2.42413 4.67215 2.74835 4.67215C2.95758 4.67215 7.9838 4.67215 8.23624 4.67215V7.02412ZM5.47014 3.49614C4.83174 3.49614 4.31235 2.97678 4.31235 2.33838C4.31235 1.86674 4.56976 1.47107 5.00093 1.27994C5.15843 1.21013 5.32054 1.17583 5.47993 1.17583C5.75696 1.17583 6.02578 1.27951 6.24762 1.4805L8.47182 3.49618L5.47014 3.49614ZM10.0002 2.32021C10.2777 2.32021 10.5103 2.51366 10.5718 2.77266L9.99824 3.29244L9.42792 2.77554C9.48825 2.51511 9.72167 2.32021 10.0002 2.32021ZM10.5882 16.8239H9.41225V8.20012H10.5882V16.8239ZM10.5882 7.02412H9.41225V4.67215C9.83258 4.67215 10.1638 4.67215 10.5882 4.67215V7.02412ZM13.7488 1.48054C14.0983 1.16386 14.5643 1.08891 14.9955 1.28001C15.4267 1.4711 15.6841 1.86681 15.6841 2.33842C15.6841 2.97682 15.1647 3.49621 14.5263 3.49621H11.5246L13.7488 1.48054ZM16.6641 16.236C16.6641 16.5602 16.4003 16.824 16.0761 16.824H11.7642V8.20012H16.6641V16.236ZM17.8401 7.02412C17.5871 7.02412 12.0151 7.02412 11.7642 7.02412V4.67215C12.0116 4.67215 17.0374 4.67215 17.2521 4.67215C17.5763 4.67215 17.8401 4.93593 17.8401 5.26015V7.02412Z" fill="#595959"/>
                        </svg>
                        <span>Buy gift vouchers</span>
                        <svg class="ml-auto" width="20" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16117 11.8146C0.869956 12.0873 0.427756 12.0554 0.173203 11.7437C-0.0810943 11.4317 -0.0513579 10.9579 0.239597 10.6852L5.23735 6.00012L0.239341 1.31479C-0.0518697 1.04206 -0.0813497 0.568276 0.172947 0.256543C0.427501 -0.0554647 0.8697 -0.087325 1.16091 0.185408L6.76083 5.43543C6.91284 5.57771 7 5.7837 7 6.00012C7 6.21655 6.91284 6.42227 6.76083 6.56482L1.16117 11.8146Z" fill="#212121"/>
                        </svg>
                    </a>
                </div>
                <div class="total_content">
                    <ul></ul>
                    <div class="saved_block ml-auto m-t-1"></div>
                </div>
                <div class="klarna_content">
                    <p class="flex flex-middle">3 interest-fee payment of <b class="klarna_pr"></b> <img src="${dir}/img/klarna.svg" alt="logo" class="img-klarna"> <button type="button" class="btn-more underline">Learn more</button></p>
                </div>
                <img src="${dir}/img/feefo.svg" alt="imgae feefo" class="img-feefo">
            </div>
            <div class="cart_footer p-t-3 p-b-3 p-l p-r">
                <div class="flex flex-middle flex-justify-between">
                    <p>Order total</p>
                    <price>
                        <span class="">
                            <span class="pr-line"></span>
                            <span class="pr"></span>
                        </span>
                        <span class="saved_block m-t-2"></span>
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
    </div>`;

//  api
let postFetch = (host, body) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.lemieuxproducts.com/api/p/${host}`, {
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


class topBarShipping {
    constructor() {
        
    }
}


let removeItem = (parent, id) => {  // remove item 
    let obj = {
        "ids":[id]
    }
    let cart = document.querySelector(parent);
    cart.classList.add('loading');

    postFetch('basket/remove', obj).then(data => {
        console.log(data)

        document.querySelector(`.cart_products [data-id="${id}"]`).remove();
        cart.classList.remove('loading');

        let totals = data.customer.cart.totals;

        let grand_total = data.customer.cart.grand_total;
        let subtotal = data.customer.cart.subtotal;
        let countCart = data.customer.cart.qty;

        cart.querySelector('.cart_head span').innerHTML = countCart;

        for (const key in totals) {
            if (totals[key] != '0' && !key.includes('tax')) {
                new Total (
                    cart.querySelector('.total_content ul'), 
                    key, 
                    totals[key], 
                    currency, 
                    'true').render()
            }
        }


        if (countCart == 0) {
            cart.classList.add('empty')
        } else {
            cart.classList.remove('empty');
        }
    })
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
    }

    render() {
        let element = document.createElement('li');
        element.className = 'flex';
        element.dataset.id = this.id;
        element.dataset.idProduct = this.idProduct;
        
        element.innerHTML = `
        <a href="${this.link}"> <img src="/static/media/catalog/${this.image}" alt="${this.name}"></a>
   
        <div class="product_content flex-column flex-justify-between">
            <div class="flex flex-justify-between">
                <a href="${this.link}" class="name">${this.name}</a>
                <p class="prices">
                    <span class="pr" data-price="${this.price}">${this.currency + this.price}</span>
                    ${this.compare != '' ? ' <span class="pr-line" data-compare="' + this.compare + '">' + this.currency + this.compare + '</span>' : ''}
                </p>
            </div>
            <p class="options m-b-auto">
               ${this.options}
            </p>
            <div class="flex flex-justify-between flex-middle">
                <div class="calc flex">
                    <button type="button" class="calc_minus calc_button flex" ${this.qty <= 1 ? 'disabled' : ''}>
                        <svg width="9" height="2" viewBox="0 0 9 2" fill="#ACACAC" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="9" height="1"/>
                        </svg>
                    </button>
                    <input type="number" class="calc_qty" value="${this.qty}">
                    <button type="button" class="calc_plus calc_button flex">
                        <svg width="9" height="10" viewBox="0 0 9 10" fill="#212121" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5V0.5H4V4.5H0V5.5H4V9.5H5V5.5H9V4.5H5Z"/>
                        </svg>
                    </button>
                </div>
                <button type="button" class="btn-remove underline" onclick="removeItem('.cart', this.dataset.id)" data-id="${this.id}">Remove</button>
            </div>
        </div> `;

        this.parent.appendChild(element);
    }
}

class Total {
    constructor(parent, key, value, currency, update = 'false') {
        this.parent = parent;
        this.key = key;
        this.value = value;
        this.currency = currency;
        this.update = update;
    }

    render() {
        let element = document.createElement('li');
        element.classList = `flex flex-middle`;
        element.dataset.name = this.key;

        element.innerHTML =`
        <p class="">${this.key == 'grand_total' ? 'Order total' : this.key}</p>
        <p class="ml-auto prices">
            <span class="pr-line"></span>
            <span class="pr" data-price="${this.value}">${this.currency + this.value}</span>
        </p>`;

        if (!this.update) {
            this.parent.appendChild(element)
        } else {
            if (document.querySelector(`[data-name="${this.key}"]`)) {
                document.querySelector(`[data-name="${this.key}"] .pr`).dataset.price = this.value;
                document.querySelector(`[data-name="${this.key}"] .pr`).innerHTML = this.currency + this.value;
            } else {
                this.parent.appendChild(element)
            }
        }
    }
}


let toggleActive = (selector) => {
    selector.classList.toggle('active')
}

let websiteCode = window.autoInitData.website.websiteCode != 'base' ? window.autoInitData.website.websiteCode : '';

let getCart = (host) => new Promise((resolve, reject) => {
    fetch(`${websiteCode}/api/${host}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }).then(res => res.json()).then(data => {
        resolve(data)
    }).catch((error) => {
        console.error('Error:', error);
    });
})

let clickBasket = setInterval(() => {
    if (document.querySelector('basket-qty') && !document.querySelector('.cart_products li') ) {
        clearInterval(clickBasket)

        // add slide in cart html
        document.body.insertAdjacentHTML('afterbegin', style);
        document.body.insertAdjacentHTML('beforeend', cartHTML);

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
                <h3>3 interest-free payment of <b class="klarna_pr"></b> </h3>
                <p>Buy what you love and split the cost. It’s easy and interest-free.</p>
                <ul>
                    <li class="flex flex-middle">
                        <img src="${dir}/img/add-to-basket.svg" alt="icon">
                        <span>Add product(s) to your bag</span>
                    </li>
                    <li class="flex flex-middle">
                        <img src="${dir}/img/k.svg" alt="icon">
                        <span>Go to checkout and choose</span>
                        <img src="${dir}/img/klarna.svg" alt="logo icon" class="img-klarna">
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
                <p>Please note that a higher initial payment may be required for some consumers. Fees may apply. Read the <a href="https://cdn.klarna.com/1.0/shared/content/legal/terms/en-GB/1.0.1/paylaterin3" class="underline">terms </a> for more information.</p>
            </div>
        </div>`)

        let button = document.querySelector('basket-qty').parentElement,
            cart = document.querySelector('.cart');

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart_close') || e.target.classList.contains('cart')) {
                toggleActive(cart)
            }
        })
        document.querySelector('.cart').classList.add('loading');

        getCart('p/customer/data').then(data => {
            console.log(data)
            let items = data.customer.cart.items;

            let compareSum = 0;

            let totals = data.customer.cart.totals;
            let grand_total = data.customer.cart.grand_total;
            let subtotal = data.customer.cart.subtotal;
            let countCart = data.customer.cart.qty;

            if (countCart == 0) {
                document.querySelector('.cart').classList.add('empty')
            } else {
                document.querySelector('.cart').classList.remove('empty');
            }

            //add total in footer cart
            document.querySelector('.cart_footer price .pr').innerHTML = currency + grand_total;
            document.querySelector('.cart_head h2 span').innerHTML = countCart;
            

            for (const key in totals) {
                if (totals[key] != '0' && !key.includes('tax')) {
                    new Total(
                        document.querySelector('.total_content ul'),
                        key, 
                        totals[key],
                        currency).render()
                }
            }

            //add products
            for (let i = 0; i < items.length; i++) {
                getCart(`n/product/${items[i].product}/verbosity/3`).then(dataItem => {
                    console.log(dataItem)

                    let item = dataItem.catalog[0];

                    compareSum += item.org_price ? item.org_price : item.price;

                    if (i == items.length - 1) {
                        document.querySelector('.cart_footer .pr-line').innerHTML = compareSum > grand_total ? currency+compareSum : '';
                        document.querySelector('.total_content ul [data-name="subtotal"] .pr-line').innerHTML = compareSum > subtotal ? currency+compareSum : '';
                        document.querySelector('.total_content .saved_block').style = '';
                        document.querySelector('.cart_footer .saved_block').style = '';

                        if (compareSum > subtotal) {
                            document.querySelector('.total_content .saved_block').innerHTML = 'You just saved ' + currency + compareSum ;
                            document.querySelector('.total_content .saved_block').style.display = 'block';
                        }
                        if (compareSum > grand_total) {
                            document.querySelector('.cart_footer .saved_block').innerHTML = 'You just saved ' + currency + compareSum;
                            document.querySelector('.cart_footer .saved_block').style.display = 'block';
                        }
                    }
                    let options = '';

                    if (item.size_guide) {
                        options += `<span class="option"><span>Size: </span> ${JSON.stringify(window.autoInitData.data.attribute).split(`${item.size_guide},"label":"`)[1].split('"')[0]}</span> `
                    } 
                    if (item.color_org) {
                        options += `<span class="option"><span>Colour: </span> ${JSON.stringify(window.autoInitData.data.attribute).split(`${item.color_org},"label":"`)[1].split('"')[0]}</span> `
                    }
                   

                    new Product(
                        document.querySelector('.cart_products'), 
                        item.url, 
                        item.image, 
                        item.name, 
                        item.price, 
                        item.org_price ? item.org_price : '', 
                        options, 
                        items[i].id,
                        item.id,
                        currency,
                        items[i].request.qty).render()
                })
            }

            document.querySelector('.cart').classList.remove('loading');

        })
        
        button.addEventListener('click', () => toggleActive(cart))
    }
})





// // remove item 
// // https://www.lemieuxproducts.com/api/p/basket/remove 

// let obj = {
//     "ids":[3322527]
// }
// postFetch('basket/remove', obj, 'POST').then(data => {
//     console.log(data)
// })


// // update qty item 
// //https://www.lemieuxproducts.com/api/p/basket/qty
// let objUpdateQty = {"id":3322527,"qty":2}

// postFetch('basket/qty', objUpdateQty, 'POST').then(data => {
//     console.log(data)
// })

// //add item 
// // https://www.lemieuxproducts.com/api/p/basket/add
// let idAdd = document.querySelector('.product-image-gallery-container').getAttribute('class').split('galleryuid-')[1].split(' ')[0]
// let objAdd = {"products":[{"id":8497,"qty":1,"options":{},"bundle_options":{}}]}

// postFetch('basket/add', objAdd, 'POST').then(data => {
//     console.log(data)
// })

// //get data cart
// fetch(`https://www.lemieuxproducts.com/api/p/customer/data`, {
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     method: 'GET'
// }).then(res => res.json()).then(data => {
//     console.log(data)
    
// }).catch((error) => {
//     console.error('Error:', error);
// });

// //  let objItemsCart = [{"action":"route","children":[{"path":"/new-in/rhone-polo-bandages-petrol-blue-full","_reqId":0}]}]
//  //https://www.lemieuxproducts.com/api/n/bundle?requests=%5B%7B%22action%22%3A%22route%22%2C%22children%22%3A%5B%7B%22path%22%3A%22%2Fnew-in%2Frhone-polo-bandages-petrol-blue-full%22%2C%22_reqId%22%3A0%7D%5D%7D%5D

