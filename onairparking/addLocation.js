let style = `

  
`

if (window.location.href.includes('/reservation/search')) {
    document.body.insertAdjacentHTML('afterbegin',`
    <style>
        h2.text-xl.text-left.w-full.px-4.pt-4.truncate {
            font-size: 18px;
            line-height: 24px;
        }
        .flex.flex-col.w-full.col-span-2 p {
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

    let arr = [
        {
            'name': 'Free Shuttle',
            'nameOld': 'Open',
            'icon': 'cil_bus-alt.svg'
        },
        {
            'name': 'Shuttle Frequency',
            'nameOld': 'AVG travel time',
            'icon': 'bytesize_clock.svg'
        },
        {
            'name': 'Distance',
            'nameOld': 'Distance from terminal',
            'icon': 'mdi_map-marker-distance.svg'
        },
        {
            'name': 'Free Cancellations',
            'nameOld': 'Free',
            'icon': 'ant-design_like-outlined.svg'
        }

    ]

  
    let element = document.querySelectorAll('.flex.flex-col.w-full.col-span-2.pb-5.pl-4.pr-0.self-center.mx-auto p');

    for (let i = 0; i < element.length; i++) {
        let supText = element[i].innerText.split(':')[0],
            subText = element[i].innerText.split(':')[1];


        for (let key in arr) {
            console.log(arr[key])
            if (arr[key].nameOld == supText) {
                element[i].innerHTML = `
                    <span class="font-semibold">
                        <img src="https://conversionratestore.github.io/projects/onairparking/img/${arr[key].icon}" alt="icon">
                        ${arr[key].name}:
                    </span>
                    <span style="padding-left:30px">${subText}</span>
                `
            }
        }

        document.querySelector('.info-item').after(element[i])
        
        element[i].setAttribute('class','mt-4');
    }
    document.querySelector('.flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full').classList.remove('items-center')

    let btnLocation = `<a href="${document.querySelector('a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2').href}" class="btn-location">CHECK LOCATION <img src="https://conversionratestore.github.io/projects/onairparking/img/logos_google-maps.svg" alt="icon"></a>`
    document.querySelector('.self-end.flex.flex-col.px-4.pb-4.col-span-3.disabled a.rounded-full.uppercase.mt-4.bg-primary.text-white.text-center.mt-4.px-4.text-xs.font-bold.py-2').insertAdjacentHTML('beforebegin', btnLocation)
}

if (window.location.href.includes('/parkingat')) {
    document.body.insertAdjacentHTML('afterbegin',`
    <style>
        .relative.bg-gray-100.overflow-hidden.col-span-2.h-40.w-full {
            display: none!important;
        }
        #google-map-parking-at {
            height: 200px;
            width: 100%;
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

    </style>`)
    

    let linkCustom = document.createElement('link');
    linkCustom.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
    linkCustom.rel = 'stylesheet';
    document.head.appendChild(linkCustom);

    document.querySelectorAll('.flex.flex-col.items-center').forEach((item,index) => {
        if (index == 0) {
            item.querySelector('svg').remove();
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
    <ul class="list">
        <li></li>
        <li></li>
        <li></li>
    </ul>`)
}
