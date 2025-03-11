var Z = function() {
  "use strict";
  const l = (i, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), console.log(`Event: ${i} | ${e} | ${t} | ${n}`);
  }, E = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, A = (i, e, t, n) => {
    let s = [];
    s = document.querySelectorAll(i);
    let o = new IntersectionObserver(
      (d) => {
        d.forEach((r) => {
          r.isIntersecting && (o.unobserve(r.target), setTimeout(function() {
            a.observe(r.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.2
      }
    ), a = new IntersectionObserver((d) => {
      d.forEach((r) => {
        r.isIntersecting ? (l(e, t, "view", n), o.unobserve(r.target)) : o.observe(r.target), a.unobserve(r.target);
      });
    });
    s.forEach((d) => {
      o.observe(d);
    });
  }, I = "https://api.sunvalue.com/api/address?zip=", C = "https://api.sunvalue.com/api/geo";
  async function h(i, e = "GET", t = null) {
    try {
      const n = {
        method: e,
        headers: {
          "Content-Type": "application/json"
        }
      };
      t && (n.body = JSON.stringify(t));
      const s = await fetch(i, n);
      if (!s.ok)
        throw new Error(`HTTP error! status: ${s.status}`);
      return await s.json();
    } catch (n) {
      throw console.error("Fetch error:", n), n;
    }
  }
  const _ = async (i) => await h(I + i), L = async () => await h(C), z = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="22"
  fill="none"
>
  <path
    fill="#4A4A4A"
    stroke="#4A4A4A"
    stroke-width=".2"
    d="M10.083 1c-4.009 0-7.27 3.262-7.27 7.27 0 1.248.407 2.633 1.015 4.008.61 1.378 1.423 2.753 2.244 3.982a43.738 43.738 0 0 0 3.457 4.493c.296.33.813.33 1.11 0a43.72 43.72 0 0 0 3.456-4.493c.82-1.229 1.635-2.604 2.244-3.982.608-1.375 1.015-2.76 1.015-4.007 0-4.01-3.261-7.27-7.27-7.27Zm3.664 13.018c-1.168 1.953-2.593 3.813-3.664 5.092-1.07-1.279-2.495-3.138-3.663-5.092-1.2-2.006-2.116-4.093-2.116-5.747a5.786 5.786 0 0 1 5.78-5.78 5.786 5.786 0 0 1 5.779 5.78c0 1.654-.917 3.741-2.116 5.746Z"
  />
  <path
    fill="#4A4A4A"
    stroke="#4A4A4A"
    stroke-width=".2"
    d="M10.084 4.563A3.715 3.715 0 0 0 6.37 8.271a3.715 3.715 0 0 0 7.427 0 3.715 3.715 0 0 0-3.713-3.708Zm0 5.924a2.221 2.221 0 0 1-2.22-2.216 2.221 2.221 0 0 1 4.44 0 2.221 2.221 0 0 1-2.22 2.216Z"
  />
</svg>`
  ), k = (i) => {
    Array.from(document.scripts).filter((t) => t.src.includes(i)).forEach((t) => {
      var n;
      return (n = t.parentNode) == null ? void 0 : n.removeChild(t);
    });
  }, B = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, M = (i) => new Promise((e, t) => {
    if (i.split(".").pop(), Array.from(document.scripts).map((o) => o.src.toLowerCase()).includes(i.toLowerCase()))
      return console.log(`Script ${i} already downloaded!`), e("");
    const s = document.createElement("script");
    s.src = i, s.onload = e, s.onerror = t, document.head.appendChild(s);
  }), y = `.os-note {
  margin-inline: auto;
  width: max-content;
  max-width: 100%;

  padding: 12px 16px;
  border-radius: 20px;
  border: 1px solid #538fba;
  background: #628fac;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.os-note span {
  color: #98f465;
}

.swiper-wrapper {
  height: auto !important;
}

.os-title {
  margin-top: 32px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px; /* 127.273% */
}

.estimate-custom-address .form-list {
  display: grid;
  gap: 16px;
}
.estimate-custom-address .form-list li {
  display: block;
  width: 100%;
  margin: 0;
}

.estimate-custom-address .os-description {
  margin-top: 32px !important;
  margin-inline: auto;
  max-width: 500px;
  color: #4a4a4a;
  text-align: center;
  font-family: 'Noto Sans SC';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
}

.estimate-custom-address .os-description span {
  color: #00c105;
}
.estimate-custom-address .form-list li button {
  width: 100%;
  border: none;
}

.os-location-wrap {
  position: relative;
}

.estimate-custom-address .os-location-wrap input {
  padding-right: 135px;
  border-radius: 100px;
  border: 1px solid #83be63;
  background: #fff;
  box-shadow: 0px 0px 0px 3px #e2f3d9, 0px 2px 12px 0px rgba(0, 0, 0, 0.06);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
}

.os-current-location {
  position: absolute;
  display: flex;
  align-items: center;
  width: 105px;
  gap: 5px;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  z-index: 10;
  overflow: hidden;
}

.os-current-location span {
  display: flex;
}

.os-current-location span.text {
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .os-note {
    font-size: 16px;
    padding: 10px 12px;
  }

  .os-title {
    margin-top: 44px;
    color: #4a4a4a;
    font-size: 27px;
    line-height: 32px;
  }

  .estimate-custom-address .os-location-wrap input {
    border-radius: 5px;
    padding: 16px;
    padding-right: 134px;
  }

  .estimate-custom-address .os-location-wrap input {
    text-overflow: ellipsis;
  }

  .os-current-location {
    right: 16px;
  }

  .estimate-custom-address .os-description {
    margin-top: 16px !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
}
`, v = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtjbzGiQga-NP-KNnEuJmBWuEdNlZynK0&libraries=places&language=en", p = "entered_address", u = "entered_zipcode", x = "Ensure the address is accurate, including the street name and street number.";
  class G {
    constructor({ container: e, position: t }) {
      this.position = t || "beforeend", this.container = e, this.init();
    }
    init() {
      this.render(), this.handle(), this.addStyles(), this.getGeolocation();
    }
    async getGeolocation() {
      const e = document.getElementById("current-location");
      if (!e) return;
      const t = await L(), n = t.postal;
      t.regionName && (e.innerHTML = /* HTML */
      `<span>${z}</span
        ><span class="text" data-zipcode="${n}"
          >${t.regionName}</span
        >`);
    }
    render() {
      var t;
      const e = (
        /* HTML */
        `<div
      class="v-center estimate-custom-address os-hide"
      id="estimate-custom-address"
    >
      <div class="container text-center">
        <div class="os-note">
          ✅ <span>6</span> Government Incentives Available in
          <span>New York</span>
        </div>
        <div class="os-title">
          Check if you are eligible <br />
          by entering your Location
        </div>

        <ul class="form-list">
          <li>
            <div class="os-location-wrap">
              <input
                class="text-field location pac-target-input active"
                type="text"
                id="os-googleautoaddress"
                autocomplete="off"
                placeholder="eg. Main Street 22, 07008"
                tabindex="0"
                data-gtm-form-interact-field-id="0"
              />
              <div class="os-current-location" id="current-location"></div>
            </div>
            <span class="error-msg" id="os-address-error"></span>
          </li>

          <li>
            <button id="os-addresssaving" class="btn default btn-with-loader">
              Check eligibility
            </button>
          </li>
        </ul>
        <div class="os-description">
          *NY homeowner may save up to <span>$13K</span> on a solar system with
          government incentives
        </div>
      </div>
    </div>`
      );
      !this.container || document.querySelector("#estimate-custom-address") || ((t = this.container) == null || t.insertAdjacentHTML(this.position, e), this.initAutocomplete(), document.head.insertAdjacentHTML("beforeend", `<style>${y}</style>`), A(
        "#estimate-custom-address",
        "exp_address_view",
        "View Screen",
        "Step 1 - Check if you are eligible by entering your Location"
      ));
    }
    handle() {
      const e = document.getElementById(
        "os-googleautoaddress"
      );
      e && (e.addEventListener("input", () => {
        const n = document.getElementById("os-address-error");
        n && (n.textContent = "");
      }), e.addEventListener("change", () => {
        l(
          "exp_address_input",
          "Input",
          "input",
          "Step 1 - Check if you are eligible by entering your Location"
        );
      }));
      const t = document.querySelector("#os-addresssaving");
      t && (t.addEventListener("click", (n) => {
        var g;
        const s = n.target, o = document.getElementById(
          "os-googleautoaddress"
        ), a = document.getElementById(
          "estimate-custom-address"
        ), d = document.getElementById(
          "zip"
        ), r = document.getElementById("calculateYourSavings"), f = (s == null ? void 0 : s.dataset.disabled) === "true";
        if (l(
          "exp_address_continue",
          "Check eligibility",
          "click",
          "Step 1 - Check if you are eligible by entering your Location"
        ), !o) return;
        const m = o.value;
        if (m && !f) {
          a.classList.add("os-hide");
          const c = sessionStorage.getItem(u) || ((g = document.querySelector("[data-zipcode]")) == null ? void 0 : g.textContent), N = sessionStorage.getItem(p);
          if (!c) {
            const S = document.getElementById("os-address-error");
            S && (S.textContent = x);
            return;
          }
          this.validateZipCode(+c), this.validateAddress(N), d.value = c, r == null || r.click(), B(), l(
            "exp_address_success",
            "Validation Success",
            "success",
            "Step 1 - Check if you are eligible by entering your Location"
          ), k(v);
        } else if (!m) {
          const c = document.getElementById("os-address-error");
          c && (c.textContent = "Please enter your address");
        }
      }), e.addEventListener("change", async (n) => {
        if (sessionStorage.removeItem(p), sessionStorage.removeItem(u), !e.dataset.selectedFromAutocomplete && e.value.trim())
          try {
            const s = await this.processManuallyEnteredAddress(
              e.value
            ), o = s.zipCode, a = s.formattedAddress;
            this.validateZipCode(o), this.validateAddress(a), sessionStorage.setItem(p, a), sessionStorage.setItem(u, o);
          } catch (s) {
            console.error("Error processing manually entered address:", s);
          }
      }));
    }
    setContinueButtonState(e) {
      const t = document.getElementById(
        "os-addresssaving"
      );
      t && (t.dataset.disabled = String(!e));
    }
    initAutocomplete() {
      window.googleMapsScriptLoaded ? this.initializeAutocomplete() : M(v).then(() => {
        window.googleMapsScriptLoaded = !0, this.initializeAutocomplete();
      }).catch(
        (e) => console.error("Error loading Google Maps Places API:", e)
      );
    }
    async processManuallyEnteredAddress(e) {
      const t = new google.maps.Geocoder();
      return new Promise((n, s) => {
        t.geocode({ address: e }, (o, a) => {
          var d;
          if (a === google.maps.GeocoderStatus.OK && (o != null && o[0])) {
            const r = o[0].address_components, f = o[0].formatted_address, m = (d = r.find(
              (g) => g.types.includes("postal_code")
            )) == null ? void 0 : d.long_name;
            n({ addressComponents: r, formattedAddress: f, zipCode: m });
          } else
            s("Geocoding failed due to: " + a);
        });
      });
    }
    initializeAutocomplete() {
      const e = document.getElementById(
        "os-googleautoaddress"
      );
      if (!e) return;
      const t = new google.maps.places.Autocomplete(e, {
        types: ["geocode"],
        componentRestrictions: { country: "US" }
      });
      t.addListener("place_changed", () => {
        const n = t.getPlace(), s = n.address_components, o = n.formatted_address, a = s.find(
          (r) => r.types.includes("postal_code")
        ), d = a == null ? void 0 : a.long_name;
        d || this.setContinueButtonState(!1), this.validateZipCode(d), this.validateAddress(o), sessionStorage.setItem(p, o), sessionStorage.setItem(u, d);
      });
    }
    async validateZipCode(e) {
      const t = document.getElementById("os-address-error"), n = await _(e);
      if (!(n != null && n.city)) {
        t && (t.textContent = x), this.setContinueButtonState(!1);
        return;
      }
    }
    validateAddress(e) {
      const t = document.getElementById(
        "autoaddress"
      ), n = document.getElementById("os-address-error");
      !e || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/.test(e) ? (this.setContinueButtonState(!1), n && this.setContinueButtonState(!1)) : (this.setContinueButtonState(!0), t && (t.value = e), n && (n.textContent = ""));
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = y, document.head.appendChild(e);
    }
  }
  const O = `#estimate-zip, #estimate-map {
  display: none;
}


[data-current-slide="3"] :is( #slider-block, #next-block) {
  display: none;
}`;
  class T {
    constructor() {
      this.init();
    }
    init() {
      this.addNewStyles(), this.addStyles(), this.observeSlides();
    }
    addNewStyles() {
      const e = document.querySelectorAll(".swiper-slide");
      new G({
        container: e[0],
        position: "beforeend"
      });
    }
    observeSlides() {
      const e = document.querySelector(".swiper-container"), t = e == null ? void 0 : e.swiper, n = document.getElementById("solarForm"), s = document.querySelector(
        "#slider-block .nextSlide"
      ), o = document.querySelector(
        "#slider-block .prevSlide"
      );
      !t || !n || (n.dataset.currentSlide = "0", t == null || t.on("transitionEnd", () => {
        const a = t.realIndex;
        if (n.dataset.currentSlide = a.toString(), a === 3) {
          if (n.dataset.addressEntered === "true") {
            o == null || o.click(), n.dataset.addressEntered = "false";
            return;
          }
          s == null || s.click(), n.dataset.addressEntered = "true";
        }
      }));
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = O, document.head.appendChild(e);
    }
  }
  b("address_zip"), E({
    dev: "OS",
    name: "Address + Zip merge V2"
  });
  class w {
    constructor() {
      this.init();
    }
    init() {
      new T();
    }
  }
  return new w(), {
    LaunchExperiment: w
  };
}();
