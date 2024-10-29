(function() {
  "use strict";
  const p = `aside.floating-banner {
  padding: 0;
  background: unset;
  border: none;
  width: 236px;
  margin-left: -10px;
}

.crs_banner {
  overflow: hidden;
  position: relative;
  padding: 30px 18px;
  border-radius: 16px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(180deg, #eaebef 0%, #f5f5f5 100%);
}
.crs_banner.hide {
  display: none;
}
.crs_banner span.close {
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  display: flex;
  height: 10px;
  width: 10px;
  justify-content: center;
  align-items: center;
}
.crs_banner span.close svg {
  width: 10px;
  height: 10px;
}
.crs_banner > svg {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
.crs_banner > div {
  position: relative;
  z-index: 1;
}
.crs_banner > div > img {
  width: 58px;
  margin-bottom: 12px;
}
.crs_banner h3 {
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 24px;
}
.crs_banner a {
  box-sizing: border-box;
  border-radius: 40px;
  border: 4px solid #36ca4d;
  background: #36ca4d;
  color: #fff;
  font-size: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  line-height: 1;
}
.crs_banner a:hover {
  border: 4px solid #91da9c;
}/*# sourceMappingURL=style.css.map */`, g = (s, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), d(`Event: ${s} | ${e} | ${n} | ${t}`, "success");
  }, u = (s, e) => {
    const n = setInterval(() => {
      const t = document.querySelector(s);
      t && (clearInterval(n), e(t));
    }, 100);
  }, b = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class h {
    constructor(e) {
      this.elements = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e;
    }
    on(e, n, t) {
      return typeof n == "function" && (t = n, n = ""), this.elements.forEach(function(a) {
        a.addEventListener(e, function(o) {
          var r;
          if (n !== "") {
            let c = (r = o.target) == null ? void 0 : r.closest(n);
            c && (t == null || t.call(c, o));
          } else
            t == null || t.call(a, o);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(e);
      }), this;
    }
    each(e) {
      return this.elements.forEach((n, t) => {
        e(n, t);
      }), this;
    }
    style(e, n) {
      const t = e.split("-").map((a, o) => o === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[t] = n;
      }), this;
    }
  }
  const i = (s) => new h(s), f = (s, e, n, t, a = 1e3, o = 0.5) => {
    let r, c;
    if (r = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? c = setTimeout(() => {
          g(
            e,
            l[0].target.dataset.visible || t || "",
            "view",
            n
          ), r.disconnect();
        }, a) : (d("Element is not fully visible", "warn"), clearTimeout(c));
      },
      { threshold: [o] }
    ), typeof s == "string") {
      const l = document.querySelector(s);
      l && r.observe(l);
    } else
      r.observe(s);
  }, d = (s, e = "info") => {
    let n;
    switch (e) {
      case "info":
        n = "color: #3498db;";
        break;
      case "warn":
        n = "color: #f39c12;";
        break;
      case "error":
        n = "color: #e74c3c;";
        break;
      case "success":
        n = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${s}`, `${n} font-size: 16px; font-weight: 600`);
  }, m = "https://conversionratestore.github.io/projects/cleanmymac", y = (
    /* html */
    `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
<path opacity="0.16" d="M1 1L5 5M5 5L9 1M5 5L1 9M5 5L9 9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  ), w = (
    /* html */
    `<svg xmlns="http://www.w3.org/2000/svg" width="236" height="298" viewBox="0 0 236 298" fill="none">
<g filter="url(#filter0_f_2212_24433)">
<ellipse cx="45.5" cy="55.4985" rx="73.5" ry="68.5" fill="#FFBFF6"/>
</g>
<defs>
<filter id="filter0_f_2212_24433" x="-208" y="-193.001" width="507" height="497" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_2212_24433"/>
</filter>
</defs>
</svg>`
  ), v = (s, e, n) => (
    /* html */
    `
    <div class="crs_banner">
      ${w}
      <span class="close">${y}</span>
      <div>
      
      <img src="${m}/img/pink_monitor.png" alt="desktop" />
      <h3>${s}</h3>
      <a href="${e}">${n}</a>
      </div>
    </div>
  `
  ), x = {
    "/blog/mac-keeps-shutting-down": "Remove malware causing your Mac to shut down",
    "/blog/why-system-storage-takes-so-much-space": "Free up storage by removing system junk to shut down",
    "/blog/best-free-mac-cleaners": "Try the #1 Mac cleaner app in the world for free",
    "/blog/google-chrome-helper-eating-cpu": "Reduce CPU usage with CleanMyMac",
    "/blog/cant-update-mac": "Update Your Mac Hassle-Free with CleanMyMac",
    "/blog/macbook-not-sleeping-lid-closed": "Fix Mac Sleep Issues by Managing System Resources",
    "/blog/uninstall-programs-mac": "Delete Mac Programs Effortlessly with CleanMyMac X",
    "/blog/clear-system-data-storage-mac": "Free up storage by removing system junk",
    "/blog/reduce-cpu-usage-mac": "Manage CPU Usage and Boost Performance with CleanMyMac X",
    "/blog/clean-up-mac": "Try the #1 Mac cleaner app in the world for free",
    "/blog/apple-mail-app-not-working": "Fix Apple Mail Issues with CleanMyMac X",
    "/blog/delete-time-machine-backups": "Fix Apple Mail Issues with CleanMyMac X",
    "/blog/clear-purgeable-space-mac": "Free up purgeable space on your Mac in seconds",
    "/blog/uninstall-onedrive-mac": "Delete Mac Programs Effortlessly with CleanMyMac X",
    "/blog/show-hard-drives-desktop": "Clean up your Mac without digging through your hard drive",
    "/blog/free-up-space-mac": "Free up Mac space by automatically identifying and removing system junk",
    "/blog/speed-up-slow-mac": "Improve your Mac's speed by up to 2.5x with CleanMyMac X"
  };
  b({ name: "Blog banner V2", dev: "YK" }), g("exp_blog_banner_v2_loaded", "Experiment loaded", "loaded");
  class _ {
    constructor(e) {
      if (this.path = window.location.pathname, this.title = x[this.path], !this.title) {
        d("Data not found!", "error");
        return;
      }
      this.link = e === "b" ? "https://cleanmymac.com/" : "https://macpaw.com/download/cleanmymac", this.btn = e === "b" ? "Explore CleanMyMac" : "Download", this.init();
    }
    init() {
      u("aside.floating-banner", () => {
        this.createBanner();
      });
    }
    createBanner() {
      i("body").elements[0].insertAdjacentHTML(
        "afterbegin",
        /* html */
        `<style>
      ${p}
      </style>`
      ), i("aside.floating-banner").elements[0].innerHTML = v(this.title, this.link, this.btn), this.addEvents();
    }
    addEvents() {
      f(".crs_banner", "exp_blog_banner_visible", "Sidebar CTA banner", "Banner visible"), i(".crs_banner .close").on("click", function(e) {
        g("exp_blog_banner_close", "Banner closed", "click", "Sidebar CTA banner"), i(".crs_banner").addClass("hide");
      }), i(".crs_banner a").on("click", function(e) {
        g("exp_blog_banner_cta", "Banner button clicked", "click", "Sidebar CTA banner");
      });
    }
  }
  new _("b");
})();
//# sourceMappingURL=index.js.map
