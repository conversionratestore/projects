let style = `
<style>
    .modal {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        background: rgba(0, 0, 0, 0.72);
        position: fixed;
        z-index: 99999;
        left: 0;
        top: 0; 
        display: inline-flex;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        height: 100vh;
        width: 100%;
        overflow-y: auto;
    }
    .modal.active {
        opacity: 1;
        pointer-events: auto;
    }
    .modal.active .modal_container {
        transform: translateY(0);
    }
    .modal * {
        margin: 0;
        padding: 0;
    }
    .modal .close {
        position: absolute;
        right: 10px;
        top: 5px;
        width: 32px;
        height: 32px;
        background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/close.svg") no-repeat center / 12px;
        opacity: 1;
        flex-shrink: 0;
    }
    .modal_container {
        margin-top: auto;
        transform: translateY(100px);
        position: relative;
        background: #FFFFFF;
        width: 100%;
        transition: all 0.3s ease;
        padding: 0 20px 20px;
    }
    .modal_header {
        padding: 20px 0 17px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #D9D9D9;
        max-width: 350px;
        margin: 0 auto 20px;
    }
    .modal .title {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 24px;
        line-height: 25px;
        text-transform: uppercase;
        color: #111111;
    }
    .modal .title span {
        text-transform: lowercase;
        display: block;
    }
    .modal img {
        max-width: 157px;
        width: 100%;
        height: 100%;
        margin-right: 20px;
    }
    .modal .name {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin-bottom: 5px;
    }
    .modal .text {
        font-size: 12px;
        color: #4A4A4A;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        line-height: 19px;
        position: relative;
    }
    .modal .size {
        font-size: 12px;
        color: #7F7F7F;
        margin-bottom: 20px;
        line-height: 14px;
    }
    .modal .price {
        font-family: 'Bebas Neue', sans-serif;
        font-weight: 700;
        font-size: 30px;
        line-height: 30px;
        color: #111111;
        margin-bottom: 20px;
    }
    .btn_skip {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 11px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.03em;
        text-decoration-line: underline;
        text-transform: uppercase;
        color: #111111;
        display: block;
        padding: 10px 0;
        margin: 10px 0;
    }
    .btn_add-order {
        background: #ffff00;
        border-radius: 20px;
        padding: 13px 30px;
        font-family: 'Bebas Neue';
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #111111;
        display: block;
        width: fit-content;
        margin: 0 auto;
    }
    .d-flex {
        display: flex;
        max-width: 338px;
        margin: 0 auto;
    }
    .btn_next {
        margin-top: 20px;
        text-align: center;
    }
    .btn_more {
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 0;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 19px;
        text-decoration-line: underline;
        color: #111111;
    }
    @media only screen and (max-width: 360px) {
        .modal .title {
            font-size: 20px;
            line-height: 21px;
        }
        .modal_container {
            padding: 0 10px 20px;
        }
        .modal img {
            margin-right: 15px;
            max-width: 130px;
        }
        .d-flex {
            max-width: 301px;
        }
        .btn_skip {
            font-size: 10px;
        }
        .modal .close {
            right: 0;
            top: 0;
        }
    }
</style>`

//push data layer
function pushDataLayer(action) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: T-shirt upsell',
        'eventAction': action
    });
}

let interval = setInterval(() => {
    if (document.body) {
        clearInterval(interval);

        document.body.insertAdjacentHTML('afterbegin', style); //add styles

        //add modal
        document.body.insertAdjacentHTML('beforeend',`
        <div class="modal">
            <div class="modal_container">
                <div class="modal_header">
                    <h2 class="title">Hol dir jetzt unser Event T-Shirt! <span>(nur möglich als Vorbestellung)</span></h2>
                    <button type="button" class="close"></button>
                </div>
                <div class="d-flex">
                    <img loading="lazy" src="https://conversionratestore.github.io/projects/mammutmarsch/img/t-shirt.png" data-lazy-src="https://mammutmarsch.de/wp-content/themes/megamate-child/images/tshirt.jpg" class="lazyloaded" data-was-processed="true">
                    <div>
                        <p class="name">Mammutmarsch <br>Event T-Shirt</p>
                        <p class="size">Größe S, M, L, XL, XXL</p>
                        <p class="price">20€</p>
                        <p class="text">Hochwertiges Baumwoll T-Shirt, individueller Druck für jedes Event, Damen- und Herrenshirts, modisch geschnitten. <a href="#" class="btn_more">more</a></p>
                    </div>
                </div>
                <a href="#" class="btn_skip text-center">Angebot überspringen und Anmeldung abschließen</a>
                <a href="#" class="btn_add-order">T-Shirt hinzufügen</a>
            </div>
        </div>`)

        function showModal() { // function show modal
            document.querySelector('.modal').classList.add('active');
            pushDataLayer('Show pop up') //event
        }
        function hideModal() { // function hide modal
            document.querySelector('.modal').classList.remove('active');
        }

        // all favorite cards are hidden
        document.querySelectorAll('.favourite').forEach(item => {
            item.closest('.col-md-6').style.display = 'none'; 
        })

        // hide modal
        document.querySelector('.modal .close').addEventListener('click', (e) => {
            hideModal()
            pushDataLayer('Upsell pop up closed (x)') //event
        })
        document.querySelector('.modal').addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                hideModal()
                pushDataLayer('Upsell pop up closed under pop up')
            }
        }) 

        // events on green button in cards
        document.querySelectorAll('.checkboxes-anmelden').forEach(item => {
            item.style.display = 'none';
            item.insertAdjacentHTML('afterend', `<div class="btn_next">${item.innerHTML}</div>`)
            item.nextElementSibling.addEventListener('click', (e) => {
                let parent = item.parentElement;

                //set href for "Skip offer and Continue Checkout" button
                parent.querySelector('.radio-container input').click()
                document.querySelector('.modal .btn_skip').href = `https://mammutmarsch.de/checkout/?add-to-cart=${document.querySelector('.variations_form.cart [name="add-to-cart"]').value}&quantity=1`;
                
                //set data for T-shirt
                let favorite = document.querySelectorAll('.favourite');
            
                favorite.forEach(el => {
                    if (favorite.length > 1) {
                        el.innerHTML.includes(parent.querySelector('.title').innerHTML.split('KM')[0].trim()) ? el.click() : '';
                    } else {
                        el.click();
                    }
                })  
                //set href for "Add to order" button
                document.querySelector('.modal .btn_add-order').href = `https://mammutmarsch.de/checkout/?add-to-cart=${document.querySelector('.variations_form.cart [name="add-to-cart"]').value}&quantity=1`;   
                
                showModal() //show modal
            })
        })
        
        document.querySelector('.modal .btn_more').addEventListener('click', (e) => {
            e.target.hidden = true;
            document.querySelector('.modal .text').style = '-webkit-line-clamp: inherit;'
            pushDataLayer('click on more button') //event
        }) 
        document.querySelector('.modal .btn_skip').addEventListener('click', (e) => pushDataLayer('Scip offer selected')) //event
        document.querySelector('.modal .btn_add-order').addEventListener('click', (e) => pushDataLayer('T-shirt added to the order')) //event
        const appHeight = () => {
            // document.querySelector('.modal').style.height = window.innerHeight + 'px';
            document.querySelector('.modal').style.height = window.clientHeight + 'px';
        }
        window.addEventListener('resize', appHeight)
        appHeight()
    }
})

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: T-shirt upsell',
    'eventAction': 'loaded'
});;

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1191175,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('event', 'tshirt_upsell');
