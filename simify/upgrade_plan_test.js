(function () {
  console.dir(
    "%c EXP: AOV hypothesis (DEV: Olha)",
    "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
  );

  const dir = "https://conversionratestore.github.io/projects/simify/img/";

  const $$el = (selector) => document.querySelectorAll(selector);
  const $el = (selector) => document.querySelector(selector);

  const nameDomain = window.location.origin.includes("simsdirect")
    ? "simsdirect"
    : "simify";

  const clarityInterval = setInterval(function () {
    if (typeof clarity == "function") {
      clearInterval(clarityInterval);
      clarity("set", "exp_aov_improv", "variant_1");
    }
  }, 200);

  const dataIcons = {
    phone: `
      <svg xmlns="http://www.w3.org/2000/svg" width="52" height="58" viewBox="0 0 52 58" fill="none">
          <path d="M33.202 8.91699L10.7212 9.63702L9.24219 11.7971V48.8785L11.5494 51.9386L33.202 52.3587L35.7458 49.3585L34.9768 11.3171L33.202 8.91699Z" fill="white"/>
          <path d="M18.2798 12.9038C18.346 12.9038 23.1344 12.8438 23.0682 12.8414C23.3415 12.8378 23.5604 12.6097 23.5568 12.3325C23.5533 12.0577 23.3332 11.8369 23.0623 11.8369C22.996 11.8369 18.2076 11.8969 18.2739 11.8993C18.0005 11.9029 17.7816 12.1309 17.7852 12.4081C17.7887 12.6829 18.0088 12.9038 18.2798 12.9038Z" fill="#333F48"/>
          <path d="M24.7476 12.7701C24.9274 12.7701 25.1108 12.6729 25.2031 12.4628C25.4374 11.924 24.7097 11.5436 24.3985 11.9144C24.2707 12.044 24.2128 12.242 24.2861 12.4628C24.3122 12.5228 24.5358 12.7701 24.7476 12.7701Z" fill="#333F48"/>
          <path d="M22.2441 47.5801C21.5685 47.5885 21.0313 48.3506 21.0432 49.283C21.055 50.2154 21.6123 50.9619 22.2867 50.9535C22.9623 50.9451 23.4995 50.183 23.4876 49.2506C23.4758 48.3182 22.9185 47.5717 22.2441 47.5801Z" fill="#333F48"/>
          <path d="M39.986 51.2424C39.8878 50.8188 39.3731 50.6724 38.946 50.6364C37.7403 50.5356 36.5429 50.6856 35.3514 50.9172C35.8661 50.2176 36.1607 49.3343 36.1193 48.3947L36.0471 46.735C35.9194 43.8153 35.846 41.7848 35.8022 40.364H34.8142C34.8651 42.1988 34.9231 43.6689 35.0024 45.4906C34.7799 45.421 36.5772 45.4558 10.6072 45.7774C10.5267 36.7554 10.4522 24.8222 10.3658 15.619C10.3824 15.6214 10.3978 15.6298 10.4155 15.6298H10.4226L34.2996 15.3166C34.3386 17.8619 34.7717 37.5103 34.8131 40.3628H35.8034C35.7442 36.3246 35.3609 15.5602 35.1775 11.5761C35.1171 10.1384 33.8866 8.43555 32.4396 8.43555C32.3709 8.43555 11.8626 8.82316 11.3372 8.95877C10.1635 9.15317 9.17552 10.022 8.71171 11.1465C8.23961 12.2925 8.22305 13.5729 8.21477 14.8162C8.14141 24.5354 8.07042 36.1734 7.99706 45.8902C7.97694 48.6791 8.24908 51.216 10.9929 52.1508C11.2568 52.3224 11.5455 52.4448 11.8531 52.5084C14.2053 53.6113 16.7279 53.5861 19.3368 53.5525C29.8779 53.4121 34.3587 53.5669 38.9495 52.2804C39.4701 52.1352 40.1067 51.7728 39.9848 51.2412L39.986 51.2424ZM10.3256 11.6817C10.3185 10.7072 11.0308 9.8996 11.9146 9.8828C14.1722 9.8276 32.3307 9.43999 32.4384 9.43999C33.295 9.43999 34.1469 10.658 34.1872 11.6217C34.2309 12.5649 34.2581 13.4541 34.2771 14.3146L10.406 14.6266C10.3871 14.6266 10.3717 14.6362 10.3528 14.6386C10.3433 13.6413 10.3327 12.6513 10.3232 11.6817H10.3256ZM32.6987 51.4008C24.7204 52.062 18.2069 52.1124 12.2021 51.5616C11.368 51.4848 10.6533 50.634 10.6415 49.7063C10.632 48.7463 10.6226 47.7695 10.6143 46.7818C36.3938 46.4302 34.8628 46.4998 35.0414 46.4266C35.0473 46.5442 35.0521 46.6594 35.058 46.7806L35.1302 48.4403C35.1964 49.9571 34.1067 51.2856 32.6987 51.402V51.4008Z" fill="#333F48"/>
          <path d="M22.7089 23.3752C22.3409 22.9899 21.6748 23.2048 21.6333 23.7748C19.5379 27.1073 16.6497 31.8631 14.4655 36.0824C14.2608 36.4785 14.4868 37.0653 15.0074 37.0797C20.2656 37.2129 25.7438 36.8289 30.5511 36.0632C31.5059 35.9108 31.6645 35.4056 31.4172 34.9928C29.007 30.9607 24.5807 25.3312 22.7089 23.3764V23.3752ZM16.0392 35.8124C18.0376 32.0479 20.4975 27.9749 22.4048 24.9256C24.3287 27.0977 27.7221 31.4875 29.8542 34.8692C25.4302 35.5436 20.5862 35.876 16.0392 35.8112V35.8124Z" fill="#333F48"/>
          <path d="M22.7617 32.9703H22.77C23.1179 32.9667 23.3971 32.6763 23.3935 32.3222L23.3368 27.7441C23.332 27.3901 23.0256 27.0792 22.6978 27.1128C22.3488 27.1164 22.0695 27.4081 22.0743 27.7609L22.1311 32.3378C22.1346 32.6883 22.4174 32.9703 22.7617 32.9703Z" fill="#333F48"/>
          <path d="M22.8479 33.6143C22.4266 33.6143 22.2148 33.9611 22.2148 34.3079C22.2148 34.6547 22.4255 35.0015 22.8479 35.0015C23.2703 35.0015 23.4809 34.6547 23.4809 34.3079C23.4809 33.9611 23.2703 33.6143 22.8479 33.6143Z" fill="#333F48"/>
          <path d="M35.5099 3.15097L34.1259 6.01386L35.5099 3.15097Z" fill="white"/>
          <path d="M35.5099 3.15097L34.1259 6.01386" stroke="#FAA41A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M39.4227 5.44054C38.2141 6.07354 37.1062 6.89884 36.1316 7.86986L39.4227 5.44054Z" fill="white"/>
          <path d="M39.4227 5.44054C38.2141 6.07354 37.1062 6.89884 36.1316 7.86986" stroke="#FAA41A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
          <path d="M41.5292 8.84623L37.6134 10.6883L41.5292 8.84623Z" fill="white"/>
          <path d="M41.5292 8.84623L37.6134 10.6883" stroke="#FAA41A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
      </svg>`,
    remove: `
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <g clip-path="url(#clip0_3657_17214)">
          <path d="M19.4062 5.03125H3.59375" stroke="#333F48" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.34375 9.34375V15.0938" stroke="#333F48" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.6562 9.34375V15.0938" stroke="#333F48" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.9688 5.03125V17.4063C17.9688 18.5108 17.0734 19.4062 15.9688 19.4062H7.03182C5.92703 19.4062 5.03151 18.5105 5.03167 17.4057C5.03228 13.2809 5.03135 9.15606 5.03135 5.03125" stroke="#333F48" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.0938 5.03125V3.59375C15.0938 3.2125 14.9423 2.84687 14.6727 2.57728C14.4031 2.3077 14.0375 2.15625 13.6562 2.15625H9.34375C8.9625 2.15625 8.59687 2.3077 8.32728 2.57728C8.0577 2.84687 7.90625 3.2125 7.90625 3.59375V5.03125" stroke="#333F48" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3657_17214">
            <rect width="23" height="23" fill="white"/>
          </clipPath>
        </defs>
      </svg>`,
    arrow: `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
        <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2"/>
      </svg>`,
    unlimited: `
      <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.352 0.127999C16.76 0.127999 17.9227 0.554666 18.84 1.408C19.7787 2.24 20.248 3.392 20.248 4.864C20.248 6.31467 19.768 7.47733 18.808 8.352C17.8693 9.20533 16.696 9.632 15.288 9.632C14.2213 9.632 13.2827 9.36533 12.472 8.832C11.6613 8.27733 10.8507 7.50933 10.04 6.528C9.464 7.44533 8.73867 8.192 7.864 8.768C6.98933 9.344 6.008 9.632 4.92 9.632C3.49067 9.632 2.31733 9.216 1.4 8.384C0.504 7.53067 0.056 6.368 0.056 4.896C0.056 3.44533 0.525333 2.29333 1.464 1.44C2.40267 0.565333 3.576 0.127999 4.984 0.127999C6.05067 0.127999 6.98933 0.415999 7.8 0.992C8.61067 1.54667 9.41067 2.32533 10.2 3.328C10.7547 2.38933 11.4693 1.62133 12.344 1.024C13.24 0.426666 14.2427 0.127999 15.352 0.127999ZM5.08 7.488C5.80533 7.488 6.49867 7.264 7.16 6.816C7.82133 6.368 8.376 5.76 8.824 4.992C8.09867 4.07467 7.45867 3.392 6.904 2.944C6.37067 2.47467 5.77333 2.24 5.112 2.24C4.32267 2.24 3.68267 2.47467 3.192 2.944C2.72267 3.41333 2.488 4.064 2.488 4.896C2.488 5.70667 2.72267 6.34667 3.192 6.816C3.66133 7.264 4.29067 7.488 5.08 7.488ZM15.16 7.52C15.9493 7.52 16.5787 7.28533 17.048 6.816C17.5387 6.34667 17.784 5.696 17.784 4.864C17.784 4.05333 17.5493 3.424 17.08 2.976C16.6107 2.50667 15.9813 2.272 15.192 2.272C14.4453 2.272 13.7307 2.50667 13.048 2.976C12.3867 3.44533 11.832 4.07467 11.384 4.864C12.024 5.71733 12.632 6.37867 13.208 6.848C13.8053 7.296 14.456 7.52 15.16 7.52Z" fill="#188FF8"/>
      </svg>`,
  };

  const unlimitedData = {
    UK: {
      simsdirect: [
        {
          price: 249,
          "option-0": "90 Days",
          vid: "40714106699874",
          mediaId: "22362787283042",
          productId: "6981743345762",
          properties: {
            _spec_check:
              "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 179,
          "option-0": "60 Days",
          vid: "40714106732642",
          mediaId: "22362786955362",
          productId: "6981743345762",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 99,
          "option-0": "30 Days",
          vid: "40714106765410",
          mediaId: "22362786791522",
          productId: "6981743345762",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 85,
          "option-0": "21 Days",
          vid: "40714165321826",
          mediaId: "22362786070626",
          productId: "6981743345762",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 67,
          "option-0": "15 Days",
          vid: "40714106798178",
          mediaId: "22362784858210",
          productId: "6981743345762",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 44,
          "option-0": "7 Days",
          vid: "40714106830946",
          mediaId: "22362778599522",
          productId: "6981743345762",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ],
      simify: [
        {
          price: [249, 227, 133, 272, 165], //AUD, CAD, GBP, NZD, USD
          "option-0": "90 Days",
          vid: "43495156351166",
          mediaId: "26922185982142",
          productId: "7880726642878",
          properties: {
            _spec_check:
              "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [179, 164, 96, 196, 119],
          "option-0": "60 Days",
          vid: "43495156383934",
          mediaId: "26922185949374",
          productId: "7880726642878",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [99, 90, 53, 107, 65],
          "option-0": "30 Days",
          vid: "43495156416702",
          mediaId: "26922185916606",
          productId: "7880726642878",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [86, 77, 46, 93, 56],
          "option-0": "21 Days",
          vid: "43495157727422",
          mediaId: "26922185883838",
          productId: "7880726642878",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [67, 61, 36, 73, 44],
          "option-0": "15 Days",
          vid: "43495156449470",
          mediaId: "26922185851070",
          productId: "7880726642878",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [45, 40, 24, 48, 29],
          "option-0": "7 Days",
          vid: "43495156482238",
          mediaId: "26922185818302",
          productId: "7880726642878",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ],
    },
    Japan: {
      simsdirect: [
        {
          price: 229,
          "option-0": "90 Days",
          vid: "40714096279650",
          mediaId: "22362763264098",
          productId: "6981740200034",
          properties: {
            _spec_check:
              "Unlimited Data, 90 days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 179,
          "option-0": "60 Days",
          vid: "40714096312418",
          mediaId: "22362762674274",
          productId: "6981740200034",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 99,
          "option-0": "30 Days",
          vid: "40714096345186",
          mediaId: "22362761035874",
          productId: "6981740200034",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 85,
          "option-0": "21 Days",
          vid: "40714096377954",
          mediaId: "22362761035874",
          productId: "6981740200034",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 67,
          "option-0": "15 Days",
          vid: "40714096410722",
          mediaId: "22362742685794",
          productId: "6981740200034",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 39,
          "option-0": "7 Days",
          vid: "40714096443490",
          mediaId: "22362717421666",
          productId: "6981740200034",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ],
      simify: [
        {
          price: [229, 209, 123, 251, 152], //AUD, CAD, GBP, NZD, USD
          "option-0": "90 Days",
          vid: "43495069122750",
          mediaId: "26922191913150",
          productId: "7880706261182",
          properties: {
            _spec_check:
              "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [179, 164, 96, 196, 119],
          "option-0": "60 Days",
          vid: "43495069155518",
          mediaId: "26922191880382",
          productId: "7880706261182",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [99, 90, 53, 107, 65],
          "option-0": "30 Days",
          vid: "43495069188286",
          mediaId: "26922191847614",
          productId: "7880706261182",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [85, 77, 46, 93, 56],
          "option-0": "21 Days",
          vid: "43495069221054",
          mediaId: "26922191814846",
          productId: "7880706261182",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [67, 61, 36, 73, 44],
          "option-0": "15 Days",
          vid: "43495069253822",
          mediaId: "26922191782078",
          productId: "7880706261182",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [45, 40, 24, 48, 29],
          "option-0": "7 Days",
          vid: "43495069286590",
          mediaId: "26922191749310",
          productId: "7880706261182",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ],
    },
    Asia: {
      simsdirect: [
        {
          price: 199,
          "option-0": "90 Days",
          vid: "40714425696354",
          mediaId: "22362773782626",
          productId: "6981806915682",
          properties: {
            _spec_check: "Unlimited Data, 90 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: 169,
          "option-0": "60 Days",
          vid: "40714425729122",
          mediaId: "22362772832354",
          productId: "6981806915682",
          properties: {
            _spec_check: "Unlimited Data, 60 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: 99,
          "option-0": "30 Days",
          vid: "40714425761890",
          mediaId: "22362767949922",
          productId: "6981806915682",
          properties: {
            _spec_check: "Unlimited Data, 30 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: 75,
          "option-0": "21 Days",
          vid: "40714425794658",
          mediaId: "22362765983842",
          productId: "6981806915682",
          properties: {
            _spec_check: "Unlimited Data, 21 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: 59,
          "option-0": "15 Days",
          vid: "40714425827426",
          mediaId: "22362765131874",
          productId: "6981806915682",
          properties: {
            _spec_check: "Unlimited Data, 15 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: 39,
          "option-0": "7 Days",
          vid: "40722316787810",
          mediaId: "22362764181602",
          productId: "6981806915682",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM Delivered Instantly",
          },
        },
      ],
      simify: [
        {
          price: [199, 182, 107, 218, 132], //AUD, CAD, GBP, NZD, USD
          "option-0": "90 Days",
          vid: "43495323173054",
          mediaId: "26922178478270",
          productId: "7880799158462",
          properties: {
            _spec_check: "Unlimited Data, 90 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: [169, 153, 90, 183, 111],
          "option-0": "60 Days",
          vid: "43495323205822",
          mediaId: "26922177396926",
          productId: "7880799158462",
          properties: {
            _spec_check: "Unlimited Data, 60 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: [99, 90, 53, 107, 65],
          "option-0": "30 Days",
          vid: "43495323238590",
          mediaId: "26922176217278",
          productId: "7880799158462",
          properties: {
            _spec_check: "Unlimited Data, 30 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: [75, 68, 40, 81, 49],
          "option-0": "21 Days",
          vid: "43495323271358",
          mediaId: "26922175299774",
          productId: "7880799158462",
          properties: {
            _spec_check: "Unlimited Data, 21 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: [59, 54, 32, 65, 39],
          "option-0": "15 Days",
          vid: "43495323304126",
          mediaId: "26922174349502",
          productId: "7880799158462",
          properties: {
            _spec_check: "Unlimited Data, 15 Days, eSIM Delivered Instantly",
          },
        },
        {
          price: [39, 35, 21, 42, 25],
          "option-0": "7 Days",
          vid: "43495323304126",
          mediaId: "26922174349502",
          productId: "7880799158462",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM Delivered Instantly",
          },
        },
      ],
    },
    China: {
      simsdirect: [
        {
          price: 279,
          "option-0": "90 Days",
          vid: "40714480451682",
          mediaId: "22362815627362",
          productId: "6981812977762",
          properties: {
            _spec_check:
              "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 189,
          "option-0": "60 Days",
          vid: "40714480517218",
          mediaId: "22362815135842",
          productId: "6981812977762",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 99,
          "option-0": "30 Days",
          vid: "40714480648290",
          mediaId: "22362813235298",
          productId: "6981812977762",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 85,
          "option-0": "21 Days",
          vid: "40714480713826",
          mediaId: "22362804846690",
          productId: "6981812977762",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 69,
          "option-0": "15 Days",
          vid: "40722256592994",
          mediaId: "22362803634274",
          productId: "6981812977762",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 39,
          "option-0": "7 Days",
          vid: "40722256625762",
          mediaId: "22362803404898",
          productId: "6981812977762",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ],
      simify: [
        {
          price: [279, 255, 149, 305, 185], //AUD, CAD, GBP, NZD, USD
          "option-0": "90 Days",
          vid: "43495365574846",
          mediaId: "26922180706494",
          productId: "7880821801150",
          properties: {
            _spec_check:
              "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [189, 172, 101, 206, 125],
          "option-0": "60 Days",
          vid: "43495365607614",
          mediaId: "26922180673726",
          productId: "7880821801150",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [99, 90, 53, 107, 65],
          "option-0": "30 Days",
          vid: "43495365640382",
          mediaId: "26922180640958",
          productId: "7880821801150",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [86, 77, 46, 93, 56],
          "option-0": "21 Days",
          vid: "43495365673150",
          mediaId: "26922180608190",
          productId: "7880821801150",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [69, 62, 37, 75, 45],
          "option-0": "15 Days",
          vid: "43495365705918",
          mediaId: "26922180575422",
          productId: "7880821801150",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [39, 36, 21, 43, 26],
          "option-0": "7 Days",
          vid: "43495365738686",
          mediaId: "26922180542654",
          productId: "7880821801150",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ],
    },
    Korea: {
      simsdirect: [
        {
          price: 249,
          "option-0": "90 Days",
          vid: "40714432249954",
          mediaId: "22362789216354",
          productId: "6981809700962",
          properties: {
            _spec_check:
              "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 179,
          "option-0": "60 Days",
          vid: "40714432282722",
          mediaId: "22362789052514",
          productId: "6981809700962",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 99,
          "option-0": "30 Days",
          vid: "40714432348258",
          mediaId: "22362788823138",
          productId: "6981809700962",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 67,
          "option-0": "15 Days",
          vid: "40722100355170",
          mediaId: "22362788266082",
          productId: "6981809700962",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 85,
          "option-0": "21 Days",
          vid: "40714432381026",
          mediaId: "22362788429922",
          productId: "6981809700962",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: 39,
          "option-0": "7 Days",
          vid: "40722100387938",
          mediaId: "22362788167778",
          productId: "6981809700962",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ],
      simify: [
        {
          price: [249, 227, 133, 272, 165], //AUD, CAD, GBP, NZD, USD
          "option-0": "90 Days",
          vid: "43495352762558",
          mediaId: "26922197123262",
          productId: "7880816689342",
          properties: {
            _spec_check:
              "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [179, 164, 96, 196, 119],
          "option-0": "60 Days",
          vid: "43495352795326",
          mediaId: "26922197090494",
          productId: "7880816689342",
          properties: {
            _spec_check:
              "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [99, 90, 53, 107, 65],
          "option-0": "30 Days",
          vid: "43495352828094",
          mediaId: "26922197057726",
          productId: "7880816689342",
          properties: {
            _spec_check:
              "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [85, 76, 45, 91, 55],
          "option-0": "21 Days",
          vid: "43495352860862",
          mediaId: "26922197024958",
          productId: "7880816689342",
          properties: {
            _spec_check:
              "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [67, 61, 36, 73, 44],
          "option-0": "15 Days",
          vid: "43495352893630",
          mediaId: "26922196992190",
          productId: "7880816689342",
          properties: {
            _spec_check:
              "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [44, 40, 24, 48, 29],
          "option-0": "7 Days",
          vid: "40722100387938",
          mediaId: "22362788167778",
          productId: "7880816689342",
          properties: {
            _spec_check: "Unlimited Data, 7 Days, eSIM ⚡️ Delivered Instantly",
          },
        }
      ]
    },
    USA: {
      simsdirect: [
      {
        price: 269,
        "option-0": "90 Days",
        vid: "43495352926398",
        mediaId: "26922196959422",
        productId: "6981808521314",
        properties: {
          _spec_check: "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
        },
      },
      {
        price: 189,
        "option-0": "60 Days",
        vid: "40714428547170",
        mediaId: "22362801995874",
        productId: "6981808521314",
        properties: {
          _spec_check: "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
        },
      },
      {
        price: 99,
        "option-0": "30 Days",
        vid: "40714428579938",
        mediaId: "22362801012834",
        productId: "6981808521314",
        properties: {
          _spec_check: "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
        },
      },
      {
        price: 85,
        "option-0": "21 Days",
        vid: "40714428612706",
        mediaId: "22362800848994",
        productId: "6981808521314",
        properties: {
          _spec_check: "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
        },
      },
      {
        price: 67,
        "option-0": "15 Days",
        vid: "40714428645474",
        mediaId: "22362790756450",
        productId: "6981808521314",
        properties: {
          _spec_check: "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
        },
      },
      {
        price: 44,
        "option-0": "7 Days",
        vid: "40722087018594",
        mediaId: "22362789445730",
        productId: "6981808521314",
        properties: {
          _spec_check: "Unlimited Data, 7 days, eSIM ⚡️ Delivered Instantly",
        },
      },
      ],
      simify: [
        {
          price: [269, 245, 144, 293, 178], //AUD, CAD, GBP, NZD, USD
          "option-0": "90 Days",
          vid: "43495335887038",
          mediaId: "26922202202302",
          productId: "7880807153854",
          properties: {
            _spec_check: "Unlimited Data, 90 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [189, 90, 101, 206, 125],
          "option-0": "60 Days",
          vid: "43495335919806",
          mediaId: "26922202169534",
          productId: "7880807153854",
          properties: {
            _spec_check: "Unlimited Data, 60 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [99, 172, 53, 107, 65],
          "option-0": "30 Days",
          vid: "43495335952574",
          mediaId: "26922202136766",
          productId: "7880807153854",
          properties: {
            _spec_check: "Unlimited Data, 30 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [86, 77, 46, 93, 56],
          "option-0": "21 Days",
          vid: "43495335985342",
          mediaId: "26922202103998",
          productId: "7880807153854",
          properties: {
            _spec_check: "Unlimited Data, 21 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [67, 61, 36, 73, 44],
          "option-0": "15 Days",
          vid: "43495336018110",
          mediaId: "26922202071230",
          productId: "7880807153854",
          properties: {
            _spec_check: "Unlimited Data, 15 Days, eSIM ⚡️ Delivered Instantly",
          },
        },
        {
          price: [45, 40, 24, 48, 29],
          "option-0": "7 Days",
          vid: "43495336050878",
          mediaId: "26922202038462",
          productId: "7880807153854",
          properties: {
            _spec_check: "Unlimited Data, 7 days, eSIM ⚡️ Delivered Instantly",
          },
        },
      ]
    }
  };

  function pushDataLayer(event_name, event_desc, event_type, event_loc) {
    // Send a Google Analytics event
    const eventData = {
      event: "event-to-ga4",
      event_name,
      event_desc,
      event_type,
      event_loc,
    };

    window.dataLayer = window.dataLayer || [];
    dataLayer.push(eventData);
    console.dir(
      event_name + " / " + event_desc + " / " + event_type + " / " + event_loc
    );
  }

  function checkFocusTime(selector, eventName, eventDesc, eventLocation) {
    const checker = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.getAttribute("data-startShow")
        ) {
          entry.target.setAttribute("data-startShow", new Date().getTime());
        } else if (
          !entry.isIntersecting &&
          entry.target.getAttribute("data-startShow")
        ) {
          const startShow = entry.target.getAttribute("data-startShow");
          const endShow = new Date().getTime();
          const timeShow = Math.round(endShow - startShow);

          entry.target.removeAttribute("data-startShow");
          if (timeShow >= 3000) {
            pushDataLayer(eventName, eventDesc, "Visibility", eventLocation);
          }
          checker.unobserve(entry.target);
        }
      });
    });

    checker.observe($el(selector));
  }

  function waitForElement(selector) {
    return new Promise((resolve) => {
      if ($el(selector)) {
        return resolve($el(selector));
      }

      const observer = new MutationObserver(() => {
        if ($el(selector)) {
          resolve($el(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    });
  }

  function setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  function getLocalStorage(name) {
    let getLocalStorage = JSON.parse(localStorage.getItem(name));
    return getLocalStorage;
  }

  function addDotIfNeeded(value) {
    // Перевіряємо, чи в рядку вже є крапка
    if (!/\./.test(value)) {
      // Якщо крапки немає, додаємо крапку перед останніми двома знаками
      value = (value / 100).toFixed(2);
    }
    return value;
  }

  function extractNumber(input) {
    // Використовуємо регулярний вираз для знаходження числових значень
    const match = input.match(/[\d.]+/);

    // Перевіряємо, чи знайдено відповідність
    if (match) {
      // Повертаємо перше знайдене числове значення
      return match[0];
    } else {
      // Якщо не знайдено, повертаємо null або можна повернути пустий рядок
      return null;
    }
  }

  function extractCurrency(input) {
    // Використовуємо регулярний вираз для пошуку валютного символу
    const match = input.match(/^[^\d.]+/);

    // Перевіряємо, чи знайдено відповідність
    if (match) {
      // Замінюємо символи валют на відповідні значення
      switch (match[0]) {
        case "£":
          return "£";
        default:
          return "$";
      }
    } else {
      // Якщо не знайдено, повертаємо null або можна повернути порожній рядок
      return null;
    }
  }

  class UpgradePlan {
    constructor() {
      this.device = window.innerWidth < 769 ? "mobile" : "desktop";
      this.dataCollections = {};
      this.currency = "$";
      //AUD, CAD, GBP, NZD, USD
      this.indexCurrencySelect = "";
      this.init();
    }

    init() {
     
      const pageUrl = window.location.href;

      if (pageUrl.includes("/products/")) {
        this.setDataCollections();
      }
      this.initUpsellBlock();
      this.reDesign();
      const globalMutation = new MutationObserver((mutations) => {
        if ($el("#currency [selected]")) {
          let currencySelect = $el("#currency [selected]").innerText;
          this.indexCurrencySelect = currencySelect.includes("AUD")
            ? 0
            : currencySelect.includes("CAD")
            ? 1
            : currencySelect.includes("GBP")
            ? 2
            : currencySelect.includes("NZD")
            ? 3
            : currencySelect.includes("USD")
            ? 4
            : "";
        }

        this.initUpsellBlock();
        this.reDesign();

        globalMutation.disconnect();

        globalMutation.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });

      globalMutation.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    setDataCollections() {
      waitForElement(".ProductForm__AddToCart").then((el) => {
        el.addEventListener("click", () => {
          let dataCollectionsStorage = getLocalStorage("dataCollections");

          if (dataCollectionsStorage) {
            this.dataCollections = dataCollectionsStorage;
          }
          const idPDP = $el(".Product__InfoWrap form")
            .getAttribute("id")
            .split("product_form_")[1];

          this.dataCollections[idPDP] = [];

          $$el(".ProductForm__Variants li").forEach((item, index) => {
            let input = item.querySelector('input[type="radio"]');
            if (input.value.includes("GB")) {
              let p = item.querySelector(".pdp-cmp-price p")?.innerText;
              let s = item.querySelector(".pdp-cmp-price s")?.innerText;
              let priceInner = item.querySelector(
                ".Pro-varint-price-inner"
              )?.innerText;

              this.dataCollections[idPDP].push({
                priceGB: p != undefined ? (+extractNumber(p)).toFixed(2) : 0,
                priceGBCompare:
                  s != undefined ? (+extractNumber(s)).toFixed(2) : 0,
                priceOneGB:
                  priceInner != undefined
                    ? (+extractNumber(priceInner)).toFixed(2)
                    : 0,
                gb: +input.value.split("GB")[0],
                days: +input.value.split(" Days")[0].split("GB | ")[1],
                vid: input.dataset.vid,
                mediaId: input.dataset.mediaId,
                productId: idPDP,
                option: input.value,
                currency: extractCurrency(
                  item
                    .querySelector(".Pro-varint-price-inner")
                    .innerHTML.split("/")[0]
                ),
                image: $el(
                  `.Product__Gallery .Product__SlideItem[data-media-id="${input.dataset.mediaId}"] img`
                ).srcset,
                specCheck: input.dataset.speclistarr,
              });

              setLocalStorage("dataCollections", this.dataCollections);
            }
          });
        });
      });
    }

    upsellBlockHtml(data, dataUpgrade, dataItem, index) {
      let text = "";
      let upgrade = "";

      this.currency = dataItem.currency;

      console.dir("dataUpgrade: ");
      console.dir(dataUpgrade);
      console.dir("indexCurrencySelect: " + this.indexCurrencySelect);
      console.dir("dataUpgrade.price");
      console.dir(dataUpgrade.price);

      if (data.length > 1) {
        text = `For just <span>${
          dataItem.currency + data[0]
        }</span> more, get <span>${
          data[1]
        } GB extra</span>, reducing your cost per
        GB by <span>${data[2]}%</span>.`;

        upgrade = `
        <div class="upsell_col">
          <b>Best value plan</b>
          <p>${dataUpgrade.gb} GB</p>
          <p>${dataUpgrade.days} days</p>
          <p>${dataItem.currency + dataUpgrade.priceGB}</p>
          <p>${dataItem.currency + dataUpgrade.priceOneGB}</p>
        </div>`;
      } else {
        let price = nameDomain == "simify" ? dataUpgrade.price[this.indexCurrencySelect] : dataUpgrade.price;
        let justPrice = nameDomain == "simify" ? dataUpgrade.price[this.indexCurrencySelect] - dataItem.priceGB  //((price - price * 25 / 100) - dataItem.priceGB).toFixed(2) 
        : price - dataItem.priceGB;

        console.dir("------")
        console.dir(price)
        console.dir(justPrice)
        console.dir(dataUpgrade.price[this.indexCurrencySelect] )

        text = `For just <span>${
          dataItem.currency + justPrice
        }</span> more, get unlimited data plan. Don’t worry and enjoy your trip!`;
        upgrade = `
        <div class="upsell_col">
          <b>Unlimited plan</b>
          <p>${dataIcons.unlimited}</p>
          <p>${dataUpgrade["option-0"].toLowerCase()}</p>
          <p>${
            dataItem.currency + price
          }</p>
          <p>-</p>
        </div>`;
      }

      const style = `
      <style class="crs_style_upsell">
      
      .upsell_wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        background: #EEF4FC;
        padding: 12px;
        gap: 12px;
        margin-top: 12px;
      }
      .upsell_descr {
        display: flex;
        gap: 8px;
        z-index: 2;
        position: relative;
      }
      .upsell_descr > svg {
        flex: 0 0 52px;
      }
      .upsell_descr p {
        max-width: 230px;
        color: #333f48;
        font-family: "Poppins";
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        margin: 0;
      }
      .upsell_descr b {
        margin-bottom: 6px;
        display: block;
        line-height: 15px; 
      }
      .upsell_descr p span {
        color: #188FF8;
      }
      .upsell_arrow {
        position: absolute;
        right: -12px;
        top: -12px;
        padding: 12px;
        display: flex;
        transition: all 0.25s ease;
        z-index: 2;
      }
      .upsell_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 100%;
        border-radius: 5px;
        border: 1.4px solid #188ff8;
        background: #fff;
        color: #188ff8;
        font-family: "Poppins";
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
      .active .upsell_arrow {
        transform: scaleY(-1);
      }
      .upsell_dropdown {
        height: 0;
        opacity: 0;
        margin-top: -10px;
        transition: all 0.25s ease;
      }
      .active .upsell_dropdown {
        height: 125px;
        opacity: 1;
        margin-top: 0;
      }
      .upsell_row {
        display: flex;
      }
      .upsell_col {
        width: 100%;
      }
      .upsell_col:first-child {
        width: 69%;
      }
      .upsell_col p,
      .upsell_col b {
        color: #333F48;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        padding: 4px 0;
        margin: 0;
        height: 25px;
        display: block;
      }
      .upsell_col p:not(:last-child) {
        border-bottom: 1px solid #FFF;
      }
      .upsell_col b {
        font-weight: 600;
        text-align: center;
      }
      .upsell_col:not(:first-child) p {
        text-align: center;
      }
      .upsell_col:last-child {
        border-radius: 6px;
        background: #FFF;
      }
      .upsell_col:last-child b {
        font-weight: 700;
        color: #FFF;
        border-radius: 6px 6px 0 0;
        background: #188FF8;
      }
      .upsell_col:last-child p {
        border-color: #EEF4FC;
        color: #188FF8;
      }
      .upsell_col:first-child p {
        border-right: 1px solid #fff;
      }
      .upsell_col span.upsell_compare {
        color: var(--simify-com-collections-esim-europe-products-eu-uk-bt-esim-768-x-1365-default-limed-spruce-40, rgba(51, 63, 72, 0.40));
        text-decoration-line: line-through;
        margin-right: 4px;
      }
      @media (max-width: 768px) {
        .upsell_descr p {
          max-width: unset;
        }
      }</style>`;

      /* HTML */
      return `
      ${style}
      <div class="upsell_wrapper" data-index="${index}">
        <div class="upsell_descr">
          ${dataIcons.phone}
          <p>
            <b>Don’t run out of data overseas!</b>
            ${text}
          </p>
          <button type="button" class="upsell_arrow">${dataIcons.arrow}</button>
        </div>
        <button type="button" class="upsell_btn" data-specCheck="${
          dataUpgrade.specCheck
        }" data-option="${dataUpgrade.option}" data-productId="${
          dataUpgrade.productId
        }" data-vid="${dataUpgrade.vid}">Upgrade plan</button>
        <div class="upsell_dropdown">
          <div class="upsell_row">
            <div class="upsell_col">
              <b></b>
              <p>Data </p>
              <p>Days</p>
              <p>Price</p>
              <p>${dataItem.currency} per GB</p>
            </div>
            <div class="upsell_col">
              <b>Selected plan</b>
              <p>${dataItem.gb} GB</p>
              <p>${dataItem.days} days</p>
              <p><span class="upsell_compare" style="${dataItem.priceGBCompare != 0 ? '':'display: none'}">${
                dataItem.currency + dataItem.priceGBCompare
              }</span>${dataItem.currency + dataItem.priceGB}</p>
              <p>${dataItem.currency + dataItem.priceOneGB}</p>
            </div>
            ${upgrade}
           
          </div>
        </div>
      </div>
    `;
    }

    initUpsellBlock() {
      const mainCartStyles = /* HTML */ `
        <style class="style_cart">
          .CartItem__DiscountList {
            display: none;
          }
          #sidebar-cart .Drawer__Content .Drawer__Container {
            padding: 0 !important;
          }
          #sidebar-cart {
            max-width: 355px !important;
            width: 100% !important;
          }
          .Cart .cart-updates .CartItemWrapper {
            padding: 12px;
            margin: 0 0 12px 0;
          }
          .Cart .cart-updates .CartItemWrapper .CartItem {
            position: relative;
            padding: 0;
            margin: 0;
          }
          .cart-updates .CartItemWrapper .CartItem__Info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 80px;
          }
          .cart-updates .CartItemWrapper .CartItem__Title a {
            color: #333f48;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px; /* 157.143% */
          }
          .CartItemWrapper.loading .CartItem__Info {
            width: 100%;
          }
          .CartItemWrapper.loading .CartItem:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.7)
              url("https://conversionratestore.github.io/projects/lemieux/img/loading.gif")
              no-repeat center / 35px !important;
          }
        </style>
      `;
      document.head.insertAdjacentHTML("beforeend", mainCartStyles);

      if (
        !$el("#sidebar-cart .CartItemWrapper") ||
        getLocalStorage("dataCollections") == null
      )
        return;

      let dataCollections = getLocalStorage("dataCollections");

      $$el("#sidebar-cart .CartItemWrapper .CartItem").forEach((el, index) => {
        if (el.parentElement.querySelector(`.upsell_wrapper`)) return;

        const vidEl = el
          .querySelector(".CartItem__Title a")
          .href.split("variant=")[1];

        const priceEl = addDotIfNeeded(el.dataset.price);
        const gbEl = el
          .querySelector(".specification-list .list-item")
          .innerText.trim()
          .split("GB")[0];
        
        for (const key in dataCollections) {
          if (dataCollections[key]) {
            for (let i = 0; i < dataCollections[key].length; i++) {
              if (
                dataCollections[key][i].vid == vidEl &&
                (dataCollections[key][i].gb == +gbEl ||
                  gbEl == "Unlimited Data")
                // dataCollections[key][i].priceGB == priceEl
              ) {
                const itemDataCollections = dataCollections[key][i]; //selected data

                if (i != 0) {
                  //upgrade data

                  let itemPrevDataCollections;
                  for (let j = dataCollections[key].length - 1; j >= 0; j--) {
                    if (dataCollections[key][j].gb > itemDataCollections.gb) {
                      itemPrevDataCollections = dataCollections[key][j];
                      break;
                    }
                  }

                  const costPerGB1 = itemDataCollections.priceGB; //selected data price
                  const costPerGB2 = itemPrevDataCollections.priceGB; //upgrade data price

                  const costDifference = costPerGB2 - costPerGB1; // difference price

                  const percentageDifference = Math.abs(
                    //percentageDifference
                    (costDifference / costPerGB2) * 100
                  ).toFixed(0);

                  const selectedGB = itemDataCollections.gb; // GB
                  const proposedGB = itemPrevDataCollections.gb; // GB

                  const costGb = proposedGB - selectedGB; // difference GB

                  let html = this.upsellBlockHtml(
                    [costDifference, costGb, percentageDifference],
                    itemPrevDataCollections,
                    itemDataCollections,
                    index
                  );

                  el.insertAdjacentHTML("afterend", html);
                } else {
                  const title = el
                    .querySelector(".CartItem__Title a")
                    .innerHTML.toLowerCase();

                  let keyUnlimitedData =
                    title.includes("uk") || title.includes("turkey")
                      ? "UK"
                      : title.includes("japan")
                      ? "Japan"
                      : title.includes("China")
                      ? "China"
                      : title.includes("South Korea")
                      ? "Korea"
                      : title.includes("USA")
                      ? "USA"
                      : "Asia";

                  let arr = unlimitedData[keyUnlimitedData][nameDomain];

                  for (let k = 0; k < arr.length; k++) {
                    if (
                      arr[k]["option-0"].toLowerCase().split(" days")[0] ==
                      itemDataCollections.days
                    ) {
                      let price =
                        this.indexCurrencySelect != ""
                          ? arr[k].price[this.indexCurrencySelect]
                          : arr[k].price;

                      let html = this.upsellBlockHtml(
                        [price - itemDataCollections.priceGB],
                        arr[k],
                        itemDataCollections,
                        index
                      );

                      el.insertAdjacentHTML("afterend", html);
                    }
                  }
                }
              }
            }
          }
        }

        if (!el.parentElement.querySelector(".upsell_wrapper")) return;
        let eventName = el.parentElement
          .querySelector(".upsell_wrapper")
          .innerText.includes("unlimited")
          ? "exp_aov_improv_vis_cartunlimit_elem"
          : "exp_aov_improv_vis_cartlimit_elem";

        let eventLoc = el.parentElement
          .querySelector(".upsell_wrapper")
          .innerText.includes("unlimited")
          ? "Unlimited"
          : "Limited";

        checkFocusTime(
          `.upsell_wrapper[data-index='${index}']`,
          eventName,
          `${el.querySelector(".CartItem__Title a").innerHTML} - Element view`,
          `Cart Don’t run out of data overseas! ${eventLoc} plan`
        );
      });
      this.onClickBtnUpsell();
    }

    onClickBtnUpsell() {
      $$el(".upsell_btn").forEach((el) => {
        let post = {
          form_type: "product",
          utf8: "✓",
          "option-0": el.dataset.option,
          id: el.dataset.vid,
          quantity: "1",
          properties: {
            _spec_check: el.dataset.speccheck,
          },
          "product-id": el.dataset.productid,
          "section-id": "esim-product-template",
        };

        el.addEventListener("click", (e) => {
          e.stopImmediatePropagation();

          let line = el
            .closest(".CartItemWrapper")
            .querySelector(".CartItem__Info .CartItem__Remove").dataset.line;

          el.closest(".CartItemWrapper").classList.add("loading");

          fetch("/cart/change.js", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              line: line,
              quantity: 0,
            }),
          })
            .then((res) => res.json())
            .then((dataR) => {
              fetch("/cart/add.js", {
                headers: {
                  "Content-Type": "application/json",
                  // Add any other required headers here
                },
                method: "POST",
                body: JSON.stringify(post),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.dir(data);

                  this.addUpdatedProduct(
                    data,
                    el.closest(".CartItemWrapper"),
                    line
                  );

                  $el(".loading")?.classList.remove("loading");
                });
            });

          pushDataLayer(
            "exp_aov_improv_but_cartovers_upgra",
            "Upgrade plan",
            "Button",
            "Cart Don’t run out of data overseas!"
          );
        });
      });

      $$el(".upsell_arrow").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.stopImmediatePropagation();
          el.closest(".upsell_wrapper").classList.toggle("active");
          if (el.closest(".upsell_wrapper").classList.contains("active")) {
            pushDataLayer(
              "exp_aov_improv_drop_cartovers_open",
              "Open",
              "Dropdown",
              "Cart Don’t run out of data overseas!"
            );
          } else {
            pushDataLayer(
              "exp_aov_improv_drop_cartovers_close",
              "Close",
              "Dropdown",
              "Cart Don’t run out of data overseas!"
            );
          }
        });
      });

      $$el(".crs_qty .QuantitySelector__Button").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.stopImmediatePropagation();

          let input = el.parentElement.querySelector("input");
          if (el.dataset.action == "increase-quantity") {
            if (parseInt(input.value) < 10) {
              input.value = parseInt(input.value) + 1;
            }
          } else {
            if (input.value > 1) {
              input.value = parseInt(input.value) - 1;
            }
          }

          el.closest(".CartItem__Actions")
            .querySelector(
              `.QuantitySelector .quantity-dropdown li[value="${input.value}"] a`
            )
            .click();
        });
      });
    }

    addUpdatedProduct(data, selector, line) {
      const productHTML = `
      <div class="CartItem esim_show" data-price="${
        data.final_price
      }" data-handle="${data.handle}">
          <div class="CartItem__ImageWrapper AspectRatio">
              <div class="AspectRatio" style="--aspect-ratio: 1.0">
                  <img class="CartItem__Image"
                      src="${data.image}" alt="${data.product_title}">
              </div>
          </div>
          <div class="CartItem__Info">
              <h2 class="CartItem__Title Heading">
                  <a href="${data.url}">${data.product_title}</a>
              </h2>
              <div class="cartItem__Specification">
                <ul class="specification-list">
                  <li class="list-item">
                    <span class="tick-icon">
                      <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                        <path d="M1 3.32727L3 5.36364L7 1" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
                      </svg>
                    </span>${data["variant_title"].split(" |")[0]}
                  </li>
                </ul>
              </div>
              <div class="CartItem__Meta Heading Text--subdued">
                  <ul class="CartItem__PropertyList"></ul><!-- Disc  |  |  |  -->
                  <div class="CartItem__PriceList" data-disccode="">
                    <span class="CartItem__OriginalPrice Price Price--compareAt">${
                      this.currency
                    }${addDotIfNeeded(data.price).split(".00")[0]}</span>
                    <span class="CartItem__Price Price Price--highlight">${
                      this.currency
                    }${addDotIfNeeded(data.final_price).split(".00")[0]}</span>
                  </div>
              </div>
              <div class="CartItem__Actions Heading Text--subdued" style="text-align: center">
                  <div class="CartItem__QuantitySelector">
                      <div class="QuantitySelector">
                          <label for="qty-selector" class="quantity-text-wrap" id="qty-text-selector">Qty:</label>
                          <select name="quantity-selector" id="qty-selector">
                              <option selected="" value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                          </select>
                          <span class="quantity-text hide"></span>
                          <span class="quantity-text-wrap hide">Qty:<input type="text" name="updates[]" readonly=""
                                  id="updates_43102563270846:9eb4a9af-4b0b-40a6-a95e-21f1a5132623"
                                  class="QuantitySelector__CurrentQuantity" pattern="[0-9]*" data-line="${line}" value="1">
                              <svg width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M5.14611 0.59447L2.81893 2.92396C2.79123 2.95161 2.76121 2.97115 2.72889 2.98258C2.69657 2.99419 2.66194 3 2.625 3C2.58806 3 2.55343 2.99419 2.52111 2.98258C2.48879 2.97115 2.45877 2.95161 2.43107 2.92396L0.0969656 0.59447C0.0323218 0.529954 -1.11494e-07 0.449309 -1.15724e-07 0.352534C-1.19955e-07 0.25576 0.0346305 0.172811 0.103892 0.103687C0.173153 0.0345621 0.253958 -2.49519e-07 0.346306 -2.53556e-07C0.438654 -2.57593e-07 0.519459 0.0345621 0.58872 0.103687L2.625 2.13594L4.66128 0.103686C4.72592 0.0391703 4.80553 0.00691202 4.90009 0.00691202C4.99484 0.00691201 5.07685 0.0414741 5.14611 0.110599C5.21537 0.179723 5.25 0.260368 5.25 0.352534C5.25 0.4447 5.21537 0.525345 5.14611 0.59447Z"
                                      fill="#333F48"></path>
                              </svg>
                          </span>
                          <div class="quantity-dropdown">
                              <ul class="quantity-list">
                                  <li class="list-item" value="1">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=1&amp;line=${line}" data-quantity="1" data-line="${line}"
                                          data-action="update-item-quantity">1</a>
                                  </li>
                                  <li class="list-item" value="2">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=2&amp;line=${line}" data-quantity="2" data-line="${line}"
                                          data-action="update-item-quantity">2</a>
                                  </li>
                                  <li class="list-item" value="3">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=3&amp;line=${line}" data-quantity="3" data-line="${line}"
                                          data-action="update-item-quantity">3</a>
                                  </li>
                                  <li class="list-item" value="4">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=4&amp;line=${line}" data-quantity="4" data-line="${line}"
                                          data-action="update-item-quantity">4</a>
                                  </li>
                                  <li class="list-item" value="5">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=5&amp;line=${line}" data-quantity="5" data-line="${line}"
                                          data-action="update-item-quantity">5</a>
                                  </li>
                                  <li class="list-item" value="6">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=6&amp;line=${line}" data-quantity="6" data-line="${line}"
                                          data-action="update-item-quantity">6</a>
                                  </li>
                                  <li class="list-item" value="7">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=7&amp;line=${line}" data-quantity="7" data-line="${line}"
                                          data-action="update-item-quantity">7</a>
                                  </li>
                                  <li class="list-item" value="8">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=8&amp;line=${line}" data-quantity="8" data-line="${line}"
                                          data-action="update-item-quantity">8</a>
                                  </li>
                                  <li class="list-item" value="9">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=9&amp;line=${line}" data-quantity="9" data-line="${line}"
                                          data-action="update-item-quantity">9</a>
                                  </li>
                                  <li class="list-item" value="10">
                                      <a class="Link Link--primary" title="Set quantity to "
                                          href="/cart/change?quantity=10&amp;line=${line}" data-quantity="10" data-line="${line}"
                                          data-action="update-item-quantity">10</a>
                                  </li>
                              </ul>
                          </div>

                      </div>

                  </div>

                  <a href="/cart/change?quantity=0&amp;line=${line}"
                      class="CartItem__Remove Link Link--underline Link--underlineShort" data-quantity="0" data-line="${line}"
                      data-activation-date="false" data-product-title="usa-esim" data-action="remove-item">

                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M13.1665 3.99996H17.3332V5.66663H15.6665V16.5C15.6665 16.721 15.5787 16.9329 15.4224 17.0892C15.2661 17.2455 15.0542 17.3333 14.8332 17.3333H3.1665C2.94549 17.3333 2.73353 17.2455 2.57725 17.0892C2.42097 16.9329 2.33317 16.721 2.33317 16.5V5.66663H0.666504V3.99996H4.83317V1.49996C4.83317 1.27895 4.92097 1.06698 5.07725 0.910704C5.23353 0.754423 5.44549 0.666626 5.6665 0.666626H12.3332C12.5542 0.666626 12.7661 0.754423 12.9224 0.910704C13.0787 1.06698 13.1665 1.27895 13.1665 1.49996V3.99996ZM13.9998 5.66663H3.99984V15.6666H13.9998V5.66663ZM6.49984 8.16663H8.1665V13.1666H6.49984V8.16663ZM9.83317 8.16663H11.4998V13.1666H9.83317V8.16663ZM6.49984 2.33329V3.99996H11.4998V2.33329H6.49984Z"
                              fill="#333F48"></path>
                      </svg>
                  </a>
              </div>
          </div>
      </div>`;

      selector?.querySelector(".CartItem")?.remove();
      selector?.querySelector(".upsell_wrapper")?.remove();
      selector?.querySelector(".crs_style_upsell")?.remove();
      selector?.insertAdjacentHTML("afterbegin", productHTML);
    }

    reDesign() {
      let styleRed = `
      <style class="styleRed">
      #sidebar-cart .upsell-block__wrapper,
      #sidebar-cart .upsell-block__limited {
        display: none!important;
      }
      #sidebar-cart .Drawer__Content .cart-drawer-annoucement-bar {
        background: #ffefd3 !important;
        padding: 8px 16px !important;
      }
      #sidebar-cart .Drawer__Content .cart-drawer-annoucement-bar p {
        font-weight: 600 !important;
        line-height: normal !important;
      }
      .crs_hidden {
        display: none!important;
      }
      .check-inner label {
        font-family: Poppins;
        font-size: 12px!important;
        line-height: 18.2px!important;
      }
      .check-inner label a {
        text-decoration: none;
      }
      .cart-updates .CartItemWrapper .CartItem__ImageWrapper {
        width: 80px!important;
      }
      .CartItem__Actions,
      .CartItem__PropertyList {
        margin: 0 !important;
      }
      .cart-updates .cartItem__Specification ul li .tick-icon svg path {
        stroke: rgb(51, 63, 72)!important;
      }
      .cart-updates .CartItemWrapper .CartItem__Title {
        padding-right: 40px!important;
        margin-bottom: 0!important;
      }
      .cart-updates .cartItem__Specification li.list-item:not(:first-child) {
        display: none;
      }
      .CartItem__QuantitySelector {
        display: none!important;
      }
      .crs_qty {
        display: flex;
        border-radius: 6px;
        background: #eef4fc;
        border: none;
        max-width: 71px;
        padding: 3px;
        width: 100%;
      }
      .crs_qty .CartItem__QuantitySelector {
        width: 100%;
        max-width: 71px;
      }
      .crs_qty .CartItem__QuantitySelector:after {
        content: none!important;
      }
      .crs_qty .QuantitySelector__Button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background: var(--simify_com_collections_esim-europe_products_eu-uk-bt-esim_768x1365_default-Nero, #FFF);
        box-shadow: 0px 2.753px 5.506px 0px rgba(0, 0, 0, 0.06), 0px 0px 2.753px 0px rgba(0, 0, 0, 0.04);
        width: 20px;
        height: 20px;
        padding: 0;
        border: none!important;
        color: #333F48;
        text-align: center;
        text-overflow: ellipsis;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 13.765px; /* 114.709% */
        position: initial;
        flex-shrink: 0;
      }
      .crs_qty .QuantitySelector__CurrentQuantity {
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        color: #333F48;
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
      }
      </style>`;

      if (!$el(".styleRed")) {
        document.body.insertAdjacentHTML("afterbegin", styleRed);
      }

      const shippingCart = $el("#sidebar-cart .Cart_shiiping_text");
      const cartInnerText = $el(".cart-inner-wrapp")?.innerText;

      if (shippingCart) {
        if (cartInnerText.includes("eSIM")) {
          shippingCart.classList.add("crs_hidden");
        } else {
          shippingCart.classList.remove("crs_hidden");
        }
      }

      $$el("#sidebar-cart .CartItemWrapper").forEach((el) => {
        const qtySelector = el.querySelector(".CartItem__QuantitySelector");
        if (qtySelector.parentElement.querySelector(".crs_qty")) return;

        qtySelector.insertAdjacentHTML(
          "afterend",
          `
          <div class="crs_qty">
            <button type="button" class="QuantitySelector__Button Link Link--secondary" data-action="decrease-quantity">–</button>
            <input type="text" class="QuantitySelector__CurrentQuantity" pattern="[0-9]*" value="${
              qtySelector.querySelector("select").value
            }" aria-label="Quantity">
            <button type="button" class="QuantitySelector__Button Link Link--secondary" data-action="increase-quantity">+</button>
          </div>`
        );

        const removeSelector = el.querySelector(".CartItem__Remove");
        removeSelector.innerHTML = dataIcons.remove;
      });
    }
  }

  new UpgradePlan();
})();
