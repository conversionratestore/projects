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

let loadedTest = () => {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga4',
        'event_name': 'exp_hp_leads_form_loaded'
    });
}

let stateUrl = window.location.href;
let url = ''

let isUrlValid = (userInput) => {
    let url = userInput.value;
    let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

let formHTML = `
<form class="modal-exp">
    <h3>Search for qualified leads</h3>
    <div class="relative">
        <input type="text" placeholder="Search leads by company URL" >
        <p class="error-message" style="display: none;">Please enter a valid company URL</p>
    </div>
    <button type="button">Grab 5 free leads now</button>
</div>`;

let runTest = () => {
    let start = setInterval(() => {
        /* main page */
        if (stateUrl == 'https://www.uplead.com/' && document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button .elementor-button-text') != null) {
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
                section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no #form-field-email {
                    padding-left: 64px;
                }
                .icon-link {
                    position: absolute;
                    left: 30px;
                    top: 50%;
                    transform: translateY(-50%);
                }
              
            </style>`;

            document.querySelector('.style-main') == null ? document.body.insertAdjacentHTML('afterbegin', styleMainPage) : ''
            document.querySelector('#form-field-email').type = 'text'; //change type input
            //add icon
            document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-field-type-email.elementor-field-group-email.elementor-field-required').insertAdjacentHTML('afterbegin', 
            `<svg class="icon-link" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.4609 7.78906C12.25 7.57812 12.0039 7.36719 11.7578 7.19141C11.5117 7.01562 11.2305 7.05078 11.0195 7.22656L10.2812 7.96484C10 8.28125 9.85938 8.66797 9.85938 9.01953C9.85938 9.23047 9.96484 9.37109 10.1055 9.47656C10.2109 9.54688 10.3516 9.65234 10.4922 9.75781C11.4766 10.7773 11.4766 12.3594 10.4922 13.3438L8.10156 15.6992C7.11719 16.7188 5.5 16.7188 4.51562 15.6992C3.53125 14.7148 3.56641 13.0977 4.55078 12.1133L5.00781 11.6562C5.18359 11.5156 5.21875 11.2695 5.14844 11.0586C4.9375 10.4609 4.83203 9.82812 4.79688 9.23047C4.79688 8.73828 4.19922 8.49219 3.84766 8.84375L2.54688 10.1445C0.472656 12.2188 0.472656 15.6289 2.54688 17.7031C4.62109 19.7773 8.03125 19.7773 10.1055 17.7031L12.4609 15.3477C12.4609 15.3477 12.4609 15.3477 12.4609 15.3125C14.5352 13.2734 14.5703 9.89844 12.4609 7.78906ZM17.418 2.83203C15.3438 0.757812 11.9336 0.757812 9.85938 2.83203L7.50391 5.1875C7.50391 5.1875 7.50391 5.1875 7.50391 5.22266C5.42969 7.26172 5.39453 10.6367 7.50391 12.7461C7.71484 12.957 7.96094 13.168 8.20703 13.3438C8.45312 13.5195 8.73438 13.4844 8.94531 13.3086L9.68359 12.5703C9.96484 12.2539 10.1055 11.8672 10.1055 11.5156C10.1055 11.3047 10 11.1641 9.85938 11.0586C9.75391 10.9883 9.61328 10.8828 9.47266 10.7773C8.48828 9.75781 8.48828 8.17578 9.47266 7.19141L11.8633 4.83594C12.8477 3.81641 14.4648 3.81641 15.4492 4.83594C16.4336 5.82031 16.3984 7.4375 15.4141 8.42188L14.957 8.87891C14.7812 9.01953 14.7461 9.26562 14.8164 9.47656C15.0273 10.0742 15.1328 10.707 15.168 11.3047C15.168 11.7969 15.7656 12.043 16.1172 11.6914L17.418 10.3906C19.4922 8.31641 19.4922 4.90625 17.418 2.83203Z" fill="#A6AAAF"/>
            </svg>`)
            //change placeholder
            document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no #form-field-email').placeholder = 'company.com';
            
            document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button').addEventListener('click', (e) => {
                e.preventDefault()
                if (isUrlValid(document.querySelector('#form-field-email')) == true) {
                    window.location.href = 'https://www.uplead.com/findleadsnow'
                }
            })
            //change text on button
            document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button .elementor-button-text').innerHTML = 'Find Leads Now';
            loadedTest()
        }
        /* end main page */
        
        /* findleadsnow page */
        if (stateUrl.includes('/findleadsnow') && document.body != null) {
            document.body.innerHTML = '<img class="bg" src="https://conversionratestore.github.io/projects/uplead/img/bg-findleadeshow.svg" alt="image" width="100%"/>'
            
            if (document.readyState == 'complete') {
                clearInterval(start)
                setTimeout(() => {
                    window.location.href = 'https://app.uplead.com/trial-signup'
                }, 3000)
                loadedTest()
            }
                
            document.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                pushDataLayer(1, 'Any element on page', 'Interaction', 'Contact Search') //event
                window.location.href = 'https://app.uplead.com/trial-signup';
            })  
        }
        /* end findleadsnow page */

        /* pop-up form */
        if ((sessionStorage.getItem('linkForLogin') != null && !sessionStorage.getItem('linkForLogin').includes('?_ga')) || sessionStorage.getItem('linkForLogin') == null) {

            if (stateUrl == 'https://app.uplead.com/trial-signup' && document.querySelector('.WwzhpJuEdC9ZWUaDw5ae') != null && document.querySelector('form') != null && document.querySelector('.modal-sign') == null) {
                clearInterval(start)

                sessionStorage.setItem('linkForLogin', stateUrl)
                console.log(stateUrl)

                let styleModal = `
                <style class="style-modal">
                    html, body {
                        overflow: hidden;
                    }
                    .modal-sign {
                        background: url(https://conversionratestore.github.io/projects/uplead/img/bg-findleadeshow.svg) no-repeat center top / 100vw; //bg-findleadsnow-open.svg
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

                loadedTest()
            }
        }
        /* end pop-up form */

        /* Search for qualified leads form */
        if (stateUrl.includes('/meeting-request-emails') && document.querySelector('.modal-exp') == null && document.querySelector('#main > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-81ee34c.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.jet-parallax-section > div.elementor-container.elementor-column-gap-default > div') != null) {
            clearInterval(start)
            document.body.insertAdjacentHTML('afterbegin', `
                <style>
                .elementor-7517 .elementor-element.elementor-element-81ee34c>.elementor-container {
                    max-width: 1120px;
                }
                #main > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-81ee34c.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.jet-parallax-section > div.elementor-container.elementor-column-gap-default > div > div.elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-24928d7 > div > div {
                    padding: 0 20px 0 0;
                }
                #main > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-81ee34c.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.jet-parallax-section > div.elementor-container.elementor-column-gap-default > div > div.elementor-column.elementor-col-100.elementor-top-column.elementor-element.elementor-element-24928d7 {
                    width: calc(100% - 320px);
                }
                .relative {
                    position: relative;
                    width: 100%;
                }
                .error-message {
                    position: absolute;
                    left: 0;
                    top: 100%;
                    font-size: 10px;
                    line-height: 1;
                }
                .modal-exp {
                    background: #FFFFFF;
                    border: 1px solid #EFF0F7;
                    box-shadow: 0px 24px 38px rgba(8, 15, 52, 0.06);
                    border-radius: 8px;
                    padding: 28px;
                    width: 320px;
                    height: fit-content;
                    position: sticky;
                    top: 90px;
                }
                .modal-exp h3 {
                    font-size: 24px!important;
                    line-height: 31px!important;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .modal-exp input {
                    padding: 15px 24px;
                    background: #FFFFFF;
                    border: 1px solid #E1EBEE;
                    border-radius: 50px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    margin-bottom: 16px;
                    width: 100%;
                }
                .modal-exp button {
                    background: #00A2BB;
                    border-radius: 50px;
                    width: 100%;
                    color: #FFFFFF;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 27px;
                    display: block;
                    text-align: center;
                    padding: 11.5px;
                }
                </style>
            `);

            document.querySelector('#main > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-81ee34c.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default.jet-parallax-section > div.elementor-container.elementor-column-gap-default > div').insertAdjacentHTML('beforeend', formHTML);
       
            document.querySelector('.modal-exp button').addEventListener('click', (e) => {
                if (isUrlValid(document.querySelector('.modal-exp input')) == true) {
                    document.querySelector('.modal-exp .error-message').style = "display: none;"
                    window.location.href = 'https://www.uplead.com/findleadsnow'
                } else {
                    document.querySelector('.modal-exp .error-message').style = ""
                }
            })
        }
        /* end Search for qualified leads form */
        if (stateUrl.includes('https://app.uplead.com/trial-signup?_ga')) {
            clearInterval(start)
            sessionStorage.setItem('linkForLogin', stateUrl)
        }
        if (stateUrl.includes('app.uplead.com/login') && document.querySelector('.loginForm__footer .btn-link') != null) {
            clearInterval(start)
            console.log(stateUrl)
            document.querySelector('.loginForm__footer .btn-link').addEventListener('click', (e) => {
                e.preventDefault();
                e.stopImmediatePropagation()
                console.log(sessionStorage.getItem('linkForLogin'))
                window.location.href = sessionStorage.getItem('linkForLogin');
            })
           
        }
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