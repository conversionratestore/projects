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
    text-align: left;
    max-width: calc(100% - 40px);
} 
.crs_discount[hidden] {
  display: none!important;
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
        padding: 0 14px 5px 20px;
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
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
}
.crs_warranty svg {
    margin-right: 6px;
}
.crs_wishlist svg:last-child {
  display: none;
}
.crs_wishlist:focus svg:first-child {
  display: none;
}
.crs_wishlist:focus svg:last-child {
  display: block;
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
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px!important;
    margin-bottom: 4px;
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
    font-family: Arial;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 1px;
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
    font-size: 14px;
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
    padding-top: 12px;
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
.product-modal-options-btn-wrap .product-modal-options-btn .ml-2 > svg {
    margin-top: -12px;
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
    margin-bottom: 30px;
}
.crs_delivery li {
    padding: 10px;
    margin: 0;
}
.crs_delivery li:first-child {
    padding: 14px 10px;
}
.crs_delivery li:first-child > div:last-child {
  padding-top: 2px;
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
    background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none"%3E%3Cg clip-path="url(%23clip0_571_1990)"%3E%3Cpath d="M7.1101 5.15703L2.16009 0.207031L0.746094 1.62103L7.1101 7.98503L13.4741 1.62103L12.0601 0.207033L7.1101 5.15703Z" fill="%23333333"%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3CclipPath id="clip0_571_1990"%3E%3Crect width="14" height="8" fill="white"%3E%3C/rect%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E') no-repeat right center / 14px 8px;
}
.crs_country,
.mobile-basket-block__content .shipping-costs .fields .field-country select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

}
.mobile-basket-block__content .shipping-costs .fields .field-country select {
  background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none"%3E%3Cpath d="M1 0.5L6 5.5L11 0.5" stroke="%23333333" stroke-width="1.4"%3E%3C/path%3E%3C/svg%3E') no-repeat right 12px center / 10px 8px;
}
.crs_shipto > p {
    margin: 0 4px 0 0;
}
.crs_btn_more {
    color: var(--White, #FFF);
    text-align: center;
    font-family: Arial;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 150% */
    text-transform: uppercase;
    padding: 5px 10px;
    border: 1px solid var(--Gold, #B68B51);
    background: var(--Gold, #B68B51);
    letter-spacing: 2px;
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
    background: rgba(255, 255, 255, 0.85);
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
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
}
.crs_popup.active .container {
    transform: translateY(0);
}
.crs_popup img {
    width: 100%;
    height: 100px;
    display: block;
}
.crs_popup_close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background: transparent;
    border: none;
    padding: 10px 18px;
}
.crs_popup_content {
    position: relative;
    padding: 25px 20px 12px;
}
.crs_popup_circle {
    left: 20px;
    top: 0;
    transform: translateY(-50%);
    width: calc(100% - 40px);
    height: 45px;
    display: flex;
}
.crs_popup h3 {
    color: var(--Black, #333);
    text-align: center;
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 157.143% */
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 14px 0;
}
.crs_popup ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.crs_popup ul li {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 20px;
}
.crs_quality {
    background: #EBE0D0;
    padding: 14px 8px;
}
.crs_quality h4 {
    margin: 6px 0 10px;
    font-size: 20px;
    font-family: 'adobe-garamond-pro', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
}
.crs_quality h4 span {
  font-size: 10px;
  line-height: 18px; 
  display: block;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.crs_quality_more {
    color: var(--Black, #333);
    font-family: Arial;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 220% */
    letter-spacing: 1.5px;
    text-decoration-line: underline;
    text-transform: uppercase;
}
.product-info-main .msb-product-details-col-left {
    border-width: 1px;
}
.crs_about {
    color: var(--Black, #333);
    font-family: 'adobe-garamond-pro', sans-serif;
    order: 5;
    padding: 30px 20px 16px;
    margin: 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; 
}
.product-info-main .msb-product-details-col-left .features-wrapper {
    padding: 20px 0 10px;
    margin-top: 0;
}
.product-info-main .msb-product-details-col-left {
    padding: 0 20px;
}
.title-v3 {
    font-size: 24px;
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
.crs_sticky {
    position: fixed;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: all 0.2s ease;
    transform: translateY(100px);
    z-index: 9;
    width: 100%;
}
.crs_sticky_btn {
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
.crs_sticky.active {
    transform: translateY(0);
    opacity: 1;
}
.features-static-link-block>a, .features-static-link-block>span {
  padding: 17px 0;
}
#wi-country-selector-button {
  z-index: 8;
}
@media (max-width: 768px) {
    .mobile-basket-block__content .product-item-details .product.options .option-wrapper .label {
      padding-right: 0;
    }
    .mobile-basket-block__content .product-item-details .product.options .option-wrapper .label:after {
      content: ':';
      padding: 0 5px 0 0;
    }
    body {
      padding-bottom: 65px;
    }
    .product-info-main .product-reviews-summary {
        order: 1;
    }

    .product-info-main .page-title-wrapper{
        padding: 0 20px;
    }
}
@media (min-width: 769px) {
    #wi-country-selector-button {
      padding: 0px 0 115px 0!important;
    }
    .column.main .block .title {
      margin: 100px 0 0 0;
    }
    .products {
      margin: 0px auto!important;
    }
    .crs_sticky_btn {
      max-width: 335px;
    }
    .crs_sticky {
      background: #FFF;
      box-shadow: 0px -3px 6px 0px rgba(0, 0, 0, 0.10);
    }
    .crs_sticky > div {
      width: 100%;
      margin: 0 auto;
      max-width: 842px;
      padding: 16px;
    }
    .crs_sticky h2 {
      color: var(--Untitled-Black, #333);
      font-family: 'adobe-garamond-pro', serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; 
      margin: 0;
    }
    .crs_sticky h2 span {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      display: block;
    }
    .title-v3 ,
    .msb-reviews-static-block .block-title,
    .column.main .block .title {
      font-size: 32px;
      line-height: 40px;
    }
    .product-middleblock__title {
      font-size: 32px;
      line-height: 40px;
      margin: 10px 0 26px 0;
    }
    .product-middleblock__p {
      line-height: 24px;
    }
    .product-middleblock-wrapper > div > div {
      align-items: center;
    }
    .product-middleblock-wrapper .product-middleblock .product-middleblock__description {
      max-width: 580px;
      padding: 0 20px;
      margin: 0 auto;
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
        text-align: left;
        padding-left: 90px;
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
        max-width: 690px;
    }
    .crs_popup img {
        width: 50%;
        height: auto;
    }
    .crs_popup_circle {
        transform: none;
        width: 100%;
        height: 49px;
        left: 0;
        top: 8px;
    }
    .crs_popup_content {
        padding: 57px 32.5px 30px;
        width: 50%;
    }
    .crs_popup h3 {
        margin-bottom: 20px;
    }
    .crs_delivery li, 
    .crs_delivery li:first-child {
      padding-left: 12px;
      padding-right: 12px;
    }
    .header-right-block .nav-tabs .nav-item {
      z-index: 99999999;
    }
}
</style>`;

const styleCart = `
<style>
.crs_fixed {
  overflow: hidden!important;
}
.minicart-wrapper .block-minicart  {
  height: 100vh!important;
}
.mobile-basket-block,
.minicart-wrapper .block-minicart {
    height: 100vh;
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
    padding: 0!important;
    display: flex!important;
    justify-content: flex-end;
    max-width: 100%! important;
    width: 100%!important;
}
.mobile-basket-block {
    backdrop-filter: blur(4px);
}
.mobile-basket-block.active,
.minicart-wrapper.active .block-minicart {
    max-width: 100%;
    opacity: 1;
    pointer-events: auto;
}
.mobile-basket-block__content,
#minicart-content-wrapper {
    background: #fff;
    margin: 0;
    height: 100%;
    width: calc(100% - 25px)!important;
    padding: 0;
    transform: translateX(100%)!important;
    transition: all 0.2s ease;
    overflow-x: hidden;
    overflow-y: auto;
}
.mobile-basket-block.active .mobile-basket-block__content,
.minicart-wrapper.active .block-minicart #minicart-content-wrapper {
    transform: translateX(0)!important;
}
#minicart-content-wrapper  {
    max-width: 350px;
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
    line-height: 24px;
    margin: 0;
}
.product-item-details .product .options.list,
.product-item-details .product .options.list .label {
    color: #646464;
    font-size: 14px;
}
.price-including-tax>.minicart-price .price {
    font-size: 16px!important;
    font-family: 'adobe-garamond-pro', sans-serif;
    line-height: 24px;
}
.minicart-items-wrapper {
    height: auto!important;
    max-height: max-content;
    overflow: visible;
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
.block-content .crs_discount {
    margin: 18px 0 0;
}
.mobile-basket-block__content .subtotal,
.block-minicart .subtotal {
    padding-bottom: 13px;
    border: none;
    font-size: 16px;
}
.block-minicart .subtotal {
  padding-top: 18px;
}
.header-right-block .minicart-wrapper .block-content .crs_discount {
  margin-top: 0;
}
.header-right-block .minicart-wrapper .crs_discount_row {
  padding-top: 0;
}
.header-right-block .minicart-wrapper .crs_regular {
  padding: 0 0 18px 0;
}
.mobile-basket-block__content .crs_klarna,
.block-minicart .crs_klarna {
    padding: 0;
}
.shipping-costs .shipping-costs__control {
  display: none!important;
}
.shipping-costs .shipping-costs-desc {
    padding: 12px 0;
    border-top: 1px dashed #CCC;
}
.shipping-costs .shipping-costs-desc {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.shipping-costs .shipping-costs-desc span {
  text-decoration: underline;
}
.shipping-costs .shipping-costs-desc:after {
  content: '+';
  color: var(--Untitled-Black, #333);
  text-align: right;
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-left: auto;
  display: block;
}
.shipping-costs.active .shipping-costs-desc:after  {
  content: '–';
}
.shipping-costs + .extra,
.shipping-costs > .fields {
  display: none;
}
.shipping-costs.active > .fields,
.shipping-costs.active + .extra {
  display: block;
}
.mobile-basket-block__content > .block-content > .actions,
.minicart-wrapper .block-minicart .block-content > .actions {
    margin-top: auto;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 12px 16px;
    background: var(--colors-wight, #FFF);
    z-index: 3;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.16);
    display: grid;
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
.minicart-wrapper .block-minicart .block-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    padding: 14px 16px 196px;
}
.minicart-wrapper .product .actions {
    position: absolute;
    right: 0;
    bottom: 3px!important;
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
    font-size: 12px;
    text-transform: capitalize;
}
.crs_highlight > div {
    background: #DDC9B0;
    padding: 6px;
    width: calc(50% - 4px);
}
.crs_highlight > div:first-child {
    margin-right: 8px;
}
.minicart-title {
    color: #212121;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    letter-spacing: 1px;
}
.minicart-wrapper .action.close {
    top: 3px;
}
.crs_discount_row {
  display: none;
  border-bottom: 1px dashed #CCC;
  padding: 18px 0;
  position: relative;
}
.crs_discount_row.crs_error:before {
  content: "The voucher code isn't valid. Verify the code and try again.";
  position: absolute;
  bottom: 0;
  left: 0;
  color: red;
  font-size: 12px;
}
.crs_discount_row.active {
  display: flex;
}
.crs_discount_row input {
  border: 1px solid var(--Dark-gray, #646464);
  background: var(--White, #FFF);
  padding: 8px 12px;
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  width: calc(100% - 118px);
  margin-right: 8px;
  height: auto;
}
.crs_discount_row button {
  width: 110px;
  color: var(--White, #FFF);
  text-align: center;
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
  letter-spacing: 1.6px;
  text-transform: uppercase;
  background: var(--untitled-gold, #B68B51);
  padding: 10px;
}
.crs_regular {
  padding-top: 18px;
  border-bottom: 1px dashed #CCCCCC;
}
.crs_regular b {
  color: var(--Black, #333);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.crs_regular b:last-child {
  letter-spacing: 1px;
}
.crs_regular p {
  color: var(--Red, #A11A17);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.crs_regular p:first-child {
  margin-bottom: 7px;
}
.block-minicart .subtotal .amount .price-wrapper:first-child .price,
.crs_sub p,
.crs_price_new {
  color: var(--Black, #333);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
  margin-bottom: 0;
}
.crs_sub p:not(.pr) {
  letter-spacing: initial;
  margin: 0;
}
.subtotal .amount.crs_change .price,
.pr_old {
  color: #ACACAC!important;
  text-decoration-line: line-through;
  margin-right: 5px;
}
.crs_saved {
  color: var(--Red, #A11A17);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; 
  margin: -6px 0 10px;
  text-align: right;
  order: 1;
}

.block-content>.actions>.primary {
  order: 1;
}
.crs_cart_subtotal {
  padding-bottom: 10px;
}
.crs_klarna+.subtotal {
  display: none;
}
.modal-slide._show, .modal-popup._show {
  z-index: 99999999!important;
}
</style>`;

const dataIcons = {
  warrantyIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
      <g clip-path="url(#clip0_573_9766)">
        <path d="M24.1 13.0001C24.1 11.8001 22.7 10.8001 22.4 9.80011C22 8.70011 22.6 7.10011 21.9 6.20011C21.2 5.30011 19.6 5.30011 18.6 4.60011C17.7 3.90011 17.2 2.30011 16.1 2.00011C15 1.60011 13.7 2.50011 12.5 2.50011C11.3 2.50011 10 1.50011 8.9 1.90011C7.8 2.30011 7.3 3.90011 6.4 4.50011C5.4 5.20011 3.8 5.20011 3.1 6.20011C2.4 7.10011 2.9 8.70011 2.6 9.80011C2.3 10.9001 0.900002 11.8001 0.900002 13.0001C0.900002 14.2001 2.3 15.2001 2.6 16.2001C3 17.3001 2.4 18.9001 3.1 19.8001C3.8 20.7001 5.4 20.7001 6.4 21.4001C7.3 22.1001 7.8 23.7001 8.9 24.0001C10 24.3001 11.3 23.4001 12.5 23.4001C13.7 23.4001 15 24.4001 16.1 24.0001C17.2 23.6001 17.7 22.1001 18.6 21.4001C19.5 20.7001 21.2 20.7001 21.9 19.8001C22.6 18.9001 22.1 17.3001 22.4 16.2001C22.8 15.2001 24.1 14.2001 24.1 13.0001ZM12.5 22.0001C7.5 22.0001 3.5 18.0001 3.5 13.0001C3.5 8.00011 7.5 4.00011 12.5 4.00011C17.5 4.00011 21.5 8.00011 21.5 13.0001C21.5 18.0001 17.5 22.0001 12.5 22.0001Z" fill="#B68B52"/>
        <path d="M18.2 7.2999C16.7 5.7999 14.7 4.8999 12.5 4.8999C10.3 4.8999 8.29999 5.7999 6.79999 7.2999C5.29999 8.7999 4.39999 10.7999 4.39999 12.9999C4.39999 15.1999 5.19999 17.1999 6.79999 18.6999C8.29999 20.1999 10.3 21.0999 12.5 21.0999C14.7 21.0999 16.7 20.2999 18.2 18.6999C19.7 17.1999 20.6 15.1999 20.6 12.9999C20.6 10.7999 19.7 8.7999 18.2 7.2999Z" fill="#B68B52"/>
        <path d="M8 15.6003V14.9003C8.8 14.3003 9.4 13.8003 9.9 13.4003C10.6 12.8003 10.7 12.4003 10.7 12.0003C10.7 11.5003 10.3 11.1003 9.7 11.1003C9.1 11.1003 8.6 11.6003 8.7 12.3003H7.8C7.7 11.2003 8.4 10.3003 9.7 10.3003C10.9 10.3003 11.6 11.1003 11.6 12.0003C11.6 12.5003 11.4 13.1003 10.8 13.7003C10.5 14.1003 10 14.4003 9.3 14.9003H11.7V15.7003H8V15.6003Z" fill="white"/>
        <path d="M13.6 10.4004H16.9V11.2004H14.3L14.2 12.4004C14.5 12.2004 14.9 12.0004 15.3 12.0004C16.2 12.0004 17.1 12.7004 17.1 13.8004C17.1 14.9004 16.2 15.7004 15.1 15.7004C14 15.7004 13.4 15.1004 13.1 14.5004L13.9 14.2004C14.1 14.6004 14.5 14.9004 15 14.9004C15.7 14.9004 16.1 14.4004 16.1 13.8004C16.1 13.2004 15.6 12.7004 15 12.7004C14.6 12.7004 14.3 12.9004 14 13.1004L13.2 12.9004L13.6 10.4004Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_573_9766">
          <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>`,
  wishlistIcon: `
    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4 2C20.6 2 22.3 3.8 22.3 5.9C22.3 6.9 21.9 7.9 21.2 8.7L12.5 17.4L3.80001 8.7C3.10001 7.9 2.60001 7 2.60001 5.9C2.70001 3.7 4.40001 2 6.60001 2C7.70001 2 8.60001 2.4 9.40001 3.2L11.1 4.9C11.5 5.3 12 5.5 12.5 5.5C13 5.5 13.5 5.3 13.9 4.9L15.6 3.2C16.4 2.4 17.4 2 18.4 2ZM18.4 0C16.8 0 15.3 0.7 14.2 1.7L12.5 3.4L10.8 1.7C9.70001 0.6 8.20001 0 6.60001 0C3.30001 0 0.700012 2.6 0.700012 5.9C0.700012 7.5 1.40001 9 2.40001 10.1L12.5 20.2L22.6 10.1C23.7 9 24.3 7.5 24.3 5.9C24.3 2.6 21.7 0 18.4 0Z" fill="#A11A17"/>
    </svg>`,
  wishlistFullIcon: `
    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.6 10.1L12.5 20.2L2.39995 10.1C1.29995 9 0.699951 7.5 0.699951 5.9C0.699951 2.6 3.29995 0 6.59995 0C8.19995 0 9.69995 0.7 10.8 1.7L12.5 3.4L14.2 1.7C15.3 0.6 16.7999 0 18.4 0C21.6999 0 24.2999 2.6 24.2999 5.9C24.2999 7.5 23.7 9 22.6 10.1Z" fill="#A11A17"/>
    </svg>`,
  discountIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.53 10.8699L20.01 9.34988C19.75 9.08988 19.54 8.57988 19.54 8.21988V6.05988C19.54 5.17988 18.82 4.45988 17.94 4.45988H15.79C15.43 4.45988 14.92 4.24988 14.66 3.98988L13.14 2.46988C12.52 1.84988 11.5 1.84988 10.88 2.46988L9.34 3.98988C9.09 4.24988 8.58 4.45988 8.21 4.45988H6.06C5.18 4.45988 4.46 5.17988 4.46 6.05988V8.20988C4.46 8.56988 4.25 9.07988 3.99 9.33988L2.47 10.8599C1.85 11.4799 1.85 12.4999 2.47 13.1199L3.99 14.6399C4.25 14.8999 4.46 15.4099 4.46 15.7699V17.9199C4.46 18.7999 5.18 19.5199 6.06 19.5199H8.21C8.57 19.5199 9.08 19.7299 9.34 19.9899L10.86 21.5099C11.48 22.1299 12.5 22.1299 13.12 21.5099L14.64 19.9899C14.9 19.7299 15.41 19.5199 15.77 19.5199H17.92C18.8 19.5199 19.52 18.7999 19.52 17.9199V15.7699C19.52 15.4099 19.73 14.8999 19.99 14.6399L21.51 13.1199C22.16 12.5099 22.16 11.4899 21.53 10.8699ZM8 8.99988C8 8.44988 8.45 7.99988 9 7.99988C9.55 7.99988 10 8.44988 10 8.99988C10 9.54988 9.56 9.99988 9 9.99988C8.45 9.99988 8 9.54988 8 8.99988ZM9.53 15.5299C9.38 15.6799 9.19 15.7499 9 15.7499C8.81 15.7499 8.62001 15.6799 8.47001 15.5299C8.18001 15.2399 8.18001 14.7599 8.47001 14.4699L14.47 8.46988C14.76 8.17988 15.24 8.17988 15.53 8.46988C15.82 8.75988 15.82 9.23988 15.53 9.52988L9.53 15.5299ZM15 15.9999C14.44 15.9999 13.99 15.5499 13.99 14.9999C13.99 14.4499 14.44 13.9999 14.99 13.9999C15.54 13.9999 15.99 14.4499 15.99 14.9999C15.99 15.5499 15.55 15.9999 15 15.9999Z" fill="#862B04"/>
    </svg>`,
  giftIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <g clip-path="url(#clip0_573_9737)">
        <path d="M21.9 5.9002H19.3C19.4 5.5002 19.5 5.1002 19.5 4.7002C19.5 2.7002 18 1.2002 16 1.2002C14.7 1.2002 13.6 1.8002 13.1 2.7002L12.5 3.5002L11.9 2.7002C11.3 1.7002 10.3 1.2002 9 1.2002C7 1.2002 5.5 2.7002 5.5 4.7002C5.5 5.1002 5.6 5.5002 5.7 5.9002H3.1C1.8 5.9002 0.699997 7.0002 0.699997 8.3002V21.3002C0.699997 22.6002 1.8 23.7002 3.1 23.7002H22C23.3 23.7002 24.4 22.6002 24.4 21.3002V8.3002C24.3 6.9002 23.2 5.9002 21.9 5.9002ZM16 3.5002C16.7 3.5002 17.2 4.0002 17.2 4.7002C17.2 5.4002 16.7 5.9002 16 5.9002C15.3 5.9002 14.8 5.4002 14.8 4.7002C14.8 4.0002 15.3 3.5002 16 3.5002ZM9 3.5002C9.7 3.5002 10.2 4.0002 10.2 4.7002C10.2 5.4002 9.7 5.9002 9 5.9002C8.3 5.9002 7.8 5.4002 7.8 4.7002C7.8 4.0002 8.3 3.5002 9 3.5002ZM21.9 21.2002H3.1V18.8002H22V21.2002H21.9ZM21.9 15.3002H3.1V8.2002H9.1L6.6 11.5002L8.5 12.9002L11.3 9.1002L12.5 7.4002L13.7 9.1002L16.5 12.9002L18.4 11.5002L15.9 8.2002H21.9V15.3002Z" fill="#A11A17"/>
      </g>
      <defs>
        <clipPath id="clip0_573_9737">
          <rect width="25" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>`,
  personalisationIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <g clip-path="url(#clip0_573_9742)">
        <path d="M10 14.2001H14.9L12.5 7.7001L10 14.2001ZM21.9 0.600098H3C1.7 0.600098 0.599998 1.7001 0.599998 3.0001V21.9001C0.599998 23.2001 1.7 24.3001 3 24.3001H21.9C23.2 24.3001 24.3 23.2001 24.3 21.9001V3.0001C24.3 1.7001 23.2 0.600098 21.9 0.600098ZM17.1 20.1001L15.8 16.5001H9.1L7.8 20.1001H5.3L11.3 4.7001H13.5L19.5 20.1001C19.6 20.1001 17.1 20.1001 17.1 20.1001Z" fill="#A11A17"/>
      </g>
      <defs>
        <clipPath id="clip0_573_9742">
          <rect width="25" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>`,
  infoIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <g clip-path="url(#clip0_573_9755)">
        <path d="M7.49999 14.0999C11.1451 14.0999 14.1 11.145 14.1 7.4999C14.1 3.85482 11.1451 0.899902 7.49999 0.899902C3.85491 0.899902 0.899994 3.85482 0.899994 7.4999C0.899994 11.145 3.85491 14.0999 7.49999 14.0999Z" fill="#333333"/>
        <path d="M6.78 4.38016C6.78 3.96016 7.08 3.66016 7.5 3.66016C7.92 3.66016 8.22 3.96016 8.22 4.38016C8.22 4.80016 7.86 5.10016 7.5 5.10016C7.08 5.10016 6.78 4.80016 6.78 4.38016ZM6.9 5.88016H8.1V11.3402H6.9V5.88016Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_573_9755">
          <rect width="15" height="15" fill="white"/>
        </clipPath>
      </defs>
    </svg>`,
  checkIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <rect x="0.5" y="1" width="23" height="23" fill="#A11A17" stroke="#A11A17"/>
      <path d="M6 12.5L10 16.5L18 8.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
  returnsIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
      <g clip-path="url(#clip0_573_9778)">
        <path d="M20.8734 3H4.03797C2.88608 3 2 3.92827 2 5.02532V20.9747C2 22.0717 2.97468 23 4.12658 23H20.8734C22.0253 23 23 22.0717 23 20.9747V5.02532C22.9114 3.92827 22.0253 3 20.8734 3ZM12.4557 19.5401C9.44304 19.5401 6.96203 17.1772 6.96203 14.308H8.29114C8.29114 16.5021 10.1519 18.1899 12.3671 18.1899C14.6709 18.1899 16.443 16.4177 16.443 14.308C16.443 12.1139 14.5823 10.4262 12.3671 10.4262V13.0422L9.08861 9.75106L12.5443 6.45992V9.07595C15.557 9.07595 18.038 11.4388 18.038 14.308C17.9494 17.1772 15.4684 19.5401 12.4557 19.5401Z" fill="#B68B52"/>
      </g>
      <defs>
        <clipPath id="clip0_573_9778">
          <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
      </defs>
    </svg>`,
  shipIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <g clip-path="url(#clip0_573_9787)">
        <path d="M21.2 8.5998H18V4.2998H2.9C1.7 4.2998 0.699997 5.2998 0.699997 6.4998V18.2998H2.9C2.9 20.0998 4.3 21.4998 6.1 21.4998C7.9 21.4998 9.3 20.0998 9.3 18.2998H15.8C15.8 20.0998 17.2 21.4998 19 21.4998C20.8 21.4998 22.2 20.0998 22.2 18.2998H24.4V12.8998L21.2 8.5998ZM6.1 19.8998C5.2 19.8998 4.5 19.0998 4.5 18.2998C4.5 17.3998 5.3 16.6998 6.1 16.6998C6.9 16.6998 7.7 17.4998 7.7 18.2998C7.7 19.0998 7 19.8998 6.1 19.8998ZM20.6 10.1998L22.8 12.8998H18V10.1998H20.6ZM19 19.8998C18.1 19.8998 17.4 19.0998 17.4 18.2998C17.4 17.3998 18.2 16.6998 19 16.6998C19.8 16.6998 20.6 17.4998 20.6 18.2998C20.6 19.0998 19.9 19.8998 19 19.8998Z" fill="#B68B52"/>
      </g>
      <defs>
        <clipPath id="clip0_573_9787">
          <rect width="25" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>`,
  leatherIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <g clip-path="url(#clip0_573_9791)">
        <path d="M22.1 19.6H22C21.2 19 20.6 18.5 20.2 17.9C19.7 17.2 19.3 16.3 19 15.2C18.8 14.5 18.8 13.7 18.8 12.9C18.8 12 19 11.2 19.3 10.5C19.6 9.6 20.3 8.9 21.1 8.4C21.2 8.3 21.4 8.3 21.5 8.2C21.6 8.1 21.8 8.1 21.9 8C22 8 22.2 7.9 22.2 7.7V7.5L21.8 6.4C21.7 6.2 21.7 5.9 21.6 5.6C21.5 5.3 21.4 5.1 21.4 4.8C21.3 4.7 21.2 4.6 21 4.6C20.2 4.6 19.5 4.5 18.7 4.3C17.9 4.1 17.1 3.6 16.5 3C16 2.5 15.7 2 15.5 1.3C15.5 1.2 15.4 1 15.2 1H9.89999C9.79999 1 9.59999 1.1 9.59999 1.3C9.39999 2 8.99999 2.6 8.29999 3.1C7.59999 3.7 6.79999 4.1 5.69999 4.4C4.99999 4.5 4.39999 4.6 3.89999 4.6C3.69999 4.6 3.49999 4.6 3.49999 4.9L2.79999 7.3C2.79999 7.4 2.79999 7.7 3.09999 7.7C3.89999 8 4.49999 8.4 4.89999 8.9C5.19999 9.2 5.49999 9.6 5.89999 10.2C5.99999 10.4 6.19999 10.6 6.29999 10.8C6.39999 11.1 6.49999 11.4 6.59999 11.8C6.59999 12 6.69999 12.2 6.69999 12.3C6.79999 12.8 6.79999 13.2 6.79999 13.7C6.79999 14.9 6.49999 16 5.89999 17.3C5.49999 18.2 4.69999 19 3.69999 19.6C3.59999 19.7 3.49999 19.7 3.49999 19.8C3.49999 19.9 3.49999 20 3.59999 20.1C3.89999 20.5 4.19999 20.9 4.49999 21.3C4.69999 21.6 4.99999 22 5.29999 22.4C5.39999 22.5 5.59999 22.7 5.69999 22.5C5.69999 22.5 5.69999 22.4 5.79999 22.4C6.39999 22 6.99999 21.8 7.69999 21.7C7.89999 21.6 8.29999 21.6 8.59999 21.6C9.79999 21.6 10.9 22 11.7 22.9C12 23.1 12.3 23.5 12.5 23.8C12.5 23.8 12.5 23.9 12.6 23.9H12.7C12.8 23.9 12.9 23.9 12.9 23.8C13 23.8 13 23.7 13 23.7C13.3 23.1 13.9 22.6 14.5 22.2C15 21.9 15.4 21.7 16 21.6C16.5 21.5 17 21.5 17.5 21.6C18.1 21.7 18.8 22 19.7 22.4C19.8 22.4 20 22.4 20.1 22.3C20.8 21.6 21.4 20.8 22 20C22.1 19.9 22.1 19.9 22.1 19.8C22.2 19.7 22.1 19.6 22.1 19.6Z" fill="#B68B52"/>
        <path d="M13.1 22.0996C13.1 22.0996 13 22.0996 12.9 22.0996C12.8 22.1996 12.8 22.1996 12.7 22.2996C12.6 22.1996 12.6 22.1996 12.5 22.0996C12.4 22.0996 12.4 22.0996 12.3 22.0996L12.2 22.1996V22.2996V22.3996C12.3 22.4996 12.4 22.5996 12.5 22.6996L12.6 22.7996H12.7H12.8L12.9 22.6996C13 22.5996 13.1 22.4996 13.2 22.2996V22.1996V22.0996H13.1Z" fill="white"/>
        <path d="M9.99996 20.6996C9.69996 20.5996 9.39996 20.5996 8.99996 20.5996H8.89996V20.6996V20.8996C8.89996 20.9996 8.89996 20.9996 8.99996 20.9996C9.29996 20.9996 9.59996 21.0996 9.89996 21.0996C9.89996 21.0996 9.89996 21.0996 9.99996 21.0996C9.99996 21.0996 9.99996 21.0996 10.1 20.9996V20.7996L9.99996 20.6996Z" fill="white"/>
        <path d="M7.99997 20.5C7.79997 20.5 7.59997 20.6 7.39997 20.6C7.29997 20.6 7.19997 20.6 7.09997 20.7C6.99997 20.7 6.99997 20.8 6.99997 20.9V21.1C6.99997 21.1 6.99997 21.2 7.09997 21.2C7.09997 21.2 7.09997 21.2 7.19997 21.2C7.29997 21.2 7.39997 21.1 7.49997 21.1C7.59997 21 7.79997 21 7.99997 21H8.09997V20.9V20.7C8.09997 20.6 8.09997 20.5 7.99997 20.5Z" fill="white"/>
        <path d="M11.8 21.5C11.5 21.3 11.2 21.1 10.9 21H10.8C10.8 21 10.7 21 10.7 21.1L10.6 21.3C10.6 21.4 10.6 21.4 10.7 21.5C11 21.6 11.2 21.8 11.5 22C11.5 22 11.5 22 11.6 22C11.6 22 11.7 22 11.7 21.9L11.8 21.8C11.8 21.6 11.8 21.6 11.8 21.5Z" fill="white"/>
        <path d="M6.19999 21.0999C6.09999 20.9999 6.09999 20.9999 6.09999 21.0999C5.99999 21.0999 5.89999 21.1999 5.79999 21.1999C5.69999 21.0999 5.69999 20.9999 5.59999 20.8999H5.49999H5.39999L5.29999 20.9999V21.0999V21.1999C5.39999 21.2999 5.49999 21.4999 5.59999 21.5999V21.6999L5.69999 21.7999C5.69999 21.7999 5.69999 21.7999 5.79999 21.7999H5.89999C5.99999 21.6999 6.19999 21.6999 6.29999 21.5999C6.39999 21.5999 6.39999 21.4999 6.39999 21.3999L6.19999 21.0999Z" fill="white"/>
        <path d="M4.99998 19.5C4.89998 19.5 4.79998 19.5 4.79998 19.5C4.69998 19.6 4.49998 19.7 4.39998 19.8L4.29998 19.9C4.29998 19.9 4.29998 20 4.19998 20V20.1L4.29998 20.2C4.39998 20.3 4.49998 20.5 4.59998 20.6H4.69998H4.79998L4.99998 20.5C5.09998 20.5 5.09998 20.4 4.99998 20.3C4.99998 20.2 4.89998 20.1 4.89998 20C4.99998 20 4.99998 19.9 5.09998 19.9C5.19998 19.9 5.19998 19.8 5.09998 19.7L4.99998 19.5Z" fill="white"/>
        <path d="M6.39997 18.1996L6.29997 18.0996H6.19997C6.19997 18.0996 6.09997 18.0996 6.09997 18.1996C5.89997 18.4996 5.69997 18.6996 5.49997 18.8996V18.9996V19.0996L5.59997 19.1996H5.69997H5.79997C5.99997 18.9996 6.19997 18.6996 6.39997 18.3996C6.49997 18.3996 6.49997 18.2996 6.39997 18.1996C6.49997 18.2996 6.49997 18.1996 6.39997 18.1996Z" fill="white"/>
        <path d="M6.89998 10.2L7.09998 10.1C7.19998 10.1 7.19998 10 7.09998 9.9C6.99998 9.8 6.89998 9.6 6.79998 9.5C6.69998 9.3 6.59998 9.2 6.49998 9.1C6.49998 9.1 6.49998 9.1 6.39998 9H6.29998L6.19998 9.2C6.19998 9.2 6.19998 9.2 6.09998 9.3V9.4C6.19998 9.5 6.29998 9.7 6.39998 9.8C6.49998 9.9 6.59998 10 6.69998 10.2C6.79998 10.2 6.79998 10.2 6.89998 10.2Z" fill="white"/>
        <path d="M7.29996 16.5998C7.29996 16.4998 7.29996 16.4998 7.19996 16.3998L6.99996 16.2998C6.89996 16.2998 6.89996 16.2998 6.79996 16.3998C6.69996 16.6998 6.59996 16.9998 6.39996 17.2998C6.39996 17.3998 6.39996 17.3998 6.49996 17.4998L6.69996 17.5998C6.69996 17.5998 6.69996 17.5998 6.79996 17.5998C6.79996 17.5998 6.89996 17.5998 6.89996 17.4998C7.09996 17.1998 7.19996 16.8998 7.29996 16.5998Z" fill="white"/>
        <path d="M5.39997 8.39961C5.49997 8.49961 5.49997 8.49961 5.59997 8.59961H5.69997H5.79997L5.89997 8.49961V8.39961V8.29961C5.89997 8.19961 5.79997 8.19961 5.79997 8.09961C5.59997 7.89961 5.39997 7.79961 5.19997 7.59961C5.09997 7.59961 5.09997 7.59961 4.99997 7.59961V7.79961V7.89961V7.99961C5.09997 8.09961 5.29997 8.19961 5.39997 8.39961Z" fill="white"/>
        <path d="M7.89997 13.6996V13.5996C7.89997 13.2996 7.89997 12.9996 7.89997 12.6996V12.5996H7.79997H7.59997H7.49997V12.6996C7.49997 12.9996 7.49997 13.2996 7.49997 13.4996V13.5996C7.49997 13.6996 7.59997 13.6996 7.59997 13.6996H7.79997C7.79997 13.8996 7.79997 13.7996 7.89997 13.6996C7.89997 13.7996 7.89997 13.7996 7.89997 13.6996Z" fill="white"/>
        <path d="M7.69998 14.5996H7.49998C7.39998 14.5996 7.39998 14.5996 7.39998 14.6996C7.39998 14.9996 7.29998 15.2996 7.19998 15.5996C7.19998 15.6996 7.19998 15.6996 7.29998 15.7996H7.49998C7.59998 15.7996 7.59998 15.7996 7.59998 15.6996C7.69998 15.3996 7.69998 15.0996 7.79998 14.6996C7.79998 14.6996 7.79998 14.6996 7.69998 14.5996C7.79998 14.5996 7.79998 14.5996 7.69998 14.5996Z" fill="white"/>
        <path d="M7.29998 11.5997C7.29998 11.6997 7.29998 11.7997 7.29998 11.7997C7.29998 11.8997 7.39998 11.8997 7.39998 11.8997H7.59998C7.59998 11.8997 7.69998 11.8997 7.69998 11.7997V11.6997C7.69998 11.5997 7.69998 11.5997 7.69998 11.4997C7.69998 11.2997 7.59998 10.9997 7.59998 10.7997C7.59998 10.7997 7.59998 10.6997 7.49998 10.6997C7.39998 10.6997 7.39998 10.6997 7.39998 10.6997H7.19998C7.19998 10.6997 7.09998 10.6997 7.09998 10.7997V10.8997C7.19998 11.1997 7.19998 11.3997 7.29998 11.5997Z" fill="white"/>
        <path d="M4.39998 7.1999C4.39998 7.0999 4.39998 7.0999 4.29998 6.9999C4.29998 6.9999 4.19998 6.9999 4.09998 6.8999L4.19998 6.5999V6.4999C4.19998 6.4999 4.19998 6.3999 4.09998 6.3999H3.89998H3.79998C3.79998 6.3999 3.69998 6.3999 3.69998 6.4999L3.59998 6.9999C3.59998 7.0999 3.59998 7.0999 3.69998 7.1999H3.79998C3.99998 7.2999 4.09998 7.2999 4.19998 7.3999C4.19998 7.3999 4.19998 7.3999 4.29998 7.3999C4.29998 7.3999 4.39998 7.3999 4.39998 7.2999V7.1999Z" fill="white"/>
        <path d="M3.99996 5.99971H4.19996C4.19996 5.99971 4.19996 5.99971 4.29996 5.99971C4.29996 5.99971 4.39996 5.99971 4.39996 5.89971L4.49996 5.59971C4.59996 5.59971 4.69996 5.59971 4.89996 5.59971C4.99996 5.59971 4.99996 5.49971 4.99996 5.49971V5.29971V5.19971H4.89996C4.69996 5.19971 4.59996 5.19971 4.39996 5.19971H4.29996C4.19996 5.19971 4.19996 5.19971 4.19996 5.29971L3.89996 5.89971C3.89996 5.89971 3.89996 5.99971 3.99996 5.99971Z" fill="white"/>
        <path d="M8.19998 4.2C8.19998 4.1 8.19998 4.1 8.19998 4.2C8.09998 4.1 8.09998 4.1 7.99998 4.2C7.79998 4.3 7.59998 4.4 7.29998 4.5C7.29998 4.5 7.19998 4.5 7.19998 4.6V4.7L7.29998 4.9L7.39998 5C7.39998 5 7.39998 5 7.49998 5C7.79998 4.8 7.99998 4.6 8.29998 4.5C8.39998 4.5 8.39998 4.4 8.29998 4.3L8.19998 4.2Z" fill="white"/>
        <path d="M8.99999 3.9C9.29999 3.7 9.59999 3.5 9.79999 3.2C9.79999 3.1 9.79999 3.1 9.79999 3H9.59999C9.49999 3 9.49999 3 9.39999 3C9.19999 3.2 8.99999 3.4 8.79999 3.6V3.7V3.8L8.99999 3.9C8.89999 3.9 8.89999 3.9 8.99999 3.9Z" fill="white"/>
        <path d="M5.59997 5.3998C5.69997 5.4998 5.69997 5.4998 5.69997 5.4998C5.79997 5.4998 5.89997 5.4998 5.99997 5.3998C6.19997 5.3998 6.39997 5.2998 6.59997 5.1998C6.69997 5.1998 6.69997 5.0998 6.69997 4.9998L6.59997 4.8998C6.59997 4.8998 6.59997 4.7998 6.49997 4.7998H6.39997C6.29997 4.8998 6.09997 4.9998 5.89997 4.9998C5.79997 4.9998 5.69997 4.9998 5.59997 5.0998C5.59997 5.0998 5.49997 5.0998 5.49997 5.1998V5.2998L5.59997 5.3998Z" fill="white"/>
        <path d="M11 1.9998V1.8998C11 1.7998 10.9 1.7998 10.9 1.7998H10.3C10.2 1.7998 10.2 1.7998 10.2 1.8998V1.9998C10.1 1.9998 9.99996 2.1998 9.89996 2.2998V2.3998C9.89996 2.3998 9.89996 2.4998 9.99996 2.4998L10.1 2.5998C10.1 2.5998 10.1 2.5998 10.2 2.5998C10.2 2.5998 10.3 2.5998 10.3 2.4998C10.4 2.3998 10.4 2.2998 10.5 2.1998H10.9C10.9 2.1998 11 2.0998 11 1.9998Z" fill="white"/>
        <path d="M13.1 1.9998V1.8998C13.1 1.7998 13 1.7998 13 1.7998H11.9C11.8 1.7998 11.8 1.8998 11.8 1.8998V1.9998C11.8 2.0998 11.9 2.0998 11.9 2.0998H13C13.1 2.1998 13.1 2.0998 13.1 1.9998Z" fill="white"/>
        <path d="M14.8 1.8998C14.8 1.7998 14.7 1.7998 14.7 1.7998H14.1C14 1.7998 14 1.7998 14 1.8998V1.9998C14 2.0998 14.1 2.0998 14.1 2.0998H14.5C14.6 2.1998 14.6 2.2998 14.7 2.3998L14.8 2.4998C14.8 2.4998 14.8 2.4998 14.9 2.4998L15.1 2.3998C15 2.4998 15 2.3998 15 2.2998C14.9 2.1998 14.8 1.9998 14.8 1.8998Z" fill="white"/>
        <path d="M15.7 4C15.8 4 15.8 4.1 15.7 4C15.8 4.1 15.8 4.1 15.7 4C15.8 4 15.9 4 15.9 4L16 3.9C16 3.8 16 3.8 16 3.7C15.9 3.6 15.9 3.6 15.8 3.5C15.6 3.3 15.5 3.2 15.4 3H15.3H15.2L15.1 3.1V3.2V3.3C15.2 3.5 15.4 3.7 15.6 3.8C15.6 3.9 15.7 4 15.7 4Z" fill="white"/>
        <path d="M17.4 5.0998C17.4 4.9998 17.5 4.9998 17.4 5.0998L17.5 4.8998C17.5 4.7998 17.5 4.7998 17.4 4.6998C17.1 4.5998 16.9 4.3998 16.6 4.2998H16.5C16.5 4.2998 16.4 4.2998 16.4 4.3998L16.3 4.4998C16.3 4.5998 16.3 4.5998 16.3 4.6998C16.7 4.7998 17 4.8998 17.4 5.0998C17.3 5.0998 17.3 5.0998 17.4 5.0998Z" fill="white"/>
        <path d="M18.2 5.3999C18.6 5.4999 18.8 5.5999 19.1 5.5999C19.2 5.5999 19.2 5.5999 19.2 5.4999V5.2999V5.1999C19.2 5.1999 19.2 5.1999 19.1 5.0999C18.8 4.9999 18.6 4.9999 18.3 4.8999H18.2C18.1 4.8999 18.1 4.8999 18 4.9999V5.1999C18.1 5.2999 18.1 5.2999 18.2 5.3999C18.1 5.3999 18.1 5.3999 18.2 5.3999Z" fill="white"/>
        <path d="M20.5 6.09971C20.5 6.19971 20.6 6.19971 20.6 6.19971L20.8 6.09971C20.8 6.09971 20.9 6.09971 20.9 5.99971V5.89971V5.79971C20.9 5.69971 20.8 5.49971 20.8 5.39971V5.29971C20.8 5.19971 20.7 5.19971 20.7 5.19971H20.6C20.4 5.19971 20.3 5.19971 20.1 5.19971H20V5.29971V5.49971V5.59971H20.1C20.2 5.59971 20.3 5.59971 20.5 5.59971C20.4 5.89971 20.4 5.99971 20.5 6.09971Z" fill="white"/>
        <path d="M21.3 7.29961L21.1 6.69961C21.1 6.59961 21 6.59961 20.9 6.59961L20.7 6.69961C20.7 6.69961 20.6 6.69961 20.6 6.79961V6.89961L20.7 7.19961C20.6 7.19961 20.5 7.29961 20.4 7.29961C20.4 7.29961 20.3 7.29961 20.3 7.39961V7.49961L20.4 7.69961L20.5 7.79961C20.5 7.79961 20.5 7.79961 20.6 7.79961C20.7 7.69961 20.9 7.69961 21 7.59961H21.1C21.3 7.39961 21.3 7.39961 21.3 7.29961Z" fill="white"/>
        <path d="M19.7 18.9996C19.7 19.0996 19.7 19.0996 19.7 18.9996C19.8 18.9996 19.9 18.9996 19.9 18.9996L20 18.8996V18.7996V18.6996C19.8 18.4996 19.7 18.2996 19.6 18.0996C19.5 17.9996 19.5 17.8996 19.4 17.7996C19.4 17.6996 19.3 17.6996 19.2 17.7996L19 17.9996C18.9 17.9996 18.9 18.0996 19 18.1996C19.1 18.2996 19.1 18.3996 19.2 18.4996C19.3 18.5996 19.5 18.7996 19.7 18.9996Z" fill="white"/>
        <path d="M17.7 13.0999H17.9C18 13.0999 18 12.9999 18 12.9999V12.8999C18 12.5999 18 12.2999 18.1 11.9999C18.1 11.8999 18.1 11.8999 18 11.8999H17.8H17.7V11.9999C17.7 12.2999 17.6 12.5999 17.6 12.9999V13.0999C17.6 12.9999 17.7 13.0999 17.7 13.0999Z" fill="white"/>
        <path d="M17.9 10.9H18.1C18.1 10.9 18.1 10.9 18.2 10.9C18.2 10.9 18.3 10.9 18.3 10.8C18.4 10.5 18.5 10.3 18.6 10C18.6 9.9 18.7 9.8 18.7 9.8C18.7 9.7 18.7 9.7 18.6 9.6L18.4 9.5H18.3C18.3 9.5 18.2 9.5 18.2 9.6C18.2 9.7 18.1 9.8 18.1 9.8C18 10.1 17.9 10.3 17.8 10.6C17.8 10.8 17.9 10.9 17.9 10.9Z" fill="white"/>
        <path d="M18.5 15.9999C18.5 15.8999 18.4 15.8999 18.3 15.8999L18.2 15.9999C18.2 15.9999 18.1 15.9999 18.1 16.0999V16.1999C18.2 16.5999 18.3 16.8999 18.5 17.1999C18.5 17.1999 18.5 17.2999 18.6 17.2999C18.6 17.2999 18.6 17.2999 18.7 17.2999L18.9 17.1999C19 17.1999 19 17.0999 19 16.9999C18.7 16.6999 18.6 16.3999 18.5 15.9999Z" fill="white"/>
        <path d="M18 13.8999H17.7C17.6 13.8999 17.6 13.9999 17.6 13.9999C17.6 14.3999 17.7 14.7999 17.8 15.0999C17.8 15.0999 17.8 15.1999 17.9 15.1999C17.9 15.1999 17.9 15.1999 18 15.1999H18.2C18.3 15.1999 18.3 15.0999 18.3 14.9999C18.1 14.6999 18.1 14.3999 18 13.8999Z" fill="white"/>
        <path d="M19.1 9.1C19.4 8.8 19.6 8.5 19.9 8.3V8.2V8.1L19.8 8H19.7H19.6C19.3 8.2 19.1 8.5 18.8 8.8C18.8 8.9 18.8 8.9 18.8 9L19.1 9.1C19 9.1 19 9.1 19.1 9.1Z" fill="white"/>
        <path d="M21.2 19.7999C21 19.5999 20.9 19.4999 20.7 19.3999C20.6 19.3999 20.6 19.3999 20.5 19.3999L20.4 19.4999V19.5999V19.6999C20.5 19.7999 20.6 19.7999 20.6 19.8999C20.5 19.9999 20.5 20.0999 20.4 20.0999V20.1999V20.2999L20.5 20.3999C20.5 20.3999 20.5 20.3999 20.6 20.3999C20.6 20.3999 20.7 20.3999 20.7 20.2999C20.8 20.1999 20.9 19.9999 21 19.8999V19.7999C21.2 19.9999 21.2 19.8999 21.2 19.7999Z" fill="white"/>
        <path d="M20.2 20.8999C20.1 20.8999 20.1 20.8999 20.2 20.8999C20.1 20.8999 20 20.8999 20 20.8999C19.9 20.9999 19.8 21.0999 19.8 21.1999C19.7 21.0999 19.6 21.0999 19.5 21.0999H19.4C19.4 21.0999 19.3 21.0999 19.3 21.1999L19.2 21.3999C19.2 21.4999 19.2 21.4999 19.3 21.5999C19.4 21.6999 19.6 21.6999 19.8 21.7999H19.9C19.9 21.7999 19.9 21.7999 20 21.7999H20.1C20.2 21.6999 20.3 21.4999 20.4 21.3999C20.4 21.2999 20.4 21.2999 20.4 21.1999L20.2 20.8999Z" fill="white"/>
        <path d="M16.5 20.3999C16.3 20.3999 16 20.4999 15.8 20.4999C15.7 20.4999 15.6 20.4999 15.5 20.5999C15.5 20.5999 15.4 20.5999 15.4 20.6999V20.7999V20.9999C15.4 21.0999 15.5 21.0999 15.5 21.0999C15.6 21.0999 15.7 21.0999 15.8 20.9999C16 20.9999 16.2 20.8999 16.4 20.8999H16.5V20.7999V20.5999C16.6 20.4999 16.6 20.3999 16.5 20.3999Z" fill="white"/>
        <path d="M18.5 20.6999C18.3 20.5999 18 20.5999 17.8 20.4999C17.7 20.4999 17.6 20.4999 17.5 20.3999H17.4C17.4 20.3999 17.4 20.3999 17.3 20.4999V20.6999V20.7999C17.3 20.7999 17.3 20.7999 17.4 20.8999C17.5 20.8999 17.6 20.8999 17.7 20.9999C17.9 20.9999 18.1 21.0999 18.3 21.1999C18.4 21.1999 18.4 21.1999 18.4 21.0999V20.8999C18.6 20.7999 18.6 20.7999 18.5 20.6999Z" fill="white"/>
        <path d="M14.7 20.9999C14.6 20.8999 14.6 20.8999 14.5 20.8999C14.3 20.9999 14.1 21.0999 13.9 21.2999C13.8 21.3999 13.7 21.3999 13.6 21.4999C13.5 21.4999 13.5 21.5999 13.6 21.6999L13.7 21.7999C13.7 21.7999 13.7 21.7999 13.8 21.8999H13.9C14 21.7999 14.1 21.7999 14.1 21.6999C14.3 21.5999 14.4 21.4999 14.6 21.3999C14.7 21.3999 14.7 21.2999 14.7 21.1999V20.9999Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_573_9791">
          <rect width="25" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>`,
  closeIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <g filter="url(#filter0_d_571_2120)">
        <path d="M5.91211 2L15.2403 11.3M5.91211 11.3L15.2403 2" stroke="white" stroke-width="2.325" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
      </g>
      <defs>
        <filter id="filter0_d_571_2120" x="0.749634" y="0.837402" width="19.6531" height="19.625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_571_2120"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_571_2120" result="shape"/>
        </filter>
      </defs>
    </svg>`,
  deleteIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_578_12563)">
          <path d="M24 0H0V24H24V0Z" fill="white"/>
          <path d="M7 21C6.5 21 6 20.8 5.6 20.4C5.2 20 5 19.5 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.5 18.8 20 18.4 20.4C18 20.8 17.6 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#333333"/>
        </g>
        <defs>
          <clipPath id="clip0_578_12563">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
};

const topBadge = `
    <div class="crs_absolute px-4 pt-3 mt-1 d-flex align-items-center justify-content-between">
        <div class="crs_warranty d-flex align-items-center">
            ${dataIcons.warrantyIcon}
            25-Year Warranty
        </div>
        <a href="#" class="crs_wishlist">
            ${dataIcons.wishlistIcon}
            ${dataIcons.wishlistFullIcon}
        </a>
    </div>`;

const getDiscount = `
    <button type="button" class="crs_discount d-flex align-items-center">
        ${dataIcons.discountIcon}
       <span> Get a 10% Discount</span>
    </button>`;

const trustpilot = `
    <svg xmlns="http://www.w3.org/2000/svg" width="91" height="20" viewBox="0 0 91 20" fill="none">
        <path d="M9.78008 0.573486L12.4401 7.19635L19.5602 7.67918L14.0835 12.2552L15.8248 19.1765L9.78008 15.3817L3.73535 19.1765L5.47669 12.2552L0 7.67918L7.12008 7.19635L9.78008 0.573486Z" fill="#00B67E"/>
        <path d="M33.0782 6.66401H29.6043V16.2435H27.6837V6.66401H24.2412V5.10308H33.0782V6.66401ZM38.1974 9.66327C37.9525 9.62253 37.6998 9.60215 37.4393 9.60215C36.5873 9.60215 36.0134 9.92858 35.7176 10.5815V16.2435H33.8587V7.96473H35.6334L35.6794 8.89054C36.1289 8.17128 36.7508 7.81165 37.5471 7.81165C37.8115 7.81165 38.0309 7.8474 38.2042 7.9188L38.1974 9.66327ZM44.3871 15.4325C43.8415 16.0752 43.0659 16.3965 42.061 16.3965C41.1629 16.3965 40.4823 16.1338 40.018 15.6085C39.5587 15.0831 39.3295 14.3231 39.3295 13.3283V7.96473H41.1884V13.3054C41.1884 14.3562 41.6252 14.8816 42.4969 14.8816C43.3998 14.8816 44.01 14.5576 44.3254 13.9099V7.96473H46.1852V16.2435H44.4331L44.3871 15.4325ZM52.7196 13.994C52.7196 13.6625 52.5815 13.41 52.3063 13.2365C52.036 13.0631 51.5845 12.9101 50.9518 12.7774C50.3192 12.6448 49.7913 12.4764 49.3682 12.2724C48.4397 11.8236 47.9755 11.1732 47.9755 10.3213C47.9755 9.60725 48.2762 9.01041 48.8785 8.53091C49.4798 8.0514 50.2457 7.81165 51.1742 7.81165C52.1633 7.81165 52.9615 8.0565 53.5687 8.54619C54.1809 9.03588 54.4864 9.671 54.4864 10.4514H52.6276C52.6276 10.0944 52.4953 9.79852 52.2299 9.56386C51.9645 9.32411 51.6129 9.20423 51.1742 9.20423C50.7658 9.20423 50.4318 9.29865 50.1713 9.48737C49.9166 9.6761 49.7893 9.92858 49.7893 10.2448C49.7893 10.5305 49.9088 10.7523 50.1488 10.9105C50.3887 11.0686 50.8725 11.2293 51.6021 11.3926C52.3318 11.5506 52.9028 11.7419 53.3161 11.9664C53.7343 12.1858 54.0428 12.451 54.2416 12.7621C54.4463 13.0733 54.5481 13.4507 54.5481 13.8946C54.5481 14.6393 54.2396 15.2438 53.6226 15.7079C53.0046 16.167 52.1966 16.3965 51.1967 16.3965C50.518 16.3965 49.9137 16.2741 49.3838 16.0292C48.853 15.7844 48.4397 15.4478 48.144 15.0193C47.8482 14.5908 47.7003 14.1291 47.7003 13.6344H49.5063C49.5317 14.0731 49.6973 14.4123 50.0028 14.652C50.3094 14.8867 50.7148 15.004 51.2202 15.004C51.7099 15.004 52.082 14.9122 52.3367 14.7285C52.5923 14.5398 52.7196 14.295 52.7196 13.994ZM58.5038 5.9524V7.96473H59.9651V9.34193H58.5038V13.9634C58.5038 14.2797 58.5655 14.5092 58.688 14.652C58.8153 14.7897 59.0396 14.8586 59.3608 14.8586C59.5753 14.8586 59.7917 14.8331 60.0111 14.7821V16.2206C59.588 16.3379 59.1796 16.3965 58.7869 16.3965C57.3589 16.3965 56.645 15.6085 56.645 14.0323V9.34193H55.2827V7.96473H56.645V5.9524H58.5038ZM68.6424 12.1883C68.6424 13.4686 68.3515 14.4913 67.7697 15.2565C67.188 16.0165 66.4074 16.3965 65.4281 16.3965C64.5202 16.3965 63.7935 16.0982 63.2479 15.5014V19.4265H61.3881V7.96473H63.102L63.1784 8.80631C63.7249 8.14327 64.4673 7.81165 65.4055 7.81165C66.4153 7.81165 67.2056 8.18911 67.7776 8.94411C68.3534 9.69392 68.6424 10.7371 68.6424 12.0735V12.1883ZM66.7904 12.0276C66.7904 11.2013 66.6249 10.5458 66.2928 10.0612C65.9667 9.57659 65.4976 9.33429 64.8855 9.33429C64.1255 9.33429 63.579 9.64799 63.2479 10.2754V13.9481C63.5848 14.5908 64.1353 14.9122 64.9002 14.9122C65.4917 14.9122 65.954 14.675 66.285 14.2006C66.6219 13.7211 66.7904 12.9968 66.7904 12.0276ZM72.1995 16.2435H70.3406V7.96473H72.1995V16.2435ZM70.226 5.8147C70.226 5.52901 70.3152 5.29181 70.4934 5.10308C70.6775 4.91435 70.9371 4.81994 71.274 4.81994C71.6109 4.81994 71.8704 4.91435 72.0545 5.10308C72.2377 5.29181 72.3297 5.52901 72.3297 5.8147C72.3297 6.09519 72.2377 6.32985 72.0545 6.51858C71.8704 6.70221 71.6109 6.79408 71.274 6.79408C70.9371 6.79408 70.6775 6.70221 70.4934 6.51858C70.3152 6.32985 70.226 6.09519 70.226 5.8147ZM76.2091 16.2435H74.3502V4.49097H76.2091V16.2435ZM77.8926 12.0276C77.8926 11.2166 78.0532 10.4871 78.3745 9.83926C78.6957 9.18641 79.1472 8.68653 79.729 8.33964C80.3107 7.98765 80.9786 7.81165 81.7337 7.81165C82.8502 7.81165 83.7562 8.17128 84.4496 8.89054C85.1488 9.60979 85.5259 10.5636 85.5817 11.7522L85.5896 12.1883C85.5896 13.0044 85.4319 13.7339 85.1155 14.3766C84.8041 15.0193 84.3555 15.5166 83.7689 15.8686C83.1871 16.2206 82.5143 16.3965 81.7484 16.3965C80.581 16.3965 79.6447 16.0089 78.9406 15.2336C78.2423 14.4531 77.8926 13.4151 77.8926 12.1195V12.0276ZM79.7515 12.1883C79.7515 13.0402 79.9278 13.7084 80.2794 14.1929C80.632 14.6724 81.1216 14.9122 81.7484 14.9122C82.3762 14.9122 82.863 14.6673 83.2107 14.1776C83.5623 13.6879 83.7386 12.9713 83.7386 12.0276C83.7386 11.191 83.5573 10.528 83.195 10.0383C82.8375 9.54858 82.3507 9.30374 81.7337 9.30374C81.1265 9.30374 80.6447 9.54604 80.2872 10.0305C79.9307 10.51 79.7515 11.2293 79.7515 12.1883ZM89.4924 5.9524V7.96473H90.9536V9.34193H89.4924V13.9634C89.4924 14.2797 89.5531 14.5092 89.6755 14.652C89.8029 14.7897 90.0281 14.8586 90.3494 14.8586C90.5629 14.8586 90.7803 14.8331 90.9996 14.7821V16.2206C90.5756 16.3379 90.1682 16.3965 89.7754 16.3965C88.3465 16.3965 87.6326 15.6085 87.6326 14.0323V9.34193H86.2712V7.96473H87.6326V5.9524H89.4924Z" fill="#0C0B0B"/>
    </svg>
    <svg class="mx-3 mx-md-4" width="111" height="18" viewBox="0 0 111 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        536 Reviews
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

function formatDate(days) {
  const today = new Date();

  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + parseFloat(days));

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

  const deliveryDay = nextWeek.getDate();
  const nextWeekMonth = months[nextWeek.getMonth()];

  const formattedDate = `${deliveryDay} ${nextWeekMonth}`;

  return formattedDate;
}

const delivery = `
    <ul class="crs_delivery">
        <li class="d-flex">
            <div class="mr-2">
              ${dataIcons.shipIcon}
            </div>
            <div>
              <p class="crs_uk_delivery" ${
                isCountry.toUpperCase() != "GB" ? "hidden" : ""
              }><b>You get FREE EXPRESS UK Delivery</b></p>
              <div class="crs_shipto d-flex align-items-center">
                  <p>Ship to:</p>
                  <select class="crs_country">${optionsCountry}</select>
              </div>
              <div class="crs_est">Est. Delivery: <b>${
                formatDate("1") + " - " + formatDate("3")
              }</b> </div>
            </div>
        </li>
        <li class="d-flex justify-content-between align-items-center">
            <p class="d-flex align-items-center">
                <span class="mr-2">
                  ${dataIcons.warrantyIcon}
                </span>
                25-Year Warranty 
            </p>
            <button class="crs_btn_more ml-auto" type="button">LEARN MORE</button>
        </li>
        <li class="d-flex justify-content-between align-items-center">
            <p class="d-flex align-items-center">
                <span class="mr-2">
                  ${dataIcons.returnsIcon}
                </span>
                60-day risk-free return
            </p>
            <button class="crs_btn_more ml-auto" type="button">LEARN MORE</button>
        </li>
        <li class=" crs_trustpilot">
            <a href=" https://www.trustpilot.com/review/www.maxwellscottbags.com" class="d-flex justify-content-md-center justify-content-between align-items-center" target="_blank" onclick="pushDataLayer(['exp_inc_soc_trus_but_pdprating_trust', 'Trustpilot ', 'Button', 'PDP Give us a rating'])">
                ${trustpilot}
            </a>
        </li>
    </ul>`;

const popupOne = `
<div class="crs_popup">
    <div class="container d-md-flex flex-md-row-reverse">
        <button type="button" class="crs_popup_close">
            ${dataIcons.closeIcon}
        </button>
        <img src="${dir}image-1${media ? "" : "-desk"}.png" alt="image">
        <div class="crs_popup_content">
            <div class="crs_popup_circle position-absolute bg-white">
                <div class="m-auto">
                  ${dataIcons.warrantyIcon}
                </div>
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
          ${dataIcons.closeIcon}
        </button>
        <img src="${dir}image-2${media ? "" : "-desk"}.png" alt="image">
        <div class="crs_popup_content">
            <div class="crs_popup_circle position-absolute bg-white">
                <div class="m-auto">
                  ${dataIcons.returnsIcon}
                </div>
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
    <div class="mx-auto">${dataIcons.leatherIcon}</div>
    <h4>Made in Italy.
        <span>Now, Always, Forever.</span>
    </h4>
    <a href="#leather-unique-block-desktop" class="crs_quality_more">Learn more</ф>
</div>`;

const highlight = `
<div class="d-flex crs_highlight">
    <div class="d-flex align-items-center justify-content-center">
        <div class="mr-2">
          ${dataIcons.warrantyIcon}
        </div>
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
  return `<p class="crs_klarna">or 3 interest-free payments of <b>£${addCommasToNumber(
    (price / 3).toFixed(2)
  )}</b> with <img src="${dir}klarna.png" alt="klarna"></p>`;
}

function setStickyBtn(title, span) {
  return `
    <div class="crs_sticky ${media ? "active" : ""}">
      <div class="d-flex justify-content-between align-items-center">
        <h2 class="crs_sticky_content d-md-block d-none">${title} <span>${span}</span></h2>
        <button type="button" class="crs_sticky_btn"><b>add to basket</b></button>
      </div> 
    </div>`;
}

function scrollTo(target) {
  const top =
    document
      .querySelector(`#${target.href.split("#")[1]}`)
      .getBoundingClientRect().top - 40;

  seamless.polyfill();
  seamless.scrollBy(window, { behavior: "smooth", top: top, left: 0 });
}

function addCommasToNumber(number) {
  var parts = number.toString().split(".");
  var integerPart = parts[0];
  var decimalPart = parts.length > 1 ? "." + parts[1] : "";

  var formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedIntegerPart + decimalPart;
}

let isSaved = false;

function setSaved(targetElement, price) {
  isSaved = true;

  let isDiscount =
    targetElement.querySelectorAll(".block-content .subtotal").length > 1;

  console.log("isDiscount: " + isDiscount);

  let subtotal = parseFloat(price.replace(price[0], "").split(",").join(""));
  let saved = isDiscount
    ? ((subtotal * 10) / 90).toFixed(2)
    : ((subtotal * 10) / 100).toFixed(2);
  let subtotalNew = isDiscount
    ? subtotal.toFixed(2)
    : (subtotal - saved).toFixed(2);
  let oldPrice = isDiscount
    ? (subtotal + +saved).toFixed(2)
    : subtotal.toFixed(2);
  console.log("subtotal: " + subtotal);
  console.log("saved: " + saved);
  console.log("subtotalNew: " + subtotalNew);
  console.log("oldPrice: " + oldPrice);

  targetElement.querySelector(".crs_regular")?.remove();

  if (sessionStorage.getItem("crsDiscount") || isDiscount) {
    targetElement.querySelector(".crs_discount_row").insertAdjacentHTML(
      "beforebegin",
      `
        <div class="crs_regular">
          <p class="d-flex justify-content-between"><b>Regular price</b> <b>${price}</b></p>
          <p class="d-flex justify-content-between">Sign up discount savings <span>-${
            price[0] + saved
          }</span></p>
        </div>`
    );

    targetElement.querySelector(".crs_discount_row").classList.remove("active");
  }
  targetElement.querySelector(".crs_price_new")?.remove();

  if (sessionStorage.getItem("crsDiscount") || isDiscount) {
    targetElement.querySelector(".crs_discount").hidden = true;
    targetElement
      .querySelector(".subtotal .price-container.amount")
      .classList.add("crs_change");

    targetElement
      .querySelector(".subtotal .price-container.amount")
      .insertAdjacentHTML(
        isDiscount ? "afterbegin" : "beforeend",
        `<span class="crs_price_new">${
          isDiscount
            ? price[0] + addCommasToNumber(oldPrice)
            : price[0] + addCommasToNumber(subtotalNew)
        }</span>`
      );
  }

  let priceFooter = targetElement.querySelector(".crs_change")
    ? targetElement.querySelector(".crs_price_new").innerText
    : targetElement.querySelector(".subtotal .amount.price-container .price")
        .innerText;
  targetElement.querySelector(
    ".crs_cart_subtotal .pr b:not(.pr_old)"
  ).innerHTML = priceFooter;

  targetElement.querySelector(".crs_cart_subtotal .pr .pr_old").innerHTML =
    targetElement.querySelector(".crs_change")
      ? targetElement.querySelector(".subtotal .amount.price-container .price")
          .innerText
      : "";

  targetElement.querySelector(".crs_saved")?.remove();

  if (sessionStorage.getItem("crsDiscount") || isDiscount) {
    targetElement
      .querySelector(".crs_cart_subtotal")
      .insertAdjacentHTML(
        "afterend",
        `<div class="crs_saved ml-auto">You just saved ${
          price[0] + saved
        }</div>`
      );

    targetElement.querySelector(".block-content").style =
      "padding-bottom: 220px";
  }
  targetElement.querySelector(".crs_klarna b").innerHTML =
    price[0] +
    addCommasToNumber(
      (
        parseFloat(
          priceFooter.replace(priceFooter[0], "").split(",").join("")
        ) / 3
      ).toFixed(2)
    );
}

// Function to handle the observed mutations on the cart element.
function handleCartMutation(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === "class") {
      const targetElement = media
        ? mutation.target
        : document.querySelector(".header-right-block .minicart-wrapper");

      if (targetElement.classList.contains("active")) {
        let countProduct = 0;

        if (targetElement.querySelector(".minicart-title")) {
          targetElement.querySelector(".minicart-title").innerHTML =
            "Shopping Bag (<span>0</span>)";

          targetElement
            .querySelectorAll(
              '.minicart-items li .option-wrapper > .values [data-bind="text: qty"]'
            )
            .forEach((item) => {
              countProduct += +item.innerText;
            });
          targetElement.querySelector(".minicart-title span").innerHTML =
            countProduct;
        }

        targetElement
          .querySelectorAll(".minicart-items .action.delete")
          .forEach((item) => {
            item.innerHTML = dataIcons.deleteIcon;
            item.addEventListener("click", () => {
              isSaved = false;
              console.log("click delete");
            });
          });

        if (!targetElement.querySelector("#top-cart-btn-checkout")) return;
        targetElement
          .querySelector("#top-cart-btn-checkout")
          .addEventListener("click", (e) => {
            pushDataLayer([
              "exp_inc_soc_trus_but_car_checkout",
              "Proceed to checkout",
              "Button",
              "Cart",
            ]);
          });

        targetElement.querySelector(
          ".block-content > .actions > .primary .paypal input"
        ).src = dir + "paypal-logo.svg";

        console.log("." + targetElement.className.split(" ")[0]);

        // let classTargetElement = targetElement.className.includes('minicart-wrapper') ? '.minicart-wrapper'
        waitForElement(
          "." +
            targetElement.className.split(" ")[0] +
            " .subtotal .amount.price-container .price"
        ).then((el) => {
          console.log(el);
          let price = el.innerText;

          console.log("price: " + price);

          targetElement.querySelector(".crs_cart_subtotal")?.remove();

          let newPrice = "";
          if (targetElement.querySelector(".crs_regular > p > span")) {
            let selectorNewPrice = targetElement.querySelector(
              ".crs_regular > p > span"
            );
            let haveDiscount =
              targetElement.querySelectorAll(".block-content .subtotal")
                .length > 1
                ? 0
                : +selectorNewPrice.innerText.split(
                    selectorNewPrice.innerText[1]
                  )[1];

            newPrice =
              price[0] +
              addCommasToNumber(
                (
                  +price.replace(price[0], "").split(",").join("") -
                  haveDiscount
                ).toFixed(2)
              );
          }
          console.log("newPrice: " + newPrice);

          targetElement
            .querySelector(".block-content > .actions > .primary")
            .insertAdjacentHTML(
              "beforebegin",
              `
              <div class="crs_cart_subtotal">
                  <div class="d-flex justify-content-between align-items-center crs_sub">
                      <p><b>Subtotal</b> </p>
                      <p class="pr"><b class="pr_old">${
                        newPrice != "" ? price : ""
                      }</b><b> ${newPrice != "" ? newPrice : price}</b></p>
                  </div>
              </div>`
            );

          console.log(
            ".crs_cart_subtotal .pr: " +
              targetElement.querySelector(".crs_cart_subtotal .pr").innerText
          );

          if (!targetElement.querySelector(".crs_highlight")) {
            targetElement
              .querySelector(".block-content > .actions")
              .insertAdjacentHTML("beforebegin", highlight);
          }
          targetElement.querySelector(".crs_klarna")?.remove();

          targetElement
            .querySelector(".subtotal")
            .insertAdjacentHTML(
              "afterend",
              klarna(
                newPrice != ""
                  ? +newPrice.replace(newPrice[0], "").split(",").join("")
                  : +price.replace(price[0], "").split(",").join("")
              )
            );

          console.log(
            ".crs_klarna b: " +
              targetElement.querySelector(".crs_klarna b").innerHTML
          );

          return
          if (!targetElement.querySelector(".crs_discount_row")) {
            targetElement.querySelector(".subtotal").insertAdjacentHTML(
              "beforebegin",
              ` ${getDiscount}
              <div class="crs_discount_row">
                <input type="text" placeholder="Apply discount code" onclick="pushDataLayer(['exp_inc_soc_trus_inp_applycode_cart', 'Apply discount code', 'Input', 'Cart'])">
                <button type="button">Apply</button>
              </div>`
            );
          }

          // targetElement.querySelector(".crs_discount").hidden =
          //   sessionStorage.getItem("crsDiscount") ||
          //   targetElement.querySelector(".crs_regular")
          //     ? true
          //     : false;

          if (
            !sessionStorage.getItem("crsDiscount") &&
            targetElement.querySelectorAll(".block-content .subtotal").length <
              2 &&
            targetElement.querySelector(".crs_discount")
          ) {
            targetElement
              .querySelector(".crs_discount")
              .addEventListener("click", (e) => {
                e.stopImmediatePropagation();

                e.currentTarget.hidden = true;

                targetElement
                  .querySelector(".crs_discount_row")
                  .classList.add("active");

                pushDataLayer([
                  "exp_inc_soc_trus_lin_cart_discou",
                  "Get  discount",
                  "Link",
                  "Cart",
                ]);
              });
          }

          targetElement
            .querySelector(".crs_discount_row button")
            .addEventListener("click", (e) => {
              e.stopImmediatePropagation();
              if (
                targetElement
                  .querySelector(".crs_discount_row input")
                  .value.toLowerCase() == "welcome10"
              ) {
                targetElement
                  .querySelector(".crs_discount_row")
                  .classList.remove("crs_error", "active");

                sessionStorage.setItem("crsDiscount", true);

                isSaved = false;

                setSaved(targetElement, price);
              } else {
                targetElement
                  .querySelector(".crs_discount_row")
                  .classList.add("crs_error");
              }

              pushDataLayer([
                "exp_inc_soc_trus_but_apply_cart",
                "Apply",
                "Button",
                "Cart",
              ]);
            });

          if (
            targetElement.querySelector(".shipping-costs .shipping-costs-desc")
          ) {
            targetElement
              .querySelector(".shipping-costs .shipping-costs-desc")
              .addEventListener("click", (e) => {
                e.stopImmediatePropagation();
                targetElement
                  .querySelector(".shipping-costs")
                  .classList.toggle("active");
              });
          }
        
          if (isSaved == true) return;

          setSaved(targetElement, price);
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
          .querySelector(".product-info-main .crs_klarna")
          .insertAdjacentHTML("afterend", getDiscount);

          const waitForDiscount = setInterval(() => {
            if (
              document.querySelector("body > div > button.needsclick") &&
              document
                .querySelector("body > div > button.needsclick")
                .innerText.includes("10% OFF")
            ) {
              clearInterval(waitForDiscount);

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
            let icon = item.innerText.toUpperCase().includes("GIFT")
              ? dataIcons.giftIcon
              : dataIcons.personalisationIcon;

            item
              .querySelector("a.product-modal-options-btn")
              .insertAdjacentHTML("afterbegin", icon);

            item
              .querySelector(".price-notice")
              .insertAdjacentHTML(
                "afterend",
                `<span class="ml-2">${dataIcons.infoIcon}</span>`
              );

            item.querySelector("li > a:last-child").innerHTML =
              dataIcons.checkIcon;

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

              console.log(selectedOption);

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
              pushDataLayer([
                "exp_inc_soc_trus_acc_pdpdeli_click",
                "Click",
                "Accordion",
                "PDP You get FREE EXPRESS UK Delivery",
              ]);
            });
        });
        waitForElement(".msb-product-details-col-left").then((el) => {
          el.insertAdjacentHTML(
            "beforebegin",
            `<h3 class="crs_about">About ${
              document.querySelector(
                ".product-info-main .page-title-wrapper .page-title"
              ).innerText
            }</h3>`
          );
        });

        waitForElement(
          ".product-info-main .price-box .price-wrapper .price"
        ).then((el) => {
          document.body.insertAdjacentHTML(
            "beforeend",
            setStickyBtn(
              document.querySelector(
                ".product-info-main .page-title-wrapper .page-title"
              ).innerText,
              document.querySelector(
                ".product-info-main .page-title-wrapper .product-name-sub"
              ).innerText
            )
          );

          let stickyBlock = document.querySelector(".crs_sticky");
          let btnAddToCart = document.querySelector(".product-options-bottom");

          let clickAddToCart = false;
          stickyBlock.querySelector("button").addEventListener("click", () => {
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
              isSaved = false;
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

            if (media) {
              if (btnRect.top >= 0 && btnRect.bottom <= window.innerHeight) {
                stickyBlock.classList.remove("active");
              } else {
                stickyBlock.classList.add("active");
              }
            } else {
              if (btnRect.bottom > 50) {
                stickyBlock.classList.remove("active");
              } else {
                stickyBlock.classList.add("active");
              }
            }
          }

          window.addEventListener("scroll", handleScroll);

          handleScroll();
        });
      }

      if (location.href.includes("/checkout/")) {
        if (sessionStorage.getItem("crsDiscount")) {
          sessionStorage.removeItem("crsDiscount");

          fetch(
            `https://www.maxwellscottbags.com/rest/default/V1/guest-carts/${window.checkoutConfig.quoteData.entity_id}/coupons/welcome10`,
            {
              method: "PUT",
            }
          ).then((data) => {
            window.location.reload();
          });
        }

        document.body.insertAdjacentHTML(
          "afterend",
          `<style>
            .checkout-header-container {
                margin-bottom: 20px!important;
            }
            .crs_info {
                max-width: 650px;
                width: 100%;
            }
            .crs_highlight {
              margin: 22px 0 30px;
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

      let findUsedDiscount = setInterval(() => {
        if (document.querySelector('form.needsclick.kl-private-reset-css-Xuajs1[data-testid="klaviyo-form-YaXKHq"]') && document.querySelector('form.needsclick.kl-private-reset-css-Xuajs1[data-testid="klaviyo-form-YaXKHq"]').innerText.includes('WELCOME10')) {
          clearInterval(findUsedDiscount)
          sessionStorage.setItem("crsDiscount", true)
        }
      });

      let changeStateDiscountBtn = setInterval(() => {
        if (document.querySelector('.crs_discount > span') && sessionStorage.getItem("crsDiscount")) {
          clearInterval(changeStateDiscountBtn)
          document.querySelector('.crs_discount > span').innerHTML = '10% discount will be applied at Checkout'
        }
      })

      waitForElement(".header-right-block > ul > .minicart-wrapper").then(
        (cartElement) => {
          cartElement
            .querySelector(".block-minicart")
            .addEventListener("click", (e) => {
              if (e.target.classList.contains("block-minicart") || e.target.classList.contains('close')) {
                cartElement.classList.remove("active");
              }
            });

          cartElement
            .querySelector(".showcart")
            .addEventListener("click", (e) => (isSaved = false));

          // Create a Mutation Observer to watch for changes in the cart.
          const cartObserver = new MutationObserver(handleCartMutation);

          // Define the options for the Mutation Observer.
          const observerOptions = {
            childList: true,
            subtree: true,
            attributes: true,
          };

          // Start observing the cart element.
          cartObserver.observe(cartElement, observerOptions);
        }
      );

      waitForElement(".mobile-basket-block").then((cartElement) => {
        // Create a Mutation Observer to watch for changes in the cart.

        const appHeight = () => {
          cartElement.style.height = window.innerHeight + "px";
        };
        window.addEventListener("resize", appHeight);
        appHeight();

        document
          .querySelector(".mobile-basket__btn")
          .addEventListener("click", (e) => (isSaved = false));

        let checkShowPopup = setInterval(() => {
          if (cartElement.classList.contains("active") && media) {
            document.body.classList.add("crs_fixed");
          } else {
            document.body.classList.remove("crs_fixed");
          }
        });

        const cartObserver = new MutationObserver(handleCartMutation);

        // Define the options for the Mutation Observer.
        const observerOptions = {
          childList: true,
          subtree: true,
          attributes: true,
        };

        // Start observing the cart element.
        cartObserver.observe(cartElement, observerOptions);
      });
    }
  }, 0);
}

let optionMut = {
  childList: true,
  subtree: true,
  attributes: true,
};

let mut = new MutationObserver(function (muts) {
  if (document.querySelectorAll(".h-calc_1")) {
    mut.disconnect();
    document.querySelectorAll(".h-calc_1").forEach((el) => {
      setHeight(el, el.dataset.index);
    });
  }
  mut.observe(document, optionMut);
});
mut.observe(document, optionMut);
//https://www.maxwellscottbags.com/rest/default/V1/guest-carts/FJWCeu7peZgfWDcl6DyPCtmxd7su6zLA/coupons/25OFF

//https://www.maxwellscottbags.com/rest/default/V1/carts/mine/coupons/25OFF

//https://www.maxwellscottbags.com/rest/default/V1/guest-carts/onAlsUb4dbNo5qRiSxzr06RFwcrUghPd/coupons/25OFF

// fetch('https://www.maxwellscottbags.com/rest/default/V1/guest-carts/onAlsUb4dbNo5qRiSxzr06RFwcrUghPd/coupons/25OFF', {

//     method: 'PUT'
// }).then(data => console.log(data))
