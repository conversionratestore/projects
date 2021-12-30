let style = `
    <style>
        .dark_bg_exp {
            position: fixed;
            background: rgba(0, 0, 0, .4);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
            display: none;
        }       
        .dark_bg_exp.active {
            display: block;
        }    
        .popup_sub {
            padding: 30px 20px;
            border-radius: 12px;
            background-color:#fff;
            text-align: center;
            width: 95%;
            margin: 20px auto;
            position: relative;
        }
        .popup_sub p {
            line-height: 1;
        }    
        .popup_sub .close {
            background: url("https://cdn.shopify.com/s/files/1/2572/8006/t/58/assets/close.svg?v=4644110195642707389") center center no-repeat;
            background-size: contain;
            display: block;
            position: absolute;
            height: 12px;
            width: 12px;
            right: 21px;
            top: 21px;
        }
        .popup_sub .logo {
            height: 20px;
            margin-bottom: 30px;
        }       
        .popup_sub h3 {
            font-family: 'Rubik',sans-serif;
            font-weight: 700;
            font-size: 22px;
            margin-bottom: 15px;
            color: #1E415F;
            line-height: 1;
            text-transform: none;
        }   
        .popup_sub h3+p {
            font-size: 14px;
            color: #1E415F;
            margin-bottom: 20px;
        }
        .popup_sub img:not(.logo) {
            height: 210px;
            width: 210px;
            margin-bottom: 20px;
        }
        .popup_sub img+p {
            font-size: 22px;
            color: #1E415F;
            margin-bottom: 20px;
        } 
        .popup_sub .cancel_anytime {
            font-size: 13px;
            color: #1E415F;
            margin-bottom: 15px;
        }
        .popup_sub button {
            color: white;
            text-transform: uppercase;
            font-size: 12px;
            padding: 17px 45px;
            border: none;
            border-radius: 40px;
            background-color: #4090D1;
            font-family: 'Rubik', sans-serif;
            cursor: pointer;
        }        
        .to_checkout {
            display: none !important;
        }
        
        .popup_btn {
            text-transform: uppercase;
            color: white;
            font-size: 16px;
            padding: 14px;
            width: 100%;
            display: block;
            background: #1E415F;
            border-radius: 30px;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
            margin-top: 30px;
            text-align: center;
        }
        
        .user {
            display: none;
        }
        
        .popup_sub p.new_user {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 30px;
        }
        
        .new_user b {
            font-size: 20px;
            text-transform:uppercase;
        }
    </style>
`

let block = `
    <div class="dark_bg_exp">
        <div class="popup_sub">
            <span class="close"></span>
            <img class="logo" src="https://conversionratestore.github.io/projects/somnifix/img/logo.svg" alt="logo">
            <div class="user">
                <h3>Looks like this is your repeat purchase</h3>
                <p>We are thrilled to know that Somnifix strips<br>help you improve your sleep.</p>    
            </div>
            <p class="new_user">Did you know that<br><b>you can save 10% off<br>on this purchase</b><br>by subscribing to shipment<br>every 3 month.</p>
            <img src="https://conversionratestore.github.io/projects/somnifix/img/popup-img.png" alt="product">
            <p class="user"><b>Get 10% off on this purchase</b><br>by subscribing to shipment every <span>3</span> months.</p>
            <p class="cancel_anytime">Don’t worry, you can unsubscribe anytime.</p>
            <button class="active_sub">Get 10% off by subscribing</button>
        </div>
    </div>
`

document.body.insertAdjacentHTML('afterbegin', style)
document.body.insertAdjacentHTML('beforeend', block)

let start = setInterval(function () {
    if(document.querySelectorAll('.to_checkout')[1]) {
        clearInterval(start)
        document.querySelectorAll('.to_checkout')[1].insertAdjacentHTML('afterend', `<div class="popup_btn">add to cart</div>`)

        let id = localStorage.getItem('customer')
        if(id) {
            $.ajax({
                type: 'POST',
                url: "https://somnifix-recharge.herokuapp.com/somnifix/getOrders.php",
                data: {cid: id},
                dataType: "JSON",
                success: function (result) {
                    console.log(result)
                    if (!result.success) {
                        $('.user').css('display', 'block')
                        $('.new_user').css('display', 'none')
                        $('.cancel_anytime').text('Cancel anytime')
                        $('.popup_sub img:not(.logo)').css('height', '148px').css('width', '148px')
                    }
                }
            })
        }


        $('.popup_sub .close').click(function () {
            $('.dark_bg_exp').removeClass('active')
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Popup with subscription offer',
                'eventAction': 'Click on cross button'
            });
            document.querySelectorAll('.to_checkout')[1].click()
        })

        $('.dark_bg_exp').click(function (e) {
            if(e.target === this){
                $('.dark_bg_exp').removeClass('active')
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp: Popup with subscription offer',
                    'eventAction': 'Click on area around Pop-Up'
                });
                document.querySelectorAll('.to_checkout')[1].click()}
        })

        $('.active_sub').click(function () {
            $('.subscribe-custom__checkbox').eq(1).prop('checked', true)
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Popup with subscription offer',
                'eventAction': 'Click on "Get 10% off by subscribing button'
            });
            document.querySelectorAll('.to_checkout')[1].click()
        })

        $('.popup_btn').click(function () {
            if(!$('.subscribe-custom__checkbox').eq(1).prop('checked')) {
                if ($('.select_pack .choosen').text().includes('1-month')) {
                    document.querySelectorAll('.to_checkout')[1].click()
                } else {
                    if ($('.select_pack .choosen').text().includes('12-month')) {
                        $('.popup_sub img+p span').text('12')
                    }

                    $('.dark_bg_exp').addClass('active')
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp: Popup with subscription offer',
                        'eventAction': 'Pop-Up appearence'
                    });
                }
            } else {
                document.querySelectorAll('.to_checkout')[1].click()
            }
        })
    }
}, 100)



window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Popup with subscription offer',
    'eventAction': 'loaded'
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('event', 'optimize_pdp');
