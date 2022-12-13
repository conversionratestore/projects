let href = window.location.href;

// modal (html)
let modalLimitHTML = `
<div class="ReactModalPortal modal-limit">
    <div class="ReactModal__Overlay ReactModal__Overlay--after-open modal">
        <div class="ReactModal__Content ReactModal__Content--after-open modal__dialog upgradeModal">
            <div class="modal__close-button">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" class="injected-svg" data-src="/static/media/close-icon.9052da34.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M1 11.4L11.4 1M11.4 11.4L1 1" stroke="#7E8AA0" stroke-width="1.6" stroke-linecap="round"></path>
                    </svg>
                </div>
            </div>
            <div class="upgradeModal__inner">
                <div class="upgradeModal__content">
                    <h4 class="upgradeModal__title">Please upgrade your Signaturely account!</h4>
                    <p class="upgradeModal__text">You've signed your first document! <br>Please upgrade your account to request more signatures.</p>
                </div>
                <a href="https://app.signaturely.com/settings/billing/plan" class="button button--primary" onclick="pushDataLayer('Click on Upgrade Account button', 'Popup: Please upgrade your Signaturely account!')">
                    <span class="button__text">Upgrade Account</span>
                </a>
            </div>
        </div>
    </div>
</div>`;

//push DataLayer
function pushDataLayer(action, label) {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — 1 document for free instead of 3',
        'eventAction': action,
        'eventLabel': label
    });
}

let stateUrl = href, 
    url = href;

let routing = setInterval(() => {
    url = window.location.href;
    if (stateUrl != url) {
        stateUrl = url;
        init();
    }
})

init();

function init() {
    if (sessionStorage.getItem('rout-main') == null && stateUrl.includes('/signaturely.com')) {
        sessionStorage.setItem('rout-main', 'true')
        pushDataLayer('loaded', '') 
    }
    if (sessionStorage.getItem('rout-app') == null && stateUrl.includes('/app.signaturely.com')) {
        sessionStorage.setItem('rout-app', 'true')
        pushDataLayer('loaded', '') 
    }
    // change text on pages
    let changeText = setInterval(() => {
        //title form
        if (href.includes('/online-signature/draw') || href.includes('/online-signature/type')) {
            if (document.querySelector('.elementor-heading-title') != null) {
                clearInterval(changeText)
                document.querySelector('.elementor-heading-title').innerHTML = 'Sign 1 document for free!';
            }
        }
        //title form
        if (document.querySelectorAll('.elementor-container section > div.elementor-container.elementor-column-gap-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element > div > div > div.elementor-element.elementor-widget.elementor-widget-heading > div > h2')) {
            let h2Arr = document.querySelectorAll('.elementor-container section > div.elementor-container.elementor-column-gap-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element > div > div > div.elementor-element.elementor-widget.elementor-widget-heading > div > h2');
        
            h2Arr.forEach(item => {
                if (item.innerHTML == 'Get up to 3 documents signed for free, every month') {
                    clearInterval(changeText)
                    item.innerHTML = 'Sign 1 document for free!';
                }
            })
        }
        //pricing
        if (href.includes('/pricing') && document.querySelectorAll('section .popular-pricing') && document.querySelectorAll('.elementor-widget-wrap > .elementor-widget .elementor-accordion-item')) {
            clearInterval(changeText)
            document.querySelectorAll('section .popular-pricing').forEach(item => {
                item.querySelectorAll('.elementor-text-editor')[1].innerHTML = 'Get your document signed today. It’s free!';
                item.querySelector('ul.elementor-icon-list-items > li > .elementor-icon-list-text').innerHTML = 'Signature requests: 1';
            })

            document.querySelectorAll('.elementor-widget-wrap > .elementor-widget .elementor-accordion-item').forEach(item => {
                let titleTab = item.querySelector('.elementor-accordion-title'),
                    contentTab = item.querySelector('.elementor-tab-content');
                if (titleTab.innerHTML.includes('have 3 documents free')) {
                    titleTab.innerHTML = titleTab.innerHTML.replace('have 3 documents free','have only 1 document free')
                }
                if (contentTab.innerHTML.includes('request 3 documents for e-signature each month 100% free.')) {
                    contentTab.innerHTML = contentTab.innerHTML.replace('3 documents for e-signature each month','1 document for e-signature')
                }
                if (contentTab.innerHTML.includes('up to 3 documents for e-signature each month')) {
                    contentTab.innerHTML = contentTab.innerHTML.replace('up to 3 documents for e-signature each month','1 document for e-signature per account')
                }
            })
        }
        //billing plan
        if (document.querySelector('.billing__table-row') != null && localStorage.getItem('page_counter_l') != 'old') {
            clearInterval(changeText)
            document.querySelectorAll('.billing__table-row').forEach(el => {
                if (el.querySelector('.billing__table-column--name').innerHTML == 'Documents per month') {
                    el.querySelector('.billing__table-column--name').innerHTML = 'Signature requests';
                    if (window.matchMedia('(min-width: 768px)')) {
                        el.querySelector('.billing__table-column--name').nextElementSibling.innerHTML = '1';
                    }
                }
                if (el.querySelector('.billing__table-column--name').innerHTML == 'Signature requests' && window.matchMedia('(max-width: 767px)') && document.querySelector('.billing__plans-slider-dots > div:first-child') != null && document.querySelector('.billing__plans-slider-dots > div:first-child').classList.contains('billing__plans-slider-dot--selected')) { 
                    el.querySelector('.billing__table-column--name').nextElementSibling.innerHTML = '1';
                }
            })
            document.querySelector('.billing__table--description').innerHTML = 'Sign 1 document for free!';
            if (document.querySelector('.billing__plans-slider-dots > div') != null) {
                document.querySelectorAll('.billing__plans-slider-dots > div').forEach((el,i) => {
                    el.addEventListener('click', (e) => {
                        let interval = setInterval(() => {
                            if (i == 0 && document.querySelectorAll('.billing__table-row > div:last-child')[1].innerHTML == '3') {
                                clearInterval(interval)
                                document.querySelectorAll('.billing__table-row > div:last-child')[1].innerHTML = '1'
                             } else if (i == 1 || i == 2) {
                                clearInterval(interval)
                                document.querySelectorAll('.billing__table-row > div:last-child')[1].innerHTML = 'Unlimited'
                             }
                        }, 100)
                    })
                })
            }
        }
    })

    //change text in modal
    function initChangeTextInModal() {
        let changeTextInModal = setInterval(() => {
            if (document.querySelectorAll('.chakra-modal__body .chakra-text') && document.querySelectorAll('.chakra-modal__body h3') && document.querySelector('.chakra-modal__body') != null) {
                clearInterval(changeTextInModal)
                document.querySelectorAll('.chakra-modal__body h3').forEach(item => {
                    if (item.innerHTML == 'Signaturely (eSign Documents)') item.innerHTML = 'Need to sign a document?';
                })
            
                document.querySelectorAll('.chakra-modal__body .chakra-text').forEach(item => {
                    if (item.innerHTML == 'Sign 3 documents for free using Signaturely!') item.innerHTML = 'Sign 1 document for free!';
                })
                document.querySelector('.chakra-modal__close-btn').addEventListener('click', () => {
                    setTimeout(() => {
                        initChangeTextInModal()
                    }, 1000)
                })
            } 
        })
    }

    initChangeTextInModal() 

    //change header text to caption limit
    let headerinterval = setInterval(() => {
        if (document.querySelector('.header__month-counter') != null) {
            clearInterval(headerinterval)
            let month = document.querySelector('.header__month-counter');
            if (month.innerText.includes('0 of 3 signature request') || month.innerText.includes('1 of 3 signature request')) {
                month.innerHTML = month.innerHTML.replace('of 3', 'of 1').replace('requests', 'request');
                if (window.matchMedia("(min-width: 769px)").matches) {
                    month.querySelector('span').remove();
                }
            }

            if (month.innerText.includes('1 of 1 signature request')) {
                sessionStorage.setItem('documents', '1');
            } else {
                sessionStorage.setItem('documents', '0');
            }   
            if (document.querySelector('.dropDownMenu__trigger-arrow') != null) {
                document.querySelector('.dropDownMenu__trigger-arrow').addEventListener('click', () => init())
            }
            if (document.querySelector('.dropDownMenu__list .button--primary') != null){
                document.addEventListener('click', () => init())
            }
        }
    })

    //init modal - limit to 1 document for users of the "free" plan 
    function initModalInterval() {
        let modalInterval = setInterval(() => {
            if (localStorage.getItem('page_counter_l') != 'old' && document.querySelector('.interactModal__header-send button.button--primary') != null && document.querySelector('.fieldShape') != null) {
                if (sessionStorage.getItem('documents') == '1') {
                    document.querySelector('.interactModal__header-send button.button--primary').addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        document.body.insertAdjacentHTML('beforeend', modalLimitHTML)
                        pushDataLayer('View popup', 'Popup: Please upgrade your Signaturely account!') 
                    })
                } else {
                    if (document.querySelector('.successSendModal__button') != null) {
                        clearInterval(modalInterval)
                        sessionStorage.setItem('documents', '1');
                        document.querySelector('.header__month-counter').innerHTML = '1 of 1 signature request';
                    }
                }
            }
        })  
    }

    //close modal
    let closeModalInterval = setInterval(() => {
        if (document.querySelector('.modal-limit .modal__close-button') != null) {
            clearInterval(closeModalInterval)
            document.addEventListener('click', (e) => {
                if (document.querySelector('.modal-limit') != null && (!e.target.closest('.upgradeModal') || e.target.classList.contains('modal__close-button') || e.target.closest('.modal__close-button'))) {
                    document.querySelector('.modal-limit').remove(); //remove modal
                    pushDataLayer('Closing popup', 'Popup: Please upgrade your Signaturely account!') 
                    initModalInterval() //init modal
                }
            })
        }
    })
}


let isClarity = setInterval(() => {
	if(typeof clarity === 'function') {
		clearInterval(isClarity)
		clarity('set', 'one_document_for_free', 'variant_1');
	}
}, 100)
