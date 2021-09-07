//styles 
document.body.insertAdjacentHTML('afterbegin',`
<style>
    .free-samples-modal div.right,  #address-full-container, [hidden], .freesamples-index-index .guest-order .actions-toolbar .note{
        display: none;
    }
    .modal-popup-htm.modal-popup~.modals-overlay {
        background-color: rgba(0,0,0,0.2)!important;
    }
    .information-block {
        justify-content: space-between;
    }
    .free-samples-modal .information-block img {
        width: 100%;
        left: 0;
        transform: none;
        max-width: 199px;
        object-fit: contain;
        height: auto;
    }
    .imgs-block img {
        margin: 10px 0;
        display: block;
        width: 110px!important;
    }
    .imgs-block img:first-child {
        width: 112px!important;
    }
    .freesamples-index-index div.guest-order {
        order: 0;
    }
    .freesamples-index-index .product-items {
        height: auto;
    }
    .freesamples-index-index .samples-block {
        padding-bottom: 5px;
        position: relative;
        border-bottom: none;
        margin-bottom: 50px;
        border-radius: 0;
    }
    .products-grid.wishlist .samples-block:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -12px;
        height: 0;
        width: 100%;
        border-bottom: 1px dashed #e8e8e8;
    }
    .freesamples-index-index .products-grid.wishlist .product-items li .product-item-info .product-image-photo{
        width: 80px;
        height: 80px;
    }
    .freesamples-index-index .product-items .product-item .product-item-photo {
        width: 80px;
        margin-right: 10px;
    }
    .freesamples-index-index .guest-order .actions-toolbar button {
        font-weight: 500;
        font-family: 'Barlow-medium';
        height: auto;
        margin: 10px 0;
    }
    .freesamples-index-index .guest-order .fieldset {
        padding: 25px 0 0;
        border: none;
    }
    #order_form {
        border: 1px solid #e8e8e8;
        border-radius: 0 0 8px 8px;
        padding: 0 15px;
    }
    .free-samples-modal .block-content .th-button-order {
        position: inherit;
        width: 100%;
    }
    .free-samples-modal .block-content button {
        height: auto;
        font-weight: 500;
        font-family: 'Barlow-medium', sans-serif;
        margin: 6px 0;
    }
    .free-samples-modal .block-content .th-button-order:before{
        pointer-events: none;
    }
    .free-samples-modal .information-block {
        border-bottom: none;
    }
    .free-samples-modal .samples-block {
        border-top: none;
    }
    .free-samples-modal .block-content .th-button-carry {
        margin-bottom: 6px; 
    }
    .modal-slide._inner-scroll .modal-inner-wrap {
        overflow-y: auto;
    }
    .free-samples-modal .samples-block-wrapper {
        padding-bottom: 0
    }
</style>`);

//pdp 
if (document.querySelector('.product-mobile-title')) {
    //styles 
    document.body.insertAdjacentHTML('afterbegin',`
    <style>
        body:not(.freesamples-index-index):not(.lightcheckout-index-index):not(.checkout-onepage-success):not(.checkout-klarna-index) .page-header {
            z-index: 9999999;
        }
        .bottom-actions__row {
            margin-right: auto;
        }
        .wishlist-mobile-wrap, .bottom-actions__row .product-social-links, .bottom-actions__row .box-tocart {
            display: none; }
        .sticky-btns {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #FFFFFF;
            padding: 16px;
            display: flex;
            z-index: 999999;
        }
        .sticky-btns button {
            border-radius: 8px;
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            letter-spacing: 0.180451px;
            color: #232849;
            width: calc(50% - 5px);
            margin-right: 10px;
            text-transform: uppercase;
            font-family: 'Barlow-medium';
        }
        .sticky-btns button:last-child  {
            margin-right: 0;
        }
        .btn-white {
            border: 2px solid #232849;
            line-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .btn-yellow {
            background: #FFD553;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
            line-height: 48px;
        }
        .sticky-btns .icon-love {
            margin-right: 8px;
            width: 20px;
            height: 20px;}
    </style>`);

    // create/add sticky btns
    document.body.insertAdjacentHTML('beforeend',`
    <div class="sticky-btns">
        <button type="button" class="btn-white">ORDER FREE SAMPLE</button>
        <button type="button" class="btn-yellow">ADD TO BASKET</button>
    </div>`)

    //check saved or not
    if (document.querySelector('.wishlist-mobile-wrap .towishlist').classList.contains('active')) {
        document.querySelector('.sticky-btns .btn-white').classList.add('saved');
        document.querySelector('.sticky-btns .btn-white').innerHTML = `
        <svg class="icon-love" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 422.448 422.448" style="enable-background:new 0 0 422.448 422.448;" xml:space="preserve">
            <path style="fill:#ff4c66;" d="M387.15,59.153c-47.066-47.065-123.374-47.065-170.44,0l-4,4l-4-4
            C163.342,10.448,87.081,7.742,38.376,53.109s-51.412,121.628-6.044,170.334c1.885,2.023,3.839,3.981,5.858,5.871l170.8,170.8
            c2.018,1.981,5.217,2.085,7.36,0.24l170.8-170.8c47.065-47.066,47.065-123.374,0-170.44L387.15,59.153z"/>
        </svg>
        SAVED`;
    }

    //click on ORDER FREE SAMPLE
    document.querySelector('.sticky-btns .btn-white').addEventListener('click', (e) => {
        e.target.classList.toggle('saved');
       
        if (e.target.classList.contains('saved')) {
            e.target.innerHTML = `
            <svg class="icon-love" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 422.448 422.448" style="enable-background:new 0 0 422.448 422.448;" xml:space="preserve">
                <path style="fill:#ff4c66;" d="M387.15,59.153c-47.066-47.065-123.374-47.065-170.44,0l-4,4l-4-4
                C163.342,10.448,87.081,7.742,38.376,53.109s-51.412,121.628-6.044,170.334c1.885,2.023,3.839,3.981,5.858,5.871l170.8,170.8
                c2.018,1.981,5.217,2.085,7.36,0.24l170.8-170.8c47.065-47.066,47.065-123.374,0-170.44L387.15,59.153z"/>
            </svg>
            SAVED`;
        } else {
            e.target.innerHTML = 'ORDER FREE SAMPLE';
        }
        document.querySelector('.wishlist-mobile-wrap .towishlist').click();
    })
    //click on ADD TO BASKET 
    document.querySelector('.sticky-btns .btn-yellow').addEventListener('click', () => {
        document.querySelector('#product-addtocart-button').click();
    })

}

//MutationObserver
let mut = new MutationObserver(function (muts) {
    //Your Free Sample Order Swatch
    if (document.querySelector('.information-block')) {
        mut.disconnect();
        document.querySelector('.information-block').insertAdjacentHTML('beforeend',`<div class="imgs-block"><img src="https://conversionratestore.github.io/projects/makemyblinds/img/excellent.png" alt="Excellent"><img src="https://conversionratestore.github.io/projects/makemyblinds/img/delivered.png" alt="delivered"></div>`)     
        document.querySelector('.information-block-wrapper .th-button-carry').before(document.querySelector('.samples-block-wrapper .th-button-order'));
        document.querySelector('.information-block-wrapper .th-button-carry').innerHTML = 'SAVE & KEEP LOOKING';

        //create/add block "You may also like to add"
        document.querySelector('.block-content').insertAdjacentHTML('beforeend',`
        <div>
            <h2>You may also like to add</h2>
            <ol class="product-like-items"></ol>
        </div>`);
        let list = `<li class="product-like-item">
            <div class="product-item-info">
                <a class="product-item-photo" href="${}" title="${}">
                    <div class="product-image-container">
                        <div class="product-image-wrapper">
                            <img class="product-image-photo" src="${}" alt="${}">
                        </div>
                    </div>
                </a>

                <div class="product-item-details">
                    <a class="product-item-name-link" href="${}">${}</a>
                    <span class="product-item-name">${}</span>
                    <div class="actions">
                        <a class="view" href="${}">View product</a>
                        <button type="button" class="button-yellow">ADD FREE SAMPLE</button>
                    </div>
                </div>
            </div>
        </li>`;
    }
});

mut.observe(document, {
    childList: true,
    subtree: true
});

if (window.location.pathname.includes('freesamples')) { 
    document.querySelector('.guest-order .header-wrapper').innerHTML = '1/2. Personal Info';
    document.querySelectorAll('.guest-order .field')[2].style.display = 'none';
    document.querySelector('.actions-toolbar').insertAdjacentHTML('afterbegin',`<button type="button" class="button-yellow">CONTINUE</button>`);
    document.querySelectorAll('#order_form .actions-toolbar button')[1].hidden = true;
    // $( 'form.order-recipient' ).submit( function( event ) {
    //     event.preventDefault();
    //
    //     //validate fields
    //     let fail = false;
    //     let fail_log = '';
    //     let name;
    //     $(this).find( 'select, textarea, input' ).each(function(){
    //         if( ! $( this ).prop( 'required' )){
    //
    //         } else {
    //             if ( ! $( this ).val() ) {
    //                 fail = true;
    //                 name = $( this ).attr( 'name' );
    //                 fail_log += name + " is required \n";
    //             }
    //
    //         }
    //     });
    //
    //     //submit if fail never got set to true
    //     if ( ! fail ) {
    //         //process form here.
    //         $('#order-recipient').removeClass('active');
    //         $('.express-checkout').css('display','none');
    //         $('.userLoginForm ').removeClass('active');
    //         $('#shipping-address').css('display','block');
    //         $('.cart-steps__main-block .step.step-active').removeClass('step-active');
    //         $('.cart-steps__main-block .step').eq(1).removeClass('step-next').addClass('step-active');
    //     } else {
    //         alert( fail_log );
    //     }
    //
    // });
}
