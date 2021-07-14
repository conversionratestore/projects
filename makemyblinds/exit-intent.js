document.body.insertAdjacentHTML('afterbegin', `
<style>
    .product-mobile-title .wishlist-mobile-wrap {
        display: none; }
    .catalog-product-view .product-info-main .media {
        position: relative;
    }
    .product-great {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 3;
        padding: 0 15px 0 5px;
     }
    .product-great-item {
        background: #66CCCC;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 19px;
        padding: 7.5px 8px;
        margin-left: 10px;
        margin-bottom: 10px;
        letter-spacing: 0.15px;
        color: #232849;
        font-size: 14px;
    }
    .product-options-wrapper, .htm-trigger, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-label, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-original {
        display: none;
    }
    .your-text {
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 1;
        letter-spacing: 0.0015em;
        color: #232849;
        margin-right: 8px;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .price-container {
        flex-direction: row;
        align-items: center;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row {
        display: block;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .btn {
        width: 100%;
        margin: 0;
    }
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
        margin-top: 0!important;
    }
</style>`)

// document.querySelector('.product-details-info').insertAdjacentHTML('afterbegin', document.querySelector('.product-options-bottom'));
document.querySelector('.product.media').insertAdjacentHTML('afterbegin', `<div class="product-great"></div>`);
document.querySelector('.catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-wrapper').insertAdjacentHTML('beforebegin', `<p class="your-text">Your price </p>`);

let arrGreatFor = [];

document.querySelectorAll('.spec-table__inner__table tr').forEach((el, index) => {
    if(el.querySelector('th').innerHTML === 'Great For:') {
        let tdSplit = el.querySelector('td').innerHTML.split(', ');
        console.log(tdSplit);
        for (let i = 0; i < tdSplit.length; i++) {
            arrGreatFor.push(tdSplit[i]);
            document.querySelector('.product-great').insertAdjacentHTML('beforeend', `<div class="product-great-item">${tdSplit[i]}</div>`);
        }
    }
});


