document.body.insertAdjacentHTML( 'afterbegin',`
<style>
    .popup_exit_intent {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: inline-flex;
        z-index: 9999;
        font-family: "Arial", sans-serif;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
    }
    .popup_exit_intent.active {
        opacity: 1;
        pointer-events: auto;
    }
    .popup_container {
        background: #FFFFFF;
        box-shadow: 0 0 7.79487px 2.59829px rgba(190, 190, 190, 0.25);
        max-width: 456px;
        margin: auto;
        width: 100%;
    }
    .popup_content {
        padding: 20px 20px 25px 20px;
    }
    .btn_close {
        margin-left: auto;
        width: 20px;
        display: block;
        height: 20px;
        margin-bottom: 13px;
        background: url("https://conversionratestore.github.io/projects/privatefloor/img/close.svg") no-repeat center / contain;
    }
    .popup_content h2{
        font-weight: bold;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        text-transform: uppercase;
        color: #2B2B2B;
        margin-bottom: 39px;
    }
    .popup_content h2 span {
        display: block;
        font-size: 16px;
        font-weight: 400;
    }
    .popup_slider {
        display: flex;
        overflow-x: auto;
        max-width: 336px;
        margin: 0 auto;
        transition: all 0.3s ease;
        scroll-behavior: smooth;
    }
    .popup_slider::-webkit-scrollbar {
        height: 5px;
        background-color: #E5E5E5;
        border-radius: 2.6px;
    }
    .popup_slider::-webkit-scrollbar-thumb {
        height: 5px;
        background-color: #777777;
        border-radius: 2.6px;
    }
    .popup_slide {
        width: 130px;
        padding-bottom: 10px;
        margin-right: 64px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .popup_slide:last-child {
        margin-right: 0;
    }
    .popup_slide img {
        height: 129px;
        width: 100%;
        object-fit: contain;
        margin-bottom: 13px;
    }
    .popup_slide p {
        font-size: 16px;
        line-height: 18px;
        color: #777777;
        margin-bottom: 13px;
    }
    .popup_total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 25px;
        max-width: 336px;
        margin: 0 auto;
    }
    .popup_total p {
        font-weight: bold;
        font-size: 30px;
        line-height: 34px;
        color: #2B2B2B;
    }
    .popup_message {
        border-top: 1.3px dashed #E5E5E5;
        padding: 25px 30px; 
        display: flex;
        align-items: center;
    }
    .popup_message img {
        width: 26.15px;
        height: 27.28px;
        margin-right: 28px;
    }
    .popup_message p {
        font-size: 13px;
        line-height: 19px;
        color: #BDBDBD;
        margin: 0;
    }
    .btn-complete {
        background: #FF450E;
        font-size: 18.188px;
        line-height: 21px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        padding: 25px;
        width: 100%;
    }
    .popup_products {
        position: relative;
        width: 100%;
    }
    .btn_arrow {
        position: absolute;
        top: 64.5px;
        width: 50px;
        height: 50px;
        transform: translateY(-50%);
        background: no-repeat center / 14px;
    }
    .btn_arrow_prev {
        left: -17px;
        background-image: url('https://conversionratestore.github.io/projects/privatefloor/img/arrow-prev.svg');
    }
    .btn_arrow_next {
        right: -17px;
        background-image: url('https://conversionratestore.github.io/projects/privatefloor/img/arrow-next.svg');
    }
</style>`)

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
}
detectMob()

document.body.insertAdjacentHTML( 'beforeend',`
<div class="popup_exit_intent">
    <div class="popup_container">
        <div class="popup_content">
            <button class="btn_close" type="button"></button>
            <h2>It’s almost yours!
                <span>Only one step left:</span>
            </h2>
            <div class="popup_products">
                <button class="btn_arrow btn_arrow_prev" type="button"></button>
                <div class="popup_slider"></div>
                <button class="btn_arrow btn_arrow_next" type="button"></button>
            </div>
            <div class="popup_total">
                <p>Total:</p>
                <p>${document.querySelector('.prices .total .price span') ? document.querySelector('.prices .total .price span').innerHTML : document.querySelector('.tt-price').innerHTML}</p>
            </div>
        </div>
        <div class="popup_message">
            <img src="https://conversionratestore.github.io/projects/privatefloor/img/notification.svg" alt="icon notification">
            <p>We can’t guarantee the availability of all products in your cart or favorites if you don’t complete the purchase now</p>
        </div>
        <button type="button" class="btn-complete">complete my order now</button>
    </div>
</div>`);


let cartList = document.querySelectorAll('.cartlist tbody tr'),
    slider = document.querySelector('.popup_slider');

for (let i = 0; i < cartList.length; i++) {
    if(cartList[i].querySelector('.title')) {
        document.querySelector('.popup_slider').insertAdjacentHTML('beforeend',`
        <div class="popup_slide">
            <div>
                <img src="${cartList[i].querySelector('.preview img').getAttribute('src')}" alt="${cartList[i].querySelector('.title').innerText.split('Shipping')[0]}">
                <p class="slide_name">${cartList[i].querySelector('.title').innerText.split('Shipping')[0]}</p>   
            </div>
            <p class="slide_price">${cartList[i].querySelector('.price').innerText}</p>
        </div>`)
    }
}

document.querySelector('.btn_arrow_prev').addEventListener('click', () => {slider.scrollLeft -= 195})
document.querySelector('.btn_arrow_next').addEventListener('click', () => {slider.scrollLeft += 195})

document.querySelector('.btn_close').addEventListener('click', () => {
    document.querySelector('.popup_exit_intent').classList.remove('active');
})


function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

if (detectMob() == true) {
    document.body.classList.add('js-mobile');
    function myScrollSpeedFunction(){
        if(document.body.classList.contains('js-mobile')) {
            if(my_scroll() < -200){
                document.querySelector(".popup_exit_intent").classList.add('active');
            }
        }
    }

    var my_scroll = (function() {

        var last_position, new_position, timer, delta, delay = 50;

        function clear() {
            last_position = null;
            delta = 0;
        }

        clear();

        return function(){
            new_position = window.scrollY;
            if (last_position != null){
                delta = new_position -  last_position;
            }
            last_position = new_position;
            clearTimeout(timer);
            timer = setTimeout(clear, delay);
            return delta;
        };
    })();

} else {
    document.body.classList.add('js-desktop');

    addEvent(document, 'mouseout', function(evt) {
        if (evt.toElement == null && evt.relatedTarget == null) {
            document.querySelector('.popup_exit_intent').classList.add('active');
        }
    })
}

