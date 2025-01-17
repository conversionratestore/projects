(function() {
  "use strict";
  const g = (a, n, e, c = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: n,
      event_type: e,
      event_loc: c
    }), console.log(`Event: ${a} | ${n} | ${e} | ${c}`);
  }, _ = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (a) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", a, "variant_1"));
    }, 1e3);
  };
  function f(a) {
    return new Promise((n) => {
      if (document.querySelector(a))
        return n(document.querySelector(a));
      const e = new MutationObserver(() => {
        document.querySelector(a) && (n(document.querySelector(a)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const h = "https://conversionratestore.github.io/projects/drgolly/improve_hp", x = `#main-content {
  position: relative;
  z-index: 2;
}
#courses {
  z-index: 9999;
}
#courses .tabs__content {
  display: none;
}

#courses h2 {
  width: 100%;
  color: #8bc3c3;
  text-align: center !important;
  font-family: Raleway;
  font-size: 40.5px;
  font-style: normal;
  font-weight: 700;
  line-height: 57.11px;
}

#courses h3 {
  color: #8bc3c3;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 52px;
}
#courses .et_pb_module:has(h3) {
  margin-bottom: 16px !important;
}
#courses .tabs__nav {
  --header-height: 76px;
  position: sticky;

  top: calc(var(--header-height) - 1px);
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  padding-block: 12px;
  z-index: 3;
}
#courses .tabs__nav .crs-sentinel {
  top: calc(-1 * var(--header-height) - 2px);
}
#courses .tabs__nav.is-sticky {
  border-top: 1px solid rgba(139, 195, 195, 0.24);
  background: #f7fafa;
}
#courses .tabs__nav.is-fixed {
  position: fixed;
  top: calc(var(--header-height) - 1px);

  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 9999;
  border-top: 1px solid rgba(139, 195, 195, 0.24);
  background: #f7fafa;
  box-shadow: 0px 0.188rem 1.938rem rgba(0, 0, 0, 0.13);
}

#courses .tabs__nav + .tabs__nav-placeholder {
  display: none;
}

#courses .tabs__nav.is-fixed + .tabs__nav-placeholder {
  display: block;
  height: 61px;
}

:is(#courses .tabs__nav.is-sticky, #courses .tabs__nav.is-fixed)::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  right: -100%;
  height: 100%;
  width: calc(100vw + 100%);
  border-top: 1px solid rgba(139, 195, 195, 0.24);
  box-shadow: 0px 2px 23px 0px rgba(0, 0, 0, 0.13);
  background: #f7fafa;
  z-index: -1;
}

#courses .tabs__nav ul {
  display: flex;
  gap: 24px;
  list-style-type: none;
  background: none;
  padding: 0 !important;
}

#courses .tabs__nav ul li {
  background: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

#courses .tabs__nav ul a {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
  padding: 9px 12px;
  height: 36px;
}
#courses .crs-courses {
  display: grid;
  justify-content: center;
}
#courses .crs-courses__list {
  display: grid;
  gap: 40px;
  justify-items: center;
}

#courses .crs-courses__group {
  width: max-content;
  scroll-margin-top: 135px;
  border-radius: 24px;
  background: #ebf5f5;
  padding: 30px;
}

#courses .crs-courses__group--highlight {
  background: #fdf4df;
}

#courses .crs-courses__group-age {
  color: #095d66;
  text-align: center;
  font-family: Raleway;
  font-size: 16.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 27.58px; /* 167.152% */
}

.crs-courses__group-title {
  margin-top: 6px;
  color: #8bc3c3;
  text-align: center;
  font-family: Raleway;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
}

.crs-courses__group--highlight .crs-courses__group-title {
  color: #a78f6a;
}

.crs-courses__group-list {
  margin-top: 42px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 36px;
}

.crs-courses__group-list .product {
  margin: 0 !important;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 240px !important;
  height: 477px !important;
  padding: 0 !important;
  background-color: #fff !important;
  box-shadow: 0px 2.25px 23.25px 0px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  cursor: pointer;
}

.crs-course--best-seller::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 60px;
  background-image: url('data:image/svg+xml,<svg width="241" height="67" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(%23a)"><path d="M-97.8 53c2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.8 1.5 7 3.8 2.7 2.8 6 6.2 12.2 6.2 6.3 0 9.6-3.4 12.2-6.2 2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.9 1.5 7 3.8 2.7 2.8 6 6.2 12.2 6.2 6.3 0 9.6-3.4 12.2-6.2 2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.9 1.5 7.1 3.8 2.6 2.8 6 6.2 12.2 6.2 6.2 0 9.5-3.4 12.1-6.2 2.3-2.3 3.7-3.8 7-3.8 3.4 0 4.9 1.5 7.1 3.8 2.6 2.8 6 6.2 12.2 6.2 6.2 0 9.5-3.4 12.1-6.2 2.3-2.3 3.7-3.8 7-3.8 3.4 0 5 1.5 7.1 3.8 2.7 2.7 6 6.2 12.2 6.2 6.3 0 9.5-3.4 12.2-6.2 2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.8 1.5 7 3.8 2.7 2.8 6 6.2 12.2 6.2 6.3 0 9.6-3.4 12.2-6.2 2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.9 1.5 7 3.8 2.7 2.7 6 6.2 12.2 6.2 6.3 0 9.6-3.4 12.2-6.2 2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.9 1.5 7.1 3.8 2.6 2.8 6 6.2 12.2 6.2 6.2 0 9.5-3.4 12.1-6.2 2.3-2.3 3.7-3.8 7-3.8 3.4 0 4.9 1.5 7.1 3.8 2.7 2.8 6 6.2 12.2 6.2 6.2 0 9.5-3.4 12.2-6.2 2.2-2.3 3.6-3.8 7-3.8s4.8 1.5 7 3.8c2.7 2.8 6 6.2 12.2 6.2 6.3 0 9.5-3.4 12.2-6.2 2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.8 1.5 7 3.8 2.7 2.7 6 6.2 12.2 6.2 6.3 0 9.6-3.4 12.2-6.2 2.2-2.3 3.7-3.8 7-3.8 3.4 0 4.9 1.5 7 3.8 2.7 2.8 6 6.2 12.2 6.2v-60h-461v60c6.3 0 9.5-3.4 12.2-6.2Z" fill="%23F3BA3B"/></g><path d="m11 30.2 1.8 2.5H16c.5 0 .7.4.5.8l-1.9 2.6 1 3c.2.4-.2.8-.6.7l-3-1-2.5 2c-.4.2-1 0-1-.5v-3.2L6 35.4a.5.5 0 0 1 0-1l3.1-1 .9-3c.1-.5.7-.6 1-.2ZM34.4 27.5l2.7 2.6 3.7-.8c.5 0 1 .5.7 1L40 33.5l1.9 3.3c.2.4-.1 1-.7 1l-3.7-.6-2.5 2.8c-.4.4-1 .2-1.1-.3L33 36l-3.4-1.5a.6.6 0 0 1 0-1.2l3.2-1.8.4-3.7c.1-.5.7-.8 1.1-.4ZM66.1 25.5l.9 4.4 4 1.8c.6.3.7 1 .1 1.4l-3.9 2.1-.4 4.5c-.1.6-.9 1-1.3.5l-3.3-3-4.4.9A.8.8 0 0 1 57 37l1.9-4-2.3-4a.8.8 0 0 1 .8-1l4.4.5 3-3.4a.8.8 0 0 1 1.3.4Z" fill="%23FEEDC7"/><path d="M93 35.5c0 .6-.2 1.1-.5 1.5a3 3 0 0 1-1.3 1c-.5.2-1 .3-1.7.3h-5.1V27.6H90c.5 0 .9.2 1.3.4l.8 1a3 3 0 0 1 0 2.8c-.4.5-.7.8-1.2 1a2.7 2.7 0 0 1 2 2.7Zm-2.1-.4c0-.2 0-.5-.2-.7l-.5-.5a1 1 0 0 0-.6-.2h-3.2v2.8h3.1c.3 0 .5 0 .7-.2a1.4 1.4 0 0 0 .7-1.2Zm-4.5-5.7V32h2.8c.2 0 .4 0 .6-.2l.5-.5.2-.7-.2-.7a1.1 1.1 0 0 0-1-.6h-2.9Zm11.6 9c-.6 0-1.2 0-1.7-.3a4 4 0 0 1-2.1-2.2l-.3-1.5c0-.8.1-1.4.5-2 .3-.7.8-1.2 1.4-1.6.6-.3 1.4-.5 2.2-.5a4 4 0 0 1 2.2.5c.6.4 1.1 1 1.4 1.5a4.1 4.1 0 0 1 .5 2.7H96c0 .4.2.7.3 1 .2.3.5.6.8.7.3.2.6.3 1 .3s.8-.1 1.1-.3c.4-.2.6-.5.7-.8l1.8.5c-.2.4-.5.7-.9 1a4 4 0 0 1-1.2.8l-1.6.2Zm-2-4.7h4c0-.4 0-.7-.3-1-.2-.3-.4-.6-.7-.7a2 2 0 0 0-1-.3 2 2 0 0 0-1.7 1c-.2.3-.3.6-.3 1Zm10.2 4.7c-.6 0-1.3 0-1.9-.3-.6-.2-1.1-.6-1.6-1l.8-1.3c.4.4.9.7 1.3.9l1.4.2c.4 0 .7 0 .9-.2.2-.1.4-.3.4-.6l-.2-.5-.6-.2-.9-.3-1.4-.6c-.4-.1-.7-.4-1-.6l-.2-1.1c0-.5.1-1 .4-1.3.2-.4.6-.7 1-1l1.8-.2a3.7 3.7 0 0 1 3 1.1l-.9 1.2-1.1-.6a2.8 2.8 0 0 0-1.7-.2 1 1 0 0 0-.5.3l-.1.5.1.4.5.3a23.3 23.3 0 0 0 2.4.8l1 .7c.2.3.3.7.3 1.1 0 .8-.3 1.4-.9 1.9-.5.4-1.3.6-2.3.6Zm9.2-.5a21.2 21.2 0 0 1-1.4.4l-.8.1c-.4 0-.7 0-1-.2-.3-.1-.6-.3-.8-.6l-.2-1.1V32h-1v-1.6h1V28h2v2.5h1.6V32h-1.6v3.8c0 .3 0 .5.2.6l.5.2.6-.1.5-.2.4 1.6Zm7.6.5c-.7 0-1.3 0-2-.3-.6-.2-1-.6-1.5-1l.7-1.3 1.4.9 1.3.2c.4 0 .7 0 1-.2.2-.1.3-.3.3-.6 0-.2 0-.4-.2-.5l-.6-.2-.9-.3-1.4-.6c-.4-.1-.7-.4-.9-.6-.2-.3-.3-.7-.3-1.1 0-.5.1-1 .4-1.3.3-.4.6-.7 1.1-1l1.7-.2a3.7 3.7 0 0 1 3 1.1l-.9 1.2c-.4-.3-.7-.5-1.1-.6a2.8 2.8 0 0 0-1.7-.2 1 1 0 0 0-.4.3c-.2 0-.2.2-.2.5l.1.4.5.3a23.3 23.3 0 0 0 2.4.8c.4.2.8.4 1 .7.2.3.3.7.3 1.1 0 .8-.3 1.4-.8 1.9-.6.4-1.4.6-2.3.6Zm8.1 0c-.6 0-1.2 0-1.7-.3a4 4 0 0 1-2.1-2.2l-.3-1.5c0-.8.2-1.4.5-2 .3-.7.8-1.2 1.4-1.6.7-.3 1.4-.5 2.2-.5a4 4 0 0 1 2.3.5c.6.4 1 1 1.3 1.5a4.1 4.1 0 0 1 .5 2.7h-6c0 .4 0 .7.3 1 .2.3.4.6.7.7.3.2.7.3 1 .3.4 0 .8-.1 1.1-.3.4-.2.6-.5.8-.8l1.7.5-.8 1a4 4 0 0 1-1.3.8l-1.6.2Zm-2-4.7h4c0-.4 0-.7-.3-1-.1-.3-.4-.6-.7-.7a2 2 0 0 0-1-.3 2 2 0 0 0-1.7 1c-.2.3-.3.6-.3 1Zm7.4-6.4h2v8.5l.1.7.5.2h.5l.5-.2.3 1.5-1 .3h-1a2 2 0 0 1-1.4-.4 2 2 0 0 1-.5-1.4v-9.2Zm4.7 0h2v8.5c0 .3 0 .6.2.7l.5.2h.5l.4-.2.3 1.5-1 .3h-1a2 2 0 0 1-1.4-.4 2 2 0 0 1-.5-1.4v-9.2Zm8.4 11.1c-.6 0-1.2 0-1.7-.3a4 4 0 0 1-2.1-2.2l-.3-1.5c0-.8.2-1.4.5-2 .3-.7.8-1.2 1.4-1.6.7-.3 1.4-.5 2.2-.5a4 4 0 0 1 2.3.5c.6.4 1 1 1.3 1.5a4.1 4.1 0 0 1 .5 2.7h-6c0 .4 0 .7.3 1 .2.3.4.6.7.7.3.2.7.3 1 .3.4 0 .8-.1 1.1-.3.4-.2.6-.5.8-.8l1.7.5-.8 1a4 4 0 0 1-1.3.8l-1.6.2Zm-2-4.7h4c0-.4 0-.7-.3-1-.1-.3-.4-.6-.7-.7a2 2 0 0 0-1-.3 2 2 0 0 0-1.7 1c-.2.3-.3.6-.3 1Zm12-1.5c-.6 0-1.1 0-1.6.3-.5.2-.8.6-1 1v4.8h-2v-7.9h1.8v1.7c.3-.5.6-1 1-1.3.5-.3 1-.5 1.4-.5h.4v1.9Z" fill="%233C3C3B"/><path d="m178.5 26 2.4 3.7 4.5.1c.7 0 1 .8.6 1.3l-2.8 3.5 1.2 4.3a.8.8 0 0 1-1 1l-4.2-1.7-3.6 2.5a.8.8 0 0 1-1.2-.6l.2-4.5-3.6-2.7a.8.8 0 0 1 .3-1.4l4.3-1.1 1.5-4.3c.2-.6 1-.7 1.4-.1ZM208 28l.4 3.6 3.3 1.8c.5.3.4 1 0 1.2l-3.5 1.5-.6 3.7c-.1.5-.8.7-1.1.3l-2.6-2.8-3.7.5c-.5.1-.9-.5-.6-1l1.8-3.2-1.6-3.3c-.2-.5.2-1 .7-1l3.7.8 2.7-2.6c.4-.4 1-.1 1 .4ZM231.3 30.3l1 3 3 1c.4.2.5.8 0 1l-2.5 1.8v3.2c0 .5-.6.7-1 .4l-2.4-1.9-3 1a.5.5 0 0 1-.7-.7l1-3-1.8-2.6c-.3-.4 0-.9.4-.9l3.2.1 1.9-2.5c.3-.4.8-.3 1 .1Z" fill="%23FEEDC7"/><defs><filter id="a" x="-113" y="-.8" width="467" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3029_5092"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_3029_5092" result="shape"/></filter></defs></svg>');
}

#courses .product__age {
  position: absolute;
  top: -20px !important;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-radius: 75px;
  padding: 8px 16px;
  background: #feedc7;
  color: #3c3c3b;
  text-align: center;
  font-family: Raleway;
  font-size: 16.5px;
  font-weight: 500;
  line-height: 27.58px;
  white-space: nowrap;
  z-index: 2;
}

#courses .crs-courses__group--highlight .product__age {
  background-color: #fff;
  color: #3c3c3b;
}

#courses .product__image {
  width: 240px;
  height: 300px;
}
#courses .product__image img {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}

#courses .crs-bestseller {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 60px;
  z-index: 2;
  border-radius: 8px 8px 0 0;
}

#courses .crs-bestseller--mob {
  display: none;
}
#courses .crs-course__img img {
  width: 100%;
  height: 100%;
}

#courses .product__info {
  border-radius: 0 0 8px 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 37px;
  background-color: #fff;
}

#courses .product__title {
  color: #3c3c3b;
  text-align: center;
  font-family: Raleway;
  font-size: 19.5px;
  font-weight: 700;
  line-height: 24.75px;
}

#courses .product__price {
  margin-top: auto;
  color: #3c3c3b;
  text-align: center;
  font-family: Raleway;
  font-size: 19.5px;
  font-weight: 700;
  line-height: 27.58px;
}

#courses .product__price del {
  color: #f00 !important;
}

#courses .product__price ins {
  color: #3c3c3b !important;
}
#courses .product__action {
  margin-top: 18px;
}

#bundles [data-swiper-slide-index='8'] {
  order: 1;
}

#bundles [data-swiper-slide-index='12'] {
  order: 2;
}

#extras [data-swiper-slide-index='9'] {
  order: 1;
}

#extras [data-swiper-slide-index='10'] {
  order: 2;
}

#extras [data-swiper-slide-index='11'] {
  order: 3;
}

:is(body:has(.is-sticky), body:has(.is-fixed)) .et_pb_section_1_tb_header {
  box-shadow: none;
}

@media (max-width: 981px) {
  #courses h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 50.76px;
    padding: 0 !important;
  }

  #courses .et_pb_module:has(h2) {
    margin-bottom: 16px !important;
  }

  #courses h3 {
    padding: 0 !important;
    font-size: 33.734px;
    font-weight: 400;
    line-height: 47.88px;
  }

  #courses .et_pb_module:has(h3) {
    margin-bottom: 30.5px !important;
  }

  #courses .tabs__nav {
    margin-bottom: 16px;
    justify-content: flex-start;
    width: 100%;
    border: none;
    padding: 0;
    background: #f7fafa;
  }


  #courses .tabs__nav.tabs__nav:is(.is-fixed, .is-sticky) {
    border-top: 2px solid rgba(139, 195, 195, 0.24);
  }

  #courses .tabs__nav::after {
    display: none;
  }
  #courses .tabs__nav ul {
    gap: 12px;
    padding: 12px !important;
    background: #f7fafa;

    background: transparent !important;
    flex-wrap: nowrap;
    overflow-x: auto;

  }

  #courses .tabs__nav ul li {
    flex-shrink: 0;
    width: max-content !important;
  }

  #courses .tabs__nav ul li a {
    margin: 0;
    text-align: center;
    font-family: Raleway;
    font-size: 16.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 29.55px;
  }

  #courses .tabs__nav ul li a:hover {
    color: inherit;
    background-color: inherit;
    border-color: inherit;
  }

  #courses .tabs__nav ul li.active a {
    border: 1px solid #095d66;

    background: #095d66;
    color: #fff;
  }

  #courses .crs-courses__list {
    gap: 16px;
  }

  #courses .crs-courses__group {
    width: 100%;
    padding: 30px 16px;
  }

  #courses .crs-courses__group-list {
    margin-top: 24px;
    gap: 18px;
  }

  .crs-courses__group-age {
    font-size: 16.5px;
    font-weight: 600;
    line-height: 27.58px;
  }

  .crs-courses__group-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  #courses .product {
    flex-direction: row;
    width: 100% !important;
    max-width: 343px !important;
    height: 230px !important;
  }

  #courses .crs-bestseller {
    display: none;
  }

  #courses .crs-bestseller--mob {
    display: block;
    position: absolute;
    inset: 0;
    width: 50%;
    height: 50px;
    z-index: 2;
    border-radius: 8px 0 0 0;
  }

  #courses .product__age {
    top: 16px !important;
    left: 75% !important;
    color: #3c3c3b;
    text-align: center;
    font-family: Raleway;
    font-size: 16.5px !important;
    font-style: normal;
    font-weight: 500;
    line-height: 27.58px;
  }

  #courses .crs-courses__group--highlight .product__age {
    background-color: #feedc7;
    color: #3c3c3b;
  }
  #courses .product__image {
    width: 50% !important;
    height: 100% !important;
    border-radius: 8px 0 0 8px;
  }
  #courses .product__image img {
    border-radius: 8px 0 0 8px;
  }

  #courses .product__info {
    width: 50% !important;
    height: 100% !important;
    border-radius: 0 8px 8px 0;
    padding: 16px;
  }

  #courses .product__title {
    margin-top: 54px;
    color: #3c3c3b;
    text-align: center;
    font-family: Raleway;
    font-size: 18px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
  }

  #courses .product__title a {
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  #courses .product__info .product__action a.et_pb_button {
    display: flex !important;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    height: 38px;
    font-size: 13.6px !important;
    font-weight: 600 !important;
    line-height: 23.05px !important;
  }
  .product[data-swiper-slide-index='0'] .product__image {
    align-items: flex-end;
  }

  .product[data-swiper-slide-index='0'] .product__image img {
    transform: rotate(-90deg) scale(1.1);
    object-position: right center;
    width: 243px !important;
    max-width: 291px !important;
    height: 193px !important;
    max-height: 200px;
    aspect-ratio: auto;
    overflow: unset !important;
  }
  #courses .product__price {
    font-size: 19.5px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 27.58px !important;
    white-space: nowrap;
  }
  #courses .product:hover .product__image img {
    transform: scale(1);
  }
  #courses .product[data-swiper-slide-index='0']:hover .product__image img {
    transform: rotate(-90deg) scale(1.1);
  }

}
`;
  class b {
    constructor() {
      this.sectionObserver = null, this.lastScrollTop = 0, this.init();
    }
    init() {
      this.initStyles(), setTimeout(() => {
        this.render(), this.getStickyNav(), this.setupSectionObservers(), this.moveCourses(), this.checkHeaderHeight(), this.setBestSeller(), this.changeCopy();
      }, 500);
    }
    render() {
      var e;
      (e = document.querySelector("#courses .tabs__content")) == null || e.insertAdjacentHTML(
        "afterend",
        /* HTML */
        `<section class="crs-courses">
      <div class="crs-courses__list">
        <div id="baby-sleep" class="crs-courses__group">
          <div class="crs-courses__group-age">0 - 8 Month</div>
          <div class="crs-courses__group-title">Baby Sleep</div>
          <div class="crs-courses__group-list"></div>
        </div>
        <div id="bundles" class="crs-courses__group crs-courses__group--highlight">
          <div class="crs-courses__group-age">0 - 5 Years</div>
          <div class="crs-courses__group-title">Bundles</div>
          <div class="crs-courses__group-list"></div>
        </div>
        <div id="toddler-sleep" class="crs-courses__group">
          <div class="crs-courses__group-age">8 Months - 5 Years</div>
          <div class="crs-courses__group-title">Toddler Sleep</div>
          <div class="crs-courses__group-list"></div>
        </div>
        <div id="extras" class="crs-courses__group">
          <div class="crs-courses__group-title">Extras</div>
          <div class="crs-courses__group-list"></div>
        </div>
      </div>
    </section>`
      );
    }
    async moveCourses() {
      await f('#courses .product[data-swiper-slide-index="12"]');
      const n = document.querySelectorAll("#courses .product"), e = document.querySelector(".crs-courses__group#baby-sleep .crs-courses__group-list"), c = document.querySelector(".crs-courses__group#bundles .crs-courses__group-list"), r = document.querySelector(".crs-courses__group#toddler-sleep .crs-courses__group-list"), o = document.querySelector(".crs-courses__group#extras .crs-courses__group-list"), s = /* @__PURE__ */ new Set();
      n.forEach((i) => {
        var l;
        const t = i.dataset.swiperSlideIndex;
        if (t && !s.has(t)) {
          s.add(t), (t === "0" || t === "1" || t === "2") && (e == null || e.appendChild(i)), (t === "8" || t === "12") && (c == null || c.appendChild(i)), (t === "3" || t === "4" || t === "5" || t === "6") && (r == null || r.appendChild(i)), (t === "9" || t === "10" || t === "11") && (o == null || o.appendChild(i));
          const d = i == null ? void 0 : i.querySelector(".product__title a"), p = i == null ? void 0 : i.querySelector(".product__action a");
          d && p && (p.href = d.href, p.textContent = "Learn More");
          const u = (l = i == null ? void 0 : i.closest(".crs-courses__group")) == null ? void 0 : l.querySelector(".crs-courses__group-title");
          i.addEventListener("click", () => {
            d && (g("exp_courses_hp_", "Learn More", "click", `${u == null ? void 0 : u.textContent}`), setTimeout(() => {
              location.href = d.href;
            }, 100));
          });
        }
      });
    }
    setBestSeller() {
      const n = document.querySelector('#courses .product[data-swiper-slide-index="8"]');
      if (!n)
        return;
      const e = (
        /* HTML */
        `
      <img class="crs-bestseller" src="${h}/img/best_seller.webp" alt="" width="241" height="60" loading="lazy" />
      <img
        class="crs-bestseller crs-bestseller--mob"
        src="${h}/img/best_seller_mob.webp"
        alt=""
        width="175"
        height="60"
        loading="lazy"
      />
    `
      );
      n.insertAdjacentHTML("afterbegin", e);
    }
    changeCopy() {
      const n = document.querySelector('#courses .product[data-swiper-slide-index="8"]'), e = n == null ? void 0 : n.querySelector(".product__age"), c = n == null ? void 0 : n.querySelector(".product__title");
      e && (e.textContent = "0-5 Years"), setTimeout(() => {
        var s;
        c && ((s = c.textContent) == null ? void 0 : s.trim()) === "Sleep Bundle Deal" && (c.textContent = "Sleep Bundle");
      }, 1e3);
      const r = document.querySelector('#courses .product[data-swiper-slide-index="12"]'), o = r == null ? void 0 : r.querySelector(".product__title");
      setTimeout(() => {
        var s;
        o && ((s = o.textContent) == null ? void 0 : s.trim()) === "Toddler Bundle Deal" && (o.textContent = "Toddler Bundle");
      }, 1e3);
    }
    setupSectionObservers() {
      const n = document.querySelectorAll(".crs-courses__group"), e = document.querySelectorAll("#courses .tabs__nav li");
      document.querySelectorAll("#courses .tabs__nav li a").forEach((o, s) => {
        s === 0 && (o.textContent = "Baby Sleep", o.href = "#baby-sleep"), s === 1 && (o.textContent = "Bundles", o.href = "#bundles"), s === 2 && (o.textContent = "Toddler Sleep", o.href = "#toddler-sleep"), s === 3 && (o.textContent = "Extras", o.href = "#extras"), o.addEventListener("click", (i) => {
          var d;
          i.preventDefault();
          const t = o.getAttribute("href");
          if (!t)
            return;
          const l = document.querySelector(t);
          (d = this.sectionObserver) == null || d.disconnect(), l == null || l.scrollIntoView({ behavior: "smooth", block: "start" }), setTimeout(() => {
            n.forEach((p) => {
              var u;
              (u = this.sectionObserver) == null || u.observe(p);
            });
          }, 1e3);
        });
      });
      const r = window.innerWidth <= 768 ? 0.2 : 0.5;
      this.sectionObserver = new IntersectionObserver(
        (o) => {
          o.forEach((s) => {
            const i = s.target.getAttribute("id"), t = document.querySelector(`#courses .tabs__nav li:has(a[href="#${i}"])`);
            if (s.isIntersecting) {
              e.forEach((p) => p.classList.remove("active")), t == null || t.classList.add("active");
              const l = document.querySelector("#courses .tabs__nav ul"), d = t == null ? void 0 : t.querySelector("a");
              if (l && d) {
                const p = l.getBoundingClientRect(), u = d.getBoundingClientRect(), k = u.left - p.left + l.scrollLeft - p.width / 2 + u.width / 2;
                l.scrollTo({ left: k, behavior: "smooth" });
              }
            } else
              t == null || t.classList.remove("active");
          });
        },
        {
          threshold: [r]
        }
      ), n.forEach((o) => {
        var s;
        (s = this.sectionObserver) == null || s.observe(o);
      });
    }
    getStickyNav() {
      const n = document.querySelector("#courses .tabs__nav"), e = document.querySelector("#courses");
      if (!n || !e)
        return;
      n.insertAdjacentHTML(
        "afterend",
        /* HTML */
        ' <div class="tabs__nav-placeholder"></div>'
      );
      const r = document.createElement("div");
      r.classList.add("crs-sentinel"), r.style.position = "absolute", r.style.width = "1px", r.style.height = "1px", r.style.left = "2px";
      const o = document.createElement("div");
      o.style.position = "absolute", o.style.bottom = `${e.clientHeight}px`, o.style.width = "100%", o.style.height = "1px", n.prepend(r), e.appendChild(o);
      const s = new IntersectionObserver(
        ([t]) => {
          t.intersectionRatio < 1 ? n.classList.add("is-sticky") : n.classList.remove("is-sticky");
        },
        { threshold: [1] }
      );
      new IntersectionObserver(
        ([t]) => {
          !t.isIntersecting && t.boundingClientRect.top < 0 ? (n.classList.add("is-fixed"), n.classList.remove("is-sticky")) : (n.classList.remove("is-fixed"), n.classList.add("is-sticky"));
        },
        { threshold: [0.5] }
      ).observe(o), s.observe(r);
    }
    checkHeaderHeight() {
      const n = () => {
        const e = document.querySelector("header"), c = document.querySelector("#courses .tabs__nav");
        if (e) {
          const r = e.offsetHeight;
          c == null || c.style.setProperty("--header-height", `${r}px`);
        }
      };
      n(), window.addEventListener("resize", n), window.addEventListener("scroll", n);
    }
    initStyles() {
      const n = document.createElement("style");
      n.textContent = x, document.head.appendChild(n);
    }
  }
  const v = async () => {
    try {
      const a = await fetch(
        "https://api.reviews.io/timeline/data?type=store_review&store=www.drgolly.com&sort=date_desc&page=1&per_page=50&enable_avatars=false&include_subrating_breakdown=1&branch=&tag=&include_product_reviews=1&sku=&lang=en"
      ), n = await a.json();
      if (!a.ok)
        throw new Error(n.message || "Failed to fetch data");
      return [null, n.stats];
    } catch (a) {
      return [a, null];
    }
  }, w = `@media (min-width: 981px) {
  .et_pb_column:has(h1) h2 {
    width: 462px;
    font-size: 40.6px;
    font-weight: 700;
    line-height: 57.19px;
  }

  div.et_pb_section.et_pb_section_1:has(h1) {
    background-position: right -140px center !important;
  }

  body #page-container .et_pb_section:has(h1) a.et_pb_button_0 {
    border-radius: 75px;
    background-color: var(--secondary-color) !important;
    border-color: var(--secondary-color) !important;
  }

  body #page-container .et_pb_section a.et_pb_button_0:hover {
    background-color: #fff !important;
    border-color: var(--secondary-color) !important;
    color: var(--secondary-color) !important;
  }
  div:has(> h1) {
    display: none;
  }

  .et_pb_row.et_pb_row_0.et_pb_gutters2:has(h1) {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  body #page-container .et_pb_section:has(h1) .et_pb_module:has(h2) {
    padding: 0 !important;
  }
}

.crs-reviews {
  margin-bottom: 16px;
}

.crs-reviews__rating {
  display: flex;
  align-items: center;
  gap: 12px;
}
.crs-reviews__average {
  color: #095d66;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}

.crs-reviews__stars {
  display: flex;
  align-items: center;
}

.crs-reviews__total {
  margin-top: 6px;
  color: #71c2bd;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
}

.crs-quote {
  margin-top: 50px;
  padding-left: 1.25rem;
}
@media only screen and (min-width: 981px) {
  .crs-quote {
    max-width: 76.7%;
    margin-inline: auto;
  }
}

@media only screen and (min-width: 981px) and (max-width: 1299px) {
  .crs-quote {
    max-width: 100%;
    width: 100%;
  }
}
.crs-quote__text {
  display: flex;
  gap: 12px;
  max-width: 360px;

  color: #095d66;
  font-family: Montserrat;
  font-size: 15px;
  font-style: italic;
  font-weight: 500;
  line-height: 21px; /* 140% */
}
.crs-quote__text::before {
  flex-shrink: 0;
  content: '';
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml,<svg width="23" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3 10.5a15 15 0 0 1-2.5 8.1l-2.1 2.8c-.3.2-.8.3-1 0L3 19.5a.7.7 0 0 1 0-.9l.4-.5a9 9 0 0 0 1.8-4.2c-1 0-2.3-.2-3-1.1-.8-1-1.2-2-1.2-3.2 0-1.2.5-2.2 1.4-3.2 1-1 2-1.4 3.3-1.4C7 5 8.1 5.5 9 6.6c1 1 1.4 2.3 1.4 3.9ZM21.7 10.5a15 15 0 0 1-2.6 8.1l-2 2.8c-.3.2-.8.3-1 0l-1.8-1.9a.7.7 0 0 1 0-.9l.4-.5a9 9 0 0 0 1.9-4.2c-1 0-2.3-.2-3.1-1.1-.7-1-1.2-2-1.2-3.2 0-1.2.5-2.2 1.5-3.2S15.8 5 17 5c1.2 0 2.3.5 3.1 1.6 1 1 1.5 2.3 1.5 3.9Z" fill="%2371C2BD"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
}
@media (max-width: 981px) {
  .post-2 .et_pb_section_1.et_pb_section:has(h1) {
    background-color: #e9eaec !important;
  }
  .et_pb_column:has(.crs-reviews) {
    display: flex;
    flex-direction: column;
  }

  .crs-reviews {
    margin-top: 16px;
    order: 2;
  }

  div.et_pb_section.et_pb_section_1:has(h1) {
    background-position: right -83px top 105px !important;
    background-size: 740px;
  }

  .crs-quote {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 335px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    padding: 8px;
  }

  .crs-quote__text {
    font-size: 15px;
    font-style: italic;
    font-weight: 500;
    line-height: 21px;
  }

  body #page-container .et_pb_section:has(h1) a.et_pb_button_0 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    max-width: 191px;
    padding: 17px 42px;
    border-radius: 75px;
    background-color: var(--secondary-color) !important;
    border-color: var(--secondary-color) !important;
    font-size: 16.6px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 28.15px !important;
  }
}
`;
  class y {
    constructor() {
      this.init();
    }
    init() {
      this.changeCopy(), this.initStyles(), this.addRating(), this.addQuote();
    }
    addQuote() {
      const n = (
        /* HTML */
        `
      <div class="crs-quote">
        <div class="crs-quote__text">Feel so much more confident with my babies sleep and winding techniques!</div>
      </div>
    `
      ), e = document.querySelector(".et_pb_section:has(h1)");
      e == null || e.insertAdjacentHTML("beforeend", n);
    }
    async addRating() {
      const [n, e] = await v();
      if (n) {
        console.error(n);
        return;
      }
      const c = e.review_count, o = (
        /* HTML */
        `
      <div class="crs-reviews">
        <div class="crs-reviews__rating">
          <span class="crs-reviews__average">${e.average_rating}</span>
          <span class="crs-reviews__stars"
            ><img src="${h}/img/stars.webp" alt="" width="114" height="22" loading="lazy"
          /></span>
        </div>
        <div class="crs-reviews__total">Based on ${c} reviews</div>
      </div>
    `
      ), s = document.querySelector(".et_pb_module:has(h1)");
      s == null || s.insertAdjacentHTML("beforebegin", o);
    }
    changeCopy() {
      const n = document.querySelector("article h2");
      n && (n.textContent = "Helping parents and babies get better sleep");
    }
    initStyles() {
      const n = document.createElement("style");
      n.textContent = w, document.head.appendChild(n);
    }
  }
  _({
    name: "Improve HP to PDP progression rate",
    dev: "OS"
  }), m("courses_on_hp");
  class S {
    constructor() {
      this.init();
    }
    init() {
      location.pathname === "/" && (new y(), new b());
    }
  }
  new S();
})();
