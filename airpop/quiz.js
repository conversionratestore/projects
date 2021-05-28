let style = `
    <style>
      #maincontent * {
        box-sizing: border-box;
      }
      
      #maincontent input:focus {
        box-shadow: none;
      }
      
      .quiz {
        text-align: center;
      }
    
      .questions {
        text-align: center;
      }
      
      .questions p {
        padding: 0 25px;
        font-weight: 700;
        font-size: 18px;
        display:none;
      }
      
      .questions p.active {
        display: block;
      }
      
      .pointer {
        border: 1px solid #EEEEEE;
        padding: 10px 20px;
        font-weight: 700;
        margin: 15px auto;
        text-align: center;
        display:inline-block;
        border-radius: 20px;
      }
      
      .answers {
        width: 100%;
        padding: 5px 20px;
        margin-bottom: 10px;
        text-align: left;
      }
      
      .answers>div {
        display: none;
      }
      
      .answers>div.active {
        display: block;
      }
      
      .answers label {
        display: block;
        padding: 5px 0;
        margin-bottom: 20px;
      }
      
      .quiz button:not(.prev), .quiz button:not(.prev):hover {
        padding: 10px 25px;
        background-color: #32CDD5;
        border-radius: 30px;
        color: white;
        border: none;
        font-weight: 600;
        text-transform:uppercase;
        width: 70%;
        max-width: 200px;
      }
      
      .quiz button {
        color: black;
        border: none;
        background: #fff;
      }
      
      .quiz button {
        display:none;
      }
      
      .quiz button.active {
        display:inline;
      }
      
      .save {
        display: inline-block;
        font-weight: 700;
        padding: 5px 7px;
        color: #333333;
        background-color: #FFCC66;
        border-radius: 30px;
        margin-left: 20px;
        text-transform:uppercase;
      }
      
      .block.newsletter {
        display: none;
      }
      
      .error {
        color: #db2f2f;
      }
    </style>
`

let products = {
    se: {
        white: {
            4: 'https://www.airpophealth.com/us/airpop-light-se-4pcs-white',
            8: 'https://www.airpophealth.com/us/catalog/product/view/id/3462/s/airpop-light-se-white-8-pack-save-31/',
            12: 'https://www.airpophealth.com/us/catalog/product/view/id/3463/',
            20: 'https://www.airpophealth.com/us/airpop-light-se-20pcs-white'
        },
        black: {
            1: 'https://www.airpophealth.com/us/airpop-light-se-1pc-black',
            4: 'https://www.airpophealth.com/us/airpop-light-se-4pcs-black',
            8: 'https://www.airpophealth.com/us/catalog/product/view/id/3460/',
            12: 'https://www.airpophealth.com/us/catalog/product/view/id/3461/s/airpop-light-se-black-12-pack-save-42/',
            20: 'https://www.airpophealth.com/us/airpop-light-se-20pcs-black'
        }
    },
    pocket: {
        black: {
            2: 'https://www.airpophealth.com/us/airpop-pocket-2pcs-black',
            4: 'https://www.airpophealth.com/us/airpop-pocket-4pcs-black',
            8: 'https://www.airpophealth.com/us/airpop-pocket-black-8-pack-save-25',
            12: 'https://www.airpophealth.com/us/airpop-pocket-black-12-pack-save-33',
            20: 'https://www.airpophealth.com/us/airpop-light-se-1pc-black-1'
        },
        white: {
            2: 'https://www.airpophealth.com/us/airpop-pocket-2pcs-white',
            4: 'https://www.airpophealth.com/us/airpop-pocket-4pcs-white',
            8: 'https://www.airpophealth.com/us/airpop-pocket-white-8-pack-save-25',
            12: 'https://www.airpophealth.com/us/airpop-pocket-white-12-pack-save-33',
            20: 'https://www.airpophealth.com/us/airpop-light-se-1pc-black-2'
        }
    },
    activeHalo: {
        black: 'https://www.airpophealth.com/us/airpop-active-smart-black-yellow',
        white: 'https://www.airpophealth.com/us/airpop-active-smart-white-grey'
    },
    active: {
        black: 'https://www.airpophealth.com/us/airpop-active-black-green',
        yellow: 'https://www.airpophealth.com/us/airpop-active-yellow-black',
        white: 'https://www.airpophealth.com/us/airpop-active-grey-white'
    },
    original: {
        brown: 'https://www.airpophealth.com/us/airpop-original-beige',
        grey: 'https://www.airpophealth.com/us/airpop-original-charcoal',
        black: 'https://www.airpophealth.com/us/airpop-original-black'
    }
}

let quizBlock = `
    <div class="quiz">
      <div class="questions">
        <p class="active">I’ll use my mask for...</p>
        <p>The most important feature of your ideal mask is...</p>
        <p>I want my mask to be...</p>
        <p>Preferred color of my mask is...</p>
        <p>How many masks do you need?</p>
      </div>
      
      <div class="pointer"><span>1</span>/5</div>
      
      <div class="answers">
        <div class="q1 active" data-step="1">
          <label><input type="radio" name="q1" value="1">Everyday use, long walks, shopping etc</label>
          <label><input type="radio" name="q1" value="2">To travel, on a way to to the work</label>
          <label><input type="radio" name="q1" value="3">Living in a big city with high pollution level </label>
          <label><input type="radio" name="q1" value="4">For outdoor activities, active lifestyle, sports</label>
        </div>
        <div class="q2" data-step="2">
          <label><input type="checkbox" name="q2" value="1">Cheap price</label>
          <label><input type="checkbox" name="q2" value="2">Comfort for a long use</label>
          <label><input type="checkbox" name="q2" value="3">Easy breathing while activities</label>
          <label><input type="checkbox" name="q2" value="4">Stylish looking</label>
          <label><input type="checkbox" name="q2" value="5">Easy to carry it with you</label>
        </div>
        <div class="q3" data-step="3">
          <label><input type="radio" name="q3" value="1">The bestseller</label>
          <label><input type="radio" name="q3" value="2">Top rated</label>
          <label><input type="radio" name="q3" value="3">Recommended by the shop</label>
          <label><input type="radio" name="q3" value="4">With the most number of reviews</label>
        </div>
        <div class="q4" data-step="4">
          <label><input type="checkbox" name="q4" value="1">White</label>
          <label><input type="checkbox" name="q4" value="2">Black</label>
          <label><input type="checkbox" name="q4" value="3">Beige</label>
          <label><input type="checkbox" name="q4" value="4">Bright colored</label>
        </div>
        <div class="q5" data-step="5">
          <label><input type="radio" name="q5" value="1">Only 1</label>
          <label><input type="radio" name="q5" value="4">Pack of 4</label>
          <label><input type="radio" name="q5" value="8">Pack of 8 <span class="save">save 31%</span></label>
          <label><input type="radio" name="q5" value="12">Pack of 12 <span class="save">save 42%</span></label>
          <label><input type="radio" name="q5" value="20">Pack of 20 <span class="save">save 50%</span></label>
        </div>
      </div>
      
      <div>
          <button class="next active">Next</button>
          <button class="finish">Show me my mask</button>
      </div>
      <button class="prev">< Back</button>
    </div>
`

let popup = `
<div class="dark_bg">
    <div class="popup result">
      <span class="close"></span>
      <p class="title">Perfect Mask found for you</p>
      <p>We analyzed your answers and found Mask the fit’s your request best</p>
      <button>Take a look</button>
    </div>
    <div class="popup eip">
      <span class="close"></span>
      <p class="title">Can’t pick a Mask?</p>
      <p>Let us help you choose a mask based on your goals</p>
      <a href="/us/face-mask-quiz">help me choose</a>
    </div>
</div>
`

let popupStyle = `
    <style>
      .dark_bg {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, .25);
        z-index: 999;
      }
      
      .dark_bg.active {
        display: block;
      }
      
      .popup {
        display: none;
        width: 80%;
        box-sizing: border-box;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 20px;
        padding: 80px 30px;
        text-align: center;
      }
      
      .popup.active {
        display: block;
      }
      
      .popup p.title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 25px;
        text-align: center;
      }
      
      .popup p.title+p {
        font-size: 16px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .popup button, .popup a {
        color: white;
        font-size: 14px;
        font-weight: 700;
        text-transform:uppercase;
        padding: 11px 30px;
        border: none;
        background-color: #32CDD5;
        border-radius: 40px;
      }
      
      .popup .close {
        height: 14px;
        width: 14px;
        position:absolute;
        top: 35px;
        right: 35px;
        background: url(https://conversionratestore.github.io/projects/airpop/img/close.svg) center center no-repeat;
        background-size: contain;
      }
    </style>
`

let finalHref = 'https://www.airpophealth.com/us/airpop-light-se-4pcs-white'
let page = window.location.pathname

let buttonStyle = `
    <style>
      .quiz_btn, .Subwidget a.quiz_btn {
        display: flex;
        background-color: #32CDD5 !important;
        color: white !important;
        font-weight: 700;
        font-size: 14px;
        justify-content:center;
        margin: 15px auto;
        border-radius: 50px !important;
        width: 70%;
        max-width: 200px;
        padding: 10px 20px !important;
        text-transform:uppercase;
      }
      
      .category-view {
        position:relative;
      }
      
      .Subwidget a.main_btn {
        margin: 0 0 10px;
        height: auto;
      }
    </style>
`

let btns = `
      <a class="quiz_btn main_btn" href="/us/face-mask-quiz">Pick your mask</a>
`
let $ = jQuery
let go = setInterval(function () {
    console.log('start')
    if(document.querySelector('.category-view') || document.querySelector('#maincontent')) {
        clearInterval(go)
        if (page.includes('face-mask-quiz')) {
            startQuiz()
        } else {
            startExp()
            let first = localStorage.getItem('first')
            if (first === '1' && !page.includes('checkout')) {
                console.log('var b')
                startPopup('b')
            } else if (localStorage.getItem('quiz') !== '0') {
                console.log('var a')
                startPopup('a')
            }
            if (document.querySelector('product-info-delivery') && first !== '1') {
                localStorage.setItem('first', '0')
            }
            console.log(first)
            console.log(document.querySelector('product-info-delivery'))
            console.log(first !== '1')
        }
    }
}, 100)


function startExp() {
    if(document.querySelector('.category-view')) {
        document.querySelector('.Subwidget').insertAdjacentHTML('afterbegin', btns)

        document.querySelector('.main_btn').addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Quiz',
                'eventAction': 'click on button Pick up a mask',
                'eventLabel': 'Homepage'
            });
        })
    }


    document.body.insertAdjacentHTML('afterbegin', buttonStyle)
    document.querySelectorAll('.navigation')[1].querySelector('ul').insertAdjacentHTML('afterbegin', `<li><a class="quiz_btn quiz_link" href="/us/face-mask-quiz">Pick your mask</a></li>`)

    document.querySelector('.quiz_link').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Quiz',
            'eventAction': 'click on button Pick up a mask',
            'eventLabel': 'Menu'
        });
    })
}

function startQuiz () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Quiz',
        'eventAction': 'pageview — Quiz page'
    });

    document.body.insertAdjacentHTML('afterbegin', style)
    document.querySelector('#maincontent').insertAdjacentHTML('afterbegin', quizBlock)

    let step = 0

    $('button.next').click(function () {

        if ($('.answers>div.active input:checked').length !== 0) {
            step += 1
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Quiz',
                'eventAction': 'click on button Next',
                'eventLabel': `Quiz — Step #${step + 1}`
            });
            changeStep(step)
        } else {
            $('.answers').after(`<p class="error">need an answer to the question</p>`)
            setTimeout(function () {
                $('.error').remove()
            }, 3000)
        }
    })

    $('button.prev').click(function () {
        step -= 1
        changeStep(step)
    })

    $('button.finish').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Quiz',
            'eventAction': 'click on button Show me my mask',
            'eventLabel': 'Quiz'
        });
        if($('.answers>div.active input:checked').length !== 0) {
                let answers = getAnswers()
                console.log(answers)
                check(answers)
        } else {
            $('.answers').after(`<p class="error">need an answer to the question</p>`)
            setTimeout(function () {
                $('.error').remove()
            }, 3000)
        }
    })

    $('.answers input').click(function (e) {
        let step = e.currentTarget.closest('div').getAttribute('data-step')
        let text = e.currentTarget.nextSibling
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Quiz',
            'eventAction': `click on input: ${text}`,
            'eventLabel': `Quiz — Step #0${step}`
        });
    })

}

function startPopup(a) {
    document.body.insertAdjacentHTML('afterbegin', popupStyle)
    document.body.insertAdjacentHTML('beforeend', popup)
    let pop = localStorage.getItem('quiz')
    $('.dark_bg').addClass('active')

    if (pop === 'a') {
        $('.popup.result').addClass('active')
    } else {
        $('.popup.eip').addClass('active')
    }

    $('.dark_bg .close').click(function () {
        $('.dark_bg').removeClass('active')
        $('.popup').removeClass('active')
        localStorage.removeItem('quiz')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Quiz',
            'eventAction': 'close popup'
        });
    })

    $('.dark_bg button').click(function () {
        $('.dark_bg').removeClass('active')
        localStorage.removeItem('quiz')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Quiz',
            'eventAction': 'close popup'
        });
    })

    $('.dark_bg a').click(function () {
        localStorage.setItem('first', '1')
    })
}

function changeStep(s) {
    $('.questions>p').eq(s).addClass('active').siblings('p').removeClass('active')
    $('.answers>div').eq(s).addClass('active').siblings('div').removeClass('active')
    $('.pointer span').text(s+1)
    if (s > 0) {
        $('button.prev').addClass('active')
    }
    if(s === 0) {
        $('button.prev').removeClass('active')
    }
    if (s === 4) {
        $('button.next').removeClass('active')
        $('button.finish').addClass('active')
    }
    if (s < 4) {
        $('button.next').addClass('active')
        $('button.finish').removeClass('active')
    }
}



function getAnswers() {
    let a = []
    a.push($('.q1 input:checked').val())
    a[1] = []
    $('.q2 input:checked').each((i, item) => {
        a[1].push($(item).val())
    })
    a.push($('.q3 input:checked').val())
    a[3] = []
    $('.q4 input:checked').each((i, item) => {
        a[3].push($(item).val())
    })
    a.push($('.q5 input:checked').val())
    return a
}

function check(a) {
    switch (a[0]) {
        case ('1'):
            select1(a)
           break
        case ('2'):
            selectPocket(a[3], a[4])
           break
        case ('3'):
            select3(a)
            break
        case ('4'):
            select4(a)
            break
        default:
            console.log('not-selected')
    }
}

function selectPocket(a4, a5) {
    let type = 'pocket'
    let color = 'white'
    if(a4.includes('2')) {
        color = 'black'
    }
    if (a5 === '1') {
        a5 = '2'
    }
    finalHref = products[type][color][a5]

    console.log('block2' , finalHref)
    window.location.href = finalHref
    localStorage.setItem('quiz', '1')
}

function select1(answers) {
    let type = 'se'
    let color = 'white'
    if(answers[1].length === 1) {
        switch (answers[1][0]) {
            case '1':
                if(answers[3].includes('2')) {
                    color = 'black'
                }
                if (color === 'white' && answers[4] === '1') {
                    answers[4] = '4'
                }
                finalHref = products[type][color][answers[4]]
                break
            case '2':
                if (answers[2] === '1' || answers[2] === '2') {
                    type = 'original'
                    if(answers[3].includes('1') || answers[3].includes('4')) {
                        color = 'grey'
                    } else if (answers[3].includes('2')) {
                        color = 'black'
                    } else {
                        color = 'brown'
                    }
                    finalHref = products[type][color]
                } else {
                    if(answers[3].includes('2')) {
                        color = 'black'
                    }
                    if (color === 'white' && answers[4] === '1') {
                        answers[4] = '4'
                    }
                    finalHref = products[type][color][answers[4]]
                }
                break
            case '3':
                type = 'active'
                if(answers[3].includes('2')) {
                    color = 'black'
                } else if (answers[3].includes('4')) {
                    color = 'yellow'
                }
                finalHref = products[type][color]
                break
            case '4':
                if (answers[2] === '4') {
                    type = 'active'
                    if(answers[3].includes('2')) {
                        color = 'black'
                    } else if (answers[3].includes('4')) {
                        color = 'yellow'
                    }
                } else {
                    type = 'original'
                    if(answers[3].includes('1') || answers[3].includes('4')) {
                        color = 'grey'
                    } else if (answers[3].includes('2')) {
                        color = 'black'
                    } else {
                        color = 'brown'
                    }
                }
                finalHref = products[type][color]
                break
            default :
                if (answers[2] === '4') {
                    type = 'se'
                    if(answers[3].includes('2')) {
                        color = 'black'
                    }
                    if (color === 'white' && answers[4] === '1') {
                        answers[4] = '4'
                    }
                    finalHref = products[type][color][answers[4]]
                } else {
                    type = 'active'
                    if(answers[3].includes('2')) {
                        color = 'black'
                    } else if (answers[3].includes('4')) {
                        color = 'yellow'
                    }
                    finalHref = products[type][color]
                }
        }
    } else {
        if (answers[1].includes('2') && answers[1].includes('4')) {
            type = 'original'
            if(answers[3].includes('1') || answers[3].includes('4')) {
                color = 'grey'
            } else if (answers[3].includes('2')) {
                color = 'black'
            } else {
                color = 'brown'
            }
            finalHref = products[type][color]
        } else if ((answers[1].includes('3') && answers[1].includes('4')) || (answers[1].includes('5') && answers[1].includes('4'))) {
            type = 'active'
            if(answers[3].includes('2')) {
                color = 'black'
            } else if (answers[3].includes('4')) {
                color = 'yellow'
            }
            finalHref = products[type][color]
        } else {
            type = 'se'
            if(answers[3].includes('2')) {
                color = 'black'
            }
            if (color === 'white' && answers[4] === '1') {
                answers[4] = '4'
            }
            finalHref = products[type][color][answers[4]]
        }
    }

    console.log('block1' , finalHref)
    window.location.href = finalHref
    localStorage.setItem('quiz', '1')
}

function select3(answers) {
    let type = 'original'
    let color = 'black'
    if(answers[1].length === 1) {
        switch (answers[1][0]) {
            case '2':
                if(answers[3].includes('1') || answers[3].includes('4')) {
                    color = 'grey'
                } else if (answers[3].includes('2')) {
                    color = 'black'
                } else {
                    color = 'brown'
                }
                finalHref = products[type][color]
                break
            case '3':
                type = 'activeHalo'
                if (answers[3].includes('1') || answers[3].includes('3')) {
                    color = 'white'
                }
                finalHref = products[type][color]
                break
            case '4':
                if (answers[3].includes('3')) {
                    type = 'original'
                    color = 'brown'
                } else if(answers[3].includes('2')) {
                    type = 'original'
                    color = 'black'
                } else if(answers[3].includes('1')) {
                    type = 'activeHalo'
                    color = 'white'
                } else {
                    type = 'activeHalo'
                    color = 'black'
                }
                finalHref = products[type][color]
                break
            default:
                type = 'original'
                if(answers[3].includes('1') || answers[3].includes('4')) {
                    color = 'grey'
                } else if (answers[3].includes('2')) {
                    color = 'black'
                } else {
                    color = 'brown'
                }
                finalHref = products[type][color]
        }
    } else {
        if(answers[1].includes('3') && answers[1].includes('4')) {
            type = 'activeHalo'
            if (answers[3].includes('1') || answers[3].includes('3')) {
                color = 'white'
            }
            finalHref = products[type][color]
        } else {
            if(answers[3].includes('1') || answers[3].includes('4')) {
                color = 'grey'
            } else if (answers[3].includes('2')) {
                color = 'black'
            } else {
                color = 'brown'
            }
            finalHref = products[type][color]
        }
    }
    console.log('block3' , finalHref)
    window.location.href = finalHref
    localStorage.setItem('quiz', '1')
}

function select4(answers) {
    let type = 'active'
    let color = 'white'
    if (answers[1].length === 1) {
        if(answers[1][0] === '3' || answers[1][0] === '4') {
            if(answers[2] === '1' || answers[2] === '3') {
                type = 'activeHalo'
                if (answers[3].includes('2') || answers[3].includes('4')) {
                    color = 'black'
                }
                finalHref = products[type][color]
            } else {
                if(answers[3].includes('2')) {
                    color = 'black'
                } else if (answers[3].includes('4')) {
                    color = 'yellow'
                }
                finalHref = products[type][color]
            }
        } else {
            if(answers[3].includes('2')) {
                color = 'black'
            } else if (answers[3].includes('4')) {
                color = 'yellow'
            }
            finalHref = products[type][color]
        }
    } else {
        if (answers[1].includes('3') && answers[1].includes('4')) {
            type = 'activeHalo'
            if (answers[3].includes('2') || answers[3].includes('4')) {
                color = 'black'
            }
            finalHref = products[type][color]
        } else {
            if(answers[3].includes('2')) {
                color = 'black'
            } else if (answers[3].includes('4')) {
                color = 'yellow'
            }
            finalHref = products[type][color]
        }
    }
    console.log('block4' , finalHref)
    window.location.href = finalHref
    localStorage.setItem('quiz', '1')
}

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2078786,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'pdp_quiz-experiment');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Quiz',
    'eventAction': 'loaded'
});
