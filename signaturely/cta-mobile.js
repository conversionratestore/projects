let build = setInterval(function() {
    console.log("s");
    if(document.querySelector('.elementor-button-content-wrapper .elementor-button-text')) {
        clearInterval(build);
        document.querySelectorAll('.elementor-button.elementor-size-xs')[0].innerHTML = 'Sign 3 documents for FREE >';

        document.querySelectorAll('.elementor-button.elementor-size-xs')[0].addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — New CTA in header',
                'eventAction': 'click on button Sign 3 Documents for Free',
                'eventLabel': 'Header'
            });
        })
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
