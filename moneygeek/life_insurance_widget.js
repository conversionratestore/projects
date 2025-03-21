let dir = `https://conversionratestore.github.io/projects/moneygeek/img/`;

let media = window.matchMedia("(min-width: 768px)").matches;

let style = `
<style class="exp-style">
    .exp-input {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: #fff;
        font: normal normal normal 14px/34px PT Sans;
        outline: none;
        color: #333333;
        border: none;
        padding: 0 25px;
        pointer-events: none;
        text-align: left;
    }
    .exp-input.is-hide {
        display: none!important;
    }
    .banner-container {
        display: none;
    }
    .css-1uxi4iy {
        font-weight: 600!important;
    }
    .css-1uxi4iy, .css-11keg2m , .css-mypapy, .css-1h13y3f, .css-j8or2w {
        grid-area: auto!important;
        color: #292929;
    }
    .css-195f0y4, .css-1t0181o, .css-yaw6qn {
        color: #292929;
        display: flex;
        align-items: center;
        grid-gap: 0;
    }
    .css-1uxi4iy, .css-mjd3l4 {
        order: 2;
    }
    .css-11keg2m {
        order: 3;
    }
    .css-mypapy, .css-j8or2w, .css-1h13y3f {
        order: 4;
    }
    .compare_quotes_form {
        border-radius: 6px;
        box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.16);
    }
    .compare_quotes > p {
        color: #292929;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px;
        margin-bottom: 8px;
    }
    .relative {
        position: relative;
    }
    .compare_quotes label {
        color: #555;
        margin: 8px 0 2px;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        font-family: 'Brandon Grotesque', sans-serif;
        line-height: 24px; 
    }
    .compare_quotes input {
        border-radius: 6px 6px 0 0;
        border-top: 1px solid #D3D4D6;
        border-left: 1px solid #D3D4D6;
        background: #FFF;
        padding: 15.5px 12px 15.5px 57px;
        width: 100%;
        margin: 0;
        color: #292929;
    }
    .compare_quotes svg {
        left: 12px;
        border-right: 1px solid #D3D4D6;
        padding-right: 12px;
        pointer-events: none;
    } 
    .compare_quotes .address, .compare_quotes svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }  
    .compare_quotes .address {
        right: 12px;
        color: #555;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px;
        font-family: 'Brandon Grotesque', sans-serif;
        margin: 0;
    }
    .compare_quotes button {
        font-family: 'Brandon Grotesque', sans-serif;
        color: #292929;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        text-transform: uppercase;
        border-radius: 0 0 6px 6px;
        background: #FFC659;
        padding: 14px;
        width: 100%;
   }
    .info_block {
        display: flex;
        align-items: center;
        padding: 7px 0;
    }
    .info_block p {
        color: #292929;
        font-size: 14px;
        line-height: 16px; 
        margin: 0 0 0 8px;
    }
    .compare_quotes .chakra-form__error-message {
        display: none!important;
        font-size: var(--chakra-fontSizes-sm);
        line-height: var(--chakra-lineHeights-normal);
        color: red;
        padding: 5px 0;
    }
    .compare_quotes.error .chakra-form__error-message {
        display: block!important;
    }
    .exp_banner > .container > img {
        margin: 0 auto;
    }
    .exp_banner  {
        background: #F6F8FF;
    }
    .compare_quotes {
        margin-top: -14px;
    }

    .exp_banner .css-k008qs, .exp_banner .banner-link, .exp_banner .css-195f0y4, .exp_banner .css-k008qs b, .exp_banner .banner-contribution {
        color: #292929!important;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 12px!important;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; 
        text-decoration-line: none!important;
        display: flex!important;
        align-items: center;
    }
    .exp_banner .banner-link, .exp_banner .css-195f0y4 {
        color: #526EFF!important;
        text-decoration-line: underline!important;
    }
    @media screen and (min-width: 435px) {
        .exp_banner {
            position: relative;
            z-index: 4;
        }
        .exp_banner .banner-authorship {
            order: 2;
            grid-gap: 0!important;
            flex-direction: ${window.location.href.includes('/insurance/life/best/term/') || window.location.href.includes('/insurance/life/rates/100-thousan') ? 'row!important' : 'row-reverse!important'};
            ${window.location.href.includes('/insurance/life/best/term/') || window.location.href.includes('/insurance/life/rates/100-thousan') ? '' : 'justify-content: flex-end;'}
            flex-wrap: wrap;
        }
        .exp_banner .banner-advertising {
            order: 2;
            width: fit-content;
            margin-right: 15px;
        }
        .exp_banner .banner-contribution {
            order: 3;
        }
        .exp_banner .banner-authorship > .css-1t0181o > .css-k008qs:before, 
        .exp_banner .banner-advertising .css-195f0y4:before {
            content: '';
            background: url(https://res.cloudinary.com/moneygeek/image/upload/v1585171420/assets/components/icon/blue_checkmark_cucw0x.svg) no-repeat center / 12px;
            width: 12px;
            height: 12px;
            margin-right: 8px;
        }
    }

    @media screen and (min-width: 435px) and (max-width: 766px) {

        .exp_banner .css-k008qs > .css-k008qs {
            margin-right: 15px;
        }
        .exp_banner .css-c0gtt0 {
            display: none;
        }
        .exp_banner .css-af43ts {
            flex-direction: column;
            display: flex;        
        }
        .exp_banner .css-1p8d0n6 {
            order: 2;
        }
        .exp_banner .css-1h13y3f {
            order: 3
        }
        .exp_banner span.chakra-text.banner-last-updated.css-yaw6qn {
            display: block;
        }
        .exp_banner .css-195f0y4 {
            margin-right: 15px;
        }
        .exp_banner .exp_banner > div > div {
            padding-left: 16px;
            padding-right: 16px;
        }
    }
    @media screen and (max-width: 767px) {
        .exp-input {
            font: normal normal normal 16px/33px PT Sans;
        }
        .exp_banner .breadcrumbs-container .breadcrumbs {
            border: none;
        }
        .exp_banner .breadcrumbs-container .breadcrumbs .breadcrumb-item:nth-child(2), 
        .exp_banner .breadcrumbs-container .breadcrumbs .breadcrumb-item:nth-last-child(2) {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
        }
        .exp_banner .breadcrumbs-container .breadcrumb-separator, 
        .exp_banner .breadcrumbs-container .breadcrumbs .breadcrumb-item, 
        .exp_banner .breadcrumbs-container .breadcrumbs .breadcrumb-item>span:first-child,
        .exp_banner .breadcrumbs-container .breadcrumbs .breadcrumb-item:nth-last-child(2) span:last-child {
            display: none;
        }
        .exp_banner .css-1uxi4iy {
            margin: 10px 0;
            line-height: 30px;
        }
        .exp_banner .breadcrumbs-container .breadcrumbs {
            padding: 0!important;
        }
        .compare_quotes .chakra-form__error-message {
            text-align: center;
        }
        .exp_banner .breadcrumbs-container {
            margin-top: 21px;
            display: block;
            background: transparent;
        }
        .exp_banner .css-11gphgj {
            flex-direction: row-reverse;
            padding: 10px 17px;
        }
        .exp_banner .css-1m50t9u {
            margin: 0 0 0 auto;
        }
        .exp_banner .css-kuk5vd {
            margin: 0 auto 0 0;
        }
        .exp_banner .css-1m50t9u, .exp_banner .css-1h3iw5b {
            width: 32px;
            height: 32px;
            border-radius: 6px;
            background: var(--purple-05, #F6F8FF);
            min-width: fit-content;
        }
        .exp_banner .css-l8qto0 {
            font-size: 14px;
        }
        .exp_banner .css-w82p09 img {
            width: 10px;
            height: 10px;
            margin-top: 3px;
        }
        .exp_banner .banner-checkmark {
            margin-right: 5px;
        }
        .exp_banner .css-bco1gb {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            gap: 0px;
        }
        .info_block {
            justify-content: center;
            margin-bottom: 14px;
        }
        .compare_quotes input {
            border-right: 1px solid #D3D4D6;
        }
        .exp_banner {
            padding: 55px 15px 20px; 
        }
    }
    @media screen and (min-width: 767px) {
        .exp_banner .css-yaw6qn, .exp_banner .css-c0gtt0 {
            display: none;
        }
        .exp_banner  {
            padding: 0;
        }
        .exp_banner .container {
            margin: 0 auto;
            max-width: 1190px;
            width: 100%;
            padding: 0 20px;
        }
        .exp_banner > .container > div {
            padding: 40px 0;
        }
        .exp_banner > .container > img {
            margin-top: auto;
            max-width: 505px;
        }
        .exp_banner .css-1uxi4iy {
            color: #292929;
            font-size: 44px;
            line-height: 50px;
        }
        .exp_banner .banner-grid {
            display: flex!important;
            flex-direction: column;
            grid-gap: 15px;
        }
        .compare_quotes_form {
            display: flex;
        }
        .compare_quotes_form button {
            width: 201px;
            border-radius: 0 6px 6px 0;
        }
        .compare_quotes_form > div {
            width: calc(100% - 201px);
        }
        .compare_quotes input {
            border-radius: 6px 0 0 6px;
            border-top: 1px solid #D3D4D6;
            border-left: 1px solid #D3D4D6;
        }
        .exp_banner .css-1t0181o:not(.banner-contribution) {
            margin-right: 15px;
        }
        .exp_banner .css-1t0181o > .css-k008qs:not(:first-child) {
            margin-left: 15px;
        } 
        .compare_quotes > p {
            font-size: 22px;
            line-height: 30px;
        }
        .exp_banner .banner-description p {
            font-size: 18px;
            line-height: 22px;
        }
        .compare_quotes > p {
            font-family: 'Brandon Grotesque', sans-serif;
        }
        .exp-update {
            order: 3;
            display: flex;
            align-items: center;
        }
        .exp-update p {
            color: #292929;
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px;
            margin: 0;
        }
        .exp_banner .css-1255oue {
            margin-right: 13px;
            color: #292929;
            font-family: Source Sans Pro;
            font-size: 13px;
            font-style: normal;
            font-weight: 700;
            line-height: 21.412px; /* 164.706% */
            width: fit-content;
            border-radius: 22px;
            border: 1px solid #292929;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            padding-top: 2px;
            padding-bottom: 2px;
            padding-inline: 10px;
        }
    }

    @media screen and (min-width: 992px) {
        .exp_banner .container {
            display: flex;
        }
        .exp_banner > .container > div {
            max-width: 600px;
            margin: 0 auto 0 0;
        }

        .exp_banner > .container > img {
            margin: auto 0 0 0;
        }
    }

</style>`;

let isLocation = new Promise((resolve, reject) => {
    fetch("https://ipinfo.io/json?token=625d68b69a156c")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        resolve(data);
    })
})

let html = `
<div class="exp_banner">
    <div class="container">
        <div>
            <div class="compare_quotes">
                <p>Compare rates and save on life insurance today.</p>
                <label>Enter Your Zip Code</label>
                <div class="compare_quotes_form">
                    <div class="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_470_885)">
                            <path d="M10 10.625C11.3807 10.625 12.5 9.50571 12.5 8.125C12.5 6.74429 11.3807 5.625 10 5.625C8.61929 5.625 7.5 6.74429 7.5 8.125C7.5 9.50571 8.61929 10.625 10 10.625Z" stroke="#292929" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.25 8.125C16.25 13.75 10 18.125 10 18.125C10 18.125 3.75 13.75 3.75 8.125C3.75 6.4674 4.40848 4.87769 5.58058 3.70558C6.75269 2.53348 8.3424 1.875 10 1.875C11.6576 1.875 13.2473 2.53348 14.4194 3.70558C15.5915 4.87769 16.25 6.4674 16.25 8.125Z" stroke="#292929" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_470_885">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <input type="nubmer">
                        <p class="address"></p>
                    </div>
                    <button type="button">Compare Quotes</button>
                </div>
                <div class="chakra-form__error-message">You must provide a valid zip code</div>
                
            </div>
            <div class="info_block">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_470_895)">
                        <path d="M2.8125 8.07117V3.9375C2.8125 3.78832 2.87176 3.64524 2.97725 3.53975C3.08274 3.43426 3.22582 3.375 3.375 3.375H14.625C14.7742 3.375 14.9173 3.43426 15.0227 3.53975C15.1282 3.64524 15.1875 3.78832 15.1875 3.9375V8.06976C15.1875 13.9887 10.1735 15.9497 9.17297 16.2823C9.0609 16.3209 8.9391 16.3209 8.82703 16.2823C7.82648 15.9511 2.8125 13.9922 2.8125 8.07117Z" stroke="#292929" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.1875 9.5625L7.875 11.25L11.8125 7.3125" stroke="#292929" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_470_895">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>Free and simple - your information is secure</p>
            </div>
        </div>
        <img src="${dir}image-offer${media ? '': '-mob'}.svg" alt="image" class="offer_image">
    </div>
</div>`;

let spinner = `<span class="chakra-spinner css-1ahuvff"><span class="css-8b45rq"></span></span>`;
let checked = `<div class="css-1255oue"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.40777 0.180441C7.25108 0.0507866 7.0476 -0.0132926 6.84211 0.00230287C6.63661 0.0178983 6.44593 0.111891 6.31203 0.263598L2.96586 4.05321L1.16542 2.59796C0.864304 2.35475 0.416605 2.39354 0.1649 2.68466C0.0442881 2.8244 -0.0140056 3.00481 0.00285551 3.18617C0.0197166 3.36753 0.11035 3.53497 0.254797 3.65161L2.66737 5.60161C2.81785 5.72306 3.01373 5.77846 3.20808 5.75455C3.41391 5.73922 3.60495 5.64515 3.73897 5.49315L7.49367 1.24069C7.77246 0.924854 7.73401 0.450358 7.40777 0.180441Z" fill="#292929"></path></svg><span style="margin-left: 5px;">Fact Checked</span></div>`

function pushDataLayer(name, desc, type, loc) {
    console.log(name + ' / ' + desc +  ' / ' + type + ' / ' + loc);

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga4',
        'event_name': name,
        'event_desc': desc,
        'event_type': type,
        'event_loc': loc
    });
}

const visibilityMap = new Map()

let visibilityTimer

function handleVisibility(className) {
  const targetElements = document.querySelectorAll(className)

  visibilityTimer = setTimeout(() => {
    targetElements.forEach((targetElement, index) => {
      const rect = targetElement.getBoundingClientRect()

      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

      if (isVisible && !visibilityMap.has(targetElement)) {
        visibilityMap.set(targetElement, Date.now())
      } else if (!isVisible && visibilityMap.has(targetElement)) {
        const startTime = visibilityMap.get(targetElement)
        const focusTimeMillis = Date.now() - startTime;
        const focusTimeSeconds = focusTimeMillis / 1000; 

        if (targetElement.className.includes('banner-authorship') || targetElement.className.includes('css-bco1gb')) {
            pushDataLayer('exp_intr_ban_v_fsbt_ft', focusTimeSeconds + ' sec', 'Visibility','First screen benefits tips')
        }
        if (targetElement.closest('.banner-description')) {
            pushDataLayer('exp_intr_ban_v_fsd_ft', focusTimeSeconds + ' sec', 'Visibility','First screen description')
        }
        if (targetElement.className.includes('compare_quotes')) {
            pushDataLayer('exp_intr_ban_v_fszc_ft', focusTimeSeconds + ' sec', 'Visibility','First screen ZIP code')
        }
        if (targetElement.className.includes('offer_image') && targetElement.closest('.exp_banner')) {
            pushDataLayer('exp_intr_ban_v_fsi_ft', focusTimeSeconds + ' sec', 'Visibility','First screen Image')
        }
        
        visibilityMap.delete(targetElement)
      }
    })
  }, 500)
}

function getZipCode(address) {
    return new Promise((resolve, reject) => {
       
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&sensor=true&key=AIzaSyC6PN__S4c8R2NJ0MuNGJy-TdZvcmEV74M`)
        .then(response => response.json())
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

let addStyle = setInterval(() => {
    if (document.head && !document.querySelector('.exp-style')) {
        document.head.insertAdjacentHTML('beforeend', style)
    }
});

let addSvg = setInterval(() => {
    if (document.querySelector('header .css-nrnxqy a') && !document.querySelector('.exp-svg') && !media) {
        document.querySelector('header .css-nrnxqy a').innerHTML = `
        <svg class="exp-svg" xmlns="http://www.w3.org/2000/svg" width="135" height="35" viewBox="0 0 135 35" fill="none">
            <path d="M24.6938 17.8992L25.1684 14.9559C25.1854 14.8714 25.1176 14.8037 25.0329 14.8037H15.4546C14.2849 14.8037 13.2677 15.6325 13.0812 16.7659L12.6065 19.5569C12.4709 20.3857 11.7419 20.9778 10.8774 20.9778H6.06282C5.21518 20.9778 4.48622 20.3688 4.33365 19.5569L3.77421 16.3261H7.52073C7.58859 16.3261 7.65637 16.2584 7.65637 16.1907V15.5649C7.65637 15.142 7.30037 14.8037 6.87655 14.8037H2.1298C2.04504 14.8037 1.97722 14.8714 1.99417 14.9559L2.50276 17.8992H0.197196C0.112433 17.8992 0.0446224 17.9669 0.0615751 18.0514L0.231102 18.9986C0.28196 19.2355 0.485392 19.4216 0.739682 19.4216H2.774L2.96048 20.538C3.16391 21.6713 4.16412 22.5001 5.33385 22.5001H11.5724C12.7422 22.5001 13.7593 21.6713 13.9458 20.538L14.4204 17.7469C14.5561 16.9181 15.2851 16.3091 16.1497 16.3091H23.4054L22.8459 19.54C22.7103 20.3688 21.9814 20.9609 21.1168 20.9609H19.252C18.8282 20.9609 18.4722 21.2991 18.4722 21.7221C18.4722 21.9927 18.4722 22.2126 18.4722 22.3479C18.4722 22.4156 18.5399 22.4832 18.6078 22.4832H21.8288C22.9985 22.4832 24.0157 21.6544 24.2022 20.5211L24.3887 19.4046H26.3721C26.6264 19.4046 26.8468 19.2186 26.8807 18.9818L27.0502 18.0345C27.0672 17.9499 26.9994 17.8823 26.9146 17.8823H24.6938" fill="#1F1B50"/>
            <path d="M9.28382 18.2576C8.91082 18.2576 8.60568 17.97 8.60568 17.6148C8.60568 17.3949 8.72439 17.1919 8.91082 17.0735C8.72439 17.0059 8.52096 16.9551 8.31753 16.9551C7.40203 16.9551 6.6731 17.6656 6.6731 18.5452C6.6731 19.4247 7.41903 20.1352 8.31753 20.1352C9.23296 20.1352 9.96189 19.4247 9.96189 18.5452C9.96189 18.3422 9.92803 18.1561 9.84325 17.97C9.7246 18.1391 9.5211 18.2576 9.28382 18.2576Z" fill="#1F1B50"/>
            <path d="M19.1842 18.2576C18.8113 18.2576 18.5062 17.97 18.5062 17.6148C18.5062 17.3949 18.6248 17.1919 18.7944 17.0735C18.6079 17.0059 18.4044 16.9551 18.201 16.9551C17.2855 16.9551 16.5566 17.6656 16.5566 18.5452C16.5566 19.4247 17.3025 20.1352 18.201 20.1352C19.1164 20.1352 19.8454 19.4247 19.8454 18.5452C19.8454 18.3422 19.7945 18.1561 19.7267 17.97C19.625 18.1391 19.4216 18.2576 19.1842 18.2576Z" fill="#1F1B50"/>
            <path d="M3.13003 13.3349C3.02831 11.4573 3.8929 9.96872 7.41909 9.56279C9.67373 12.0662 13.0134 12.6075 16.0819 12.6075C18.54 12.6075 20.8286 12.2523 22.2357 12.2523C22.9138 12.2523 23.3715 12.3538 23.5919 12.5736C23.7615 12.7429 23.7106 13.0473 23.6597 13.301C23.6258 13.4364 23.7275 13.5716 23.8801 13.5716H24.8972C24.999 13.5716 25.1007 13.4871 25.1177 13.3856L25.4058 11.4404C26.084 6.58567 24.4565 3.03346 15.2851 2.71207C15.1664 2.71207 15.0817 2.55983 15.1664 2.45834C15.2682 2.32302 15.4377 2.12004 15.6919 1.79865C15.8276 1.6295 15.7259 1.37576 15.5224 1.34193C14.3527 1.15587 13.1829 1.07129 12.0302 1.07129C8.5718 1.07129 5.33388 1.91705 3.2487 3.72699C0.180263 6.38269 1.0618 10.4931 1.58733 13.4025C1.60429 13.504 1.68905 13.5886 1.80772 13.5886H2.90964C3.02831 13.5716 3.13003 13.4533 3.13003 13.3349Z" fill="#1F1B50"/>
            <path d="M4.19808 4.82685C5.8764 3.37213 8.74137 2.52637 12.0302 2.52637C12.2845 2.52637 12.3523 2.52637 12.4371 2.52637C12.6744 2.54328 12.7931 2.6786 12.6914 2.84775C12.5049 3.16915 12.3014 3.54128 12.1319 3.82884C12.0132 4.01491 12.1658 4.26864 12.3862 4.23481C12.9117 4.18406 13.7764 4.13332 14.9461 4.15023C19.1503 4.2179 21.9136 5.06365 23.1512 6.5522C23.9988 7.55022 24.2531 9.00493 23.9819 11.0855C23.4394 10.8318 22.8121 10.7979 22.2357 10.7979C21.5576 10.7979 20.7778 10.8656 19.8454 10.9501C18.7096 11.0516 17.4042 11.1531 16.0649 11.1531C12.471 11.1531 10.0637 10.3412 8.47015 8.582L7.96158 8.02386L7.21565 8.10843C4.9779 8.36214 3.43521 9.05564 2.51977 10.2059C2.35024 8.00693 2.60453 6.18007 4.19808 4.82685Z" fill="#526EFF"/>
            <path d="M22.507 9.00507C22.2358 9.00507 21.9815 8.85279 21.8967 8.63293C21.1847 6.75532 18.201 6.24786 15.8276 6.14637C15.4378 6.12945 15.0648 6.12945 14.7257 6.12945C14.3697 6.12945 14.0815 5.89264 14.0815 5.58817C14.0815 5.28369 14.3697 5.04688 14.7257 5.04688C15.0987 5.04688 15.4886 5.04687 15.8955 5.0638C19.8793 5.23295 22.3714 6.34935 23.1343 8.29465C23.236 8.58215 23.0664 8.88665 22.7274 8.98815C22.6426 9.00507 22.5748 9.00507 22.507 9.00507Z" fill="white"/>
            <path d="M13.1149 6.55124C12.8268 6.55124 12.5555 6.34825 12.5046 6.04377C12.4708 5.72239 12.6572 5.43482 12.9623 5.401L13.0471 5.38408C13.3692 5.35025 13.6574 5.58707 13.6913 5.89154C13.7252 6.21293 13.5048 6.50049 13.1828 6.53432C13.1488 6.53432 13.1319 6.55124 13.1149 6.55124Z" fill="white"/>
            <path d="M34.2128 6.95389C34.2128 6.77551 34.3661 6.61497 34.5364 6.61497H34.843C34.9963 6.61497 35.0985 6.722 35.1155 6.88254L35.2347 8.00633C35.5072 7.61391 36.6485 6.36523 38.6582 6.36523C40.1741 6.36523 41.2982 7.04308 41.9115 8.27391C42.218 7.86362 43.5977 6.36523 45.6415 6.36523C48.3497 6.36523 49.5249 8.22041 49.5249 11.128V16.6936C49.5249 16.872 49.3716 17.0325 49.2013 17.0325H48.7074C48.554 17.0325 48.4348 16.9076 48.4348 16.6936V11.128C48.4348 8.73769 47.447 7.48905 45.5734 7.48905C43.6998 7.48905 42.6097 8.84476 42.2862 9.25505C42.4395 9.80798 42.5076 10.4323 42.5076 11.128V16.6936C42.5076 16.872 42.3542 17.0325 42.184 17.0325H41.707C41.5367 17.0325 41.4005 16.9076 41.4005 16.6936V11.128C41.4005 8.73769 40.3785 7.48905 38.522 7.48905C36.5122 7.48905 35.4221 9.07662 35.2858 9.29069V16.7114C35.2858 16.9255 35.1837 17.0503 34.9622 17.0503H34.4682C34.298 17.0503 34.1957 16.8898 34.1957 16.7114V6.95389H34.2128Z" fill="#1F1B50"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.9041 11.7893C60.9041 8.83719 58.6966 6.36523 55.9288 6.36523C53.127 6.36523 50.9536 8.83719 50.9536 11.7893C50.9536 14.8303 53.127 17.2667 55.9288 17.2667C58.6966 17.2667 60.9041 14.8303 60.9041 11.7893ZM59.8173 11.7893C59.8173 14.2612 58.1023 16.1996 55.9288 16.1996C53.7214 16.1996 52.0064 14.2612 52.0064 11.7893C52.0064 9.38848 53.7214 7.45005 55.9288 7.45005C58.1023 7.45005 59.8173 9.40626 59.8173 11.7893Z" fill="#1F1B50"/>
            <path d="M62.3326 6.95389C62.3326 6.77551 62.4859 6.61497 62.6732 6.61497H62.9287C63.0991 6.61497 63.2012 6.722 63.2353 6.88254L63.3375 8.00633C63.6612 7.64955 65.0237 6.36523 67.0165 6.36523C69.7928 6.36523 71.0192 8.22041 71.0192 11.128V16.6936C71.0192 16.872 70.8658 17.0325 70.6955 17.0325H70.2527C70.0824 17.0325 69.9291 16.872 69.9291 16.6936V11.128C69.9291 8.73769 68.856 7.48905 66.9654 7.48905C64.9215 7.48905 63.5079 9.14798 63.4057 9.29069V16.7114C63.4057 16.9255 63.3034 17.0503 63.082 17.0503H62.6052C62.4348 17.0503 62.3326 16.8898 62.3326 16.7114V6.95389Z" fill="#1F1B50"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M81.8207 11.1135C81.8207 8.35698 79.9357 6.36523 77.3379 6.36523C74.3157 6.36523 72.4479 8.83719 72.4479 11.7893C72.4479 14.8303 74.2986 17.2667 77.3207 17.2667C78.8665 17.2667 80.4286 16.5553 80.9207 16.0396C81.0736 15.8973 81.0907 15.7373 81.0229 15.6306L80.7679 15.2749C80.6493 15.0971 80.5472 15.1148 80.3265 15.2749C79.7322 15.6839 78.7136 16.2352 77.4057 16.2352C75.1643 16.2352 73.6364 14.3679 73.5343 12.1272H81.4472C81.8207 12.1272 81.8207 11.5226 81.8207 11.1135ZM77.3379 7.41448C79.5622 7.41448 80.7343 9.17505 80.7343 11.2024H73.5686C73.6872 9.06833 75.1643 7.41448 77.3379 7.41448Z" fill="#1F1B50"/>
            <path d="M83.3015 6.75284C83.2051 6.55061 83.2372 6.36523 83.4465 6.36523H83.9615C84.0736 6.36523 84.2029 6.43264 84.2672 6.58431L88.2901 14.8926H88.3379L92.0072 6.58431C92.0715 6.43264 92.2001 6.36523 92.3129 6.36523H92.8272C93.0365 6.36523 93.0686 6.56746 92.9722 6.75284L85.6029 23.3694C85.5543 23.4873 85.4093 23.5716 85.2972 23.5716H84.7336C84.5408 23.5716 84.4765 23.4536 84.5729 23.2346L87.7429 16.106L83.3015 6.75284Z" fill="#1F1B50"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M94.7065 12.7724C94.4465 12.4496 93.9751 11.5456 93.9751 10.4157C93.9751 8.15585 95.5672 6.42871 98.1186 6.42871H102.003C102.198 6.42871 102.311 6.57398 102.311 6.7354V6.99367C102.311 7.10666 102.246 7.25193 102.1 7.26807L100.394 7.38107C100.849 7.62321 101.856 8.44643 101.856 10.3996C101.856 12.498 100.345 14.3059 97.9236 14.3059C96.4936 14.3059 95.6486 13.7893 95.3401 13.4503C95.1451 13.5149 94.1372 14.0314 94.1372 15.1452C94.1372 16.259 95.0801 16.5172 96.0065 16.5172H99.4515C101.483 16.5172 102.961 17.4373 102.961 19.5357C102.961 21.5373 101.011 23.3774 98.1186 23.3774C94.9015 23.3774 93.4872 21.4889 93.4872 19.8909C93.4872 18.5026 94.4786 17.7279 94.9822 17.4211C94.5115 17.3243 93.1301 16.6948 93.1301 15.2744C93.1465 13.7086 94.4465 12.9015 94.7065 12.7724ZM98.0865 22.4251C100.215 22.4251 101.856 21.1821 101.856 19.568C101.856 18.4865 101.19 17.5019 99.4351 17.5019H96.4451C96.2015 17.518 94.5272 18.1798 94.5272 19.7939C94.5436 21.0853 95.7951 22.4251 98.0865 22.4251ZM97.9565 7.36493C99.5165 7.36493 100.865 8.398 100.865 10.3834C100.865 12.0621 99.7279 13.4019 97.9565 13.4019C95.9736 13.4019 94.9501 12.0299 94.9501 10.3834C94.9501 8.6885 96.1365 7.36493 97.9565 7.36493Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M113.899 10.9975C113.899 8.34521 111.987 6.42871 109.351 6.42871C106.285 6.42871 104.407 8.80721 104.39 11.6477C104.39 14.5738 106.268 16.9181 109.334 16.9181C110.902 16.9181 112.486 16.2336 112.986 15.7374C113.141 15.6005 113.159 15.4465 113.09 15.3439L112.831 15.0016C112.711 14.8305 112.607 14.8476 112.384 15.0016C111.781 15.3951 110.747 15.9256 109.42 15.9256C107.146 15.9256 105.596 14.1289 105.493 11.9729H113.521C113.899 11.9729 113.899 11.3911 113.899 10.9975ZM109.351 7.43835C111.608 7.43835 112.797 9.13235 112.797 11.0831H105.527C105.648 9.02971 107.146 7.43835 109.351 7.43835Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M124.837 10.9975C124.837 8.34521 122.925 6.42871 120.289 6.42871C117.223 6.42871 115.345 8.80721 115.328 11.6477C115.328 14.5738 117.206 16.9181 120.272 16.9181C121.84 16.9181 123.424 16.2336 123.924 15.7374C124.079 15.6005 124.096 15.4465 124.028 15.3439L123.769 15.0016C123.649 14.8305 123.545 14.8476 123.321 15.0016C122.719 15.3951 121.685 15.9256 120.358 15.9256C118.084 15.9256 116.534 14.1289 116.431 11.9729H124.459C124.837 11.9729 124.837 11.3911 124.837 10.9975ZM120.289 7.43835C122.546 7.43835 123.735 9.13235 123.735 11.0831H116.465C116.586 9.02971 118.084 7.43835 120.289 7.43835Z" fill="#526EFF"/>
            <path d="M126.266 0.307399C126.266 0.14561 126.413 0 126.576 0H126.983C127.146 0 127.292 0.14561 127.292 0.307399V10.8884L132.358 7.232C132.472 7.13489 132.619 7.08636 132.732 7.08636H133.416C133.661 7.08636 133.677 7.39378 133.481 7.507L128.367 11.2444L134.101 16.1304C134.296 16.2921 134.166 16.5349 133.986 16.5349H133.254C133.107 16.5349 132.993 16.5186 132.781 16.3407L127.292 11.6488V16.2274C127.292 16.4216 127.194 16.5349 126.983 16.5349H126.526C126.364 16.5349 126.266 16.3892 126.266 16.2274V0.307399Z" fill="#526EFF"/>
            <path d="M4.23679 30.9052L5.88615 28.7297C5.93823 28.6795 5.99032 28.646 6.04241 28.6126C6.09449 28.5958 6.16394 28.5791 6.23338 28.5791C6.33756 28.5791 6.44173 28.6126 6.52853 28.6795C6.58062 28.713 6.61534 28.7632 6.65006 28.8134C6.68479 28.8636 6.70215 28.9138 6.70215 28.964C6.70215 29.0142 6.70215 29.0811 6.68479 29.1313C6.66743 29.1815 6.63271 29.2485 6.59798 29.2987L4.72292 31.6582V33.3483C4.72292 33.4152 4.70555 33.4655 4.68819 33.5157C4.67083 33.5659 4.63611 33.6161 4.58403 33.6495C4.5493 33.683 4.49721 33.7165 4.44513 33.7332C4.39305 33.75 4.3236 33.7667 4.27151 33.7667C4.20207 33.7667 4.14998 33.75 4.0979 33.7332C4.04581 33.7165 3.99373 33.683 3.94164 33.6495C3.90692 33.6161 3.8722 33.5659 3.83747 33.5157C3.82011 33.4655 3.80275 33.3985 3.80275 33.3483V31.6749L1.91032 29.3322C1.8756 29.282 1.84087 29.2317 1.82351 29.1815C1.80615 29.1313 1.80615 29.0644 1.80615 29.0142C1.80615 28.964 1.82351 28.897 1.85824 28.8468C1.89296 28.7967 1.92768 28.7465 1.97977 28.6962C2.01449 28.6627 2.06657 28.6293 2.11866 28.6126C2.17075 28.5958 2.22283 28.5791 2.27492 28.5791C2.34437 28.5791 2.39645 28.5958 2.4659 28.6126C2.51798 28.646 2.57007 28.6795 2.62215 28.7297L4.23679 30.9052Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3849 28.7793C13.0386 28.6458 12.6925 28.5791 12.3117 28.5791C12.0521 28.5791 11.8097 28.6125 11.5847 28.6792C11.3424 28.746 11.1347 28.8294 10.927 28.9461C10.7193 29.0629 10.5462 29.1964 10.3731 29.3632C10.2 29.53 10.0615 29.6969 9.94036 29.8971C9.81921 30.0973 9.73264 30.3142 9.66343 30.531C9.59421 30.748 9.55957 30.9815 9.55957 31.2317C9.55957 31.5987 9.62878 31.9491 9.76728 32.2661C9.92307 32.5831 10.1134 32.8667 10.3558 33.1002C10.5981 33.3338 10.8924 33.534 11.2212 33.6675C11.5674 33.801 11.9136 33.8677 12.2944 33.8677C12.5367 33.8677 12.779 33.8343 13.0214 33.7676C13.2636 33.7009 13.4714 33.6175 13.6791 33.5007C13.8868 33.3839 14.0599 33.2504 14.233 33.0836C14.4061 32.9167 14.5446 32.75 14.6657 32.5497C14.7869 32.3495 14.8734 32.1327 14.9426 31.9157C15.0119 31.6989 15.0465 31.4653 15.0465 31.215C15.0465 30.848 14.9773 30.4977 14.8388 30.1807C14.7003 29.8637 14.4926 29.5801 14.2503 29.3465C14.0079 29.113 13.7137 28.9127 13.3849 28.7793ZM11.6021 29.5967C11.8271 29.5133 12.0521 29.4633 12.3117 29.4633C12.5714 29.4633 12.7964 29.4967 13.0214 29.5967C13.2464 29.6969 13.4541 29.8137 13.6099 29.9805C13.7657 30.1473 13.8869 30.3308 13.9907 30.5477C14.0772 30.7646 14.1291 30.9815 14.1291 31.2317C14.1291 31.4653 14.0946 31.6989 13.9907 31.9157C13.9041 32.116 13.783 32.2995 13.6099 32.4663C13.4368 32.6165 13.2464 32.7499 13.0214 32.8333C12.7964 32.9167 12.5714 32.9668 12.3117 32.9668C12.0521 32.9668 11.8098 32.9167 11.6021 32.8333C11.3944 32.7499 11.1866 32.6331 11.0309 32.4663C10.8751 32.3161 10.7539 32.1326 10.6501 31.9157C10.5635 31.7155 10.5116 31.482 10.5116 31.2317C10.5116 30.9982 10.5462 30.7646 10.6501 30.5477C10.7366 30.3308 10.8751 30.1473 11.0309 29.9805C11.1866 29.8137 11.3771 29.6969 11.6021 29.5967Z" fill="#526EFF"/>
            <path d="M18.8042 31.5179C18.8042 31.7182 18.8388 31.9019 18.9255 32.0856C19.012 32.2526 19.116 32.4028 19.2719 32.5365C19.4105 32.67 19.5838 32.7702 19.7743 32.837C19.9649 32.9037 20.1555 32.9539 20.3633 32.9539C20.5712 32.9539 20.7618 32.9205 20.935 32.837C21.1083 32.7535 21.2642 32.6533 21.4028 32.5365C21.5413 32.4028 21.6453 32.2526 21.7146 32.0856C21.7839 31.9186 21.8358 31.7182 21.8358 31.5179V29.0132C21.8358 28.9465 21.8532 28.8964 21.8705 28.8462C21.8878 28.7962 21.9225 28.7461 21.9745 28.7127C22.0091 28.6793 22.061 28.6459 22.1303 28.6125C22.1823 28.5958 22.2516 28.5791 22.3036 28.5791C22.3729 28.5791 22.4248 28.5958 22.4768 28.6125C22.5288 28.6292 22.5808 28.6626 22.6154 28.7127C22.65 28.7461 22.6847 28.7962 22.7193 28.8462C22.7367 28.8964 22.754 28.9632 22.754 29.0132V31.5179C22.754 31.8351 22.6847 32.1357 22.5635 32.4195C22.4422 32.7034 22.269 32.9539 22.0438 33.1542C21.8358 33.3546 21.576 33.5216 21.2815 33.6552C20.987 33.772 20.6752 33.8388 20.346 33.8388C20.0168 33.8388 19.705 33.772 19.4105 33.6552C19.116 33.5383 18.8562 33.3713 18.631 33.1542C18.4057 32.9539 18.2325 32.7034 18.0939 32.4195C17.9553 32.1357 17.9033 31.8351 17.9033 31.5179V29.03C17.9033 28.9632 17.9207 28.913 17.938 28.863C17.9553 28.8129 17.99 28.7627 18.042 28.7294C18.0766 28.696 18.1285 28.6626 18.1805 28.6292C18.2325 28.6125 18.3018 28.5958 18.3537 28.5958C18.423 28.5958 18.475 28.6125 18.527 28.6292C18.579 28.6459 18.631 28.6793 18.6656 28.7294C18.7002 28.7627 18.7349 28.8129 18.7695 28.863C18.7869 28.913 18.8042 28.9798 18.8042 29.03V31.5179Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.646 28.8465C25.6286 28.8966 25.6113 28.9467 25.6113 29.0136V33.3587C25.6113 33.4089 25.6286 33.4757 25.646 33.5259C25.6807 33.576 25.7153 33.6262 25.75 33.6596C25.7847 33.693 25.8367 33.7264 25.8887 33.7431C25.9408 33.7598 25.9928 33.7765 26.0621 33.7765C26.1141 33.7765 26.1835 33.7598 26.2355 33.7431C26.2875 33.7264 26.3395 33.693 26.3742 33.6596C26.4262 33.6262 26.4609 33.576 26.4783 33.5259C26.4955 33.4757 26.5129 33.4256 26.5129 33.3587V32.356H27.5706L28.7496 33.6763C28.8537 33.7598 28.9403 33.81 29.0617 33.81C29.1138 33.81 29.1658 33.7932 29.2178 33.7765C29.2698 33.7598 29.3045 33.7264 29.3565 33.6763C29.4085 33.6262 29.4432 33.576 29.4605 33.5259C29.4778 33.4757 29.4952 33.4089 29.4952 33.3587C29.4952 33.3086 29.4778 33.2417 29.4605 33.1916C29.4432 33.1415 29.4085 33.0914 29.3565 33.0412L28.5763 32.1387C28.7323 32.0552 28.8883 31.9717 29.0097 31.8547C29.131 31.7377 29.2525 31.604 29.3391 31.4703C29.4258 31.3199 29.4952 31.1695 29.5472 31.0024C29.5992 30.8352 29.6165 30.6681 29.6165 30.4842C29.6165 30.2169 29.5645 29.9662 29.4605 29.7322C29.3565 29.4982 29.2178 29.2977 29.027 29.1306C28.8363 28.9635 28.6283 28.8298 28.3855 28.7295C28.1428 28.6292 27.8827 28.5791 27.6053 28.5791H26.0621C26.0101 28.5791 25.9408 28.5958 25.8887 28.6125C25.8367 28.646 25.7847 28.6794 25.75 28.7128C25.698 28.7462 25.6633 28.7964 25.646 28.8465ZM26.5303 31.4368V29.4481V29.4314H27.6399C27.7786 29.4314 27.9173 29.4648 28.056 29.515C28.1948 29.5651 28.3161 29.6487 28.4028 29.7322C28.4895 29.8157 28.5762 29.9327 28.6283 30.0497C28.6803 30.1667 28.7149 30.3004 28.7149 30.4341C28.7149 30.5678 28.6803 30.7015 28.6283 30.8185C28.5762 30.9522 28.5068 31.0525 28.4028 31.136C28.2988 31.2363 28.1948 31.3032 28.056 31.3533C27.9173 31.4034 27.7786 31.4368 27.6226 31.4368H26.5303Z" fill="#526EFF"/>
            <path d="M40.5191 30.1849V33.3462C40.5191 33.4131 40.5018 33.4633 40.4844 33.5135C40.4671 33.5637 40.4323 33.6139 40.3803 33.6473C40.3456 33.6807 40.2935 33.7142 40.2414 33.731C40.1893 33.7477 40.12 33.7644 40.0679 33.7644C39.9985 33.7644 39.9464 33.7477 39.8943 33.731C39.8423 33.7142 39.7902 33.6807 39.7555 33.6473C39.7208 33.6139 39.6861 33.5637 39.6514 33.5135C39.6341 33.4633 39.6167 33.3964 39.6167 33.3462V29.014C39.6167 28.9471 39.6341 28.8969 39.6514 28.8467C39.6688 28.7965 39.7035 28.7464 39.7555 28.7129C39.7902 28.6795 39.8423 28.646 39.9117 28.6125C39.9638 28.5958 40.0332 28.5791 40.0853 28.5791C40.2067 28.5791 40.3108 28.6293 40.415 28.7129L42.2371 30.8037L44.0593 28.7129C44.094 28.6795 44.1461 28.646 44.1981 28.6293C44.2502 28.6125 44.3196 28.5958 44.3717 28.5958H44.4064C44.4758 28.5958 44.5278 28.6125 44.5799 28.6293C44.632 28.646 44.6841 28.6795 44.7188 28.7297C44.7535 28.7631 44.7882 28.8132 44.8056 28.8635C44.8229 28.9137 44.8403 28.9638 44.8403 29.0307V33.363C44.8403 33.4299 44.8229 33.48 44.8056 33.5302C44.7882 33.5804 44.7535 33.6306 44.7014 33.664C44.6667 33.6975 44.6146 33.731 44.5626 33.7477C44.5105 33.7644 44.4411 33.7811 44.3891 33.7811C44.3196 33.7811 44.2676 33.7644 44.2155 33.7477C44.1634 33.731 44.1113 33.6975 44.0767 33.664C44.042 33.6306 44.0073 33.5804 43.9726 33.5302C43.9552 33.48 43.9378 33.4131 43.9378 33.363V30.2016L42.5495 31.7907C42.5148 31.8241 42.4628 31.8575 42.4107 31.891C42.3586 31.9245 42.3066 31.9245 42.2371 31.9245C42.133 31.9245 42.0289 31.8742 41.9421 31.7907L40.5191 30.1849Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5225 28.7793C51.1763 28.6458 50.8301 28.5791 50.4493 28.5791C50.2071 28.5791 49.9647 28.6125 49.7224 28.6792C49.4801 28.746 49.2723 28.8294 49.0646 28.9461C48.8569 29.0629 48.6838 29.1964 48.5108 29.3632C48.3377 29.53 48.1992 29.6969 48.0781 29.8971C47.9569 30.0973 47.8703 30.3142 47.8011 30.531C47.7318 30.748 47.6973 30.9815 47.6973 31.2317C47.6973 31.5987 47.7665 31.9491 47.905 32.2661C48.0607 32.5831 48.2511 32.8667 48.4935 33.1002C48.7358 33.3338 49.0301 33.534 49.3589 33.6675C49.7051 33.801 50.0513 33.8677 50.4321 33.8677C50.6743 33.8677 50.9167 33.8343 51.1591 33.7676C51.4013 33.7009 51.6091 33.6175 51.8168 33.5007C52.0245 33.3839 52.1976 33.2504 52.3706 33.0836C52.5438 32.9167 52.6822 32.75 52.8033 32.5497C52.9246 32.3495 53.0111 32.1327 53.0803 31.9157C53.1496 31.6989 53.1842 31.4653 53.1842 31.215C53.1842 30.848 53.1149 30.4977 52.9765 30.1807C52.838 29.8637 52.6303 29.5801 52.388 29.3465C52.1456 29.113 51.8514 28.9127 51.5225 28.7793ZM49.757 29.5967C49.982 29.5133 50.207 29.4633 50.4666 29.4633C50.709 29.4633 50.9513 29.4967 51.1763 29.5967C51.4013 29.6969 51.6091 29.8137 51.7648 29.9805C51.9206 30.1473 52.0418 30.3308 52.1456 30.5477C52.2321 30.7646 52.2841 30.9815 52.2841 31.2317C52.2841 31.4653 52.2321 31.7155 52.1456 31.9157C52.0591 32.116 51.9379 32.2995 51.7648 32.4663C51.5917 32.6165 51.4013 32.7499 51.1763 32.8333C50.9513 32.9167 50.7263 32.9668 50.4666 32.9668C50.207 32.9668 49.9647 32.9167 49.757 32.8333C49.5493 32.7499 49.3416 32.6165 49.1858 32.4663C49.03 32.3161 48.8916 32.116 48.805 31.9157C48.7184 31.7155 48.6665 31.482 48.6665 31.2317C48.6665 30.9982 48.7011 30.7646 48.805 30.5477C48.8916 30.3308 49.03 30.1473 49.1858 29.9805C49.3416 29.8137 49.532 29.6969 49.757 29.5967Z" fill="#526EFF"/>
            <path d="M56.9435 30.2176V33.3608C56.9435 33.4277 56.9261 33.4779 56.9089 33.528C56.8915 33.5782 56.8568 33.6284 56.8047 33.6618C56.7701 33.6952 56.718 33.7287 56.666 33.7454C56.6139 33.7621 56.5446 33.7788 56.4925 33.7788C56.4231 33.7788 56.3711 33.7621 56.3191 33.7454C56.267 33.7287 56.215 33.6952 56.1803 33.6618C56.1456 33.6284 56.1109 33.5782 56.0762 33.528C56.0589 33.4779 56.0415 33.411 56.0415 33.3608V29.0305C56.0415 28.9135 56.0762 28.8132 56.1629 28.7296C56.1976 28.6794 56.2496 28.646 56.3017 28.6125C56.3537 28.5791 56.4231 28.5791 56.4925 28.5791C56.5619 28.5791 56.6313 28.5958 56.6834 28.6292C56.7527 28.6627 56.8047 28.6962 56.8568 28.7463L59.771 32.1403V29.0305C59.771 28.9637 59.7884 28.9135 59.8056 28.8633C59.823 28.8132 59.8577 28.763 59.9097 28.7296C59.9444 28.6962 59.9965 28.6627 60.0659 28.646C60.1179 28.6292 60.1873 28.6125 60.2394 28.6125C60.2914 28.6125 60.3608 28.6292 60.4128 28.646C60.4649 28.6627 60.5169 28.6962 60.5516 28.7296C60.5863 28.763 60.6209 28.8132 60.6383 28.8633C60.6556 28.9135 60.673 28.9804 60.673 29.0305V33.3608C60.673 33.4277 60.6556 33.4946 60.6209 33.5615C60.5863 33.6284 60.5516 33.6618 60.4995 33.712C60.4649 33.7454 60.4301 33.7621 60.3781 33.7788C60.3261 33.7955 60.2914 33.7955 60.222 33.7955H60.2046C60.1353 33.7955 60.0832 33.7788 60.0311 33.7454C59.9791 33.712 59.9271 33.6785 59.8924 33.6284L56.9435 30.2176Z" fill="#526EFF"/>
            <path d="M63.9463 33.7811C63.8248 33.7644 63.7206 33.731 63.6513 33.6473C63.5645 33.5637 63.5298 33.4633 63.5298 33.3462V29.014C63.5298 28.9471 63.5471 28.8969 63.5645 28.8467C63.5819 28.7965 63.6166 28.7464 63.6686 28.7129C63.7034 28.6795 63.7554 28.646 63.8074 28.6125C63.8595 28.5958 63.9289 28.5791 63.981 28.5791H66.9311C67.0006 28.5791 67.0526 28.5958 67.1047 28.6125C67.1568 28.6293 67.2089 28.6627 67.2436 28.7129C67.2782 28.7464 67.3129 28.7965 67.3303 28.8467C67.3476 28.8969 67.365 28.9638 67.365 29.014C67.365 29.0809 67.3476 29.1311 67.3303 29.1812C67.3129 29.2315 67.2782 29.2816 67.2436 29.3151C67.2089 29.3485 67.1568 29.382 67.1047 29.4155C67.0526 29.4322 66.9832 29.4489 66.9311 29.4489H64.4496V30.6532H66.4106C66.4799 30.6532 66.532 30.67 66.5841 30.6867C66.6361 30.7034 66.6882 30.7369 66.7229 30.787C66.7576 30.8205 66.7924 30.8707 66.8271 30.9376C66.8444 30.9877 66.8618 31.0547 66.8618 31.1048C66.8618 31.1717 66.8444 31.222 66.8271 31.2721C66.8097 31.3223 66.775 31.3725 66.7229 31.406C66.6882 31.4394 66.6361 31.4728 66.5841 31.4895C66.532 31.5063 66.4626 31.523 66.4106 31.523H64.4496V32.8779H66.9485C67.0179 32.8779 67.07 32.8946 67.1221 32.9113C67.1741 32.928 67.2262 32.9615 67.2609 33.0117C67.2956 33.0452 67.3303 33.0953 67.3476 33.1622C67.365 33.2124 67.3824 33.2793 67.3824 33.3295C67.3824 33.4633 67.3476 33.5637 67.2609 33.6473C67.1741 33.731 67.07 33.7644 66.9311 33.7644H63.9463V33.7811Z" fill="#526EFF"/>
            <path d="M72.6705 30.9052L74.3198 28.7297C74.372 28.6795 74.4241 28.646 74.4762 28.6126C74.5284 28.5958 74.5977 28.5791 74.667 28.5791C74.7712 28.5791 74.8755 28.6126 74.962 28.6795C75.0141 28.713 75.0491 28.7632 75.0834 28.8134C75.1184 28.8636 75.1355 28.9138 75.1355 28.964C75.1355 29.0142 75.1355 29.0811 75.1184 29.1313C75.1012 29.1815 75.0662 29.2485 75.0312 29.2987L73.1562 31.6582V33.3483C73.1562 33.4152 73.1391 33.4655 73.122 33.5157C73.1041 33.5659 73.0698 33.6161 73.0177 33.6495C72.9827 33.683 72.9305 33.7165 72.8791 33.7332C72.827 33.75 72.757 33.7667 72.7048 33.7667C72.6355 33.7667 72.5834 33.75 72.5312 33.7332C72.4791 33.7165 72.4277 33.683 72.3755 33.6495C72.3405 33.6161 72.3055 33.5659 72.2712 33.5157C72.2534 33.4655 72.2362 33.3985 72.2362 33.3483V31.6749L70.344 29.3322C70.3092 29.282 70.2745 29.2317 70.2571 29.1815C70.2397 29.1313 70.2397 29.0644 70.2397 29.0142C70.2397 28.964 70.2571 28.897 70.2919 28.8468C70.3266 28.7967 70.3613 28.7465 70.4134 28.6962C70.4481 28.6627 70.5002 28.6293 70.5523 28.6126C70.6044 28.5958 70.6565 28.5791 70.7085 28.5791C70.778 28.5791 70.8301 28.5958 70.8995 28.6126C70.9516 28.646 71.0037 28.6795 71.0557 28.7297L72.6705 30.9052Z" fill="#526EFF"/>
            <path d="M87.75 31.6397C87.4765 31.5896 87.2365 31.523 87.0143 31.4396C86.7915 31.3562 86.6036 31.2561 86.4322 31.1394C86.2607 31.0227 86.1407 30.8726 86.0557 30.6891C85.97 30.5224 85.9186 30.3223 85.9186 30.1055C85.9186 29.872 85.97 29.6719 86.0729 29.4885C86.175 29.3051 86.295 29.1383 86.4665 29.0049C86.6372 28.8714 86.8258 28.7714 87.0315 28.688C87.2536 28.6213 87.4765 28.5713 87.6986 28.5713C87.87 28.5713 88.0243 28.5879 88.1779 28.6213C88.3322 28.6546 88.4865 28.7047 88.6236 28.7714C88.76 28.8381 88.8972 28.9215 89.0172 29.0049C89.1372 29.1049 89.2229 29.205 89.3079 29.3384C89.325 29.3717 89.3422 29.4218 89.3593 29.4718C89.3593 29.5219 89.3593 29.5552 89.3593 29.6052C89.3422 29.6386 89.3422 29.6886 89.3079 29.7219C89.2907 29.7553 89.2565 29.7886 89.2393 29.8054C89.1715 29.872 89.0686 29.9221 88.9486 29.9221C88.8972 29.9221 88.8629 29.9221 88.8115 29.9054C88.76 29.8887 88.7257 29.872 88.675 29.8386C88.6065 29.772 88.5208 29.7219 88.4693 29.6719C88.4179 29.6219 88.3322 29.5885 88.2636 29.5552C88.195 29.5219 88.11 29.5051 88.0243 29.4885C87.9386 29.4718 87.8357 29.4718 87.7329 29.4718C87.6136 29.4718 87.4936 29.4885 87.3907 29.5219C87.2879 29.5552 87.185 29.5885 87.1172 29.6552C87.0315 29.7053 86.98 29.772 86.9286 29.8554C86.8772 29.9387 86.86 30.0221 86.86 30.1221C86.86 30.2389 86.8943 30.3223 86.9457 30.4056C87.0143 30.4724 87.1 30.5391 87.2022 30.5891C87.305 30.6391 87.4422 30.6891 87.5793 30.7225C87.7329 30.7559 87.8872 30.7892 88.0586 30.8226C88.2465 30.8726 88.435 30.9393 88.6236 31.006C88.8115 31.0727 88.9657 31.1728 89.12 31.2895C89.2565 31.4062 89.3765 31.5396 89.4622 31.7064C89.5479 31.8731 89.5993 32.0733 89.5993 32.2901C89.5993 32.5236 89.5479 32.7236 89.4622 32.9238C89.3593 33.1239 89.2393 33.2906 89.0686 33.4241C88.8972 33.5741 88.6922 33.6742 88.4693 33.7576C88.2465 33.841 87.99 33.8743 87.7329 33.8743C87.5279 33.8743 87.3222 33.841 87.1336 33.7909C86.9457 33.7409 86.7743 33.6742 86.6036 33.5741C86.4493 33.4908 86.3122 33.374 86.1922 33.2573C86.0729 33.1406 85.9872 33.0071 85.9186 32.8737C85.8843 32.8071 85.8672 32.7404 85.85 32.6736C85.85 32.6069 85.85 32.5569 85.8672 32.5069C85.8843 32.4569 85.9186 32.4068 85.9529 32.3734C85.9872 32.3401 86.0386 32.3068 86.0729 32.2734C86.1407 32.2401 86.2093 32.2234 86.2779 32.2234C86.415 32.2234 86.5522 32.3068 86.6886 32.4902C86.8086 32.6569 86.9457 32.7904 87.1336 32.8737C87.305 32.9571 87.5279 33.0071 87.75 33.0071C87.87 33.0071 87.9729 32.9905 88.0929 32.9571C88.2122 32.9238 88.2979 32.8904 88.4008 32.8237C88.4865 32.757 88.555 32.6903 88.6236 32.6069C88.675 32.5236 88.7086 32.4235 88.7086 32.3234C88.7086 32.2067 88.675 32.1066 88.6236 32.0399C88.5722 31.9732 88.5036 31.9065 88.4179 31.8565C88.3322 31.8065 88.2293 31.7731 88.1272 31.7398C87.9557 31.6897 87.8529 31.6564 87.75 31.6397Z" fill="#526EFF"/>
            <path d="M93.3493 30.1771V33.3384C93.3493 33.4053 93.3322 33.4555 93.3151 33.5056C93.2979 33.5559 93.2636 33.6061 93.2122 33.6395C93.1779 33.6729 93.1265 33.7064 93.0743 33.7231C93.0229 33.7399 92.9543 33.7566 92.9029 33.7566C92.8343 33.7566 92.7829 33.7399 92.7315 33.7231C92.6793 33.7064 92.6279 33.6729 92.5936 33.6395C92.5593 33.6061 92.5251 33.5559 92.4908 33.5056C92.4736 33.4555 92.4565 33.3886 92.4565 33.3384V29.0062C92.4565 28.9393 92.4736 28.8891 92.4908 28.8389C92.5079 28.7887 92.5422 28.7386 92.5936 28.7051C92.6279 28.6716 92.6793 28.6382 92.7486 28.6047C92.8001 28.588 92.8686 28.5713 92.9201 28.5713C93.0401 28.5713 93.1436 28.6215 93.2465 28.7051L95.0493 30.7959L96.8522 28.7051C96.8865 28.6716 96.9379 28.6382 96.9901 28.6215C97.0415 28.6047 97.1101 28.588 97.1615 28.588H97.1958C97.2643 28.588 97.3158 28.6047 97.3672 28.6215C97.4193 28.6382 97.4708 28.6716 97.5051 28.7219C97.5393 28.7553 97.5736 28.8054 97.5908 28.8556C97.6079 28.9058 97.6251 28.956 97.6251 29.0229V33.3551C97.6251 33.4221 97.6079 33.4722 97.5908 33.5224C97.5736 33.5726 97.5393 33.6228 97.4879 33.6562C97.4536 33.6896 97.4015 33.7231 97.3501 33.7399C97.2986 33.7566 97.2301 33.7733 97.1786 33.7733C97.1101 33.7733 97.0586 33.7566 97.0072 33.7399C96.9551 33.7231 96.9036 33.6896 96.8693 33.6562C96.8351 33.6228 96.8008 33.5726 96.7665 33.5224C96.7493 33.4722 96.7322 33.4053 96.7322 33.3551V30.1938L95.3586 31.7829C95.3243 31.8163 95.2729 31.8497 95.2208 31.8832C95.1693 31.9166 95.1179 31.9166 95.0493 31.9166C94.9465 31.9166 94.8436 31.8664 94.7572 31.7829L93.3493 30.1771Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M101.65 32.753H104.037L104.397 33.5056C104.432 33.5893 104.5 33.6562 104.569 33.7064C104.637 33.7566 104.724 33.7733 104.81 33.7733C104.878 33.7733 104.947 33.7733 104.998 33.7399C105.119 33.6729 105.187 33.6061 105.222 33.4889C105.256 33.3886 105.256 33.2715 105.205 33.1544L103.281 28.8389C103.23 28.7553 103.178 28.6884 103.11 28.6382C103.041 28.588 102.955 28.5713 102.869 28.5713C102.766 28.5713 102.68 28.588 102.612 28.6382C102.543 28.6884 102.474 28.7553 102.44 28.8389L100.534 33.1544C100.5 33.2046 100.482 33.2548 100.482 33.3217C100.482 33.3886 100.482 33.4388 100.5 33.4889C100.512 33.5241 100.532 33.5511 100.555 33.5814C100.565 33.5943 100.575 33.6078 100.585 33.6228C100.62 33.6729 100.671 33.7064 100.74 33.7231C100.752 33.726 100.763 33.7289 100.774 33.7316C100.827 33.7451 100.872 33.7566 100.929 33.7566C101.015 33.7566 101.1 33.7399 101.169 33.6896C101.238 33.6395 101.307 33.5726 101.341 33.4889L101.65 32.753ZM103.659 31.8664H102.01L102.835 29.9429L103.659 31.8664Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M108.136 28.8387C108.119 28.8888 108.102 28.9389 108.102 29.0058V33.3509C108.102 33.4011 108.119 33.4679 108.136 33.5181C108.171 33.5682 108.205 33.6184 108.239 33.6518C108.274 33.6852 108.326 33.7186 108.377 33.7353C108.429 33.752 108.48 33.7687 108.549 33.7687C108.6 33.7687 108.669 33.752 108.72 33.7353C108.771 33.7186 108.823 33.6852 108.857 33.6518C108.909 33.6184 108.943 33.5682 108.96 33.5181C108.977 33.4679 108.994 33.4178 108.994 33.3509V32.3482H110.041L111.208 33.6685C111.311 33.752 111.396 33.8021 111.516 33.8021C111.568 33.8021 111.619 33.7854 111.671 33.7687C111.722 33.752 111.756 33.7186 111.808 33.6685C111.859 33.6184 111.894 33.5682 111.911 33.5181C111.928 33.4679 111.945 33.4011 111.945 33.3509C111.945 33.3008 111.928 33.2339 111.911 33.1838C111.894 33.1337 111.859 33.0836 111.808 33.0334L111.036 32.1309H111.036C111.191 32.0474 111.345 31.9639 111.465 31.8469C111.585 31.7299 111.705 31.5961 111.791 31.4625C111.876 31.3121 111.945 31.1616 111.997 30.9946C112.049 30.8274 112.066 30.6603 112.066 30.4764C112.066 30.2091 112.014 29.9584 111.911 29.7244C111.808 29.4904 111.671 29.2899 111.482 29.1228C111.294 28.9556 111.088 28.822 110.847 28.7217C110.607 28.6214 110.35 28.5713 110.075 28.5713H108.549C108.497 28.5713 108.429 28.588 108.377 28.6047C108.326 28.6381 108.274 28.6716 108.239 28.705C108.188 28.7384 108.154 28.7886 108.136 28.8387ZM109.011 31.429V29.4403V29.4236H110.109C110.247 29.4236 110.384 29.457 110.521 29.5071C110.659 29.5573 110.761 29.6241 110.864 29.7244C110.95 29.8079 111.036 29.9249 111.087 30.0419C111.139 30.1589 111.174 30.2926 111.174 30.4263C111.174 30.56 111.139 30.6937 111.087 30.8106C111.036 30.9444 110.967 31.0446 110.864 31.1282C110.761 31.2285 110.659 31.2954 110.521 31.3455C110.384 31.3956 110.247 31.429 110.092 31.429H109.011Z" fill="#526EFF"/>
            <path d="M117.516 29.4578V33.3551C117.516 33.4221 117.499 33.4722 117.481 33.5224C117.464 33.5726 117.429 33.6228 117.378 33.6562C117.344 33.6896 117.292 33.7231 117.224 33.7399C117.172 33.7566 117.104 33.7733 117.052 33.7733C116.983 33.7733 116.931 33.7566 116.88 33.7399C116.829 33.7231 116.777 33.6896 116.743 33.6562C116.709 33.6228 116.674 33.5726 116.64 33.5224C116.623 33.4722 116.606 33.4053 116.606 33.3551V29.4578H115.369C115.3 29.4578 115.249 29.4411 115.197 29.4244C115.146 29.4076 115.094 29.3741 115.06 29.324C115.026 29.2906 114.991 29.2404 114.957 29.1734C114.94 29.1233 114.923 29.0564 114.923 29.0062C114.923 28.9393 114.94 28.8891 114.957 28.8389C114.974 28.7887 115.009 28.7386 115.06 28.7051C115.094 28.6716 115.146 28.6382 115.197 28.6047C115.249 28.5713 115.318 28.5713 115.369 28.5713H118.769C118.838 28.5713 118.889 28.588 118.941 28.6047C118.992 28.6215 119.044 28.6549 119.078 28.7051C119.112 28.7386 119.146 28.7887 119.181 28.8389C119.199 28.8891 119.216 28.956 119.216 29.0062C119.216 29.0731 119.199 29.1233 119.181 29.1734C119.164 29.2236 119.129 29.2738 119.078 29.3073C119.044 29.3407 118.992 29.3741 118.941 29.4076C118.889 29.4244 118.821 29.4411 118.769 29.4411H117.516V29.4578Z" fill="#526EFF"/>
            <path d="M122.485 33.7733C122.365 33.7566 122.261 33.7231 122.193 33.6395C122.107 33.5559 122.073 33.4555 122.073 33.3384V29.0062C122.073 28.9393 122.09 28.8891 122.107 28.8389C122.124 28.7887 122.159 28.7386 122.21 28.7051C122.244 28.6716 122.296 28.6382 122.347 28.6047C122.399 28.5713 122.468 28.5713 122.519 28.5713H125.439C125.507 28.5713 125.559 28.588 125.61 28.6047C125.661 28.6215 125.713 28.6549 125.747 28.7051C125.781 28.7386 125.816 28.7887 125.851 28.8389C125.868 28.8891 125.885 28.956 125.885 29.0062C125.885 29.0731 125.868 29.1233 125.851 29.1734C125.834 29.2236 125.799 29.2738 125.747 29.3073C125.713 29.3407 125.661 29.3741 125.61 29.4076C125.559 29.4411 125.49 29.4411 125.439 29.4411H122.966V30.6454H124.906C124.975 30.6454 125.026 30.6621 125.078 30.6789C125.129 30.6956 125.181 30.7291 125.215 30.7792C125.249 30.8126 125.284 30.8629 125.318 30.9298C125.335 30.9799 125.352 31.0469 125.352 31.097C125.352 31.1639 125.335 31.2141 125.318 31.2643C125.301 31.3145 125.266 31.3646 125.215 31.3981C125.181 31.4316 125.129 31.465 125.078 31.4817C125.026 31.4985 124.958 31.5152 124.906 31.5152H122.966V32.8701H125.439C125.507 32.8701 125.559 32.8868 125.61 32.9035C125.661 32.9202 125.713 32.9537 125.747 33.0039C125.781 33.0374 125.816 33.0875 125.851 33.1544C125.868 33.2046 125.885 33.2715 125.885 33.3217C125.885 33.4555 125.851 33.5559 125.764 33.6395C125.679 33.7231 125.576 33.7566 125.439 33.7566H122.485V33.7733Z" fill="#526EFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M128.776 28.8387C128.759 28.8888 128.742 28.9389 128.742 29.0058H128.759V33.3509C128.759 33.4011 128.776 33.4679 128.794 33.5181C128.828 33.5682 128.862 33.6184 128.896 33.6518C128.931 33.6852 128.982 33.7186 129.034 33.7353C129.085 33.752 129.136 33.7687 129.205 33.7687C129.256 33.7687 129.325 33.752 129.376 33.7353C129.429 33.7186 129.48 33.6852 129.514 33.6518C129.566 33.6184 129.6 33.5682 129.617 33.5181C129.634 33.4679 129.651 33.4178 129.651 33.3509V32.3482H130.698L131.864 33.6685C131.95 33.752 132.036 33.8021 132.156 33.8021C132.208 33.8021 132.259 33.7854 132.311 33.7687C132.362 33.752 132.396 33.7186 132.448 33.6685C132.499 33.6184 132.534 33.5682 132.551 33.5181C132.568 33.4679 132.585 33.4011 132.585 33.3509C132.585 33.3008 132.568 33.2339 132.551 33.1838C132.534 33.1337 132.499 33.0836 132.448 33.0334L131.676 32.1309C131.83 32.0474 131.984 31.9639 132.104 31.8469C132.225 31.7299 132.345 31.5961 132.431 31.4625C132.516 31.3121 132.585 31.1616 132.636 30.9946C132.688 30.8274 132.705 30.6603 132.705 30.4764C132.705 30.2091 132.654 29.9584 132.551 29.7244C132.448 29.4904 132.311 29.2899 132.121 29.1228C131.933 28.9556 131.727 28.822 131.487 28.7217C131.247 28.6214 130.989 28.5713 130.715 28.5713H129.188C129.136 28.5713 129.068 28.5713 129.016 28.6047C128.965 28.6381 128.914 28.6716 128.879 28.705C128.828 28.7384 128.794 28.7886 128.776 28.8387ZM129.651 31.429V29.4403V29.4236H130.749C130.886 29.4236 131.024 29.457 131.161 29.5071C131.299 29.5573 131.401 29.6241 131.504 29.7244C131.59 29.8079 131.676 29.9249 131.727 30.0419C131.779 30.1589 131.813 30.2926 131.813 30.4263C131.813 30.56 131.779 30.6937 131.727 30.8106C131.676 30.9444 131.607 31.0446 131.504 31.1282C131.401 31.2285 131.299 31.2954 131.161 31.3455C131.024 31.3956 130.886 31.429 130.732 31.429H129.651Z" fill="#526EFF"/>
            <path d="M77.923 33.2748C77.6816 33.2504 77.5087 33.1771 77.4059 33.055C77.3023 32.9329 77.233 32.8108 77.233 32.6643C77.233 32.5178 77.3023 32.3712 77.4402 32.2491C77.578 32.127 77.7852 32.0781 78.0609 32.0781C78.1637 32.0781 78.2673 32.0781 78.4052 32.1026C78.5087 32.127 78.6123 32.1758 78.7159 32.2247C78.8187 32.298 78.888 32.3712 78.9566 32.4933C79.0259 32.6154 79.0602 32.762 79.0602 32.9573C79.0602 33.2992 78.9223 33.6167 78.6466 33.9098C78.3709 34.2028 78.0259 34.4226 77.578 34.5936L77.1987 34.2028C77.4402 34.1051 77.6473 33.9831 77.8194 33.8365C77.9916 33.69 78.1294 33.4946 78.1987 33.2748H77.923Z" fill="#526EFF"/>
        </svg>`;
    }
});

let addCheckedDesk = setInterval(() => {
    if (
        media && 
        !document.querySelector('.exp-update') && 
        (
            document.querySelector('.exp_banner .css-mypapy') || 
            document.querySelector('.exp_banner .css-1h13y3f') ||
            document.querySelector('.exp_banner .css-j8or2w')
        ) &&
        document.querySelector('.banner-last-updated')
    ) {

        let parent = document.querySelector('.exp_banner .css-mypapy') ? '.exp_banner .css-mypapy' : 
                     document.querySelector('.exp_banner .css-j8or2w') ? '.exp_banner .css-j8or2w' :
                     '.exp_banner .css-1h13y3f';

        document.querySelector(parent).insertAdjacentHTML('beforebegin', `
        <div class="exp-update">
            ${
                !window.location.href.includes('/insurance/life/whole-life-insurance/') &&
                !window.location.href.includes('/insurance/life/rates/100-thousand/') ? 
                checked : 
                ''
            }

            <p>${document.querySelector('.banner-last-updated').innerHTML.replace('Last','')}</p>
        </div>`)
    }
})

let breadcrumbsMob = setInterval(() => {
    if (!media && 
        document.querySelector('.breadcrumbs-container') && 
        document.querySelector('.exp_banner > .container > div') &&
        !document.querySelector('.exp_banner .breadcrumbs-container')
    ) {
        document.querySelector('.exp_banner > .container > div').before(document.querySelector('.breadcrumbs-container'));
    }   
});

let init = setInterval(() => {
    if (document.querySelector('.banner-container .banner-grid') &&
        !document.querySelector('.compare_quotes')
    ) {

        document.querySelector('.banner-redesign').insertAdjacentHTML('beforebegin', html);

        document.querySelector('.compare_quotes').before(document.querySelector('.banner-container .banner-grid'))

        isLocation.then(data => {
            document.querySelector('.compare_quotes_form input').value = data.postal;
            document.querySelector('.compare_quotes_form .address').innerHTML = data.region;
        })

        document.querySelector('.compare_quotes_form input').addEventListener('input', (e) => {

            e.target.closest('.compare_quotes').classList.remove('error')

            setTimeout(() => {
                let address = e.target.value;
                document.querySelector('.compare_quotes_form .address').innerHTML = spinner;

                getZipCode(address).then(data => {
                    console.log(data);
                    if (data['results'].length > 0 && address.length == 5) {
                        let addressComponents = data['results'][0]['address_components'];
                        document.querySelector('.compare_quotes_form .address').innerHTML = addressComponents[addressComponents.length - 2]['long_name']
                    } else {
                        document.querySelector('.compare_quotes_form .address').innerHTML = '';
                    }
                })
            }, 200)
        })


        document.querySelector('.compare_quotes_form button').addEventListener('click', (e) => {
            let address = document.querySelector('.compare_quotes_form input').value;

            let href = window.location.href;
            getZipCode(address).then(data => {
                console.log(data);
                if (data['results'].length > 0 && address.length == 5) {
                   
                    e.target.closest('.compare_quotes').classList.remove('error')

                    if (href.includes('/insurance/life/rates/one-million/')) {
                        document.querySelector('.css-9b3y4b .next-btn').click()
                        let findBtn = setInterval(() => {
                            if (document.querySelector('.css-1hw3t4r')) {
                                clearInterval(findBtn)
                                document.querySelector('.css-1hw3t4r').click()
                            }
                        })
                    } else if (href.includes('/insurance/life/rates/100-thousand/')) {
                        document.querySelector('.css-1hw3t4r').click()
                    } else if (
                        href.includes('/insurance/life/best/40-year-olds/') ||
                        href.includes('/insurance/life/best/30-year-olds/') || 
                        href.includes('/insurance/life/best/term/') ||
                        href.includes('/insurance/life/best/50-year-olds/') ||
                        href.includes('/insurance/life/best/universal-life/')
                    ) {
                        document.querySelector('.css-12t4gr6').click()
                    } else if (href.includes('/insurance/life/best/50-year-olds/')) {
                        document.querySelector('.css-ky701d div>button').click()
                    } else if (href.includes('/insurance/life/whole-life-insurance/')) {
                        document.querySelector('.css-1bo2w2p').value = address;
                        document.querySelector('.css-1r2v32i').click();
                    } else if (href.includes('/insurance/life/cheapest/seniors/')) {
                        document.querySelector('.css-1bo2w2p').value = address;
                        document.querySelector('.css-a0bqjq').click();
                    } 

                    let findForm = setInterval(() => {
                        if (document.querySelector('.sh-widget-form .sh-form-element .sh-form-data > .value > input') && 
                            document.querySelector('.sh-widget-form .sh-form-element button.sh-button.shmktpl-submit') &&
                            document.querySelector('.sh-widget-form .sh-form-element .sh-form-data > .value > input').value != address
                        ) {
                            const inputElement = document.querySelector('.sh-widget-form .sh-form-element .sh-form-data > .value > input');
                            inputElement.value = address;
                            inputElement.dispatchEvent(new Event('input', { bubbles: true }));

                            if (!document.querySelector('.exp-input')) {
                                inputElement.insertAdjacentHTML('beforebegin', `<div class="exp-input">${address}</div>`)
                            }

                            inputElement.addEventListener('click', () => {
                                clearInterval(findForm)
                                document.querySelector('.exp-input').classList.add('is-hide');
                            })

                            const btnElement = document.querySelector('.sh-widget-form .sh-form-element button.sh-button.shmktpl-submit');
                            btnElement.addEventListener('click', () => {
                                clearInterval(findForm)
                                document.querySelector('.exp-input').classList.add('is-hide');
                            })

                            document.querySelector('.css-10csyus').addEventListener('click', () => {
                                clearInterval(findForm)
                            })
                            document.body.addEventListener('click', (e) => {
                                if (!e.target.closest('.css-1l59ezn')) {
                                    clearInterval(findForm)
                                }
                            })
                        }
                    })

                } else {
                    e.target.closest('.compare_quotes').classList.add('error')
                }
            })

            pushDataLayer('exp_intr_ban_b_fs_cq', 'Compare Quotes', 'Button','First screen')
        })

        //events
        document.querySelector('.compare_quotes_form input').addEventListener('click', () => {
            pushDataLayer('exp_intr_ban_i_fs_eyzc', 'Enter your zip code', 'Input','First screen')
        })

        handleVisibility(media ? '.exp_banner .banner-authorship' : '.exp_banner .css-bco1gb')
        handleVisibility('.exp_banner .banner-description p')
        handleVisibility('.compare_quotes')
        handleVisibility('.exp_banner > .container > img')
        
        window.addEventListener('scroll', () => {
            handleVisibility(media ? '.banner-authorship' : '.css-bco1gb')
            handleVisibility('.banner-description p')
            handleVisibility('.compare_quotes')
            handleVisibility('.exp_banner > .container > img')
        })

        setTimeout(() => {
            if (document.querySelector('.exp-loading')) {
                document.querySelector('.exp-loading').remove()
            }
        }, 500)
    }
})


//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "exp_intr_ban", "variant_1");
    }
}, 100)
