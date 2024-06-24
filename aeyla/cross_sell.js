(function() {
  "use strict";
  const d = (e, t, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: t,
      event_type: n,
      event_loc: o
    }), console.dir(`Event: ${e} | ${t} | ${n} | ${o}`);
  }, b = ({ name: e, dev: t }) => {
    console.dir(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, g = (e) => document.querySelectorAll(e), r = (e) => document.querySelector(e), v = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, k = () => {
    const e = navigator.userAgent;
    return e.match(/Android/i) || e.match(/webOS/i) || e.match(/iPhone/i) || e.match(/iPad/i) || e.match(/iPod/i) || e.match(/BlackBerry/i) || e.match(/Windows Phone/i) ? "mobile" : "desktop";
  }, w = {
    close: (
      /*html */
      `
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.7"/>
    <path d="M9 9L17 17M9 17L17 9" stroke="#283455" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
    ),
    cart: `
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
    <g clip-path="url(#clip0_188_1379)">
      <path d="M9.56641 20.0234C10.6343 20.0234 11.5 19.1577 11.5 18.0898C11.5 17.0219 10.6343 16.1562 9.56641 16.1562C8.49851 16.1562 7.63281 17.0219 7.63281 18.0898C7.63281 19.1577 8.49851 20.0234 9.56641 20.0234Z" fill="white"/>
      <path d="M17.3008 20.0234C18.3687 20.0234 19.2344 19.1577 19.2344 18.0898C19.2344 17.0219 18.3687 16.1562 17.3008 16.1562C16.2329 16.1562 15.3672 17.0219 15.3672 18.0898C15.3672 19.1577 16.2329 20.0234 17.3008 20.0234Z" fill="white"/>
      <path d="M1.14453 3.26562H3.92046C3.95634 3.39482 7.21808 15.1386 7.01153 14.3951C7.08896 14.6739 7.34325 14.8671 7.63277 14.8671H19.2343C19.5219 14.8671 19.7749 14.6764 19.8543 14.3994L22.4753 5.37606C22.5307 5.18158 22.4917 4.97258 22.3702 4.81085C22.2481 4.64972 22.0574 4.55467 21.8554 4.55467H5.61609L5.03137 2.44861C4.95394 2.16979 4.69966 1.97656 4.41013 1.97656H1.14453C0.788276 1.97656 0.5 2.26484 0.5 2.62109C0.5 2.97734 0.788276 3.26562 1.14453 3.26562ZM16.6562 12.289H10.2109C9.85463 12.289 9.56635 12.0007 9.56635 11.6445C9.56635 11.2882 9.85463 10.9999 10.2109 10.9999H16.6562C17.0124 10.9999 17.3007 11.2882 17.3007 11.6445C17.3007 12.0007 17.0124 12.289 16.6562 12.289ZM8.92183 8.42184H17.9452C18.3015 8.42184 18.5897 8.71011 18.5897 9.06637C18.5897 9.42262 18.3015 9.71089 17.9452 9.71089H8.92183C8.56557 9.71089 8.2773 9.42262 8.2773 9.06637C8.2773 8.71011 8.56557 8.42184 8.92183 8.42184Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_188_1379">
        <rect width="22" height="22" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>`,
    arrowDown: `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_193_19761)">
      <path d="M7.54628 10.8891L13.7763 4.65896C13.9206 4.51486 14 4.3225 14 4.1174C14 3.9123 13.9206 3.71994 13.7763 3.57584L13.3176 3.11703C13.0188 2.81848 12.533 2.81848 12.2345 3.11703L7.0029 8.34867L1.76547 3.11123C1.62126 2.96713 1.42901 2.88757 1.22402 2.88757C1.0188 2.88757 0.826562 2.96713 0.682239 3.11123L0.223657 3.57004C0.0794468 3.71425 -4.45384e-08 3.90649 -5.35037e-08 4.1116C-6.24691e-08 4.3167 0.0794467 4.50906 0.223657 4.65315L6.45941 10.8891C6.60408 11.0336 6.79723 11.1129 7.00256 11.1124C7.20869 11.1129 7.40173 11.0336 7.54628 10.8891Z" fill="#283455"/>
    </g>
    <defs>
      <clipPath id="clip0_193_19761">
        <rect width="14" height="14" fill="white" transform="translate(14) rotate(90)"/>
      </clipPath>
    </defs>
  </svg>`
  }, f = {
    0: {
      head: 'Create the Perfect Bed with a <span class="text-nowrap">Matching Sheet Set</span>',
      images: `<img src="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=1400" alt="Eucalyptus Silk Sheet Set" srcset="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=1400 1400w" width="1400" height="1400" loading="eager" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full">
    <img src="//www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400" alt="Eucalyptus Silk Sheet Set" srcset="//www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">
    <img src="//www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400" alt="Eucalyptus Silk Sheet Set" srcset="//www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">`,
      title: "Eucalyptus Silk Sheet Set",
      desc: ["Double: Duvet Cover (200cm x 200cm), Fitted Sheet (135cm x 190cm x 32cm), Pillowcases (75cm x 50cm)", "King: Duvet Cover (225cm x 220cm), Fitted Sheet (150cm x 200cm x 32cm), Pillowcases (75cm x 50cm)", "Super King: Duvet Cover (260cm x 220cm), Fitted Sheet (180cm x 200cm x 32cm), Pillowcases (75cm x 50cm)"],
      prices: {
        Double: ["£269.00", "£139.00"],
        King: ["£289.00", "£149.00"],
        "Super King": ["£309.00", "£159.00"]
      },
      list: ["Super soft fabric prevents hair breakage and skin creases. Hypoallergenic and gentle.", "Naturally wicks away sweat to regulate body temperature and stay cool."],
      select: {
        "White/Double": 44467947864350,
        "White/King": 44467947962654,
        "White/Super King": 44467948060958,
        "Stone/Double": 44467947897118,
        "Stone/King": 44467947995422,
        "Stone/Super King": 44467948093726,
        "Light Blue/Double": 48380928131358,
        "Light Blue/King": 48380928164126,
        "Light Blue/Super King": 48380928196894
      }
    },
    1: {
      head: "Complete Your Comfort",
      images: `<img src="//www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400" alt="Eucalyptus Silk Pillow Cases - 2 Pack" srcset="//www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400 1400w" width="1400" height="1400" loading="eager" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full">
    <img src="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400" alt="Eucalyptus Silk Pillow Cases - 2 Pack" srcset="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">
    <img src="//www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400" alt="Eucalyptus Silk Pillow Cases - 2 Pack" srcset="//www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">`,
      title: "Eucalyptus Silk Pillow Cases",
      desc: ["For Standard Size Pillow: 50cm x 75cm"],
      prices: {
        "2 pack": ["£49.99", "£24.99"],
        "4 pack": ["£99.98", "£49.98"]
      },
      list: ["Feels like a fresh breeze, keeping that cool-side-of-the-pillow sensation.", "Super soft fabric prevents hair breakage and skin creases."],
      select: {
        "White/2 pack": 44467942981918,
        "White/4 pack": 44467942981918,
        "Stone/2 pack": 44467943014686,
        "Stone/4 pack": 44467943014686,
        "Light Blue/2 pack": 44467943047454,
        "Light Blue/4 pack": 44467943047454
      }
    },
    2: {
      head: 'Maximize Relaxation with a <span class="text-nowrap">Cooling Sleep Mask</span>',
      images: `<img src="//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfortWHITE.webp?crop=center&amp;height=1400&amp;v=1677417887&amp;width=1400" alt="Eucalyptus Silk Eye Mask" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-xl object-cover aspect-square w-full h-full">
    <img src="//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfortGREY.webp?crop=center&amp;height=1400&amp;v=1677417887&amp;width=1400" alt="Eucalyptus Silk Eye Mask" width="1400" height="1400" loading="eager" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-xl object-cover aspect-square w-full h-full" style="display: none">
    <img src="//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfortBLUE_705f925c-e28f-4a5d-b10a-70259fa1a23f.webp?crop=center&amp;height=1400&amp;v=1677417887&amp;width=1400" alt="Eucalyptus Silk Eye Mask" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-xl object-cover aspect-square w-full h-full" style="display: none;">`,
      title: "Eucalyptus Silk Eye Mask",
      desc: [""],
      prices: ["£25.00", "£15.00"],
      list: ["Promotes good sleep. ", "Cooling, super soft, hypoallergenic & dermatologically tested material."],
      select: {
        White: 44467937280286,
        Stone: 44467937247518,
        "Light Blue": 44467937313054
      }
    }
  }, p = {
    "/products/mela-weighted-blanket,/products/the-mela-weighted-blanket-with-removable-cover": {
      addons: {
        pillowcases: 2,
        mask: 1,
        pillowcases_mask: 0
      },
      not_addons: 0
    },
    "/products/the-dual-pillow,/products/the-foamo": {
      addons: {
        pillowcases: 2,
        mask: 1,
        pillowcases_mask: 0
      },
      not_addons: 1
    },
    "/products/opposites-attract-bundle": {
      addons: {
        pillowcases: 0,
        mask: 0,
        pillowcases_mask: 0
      },
      not_addons: 1
    },
    "/products/pillow-pillowcase-bundle": {
      addons: {
        pillowcases: 0,
        mask: 0,
        pillowcases_mask: 0
      },
      not_addons: 2
    },
    "/products/move-in-set-2": {
      not_addons: 2
    }
  };
  let x = ["eucalyptus-silk-eye-mask", "eucalyptus-silk-pillow-cases", "eucalyptus-silk-sheet-set"], y = [];
  const _ = (e) => fetch("/products/" + e + ".js").then((t) => t.json()).then((t) => {
    t.variants && t.variants.forEach(function(n) {
      y[n.id] = n.available;
    });
  }).catch((t) => {
    console.log("Error fetching product for handle:", e, t);
  }), C = (e, t) => {
    let n = {
      items: [
        {
          id: e,
          quantity: t
        }
      ]
    };
    $.ajax({
      url: "/cart/add.js",
      type: "POST",
      data: n,
      dataType: "json",
      error: function(o) {
        console.log(o);
      }
    }).done(function(o) {
      $.getJSON("/cart.js", function(a) {
        $(".ic").find(".cart_count").text(a.item_count), console.log(a), $(".modal-add span").text("ADD TO CART"), $(".modal").removeClass("active"), addToCartOK();
      });
    });
  }, S = (e) => Promise.all(x.map(_)).then(() => {
    let t = "", n = "";
    const o = e.select;
    for (const i in o) {
      let m = "", h = "";
      if (e.title == "Eucalyptus Silk Sheet Set")
        for (let u = 0; u < e.desc.length; u++)
          e.desc[u].split(":")[0] == i.split("/")[1] && (m = e.desc[u]);
      e.prices.constructor === Object && (h = e.prices[i.split("/")[1]]), y[o[i]] == !0 && (n += `<option value="${o[i]}" ${m != "" ? `data-desc="${m}"` : ""} ${h != "" ? `data-compare="${h[0]}" data-price="${h[1]}"` : ""} data-qty="${i.includes("4 pack") ? 2 : 1}">${i}</option>`);
    }
    let a = e.list;
    for (let i = 0; i < a.length; i++)
      t += `<li>${a[i]}</li>`;
    let s = Object.keys(e.prices)[0];
    const c = e.prices.constructor === Object ? e.prices[s][0] : e.prices[0], l = e.prices.constructor === Object ? e.prices[s][1] : e.prices[1];
    return `
            <div class="modal">
                <div class="modal-container">
                    <div class="modal-head">
                        ${e.head} ${w.close}
                    </div>
                    <div class="modal-product items-center">
                        <div class="modal-product__images">${e.images}</div>
                        <div>
                            <p class="modal-product__title">${e.title}</p>
                            <p class="modal-product__desc" ${e.desc[0] == "" ? "hidden" : ""}>${e.desc[0]}</p>
                            <p class="modal-product__prices" data-compare="${c.replace("£", "")}" data-price="${l.replace("£", "")}">
                                <span>${c}</span>
                                <b>${l}</b>
                            </p>
                        </div>
                    </div>
                    <div class="modal-content">
                        <ul class="modal-list">${t}</ul>
                        <div class="select-parent">
                            <select class="modal-select">${n}</select>
                            ${w.arrowDown}
                        </div>
                        <button type="button" class="modal-add items-center">${w.cart} <span>Add to cart</span></button>
                    </div>
                </div>
            </div>`;
  }), E = `.items-center {
  display: flex;
  align-items: center;
}

.text-nowrap {
  white-space: nowrap;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  display: flex;
  font-family: Inter, sans-serif;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
}
.modal.active {
  opacity: 1;
  pointer-events: auto;
}
.modal.active .modal-container {
  transform: translateY(0);
}
.modal-container {
  width: 100%;
  max-width: 560px;
  margin: auto auto 0;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  transform: translateY(100px);
  transition: all 0.25s ease;
}
.modal-head {
  background: #ffd200;
  padding: 9px 24px;
  border-radius: 10px 10px 0 0;
  position: relative;
  color: #283455;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
}
.modal-head svg {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
}
.modal-product {
  background: #f8f8f8;
  border-bottom: 1px dashed #b0bfd4;
  padding: 20px 16px;
}
.modal-product__images {
  border-radius: 6px;
  border: 1px solid #d5dfed;
  width: 140px;
  height: 140px;
  margin-right: 12px;
  flex-shrink: 0;
  overflow: hidden;
}
.modal-product__images img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  border-radius: 0;
}
.modal-product__title {
  color: #1b2943;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 12px;
}
.modal-product__desc {
  color: #1b2943;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 12px;
}
.modal-product__prices {
  margin-bottom: 12px;
}
.modal-product__prices span {
  color: #a84624;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: line-through;
  padding-right: 8px;
}
.modal-product__prices b {
  color: #1b2943;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.modal-content {
  padding: 0 16px 16px;
}
.modal-list {
  color: #1b2943;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  list-style-type: disc;
  padding: 12px 20px;
}
.modal-list li:not(:last-child) {
  margin-bottom: 12px;
}
.modal-select {
  width: 100%;
  color: #1b2943;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #b0bfd4;
  background: #fff;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.modal-add {
  border-radius: 6px;
  background: #a84624;
  padding: 14px;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  justify-content: center;
  width: 100%;
}
.modal-add[disabled] {
  background-color: rgb(139, 140, 140);
  cursor: no-drop;
  color: #fff !important;
}
.modal-add svg {
  margin-right: 10px;
}

.select-parent {
  position: relative;
  margin-bottom: 12px;
}
.select-parent > svg {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.select-parent.active > svg {
  transform: translateY(-50%) scaleY(-1);
}

@media (min-width: 600px) {
  .modal-container {
    margin: auto;
    border-radius: 12px;
  }
  .modal-head {
    border-radius: 12px 12px 0 0;
    padding: 17px;
  }
  .modal-product {
    padding: 16px;
  }
  .modal-product__images {
    height: 204px;
    width: 204px;
    margin-right: 24px;
  }
  .modal-product__prices b, .modal-product__title {
    font-size: 18px;
    line-height: 24px;
  }
  .modal-product__prices span, .modal-product__desc, .modal-list {
    font-size: 16px;
    line-height: 24px;
  }
  .select-parent {
    margin-top: 4px;
  }
}/*# sourceMappingURL=main.css.map */`;
  b({ name: "Cross-sell", dev: "Olha" }), v("exp_cross_sell");
  class P {
    constructor() {
      this.page = window.location.pathname, this.device = k(), this.showStickyBtn = !1, this.adding = !1, this.addingQuick = !1, (JSON.stringify(p).includes(this.page) || this.page.includes("/collections/beddings") || this.page.includes("/collections/shop-all-aeyla") || this.page.includes("/collections/pillows") || this.page.includes("/collections/bundles") || this.page.includes("/collections/weighted-blanket-blanket-covers")) && this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${E}</style>`), console.log("init "), new MutationObserver((n) => {
        if (r(".sticky_atc_btn")) {
          if (this.showStickyBtn === !0)
            return;
          this.showStickyBtn = !0, g(".sticky_atc_btn").forEach((o) => {
            o.addEventListener("click", () => {
              this.addToCartPDP();
            });
          });
        } else
          this.showStickyBtn = !1;
        if (r("#AddToCart") && r("#AddToCart").innerText.toLowerCase().includes("adding")) {
          if (this.adding === !0)
            return;
          this.adding = !0, this.addToCartPDP();
        } else
          this.adding = !1;
        if (r('.quick_add .loader[style*="block"]')) {
          if (this.addingQuick === !0)
            return;
          this.addingQuick = !0;
          let o = r('.quick_add .loader[style*="block"]').closest(".pro_card_wrapper").querySelector("a").pathname;
          console.log("href: ", o);
          for (const a in p)
            console.log(a), a.includes(o) && this.renderCrossSellModal(f[p[a].not_addons]);
        } else
          this.addingQuick = !1;
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addToCartPDP() {
      console.log("click addToCart button");
      let t = "";
      g(".upsell_wrapper .chckd").forEach((n) => {
        this.page.includes("/move-in-set-2") || (t += n.querySelector(".text-main-blue > span").innerText.toLowerCase());
      }), t != "" && (t = t.includes("mask") && t.includes("pillowcases") ? "pillowcases_mask" : t.includes("mask") ? "mask" : "pillowcases"), console.log("addonsName: " + t);
      for (const n in p) {
        let o = n.split(",");
        for (let a = 0; a < o.length; a++)
          if (o[a].includes(this.page)) {
            console.log("dataCrossSell: " + o[a]);
            let s = 0;
            t != "" ? s = p[n].addons[t] : s = p[n].not_addons, console.log("primaryProduct: " + s), this.renderCrossSellModal(f[s]);
          }
      }
    }
    renderCrossSellModal(t) {
      $(".modal").length && $(".modal").remove(), S(t).then((n) => {
        document.body.insertAdjacentHTML("beforeend", n), setTimeout(() => {
          $(".modal").addClass("active"), d("exp_cross_sell_popup_section_01", "Section", "Visibility", "Cross-sell popup");
        }, 500), $(".modal-head svg").click(function() {
          $(".modal").removeClass("active"), d("exp_cross_sell_popup_button_01", "Close", "Button", "Cross-sell popup");
        }), $(".modal-select").on("input", (o) => {
          const a = $(".modal-select")[0].options[$(".modal-select")[0].selectedIndex], s = a.text.split("/")[0];
          if ($(".modal-product__images img").each((c, l) => {
            $(l).attr("style", "display: none"), (s == "White" && c == 0 || s == "Stone" && c == 1 || s == "Light Blue" && c == 2) && $(l).attr("style", "");
          }), a.getAttribute("data-desc") && $(".modal-product__desc").html(a.getAttribute("data-desc")), a.getAttribute("data-price")) {
            const c = a.getAttribute("data-compare"), l = a.getAttribute("data-price");
            $(".modal-product__prices span").html(c), $(".modal-product__prices b").html(l);
          }
          d("exp_cross_sell_popup_dropdown_01", a.text, "Dropdown", "Cross-sell popup");
        }), $(".modal-add").click(function(o) {
          const a = $(".modal-select")[0].options[$(".modal-select")[0].selectedIndex].value, s = $(".modal-select")[0].options[$(".modal-select")[0].selectedIndex].getAttribute("data-qty");
          $(this).find("span").text("Adding..."), C(a, s), d("exp_cross_sell_popup_button_02", "Add to cart", "Button", "Cross-sell popup");
        });
      });
    }
  }
  let L = setInterval(() => {
    document.body && (clearInterval(L), new P());
  });
})();
//# sourceMappingURL=index.js.map
