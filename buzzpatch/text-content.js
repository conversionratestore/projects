let textArr = [`My child <b>often wakes up</b> during the night`, `My child <b>cannot rest</b> due to a high level of anxiety`,`My child is going through <b>bedtime regression</b>, and I need a solution`,`My child <b>suffers from nightmares</b> and cannot rest well at night`,`My child has <b>health disabilities</b>, and I need a non-harmful solution that helps them doze off`,`I want to avoid <b>bedtime issues while travelling</b>`,`My child <b>sleepwalks</b> at bedtime`]

let init = setInterval(() => {
    if (document.querySelectorAll('.card-SP-header button').length >= textArr.length && document.querySelector('#comparisonMob > div > div.js-mobile.bp-mob-table-container > div:nth-child(22) > div:nth-child(4) > span') != null) {
        clearInterval(init)
        for (let i = 0; i < textArr.length; i++) {
           document.querySelectorAll('.card-SP-header button')[i].innerHTML = `
           <span class="arrow down"></span> 
           ${textArr[i]} 
           <span class="arrow-down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1545_2995)">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#F1F5FF"></path>
                    <path d="M15.825 14.1748L12 10.3581L8.175 14.1748L7 12.9998L12 7.9998L17 12.9998L15.825 14.1748Z" fill="#2B489B"></path>
                </g>
                <defs>
                    <clipPath id="clip0_1545_2995">
                        <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>
           </span>`
            
        }

        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            @media (max-width: 374px) {
                .letter-wrap {
                    line-break: anywhere;
                }
            }
        </style>`)
        
        document.querySelector('#comparisonMob > div > div.js-mobile.bp-mob-table-container > div:nth-child(22) > div:nth-child(4) > span').innerHTML = 'Synthetic<br> <span class="letter-wrap">benzodiazepines</span> and <br>other chemical additives'
   
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: Text content',
            'eventAction': 'loaded'
        });
    }
});

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "new_text_content", "variant_1");
    }
}, 100)