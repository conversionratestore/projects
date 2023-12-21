console.log(
  '%c EXP: Exit intent popup (DEV: YK)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'exit_intent_popup', 'variant_1')
  }
}, 1000)

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

const fonts = document.createElement('link')
fonts.rel = 'stylesheet'
fonts.href =
  'https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,600&family=Lato:wght@400;700&display=swap'
document.head.appendChild(fonts)

const slider = document.createElement('script')
slider.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js'
slider.async = true
document.head.appendChild(slider)

const sliderStyle = document.createElement('link')
sliderStyle.rel = 'stylesheet'
sliderStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css'
document.head.appendChild(sliderStyle)

const device = window.innerWidth < 769 ? 'mobile' : 'desktop'
const sliderData = [
  {
    name: 'Salwa',
    university: 'UBC',
    received: '$75,000',
    description:
      'I have realized financially that I do have the ability to control my future. I can take responsibility for my finances',
    img: 'https://grantme.ca/wp-content/uploads/2023/02/Frame-1362.png',
    thumb: 'https://grantme.ca/wp-content/uploads/2020/03/Salwa-Nimir.png'
  },
  {
    name: 'Leyton',
    university: 'University of Alberta',
    received: '$140,500',
    description:
      "After enrolling, I no longer had to worry about my next steps. GrantMe's team was always there to guide me.",
    img: 'https://grantme.ca/wp-content/uploads/2023/02/Frame-1362-1.png',
    thumb: 'https://grantme.ca/wp-content/uploads/2022/09/Leyton-4.jpeg'
  },
  {
    name: 'Ashleigh',
    university: 'Queen’s University',
    received: '$30,000',
    description:
      'Everything that I could possibly be worrying about with university and saving money ... have been answered ... it’s been tons of fun!',
    img: 'https://grantme.ca/wp-content/uploads/2023/02/Frame-1362-2.png',
    thumb: 'https://grantme.ca/wp-content/uploads/2020/03/Ashleigh-W..png'
  },
  {
    name: 'Lauren',
    university: 'Western University',
    received: '$65,000',
    description:
      'GrantMe did not just improve my writing abilities and applications but also equipped me with the skills to be a successful student',
    img: 'https://grantme.ca/wp-content/uploads/2023/02/Frame-1362-3.png',
    thumb: 'https://grantme.ca/wp-content/uploads/2022/09/Lauren-5-1.jpg'
  }
]

const svgObj = {
  close: /*html*/ `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M6.60303 23.3972L23.3968 6.60343" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23.3968 23.3966L6.60303 6.60278" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  `,
  back: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M8.75007 12.12L4.60986 7.50003L8.75007 2.88" stroke="#2B3E51" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>
  `,
  hat: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M20.1 5.06L8.06004 12.92C4.20004 15.44 4.20004 21.08 8.06004 23.6L20.1 31.46C22.26 32.88 25.82 32.88 27.98 31.46L39.96 23.6C43.8 21.08 43.8 15.46 39.96 12.94L27.98 5.08C25.82 3.64 22.26 3.64 20.1 5.06Z" stroke="url(#paint0_linear_2343_28)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.2602 26.16L11.2402 35.54C11.2402 38.08 13.2002 40.8 15.6002 41.6L21.9802 43.72C23.0802 44.08 24.9002 44.08 26.0202 43.72L32.4002 41.6C34.8002 40.8 36.7602 38.08 36.7602 35.54V26.26" stroke="url(#paint1_linear_2343_28)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M42.7998 30V18" stroke="#3E78BA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
  <linearGradient id="paint0_linear_2343_28" x1="24.1351" y1="4.83502" x2="12.5249" y2="9.56764" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1F72DA"/>
  <stop offset="0.515625" stop-color="#A25BB6"/>
  <stop offset="1" stop-color="#E6AD19"/>
  </linearGradient>
  <linearGradient id="paint1_linear_2343_28" x1="24.09" y1="26.6835" x2="16.4165" y2="30.0735" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1F72DA"/>
  <stop offset="0.515625" stop-color="#A25BB6"/>
  <stop offset="1" stop-color="#E6AD19"/>
  </linearGradient>
  </defs>
  </svg>
  `,
  pencil: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M11.05 3L4.20829 10.2417C3.94996 10.5167 3.69996 11.0583 3.64996 11.4333L3.34162 14.1333C3.23329 15.1083 3.93329 15.775 4.89996 15.6083L7.58329 15.15C7.95829 15.0833 8.48329 14.8083 8.74162 14.525L15.5833 7.28334C16.7666 6.03334 17.3 4.60834 15.4583 2.86667C13.625 1.14167 12.2333 1.75 11.05 3Z" stroke="#3E78BA" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.9082 4.20834C10.2665 6.50834 12.1332 8.26667 14.4499 8.5" stroke="#3E78BA" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 18.3333H17.5" stroke="#3E78BA" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
  info: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99984 18.3333C14.5832 18.3333 18.3332 14.5833 18.3332 10C18.3332 5.41667 14.5832 1.66667 9.99984 1.66667C5.4165 1.66667 1.6665 5.41667 1.6665 10C1.6665 14.5833 5.4165 18.3333 9.99984 18.3333Z" fill="#3E78BA"/>
  <path d="M10 6.66667V10.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.99561 13.3333H10.0031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
  gift: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
  <g clip-path="url(#clip0_2158_41073)">
  <mask id="mask0_2158_41073" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46">
  <path d="M46 0H0V46H46V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2158_41073)">
  <mask id="mask1_2158_41073" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46">
  <path d="M0 3.8147e-06H46V46H0V3.8147e-06Z" fill="white"/>
  </mask>
  <g mask="url(#mask1_2158_41073)">
  <path d="M23 11.1702V42.7658M23 11.1702L31.9035 11.1702C34.0469 11.1702 35.7845 9.43427 35.7845 7.29293V7.1119C35.7845 4.97047 34.0469 3.23451 31.9035 3.23451C30.8062 3.23451 29.7602 3.69856 29.0245 4.51182L23 11.1702ZM23 11.1702L14.0966 11.1702C11.9532 11.1702 10.2156 9.43427 10.2156 7.29293V7.1119C10.2156 4.97047 11.9532 3.23451 14.0966 3.23451C15.1939 3.23451 16.2398 3.69856 16.9756 4.51182L23 11.1702ZM40.6111 11.1702H5.38901C3.40517 11.1702 1.79688 12.7784 1.79688 14.7623V19.7872H44.2031V14.7623C44.2031 12.7784 42.5949 11.1702 40.6111 11.1702ZM40.9688 19.7872H5.03129V42.7658H40.9688V19.7872Z" stroke="url(#paint0_linear_2158_41073)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </g>
  </g>
  <defs>
  <linearGradient id="paint0_linear_2158_41073" x1="23.1492" y1="4.3951" x2="9.41523" y2="8.94245" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1F72DA"/>
  <stop offset="0.515625" stop-color="#A25BB6"/>
  <stop offset="1" stop-color="#E6AD19"/>
  </linearGradient>
  <clipPath id="clip0_2158_41073">
  <rect width="46" height="46" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `,
  award: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <mask id="mask0_2158_41525" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
  <path d="M0 3.8147e-06H48V48H0V3.8147e-06Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_2158_41525)">
  <path d="M22.1137 35.4169L17.3194 46.5938L14.355 39.1763L6.9375 42.1397L11.9034 30.5644M22.1137 35.4169C21.7641 35.2434 21.4416 35.0222 21.1556 34.7625C20.2162 35.1459 19.1372 35.1947 18.1078 34.8206C17.0794 34.4456 16.2844 33.7144 15.8109 32.8172C14.7966 32.8556 13.7653 32.5331 12.9272 31.8291C12.4941 31.4662 12.1519 31.035 11.9034 30.5644M22.1137 35.4169C22.6809 35.7 23.3222 35.8594 24 35.8594C24.6778 35.8594 25.3191 35.7 25.8862 35.4169M11.9034 30.5644C11.6709 30.1228 11.52 29.6475 11.4534 29.1609C10.4869 28.8506 9.62907 28.1944 9.08157 27.2466C8.53407 26.2978 8.39531 25.2262 8.60906 24.2344C7.8075 23.6128 7.22531 22.7025 7.035 21.6244C6.84469 20.5462 7.08094 19.4916 7.62188 18.6328C7.08094 17.7741 6.84469 16.7194 7.035 15.6412C7.22531 14.5631 7.8075 13.6528 8.60906 13.0312C8.39531 12.0394 8.53407 10.9678 9.08157 10.02C9.62907 9.07125 10.4869 8.415 11.4534 8.10469C11.5913 7.09969 12.0881 6.13969 12.9272 5.43656C13.7653 4.7325 14.7966 4.41 15.8109 4.44844C16.2844 3.55125 17.0794 2.82 18.1078 2.445C19.1372 2.07094 20.2163 2.11969 21.1556 2.50313C21.9075 1.82156 22.905 1.40625 24 1.40625C25.095 1.40625 26.0925 1.82156 26.8444 2.50313C27.7838 2.11969 28.8628 2.07094 29.8922 2.445C30.9206 2.82 31.7156 3.55125 32.1891 4.44844C33.2034 4.41 34.2347 4.7325 35.0728 5.43656C35.9119 6.13969 36.4087 7.09969 36.5466 8.10469C37.5131 8.415 38.3709 9.07125 38.9184 10.02C39.4659 10.9678 39.6047 12.0394 39.3909 13.0312C40.1925 13.6528 40.7747 14.5631 40.965 15.6412C41.1553 16.7194 40.9191 17.7741 40.3781 18.6328C40.9191 19.4916 41.1553 20.5462 40.965 21.6244C40.7747 22.7025 40.1925 23.6128 39.3909 24.2344C39.6047 25.2262 39.4659 26.2978 38.9184 27.2466C38.3709 28.1944 37.5131 28.8506 36.5466 29.1609C36.48 29.6475 36.3291 30.1228 36.0966 30.5644M25.8862 35.4169L30.6806 46.5938L33.645 39.1763L41.0625 42.1397L36.0966 30.5644M25.8862 35.4169C26.2359 35.2434 26.5584 35.0222 26.8444 34.7625C27.7837 35.1459 28.8628 35.1947 29.8922 34.8206C30.9206 34.4456 31.7156 33.7144 32.1891 32.8172C33.2034 32.8556 34.2347 32.5331 35.0728 31.8291C35.5059 31.4662 35.8481 31.035 36.0966 30.5644" stroke="url(#paint0_linear_2158_41525)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.3027 18.3516C34.3027 24.0416 29.69 28.6543 23.9999 28.6543C18.31 28.6543 13.6973 24.0416 13.6973 18.3516C13.6973 12.6615 18.31 8.04881 23.9999 8.04881C29.69 8.04881 34.3027 12.6615 34.3027 18.3516Z" stroke="url(#paint1_linear_2158_41525)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.1895 18.4649L22.7789 21.0544L27.8105 15.6488" stroke="url(#paint2_linear_2158_41525)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear_2158_41525" x1="24.1199" y1="34.8479" x2="12.9222" y2="31.4311" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1F72DA"/>
  <stop offset="0.515625" stop-color="#A25BB6"/>
  <stop offset="1" stop-color="#E6AD19"/>
  </linearGradient>
  <linearGradient id="paint1_linear_2158_41525" x1="24.0725" y1="28.0494" x2="17.3116" y2="25.9626" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1F72DA"/>
  <stop offset="0.515625" stop-color="#A25BB6"/>
  <stop offset="1" stop-color="#E6AD19"/>
  </linearGradient>
  <linearGradient id="paint2_linear_2158_41525" x1="24.0268" y1="20.8957" x2="21.7241" y2="19.8936" gradientUnits="userSpaceOnUse">
  <stop stop-color="#1F72DA"/>
  <stop offset="0.515625" stop-color="#A25BB6"/>
  <stop offset="1" stop-color="#E6AD19"/>
  </linearGradient>
  </defs>
  </svg>
  `,
  guaranteed: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
  <path d="M20.2633 9.845L19.0166 8.39666C18.7783 8.12166 18.5858 7.60833 18.5858 7.24166V5.68333C18.5858 4.71166 17.7883 3.91416 16.8166 3.91416H15.2583C14.9008 3.91416 14.3783 3.72166 14.1033 3.48333L12.655 2.23666C12.0225 1.69583 10.9866 1.69583 10.345 2.23666L8.90581 3.4925C8.63081 3.72166 8.10831 3.91416 7.75081 3.91416H6.16497C5.19331 3.91416 4.39581 4.71166 4.39581 5.68333V7.25083C4.39581 7.60833 4.20331 8.12166 3.97414 8.39666L2.73664 9.85416C2.20497 10.4867 2.20497 11.5133 2.73664 12.1458L3.97414 13.6033C4.20331 13.8783 4.39581 14.3917 4.39581 14.7492V16.3167C4.39581 17.2883 5.19331 18.0858 6.16497 18.0858H7.75081C8.10831 18.0858 8.63081 18.2783 8.90581 18.5167L10.3541 19.7633C10.9866 20.3042 12.0225 20.3042 12.6641 19.7633L14.1125 18.5167C14.3875 18.2783 14.9008 18.0858 15.2675 18.0858H16.8258C17.7975 18.0858 18.595 17.2883 18.595 16.3167V14.7583C18.595 14.4008 18.7875 13.8783 19.0258 13.6033L20.2725 12.155C20.8041 11.5225 20.8041 10.4775 20.2633 9.845ZM15.3133 9.2675L10.8858 13.695C10.7575 13.8233 10.5833 13.8967 10.4 13.8967C10.2166 13.8967 10.0425 13.8233 9.91414 13.695L7.69581 11.4767C7.42997 11.2108 7.42997 10.7708 7.69581 10.505C7.96164 10.2392 8.40164 10.2392 8.66747 10.505L10.4 12.2375L14.3416 8.29583C14.6075 8.03 15.0475 8.03 15.3133 8.29583C15.5791 8.56166 15.5791 9.00166 15.3133 9.2675Z" fill="white"/>
  </svg>
  `,
  calendar: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.9582 2.96666V1.66666C13.9582 1.325 13.6749 1.04166 13.3332 1.04166C12.9915 1.04166 12.7082 1.325 12.7082 1.66666V2.91666H7.29153V1.66666C7.29153 1.325 7.0082 1.04166 6.66653 1.04166C6.32487 1.04166 6.04153 1.325 6.04153 1.66666V2.96666C3.79153 3.175 2.69987 4.51666 2.5332 6.50833C2.51653 6.75 2.71653 6.95 2.94987 6.95H17.0499C17.2915 6.95 17.4915 6.74166 17.4665 6.50833C17.2999 4.51666 16.2082 3.175 13.9582 2.96666Z" fill="#CCCCCC"/>
  <path d="M16.6667 8.2H3.33333C2.875 8.2 2.5 8.575 2.5 9.03333V14.1667C2.5 16.6667 3.75 18.3333 6.66667 18.3333H13.3333C16.25 18.3333 17.5 16.6667 17.5 14.1667V9.03333C17.5 8.575 17.125 8.2 16.6667 8.2ZM7.675 15.175C7.63333 15.2083 7.59167 15.25 7.55 15.275C7.5 15.3083 7.45 15.3333 7.4 15.35C7.35 15.375 7.3 15.3917 7.25 15.4C7.19167 15.4083 7.14167 15.4167 7.08333 15.4167C6.975 15.4167 6.86667 15.3917 6.76667 15.35C6.65833 15.3083 6.575 15.25 6.49167 15.175C6.34167 15.0167 6.25 14.8 6.25 14.5833C6.25 14.3667 6.34167 14.15 6.49167 13.9917C6.575 13.9167 6.65833 13.8583 6.76667 13.8167C6.91667 13.75 7.08333 13.7333 7.25 13.7667C7.3 13.775 7.35 13.7917 7.4 13.8167C7.45 13.8333 7.5 13.8583 7.55 13.8917C7.59167 13.925 7.63333 13.9583 7.675 13.9917C7.825 14.15 7.91667 14.3667 7.91667 14.5833C7.91667 14.8 7.825 15.0167 7.675 15.175ZM7.675 12.2583C7.51667 12.4083 7.3 12.5 7.08333 12.5C6.86667 12.5 6.65 12.4083 6.49167 12.2583C6.34167 12.1 6.25 11.8833 6.25 11.6667C6.25 11.45 6.34167 11.2333 6.49167 11.075C6.725 10.8417 7.09167 10.7667 7.4 10.9C7.50833 10.9417 7.6 11 7.675 11.075C7.825 11.2333 7.91667 11.45 7.91667 11.6667C7.91667 11.8833 7.825 12.1 7.675 12.2583ZM10.5917 15.175C10.4333 15.325 10.2167 15.4167 10 15.4167C9.78333 15.4167 9.56667 15.325 9.40833 15.175C9.25833 15.0167 9.16667 14.8 9.16667 14.5833C9.16667 14.3667 9.25833 14.15 9.40833 13.9917C9.71667 13.6833 10.2833 13.6833 10.5917 13.9917C10.7417 14.15 10.8333 14.3667 10.8333 14.5833C10.8333 14.8 10.7417 15.0167 10.5917 15.175ZM10.5917 12.2583C10.55 12.2917 10.5083 12.325 10.4667 12.3583C10.4167 12.3917 10.3667 12.4167 10.3167 12.4333C10.2667 12.4583 10.2167 12.475 10.1667 12.4833C10.1083 12.4917 10.0583 12.5 10 12.5C9.78333 12.5 9.56667 12.4083 9.40833 12.2583C9.25833 12.1 9.16667 11.8833 9.16667 11.6667C9.16667 11.45 9.25833 11.2333 9.40833 11.075C9.48333 11 9.575 10.9417 9.68333 10.9C9.99167 10.7667 10.3583 10.8417 10.5917 11.075C10.7417 11.2333 10.8333 11.45 10.8333 11.6667C10.8333 11.8833 10.7417 12.1 10.5917 12.2583ZM13.5083 15.175C13.35 15.325 13.1333 15.4167 12.9167 15.4167C12.7 15.4167 12.4833 15.325 12.325 15.175C12.175 15.0167 12.0833 14.8 12.0833 14.5833C12.0833 14.3667 12.175 14.15 12.325 13.9917C12.6333 13.6833 13.2 13.6833 13.5083 13.9917C13.6583 14.15 13.75 14.3667 13.75 14.5833C13.75 14.8 13.6583 15.0167 13.5083 15.175ZM13.5083 12.2583C13.4667 12.2917 13.425 12.325 13.3833 12.3583C13.3333 12.3917 13.2833 12.4167 13.2333 12.4333C13.1833 12.4583 13.1333 12.475 13.0833 12.4833C13.025 12.4917 12.9667 12.5 12.9167 12.5C12.7 12.5 12.4833 12.4083 12.325 12.2583C12.175 12.1 12.0833 11.8833 12.0833 11.6667C12.0833 11.45 12.175 11.2333 12.325 11.075C12.4083 11 12.4917 10.9417 12.6 10.9C12.75 10.8333 12.9167 10.8167 13.0833 10.85C13.1333 10.8583 13.1833 10.875 13.2333 10.9C13.2833 10.9167 13.3333 10.9417 13.3833 10.975C13.425 11.0083 13.4667 11.0417 13.5083 11.075C13.6583 11.2333 13.75 11.45 13.75 11.6667C13.75 11.8833 13.6583 12.1 13.5083 12.2583Z" fill="#CCCCCC"/>
  </svg>
  `,
  user: /*html*/ `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99984 1.66667C7.8165 1.66667 6.0415 3.44167 6.0415 5.625C6.0415 7.76667 7.7165 9.5 9.89984 9.575C9.9665 9.56667 10.0332 9.56667 10.0832 9.575C10.0998 9.575 10.1082 9.575 10.1248 9.575C10.1332 9.575 10.1332 9.575 10.1415 9.575C12.2748 9.5 13.9498 7.76667 13.9582 5.625C13.9582 3.44167 12.1832 1.66667 9.99984 1.66667Z" fill="#CCCCCC"/>
  <path d="M14.2333 11.7917C11.9083 10.2417 8.11663 10.2417 5.77497 11.7917C4.71663 12.5 4.1333 13.4583 4.1333 14.4833C4.1333 15.5083 4.71663 16.4583 5.76663 17.1583C6.9333 17.9417 8.46663 18.3333 9.99997 18.3333C11.5333 18.3333 13.0666 17.9417 14.2333 17.1583C15.2833 16.45 15.8666 15.5 15.8666 14.4667C15.8583 13.4417 15.2833 12.4917 14.2333 11.7917Z" fill="#CCCCCC"/>
  </svg>
  `
}

function checkScrollSpeed(selector, callback) {
  const block = document.querySelector(selector)
  let lastPos, newPos, timer, delta
  function clear() {
    lastPos = null
    delta = 0
  }
  clear()
  block.addEventListener('scroll', function () {
    newPos = block.scrollTop
    if (lastPos != null) {
      delta = newPos - lastPos
    }
    lastPos = newPos
    clearTimeout(timer)
    timer = setTimeout(clear, 50)
    callback(Math.abs(delta))
  })
}

class ExitIntentPopup {
  constructor(device) {
    this.device = device
    this.videoTime = $el('video').currentTime / 60
    this.date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
    this.init()
  }

  init() {
    console.log('First time: ' + this.videoTime)
    this.ExitIntentPopup()
    this.changeVideoTime()
  }

  createPopup(time) {
    let thumbs = ''
    let slides = ''
    sliderData.forEach(item => {
      thumbs += /*html*/ `
        <li>
          <img src="${item.thumb}" alt="photo">
        </li>
      `
    })
    sliderData.forEach(item => {
      slides += /*html*/ `
        <div class="slide">
          <div class="inner">
            <div class="flx">
              <div class="img">
                <img src="${item.img}" alt="photo"> 
              </div>
              <div>
                <p class="name">${item.name}</p>
                <p class="university">${item.university}</p>
                <p class="received">Received ${item.received}</p>
              </div>
            </div>
            <p class="description">
              "${item.description}"
            </p>
          </div>
        </div>
      `
    })

    const popup1 = /*html*/ `
      <div class="popup1">
          <h2>Don’t miss your chance!</h2>
          <p>This webinar won't be up forever, so please watch it while you can.</p>
          <div class="points">
            <p>
              ${svgObj.hat}
              During the next 1 hour, you’ll discover:
            </p>
            <ul>
              <li>${svgObj.pencil}<p><b>Key methods</b> for getting into top schools, beyond academic scores</p></li>
              <li>${svgObj.pencil}<p>How <b>to access thousands</b> in scholarship and grant funding</p></li>
              <li>${svgObj.pencil}<p>What university & scholarships committees <b>look for in a student's profile</b></p></li>
              <li class="more"><p>...and much more.</p></li>
            </ul>
          </div>
          <div class="note">
            ${svgObj.info}<p><b>IMPORTANT NOTE:</b> Watch the entire webinar, because we have a <b>special surprise</b> for you at the end!</p>
          </div>
          <button class="main continue_watch">Continue Watching</button>
          <button class="secondary">Remind Me Later</button>
      </div>
    `

    const popup2 = /*html*/ `
      <div class="popup2">
          <h2>Essential Tips Ahead</h2>
          <p>This webinar won't be up forever, so please watch it while you can.</p>
          <div class="points">
            <p>
              ${svgObj.hat}
              During the next 30 minutes, you’ll discover:
            </p>
            <ul>
              <li>${svgObj.pencil}<p>How to <b>find scholarships</b> that are a fit for your profile & <b>prepare winning</b> university and scholarship <b>applications</b></p></li>
              <li>${svgObj.pencil}<p><b>Success stories</b> of students who've secured over $50,000 in funding and been admitted to competitive programs</p></li>
              <li>${svgObj.pencil}<p>How <b>to build a personal brand</b> that's attractive to university & scholarship committees</p></li>
              <li class="more"><p>...and much more.</p></li>
            </ul>
          </div>
          <div class="note">
            ${svgObj.info}<p><b>IMPORTANT NOTE:</b> Watch the entire webinar, because we have a <b>special surprise</b> for you at the end!</p>
          </div>
          <button class="main continue_watch">Continue Watching</button>
          <button class="secondary">Remind Me Later</button>
      </div>
    `
    const popup2_1 = /*html*/ `
      <div class="popup2_1">
        <style>
          .popup2_1 label {
            padding: 13px;
            display: block;
            border-radius: 6px;
            border: 1px solid #CCC;
            background: #FFF;
            margin-bottom: 12px;
            width: 100%;
            position: relative;
          }
          .popup2_1 label::after {
            content: '*';
            color: #EB6F2D;
            position: absolute;
            top: 6px;
            right: 6px;
            font-size: 16px;
            line-height: 1;
            z-index: 5;
          }
          .popup2_1 label::before {
            height: 100%;
            right: 13px;
            top: 0;
            width: 20px;
            content: '';
            position: absolute;
            background: #FFF;
            z-index: 4;
            pointer-events: none;
          }
          .popup2_1 label input {
            font-size: 16px;
            color: #676767;
            border: none;
            outline: none;
            width: 100%;
            background: transparent;
          }
          .popup2_1 label svg {
            position: absolute;
            top: 50%;
            right: 13px;
            transform: translateY(-50%);
            z-index: 6;
          }
          .popup2_1 label:first-of-type svg {
            pointer-events: none;
          }
        </style>
        <span class="back">${svgObj.back}Back</span>
        <h2>When is the best time to remind you?</h2>
        <p>We'll email you a link to access the FREE webinar at your convenience.</p>
        <div class="popup_form">
        <label>
          <input type="date" value="${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}">
          ${svgObj.calendar}
        </label>
        <label>
          <input type="text" placeholder="Enter your name...">
          ${svgObj.user}
        </label>
        </div>
        <button class="main">Get a Reminder</button>
      </div>
    `
    const popup3 = /*html*/ `
      <div class="popup3">
          <h2>Congratulations!</h2>
          <p>You’ve unlocked <b>up to $1,000</b> for GrantMe Admission & Funding Programs!</p>
          <div class="points">
            <p>
              ${svgObj.gift}
              In addition, you will receive the following for FREE:
            </p>
            <ul>
              <li><p><b>2 bonus years</b> of support, until the end of Grade 12 or University year 1 for students <b>currently in Grade 9 or 10</b>.</p></li>
            </ul>
          </div>
          <div class="note">
            ${svgObj.info}<p><b>IMPORTANT NOTE</b>: This offer is <b>time limited</b>, so please use it while you can.</p>
          </div>
          <a href="https://grantme.ca/offer-for-webinar-attendees/" class="main" target="_blank">Access Special Offer Now</a>
      </div>
    `

    const popup4 = /*html*/ `
      <div class="popup4">
          <h2>Give the program a try –<br>RISK-FREE</h2>
          <div class="points">
            <p>
              ${svgObj.award}
              <b>We offer a market-leading guarantee:</b>
            </p>
            <ul>
              <li>${svgObj.pencil} <p>Acceptance into one of your top <b>5 universities</b></p></li>
              <li>${svgObj.pencil} <p><b>At minimum</b>, the student receives <b>$3000</b> through scholarship, grants or bursaries</p></li>
              <li class="more"><p><b>Or your money back!</b></p></li>
            </ul>
          </div>
          <div class="satisfaction">
            <h4>100% satisfaction</h4>
            <p>If not satisfied, full refund after the first 1-1 Action plan</p>
            <p class="guarenteed">
              ${svgObj.guaranteed}Guaranteed
            </p>
          </div>
          <a href="https://app.grantme.com/book-advisor-session/" class="main">Book a 15 Minute Call</a>
      </div>
    `

    const popupBase = /*html*/ `
      <div class="crs_popup_wrapper show">
        <style>
          .crs_popup_wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100dvh;
            z-index: 9999;
            background: rgba(60, 60, 60, 0.40);
            backdrop-filter: blur(38px);
            display: none;
            justify-content: center;
            align-items: start;
            padding: 62px 16px;
            overflow-y: auto;
          }
          .crs_popup_wrapper.show {
            display: flex;
          }
          .popup_root {
            background: #fff;
            border-radius: 10px;
            display: flex;
            position: relative;
            max-width: 760px;
          }
          .popup_root .popup_close {
            position: absolute;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            top: -37px;
            right: 0;
            cursor: pointer;
          }
          .slider_desktop {
            width: 320px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
            background: url(https://grantme.ca/wp-content/uploads/2022/01/landing-hero-image.jpg) center bottom no-repeat;
            background-size: cover;
            border-radius: 0 10px 10px 0;
          }
          .slider_desktop h3 {
            font-family: 'Bitter', serif;
            font-weight: 700;
            font-size: 22px;
            line-height: 1.3;
            margin-bottom: 20px;
            color: #fff;
            text-align: center;
          }
          .slider_desktop .thumbs {
            display: flex;
            margin-bottom: 12px;
            justify-content: center;
            align-items: center;
            gap: 14px;
            padding: 0;
          }
          .slider_desktop .thumbs li {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.30);
            cursor: pointer;
          }
          .slider_desktop .thumbs li.tns-nav-active {
            border-color: #fff;
          }
          .slider_desktop .thumbs li img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .slider_desktop .slider_stories, .slider_desktop .tns-outer {
            width: 100%;
          }
          .slider_desktop .slider_stories .slide {
            padding: 0 3px;
          }
          .slider_desktop .slider_stories .slide .inner {
            padding: 14px 18px;
            background-color: #fff;
            border-radius: 12px;
            flex-shrink: 0;
          }
          .slider_desktop .slider_stories .slide .flx {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-bottom: 12px;
          }
          .slider_desktop .slider_stories .slide .flx>* {
            flex-shrink: 0;
          }
          .slider_desktop .slider_stories .slide .flx .img {
            height: 70px;
            width: 70px;
          }
          .slider_desktop .slider_stories .slide .flx .img img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .slider_desktop .slider_stories .slide .flx .name {
            font-family: 'Bitter', serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 1.4;
            color: #2B3E51;
          }
          .slider_desktop .slider_stories .slide .flx .university {
            font-size: 12px;
            line-height: 1.5;
            color: #3E78BA;
          }
          .slider_desktop .slider_stories .slide .flx p{
            margin: 0;
          }
          .slider_desktop .slider_stories .slide .flx .received {
            font-size: 12px;
            line-height: 1.5;
            color: #2B3E51;
          }
          .slider_desktop .slider_stories .slide .description {
            font-size: 14px;
            line-height: 1.5;
          }
          .slider_desktop .tns-outer [data-action] {
            display: none;
          }
          .popup_content {
            padding: 24px;
          }
          .popup_content h2 {
            font-size: 25px;
            font-family: 'Bitter', serif;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 8px;
            color: #2B3E51;
          }
          .popup_content h2+p {
            color: #676767;
            font-size: 16px;
            line-height: 1.5;
          }
          .popup_content .points {
            margin: 16px 0;
            border-radius: 6px;
            border: 1.5px solid #1F72DA;
            padding: 16px;
          }
          .popup_content .points>p{
            padding-bottom: 16px;
            border-bottom: 1px solid #ccc;
            display: flex;
            gap: 12px;
            color: #2B3E51;
            align-items: center;
            font-size: 18px;
            line-height: 1.3;
            font-family: 'Bitter', serif;
            font-weight: 700;
          }
          .popup_content .points>p svg {
            width: 48px;
            height: 48px;
          }
          .popup_content .points ul {
            margin: 16px 0 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 0;
          }
          .popup_content .points ul li {
            display: flex;
            gap: 10px;
            align-items: start;
          }
          .popup_content .points ul li svg {
            flex-shrink: 0;
          }
          .popup_content .points ul li.more{
            margin-top: -8px;
            padding-left: 30px;
          }
          .popup_content .points ul li p {
            margin: 0;
            font-size: 14px;
            line-height: 1.5;
            color: #676767;
          }
          .popup_content .points ul li p b {
            color: #2B3E51;
          }
          .popup_content .note {
            display: flex;
            gap: 10px;
          }
          .popup_content .note p {
            margin: 0;
            font-size: 14px;
            line-height: 1.5;
            color: #2B3E51;
          }
          .popup_content .note svg {
            flex-shrink: 0;
          }
          .popup_content .main {
            font-size: 20px;
            line-height: 1;
            padding: 11px;
            border-radius: 6px;
            background: #EBBD45;
            color: #2B3E51;
            text-transform: capitalize;
            border: none;
            cursor: pointer;
            margin-top: 16px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .popup_content button.secondary {
            display: flex;
            margin: 16px auto 0;
            font-size: 14px;
            line-height: 1.5;
            text-transform: uppercase;
            color: #2B3E51;
            text-decoration: underline;
            border: none;
            background: transparent;
            cursor: pointer;
          }
          .popup_content .back {
            display: inline-flex;
            align-items: center;
            gap: 1px;
            margin-bottom: 16px;
            font-size: 12px;
            line-height: 1.75;
            color: #2B3E51;
            cursor: pointer;
            padding: 0 9px 0 4px;
            border-radius: 36px;
            background: #E9F3FA;
          }
          .popup_content .satisfaction {
            border-radius: 6px;
            border: 1.5px dashed var(--primary-yellow, #EBBD45);
            background: rgba(235, 189, 69, 0.10);
            margin: 16px 0;
            padding: 14px;
            text-align: center;
          }
          .popup_content .satisfaction h4 {
            font-size: 16px;
            line-height: 1.4;
            color: #2B3E51;
            margin-bottom: 4px;
            text-transform: uppercase;
            font-weight: 700;
          }
          .popup_content .satisfaction h4+p {
            color: #676767;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 10px;
          }
          .popup_content .satisfaction .guarenteed {
            padding: 4px 60px;
            gap: 4px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(292deg, #1F72DA 13.92%, #A25BB6 43.93%, #E6AD19 72.11%);
            color: #fff;
            font-family: 'Bitter', serif;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.98px;
            font-size: 14px;
            position: relative;
            margin: 0;
          }
          .popup4 ul>li:last-of-type p {
            text-transform: uppercase;
          }
          @media (max-width: 768px) {
            .crs_popup_wrapper {
              background: rgba(43, 62, 81, 0.75);
              backdrop-filter: unset;
              align-items: flex-start;
            }
            .popup_root {
              width: 100%;
            }
            .slider_desktop {
              display: none;
            }
          }

        </style>
        <div class="popup_root">
          <span class="popup_close">${svgObj.close}</span>
          <div class="popup_content">
            ${time < 20 ? popup1 : time < 40 ? popup2 : time < 68 ? popup3 : popup4}
          </div>
          <div class="slider_desktop">
            <h3>Our Student Success Stories</h3>
            <ul class="thumbs">
              ${thumbs}
            </ul>
            <div class="slider_stories">
              ${slides}
            </div>
          </div>
        </div>
      </div>
    `

    if (!$el('.crs_popup_wrapper') && sessionStorage.getItem('popup') !== 'true') {
      console.log('Render time: ' + time)
      document.body.insertAdjacentHTML('beforeend', popupBase)
      this.popup = $el('.crs_popup_wrapper')
      const popupClose = $el('.popup_close')
      $el('.popup_content>div').setAttribute('data', new Date().getTime())
      popupClose.addEventListener('click', () => {
        const popup = $el('.popup_content > div h2').innerText
        visibilityTime()
        this.popup.remove()
        sessionStorage.setItem('popup', 'true')
        pushDataLayer('exp_exit_popup_but_close', 'Close', 'Button', popup)
      })

      this.slider = tns({
        container: '.slider_stories',
        items: 1,
        autoplay: true,
        mouseDrag: true,
        controls: false,
        nav: true,
        controls: false,
        navContainer: '.thumbs'
      })

      $$el('.thumbs li').forEach((item, index) => {
        item.addEventListener('click', () => {
          const popup = $el('.popup_content > div h2').innerText
          pushDataLayer('exp_exit_popup_icon_student_click', `Student ${index + 1}`, 'Icon', popup)
        })
      })

      $$el('.slider_stories .slide .description').forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
          const popup = $el('.popup_content > div h2').innerText
          pushDataLayer('exp_exit_popup_description_click', `Description ${index + 1}`, 'Description', popup)
        })
      })

      if ($el('.continue_watch')) {
        $el('.continue_watch').addEventListener('click', () => {
          const popup = $el('.popup_content > div h2').innerText
          visibilityTime()
          this.popup.remove()
          sessionStorage.setItem('popup', 'true')
          pushDataLayer('exp_exit_popup_but_cw', 'Continue Watching', 'Button', popup)
          if ($el('.btn-unmute')) {
            $el('.btn-unmute').click()
          }
        })
      }

      if ($el('.secondary')) {
        $el('.secondary').addEventListener('click', () => {
          const popupText = $el('.popup_content > div h2').innerText
          pushDataLayer('exp_exit_popup_but_rml', 'Remind Me Later', 'Button', popupText)
          visibilityTime()
          this.popup.querySelector('.popup_content').innerHTML = popup2_1
          $el('.popup_content>div').setAttribute('data', new Date().getTime())

          $el('.back').addEventListener('click', () => {
            visibilityTime()
            this.popup.remove()
            this.createPopup(time)
            const popupTextSub = $el('.popup_content > div h2').innerText
            pushDataLayer('exp_exit_popup_but_back', 'Back', 'Button', popupTextSub)
          })

          $el('.popup2_1 button').addEventListener('click', () => {
            if ($el('.popup2_1 input[type="date"]').value && $el('.popup2_1 input[type="text"]').value) {
              const popupTextSub = $el('.popup_content > div h2').innerText
              visibilityTime()
              this.popup.remove()
              sessionStorage.setItem('popup', 'true')
              pushDataLayer('exp_exit_popup_but_gr', 'Get a Reminder', 'Button', popupTextSub)
            } else {
              if (!$el('.popup2_1 input[type="date"]').value) {
                $el('.popup2_1 label:first-of-type').style.border = '1px solid #EB6F2D'
              }
              if (!$el('.popup2_1 input[type="text"]').value) {
                $el('.popup2_1 label:last-of-type').style.border = '1px solid #EB6F2D'
              }
            }
          })

          $el('.popup2_1 input[type="date"]').addEventListener('change', () => {
            const popupTextSub = $el('.popup_content > div h2').innerText
            $el('.popup2_1 label:first-of-type').style.border = '1px solid #ccc'
            pushDataLayer('exp_exit_popup_inp_date', 'Date', 'Input', popupTextSub)
          })

          $el('.popup2_1 input[type="text"]').addEventListener('change', () => {
            const popupTextSub = $el('.popup_content > div h2').innerText
            $el('.popup2_1 label:last-of-type').style.border = '1px solid #ccc'
            pushDataLayer('exp_exit_popup_inp_name', 'Name', 'Input', popupTextSub)
          })
        })
      }

      if ($el('.main:not(.continue_watch)')) {
        $el('.main:not(.continue_watch)').addEventListener('click', () => {
          const popupText = $el('.popup_content > div h2').innerText
          const btnText = $el('.main:not(.continue_watch)').innerText
          visibilityTime()
          this.popup.remove()
          sessionStorage.setItem('popup', 'true')
          pushDataLayer('exp_exit_popup_but_gso', btnText, 'Button', popupText)
        })
      }

      $el('.crs_popup_wrapper').addEventListener('click', e => {
        if (e.target === $el('.crs_popup_wrapper')) {
          const popupText = $el('.popup_content > div h2').innerText
          visibilityTime()
          this.popup.remove()
          sessionStorage.setItem('popup', 'true')
          pushDataLayer('exp_exit_popup_but_bg', 'Background', 'Button', popupText)
        }
      })

      // setInterval(() => {
      //   $el('.popup_content').innerHTML = time < 20 ? popup1 : time < 40 ? popup2 : time < 68 ? popup3 : popup4
      //   console.log('>>> check')
      // }, 60000)
    }

    function visibilityTime() {
      const popup = $el('.popup_content > div h2').innerText
      const time = ((new Date().getTime() - $el('.popup_content>div').getAttribute('data')) / 1000).toFixed(0)
      pushDataLayer('exp_exit_popup_focus', time, 'Visibility ', popup)
    }
  }

  ExitIntentPopup() {
    if (this.device === 'desktop') {
      $el('body').addEventListener('mouseleave', () => {
        this.createPopup(this.videoTime)
      })
    } else {
      $el('.video-js').addEventListener('click', () => {
        if ($el('.video-js').classList.contains('crs_popup_start')) {
          $el('.video-js').classList.remove('crs_popup_start')
          this.createPopup(this.videoTime)
        } else {
          $el('.video-js').classList.add('crs_popup_start')
        }
      })
      $el('.p-absolute.z-index-101').addEventListener('click', () => {
        if ($el('.p-absolute.z-index-101').classList.contains('crs_popup_start')) {
          $el('.p-absolute.z-index-101').classList.remove('crs_popup_start')
          this.createPopup(this.videoTime)
        } else {
          $el('.p-absolute.z-index-101').classList.add('crs_popup_start')
        }
      })
      checkScrollSpeed('.liveroom_content .scroll_wrapper', delta => {
        if (delta > 110) {
          this.createPopup(this.videoTime)
        }
      })
    }

    if ($el('.btn-unmute')) {
      let unmuteStart = setTimeout(() => {
        this.createPopup(this.videoTime)
      }, 20000)

      $el('.btn-unmute').addEventListener('click', () => {
        clearTimeout(unmuteStart)
      })
    }
    $el('.vjs-control-bar').addEventListener('click', e => {
      if (e.target.closest('button[title="Exit Fullscreen"]')) {
        this.createPopup(this.videoTime)
      }
    })
  }

  changeVideoTime() {
    setInterval(() => {
      this.videoTime = $el('video').currentTime / 60
    }, 5000)
  }
}

new ExitIntentPopup(device)
