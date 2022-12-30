let dir = 'https://conversionratestore.github.io/projects/buzzpatch/img/'

let styles = `
<style>
body.fix-scroll {
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
.popup_slide-in {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: all 0.25s ease;
    font-family: 'Roboto', sans-serif;
}
.popup_slide-in .container {
    width: calc(100% - 38px);
    margin-left: auto;
    margin-right: 0;
    background-color: #fff;
    transform: translateX(100px);
    transition: all 0.25s ease;
    min-height: 100vh;
    padding: 16px;
}
.popup_slide-in.active {
    opacity: 1;
    pointer-events: auto;
}
.popup_slide-in.active .container {
    transform: translateX(0);
}
.popup_slide-in hr {
    width: 100%;
    height: 1px;
    background-color: #ECEEF0;
    margin: 12px 0;
}
.popup_head {
    padding-bottom: 20px;
}
.popup_head h3 {
    font-weight: 400;
    font-size: 26px;
    line-height: 110%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #212529;
    margin: 0;
}
.btn-close {
    background: rgba(255, 60, 127, 0.1);
    border-radius: 60px;
    width: 24px;
    height: 24px;
    border: none;
}
.btn-close svg {
    pointer-events: none;
}
.packages {
    padding-bottom: 12px;
}
.packages label {
    padding: 8px;
    border: 1px solid #ECEEF0;
    box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    position: relative;
    z-index: 2;
    margin-bottom: 8px;
}
.packages label img {
    width: 75px;
    height: 75px;
    border-radius: 3px;
    margin-right: 8px;
    object-fit: contain;
}
.packages_price {
    font-family: 'DINEngschrift LT', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0C0B0B;
    margin-bottom: 4px;
}
.packages_packs {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #6F6F6F;
    margin-bottom: 4px;
}
.packages_prices {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #0C0B0B;
}
.packages_prices span:first-child {
    font-size: 12px;
    text-decoration-line: line-through;
    color: #6F6F6F;
}
.packages_save, .packages_best-deal, .packages_top-seller {
    font-family: 'DINEngschrift LT', sans-serif;
    border-radius: 3px;
    width: 73px;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 4px;
}
.packages_save {
    background: #4CAF50;
}
.packages_best-deal {
    background: #EFAE16;
    color: #0C0B0B;
}
.packages_top-seller {
    background: #0C0B0B;
}
.packages_check {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
[name="packages-radio"] {
    display: none;
}
[name="packages-radio"]:checked ~ .packages_check  {
    background: #FFEBF2;
    border: 2px solid #FF3C7F;
    box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    z-index: -1;
}
.packages_total {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #0C0B0B;
    margin-bottom: 4px;
}
.packages_regular {
    font-size: 14px;
    line-height: 130%;
    color: #6F6F6F;
    margin-bottom: 20px;
}
.popup_slide-in .js-btn.btn-primary {
    width: 100%;
    padding: 20px 10px 16px;
}
.pointer-none {
    pointer-events: none;
}
</style>`
    
//push dataLayer
function pushDataLayer(action) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: magicpatch_slide_in_pdp',
        'eventAction': action
    });
}

let run = setInterval(() => {
    if (document.querySelector('.popup_slide-in') == null && document.querySelector('.js-packs label > span') != null && document.querySelector('.js-heading .btn-primary') != null) {

        let packages = [
            {
                "id": "39307595546668",
                "price": (getpack4SalePrice.split(',').join('') / 4).toFixed(2),
                "packs": "4 Packs",
                "regularPrice": getpack4RegularPrice,
                "salePrice": getpack4SalePrice,
                "savePrice": getpack4SavePrice,
                "offPrice": getpack4OffPrice,
                "bestDeal": true,
                "image": "pack4.png"
            },
            {
                "id": "39307593187372",
                "price": (getpack3SalePrice.split(',').join('') / 3).toFixed(2),
                "packs": "3 Packs",
                "regularPrice": getpack3RegularPrice,
                "salePrice": getpack3SalePrice,
                "savePrice": getpack3SavePrice,
                "offPrice": getpack3OffPrice,
                "topSeller": true,
                "image": "pack3.svg"
            },
            {
                "id": "39307589058604",
                "price": (getpack2SalePrice.split(',').join('') / 2).toFixed(2),
                "packs": "2 Packs",
                "regularPrice": getpack2RegularPrice,
                "salePrice": getpack2SalePrice,
                "savePrice": getpack2SavePrice,
                "offPrice": getpack2OffPrice,
                "image": "pack2.svg"
            },
            {
                "id": "34767547138092",
                "price": getpack1SalePrice,
                "packs": "1 Pack",
                "regularPrice": getpack1RegularPrice,
                "salePrice": getpack1SalePrice,
                "savePrice": getpack1SavePrice,
                "offPrice": getpack1OffPrice,
                "image": "pack1.svg"
            }
        ]
    
        let currency = document.querySelector('.js-packs label > span').innerHTML.charAt(0);

        let popupHTML = `
        <div class="popup_slide-in" id="popup_slide-in">
            <div class="container d-flex flex-column justify-content-between">
                <div>
                    <div class="popup_head d-flex align-items-center justify-content-between">
                        <h3>Select package</h3>
                        <button type="button" class="btn-close d-flex">
                            <svg class="m-auto" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1.30571L7.19429 0.5L4 3.69429L0.805714 0.5L0 1.30571L3.19429 4.5L0 7.69429L0.805714 8.5L4 5.30571L7.19429 8.5L8 7.69429L4.80571 4.5L8 1.30571Z" fill="#FF3C7F"/>
                            </svg>
                        </button>
                    </div>
                    <div class="packages"></div>
                    <div class="packages_total text-center">
                        ${currency}<span class="pr">${packages[1].salePrice}</span> (<span class="ps">${packages[1].offPrice}%</span> OFF)
                    </div>
                    <div class="packages_regular text-center">
                        Reg. Price: ${currency}<span class="rp">${packages[1].regularPrice}</span> (Save <span class="rs">${packages[1].savePrice}</span>)
                    </div>
                    <a href="/cart/39307593187372:1" class="btn js-btn btn-primary" >PROCEED TO CHECKOUT</a>
                </div>
    
                <div class="popup_foot">
                    <hr>
                    <img src="${dir}icons.svg" width="100%" alt="icons">
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', styles);
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        for (let i = 0; i < packages.length; i++) {
            document.querySelector('.packages').insertAdjacentHTML('beforeend', setPack(currency, packages[i].image, packages[i].price, packages[i].packs, packages[i].regularPrice, packages[i].salePrice, packages[i].offPrice, packages[i].bestDeal, packages[i].topSeller))
            document.querySelectorAll('[name="packages-radio"]')[i].addEventListener('click', (e) => {
                console.log(e.target)
                if (e.target.checked) {
                    document.querySelector('.packages_total .pr').innerHTML = packages[i].salePrice;
                    document.querySelector('.packages_total .ps').innerHTML = packages[i].offPrice + '%';
                    document.querySelector('.packages_regular .rp').innerHTML = packages[i].regularPrice;
                    document.querySelector('.packages_regular .rs').innerHTML = packages[i].savePrice;
                    document.querySelector('.popup_slide-in .btn').href = `/cart/${packages[i].id}:1`;
                    pushDataLayer('Click on product on slide-in PDP')
                }
                if (!e.target.classList.contains('active')) {
                    document.querySelector('.active[name="packages-radio"]').classList.remove('active');
                }

                if (e.target.classList.contains('active') && e.target.checked) {
                    console.log(e.target)
                    pushDataLayer('Second click on the selected product on slide-in PDP');
                    window.location.href = document.querySelector('.popup_slide-in a.btn-primary').href;
                }

                e.target.classList.add('active');
            })
        }
        
        document.querySelector('.navbar .btn-primary').href = '#popup_slide-in';
        document.querySelector('.js-heading .btn-primary').href = '#popup_slide-in';
        document.querySelector('.js-mobile .btn-primary').href = '#popup_slide-in';
        document.querySelector('#included .btn-primary').href = '#popup_slide-in';
        
        document.addEventListener('click', (e) => {
            if (((e.target.closest('.navbar') || e.target.closest('header') || e.target.closest('#included')  || e.target.closest('.js-mobile')) && e.target.classList.contains('btn-primary')) || e.target.classList.contains('btn-close') || e.target.classList.contains('popup_slide-in')) {
                e.preventDefault();
                document.querySelector('.popup_slide-in').classList.toggle('active');
                document.body.classList.toggle('fix-scroll')

                if (document.querySelector('.popup_slide-in').classList.contains('active')) {
                    pushDataLayer('Visibility slide-in PDP');
                } else {
                    pushDataLayer('Close slide-in PDP')
                }
            }
            if (e.target.closest('.popup_slide-in') && e.target.classList.contains('btn-primary') ) {
                pushDataLayer('Click on Proceed to checkout button on slide-in PDP')
            }
        })  
        const appHeight = () => {
            document.querySelector('.popup_slide-in').style.height = window.innerHeight + 'px';
        }
        window.addEventListener('resize', appHeight)
        appHeight()

        pushDataLayer('loaded')

        function setPack(currency, image, price, packs, regularPrice, salePrice, offPrice , bestDeal = false, topSeller = false) {
            return `
            <label class="d-flex justify-content-between">
                <input type="radio" name="packages-radio" ${topSeller == true ? 'checked class="active"': ''}>
                <span class="packages_check"></span>
                <div class="d-flex align-items-center pointer-none">
                    <img src="${dir + image}" alt="image">
                    <div>
                        <div class="packages_price">
                            ${currency}<span>${price}</span>/pack
                        </div>
                        <div class="packages_packs">${packs}</div>
                        <div class="packages_prices">
                            <span>${currency + regularPrice}</span>
                            <span>${currency + salePrice}</span>
                        </div>
                    </div>
                </div>
                <div class="pointer-none">
                    <div class="packages_save">Save ${offPrice}%</div>
                    ${bestDeal == true ? '<div class="packages_best-deal">best deal</div>' : ''}
                    ${topSeller == true ? '<div class="packages_top-seller">Top seller</div>' : ''}
                </div>
            </label>`
        }
    }
})


//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "magicpatch_slide_in_pdp", "variant_1");
    }
}, 100)
