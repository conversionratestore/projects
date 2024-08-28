(function() {
  "use strict";
  const s = (o, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), console.log(`Event: ${o} | ${t} | ${e} | ${n}`);
  }, l = ({ name: o, dev: t }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (o) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", o, "variant_1"));
    }, 1e3);
  };
  class u {
    constructor() {
      this.init();
    }
    init() {
      this.changeZipCodeCopy();
    }
    changeZipCodeCopy() {
      const t = document.querySelector("#estimate-zip"), e = t == null ? void 0 : t.querySelector("h5 strong");
      e && (e.textContent = 'Click the "Next" button to check for incentives in your area');
    }
  }
  const d = "https://api.sunvalue.com/api/geo", h = "https://api.sunvalue.com/api/address?zip=";
  async function r(o, t = "GET", e = null, n) {
    try {
      const i = {
        method: t,
        headers: {
          "Content-Type": "application/json"
        },
        signal: n
      };
      e && (i.body = JSON.stringify(e));
      const a = await fetch(o, i);
      if (!a.ok)
        throw new Error(`HTTP error! status: ${a.status}`);
      return await a.json();
    } catch (i) {
      throw console.error("Fetch error:", i), i;
    }
  }
  const f = async () => await r(d), y = async (o, t) => await r(h + o, "GET", null, t), C = "", c = "saved-zip-code";
  class v {
    constructor() {
      this.abortController = null, this.init();
    }
    init() {
      this.autofillZip(), this.zipCodeHandler(), this.initStyles();
    }
    async autofillZip() {
      const t = localStorage.getItem(c), e = await f();
      e.postal ? s("exp_zipcode_is_autofilled", e.postal, "input", "Step zipcode") : s("exp_zipcode_is_not_autofilled", "No zipcode", "input", "Step zipcode");
      const n = document.querySelector("#zip");
      if (t && n) {
        n.value = t;
        return;
      }
      n && e.postal && (n.value = e.postal);
    }
    zipCodeHandler() {
      const t = document.querySelector("#zip");
      if (!t)
        return;
      let e;
      this.abortController && this.abortController.abort(), this.abortController = new AbortController();
      const n = this.abortController.signal;
      t.addEventListener("input", async () => {
        const i = t.value;
        clearTimeout(e), e = setTimeout(async () => {
          if (i.length !== 5)
            return;
          const { zip: a } = await y(Number(i), n);
          a && localStorage.setItem(c, a);
        }, 500);
      }), t.addEventListener("change", () => {
        s("exp_zipcode_input", "Input", "input", "Step zipcode");
      });
    }
    initStyles() {
      const t = document.createElement("style");
      t.innerHTML = C, document.head.appendChild(t);
    }
  }
  l({ name: "ZIP code autofill", dev: "OS" }), p("exp_zipcode");
  class w {
    constructor() {
      console.log("LaunchExperiment"), this.init();
    }
    init() {
      location.pathname.includes("save") && (new v(), new u());
    }
  }
  new w();
})();
