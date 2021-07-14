document.body.insertAdjacentHTML('afterbegin',`
<style>
    .wishlist-mobile-wrap {
        display: none;}
    .product-options {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 28px;}
    .product-options .price-label {
        display: block;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.15px;
        color: #232849;}
    .from-price .price-original {
        text-decoration: line-through;
        display: none; }
    .from-price .price {
        font-weight: 500;
        font-size: 49px;
        line-height: 40px;
        letter-spacing: -0.005em;
        color: #232849;
        font-family: 'Barlow-medium', sans-serif;}
    .product-options .btn {
        padding: 14px 25px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        width: 100%!important;
        font-family: 'Barlow', sans-serif;}
    .product-options .product-social-links {
        max-width: 185px;
        width: 100%; }
    .product-options-text {
        font-family: 'Overpass', sans-serif;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.180451px;
        color: #232849;
        text-align: center;}
    .product-options-text span {
        font-family: 'Barlow-medium', sans-serif;
        text-transform: uppercase;}
   .htm-trigger {
       margin: 25px 0;}
   .pill {
        float: initial!important;
        width: fit-content;
        margin: 0 auto;}
   ul.pill a {
        font-family: 'Overpass', sans-serif;
        font-size: 16px;
        line-height: 35px;
        letter-spacing: 0.15px;
        width: 40px;
        text-align: center; }
   .scaled-custom-field i {
        display: none;}
   .scaled-custom-field {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 0 24px 0!important;
        width: 100%;
   }
    .scaled-custom-field .control  {
        max-width: 218px;
   }
   .catalog-product-view #product-options-wrapper .fieldset {
    width: 100%;
   }
</style>`);

document.querySelector('.product-details').insertAdjacentHTML('afterbegin',`<div class="product-options"></div>`);
document.querySelector('.product-options').insertAdjacentHTML('afterbegin',`<div class="from-price">${document.querySelector('.product-info-price').innerHTML}</div>`);

document.querySelector('.from-price').after(document.querySelector('.product-social-links'));
document.querySelector('.htm-trigger').insertAdjacentHTML('beforebegin', `<p class="product-options-text">Enter your <span> width </span>  and <span> drop </span> to get a price</p>`);

document.querySelector('.htm-trigger').after(document.querySelector('.pill'));
