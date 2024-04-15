(function() {
  "use strict";
  const e = "https://conversionratestore.github.io/projects/geeni/img/home-app-web", h = window.innerWidth < 768 ? "mobile" : "desktop", m = (
    /*html*/
    `
  <div class="additional-functional">
    <div data-img-func="accessibility" >
      <img src="${e}/accessible.svg" alt="Open accessibility features">
    </div>
    <div data-img-func="sale" class="hidden-el">
      <img src="${e}/sale.svg" alt="Open sale proposition">
    </div>
    <div data-img-func="chat">
      <img src="${e}/chat.svg" alt="Open suppport chat">
      <div><p></p></div>
    </div>
  </div>

  <div class="free-shipping">
    <img src="${e}/delivery.svg" alt="shipping">
    <p><span class="fw-700">FREE</span> Shipping on orders over <span class="fw-700">$69</span></p>
  </div>

  <section class="shop-all">
    <div class="container">
      <div class="shop-all__heading">
        <h2 class="heading-2">Shop All Category</h2>
        <a href="/collections/all" class="shop-all__view">
          View all
          <img src="${e}/arrow-r.svg" alt="">
        </a>
      </div>
      <div class="menu-items">
        <a href="/collections/smart-security-cameras">
          <img src="${e}/cameras.jpg" alt="Cameras">
          <p>Cameras</p>
        </a>
        <a href="/collections/smart-appliances">
          <img src="${e}/lifestyle.jpg" alt="Lifestyle">
          <p>Lifestyle</p>
        </a>
        <a href="/collections/lighting">
          <img src="${e}/lighting.jpg" alt="Lighting">
          <p>Lighting</p>
        </a>
        <a href="/collections/power">
          <img src="${e}/power.jpg" alt="Power">
          <p>Power</p>
        </a>
      </div>
    </div>
  </section>

  <div class="warranty-sale">
    <div class="container">
      <div class="warranty-sale__container">
        <div>
          <img src="${e}/check.svg" alt="">
          <div>
            <p><span class="fw-700">Direct from manufacturer</span></p>
            <p><span class="fw-700">365</span>-days warranty on all products</p>
          </div>
        </div>
        <div>
          <div class="warranty-sale__buy">
            <img src="${e}/bonus.svg" alt="">
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
        <img src="${e}/house-1.jpg" alt="">
        <img src="${e}/house-2.jpg" alt="">
      </div>
      <div class="many-devices__mobiles">
        <img src="${e}/many-devices.svg" alt="">
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
        <img src="${e}/4-stars.svg" alt="4 stars">
        <p><span class="fw-700">4.4</span> stars rating</p>
      </div>

      <div class="trusted-load-more load-more-btn-visible">
          <div class="swiper-slide">
            <img src="${e}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">It was very easy to set up and once it was
            connected to my Wi-Fi, I was able to start
            changing the colors from white to blue to
            red or whatever color you choose. This
            smart bulb is exactly what it says it does and I am happy.</p>
            <p class="trusted-reviews__author">Melanie Edmonson</p>
            <p class="trusted-reviews__loc">Walmart Customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${e}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">This is a great product. The night vision is pretty good, and the image quality is great as well. I love being able to set alerts on my app for motion, and check in any time!!</p>
            <p class="trusted-reviews__author">Ninjafoot</p>
            <p class="trusted-reviews__loc">Sacramento, CA</p>
          </div>

          <div class="swiper-slide">
            <img src="${e}/5-stars.svg" alt="5 stars">
            <p class="trusted-reviews__desc">Great camera, it was easy to install, very clear and motion detection was work very good with instant notifications in my phone.</p>
            <p class="trusted-reviews__author">Carol71</p>
            <p class="trusted-reviews__loc">Jersey City, NJ</p>
          </div>

          <button class="load-more-btn">Load more</button>

          <div class="hidden-block">
            <div class="swiper-slide">
              <img src="${e}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">I set the camera up to keep my dog from leaving gifts in the hallway. As soon as a motion alert happens, i could hop on the camera and give a stern ‘NO'. Deer in headlights was her reaction. Love this tool in helping my dog potty train.</p>
              <p class="trusted-reviews__author">Jennifer Harden</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>

            <div class="swiper-slide">
              <img src="${e}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">The picture is perfect. We are thinking about replacing our other cameras with these. Easy to set up. Perfect camera</p>
              <p class="trusted-reviews__author">Dmitri Kristov</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>

            <div class="swiper-slide">
              <img src="${e}/5-stars.svg" alt="5 stars">
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
            <img src="${e}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">It was very easy to set up and once it was
            connected to my Wi-Fi, I was able to start
            changing the colors from white to blue to
            red or whatever color you choose. This
            smart bulb is exactly what it says it does and I am happy.</p>
            <p class="trusted-reviews__author">Melanie Edmonson</p>
            <p class="trusted-reviews__loc">Walmart Customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${e}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">This is a great product. The night vision is pretty good, and the image quality is great as well. I love being able to set alerts on my app for motion, and check in any time!!</p>
            <p class="trusted-reviews__author">Ninjafoot</p>
            <p class="trusted-reviews__loc">Sacramento, CA</p>
          </div>

          <div class="swiper-slide">
            <img src="${e}/5-stars.svg" alt="5 stars">
            <p class="trusted-reviews__desc">Great camera, it was easy to install, very clear and motion detection was work very good with instant notifications in my phone.</p>
            <p class="trusted-reviews__author">Carol71</p>
            <p class="trusted-reviews__loc">Jersey City, NJ</p>
          </div>

          <div class="swiper-slide">
            <img src="${e}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">I set the camera up to keep my dog from leaving gifts in the hallway. As soon as a motion alert happens, i could hop on the camera and give a stern ‘NO'. Deer in headlights was her reaction. Love this tool in helping my dog potty train.</p>
            <p class="trusted-reviews__author">Jennifer Harden</p>
            <p class="trusted-reviews__loc">Verified customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${e}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">The picture is perfect. We are thinking about replacing our other cameras with these. Easy to set up. Perfect camera</p>
            <p class="trusted-reviews__author">Dmitri Kristov</p>
            <p class="trusted-reviews__loc">Verified customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${e}/5-stars.svg" alt="5 stars">
            <p class="trusted-reviews__desc">These lights are so easy to use with the app and Alexa. They look great also.</p>
            <p class="trusted-reviews__author">Amelia Ngoy</p>
            <p class="trusted-reviews__loc">Verified customer</p>
          </div>

        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev">
          <img src="${e}/arrow-l.svg" alt="arrow left">
        </div>
        <div class="swiper-button-next">
          <img src="${e}/arrow-r.svg" alt="arrow right">
        </div>
      </div>
    </div>
  </section>
  `
  ), c = (t) => new Promise((r) => {
    const s = document.querySelector(t);
    if (s)
      return r(s);
    const i = new MutationObserver(() => {
      const a = document.querySelector(t);
      a && (r(a), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), p = async (t) => {
    const r = (s) => new Promise((i, a) => {
      const n = s.split(".").pop();
      if (n === "js") {
        if (Array.from(document.scripts).map((l) => l.src.toLowerCase()).includes(s.toLowerCase()))
          return console.log(`Script ${s} allready downloaded!`), i("");
        const o = document.createElement("script");
        o.src = s, o.onload = i, o.onerror = a, document.head.appendChild(o);
      } else if (n === "css") {
        if (Array.from(document.styleSheets).map((l) => {
          var u;
          return (u = l.href) == null ? void 0 : u.toLowerCase();
        }).includes(s.toLowerCase()))
          return console.log(`Style ${s} allready downloaded!`), i("");
        const o = document.createElement("link");
        o.rel = "stylesheet", o.href = s, o.onload = i, o.onerror = a, document.head.appendChild(o);
      }
    });
    for (const s of t)
      await r(s), console.log(`Loaded librari ${s}`);
    console.log("All libraries loaded!");
  };
  c("#shopify-section-template--16970486120700__section-marquee").then((t) => t.insertAdjacentHTML("afterend", m)), w(), g(), c("body").then((t) => t == null ? void 0 : t.classList.add("hide-chat-btn")), c('iframe[title="Messaging window"]').then((t) => {
    new MutationObserver((s) => {
      var i, a;
      for (let n of s)
        n.type === "attributes" && n.attributeName === "tabindex" && (console.log("Tabindex changed to:", t.getAttribute("tabindex")), t.getAttribute("tabindex") === "-1" ? (i = document.querySelector("body")) == null || i.classList.add("hide-chat-btn") : (a = document.querySelector("body")) == null || a.classList.remove("hide-chat-btn"));
    }).observe(t, { attributes: !0 });
  }), _(), c(".load-more-btn").then((t) => {
    t.addEventListener("click", () => {
      const r = document.querySelector(".trusted-load-more");
      r && r.classList.remove("load-more-btn-visible");
    });
  }), y();
  function w() {
    p(["https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js", "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"]);
    const t = setInterval(() => {
      typeof Swiper < "u" && (clearInterval(t), c(".hero .swiper").then((r) => {
        const s = r.clientWidth, a = s * 1.07 - s + 16;
        new Swiper(".hero .swiper", {
          navigation: {
            nextEl: ".hero .swiper-button-next",
            prevEl: ".hero .swiper-button-prev"
          },
          slidesPerView: 1.13,
          spaceBetween: 8,
          slidesOffsetAfter: a,
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
      }), c(".trusted-reviews .swiper").then((r) => {
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
              var s;
              (s = document.querySelector(".trusted-reviews .swiper")) == null || s.classList.add("reached-end");
            }
          }
        });
      }));
    }, 100);
  }
  function g() {
    h === "mobile" && c('.mobile-menu [aria-controls="nav-drawer"]').then((t) => {
      document.querySelector("h1.logo").insertAdjacentElement("beforebegin", t);
    });
  }
  function v(t, r) {
    const s = `[data-products-type="${t}"] .products-wrapper`;
    c(s).then((i) => {
      const a = document.querySelectorAll(r);
      for (let d = 0; d < 4; d++) {
        const o = a[d];
        i.appendChild(o);
      }
      const n = setInterval(() => {
        const d = document.querySelectorAll(`${s} .product-grid-item__title`);
        d[3] && (clearInterval(n), d.forEach((o, l) => {
          document.querySelectorAll(`${s} .product-grid-item__inner`)[l].insertAdjacentHTML("beforeend", `<a class="product__shop-now" href="${o.href}">Shop now</a>`);
        }));
      }, 100);
    });
  }
  function _() {
    const t = setInterval(() => {
      document.querySelector("#shopify-section-template--16970486120700__c779e8b3-bda2-49eb-b1f7-031ddd03321b .product-grid-item__inner") && document.querySelector("#shopify-section-template--16970486120700__section_collection_CbegNw .product-grid-item__inner") && (clearInterval(t), v("popular-products", "#shopify-section-template--16970486120700__c779e8b3-bda2-49eb-b1f7-031ddd03321b .product-grid-item__inner"), v("hot-deals", "#shopify-section-template--16970486120700__section_collection_CbegNw .product-grid-item__inner"));
    }, 100);
  }
  function y() {
    p(["https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/css/glide.core.min.css", "https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/glide.min.js"]).then(() => {
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
          const r = setInterval(() => {
            const s = document.querySelector(".glide__arrow--left"), i = document.querySelector(".glide__arrow--right"), a = document.querySelector(".glide");
            s && i && (console.log("Arrows are ready"), clearInterval(r), a.addEventListener("click", (n) => {
              console.log(n.target), n.target.closest(".swiper-button-prev-mob") && s.dispatchEvent(new Event("click")), n.target.closest(".swiper-button-next-mob") && i.dispatchEvent(new Event("click"));
            }));
          }, 100);
        }
      }, 100);
    });
  }
})();
//# sourceMappingURL=index.js.map
