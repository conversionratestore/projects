     let style = `
     <style class="js-style">
          .bg-white.rounded-md.relative.w-full.py-2.pl-4.pr-6.mb-3.text-gray-700.leading-tight.h-10.flex.flex-row.items-center.justify-center, .ribbon, .flex.flex-row.justify-start.items-start > span, .-ml-4.-mr-4.-mt-8.px-6.py-4.bg-gray-100.mb-4.block.bg-orange-50, .grid.grid-cols-1.divide-y.divide-gray-500.container.mx-auto.px-2 {
               display: none!important
          }
          h2.mb-2.text-2xl.px-5.uppercase.flex.flex-row.items-center.w-full {
               font-family: 'Roboto', sans-serif;
               font-style: normal;
               font-weight: 800;
               font-size: 30px;
               line-height: 30px;
               text-align: center;
               color: #FFFFFF;
               display: block;
               text-transform: initial;
          }
          h2.mb-2.text-2xl.px-5.uppercase.flex.flex-row.items-center.w-full span {
               font-weight: 400;
               font-size: 14px;
               line-height: 16px;
               margin-top: 20px;
               padding: 0;
               display: block;
          }
          .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start {
               padding: 0;
               flex-direction: row;
               background: none;
               justify-content: space-between;
          }
          .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 {
               width: 48%;
               background: #FFF9ED;
               border-radius: 10px;
               position: relative;
               height: auto;
          }
          .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14:before {
               content: '';
               width: 24px;
               height: 24px;
               background: url('https://conversionratestore.github.io/projects/onairparking/img/calendar.svg') no-repeat center / contain;
               position: absolute;
               top: 50%;
               right: 13px;
               transform: translateY(-50%);
               pointer-events: none;
          }
          .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 > label {
               font-weight: 400;
               font-size: 10px;
               line-height: 12px;
               color: #7B7B7B;
               padding: 0 10px;
               position: absolute;
               left: 0;
               top: 8px;
               z-index: 3;
          }
          .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 input[type=date] {
               min-height: auto;
               font-weight: 700;
               font-size: 16px;
               line-height: 19px;
               padding: 22px 6px 6px;
          }
          .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 input[type="date"]::-webkit-calendar-picker-indicator {
               color: transparent;
               background: none;
               z-index: 1;
               position: absolute;
               top: 50%;
               right: 10px;
               transform: translateY(-50%);
               width: 24px;
               height: 24px;
          }
          .cursor-pointer.max-w-4xl.relative.mx-auto.shadow-md.border.rounded-md.overflow-hidden.mb-8.grid.grid-cols-1.gap-0.place-items-start {
               display: flex;
               background: #FFFFFF;
               border-radius: 10px;
               border: none;
               margin-bottom: 16px;
          }
          .relative.bg-gray-100.col.h-40.w-full {
               width: 102px;
               height: 219px;
               flex-shrink: 0;
          }
          h2.text-xl.text-left.w-full.px-8.pt-4.truncate{
               padding: 15px 15px 0;
               font-weight: 800;
               font-size: 16px;
               line-height: 19px;
               color: #515356;
          }
          .cursor-pointer.max-w-4xl.relative.mx-auto.shadow-md.border.rounded-md.overflow-hidden.mb-8.grid.grid-cols-1.gap-0.place-items-start .flex.flex-col.w-full.col-span-2.pb-5.pl-8.pr-0.self-center.mx-auto {
               padding: 0 15px;
          }
          h2.mb-2.text-2xl.px-5.uppercase.flex.flex-row.items-center.w-full span:not(.from-title) {
               display: none!important;
          }
          .grid.grid-cols-3.w-full {
               display: block!important;
          }
          .anticon svg {
               width: 15px;
               height: 15px;
          }
          .ant-rate-star:not(:last-child) {
               margin-right: 2px;
          }
          
          .flex.flex-row.justify-start.items-start, .flex.flex-row.justify-start.items-start .text-xs, .grid.grid-cols-1.gap-1.self-center.items-start {
               display: inline!important;
          }
          .flex.flex-row.justify-start.items-start .text-xs { 
               margin-left: 0;
               font-size: 12px;
               line-height: 14px;
               color: #4A4A4A;
          }
          .flex.flex-row.justify-start.items-start .text-xs .font-bold { 
               font-weight: 400;

          }
          .my-4 .flex.flex-row.justify-start.items-start:nth-child(3) .text-xs .font-bold {
               display: none;
          }
          .flex.flex-row.justify-start.items-start .text-xs span:not(.font-bold) {
               font-weight: 700;
               padding: 0 2.5px;
          }
          .cursor-pointer.max-w-4xl.relative.mx-auto.shadow-md.border.rounded-md.overflow-hidden.mb-8.grid.grid-cols-1.gap-0.place-items-start > .col-span-2 {
               width: calc(100% - 102px);
          }
          .flex.flex-col.w-full.col-span-2.pb-5.pl-8.pr-0.self-center.mx-auto > .flex.flex-row.justify-start.items-start .text-xs span {
               font-weight: 700;
               font-size: 12px;
               line-height: 14px;
               color: #069B27;
          }
          .input-ext {
               position: absolute;
               left: 0;
               top: 0;
               pointer-events: none;
               background: #FFF9ED;
               z-index: 2;
               width: calc(100% - 40px);
               padding: 22px calc(6px + 0.25rem) 6px;
               border-radius: 10px;
               font-weight: 700;
               color: #515356;
               font-size: 16px;
               line-height: 19px;
               text-transform: uppercase;
          }
          .container.mx-auto.px-4.py-8 {
               padding: 16px;
          }
          .row-price {
               padding-top: 20px;
          }
          .row-price .rounded-full {
               background: #069B27;
               border-radius: 3px;
               margin: 0 13px 0 0;
               padding: 4px 6px;
               font-weight: 500;
               font-size: 10px;
               line-height: 12px;
               color: #FFFFFF;
               text-transform: initial;
          }
          .row-price .flex.flex-col.px-4.pb-4.col-span-3 {
               padding: 0 15px;
          }
          .row-price .flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full {
               flex-direction: row;
               background: #DADADA;
               border-radius: 3px;
               padding: 3px 6px;
               line-height: 14px;
               color: #515356;
               width: fit-content;
          }
          .row-price .flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full h3 {
               font-weight: 800;
               font-size: 12px;
               line-height: 14px;
          }
          .row-price .flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full small {
               text-transform: initial;
               line-height: 14px;
               font-size: 10px;
               padding-left: 5px;
          }
     </style>
     `

     let loadedContent = false;
     let formatDate = {
          '01':'Jan',
          '02':'Feb',
          '03':'Mar',
          '04':'Apr',
          '05':'May',
          '06':'Jun',
          '07':'Jul',
          '08':'Aug',
          '09':'Sep',
          '10':'Oct',
          '11':'Nov',
          '12':'Dec'
     }

     let start = setInterval(() => {
          window.location.pathname == '/reservation/search' ?  loadedContent = true : loadedContent = false;

          if (document.querySelector('button.btn-orange span') != null && document.querySelector('button.btn-orange span').outerHTML == '<span>Hide Search</span>' && loadedContent == true && document.querySelector('.js-style') == null) {
               document.body.insertAdjacentHTML('afterbegin', style) // add style

               //bg gradient
               document.querySelector('img.z-0.w-full.object-cover.min-h-64.h-full.absolute.object-bottom').src = `https://conversionratestore.github.io/projects/onairparking/img/map-gradient.png`
               //title
               document.querySelector('h2.mb-2.text-2xl.px-5.uppercase.flex.flex-row.items-center.w-full').innerHTML = `${document.querySelector('.ant-select-single .ant-select-selector .ant-select-selection-search-input').value.split('- ')[1]} <span class="from-title">From <br> $3.75 / day</span>`;
          
               //set format date
               function setFormat(date) {
                    let itemDate = date,
                         mouth = itemDate.value.split('-');

                    for (const key in formatDate) {
                         if (mouth[1] == key) {
                              itemDate.parentElement.querySelector('.input-ext').value = mouth[2] + " " + formatDate[key];
                         }
                    } 
               }
               document.querySelectorAll('.bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 input').forEach(input => {
                    input.insertAdjacentHTML('afterend',`<input type="text" class="input-ext">`);
                    setFormat(input)
                    input.addEventListener('change', (e) => setFormat(input))
               })

               document.querySelectorAll('.cursor-pointer.max-w-4xl.relative.mx-auto.shadow-md.border.rounded-md.overflow-hidden.mb-8.grid.grid-cols-1.gap-0.place-items-start').forEach(item => {
                    item.querySelector('.flex.flex-row.justify-start.items-start:nth-child(1)').before(item.querySelector('.flex.flex-row.justify-start.items-start:nth-child(3)')); //move Distance element in card
                    item.querySelector('.my-4').after(item.querySelector('.flex.flex-row.justify-start.items-start:last-child')); //move Free Cancellation element in card
                    item.querySelector('.flex.flex-col.w-full.col-span-2.pb-5.pl-8.pr-0.self-center.mx-auto > .flex.flex-row.justify-start.items-start .text-xs span:not(.font-bold)').innerHTML = `until ${document.querySelector('.input-ext').value[0] != '0' ? document.querySelector('.input-ext').value : document.querySelector('.input-ext').value.replace(document.querySelector('.input-ext').value[0],'')}` ; //set date for Free Cancellation in card
                    item.querySelector('.grid.grid-cols-3.w-full').insertAdjacentHTML('beforeend',`<div class="flex items-center row-price"><div></div></div>`);
                    item.querySelector('.row-price > div').after(item.querySelector('.flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full'));
                    item.querySelector('.row-price > div').after(item.querySelector('.self-end.flex.flex-col.px-4.pb-4.col-span-3'));
                    item.querySelector('.row-price .flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full small').innerHTML = ` / day`; //change 'Daily rate' element 
                    item.querySelector('.row-price .rounded-full').innerHTML = `Online-only price`;
               })
          
     
          }
     }, 100)
