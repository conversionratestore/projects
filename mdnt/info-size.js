window.onload = function () {
    document.head.insertAdjacentHTML(
        'beforeend',
        `
        <style>
            .product-single__info-size {
            margin: 25px 0 15px 0;
            padding: 0;
            border: 1px solid #C00303;
            text-align: left;
            }
            .info-size__heading-wrapper {
            background: #C00303;
            }
            .info-size__heading-wrapper h4{
            margin: 0;
            color: #FFFFFF;
            letter-spacing: normal;
            font-size: 16px;
            text-transform: lowercase;
            }
            .info-size__heading-wrapper, .info-size__text-wrapper {
            padding: 12px 15px;
            margin: 0;
            }
            .info-size__text-wrapper {
            background: #FFFFFF;
            }
            .info-size__text-wrapper p {
            margin: 0;
            }
            p.info-size__text--small {
            margin-top: 10px;
            font-size: 12px;            
            }
            p.info-size__text--small::first-letter {
            text-transform: uppercase;
            }
            .content.sc-content-blaster {
            padding: 10px 15px;
            }
            .content.sc-content-blaster .product-single__info-size {
            margin: 0;
            }
            .content.sc-content-blaster .info-size__heading-wrapper {
            padding: 12px;
            }
        </style>
    `,
    );

    fetch(
        `https://shopify.blaster.ai/api/item-model-info?handle=${
            location.href.split('products/')[1].split('?')[0]
        }`,
    )
        .then((response) => response.json())
        .then((data) => {
            template(data);
        });

    function template(item) {
        document
            .querySelector(
                '.variant-wrapper.variant-wrapper--dropdown.blaster-select--Size.js',
            )
            .insertAdjacentHTML(
                'afterEnd',
                `
                <div class='product-single__info-size'>
                    <div class='info-size__heading-wrapper'>
                        <h4>90% users say this product is ${
                            item['designed-fit']
                        }.</h4>
                    </div>
                    <div class='info-size__text-wrapper'>
                        <p><strong>Model wears: </strong>${
                            item['item-size']
                        } ${
                    item['item-length-cm']
                        ? `(${item['item-length-cm']}) Centimeters`
                        : ''
                }</p>
                    <p>Model’s height is ${
                        item['model-height-cm']
                    }cm / ${item['model-height-ft']}</p>
                        <p class='info-size__text--small'>${
                            item['in-between-sizes']
                        } if you are between sizes.</p>
                    <div>
                <div>
                `,
            );

        document
            .querySelector('.content.sc-content-blaster')
            .insertAdjacentHTML(
                'afterBegin',
                `
                <div class='product-single__info-size'>
                    <div class='info-size__heading-wrapper'>
                        <h4>90% users say this product is ${item['designed-fit']}.</h4>
                    </div>
                </div>
                `,
            );
    }

    document
        .querySelectorAll('.size-guide-link')[0]
        .addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: 'event-to-ga',
                eventCategory: 'Exp: True_to_size_guide',
                eventAction: 'Size Guide',
            });
        });

    document
        .querySelector('._ks_text')
        .addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: 'event-to-ga',
                eventCategory: 'Exp: True_to_size_guide',
                eventAction: 'How to take measurements',
            });
        });

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: 'event-to-ga',
        eventCategory: 'Exp: True_to_size_guide',
        eventAction: 'loaded',
    });

    (function (h, o, t, j, a, r) {
        h.hj =
            h.hj ||
            function () {
                (h.hj.q = h.hj.q || []).push(arguments);
            };
        h._hjSettings = { hjid: 2215981, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(
        window,
        document,
        'https://static.hotjar.com/c/hotjar-',
        '.js?sv=',
    );
    window.hj =
        window.hj ||
        function () {
            (hj.q = hj.q || []).push(arguments);
        };
    hj('trigger', 'true_to_size_guide');
};
