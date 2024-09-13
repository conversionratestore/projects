(function() {
  "use strict";
  const g = `aside.floating-banner {
  padding: 0;
  background: unset;
  border: none;
  width: 236px;
  margin-left: -10px;
}

.crs_banner {
  padding: 18px 18px 22px 18px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_banner img {
  width: 55px;
  height: 55px;
}
.crs_banner h3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #fff;
}
.crs_banner ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_banner ul li {
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #fff;
  margin: 0;
  display: flex;
  padding-left: 16px;
  position: relative;
}
.crs_banner ul li::before {
  content: none;
}
.crs_banner ul li span {
  position: absolute;
  left: 0;
  top: 9px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  display: flex;
}
.crs_banner a {
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-top: 24px;
}/*# sourceMappingURL=style.css.map */`, d = (n, e) => {
    const a = setInterval(() => {
      const t = document.querySelector(n);
      t && (clearInterval(a), e(t));
    }, 100);
  }, u = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class p {
    constructor(e) {
      this.elements = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e;
    }
    on(e, a, t) {
      return typeof a == "function" && (t = a, a = ""), this.elements.forEach(function(r) {
        r.addEventListener(e, function(o) {
          var i;
          if (a) {
            let s = (i = o.target) == null ? void 0 : i.closest(a);
            r.contains(s) && (t == null || t.call(s, o));
          } else
            t == null || t.call(r, o);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(a) {
        a.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(a) {
        a.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(a) {
        a.classList.toggle(e);
      }), this;
    }
    each(e) {
      return this.elements.forEach((a, t) => {
        e(a, t);
      }), this;
    }
    style(e, a) {
      const t = e.split("-").map((r, o) => o === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[t] = a;
      }), this;
    }
  }
  const l = (n) => new p(n), m = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  }, c = (n, e = "info") => {
    let a;
    switch (e) {
      case "info":
        a = "color: #3498db;";
        break;
      case "warn":
        a = "color: #f39c12;";
        break;
      case "error":
        a = "color: #e74c3c;";
        break;
      case "success":
        a = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${n}`, `${a} font-size: 16px; font-weight: 600`);
  }, b = "https://conversionratestore.github.io/projects/cleanmymac", f = (n, e, a) => {
    const { header: t, bullets: r, img: o } = n, { background: i, btn: s, bulletColor: M } = e, x = r.map((k) => (
      /* html */
      `
      <li><span style="background: ${M}"></span>${k}</li>
    `
    )).join("");
    return (
      /* html */
      `
    <div class="crs_banner" style="background: ${i}">
      <img src="${b}/img/${o}.png" alt="${o}" />
      <h3>${t}</h3>
      <ul>
        ${x}
      </ul>
      <a style="background: ${s}" href="${a}">Try CleanMyMac X</a>
    </div>
  `
    );
  }, h = {
    "/blog/mac-keeps-shutting-down": {
      header: "Remove malware causing your Mac to shut down ",
      bullets: [
        "Improve Mac efficiency by blocking 99% of viruses that slow it down",
        "Auto-update your software that protects against malware",
        "Remove gigabytes of junk to make your Mac up to 2.5x faster"
      ],
      img: "malware"
    },
    "/blog/why-system-storage-takes-so-much-space": {
      header: "Free up storage by removing system junk",
      bullets: [
        "Automatically identify and remove cache and temporary files",
        "Reclaim up to 5x more storage with a single click",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "mouse"
    },
    "/blog/best-free-mac-cleaners": {
      header: "Try the #1 Mac cleaner app in the world for free",
      bullets: [
        "Automatically identify and remove cache and temporary files",
        "Reclaim up to 5x more storage by removing large and old files",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "desktop"
    },
    "/blog/google-chrome-helper-eating-cpu": {
      header: "Reduce CPU usage with CleanMyMac",
      bullets: [
        "Monitor CPU usage in real time and identify high-resource apps",
        "Identify and close heavy-consuming apps",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "cpu"
    },
    "/blog/cant-update-mac": {
      header: "Update Your Mac Hassle-Free with CleanMyMac",
      bullets: [
        "Check Mac compatibility for updates and free up space for them",
        "Reclaim up to 5x more storage with a single click"
      ],
      img: "desktop"
    },
    "/blog/macbook-not-sleeping-lid-closed": {
      header: "Fix Mac Sleep Issues by Managing System Resources with CleanMyMac",
      bullets: [
        "Automatically close hung applications to fix sleep issues",
        "Monitor CPU usage and spot resource-draining apps",
        "Optimize RAM and Startup Items to boost Mac speed up to 2.5x"
      ],
      img: "desktop"
    },
    "/blog/uninstall-programs-mac": {
      header: "Delete Mac Programs Effortlessly with CleanMyMac X",
      bullets: [
        "Remove apps and all associated files with one click",
        "Clear leftover cache and files to reclaim up to 5x more storage",
        "Optimize RAM and Startup Items to boost Mac speed up to 2.5x"
      ],
      img: "programs"
    },
    "/blog/clear-system-data-storage-mac": {
      header: "Free up storage by removing system junk",
      bullets: [
        "Automatically identify and remove cache and temporary files",
        "Reclaim up to 5x more storage by removing large and old files",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "mouse"
    },
    "/blog/reduce-cpu-usage-mac": {
      header: "Manage CPU Usage and Boost Performance with CleanMyMac X",
      bullets: [
        "Monitor CPU usage in real time and identify high-resource apps",
        "Identify and close heavy-consuming apps",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "cpu"
    },
    "/blog/clean-up-mac": {
      header: "Try the #1 Mac cleaner app in the world for free",
      bullets: [
        "Automatically identify and remove cache and temporary files",
        "Reclaim up to 5x more storage by removing large and old files",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "desktop"
    },
    "/blog/apple-mail-app-not-working": {
      header: "Fix Apple Mail Issues with CleanMyMac X",
      bullets: [
        "Clear email attachments to free up space and prevent crashes",
        "Auto-remove and reindex envelope files for better Mail performance",
        "Optimize RAM, CPU usage, remove system junk and keep your Mac in top shape"
      ],
      img: "mail"
    },
    "/blog/delete-time-machine-backups": {
      header: "Free Up Storage by Removing Time Machine Snapshots",
      bullets: [
        "Automatically thin out old Time Machine snapshots",
        "Reclaim up to 5x more storage by removing large and old files",
        "Optimize RAM and CPU usage to make your Mac up to 2.5x faster"
      ],
      img: "power"
    },
    "/blog/clear-purgeable-space-mac": {
      header: "Free up purgeable space on your Mac in seconds",
      bullets: [
        "Automatically identify and remove purgeable files",
        "Reclaim up to 5x more storage by removing large and old files",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "ssd"
    },
    "/blog/uninstall-onedrive-mac": {
      header: "Delete Mac Programs Effortlessly with CleanMyMac X",
      bullets: [
        "Remove apps and all associated files with one click",
        "Clear leftover cache and files to reclaim up to 5x more storage",
        "Optimize RAM and Startup Items to boost Mac speed up to 2.5x"
      ],
      img: "programs"
    },
    "/blog/show-hard-drives-desktop": {
      header: "Clean up your Mac without digging through your hard drive",
      bullets: [
        "Automatically identify and remove cache and temporary files",
        "Reclaim up to 5x more storage by removing large and old files",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "hard"
    },
    "/blog/free-up-space-mac": {
      header: "Free up Mac space by automatically identifying and removing system junk",
      bullets: [
        "Identify and remove cache and temporary files",
        "Reclaim up to 5x more storage with a single click",
        "Optimize RAM and Startup Items to make your Mac up to 2.5x faster"
      ],
      img: "mouse"
    },
    "/blog/speed-up-slow-mac": {
      header: "Improve your Mac's speed by up to 2.5x with CleanMyMac X",
      bullets: [
        "Detect and remove malware that slows down your Mac",
        "Eliminate cache and logs to boost overall system speed",
        "Optimize RAM and Startup Items to make your Mac faster"
      ],
      img: "settings"
    }
  }, y = {
    cpu: {
      background: "linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)",
      bulletColor: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)"
    },
    desktop: {
      background: "linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)",
      bulletColor: "#F4927C"
    },
    malware: {
      background: "linear-gradient(180deg, rgba(203, 104, 102, 0.60) 0%, rgba(111, 88, 113, 0.60) 72.19%), linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #F1795E",
      bulletColor: "#F4927C"
    },
    mouse: {
      background: "linear-gradient(180deg, #CC6EA8 -8.24%, #605784 78.55%)",
      btn: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)",
      bulletColor: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)"
    },
    programs: {
      background: "linear-gradient(180deg, rgba(95, 143, 181, 0.60) 0%, rgba(72, 101, 140, 0.60) 100%), linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #29A0FC",
      bulletColor: "#4FB1FD"
    },
    mail: {
      background: "linear-gradient(180deg, rgba(203, 104, 102, 0.60) 0%, rgba(111, 88, 113, 0.60) 72.19%), linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #F1795E",
      bulletColor: "#F4927C"
    },
    power: {
      background: "linear-gradient(180deg, rgba(61, 171, 153, 0.50) 0%, rgba(59, 103, 128, 0.50) 100%), linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #04A19A",
      bulletColor: "#06B1AA"
    },
    ssd: {
      background: "linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)",
      bulletColor: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)"
    },
    hard: {
      background: "linear-gradient(180deg, rgba(95, 143, 181, 0.60) 0%, rgba(72, 101, 140, 0.60) 100%), linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #29A0FC",
      bulletColor: "#4FB1FD"
    },
    settings: {
      background: "linear-gradient(180deg, #8C699F 0%, #373C6C 100%)",
      btn: "linear-gradient(180deg, #FE7AAD 0%, #EC5998 100%)",
      bulletColor: "#F4927C"
    }
  };
  u({ name: "Blog banner", dev: "YK" }), m("Blog banner");
  class C {
    constructor() {
      if (this.path = window.location.pathname, this.data = h[this.path], !this.data) {
        c("Data not found!", "error");
        return;
      }
      this.style = y[this.data.img], this.init();
    }
    init() {
      d("aside.floating-banner", () => {
        this.createBanner();
      });
    }
    createBanner() {
      const e = l(".bottom-banner__cta").elements[0].getAttribute("href");
      if (!e) {
        c("Trial link not found!", "error");
        return;
      }
      l("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${g}</style>`), l("aside.floating-banner").elements[0].innerHTML = f(this.data, this.style, e);
    }
  }
  new C();
})();
//# sourceMappingURL=index.js.map
