if (window.location.href.includes('/reservation/search')) {
    document.body.insertAdjacentHTML('afterbegin',`
        h2.text-xl.text-left.w-full.px-8.pt-4.truncate {
            font-size: 18px;
            line-height: 24px;
        }
        .flex.flex-col.w-full.col-span-2 p span.font-semibold {
            display: flex;
            alin-items: center;
        }
        .flex.flex-col.w-full.col-span-2 p img {
            object-fit: contain;
            width: 18px;
            height: 18px;
            slex-shrink: 0;
            mergin-right: 12px;
        }
        h3.text-4xl.font-medium.text-right {
            font-size: 22px;
            line-height: 24px;
        }
        small.uppercase.text-right.text-sm.block {
            text-alight: left!important;
            font-size: 16px;
            line-height: 24px;
        }
  
    `)
    if (document.querySelector('.grid.grid-cols-1.divide-y.divide-gray-500.container.mx-auto.px-2') != null) {
        document.querySelector('.grid.grid-cols-1.divide-y.divide-gray-500.container.mx-auto.px-2').classList.remove('px-2')
    }
    document.querySelector('h2.text-xl.text-left.w-full.px-8.pt-4.truncate').setAttribute('class', 'text-xl text-left w-full px-4 pt-4 truncate')
    document.querySelector('.flex.flex-col.w-full.col-span-2.pb-5.pl-8.pr-0.self-center.mx-auto').setAttribute('class', 'flex flex-col w-full col-span-2 pb-5 pl-4 pr-0 self-center mx-auto')

    let iconsArr = ['cil_bus-alt.svg','bytesize_clock.svg','mdi_map-marker-distance.svg','ant-design_like-outlined.svg'];

    for (let i = 0; i < iconsArr.length; i++) {
        let element = document.querySelectorAll('.flex.flex-col.w-full.col-span-2.pb-5.pl-4.pr-0.self-center.mx-auto p span')[i];
        element.insertAdjacentHTML('afterbegin',`<img src="https://conversionratestore.github.io/projects/onairparking/img/${iconsArr}" alt="icon">`)
        element.parentElement.setAttribute('class','mt-4');
    }
    document.querySelector('.flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full').classList.remove('items-center')

}
