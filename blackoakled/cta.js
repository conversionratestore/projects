let style = `
    <style>
      .new_cta {
        margin: 10px 0 0;
        width: 100%;
      }
      
      .new_cta>p {
        width: 100%;
        border: 2px solid #EF9436;
        border-radius: 3px;
        background-color: #FEFBEA;
        font-size: 14px;
        font-weight: 600;
        color: #233C5B;
        margin-bottom: 10px;
        padding: 12px;
        text-align: center;
        cursor: pointer;
      }
      
      .new_cta .info {
        width: 100%;
        padding: 30px 50px;
        border: 1px solid #DEDEDE;
        border-radius: 3px;
        box-shadow: 2px 2px 8px 3px rgba(0, 0, 0, 0.15);
        text-align: center;
        display: none;
      }
      
      .new_cta .info img, .new_cta .info img+p {
        margin-bottom: 10px;
      }
      
      
    </style>
`

let start = setInterval(function () {
    if(document.querySelector('.money.si-auto') && document.querySelector('#addToCart')) {
        clearInterval(start)
        let partPrice = (+document.querySelector('#productPrice-manual .money').innerText.split('$')[1] / 4).toFixed(2)

        let block = `
            <div class="new_cta">
                <p>Pay now only $<span>${partPrice}</span></p>
                <div class="info">
                    <img src="https://conversionratestore.github.io/projects/blackoakled/img/shop-pay.svg" alt="">
                    <p><b>Pay in 4 equal installments of $<span>${partPrice}</span></b></p>
                    <p>Choose Shop Pay at the Checkout to buy this product in 4 equal installments</p>
                </div>
            </div>
        `

        document.body.insertAdjacentHTML('afterbegin', style)
        document.querySelector('#addToCart').insertAdjacentHTML('afterend', block)

        $('.new_cta>p').click( function (e) {
            e.preventDefault()
            $('.new_cta .info').slideDown()
            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - PDP Shoppay',
                'eventAction': 'click',
                'eventLabel': 'click on Pay only CTA'
            })
        })
    }
}, 100)



window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - PDP Shoppay',
    'eventAction': 'loaded'
});


(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1831568,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('event', 'pdp_shoppay');

