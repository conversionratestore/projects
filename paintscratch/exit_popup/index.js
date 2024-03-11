(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode("div:has(>.o-sidebar__panel){display:none}div:has(>.o-sidebar__workflow){flex:0 0 100%;max-width:80%}div:has(>.filter-nav){display:none}.container--capped-fluid-with-gutter>div{justify-content:center!important}.crs-window{display:grid;gap:1rem;grid-template-columns:1fr 1fr;grid-template-rows:2rem 1fr}.crs-window .configurator__step-heading{grid-column:1 / 3;grid-row:1 / 2}.crs-window .crs-window__show{grid-column:1 / 2;grid-row:2 / 3;position:relative}.crs-window .crs-window__show .crs-window__fill{position:absolute;top:84px;left:200px}.crs-window .row.small-gutters.row-gutters{grid-column:2 / 3;grid-row:2 / 3}.customiser-card--fabric .customiser-card__header,.customiser-card--fabric header{height:auto;width:auto}.customiser-card--fabric footer{display:none}")),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
(function() {
  "use strict";
  function m(e) {
    return new Promise((o) => {
      if (document.querySelector(e))
        return o(document.querySelector(e));
      const s = new MutationObserver(() => {
        document.querySelector(e) && (o(document.querySelector(e)), s.disconnect());
      });
      s.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const l = (e) => document.querySelectorAll(e), d = (e) => document.querySelector(e), n = (e) => (
    /* HTML */
    `<svg width="418" height="326" viewBox="0 0 418 326" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g filter="url(#filter0_di_1_3)">
  <path d="M5 2L411.5 0.5L414 162V202V240L412.75 278L411.5 316L5 318L4.5 298V278.5L5 239V226V210.5V200.5V159V139V117.5V78V2Z" fill="url(#pattern0)" shape-rendering="crispEdges"/>
  </g>
  <defs>
  <filter id="filter0_di_1_3" x="0.5" y="0.5" width="417.5" height="325.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="1" dy="3"/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_3"/>
  </filter>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.409035" height="0.527559">
  <use xlink:href="#image0_1_3" transform="scale(0.000818071 0.00105512)"/>
  </pattern>
  <image id="image0_1_3" width="500" height="500" xlink:href="${e}"/>
  </defs>
  </svg> `
  ), u = "https://conversionratestore.github.io/projects/diyblinds";
  class w {
    constructor() {
    }
    render() {
      const o = (
        /* HTML */
        `<div class="crs-window__show">
      <div class="crs-window__fill">${n("https://media.diyblinds.com.au/fabrics/small/Focus_Dove.jpg")}</div>
      <img src="${u}/img/frame.png" />
    </div>`
      );
      l(".configurator__step").forEach((a) => {
        var f;
        if (a.textContent.includes("Choose 'Blockout' colour & fabric")) {
          const t = a.querySelector(".row.small-gutters.row-gutters");
          (f = t == null ? void 0 : t.closest(".configurator__step")) == null || f.classList.add("crs-window"), t == null || t.insertAdjacentHTML("beforebegin", o), a.addEventListener("click", (x) => {
            var g;
            const p = x.target.closest("button.selectable-item");
            if (p) {
              const c = (g = p.querySelector("h4")) == null ? void 0 : g.innerHTML, v = c == null ? void 0 : c.replace(/<br>| /g, "_").toLocaleLowerCase().trim();
              async function b(r, i) {
                try {
                  (await fetch(`${r}/img/textures/${i}.jpg`)).ok ? d(".crs-window__fill").innerHTML = n(`${r}/img/textures/${i}.jpg`) : (await fetch(`${r}/img/textures/${i}.jpeg`)).ok && (d(".crs-window__fill").innerHTML = n(`${r}/img/textures/${i}.jpeg`));
                } catch (h) {
                  console.error("Failed to set window icon:", h);
                }
              }
              b(u, v);
            }
          });
        }
      }), l(".filter-nav__item")[1].click();
    }
  }
  console.log(
    "%c EXP: Trial Selection (DEV: OS)",
    "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
  );
  class _ {
    constructor() {
      console.log("DevVisualization");
    }
    init() {
      m(".configurator").then(() => {
        new w().render();
      }), console.log("DevVisualization.init");
    }
  }
  new _().init();
})();
//# sourceMappingURL=index.js.map
