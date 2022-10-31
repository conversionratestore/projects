let run = setInterval(() => {
    /* main page */
    if (href == 'https://www.uplead.com/' && document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button .elementor-button-text') != null) {
        clearInterval(run)

        //add styles form main page
        let styleMainPage = `
        <style>
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
        document.body.insertAdjacentHTML('afterbegin', styleMainPage)

        //change text on button
        document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button .elementor-button-text').innerHTML = 'Find Leads Now';
    }
    /* end main page */

    /* findleadsnow page */
    if (href.includes('/findleadsnow/') && document.body != null) {
        clearInterval(run)
        document.body.innerHTML = '';
        document.body.style = 'background: url(https://conversionratestore.github.io/projects/uplead/img/bg-findleadeshow.svg) no-repeat center / 100vw 100vh; width: 100%; height: 100vh;'
        if (document.readyState == 'complete') {
            setTimeout(() => {
                // window.location.href = 'https://app.uplead.com/trial-signup'
            }, 3000)
        }
        // document.addEventListener('click', (e) => window.location.href = 'https://app.uplead.com/trial-signup')
    }
    /* end findleadsnow page */

    /* pop-up form */
    if (href.includes('/trial-signup') && document.querySelector('.WwzhpJuEdC9ZWUaDw5ae') != null && document.querySelector('form') != null) {
        clearInterval(run)

        let styleModal = `
        <style>
            .modal-sign {
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                font-family: 'gilroy', sans-serif;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 99;
            }
            .modal-sign:before {
                content: '';
                posisiton: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: url(https://conversionratestore.github.io/projects/uplead/img/bg-findleadsnow-open.png) no-repeat center / 100%;
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
        </div>`;

        //add styles form main page
        document.body.insertAdjacentHTML('afterbegin', styleModal)
        //add modal html
        document.querySelector('.app-layout__content').insertAdjacentHTML('beforeend', formModal)
        document.querySelector('.modal-sign .col:first-child > h4').after(document.querySelector('form'))
        //add All Features & Data Included in modal
        document.querySelector('.modal-sign .col:last-child > h4').after(document.querySelector('.WwzhpJuEdC9ZWUaDw5ae'))
    }
    /* end pop-up form */
})