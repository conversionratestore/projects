let mut = new MutationObserver(function (muts) {
    if(document.querySelector('.pill') && document.querySelectorAll('.spec-table__inner__table tr')) {
        mut.disconnect();
        document.querySelectorAll('.spec-table__inner__table tr').forEach((el) => {
            if (el.querySelector('th').innerHTML === 'Great For:') {
                if (el.querySelector('td').innerHTML != 'Attic/Loft') {
                    document.body.insertAdjacentHTML('afterbegin', `
                <style>
                    .product-options-bottom {
                        display: none;}
                    .wishlist-mobile-wrap {
                        display: none;}
                    .product-options {
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                        padding-top: 10px;
                        margin-bottom: 28px;}
                    .product-options .price-label {
                        margin-bottom: 7px;
                        display: block;
                        font-size: 16px;
                        line-height: 150%;
                        letter-spacing: 0.15px;
                        color: #232849;}
                    .from-price .price-original {
                        text-decoration: line-through;
                        display: none; }
                    .from-price {
                        font-weight: 500;
                        padding-right: 7px;
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
                        color: #232849;}
                    .product-options-text span {
                        font-family: 'Barlow-medium', sans-serif;
                        text-transform: uppercase;}
                   .htm-trigger {
                       margin: 25px 0;}
                   .pill {
                        float: initial!important;
                        width: fit-content;
                        position: relative;
                        z-index: 2;
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
                        width: 100%;}
                    .scaled-custom-field .control  {
                        max-width: 218px;}
                   .catalog-product-view #product-options-wrapper .fieldset {
                    width: 100%;}
                   .catalog-product-view #product-options-wrapper .scaled-custom-field {
                        width: 100%;
                        max-width: 416px;}
                   .catalog-product-view #product-options-wrapper .scaled-custom-field label {
                    position: relative;
                    width: calc(100% - 218px);}
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
                        background-image: url('https://conversionratestore.github.io/projects/makemyblinds/img/width.svg');}
                     #product-options-wrapper .scaled-custom-field:nth-child(4) label:before {
                        background-image: url('https://conversionratestore.github.io/projects/makemyblinds/img/height.svg');}
                    .options-fields .option-field {
                        border-bottom: 1px solid #cecece;
                        padding: 4px 0 16px;
                        width: 100%;}
                    .options-fields .option-field>label.label {
                        font-size: 1.125em;
                        margin: 5px 0 1px;}
                    .options-fields label.label {
                        display: flex;
                        align-items: flex-end;
                        font-family: 'Barlow-medium',Arial,Helvetica,sans-serif;
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 24px;
                        text-transform: uppercase;}
                    .options-fields .tooltip-question {
                        float: right;
                        border: none;
                        margin-left: 6px;
                        color: transparent;
                        width: 24px;
                        height: 24px;
                        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/info.svg') no-repeat center / contain;}
                   .options-fields .bottom-actions__row .btn, .btn-get-instant{
                        width: 100%;
                        font-family: 'Barlow', sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 120%;
                        text-align: center;
                        letter-spacing: 0.180451px;
                        color: #232849;}
                   .options-fields .price-original{
                        display: none;}
                   .options-fields .price-container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;}
                   .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-wrapper {
                        font-family: 'Barlow-medium',Arial,Helvetica,sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 49px;
                        line-height: 50px;
                        text-align: right;
                        letter-spacing: -0.005em;
                        color: #232849;}
                   .catalog-product-view .product-info-main .product-details .bottom-actions .price-container {
                        justify-content: space-between;
                        align-items: flex-end; }
                   .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-label {
                        font-family: 'Barlow', sans-serif;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 26px!important;
                        line-height: 31px;
                        letter-spacing: 0.0015em;
                        color: #232849;
                        margin-right: 8px;}
                   .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .product-social-links, .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
                        padding-bottom: 0!important;}
                   .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
                        margin-top: 7px; }
                    .btn-get-instant {
                        margin: 0 0 25px 0; }
                    .options-fields {
                        width: 100%;
                        opacity: 0;
                        height: 0;
                        pointer-events: none;
                        transition: all 0.3s ease;}
                    .options-fields.active {
                        height: 100%;
                        opacity: 1;
                        pointer-events: auto;}
                    .catalog-product-view .product-info-main .product-details .page-title-wrapper h1 {
                        margin-bottom: 15px;}
                    .product-delivery-date__fast-track {
                        flex: 1;
                        background-color: #6cc;
                        padding: 10px 18px;
                        color: #fff;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 51px;
                        margin-bottom: 15px;}
                    .catalog-product-view #product-options-wrapper .tooltip-question {
                        width: 20px;
                        height: 20px; }
                @media screen and (min-width: 992px) {
                    .catalog-product-view .product-info-main .product-details .bottom-actions .price-container {
                        flex-direction: row;}
                    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .product-info-price {
                        padding-bottom: 0!important; } 
                    .options-fields .option-field {
                        flex-direction: row;
                        align-items: center;}
                    .options-fields .option-field>label.label {
                        margin: 5px 0;}
                    .options-fields label.label {
                        width: 40%; }
                    .options-fields .control {
                        width: 60%; }
                    .field.choice .label {
                        width: 100%;}
                    .options-list {
                        display: flex;
                        flex-wrap: wrap;}
                    .bottom-actions__row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between; }
                    .options-fields .bottom-actions__row .btn, .btn-get-instant {
                        margin-top: 0;
                        max-width: 212px;
                        min-width: 100%;}
                    .options-fields .price-container {
                        align-items: flex-end;}
                    ul.pill {
                        float: right!important;
                        margin: 20px 0; }
                    .htm-trigger {
                        float: left;
                        width: fit-content;}
                }
                @media screen and (max-width: 768px) {
                    .hp_strip__container {
                        margin: 0 -16px;
                        width: calc(100% + 32px);}
                    .hp_strip__container ul i {
                        display: block;}
                }
                @media screen and (min-width: 576px) {
                    #product-options-wrapper .scaled-custom-field label:before {
                        right: 34%; }
                }
                @media screen and (max-width: 360px) {
                    .product-options .btn {
                        padding: 14px 10px;}
                    .scaled-custom-field .control {
                        max-width: 190px;}
                    .catalog-product-view #product-options-wrapper .scaled-custom-field label {
                        width: calc(100% - 190px);}
                }
                </style>`);

                    document.querySelector('.page-title-wrapper').insertAdjacentHTML('afterend', `<div class="product-options"></div>`);
                    document.querySelector('.product-options').insertAdjacentHTML('afterbegin', `<div class="from-price"><p class="price-label">From</p>${document.querySelector('.product-info-price .price-wrapper .price').innerHTML}</div>`);
                    document.querySelector('.from-price').after(document.querySelector('.product-social-links'));
                    document.querySelector('.htm-trigger').insertAdjacentHTML('beforebegin', `<p class="product-options-text">Enter your <span> width </span>  and <span> drop </span> to get a price</p>`);
                    document.querySelector('.htm-trigger').after(document.querySelector('.pill'));
                    document.querySelector('.product-options-wrapper .fieldset').insertAdjacentHTML('beforeend', `<div class="options-fields"><div class="option-after"></div></div>`);
                    // document.querySelector('.option-after').after(document.querySelector('.product-options-bottom'));
                    if (document.querySelector('.product-delivery-date')) {
                        document.querySelector('.hp_strip__container').before(document.querySelector('.product-delivery-date'));
                    }
                    let option = document.querySelectorAll('.catalog-product-view #product-options-wrapper .option-field');
                    for (let i = 0; i < option.length; i++) {
                        if (!option[i].classList.contains('unit-select')) {
                            document.querySelector('.option-after').before(option[i]);
                        }
                    }
                    document.querySelector('.options-fields').insertAdjacentHTML('beforebegin', '<button type="button" class="btn-get-instant btn primary">GET INSTANT PRICE</button>');
                    document.querySelectorAll('.product-options-wrapper .product-custom-option.input-text').forEach((el) => {
                        el.insertAdjacentHTML('afterend', `<div for="${el.getAttribute('id')}" generated="true" class="mage-error" id="${el.getAttribute('id')}-error" style="display: none;">This is a required field.</div>`)
                    });
                    document.querySelector('.btn-get-instant').addEventListener('click', (e) => {
                        if (window.matchMedia("(max-width: 768px)").matches) {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp — PDP sizes change improvement mobile',
                                'eventAction': 'Click on Get instant price button'
                            });
                        } else {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp — PDP sizes change improvement desktop',
                                'eventAction': 'Click on Get instant price button'
                            });
                        }
                        document.querySelectorAll('.product-options-wrapper .product-custom-option.input-text').forEach((el) => {
                            if (el.value == '') {
                                el.classList.remove('valid');
                                el.classList.add('mage-error');
                                el.closest('.control').querySelector('div.mage-error').style.display = 'block';
                            } else {
                                el.classList.remove('mage-error');
                                el.classList.add('valid');
                                el.closest('.control').querySelector('div.mage-error').style.display = 'none';
                                if (!document.querySelector('.product-options-wrapper .product-custom-option.input-text.mage-error')) {
                                    e.target.hidden = true;
                                    document.querySelector('.options-fields').classList.add('active');
                                    document.querySelector('.product-options-bottom').style.display = 'block';
                                    document.querySelector('.product-options .from-price').style.opacity = '0';
                                }
                            }
                        });
                    });

                    document.querySelector('.options-fields #product-addtocart-button').addEventListener('click', () => {
                        if (window.matchMedia("(max-width: 768px)").matches) {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp — PDP sizes change improvement mobile',
                                'eventAction': 'Click on Add to basket new'
                            });
                        } else {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp — PDP sizes change improvement desktop',
                                'eventAction': 'Click on Add to basket new'
                            });
                        }
                    })
                }
            }
        });
    }

});

mut.observe(document, {
    childList: true,
    subtree: true
});

if (window.matchMedia("(max-width: 768px)").matches) {
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1709958,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pdp_sizes_change_mobile');

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP sizes change improvement mobile',
        'eventAction': 'loaded'
    });
} else {
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1709958,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pdp_sizes_change_desktop');

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP sizes change improvement desktop',
        'eventAction': 'loaded'
    });
}
