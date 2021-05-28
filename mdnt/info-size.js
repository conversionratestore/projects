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

document
  .querySelector(
    '.variant-wrapper.variant-wrapper--dropdown.blaster-select--Size.js'
  )
  .insertAdjacentHTML(
    'afterEnd',
    `
        <div class='product-single__info-size'>
            <div class='info-size__heading-wrapper'>
                <h4>90% users say this product is true to size.</h4>
            </div>
            <div class='info-size__text-wrapper'>
                <p><strong>Model wears: </strong>M (160-170 Centimeters)</strong></p>
                <p>Model’s height is 175cm / 68,9″  </p>
                <p class='info-size__text--small'>Size up if you are between sizes.</p>
            <div>
        <div>
    `
  );

document.querySelector('.content.sc-content-blaster').insertAdjacentHTML(
  'afterBegin',
  `
    <div class='product-single__info-size'>
        <div class='info-size__heading-wrapper'>
            <h4>90% users say this product is true to size.</h4>
        </div>
    </div>
  `
);
