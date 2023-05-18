let dir = 'https://conversionratestore.github.io/projects/moneygeek/img/'

let style = `
<style>
    #stickywidgetbutton {
        color: #292929!important;
        background-color: #FFD35A!important;
    }
    header.site-header {
        height: auto;
        padding: 17px 20px;
    }
    .css-1lno5h0 {
        padding: 0 20px 20px;
        border: none;
    }
    .css-p0twtd {
        height: auto;
    }
    header [aria-label="MoneyGeek"] svg {
        max-width: 167px;
    }
    .css-1ov3s65 {
        margin-left: 55px;
    }
    .css-1ov3s65:hover .css-vgxujl svg {
        transform: scaleY(-1);
    }
    .css-vgxujl {
        font-family: 'Brandon Grotesque';
        font-style: normal;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: 0.882353px;
        text-transform: uppercase;
        color: #292929;
        padding: 0;
        display: flex;
        align-items: center;
    }
    .css-vgxujl svg {
        margin-left: 6px;
        transition: all 0.3s ease;
    }
    .banner-container {
        background: #F6F8FF;
        padding: 15px 0 20px;
        color: #292929;
    }
    .css-9ctqre {
        background-color: transparent;
    }
    .banner-widget {
        color: #fff;
    }
    a.css-fpvtpr {
        text-decoration-line: underline;
    }
    .css-syhbcg {
        -webkit-margin-start: 3px;
        margin-inline-start: 3px;
        -webkit-margin-end: 3px;
        margin-inline-end: 3px;
    }
    .item-review .banner-link > .css-k008qs, .css-1lno5h0 li:first-child, .css-mljoh, .css-x3wokz, .banner-authorship, .css-k008qs .css-c0gtt0, .item-review .css-c0gtt0, .banner-last-updated, .banner-contribution .css-1k9efnl svg {
        display: none!important;
    }
    .css-1uguvmx {
        background: #526EFF!important;
        border-radius: 6px!important;
        color: #fff!important;
        padding: 0!important;
    }
    .banner-widget .css-amzw5g {
        padding: 30px 30px 20px;
        height: auto;
    }
    .banner-widget .css-xi606m {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 12px;
    }
    .banner-widget .css-amzw5g h3 {
        font-family: 'Brandon Grotesque';
        font-style: normal;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        line-height: 30px;
        margin-bottom: 10px;
    }
    .banner-widget .css-1chw4q3 {
        font-weight: 700;
        font-size: 15px;
        line-height: 16px;
    }
    .banner-widget .css-18uwl6q, .banner-widget .css-1hx7vxy, .banner-widget .css-13n4h {
        height: 50px;
    }
    .banner-widget .css-18uwl6q {
        font-size: 18px;
        color: #292929;
    }
    .banner-widget .css-13n4h {
        font-weight: 400;
        font-size: 18px;
        text-align: right;
        padding-right: 10px;
    }
    .banner-widget .css-1ga36kt {
        font-family: 'Brandon Grotesque';
        font-size: 16px;
        line-height: 22px;
        text-transform: uppercase;
        color: #292929!important;
        height: 50px;
        background: #FFD35A!important;
        border-radius: 6px;
     }
    .banner-widget .css-1jdy22u {
         padding: 0 0 20px 0;
    }
    .content-wrapper.banner-redesign .banner-components {
        flex-direction: column!important;
    }
    .footer-widget {
        background: #485DDC;
        font-family: 'Open Sans';
        padding: 15px!important;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px 0px 6px 6px; 
        font-size: 13px;
        line-height: 16px;
    }
    .footer-widget svg {
        margin-right: 5px;
    }
    .css-11h5ku {
        padding-bottom: 20px;
        font-family: 'Brandon Grotesque';
        font-style: normal;
        font-size: 60px;
        line-height: 70px;
    }
    .info_block {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #292929;
        margin-bottom: 20px;
    }

    .info_block .banner-link, .banner-advertising .css-195f0y4 {
        color: #526EFF;
        text-decoration-line: underline;
        cursor: pointer;
    }
    .info_block .css-k008qs b {
        font-weight: 400;
    }
    .info_block .css-k008qs:not([aria-haspopup="dialog"]), .banner-contribution .css-1k9efnl, .banner-advertising, .item-review.isReview {
        margin-bottom: 15px;
    } 
    .item-review {
        position: relative;
    }
    .item-review > .css-k008qs:not([aria-haspopup="dialog"]) {
        position: absolute;
        top: 0;
        height: 100%;
        right: 0;
        width: 200px;
        pointer-events: none;
        opacity: 0;
    }
    .info_block .css-1t0181o {
        gap: initial;
    }
    .by-item + .css-k008qs, .css-1t0181o > .css-k008qs, .banner-advertising, .css-1ciy9pg a {
        padding-left: 24px;
        position: relative;
        width: fit-content;
        outline: none;
    }
    .css-1ciy9pg a:hover {
        background-color: transparent!important;
    }
    .fact-checked {
        border: 1px solid #292929;
        border-radius: 22px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 21px;
        color: #292929;
        padding: 0 11px;
        margin-right: 5px;
    }
    .fact-checked svg {
        margin-right: 6px;
    }
    .css-1ciy9pg a {
        font-weight: 400;
        text-decoration-line: none;
        color: #292929!important;
    }
    .footer_section p {
        font-size: 18px;
        line-height: 28px;
        margin: 0;
        color: #292929;
        padding-right: 20px;
    }
    .footer_section {
        padding-top: 20px;
    }
    .css-1qq679y {
        top: 20px!important;
    }
    /* font */
    .fw-bold {
        font-weight: 700;
    }
    .text-nowrap {
        white-space: nowrap;
    }
    .text-center {
        text-align: center;
    }
    /* flex */
    .flex {
        display: flex;
    }
    .flex-inline {
        display: inline-flex;
    }
    .items-center {
        align-items: center;
    }
    .justify-between {
        justify-content: space-between;
    }
    .flex-wrap {
        flex-wrap: wrap;
    }

    .w-100 {
        width: 100%;
    }
    .ml-4 {
        margin-left: 4px;
    }

    @media screen and (min-width: 768px) {
        .flex-md  {
            display: flex;
        }
        .text-md-left {
            text-align: left;
        }

        .css-1ee0r0h {
            margin-right: -11px;
            margin-left: 45px;
        }
        .css-1lno5h0, header.site-header, .css-2ops0h, .footer_section {
            max-width: 1320px;
            margin: 0 auto;
            padding-right: 20px;
            padding-left: 20px;
        }

        .css-2ops0h {
            grid-template-columns: 400px auto;
            grid-gap: 0;
        }

        .banner-widget {
            margin-right: 50px;
        }

        .by-item + .css-k008qs:before, .css-1ciy9pg a:before, .css-1t0181o > .css-k008qs:before, .banner-advertising:before {
            content: '';
            position: absolute;
            left: 10px;
            top: 7px;
            border-radius: 50%;
            width: 4px;
            height: 4px;
            background: #292929;
        }
    }
    @media screen and (max-width: 767px) {
        .css-13tllwe {
            min-width: auto!important;
        }
        .css-1qq679y {
            top: 10px!important;
        }
        .css-11h5ku {
            font-family: 'Brandon Grotesque';
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 30px;
            margin-bottom: 10px;
            padding: 0;
        }
        header.site-header {
            padding: 6px 5px;
        }
        .breadcrumbs-container {
            display: block!important;
        }
        .breadcrumbs-container li:last-child, .breadcrumbs-container .breadcrumb-separator, .breadcrumbs-container li:nth-last-child(2) span {
            display: none;
        }
        .banner-container {
            padding: 80px 16px 16px;
        }
        .css-1lno5h0 {
            padding: 0 0 20px 0;
            border: none;
        }
        .content-wrapper.banner-redesign .breadcrumbs-container .breadcrumbs {
            padding-left: 0!important;
        }
        .banner-components .css-2ops0h {
            grid-gap: initial;
            display: block;
        }
        .footer_section p {
            padding: 0;
        }
        .footer_section img {
            margin: 20px auto 0;
        }
        .info_block {
            padding: 22px 20px 0;
            position: relative;
            margin-bottom: 0;
            font-size: 14px;
        }
        .css-195f0y4 {
            font-size: 14px;
        }
        .fact-checked {
            position: absolute;
            top: 20px;
            right: 15px;
        }
        .item-review.isReview, .css-1k9efnl a, .by-item + .css-k008qs, .css-1t0181o > .css-k008qs, .banner-advertising, .css-1ciy9pg a {
            position: relative;
            padding-left: 21px;
            background: url('${dir}checkbox.svg') no-repeat left center / 14px;
            font-weight: 400;
        }
        .info_block .css-k008qs:not([aria-haspopup="dialog"]), .banner-contribution .css-1k9efnl, .banner-advertising, .item-review.isReview {
            margin-bottom: 10px;
            width: fit-content;
        }
        .info_block > .flex-md > .fw-bold {
            font-size: 13px;
            margin-bottom: 12.5px;
        }
        .css-p0twtd {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }
        .css-1tz4s6g {
            min-height: auto!important;
        }
        .css-86e6ef {
            display: none!important;
        }
        .css-1gtqflt, .css-kuk5vd, .info_block .css-1t0181o {
            display: block!important;
        }
    }
</style>`

let mounth = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

let dateFind = setInterval(() => {
    if (document.querySelector('.banner-last-updated') != null && document.querySelector('.by-item') != null && document.querySelector('.info_block > div > .fw-bold') == null) {
        let date = document.querySelector('.banner-last-updated').innerText.split(':')[1],
            mounthDate = mounth[+date.split('/')[0] - 1],
            dayDate = date.split('/')[1],
            yearDate = date.split('/')[2];

        document.querySelector('.info_block .by-item').insertAdjacentHTML('beforebegin',`<div class="fw-bold" style="margin-bottom: 15px;">Updated: ${mounthDate}. ${dayDate}, ${yearDate}</div> `)
    }
});

let byFind = setInterval(() => {
    if (document.querySelector('.banner-authorship .css-1t0181o:not(.banner-contribution)  > .css-k008qs') != null && document.querySelector('.item-edited') != null && document.querySelector('.item-review') != null && document.querySelector('.info_block .by-item + .css-k008qs') == null) {
        
        document.querySelectorAll('.banner-authorship .css-1t0181o:not(.banner-contribution) > .css-k008qs').forEach((item, index) => {
            if (item.querySelector('b') != null && item.querySelector('b').innerHTML == 'By') {
                document.querySelector('.by-item').after(item)
                if (!window.matchMedia("(max-width: 767px)").matches) {
                    item.insertAdjacentHTML('beforeend',`, Insurance Analyst`)
                }
            } else if (item.innerHTML.includes('Reviewed By')) {

                let wordAfterQuot = item.innerHTML.split(',')[1];
                let factCheckedHTML = `
                <div class="fact-checked flex items-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40777 0.180441C7.25108 0.0507866 7.0476 -0.0132926 6.84211 0.00230287C6.63661 0.0178983 6.44593 0.111891 6.31203 0.263598L2.96586 4.05321L1.16542 2.59796C0.864304 2.35475 0.416605 2.39354 0.1649 2.68466C0.0442881 2.8244 -0.0140056 3.00481 0.00285551 3.18617C0.0197166 3.36753 0.11035 3.53497 0.254797 3.65161L2.66737 5.60161C2.81785 5.72306 3.01373 5.77846 3.20808 5.75455C3.41391 5.73922 3.60495 5.64515 3.73897 5.49315L7.49367 1.24069C7.77246 0.924854 7.73401 0.450358 7.40777 0.180441Z" fill="#292929"/>
                    </svg>
                    Fact Checked
                </div>`;
                document.querySelector('.item-review').classList.add('isReview')
                if (window.matchMedia("(max-width: 767px)").matches) {
                    document.querySelector('.info_block').insertAdjacentHTML('afterbegin', factCheckedHTML)
                    document.querySelector('.item-review').innerHTML = item.innerHTML.replace(wordAfterQuot, '').replace(',','')
                } else {
                    document.querySelector('.item-review').innerHTML = ` 
                    ${factCheckedHTML}
                    ${item.innerHTML.replace('Reviewed By','by Licensed Insurance Agent').replace(wordAfterQuot, '').replace(',','')}`;
                }

                document.querySelector('.item-review [aria-haspopup="dialog"]').before(item)

                document.querySelectorAll('.item-review .banner-link')[1].addEventListener('click', (e) => {
                    document.querySelectorAll('.item-review .banner-link')[0].click()
                })
            }
        })
    }
});

let bannerContributionFind = setInterval(() => {
    if (document.querySelector('.item-edited') != null && document.querySelector('.banner-contribution') != null && document.querySelector('.info_block .banner-contribution') == null) {
        document.querySelector('.item-edited').after(document.querySelector('.banner-contribution'))
    }
});

let bannerAdvertisingFind = setInterval(() => {
    if (document.querySelector('.item-advertising') != null && document.querySelector('.banner-advertising ') != null && document.querySelector('.info_block .banner-advertising') == null) {
        document.querySelector('.item-advertising').after(document.querySelector('.banner-advertising'))
    }
})

let breadcrumbFind = setInterval(() => {
    if (document.querySelector('.breadcrumbs-container') != null && document.querySelector('.banner-grid') != null && document.querySelector('.banner-container .breadcrumbs') == null) {
        document.querySelector('.banner-grid').before(document.querySelector('.breadcrumbs-container'))
    }
})

let formFind = setInterval(() => {
    if (document.querySelector('#stickywidgetbutton') != null && document.querySelector('.banner-widget .css-xi606m') != null && document.querySelector('.footer-widget') == null) {

        let title = `Compare Rates and <span class="text-nowrap">Save On Auto</span> Insurance`;

        if (document.querySelector('.banner-widget h4') != null) {
            document.querySelector('.banner-widget h4').innerHTML = title;
        } else {
            if (document.querySelector('.banner-widget h3') == null) {
                document.querySelector('.banner-widget .css-xi606m').insertAdjacentHTML('beforebegin',`<h3>${title}</h3>`)
            }
        }

        document.querySelector('.banner-widget .css-1chw4q3').innerHTML = 'Enter Your Zip Code';
        document.querySelector('.banner-widget .css-1ga36kt').innerHTML = 'Get Started';
        document.querySelector('#stickywidgetbutton').innerHTML = 'Get Started';

        document.querySelector('.banner-widget .css-1hx7vxy').innerHTML = `
            <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49009 4.97238C6.10949 4.97238 4.9903 6.09167 4.9903 7.47238C4.9903 8.85309 6.10949 9.97238 7.49009 9.97238C8.87069 9.97238 9.98989 8.85309 9.98989 7.47238C9.98806 6.09243 8.86993 4.97422 7.49009 4.97238ZM7.49121 8.72242C6.98567 8.72242 6.52991 8.41787 6.33645 7.95077C6.14299 7.48368 6.24993 6.94603 6.6074 6.58853C6.96486 6.23104 7.50247 6.12409 7.96953 6.31757C8.43658 6.51104 8.74111 6.96684 8.74111 7.47242C8.74019 8.16239 8.18113 8.7215 7.49121 8.72242Z" fill="#526EFF"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.246 6.76311C13.8768 3.32727 10.9929 0.674774 7.489 0.674774C4.99098 0.674415 2.69428 2.0451 1.50854 4.24393C0.322797 6.44277 0.439321 9.11502 1.81196 11.2023L1.79613 11.1764L6.51908 18.4273C6.73242 18.7537 7.09566 18.9508 7.48557 18.9518C7.87548 18.9528 8.23973 18.7576 8.45476 18.4323L8.45726 18.4281L13.1802 11.1773C13.902 10.0736 14.2846 8.78268 14.281 7.46394C14.281 7.21728 14.2676 6.97394 14.2426 6.73394L14.2451 6.76394L14.246 6.76311ZM12.1328 10.4941L7.48819 17.6249L2.84356 10.4941C1.4237 8.29598 1.72535 5.40577 3.5685 3.54827C4.57175 2.54494 5.95748 1.9241 7.48819 1.9241C9.0189 1.9241 10.4046 2.54494 11.4079 3.54827C13.251 5.40577 13.5527 8.29598 12.1328 10.4941Z" fill="#1F1B50"/>
            </svg>`;

            document.querySelector('.css-amzw5g').insertAdjacentHTML('afterend',`
            <div class="footer-widget">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2626 0.934692L14.7482 0.815571L14.6547 0.434692H14.2626V0.934692ZM8.04034 14.929L7.93537 15.4178L8.0571 15.444L8.17688 15.4099L8.04034 14.929ZM1.81812 0.934692V0.434692H1.44238L1.33785 0.795597L1.81812 0.934692ZM13.777 1.05381C14.7506 5.0231 14.7218 8.00064 13.8057 10.0611L14.7194 10.4673C15.7698 8.10493 15.741 4.8628 14.7482 0.815571L13.777 1.05381ZM13.8057 10.0611C12.9024 12.0927 10.9802 13.5747 7.9038 14.448L8.17688 15.4099C11.4303 14.4864 13.6563 12.8585 14.7194 10.4673L13.8057 10.0611ZM8.14531 14.4401C5.21486 13.8108 3.2896 12.343 2.27499 10.0611L1.36124 10.4673C2.52827 13.0921 4.75117 14.7341 7.93537 15.4178L8.14531 14.4401ZM2.27499 10.0611C1.2499 7.75555 1.22564 4.77767 2.29838 1.07379L1.33785 0.795597C0.228947 4.62437 0.204689 7.86616 1.36124 10.4673L2.27499 10.0611ZM1.81812 1.43469H14.2626V0.434692H1.81812V1.43469Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.775 5.4132C10.6531 5.3124 10.4948 5.26258 10.335 5.27471C10.1752 5.28683 10.0269 5.35991 9.92272 5.47786L7.32015 8.42412L5.9198 7.29273C5.6856 7.10364 5.33739 7.1338 5.14162 7.36013C5.04781 7.46877 5.00247 7.60903 5.01559 7.75003C5.0287 7.89103 5.09919 8.02121 5.21154 8.11189L7.08799 9.62794C7.20503 9.72236 7.35738 9.76543 7.50854 9.74684C7.66863 9.73492 7.81722 9.66179 7.92146 9.54362L10.8418 6.23751C11.0586 5.99195 11.0287 5.6228 10.775 5.41295" fill="white"/>
                </svg>
                Free and simple -  your information is secure
            </div>`)
        
    }
})

let headerFind = setInterval(() => {
    if (document.querySelectorAll('.css-86e6ef .css-vgxujl') && document.querySelector('.css-86e6ef .css-vgxujl svg') == null) {
        document.querySelectorAll('.css-86e6ef .css-vgxujl').forEach(item => {
            item.insertAdjacentHTML('beforeend',`
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46669 0.533325C9.13335 0.199992 8.66669 0.199992 8.33335 0.533325L4.93335 3.93333L1.53335 0.533325C1.20002 0.199992 0.733354 0.199992 0.400021 0.533325C0.0666866 0.866659 0.0666866 1.33333 0.400021 1.66666L4.86669 6.13333L9.46669 1.66666C9.73335 1.39999 9.73335 0.866659 9.46669 0.533325Z" fill="#292929"/>
                </svg>
            `)
        })
    }
});

let descriptionFind = setInterval(() => {
    if (document.querySelector('.info_block') == null && document.querySelector('.banner-description') != null &&  document.querySelector('.banner-container') != null) {
        let infoBlockHTML = `
        <div class="info_block">
            <div class="flex-md items-center">
                <div class="by-item"></div>
            </div>
            <div class="flex-md flex-wrap items-center">
                <div class="item-review flex items-center"></div>
                <div class="item-edited"></div>
                <div class="item-advertising"></div>
            </div>
        </div>`
    
    
        if (window.matchMedia("(max-width: 767px)").matches) {
            document.querySelector('.banner-container').insertAdjacentHTML('afterend', infoBlockHTML)
        } else {
            document.querySelector('.banner-description').insertAdjacentHTML('afterbegin', infoBlockHTML)
        }
        
    } 
});

let addFooter = setInterval(() => {
    if (document.querySelector('.css-2ops0h') != null && document.querySelector('.footer_section') == null) {
        document.querySelector('.css-2ops0h').insertAdjacentHTML('afterend',`
        <div class="flex-md justify-between items-center footer_section">
            <p class="text-md-left text-center">Select from a variety of trusted carriers and save on auto insurance</p>
            <img src="${dir}${window.matchMedia("(max-width: 767px)").matches ? 'logos-mob':'logos'}.svg" alt="logos">
        </div>`)
    }
})

let addStyle = setInterval(() => {
    if (document.body != null) {
        clearInterval(addStyle)

        document.head.insertAdjacentHTML('beforeend',`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet">`)

        document.body.insertAdjacentHTML('afterbegin', style)

        document.querySelector('.loading-exp') != null ? document.querySelector('.loading-exp').remove() : '';
    }
})