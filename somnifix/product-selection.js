let href = window.location.href;

let style = `
<style>
    .select_pack, .aside_product_item, .part1 > .swatchCustom__item {
        display: none!important;
    }
    .parent-items {
        font-weight: 400;
        color: #1E415F;
        display: grid;
    }
    .swatchCustom__item_new {
        padding: 7px 10px!important;
        min-height: 74px;
        background: #fff!important;
        border-radius: 15px;
        margin-bottom: 12px;
        cursor: pointer;
    }
    .mobile .parent-items .swatchCustom__item_new:not(.active) {
        background: #F5F6F7!important;
    }
    .swatchCustom__item_new.active {
        cursor: default;
        background: #F1F7FC!important;
        border: 2px solid #4090D1;
    }
    .top-seller, .best-deal, .sale, .footer-prices .sale {
        font-size: 10px;
        line-height: 14px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 2px 7px;
        margin-bottom: 4px;
        border-radius: 5px;
        width: fit-content;
        margin-left: auto;
    }
    .best-deal {
        background: #1E415F;
    }
    .top-seller {
        background: #3F90D1;
    }
    .sale, .footer-prices .sale {
        font-weight: 500;
        background: #F0752D;
    }
    .months {
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        color: #1E415F;
    }
    .svg-strips {
        margin-right: 24px;
    }
    .swatchCustom__item_new.active .svg-strips path {
        fill: #F0752D
    }
    .swatchCustom__item_new.active {
        border-radius: 15px;
    }
    .mobile .checklist {
        padding-top: 20px;
    }
    .price-js p {
        margin: 0 5px 0 0;
        line-height: 19px;
    }
    .price-js .total_price, .price-js .price_sale {
        font-weight: 700;
        font-size: 16px;
        color: #1E415F;
    }
    .for-week {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 5px;
    }
    .item_total {
        font-size: 13px;
        line-height: 19px;
    }
    .l-through {
        text-decoration-line: line-through;
        color: #5E788D;
    }
    .choose-pack {
        font-size: 14px;
        line-height: 23px;
        margin-top: 10px;
    }
    .footer-prices {
        margin: 22px 0 10px;
    }
    .footer-prices .sale {
        margin-bottom: 8px;
        margin-left: 0;
    }
    .footer-prices p span.l-through {
        font-size: 20px;
        line-height: 38px;
        margin-right: 8px;
    }
    .footer-prices p span:last-child {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #1E415F;
    }
    .mobile .free-shipping-label {
        margin-top: -50px;
        display: block;
        margin-left: auto;
        margin-bottom: 20px;
    }
    .on-card-dwrapper {
        padding: 12px;
    }
    .head-prices .sale {
        margin-left: 0;
        margin-bottom: 6px;
    }
    .head-prices .l-through {
        font-size: 20px;
        line-height: 38px;
        margin-right: 8px;
    }
    .head-prices span:not(.l-through) {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: #1E415F;
    }
    /* slide in */
    .aside_wrapper .swatchCustom__item_new {
        margin: 8px 0;
    }
    .aside_wrapper {
        height: calc(100vh - 48px - 20px - 24px - 264px);
        display: flex;
        flex-direction: column;
        margin-top: 0!important;
        border-radius: 0 0 22px 22px!important;
    }
    .aside_parent {
        display: grid!important;
        border-radius: 22px 22px 0 0;
        margin-top: 20px;
        padding: 14px 14px 0;
        background-color: #F5F6F7;
    }
    .swatchCustom__item_new[data-title="1 Pack"] {
        order: 2; 
        margin-bottom: 0;
    }
    .swatchCustom__item_new[data-title="3 Pack"] {
        order: 1;
    }
    .aside_wrapper .total {
        margin: 16px 0 auto;
    }
    .aside_wrapper .qty {
        margin: 0 auto 25px;
        width: 140px;
    }
    .total .summ {
        display: none;
    }
    .footer-card {
        display: block!important;
    }
    .footer-card .l-through { 
        font-size: 20px;
        padding: 0 3px;
        line-height: 26px;
    }
    .footer-card .prices span:not(.l-through) {
        padding: 0 3px;
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        color: #1E415F;
    }
    .aside_wrapper>button.aside_to_checkout {
        font-family: 'Roboto', sans-serif;
        background: #1E415C;
        border-radius: 100px;
        width: 100%;
        border: none;
        padding: 14px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-top: 10px;
        cursor: pointer;
    }
    .aside_subscribe {
        background: #FEF7E8;
        border: 1px solid #F5F6F7;
        border-radius: 0px 0px 22px 22px;
        padding: 14px;
        margin-bottom: 0;
    }
    .aside_subscribe.desktop  {
        display: none!important;
    }
    .aside_subscribe__header {
        font-weight: 500;
        letter-spacing: initial!important;
    }
    .overflow-bg {
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(3px);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
    }
    .on-open-card .overflow-bg {
        opacity: 1;
        pointer-events: auto;
    }
    .popup_sub button {
        background-color: #1E415C!important;
    }
    /* flex */
    .d-flex {
        display: flex;
    }
    .justify-center {
        justify-content: center;
    }
    .items-center {
        align-items: center!important;
    }
</style>`;

function pushDataLayer(action, label = '') {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: new_product_prices',
        'eventAction': action,
        'eventLabel': label
    });
}
//comes into view
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}
let viewed1 = false;
let viewed2 = false;

function init() {
    let init = setInterval(() => {
        if (href.includes('/products/') && document.querySelector('.part2 .total_price') &&  document.querySelector('.part1 .parent-items .swatchCustom__item_new') == null && document.querySelectorAll('.aside_parent .swatchCustom__item_new') && document.querySelector('.head-prices') == null) {
            
            document.querySelector('.part1').insertAdjacentHTML('beforeend', `<div class="parent-items"></div>`)
            document.querySelector('.middle-block p:first-child b').insertAdjacentHTML('afterend','<span class="price_sale" style="display: block; padding-left: 5px;">(<span>22%</span> OFF)</span>')
            document.querySelector('.part2').insertAdjacentHTML('afterbegin',` 
            <div class="head-prices">
                <div class="sale" style="display: none">Save 22%</div>
                <div class="d-flex"> 
                    <div class="l-through"></div>
                </div>
            </div>`)

            document.querySelector('.head-prices .l-through').after(document.querySelector('.part2 .total_price'))
            document.querySelector('.part2 .total_price').innerHTML = document.querySelector('.part2 .total_price').innerHTML.replace(' USD', '');

            document.querySelector('.part1 .parent-items').innerHTML = document.querySelector('.mobile .parent-items').innerHTML;
            document.querySelector('.part1 .parent-items .swatchCustom__item_new.active').classList.remove('active')
            document.querySelector('.part1 .parent-items .swatchCustom__item_new[data-variant="32115046023283"]').classList.add('active')
        
            addActiveItem(document.querySelector('.part1 .parent-items .swatchCustom__item_new.active'))

            document.querySelectorAll('.parent-items .swatchCustom__item_new').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                    document.querySelector(`.aside_parent .swatchCustom__item_new[data-variant="${item.dataset.variant}"]`).click();
                    addActiveItem(item)
                })
            })

            //subscribe checked 
            document.querySelector(`.desktop .subscribe-custom__checkbox`).addEventListener('change', (e) => {
                let week = document.querySelector(`.desktop .swatchCustom__item_new.active`).dataset.week.split(' ')[0];
            
                if (e.target.checked) {
                    document.querySelector('.head-prices .sale').innerHTML = `Save ${week == '12' ? '30' : week == '52' ? '37' : ''}%`
                } else {
                    document.querySelector('.head-prices .sale').innerHTML = `Save ${week == '12' ? '22' : week == '52' ? '30' : ''}%`
                }
            })

            function eventVisibility() {
                if (document.querySelector('.parent-items .nosale') != null && isScrolledIntoView(document.querySelector('.parent-items .nosale')) == true && viewed1 == false) {
                    setTimeout(() => {
                        if (document.querySelector('.parent-items .nosale') != null && isScrolledIntoView(document.querySelector('.parent-items .nosale')) == true && viewed1 == false) {
                            viewed1 = true;
                            pushDataLayer('Visibility choose your pack', 'PDP')
                        }
                    }, 2000)
                }
            }
            eventVisibility()
            window.addEventListener('scroll', () => eventVisibility())
        }  
        if (document.querySelector('.aside_parent .nosale') && document.querySelectorAll('.aside_parent .swatchCustom__item_new') && document.querySelector('.overflow-bg') == null) {
            clearInterval(init)
            document.body.insertAdjacentHTML('afterbegin',`<div class="overflow-bg"></div>`)
            document.body.insertAdjacentHTML('afterbegin', style);

            document.querySelector('.aside_parent .swatchCustom__item_new.active').classList.remove('active')
            document.querySelector('.aside_parent .swatchCustom__item_new[data-variant="32115046023283"]').classList.add('active')

            document.querySelector('.footer-card .l-through').remove();

            addActiveItem(document.querySelector('.aside_parent .swatchCustom__item_new.active'))

            document.querySelectorAll('.aside_parent .swatchCustom__item_new').forEach(item => {
                item.addEventListener('click', (e) => addActiveItem(item))
            })

            function eventVisibility() {
                if (document.querySelector('.on-open-card') && isScrolledIntoView(document.querySelector('.aside_parent .nosale')) == true && viewed2 == false) {
                    setTimeout(() => {
                        if (document.querySelector('.on-open-card') && isScrolledIntoView(document.querySelector('.aside_parent .nosale')) == true && viewed2 == false) {
                            viewed2 = true;
                            pushDataLayer('Visibility choose your pack', 'Card')
                        }
                    }, 2000)
                }
            }
            eventVisibility()
            window.addEventListener('scroll', () => eventVisibility())
        }
    });

    pushDataLayer('loaded')
}
init()

function addActiveItem(target) {
    console.log(target)

    let weekNumber = +target.dataset.week.split(' ')[0];
    let subscribeInfo = `Auto delivery every ${Math.round(weekNumber * 7 / 30)} months for $${(target.dataset.price - (target.dataset.price * 10 / 100)).toFixed(2)}`

    if (target.closest('.parent-items')) {
        //show/hide sale
        if (target.querySelector('.sale') != null) {
            let sale = target.querySelector('.sale').innerHTML.split(' ')[1];

            document.querySelector('.price_sale span').innerHTML = sale;
            document.querySelector('.price_sale').style.display = 'inline';
            document.querySelector('.head-prices .sale').innerHTML = `Save ${sale}`;
            document.querySelector('.head-prices .sale').style.display = 'block';
            
        } else {
            document.querySelector('.price_sale').style.display = 'none';
            document.querySelector('.head-prices .sale').style.display = 'none';
        }
        //set prices bottom/top
        document.querySelector('.head-prices .l-through').innerHTML = target.querySelector('.l-through') != null ? target.querySelector('.l-through').innerHTML : '';
        document.querySelector('.head-prices .l-through').style.marginRight = target.querySelector('.l-through') != null ? '8px' : '0px';

        document.querySelector(`.desktop .swatchCustom__item[data-variant="${target.dataset.variant}"]`).click();
    } 
    if (target.closest('.slide_in_pdp')) {
        document.querySelector(`.aside_wrapper .aside_product_item.active`).classList.remove('active')
        document.querySelector(`.aside_wrapper .aside_product_item[data-variant="${target.dataset.variant}"]`).classList.add('active')
        
        document.querySelector('.aside_wrapper .qty>p').innerHTML = `${target.dataset.strips} Strips = ${weekNumber} Weeks`;
        document.querySelector('.aside_subscribe__info').innerHTML = subscribeInfo;

        document.querySelector('.aside_subscribe__checkbox').checked = false;
        document.querySelector('.aside_wrapper .qty').classList.remove('disabled');
        document.querySelector('.minus+span').innerHTML = '1';
        weekNumber >= 12 ? document.querySelector('.mobile .aside_subscribe').classList.add('active') : document.querySelector('.mobile .aside_subscribe').classList.remove('active')
    }

    //add/remove active class
    if (!target.classList.contains('active')) {
        target.parentElement.querySelector('.active').classList.remove('active')
        target.classList.add('active')
    }
}

let isClarity = setTimeout(function(){
    if(typeof clarity === 'function'){
        clearInterval(isClarity)
        clarity("set", "new_product_prices", "variant_1");
    }
}, 100)