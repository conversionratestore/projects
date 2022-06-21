let style = `
<style>
    #purchase h2 {
        font-weight: 400;
        font-size: 36px;
        line-height: 30px;
        margin-bottom: 18px;
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
        padding-bottom: 35px;
    }
    .purchase_price b {
        font-size: 18px;
    }
    .rp_wrap {
        color: #777777;
        font-size: 25px;
        line-height: 34px;
    }
    .line-through {
        text-decoration-line: line-through;
    }
    .purchase_price b.pr_wrap {
        font-size: 25px;
        line-height: 34px;
        margin: 0 5px;
    }
    .ps_wrap {
        background: #FF3C7F;
        border-radius: 3px;
        padding: 5px 18px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        margin: 5px auto 0;
        width: fit-content;
    }
    .for_pack {
        margin: 10px 0 18px;
        font-size: 16px;
        line-height: 24px;
    }
    #purchase .prices, #getNow .days {
        display: none;
    }
    .package .form {
        margin-bottom: 30px;
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
            <b class="pr_wrap">$<span class="pr">36</span> </b>
            <div class="rp_wrap line-through">$<span class="rp">74.97</span></div>
        </div>
        <div class="ps_wrap"> Save $<span class="rs">39</span> (<span class="ps">52</span>% OFF) </div> 
    </div>
`

window.onload  = function () {
    document.head.insertAdjacentHTML('beforeend',`<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">`); //add font
    document.body.insertAdjacentHTML('afterbegin', style); //add style
    document.querySelector('.package .form').insertAdjacentHTML('beforebegin', html); //add html prices
    document.querySelector('#purchase #getNow img').style = `margin-bottom: -40px;`; //image PACKAGE
    document.querySelector('#getNow p').style.display = 'none'; //hide text behind title
    document.querySelector('#getNow img').src = `https://conversionratestore.github.io/projects/buzzpatch/img/package_patches.png`; 
    document.querySelector('#getNow img').srcset = `https://conversionratestore.github.io/projects/buzzpatch/img/package_patches.png`; 
    document.querySelector('#addToCart').insertAdjacentHTML('afterend',`<img src="https://conversionratestore.github.io/projects/buzzpatch/img/trust.png" alt="trust icon">`) //add Trustpilot block behind the "PROCEED TO CHECKOUT" button

    let price = document.querySelector('.pr_wrap .pr'), 
        priceOld = document.querySelector('.rp_wrap .rp'),
        off = document.querySelector('.ps_wrap .ps'),
        forPack = document.querySelector('.for_pack b'),
        save = document.querySelector('.ps_wrap .rs');

    //change prices
    let newPrices = [
        ['12', '36', '52', '74.97', '39', '39264142393388'], // 3pack
        ['10.5', '42', '58', '99.96', '58', '39264134070316'], // 4pack
        ['13.5', '27', '46', '49.98', '23', '39307585519660'], // 2pack
        ['14.99', '14.99', '40', '24.99', '10', '34137893142572'] // 1pack
    ]

    document.querySelectorAll('.js-packs').forEach((pack,i) => {
        let e = pack;

        let d = document.createElement('label');
            d.classList.add('js-packs')
        d.innerHTML = e.innerHTML;
    
        e.parentNode.insertBefore(d, e);
        e.parentNode.removeChild(e);

        console.log(pack)
        console.log(d)
        pack[0].querySelector('input').checked = true;
        d.addEventListener('click', (e) => {
            if (e.target.parentElement.querySelector('input').checked) {
                forPack.innerHTML = e.target.parentElement.querySelector('label').innerHTML.toLowerCase().split('<br')[0];
                price.innerHTML = +newPrices[i][1];
                priceOld.innerHTML = newPrices[i][3];
                off.innerHTML = newPrices[i][2];
                save.innerHTML = newPrices[i][4];
            }
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: New pricing block (v2)',
                'eventAction': `Clicks on package - ${forPack.innerHTML}`
            });
        })
    })
    document.querySelector('#addToCart').addEventListener('click', (e) => {
        e.preventDefault()
        let formData = {
            'items': [{
                'id': document.querySelector('.js-packs input:checked').value,
                'quantity': 1
            }]
        };
        fetch('/cart/clear.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                return response.json();
            }).then(data => {
            window.location.href = '/checkout'
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    })      
};

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: New pricing block (v2)',
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarify)
		clarity('set', `new_pricing_block`, 'variant_2')
	}
}, 100)
