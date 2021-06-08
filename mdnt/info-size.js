window.onload = function () {
  document.head.insertAdjacentHTML(
    'beforeend',
    `
        <style>
          .product-single__wrapper {
            margin: 20px 0 15px 0;
          }
          .product-single__wrapper h5 {
            padding: 0 5px;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-align: left;
            letter-spacing: normal;
          }
          .product-single__info-size {
            padding: 0;            
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
            font-family: 'Archivo Narrow', sans-serif;
          }
          .info-size__heading-wrapper h4 span {
            text-transform: uppercase;
          }
          .info-size__heading-wrapper {
            padding: 13px 15px;
            margin: 0;
          }
          .info-size__text-wrapper {
            margin: 0;
            padding: 5px 15px;
            background: #FFFFFF;
            border: 1px solid #C00303;
          }
          .info-size__text-wrapper p {
            margin: 0;
          }
          p.info-size__text--small {
            margin: 10px 0;
            font-size: 12px;
            color: #009D3F;
          }
          p.info-size__text--small span {
              display: inline-block;
              font-weight: 700;
          }
          p.info-size__text--small span:first-letter {
            text-transform: uppercase;
          }
          .content.sc-content-blaster {
            padding: 10px 15px;
          }
          .content.sc-content-blaster .product-single__info-size {
            margin: 0;
          }
        </style>
      `,
  );

  fetch(
    `https://shopify.blaster.ai/api/item-model-info?handle=${
      location.href.split('products/')[1].split('?')[0]
    }`,
  )
    .then(response => response.json())
    .then(data => {
      template(data);
    });

  function template(item) {
    document.querySelector('.payment-buttons').insertAdjacentHTML(
      'beforebegin',
      `
        <div class='product-single__wrapper'>
          ${
            item['designed-fit']
              ? `
                  <h5>SIZE &amp; FIT</h5>
                  <div class='product-single__info-size'>
                      <div class='info-size__heading-wrapper'>
                          <h4>${item['customers-say']}
                            % of users say this product is <span>
                            ${item['designed-fit']}.</span>
                          </h4>
                      </div>
                      <div class='info-size__text-wrapper'>
                        <p>Model wears size: ${item['item-size']} 
                        ${
                          item['item-length-cm']
                            ? `&amp; ${item['item-length-cm']} cm`
                            : ''
                        }</p>
                        <p>Model’s height is ${item['model-height-cm']}cm / 
                        ${item['model-height-ft']}</p>
                        <p class='info-size__text--small'>*Fit recommendation: <span>${
                          item['in-between-sizes']
                        }</span> if you are between sizes.</p>
                      </div>
                  </div>
                `
              : `
                  <div class='product-single__info-size'>
                    <div class='info-size__text-wrapper'>
                      <p>ONE SIZE ITEM!</p>
                      <p>Model’s height is ${item['model-height-cm']}cm / 
                      ${item['model-height-ft']}</p>
                    </div>
                  </div>   
                `
          }
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

  if (document.querySelector('._ks_text')) {
    document.querySelector('._ks_text').addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'event-to-ga',
        eventCategory: 'Exp: True_to_size_guide',
        eventAction: 'How to take measurements',
      });
    });
  }

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
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  window.hj =
    window.hj ||
    function () {
      (hj.q = hj.q || []).push(arguments);
    };
  hj('trigger', 'true_to_size_guide');
};
