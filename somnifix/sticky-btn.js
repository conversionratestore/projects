let href = window.location.href;
let objItems = [];

let style = `
<style>
    /* sticky button */
    .sticky-btn {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
        background: #1E415C;
        border-top: 1px solid #F5F6F7;
        color: #fff;
    }
    .sticky-btn p {
        line-height: 21px;
        font-weight: 500;
        font-size: 14px;
    }
    .select-pack {
        width: 135px;
        position: relative;
        color: #1E415C;
        font-family: 'Rubik', sans-serif;
    }
    .select-pack p:last-child {
        font-weight: 400;
        font-size: 13px;
        color: #5E788D;
    }
    .select-current {
        padding: 13px 10px;
        position: relative;
        z-index: 1;
        background: #fff;
    }
    .select-drop {
        position: absolute;
        left: 0;
        bottom: 100%;
        width: 100%;
        background: #fff;
        border-width: 1px 1px 0px 0px;
        border-style: solid;
        border-color: #F5F6F7;
        z-index: 0;
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    .select-drop p {
        font-weight: 400;
    }
    .select-pack.active .select-drop {
        transform: translateY(0);
        opacity: 1;
    }
    .select-pack.active .select-current svg {
        transform: scaleY(-1);
    }
    .select-drop > div {
        padding: 10px;
        border-bottom: 1px solid #F5F6F7;
        font-weight: 400;
        position: relative;
    }
    .select-drop > div:after {
        position: absolute;
        left: 0;
        top: -1px;
        width: 100%;
        height: 1px;
        background: #2EA5C7;
    }
    .select-drop > div.active {
        background: #F1F7FC;
        border-color: #2EA5C7;
    }
    .select-drop > div.active:after {
        content: '';
    }
    .get-now {
        width: calc(100% - 135px);
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        padding: 10px;
    }
    .get-now > div > div {
        text-transform: uppercase;
        margin-bottom: 3px;
    }
    .get-now .sale {
        font-weight: 400;
        margin: 0 0 0 8px;
    }
    .get-now > div p {
        font-weight: 400;
        font-size: 12px;
    }
    .get-now > div p .pr-old {
        text-decoration: line-through;
    }
    .get-now > div p .pr {
        font-weight: 500;
        font-size: 14px;
    }
    .btn-cart {
        background: #FFFFFF;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: none;
    }
    /* flex */
    .justify-center {
        justify-content: center;
    }
    .justify-between {
        justify-content: space-between;
    }
    .items-center {
        align-items: center!important;
    }
    @media screen and (max-width: 350px) {
        .svg-strips {
            margin-right: 14px;
            width: 42px;
            height: 35px;
        }
        .btn-cart {
            width: 41px;
            height: 41px;
        }
    }
</style>`;

let stickyBtn = `
    <div class="sticky-btn d-flex">
        <div class="select-pack">
            <div class="select-current flx">
                <div class="">
                    <p></p>
                    <p></p>
                </div>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.175 0.158203L5 3.97487L8.825 0.158203L10 1.3332L5 6.3332L0 1.3332L1.175 0.158203Z" fill="#1E415C"/>
                </svg>
            </div>
            <div class="select-drop"></div>
        </div>
        <div class="get-now flx">
            <div>
                <div class="d-flex items-center">Get Now <div class="sale"></div></div>
                <p>for <span class="pr-old"></span> <span class="pr">$<span></span></span></p>
            </div>
            <button type="button" class="btn-cart d-flex items-center justify-center">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.932 21.8408C11.7922 21.8408 12.4896 21.1434 12.4896 20.2832C12.4896 19.4229 11.7922 18.7256 10.932 18.7256C10.0718 18.7256 9.37439 19.4229 9.37439 20.2832C9.37439 21.1434 10.0718 21.8408 10.932 21.8408Z" fill="#1E415C"/>
                    <path d="M17.9568 21.8408C18.817 21.8408 19.5144 21.1434 19.5144 20.2832C19.5144 19.4229 18.817 18.7256 17.9568 18.7256C17.0965 18.7256 16.3992 19.4229 16.3992 20.2832C16.3992 21.1434 17.0965 21.8408 17.9568 21.8408Z" fill="#1E415C"/>
                    <path d="M23.2296 4.47442C23.2962 4.17766 23.2951 3.86972 23.2266 3.57341C23.1581 3.27709 23.0238 2.99998 22.8336 2.7626C22.6435 2.52522 22.4024 2.33365 22.1282 2.20206C21.854 2.07047 21.5537 2.00224 21.2496 2.00242H6.50397L6.12957 0.161621H0.719971V2.08162H4.55997L7.67997 17.42H21.8688V15.5H9.24237L8.91597 13.8944H21.12L23.2296 4.47442Z" fill="#1E415C"/>
                </svg>
            </button>
        </div>
    </div>`

function pushDataLayer(action, label = '') {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: new_product_prices',
        'eventAction': action,
        'eventLabel': label
    })
}
//comes into view
function isScrolledIntoView(el) {
    let rect = document.querySelector(el).getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}
//visibility popup
function openPopup(view) {
    let viewed = view;

    let visibilityPopup = setInterval(() => {
        if (document.querySelector('.dark_bg_exp.active') != null && isScrolledIntoView('.dark_bg_exp.active') &&  viewed == false) {
            clearInterval(visibilityPopup)
            viewed = true;
            pushDataLayer('Visibility save 10% popup after new sticky button')
        }
    }, 200);
}

window.onload = () => {
    document.querySelectorAll('.parent-items .swatchCustom__item_new').forEach(item => {
        objItems.push({
            'variantId': item.dataset.variant,
            'title': item.dataset.title,
            'week': item.dataset.week,
            'strips': item.dataset.qty,
            'planid': item.dataset.planid,
            'price': item.dataset.price,
            'nosale': item.classList.contains('no_sale') ? true : false,
            'active': item.classList.contains('active') ? true : false,
            'sale': item.querySelector('.sale') != null ? item.querySelector('.sale').innerHTML : '',
            'compare': item.dataset.compare
        })
    })

    document.body.insertAdjacentHTML('afterbegin', style);

    if (href.includes('/products/')) {
        //add sticky button
        document.querySelector('.section').insertAdjacentHTML('beforeend', stickyBtn)
        //add options select
        for (let i = 0; i < objItems.length; i++) {
            if (href.includes('/products/')) {
                document.querySelector('.select-drop').insertAdjacentHTML('beforeend', `
                <div class="${objItems[i].nosale == true ? 'nosale' : ''} ${objItems[i].active == true ? 'active' : ''}" 
                    data-variant="${objItems[i].variantId}" 
                    data-sale="${objItems[i].sale}" 
                    data-price="${objItems[i].price}" 
                    data-week="${objItems[i].week}" 
                    data-compare="${objItems[i].compare}"
                    data-planid="${objItems[i].planid}">
                        <p>${objItems[i].week}</p>
                        <p>$${(objItems[i].price / +objItems[i].week.split(' week')[0]).toFixed(2)} / week</p>
                </div>`)
            }
        }
    }

    function addActiveItem(target) {
       
        let price = target.dataset.price;

        openPopup(false)

        document.querySelector('.select-current p:first-child').innerHTML = target.dataset.week;
        document.querySelector('.select-current p:last-child').innerHTML = `$${(price / +target.dataset.week.split(' week')[0]).toFixed(2)} / week`;
      
        document.querySelector('.get-now > div p .pr-old').innerHTML = target.dataset.compare;
        document.querySelector('.get-now > div p .pr span').innerHTML = price;
        
        if (target.closest('.sticky-btn')) {
            document.querySelector('.get-now .sale').style.display = target.dataset.sale == '' ? 'none' : '';
            document.querySelector('.get-now .sale').innerHTML = target.dataset.sale;

            //add/remove active class
            if (!target.classList.contains('active')) {
                target.parentElement.querySelector('.active').classList.remove('active')
                target.classList.add('active')
                document.querySelector(`.parent-items .swatchCustom__item_new[data-variant="${target.dataset.variant}"]`).click()

            } 
        } else {
            document.querySelector('.get-now .sale').style.display = target.querySelector('.sale') == null ?  'none' : '';
            document.querySelector('.get-now .sale').innerHTML = target.querySelector('.sale') != null ? target.querySelector('.sale').innerHTML : '';
        }
    }

    if (href.includes('/products/')) {
        //set active (sticky button)
        addActiveItem(document.querySelector('.select-drop > div.active'))
        
        //click on current select (sticky button)
        document.querySelector('.select-current').addEventListener('click', () => {
            document.querySelector('.select-pack').classList.toggle('active');
        })
        //click on cart button (sticky button)
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.mobile .stock__select').value = '1';
            document.querySelector(`.popup_btn`).click();
            pushDataLayer('Click on new get now sticky')
        })
        //click on option dropdown (sticky button)
        document.querySelectorAll('.select-drop > div').forEach(item => {
            item.addEventListener('click', (e) => {
                addActiveItem(item)
                pushDataLayer('Click on choose the price', item.dataset.week)
            })
            
        })

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.select-pack') && document.querySelector('.select-pack.active') != null) {
                document.querySelector('.select-pack').classList.remove('active');
            }
        })
    }

    document.querySelectorAll('.swatchCustom__item_new').forEach(item => {
        item.addEventListener('click', (e) => addActiveItem(item))
    })
    
    pushDataLayer('loaded')
};

let isClarity = setTimeout(function(){
    if(typeof clarity === 'function'){
        clearInterval(isClarity)
        clarity("set", "“new_product_selection_process”", "variant_1");
    }
}, 100)
