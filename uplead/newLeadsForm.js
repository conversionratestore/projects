//push dataLayer
let pushDataLayer = (nameCount, desc, type, loc) => {
    console.log(nameCount + " : " + desc + " : " + type + " : " + loc)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga4',
        'event_name': `exp_hp_leads_form_0${nameCount}`,
        'event_desc': desc,
        'event_type': type,
        'event_loc': loc
    });
}

let ladedTest = () => {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga4',
        'event_name': 'exp_hp_leads_form_loaded'
    });
}
let stateUrl = window.location.href;
let url = ''

let runTest = () => {
    let start = setInterval(() => {
        /* main page */
        if (url == 'https://www.uplead.com/' && document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button .elementor-button-text') != null) {
            clearInterval(start)

            //add styles form main page
            let styleMainPage = `
            <style class="style-main">
                section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no {
                    background: #C0EBF4 linear-gradient(73.23deg, #C0EBF4 0%, rgba(255, 255, 255, 0.6) 100%);
                    border-radius: 30px;  
                    min-height: auto;
                    max-width: 1225px;
                }
                .elementor-10506 .elementor-element.elementor-element-e740961>.elementor-element-populated>.elementor-widget-wrap {
                    padding-right: 0;
                }
                section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-column.elementor-col-50 {
                    padding: 80px 0 52px;
                }
                section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-column.elementor-col-50:first-child {
                    width: 59%;
                    padding-left: 30px;
                }
                section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-column.elementor-col-50:last-child {
                    width: calc(41% + 20px);
                    margin-left: -20px;
                    background: url(https://www.uplead.com/wp-content/uploads/2021/05/uplead-home-page-data-aacuracy.png) no-repeat left center / 787px 563px;
                }
                .elementor-10506 .elementor-element.elementor-element-3b67189 .elementor-heading-title {
                    max-width: 632px;
                    position: relative;
                    z-index: 1;
                }
                .elementor-10506 .elementor-element.elementor-element-3b67189 .elementor-heading-title:before {
                    content: '';
                    position: absolute;
                    width: 484px;
                    height: 15px;
                    bottom: 5px;
                    left: 0;
                    background: #41A3B9;
                    z-index: -1;
                }
                .container-hero {
                    max-width: 604px;
                }
                section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-text-editor.elementor-clearfix {
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 31px;
                    color: #4F4F4F;
                }
                .elementor-10506 .elementor-element.elementor-element-954ec92:not(.elementor-motion-effects-element-type-background) {
                    background: none;
                }
                section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-12191 .elementor-element.elementor-element-082d56f>.elementor-container {
                    padding-top: 5px;
                    max-width: 662px;
                    margin: 0;
                }
                .elementor-10506 .elementor-element.elementor-element-6d91b61 {
                    display: none;
                }
                .elementor-10506 .elementor-element.elementor-element-6c7190c .elementor-heading-title {
                    color: #4F4F4F;
                    font-size: 22px;
                    display: block;
                    margin-bottom: -8px;
                }
                .elementor-10506 .elementor-element.elementor-element-a488315 img {
                    max-width: 570px;
                    margin-right: auto;
                    display: block;
                }
            </style>`;

            document.querySelector('.style-main') == null ? document.body.insertAdjacentHTML('afterbegin', styleMainPage) : ''
            document.querySelector('#form-field-email').type = 'text'
            document.querySelector('.elementor-form').addEventListener('submit', (e) => {
                e.preventDefault()
                window.location.href = 'https://www.uplead.com/findleadsnow'
            })
            //change text on button
            document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button .elementor-button-text').innerHTML = 'Find Leads Now';
            ladedTest()
        }
        /* end main page */
        
        /* findleadsnow page */
        if (url.includes('/findleadsnow') && document.body != null) {
            document.body.innerHTML = '';
            document.body.style = 'background: url(https://conversionratestore.github.io/projects/uplead/img/bg-findleadeshow.svg) no-repeat center top / 100vw; width: 100%; height: 100vh;'
            
            if (document.readyState == 'complete') {
                setTimeout(() => {
                    window.location.href = 'https://app.uplead.com/trial-signup'
                }, 3000)
                ladedTest()
            }
                
            document.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                pushDataLayer(1, 'Any element on page', 'Interaction', 'Contact Search') //event
                window.location.href = 'https://app.uplead.com/trial-signup';
            })  
        }
        /* end findleadsnow page */

        /* pop-up form */
        if (url.includes('/trial-signup') && document.querySelector('.WwzhpJuEdC9ZWUaDw5ae') != null && document.querySelector('form') != null && document.querySelector('.modal-sign') == null) {
            clearInterval(start)

            let styleModal = `
            <style class="style-modal">
                html, body {
                    overflow: hidden;
                }
                .modal-sign {
                    background: url(https://conversionratestore.github.io/projects/uplead/img/bg-findleadsnow-open.svg) no-repeat center top / 100vw;
                    font-family: 'gilroy', sans-serif;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 99;
                    overflow-y: auto;
                }
                .modal-sign_container {
                    display: flex;
                    width: 100%;
                    min-height: 100%;
                    background: rgba(0, 0, 0, 0.5)
                }
                .modal-sign .container {
                    max-width: 822px;
                    margin: auto;
                    background: #FFFFFF;
                    box-shadow: 0 24px 38px rgba(8, 15, 52, 0.06);
                    border-radius: 16px;
                    overflow-y: auto;
                }
                .modal-header {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 31px;
                    padding: 24px 40px;
                    color: #14142B;
                    border-bottom: 1px solid #E1EBEE;
                }
                .modal-sign .col h4 {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 24px;
                    color: #091D30;
                    margin-bottom: 25px;
                }
                .modal-sign form {
                    padding: 0;
                    width: 100%;
                }
                .modal-sign .col {
                    padding: 25px 40px;
                }
                .modal-sign .col:first-child {
                    width: 471px;
                }
                .modal-sign .col:last-child {
                    width: 351px;
                    background: #F8FBFB;
                }
                .modal-sign input {
                    width: 100%!important;
                    height: auto!important;
                    font-size: 16px!important;
                    padding: 14px 24px!important;
                    margin-bottom: 0px!important;
                    box-shadow: none!important;
                }
                .modal-sign input[type="tel"] {
                    padding-left: 70px!important;
                }
                .modal-sign label {
                    font-weight: 600!important;
                    font-size: 16px!important;
                    margin-bottom: 6px!important;
                }
                .react-tel-input .flag-dropdown {
                    height: auto!important;
                    box-shadow: none!important;
                }
                .F2DyT6jjjkH4eBSExcH4 {
                    align-items: flex-start;
                }
                .oy4M8Xq3A6chKn0pmXTt {
                    height: 12px;
                }
                .jstwZ3bUxfDulJ7Bkbga {
                    max-width: 200px;
                    font-weight: 500;
                    line-height: 20px;
                }
                .trusted-by {
                    padding-top: 40px;
                    border-top: 1px solid #E1EBEE;
                    margin-top: 20px;
                }
                .trusted-by img {
                    margin-bottom: 19px;
                }
                .WwzhpJuEdC9ZWUaDw5ae {
                    gap: 20px;
                }
                .cO98tMz831zEgmUg_ng5 {
                    gap: 0;
                }
                .Os71zjSj2xDr22ogTMr1 {
                    gap: 15px;
                }
                .Os71zjSj2xDr22ogTMr1 .EbdAVLAV63Q8iq4tqgYM {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 16px;
                    margin-bottom: -5px;
                }
                .Os71zjSj2xDr22ogTMr1 .leog3VMitSyE0HVGVoMr {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 20px;
                    margin-bottom: 15px;
                }
                .cD02q96rHTjYm9KAUpQY .vCenklqa2IbXcZFtBtUj {
                    line-height: 27px;
                    width: 100%;
                    height: 50px;
                }
                .cD02q96rHTjYm9KAUpQY .dOalaiO_Gnu9XMwMsLzZ {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    margin-top: 15px;
                    padding-bottom: 7px;
                }
                /* flex */
                .flex {
                    display: flex;
                }
                .flex-wrap {
                    flex-wrap: wrap;
                }
                .justify-between {
                    justify-content: space-between;
                }
            </style>`;

            let formModal = `
            <div class="modal-sign">
                <div class="modal-sign_container">
                    <div class="container">
                        <h2 class="modal-header">Get access to 107M+ B2B contacts with a free trial</h2>
                        <div class="flex">
                            <div class="col">
                                <h4>Sign up and download 5 lead contacts for free</h4>
                            </div>
                            <div class="col">
                                <h4>All Features & Data Included:</h4>
                                <div class="trusted-by">
                                    <h4>Trusted by</h4>
                                    <div class="flex flex-wrap justify-between">
                                        <img src="https://conversionratestore.github.io/projects/uplead/img/microsoft.svg" alt="icon">
                                        <img src="https://conversionratestore.github.io/projects/uplead/img/dropbox.svg" alt="icon">
                                        <img src="https://conversionratestore.github.io/projects/uplead/img/amazon.svg" alt="icon">
                                        <img src="https://conversionratestore.github.io/projects/uplead/img/salesforce.svg" alt="icon">
                                        <img src="https://conversionratestore.github.io/projects/uplead/img/google.svg" alt="icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            //add styles form main page
            document.body.insertAdjacentHTML('afterbegin', styleModal)
            //add modal html
            document.querySelector('.app-layout__content').insertAdjacentHTML('beforeend', formModal)
            document.querySelector('.modal-sign .col:first-child > h4').after(document.querySelector('form'))
            //add All Features & Data Included in modal
            document.querySelector('.modal-sign .col:last-child > h4').after(document.querySelector('.WwzhpJuEdC9ZWUaDw5ae'))
            
            //events
            pushDataLayer(2, 'View', 'Popup', 'Popup: Get access to 107M+ B2B contacts') 

            let count = 3;
            document.querySelectorAll('.modal-sign input').forEach((item, index) => {
                item.addEventListener('click', () => {
                    pushDataLayer(count + index, item.previousElementSibling.innerHTML, 'Input', 'Popup: Get access to 107M+ B2B contacts')
                })
            })
            document.querySelector('.EbdAVLAV63Q8iq4tqgYM').addEventListener('click', () => {
                pushDataLayer(7, 'Have a partner code', 'Button', 'Popup: Get access to 107M+ B2B contacts')
            })
            document.querySelector('.modal-sign [type="submit"]').addEventListener('click', () => {
                pushDataLayer(8, 'Sign Up Now', 'Button', 'Popup: Get access to 107M+ B2B contacts')
            })
            document.querySelector('.ybJ38nhaJTL1t34tqwOg').addEventListener('click', () => {
                pushDataLayer(9, 'Sign In', 'Button', 'Popup: Get access to 107M+ B2B contacts')
                window.location.href = 'https://app.uplead.com/login'
            })

            document.querySelector('.modal-sign form').addEventListener('submit', () => {
                let checkError = setInterval(() => {
                    if (window.location.href.includes('verification')) {
                        clearInterval(checkError)
                        window.location.reload();
                    } 
                }, 200)
            })

            ladedTest()
        }
        /* end pop-up form */
    })
}
runTest()

let mutUrl = setInterval(() => {
    url = window.location.href;
    if (url != stateUrl) {
        stateUrl = url
        runTest()
    }
}, 100)

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "hp_leads_form", "variant_1");
    }
}, 100)