let style = `
    <style class="js-style">
       .bg-white.rounded-md.relative.w-full.py-2.pl-4.pr-6.mb-3.text-gray-700.leading-tight.h-10.flex.flex-row.items-center.justify-center {
           display: none!important
       }
       h2.mb-2.text-2xl.px-5.uppercase.flex.flex-row.items-center.w-full {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            line-height: 30px;
            text-align: center;
            color: #FFFFFF;
            display: block;
       }
       h2.mb-2.text-2xl.px-5.uppercase.flex.flex-row.items-center.w-full span {
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            margin-top: 20px;
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
       }
       .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 > label {
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            color: #7B7B7B;
            
       }
       .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 > input[type=date] {
            min-height: auto;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            text-transform: uppercase;
            color: #515356;
       }
       .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 > input[type="date"]::-webkit-calendar-picker-indicator {
            color: transparent;
            background: none;
            z-index: 1;
        }
        .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 > input[type="date"]:before {
            content: '';
            width: 24px;
            height: 24px;
            background: url('https://conversionratestore.github.io/projects/onairparking/img/calendar.svg') no-repeat center / contain;
            position: absolute;
            top: 50%;
            right: 13px;
            transform: translateY(-50%);
        }
    </style>
`


let loadedContent = false;

let start = setInterval(() => {
    window.location.pathname == '/reservation/search' ?  loadedContent = true : loadedContent = false;

    if (document.querySelector('button.btn-orange span').outerHTML == '<span>Hide Search</span>' && loadedContent == true && document.querySelector('.js-style') == null) {
        document.body.insertAdjacentHTML('afterbegin', style) // add style

        //bg gradient
        document.querySelector('img.z-0.w-full.object-cover.min-h-64.h-full.absolute.object-bottom').src = `https://conversionratestore.github.io/projects/onairparking/img/map-gradient.png`
        document.querySelector('h2.mb-2.text-2xl.px-5.uppercase.flex.flex-row.items-center.w-full').innerHTML = `Denver <br> Airport Parking <span>From <br> $3.75 / day</span>`
    }
}, 100)
