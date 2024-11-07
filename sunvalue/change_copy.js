(function() {
  "use strict";
  const a = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, s = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, c = `#estimate-phone h2.title {
  margin-bottom: 40px;
}

@media (max-width: 575px) {
  #estimate-phone h2.title {
    margin-bottom: 15px;
  }
}
@media (max-width: 1600px) {
  #estimate-phone h2.title {
    margin-bottom: 20px;
  }
}`;
  a({ name: "Change copy on email step", dev: "OS" }), s("change_copy");
  const l = "We take privacy seriously. No spam!";
  class r {
    constructor() {
      this.init();
    }
    init() {
      location.pathname.includes("save") && (this.initStyles(), this.changeCopyOnEmailStep(), this.changeCopyOnPhoneStep());
    }
    changeCopyOnEmailStep() {
      const e = document.querySelector("#estimate-email");
      if (!e)
        return;
      e.querySelectorAll(".sub-title:not(.banner)").forEach((n) => {
        var t;
        n && ((t = n.textContent) != null && t.includes("participation details")) && (n.innerHTML = n.innerHTML = l);
      });
    }
    changeCopyOnPhoneStep() {
      const e = document.querySelector("#estimate-phone");
      if (!e)
        return;
      e.querySelectorAll(".sub-title:not(.banner)").forEach((t) => {
        var o;
        t && ((o = t.textContent) != null && o.toLocaleLowerCase().includes("we hate bugs")) && t.remove();
      }), e.querySelectorAll(".title").forEach((t) => {
        var o;
        t && ((o = t.textContent) != null && o.toLocaleLowerCase().includes("best number")) && t.classList.remove("mb-5");
      });
    }
    initStyles() {
      const e = document.createElement("style");
      e.innerHTML = c, document.head.appendChild(e);
    }
  }
  new r();
})();
