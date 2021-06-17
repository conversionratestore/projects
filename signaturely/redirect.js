let mut = new MutationObserver(function (muts) {
    mut.disconnect();

    if (window.location.pathname.includes('online-signature/type') || window.location.pathname.includes('online-signature/draw')) {
        if(document.querySelector('.download-popup--download')) {
            document.querySelector('.download-popup--download .download-button').addEventListener('click', () => {
                window.location = 'https://signaturely.com/signature-downloaded';
            });
        }
        
        if(document.querySelector('.download-button__reverse')) {
            document.querySelector('.download-button__reverse').addEventListener('click', () => {
                window.location = 'https://signaturely.com/signature-downloaded';
            })
        }
        
        mut.observe(document, {
            childList: true,
            subtree: true
        });
    }

    if (window.location.pathname.includes('signature-downloaded')) {

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — new_page_with registration_promo',
            'eventAction': 'page_loaded'
        });

        document.querySelector('.elementor-button-link').addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — new_page_with registration_promo',
                'eventAction': 'click on button Sign 3 Documents for Free'
            });
        })

        mut.disconnect();
    }


});

mut.observe(document, {
    childList: true,
    subtree: true
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2078786,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'new_page_with registration_promo');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — new_page_with registration_promo',
    'eventAction': 'loaded'
});
