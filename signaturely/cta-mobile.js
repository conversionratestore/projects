let build = setInterval(function() {
    console.log("s");
    if(document.querySelector('.elementor-button-content-wrapper .elementor-button-text')) {
        clearInterval(build);
        let style = `
            <style>
              a.sticky_btn {
                display: flex;
                justify-content:center;
                align-items: center;
                position: fixed;
                height: 60px;
                border-radius: 30px;
                color: white;
                bottom: 10px;
                left: 20px;
                background-color: rgb(0, 163, 250);
                font-size: 14px;
                padding: 10px;
                box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, .25);
                width: calc(100% - 115px);
              }
              
              button.jvwNFK {
                background-color: #fff;
              }
              
              .bIvNUR, .hZgNWn {
                color: rgb(0, 163, 250) !important;
              }
            </style>
        `

        let btn = `
            <a href="https://app.signaturely.com/signup" class="sticky_btn">
              Sign 3 documents for FREE
            </a>
        `

        document.body.insertAdjacentHTML('afterbegin', style)
        document.body.insertAdjacentHTML('beforeend', btn)
    }
}, 100);

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2078786,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'new_cta_in_header');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — New CTA in header',
    'eventAction': 'loaded'
});
