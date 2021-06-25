(function () {
    let v = 63;

    // Если IE тогда вместо currentScript будет так: document.querySelector('тут айдишник скрипта вставленный вручную')
    const cur_test = window.keradan.get_cur_test(document.currentScript);
    cur_test.init.event_category = 'Exp — New PDP';

    // Set dev behavior:
    cur_test.init.enable_log = false;
    cur_test.init.enable_ga_events = true;
    // cur_test.init.debug_mode = false;

    cur_test.log(`%c Keradan's test "${cur_test.init.go_title}" (v - ${v}) is here:`, 'background: #222; color: #bada55',  cur_test);
    cur_test.log(`%c Keradan's test script url:`, 'background: #222; color: #bada55',  document.currentScript.getAttribute('src'));

    cur_test.ga_event('loaded');

    try {
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1271698,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
        hj('trigger', 'optimize_pdp');
    }
    catch (e) {
        keradan_log('Hotjar error: ', e);
    }

    let model = cur_test.model = {
        is_ready: false,
        advantages: [
            'Promote nose breathing',
            'Reduce open-mouth snoring',
            'Boost CPAP experience ',
            'Improve sleep quality',
        ],
        shipping: [],
        shipping_choosen_id: 0,
        shipping_interval_unit_type: 'Months',
        subscription_id: '95310',
        quantity_choosen: 1,
        pack_choosen_id: 'week_4',
        subscribe_is_checked: false,
        packs: {
            week_4: {
                product_id: 32115046023283,
                shipping_interval_frequency: '0',
                days_count: 28,
                name: '4-week pack',
                auto_delivery_period: '',
                price: 19.97,
                subscription_price: null,
                old_price: null,
                save_money_percent: 0,
                have_subscription: false,
                image: 'https://i.ibb.co/wyDWfg9/box-5.png',
            },
            week_12: {
                product_id: 32115046056051,
                product_id_for_subscription: 31272810676339,
                shipping_interval_frequency: '3',
                days_count: 84,
                name: '12-week pack',
                auto_delivery_period: 'every 12 weeks',
                price: 55.97,
                subscription_price: 49.97,
                old_price: 59.97,
                save_money_percent: 7,
                have_subscription: true,
                image: 'https://i.ibb.co/NTgJ9M1/Group-870.png',
            },
            month_12: {
                product_id: 32115046940787,
                product_id_for_subscription: 32190023958643,
                shipping_interval_frequency: '12',
                days_count: 365,
                name: '12-month pack',
                auto_delivery_period: 'every 12 months',
                price: 219.97,
                subscription_price: 199.97,
                old_price: 230.97,
                save_money_percent: 17,
                have_subscription: true,
                image: 'https://i.ibb.co/NTgJ9M1/Group-870.png',
            },
        },

        get shipping_choosen() {
            return this.shipping[this.shipping_choosen_id];
        },

        get pack_choosen() {
            pack = this.packs[this.pack_choosen_id];

            let model = this;

            Object.defineProperty(pack, "total_price", {
                get: function() {
                    let price = model.subscribe_is_checked ? this.subscription_price : this.price;
                    return Math.round((price * model.quantity_choosen) * 100) / 100;
                },
                configurable: true,
            });

            Object.defineProperty(pack, "current_strips_count", {
                get: function() {
                    return model.quantity_choosen * this.days_count;
                },
                configurable: true,
            });

            return pack;
        },

        set_shipping: function (new_shipping_choosen_id) {
            this.shipping_choosen_id = new_shipping_choosen_id;
        },

        set_pack: function (new_pack_choosen_id) {
            this.pack_choosen_id = new_pack_choosen_id;
        },

        set_quantity: function (new_quantity_choosen) {
            this.quantity_choosen = new_quantity_choosen;
        },
    };

    cur_test.rerender_pdp = function () {
        cur_test.html.querySelector('.pack-choose-box .pack-choosen').innerHTML = `
			<span>${model.pack_choosen.name} (${model.pack_choosen.days_count} strips)</span>
		`;

        cur_test.html.querySelector('.packs-choose-popup').innerHTML = `
			<div class="inner">
				<button class="btn-close">Done</button>
				<div class="top-title">
					Choose your pack: <span>${model.pack_choosen.name}</span>
				</div>
				<div class="body">
					${Object.keys(model.packs).map(function(key) {
            let current_pack = model.packs[key];
            return `
							<div class="pack ${key == model.pack_choosen_id ? 'choosen' : ''}" data-pack-id="${key}">
								<div class="save" ${current_pack.save_money_percent > 0 ? '' : 'hidden'}>
									Save ${current_pack.save_money_percent}%
								</div>
								<div class="image">
									<img src="${current_pack.image}" alt="">
								</div>
								<div class="title">${current_pack.name}</div>
								<div class="description">${current_pack.days_count} strips - ${current_pack.days_count} days</div>
								<div class="price">
									<span class="actual">$${current_pack.price}</span>
									<span class="old">$${current_pack.old_price}</span>
								</div>
							</div>
						`;
        }).join('')}
				</div>
			</div>
		`;

        cur_test.html.querySelector('.current-pack-info').innerHTML = `
			<div class="head">
				<div class="price">
					$<span class="number">${model.pack_choosen.total_price}</span>USD
				</div>
				<div class="made-in-usa">
					<svg fill="none" viewBox="0 0 19 14">
					  <path fill="#F5F5F5" d="M17.6.7H1.4C.6.7 0 1.4 0 2.2v9.6c0 .8.6 1.5 1.4 1.5h16.2c.8 0 1.4-.7 1.4-1.5V2.2c0-.8-.6-1.5-1.4-1.5z"/>
					  <path fill="#BF3E48" d="M0 1.7h19c-.3-.6-.8-1-1.4-1H1.4C.8.7.3 1.1.1 1.7zM19 4.6H0v1h19v-1zM19 2.7H0v1h19v-1zM0 7.2c0 .1.1.3.3.3H19v-1H0v.7zM19 10.4H0v1h19v-1zM19 12.3H0c.3.6.8 1 1.4 1h16.2c.6 0 1.1-.4 1.3-1zM19 8.4H0v1h19v-1z"/>
					  <path fill="#1E415F" d="M.3 7.5h8.2c.2 0 .3-.2.3-.3V1c0-.2-.1-.4-.3-.4h-7C.5.7 0 1.4 0 2.2v5c0 .1.1.3.3.3z"/>
					  <path fill="#F5F5F5" d="M1 1.5v.2h.2l-.1.2v.2H.7V2l-.2-.1h.3v-.3H1zM1 2.6V3h.2l-.1.2v.2l-.2-.1-.2.1V3l-.2-.2h.3v-.3H1zM1 3.8V4h.2l-.1.2v.2H.7v-.2l-.2-.1h.3v-.3H1zM1 5V5h.2v.1l-.1.1v.3l-.2-.1-.2.1v-.3H.5v-.1h.3v-.3H1zM1 6v.3h.2l-.1.2v.2H.7v-.2l-.2-.2h.3V6H1zM1.8 2v.3h.3l-.2.2.1.2-.2-.1-.2.1v-.2l-.2-.2h.3V2h.1zM1.8 3.2v.2h.3l-.2.2.1.2h-.4v-.2l-.2-.1h.3v-.3h.1zM1.8 4.3v.3h.3l-.2.2.1.2-.2-.1-.2.1v-.2l-.2-.2h.3v-.3h.1zM1.8 5.5v.2h.3L2 6l.1.2h-.4V6l-.2-.1h.3v-.3h.1zM2.7 1.5v.2H3l-.2.2v.2c.1 0 0 0 0 0H2.5V2l-.2-.1h.3v-.3zM2.7 2.6V3H3l-.2.2v.2c.1 0 0 0 0 0l-.1-.1-.2.1V3l-.2-.2h.3v-.3zM2.7 3.8V4H3l-.2.2v.2c.1 0 0 0 0 0H2.5v-.2l-.2-.1h.3v-.3zM2.7 5V5H3v.1l-.2.1v.3c.1 0 0 0 0 0l-.1-.1-.2.1v-.3h-.2v-.1h.3v-.3zM2.7 6v.3H3l-.2.2v.2c.1 0 0 0 0 0H2.5v-.2l-.2-.2h.3V6zM3.6 2v.3H4l-.2.2v.2l-.2-.1-.1.1s-.1 0 0 0v-.2l-.2-.2h.2l.1-.2zM3.6 3.2v.2H4l-.2.2v.2H3.4s-.1 0 0 0v-.2l-.2-.1h.2l.1-.3zM3.6 4.3v.3H4l-.2.2V5L3.5 5l-.1.1s-.1 0 0 0v-.2l-.2-.2h.2l.1-.3zM3.6 5.5v.2H4l-.2.2v.2H3.4s-.1 0 0 0V6l-.2-.1h.2l.1-.3zM4.5 1.5v.2h.3l-.2.2v.2h-.4V2l-.1-.1h.2v-.3h.2zM4.5 2.6V3h.3l-.2.2v.2l-.2-.1-.2.1V3l-.1-.2h.2v-.3h.2zM4.5 3.8V4h.3l-.2.2v.2h-.4v-.2l-.1-.1h.2v-.3h.2zM4.5 5V5h.3v.1l-.2.1v.3l-.2-.1-.2.1v-.3h-.1v-.1h.2v-.3h.2zM4.5 6v.3h.3l-.2.2v.2h-.4v-.2l-.1-.2h.2V6h.2zM5.3 2l.1.3h.2l-.1.2v.2l-.2-.1-.2.1v-.2L5 2.3h.2V2h.1zM5.3 3.2l.1.2h.2l-.1.2v.2H5v-.2L5 3.5h.2v-.3h.1zM5.3 4.3l.1.3h.2l-.1.2V5L5.3 5l-.2.1v-.2L5 4.6h.2v-.3h.1zM5.3 5.5l.1.2h.2l-.1.2v.2H5V6L5 5.8h.2v-.3h.1zM6.2 1.5v.2h.3l-.1.2v.2H6V2l-.2-.1h.3v-.3h.1zM6.2 2.6V3h.3l-.1.2v.2l-.2-.1-.2.1V3l-.2-.2h.3v-.3h.1zM6.2 3.8V4h.3l-.1.2v.2H6v-.2l-.2-.1h.3v-.3h.1zM6.2 5V5h.3v.1l-.1.1v.3l-.2-.1-.2.1v-.3h-.2v-.1h.3v-.3h.1zM6.2 6v.3h.3l-.1.2v.2H6v-.2l-.2-.2h.3V6h.1zM7.1 2v.3h.3l-.2.2.1.2-.2-.1-.2.1v-.2l-.2-.2H7V2h.1zM7.1 3.2v.2h.3l-.2.2.1.2h-.4v-.2l-.2-.1H7v-.3h.1zM7.1 4.3v.3h.3l-.2.2.1.2L7 5l-.2.1v-.2l-.2-.2H7v-.3h.1zM7.1 5.5v.2h.3l-.2.2.1.2h-.4V6l-.2-.1H7v-.3h.1zM8 1.5v.2h.3l-.2.2v.2c.1 0 0 0 0 0H7.8V2l-.2-.1H8v-.3zM8 2.6V3h.3l-.2.2v.2c.1 0 0 0 0 0L8 3.2l-.2.1V3l-.2-.2H8v-.3zM8 3.8V4h.3l-.2.2v.2c.1 0 0 0 0 0H7.8v-.2l-.2-.1H8v-.3zM8 5V5h.3v.1l-.2.1v.3c.1 0 0 0 0 0L8 5.5l-.2.1v-.3h-.2v-.1H8v-.3zM8 6v.3h.3l-.2.2v.2c.1 0 0 0 0 0H7.8v-.2l-.2-.2H8V6z"/>
					</svg>
					<span>Made in USA</span>
				</div>
			</div>
			<ul class="advantages">
				${model.advantages.map(item => `
					<li>
						<svg fill="none" viewBox="0 0 14 11">
							<path id="0" stroke="#1E4670" stroke-width="2" d="M1 6l5 3 6-8"/>
						</svg>
						<span>${item}</span>
					</li>
				`).join("")}
			</ul>
			<div class="shipping">
				<span>Ship to:</span>
				<select>
					${model.shipping.map((shipping_item, i) => `
						<option value="${i}" ${i == model.shipping_choosen_id ? 'selected' : ''}>
							${shipping_item.country}
						</option>
					`).join("")}
				</select>
			</div>
			<div class="estimation">Est. Delivery ${model.shipping_choosen.dates}</div>
			<div class="free-shipping" ${model.shipping_choosen.price > 0 ? 'hidden' : ''} >Free shipping</div>
			<div class="stock-status">In Stock</div>
			<div class="quantity">
				<button>
					<span>Qty: ${model.quantity_choosen}</span>
					<svg fill="none" viewBox="0 0 18 8"><path stroke="#000" d="M17 1L8.74 7 1 1"/></svg>
				</button>
				<span>${model.quantity_choosen} pack = ${model.pack_choosen.current_strips_count} strips</span>
			</div>
			<label class="subscription-box" ${model.pack_choosen.have_subscription ? '' : 'hidden'}>
				<div class="checkmark-col">
					<input type="checkbox" ${model.subscribe_is_checked ? 'checked' : ''}>
				</div>
				<div class="info-col">
					<p class="title">
						<!-- ${model.pack_choosen.save_money_percent} -->
						Subscribe and <span>save 10%</span>
					</p>
					<p class="description">
						Auto delivery ${model.pack_choosen.auto_delivery_period} for $${model.pack_choosen.subscription_price * model.quantity_choosen}.<br>Cancel anytime.
					</p>
				</div>
			</label>
			<div class="submit-buttons">
				<button class="buy">Add to cart</button>
				<button class="try-for-free" hidden>Try for free</button>
			</div>
			<div class="money-back-guarantee">
				<img src="https://i.ibb.co/mcQ6ngg/image-44.png" alt="">
				<span>
					30-day Money-Back<br>Guarantee
				</span>
			</div>
		`;

        cur_test.html.querySelector('.submit-buttons button.buy').addEventListener('click', function(){
            if (!model.subscribe_is_checked || model.pack_choosen_id == 'week_4') addItemToCart(model.pack_choosen.product_id, model.quantity_choosen);
            else addItemToCart(model.pack_choosen.product_id_for_subscription, model.quantity_choosen, model.pack_choosen.shipping_interval_frequency, model.shipping_interval_unit_type, model.subscription_id);
        });

        cur_test.html.querySelector('.shipping select').addEventListener('click', function(e) {
            cur_test.ga_event('click on select Country');
        });

        cur_test.html.querySelector('.shipping select').addEventListener('change', function(e) {
            model.set_shipping(e.target.value);
            cur_test.rerender_pdp();
        });

        cur_test.html.querySelector('.quantity button').addEventListener('click', function(){
            cur_test.log('quantity button clicked: open popup for choose quantity');
            cur_test.open_popup(cur_test.popups.quantity);
            cur_test.ga_event('click on select Quantity');
        });

        cur_test.html.querySelector('.subscription-box input[type="checkbox"]').addEventListener('change', function(e){
            cur_test.log('subscription checkbox changed. New state: ', e.target.checked);
            model.subscribe_is_checked = e.target.checked;
            cur_test.ga_event('click on checkbox Subscribe and save 10%');
            cur_test.rerender_pdp();
        });

        cur_test.popups.packs.addEventListener('click', function(event){
            if (event.target != cur_test.popups.packs) return false;
            cur_test.close_popup(cur_test.popups.packs);
        });

        cur_test.popups.packs.querySelector('.btn-close').addEventListener('click', function(){
            cur_test.close_popup(cur_test.popups.packs);
            cur_test.ga_event('click on button Done', 'Popup: Pack size');
        });

        cur_test.popups.packs.querySelectorAll('.pack').forEach(function(pack){
            pack.addEventListener('click', function() {
                cur_test.log('pack: ', pack);
                cur_test.log('dataset.packId: ', pack.dataset.packId);

                switch(pack.dataset.packId) {
                    case 'week_4': cur_test.ga_event('click on button 4-week pack', 'Popup: Pack size'); break;
                    case 'week_12': cur_test.ga_event('click on button 12-week pack', 'Popup: Pack size'); break;
                    case 'month_12': cur_test.ga_event('click on button 12-month pack', 'Popup: Pack size'); break;
                }

                model.set_pack(pack.dataset.packId);

                setTimeout(function(){
                    cur_test.rerender_pdp();
                }, 10);

                setTimeout(function(){
                    cur_test.close_popup(cur_test.popups.packs);
                }, 300);
            });
        });
    }

    cur_test.open_popup = function (popup) {
        popup.classList.toggle('displayed-popup', true);
        setTimeout(function(){
            popup.classList.toggle('opened-popup', true);
        }, 1);
    }

    cur_test.close_popup = function (popup) {
        popup.classList.toggle('opened-popup', false);
        setTimeout(function(){
            popup.classList.toggle('displayed-popup', false);
        }, 300);
    }

    // TMP for debugging:
    // window.kkk = cur_test;

    cur_test.html = document.createElement('div');
    cur_test.html.classList.add(cur_test.init.css_scope_name);
    cur_test.html.innerHTML = `
		<div class="quantity-popup">
			<div class="inner">
				<div class="head">
					<span>Quantity</span>
					<button class="btn-close">
						<svg fill="none" viewBox="0 0 10 12"><path fill="#000" fill-opacity=".4" d="M9 11a1 1 0 01-1 0L5 8l-3 3a1 1 0 11-1-2l2-3-2-3a1 1 0 111-2l3 3 3-3a1 1 0 111 2L7 6l2 3a1 1 0 010 2z"/></svg>
					</button>
				</div>
				<div class="body">
					<ul>
						${Array.apply(null, Array(100)).map((v, i) => `
							<li>${i + 1}</li>
						`).join(" ")}
					</ul>
				</div>
			</div>
		</div>
		<div class="packs-choose-popup"></div>
		<div class="pack-choose-box">
			<svg fill="none" class="arrow" viewBox="0 0 10 18"><path stroke="#4090D1" stroke-width="2" d="M1 1l7.2 7.5-7.3 8"/></svg>
			<span class="head">Pack size:</span>
			<br>
			<span class="pack-choosen"></span>
		</div>
		<div class="current-pack-info"></div>
	`;
    document.querySelector('.product-template.product-main .product__information').before(cur_test.html);

    cur_test.html.querySelector('.pack-choose-box').addEventListener('click', function(){
        cur_test.log('pack-choose-box clicked: open popup for choose pack');
        cur_test.open_popup(cur_test.popups.packs);
        cur_test.ga_event('click on block — Pack size');
    });

    cur_test.popups = {
        quantity: cur_test.html.querySelector('.quantity-popup'),
        packs: cur_test.html.querySelector('.packs-choose-popup'),
    };

    cur_test.popups.quantity.addEventListener('click', function(event){
        if (event.target != cur_test.popups.quantity) return false;
        cur_test.close_popup(cur_test.popups.quantity);
    });

    cur_test.popups.quantity.querySelector('.btn-close').addEventListener('click', function(){
        cur_test.close_popup(cur_test.popups.quantity);
    });

    cur_test.popups.quantity.querySelectorAll('ul li').forEach(function(list_item){
        list_item.addEventListener('click', function() {
            model.set_quantity(parseInt(list_item.innerHTML));
            setTimeout(function(){
                cur_test.close_popup(cur_test.popups.quantity);
                cur_test.rerender_pdp();
            }, 100);
        });
    });

    document.querySelector("#styles-" + cur_test.init.name).innerHTML = `
		html {
			scroll-behavior: smooth;
		}

		/* hide default form */
			.product .product-form-container {
			    display: none;
			}

		.${cur_test.init.css_scope_name} {
			position: relative;
			width: 100%;
			padding: 0 10px;
		}

		/* quantity-popup */
			.${cur_test.init.css_scope_name} .quantity-popup {
				position: fixed;
				display: flex;
			    justify-content: center;
			    align-items: center;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background: rgba(25, 25, 25, 0.8);
				opacity: 1;
				z-index: 999999999999999999999999999999999999;
				transition: all 0.3s ease;
			}
			.${cur_test.init.css_scope_name} .quantity-popup:not(.displayed-popup) {
				display: none;
			}
			.${cur_test.init.css_scope_name} .quantity-popup:not(.opened-popup) {
				opacity: 0;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner {
				width: 50%;
				height: 70%;
				margin: 0;
				padding: 0;
				border-radius: 10px;
				overflow: hidden;
				box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
				transform: scale(1);
				transition: all 0.3s ease;
			}
			.${cur_test.init.css_scope_name} .quantity-popup:not(.opened-popup) .inner {
				transform: scale(0.6);
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .head {
				height: 50px;
				width: 100%;
				background: red;
				background: #EBEBEB;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-left: 20px;
				font-family: Roboto;
				font-weight: bold;
				font-size: 16px;
				letter-spacing: 0.065em;
				color: #282828;
				border-bottom: 1px solid #AEAEAE;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .head .btn-close {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 48px;
				height: 48px;
				border: none;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .head .btn-close svg {
				width: 15px;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .body {
				overflow-y: scroll;
				max-height: calc(100% - 51px);
				background: white;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .body ul {
				margin: 0;
				padding: 0;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .body ul li {
				width: 100%;
				height: 40px;
				font-family: Roboto;
				font-size: 16px;
				font-weight: 500;
				letter-spacing: 0.065em;
				color: #000000;
				background: transparent;
				border: none;
				border-left: 2px solid transparent;
				border-bottom: 1px solid rgba(174, 174, 174, 0.5);
				transition: all 0.1s ease;
				padding-top: 9px;
				padding-left: 15px;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .body ul li:last-child {
				border-bottom: none;
			}
			.${cur_test.init.css_scope_name} .quantity-popup .inner .body ul li:active {
				background: rgba(64, 144, 209, 0.14);
				border-left: 2px solid #1E4670;
			}

		/* packs-choose-popup */
			.${cur_test.init.css_scope_name} .packs-choose-popup {
				position: fixed;
				display: flex;
				justify-content: center;
				align-items: flex-end;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background: rgba(25, 25, 25, 0.8);
				opacity: 1;
				z-index: 999999999999999999999999999999999999;
				transition: all 0.3s ease;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup:not(.displayed-popup) {
				display: none;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup:not(.opened-popup) {
				opacity: 0;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner {
				position: relative;
				width: 100%;
				height: 280px;
				margin: 0;
				padding: 0;
				transform: translateY(0);
				transition: all 0.3s ease;
				background: white;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup:not(.opened-popup) .inner {
				transform: translateY(30%);
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .btn-close {
				position: absolute;
				top: -30px;
				right: 20px;
				transform: translateY(0);
				transition: all 0.3s ease;
				font-family: Roboto;
				font-weight: bold;
				font-size: 16px;
				color: #FFFFFF;
				text-transform: uppercase;
				background: transparent;
				border: none;
				outline: none;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup:not(.opened-popup) .inner .btn-close {
				transform: translateY(50px);
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .pack {
				transform: translateY(0);
				transition: all 0.3s ease;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup:not(.opened-popup) .inner .pack {
				transform: translateY(50%);
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .pack:nth-child(2) {
				transition-delay: 0.1s;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .pack:nth-child(3) {
				transition-delay: 0.2s;
			}

			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .top-title {
				font-family: Roboto;
				font-size: 17px;
				color: #1E4670;
				margin: 8px 0;
				margin-left: 15px;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .top-title span {
				font-weight: bold;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body {
				overflow-y: hidden;
				overflow-x: scroll;
				display: flex;
				align-items: center;
				width: 100%;
				padding-left: 10px;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack {
				box-sizing: border-box;
				background: transparent;
				border: 1px dashed #4090D1;		
				border-radius: 10px;
				opacity: 0.6;
				padding: 10px;
				padding-top: 5px;
				min-width: 140px;
				margin: 0 5px;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack.choosen {
				background: rgba(64, 144, 209, 0.1);
				opacity: 1;
				border: 2px solid #4090D1;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .save {
				display: inline-block;
				background: rgba(242, 113, 19, 0.29);
				border-radius: 2px;
				opacity: 1;
				color: #F27113;
				font-family: Roboto;
				font-size: 11px;
				padding: 0 4px;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .save[hidden] {
				opacity: 0;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .image {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 60px;
				margin-bottom: 20px;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .image img {
				max-width: 100%;
				max-height: 100%;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .title {
				font-family: Roboto;
				font-weight: bold;
				font-size: 16px;
				text-align: center;
				color: #1E415F;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .description {
				font-family: Roboto;
				font-size: 12px;
				text-align: center;
				color: #747474;
				margin: 20px 0;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .price {
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .price .actual {
				font-family: Rubik;
				font-weight: 500;
				font-size: 14px;
				letter-spacing: 0.05em;
				color: #1E415F;
			}
			.${cur_test.init.css_scope_name} .packs-choose-popup .inner .body .pack .price .old {
				font-family: Rubik;
				font-weight: 500;
				font-size: 10px;
				letter-spacing: 0.05em;
				text-decoration-line: line-through;
				color: #747474;
			}

		/* pack-choose-box */
			.${cur_test.init.css_scope_name} .pack-choose-box {
				position: relative;
				border: 2px solid #4090D1;
				border-radius: 5px;
				background: #F1F7FC;
				padding: 10px 15px;
				color: rgb(30, 65, 95);
				font-size: 16px;
				line-height: 18px;
			}
			.${cur_test.init.css_scope_name} .pack-choose-box svg.arrow {
				position: absolute;
		    width: 15px;
		    top: 50%;
		    right: 25px;
		    transform: translateY(-50%);
			}
			.${cur_test.init.css_scope_name} .pack-choose-box span.pack-choosen {
				font-weight: bold;
			}

	 	/* current-pack-info head */
			.${cur_test.init.css_scope_name} .current-pack-info .head {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #1E415F;
				font-family: Roboto;
				font-weight: 500;
				margin: 20px 0;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .price {
				font-family: Rubik;
				font-size: 24px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .price .number {
				font-size: 24px;
			    height: auto;
			    display: inline;
			    margin: 0;
			    padding: 0;
			    margin-left: 2px;
			    margin-right: 7px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .made-in-usa {
				display: flex;
				align-items: center;
				padding: 10px;
				border: 1px solid #CCCCCC;
				border-radius: 6px;
				font-size: 14px;
				letter-spacing: 0.065em;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .made-in-usa svg {
				width: 20px;
				margin-right: 10px;
			}

		/* current-pack-info advantages */
			.${cur_test.init.css_scope_name} .current-pack-info ul.advantages {
				margin: 20px 0;
			}
			.${cur_test.init.css_scope_name} .current-pack-info ul.advantages li {
				font-family: Roboto;
				font-weight: 500;
				font-size: 14px;
				color: #1E4670;
				margin: 5px 0;
			}
			.${cur_test.init.css_scope_name} .current-pack-info ul.advantages svg {
				position: relative;
			    top: 1px;
			    width: 18px;
				margin-right: 15px;
			}

		/* current-pack-info shipping */
			.${cur_test.init.css_scope_name} .current-pack-info .shipping span {
				font-family: Roboto;
				font-size: 14px;
				color: #1E4670;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .shipping select {
				border: none;
			    border-bottom: 1px solid #1E415F;
			    border-radius: 0;
			    width: auto;
			    font-family: Roboto;
			    font-weight: 500;
			    font-size: 14px;
			    color: #1E415F;
			    margin-left: 5px;
			    outline: none;
			    background: white;
			    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 8'%3E%3Cpath stroke='%231E415F' stroke-width='2' d='M11 1L6 6 1 1'/%3E%3C/svg%3E") no-repeat 100% 50%;
			    background-size: 9%;
			    -webkit-appearance:none;
			}

		/* current-pack-info estimation */
			.${cur_test.init.css_scope_name} .current-pack-info .estimation {
				font-family: Roboto;
				font-size: 14px;
				color: #1E4670;
				margin-bottom: 10px;
			}

		/* current-pack-info free-shipping */
			.${cur_test.init.css_scope_name} .current-pack-info .free-shipping {
				display: inline-block;
				padding: 5px 20px;
				background: #4090D1;
				border-radius: 5px;
				font-family: Roboto;
				font-weight: 500;
				font-size: 16px;
				color: #FFFFFF;
				margin-bottom: 10px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .free-shipping[hidden] {
				display: none;
			}

		/* current-pack-info stock-status */
			.${cur_test.init.css_scope_name} .current-pack-info .stock-status {
				font-family: Roboto;
				font-weight: 500;
				font-size: 18px;
				color: #299546;
				margin-bottom: 10px;
			}

		/* current-pack-info quantity */
			.${cur_test.init.css_scope_name} .current-pack-info .quantity {
				display: flex;
				align-items: center;
				margin-bottom: 30px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .quantity button {
				position: relative;
				background: #F6F6F6;
				border: 1px solid #1F405C;
				border-radius: 5px;
				font-family: Roboto;
				font-size: 16px;
				color: #1E415F;
				padding: 10px 12px;
				width: 100px;
				text-align: left;
				margin-right: 15px;
				outline: none;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .quantity button svg {
				position: absolute;
				width: 15px;
				right: 15px;
				top: 50%;
				transform: translateY(-50%);
			}
			.${cur_test.init.css_scope_name} .current-pack-info .quantity span {
				font-family: Roboto;
				font-size: 14px;
				color: #1E415F;
			}

		/* current-pack-info subscription-box */
			.${cur_test.init.css_scope_name} .current-pack-info .subscription-box {
				display: flex;
				background: rgba(242, 180, 19, 0.1);
				border-radius: 5px;
				padding: 20px;
				font-family: Roboto;
				color: #1E4670;
				margin-bottom: 30px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .subscription-box[hidden] {
				display: none;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .subscription-box .checkmark-col {
				padding-right: 15px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .subscription-box .info-col .title {
				font-weight: 500;
				font-size: 16px;
				margin-bottom: 10px;
				color: #1E4670;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .subscription-box .info-col .title span {
				color: #F27113;
				font-size: 16px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .subscription-box .info-col .description {
				font-size: 14px;
				line-height: 16px;
			}

		/* current-pack-info submit-buttons */
			.${cur_test.init.css_scope_name} .current-pack-info .submit-buttons button.buy {
				width: 100%;
				height: 50px;
				background: #1F405C;
				border-radius: 100px;
				text-transform: uppercase;
				font-family: Roboto;
				font-weight: 500;
				font-size: 18px;
				line-height: 50px;
				color: #FFFFFF;
				border: none;
				margin-bottom: 20px;
				outline: none;
			}

		/* current-pack-info money-back-guarantee */
			.${cur_test.init.css_scope_name} .current-pack-info .money-back-guarantee {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .money-back-guarantee img {
				width: 100px;
			}
			.${cur_test.init.css_scope_name} .current-pack-info .money-back-guarantee span {
				font-family: Roboto;
				font-size: 14px;
				color: #1E415F;
			}

		.on-mobile-btn-wrapper a.on-mob-btn.fs18 {
			font-size: 18px!important;
			line-height: 18px!important;
		}
		a.button.on-mob-btn.hide-by-scroll {
		    display: none;
		}

		.on-button-get-sominifix, a.button.on-mob-btn {
			/*
		    	-webkit-tap-highlight-color: transparent;
		    */
		}
 	`;

    let shipping_countries_selector = 'form[action="/cart/add"] select.on-select[name="qauntry"] option';
    document.querySelectorAll(shipping_countries_selector).forEach(function (option){
        let shipping_price = option.dataset.free;
        shipping_price = shipping_price === 'free' ? 0 : shipping_price;
        if(shipping_price !== 0) shipping_price = parseInt(shipping_price.replace(/\D/g,''));

        model.shipping.push({
            country: option.value.trim(),
            price: shipping_price,
            dates: option.dataset.value.trim(),
        });

        model.is_ready = true;
    });

    cur_test.model_preparing_promise_attempts = 0;
    cur_test.model_preparing_promise_time_interval = 1;

    let model_preparing_promise = new Promise(function(resolve, reject) {
        cur_test.model_preparing_promise_attempts++;
        setTimeout(function(){
            if(!model.is_ready) reject(`model is not get ready by 5 sec - new PDP failed.`);
        }, 5000);

        let model_preparing_promise_timer = setInterval(function(){
            if(!model.is_ready) return;

            clearInterval(model_preparing_promise_timer);

            resolve(`model is ready for render new PDP.`);
        }, cur_test.model_preparing_promise_time_interval);
    });

    model_preparing_promise
        .then(function(msg) {
            cur_test.log(msg, ` Attempts count: ${cur_test.model_preparing_promise_attempts}; total time: ${(cur_test.model_preparing_promise_attempts * cur_test.model_preparing_promise_time_interval)}`);

            cur_test.rerender_pdp();

            // replacing default top right button for slide-in cart
            let button = document.querySelector('#mobile-header .on-header-get-wrapper a.button.on-button-get-sominifix.on-button-get-sominifix-open').cloneNode(true);
            button.addEventListener('click', function(){
                window.scroll({top: 550, left: 0, behavior: 'smooth'});
            });
            document.querySelector('#mobile-header .on-header-get-wrapper a.button.on-button-get-sominifix.on-button-get-sominifix-open').remove();
            document.querySelector('#mobile-header .on-header-get-wrapper a.button.on-button-get-sominifix.on-button-get-sominifix-close').before(button);

            // replacing default sticky button
            let sticky_button = document.querySelector('.on-mobile-btn-wrapper a.on-mob-btn').cloneNode(true);
            sticky_button.addEventListener('click', function(){
                window.scroll({top: 550, left: 0, behavior: 'smooth'});
                cur_test.ga_event('click on sticky button');
            });
            sticky_button.innerHTML = 'Get somnifix';
            sticky_button.classList.add('fs18');
            sticky_button.classList.add('hide-by-scroll');
            document.querySelector('.on-mobile-btn-wrapper a.on-mob-btn').remove();
            document.querySelector('.on-mobile-btn-wrapper').append(sticky_button);
            window.addEventListener('scroll', function() {
                sticky_button.classList.toggle('hide-by-scroll', pageYOffset < 1240);
            });
        })
        .catch(function(error) {
            console.error(error);
        });






})();








