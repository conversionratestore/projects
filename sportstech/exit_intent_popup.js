(function() {
  "use strict";
  const r = (a, e, n, p = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: e,
      event_type: n,
      event_loc: p
    }), console.log(`Event: ${a} | ${e} | ${n} | ${p}`);
  }, L = ({ name: a, dev: e }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, f = (a) => document.querySelectorAll(a), t = (a) => document.querySelector(a), T = (a) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", a, "variant_1"));
    }, 1e3);
  };
  function h(a) {
    return new Promise((e) => {
      if (document.querySelector(a))
        return e(document.querySelector(a));
      const n = new MutationObserver(() => {
        document.querySelector(a) && (e(document.querySelector(a)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const I = function(a) {
    a = a === void 0 ? {} : a;
    let e, n, p, i, o = (a == null ? void 0 : a.delay) || 50;
    function s() {
      e = null, i = 0;
    }
    return s(), function() {
      return n = window.scrollY, e != null && (i = n - e), e = n, clearTimeout(p), p = setTimeout(s, o), i;
    };
  }(), E = (a) => {
    var n;
    const e = `; ${document.cookie}`;
    return e.includes(`; ${a}=`) ? (n = e.split(`; ${a}=`).pop()) == null ? void 0 : n.split(";").shift() : (console.log("No cookie"), null);
  }, d = "https://conversionratestore.github.io/projects/sportstech/img/", c = {
    closeIcon: (
      /* HTML */
      `
    <svg class="close_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_89_14090)">
        <path
          d="M18.3007 5.70875C17.9107 5.31875 17.2807 5.31875 16.8907 5.70875L12.0007 10.5888L7.1107 5.69875C6.7207 5.30875 6.0907 5.30875 5.7007 5.69875C5.3107 6.08875 5.3107 6.71875 5.7007 7.10875L10.5907 11.9988L5.7007 16.8887C5.3107 17.2787 5.3107 17.9087 5.7007 18.2987C6.0907 18.6887 6.7207 18.6887 7.1107 18.2987L12.0007 13.4087L16.8907 18.2987C17.2807 18.6887 17.9107 18.6887 18.3007 18.2987C18.6907 17.9087 18.6907 17.2787 18.3007 16.8887L13.4107 11.9988L18.3007 7.10875C18.6807 6.72875 18.6807 6.08875 18.3007 5.70875Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_89_14090">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    copyIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path
        d="M17.9846 0.5H6.63077C6.09688 0.502026 5.58544 0.715011 5.20792 1.09253C4.8304 1.47005 4.61741 1.9815 4.61538 2.51538V5.11538H2.01538C1.4815 5.11741 0.970051 5.3304 0.592531 5.70792C0.215011 6.08544 0.00202617 6.59688 0 7.13077V18.4846C0.00202617 19.0185 0.215011 19.5299 0.592531 19.9075C0.970051 20.285 1.4815 20.498 2.01538 20.5H13.3692C13.9031 20.498 14.4146 20.285 14.7921 19.9075C15.1696 19.5299 15.3826 19.0185 15.3846 18.4846V15.8846H17.9846C18.5185 15.8826 19.0299 15.6696 19.4075 15.2921C19.785 14.9146 19.998 14.4031 20 13.8692V2.51538C19.998 1.9815 19.785 1.47005 19.4075 1.09253C19.0299 0.715011 18.5185 0.502026 17.9846 0.5ZM13.8462 18.4846C13.8462 18.6111 13.7959 18.7324 13.7065 18.8219C13.617 18.9113 13.4957 18.9615 13.3692 18.9615H2.01538C1.8889 18.9615 1.76759 18.9113 1.67815 18.8219C1.58871 18.7324 1.53846 18.6111 1.53846 18.4846V7.13077C1.53846 7.00428 1.58871 6.88297 1.67815 6.79353C1.76759 6.70409 1.8889 6.65385 2.01538 6.65385H13.3692C13.4957 6.65385 13.617 6.70409 13.7065 6.79353C13.7959 6.88297 13.8462 7.00428 13.8462 7.13077V18.4846ZM18.4615 13.8692C18.4615 13.9957 18.4113 14.117 18.3219 14.2065C18.2324 14.2959 18.1111 14.3462 17.9846 14.3462H15.3846V7.13077C15.3826 6.59688 15.1696 6.08544 14.7921 5.70792C14.4146 5.3304 13.9031 5.11741 13.3692 5.11538H6.15385V2.51538C6.15385 2.3889 6.20409 2.26759 6.29353 2.17815C6.38297 2.08871 6.50428 2.03846 6.63077 2.03846H17.9846C18.1111 2.03846 18.2324 2.08871 18.3219 2.17815C18.4113 2.26759 18.4615 2.3889 18.4615 2.51538V13.8692Z"
        fill="#E4002B"
      />
    </svg>
  `
    ),
    checkedIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
      <path d="M1 5L5 9L13 1" stroke="white" stroke-width="2" stroke-linecap="round" />
    </svg>
  `
    ),
    groupIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <g clip-path="url(#clip0_90_14934)">
        <path
          d="M14.0009 19.994C13.1424 19.994 12.3032 19.7395 11.5893 19.2625C10.8755 18.7855 10.3191 18.1076 9.99057 17.3144C9.66203 16.5212 9.57607 15.6484 9.74357 14.8064C9.91107 13.9644 10.3245 13.1909 10.9316 12.5838C11.5387 11.9768 12.3121 11.5634 13.1541 11.3959C13.9962 11.2284 14.869 11.3144 15.6621 11.643C16.4553 11.9715 17.1332 12.5279 17.6102 13.2417C18.0871 13.9556 18.3417 14.7949 18.3417 15.6534C18.3404 16.8042 17.8826 17.9075 17.0688 18.7213C16.2551 19.535 15.1517 19.9927 14.0009 19.994ZM14.0009 12.4064C13.3587 12.4064 12.7309 12.5968 12.197 12.9536C11.663 13.3104 11.2468 13.8175 11.0011 14.4108C10.7553 15.0041 10.691 15.657 10.8163 16.2868C10.9416 16.9167 11.2508 17.4953 11.7049 17.9494C12.159 18.4035 12.7376 18.7127 13.3675 18.838C13.9973 18.9633 14.6502 18.899 15.2435 18.6532C15.8368 18.4075 16.3439 17.9913 16.7007 17.4573C17.0575 16.9234 17.2479 16.2956 17.2479 15.6534C17.247 14.7925 16.9045 13.9672 16.2958 13.3585C15.6871 12.7498 14.8618 12.4073 14.0009 12.4064Z"
          fill="black"
        />
        <path
          d="M19.6902 27.9594H8.30859C8.16355 27.9594 8.02445 27.9018 7.92189 27.7992C7.81934 27.6967 7.76172 27.5576 7.76172 27.4125V25.1361C7.76172 23.4818 8.4189 21.8952 9.58869 20.7254C10.7585 19.5556 12.345 18.8984 13.9994 18.8984C15.6537 18.8984 17.2403 19.5556 18.4101 20.7254C19.5799 21.8952 20.237 23.4818 20.237 25.1361V27.4125C20.237 27.5576 20.1794 27.6967 20.0769 27.7992C19.9743 27.9018 19.8352 27.9594 19.6902 27.9594ZM8.85547 26.8656H19.1433V25.1361C19.1433 23.7718 18.6013 22.4635 17.6367 21.4988C16.672 20.5341 15.3636 19.9922 13.9994 19.9922C12.6351 19.9922 11.3268 20.5341 10.3621 21.4988C9.39741 22.4635 8.85547 23.7718 8.85547 25.1361V26.8656Z"
          fill="black"
        />
        <path
          d="M21.7628 13.246C20.9042 13.246 20.065 12.9914 19.3511 12.5145C18.6373 12.0375 18.0809 11.3596 17.7523 10.5664C17.4238 9.77327 17.3378 8.90048 17.5053 8.05845C17.6727 7.21641 18.0862 6.44295 18.6932 5.83587C19.3003 5.2288 20.0737 4.81537 20.9158 4.64787C21.7578 4.48037 22.6306 4.56633 23.4238 4.89487C24.2169 5.2234 24.8949 5.77977 25.3719 6.49361C25.8488 7.20745 26.1034 8.04669 26.1034 8.90522C26.1021 10.056 25.6443 11.1593 24.8306 11.9731C24.0169 12.7869 22.9136 13.2446 21.7628 13.246ZM21.7628 5.65821C21.1205 5.65818 20.4928 5.8486 19.9588 6.20537C19.4248 6.56215 19.0086 7.06925 18.7628 7.66257C18.517 8.25588 18.4527 8.90875 18.578 9.53862C18.7033 10.1685 19.0125 10.7471 19.4666 11.2012C19.9207 11.6553 20.4993 11.9645 21.1291 12.0898C21.759 12.2151 22.4119 12.1508 23.0052 11.9051C23.5985 11.6593 24.1056 11.2431 24.4624 10.7092C24.8192 10.1752 25.0097 9.54742 25.0097 8.90522C25.0087 8.04438 24.6663 7.21908 24.0576 6.61036C23.4489 6.00164 22.6236 5.65922 21.7628 5.65821Z"
          fill="black"
        />
        <path
          d="M27.453 21.2132H19.9922C19.8472 21.2132 19.7081 21.1556 19.6055 21.053C19.503 20.9505 19.4454 20.8114 19.4454 20.6663C19.4454 20.5213 19.503 20.3822 19.6055 20.2796C19.7081 20.1771 19.8472 20.1195 19.9922 20.1195H26.9062V18.39C26.9059 17.4916 26.6704 16.6089 26.2231 15.8298C25.7758 15.0507 25.1323 14.4022 24.3566 13.9489C23.5809 13.4957 22.7001 13.2534 21.8017 13.2462C20.9033 13.2391 20.0187 13.4672 19.2359 13.908C19.1097 13.9787 18.9606 13.9965 18.8212 13.9575C18.6819 13.9184 18.5637 13.8258 18.4926 13.6998C18.4214 13.5738 18.4031 13.4248 18.4416 13.2853C18.4801 13.1459 18.5723 13.0273 18.698 12.9557C19.6472 12.4209 20.72 12.144 21.8095 12.1525C22.8989 12.1611 23.9672 12.4547 24.9079 13.0043C25.8487 13.5539 26.6291 14.3403 27.1716 15.2852C27.714 16.23 27.9996 17.3005 27.9999 18.39V20.6663C27.9999 20.8114 27.9423 20.9505 27.8397 21.053C27.7372 21.1556 27.5981 21.2132 27.453 21.2132Z"
          fill="black"
        />
        <path
          d="M6.2392 13.246C5.38068 13.246 4.54144 12.9914 3.8276 12.5144C3.11377 12.0375 2.5574 11.3595 2.22886 10.5664C1.90032 9.77319 1.81436 8.90041 1.98185 8.05838C2.14934 7.21635 2.56275 6.4429 3.16982 5.83584C3.77689 5.22877 4.55034 4.81535 5.39236 4.64786C6.23439 4.48037 7.10717 4.56633 7.90034 4.89488C8.69352 5.22342 9.37145 5.77979 9.84842 6.49362C10.3254 7.20746 10.58 8.0467 10.58 8.90522C10.5786 10.0561 10.1209 11.1594 9.30712 11.9731C8.49336 12.7869 7.39004 13.2447 6.2392 13.246ZM6.2392 5.65821C5.59701 5.65821 4.96923 5.84864 4.43526 6.20543C3.90129 6.56221 3.48511 7.06933 3.23935 7.66264C2.9936 8.25596 2.92929 8.90882 3.05458 9.53868C3.17987 10.1685 3.48911 10.7471 3.94322 11.2012C4.39732 11.6553 4.97588 11.9646 5.60574 12.0898C6.2356 12.2151 6.88847 12.1508 7.48178 11.9051C8.0751 11.6593 8.58221 11.2431 8.939 10.7092C9.29579 10.1752 9.48622 9.54742 9.48622 8.90522C9.48524 8.04436 9.14283 7.21904 8.5341 6.61032C7.92538 6.0016 7.10006 5.65919 6.2392 5.65821Z"
          fill="black"
        />
        <path
          d="M8.00767 21.2132H0.546875C0.401835 21.2132 0.262735 21.1556 0.160176 21.053C0.057617 20.9505 0 20.8114 0 20.6663L0 18.39C0.000283784 17.3005 0.285864 16.23 0.828324 15.2852C1.37079 14.3403 2.15121 13.5539 3.09196 13.0043C4.0327 12.4547 5.10097 12.1611 6.19046 12.1525C7.27994 12.144 8.35267 12.4209 9.30191 12.9557C9.42819 13.0271 9.52097 13.1457 9.55982 13.2854C9.59867 13.4251 9.58041 13.5746 9.50906 13.7009C9.43772 13.8272 9.31913 13.9199 9.17938 13.9588C9.03963 13.9976 8.89018 13.9794 8.76389 13.908C7.98107 13.4673 7.09648 13.2391 6.19812 13.2463C5.29976 13.2535 4.41894 13.4958 3.64327 13.949C2.8676 14.4023 2.22412 15.0507 1.77683 15.8298C1.32955 16.609 1.09404 17.4916 1.09375 18.39V20.1195H8.00767C8.15271 20.1195 8.29181 20.1771 8.39437 20.2796C8.49693 20.3822 8.55455 20.5213 8.55455 20.6663C8.55455 20.8114 8.49693 20.9505 8.39437 21.053C8.29181 21.1556 8.15271 21.2132 8.00767 21.2132Z"
          fill="black"
        />
        <path
          d="M14.0009 8.71864C13.1424 8.71864 12.3032 8.46406 11.5893 7.98709C10.8755 7.51012 10.3191 6.83219 9.99058 6.03902C9.66204 5.24584 9.57608 4.37306 9.74356 3.53104C9.91105 2.68901 10.3245 1.91556 10.9315 1.30849C11.5386 0.701425 12.3121 0.288007 13.1541 0.120518C13.9961 -0.0469715 14.8689 0.0389902 15.6621 0.367532C16.4552 0.696075 17.1332 1.25244 17.6101 1.96628C18.0871 2.68011 18.3417 3.51935 18.3417 4.37788C18.3404 5.52871 17.8826 6.63203 17.0688 7.44579C16.2551 8.25955 15.1518 8.71731 14.0009 8.71864ZM14.0009 1.13086C13.3587 1.13086 12.7309 1.3213 12.197 1.67808C11.663 2.03487 11.2468 2.54198 11.0011 3.1353C10.7553 3.72861 10.691 4.38148 10.8163 5.01134C10.9416 5.6412 11.2508 6.21976 11.7049 6.67386C12.159 7.12797 12.7376 7.43722 13.3675 7.5625C13.9973 7.68779 14.6502 7.62349 15.2435 7.37773C15.8368 7.13197 16.3439 6.71579 16.7007 6.18182C17.0575 5.64785 17.2479 5.02008 17.2479 4.37788C17.247 3.51702 16.9045 2.6917 16.2958 2.08298C15.6871 1.47426 14.8618 1.13185 14.0009 1.13086Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_90_14934">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    starIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M16 6.09375L11.25 9.6875L12.9375 16L8 12.2188L3.0625 16L4.75 9.6875L0 6.09375H5.8125L8 0L10.1875 6.09375H16Z"
        fill="black"
      />
    </svg>
  `
    ),
    starPartIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M16 6.09375L11.25 9.6875L12.9375 16L8 12.2188L3.0625 16L4.75 9.6875L0 6.09375H5.8125L8 0L10.1875 6.09375H16ZM9 11.25L10.7188 12.6875L9.59375 9.46875L12.2188 7.375L9.03125 7.46875L9 11.25Z"
        fill="black"
      />
    </svg>
  `
    ),
    bgrYellowIcon: (
      /* HTML */
      `
    <svg
      class="bgr_yellow_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="480"
      height="66"
      viewBox="0 0 480 66"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M0.00292969 0.964844H479.997V55.0352H38.4248L31.0029 65.0352L23.5811 55.0352H0.00292969V0.964844Z"
        fill="#F8CB87"
      />
    </svg>
  `
    ),
    bgrYellowMobIcon: (
      /* HTML */
      `
    <svg
      class="bgr_yellow_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="294"
      height="68"
      viewBox="0 0 294 68"
      fill="none"
    >
      <path opacity="0.5" d="M0 0H294V58H38.4218L31 68L23.5782 58H0V0Z" fill="#F8CB87" />
    </svg>
  `
    )
  }, P = (
    /* HTML */
    `
  <div class="exit_intent_popup">
    <div class="explore_our_best first_var">
      <div class="header_popup">
        <h2 class="main_title">Entdecken Sie unsere besten Produkte</h2>
        <p class="main_description">Werfen Sie einen genaueren Blick auf unsere Top-Auswahl nur für Sie</p>
      </div>
      <div class="body_popup">
        <div class="img_wrapper">
          <img src="${d}explore_our_best_img.png" alt="photo sportstech" />
        </div>
        <div class="btn_wrapper">
          <h3>Verkauf (bis zu <span class="accent_color_red">30%</span>)</h3>
          <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
        </div>
      </div>
    </div>
  </div>
`
  ), z = (
    /* HTML */
    `
  <div class="exit_intent_popup">
    <div class="explore_our_best second_var">
      <div class="header_popup">
        <h2 class="main_title">Entdecken Sie unsere besten Produkte</h2>
        <p class="main_description">Werfen Sie einen genaueren Blick auf unsere Top-Auswahl nur für Sie</p>
      </div>
      <div class="body_popup">
        <ul class="category_list">
          <li class="category_item bestsellers_item">
            <img src="${d}category_img_1.png" alt="photo sportstech" />
            <h3>Bestseller</h3>
            <div class="info_wrapper">
              <h3>Bestseller</h3>
              <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
            </div>
          </li>
          <li class="category_item bikes_item">
            <img src="${d}category_img_2.png" alt="photo sportstech" />
            <h3>Speedbikes und Ergometer</h3>
            <div class="info_wrapper">
              <h3>Speedbikes und Ergometer</h3>
              <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
            </div>
          </li>
          <li class="category_item equipment_item">
            <img src="${d}category_img_3.png" alt="photo sportstech" />
            <h3>Ausrüstung</h3>
            <div class="info_wrapper">
              <h3>Ausrüstung</h3>
              <div class="shop_now_btn main_btn">Jetzt einkaufen</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
`
  ), x = (
    /* HTML */
    `
  <div class="exit_intent_popup">
    <div class="first_order_discount first_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">
            <span class="accent_color_red">Erhalten Sie 5%</span> Rabatt & kostenlose Lieferung!
          </h2>
          <p class="main_description">
            Abonnieren Sie unseren Newsletter und sparen Sie bei Ihrer gesamten ersten Bestellung, ohne Einschränkungen.
          </p>
        </div>
        <div class="body_popup">
          <div class="email_wrapper">
            <label for="emailNew">
              <input type="email" name="emailNew" id="emailNew" placeholder="Email" />
            </label>
          </div>
          <div class="btn_wrapper">
            <div class="get_discount_btn main_btn">5% Rabatt erhalten</div>
            <div class="no_thanks_btn main_btn" data-popup="close">Nein, danke</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${d}check_out_now_img.png" alt="photo sportstech" class="desk_var" />
        <img src="${d}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
      </div>
    </div>
    <div class="first_order_discount second_var is_hidden">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">Sie stehen auf der Liste</h2>
          <ul>
            <li>
              <p>
                Ihr <span class="accent_color_red">5% Rabatt</span> auf die erste Bestellung ist bereit (kein
                Mindestbestellwert, keine Ausschlüsse).
              </p>
            </li>
            <li>
              <p>Zusätzlich <span class="accent_color_red">KOSTENLOSE</span> Lieferung vom Hersteller.</p>
            </li>
          </ul>
        </div>
        <div class="body_popup">
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Geben Sie den Code im Warenkorb ein</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">SPORTSTECH5</span>
              <span data-discount="SPORTSTECH5">${c.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="continue_shopping_btn main_btn" data-popup="close">Weiter einkaufen</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${d}first_order_discount_img_2.png" alt="photo sportstech" class="desk_var" />
        <img src="${d}first_order_discount_img_mob.png" alt="photo sportstech" class="mob_var" />
      </div>
    </div>
  </div>
`
  ), O = (
    /* HTML */
    `
  <div class="exit_intent_popup">
    <div class="check_out_now first_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">
            Jetzt zur Kasse gehen und <span class="accent_color_red">5% Rabatt</span> auf Ihre erste Bestellung erhalten
          </h2>
          <div id="counter">
            <div class="time_block">
              <div class="time_txt minutes_tens">1</div>
              <div class="time_txt minutes_ones">5</div>
              <div class="counter_label">Minuten</div>
            </div>
            <div class="time_separator">:</div>
            <div class="time_block">
              <div class="time_txt seconds_tens">0</div>
              <div class="time_txt seconds_ones">0</div>
              <div class="counter_label">Sekunden</div>
            </div>
          </div>
        </div>
        <div class="body_popup">
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="popular_products">
            ${c.groupIcon}
            <p>
              Beliebtes Produkt. <br /><b><span>${Math.floor(Math.random() * 14) + 2}</span> Personen</b> sehen es sich
              gerade an
            </p>
          </div>
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Der Code wird beim Checkout angewendet</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">SPORTSTECH5</span>
              <span data-discount="SPORTSTECH5">${c.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="check_out_now_btn main_btn">Jetzt zur Kasse</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${d}check_out_now_img.png" alt="photo sportstech" class="desk_var" />
      </div>
    </div>
  </div>
`
  ), B = (
    /* HTML */
    `
  <div class="exit_intent_popup">
    <div class="check_out_now second_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">
            Jetzt zur Kasse gehen und<br /><span class="accent_color_red">5% Rabatt</span> sowie kostenlose Lieferung
            erhalten
          </h2>
          <p class="main_description">*5% Rabatt gilt nur für diese Bestellung</p>
        </div>
        <div class="body_popup">
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="discount_code_wrapper">
            <p class="discount_code_title">Der Code wird beim Checkout angewendet</p>
            <div class="discount_code_container">
              <span class="discount_code_txt">SPORTSTECH5</span>
              <span data-discount="SPORTSTECH5">${c.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <p>*Der endgültige Preis wird beim Checkout berechnet</p>
            <div class="complete_my_order_now_btn main_btn">Meine Bestellung jetzt abschließen</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
  ), M = (
    /* HTML */
    `
  <div class="exit_intent_popup">
    <div class="check_out_now third_var">
      <div class="info_wrapper">
        <div class="header_popup">
          <h2 class="main_title">Es gehört fast Ihnen!</h2>
          <p class="main_description">Nur noch ein Schritt:</p>
        </div>
        <div class="body_popup">
          <div class="stock_wrapper">
            ${window.innerWidth >= 768 ? `${c.bgrYellowIcon}` : `${c.bgrYellowMobIcon}`}
            <p>
              Beliebte Wahl, wir könnten bald ausverkauft sein.
              <span class="stock_txt"
                >Nur noch <span class="stock_value">${Math.floor(Math.random() * 10) + 1}</span> Stück übrig.</span
              >
            </p>
          </div>
          <div class="products_wrapper">
            <ul class="products_list"></ul>
          </div>
          <div class="popular_products">
            ${c.groupIcon}
            <p>
              <b><span>${Math.floor(Math.random() * 12) + 4}</span> Personen</b> sehen sich dieses Produkt gerade an.
              Wir können die Verfügbarkeit nicht garantieren, wenn Sie den Kauf jetzt nicht abschließen.
            </p>
          </div>
          <div class="btn_wrapper">
            <div class="complete_my_order_now_btn main_btn">Meine Bestellung jetzt abschließen</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
  ), H = (
    /* HTML */
    `
  <div class="new-popup-backdrop is-hidden">
    <div class="new-popup">
      <button class="new-popup__close" data-popup="close">${c.closeIcon}</button>
      <div class="new-popup__content"></div>
    </div>
  </div>
`
  ), $ = (a, e, n, p, i, o) => (
    /* HTML */
    `
    <li class="products_item">
      <div class="img_wrapper">
        <a href="${a}">
          <img src=${e} alt="photo sportstech" />
        </a>
      </div>
      <div class="item_info">
        <h3><a href="${a}">${n}</a></h3>
        ${p ? `<span class="txt_descr">${p}</span>` : ""}
        <div class="price_wrapper">
          ${o ? `<div class="stars_wrapper">
            ${c.starIcon}${c.starIcon}${c.starIcon}${c.starIcon}${c.starPartIcon}
            <span>(${o})</span>
          </div>` : ""}
          <span class="price_txt">${i}</span>
        </div>
      </div>
    </li>
  `
  ), N = `.new-popup-backdrop {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000000000;
  transition: all 0.4s ease 0s;
}

.new-popup-backdrop.is-hidden {
  opacity: 0;
  pointer-events: none;
}

.new-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 605px;
  width: calc(100% - 32px);
}

.new-popup__close {
  position: absolute;
  background: none;
  padding: 0;
  top: 19px;
  right: 19px;
  width: 30px;
  height: 30px;
  z-index: 1;
  border: none;
  transition: all 0.8s ease 0s;
}

.new-popup__close:hover,
.new-popup__close:focus {
  background: none;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .new-popup-backdrop {
    overflow: auto;
  }
  .new-popup {
    max-width: 334px;
  }
  .new-popup__close {
    top: 8px;
    right: 8px;
  }
}
.first_order_discount {
  background: rgba(0, 0, 0, 0.7);
}
.first_order_discount .new-popup {
  max-width: 890px;
}
@media (max-width: 768px) {
  .first_order_discount .new-popup {
    max-width: 334px;
  }
}
.first_order_discount .new-popup__close {
  top: 12px;
  right: 12px;
  background: #fff;
}
@media (max-width: 768px) {
  .first_order_discount .new-popup__close {
    top: 0;
    right: 0;
  }
}

.check_out_now {
  background: rgba(0, 0, 0, 0.7);
}
.check_out_now .new-popup {
  max-width: 960px;
  overflow-y: auto;
}
.check_out_now .new-popup::-webkit-scrollbar {
  display: none;
}
@media (max-width: 768px) {
  .check_out_now .new-popup {
    max-width: 334px;
    height: auto;
  }
}
.check_out_now .new-popup__close {
  top: 12px;
  right: 12px;
  background: #fff;
}
@media (max-width: 768px) {
  .check_out_now .new-popup__close {
    top: 0;
    right: 0;
  }
}

.check_out_now_second,
.check_out_now_third {
  background: rgba(0, 0, 0, 0.7);
}
.check_out_now_second .new-popup,
.check_out_now_third .new-popup {
  max-width: 560px;
  overflow-y: auto;
}
.check_out_now_second .new-popup::-webkit-scrollbar,
.check_out_now_third .new-popup::-webkit-scrollbar {
  display: none;
}
@media (max-width: 768px) {
  .check_out_now_second .new-popup,
  .check_out_now_third .new-popup {
    max-width: 335px;
  }
}
.check_out_now_second .new-popup__close,
.check_out_now_third .new-popup__close {
  top: 28px;
  right: 12px;
}
@media (max-width: 768px) {
  .check_out_now_second .new-popup__close,
  .check_out_now_third .new-popup__close {
    top: 21px;
    right: 9px;
  }
}

@media (max-width: 768px) {
  .check_out_now_third .new-popup__close {
    top: 8px;
    right: 8px;
  }
}

@media (max-width: 768px) {
  .exit_intent_popup {
    flex-direction: column-reverse;
  }
}
.exit_intent_popup .main_title {
  color: #000;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  margin: 0 0 12px;
  letter-spacing: initial;
}
@media (max-width: 768px) {
  .exit_intent_popup .main_title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 8px;
  }
}
.exit_intent_popup .main_description {
  color: #000;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}
@media (max-width: 768px) {
  .exit_intent_popup .main_description {
    font-size: 14px;
    line-height: 22px;
    max-width: 225px;
    margin: 0 auto;
  }
}
.exit_intent_popup .accent_color_red {
  color: #e4002b;
  font-weight: 700;
}
.exit_intent_popup .main_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: #e4002b;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}
.exit_intent_popup .desk_var {
  display: block;
}
@media (max-width: 768px) {
  .exit_intent_popup .desk_var {
    display: none;
  }
}
.exit_intent_popup .mob_var {
  display: none;
}
@media (max-width: 768px) {
  .exit_intent_popup .mob_var {
    display: block;
  }
}
.exit_intent_popup .explore_our_best {
  padding: 40px;
  background: #fff;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best {
    padding: 0;
  }
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best.first_var {
    background: none;
  }
}
.exit_intent_popup .explore_our_best.first_var .header_popup {
  margin: 0 0 24px;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best.first_var .header_popup {
    background: #fff;
    margin: 0;
  }
}
.exit_intent_popup .explore_our_best.first_var .main_description {
  margin: 0 auto;
  max-width: 370px;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best.first_var .main_description {
    max-width: 264px;
  }
}
.exit_intent_popup .explore_our_best.second_var .header_popup {
  margin: 0 0 32px;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best.second_var .header_popup {
    margin: 0;
  }
}
.exit_intent_popup .explore_our_best.second_var .header_popup .main_title {
  max-width: 400px;
  margin: 0 auto 12px;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best.second_var .header_popup .main_title {
    text-align: left;
    margin-bottom: 8px;
  }
}
.exit_intent_popup .explore_our_best.second_var .header_popup .main_description {
  max-width: 370px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best.second_var .header_popup .main_description {
    text-align: left;
    margin: 0;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .header_popup {
    padding: 20px;
    margin: 0;
  }
}
.exit_intent_popup .explore_our_best .body_popup .category_list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 12px;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .category_list {
    flex-direction: column;
  }
}
.exit_intent_popup .explore_our_best .body_popup .category_list .category_item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 24px) / 3);
  max-width: 165px;
  background: #eee;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .category_list .category_item {
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .category_list .category_item img {
    max-width: 145px;
  }
  .exit_intent_popup .explore_our_best .body_popup .category_list .category_item img + h3 {
    display: none;
  }
}
.exit_intent_popup .explore_our_best .body_popup .category_list .category_item h3 {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  margin: 12px 0 12px;
  text-align: center;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .category_list .category_item h3 {
    margin: 0;
  }
}
.exit_intent_popup .explore_our_best .body_popup .category_list .category_item .info_wrapper {
  margin: auto 0 0;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .category_list .category_item .info_wrapper {
    margin: 0;
    padding: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.exit_intent_popup .explore_our_best .body_popup .category_list .category_item .info_wrapper h3 {
  display: none;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .category_list .category_item .info_wrapper h3 {
    display: block;
    text-align: left;
  }
}
.exit_intent_popup .explore_our_best .body_popup .category_list .category_item .info_wrapper .shop_now_btn {
  height: 42px;
  width: 100%;
}
.exit_intent_popup .explore_our_best .body_popup .img_wrapper {
  width: 100%;
  height: 310px;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .img_wrapper {
    height: auto;
  }
}
.exit_intent_popup .explore_our_best .body_popup .img_wrapper img {
  width: 100%;
  height: 100%;
}
.exit_intent_popup .explore_our_best .body_popup .btn_wrapper {
  background: #eee;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .btn_wrapper {
    padding: 20px;
    gap: 12px;
  }
}
.exit_intent_popup .explore_our_best .body_popup .btn_wrapper h3 {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: initial;
  margin: 0;
}
@media (max-width: 768px) {
  .exit_intent_popup .explore_our_best .body_popup .btn_wrapper h3 {
    font-size: 19px;
  }
}
.exit_intent_popup .explore_our_best .body_popup .shop_now_btn {
  height: 50px;
}
.exit_intent_popup .first_order_discount {
  display: flex;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount {
    flex-direction: column-reverse;
  }
}
.exit_intent_popup .first_order_discount.is_hidden {
  display: none;
}
.exit_intent_popup .first_order_discount .info_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  background: #fff;
  padding: 40px 36px 40px 40px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper {
    width: 100%;
    padding: 20px;
  }
}
.exit_intent_popup .first_order_discount .info_wrapper .header_popup {
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper .header_popup {
    margin-bottom: 24px;
  }
}
.exit_intent_popup .first_order_discount .info_wrapper .header_popup .main_title {
  text-align: left;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper .header_popup .main_title {
    max-width: 100%;
  }
}
.exit_intent_popup .first_order_discount .info_wrapper .header_popup .main_description {
  text-align: left;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper .header_popup .main_description {
    max-width: 100%;
  }
}
.exit_intent_popup .first_order_discount .info_wrapper .header_popup ul {
  margin: 0;
  padding: 0 0 0 22px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper .header_popup ul {
    padding-top: 4px;
  }
}
.exit_intent_popup .first_order_discount .info_wrapper .header_popup ul li {
  font-size: 12px;
}
.exit_intent_popup .first_order_discount .info_wrapper .header_popup ul li + li {
  margin-top: 10px;
}
.exit_intent_popup .first_order_discount .info_wrapper .header_popup ul li p {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 0;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup {
  width: 100%;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .email_wrapper {
  margin-bottom: 24px;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .email_wrapper label {
  width: 100%;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .email_wrapper label input {
  max-height: 50px;
  width: 100%;
  height: 100%;
  border: 1px solid #646464;
  background: #fff;
  padding: 15px 18px;
  color: #646464;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .email_wrapper #edit-email-address-error {
  margin-top: 5px;
  color: red;
  font-size: 11px;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .discount_code_wrapper .discount_code_title {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  margin: 0 0 4px;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .discount_code_wrapper .discount_code_container {
  border: 1px solid #ccc;
  height: 50px;
  padding: 0px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .discount_code_wrapper .discount_code_txt {
  color: #e4002b;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 4.2px;
  text-transform: uppercase;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .discount_code_wrapper span[data-discount] {
  cursor: pointer;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 0;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper {
    gap: 20px;
  }
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper .get_discount_btn,
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper .continue_shopping_btn {
  height: 54px;
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper .no_thanks_btn {
  background: none;
  width: -moz-max-content;
  width: max-content;
  margin: 0 auto;
  color: #646464;
  height: 36px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper .no_thanks_btn {
    height: -moz-max-content;
    height: max-content;
  }
}
.exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper .enhance_your_experience_btn {
  background: none;
  width: -moz-max-content;
  width: max-content;
  margin: 14px auto 0;
  color: #646464;
  height: -moz-max-content;
  height: max-content;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .info_wrapper .body_popup .btn_wrapper .enhance_your_experience_btn {
    margin-top: 0;
  }
}
.exit_intent_popup .first_order_discount .img_wrapper {
  width: 50%;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount .img_wrapper {
    width: 100%;
  }
}
.exit_intent_popup .first_order_discount .img_wrapper img {
  width: 100%;
  height: 100%;
}
.exit_intent_popup .first_order_discount.second_var .header_popup {
  margin-bottom: 40px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.second_var .header_popup {
    margin-bottom: 12px;
  }
}
.exit_intent_popup .first_order_discount.second_var .info_wrapper .body_popup .btn_wrapper {
  margin-top: 24px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.second_var .info_wrapper .body_popup .btn_wrapper {
    margin-top: 20px;
  }
}
.exit_intent_popup .first_order_discount.third_var .header_popup {
  margin-bottom: 32px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.third_var .header_popup {
    margin-bottom: 16px;
  }
}
.exit_intent_popup .first_order_discount.third_var .body_popup label {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
}
.exit_intent_popup .first_order_discount.third_var .body_popup label input {
  margin-top: 4px;
  border: 1px solid #ccc;
}
.exit_intent_popup .first_order_discount.third_var .body_popup .btn_wrapper {
  margin-top: 32px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.third_var .body_popup .btn_wrapper {
    margin-top: 24px;
  }
}
.exit_intent_popup .first_order_discount.third_var .body_popup .btn_wrapper .submit_btn {
  height: 54px;
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper {
  margin-top: 32px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper {
    margin-top: 24px;
  }
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper h3 {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  margin: 0 0 16px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper h3 {
    margin-bottom: 12px;
  }
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 60px;
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list {
    gap: 10px 40px;
  }
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div {
  width: calc((100% - 60px) / 2);
}
@media (max-width: 768px) {
  .exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div {
    width: calc((100% - 40px) / 2);
  }
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div input.custom_checkbox {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div label {
  position: relative;
  width: -moz-max-content;
  width: max-content;
  cursor: pointer;
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div label .checked_box {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid black;
  left: 0;
  border-radius: 2px;
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div label .choose_option_txt {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-left: 30px;
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div .custom_checkbox:checked + label .checked_box {
  background: #e4002b;
  border: 1px solid #e4002b;
}
.exit_intent_popup .first_order_discount.third_var .body_popup .checkbox_wrapper .checkbox_list > div .custom_checkbox:checked + label .checked_box::after {
  position: absolute;
  content: "";
  width: 13px;
  height: 10px;
  background: url(https://conversionratestore.github.io/projects/sportstech/img/checked_icon.svg) no-repeat;
  background-size: contain;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.exit_intent_popup .check_out_now {
  display: flex;
}
.exit_intent_popup .check_out_now .info_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  background: #fff;
  padding: 24px 40px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper {
    width: 100%;
    padding: 32px 20px 20px 20px;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .header_popup {
  margin-bottom: 32px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .header_popup {
    margin-bottom: 24px;
  }
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .header_popup .main_title {
    max-width: 290px;
    margin: 0 auto 12px;
    font-size: 20px;
    line-height: 30px;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .header_popup #counter {
  display: flex;
  justify-content: space-between;
  max-width: 167px;
  margin: 0 auto;
}
.exit_intent_popup .check_out_now .info_wrapper .header_popup #counter .time_block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.exit_intent_popup .check_out_now .info_wrapper .header_popup #counter .time_txt {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 40px;
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  background: #eee;
}
.exit_intent_popup .check_out_now .info_wrapper .header_popup #counter .counter_label {
  text-align: center;
  color: #646464;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
}
.exit_intent_popup .check_out_now .info_wrapper .header_popup #counter .time_separator {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 36px;
  color: #144733;
  font-family: "Open Sans", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  margin: 0 2px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup {
  width: 100%;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper {
  overflow-y: auto;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper::-webkit-scrollbar-thumb {
  background: black;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper::-webkit-scrollbar {
  width: 4px;
  padding-left: 4px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper::-webkit-scrollbar-track {
  background: #eeeeee;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list {
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 150px;
  height: auto;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list {
    max-height: 120px;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item {
  display: flex;
  gap: 11px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item + .products_item {
  margin-top: 24px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item + .products_item {
    margin-top: 12px;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .img_wrapper {
  display: block;
  width: 100%;
  max-width: 80px;
  height: 100%;
  max-height: 85px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .img_wrapper a {
  width: 100%;
  height: 100%;
  display: block;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .img_wrapper img {
  width: 100%;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info h3 {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: initial;
  margin: 0;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info h3 {
    font-size: 14px;
    line-height: 20px;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info h3 a {
  text-decoration: none;
  color: inherit;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info .txt_descr {
  color: #646464;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  text-transform: capitalize;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info .price_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info .stars_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info .stars_wrapper span {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 2px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info .price_txt {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .products_wrapper .products_list .products_item .item_info .price_txt {
    font-size: 14px;
    line-height: 20px;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .popular_products {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  background: #f3f5f4;
  margin: 32px 0;
  padding: 6px 12px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .popular_products {
    justify-content: flex-start;
    padding: 6px 10px;
    margin: 24px 0;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .popular_products p {
  color: #212121;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .popular_products p b {
  font-weight: 600;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .popular_products br {
  display: none;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .popular_products br {
    display: block;
  }
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .discount_code_wrapper .discount_code_title {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  margin: 0 0 4px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .discount_code_wrapper .discount_code_container {
  border: 1px solid #ccc;
  height: 50px;
  padding: 0px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .discount_code_wrapper .discount_code_txt {
  color: #e4002b;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 4.2px;
  text-transform: uppercase;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .discount_code_wrapper span[data-discount] {
  cursor: pointer;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .btn_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
}
.exit_intent_popup .check_out_now .info_wrapper .body_popup .btn_wrapper .check_out_now_btn,
.exit_intent_popup .check_out_now .info_wrapper .body_popup .btn_wrapper .complete_my_order_now_btn {
  height: 54px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .btn_wrapper .check_out_now_btn,
  .exit_intent_popup .check_out_now .info_wrapper .body_popup .btn_wrapper .complete_my_order_now_btn {
    letter-spacing: normal;
  }
}
.exit_intent_popup .check_out_now .img_wrapper {
  width: 50%;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now .img_wrapper {
    display: none;
  }
}
.exit_intent_popup .check_out_now .img_wrapper img {
  width: 100%;
  height: 100%;
}
.exit_intent_popup .check_out_now.second_var .info_wrapper, .exit_intent_popup .check_out_now.third_var .info_wrapper {
  width: 100%;
  align-items: center;
  padding: 40px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper, .exit_intent_popup .check_out_now.third_var .info_wrapper {
    align-items: start;
    padding: 32px 20px 20px 20px;
  }
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .header_popup, .exit_intent_popup .check_out_now.third_var .info_wrapper .header_popup {
  margin-bottom: 24px;
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .main_title, .exit_intent_popup .check_out_now.third_var .info_wrapper .main_title {
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper .main_title, .exit_intent_popup .check_out_now.third_var .info_wrapper .main_title {
    text-align: left;
  }
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper .main_description, .exit_intent_popup .check_out_now.third_var .info_wrapper .main_description {
    text-align: left;
    max-width: 100%;
  }
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .products_wrapper .products_list, .exit_intent_popup .check_out_now.third_var .info_wrapper .products_wrapper .products_list {
  max-height: 150px;
  height: auto;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper .products_wrapper .products_list, .exit_intent_popup .check_out_now.third_var .info_wrapper .products_wrapper .products_list {
    max-height: 120px;
  }
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .stock_wrapper, .exit_intent_popup .check_out_now.third_var .info_wrapper .stock_wrapper {
  position: relative;
  margin-bottom: 24px;
  height: 64px;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper .stock_wrapper, .exit_intent_popup .check_out_now.third_var .info_wrapper .stock_wrapper {
    margin-bottom: 12px;
    height: 68px;
  }
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .stock_wrapper .bgr_yellow_icon, .exit_intent_popup .check_out_now.third_var .info_wrapper .stock_wrapper .bgr_yellow_icon {
  position: absolute;
  top: 0;
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .stock_wrapper p, .exit_intent_popup .check_out_now.third_var .info_wrapper .stock_wrapper p {
  max-width: 365px;
  position: relative;
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 12px;
  z-index: 1;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper .stock_wrapper p, .exit_intent_popup .check_out_now.third_var .info_wrapper .stock_wrapper p {
    max-width: -moz-max-content;
    max-width: max-content;
    font-size: 13px;
    padding: 8px 12px;
  }
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .popular_products, .exit_intent_popup .check_out_now.third_var .info_wrapper .popular_products {
  padding: 12px 10px 12px 12px;
  margin: 24px 0 0;
  align-items: flex-start;
  justify-content: flex-start;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper .popular_products, .exit_intent_popup .check_out_now.third_var .info_wrapper .popular_products {
    padding: 12px 10px;
  }
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .popular_products svg, .exit_intent_popup .check_out_now.third_var .info_wrapper .popular_products svg {
  flex: 1 0 30px;
  width: 30px;
  height: 30px;
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .popular_products p, .exit_intent_popup .check_out_now.third_var .info_wrapper .popular_products p {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .discount_code_wrapper, .exit_intent_popup .check_out_now.third_var .info_wrapper .discount_code_wrapper {
  margin-top: 24px;
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .btn_wrapper, .exit_intent_popup .check_out_now.third_var .info_wrapper .btn_wrapper {
  gap: 8px;
}
.exit_intent_popup .check_out_now.second_var .info_wrapper .btn_wrapper > p, .exit_intent_popup .check_out_now.third_var .info_wrapper .btn_wrapper > p {
  color: #646464;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.second_var .info_wrapper .btn_wrapper > p, .exit_intent_popup .check_out_now.third_var .info_wrapper .btn_wrapper > p {
    text-align: left;
    margin: 0;
  }
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.third_var .info_wrapper .header_popup {
    margin-bottom: 8px;
  }
}
@media (max-width: 768px) {
  .exit_intent_popup .check_out_now.third_var .info_wrapper .main_title {
    font-size: 24px;
  }
}

.check_out_now.large_popup .exit_intent_popup .info_wrapper .header_popup {
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .check_out_now.large_popup .exit_intent_popup .info_wrapper .header_popup {
    margin-bottom: 20px;
  }
}
.check_out_now.large_popup .exit_intent_popup .info_wrapper .body_popup .popular_products {
  margin: 24px 0;
}
@media (max-width: 768px) {
  .check_out_now.large_popup .exit_intent_popup .info_wrapper .body_popup .popular_products {
    margin: 20px 0;
  }
}
.check_out_now.large_popup .exit_intent_popup .info_wrapper .body_popup .products_wrapper {
  padding-right: 16px;
}
@media (max-width: 768px) {
  .check_out_now.large_popup .exit_intent_popup .info_wrapper .body_popup .products_wrapper {
    padding-right: 12px;
  }
}
@media (max-width: 768px) {
  .check_out_now.large_popup .exit_intent_popup .info_wrapper .body_popup .btn_wrapper {
    margin-top: 20px;
  }
}

.check_out_now_third.large_popup .exit_intent_popup .info_wrapper .body_popup .products_wrapper,
.check_out_now_second.large_popup .exit_intent_popup .info_wrapper .body_popup .products_wrapper {
  padding-right: 24px;
}
@media (max-width: 768px) {
  .check_out_now_third.large_popup .exit_intent_popup .info_wrapper .body_popup .products_wrapper,
  .check_out_now_second.large_popup .exit_intent_popup .info_wrapper .body_popup .products_wrapper {
    padding-right: 12px;
  }
}

button + div.needsclick.kl-private-reset-css-Xuajs1 > div.needsclick.kl-private-reset-css-Xuajs1 {
  display: none !important;
}/*# sourceMappingURL=main.css.map */`, R = window.innerWidth < 768 ? "mobile" : "desktop";
  class j {
    constructor(e) {
      this.device = e, this.timeoutId = null, this.delayTime = 6e4, this.firstSessionTime = 20 * 1e3, this.lastPopupTime = 0, this.timeLag = 3 * 60 * 1e3, this.active = !1, this.init();
    }
    init() {
      window.onload = () => {
        if (localStorage.getItem("session") && !sessionStorage.getItem("session")) {
          let e = Number(localStorage.getItem("session"));
          localStorage.setItem("session", (e + 1).toString()), sessionStorage.setItem("session", "1");
        } else
          localStorage.getItem("session") || (localStorage.setItem("session", "1"), sessionStorage.setItem("session", "1"));
        Number(localStorage.getItem("session")) > 1 ? console.log("Returning users (session number > 1)", Number(localStorage.getItem("session"))) : console.log("(1st session)", Number(localStorage.getItem("session")));
      }, L({ name: "Exit Intent Popup", dev: "SKh" }), T("exp_exit_intent_popup"), document.head.insertAdjacentHTML(
        "afterbegin",
        '<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${N}</style>`), (!sessionStorage.getItem("firstOrderDiscount") || !localStorage.getItem("initUser") || !localStorage.getItem("klaviyoForm")) && document.body.insertAdjacentHTML(
        "afterbegin",
        `<style class="crs_style_klaviyo">
          body > div > div.needsclick.kl-private-reset-css-Xuajs1 {
            opacity: 0;
            pointer-events: none;
            display: none;
          }
        </style`
      ), localStorage.getItem("initUser") || this.getNewUser("_ga"), this.createPopup(), setTimeout(() => {
        this.intentPopupTriggers();
      }, 200), this.copyDiscount(), this.handlerClickBtns(), this.handlerClickInput(), this.observerKlaviyo();
    }
    intentPopupTriggers() {
      if (Number(localStorage.getItem("session")) > 1) {
        if (sessionStorage.getItem("returningUsers"))
          return;
      } else if (sessionStorage.getItem("salesOffer") && sessionStorage.getItem("checkOutNow"))
        return;
      this.device === "mobile" && document.addEventListener("scroll", () => {
        +I() < -150 && this.getItemsBasket("differentUserCategories", "Scroll up (JS speed value: 150) - for any page");
      }), this.device === "desktop" && document.addEventListener("mouseout", (e) => {
        e.relatedTarget || this.getItemsBasket("differentUserCategories", "cursor moved out of the page frame");
      }), (window.location.href.match("/checkout") || window.location.href.match("/cart")) && (this.setupListeners(), this.resetTimer());
    }
    setupListeners() {
      document.addEventListener("mousemove", () => this.resetTimer()), document.addEventListener("keydown", () => this.resetTimer()), this.device === "mobile" && (document.addEventListener("touchstart", () => this.resetTimer()), document.addEventListener("touchmove", () => this.resetTimer()));
    }
    resetTimer() {
      clearTimeout(this.timeoutId), this.timeoutId = setTimeout(
        () => this.getItemsBasket("differentUserCategories", "In 60sec. at basket, checkout without any action"),
        this.delayTime
      );
    }
    getNewUser(e) {
      const n = E(e);
      if (!n)
        console.log("New User"), localStorage.setItem("initUser", "true"), setTimeout(() => {
          this.isPopupOpen() || (t(".new-popup-backdrop").classList.add("first_order_discount"), this.handleShowPopup(x, "firstOrderDiscount", "firstOrderDiscount", "firstOrderDiscount"), sessionStorage.getItem("firstOrderDiscount") || this.handlerCloseKlaviyo());
        }, this.firstSessionTime);
      else if (n) {
        const p = +(n.split(".").pop() + "000");
        +/* @__PURE__ */ new Date() - +new Date(p) <= 5 * 60 * 1e3 && (console.log("New User"), localStorage.setItem("initUser", "true"), setTimeout(() => {
          this.isPopupOpen() || (t(".new-popup-backdrop").classList.add("first_order_discount"), this.handleShowPopup(x, "firstOrderDiscount", "firstOrderDiscount", "firstOrderDiscount"), sessionStorage.getItem("firstOrderDiscount") || this.handlerCloseKlaviyo());
        }, this.firstSessionTime));
      }
    }
    async getItemsBasket(e, n) {
      if (this.isPopupOpen())
        return;
      const p = Date.now();
      if (sessionStorage.getItem("lastPopupTime") && (this.lastPopupTime = Number(sessionStorage.getItem("lastPopupTime"))), p - this.lastPopupTime < this.timeLag)
        return;
      sessionStorage.setItem("lastPopupTime", p.toString());
      let i = await fetch("https://www.sportstech.de/checkout/cart");
      i = await i.text();
      const _ = new DOMParser().parseFromString(i, "text/html").querySelectorAll(".checkout-product-table .line-item-product");
      if (_.length !== 0) {
        e === "differentUserCategories" && (t(".new-popup-backdrop").classList.contains("first_order_discount") && t(".new-popup-backdrop").classList.remove("first_order_discount"), t(".new-popup-backdrop").classList.contains("sales_offer") && t(".new-popup-backdrop").classList.remove("sales_offer"), t(".new-popup-backdrop").classList.contains("categories_product") && t(".new-popup-backdrop").classList.remove("categories_product"), _.length > 1 ? t(".new-popup-backdrop").classList.add("large_popup") : t(".new-popup-backdrop").classList.contains("large_popup") && t(".new-popup-backdrop").classList.remove("large_popup"), Number(localStorage.getItem("session")) > 1 ? localStorage.getItem("checkOutNowSecond") ? (t(".new-popup-backdrop").classList.contains("check_out_now") && t(".new-popup-backdrop").classList.remove("check_out_now"), t(".new-popup-backdrop").classList.contains("check_out_now_second") && t(".new-popup-backdrop").classList.remove("check_out_now_second"), t(".new-popup-backdrop").classList.add("check_out_now_third"), this.handleShowPopup(M, "returningUsers", n, "checkOutNowThird")) : (t(".new-popup-backdrop").classList.contains("check_out_now") && t(".new-popup-backdrop").classList.remove("check_out_now"), t(".new-popup-backdrop").classList.contains("check_out_now_third") && t(".new-popup-backdrop").classList.remove("check_out_now_third"), t(".new-popup-backdrop").classList.add("check_out_now_second"), this.handleShowPopup(B, "returningUsers", n, "checkOutNowSecond"), localStorage.setItem("checkOutNowSecond", "yes")) : (t(".new-popup-backdrop").classList.contains("check_out_now_second") && t(".new-popup-backdrop").classList.remove("check_out_now_second"), t(".new-popup-backdrop").classList.contains("check_out_now_third") && t(".new-popup-backdrop").classList.remove("check_out_now_third"), console.log("!!!!!!!!!!!!!!!!!!!!!!"), t(".new-popup-backdrop").classList.add("check_out_now"), this.handleShowPopup(O, "checkOutNow", n, "checkOutNow")));
        const u = await this.getCartCheckout();
        console.log(u, "ratingArr"), _.forEach((l) => {
          var b, k, v, y, C;
          let V = ((b = l.querySelector(".line-item-label")) == null ? void 0 : b.getAttribute("href")) ?? "", A = ((k = l.querySelector(".line-item-img")) == null ? void 0 : k.getAttribute("srcset")) ?? "", m = ((v = l.querySelector(".line-item-label")) == null ? void 0 : v.textContent) ?? "", K = ((y = l.querySelector(".line-item-details-characteristics-option")) == null ? void 0 : y.textContent) ?? "", D = ((C = l.querySelector(".line-item-total-price-value")) == null ? void 0 : C.textContent) ?? "", g;
          u.forEach((w) => {
            var S;
            ((S = w == null ? void 0 : w.titleProduct) == null ? void 0 : S.trim().toLocaleLowerCase()) === m.trim().toLocaleLowerCase() && (g = w.numRatings);
          }), h(".products_list").then((w) => {
            t(".products_list").insertAdjacentHTML("beforeend", $(V, A, m, K, D, g));
          });
        });
      } else
        t(".new-popup-backdrop").classList.contains("check_out_now") && t(".new-popup-backdrop").classList.remove("check_out_now"), t(".new-popup-backdrop").classList.contains("check_out_now_second") && t(".new-popup-backdrop").classList.remove("check_out_now_second"), t(".new-popup-backdrop").classList.contains("check_out_now_third") && t(".new-popup-backdrop").classList.remove("check_out_now_third"), t(".new-popup-backdrop").classList.contains("large_popup") && t(".new-popup-backdrop").classList.remove("large_popup"), t(".new-popup-backdrop").classList.contains("categories_product") && t(".new-popup-backdrop").classList.remove("categories_product"), t(".new-popup-backdrop").classList.contains("sales_offer") && t(".new-popup-backdrop").classList.remove("sales_offer"), t(".new-popup-backdrop").classList.contains("first_order_discount") && t(".new-popup-backdrop").classList.remove("first_order_discount"), e === "differentUserCategories" && (Number(localStorage.getItem("session")) > 1 ? (t(".new-popup-backdrop").classList.add("categories_product"), this.handleShowPopup(z, "returningUsers", n, "categoriesProduct")) : (t(".new-popup-backdrop").classList.add("sales_offer"), this.handleShowPopup(P, "salesOffer", n, "salesOffer")));
    }
    isPopupOpen() {
      var e;
      return ((e = t(".new-popup__content")) == null ? void 0 : e.children.length) > 0;
    }
    startCountdown() {
      let e = 900;
      const n = setInterval(() => {
        e--;
        const p = Math.floor(e / 60), i = e % 60, o = t(".minutes_tens"), s = t(".minutes_ones"), _ = t(".seconds_tens"), u = t(".seconds_ones");
        o && (o.textContent = Math.floor(p / 10)), s && (s.textContent = p % 10), _ && (_.textContent = Math.floor(i / 10)), u && (u.textContent = i % 10), e <= 0 && clearInterval(n);
      }, 1e3);
    }
    createPopup() {
      console.log("createPopup"), t(".new-popup-backdrop") || t("body").insertAdjacentHTML("afterbegin", H);
    }
    handleShowPopup(e, n, p, i) {
      if (console.log("handleShowPopup", p, n), sessionStorage.getItem(n) && n !== "firstOrderDiscountClick")
        return;
      const s = t("body"), _ = t(".new-popup-backdrop"), u = t(".new-popup .new-popup__content");
      switch (_.classList.contains("is-hidden") && _.classList.remove("is-hidden"), s.style.overflow = "hidden", u.innerHTML = e, sessionStorage.setItem(n, "yes"), i) {
        case "firstOrderDiscount":
          r(
            "exp_exit_intent_popup_section_01",
            "Section",
            "Visibility",
            "Erhalten Sie 5% Rabatt & kostenlose Lieferung!"
          );
          break;
        case "categoriesProduct":
          r(
            "exp_exit_intent_popup_section_04",
            "Section",
            "Visibility",
            "Entdecken Sie unsere besten Produkte Step 2"
          );
          break;
        case "salesOffer":
          r(
            "exp_exit_intent_popup_section_03",
            "Section",
            "Visibility",
            "Entdecken Sie unsere besten Produkte Step 1"
          );
          break;
        case "checkOutNow":
          r(
            "exp_exit_intent_popup_section_05",
            "Section",
            "Visibility",
            "Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1"
          );
          break;
        case "checkOutNowSecond":
          r(
            "exp_exit_intent_popup_section_06",
            "Section",
            "Visibility",
            "Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2"
          );
          break;
        case "checkOutNowThird":
          r("exp_exit_intent_popup_section_07", "Section", "Visibility", "Es gehört fast Ihnen!");
          break;
      }
      h("#counter").then((l) => {
        this.startCountdown();
      }), this.handleClosePopup();
    }
    handleClosePopup() {
      const e = t("body"), n = t(".new-popup-backdrop");
      t(".new-popup").querySelectorAll('[data-popup="close"]').forEach((o) => {
        o.addEventListener("click", (s) => {
          s.currentTarget.getAttribute("data-test") || (s.currentTarget.matches(".no_thanks_btn") && (r(
            "exp_exit_intent_popup_button_03",
            "Nein, danke",
            "Button",
            "Erhalten Sie 5% Rabatt & kostenlose Lieferung!"
          ), this.handlerCloseKlaviyo()), s.currentTarget.matches(".continue_shopping_btn") && r("exp_exit_intent_popup_button_06", "Weiter einkaufen", "Button", "Sie stehen auf der Liste"), s.currentTarget.closest(".first_order_discount") && s.currentTarget.matches(".new-popup__close") && !s.currentTarget.closest(".first_order_discount").querySelector(".first_var").classList.contains("is_hidden") && (r(
            "exp_exit_intent_popup_button_01",
            "Close",
            "Button",
            "Erhalten Sie 5% Rabatt & kostenlose Lieferung!"
          ), this.handlerCloseKlaviyo()), s.currentTarget.closest(".first_order_discount") && s.currentTarget.matches(".new-popup__close") && !s.currentTarget.closest(".first_order_discount").querySelector(".second_var").classList.contains("is_hidden") && r("exp_exit_intent_popup_button_04", "Close", "Button", "Sie stehen auf der Liste"), s.currentTarget.closest(".categories_product") && r(
            "exp_exit_intent_popup_button_09",
            "Close",
            "Button",
            "Entdecken Sie unsere besten Produkte Step 2"
          ), s.currentTarget.closest(".sales_offer") && r(
            "exp_exit_intent_popup_button_07",
            "Close",
            "Button",
            "Entdecken Sie unsere besten Produkte Step 1"
          ), s.currentTarget.closest(".check_out_now") && (r(
            "exp_exit_intent_popup_button_11",
            "Close",
            "Button",
            "Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1"
          ), this.getCoupon("SPORTSTECH5", !1)), s.currentTarget.closest(".check_out_now_second") && (r(
            "exp_exit_intent_popup_button_14",
            "Close",
            "Button",
            "Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2"
          ), this.getCoupon("SPORTSTECH5", !1)), s.currentTarget.closest(".check_out_now_third") && r("exp_exit_intent_popup_button_17", "Close", "Button", "Es gehört fast Ihnen!"), n.classList.add("is-hidden"), e.style.overflow = "initial", setTimeout(() => {
            t(".new-popup__content").innerHTML = "";
          }, 500)), s.currentTarget.setAttribute("data-test", "1"), setTimeout(() => {
            o.getAttribute("data-test") && o.removeAttribute("data-test");
          }, 1e3);
        });
      }), n.addEventListener("click", (o) => {
        o.target.getAttribute("data-test") || o.target.matches(".new-popup-backdrop") && (n.classList.add("is-hidden"), e.style.overflow = "initial", o.currentTarget.matches(".first_order_discount") && !o.currentTarget.querySelector(".first_var").classList.contains("is_hidden") && (r(
          "exp_exit_intent_popup_click_01",
          "Close behind the pop-up area",
          "Click",
          "Erhalten Sie 5% Rabatt & kostenlose Lieferung!"
        ), this.handlerCloseKlaviyo()), o.currentTarget.matches(".first_order_discount") && !o.currentTarget.querySelector(".second_var").classList.contains("is_hidden") && r(
          "exp_exit_intent_popup_click_02",
          "Close behind the pop-up area",
          "Click",
          "Sie stehen auf der Liste"
        ), o.currentTarget.matches(".categories_product") && r(
          "exp_exit_intent_popup_click_04",
          "Close behind the pop-up area",
          "Click",
          "Entdecken Sie unsere besten Produkte Step 2"
        ), o.currentTarget.matches(".sales_offer") && r(
          "exp_exit_intent_popup_click_03",
          "Close behind the pop-up area",
          "Click",
          "Entdecken Sie unsere besten Produkte Step 1"
        ), o.currentTarget.matches(".check_out_now") && (r(
          "exp_exit_intent_popup_click_05",
          "Close behind the pop-up area",
          "Click",
          "Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1"
        ), this.getCoupon("SPORTSTECH5", !1)), o.currentTarget.matches(".check_out_now_second") && (r(
          "exp_exit_intent_popup_click_06",
          "Close behind the pop-up area",
          "Click",
          "Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2"
        ), this.getCoupon("SPORTSTECH5", !1)), o.currentTarget.matches(".check_out_now_third") && r("exp_exit_intent_popup_click_07", "Close behind the pop-up area", "Click", "Es gehört fast Ihnen!"), setTimeout(() => {
          t(".new-popup__content").innerHTML = "";
        }, 500)), o.target.setAttribute("data-test", "1"), setTimeout(() => {
          o.target.getAttribute("data-test") && o.target.removeAttribute("data-test");
        }, 1e3);
      });
    }
    copyDiscount() {
      h("[data-discount]").then((e) => {
        f("[data-discount]").forEach((n) => {
          n.addEventListener("click", (p) => {
            let i = p.currentTarget.dataset.discount;
            navigator.clipboard.writeText(i), p.currentTarget.textContent = "Copied!", n.closest(".first_order_discount") && r("exp_exit_intent_popup_button_05", "Code  Welcome5", "Button", "Sie stehen auf der Liste"), n.closest(".check_out_now.first_var") && r(
              "exp_exit_intent_popup_button_12",
              "Code SPORTSTECH5",
              "Button",
              "Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1"
            ), n.closest(".check_out_now_second") && r(
              "exp_exit_intent_popup_button_15",
              "Code PRSNLoffer5",
              "Button",
              "Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2"
            ), setTimeout(() => {
              n.innerHTML = `${c.copyIcon}`;
            }, 600);
          });
        });
      });
    }
    handlerClickBtns() {
      document.addEventListener("click", (e) => {
        e.target.matches(".get_discount_btn") && e.target.closest(".first_order_discount") && (r(
          "exp_exit_intent_popup_button_02",
          "5% Rabatt erhalten",
          "Button",
          "Erhalten Sie 5% Rabatt & kostenlose Lieferung!"
        ), this.validationFormEmail(t("#emailNew"), !0)), e.target.matches(".shop_now_btn") && e.target.closest(".first_var") && (r(
          "exp_exit_intent_popup_button_08",
          " Jetzt einkaufen",
          "Button",
          "Entdecken Sie unsere besten Produkte Step 1"
        ), window.location.href = "https://www.sportstech.de/sale"), e.target.matches(".shop_now_btn") && e.target.closest(".second_var") && (e.target.closest(".bestsellers_item") ? (r(
          "exp_exit_intent_popup_button_10",
          "Bestseller - Jetzt einkaufen",
          "Button",
          "Entdecken Sie unsere besten Produkte Step 2"
        ), window.location.href = "https://www.sportstech.de/sale") : e.target.closest(".bikes_item") ? (r(
          "exp_exit_intent_popup_button_10",
          "Speedbikes und Ergometer -Jetzt einkaufen",
          "Button",
          "Entdecken Sie unsere besten Produkte Step 2"
        ), window.location.href = "https://www.sportstech.de/bikes") : e.target.closest(".equipment_item") && (r(
          "exp_exit_intent_popup_button_10",
          "Ausrüstung - Jetzt einkaufen",
          "Button",
          "Entdecken Sie unsere besten Produkte Step 2"
        ), window.location.href = "https://www.sportstech.de/equipment")), e.target.matches(".check_out_now_btn") && e.target.closest(".first_var") && (r(
          "exp_exit_intent_popup_button_13",
          "Jetzt zur Kasse",
          "Button",
          "Jetzt zur Kasse gehen und  5% Rabatt auf Ihre erste Bestellung erhalten Step 1"
        ), this.getCoupon("SPORTSTECH5")), e.target.matches(".complete_my_order_now_btn") && e.target.closest(".second_var") && e.target.closest(".check_out_now") && (r(
          "exp_exit_intent_popup_button_16",
          "Meine Bestellung jetzt abschließen",
          "Button",
          "Jetzt zur Kasse gehen und  5% Rabatt sowie kostenlose Lieferung erhalten Step 2"
        ), this.getCoupon("SPORTSTECH5")), e.target.matches(".complete_my_order_now_btn") && e.target.closest(".third_var") && e.target.closest(".check_out_now") && (r(
          "exp_exit_intent_popup_button_18",
          "Meine Bestellung jetzt abschließen",
          "Button",
          "Es gehört fast Ihnen!"
        ), window.location.href = "/checkout/confirm");
      });
    }
    handlerClickInput() {
      h("#emailNew").then((e) => {
        f("#emailNew").forEach((n) => {
          n.addEventListener("input", (p) => {
            this.validationFormEmail(p.target);
          }), n.addEventListener("keyup", (p) => {
            p.key === "Enter" && this.validationFormEmail(p.target);
          }), n.addEventListener("blur", (p) => {
            r(
              "exp_exit_intent_popup_input_01",
              "5% Rabatt erhalten",
              "Input",
              "Erhalten Sie 5% Rabatt & kostenlose Lieferung!"
            );
          });
        });
      });
    }
    validationFormEmail(e, n = !1) {
      var i;
      let p = t("#emailNew").value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
      if (e.getAttribute("name") === "emailNew")
        if (p === null) {
          t("#edit-email-address-error") || e.insertAdjacentHTML(
            "afterend",
            '<span id="edit-email-address-error" class="error">Please Enter Valid Email Address</span>'
          );
          let o = setInterval(() => {
            t("#edit-email-address-error") && t("#edit-email-address-error").textContent !== "Please Enter Valid Email Address" && (clearInterval(o), t("#edit-email-address-error").textContent = "Please Enter Valid Email Address");
          }, 100);
        } else
          (i = t("#edit-email-address-error")) == null || i.remove();
      if (p !== null && n) {
        let o = setInterval(() => {
          if (t('.klaviyo-form [name="email"]')) {
            clearInterval(o);
            const s = t('.klaviyo-form [name="email"]');
            s.value = e.value, s.dispatchEvent(new Event("input")), setTimeout(() => {
              t(".klaviyo-form button.needsclick.go952291206.kl-private-reset-css-Xuajs1").click(), localStorage.setItem("klaviyoForm", "yes"), setTimeout(() => {
                this.handlerCloseKlaviyo();
              }, 1e3);
            }, 1500);
          }
        }, 100);
        t(".first_order_discount.first_var") && t(".first_order_discount.first_var").classList.add("is_hidden"), t(".first_order_discount.second_var").classList.contains("is_hidden") && t(".first_order_discount.second_var").classList.remove("is_hidden"), r("exp_exit_intent_popup_section_02", "Section", "Visibility", "Sie stehen auf der Liste");
      }
    }
    handlerCloseKlaviyo() {
      var e;
      (e = t(".needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1")) == null || e.click(), setTimeout(() => {
        var n;
        (n = t(".crs_style_klaviyo")) == null || n.remove();
      }, 1600);
    }
    hanlderClickBtnFirtsPopupKlaviyo() {
      let e = this.device === "mobile" ? "button.needsclick.kl-teaser-SP24tu" : "button.needsclick.kl-teaser-SH5AsN";
      h(e).then((n) => {
        t(e).addEventListener("click", (p) => {
          p.preventDefault(), p.stopPropagation(), t(".new-popup-backdrop").classList.add("first_order_discount"), this.handleShowPopup(x, "firstOrderDiscountClick", "click", "firstOrderDiscount");
        });
      });
    }
    observerKlaviyo() {
      let e = this.device === "mobile" ? "button.needsclick.kl-teaser-SP24tu" : "button.needsclick.kl-teaser-SH5AsN";
      new MutationObserver((p) => {
        p.forEach((i) => {
          for (let o of i.removedNodes)
            o instanceof HTMLElement && o.querySelector(".needsclick.kl-private-reset-css-Xuajs1") && this.hanlderClickBtnFirtsPopupKlaviyo();
          for (let o of i.addedNodes)
            o instanceof HTMLElement && o.querySelector(e) && this.hanlderClickBtnFirtsPopupKlaviyo();
        });
      }).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }
    // ______________________________________________________________________________________
    async getCartCheckout() {
      try {
        const n = await (await fetch("https://www.sportstech.de/mm-fp/cart ".trim(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        })).json(), p = n == null ? void 0 : n.lineItems, i = Object.keys(p);
        return await Promise.all(
          i.map(async (s) => {
            const _ = await this.getProductInfo(s);
            return await this.getRating(_.manufacturerNumber, _.titleProduct);
          })
        );
      } catch (e) {
        throw e;
      }
    }
    async getProductInfo(e) {
      var n, p;
      try {
        const i = await fetch(`https://www.sportstech.de/store-api/product/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "sw-access-key": "SWSCSNIXRK51Z1JNSMZIUXHEVW"
          }
        });
        if (!i.ok)
          throw new Error(`Server responded with status ${i.status}`);
        const o = await i.json(), s = (n = o == null ? void 0 : o.product) == null ? void 0 : n.name, _ = (p = o == null ? void 0 : o.product) == null ? void 0 : p.manufacturerNumber;
        return { titleProduct: s, manufacturerNumber: _ };
      } catch (i) {
        throw i;
      }
    }
    async getRating(e, n) {
      try {
        const p = await fetch(
          `https://api.reviews.io/product/rating-batch?sku=${e}&store=www.sportstech.de&lang=de&enableSyndication=true`.trim(),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        if (!p.ok)
          throw new Error(`Server responded with status ${p.status}`);
        const i = await p.json();
        return i.hasOwnProperty("0") ? {
          titleProduct: n,
          numRatings: i[0].num_ratings,
          averageRating: i[0].average_rating
        } : Object.keys(i).reduce((s, _) => (s[_] = {
          titleProduct: n,
          numRatings: i[_].num_ratings,
          averageRating: i[_].average_rating
        }, s), {});
      } catch (p) {
        throw p;
      }
    }
    async getCoupon(e, n = !0) {
      await fetch("https://www.sportstech.de/checkout/promotion/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code: e
        })
      }).then((p) => p).then((p) => {
        p.status === 200 && (console.log(p.status, "getCoupon"), n && (window.location.href = "/checkout/confirm"));
      }).catch((p) => {
        console.error("Error:", p);
      });
    }
  }
  new j(R);
})();
//# sourceMappingURL=index.js.map
