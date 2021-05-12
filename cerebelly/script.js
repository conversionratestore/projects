clearInterval(window.timer);
window.timer = setInterval(() => {
    let style = `
    <style>
        @media screen and (max-width: 899px) {
            .e-main-container.with-promo .dropdown {
                height: calc(100% - 100px);}
            .css-huxp3r .dropdown.shop .left, .css-huxp3r .dropdown .right button.secondary{
                display: none; }
            .css-huxp3r .dropdown .right .method-picker .method-image img.mobile {
                display: none;}
            .css-huxp3r .dropdown .right .method-picker .method-image img.desktop, .css-huxp3r .dropdown .right .method-picker .method-quiz, .css-huxp3r .dropdown .right .method-picker .method-box-builder {
                display: block;}
            .css-huxp3r .dropdown .right .method-picker .method-image {
                padding: 0 0 14px 0;
                max-width: 100%;}
            .css-huxp3r .dropdown .right .method-picker .method-box-builder .method-image {
                margin: 0; }
            .css-huxp3r .dropdown .right .method-picker .method-quiz {
                background: #FFF3D1; }
            .css-huxp3r .dropdown .right .method-picker .method-box-builder {
                background: #E3EBFF;}
            .css-huxp3r .dropdown .right .method-picker .method-quiz .method-image img {
                max-height: 88px;}
            .css-huxp3r .dropdown .right .mobile-extra-sub-menu {
                background: #F5F6FA;
                padding: 24px 24px 40px 24px;
                margin: auto -24px 0;}
            .css-huxp3r .dropdown .right {
                height: 100%; }
            .css-huxp3r .dropdown .right .secondary-menu {
                padding: 24px 24px 0 24px;
                display: inline-flex;
                flex-direction: column;
                width: 100%;
                height: calc(100vh - 100px);}
            .css-huxp3r .dropdown .right .method-picker {
                margin-bottom: 20px;}
            .css-huxp3r .dropdown .right .method-picker .method-title, .css-huxp3r .dropdown .right .method-picker .method-description {
                text-align: center;}
            .css-huxp3r .dropdown .right .method-picker .method-description {
                margin: 0 auto 5px;}
            .css-huxp3r .dropdown .right .mobile-extra-sub-menu a {
                line-height: 15px;
                letter-spacing: 0.3px;}
        }
    </style>
    `
    document.body.insertAdjacentHTML('afterbegin', style);

    document.querySelector('.css-huxp3r').addEventListener('DOMContentLoaded', (e) => {
        if (document.querySelector('.css-huxp3r').innerHTML != '') {
            document.querySelector('.method-quiz').addEventListener('click', () => {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp: Menu Improvement',
                    'eventAction': 'Customize (Quiz) click'
                });
            });
            document.querySelector('.method-box-builder').addEventListener('click', () => {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp: Menu Improvement',
                    'eventAction': 'Pick flawor (BB) click'
                });
            });
        }
    }, false);

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2171597,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
        hj('trigger', 'menu_improvement');

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Menu Improvement',
        'eventAction': 'loaded'
    });
   
}, 1000);
