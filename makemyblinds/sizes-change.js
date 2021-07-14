window.onload  = function () {
document.body.insertAdjacentHTML('afterbegin', `
<style>
@media screen and (max-width: 767px) {
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
   .catalog-product-view #product-options-wrapper .scaled-custom-field label {
    position: relative;
    width: calc(100% - 218px);
   }
   #product-options-wrapper .scaled-custom-field label:before {
        content: '';
        position: absolute;
        right: 20%;
        top: 50%;
        transform: translateY(-50%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 24px;
        background-image: url('https://conversionratestore.github.io/projects/makemyblinds/img/width.svg');
    }
     #product-options-wrapper .scaled-custom-field:nth-child(4) label:before {
        background-image: url('https://conversionratestore.github.io/projects/makemyblinds/img/height.svg');
    }
    .options-fields .option-field {
        border-bottom: 1px solid #cecece;
        padding: 4px 0 16px;
        width: 100%;
    }
    .options-fields .option-field>label.label {
        font-size: 1.125em;
        margin: 5px 0 1px;
    }
    .options-fields label.label {
        display: flex;
        align-items: flex-end;
        font-family: 'Barlow-medium',Arial,Helvetica,sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        text-transform: uppercase;
    }
    .options-fields .tooltip-question {
        float: right;
        width: auto;
        height: auto;
        border: none;
        text-align: left;
        border-radius: 0;
        margin-left: 6px;
        font-family: 'overpass-light',Arial,Helvetica,sans-serif;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        text-transform: none;
    }
   .options-fields .bottom-actions__row .btn, .btn-get-instant{
        width: 100%;
        font-family: 'Barlow-medium', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        text-align: center;
        letter-spacing: 0.180451px;
        color: #232849;
        margin-top: 25px;
   }
   .options-fields .price-label, .options-fields .price-original{
        display: none;
   }
   .options-fields .price-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
   }
   .options-fields .price-wrapper  {
         font-family: 'Barlow-medium',Arial,Helvetica,sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 49px;
        line-height: 59px;
        text-align: right;
        letter-spacing: -0.005em;
        color: #232849;
   }
   .options-fields .your-text {
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 31px;
        letter-spacing: 0.0015em;
        color: #232849;
   }
    .btn-get-instant {
        margin: 0;
    }
    .options-fields {
        opacity: 0;
        height: 0;
        transition: all 0.3s ease;
    }
    .options-fields.active {
        height: 427px;
        opacity: 1;
    }
    .product-options-wrapper .tooltip-question {
        color: transparent;
        width: 24px;
        height: 24px;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/info.svg') no-repeat center / contain;
    }
}
</style>`);

document.querySelector('.product-details').insertAdjacentHTML('afterbegin', `<div class="product-options"></div>`);
document.querySelector('.product-options').insertAdjacentHTML('afterbegin', `<div class="from-price">${document.querySelector('.product-info-price').innerHTML}</div>`);
document.querySelector('.from-price').after(document.querySelector('.product-social-links'));
document.querySelector('.htm-trigger').insertAdjacentHTML('beforebegin', `<p class="product-options-text">Enter your <span> width </span>  and <span> drop </span> to get a price</p>`);
document.querySelector('.htm-trigger').after(document.querySelector('.pill'));
document.querySelector('.product-options-wrapper').insertAdjacentHTML('afterend', `<div class="options-fields"><div class="option-after"></div></div>`);
document.querySelector('.option-after').after(document.querySelector('.bottom-actions__row'));
document.querySelector('.option-after').after(document.querySelectorAll('.catalog-product-view #product-options-wrapper .option-field')[2]);
document.querySelector('.option-after').after(document.querySelectorAll('.catalog-product-view #product-options-wrapper .option-field')[1]);
document.querySelector('.options-fields .price-wrapper ').insertAdjacentHTML('beforebegin','<span class="your-text">Your price: </span>');
document.querySelector('.options-fields').insertAdjacentHTML('beforebegin','<button type="button" class="btn-get-instant btn primary">GET INSTANT PRICE</button>');
document.querySelector('.btn-get-instant').addEventListener('click', (e) => {
    document.querySelectorAll('.product-options-wrapper .product-custom-option.input-text').forEach((el) => {
        if (el.value == '') {
            el.classList.add('mage-error');
            el.insertAdjacentHTML('afterend','<div for="options_112620_text" generated="true" class="mage-error" id="options_112620_text-error" style="display: block;">This is a required field.</div>')
        } else {
            el.classList.remove('mage-error');
            el.classList.add('valid');
            el.closest('.control').querySelector('.mage-error').style.display = 'none';
            e.target.hidden = true;
            document.querySelector('.options-fields').classList.add('active');
        }
    });
});
};
