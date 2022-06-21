let style = `
<style>
    #purchase h2 {
        font-weight: 400;
        font-size: 36px;
        line-height: 30px;
        margin-bottom: 19px;
    }
    #purchase #getNow img {
        max-width: 270px;   
        margin-bottom: 0; 
    }
    .purchase_price {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #0C0B0B;
    }
    .purchase_price b {
        font-size: 18px;
    }
    .rp_wrap {
        font-weight: 500;
        font-size: 14px;
        text-decoration-line: line-through;
        color: #534E4E;
    }
    .purchase_price b.pr_wrap {
        font-size: 22px;
        margin: 0 15px;
    }
    .ps_wrap {
        background: #FF3C7F;
        border-radius: 2px;
        padding: 1px 15px;
        font-family: 'DINEngschrift LT', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }
    .for_pack {
        margin-top: 10px;
    }
    .text_stock {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        margin: 17px 0 24px;
    }
    #purchase .prices, #getNow .days {
        display: none;
    }
    .free_shipping {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-size: 14px;
        line-height: 16px;
        color: #0C0B0B;
        margin-bottom: 20px;
    }
    #purchase #getNow .free_shipping img {
        margin: 0 13px 0 0;
    }
    .max-w-330 {
        max-width: 330px;
    }
</style>`

let html = `
    <div class="purchase_price">
        <div class="for_pack">
            Get
            <b>3 packs</b>
            x
            <b>60 patches</b>
        </div>
        <div class="flex justify-center align-center">  
            <div class="rp_wrap ">Was $<span class="rp">84</span> (Save $ <span class="rs">46.5</span>)</div>

            <b class="pr_wrap">$<span class="pr">37.5</span> </b>
            <div class="ps_wrap">
                <span class="ps">52</span>
                % OFF
            </div> 
        </div>
    </div>
`;

document.body.insertAdjacentHTML('afterbegin', style); //add style
document.querySelector('.package .form').insertAdjacentHTML('beforebegin', html); //add html prices
document.querySelector('#purchase #getNow img').style = `margin-bottom: -25px;`; //image PACKAGE
document.querySelector('#getNow p').style.display = 'none'; //hide text behind title
document.querySelector('#getNow img').src = `https://conversionratestore.github.io/projects/buzzpatch/img/patches2.png`; //change image
document.querySelector('.package .form').insertAdjacentHTML('afterend',`<div class="text_stock">Additional <b>10% discount</b> will be applied on the next step</div>`) //add text behind the form
document.querySelector('#addToCart').insertAdjacentHTML('afterend',`
    <div class="free_shipping flex justify-center align-center"> 
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/car.svg" alt="car icon"> 
        <b>FREE</b> worldwide shipping for all orders
    </div>
    <div class="flex justify-between max-w-330 mx-auto">
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/thirty-days.png" alt="thirty days icon"> 
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/trustpilot_new3.png" alt="trustpilot image"> 
    </div>`) //add free shipping text behind the "PROCEED TO CHECKOUT" button and Trustpilot block

//object prices
let objPrice = [   
    {
        'id': '40077473021996',
        'pack': '3',
        'oldPrice': '84',
        'pricePack': '37.5',
        'price': '12',
        'off': '55',
        'save': '46.5'
    },
    {
        'id': '40077473120300',
        'pack': '4',
        'oldPrice': '112',
        'pricePack': '46',
        'price': '11.5',
        'off': '58',
        'save': '66'
    },
    {   
        'id': '40077473087532',
        'pack': '2',
        'oldPrice': '56',
        'pricePack': '27',
        'price': '13.5',
        'off': '51',
        'save': '29'
    },
    {
        'id': '40077473054764',
        'pack': '1',
        'oldPrice': '27.99',
        'pricePack': '16',
        'price': '16',
        'off': '42',
        'save': '11.99'
    }
] 

let price = document.querySelector('.pr_wrap .pr'), 
    priceOld = document.querySelector('.rp_wrap .rp'),
    off = document.querySelector('.ps_wrap .ps'),
    forPack = document.querySelector('.for_pack b');

//change prices
document.querySelectorAll('.js-packs').forEach((pack,i) => {
    pack.querySelector('input').value = objPrice[i].id;
    pack.querySelector('label span').innerHTML = `$${objPrice[i].price} Each`;
    pack.addEventListener('change', (e) => {
        forPack.innerHTML = pack.querySelector('label').innerHTML.toLowerCase().split('<br')[0];

        price.innerHTML = objPrice[i].pricePack;
        priceOld.innerHTML = objPrice[i].oldPrice;
        off.innerHTML = objPrice[i].off;

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: New pricing block',
            'eventAction': `Clicks on package - ${forPack.innerHTML}`
        });
    })
})

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: New pricing block',
    'eventAction': 'loaded'
});