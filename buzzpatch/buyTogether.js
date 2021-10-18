let style = `
      <style>
        .bundles *, .wrap * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      
        .bundles {
          background: linear-gradient(161.67deg, #F7AD42 3.53%, #FFB237 84.13%);
          padding: 25px 20px;
        }
        
        .bundles h2{
          font-size: 36px;
          color: white;
          text-align: center;
          margin-bottom: 28px;
        }
        
        .bundles .products {
          display: flex;
          position:relative;
          justify-content:space-between;
        }
        
        .bundles .products::after {
          display: block;
          content: '';
          position:absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 28px;
          width: 28px;
          background: url("https://dragonegor.github.io/conversionrate/buzzpatch/img1/plusProd.svg") center center no-repeat;
          background-size: contain;
        }
        .bundles .products>div {
          width: 49%;
          background-color: #F9F8F6;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          padding: 88px 5px 24px;
          position:relative;
          text-align: center;
          display:flex;
          flex-direction: column;
          justify-content:space-between;
          align-items: center;
        }
        
        .bundles .products>div .descr {
          font-size: 14px !important;
          margin-top: 10px;
          color: #0C0B0B;
        }
        
        .bundles .products>div>img {
          position:absolute;
          width: auto;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .bundles .title {
          font-size: 18px !important;
          font-family: 'DINEngschrift LT', Roboto, sans-serif;
          color: #0C0B0B;
        }
        
        .bundles .price {
          font-weight: 700;
          font-size: 18px;
          color: #FF3C7F;
          margin: 15px;
        }
        
        .qty {
          display:flex;
          justify-content:space-between;
          width: 90%;
        }
        
        .qty span {
          display:flex;
          align-items: center;
          justify-content:center;
          font-size: 24px;
          font-weight: 500;
          border-radius: 50%;
          height: 41px;
          width: 41px;
        }
        
        span.minus {
          position: relative;
          border: 1px solid #D9D9D9;
          color: #FF3C7F;
          background-color: #fff;
        }
        
         span.plus {
          position: relative;
          color: #fff;
          background-color: #FF3C7F;
        }
        
        span.minus::before,
         span.plus::before{
            content: '';            
            position: absolute;           
            top: 50%;
            left: 50%;
            display: block;
            width: 18px;
            height: 18px;
            transform: translate(-50%, -50%);            
        }
        
        span.minus::before {
            background: url('https://conversionratestore.github.io/projects/buzzpatch/img/minus.svg') center center no-repeat;
        }
        
        span.plus::before {
            background: url('https://conversionratestore.github.io/projects/buzzpatch/img/plus.svg') center center no-repeat;
        }     

        .qty input {
          color: #0C0B0B;
          border: none;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 0;
          width: 20px;
          text-align: center;
          padding: 0;
          background-color: transparent;
          font-family: 'DINEngschrift LT', 'Roboto', sans-serif;
        }  
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        
        input[type='number'] {
          -moz-appearance: textfield;
        }
        
        .total_sum {
          font-size: 18px !important;
          font-weight: 700;
          color: white;
          margin: 25px auto 20px;
          text-align: center;
        }
        
        .total_sum>:last-child {
          color: #FF3C7F;
        }
        
        .bundles button {
          background-color: #FF3C7F;
          padding: 20px;
          color: white;
          width: 100%;
          font-size: 24px;
          font-family: 'Din Condensed', Roboto, sans-serif;
          border: none;
          border-radius: 100px;
          text-transform:uppercase;
        }
        
        #purchase {
            padding-bottom: 0 !important;
        }
      </style>  
    `;
let patchLinks = [
	['RB5EOORBafijZmGylohb', 'kTTOTJbbZ9ZzUt3uIzsG', 'vLWFoKhNuowErJ4w3UQa', 'Xi4NXSflSv8HtgyslK9X'],
	['07lzNEMSVz5nAcYFGDQt', '9P3eNacCDVh1onLRr5wt', 'wembOJsdtAXRXzu9G7PA', 'gGpMdZUWH43S24BdsClR'],
	['5t2W613N4shKrWPU3S0q', '9em4Mmn2IPw3sfh5YyvQ', 'r0mCczHs41UfeuQ1Se0j', 'rzgiqbdG1TjjjM2ljdmH'],
	['DlWIroch1aF0V4C9mg0W', 'mCBN3D0ebkI76nje0zxz', 'OevtrklIroSJWDtbtptU', '69noMHhBmQOE6gOuurad'],
];

let bundles = `
        <section class="bundles">
          <h2>Frequently bought together</h2>
          <div class="products">
            <div class="prod1 prod" data-price="36.00" data-id="39307593187372">
              <img src="https://conversionratestore.github.io/projects/buzzpatch/img/image74.svg" alt="prod1">
              <p class="title">Itch relief patches</p>
              <p class="descr">27 patches in 1 pack</p>
              <p class="price">$<span>12.00</span>/pack</p>
              <div class="qty">
                <span class="minus"></span>
                <input type="number" value="3" max="4" min="1" readonly>
                <span class="plus"></span>
              </div>
            </div>
            <div class="prod2 prod" data-price="36.00" data-id="39264142393388">
              <img src="https://conversionratestore.github.io/projects/buzzpatch/img/image76.svg" alt="prod2">
              <p class="title">Mosquito repellent patches</p>
              <p class="descr">60 patches in 1 pack</p>
              <p class="price">$<span>12.00</span>/pack</p>
              <div class="qty">
                <span class="minus"></span>
                <input type="number" value="3" max="4" min="1" readonly>
                <span class="plus"></span>
              </div>
            </div>        
          </div>
          <div class="total_sum">
            $<span>36.00</span> + $<span>36.00</span> = <span>$72.00</span>
          </div>
          <button>Buy Both</button>
        </section>
    `;

window.onload = function () {
	document.body.insertAdjacentHTML('afterbegin', style);

	document.querySelector('#purchase').insertAdjacentHTML('afterend', bundles);

	document.querySelectorAll('.qty span.minus').forEach(item => {
		item.addEventListener('click', function () {
			let label = (this.closest('.prod').querySelector('.title').innerText);
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp — PDP: Frequently Buy Together block',
				'eventAction': 'Click on Minus button',
				'eventLabel': label
			});

			let val = +item.nextElementSibling.value;
			if (val > 1) {
				item.nextElementSibling.value = val - 1;
			}
			if (this.closest('.prod')) {
				setId(this);
				totalSum();
			}
		});
	});

	document.querySelectorAll('.qty span.plus').forEach(item => {
		item.addEventListener('click', function () {
			let label = (this.closest('.prod').querySelector('.title').innerText);
			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp — PDP: Frequently Buy Together block',
				'eventAction': 'Click on Plus button',
				'eventLabel': label
			});

			let val = +item.previousElementSibling.value;
			if (val < 4) {
				item.previousElementSibling.value = val + 1;
			}
			if (this.closest('.prod')) {
				setId(this);
				totalSum();
			}
		});
	});

	document.querySelector('.total_sum+button').addEventListener('click', function () {
		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — PDP: Frequently Buy Together block',
			'eventAction': 'Click on Buy Both button',
			'eventLabel': 'Frequently Bought Together'
		});

		let id1 = document.querySelector('.prod1').getAttribute('data-id');
		let id2 = document.querySelector('.prod2').getAttribute('data-id');

		let item1 = document.querySelector('.prod1 .qty input').value;
		let item2 = document.querySelector('.prod2 .qty input').value;

		window.open(`https://buzz-patch.myshopify.com/a/secure/checkout/${patchLinks[item1 - 1][item2 - 1]}`, '_self');

	});
};
let productsId = {
	prod2: ['34137893142572', '39307585519660', '39264142393388', '39264134070316'],
	prod1: ['34767547138092', '39307589058604', '39307593187372', '39307595546668']
};

let packPrice = ['14.99', '13.5', '12', '10.5'];
let price = ['14.99', '27', '36', '42'];

function setId(a) {
	let main = a.closest('.prod');
	let qty = main.querySelector('input').value - 1;
	let prod = (main.classList.contains('prod1')) ? 'prod1' : 'prod2';

	main.setAttribute('data-id', productsId[prod][qty]);
	main.setAttribute('data-price', price[qty]);

	main.querySelector('.price span').innerHTML = packPrice[qty];
	if (prod === 'prod1') {
		main.closest('.bundles').querySelector('.total_sum span:first-child').innerHTML = price[qty];
	} else {
		main.closest('.bundles').querySelector('.total_sum span:nth-child(2)').innerHTML = price[qty];
	}
}

function totalSum() {
	let p1 = document.querySelector('.prod1').getAttribute('data-price');
	let p2 = document.querySelector('.prod2').getAttribute('data-price');
	document.querySelector('.total_sum span:last-child').innerHTML = `$${(+p1 + +p2).toFixed(2)}`;
}

(function (h, o, t, j, a, r) {
	h.hj = h.hj || function () {
		(h.hj.q = h.hj.q || []).push(arguments);
	};
	h._hjSettings = {hjid: 2247058, hjsv: 6};
	a = o.getElementsByTagName('head')[0];
	r = o.createElement('script');
	r.async = 1;
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
	a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
window.hj = window.hj || function () {
	(hj.q = hj.q || []).push(arguments);
};
hj('event', 'frequently_buy_together_block');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — PDP: Frequently Buy Together block',
	'eventAction': 'loaded'
});
