window.onload  = function () {
    if (mm.grw != 1) {
        
    let yourOrder = [];
    fetch("/cart.html", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `api=c&cart_action=cart&ctoken=${mm.ctoken}`
    }).then(res => res.json()).then(data => {
            console.log(data) 
             //set localStorage for total price
        yourOrder.push({
            'price': parseFloat(data["total"] - data["shipping"]).toFixed(2)
        })
        localStorage.setItem('yourOrder', JSON.stringify(yourOrder));
    })
    //styles
    document.body.insertAdjacentHTML('afterbegin',`
    <style>
        .flex_center_between {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .range_shipping {
            margin-top: 22px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            font-family: 'Arial', sans-serif;
        }
        .range_shipping * {
            font-weight: 400;
        }
        .range_shipping p {
            margin-top: 0;
        }
        .range_shipping_right{
            width: 100%;
        }
        .your_order {
            font-size: 12px;
            line-height: 16px;
        }
        .your_order span {
            color: #666666;
        }
        .range {
            width: 100%;
            background: #EEEEEE;
            border-radius: 12px;
            height: 12px;
            position: relative;
            overflow: hidden;
            margin-top: 8px;
        }
        .range span{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: #C23D31;
        }
        .left_for {
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
        }
        .left_for span {
            color: #C23D31;
            font-weight: bold;
        }
        
    </style>`);

    //create range shipping
    function rangeShipping(item,insert) {
       
        let total = JSON.parse(localStorage.getItem('yourOrder'))[0].price;
        document.querySelector(item).insertAdjacentHTML(insert, `
        <div class="range_shipping">
            <div class="range_shipping_right">
                <div class="flex_center_between">
                    <p class="your_order"><span>Your Order: </span> ${total}</p> 
                    <p class="left_for">
                        <span>$${(150 - total).toFixed(2)} </span> 
                        left for free delivery
                    </p>
                </div>
                <div class="range">
                    <span style="width: ${total * 100 / 150 + '%'}"></span>
                </div>
            </div>
        </div> `);
        if (total < 150 && total >= 130) {
            document.querySelector('.left_for').innerHTML = `<span>$${(150 - total).toFixed(2)} </span>  only left for free delivery`;
        }
        if (total >= 150) {
            document.querySelector('.left_for').innerHTML = `You Have Free Shipping`
        }
        
    }

    //cart
    if (location.pathname.includes('cart.html') || location.pathname.includes('checkout')) {
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .range_shipping_right{
                width: calc(100% - 235px)!important;
            }
            .range_shipping_left {
                width: 235px;
            }
            .range_shipping_left h2 {
                font-weight: bold;
                font-size: 20px;
                line-height: 20px;
                text-transform: capitalize;
                color: #171717;
            }
            .range_shipping_left p {
                font-size: 14px;
                line-height: 18px;
                color: #666666;
                margin-top: 8px!important;
                font-weight: 400;
            }
        </style>`);
    
        //set localStorage for total price
        yourOrder.push({
            'price': parseFloat(justunoCart.total - justunoCart.shipping).toFixed(2)
        })
        localStorage.setItem('yourOrder', JSON.stringify(yourOrder));
        if (justunoCart.total != '0.00') {
            rangeShipping('.payment','afterbegin');
            //create left elements
            document.querySelector('.range_shipping_right').insertAdjacentHTML('beforebegin',`
            <div class="range_shipping_left">
                <h2>Get Free Delivery</h2>
                <p>Add more products to your order</p>
            </div>`)
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
             'event': 'event-to-ga',
             'eventCategory': 'Exp — Free shipping block',
             'eventAction': 'Free shipping block appearance',
             'eventLabel': 'Cart'
            });
        }
    }

    //PDP
    if (location.pathname.includes('/product')) {   
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .range_shipping {
                padding-left: 20px;
                padding-right: 10px;
                margin-bottom: 28px;
            }
            .shipping_box {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #666666;
                border-radius: 4px;
                padding: 16px;
                width: 252px;
                margin: 0 auto 20px;
                font-family: 'Arial', sans-serif;
                box-sizing: border-box;
            }
            .shipping_box img {
                width: 35px;
                height: 26px;
                object-fit: contain;
                margin-right: 12px;
            }
            .shipping_box_title {
                font-weight: bold;
                font-size: 14px;
                line-height: 16px;
                color: #C23D31;
                margin: 0;
            }
            .shipping_box_text {
                font-size: 12px;
                line-height: 16px;
                color: #666666;
                margin: 0;
            }
        </style>`)
        if (localStorage.getItem('yourOrder') != null && JSON.parse(localStorage.getItem('yourOrder'))[0].price != '0.00') {
            rangeShipping('.topcon','beforebegin');
        }
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
         'event': 'event-to-ga',
         'eventCategory': 'Exp — Free shipping block',
         'eventAction': 'Free shipping block appearance',
         'eventLabel': 'PDP'
        });
        document.querySelector('.type2').insertAdjacentHTML('afterbegin',`
        <div class="shipping_box">
            <img src="https://conversionratestore.github.io/projects/medicalmega/img/car.svg" alt="car icon">
            <div>
                <div class="shipping_box_title">Estimated shipping </div>
                <div class="shipping_box_text">2-3 business days*</div>
            </div>
        </div>`);
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
         'event': 'event-to-ga',
         'eventCategory': 'Exp — Free shipping block',
         'eventAction': 'Shipping info block appearance',
         'eventLabel': 'PDP'
        });
        if (document.querySelector('.product-price')) {
            document.querySelectorAll('#cart_box a')[0].addEventListener('click', () => {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Free shipping block',
                'eventAction': 'Click on Add to cart button'
                });
            })
            document.querySelector('#cart_box [name="quantity"]').addEventListener('click', () => {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Free shipping block',
                'eventAction': 'Click on Quantity field'
                });
            })
        }
    }
    //main
    if (document.querySelector('.homeslider__container')) {
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .range_shipping {
                padding: 0 18px 20px;
            }
        </style>`)
        if (localStorage.getItem('yourOrder') != null && JSON.parse(localStorage.getItem('yourOrder'))[0].price != '0.00' && document.querySelector('.shoppingcart .by_num span').innerText != '0') {
            rangeShipping('.homeslider__container','afterend');
        }
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
         'event': 'event-to-ga',
         'eventCategory': 'Exp — Free shipping block',
         'eventAction': 'Free shipping block appearance',
         'eventLabel': 'PL'
        });
    }
 }
};
 (function(h,o,t,j,a,r){
 h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
 h._hjSettings={hjid:1483840,hjsv:6};
 a=o.getElementsByTagName('head')[0];
 r=o.createElement('script');r.async=1;
 r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
 a.appendChild(r);
 })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
 window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
 hj('trigger', 'tv_free_shipping');
 hj('event', 'free_shipping');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
 'event': 'event-to-ga',
 'eventCategory': 'Exp — Free shipping block',
 'eventAction': 'loaded'
});
