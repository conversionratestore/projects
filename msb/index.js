const dir = `https://conversionratestore.github.io/projects/msb/img/`;
const media = window.matchMedia("(max-width: 768px)").matches;

/* CSS & HTML */
const styleBase = /*html*/ `
<style>
.action.primary {
    background: var(--Red, #A11A17);
    border-color: var(--Red, #A11A17);
    font-size: 14px!important;
}
.action.primary:focus, .action.primary:active {
    background: #A11A17;
    border: #A11A17;
}
.crs_klarna {
    font-size: 12px;
    line-height: 22px; 
    width: 100%;
}
.crs_klarna img {
    margin: 0 3px;
    max-width: 38px;
}
.crs_klarna a {
    text-decoration-line: underline;
    text-wrap: nowrap;
}
.crs_discount {
    color: var(--Brown, #862B04);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    text-transform: uppercase;
    padding: 7px 16px 7px 14px;
    border: 1px dashed var(--Gold, #B68B51);
    background: #FCF7EC;
    margin-bottom: 18px;
} 
.crs_discount svg {
    margin-right: 6px;
}
.crs_trustpilot p {
    font-size: 12px;
    line-height: 16px;
}
.crs_trustpilot p b {
    display: block;
}
@media (max-width: 768px) {
    .crs_klarna {
        order: 3;
        padding: 0 14px 0 20px;
    }
    .crs_discount {
        order: 3;
        margin-left: 20px;
    } 
}
@media (min-width: 769px) {
    .crs_klarna {
        font-size: 14px;
    }
}
</style>`;

const stylePDP = /*html */ `
<style>
.product-social-links,
.product-info-main .product-warranty-leather,
.extras-wrapper,
.crs_checkbox,
.product-addto-links {
    display: none!important;
}
body > div > button.needsclick {
    transform: translateY(200px);
}
.crs_warranty  {
    color: var(--Black, #333);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
}
.crs_warranty svg {
    margin-right: 6px;
}
.crs_wishlist:focus svg circle {
    fill: #FFEAEA;
}
.crs_wishlist:focus svg path {
    fill: #A11A17;
    stroke: #A11A17;
}
.crs_absolute {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
}
.crs_absolute .crs_warranty {
    cursor: pointer;
}
.product-info-main .page-title-wrapper .page-title {
    margin-top: 0;
    text-align: left;
    font-weight: 700;
    line-height: 32px!important;
}
.product-info-main .page-title-wrapper .product-name-sub {
    margin: 0;
    text-align: left;
    font-size: 20px;
    line-height: 28px;
}
.page-layout-1column .product.media {
    position: relative;
}
.product-info-main .product-reviews-summary {
    padding: 4px 10px;
}
.product-info-main .product-info-price,
.product-info-stock-and-review>div {
    order: 0;
    width: fit-content;
}
.product-info-main .price-box .price-wrapper .price {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; 
}
.product-info-main .price-box {
    margin: 0 14px 0 0!important;
    padding: 0!important;
}
.product-info-main .product-info-stock-and-review {
    flex-direction: row;
    padding: 18px 20px 8px;
    border-width: 1px 0 0 0;
    flex-wrap: wrap;
    align-items: center;
}
.product-info-stock-and-review .product-stock-info-block,
.product-info-stock-and-review .stock-message {
    margin: 0;
}
.msb-product-details-col-right {
    background: #fff;
}
.product-info-main .msb-product-details-col-right {
    padding: 0 20px;
}
.product-add-form {
    padding: 8px 0;
    border-top: 1px solid #CCC;
}
.product-info-main .swatch-attribute-label {
    font-family: Arial;
    font-size: 16px;
    line-height: 24px;
}
.swatch-attribute-selected-option {
    font-family: Arial!important;
    font-size: 14px!important;
    line-height: 22px;
}
.product-info-main .swatch-attribute.color .swatch-option, .product-item .swatch-attribute.color .swatch-option {
    background-size: 85%!important;
    width: 40px !important;
    height: 40px !important;
}
.product-modal-options-btn-wrap {
    display: block;
    padding-top: 18px;
    border-top: 1px solid #CCC;
    margin: 18px 0;
}
.product-modal-options-btn-wrap .product-modal-options-btn {
    border: none!important;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    min-height: auto;
    padding: 0;
    width: 100%;
}
.product-modal-options-btn-wrap .product-modal-options-btn svg {
    margin-right: 11px;
    flex-shrink: 0;
}
.product-modal-options-btn-wrap .price-notice {
    padding-left: 4px;
    font-family: Arial;
    font-size: 12px;
}
.product-modal-options-btn-wrap li {
    display: flex;
    align-items: center;
    padding: 6px 0;
    font-size: 14px;
    position: relative;
    text-transform: uppercase;
}
.product-modal-options-btn-wrap .product-modal-options-btn + a {
    margin: 0!important;
    padding: 0;
    width: 24px;
    height: 24px;
    border: 1px solid #A11A17;
    pointer-events: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    display: block!important;
}
.product-modal-options-btn-wrap .product-modal-options-btn + a svg {
    opacity: 0;
}
a.product-modal-options-btn.selected-option + a {
    width: auto;
    height: auto;
    border-color: transparent;
    right: -1px;
    pointer-events: auto;
}
a.product-modal-options-btn.selected-option + a svg {
    opacity: 1;
}
.product-options-bottom .action.primary {
    padding: 17px!important;
}
.product-info-main .box-tocart, .product-options-bottom .box-tocart {
    margin-top: 12px;
}
.crs_delivery {
    border: 1px solid #CCC;
    list-style-type: none;
    padding: 0;
}
.crs_delivery li {
    padding: 9px 10px;
    margin: 0;
}
.crs_delivery li:first-child {
    padding: 14px 12px;
}
.crs_delivery li:not(:last-child) {
    border-bottom: 1px solid #CCC;
}
.crs_delivery p {
    color: var(--Black, #333);
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
}
.crs_country {
    color: var(--Black, #333);
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
    border: none;
    width: fit-content;
    padding: 0;
    height: auto;
}
.crs_shipto > p {
    margin: 0 4px;
}
.crs_btn_more {
    color: var(--White, #FFF);
    text-align: center;
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 150% */
    text-transform: uppercase;
    padding: 5px 7.5px;
    border: 1px solid var(--Gold, #B68B51);
    background: var(--Gold, #B68B51);
}
p.crs_uk_delivery, .crs_shipto {
    margin-bottom: 4px;
}
.crs_popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    overflow-y: auto;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    background: rgba(51, 51, 51, 0.50);
    backdrop-filter: blur(4px);
    padding: 10px;
    z-index: 9999999;
}
.crs_popup.active {
    opacity: 1;
    pointer-events: auto;
}
.crs_popup .container {
    max-width: 335px;
    margin: auto;
    width: 100%;
    position: relative;
    background-color: #fff;
    padding: 0;
    transform: translateY(200px);
    transition: all 0.2s ease;
}
.crs_popup.active .container {
    transform: translateY(0);
}
.crs_popup img {
    width: 100%;
    height: 120px;
    display: block;
}
.crs_popup_close {
    position: absolute;
    top: 8px;
    right: 12px;
    z-index: 1;
    background: transparent;
    border: none;
    padding: 8px;
}
.crs_popup_content {
    position: relative;
    padding: 34px 20px 19px;
}
.crs_popup_circle {
    left: 50%;
    top: 0;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    width: 54px;
    height: 54px;
    display: flex;
}
.crs_popup h3 {
    color: var(--Black, #333);
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 157.143% */
    text-transform: uppercase;
    margin: 0 0 14px 0;
}
.crs_popup ul {
    padding: 0 0 0 20px;
    margin: 0;
}
.crs_popup ul li {
    color: var(--Black, #333);
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
}
.crs_quality {
    border: 1px solid var(--Gold, #B68B51);
    background: #FCF7EC;
    padding: 16px 8px;
    display: grid;
    gap: 6px;
}
.crs_quality p {
    margin: 0;
    font-family: 'adobe-garamond-pro', sans-serif;
    font-size: 12px;
    line-height: 18px; 
    letter-spacing: 1.6px;
    text-transform: uppercase;
}
.crs_quality_more {
    font-size: 14px;
    line-height: 22px;
    text-decoration-line: underline;
    cursor: pointer;
}
.product-info-main .msb-product-details-col-left {
    border-width: 1px;
}
.crs_about {
    color: var(--Black, #333);
    font-family: 'adobe-garamond-pro', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
    order: 5;
    padding: 30px 20px 16px;
    margin: 0;
}
.product-info-main .msb-product-details-col-left .features-wrapper {
    padding-top: 20px;
}
.product-info-main .msb-product-details-col-left {
    padding: 0 20px;
}
.title-v3 {
    font-family: 'Inter', sans-serif;
    font-size: 23.734px;
    line-height: 40px
}
body .product-static-columns {
    padding-top: 10px;
}
body .product-static-columns .container .section-desc {
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 12.875px;
    max-width: 315px;
}
.crs_sticky_btn {
    position: fixed;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: all 0.2s ease;
    transform: translateY(100px);
    z-index: 9;
    width: 100%;
    background: var(--Red, #A11A17);
    color: var(--White, #FFF);
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 17px;
}
.crs_sticky_btn.active {
    transform: translateY(0);
    opacity: 1;
}
.crs_pr {
    font-family: 'adobe-garamond-pro', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.6px;
    text-transform: uppercase;
}
.crs_pr:before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: 0 19px;
    background-color: #fff;
}
@media (max-width: 768px) {
    .product-info-main .product-reviews-summary {
        order: 1;
    }

    .product-info-main .page-title-wrapper{
        padding: 0 20px;
    }
}
@media (min-width: 769px) {
    .product-info-main .page-title-wrapper .page-title {
        font-size: 28px;
        margin-bottom: 4px;
    }
    .product-info-main .product-reviews-summary {
        padding: 4px 0px;
    }
    .product-reviews-summary iframe {
        width: 158px!important;
    }
    .product-info-main .product-info-stock-and-review {
        padding: 13px 0 3px 0;
        border-top: 1px solid #CCC;
        margin-top: 8px;
    }
    .product-info-main .msb-product-details-col-left,
    .product-info-main .msb-product-details-col-right {
        width: 100%;
        padding: 0;
    }
    .product-info-main .msb-product-details-col-left {
        order: 1;
    }
    .page-layout-1column .product-info-main {
        max-width: 540px;
    }
    .container.product-view-container {
        padding: 0 6.4vw;
    }
    .msb-product-container-inner > .clearfix,
    .pc-icon-wrapper {
        display: none!important;
    }
    .page-layout-1column .product.media {
        max-width: 630px;
        width: 52%;
    }
    .crs_absolute {
        padding-left: 70px!important;
        padding-right: 25px!important;
    }
    .product-info-media-footer {
        width: 100%;
        text-align: center;
    }
    .product-add-form {
        padding-bottom: 20px;
    }
    .crs_about {
        order: 1;
        padding: 40px 0 16px;
        border-bottom: 1px solid #CCC;
        width: 100%;
    }
    .features-static-link-block>a, 
    .features-static-link-block>span,
    .product-info-main .msb-product-details-col-left .features-wrapper {
        padding: 20px 0;
    }
    .msb-product-details-col-left {
        padding-right: 0;
    }
    .crs_popup .container {
        max-width: 787px;
    }
    .crs_popup img {
        width: 315px;
        height: auto;
    }
    .crs_popup_circle {
        transform: translate(-50%,0);
        width: auto;
        height: auto;
        top: 20px;
    }
    .crs_popup_content {
        padding: 66px 45px 19px;
    }
    .crs_popup h3 {
        margin-bottom: 20px;
    }
}
</style>`;

const styleCart = `
<style>
.mobile-basket-block,
.minicart-wrapper .block-minicart {
    height: 100vh!important;
    top: 0;
    width: 100%;
    right: 0;
    margin: 0;
    background: rgba(51, 51, 51, 0.50);
    box-shadow: none;
    overflow: hidden;
    position: fixed;
    transform: translateX(0);
    opacity: 0;
    pointer-events: none;
    transition: all 0.15s ease;
}
.minicart-wrapper .block-minicart {
    background: rgba(51, 51, 51, 0.60);
}
.mobile-basket-block {
    backdrop-filter: blur(4px);
}
.mobile-basket-block.active,
.minicart-wrapper.active .block-minicart {
    max-width: 100%;
    opacity: 1;
    pointer-events: auto;
    height: 100%;
}
.mobile-basket-block__content,
#minicart-content-wrapper {
    background: #fff;
    margin: 0 0 0 auto;
    height: 100%;
    width: calc(100% - 25px);
    padding: 14px 16px 200px;
    transform: translateX(100%);
    transition: all 0.2s ease;
    overflow-x: hidden;
    overflow-y: auto;
}
.mobile-basket-block.active .mobile-basket-block__content,
.minicart-wrapper.active .block-minicart #minicart-content-wrapper {
    transform: translateX(0);
}
#minicart-content-wrapper  {
    max-width: 350px;
}
.minicart-wrapper .block-minicart {
    padding: 0!important;
}
.minicart-items .product > .col-3 {
    max-width: 72px;
    width: 72px;
    height: 72px;
}
.minicart-items .product > .col-3 > a {
    height: 100%;
}
.minicart-items .product > .col-9 {
    padding-left: 16px;
    max-width: calc(100% - 72px);
    width: 100%;
    flex: auto;
}
.minicart-items .product-item-name {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
}
.product-item-details .product .options.list,
.product-item-details .product .options.list .label {
    color: #646464;
    font-size: 14px;
}
.price-including-tax>.minicart-price .price {
    font-size: 16px;
    font-weight: 600;
    font-family: 'adobe-garamond-pro', sans-serif;
    line-height: 24px;
}
.minicart-items-wrapper {
    height: auto!important;
    max-height: max-content;
}
.minicart-items-wrapper .product-item {
    padding: 10px 0;
    margin-top: 10px;
    border: none!important;
    border-bottom: 1px solid #ccc!important;
}
.minicart-items-wrapper .product-item > .product > .col-9 .col-7 {
    flex: auto;
    max-width: 75%;
}
.minicart-items-wrapper .product-item > .product > .col-9 .col-5 {
    max-width: 25%;
    flex: auto;
}
.minicart-items-wrapper .crs_discount {
    margin: 18px 0 0;
}
.mobile-basket-block__content .subtotal,
.block-minicart .subtotal {
    padding-bottom: 13px;
    border: none;
}
.crs_sub p,
.mobile-basket-block__content .subtotal,
.block-minicart .subtotal {
    font-family: Arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; 
}
.crs_sub p.pr,
.mobile-basket-block__content .subtotal .amount,
.block-minicart .subtotal .amount {
    font-size: 18px;
    font-family: 'adobe-garamond-pro', sans-serif;
}
.mobile-basket-block__content .crs_klarna,
.block-minicart .crs_klarna {
    padding: 0;
}
.shipping-costs .shipping-costs-desc {
    padding: 12px 0;
    border-top: 1px dashed #CCC;
}
.mobile-basket-block__content > .block-content > .actions,
.minicart-wrapper .block-minicart .block-content > .actions {
    margin-top: auto;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 13px 16px;
    background: var(--colors-wight, #FFF);
    z-index: 3;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.16);
}
.minicart-wrapper .block-minicart .block-content > .actions {
    max-width: 350px;
}
.mobile-basket-block__content .block-content .actions .checkout input,
.minicart-wrapper .block-minicart .block-content .actions .checkout input {
    width: 100%;
    padding: 15px;
    background: #FFBD5D;
    height: 54px;
}
.mobile-basket-block__content .block-content,
.minicart-wrapper .block-minicart .block-content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.minicart-wrapper .product .actions {
    position: absolute;
    right: 0;
    bottom: 0;
}
.paypal.after:before {
    content: none;
}
#top-cart-btn-checkout {
    margin-bottom: 10px;
    line-height: 22px;
    padding: 15px;
}
.shipping-costs .action.primary {
    border: 1px solid var(--Dark-gray, #646464);
    background: var(--Dark-gray, #646464)!important;
    padding: 10px!important;
}
.shipping-costs .action.primary:hover {
    height: auto!important;
}
.shipping-costs .action.primary span {
    font-size: 12px;
    letter-spacing: 1.6px;
}
.shipping-costs .fields .field-country select {
    height: 40px;
}
.crs_highlight {
    margin-top: auto;
}
.crs_highlight > div {
    background: #FCF7EC;
    padding: 6px;
    width: calc(50% - 4px);
}
.crs_highlight > div:first-child {
    margin-right: 8px;
}
.minicart-title {
    color: #212121;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.9px;
}
.minicart-wrapper .action.close {
    top: 3px;
}
</style>`;

const topBadge = `
    <div class="crs_absolute px-4 pt-3 mt-1 d-flex align-items-center justify-content-between">
        <div class="crs_warranty d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                <path d="M26.4585 13.075C28.4113 13.075 30 11.3986 30 9.33819V7.55335H27.7556C27.0668 7.55335 26.4008 7.7654 25.83 8.15761C25.7666 7.78778 25.6865 7.42179 25.5891 7.06067L26.2649 6.65029C27.0841 6.15125 27.6701 5.34544 27.915 4.38131C28.1598 3.41717 28.0342 2.41013 27.5612 1.54571L26.7154 0L24.7717 1.18411C24.0047 1.65137 23.4355 2.40166 23.1689 3.29674C22.9065 4.17791 22.9589 5.12368 23.3162 5.96158L23.7149 6.96343C24.0693 8.0101 24.2492 9.11359 24.2492 10.2439C24.2492 15.6251 20.1001 20.003 15.0003 20.003C9.90034 20.003 5.75129 15.6251 5.75129 10.2439C5.75129 9.11087 5.93099 8.00732 6.28518 6.96349L6.68389 5.96158C7.04118 5.12362 7.09351 4.17791 6.83113 3.29674C6.5646 2.40166 5.99538 1.65137 5.22836 1.18411L3.28458 0L2.43887 1.54571C1.96586 2.41013 1.84024 3.41717 2.08504 4.38131C2.32984 5.34544 2.91587 6.15125 3.73615 6.65091L4.41072 7.06055C4.3134 7.42148 4.23324 7.78741 4.1699 8.15755C3.5991 7.7654 2.93309 7.55335 2.24441 7.55335H0V9.33819C0 11.3987 1.58871 13.075 3.54268 13.075L4.32459 13.0739C4.41195 13.4407 4.516 13.8007 4.63565 14.1528C3.95388 14.1128 3.27533 14.2798 2.6784 14.6435L0.734738 15.8276L1.58051 17.3733C2.23568 18.5707 3.42808 19.2408 4.65323 19.2408C5.25385 19.2408 5.86261 19.0796 6.41935 18.7404L7.10171 18.3234C7.34984 18.5934 7.61028 18.8507 7.88209 19.0944C7.27209 19.4192 6.7627 19.9228 6.41707 20.5544L5.29486 22.6053L6.75977 23.4977C7.30549 23.8301 7.91103 24 8.52478 24C8.83239 24 9.1421 23.9573 9.44713 23.871C10.3609 23.6127 11.1245 22.9944 11.5981 22.1289L11.9873 21.4154C12.9452 21.7034 13.9559 21.8578 15.0003 21.8578C16.0444 21.8578 17.0551 21.7035 18.0129 21.4155L18.4026 22.13C19.0579 23.3275 20.2507 23.9977 21.4756 23.9977C22.076 23.9977 22.6841 23.8366 23.2404 23.4977L24.7053 22.6053L23.5831 20.5545C23.2375 19.923 22.7282 19.4194 22.1183 19.0946C22.3901 18.8508 22.6506 18.5935 22.8988 18.3235L23.5819 18.7412C24.1383 19.0801 24.7462 19.2411 25.3467 19.2411C26.5715 19.2411 27.7644 18.5708 28.4196 17.3734L29.2654 15.8277L27.3217 14.6436C26.7248 14.2801 26.0465 14.1129 25.3648 14.1529C25.4845 13.8008 25.5885 13.4409 25.6759 13.074L26.4585 13.075Z" fill="#B68B51"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.61812 10.171C7.61812 5.8753 10.9302 2.38054 15.0013 2.38054C19.0724 2.38054 22.3845 5.8753 22.3845 10.171C22.3845 14.4667 19.0724 17.9614 15.0013 17.9614C10.9302 17.9614 7.61812 14.4667 7.61812 10.171ZM20.0367 5.91283L17.1443 6.27816C16.9561 6.30064 16.8353 6.32875 16.7821 6.36247C16.7323 6.39619 16.6897 6.48425 16.6542 6.62663L15.999 9.27391C15.9671 9.41255 15.9706 9.50997 16.0097 9.56617C16.0488 9.61863 16.1535 9.65048 16.324 9.66172C16.4767 9.67296 16.6045 9.68421 16.7075 9.69545C16.8105 9.70669 16.9419 9.72542 17.1017 9.75165C17.265 9.77413 17.4035 9.80036 17.5172 9.83034C17.6308 9.86032 17.7604 9.90153 17.906 9.95399C18.0516 10.0064 18.1741 10.0645 18.2735 10.1282C18.3765 10.1919 18.4795 10.2706 18.5825 10.3643C18.689 10.458 18.7725 10.5629 18.8328 10.679C18.8968 10.7915 18.9483 10.9245 18.9873 11.0781C19.0299 11.228 19.0512 11.3928 19.0512 11.5727C19.0512 12.1872 18.7139 12.7062 18.0392 13.1296C17.7977 13.2795 17.4781 13.3975 17.0804 13.4837C16.6862 13.5736 16.2778 13.6279 15.8552 13.6467C15.7842 13.6991 15.7576 13.7909 15.7753 13.9221C15.7931 14.057 15.8428 14.145 15.9245 14.1863C16.4216 14.175 16.9312 14.1057 17.4532 13.9783C17.9788 13.8546 18.4547 13.671 18.8808 13.4275C19.9248 12.8317 20.4468 12.0036 20.4468 10.9432C20.4468 10.4936 20.3385 10.1057 20.1219 9.77975C19.9053 9.45002 19.6283 9.19709 19.2909 9.02098C18.7831 8.75494 18.0427 8.56572 17.0697 8.45331C16.9419 8.44207 16.8531 8.41396 16.8034 8.369C16.7537 8.32403 16.743 8.2416 16.7714 8.1217L16.8407 7.85753C16.8655 7.74887 16.8957 7.66831 16.9312 7.61585C16.9667 7.56339 17.02 7.53154 17.091 7.5203L19.5573 7.23365C19.6922 7.09876 19.813 6.92265 19.9195 6.70532C20.026 6.48799 20.1042 6.26879 20.1539 6.04772C20.1539 5.95779 20.1148 5.91283 20.0367 5.91283ZM13.4049 12.2528H12.0892C11.9507 12.2528 11.8815 12.206 11.8815 12.1123C11.8815 12.0074 12.0732 11.7657 12.4568 11.3872L12.9841 10.8701C13.6269 10.2331 14.0619 9.71418 14.2892 9.31325C14.5164 8.91232 14.6301 8.48328 14.6301 8.02615C14.6301 7.46784 14.4419 7.00321 14.0654 6.63225C13.6926 6.25755 13.1936 6.0702 12.5686 6.0702C12.0253 6.0702 11.5264 6.22758 11.0718 6.54233C10.6173 6.85708 10.2799 7.29922 10.0598 7.86877C10.0704 7.9587 10.1148 8.02053 10.1929 8.05425C10.2746 8.08423 10.3492 8.07486 10.4166 8.02615C10.8073 7.32171 11.276 6.96949 11.8229 6.96949C12.1816 6.96949 12.4692 7.10251 12.6858 7.36854C12.906 7.63458 13.0161 7.96994 13.0161 8.37462C13.0161 8.93293 12.89 9.45376 12.6379 9.93713C12.3857 10.4205 12.0342 10.9245 11.5832 11.4491C11.1286 11.9774 10.5658 12.5675 9.89462 13.2195C9.88397 13.2757 9.88752 13.3301 9.90528 13.3825C9.92303 13.4312 9.95499 13.4612 10.0012 13.4724C10.1894 13.45 10.5977 13.4387 11.2263 13.4387H12.9575C13.5399 13.4387 14.0495 13.45 14.4863 13.4724C14.5821 13.3301 14.6833 13.0846 14.7899 12.7362C14.9 12.3839 14.9781 12.0355 15.0242 11.6907C15.0029 11.6195 14.9443 11.5783 14.8485 11.5671C14.7526 11.5558 14.6869 11.5727 14.6514 11.6177C14.4987 11.9137 14.3566 12.0935 14.2252 12.1572C14.0938 12.2209 13.8204 12.2528 13.4049 12.2528Z" fill="#B68B51"/>
            </svg>
            25-Year Warranty
        </div>
        <a href="#" class="crs_wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#F0AEAE"/>
                <path d="M11.3765 18.1922L11.3754 18.1912C9.36117 16.3814 7.75006 14.93 6.63375 13.5768C5.52547 12.2333 4.98535 11.0798 4.98535 9.87842C4.98535 7.92271 6.5212 6.39697 8.50594 6.39697C9.63283 6.39697 10.7249 6.92061 11.4332 7.73828L12.0001 8.39274L12.567 7.73828C13.2752 6.92061 14.3673 6.39697 15.4942 6.39697C17.4789 6.39697 19.0148 7.92271 19.0148 9.87842C19.0148 11.0798 18.4746 12.2333 17.3664 13.5768C16.2501 14.93 14.6389 16.3814 12.6247 18.1912L12.6236 18.1922L12.0001 18.7546L11.3765 18.1922Z" fill="white" stroke="#F0AEAE" stroke-width="1.5"/>
            </svg>
        </a>
    </div>`;

const getDiscount = `
    <button type="button" class="crs_discount d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.5299 10.87L20.0099 9.35001C19.7499 9.09 19.5399 8.58001 19.5399 8.22001V6.06C19.5399 5.18 18.8199 4.46 17.9399 4.46H15.7899C15.4299 4.46 14.9199 4.25 14.6599 3.99L13.1399 2.47C12.5199 1.85 11.4999 1.85 10.8799 2.47L9.33988 3.99C9.08988 4.25 8.57988 4.46 8.20988 4.46H6.05988C5.17988 4.46 4.45988 5.18 4.45988 6.06V8.21C4.45988 8.57 4.24988 9.08 3.98988 9.34L2.46988 10.86C1.84988 11.48 1.84988 12.5 2.46988 13.12L3.98988 14.64C4.24988 14.9 4.45988 15.41 4.45988 15.77V17.92C4.45988 18.8 5.17988 19.52 6.05988 19.52H8.20988C8.56988 19.52 9.07988 19.73 9.33988 19.99L10.8599 21.51C11.4799 22.13 12.4999 22.13 13.1199 21.51L14.6399 19.99C14.8999 19.73 15.4099 19.52 15.7699 19.52H17.9199C18.7999 19.52 19.5199 18.8 19.5199 17.92V15.77C19.5199 15.41 19.7299 14.9 19.9899 14.64L21.5099 13.12C22.1599 12.51 22.1599 11.49 21.5299 10.87ZM7.99988 9C7.99988 8.45 8.44988 8 8.99988 8C9.54988 8 9.99988 8.45 9.99988 9C9.99988 9.55 9.55988 10 8.99988 10C8.44988 10 7.99988 9.55 7.99988 9ZM9.52988 15.53C9.37988 15.68 9.18988 15.75 8.99988 15.75C8.80988 15.75 8.61988 15.68 8.46988 15.53C8.17988 15.24 8.17988 14.76 8.46988 14.47L14.4699 8.47001C14.7599 8.18001 15.2399 8.18001 15.5299 8.47001C15.8199 8.76 15.8199 9.24 15.5299 9.53L9.52988 15.53ZM14.9999 16C14.4399 16 13.9899 15.55 13.9899 15C13.9899 14.45 14.4399 14 14.9899 14C15.5399 14 15.9899 14.45 15.9899 15C15.9899 15.55 15.5499 16 14.9999 16Z" fill="#862B04"/>
        </svg>
        Get a 10% Discount
    </button>`;

const trustpilot = `
    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="20" viewBox="0 0 91 20" fill="none">
        <path d="M9.78008 0.573486L12.4401 7.19635L19.5602 7.67918L14.0835 12.2552L15.8248 19.1765L9.78008 15.3817L3.73535 19.1765L5.47669 12.2552L0 7.67918L7.12008 7.19635L9.78008 0.573486Z" fill="#00B67E"/>
        <path d="M33.0782 6.66401H29.6043V16.2435H27.6837V6.66401H24.2412V5.10308H33.0782V6.66401ZM38.1974 9.66327C37.9525 9.62253 37.6998 9.60215 37.4393 9.60215C36.5873 9.60215 36.0134 9.92858 35.7176 10.5815V16.2435H33.8587V7.96473H35.6334L35.6794 8.89054C36.1289 8.17128 36.7508 7.81165 37.5471 7.81165C37.8115 7.81165 38.0309 7.8474 38.2042 7.9188L38.1974 9.66327ZM44.3871 15.4325C43.8415 16.0752 43.0659 16.3965 42.061 16.3965C41.1629 16.3965 40.4823 16.1338 40.018 15.6085C39.5587 15.0831 39.3295 14.3231 39.3295 13.3283V7.96473H41.1884V13.3054C41.1884 14.3562 41.6252 14.8816 42.4969 14.8816C43.3998 14.8816 44.01 14.5576 44.3254 13.9099V7.96473H46.1852V16.2435H44.4331L44.3871 15.4325ZM52.7196 13.994C52.7196 13.6625 52.5815 13.41 52.3063 13.2365C52.036 13.0631 51.5845 12.9101 50.9518 12.7774C50.3192 12.6448 49.7913 12.4764 49.3682 12.2724C48.4397 11.8236 47.9755 11.1732 47.9755 10.3213C47.9755 9.60725 48.2762 9.01041 48.8785 8.53091C49.4798 8.0514 50.2457 7.81165 51.1742 7.81165C52.1633 7.81165 52.9615 8.0565 53.5687 8.54619C54.1809 9.03588 54.4864 9.671 54.4864 10.4514H52.6276C52.6276 10.0944 52.4953 9.79852 52.2299 9.56386C51.9645 9.32411 51.6129 9.20423 51.1742 9.20423C50.7658 9.20423 50.4318 9.29865 50.1713 9.48737C49.9166 9.6761 49.7893 9.92858 49.7893 10.2448C49.7893 10.5305 49.9088 10.7523 50.1488 10.9105C50.3887 11.0686 50.8725 11.2293 51.6021 11.3926C52.3318 11.5506 52.9028 11.7419 53.3161 11.9664C53.7343 12.1858 54.0428 12.451 54.2416 12.7621C54.4463 13.0733 54.5481 13.4507 54.5481 13.8946C54.5481 14.6393 54.2396 15.2438 53.6226 15.7079C53.0046 16.167 52.1966 16.3965 51.1967 16.3965C50.518 16.3965 49.9137 16.2741 49.3838 16.0292C48.853 15.7844 48.4397 15.4478 48.144 15.0193C47.8482 14.5908 47.7003 14.1291 47.7003 13.6344H49.5063C49.5317 14.0731 49.6973 14.4123 50.0028 14.652C50.3094 14.8867 50.7148 15.004 51.2202 15.004C51.7099 15.004 52.082 14.9122 52.3367 14.7285C52.5923 14.5398 52.7196 14.295 52.7196 13.994ZM58.5038 5.9524V7.96473H59.9651V9.34193H58.5038V13.9634C58.5038 14.2797 58.5655 14.5092 58.688 14.652C58.8153 14.7897 59.0396 14.8586 59.3608 14.8586C59.5753 14.8586 59.7917 14.8331 60.0111 14.7821V16.2206C59.588 16.3379 59.1796 16.3965 58.7869 16.3965C57.3589 16.3965 56.645 15.6085 56.645 14.0323V9.34193H55.2827V7.96473H56.645V5.9524H58.5038ZM68.6424 12.1883C68.6424 13.4686 68.3515 14.4913 67.7697 15.2565C67.188 16.0165 66.4074 16.3965 65.4281 16.3965C64.5202 16.3965 63.7935 16.0982 63.2479 15.5014V19.4265H61.3881V7.96473H63.102L63.1784 8.80631C63.7249 8.14327 64.4673 7.81165 65.4055 7.81165C66.4153 7.81165 67.2056 8.18911 67.7776 8.94411C68.3534 9.69392 68.6424 10.7371 68.6424 12.0735V12.1883ZM66.7904 12.0276C66.7904 11.2013 66.6249 10.5458 66.2928 10.0612C65.9667 9.57659 65.4976 9.33429 64.8855 9.33429C64.1255 9.33429 63.579 9.64799 63.2479 10.2754V13.9481C63.5848 14.5908 64.1353 14.9122 64.9002 14.9122C65.4917 14.9122 65.954 14.675 66.285 14.2006C66.6219 13.7211 66.7904 12.9968 66.7904 12.0276ZM72.1995 16.2435H70.3406V7.96473H72.1995V16.2435ZM70.226 5.8147C70.226 5.52901 70.3152 5.29181 70.4934 5.10308C70.6775 4.91435 70.9371 4.81994 71.274 4.81994C71.6109 4.81994 71.8704 4.91435 72.0545 5.10308C72.2377 5.29181 72.3297 5.52901 72.3297 5.8147C72.3297 6.09519 72.2377 6.32985 72.0545 6.51858C71.8704 6.70221 71.6109 6.79408 71.274 6.79408C70.9371 6.79408 70.6775 6.70221 70.4934 6.51858C70.3152 6.32985 70.226 6.09519 70.226 5.8147ZM76.2091 16.2435H74.3502V4.49097H76.2091V16.2435ZM77.8926 12.0276C77.8926 11.2166 78.0532 10.4871 78.3745 9.83926C78.6957 9.18641 79.1472 8.68653 79.729 8.33964C80.3107 7.98765 80.9786 7.81165 81.7337 7.81165C82.8502 7.81165 83.7562 8.17128 84.4496 8.89054C85.1488 9.60979 85.5259 10.5636 85.5817 11.7522L85.5896 12.1883C85.5896 13.0044 85.4319 13.7339 85.1155 14.3766C84.8041 15.0193 84.3555 15.5166 83.7689 15.8686C83.1871 16.2206 82.5143 16.3965 81.7484 16.3965C80.581 16.3965 79.6447 16.0089 78.9406 15.2336C78.2423 14.4531 77.8926 13.4151 77.8926 12.1195V12.0276ZM79.7515 12.1883C79.7515 13.0402 79.9278 13.7084 80.2794 14.1929C80.632 14.6724 81.1216 14.9122 81.7484 14.9122C82.3762 14.9122 82.863 14.6673 83.2107 14.1776C83.5623 13.6879 83.7386 12.9713 83.7386 12.0276C83.7386 11.191 83.5573 10.528 83.195 10.0383C82.8375 9.54858 82.3507 9.30374 81.7337 9.30374C81.1265 9.30374 80.6447 9.54604 80.2872 10.0305C79.9307 10.51 79.7515 11.2293 79.7515 12.1883ZM89.4924 5.9524V7.96473H90.9536V9.34193H89.4924V13.9634C89.4924 14.2797 89.5531 14.5092 89.6755 14.652C89.8029 14.7897 90.0281 14.8586 90.3494 14.8586C90.5629 14.8586 90.7803 14.8331 90.9996 14.7821V16.2206C90.5756 16.3379 90.1682 16.3965 89.7754 16.3965C88.3465 16.3965 87.6326 15.6085 87.6326 14.0323V9.34193H86.2712V7.96473H87.6326V5.9524H89.4924Z" fill="#0C0B0B"/>
    </svg>
    <svg class="mx-3" width="111" height="18" viewBox="0 0 111 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.4986 0H0.831055V18H19.4986V0Z" fill="#00B67E"/>
        <path d="M10.165 2.00012L12.0426 6.50832L17.0693 6.83699L13.2029 9.95192L14.4321 14.6633L10.165 12.0801L5.89798 14.6633L7.12714 9.95192L3.26074 6.83699L8.2875 6.50832L10.165 2.00012Z" fill="white"/>
        <path d="M42.1666 0H23.499V18H42.1666V0Z" fill="#00B67E"/>
        <path d="M32.832 2.00012L34.7096 6.50832L39.7363 6.83699L35.8699 9.95192L37.0991 14.6633L32.832 12.0801L28.565 14.6633L29.7941 9.95192L25.9277 6.83699L30.9545 6.50832L32.832 2.00012Z" fill="white"/>
        <path d="M64.8336 0H46.166V18H64.8336V0Z" fill="#00B67E"/>
        <path d="M55.5 2.00012L57.3778 6.50832L62.4042 6.83699L58.538 9.95192L59.7673 14.6633L55.5 12.0801L51.2329 14.6633L52.4621 9.95192L48.5957 6.83699L53.6225 6.50832L55.5 2.00012Z" fill="white"/>
        <path d="M87.5015 0H68.834V18H87.5015V0Z" fill="#00B67E"/>
        <path d="M78.1679 2.00012L80.0457 6.50832L85.0721 6.83699L81.2059 9.95192L82.4352 14.6633L78.1679 12.0801L73.9006 14.6633L75.1299 9.95192L71.2637 6.83699L76.2901 6.50832L78.1679 2.00012Z" fill="white"/>
        <path d="M110.169 0H91.501V18H110.169V0Z" fill="#00B67E"/>
        <path d="M100.835 2.00012L102.713 6.50832L107.739 6.83699L103.873 9.95192L105.102 14.6633L100.835 12.0801L96.5676 14.6633L97.7969 9.95192L93.9307 6.83699L98.9571 6.50832L100.835 2.00012Z" fill="white"/>
    </svg>
    <p>
        <b>Excellent</b>
        518 Reviews
    </p>`;

const dataShipping = {
  GB: { name: "United Kingdom", days: "1-3" },
  US: { name: "United States", days: "3-5" },
  DE: { name: "Germany", days: "2-4" },
  AF: { name: "Afghanistan", days: "3-5" },
  AL: { name: "Albania", days: "3-5" },
  DZ: { name: "Algeria", days: "3-5" },
  AS: { name: "American Samoa", days: "3-5" },
  AD: { name: "Andorra", days: "3-5" },
  AO: { name: "Angola", days: "3-5" },
  AI: { name: "Anguilla", days: "3-5" },
  AG: { name: "Antigua & Barbuda", days: "3-5" },
  AR: { name: "Argentina", days: "3-5" },
  AM: { name: "Armenia", days: "3-5" },
  AW: { name: "Aruba", days: "3-5" },
  AU: { name: "Australia", days: "3-5" },
  AT: { name: "Austria", days: "4-6" },
  AZ: { name: "Azerbaijan", days: "2-4" },
  BS: { name: "Bahamas", days: "3-5" },
  BH: { name: "Bahrain", days: "3-5" },
  BD: { name: "Bangladesh", days: "3-5" },
  BB: { name: "Barbados", days: "3-5" },
  BY: { name: "Belarus", days: "3-5" },
  BE: { name: "Belgium", days: "3-5" },
  BZ: { name: "Belize", days: "2-4" },
  BM: { name: "Bermuda", days: "5-7" },
  BT: { name: "Bhutan", days: "3-5" },
  BO: { name: "Bolivia", days: "3-5" },
  BA: { name: "Bosnia & Herzegovina", days: "3-5" },
  BW: { name: "Botswana", days: "3-5" },
  BR: { name: "Brazil", days: "3-5" },
  BN: { name: "Brunei Darussalam", days: "3-5" },
  BG: { name: "Bulgaria", days: "3-5" },
  BF: { name: "Burkina Faso", days: "3-5" },
  BI: { name: "Burundi", days: "3-5" },
  KH: { name: "Cambodia", days: "3-5" },
  CM: { name: "Cameroon", days: "3-5" },
  CA: { name: "Canada", days: "3-5" },
  CV: { name: "Cape Verde", days: "2-4" },
  KY: { name: "Cayman Islands", days: "3-5" },
  CF: { name: "Central African Republic", days: "3-5" },
  TD: { name: "Chad", days: "3-5" },
  CL: { name: "Chile", days: "3-5" },
  CN: { name: "China, People's Republic of", days: "3-5" },
  CO: { name: "Colombia", days: "3-5" },
  CG: { name: "Congo", days: "3-5" },
  CR: { name: "Costa Rica", days: "3-5" },
  HR: { name: "Croatia", days: "3-5" },
  CU: { name: "Cuba", days: "3-5" },
  CY: { name: "Cyprus", days: "5-7" },
  CZ: { name: "Czech Republic", days: "3-5" },
  DK: { name: "Denmark", days: "3-5" },
  DJ: { name: "Djibouti", days: "2-4" },
  DM: { name: "Dominica", days: "3-5" },
  DO: { name: "Dominican Republic", days: "3-5" },
  EC: { name: "Ecuador", days: "3-5" },
  EG: { name: "Egypt", days: "3-5" },
  SV: { name: "El Salvador", days: "3-5" },
  GQ: { name: "Equatorial Guinea", days: "3-5" },
  ER: { name: "Eritrea", days: "3-5" },
  EE: { name: "Estonia", days: "3-5" },
  ET: { name: "Ethiopia", days: "3-5" },
  FO: { name: "Faroe Islands (Denmark)", days: "3-5" },
  FJ: { name: "Fiji", days: "3-5" },
  FI: { name: "Finland", days: "3-5" },
  FR: { name: "France", days: "2-4" },
  GF: { name: "French Guiana", days: "2-4" },
  PF: { name: "French Polynesia (Tahiti)", days: "3-5" },
  GA: { name: "Gabon", days: "3-5" },
  GE: { name: "Georgia", days: "3-5" },
  GH: { name: "Ghana", days: "3-5" },
  GI: { name: "Gibraltar", days: "3-5" },
  GR: { name: "Greece", days: "2-4" },
  GL: { name: "Greenland (Denmark)", days: "2-4" },
  GD: { name: "Grenada", days: "1-3" },
  GP: { name: "Guadeloupe", days: "3-5" },
  GU: { name: "Guam", days: "3-5" },
  GT: { name: "Guatemala", days: "3-5" },
  GG: { name: "Guernsey", days: "3-5" },
  GN: { name: "Guinea", days: "2-4" },
  GY: { name: "Guyana", days: "3-5" },
  HT: { name: "Haiti", days: "3-5" },
  HN: { name: "Honduras", days: "3-5" },
  HK: { name: "Hong Kong", days: "3-5" },
  HU: { name: "Hungary", days: "3-5" },
  IS: { name: "Iceland", days: "3-5" },
  IN: { name: "India", days: "3-5" },
  ID: { name: "Indonesia", days: "3-5" },
  IQ: { name: "Iraq", days: "3-5" },
  IE: { name: "Ireland", days: "3-5" },
  IL: { name: "Israel", days: "2-4" },
  IT: { name: "Italy", days: "3-5" },
  JM: { name: "Jamaica", days: "2-4" },
  JP: { name: "Japan", days: "3-5" },
  JE: { name: "Jersey", days: "3-5" },
  JO: { name: "Jordan", days: "2-4" },
  KZ: { name: "Kazakhstan", days: "3-5" },
  KE: { name: "Kenya", days: "3-5" },
  KI: { name: "Kiribati", days: "3-5" },
  KW: { name: "Kuwait", days: "5-7" },
  KG: { name: "Kyrgyzstan", days: "3-5" },
  LA: { name: "Laos", days: "3-5" },
  LV: { name: "Latvia", days: "3-5" },
  LB: { name: "Lebanon", days: "3-5" },
  LS: { name: "Lesotho", days: "3-5" },
  LR: { name: "Liberia", days: "3-5" },
  LY: { name: "Libya", days: "3-5" },
  LI: { name: "Liechtenstein", days: "3-5" },
  LT: { name: "Lithuania", days: "2-4" },
  LU: { name: "Luxembourg", days: "3-5" },
  MK: { name: "Macedonia", days: "2-4" },
  MG: { name: "Madagascar", days: "3-5" },
  MW: { name: "Malawi", days: "3-5" },
  MY: { name: "Malaysia", days: "3-5" },
  MV: { name: "Maldives", days: "3-5" },
  ML: { name: "Mali", days: "3-5" },
  MT: { name: "Malta", days: "3-5" },
  MH: { name: "Marshall Islands", days: "3-5" },
  MQ: { name: "Martinique", days: "3-5" },
  MR: { name: "Mauritania", days: "3-5" },
  MU: { name: "Mauritius", days: "3-5" },
  MX: { name: "Mexico", days: "3-5" },
  FM: { name: "Micronesia, Federated States of", days: "3-5" },
  MD: { name: "Moldova", days: "3-5" },
  MC: { name: "Monaco", days: "2-4" },
  MN: { name: "Mongolia", days: "3-5" },
  MS: { name: "Montserrat", days: "3-5" },
  MA: { name: "Morocco", days: "3-5" },
  MZ: { name: "Mozambique", days: "3-5" },
  NA: { name: "Namibia", days: "3-5" },
  NP: { name: "Nepal", days: "3-5" },
  NL: { name: "Netherlands", days: "2-4" },
  NC: { name: "New Caledonia", days: "3-5" },
  NZ: { name: "New Zealand", days: "3-5" },
  NI: { name: "Nicaragua", days: "3-5" },
  NE: { name: "Niger", days: "3-5" },
  NG: { name: "Nigeria", days: "3-5" },
  NO: { name: "Norway", days: "3-5" },
  OM: { name: "Oman", days: "3-5" },
  PK: { name: "Pakistan", days: "3-5" },
  PA: { name: "Panama", days: "3-5" },
  PG: { name: "Papua New Guinea", days: "3-5" },
  PY: { name: "Paraguay", days: "3-5" },
  PE: { name: "Peru", days: "3-5" },
  PH: { name: "Philippines", days: "3-5" },
  PL: { name: "Poland", days: "3-5" },
  PT: { name: "Portugal", days: "3-5" },
  PR: { name: "Puerto Rico", days: "2-4" },
  QA: { name: "Qatar", days: "3-5" },
  RO: { name: "Romania", days: "3-5" },
  RW: { name: "Rwanda", days: "3-5" },
  WS: { name: "Samoa", days: "3-5" },
  SM: { name: "San Marino", days: "3-5" },
  SA: { name: "Saudi Arabia", days: "2-4" },
  SN: { name: "Senegal", days: "3-5" },
  SC: { name: "Seychelles", days: "3-5" },
  SG: { name: "Singapore", days: "3-5" },
  SK: { name: "Slovakia", days: "2-4" },
  SI: { name: "Slovenia", days: "3-5" },
  ZA: { name: "South Africa", days: "1-3" },
  ES: { name: "Spain", days: "3-5" },
  LK: { name: "Sri Lanka", days: "2-4" },
  SR: { name: "Suriname", days: "3-5" },
  SZ: { name: "Swaziland", days: "3-5" },
  SE: { name: "Sweden", days: "5-7" },
  CH: { name: "Switzerland", days: "2-4" },
  TW: { name: "Taiwan", days: "2-4" },
  TJ: { name: "Tajikistan", days: "3-5" },
  TZ: { name: "Tanzania", days: "3-5" },
  TH: { name: "Thailand", days: "3-5" },
  TG: { name: "Togo", days: "3-5" },
  TO: { name: "Tonga", days: "3-5" },
  TT: { name: "Trinidad and Tobago", days: "3-5" },
  TN: { name: "Tunisia", days: "3-5" },
  TR: { name: "Turkey", days: "3-5" },
  TC: { name: "Turks and Caicos Islands", days: "3-5" },
  UG: { name: "Uganda", days: "3-5" },
  UA: { name: "Ukraine", days: "3-5" },
  AE: { name: "United Arab Emirates", days: "3-5" },
  UY: { name: "Uruguay", days: "3-5" },
  UZ: { name: "Uzbekistan", days: "3-5" },
  VU: { name: "Vanuatu", days: "2-4" },
  VE: { name: "Venezuela", days: "3-5" },
  VN: { name: "Vietnam", days: "3-5" },
  VG: { name: "Virgin Islands (British)", days: "3-5" },
  WF: { name: "Wallis and Futuna", days: "3-5" },
  YE: { name: "Yemen", days: "3-5" },
  ZM: { name: "Zambia", days: "3-5" },
  ZW: { name: "Zimbabwe", days: "3-5" },
};

let optionsCountry = "";

let isCountry = window.location.href
  .split("maxwellscottbags.")[1]
  .split("/")[0];

if (isCountry == "com") {
  isCountry = window.location.href.split("maxwellscottbags.")[0].includes("au")
    ? "au"
    : window.location.href.split("maxwellscottbags.")[0].includes("us")
    ? "us"
    : "GB";
}

for (const key in dataShipping) {
  optionsCountry += `<option value="${key}" data-days="${
    dataShipping[key].days
  }" ${key == isCountry.toUpperCase() ? "selected" : ""}>${
    dataShipping[key].name
  }</option>`;
}

const delivery = `
    <ul class="crs_delivery">
        <li class="">
            <p class="crs_uk_delivery" ${
              isCountry.toUpperCase() != "GB" ? "hidden" : ""
            }><b>You get FREE EXPRESS UK Delivery</b></p>
            <div class="crs_shipto d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M21.4325 7.7L19.775 3.95C19.717 3.81701 19.6216 3.70371 19.5005 3.62384C19.3793 3.54396 19.2376 3.50095 19.0925 3.5H15.08L15.32 1.3325C15.3318 1.22728 15.3212 1.12075 15.2889 1.01992C15.2566 0.919094 15.2033 0.82625 15.1325 0.7475C15.0624 0.669806 14.9768 0.607647 14.8812 0.565021C14.7856 0.522396 14.6822 0.500247 14.5775 0.5H4.25C4.05109 0.5 3.86032 0.579018 3.71967 0.71967C3.57902 0.860322 3.5 1.05109 3.5 1.25C3.5 1.44891 3.57902 1.63968 3.71967 1.78033C3.86032 1.92098 4.05109 2 4.25 2H8C8.19891 2 8.38968 2.07902 8.53033 2.21967C8.67098 2.36032 8.75 2.55109 8.75 2.75C8.75 2.94891 8.67098 3.13968 8.53033 3.28033C8.38968 3.42098 8.19891 3.5 8 3.5H2.75C2.55109 3.5 2.36032 3.57902 2.21967 3.71967C2.07902 3.86032 2 4.05109 2 4.25C2 4.44891 2.07902 4.63968 2.21967 4.78033C2.36032 4.92098 2.55109 5 2.75 5H10.25C10.4489 5 10.6397 5.07902 10.7803 5.21967C10.921 5.36032 11 5.55109 11 5.75C11 5.94891 10.921 6.13968 10.7803 6.28033C10.6397 6.42098 10.4489 6.5 10.25 6.5H5C4.80109 6.5 4.61032 6.57902 4.46967 6.71967C4.32902 6.86032 4.25 7.05109 4.25 7.25C4.25 7.44891 4.32902 7.63968 4.46967 7.78033C4.61032 7.92098 4.80109 8 5 8H8C8.19891 8 8.38968 8.07902 8.53033 8.21967C8.67098 8.36032 8.75 8.55109 8.75 8.75C8.75 8.94891 8.67098 9.13968 8.53033 9.28033C8.38968 9.42098 8.19891 9.5 8 9.5H2C1.80109 9.5 1.61032 9.57902 1.46967 9.71967C1.32902 9.86032 1.25 10.0511 1.25 10.25C1.25 10.4489 1.32902 10.6397 1.46967 10.7803C1.61032 10.921 1.80109 11 2 11H3.5C3.69891 11 3.88968 11.079 4.03033 11.2197C4.17098 11.3603 4.25 11.5511 4.25 11.75C4.25 11.9489 4.17098 12.1397 4.03033 12.2803C3.88968 12.421 3.69891 12.5 3.5 12.5H2.75C2.55109 12.5 2.36032 12.579 2.21967 12.7197C2.07902 12.8603 2 13.0511 2 13.25C2 13.4489 2.07902 13.6397 2.21967 13.7803C2.36032 13.921 2.55109 14 2.75 14H4.8875C4.96849 14.3163 5.12262 14.6092 5.3375 14.855C5.51959 15.0586 5.74271 15.2213 5.99219 15.3325C6.24168 15.4436 6.51187 15.5007 6.785 15.5C7.24719 15.4868 7.69518 15.3374 8.07278 15.0705C8.45038 14.8037 8.74076 14.4313 8.9075 14H14.6375C14.7185 14.3163 14.8726 14.6092 15.0875 14.855C15.2696 15.0586 15.4927 15.2213 15.7422 15.3325C15.9917 15.4436 16.2619 15.5007 16.535 15.5C16.9972 15.4868 17.4452 15.3374 17.8228 15.0705C18.2004 14.8037 18.4908 14.4313 18.6575 14H20.1575C20.3429 14.0011 20.5222 13.9335 20.6607 13.8103C20.7992 13.687 20.8871 13.5168 20.9075 13.3325L21.485 8.0825C21.5056 7.95261 21.4873 7.81955 21.4325 7.7ZM6.785 14C6.72281 14.0027 6.66081 13.9913 6.60366 13.9666C6.54651 13.9419 6.49569 13.9046 6.455 13.8575C6.39613 13.7847 6.35305 13.7004 6.32852 13.61C6.30399 13.5196 6.29853 13.4251 6.3125 13.3325C6.33166 13.1219 6.42257 12.9243 6.57003 12.7728C6.71748 12.6212 6.91252 12.5249 7.1225 12.5C7.18469 12.4973 7.24669 12.5087 7.30384 12.5334C7.36099 12.5581 7.41181 12.5954 7.4525 12.6425C7.51137 12.7153 7.55445 12.7996 7.57898 12.89C7.60351 12.9804 7.60897 13.0749 7.595 13.1675C7.57584 13.3781 7.48493 13.5757 7.33747 13.7272C7.19002 13.8788 6.99498 13.9751 6.785 14ZM16.535 14C16.4728 14.0027 16.4108 13.9913 16.3537 13.9666C16.2965 13.9419 16.2457 13.9046 16.205 13.8575C16.1461 13.7847 16.1031 13.7004 16.0785 13.61C16.054 13.5196 16.0485 13.4251 16.0625 13.3325C16.0817 13.1219 16.1726 12.9243 16.32 12.7728C16.4675 12.6212 16.6625 12.5249 16.8725 12.5C16.9347 12.4973 16.9967 12.5087 17.0538 12.5334C17.111 12.5581 17.1618 12.5954 17.2025 12.6425C17.2614 12.7153 17.3044 12.7996 17.329 12.89C17.3535 12.9804 17.359 13.0749 17.345 13.1675C17.3258 13.3781 17.2349 13.5757 17.0875 13.7272C16.94 13.8788 16.745 13.9751 16.535 14ZM19.91 8.75H16.595C16.4903 8.74975 16.3869 8.7276 16.2913 8.68498C16.1957 8.64235 16.1101 8.58019 16.04 8.5025C15.9692 8.42375 15.9159 8.33091 15.8836 8.23008C15.8513 8.12925 15.8407 8.02272 15.8525 7.9175L16.1 5.6675C16.1221 5.48457 16.2108 5.31617 16.3491 5.19445C16.4874 5.07272 16.6657 5.00617 16.85 5.0075H18.5975L20 8.12L19.91 8.75Z" fill="#333333"/>
                    <path d="M2 8C2.19891 8 2.38968 7.92098 2.53033 7.78033C2.67098 7.63968 2.75 7.44891 2.75 7.25C2.75 7.05109 2.67098 6.86032 2.53033 6.71967C2.38968 6.57902 2.19891 6.5 2 6.5H1.25C1.05109 6.5 0.860322 6.57902 0.71967 6.71967C0.579018 6.86032 0.5 7.05109 0.5 7.25C0.5 7.44891 0.579018 7.63968 0.71967 7.78033C0.860322 7.92098 1.05109 8 1.25 8H2Z" fill="#333333"/>
                </svg>
                <p>Ship to:</p>
                <select class="crs_country">${optionsCountry}</select>
            </div>
            <div class="crs_est">Est. Delivery: <b>20 Jun - 22 Jun</b> </div>
        </li>
        <li class="d-flex justify-content-between align-items-center">
            <p class="d-flex align-items-center">
                <svg class="mr-2"  xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                    <path d="M22.0488 10.8958C23.6761 10.8958 25 9.49887 25 7.78183V6.29446H23.1297C22.5557 6.29446 22.0007 6.47117 21.525 6.79801C21.4722 6.48982 21.4054 6.18482 21.3243 5.8839L21.8874 5.54191C22.5701 5.12604 23.0584 4.45454 23.2625 3.65109C23.4665 2.84764 23.3618 2.00844 22.9677 1.28809L22.2628 0L20.6431 0.986754C20.0039 1.37614 19.5295 2.00138 19.3074 2.74728C19.0887 3.48159 19.1324 4.26974 19.4301 4.96798L19.7625 5.80286C20.0578 6.67508 20.2077 7.59466 20.2077 8.53659C20.2077 13.021 16.7501 16.6692 12.5002 16.6692C8.25028 16.6692 4.79274 13.021 4.79274 8.53659C4.79274 7.59239 4.94249 6.67276 5.23765 5.80291L5.56991 4.96798C5.86765 4.26968 5.91126 3.48159 5.69261 2.74728C5.4705 2.00138 4.99615 1.37614 4.35697 0.986754L2.73715 0L2.0324 1.28809C1.63822 2.00844 1.53354 2.84764 1.73753 3.65109C1.94153 4.45454 2.42989 5.12604 3.11346 5.54242L3.6756 5.88379C3.5945 6.18456 3.5277 6.48951 3.47492 6.79796C2.99925 6.47117 2.44425 6.29446 1.87034 6.29446H0V7.78183C0 9.49892 1.32393 10.8958 2.95223 10.8958L3.60382 10.8949C3.67662 11.2006 3.76334 11.5006 3.86304 11.794C3.2949 11.7606 2.72944 11.8998 2.232 12.2029L0.612282 13.1897L1.31709 14.4778C1.86307 15.4756 2.85673 16.034 3.87769 16.034C4.37821 16.034 4.88551 15.8997 5.34946 15.617L5.91809 15.2695C6.12487 15.4945 6.3419 15.7089 6.56841 15.912C6.06008 16.1827 5.63558 16.6023 5.34756 17.1287L4.41239 18.8377L5.63314 19.5814C6.08791 19.8584 6.59253 20 7.10398 20C7.36032 20 7.61842 19.9645 7.87261 19.8925C8.63406 19.6773 9.27046 19.162 9.66512 18.4407L9.98938 17.8462C10.7876 18.0862 11.6299 18.2148 12.5002 18.2148C13.3704 18.2148 14.2126 18.0863 15.0108 17.8463L15.3355 18.4416C15.8816 19.4396 16.8755 19.998 17.8963 19.998C18.3966 19.998 18.9034 19.8638 19.367 19.5815L20.5877 18.8378L19.6525 17.1287C19.3646 16.6025 18.9402 16.1829 18.4319 15.9122C18.6584 15.709 18.8755 15.4946 19.0823 15.2696L19.6516 15.6176C20.1152 15.9001 20.6218 16.0342 21.1222 16.0342C22.1429 16.0342 23.137 15.4757 23.683 14.4779L24.3878 13.1898L22.7681 12.203C22.2707 11.9 21.7054 11.7608 21.1374 11.7941C21.2371 11.5007 21.3237 11.2007 21.3966 10.895L22.0488 10.8958Z" fill="#B68B51"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.34843 8.47581C6.34843 4.89608 9.10849 1.98378 12.5011 1.98378C15.8937 1.98378 18.6537 4.89608 18.6537 8.47581C18.6537 12.0555 15.8937 14.9678 12.5011 14.9678C9.10849 14.9678 6.34843 12.0555 6.34843 8.47581ZM16.6972 4.92735L14.2869 5.2318C14.1301 5.25054 14.0294 5.27395 13.9851 5.30206C13.9436 5.33016 13.9081 5.40354 13.8785 5.52219L13.3325 7.72826C13.3059 7.84379 13.3089 7.92497 13.3414 7.97181C13.374 8.01553 13.4613 8.04207 13.6033 8.05144C13.7306 8.0608 13.8371 8.07017 13.9229 8.07954C14.0087 8.08891 14.1182 8.10452 14.2514 8.12638C14.3875 8.14511 14.5029 8.16697 14.5976 8.19195C14.6923 8.21693 14.8003 8.25128 14.9217 8.29499C15.043 8.33871 15.1451 8.38711 15.228 8.44019C15.3138 8.49327 15.3996 8.55885 15.4854 8.63691C15.5742 8.71497 15.6437 8.8024 15.694 8.8992C15.7473 8.99288 15.7902 9.10373 15.8228 9.23175C15.8583 9.35665 15.876 9.49404 15.876 9.64392C15.876 10.156 15.5949 10.5885 15.0326 10.9413C14.8314 11.0662 14.5651 11.1646 14.2336 11.2364C13.9052 11.3113 13.5648 11.3566 13.2127 11.3722C13.1535 11.416 13.1313 11.4925 13.1461 11.6017C13.1609 11.7142 13.2023 11.7875 13.2704 11.8219C13.6847 11.8125 14.1093 11.7547 14.5444 11.6486C14.9823 11.5455 15.3789 11.3925 15.734 11.1896C16.604 10.6931 17.039 10.003 17.039 9.11934C17.039 8.74464 16.9488 8.42145 16.7683 8.14979C16.5877 7.87501 16.3569 7.66424 16.0758 7.51749C15.6526 7.29579 15.0356 7.1381 14.2248 7.04442C14.1182 7.03506 14.0442 7.01164 14.0028 6.97417C13.9614 6.9367 13.9525 6.868 13.9762 6.76808L14.0339 6.54794C14.0546 6.45739 14.0798 6.39026 14.1093 6.34654C14.1389 6.30282 14.1833 6.27628 14.2425 6.26692L16.2977 6.02804C16.4102 5.91563 16.5108 5.76887 16.5996 5.58777C16.6884 5.40666 16.7535 5.22399 16.7949 5.03977C16.7949 4.96483 16.7623 4.92735 16.6972 4.92735ZM11.1708 10.2107H10.0744C9.95895 10.2107 9.90124 10.1716 9.90124 10.0936C9.90124 10.0061 10.061 9.80473 10.3806 9.48936L10.8201 9.05845C11.3557 8.52762 11.7182 8.09515 11.9076 7.76104C12.097 7.42693 12.1917 7.0694 12.1917 6.68846C12.1917 6.2232 12.0349 5.83601 11.7212 5.52688C11.4105 5.21463 10.9947 5.0585 10.4739 5.0585C10.0211 5.0585 9.60531 5.18965 9.22652 5.45194C8.84773 5.71423 8.5666 6.08269 8.38313 6.55731C8.392 6.63225 8.429 6.68377 8.4941 6.71187C8.56216 6.73685 8.62431 6.72905 8.68053 6.68846C9.00606 6.10142 9.39668 5.80791 9.85241 5.80791C10.1513 5.80791 10.391 5.91876 10.5715 6.14045C10.755 6.36215 10.8467 6.64162 10.8467 6.97885C10.8467 7.44411 10.7417 7.87814 10.5316 8.28094C10.3215 8.68375 10.0285 9.10373 9.65266 9.54088C9.27387 9.98115 8.80482 10.4729 8.24552 11.0163C8.23664 11.0631 8.2396 11.1084 8.2544 11.1521C8.26919 11.1927 8.29583 11.2177 8.3343 11.227C8.49114 11.2083 8.83146 11.1989 9.35525 11.1989H10.7979C11.2832 11.1989 11.7079 11.2083 12.0719 11.227C12.1518 11.1084 12.2361 10.9039 12.3249 10.6135C12.4166 10.3199 12.4817 10.0296 12.5202 9.74228C12.5025 9.68295 12.4536 9.6486 12.3737 9.63924C12.2938 9.62987 12.2391 9.64392 12.2095 9.68139C12.0822 9.92807 11.9639 10.078 11.8544 10.131C11.7449 10.1841 11.517 10.2107 11.1708 10.2107Z" fill="#B68B51"/>
                </svg>
                <b>25-Year Warranty</b> 
            </p>
            <button class="crs_btn_more ml-auto" type="button">LEARN MORE</button>
        </li>
        <li class="d-flex justify-content-between align-items-center">
            <p class="d-flex align-items-center">
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M16.8643 2H8.13509C4.34342 2 2.08301 4.17 2.08301 7.81V16.18C2.08301 19.83 4.34342 22 8.13509 22H16.8538C20.6455 22 22.9059 19.83 22.9059 16.19V7.81C22.9163 4.17 20.6559 2 16.8643 2ZM14.4997 16.13H9.37467C8.94759 16.13 8.59342 15.79 8.59342 15.38C8.59342 14.97 8.94759 14.63 9.37467 14.63H14.4997C15.833 14.63 16.9268 13.59 16.9268 12.3C16.9268 11.01 15.8434 9.97 14.4997 9.97H9.21842L9.48926 10.23C9.79134 10.53 9.79134 11 9.47884 11.3C9.32259 11.45 9.12467 11.52 8.92676 11.52C8.72884 11.52 8.53092 11.45 8.37467 11.3L6.73926 9.72C6.43717 9.43 6.43717 8.95 6.73926 8.66L8.37467 7.09C8.67676 6.8 9.17676 6.8 9.47884 7.09C9.78092 7.38 9.78092 7.86 9.47884 8.15L9.13509 8.48H14.4997C16.6976 8.48 18.4893 10.2 18.4893 12.31C18.4893 14.42 16.6976 16.13 14.4997 16.13Z" fill="#B68B51"/>
                </svg>
                <b>60-day risk-free return</b>
            </p>
            <button class="crs_btn_more ml-auto" type="button">LEARN MORE</button>
        </li>
        <li class=" crs_trustpilot">
            <a href=" https://www.trustpilot.com/review/www.maxwellscottbags.com" class="d-flex justify-content-between align-items-center" target="_blank" onclick="pushDataLayer(['exp_inc_soc_trus_but_pdprating_trust', 'Trustpilot ', 'Button', 'PDP Give us a rating'])">
                ${trustpilot}
            </a>
        </li>
    </ul>`;

const popupOne = `
<div class="crs_popup">
    <div class="container d-md-flex flex-md-row-reverse">
        <button type="button" class="crs_popup_close">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_81_9431)">
                <path d="M5.91211 2L15.2403 11.3M5.91211 11.3L15.2403 2" stroke="white" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                </g>
                <defs>
                <filter id="filter0_d_81_9431" x="0.75" y="0.837524" width="19.6523" height="19.625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_81_9431"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_81_9431" result="shape"/>
                </filter>
                </defs>
            </svg>
        </button>
        <img src="${dir}image-1${media ? "" : "-desk"}.png" alt="image">
        <div class="crs_popup_content">
            <div class="crs_popup_circle position-absolute bg-white">
                <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                    <g clip-path="url(#clip0_152_1473)">
                        <path d="M30.4864 18.2056C32.6995 18.2056 34.5 16.3255 34.5 14.0147V12.0129H31.9563C31.1758 12.0129 30.4209 12.2507 29.774 12.6906C29.7022 12.2758 29.6114 11.8654 29.501 11.4604L30.2669 11.0001C31.1954 10.4404 31.8595 9.53669 32.137 8.45538C32.4145 7.37408 32.2721 6.24465 31.736 5.27518L30.7775 3.54163L28.5746 4.86963C27.7053 5.39368 27.0602 6.23515 26.7581 7.23901C26.4607 8.22726 26.5201 9.28798 26.925 10.2277L27.3769 11.3513C27.7785 12.5252 27.9824 13.7628 27.9824 15.0304C27.9824 21.0657 23.2802 25.9756 17.5003 25.9756C11.7204 25.9756 7.01813 21.0657 7.01813 15.0304C7.01813 13.7597 7.22179 12.5221 7.6232 11.3514L8.07508 10.2277C8.48001 9.28791 8.53931 8.22726 8.24195 7.23901C7.93988 6.23515 7.29477 5.39368 6.42548 4.86963L4.22253 3.54163L3.26406 5.27518C2.72798 6.24465 2.58561 7.37408 2.86305 8.45538C3.14048 9.53669 3.80465 10.4404 4.7343 11.0008L5.49881 11.4602C5.38851 11.865 5.29767 12.2754 5.22589 12.6905C4.57899 12.2507 3.82417 12.0129 3.04366 12.0129H0.5V14.0147C0.5 16.3256 2.30054 18.2056 4.51504 18.2056L5.4012 18.2043C5.50021 18.6158 5.61814 19.0195 5.75374 19.4144C4.98106 19.3695 4.21204 19.5568 3.53552 19.9647L1.3327 21.2927L2.29124 23.0263C3.03377 24.3692 4.38515 25.1207 5.77366 25.1207C6.45436 25.1207 7.1443 24.9399 7.77527 24.5595L8.5486 24.0918C8.82982 24.3947 9.12499 24.6832 9.43304 24.9566C8.74171 25.3208 8.16439 25.8856 7.77268 26.5939L6.50084 28.8941L8.16107 29.8949C8.77956 30.2678 9.46584 30.4583 10.1614 30.4583C10.51 30.4583 10.861 30.4104 11.2067 30.3137C12.2423 30.024 13.1078 29.3305 13.6446 28.3597L14.0856 27.5596C15.1712 27.8826 16.3167 28.0557 17.5003 28.0557C18.6837 28.0557 19.8291 27.8827 20.9147 27.5597L21.3563 28.361C22.099 29.704 23.4507 30.4557 24.839 30.4557C25.5194 30.4557 26.2086 30.275 26.8391 29.895L28.4993 28.8941L27.2275 26.594C26.8359 25.8858 26.2586 25.3211 25.5674 24.9568C25.8755 24.6834 26.1706 24.3948 26.4519 24.0919L27.2261 24.5604C27.8567 24.9405 28.5457 25.121 29.2262 25.121C30.6143 25.121 31.9664 24.3693 32.7089 23.0264L33.6674 21.2929L31.4646 19.9649C30.7882 19.5571 30.0193 19.3697 29.2468 19.4145C29.3824 19.0196 29.5003 18.6159 29.5993 18.2045L30.4864 18.2056Z" fill="#B68B51"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13387 14.9487C9.13387 10.1309 12.8875 6.21147 17.5015 6.21147C22.1154 6.21147 25.8691 10.1309 25.8691 14.9487C25.8691 19.7664 22.1154 23.6859 17.5015 23.6859C12.8875 23.6859 9.13387 19.7664 9.13387 14.9487ZM23.2082 10.173L19.9302 10.5828C19.7169 10.608 19.58 10.6395 19.5197 10.6773C19.4633 10.7151 19.415 10.8139 19.3748 10.9736L18.6322 13.9426C18.596 14.0981 18.6 14.2073 18.6443 14.2704C18.6886 14.3292 18.8073 14.3649 19.0005 14.3775C19.1736 14.3901 19.3184 14.4027 19.4352 14.4153C19.5519 14.4279 19.7008 14.449 19.8819 14.4784C20.067 14.5036 20.224 14.533 20.3528 14.5666C20.4816 14.6002 20.6285 14.6465 20.7935 14.7053C20.9585 14.7641 21.0973 14.8293 21.21 14.9007C21.3267 14.9722 21.4434 15.0604 21.5602 15.1655C21.6809 15.2705 21.7755 15.3882 21.8439 15.5185C21.9163 15.6445 21.9747 15.7937 22.019 15.966C22.0673 16.1341 22.0914 16.319 22.0914 16.5207C22.0914 17.2099 21.7091 17.792 20.9444 18.2668C20.6707 18.4349 20.3085 18.5673 19.8577 18.664C19.411 18.7648 18.9482 18.8257 18.4692 18.8468C18.3888 18.9056 18.3586 19.0086 18.3787 19.1556C18.3988 19.3069 18.4552 19.4057 18.5477 19.4519C19.1112 19.4393 19.6887 19.3616 20.2803 19.2187C20.876 19.08 21.4153 18.8741 21.8982 18.6009C23.0815 17.9327 23.6731 17.004 23.6731 15.8147C23.6731 15.3104 23.5503 14.8755 23.3048 14.5099C23.0593 14.1401 22.7454 13.8564 22.3631 13.6589C21.7876 13.3605 20.9484 13.1483 19.8457 13.0222C19.7008 13.0096 19.6002 12.9781 19.5438 12.9277C19.4875 12.8773 19.4754 12.7848 19.5076 12.6503L19.5861 12.3541C19.6143 12.2322 19.6485 12.1418 19.6887 12.083C19.729 12.0242 19.7893 11.9885 19.8698 11.9759L22.6649 11.6544C22.8179 11.5031 22.9547 11.3056 23.0754 11.0618C23.1962 10.8181 23.2847 10.5723 23.3411 10.3243C23.3411 10.2235 23.2968 10.173 23.2082 10.173ZM15.6923 17.2835H14.2011C14.0442 17.2835 13.9657 17.2309 13.9657 17.1259C13.9657 17.0082 14.183 16.7372 14.6177 16.3127L15.2153 15.7328C15.9438 15.0184 16.4368 14.4363 16.6944 13.9867C16.952 13.537 17.0807 13.0559 17.0807 12.5432C17.0807 11.917 16.8674 11.3959 16.4408 10.9799C16.0182 10.5596 15.4528 10.3495 14.7445 10.3495C14.1287 10.3495 13.5632 10.526 13.0481 10.879C12.5329 11.232 12.1506 11.7279 11.9011 12.3667C11.9131 12.4675 11.9634 12.5369 12.052 12.5747C12.1445 12.6083 12.2291 12.5978 12.3055 12.5432C12.7482 11.7531 13.2795 11.3581 13.8993 11.3581C14.3058 11.3581 14.6318 11.5073 14.8773 11.8057C15.1268 12.104 15.2516 12.4801 15.2516 12.934C15.2516 13.5602 15.1087 14.1443 14.8229 14.6864C14.5372 15.2285 14.1387 15.7937 13.6276 16.3821C13.1125 16.9746 12.4746 17.6365 11.7139 18.3677C11.7018 18.4307 11.7059 18.4917 11.726 18.5505C11.7461 18.6051 11.7823 18.6387 11.8346 18.6513C12.048 18.6261 12.5108 18.6135 13.2231 18.6135H15.1851C15.8452 18.6135 16.4227 18.6261 16.9178 18.6513C17.0264 18.4917 17.1411 18.2164 17.2619 17.8256C17.3866 17.4306 17.4752 17.0397 17.5275 16.6531C17.5033 16.5733 17.4369 16.527 17.3283 16.5144C17.2196 16.5018 17.1451 16.5207 17.1049 16.5712C16.9318 16.9032 16.7709 17.1049 16.6219 17.1763C16.473 17.2477 16.1631 17.2835 15.6923 17.2835Z" fill="#B68B51"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_152_1473">
                        <rect width="34" height="34" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h3>25-Year Warranty:<br>A Promise of Timeless Quality</h3>
            <ul>
                <li><b>25-Year Warranty: </b>Guaranteed quality and peace of mind for every Italian leather product.</li>
                <li><b>Expert Restoration:</b> Faults? Our skilled service team in York and Italian artisans are at your service.</li>
                <li><b>Comprehensive Coverage:</b> Manufacturing faults covered, plus affordable repair for wear or misuse.</li>
                <li><b>Seamless Support:</b> Easy claim process through Customer Service.</li>
                <li><b>Craftsmanship Heritage:</b> A legacy of the finest Tuscan leather and artisanal mastery.</li>
                <li><b>Lasting Investment: </b> Your purchase, a commitment to enduring quality and style.</li>
            </ul>
        </div>
    </div>
</div>`;

const popupTwo = `
<div class="crs_popup">
    <div class="container d-md-flex flex-md-row-reverse">
        <button type="button" class="crs_popup_close">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_81_9431)">
                <path d="M5.91211 2L15.2403 11.3M5.91211 11.3L15.2403 2" stroke="white" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                </g>
                <defs>
                <filter id="filter0_d_81_9431" x="0.75" y="0.837524" width="19.6523" height="19.625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_81_9431"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_81_9431" result="shape"/>
                </filter>
                </defs>
            </svg>
        </button>
        <img src="${dir}image-2${media ? "" : "-desk"}.png" alt="image">
        <div class="crs_popup_content">
            <div class="crs_popup_circle position-absolute bg-white">
                <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                    <path d="M22.7463 4H12.2661C7.71385 4 5 6.821 5 11.553V22.434C5 27.179 7.71385 30 12.2661 30H22.7338C27.2861 30 30 27.179 30 22.447V11.553C30.0125 6.821 27.2986 4 22.7463 4ZM19.9074 22.369H13.7544C13.2416 22.369 12.8164 21.927 12.8164 21.394C12.8164 20.861 13.2416 20.419 13.7544 20.419H19.9074C21.5082 20.419 22.8214 19.067 22.8214 17.39C22.8214 15.713 21.5207 14.361 19.9074 14.361H13.5668L13.8919 14.699C14.2546 15.089 14.2546 15.7 13.8794 16.09C13.6918 16.285 13.4542 16.376 13.2166 16.376C12.979 16.376 12.7414 16.285 12.5538 16.09L10.5903 14.036C10.2276 13.659 10.2276 13.035 10.5903 12.658L12.5538 10.617C12.9164 10.24 13.5167 10.24 13.8794 10.617C14.2421 10.994 14.2421 11.618 13.8794 11.995L13.4667 12.424H19.9074C22.5462 12.424 24.6973 14.66 24.6973 17.403C24.6973 20.146 22.5462 22.369 19.9074 22.369Z" fill="#B68B51"/>
                </svg>
            </div>
            <h3>60-day risk-free return</h3>
            <ul>
                <li>Our return policy is 60 days as we understand you may need time to consider your purchase.</li>
                <li><b>Personalised Exclusion:</b> Personalised embossed items are not returnable, reflecting their unique customisation.</li>
                <li><b>Easy Process: </b> Complete our simple returns form and send back your item.</li>
                <li><b>Contact Us: </b> Questions about returns? Reach out to our Customer Services team.</li>
            </ul>
        </div>
    </div>
</div>`;

const qualityBadge = `
<div class="crs_quality text-center">
    <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M21.8749 16.9352C20.8121 16.422 19.0289 15.098 19.0289 12C19.0289 8.90199 20.8121 7.57799 21.8749 7.06479C21.9559 7.02589 22.0213 6.96068 22.0604 6.87981C22.0994 6.79894 22.1099 6.7072 22.0901 6.61959L21.5945 4.38879C21.5728 4.29383 21.5172 4.21007 21.4381 4.15322C21.359 4.09636 21.2619 4.07033 21.1649 4.07999C17.3197 4.37759 15.7525 2.04559 15.2569 1.02919C15.2246 0.960711 15.1735 0.90282 15.1095 0.862246C15.0456 0.821672 14.9715 0.800083 14.8957 0.799988H10.0997C10.0242 0.800273 9.95038 0.82191 9.88668 0.862397C9.82298 0.902884 9.77203 0.96057 9.73972 1.02879C9.24412 2.04599 7.67572 4.37879 3.83172 4.07999C3.73479 4.07033 3.63767 4.09636 3.55858 4.15322C3.47948 4.21007 3.42385 4.29383 3.40212 4.38879L2.90532 6.61959C2.88548 6.70715 2.89592 6.79886 2.93493 6.87972C2.97395 6.96059 3.03923 7.02583 3.12012 7.06479C4.18292 7.57799 5.96652 8.90159 5.96652 12C5.96652 15.0984 4.18292 16.422 3.12012 16.9352C3.03923 16.9741 2.97395 17.0394 2.93493 17.1203C2.89592 17.2011 2.88548 17.2928 2.90532 17.3804L3.40092 19.6112C3.42265 19.7061 3.47828 19.7899 3.55738 19.8468C3.63647 19.9036 3.73359 19.9297 3.83052 19.92C4.05852 19.9024 4.27879 19.8937 4.49132 19.894C7.85772 19.894 9.27212 22.014 9.73852 22.9708C9.77086 23.0393 9.82197 23.0972 9.88591 23.1377C9.94985 23.1783 10.024 23.1999 10.0997 23.2H14.8957C14.9712 23.1997 15.0451 23.1781 15.1088 23.1376C15.1725 23.0971 15.2234 23.0394 15.2557 22.9712C15.7513 21.954 17.3193 19.6208 21.1637 19.92C21.2607 19.9296 21.3579 19.9035 21.437 19.8466C21.5161 19.7897 21.5717 19.7058 21.5933 19.6108L22.0889 17.3804C22.1088 17.2929 22.0985 17.2013 22.0596 17.1204C22.0208 17.0396 21.9557 16.9743 21.8749 16.9352ZM19.3217 8.22879C19.1561 8.46607 19.009 8.71574 18.8817 8.97559C18.8488 9.04298 18.7976 9.09976 18.7339 9.13944C18.6703 9.17912 18.5967 9.2001 18.5217 9.19999C18.4609 9.20039 18.4008 9.1867 18.3461 9.15999C18.251 9.11331 18.1782 9.03077 18.1439 8.93049C18.1095 8.83022 18.1164 8.72041 18.1629 8.62519C18.308 8.32848 18.4757 8.04337 18.6645 7.77239C18.7252 7.68534 18.818 7.62597 18.9224 7.60733C19.0269 7.58869 19.1345 7.61231 19.2215 7.67299C19.3086 7.73367 19.3679 7.82644 19.3866 7.9309C19.4052 8.03536 19.3816 8.14294 19.3209 8.22999L19.3217 8.22879ZM19.8417 6.49239C20.0753 6.29742 20.3218 6.11861 20.5797 5.95719C20.6699 5.90102 20.7787 5.88296 20.8822 5.90701C20.9857 5.93105 21.0753 5.99521 21.1315 6.08539C21.1877 6.17556 21.2057 6.28436 21.1817 6.38784C21.1577 6.49132 21.0935 6.58102 21.0033 6.63719C20.7754 6.77936 20.5576 6.93707 20.3513 7.10919C20.3109 7.14281 20.2643 7.16814 20.2141 7.18374C20.1639 7.19934 20.1112 7.20491 20.0588 7.20011C20.0065 7.19532 19.9556 7.18027 19.9091 7.15582C19.8626 7.13136 19.8213 7.09798 19.7877 7.05759C19.7541 7.01719 19.7288 6.97057 19.7132 6.92039C19.6976 6.8702 19.692 6.81744 19.6968 6.7651C19.7016 6.71277 19.7166 6.66189 19.7411 6.61537C19.7656 6.56885 19.7989 6.52761 19.8393 6.49399L19.8417 6.49239ZM18.1129 4.96599C18.1259 4.91505 18.1488 4.86716 18.1803 4.82507C18.2118 4.78298 18.2512 4.74751 18.2965 4.72068C18.3417 4.69386 18.3917 4.67621 18.4438 4.66875C18.4958 4.66129 18.5488 4.66415 18.5997 4.67719C18.8456 4.73971 19.0946 4.78912 19.3457 4.82519C19.4485 4.84277 19.5403 4.89975 19.6016 4.984C19.663 5.06825 19.689 5.17311 19.6742 5.27628C19.6594 5.37944 19.6049 5.47275 19.5223 5.53635C19.4398 5.59995 19.3356 5.62881 19.2321 5.61679C18.9525 5.57683 18.6751 5.52195 18.4013 5.45239C18.3504 5.43946 18.3025 5.41661 18.2604 5.38517C18.2183 5.35372 18.1828 5.31428 18.1559 5.26911C18.1291 5.22394 18.1114 5.17392 18.1039 5.12191C18.0964 5.0699 18.0992 5.01692 18.1121 4.96599H18.1129ZM17.5937 10.32C17.6149 10.2158 17.6767 10.1242 17.7654 10.0655C17.8541 10.0068 17.9625 9.98577 18.0667 10.007C18.171 10.0282 18.2625 10.09 18.3212 10.1787C18.3799 10.2674 18.4009 10.3758 18.3797 10.48C18.3295 10.7305 18.2925 10.9836 18.2689 11.238C18.2598 11.3372 18.2139 11.4293 18.1404 11.4965C18.0669 11.5637 17.9709 11.601 17.8713 11.6012C17.8589 11.6012 17.8465 11.6012 17.8341 11.6012C17.7287 11.5911 17.6317 11.5396 17.5642 11.458C17.4967 11.3764 17.4643 11.2714 17.4741 11.166C17.4991 10.8821 17.539 10.5997 17.5937 10.32ZM14.2197 1.65559C14.265 1.62886 14.315 1.6113 14.3671 1.60393C14.4191 1.59656 14.4721 1.59952 14.523 1.61263C14.5739 1.62575 14.6217 1.64876 14.6637 1.68036C14.7057 1.71196 14.741 1.75152 14.7677 1.79679C14.9037 2.02759 15.054 2.24962 15.2177 2.46159C15.2825 2.54561 15.3113 2.65194 15.2978 2.75718C15.2842 2.86243 15.2293 2.95797 15.1453 3.02279C15.0613 3.08761 14.955 3.11639 14.8497 3.10282C14.7445 3.08924 14.6489 3.03441 14.5841 2.95039C14.4004 2.71194 14.2316 2.4624 14.0785 2.20319C14.0247 2.11184 14.0093 2.00284 14.0358 1.90016C14.0622 1.79747 14.1284 1.7095 14.2197 1.65559ZM5.21012 7.05599C5.17652 7.0964 5.13528 7.1298 5.08876 7.15427C5.04224 7.17874 4.99136 7.1938 4.93902 7.19859C4.88667 7.20338 4.8339 7.19781 4.78371 7.1822C4.73353 7.16658 4.68691 7.14123 4.64652 7.10759C4.44029 6.93547 4.22244 6.77776 3.99452 6.63559C3.94987 6.60777 3.91114 6.57144 3.88053 6.52866C3.84993 6.48587 3.82805 6.43748 3.81614 6.38624C3.80424 6.335 3.80254 6.28192 3.81115 6.23002C3.81976 6.17813 3.83851 6.12844 3.86632 6.08379C3.89414 6.03914 3.93047 6.00041 3.97326 5.9698C4.01604 5.93919 4.06443 5.91731 4.11567 5.90541C4.16691 5.8935 4.21999 5.89181 4.27189 5.90042C4.32378 5.90903 4.37347 5.92777 4.41812 5.95559C4.67682 6.11692 4.9242 6.29573 5.15852 6.49079C5.19917 6.52441 5.23277 6.56574 5.25738 6.6124C5.28199 6.65905 5.29713 6.71012 5.30193 6.76265C5.30672 6.81518 5.30108 6.86815 5.28532 6.91849C5.26957 6.96883 5.24401 7.01556 5.21012 7.05599ZM5.31532 5.27759C5.30036 5.17262 5.32768 5.06601 5.39128 4.98118C5.45489 4.89635 5.54957 4.84024 5.65452 4.82519C5.90564 4.78912 6.15466 4.73971 6.40052 4.67719C6.50332 4.65067 6.61244 4.66607 6.70389 4.72C6.79533 4.77394 6.8616 4.86199 6.88812 4.96479C6.91464 5.06759 6.89924 5.17671 6.84531 5.26815C6.79137 5.35959 6.70332 5.42587 6.60052 5.45239C6.32672 5.52195 6.04939 5.57683 5.76972 5.61679C5.71772 5.62425 5.66475 5.6214 5.61385 5.6084C5.56295 5.59539 5.51511 5.57248 5.47306 5.54098C5.43101 5.50948 5.39558 5.47001 5.36879 5.42482C5.342 5.37962 5.32438 5.32959 5.31692 5.27759H5.31532ZM5.67772 8.22879C5.61704 8.14174 5.59342 8.03416 5.61206 7.9297C5.63071 7.82524 5.69008 7.73247 5.77712 7.67179C5.86417 7.61111 5.97175 7.58749 6.07621 7.60613C6.18067 7.62477 6.27344 7.68414 6.33412 7.77119C6.52294 8.04217 6.69064 8.32728 6.83572 8.62399C6.88227 8.71921 6.88913 8.82902 6.85478 8.92929C6.82043 9.02957 6.74768 9.11211 6.65252 9.15879C6.59786 9.1855 6.53776 9.19919 6.47692 9.19879C6.40191 9.1989 6.32838 9.17792 6.26472 9.13824C6.20107 9.09856 6.14985 9.04179 6.11692 8.97439C5.98983 8.71497 5.843 8.46571 5.67772 8.22879ZM5.15772 17.5088C4.92413 17.7033 4.67756 17.8818 4.41972 18.0428C4.37507 18.0706 4.32538 18.0894 4.27349 18.098C4.22159 18.1066 4.16851 18.1049 4.11727 18.093C4.06603 18.0811 4.01764 18.0592 3.97486 18.0286C3.93207 17.998 3.89574 17.9592 3.86792 17.9146C3.84011 17.8699 3.82136 17.8202 3.81275 17.7684C3.80414 17.7165 3.80584 17.6634 3.81774 17.6121C3.82965 17.5609 3.85153 17.5125 3.88213 17.4697C3.91274 17.4269 3.95147 17.3906 3.99612 17.3628C4.22404 17.2206 4.44189 17.0629 4.64812 16.8908C4.7297 16.8229 4.83491 16.7902 4.94061 16.7999C5.0463 16.8095 5.14383 16.8608 5.21172 16.9424C5.27962 17.024 5.31233 17.1292 5.30265 17.2349C5.29297 17.3406 5.2417 17.4381 5.16012 17.506L5.15772 17.5088ZM6.88652 19.0356C6.87351 19.0865 6.85059 19.1343 6.81908 19.1764C6.78756 19.2184 6.74808 19.2539 6.70287 19.2806C6.65767 19.3074 6.60763 19.325 6.55561 19.3325C6.50359 19.3399 6.45062 19.337 6.39972 19.324C6.1542 19.2613 5.90543 19.212 5.65452 19.1764C5.5495 19.1613 5.45478 19.1051 5.3912 19.0201C5.32763 18.9351 5.30041 18.8284 5.31552 18.7234C5.33064 18.6184 5.38686 18.5236 5.47181 18.4601C5.55677 18.3965 5.6635 18.3693 5.76852 18.3844C6.04779 18.4243 6.32472 18.4792 6.59812 18.5488C6.70082 18.5749 6.78895 18.6407 6.84317 18.7318C6.89739 18.8228 6.91327 18.9316 6.88732 19.0344L6.88652 19.0356ZM6.85972 15.3252C6.73447 15.5863 6.59202 15.8389 6.43332 16.0812C6.37497 16.1699 6.28379 16.2318 6.17982 16.2532C6.07585 16.2747 5.96761 16.2539 5.87892 16.1956C5.79023 16.1372 5.72836 16.0461 5.7069 15.9421C5.68545 15.8381 5.70617 15.7299 5.76452 15.6412C5.90382 15.429 6.02877 15.2077 6.13852 14.9788C6.15921 14.9284 6.18997 14.8827 6.22893 14.8446C6.26788 14.8065 6.31421 14.7768 6.36507 14.7573C6.41593 14.7377 6.47025 14.7288 6.52469 14.731C6.57913 14.7332 6.63255 14.7464 6.68167 14.77C6.73079 14.7936 6.77458 14.827 6.81034 14.8681C6.84611 14.9092 6.8731 14.9572 6.88966 15.0091C6.90622 15.061 6.912 15.1157 6.90664 15.1699C6.90129 15.2242 6.88491 15.2767 6.85852 15.3244L6.85972 15.3252ZM7.40572 13.68C7.38729 13.7703 7.33826 13.8514 7.26691 13.9097C7.19556 13.968 7.10627 13.9999 7.01412 14C6.98725 14.0001 6.96044 13.9974 6.93412 13.992C6.88242 13.9818 6.83325 13.9614 6.78944 13.9321C6.74563 13.9029 6.70803 13.8652 6.67882 13.8213C6.6496 13.7775 6.62934 13.7283 6.6192 13.6766C6.60906 13.6248 6.60924 13.5716 6.61972 13.52C6.66993 13.2694 6.70692 13.0164 6.73052 12.762C6.73422 12.7088 6.7485 12.6569 6.77254 12.6094C6.79657 12.5618 6.82986 12.5195 6.87047 12.485C6.91107 12.4505 6.95816 12.4244 7.00897 12.4084C7.05979 12.3923 7.1133 12.3865 7.16637 12.3914C7.21944 12.3963 7.27099 12.4118 7.318 12.4369C7.36501 12.462 7.40652 12.4963 7.44011 12.5376C7.4737 12.579 7.49868 12.6267 7.51359 12.6779C7.5285 12.729 7.53303 12.7826 7.52692 12.8356C7.50136 13.119 7.46091 13.4008 7.40572 13.68ZM7.16572 11.6C7.15332 11.6 7.14092 11.6 7.12852 11.6C7.02893 11.5998 6.93298 11.5625 6.85945 11.4953C6.78591 11.4281 6.74008 11.336 6.73092 11.2368C6.70714 10.9827 6.67003 10.7301 6.61972 10.48C6.59882 10.376 6.6201 10.2679 6.67887 10.1796C6.73765 10.0913 6.8291 10.0299 6.93312 10.009C7.03714 9.98809 7.1452 10.0094 7.23353 10.0681C7.32186 10.1269 7.38322 10.2184 7.40412 10.3224C7.45976 10.6007 7.50075 10.8818 7.52692 11.1644C7.53684 11.2699 7.5045 11.375 7.43701 11.4566C7.36952 11.5383 7.27238 11.5899 7.16692 11.6H7.16572ZM9.09852 20.24C9.06748 20.2825 9.02835 20.3185 8.98338 20.3458C8.93841 20.3732 8.88848 20.3914 8.83646 20.3994C8.78443 20.4075 8.73134 20.4051 8.68021 20.3926C8.62908 20.3801 8.58093 20.3576 8.53852 20.3264C8.33559 20.1777 8.12358 20.0419 7.90372 19.9196C7.85615 19.895 7.81399 19.8612 7.77975 19.82C7.74551 19.7789 7.71988 19.7312 7.70437 19.68C7.68887 19.6288 7.68381 19.5749 7.6895 19.5217C7.69518 19.4684 7.7115 19.4169 7.73748 19.3701C7.76346 19.3233 7.79857 19.2821 7.84073 19.2492C7.88289 19.2162 7.93125 19.192 7.98294 19.178C8.03462 19.164 8.08859 19.1606 8.14163 19.1679C8.19467 19.1752 8.24571 19.193 8.29172 19.2204C8.54116 19.3586 8.78164 19.5123 9.01172 19.6808C9.09658 19.7432 9.15341 19.8365 9.16989 19.9405C9.18636 20.0445 9.16115 20.1508 9.09972 20.2364L9.09852 20.24ZM9.14252 4.22839C8.89274 4.42055 8.62998 4.59524 8.35612 4.75119C8.31048 4.77719 8.26015 4.79395 8.20803 4.8005C8.15591 4.80705 8.103 4.80328 8.05234 4.78939C8.00168 4.77549 7.95424 4.75176 7.91275 4.71954C7.87126 4.68731 7.83652 4.64724 7.81052 4.60159C7.78452 4.55594 7.76776 4.50562 7.76121 4.4535C7.75466 4.40137 7.75843 4.34847 7.77233 4.29781C7.78622 4.24714 7.80995 4.19971 7.84217 4.15822C7.8744 4.11673 7.91447 4.08199 7.96012 4.05599C8.20252 3.91727 8.43495 3.76183 8.65572 3.59079C8.69735 3.55875 8.74488 3.53522 8.79561 3.52154C8.84633 3.50787 8.89925 3.50432 8.95134 3.5111C9.00344 3.51788 9.05368 3.53485 9.09922 3.56105C9.14475 3.58725 9.18468 3.62216 9.21672 3.66379C9.24876 3.70542 9.27229 3.75295 9.28597 3.80367C9.29964 3.85439 9.30319 3.90731 9.29641 3.95941C9.28963 4.0115 9.27266 4.06175 9.24646 4.10728C9.22026 4.15282 9.18535 4.19275 9.14372 4.22479L9.14252 4.22839ZM10.7797 22.3484C10.7188 22.383 10.6498 22.4008 10.5797 22.4C10.51 22.4001 10.4415 22.382 10.381 22.3475C10.3204 22.313 10.2699 22.2632 10.2345 22.2032C10.0792 21.9402 9.90541 21.6885 9.71452 21.45C9.68082 21.4091 9.65558 21.3619 9.64028 21.3112C9.62497 21.2604 9.6199 21.2071 9.62536 21.1544C9.63082 21.1017 9.6467 21.0506 9.67208 21.0041C9.69747 20.9575 9.73184 20.9165 9.77321 20.8834C9.81458 20.8503 9.86212 20.8257 9.91307 20.8111C9.96402 20.7965 10.0174 20.7922 10.07 20.7984C10.1226 20.8046 10.1735 20.8212 10.2197 20.8472C10.2658 20.8732 10.3064 20.9082 10.3389 20.95C10.5534 21.2181 10.7485 21.5011 10.9229 21.7968C10.9495 21.8421 10.9669 21.8923 10.9741 21.9444C10.9813 21.9964 10.9781 22.0494 10.9648 22.1003C10.9515 22.1511 10.9283 22.1989 10.8966 22.2408C10.8648 22.2826 10.8251 22.3179 10.7797 22.3444V22.3484ZM10.9209 2.20719C10.7679 2.4664 10.599 2.71594 10.4153 2.95439C10.3505 3.03841 10.255 3.09324 10.1497 3.10682C10.0445 3.12039 9.93814 3.09161 9.85412 3.02679C9.7701 2.96197 9.71527 2.86643 9.70169 2.76118C9.68812 2.65594 9.7169 2.54961 9.78172 2.46559C9.94549 2.25362 10.0958 2.03159 10.2317 1.80079C10.2856 1.70939 10.3736 1.64315 10.4763 1.61663C10.5791 1.59012 10.6881 1.6055 10.7795 1.65939C10.8709 1.71328 10.9372 1.80127 10.9637 1.904C10.9902 2.00674 10.9748 2.11579 10.9209 2.20719ZM12.8997 22.4H12.0997C11.9936 22.4 11.8919 22.3578 11.8169 22.2828C11.7419 22.2078 11.6997 22.1061 11.6997 22C11.6997 21.8939 11.7419 21.7922 11.8169 21.7171C11.8919 21.6421 11.9936 21.6 12.0997 21.6H12.8997C13.0058 21.6 13.1076 21.6421 13.1826 21.7171C13.2576 21.7922 13.2997 21.8939 13.2997 22C13.2997 22.1061 13.2576 22.2078 13.1826 22.2828C13.1076 22.3578 13.0058 22.4 12.8997 22.4ZM12.8997 2.39999H12.0997C11.9936 2.39999 11.8919 2.35785 11.8169 2.28283C11.7419 2.20782 11.6997 2.10607 11.6997 1.99999C11.6997 1.8939 11.7419 1.79216 11.8169 1.71715C11.8919 1.64213 11.9936 1.59999 12.0997 1.59999H12.8997C13.0058 1.59999 13.1076 1.64213 13.1826 1.71715C13.2576 1.79216 13.2997 1.8939 13.2997 1.99999C13.2997 2.10607 13.2576 2.20782 13.1826 2.28283C13.1076 2.35785 13.0058 2.39999 12.8997 2.39999ZM15.2857 21.45C15.0948 21.6885 14.9211 21.9402 14.7657 22.2032C14.7302 22.2633 14.6796 22.3132 14.6189 22.3477C14.5582 22.3822 14.4896 22.4002 14.4197 22.4C14.3483 22.4001 14.2783 22.3809 14.2169 22.3444C14.1256 22.2905 14.0594 22.2025 14.033 22.0998C14.0065 21.9971 14.0219 21.8881 14.0757 21.7968C14.2501 21.5011 14.4453 21.2181 14.6597 20.95C14.6923 20.9082 14.7328 20.8732 14.779 20.8472C14.8251 20.8212 14.876 20.8046 14.9287 20.7984C14.9813 20.7922 15.0346 20.7965 15.0856 20.8111C15.1365 20.8257 15.1841 20.8503 15.2254 20.8834C15.2668 20.9165 15.3012 20.9575 15.3266 21.0041C15.3519 21.0506 15.3678 21.1017 15.3733 21.1544C15.3787 21.2071 15.3737 21.2604 15.3584 21.3112C15.3431 21.3619 15.3178 21.4091 15.2841 21.45H15.2857ZM15.7829 3.66399C15.8476 3.58017 15.9428 3.5254 16.0478 3.51168C16.1528 3.49795 16.2589 3.5264 16.3429 3.59079C16.5634 3.76054 16.7955 3.91478 17.0373 4.05239C17.083 4.07839 17.123 4.11313 17.1553 4.15462C17.1875 4.19611 17.2112 4.24354 17.2251 4.2942C17.239 4.34487 17.2428 4.39777 17.2362 4.4499C17.2297 4.50202 17.2129 4.55234 17.1869 4.59799C17.1609 4.64364 17.1262 4.68371 17.0847 4.71594C17.0432 4.74816 16.9958 4.77189 16.9451 4.78579C16.8944 4.79968 16.8415 4.80345 16.7894 4.7969C16.7373 4.79035 16.687 4.77359 16.6413 4.74759C16.3675 4.59164 16.1047 4.41695 15.8549 4.22479C15.7711 4.15994 15.7164 4.06444 15.7029 3.95929C15.6894 3.85413 15.7182 3.74792 15.7829 3.66399ZM17.0937 19.916C16.8741 20.0383 16.6624 20.1741 16.4597 20.3228C16.4173 20.3538 16.3692 20.3762 16.3182 20.3887C16.2672 20.4011 16.2142 20.4034 16.1622 20.3954C16.1103 20.3874 16.0605 20.3692 16.0156 20.3419C15.9707 20.3146 15.9316 20.2788 15.9005 20.2364C15.8695 20.194 15.8471 20.1459 15.8346 20.0949C15.8222 20.0438 15.8199 19.9908 15.8279 19.9389C15.8359 19.887 15.8541 19.8371 15.8814 19.7922C15.9087 19.7473 15.9445 19.7082 15.9869 19.6772C16.217 19.5087 16.4575 19.355 16.7069 19.2168C16.7529 19.1894 16.804 19.1716 16.857 19.1643C16.9101 19.157 16.964 19.1604 17.0157 19.1744C17.0674 19.1884 17.1158 19.2126 17.1579 19.2456C17.2001 19.2785 17.2352 19.3197 17.2612 19.3665C17.2871 19.4133 17.3035 19.4648 17.3091 19.5181C17.3148 19.5713 17.3098 19.6252 17.2943 19.6764C17.2788 19.7276 17.2531 19.7753 17.2189 19.8164C17.1847 19.8576 17.1425 19.8914 17.0949 19.916H17.0937ZM17.9853 14C17.8932 13.9999 17.8039 13.968 17.7325 13.9097C17.6612 13.8514 17.6122 13.7703 17.5937 13.68C17.5381 13.4017 17.4971 13.1206 17.4709 12.838C17.4648 12.785 17.4693 12.7314 17.4843 12.6803C17.4992 12.6291 17.5241 12.5814 17.5577 12.54C17.5913 12.4987 17.6328 12.4644 17.6798 12.4393C17.7269 12.4142 17.7784 12.3987 17.8315 12.3938C17.8845 12.3889 17.9381 12.3947 17.9889 12.4108C18.0397 12.4268 18.0868 12.4529 18.1274 12.4874C18.168 12.5219 18.2013 12.5642 18.2253 12.6118C18.2493 12.6593 18.2636 12.7112 18.2673 12.7644C18.2915 13.018 18.3291 13.2703 18.3797 13.52C18.4006 13.6239 18.3793 13.7319 18.3206 13.8202C18.2618 13.9085 18.1705 13.9699 18.0665 13.9908C18.0399 13.9967 18.0126 13.9998 17.9853 14ZM18.3265 14.7916C18.3739 14.7689 18.4253 14.7557 18.4777 14.7529C18.5302 14.7501 18.5827 14.7576 18.6323 14.7751C18.6818 14.7925 18.7274 14.8196 18.7665 14.8547C18.8056 14.8898 18.8374 14.9322 18.8601 14.9796C18.9699 15.2085 19.0948 15.4298 19.2341 15.642C19.263 15.6859 19.283 15.7351 19.2929 15.7867C19.3027 15.8383 19.3024 15.8914 19.2917 15.9429C19.2811 15.9944 19.2605 16.0432 19.2309 16.0867C19.2014 16.1302 19.1636 16.1675 19.1197 16.1964C19.0758 16.2253 19.0266 16.2452 18.975 16.2551C18.9234 16.265 18.8703 16.2646 18.8188 16.254C18.7673 16.2434 18.7185 16.2227 18.675 16.1932C18.6315 16.1637 18.5942 16.1259 18.5653 16.082C18.4066 15.8397 18.2642 15.5871 18.1389 15.326C18.1161 15.2786 18.1028 15.2272 18.0999 15.1746C18.097 15.1221 18.1044 15.0695 18.1219 15.0199C18.1393 14.9702 18.1663 14.9245 18.2014 14.8853C18.2366 14.8462 18.2791 14.8143 18.3265 14.7916ZM19.3441 19.1752C19.0932 19.2108 18.8444 19.2601 18.5989 19.3228C18.548 19.3359 18.495 19.3389 18.443 19.3316C18.3909 19.3242 18.3408 19.3067 18.2956 19.28C18.2503 19.2533 18.2107 19.2179 18.1791 19.1759C18.1475 19.1339 18.1245 19.0861 18.1113 19.0352C18.0982 18.9843 18.0952 18.9313 18.1026 18.8792C18.1099 18.8272 18.1274 18.7771 18.1541 18.7318C18.1808 18.6865 18.2162 18.647 18.2582 18.6154C18.3002 18.5838 18.348 18.5607 18.3989 18.5476C18.6723 18.478 18.9493 18.4231 19.2285 18.3832C19.3335 18.3681 19.4403 18.3953 19.5252 18.4589C19.6102 18.5224 19.6664 18.6172 19.6815 18.7222C19.6966 18.8272 19.6694 18.9339 19.6058 19.0189C19.5423 19.1039 19.4475 19.1601 19.3425 19.1752H19.3441ZM21.1325 17.9156C21.1047 17.9601 21.0683 17.9988 21.0256 18.0293C20.9828 18.0598 20.9345 18.0815 20.8833 18.0933C20.8321 18.1052 20.7791 18.1068 20.7273 18.0981C20.6755 18.0894 20.6259 18.0706 20.5813 18.0428C20.3226 17.8815 20.0752 17.7026 19.8409 17.5076C19.8005 17.474 19.7672 17.4327 19.7427 17.3862C19.7182 17.3397 19.7032 17.2888 19.6984 17.2365C19.6936 17.1841 19.6992 17.1314 19.7148 17.0812C19.7304 17.031 19.7557 16.9844 19.7893 16.944C19.8229 16.9036 19.8642 16.8702 19.9107 16.8458C19.9572 16.8213 20.0081 16.8063 20.0604 16.8015C20.1128 16.7967 20.1655 16.8022 20.2157 16.8178C20.2659 16.8334 20.3125 16.8588 20.3529 16.8924C20.5592 17.0645 20.777 17.2222 21.0049 17.3644C21.0495 17.3922 21.0882 17.4285 21.1187 17.4713C21.1492 17.514 21.1711 17.5624 21.1829 17.6136C21.1948 17.6647 21.1964 17.7178 21.1878 17.7696C21.1791 17.8214 21.1603 17.871 21.1325 17.9156Z" fill="#B68B51"/>
    </svg>
    <p><b>Handcrafted leather<br>made in italy</b></p>
    <a href="#leather-unique-block-desktop" class="crs_quality_more">Learn more</ф>
</div>`;

const highlight = `
<div class="d-flex crs_highlight">
    <div class="d-flex align-items-center justify-content-center">
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="29" height="24" viewBox="0 0 29 24" fill="none">
            <path d="M25.1929 12.9147C27.0207 12.9147 28.5078 11.443 28.5078 9.63414V8.06723H26.4069C25.7622 8.06723 25.1388 8.25339 24.6046 8.59771C24.5452 8.27304 24.4702 7.95173 24.379 7.63471L25.0116 7.27444C25.7784 6.83633 26.3269 6.12891 26.5561 5.2825C26.7853 4.43608 26.6677 3.552 26.225 2.79313L25.4333 1.43616L23.6139 2.47568C22.896 2.88589 22.3631 3.54457 22.1137 4.33036C21.868 5.10394 21.917 5.93423 22.2515 6.66982L22.6247 7.54934C22.9564 8.46821 23.1248 9.43696 23.1248 10.4293C23.1248 15.1534 19.2412 18.9968 14.4675 18.9968C9.69381 18.9968 5.81016 15.1534 5.81016 10.4293C5.81016 9.43457 5.97837 8.46577 6.3099 7.54939L6.68311 6.66982C7.01755 5.93418 7.06652 5.10394 6.82093 4.33036C6.57145 3.54457 6.03864 2.88589 5.32068 2.47568L3.50124 1.43616L2.70963 2.79313C2.26687 3.552 2.14929 4.43608 2.37843 5.2825C2.60756 6.12891 3.15611 6.83633 3.92392 7.27498L4.55534 7.6346C4.46424 7.95146 4.38922 8.27271 4.32993 8.59765C3.79564 8.25339 3.17223 8.06723 2.5276 8.06723H0.426758V9.63414C0.426758 11.4431 1.91384 12.9147 3.74283 12.9147L4.47472 12.9137C4.55649 13.2358 4.65389 13.5517 4.76588 13.8609C4.12772 13.8257 3.49258 13.9724 2.93383 14.2917L1.1145 15.3312L1.90617 16.6882C2.51943 17.7394 3.63555 18.3276 4.78234 18.3276C5.34454 18.3276 5.91436 18.1861 6.43549 17.8883L7.0742 17.5222C7.30646 17.7593 7.55024 17.9852 7.80466 18.1991C7.23368 18.4842 6.75687 18.9264 6.43335 19.4808L5.38293 21.2813L6.75413 22.0647C7.26495 22.3566 7.83176 22.5057 8.40624 22.5057C8.69417 22.5057 8.98408 22.4683 9.26959 22.3925C10.1249 22.1657 10.8397 21.6229 11.283 20.863L11.6472 20.2367C12.5439 20.4896 13.49 20.625 14.4675 20.625C15.4449 20.625 16.3909 20.4896 17.2875 20.2368L17.6522 20.864C18.2656 21.9153 19.3821 22.5037 20.5286 22.5037C21.0906 22.5037 21.6598 22.3623 22.1805 22.0648L23.5517 21.2813L22.5013 19.4809C22.1779 18.9265 21.7011 18.4844 21.1303 18.1993C21.3847 17.9853 21.6285 17.7594 21.8608 17.5223L22.5002 17.889C23.021 18.1865 23.5901 18.3279 24.1521 18.3279C25.2985 18.3279 26.4152 17.7394 27.0285 16.6883L27.8201 15.3313L26.0008 14.2918C25.4421 13.9726 24.8071 13.8259 24.1691 13.861C24.2811 13.5519 24.3784 13.2359 24.4603 12.9138L25.1929 12.9147Z"
                fill="#B68B51" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.55757 10.3652C7.55757 6.59407 10.6578 3.52603 14.4685 3.52603C18.2792 3.52603 21.3794 6.59407 21.3794 10.3652C21.3794 14.1364 18.2792 17.2045 14.4685 17.2045C10.6578 17.2045 7.55757 14.1364 7.55757 10.3652ZM19.1818 6.62702L16.4744 6.94774C16.2982 6.96748 16.1852 6.99215 16.1353 7.02176C16.0888 7.05136 16.0489 7.12867 16.0157 7.25367L15.4024 9.5777C15.3725 9.69942 15.3758 9.78494 15.4124 9.83428C15.4489 9.88034 15.547 9.9083 15.7065 9.91817C15.8495 9.92803 15.9691 9.9379 16.0655 9.94777C16.1619 9.95764 16.2849 9.97409 16.4345 9.99712C16.5874 10.0169 16.717 10.0399 16.8234 10.0662C16.9298 10.0925 17.0511 10.1287 17.1874 10.1747C17.3237 10.2208 17.4383 10.2718 17.5314 10.3277C17.6278 10.3836 17.7242 10.4527 17.8206 10.5349C17.9203 10.6172 17.9984 10.7093 18.0549 10.8113C18.1148 10.91 18.163 11.0267 18.1995 11.1616C18.2394 11.2932 18.2594 11.4379 18.2594 11.5958C18.2594 12.1353 17.9436 12.5909 17.312 12.9626C17.086 13.0942 16.7868 13.1978 16.4146 13.2735C16.0456 13.3524 15.6633 13.4001 15.2678 13.4166C15.2013 13.4626 15.1764 13.5432 15.193 13.6583C15.2096 13.7768 15.2561 13.8541 15.3326 13.8902C15.798 13.8804 16.2749 13.8195 16.7636 13.7077C17.2555 13.5991 17.7009 13.4379 18.0998 13.2241C19.0771 12.7011 19.5657 11.9741 19.5657 11.0432C19.5657 10.6484 19.4643 10.308 19.2616 10.0218C19.0588 9.73231 18.7995 9.51027 18.4837 9.35566C18.0084 9.12211 17.3154 8.95599 16.4046 8.8573C16.2849 8.84743 16.2018 8.82276 16.1553 8.78329C16.1087 8.74381 16.0988 8.67144 16.1254 8.56618L16.1902 8.33427C16.2135 8.23887 16.2417 8.16815 16.2749 8.1221C16.3082 8.07604 16.358 8.04808 16.4245 8.03821L18.733 7.78657C18.8594 7.66815 18.9724 7.51354 19.0721 7.32275C19.1718 7.13196 19.2449 6.93952 19.2915 6.74544C19.2915 6.66649 19.2549 6.62702 19.1818 6.62702ZM12.9742 12.1929H11.7427C11.6131 12.1929 11.5482 12.1517 11.5482 12.0695C11.5482 11.9774 11.7277 11.7652 12.0867 11.433L12.5803 10.979C13.182 10.4198 13.5892 9.96422 13.8019 9.61224C14.0146 9.26027 14.121 8.88362 14.121 8.4823C14.121 7.99216 13.9448 7.58426 13.5925 7.2586C13.2435 6.92965 12.7764 6.76518 12.1914 6.76518C11.6829 6.76518 11.2158 6.90334 10.7904 7.17965C10.3649 7.45597 10.0491 7.84413 9.84303 8.34414C9.853 8.42309 9.89455 8.47736 9.96768 8.50697C10.0441 8.53328 10.1139 8.52506 10.1771 8.4823C10.5427 7.86387 10.9815 7.55466 11.4934 7.55466C11.8291 7.55466 12.0984 7.67143 12.3011 7.90499C12.5072 8.13854 12.6102 8.43296 12.6102 8.78822C12.6102 9.27836 12.4922 9.7356 12.2562 10.1599C12.0202 10.5843 11.6912 11.0267 11.269 11.4873C10.8435 11.9511 10.3167 12.4692 9.68846 13.0416C9.67849 13.0909 9.68181 13.1386 9.69843 13.1846C9.71505 13.2274 9.74497 13.2537 9.78818 13.2636C9.96435 13.2439 10.3466 13.234 10.935 13.234H12.5554C13.1005 13.234 13.5775 13.2439 13.9864 13.2636C14.0761 13.1386 14.1709 12.9231 14.2706 12.6172C14.3736 12.308 14.4468 12.0021 14.49 11.6994C14.47 11.6369 14.4152 11.6007 14.3254 11.5909C14.2357 11.581 14.1742 11.5958 14.1409 11.6353C13.998 11.8952 13.8651 12.0531 13.7421 12.109C13.6191 12.1649 13.3631 12.1929 12.9742 12.1929Z"
                fill="#B68B51" />
        </svg>
        25-year warranty
    </div>
    <div class="d-flex align-items-center justify-content-center">
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M16.69 2H8.31001C4.67 2 2.5 4.17 2.5 7.81001V16.18C2.5 19.83 4.67 22 8.31001 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81001C22.5 4.17 20.33 2 16.69 2ZM14.42 16.13H9.50001C9.09001 16.13 8.75001 15.79 8.75001 15.38C8.75001 14.97 9.09001 14.63 9.50001 14.63H14.42C15.7 14.63 16.75 13.59 16.75 12.3C16.75 11.01 15.71 9.97001 14.42 9.97001H9.35001L9.61001 10.23C9.90001 10.53 9.90001 11 9.60001 11.3C9.45001 11.45 9.26001 11.52 9.07001 11.52C8.88001 11.52 8.69001 11.45 8.54001 11.3L6.97001 9.72001C6.68001 9.43001 6.68001 8.95001 6.97001 8.66001L8.54001 7.09001C8.83001 6.80001 9.31001 6.80001 9.60001 7.09001C9.89001 7.38001 9.89001 7.86001 9.60001 8.15001L9.27001 8.48001H14.42C16.53 8.48001 18.25 10.2 18.25 12.31C18.25 14.42 16.53 16.13 14.42 16.13Z" fill="#B68B51"/>
        </svg>
        60-day return
    </div>
</div>`;

start();

// const record = setInterval(() => {
//   if (typeof clarity === "function") {
//     clearInterval(record);

//     clarity("set", "first_e_commerce_hp", "variant_1");
//   }
// }, 0);

// -------------------------------------
// FUNCTIONS
// -------------------------------------
function waitForElement(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
}

function handleVisibility(el, eventParams) {
  let isVisible = false;
  let entryTime;
  const config = {
    root: null,
    threshold: 0, // Trigger when any part of the element is out of viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!isVisible) {
          // The element has become visible
          isVisible = true;
          entryTime = new Date().getTime();
        }
      } else if (isVisible) {
        // The element is out of the viewport, calculate visibility duration
        isVisible = false;
        const exitTime = new Date().getTime();
        const visibilityDuration = (exitTime - entryTime) / 1000; // Convert to seconds
        const roundedDuration = Math.round(visibilityDuration);

        if (roundedDuration) {
          const eventData = eventParams;
          eventData[1] = roundedDuration;
          pushDataLayer(eventData);
          observer.disconnect();
        }
      }
    });
  }, config);

  observer.observe(el);
}

function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
  // Send a Google Analytics event
  const eventData = {
    event: "event-to-ga4",
    event_name,
    event_desc,
    event_type,
    event_loc,
  };

  window.dataLayer = window.dataLayer || [];
  dataLayer.push(eventData);
  console.log(eventData);
}

function klarna(price) {
  return `<p class="crs_klarna">or 3 interest-free payments of <b>£${(
    price / 3
  ).toFixed(
    2
  )}</b> with <img src="${dir}klarna.png" alt="klarna"> <a href="#">Learn More</a></p>`;
}

function setStickyBtn(price) {
  return `<button type="button" class="crs_sticky_btn d-flex align-items-center justify-content-center active"><b>add to basket</b>  <span class="crs_pr">${price}</span></button>`;
}

function scrollTo(target) {
  const top =
    document
      .querySelector(`#${target.href.split("#")[1]}`)
      .getBoundingClientRect().top - 40;

  seamless.polyfill();
  seamless.scrollBy(window, { behavior: "smooth", top: top, left: 0 });
}

function formatDate(days) {
  const today = new Date();
  const deliveryDate = new Date(today);
  let addedBusinessDays = 0;

  while (addedBusinessDays < days) {
    // Move to the next day
    deliveryDate.setDate(deliveryDate.getDate() + 1);

    // Check if the current day is a weekend day (Saturday or Sunday)
    if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) {
      addedBusinessDays++;
    }
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const deliveryDayOfWeek = daysOfWeek[deliveryDate.getDay()];
  const deliveryMonth = months[deliveryDate.getMonth()];
  const deliveryDay = deliveryDate.getDate();

  const formattedDate = `${deliveryDay} ${deliveryMonth}`;

  return formattedDate;
}

// Function to handle the observed mutations on the cart element.
function handleCartMutation(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const targetElement = mutation.target;
      if (targetElement.classList.contains("active")) {
        let countProduct = 0;
        targetElement
          .querySelectorAll(
            '.minicart-items li .option-wrapper > .values [data-bind="text: qty"]'
          )
          .forEach((item) => {
            countProduct += +item.innerText;
            console.log(+item.innerText);
          });
        console.log(countProduct);
        targetElement.querySelector(".minicart-title span").innerHTML =
          countProduct;

        targetElement
          .querySelectorAll(".minicart-items .action.delete")
          .forEach((item) => {
            item.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5584 4.35842C16.2167 4.22508 14.875 4.12508 13.525 4.05008V4.04175L13.3417 2.95841C13.2167 2.19175 13.0334 1.04175 11.0834 1.04175H8.90005C6.95838 1.04175 6.77505 2.14175 6.64172 2.95008L6.46672 4.01675C5.69172 4.06675 4.91672 4.11675 4.14172 4.19175L2.44172 4.35842C2.09172 4.39175 1.84172 4.70008 1.87505 5.04175C1.90838 5.38342 2.20838 5.63342 2.55838 5.60008L4.25838 5.43342C8.62505 5.00008 13.0251 5.16675 17.4417 5.60842C17.4667 5.60842 17.4834 5.60842 17.5084 5.60842C17.8251 5.60842 18.1 5.36675 18.1334 5.04175C18.1584 4.70008 17.9084 4.39175 17.5584 4.35842Z" fill="#333333"/>
                    <path d="M16.0254 6.78325C15.8254 6.57492 15.5504 6.45825 15.2671 6.45825H4.73378C4.45044 6.45825 4.16711 6.57492 3.97544 6.78325C3.78378 6.99159 3.67544 7.27492 3.69211 7.56659L4.20878 16.1166C4.30044 17.3833 4.41711 18.9666 7.32544 18.9666H12.6754C15.5838 18.9666 15.7004 17.3916 15.7921 16.1166L16.3088 7.57492C16.3254 7.27492 16.2171 6.99159 16.0254 6.78325ZM11.3838 14.7916H8.60878C8.26711 14.7916 7.98378 14.5083 7.98378 14.1666C7.98378 13.8249 8.26711 13.5416 8.60878 13.5416H11.3838C11.7254 13.5416 12.0088 13.8249 12.0088 14.1666C12.0088 14.5083 11.7254 14.7916 11.3838 14.7916ZM12.0838 11.4583H7.91711C7.57544 11.4583 7.29211 11.1749 7.29211 10.8333C7.29211 10.4916 7.57544 10.2083 7.91711 10.2083H12.0838C12.4254 10.2083 12.7088 10.4916 12.7088 10.8333C12.7088 11.1749 12.4254 11.4583 12.0838 11.4583Z" fill="#333333"/>
                </svg>`;
          });

        if (
          targetElement.querySelector(".minicart-title span").innerHTML == "0"
        )
          return;

        let price = targetElement.querySelector(
          ".subtotal .amount.price-container .price"
        ).innerText;

        if (!targetElement.querySelector(".crs_cart_subtotal")) {
          targetElement
            .querySelector(".block-content > .actions > .primary")
            .insertAdjacentHTML(
              "beforebegin",
              `
                <div class="crs_cart_subtotal">
                    <div class="d-flex justify-content-between align-items-center crs_sub">
                        <p><b>Subtotal</b> </p>
                        <p class="pr"><b> ${price}</b></p>
                    </div>
                </div>`
            );

          targetElement
            .querySelector(".block-content > .actions")
            .insertAdjacentHTML("beforebegin", highlight);
        }

        if (!targetElement.querySelector(".crs_klarna")) {
          targetElement
            .querySelector(".subtotal")
            .insertAdjacentHTML(
              "afterend",
              klarna(+price.replace(price[0], ""))
            );
          document
            .querySelector(".crs_klarna a")
            .addEventListener("click", () => {
              pushDataLayer([
                "exp_inc_soc_trus_lin_cart_learn",
                "Learn More",
                "Link",
                "Cart",
              ]);
            });
        }
        targetElement.querySelector(".crs_sub .pr b").innerHTML = price;

        targetElement.querySelector(
          ".block-content > .actions > .primary .paypal input"
        ).src = dir + "paypal-logo.svg";

        const waitForDiscount = setInterval(() => {
          if (
            document.querySelector("body > div > button.needsclick") &&
            document
              .querySelector("body > div > button.needsclick")
              .innerText.includes("View Today’s Offer") &&
            !targetElement.querySelector(".crs_discount")
          ) {
            clearInterval(waitForDiscount);

            targetElement
              .querySelector(".minicart-items")
              .insertAdjacentHTML("afterend", getDiscount);

            document
              .querySelector(".crs_discount")
              .addEventListener("click", () => {
                pushDataLayer([
                  "exp_inc_soc_trus_lin_cart_discou",
                  "Get  discount",
                  "Link",
                  "Cart",
                ]);
              });
          }
        });
      }
    }
  }
}

function start() {
  const waitForBody = setInterval(() => {
    if (document.body) {
      clearInterval(waitForBody);

      //polyfill
      let scriptScroll = document.createElement("script");
      scriptScroll.src =
        "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest";
      document.head.appendChild(scriptScroll);

      document.body.insertAdjacentHTML("afterbegin", styleBase);
      document.body.insertAdjacentHTML("afterbegin", styleCart);

      // PDP
      if (location.href.includes("/products/")) {
        document.body.insertAdjacentHTML("afterbegin", stylePDP);

        waitForElement(".page-layout-1column .product.media").then((el) => {
          el.insertAdjacentHTML("afterbegin", topBadge);
          document
            .querySelector(".crs_absolute .crs_warranty")
            .addEventListener("click", () => {
              document
                .querySelectorAll(".crs_popup")[0]
                .classList.add("active");

              pushDataLayer([
                "exp_inc_soc_trus_but_pdp_yeawar",
                "25-Year Warranty",
                "Button",
                "PDP Under Header",
              ]);
            });

          document
            .querySelector(".crs_absolute .crs_wishlist")
            .addEventListener("click", (e) => {
              e.preventDefault();
              document
                .querySelector(".product-addto-links .ajax_wishlist")
                .click();
              pushDataLayer([
                "exp_inc_soc_trus_but_pdp_savwish",
                "Save to wishlist",
                "Button",
                "PDP Under Header",
              ]);
            });
        });

        waitForElement(".product-reviews-summary").then((el) => {
          document.querySelector(".page-title-wrapper").after(el);
        });
        waitForElement(".product-info-stock-and-review").then((el) => {
          el.children[0].before(document.querySelector(".product-info-price"));

          el.insertAdjacentHTML(
            "afterend",
            klarna(
              document
                .querySelector(".product-info-price [data-price-amount]")
                .getAttribute("data-price-amount")
            )
          );

          document
            .querySelector(".crs_klarna a")
            .addEventListener("click", () => {
              pushDataLayer([
                "exp_inc_soc_trus_lin_pdpunpri_leamor",
                "Learn More",
                "Link",
                "PDP Under the price",
              ]);
            });

          const waitForDiscount = setInterval(() => {
            if (
              document.querySelector("body > div > button.needsclick") &&
              document
                .querySelector("body > div > button.needsclick")
                .innerText.includes("View Today’s Offer")
            ) {
              clearInterval(waitForDiscount);

              document
                .querySelector(".crs_klarna")
                .insertAdjacentHTML("afterend", getDiscount);

              document
                .querySelector(".crs_discount")
                .addEventListener("click", () => {
                  document
                    .querySelector("body > div > button.needsclick")
                    .click();
                  pushDataLayer([
                    "exp_inc_soc_trus_lin_pdpunpri_getdis",
                    "Get Discount",
                    "Link",
                    "PDP Under the price",
                  ]);
                });
            }
          });
        });

        waitForElement(".product-modal-options-btn-wrap").then((el) => {
          el.querySelectorAll("li").forEach((item) => {
            let icon = item.innerText.includes("GIFT WRAP")
              ? `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_154_2190)">
                    <path d="M2.0625 11.6743V19.9243C2.0625 20.6833 2.65181 21.2993 3.375 21.2993H9.9375V11.6743H2.0625Z" fill="#A11A17"/>
                    <path d="M20.4375 6.17422H16.2848C16.5827 5.96109 16.8386 5.74934 17.0171 5.55959C18.0763 4.44447 18.0763 2.62947 17.0171 1.51434C15.9881 0.42809 14.1953 0.43084 13.1676 1.51434C12.5979 2.11247 11.0886 4.54759 11.2973 6.17422H11.2028C11.4101 4.54759 9.90075 2.11247 9.33244 1.51434C8.30344 0.43084 6.51056 0.43084 5.48287 1.51434C4.425 2.62947 4.425 4.44447 5.48156 5.55959C5.66138 5.74934 5.91731 5.96109 6.21525 6.17422H2.0625C1.33931 6.17422 0.75 6.79159 0.75 7.54921V9.61172C0.75 9.99121 1.044 10.2992 1.40625 10.2992H9.9375V7.54921H12.5625V10.2992H21.0938C21.456 10.2992 21.75 9.99121 21.75 9.61172V7.54921C21.75 6.79159 21.162 6.17422 20.4375 6.17422ZM9.86006 6.12884C9.86006 6.12884 9.80494 6.17422 9.61725 6.17422C8.71031 6.17422 6.97913 5.18697 6.41344 4.59022C5.8635 4.00997 5.8635 3.06397 6.41344 2.48372C6.67987 2.20322 7.03294 2.04922 7.40831 2.04922C7.78237 2.04922 8.13544 2.20322 8.40188 2.48372C9.2865 3.41597 10.1659 5.79747 9.86006 6.12884ZM12.8814 6.17422C12.6951 6.17422 12.6399 6.13022 12.6399 6.12884C12.3341 5.79747 13.2135 3.41597 14.0981 2.48372C14.6271 1.92409 15.5524 1.92134 16.0866 2.48372C16.6378 3.06397 16.6378 4.00997 16.0866 4.59022C15.5209 5.18697 13.7897 6.17422 12.8814 6.17422Z" fill="#A11A17"/>
                    <path d="M12.5625 11.6743V21.2993H19.125C19.8495 21.2993 20.4375 20.6833 20.4375 19.9243V11.6743H12.5625Z" fill="#A11A17"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_154_2190">
                    <rect width="21" height="22" fill="white" transform="translate(0.75)"/>
                    </clipPath>
                    </defs>
                </svg>`
              : `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.2609 5.235L13.7226 1.462C12.6549 0.846 11.3341 0.846 10.2554 1.462L3.72812 5.235C2.66043 5.851 2 6.995 2 8.238V15.762C2 16.994 2.66043 18.138 3.72812 18.765L10.2664 22.538C11.3341 23.154 12.6549 23.154 13.7336 22.538L20.2719 18.765C21.3396 18.149 22 17.005 22 15.762V8.238C21.989 6.995 21.3286 5.862 20.2609 5.235ZM11.9945 6.874C13.4144 6.874 14.5592 8.018 14.5592 9.437C14.5592 10.856 13.4144 12 11.9945 12C10.5746 12 9.42983 10.856 9.42983 9.437C9.42983 8.029 10.5746 6.874 11.9945 6.874ZM14.9444 17.126H9.04458C8.153 17.126 7.63566 16.136 8.13099 15.399C8.87947 14.288 10.3324 13.54 11.9945 13.54C13.6566 13.54 15.1095 14.288 15.858 15.399C16.3533 16.125 15.825 17.126 14.9444 17.126Z" fill="#A11A17"/>
                </svg>`;

            item
              .querySelector("a.product-modal-options-btn")
              .insertAdjacentHTML("afterbegin", icon);

            item.querySelector(".price-notice").insertAdjacentHTML(
              "afterend",
              `
                <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10.6C8.54051 10.6 10.6 8.54051 10.6 6C10.6 3.45949 8.54051 1.4 6 1.4C3.45949 1.4 1.4 3.45949 1.4 6C1.4 8.54051 3.45949 10.6 6 10.6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z" fill="#646464"/>
                    <path d="M7.04236 2.8493C7.04236 2.9823 7.01436 3.1083 6.95836 3.2273C6.90936 3.3393 6.83936 3.4373 6.74836 3.5213C6.66436 3.6053 6.55936 3.6718 6.43336 3.7208C6.31436 3.7698 6.18836 3.7943 6.05536 3.7943C5.77536 3.7943 5.54086 3.7033 5.35186 3.5213C5.16286 3.3323 5.06836 3.1083 5.06836 2.8493C5.06836 2.7233 5.09286 2.6043 5.14186 2.4923C5.19086 2.3733 5.26086 2.2718 5.35186 2.1878C5.44286 2.1038 5.54786 2.0373 5.66686 1.9883C5.78586 1.9323 5.91536 1.9043 6.05536 1.9043C6.18836 1.9043 6.31436 1.9288 6.43336 1.9778C6.55936 2.0268 6.66436 2.0933 6.74836 2.1773C6.83936 2.2613 6.90936 2.3628 6.95836 2.4818C7.01436 2.5938 7.04236 2.7163 7.04236 2.8493ZM5.19436 9.7478V4.5188H6.91636V9.7478H5.19436Z" fill="#646464"/>
                </svg>`
            );

            item.querySelector("a.hide-remove-link").innerHTML = ` 
                <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 34368">
                        <rect id="Rectangle 4323" x="0.5" y="1" width="23" height="23" fill="#A11A17" stroke="#A11A17"/>
                        <path id="Vector 167" d="M6 12.5L10 16.5L18 8.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </g>
                </svg>`;

            item.querySelectorAll("a").forEach((link) => {
              link.addEventListener("click", () => {
                if (link.innerText.includes("Add Gift Wrap")) {
                  pushDataLayer([
                    "exp_inc_soc_trus_chec_pdpuncol_gift",
                    "Add Gift Wrap ",
                    "Checkbox ",
                    "PDP Under colour",
                  ]);
                } else if (link.innerText.includes("Add Personalisation")) {
                  pushDataLayer([
                    "exp_inc_soc_trus_chec_pdpuncol_pers",
                    "Add Personalisation ",
                    "Checkbox ",
                    "PDP Under colour",
                  ]);
                }
              });
            });
          });
        });

        waitForElement(
          ".product-options-wrapper .swatch-attribute-options"
        ).then((el) => {
          el.querySelectorAll(".swatch-option").forEach((item) => {
            item.addEventListener("click", (e) => {
              pushDataLayer([
                "exp_inc_soc_trus_icon_pdpundis_choocol",
                item.getAttribute("aria-label") + " - Сhoose the colour",
                "Icone",
                "PDP Under discount",
              ]);
            });
          });
        });

        waitForElement(".product-add-form").then((el) => {
          el.insertAdjacentHTML("afterend", qualityBadge);
          el.insertAdjacentHTML("afterend", delivery);

          document.body.insertAdjacentHTML("beforeend", popupOne);
          document.body.insertAdjacentHTML("beforeend", popupTwo);

          document
            .querySelector(".crs_country")
            .addEventListener("change", (e) => {
              let selectedOption = e.target.options[e.target.selectedIndex];

              document.querySelector(".crs_est b").innerHTML =
                formatDate(selectedOption.dataset.days.split("-")[0]) +
                " - " +
                formatDate(selectedOption.dataset.days.split("-")[1]);

              if (e.target.value == "GB") {
                document.querySelector(".crs_uk_delivery").hidden = false;
              } else {
                document.querySelector(".crs_uk_delivery").hidden = true;
              }
            });

          document.querySelectorAll(".crs_btn_more").forEach((item, index) => {
            let startTime = 0;

            item.addEventListener("click", (e) => {
              document
                .querySelectorAll(".crs_popup")
                [index].classList.add("active");
              setInterval(() => {
                startTime += 1;
              }, 100);
              if (
                item.previousElementSibling.innerText.includes(
                  "25-Year Warranty"
                )
              ) {
                pushDataLayer([
                  "exp_inc_soc_trus_but_pdpwarra_learn",
                  "Learn More",
                  "Button",
                  "PDP Under Block delivery 25-Year warranty",
                ]);
              } else {
                pushDataLayer([
                  "exp_inc_soc_trus_but_pdpriskfree_learn",
                  "Learn More",
                  "Button",
                  "PDP Under Block delivery 60-day risk-free return",
                ]);
              }
            });
            document
              .querySelectorAll(".crs_popup .crs_popup_close")
              [index].addEventListener("click", () => {
                document
                  .querySelectorAll(".crs_popup")
                  [index].classList.remove("active");

                const focusTimeMillis = Date.now() - startTime;
                const focusTimeSeconds = focusTimeMillis / 1000;

                if (index == 0) {
                  pushDataLayer([
                    "exp_inc_soc_trus_vis_popupwarr_focu",
                    focusTimeSeconds,
                    "Visibility ",
                    "Pop up 25-Year Warranty: A Promise of Timeless Quality",
                  ]);
                } else {
                  pushDataLayer([
                    "exp_inc_soc_trus_vis_popupriskfree_focu",
                    focusTimeSeconds,
                    "Visibility ",
                    "Pop up 60-day risk-free return",
                  ]);
                }
                startTime = 0;
              });
            document
              .querySelectorAll(".crs_popup")
              [index].addEventListener("click", (e) => {
                if (e.target.className == "crs_popup active") {
                  e.target.classList.remove("active");
                }
              });
          });

          document
            .querySelector(".crs_quality_more")
            .addEventListener("click", (e) => {
              e.preventDefault();
              scrollTo(e.target);
              pushDataLayer([
                "exp_inc_soc_trus_link_pdphand_learn",
                "Learn More",
                "Link",
                "PDP Handcrafted leather made in italy",
              ]);
            });

          handleVisibility(document.querySelector(".crs_shipto"), [
            "exp_inc_soc_trus_vis_pdpunbask_focu",
            " {{focusTime}} ",
            "Visibility ",
            "PDP Under Add to Basket",
          ]);

          document
            .querySelector(".crs_country")
            .addEventListener("click", () => {
              pushDataLayer(
                "exp_inc_soc_trus_acc_pdpdeli_click",
                "Click",
                "Accordion",
                "PDP You get FREE EXPRESS UK Delivery"
              );
            });
        });
        waitForElement(".msb-product-details-col-left").then((el) => {
          el.insertAdjacentHTML(
            "beforebegin",
            `<h3 class="crs_about">About this product</h3>`
          );
        });

        waitForElement(
          ".product-info-main .price-box .price-wrapper .price"
        ).then((el) => {
          if (media) {
            document.body.insertAdjacentHTML(
              "beforeend",
              setStickyBtn(el.innerText)
            );

            let stickyBtn = document.querySelector(".crs_sticky_btn");
            let btnAddToCart = document.querySelector(
              ".product-options-bottom"
            );

            let clickAddToCart = false;
            stickyBtn.addEventListener("click", () => {
              clickAddToCart = true;
              document
                .querySelector(
                  ".product-info-main .box-tocart .actions .action.tocart"
                )
                .click();
              pushDataLayer([
                "exp_inc_soc_trus_sticbut_pdp_bask",
                "Add to basket",
                "Sticky button ",
                "PDP",
              ]);
            });

            document
              .querySelector(".product-info-main .box-tocart .action.tocart")
              .addEventListener("click", (e) => {
                if (clickAddToCart == false) {
                  pushDataLayer([
                    "exp_inc_soc_trus_but_pdpunchec_bask",
                    "Add to Basket",
                    "Button",
                    "PDP Under the checkboxes",
                  ]);
                } else {
                  clickAddToCart = false;
                }
              });

            function handleScroll() {
              let btnRect = btnAddToCart.getBoundingClientRect();

              if (btnRect.top >= 0 && btnRect.bottom <= window.innerHeight) {
                stickyBtn.classList.remove("active");
              } else {
                stickyBtn.classList.add("active");
              }
            }

            window.addEventListener("scroll", handleScroll);

            handleScroll();
          }
        });
      }

      if (location.href.includes("/checkout/")) {
        document.body.insertAdjacentHTML(
          "afterend",
          `<style>
        .checkout-header-container {
            margin-bottom: 20px!important;
        }
        .crs_info {
            max-width: 650px;
        }
        </style>`
        );
        waitForElement(".checkout-header-container").then((el) => {
          el.insertAdjacentHTML(
            "afterend",
            `
            <div class="px-4 crs_info mx-auto">
                <div class="crs_trustpilot">
                    <a href=" https://www.trustpilot.com/review/www.maxwellscottbags.com" class="d-flex justify-content-center align-items-center" target="_blank" onclick="pushDataLayer(['exp_inc_soc_trus_but_checkrating_trust', 'Trustpilot ', 'Button', 'Checkout Give us a rating'])">
                        ${trustpilot}
                    </a>
                </div>
                ${highlight}
            </div>`
          );
        });
      }
      waitForElement(".header-right-block > ul > .minicart-wrapper").then(
        (cartElement) => {
          cartElement.querySelector(".minicart-title").innerHTML =
            "Shopping Bag (<span>0</span>)";

          cartElement
            .querySelector(".block-minicart")
            .addEventListener("click", (e) => {
              if (e.target.classList.contains("block-minicart")) {
                cartElement.classList.remove("active");
              }
            });
          cartElement
            .querySelector("#top-cart-btn-checkout")
            .addEventListener("click", (e) => {
              pushDataLayer([
                "exp_inc_soc_trus_but_car_checkout",
                "Proceed to checkout",
                "Button",
                "Cart",
              ]);
            });
          // Create a Mutation Observer to watch for changes in the cart.
          const cartObserver = new MutationObserver(handleCartMutation);

          // Define the options for the Mutation Observer.
          const observerOptions = {
            attributes: true, // Watch for changes to the attributes of the cart.
            attributeFilter: ["class"], // Only watch for changes to the "class" attribute.
          };

          // Start observing the cart element.
          cartObserver.observe(cartElement, observerOptions);
        }
      );

      waitForElement(".mobile-basket-block").then((cartElement) => {
        cartElement.querySelector(".minicart-title").innerHTML =
          "Shopping Bag (<span>0</span>)";

        cartElement
          .querySelector("#top-cart-btn-checkout")
          .addEventListener("click", (e) => {
            pushDataLayer([
              "exp_inc_soc_trus_but_car_checkout",
              "Proceed to checkout",
              "Button",
              "Cart",
            ]);
          });
        // Create a Mutation Observer to watch for changes in the cart.
        const cartObserver = new MutationObserver(handleCartMutation);

        // Define the options for the Mutation Observer.
        const observerOptions = {
          attributes: true, // Watch for changes to the attributes of the cart.
          attributeFilter: ["class"], // Only watch for changes to the "class" attribute.
        };

        // Start observing the cart element.
        cartObserver.observe(cartElement, observerOptions);
      });
    }
  }, 0);
}
//https://www.maxwellscottbags.com/rest/default/V1/guest-carts/FJWCeu7peZgfWDcl6DyPCtmxd7su6zLA/coupons/25OFF

//https://www.maxwellscottbags.com/rest/default/V1/carts/mine/coupons/25OFF

//https://www.maxwellscottbags.com/rest/default/V1/guest-carts/onAlsUb4dbNo5qRiSxzr06RFwcrUghPd/coupons/25OFF

// fetch('https://www.maxwellscottbags.com/rest/default/V1/guest-carts/onAlsUb4dbNo5qRiSxzr06RFwcrUghPd/coupons/25OFF', {

//     method: 'PUT'
// }).then(data => console.log(data))
