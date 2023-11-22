console.log(
  '%c EXP: Improve the calculator steps',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/'

// funtion for push data to GA4
const pushDataLayer = (name, desc, type = '', loc = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} ${desc} ${type} ${loc}`)
}

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'exp_Improve_ux', 'variant_1')
  }
}, 1000)

function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round((endShow - startShow) / 1000)
        entry.target.removeAttribute('data-startShow')
        pushDataLayer(event, timeShow, 'Visibility', location)
        checker.unobserve(entry.target)
      }
    })
  })

  checker.observe(document.querySelector(selector))
}

const device = window.innerWidth < 769 ? 'mobile' : 'desktop'
if (localStorage.getItem('body-height-cm') === '') {
  localStorage.setItem('body-height-cm', '173')
}
class improveCalculatorSteps {
  constructor(device) {
    this.d = device
    this.init()
  }

  init() {
    this.addStyles()
    this.mutationCheck()
    if (window.location.href.includes('/body-height')) {
      this.currentHeightStep()
    }
    if (window.location.href.includes('/body-weight')) {
      this.currentWeightStep()
    }
    if (window.location.href.includes('/body-ideal-weight')) {
      this.goalWeightStep()
    }
    if (window.location.href.includes('/weight-loss')) {
      this.resultStep()
    }
    if (window.location.href.includes('/body-risk-tip')) {
      const style = /* html */ `
        <style class="body-risk">
          [class*=childrenWrapper]>div:not([class*=buttonWrapper]),
          [class*=childrenWrapper]>div:not([class*=buttonWrapper]) p {
            text-align: center;
          }
          [class*=childrenWrapper]>div:not([class*=buttonWrapper]) img {
            width: 142px;
            height: 142px;
          }
        </style>
      `
      document.head.insertAdjacentHTML('beforeend', style)
    }
  }

  addStyles() {
    const style = /* html */ `
      <style>
        .crs_switch_units {
            display: flex;
            justify-content: space-between;
            padding: 4px 10px;
            float: right;
            border-radius: 30px;
            background-color: #C5C5D1;
            position: relative;
            width: 70px;
            margin: 20px 0 60px;
          }
          .crs_switch_units p {
            width: 19px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            line-height: 24px;
            color: #FFFFFF;
            font-weight: 600;
            cursor: pointer;
            font-family: 'SF Pro Text', sans-serif;
          }
          .crs_switch_units span {
            position: absolute;
            font-family: 'SF Pro Text', sans-serif;
            height: calc(100% + 8px);
            aspect-ratio: 1/1;
            background-color: #FFFFFF;
            border-radius: 50%;
            left: calc(50% - 4px);
            top: -4px;
            border: 1px solid #1375D6;
            color: #1375D6;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            line-height: 24px;
            font-weight: 600;
            transition: all 0.3s ease;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            cursor: pointer;
          }
          [class*=nextButton] {
              max-width: 100%;
            }
      </style>
    `

    document.head.insertAdjacentHTML('beforeend', style)
    document.head.insertAdjacentHTML('beforeend', style)
    if (localStorage.getItem('body-height-cm') === '' || !localStorage.getItem('body-height-cm')) {
      localStorage.setItem('body-height-cm', '173')
    }
    if (localStorage.getItem('body-height-ft') === '' || !localStorage.getItem('body-height-ft')) {
      localStorage.setItem('body-height-ft', '5')
    }
    if (localStorage.getItem('body-height-in') === '' || !localStorage.getItem('body-height-in')) {
      localStorage.setItem('body-height-in', '8')
    }
  }

  currentHeightStep() {
    let heightByGenger = {
      metric: 173,
      imperial: 68,
      imperialShow: '5 ft 8 in'
    }

    if (localStorage.getItem('gender') !== 'male') {
      heightByGenger.metric = 167
      heightByGenger.imperial = 63
      heightByGenger.imperialShow = '5 ft 3 in'
    }

    const baseRangeCm = {
      min: 109,
      max: 211,
      value: heightByGenger.metric,
      showValue: '211 cm',
      units: 'cm'
    }
    const baseRangeFt = {
      min: 43,
      max: 83,
      value: heightByGenger.imperial,
      showValue: '6 ft 11 in',
      units: 'ft'
    }
    const inputs = $$el('input[type=number]')
    let range = baseRangeCm
    if (inputs.length === 2) {
      range = baseRangeFt
    }
    if (inputs[0].value !== '') {
      if (inputs.length === 1) {
        range.value = localStorage.getItem('body-height-cm')
        range.showValue = `${localStorage.getItem('body-height-cm')} cm`
      } else {
        range.value = localStorage.getItem('body-height-ft') * 12 + +localStorage.getItem('body-height-in')
        range.showValue = `${localStorage.getItem('body-height-ft')} ft ${localStorage.getItem('body-height-in')} in`
      }
    } else {
    }

    const block = /* html */ `
      <div class="crs_height">
        <style>
          [class*=thanksForSharingText]:first-of-type,
          [class*=excitementText]:first-of-type {
            color: #1375D6;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
            line-height: 24px;
          }
          [class*=thanksForSharingText]:last-of-type,
          [class*=excitementText]:last-of-type {
            color: #202B47;
            font-size: 14px;
            line-height: 18px;
          }
          h1 {
            font-size: 24px !important;
            line-height: 32px !important;
            margin-bottom: 12px !important;
          }
          h1+p {
            font-size: 16px !important;
            line-height: 22px !important;
            margin-bottom: 50px;
            width: 100%;
            text-align: center;
            font-family: 'SF Pro Text', sans-serif;
          }
          h1+p+div,
          [class*=switcherButton] {
            display: none !important;
          }
          .crs_range_wrapper {
            width: 100%;
          }
          .crs_range_wrapper * {
            font-family: 'SF Pro Text', sans-serif;
          }
          .crs_range_wrapper>div:first-child {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            line-height: 24px;
            color: #5E626B;
          }
          .crs_range_block {
            width: 100%;
            position: relative;
          }
          #crs_height_range {
            width: 100%;
          }
          .crs_range_block .current {
            position: absolute;
            bottom: calc(100% + 15px);
            left: 50%;
            transform: translateX(-50%);
            font-size: 16px;
            line-height: 24px;
            color: #202B47;
            padding: 10px;
            background-color: #E8F5FD;
            border-radius: 8px;
            white-space: nowrap;
          }
          .crs_range_block .current+span {
            position: absolute;
            content: '';
            display: block;
            height: 10px;
            width: 10px;
            background-color: #E8F5FD;
            clip-path: polygon(0 0, 0 100%, 100% 100%);
            bottom: calc(100% + 11px);
            left: 50%;
            transform: translateX(-50%) rotate(315deg);
          }
          .crs_switch_units span[data-u="ft"] {
            left: -4px;
          }
          .crs_range_block input[type=range] {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            background: #E0E3EB;
            outline: none;
            border-radius: 8px;
          }
          .crs_range_block {
            position: relative;
          }
          .crs_range_block input[type=range]+span {
            content: '';
            position: absolute;
            top: 6px;
            left: 2px;
            width: 100%;
            height: 8px;
            background: #1375D6;
            border-radius: 8px;
            z-index: 2;
            pointer-events: none;
          }
          .crs_range_block input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            position: relative;
            appearance: none;
            width: 30px;
            height: 30px;
            background: #FFFFFF;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 3;
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 20px !important;
              margin-bottom: 8px !important;
            }
            h1+p {
              font-size: 14px !important;
              padding: 0 10px;
              line-height: 18px !important;
            }
          }
        </style>
        <div class="crs_range_wrapper">
          <div><span>Height</span><span>${range.max === 211 ? '211 cm' : '6 ft 11 in'}</span></div>
          <div class="crs_range_block">
            <input type="range" min="${range.min}" max="${range.max}" value="${range.value}"
             id="crs_height_range" data-units="${range.units}" step="1">
            <span></span>
            <span class="current">${range.showValue}</span>
            <span></span>
          </div>
        </div>
        <div class="crs_switch_units">
          <p>ft</p>
          <p>cm</p>
          <span data-u="${range.units}">${range.units}</span>
        </div>
      </div>
    `

    const block2 = /* html */ `
      <div class="crs_add_height">
          <style>
            .crs_add_height {
              width: 100%;
              text-align: center;
              padding-bottom: 30px;
            }
            .crs_add_height>p {
              cursor: pointer;
              color: #EB731A;
              text-align: center;
              font-family: 'SF Pro Display', sans-serif;
              font-size: 17px;
              font-weight: 600;
              line-height: 1.5;
              margin: 0 0 20px;
            }
            .crs_add_height>div {
              margin: 0 auto;
              display: flex;
              align-items: start;
              gap: 12px;
              padding: 16px;
              border-radius: 12px;
              background: #F6F6F6;
            }
            .crs_add_height>div p {
              color: #202B47;
              font-family: 'SF Pro Text', sans-serif;
              font-size: 14px;
              line-height: 1.3;
              text-align: left;
            }
            .crs_add_height>div svg {
              height: 24px;
              width: 24px;
              flex-shrink: 0;
            }
          </style>
          <p>I don’t know my height</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="12" fill="#5E626B"/>
              <path d="M11.7023 8L10.5761 15H8L10.0324 8H11.7023ZM16 8L14.8738 15H12.2977L14.3301 8H16Z" fill="white"/>
            </svg>
            <p>The most common height among men is <span>${
              localStorage.getItem('body-height-weight-unitSystem') === 'imperial'
                ? heightByGenger.imperialShow
                : heightByGenger.metric + ' cm'
            }</span>. If you don't know your exact height, just keep the pre-selected figure.</p>
          </div>
      </div>
    `

    $el('h1').insertAdjacentHTML(
      'afterend',
      /* html */ `<p class="crs_text_height">Based on this information we can calculate you body mass index and prepare personalized program according to your specific needs.</p>`
    )
    $el('[class*=buttonWrapper]').insertAdjacentHTML('beforebegin', block)
    $el('[class*=mainContent]').insertAdjacentHTML('beforeend', block2)

    const range_input = $el('#crs_height_range')
    const switchUnits = $el('.crs_switch_units')
    const current = $el('.current')
    const arrow = $el('.current + span')
    const max = $el('.crs_range_wrapper>div>span:last-child')
    const dontKnow = $el('.crs_add_height>p')
    const nextButton = $el('[class*=nextButton]')
    widthRange()

    range_input.addEventListener('input', e => {
      widthRange()
      if (e.target.dataset.units === 'ft') {
        const ft = Math.floor(e.target.value / 12)
        const in_ = e.target.value % 12
        current.innerText = `${ft} ft ${in_} in`
        localStorage.setItem('body-height-cm', Math.round(e.target.value * 2.54))
        localStorage.setItem('body-height-ft', ft)
        localStorage.setItem('body-height-in', in_)
      } else {
        current.innerText = `${e.target.value} cm`
        localStorage.setItem('body-height-cm', e.target.value)
        localStorage.setItem('body-height-ft', Math.floor(e.target.value / 30.48))
        localStorage.setItem('body-height-in', Math.round((e.target.value % 30.48) / 2.54))
      }
    })

    range_input.addEventListener('change', e => {
      pushDataLayer('exp_Imp_ux_rs_pwyh_s', 'Slider', 'Range slider', 'Page what is your height?')
    })

    switchUnits.addEventListener('click', e => {
      e.preventDefault()
      const type = switchUnits.querySelector('span').innerText
      const infoHeight = $el('.crs_add_height p span')
      $el('[class*=switcherButton]').click()
      pushDataLayer('exp_Imp_ux_b_sn_swith', 'switch_to_lb', 'Button', 'body_height')
      setTimeout(() => {
        if (type === 'cm') {
          switchUnits.querySelector('span').innerText = 'ft'
          switchUnits.querySelector('span').dataset.u = 'ft'
          range_input.dataset.units = 'ft'
          range_input.min = baseRangeFt.min
          range_input.max = baseRangeFt.max
          const ft = localStorage.getItem('body-height-ft')
          const in_ = localStorage.getItem('body-height-in')
          range_input.value = ft * 12 + +in_
          current.innerText = `${ft} ft ${in_} in`
          max.innerText = '6 ft 11 in'
          infoHeight.innerText = heightByGenger.imperialShow
        } else {
          switchUnits.querySelector('span').innerText = 'cm'
          switchUnits.querySelector('span').dataset.u = 'cm'
          range_input.dataset.units = 'cm'
          range_input.min = baseRangeCm.min
          range_input.max = baseRangeCm.max
          range_input.value = localStorage.getItem('body-height-cm')
          current.innerText = `${localStorage.getItem('body-height-cm')} cm`
          max.innerText = '211 cm'
          infoHeight.innerText = heightByGenger.metric + ' cm'
        }
        widthRange()
      }, 100)
    })

    dontKnow.addEventListener('click', e => {
      localStorage.setItem('body-height-cm', heightByGenger.metric)
      localStorage.setItem('body-height-ft', '5')
      localStorage.setItem('body-height-in', heightByGenger.imperialShow.split(' ')[2])
      $el('[class*=nextButton]').click()
    })

    nextButton.addEventListener('click', e => {
      const height = localStorage.getItem('body-height-weight-unitSystem') === 'imperial' ? 'ft' : 'cm'
      const value =
        height === 'ft'
          ? localStorage.getItem('body-height-ft') + ' ft ' + localStorage.getItem('body-height-in') + ' in'
          : localStorage.getItem('body-height-cm') + ' cm'
      pushDataLayer('exp_Imp_ux_b_pwyh_n', `Next ${value}`, 'Button', 'body_height')
    })

    if ($el('[class*=switcherButton] + div').innerText.includes('your body mass index')) {
      $el('[class*=switcherButton] + div').style.display = 'none'
    }

    checkFocusTime('.crs_add_height', 'exp_Imp_ux_v_pwyh_mesft', 'Page what is your height?')
    checkFocusTime('.crs_range_wrapper', 'exp_Imp_ux_v_pwyh_glineft', 'Page what is your height?')

    function widthRange() {
      const baseWidthProgress = ((range_input.value - range_input.min) / (range_input.max - range_input.min)) * 100
      range_input.nextElementSibling.style.width = `${baseWidthProgress}%`
      current.style.left = `${baseWidthProgress}%`
      arrow.style.left = `${baseWidthProgress}%`
    }
  }

  currentWeightStep() {
    const units = localStorage.getItem('body-height-weight-unitSystem') === 'imperial' ? 'lb' : 'kg'

    const block = /* html */ `
      <div class="crs_current_weight">
        <style>
          h1 {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }
          h1+h2 {
            font-size: 16px !important;
          }
          [class*=mainContent] {
            position: relative;
          }
          [class*=switcherButton] {
            display: none !important;
          }
          [class*=nextButton] {
            margin-top: 100px;
          }
          .crs_current_weight {
            position: absolute;
            right: 0;
            top: 200px;
          }
          .crs_switch_units {
            width: 75px;
            margin: 0;
          }
          .crs_switch_units span {
            left: 50%;
          }
          .crs_switch_units span[data-u="lb"] {
            left: 0;
          }
          [class*=thanksForSharingText]:first-of-type {
            color: #1375D6;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
            line-height: 24px;
          }
          [class*=thanksForSharingText]:last-of-type {
            color: #202B47;
            font-size: 14px;
            line-height: 18px;
          }
          [class*=validatedInputError] {
            margin-left: 0;
          }
          @media (max-width: 768px) {
            h1 {
              font-size: 20px !important;
              margin-bottom: 8px !important;
            }
            h1+h2 {
              font-size: 14px !important;
              line-height: 18px !important;
            }
            .crs_current_weight {
              right: 15px;
            }
            [class*=errorText] {
              text-align: center;
            }
            [class*=thanksForSharingText]:last-of-type {
              width: 80%;
            }
          }
        </style>  
        <div class="crs_switch_units">
          <p>lb</p>
          <p>kg</p>
          <span data-u="${units}">${units}</span>
        </div>
      </div>
    `

    $el('[class*=switcherButton]').insertAdjacentHTML('beforebegin', block)

    const switchUnits = $el('.crs_switch_units')
    const nextButton = $el('[class*=nextButton]')

    switchUnits.addEventListener('click', e => {
      e.preventDefault()
      const type = switchUnits.querySelector('span').innerText
      $el('[class*=switcherButton]').click()
      pushDataLayer('exp_Imp_ux_b_sn_swith', 'switch_to_lb', 'Button', 'current_weight')
      setTimeout(() => {
        if (type === 'kg') {
          switchUnits.querySelector('span').innerText = 'lb'
          switchUnits.querySelector('span').dataset.u = 'lb'
        } else {
          switchUnits.querySelector('span').innerText = 'kg'
          switchUnits.querySelector('span').dataset.u = 'kg'
        }
      }, 100)
    })

    const localMutation = new MutationObserver(mutations => {
      checkError()
      if (window.location.href.includes('/body-weight') && $el('h3[class*=thanksForSharingText]')) {
        setGoal()
      }
    })

    localMutation.observe($el('[class*=mainContent]'), {
      childList: true,
      subtree: true
    })

    checkError()

    function checkError() {
      if (
        window.location.href.includes('/body-weight') &&
        $el('h3[class*=errorText]') &&
        $el('h3[class*=errorText]').innerText.includes('below 18.5')
      ) {
        $el('.crs_current_weight').style.top = '250px'
      } else if (window.location.href.includes('/body-weight')) {
        $el('.crs_current_weight').style.top = '200px'
      }
    }

    if (window.location.href.includes('/body-weight') && $el('h3[class*=thanksForSharingText]')) {
      setGoal()
    }

    function setGoal() {
      const height = localStorage.getItem('body-height-cm')
      const unit = localStorage.getItem('body-height-weight-unitSystem')
      const weight =
        unit === 'imperial' ? localStorage.getItem('body-weight-lb') : localStorage.getItem('body-weight-kg')
      let goalWeight = Math.round(20 * (height / 100) ** 2)
      unit === 'imperial' ? (goalWeight = Math.round(goalWeight * 2.205)) : goalWeight
      if (goalWeight > weight) {
        goalWeight = weight - 1
      }

      localStorage.setItem('weightGoal', goalWeight)
    }

    nextButton.addEventListener('click', e => {
      const weight =
        localStorage.getItem('body-height-weight-unitSystem') === 'imperial'
          ? localStorage.getItem('body-weight-lb') + ' lb'
          : localStorage.getItem('body-weight-kg') + ' kg'
      pushDataLayer('exp_Imp_ux_b_cw_n', `Next ${weight}`, 'Button', 'current_weight')
    })

    checkFocusTime('[class*=validatedInputWrapper]', 'exp_Imp_ux_v_pwycw_ift', 'Page what is your current weight?')
  }

  goalWeightStep() {
    const goalWeight = localStorage.getItem('weightGoal')
    const units = localStorage.getItem('body-height-weight-unitSystem') === 'imperial' ? 'lb' : 'kg'
    const block = /* html */ `
      <div class="crs_goal_weight">
        <style>
          h1 {
            margin-bottom: 8px !important;
          }
          .crs_goal_weight p {
            color: #202B47;
            text-align: center;
            font-family: 'SF Pro Text', sans-serif;
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 50px;
          }
          .crs_goal_weight p b {
            font-weight: 700;
            color: #EB731A;
          }
          [class*=excitementText]:not([class*=underweightWarning]):first-of-type {
            color: #1375D6;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
            line-height: 24px;
          }
          [class*=excitementText]:not([class*=underweightWarning]):last-of-type {
            color: #202B47;
            font-size: 14px;
            line-height: 18px;
          }
          p[class*=remark] {
            border-radius: 12px;
            background: #F6F6F6;
            padding: 16px;
            display: flex;
            gap: 12px;
            color: #202B47;
            font-size: 14px;
            line-height: 18px;
            opacity: 1;
          }
          p[class*=remark] svg {
            flex-shrink: 0;
          }
          [class*=mainContent] {
            padding-bottom: 30px;
          }

          @media (min-width: 769px) {
            h1 {
              font-size: 24px !important;
              margin-bottom: 12px !important;
            }

            [class*=validatedInputError] {
              margin-left: 0;
            }
          }
        </style>
        <p>
          It is recommended to keep your BMI (Body mass index) between 18 and 22. Therefore, based on your height a <b>goal weight for you is ${goalWeight} ${units}</b> but you can change it due to your personal goals.
        </p>
      </div>
    `

    const nextButton = $el('[class*=nextButton]')

    nextButton.addEventListener('click', e => {
      const weight = localStorage.getItem('weightGoal') + ' ' + units
      pushDataLayer('exp_Imp_ux_b_gw_n', `Next ${weight}`, 'Button', 'goal_weight')
    })

    $el('h1').insertAdjacentHTML('afterend', block)
    $el('[class*=remark]').insertAdjacentHTML(
      'afterbegin',
      `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#C5C5D1"/>
        <path d="M16.2099 13.3466L13.7548 12L16.2099 10.6704C16.3554 10.6023 16.41 10.4318 16.319 10.2954L15.7371 9.35794C15.6644 9.22158 15.4825 9.17044 15.337 9.25567L12.8819 10.5852V7.90908C12.8819 7.77272 12.7364 7.63635 12.5909 7.63635H11.4088C11.2633 7.63635 11.1178 7.77272 11.1178 7.90908V10.5852L8.66273 9.25567C8.51724 9.18749 8.33538 9.22158 8.26264 9.35794L7.68069 10.2954C7.58976 10.4318 7.64431 10.6023 7.7898 10.6704L10.2449 12L7.7898 13.3466C7.64431 13.4148 7.58976 13.5852 7.68069 13.7216L8.26264 14.6591C8.33538 14.7954 8.51724 14.8295 8.66273 14.7614L11.1178 13.4318V16.0909C11.1178 16.2443 11.2633 16.3636 11.4088 16.3636H12.5909C12.7364 16.3636 12.8819 16.2443 12.8819 16.0909V13.4318L15.337 14.7614C15.4825 14.8295 15.6644 14.7954 15.7371 14.6591L16.319 13.7216C16.41 13.5852 16.3554 13.4148 16.2099 13.3466Z" fill="white"/>
      </svg>
    `
    )

    checkFocusTime('[class*=remark]', 'exp_Imp_ux_v_pwygw_tft', 'Page what is your goal weight?')
  }

  resultStep() {
    const block = /* html */ `
      <div class="crs_result">
        <style>
          h2[class*=title] {
            font-size: 24px;
            line-height: 32px;
            font-weight: 600;
            font-family: 'SF Pro Display', sans-serif;
            margin-bottom: 20px;
            text-align: center;
          }
          [class*=graphicTitle] {
            width: 100%;
            text-align: center;
            font-size: 18px;
            line-height: 26px;
            font-weight: 700;
            color: #EB731A;
          }
          [class*=graphicInfoWrapper] {
            width: 70%;
            margin: 0 auto;
          }
          .crs_result p {
            color: #202B47;
            font-family: 'SF Pro Text', sans-serif;
            font-size: 14px;
            line-height: 18px;
            padding: 16px;
            display: flex;
            gap: 12px;
            border-radius: 12px;
            background: #F6F6F6;
          }
          .crs_result p svg {
            flex-shrink: 0;
          }
          @media (max-width: 768px) {
            h2[class*=title] {
              font-size: 20px;
              line-height: 28px;
            }
            [class*=graphicInfoWrapper] {
              width: 100%;
            }
          }
        </style>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect y="-0.000244141" width="24" height="24" rx="12" fill="#C5C5D1"/>
            <path d="M16.2104 13.3463L13.7553 11.9997L16.2104 10.6702C16.3559 10.602 16.4105 10.4316 16.3195 10.2952L15.7376 9.3577C15.6648 9.22134 15.483 9.1702 15.3375 9.25543L12.8824 10.585V7.90884C12.8824 7.77247 12.7369 7.63611 12.5914 7.63611H11.4093C11.2638 7.63611 11.1183 7.77247 11.1183 7.90884V10.585L8.66322 9.25543C8.51773 9.18724 8.33587 9.22134 8.26313 9.3577L7.68117 10.2952C7.59024 10.4316 7.6448 10.602 7.79029 10.6702L10.2454 11.9997L7.79029 13.3463C7.6448 13.4145 7.59024 13.585 7.68117 13.7213L8.26313 14.6588C8.33587 14.7952 8.51773 14.8293 8.66322 14.7611L11.1183 13.4316V16.0907C11.1183 16.2441 11.2638 16.3634 11.4093 16.3634H12.5914C12.7369 16.3634 12.8824 16.2441 12.8824 16.0907V13.4316L15.3375 14.7611C15.483 14.8293 15.6648 14.7952 15.7376 14.6588L16.3195 13.7213C16.4105 13.585 16.3559 13.4145 16.2104 13.3463Z" fill="white"/>
          </svg>
          A restrictive diet refers to an eating plan that significantly limits or restricts certain foods, food groups, or overall calorie intake. It involves strict guidelines and rules regarding what and how much one can eat.
        </p>
      </div>
    `

    $el('[class*=mainContent]').insertAdjacentHTML('beforeend', block)
    checkFocusTime('.crs_result', 'exp_Imp_ux_v_fosacl_tft', 'Final order screen Able creates lasting')
    $el('h2').innerText =
      'Able creates lasting results through habit and behavior change, movement and 1-on-1 coaching, not restrictive diets*'
  }

  mutationCheck() {
    const mutationObserver = new MutationObserver(mutations => {
      if (window.location.href.includes('/body-height') && !$el('.crs_height')) {
        this.currentHeightStep()
      } else if (!window.location.href.includes('/body-height') && $el('.crs_height')) {
        $el('.crs_text_height').remove()
        $el('.crs_add_height').remove()
        $el('.crs_height').remove()
      }

      if (window.location.href.includes('/body-weight') && !$el('.crs_current_weight')) {
        this.currentWeightStep()
      } else if (!window.location.href.includes('/body-weight') && $el('.crs_current_weight')) {
        $el('.crs_current_weight').remove()
      }

      if (window.location.href.includes('/body-ideal-weight') && !$el('.crs_goal_weight')) {
        this.goalWeightStep()
      } else if (!window.location.href.includes('/body-ideal-weight') && $el('.crs_goal_weight')) {
        $el('.crs_goal_weight').remove()
      }

      if (window.location.href.includes('/weight-loss') && !$el('.crs_result')) {
        this.resultStep()
      } else if (!window.location.href.includes('/weight-loss') && $el('.crs_result')) {
        $el('.crs_result').remove()
      }

      if (window.location.href.includes('/body-risk-tip') && !$el('.body-risk')) {
        const style = /* html */ `
        <style class="body-risk">
          [class*=childrenWrapper]>div:not([class*=buttonWrapper]),
          [class*=childrenWrapper]>div:not([class*=buttonWrapper]) p {
            text-align: center;
          }
          [class*=childrenWrapper]>div:not([class*=buttonWrapper]) img {
            width: 142px;
            height: 142px;
          }
        </style>
      `
        document.head.insertAdjacentHTML('beforeend', style)
      } else {
        $el('.body-risk').remove()
      }
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  }
}

new improveCalculatorSteps(device)
