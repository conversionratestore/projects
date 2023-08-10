
// $0.99 : 1_1_week_2099_099  /  payment $1.99 : Discount 75%   / planCode 1_1_week_2099_199
// $1.99 : 1_1_week_2099_199  /  payment $5 : Discount 75%      / planCode 1_1_week_2099_500
// $4.99 : 1_1_week_2099_499  /  payment $9 : Discount 75%      / planCode 1_1_week_2099_900
// $6.81 : 1_1_week_2099_681  /  payment $13.21 : Discount 49%  / planCode 1_1_week_2099_1321

const planCode = window.location.href.split('planCode=')[1].split('&')[0];

let popup = `
<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 99;
    background-color: #EFF2FD;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    opacity: 0;
    pointer-events: none;
}
.popup.active {
    opacity: 1;
    pointer-events: auto;
}
.popup_close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    padding: 0;
    border: none;
}
.popup_img {
    padding: 16px 0 8px;
    margin: auto 0;
}
.popup img {
    width: 100%;
    object-fit: contain;
}
.popup_content {
    padding: 20px;
    background-color: #fff;
    margin-top: auto;
}
.popup h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    color: #121620;
}
.popup p {
    font-size: 14px;
    font-style: normal;
    color: #4A567A;
    line-height: 18px; 
    font-weight: 400;
}
.popup p.span {
    font-weight: 500;
    letter-spacing: 0.011px;
}
.popup b {
    font-weight: 600;
}
.popup ul {
    padding-top: 4px;
}
.popup_content svg {
    flex-shrink: 0;
    margin-right: 8px;
    margin-bottom: -3px;
}
.popup ul li {
    margin-top: 12px;
}
.btn-get-trial {
    border-radius: 8px;
    background: #066FDE;
    padding: 18px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    margin-top: 16px;
    width: 100%;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-get-trial svg {
    margin-left: 12px;
}

/* discount */
.discount_applied {
    color: #066FDE;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    width: 100%;
    border-top: 1px solid #DEE5F9;
    padding: 8px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center
}
.discount_applied+.styles_todayCount__P6R9F {
    border-top: none;
    align-items: flex-start;
    padding-top: 8px;
}
.discount_applied > p:last-child {
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
}
.discount_applied > p:last-child span {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01px;
    text-decoration: line-through;
    margin-right: 4px;
}
.styles_todayCount__P6R9F span+span {
    text-align: right;
}
/* saved */
.saved_block {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.011px;
    color: #FF5C5D;
    text-align: right;
    margin-top: 8px;
}

/* flex */
.flex {
    display: flex;
}
</style>
<div class="popup">
    <button type="button" class="popup_close">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="32" y="32" width="32" height="32" rx="16" transform="rotate(-180 32 32)" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929L20.2929 10.2929C20.6834 9.90237 21.3166 9.90237 21.7071 10.2929C22.0976 10.6834 22.0976 11.3166 21.7071 11.7071L17.4142 16L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071Z" fill="#858DA5" stroke="#858DA5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 21.7071C10.6834 22.0976 11.3166 22.0976 11.7071 21.7071L16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L11.7071 10.2929C11.3166 9.90237 10.6834 9.90237 10.2929 10.2929C9.90237 10.6834 9.90237 11.3166 10.2929 11.7071L14.5858 16L10.2929 20.2929C9.90237 20.6834 9.90237 21.3166 10.2929 21.7071Z" fill="#858DA5" stroke="#858DA5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <div class="popup_img">
        <img src="https://conversionratestore.github.io/projects/hint/img/${planCode == '1_1_week_2099_1321' ? 'gift-image-2':'gift-image'}.svg" alt="gift">
    </div>
    <div class="popup_content">
        <h2>Get 7-day Trial</h2>
        <p class="span">You’ll get:</p>
        <ul>
            <li class="flex">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="40" height="40" rx="20" fill="#EFF2FD"/>
                    <path d="M29.2083 12.6771C29.2083 11.4745 28.2338 10.5 27.0312 10.5H17.9271C16.7245 10.5 15.75 11.4745 15.75 12.6771V23.3646C15.75 24.5671 16.7245 25.5417 17.9271 25.5417H27.0312C28.2338 25.5417 29.2083 24.5671 29.2083 23.3646V12.6771ZM25.4479 21.9792H19.5104C19.1827 21.9792 18.9167 21.7132 18.9167 21.3854C18.9167 21.0577 19.1827 20.7917 19.5104 20.7917H25.4479C25.7757 20.7917 26.0417 21.0577 26.0417 21.3854C26.0417 21.7132 25.7757 21.9792 25.4479 21.9792ZM25.4479 19.6042H19.5104C19.1827 19.6042 18.9167 19.3382 18.9167 19.0104C18.9167 18.6827 19.1827 18.4167 19.5104 18.4167H25.4479C25.7757 18.4167 26.0417 18.6827 26.0417 19.0104C26.0417 19.3382 25.7757 19.6042 25.4479 19.6042ZM25.4479 17.2292H19.5104C19.1827 17.2292 18.9167 16.9632 18.9167 16.6354C18.9167 16.3077 19.1827 16.0417 19.5104 16.0417H25.4479C25.7757 16.0417 26.0417 16.3077 26.0417 16.6354C26.0417 16.9632 25.7757 17.2292 25.4479 17.2292Z" fill="#005BBB"/>
                    <path d="M17.9264 26.729C16.0708 26.729 14.5618 25.2193 14.5618 23.3644V12.6769C14.5618 12.6088 14.5777 12.5455 14.5816 12.479H13.9681C12.7671 12.479 11.791 13.4551 11.791 14.6561V27.3228C11.791 28.5237 12.7671 29.4998 13.9681 29.4998H23.4681C24.6691 29.4998 25.6452 28.5237 25.6452 27.3228V26.729H17.9264Z" fill="#005BBB"/>
                </svg>
                <p>A copy of your <b>hyper-personalized compatibility report</b> that is based on synastry charts.</p>
            </li>
            <li class="flex">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="40" height="40" rx="20" fill="#EFF2FD"/>
                    <g clip-path="url(#clip0_2609_288)">
                    <path d="M19.4252 24.1743C19.5294 24.1743 19.6336 24.1485 19.7277 24.096L23.4169 22.0568L27.1061 24.096C27.3161 24.2127 27.5727 24.1985 27.7686 24.0602C27.9636 23.9218 28.0636 23.6843 28.0252 23.4485L27.3136 19.0868L30.3219 16.0027C30.4861 15.8352 30.5419 15.5893 30.4677 15.3677C30.3936 15.1452 30.2011 14.9843 29.9694 14.9485L25.8369 14.3168L23.9827 10.3668C23.7769 9.9285 23.0577 9.9285 22.8519 10.3668L20.9977 14.3168L16.8652 14.9485C16.6336 14.9835 16.4411 15.1452 16.3669 15.3677C16.2927 15.5902 16.3494 15.8352 16.5127 16.0027L19.5211 19.0868L18.8094 23.4485C18.7711 23.6843 18.8711 23.9218 19.0661 24.0602C19.1736 24.136 19.2994 24.1743 19.4252 24.1743Z" fill="#005BBB"/>
                    <path d="M11.3334 28.4125C11.6484 28.4125 11.9492 28.2334 12.09 27.9284C13.8909 24.0309 17.6559 23.0367 17.6934 23.0267C18.14 22.9134 18.4092 22.46 18.2967 22.0142C18.1834 21.5675 17.7309 21.2967 17.2842 21.4109C17.0984 21.4584 12.7075 22.6175 10.5775 27.2284C10.3842 27.6459 10.5667 28.1417 10.9842 28.3342C11.0967 28.3884 11.2159 28.4125 11.3334 28.4125Z" fill="#005BBB"/>
                    <path d="M11.3322 22.8453C11.6381 22.8453 11.9322 22.6761 12.0789 22.3845C13.0564 20.4286 16.0114 19.8645 16.0406 19.8595C16.4939 19.7803 16.7981 19.3486 16.7189 18.8953C16.6397 18.442 16.2039 18.1403 15.7547 18.217C15.5997 18.2445 11.9531 18.9078 10.5881 21.6386C10.3822 22.0503 10.5497 22.5511 10.9606 22.757C11.0797 22.817 11.2072 22.8453 11.3322 22.8453Z" fill="#005BBB"/>
                    <path d="M14.5139 30.004C14.7914 30.004 15.0631 29.8648 15.2214 29.6123C16.9272 26.8832 19.7956 27.0282 19.8231 27.029C20.2806 27.0615 20.6781 26.7082 20.7064 26.2482C20.7347 25.789 20.3856 25.394 19.9256 25.3648C19.7706 25.3515 16.0347 25.1665 13.8081 28.7282C13.5647 29.1182 13.6831 29.6323 14.0731 29.8765C14.2106 29.964 14.3631 30.004 14.5139 30.004Z" fill="#005BBB"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2609_288">
                    <rect width="20" height="20" fill="white" transform="translate(10.5 10)"/>
                    </clipPath>
                    </defs>
                </svg>
                <p>Discover hidden <b>insights</b> and receive <b>personalized advice</b> tailored to your unique relationship dynamics.</p>
            </li>
            <li class="flex">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="40" height="40" rx="20" fill="#EFF2FD"/>
                    <g clip-path="url(#clip0_2609_297)">
                    <path d="M18.4717 25.6919L17.5181 25.374C17.3847 25.4953 17.2413 25.6052 17.0895 25.7026C16.4682 26.1022 15.7328 26.2865 14.9964 26.2272C14.2601 26.1678 13.5637 25.868 13.0144 25.374L12.0643 25.6919C11.6087 25.8427 11.2122 26.1334 10.9313 26.5227C10.6504 26.9119 10.4995 27.3798 10.5 27.8598V28.8563C10.4996 29.0973 10.5949 29.3287 10.765 29.4995C10.9352 29.6703 11.1661 29.7665 11.4072 29.767H19.1253C19.3664 29.7665 19.5973 29.6703 19.7675 29.4995C19.9376 29.3287 20.0329 29.0973 20.0325 28.8563V27.8598C20.033 27.3803 19.8825 26.9128 19.6024 26.5237C19.3222 26.1346 18.9266 25.8435 18.4717 25.6919Z" fill="#005BBB"/>
                    <path d="M13.832 25.1027C15.4973 26.2513 17.9744 24.9381 17.9215 22.8741C17.9205 22.1706 17.6406 21.4963 17.1431 20.9988C16.6457 20.5014 15.9713 20.2215 15.2679 20.2205C12.6288 20.2166 11.6353 23.7101 13.832 25.1027Z" fill="#005BBB"/>
                    <path d="M24.292 25.1236C25.9539 26.2776 28.44 24.962 28.385 22.8985C28.3846 22.1949 28.1049 21.5202 27.6074 21.0226C27.1098 20.525 26.4351 20.2453 25.7314 20.2449C23.0974 20.2424 22.0984 23.7264 24.292 25.1236Z" fill="#005BBB"/>
                    <path d="M28.9359 25.7131L27.9859 25.3953C27.8533 25.5176 27.7099 25.6276 27.5573 25.7238C26.936 26.1253 26.1996 26.3107 25.4622 26.2513C24.7248 26.1919 24.0276 25.891 23.4786 25.3953L22.5285 25.7131C22.0737 25.866 21.6784 26.1578 21.3983 26.5474C21.1183 26.9371 20.9677 27.4048 20.9678 27.8846V28.8811C20.9681 29.1216 21.0638 29.3521 21.2339 29.5222C21.4039 29.6922 21.6345 29.7879 21.8749 29.7883H29.5931C29.8336 29.7879 30.0641 29.6922 30.2342 29.5222C30.4043 29.3521 30.4999 29.1216 30.5003 28.8811V27.8846C30.5003 27.4043 30.3493 26.9361 30.0685 26.5464C29.7878 26.1567 29.3915 25.8652 28.9359 25.7131Z" fill="#005BBB"/>
                    <path d="M24.74 18.9632C24.7988 19.037 24.8844 19.0846 24.9782 19.0953C25.072 19.106 25.1662 19.079 25.2401 19.0203C25.3139 18.9616 25.3615 18.8759 25.3722 18.7821C25.3829 18.6884 25.3559 18.5942 25.2972 18.5203L23.4864 16.2381C24.3793 15.2523 25.1436 14.0987 25.1436 13.0309C25.1852 10.6484 22.3012 9.38148 20.4863 10.8344C18.7407 9.35913 15.8261 10.6778 15.8576 12.9808C15.8391 14.0787 16.6082 15.2336 17.5148 16.2381L15.704 18.5203C15.6474 18.5944 15.6221 18.6877 15.6336 18.7802C15.645 18.8727 15.6923 18.957 15.7653 19.0151C15.8383 19.0731 15.9311 19.1001 16.0238 19.0904C16.1165 19.0807 16.2018 19.035 16.2611 18.9632L18.0112 16.7595C18.722 17.4585 19.4862 18.101 20.297 18.681C20.3567 18.7228 20.4277 18.7453 20.5006 18.7453C20.5734 18.7453 20.6445 18.7228 20.7042 18.681C21.515 18.101 22.2792 17.4585 22.99 16.7595L24.74 18.9632Z" fill="#005BBB"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2609_297">
                    <rect width="20" height="20" fill="white" transform="translate(10.5 10)"/>
                    </clipPath>
                    </defs>
                </svg>
                <p>Gain <b>clarity</b>, improve <b>communication</b>, and foster <b>deeper connections</b> with your partner.</p>
                    
            </li>
        </ul>
        <button type="button" class="btn-get-trial">
            <span>Save ${planCode == '1_1_week_2099_1321' ? '50' : '75'}% today</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.93974 0.950928L9.01888 7.99988L1.93974 15.0488L0.582031 13.6969L6.30347 7.99988L0.582031 2.30284L1.93974 0.950928ZM8.34003 0.950928L15.4192 7.99988L8.34003 15.0488L6.98232 13.6969L12.7037 7.99988L6.98232 2.30284L8.34003 0.950928Z" fill="white"/>
            </svg>
        </button>
    </div>
</div>`;

const planObj = {
    '1_1_week_2099_199': false,
    '1_1_week_2099_099': true,
    '1_1_week_2099_500': false,
    '1_1_week_2099_199': true,
    '1_1_week_2099_900': false,
    '1_1_week_2099_499': true,
    '1_1_week_2099_1321': false,
    '1_1_week_2099_681': true
}

const planChoice = {
    '1_1_week_2099_199': '1_1_week_2099_099',
    '1_1_week_2099_500': '1_1_week_2099_199',
    '1_1_week_2099_900': '1_1_week_2099_499',
    '1_1_week_2099_1321': '1_1_week_2099_681'
}

console.log(planCode)

let clickClose = false;

let init = setInterval(() => {
    if (document.body) {
        clearInterval(init)

        document.body.insertAdjacentHTML('beforeend', popup)
        //click close button
        document.querySelector('.popup_close').addEventListener('click', () => {
            document.querySelector('.popup').classList.remove('active');
            clickClose = false;
        })

        //click on start trial button
        document.querySelector('.btn-get-trial').addEventListener('click', () => {
            document.querySelector('.popup').classList.remove('active');
            window.location.href = window.location.href.replace(planCode, planChoice[planCode])
        })
    }
})

let findClose = setInterval(() => {
    if (document.querySelector('.styles_buttonClose__ZGUNz') && 
        document.querySelector('.popup')
    ) {
        
        document.querySelector('.styles_buttonClose__ZGUNz').addEventListener('click', (e) => {
            if (clickClose == false && planObj[planCode] == false) {
                clickClose = true;
                document.querySelector('.popup').classList.add('active')
            }
        })
    }
});

let checkPlan = setInterval(() => {
    if (planObj[planCode] == true && document.querySelector('.styles_todayCount__P6R9F span+span')) {
        clearInterval(checkPlan);

        let price = window.location.href.split('price=')[1].split('&')[0]
        let discount = price == '1321' ? '-50%' : '<span>-50% </span> -75%';

        document.querySelector('.styles_todayCount__P6R9F').insertAdjacentHTML('beforebegin',`
        <div class="discount_applied">
            <p>Additional discount applied</p>
            <p>${discount}</p>
        </div>`)

        let saved = discount == '-50%' ? '50%' : '75%';
        document.querySelector('.styles_todayCount__P6R9F span+span').insertAdjacentHTML('beforeend', `<div class="saved_block">You just saved ${saved}</div>`);
    }
});

const errosForModal = [
    'GooglePay modal closed. Reason: cancel.',
    'ApplePay modal closed. Reason: cancel.',
  ];

function checkErrors(val) {
    for (let item of errosForModal) {
        if (val.includes(item) && 
            !document.querySelector('.popup.active') && 
            document.querySelector('.popup') && 
            planObj[planCode] == false
        ) {
            document.querySelector('.popup').classList.add('active')
        }
    }
}

console.defaultLog = console.log.bind(console);
console.defaultError = console.log.bind(console);

console.log = function () {
  console.defaultLog.apply(console, arguments);

  try {
    checkErrors(JSON.stringify(arguments));
  } catch (e) {}
};

console.error = function () {
  console.defaultError.apply(console, arguments);

  try {
    checkErrors(JSON.stringify(arguments));
  } catch (e) {}
};
