(function() {
  "use strict";
  const u = ({ name: p, dev: n }) => {
    console.log(
      `%c EXP: ${p} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, x = async (p) => {
    const n = (t) => new Promise((e, i) => {
      const r = t.split(".").pop();
      if (r === "js") {
        if (Array.from(document.scripts).map((c) => c.src.toLowerCase()).includes(t.toLowerCase()))
          return console.log(`Script ${t} allready downloaded!`), e("");
        const s = document.createElement("script");
        s.src = t, s.onload = e, s.onerror = i, document.head.appendChild(s);
      } else if (r === "css") {
        if (Array.from(document.styleSheets).map((c) => {
          var a;
          return (a = c.href) == null ? void 0 : a.toLowerCase();
        }).includes(t.toLowerCase()))
          return console.log(`Style ${t} allready downloaded!`), e("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = t, s.onload = e, s.onerror = i, document.head.appendChild(s);
      }
    });
    for (const t of p)
      await n(t), console.log(`Loaded librari ${t}`);
    console.log("All libraries loaded!");
  }, d = "https://conversionratestore.github.io/projects/goiteens/1st_hypothesis";
  class h {
    constructor({ container: n, position: t }) {
      this.container = n, this.position = t || "beforeend", this.init();
    }
    init() {
      this.render();
    }
    render() {
      const n = (
        /* HTML */
        `<form action="">
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
      );
      x([
        "https://cdn.jsdelivr.net/npm/intl-tel-input@20.3.0/build/js/intlTelInput.min.js",
        "https://cdn.jsdelivr.net/npm/intl-tel-input@20.3.0/build/css/intlTelInput.css",
        "https://cdn.jsdelivr.net/npm/intl-tel-input@20.3.0/build/js/utils.js"
      ]).then(() => {
        var e;
        (e = this.container) == null || e.insertAdjacentHTML(this.position, n);
        const t = document.querySelector("#popup_input_phone");
        if (this.submitForm(), t) {
          const i = window.intlTelInput(t, {
            initialCountry: "ua",
            countrySearch: !1,
            nationalMode: !0,
            showFlags: !0,
            hiddenInput: (c) => ({
              phone: "phone_full"
            })
          }), r = () => {
            if (t.value) {
              const { add: c, remove: a } = this.errorToInput(t);
              i.isValidNumber() || c("Номер телефону невірний!"), i.isValidNumber() && (t.dataset.value = i.getNumber(), a());
            }
          }, o = document.querySelector("#popup_input_name"), s = (c) => {
            const a = c.target.value;
            if (a) {
              const { add: l, remove: A } = this.errorToInput(o);
              A(), /\d/.test(a) ? l("Ім’я невірне") : a.trim() === "" ? l("Ім’я обов’язкове") : a.length < 2 ? l("Поле повинно містити мінімум 2 символи") : A();
            }
          };
          t.addEventListener("input", r), o == null || o.addEventListener("input", s);
        }
      });
    }
    errorToInput(n) {
      const t = document.createElement("div");
      return {
        add: (e) => {
          var i;
          this.removeErrors(n), n.classList.add("is-invalid"), t.style.color = "rgb(202, 56, 31)", t.classList.add("is-label-invalid", "just-validate-error-label"), t.textContent = e, (i = n.parentElement) == null || i.appendChild(t);
        },
        remove: () => {
          n.classList.remove("is-invalid"), this.removeErrors(n);
        }
      };
    }
    removeErrors(n) {
      var e;
      const t = (e = n.parentElement) == null ? void 0 : e.querySelectorAll(".just-validate-error-label");
      t == null || t.forEach((i) => i.remove());
    }
    submitForm() {
      const n = document.querySelector(".crs-popup__form form");
      n == null || n.addEventListener("submit", async (t) => {
        t.preventDefault();
        const e = n.querySelector("#popup_input_name"), i = n.querySelector("#popup_input_phone");
        if (!e || !i)
          return;
        const r = e == null ? void 0 : e.value, o = i == null ? void 0 : i.dataset.value, { add: s, remove: c } = this.errorToInput(e), { add: a, remove: l } = this.errorToInput(i);
        let A = !0;
        if ((!r || r.trim() === "") && (s("Ім’я обов’язкове"), A = !1), (!o || o.trim() === "") && (i == null || i.classList.add("is-invalid"), a("Номер телефону невірний!"), A = !1), !A)
          return;
        const g = n.querySelector('button[type="submit"]');
        g == null || g.setAttribute("disabled", "true");
        try {
          (await (await fetch("https://courses-all.goiteens.com/v-gl-v3/crm/lead.php", {
            method: "POST",
            body: JSON.stringify({
              name: r,
              phone: o,
              SiteURL: "https://courses-all.goiteens.com/v-gl-v3/",
              product_name: "GoITeens_Courses_All_GL_v3"
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })).json()).Deal_ID && (location.href = "https://courses-all.goiteens.com/v-gl/success/");
        } catch (m) {
          console.log("error", m);
        }
      });
    }
  }
  const f = `.crs-popup {
  max-width: 1140px;
  border: none;
  border-radius: 40px;
  background: #5f3ed1;
  background-image: url(https://conversionratestore.github.io/projects/goiteens/1st_hypothesis/img/hp-modal-bg-inv.webp);
  background-repeat: no-repeat;
  background-size: 367px 781px;
  background-position: top 0 right 0;
}

.crs-popup::backdrop {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%);
}
.crs-popup .iti__dropdown-content {
  overflow-y: hidden !important;
}
.crs-popup__close {
  position: absolute;
  top: 35px;
  right: 35px;
  width: 40px;
  height: 40px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 15L15 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15L25 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  outline: none;
}

.crs-popup__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  column-gap: 76px;
  padding: 44px 36px;
}

.crs-popup__title {
  margin-top: 58px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: #fff;
  font-family: 'IBMPlexMono';
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
}

.crs-popup__title span {
  color: #f6ca53;
}
.crs-popup__description {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin-top: 24px;
  color: #fff;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-popup__content {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  margin-top: 24px;
}

.crs-popup__content-title {
  color: #fff;
  font-family: 'IBMPlexMono';
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

.crs-popup__content-list {
  display: grid;
  gap: 32px;
  margin-top: 24px;
  color: #fff;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.crs-popup__content-list li {
  position: relative;
  counter-increment: list-counter;
  padding-left: 48px;
}

.crs-popup__content-list li::before {
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
  border: 2px solid #3811c0;
  background: #3811c0;
  color: #f6ca53;
  font-family: 'IBMPlexMono';
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
}

.crs-popup__content-list li:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 13px;
  top: 38px;
  width: 4px;
  height: calc(100% - 14px);
  border-radius: 111px;
  background: #3811c0;
}
.crs-popup__form {
  grid-column: 2 / 3;
  grid-row: 1 / 4;
}

.crs-form__wrap {
  position: relative;
  width: 510px;
  margin-top: 166px;
  padding: 24px;
  border-radius: 40px;
  background: #3c1ea6;
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
  color: #f6ca53;
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
}
.crs-form button[type='submit'] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  padding-block: 24px;
  border-radius: 64px;
  background: #f6ca53;
  color: #000;
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
  background: #e5b247;
}

.crs-form button[type='submit'][disabled] {
  background: gray;
  color: #000;
}
.crs-popup__branding {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-inline: 54px;
}

.crs-popup__branding img {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  object-fit: cover;
}

.crs-popup__branding div {
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

@media (max-width: 1280px) {
  .crs-popup {
    max-width: 360px;
    border-radius: 24px;
    background-size: 265px 563px;
    background-position: top -24px right -81px;
  }

  .crs-popup__close {
    top: 17px;
    right: 17px;
    width: 32px;
    height: 32px;
  }

  .crs-popup__wrap {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    column-gap: 0;
    padding: 24px 16px;
  }

  .crs-popup__title {
    margin-top: 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }

  .crs-popup__description {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-popup__form {
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

  .crs-popup__branding {
    padding-inline: 0;
  }

  .crs-popup__branding img {
    width: 44px;
    height: 44px;
  }

  .crs-popup__branding div {
    font-size: 14px;
    line-height: 20px;
  }
  .crs-popup__content {
    grid-row: 4 / 5;
  }

  .crs-popup__content-title {
    font-size: 18px;
    line-height: 28px;
  }

  .crs-popup__content-list {
    margin-top: 16px;
  }
}
`;
  class w {
    constructor() {
      this.popup = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.eventListeners(), new h({ container: document.querySelector(".crs-form__container") });
    }
    render() {
      const n = (
        /* HTML */
        ` <dialog class="crs-popup">
      <button class="crs-popup__close" autofocus="false"></button>
      <div class="crs-popup__wrap">
        <h3 class="crs-popup__title">Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span></h3>
        <div class="crs-popup__description">
          Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у
          захваті.
        </div>
        <div class="crs-popup__content">
          <h4 class="crs-popup__content-title">Як проходить урок:</h4>
          <ol class="crs-popup__content-list">
            <li>Знайомимо з напрямками й підбираємо курс за інтересами та здібностями дитини.</li>
            <li>Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.</li>
            <li>Обговорюємо результати й допомагаємо зробити наступний крок.</li>
          </ol>
        </div>

        <div class="crs-popup__form crs-form">
          <div class="crs-form__wrap">
            <h4 class="crs-form__title">Отримати безоплатний <br class="mobile"> урок</h4>

            <div class="crs-form__container"></div>
            <div class="crs-popup__branding">
              <img
                src="${d}/img/award_boty_2023.svg"
                alt="Business of the year 2023"
                width="64"
                height="64"
                load="async"
              />
              <div>Найкращий освітній бізнес у сфері навчання для дітей та підлітків</div>
            </div>
          </div>
        </div>
      </div>
    </dialog>`
      );
      document.body.insertAdjacentHTML("beforeend", n), this.popup = document.querySelector(".crs-popup");
    }
    eventListeners() {
      var t;
      const n = document.querySelector(".crs-popup__close");
      n == null || n.addEventListener("click", () => {
        this.close();
      }), (t = this.popup) == null || t.addEventListener("click", (e) => {
        e.target === this.popup && this.close();
      });
    }
    open() {
      this.popup && this.popup.showModal();
    }
    close() {
      this.popup && this.popup.close();
    }
    initStyles() {
      const n = document.createElement("style");
      n.textContent = f, document.head.insertAdjacentElement("beforeend", n);
    }
  }
  const b = `.crs-achieve {
  margin-bottom: 60px;
  position: relative;
  padding-block: 84px;
  background-color: #5f3ed1;
}

.crs-achieve::after {
  content: '';
  position: absolute;
  width: 367px;
  height: 781px;
  top: 0;
  left: 0;
  background-image: url(https://conversionratestore.github.io/projects/goiteens/1st_hypothesis/img/hp-modal-bg.webp);
  background-repeat: no-repeat;
}
.crs-achieve h2 {
  margin-bottom: 25px;
  font-size: 36px;
  line-height: 47px;
  color: #fff;
  font-family: 'IBMPlexMono', sans-serif;
  text-align: center;
  text-transform: inherit;
}

.crs-accordion {
  position: relative;
  display: grid;
  justify-content: center;
  z-index: 2;
}
.crs-accordion__item {
  max-width: 900px;
  border-radius: 40px;
  border: 6px solid #5f3ed1;
  background: #4727b6;
}

.crs-accordion__item[data-state='open'] {
  padding: 24px;
}

.crs-accordion__title {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 24px;
}

.crs-accordion__item[data-state='open'] .crs-accordion__title {
  padding: 0;
}

.crs-accordion__title h3 {
  color: #fff;
  font-family: 'IBMPlexMono', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
}

.crs-accordion__toggle {
  margin-left: auto;
  border-radius: 50px;
  background-color: #f6ca53;
  color: #000;
  font-family: 'IBMPlexMono', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 8px;
  transition: 0.3s background-color linear;
}
.crs-accordion__item[data-state='open'] .crs-accordion__toggle span {
  visibility: hidden;
}
.crs-accordion__item[data-state='open'] .crs-accordion__toggle {
  background-color: #5f3ed1;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(%23clip0_435_1860)"><path d="M12.9365 5.33382L23.6166 16.0141C23.8638 16.2611 24 16.5909 24 16.9425C24 17.2941 23.8638 17.6239 23.6166 17.8709L22.8303 18.6574C22.3179 19.1692 21.4851 19.1692 20.9735 18.6574L12.005 9.68891L3.02651 18.6674C2.7793 18.9144 2.44974 19.0508 2.09833 19.0508C1.74652 19.0508 1.41697 18.9144 1.16955 18.6674L0.383413 17.8808C0.136196 17.6336 1.831e-06 17.3041 1.81563e-06 16.9525C1.80026e-06 16.6009 0.136196 16.2711 0.383413 16.0241L11.0733 5.33382C11.3213 5.08621 11.6524 4.95021 12.0044 4.95099C12.3578 4.95021 12.6887 5.08621 12.9365 5.33382Z" fill="%23F6CA53"/></g><defs><clipPath id="clip0_435_1860"><rect width="24" height="24" fill="white" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 24 24)"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
}
.crs-accordion__body {
  color: #fff;
  font-family: 'IBMPlexSans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.crs-accordion__body p + p {
  margin-top: 16px;
}

.crs-accordion__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: 250ms grid-template-rows ease;
}

.crs-accordion__actions {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.crs-accordion__action {
  display: flex;
  height: 68px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  background: #f6ca53;
  color: #000;
  text-align: center;
  font-family: 'IBMPlexSans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  transition: 0.3s background linear;
}

.crs-accordion__action:hover {
  background: #e5b247;
}

.crs-accordion__description {
  margin-top: 12px;
  color: #f6ca53;
  text-align: center;
  font-family: 'IBMPlexSans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}

.crs-accordion__item[data-state='open'] .crs-accordion__body {
  grid-template-rows: 1fr;
  padding-top: 24px;
}

.crs-accordion__body > div {
  overflow: hidden;
}

@media (max-width: 1280px) {
  .crs-achieve {
    padding-block: 58px;
    margin-bottom: 0;
  }

  .crs-achieve::after {
    width: 295px;
    height: 627px;
    background-size: contain;
  }
  .crs-achieve .container {
    padding-inline: 12px;
  }
  .crs-achieve h2 {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
  }

  .crs-accordion {
    width: 100%;
    max-width: 900px;
    gap: 12px;
  }

  .crs-accordion__item {
    width: 100%;
    padding: 16px 12px;
  }

  .crs-accordion__title {
    display: grid;
    grid-template-rows: 38px auto;
    grid-template-columns: auto 64px;
    gap: 12px 16px;
    padding: 0;
  }

  .crs-accordion__title > span:not(.crs-accordion__toggle) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 35px;
    height: 35px;
  }

  .crs-accordion__title span svg {
    width: 35px;
    height: 35px;
    object-fit: contain;
  }
  .crs-accordion__title h3 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  .crs-accordion__toggle {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 63px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
  }

  .crs-accordion__action {
    height: 52px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-accordion__description {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .crs-accordion__item[data-state='open'] .crs-accordion__title {
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .crs-accordion__item[data-state='open'] {
    padding: 16px 12px;

  }

  .crs-accordion__item[data-state='open'] .crs-accordion__body {
    padding-top: 16px;
  }
}
`, B = [
    {
      icon: `${d}/img/icons/icon-1.webp`,
      title: "Хочу щоб моя дитина замість ігор і TikTok витрачала час із користю",
      body: (
        /* HTML */
        `<p>
        Перетворіть це на корисне хобі! Уроки зі Scratch, Minecraft, Roblox та малювання на планшеті допоможуть
        розвивати творчість, математику та програмування в ігровому форматі. Навчання через гру відкриє світ проєктів,
        де з’являються власні ігри та 3D персонажі. Замість безцільного перегляду відео та ігор — досягнення, якими ви
        будете пишатись!
      </p>
      <p>
        Ми зробили акцент на контрасті між шкідливим і безцільним часом у гаджетах на досягненнях дитини, що резонує із
        цілями батьків.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${d}/img/icons/icon-2.webp`,
      title: "Забезпечити дитині перспективну роботу в IT",
      body: (
        /* HTML */
        `<p>Підготуйте дитину до успішної кар'єри в IT!</p>
      <p>
        Фахівці в своїй галазі допоможуть пройти шлях від початківця до junior-спеціаліста, навчаючи створювати ігри,
        програми та вебсайти. Дитина розробить реальні проєкти, які потраплять до її портфоліо, і це стане основою для
        подальшого професійного розвитку в IT.
      </p>
      <p>В результаті навчання вона отримає навички для старту кар'єри в галузі.</p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${d}/img/icons/icon-3.webp`,
      title: "Розвивати в моїй дитині обізнаність в IT і технічні навички",
      body: (
        /* HTML */
        `<p>
        Курси GoITeens дають дітям можливість розвивати технічні навички через практичні заняття та роботу над реальними
        проєктами.
      </p>
      <p>
        Вони не лише вивчають програмування, а й здобувають досвід у створенні ігор, анімацій і вебсайтів, що допомагає
        швидко освоювати нові технології. Це сприяє розвитку інженерного мислення, яке необхідне для успіху в сучасному
        технологічному світі.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${d}/img/icons/icon-4.webp`,
      title: "Допомогти моїй дитині соціалізуватись, більше спілкуватись з однолітками",
      body: (
        /* HTML */
        `<p>
        GoITeens допомагає вашій дитині соціалізуватися завдяки інтерактивним урокам і командним проєктам, де учні
        співпрацюють, обговорюють ідеї та вирішують завдання разом.
      </p>
      <p>
        У GoITeens Club діти публікують свої роботи, отримують відгуки та знаходять однодумців для спільного розвитку.
        Це простір, де народжуються дружні стосунки та формується активна взаємодія з ровесниками.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які курси і заходи допоможуть вашій дитині отримати більше спілкування з однолітками"
    },
    {
      icon: `${d}/img/icons/icon-5.webp`,
      title: "Розвивати в моїй дитині логічне та креативне мислення",
      body: (
        /* HTML */
        `<p>
        Курси GoITeens допоможуть вашій дитині розвинути логічне і креативне мислення через захоплюючі інтерактивні
        заняття.
      </p>
      <p>
        Наприклад, на курсі Scratch дитина навчиться вирішувати задачі, працювати в команді та розвивати критичне
        мислення.
      </p>
      <p>
        Заняття з логіки покращать концентрацію і пам'ять, а курс математики навчить розуміти причинно-наслідкові
        зв’язки, допомогаючи розкрити потенціал вашої дитини.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${d}/img/icons/icon-6.webp`,
      title: "Допомогти моїй дитині всебічно розвиватись",
      body: (
        /* HTML */
        `<p>
        В GoITeens ваша дитина може спробувати себе в різних напрямках — від малювання на планшеті до опанування
        професії розробника.
      </p>
      <p>
        Ми не тільки навчаємо технічним навичкам, а й активно розвиваємо емоційний інтелект, соціальні навички та
        стратегічне мислення. Завдяки такому підходу ваша дитина відкриє свої таланти, зможе розвивати внутрішні якості
        та знайти шлях до успіху в житті.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    }
  ];
  class v {
    constructor({ container: n, position: t }) {
      this.container = n, this.position = t || "beforeend", this.popup = new w(), this.init();
    }
    init() {
      if (!this.container) {
        console.log("Container is not found");
        return;
      }
      this.initStyles(), this.render(), this.addEventListeners();
    }
    render() {
      const n = (
        /* HTML */
        `<section class="crs-achieve">
      <div class="container">
        <h2 class="section-title mb-6 md:mb-10">Що ви хочете досягти завдяки IT курсам?</h2>
        <div class="crs-accordion">
          ${B.map(({ icon: t, title: e, body: i, action: r, description: o }) => (
          /* HTML */
          `<div class="crs-accordion__item" data-state="close">
                <div class="crs-accordion__title"><img src="${t}" width="41" height="41" load="lazy"><h3>${e}</h3><span class="crs-accordion__toggle"><span>Хочу!</span></span></div>
                <div class="crs-accordion__body">
                  <div>
                    <div>${i}</div>
                    <div class="crs-accordion__actions">
                      <button data-popup="${r.popup}" class="crs-accordion__action">${r.text}</button>
                    </div>
                    <div class="crs-accordion__description">
                      ${o}
                    </div>
                  </div>
                </div>
              </div>`
        )).join("")}
        </div>
      </div>
    </section>`
      );
      this.container.insertAdjacentHTML(this.position, n);
    }
    addEventListeners() {
      const n = this.container.querySelectorAll(".crs-accordion__item");
      n.forEach((e) => {
        const i = e.querySelector(".crs-accordion__title");
        i == null || i.addEventListener("click", () => {
          e.getAttribute("data-state") === "open" ? e.setAttribute("data-state", "close") : (n.forEach((o) => o.setAttribute("data-state", "close")), e.setAttribute("data-state", "open"));
        });
      }), this.container.querySelectorAll('.crs-accordion__action[data-popup="free-lesson"]').forEach((e) => {
        e.addEventListener("click", () => {
          this.popup.open();
        });
      });
    }
    initStyles() {
      const n = document.createElement("style");
      n.innerHTML = b, document.head.appendChild(n);
    }
  }
  const y = `.crs-badges {
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
  class M {
    constructor({ container: n, position: t }) {
      this.container = n, this.position = t || "beforeend", this.init();
    }
    init() {
      if (!this.container) {
        console.log("Container is not found");
        return;
      }
      this.initStyles(), this.render();
    }
    render() {
      this.container && this.container.insertAdjacentHTML(
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
      );
    }
    initStyles() {
      const n = document.createElement("style");
      n.innerHTML = y, document.head.appendChild(n);
    }
  }
  const z = `@media (min-width: 1280px) {
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
  class I {
    constructor() {
      this.init();
    }
    init() {
      this.initStyles();
    }
    initStyles() {
      const n = document.createElement("style");
      n.innerHTML = z, document.head.appendChild(n);
    }
  }
  const G = `@media (min-width: 1200px) {
  br.mobile {
    display: none;
  }
}

@media (max-width: 1199px) {
  br.desktop {
    display: none;
  }
}`;
  u({
    name: "1st hypothesis",
    dev: "OS"
  });
  class E {
    constructor() {
      this.init();
    }
    init() {
      location.pathname.includes("v-gl-v2/") && (this.initStyles(), new I(), new M({ container: document.querySelector("header"), position: "beforeend" }), new v({ container: document.querySelector("main"), position: "afterbegin" }));
    }
    initStyles() {
      const n = document.createElement("style");
      n.textContent = G, document.head.appendChild(n);
    }
  }
  new E();
})();
