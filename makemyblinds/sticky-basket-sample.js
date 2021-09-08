    //styles
    document.body.insertAdjacentHTML('afterbegin',`
    <style>
        .free-samples-modal div.right, [hidden], .freesamples-index-index .guest-order .actions-toolbar .note{
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
        .free-samples-modal button {
            font-weight: 500;
            font-family: 'Barlow-medium', sans-serif;
            height: auto;
        }
        .free-samples-modal .information-block-wrapper button {
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
        .product-like-item {
            display: flex;
            border-bottom: 1px solid #DDDDDD;
            padding: 16px 0;
        }
        .product-like-item img {
            width: 80px;
            height: 80px;
            margin-right: 10px;
        }
        .product-like-item .product-item-name {
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: 0.0018em;
            padding-top: 3px;
        }
        .product-like-item .product-item-details {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
        }
        .product-like-item .actions {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
        }
        .product-like-item .button-yellow {
            font-size: 12px;
            padding: 7px;
            max-width: 110px;
            margin-top: 0!important;
        }
        .product-like-item .link {
            height: 80px;
        }
        .like-block {
            padding: 35px 0 0;
        }
        .like-block h3 {
            font-weight: 500;
            font-size: 26px;
            line-height: 120%;
            letter-spacing: 0.0015em;
            font-family: 'Barlow', sans-serif;
            text-align: center;
            margin-bottom: 12px;
        }
        @media screen and (max-width: 374px) {
            .free-samples-modal .information-block img {
                max-width: 160px;
            }
            .imgs-block img {
                width: 93px!important;
            }
            .imgs-block img:first-child {
                width: 95px!important;
            }
            .information-block {
                justify-content: space-around;
            }
            .product-like-item img {
                width: 60px;
                height: 60px;
            }
            .product-like-item .link {
                height: 60px;
            }
            .product-like-item .button-yellow {
                max-width: 98px;
            }
            .like-block h3 {
                font-size: 24px;
            }
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
            document.querySelector('#freesamples-modal .block-content').insertAdjacentHTML('beforeend',`
            <div class="like-block">
                <h3>You may also like to add</h3>
                <ol class="product-like-items"></ol>
            </div>`);
            for (let i = 0; i < 4; i++) {
                document.querySelector('.product-like-items').insertAdjacentHTML('beforeend',`
                <li class="product-like-item">
                    <a class="link" href="#" title="title">
                         <img src="https://www.makemyblinds.co.uk/media/catalog/product/cache/4247834bb84982110ac29942aee83e94/1/3/13_bathroom_scene_protruding_slat_serene_08052019_2.png" alt="img">
                    </a>
                    <div class="product-item-details">
                        <span class="product-item-name">name</span>
                        <div class="actions">
                            <a class="view" href="#">View product</a>
                            <button type="button" class="button-yellow">ADD FREE SAMPLE</button>
                        </div>
                    </div>
                </li>`);
            }

        }
    });

    mut.observe(document, {
        childList: true,
        subtree: true
    });

    if (window.location.pathname.includes('freesamples')) {
        //change title form
        document.querySelector('.guest-order .header-wrapper').innerHTML = '1/2. Personal Info';
        //add button continue
        document.querySelector('.actions-toolbar').insertAdjacentHTML('afterbegin',`<button type="button" class="button-yellow btn-continue">CONTINUE</button>`);
        //hidden button send
        document.querySelectorAll('#order_form .actions-toolbar button')[1].hidden = true;

        //add class for step 1
        document.querySelector('#order_form input#first_name').classList.add('step-1');
        document.querySelector('#order_form input#last_name').classList.add('step-1');
        document.querySelector('#order_form input#email_address').classList.add('step-1');
        document.querySelector('#order_form input#phone').classList.add('step-1');

        //add display none for inputs
        document.querySelector('#order_form input#street_1').closest('.field').style.display = 'none';
        document.querySelector('#order_form input#street_2').closest('.field').style.display = 'none';
        document.querySelector('#order_form input#city').closest('.field').style.display = 'none';
        document.querySelector('#order_form input#zip').closest('.field').style.display = 'none';
        // document.querySelectorAll('#order_form input').forEach((el) => {
        //     if (!el.classList.contains('step-1')) {
        //         console.log(el.closest('.field'));
        //         el.closest('.field').style.display = 'none';
        //     }
        // });
        document.querySelector('#address-full-container .field:last-child').after(document.querySelector('#street_1').closest('.field'));
        document.querySelector('#address-full-container .field:last-child').after(document.querySelectorAll('#address-full-container .field')[0]);

        document.querySelector('.btn-continue').addEventListener('click', (e) => {
            document.querySelectorAll('#order_form input').forEach((el) => {
                if (el.classList.contains('step-1') && el.dataset.validate.includes('"required": true')) {
                    if (el.value != '') {
                        console.log('input != ""');
                        el.classList.remove('mage-error');
                        el.removeAttribute('aria-invalid');
                        el.removeAttribute('aria-describedby');
                        el.nextElementSibling.remove();
                        document.querySelector('.guest-order .header-wrapper').innerHTML = '2/2. Delivery Info';
                        el.closest('.field').style.display = 'none';
                        document.querySelector('#order_form input#phone').closest('.field').style.display = 'none';

                        document.querySelector('#order_form input#street_1').closest('.field').style.display = 'block';
                        document.querySelector('#order_form input#street_2').closest('.field').style.display = 'block';
                        document.querySelector('#order_form input#city').closest('.field').style.display = 'block';
                        document.querySelector('#order_form input#zip').closest('.field').style.display = 'block';
                        e.target.hidden = true;
                    } else {
                        console.log('mage-error');
                        el.classList.add('mage-error');
                        el.setAttribute('aria-invalid','true');
                        el.setAttribute('aria-describedby','first_name-error');
                        el.closest('.control').insertAdjacentHTML('beforeend',`<div for="${el.getAttribute('name')}" generated="true" class="mage-error" id="first_name-error">This is a required field.</div>`)
                        el.style.display = 'block';
                    }
                }
            });
        });



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
