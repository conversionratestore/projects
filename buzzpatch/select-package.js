window.onload  = function () {
    let style = `
    <style>
        @media screen and (max-width: 767px) {
            .select-kids {
                border: 2px solid #FCBC4D;
                border-radius: 100px;
                margin-bottom: 20px;
                margin-top: 8px;
                padding: 1px;}
            #getNow{
                padding: 20px 20px 20px!important}
            .package .form {
                max-width: 375px;
                margin: 20px auto 0}
            .check-kids {
                display: block;
                font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                color: #0C0B0B;
                padding: 14px 22px 12px ;
                border-radius: 100px;}
            .checkbox:checked ~ .check-kids{
                background: #F9B749;}
            .package h2 {
                font-size: 36px!important;
                line-height: 30px;
                margin-bottom: 17px!important;}
            .package .form {
                margin-top: 30px;}
            .package #getNow p.text-dynamically {
                margin-bottom: 32px!important;
                font-size: 16px!important;
                line-height: 19px!important;
                text-align: center;
                font-weight: 400;
                color: #000000;}
            .counter-btn {
                border: 1px solid #FF3C7F;
                width: 40px;
                height: 40px;
                position: relative;
                transition: all 0.3s ease;
                border-radius: 50%;}
            .counter-btn:before, .counter-btn_plus:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                background-color: #FF3C7F;
                border-radius: 0.5px;
                transition: all 0.3s ease;}
            .counter-btn:before {
                width: 15px;
                height: 3px;}
            .counter-btn_plus:after {
                width: 3px;
                height: 15px;}
            .counter-btn.active {
                background-color: #FF3C7F;}
            .counter-btn.active:before, .counter-btn.active:after {
                background-color: #fff;}
            input.counter-input {
                margin-top: 7px;
                width: 67px;
                font-size: 24px;
                line-height: 28px;
                text-align: center;
                padding: 0;
                color: #000000;
                border: none;
                outline: none;
                background-color: transparent;}
            .packs-block {
                margin: 0!important;
                position: relative;
                border: 2px solid #D7D7D7;
                border-radius: 5px;
                padding: 21px 15px 17px;}
            .checkbox:checked ~ .packs-block {
                background: rgba(255, 60, 129, 0.1);
                border-color:#FF3C81;}
            .packs-pack {
                font-weight: bold;
                font-size: 18px;
                line-height: 27px;
                color: #FFFFFF;  
                background: #FF3C81;
                display: block;
                padding: 0 10px;
                width: fit-content;
                margin-bottom: 12px;
                white-space: nowrap;
                border-radius: 100px;}
            .packs-price {
                font-size: 16px;
                line-height: 19px;
                display: block;
                text-align: left;
                color: #0C0B0B;}
            .packs-days {
                font-size: 18px;
                line-height: 21px;}
            .packs-group {
                padding-top: 20px;}
            .packs-group .bestseller {
                top: 0;
                left: 50%;
                border-radius: 0px 0px 3px 3px;
                transform: translateX(-50%);}
            .for-people {
                line-height: 1;
                display: block;
                font-size: 14px;}
            .package .js-heading .js-btn.btn-primary {
                font-size: 18px!important;}
            .package #getNow p {
                font-size: 20px!important;
                font-weight: 500;
                line-height: 23px!important;
                color: #0C0B0B;}
            .package #getNow p.fs-14 {
                font-weight: 400;
                font-size: 14px!important;
                line-height: 16px!important;}
            .fs-24 {
                font-size: 24px;
                line-height: 28px;}
            .c-pink {
                color: #FF3C7F;}
            .fw-bold {
                font-weight: 700;}
            .form-horizontal .form-group, #getNow .sub, #getNow .star, #getNow img.lazyloaded {
                display: none;}
            #getNow img.lazyloaded.mc {
                display: block;}
        }
    </style>
    `
    document.body.insertAdjacentHTML('afterbegin', style);

    let selectPackage = `
        <div class="select-kids d-md-none d-flex d-md-none justify-content-between">
            <label class="mb-0">
                <input type="radio" name="kids" class="checkbox d-none">
                <span class="check-kids" data-patch="1 patch">Kids 0-2 <br> years</span>
            </label>
            <label class="mb-0">
                <input type="radio" name="kids" class="checkbox d-none" >
                <span class="check-kids" data-patch="2 patches">Kids 3-5 <br> years</span>
            </label>
            <label class=" mb-0">
                <input type="radio" name="kids" class="checkbox d-none" checked>
                <span class="check-kids" data-patch="2-4 patches">Kids 6+ years <br> and adults</span>
            </label>
        </div>
        <p class="text-dynamically d-md-none"></p>
        <div class="d-md-none d-flex justify-content-center counter">
            <button class="counter-btn counter-btn_minus" type="button"></button>
            <div class="text-center">
                <input type="text" class="counter-input" value="1" readonly>   
                <p class="fs-14">person</p>
            </div>
            <button class="counter-btn counter-btn_plus active" type="button"></button>
        </div>
        <div class="packs-group d-md-none"></div>
    `

    document.querySelector('.form-horizontal fieldset').insertAdjacentHTML('afterbegin', selectPackage);

    let packs = [
        {
            id: 34137893142572,
            pack: '1',
            price: '14.99',
            days: '5',
            bestseller: false,
            checked: false,
            save: '25',
        }, 
        {
            id: 39351067279404,
            pack: '3',
            price: '13.5',
            days: '15',
            bestseller: false,
            checked: false,
            save: '32.5'
        }, 
        {
            id: 39351111680044,
            pack: '6',
            price: '12',
            days: '30',
            bestseller: true,
            checked: true,
            save: '40'
        }, 
        {
            id: 39351113678892,
            pack: '12',
            price: '10.5',
            days: '60',
            bestseller: false,
            checked: false,
            save: '47.5'
        },
        {
            id: 39351115186220,
            pack: '24',
            price: '10.5',
            days: '120',
            bestseller: false,
            checked: false,
            save: '47.5'
        }
    ];
            
    let formData = {
        'items': []
    };

    let newElementBestseller = `<span class="bestseller">Bestseller</span>`;

    for (let i = 0; i < packs.length; i++) {
        let newElementPacksLabel = document.createElement('label');
        newElementPacksLabel.className = 'mb-3 w-100';
        newElementPacksLabel.innerHTML = `
            <input type="radio" name="packs" class="checkbox d-none">
            <span class="row align-items-center packs-block">
                <span class="col-4 px-0">
                    <span class="packs-pack" data-pack="${packs[i].pack}">${packs[i].pack} pack</span>
                    <span class="packs-price" data-price="${packs[i].price}">$${packs[i].price}/pack</span>
                </span>
                <span class="col-4 px-0"><span class="fw-bold fs-24 c-pink">=</span></span>
                <span class="col-4 px-0 text-left"><span class="fw-bold c-pink packs-days" data-dayssum="${packs[i].days}" data-days="${packs[i].days}">${packs[i].days} days</span><span class="for-people"></span></span>
            </span>
        `;  
        document.querySelector('.packs-group').append(newElementPacksLabel.cloneNode(true));
        document.querySelectorAll('.packs-group label')[i].setAttribute('data-save', packs[i].save);
        document.querySelectorAll('.packs-group label')[i].setAttribute('data-id', packs[i].id);

        if(packs[i].bestseller === true) {
            document.querySelectorAll('.packs-block')[i].insertAdjacentHTML('afterbegin', newElementBestseller);            
        }
        if(packs[i].checked === true) {
            document.querySelectorAll('.packs-group input')[i].setAttribute('checked','checked');     
            document.querySelector('.js-total .pr').innerHTML = packs[i].pack * packs[i].price * document.querySelector('.counter-input').value;   
            document.querySelector('.js-strike .rp').innerHTML = 20 * packs[i].pack * document.querySelector('.counter-input').value;
            document.querySelector('.js-regular .rs').innerHTML = 20 * packs[i].pack - packs[i].pack * packs[i].price;
            document.querySelector('#purchase .js-btn').setAttribute('data-id', packs[i].id);
        }
    }
    document.querySelectorAll('.packs-group label')[packs.length - 1].hidden = true;

    document.querySelectorAll('.packs-group label').forEach((item, index) => {
        item.addEventListener('change', () => {
            if(item.querySelector('input').checked) {
                document.querySelector('.js-total .pr').innerHTML = item.querySelector('.packs-pack').dataset.pack * item.querySelector('.packs-price').dataset.price * document.querySelector('.counter-input').value;
                document.querySelector('.js-total .ps').innerHTML = item.dataset.save;
                document.querySelector('.js-strike .rp').innerHTML = 20 * item.querySelector('.packs-pack').dataset.pack * document.querySelector('.counter-input').value;
                document.querySelector('.js-regular .rs').innerHTML = parseFloat((document.querySelector('.js-strike .rp').innerHTML - document.querySelector('.js-total .pr').innerHTML).toFixed(2));
                document.querySelector('#purchase .js-btn').setAttribute('data-id', item.dataset.id);
            }
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP: Age based labels',
                'eventLabel': '',
            });
            if(index == 0) {  
                dataLayer.push({'eventAction': 'click on pack size — 1 pack'});
            } else if (index == 1) {
                dataLayer.push({'eventAction': 'click on pack size — 3 pack'});
            } else if (index == 2) {
                dataLayer.push({'eventAction': 'click on pack size — 6 pack'});
            } else if (index == 3) {
                dataLayer.push({'eventAction': 'click on pack size — 12 pack'});
            } else if (index == 4) {
                dataLayer.push({'eventAction': 'click on pack size — 24 pack'});
            }
        });
    });

    function counterIf() {  
        if (document.querySelector('.counter-input').value <= 1) {
            document.querySelector('.counter-input').value = 1;
            document.querySelector('.counter-btn_minus').classList.remove('active');
            document.querySelector('.counter p').innerHTML = 'person';
            document.querySelectorAll('.packs-group label')[packs.length - 1].hidden = true;
            document.querySelectorAll('.for-people').forEach((el) => {el.innerHTML = ` `;});
            document.querySelectorAll('.packs-days').forEach((el) => {
                el.innerHTML = `${el.dataset.dayssum} days`
            });
        } else {
            document.querySelector('.counter p').innerHTML = 'people';
            document.querySelector('.counter-btn_minus').classList.add('active');
            document.querySelectorAll('.packs-group label')[packs.length - 1].hidden = false;
            document.querySelectorAll('.for-people').forEach((el) => {el.innerHTML = `for ${document.querySelector('.counter-input').value} people`;});
            document.querySelectorAll('.packs-days').forEach((el) => {
                let daysForPeople = el.dataset.dayssum / document.querySelector('.counter-input').value;
                el.innerHTML = `${parseFloat(daysForPeople.toFixed(1))} days`;
            });
        } 
        document.querySelectorAll('.packs-group label').forEach((label) => {
            if (label.querySelector('input').checked) {
                document.querySelector('.js-total .pr').innerHTML = (label.querySelector('.packs-pack').dataset.pack * label.querySelector('.packs-price').dataset.price) * document.querySelector('.counter-input').value;
                document.querySelector('.js-strike .rp').innerHTML = 20 * label.querySelector('.packs-pack').dataset.pack * document.querySelector('.counter-input').value;
            }
        });
        document.querySelector('.js-regular .rs').innerHTML = parseFloat((document.querySelector('.js-strike .rp').innerHTML - document.querySelector('.js-total .pr').innerHTML).toFixed(2));
    }

    document.querySelectorAll('.counter-btn').forEach( (item) => {
        item.addEventListener('click', (e) => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP: Age based labels',
                'eventLabel': 'Quantity',
            });
            if (e.target.classList.contains('counter-btn_minus')) {
                document.querySelector('.counter-input').value = parseInt(document.querySelector('.counter-input').value) - 1;
                dataLayer.push({'eventAction': 'click on button Minus'});
            }
            if (e.target.classList.contains('counter-btn_plus')) {
                document.querySelector('.counter-input').value = parseInt(document.querySelector('.counter-input').value) + 1;
                dataLayer.push({'eventAction': 'click on button Plus'});
            }
            counterIf();
        });  
    });

    document.querySelector('.counter').addEventListener('change', counterIf); 

    document.querySelectorAll('.checkbox[name="kids"]').forEach((item, index) => {
        if(item.checked) {
            document.querySelector('.text-dynamically').innerHTML = `${item.nextElementSibling.innerHTML}: <span class="c-pink fw-bold"> ${item.nextElementSibling.dataset.patch} </span> <span class="text-nowrap">  every 6 hours.</span>   `;  
        }
        item.addEventListener('change', () => {
            document.querySelector('.counter-input').value = 1;
            document.querySelectorAll('.for-people').forEach((el) => {el.innerHTML = ` `;});
            document.querySelectorAll('.packs-group label')[packs.length - 1].hidden = true;
            document.querySelector('.text-dynamically').innerHTML = `${item.nextElementSibling.innerHTML}: <span class="c-pink fw-bold"> ${item.nextElementSibling.dataset.patch} </span> <span class="text-nowrap">  every 6 hours.</span>   `;
            document.querySelector('.text-dynamically br').remove();
          
            document.querySelectorAll('.packs-days').forEach((el) => {
                if (index == 0) {
                    el.innerHTML = `${el.dataset.days * 3} days`;
                    let spldays = el.innerHTML.split(' days');
                    el.dataset.dayssum = spldays[0];
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP: Age based labels',
                        'eventAction': 'click on age — 0-2'
                    });
                } else if (index == 1) {
                    el.innerHTML = `${el.dataset.days * 1.5} days`;
                    let spldays = el.innerHTML.split(' days');
                    el.dataset.dayssum = spldays[0];
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP: Age based labels',
                        'eventAction': 'click on age — 3-5',
                    });
                } else if (index == 2) {
                    el.innerHTML = `${el.dataset.days} days`;
                    let spldays = el.innerHTML.split(' days');
                    el.dataset.dayssum = spldays[0];
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP: Age based labels',
                        'eventAction': 'click on age — 6+'
                    });
                }
            });
            document.querySelectorAll('.packs-group label').forEach((label) => {
                if (label.querySelector('input').checked) {
                    document.querySelector('.js-total .pr').innerHTML = label.querySelector('.packs-pack').dataset.pack * label.querySelector('.packs-price').dataset.price * document.querySelector('.counter-input').value;
                    document.querySelector('.js-strike .rp').innerHTML = 20 * label.querySelector('.packs-pack').dataset.pack * document.querySelector('.counter-input').value;
                }
            });
           document.querySelector('.js-regular .rs').innerHTML = parseFloat((document.querySelector('.js-strike .rp').innerHTML - document.querySelector('.js-total .pr').innerHTML).toFixed(2));  
        });
    });
    document.querySelector('.text-dynamically br').remove();

    function addToCart(formData) {
        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                response.json().then(r => {
                    console.log(r)
                    window.location = '/checkout'
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    document.querySelector('#purchase .js-btn').addEventListener('click', (e) => {
        formData.items.push({
            'id': e.target.dataset.id,
            'quantity': document.querySelector('.counter-input').value
        });
        addToCart(formData);
    });
};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pdp_age_based_labels');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — PDP: Age based labels',
    'eventAction': 'loaded'
});
