let action = '';

function pushDataLayer(action) {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP add location',
        'eventAction': action
    });
}

let optionMut = {
    childList: true,
    subtree: true,
    attributes: true
}

let mut = new MutationObserver(function (muts) {
    console.log('mut')
    if (document.querySelector('.justify-start img') != null && window.location.href.includes('/reservation/search') && document.querySelector('a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2') != null && document.querySelector('.self-end.flex.flex-col.px-4.pb-4.col-span-3.disabled a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2') != null) {
        mut.disconnect();
        console.log('mut disc 1')
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            h2.text-xl.text-left.w-full.px-4.pt-4.truncate {
                font-size: 18px;
                line-height: 24px;
            }
            .flex.flex-col.w-full.col-span-2 p {
                display: flex;
                line-height: 16px;
            }
            .flex.flex-col.w-full.col-span-2 p span.font-semibold {
                display: flex;
                align-items: center;
                line-height: 18px;
            }
            .flex.flex-col.w-full.col-span-2 p img {
                object-fit: contain;
                width: 18px;
                height: 18px;
                flex-shrink: 0;
                margin-right: 12px;
            }
            h3.text-4xl.font-medium.text-right {
                font-size: 22px;
                line-height: 24px;
                text-align: left!important;
            }
            small.uppercase.text-right.text-sm.block {
                text-align: left!important;
                font-size: 16px;
                line-height: 24px;
            }
            #info span {
                display: block;
            }
            #info {
                display: grid;
                margin-left: -2px;
            }
            #info p:first-child{
                order: 4
            }
            #info p:last-child{
                order: 3
            }
            #info p:nth-child(2){
                order: 4
            }
            #info p:nth-child(3){
                order: 1
            }
            a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2 {
                font-size: 16px;
                padding: 0!important;
                line-height: 36px;
                margin-top: 6px;
            }
            .btn-location {
                font-weight: 500;
                font-size: 16px;
                line-height: 34px;
                color: #E57715;
                background: #FFFFFF;
                border: 1px solid #E57715;
                border-radius: 30px;
                display: flex;
                align-items: center; 
                justify-content: center;
                margin-top: 10px;
            }
            .btn-location img {
                margin-left: 10px;
            }
            .flex.flex-col.h-full.justify-center.self-center.py-5.pr-4.w-full {
                padding-right: 14px!important;
            }
            </style>`)
        if (document.querySelector('.grid.grid-cols-1.divide-y.divide-gray-500.container.mx-auto.px-2') != null) {
            document.querySelector('.grid.grid-cols-1.divide-y.divide-gray-500.container.mx-auto.px-2').classList.remove('px-2')
        }
        document.querySelector('h2.text-xl.text-left.w-full.px-8.pt-4.truncate').setAttribute('class', 'text-xl text-left w-full px-4 pt-4 truncate')
        document.querySelector('.flex.flex-col.w-full.col-span-2.pb-5.pl-8.pr-0.self-center.mx-auto').setAttribute('class', 'flex flex-col w-full col-span-2 pb-5 pl-4 pr-0 self-center mx-auto')

        document.querySelector('ul.ant-rate.ant-rate-disabled.text-left').insertAdjacentHTML('afterend','<div id="info"><div class="info-item"></div></div>')
    
        let element = document.querySelectorAll('.justify-start img');

        for (let i = 0; i < element.length; i++) {
            let supText = element[i].alt;
            if (supText == 'Free Shuttle') {
                element.src = `ttps://conversionratestore.github.io/projects/onairparking/img/${arr[key].icon}`  
            }

            document.querySelector('.info-item').after(element[i])
            
            element[i].setAttribute('class','mt-4');
        }
        document.querySelector('.flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full').classList.remove('items-center')

        let btnLocation = `<a href="${document.querySelector('a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2').href}" class="btn-location">CHECK LOCATION <img src="https://conversionratestore.github.io/projects/onairparking/img/logos_google-maps.svg" alt="icon"></a>`
        document.querySelector('.self-end.flex.flex-col.px-4.pb-4.col-span-3.disabled a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2').insertAdjacentHTML('beforebegin', btnLocation)

        document.querySelector('.btn-location').addEventListener('click', () => {
            action = 'Click on "Check location" button';
            pushDataLayer(action)
        })
        document.querySelector('a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2').addEventListener('click', () => {
            action = 'Park here button';
            pushDataLayer(action)
        })
    }

    mut.observe(document, optionMut);

    if (document.body != null && window.location.href.includes('/parkingat') && document.querySelector('#google-map-parking-at') != null) {
        mut.disconnect();
        console.log('mut disc 2')
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .relative.bg-gray-100.overflow-hidden.col-span-2.h-40.w-full {
                display: none!important;
            }
            #google-map-parking-at {
                height: 200px!important;
            }
            article.shadow-md.mt-12 {
                box-shadow: none !important;
            }
            .flex.flex-col.mt-8.px-4.mb-0 {
                padding-left: 0!important;
                padding-right: 0!important;
            }
            h1.text-2xl.font-medium.mr-2 {
                font-size: 16px;
                line-height: 24px;
                font-weight: 400;
            }
            .ant-rate-star-second svg {
                width: 12px;
                height: 12px;
                margin-right: 3px;
            }
            .flex.flex-col.mt-8.px-4.mb-0 span {
                font-weight: 400;
                font-size: 12px;
                line-height: 12px;
            }
            .grid.grid-cols-1.gap-8.justify-center.items-start.my-12.px-4 {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                padding: 0!important;
                margin: 25px 0 14px!important;
            }
            .flex.flex-col.items-center svg {
                margin-bottom: 4px;
            }
            .flex.flex-col.items-center p.text-center {
                font-size: 12px;
                line-height: 12px;
                text-transform: uppercase;
                color: #111827;
            }
            .flex.flex-col.items-center p.text-xs.text-center.font-bold {
                font-weight: 500;
                font-size: 12px;
                line-height: 12px;
                color: #111827;
                margin: 0 0 4px 0;
            }
            .flex.flex-col.items-center:last-child, .flex.flex-col.items-center span,  span.anticon.anticon-clock-circle {
                display: none!important;
            }
            .flex.flex-col.items-center {
                font-family: 'Roboto', sans-serif;
            }
            .list {
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                color: #111827;
            }

        </style>`)
        
        let linkCustom = document.createElement('link');
        linkCustom.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
        linkCustom.rel = 'stylesheet';
        document.head.appendChild(linkCustom);

        document.querySelectorAll('#parkingat .grid .flex.flex-col.items-center').forEach((item,index) => {
            if (index == 0) {
                if (item.querySelector('svg') != null) {
                    item.querySelector('svg').remove();
                }
                item.insertAdjacentHTML('afterbegin',`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2133 5.1397C21.0749 4.94223 20.891 4.78099 20.6771 4.66964C20.4632 4.55829 20.2256 4.50011 19.9845 4.5H2.75C2.35231 4.50045 1.97104 4.65863 1.68983 4.93983C1.40863 5.22104 1.25045 5.60231 1.25 6V17.625H3.17572C3.3075 18.3611 3.69392 19.0273 4.26736 19.5072C4.8408 19.9871 5.56475 20.2501 6.3125 20.2501C7.06026 20.2501 7.7842 19.9871 8.35764 19.5072C8.93108 19.0273 9.3175 18.3611 9.44928 17.625H15.1757C15.3075 18.3611 15.6939 19.0273 16.2674 19.5072C16.8408 19.9871 17.5647 20.2501 18.3125 20.2501C19.0603 20.2501 19.7842 19.9871 20.3576 19.5072C20.9311 19.0273 21.3175 18.3611 21.4493 17.625H23.75V9.11817C23.7504 8.8873 23.6793 8.66197 23.5467 8.47303L21.2133 5.1397ZM8.9375 6H15.6875V10.5H8.9375V6ZM2.75 6H7.4375V10.5H2.75V6ZM6.3125 18.75C5.97874 18.75 5.65248 18.651 5.37498 18.4656C5.09747 18.2802 4.88118 18.0166 4.75345 17.7083C4.62573 17.3999 4.59231 17.0606 4.65742 16.7333C4.72254 16.4059 4.88326 16.1053 5.11926 15.8693C5.35526 15.6333 5.65594 15.4725 5.98329 15.4074C6.31063 15.3423 6.64993 15.3757 6.95828 15.5035C7.26663 15.6312 7.53018 15.8475 7.71561 16.125C7.90103 16.4025 8 16.7287 8 17.0625C7.9995 17.5099 7.82156 17.9388 7.5052 18.2552C7.18884 18.5716 6.7599 18.7495 6.3125 18.75V18.75ZM18.3125 18.75C17.9787 18.75 17.6525 18.651 17.375 18.4656C17.0975 18.2802 16.8812 18.0166 16.7535 17.7083C16.6257 17.3999 16.5923 17.0606 16.6574 16.7333C16.7225 16.4059 16.8833 16.1053 17.1193 15.8693C17.3553 15.6333 17.6559 15.4725 17.9833 15.4074C18.3106 15.3423 18.6499 15.3757 18.9583 15.5035C19.2666 15.6312 19.5302 15.8475 19.7156 16.125C19.901 16.4025 20 16.7287 20 17.0625C19.9995 17.5099 19.8216 17.9388 19.5052 18.2552C19.1888 18.5716 18.7599 18.7495 18.3125 18.75V18.75ZM22.25 16.125H21.3591C21.1587 15.4734 20.7546 14.9033 20.2063 14.4983C19.6579 14.0933 18.9942 13.8747 18.3125 13.8747C17.6308 13.8747 16.9671 14.0933 16.4187 14.4983C15.8704 14.9033 15.4664 15.4734 15.2659 16.125H9.35909C9.15865 15.4734 8.7546 14.9033 8.20627 14.4983C7.65793 14.0933 6.99419 13.8747 6.3125 13.8747C5.63081 13.8747 4.96707 14.0933 4.41873 14.4983C3.8704 14.9033 3.46635 15.4734 3.26591 16.125H2.75V12H22.25V16.125ZM22.25 10.5H17.1875V6H19.9845L22.25 9.23639V10.5Z" fill="#E57715"/>
                </svg>            
                `)
            } else if (index == 1) {
                item.insertAdjacentHTML('afterbegin',`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z" fill="#FFF6E6" stroke="#E57715" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 6V12L15 15" stroke="#E57715" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                `)
            } else if (index == 2) {
                item.insertAdjacentHTML('afterbegin',`<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8.11C6.11 8.11 5.39 7.39 5.39 6.5C5.39 6.073 5.55962 5.66349 5.86156 5.36156C6.16349 5.05962 6.573 4.89 7 4.89C7.89 4.89 8.61 5.61 8.61 6.5C8.61 6.927 8.44038 7.33651 8.13844 7.63844C7.83651 7.94038 7.427 8.11 7 8.11ZM7 2C4.5 2 2.5 4 2.5 6.5C2.5 9.87 7 14.86 7 14.86C7 14.86 11.5 9.87 11.5 6.5C11.5 4 9.5 2 7 2ZM18 8.11C17.573 8.11 17.1635 7.94038 16.8616 7.63844C16.5596 7.33651 16.39 6.927 16.39 6.5C16.39 6.28857 16.4316 6.07921 16.5126 5.88388C16.5935 5.68855 16.7121 5.51106 16.8616 5.36156C17.0111 5.21206 17.1885 5.09346 17.3839 5.01255C17.5792 4.93164 17.7886 4.89 18 4.89C18.2114 4.89 18.4208 4.93164 18.6161 5.01255C18.8115 5.09346 18.9889 5.21206 19.1384 5.36156C19.2879 5.51106 19.4065 5.68855 19.4874 5.88388C19.5684 6.07921 19.61 6.28857 19.61 6.5C19.61 6.927 19.4404 7.33651 19.1384 7.63844C18.8365 7.94038 18.427 8.11 18 8.11ZM18 2C15.5 2 13.5 4 13.5 6.5C13.5 9.87 18 14.86 18 14.86C18 14.86 22.5 9.87 22.5 6.5C22.5 4 20.5 2 18 2ZM18 16C16.73 16 15.6 16.8 15.18 18H9.82C9.55502 17.2516 9.00416 16.6387 8.28813 16.2957C7.5721 15.9527 6.74929 15.9075 6 16.17C5.62758 16.3005 5.28453 16.5031 4.99047 16.7663C4.69641 17.0294 4.45709 17.3479 4.28621 17.7036C4.11532 18.0593 4.01622 18.4452 3.99456 18.8393C3.97291 19.2333 4.02913 19.6277 4.16 20C4.42857 20.7504 4.98314 21.364 5.70261 21.7069C6.42209 22.0498 7.248 22.094 8 21.83C8.85 21.53 9.5 20.85 9.82 20H15.19C15.74 21.56 17.46 22.38 19 21.83C19.3736 21.7008 19.7179 21.4992 20.0133 21.2365C20.3086 20.9739 20.5492 20.6554 20.7211 20.2995C20.893 19.9436 20.9929 19.5573 21.015 19.1626C21.0371 18.768 20.981 18.3729 20.85 18C20.42 16.8 19.28 16 18 16ZM18 20.5C17.6022 20.5 17.2206 20.342 16.9393 20.0607C16.658 19.7794 16.5 19.3978 16.5 19C16.5 18.6022 16.658 18.2206 16.9393 17.9393C17.2206 17.658 17.6022 17.5 18 17.5C18.3978 17.5 18.7794 17.658 19.0607 17.9393C19.342 18.2206 19.5 18.6022 19.5 19C19.5 19.3978 19.342 19.7794 19.0607 20.0607C18.7794 20.342 18.3978 20.5 18 20.5Z" fill="#E57715"/>
                </svg>            
                `)
            }
        })

        document.querySelector('.grid.grid-cols-1.gap-8.justify-center.items-start.my-12.px-4').after(document.querySelector('#google-map-parking-at'))
        document.querySelector('#google-map-parking-at').insertAdjacentHTML('afterend',`
        <ul class="list py-5">
            <li class="flex mb-4">
                <svg width="24" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.88906 23.4C5.44219 20.3906 0 13.0969 0 9C0 4.02938 4.02938 0 9 0C13.9688 0 18 4.02938 18 9C18 13.0969 12.5156 20.3906 10.1109 23.4C9.53438 24.1172 8.46562 24.1172 7.88906 23.4ZM9 12C10.6547 12 12 10.6547 12 9C12 7.34531 10.6547 6 9 6C7.34531 6 6 7.34531 6 9C6 10.6547 7.34531 12 9 12Z" fill="#E57715"/>
                </svg>
                <p class="pl-4">Due to our incredibly low prices, we can only reveal the parking facility after you book</p>
            </li>
            <li class="flex mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM7.6875 4.7666C7.93474 4.75202 8.15822 4.8998 8.32764 5.1621L9.96826 8.27342C10.141 8.6421 10.0428 9.03686 9.78516 9.30028L9.0337 10.0517C8.98732 10.1153 8.9568 10.1869 8.95606 10.2656C9.24424 11.3811 10.1184 12.4101 10.8897 13.1177C11.6609 13.8253 12.4899 14.7833 13.5659 15.0102C13.6989 15.0473 13.8619 15.0606 13.957 14.9722L14.8301 14.083C15.1314 13.8546 15.5674 13.7439 15.8892 13.9307H15.9038L18.8642 15.6782C19.2988 15.9506 19.3438 16.4771 19.0327 16.7974L16.9937 18.8203C16.6925 19.1291 16.2925 19.2329 15.9038 19.2334C14.1849 19.1819 12.5607 18.3382 11.2266 17.4712C9.0368 15.8781 7.02814 13.9023 5.7671 11.5151C5.28346 10.5141 4.71532 9.23694 4.76954 8.11966C4.77438 7.69934 4.8881 7.28756 5.1841 7.01664L7.22316 4.97758C7.382 4.84242 7.53914 4.77536 7.6875 4.7666Z" fill="#E57715"/>
                </svg>
                <p class="pl-4">24/7 Phone support to help you book your parking reservation</p>
            </li>
            <li class="flex mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7633 12.5085C21.157 11.9882 21.375 11.3507 21.375 10.6874C21.375 9.63507 20.7867 8.63897 19.8398 8.0835C19.5961 7.94052 19.3185 7.86527 19.0359 7.86554H13.4156L13.5563 4.98507C13.5891 4.28898 13.343 3.62804 12.8648 3.12414C12.6302 2.87577 12.3471 2.67815 12.0331 2.54351C11.7191 2.40887 11.3807 2.34005 11.0391 2.34133C9.82031 2.34133 8.74219 3.16164 8.41875 4.33585L6.40547 11.6249H6.39844V21.6561H17.468C17.6836 21.6561 17.8945 21.614 18.0891 21.5296C19.2047 21.0538 19.9242 19.964 19.9242 18.7546C19.9242 18.4593 19.882 18.1686 19.7977 17.8874C20.1914 17.3671 20.4094 16.7296 20.4094 16.0663C20.4094 15.771 20.3672 15.4804 20.2828 15.1991C20.6766 14.6788 20.8945 14.0413 20.8945 13.378C20.8898 13.0827 20.8477 12.7897 20.7633 12.5085ZM2.625 12.3749V20.9061C2.625 21.321 2.96016 21.6561 3.375 21.6561H4.89844V11.6249H3.375C2.96016 11.6249 2.625 11.9601 2.625 12.3749Z" fill="#E57715"/>
                </svg>
                <p class="pl-4">Free cancellations up to start date</p>
            </li>
        </ul>`)

        document.querySelector('#google-map-parking-at').addEventListener('click', () => {
            action = 'Click on map';
            pushDataLayer(action)
        })
    }
});

mut.observe(document, optionMut);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: PDP add location',
    'eventAction': 'loaded'
});

let isClarity = setTimeout(function(){
    if(typeof clarity === 'function'){
        clearInterval(isClarity)
        clarity("set", "pdp_add_location", "variant_1");
    }
}, 100)
