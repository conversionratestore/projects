(function() {
  "use strict";
  const o = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function c(t) {
    return new Promise((e) => {
      if (document.querySelector(t))
        return e(document.querySelector(t));
      const n = new MutationObserver(() => {
        document.querySelector(t) && (e(document.querySelector(t)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const i = `paypal-pay-in-three-message.icmsHiddenComponent > div {
  display: block !important;
}`;
  o({ name: "Paypal badge", dev: "OS" });
  class r {
    constructor() {
      console.log("Launching experiment..."), this.init();
    }
    init() {
      this.loadPaypalScript(), this.initStyles();
    }
    async loadPaypalScript() {
      const e = await c("paypal-pay-in-three-message");
      if (!e)
        return;
      e.classList.remove("icmsHiddenComponent");
      const n = e.querySelector("div[data-pp=id]");
      n && n.setAttribute("data-pp-id", "4");
      const a = document.createElement("script");
      a.src = "https://www.paypal.com/sdk/js?client-id=AaZlrvE0hFLH-X2KV8UzAollYEfKCnbyF0odBirm7WFXRaIoFVr1vgcO-Zqa7XmDMVqATCiOZ-0_3U9B&currency=GBP&components=messages", a.async = !0, a.setAttribute("data-uid-auto", "uid_htvnzvlrrfuuucyisurfdvxneghtll"), a.onload = () => {
        console.log("Paypal script loaded");
      };
    }
    initStyles() {
      const e = document.createElement("style");
      e.innerHTML = i, document.head.appendChild(e);
    }
  }
  new r();
})();
