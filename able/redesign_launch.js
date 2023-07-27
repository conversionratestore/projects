;(function () {
  // -------------------------------------
  // CONSTANTS & CSS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/able/img'
  const DEVICE = screen.width < 768 ? 'mobile' : 'desktop'

  let isEmailPageVisited = false

  const styleCSS = /*html*/`
  <style>
    .disabled_arr {
      visibility: hidden;
    }

    #buttonDiv {
      display: flex;
      justify-content: center;
    }

    .crs_block {
      font-family: 'SF Pro Text', sans-serif;
    }

    .crs_block[hidden="true"],
    .crs_block[hidden] {
      display: none !important;
    }

    .crs_block p,
    .crs_block span,
    .crs_block a,
    .crs_block h2,
    .crs_block h3,
    .crs_block h4,
    .crs_block h5 {
      margin: 0;
    }

    .email_step {
      padding: 24px;
    }

    .email_step h3 {
      font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.004em;
      color: #010101;
    }

    .email_step h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #010101;

      margin: 12px 0 24px;
    }

    .email_step h5 {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #010101;
    }

    .email_step ul {
      padding: 0;
      margin: 0;
      list-style: none;
      margin: 16px 0 24px;
    }

    .email_step ul li {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    .email_step ul li span {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.0024em;
      color: #202B47;
    }

    .email_step ul li svg {
      width: 40px;
      height: 40px;
      margin-right: 12px;
      flex-shrink: 0;
    }

    #email_wrapper {
      display: flex;
      flex-direction: column;
    }

    #email_wrapper input {
      position: relative;
      border: none;
      outline: none;
      background: #F6F6F6;
      border-radius: 8px;
      padding: 19px 16px;
      margin-top: 6px;
      border: none;
      border-radius: 8px;
      background-size: 100% 2px;
      background-repeat: no-repeat;
      background-position: bottom 0 center;
      font-family: 'SF Pro Text', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }

    #email_wrapper input:focus {
      background-image: linear-gradient(#423BE6, #423BE6);
    }

    #email_wrapper p {
      visibility: hidden;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: right;
      color: #FF4D2B;
      margin-top: 4px;
    }

    #email_wrapper button {
      width: 100%;
      border: none;
      margin-top: 24px;
      background: #C5C5D1;
      border-radius: 8px;
      font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      color: #FFFFFF;
      padding: 11px;
      cursor: pointer;
    }

    #email_wrapper button {
      margin-top: 8px;
    }

    #email_wrapper.invalid label {
      color: #FF4D2B;
    }

    #email_wrapper.invalid input {
      background-image: linear-gradient(#FF4D2B, #FF4D2B);
    }

    #email_wrapper.invalid p {
      visibility: visible;
    }

    #email_wrapper.valid input {
      background-image: none;
    }

    #email_wrapper.valid button {
      background: #EB731A;
    }

    #email_wrapper.valid button:hover {
      background: #CA5010;
    }

    p.acknowledge {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #5E626B;
      margin: 16px 0 24px;
      text-align: center;
    }

    .acknowledge a {
      color: #1375D6;
    }

    .security {
      display: flex;
      gap: 12px;
      align-items: start;
      padding: 16px;
      background: #E0E6F7;
      border-radius: 12px;
    }

    .security p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
    }

    p.choose {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #010101;
      margin-bottom: 16px;
    }

    .prices {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .prices>div {
      width: 22.5%;
      max-width: 120px;
      background: #E8F5FD;
      border-radius: 6px;
      padding: 21px 10px;
      text-align: center;
      /* transition: all 0.5s ease; */
      cursor: pointer;
    }

    .prices>div:hover {
      background: #B7E3FF;
    }

    .prices>div.active_price {
      background: #1375D6;
    }

    .prices>div span {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #010101;
    }

    .prices>div.active_price span {
      color: #FFFFFF;
    }


    .most_popular {
      position: relative;
    }

    .most_popular>div {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      width: 100%;
      text-align: center;
    }

    .most_popular>div p {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #4A4A4A;
    }

    .most_popular>div img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }

    .support {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px;
      background: #FFE9D2;
      border-radius: 12px;
      max-width: 80%;
      margin-top: 42px;
    }

    .support p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
    }

    .support .currle_arrow {
      position: absolute;
      left: calc(100% + 8px);
      bottom: 80%;
    }

    .stars {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      margin-top: 16px;
    }

    .stars p {
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      color: #010101;
    }

    .divider {
      display: flex;
      align-items: center;
      margin: 12px 0;
    }

    .line {
      flex-grow: 1;
      height: 1px;
      background-color: #E0E3EB;
    }

    .or {
      padding: 0 20px;
    }

    .or span{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #010101;
    }

    @media only screen and (max-width: 389px) {
      .support {
        margin-top: 60px;
      }
    }

    @media only screen and (min-width: 769px) {
      body.grayBg {
        background: #F6F6F6;
      }

      p.choose {
        text-align: center;
        font-size: 24px;
        line-height: 34px;
        letter-spacing: normal;
        margin-bottom: 24px;
        font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
      }

      .support_wrapper {
        position: relative;
      }

      .support {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 273px;
        transform: translateX(70%);
        margin-top: 14px;
      }

      .support img{
        width: 40px;
        height: 37px;
      }

      .support p{
        color: #202B47;
      }

      .support .currle_arrow {
        position: absolute;
        left: 0;
        bottom:calc(100% + 17px);
        transform: rotate(270deg);
      }

      .bottom {
        text-align: center;
      }

      .email_step {
        max-width: 1030px;
        margin: 40px auto 0;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .email_step h2 {
        font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 50px;
        color: #010101;
        margin-bottom: 40px;
      }

      .email_step .left {
        height: fit-content;
        padding: 50px;
        border: 1px solid #E0E3EB;
        border-radius: 12px 0 0 12px;
        border-right: none;
      }

      .email_step .right {
        position: relative;
        min-width: 49%;
        max-width: 505px;
        padding: 40px;
        background: #fff;
        border-radius: 12px;
      }

      .email_step ul li svg {
        width: 48px;
        height: 48px;
        margin-right: 16px;
      }

      .email_step ul li span {
        font-size: 16px;
        line-height: 20px;
      }

      .circles_top,
      .circles_bottom {
        position: absolute;
        right: -31px;
        z-index: -1;
      }

      .circles_top {
        top: 25px;
        left: calc(100% - 31px);
      }

      .circles_bottom {
        top: auto;
        bottom: -15px;
        left: calc(100% - 67px);
      }
    }

    @media only screen and (max-width: 1237px) {
      .email_step .circles_top,
      .email_step .circles_bottom {
        display: none;
      }
    }

    @media only screen and (min-width: 770px) and (max-width: 1175px) {
      .support {
        transform: translateX(25%);
      }

      .support .currle_arrow {
        left: 43%;
      }
    }
  </style>
  `

  // -------------------------------------
  // HTML ELEMENTS
  // -------------------------------------

  const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#E0E6F7"/>
          <g clip-path="url(#clip0_633_510)">
          <path d="M17.9374 15.3335H15.8541C15.5666 15.3335 15.3333 15.5668 15.3333 15.8543V22.1043C15.3333 22.3918 15.5666 22.6251 15.8541 22.6251H17.9374C18.2249 22.6251 18.4583 22.3918 18.4583 22.1043V15.8543C18.4583 15.5668 18.2249 15.3335 17.9374 15.3335Z" fill="#1375D6"/>
          <path d="M13.7707 18.4585H11.6873C11.3999 18.4585 11.1665 18.6918 11.1665 18.9793V22.1043C11.1665 22.3918 11.3999 22.6252 11.6873 22.6252H13.7707C14.0582 22.6252 14.2915 22.3918 14.2915 22.1043V18.9793C14.2915 18.6918 14.0582 18.4585 13.7707 18.4585Z" fill="#1375D6"/>
          <path d="M22.1039 12.2085H20.0206C19.7331 12.2085 19.4998 12.4418 19.4998 12.7293V22.1042C19.4998 22.3917 19.7331 22.6251 20.0206 22.6251H22.1039C22.3914 22.6251 22.6248 22.3917 22.6248 22.1042V12.7293C22.6248 12.4418 22.3914 12.2085 22.1039 12.2085Z" fill="#1375D6"/>
          <path d="M31.6945 30.2219L25.4769 24.0042C26.9478 22.2084 27.8331 19.9147 27.8331 17.4168C27.8331 11.6731 23.1603 7.00024 17.4166 7.00024C11.6729 7.00024 7 11.6731 7 17.4168C7 23.1605 11.6729 27.8333 17.4165 27.8333C19.9144 27.8333 22.2082 26.948 24.004 25.4771L30.2216 31.6948C30.4248 31.8979 30.6914 32 30.9581 32C31.2248 32 31.4915 31.8979 31.6946 31.6948C32.1019 31.2875 32.1019 30.6292 31.6945 30.2219ZM17.4165 25.7501C12.8218 25.7501 9.08328 22.0116 9.08328 17.4168C9.08328 12.822 12.8218 9.08352 17.4165 9.08352C22.0113 9.08352 25.7498 12.8221 25.7498 17.4168C25.7498 22.0115 22.0113 25.7501 17.4165 25.7501Z" fill="#1375D6"/>
          </g>
          <defs>
          <clipPath id="clip0_633_510">
          <rect width="25" height="25" fill="white" transform="translate(7 7)"/>
          </clipPath>
          </defs>
        </svg>
  `
  const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#E0E6F7"/>
  <g clip-path="url(#clip0_633_522)">
  <path d="M19.5 21.3334C20.4688 20.3126 21.0625 18.9376 21.0625 17.4167V22.2709C20.6458 22.1563 20.2083 22.1042 19.7604 22.1042H19.5V21.3334Z" fill="#1375D6"/>
  <path d="M32 9.08333V24.7083C32 25.8542 31.0625 26.7917 29.9167 26.7917H25.1667C25.0938 26.2396 24.9271 25.7083 24.6979 25.2292H29.1354C29.8542 25.2292 30.4375 24.6458 30.4375 23.9271V9.86458C30.4375 9.14583 29.8542 8.5625 29.1354 8.5625C28.9896 8.5625 28.875 8.67708 28.875 8.82292C28.875 9.82292 28.0521 10.6458 27.0521 10.6458H24.4479C23.4479 10.6458 22.625 9.82292 22.625 8.82292C22.625 8.67708 22.5104 8.5625 22.3646 8.5625C21.6458 8.5625 21.0625 9.14583 21.0625 9.86458V17.4167C21.0625 15.8958 20.4688 14.5208 19.5 13.4896V9.08333C19.5 7.9375 20.4375 7 21.5833 7H29.9167C31.0625 7 32 7.9375 32 9.08333Z" fill="#1375D6"/>
  <path d="M25.75 16.375C24.8885 16.375 24.1875 15.674 24.1875 14.8125C24.1875 13.951 24.8885 13.25 25.75 13.25C26.6115 13.25 27.3125 13.951 27.3125 14.8125C27.3125 15.674 26.6115 16.375 25.75 16.375Z" fill="#1375D6"/>
  <path d="M28.0938 20.5417H23.4062C22.975 20.5417 22.625 20.1917 22.625 19.7605C22.625 18.4678 23.676 17.4167 24.9688 17.4167H26.5312C27.824 17.4167 28.875 18.4678 28.875 19.7605C28.875 20.1917 28.525 20.5417 28.0938 20.5417Z" fill="#1375D6"/>
  <path d="M15.3334 21.5833C13.0355 21.5833 11.1667 19.7146 11.1667 17.4167C11.1667 15.1188 13.0355 13.25 15.3334 13.25C17.6313 13.25 19.5001 15.1188 19.5001 17.4167C19.5001 19.7146 17.6313 21.5833 15.3334 21.5833Z" fill="#1375D6"/>
  <path d="M22.8854 32.0001H7.78125C7.35 32.0001 7 31.6501 7 31.2188V27.573C7 25.4188 8.75208 23.6667 10.9063 23.6667H19.7604C21.9146 23.6667 23.6667 25.4188 23.6667 27.573V31.2188C23.6667 31.6501 23.3167 32.0001 22.8854 32.0001Z" fill="#1375D6"/>
  </g>
  <defs>
  <clipPath id="clip0_633_522">
  <rect width="25" height="25" fill="white" transform="translate(7 7)"/>
  </clipPath>
  </defs>
</svg>
  `
  const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#E0E6F7"/>
  <g clip-path="url(#clip0_633_533)">
  <path d="M28.8745 24.1879H17.9375H7.7817C7.35047 24.1879 7.00049 24.5378 7.00049 24.9691V31.2188C7.00049 31.65 7.35047 32 7.7817 32H10.1254V29.6564C10.1254 29.2251 10.4753 28.8752 10.9066 28.8752C11.3378 28.8752 11.6878 29.2251 11.6878 29.6564V32H13.2502V28.0939C13.2502 27.6627 13.6002 27.3127 14.0314 27.3127C14.4627 27.3127 14.8127 27.6627 14.8127 28.0939V32H16.3751V29.6564C16.3751 29.2251 16.7251 28.8752 17.1563 28.8752C17.5875 28.8752 17.9375 29.2251 17.9375 29.6564V32H19.5V29.6564C19.5 29.2251 19.8499 28.8752 20.2812 28.8752C20.7124 28.8752 21.0624 29.2251 21.0624 29.6564V32H22.6248V28.0939C22.6248 27.6627 22.9748 27.3127 23.406 27.3127C23.8373 27.3127 24.1873 27.6627 24.1873 28.0939V32H25.7497V29.6564C25.7497 29.2251 26.0997 28.8752 26.5309 28.8752C26.9621 28.8752 27.3121 29.2251 27.3121 29.6564V32H28.8745C30.601 32 31.9994 30.6016 31.9994 28.8752V21.063C31.9994 22.7879 30.601 24.1879 28.8745 24.1879Z" fill="#1375D6"/>
  <path d="M24.0749 15.1507C22.0344 12.5086 19.272 13.2633 17.6236 13.7164C17.3361 13.7945 17.0705 13.8617 16.8315 13.9133C16.4205 12.8477 15.8909 10.3103 19.0985 8.4588C19.472 8.24319 19.6001 7.76508 19.3845 7.39166C19.1673 7.01668 18.6892 6.88856 18.3173 7.10574C17.0346 7.84633 16.2049 8.71348 15.6878 9.61032C15.5362 9.35564 15.3706 9.10721 15.1706 8.87597C14.1269 7.66665 12.6082 7.00105 10.8958 7.00105C10.4645 7.00105 10.1146 7.35104 10.1146 7.78227C10.1146 9.49469 10.7802 11.0134 11.9895 12.0586C12.8801 12.8289 13.966 13.2461 15.0456 13.2508C15.0722 13.4148 15.1034 13.5726 15.1409 13.7273C15.1268 13.7226 15.1159 13.7195 15.1034 13.7164C13.455 13.2664 10.6942 12.5102 8.65212 15.1507C6.97563 17.324 6.56315 20.0552 7.47092 22.6254H25.2577C26.1639 20.0552 25.7529 17.324 24.0749 15.1507Z" fill="#1375D6"/>
  <path d="M28.0933 17.938H27.059C27.3965 19.4598 27.3418 21.055 26.8809 22.6253H28.0933C29.387 22.6253 30.437 21.5753 30.437 20.2816C30.437 18.9879 29.387 17.938 28.0933 17.938Z" fill="#1375D6"/>
  </g>
  <defs>
  <clipPath id="clip0_633_533">
  <rect width="25" height="25" fill="white" transform="translate(7 7)"/>
  </clipPath>
  </defs>
  </svg>`
  const svg4 = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="20" fill="#E0E6F7"/>
  <g clip-path="url(#clip0_633_547)">
  <path d="M30.8922 16.1953C29.511 14.3203 27.6235 14.8063 26.5579 15.1109C26.6532 14.3719 26.9563 13.2719 27.8985 12.2062C28.1844 11.8828 28.1532 11.3891 27.8297 11.1031C27.5079 10.8187 27.0157 10.8437 26.7266 11.1703C26.2485 11.7109 25.9079 12.2625 25.6516 12.7937C25.2797 11.0109 23.5969 9.34375 21.0626 9.34375C21.0626 12.2031 23.1797 13.9859 25.1969 14.0078C25.086 14.4203 25.0157 14.8016 24.9844 15.1219C23.9266 14.8187 22.0047 14.2969 20.6079 16.1953C19.3094 17.9563 19.1422 20.2125 20.161 22.2266C21.2422 24.3672 23.436 25.75 25.7501 25.75C28.0626 25.75 30.2579 24.3672 31.3391 22.2281C32.3579 20.2125 32.1907 17.9563 30.8922 16.1953Z" fill="#1375D6"/>
  <path d="M18.7188 10.125H14.0312C13.6 10.125 13.25 10.475 13.25 10.9062C13.25 11.3375 13.6 11.6875 14.0312 11.6875H18.7188C19.15 11.6875 19.5 11.3375 19.5 10.9062C19.5 10.475 19.15 10.125 18.7188 10.125Z" fill="#1375D6"/>
  <path d="M18.7188 13.25H14.0312C13.6 13.25 13.25 13.6 13.25 14.0312C13.25 14.4625 13.6 14.8125 14.0312 14.8125H18.7188C19.15 14.8125 19.5 14.4625 19.5 14.0312C19.5 13.6 19.15 13.25 18.7188 13.25Z" fill="#1375D6"/>
  <path d="M17.1562 16.375H14.0312C13.6 16.375 13.25 16.725 13.25 17.1562C13.25 17.5875 13.6 17.9375 14.0312 17.9375H17.1562C17.5875 17.9375 17.9375 17.5875 17.9375 17.1562C17.9375 16.725 17.5875 16.375 17.1562 16.375Z" fill="#1375D6"/>
  <path d="M27.3125 10.125V8.5625C27.3125 7.7 26.6125 7 25.75 7H11.6875C10.825 7 10.125 7.7 10.125 8.5625V27.3125H7.78126C7.34532 27.3125 6.99844 27.6766 7.00001 28.1125C7.01094 30.2594 8.75782 32 10.9063 32H23.4063C25.5641 32 27.3125 30.2516 27.3125 28.0938V27.3125H25.75V28.0938C25.75 29.3859 24.6984 30.4375 23.4063 30.4375C22.1141 30.4375 21.0625 29.3859 21.0625 28.0938C21.0625 27.6625 20.7125 27.3125 20.2813 27.3125H11.6875V8.5625H25.75V10.125H27.3125Z" fill="#1375D6"/>
  </g>
  <defs>
  <clipPath id="clip0_633_547">
  <rect width="25" height="25" fill="white" transform="translate(7 7)"/>
  </clipPath>
  </defs></svg>`

  const emailPage = /*html*/`
<div class="email_step crs_block" hidden="true">
    <h3>What email would you like to use to access your program?</h3>
    <h4>We’ve created a personalized program to help you reach your goal of losing 10 kg</h4>
    <h5>You’ll get:</h5>
    <ul>
      <li>
        ${svg1}
        <span>Science-backed weight loss program tailored to your needs and goals</span>
      </li>
      <li>
        ${svg2}
        <span>Unlimited 1-on-1 video and text support from your coach</span>
      </li>
      <li>
        ${svg3}
        <span>Customized diet [and exercise plan] tailored to your weight and lifestyle</span>
      </li>
      <li>
        ${svg4}
        <span>The accountability tools you'll need to live our program and build life-long health.</span>
      </li>
    </ul>
    <div id="email_wrapper" class="${localStorage.email ? 'valid' : ''}">
      <label for="email">Your email</label>
      <input type="email" placeholder="email@gmail.com" value="${localStorage.email ? localStorage.email : ''}" />
      <p>Please enter correct email.</p>
      <button>Continue</button>
      <div class="divider">
        <div class="line"></div>
        <div class="or"><span>OR</span></div>
        <div class="line"></div>
      </div>
      <div id="buttonDiv"></div>
    </div>
    <p class="acknowledge">By clicking "Continue" you acknowledge that you have read, understood, and accepted Able’s <a
        href="https://help.ableapp.com/en/articles/5590061-eula" target="_blank" rel="noreferrer nofollow">Terms of
        Use</a> and <a href="https://help.ableapp.com/en/articles/5590060-privacy-notice" target="_blank"
        rel="noreferrer nofollow">Privacy Policy</a>.</p>
    <div class="security">
      <img src="${IMAGE_DIR_URL}/security.svg" alt="security">
      <p>We take data security seriously. Your email address will never be shared with third parties or spam.</p>
    </div>
  </div>
  `
  const emailPageDesktop = /*html*/`
  <div class="email_step crs_block" hidden="true">
    <div class="left">
      <h2>You’ll get:</h2>
      <ul>
        <li>
          ${svg1}
          <span>Science-backed weight loss program tailored to your needs and goals</span>
        </li>
        <li>
          ${svg2}
          <span>Unlimited 1-on-1 video and text support from your coach</span>
        </li>
        <li>
          ${svg3}
          <span>Customized diet [and exercise plan] tailored to your weight and lifestyle</span>
        </li>
        <li>
          ${svg4}
          <span>The accountability tools you'll need to live our program and build life-long health.</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <h3>What email would you like to use to access your program?</h3>
      <h4>We’ve created a personalized program to help you reach your goal of losing 10 kg</h4>
      <div id="email_wrapper" class="${localStorage.email ? 'valid' : ''}">
        <label for="email">Your email</label>
        <input type="email" placeholder="email@gmail.com" value="${localStorage.email ? localStorage.email : ''}" />
        <p>Please enter correct email.</p>
        <button>Continue</button>
        <div class="divider">
        <div class="line"></div>
        <div class="or"><span>OR</span></div>
        <div class="line"></div>
      </div>
      <div id="buttonDiv"></div>
      </div>
      <p class="acknowledge">By clicking "Continue" you acknowledge that you have read, understood, and accepted Able’s
        <a href="https://help.ableapp.com/en/articles/5590061-eula" target="_blank" rel="noreferrer nofollow">Terms of
          Use</a> and <a href="https://help.ableapp.com/en/articles/5590060-privacy-notice" target="_blank"
          rel="noreferrer nofollow">Privacy Policy</a>.
      </p>
      <div class="security">
        <img src="${IMAGE_DIR_URL}/security.svg" alt="security">
        <p>We take data security seriously. Your email address will never be shared with third parties or spam.</p>
      </div>
      <img class="circles_top" src="${IMAGE_DIR_URL}/email_circles_top.svg" alt="">
      <img class="circles_bottom" src="${IMAGE_DIR_URL}/email_circles_bottom.svg" alt="">
    </div>
  </div>
  `

  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
  const waitForElm = (selector) => {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector))
      }

      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector))
          observer.disconnect()
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
    })
  }

  let observerMap = {}

  const checkVisibilityAfterMs = (elSelector, eventsObj) => {
    let timer
    const config = {
      root: null,
      threshold: 0.6,
    }

    if (observerMap[elSelector]) {
      observerMap[elSelector].disconnect() // Disconnect previous observer
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            observer.disconnect()
            sendGAEvent(eventsObj)
          }, 2000)
        } else {
          clearTimeout(timer)
        }
      })
    }, config)

    observer.observe(document.querySelector(elSelector))
    observerMap[elSelector] = observer
  }

  // Function to disconnect all observers
  const disconnectAllObservers = () => {
    for (const key in observerMap) {
      observerMap[key].disconnect()
    }
    observerMap = {}
  }

  function sendGAEvent(obj) { // Send a Google Analytics event
    window.dataLayer = window.dataLayer || []
    dataLayer.push(obj)

    console.log(obj)
  }

  const setEmailValue = () => {
    const clientInput = document.querySelector('.mainContent-0-2-1 input')
    const myInput = document.querySelector('#email_wrapper input')

    let lastValue = clientInput.value
    clientInput.value = myInput.value
    let inputEvent = new Event('input', { bubbles: true })
    // hack React15
    inputEvent.simulated = true
    // hack React16
    let tracker = clientInput._valueTracker
    if (tracker) {
      tracker.setValue(lastValue)
    }
    clientInput.dispatchEvent(inputEvent)

    sendGAEvent({
      'event': 'event-to-ga4',
      'event_name': 'exp_move_email_fs_what_email',
      'event_desc': 'Form submit',
      'event_type': 'Form submit',
      'event_loc': 'Step What email would you like'
    })

    document.getElementById('email_wrapper').classList.add('valid')
    document.querySelector('.mainContent-0-2-1 button')?.click()
  }

  /* email */
  const setEmailPageLogic = () => {
    const emailWrapper = document.getElementById('email_wrapper')
    const myInput = emailWrapper.querySelector("input")
    const myButton = emailWrapper.querySelector("button")
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/

    let typingTimer
    const delay = 1000 // Adjust the delay as desired (in milliseconds)

    myInput.addEventListener('click', () => {
      sendGAEvent({
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_einput',
        'event_desc': 'Your email',
        'event_type': 'Input',
        'event_loc': 'Step What email would you like'
      })
    })

    myInput.addEventListener('input', () => {
      clearTimeout(typingTimer) // Clear the previous typing timer

      typingTimer = setTimeout(() => {
        if (myInput.value.length > 0) {
          if (emailPattern.test(myInput.value)) {
            emailWrapper.classList.add('valid')
            emailWrapper.classList.remove('invalid')
          } else if (!emailWrapper.classList.contains('invalid')) {
            emailWrapper.classList.add('invalid')
            emailWrapper.classList.remove('valid')

            sendGAEvent({
              'event': 'event-to-ga4',
              'event_name': 'exp_move_email_err',
              'event_desc': 'Validation error',
              'event_type': 'Input',
              'event_loc': 'Step What email would you like'
            })
          }
        } else {
          emailWrapper.classList.remove('invalid')
          emailWrapper.classList.remove('valid')
        }
      }, delay)
    })

    myButton.addEventListener('click', () => {
      sendGAEvent({
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_cont',
        'event_desc': 'Continue',
        'event_type': 'Button',
        'event_loc': 'Step What email would you like'
      })

      if (myInput.value.length === 0) {
        emailWrapper.classList.add('invalid')
        myInput.focus()

        sendGAEvent({
          'event': 'event-to-ga4',
          'event_name': 'exp_move_email_err',
          'event_desc': 'Validation error',
          'event_type': 'Input',
          'event_loc': 'Step What email would you like'
        })
      } else if (emailWrapper.classList.contains('invalid')) {
        myInput.focus()
      } else {
        setEmailValue()
      }
    })

    const waitForGoogleBtn = setInterval(() => {
      if (
        document.getElementById("buttonDiv")
        && document.querySelector('#email_wrapper button')
        && document.querySelector('.mainContent-0-2-1 input')
        && (typeof google !== 'undefined' && google?.accounts?.id?.initialize && google?.accounts?.id?.renderButton)
      ) {
        clearInterval(waitForGoogleBtn)

        google.accounts.id.initialize({
          client_id: '861160216721-ffluipsg8tgi9b9avi2oq6bl1d7oqnap.apps.googleusercontent.com',
          callback: handleCredentialResponse
        })
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          {
            theme: "filled_black",
            size: "large",
            locale: 'en',
            text: 'continue_with',
            width: document.querySelector('#email_wrapper button').clientWidth,
            click_listener: onClickHandler
          }  // customization attributes
        )
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function onClickHandler() {
    sendGAEvent({
      'event': 'event-to-ga4',
      'event_name': 'exp_move_email_google',
      'event_desc': 'Continue with Google',
      'event_type': 'Button',
      'event_loc': 'Step What email would you like to use to access your program?'
    })
  }

  let isEmailLogicAdded = false
  let stepIsRecorded = false

  const showEmailOnPage = () => {
    isEmailPageVisited = true

    if (DEVICE === 'desktop') {
      document.body.classList.add('grayBg')
    }

    const waitForElements = setInterval(() => {
      if (
        document.querySelector('.mainContent-0-2-1 button')
        && document.querySelector('.mainContent-0-2-1 input')
        && document.querySelector('.security')
      ) {
        clearInterval(waitForElements)

        document.querySelector('.mainContent-0-2-1').hidden = true
        document.querySelector('.email_step').hidden = false

        if (document.querySelector('header > div')) {
          document.querySelector('header > div').classList.add('disabled_arr')
        }

        sendGAEvent({
          'event': 'event-to-ga4',
          'event_name': 'exp_move_email_vis_screen_what_email',
          'event_desc': 'What email would you like to use to access your program?',
          'event_type': 'View screen',
          'event_loc': 'Step What email would you like'
        })

        checkVisibilityAfterMs('.email_step ul', {
          'event': 'event-to-ga4',
          'event_name': 'exp_move_email_vis_will_get',
          'event_desc': 'You will get',
          'event_type': 'View element on screen',
          'event_loc': 'Step What email would you like'
        })

        checkVisibilityAfterMs('.security', {
          'event': 'event-to-ga4',
          'event_name': 'exp_move_email_vis_we_take',
          'event_desc': 'We take data security seriously.',
          'event_type': 'View element on screen',
          'event_loc': 'Step What email would you like'
        })

        checkVisibilityAfterMs('#email_wrapper input', {
          'event': 'event-to-ga4',
          'event_name': 'exp_move_email_vis_einput',
          'event_desc': 'Your email',
          'event_type': 'View element on screen',
          'event_loc': 'Step What email would you like'
        })

        if (!isEmailLogicAdded) {
          isEmailLogicAdded = true
          setEmailPageLogic()
        }
      }
    }, WAIT_INTERVAL_TIMEOUT)

    if (!stepIsRecorded) {
      stepIsRecorded = true

      const recordClarityEmailStep = setInterval(() => {
        if (typeof clarity === 'function') {
          clearInterval(recordClarityEmailStep)
          clarity('set', `move_email_relaunch`, 'email_step')
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }
  }

  function handleCredentialResponse(response) {
    const jwt = response.credential

    // Decode the JWT ID token
    const base64Url = jwt.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    // Parse the JSON payload and retrieve the email
    const payload = JSON.parse(jsonPayload)
    const email = payload.email

    document.querySelector('#email_wrapper input').value = email

    setEmailValue(true)
  }

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  const scriptTag = document.createElement('script')
  scriptTag.src = 'https://accounts.google.com/gsi/client'
  scriptTag.async = true
  scriptTag.defer = true

  document.body.appendChild(scriptTag)
  document.head.insertAdjacentHTML('afterend', styleCSS)

  waitForElm('#root').then((root) => {
    // Add pages to the DOM
    if (DEVICE === 'desktop') {
      root.insertAdjacentHTML('afterend', emailPageDesktop)
    } else {
      root.insertAdjacentHTML('afterend', emailPage)
    }

    if (window.location.pathname === '/email') {
      waitForElm('.email_step').then(() => showEmailOnPage())
    }

    /* Run mutation for page recognition */
    const globalMut = new MutationObserver(() => {
      globalMut.disconnect()

      if (window.location.pathname !== '/email') {
        document.querySelector('.grayBg')?.classList.remove('grayBg')

        if (document.querySelector('.mainContent-0-2-1')?.hidden) {
          document.querySelector('.mainContent-0-2-1').hidden = false
        }

        if (!document.querySelector('.email_step')?.hidden) {
          document.querySelector('.email_step').hidden = true
        }

        if (Object.entries(observerMap).length > 0) {
          disconnectAllObservers()
        }

        isEmailPageVisited = false
      } else if (window.location.pathname === '/email' && isEmailPageVisited === false) {
        showEmailOnPage()
      }

      globalMut.observe(root, {
        childList: true,
        subtree: true
      })
    })
    globalMut.observe(root, {
      childList: true,
      subtree: true
    })
  })

  sendGAEvent({
    'event': 'event-to-ga4',
    'event_name': 'exp_discount_after_payment_attempt_load',
    'event_desc': 'loaded'
  })

  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity('set', `move_email_relaunch`, 'variant_1')
    }
  }, WAIT_INTERVAL_TIMEOUT)
})()