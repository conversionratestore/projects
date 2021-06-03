let build = setInterval(function() {
    console.log("s");
    if(document.querySelector('.elementor-button-content-wrapper .elementor-button-text')) {
        clearInterval(build);
        let style = `
        <style>
            .elementor-36 .elementor-element.elementor-element-2d03d92 {
                width: 100%;}
            .elementor-36 .elementor-element.elementor-element-2325564 .elementor-button {
                margin-left: 10px;
                font-size: 14px;
                padding: 14px 22px;}
            .elementor-36 .elementor-element.elementor-element-2325564 .elementor-button span{
                white-space: nowrap;}
        </style>`;
        document.body.insertAdjacentHTML('afterbegin', style);
        document.querySelector('.elementor-button-content-wrapper .elementor-button-text').innerHTML = 'Sign 3 documents for FREE >';

        document.querySelector('.elementor-button-wrapper').addEventListener('click', function () {
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
