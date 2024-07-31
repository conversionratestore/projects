(function() {
  "use strict";
  const c = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, e = (t) => document.querySelector(t), p = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_2"));
    }, 1e3);
  };
  function i(t) {
    return new Promise((n) => {
      if (document.querySelector(t))
        return n(document.querySelector(t));
      const o = new MutationObserver(() => {
        document.querySelector(t) && (n(document.querySelector(t)), o.disconnect());
      });
      o.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(t) {
    t = t === void 0 ? {} : t;
    let n, o, s, l, x = (t == null ? void 0 : t.delay) || 50;
    function r() {
      n = null, l = 0;
    }
    return r(), function() {
      return o = window.scrollY, n != null && (l = o - n), n = o, clearTimeout(s), s = setTimeout(r, x), l;
    };
  })();
  const a = {
    peopleJoinedIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <g clip-path="url(#clip0_21_592)">
        <path
          d="M14.983 5.46657C16.0927 6.16234 16.8708 7.33972 17.0125 8.7064C17.465 8.91786 17.9673 9.03946 18.4999 9.03946C20.444 9.03946 22.0197 7.46372 22.0197 5.51988C22.0197 3.57574 20.444 2 18.4999 2C16.5743 2.0006 15.0123 3.54818 14.983 5.46657ZM12.677 12.6735C14.6212 12.6735 16.1969 11.0974 16.1969 9.15358C16.1969 7.20973 14.6209 5.634 12.677 5.634C10.7332 5.634 9.15653 7.21003 9.15653 9.15388C9.15653 11.0977 10.7332 12.6735 12.677 12.6735ZM14.1701 12.9134H11.1833C8.69828 12.9134 6.67656 14.9354 6.67656 17.4204V21.073L6.68585 21.1302L6.93744 21.209C9.30899 21.95 11.3693 22.1971 13.0652 22.1971C16.3775 22.1971 18.2974 21.2527 18.4157 21.1925L18.6508 21.0736H18.676V17.4204C18.6769 14.9354 16.6551 12.9134 14.1701 12.9134ZM19.9935 9.27967H17.0298C16.9978 10.4654 16.4916 11.5332 15.691 12.3012C17.8999 12.958 19.5161 15.0064 19.5161 17.4258V18.5514C22.4423 18.4442 24.1286 17.6148 24.2397 17.5591L24.4748 17.4399H24.5V13.7861C24.5 11.3014 22.4783 9.27967 19.9935 9.27967ZM6.50075 9.04006C7.18933 9.04006 7.82999 8.83909 8.37271 8.49674C8.54523 7.37147 9.14845 6.38817 10.0101 5.71846C10.0137 5.65257 10.02 5.58727 10.02 5.52078C10.02 3.57664 8.44399 2.0009 6.50075 2.0009C4.55631 2.0009 2.98087 3.57664 2.98087 5.52078C2.98087 7.46402 4.55631 9.04006 6.50075 9.04006ZM9.66181 12.3012C8.86511 11.5371 8.36073 10.475 8.32389 9.29644C8.21397 9.28836 8.10524 9.27967 7.99322 9.27967H5.00678C2.52171 9.27967 0.5 11.3014 0.5 13.7861V17.4393L0.509285 17.4956L0.760876 17.575C2.66338 18.1689 4.36133 18.4427 5.83613 18.5289V17.4258C5.83673 15.0064 7.4523 12.9586 9.66181 12.3012Z"
          fill="#4A567A"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_592">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    guaranteeIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path
        d="M16.4325 2.85454C12.4601 2.85454 9.05216 0.182471 9.01644 0.153893C8.89031 0.0542196 8.73424 0 8.57348 0C8.41271 0 8.25665 0.0542196 8.13051 0.153893C8.09479 0.182471 4.70112 2.85454 0.714456 2.85454C0.524971 2.85454 0.343246 2.92981 0.20926 3.0638C0.075273 3.19778 0 3.37951 0 3.56899V9.9991C0 14.7931 1.93618 17.1437 8.28055 19.9372C8.37266 19.9786 8.47249 20 8.57348 20C8.67446 20 8.7743 19.9786 8.8664 19.9372C15.2108 17.1437 17.147 14.7931 17.147 9.9991V3.56899C17.147 3.37951 17.0717 3.19778 16.9377 3.0638C16.8037 2.92981 16.622 2.85454 16.4325 2.85454ZM8.57348 15.7148C7.44303 15.7148 6.33797 15.3795 5.39803 14.7515C4.4581 14.1234 3.72551 13.2308 3.2929 12.1864C2.8603 11.142 2.74711 9.99276 2.96765 8.88403C3.18819 7.77531 3.73255 6.75687 4.5319 5.95753C5.33125 5.15818 6.34968 4.61381 7.45841 4.39328C8.56714 4.17274 9.71636 4.28592 10.7608 4.71853C11.8052 5.15113 12.6978 5.88372 13.3259 6.82366C13.9539 7.76359 14.2891 8.86865 14.2891 9.9991C14.2891 11.515 13.6869 12.9688 12.6151 14.0407C11.5432 15.1126 10.0894 15.7148 8.57348 15.7148Z"
        fill="#4A567A"
      />
      <path
        d="M10.2097 8.06339L7.85918 10.4211L6.93753 9.4923C6.87092 9.42568 6.79184 9.37284 6.7048 9.33679C6.61776 9.30074 6.52448 9.28218 6.43027 9.28218C6.33606 9.28218 6.24278 9.30074 6.15574 9.33679C6.0687 9.37284 5.98962 9.42568 5.92301 9.4923C5.85639 9.55891 5.80355 9.638 5.7675 9.72503C5.73145 9.81207 5.71289 9.90536 5.71289 9.99956C5.71289 10.0938 5.73145 10.1871 5.7675 10.2741C5.80355 10.3611 5.85639 10.4402 5.92301 10.5068L7.35192 11.9357C7.41834 12.0027 7.49736 12.0559 7.58442 12.0921C7.67148 12.1284 7.76487 12.1471 7.85918 12.1471C7.9535 12.1471 8.04688 12.1284 8.13395 12.0921C8.22101 12.0559 8.30003 12.0027 8.36645 11.9357L11.2243 9.07792C11.2909 9.0113 11.3437 8.93222 11.3798 8.84518C11.4158 8.75814 11.4344 8.66486 11.4344 8.57065C11.4344 8.47644 11.4158 8.38316 11.3798 8.29612C11.3437 8.20908 11.2909 8.13 11.2243 8.06339C11.1577 7.99677 11.0786 7.94393 10.9915 7.90788C10.9045 7.87183 10.8112 7.85327 10.717 7.85327C10.6228 7.85327 10.5295 7.87183 10.4425 7.90788C10.3554 7.94393 10.2764 7.99677 10.2097 8.06339Z"
        fill="#4A567A"
      />
    </svg>
  `
    ),
    arrowIcon: (
      /* HTML */
      `
    <svg class="arrow_icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M9.93241 12.5106L9.933 12.51L12.8351 9.60796L13.6886 8.75441H12.4815H1.02729C0.862407 8.75441 0.747411 8.70402 0.648388 8.60499C0.549427 8.50603 0.499617 8.39175 0.500004 8.2283V8.22712C0.500004 8.06224 0.550393 7.94724 0.649415 7.84822C0.748376 7.74926 0.862656 7.69945 1.02611 7.69983H1.02729H12.4815H13.6886L12.8351 6.84628L9.90732 3.91851C9.79277 3.80396 9.74558 3.68586 9.74558 3.53961C9.74558 3.39342 9.7927 3.27597 9.90673 3.16233L9.90732 3.16174C10.0219 3.04719 10.14 3 10.2862 3C10.4324 3 10.5499 3.04713 10.6635 3.16115L10.6641 3.16174L15.3639 7.86157C15.4219 7.91958 15.4509 7.96977 15.4658 8.01125C15.4877 8.07196 15.5004 8.14179 15.5 8.22462V8.22712C15.5 8.31071 15.487 8.38142 15.4648 8.44299C15.4496 8.48515 15.4206 8.5355 15.3633 8.59325C15.3631 8.59345 15.3629 8.59365 15.3627 8.59385L10.6384 13.3182C10.5498 13.4067 10.4445 13.4542 10.2862 13.4542C10.1411 13.4542 10.0226 13.4073 9.90702 13.2922C9.79924 13.1843 9.75336 13.0692 9.75771 12.9154C9.76231 12.7522 9.81698 12.6257 9.93241 12.5106Z"
        fill="#121620"
        stroke="white"
      />
    </svg>
  `
    ),
    proceedToFindOutIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
      <path
        d="M5.94736 18.5214C5.48827 18.5214 5.06077 18.3155 4.7746 17.9566L3.76998 16.6969L2.8861 16.2712L0.578403 20.9127C0.462716 21.1455 0.475747 21.4216 0.612903 21.6424C0.749731 21.8627 0.990715 21.9966 1.24998 21.9966H1.25167L3.39226 21.9918L4.68043 23.7014C4.82288 23.8904 5.04521 24.0001 5.2793 24C5.30227 24 5.32533 23.999 5.34844 23.9968C5.60728 23.9729 5.83528 23.8166 5.95097 23.5839L8.29228 18.8748L7.55859 18.5214H5.94736Z"
        fill="#4A567A"
      />
      <path
        d="M18.744 20.9127L16.4363 16.2712L15.5524 16.6969L14.5478 17.9567C14.2616 18.3156 13.8342 18.5214 13.3751 18.5214H11.7638L11.0301 18.8748L13.3714 23.5839C13.4871 23.8166 13.7151 23.9729 13.9739 23.9968C13.997 23.9989 14.0201 24 14.0431 24C14.2771 24 14.4995 23.8904 14.6419 23.7014L15.9301 21.9918L18.0707 21.9966H18.0724C18.3317 21.9966 18.5726 21.8627 18.7095 21.6424C18.8466 21.4216 18.8597 21.1455 18.744 20.9127Z"
        fill="#4A567A"
      />
      <path
        d="M13.3751 17.7714C13.6034 17.7714 13.8192 17.6675 13.9615 17.489L15.0728 16.0954L16.6788 15.322C16.8844 15.223 17.0338 15.0357 17.0846 14.8132L17.4812 13.0754L18.5926 11.6818C18.7349 11.5034 18.7882 11.2699 18.7374 11.0473L18.3408 9.30959L18.7374 7.5718C18.7882 7.34924 18.7349 7.11575 18.5926 6.93725L17.4812 5.54371L17.0846 3.80591C17.0338 3.5834 16.8844 3.39613 16.6788 3.29709L15.0728 2.5237L13.9615 1.13011C13.8192 0.951654 13.6034 0.847733 13.3751 0.847733H11.5927L9.98668 0.0742499C9.781 -0.02475 9.54151 -0.02475 9.33583 0.0742499L7.72989 0.847639H5.94743C5.71919 0.847639 5.50333 0.951561 5.36107 1.13001L4.24971 2.5236L2.64378 3.29699C2.43814 3.39604 2.28879 3.58331 2.23798 3.80582L1.84132 5.54361L0.729967 6.93716C0.587655 7.11561 0.534358 7.34914 0.585171 7.5717L0.981779 9.3095L0.585171 11.0472C0.534405 11.2698 0.587655 11.5033 0.729967 11.6817L1.84132 13.0753L2.23798 14.8131C2.28875 15.0356 2.43814 15.2229 2.64378 15.322L4.24971 16.0953L5.36107 17.4889C5.50338 17.6674 5.71919 17.7713 5.94743 17.7713H7.72989L9.33583 18.5447C9.43867 18.5942 9.54995 18.6189 9.66123 18.6189C9.77251 18.6189 9.88384 18.5942 9.98664 18.5447L11.5926 17.7713L13.3751 17.7714Z"
        fill="#4A567A"
      />
      <path
        d="M9.66124 3.49707C6.45622 3.49707 3.84875 6.10453 3.84875 9.30956C3.84875 12.5146 6.45622 15.122 9.66124 15.122C12.8663 15.122 15.4737 12.5146 15.4737 9.30956C15.4737 6.10453 12.8663 3.49707 9.66124 3.49707Z"
        fill="#4A567A"
      />
      <path
        d="M12.0017 6.89354L9.12589 9.77809L7.9983 8.64175C7.9168 8.56025 7.82004 8.4956 7.71356 8.4515C7.60707 8.40739 7.49294 8.38469 7.37768 8.38469C7.26242 8.38469 7.14829 8.40739 7.04181 8.4515C6.93532 8.4956 6.83857 8.56025 6.75707 8.64175C6.67557 8.72325 6.61092 8.82001 6.56681 8.92649C6.5227 9.03298 6.5 9.14711 6.5 9.26237C6.5 9.37763 6.5227 9.49176 6.56681 9.59824C6.61092 9.70473 6.67557 9.80148 6.75707 9.88298L8.50528 11.6312C8.58654 11.7131 8.68322 11.7782 8.78973 11.8225C8.89625 11.8669 9.0105 11.8898 9.12589 11.8898C9.24129 11.8898 9.35554 11.8669 9.46205 11.8225C9.56857 11.7782 9.66525 11.7131 9.74651 11.6312L13.2429 8.13477C13.3244 8.05327 13.3891 7.95652 13.4332 7.85003C13.4773 7.74355 13.5 7.62942 13.5 7.51416C13.5 7.3989 13.4773 7.28477 13.4332 7.17828C13.3891 7.0718 13.3244 6.97504 13.2429 6.89354C13.1614 6.81204 13.0647 6.74739 12.9582 6.70328C12.8517 6.65918 12.7376 6.63647 12.6223 6.63647C12.5071 6.63647 12.3929 6.65918 12.2864 6.70328C12.18 6.74739 12.0832 6.81204 12.0017 6.89354Z"
        fill="white"
      />
    </svg>
  `
    )
  }, d = (t, n) => (
    /* HTML */
    `
    <div class="email_block">
      <span class="img_box">${n}</span>
      <span class="email_txt">${t}</span>
    </div>
  `
  ), h = (
    /* HTML */
    `
  <div class="title_block">
    <h2>Get Your Personal Palm Reading Report</h2>
    <p>
      Choose Your Trial Price and <br />
      <b>Get Full Access to Unlimited Chats</b> <br />
      With Your Personal Palm Reader
    </p>
  </div>
`
  ), f = (t) => (
    /* HTML */
    `
    <div class="note_block">
      <p>
        <span class="accent_color">Note:</span> While it costs us <b class="price_txt">${t}</b> to compensate
        Hint employees & palmreaders for the trial, we want to make this valuable experience accessible to you.
      </p>
    </div>
  `
  ), _ = (
    /* HTML */
    `
  <div class="people_joined_block">
    <span class="svg_block">${a.peopleJoinedIcon}</span>
    <span class="txt_block"><b>776</b> people <b>joined</b> today</span>
  </div>
`
  ), m = (
    /* HTML */
    `
  <div class="guarantee_block">
    <span class="svg_block">${a.guaranteeIcon}</span>
    <span class="txt_block">100% Money-back Guarantee</span>
  </div>
`
  ), C = (
    /* HTML */
    `
  <div class="proceed_to_find_out_block">
    <span class="svg_block">${a.proceedToFindOutIcon}</span>
    <span class="txt_block"
      >You won't be charged right now. <br />
      Proceed to find out more.</span
    >
  </div>
`
  ), b = `header > header {
  padding: 12px 16px !important;
  background: #eff1f5 !important;
}
header > header > button.group {
  width: 16px !important;
  height: 16px !important;
  min-width: 16px;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
}
header > header > button.group > img {
  width: 100%;
  height: 100%;
}
header > header > img {
  width: 51px;
  height: 24px;
}

main > div {
  margin: 0 !important;
  align-items: normal !important;
}
main > div > div {
  gap: unset !important;
}
main p.font-semibold,
main p.font-semibold + p,
main p.font-semibold + p + img,
main p.font-semibold + p + svg,
main .styles_subscriptionText__1MH_S {
  display: none;
}
main button.z-0 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}
main .styles_plans__kjWfh {
  justify-content: space-between;
  margin: 0;
  gap: 12px;
}
main .styles_plans__kjWfh .styles_plan__w4qlH {
  max-width: calc((100% - 36px) / 4);
  width: 100%;
  border-radius: 8px;
  border: 2px solid #d1d5db;
  margin: 0;
}
main .styles_plans__kjWfh .styles_plan__w4qlH h3 {
  color: #121620;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
main .styles_plans__kjWfh .styles_plan__w4qlH.styles_activePlan__3pihe, main .styles_plans__kjWfh .styles_plan__w4qlH.\\!border-themePrimary {
  background: rgba(59, 130, 246, 0.96);
  border: 2px solid rgba(59, 130, 246, 0.96);
  border-color: rgba(59, 130, 246, 0.96) !important;
}
main .styles_plans__kjWfh .styles_plan__w4qlH.styles_activePlan__3pihe h3, main .styles_plans__kjWfh .styles_plan__w4qlH.\\!border-themePrimary h3 {
  color: #fff;
}
main .styles_plans__kjWfh > :last-child::before {
  position: absolute;
  content: "Most popular";
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #066fde;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  width: -moz-max-content;
  width: max-content;
}
main .styles_plans__kjWfh > :last-child::after {
  background: url(https://conversionratestore.github.io/projects/hint/img/line_element.svg) no-repeat !important;
  width: 78px;
  height: 5px;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
}

.accent_color {
  color: #066fde;
  font-weight: 700;
}

.email_block {
  display: flex;
  align-items: center !important;
  justify-content: center;
  gap: 8px;
  padding: 4px 10px;
  background: #dee5f9;
  width: 100%;
}
.email_block .img_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 3px;
  border-radius: 100px;
  background: #9eaad5;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
}
.email_block .email_txt {
  color: #4a567a;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
}

.title_block {
  margin: 32px 0 40px;
}
.title_block h2 {
  max-width: 300px;
  color: #121620;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0 auto 16px;
}
.title_block p {
  color: #4a567a;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}

.people_joined_block,
.guarantee_block,
.proceed_to_find_out_block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.people_joined_block .svg_block,
.guarantee_block .svg_block,
.proceed_to_find_out_block .svg_block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.people_joined_block .txt_block,
.guarantee_block .txt_block,
.proceed_to_find_out_block .txt_block {
  color: #4a567a;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.people_joined_block .txt_block b,
.guarantee_block .txt_block b,
.proceed_to_find_out_block .txt_block b {
  font-weight: 700;
}

.people_joined_block {
  margin-bottom: 16px;
}

.guarantee_block {
  margin-top: 16px;
  gap: 8px;
}

.proceed_to_find_out_block {
  margin-bottom: 16px;
}
.proceed_to_find_out_block .txt_block {
  font-weight: 400;
}

.note_block {
  border-radius: 8px;
  border: 1px solid #dee5f9;
  background: #fff;
  padding: 16px;
  margin: 24px 0;
}
.note_block p {
  color: #4a567a;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
}/*# sourceMappingURL=main.css.map */`, u = window.innerWidth < 768 ? "mobile" : "desktop";
  class g {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      c({ name: "select Trial Price Page Improvements V2", dev: "SKh" }), this.observeMain(), window.location.pathname.match("subscription-pla") ? (p("exp_select_trial"), this.handleSubscriptionPage()) : window.location.pathname.match("email") ? (this.removeCustomStyles(), this.handleClickBtnContinueForEmail()) : this.removeCustomStyles();
    }
    // ___________________________________________________________________________________________________________
    // window.location.pathname.match('email')
    handleClickBtnContinueForEmail() {
      i("button.z-0").then(() => {
        e("button.z-0").addEventListener("click", () => {
          var o;
          const n = (o = e('input[name="email"]')) == null ? void 0 : o.value;
          localStorage.setItem("emailValue", n);
        });
      });
    }
    // ___________________________________________________________________________________________________________
    // window.location.pathname.match('subscription-pla')
    handleSubscriptionPage() {
      e(".crs_inter") || document.head.insertAdjacentHTML(
        "afterbegin",
        '<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), e(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${b}</style>`), this.renderTitleBlock(), this.renderEmailBlock(), this.renderNoteBlock(), this.renderProceedToFindOutBlock(), this.renderGuaranteeBlock(), this.replaceTxtBtnGetStarted();
    }
    renderTitleBlock() {
      i(".styles_plans__kjWfh").then(() => {
        e(".title_block") || e(".styles_plans__kjWfh").insertAdjacentHTML("beforebegin", h);
      });
    }
    renderEmailBlock() {
      i("main").then(() => {
        if (!e(".email_block") && localStorage.getItem("emailValue")) {
          const n = localStorage.getItem("emailValue");
          if (n !== null) {
            const o = n.charAt(0).toUpperCase();
            e("main").insertAdjacentHTML("afterbegin", d(n, o));
          }
        }
      });
    }
    renderNoteBlock() {
      i(".styles_plans__kjWfh").then(() => {
        setTimeout(() => {
          const n = e(".styles_plans__kjWfh>:last-child").textContent.trim();
          e(".note_block") || e(".styles_plans__kjWfh").insertAdjacentHTML("afterend", f(n));
        }, 700);
      });
    }
    renderPeopleJoinedBlock() {
      i("button.z-0").then(() => {
        e(".people_joined_block") || e("button.z-0").insertAdjacentHTML("beforebegin", _);
      });
    }
    renderProceedToFindOutBlock() {
      i("button.z-0").then(() => {
        e(".proceed_to_find_out_block") || e("button.z-0").insertAdjacentHTML("beforebegin", C);
      });
    }
    renderGuaranteeBlock() {
      i("button.z-0").then(() => {
        e(".guarantee_block") || e("button.z-0").insertAdjacentHTML("afterend", m);
      });
    }
    replaceTxtBtnGetStarted() {
      i("button.z-0").then(() => {
        e("button.z-0").textContent.match("Get Started") || (e("button.z-0").innerHTML = `Get Started ${a.arrowIcon}`);
      });
    }
    handleVisibility() {
    }
    // ___________________________________________________________________________________________________________
    observeMain() {
      new MutationObserver((o) => {
        for (let s of o)
          for (let l of s.removedNodes)
            l instanceof HTMLElement && l.tagName === "MAIN" && (console.log(l), window.location.pathname.match("subscription-pla") ? this.handleSubscriptionPage() : window.location.pathname.match("email") ? (this.removeCustomStyles(), this.handleClickBtnContinueForEmail()) : this.removeCustomStyles());
      }).observe(e("body"), { childList: !0, subtree: !0 });
    }
    removeCustomStyles() {
      var n, o;
      (n = e(".crs_style")) == null || n.remove(), (o = e(".crs_inter")) == null || o.remove();
    }
  }
  new g(u);
})();
//# sourceMappingURL=index.js.map
