window.onload  = function () {
    document.body.insertAdjacentHTML('afterbegin', `<style>
    .popup {
            background: rgba(69, 69, 69, 0.46);
            position: fixed;
            overflow-y: auto;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: inline-flex;
            z-index: 99999;
            transition: all 0.3s ease;
            opacity: 0;
            pointer-events: none;
            padding: 20px;}
        .popup.isActive {
            opacity: 1;
            pointer-events: auto;}
        .popup-container {
            position: relative;
            margin: auto;
            background: #fff;
            border-radius: 10px;
            padding: 0 16px 20px;}
        .popup_top {
            background: #F9F8F6;
            border-radius: 10px 10px 0 0;
            padding: 38px 16px 30px;
            margin: 0 -16px;}
        .btn-close {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0!important;
            background: #FF3C7F!important;
            width: 35px;
            height: 35px;
            border-radius: 50%!important;
            position: absolute; 
            right: 16px;
            top: -17.5px;}
        .btn-close span {
            color: #fff;}
        .popup__title {
            font-size: 30px;
            line-height: 21px;
            text-align: center;
            margin-bottom: 35px;
            color: #0C0B0B;
            text-transform: uppercase;}
        .flex-center {
            display: flex;
            justify-content: center;}
        .popup__img {
            border: 1px solid #FFDCE8;
            border-radius: 3px;
            height: 90px;
            width: 135px;
            margin: 0 6px;
            object-fit: contain;}
        .popup__list {
            margin-bottom: 0;
            padding: 20px 0 0 8px;}
        .popup__list li {
            margin-top: 15px;
            font-size: 18px;
            line-height: 145.69%;
            color: #FF3C7F;}
        .popup__list li p {
            margin: 0;
            color: #000000;}
        .popup__total {
            margin-bottom: 8px;
            padding-top: 27px;
            color: #FF3C7F;
            font-weight: bold;
            font-size: 24px!important;
            text-align: center;
            line-height: 21px!important;}
        .popup__patches {
            margin-bottom: 30px;
            font-weight: 500;
            font-size: 14px!important;
            line-height: 21px!important;
            text-align: center;
            color: #000000;}
        .popup .btn {
            padding: 0;
            font-family: 'Din Condensed',Roboto,sans-serif;
            border-radius: 100px;
            text-transform: uppercase;
            font-weight: 400;
            width: 100%;}
        .popup .popup__add.btn-primary {
            padding: 0;
            font-size: 24px;
            line-height: 46px;
            box-shadow: none;}
        .popup .popup__skip {
            border: 1px solid #FF3C7F;
            font-size: 24px;
            line-height: 44px;
            margin-top: 10px;
            color: #FF3C7F;}
    </style>`);

    let newElement = `
    <div class="popup">
        <div class="popup-container">
            <a href="${document.querySelector('.package .js-heading .js-btn.btn-primary').getAttribute('href')}" class="btn-close btn-cl">
                <span class="fas fa-times" aria-hidden="true"></span>
            </a>
            <div class="popup_top">
            <h2 class="popup__title">Add Itch relief patches</h2>
                <div class="flex-center">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/image77.png" alt="img" class="popup__img">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/girl_solo_900x1.png" alt="img" class="popup__img">
                </div>
                <ul class="popup__list">
                    <li><p>Reduce pain in 30-60 seconds</p></li>
                    <li><p>Lasts for up to 7 days</p></li>
                    <li><p>Waterproof</p></li>
                    <li><p>100% natural</p></li>
                </ul>
            </div>
            <p class="popup__total">$<span>${document.querySelector('.js-total .pr').innerHTML} </span> /pack</p>
            <p class="popup__patches">27 patches in 1 pack</p>
            <a href="https://buzz-patch.myshopify.com/a/secure/checkout/vLWFoKhNuowErJ4w3UQa" class="popup__add btn js-btn btn-primary">Add</a>
            <a href="${document.querySelector('.package .js-heading .js-btn.btn-primary').getAttribute('href')}" class="popup__skip btn btn-cl">Skip</a>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', newElement);

    document.querySelector('.package .js-heading .js-btn.btn-primary').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.popup').classList.add('isActive');
    });

    document.querySelector('#getNow').addEventListener('change', () => {
        document.querySelectorAll('.btn-cl').forEach(item => {
            item.setAttribute('href',  document.querySelector('.package .js-heading .js-btn.btn-primary').getAttribute('href'));
            document.querySelector('.popup__total span').innerHTML = document.querySelector('.js-total .pr').innerHTML;
        });
        document.querySelectorAll('.js-packs').forEach((element, index) => {
            if (element.querySelector('input').checked) {
                if (index == 0) {
                    document.querySelector('.popup__add').setAttribute('href', 'https://buzz-patch.myshopify.com/a/secure/checkout/vLWFoKhNuowErJ4w3UQa');
                } else if (index == 1) {
                    document.querySelector('.popup__add').setAttribute('href', 'https://buzz-patch.myshopify.com/a/secure/checkout/Xi4NXSflSv8HtgyslK9X');
                } else if (index == 2) {     
                    document.querySelector('.popup__add').setAttribute('href', 'https://buzz-patch.myshopify.com/a/secure/checkout/kTTOTJbbZ9ZzUt3uIzsG');
                } else if (index == 3) {
                    document.querySelector('.popup__add').setAttribute('href', 'https://buzz-patch.myshopify.com/a/secure/checkout/RB5EOORBafijZmGylohb'); 
                }
            }
        });
    });
};
