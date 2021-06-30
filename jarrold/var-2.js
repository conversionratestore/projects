let mut = new MutationObserver(function (muts) {    
    (function(){
        var http = new XMLHttpRequest();  
        http.open('GET', 'https://www.jarrold.co.uk/my-account?view=wishlist');
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var doc = new DOMParser().parseFromString(this.responseText, "text/html"); 
                if (doc.querySelectorAll('.cart-table tbody tr')) {
                    mut.disconnect();
                    $('.favorites span').html(doc.querySelectorAll('.cart-table tbody tr')).length;
                }      
            }
        }
        http.send(null);
    })();
    (function(){
        var http = new XMLHttpRequest();  
        http.open('GET', 'https://www.jarrold.co.uk/basket');
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var doc = new DOMParser().parseFromString(this.responseText, "text/html"); 
                if (doc.querySelectorAll('.cart-table tbody tr')) {
                    mut.disconnect();
                    let basketList = [];
                    localStorage.setItem('basketList', '');

                    doc.querySelectorAll('.cart-table tbody tr').forEach(el => {
                        basketList.push({
                            'title': el.querySelector('.desc a').innerHTML,
                            'link': el.querySelector('.desc a').getAttribute('href'),
                            'price': el.querySelector('td.text-right').innerHTML,
                            'imageSrc': el.querySelector('.square img').getAttribute('src'),
                        });
                        localStorage.setItem('basketList', JSON.stringify(basketList));
                        $('.favorites span').html(JSON.parse(localStorage.getItem('basketList')).length);
                    });  
                }      
            }
        }
        http.send(null);
    })();

    if (document.querySelector('#page_header_CPR')) {
        mut.disconnect();
     
        $('body').eq(0).prepend(`<style>
            .favorites {
                margin-right: 5px;}
            .favorites:before {
                background: url(https://conversionratestore.github.io/projects/jarrold/img/heart.svg) no-repeat center / 22px 19px;}
            .favorites span {
                position: absolute;
                display: block!important;
                top: 10px;
                left: 0;
                right: 0;
                font-weight: 600;
                font-size: 9px;
                line-height: 12px;
                color: #4B2A4D; }
        </style>`);
        $('#page_header_CPR').prepend(`<a href="https://www.jarrold.co.uk/my-account?view=wishlist" class="favorites"><strong>Favorites</strong><span>0</span></a>`)
        if (localStorage.getItem('basketList') != '') {
            $('.favorites span').html(JSON.parse(localStorage.getItem('basketList')).length);
        }

    }
    if (localStorage.getItem('basketList') != '' && !window.location.pathname.includes('basket')) {
        mut.disconnect();
        $('body').eq(0).prepend(`<style>
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
            width: 100%;
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
        </style>`);
        $('body').eq(0).append(`
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
                <a href="https://www.jarrold.co.uk/basket" class="btn">complete my order now</a>
            </div> 
        </div>`); 

        let basketList = JSON.parse(localStorage.getItem('basketList'));
        for (let i = 0; i < basketList.length; i++) {
            $('.modal_products').append(`
            <li>
                <a href="${basketList[i].link}" class="modal_ismg"> <img src="${basketList[i].imageSrc}" alt="${basketList[i].title}"></a>
                <div class="flex-center-between">
                    <a href="${basketList[i].link}" class="product-title">${basketList[i].title}</a>
                    <p class="product-price">${basketList[i].price}</p>
                </div>
            </li>`);
        }
        
        jQuery(document).on('touchstart', function(){
            $('body').addClass('on-mobile-device');
        });

        function myScrollSpeedFunction(){
            if(jQuery('body').hasClass('on-mobile-device') ){ 
                if(my_scroll() < -200){
                    $(".modal").addClass('active');
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
        $(".close, .modal").on('click', () => {
            $('.modal').removeClass('active');
        });
        $(".modal_container").on('click', (e) => {
            e.stopPropagation();
        });
        if (document.querySelector('#product h1') && basketList[i].title != document.querySelector('#product h1').innerHTML || !document.querySelector('#product h1')) {
            console.log('have modal');
            jQuery(document).on('scroll', myScrollSpeedFunction);
            setTimeout(() => {
                $(".modal").addClass('active');
            }, 10000);
        } 
       
    }
});

mut.observe(document, {
    childList: true,
    subtree: true
});
