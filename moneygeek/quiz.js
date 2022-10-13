let style = `
<style>
    /*quiz*/
    .quiz {
        background: #FFFFFF;
        border: 1px solid #D3D4D6;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.26);
        border-radius: 6px;
        padding: 32px 20px;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #555555;
    }
    .btn-back {
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #526EFF;
        border: none;
        background: transparent;
    }
    .btn-back svg {
        margin-right: 7px;
    }
    .quiz-back[href="#none"] {
        display: none!important;
    }
    .quiz h2 {
        font-family: 'Brandon Grotesque', sans-serif;
        font-style: normal;
        font-weight: 450;
        font-size: 28px;
        line-height: 34px;
        text-transform: capitalize;
        color: #555555;
        margin: 16px 0 4px;
    }
    .quiz p {
        margin: 0;
    }
    .btn-next {
        background: #526EFF;
        border-radius: 6px;
        height: 56px;
        width: 100%;
        border: none;
        margin-top: 12px;
        color: #fff;
    }
    .btn-next svg {
        margin-left: 7px;
    }
    .step-count {
        font-size: 16px;
        line-height: 150%;
        color: rgba(85, 85, 85, 1);
    }
    .step-count span {
        font-weight: 700;
        color: rgba(82, 110, 255, 1);
    }
    .anonymous {
        background: #F6F6F6;
        border-radius: 2px;
        padding: 10px 12px;
        font-size: 14px;
        margin: 8px 0 16px;
    }
    .anonymous svg {
        margin-right: 10px;
    }
    .quiz label {
        font-family: 'Brandon Grotesque', sans-serif;
        font-weight: 450;
        line-height: 24px;
        margin-bottom: 4px;
    }
    .quiz input, .select-item {
        background: #FFFFFF;
        border: 1px solid #D3D4D6;
        border-radius: 4px;
        font-size: 16px;
        line-height: 26px;
        width: 100%;
        padding: 10px 12px;
        margin: 0;
    }

    .select-item {
        position: relative;
    }
    .select-item:after {
        content: '';
        position: absolute;
        top: 0;
        right: 12px;
        width: 12px;
        height: 100%;
        background: url("https://conversionratestore.github.io/projects/moneygeek/img/arr_down.svg") no-repeat center / 100%;
        transition: all 0.2s ease;
    }
    .select.active .select-item:after {
        transform: scaleY(-1);
    }
    .select.active .select-drop {
        height: 133px;
        padding: 4px 0;
        opacity: 1;
        pointer-events: auto;
    }
    .select-drop {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        background: #FFFFFF;
        border: 1px solid #D3D4D6;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        z-index: 5;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
        list-style-type: none;
        width: 100%;
        margin: 0;
    }
    .select-drop > div {
        padding: 8px 12px;
        line-height: 26px;
        color: #333333;
    }
    .select-drop > div.active {
        background: #526EFF;
        color: #fff;
    }
    .quiz input::-webkit-input-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4;}
    .quiz input:-moz-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4; }
    .quiz input::-moz-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4;}
    .quiz input:-ms-input-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4; }
    .error-message {
        font-size: 12px;
        line-height: 18px;
        color: #FF0000;
        display: none;
        margin-top: 4px;
    }
    .error input {
        border-color: #FF0000!important;
    }
    .error .error-message {
        display: block;
    }
    input.input-cash {
        padding-left: 25px;
    }
    .currency-cash {
        position: absolute;
        left: 12px;
        top: 0;
        line-height: 48px;
    }
    .relative {
        position: relative;
    }
    /*flex*/
    .flex {
        display: flex;
    }
    .items-center {
        align-items: center;
    }
    .justify-between {
        justify-content: space-between;
    }
    .justify-center {
        justify-content: center;
    }
</style>`

let quizHTML = `
<div class="quiz">
    <div class="flex justify-between">
        <button type="button" class="btn-back flex items-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3346 5.33268H3.2213L6.94797 1.60602L6.0013 0.666016L0.667969 5.99935L6.0013 11.3327L6.9413 10.3927L3.2213 6.66602H11.3346V5.33268Z" fill="#526EFF"/>
            </svg>
            Back
        </button>
        <img src="https://conversionratestore.github.io/projects/moneygeek/img/logo.svg" alt="logo icon">
        <div class="step-count"><span>1</span> | 4</div>
    </div>
    <h2>Determine How Much Car Insurance You need</h2>
    <p>Take our quiz to learn the required and optimal level of car insurance for you.</p>
    <div class="container">
        <div class="anonymous flex items-center">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.26189 0.625C6.03876 0.6252 5.8327 0.744294 5.72114 0.9375L3.01489 5.625H0.883576C0.531264 5.62 0.244639 5.90759 0.250076 6.25611C0.256326 6.60463 0.538889 6.87972 0.883576 6.875H17.1161C17.9613 6.88694 17.9613 5.61304 17.1161 5.625H14.9861L12.2798 0.9375C12.168 0.743907 11.9614 0.62475 11.7378 0.625H6.26189Z" fill="#555555"/>
                <path d="M4.625 8.125C2.9065 8.125 1.5 9.53151 1.5 11.25C1.5 12.9685 2.9065 14.375 4.625 14.375C5.95231 14.375 7.08563 13.5323 7.53638 12.3584C7.96219 12.0495 8.47131 11.875 9 11.875C9.52856 11.875 10.0377 12.0506 10.4636 12.3596C10.9146 13.5329 12.048 14.375 13.375 14.375C15.0934 14.375 16.5 12.9685 16.5 11.25C16.5 9.53151 15.0934 8.125 13.375 8.125C11.7915 8.125 10.4754 9.31995 10.2781 10.852C9.87094 10.7042 9.43937 10.625 9 10.625C8.56069 10.625 8.12894 10.7042 7.72188 10.852C7.5245 9.31995 6.20844 8.125 4.625 8.125ZM4.625 9.375C5.66794 9.375 6.5 10.2071 6.5 11.25C6.5 12.2929 5.66794 13.125 4.625 13.125C3.58206 13.125 2.75 12.2929 2.75 11.25C2.75 10.2071 3.58206 9.375 4.625 9.375ZM13.375 9.375C14.4179 9.375 15.25 10.2071 15.25 11.25C15.25 12.2929 14.4179 13.125 13.375 13.125C12.3321 13.125 11.5 12.2929 11.5 11.25C11.5 10.2071 12.3321 9.375 13.375 9.375Z" fill="#555555"/>
            </svg>
            <p>Your information is anonymous and secure</p>
       </div>
       <div class="footer">
            <div class="content"></div>
            <button type="button" class="btn-next flex items-center justify-center">
                Next 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.665365 5.33268H8.7787L5.05203 1.60602L5.9987 0.666016L11.332 5.99935L5.9987 11.3327L5.0587 10.3927L8.7787 6.66602H0.665365V5.33268Z" fill="white"/>
                </svg>
            </button>
        </div>
    </div>
</div>`

let zipCodeHTML = `
    <label class="">Your Zip Code</label>
    <input type="number" placeholder="Your Zip Code">
    <p class="error-message">You must provide a valid zip code</p>
`

let carOwnershipHTML = `
    <label class="">Car Ownership</label>
    <div class="select relative" name="car-ownership">
        <div class="select-item">Fully Owned</div>
        <div class="select-drop">
            <div class="active">Fully Owned</div>
            <div>Leased</div>
            <div>Financed Purchase</div>
        </div>
    </div>
`
let cashValueHTML = `
    <label class="">Actual Cash Value (ACV) of Your Car</label>
    <div class="relative">
        <p class="currency-cash">$</p>
        <input type="number" class="input-cash">
    </div>
    <p class="error-message">Please enter your car's actual cash value</p>
`

let netWorthHTML = `
    <label class="">Net worth</label>
    <div class="select relative" name="net-worth">
        <div class="select-item">$50,000 or Less</div>
        <div class="select-drop">
            <div class="active">$50,000 or Less</div>
            <div>$50,000 to $100,000</div>
            <div>$100,000 to $300,000</div>
            <div>More than $300,000</div>
        </div>
    </div>
`

let resultHTML = `
`

let myAnswers = {
    'zipCode': 0,
    'state': '',
    'carOwnership': 'Fully Owned',
    'cashValue': 0,
    'netWorth': '$50,000 or Less'
};

document.body.insertAdjacentHTML('afterbegin', style)
document.querySelector('#gatsby-focus-wrapper > div > main > div.css-1irxgwz.ead1i4x8 > div > div.css-1wbld27.ead1i4x7 > div.spacing').insertAdjacentHTML('afterend', quizHTML)

let content = document.querySelector('.content'),
    countStep = document.querySelector('.step-count span'),
    btnNext = document.querySelector('.btn-next'),
    btnBack = document.querySelector('.btn-back');

function selectChange(currency) {
    let selector = document.querySelector(currency)
    selector.addEventListener('click', () => selector.parentElement.classList.toggle('active'))

    let childs = selector.nextElementSibling.querySelectorAll('div');
    childs.forEach(child => {
        child.addEventListener('click', (e) => {
            selector.innerHTML = child.innerHTML;
            selector.parentElement.classList.remove('active');
        })
    })
}

function apiZipCode(value) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.zippopotam.us/us/${value}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
        }).then(res => res.json()).then(data => {
            resolve(data)
        }).catch((error) => {
            console.error('Error:', error);
        });
    })
}
let dataCus;
function changeContent(count) {
    switch (count) {
        case '1':
            content.innerHTML = zipCodeHTML;
            countStep.innerHTML = '1';
            btnBack.style.display = 'none';
            btnNext.addEventListener('click', () => {
                let value = document.querySelector('input').value;
                console.log(value)
                apiZipCode(value).then(data => {
                    console.log(data)
                    dataCus = data;
                    if (Object.keys(data).length > 0) {
                        console.log(data['places'][0]['state'])
                        document.querySelector('.error-message').parentElement.classList.remove('error');
                        myAnswers.zipCode = value;
                        myAnswers.state = data['places'][0]['state'];
                        changeContent('2')
                    } else {
                        document.querySelector('.error-message').parentElement.classList.add('error')
                    }
                })
            })
            break
        case '2':
            content.innerHTML = carOwnershipHTML;
            countStep.innerHTML = '2';
            btnBack.style.display = '';
            selectChange('.select-item');
            btnNext.addEventListener('click', () => {
                myAnswers.carOwnership = document.querySelector('[name="car-ownership"] .select-item').innerHTML;
                changeContent('3')
            })
            btnBack.addEventListener('click', () => changeContent('1'));
            break
        case '3':
            content.innerHTML = cashValueHTML;
            countStep.innerHTML = '3';
            btnBack.style.display = '';
            btnNext.addEventListener('click', () => {
                let cash =  document.querySelector('.input-cash');
                if (cash.value != '') {
                    document.querySelector('.error-message').parentElement.classList.remove('error')
                    myAnswers.cashValue = document.querySelector('.input-cash').value;
                    changeContent('4')
                } else {
                    document.querySelector('.error-message').parentElement.classList.add('error')
                }
            })
            btnBack.addEventListener('click', () => changeContent('2'));
            break
        case '4':
            content.innerHTML = netWorthHTML;
            countStep.innerHTML = '4';
            btnBack.style.display = '';
            selectChange('.select-item');
            btnNext.addEventListener('click', () => {
                myAnswers.netWorth = document.querySelector('[name="net-worth"] .select-item').innerHTML;
                changeContent('5')
            })
            btnBack.addEventListener('click', () => changeContent('3'));
        default:
            break
    }
}
changeContent('1')
