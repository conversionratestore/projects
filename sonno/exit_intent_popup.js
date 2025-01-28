(function() {
  "use strict";
  const o = (p, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: p,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), console.dir(`Event: ${p} | ${e} | ${t} | ${n}`);
  }, k = ({ name: p, dev: e }) => {
    console.log(
      `%c EXP: ${p} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, x = (p) => document.querySelectorAll(p), i = (p) => document.querySelector(p), C = (p, e = "variant_1") => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", p, e), console.log("set", p, e));
    }, 1e3);
  };
  function w(p) {
    return new Promise((e) => {
      if (document.querySelector(p))
        return e(document.querySelector(p));
      const t = new MutationObserver(() => {
        document.querySelector(p) && (e(document.querySelector(p)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const P = function(p) {
    p = p === void 0 ? {} : p;
    let e, t, n, r, s = (p == null ? void 0 : p.delay) || 50;
    function c() {
      e = null, r = 0;
    }
    return c(), function() {
      return t = window.scrollY, e != null && (r = t - e), e = t, clearTimeout(n), n = setTimeout(c, s), r;
    };
  }(), L = (p) => {
    var t;
    const e = `; ${document.cookie}`;
    return e.includes(`; ${p}=`) ? (t = e.split(`; ${p}=`).pop()) == null ? void 0 : t.split(";").shift() : (console.log("No cookie"), null);
  }, l = "https://conversionratestore.github.io/projects/sonno/img/", _ = {
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
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
      <path
        d="M18.1862 16.4371H15.8962H18.1862ZM18.1862 16.4371C18.6667 16.4353 19.127 16.2436 19.4667 15.9038C19.8065 15.5641 19.9982 15.1038 20 14.6233L18.1862 16.4371ZM18.1863 2.54094H18.1862L7.96769 2.54094L7.9675 2.54094C7.47381 2.54282 7.00087 2.73977 6.65177 3.08886C6.30267 3.43796 6.10572 3.9109 6.10385 4.4046V4.40479V6.69479H3.81385L3.81366 6.69479C3.31996 6.69666 2.84702 6.89361 2.49792 7.24271C2.14882 7.59181 1.95187 8.06475 1.95 8.55844V8.55863L1.95 18.7771L1.95 18.7773C1.95187 19.271 2.14882 19.7439 2.49792 20.093C2.84702 20.4421 3.31996 20.6391 3.81366 20.6409H3.81385L14.0323 20.6409L14.0325 20.6409C14.5262 20.6391 14.9991 20.4421 15.3482 20.093C15.6973 19.7439 15.8943 19.271 15.8962 18.7773V18.7771V16.4871H18.1862L18.1863 16.4871C18.68 16.4852 19.153 16.2883 19.5021 15.9392C19.8512 15.5901 20.0481 15.1171 20.05 14.6234V14.6233L20.05 4.40479L20.05 4.4046C20.0481 3.9109 19.8512 3.43796 19.5021 3.08886C19.153 2.73977 18.68 2.54282 18.1863 2.54094ZM15.8462 18.7771V16.4871V18.7771ZM14.0323 6.69479H7.58846V4.40479C7.58846 4.30421 7.62842 4.20775 7.69954 4.13663C7.77066 4.06551 7.86711 4.02556 7.96769 4.02556H18.1862C18.2867 4.02556 18.3832 4.06551 18.4543 4.13663C18.5254 4.20775 18.5654 4.30421 18.5654 4.40479V14.6233C18.5654 14.7238 18.5254 14.8203 18.4543 14.8914C18.3832 14.9625 18.2867 15.0025 18.1862 15.0025H15.8962V8.55863L15.8962 8.55844C15.8943 8.06475 15.6973 7.59181 15.3482 7.24271C14.9991 6.89361 14.5262 6.69666 14.0325 6.69479H14.0323ZM14.4115 18.7771C14.4115 18.8777 14.3716 18.9741 14.3005 19.0453C14.2293 19.1164 14.1329 19.1563 14.0323 19.1563H3.81385C3.71327 19.1563 3.61681 19.1164 3.54569 19.0453C3.47457 18.9741 3.43462 18.8777 3.43462 18.7771V8.55863C3.43462 8.45806 3.47457 8.3616 3.54569 8.29048C3.61681 8.21936 3.71327 8.1794 3.81385 8.1794H14.0323C14.1329 8.1794 14.2293 8.21936 14.3005 8.29048C14.3716 8.3616 14.4115 8.45806 14.4115 8.55863V18.7771Z"
        fill="white"
        stroke="white"
        stroke-width="0.1"
      />
    </svg>
  `
    ),
    copyCheeckIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clip-path="url(#clip0_62_5816)">
        <path
          d="M17.5818 2.94198C17.0248 2.38432 16.1205 2.38467 15.5628 2.94198L6.47616 12.029L2.43754 7.99039C1.87988 7.43273 0.975913 7.43273 0.418249 7.99039C-0.139416 8.54806 -0.139416 9.45202 0.418249 10.0097L5.46631 15.0577C5.74496 15.3364 6.11035 15.4761 6.47578 15.4761C6.8412 15.4761 7.20694 15.3368 7.4856 15.0577L17.5818 4.96124C18.1394 4.40396 18.1394 3.49961 17.5818 2.94198Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_62_5816">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
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
    peopleViewingIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <g clip-path="url(#clip0_63_5237)">
        <path
          d="M19.7408 9.89047C19.5651 9.68332 15.3669 4.82446 10.0001 4.82446C4.63315 4.82446 0.435139 9.68332 0.259063 9.89067C-0.0863881 10.2968 -0.0863881 10.8862 0.259266 11.2928C0.435139 11.4999 4.63315 16.3586 10.0001 16.3586C15.3669 16.3586 19.5651 11.4995 19.741 11.2924C20.0864 10.8862 20.0864 10.2968 19.7408 9.89047ZM11.6394 7.74323C12.0003 7.54623 12.5036 7.77227 12.7633 8.2479C13.0231 8.72373 12.941 9.26922 12.5801 9.46622C12.2195 9.66341 11.716 9.43718 11.4561 8.96155C11.1965 8.48571 11.2784 7.94022 11.6394 7.74323ZM10.0001 14.5982C6.25114 14.5982 3.09619 11.7191 2.00419 10.5915C2.7416 9.82995 4.42052 8.27044 6.58725 7.33787C6.16463 7.98084 5.91686 8.74912 5.91686 9.57609C5.91686 11.8312 7.74485 13.6591 9.99992 13.6591C12.255 13.6591 14.0832 11.8312 14.0832 9.57609C14.0832 8.74912 13.8356 7.98084 13.413 7.33787C15.5797 8.27064 17.2584 9.82995 17.9959 10.5915C16.9039 11.7197 13.7489 14.5982 10.0001 14.5982Z"
          fill="#1E3851"
        />
      </g>
      <defs>
        <clipPath id="clip0_63_5237">
          <rect width="20" height="20" fill="white" transform="translate(0 0.591064)" />
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
    starEmptyIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.76826 9.17841L10.695 12.6452L8 10.5813L5.30497 12.6452L6.23174 9.17841L3.87289 7.39375H6.72706L8 3.84769L9.27294 7.39375H12.1271L9.76826 9.17841ZM16 6.09375H10.1875L8 0L5.8125 6.09375H0L4.75 9.6875L3.0625 16L8 12.2188L12.9375 16L11.25 9.6875L16 6.09375Z"
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
      height="45"
      viewBox="0 0 480 45"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M0.00292969 0H479.997V34.0703H38.4248L31.0029 44.0703L23.5811 34.0703H0.00292969V0Z"
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
    ),
    arrowWhiteBtnIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M0.263606 11.774C0.0987767 11.5991 0.0112109 11.4066 0.000908988 11.1966C-0.00939287 10.9867 0.078173 10.803 0.263606 10.6455L5.70299 6.02619L0.232701 1.38067C0.0678711 1.24069 -0.00939287 1.0526 0.000908988 0.816383C0.0112109 0.58017 0.0987767 0.392075 0.263606 0.252097C0.469643 0.0771244 0.691133 -0.0059875 0.928076 0.00276113C1.16502 0.0115098 1.37621 0.0946218 1.56164 0.252097L7.71185 5.47503C7.81487 5.56252 7.88698 5.65 7.92819 5.73748C7.9694 5.82497 7.99 5.92121 7.99 6.02619C7.99 6.13117 7.9694 6.22741 7.92819 6.3149C7.88698 6.40238 7.81487 6.48987 7.71185 6.57735L1.59255 11.774C1.40711 11.9315 1.19077 12.0059 0.943529 11.9971C0.696285 11.9884 0.469643 11.9141 0.263606 11.774Z" fill="white"/>
</svg>
  `,
    exclamationPointIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
  <g clip-path="url(#clip0_63_5309)">
    <path d="M5.50062 8.55788C4.87437 8.55788 4.36393 9.06596 4.36393 9.69221C4.36393 10.3208 4.87202 10.8289 5.50062 10.8289C6.12687 10.8313 6.63494 10.3208 6.63494 9.69457C6.63494 9.69457 6.63494 9.69457 6.63494 9.69221C6.63494 9.06596 6.12687 8.55788 5.50062 8.55788ZM6.0276 0.381257C5.99688 0.378906 5.96616 0.378906 5.93545 0.378906H5.06578C4.47735 0.378906 4 0.85626 4 1.44469C4 1.47541 4.00235 1.50614 4.00472 1.53686L4.43955 6.57044C4.48917 7.15652 5.00435 7.5937 5.59042 7.54407C6.10796 7.49917 6.51915 7.08797 6.56168 6.57044L6.99652 1.53686C7.0485 0.950793 6.61368 0.433255 6.0276 0.381257ZM5.50062 8.55788C4.87437 8.55788 4.36393 9.06596 4.36393 9.69221C4.36393 10.3208 4.87202 10.8289 5.50062 10.8289C6.12687 10.8313 6.63494 10.3208 6.63494 9.69457C6.63494 9.69457 6.63494 9.69457 6.63494 9.69221C6.63494 9.06596 6.12687 8.55788 5.50062 8.55788ZM6.0276 0.381257C5.99688 0.378906 5.96616 0.378906 5.93545 0.378906H5.06578C4.47735 0.378906 4 0.85626 4 1.44469C4 1.47541 4.00235 1.50614 4.00472 1.53686L4.43955 6.57044C4.48917 7.15652 5.00435 7.5937 5.59042 7.54407C6.10796 7.49917 6.51915 7.08797 6.56168 6.57044L6.99652 1.53686C7.0485 0.950793 6.61368 0.433255 6.0276 0.381257ZM6.0276 0.381257C5.99688 0.378906 5.96616 0.378906 5.93545 0.378906H5.06578C4.47735 0.378906 4 0.85626 4 1.44469C4 1.47541 4.00235 1.50614 4.00472 1.53686L4.43955 6.57044C4.48917 7.15652 5.00435 7.5937 5.59042 7.54407C6.10796 7.49917 6.51915 7.08797 6.56168 6.57044L6.99652 1.53686C7.0485 0.950793 6.61368 0.433255 6.0276 0.381257ZM5.50062 8.55788C4.87437 8.55788 4.36393 9.06596 4.36393 9.69221C4.36393 10.3208 4.87202 10.8289 5.50062 10.8289C6.12687 10.8313 6.63494 10.3208 6.63494 9.69457C6.63494 9.69457 6.63494 9.69457 6.63494 9.69221C6.63494 9.06596 6.12687 8.55788 5.50062 8.55788Z" fill="#E00D46"/>
  </g>
  <defs>
    <clipPath id="clip0_63_5309">
      <rect width="11" height="11" fill="white" transform="translate(0 0.103516)"/>
    </clipPath>
  </defs>
</svg>
  `
  }, E = [
    {
      link: "https://sonno.co.uk/collections/divan-beds",
      img: "popup_img_5.webp",
      imgMob: "popup_img_5_mob.webp",
      title: "Divan Beds",
      buttonText: "Shop Now"
    },
    {
      link: "https://sonno.co.uk/collections/ottoman-divan-beds",
      img: "popup_img_6.webp",
      imgMob: "popup_img_6_mob.webp",
      title: "Ottoman Beds",
      buttonText: "Shop Now"
    },
    {
      link: "https://sonno.co.uk/collections/mattress",
      img: "popup_img_7.webp",
      imgMob: "popup_img_7_mob.webp",
      title: "Matrasses",
      buttonText: "Shop Now"
    }
  ], S = (
    /* HTML */
    `
  <div class="first_order_discount first_var">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">
          <span class="accent_color_orange">Get 20% off </span> <br />
          your first order now
        </h2>
        <p class="main_description">
          Subscribe to our newsletter now and receive an exclusive discount on your first order.
        </p>
      </div>
      <div class="body_popup">
        <div class="email_wrapper">
          <label for="emailNew">
            <input type="email" name="emailNew" id="emailNew" placeholder="Your e-mail" />
          </label>
        </div>
        <div class="btn_wrapper">
          <div class="first_order_get_discount_btn main_btn">Get 20% off</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${l}popup_img_1.webp" alt="photo" class="desk_var" />
      <img src="${l}popup_img_1_mob.webp" alt="photo" class="mob_var" />
    </div>
  </div>
  <div class="first_order_discount second_var is_hidden">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">You are on the list!</h2>
        <p class="main_description">
          Your <b>20% first order discount is ready</b> <br />
          (no minimum spend, no exclusions)
        </p>
      </div>
      <div class="body_popup">
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Copy and Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">NY20</span>
            <span data-discount="NY20">Copy ${_.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="first_order_continue_shopping_btn main_btn">Continue Shopping</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${l}popup_img_1.webp" alt="photo" class="desk_var" />
      <img src="${l}popup_img_1_mob.webp" alt="photo" class="mob_var" />
    </div>
  </div>
`
  ), g = (p = !1, e = "", t = "", n = "", r = "", s = "", c = "") => (
    /* HTML */
    `
    ${p ? (
      /* HTML */
      `
          <div class="new_users_w_o_products exit_intent_popup">
            <div class="header_popup">
              <h2 class="main_title">
                You recently viewed. <br />
                Buy now and <span class="accent_color_orange">get 20% off!</span>
              </h2>
            </div>
            <div class="body_popup">
              <a href="${c}" class="item_wrapper">
                <div class="img_wrapper">
                  <img src=${e} alt="photo" />
                </div>
                <div class="item_info" data-viewed="true">
                  <h3>${t}</h3>
                  <div class="price_wrapper">
                    <span class="old_price_txt">${n}</span>
                    <span class="price_txt">${r}</span>
                    <span class="save_txt">Save ${s}</span>
                    <img class="img_label" src="${l}popup_img_9.webp" alt="photo" />
                  </div>
                </div>
              </a>
              <div class="btn_wrapper">
                <p>Discount will be applied on Checkout</p>
                <div class="active_product_shop_now_btn main_btn" data-link="${c}">Shop Now</div>
              </div>
            </div>
          </div>
        `
    ) : (
      /* HTML */
      `
          <div class="new_users_w_o_products exit_intent_popup">
            <div class="header_popup">
              <h2 class="main_title">
                Get an <span class="accent_color_orange">extra 20% off</span> <br />
                all Divan Beds
              </h2>
            </div>
            <div class="body_popup">
              <div class="img_wrapper">
                <img src="${l}popup_img_2.webp" alt="photo" />
              </div>
              <div class="btn_wrapper">
                <p>Discount will be applied on Checkout</p>
                <div class="divan_beds_shop_now_btn main_btn">Shop Now</div>
              </div>
            </div>
          </div>
        `
    )}
  `
  ), I = (
    /* HTML */
    `
  <div class="new_users_with_products exit_intent_popup">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">
          Check out now and get <br />
          <span class="accent_color_orange">20% off</span> your first order
        </h2>
        <p class="main_description">Your cart reserved for:</p>
        <div id="counter">
          <div class="time_block">
            <div class="time_txt minutes_tens">1</div>
            <div class="time_txt minutes_ones">5</div>
            <div class="counter_label">Minutes</div>
          </div>
          <div class="time_separator">:</div>
          <div class="time_block">
            <div class="time_txt seconds_tens">0</div>
            <div class="time_txt seconds_ones">0</div>
            <div class="counter_label">Seconds</div>
          </div>
        </div>
      </div>
      <div class="body_popup">
        <div class="products_wrapper">
          <ul class="products_list"></ul>
          <span class="shadow"></span>
        </div>
        <div class="discount_code_wrapper">
          <p class="discount_code_title">Copy and Enter code at checkout</p>
          <div class="discount_code_container">
            <span class="discount_code_txt">NY20</span>
            <span data-discount="NY20">Copy ${_.copyIcon}</span>
          </div>
        </div>
        <div class="btn_wrapper">
          <div class="new_users_with_products_checkout_btn main_btn">Checkout</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${l}popup_img_3.webp" alt="photo" class="desk_var" />
    </div>
  </div>
`
  ), $ = (
    /* HTML */
    `
  <div class="returning_users_w_o_products exit_intent_popup">
    <div class="header_popup">
      <h2 class="main_title">Explore our best</h2>
      <p class="main_description">Take a closer look at our top picks just for you</p>
    </div>
    <div class="body_popup">
      <ul class="category_list">
        ${E.map((p) => (
      /* HTML */
      `
              <li class="category_item">
                <img src="${l}${window.innerWidth >= 768 ? p.img : p.imgMob}" alt="photo" />
                <div class="info_wrapper">
                  <h3>${p.title}</h3>
                  <a href="${p.link}" class="returning_users_w_o_products_shop_now_btn main_btn"
                    >${p.buttonText} ${_.arrowWhiteBtnIcon}</a
                  >
                </div>
              </li>
            `
    )).join("")}
      </ul>
    </div>
  </div>
`
  ), N = (
    /* HTML */
    `
  <div class="returning_users_with_products exit_intent_popup">
    <div class="info_wrapper">
      <div class="header_popup">
        <h2 class="main_title">It’s almost yours!</h2>
        <p class="main_description">Only one step left:</p>
      </div>
      <div class="body_popup">
        <div class="products_wrapper">
          <ul class="products_list"></ul>
          <span class="shadow"></span>
        </div>
        <div class="btn_wrapper">
          <div class="returning_users_with_products_checkout_btn main_btn">Checkout</div>
        </div>
      </div>
    </div>
    <div class="img_wrapper">
      <img src="${l}popup_img_8.webp" alt="photo" class="desk_var" />
    </div>
  </div>
`
  ), T = (
    /* HTML */
    `
  <div class="new_popup_backdrop is_hidden">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">${_.closeIcon}</button>
      <div class="new_popup_content"></div>
    </div>
  </div>
`
  ), M = (p, e, t, n, r, s, c, a = !1) => {
    const d = Math.floor(Math.random() * 10) + 1, h = Math.floor(Math.random() * 12) + 4;
    return t.includes("Assembly") || t.includes("Removal") ? "" : (
      /* HTML */
      `
    <li class="products_item">
      <div class="product_wrapper">
        ${window.innerWidth < 768 && !a ? (
        /* HTML */
        ` <div class="stock_wrapper">
              ${_.exclamationPointIcon}
              <p>
                We may run out of stock soon.
                <span class="stock_txt"> Only <span class="stock_value">${d}</span> left </span>
              </p>
            </div>`
      ) : ""}
        ${window.innerWidth < 768 && a ? (
        /* HTML */
        `<div class="popular_products">
              ${_.peopleViewingIcon}
              <p><span class="stock_txt">${h} people</span> are watching this product right now</p>
            </div>`
      ) : ""}
        <div class="product_all_info">
          <a class="img_wrapper" href="${p}">
            <img src=${e} alt="photo" />
          </a>
          <div class="item_info">
            ${window.innerWidth >= 768 && !a ? (
        /* HTML */
        ` <div class="stock_wrapper">
                  ${_.exclamationPointIcon}
                  <p>
                    We may run out of stock soon.
                    <span class="stock_txt"> Only <span class="stock_value">${d}</span> left </span>
                  </p>
                </div>`
      ) : ""}
            ${window.innerWidth >= 768 && a ? (
        /* HTML */
        `<div class="popular_products">
                  ${_.peopleViewingIcon}
                  <p><span class="stock_txt">${h} people</span> are watching this product right now</p>
                </div>`
      ) : ""}
            <h3 class="item_title"><a href="${p}">${t}</a></h3>
            ${n ? `<span class="item_descr">${n}</span>` : ""}
            <div class="price_wrapper">
              <span class="old_price_txt">£${r}</span>
              <span class="price_txt">£${s}</span>
              <span class="save_txt">Save £${c}</span>
            </div>
          </div>
        </div>
      </div>
      ${a ? "" : (
        /* HTML */
        `<div class="popular_products">
            ${_.peopleViewingIcon}
            <p>
              <b><span>${h}</span> people are viewing this product—</b>availability isn’t guaranteed.
              Complete your purchase now!
            </p>
          </div>`
      )}
    </li>
  `
    );
  }, z = `.new_popup_backdrop {
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 56, 81, 0.6980392157);
  z-index: 1000000000000;
  transition: all 0.4s ease 0s;
}
.new_popup_backdrop.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.new_popup_backdrop .new_popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 32px);
}
@media (max-width: 768px) {
  .new_popup_backdrop .new_popup {
    max-width: 360px;
  }
}
.new_popup_backdrop .new_popup_close {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 1111px;
  background: #fff;
  z-index: 2;
  transition: all 0.8s ease 0s;
}

@media (max-width: 768px) {
  .desk_var {
    display: none;
  }
}

.mob_var {
  display: none;
}
@media (max-width: 768px) {
  .mob_var {
    display: block;
  }
}

.accent_color_orange {
  color: #f89201;
}

.header_popup {
  margin-bottom: 16px;
}
.header_popup .main_title {
  color: #1e3851;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin: 0 0 12px;
}
@media (max-width: 768px) {
  .header_popup .main_title {
    font-size: 26px;
    line-height: 34px;
  }
}
.header_popup .main_description {
  color: #1e3851;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin: 0;
}
@media (max-width: 768px) {
  .header_popup .main_description {
    font-size: 12px;
    line-height: 14px;
  }
}

.btn_wrapper {
  margin-top: 12px;
}

.main_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background: #f89201;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  cursor: pointer;
}

.discount_code_wrapper {
  margin-top: auto;
}
.discount_code_wrapper .discount_code_title {
  color: #1e3851;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin: 0 0 12px;
}
.discount_code_wrapper .discount_code_container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 4px 4px 4px 18px;
  border-radius: 8px;
  border: 1px dashed #e00d46;
  background: #fcf4e8;
}
.discount_code_wrapper .discount_code_container.copied {
  border-radius: 8px;
  border: 1px dashed #00b67a;
  background: #e8ffea;
}
.discount_code_wrapper .discount_code_container.copied .discount_code_txt {
  color: #00b67a;
}
.discount_code_wrapper .discount_code_container.copied span[data-discount] {
  background: rgba(0, 182, 122, 0.6);
}
.discount_code_wrapper .discount_code_txt {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 6px;
  text-transform: uppercase;
}
@media (max-width: 768px) {
  .discount_code_wrapper .discount_code_txt {
    margin-right: 85px;
  }
}
.discount_code_wrapper span[data-discount] {
  position: absolute;
  height: 44px;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 6px;
  background: #e00d46;
  padding: 4px 12px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
}

.products_wrapper {
  position: relative;
  max-height: 364px;
}
@media (max-width: 768px) {
  .products_wrapper {
    max-height: 359px;
  }
}
.products_wrapper .shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  height: 45px;
  width: 100%;
  background: linear-gradient(180deg, rgba(30, 56, 81, 0) 0%, rgba(30, 56, 81, 0.24) 144.44%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;
}
.products_wrapper .shadow.active {
  opacity: 1;
}
.products_wrapper .products_list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-right: 8px;
  height: 100%;
  overflow: auto;
  padding: 0 0 10px;
}
.products_wrapper .products_list::-webkit-scrollbar {
  width: 4px;
}
.products_wrapper .products_list::-webkit-scrollbar-track {
  border-radius: 0;
  background: transparent;
}
.products_wrapper .products_list::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: #b4c1cf;
}
@media (max-width: 768px) {
  .products_wrapper .products_list {
    gap: 16px;
  }
}
.products_wrapper .products_list .products_item {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(99, 99, 99, 0.1);
}
.products_wrapper .products_list .products_item .product_wrapper {
  padding: 12px 16px 16px;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper {
    padding: 12px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .stock_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
  background: #f7ded9;
  border-radius: 12px;
  padding: 8px 8px 8px 9px;
  margin-bottom: 12px;
}
.products_wrapper .products_list .products_item .product_wrapper .stock_wrapper::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 30px;
  border-width: 8px;
  border-style: solid;
  border-color: #f7ded9 transparent transparent transparent;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .stock_wrapper {
    width: -moz-max-content;
    width: max-content;
    margin-bottom: 16px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .stock_wrapper p {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
  margin: 0;
}
.products_wrapper .products_list .products_item .product_wrapper .stock_wrapper p .stock_txt {
  color: #e00d46;
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info {
  display: flex;
  gap: 24px;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .product_all_info {
    gap: 12px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .img_wrapper {
  width: 140px;
  height: 114px;
  flex-shrink: 0;
  border-radius: 8px;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .product_all_info .img_wrapper {
    width: 106px;
    height: 87px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .img_wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  -o-object-fit: cover;
     object-fit: cover;
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info {
  width: 100%;
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .item_title {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: 0 0 12px;
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .item_title a {
  text-decoration: none;
  color: inherit;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .item_title {
    font-size: 14px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .item_descr {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 26px;
  margin: 0;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .item_descr {
    font-size: 11px;
    line-height: 22px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .price_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .price_wrapper .old_price_txt {
  color: #989898;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 15.6px;
  letter-spacing: 0.325px;
  text-decoration: line-through;
  margin: 0;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .price_wrapper .old_price_txt {
    font-size: 12px;
    line-height: 16px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .price_wrapper .price_txt {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.6px;
  margin: 0;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .price_wrapper .price_txt {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.5px;
  }
}
.products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .price_wrapper .save_txt {
  color: #e00d46;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 15.6px;
  letter-spacing: 0.325px;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .product_wrapper .product_all_info .item_info .price_wrapper .save_txt {
    font-size: 12px;
    line-height: 16px;
  }
}
.products_wrapper .products_list .products_item .popular_products {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 4px 5px 4px 12px;
  border-radius: 0px 0px 8px 8px;
  border-top: 1px solid rgba(250, 234, 209, 0.81);
  background: #fcf4e8;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .popular_products {
    padding: 6px 5px 6px 12px;
  }
}
.products_wrapper .products_list .products_item .popular_products svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .popular_products svg {
    width: 16px;
    height: 16px;
  }
}
.products_wrapper .products_list .products_item .popular_products p {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  margin: 0;
}
@media (max-width: 768px) {
  .products_wrapper .products_list .products_item .popular_products p {
    font-size: 11px;
    line-height: 20px;
  }
}
.products_wrapper .products_list .products_item .popular_products p b {
  font-weight: 600;
}

[popup=firstOrderDiscount] .new_popup {
  max-width: 890px;
}

[popup=newUsersWOProducts] .new_popup {
  max-width: 480px;
}

[popup=newUsersWithProducts] .new_popup {
  max-width: 890px;
}

[popup=returningUsersWOProducts] .new_popup {
  max-width: 480px;
}

[popup=returningUsersWithProducts] .new_popup {
  max-width: 890px;
}

.first_order_discount {
  display: flex;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
}
.first_order_discount.is_hidden {
  display: none;
}
@media (max-width: 768px) {
  .first_order_discount {
    flex-direction: column-reverse;
  }
}
.first_order_discount.second_var .info_wrapper .header_popup {
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .first_order_discount.second_var .info_wrapper .header_popup {
    margin-bottom: 16px;
  }
}
.first_order_discount.second_var .info_wrapper .header_popup .main_title {
  margin-bottom: 12px;
}
@media (max-width: 768px) {
  .first_order_discount.second_var .info_wrapper .header_popup .main_title {
    margin-bottom: 8px;
  }
}
.first_order_discount.second_var .info_wrapper .discount_code_wrapper {
  margin: 0;
}
.first_order_discount .info_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 36px;
  background: #fff;
  margin-right: -1px;
  border-radius: 12px 0 0 12px;
}
@media (max-width: 768px) {
  .first_order_discount .info_wrapper {
    border-radius: 0 0 12px 12px;
    padding: 24px 16px 16px;
    margin: 0;
  }
}
.first_order_discount .info_wrapper .header_popup {
  width: 100%;
  margin-bottom: 12px;
}
@media (max-width: 768px) {
  .first_order_discount .info_wrapper .header_popup {
    margin-bottom: 16px;
  }
}
.first_order_discount .info_wrapper .header_popup .main_title {
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .first_order_discount .info_wrapper .header_popup .main_title {
    margin-bottom: 8px;
  }
}
@media (max-width: 768px) {
  .first_order_discount .info_wrapper .header_popup .main_description {
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
  }
}
.first_order_discount .info_wrapper .body_popup {
  width: 100%;
}
.first_order_discount .info_wrapper .body_popup .email_wrapper label {
  display: block;
  width: 100%;
}
.first_order_discount .info_wrapper .body_popup .email_wrapper label input {
  max-height: 52px;
  min-height: 52px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  padding: 4px 4px 4px 18px;
  color: #989898;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.first_order_discount .info_wrapper .body_popup .email_wrapper .error {
  margin-top: 5px;
  color: red;
  font-size: 11px;
}
.first_order_discount .img_wrapper {
  max-width: 445px;
  width: 50%;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .first_order_discount .img_wrapper {
    width: 100%;
    max-width: 100%;
  }
}
.first_order_discount .img_wrapper img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 0 12px 12px 0;
}
@media (max-width: 768px) {
  .first_order_discount .img_wrapper img {
    border-radius: 12px 12px 0 0;
  }
}

.new_users_w_o_products {
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  background: #f1f3f3;
}
.new_users_w_o_products .header_popup {
  padding: 24px 10px 16px;
  margin: 0;
}
.new_users_w_o_products .header_popup .main_title {
  margin: 0;
}
.new_users_w_o_products .body_popup .item_wrapper {
  max-width: 316px;
  margin: 0 auto;
  border-radius: 8px;
  background: #f3f4f6;
  box-shadow: 0px 4px 10px 0px rgba(0, 170, 181, 0.1);
  display: block;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .item_wrapper {
    max-width: 173px;
  }
}
.new_users_w_o_products .body_popup .item_wrapper .img_wrapper {
  max-height: 191px;
  border-radius: 8px 8px 0 0;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .item_wrapper .img_wrapper {
    max-height: 132px;
  }
}
.new_users_w_o_products .body_popup .item_wrapper .img_wrapper img {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  max-height: 191px;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .item_wrapper .img_wrapper img {
    max-height: 132px;
  }
}
.new_users_w_o_products .body_popup .item_wrapper .item_info {
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding: 12px 8px;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .item_wrapper .item_info {
    gap: 45px;
  }
}
.new_users_w_o_products .body_popup .item_wrapper .item_info h3 {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 23.4px;
  margin: 0;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .item_wrapper .item_info h3 {
    font-size: 14px;
    line-height: 20px;
  }
}
.new_users_w_o_products .body_popup .item_wrapper .item_info .price_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}
.new_users_w_o_products .body_popup .item_wrapper .item_info .price_wrapper .old_price_txt {
  color: #989898;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 15.6px;
  letter-spacing: 0.325px;
  text-decoration: line-through;
  margin: 0;
}
.new_users_w_o_products .body_popup .item_wrapper .item_info .price_wrapper .price_txt {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.6px;
  margin: 0;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .item_wrapper .item_info .price_wrapper .price_txt {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
}
.new_users_w_o_products .body_popup .item_wrapper .item_info .price_wrapper .save_txt {
  color: #e00d46;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 15.6px;
  letter-spacing: 0.325px;
  margin: 0;
}
.new_users_w_o_products .body_popup .item_wrapper .item_info .price_wrapper .img_label {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 57px;
  height: 57px;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .item_wrapper .item_info .price_wrapper .img_label {
    width: 53px;
    height: 53px;
  }
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .img_wrapper {
    background: #f3f4f6;
    box-shadow: 0px 4px 10px 0px rgba(0, 170, 181, 0.1);
  }
}
.new_users_w_o_products .body_popup .btn_wrapper {
  margin: 0;
  padding: 16px;
}
.new_users_w_o_products .body_popup .btn_wrapper > p {
  color: #1e3851;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 0 0 12px;
}
@media (max-width: 768px) {
  .new_users_w_o_products .body_popup .btn_wrapper > p {
    font-size: 14px;
    line-height: 22px;
  }
}

.new_users_with_products {
  width: 100%;
  margin: 0 auto;
  display: flex;
  border-radius: 12px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
}
.new_users_with_products .info_wrapper {
  display: flex;
  flex-direction: column;
  background: #f1f3f3;
  width: 100%;
  padding: 24px;
  margin-right: -5px;
  border-radius: 12px 0 0 12px;
  z-index: 1;
}
@media (max-width: 768px) {
  .new_users_with_products .info_wrapper {
    border-radius: 12px;
    margin: 0;
    padding: 16px;
  }
}
.new_users_with_products .info_wrapper .header_popup {
  margin-bottom: 12px;
}
@media (max-width: 768px) {
  .new_users_with_products .info_wrapper .header_popup {
    margin-bottom: 16px;
  }
  .new_users_with_products .info_wrapper .header_popup .main_title {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 8px;
  }
}
.new_users_with_products .info_wrapper .header_popup .main_description {
  font-size: 12px;
  margin-bottom: 8px;
}
@media (max-width: 768px) {
  .new_users_with_products .info_wrapper .header_popup {
    font-size: 11px;
    line-height: 15px;
  }
}
.new_users_with_products .info_wrapper #counter {
  display: flex;
  justify-content: space-between;
  max-width: 168px;
  margin: 0 auto;
}
.new_users_with_products .info_wrapper #counter .time_block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.new_users_with_products .info_wrapper #counter .time_txt {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 28.5px;
  border-radius: 5px;
  background: #fff;
}
.new_users_with_products .info_wrapper #counter .counter_label {
  color: #989898;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  text-transform: uppercase;
}
.new_users_with_products .info_wrapper #counter .time_separator {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 36px;
  color: #1e3851;
  font-family: "Inter", sans-serif;
  font-size: 19px;
  font-weight: 700;
  line-height: 19px;
  margin: 0 2px;
}
.new_users_with_products .info_wrapper .body_popup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.new_users_with_products .info_wrapper .body_popup .products_wrapper {
  max-height: 296px;
  margin-bottom: 12px;
}
.new_users_with_products .info_wrapper .body_popup .products_wrapper .products_list .products_item .product_wrapper {
  padding: 12px 16px;
}
.new_users_with_products .info_wrapper .body_popup .products_wrapper .products_list .products_item .popular_products {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
  background: #f7ded9;
  border-radius: 12px;
  padding: 8px 8px 8px 9px;
  margin-bottom: 12px;
}
.new_users_with_products .info_wrapper .body_popup .products_wrapper .products_list .products_item .popular_products::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 30px;
  border-width: 8px;
  border-style: solid;
  border-color: #f7ded9 transparent transparent transparent;
}
@media (max-width: 768px) {
  .new_users_with_products .info_wrapper .body_popup .products_wrapper .products_list .products_item .popular_products {
    width: -moz-max-content;
    width: max-content;
    margin-bottom: 16px;
  }
}
.new_users_with_products .info_wrapper .body_popup .products_wrapper .products_list .products_item .popular_products svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.new_users_with_products .info_wrapper .body_popup .products_wrapper .products_list .products_item .popular_products p {
  color: #1e3851;
  font-family: "Poppins", sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
  margin: 0;
}
.new_users_with_products .info_wrapper .body_popup .products_wrapper .products_list .products_item .popular_products p .stock_txt {
  color: #e00d46;
}
.new_users_with_products > .img_wrapper {
  max-width: 360px;
  width: 40%;
  flex-shrink: 0;
  border-radius: 0 12px 12px 0;
}
@media (max-width: 768px) {
  .new_users_with_products > .img_wrapper {
    width: 0;
  }
}
.new_users_with_products > .img_wrapper img {
  width: 100%;
  border-radius: 0 12px 12px 0;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.returning_users_w_o_products {
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  background: #f1f3f3;
  padding: 24px 12px 16px;
}
.returning_users_w_o_products .category_list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.returning_users_w_o_products .category_list .category_item {
  display: flex;
  border-radius: 12px;
  width: 100%;
}
.returning_users_w_o_products .category_list .category_item img {
  width: 50%;
  max-width: 228px;
  border-radius: 12px 0 0 12px;
}
@media (max-width: 768px) {
  .returning_users_w_o_products .category_list .category_item img {
    max-width: 168px;
  }
}
.returning_users_w_o_products .category_list .category_item .info_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 7px 16px;
  background: #5e89b4;
  border-radius: 0 12px 12px 0;
  margin-left: -1px;
}
.returning_users_w_o_products .category_list .category_item .info_wrapper h3 {
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
}
@media (max-width: 768px) {
  .returning_users_w_o_products .category_list .category_item .info_wrapper h3 {
    font-size: 18px;
    line-height: 21px;
  }
}
.returning_users_w_o_products .category_list .category_item .info_wrapper .main_btn {
  max-width: 133px;
  min-width: 133px;
  height: 38px;
  font-size: 18px;
  line-height: 18px;
}
@media (max-width: 768px) {
  .returning_users_w_o_products .category_list .category_item .info_wrapper .main_btn {
    height: 36px;
    max-width: 123px;
    min-width: 123px;
    font-size: 16px;
    line-height: 16px;
  }
}

.returning_users_with_products {
  width: 100%;
  margin: 0 auto;
  display: flex;
  border-radius: 12px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
}
.returning_users_with_products .info_wrapper {
  display: flex;
  flex-direction: column;
  background: #f1f3f3;
  padding: 24px;
  width: 100%;
  margin-right: -1px;
  border-radius: 12px 0 0 12px;
}
@media (max-width: 768px) {
  .returning_users_with_products .info_wrapper {
    border-radius: 12px;
    margin: 0;
    padding: 24px 16px 16px;
  }
}
.returning_users_with_products .info_wrapper .header_popup {
  margin-bottom: 12px;
}
@media (max-width: 768px) {
  .returning_users_with_products .info_wrapper .header_popup {
    margin-bottom: 16px;
  }
  .returning_users_with_products .info_wrapper .header_popup .main_title {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 8px;
  }
  .returning_users_with_products .info_wrapper .header_popup .main_description {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
}
.returning_users_with_products .info_wrapper .body_popup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.returning_users_with_products > .img_wrapper {
  max-width: 360px;
  width: 40%;
  flex-shrink: 0;
  border-radius: 0 12px 12px 0;
}
@media (max-width: 768px) {
  .returning_users_with_products > .img_wrapper {
    width: 0;
  }
}
.returning_users_with_products > .img_wrapper img {
  border-radius: 0 12px 12px 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.needsclick.kl-private-reset-css-Xuajs1 {
  display: none !important;
}/*# sourceMappingURL=main.css.map */`, O = window.innerWidth < 768 ? "mobile" : "desktop";
  o("reverse_trial", "Start experiment", "Experiment activated");
  class H {
    constructor(e) {
      this.device = e, this.timeoutId = null, this.delayTime = 6e4, this.firstSessionTime = 4 * 1e3, this.lastPopupTime = 0, this.timeLag = 3 * 60 * 1e3, this.active = !1, this.init();
    }
    init() {
      k({ name: "Exit Intent Popup", dev: "SKh" }), C("exp_01_exit_intent"), document.head.insertAdjacentHTML("beforeend", `<style>${z}</style>`), this.checkProductPage(), this.createPopup(), this.checkSessionNumber(), this.intentPopupTriggers(), this.handlerClickBtns(), this.copyDiscount(), this.handlerClickInput(), this.handleClosePopup();
    }
    createPopup() {
      i(".new_popup_backdrop") || i("body").insertAdjacentHTML("afterbegin", T);
    }
    checkSessionNumber() {
      const e = () => {
        let n = Number(localStorage.getItem("session"));
        localStorage.setItem("session", (n + 1).toString()), sessionStorage.setItem("session", "1");
      }, t = () => {
        localStorage.setItem("session", "1"), sessionStorage.setItem("session", "1");
      };
      window.onload = () => {
        const n = localStorage.getItem("session"), r = sessionStorage.getItem("session");
        n && !r ? e() : n || t(), Number(localStorage.getItem("session"));
      };
    }
    intentPopupTriggers() {
      if (localStorage.getItem("initUser") || this.getNewUser("_ga"), this.device === "mobile") {
        let e = !1;
        document.addEventListener("scroll", () => {
          +P() < -150 && !e && (this.getItemsBasket("Scroll up (JS speed value: 150) - for any page"), e = !0, setTimeout(() => {
            e = !1;
          }, 2e3));
        });
      }
      this.device === "desktop" && document.addEventListener("mouseout", (e) => {
        e.relatedTarget || this.getItemsBasket("cursor moved out of the page frame");
      }), (window.location.href.includes("/checkouts") || window.location.href.match("/cart")) && (this.setupListeners(), this.resetTimer());
    }
    getNewUser(e) {
      const t = L(e), n = () => {
        setTimeout(() => {
          localStorage.setItem("initUser", "true"), !this.isPopupOpen() && (this.handleShowPopup(S, "firstOrderDiscount", "firstOrderDiscount", "firstOrderDiscount"), i(".new_popup_backdrop").setAttribute("popup", "firstOrderDiscount"));
        }, this.firstSessionTime);
      };
      if (!t)
        n();
      else {
        const r = +(t.split(".").pop() + "000");
        +/* @__PURE__ */ new Date() - +new Date(r) <= 5 * 60 * 1e3 && n();
      }
    }
    setupListeners() {
      document.addEventListener("mousemove", () => this.resetTimer()), document.addEventListener("keydown", () => this.resetTimer()), this.device === "mobile" && (document.addEventListener("touchstart", () => this.resetTimer()), document.addEventListener("touchmove", () => this.resetTimer()));
    }
    resetTimer() {
      this.timeoutId && clearTimeout(this.timeoutId), this.timeoutId = setTimeout(() => {
        this.getItemsBasket("In 60sec. at basket, checkout without any action");
      }, this.delayTime);
    }
    async getItemsBasket(e) {
      if (this.isPopupOpen()) return;
      const t = Date.now();
      if (this.lastPopupTime = Number(sessionStorage.getItem("lastPopupTime")) || 0, t - this.lastPopupTime < this.timeLag) return;
      const n = await this.getCartCheckout(), r = Number(localStorage.getItem("session")) > 1, s = (a, d) => {
        this.handleShowPopup(a, d, e, d), sessionStorage.setItem("lastPopupTime", t.toString());
      }, c = (a, d) => {
        a.forEach((h) => {
          const { url: u, image: m, product_title: V, variant_title: W, presentment_price: f, quantity: b } = h, j = u, U = m, B = V, D = W, v = +f * +b, y = +f * +b, Z = v + y;
          w(".products_list").then(() => {
            i(".products_list").insertAdjacentHTML(
              "beforeend",
              M(
                j,
                U,
                B,
                D,
                Z,
                v,
                y,
                d
              )
            );
          });
        });
      };
      if (n.length > 0)
        r ? (s(N, "returningUsersWithProducts"), c(n, !1), i(".new_popup_backdrop").setAttribute("popup", "returningUsersWithProducts"), w(".img_wrapper").then((a) => {
          x(".product_wrapper a").forEach((d) => {
            d.addEventListener("click", () => {
              o(
                "exp_01_ei__popup6__product",
                "Click on product",
                "Click",
                "Popup. Exit-intent. Returning user with products in basket"
              );
            });
          });
        })) : (s(I, "newUsersWithProducts"), c(n, !0), i(".new_popup_backdrop").setAttribute("popup", "newUsersWithProducts"), await w("a.img_wrapper"), x(".product_wrapper a").forEach((a) => {
          a.addEventListener("click", () => {
            o(
              "exp_01_ei__popup4__product",
              "Click on product",
              "Click",
              "Popup. Exit-intent. New users with product in basket. One or more items"
            );
          });
        }));
      else if (r)
        s($, "returningUsersWOProducts"), i(".new_popup_backdrop").setAttribute("popup", "returningUsersWOProducts");
      else {
        const a = sessionStorage.getItem("viewedItem") || "{}", d = JSON.parse(a);
        s(
          a !== "{}" ? g(
            !0,
            d.imgProduct,
            d.titleProduct,
            d.oldPriceProduct,
            d.priceProduct,
            d.saveTxtProduct,
            d.linkProduct
          ) : g(),
          "newUsersWOProducts"
        ), i(".new_popup_backdrop").setAttribute("popup", "newUsersWOProducts");
      }
    }
    isPopupOpen() {
      var e;
      return ((e = i(".new_popup_content")) == null ? void 0 : e.children.length) > 0;
    }
    handleShowPopup(e, t, n, r) {
      if (sessionStorage.getItem(t) && t !== "firstOrderDiscount") return;
      const c = i("body"), a = i(".new_popup_backdrop"), d = i(".new_popup .new_popup_content");
      switch (a.classList.contains("is_hidden") && a.classList.remove("is_hidden"), c.style.overflow = "hidden", d.innerHTML = e, sessionStorage.setItem(t, "yes"), r) {
        case "firstOrderDiscount":
          o(
            "exp_01_ei__popup1_1__view",
            "Step 1. Get 20% off your first order now",
            "Visibility",
            "Popup. Exit-intent. New users w/o product in basket. First order discount popup. Step 1"
          );
          break;
        case "returningUsersWithProducts":
          o(
            "exp_01_ei__popup6__view",
            "It’s almost yours!",
            "Visibility",
            "Popup. Exit-intent. Returning user with products in basket"
          );
          break;
        case "newUsersWithProducts":
          o(
            "exp_01_ei__popup4__view",
            "Check out now and get 20% off your first order",
            "Visibility",
            "Popup. Exit-intent. New users with product in basket. One or more items"
          );
          break;
        case "returningUsersWOProducts":
          o(
            "exp_01_ei__popup5__view",
            "Explore our best",
            "Visibility",
            "Popup. Exit-intent. Returning user w/o product in basket"
          );
          break;
        case "newUsersWOProducts":
          (sessionStorage.getItem("viewedItem") || "{}") !== "{}" ? (i(".item_info h3").textContent.includes("Mattress") && (i(".price_wrapper .img_label").style.display = "none"), o(
            "exp_01_ei__popup2__view",
            "You recently viewed. Buy now and get 20% off!",
            "Visibility",
            "Popup. Exit-intent. New users w/o product in basket. Viewed item"
          ), i("a.item_wrapper").addEventListener("click", () => {
            o(
              "exp_01_ei__popup2__product",
              "Click on product",
              "Click",
              "Popup. Exit-intent. New users w/o product in basket. Viewed item"
            );
          })) : o(
            "exp_01_ei__popup3__view",
            "You recently viewed. Buy now and get 20% off!",
            "Visibility",
            "Popup. Exit-intent. New users w/o product in basket. Not-viewed item"
          );
          break;
      }
      w(".products_wrapper .product_wrapper").then((h) => {
        const u = i(".products_wrapper .products_list"), m = i(".products_wrapper .shadow");
        u.scrollHeight > u.clientHeight && m.classList.add("active"), u.addEventListener("scroll", () => {
          u.scrollHeight > u.clientHeight && u.scrollTop < u.scrollHeight - u.clientHeight ? m.classList.add("active") : m.classList.remove("active");
        });
      }), w("#counter").then((h) => {
        this.startCountdown();
      });
    }
    handleClosePopup() {
      console.log("handle close popup");
      const e = i("body"), t = i(".new_popup_backdrop");
      i(".new_popup").querySelectorAll('[data-popup="close"]').forEach((s) => {
        s.addEventListener("click", (c) => {
          switch (t.classList.add("is_hidden"), e.style.overflow = "initial", setTimeout(() => {
            i(".new_popup_content").innerHTML = "";
          }, 500), i("[popup]").getAttribute("popup")) {
            case "firstOrderDiscount":
              o(
                "exp_01_ei__popup1__close",
                "Close popup",
                "Click",
                "Popup. Exit-intent. New users w/o product in basket. First order discount popup"
              );
              break;
            case "newUsersWOProducts":
              (sessionStorage.getItem("viewedItem") || "{}") !== "{}" ? o(
                "exp_01_ei__popup2__close",
                "Close popup",
                "Click",
                "Popup. Exit-intent. New users w/o product in basket. Viewed item"
              ) : o(
                "exp_01_ei__popup3__close",
                "Close popup",
                "Click",
                "Popup. Exit-intent. New users w/o product in basket. Not-viewed item"
              );
              break;
            case "newUsersWithProducts":
              o(
                "exp_01_ei__popup4__close",
                "Close popup",
                "Click",
                "Popup. Exit-intent. New users with product in basket. One or more items"
              );
              break;
            case "returningUsersWOProducts":
              o(
                "exp_01_ei__popup5__close",
                "Close popup",
                "Click",
                "Popup. Exit-intent. Returning user w/o product in basket"
              );
              break;
            case "returningUsersWithProducts":
              o(
                "exp_01_ei__popup6__close",
                "Close popup",
                "Click",
                "Popup. Exit-intent. Returning user with products in basket"
              );
              break;
          }
        });
      }), t.addEventListener("click", (s) => {
        if (s.target.matches(".new_popup_backdrop"))
          switch (t.classList.add("is_hidden"), e.style.overflow = "initial", setTimeout(() => {
            i(".new_popup_content").innerHTML = "";
          }, 500), i("[popup]").getAttribute("popup")) {
            case "firstOrderDiscount":
              o(
                "exp_01_ei__popup1__close_bg",
                "Close popup bg",
                "Click",
                "Popup. Exit-intent. New users w/o product in basket. First order discount popup"
              );
              break;
            case "newUsersWOProducts":
              (sessionStorage.getItem("viewedItem") || "{}") !== "{}" ? o(
                "exp_01_ei__popup2__close_bg",
                "Close popup bg",
                "Click",
                "Popup. Exit-intent. New users w/o product in basket. Viewed item"
              ) : o(
                "exp_01_ei__popup3__close_bg",
                "Close popup bg",
                "Click",
                "Popup. Exit-intent. New users w/o product in basket. Not-viewed item"
              );
              break;
            case "newUsersWithProducts":
              o(
                "exp_01_ei__popup4__close_bg",
                "Close popup bg",
                "Click",
                "Popup. Exit-intent. New users with product in basket. One or more items"
              );
              break;
            case "returningUsersWOProducts":
              o(
                "exp_01_ei__popup5__close_bg",
                "Close popup bg",
                "Click",
                "Popup. Exit-intent. Returning user w/o product in basket"
              );
              break;
            case "returningUsersWithProducts":
              o(
                "exp_01_ei__popup6__close_bg",
                "Close popup bg",
                "Click",
                "Popup. Exit-intent. Returning user with products in basket"
              );
              break;
          }
      });
    }
    startCountdown() {
      let e = 900;
      const t = setInterval(() => {
        e--;
        const n = Math.floor(e / 60), r = e % 60, s = i(".minutes_tens"), c = i(".minutes_ones"), a = i(".seconds_tens"), d = i(".seconds_ones");
        s && (s.textContent = Math.floor(n / 10)), c && (c.textContent = n % 10), a && (a.textContent = Math.floor(r / 10)), d && (d.textContent = r % 10), e <= 0 && clearInterval(t);
      }, 1e3);
    }
    copyDiscount() {
      w("[data-discount]").then((e) => {
        x("[data-discount]").forEach((t) => {
          t.addEventListener("click", (n) => {
            let r = n.currentTarget.dataset.discount;
            navigator.clipboard.writeText(r), n.currentTarget.innerHTML = `Copied! ${_.copyCheeckIcon}`, n.currentTarget.closest(".discount_code_container").classList.add("copied"), i("[popup]").getAttribute("popup") === "firstOrderDiscount" ? (o(
              "exp_01_ei__popup1_2__copy",
              "Copy discount code",
              "Click",
              "Popup. Exit-intent. New users w/o product in basket. First order discount popup. Step 2"
            ), o(
              "exp_01_ei__popup1_2__success",
              "Discount code copied",
              "Visibility",
              "Popup. Exit-intent. New users w/o product in basket. First order discount popup. Step 2"
            )) : (o(
              "exp_01_ei__popup4__copy",
              "Copy discount code",
              "Click",
              "Popup. Exit-intent. New users with product in basket. One or more items"
            ), o(
              "exp_01_ei__popup4__success",
              "Discount code copied",
              "Visibility",
              "Popup. Exit-intent. New users with product in basket. One or more items"
            ));
          });
        });
      });
    }
    handlerClickBtns() {
      document.addEventListener("click", (e) => {
        const t = e.target;
        if (t.matches(".first_order_get_discount_btn") && (o(
          "exp_01_ei__popup1_1__get10",
          "Get 20% off",
          "Click",
          "Popup. Exit-intent. New users w/o product in basket. First order discount popup. Step 1"
        ), this.validateEmailForm(i("#emailNew"), !0)), t.matches(".first_order_continue_shopping_btn")) {
          o(
            "exp_01_ei__popup1_2__continue",
            "Continue shopping",
            "Click",
            "Popup. Exit-intent. New users w/o product in basket. First order discount popup. Step 2"
          );
          const n = i("body");
          i(".new_popup_backdrop").classList.add("is_hidden"), n.style.overflow = "initial", setTimeout(() => {
            i(".new_popup_content").innerHTML = "";
          }, 500);
        }
        if (t.matches(".divan_beds_shop_now_btn") && (o(
          "exp_01_ei__popup3__shop_now",
          "Shop now",
          "Click",
          "Popup. Exit-intent. New users w/o product in basket. Not-viewed item"
        ), this.getCoupon("NY20", "/collections/divan-beds")), t.matches(".active_product_shop_now_btn")) {
          o(
            "exp_01_ei__popup2__shop_now",
            "Shop now",
            "Click",
            "Popup. Exit-intent. New users w/o product in basket. Viewed item"
          );
          const n = i(".active_product_shop_now_btn").getAttribute("data-link").split("co.uk")[1];
          this.getCoupon("NY20", n);
        }
        t.matches(".new_users_with_products_checkout_btn") && (o(
          "exp_01_ei__popup4__checkout",
          "Checkout",
          "Click",
          "Popup. Exit-intent. New users with product in basket. One or more items"
        ), this.getCoupon("NY20", "/checkout")), t.matches(".returning_users_w_o_products_shop_now_btn") && o(
          `exp_01_ei__popup5__${t.previousElementSibling.textContent.replace(" ", "_").toLowerCase()}`,
          t.previousElementSibling.textContent,
          "Click",
          "Popup. Exit-intent. Returning user w/o product in basket"
        ), t.matches(".returning_users_with_products_checkout_btn") && (o(
          "exp_01_ei__popup6__checkout",
          "Checkout",
          "Click",
          "Popup. Exit-intent. Returning user with products in basket"
        ), window.location.pathname = "/checkout");
      });
    }
    handlerClickInput() {
      w("#emailNew").then((e) => {
        x("#emailNew").forEach((t) => {
          t.addEventListener("input", (n) => {
            this.validateEmailForm(n.target);
          }), t.addEventListener("keyup", (n) => {
            n.key === "Enter" && this.validateEmailForm(n.target);
          }), t.addEventListener("change", (n) => {
            o(
              "exp_01_ei__popup1_1__input",
              "Input. Your e-mail",
              "Input",
              "Popup. Exit-intent. New users w/o product in basket. First order discount popup. Step 1"
            );
          });
        });
      });
    }
    async validateEmailForm(e, t = !1) {
      var s;
      const n = i("#emailNew").value, r = n.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
      if (e.getAttribute("name") === "emailNew" && (r === null ? i("#emailAddressError") || e.closest("label").insertAdjacentHTML(
        "afterend",
        '<span id="emailAddressError" class="error">Please Enter Valid Email Address</span>'
      ) : (s = i("#emailAddressError")) == null || s.remove()), r !== null && t)
        try {
          const c = await fetch("https://conversionrate.top/api/sonno/user-register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: n
            })
          });
          if (!c.ok)
            throw e.closest("label").insertAdjacentHTML("afterend", '<span id="emailAddressError" class="error">Email already exists</span>'), new Error(`Error: ${c.statusText}`);
          i(".first_order_discount.first_var") && i(".first_order_discount.first_var").classList.add("is_hidden"), i(".first_order_discount.second_var").classList.contains("is_hidden") && (i(".first_order_discount.second_var").classList.remove("is_hidden"), o(
            "exp_01_ei__popup1_2__view",
            "Step 2. You are on the list!",
            "Visibility",
            "Popup. Exit-intent. New users w/o product in basket. First order discount popup. Step 2"
          ));
        } catch (c) {
          console.error("Klavio error:", c);
        }
    }
    async getCartCheckout() {
      try {
        return (await (await fetch("/cart.js", {
          method: "GET"
        })).json()).items;
      } catch (e) {
        return console.error("Error:", e), [];
      }
    }
    async getCoupon(e, t = "") {
      console.log(t);
      const n = window.location.pathname;
      t === "/collections/divan-beds" || t === "/checkout" || t.includes("/products/") ? window.location.href = `/discount/${e}?redirect=${t}` : window.location.href = `/discount/${e}?redirect=${n}`;
    }
    async checkProductPage() {
      if (window.location.pathname.includes("/products/")) {
        const e = await fetch(window.location.pathname + ".js").then((d) => d.json());
        let t = e.featured_image, n = e.title, r = window.location.href, s = "", c = "", a = "";
        await w('[x-data="product"] section.price-pro .text-primary.line-through'), await new Promise((d) => setTimeout(d, 2e3)), s = i('[x-data="product"] section.price-pro .text-primary.line-through').textContent ?? "", c = i('[x-data="product"] section.price-pro .text-primary:not(.line-through)').textContent ?? "", a = i('[x-data="product"] .bg-danger').textContent.split("SAVE ")[1] ?? "", sessionStorage.setItem(
          "viewedItem",
          JSON.stringify({
            imgProduct: t,
            titleProduct: n,
            oldPriceProduct: s,
            priceProduct: c,
            saveTxtProduct: a,
            linkProduct: r
          })
        );
      }
    }
  }
  new H(O);
})();
//# sourceMappingURL=index.js.map
