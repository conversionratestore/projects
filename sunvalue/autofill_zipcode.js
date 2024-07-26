(function() {
  "use strict";
  const p = (r, n, t, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: n,
      event_type: t,
      event_loc: e
    }), console.log(`Event: ${r} | ${n} | ${t} | ${e}`);
  }, E = ({ name: r, dev: n }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, w = (r) => document.querySelector(r), L = (r) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, z = (r) => new Promise((n, t) => {
    if (r.split(".").pop(), Array.from(document.scripts).map((a) => a.src.toLowerCase()).includes(r.toLowerCase()))
      return console.log(`Script ${r} already downloaded!`), n("");
    const i = document.createElement("script");
    i.src = r, i.onload = n, i.onerror = t, document.head.appendChild(i);
  });
  function _(r) {
    return new Promise((n) => {
      if (document.querySelector(r))
        return n(document.querySelector(r));
      const t = new MutationObserver(() => {
        document.querySelector(r) && (n(document.querySelector(r)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const g = (r, n, t, e) => {
    let i = new IntersectionObserver(
      (o) => {
        o.forEach((s) => {
          s.isIntersecting && (i.unobserve(s.target), setTimeout(function() {
            a.observe(s.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.5
      }
    ), a = new IntersectionObserver((o) => {
      o.forEach((s) => {
        s.isIntersecting ? (p(n || `view_element_${s.target.id}`, t || "Element visibility", "view", e || s.target.id), i.unobserve(s.target)) : i.observe(s.target), a.unobserve(s.target);
      });
    });
    document.querySelectorAll(r).forEach((o) => {
      i.observe(o);
    });
  }, f = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, B = `.os-progress {
  position: absolute;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  margin-bottom: 20px;
  z-index: 1;
  max-width: 100%;
}

@media (max-width: 768px) {
  .os-progress {
    padding-inline: 20px;
  }
}

.os-progress__step {
  --fill: 0%;
  position: relative;
  width: 120px;
  height: 8px;
  border-radius: 5px;
  background: #dce0e2;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.06) inset;
  overflow: hidden;
  transition: width 1s linear;
  max-width: 23%;
}
.os-progress__step::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: var(--fill, 0%);
  height: 100%;
  background-color: #fb7306;
}

.os-ind-step {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 100px;
  background: linear-gradient(180deg, #fff 57.5%, #f7f7f8 78.5%);
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 900;
  line-height: 16px;
  letter-spacing: -0.36px;
}
`;
  class C {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      const n = (
        /* HTML */
        `
      <div class="os-progress">
        <div class="os-progress__step" data-step="1"></div>
        <div class="os-progress__step" data-step="2"></div>
        <div class="os-progress__step" data-step="3"></div>
        <div class="os-progress__step" data-step="4"></div>
      </div>
    `
      ), t = (
        /* HTML */
        `
      <div class="os-ind-step"><span>1</span>/4</div>
    `
      ), e = document.querySelector(".wrapper"), i = document.querySelector(".content-wrapper .container");
      document.head.insertAdjacentHTML("afterbegin", `<style>${B}</style>`), e == null || e.insertAdjacentHTML("beforeend", n), i == null || i.insertAdjacentHTML("beforeend", t);
    }
    update(n) {
      if (n < 1 || n > 4) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const t = document.querySelector(".os-progress"), e = document.querySelector(".os-ind-step span");
      if (e && (e.textContent = n.toString()), !t)
        return;
      const i = t.querySelector('[data-step="1"]'), a = t.querySelector('[data-step="2"]'), o = t.querySelector('[data-step="3"]'), s = t.querySelector('[data-step="4"]');
      n === 1 && (console.log("step", n), i.style.setProperty("--fill", "100%"), a.style.setProperty("--fill", "0%"), o.style.setProperty("--fill", "0%"), s.style.setProperty("--fill", "0%")), n === 2 && (i.style.setProperty("--fill", "100%"), a.style.setProperty("--fill", "50%"), o.style.setProperty("--fill", "0%"), s.style.setProperty("--fill", "0%")), n === 3 && (i.style.setProperty("--fill", "100%"), a.style.setProperty("--fill", "100%"), o.style.setProperty("--fill", "50%"), s.style.setProperty("--fill", "0%")), n === 4 && (i.style.setProperty("--fill", "100%"), a.style.setProperty("--fill", "100%"), o.style.setProperty("--fill", "100%"), s.style.setProperty("--fill", "50%"));
    }
    hide() {
      const n = document.querySelector(".os-progress");
      n == null || n.classList.add("os-hide");
      const t = document.querySelector(".os-ind-step");
      t && t.classList.add("os-hide");
    }
    show() {
      const n = document.querySelector(".os-progress");
      n == null || n.classList.remove("os-hide");
      const t = document.querySelector(".os-ind-step");
      t && t.classList.remove("os-hide");
    }
  }
  const $ = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
  width="40"
  height="40"
  style="shape-rendering: auto; display: block; background: transparent;"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g>
    <circle
      stroke-dasharray="164.93361431346415 56.97787143782138"
      r="35"
      stroke-width="3"
      stroke="currentColor"
      fill="none"
      cy="50"
      cx="50"
    >
      <animateTransform
        keyTimes="0;1"
        values="0 50 50;360 50 50"
        dur="0.5319148936170213s"
        repeatCount="indefinite"
        type="rotate"
        attributeName="transform"
      ></animateTransform>
    </circle>
    <g></g>
  </g>
  <!-- [ldio] generated by https://loading.io -->
</svg>`
  ), S = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
  <path
    d="M13.25 8.5a1.25 1.25 0 0 0-2.5 0v1.25h2.5V8.5ZM14.5 11.25h-5a.751.751 0 0 0-.75.75v3a.751.751 0 0 0 .75.75h5a.751.751 0 0 0 .75-.75v-3a.751.751 0 0 0-.75-.75Z"
    fill="currentColor"
  />
  <path
    d="M20.182 4.182c-1.34-.143-2.66-.441-3.932-.889a17.331 17.331 0 0 1-3.335-1.597 1.752 1.752 0 0 0-1.83 0A17.348 17.348 0 0 1 7.75 3.293c-1.271.448-2.59.746-3.93.889A1.746 1.746 0 0 0 2.25 5.92v5.195a10.755 10.755 0 0 0 5.53 9.397l3.37 1.873a1.734 1.734 0 0 0 1.7 0l3.37-1.873a10.754 10.754 0 0 0 5.53-9.397V5.921a1.746 1.746 0 0 0-1.568-1.74ZM16.75 15a2.253 2.253 0 0 1-2.25 2.25h-5A2.253 2.253 0 0 1 7.25 15v-3a2.246 2.246 0 0 1 2-2.225V8.5a2.75 2.75 0 1 1 5.5 0v1.275a2.246 2.246 0 0 1 2 2.225v3Z"
    fill="currentColor"
  />
</svg>`
  ), v = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
  <path
    d="M10 0C6.006 0 2.757 3.25 2.757 7.243c0 4.957 6.482 12.233 6.758 12.54.259.29.712.289.97 0 .276-.307 6.758-7.583 6.758-12.54C17.243 3.25 13.994 0 10 0Zm0 10.887a3.648 3.648 0 0 1-3.644-3.644A3.648 3.648 0 0 1 10 3.6a3.648 3.648 0 0 1 3.644 3.644A3.648 3.648 0 0 1 10 10.887Z"
    fill="currentColor"
  />
</svg>`
  ), M = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="17"
  viewBox="0 0 16 17"
  fill="none"
>
  <path
    d="M8 1.5C6.67935 1.51748 5.41771 2.04987 4.48379 2.98379C3.54987 3.91771 3.01748 5.17935 3 6.5C3 8.657 4.173 9.763 5.3075 10.8325C6.442 11.902 7.5 12.9 7.5 15C7.5 15.1326 7.55268 15.2598 7.64645 15.3536C7.74021 15.4473 7.86739 15.5 8 15.5C8.13261 15.5 8.25979 15.4473 8.35355 15.3536C8.44732 15.2598 8.5 15.1326 8.5 15C8.5 12.9 9.565 11.8955 10.6925 10.8325C11.82 9.7695 13 8.657 13 6.5C12.9825 5.17935 12.4501 3.91771 11.5162 2.98379C10.5823 2.04987 9.32065 1.51748 8 1.5ZM8 8C7.70333 8 7.41332 7.91203 7.16664 7.7472C6.91997 7.58238 6.72771 7.34811 6.61418 7.07403C6.50065 6.79994 6.47094 6.49834 6.52882 6.20736C6.5867 5.91639 6.72956 5.64912 6.93934 5.43934C7.14912 5.22956 7.41639 5.0867 7.70736 5.02882C7.99834 4.97094 8.29994 5.00065 8.57403 5.11418C8.84811 5.22771 9.08238 5.41997 9.2472 5.66664C9.41203 5.91332 9.5 6.20333 9.5 6.5C9.5 6.89782 9.34196 7.27936 9.06066 7.56066C8.77936 7.84196 8.39782 8 8 8Z"
    fill="#3B3B3B"
  />
</svg>`
  ), q = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
  <path
    d="M16.25.625H3.75a1.25 1.25 0 0 0-1.25 1.25v16.073a1.25 1.25 0 0 0 2.098.92l.816-.755a.481.481 0 0 1 .349-.125.465.465 0 0 1 .33.168l.508.61a1.715 1.715 0 0 0 2.05.455c.228-.107.43-.263.59-.457l.403-.483a.47.47 0 0 1 .72 0l.402.482a1.719 1.719 0 0 0 2.64 0l.505-.606a.466.466 0 0 1 .678-.043l.813.75a1.25 1.25 0 0 0 2.098-.917V1.875a1.25 1.25 0 0 0-1.25-1.25ZM8.109 7.681l1.48-2.96A.625.625 0 0 1 10.773 5v2.056l.934.7a.625.625 0 0 1 .155.832l-1.48 2.368a.626.626 0 0 1-1.155-.331V8.937l-.839-.419a.625.625 0 0 1-.28-.837Zm5.016 6.381h-6.25a.625.625 0 1 1 0-1.25h6.25a.624.624 0 1 1 0 1.25Z"
    fill="currentColor"
  />
  <path d="M13.125 15.313h-6.25a.625.625 0 1 1 0-1.25h6.25a.624.624 0 1 1 0 1.25Z" fill="currentColor" />
</svg>`
  ), I = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
  <path
    d="M17.465 10.197c.277.266.452.639.452 1.053a1.46 1.46 0 0 1-1.286 1.447c.278.266.452.639.452 1.053a1.46 1.46 0 0 1-1.285 1.447c.278.266.452.639.452 1.053a1.46 1.46 0 0 1-1.458 1.458h-4.48a6.884 6.884 0 0 1-3.41-.905l-.235-.134V7.957A8.135 8.135 0 0 0 8.324 5.32l1.068-2.776c.153-.4.544-.668.972-.668h.088c.601 0 1.15.277 1.508.761.357.484.46 1.09.284 1.665l-.838 2.72a.207.207 0 0 0 .2.27h5.686A1.46 1.46 0 0 1 18.75 8.75a1.46 1.46 0 0 1-1.285 1.447ZM5.833 7.917v9.166c0 .575-.467 1.042-1.041 1.042h-2.5a1.043 1.043 0 0 1-1.042-1.042V7.917c0-.575.467-1.042 1.042-1.042h2.5c.574 0 1.041.467 1.041 1.042Z"
    fill="currentColor"
  />
</svg>`
  ), T = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="19"
  height="19"
  fill="none"
>
  <g clip-path="url(#a)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.498.95c-2.91 0-5.29 2.383-5.29 5.292 0 2.124 1.183 4.088 2.261 5.596 1.076 1.509 1.897 2.328 2.167 2.598a1.229 1.229 0 0 0 1.728 0c.272-.272 1.087-1.091 2.164-2.598 1.078-1.506 2.264-3.472 2.264-5.596 0-2.91-2.383-5.292-5.294-5.292Zm1.729 7.02a2.428 2.428 0 0 1-1.727.716 2.435 2.435 0 0 1-1.728-.716 2.435 2.435 0 0 1-.716-1.728c0-.675.273-1.285.716-1.726a2.444 2.444 0 0 1 3.454 3.454Zm-5.422 4.342c-.342-.481-.7-1.016-1.035-1.59H4.61c-.522 0-.991.337-1.157.834l-1.078 3.238h5.472c-.387-.398-1.125-1.199-2.043-2.482Zm9.74-.756a1.224 1.224 0 0 0-1.16-.834h-.158a20.992 20.992 0 0 1-1.035 1.59c-.918 1.285-1.652 2.082-2.04 2.482h5.47l-1.077-3.239Zm-13.44 4.051-.278.837c-.26.78.338 1.606 1.16 1.606h9.36v-2.443H2.107Zm15.069.837-.28-.837h-3.732v2.443h2.852c.821 0 1.419-.828 1.16-1.606Z"
      fill="currentColor"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" transform="translate(.5 .5)" d="M0 0h18v18H0z" /></clipPath>
  </defs>
</svg>`
  ), A = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
  <path
    d="M15.002.001C11.142.001 8 3.14 8 7c0 3.86 3.142 7.002 7.002 7.002S22 10.86 22 7A7.004 7.004 0 0 0 15.002.001ZM15 1.997c.25 0 .5.167.5.5v1.078a2.003 2.003 0 0 1 1.498 1.93.5.5 0 1 1-1 0 .99.99 0 0 0-.996-1.002c-.558 0-1 .443-1 1.001 0 .558.442 1 1 1 1.098 0 1.996.902 1.996 2 0 .926-.64 1.706-1.498 1.93V11.5c0 .667-1 .667-1 0v-1.068A2.006 2.006 0 0 1 13 8.504a.5.5 0 1 1 1.002 0 .993.993 0 0 0 1 1.001.99.99 0 0 0 .996-1 .99.99 0 0 0-.996-1 2.008 2.008 0 0 1-2.001-2c0-.925.642-1.704 1.499-1.93V2.497c0-.333.25-.5.5-.5ZM27.678 12.6c-.607 0-1.215.233-1.676.693l-3.166 3.166c.415.576.664 1.28.664 2.042 0 1.93-1.569 3.5-3.5 3.5h-5.45c-.726.065-.726-1.062 0-.997H20a2.485 2.485 0 0 0 2.5-2.503c0-.49-.143-.94-.383-1.322a2.537 2.537 0 0 0-2.116-1.177L9.5 16.002c-2.125 0-3.304 1.099-4.292 2.084l6.942 6.943c.108-.017.221-.029.35-.029H21c1.719 0 3.155-.848 4.172-2.321 1.145-1.659 3.29-4.762 4.237-6.105.345-.49.566-1.05.587-1.631a2.208 2.208 0 0 0-.643-1.65 2.366 2.366 0 0 0-1.675-.694ZM3.5 18a.496.496 0 0 0-.353.146l-3 3a.5.5 0 0 0 0 .71l8.002 7.998a.5.5 0 0 0 .705 0l3-3.001a.5.5 0 0 0 0-.705l-8.002-8.002A.498.498 0 0 0 3.5 18Z"
    fill="currentColor"
  />
</svg>`
  ), N = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="42"
  height="42"
  fill="none"
>
  <path
    d="m21 33-5.5 2c-4-.5-8.1-1.8-9.9-4.8l1.7-4.6A27 27 0 0 0 21.1 33ZM22.2 19.8c-3.8-3.9-8.8-6.7-10.8-4.7-.4.5-.3.2-3.3 8.3 3.2 4.6 11.3 7.8 16.9 8.1 1.7-.6 1.6-.7 1.9-1 2.5-2.4-2.2-8.3-4.7-10.7Zm3.3 9.4c-.2.2-1 .2-2.6-.6-1.7-.8-3.6-2.3-5.4-4-4.2-4.2-5.2-7.6-4.7-8 0-.2.2-.2.4-.2 1.2 0 4.1 1.2 7.6 4.8 1.8 1.8 3.3 3.7 4.1 5.4.8 1.5.8 2.4.6 2.6ZM11.9 36.3l-8 3A1 1 0 0 1 2.8 38l2-5.6c1.8 2 4.4 3.2 7.2 4ZM25.8 5.1l-1.6.4c.6 1 1.9 2.1 1.1 3.7-.7 1.3-2.1 1.3-3.4 1.3.8 1 1.7 2.1 1 3.5s-2.5 1.7-3.6 1.8a.7.7 0 0 1-.8-.5l-.2-1.3c0-.3.1-.7.5-.7l1.6-.4c-.6-1-1.8-2.2-1-3.7.6-1.4 2-1.3 3.3-1.3-.8-1-1.7-2.1-1-3.5s2.6-1.7 3.7-1.9c.3 0 .6.2.7.6l.2 1.2c.1.4-.1.7-.5.8ZM37.7 15.7l1.2.2c.4 0 .6.4.6.7-.2 1.1-.5 3-2 3.7-1.3.7-2.3-.2-3.4-1 0 1.3 0 2.7-1.3 3.4-1.5.7-2.7-.5-3.7-1.1l-.4 1.6c0 .3-.4.6-.7.5l-1.3-.2a.7.7 0 0 1-.5-.8c.1-1 .4-2.9 1.8-3.6 1.4-.7 2.5.2 3.5 1 0-1.3 0-2.7 1.3-3.4 1.6-.8 2.8.5 3.7 1 .2-.3.3-1 .4-1.5 0-.4.4-.6.8-.5ZM33.7 27.6h-2.5a.4.4 0 0 1-.4-.4V26c0-.2.2-.4.4-.4h2.5c.2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4ZM36.5 4.3l-1.8 1.8h-.5l-.9-.9a.4.4 0 0 1 0-.5l1.8-1.8c.1-.2.4-.2.5 0l.9.8v.6ZM16 8.5h-1.2a.4.4 0 0 1-.4-.4V5.6c0-.2.2-.3.4-.3H16c.2 0 .4.1.4.3v2.5c0 .3-.2.4-.4.4ZM25.4 17.4l-1-.7a.4.4 0 0 1 0-.5c2.6-3.8 7.8-7.8 13.3-8 .2 0 .4.2.4.4v1.2c0 .2-.2.4-.4.4-4.6.2-9.3 3.6-11.7 7.1-.2.2-.4.2-.6.1Z"
    fill="currentColor"
  />
</svg>`
  ), H = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="none">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.7.3c.4.3.4.9 0 1.2L2.7 8l7 6.5c.4.3.4.9 0 1.2a1 1 0 0 1-1.3 0L0 8 8.4.3a1 1 0 0 1 1.3 0Z"
    fill="#4A4A4A"
  />
</svg>`
  ), j = (
    /* HTML */
    `<svg
  width="347"
  height="128"
  viewBox="0 0 347 128"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M1 96L347 96" stroke="#DEDEDE" stroke-dasharray="2 2" />
  <path d="M1 128L1.00001 4.44055e-06" stroke="#DEDEDE" stroke-dasharray="2 2" />
  <path d="M1 64L347 64" stroke="#DEDEDE" stroke-dasharray="2 2" />
  <path d="M1 32L347 32" stroke="#DEDEDE" stroke-dasharray="2 2" />
</svg>`
  ), P = `.os-subnote-wrap {
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .os-subnote-wrap {
    padding-inline: 20px;
  }
}
.os-subnote {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  border-radius: 4px;
  background: linear-gradient(180deg, #fff 57.5%, #f7f7f8 78.5%);
  color: #4a4a4a;
  font-family: 'Noto Sans SC';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto;
  margin-top: 24px;
  width: 100%;
}

.os-subnote > div {
  display: flex;
  align-items: center;
  gap: 6px;
}

.os-subnote > div .icon {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fb7306;
}

.os-subnote > div .icon svg {
  width: inherit;
  height: inherit;
}

.os-subnote > div span {
  display: inline;
  color: #fb7306;
}
`;
  class x {
    constructor({ container: n, content: t, position: e }) {
      this.container = n, this.content = t, this.position = e || "beforeend", this.init();
    }
    init() {
      this.render();
    }
    render() {
      var t;
      const n = (
        /* HTML */
        ` <div class="os-subnote-wrap"><div class="os-subnote">${this.content}</div></div>`
      );
      this.container && ((t = this.container) == null || t.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${P}</style>`));
    }
  }
  const Z = `.estimate-custom-bill .os-title {
  margin-bottom: 20px !important;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  text-align: left;
}

@media (max-width: 768px) {
  .estimate-custom-bill .os-title {
    font-size: 24px;
    line-height: 32px;
  }
}
.estimate-custom-bill .os-subtitle {
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px !important;
}

.estimate-custom-bill .custom-radio {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.estimate-custom-bill .custom-radio .custom-radio-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 !important;
  padding: 0 !important;
  flex: 1 1 100%;
  width: 100% !important;
  max-width: 100% !important;
  height: 56px !important;
  min-height: 56px !important;
}

.estimate-custom-bill .custom-radio .custom-radio-item input {
  height: 100% !important;
  max-height: 100% !important;
}

.estimate-custom-bill .custom-radio .custom-radio-item:nth-of-type(2n) {
  grid-column: 2 / 3;
}
.estimate-custom-bill .custom-radio .custom-radio-item:last-of-type {
  grid-column: 1 / -1;
}


.os-incentives-note {
  justify-content: center;
  width: 100%;
}

.os-subnote .os-saveup-note .icon {
  width: 32px !important;
  height: 32px !important;
}`;
  class F {
    constructor({ container: n, position: t }) {
      this.position = t || "beforeend", this.container = n, this.init();
    }
    init() {
      this.render(), this.handle(), this.addSubNote();
    }
    addSubNote() {
      if (document.querySelector(".os-incentives-note"))
        return;
      const n = (
        /* HTML */
        `<div class="os-incentives-note">
      <span class="icon">${T}</span> Incentives are found in your area
    </div>`
      );
      new x({
        container: document.querySelector("#estimate-custom-bill .container"),
        content: n,
        position: "afterend"
      });
    }
    render() {
      var e;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-bill" id="estimate-custom-bill">
      <div class="container text-center">
        <h2 class="os-title">How much is your latest monthly energy bill?</h2>
        <h4 class="os-subtitle">Select the range that best fits your bill:</h4>
        <div class="custom-radio with-img borderd">
          ${[
          { text: "$101 - $150", value: "101" },
          { text: "$151 - $200", value: "151" },
          { text: "$201 - $300", value: "201" },
          { text: "$301 - $400 ", value: "301" },
          { text: "$401 - $500", value: "401" },
          { text: "Over $500", value: "501" }
        ].map(({ text: i, value: a }) => (
          /* HTML */
          `<div class="custom-radio-item radioNext">
                <input class="bill-button" type="radio" name="monthly_elec" value="${a}" />${i}
              </div>`
        )).join("")}
        </div>
      </div>
    </div>`
      );
      if (!this.container || document.querySelector("#estimate-custom-bill"))
        return;
      const t = document.querySelector("#bill-slider");
      (e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${Z}</style>`), t && t.remove();
    }
    handle() {
      const n = document.querySelector(".estimate-custom-bill .custom-radio");
      if (!n)
        return;
      n.addEventListener("click", (e) => {
        if (e.target.closest(".radioNext")) {
          const a = document.querySelector(".os-next");
          a && a.dispatchEvent(new Event("click"));
        }
      }), n.querySelectorAll(".bill-button").forEach((e) => {
        e.addEventListener("change", () => {
          var a, o;
          sessionStorage.setItem("monthly_elec", e.value), this.addAdressSubNote();
          const i = (o = (a = e.parentElement) == null ? void 0 : a.textContent) == null ? void 0 : o.trim();
          p(
            "exp_how_much_monthly_bill_click",
            i,
            "click",
            "Step 1 - How much is your latest monthly energy bill?"
          );
        });
      });
    }
    addAdressSubNote() {
      var t, e;
      const n = sessionStorage.getItem("monthly_elec");
      if (n) {
        const a = (Number(n) * 12).toLocaleString("en-US"), o = (
          /* HTML */
          `<div class="os-saveup-note">
        <span class="icon">${A}</span>
        <div>You could <span>save up to $${a}</span> on your yearly energy bill</div>
      </div>`
        ), s = document.querySelector(".os-incentives-note");
        s && ((t = s.closest(".os-subnote-wrap")) == null || t.remove());
        const c = document.querySelector(".os-saveup-note");
        c && ((e = c.closest(".os-subnote-wrap")) == null || e.remove()), new x({
          container: document.querySelector("#estimate-custom-address .container"),
          content: o,
          position: "afterend"
        });
        const l = document.querySelector(".os-chart__cost");
        if (!l)
          return;
        n === "101" && (l.innerHTML = `
          <div>$150</div>
          <div>$100</div>
          <div>$50</div>
          <div>$0</div>
        `), n === "151" && (l.innerHTML = `
          <div>$200</div>
          <div>$150</div>
          <div>$100</div>
          <div>$0</div>
        `), n === "201" && (l.innerHTML = `
          <div>$250</div>
          <div>$200</div>
          <div>$150</div>
          <div>$0</div>
        `), n === "301" && (l.innerHTML = `
          <div>$350</div>
          <div>$250</div>
          <div>$150</div>
          <div>$0</div>
        `), n === "401" && (l.innerHTML = `
          <div>$500</div>
          <div>$300</div>
          <div>$100</div>
          <div>$0</div>
        `), n === "501" && (l.innerHTML = `
          <div>$600</div>
          <div>$400</div>
          <div>$200</div>
          <div>$0</div>
        `);
      }
    }
  }
  const D = "https://api.sunvalue.com/api/address?zip=", V = "https://api.sunvalue.com/api/geo";
  async function k(r, n = "GET", t = null) {
    try {
      const e = {
        method: n,
        headers: {
          "Content-Type": "application/json"
        }
      };
      t && (e.body = JSON.stringify(t));
      const i = await fetch(r, e);
      if (!i.ok)
        throw new Error(`HTTP error! status: ${i.status}`);
      return await i.json();
    } catch (e) {
      throw console.error("Fetch error:", e), e;
    }
  }
  const O = async (r) => await k(D + r), W = async () => await k(V), Y = `#estimate-zip h1:not(.os-title) {
  display: none !important;
}

#estimate-zip h1.title.os-show {
  display: block !important;
}

#estimate-zip .os-title,
#estimate-zip .title,
#estimate-zip .os-info-block__title,
#estimate-zip h5,
#estimate-zip .os-info-block__list li {
  color: #4a4a4a;
  font-family: 'Noto Sans SC';
  text-align: left;
}

@media (max-width: 768px) {
  #estimate-zip h5, .os-info-block__list li {
    font-weight: 500 !important;
  }
  
}
#estimate-zip .os-title {
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  #estimate-zip .os-title {
    font-size: 24px;
    line-height: 32px;
  }
}
#estimate-zip .os-title span {
  display: block;
  color: #fb7306;
}

@media (max-width: 768px) {
  #estimate-zip .os-title span {
    display: inline;
  }
}

#estimate-zip .os-info-block {
  display: grid;
  gap: 16px;
  margin-bottom: 20px;
}

#estimate-zip .os-info-block__title {
  font-size: 16px;
  font-weight: 700;
}

#estimate-zip .os-info-block__list {
  display: grid;
  gap: 12px;
}

#estimate-zip .os-info-block__list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
}

#estimate-zip .os-info-block__list li span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fb7306;
}

#estimate-zip h5,
#estimate-zip .os-info-block__list li {
  font-size: 14px;
  font-weight: 400;
}

#estimate-zip .form-list li:has(#zip) {
  position: relative;
}
#estimate-zip #zip {
  height: 55px;
  padding: 16px;
}

#estimate-zip #zip-error:empty {
  display: none;
}

#estimate-zip .os-current-location {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

#estimate-zip .os-current-location span {
  display: flex;
  justify-content: center;
  align-items: center;
}
#estimate-zip .form-list {
  gap: 16px;
}

`;
  class G {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Y}</style>`), this.titleAndZipChanges(), this.addInfoBlock(), this.zipCodeHandler(), this.addSubNote(), this.transferErrorMsg();
    }
    transferErrorMsg() {
      const n = document.querySelector("#estimate-zip"), t = n == null ? void 0 : n.querySelector("#calculateYourSavings"), e = n == null ? void 0 : n.querySelector(".error-msg");
      !t || !e || t.before(e);
    }
    addSubNote() {
      if (document.querySelector(".os-secure-note"))
        return;
      const n = (
        /* HTML */
        `<div class="os-secure-note">
      <span class="icon">${S}</span> Fast. Simple. Secure
    </div>`
      );
      new x({
        container: document.querySelector("#estimate-zip .container"),
        content: n,
        position: "afterend"
      });
    }
    addInfoBlock() {
      const n = (
        /* HTML */
        `
      <div class="os-info-block">
        <div class="os-info-block__title">Based on your:</div>
        <ul class="os-info-block__list">
          <li><span>${v}</span>Location</li>
          <li><span>${q}</span>Your energy bill amount</li>
          <li><span>${I}</span>Best incentives provided in your area</li>
        </ul>
      </div>
    `
      ), t = document.querySelector("h4");
      t && t.insertAdjacentHTML("afterend", n);
    }
    async titleAndZipChanges() {
      var c, l;
      const n = await W();
      n.postal ? p("exp_zipcode_is_autofilled", n.postal, "input", "Step zipcode") : p("exp_zipcode_is_not_autofilled", "No zipcode", "input", "Step zipcode");
      const t = document.querySelector("#estimate-zip");
      if (!t)
        return;
      const e = t.querySelector(".title"), i = t.querySelector("h5"), a = t.querySelector("#calculateYourSavings"), o = t.querySelector("#zip"), s = t.querySelector("#zip-error");
      if (s && (s.textContent = ""), e) {
        const d = (y) => {
          for (const b of y)
            b.type === "characterData" && (e.insertAdjacentHTML("afterend", u), m.disconnect());
        }, m = new MutationObserver(d), h = { characterData: !0, subtree: !0 };
        m.observe(e, h);
        const u = (
          /* HTML */
          `<h1 class="os-title">
        See if your home qualifies for <span>${(c = e.textContent) == null ? void 0 : c.replace("Incentive", "Energy")}</span>
      </h1>`
        );
        e.insertAdjacentHTML("afterend", u);
      }
      if (i && (i.textContent = "Enter your ZIP code to get started"), a && (a.textContent = "GeT STARTED", a.addEventListener("click", () => {
        p("exp_zipcode_get_started", "Get Started", "click", "Step zipcode");
      })), o) {
        o.setAttribute("placeholder", "Enter Your Zip Code"), n.postal && (o.value = n.postal);
        const d = (
          /* HTML */
          `
        <div class="os-current-location">
          ${n.regionName ? `<span class="os-current-location__icon">${v}</span>
          <span class="os-current-location__city">${n.regionName}</span>` : ""}
        </div>
      `
        );
        (l = o == null ? void 0 : o.closest("li")) == null || l.insertAdjacentHTML("beforeend", d);
      }
    }
    zipCodeHandler() {
      const n = document.querySelector("#zip");
      if (!n)
        return;
      let t;
      n.addEventListener("input", async () => {
        const e = n.value;
        clearTimeout(t), t = setTimeout(async () => {
          const i = document.querySelector(".os-current-location");
          if (!i)
            return;
          e.length < 5 && (i.innerHTML = ""), i.innerHTML = /* HTML */
          `<span class="os-current-location__spinner">${$}</span>`;
          const { state_name: a } = await O(Number(e));
          a ? i.innerHTML = `<span class="os-current-location__icon">${v}</span>
          <span class="os-current-location__city">${a}</span>` : i.innerHTML = "";
        }, 500);
      }), n.addEventListener("change", () => {
        p("exp_zipcode_input", "Input", "input", "Step zipcode");
      });
    }
  }
  const U = `.estimate-custom-shade .os-title {
  color: #4a4a4a;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  margin-bottom: 32px;
  text-align: left;
}

@media (max-width: 768px) {
  .estimate-custom-shade .os-title {
    font-size: 24px;
    line-height: 32px;
  }
}

.estimate-custom-shade .custom-radio {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.estimate-custom-shade .custom-radio-item {
  display: flex !important;
  align-items: center;
  height: 62px;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
}
.estimate-custom-shade .custom-radio-item > div {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
}

.estimate-custom-shade .custom-radio-item .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px !important;
  height: 38px !important;
  margin: 0 !important;
}

.estimate-custom-shade .custom-radio-item .icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`;
  class R {
    constructor({ container: n, position: t, progressBar: e }) {
      this.title = "Does your roof get sunlight?", console.log(this.title), this.position = t || "beforeend", this.container = n, this.progressBar = e, this.init();
    }
    init() {
      this.render(), this.handle();
    }
    updateProgressBar() {
      this.progressBar && this.progressBar.update(4);
    }
    render() {
      var t;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-shade" id="estimate-custom-shade">
      <div class="container text-center">
        <h2 class="os-title">${this.title}</h2>
        <div class="custom-radio with-img borderd">
          <button class="custom-radio-item radioNext" data-value="no_shade">
            <div>
              <span class="icon"
                ><img loading="lazy" height="60" width="60" src="/images/no-shade-white.svg" alt="" /></span
              >Full Sunlight
            </div>
          </button>
          <button class="custom-radio-item radioNext" data-value="low_shade">
            <div>
              <span class="icon"
                ><img loading="lazy" height="60" width="60" src="/images/little-shade-white.svg" alt="" /></span
              >Some Shade
            </div>
          </button>
          <button class="custom-radio-item radioNext" data-value="high_shade">
            <div>
              <span class="icon"
                ><img loading="lazy" height="60" width="60" src="/images/lot-of-shade-white.svg" alt="" /></span
              >Severe Shade
            </div>
          </button>
          <button class="custom-radio-item radioNext" data-value="unknown">
            <div>
              <span class="icon"
                ><img loading="lazy" height="60" width="60" src="/images/uncertain-white.svg" alt="" /></span
              >Uncertain
            </div>
          </button>
        </div>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-shade") || ((t = this.container) == null || t.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${U}</style>`));
    }
    handle() {
      const n = document.querySelector("#estimate-custom-shade .custom-radio");
      n && n.addEventListener("click", (t) => {
        var i, a;
        const e = t.target;
        if (e.closest(".custom-radio-item")) {
          const o = (i = e.closest(".custom-radio-item")) == null ? void 0 : i.dataset.value;
          if (o) {
            const s = document.querySelector(`input[value="${o}"]`);
            if (!s)
              return;
            s.checked = !0;
            const c = document.getElementById("estimate-custom-shade"), l = document.getElementById("estimate-custom-address"), d = document.querySelector(".wrapper");
            c && (c.classList.add("os-hide"), l == null || l.classList.remove("os-hide"), f(), d && (d.dataset.slideName = "address"), g(
              "#estimate-custom-address",
              "exp_property_adress_view",
              "What is your property address?",
              "Step 4 - What is your property address?"
            ), this.updateProgressBar());
          }
          p("exp_roof_click", (a = e.textContent) == null ? void 0 : a.trim(), "click", "Step 3 - Does your roof get sunlight?");
        }
      });
    }
  }
  const X = `.estimate-custom-address .os-title {
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  text-align: left;
  margin-bottom: 20px !important;
}

@media (max-width: 768px) {
  .estimate-custom-address .os-title {
    font-size: 24px;
    line-height: 32px;
  }
}


@media (max-width: 768px) {
  #estimate-custom-address .container {
    background: none !important;
    padding: 0 !important;
  }
}

.estimate-custom-address h5 {
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 8px !important;
}

@media (max-width: 768px) {
  .estimate-custom-address h5 {
    font-weight: 500;
  }
}

.estimate-custom-address .os-location-wrap {
  position: relative;
}

.estimate-custom-address .os-location-wrap .icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  z-index: 1000;
}
.estimate-custom-address input.location {
  border-radius: 5px;
  border: 1px solid #dce0e2;
  background: #fff;
  height: 55px;
  padding-left: 38px;
  padding-right: 16px;
}

#os-address-error:empty {
  display: none;
}

.estimate-custom-address input.location::placeholder {
  color: #757575;
  font-family: 'Noto Sans SC';
  font-size: 16px;
  font-weight: 400;
}

.pac-container {
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: none;
  border: none;
}

.os-incentive-note .icon {
  width: 32px !important;
  height: 32px !important;
}`;
  class J {
    constructor({ container: n, position: t, progressBar: e }) {
      this.position = t || "beforeend", this.container = n, this.progressBar = e, this.init();
    }
    init() {
      this.render(), this.handle();
    }
    updateProgressBar() {
      this.progressBar && this.progressBar.hide();
    }
    render() {
      var t;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-address os-hide" id="estimate-custom-address">
      <div class="container text-center">
        <h2 class="os-title">
          What is your property <br />
          address?
        </h2>
        <h5>Your Address</h5>
        <ul class="form-list">
          <li>
            <div class="os-location-wrap">
              <span class="icon">${M}</span>
              <input
                class="text-field location pac-target-input active"
                type="text"
                id="os-googleautoaddress"
                autocomplete="off"
                placeholder="Enter your property address "
                tabindex="0"
                data-gtm-form-interact-field-id="0"
              />
            </div>
            <span class="error-msg" id="os-address-error"></span>
          </li>

          <li><button id="os-addresssaving" class="btn default btn-with-loader">Continue</button></li>
        </ul>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-address") || ((t = this.container) == null || t.insertAdjacentHTML(this.position, n), this.initAutocomplete(), document.head.insertAdjacentHTML("beforeend", `<style>${X}</style>`));
    }
    handle() {
      const n = document.getElementById("os-googleautoaddress");
      n && (n.addEventListener("input", () => {
        const e = document.getElementById("os-address-error");
        e && (e.textContent = "");
      }), n.addEventListener("change", () => {
        p("exp_property_adress_input", "Input", "input", "Step 4 - What is your property address?");
      }));
      const t = document.querySelector("#os-addresssaving");
      t && t.addEventListener("click", (e) => {
        const i = e.target, a = document.getElementById("os-googleautoaddress"), o = document.getElementById("estimate-custom-address"), s = document.getElementById("estimate-custom-homeowner"), c = document.querySelector(".wrapper"), l = document.querySelector(".os-prev"), d = (i == null ? void 0 : i.dataset.disabled) === "true";
        if (!a)
          return;
        const m = a.value;
        if (m && !d)
          o.classList.add("os-hide"), s.classList.remove("os-hide"), f(), c && (c.dataset.slideName = "homeowner"), l.classList.add("os-hide"), this.updateProgressBar(), g("#estimate-custom-homeowner", "exp_evaluation_view", "Evaluating your average monthly energy bill ...", "Step  - Evaluation View");
        else if (!m) {
          const h = document.getElementById("os-address-error");
          h && (h.textContent = "Please enter your address");
        }
        p("exp_property_adress_click", "Continue", "click", "Step 4 - What is your property address?");
      });
    }
    setContinueButtonState(n) {
      const t = document.getElementById("os-addresssaving");
      t && (t.dataset.disabled = String(!n));
    }
    initAutocomplete() {
      z(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtjbzGiQga-NP-KNnEuJmBWuEdNlZynK0&libraries=places&language=en"
      ).then(() => {
        const n = document.getElementById("os-googleautoaddress");
        if (!n)
          return;
        const t = new google.maps.places.Autocomplete(n, {
          types: ["geocode"],
          componentRestrictions: { country: "US" }
        });
        t.addListener("place_changed", () => {
          const i = t.getPlace().formatted_address;
          this.validateAddress(i);
        });
      }).catch((n) => console.error("Error loading Google Maps Places API:", n));
    }
    validateAddress(n) {
      const t = document.getElementById("autoaddress"), e = document.getElementById("os-address-error");
      !n || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(n) ? (this.setContinueButtonState(!1), e && (e.textContent = "Your address must contain letters and numbers")) : (this.setContinueButtonState(!0), t && (t.value = n), e && (e.textContent = ""));
    }
  }
  const K = `.estimate-custom-homeowner .os-title {
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  text-align: left;
}

@media (max-width: 500px) {
  .estimate-custom-homeowner .os-title {
    font-size: 18px;
    line-height: 26px;
  }
}

.estimate-custom-homeowner .os-title span {
  color: #fb7306;
}
.os-chart__container {
  position: relative;
  display: grid;
  gap: 18px;
  align-content: end;
  justify-content: center;
  height: 198px;
  width: 100%;
  border-radius: 4px;
  background: #edf2f5;
}
@media (max-width: 500px) {
  .os-chart__container {
    height: 172px;
    padding-right: 13px;
    justify-content: unset;
    gap: 10px;
  }
}

.os-chart__container h5 {
  color: #9b9b9b;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  margin: 0;
}
.os-chart__grid {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: calc(100% - 146px);
  display: flex;
  align-items: flex-end;
}
@media (max-width: 768px) {
  .os-chart__grid {
    width: calc(100% - 90px);
    right: 0;
    left: auto;
    transform: none;
  }
}
.os-chart__grid svg {
  width: 100%;
}

.os-chart__cost {
  position: absolute;
  bottom: 0;
  left: 34px;
  display: grid;
  gap: 10px;
  z-index: 2;
  color: #9b9b9b;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  text-transform: uppercase;
}

@media (max-width: 500px) {
  .os-chart__cost {
    left: 9px;
  }
}

.os-chart__values {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  z-index: 2;
}

@media (max-width: 500px) {
  .os-chart__values {
    width: 100%;
    margin-left: auto;
    justify-content: flex-end;
    gap: 10px;
  }
}

.os-chart__before,
.os-chart__after {
  border-radius: 4px 4px 0px 0px;
  width: 132px;
}

@media (max-width: 500px) {
  .os-chart__before,
  .os-chart__after {
    width: 110px;
  }
}

.os-chart__before {
  height: 128px;
  background: #fb7306;
}

.os-chart__after {
  height: 15px;
  background: #83be63;
}

.os-chart__label {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 110px;
}

@media (max-width: 500px) {
  .os-chart__label {
    justify-content: flex-end;
    gap: 84px;
    padding-right: 40px;
  }
}

.os-chart__label :is(.os-before, .os-after) {
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
}

.os-chart__label .os-after {
  color: #83be63;
}

.estimate-custom-homeowner .os-note {
  margin-top: 10px;
  color: #2b3d50;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

@media (max-width: 500px) {
  .estimate-custom-homeowner .os-note {
    margin-top: 12px;
  }
}

.os-loading-bar {
  margin-top: 32px;
  color: #2b3d50;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

@media (max-width: 500px) {
  .os-loading-bar {
    margin-top: 30px;
  }
}
.os-loading-bar__container {
  position: relative;
  height: 42px;
  border-radius: 5px;
  background: #dce0e2;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.06) inset;
}

.os-loading-bar__progress {
  --var-width: 0%;
  width: var(--var-width);
  height: 100%;
  border-radius: 5px;
  background: #83be63;
  transition: width 0.3s;
}
.os-loading-bar__status {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 900;
  line-height: 28px;
}

.os-loading-bar__label {
  margin-top: 12px;
  color: #2b3d50;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
`;
  class Q {
    constructor({ container: n, position: t }) {
      this.position = t || "beforeend", this.container = n, this.init();
    }
    init() {
      this.render(), this.observeShadeClass();
    }
    render() {
      var t;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-homeowner os-hide" id="estimate-custom-homeowner">
      <div class="container text-center">
        <h2 class="os-title">
          <span>Homeowners save up to 87%</span> <br />on their energy bill <br />with Solar Energy Program
        </h2>
        <div class="os-chart">
          <div class="os-chart__container">
            <div class="os-chart__grid">${j}</div>
            <h5 class="os-chart__title">Average monthly energy bill</h5>
            <div class="os-chart__cost">
              <div>$250</div>
              <div>$200</div>
              <div>$150</div>
              <div>$0</div>
            </div>
            <div class="os-chart__values">
              <div class="os-chart__before"></div>
              <div class="os-chart__after"></div>
            </div>
          </div>
          <div class="os-chart__label">
            <div class="os-before">Before</div>
            <div class="os-after">After</div>
          </div>
          <div class="os-note">Based on data from more than 5,174 <br class="mobile"> participants <br class="desktop"> in the solar incentive program.</div>
        </div>

        <div class="os-loading-bar">
          <div class="os-loading-bar__container">
            <div class="os-loading-bar__progress"></div>
            <div class="os-loading-bar__status">0%</div>
          </div>
          <div class="os-loading-bar__label">Evaluating your average monthly <br class="mobile"> energy bill ...</div>
        </div>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-homeowner") || ((t = this.container) == null || t.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${K}</style>`));
    }
    startLoadingBar() {
      var d, m, h;
      const n = document.getElementById("estimate-custom-homeowner"), t = document.getElementById("estimate-custom-name"), e = document.querySelector(".wrapper"), i = (d = this.container) == null ? void 0 : d.querySelector(".os-loading-bar__progress"), a = (m = this.container) == null ? void 0 : m.querySelector(".os-loading-bar__status"), o = (h = this.container) == null ? void 0 : h.querySelector(".os-loading-bar__label");
      let s = 0;
      const l = setInterval(() => {
        if (s++, i && i.style.setProperty("--var-width", `${s}%`), a && (a.textContent = `${s}%`), o)
          if (s === 16)
            o.innerHTML = 'Evaluating your average monthly <br class="mobile"> energy bill ...';
          else if (s === 42)
            o.innerHTML = 'Evaluating your address and <br class="mobile"> position to sun ...';
          else if (s === 83) {
            const u = document.querySelector(".os-current-location__city");
            o.innerHTML = `Exploring available solar <br class="mobile"> programs in ${u == null ? void 0 : u.textContent} ...`;
          } else
            s === 100 && (clearInterval(l), n == null || n.classList.add("os-hide"), t == null || t.classList.remove("os-hide"), f(), e && (e.dataset.slideName = "name"), g("#estimate-custom-name", "exp_name_view", "Last and First Name", "Step - Last and First Name"));
      }, 100);
    }
    observeShadeClass() {
      const n = document.getElementById("estimate-custom-homeowner");
      if (!n)
        return;
      const t = new MutationObserver((e) => {
        e.forEach((i) => {
          i.attributeName === "class" && (i.target.classList.contains("os-hide") || (this.startLoadingBar(), t.disconnect()));
        });
      });
      t.observe(n, { attributes: !0 });
    }
  }
  const nn = `.estimate-custom-name .os-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .estimate-custom-name .os-title {
    font-size: 24px;
    line-height: 32px;
  }
}

.estimate-custom-name .os-title .icon {
  color: #fb7306;
  width: 42px;
  height: 42px;
}

.estimate-custom-name .os-subtitle {
  color: #2b3d50;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin-bottom: 12px;
}

.estimate-custom-name .os-subtitle span {
  font-weight: 700;
  color: #fb7306;
}

.estimate-custom-name .os-subtitle .icon svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .estimate-custom-name .os-subtitle .icon {
    width: 32px;
    height: 32px;
  }
}
.estimate-custom-name h5 {
  font-size: 16px;
  font-weight: 400;
  text-align: left;
}

@media (max-width: 768px) {
  #estimate-custom-name .container {
    background: none !important;
    padding: 0 !important;
  }
  .estimate-custom-name .os-mobile-container {
    padding: 16px;
    border-radius: 4px;
    background: linear-gradient(180deg, #fff 57.5%, #f7f7f8 78.5%);
  }
}
.estimate-custom-name label {
  display: block;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}

@media (max-width: 768px) {
  .estimate-custom-name label {
    font-weight: 500;
  }
}
.estimate-custom-name input {
  border-radius: 5px !important;
  border: 1px solid #dce0e2 !important;
  background: #fff;
  height: 55px !important;
  padding: 16px !important;
  margin-bottom: 8px;
  margin: 0;
}

.estimate-custom-name input::placeholder {
  color: #757575;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
}

.estimate-custom-name .error-msg:empty {
  display: none;
}
.estimate-custom-name .os-actions button {
  margin-top: 4px;
}
.estimate-custom-name .os-note {
  margin-top: 20px;
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
`;
  class tn {
    constructor({ container: n, position: t }) {
      this.position = t || "beforeend", this.container = n, this.init();
    }
    init() {
      this.render(), this.handle();
    }
    render() {
      var t;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-name os-hide" id="estimate-custom-name">
      <div class="container text-center">
        <div class="os-mobile-container">
          <h2 class="os-title"><span class="icon">${N}</span>Congratulations!</h2>
          <h2 class="os-subtitle">
            Our research indicates that you are a great candidate for <br class="mobile"><span>No Net Cost Solar*</span>
          </h2>
          <h5>Provide your contact information to get your qualifications</h5>
        </div>
        <div class="medium-container">
          <ul class="form-list">
            <li>
              <label for="os-fname">Your first name</label>
              <input type="text" class="text-field" id="os-fname" placeholder="Enter first name" autocomplete="on" />
              <span class="error-msg" id="os-fname-error"></span>
            </li>
            <li>
              <label for="os-lname"> Your last name</label>
              <input type="text" class="text-field" id="os-lname" placeholder="Enter last name" autocomplete="on" />
              <span class="error-msg" id="os-lname-error"></span>
            </li>
            <li class="os-actions">
              <button id="os-namesaving" class="btn default btn-with-loader">Continue</button>
            </li>
          </ul>
          <div class="os-note">
            *No net cost solar implies that savings and incentives might offset costs associated with the cost of the
            panels and installation. These are subject to change and vary by location, system size, and energy usage. No
            net cost solar does not mean free
          </div>
        </div>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-name") || ((t = this.container) == null || t.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${nn}</style>`));
    }
    handle() {
      const n = document.getElementById("os-fname"), t = document.getElementById("os-fname-error"), e = document.getElementById("os-lname"), i = document.getElementById("os-lname-error"), a = document.getElementById("os-namesaving");
      n == null || n.addEventListener("change", () => {
        p("exp_fname_input", "Input - First name", "input", "Step - Last and First Name");
      }), e == null || e.addEventListener("change", () => {
        p("exp_lname_input", "Input - Last name", "input", "Step - Last and First Name");
      }), a && a.addEventListener("click", () => {
        const o = document.getElementById("estimate-custom-name"), s = document.getElementById("estimate-custom-email"), c = document.querySelector(".wrapper"), l = document.querySelector(".os-prev");
        t.textContent = "", i.textContent = "";
        const d = n.value, m = e.value;
        if (!d || d.length === 0) {
          t.textContent = "Please enter your first name";
          return;
        }
        if (!m || m.length === 0) {
          i.textContent = "Please enter your last name";
          return;
        }
        const h = document.getElementById("fname"), u = document.getElementById("lname");
        h && (h.value = d), u && (u.value = m), o == null || o.classList.add("os-hide"), s == null || s.classList.remove("os-hide"), f(), c && (c.dataset.slideName = "email"), l.classList.remove("os-hide"), p("exp_name_click", "Continue", "click", "Step - Last and First Name"), g("#estimate-custom-email", "exp_email_view", "View - Email", "Step - Email");
      });
    }
  }
  const en = `.estimate-custom-email .os-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  margin-bottom: 12px;
  text-align: left;
}

@media (max-width: 768px) {
  .estimate-custom-email .os-title {
    font-size: 24px;
    line-height: 32px;
  }
}

.estimate-custom-email .os-title span {
  display: flex;
  align-items: center;
  color: #fb7306;
}

.estimate-custom-email .os-subtitle {
  color: #2b3d50;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .estimate-custom-email .os-subtitle {
    font-size: 16px;
  }
}
.estimate-custom-email .os-subtitle span {
  color: #fb7306;
}

.estimate-custom-email h5 {
  font-size: 16px;
  font-weight: 400;
  text-align: left;
}

.estimate-custom-email label {
  display: block;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}

@media (max-width: 768px) {
  .estimate-custom-email label {
    font-weight: 500;
  }
}

.estimate-custom-email input {
  border-radius: 5px !important;
  border: 1px solid #dce0e2 !important;
  background: #fff;
  height: 55px !important;
  padding: 16px !important;
  margin-bottom: 8px;
  margin: 0;
  max-width: 100% !important;
}

.estimate-custom-email input::placeholder {
  color: #757575;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
}

.estimate-custom-email .error-msg:empty {
  display: none;
}
.estimate-custom-email .os-actions button {
  margin-top: 4px;
}
.estimate-custom-email .os-note {
  margin-top: 20px;
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.os-email-note {
  justify-content: center;
  width: 100%;
}

@media screen and (max-width: 768px) {
  #estimate-custom-email .container {
    background: none !important;
    padding: 0 !important;
  }
}
`;
  class on {
    constructor({ container: n, position: t }) {
      this.position = t || "beforeend", this.container = n, this.init();
    }
    init() {
      this.render(), this.handle(), this.addSubNote();
    }
    addSubNote() {
      if (document.querySelector(".os-email-note"))
        return;
      const n = (
        /* HTML */
        `<div class="os-email-note">
      <span class="icon">${S}</span> We keep your information safe and secure
    </div>`
      );
      new x({
        container: document.querySelector("#estimate-custom-email .container"),
        content: n,
        position: "afterend"
      });
    }
    render() {
      var t;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-email os-hide" id="estimate-custom-email">
      <div class="container text-center">
        <h2 class="os-title">What is your email address?</h2>
        <h2 class="os-subtitle">We will send you all participation details</h2>

        <div class="medium-container">
          <ul class="form-list">
            <li>
              <label for="os-email">Your email (required)</label>
              <input type="text" class="text-field" id="os-email" placeholder="Email" autocomplete="on" />
              <span class="error-msg" id="os-email-error"></span>
            </li>
            <li class="os-actions">
              <button id="os-emailsaving" class="btn default btn-with-loader">Continue</button>
            </li>
          </ul>
        </div>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-email") || ((t = this.container) == null || t.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${en}</style>`));
    }
    handle() {
      const n = document.getElementById("os-email"), t = document.getElementById("os-email-error"), e = document.getElementById("os-emailsaving");
      n == null || n.addEventListener("change", () => {
        p("exp_email_input", "Input - Email", "input", "Step - Email");
      }), e && e.addEventListener("click", () => {
        const i = document.querySelector(".wrapper");
        n.textContent = "";
        const a = n.value, o = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!a || a.trim() === "" || !o.test(a)) {
          t.textContent = "Please Enter a Valid Email Address";
          return;
        }
        const s = document.getElementById("email");
        s && (s.value = a);
        const c = document.querySelector("#slider-block a:last-child");
        c && c.click(), i && (i.dataset.slideName = "phone"), p("exp_email_click", "Continue", "click", "Step - Email ");
      });
    }
  }
  const sn = `#estimate-phone .medium-container {
  max-width: 580px;
}

#estimate-phone h2 {
  margin-bottom: 24px !important;
}

#estimate-phone .title {
  text-align: left;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  margin-bottom: 32px;
}

#estimate-phone h4 {
  display: none;
}
@media (max-width: 768px) {
  #estimate-phone h2 {
    margin-bottom: 16px !important;
  }
}

#estimate-phone h4.hide-in-mobile {
  font-size: 18px !important;
  margin-bottom: 40px !important;
}

#estimate-phone h4show-in-mobile {
  margin-bottom: 16px !important;
}

#estimate-phone #phone-error:empty {
  display: none;
}

#estimate-phone .final-btn {
  margin-top: 40px !important;
  padding: 0 !important;
  width: 100%;
}

#estimate-phone label {
  display: block;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}

@media (max-width: 768px) {
  #estimate-phone label {
    font-weight: 500;
  }
  
}

#estimate-phone #phone {
  border-radius: 5px !important;
  border: 1px solid #dce0e2 !important;
  background: #fff;
  height: 55px !important;
  padding: 16px !important;
  margin-bottom: 8px;
  margin: 0;
  max-width: 100% !important;
}

#estimate-phone #phone::placeholder {
  color: #757575;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
}

#estimate-phone .final-btn, #estimate-phone .submitButton {
  margin-top: 20px !important;
  border-radius: 5px !important;
}

#estimate-phone #tcpa_label {
  color: #5c5d61;
  font-size: 12px;
  font-weight: 350;
}

@media screen and (max-width: 768px) {
  #estimate-phone .container {
    background: none !important;
    padding: 0 !important;
  }
}`;
  class an {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${sn}</style>`), this.addLabel(), this.inputChanges();
    }
    inputChanges() {
      const n = document.getElementById("phone");
      if (!n)
        return;
      n.placeholder = "Phone number", n.addEventListener("change", () => {
        p("exp_phone_input", "Input - Email", "input", "Step - Phone ");
      });
      const t = document.getElementById("submit");
      t && t.addEventListener("click", () => {
        p("exp_phone_click", "Submit", "click", "Step - Phone");
      });
    }
    addLabel() {
      const n = document.getElementById("phone");
      if (!n)
        return;
      n.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        '<label for="phone" class="os-label">Your phone (required)</label>'
      );
    }
  }
  const rn = `/* .swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: none !important;
} */

.os-navigation {
  display: none;
  font-family: Noto Sans SC, sans-serif;
}

@media (max-width: 768px) {
  .os-navigation {
    max-width: 100%;
    padding: 0 20px;
  }
}

.os-navigation {
  width: 100%;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: calc(50% + 50px);
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  max-width: 550px !important;
}

.os-navigation .os-next {
  width: 100%;
  margin-top: 40px;
  z-index: 50;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(131, 190, 99);
  font-family: inherit;
  border: none;
  border-radius: 5px;
  min-height: 56px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  min-width: 333px;
  cursor: pointer;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .os-navigation .os-next {
    min-width: 200px;
  }
}

.os-navigation .os-next:hover {
  background: rgb(143, 210, 106);
  transition: background 0.3s;
}

.os-navigation .os-note {
  display: none;
  margin-top: 24px;
  color: #757575;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.os-prev {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: none;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  border-radius: 100px;
  background: linear-gradient(180deg, #FFF 57.5%, #F7F7F8 78.5%);
  font-weight: 700;
  font-size: 16px;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  z-index: 20;
}

.os-prev[data-current-slide="1"],
.os-prev[data-current-slide="2"],
.os-prev[data-current-slide="3"],
.os-prev[data-current-slide="4"],
.os-prev[data-current-slide="7"]  {
  display: flex;
}

@media (max-width: 768px) {
  .os-prev {
    bottom: 20px;
  }
}


.os-prev::before:hover {
  opacity: 0.8;
  transition: opacity 0.3s;
}

.wrapper:not([data-current-slide]) .os-prev {
  display: none;
}

.os-prev:has(~ .swiper-container.d-none) {
  display: none;
}

[data-current-slide='1'] .os-next {
  @media (max-width: 768px) {
    margin-top: 0 !important;
  }
}

[data-current-slide='3'] .os-navigation .os-note {
  display: block;
}

[data-current-slide='2'] .os-navigation,
[data-current-slide='6'] .os-navigation,
[data-current-slide='4'] .os-navigation,
[data-current-slide='5'] .os-navigation,
[data-current-slide='7'] .os-navigation {
  display: flex;
}

[data-current-slide='2'] .os-navigation .os-next,
[data-current-slide='4'] .os-navigation .os-next,
[data-current-slide='7'] .os-navigation .os-next {
  display: none;
}

.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide) ~ .os-navigation {
  height: 24px;
  .os-prev {
    padding: 0;
  }
  @media (max-width: 768px) {
    top: 240px !important;
  }
}

.swiper-slide.three.swiper-slide-active:has(#estimate-homeowner.os-hide) ~ .os-navigation {
  @media (min-width: 768px) {
    top: 220px !important;
  }
}

.swiper-slide-active:has(#estimate-provider) ~ .os-navigation,
.swiper-slide-active:has(#estimate-phone) ~ .os-navigation {
  @media (max-width: 768px) {
    margin-top: 24px !important;
  }
}
`;
  class ln {
    constructor({ progressBar: n, swiper: t }) {
      this.progressBar = n, this.swiper = t, this.init();
    }
    init() {
      this.render();
    }
    render() {
      const n = (
        /* HTML */
        `
      <div class="os-navigation">
        <button type="button" class="os-next">Next</button>
        <div class="os-note">
          *No net cost solar implies that savings and incentives might offset costs associated with the cost of the
          panels and installation. These are subject to change and vary by location, system size, and energy usage. No
          net cost solar does not mean free
        </div>
      </div>
    `
      ), t = (
        /* HTML */
        `<button type="button" data-current-slide="0" class="os-prev">${H}</button>`
      ), e = document.querySelector("#slider-block"), i = document.querySelector(".swiper-wrapper"), a = document.querySelector(".wrapper"), o = document.querySelector(".content-wrapper .container");
      if (!i || !o)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${rn}</style>`), i.insertAdjacentHTML("beforeend", n), o.insertAdjacentHTML("afterbegin", t);
      const s = document.querySelector(".os-prev"), c = document.querySelector(".os-next");
      s == null || s.addEventListener("click", () => {
        var m;
        const l = document.querySelector(".os-navigation");
        if (l.classList.add("os-hide"), setTimeout(() => {
          l.classList.remove("os-hide");
        }, 400), s.dataset.currentSlide === "1" && p(
          "exp_how_much_monthly_bill_back",
          "Back",
          "click",
          "Step 1 - How much is your latest monthly energy bill?"
        ), s.dataset.currentSlide === "2" && p("exp_utility_provider_back", "Back", "click", "Step 2 - Who is your utility provider?"), s.dataset.currentSlide === "3") {
          const h = document.getElementById("estimate-custom-address"), u = document.getElementById("estimate-custom-shade"), y = document.getElementById("estimate-custom-name"), b = document.getElementById("estimate-custom-email");
          if (u.classList.contains("os-hide") || p("exp_roof_back", "Back", "click", "Step 3 - Does your roof get sunlight?"), !h.classList.contains("os-hide")) {
            h.classList.add("os-hide"), u.classList.remove("os-hide"), f(), this.progressBar && this.progressBar.update(3), p("exp_property_adress_back", "Back", "click", "Step 4 - What is your property address?");
            return;
          }
          if (!b.classList.contains("os-hide")) {
            b.classList.add("os-hide"), y.classList.remove("os-hide"), f(), a.dataset.slideName = "name", s.classList.add("os-hide"), p("exp_email_back", "Back", "click", "Step - Email ");
            return;
          }
        }
        if (s.dataset.currentSlide === "7") {
          (m = this.swiper) == null || m.slideTo(3), a.dataset.slideName = "email", p("exp_phone_back", "Back", "click", "Step - Phone");
          return;
        }
        const d = e == null ? void 0 : e.querySelector("a:first-child");
        setTimeout(() => {
          d == null || d.click();
        }, 0);
      }), c == null || c.addEventListener("click", () => {
        const l = e == null ? void 0 : e.querySelector("a:last-child"), d = document.querySelector(".os-navigation");
        d.classList.add("os-hide"), setTimeout(() => {
          d.classList.remove("os-hide");
        }, 400), setTimeout(() => {
          l == null || l.click();
        }, 0);
      });
    }
  }
  class dn {
    constructor() {
      var n;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (n = this.swiperElement) == null ? void 0 : n.swiper, this.progressBar = new C(), this.addNavigation(), this.otherEvents();
    }
    addNavigation() {
      new ln({ progressBar: this.progressBar, swiper: this.swiper });
    }
    changeSlides() {
      new G(), new an();
      const n = document.querySelector(".swiper-container"), t = n == null ? void 0 : n.swiper, e = w("#solarForm .wrapper"), i = w(".os-navigation");
      i.querySelector(".os-next");
      const a = document.querySelector(".os-prev");
      this.progressBar.hide(), g("#estimate-zip", "exp_zipcode_view", "View Screen", "Step zipcode"), t == null || t.on("transitionEnd", () => {
        const o = t.realIndex;
        e.dataset.currentSlide = o.toString(), a && (a.dataset.currentSlide = o.toString());
        const s = document.querySelector(".swiper-slide-active"), c = (s == null ? void 0 : s.clientHeight) || 0;
        if (i.style.top = `${c}px`, n && (n.dataset.currentSlide = o.toString()), o === 0 && this.progressBar.hide(), o === 1 && (this.progressBar.show(), this.progressBar.update(1), g(
          "#estimate-custom-bill",
          "exp_how_much_monthly_bill_view",
          "How much is your latest monthly energy bill?",
          "Step 1 - How much is your latest monthly energy bill?"
        ), g(
          ".os-incentives-note",
          "exp_how_much_monthly_bill_view_element",
          "Incentives are found in your area",
          "Step 1 - How much is your latest monthly energy bill?"
        )), o === 2 && (this.progressBar.update(2), g(
          "#estimate-provider",
          "exp_utility_provider_view",
          "Who is your utility provider?",
          "Step 2 - Who is your utility provider?"
        )), o === 3) {
          this.progressBar.update(3), document.getElementById("estimate-custom-address");
          const l = document.getElementById("estimate-custom-shade");
          document.getElementById("estimate-custom-name"), document.getElementById("estimate-custom-email"), l.classList.contains("os-hide") || g(
            "#estimate-custom-shade",
            "exp_roof_view",
            "Does your roof get sunlight?",
            "Step 3 - Does your roof get sunlight?"
          );
        }
        o === 4 && document.querySelectorAll('input[name="shade"]').forEach((d) => {
          if (d.checked) {
            const m = d.closest(".radioNext");
            m && m.click();
          }
        }), o === 4 && t.slideTo(7), o === 7 && g("#estimate-phone", "exp_phone_view", "View - Phone", "Step - Phone");
      });
    }
    otherEvents() {
      const n = document.querySelector("#estimate-provider .custom-radio");
      n && n.addEventListener("click", (t) => {
        var i, a;
        const e = t.target;
        if (e.closest(".radioNext")) {
          const o = (a = (i = e.closest(".radioNext")) == null ? void 0 : i.textContent) == null ? void 0 : a.trim();
          p("exp_utility_provider_click", o, "click", "Step 2 - Who is your utility provider?");
        }
      });
    }
    addSlides() {
      const n = document.querySelectorAll(".swiper-slide");
      new F({ container: n[1], position: "beforeend" }), new R({ container: n[3], position: "beforeend", progressBar: this.progressBar }), new J({ container: n[3], position: "beforeend", progressBar: this.progressBar }), new Q({ container: n[3], position: "beforeend" }), new tn({ container: n[3], position: "beforeend" }), new on({ container: n[3], position: "beforeend" });
    }
  }
  const cn = `.site-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 0;
  margin-top: 0 !important;
  margin-bottom: 24px;
  padding-top: 27px;
  min-height: 56px;
  height: auto;
}

.site-header.fixed {
  padding-top: 27px;
}

.site-header .lock {
  display: none;
}

.site-header .container {
  max-width: 540px;
}
@media (max-width: 768px) {
  .site-header {
    margin-top: 10px;
    padding: 15px 0;
    padding-top: 15px;
    margin-bottom: 16px;
  }
  .site-header.fixed {
    padding-top: 15px;
  }

  .site-header .container {
    margin-inline: 20px;
    padding: 0;
  }
}

.wrapper {
  align-items: flex-start;
  padding-top: 71px !important;
  min-height: 100dvh !important;
}

.wrapper[data-current-slide='1'],
.wrapper[data-current-slide='2'],
.wrapper[data-current-slide='3'] {
  padding-top: 100px !important;
}

.wrapper[data-slide-name='homeowner'],
.wrapper[data-slide-name='name'],
.wrapper[data-slide-name='email'],
.wrapper[data-current-slide='7'] {
  padding-top: 80px !important;
}

@media (max-width: 768px) {
  .wrapper {
    padding-top: 41px !important;
  }

  .wrapper[data-current-slide='1'],
  .wrapper[data-current-slide='2'],
  .wrapper[data-current-slide='3'] {
    padding-top: 100px !important;
  }

  .wrapper[data-current-slide='7'] {
    padding-top: 138px !important;
  }
  .wrapper[data-slide-name='homeowner'],
  .wrapper[data-slide-name='name'],
  .wrapper[data-slide-name='email'] {
    padding-top: 74px !important;
  }
}

#solarForm .wrapper::before {
  opacity: 0.6;
}

#solarForm .wrapper::after {
  background: linear-gradient(180deg, #edf2f5 12.81%, rgba(255, 255, 255, 0) 100%) !important;
}

#solarForm[data-background='false']::before {
  background-image: none !important;
}

#solarForm[data-background='opacity'] {
  @media (max-width: 768px) {
    #solarForm::before {
      opacity: 0.1 !important;
    }
  }
}

@media (min-width: 768px) {
  #solarForm .wrapper::before {
    opacity: 1;
    background-image: url('https://conversionratestore.github.io/projects/sunvalue/img/desktop-bg.webp');
  }
}

.wrapper .swiper-wrapper > li {
  padding: 0 !important;
}

#estimate-bill,
#estimate-email,
#estimate-map,
#estimate-shade,
#estimate-name {
  display: none;
}
#estimate-email,
#estimate-name,
#estimate-phone {
  @media (max-width: 768px) {
    margin-top: -63px;
  }
}

#solarForm h2.title:not(#processor-title) {
  font-size: 32px !important;
  font-weight: 900 !important;
  line-height: 42px !important;
  margin-bottom: 32px !important;
  text-align: left;
}

@media (max-width: 768px) {
  #solarForm h2.title:not(#processor-title) {
    font-size: 24px !important;
    line-height: 32px !important;
    margin-bottom: 16px !important;
  }
}

:is(
    #estimate-custom-bill,
    #estimate-provider,
    #estimate-custom-shade,
    #estimate-custom-address,
    #estimate-custom-homeowner,
    #estimate-custom-name,
    #estimate-custom-email,
    #estimate-phone,

  )
  .container {
  padding: 24px !important;
  background: #fff;
  border-radius: 4px;
}

@media (max-width: 768px) {
  :is(
      #estimate-custom-bill,
      #estimate-provider,
      #estimate-custom-shade,
      #estimate-custom-address,
      #estimate-custom-homeowner,
      #estimate-custom-name,
      #estimate-custom-email,
      #estimate-phone,

    )
    .container {
    padding: 16px !important;
    margin-inline: 20px;
    max-width: calc(100% - 40px) !important;
  }
}

@media (max-width: 768px) {
  h1:has(+ .os-bg-title) {
    margin-bottom: 10px !important;
  }
}

.wrapper :is(.container, .small-container, .medium-container) {
  max-width: 540px !important;
  padding: 0 !important;
}

@media (max-width: 768px) {
  .wrapper .container {
    padding: 0 20px !important;
  }
}

.wrapper .medium-container {
  margin-top: 16px;
}

.swiper-container {
  overflow: visible !important;
  overflow-x: clip !important;
}

.swiper-slide {
  height: min-content !important;
}

br.mobile {
  @media (min-width: 768px) {
    display: none;
  }
}

br.desktop {
  @media (max-width: 768px) {
    display: none;
  }
}

input {
  font-size: 16px !important;
}

ul.form-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100% !important;
  margin-top: 0 !important;
}

@media (max-width: 768px) {
  ul.form-list {
    gap: 16px;
  }
}

ul.form-list li {
  margin: 0 !important;
}

ul.form-list li,
ul.form-list button {
  width: 100% !important;
}

ul.form-list input,
ul.form-list a,
ul.form-list button {
  border-radius: 5px !important;
}

ul.form-list button {
  border: none !important;
}

#estimate-bill h2.hide-in-mobile {
  margin-bottom: 40px !important;
}

#estimate-name .form-list {
  gap: 8px;
}

.swiper-container[data-current-slide='2'] + #slider-block {
  display: none;
}

@media (min-width: 768px) {
  .swiper-wrapper {
    height: 100% !important;
  }
}

#next-block {
  display: none;
}

#slider-block {
  display: none !important;
  margin-top: 20px;
}

@media (min-width: 768px) {
  #slider-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: calc(50% + 50px);
    max-width: 580px;
    padding: 0 !important;
    height: min-content;
    margin-inline: auto;
  }
}

#slider-block a:not(.d-none) {
  position: static !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
}

#slider-block a:last-child {
  width: 333px;
  height: 56px;
  border-radius: 5px;
  background: rgb(131, 190, 99);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

[data-current-slide='6'] + #slider-block {
  top: calc(50% + 150px);
}

.os-visibility-hidden {
  visibility: hidden !important;
}

.os-hide {
  display: none !important;
}

.os-inline-block {
  display: inline-block !important;
}

.os-block {
  display: block !important;
}

.os-flex {
  display: flex !important;
}

#estimate-provider .title {
  margin-bottom: 32px;
}

#estimate-provider .custom-radio {
  display: flex;
  flex-direction: column;
  padding-top: 0 !important;
  gap: 12px;
}

@media (max-width: 768px) {
  #estimate-provider .custom-radio {
    gap: 16px;
  }
}

#solarForm .custom-radio .custom-radio-item {
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  padding-block: 16px;
  line-height: 24px !important;
  font-size: 16px !important;
  text-transform: uppercase !important;
  font-weight: 700 !important;
}

#autoaddress,
#email,
#phone {
  border-radius: 8px;
}

#bill-slider {
  margin: 0 auto;
  padding-top: 20px;
}

#bill-slider .rangeslider-tooltip__arrow {
  position: absolute;
  top: 56px;
  left: 166px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgb(255, 255, 255);
  z-index: 20;
}

@media (max-width: 768px) {
  #bill-slider .rangeslider-tooltip__arrow {
    left: 100px;
  }
}

#bill-slider .rangeslider-tooltip {
  position: absolute;
  top: 64px;
  left: calc(160.687px - 15px);
  box-sizing: border-box;
  border: 1px solid rgba(66, 117, 150, 0.16);
  border-radius: 5px;
  padding: 4px 10px;
  background: rgb(255, 255, 255);
  font-size: 20px;
}

#bill-slider .rangeslider-tooltip::before {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgb(255, 255, 255);
}

#bill-slider .rangeslider {
  z-index: 9999;
}

#bill-slider .sliderLegend {
  position: absolute;
  top: -8px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 768px) {
  #bill-slider .sliderLegend {
    top: -5px;
  }
}

#bill-slider .sliderLegend p {
  position: static !important;
}

.os-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
  margin-bottom: 19px;
}

@media (max-width: 768px) {
  .os-spinner {
    margin-bottom: 50px;
  }
}

.os-spinner.os-hide-o {
  visibility: collapse;
  height: 0;
  opacity: 0;
}

[data-os='result'].os-hide-o {
  opacity: 0;
  visibility: collapse;
  height: 0;
}

[data-os='result'] {
  opacity: 1;
  transition: opacity 0.3s;
}

[data-os='result'] .os-spinner {
  width: 50px;
  height: 50px;
  margin-inline: auto;
}

.progress-block {
  display: none !important;
}

#companies {
  display: grid;
  gap: 16px;
}

#companies > div {
  margin: 0 !important;
  border: none !important;
}

#companies > div:hover {
  background: rgb(143, 210, 106);
  transition: background 0.3s;
}

.status-indicator {
  display: none !important;
}

.error-msg,
.error-msg.vsmall-container.mb-20 {
  margin: 0 !important;
  height: 0 !important;
}

.error-msg:not(:empty) {
  margin: 10px 0 !important;
  height: auto !important;
}

.header-right {
  display: none;
}

.site-footer {
  border-top: none !important;
}

@media screen and (max-width: 575px) {
  .banner-slider .swiper-slide,
  .banner-slider .swiper-slide.one {
    padding: 25px 0 0 0 !important;
  }
}
`;
  E({ name: "Hyp. #6 - Introduce short funnel with merging zip code with address step", dev: "OS" }), L("exp_autofill_zipcode_reinforcement_message");
  class pn {
    constructor() {
      this.slideManager = new dn(), this.init();
    }
    init() {
      location.pathname === "/save/" && _(".swiper-slide-active").then(() => {
        _(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${cn}</style>`), document.title = "Solar Incentive Program", this.slideManager.addSlides(), this.slideManager.changeSlides();
        });
      });
    }
  }
  new pn();
})();
