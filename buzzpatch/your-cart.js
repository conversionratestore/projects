let action;
function dataLayerPush(action,label) {
    window.dataLayer = window.dataLayer || [];
    if (label) {
        console.log(action + " : " + label)
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Imitation of slide in cart',
            'eventAction': action,
            'eventLabel': label
        });
    } else {
        console.log(action)
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Imitation of slide in cart',
            'eventAction': action
        });
    }
}

document.body.insertAdjacentHTML('afterbegin',`<style>
.popup_cart {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    background-color: rgba(0,0,0,0.5);
}
.popup_cart p {
    margin: 0;
}
.popup_cart.active {
    opacity: 1;
    pointer-events: auto;
}
.popup_cart p {
    margin: 0;
}
.popup_cart.active .popup_cart_container {
    transform: translateX(0);
}
.popup_cart_container {
    position: relative;
    height: 100%;
    width: calc(100% - 40px);
    overflow-y: auto;
    margin-left: auto;
    background-color: #fff;
    transform: translateX(100px);
    transition: all 0.3s ease;
    padding-bottom: 19px;
}
.btn-close {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 24px;
    height: 24px;
    background: url("https://conversionratestore.github.io/projects/buzzpatch/img/close2.svg") no-repeat center / contain;
}
.popup_cart_title {
    font-size: 26px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
    padding: 20px 20px 12px;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 0;
}
.free_shipping {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D9D9D9;
}

.free_shipping p {
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #6F6F6F;
    font-size: 12px!important;
    line-height: 12px!important;
    font-family: 'DIN Condensed', sans-serif;
    margin: 0 0 0 7px;
}
.patches {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    margin: 12px auto 10px;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 5px;
    max-width: calc(100% - 40px);
}
.patches img{
    width: 73.85px;
    height: 43px;
    object-fit: contain;
    margin-right: 10px;
}
.patches_title {
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
    font-family: 'DIN Condensed', sans-serif;
}
.patches_packs {
    margin-top: 2px!important;
    font-size: 12px!important;
    line-height: 130%!important;
    color: #6F6F6F;
    text-transform: lowercase;
}
.patches_total {
    margin-left: auto;
    text-align: right;
    padding-top: 6px;
}
.patches_total p {
    text-decoration-line: line-through;
    color: #EFAE16;
    font-size: 12px!important;
    line-height: 110%!important;
}
.patches_total b {
    font-weight: bold;
    font-size: 12px;
    line-height: 130%;
    color: #0C0B0B;
    margin-top: 2px;
}
.total {
    font-family: 'Roboto', sans-serif;
    font-size: 16px!important;
    line-height: 130%!important;
    color: #0C0B0B;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto 0!important;
    max-width: calc(100% - 40px);
}
.total span {
    font-weight: bold;
}
.upsell {
    max-width: 300px;
    margin: 20px auto;
}
.upsell_title {
    font-size: 20px!important;
    line-height: 110%!important;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
    font-family: 'DIN CONDENSED', sans-serif;
}
.upsell img {
    width: 130px;
    height: 100px;
    margin: 30px auto 15px;
    display: block;
}
.upsell-list {
    list-style-type: none;
    font-size: 12px;
    line-height: 130%;
    color: #212529;
    margin-bottom: 36px;
    margin-left: 0;
}
.upsell-list li {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.upsell-list li::before {
    content: ""; 
    background-color: #FF3C7F;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 8px;
    display: block;   
}
.upsell-prices {
    text-align: center;
    font-weight: bold;
    font-size: 24px!important;
    line-height: 130%!important;
    color: #0C0B0B;
}
.patches_pack {
    font-size: 12px!important;
    line-height: 130%!important;
    text-align: center;
    color: #999999;
    margin-bottom: 20px;
}
.row-calc {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
}
.btn-action {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    border: 1px solid #D9D9D9;
    background: no-repeat center / 12px;
}
.btn-action:hover, .btn-action:focus {
    border-color: #FF3C7F;
}
.btn-minus {
    background-image: url('https://conversionratestore.github.io/projects/buzzpatch/img/minus.svg');
}
.btn-plus {
    background-image: url('https://conversionratestore.github.io/projects/buzzpatch/img/plus-pink.svg');
}
.calc-qty {
    width: 39px;
    line-height: 1;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
    padding: 0;
    background-color: transparent;
    border: none;
    font-family: 'DIN Condensed', sans-serif;
}
.c-pink {
    color: #FF3C7F;
}
.popup_cart .btn-primary {
    display: block;
    max-width: 295px;
    width: calc(100% - 40px);
    letter-spacing: 0.05em!important;
    font-size: 16px!important;
    line-height: 16px;
    margin: 0 auto;
    padding: 25px 20px!important;
}
.container_gray {
    background-color: #F9F8F6;
    padding-bottom: 10px;
}
.row-calc input:not(.disabled):not([disabled]):focus, .row-calc input:not(.disabled):not([disabled]):hover {
    background-color: transparent;
    box-shadow: none;
}
@media only screen and (max-width: 359px) {
    .popup_cart_container {
        width: calc(100% - 20px);
    }
    .patches {
        padding: 16px 10px 0;
    }
    .total {
        padding: 0 10px;
    }
    .patches img {
        width: 94px;
    }
}
</style>`)

function setPackPrice(i) {
    return (+document.querySelectorAll('.js-packs label span')[i].innerHTML.replace('$','').replace(' Each','')).toFixed(2)
}

let cart = `
<div class="popup_cart">
    <div class="popup_cart_container">
        <div class="container_gray">
            <button class="btn-close" type="button"></button>
            <h2 class="popup_cart_title">Your cart</h2>
            <div class="free_shipping"> 
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/shipped-gray.svg" alt="shipped icon">
                <p>Free Shipping WORLDWIDE</p>
            </div>
             <div class="patches">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/patches-small.png" alt="image packs">
                <div>
                    <p class="patches_title">Itch relief patches</p>
                    <p class="patches_packs"></p>
                </div>
                <div class="patches_total">
                   <p>$<span class="rp"></span></p> 
                   <b>$<span class="pr"></span></b>
                </div>
            </div>
            <p class="total">Total: <span>$<span class="pr"></span></span></p>
        </div>
        <div class="upsell">
            <p class="upsell_title">Protect your family from mosquitoes with our <span class="c-pink"> repellent patch</span></p>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/patch.png" alt="patch image">
            <ul class="upsell-list">
                <li>100% natural & chemical free</li>
                <li>Safe for kids 0+ years old</li>
                <li>Protects the whole body</li>
                <li>Effective up to 72 hours</li>
            </ul>
            <p class="upsell-prices">
                $<span class="pr">${setPackPrice(3)}</span> /pack
            </p>
            <p class="patches_pack">60 patches in 1 pack</p>
            <div class="row-calc">
                <button class="btn-action btn-minus" type="button"></button>
                <input type="number" class="calc-qty" value="0" data-id="34767547138092" readonly>
                <button class="btn-action btn-plus" type="button"></button>
            </div>
        </div>
        <a href="#" class="btn js-btn btn-primary">Proceed to checkout</a>
    </div>
</div>`;

document.body.insertAdjacentHTML('beforeend', cart);

let qty = document.querySelector('.calc-qty'),
    upsellPrice = document.querySelector('.upsell-prices .pr'),
    total = document.querySelector('.total .pr'),
    patchesTotal = document.querySelector('.patches_total .pr');


document.querySelector('#getNow .btn').innerHTML = 'ADD TO BAG';

document.querySelector('#getNow .btn').addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/cart/clear.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data =>  {
            console.log(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    document.querySelectorAll('.js-packs').forEach((elem) => {
        if(elem.querySelector('input').checked) {
            document.querySelector('.patches_packs').innerHTML = elem.querySelector('.radio-inline').innerText.replace('\n',' / ');
            document.querySelector('.patches_total .rp').innerHTML = (+document.querySelector('.prices .js-regular .js-strike .rp').innerText).toFixed(2);
            document.querySelector('.patches_total .pr').innerHTML = (+document.querySelector('.prices .js-total .pr').innerText).toFixed(2);
            document.querySelector('.total .pr').innerHTML = (+document.querySelector('.prices .js-total .pr').innerText).toFixed(2);
            document.querySelector('.patches').setAttribute('data-id', elem.querySelector('input').value)
        }
    })
    action = 'Pop Up your cart appearance';
    dataLayerPush(action)
    document.querySelector('.popup_cart').classList.add('active');
})

document.querySelector('.btn-close').addEventListener('click', (e) => {
    action = 'Clicks on close popup button';
    dataLayerPush(action);
    document.querySelector('.popup_cart').classList.remove('active');
    qty.value = 0;
    upsellPrice.innerHTML = setPackPrice(3);
})

document.querySelectorAll('.btn-action').forEach((button) => {
    button.addEventListener('click', () => {
        let label;
        if (button.classList.contains('btn-plus') && qty.value <= 4) {
            qty.value = +qty.value + 1;
            if (qty.value > 4) {
                qty.value = 4;
            }
            action = 'Click on choice of quantity';
            label = 'plus';
        } else {
            if (qty.value > 0) {
                qty.value = +qty.value - 1;
            }
            action = 'Click on choice of quantity';
            label = 'minus';
        }
        if (qty.value == 1) {
            upsellPrice.innerHTML = setPackPrice(3)
            qty.setAttribute('data-id','34137893142572')
        } else if (qty.value == 2) {
            upsellPrice.innerHTML = setPackPrice(2)
            qty.setAttribute('data-id','39307585519660')
        } else if (qty.value == 3) {
            upsellPrice.innerHTML = setPackPrice(0)
            qty.setAttribute('data-id','39264142393388')
        } else if (qty.value == 4) {
            upsellPrice.innerHTML = setPackPrice(1)
            qty.setAttribute('data-id','39264134070316')
        }
        dataLayerPush(action, label)
        if (qty.value === '0') {
            total.innerHTML = (+patchesTotal.innerText).toFixed(2);
        } else {
            total.innerHTML = (+patchesTotal.innerText + (+upsellPrice.innerText * +qty.value)).toFixed(2);
        }
    })
})

document.querySelector('.popup_cart .btn-primary').addEventListener('click', (e) => {
    e.preventDefault()
    action = 'Clicks on proceed to checkout button';
    dataLayerPush(action)
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            items: [
                {
                    id: document.querySelector('.patches').getAttribute('data-id'),
                    quantity: 1
                },
                {
                    id: qty.getAttribute('data-id'),
                    quantity: qty.value === '0' ? 0 : 1
                }
            ]
        })
    })
        .then(response => response.json())
        .then(data =>  {
            console.log(data)
            window.location.pathname = '/checkout'
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})

window.onload  = function () {
    console.log('loaded')
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Imitation of slide in cart',
        'eventAction': 'loaded'
    });
};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2247058,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('event', 'imitation_of_slide_in_cart');
