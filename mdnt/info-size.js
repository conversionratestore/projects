window.onload = function () {
  document.head.insertAdjacentHTML(
    'beforeend',
    `
    <style>
        .product-single__info-size {
          margin: 25px 0 15px 0;
          background: #FFFFFF;
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
        .content.sc-content-blaster .info-size__heading-wrapper, .info-size__text-wrapper {
          padding: 12px;
        }
    </style>
  `
  );

  fetch(
    `https://shopify.blaster.ai/api/item-model-info?handle=${
      location.href.split('products/')[1].split('?')[0]
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      template(data);
    });

  function template(item) {
    document
      .querySelector(
        '.variant-wrapper.variant-wrapper--dropdown.blaster-select--Size.js'
      )
      .insertAdjacentHTML(
        'afterEnd',
        `
        <div class='product-single__info-size'>
            <div class='info-size__heading-wrapper'>
                <h4>90% users say this product is ${item['designed-fit']}.</h4>
            </div>
            <div class='info-size__text-wrapper'>
                <p><strong>Model wears: </strong>${item['item-size']} ${
          item['item-length-cm']
            ? `(${item['item-length-cm']}) Centimeters`
            : ''
        }</p>
              <p>Model’s height is ${item['model-height-cm']}cm / ${
          item['model-height-ft']
        }</p>
                <p class='info-size__text--small'>${
                  item['in-between-sizes']
                } if you are between sizes.</p>
            <div>
        <div>
      `
      );

    document.querySelector('.content.sc-content-blaster').insertAdjacentHTML(
      'afterBegin',
      `
    <div class='product-single__info-size'>
        <div class='info-size__heading-wrapper'>
            <h4>90% users say this product is ${item['designed-fit']}.</h4>
        </div>
    </div>
    `
    );
  }
};
