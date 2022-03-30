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
            padding: 0!important;
            margin: 25px 0 14px!important;
        }
        .flex.flex-col.items-center img {
            width: 23px;
            height: 21px;
            margin-bottom: 6px;
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
        }
    </style>`)

    document.querySelector('.grid.grid-cols-1.gap-8.justify-center.items-start.my-12.px-4').after(document.querySelector('#google-map-parking-at'))
    document.querySelector('#google-map-parking-at').insertAdjacentHTML('afterend',`<ul class="list">
        <li></li>
    </ul>`)
}
