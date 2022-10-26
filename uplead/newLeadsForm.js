/* main page */
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
//add styles form main page
document.body.insertAdjacentHTML('afterbegin', styleMainPage)
//change text on button
document.querySelector('section.elementor-element.elementor-element-954ec92 .elementor-container.elementor-column-gap-no .elementor-form .elementor-button .elementor-button-text').innerHTML = 'Find Leads Now';
/* end main page */

/* pop-up form */
let styleModal = `
<style>

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
                    <div class="flex">
                        <img src="" alt="icon">
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>`;

//add styles form main page
document.body.insertAdjacentHTML('afterbegin', styleModal)
//add modal html
document.body.insertAdjacentHTML('beforeend', formModal)
//add form in modal
document.querySelector('.modal-sign .col:first-child h4').after(document.querySelector('form'))
//add All Features & Data Included in modal
document.querySelector('.modal-sign .col:last-child > h4').after(document.querySelector('.WwzhpJuEdC9ZWUaDw5ae'))

/* end pop-up form */
