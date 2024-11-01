(function() {
  "use strict";
  const p = (t, n, e, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: r
    }), console.dir(`Event: ${t} | ${n} | ${e} | ${r}`);
  }, f = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (t) => document.querySelectorAll(t), o = (t) => document.querySelector(t), d = (t, n = "variant_1") => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, n), console.log("set", t, n));
    }, 1e3);
  };
  function l(t) {
    return new Promise((n) => {
      if (document.querySelector(t))
        return n(document.querySelector(t));
      const e = new MutationObserver(() => {
        document.querySelector(t) && (n(document.querySelector(t)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(t) {
    t = t === void 0 ? {} : t;
    let n, e, r, i, c = (t == null ? void 0 : t.delay) || 50;
    function s() {
      n = null, i = 0;
    }
    return s(), function() {
      return e = window.scrollY, n != null && (i = e - n), n = e, clearTimeout(r), r = setTimeout(s, c), i;
    };
  })();
  const h = (t, n = 100) => {
    const e = document.querySelector(t);
    if (!e)
      return;
    const i = e.getBoundingClientRect().top - n;
    window.scrollBy({
      top: i,
      behavior: "smooth"
    });
  }, C = (t) => (
    /* HTML */
    `
    <div class="main_benefits_block">
      <h2 class="main_benefits_title">
        Help Your Pet Stay zen - <br />
        stress relief for every occasion
      </h2>
      <ul class="main_benefits_list">
        ${t.map((n) => (
      /* HTML */
      `
              <li class="main_benefits_item">
                ${n.svg}
                <p>${n.txt}</p>
              </li>
            `
    )).join("")}
      </ul>
    </div>
  `
  ), a = {
    benefitIconFirst: `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M28.2816 7.4578L27.7324 6.03033L26.7693 7.21812C26.7392 7.25615 23.6932 10.9646 19.6859 11.5368C18.9253 11.6456 18.2151 11.7871 17.5288 11.9454C17.7171 8.82954 16.4453 5.85699 13.7434 3.08961L12.6759 2L12.2602 3.46903C12.2505 3.49999 11.3289 6.67243 8.98786 8.10078C6.42302 9.67063 4.78948 11.4059 4.00234 13.4011C3.20719 15.287 3.18685 17.4101 3.94574 19.3109C4.47684 20.6148 5.50598 21.6531 6.80509 22.1959C6.93228 22.2444 7.06185 22.2863 7.19335 22.3215C7.12547 23.2035 7.20319 24.0906 7.42331 24.9473C6.9466 24.9889 6.49112 25.0101 6.06483 25.0101C4.89484 25.0328 3.72845 24.8732 2.6076 24.537L2 26.1997C3.3157 26.6123 4.68982 26.808 6.06836 26.779C6.75335 26.7764 7.43762 26.7337 8.11758 26.6507C8.40834 27.1609 8.7652 27.6305 9.17889 28.0473C10.6113 29.3778 12.5173 30.0786 14.4704 29.993C17.4586 29.9247 20.3443 28.8906 22.6956 27.0452L22.9547 26.8418C25.3869 24.9367 32.7781 19.149 28.2816 7.4578ZM7.49052 20.5623L7.47637 20.557C6.60245 20.1941 5.91337 19.4919 5.56689 18.6113C4.99273 17.1411 5.02004 15.504 5.64295 14.0539C6.28505 12.4256 7.67714 10.9725 9.90678 9.61049C11.4623 8.56941 12.6811 7.098 13.4144 5.37586C15.1447 7.30313 15.9709 9.87698 15.6856 12.4513C13.7151 13.052 11.9146 14.1103 10.4312 15.5397C9.02528 16.9253 8.01073 18.6581 7.49052 20.5623ZM21.8678 25.4453L21.6024 25.6549C18.0055 28.5036 12.6821 29.0475 10.4312 26.7967C10.2824 26.6474 10.1435 26.4884 10.0156 26.3209C13.6355 25.4966 18.0479 23.3651 22.5797 18.4698L21.2814 17.2679C16.8504 22.0553 12.5901 24.0116 9.18774 24.697C8.94513 23.8708 8.87376 23.0038 8.97813 22.149C9.24771 20.1084 10.2003 18.2193 11.6809 16.7894C13.5037 14.9657 16.2048 13.8204 19.9362 13.2879C22.6586 12.7611 25.1568 11.4198 27.1 9.44157C30.1035 18.996 24.1655 23.6463 21.8678 25.4453Z" fill="white"/>
  <path d="M22.424 15.973L23.7762 17.113C24.1536 16.6643 24.5315 16.1952 24.9101 15.7059L23.5091 14.626C23.1474 15.0956 22.7848 15.5431 22.424 15.973Z" fill="white"/>
</svg>
  `,
    benefitIconSecond: `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_2036_2558)">
    <path d="M29.5349 4.69601C26.4431 1.60352 21.5333 1.41053 18.2179 4.1433C17.8314 4.46038 17.7505 4.55103 16 6.30365C14.2881 4.58967 14.1717 4.46295 13.7838 4.14467C10.441 1.38933 5.53381 1.62665 2.46507 4.69601C-0.821669 7.98344 -0.821731 13.3336 2.46513 16.6226C16.1354 30.2922 15.3457 29.5509 15.5762 29.6681C15.8565 29.8219 16.2051 29.8013 16.4572 29.6493C16.6517 29.5405 16.4185 29.7507 29.5351 16.6224C32.8217 13.3336 32.8217 7.9835 29.5349 4.69601ZM11.5469 15.6483C10.6619 13.9531 9.52574 13.3966 8.7282 13.2283C8.00713 13.0763 7.36326 12.801 6.81442 12.4099C5.68229 11.6037 5.32425 10.9785 5.47185 10.7161C5.52455 10.6224 5.64121 10.5618 5.76906 10.5618H8.31478C8.74821 10.5618 8.81429 10.3453 9.67735 9.97231C9.75449 10.7075 9.95668 11.5591 10.4218 12.3307C10.6888 12.7735 11.2647 12.9175 11.709 12.6497C12.1526 12.3823 12.2955 11.806 12.0281 11.3624C11.6963 10.8121 11.5703 10.1569 11.5292 9.62034C11.7239 9.64228 11.91 9.68585 12.0865 9.75319C13.3956 10.2531 13.9145 11.8818 13.9184 11.8941C13.9774 12.0911 14.4988 13.2 15.1102 14.1508C16.6296 16.524 18.5164 17.8358 20.1922 18.3322C20.5879 18.4494 21.0322 18.546 21.4261 18.5624L24.5294 18.976C19.2278 24.2785 17.1031 26.4065 15.9999 27.5107C15.3968 26.9071 14.3677 25.8767 12.9367 24.4445V23.628C12.9366 20.0997 12.469 17.415 11.5469 15.6483ZM19.8373 10.2723C21.0258 10.4148 22.5276 11.016 23.3516 12.1114C23.4628 12.2591 23.6151 12.3707 23.7895 12.4321C23.8246 12.4445 24.4849 12.6746 25.2916 12.7951C24.7845 13.7122 24.0498 14.0929 23.1013 13.9273C22.9378 13.8988 22.7695 13.9142 22.6138 13.9719C22.5456 13.9973 21.1166 14.5446 20.0325 16.2675C19.1416 15.8666 18.0685 15.0481 17.1096 13.7494C17.7898 12.4642 18.7048 11.2977 19.8373 10.2723ZM28.2086 15.2964C27.5002 16.0048 26.8313 16.6738 26.1987 17.3063L21.9954 16.746C22.4244 16.2309 22.8518 15.9489 23.0889 15.8184C24.1948 15.9349 25.1929 15.621 25.9904 14.9018C26.9431 14.0426 27.3359 12.8091 27.3121 12.8727C27.644 11.9833 27.0093 11.0289 26.0606 10.989C25.5204 10.9668 24.9616 10.8272 24.6534 10.738C23.8835 9.8339 22.8216 9.19909 21.7468 8.81461C22.0002 8.65112 22.2596 8.49271 22.5263 8.34116C22.9765 8.08522 23.1341 7.51281 22.8781 7.06249C22.6222 6.61218 22.0498 6.45476 21.5994 6.71064C19.3232 8.00444 17.3841 9.744 16.0002 11.9292C15.8946 11.7204 15.7918 11.5065 15.6927 11.2868C15.554 10.873 14.7644 8.77891 12.7734 8.00788C11.387 7.47098 9.80257 7.69942 8.0612 8.6862H5.769C4.24419 8.6862 3.08218 10.182 3.75618 11.7829C4.0602 12.5052 4.7047 13.21 5.72617 13.9374C6.48632 14.4791 7.3662 14.8579 8.3411 15.0634C8.94689 15.1913 10.8539 16.1141 11.0453 22.5518C9.25723 20.7628 6.90007 18.405 3.7915 15.2966C1.2356 12.739 1.23554 8.57848 3.79138 6.02201C6.18268 3.63015 9.96511 3.42759 12.5924 5.5932C12.9304 5.87047 12.9274 5.88403 15.3368 8.29334C15.7029 8.65938 16.2968 8.6595 16.663 8.29334C19.0649 5.8916 19.0677 5.87191 19.409 5.59183C22.0249 3.43591 25.8079 3.62077 28.2086 6.02207C30.7644 8.57848 30.7643 12.739 28.2086 15.2964Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_2036_2558">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
  `,
    benefitIconThird: `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_2036_2563)">
    <path d="M28.2427 8.13661C28.0834 4.65724 25.1762 1.875 21.625 1.875C20.6368 1.875 19.6718 2.095 18.7921 2.51643C17.3771 0.927498 15.338 0 13.1875 0C9.04404 0 5.65174 3.38549 5.6888 7.56705C2.53162 8.02111 0.000183105 10.7814 0.000183105 14.1248C0.000183105 17.7434 2.97211 20.6873 6.62511 20.6873H9.79423L9.5356 21.2073C9.22585 21.8302 9.68048 22.5623 10.375 22.5623H15.0625V29.1247C15.0625 29.5595 15.3615 29.9372 15.7847 30.0371C16.2066 30.1368 16.6436 29.9339 16.8386 29.5439L21.267 20.6873H25.4375C29.0561 20.6873 31.9999 17.7433 31.9999 14.1248C31.9999 11.4845 30.4617 9.2003 28.2427 8.13661ZM16.9375 25.1535V21.6248C16.9375 21.1071 16.5178 20.6873 16 20.6873H11.8882C12.2305 19.9989 14.6985 15.0354 15.0625 14.3035V17.8749C15.0625 18.3927 15.4823 18.8124 16 18.8124H20.1081L16.9375 25.1535ZM25.4374 18.8123H22.2044L22.4635 18.2941C22.7744 17.6723 22.3218 16.9373 21.625 16.9373H16.9375V10.3124C16.9375 9.87723 16.638 9.49929 16.2143 9.39973C15.7907 9.30029 15.3543 9.50529 15.1605 9.89498L10.7264 18.8123H6.62492C4.00574 18.8123 1.87493 16.7095 1.87493 14.1248C1.87493 11.5501 4.05018 9.37486 6.62492 9.37486C8.04892 9.37486 9.37923 10.0112 10.2748 11.1209C10.6 11.5237 11.1902 11.5867 11.5932 11.2615C11.996 10.9364 12.059 10.3461 11.7338 9.94317C10.6797 8.63723 9.19498 7.79992 7.56361 7.56667C7.52711 4.42255 10.0744 1.875 13.1875 1.875C15.0144 1.875 16.7345 2.76787 17.7888 4.26343C18.0795 4.67593 18.6446 4.78424 19.0674 4.50843C19.8278 4.01224 20.7121 3.74999 21.625 3.74999C23.9386 3.74999 25.8701 5.3913 26.2895 7.5558C26.0105 7.51911 25.7262 7.49999 25.4374 7.49999C23.4341 7.49999 21.5009 8.41336 20.2661 9.94329C19.9409 10.3462 20.0039 10.9365 20.4068 11.2617C20.8098 11.5869 21.4 11.5239 21.7251 11.121C22.6075 10.0277 23.9953 9.37498 25.4375 9.37498C28.0222 9.37498 30.125 11.5058 30.125 14.125C30.1249 16.7095 28.0221 18.8123 25.4374 18.8123Z" fill="white"/>
    <path d="M23.9136 26.4084C23.4489 26.18 22.8871 26.3713 22.6586 26.836L20.7836 30.6485C20.5551 31.1131 20.7466 31.675 21.2112 31.9035C21.6763 32.1321 22.2379 31.9401 22.4662 31.4759L24.3412 27.6634C24.5697 27.1987 24.3783 26.6369 23.9136 26.4084Z" fill="white"/>
    <path d="M29.6067 22.6612C29.1436 22.4296 28.5804 22.6173 28.3489 23.0805L26.4739 26.8304C26.2423 27.2936 26.4301 27.8566 26.8931 28.0883C27.3564 28.3199 27.9195 28.132 28.1509 27.669L30.0259 23.919C30.2575 23.4559 30.0697 22.8928 29.6067 22.6612Z" fill="white"/>
    <path d="M5.18039 22.6669C4.72039 22.4291 4.15483 22.6094 3.9172 23.0694L1.97971 26.8194C1.74208 27.2794 1.92233 27.845 2.38227 28.0826C2.51989 28.1537 2.66689 28.1874 2.81183 28.1874C3.15127 28.1874 3.47895 28.0025 3.64545 27.68L5.58295 23.93C5.82064 23.47 5.64039 22.9045 5.18039 22.6669Z" fill="white"/>
    <path d="M10.7887 26.4084C10.3241 26.18 9.76225 26.3713 9.53375 26.836L7.65876 30.6485C7.43026 31.1131 7.62169 31.675 8.08632 31.9035C8.55144 32.1321 9.11306 31.9401 9.34131 31.4759L11.2163 27.6634C11.4448 27.1987 11.2534 26.6369 10.7887 26.4084Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_2036_2563">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
  `,
    benefitIconFourth: `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M12.4552 13.1708L8.68854 16.9374L10.3458 18.5947L14.7989 14.1416V5.6875H12.4552V13.1708Z" fill="white"/>
  <path d="M13.627 23.9686C7.94067 23.9686 3.31456 19.3425 3.31456 13.6562C3.31456 7.96984 7.94067 3.34373 13.627 3.34373C19.3133 3.34373 23.9394 7.96984 23.9394 13.6562V15.5549L20.9326 12.5975L19.2892 14.2685L25.1094 19.9931L30.9239 14.1929L29.2686 12.5335L26.2831 15.5117V13.6562C26.2831 10.2755 24.9667 7.09733 22.5762 4.70692C20.1858 2.31646 17.0075 1 13.627 1C10.2464 1 7.06815 2.31646 4.67775 4.70692C2.28735 7.09739 0.970825 10.2755 0.970825 13.6562C0.970825 17.0367 2.28729 20.215 4.67775 22.6054C7.06821 24.9958 10.2465 26.3123 13.6272 26.3123H14.7991L14.7988 23.9686H13.627Z" fill="white"/>
  <path d="M20.8012 28.5577C22.5163 26.5872 22.8678 25.7665 22.8678 25.1406C22.8678 23.5252 21.5536 22.2109 19.9381 22.2109H16.9668V24.5547H19.9381C20.2241 24.5547 20.4702 24.7724 20.5163 25.0476C20.4318 25.2253 20.0967 25.8144 18.8814 27.1924C18.0807 28.1002 17.3122 28.88 17.3045 28.8878L16.9667 29.2301V31H22.9432V28.6563H20.715C20.7438 28.6235 20.7725 28.5906 20.8012 28.5577Z" fill="white"/>
  <path d="M28.6854 22.2109V25.7265H27.5136C27.1905 25.7265 26.9277 25.4637 26.9277 25.1406V22.2109H24.5839V25.1406C24.5839 26.756 25.8982 28.0703 27.5136 28.0703H28.6855V31H31.0292V22.2109H28.6854Z" fill="white"/>
</svg>
  `,
    newYellowIcon: `
  <svg class="new_yellow_icon" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6.7002L8 11.7002L13 6.7002" stroke="#FFE401" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13.7002L8 18.7002L13 13.7002" stroke="#FFE401" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  `
  }, g = {
    mainBenefits: [
      {
        svg: `${a.benefitIconFirst}`,
        txt: "All natural content & chemical free"
      },
      {
        svg: `${a.benefitIconSecond}`,
        txt: 'Suitable for <span class="under_line_accent">dogs</span>, <span class="under_line_accent">cats</span> and <span class="under_line_accent">other pets</span>'
      },
      {
        svg: `${a.benefitIconThird}`,
        txt: 'Natural <span class="under_line_accent">stress</span>, <span class="under_line_accent">aggression</span> and <span class="under_line_accent">anxiety</span> aid'
      },
      {
        svg: `${a.benefitIconFourth}`,
        txt: "Effective all day"
      }
    ]
  }, x = `@media (min-width: 769px) {
  .lp-tr--header-section {
    padding: 40px 0 !important;
  }
  .lp-tr--hero-section {
    padding-top: 0 !important;
  }
  .lp-tr--hero-section .lp-tr--main-title,
  .lp-tr--hero-section .lp-tr--hero-lists {
    display: none !important;
  }
  .lp-tr--hero-section .lp-tr--btn {
    margin: 0 auto !important;
  }
  .lp-tr--hero-section .lp-tr--btn a {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 428px !important;
    height: 66px;
    color: #000;
    text-align: center;
    font-family: "DINEngschrift LT";
    font-size: 32px !important;
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
    border-radius: 50px;
    background: #ffa311;
    box-shadow: none;
  }
  .lp-tr--accordion-section {
    padding-top: 56px !important;
  }
}
@media (max-width: 768px) {
  .lp-tr--hero-section {
    padding-top: 16px !important;
  }
  .lp-tr--hero-section > .container {
    padding: 0 14px !important;
  }
  .lp-tr--hero-section > .container > .row {
    margin: 0;
  }
  .lp-tr--hero-section > .container > .row > .col-12 {
    margin: 0;
    padding: 0;
  }
  .lp-tr--hero-section .lp-tr--main-title,
  .lp-tr--hero-section .lp-tr--hero-lists {
    display: none !important;
  }
  .lp-tr--hero-section .lp-tr--btn .lp-tr--kids-tick-mb-img {
    max-width: 265px;
    margin-bottom: -59px;
  }
  .lp-tr--hero-section .lp-tr--btn a {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 311px !important;
    color: #000;
    height: 64px;
    text-align: center;
    font-family: "DINEngschrift LT";
    font-size: 24px !important;
    font-weight: 400;
    line-height: 40px;
    text-transform: uppercase;
    border-radius: 100px;
    background: #ffa311;
    box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
  }
  .lp-tr--hero-section .lp-tr--learn-more-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: #fff;
    text-align: center;
    font-family: "DINEngschrift LT";
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    text-transform: uppercase;
    margin: 16px 0;
  }
  .lp-tr--hero-section .lp-tr--learn-more-btn img {
    display: none !important;
  }
  .lp-tr--accordion-section {
    padding: 30px 0 12px !important;
    margin-bottom: 42px;
  }
  .lp-tr--accordion-section .lp-tr--acordion-title-mobile {
    color: #000;
    text-align: center;
    font-family: "Roboto", sans-serif !important;
    font-size: 24px;
    font-weight: 600;
    line-height: 54px;
    text-transform: lowercase;
    padding: 0;
  }
  .lp-tr--accordion-section .lp-tr--acordion-title-mobile span {
    color: #fff;
    text-align: center;
    font-family: "Inter", sans-serif !important;
    font-size: 28.824px;
    font-weight: 400;
    line-height: 54px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .lp-tr--formula {
    padding-top: 32px !important;
  }
  .lp-tr--formula > .container {
    padding: 0 15px !important;
  }
  .lp-tr--formula > .container > .row {
    margin: 0;
  }
  .lp-tr--formula > .container > .row > .col-md-6 {
    margin: 0;
    padding: 0;
  }
  .lp-tr--formula .lp-pet-zen--natural-box {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    margin-bottom: 15px;
  }
  .lp-tr--formula .lp-pet-zen--natural-box .lp-pet-zen--section-title {
    color: #212529;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    margin: 0;
  }
  .lp-tr--formula .lp-pet-zen--section-description {
    color: #000;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: initial;
    margin-bottom: 10px !important;
  }
  .lp-tr--formula .col-md-6:not(.lp-pet-zen--padding) {
    max-width: 330px;
    margin: -10px auto 0 !important;
  }
  .lp-tr--formula .col-md-6:not(.lp-pet-zen--padding) a.lp-tr--mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    height: 69px;
    color: #fff;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 21.188px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    margin: 12px 0 0;
  }
}
.main_benefits_block {
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .main_benefits_block {
    margin-bottom: 24px;
  }
}
.main_benefits_block .main_benefits_title {
  color: #fff;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.14px;
  text-transform: uppercase;
  margin: 0 0 16px;
}
@media (min-width: 768px) {
  .main_benefits_block .main_benefits_title {
    font-size: 70px;
    line-height: 82px;
    letter-spacing: 0.35px;
    margin: 0 auto 24px;
  }
}
.main_benefits_block .main_benefits_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (min-width: 768px) {
  .main_benefits_block .main_benefits_list {
    max-width: 435px;
    margin: 0 auto;
    gap: 16px;
  }
}
.main_benefits_block .main_benefits_list .main_benefits_item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.main_benefits_block .main_benefits_list .main_benefits_item svg {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .main_benefits_block .main_benefits_list .main_benefits_item svg {
    width: 40px;
    height: 40px;
  }
}
.main_benefits_block .main_benefits_list .main_benefits_item p {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: initial;
  margin: 0;
}
@media (min-width: 768px) {
  .main_benefits_block .main_benefits_list .main_benefits_item p {
    font-size: 20px;
    line-height: 30px;
  }
}
.main_benefits_block .main_benefits_list .main_benefits_item p .under_line_accent {
  text-decoration-line: underline;
}

.new_learn_more_btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: -moz-max-content;
  width: max-content;
  color: #fff;
  font-family: "DINEngschrift LT";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 24px auto 0;
}/*# sourceMappingURL=main.css.map */`, w = window.innerWidth < 768 ? "mobile" : "desktop";
  class _ {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      f({ name: "Top of the LP", dev: "SKh" }), d("exp_zenpet_ux2"), o(".crs_font") || document.head.insertAdjacentHTML(
        "afterbegin",
        'link class="crs_font" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${x}</style>`), this.renderMainBenefitsBlock(), this.device === "mobile" && (this.changeIconLearnMore(), this.scrollToFAQ(".lp-tr--hero-section .lp-tr--learn-more-btn")), this.device === "desktop" && (this.renderLearnMoreBtnOnDesktop(), this.scrollToFAQ(".new_learn_more_btn")), this.replaceFAQBlock(), this.addEventsAccordion();
    }
    renderMainBenefitsBlock() {
      l(".lp-tr--hero-section .lp-tr--main-title").then((n) => {
        const e = o(".lp-tr--hero-section .lp-tr--main-title");
        o(".main_benefits_block") || e.insertAdjacentHTML("beforebegin", C(g.mainBenefits));
      });
    }
    changeIconLearnMore() {
      l(".lp-tr--hero-section .lp-tr--learn-more-btn").then((n) => {
        const e = o(".lp-tr--hero-section .lp-tr--learn-more-btn");
        o(".new_yellow_icon") || e.insertAdjacentHTML("beforeend", `${a.newYellowIcon}`);
      });
    }
    renderLearnMoreBtnOnDesktop() {
      l(".lp-tr--hero-section .lp-tr--btn").then((n) => {
        const e = o(".lp-tr--hero-section .lp-tr--btn");
        o(".new_learn_more_btn") || e.insertAdjacentHTML(
          "afterend",
          `<div class="new_learn_more_btn">Learn more ${a.newYellowIcon}</div>`
        );
      });
    }
    scrollToFAQ(n) {
      l(n).then((e) => {
        o(n).addEventListener("click", (i) => {
          i.preventDefault(), i.stopPropagation(), h(".lp-tr--accordion-section .lp-tr--accordion-header", 0), n === ".new_learn_more_btn" && p(
            "exp_zenpet_ux_learn_more_01",
            "Learn more",
            "Click",
            "Help Your Pet Stay zen - stress relief for every occasion"
          );
        });
      });
    }
    replaceFAQBlock() {
      l(".lp-tr--formula").then((n) => {
        l(".lp-tr--accordion-section").then((e) => {
          const r = o(".lp-tr--formula"), i = o(".lp-tr--accordion-section");
          o(".lp-tr--accordion-section + .lp-tr--formula") || r.insertAdjacentElement("beforebegin", i);
        });
      });
    }
    addEventsAccordion() {
      l(".lp-tr--what-tick-accordion .card .btn").then((e) => {
      });
      const n = m(".lp-tr--what-tick-accordion .card .btn");
      n == null || n.forEach((e) => {
        e.addEventListener("click", (r) => {
          var c, s;
          const i = (s = (c = r.target) == null ? void 0 : c.textContent) == null ? void 0 : s.trim();
          p("exp_zenpet_ux_item_01", i, "Accordion", "Zenpatch is perfect");
        });
      });
    }
  }
  window.location.pathname.match("pages") && new _(w);
})();
//# sourceMappingURL=index.js.map
