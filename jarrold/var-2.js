let mut = new MutationObserver(function (muts) {

    console.log('mutation')

    if(document.querySelector('#page_header_CPR span').innerText === '0') {
        localStorage.setItem('basketList', '[]');
    }

    (function(){
        var http = new XMLHttpRequest();
        http.open('GET', 'https://www.jarrold.co.uk/basket');
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var doc = new DOMParser().parseFromString(this.responseText, "text/html");

                let basketList = [];
                localStorage.setItem('basketList', JSON.stringify(basketList));
                if (doc.querySelectorAll('.cart-table tbody tr .square')) {
                    mut.disconnect();
                    doc.querySelectorAll('.cart-table tbody tr').forEach(el => {
                        basketList.push({
                            'title': el.querySelector('.desc a').innerHTML,
                            'link': el.querySelector('.desc a').getAttribute('href'),
                            'price': el.querySelector('td.text-right').innerHTML,
                            'image': el.querySelector('.square').innerHTML,
                        });
                        localStorage.setItem('basketList', JSON.stringify(basketList));
                    });
                } else {
                    basketList = [];
                    localStorage.setItem('basketList', JSON.stringify(basketList));
                }
                if (localStorage.getItem('basketList') === '[]' && document.querySelector('#page_header_CPR span').innerHTML == '0') {
                    sessionStorage.clear();
                }
            }
        }
        http.send(null);
    })();

    let inCart =  false

    if(document.querySelector('.core h1')){
        let name = document.querySelector('.core h1').innerText
        if (localStorage.getItem('basketList').includes(name)) {
            inCart = true
        }
    }


    if (!inCart && localStorage.getItem('basketList') && localStorage.getItem('basketList') != '[]' && !window.location.pathname.includes('basket') && !window.location.pathname.includes('my-account?view=wishlist')) {
        mut.disconnect();
        document.body.insertAdjacentHTML('afterbegin',`<style>
            .modal {
                background: rgba(0, 0, 0, 0.59);
                position: fixed;
                left: 0;
                top: 0;
                display: inline-flex;
                overflow-y: auto;
                opacity: 0;
                padding: 16px;
                pointer-events: none;
                transition: all 0.3s ease;
                z-index: 9999;
                height: 100vh;
                width: 100%;}
            .modal.active {
                opacity: 1;
                pointer-events: auto;}
             .modal.hide {
                opacity: 0!important;
                pointer-events: none!important;}
            .modal_container {
                position: relative;
                margin: auto;
                display: block;
                max-width: 323px;
                height: fit-content;
                background: #FFFFFF;
                box-shadow: 0px 0px 6px 2px rgba(190, 190, 190, 0.25);
                border-radius: 5px;}
            .modal_top {
                padding: 40px 15px 0 15px;}
            .notification {
                border-top: 1px dashed #E5E5E5;
                padding: 21px 30px;
                display: flex;
                align-items: center;}
            .notification p {
                margin: 0 0 0 15px;
                font-size: 12px;
                line-height: 18px;
                color: #CDCDCD;}
            .notification img {
                width: 40px;
                height: 21px;
                flex-shrink: 0;}
            .modal .btn {
                background: #4B2A4D;
                border-radius: 0px 0px 5px 5px;
                font-weight: 600;
                font-size: 14px;
                line-height: 54px;
                height: 54px;
                text-align: center;
                text-transform: uppercase;
                width: 100%!important;
                color: #FFFFFF;}
            .close {
                position: absolute;
                right: -16px;
                top: -16px;
                background: url('https://conversionratestore.github.io/projects/jarrold/img/close.svg') no-repeat center / contain;
                width: 33px;
                height: 33px;
                border: none;
                margin-left: auto;
                display: block;}
            .modal_title {
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                letter-spacing: 0.055em;
                text-transform: uppercase;
                margin-bottom: 13px;
                color: #2F2F2F;}
            .modal_title span {
                display: block;
                font-size: 13px; }
            .modal_info {
                background: #F8F8F8;
                border: 1px solid #eae8e8;
                border-radius: 6px;
                max-width: 263px;
                text-align: center;
                padding: 4px 20px;
                margin: 0 auto;}
            .modal_products {
                max-height: 250px;
                overflow-y: auto;
                padding: 5px 15px 0;
                margin: 0;
                list-style-type: none;}
            .modal_products li {
                padding: 20px 0;}
            .modal_products img {
                height: 100px;
                width: 100%;
                margin: 0 auto 20px;
                display: block;
                object-fit: contain;}
            .modal_img {
                display: block;}
            .flex-center-between {
                display: flex;
                justify-content: space-between;
                align-items: center;}
            .product-title {
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                padding-right: 15px;
                color: #000000;}
            .product-price {
                font-size: 20px;
                line-height: 20px;
                color: #000000;
                letter-spacing: 0.05em;}
            </style>
        `);
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
            <div class="modal_container">
                <div class="modal_top">
                    <button type="button" class="close"></button>
                    <h2 class="modal_title">It’s almost yours!<span>Only one step left:</span></h2>
                    <div class="modal_info">This is a popular choice, <br> we may run out of stock soon </div>
                    <ul class="modal_products"></ul>
                </div>
                <div class="notification">
                    <img src="https://conversionratestore.github.io/projects/jarrold/img/notification.svg" alt="notification icon">
                    <p>We can’t guarantee the availability of all products in your cart or favorites if you don’t complete the purchase now</p>
                </div>
                <a href="https://www.jarrold.co.uk/checkout" class="btn">complete my order now</a>
            </div> 
        </div>`);
        jQuery(document).on('touchstart', function(){
            $('body').addClass('on-mobile-device');
        });

        function myScrollSpeedFunction(){
            if(jQuery('body').hasClass('on-mobile-device') ){
                if(my_scroll() < -200){
                    if (sessionStorage.getItem('modal') === null && localStorage.getItem('basketList') !== '[]') {
                        $(".modal").addClass('active');
                        sessionStorage.setItem('modal', '');
                    }
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

        $(".modal").on('click', (e) => {
            e.stopImmediatePropagation();
            $('.modal').removeClass('active');
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - Exit-intent popup',
                'eventAction': `click on the background to close popup`
            });
        });
        $(".close").on('click', (e) => {
            e.stopImmediatePropagation();
            $('.modal').removeClass('active');
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - Exit-intent popup',
                'eventAction': `click on X to close popup`
            });
        });
        $('.modal .btn').on('click', () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - Exit-intent popup',
                'eventAction': 'click on Complete your order now'
            });
        });
        $(".modal_container").on('click', (e) => {
            e.stopPropagation();
        });
        console.log(localStorage.getItem('basketList'))
        let basketList = JSON.parse(localStorage.getItem('basketList'));
        for (let i = 0; i < basketList.length; i++) {
            $('.modal_products').append(`
            <li>
                <a href="${basketList[i].link}" class="modal_img">${basketList[i].image}</a>
                <div class="flex-center-between">
                    <a href="${basketList[i].link}" class="product-title">${basketList[i].title}</a>
                    <p class="product-price">${basketList[i].price}</p>
                </div>
            </li>`);
            if (document.querySelectorAll('.modal_img img')[i]){
                let dataScr = document.querySelectorAll('.modal_img img')[i].getAttribute('data-src');
                document.querySelectorAll('.modal_img img')[i].setAttribute('src', dataScr);
            }

            if (document.querySelector('#product h1') && basketList[i].title != document.querySelector('#product h1').innerHTML || !document.querySelector('#product h1')) {
                $('.btn.bag').on('click', function () {
                    $('.modal').addClass('hide');
                    inCart = true
                });

                setTimeout(() => {
                    if (sessionStorage.getItem('modal') === null && localStorage.getItem('basketList') !== '[]') {
                        $(".modal").addClass('active');
                        sessionStorage.setItem('modal', '');
                    }
                }, 20000);

                function addEvent(obj, evt, fn) {
                    if (obj.addEventListener) {
                        obj.addEventListener(evt, fn, false);
                    } else if (obj.attachEvent) {
                        obj.attachEvent("on" + evt, fn);
                    }
                }
                if (window.matchMedia("(max-width: 1024px)").matches) {
                    jQuery(document).on('scroll', myScrollSpeedFunction);
                } else {
                    addEvent(document, 'mouseout', function(evt) {
                        // if (!document.querySelector('.modal.hide')) {
                        if (evt.toElement == null && evt.relatedTarget == null) {
                            if (sessionStorage.getItem('modal') === null && localStorage.getItem('basketList') !== '[]') {
                                $(".modal").addClass('active');
                                sessionStorage.setItem('modal', '');
                            }
                        }
                        // } else {
                        //     sessionStorage.setItem('modal', '');
                        // }
                    });
                }

            }

        }

    }
});

mut.observe(document, {
    childList: true,
    subtree: true
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1885763,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'exit_intent_popup');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Exit-intent popup',
    'eventAction': 'loaded'
});
