let href = window.location.href;

let objText = {
    'Get up to 3 documents signed for free, every month': 'Sign 1 document for free!',
    'Sign 3 documents for free using Signaturely': 'Sign 1 document for free',
    'Get up to 3 documents per month signed for free' : 'Get up to 1 document per month signed for free',
    'Signaturely (eSign Documents)': 'Need to sign a document?',
}

let modalLimit = `
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
                    <p class="upgradeModal__text">You've reached your limit of 1 signature requests this month.<br>Please upgrade your account to request more signatures.</p>
                </div>
                <a href="https://next-app.signaturely.com/settings/billing/plan" class="button button--primary">
                    <span class="button__text">Upgrade Account</span>
                </a>
            </div>
        </div>
    </div>
</div>`

let arrText = ['Sign 1 document for free!','Need to sign a document?','','','']

let changeText = setInterval(() => {
    if (href.includes('/online-signature/draw') || href.includes('/online-signature/type')) {
        if (document.querySelector('.elementor-heading-title') != null) {
            clearInterval(changeText)
            document.querySelector('.elementor-heading-title').innerHTML = arrText[0];
        }
    }
})

function changeTextInModalFun() {
    let changeTextInModal = setInterval(() => {
        if (document.querySelectorAll('.chakra-modal__body .chakra-text') && document.querySelectorAll('.chakra-modal__body h3') && document.querySelector('.chakra-modal__body') != null) {
            clearInterval(changeTextInModal)
            document.querySelectorAll('.chakra-modal__body h3').forEach(item => {
                if (item.innerHTML == 'Signaturely (eSign Documents)') item.innerHTML = arrText[1];
            })
        
            document.querySelectorAll('.chakra-modal__body .chakra-text').forEach(item => {
                if (item.innerHTML == 'Sign 3 documents for free using Signaturely!') item.innerHTML = arrText[0];
            })
            document.querySelector('.chakra-modal__close-btn').addEventListener('click', () => {
                setTimeout(() => {
                    changeTextInModalFun()
                }, 1500)
            })
        } 
    })
}

changeTextInModalFun() 

let billingInterval = setInterval(() => {
    if (document.querySelector('.billing__table-row') != null) {
        clearInterval(billingInterval)
        console.log('/billing/plan')
        document.querySelectorAll('.billing__table-row').forEach(el => {
            if (el.querySelector('.billing__table-column--name').innerHTML == 'Documents per month') {
                console.log(el)
                el.querySelector('.billing__table-column--name').nextElementSibling.innerHTML = '1';
            }
        })
    }
})

let headerinterval = setInterval(() => {
    if (document.querySelector('.header__month-counter') != null) {
        clearInterval(headerinterval)
        let month = document.querySelector('.header__month-counter');
        if (month.innerText.includes('0 of 3 signature requests') || month.innerText.includes('1 of 3 signature requests')) {
            month.innerHTML = month.innerHTML.replace('of 3', 'of 1');
        }

        if (month.innerText.includes('1 of 1 signature requests')) {
            sessionStorage.setItem('documents', '1');
        } else {
            sessionStorage.setItem('documents', '0');
        }
    }
})

function initModalInterval() {
    let modalInterval = setInterval(() => {
        if (document.querySelector('.interactModal__header-send button.button--primary') != null && document.querySelector('.fieldShape') != null && sessionStorage.getItem('documents') == '1') {
            clearInterval(modalInterval)
            document.querySelector('.interactModal__header-send button.button--primary').addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                console.log(e)
                document.body.insertAdjacentHTML('beforeend', modalLimit)
            })
        }
    })
    
}
initModalInterval()

let closeModalInterval = setInterval(() => {
    if (document.querySelector('.modal-limit .modal__close-button') != null) {
        clearInterval(closeModalInterval)
        document.addEventListener('click', (e) => {
            if (document.querySelector('.modal-limit') != null && (!e.target.closest('.upgradeModal') || e.target.classList.contains('modal__close-button') || e.target.closest('.modal__close-button'))) {
                console.log(e)
                document.querySelector('.modal-limit').remove();
                initModalInterval()
            }
        })
    }
})

