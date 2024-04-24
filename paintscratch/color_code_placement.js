(function() {
  "use strict";
  const t = (i, n, o, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: n,
      event_type: o,
      event_loc: a
    }), console.log(`Event: ${i} | ${n} | ${o} | ${a}`);
  }, u = ({ name: i, dev: n }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, d = (i) => document.querySelectorAll(i), e = (i) => document.querySelector(i), m = (i) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, h = (i) => i.length <= 300 ? i : `${i.substring(0, 300)} <a class="crs_read_more"> More...</a>`, p = () => {
    const i = navigator.userAgent;
    return i.match(/Android/i) || i.match(/webOS/i) || i.match(/iPhone/i) || i.match(/iPad/i) || i.match(/iPod/i) || i.match(/BlackBerry/i) || i.match(/Windows Phone/i) ? "mobile" : "desktop";
  }, s = "https://conversionratestore.github.io/projects/paintscratch/img/", r = {
    zoom: (
      /*html */
      `
  <svg class="crs_icon_zoom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11.1152 19.2304C15.5972 19.2304 19.2304 15.5972 19.2304 11.1152C19.2304 6.63322 15.5972 3 11.1152 3C6.63322 3 3 6.63322 3 11.1152C3 15.5972 6.63322 19.2304 11.1152 19.2304Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M11.1153 8.25104V13.9794M8.25879 11.1229L13.9795 11.1152M16.9497 16.9496L21.0001 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
    ),
    play: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_7453_5316)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.161 4.35628 20.0004 4.73695 20.6395 5.36304C21.2786 5.98913 21.6764 6.82054 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864C21.79 16.01 21.777 16.151 21.763 16.289C21.6764 17.1796 21.2784 18.0112 20.6391 18.6373C19.9999 19.2634 19.1602 19.6439 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9794 12.861 19.9987 12 20C11.139 19.9987 10.2782 19.9794 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83895 19.6437 3.99955 19.2631 3.36047 18.637C2.72139 18.0109 2.32357 17.1795 2.237 16.289L2.197 15.864L2.122 14.954C2.04554 13.9711 2.00484 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136C2.21 7.99 2.223 7.849 2.237 7.711C2.32354 6.8207 2.72122 5.98942 3.36009 5.36334C3.99897 4.73727 4.83813 4.3565 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02063 11.1387 4.0013 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z" fill="#0000EE"/>
    </g>
    <defs>
      <clipPath id="clip0_7453_5316">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>`,
    close: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M14.0375 1.3061C13.6432 0.911714 13.0061 0.911714 12.6117 1.3061L7.66667 6.241L2.72165 1.29599C2.32727 0.901601 1.69018 0.901601 1.29579 1.29599C0.901403 1.69038 0.901403 2.32746 1.29579 2.72185L6.2408 7.66687L1.29579 12.6119C0.901403 13.0063 0.901403 13.6434 1.29579 14.0377C1.69018 14.4321 2.32727 14.4321 2.72165 14.0377L7.66667 9.09273L12.6117 14.0377C13.0061 14.4321 13.6432 14.4321 14.0375 14.0377C14.4319 13.6434 14.4319 13.0063 14.0375 12.6119L9.09253 7.66687L14.0375 2.72185C14.4218 2.33758 14.4218 1.69038 14.0375 1.3061Z" fill="white"/>
  </svg>`
  }, c = {
    Acura: ["ford_toyota_acura_lincoln_mercury.png", "Acura-Paint-Code.gif"],
    "Alfa-Romeo": ["mazda.png", "Hyundai-Paint-Code.gif"],
    "American-Coach": ["mazda.png", "Hyundai-Paint-Code.gif"],
    "Aston-Martin": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Audi: ["audi.png", "Audi-Paint-Code.png"],
    Bentley: ["mazda.png", "Hyundai-Paint-Code.gif"],
    BMW: ["bmw.png", "BMW-Paint-Code.gif", "BMW-Paint-Code-2.png"],
    "BMW-Motorcycles": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Buick: ["buick.png", "Buick-Paint-Code.png"],
    Cadillac: ["gmc_cadillac.png", "Cadillac-Paint-Code.png"],
    Chevrolet: ["chevy.png", "Chevy-Paint-Code.jpg"],
    Chrysler: ["jeep_dodge_chrysler.png", "Chrysler-Paint-Code.png"],
    Citroen: ["mazda.png", "Hyundai-Paint-Code.gif"],
    "Coachmen-RV": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Daewoo: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Dodge: ["jeep_dodge_chrysler.png", "Dodge-Paint-Code.png"],
    Duckworth: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Ferrari: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Fiat: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Fleetwood: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Ford: ["ford_toyota_acura_lincoln_mercury.png", "Ford-Paint-Code.gif"],
    "Forest-River": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Fountain: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Freightliner: ["mazda.png", "Hyundai-Paint-Code.gif"],
    GMC: ["gmc_cadillac.png", "GMC-Paint-Code.png", "Pontiac-Paint-Code.png"],
    "Harley-Davidson": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Honda: ["honda.png", "Honda-Paint-Code.gif"],
    "Honda-Motorcycle": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Hyundai: ["hyundai.png", "Hyundai-Paint-Code.gif"],
    Infiniti: ["infiniti.png", "Infiniti-Paint-Code.png"],
    International: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Isata: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Itasca: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Jaguar: ["jaguar.png", "Jaguar-Paint-Code.gif"],
    Jeep: ["jeep_dodge_chrysler.png", "Jeep-Paint-Code.png"],
    Kia: ["kia.png", "Kia-Paint-Code.gif"],
    Lamborghini: ["mazda.png", "Hyundai-Paint-Code.gif"],
    "Land-Rover": ["land-rover.png", "Land-Rover-Paint-Code.png"],
    Lexus: ["lexus.png", "Lexus-Paint-Code.gif"],
    Lincoln: ["ford_toyota_acura_lincoln_mercury.png", "Lincoln-Paint-Code.gif"],
    Lotus: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Lund: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Maserati: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Mazda: ["mazda.png", "Mazda-Paint-Code.gif"],
    "Mercedes-Benz": ["mercedes.png", "Mercedes-Benz-Paint-Code.png", "Mercedes-Benz-Paint-Code-2.png"],
    Mini: ["mini.png", "Mini-Paint-Code.png", ""],
    Mitsubishi: ["mitsubishi.png", "Mitsubishi-Paint-Code.gif"],
    Newmar: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Nissan: ["nissan.png", "Nissan-Paint-Code.png"],
    Opel: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Peterbilt: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Peugeot: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Porsche: ["porsche.png", "Porsche-Paint-Code.png"],
    Renault: ["mazda.png", "Hyundai-Paint-Code.gif"],
    "Rolls-Royce": ["mazda.png", "Hyundai-Paint-Code.gif"],
    "RV-Other": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Saab: ["saab.png", "Hyundai-Paint-Code.gif"],
    Scion: ["scion.png", "Scion-Paint-Code.png"],
    SEAT: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Smart: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Subaru: ["subaru.png", "Subaru-Paint-Code.gif"],
    Suzuki: ["mazda.png", "Hyundai-Paint-Code.gif"],
    "Suzuki-Motorcycle": ["mazda.png", "Hyundai-Paint-Code.gif"],
    Tesla: ["tesla.png", "Tesla-Paint-Code.png"],
    Toyota: ["ford_toyota_acura_lincoln_mercury.png", "Toyota-Paint-Code.gif"],
    Volkswagen: ["VW.png", "Volkswagen-Paint-Code.gif"],
    Volvo: ["volvo.png", "Volvo-Paint-Code.png"],
    Winnebago: ["mazda.png", "Hyundai-Paint-Code.gif"],
    Yamaha: ["mazda.png", "Hyundai-Paint-Code.gif"]
  }, g = {
    Toyota: "/aJhKZ8l5YRk?si=QY48QFGYDJAXPSCn",
    Chevrolet: "/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd",
    Volkswagen: "/XF4WvErVRoY?si=DflJ6t0zyB_9COKc",
    Subaru: "/mkoxl-NA31I?si=Uj_yWuIr3XpC0XMy",
    Audi: "/XF4WvErVRoY?si=DflJ6t0zyB_9COKc",
    GMC: "/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd",
    Cadillac: "/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd",
    Pontiac: "/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd"
  }, f = (
    /* HTML */
    `<div class="crs_accordion">
  <h3>To proceed to paint selection, start with finding your car color code</h3>
  <div class="crs_accordion_current">What is a color code?</div>
  <div class="crs_accordion_content">
    <p>Your vehicle's color code is a unique identifier for the exact paint shade used on your vehicle. It ensures you get the precise color match for touch-ups or repaints.</p>
    <p><b>Ordering Paint:</b> Always use the color code found on your vehicle, not the color name or what you see on a screen. Screen colors can be misleading due to variations in display settings.</p>
    <p><b>Where to Find It:</b> Check the driver’s side door jamb, glove box, engine compartment, or trunk for a sticker or plate with the code. It's usually near a label that says "Paint".</p>
    <p><b>Need Help?</b> If you can't find or read the color code, ask a dealership or auto body shop for help. Provide your vehicle identification number (VIN) for accurate assistance.</p>
    <p><b>Remember: To avoid color mismatches, never rely on visual impressions from a screen or paint names. Always refer to the color code.</b></p>
  </div>
</div>`
  ), _ = (
    /* HTML */
    `<div class="crs_images">
  <h3>Where to find your vehicle’s color code:</h3>
  <div class="d-lg-flex crs_images_row">
    <div class="crs_images_left relative"><img src="${s}paint-code-locations/mazda.png" alt="image">${r.zoom}</div>
    <div class="crs_images_right">
      <div class="relative"><img src="${s}color-id-tag/Hyundai-Paint-Code.gif" alt="image">${r.zoom}</div>
    </div>
  </div>
</div>
<button type="button" class="crs_video" style="display: none">${r.play} <span>Video instruction on how to find your color code</span></button>
<h3>Select the paint color based only on your color code:</h3>`
  ), y = (i) => (
    /* HTML */
    `<div class="crs_popup crs_popup_video">
  <div class="crs_popup_container">
    <div class="crs_popup_head">Video instruction ${r.close}</div> 
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${i}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div> 
</div>`
  ), v = (
    /* HTML */
    `<div class="crs_popup crs_popup_image">
  <div class="crs_popup_container">
    <div class="crs_popup_head">${r.close}</div> 
    <img src="#" alt="image">
  </div> 
</div>`
  ), C = `#page {
  margin-top: 0;
}

.select-color #color-display-table .color-box span,
.select-color #color-display-table td.color-info input,
#color-display-table tr {
  cursor: pointer !important;
}

.select-color ul#benefit-list li .warning-sign {
  margin-top: 2px;
}
.select-color ul#benefit-list li span {
  color: var(--www-paintscratch-com-black, #000);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-left: 12px;
}

.select-color #main span.instructions {
  display: none !important;
}
.select-color #main span.instructions + p {
  display: none !important;
}

#main h3 {
  color: var(--www-paintscratch-com-black, #000);
  font-family: Arial;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 16px !important;
  margin-top: 24px !important;
}

#page #main .crs_accordion_current {
  color: #00E;
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  padding: 7px 12px;
  background: #F4F4F8;
  position: relative;
  cursor: pointer;
}
#page #main .crs_accordion_current:after {
  content: "+";
  color: #3D3DF0;
  text-align: center;
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 24px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
#page #main .crs_accordion_content {
  display: none;
  background: #F4F4F8;
  padding: 12px;
  border-top: 2px solid #fff;
}
#page #main .crs_accordion_content p {
  color: #000;
  font-family: Arial;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
}
#page #main .crs_accordion_content p:not(:last-child) {
  margin-bottom: 12px;
}
#page #main .crs_accordion.active .crs_accordion_current:after {
  content: "-";
}
#page #main .crs_accordion.active .crs_accordion_content {
  display: block;
}

.crs_images_left {
  border-radius: 4px;
  border: 1px solid #E9E9E9;
  max-width: 300px;
  width: 100%;
  margin-right: 24px;
  margin-right: auto;
  height: -moz-fit-content;
  height: fit-content;
  margin-bottom: 16px;
}
.crs_images_right {
  max-width: 290px;
  width: 100%;
  height: -moz-fit-content;
  height: fit-content;
}
.crs_images_right div {
  margin-bottom: 16px;
}
.crs_images img {
  width: 100%;
  cursor: pointer;
}

.crs_icon_zoom {
  position: absolute;
  z-index: 2;
  cursor: pointer;
  right: 12px;
  bottom: 12px;
  pointer-events: none;
}

.crs_video {
  padding: 8px 0 16px;
  background-color: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
}
.crs_video svg {
  margin-right: 8px;
}
.crs_video span {
  color: var(--www-paintscratch-com-blue, #00E);
  font-family: Arial;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
}

.crs_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(39, 48, 56, 0.65);
  -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
  display: flex;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 999;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
}
.crs_popup.active {
  opacity: 1;
  pointer-events: auto;
}
.crs_popup.active .crs_popup_container {
  transform: translateY(0);
}
.crs_popup iframe {
  height: 338px;
}
.crs_popup_container {
  max-width: 600px;
  width: 100%;
  margin: auto;
  transform: translateY(100px);
  transition: all 0.3s ease;
}
.crs_popup_container img {
  width: 100%;
  background-color: #fff;
}
.crs_popup_head {
  background: #0373BD;
  padding: 12px;
  color: var(--White, #FFF);
  text-align: center;
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  position: relative;
  min-height: 26px;
}
.crs_popup_head svg {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
}

.crs_read_more {
  cursor: pointer;
  color: rgb(0, 0, 238);
  text-decoration: underline;
}

.relative {
  position: relative;
}

@media screen and (min-width: 769px) {
  .d-lg-flex {
    display: flex;
  }
  #page #main {
    padding-right: 32px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 768px) {
  #page #main p, #page #main h3 + p {
    font-size: 14px;
    line-height: 22px;
  }
  .select-color ul#benefit-list li span {
    font-size: 14px;
    line-height: 20px;
  }
  #main h3 {
    font-size: 16px !important;
    line-height: 24px;
  }
  .crs_accordion_current {
    padding: 11px 12px;
  }
  .crs_images_row > div {
    margin-left: auto;
    margin-right: auto;
  }
  .crs_video span {
    font-size: 13px;
    line-height: 18px;
  }
  .crs_popup iframe {
    height: 300px;
  }
  #color_search_pop a.action-button-orange {
    margin-left: 0 !important;
    width: 100%;
  }
  .crs_images_right {
    max-width: 300px;
  }
  .select-color ul#benefit-list li#guarantee_benefit_li {
    align-items: flex-start;
  }
  .green-check-mark {
    width: 22px;
  }
}/*# sourceMappingURL=main.css.map */`;
  u({ name: "Color code placement", dev: "Olha" }), m("exp_сolor_code_placement");
  class x {
    constructor() {
      this.device = p(), this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${C}</style>`), this.addAccordion(), this.addImages(), this.addVideo(), this.closePopup(), this.device === "mobile" && this.addReadMore();
    }
    addAccordion() {
      e(".crs_accordion") || e(".select-color span.instructions + p") && (e(".select-color span.instructions + p").insertAdjacentHTML("afterend", f), e(".crs_accordion_current").addEventListener("click", (n) => {
        e(".crs_accordion").classList.toggle("active");
      }));
    }
    addImages() {
      if (e("#color-display-table") && !e(".crs_images")) {
        e("#color-display-table").insertAdjacentHTML("beforebegin", _), document.body.insertAdjacentHTML("beforeend", v);
        for (let n in c)
          if (e("#page #main h1").innerText.toLowerCase().includes(n.toLowerCase())) {
            let o = c[n][2] != null ? `<div class="relative"><img src="${s}color-id-tag/${c[n][2]}" alt="image">${r.zoom}</div>` : "";
            e(".crs_images_left img").src.includes(c[n][0]) || (e(".crs_images_left img").src = s + "paint-code-locations/" + c[n][0]), e(".crs_images_right").innerHTML = `<div class="relative"><img src="${s}color-id-tag/${c[n][1]}" alt="image">${r.zoom}</div>` + o;
          }
        d(".crs_images_row .relative > img").forEach((n, o) => {
          n.addEventListener("click", (a) => {
            e(".crs_popup_image img").src = n.src, setTimeout(() => {
              e(".crs_popup_image").classList.add("active");
            }, 200);
            let l = n.closest(".crs_images_right") ? "Color plate" : "Where to find your color";
            t("exp_color_code_image_01", "Section", "Image", l);
          });
        });
      }
    }
    addVideo() {
      if (!e(".crs_video") || e(".crs_popup_video"))
        return;
      let n = e(".crs_video");
      for (let o in g)
        e("#page #main h1").innerText.toLowerCase().includes(o.toLowerCase()) && (n.insertAdjacentHTML("afterend", y(g[o])), e(".crs_popup_video iframe").addEventListener("click", (a) => {
          t("exp_color_code_button_01", "Play", "Button", "Video instruction pop up");
        }), n.style.display = "flex", n.addEventListener("click", (a) => {
          e(".crs_popup_video").classList.add("active"), t("exp_color_code_link_01", "Video", "Link", "Video instruction on how to find your color code");
        }));
    }
    stopVideo() {
      if (!e(".crs_popup_video iframe"))
        return;
      let n = e(".crs_popup_video iframe").src;
      e(".crs_popup_video iframe").src = n;
    }
    closePopup() {
      d(".crs_popup_head svg").forEach((n) => {
        n.addEventListener("click", (o) => {
          n.closest(".crs_popup").classList.remove("active"), this.stopVideo(), n.closest(".crs_popup_video") ? t("exp_color_code_button_02", "Close", "Button", "Video instruction pop up") : t("exp_color_code_button_02", "Close", "Button", "Image pop up");
        });
      }), document.addEventListener("click", (n) => {
        n.target.classList.contains("crs_popup") && (n.target.classList.remove("active"), this.stopVideo(), n.target.classList.contains("crs_popup_video") ? t("exp_color_code_under_01", "Close", "Under", "Video instruction pop up") : t("exp_color_code_under_01", "Close", "Under", "Image pop up"));
      });
    }
    addReadMore() {
      d("#main h3").forEach((n) => {
        if (n.innerText.includes("Color Code Information") && !n.nextElementSibling.querySelector(".crs_read_more")) {
          const o = n.nextElementSibling, a = o.innerText, l = h(a);
          o.innerHTML = l, e(".crs_read_more").addEventListener("click", (w) => {
            o.innerHTML = a;
          });
        }
      });
    }
  }
  let b = setInterval(() => {
    window.location.href.includes("cgi-bin/select-color.cgi") && (e('#no_car_selected[style*="block"]') || (clearInterval(b), new x()), e('#no_car_selected[style*="block"]') && !e(".crs_style") && p() === "mobile" && document.head.insertAdjacentHTML("beforeend", `
      <style class="crs_style">
        @media screen and (max-width: 768px) {
          #color_search_pop a.action-button-orange {
            margin-left: 0!important;
            width: 100%;
          }
        }
      </style>`));
  });
})();