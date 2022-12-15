console.log('initExp');

if (location.search !== '?experiement=HL-Simulator-Sell_the_call-Original') {
  window.history.replaceState(
    null,
    null,
    '?experiement=HL-Simulator-Sell_the_call-Original'
  );
}

/********* Settings **********/
const settings = {
  dir: 'https://flopsi69.github.io/crs/comparamais/editUser',
  clarity: true,
  observe: true,
};

// Clarity
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval);
      try {
        clarity('set', 'pers_offer_cta', 'variant_1');
      } catch (error) {
        console.log(error);
      }
    }
  }, 1000);
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = '';
  }
  try {
    var objData = {
      event: 'event-to-ga',
      eventCategory: 'Exp: Personalized offer and CTA on offer',
      eventAction: action,
      eventLabel: label,
    };
    console.log('crsEvent', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log(e);
  }
}

function gaEventClient(event, quality) {
  try {
    var objData = {
      event: event,
      form_page: 'Listing',
      vertical: 'HL',
    };
    if (quality) {
      objData.lead_quality = quality;
    }
    console.log('clientEvent', objData);
    dataLayer.push(objData);
  } catch (e) {
    console.log(e);
  }
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        // console.log(node);

        if (
          node.classList.contains('simulator-container') &&
          node.querySelector('.hls-simulator__button') &&
          node.querySelector('.hls-simulator__button').innerText ==
            'Ver os bancos'
        ) {
          node.querySelector('.hls-simulator__button').click();
          setTimeout(() => {
            if (document.querySelector('#hlApp')) {
              document.querySelector('#hlApp').scrollIntoView(true);
              // document.querySelector('#simulation-results').scrollIntoView();
            }
          }, 600);
          // init();
        }

        if (node.classList.contains('simulator-container__capture-form')) {
          for (let input of node.querySelectorAll('input')) {
            input.addEventListener('input', function () {
              if (input.placeholder == 'John Doe') {
                formData.name = input.value;
              }

              if (input.placeholder == 'forexample@gmail.com') {
                formData.email = input.value;
              }

              if (input.placeholder == '+351 102 204 305') {
                formData.phone = input.value;
              }
            });

            input.addEventListener('focus', function () {
              if (input.classList.contains('lav-error__input')) {
                input.classList.remove('lav-error__input');
              }
              if (
                input.nextElementSibling &&
                input.nextElementSibling.classList.contains('lav-error')
              ) {
                input.nextElementSibling.remove();
              }
            });
          }

          node
            .querySelector('input[type="email"]')
            .classList.add('lav-form__email');

          node
            .querySelector('input[placeholder="+351 102 204 305"]')
            .classList.add('lav-form__phone');

          document
            .querySelector('.hls-simulator__button')
            .classList.add('lav-validate-form');

          document
            .querySelector('.hls-simulator__button')
            .addEventListener('click', function (e) {
              if (!validateForm(true)) {
                e.preventDefault();
                return false;
              }
            });
        }
      }
    }
  });

  let observeEl = document.querySelector('body');

  observer.observe(observeEl, { childList: true, subtree: true });
}

// Styles
const styles = `
  .container--listing .in__grid .page__title .header-list, .container--edit .in__grid .page__title .header-list {
    display: none;
  }
  .container--hero.container--edit .page__title {
    padding-top: 50px;
  }
  .lav-back {
    position: absolute;
    display: flex;
    align-items: center;
    cursor: pointer;
    top: 0;
    left: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 1;
    color: #0071EB;
    transition: 0.35s;
  }
  .lav-list__wrap-change .lav-back {
    margin-bottom: 14px;
    position: static;
  }
  .container--hero {
    padding-top: 80px;
  }
  .lav-back:hover {
    opacity: 0.7;
  }
  .container--hero .page__title {
    position: relative;
  }
  .lav-back img {
    margin-right: 12px;
  }
  .lav-list__wrap-change {
    display: none;
  }
  .container--edit .lav-list__wrap-change {
    display: block;
  }
  .container--edit .lav-list__wrap-single {
    display: none;
  }
  .container--hero.container--listing {
    padding-bottom: 120px;
  }
  .lav-list__wrap {
    margin: 45px auto 0;
    text-align: left;
    max-width: 510px;
  }
  .lav-approval {
    text-align: center;
    background: #E6EDF0;
    border-radius: 8px;
    padding: 20px 15px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #1F1F1F;
    margin-bottom: 16px;
  }
  .lav-approval__caption {
    color: #229F55;
  }
  .lav-list__wrap-change {
    margin: 0;
    margin-top: 30px;
  }
  .lav-list__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .lav-list {
    margin: 16px auto 0;
    // max-width: 496px;
    font-size: 16px;
    line-height: 1.5;
    color: #474A48;
    margin-top: 16px;
    // padding-left: 16px;
    list-style: none;
  }
  .lav-list__item {
    position: relative;
    list-style-type: inherit;
    padding-left: 37px;
    line-height: 22px;
    min-height: 24px;
  }
  .lav-list__item:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 24px;
    width: 24px;
    background: url('${settings.dir}/img/list-icon-1.svg') center no-repeat;
    background-size: contain;
  }
  .lav-list__item:nth-child(2):before {
    background: url('${settings.dir}/img/list-icon-2.svg') center no-repeat;
    background-size: contain;
  }
  .lav-list__item:nth-child(3):before {
    background: url('${settings.dir}/img/list-icon-3.svg') center no-repeat;
    background-size: contain;
  }
  .lav-list__item + .lav-list__item {
    margin-top: 16px;
  }
  .card {
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    align-items: center;
  }
  .card--featured, .card {
    border: none;
  }
  .card--featured .card__badge {
    position: absolute;
    right: 20px;
    width: auto;
    top: 20px;
    border-radius: 100px;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    text-transform: none;
  }
  .card__logo {
    background: #E6EDF0;
    border: 1px solid #E6E7E7;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 100px;
  }
  .card__logo img {
    max-height: 90%;
    max-width: 80%;
    width: auto;
  }
  .lav-modal-image {
    max-width: 60%;
    margin: auto;
  }
  .card--3d .card__data-holder--icon strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
    color: #229F55;
  }
  .card--featured .card__footer, .card__footer {
    padding: 16px 0 0 0;
    background: none;
    margin-top: 14px;
    border-top: 1px solid #E6E7E7;
  }
  .card--mobile-style .card__product-highlight {
    font-size: 16px;
    line-height: 1.5;
    color: #474A48;
  }
  .card__apply {
    position: relative;
    width: auto;
    margin-left: 40px;
  }
  .card__apply:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    cursor: pointer;
  }
  .card__apply .btn {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 2px rgb(0 0 0 / 20%), 0px 2px 6px 2px rgb(0 0 0 / 15%);
    border-radius: 8px;
  }
  .card--featured .btn {
    padding: 10px 28px;
  }
  .card--3d .card__items-wrapper>.card__additional-info {
    display: none;
  }
  .card--3d .card__items-wrapper>div {
    width: auto;
    margin-right: 40px;
  }
  // .card--3d .card__items-wrapper>div:nth-child(3) {
  //   order: 2;
  // }
  .card--3d .card__items-wrapper>div:nth-child(2) {
    order: 3;
  }
  .card__product-details--left label {
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    color: #0071EB;
  }
  .card__product-details {
    position: relative;
  }
  .content-toggler~.toggle--on, .content-toggler:checked~.toggle--off {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(-100%);
  }
  .content-toggler:checked~.product-promotion {
    padding-top: 16px;
    margin-bottom: -15px;
    margin-left: -20px;
    margin-right: -20px;
    min-width: 100%;
    width: auto;
  }
  .lav-edit {
    background: #fff;
    box-shadow: 0px 4px 8px 3px rgb(0 0 0 / 15%), 0px 1px 3px rgb(0 0 0 / 30%);
    border-radius: 24px;
  }
  .lav-edit__top {
    background: #E6EDF0;
    padding: 56px 56px 28px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }
  .lav-edit__top-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
    color: #229F55;
  }
  .lav-edit__top-caption {
    font-size: 18px;
    line-height: 22px;
    color: #474A48;
    margin-top: 8px;
  }
  .lav-edit__bottom {
    padding: 28px 56px 56px;
  }
  .lav-preview {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    color: #474A48;
  }
  .lav-preview__edit {
    position: absolute;
    top: 28px;
    right: 56px;
    font-size: 14px;
    line-height: 20px;
    color: #0071EB;
    display: flex;
    align-items: center;
    transition: 0.35s;
    cursor: pointer;
  }
  .lav-preview__edit:hover {
    color: #0056b3;
    opacity: 0.7;
  }
  .lav-preview__edit img {
    margin-right: 4px;
  }
  
  .lav-preview__group + .lav-preview__group {
    margin-top: 12px;
  }
  .lav-preview__caption {
    font-size: 14px;
    line-height: 20px;
    color: #474A48;
  }
  .lav-preview__value {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .lav-preview__btn {
    margin-top: 40px;
  }
  .lav-btn {
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    color: #FFFFFF;
    background: #0071EB;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    height: 48px;
    padding: 5px 20px;
    outline: none;
    transition: 0.35s;
    border: none;
    width: 100%;
    cursor: pointer;
  }
  .lav-btn:hover {
    background-color: #0056b3;
  }
  .lav-form {
    display: none;
  }
  .lav-form__caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
    margin-bottom: 16px;
  }
  .lav-form__value {
    background: #F9F9F9;
    border: 1px solid #E6E7E7;
    border-radius: 8px;
    width: 100%;
    height: 52px;
    padding: 5px 20px;
    font-size: 16px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .lav-form__group {
    position: relative;
  }
  .lav-form__group + .lav-form__group {
    margin-top: 28px;
  }
  .lav-form__btn {
    margin-top: 40px;
  }
  .capture-form .alert strong {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #1F1F1F;
  }
  .capture-form .alert p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #474A48;
  }
  .lav-error {
    color: #D63031;
    margin-top: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    font-family: Helvetica,Arial;
  }
  .lav-error:before {
    content: '!';
    position: absolute;
    top: 58px;
    display: flex;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    right: 18px;
    background: #D63031;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }
  .lav-error__input {
    border: 1px solid #D63031;
  }
  .btn__load-more .btn {
    font-weight: 500;
    font-size: 14px;
    height: 34px;
    line-height: 34px;
    color: #0071EB;
    border: 1px solid #0071EB;
    border-radius: 8px;
    padding: 0 40px;
    margin-top: 0;
  }
  .hls-simulator__panel .hls-simulator__form-group .lav-error {
    position: absolute;
    bottom: -5px;
    transform: translateY(100%);
    width: 100%;
    font-size: 12px;
  }
  .hls-simulator__panel .hls-simulator__form-group .lav-error:before {
    top: -37px;
  }
  .hls-simulator__panel .hls-simulator__form-group .lav-error__input {
    border: 1px solid #D63031!important;
    border-radius: 8px!important;
  }
  @media(max-width: 768px) {
    .container--hero {
      padding-top: 15px;
    }
    .card__logo {
      background: none;
      height: 50px;
      border-radius: 0;
      border: none;
    }
    .lav-error:before {
      top: 54px;
    }
    .hls-simulator__panel .hls-simulator__form-group .lav-error:before {
      top: -37px;
    }
    .card--featured .card__badge {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
      left: 20px;
      top: 0;
      right: auto;
      transform: translateY(-50%);
    }
    .card:not(:last-child) {
      margin-bottom: 24px;
    }
    .card__apply {
      margin-left: 0;
      width: 100%;
    }
    .card--mobile-style .card__footer .card__apply a {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      font-size: 16px!important;
      height: 48px;
      text-transform: none;
    }
    .card--featured .card__footer, .card__footer {
      border-top: none;
      padding-top: 0;
      margin-top: 28px;
      margin-bottom: 12px;
    }
    .card--mobile-style .card__product-highlight {
      display: none;
    }
    .card--3d .card__data-holder--icon span {
      font-size: 14px;
      line-height: 1.45;
      text-transform: none;
    }
    .card--3d .card__data-holder--icon strong {
      font-size: 18px;
      line-height: 22px;
    }
    .card--3d .card__items-wrapper>div {
      width: 36%;
      margin-right: 0;
    }
    .card--3d .card__items-wrapper>div:nth-child(3) {
      width: 28%;
    }
    .card__items {
      margin-top: 20px;
      padding: 0;
    }
    .card__logo img {
      max-height: 100%;
      max-width: 192px;
    }
    .card__data-holder--icon span {
      padding: 0;
    }
    .card .product__features .promotional-content {
      border-radius: 0 0 12px 12px;
    }
    .content-toggler:checked~.product-promotion {
      margin-bottom: -21px;
    }
    .content-toggler~.toggle--on, .content-toggler:checked~.toggle--off {
      position: relative;
      transform: none;
      left: 0;
    }
    .lav-expand {
      display: block;
      margin-top: 7px;
    }
    .lav-list__wrap {
      margin-top: 25px;
    }
    .container--hero.container--listing {
      padding-bottom: 0;
      margin-bottom: 8px;
    }
    .filters__trigger svg {
      fill: #0071EB;
      border-color: #0071EB;
    }
    .lav-edit {
      margin-top: 28px;
    }
    .container--hero.container--edit .page__title {
      padding-top: 20px;
    }
    .lav-edit__top {
      padding: 20px 20px 16px;
    }
    .lav-edit__top-title {
      font-size: 18px;
      line-height: 26px;
    }
    .lav-edit__top-caption {
      font-size: 14px;
      line-height: 20px;
      margin-top: 4px;
    }
    .lav-preview, .lav-edit__bottom {
      padding: 16px 20px 20px;
    }
    .lav-preview__group + .lav-preview__group {
      margin-top: 10px;
    }
    .lav-btn {
      margin-top: 20px;
      font-size: 15px;
    }
    .lav-preview__edit {
      top: 16px;
      right: 20px;
    }
    .lav-form__caption {
      margin-bottom: 12px;
    }
    .capture-form {
      padding: 0;
    }
    .in__grid .reviews__widget-container {
      margin-top: 0;
      border: none;
      padding-top: 10px;
    }
    #results .row + .row {
      margin-top: 12px;
    }
    #results .hl-simulator__panel {
      display: none;
      margin-bottom: 28px;
      border: none;
      margin-bottom: 28px;
      background: #FFFFFF;
      box-shadow: 0px 4px 8px 3px rgb(0 0 0 / 15%), 0px 1px 3px rgb(0 0 0 / 30%);
      border-radius: 24px;
      padding: 20px;
    }
    #results .hl-simulator__field-box {
      height: 52px;
      background: #F9F9F9;
      border: 1px solid #E6E7E7;
      border-radius: 8px;
    }
    #results .hl-simulator__field-box .money-symbol {
      width: 50px;
      border-color: #E6E7E7;
    }
    #results .hl-simulator__field-box [type=text], #results .hl-simulator__field-box [type=number], #results .hl-simulator__field-box select {
      padding: 0 10px;
      font-size: 16px;
    }
    body {
      background: linear-gradient(180deg, #EDF1FD 0%, #FFFFFF 10.71%);
    }
    .container--hero {
      background: transparent;
    }
    .lav-toggle__calc {
      background: #FFFFFF;
      border: 1px solid #0071EB;
      border-radius: 8px;
      padding: 8px 16px;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #0071EB;
    }
    #results .filters__trigger {
      margin-bottom: 0;
    }
    #results .hl-simulator__panel + .card {
      margin-top: 16px;
    }
    .filters+.col-9 .card:first-child {
      margin-top: 16px;
    }
  }
`;

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles;
document.body.appendChild(stylesEl);
/*** STYLES / end ***/

let banks = [
  { name: 'ABanca', value: '', img: false },
  { name: 'ActivoBank', value: '', img: 'ActivoBank.png' },
  { name: 'Banco Best', value: '', img: 'best.svg' },
  { name: 'Bankinter', value: '', img: 'bankinter.svg' },
  { name: 'BPI', value: '', img: 'BPI.svg' },
  { name: 'Caixa Agrícola', value: '', img: 'CA.png' },
  { name: 'CGD', value: 'Caixa Geral', img: 'CGD.png' },
  { name: 'CTT', value: '', img: false },
  { name: 'Eurobic', value: '', img: 'EuroBic.png' },
  { name: 'Millennium BCP', value: '', img: 'millennium.png' },
  { name: 'Montepio', value: '', img: '' },
  { name: 'Novo Banco', value: '', img: 'novobanco.svg' },
  { name: 'Santander', value: '', img: 'santander.svg' },
  { name: 'UCI - Unión de Créditos Inmobiliários', value: '', img: '' },
];

/********* Custom Code **********/
// let imaskScript = document.createElement('script');
// imaskScript.src = 'https://unpkg.com/imask';
// document.body.append(imaskScript);

let formData = {};

// let intrevalInit = setInterval(() => {
//   if (
//     (document.querySelector('.container--hero') &&
//       document.querySelector('.hls-simulator__form-group.hls--inline')) ||
//     document.querySelector('.container--listing')
//   ) {
//     clearInterval(intrevalInit);
//     init();
//     gaEvent('loaded');
//   }
// }, 300);

setTimeout(() => {
  init();
}, 500);

let isEventStart = false;

function init() {
  console.log('init');

  gaEvent('loaded');

  const initTopChange = setInterval(() => {
    if (document.querySelector('.container--listing .reviews-counter')) {
      clearInterval(initTopChange);
      initTopInfo();
    }
  }, 500);

  changeCardView();

  setInterval(() => {
    changeImages();

    if (
      document.querySelector('.card') &&
      document.querySelectorAll('.card:not(.lav-card)').length
    ) {
      // document.querySelector(".card .card__logo img[src*='https://www.comparam']")
      changeCardView();
    }
  }, 500);
}

function changeImages() {
  document.querySelectorAll('#simulation-results .card').forEach((card) => {
    for (let bank of banks) {
      if (
        !card.querySelector('.card__logo img').src.includes('flopsi') &&
        bank.img &&
        card
          .querySelector('.card__logo img')
          .alt.includes(bank.value ? bank.value : bank.name)
      ) {
        const url = settings.dir + '/img/' + bank.img;
        card.querySelector('.card__logo img').removeAttribute('data-defer');
        card.querySelector('.card__logo img').setAttribute('data-src', url);
        card.querySelector('.card__logo img').src = url;
      }
    }

    if (
      card.querySelector('.toggle--on') &&
      !card.querySelector('.toggle--on').classList.contains('lav-handled')
    ) {
      card.querySelector('.toggle--on').classList.add('lav-handled');
      card.querySelector('.toggle--on').addEventListener('click', function () {
        const bank = card
          .querySelector('.card__logo img')
          .alt.replace('Crédito Habitação ', '');

        gaEvent('More details', `Bank name: ${bank}`);
      });
    }

    if (
      card.querySelector('.toggle--off') &&
      !card.querySelector('.toggle--off').classList.contains('lav-handled')
    ) {
      card.querySelector('.toggle--off').classList.add('lav-handled');

      card.querySelector('.toggle--off').addEventListener('click', function () {
        const bank = card
          .querySelector('.card__logo img')
          .alt.replace('Crédito Habitação ', '');

        gaEvent('Less details', `Bank name: ${bank}`);
      });
    }

    if (
      card.querySelector(
        '.promotional-content__body>div>table:first-child tr:nth-child(3) td:last-child'
      )
    ) {
      card.querySelector(
        '.card__items-wrapper>div:first-child strong'
      ).innerText = card
        .querySelector(
          '.promotional-content__body>div>table:first-child tr:nth-child(3) td:last-child'
        )
        .innerText.replace('€', '€ ');
    }

    card.querySelector('.card__items-wrapper>div:first-child span').innerText =
      'Prestação Mensal';

    if (
      card.querySelector(
        '.promotional-content__body>div>table:first-child tr:first-child td:last-child'
      )
    ) {
      card.querySelector(
        '.card__items-wrapper>div:nth-child(2) strong'
      ).innerText = card
        .querySelector(
          '.promotional-content__body>div>table:first-child tr:first-child td:last-child'
        )
        .innerText.replace('€', '€ ');
    }
    card.querySelector('.card__items-wrapper>div:nth-child(2) span').innerText =
      'Valor do Pedido';
  });
}

function initTopInfo() {
  let el = `
    <div class='lav-list__wrap lav-list__wrap-single'>
      <div class='lav-list__title'>Carregue em <strong>“Saber como fazer o pedido”</strong> e a nossa equipa especializada vai acompanhá-lo no seguinte:</div>
      <ol class='lav-list'>
        <li class='lav-list__item'>Vamos explicar como pode aumentar as suas hipóteses de conseguir uma boa oferta.</li>
        <li class='lav-list__item'>Vamos dizer-lhe a lista de documentos que precisa para o crédito ser aprovado.</li>
        <li class='lav-list__item'>Vamos apresentar-lhe as melhores propostas de crédito disponíveis para si.</li>
      </ol>
    </div>

    <div class='lav-list__wrap lav-list__wrap-change'>
      <div class='lav-approval'>
        <div class='lav-approval__title'>Temos uma taxa de aprovação líder</div>
        <div class='lav-approval__caption'>no mercado, de 90%</div>
      </div>
      <div class='lav-list__title'>Vai ser-lhe apresentada a seguinte informação quando a nossa equipa entrar em contacto consigo:</div>
      <ol class='lav-list'>
        <li class='lav-list__item'>Como conseguir a melhor oferta de crédito do banco <strong class='lav-list__item-bank'>[bank name]</strong>.</li>
        <li class='lav-list__item'>Os documentos que precisa para conseguir a melhor proposta.</li>
        <li class='lav-list__item'>Informação com as melhores ofertas disponíveis para si.</li>
      </ol>
    </div>
  `;

  if (!document.querySelector('.lav-list__wrap')) {
    document
      .querySelector('.container--listing .reviews-counter')
      .insertAdjacentHTML('afterend', el);
    gaEvent('View element on screen', 'Click Learn how to apply');

    document.querySelectorAll('#simulation-results .card').forEach((card) => {
      card.querySelector('.card__apply a').innerText = 'Como fazer o pedido';
    });
  }

  if (window.innerWidth < 768 && document.querySelector('#results')) {
    document
      .querySelector('#results .row')
      .insertAdjacentHTML(
        'beforeend',
        '<div class="lav-toggle__calc">Alterar os dados do pedido</div>'
      );

    document
      .querySelector('.lav-toggle__calc')
      .addEventListener('click', function () {
        gaEvent('Change credit information', 'First CTA');
        if (!this.classList.contains('active')) {
          this.classList.add('active');
          this.innerText = 'Cancelar';
          document.querySelector(
            '#results .hl-simulator__panel'
          ).style.display = 'block';
          gaEvent(
            'View element on screen',
            'Calculator form afte Change credit information button'
          );
        } else {
          this.classList.remove('active');
          this.innerText = 'Alterar os dados do pedido';
          document.querySelector(
            '#results .hl-simulator__panel'
          ).style.display = 'none';
          gaEvent('Cancel', 'First CTA');
        }
      });
  }

  document
    .querySelector('.capture__closer')
    .addEventListener('click', function () {
      gaEvent('Close popup (cross)', 'Congratulations');
    });

  document
    .querySelector('.capture-overlay')
    .addEventListener('click', function (e) {
      if (
        !e.target.classList.contains('capture__closer') &&
        !e.target.closest('.capture__closer')
      ) {
        gaEvent('Close popup (background)', 'Congratulations');
      }
    });
}

function changeCardView() {
  document
    .querySelectorAll('#simulation-results .card:not(.lav-card)')
    .forEach((card) => {
      card.classList.add('lav-card');

      if (window.innerWidth < 768) {
        card
          .querySelector('.product__features')
          .insertAdjacentElement(
            'beforebegin',
            card.querySelector('.card__footer')
          );

        card
          .querySelector('.toggle--on')
          .insertAdjacentElement(
            'beforebegin',
            card.querySelector('.card__footer')
          );

        if (!card.querySelector('.lav-expand')) {
          let cloneToggler = card.querySelector('.toggle--off').cloneNode(true);

          cloneToggler.classList.add('lav-expand');

          card
            .querySelector('.promotional-content')
            .insertAdjacentElement('beforeend', cloneToggler);
        }
      }

      if (card.classList.contains('card--featured')) {
        card.querySelector('.card__badge').innerText = 'Mais recomendado';
      }

      // card.querySelector('.card__apply a').innerText = 'Como fazer o pedido';

      card
        .querySelector('.card__apply')
        .addEventListener('click', function (e) {
          e.preventDefault();

          if (isEventStart) {
            return false;
          }

          isEventStart = true;

          setTimeout(() => {
            isEventStart = false;
          }, 1000);

          console.log('click card');

          const bank = card
            .querySelector('.card__logo img')
            .alt.replace('Crédito Habitação ', '');

          console.log('isEventStart', isEventStart);
          gaEvent('Learn how to apply', `Bank name: ${bank}`);

          if (
            (!document.querySelector('.container--hero.container--listing') &&
              !document.querySelector('.container--edit')) ||
            document.querySelector('.lav-form-confirmed')
          ) {
            console.log('fireInner');
            this.querySelector('a').click();
            // if (!isEventStart) {
            gaEvent('View element on screen', 'Congratulations');
            // }

            setTimeout(() => {
              isEventStart = false;
            }, 1000);

            if (document.querySelector('.lav-modal-image')) {
              document.querySelector('.lav-modal-image').remove();
            }

            let imgEl = card.querySelector('.card__logo img').cloneNode(true);

            imgEl.classList.add('lav-modal-image');

            if (document.querySelector('.capture-info__numbers')) {
              document
                .querySelector('.capture-container .capture-info__numbers')
                .insertAdjacentElement('beforebegin', imgEl);
            }

            if (document.querySelector('.capture-form .alert strong')) {
              document.querySelector('.capture-form .alert strong').innerText =
                'Parabéns!';
              document.querySelector('.capture-form .alert p').innerText =
                'Está um passo mais perto de conseguir o seu crédito. Vamos ligar-lhe brevemente com mais informações sobre como conseguir a melhor oferta do banco ' +
                bank +
                '!';
            } else {
              setTimeout(() => {
                if (document.querySelector('.capture-form .alert strong')) {
                  document.querySelector(
                    '.capture-form .alert strong'
                  ).innerText = 'Parabéns!';
                  document.querySelector('.capture-form .alert p').innerText =
                    'Está um passo mais perto de conseguir o seu crédito. Vamos ligar-lhe brevemente com mais informações sobre como conseguir a melhor oferta do banco ' +
                    bank +
                    '!';
                }
              }, 350);
            }

            return false;
          }

          document.querySelector('#simulation-results').style.display = 'none';
          document.querySelector('#hlApp').scrollIntoView();

          document.querySelector('.lav-list__item-bank').innerText = bank;
          toggleTopInfo(this);
        });

      changeImages();
    });
}

function toggleTopInfo(clickedEl) {
  const el = `
    <div class='lav-edit'>
      <div class='lav-edit__top'>
        <div class='lav-edit__top-title'>Está quase a terminar! Verifique que os seus dados estão corretos</div>
        <div class='lav-edit__top-caption'>ou poderá deixar passar uma das melhores ofertas.</div>
      </div>
      <div class='lav-edit__bottom lav-preview'>
        <div class='lav-preview__edit'>
          <img src='${settings.dir}/img/edit-icon.svg' />
          Editar
        </div>
        <div class='lav-preview__group'>
          <div class='lav-preview__caption'>Nome</div>
          <div class='lav-preview__value lav-preview__name'>-</div>
        </div>
        <div class='lav-preview__group'>
          <div class='lav-preview__caption'>Email</div>
          <div class='lav-preview__value lav-preview__email'>-</div>
        </div>
        <div class='lav-preview__group'>
          <div class='lav-preview__caption'>Telefone</div>
          <div class='lav-preview__value lav-preview__phone'>-</div>
        </div>
        <button class='lav-btn lav-preview__btn'>Confirmar os meus dados de contacto</button>
      </div>
      <div class='lav-edit__bottom lav-form'>
        <div class='lav-form__group'>
          <div class='lav-form__caption'>Indique o seu nome</div>
          <input class='lav-form__value lav-form__name' placeholder='John Doe' />
        </div>
        <div class='lav-form__group'>
          <div class='lav-form__caption'>Indique o seu email</div>
          <input class='lav-form__value lav-form__email' placeholder='forexample@gmail.com' />
        </div>
        <div class='lav-form__group'>
          <div class='lav-form__caption'>Indique o seu número de telefone</div>
          <input class='lav-form__value lav-form__phone' placeholder='+351 102 204 305' />
        </div>
        <button class='lav-btn lav-form__btn'>Confirmar os meus dados de contacto</button>
      </div>
    </div>
  `;

  if (document.querySelector('.container--listing')) {
    document
      .querySelector('.container--listing')
      .classList.add('container--edit');
    document
      .querySelector('.container--listing')
      .classList.remove('container--listing');

    gaEvent(
      'View element on screen',
      'Almost done! Double-check your details are correct'
    );
  }

  if (!document.querySelector('.lav-edit')) {
    if (window.innerWidth > 768) {
      document
        .querySelector('.container--edit .page__title')
        .insertAdjacentHTML(
          'afterbegin',
          `<div class="lav-back"><img src='${settings.dir}/img/back-icon.svg' /> Back to results</div>`
        );
    } else {
      document
        .querySelector('.lav-list__wrap-change')
        .insertAdjacentHTML(
          'afterbegin',
          `<div class="lav-back"><img src='${settings.dir}/img/back-icon.svg' /> Back to results</div>`
        );
    }

    document.querySelector('.lav-back').addEventListener('click', function () {
      gaEvent(
        'Back to results',
        'Almost done! Double-check your details are correct'
      );
      finishForm();
    });

    document
      .querySelector('.page__simulator')
      .insertAdjacentHTML('afterbegin', el);

    document.querySelector('.lav-preview__name').innerText = formData.name;
    document.querySelector('.lav-preview__email').innerText = formData.email;
    document.querySelector('.lav-preview__phone').innerText = formData.phone;
    document.querySelector('.lav-form__name').value = formData.name;
    document.querySelector('.lav-form__email').value = formData.email;
    document.querySelector('.lav-form__phone').value = formData.phone;

    document
      .querySelector('.lav-preview__edit')
      .addEventListener('click', function () {
        document.querySelector('.lav-preview').style.display = 'none';
        document.querySelector('.lav-form').style.display = 'block';
        gaEvent('Edit', 'Almost done! Double-check your details are correct');
        gaEvent(
          'View element on screen',
          'Form with name and email on Almost done section'
        );
      });

    for (let input of document.querySelectorAll('.lav-form__value')) {
      input.addEventListener('focus', function () {
        if (input.classList.contains('lav-form__name')) {
          gaEvent(
            'Input. Name',
            'Form with name and email on Almost done section'
          );
        } else if (input.classList.contains('lav-form__email')) {
          gaEvent(
            'Input. Email',
            'Form with name and email on Almost done section'
          );
        } else if (input.classList.contains('lav-form__phone')) {
          gaEvent(
            'Input. Phone',
            'Form with name and email on Almost done section'
          );
        }
        if (input.classList.contains('lav-error__input')) {
          input.classList.remove('lav-error__input');
        }
        if (
          input.nextElementSibling &&
          input.nextElementSibling.classList.contains('lav-error')
        ) {
          input.nextElementSibling.remove();
        }
      });
    }

    for (let item of document.querySelectorAll('.lav-btn')) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        // if (item.classList.contains('lav-preview__btn')) {
        gaEvent(
          'Confirm my contact details',
          'Almost done! Double-check your details are correct'
        );
        // }

        if (
          document.querySelector('.lav-form__name').value == formData.name &&
          document.querySelector('.lav-form__email').value == formData.email &&
          document.querySelector('.lav-form__phone').value == formData.phone
        ) {
          finishForm(clickedEl);
        } else {
          if (!validateForm()) return false;

          item.setAttribute('disabled', 'disabled');

          (async () => {
            const data = {
              action: 'update_pd_deal',
              ref: JSON.parse(sessionStorage.getItem('HL:captured')).ref,
              name: document.querySelector('.lav-form__name').value,
              email: document.querySelector('.lav-form__email').value,
              phoneNumber: document.querySelector('.lav-form__phone').value,
              token: '6ed98285-ac5c-48c9-9f66-72f91fbc296f',
            };

            const formData = new FormData();

            for (let item in data) {
              formData.append(item, data[item]);
            }

            const res = await fetch(
              'https://www.comparamais.pt/wp-admin/admin-ajax.php',
              {
                method: 'POST',
                // headers: {
                //   Accept: 'application/json',
                //   'Content-Type': 'multipart/form-data',
                // },
                body: formData,
              }
            );

            const status = await res.json();

            if (status['success']) {
              finishForm(clickedEl);
            }
          })();
        }
      });
    }
  }
}

function validateForm(isMain) {
  for (let errorEl of document.querySelectorAll('.lav-error')) {
    errorEl.remove();
  }

  for (let errorEl of document.querySelectorAll('.lav-error__input')) {
    errorEl.classList.remove('lav-error__input');
  }

  let isValid = true;

  if (isMain) {
    for (let input of document.querySelectorAll(
      '.simulator-container__capture-form input'
    )) {
      if (!input.value) {
        input.insertAdjacentHTML(
          'afterend',
          "<div class='lav-error'>Por favor, preencha o campo requisitado</div>"
        );

        input.classList.add('lav-error__input');

        isValid = false;
      }
    }
  } else {
    for (let input of document.querySelectorAll('.lav-form__value')) {
      if (!input.value) {
        input.insertAdjacentHTML(
          'afterend',
          "<div class='lav-error'>Por favor, preencha o campo requisitado</div>"
        );

        input.classList.add('lav-error__input');

        isValid = false;
      }
    }
  }

  if (!isValid) return isValid;

  if (
    /\S+@\S+\.\S+/.test(document.querySelector('.lav-form__email').value) ==
    false
  ) {
    document
      .querySelector('.lav-form__email')
      .insertAdjacentHTML(
        'afterend',
        "<div class='lav-error'>Garanta que o endereço de email que indicou está correto</div>"
      );

    document
      .querySelector('.lav-form__email')
      .classList.add('lav-error__input');

    isValid = false;
  }

  let phoneVal = document
    .querySelector('.lav-form__phone')
    .value.replaceAll(' ', '');

  if (
    phoneVal.length < 6 ||
    phoneVal.length > 15 ||
    /^\+?\d+$/.test(phoneVal) == false
  ) {
    document
      .querySelector('.lav-form__phone')
      .insertAdjacentHTML(
        'afterend',
        "<div class='lav-error'>Este número não existe</div>"
      );

    document
      .querySelector('.lav-form__phone')
      .classList.add('lav-error__input');

    isValid = false;
  }

  return isValid;
  document.querySelector('.lav-form__name').value == formData.name &&
    document.querySelector('.lav-form__email').value == formData.email &&
    document.querySelector('.lav-form__phone').value == formData.phone;
}

function finishForm(clickedEl) {
  if (clickedEl) {
    document
      .querySelector('.container--hero')
      .classList.add('lav-form-confirmed', 'container--listing');
  } else {
    document
      .querySelector('.container--hero')
      .classList.add('container--listing');
  }

  document
    .querySelector('.container--edit')
    .classList.remove('container--edit');

  document.querySelector('#simulation-results').style.display = 'block';
  document.querySelector('.lav-edit').remove();
  document.querySelector('.lav-back').remove();
  document.querySelector('.page__simulator').scrollIntoView();

  if (clickedEl) {
    clickedEl.click();
  }
}

let startFunk = setInterval(() => {
  if (document.querySelector('#hlApp')) {
    clearInterval(startFunk);

    const imgFolderUrl =
      'https://conversionratestore.github.io/projects/comparamais/img/';

    let eventVar = 'desktop';

    if (window.innerWidth <= 768) {
      eventVar = 'mobile';
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(actionDataLayer + ' : ' + labelDataLayer);
        dataLayer.push({
          event: 'event-to-ga',
          eventCategory: `Exp: - Sell the call ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(actionDataLayer);
        dataLayer.push({
          event: 'event-to-ga',
          eventCategory: `Exp: - Sell the call ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        });
      }
    }

    if (location.search !== '?experiement=HL-Simulator-Sell_the_call') {
      window.history.replaceState(
        null,
        null,
        '?experiement=HL-Simulator-Sell_the_call'
      );
    }

    let newStyle = /*html */ `
      <style>
          .is_hidden{
              display: none;
          }
          .new_text_wrap{
              padding: 28px 0;
          }
          .accent_wrap{
              background: #E6EDF0;
              border-radius: 8px;
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin: 0 0 16px;
          }
          .accent_wrap p{
              font-weight: 700;
              font-size: 18px;
              line-height: 24px;
              color: #1F1F1F;
          }
          .accent_wrap p.accent_green{
              color: #229F55;
          }
          .new_text_wrap h2{
              font-weight: 400 !important;
              font-size: 18px !important;
              line-height: 22px !important;
              color: #1F1F1F !important;
              margin: 0 !important;
              max-width: 502px;
          }
          .new_text_wrap ul{
              margin: 16px 0;
          }
          .new_text_wrap ul li{
              position: relative;
              padding-left: 36px;
          }
          .new_text_wrap ul li::before{
              position: absolute;
              content:'';
              background: url('${imgFolderUrl}documents.svg');
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              width: 24px;
              height: 24px;
          }
          .new_text_wrap ul li:nth-child(1):before{
              background: url('${imgFolderUrl}secure.svg');
          }
          .new_text_wrap ul li:nth-child(3):before{
              background: url('${imgFolderUrl}information.svg');
          }
          .new_text_wrap ul li + li{
              margin-top: 16px;
          }
          .new_text_wrap ul span{
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
              color: #1F1F1F;
              margin: 0;
          }
          .new_text_wrap > p{
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
              color: #474A48;
          }
          @media (max-width: 768px) {
              .simulator-container{
                  margin-top: 0 !important;
              }
              .accent_wrap{
                  padding: 16px;
              }
          }
          @media (max-width: 320px) {
              .accent_wrap {
                  padding: 10px;
              }
              .accent_wrap p{
                  font-size: 14px;
              }
              .new_text_wrap h2{
                  font-size: 13px !important;
              }
              .new_text_wrap ul span{
                  font-size: 12px;
              }
              .new_text_wrap > p{
                  font-size: 12px;
              }
          }
      </style>
      `;

    let newBlock = /*html */ `
      <div class="new_text_wrap" data-visability="1">
          <div class="accent_wrap" data-event>
              <p data-event>Temos uma taxa de aprovação líder</p>
              <p class="accent_green" data-event>no mercado, de 90%</p>
          </div>
          <h2 class="new_title" data-event>Vamos dar-lhe as seguintes informações quando a nossa equipa entrar em contacto consigo:</h2>
          <ul class="new_list">
              <li class="new_link">
                  <span data-event>Como conseguir a melhor oferta.</span>
              </li>
              <li class="new_link">
                  <span data-event>Os documentos que precisa para receber as melhores propostas.</span>
              </li>
              <li class="new_link">
                  <span data-event>Quais os melhores créditos habitação disponíveis para si.</span>
              </li>
          </ul>
          <p class="new_text" data-event>Preencha o formulário seguinte e será contactado nas próximas horas!</p>
      </div>
      `;
    document.head.insertAdjacentHTML('beforeend', newStyle);

    const runObserver = () => {
      // Mutation Observer
      const target = document.querySelector('.simulator-wrapper');
      const config = {
        childList: true,
        subtree: true,
      };

      let observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
          for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            // console.log(`added`, node)

            // TODO: uncomment this line if we need to handle the mutation
            if (node.matches('.simulator-container__capture-form')) {
              document
                .querySelector('.page__title')
                .insertAdjacentHTML('beforeend', newBlock);
              document
                .querySelector('.container--hero .header-list')
                .classList.add('is_hidden');
              if (window.innerWidth <= 768) {
                setTimeout(() => {
                  console.log('scroll');
                  document.querySelector('.new_text_wrap')?.scrollIntoView();
                }, 100);
              }

              let evTxt = 'Hover';
              let ev = 'mouseenter';

              if (window.innerWidth <= 768) {
                evTxt = 'Click';
                ev = 'click';
              }

              document.querySelectorAll('[data-event]').forEach((el) => {
                el.addEventListener(`${ev}`, (e) => {
                  if (!e.target.getAttribute('data-test')) {
                    if (e.target.classList.contains('accent_wrap')) {
                      pushDataLayer(`${evTxt} on gray color block"`);
                    } else {
                      pushDataLayer(
                        `${evTxt} on text "${e.target.textContent}"`
                      );
                    }
                  }
                  e.target.setAttribute('data-test', '1');

                  setTimeout(() => {
                    if (e.target.getAttribute('data-test')) {
                      e.target.removeAttribute('data-test');
                    }
                  }, 500);
                });
              });
            } else if (node.matches('.simulator-container')) {
              if (document.querySelector('.message--success')) {
                console.log('Yes');
                document
                  .querySelector('.page__title')
                  .insertAdjacentHTML('beforeend', newBlock);
                document
                  .querySelector('.container--hero .header-list')
                  .classList.add('is_hidden');

                if (window.innerWidth <= 768) {
                  setTimeout(() => {
                    console.log('scroll');
                    document.querySelector('.new_text_wrap')?.scrollIntoView();
                  }, 100);
                }

                let evTxt = 'Hover';
                let ev = 'mouseenter';

                if (window.innerWidth <= 768) {
                  evTxt = 'Click';
                  ev = 'click';
                }

                document.querySelectorAll('[data-event]').forEach((el) => {
                  el.addEventListener(`${ev}`, (e) => {
                    if (!e.target.getAttribute('data-test')) {
                      if (e.target.classList.contains('accent_wrap')) {
                        pushDataLayer(`${evTxt} on gray color block"`);
                      } else {
                        pushDataLayer(
                          `${evTxt} on text "${e.target.textContent}"`
                        );
                      }
                    }
                    e.target.setAttribute('data-test', '1');

                    setTimeout(() => {
                      if (e.target.getAttribute('data-test')) {
                        e.target.removeAttribute('data-test');
                      }
                    }, 500);
                  });
                });
              } else {
                console.log('>>>>NO');
                document.querySelector('.new_text_wrap')?.remove();
                if (
                  document
                    .querySelector('.container--hero .header-list')
                    .classList.contains('is_hidden')
                ) {
                  document
                    .querySelector('.container--hero .header-list')
                    .classList.remove('is_hidden');
                }
                if (window.innerWidth <= 768) {
                  setTimeout(() => {
                    console.log('scroll');
                    document
                      .querySelector('.simulator-container')
                      ?.scrollIntoView();
                  }, 100);
                }
              }
            }
          }
        }
      });

      observer.observe(target, config);
    };

    let startI = setInterval(() => {
      if (document.querySelector('.simulator-wrapper')) {
        clearInterval(startI);
        runObserver();
      }
    }, 100);

    let i = setInterval(() => {
      if (document.querySelector('.new_text_wrap')) {
        clearInterval(i);
        let obs = new IntersectionObserver(visibility, {
          threshold: 0.9,
        });

        let obs2 = new IntersectionObserver(visibility2, {
          threshold: 0.9,
        });

        obs.observe(
          document.querySelector('.new_text_wrap[data-visability="1"]')
        );

        function visibility(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              setTimeout(function () {
                obs2.observe(i.target);
              }, 800);
            }
          });
        }

        function visibility2(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              if (i.target.getAttribute('data-visability') === '1') {
                pushDataLayer(`view the block`);
              }

              // if (window.innerWidth <= 768) {
              //     if (i.target.getAttribute('data-visability') === "1") {
              //         pushDataLayer(`10 seconds of the block view`)
              //     }
              // }

              obs.unobserve(i.target);
            }
            obs2.unobserve(i.target);
          });
        }
        //
        if (window.innerWidth <= 768) {
          let obsMob = new IntersectionObserver(visibilityMob, {
            threshold: 0.9,
          });

          let obsMob2 = new IntersectionObserver(visibilityMob2, {
            threshold: 0.9,
          });

          obsMob.observe(
            document.querySelector('.new_text_wrap[data-visability="1"]')
          );

          function visibilityMob(entries) {
            entries.forEach((i) => {
              if (i.isIntersecting) {
                setTimeout(function () {
                  obsMob2.observe(i.target);
                }, 10000);
              }
            });
          }

          function visibilityMob2(entries) {
            entries.forEach((i) => {
              if (i.isIntersecting) {
                if (i.target.getAttribute('data-visability') === '1') {
                  pushDataLayer(`10 seconds of the block view`);
                }

                obsMob.unobserve(i.target);
              }
              obsMob2.unobserve(i.target);
            });
          }
        }
      }
    }, 100);

    pushDataLayer('loaded');
    const record = setInterval(() => {
      if (typeof clarity === 'function') {
        clearInterval(record);

        clarity('set', `sell_the_call_${eventVar}`, 'variant_1');
      }
    }, 200);
  }
}, 100);
