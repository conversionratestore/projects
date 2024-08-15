(function() {
  "use strict";
  const p = (r, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), console.log(`Event: ${r} | ${n} | ${e} | ${t}`);
  }, $ = ({ name: r, dev: n }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, L = (r) => document.querySelector(r), T = (r) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, N = (r) => new Promise((n, e) => {
    if (r.split(".").pop(), Array.from(document.scripts).map((s) => s.src.toLowerCase()).includes(r.toLowerCase()))
      return console.log(`Script ${r} already downloaded!`), n("");
    const i = document.createElement("script");
    i.src = r, i.onload = n, i.onerror = e, document.head.appendChild(i);
  }), H = (r) => {
    Array.from(document.scripts).filter((e) => e.src.includes(r)).forEach((e) => {
      var t;
      return (t = e.parentNode) == null ? void 0 : t.removeChild(e);
    });
  };
  function E(r) {
    return new Promise((n) => {
      if (document.querySelector(r))
        return n(document.querySelector(r));
      const e = new MutationObserver(() => {
        document.querySelector(r) && (n(document.querySelector(r)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const g = (r, n, e, t) => {
    let i = new IntersectionObserver(
      (o) => {
        o.forEach((a) => {
          a.isIntersecting && (i.unobserve(a.target), setTimeout(function() {
            s.observe(a.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.5
      }
    ), s = new IntersectionObserver((o) => {
      o.forEach((a) => {
        a.isIntersecting ? (p(n || `view_element_${a.target.id}`, e || "Element visibility", "view", t || a.target.id), i.unobserve(a.target)) : i.observe(a.target), s.unobserve(a.target);
      });
    });
    document.querySelectorAll(r).forEach((o) => {
      i.observe(o);
    });
  }, b = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, j = `.os-progress {
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
  class P {
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
      ), e = (
        /* HTML */
        `
      <div class="os-ind-step"><span>1</span>/4</div>
    `
      ), t = document.querySelector(".wrapper"), i = document.querySelector(".content-wrapper .container");
      document.head.insertAdjacentHTML("afterbegin", `<style>${j}</style>`), t == null || t.insertAdjacentHTML("beforeend", n), i == null || i.insertAdjacentHTML("beforeend", e);
    }
    update(n) {
      if (n < 1 || n > 4) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const e = document.querySelector(".os-progress"), t = document.querySelector(".os-ind-step span");
      if (t && (t.textContent = n.toString()), !e)
        return;
      const i = e.querySelector('[data-step="1"]'), s = e.querySelector('[data-step="2"]'), o = e.querySelector('[data-step="3"]'), a = e.querySelector('[data-step="4"]');
      n === 1 && (i.style.setProperty("--fill", "100%"), s.style.setProperty("--fill", "0%"), o.style.setProperty("--fill", "0%"), a.style.setProperty("--fill", "0%")), n === 2 && (i.style.setProperty("--fill", "100%"), s.style.setProperty("--fill", "50%"), o.style.setProperty("--fill", "0%"), a.style.setProperty("--fill", "0%")), n === 3 && (i.style.setProperty("--fill", "100%"), s.style.setProperty("--fill", "100%"), o.style.setProperty("--fill", "50%"), a.style.setProperty("--fill", "0%")), n === 4 && (i.style.setProperty("--fill", "100%"), s.style.setProperty("--fill", "100%"), o.style.setProperty("--fill", "100%"), a.style.setProperty("--fill", "50%"));
    }
    hide() {
      const n = document.querySelector(".os-progress");
      n == null || n.classList.add("os-hide");
      const e = document.querySelector(".os-ind-step");
      e && e.classList.add("os-hide");
    }
    show() {
      const n = document.querySelector(".os-progress");
      n == null || n.classList.remove("os-hide");
      const e = document.querySelector(".os-ind-step");
      e && e.classList.remove("os-hide");
    }
  }
  const Z = (
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
  ), z = (
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
  ), k = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
  <path
    d="M10 0C6.006 0 2.757 3.25 2.757 7.243c0 4.957 6.482 12.233 6.758 12.54.259.29.712.289.97 0 .276-.307 6.758-7.583 6.758-12.54C17.243 3.25 13.994 0 10 0Zm0 10.887a3.648 3.648 0 0 1-3.644-3.644A3.648 3.648 0 0 1 10 3.6a3.648 3.648 0 0 1 3.644 3.644A3.648 3.648 0 0 1 10 10.887Z"
    fill="currentColor"
  />
</svg>`
  ), F = (
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
  ), V = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
  <path
    d="M16.25.625H3.75a1.25 1.25 0 0 0-1.25 1.25v16.073a1.25 1.25 0 0 0 2.098.92l.816-.755a.481.481 0 0 1 .349-.125.465.465 0 0 1 .33.168l.508.61a1.715 1.715 0 0 0 2.05.455c.228-.107.43-.263.59-.457l.403-.483a.47.47 0 0 1 .72 0l.402.482a1.719 1.719 0 0 0 2.64 0l.505-.606a.466.466 0 0 1 .678-.043l.813.75a1.25 1.25 0 0 0 2.098-.917V1.875a1.25 1.25 0 0 0-1.25-1.25ZM8.109 7.681l1.48-2.96A.625.625 0 0 1 10.773 5v2.056l.934.7a.625.625 0 0 1 .155.832l-1.48 2.368a.626.626 0 0 1-1.155-.331V8.937l-.839-.419a.625.625 0 0 1-.28-.837Zm5.016 6.381h-6.25a.625.625 0 1 1 0-1.25h6.25a.624.624 0 1 1 0 1.25Z"
    fill="currentColor"
  />
  <path d="M13.125 15.313h-6.25a.625.625 0 1 1 0-1.25h6.25a.624.624 0 1 1 0 1.25Z" fill="currentColor" />
</svg>`
  ), D = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
  <path
    d="M17.465 10.197c.277.266.452.639.452 1.053a1.46 1.46 0 0 1-1.286 1.447c.278.266.452.639.452 1.053a1.46 1.46 0 0 1-1.285 1.447c.278.266.452.639.452 1.053a1.46 1.46 0 0 1-1.458 1.458h-4.48a6.884 6.884 0 0 1-3.41-.905l-.235-.134V7.957A8.135 8.135 0 0 0 8.324 5.32l1.068-2.776c.153-.4.544-.668.972-.668h.088c.601 0 1.15.277 1.508.761.357.484.46 1.09.284 1.665l-.838 2.72a.207.207 0 0 0 .2.27h5.686A1.46 1.46 0 0 1 18.75 8.75a1.46 1.46 0 0 1-1.285 1.447ZM5.833 7.917v9.166c0 .575-.467 1.042-1.041 1.042h-2.5a1.043 1.043 0 0 1-1.042-1.042V7.917c0-.575.467-1.042 1.042-1.042h2.5c.574 0 1.041.467 1.041 1.042Z"
    fill="currentColor"
  />
</svg>`
  ), O = (
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
  ), W = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none">
  <path
    d="M15.002.001C11.142.001 8 3.14 8 7c0 3.86 3.142 7.002 7.002 7.002S22 10.86 22 7A7.004 7.004 0 0 0 15.002.001ZM15 1.997c.25 0 .5.167.5.5v1.078a2.003 2.003 0 0 1 1.498 1.93.5.5 0 1 1-1 0 .99.99 0 0 0-.996-1.002c-.558 0-1 .443-1 1.001 0 .558.442 1 1 1 1.098 0 1.996.902 1.996 2 0 .926-.64 1.706-1.498 1.93V11.5c0 .667-1 .667-1 0v-1.068A2.006 2.006 0 0 1 13 8.504a.5.5 0 1 1 1.002 0 .993.993 0 0 0 1 1.001.99.99 0 0 0 .996-1 .99.99 0 0 0-.996-1 2.008 2.008 0 0 1-2.001-2c0-.925.642-1.704 1.499-1.93V2.497c0-.333.25-.5.5-.5ZM27.678 12.6c-.607 0-1.215.233-1.676.693l-3.166 3.166c.415.576.664 1.28.664 2.042 0 1.93-1.569 3.5-3.5 3.5h-5.45c-.726.065-.726-1.062 0-.997H20a2.485 2.485 0 0 0 2.5-2.503c0-.49-.143-.94-.383-1.322a2.537 2.537 0 0 0-2.116-1.177L9.5 16.002c-2.125 0-3.304 1.099-4.292 2.084l6.942 6.943c.108-.017.221-.029.35-.029H21c1.719 0 3.155-.848 4.172-2.321 1.145-1.659 3.29-4.762 4.237-6.105.345-.49.566-1.05.587-1.631a2.208 2.208 0 0 0-.643-1.65 2.366 2.366 0 0 0-1.675-.694ZM3.5 18a.496.496 0 0 0-.353.146l-3 3a.5.5 0 0 0 0 .71l8.002 7.998a.5.5 0 0 0 .705 0l3-3.001a.5.5 0 0 0 0-.705l-8.002-8.002A.498.498 0 0 0 3.5 18Z"
    fill="currentColor"
  />
</svg>`
  ), Y = (
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
  ), G = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="none">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.7.3c.4.3.4.9 0 1.2L2.7 8l7 6.5c.4.3.4.9 0 1.2a1 1 0 0 1-1.3 0L0 8 8.4.3a1 1 0 0 1 1.3 0Z"
    fill="#4A4A4A"
  />
</svg>`
  ), U = (
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
  ), R = `.os-subnote-wrap {
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
  class w {
    constructor({ container: n, content: e, position: t }) {
      this.container = n, this.content = e, this.position = t || "beforeend", this.init();
    }
    init() {
      this.render();
    }
    render() {
      var e;
      const n = (
        /* HTML */
        ` <div class="os-subnote-wrap"><div class="os-subnote">${this.content}</div></div>`
      );
      this.container && ((e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${R}</style>`));
    }
  }
  const K = `.estimate-custom-bill .os-title {
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
}`, f = {
    Alabama: { savings: "62.04%" },
    Alaska: { savings: "77.40%" },
    Arizona: { savings: "60.19%" },
    Arkansas: { savings: "55.24%" },
    California: { savings: "79.56%" },
    Colorado: { savings: "64.89%" },
    Connecticut: { savings: "78.72%" },
    Delaware: { savings: "65.78%" },
    Florida: { savings: "64.71%" },
    Georgia: { savings: "58.19%" },
    Hawaii: { savings: "88.83%" },
    Idaho: { savings: "52.43%" },
    Illinois: { savings: "69.12%" },
    Indiana: { savings: "67.95%" },
    Iowa: { savings: "55.36%" },
    Kansas: { savings: "62.57%" },
    Kentucky: { savings: "61.51%" },
    Louisiana: { savings: "59.28%" },
    Maine: { savings: "77.80%" },
    Maryland: { savings: "67.87%" },
    Massachusetts: { savings: "83.73%" },
    Michigan: { savings: "71.89%" },
    Minnesota: { savings: "62.49%" },
    Mississippi: { savings: "60.16%" },
    Missouri: { savings: "54.71%" },
    Montana: { savings: "57.66%" },
    Nebraska: { savings: "49.19%" },
    Nevada: { savings: "66.60%" },
    "New Hampshire": { savings: "83.83%" },
    "New Jersey": { savings: "70.10%" },
    "New Mexico": { savings: "63.13%" },
    "New York": { savings: "78.06%" },
    "North Carolina": { savings: "57.81%" },
    "North Dakota": { savings: "48.02%" },
    Ohio: { savings: "64.59%" },
    Oklahoma: { savings: "55.48%" },
    Oregon: { savings: "54.79%" },
    Pennsylvania: { savings: "72.02%" },
    "Rhode Island": { savings: "81.82%" },
    "South Carolina": { savings: "65.06%" },
    "South Dakota": { savings: "55.71%" },
    Tennessee: { savings: "59.32%" },
    Texas: { savings: "64.94%" },
    Utah: { savings: "52.56%" },
    Vermont: { savings: "75.19%" },
    Virginia: { savings: "64.13%" },
    Washington: { savings: "50.15%" },
    "West Virginia": { savings: "60.81%" },
    Wisconsin: { savings: "66.37%" },
    Wyoming: { savings: "51.88%" },
    default: { savings: "88.83%" }
  }, X = `.os-clarification {
  margin-top: 24px;
  color: #757575;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

@media (max-width: 768px) {
  .os-clarification {
    padding-inline: 20px;

  }
}`;
  class C {
    constructor({ selector: n, content: e, position: t }) {
      this.container = document.querySelector(n), this.content = e, this.position = t || "beforeend", this.init();
    }
    init() {
      this.checkContainer(), this.render();
    }
    render() {
      const n = (
        /* HTML */
        `<div class="os-clarification"><div class="medium-container">${this.content}</div></div>`
      );
      this.container && (this.container.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${X}</style>`));
    }
    checkContainer() {
      if (!this.container) {
        console.log("Clarification container not found");
        return;
      }
    }
  }
  class J {
    constructor({ container: n, position: e }) {
      this.position = e || "beforeend", this.container = n, this.init();
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
      <span class="icon">${O}</span> Incentives are found in your area
    </div>`
      );
      new w({
        container: document.querySelector("#estimate-custom-bill .container"),
        content: n,
        position: "afterend"
      });
    }
    render() {
      var t;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-bill" id="estimate-custom-bill">
      <div class="container text-center">
        <h2 class="os-title">How much is your latest monthly energy bill?</h2>
        <h4 class="os-subtitle">Select the range that best fits your bill:</h4>
        <div class="custom-radio with-img borderd">
          ${[
          { text: "$101 - $150", value: "101", averageValue: "125" },
          { text: "$151 - $200", value: "151", averageValue: "175" },
          { text: "$201 - $300", value: "201", averageValue: "250" },
          { text: "$301 - $400", value: "301", averageValue: "350" },
          { text: "$401 - $500", value: "401", averageValue: "450" },
          { text: "Over $500", value: "501", averageValue: "650" }
        ].map(({ text: i, value: s, averageValue: o }) => (
          /* HTML */
          `<div class="custom-radio-item radioNext">
                <input
                  class="bill-button"
                  type="radio"
                  name="monthly_elec"
                  value="${s}"
                  data-average-value="${o}"
                />${i}
              </div>`
        )).join("")}
        </div>
      </div>
    </div>`
      );
      if (!this.container || document.querySelector("#estimate-custom-bill"))
        return;
      const e = document.querySelector("#bill-slider");
      (t = this.container) == null || t.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${K}</style>`), e && e.remove();
    }
    handle() {
      const n = document.querySelector(".estimate-custom-bill .custom-radio");
      if (!n)
        return;
      n.addEventListener("click", (t) => {
        if (t.target.closest(".radioNext")) {
          const s = document.querySelector(".os-next");
          s && s.dispatchEvent(new Event("click"));
        }
      }), n.querySelectorAll(".bill-button").forEach((t) => {
        t.addEventListener("change", () => {
          var s, o;
          sessionStorage.setItem("monthly_elec", t.dataset.averageValue), this.addAdressSubNote();
          const i = (o = (s = t.parentElement) == null ? void 0 : s.textContent) == null ? void 0 : o.trim();
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
      var i, s, o;
      const n = sessionStorage.getItem("monthly_elec"), e = sessionStorage.getItem("chosen_state");
      if (!e)
        return;
      const t = (i = f[e]) == null ? void 0 : i.savings;
      if (n) {
        const a = Number(n), l = parseFloat(t) / 100, d = a * 12 * l, m = Math.round(d).toLocaleString("en-US"), u = (
          /* HTML */
          `<div class="os-saveup-note">
        <span class="icon">${W}</span>
        <div>You could <span>save up to $${m}*</span> on your yearly energy bill</div>
      </div>`
        ), h = document.querySelector(".os-incentives-note");
        h && ((s = h.closest(".os-subnote-wrap")) == null || s.remove());
        const x = document.querySelector(".os-saveup-note");
        x && ((o = x.closest(".os-subnote-wrap")) == null || o.remove()), new w({
          container: document.querySelector("#estimate-custom-address .container"),
          content: u,
          position: "afterend"
        });
        const v = document.querySelector(".os-clarification:has(#os-address-clarification)");
        v && v.remove(), new C({
          selector: "#estimate-custom-address .os-subnote-wrap",
          content: '<span id="os-address-clarification">*Savings are estimated. The amount is not guaranteed. Actual savings are subject to change and vary by location, system size, and energy usage. Consult with local solar professionals to get precise estimates.</span>',
          position: "afterend"
        });
        const _ = document.querySelector(".os-chart__cost"), I = document.querySelector(".os-chart__after");
        if (!_ || !I)
          return;
        let q = 0;
        if (n === "125" || n === "175" || n === "250" || n === "350" || n === "450" || n === "650") {
          const S = parseInt(n, 10), A = Math.floor(S / 3 / 10) * 10, y = [S, S - A, S - 2 * A, 0];
          _.innerHTML = `
            <div>$${y[0]}</div>
            <div>$${y[1]}</div>
            <div>$${y[2]}</div>
            <div>$${y[3]}</div>
          `, q = y[0];
        }
        const Sn = a * (1 - l) / q * 100;
        I.style.height = `${Sn}%`;
      }
    }
  }
  const Q = "https://api.sunvalue.com/api/address?zip=", nn = "https://api.sunvalue.com/api/geo";
  async function M(r, n = "GET", e = null) {
    try {
      const t = {
        method: n,
        headers: {
          "Content-Type": "application/json"
        }
      };
      e && (t.body = JSON.stringify(e));
      const i = await fetch(r, t);
      if (!i.ok)
        throw new Error(`HTTP error! status: ${i.status}`);
      return await i.json();
    } catch (t) {
      throw console.error("Fetch error:", t), t;
    }
  }
  const en = async (r) => await M(Q + r), tn = async () => await M(nn), on = `#estimate-zip h1:not(.os-title) {
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
  class sn {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${on}</style>`), this.titleAndZipChanges(), this.addInfoBlock(), this.zipCodeHandler(), this.addSubNote(), this.transferErrorMsg();
    }
    transferErrorMsg() {
      const n = document.querySelector("#estimate-zip"), e = n == null ? void 0 : n.querySelector("#calculateYourSavings"), t = n == null ? void 0 : n.querySelector(".error-msg");
      !e || !t || e.before(t);
    }
    addSubNote() {
      if (document.querySelector(".os-secure-note"))
        return;
      const n = (
        /* HTML */
        `<div class="os-secure-note">
      <span class="icon">${z}</span> Fast. Simple. Secure.
    </div>`
      );
      new w({
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
          <li><span>${k}</span>Your Location</li>
          <li><span>${V}</span>Your energy bill amount</li>
          <li><span>${D}</span>Available incentives in your area</li>
        </ul>
      </div>
    `
      ), e = document.querySelector("h4");
      e && e.insertAdjacentHTML("afterend", n);
    }
    async titleAndZipChanges() {
      var l, d, c;
      const n = await tn();
      n.postal ? p("exp_zipcode_is_autofilled", n.postal, "input", "Step zipcode") : p("exp_zipcode_is_not_autofilled", "No zipcode", "input", "Step zipcode");
      const e = document.querySelector("#estimate-zip");
      if (!e)
        return;
      const t = e.querySelector(".title"), i = e.querySelector("h5"), s = e.querySelector("#calculateYourSavings"), o = e.querySelector("#zip"), a = e.querySelector("#zip-error");
      if (a && (a.textContent = ""), t) {
        const m = (v) => {
          for (const _ of v)
            _.type === "characterData" && (t.insertAdjacentHTML("afterend", x), u.disconnect());
        }, u = new MutationObserver(m), h = { characterData: !0, subtree: !0 };
        u.observe(t, h);
        const x = (
          /* HTML */
          `<h1 class="os-title">
        See if your home qualifies for the <span>${(l = t.textContent) == null ? void 0 : l.replace("Incentive", "Energy")}</span>
      </h1>`
        );
        t.insertAdjacentHTML("afterend", x);
      }
      if (i && (i.textContent = "Enter your ZIP code to get started"), s && (s.textContent = "GeT STARTED", s.addEventListener("click", () => {
        p("exp_zipcode_get_started", "Get Started", "click", "Step zipcode");
      })), o) {
        o.setAttribute("placeholder", "Enter Your Zip Code"), n.postal && (o.value = n.postal), sessionStorage.setItem("chosen_state", n.regionName);
        const m = document.querySelector("#os-save-up");
        if (m) {
          const h = ((d = f[n.regionName]) == null ? void 0 : d.savings) || f.default.savings;
          m.innerHTML = h;
        }
        const u = (
          /* HTML */
          `
        <div class="os-current-location">
          ${n.regionName ? `<span class="os-current-location__icon">${k}</span>
          <span class="os-current-location__city">${n.regionName}</span>` : ""}
        </div>
      `
        );
        (c = o == null ? void 0 : o.closest("li")) == null || c.insertAdjacentHTML("beforeend", u);
      }
    }
    zipCodeHandler() {
      const n = document.querySelector("#zip");
      if (!n)
        return;
      let e;
      n.addEventListener("input", async () => {
        const t = n.value;
        clearTimeout(e), e = setTimeout(async () => {
          var a, l;
          const i = document.querySelector(".os-current-location");
          if (!i)
            return;
          t.length < 5 && (i.innerHTML = ""), i.innerHTML = /* HTML */
          `<span class="os-current-location__spinner">${Z}</span>`;
          const { state_name: s } = await en(Number(t));
          sessionStorage.setItem("chosen_state", s);
          const o = document.querySelector("#os-save-up");
          if (s) {
            const d = ((a = f[s]) == null ? void 0 : a.savings) || f.default.savings;
            o && (o.innerHTML = d), i.innerHTML = /* HTML */
            `<span class="os-current-location__icon">${k}</span>
            <span class="os-current-location__city">${s}</span>`;
          } else {
            const d = ((l = f[s]) == null ? void 0 : l.savings) || f.default.savings;
            o && (o.innerHTML = d), i.innerHTML = "";
          }
        }, 500);
      }), n.addEventListener("change", () => {
        p("exp_zipcode_input", "Input", "input", "Step zipcode");
      });
    }
  }
  const an = `.estimate-custom-shade .os-title {
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
  class rn {
    constructor({ container: n, position: e, progressBar: t }) {
      this.title = "Does your roof get sunlight?", this.position = e || "beforeend", this.container = n, this.progressBar = t, this.init();
    }
    init() {
      this.render(), this.handle();
    }
    updateProgressBar() {
      this.progressBar && this.progressBar.update(4);
    }
    render() {
      var e;
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
      !this.container || document.querySelector("#estimate-custom-shade") || ((e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${an}</style>`));
    }
    handle() {
      const n = document.querySelector("#estimate-custom-shade .custom-radio");
      n && n.addEventListener("click", (e) => {
        var i, s;
        const t = e.target;
        if (t.closest(".custom-radio-item")) {
          const o = (i = t.closest(".custom-radio-item")) == null ? void 0 : i.dataset.value;
          if (o) {
            const a = document.querySelector(`input[value="${o}"]`);
            if (!a)
              return;
            a.checked = !0;
            const l = document.getElementById("estimate-custom-shade"), d = document.getElementById("estimate-custom-address"), c = document.querySelector(".wrapper");
            l && (l.classList.add("os-hide"), d == null || d.classList.remove("os-hide"), b(), c && (c.dataset.slideName = "address"), g(
              "#estimate-custom-address",
              "exp_property_adress_view",
              "What is your property address?",
              "Step 4 - What is your property address?"
            ), this.updateProgressBar());
          }
          p("exp_roof_click", (s = t.textContent) == null ? void 0 : s.trim(), "click", "Step 3 - Does your roof get sunlight?");
        }
      });
    }
  }
  const B = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtjbzGiQga-NP-KNnEuJmBWuEdNlZynK0&libraries=places&language=en", ln = `.estimate-custom-address .os-title {
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
  class dn {
    constructor({ container: n, position: e, progressBar: t }) {
      this.position = e || "beforeend", this.container = n, this.progressBar = t, this.init();
    }
    init() {
      this.render(), this.handle();
    }
    updateProgressBar() {
      this.progressBar && this.progressBar.hide();
    }
    render() {
      var e;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-address os-hide" id="estimate-custom-address">
      <div class="container text-center">
        <h2 class="os-title">
          What is your property <br class="mobile" />
          address?
        </h2>
        <h5>Your Address</h5>
        <ul class="form-list">
          <li>
            <div class="os-location-wrap">
              <span class="icon">${F}</span>
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
      !this.container || document.querySelector("#estimate-custom-address") || ((e = this.container) == null || e.insertAdjacentHTML(this.position, n), this.initAutocomplete(), document.head.insertAdjacentHTML("beforeend", `<style>${ln}</style>`));
    }
    handle() {
      const n = document.getElementById("os-googleautoaddress");
      n && (n.addEventListener("input", () => {
        const t = document.getElementById("os-address-error");
        t && (t.textContent = "");
      }), n.addEventListener("change", () => {
        p("exp_property_adress_input", "Input", "input", "Step 4 - What is your property address?");
      }));
      const e = document.querySelector("#os-addresssaving");
      e && e.addEventListener("click", (t) => {
        const i = t.target, s = document.getElementById("os-googleautoaddress"), o = document.getElementById("estimate-custom-address"), a = document.getElementById("estimate-custom-homeowner"), l = document.querySelector(".wrapper"), d = document.querySelector(".os-prev"), c = (i == null ? void 0 : i.dataset.disabled) === "true";
        if (!s)
          return;
        const m = s.value;
        if (m && !c)
          o.classList.add("os-hide"), a.classList.remove("os-hide"), b(), l && (l.dataset.slideName = "homeowner"), d.classList.add("os-hide"), this.updateProgressBar(), g(
            "#estimate-custom-homeowner",
            "exp_evaluation_view",
            "Evaluating your average monthly energy bill ...",
            "Step  - Evaluation View"
          ), H(B), window != null && window.google && (window.google = null);
        else if (!m) {
          const u = document.getElementById("os-address-error");
          u && (u.textContent = "Please enter your address");
        }
        p("exp_property_adress_click", "Continue", "click", "Step 4 - What is your property address?");
      });
    }
    setContinueButtonState(n) {
      const e = document.getElementById("os-addresssaving");
      e && (e.dataset.disabled = String(!n));
    }
    initAutocomplete() {
      window.googleMapsScriptLoaded ? this.initializeAutocomplete() : N(B).then(() => {
        window.googleMapsScriptLoaded = !0, this.initializeAutocomplete();
      }).catch((n) => console.error("Error loading Google Maps Places API:", n));
    }
    initializeAutocomplete() {
      const n = document.getElementById("os-googleautoaddress");
      if (!n)
        return;
      const e = new google.maps.places.Autocomplete(n, {
        types: ["geocode"],
        componentRestrictions: { country: "US" }
      });
      e.addListener("place_changed", () => {
        const i = e.getPlace().formatted_address;
        this.validateAddress(i);
      });
    }
    validateAddress(n) {
      const e = document.getElementById("autoaddress"), t = document.getElementById("os-address-error");
      !n || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(n) ? (this.setContinueButtonState(!1), t && (t.textContent = "Your address must contain letters and numbers")) : (this.setContinueButtonState(!0), e && (e.value = n), t && (t.textContent = ""));
    }
  }
  const cn = `.estimate-custom-homeowner .os-title {
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
  margin-bottom: 20px;
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
  width: 98px;
}

@media (max-width: 500px) {
  .os-chart__before,
  .os-chart__after {
    width: 110px;
  }
}

.os-chart__before {
  height: 98px;
  background: #fb7306;
}

.os-chart__after {
  background: #83be63;
}

.os-chart__label {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 70px;
}

@media (max-width: 500px) {
  .os-chart__label {
    justify-content: flex-end;
    gap: 77px;
    padding-right: 45px;
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
  margin-bottom: 12px;
  color: #2b3d50;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
`;
  class pn {
    constructor({ container: n, position: e }) {
      this.position = e || "beforeend", this.container = n, this.init();
    }
    init() {
      this.render(), this.addClarification(), this.observeShadeClass();
    }
    render() {
      var e;
      const n = (
        /* HTML */
        `<div class="v-center estimate-custom-homeowner os-hide" id="estimate-custom-homeowner">
      <div class="container text-center">
        <h2 class="os-title">
          <span>Homeowners save up to <span id="os-save-up"></span>*</span> <br />on their energy bill <br />with Solar
          Energy Program
        </h2>
        <div class="os-chart">
          <div class="os-chart__container">
            <div class="os-chart__grid">${U}</div>
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
        </div>

        <div class="os-loading-bar">
          <div class="os-loading-bar__label">
            Evaluating your average monthly <br class="mobile" />
            energy bill ...
          </div>
          <div class="os-loading-bar__container">
            <div class="os-loading-bar__progress"></div>
            <div class="os-loading-bar__status">0%</div>
          </div>
        </div>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-homeowner") || ((e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${cn}</style>`));
    }
    startLoadingBar() {
      var c, m, u;
      const n = document.getElementById("estimate-custom-homeowner"), e = document.getElementById("estimate-custom-name"), t = document.querySelector(".wrapper"), i = (c = this.container) == null ? void 0 : c.querySelector(".os-loading-bar__progress"), s = (m = this.container) == null ? void 0 : m.querySelector(".os-loading-bar__status"), o = (u = this.container) == null ? void 0 : u.querySelector(".os-loading-bar__label");
      let a = 0;
      const d = setInterval(() => {
        if (a++, i && i.style.setProperty("--var-width", `${a}%`), s && (s.textContent = `${a}%`), o)
          if (a === 16)
            o.innerHTML = 'Evaluating your average monthly <br class="mobile"> energy bill ...';
          else if (a === 42)
            o.innerHTML = 'Evaluating your address and <br class="mobile"> position to sun ...';
          else if (a === 83) {
            const h = document.querySelector(".os-current-location__city");
            o.innerHTML = `Exploring available solar <br class="mobile"> programs in ${h == null ? void 0 : h.textContent} ...`;
          } else
            a === 100 && (clearInterval(d), n == null || n.classList.add("os-hide"), e == null || e.classList.remove("os-hide"), b(), t && (t.dataset.slideName = "name"), g(
              "#estimate-custom-name",
              "exp_name_view",
              "Last and First Name",
              "Step - Last and First Name"
            ));
      }, 100);
    }
    observeShadeClass() {
      const n = document.getElementById("estimate-custom-homeowner");
      if (!n)
        return;
      const e = new MutationObserver((t) => {
        t.forEach((i) => {
          i.attributeName === "class" && (i.target.classList.contains("os-hide") || (this.startLoadingBar(), e.disconnect()));
        });
      });
      e.observe(n, { attributes: !0 });
    }
    addClarification() {
      document.querySelector("#os-homeowner-clarification") || new C({
        selector: "#estimate-custom-homeowner .container",
        content: '<span id="os-homeowner-clarification">*Savings are estimated. The amount is not guaranteed. Actual savings are subject to change and vary by location, system size, and energy usage. Consult with local solar professionals to get precise estimates.</span>',
        position: "afterend"
      });
    }
  }
  const mn = `.estimate-custom-name .os-title {
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

.estimate-custom-name .os-container {
  padding: 24px;
  border-radius: 4px;
  background: linear-gradient(180deg, #fff 57.5%, #f7f7f8 78.5%);
}

@media (max-width: 768px) {
  .estimate-custom-name .os-container {
    padding: 16px;
  }
  
}

.estimate-custom-name label {
  display: block;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 8px;
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
  class un {
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
        `<div class="v-center estimate-custom-name os-hide" id="estimate-custom-name">
      <div class="container text-center">
        <div class="os-container">
          <h2 class="os-title"><span class="icon">${Y}</span>Congratulations!</h2>
          <h2 class="os-subtitle">
            Our research indicates that you are a great candidate for <br class="mobile"><span>No Net Cost Solar*</span>
          </h2>
          <h5>Provide your contact information to get your qualifications</h5>
        </div>
        <div class="medium-container">
          <ul class="form-list">
            <li>
              <label for="os-fname">Your first name</label>
              <input type="text" class="text-field" id="os-fname" placeholder="First name" autocomplete="on" />
              <span class="error-msg" id="os-fname-error"></span>
            </li>
            <li>
              <label for="os-lname">Your last name</label>
              <input type="text" class="text-field" id="os-lname" placeholder="Last name" autocomplete="on" />
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
      !this.container || document.querySelector("#estimate-custom-name") || ((e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${mn}</style>`));
    }
    handle() {
      const n = document.getElementById("os-fname"), e = document.getElementById("os-fname-error"), t = document.getElementById("os-lname"), i = document.getElementById("os-lname-error"), s = document.getElementById("os-namesaving");
      n == null || n.addEventListener("change", () => {
        p("exp_fname_input", "Input - First name", "input", "Step - Last and First Name");
      }), t == null || t.addEventListener("change", () => {
        p("exp_lname_input", "Input - Last name", "input", "Step - Last and First Name");
      }), s && s.addEventListener("click", () => {
        const o = document.getElementById("estimate-custom-name"), a = document.getElementById("estimate-custom-email"), l = document.querySelector(".wrapper"), d = document.querySelector(".os-prev");
        e.textContent = "", i.textContent = "";
        const c = n.value, m = t.value;
        if (!c || c.length === 0) {
          e.textContent = "Please enter your first name";
          return;
        }
        if (!m || m.length === 0) {
          i.textContent = "Please enter your last name";
          return;
        }
        const u = document.getElementById("fname"), h = document.getElementById("lname");
        u && (u.value = c), h && (h.value = m), o == null || o.classList.add("os-hide"), a == null || a.classList.remove("os-hide"), l && (l.dataset.slideName = "email"), b(), d.classList.remove("os-hide"), p("exp_name_click", "Continue", "click", "Step - Last and First Name"), g("#estimate-custom-email", "exp_email_view", "View - Email", "Step - Email");
      });
    }
  }
  const hn = `.estimate-custom-email .os-title {
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
  margin-bottom: 8px;
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
`;
  class gn {
    constructor({ container: n, position: e }) {
      this.position = e || "beforeend", this.container = n, this.init();
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
      <span class="icon">${z}</span> We keep your information safe and secure
    </div>`
      );
      new w({
        container: document.querySelector("#estimate-custom-email .container"),
        content: n,
        position: "afterend"
      });
    }
    render() {
      var e;
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
      !this.container || document.querySelector("#estimate-custom-email") || ((e = this.container) == null || e.insertAdjacentHTML(this.position, n), document.head.insertAdjacentHTML("beforeend", `<style>${hn}</style>`));
    }
    handle() {
      const n = document.getElementById("os-email"), e = document.getElementById("os-email-error"), t = document.getElementById("os-emailsaving");
      n == null || n.addEventListener("change", () => {
        p("exp_email_input", "Input - Email", "input", "Step - Email");
      }), t && t.addEventListener("click", () => {
        const i = document.querySelector(".wrapper");
        n.textContent = "";
        const s = n.value, o = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!s || s.trim() === "" || !o.test(s)) {
          e.textContent = "Please Enter a Valid Email Address";
          return;
        }
        const a = document.getElementById("email");
        a && (a.value = s);
        const l = document.querySelector("#slider-block a:last-child");
        l && l.click(), i && (i.dataset.slideName = "phone"), p("exp_email_click", "Continue", "click", "Step - Email ");
      });
    }
  }
  const fn = `#estimate-phone .medium-container {
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
  margin-bottom: 8px;
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
  class xn {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${fn}</style>`), this.addLabel(), this.inputChanges();
    }
    inputChanges() {
      const n = document.getElementById("phone");
      if (!n)
        return;
      n.placeholder = "Phone number", n.addEventListener("change", () => {
        p("exp_phone_input", "Input - Email", "input", "Step - Phone ");
      });
      const e = document.getElementById("submit");
      e && e.addEventListener("click", () => {
        const t = document.querySelector(".os-prev");
        t && t.classList.add("os-hide"), p("exp_phone_click", "Submit", "click", "Step - Phone");
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
  const vn = `/* .swiper-container-android .swiper-slide,
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
  class bn {
    constructor({ progressBar: n, swiper: e }) {
      this.progressBar = n, this.swiper = e, this.init();
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
      ), e = (
        /* HTML */
        `<button type="button" data-current-slide="0" class="os-prev">${G}</button>`
      ), t = document.querySelector("#slider-block"), i = document.querySelector(".swiper-wrapper"), s = document.querySelector(".wrapper"), o = document.querySelector(".content-wrapper .container");
      if (!i || !o)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${vn}</style>`), i.insertAdjacentHTML("beforeend", n), o.insertAdjacentHTML("afterbegin", e);
      const a = document.querySelector(".os-prev"), l = document.querySelector(".os-next");
      a == null || a.addEventListener("click", () => {
        var m;
        const d = document.querySelector(".os-navigation");
        if (d.classList.add("os-hide"), setTimeout(() => {
          d.classList.remove("os-hide");
        }, 400), a.dataset.currentSlide === "1" && p(
          "exp_how_much_monthly_bill_back",
          "Back",
          "click",
          "Step 1 - How much is your latest monthly energy bill?"
        ), a.dataset.currentSlide === "2" && p("exp_utility_provider_back", "Back", "click", "Step 2 - Who is your utility provider?"), a.dataset.currentSlide === "3") {
          const u = document.getElementById("estimate-custom-address"), h = document.getElementById("estimate-custom-shade"), x = document.getElementById("estimate-custom-name"), v = document.getElementById("estimate-custom-email");
          if (h.classList.contains("os-hide") || p("exp_roof_back", "Back", "click", "Step 3 - Does your roof get sunlight?"), !u.classList.contains("os-hide")) {
            u.classList.add("os-hide"), h.classList.remove("os-hide"), b(), this.progressBar && this.progressBar.update(3), p("exp_property_adress_back", "Back", "click", "Step 4 - What is your property address?");
            return;
          }
          if (!v.classList.contains("os-hide")) {
            v.classList.add("os-hide"), x.classList.remove("os-hide"), b(), s.dataset.slideName = "name", a.classList.add("os-hide"), p("exp_email_back", "Back", "click", "Step - Email ");
            return;
          }
        }
        if (a.dataset.currentSlide === "7") {
          (m = this.swiper) == null || m.slideTo(3), window != null && window.google && (window.google = null), s.dataset.slideName = "email", p("exp_phone_back", "Back", "click", "Step - Phone");
          return;
        }
        const c = t == null ? void 0 : t.querySelector("a:first-child");
        setTimeout(() => {
          c == null || c.click();
        }, 0);
      }), l == null || l.addEventListener("click", () => {
        const d = t == null ? void 0 : t.querySelector("a:last-child"), c = document.querySelector(".os-navigation");
        c.classList.add("os-hide"), setTimeout(() => {
          c.classList.remove("os-hide");
        }, 400), setTimeout(() => {
          d == null || d.click();
        }, 0);
      });
    }
  }
  class yn {
    constructor() {
      var n;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (n = this.swiperElement) == null ? void 0 : n.swiper, this.progressBar = new P(), this.addNavigation(), this.otherEvents();
    }
    addNavigation() {
      new bn({ progressBar: this.progressBar, swiper: this.swiper });
    }
    changeSlides() {
      new sn(), new xn();
      const n = document.querySelector(".swiper-container"), e = n == null ? void 0 : n.swiper, t = L("#solarForm .wrapper"), i = L(".os-navigation");
      i.querySelector(".os-next");
      const s = document.querySelector(".os-prev");
      this.progressBar.hide(), g("#estimate-zip", "exp_zipcode_view", "View Screen", "Step zipcode"), e == null || e.on("transitionEnd", () => {
        const o = e.realIndex;
        t.dataset.currentSlide = o.toString(), s && (s.dataset.currentSlide = o.toString());
        const a = document.querySelector(".swiper-slide-active"), l = (a == null ? void 0 : a.clientHeight) || 0;
        i.style.top = `${l}px`, n && (n.dataset.currentSlide = o.toString()), o === 0 && this.progressBar.hide(), o === 1 && (this.progressBar.show(), this.progressBar.update(1), g(
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
        )), o === 3 && (this.progressBar.update(3), document.getElementById("estimate-custom-shade").classList.contains("os-hide") || g(
          "#estimate-custom-shade",
          "exp_roof_view",
          "Does your roof get sunlight?",
          "Step 3 - Does your roof get sunlight?"
        )), o === 4 && (document.querySelectorAll('input[name="shade"]').forEach((c) => {
          if (c.checked) {
            const m = c.closest(".radioNext");
            m && m.click();
          }
        }), e.slideTo(7)), o === 7 && g("#estimate-phone", "exp_phone_view", "View - Phone", "Step - Phone");
      });
    }
    otherEvents() {
      const n = document.querySelector("#estimate-provider .custom-radio");
      n && n.addEventListener("click", (e) => {
        var i, s;
        const t = e.target;
        if (t.closest(".radioNext")) {
          const o = (s = (i = t.closest(".radioNext")) == null ? void 0 : i.textContent) == null ? void 0 : s.trim();
          p("exp_utility_provider_click", o, "click", "Step 2 - Who is your utility provider?");
        }
      });
    }
    addSlides() {
      const n = document.querySelectorAll(".swiper-slide");
      new J({ container: n[1], position: "beforeend" }), new rn({ container: n[3], position: "beforeend", progressBar: this.progressBar }), new dn({ container: n[3], position: "beforeend", progressBar: this.progressBar }), new pn({ container: n[3], position: "beforeend" }), new un({ container: n[3], position: "beforeend" }), new gn({ container: n[3], position: "beforeend" });
    }
  }
  const wn = `.site-header {
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

:is(#estimate-custom-address, #estimate-custom-name, #estimate-custom-email, #estimate-phone) .container {
  background: none !important;
  padding: 0 !important;
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
  $({ name: "Hyp. #6 - Introduce short funnel with merging zip code with address step", dev: "OS" }), T("exp_autofill_zipcode_reinforcement_message");
  class _n {
    constructor() {
      this.slideManager = new yn(), this.init();
    }
    init() {
      location.pathname === "/save/" && E(".swiper-slide-active").then(() => {
        E(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${wn}</style>`), document.title = "Solar Incentive Program", this.slideManager.addSlides(), this.slideManager.changeSlides();
        });
      });
    }
  }
  new _n();
})();
