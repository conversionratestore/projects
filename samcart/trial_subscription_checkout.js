document.body.insertAdjacentHTML('afterbegin',`
<style>
    #get_samcart {
        padding-top: 40px;
    }
    .get_samcart_blue {
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        text-decoration-line: line-through;
        color: #2096EF;
        margin-right: 4px;
    }
    .get_samcart_normal {
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        color: #183B56;
    }
    #get_samcart .btn_get_samcart {
        background: #2096EF;
        border-radius: 48px;
        width: 100%;
        display: block;
        font-weight: bold;
        font-size: 18px;
        line-height: 48px;
        color: #FFFFFF;
        text-align: center;
        margin: 4px 0 16px;
    }
    #get_samcart .btn_pay {
        background: #000000;
    }
    #get_samcart .btn_pay_pal {
        background: #F6C557;
    }
    #get_samcart .btn {
        border-radius: 40px;
        height: 40px;
        width: 49%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    #get_samcart .btn img {
        height: 20px;
        object-fit: contain;
    }
    .get_samcart_text {
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        color: #183B56;
    }
    .get_samcart_title {
        font-weight: 500;
        font-size: 20px;
        line-height: 18px;
    }
</style>`)
document.querySelectorAll('.sc-root-row')[2].insertAdjacentHTML('beforebegin',`
<div class="sc-column col-12 sc-root-row" id="get_samcart">
    <div class="sc-row">
        <div class="sc-column col-12">
            <p class="get_samcart_title">Get Samcart 40% OFF</p>
            <div class="d-flex">
                <p class="get_samcart_blue">$580</p>
                <p class="get_samcart_normal">$349</p>
            </div>
            <a href="#" class="btn_get_samcart">Enroll Now</a>
            <div class="d-flex justify-content-between">
                <a href="#" class="btn btn_pay">
                    <img src="https://conversionratestore.github.io/projects/samcart/img/apple_pay_logo.svg" alt="icon pay">
                </a>
                <a href="#" class="btn btn_pay_pal">
                    <img src="https://conversionratestore.github.io/projects/samcart/img/pay_pal_logo.svg" alt="icon pay">
                </a>
            </div>
            <p class="get_samcart_text">30 days money back guarantee</p>
        </div>
    </div>
</div>`)

let action;

function pushDataLayer(action) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
     'event': 'event-to-ga',
     'eventCategory': 'Exp — Trial subscription checkout',
     'eventAction': `${action}`
    });
}
document.querySelector('.btn_get_samcart').addEventListener('click', () => {
    action = 'Click on Enroll now button';
    pushDataLayer(action)
})
document.querySelector('.btn_get_samcart').addEventListener('click', () => {
    action = 'Click on Apple pay or Google pay';
    pushDataLayer(action)
})

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2592989,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'tv_trial_subscription_checkout');
    hj('event', 'trial_subscription_checkout');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
 'event': 'event-to-ga',
 'eventCategory': 'Exp — Trial subscription checkout',
 'eventAction': 'loaded'
});
