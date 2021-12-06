let style = `
<style>
    .align-items-center {
        display: flex;
        align-items: center;
    }
    .sleep-impediments {
        padding: 50px 0 40px;
        max-width: 886px;
        margin: 0 auto;
    }
    .sleep-impediments h2 {
        margin-bottom: 59px;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        color: #000000;
        text-align: center;
    }
    .sleep-impediments button {
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
    .sleep-impediments button:nth-child(2n+2) {
        margin-right: 0;
    }
    .sleep-impediments .span {
        display: block;
    }
    .sleep-impediments .content {
        min-height: 85px;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
    }
    .sleep-impediments .title {
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        text-transform: uppercase;
        color: #1E415F;
        margin: 0;
    }
    .sleep-impediments .span {
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
</style>`

let arr = [
    {
        iconSrc: 'https://conversionratestore.github.io/projects/somnifix/img/snoring.svg',
        title: 'Reduce<br> snoring'
    },
    {
        iconSrc: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-1.svg',
        title: 'Dry mouth'
    },
    {
        iconSrc: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-2.svg',
        title: 'poor sleep<br> quality'
    },
    {
        iconSrc: 'https://conversionratestore.github.io/projects/somnifix/img/snoring-3.svg',
        title: 'Increase CPAP<br> Compliance'
    }
]

let createWrapper = `
<div class="sleep-impediments">
    <h2>How to address your sleep impediments</h2>
    <div class="shg-row"></div>
</div>
`

function createBtns(iconSrc,title) {
    let createElementButtons = `
        <button type="button">
            <span class="align-items-center">
                <img class="img_snoring" src="${iconSrc}" alt="icon">
                <span class="content">
                    <span class="title">${title}</span>
                    <span class="span">Tap to learn more</span>
                </span>
            </span>
            <img class="img_arrow" src="https://conversionratestore.github.io/projects/somnifix/img/arrow-right.svg" alt="icon arrow">
        </button>
    `
    return createElementButtons
}


let createElementContent = ``;

document.body.insertAdjacentHTML('afterbegin', style);

document.querySelectorAll('.shg-box-vertical-align-wrapper')[0].insertAdjacentHTML('afterend', createWrapper);

for (let i = 0; i < arr.length; i++) {
    document.querySelector('.sleep-impediments .shg-row').insertAdjacentHTML('beforeend', createBtns(arr[i]["iconSrc"],arr[i]["title"]));
}
