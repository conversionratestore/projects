(function() {
  "use strict";
  const L = (f, i, r, p = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: f,
      event_desc: i,
      event_type: r,
      event_loc: p
    }), console.log(`Event: ${f} | ${i} | ${r} | ${p}`);
  }, H = ({ name: f, dev: i }) => {
    console.log(
      `%c EXP: ${f} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, Z = (f) => {
    let i = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(i), window.clarity("set", f, "variant_1"));
    }, 1e3);
  }, z = (f, i, r, p) => {
    let h = [];
    if (typeof f == "string")
      h = document.querySelectorAll(f);
    else if (f instanceof Element)
      h = [f];
    else {
      console.error("Invalid target type:", f);
      return;
    }
    let v = new IntersectionObserver(
      (w) => {
        w.forEach((A) => {
          A.isIntersecting && (v.unobserve(A.target), setTimeout(function() {
            m.observe(A.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.2
      }
    ), m = new IntersectionObserver((w) => {
      w.forEach((A) => {
        A.isIntersecting ? (L(i || `view_element_${A.target.id}`, r || "Element visibility", "view", p || A.target.id), v.unobserve(A.target)) : v.observe(A.target), m.unobserve(A.target);
      });
    });
    h.forEach((w) => {
      v.observe(w);
    });
  }, O = `.crs-badges {
  position: absolute;
  left: 50%;
  bottom: -184px;
  transform: translateX(-50%);
  margin-top: 89px;
}

.crs-badges .container {
  padding: 0;
}

.crs-badges__list {
  display: flex;
  justify-content: space-between;
}

.crs-badges__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 314px;
  height: 220px;
  object-fit: contain;
  padding-top: 63px;
}

.crs-badges__item span {
  font-size: 62px;
  line-height: 0.8;
}

.crs-badges__item p {
  margin-top: 26px;
  font-size: 15px;
}
.crs-badges__item:is(.item-1, .item-4) {
  padding-top: 0;
}

.crs-badges__item.item-1 {
  background-image: url('data:image/svg+xml,<svg width="246" height="209" viewBox="0 0 246 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M123 -10L245.11 209H0.890419L123 -10Z" fill="%23EBE6FA"/></svg>');
  background-repeat: no-repeat;
  background-position: top 0 left 50%;
  width: 282px;
  height: 292px;
}

.crs-badges__item.item-1 h3 {
  font-size: 15px;
  line-height: 25px;
  font-weight: 600;
  color: #5331b2;
}

.crs-badges__item.item-1 p {
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
  color: #5331b2;
}
.crs-badges__item.item-2 {
  background-image: url(https://courses-all.goiteens.com/v-gl-v2/assets/images/about/item-2.svg);
  background-repeat: no-repeat;
  background-size: 220px 220px;
  background-position: center;
}

.crs-badges__item.item-2 span {
  color: #1d4766;
}

.crs-badges__item.item-2 p {
  color: #225f8a;
}

.crs-badges__item.item-3 {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="221" height="220" viewBox="0 0 221 220" fill="none"><mask id="mask0_398_5035" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="221" height="220"><path d="M220.048 0H0.0478516V220H220.048V0Z" fill="white"/></mask><g mask="url(%23mask0_398_5035)"><path d="M110.048 0L220.048 110L110.048 220L0.0478516 110L110.048 0Z" fill="%23FAF5E6"/></g></svg>');
  background-repeat: no-repeat;
  background-size: 220px 220px;
  background-position: center;
}

.crs-badges__item.item-3 span {
  color: #997500;
}

.crs-badges__item.item-3 p {
  color: #b28800;
}

.crs-badges__item.item-4 img {
  width: 220px;
  height: auto;
  object-fit: cover;
}
@media (max-width: 1280px) {
  .crs-badges {
    margin-top: 44px;
    margin-bottom: 13px;
    position: static;
    padding-inline: 20px;
    transform: none;
    overflow: hidden;
  }
  .crs-badges__list {
    flex-wrap: wrap;
    row-gap: 24px;
    justify-content: space-between;
  }
  .crs-badges__item {
    width: 158px;
    height: 160px;
    padding-top: 40px;
  }

  .crs-badges__item.item-1 {
    order: 1;
    width: 158px;
    height: 160px;
    background-size: 150px 157px;
    background-position: top 24px left 50%;
  }
  .crs-badges__item.item-1 img {
    width: 67px;
    height: 66px;
  }
  .crs-badges__item.item-1 h3 {
    font-size: 12px;
    line-height: 18px;
  }

  .crs-badges__item.item-1 p {
    margin-top: 5px;
    font-size: 11px;
    font-weight: 600;
    line-height: 14px;
  }

  .crs-badges__item.item-2 {
    order: 3;
    background-size: 140px 140px;
  }

  .crs-badges__item.item-2 span {
    font-size: 32px;
    line-height: 40px;
  }

  .crs-badges__item.item-2 p {
    margin-top: 0;
    font-size: 12px;
    line-height: 20px;
  }

  .crs-badges__item.item-3 {
    order: 4;
    background-size: 158px 158px;
  }

  .crs-badges__item.item-3 span {
    font-size: 32px;
    line-height: 40px;
  }

  .crs-badges__item.item-3 p {
    margin-top: 0;

    font-size: 12px;
    line-height: 20px;
  }

  .crs-badges__item.item-4 {
    order: 2;
  }
}
`;
  class U {
    constructor({ container: i, position: r }) {
      this.container = i, this.position = r || "beforeend", this.init();
    }
    init() {
      if (!this.container) {
        console.log("Container is not found");
        return;
      }
      this.initStyles(), this.render();
    }
    render() {
      this.container && (this.container.insertAdjacentHTML(
        this.position,
        /* HTML */
        `
      <div class="crs-badges">
        <div class="container">
          <ul class="crs-badges__list">
            <li class="crs-badges__item item-1">
              <img
                alt="Ukrainian Business Award 2023"
                class="image mx-auto block h-auto md:w-[65px] xl:w-[120px] xxl:w-[124px]"
                height="124"
                loading="lazy"
                src="./assets/images/about/award-1.png"
                srcset="./assets/images/about/award-1@2x.png 2x"
                width="124"
              />
              <h3
                class="title mx-auto mt-2 max-w-[220px] text-center font-IBMPlexMono font-semibold uppercase md:max-w-[200px] md:text-[14px] md:leading-normal xl:max-w-none xl:text-[20px] xl:leading-[1.3]"
              >
                Ukrainian Business <br class="mobile"> Award 2023
              </h3>
              <p
                class="text mx-auto mt-2 max-w-[260px] text-center font-IBMPlexSans text-[12px] font-semibold leading-[1.5] md:text-[10px] md:leading-snug xl:mt-1 xl:max-w-[305px] xl:text-[16px] xl:leading-[1.5]"
              >
                Найкращий освітній <br class="mobile"> бізнес у <br class="desktop"> сфері навчання <br class="mobile"> для дітей та <br class="desktop"> підлітків
              </p>
            </li>
            <li class="crs-badges__item item-2">
              <span
                class="numbers block text-center font-IBMPlexMono text-[68px] font-semibold leading-[1.3] md:text-[50px] xl:text-[80px] xxl:text-[92px]"
                >150000+</span
              >
              <p
                class="text mt-2 text-center font-IBMPlexMono text-lg font-semibold uppercase md:text-[14px] md:leading-[1.28] xl:text-[20px] xl:leading-[1.6]"
              >
                Дітей навчалося <br />в академії GoITeens
              </p>
            </li>
            <li class="crs-badges__item item-3">
              <span
                class="numbers block text-center font-IBMPlexMono text-[68px] font-semibold leading-[1.3] md:text-[50px] xl:text-[80px] xxl:text-[92px]"
                >250000+</span
              >
              <p
                class="text mt-2 text-center font-IBMPlexMono text-lg font-semibold uppercase md:text-[14px] md:leading-[1.28] xl:text-[20px] xl:leading-[1.6]"
              >
                Занять проведено <br />протягом року
              </p>
            </li>
            <li class="crs-badges__item item-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
              >
                <path d="M220 0H0V220H220V0Z" fill="url(#pattern0_398_5043)" />
                <defs>
                  <pattern id="pattern0_398_5043" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_398_5043" transform="scale(0.00231481)" />
                  </pattern>
                  <image
                    id="image0_398_5043"
                    width="432"
                    height="432"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    `
      ), z(".crs-badges", "exp_hyp_2_1_element_01", "Benefits visibility", "Second screen"));
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = O, document.head.appendChild(i);
    }
  }
  const X = `@media (min-width: 1280px) {
  header.header {
    position: relative;
    margin-bottom: 206px;
    padding-bottom: 196px;
    background-size: 464px auto,810px auto,926px auto;
    background-position: top 120px left calc(50% - 363px),top -64px right calc(50% + 122px),bottom -134px right calc(50% - 411px);
  }

  header.header .container:has(h1) {
    margin-top: 0;
  }
  header.header .container:has(h1) > div {
    max-width: 704px;
  }
  div:has(> form#header) {
    width: 704px;
  }
  header.header h1 {
    margin-top: 70px;
  }
  form#header .register-form-field {
    display: grid;
    grid-template-columns:340px 340px;
    gap: 24px 25px;
  }

  form#header .register-form-field .input-wrap input {
    width: 340px;
    height: 56px;
  }

  form#header .register-form-field .input-wrap input::placeholder {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 16px;
    font-weight: 400;
    line-height: 5rem;
  }

  form#header .register-form-field .input-wrap-radio span {
    white-space: nowrap;
  }

  form#header .register-btn-wrapper button.header-btn-form {
    max-width: 704px;
  }

  form#header .register-btn-wrapper button.header-btn-form::after {
    width: 100%;
  }
}
`;
  class Q {
    constructor() {
      this.init();
    }
    init() {
      this.initStyles();
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = X, document.head.appendChild(i);
    }
  }
  const g = "https://conversionratestore.github.io/projects/goiteens/reinforce_the_value_proposition", V = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="377"
  height="652"
  viewBox="0 0 377 652"
  fill="none"
>
  <path
    d="M194.008 395.103C129.539 458.651 63.9957 521.247 1.18095 586.366C-2.45782 590.129 3.12468 595.668 6.92948 592.113C66.8072 536.008 124.66 477.669 182.967 419.91C150.68 494.113 116.05 567.275 79.1308 639.288C64.7881 626.961 49.7527 615.462 34.0981 604.847C59.1164 578.841 84.1761 552.835 109.194 526.87C99.1451 552.132 87.7322 576.733 74.9954 600.795C74.1682 600.093 73.3003 599.39 72.4724 598.646C67.6352 594.594 60.6049 601.54 65.4841 605.633C68.0071 607.783 70.5301 609.891 73.093 612.042C75.4094 613.985 79.2548 614.026 80.8679 611.049C98.8773 577.644 114.399 542.958 127.306 507.273C129.002 502.559 122.344 499.045 119.036 502.477L23.0571 602.16C20.7407 604.558 21.4027 608.155 24.0496 609.933C42.7822 622.295 60.4396 635.774 77.2697 650.617C79.5027 652.601 83.4728 652.601 85.0026 649.624C126.894 568.214 165.86 485.332 201.824 401.139C203.891 396.302 198.391 390.927 194.091 395.186L194.008 395.103ZM359.087 354.709C344.779 350.161 331.257 344.455 318.065 337.344C315.915 336.186 312.483 336.599 311.325 339.122C301.731 360.042 294.578 381.459 289.904 404.033C288.995 408.334 294.867 413.088 298.175 408.829C307.934 396.178 318.479 384.601 330.14 373.644C334.772 369.262 327.783 362.316 323.152 366.657C316.618 372.818 310.457 379.185 304.543 385.801C308.144 373.017 312.635 360.5 317.983 348.342C328.321 353.634 338.824 358.099 349.741 361.903C328.321 389.852 302.806 413.791 276.754 437.275C282.751 402.132 290.36 367.278 295.901 332.093C296.397 328.909 292.013 327.545 291.021 330.728C278.739 369.014 271.751 409.202 265.051 448.769C264.225 453.565 269.353 456.873 273.198 453.524C305.288 425.326 336.633 396.426 362.065 361.944C364.05 359.257 361.858 355.577 359.129 354.709H359.087ZM317.817 199.346C253.928 170.901 196.199 131.664 146.287 82.6698C144.261 80.6856 139.878 80.6856 138.596 83.6623C125.653 113.72 111.345 143.737 100.965 174.829C99.8071 178.343 105.183 180.617 106.961 177.35C121.269 150.765 132.6 122.361 144.509 94.5775C189.583 137.907 240.819 173.506 297.1 200.587C270.055 201.91 242.515 196.989 215.842 194.137L130.573 184.999C139.495 171.452 147.547 157.352 154.682 142.786C166.508 152.01 178.559 160.944 190.824 169.578C182.884 169.247 174.945 168.875 167.005 168.585C160.719 168.338 160.761 178.053 167.005 178.343C180.568 179.046 194.173 179.583 207.737 180.203C212.948 180.452 214.064 173.547 210.218 170.983C191.775 158.58 173.869 145.556 156.419 131.747C154.144 129.969 150.174 129.555 148.645 132.739C139.804 151.466 129.474 169.453 117.754 186.529C115.438 189.92 118.622 193.599 122.013 193.971C155.881 197.609 189.748 201.248 223.658 204.887C254.589 208.194 285.645 213.445 316.66 208.442C320.712 207.781 321.622 201.082 317.859 199.429L317.817 199.346ZM375.546 117.689C348.046 88.1271 321.498 57.7801 295.694 26.7717C293.626 24.2905 289.574 25.283 288.085 27.7635C276.961 46.0383 265.3 63.9408 254.052 82.1736C252.356 84.9026 256.492 88.2517 258.601 85.6879C270.882 70.5557 282.006 54.5962 292.717 38.3063C314.054 64.1886 336.137 89.4094 358.798 114.093C334.4 110.123 310.002 106.113 285.604 102.144C288.46 95.0326 291.48 87.9881 294.66 81.0159C301.276 86.5538 307.584 92.4474 313.558 98.6706C317.983 103.26 324.972 96.2727 320.546 91.6834C312.991 83.7974 304.893 76.4477 296.314 69.6878C294.04 67.91 290.028 67.4964 288.54 70.6803C283.247 81.8433 278.45 93.1714 273.984 104.707C273.074 107.022 274.977 110.371 277.416 110.785C308.513 115.87 339.652 120.955 370.748 126.041C375.504 126.827 379.143 121.617 375.546 117.772V117.689ZM87.2769 11.5149C77.435 5.51942 62.5899 4.48564 51.4242 1.88126C48.1994 1.13726 45.5524 3.36999 45.3045 6.55393C44.5186 16.5585 45.2218 25.9857 47.4961 35.7432C48.1573 38.5961 50.515 39.4234 52.6654 38.9264C53.6572 39.464 55.1463 39.2162 55.8083 38.2237C57.462 35.7019 58.7445 33.0143 60.5222 30.5751C62.4246 28.0112 64.9469 26.6884 65.3188 23.298C65.5254 21.1486 63.1271 19.7845 61.3081 20.2387C58.3305 20.9414 56.8001 24.2492 55.4769 26.9362C54.8648 22.1103 54.6022 17.2465 54.691 12.3828C62.7552 13.7882 72.1831 15.0705 79.2548 18.1711C76.3185 27.0601 69.1236 36.8596 64.9056 44.3018C60.9768 51.2478 56.8001 58.0699 52.458 64.7674C42.8648 44.3018 34.7593 23.4219 27.0685 2.12975C25.7447 -1.55043 20.1622 -0.102992 21.1547 3.74163C27.6058 28.7973 37.1163 52.9843 47.8275 76.5092C49.3572 79.8996 53.9885 79.0317 55.7249 76.5092C62.8379 66.2148 69.3302 55.6307 75.4507 44.7148C80.1646 36.2808 87.6082 26.4819 89.4272 16.9309C89.8412 14.7807 89.138 12.7139 87.2356 11.5555L87.2769 11.5149ZM212.492 267.525C194.463 255.658 176.474 243.751 158.362 232.009C155.55 230.19 151.001 232.547 151.332 236.061C153.111 255.038 155.55 274.346 160.678 292.745C161.546 295.846 166.964 295.391 166.55 291.96C164.647 276.331 162.538 260.868 161.339 245.24C174.106 253.753 186.898 262.229 199.715 270.667C193.884 273.189 188.219 276.083 182.719 279.308C181.313 275.794 179.907 272.279 178.625 268.724C176.557 263.018 167.418 265.416 169.445 271.246C171.388 276.786 173.414 282.285 175.647 287.701C176.764 290.43 179.865 292.497 182.801 290.596C191.857 284.724 201.286 280.011 211.417 276.331C215.387 274.884 216.173 269.84 212.575 267.484L212.492 267.525Z"
    fill="currentColor"
  />
</svg>`
  ), K = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="319"
  height="487"
  viewBox="0 0 319 487"
  fill="none"
>
  <path
    d="M164.16 270.293C109.61 323.899 54.1502 376.702 0.999244 431.634C-2.07972 434.808 2.64393 439.481 5.86338 436.482C56.5292 389.154 105.482 339.942 154.818 291.219C127.498 353.813 98.1965 415.53 66.9568 476.277C54.8207 465.878 42.0985 456.178 28.8522 447.224C50.0216 425.286 71.2259 403.349 92.3952 381.446C83.892 402.756 74.2349 423.508 63.4576 443.806C62.7576 443.213 62.0233 442.62 61.3228 441.993C57.2297 438.575 51.281 444.434 55.4096 447.887C57.5444 449.7 59.6793 451.479 61.8479 453.293C63.8079 454.932 67.0617 454.967 68.4266 452.456C83.6654 424.276 96.799 395.016 107.721 364.914C109.156 360.938 103.522 357.974 100.723 360.868L19.5098 444.957C17.5498 446.98 18.1099 450.014 20.3497 451.514C36.2003 461.943 51.1411 473.312 65.382 485.833C67.2715 487.507 70.6308 487.507 71.9252 484.996C107.372 416.321 140.343 346.406 170.774 275.384C172.523 271.304 167.869 266.77 164.231 270.362L164.16 270.293ZM303.843 236.218C291.736 232.381 280.294 227.568 269.132 221.569C267.313 220.593 264.409 220.941 263.429 223.069C255.311 240.717 249.258 258.783 245.304 277.826C244.534 281.453 249.503 285.464 252.302 281.871C260.56 271.199 269.483 261.433 279.349 252.191C283.269 248.494 277.355 242.635 273.436 246.297C267.908 251.494 262.694 256.865 257.691 262.445C260.737 251.661 264.537 241.103 269.062 230.847C277.81 235.311 286.698 239.078 295.935 242.286C277.81 265.863 256.221 286.057 234.177 305.867C239.251 276.222 245.689 246.82 250.378 217.14C250.797 214.454 247.088 213.303 246.248 215.989C235.856 248.285 229.943 282.185 224.274 315.563C223.575 319.609 227.914 322.399 231.168 319.574C258.321 295.788 284.843 271.408 306.363 242.321C308.042 240.054 306.187 236.95 303.878 236.218H303.843ZM268.922 105.16C214.862 81.1647 166.015 48.0663 123.781 6.73684C122.067 5.063 118.358 5.06301 117.274 7.57407C106.321 32.9297 94.2147 58.2505 85.4318 84.4781C84.4521 87.4426 89.0009 89.3609 90.5051 86.6054C102.612 64.1795 112.2 40.219 122.277 16.7817C160.416 53.3328 203.77 83.3622 251.392 106.207C228.508 107.323 205.205 103.172 182.635 100.765L110.485 93.0575C118.034 81.6295 124.848 69.7358 130.884 57.4481C140.891 65.2296 151.088 72.7655 161.466 80.0488C154.748 79.7695 148.03 79.456 141.312 79.2116C135.993 79.0026 136.028 87.1982 141.312 87.4426C152.789 88.0354 164.3 88.4888 175.778 89.0119C180.186 89.2216 181.131 83.3971 177.877 81.2343C162.271 70.7715 147.12 59.785 132.354 48.1359C130.43 46.6363 127.07 46.2873 125.776 48.9732C118.296 64.7702 109.555 79.9439 99.6377 94.3482C97.6783 97.2082 100.373 100.312 103.242 100.626C131.899 103.695 160.556 106.765 189.249 109.834C215.422 112.624 241.699 117.053 267.943 112.833C271.371 112.275 272.141 106.625 268.957 105.23L268.922 105.16ZM317.769 36.278C294.501 11.3403 272.036 -14.2591 250.203 -40.4165C248.453 -42.5095 245.024 -41.6723 243.764 -39.5799C234.351 -24.164 224.485 -9.06221 214.967 6.31823C213.532 8.62029 217.032 11.4454 218.816 9.28273C229.208 -3.48216 238.621 -16.9449 247.683 -30.6864C265.738 -8.85321 284.423 12.422 303.598 33.2438C282.954 29.8955 262.309 26.5124 241.665 23.1641C244.081 17.1655 246.636 11.2231 249.328 5.34167C254.925 10.0132 260.263 14.9848 265.318 20.2345C269.062 24.1058 274.976 18.2117 271.232 14.3403C264.838 7.68802 257.987 1.48812 250.727 -4.21427C248.803 -5.71394 245.408 -6.06288 244.149 -3.37704C239.67 6.03957 235.611 15.5955 231.833 25.3262C231.063 27.2793 232.672 30.1045 234.737 30.4535C261.049 34.7434 287.397 39.0328 313.71 43.3228C317.734 43.9859 320.813 39.5914 317.769 36.3476V36.278ZM73.8496 -53.2865C65.5219 -58.344 52.9607 -59.2161 43.5127 -61.413C40.7841 -62.0407 38.5443 -60.1572 38.3345 -57.4714C37.6695 -49.0319 38.2646 -41.0795 40.189 -32.8485C40.7485 -30.4419 42.7435 -29.744 44.563 -30.1633C45.4022 -29.7098 46.6623 -29.9188 47.2223 -30.756C48.6217 -32.8833 49.7069 -35.1505 51.2111 -37.2082C52.8208 -39.3709 54.955 -40.4868 55.2697 -43.3468C55.4446 -45.1599 53.4152 -46.3107 51.8761 -45.9275C49.3566 -45.3347 48.0616 -42.5444 46.942 -40.2778C46.424 -44.3487 46.2018 -48.4516 46.277 -52.5544C53.1005 -51.3688 61.078 -50.2872 67.0617 -47.6716C64.5772 -40.1733 58.4892 -31.9068 54.9201 -25.6288C51.5957 -19.7695 48.0616 -14.0147 44.3875 -8.36494C36.2702 -25.6288 29.4117 -43.2423 22.9041 -61.2034C21.7839 -64.3079 17.0603 -63.0869 17.9001 -59.8437C23.3587 -38.7078 31.4061 -18.3047 40.4694 1.53996C41.7638 4.39996 45.6826 3.66784 47.1518 1.53996C53.1705 -7.14394 58.664 -16.0723 63.8429 -25.2805C67.8316 -32.395 74.13 -40.6609 75.6692 -48.7178C76.0195 -50.5316 75.4244 -52.2751 73.8147 -53.2523L73.8496 -53.2865ZM179.801 162.673C164.546 152.663 149.324 142.618 133.999 132.713C131.619 131.179 127.77 133.167 128.05 136.131C129.555 152.14 131.619 168.427 135.958 183.947C136.693 186.564 141.277 186.18 140.927 183.285C139.317 170.102 137.532 157.057 136.518 143.874C147.32 151.056 158.144 158.206 168.99 165.323C164.055 167.451 159.262 169.892 154.608 172.613C153.419 169.648 152.229 166.684 151.144 163.684C149.394 158.871 141.662 160.894 143.376 165.812C145.021 170.485 146.735 175.124 148.624 179.693C149.569 181.994 152.194 183.738 154.678 182.134C162.341 177.181 170.319 173.205 178.891 170.102C182.251 168.881 182.916 164.626 179.871 162.638L179.801 162.673Z"
    fill="currentColor"
  />
</svg>`
  ), q = {
    1: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у захваті.",
      content: [
        "Знайомимо з IT-професіями й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ],
      theme: "green"
    },
    2: {
      title: (
        /* HTML */
        "Оберіть курс, де багато взаємодії, на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, на якому ваша дитина знайде друзів!",
      content: [
        "Знайомимо з напрямками й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ],
      theme: "pink"
    },
    3: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у захваті.",
      content: [
        "Познайомимо із напрямками навчання та підберемо курс згідно інтересів та здібностей дитини.",
        "Дитина створить невеликий проєкт і зрозуміє, наскільки їй цікавий цей напрямок. Часто тут розкриваються неочікувані таланти!",
        "Обговоримо результати, відповімо на ваші запитання і допоможемо визначитися з наступними кроками."
      ],
      theme: "blue"
    },
    4: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у захваті.",
      content: [
        "Познайомимо із напрямками навчання та підберемо курс згідно інтересів та здібностей дитини.",
        "Дитина створить невеликий проєкт і зрозуміє, наскільки їй цікавий цей напрямок. Часто тут розкриваються неочікувані таланти!",
        "Обговоримо результати, відповімо на ваші запитання і допоможемо визначитися з наступними кроками."
      ],
      theme: "lavender"
    }
  };
  function J(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
  }
  var j = { exports: {} };
  (function(f) {
    (function(i) {
      f.exports ? f.exports = i() : window.intlTelInput = i();
    })(function(i) {
      return function() {
        for (var r = [["Afghanistan", "af", "93"], ["Albania", "al", "355"], ["Algeria", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua & Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria", "at", "43"], ["Azerbaijan", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus", "by", "375"], ["Belgium", "be", "32"], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia & Herzegovina", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia", "kh", "855"], ["Cameroon", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros", "km", "269"], ["Congo - Brazzaville", "cg", "242"], ["Congo - Kinshasa", "cd", "243"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus", "cy", "357"], ["Czech Republic", "cz", "420"], ["Denmark", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands", "fk", "500"], ["Faroe Islands", "fo", "298"], ["Fiji", "fj", "679"], ["Finland", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana", "gf", "594"], ["French Polynesia", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49"], ["Ghana", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece", "gr", "30"], ["Greenland", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852"], ["Hungary", "hu", "36"], ["Iceland", "is", "354"], ["India", "in", "91"], ["Indonesia", "id", "62"], ["Iran", "ir", "98"], ["Iraq", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel", "il", "972"], ["Italy", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan", "jo", "962"], ["Kazakhstan", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan", "kg", "996"], ["Laos", "la", "856"], ["Latvia", "lv", "371"], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco", "ma", "212", 0], ["Mozambique", "mz", "258"], ["Myanmar (Burma)", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31"], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea", "kp", "850"], ["North Macedonia", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway", "no", "47", 0], ["Oman", "om", "968"], ["Pakistan", "pk", "92"], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63"], ["Poland", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar", "qa", "974"], ["Réunion", "re", "262", 0], ["Romania", "ro", "40"], ["Russia", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé & Príncipe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82"], ["South Sudan", "ss", "211"], ["Spain", "es", "34"], ["Sri Lanka", "lk", "94"], ["St Barthélemy", "bl", "590", 1], ["St Helena", "sh", "290"], ["St Kitts & Nevis", "kn", "1", 18, ["869"]], ["St Lucia", "lc", "1", 19, ["758"]], ["St Martin", "mf", "590", 2], ["St Pierre & Miquelon", "pm", "508"], ["St Vincent & Grenadines", "vc", "1", 20, ["784"]], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard & Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden", "se", "46"], ["Switzerland", "ch", "41"], ["Syria", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad & Tobago", "tt", "1", 22, ["868"]], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks & Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380"], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["US Virgin Islands", "vi", "1", 24, ["340"]], ["Uzbekistan", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis & Futuna", "wf", "681"], ["Western Sahara", "eh", "212", 1, ["5288", "5289"]], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]], p = 0; p < r.length; p++) {
          var h = r[p];
          r[p] = {
            name: h[0],
            iso2: h[1],
            dialCode: h[2],
            priority: h[3] || 0,
            areaCodes: h[4] || null
          };
        }
        function v(d) {
          for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o] != null ? Object(arguments[o]) : {}, n = Object.keys(t);
            typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.forEach(function(e) {
              m(d, e, t[e]);
            });
          }
          return d;
        }
        function m(d, o, t) {
          return o = k(o), o in d ? Object.defineProperty(d, o, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : d[o] = t, d;
        }
        function w(d, o) {
          if (!(d instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        function A(d, o) {
          for (var t = 0; t < o.length; t++) {
            var n = o[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(d, k(n.key), n);
          }
        }
        function I(d, o, t) {
          return o && A(d.prototype, o), t && A(d, t), Object.defineProperty(d, "prototype", {
            writable: !1
          }), d;
        }
        function k(d) {
          var o = B(d, "string");
          return typeof o == "symbol" ? o : String(o);
        }
        function B(d, o) {
          if (typeof d != "object" || d === null)
            return d;
          var t = d[Symbol.toPrimitive];
          if (t !== i) {
            var n = t.call(d, o || "default");
            if (typeof n != "object")
              return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (o === "string" ? String : Number)(d);
        }
        var _ = {
          getInstance: function(o) {
            var t = o.getAttribute("data-intl-tel-input-id");
            return window.intlTelInputGlobals.instances[t];
          },
          instances: {},
          // using a global like this allows us to mock it in the tests
          documentReady: function() {
            return document.readyState === "complete";
          }
        };
        typeof window == "object" && (window.intlTelInputGlobals = _);
        var M = 0, T = {
          // whether or not to allow the dropdown
          allowDropdown: !0,
          // auto insert dial code (A) on init, (B) on user selecting a country, (C) on calling setCountry
          // also listen for blur/submit and auto remove dial code if that's all there is
          autoInsertDialCode: !1,
          // add a placeholder in the input with an example number for the selected country
          autoPlaceholder: "polite",
          // add a country search input at the top of the dropdown
          countrySearch: !1,
          // modify the parentClass
          customContainer: "",
          // modify the auto placeholder
          customPlaceholder: null,
          // append menu to specified element
          dropdownContainer: null,
          // don't display these countries
          excludeCountries: [],
          // fix the dropdown width to the input width (rather than being as wide as the longest country name)
          fixDropdownWidth: !1,
          // format the input value during initialisation and on setNumber
          formatOnDisplay: !0,
          // geoIp lookup function
          geoIpLookup: null,
          // inject a hidden input with this name, and on submit, populate it with the result of getNumber
          hiddenInput: "",
          // initial country
          initialCountry: "",
          // localized country names e.g. { 'de': 'Deutschland' }
          localizedCountries: null,
          // national vs international formatting for numbers e.g. placeholders and displaying existing numbers
          nationalMode: !0,
          // display only these countries
          onlyCountries: [],
          // number type to use for placeholders
          placeholderNumberType: "MOBILE",
          // the countries at the top of the list. defaults to united states and united kingdom
          preferredCountries: ["us", "gb"],
          // display the country dial code next to the selected flag
          separateDialCode: !1,
          // option to hide the flags - must be used with separateDialCode, or allowDropdown=false
          showFlags: !0,
          // use full screen popup instead of dropdown for country list
          useFullscreenPopup: typeof navigator < "u" && typeof window < "u" ? (
            // we cannot just test screen size as some smartphones/website meta tags will report desktop
            // resolutions
            // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
            /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500
          ) : !1,
          // specify the path to the libphonenumber script to enable validation/formatting
          utilsScript: ""
        }, E = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"], F = function(o, t) {
          for (var n = Object.keys(o), e = 0; e < n.length; e++)
            t(n[e], o[n[e]]);
        }, D = function(o) {
          F(window.intlTelInputGlobals.instances, function(t) {
            window.intlTelInputGlobals.instances[t][o]();
          });
        }, dt = /* @__PURE__ */ function() {
          function d(o, t) {
            var n = this;
            w(this, d), this.id = M++, this.telInput = o, this.activeItem = null, this.highlightedItem = null;
            var e = t || {};
            this.options = {}, F(T, function(s, a) {
              n.options[s] = e.hasOwnProperty(s) ? e[s] : a;
            }), this.hadInitialPlaceholder = !!o.getAttribute("placeholder");
          }
          return I(d, [{
            key: "_init",
            value: function() {
              var t = this;
              this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.countrySearch && !this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !0), this.options.nationalMode && (this.options.autoInsertDialCode = !1), this.options.separateDialCode && (this.options.autoInsertDialCode = !1);
              var n = this.options.allowDropdown && !this.options.separateDialCode;
              if (!this.options.showFlags && n && (this.options.showFlags = !0), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isRTL = !!this.telInput.closest("[dir=rtl]"), typeof Promise < "u") {
                var e = new Promise(function(a, c) {
                  t.resolveAutoCountryPromise = a, t.rejectAutoCountryPromise = c;
                }), s = new Promise(function(a, c) {
                  t.resolveUtilsScriptPromise = a, t.rejectUtilsScriptPromise = c;
                });
                this.promise = Promise.all([e, s]);
              } else
                this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {
                }, this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {
                };
              this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
            }
          }, {
            key: "_processCountryData",
            value: function() {
              this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries(), this.options.localizedCountries && this._translateCountriesByLocale(), (this.options.onlyCountries.length || this.options.localizedCountries) && this.countries.sort(this._countryNameSort);
            }
          }, {
            key: "_addCountryCode",
            value: function(t, n, e) {
              n.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = n.length), this.countryCodes.hasOwnProperty(n) || (this.countryCodes[n] = []);
              for (var s = 0; s < this.countryCodes[n].length; s++)
                if (this.countryCodes[n][s] === t)
                  return;
              var a = e !== i ? e : this.countryCodes[n].length;
              this.countryCodes[n][a] = t;
            }
          }, {
            key: "_processAllCountries",
            value: function() {
              if (this.options.onlyCountries.length) {
                var t = this.options.onlyCountries.map(function(e) {
                  return e.toLowerCase();
                });
                this.countries = r.filter(function(e) {
                  return t.indexOf(e.iso2) > -1;
                });
              } else if (this.options.excludeCountries.length) {
                var n = this.options.excludeCountries.map(function(e) {
                  return e.toLowerCase();
                });
                this.countries = r.filter(function(e) {
                  return n.indexOf(e.iso2) === -1;
                });
              } else
                this.countries = r;
            }
          }, {
            key: "_translateCountriesByLocale",
            value: function() {
              for (var t = 0; t < this.countries.length; t++) {
                var n = this.countries[t].iso2.toLowerCase();
                this.options.localizedCountries.hasOwnProperty(n) && (this.countries[t].name = this.options.localizedCountries[n]);
              }
            }
          }, {
            key: "_countryNameSort",
            value: function(t, n) {
              return t.name < n.name ? -1 : t.name > n.name ? 1 : 0;
            }
          }, {
            key: "_processCountryCodes",
            value: function() {
              this.countryCodeMaxLen = 0, this.dialCodes = {}, this.countryCodes = {};
              for (var t = 0; t < this.countries.length; t++) {
                var n = this.countries[t];
                this.dialCodes[n.dialCode] || (this.dialCodes[n.dialCode] = !0), this._addCountryCode(n.iso2, n.dialCode, n.priority);
              }
              for (var e = 0; e < this.countries.length; e++) {
                var s = this.countries[e];
                if (s.areaCodes)
                  for (var a = this.countryCodes[s.dialCode][0], c = 0; c < s.areaCodes.length; c++) {
                    for (var l = s.areaCodes[c], u = 1; u < l.length; u++) {
                      var b = s.dialCode + l.substr(0, u);
                      this._addCountryCode(a, b), this._addCountryCode(s.iso2, b);
                    }
                    this._addCountryCode(s.iso2, s.dialCode + l);
                  }
              }
            }
          }, {
            key: "_processPreferredCountries",
            value: function() {
              this.preferredCountries = [];
              for (var t = 0; t < this.options.preferredCountries.length; t++) {
                var n = this.options.preferredCountries[t].toLowerCase(), e = this._getCountryData(n, !1, !0);
                e && this.preferredCountries.push(e);
              }
            }
          }, {
            key: "_createEl",
            value: function(t, n, e) {
              var s = document.createElement(t);
              return n && F(n, function(a, c) {
                return s.setAttribute(a, c);
              }), e && e.appendChild(s), s;
            }
          }, {
            key: "_generateMarkup",
            value: function() {
              this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
              var t = this.options, n = t.allowDropdown, e = t.separateDialCode, s = t.showFlags, a = t.customContainer, c = t.hiddenInput, l = t.dropdownContainer, u = t.fixDropdownWidth, b = t.useFullscreenPopup, C = t.countrySearch, x = "iti";
              n && (x += " iti--allow-dropdown"), e && (x += " iti--separate-dial-code"), s && (x += " iti--show-flags"), a && (x += " ".concat(a));
              var y = this._createEl("div", {
                class: x
              });
              this.telInput.parentNode.insertBefore(y, this.telInput);
              var P = n || s || e;
              if (P && (this.flagsContainer = this._createEl("div", {
                class: "iti__flag-container"
              }, y)), y.appendChild(this.telInput), P && (this.selectedFlag = this._createEl("div", v({
                class: "iti__selected-flag"
              }, n && {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                "aria-expanded": "false",
                "aria-label": "Telephone country code"
              }), this.flagsContainer)), s && (this.selectedFlagInner = this._createEl("div", {
                class: "iti__flag"
              }, this.selectedFlag)), this.selectedFlag && this.telInput.disabled && this.selectedFlag.setAttribute("aria-disabled", "true"), e && (this.selectedDialCode = this._createEl("div", {
                class: "iti__selected-dial-code"
              }, this.selectedFlag)), n) {
                this.telInput.disabled || this.selectedFlag.setAttribute("tabindex", "0"), this.dropdownArrow = this._createEl("div", {
                  class: "iti__arrow"
                }, this.selectedFlag);
                var ut = u ? "" : "iti--flexible-dropdown-width";
                if (this.dropdownContent = this._createEl("div", {
                  class: "iti__dropdown-content iti__hide ".concat(ut)
                }), C && (this.searchInput = this._createEl("input", {
                  type: "text",
                  class: "iti__search-input",
                  placeholder: "Search"
                }, this.dropdownContent)), this.countryList = this._createEl("ul", {
                  class: "iti__country-list",
                  id: "iti-".concat(this.id, "__country-listbox"),
                  role: "listbox",
                  "aria-label": "List of countries"
                }, this.dropdownContent), this.preferredCountries.length && !C && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), this._createEl("li", {
                  class: "iti__divider",
                  "aria-hidden": "true"
                }, this.countryList)), this._appendListItems(this.countries, "iti__standard"), l) {
                  var G = "iti iti--container";
                  b && (G += " iti--fullscreen-popup"), C && (G += " iti--country-search"), this.dropdown = this._createEl("div", {
                    class: G
                  }), this.dropdown.appendChild(this.dropdownContent);
                } else
                  this.flagsContainer.appendChild(this.dropdownContent);
              }
              if (c) {
                var S = c, Y = this.telInput.getAttribute("name");
                if (Y) {
                  var R = Y.lastIndexOf("[");
                  R !== -1 && (S = "".concat(Y.substr(0, R), "[").concat(S, "]"));
                }
                this.hiddenInput = this._createEl("input", {
                  type: "hidden",
                  name: S
                }), y.appendChild(this.hiddenInput);
              }
            }
          }, {
            key: "_appendListItems",
            value: function(t, n, e) {
              for (var s = 0; s < t.length; s++) {
                var a = t[s], c = e ? "-preferred" : "", l = this._createEl("li", {
                  id: "iti-".concat(this.id, "__item-").concat(a.iso2).concat(c),
                  class: "iti__country ".concat(n),
                  tabindex: "-1",
                  role: "option",
                  "data-dial-code": a.dialCode,
                  "data-country-code": a.iso2,
                  "aria-selected": "false"
                }, this.countryList);
                a.node = l;
                var u = "";
                this.options.showFlags && (u += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(a.iso2, "'></div></div>")), u += "<span class='iti__country-name'>".concat(a.name, "</span>"), u += "<span class='iti__dial-code'>+".concat(a.dialCode, "</span>"), l.insertAdjacentHTML("beforeend", u);
              }
            }
          }, {
            key: "_setInitialState",
            value: function() {
              var t = this.telInput.getAttribute("value"), n = this.telInput.value, e = t && t.charAt(0) === "+" && (!n || n.charAt(0) !== "+"), s = e ? t : n, a = this._getDialCode(s), c = this._isRegionlessNanp(s), l = this.options, u = l.initialCountry, b = l.autoInsertDialCode;
              if (a && !c)
                this._updateFlagFromNumber(s);
              else if (u !== "auto") {
                var C = u && this._getCountryData(u, !1, !0);
                C ? this._setFlag(u.toLowerCase()) : a && c ? this._setFlag("us") : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, s || this._setFlag(this.defaultCountry)), !s && b && (this.telInput.value = "+".concat(this.selectedCountryData.dialCode));
              }
              s && this._updateValFromNumber(s);
            }
          }, {
            key: "_initListeners",
            value: function() {
              this._initKeyListeners(), this.options.autoInsertDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener();
            }
          }, {
            key: "_initHiddenInputListener",
            value: function() {
              var t = this;
              this._handleHiddenInputSubmit = function() {
                t.hiddenInput.value = t.getNumber();
              }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
            }
          }, {
            key: "_getClosestLabel",
            value: function() {
              for (var t = this.telInput; t && t.tagName !== "LABEL"; )
                t = t.parentNode;
              return t;
            }
          }, {
            key: "_initDropdownListeners",
            value: function() {
              var t = this;
              this._handleLabelClick = function(e) {
                t.dropdownContent.classList.contains("iti__hide") ? t.telInput.focus() : e.preventDefault();
              };
              var n = this._getClosestLabel();
              n && n.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function() {
                t.dropdownContent.classList.contains("iti__hide") && !t.telInput.disabled && !t.telInput.readOnly && t._showDropdown();
              }, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function(e) {
                var s = t.dropdownContent.classList.contains("iti__hide");
                s && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), t._showDropdown()), e.key === "Tab" && t._closeDropdown();
              }, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
            }
          }, {
            key: "_initRequests",
            value: function() {
              var t = this;
              this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", function() {
                window.intlTelInputGlobals.loadUtils(t.options.utilsScript);
              }) : this.resolveUtilsScriptPromise(), this.options.initialCountry === "auto" ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
            }
          }, {
            key: "_loadAutoCountry",
            value: function() {
              window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(function(t) {
                window.intlTelInputGlobals.autoCountry = t.toLowerCase(), setTimeout(function() {
                  return D("handleAutoCountry");
                });
              }, function() {
                return D("rejectAutoCountryPromise");
              }));
            }
          }, {
            key: "_initKeyListeners",
            value: function() {
              var t = this;
              this._handleKeyupEvent = function() {
                t._updateFlagFromNumber(t.telInput.value) && t._triggerCountryChange();
              }, this.telInput.addEventListener("keyup", this._handleKeyupEvent), this._handleClipboardEvent = function() {
                setTimeout(t._handleKeyupEvent);
              }, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent);
            }
          }, {
            key: "_cap",
            value: function(t) {
              var n = this.telInput.getAttribute("maxlength");
              return n && t.length > n ? t.substr(0, n) : t;
            }
          }, {
            key: "_initBlurListeners",
            value: function() {
              var t = this;
              this._handleSubmitOrBlurEvent = function() {
                t._removeEmptyDialCode();
              }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
            }
          }, {
            key: "_removeEmptyDialCode",
            value: function() {
              if (this.telInput.value.charAt(0) === "+") {
                var t = this._getNumeric(this.telInput.value);
                (!t || this.selectedCountryData.dialCode === t) && (this.telInput.value = "");
              }
            }
          }, {
            key: "_getNumeric",
            value: function(t) {
              return t.replace(/\D/g, "");
            }
          }, {
            key: "_trigger",
            value: function(t) {
              var n = document.createEvent("Event");
              n.initEvent(t, !0, !0), this.telInput.dispatchEvent(n);
            }
          }, {
            key: "_showDropdown",
            value: function() {
              this.options.fixDropdownWidth && (this.dropdownContent.style.width = "".concat(this.telInput.offsetWidth, "px")), this.dropdownContent.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.options.countrySearch ? (this._highlightListItem(this.countryList.firstElementChild, !1), this.searchInput.focus()) : this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0)), this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
            }
          }, {
            key: "_toggleClass",
            value: function(t, n, e) {
              e && !t.classList.contains(n) ? t.classList.add(n) : !e && t.classList.contains(n) && t.classList.remove(n);
            }
          }, {
            key: "_setDropdownPosition",
            value: function() {
              var t = this;
              if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
                var n = this.telInput.getBoundingClientRect(), e = window.pageYOffset || document.documentElement.scrollTop, s = n.top + e, a = this.dropdownContent.offsetHeight, c = s + this.telInput.offsetHeight + a < e + window.innerHeight, l = s - a > e, u = !this.options.countrySearch && !c && l;
                if (this._toggleClass(this.dropdownContent, "iti__dropdown-content--dropup", u), this.options.dropdownContainer) {
                  var b = u ? 0 : this.telInput.offsetHeight;
                  this.dropdown.style.top = "".concat(s + b, "px"), this.dropdown.style.left = "".concat(n.left + document.body.scrollLeft, "px"), this._handleWindowScroll = function() {
                    return t._closeDropdown();
                  }, window.addEventListener("scroll", this._handleWindowScroll);
                }
              }
            }
          }, {
            key: "_getClosestListItem",
            value: function(t) {
              for (var n = t; n && n !== this.countryList && !n.classList.contains("iti__country"); )
                n = n.parentNode;
              return n === this.countryList ? null : n;
            }
          }, {
            key: "_bindDropdownListeners",
            value: function() {
              var t = this;
              this._handleMouseoverCountryList = function(l) {
                var u = t._getClosestListItem(l.target);
                u && t._highlightListItem(u, !1);
              }, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function(l) {
                var u = t._getClosestListItem(l.target);
                u && t._selectListItem(u);
              }, this.countryList.addEventListener("click", this._handleClickCountryList);
              var n = !0;
              this._handleClickOffToClose = function() {
                n || t._closeDropdown(), n = !1;
              }, document.documentElement.addEventListener("click", this._handleClickOffToClose);
              var e = "", s = null;
              if (this._handleKeydownOnDropdown = function(l) {
                ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(l.key) && (l.preventDefault(), l.stopPropagation(), l.key === "ArrowUp" || l.key === "ArrowDown" ? t._handleUpDownKey(l.key) : l.key === "Enter" ? t._handleEnterKey() : l.key === "Escape" && t._closeDropdown()), !t.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(l.key) && (l.stopPropagation(), s && clearTimeout(s), e += l.key.toLowerCase(), t._searchForCountry(e), s = setTimeout(function() {
                  e = "";
                }, 1e3));
              }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
                var a = function() {
                  var u = t.searchInput.value.trim();
                  u ? t._filterCountries(u.toLowerCase()) : t._filterCountries(null, !0);
                }, c = null;
                this._handleSearchChange = function() {
                  c && clearTimeout(c), c = setTimeout(function() {
                    a(), c = null;
                  }, 100);
                }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", function(l) {
                  return l.stopPropagation();
                });
              }
            }
          }, {
            key: "_filterCountries",
            value: function(t) {
              var n = arguments.length > 1 && arguments[1] !== i ? arguments[1] : !1, e = !0;
              this.countryList.innerHTML = "";
              for (var s = 0; s < this.countries.length; s++) {
                var a = this.countries[s], c = a.name.toLowerCase(), l = "+".concat(a.dialCode);
                (n || c.includes(t) || l.includes(t)) && (this.countryList.appendChild(a.node), e && (this._highlightListItem(a.node, !1), e = !1));
              }
            }
          }, {
            key: "_handleUpDownKey",
            value: function(t) {
              var n = t === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
              if (n ? n.classList.contains("iti__divider") && (n = t === "ArrowUp" ? n.previousElementSibling : n.nextElementSibling) : this.countryList.childElementCount > 1 && (n = t === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), n) {
                var e = !this.options.countrySearch;
                this._highlightListItem(n, e), this.options.countrySearch && this._scrollTo(n, !1);
              }
            }
          }, {
            key: "_handleEnterKey",
            value: function() {
              this.highlightedItem && this._selectListItem(this.highlightedItem);
            }
          }, {
            key: "_searchForCountry",
            value: function(t) {
              for (var n = 0; n < this.countries.length; n++)
                if (this._startsWith(this.countries[n].name, t)) {
                  var e = this.countries[n].node;
                  this._highlightListItem(e, !1), this._scrollTo(e, !0);
                  break;
                }
            }
          }, {
            key: "_startsWith",
            value: function(t, n) {
              return t.substr(0, n.length).toLowerCase() === n;
            }
          }, {
            key: "_updateValFromNumber",
            value: function(t) {
              var n = t;
              if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                var e = this.options.nationalMode || n.charAt(0) !== "+" && !this.options.separateDialCode, s = intlTelInputUtils.numberFormat, a = s.NATIONAL, c = s.INTERNATIONAL, l = e ? a : c;
                n = intlTelInputUtils.formatNumber(n, this.selectedCountryData.iso2, l);
              }
              n = this._beforeSetNumber(n), this.telInput.value = n;
            }
          }, {
            key: "_updateFlagFromNumber",
            value: function(t) {
              var n = t.indexOf("+"), e = n ? t.substring(n) : t, s = this.selectedCountryData.dialCode, a = s === "1";
              e && a && e.charAt(0) !== "+" && (e.charAt(0) !== "1" && (e = "1".concat(e)), e = "+".concat(e)), this.options.separateDialCode && s && e.charAt(0) !== "+" && (e = "+".concat(s).concat(e));
              var c = this._getDialCode(e, !0), l = this._getNumeric(e), u = null;
              if (c) {
                var b = this.countryCodes[this._getNumeric(c)], C = b.indexOf(this.selectedCountryData.iso2) !== -1 && l.length <= c.length - 1, x = s === "1" && this._isRegionlessNanp(l);
                if (!x && !C) {
                  for (var y = 0; y < b.length; y++)
                    if (b[y]) {
                      u = b[y];
                      break;
                    }
                }
              } else
                e.charAt(0) === "+" && l.length ? u = "" : (!e || e === "+") && (u = this.defaultCountry);
              return u !== null ? this._setFlag(u) : !1;
            }
          }, {
            key: "_isRegionlessNanp",
            value: function(t) {
              var n = this._getNumeric(t);
              if (n.charAt(0) === "1") {
                var e = n.substr(1, 3);
                return E.indexOf(e) !== -1;
              }
              return !1;
            }
          }, {
            key: "_highlightListItem",
            value: function(t, n) {
              var e = this.highlightedItem;
              e && e.classList.remove("iti__highlight"), this.highlightedItem = t, this.highlightedItem.classList.add("iti__highlight"), this.selectedFlag.setAttribute("aria-activedescendant", t.getAttribute("id")), n && this.highlightedItem.focus();
            }
          }, {
            key: "_getCountryData",
            value: function(t, n, e) {
              for (var s = n ? r : this.countries, a = 0; a < s.length; a++)
                if (s[a].iso2 === t)
                  return s[a];
              if (e)
                return null;
              throw new Error("No country data for '".concat(t, "'"));
            }
          }, {
            key: "_setFlag",
            value: function(t) {
              var n = this.options, e = n.allowDropdown, s = n.separateDialCode, a = n.showFlags, c = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
              if (this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), a && this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(t)), this._setSelectedCountryFlagTitleAttribute(t, s), s) {
                var l = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                this.selectedDialCode.innerHTML = l;
                var u = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                this.isRTL ? this.telInput.style.paddingRight = "".concat(u + 6, "px") : this.telInput.style.paddingLeft = "".concat(u + 6, "px");
              }
              if (this._updatePlaceholder(), e) {
                var b = this.activeItem;
                if (b && (b.classList.remove("iti__active"), b.setAttribute("aria-selected", "false")), t) {
                  var C = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t));
                  C.setAttribute("aria-selected", "true"), C.classList.add("iti__active"), this.activeItem = C;
                }
              }
              return c.iso2 !== t;
            }
          }, {
            key: "_setSelectedCountryFlagTitleAttribute",
            value: function(t, n) {
              if (this.selectedFlag) {
                var e;
                t && !n ? e = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : t ? e = this.selectedCountryData.name : e = "Unknown", this.selectedFlag.setAttribute("title", e);
              }
            }
          }, {
            key: "_getHiddenSelectedFlagWidth",
            value: function() {
              var t = this.telInput.parentNode.cloneNode();
              t.style.visibility = "hidden", document.body.appendChild(t);
              var n = this.flagsContainer.cloneNode();
              t.appendChild(n);
              var e = this.selectedFlag.cloneNode(!0);
              n.appendChild(e);
              var s = e.offsetWidth;
              return t.parentNode.removeChild(t), s;
            }
          }, {
            key: "_updatePlaceholder",
            value: function() {
              var t = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
              if (window.intlTelInputUtils && t) {
                var n = intlTelInputUtils.numberType[this.options.placeholderNumberType], e = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, n) : "";
                e = this._beforeSetNumber(e), typeof this.options.customPlaceholder == "function" && (e = this.options.customPlaceholder(e, this.selectedCountryData)), this.telInput.setAttribute("placeholder", e);
              }
            }
          }, {
            key: "_selectListItem",
            value: function(t) {
              var n = this._setFlag(t.getAttribute("data-country-code"));
              this._closeDropdown(), this._updateDialCode(t.getAttribute("data-dial-code")), this.telInput.focus();
              var e = this.telInput.value.length;
              this.telInput.setSelectionRange(e, e), n && this._triggerCountryChange();
            }
          }, {
            key: "_closeDropdown",
            value: function() {
              this.dropdownContent.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.selectedFlag.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
            }
          }, {
            key: "_scrollTo",
            value: function(t, n) {
              var e = this.dropdownContent, s = window.pageYOffset || document.documentElement.scrollTop, a = e.offsetHeight, c = e.getBoundingClientRect().top + s, l = c + a, u = t.offsetHeight, b = t.getBoundingClientRect().top + s, C = b + u, x = b - c + e.scrollTop, y = a / 2 - u / 2;
              if (b < c)
                n && (x -= y), e.scrollTop = x;
              else if (C > l) {
                n && (x += y);
                var P = a - u;
                e.scrollTop = x - P;
              }
            }
          }, {
            key: "_updateDialCode",
            value: function(t) {
              var n = this.telInput.value, e = "+".concat(t), s;
              if (n.charAt(0) === "+") {
                var a = this._getDialCode(n);
                a ? s = n.replace(a, e) : s = e, this.telInput.value = s;
              } else
                this.options.autoInsertDialCode && (n ? s = e + n : s = e, this.telInput.value = s);
            }
          }, {
            key: "_getDialCode",
            value: function(t, n) {
              var e = "";
              if (t.charAt(0) === "+")
                for (var s = "", a = 0; a < t.length; a++) {
                  var c = t.charAt(a);
                  if (!isNaN(parseInt(c, 10))) {
                    if (s += c, n)
                      this.countryCodes[s] && (e = t.substr(0, a + 1));
                    else if (this.dialCodes[s]) {
                      e = t.substr(0, a + 1);
                      break;
                    }
                    if (s.length === this.countryCodeMaxLen)
                      break;
                  }
                }
              return e;
            }
          }, {
            key: "_getFullNumber",
            value: function() {
              var t = this.telInput.value.trim(), n = this.selectedCountryData.dialCode, e, s = this._getNumeric(t);
              return this.options.separateDialCode && t.charAt(0) !== "+" && n && s ? e = "+".concat(n) : e = "", e + t;
            }
          }, {
            key: "_beforeSetNumber",
            value: function(t) {
              var n = t;
              if (this.options.separateDialCode) {
                var e = this._getDialCode(n);
                if (e) {
                  e = "+".concat(this.selectedCountryData.dialCode);
                  var s = n[e.length] === " " || n[e.length] === "-" ? e.length + 1 : e.length;
                  n = n.substr(s);
                }
              }
              return this._cap(n);
            }
          }, {
            key: "_triggerCountryChange",
            value: function() {
              this._trigger("countrychange");
            }
          }, {
            key: "handleAutoCountry",
            value: function() {
              this.options.initialCountry === "auto" && (this.defaultCountry = window.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
            }
          }, {
            key: "handleUtils",
            value: function() {
              window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this._updatePlaceholder()), this.resolveUtilsScriptPromise();
            }
          }, {
            key: "destroy",
            value: function() {
              var t = this.telInput.form;
              if (this.options.allowDropdown) {
                this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                var n = this._getClosestLabel();
                n && n.removeEventListener("click", this._handleLabelClick);
              }
              this.hiddenInput && t && t.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoInsertDialCode && (t && t.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("keyup", this._handleKeyupEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
              var e = this.telInput.parentNode;
              e.parentNode.insertBefore(this.telInput, e), e.parentNode.removeChild(e), delete window.intlTelInputGlobals.instances[this.id];
            }
          }, {
            key: "getExtension",
            value: function() {
              return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : "";
            }
          }, {
            key: "getNumber",
            value: function(t) {
              if (window.intlTelInputUtils) {
                var n = this.selectedCountryData.iso2;
                return intlTelInputUtils.formatNumber(this._getFullNumber(), n, t);
              }
              return "";
            }
          }, {
            key: "getNumberType",
            value: function() {
              return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99;
            }
          }, {
            key: "getSelectedCountryData",
            value: function() {
              return this.selectedCountryData;
            }
          }, {
            key: "getValidationError",
            value: function() {
              if (window.intlTelInputUtils) {
                var t = this.selectedCountryData.iso2;
                return intlTelInputUtils.getValidationError(this._getFullNumber(), t);
              }
              return -99;
            }
          }, {
            key: "isValidNumber",
            value: function() {
              var t = this._getFullNumber().trim();
              return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, this.selectedCountryData.iso2) : null;
            }
          }, {
            key: "isPossibleNumber",
            value: function() {
              var t = this._getFullNumber().trim();
              return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(t, this.selectedCountryData.iso2) : null;
            }
          }, {
            key: "setCountry",
            value: function(t) {
              var n = t.toLowerCase();
              this.selectedCountryData.iso2 !== n && (this._setFlag(n), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
            }
          }, {
            key: "setNumber",
            value: function(t) {
              var n = this._updateFlagFromNumber(t);
              this._updateValFromNumber(t), n && this._triggerCountryChange();
            }
          }, {
            key: "setPlaceholderNumberType",
            value: function(t) {
              this.options.placeholderNumberType = t, this._updatePlaceholder();
            }
          }]), d;
        }();
        _.getCountryData = function() {
          return r;
        };
        var W = function(o, t, n) {
          var e = document.createElement("script");
          e.onload = function() {
            D("handleUtils"), t && t();
          }, e.onerror = function() {
            D("rejectUtilsScriptPromise"), n && n();
          }, e.className = "iti-load-utils", e.async = !0, e.src = o, document.body.appendChild(e);
        };
        return _.loadUtils = function(d) {
          if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
            if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, typeof Promise < "u")
              return new Promise(function(o, t) {
                return W(d, o, t);
              });
            W(d);
          }
          return null;
        }, _.defaults = T, _.version = "18.5.3", function(d, o) {
          var t = new dt(d, o);
          return t._init(), d.setAttribute("data-intl-tel-input-id", t.id), window.intlTelInputGlobals.instances[t.id] = t, t;
        };
      }();
    });
  })(j);
  var $ = j.exports, tt = $;
  const nt = /* @__PURE__ */ J(tt);
  class et {
    constructor({ container: i, position: r }) {
      this.container = i, this.position = r || "beforeend", this.init();
    }
    init() {
      this.render();
    }
    render() {
      var p;
      (p = this.container) == null || p.insertAdjacentHTML(
        this.position,
        /* HTML */
        `<form class="crs-popup-form" action="">
      <div class="input-wrap">
        <input
          class="input-field"
          id="popup_input_name"
          type="text"
          data-field="name"
          name="name"
          data-type="text"
          placeholder="Ваше імʼя*"
          autofocus="true"
        />
      </div>
      <div class="input-wrap">
        <input class="input-field" id="popup_input_phone" type="tel" name="phone" />
      </div>
      <button type="submit">
        <span class="desktop">Записатись</span><span class="mobile">Записатись на безоплатний урок</span>
      </button>
    </form>`
      ), this.submitForm();
      const r = document.querySelector("#popup_input_phone");
      if (r) {
        const h = nt(r, {
          initialCountry: "ua",
          // @ts-ignore
          countryOrder: ["ua"],
          countrySearch: !1,
          nationalMode: !0,
          showFlags: !0,
          useFullscreenPopup: !1
        }), v = () => {
          if (r.value) {
            const { add: I, remove: k } = this.errorToInput(r);
            h.isValidNumber() || I("Номер телефону невірний!"), h.isValidNumber() && (r.dataset.value = h.getNumber(), k());
          }
        }, m = document.querySelector("#popup_input_name"), w = (I) => {
          const k = I.target.value;
          if (k) {
            const { add: B, remove: _ } = this.errorToInput(m);
            _(), /\d/.test(k) ? B("Ім’я невірне") : k.trim() === "" ? B("Ім’я обов’язкове") : k.length < 2 ? B("Поле повинно містити мінімум 2 символи") : _();
          }
        };
        r.addEventListener("input", v), r.addEventListener("change", () => {
        }), m == null || m.addEventListener("input", w), m.addEventListener("change", () => {
        });
        const A = document.querySelector('.crs-popup-form button[type="submit"]');
        A && A.addEventListener("click", () => {
        });
      }
    }
    errorToInput(i) {
      const r = document.createElement("div");
      return {
        add: (p) => {
          var h;
          this.removeErrors(i), i.classList.add("is-invalid"), r.style.color = "rgb(202, 56, 31)", r.classList.add("is-label-invalid", "just-validate-error-label"), r.textContent = p, (h = i.parentElement) == null || h.appendChild(r);
        },
        remove: () => {
          i.classList.remove("is-invalid"), this.removeErrors(i);
        }
      };
    }
    removeErrors(i) {
      var p;
      const r = (p = i.parentElement) == null ? void 0 : p.querySelectorAll(".just-validate-error-label");
      r == null || r.forEach((h) => h.remove());
    }
    submitForm() {
      const i = document.querySelector(".crs-contact_popup__form form");
      i == null || i.addEventListener("submit", async (r) => {
        r.preventDefault();
        const p = i.querySelector("#popup_input_name"), h = i.querySelector("#popup_input_phone");
        if (!p || !h)
          return;
        const v = p == null ? void 0 : p.value, m = h == null ? void 0 : h.dataset.value, { add: w, remove: A } = this.errorToInput(p), { add: I, remove: k } = this.errorToInput(h);
        let B = !0;
        if ((!v || v.trim() === "") && (w("Ім’я обов’язкове"), B = !1), (!m || m.trim() === "") && (h == null || h.classList.add("is-invalid"), I("Номер телефону невірний!"), B = !1), !B)
          return;
        const _ = i.querySelector('button[type="submit"]');
        _ == null || _.setAttribute("disabled", "true");
        try {
          if ((await (await fetch("https://courses-all.goiteens.com/v-gl-v3/crm/lead.php", {
            method: "POST",
            body: JSON.stringify({
              name: v,
              phone: m,
              SiteURL: "https://courses-all.goiteens.com/v-gl-v3/",
              product_name: "GoITeens_Courses_All_GL_v3"
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })).json()).Deal_ID) {
            _ == null || _.removeAttribute("disabled"), i.reset();
            const E = i.closest("dialog");
            E && E.close(), location.href = "https://courses-all.goiteens.com/v-gl/success/";
          }
        } catch (M) {
          console.log("error", M);
        }
      });
    }
  }
  const it = `.crs-contact_popup {
  --primary-color: #5f3ed1;
  --secondary-color: #3c1ea6;
  --popup-bg: #fff;
  --form-bg: #fff;
  max-width: 1140px;
  border: none;
  border-radius: 40px;
  background: var(--popup-bg);
}

.crs-contact_popup[data-theme='green'] {
  --popup-bg: #e7f8ed;
  --form-bg: #ceefda;
}

.crs-contact_popup[data-theme='pink'] {
  --popup-bg: #f7e7f2;
  --form-bg: #ebd4e4;
}

.crs-contact_popup[data-theme='blue'] {
  --popup-bg: #e5e9f5;
  --form-bg: #ccd9f8;
}
.crs-contact_popup[data-theme='lavender'] {
  --popup-bg: #eeebf6;
  --form-bg: #e0d7f9;
}

body:has(.crs-contact_popup[open]) {
  overflow: hidden;
}
.crs-contact_popup::backdrop {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%);
  backdrop-filter: blur(4px);
}

.crs-contact_popup__close {
  position: absolute;
  top: 35px;
  right: 35px;
  width: 40px;
  height: 40px;
  z-index: 10;

  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="%231E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 15L15 25" stroke="%231E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15L25 25" stroke="%231E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  outline: none;
}

.crs-contact_popup__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  column-gap: 76px;
  padding: 44px 36px;
}

.crs-contact_popup__bg {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--form-bg);
  z-index: -2;
}
.crs-contact_popup__title {
  position: relative;
  margin-top: 58px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-family: 'IBMPlexMono';
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
}


.crs-contact_popup__title::after {
  content: '';
  position: absolute;
  top: 47px;
  right: -64px;
  width: 64px;
  height: 64px;
  background-size: contain;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none"><path d="M5.72343 25.056C17.0539 21.2035 29.4506 22.0091 40.1872 27.2956C50.9237 32.5821 59.1209 41.9167 62.9759 53.2463L68.9049 41.1745C69.1544 40.7258 69.5669 40.3903 70.057 40.2373C70.5471 40.0844 71.0773 40.1258 71.5377 40.3529C71.9981 40.5801 72.3535 40.9756 72.5304 41.4576C72.7073 41.9395 72.692 42.4711 72.4878 42.9421L64.4328 59.3424C64.3171 59.5784 64.156 59.7893 63.9587 59.9629C63.7614 60.1366 63.5318 60.2697 63.2831 60.3546C63.0343 60.4395 62.7713 60.4745 62.509 60.4576C62.2467 60.4408 61.9903 60.3724 61.7545 60.2564L45.3541 52.2015C45.1183 52.0856 44.9075 51.9244 44.7339 51.7271C44.5603 51.5298 44.4273 51.3003 44.3424 51.0516C44.2576 50.8029 44.2225 50.5399 44.2393 50.2776C44.256 50.0154 44.3243 49.759 44.4402 49.5231C44.556 49.2872 44.7172 49.0765 44.9145 48.9029C45.1118 48.7293 45.3413 48.5963 45.59 48.5114C45.8387 48.4265 46.1017 48.3915 46.364 48.4083C46.6262 48.425 46.8826 48.4933 47.1185 48.6091L59.1903 54.5381C55.6779 44.2125 48.2081 35.7048 38.4238 30.886C28.6394 26.0671 17.3417 25.3318 7.01528 28.8417C6.51327 29.013 5.96377 28.9778 5.48766 28.744C5.01155 28.5102 4.64784 28.0968 4.47653 27.5948C4.30522 27.0928 4.34035 26.5433 4.57419 26.0671C4.80802 25.591 5.22142 25.2273 5.72343 25.056Z" fill="%235F3ED1"/></svg>');
}

.crs-contact_popup__title span {
  color: var(--primary-color);
}
.crs-contact_popup__description {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin-top: 24px;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-contact_popup__content {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  margin-top: 24px;
}

.crs-contact_popup__content-title {
  font-family: 'IBMPlexMono';
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

.crs-contact_popup__content-list {
  display: grid;
  gap: 32px;
  margin-top: 24px;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.crs-contact_popup__content-list li {
  position: relative;
  counter-increment: list-counter;
  padding-left: 48px;
}

.crs-contact_popup__content-list li::before {
  content: counter(list-counter);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--form-bg);
  background: var(--form-bg);
  color: var(--primary-color);
  font-family: 'IBMPlexMono';
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
}

.crs-contact_popup__content-list li:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 13px;
  top: 38px;
  width: 4px;
  height: calc(100% - 14px);
  border-radius: 111px;
  background: var(--form-bg);
}
.crs-contact_popup__form {
  grid-column: 2 / 3;
  grid-row: 1 / 4;
}

.crs-form__wrap {
  position: relative;
  width: 510px;
  margin-top: 166px;
  padding: 24px;
  border-radius: 40px;
  background: var(--form-bg);
}

.crs-form__wrap::after {
  content: '';
  position: absolute;
  top: -190px;
  left: 0;
  width: 445px;
  height: 277px;
  background-image: url(https://conversionratestore.github.io/projects/goiteens/1st_hypothesis/img/family.webp);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: -1;
}
.crs-form__title {
  color: var(--primary-color);
  text-align: center;
  font-family: 'IBMPlexMono';
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
}

.crs-form__wrap form {
  margin-top: 18px;
  display: grid;
  gap: 24px;
}
.crs-form .input-wrap {
  width: 100%;
}
.crs-form input {
  width: 100%;
  height: 68px;
  border: 2px solid var(--primary-color);
}
.crs-form button[type='submit'] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  padding-block: 24px;
  border-radius: 64px;
  background: var(--primary-color);
  color: #fff;
  text-align: center;
  font-family: 'IBMPlexSans';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  transition: 0.3s background linear;
}

.crs-form button[type='submit'] .mobile {
  display: none;
}

.crs-form button[type='submit']:hover {
  background: var(--primary-color);
}

.crs-form button[type='submit'][disabled] {
  background: gray;
  color: #000;
}
.crs-contact_popup__branding {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-inline: 54px;
}

.crs-contact_popup__branding img {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  object-fit: cover;
}

.crs-contact_popup__branding div {
  color: var(--primary-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

@media (max-width: 992px) {
  .crs-contact_popup {
    max-width: 360px;
    border-radius: 24px;
    background-size: 265px 563px;
    background-position: top -24px right -81px;
  }

  .crs-contact_popup__close {
    top: 10px;
    right: 12px;
    width: 32px;
    height: 32px;
  }

  .crs-contact_popup__wrap {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    column-gap: 0;
    padding: 24px 16px;
  }

  .crs-contact_popup__title {
    margin-top: 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }

  .crs-contact_popup__title::after {
    display: none;
  }
  .crs-contact_popup__description {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-contact_popup__form {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .crs-form__wrap {
    margin-top: 141px;
    width: 100%;
    padding: 16px;
  }

  .crs-form__wrap::after {
    top: -117px;
    width: 290px;
    height: 173px;
  }
  .crs-form__title {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }
  .crs-form__wrap form {
    gap: 16px;
  }
  .crs-form__wrap :is(input, button[type='submit']) {
    height: 52px;
  }
  .crs-form__wrap button[type='submit'] {
    padding-block: 24px;
    font-size: 16px;
    line-height: 24px;
  }

  .crs-form button[type='submit'] .mobile {
    display: inline;
  }

  .crs-form button[type='submit'] .desktop {
    display: none;
  }

  .crs-contact_popup__branding {
    padding-inline: 0;
  }

  .crs-contact_popup__branding img {
    width: 44px;
    height: 44px;
  }

  .crs-contact_popup__branding div {
    font-size: 14px;
    line-height: 20px;
  }
  .crs-contact_popup__content {
    grid-row: 4 / 5;
  }

  .crs-contact_popup__content-title {
    font-size: 18px;
    line-height: 28px;
  }

  .crs-contact_popup__content-list {
    margin-top: 16px;
  }
}
`;
  class N {
    constructor() {
      console.log("ContactPopup"), this.popup = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.eventListeners();
    }
    render() {
      const i = Math.floor(Math.random() * 1e3), r = (
        /* HTML */
        `<dialog class="crs-contact_popup" data-id="${i}">
      <button type="button" class="crs-contact_popup__close"></button>
      <div class="crs-contact_popup__wrap"></div>
      <div class="crs-contact_popup__bg">${V}</div>
    </dialog>`
      );
      document.body.insertAdjacentHTML("beforeend", r), this.popup = document.querySelector('.crs-contact_popup[data-id="' + i + '"]');
    }
    eventListeners() {
      var r, p;
      console.log("eventListeners");
      const i = (r = this.popup) == null ? void 0 : r.querySelector(".crs-contact_popup__close");
      i == null || i.addEventListener("click", () => {
        console.log("close"), this.close();
      }), (p = this.popup) == null || p.addEventListener("click", (h) => {
        h.target === this.popup && this.close();
      });
    }
    open(i) {
      var p;
      const r = q[i];
      if (!r) {
        console.log("Index is not found");
        return;
      }
      sessionStorage.setItem("contact-popup-title", r.title.replace(/<[^>]*>?/gm, "")), this.popup && (this.updatePopupContent(r), (p = this.popup) == null || p.setAttribute("data-index", i.toString()), L(
        "exp_hyp_1__popup_2__view",
        "Секція на екрані",
        "view",
        `Попап. Крок 2. ${r.title.replace(/<[^>]*>?/gm, "")}`
      ), this.popup.showModal());
    }
    close() {
      if (this.popup) {
        const i = sessionStorage.getItem("contact-popup-title");
        this.popup.close();
        const r = this.popup.querySelector(".crs-contact_popup__wrap");
        r && (r.innerHTML = ""), L("exp_hyp_1__popup_2__close", "Закриття попапу", "click", `Попап. Крок 2. ${i}`), sessionStorage.removeItem("contact-popup-title");
      }
    }
    updatePopupContent(i) {
      var h, v;
      if (!i) {
        console.log("Data is not found");
        return;
      }
      const r = (
        /* HTML */
        ` <h3 class="crs-contact_popup__title">${i.title}</h3>
      <div class="crs-contact_popup__description">${i.description}</div>
      <div class="crs-contact_popup__content">
        <h4 class="crs-contact_popup__content-title">Як проходить урок:</h4>
        <ol class="crs-contact_popup__content-list">
          ${i.content.map((m) => `<li>${m}</li>`).join("")}
        </ol>
      </div>

      <div class="crs-contact_popup__form crs-form">
        <div class="crs-form__wrap">
          <h4 class="crs-form__title">
            Отримати <br class="mobile" />
            безоплатний урок
          </h4>

          <div class="crs-form__container"></div>
          <div class="crs-contact_popup__branding">
            <img
              src="${g}/img/award_boty_2023.svg"
              alt="Business of the year 2023"
              width="64"
              height="64"
              load="async"
            />
            <div>Найкращий освітній бізнес у сфері навчання для дітей та підлітків</div>
          </div>
        </div>
      </div>`
      ), p = (h = this.popup) == null ? void 0 : h.querySelector(".crs-contact_popup__wrap");
      p && ((v = this.popup) == null || v.setAttribute("data-theme", i.theme), p.innerHTML = r, new et({ container: document.querySelector(".crs-form__container") }));
    }
    initStyles() {
      const i = document.createElement("style");
      i.textContent = it, document.head.insertAdjacentElement("beforeend", i);
    }
  }
  const ot = {
    1: {
      id: 1,
      topIcon: `${g}/img/info_popup/1/top-image.webp`,
      title: (
        /* HTML */
        "Підготуйте дитину до високооплачуваної професії в IT "
      ),
      description: "Хочете дати своїй дитині інструменти для успіху в стрімко змінюваному світі? Ми допоможемо їй здобути необхідні навички для високооплачуваної кар’єри в IT!",
      list: [
        {
          icon: `${g}/img/info_popup/1/content_icons/icon-1.webp`,
          title: "Допоможемо обрати правильний напрямок",
          description: "Ваша дитина познайомиться із сучасними IT-професіями та здобуде основні технічні знання, що відкриють перед нею безмежні можливості в технологічному світі."
        },
        {
          icon: `${g}/img/info_popup/1/content_icons/icon-2.webp`,
          title: "Практичне навчання через реальні проєкти",
          description: "Створюючи ігри, застосунки чи вебсайти, дитина набуде практичних навичок, які стануть основою для її професійного розвитку."
        },
        {
          icon: `${g}/img/info_popup/1/content_icons/icon-3.webp`,
          title: "Перші кроки до кар'єри",
          description: "Ваша дитина розпочне шлях від початківця до junior-спеціаліста в обраному напрямку, створюючи власне портфоліо проектів і впевнено рухаючись до успішної кар'єри в IT."
        }
      ],
      comment: {
        title: "Я знайшов себе у Frontend у GoITeens",
        text: "Тут ми комплексно розвиваємо хард і софт скіли та працюємо в команді над різними проєктами. Цікаво викладена теорія і багато практики на уроках – чудово закріплюють знання та дають можливість опанувати професію.",
        authorName: "Микита",
        authorYear: "12 років",
        authorPhoto: `${g}/img/info_popup/1/ava.webp`,
        quoteIcon: `${g}/img/info_popup/1/quote.webp`
      },
      theme: "green"
    },
    2: {
      id: 2,
      topIcon: `${g}/img/info_popup/2/top-image.webp`,
      title: (
        /* HTML */
        "Навчайся, спілкуйся, знаходь друзів!"
      ),
      description: "У GoITeens діти знаходять однодумців, розвивають комунікацію та будують дружні стосунки через спільні проєкти й активне спілкування в спільноті.",
      list: [
        {
          icon: `${g}/img/info_popup/2/content_icons/icon-1.webp`,
          title: "Розвиток через спілкування",
          description: "Наші учні працюють у командах над спільними проєктами, допомагають одне одному та діляться досвідом. Досвідчені викладачі створюють комфортну атмосферу для кожної дитини."
        },
        {
          icon: `${g}/img/info_popup/2/content_icons/icon-2.webp`,
          title: "Освітні марафони: навчання з однодумцями",
          description: "Наші учні працюють у командах над спільними проєктами, допомагають одне одному та діляться досвідом. Досвідчені викладачі створюють комфортну атмосферу для кожної дитини."
        },
        {
          icon: `${g}/img/info_popup/2/content_icons/icon-3.webp`,
          title: "Ком'юніті студентів: простір для веселощів",
          description: "GoITeens Club — це місце, де підлітки спілкуються, допомагають із завданнями, обговорюють аніме, грають в ігри та весело проводять час у дружній атмосфері."
        }
      ],
      comment: {
        text: "Дитина закінчила перший рік Digital art. Маємо портфоліо з 8 робіт. Цікаве навчання, приємне спілкування. Команда молода, весела. Тільки актуальні знання і програми. Будемо і далі навчатись з Go Iteens",
        authorName: "Катерина Кириленко",
        authorYear: "Мама Микити, 12 років, обрав Frontend",
        authorPhoto: `${g}/img/info_popup/2/ava.webp`,
        quoteIcon: `${g}/img/info_popup/2/quote.webp`
      },
      theme: "pink",
      note: "GoITeens — там, де освіта стає спілкуванням і новими знайомствами!"
    },
    3: {
      id: 3,
      topIcon: `${g}/img/info_popup/3/top-image.webp`,
      title: (
        /* HTML */
        "Спрямуйте захоплення гаджетами у розвиток"
      ),
      description: "Дитина захоплюється іграми чи гаджетами? Направте її інтереси в корисне русло!",
      list: [
        {
          icon: `${g}/img/info_popup/3/content_icons/icon-1.webp`,
          title: "Замість TikTok — час, проведений із користю",
          description: "Дитина навчиться створювати анімації в Scratch та малювати на планшеті, будувати світи в Minecraft, або створювати власні ігри і 3D персонажів в Roblox. Навички, якими ви будете пишатись!"
        },
        {
          icon: `${g}/img/info_popup/3/content_icons/icon-2.webp`,
          title: "Навчання через гру",
          description: "Уроки в Roblox перетворять нудну таблицю множення на цікаву гру. Дитина зможе застосовувати знання у реальних проєктах, розвиваючи креативність та застосування математики в житті."
        },
        {
          icon: `${g}/img/info_popup/3/content_icons/icon-3.webp`,
          title: "Від геймера до розробника ігор",
          description: "Дитина створить три власні ігри, перетворюючи хоббі на навички розробника, які дуже цінуються в світі IT. Наші випускники заробляють на своїх проєктах або отримують пропозиції від IT-компаній."
        }
      ],
      comment: {
        text: " Мені дуже подобається! Це дійсно захоплюючий курс, який надає велику кількість корисної інформації. Зараз я вчусь створювати цікаві та веселі проєкти за допомогою Scratch. Також хочу відзначити великі можливості для творчості, які цей курс надає! Навчатись – це дуже цікаво! Не бійтеся робити щось нове – це весело та круто!",
        authorName: "Серафім Карпань",
        authorYear: "9 років",
        authorPhoto: `${g}/img/info_popup/3/ava.webp`,
        quoteIcon: `${g}/img/info_popup/3/quote.webp`
      },
      theme: "blue"
    },
    4: {
      id: 4,
      topIcon: `${g}/img/info_popup/4/top-image.webp`,
      title: (
        /* HTML */
        "Розвивайте м’які навички, логічне та креативне мислення"
      ),
      description: "Наші програми допоможуть вашій дитині розвинути важливі м’які навички, логічне мислення та креативність, що зробить її успішною не тільки в школі, а й у житті.",
      list: [
        {
          icon: `${g}/img/info_popup/4/content_icons/icon-1.webp`,
          title: "Сприяйте розумовому розвитку вашої дитини",
          description: "Зробіть математику захоплюючою і цікавою завдяки інтерактивному практичному підходу. А блочне програмування і спеціальні техніки допоможуть розвинути у вашій дитині логіку, критичне мислення, концентрацію та пам’ять."
        },
        {
          icon: `${g}/img/info_popup/4/content_icons/icon-2.webp`,
          title: "Креативність, що надихає на навчання",
          description: "Малюючи на планшеті чи створюючи ігри в Scratch, ваша дитина розкриє свій творчий потенціал. Миттєвий результат і радість від творчості природно мотивують її до навчання та експериментів."
        },
        {
          icon: `${g}/img/info_popup/4/content_icons/icon-3.webp`,
          title: "М'які навички для успіху в сучасному світі",
          description: "Курс “Майстерня лідерства” допоможе вашій дитині підвищити самооцінку, навчитися керувати емоціями, організовувати свій час і ефективно взаємодіяти з іншими. Це стане міцною основою для майбутніх досягнень!"
        }
      ],
      comment: {
        text: "Мій син починав зі Scratch в GoITeens. Якщо бути відвертою, то йому дуже сподобалася викладачка… Звернула увагу на викладачів, бо на всім дітям в пубертатному періоді можна довести необхідність таких занять. Хороший викладач — гарна додаткова мотивація. Коли дитина з задоволенням слухає і чує, це 80% успіху.",
        authorName: "Ніна Кравчук",
        authorYear: "Мама Серафіма, 9 років",
        authorPhoto: `${g}/img/info_popup/4/ava.webp`,
        quoteIcon: `${g}/img/info_popup/4/quote.webp`
      },
      theme: "lavender"
    }
  }, st = `.crs-info_popup {
  --primary-color: #5f3ed1;
  --secondary-color: #3c1ea6;
  --popup-bg: #fff;
  --popup-secondary-bg: #fff;
  --popup-bg-color: #fff;
  max-width: 1140px;
  border: none;
  border-radius: 40px;
  background: var(--popup-bg);
}

.crs-info_popup[data-theme='green'] {
  --popup-bg: #e7f8ed;
  --popup-secondary-bg: #ceefda;
  --popup-bg-color: #90e5ae;
}

.crs-info_popup[data-theme='pink'] {
  --popup-bg: #f7e7f2;
  --popup-secondary-bg: #ebd4e4;
  --popup-bg-color: #DBADCC;
}

.crs-info_popup[data-theme='blue'] {
  --popup-bg: #e5e9f5;
  --popup-secondary-bg: #ccd9f8;
  --popup-bg-color: #B5C3E7;
}
.crs-info_popup[data-theme='lavender'] {
  --popup-bg: #eeebf6;
  --popup-secondary-bg: #e0d7f9;
  --popup-bg-color: #C7BCE3;
}

body:has(.crs-info_popup[open]) {
  overflow: hidden;
}
.crs-info_popup::backdrop {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%);
  backdrop-filter: blur(4px);
}

.crs-info_popup__close {
  position: absolute;
  top: 35px;
  right: 35px;
  width: 40px;
  height: 40px;
  z-index: 10;

  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="%231E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 15L15 25" stroke="%231E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15L25 25" stroke="%231E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  outline: none;
}

.crs-info_popup__wrap {
  display: flex;
  justify-content: space-between;
  column-gap: 76px;
}

.crs-info_popup__right,
.crs-info_popup__left {
  padding: 44px 36px;
}
.crs-info_popup__right {
  flex: 1;
  width: 100%;
}

.crs-info_popup__top-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 130px;
  z-index: -1;
}
.crs-info_popup__bg {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--popup-bg-color);
}
.crs-info_popup__title {
  margin-left: 120px;
  position: relative;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-family: 'IBMPlexMono';
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  color: #474747;
}

.crs-info_popup__description {
  margin-top: 24px;
  color: #474747;
  font-family: 'IBMPlexSans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
}

.crs-info_popup__content {
  margin-top: 24px;
}

.crs-info_popup__content-list {
  display: grid;
  gap: 19px;
  margin-top: 24px;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.crs-info_popup__content-list li {
  display: grid;
  grid-template-columns: 41px 1fr;
  gap: 7px 24px;
}

.crs-info_popup__content-icon {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 41px;
  height: 41px;
}

.crs-info_popup__content-title {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  color: #474747;
  font-family: 'IBMPlexMono', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}

.crs-info_popup__content-description {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: #474747;
  font-family: 'IBMPlexSans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-info_popup__left {
  background-color: var(--popup-secondary-bg);
  max-width: 480px;
}

.crs-comment {
  position: relative;
  margin-top: 106px;
  background-color: var(--popup-bg);
  padding: 30px;
  border-radius: 32px;
  z-index: 2;
}


.crs-info_popup__comment-quote {
  position: absolute;
  top: -26px;
  left: 0;
  width: 94px;
  height: 41px;
}

.crs-comment__title {
  margin-bottom: 24px;
  color: #474747;
  font-family: 'IBMPlexSans';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
}

.crs-comment__text {
  color: #474747;
  font-family: 'IBMPlexSans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}

.crs-comment__author {
  margin-top: 27px;
  display: flex;
  gap: 20px;
}

.crs-comment__author-photo {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
}

.crs-comment__author-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.crs-comment__author-info {
  display: grid;
  gap: 6px;
}

.crs-comment__author-name {
  color: #474747;
  font-family: 'IBMPlexMono';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */
}

.crs-comment__author-year {
  color: #474747;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-info_popup__action {
  position: relative;
  margin-top: 24px;
  z-index: 2;
}

.crs-info_popup__action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  border: none;
  border-radius: 64px;
  background: var(--primary-color);
  color: #fff;
  text-align: center;
  font-family: 'IBMPlexSans';
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
}

.crs-info_popup__action-text {
  margin-top: 12px;
  color: var(--primary-color);
  text-align: center;
  font-family: 'IBMPlexSans';
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
}
@media (max-width: 992px) {
  .crs-info_popup {
    max-width: 360px;
    border-radius: 24px;
    background-size: 265px 563px;
    background-position: top -24px right -81px;
  }

  .crs-info_popup__close {
    top: 10px;
    right: 12px;
    width: 32px;
    height: 32px;
  }

  .crs-info_popup__wrap {
    flex-direction: column;
    gap: 24px;
    padding: 0;
  }

  .crs-info_popup__top-image {
    display: none;
  }

  .crs-info_popup__right {
    padding-top: 24px;
    padding-inline: 16px;
  }

  .crs-info_popup__bg {
    top: 144px;
    left: 234px;
    color: var(--popup-secondary-bg);
    z-index: -2;
  }

  .crs-info_popup__bg svg {
    width: 235px;
    height: 408px;
  }
  .crs-info_popup__title {
    margin-left: 0;
    color: #474747;
    font-family: 'IBMPlexMono';
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }

  .crs-info_popup__description {
    margin-top: 12px;
    color: #474747;
    font-family: 'IBMPlexSans';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-info_popup__content-list {
    margin-top: 24px;
  }

  .crs-info_popup__content-list li {
    gap: 12px;
  }
  .crs-info_popup__content-title {
    color: #474747;
    font-family: 'IBMPlexMono';
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  .crs-info_popup__content-description {
    color: #474747;
    font-family: 'IBMPlexSans';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .crs-info_popup__left {
    padding: 16px;
    padding-top: 36px;
  }

  .crs-comment {
    margin-top: 0;
    padding-top: 30px;
  }

  .crs-info_popup__comment-quote {
    top: -24px;
    width: 85px;
    height: 36px;
  }
  .crs-comment__title {
    font-size: 16px;
    line-height: 24px;
  }

  .crs-comment__text {
    font-size: 16px;
    line-height: 24px;
  }

  .crs-comment__author {
    margin-top: 24px;
  }

  .crs-comment__author-photo {
    width: 58px;
    height: 58px;
  }

  .crs-comment__author-name {
    color: #474747;
    font-family: 'IBMPlexMono';
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }

  .crs-comment__author-year {
    color: #474747;
    font-family: 'IBMPlexSans';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-info_popup__action-button {
    height: 52px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-info_popup__action-text {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
  }
}
`;
  class rt {
    constructor() {
      this.popup = null, this.contactPopup = new N(), this.init();
    }
    init() {
      this.initStyles(), this.render(), this.eventListeners();
    }
    render() {
      const i = (
        /* HTML */
        `<dialog class="crs-info_popup">
      <button type="button" class="crs-info_popup__close"></button>
      <div class="crs-info_popup__wrap"></div>
      <div class="crs-info_popup__bg">${K}</div>
    </dialog>`
      );
      document.body.insertAdjacentHTML("beforeend", i), this.popup = document.querySelector(".crs-info_popup");
    }
    eventListeners() {
      var r, p;
      const i = (r = this.popup) == null ? void 0 : r.querySelector(".crs-info_popup__close");
      i == null || i.addEventListener("click", () => {
        this.close();
      }), (p = this.popup) == null || p.addEventListener("click", (h) => {
        h.target === this.popup && this.close();
      });
    }
    open(i) {
      var p;
      const r = ot[i];
      if (!r) {
        console.log("Index is not found");
        return;
      }
      sessionStorage.setItem("info-popup-title", r.title.replace(/<[^>]*>?/gm, "")), this.popup && (this.updatePopupContent(r), (p = this.popup) == null || p.setAttribute("data-index", i.toString()), this.popup.showModal(), L("exp_hyp_1__popup_1__view", "Секція на екрані", "view", `Попап. Крок 1. ${r.title}`));
    }
    close() {
      if (this.popup) {
        const i = sessionStorage.getItem("info-popup-title");
        this.popup.close();
        const r = this.popup.querySelector(".crs-info_popup__wrap");
        r && (r.innerHTML = ""), L("exp_hyp_1__popup_1__close", "Закриття попапу", "click", `Попап. Крок 1. ${i}`), sessionStorage.removeItem("info-popup-title");
      }
    }
    updatePopupContent(i) {
      var h, v;
      if (!i) {
        console.log("Data is not found");
        return;
      }
      const r = (
        /* HTML */
        ` <div class="crs-info_popup__right">
        <div class="crs-info_popup__top-image">
          <img src="${i.topIcon}" alt="" width="130" height="119" loading="lazy" />
        </div>
        <h3 class="crs-info_popup__title">${i.title}</h3>
        <div class="crs-info_popup__description">${i.description}</div>
        <div class="crs-info_popup__content">
          <ol class="crs-info_popup__content-list">
            ${i.list.map(
          (m) => (
            /* HTML */
            `<li>
                    <div class="crs-info_popup__content-icon">
                      <img src="${m.icon}" alt="${m.title}" width="41" height="41" loading="lazy" />
                    </div>

                    <h4 class="crs-info_popup__content-title">${m.title}</h4>
                    <div class="crs-info_popup__content-description">${m.description}</div>
                  </li>`
          )
        ).join("")}
          </ol>
        </div>
      </div>

      <div class="crs-info_popup__left">
        <div class="crs-info_popup__comment crs-comment">
          <div class="crs-info_popup__comment-quote"><img src="${i.comment.quoteIcon}" alt="" width="94" height="41" loading="lazy" /></div>
          ${i.comment.title ? `<h4 class="crs-comment__title">${i.comment.title}</h4>` : ""}
          <div class="crs-comment__text">${i.comment.text}</div>
          <div class="crs-comment__author">
            <div class="crs-comment__author-photo">
              <img
                src="${i.comment.authorPhoto}"
                alt="${i.comment.authorName}"
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
            <div class="crs-comment__author-info">
              <div class="crs-comment__author-name">${i.comment.authorName}</div>
              <div class="crs-comment__author-year">${i.comment.authorYear}</div>
            </div>
          </div>
        </div>

        <div class="crs-info_popup__action">
          <button type="button" class="crs-info_popup__action-button" data-contact-popup="${i.id}">
            Записатись на безоплатний урок
          </button>
          <div class="crs-info_popup__action-text">Дізнайтесь про професії які ваша дитина може вивчати вже зараз</div>
        </div>
      </div>`
      ), p = (h = this.popup) == null ? void 0 : h.querySelector(".crs-info_popup__wrap");
      if (p) {
        (v = this.popup) == null || v.setAttribute("data-theme", i.theme), p.innerHTML = r;
        const m = document.querySelector(".crs-info_popup__action-button");
        m == null || m.addEventListener("click", () => {
          var A;
          const w = (A = this.popup) == null ? void 0 : A.getAttribute("data-index");
          w && (this.close(), L(
            "exp_hyp_1__popup_1__click",
            "Записатися на безоплатний урок",
            "click",
            `Попап. Крок 1. ${i.title}`
          ), this.contactPopup.open(Number(w)));
        });
      }
    }
    initStyles() {
      const i = document.createElement("style");
      i.textContent = st, document.head.insertAdjacentElement("beforeend", i);
    }
  }
  const at = `.crs-proposition {
  position: relative;
  padding: 60px 80px;
  padding-bottom: 0;
  background: #f6ca53;
  margin-bottom: 140px;
}

.crs-proposition__bg {
  position: absolute;
  top: -42px;
  left: 40px;
}
.crs-proposition::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 75px;
  background-color: #fff;
  display: block;
}

.crs-proposition .container {
  padding: 0;
}
.crs-proposition__wrap {
  display: flex;
  gap: 40px;
}

.crs-proposition__left {
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  width: 605px;
  z-index: 2;
}

.crs-proposition__title {
  color: #474747;
  font-family: 'IBMPlexMono';
  font-size: 32px;
  font-weight: 600;
  line-height: 44px;
}

.crs-proposition__text {
  margin-top: 25px;
  color: #474747;
  font-family: 'IBMPlexSans';
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}

.crs-proposition__actions {
  margin-top: 25px;
}

.crs-proposition__action {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  width: 100%;
  padding: 24px;
  border-radius: 64px;
  background: #5f3ed1;
  color: #fff;
  text-align: center;
  font-family: 'IBMPlexSans';
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  transition-duration: 0.3s;
  transition-timing-function: linear;
}

.crs-proposition__action:hover {
  background: #8160e0;
}

.crs-proposition__blocks {
  margin-top: 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: calc(40px - 12px);
  z-index: 1;
}

.crs-proposition__block {
  --block-bg: #e7f8ed;
  --block-action-bg: #009000;
  display: flex;
  gap: 24px;
  flex-direction: column;
  flex-shrink: 0;
  width: calc(290px + 12px);
  height: calc(270px + 12px);
  border-radius: 40px;
  padding: 20px;
  padding-top: 30px;
  border: 6px solid #f6ca53;
  background: var(--block-bg);
}

.crs-proposition__block[data-block='1'] {
  --block-bg: #e7f8ed;
  --block-action-bg: #009000;
}

.crs-proposition__block[data-block='2'] {
  --block-bg: #f7e7f2;
  --block-action-bg: #8d495b;
}

.crs-proposition__block[data-block='3'] {
  --block-bg: #f8f5ec;
  --block-action-bg: #2d4990;
}

.crs-proposition__block[data-block='4'] {
  --block-bg: #eeebf6;
  --block-action-bg: #755ec7;
}

.crs-proposition__block-text {
  color: #474747;
  font-family: 'IBMPlexMono';
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

.crs-proposition__block-action {
  margin-top: auto;
  display: flex;
  width: max-content;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding-inline: 16px;
  border-radius: 50px;
  background: var(--block-action-bg);
  color: #fff;

  font-family: 'IBMPlexMono';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  transition-duration: .3s;
    transition-timing-function: linear;
}

.crs-proposition__block-action:hover {
  filter: brightness(1.2);
}

@media (max-width: 1280px) {
  .crs-proposition {
    padding: 24px 20px;
  }

  .crs-proposition__bg {
    top: -20px;
    left: 0;
    width: 187px;
    height: 324px;
  }
  .crs-proposition::after {
    display: none;
  }

  .crs-proposition__wrap {
    flex-direction: column;
  }

  .crs-proposition__left {
    width: 100%;
  }

  .crs-proposition__title {
    font-size: 24px;
    font-weight: 500;
    line-height: 28.8px;
  }

  .crs-proposition__text {
    margin-top: 16px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
  }

  .crs-proposition__action {
    height: 52px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .crs-proposition__blocks {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .crs-proposition__block {
    gap: 16px;
    border: none;
    width: 100%;
    max-width: 335px;
    height: 262px;
  }

  .crs-proposition__block-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
  }
}
`;
  class lt {
    constructor({ container: i, position: r }) {
      this.container = i, this.position = r || "beforeend", this.infoPopup = new rt(), this.contactPopup = new N(), this.init();
    }
    init() {
      if (!this.container) {
        console.log("Container is not found");
        return;
      }
      this.initStyles(), this.render(), this.eventListeners();
    }
    render() {
      const i = (
        /* HTML */
        `<section class="crs-proposition">
      <div class="container">
        <div class="crs-proposition__wrap">
          <div class="crs-proposition__left">
            <img class="crs-proposition__image" src="${g}/img/goit-main.webp" width="605" height="561" loading="lazy" />
          </div>
          <div class="crs-proposition__right">
            <h2 class="crs-proposition__title">Розкрийте потенціал вашої дитини у світі сучасних технологій</h2>
            <div class="crs-proposition__text">
              Goiteens — це IT-академія для дітей, яка перетворює захоплення комп’ютерами та гаджетами на перспективні
              навички. Ми допомагаємо дітям розвивати творчість, навчатися корисним технологіям і крок за кроком
              готуватися до успішної кар’єри в сучасному світі IT.
            </div>
            <div class="crs-proposition__actions">
              <button class="crs-proposition__action">Записатись на безоплатний урок</button>
            </div>
          </div>
        </div>
        <div class="crs-proposition__blocks">
          <div class="crs-proposition__block" data-block="1">
            <div class="crs-proposition__block-icon">
              <img src="${g}/img/1.webp" alt="" width="44" height="44" loading="lazy" />
            </div>
            <div class="crs-proposition__block-text">Підготуйте дитину до високооплачуваної професії в IT</div>
            <button class="crs-proposition__block-action" data-info-popup="1">Докладніше</button>
          </div>
          <div class="crs-proposition__block" data-block="2">
            <div class="crs-proposition__block-icon">
              <img src="${g}/img/2.webp" alt="" width="44" height="44" loading="lazy" />
            </div>

            <div class="crs-proposition__block-text">Навчайся, спілкуйся, знаходь друзів!</div>
            <button class="crs-proposition__block-action" data-info-popup="2">Докладніше</button>
          </div>
          <div class="crs-proposition__block" data-block="3">
            <div class="crs-proposition__block-icon">
              <img src="${g}/img/3.webp" alt="" width="44" height="44" loading="lazy" />
            </div>

            <div class="crs-proposition__block-text">Спрямуйте захоплення гаджетами у розвиток</div>
            <button class="crs-proposition__block-action" data-info-popup="3">Докладніше</button>
          </div>
          <div class="crs-proposition__block" data-block="4">
            <div class="crs-proposition__block-icon">
              <img src="${g}/img/4.webp" alt="" width="44" height="44" loading="lazy" />
            </div>

            <div class="crs-proposition__block-text">Розвивайте м’які навички, логічне та креативне мислення</div>
            <button class="crs-proposition__block-action" data-info-popup="4">Докладніше</button>
          </div>
        </div>
      </div>
      <div class="crs-proposition__bg">
        <img src="${g}/img/main-bg.svg" alt="" width="377" height="652" loading="lazy" />
      </div>
    </section>`
      );
      this.container.insertAdjacentHTML(this.position, i), z(
        ".crs-proposition",
        "exp_hyp_1__new_section__view",
        "Секція на екрані",
        "Розкрийте потенціал вашої дитини у світі сучасних технологій"
      ), z(
        ".crs-proposition__blocks",
        "exp_hyp_1__4_cards__view",
        "Секція на екрані",
        "Ряд з чотирьох кнопок"
      );
    }
    eventListeners() {
      document.querySelectorAll(".crs-proposition__block-action").forEach((p) => {
        p.addEventListener("click", (h) => {
          var A, I;
          const v = h.target, m = v.dataset.infoPopup, w = (I = (A = v.parentElement) == null ? void 0 : A.querySelector(".crs-proposition__block-text")) == null ? void 0 : I.textContent;
          m && (this.infoPopup.open(+m), L("exp_hyp_1__4_cards__click", `Докладніше. ${w}`, "click", "Ряд з чотирьох кнопок"));
        });
      });
      const r = document.querySelector(".crs-proposition__action");
      r == null || r.addEventListener("click", () => {
        this.contactPopup.open(4), L(
          "exp_hyp_1__new_section__click",
          "Записатися на безоплатний урок",
          "click",
          "Розкрийте потенціал вашої дитини у світі сучасних технологій"
        );
      });
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = at, document.head.appendChild(i);
    }
  }
  const pt = `@media (min-width: 1200px) {
  br.mobile {
    display: none;
  }
}

@media (max-width: 1199px) {
  br.desktop {
    display: none;
  }
}`;
  H({
    name: "Reinforce the value proposition by addressing the key parents' drivers for looking a solution",
    dev: "OS"
  }), Z('goiteens_hyp_1"');
  class ct {
    constructor() {
      this.init();
    }
    init() {
      location.pathname.includes("v-gl-v2/") && (this.initStyles(), new Q(), new U({ container: document.querySelector("header"), position: "beforeend" }), new lt({ container: document.querySelector("main"), position: "afterbegin" }));
    }
    initStyles() {
      const i = document.createElement("style");
      i.innerHTML = pt, document.head.appendChild(i);
    }
  }
  new ct();
})();
