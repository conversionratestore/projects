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
            padding: 30px 40px;
            border-radius: 12px;
            background-color:#fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 485px;
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
            height: 148px;
            width: 148px;
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
            padding: 12px 45px;
            border: none;
            border-radius: 40px;
            background-color: #4090D1;
            font-family: 'Rubik', sans-serif;
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
            margin-top: auto;
            cursor: pointer;
            text-align: center;
        }
    </style>
`

let block = `
    <div class="dark_bg_exp">
        <div class="popup_sub">
            <span class="close"></span>
            <img class="logo" src="https://conversionratestore.github.io/projects/somnifix/img/logo.svg" alt="logo">
            <h3>Looks like this is your repeat purchase</h3>
            <p>We are thrilled to know that Somnifix strips help you improve your sleep.</p>
            <img src="https://conversionratestore.github.io/projects/somnifix/img/popup-img.png" alt="product">
            <p><b>Get 10% off on this purchase</b><br>by subscribing to shipment every 3 months.</p>
            <p class="cancel_anytime">Cancel anytime</p>
            <button class="active_sub">Get 10% off by subscribing</button>
        </div>
    </div>
`

document.body.insertAdjacentHTML('afterbegin', style)
document.body.insertAdjacentHTML('beforeend', block)

document.querySelectorAll('.to_checkout')[0].insertAdjacentHTML('afterend', `<div class="popup_btn">add to cart</div>`)

$('.popup_sub .close').click(function () {
    $('.dark_bg_exp').removeClass('active')
    document.querySelectorAll('.to_checkout')[0].click()
})

$('.active_sub').click(function () {
    $('.subscribe-custom__checkbox').eq(0).prop('checked', true)
    document.querySelectorAll('.to_checkout')[0].click()
})


$('.popup_btn').click(function () {
    if($('.swatchCustom__item[data-title="1 Pack"]').hasClass('swatchCustom__item--active')) {
        document.querySelectorAll('.to_checkout')[0].click()
    } else {
        $('.dark_bg_exp').addClass('active')
    }
})
