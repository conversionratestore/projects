let sidebarItem = document.querySelectorAll('.react-sanfona-item.sidebar__item')[0],
    sidebarLinks = sidebarItem.querySelectorAll('.sidebar__item-link'),
    count = 0;

let configObserve = {
    childList: true,
    subtree: true
};
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

     }
</style>`)
//chenge name link in sidebar
sidebarLinks[0].innerHTML = `Sign a Document`;
sidebarLinks[1].innerHTML = `Sign & Send for Signature`;
sidebarLinks[2].innerHTML = `Send for Signature`;
sidebarLinks[3].innerHTML = `Bulk Send`;

//open 'Sign a Document' 
sidebarItem.querySelectorAll('.sidebar__item-trigger')[0];
sidebarLinks[0].click(); 

let mut = new MutationObserver(function (muts) {

    //link 1 ("Sign a Document")
    if (sidebarLinks[0].classList.contains('sidebar__item-link--active') && document.querySelector('.signTemplate__title') != null && document.querySelector('.signTemplate__templateField-select-wrapper') != null && count == 0) {
        mut.disconnect();
        count = 1;
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .signTemplate__templateField {
                padding-bottom: 20px;
            }
        </style>`)
        let uploadFileSection = document.querySelector('.signTemplate__templateField-select-wrapper'),
            uploadFileWrapper = document.querySelector('.signTemplate__templateField'),
            orElement = document.querySelector('.common__or'),
            form = document.querySelector('.signTemplate__form'),
            h1 = document.querySelector('.signTemplate__title'),
            docForSigningSection = document.querySelector('.signTemplate__form-mainGroupField');

            docForSigningSection.querySelectorAll('.form__field')[0].before(h1);
            uploadFileWrapper.before(uploadFileSection);
            uploadFileWrapper.after(docForSigningSection);
            uploadFileSection.querySelector('.signTemplate__templateField-upload-createButton').after(orElement);
    }
    
    mut.observe(document, configObserve);

    //interact modal
    if (document.querySelector('.interactModal__body') != null && document.querySelector('.tooltipe') == null) {
        mut.disconnect();
        let interactModal = document.querySelector('.interactModal__body'),
            sendInteractModal = document.querySelector('.interactModal__header-send');
        
        sendInteractModal.disabled = true;
        sendInteractModal.querySelector('p').innerHTML = 'Save';

        interactModal.insertAdjacentHTML('beforeend', tooltipe)
        document.querySelector('.tooltipe button').addEventListener('click', (e) => {
            interactModal.classList.add('active');
            document.querySelector('.tooltipe').hidden = true;
        })

    }
    mut.observe(document, configObserve);

})
mut.observe(document, configObserve);
