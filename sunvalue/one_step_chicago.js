(function() {
  "use strict";
  const r = (a, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), console.log(`Event: ${a} | ${n} | ${e} | ${t}`);
  }, c = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = `.os-note {
  width: 551px;
  max-width: 100%;
  margin: 0 auto;
  padding: 16px 46px;
  border-top: 1px solid var(--stroke-2, rgba(247, 249, 251, 0));
  border-bottom: 1px solid var(--stroke-2, rgba(247, 249, 251, 0));
  background: var(
    --fill2,
    linear-gradient(
      90deg,
      rgba(242, 245, 248, 0) 6.35%,
      #e0ffcf 25.38%,
      #e0ffcf 41.4%,
      #e9ffde 49.92%,
      #e0ffcf 57.93%,
      #e0ffcf 75.96%,
      rgba(242, 245, 248, 0) 93.99%
    )
  );
}

.os-note__top {
  color: #4a4a4a;
  text-align: center;

  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

.os-note__bottom {
  margin-top: 15.5px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
}

.os-note__bottom span {
  color: #00c105;
}

.os-title {
  margin-top: 16px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
}
.estimate-custom-slide .form-list {
  display: grid;
  gap: 16px;
}
.estimate-custom-slide .form-list li {
  width: 100%;
  padding: 0;
  margin: 0;
}

.estimate-custom-slide .form-list li label {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px 24px;
  border-radius: 100px;
  border: 1px solid #83be63;
  background: #fff;
  box-shadow: 0px 0px 0px 3px #e2e2e2, 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.3s;
}

.estimate-custom-slide .form-list li label input {
  position: absolute;
  visibility: hidden;
  height: 0;
  width: 0;
  opacity: 0;
}

.estimate-custom-slide .form-list li label .checkbox {
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 5px;
  border: 1px solid #aaa;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  accent-color: #83be63;
  appearance: auto;
  color: #fff;
}

.estimate-custom-slide .form-list li label span {
  user-select: none;
  color: #4a4a4a;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.estimate-custom-slide .form-list li label:has(input:checked) .checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #83be63;
  border: 1px solid #83be63;
}

.estimate-custom-slide .form-list li label:has(input:checked) span {
  color: #4a8f25;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.estimate-custom-slide .form-list li label:has(input:checked) {
  border: 1px solid #83be63;
  background: #e8ffdc;
  box-shadow: 0px 0px 0px 3px #e2e2e2, 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
}

.estimate-custom-slide .form-list li label:has(input:checked) .checkbox::after {
  content: '';
  width: 28px;
  height: 29px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="none"><path fill="%23fff" d="m2.055 3.56 6.68 6.679-2.056 2.054L0 5.614z"/><path fill="%23fff" d="M16 2.762 8.293 10.47 6.238 8.414 13.945.707z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.estimate-custom-slide .form-list li label input:checked {
  border: 1px solid #83be63;
}

.os-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 58px;
  max-width: 480px;
  border: none;
  background: none;
  border-radius: 1111px;
  background: #83be63;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
}

@media (max-width: 768px) {
  [data-current-slide='5']:not([data-slide-name='email']) .wrapper .container {
    padding: 0 16px;
  }
  .os-note {
    padding: 14px 10px;
    border-radius: 20px;
    background: #628fac;
  }

  .os-note > div {
    display: inline;
  }

  .os-note__top {
    color: #fff;
    text-align: center;
    font-family: 'Noto Sans SC';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  .os-note__bottom {
    margin-top: 0;
    color: #fff;
    text-align: center;
    font-family: 'Noto Sans SC';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  .os-note__bottom span {
    color: #98f465;
  }

  .os-title {
    margin-top: 16px;
    color: #4a4a4a;
    text-align: center;
    font-family: 'Noto Sans SC';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 114.286% */
  }

  .estimate-custom-slide .form-list {
    margin-top: 24px;
    gap: 12px;
  }
  .estimate-custom-slide .form-list li label {
    height: 58px;
    gap: 8px;
    border-radius: 5px;
    padding: 14px 10px;
    padding-right: 3px;
    box-shadow: none;
  }

  .estimate-custom-slide .form-list li label .checkbox {
    width: 20px;
    height: 20px;
  }

  .estimate-custom-slide .form-list li label .checkbox::before {
    width: 20px;
    height: 20px;
  }
  .estimate-custom-slide .form-list li label span, .estimate-custom-slide .form-list li label:has(input:checked) span {
    font-size: 14px;
    line-height: 24px;
  }
}
`;
  class m {
    constructor({ container: n, position: e }) {
      this.position = e || "beforeend", this.container = n, this.init();
    }
    init() {
      this.render(), this.handle();
    }
    render() {
      var e;
      const n = (
        /* HTML */
        `<div
      class="v-center estimate-custom-slide"
      id="estimate-custom-slide"
    >
      <div class="container text-center">
        <div class="os-note">
          <div class="os-note__top">✅ Congrats!</div>
          <div class="os-note__bottom">
            Your household <br class="mobile" />
            <span>may qualify for 2 </span> out of 7 incentives
          </div>
        </div>
        <div class="os-title">Choose the information you want to get</div>

        <div class="medium-container">
          <ul class="form-list">
            <li>
              <label>
                <input type="checkbox" name="" value="" />
                <div class="checkbox"></div>
                <span>Your Solar Incentives Eligibility Info</span>
              </label>
            </li>

            <li>
              <label>
                <input type="checkbox" name="" value="" />
                <div class="checkbox"></div>

                <span>Instructions for Applying for Solar Incentives </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="" value="" />
                <div class="checkbox"></div>

                <span>Your Household Solar Savings Estimate</span>
              </label>
            </li>
            <li>
              <button type="button" class="btn default os-next" data-button="email-slide">
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-slide") || ((e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${p}</style>`));
    }
    handle() {
      const n = document.querySelectorAll(
        ".os-next, .os-nextSlide"
      ), e = document.querySelector(".os-prevSlide"), t = document.getElementById("solarForm");
      if (!t || !n) return;
      n.forEach((o) => {
        o.addEventListener("click", () => {
          const i = document.getElementById("estimate-email"), s = document.getElementById("estimate-custom-slide");
          i == null || i.classList.remove("os-hide"), s == null || s.classList.add("os-hide"), t.dataset.slideName = "email", e == null || e.classList.remove("os-hide"), window.scrollTo(0, 0), r("exp_city_next", "Next Screen", "click", "Step - Choose the information you want to get");
        });
      }), document.querySelectorAll(".estimate-custom-slide label").forEach((o) => {
        o.addEventListener("click", (i) => {
          var d;
          i.preventDefault();
          const s = o.querySelector("input");
          if (!s) return;
          s.checked = !s.checked;
          const x = (d = o.querySelector("span")) == null ? void 0 : d.textContent;
          s.checked && r("ext_city_option", `Choose option - ${x}`, "click", "Step - Choose the information you want to get");
        });
      });
    }
  }
  const f = `.os-hide {
  display: none !important;
}

.os-flex {
  display: flex;
}

@media (min-width: 981px) {
  br.mobile {
    display: none;
  }
}

@media (max-width: 980px) {
  br.desktop {
    display: none;
  }
}

[data-current-slide='5']:not([data-slide-name='email'])
  #slider-block
  .nextSlide {
  display: none !important;
}

[data-current-slide='5'][data-slide-name='email'] #slider-block .prevSlide {
  display: none !important;
}
.os-nextSlide {
  display: none;
  border: none;
  border-radius: 5px;
  background: #83be63;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

[data-current-slide='5']:not([data-slide-name='email'])  #next-block {
  display: none;
}
@media (max-width: 768px) {
  [data-current-slide='5']:not([data-slide-name='email']) .nextSlide, .os-next {
    display: none !important;
  }
  [data-current-slide='5']:not([data-slide-name='email']) .os-nextSlide {
    display: flex !important;
  }
}
.os-prevSlide {
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 60px;
  display: none;
  align-items: center;
  gap: 5px;
  border: none;
  background: none;
  color: #4a4a4a;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
}

[data-current-slide='5'][data-slide-name='email'] .os-prevSlide {
  display: flex;
}

@media screen and (max-width: 1600px) {
  .os-prevSlide {
    left: 30px;
  }
}

.os-prevSlide::before {
  content: '';
  width: 25px;
  height: 20px;
  background-image: url(/images/back.svg);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;
}
`;
  c({
    dev: "OS",
    name: "One step before email"
  });
  class u {
    constructor() {
      this.init();
    }
    init() {
      if (document.querySelector("#estimate-custom-slide")) return;
      this.addStyles(), this.hideEmailSlide(), this.addCustomNavsButton();
      const n = document.querySelectorAll(".swiper-slide");
      new m({ container: n[5], position: "beforeend" }), this.observeSlides(), this.handleBackButton();
    }
    hideEmailSlide() {
      const n = document.getElementById("estimate-email");
      n && n.classList.add("os-hide");
    }
    observeSlides() {
      const n = document.querySelector(".swiper-container"), e = n == null ? void 0 : n.swiper, t = document.getElementById("solarForm");
      !e || !t || (t.dataset.currentSlide = "0", e == null || e.on("transitionEnd", () => {
        const l = e.realIndex;
        t.dataset.currentSlide = l.toString(), l === 5 && r("exp_city_view", "View Screen", "view", "Step - Choose the information you want to get");
      }));
    }
    addCustomNavsButton() {
      const n = (
        /* HTML */
        `<button type="button" class="os-prevSlide os-hide">
        Back
      </button>
      <button type="button" class="os-nextSlide os-hide">Next</button>`
      ), e = document.getElementById("slider-block");
      e && e.insertAdjacentHTML("beforeend", n);
    }
    handleBackButton() {
      const n = document.querySelector("#slider-block .os-prevSlide");
      n && n.addEventListener("click", (e) => {
        const t = document.getElementById("solarForm");
        if (!t) return;
        if (t.dataset.currentSlide === "5") {
          const o = document.getElementById("estimate-email");
          if (!(o != null && o.classList.contains("os-hide"))) {
            t.dataset.slideName = "", n.classList.add("os-hide");
            const i = document.getElementById("estimate-custom-slide");
            o == null || o.classList.add("os-hide"), i == null || i.classList.remove("os-hide");
          }
        }
      });
    }
    addStyles() {
      document.head.insertAdjacentHTML("beforeend", `<style>${f}</style>`);
    }
  }
  new u();
})();
