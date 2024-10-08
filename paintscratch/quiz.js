(function() {
  "use strict";
  const m = (e, n, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: n,
      event_type: t,
      event_loc: i
    }), console.dir(`Event: ${e} | ${n} | ${t} | ${i}`);
  }, S = ({ name: e, dev: n }) => {
    console.dir(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, L = (e) => document.querySelectorAll(e), _ = (e) => document.querySelector(e), P = (e) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, v = () => {
    const e = navigator.userAgent;
    return e.match(/Android/i) || e.match(/webOS/i) || e.match(/iPhone/i) || e.match(/iPad/i) || e.match(/iPod/i) || e.match(/BlackBerry/i) || e.match(/Windows Phone/i) ? "mobile" : "desktop";
  }, k = (e, n, t, i, r = 1e3, u = 0.5) => {
    let s, p;
    if (s = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? p = setTimeout(() => {
          m(
            n,
            c[0].target.dataset.visible || t || "",
            "Visibility",
            i
          ), s.disconnect();
        }, r) : (console.log("Element is not fully visible"), clearTimeout(p));
      },
      { threshold: [u] }
    ), typeof e == "string") {
      const c = document.querySelector(e);
      c && s.observe(c);
    } else
      s.observe(e);
  }, q = (e) => new Promise((n) => {
    if (_(e))
      return n(_(e));
    const t = new MutationObserver(() => {
      _(e) && (n(_(e)), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = {
    arrowRight: (
      /*html */
      `
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
    <path d="M0 11.4102V0.410156L9 5.91016L0 11.4102Z" fill="#333333"/>
  </svg>`
    ),
    arrowDown: `
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <mask id="path-1-inside-1_5500_2430" fill="white">
      <path d="M0 0H34V34H0V0Z"/>
    </mask>
    <path d="M0 0H34V34H0V0Z" fill="#D9D9D9"/>
    <path d="M1 34V0H-1V34H1Z" fill="#767676" mask="url(#path-1-inside-1_5500_2430)"/>
    <path d="M12 13L23 13L17.5 22L12 13Z" fill="#333333"/>
  </svg>`,
    basket: `
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M2.51189 0.0507812C2.79971 0.0507812 3.06136 0.296875 3.11369 0.597656L3.16602 0.925781H14.1555C14.705 0.925781 15.1237 1.5 14.9667 2.04688L13.5537 7.29688C13.4491 7.67969 13.1351 7.92578 12.7426 7.92578H4.44813L4.68362 9.23828H12.7688C13.1089 9.23828 13.3967 9.53906 13.3967 9.89453C13.3967 10.2773 13.1089 10.5508 12.7688 10.5508H4.16031C3.87249 10.5508 3.61084 10.332 3.55851 10.0312L1.98858 1.36328H0.627972C0.261655 1.36328 0 1.08984 0 0.707031C0 0.351562 0.261655 0.0507812 0.627972 0.0507812H2.51189ZM3.34918 12.7383C3.34918 12.0273 3.89866 11.4258 4.60513 11.4258C5.28543 11.4258 5.86107 12.0273 5.86107 12.7383C5.86107 13.4766 5.28543 14.0508 4.60513 14.0508C3.89866 14.0508 3.34918 13.4766 3.34918 12.7383ZM13.3967 12.7383C13.3967 13.4766 12.8211 14.0508 12.1408 14.0508C11.4343 14.0508 10.8848 13.4766 10.8848 12.7383C10.8848 12.0273 11.4343 11.4258 12.1408 11.4258C12.8211 11.4258 13.3967 12.0273 13.3967 12.7383Z" fill="#0000EE"/>
  </svg>`,
    arrowLeft: `
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
    <path d="M9 0.5L9 11.5L4.80825e-07 6L9 0.5Z" fill="#333333"/>
  </svg>`
  }, x = {
    "Type of damage?": {
      "Scratches, Chips, or Peeling Paint": "Scratches, rock chips, scuffs, or paint peeling off in strips.",
      Rust: "Rusty metal spots or paint with visible rust bubbles.",
      Dents: "Metal needs repair due to a hit.",
      "Bare Metal or Plastic": "Original paint has chipped away completely.",
      "Bumper Damage": "Tears, cracks, and holes."
    },
    "Size & extent of damage": {
      Small: "A few small chips or scratches up to the size of an eraser on the end of a pencil.",
      Medium: "Several small chips or scratches up to the size of a dime.",
      Large: "Numerous large damaged areas bigger than the size of a dime.",
      Extensive: "Large areas have deep scratches, chips, or peeling paint on multiple panels."
    },
    "Material type": {
      Metal: "Parts like the car's body, doors, hood, and trunk, which have metal underneath the paint.",
      "Non-metal": "Parts like bumpers, lower panels, trim, and mirrors, which have plastic or composite materials under the paint."
    }
  }, w = {
    Small: {
      0: ["ppu/ppt", "ppc", "rc", ["alt"]],
      1: ["mar", "AF4405", ["sp"]],
      2: ["FIB157", "DYN907T", "GLE1200"],
      3: ["ppp"],
      4: ["SEM68422"]
    },
    Medium: {
      0: ["tu2/tt2", "tc2", "rc", ["alt", "wag"]],
      1: ["mar", "AF4405", ["sp"]],
      2: ["FIB157", "DYN907T", "GLE1200"],
      3: ["tp2"],
      4: ["SEM68422"]
    },
    Large: {
      0: ["spu/spt", "spc", "rc", ["sp", "AF4405", "alt", "wag", "MMM6334", "T6363", "sphold"]],
      1: ["mar", "AF4405"],
      2: ["FIB157", "DYN907T", "GLE1200"],
      3: ["spp"],
      4: ["SEM68422"],
      "Non-metal": ["sem77723"]
    },
    Extensive: {
      0: ["ptu/ptt", "ptc", "ptp", "AF4405", "rc", ["sp", "alt", "wag", "PRE267", "T6363"]],
      1: ["mar"],
      2: ["FIB157", "DYN907T", "GLE1200"],
      3: [],
      4: ["SEM68422"],
      "Non-metal": ["sem77723"]
    }
  }, D = {
    0: ["rc|4", "alt|2", "wag|2"],
    1: ["mar|2", "AF4405|2", "rc|4", "alt|2", "wag|2"]
  }, b = {
    ppu: {
      "1/2 oz Paint Pen": "Applies paint precisely to small chips or scratches without the mess of a brush."
    },
    ppt: {
      "1/2 oz. Tricoat Paint Pens (2 pens)": "Applies paint precisely to small chips or scratches without the mess of a brush."
    },
    ppc: {
      "1/2 oz Clearcoat Paint Pen": "To seal and protect the painted area, keeping it safe from the sun, moisture, and wear."
    },
    rc: {
      "2 oz Rubbing Compound": "Smooths and polishes the repaired area, blending it with the rest of the paint."
    },
    alt: {
      "2 oz Acrylic Lacquer Thinner": "Cleans up mistakes and keeps the paint pen working well."
    },
    mar: {
      "4 oz. Rust Away": "Turns rust into a stable compound and prevents further corrosion, creating a good foundation for paint or body filler."
    },
    sp: {
      "Sanding Block": "Provides a firm surface for sandpaper, making sanding easier and more effective."
    },
    AF4405: {
      "Sandpaper Pack": "Smooths and prepares the surface for painting."
    },
    FIB157: {
      "Bondo® Body Filler  (1 quart)": "Repairs dents, dings, holes, large rusted areas, and scratches."
    },
    DYN907T: {
      "4.5 oz. Spot Putty": "Fills rough spots, minor imperfections, pinholes, and scratches, and dries smooth."
    },
    GLE1200: {
      "Three Plastic Spreaders": "Ideal for spreading body filler and spot putty."
    },
    ppp: {
      "1/2 oz. Primer Paint Pen": "Creates a smooth, even surface for better paint adhesion on unpainted areas."
    },
    SEM68422: {
      "Flexible Bumper Repair Kit": "Repairs tears, cracks, and holes in rubber bumpers or parts with accurate and effective application."
    },
    tu2: {
      "2 oz. Paint Bottle": "Matches your car's color and covers up to 3 square feet."
    },
    tt2: {
      "2 oz. Tricoat Paint Bottles (2 bottles)": "Matches your car's color and covers up to 3 square feet."
    },
    tc2: {
      "2 oz Clearcoat Bottle": "Seals and protects the painted area from sun, moisture, and wear."
    },
    wag: {
      "2 oz Wax and Grease Remover": "Removes wax and grease before painting for better adhesion."
    },
    tp2: {
      "2 oz. Primer Bottle": "Creates a smooth, even surface for better paint adhesion on unpainted areas."
    },
    ptu: {
      "16 oz. Basecoat Paint (One Pint)": "Matches your car's original color and covers about 20 square feet."
    },
    ptt: {
      "16 oz. Tricoat (2 Pint Containers)": "Matches your car's original color and covers about 20 square feet."
    },
    ptc: {
      "16 oz. Clearcoat (One Pint)": "Seals and protects the painted area from sun, moisture, and wear."
    },
    ptp: {
      "16 oz. Primer (One Pint)": "Prepares bare metal or plastic surfaces for painting and helps the paint stick better."
    },
    PRE267: {
      "Preval Spray System": "Provides a professional finish without needing an air compressor."
    },
    T6363: {
      "12 oz. Blending Solvent": "Blends the new clearcoat into the existing finish for a seamless look."
    },
    spp: {
      "12 oz. Primer Spray Can": "Creates a smooth, even surface for better paint adhesion on unpainted areas."
    },
    sem77723: {
      "11.3 oz. SEM (or SAP) Adhesion Promoter (Spray Can)": "Helps paint stick to vinyl, plastic, fiberglass, galvanized metal, chrome, aluminum, and glass."
    },
    spc: {
      "12 oz Clearcoat Spray Can": "Seals and protects the painted area from sun, moisture, and wear."
    },
    MMM6334: {
      "3/4 Inch Masking Tape": "Secures the areas around the painting site, providing sharp lines and preventing paint bleed"
    },
    sphold: {
      "Spray can trigger sprayer": "Turns a spray can into a professional sprayer for better control and a smooth coat."
    },
    spu: {
      "12 oz. Basecoat Spray Can": "Matches your car's original color and covers about 4 square feet."
    },
    spt: {
      "12 oz. Tricoat Spray Cans (2 cans)": "Matches your car's original color and covers about 4 square feet."
    }
  }, A = (
    /* HTML */
    `<div class="crs_steps_line">
        <div class="line">
            <p></p>
        </div>
        <ul>
            <li>Find Your Car<span></span></li>
            <li>Select Your Color<span></span></li>
            <li>Select Your Products<span></span></li>
            <li>Shopping Cart<span></span></li>
            <li>Checkout<span></span></li>
        </ul>
    </div>`
  ), I = () => {
    let e = "";
    for (const n in x) {
      const i = Object.keys(x).indexOf(n);
      e += `<div data-index="${i}" ${i != 0 ? "hidden" : ""}>
        <label class="text-cust">${n}</label>
            <div class="items-lg-center">
                <div class="select">
                    <div class="select_current"><div>${Object.keys(x[n])[0]}</div> ${f.arrowDown}</div>
                    <ul class="select_dropdown">`;
      for (const r in x[n])
        e += ` 
                <li>
                    <b>${r}</b> ${x[n][r]}
                </li>`;
      e += `</ul></div><div class="items-center">
            <button type="button" class="btn_back_step is_mob items-center" ${i == 0 ? "hidden" : ""}>${f.arrowLeft} Back</button>
            <button type="button" class="btn_next_step">Next ${f.arrowRight}</button></div>
        </div>
        <button type="button" class="btn_back_step is_desk items-center" ${i == 0 ? "hidden" : ""}>${f.arrowLeft} Back</button></div>`;
    }
    return `<div class="quiz">
        <h3 class="h3_title">Need Help Choosing the Right Product?</h3>
        <p class="text-cust">Use our guide to find the perfect solution for your needs, or explore all options below.</p>
        ${e}
    </div>`;
  }, M = (e, n) => `
        <li data-id="${e.id}">
            <a href="${e.href}">
                <img src="${e.image.replace("/thumb", "/thumb2")}" alt="${e.title}">
            </a>
            <div>
                <div class="items-center">
                    <a href="${e.href}">${e.title}</a>
                    <p ${n == 1 ? "hidden" : ""} class="qty">${n}x</p>
                </div>
            
                <p>${e.desc}</p>
                <div class="row items-center">
                    <p class="text-cust price">${e.price}</p> 
                    <a href="#" class="btn_add items-center">${f.basket} Add to Cart</a>
                </div>
            </div>
        </li>`, y = (e, n) => {
    let t = 1;
    if (n.size == "Extensive") {
      let i = D[n.type == 1 ? 1 : 0];
      for (let r = 0; r < i.length; r++)
        i[r].split("|")[0] == e && (t = parseInt(i[r].split("|")[1]));
    }
    return t;
  }, N = (e, n) => {
    let t = "", i = "", r = 0, u = !1, s, p, c, g, o = {};
    console.log("RecommendedProducts: "), console.log(e);
    for (let a = 0; a < e.length; a++)
      if (typeof e[a] == "object")
        for (let l = 0; l < e[a].length; l++)
          s = $(`.products-list.${e[a][l]}`), p = Object.keys(b[e[a][l]])[0], o.id = e[a][l], o.href = s.find(".related-items").attr("href"), o.image = s.find(".related-items img").attr("src"), o.desc = b[e[a][l]][p], o.title = p, o.price = s.find(".price").html(), i += M(o, y(e[a][l], n));
      else {
        a == 0 ? ($(".orderforms #page #main .car-touch-up-paints-heading p").html().includes("Tricoat") && (u = !0), s = $(`.products-list.${e[a].split("/")[+u]}`), p = Object.keys(b[e[a].split("/")[+u]])[0], c = b[e[a].split("/")[+u]][p], g = e[a].split("/")[+u]) : (s = $(`.products-list.${e[a]}`), p = Object.keys(b[e[a]])[0], c = b[e[a]][p], g = e[a]);
        const l = s.find(".price").html();
        if (o.id = g, o.href = s.find(".related-items").attr("href"), o.image = s.find(".related-items img").attr("src"), o.desc = c, o.title = p, o.price = l, l) {
          const h = l.match(/[\d,.]+/);
          h && h.length > 0 && (r += parseFloat(h[0] * y(g, n)));
        }
        t += M(o, y(g, n));
      }
    let d = $(`.products-list.${e[1]} .price`).html().split(/[\d,.]+/g)[0];
    return `
        <div class="recommended_products">
            <h3 class="h3_title">Recommended products</h3>
            <p class="text-cust">Your custom kit comes complete with everything you need for a perfect repair. For detailed application instructions and helpful tips, browse our website to guide you through the process.</p>
            <div class="quiz_res"><p >Type of damage: <b>${n.typeTitle}</b></p><p>Size: <b>${n.size}</b></p>${n.metal != "" ? `<p>Material type: <b>${n.metal}</b></p>` : ""}</div>
            <div class="b-1">
                <div class="recommended_products__base">
                    <h3 class="h3_title">What’s included in your <span class="is_desk">base</span> repair kit:</h3>
                    <ul>${t}</ul>
                    <div class="items-center">
                        <a href="#" class="btn_add_all">Add to Cart</a>
                        <p class="total">${d}${r.toFixed(2)}</p>
                    </div>
                </div>
                <div class="recommended_products__need">
                    <h3 class="h3_title">You might also need:</h3>
                    <ul>${i}</ul>
                </div>
            </div>
            <a href="#" class="btn_back_quiz items-center">${f.arrowLeft} Take quiz again</a>
        </div>`;
  }, B = `.items-center {
  display: flex;
  align-items: center;
}

button {
  cursor: pointer;
}

[style*="background-color: #fecc22;"],
.orderforms #page #main .car-touch-up-paints-heading p.small-note,
#kits,
.btn_back_step[hidden] {
  display: none;
}

.car-touch-up-paints-heading {
  margin-top: 0 !important;
}

.orderforms .car-touch-up-paints-heading #color-swatch {
  width: 44px;
  height: 44px;
  min-height: 44px;
  margin-right: 7px;
}

#page #main .text-cust,
#page #main .text-cust {
  color: var(--H1-Font, #333);
  font-size: 14px;
  line-height: 22px;
  margin: 0;
}

.quiz {
  box-sizing: border-box;
  background: #fffcf4;
  padding: 16px;
  float: left;
}
.quiz * {
  box-sizing: border-box;
  font-family: Arial;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.quiz label {
  margin: 16px 0 4px !important;
  font-weight: 700;
  display: block;
}
.quiz_res {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #D9D9D9;
  padding: 8px 0 3px;
  margin-top: 8px;
}
.quiz_res p {
  margin: 0 12px 4px 0 !important;
  line-height: 22px !important;
  color: var(--Main-Black, #222);
  font-size: 12px !important;
  font-style: normal;
  font-weight: 400;
  padding-right: 12px !important;
}
.quiz_res p.br-1 {
  border-right: 1px solid #D3DAE2;
}
.quiz_res p:last-child {
  padding-right: 0 !important;
  margin: 0 0 4px 0 !important;
}

.btn_next_step {
  width: 180px;
  border-radius: 4px;
  border: 2px solid #e68626;
  background: linear-gradient(180deg, #ffc842 0%, #f48818 100%);
  color: var(--H-Main, #333);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}
.btn_next_step svg {
  margin-left: 16px;
}
.btn_next_step:hover {
  background: linear-gradient(180deg, #ffc842 0%, #ffc842 100%);
}

h3.h3_title {
  color: var(--H-blue, #0373bd);
  font-size: 20px !important;
  font-weight: 700;
  line-height: 30px !important;
  margin-bottom: 8px;
}

.select {
  position: relative;
  color: var(--www-paintscratch-com-black, #000);
  font-size: 14px !important;
  font-weight: 400;
  line-height: 22px !important;
  z-index: 3;
  width: calc(100% - 16px - 180px);
  margin-right: 16px;
}
.select_current {
  padding: 6px 13px;
  position: relative;
  border: 1px solid #767676;
  background: var(--Grey-100, #ebebeb);
  cursor: pointer;
}
.select_current svg {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: auto;
}
.select.active .select_dropdown {
  display: block;
}
.select.active svg {
  transform: scaleY(-1);
}
.select_dropdown {
  background: var(--Grey-100, #ebebeb);
  border: 1px solid #767676;
  border-top: none;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  padding: 6px 12px;
  list-style-type: none;
  display: none;
}
.select_dropdown li {
  padding: 6px 0;
  cursor: pointer;
}
.select_dropdown li:hover b {
  color: var(--www-paintscratch-com-blue, #00e);
  text-decoration-line: underline;
}
.select_dropdown li:not(:first-child) {
  border-top: 1px solid #d9d9d9;
}
.select_dropdown li b {
  display: block;
  margin-bottom: 4px;
}

.c-blue {
  color: #0373BD;
}

#page #main .recommended_products {
  box-sizing: border-box;
  float: left;
  background: #fffcf4;
  padding: 16px;
}
#page #main .recommended_products * {
  box-sizing: border-box;
}
#page #main .recommended_products .b-1 {
  padding: 0 16px;
  border: 1px solid #d3dae2;
  margin-top: 13px;
}
#page #main .recommended_products__base {
  padding: 16px 0 20px;
  border-bottom: 1px solid #d3dae2;
}
#page #main .recommended_products__base .btn_add {
  display: none;
}
#page #main .recommended_products__base ul {
  margin-bottom: 18px;
}
#page #main .recommended_products li {
  list-style-type: none;
  padding: 8px 0;
  margin: 0;
  display: flex;
}
#page #main .recommended_products li p:not(.price, .qty) {
  color: var(--Main-Black, #222);
  font-size: 12px;
  line-height: 16px;
  margin: 8px 0;
}
#page #main .recommended_products li p.qty {
  background: #DAE7F8;
  margin: 0 0 0 8px;
  padding: 2px 4px;
  color: var(--www-paintscratch-com-blue, #00E);
  font-family: Arial;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
#page #main .recommended_products li .price {
  color: #900;
  font-weight: 700;
}
#page #main .recommended_products li a {
  color: var(--Blue-Link, #00e);
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 22px !important;
  text-decoration-line: underline;
}
#page #main .recommended_products li > a {
  display: block;
  border: 1px solid #d3dae2;
  background: #fff;
  width: 90px;
  height: 90px;
  margin-right: 20px;
  flex-shrink: 0;
}
#page #main .recommended_products li > a img {
  -o-object-fit: contain;
     object-fit: contain;
  width: 100%;
  height: 100%;
  padding: 4px;
}
#page #main .recommended_products li .row {
  justify-content: space-between;
  margin-top: auto;
}
#page #main .recommended_products li > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 90px;
}
#page #main .recommended_products a.btn_add_all {
  float: none;
  border-radius: 4px;
  border: 2px solid #e68626;
  background: linear-gradient(180deg, #ffc842 0%, #f48818 100%);
  text-align: center;
  color: var(--H-Main, #333);
  font-size: 16px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 32px !important;
  height: auto;
  width: 180px;
  margin-right: 24px;
  text-decoration: none;
}
#page #main .recommended_products a.btn_add_all:hover {
  background: linear-gradient(180deg, #ffc842 0%, #ffc842 100%);
}
#page #main .recommended_products .total {
  color: #900;
  font-size: 22px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 28px !important;
  margin: 0;
}
#page #main .recommended_products__need {
  padding: 20px 0 8px;
}

.btn_back_quiz {
  color: var(--H-Main, #333);
  font-size: 16px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 24px !important;
  text-decoration-line: underline;
  margin-top: 16px;
  background-color: transparent;
  border: none;
  padding: 0;
  width: -moz-fit-content;
  width: fit-content;
}
.btn_back_quiz svg {
  margin-right: 16px;
}

.btn_back_step {
  color: var(--H-Main, #333);
  font-family: Arial;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 24px !important;
  text-decoration-line: underline;
  margin-top: 24px;
  background-color: transparent;
  border: none;
}
.btn_back_step svg {
  margin-right: 8px;
}

.btn_add {
  color: var(--Blue-Link, #00e);
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 22px !important;
  text-decoration-line: underline;
}
.btn_add svg {
  margin-right: 6px;
}

.crs_steps_line {
  margin-bottom: 0;
}

@media (min-width: 992px) {
  .quiz,
  #page #main .recommended_products {
    width: 630px;
  }
  .orderforms .car-touch-up-paints-heading #color-swatch,
  #page #main h1 {
    margin-top: 16px !important;
  }
  .items-lg-center {
    display: flex;
    align-items: center;
  }
  .is_mob {
    display: none !important;
  }
}
@media (max-width: 992px) {
  .is_desk {
    display: none !important;
  }
  .orderforms #wrapper .car-touch-up-paints-heading {
    margin-top: 0 !important;
    padding-top: 2px;
  }
  #page #main .recommended_products,
  .quiz {
    margin-left: -15px;
    margin-right: -15px;
    margin-top: 15px;
  }
  h3.h3_title {
    margin-bottom: 12px;
  }
  .select {
    width: 100%;
    margin: 0 0 16px 0;
  }
  .regular #wrapper .category-heading h2 {
    margin-left: 0;
  }
  .regular #wrapper #page #main .category-heading p {
    padding-left: 0;
  }
  #page #main .recommended_products .b-1 {
    border-left: none;
    border-right: none;
    border-top: none;
    padding: 0;
    margin-top: 0;
  }
  #page #main .recommended_products__base {
    padding: 16px 0 20px;
  }
  #page #main .recommended_products__need {
    padding: 20px 0 12px;
  }
  #page #main .recommended_products li {
    padding: 6px 0;
  }
  #page #main .recommended_products li > a {
    margin-right: 12px;
  }
  .btn_back_quiz {
    margin-top: 20px;
  }
  .btn_back_step {
    margin-top: 0;
    margin-right: auto;
  }
  .btn_next_step {
    width: 100%;
    max-width: 254px;
  }
}/*# sourceMappingURL=main.css.map */`, j = `.crs_steps_line {
  position: relative;
  padding: 16px 20px;
  background-color: #fff;
  margin-bottom: -1px;
  box-sizing: border-box;
}

.crs_steps_line * {
  box-sizing: border-box;
}

.crs_steps_line .line {
  position: absolute;
  bottom: 23px;
  left: 20px;
  width: 100%;
  height: 2px;
  background: #d9edf7;
  width: calc(100% - 40px);
  overflow: hidden;
}

.crs_steps_line .line p {
  width: 0;
  height: 100%;
  background: #0373BD;
}

.crs_steps_line ul {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.crs_steps_line ul li {
  width: 20%;
  text-align: center;
  list-style: none;
  font-size: 14px;
  line-height: 22px;
}

.crs_steps_line ul li.current {
  font-weight: 700;
  color: #0373BD;
}

.crs_steps_line ul li.prev {
  color: #0373BD;
}

.crs_steps_line ul li span {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #d9edf7;
  margin: 4px auto 0;
}

.crs_steps_line ul li.current span,
.crs_steps_line ul li.prev span {
  background: #0373bd url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCA4IDYiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik03LjgyNjA5IDAuMTgyNTI3QzguMDU3OTcgMC40MDcxNzYgOC4wNTc5NyAwLjgwMDMxMiA3LjgyNjA5IDEuMDI0OTZMMy4yNTk3NSA1LjgxNzQ3QzMuMDQ1NzEgNi4wNjA4NCAyLjY3MTEzIDYuMDYwODQgMi40NTcwOCA1LjgxNzQ3TDAuMTczOTEzIDMuNDIxMjJDLTAuMDU3OTcxIDMuMTk2NTctMC4wNTc5NzEgMi44MDM0MyAwLjE3MzkxMyAyLjU3ODc4QzAuMzg3OTYgMi4zMzU0MSAwLjcyNTU0MiAyLjMzNTQxIDAuOTc2NTg5IDIuNTc4NzhMMi44NDk1IDQuNTQ0NDZMNy4wMjM0MSAwLjE4MjUyN0M3LjIzNzQ2IC0wLjA2MDg0MjMgNy42MTIwNCAtMC4wNjA4NDIzIDcuODI2MDkgMC4xODI1Mjd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==") no-repeat center/8px 6px;
}

.crs_steps_line ul li.current span {
  background: #fff;
  border: 2px solid #0373bd;
}

ul#header-steps {
  display: none;
}/*# sourceMappingURL=navigation.css.map */`;
  S({ name: "Quiz. Problem based product selection", dev: "Olha" }), P("exp_prob_bas");
  function z() {
    let e = window.currcart.length, n = 0;
    window.currcart.forEach((t) => {
      const i = t.split("|");
      n += +i[0];
    }), e > 0 ? ($(".to_cart").addClass("fix"), $(".to_cart button span").append(
      /* html */
      `<b>${n}</b>`
    )) : ($(".to_cart").removeClass("fix"), $(".to_cart button span b").remove());
  }
  function C(e) {
    const n = e.length > 20 ? "..." : "";
    $("body").append(
      /* html */
      `
      <div class="add_to_cart_info">
        <p><span>${e.slice(0, 20) + n}</span> was added to Cart</p>
        <div class="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_510_13116)">
          <path d="M5.01041 3.40381L8.19239 6.58579L11.3744 3.40381C11.75 3.02816 12.4129 3.02816 12.7886 3.40381C13.1863 3.80155 13.1642 4.44237 12.7886 4.81802L9.6066 8L12.7886 11.182C13.1863 11.5797 13.1642 12.2205 12.7886 12.5962C12.3908 12.9939 11.7721 12.9939 11.3744 12.5962L8.19239 9.41421L5.01041 12.5962C4.61266 12.9939 3.99394 12.9939 3.59619 12.5962C3.22054 12.2205 3.19845 11.5797 3.59619 11.182L6.77817 8L3.59619 4.81802C3.22054 4.44237 3.19845 3.80155 3.59619 3.40381C3.97184 3.02816 4.63476 3.02816 5.01041 3.40381Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_510_13116">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </div>
      </div>
  `
    );
    let t = setTimeout(() => {
      $(".add_to_cart_info").remove();
    }, 5e3);
    $(".add_to_cart_info .close").on("click", function() {
      $(this).closest(".add_to_cart_info").remove(), clearTimeout(t);
    });
  }
  class E {
    constructor(n) {
      this.page = n, this.res = {
        typeTitle: "Scratches, Chips, or Peeling Paint",
        type: 0,
        size: "Small",
        metal: ""
      }, this.init();
    }
    init() {
      this.page !== "/" && v() !== "mobile" && (this.page === "/cgi-bin/select-color.cgi" || this.page === "/cgi-bin/order-form.cgi" || this.page === "/cgi-bin/guided-order.cgi" || this.page === "/cgi-bin/shopping-cart.cgi" || this.page === "/cgi-bin/check-out.cgi" || this.page === "/cgi-bin/review-order.cgi") && this.navigationChange(), this.page === "/cgi-bin/order-form.cgi" && ($("head").append(`<style class="crs_style_main">${B}</style>`), q(".slide_cart .close").then((n) => {
        n.addEventListener("click", () => {
          setTimeout(() => {
            z();
          }, 200);
        });
      }), sessionStorage.getItem("result_recommended") ? (this.res = JSON.parse(sessionStorage.getItem("result_recommended")), setTimeout(() => {
        this.recommendedProducts();
      }, 100)) : this.quiz());
    }
    navigationChange() {
      $("head").append(`<style>${j}</style>`), $("#header-wrap").prepend(A);
      let n = 1;
      switch (this.page) {
        case "/cgi-bin/select-color.cgi":
          n = 2;
          break;
        case "/cgi-bin/order-form.cgi":
          n = 3;
          break;
        case "/cgi-bin/guided-order.cgi":
          n = 3;
          break;
        case "/cgi-bin/shopping-cart.cgi":
          n = 4;
          break;
        case "/cgi-bin/check-out.cgi":
          n = 5;
          break;
        case "/cgi-bin/review-order.cgi":
          n = 5;
          break;
      }
      $(".crs_steps_line ul li").each(function(i, r) {
        $(r).removeClass("current").removeClass("prev"), i + 1 < n ? $(r).addClass("prev") : i + 1 === n && $(r).addClass("current");
      });
      const t = +$(".crs_steps_line ul li").eq(0).width();
      $(".crs_steps_line .line p").css("width", t * n - t / 2 + "px");
    }
    quiz() {
      this.res = {
        typeTitle: "Scratches, Chips, or Peeling Paint",
        type: 0,
        size: "Small",
        metal: ""
      }, $(".car-touch-up-paints-heading").after(I()), $("html, body").animate({
        scrollTop: $(".quiz").offset().top - 16
      }, 500), L(".quiz [data-index]").forEach((t) => {
        k(t, "exp_prob_bas_vis_01", "Quiz", t.querySelector("label").innerText);
      }), $(".select_current").click(function(t) {
        $(this).parent().toggleClass("active"), m("exp_prob_bas_dropdown_01", "Click", "Dropdown", $(this).closest("[data-index]").find("label").text());
      });
      const n = this;
      console.log(n.res), $(".select_dropdown li").click(function(t) {
        let i = $(this).index();
        $(this).siblings().removeClass("active"), $(this).addClass("active");
        const r = $(this).closest(".select");
        r.removeClass("active"), r.find(".select_current > div").html($(this).find("b").html()), $(this).closest('[data-index="0"]').length ? (n.res.type = i, n.res.typeTitle = $(this).find("b").html()) : $(this).closest('[data-index="1"]').length ? n.res.size = $(this).find("b").html() : n.res.metal = $(this).find("b").html(), m("exp_prob_bas_dropdown_02", $(this).find("b").html(), "Dropdown", $(this).closest("[data-index]").find("label").text());
      }), $(".btn_next_step").click(function(t) {
        let i = $(".btn_next_step").index(this);
        if (m("exp_prob_bas_button_01", $(this).closest("[data-index]").find(".select_current > div").html(), "Button", $(this).closest("[data-index]").find("label").text()), $(".quiz .select.active").removeClass("active"), i == 1 && (console.log(n.res), $(".quiz .quiz_res p").html(`Size: <b>${n.res.size}</b>`)), i == 0) {
          $(this).closest('[data-index="0"]').attr("hidden", !0), $(".quiz > .text-cust").after(`<div class="quiz_res"><p>Type of damage: <b>${n.res.typeTitle}</b></p></div>`), $('.quiz [data-index="1"]').removeAttr("hidden"), n.res.metal = "";
          return;
        } else if (i == 1 && (n.res.size == "Extensive" || n.res.size == "Large")) {
          $('.quiz [data-index="1"]').attr("hidden", !0), $('.quiz [data-index="2"]').removeAttr("hidden"), n.res.metal = $('.quiz [data-index="2"] .select_current > div').html();
          return;
        }
        $(".quiz").remove(), n.recommendedProducts();
      }), $(".btn_back_step").click(function() {
        $(this).closest("[data-index]").attr("data-index") == 2 ? $(".quiz .quiz_res p").html(`Type of damage: <b>${n.res.typeTitle}</b>`) : $(".quiz .quiz_res").remove(), $(this).closest("[data-index]").attr("hidden", !0), $(this).closest("[data-index]").prev().attr("hidden", !1), m("exp_prob_bas_button_06", "Back", "Button", $(this).closest("[data-index]").find("label").text());
      });
    }
    recommendedProducts() {
      let n = this.res.type, t = this.res.size, i = this.res.metal;
      const r = this.res.typeTitle + ", " + t + ", " + i;
      let u = [
        ...w[t][0],
        ...n != 0 ? w[t][n] : [],
        ...i === "Non-metal" ? w[t][i] : []
      ];
      $(".car-touch-up-paints-heading").after(N(u, this.res)), sessionStorage.setItem("result_recommended", JSON.stringify(this.res)), m("exp_prob_bas_vis_02", "Recommended products", "Visibility", "Results page Recommended products"), k(_(".recommended_products__need"), "exp_prob_bas_vis_03", "You might also need:", "Results page You might also need:");
      function s(o, d) {
        return o.getBoundingClientRect().top === d.getBoundingClientRect().top;
      }
      const c = document.querySelector(".recommended_products .quiz_res").querySelectorAll("p");
      for (let o = 0; o < c.length; o++) {
        let d = !0;
        for (let a = o + 1; a < c.length; a++)
          if (s(c[o], c[a])) {
            d = !1;
            break;
          }
        d || c[o].classList.add("br-1");
      }
      $(".recommended_products li a").click(function(o) {
        let d = "Results page You might also need", a = "exp_prob_bas_button_04", l = "Button", h = $(this).closest("li").find("img").attr("alt");
        if ($(this).closest(".recommended_products__base")[0] && (d = "Results page Recommended products", a = "exp_prob_bas_button_03"), $(this).hasClass("btn_add")) {
          o.preventDefault(), a = "exp_prob_bas_button_05", l = "Add to cart Button";
          const R = parseInt($(this).closest("li").find(".qty").html().replace("x", "")), O = $(this).closest("li").attr("data-id");
          AddCart(R, O), v() === "mobile" && (z(), C(h));
        }
        m(a, h, l, d);
      }), $("html, body").animate({
        scrollTop: $(".recommended_products").offset().top - 16
      }, 500), $(".btn_add_all").on("click", function(o) {
        o.preventDefault(), $(".recommended_products__base li").each(function(d, a) {
          const l = $(a).attr("data-id"), h = parseInt($(a).find(".qty").html());
          AddCart(h, l);
        }), v() === "mobile" && (z(), C("Your base repair kit")), m("exp_prob_bas_button_02", r, "Add to cart Button", "Results page Recommended products");
      });
      const g = this;
      $(".btn_back_quiz").click(function(o) {
        o.preventDefault(), $(".recommended_products").remove(), g.quiz(), sessionStorage.removeItem("result_recommended"), m("exp_prob_bas_link_01", "Take quiz again", "Link", "Results page You might also need:");
      });
    }
  }
  let T = "";
  setInterval(() => {
    let e = window.location.pathname;
    T !== e && typeof window.isMobile == "function" && (T = e, setTimeout(() => {
      new E(e);
    }, 100));
  });
})();