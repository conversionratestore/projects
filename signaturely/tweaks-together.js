
let configObserve = {
    childList: true,
    subtree: true
}
let tooltipe = `
    <div class="tooltipe">
        <div class="tooltipe_container">
            <p>Drag & drop fields on the left into the document</p>
            <button type="button" class="button button--primary"><p class="button__text">Got It</p></button>
        </div>
    </div>
`

document.body.insertAdjacentHTML('afterbegin',`
<style>
    .sidebar__item-link--active {
        font-weight: 700;
        color: #627790;
    }
    .interactModal__body {
        position: relative;
    }
    .interactModal__fieldBar-wrapper, .interactModal__documentView, .interactModal__documentNavigation-wrapper {
        pointer-events: none;
    }
    .interactModal__body.active .interactModal__fieldBar-wrapper, .interactModal__body.active .interactModal__documentView, .interactModal__body.active .interactModal__documentNavigation-wrapper {
        pointer-events: auto;
    }
    .tooltipe {
        position: absolute;
        top: 10px;
        left: 350px;
        background: #FFFFFF;
        border: 1px solid #00A3FA;
        border-radius: 6px;
        padding: 18px 20px;
        text-align: center;
        max-width: 231px;
        width: 100%;
    }
    .tooltipe:before, .tooltipe:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-style: solid;
    }
    .tooltipe:before {
        top: calc(100% - 0px);
        border-width: 8px 8px 0 8px;
        border-color: #00A3FA transparent transparent transparent;
    }
    .tooltipe:after {
        top: calc(100% - 1px);
        border-width: 7px 7px 0 7px;
        border-color: #fff transparent transparent transparent;
    }
    .tooltipe p {
        font-weight: 500;
        line-height: 18px;
     }
     .tooltipe button {
         width: 100%;
         margin-top: 16px;
         text-align: center;
         justify-content: center;
     }
     .interactModal__header-send[disabled] {
        background: #8C97A3;
     }
     
     .signTemplate__templateField {
        padding-bottom: 20px;
     }
     
     .interactModal__header-send .button--primary:disabled, .interactModal__header-send .button--primary:disabled:hover {
        background-color: #8C97A3;
        border-color: #8C97A3;
        box-shadow: unset;
     }
     
     .interactModal__header-send {
      position: relative;
     }
     
     .disabled_btn {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        border-radius: 40px;
     }
     
     .disabled_btn p {
        position:absolute;
        right: 150%;
        top: 50%;
        transform: translateY(-50%);
        padding: 20px;
        border: 1px solid #00A3FA;
        border-radius: 6px;
        background-color: #fff;
        color: black;
        font-size: 14px;
        width: 300%;
        display: none;
        text-align: center;
     }
     
     .disabled_btn p::after {
        content: '';
        display: block;
        position:absolute;
        background-color: #fff;
        border: 1px solid #00A3FA;
        right: -8px;
        top: 50%;
        transform: translateY(-50%) rotateZ(45deg);
        z-index: 1;
        height: 16px;
        width: 16px;
     }
     
     .disabled_btn p::before {
        content: '';
        display: block;
        position:absolute;
        height: 30px;
        width: 20px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        background-color: white;
     }
     
     .disabled_btn:hover p {
        display: block;
     }
     
     .settingsSignature__item {
      position:relative;
     }
     
     .settingsSignature__item::before {
        content: '';
        position: absolute;
        left: 10px;
        top: 10px;
        height: 16px;
        width: 16px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #ADBFC9;
        transition: border 0.5s;
        box-sizing: border-box;
     }
     
     .settingsSignature__item.settingsSignature__item--selected::before {
        border: 5px solid #00A3FA;
     }
</style>`)


let disabledButton = `
    <div class="disabled_btn">
      <p>Please drag & drop fields on the left into the document</p>
    </div>
`

let initial = setInterval(function () {
    console.log('>>> init')
    if(document.querySelectorAll('.react-sanfona-item.sidebar__item')[0]) {
        clearInterval(initial)
        start2()
    }
}, 50)

function start2() {

    console.log('>>> start')

    let sidebarItem = document.querySelectorAll('.react-sanfona-item.sidebar__item')[0],
        sidebarLinks = sidebarItem.querySelectorAll('.sidebar__item-link')

//change name link in sidebar
    sidebarLinks[0].innerHTML = `Sign a Document`;
    sidebarLinks[1].innerHTML = `Sign & Send for Signature`;
    sidebarLinks[2].innerHTML = `Send for Signature`;
    sidebarLinks[3].innerHTML = `Bulk Send`;

    document.querySelectorAll('.react-sanfona.sidebar__list .sidebar__item-trigger')[0].addEventListener('click', function(e) {
        e.preventDefault()
    })


//open 'Sign a Document'
    sidebarItem.querySelectorAll('.sidebar__item-trigger')[0];
    sidebarLinks[0].click();


    let mut = new MutationObserver(function (muts) {

        //link 1 ("Sign a Document")
        if (sidebarLinks[0].classList.contains('sidebar__item-link--active') && document.querySelector('.signTemplate__title') != null && document.querySelector('.signTemplate__templateField-select-wrapper') != null) {
            mut.disconnect();

            let uploadFileSection = document.querySelector('.signTemplate__templateField-select-wrapper'),
                uploadFileWrapper = document.querySelector('.signTemplate__templateField'),
                orElement = document.querySelector('.common__or'),
                h1 = document.querySelector('.signTemplate__title'),
                docForSigningSection = document.querySelector('.signTemplate__form-mainGroupField');

            docForSigningSection.querySelectorAll('.form__field')[0].before(h1);
            uploadFileWrapper.before(uploadFileSection);
            uploadFileWrapper.after(docForSigningSection);
            uploadFileSection.querySelector('.signTemplate__templateField-upload-createButton').after(orElement);
        }

        //interact modal
        if (document.querySelector('.interactModal__body') != null && document.querySelector('.tooltipe') == null) {
            mut.disconnect();
            let interactModal = document.querySelector('.interactModal__body'),
                sendInteractModal = document.querySelector('.interactModal__header-send');

            sendInteractModal.disabled = true;
            if (window.location.pathname === '/only-me') {
                sendInteractModal.querySelector('p').innerHTML = 'Save';
            }

            interactModal.insertAdjacentHTML('beforeend', tooltipe)
            document.querySelector('.tooltipe button').addEventListener('click', (e) => {
                interactModal.classList.add('active');
                document.querySelector('.tooltipe').hidden = true;
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — toggle switch desktop',
                    'eventAction': 'Click on GOT IT buttom in pop up'
                });
            })
        }


        if (document.querySelector('.interactModal__documentView-inner')) {
            mut.disconnect()
            if (document.querySelectorAll('.interactModal__documentView-inner>div').length === 1) {
                document.querySelector('.interactModal__header-send .button--primary').disabled = true
                if (!document.querySelector('.disabled_btn')) {
                    document.querySelector('.interactModal__header-send .button--primary').insertAdjacentHTML('afterend', disabledButton)
                    document.querySelector('.disabled_btn').addEventListener('click', function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp — toggle switch desktop',
                            'eventAction': 'Click on drag drop pop up'
                        });
                    })
                }
            } else {
                document.querySelector('.interactModal__header-send .button--primary').disabled = false
                if (document.querySelector('.disabled_btn')) {
                    document.querySelector('.disabled_btn').remove()
                }
            }
        }

        if (document.querySelector('.settingsSignature__item:last-child')) {
            mut.disconnect()
            document.querySelector('.settingsSignature__item:last-child').click()
        }

        if(document.querySelector('.successSendModal') && window.location.pathname === '/only-me') {
            mut.disconnect()
            document.querySelector('.successSendModal .successSendModal__text-wrapper .successSendModal__title').textContent = 'Thanks for saving your document'

            let download = setInterval(function () {
                if(document.querySelector('.successSendModal .successSendModal__footer-actions button:first-child')) {
                    clearInterval(download)
                    document.querySelector('.successSendModal .successSendModal__footer-actions button:first-child').click()
                }
            }, 300)

            setTimeout(function () {
                clearInterval(download)
            }, 4000)
        }

        mut.observe(document, configObserve);

    })
    mut.observe(document, configObserve);

}

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2372209,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('event', 'toggle_switch_desktop');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — toggle switch desktop',
    'eventAction': 'loaded'
});
