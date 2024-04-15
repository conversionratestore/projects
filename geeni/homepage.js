(function() {
    "use strict";
    const u = (t, c, e, i = "") => {
      window.dataLayer = window.dataLayer || [], window.dataLayer.push({
        event: "event-to-ga4",
        event_name: t,
        event_desc: c,
        event_type: e,
        event_loc: i
      }), console.log(`Event: ${t} | ${c} | ${e} | ${i}`);
    }, y = ({ name: t, dev: c }) => {
      console.log(
        `%c EXP: ${t} (DEV: ${c})`,
        "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
      );
    }, h = async (t) => {
      const c = (e) => new Promise((i, o) => {
        const r = e.split(".").pop();
        if (r === "js") {
          if (Array.from(document.scripts).map((s) => s.src.toLowerCase()).includes(e.toLowerCase()))
            return console.log(`Script ${e} allready downloaded!`), i("");
          const l = document.createElement("script");
          l.src = e, l.onload = i, l.onerror = o, document.head.appendChild(l);
        } else if (r === "css") {
          if (Array.from(document.styleSheets).map((s) => {
            var d;
            return (d = s.href) == null ? void 0 : d.toLowerCase();
          }).includes(e.toLowerCase()))
            return console.log(`Style ${e} allready downloaded!`), i("");
          const l = document.createElement("link");
          l.rel = "stylesheet", l.href = e, l.onload = i, l.onerror = o, document.head.appendChild(l);
        }
      });
      for (const e of t)
        await c(e), console.log(`Loaded librari ${e}`);
      console.log("All libraries loaded!");
    }, b = (t) => {
      let c = setInterval(function() {
        typeof window.clarity == "function" && (clearInterval(c), window.clarity("set", t, "variant_1"));
      }, 1e3);
    }, m = (t, c, e, i, o = 1e3, r = 0.5) => {
      let a, l;
      if (a = new IntersectionObserver(
        function(s) {
          s[0].isIntersecting === !0 ? l = setTimeout(() => {
            u(
              c,
              s[0].target.dataset.visible || i || "",
              "view",
              e
            ), a.disconnect();
          }, o) : (console.log("Element is not fully visible"), clearTimeout(l));
        },
        { threshold: [r] }
      ), typeof t == "string") {
        const s = document.querySelector(t);
        s && a.observe(s);
      } else
        a.observe(t);
    }, p = (t) => new Promise((c) => {
      const e = document.querySelector(t);
      if (e)
        return c(e);
      const i = new MutationObserver(() => {
        const o = document.querySelector(t);
        o && (c(o), i.disconnect());
      });
      i.observe(document.documentElement, {
        childList: !0,
        subtree: !0
      });
    }), n = "https://conversionratestore.github.io/projects/geeni/img/home-app-web", g = window.innerWidth < 768 ? "mobile" : "desktop", $ = (
      /*html*/
      `
    <div class="additional-functional">
      <div data-img-func="accessibility" >
        <img src="${n}/accessible.svg" alt="Open accessibility features">
      </div>
      <div data-img-func="sale" class="hidden-el">
        <img src="${n}/sale.svg" alt="Open sale proposition">
      </div>
      <div data-img-func="chat">
        <img src="${n}/chat.svg" alt="Open suppport chat">
        <div><p></p></div>
      </div>
    </div>
  
    <div class="free-shipping">
      <img src="${n}/delivery.svg" alt="shipping">
      <p><span class="fw-700">FREE</span> Shipping on orders over <span class="fw-700">$69</span></p>
    </div>
  
    <section class="shop-all">
      <div class="container">
        <div class="shop-all__heading">
          <h2 class="heading-2">Shop All Category</h2>
          <a href="/collections/all" class="shop-all__view">
            View all
            <img src="${n}/arrow-r.svg" alt="">
          </a>
        </div>
        <div class="menu-items">
          <a href="/collections/smart-security-cameras">
            <img src="${n}/cameras.jpg" alt="Cameras">
            <p>Cameras</p>
          </a>
          <a href="/collections/smart-appliances">
            <img src="${n}/lifestyle.jpg" alt="Lifestyle">
            <p>Lifestyle</p>
          </a>
          <a href="/collections/lighting">
            <img src="${n}/lighting.jpg" alt="Lighting">
            <p>Lighting</p>
          </a>
          <a href="/collections/power">
            <img src="${n}/power.jpg" alt="Power">
            <p>Power</p>
          </a>
        </div>
      </div>
    </section>
  
    <div class="warranty-sale">
      <div class="container">
        <div class="warranty-sale__container">
          <div>
            <img src="${n}/check.svg" alt="">
            <div>
              <p><span class="fw-700">Direct from manufacturer</span></p>
              <p><span class="fw-700">365</span>-days warranty on all products</p>
            </div>
          </div>
          <div>
            <div class="warranty-sale__buy">
              <img src="${n}/bonus.svg" alt="">
              <p><span class="fw-700">Buy More, Save More</span></p>
            </div>
            <div class="saves-comparison">
              <div>
                <div>
                  <span>SAVE</span>
                  <span>10% OFF</span>
                </div>
                <div class="line"></div>
                <div>
                  <span>spend</span>
                  <span>$99</span>
                </div>
              </div>
  
              <div>
                <div>
                  <span>SAVE</span>
                  <span>15% OFF</span>
                </div>
                <div class="line"></div>
                <div>
                  <span>spend</span>
                  <span>$149</span>
                </div>
              </div>
  
              <div>
                <div>
                  <span>SAVE</span>
                  <span>20% OFF</span>
                </div>
                <div class="line"></div>
                <div>
                  <span>spend</span>
                  <span>$199</span>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <section class="crs-products" data-products-type="hot-deals">
      <div class="container">
        <h2 class="heading-2">Hot Deals</h2>
        <div class="products-wrapper"></div>
        <a class="crs-btn" href="/collections/sale-auto">SHOP ALL Deals</a>
      </div>
    </section>
    
    <section class="crs-products" data-products-type="popular-products">
      <div class="container">
        <h2 class="heading-2">Popular Products</h2>
        <div class="products-wrapper"></div>
      </div>
    </section>
  
    <section class="new-arrivals">
      <div class="container">
        <div class="new-arrivals__content">
          <h2 class="heading-2">New Arrivals</h2>
  
        </div>
        
      </div>
    </section>
  
    <section class="many-devices">
      <div class="container">
        <div class="many-devices__split">
          <img src="${n}/house-1.jpg" alt="">
          <img src="${n}/house-2.jpg" alt="">
        </div>
        <div class="many-devices__mobiles">
          <img src="${n}/many-devices.svg" alt="">
        </div>
  
        <div class="index-1">
          <h2 class="heading-2">Many Devices, One App</h2>
          <p>Cameras, bulbs, plugs, and more</p>
        </div>
        <div class="index-1 many-devices__btns">
          <a class="many-devices__btn" href="https://apps.apple.com/us/app/geeni/id1177386276">Download iOS</a>
          <a class="many-devices__btn" href="https://play.google.com/store/apps/details?id=com.merkuryinnovations.geeni&amp;hl=en_US&amp;gl=US">Download Android</a>
          
        </div>
  
      </div>
    </section>
  
    <section class="trusted-reviews">
      <div class="container">
        <h2 class="heading-2">Trusted by over 5 million people</h2>
        <div class="trusted-reviews__rate">
          <img src="${n}/4-stars.svg" alt="4 stars">
          <p><span class="fw-700">4.4</span> stars rating</p>
        </div>
  
        <div class="trusted-load-more load-more-btn-visible">
            <div class="swiper-slide">
              <img src="${n}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">It was very easy to set up and once it was
              connected to my Wi-Fi, I was able to start
              changing the colors from white to blue to
              red or whatever color you choose. This
              smart bulb is exactly what it says it does and I am happy.</p>
              <p class="trusted-reviews__author">Melanie Edmonson</p>
              <p class="trusted-reviews__loc">Walmart Customer</p>
            </div>
  
            <div class="swiper-slide">
              <img src="${n}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">This is a great product. The night vision is pretty good, and the image quality is great as well. I love being able to set alerts on my app for motion, and check in any time!!</p>
              <p class="trusted-reviews__author">Ninjafoot</p>
              <p class="trusted-reviews__loc">Sacramento, CA</p>
            </div>
  
            <div class="swiper-slide">
              <img src="${n}/5-stars.svg" alt="5 stars">
              <p class="trusted-reviews__desc">Great camera, it was easy to install, very clear and motion detection was work very good with instant notifications in my phone.</p>
              <p class="trusted-reviews__author">Carol71</p>
              <p class="trusted-reviews__loc">Jersey City, NJ</p>
            </div>
  
            <button class="load-more-btn">Load more</button>
  
            <div class="hidden-block">
              <div class="swiper-slide">
                <img src="${n}/4-stars.svg" alt="4 stars">
                <p class="trusted-reviews__desc">I set the camera up to keep my dog from leaving gifts in the hallway. As soon as a motion alert happens, i could hop on the camera and give a stern ‘NO'. Deer in headlights was her reaction. Love this tool in helping my dog potty train.</p>
                <p class="trusted-reviews__author">Jennifer Harden</p>
                <p class="trusted-reviews__loc">Verified customer</p>
              </div>
  
              <div class="swiper-slide">
                <img src="${n}/4-stars.svg" alt="4 stars">
                <p class="trusted-reviews__desc">The picture is perfect. We are thinking about replacing our other cameras with these. Easy to set up. Perfect camera</p>
                <p class="trusted-reviews__author">Dmitri Kristov</p>
                <p class="trusted-reviews__loc">Verified customer</p>
              </div>
  
              <div class="swiper-slide">
                <img src="${n}/5-stars.svg" alt="5 stars">
                <p class="trusted-reviews__desc">These lights are so easy to use with the app and Alexa. They look great also.</p>
                <p class="trusted-reviews__author">Amelia Ngoy</p>
                <p class="trusted-reviews__loc">Verified customer</p>
              </div>
            </div>
        </div>
  
        <div class="swiper">
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <img src="${n}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">It was very easy to set up and once it was
              connected to my Wi-Fi, I was able to start
              changing the colors from white to blue to
              red or whatever color you choose. This
              smart bulb is exactly what it says it does and I am happy.</p>
              <p class="trusted-reviews__author">Melanie Edmonson</p>
              <p class="trusted-reviews__loc">Walmart Customer</p>
            </div>
  
            <div class="swiper-slide">
              <img src="${n}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">This is a great product. The night vision is pretty good, and the image quality is great as well. I love being able to set alerts on my app for motion, and check in any time!!</p>
              <p class="trusted-reviews__author">Ninjafoot</p>
              <p class="trusted-reviews__loc">Sacramento, CA</p>
            </div>
  
            <div class="swiper-slide">
              <img src="${n}/5-stars.svg" alt="5 stars">
              <p class="trusted-reviews__desc">Great camera, it was easy to install, very clear and motion detection was work very good with instant notifications in my phone.</p>
              <p class="trusted-reviews__author">Carol71</p>
              <p class="trusted-reviews__loc">Jersey City, NJ</p>
            </div>
  
            <div class="swiper-slide">
              <img src="${n}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">I set the camera up to keep my dog from leaving gifts in the hallway. As soon as a motion alert happens, i could hop on the camera and give a stern ‘NO'. Deer in headlights was her reaction. Love this tool in helping my dog potty train.</p>
              <p class="trusted-reviews__author">Jennifer Harden</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>
  
            <div class="swiper-slide">
              <img src="${n}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">The picture is perfect. We are thinking about replacing our other cameras with these. Easy to set up. Perfect camera</p>
              <p class="trusted-reviews__author">Dmitri Kristov</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>
  
            <div class="swiper-slide">
              <img src="${n}/5-stars.svg" alt="5 stars">
              <p class="trusted-reviews__desc">These lights are so easy to use with the app and Alexa. They look great also.</p>
              <p class="trusted-reviews__author">Amelia Ngoy</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>
  
          </div>
  
          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev">
            <img src="${n}/arrow-l.svg" alt="arrow left">
          </div>
          <div class="swiper-button-next">
            <img src="${n}/arrow-r.svg" alt="arrow right">
          </div>
        </div>
      </div>
    </section>
    `
    );
    b("exp_home_optim"), y({ name: 'Keenethics: "Introduce content based on JBTD on HP"', dev: "Andrii" }), S(), p("#shopify-section-template--16970486120700__section-marquee").then((t) => t.insertAdjacentHTML("afterend", $)), T(), I(), E(), A(), p("body").then((t) => t == null ? void 0 : t.classList.add("hide-chat-btn")), p('iframe[title="Messaging window"]').then((t) => {
      new MutationObserver((e) => {
        var i, o;
        for (let r of e)
          r.type === "attributes" && r.attributeName === "tabindex" && (console.log("Tabindex changed to:", t.getAttribute("tabindex")), t.getAttribute("tabindex") === "-1" ? (i = document.querySelector("body")) == null || i.classList.add("hide-chat-btn") : (o = document.querySelector("body")) == null || o.classList.remove("hide-chat-btn"));
      }).observe(t, { attributes: !0 });
    }), L(), p(".load-more-btn").then((t) => {
      t.addEventListener("click", () => {
        const c = document.querySelector(".trusted-load-more");
        c && c.classList.remove("load-more-btn-visible");
      });
    }), q(), p("body").then((t) => {
      m(".free-shipping", "exp_home_optim_section_01", "Home Page Free Shipping on Orders Over $69", "Section", 4e3), m(".shop-all .container", "exp_home_optim_section_02", "Home Page Shop by category", "Section"), m(".hero .swiper", "exp_home_optim_section_03", "Home Page Featured products PDP", "Section"), m(".warranty-sale", "exp_home_optim_section_04", "Home Page Benefits", "Section"), t.addEventListener("click", (c) => {
        var i, o, r;
        const e = c.target;
        if (e.closest("button.mobile-menu__button") && u("exp_home_optim_button_01", "Menu", "Button", "Home Page Header"), e.closest(".shop-all__view") && u("exp_home_optim_button_01", "Menu", "Button", "Home Page Header"), e.closest(".menu-items a")) {
          const a = (i = e.closest(".menu-items a")) == null ? void 0 : i.querySelector("p");
          u("exp_home_optim_button_05", `${a == null ? void 0 : a.innerText} - choise category`, "Button", "Home Page Shop by category");
        }
        if (e.closest(".hero .product__btn")) {
          const a = (o = e.closest(".product")) == null ? void 0 : o.querySelector(".product__title");
          u("exp_home_optim_button_06", `${a == null ? void 0 : a.innerText} - Shop now`, "Button", "Home Page Featured products PDP");
        }
        if (e.closest(".hero .product")) {
          const a = (r = e.closest(".hero .product")) == null ? void 0 : r.querySelector(".product__type");
          u("exp_home_optim_button_07", `${a == null ? void 0 : a.innerText} - Click`, "Button", "Home Page Featured products PDP");
        }
      });
    });
    function _(t, c) {
      return fetch(`https://mygeeni.com/products/${t}.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((e) => {
        if (!e.ok)
          throw new Error(`HTTP error! status: ${e.status}`);
        return e.json();
      }).then((e) => {
        var o;
        const i = e.product;
        return {
          title: i.title,
          product_type: i.product_type,
          handle: i.handle,
          price: i.variants[0].price,
          compare_at_price: i.variants[0].compare_at_price,
          image_src: i.image.src,
          description: (o = document.querySelectorAll(".products-list__item__description")[c]) == null ? void 0 : o.innerText
        };
      });
    }
    function S() {
      const t = [], c = [
        "hawk-3-1080p-hd-outdoor-smart-wi-fi-security-camera-white-2-pack",
        "geeni-look-2-pack-1080p-hd-smart-home-surveillance-system-with-night-vision-motion-detection-2-way-audio-remote-access-with-ios-android-app-no-hub-required-black",
        "geeni-lookout-2k-outdoor-auto-follow-camera"
      ];
      document.querySelectorAll(".products-list__container .btn.btn--primary").forEach((r) => {
        const a = r.href;
        a && t.push(a.split("https://mygeeni.com/products/")[1]);
      });
      const e = t.map((r, a) => _(r, a));
      Promise.all(e).then((r) => {
        console.log(r);
        const a = r.length, s = (
          /*html*/
          `
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              ${r.map((d, v) => (
            /*html*/
            `
          <div class="glide__slide new-arrivals-product">
            
            
              <div class="new-arrivals-product__img-wrap">
                <img src="${d.image_src}" alt="${d.title}">
              </div>
              <div class="new-arrivals-product__content">
                <div class="new-arrivals__nav">
                  <div class="swiper-button-prev-mob">
                    <img src="${n}/arrow-l.svg" alt="arrow left">
                  </div>
                  <p class="new-arrivals-product__number">${v + 1}/${a}</p>
                  <div class="swiper-button-next-mob">
                    <img src="${n}/arrow-r.svg" alt="arrow right">
                  </div>
                </div>
                <a class="new-arrivals-product__title" href="/products/${d.handle}">${d.title}</a>
                <div class="new-arrivals-product__price">
                  <span>$${d.price}</span>
                </div>
                <p class="new-arrivals-product__description">${document.querySelectorAll(".products-list__item__description")[v].innerText}</p>
                <a class="crs-btn" href="/products/${d.handle}">Shop now</a>
              </div>
  
            
          </div>`
          )).join("")}
            </ul>
          </div>
  
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <img src="${n}/arrow-l.svg" alt="arrow left">
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <img src="${n}/arrow-r.svg" alt="arrow right">
            </button>
          </div>
        </div>
      `
        );
        p(".new-arrivals .new-arrivals__content").then((d) => d == null ? void 0 : d.insertAdjacentHTML("beforeend", s));
      }).catch((r) => console.error("Error:", r));
      const o = (window._dy_customer_logged_in && window._dy_customer_logged_in.email !== void 0 ? t : c).map((r, a) => _(r, a));
      Promise.all(o).then((r) => {
        console.log(r);
        const l = (
          /*html*/
          `
          <div class="hero">
            <div class="container">
              <!-- Slider main container -->
              <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  ${r.map((s, d) => {
            const v = s.compare_at_price - s.price, k = Math.round(v / s.compare_at_price * 100), f = v > 0 ? `Save ${k}%` : "", P = s.compare_at_price && s.compare_at_price !== s.price ? `$${s.compare_at_price}` : "", x = s.product_type.toLowerCase().includes("camera") ? "Cameras" : s.product_type;
            return (
              /*html*/
              `
            <div class="swiper-slide product">
              <img class="product__img" src="${s.image_src}" alt="${s.title}">
              <div class="product__number">
                <p>${d + 1}/${r.length}</p>
              </div>
              <div class="product__info">
                <p class="product__type">${x}</p>
                <a class="product__title" href="/products/${s.handle}">${s.title}</a>
                <div class="product__price">
                  <span>$${s.price}</span>
                  <span>${P}</span>
                  ${f !== "" ? `<span>${f}</span>` : ""}
                </div>
    
                <a class="product__btn" href="/products/${s.handle}">Shop now</a>
              </div>
            </div>`
            );
          }).join("")}
                </div>
    
                <div class="hero-swiper-nav">
                  <div class="swiper-button-prev">
                    <img src="${n}/arrow-l.svg" alt="arrow left">
                  </div>
                  <div id="slide-number"><p></p></div>
                  <div class="swiper-button-next">
                    <img src="${n}/arrow-r.svg" alt="arrow right">
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        `
        );
        g === "desktop" ? p(".free-shipping").then((s) => s == null ? void 0 : s.insertAdjacentHTML("afterend", l)) : p(".shop-all").then((s) => s == null ? void 0 : s.insertAdjacentHTML("afterend", l));
      }).catch((r) => console.error("Error:", r));
    }
    function T() {
      function t(c, e, i) {
        const o = document.createElement("link");
        o.href = c, o.rel = e, i && (o.crossOrigin = i), document.head.appendChild(o);
      }
      t("https://fonts.googleapis.com", "preconnect"), t("https://fonts.gstatic.com", "preconnect", "true"), t("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap", "stylesheet");
    }
    function I() {
      const t = setInterval(() => {
        const c = document.getElementById("INDmenu-btn"), e = document.getElementById("launcher");
        c && e && (clearInterval(t), p(".additional-functional").then((i) => i.addEventListener("click", (o) => {
          var r;
          o.target, o.target.closest('[data-img-func="accessibility"]') ? c.click() : o.target.closest('[data-img-func="sale"]') ? (r = document.querySelector(".kl-teaser-T4UsqC")) == null || r.click() : o.target.closest('[data-img-func="chat"]') && (e.contentDocument || e.contentWindow.document).querySelector('[data-garden-id="buttons.icon_button"]').click();
        })), setInterval(() => {
          var i, o, r;
          if (document.querySelector('[data-testid="POPUP"]') ? (i = document.querySelector('.additional-functional [data-img-func="sale"]')) == null || i.classList.remove("hidden-el") : document.querySelector(".kl-teaser-T4UsqC") ? (r = document.querySelector('.additional-functional [data-img-func="sale"]')) == null || r.classList.remove("hidden-el") : (o = document.querySelector('.additional-functional [data-img-func="sale"]')) == null || o.classList.add("hidden-el"), document.querySelector('iframe[title="Number of unread messages"]')) {
            const a = document.querySelector('iframe[title="Number of unread messages"]'), s = (a.contentDocument || a.contentWindow.document).querySelector(".gwgkTo");
            document.querySelector('[data-img-func="chat"] p') && (s != null && s.textContent) && (document.querySelector('[data-img-func="chat"]').classList.add("display-msg-number"), document.querySelector('[data-img-func="chat"] p').innerText = s.textContent, console.log(s.textContent));
          } else
            document.querySelector(".display-msg-number") && document.querySelector(".display-msg-number").classList.remove("display-msg-number");
        }, 1e3));
      }, 100);
    }
    function E() {
      h(["https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js", "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"]);
      const t = setInterval(() => {
        typeof Swiper < "u" && (clearInterval(t), p(".hero .swiper").then((c) => {
          const e = c.clientWidth, o = e * 1.07 - e + 16;
          new Swiper(".hero .swiper", {
            navigation: {
              nextEl: ".hero .swiper-button-next",
              prevEl: ".hero .swiper-button-prev"
            },
            slidesPerView: 1.13,
            spaceBetween: 8,
            slidesOffsetAfter: o,
            // adjust this value as needed
            breakpoints: {
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesOffsetAfter: 0
              }
            },
            on: {
              init: function() {
                document.querySelector("#slide-number p").innerText = `${this.realIndex + 1}/${this.slides.length}`;
              },
              slideChange: function() {
                document.querySelector("#slide-number p").innerText = `${this.realIndex + 1}/${this.slides.length}`;
              }
            }
          });
        }), p(".trusted-reviews .swiper").then((c) => {
          new Swiper(".trusted-reviews .swiper", {
            slidesPerView: 3.8,
            spaceBetween: 8,
            loop: !1,
            navigation: {
              nextEl: ".trusted-reviews .swiper-button-next",
              prevEl: ".trusted-reviews .swiper-button-prev"
            },
            on: {
              reachEnd: function() {
                var e;
                (e = document.querySelector(".trusted-reviews .swiper")) == null || e.classList.add("reached-end");
              }
            }
          });
        }));
      }, 100);
    }
    function A() {
      g === "mobile" && p('.mobile-menu [aria-controls="nav-drawer"]').then((t) => {
        document.querySelector("h1.logo").insertAdjacentElement("beforebegin", t);
      });
    }
    function w(t, c) {
      const e = `[data-products-type="${t}"] .products-wrapper`;
      p(e).then((i) => {
        const o = document.querySelectorAll(c);
        for (let a = 0; a < 4; a++) {
          const l = o[a];
          i.appendChild(l);
        }
        const r = setInterval(() => {
          const a = document.querySelectorAll(`${e} .product-grid-item__title`);
          a[3] && (clearInterval(r), a.forEach((l, s) => {
            document.querySelectorAll(`${e} .product-grid-item__inner`)[s].insertAdjacentHTML("beforeend", `<a class="product__shop-now" href="${l.href}">Shop now</a>`);
          }));
        }, 100);
      });
    }
    function L() {
      const t = setInterval(() => {
        document.querySelector("#shopify-section-template--16970486120700__c779e8b3-bda2-49eb-b1f7-031ddd03321b .product-grid-item__inner") && document.querySelector("#shopify-section-template--16970486120700__section_collection_CbegNw .product-grid-item__inner") && (clearInterval(t), w("popular-products", "#shopify-section-template--16970486120700__c779e8b3-bda2-49eb-b1f7-031ddd03321b .product-grid-item__inner"), w("hot-deals", "#shopify-section-template--16970486120700__section_collection_CbegNw .product-grid-item__inner"));
      }, 100);
    }
    function q() {
      h(["https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/css/glide.core.min.css", "https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/glide.min.js"]).then(() => {
        const t = setInterval(() => {
          if (typeof Glide < "u" && document.querySelector(".glide")) {
            clearInterval(t), new Glide(".glide", {
              type: "carousel",
              startAt: 0,
              perView: 2,
              focusAt: "center",
              keyboard: !1,
              bound: !0,
              rewind: !0,
              controls: {
                prev: ".glide__arrow--left",
                next: ".glide__arrow--right"
              },
              breakpoints: {
                768: {
                  perView: 1.6
                }
              }
            }).mount();
            const c = setInterval(() => {
              const e = document.querySelector(".glide__arrow--left"), i = document.querySelector(".glide__arrow--right"), o = document.querySelector(".glide");
              e && i && (console.log("Arrows are ready"), clearInterval(c), o.addEventListener("click", (r) => {
                console.log(r.target), r.target.closest(".swiper-button-prev-mob") && e.dispatchEvent(new Event("click")), r.target.closest(".swiper-button-next-mob") && i.dispatchEvent(new Event("click"));
              }));
            }, 100);
          }
        }, 100);
      });
    }
  })();
  //# sourceMappingURL=index.js.map
  