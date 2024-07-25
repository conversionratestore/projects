(function() {
  "use strict";
  const f = (e, n, t, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: n,
      event_type: t,
      event_loc: o
    }), console.dir(`Event: ${e} | ${n} | ${t} | ${o}`);
  }, m = ({ name: e, dev: n }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (e) => document.querySelectorAll(e), l = (e) => document.querySelector(e), h = async (e) => {
    const n = (t) => new Promise((o, i) => {
      const r = t.split(".").pop();
      if (r === "js") {
        if (Array.from(document.scripts).map((d) => d.src.toLowerCase()).includes(t.toLowerCase()))
          return console.log(`Script ${t} allready downloaded!`), o("");
        const p = document.createElement("script");
        p.src = t, p.onload = o, p.onerror = i, document.head.appendChild(p);
      } else if (r === "css") {
        if (Array.from(document.styleSheets).map((d) => {
          var w;
          return (w = d.href) == null ? void 0 : w.toLowerCase();
        }).includes(t.toLowerCase()))
          return console.log(`Style ${t} allready downloaded!`), o("");
        const p = document.createElement("link");
        p.rel = "stylesheet", p.href = t, p.onload = o, p.onerror = i, document.head.appendChild(p);
      }
    });
    for (const t of e)
      await n(t), console.log(`Loaded librari ${t}`);
    console.log("All libraries loaded!");
  }, _ = (e) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, y = (e, n, t, o, i = 3e3, r = 0.5) => {
    let c, p;
    if (c = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? p = setTimeout(() => {
          f(
            n,
            d[0].target.dataset.visible || o || "",
            "Visibility",
            t
          ), c.disconnect();
        }, i) : (console.log("Element is not fully visible"), clearTimeout(p));
      },
      { threshold: [r] }
    ), typeof e == "string") {
      const d = document.querySelector(e);
      d && c.observe(d);
    } else
      c.observe(e);
  };
  function b(e) {
    return new Promise((n) => {
      if (document.querySelector(e))
        return n(document.querySelector(e));
      const t = new MutationObserver(() => {
        document.querySelector(e) && (n(document.querySelector(e)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(e) {
    e = e === void 0 ? {} : e;
    let n, t, o, i, r = (e == null ? void 0 : e.delay) || 50;
    function c() {
      n = null, i = 0;
    }
    return c(), function() {
      return t = window.scrollY, n != null && (i = t - n), n = t, clearTimeout(o), o = setTimeout(c, r), i;
    };
  })();
  function x(e) {
    return new Promise((n) => setTimeout(n, e));
  }
  const k = async (e, n) => {
    const t = e, i = (n == null ? void 0 : n.getBoundingClientRect().top) + window.pageYOffset - t;
    return window.scrollTo({
      top: i,
      behavior: "smooth"
    }), await x(800), !0;
  }, g = "https://conversionratestore.github.io/projects/buzzpatch/img/", s = {
    tooltipIcon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
  <path d="M2 11.1352H4V12.84H2V11.1352ZM0 3.38036C0 3.03495 0.0784317 2.70626 0.235294 2.39428C0.392157 2.08231 0.607843 1.8149 0.882353 1.59206C1.15686 1.35807 1.47712 1.17423 1.84314 1.04052C2.20915 0.906819 2.60131 0.839966 3.01961 0.839966C3.50327 0.839966 3.94118 0.923532 4.33333 1.09066C4.73856 1.25779 5.0719 1.49178 5.33333 1.79261C5.46405 1.9486 5.56863 2.09345 5.64706 2.22715C5.73856 2.36086 5.81046 2.5057 5.86275 2.66169C5.91503 2.80654 5.94771 2.97367 5.96078 3.16309C5.98693 3.3525 6 3.57534 6 3.83161C6 4.1213 5.99346 4.36643 5.98039 4.56699C5.98039 4.7564 5.96732 4.92353 5.94118 5.06838C5.91503 5.21323 5.88235 5.34136 5.84314 5.45278C5.80392 5.55306 5.75163 5.64777 5.68627 5.7369L4.33333 7.70905C4.24183 7.84275 4.1634 7.98203 4.09804 8.12687C4.03268 8.26058 4 8.40542 4 8.56141V9.89846H2V8.34414C2 8.09902 2.04575 7.86504 2.13725 7.64219C2.22876 7.41935 2.3464 7.20208 2.4902 6.99038L3.7451 5.25222C3.84967 5.10738 3.91503 4.95139 3.94118 4.78426C3.98039 4.61713 4 4.44999 4 4.28286V3.39707C4 3.16309 3.90196 2.96253 3.70588 2.7954C3.52288 2.62827 3.29412 2.5447 3.01961 2.5447C2.78431 2.5447 2.55556 2.61712 2.33333 2.76197C2.11111 2.90682 2 3.11852 2 3.39707V4.36643H0V3.38036Z" fill="#FFF"/>
</svg>
  `,
    starIcon: `
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='15' viewBox='0 0 16 15' fill='none'>
  <path d='M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0Z' fill='#F9BF00'/>
</svg>
  `
  }, a = {
    ver_b: {
      id: "43643653652524",
      img: `${g}whole_family_protection_kit_bundle.png`,
      title: "Whole family protection kit",
      description: "3 Packs + 2 Packs of Mosquito Patches For Adults",
      price: "$10.00 Each",
      imgTooltip: `${g}whole_family_protection_kit_bundle_tooltip.png`,
      mainTitleTooltip: "BuzzPatch",
      subTitleTooltip: "Mosquito Repellent Patches",
      boldTitleTooltip: "40 Adult-Sized Patches",
      descriptionTooltip: "The same #1 best selling BuzzPatch your kiddos know and love, but with grown-up sizes and colors! (No judgment if you still want to wear the smiley faces, though.)"
    },
    ver_c: {
      id: "43643656339500",
      img: `${g}outdoor_protection_kit_bundle.png`,
      title: "Outdoor protection kit",
      description: "3 Packs + 48 Kids Tick <br/> Repellent Stickers",
      price: "$10.00 Each",
      imgTooltip: `${g}outdoor_protection_kit_bundle_tooltip.png`,
      mainTitleTooltip: "TrailPatch",
      subTitleTooltip: "Kids Tick Repellent Stickers",
      boldTitleTooltip: "48 Colorful Patches",
      descriptionTooltip: "Let your child enjoy the outdoors worry-free with our tick-repellent stickers. Infused with natural essential oils, these stickers effectively repel ticks. Just stick one on your child’s clothing for hours of protection and outdoor fun."
    }
  }, v = {
    ver_b: `
  <div class='tooltip_block'>
    <div class='tooltip_wrapper'>
      <div class='img_wrapper'>
       <img src='${a.ver_b.imgTooltip}' alt='${a.ver_b.mainTitleTooltip}' />
      </div>
      <div class='tooltip_info'>
        <div>
          <h2>${a.ver_b.mainTitleTooltip}</h2>
         <span>${s.starIcon}${s.starIcon}${s.starIcon}${s.starIcon}${s.starIcon}</span>
        </div>
        <p>${a.ver_b.subTitleTooltip}</p>
        <b>${a.ver_b.boldTitleTooltip}</b>
      </div>
    </div>
    <p>${a.ver_b.descriptionTooltip}</p>
  </div>
  `,
    ver_c: `
  <div class='tooltip_block'>
    <div class='tooltip_wrapper'>
      <div class='img_wrapper'>
       <img src='${a.ver_c.imgTooltip}' alt='${a.ver_c.mainTitleTooltip}' />
      </div>
      <div class='tooltip_info'>
        <div>
          <h2>${a.ver_c.mainTitleTooltip}</h2>
        <span>${s.starIcon}${s.starIcon}${s.starIcon}${s.starIcon}${s.starIcon}</span>
        </div>
        <p>${a.ver_c.subTitleTooltip}</p>
        <b>${a.ver_c.boldTitleTooltip}</b>
      </div>
    </div>
    <p>${a.ver_c.descriptionTooltip}</p>
  </div>
  `
  }, T = (e) => (
    /* HTML */
    `
    <div class="new_bundle_wrapper" id="${a.ver_b.id}">
      <div class="img_wrapper">
        <img src="${a.ver_b.img}" alt="${a.ver_b.title}" />
      </div>
      <div class="info_wrapper">
        <h2 class="new_bundle_title">${a.ver_b.title}</h2>
        <p class="new_bundle_description">${a.ver_b.description}</p>
        <span class="new_bundle_price">${e} Each</span>
      </div>
    </div>
  `
  ), C = (
    /* HTML */
    `
  <span class="new_bundle_tooltip" data-tooltip data-title="${v.ver_b}">${s.tooltipIcon}</span>
`
  ), j = `.new-bundle-pack label > img,
.new-bundle-pack .pack-label {
  display: none !important;
}
.new-bundle-pack .new_bundle_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background: #fff;
  gap: 12px;
}
.new-bundle-pack .new_bundle_wrapper .img_wrapper {
  max-width: 99px;
}
.new-bundle-pack .new_bundle_wrapper .img_wrapper img {
  max-width: 100% !important;
  max-height: 100%;
  width: 100%;
  height: 100% !important;
  -o-object-fit: contain;
     object-fit: contain;
  padding: 0 !important;
  margin: 0 !important;
}
.new-bundle-pack .new_bundle_wrapper .new_bundle_title {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: #212529;
  text-transform: initial;
  letter-spacing: initial;
  margin: 0;
  text-align: left;
}
.new-bundle-pack .new_bundle_wrapper .new_bundle_description {
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 18px !important;
  color: #6f6f6f;
  text-transform: initial;
  letter-spacing: initial;
  margin: 0 0 4px;
  text-align: left;
}
.new-bundle-pack .new_bundle_wrapper .new_bundle_price {
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 18px !important;
  margin: 0;
  text-transform: initial;
  letter-spacing: initial;
  color: #212529;
  text-align: left;
}
.new-bundle-pack .new_bundle_tooltip {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 11px;
  right: 11px;
  width: 20px;
  height: 20px;
  border-radius: 40px;
  background: #999;
  z-index: 111;
}
.new-bundle-pack [data-tippy-root] {
  z-index: 100 !important;
}
.new-bundle-pack [data-tippy-root] .tippy-box {
  background-color: #fff;
  max-width: 330px !important;
  left: 19px !important;
  top: -3px !important;
}
@media (max-width: 361px) {
  .new-bundle-pack [data-tippy-root] .tippy-box {
    left: 12px !important;
  }
}
.new-bundle-pack [data-tippy-root] .tippy-box .tippy-content {
  padding: 16px;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tippy-arrow {
  display: block !important;
  color: #fff;
  left: -18px !important;
}
@media (max-width: 361px) {
  .new-bundle-pack [data-tippy-root] .tippy-box .tippy-arrow {
    left: -12px !important;
  }
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper {
  display: flex;
  gap: 14px;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .img_wrapper {
  max-width: 70px;
  max-height: 70px;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .img_wrapper img {
  width: 100%;
  height: 100%;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info > div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 9px;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info > div span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info > div span svg {
  height: 16px;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info h2 {
  color: #1f4fc9;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin: 0;
  text-transform: initial;
  letter-spacing: initial;
  text-align: left;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info p {
  color: #212529;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 22px !important;
  margin: 4px 0;
  text-transform: initial;
  letter-spacing: initial;
  text-align: left;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block .tooltip_wrapper .tooltip_info b {
  color: #1f4fc9;
  font-family: "Barlow";
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: initial;
  margin: 0;
  display: block;
  text-align: left;
}
.new-bundle-pack [data-tippy-root] .tippy-box .tooltip_block > p {
  color: #212529;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 22px !important;
  margin: 14px 0 0;
  letter-spacing: initial;
  text-transform: initial;
  text-align: left;
}
.new-bundle-pack input[type=radio]:checked + label {
  border-radius: 4px 0px 4px 4px;
  border: 2px solid #ff3c7f;
  background: #ff3c7f;
}
.new-bundle-pack input[type=radio]:checked + label .new_bundle_wrapper {
  background: #ff3c7f;
}
.new-bundle-pack input[type=radio]:checked + label .new_bundle_wrapper .new_bundle_title {
  color: #fff;
}
.new-bundle-pack input[type=radio]:checked + label .new_bundle_wrapper .new_bundle_description {
  color: #fff;
}
.new-bundle-pack input[type=radio]:checked + label .new_bundle_wrapper .new_bundle_price {
  font-weight: 500;
  color: #fff;
}
.new-bundle-pack input[type=radio]:checked + label + .new_bundle_tooltip {
  background: #fff;
}
.new-bundle-pack input[type=radio]:checked + label + .new_bundle_tooltip svg path {
  fill: #ff3c7f;
}

#getNow > h2 {
  font-family: "DINEngschrift LT";
  color: #212529;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 0.72px;
  text-transform: uppercase;
}
#getNow > h2 + p {
  color: #212529;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 20px !important;
  font-weight: 500;
  line-height: 20px !important;
  letter-spacing: 0.6px;
  margin: 0;
}
#getNow > img {
  max-width: 220px !important;
  -o-object-fit: contain;
     object-fit: contain;
  margin: 1px auto 0 !important;
}
#getNow > img + p {
  display: none !important;
}
#getNow > .form {
  margin: 40px 0 20px !important;
}
#getNow > .form .form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 14px;
  margin: 0 !important;
}
#getNow > .form .form-group .js-packs {
  margin: 0;
}
#getNow > .form .form-group input[type=radio] + label {
  font-family: "DIN Condensed";
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 8.4px 20px;
  border-radius: 4px;
  border: 2px solid #ff3c7f;
  background: #fff;
}
#getNow > .form .form-group input[type=radio] + label span {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}
#getNow > .form .form-group .js-packs input[type=radio]:checked + label {
  background: #ff3c7f;
}
#getNow > .form .form-group .js-packs input[type=radio]:checked + label span {
  font-weight: 500;
}
#getNow > .form .form-group .js-packs:nth-child(1) input[type=radio] + label {
  border-top-left-radius: 0;
}
#getNow > .form .form-group .js-packs:nth-child(1) .bestseller {
  color: #fff;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 2px 2px 0px 0px;
}
#getNow > .form .new-bundle-pack {
  margin-top: 16px;
  padding-top: 0;
  padding-bottom: 0;
}
#getNow > .form .new-bundle-pack > h3 {
  color: #212529;
  font-family: "DIN Condensed";
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0;
}
#getNow > .form .new-bundle-pack .bundle-off {
  color: #fff;
  font-family: "DIN Condensed";
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 2px 2px 0px 0px;
  background: #000;
  margin-top: -24px;
}
#getNow .prices .js-total,
#getNow .prices .new_js_total {
  color: #181717;
  text-align: center;
  font-family: "Helvetica";
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.6px;
  margin: 0 0 12px;
}
#getNow .prices .js-regular {
  color: #212529;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 20px;
}
#getNow .js-btn.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  color: #fff;
  text-align: center;
  font-family: "DIN Condensed";
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0;
  margin: 0 auto 20px;
}

body.tooltip_open {
  position: relative;
}
body.tooltip_open::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  display: block;
  z-index: 11;
  width: 100%;
  height: 100%;
  background: rgba(97, 98, 103, 0.23);
  -webkit-backdrop-filter: blur(1.5px);
          backdrop-filter: blur(1.5px);
}
body.tooltip_open .new_bundle_tooltip {
  background: #fff;
}
body.tooltip_open .new_bundle_tooltip svg path {
  fill: #ff3c7f;
}/*# sourceMappingURL=main.css.map */`, L = window.innerWidth < 768 ? "mobile" : "desktop";
  class N {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      m({ name: "bundle optimization v.B", dev: "SKh" }), _("exp_introduce_b"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${j}</style>`), this.changeBundleInfo(), this.clickBundleHandler(), this.handleClickGetNow(), this.clickProceedToCheckoutBtnHandler(), this.visibleHandler();
    }
    changeBundleInfo() {
      b(".new-bundle-pack").then((n) => {
        var o, i;
        const t = ((o = l(".np-family-kit span.np-whole-family-kit")) == null ? void 0 : o.getAttribute("data-each-price")) ?? "";
        (i = l(".np-family-kit span.outdoor-protection-kit")) == null || i.getAttribute("data-each-price"), l(".new_bundle_wrapper") || (l(".new-bundle-pack label").insertAdjacentHTML("afterbegin", T(t)), l(".new-bundle-pack input").value = a.ver_b.id, l(".new-bundle-pack label").insertAdjacentHTML("afterend", C)), this.initTooltip();
      });
    }
    clickBundleHandler() {
      const n = "7674900676652";
      u("#getNow input[type=radio] + label").forEach((t) => {
        t.addEventListener("click", (o) => {
          var i;
          t.getAttribute("for") === "radios-0" || t.getAttribute("for") === "radios-1" || t.getAttribute("for") === "radios-2" || t.getAttribute("for") === "radios-3" ? (l(".js-total").style.display = "block", (i = l(".new_js_total")) == null || i.remove()) : (f("exp_introduce_v3_click_01", "Whole family protection kit", "Click", "Bundle & save"), l(".js-total").style.display = "none", l(".new_js_total") || l(".js-total").insertAdjacentHTML("afterend", this.npFamilyKitHtml(n)));
        });
      });
    }
    npFamilyKitHtml(n) {
      const t = u(".np-family-kit span");
      let o = "";
      return t ? t == null || t.forEach((i) => {
        i.getAttribute("data-variant-id") === n && (o = `<div class="new_js_total">
            <span class="new_price">${i.getAttribute("data-price")}</span> (<span class="new_price_off"
              >60%</span> OFF)</div>`);
      }) : o = "", o;
    }
    clickProceedToCheckoutBtnHandler() {
      b("#addToCart").then((n) => {
        var t;
        (t = l("#addToCart")) == null || t.addEventListener("click", (o) => {
          var r;
          o.preventDefault(), o.stopPropagation();
          let i = (r = l(".js-packs input[type=radio]:checked+label")) == null ? void 0 : r.previousElementSibling.value;
          this.addToCartHandler(i);
        });
      });
    }
    async addToCartHandler(n) {
      await fetch("/cart/clear.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }), await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [
            {
              id: n,
              quantity: 1
            }
          ]
        })
      }).then(() => {
        console.log("idValue", n), window.location.href = "/checkout";
      });
    }
    handleClickGetNow() {
      b("#getNow").then((n) => {
        u('[href="#getFormNow"]').forEach((t) => {
          t.addEventListener("click", (o) => {
            o.preventDefault(), o.stopPropagation(), $("html, body").stop();
            let i = l("#getNow"), r = 65, c = !0, p = setInterval(async () => {
              i.getBoundingClientRect().top > r - 1 && i.getBoundingClientRect().top <= r + 1 ? clearInterval(p) : c && (c = !1, c = await k(r, i));
            }, 100);
          });
        });
      });
    }
    initTooltip() {
      h([
        "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js"
      ]).then(async () => {
        let n = setInterval(() => {
          typeof tippy == "function" && l("[data-tooltip]") && (clearInterval(n), u("[data-tooltip]").forEach((t) => {
            tippy(t, {
              content: t.getAttribute("data-title"),
              trigger: "click",
              allowHTML: !0,
              arrow: !0,
              arrowType: "round",
              appendTo: function() {
                return t.closest(".new-bundle-pack");
              },
              placement: "top-end",
              interactive: !0,
              onShow(o) {
                f(
                  "exp_introduce_v3_element_02",
                  "Whole family protection kit tooltip",
                  "Visibility",
                  "Bundle & save"
                );
              },
              onTrigger(o) {
                l("body").classList.add("tooltip_open"), f("exp_introduce_v3_click_02", "Whole family protection kit tooltip", "Click", "Bundle & save");
              },
              onHide(o) {
                l("body").classList.remove("tooltip_open");
              }
            });
          }));
        }, 100);
      });
    }
    visibleHandler() {
      b(".new_bundle_wrapper").then((n) => {
        y(
          ".new_bundle_wrapper",
          "exp_introduce_v3_element_01",
          "Bundle & save",
          "Whole family protection kit"
        );
      });
    }
  }
  window.location.pathname.match("pages") && new N(L);
})();
//# sourceMappingURL=index.js.map
