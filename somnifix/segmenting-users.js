let style = `
<style>
    .align-items-center {
        display: flex;
        align-items: center;
    }
    .sleep_impediments {
        background: url('https://conversionratestore.github.io/projects/somnifix/img/bg.svg') no-repeat center bottom / 100%;
        padding: 50px 0 40px;
    }
    .sleep_impediments .container {
        max-width: 886px;
        margin: 0 auto;
    }
    .sleep_impediments h2 {
        margin-bottom: 59px;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        color: #000000;
        text-align: center;
        width: 100%;
    }
    .sleep_impediments button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #F8F8F8;
        border-radius: 10px;
        padding: 27px 20px 27px 30px;
        width: calc(50% - 10px);
        margin: 0 20px 20px 0;
        font-family: 'Rubik', sans-serif;
        border: none;
    }
    .sleep_impediments button:nth-child(2n+2) {
        margin-right: 0;
    }
    .sleep_impediments .span {
        display: block;
    }
    .sleep_impediments .content {
        min-height: 85px;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
    }
    .sleep_impediments .title {
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        text-transform: uppercase;
        color: #1E415F;
        margin: 0;
    }
    .sleep_impediments .span {
        font-size: 14px;
        line-height: 16px;
        margin-top: 7px; 
        color: #414B56;
        text-transform: initial;
    }
    .img_snoring {
        width: 85px;
        height: 85px;
        margin-right: 30px;
    }
    .img_arrow {
        margin-left: 25px
    }
    .get_somnifix {
        background: #FFFFFF;
        border-radius: 15px;
        padding: 30px 20px;
        text-align: center;
    }
    .get_somnifix p {
        font-size: 16px;
        line-height: 19px;
        color: #808080;
        margin: 15px 0 12px
    }
    .get_somnifix h3 {
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        color: #414B56;
    }
    .btn_buy {
        background: #1E415F;
        border-radius: 76px;
        max-width: 307px;
        width: 100%; 
        border: 1px solid #1E415F;
        font-weight: bold;
        font-size: 16px;
        line-height: 65px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin: 28px auto 0;
    }
    .btn_buy:hover {
        border-color: #414b56;
    }
    .sleep_issue_item {
        display: none;
    }
    .sleep_issue {
        max-width: 1360px;
        margin: 40px auto;
        width: calc(100% - 20px)
    }
    .sleep_issue * {
        font-family: "Rubik", sans-serif;
    }

    .sleep_issue_item:nth-child(1) {
        display: block;
    }
    .btn-close {
        background: none;
        border: none;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #1E415F;
    }
    .btn-close img {
        margin-left: 10px;
    }
    .tabsNav {
        display: flex;
        align-items: center;
        overflow-x: auto;
    }
    .tabsNav li {
        font-family: 'Roboto', sans-serif;
        background: rgba(231, 244, 247, 0.3);
        border: 2px solid #E7F4F7;
        border-radius: 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #414B56;
        padding: 8px 30px;
        height: fit-content;
        margin: 0 20px 0 0;
    }
    .tabsNav li.active {
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        padding: 20px 30px;
        border-radius: 10px 10px 0 0;
        background: #E7F4F7;
    }
    .line_dashed {
        margin-bottom: 70px;
    }
    .item_row h3 {
        margin-bottom: 15px
    }
    .sleep_issue_contents {
        background: url('https://conversionratestore.github.io/projects/somnifix/img/content/bg-content.svg') no-repeat center / cover;
        padding: 70px;
    }
    .flex-center-between {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media only screen and (min-width: 768px) {
        .mb-md-25 {
            margin-bottom: 25px!important;
        }
    }
</style>`

let arr = [
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring.svg',
        nameBtn: 'Reduce snoring',
        titleContent: 'SLEEP SOUNDLY. WITHOUT MAKING A SOUND.',
        spanContent: 'Don’t let your snoring ruin your sleep...and your partner’s too.',
        titleGet: `This is not a dream. <br> Silent, comfortable sleep is within reach.`,
        spanGet: `Join over 100,000 happy SomniFix users who sleep silently, comfortably, and restfully each and every night.`,
    },
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-1.svg',
        nameBtn: 'Dry mouth',
        titleContent: 'Shut. Your. Mouth.',
        spanContent: 'The key to a more healthful life is simple: close your mouth, and breathe through your nose.',
        titleGet: `Stop mouth breathing today.`,
        spanGet: ``,
    },
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-2.svg',
        nameBtn: 'poor sleep quality',
        titleContent: `LET'S TALK ABOUT YOUR BREATHING`,
        spanContent: 'Uncover how to optimize your breathing for more energy and better health.',
        titleGet: `Take the first step to reversing overbreathing`,
        spanGet: `Join over 100,000 SomniFix users who sleep well, wake up rested and live optimally.`,
    },
    {
        iconSrcBtn: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-3.svg',
        nameBtn: 'Increase CPAP Compliance',
        titleContent: `FINALLY, A GOOD NIGHT'S SLEEP WITH A CPAP MACHINE`,
        spanContent: 'Experience true CPAP compliance and your best sleep ever.',
        titleGet: `Whatever you do, don’t CPAP without SomniFix.`,
        spanGet: `Join Steve and thousands more happy CPAP + SomniFix users who sleep well, wake up rested and live optimally.`,
    }
]

let createWrapperBtns = `
<div class="sleep_impediments">
    <div class="container">
        <h2>How to address your sleep impediments</h2>
        <div class="shg-row"></div>
    </div>
</div>
`
let createWrapper = `
    <div class="sleep_issue">
        <div class="flex-center-between">
            <ul class="tabsNav"></ul>
            <button type="button" class="btn-close">Close <img src="https://conversionratestore.github.io/projects/somnifix/img/close-dark.svg"></button>
        </div>
        <div class="sleep_issue_contents"></div>
    </div>
`
function createBtns(iconSrcBtn,nameBtn) {
    return `<button type="button">
                <span class="align-items-center">
                    <img class="img_snoring" src="${iconSrcBtn}" alt="icon">
                    <span class="content">
                        <span class="title">${nameBtn}</span>
                        <span class="span">Tap to learn more</span>
                    </span>
                </span>
                <img class="img_arrow" src="https://conversionratestore.github.io/projects/somnifix/img/arrow-right.svg" alt="icon arrow">
            </button>`
}

function createTabs(tab) {
    return `<li>${tab}</li>`
}

function createItemsContents(titleContent,spanContent,titleGet,spanGet) {
    return `
        <div class="sleep_issue_item">
            <h2>${titleContent}</h2>
            <p>${spanContent}</p>

            <div class="get_somnifix">
                <h3>${titleGet}</h3>
                <p>${spanGet}</p>
                <button type="button" class="btn_buy">Buy Somnifix</button>
            </div>
        </div>
    `
}

let items = [ `
    <div class="item_row">
        <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-1.png" alt="image" class="img_content">
        <div class="col_content">
            <h3 class="mb-md-25"> Mouth Breathing: The Leading Cause of Snoring</h3>
            <p class="w-bold">Many people are surprised to learn that over 90% of snoring can be attributed to one, simple culprit: mouth breathing.</p>
            <p>When you mouth breathe, the inhaled air causes the relaxed tissues in your mouth to vibrate as it passes through. This vibration results in that familiar, embarrassing sound that we know as snoring. However, it doesn’t have to be that way. By breathing through yournose instead, air passes through to the lungs easily and silently.</p>
        </div>
    </div>
    <div class="item_row">
        <div class="col_content">
            <h3 class="mb-md-25">Why Snoring Should be a Concern</h3>
            <p class="w-bold">Snoring isn't just embarrassing for the snorer and extremely annoying for your partner, it actually has significant health implications. Sleep fragmentation caused by snoring can lead to problems such as:</p>
            <ul class="list">
                <li>Reduced physical & cognitive ability</li>
                <li>Daytime sleepiness</li>
                <li>Impatience, irritability, and aggressiveness</li>
                <li>Difficulty concentrating</li>
                <li>Increased risk of high blood pressure, heart conditions, and stroke</li>
            </ul>
        </div>
        <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-2.png" alt="image" class="img_content">
    </div>
    <img src="https://conversionratestore.github.io/projects/somnifix/img/line-dashed.png" alt="line dashed" class="line_dashed">
    <h3>How do SomniFix Strips Work?</h3>
    <p>The key to getting high-quality, silent sleep is simple. Close your mouth, and breathe through your nose. SomniFix Strips make that easy.</p>
    <div class="row">
        <div class="row_col">
            <h4 class="">With SomniFix</h4>
            <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-2.png" alt="image">
            <p>With SomniFix® Strips, the mouth remains closed during sleep. With the mouth closed, the tongue rests against the roof of the mouth and the jaw does not drop, leaving a clear passage in the respiratory airway for breathing.</p>
        </div>
        <div class="row_col">
            <h4 class="">Without SomniFix</h4>
            <img src="https://conversionratestore.github.io/projects/somnifix/img/content/image-4.png" alt="image">
            <p>During sleep, the mouth falls open, the jaw drops, and the tongue falls backwards. This creates an obstacle at the top of the airway that disrupts nose breathing, leading to mouth breathing, open-mouth snoring, and CPAP non-compliance.</p>
        </div>
    </div>
`,
]

document.body.insertAdjacentHTML('afterbegin', style); //add style

document.querySelectorAll('.shg-box-vertical-align-wrapper')[0].insertAdjacentHTML('afterend', createWrapperBtns); //add wrapper btns
document.querySelectorAll('.shg-box-vertical-align-wrapper')[0].insertAdjacentHTML('afterend', createWrapper); //add contents

for (let i = 0; i < arr.length; i++) {
    document.querySelector('.sleep_impediments .shg-row').insertAdjacentHTML('beforeend', createBtns(arr[i]["iconSrcBtn"],arr[i]["nameBtn"]));  //add 4 btns
    document.querySelector('.sleep_issue_contents').insertAdjacentHTML('beforeend', createItemsContents(arr[i]["titleContent"],arr[i]["spanContent"],arr[i]["titleGet"],arr[i]["spanGet"])); //add 4 items in contents
    document.querySelector('.tabsNav').insertAdjacentHTML('beforeend', createTabs(arr[i]["nameBtn"])); //add 4 tab 
    document.querySelector('.get_somnifix').insertAdjacentHTML('beforebegin', items[i]); //add 4 content in items
    // document.querySelector('.sleep_issue_contents')
}
