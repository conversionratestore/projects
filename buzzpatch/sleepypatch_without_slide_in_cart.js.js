if (window.innerWidth <= 768) {
  let startFunkMobSleepy = setInterval(() => {
    if (document.querySelector("#flowers") && getpack3SalePrice) {
      clearInterval(startFunkMobSleepy);

      function pushDataLayer(actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || [];
        if (labelDataLayer) {
          console.log(actionDataLayer + " : " + labelDataLayer);
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp:Text content`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(actionDataLayer);
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Text content`,
            eventAction: `${actionDataLayer}`,
          });
        }
      }

      let sleepyPatchesStyle = /*html */ `
      <style>
        #purchase .form-horizontal,
        .package .ptext{
            display: block !important;
        }
        body #purchase .magicpatch-packs,
        #getNow .free-shipping-checkout{
            display: none !important;
        }
        #getNow img{
            max-width: 120px;
            margin: 0 auto;
        }
        .night-trial{
            background: #F3F4F5;
        }
        #js-accordion .card-header{
            background: #FFFFFF !important;
        }
        #getNow{
            background: linear-gradient(180deg,#FFFFFF 0%,#F9F8F6 27.82%);
            padding-bottom: 50px;
        }
        #purchase{
            padding-bottom: 0 !important;
            padding-top: 50px !important;
        }
        #faqs {
            background: unset !important;
        }
        body #purchase .js-heading>h2{
            font-weight: 700!important;
            margin-bottom: 0;
        }
        body #getNow .days{
            max-width: 100%;
            margin: 20px auto auto;
        }
        body.slide{
            overflow-y: visible !important;
        }
      </style>
      `;

      document.head.insertAdjacentHTML("beforeend", sleepyPatchesStyle);
      document.querySelector(".sidebar")?.remove();

      if (!document.querySelector(".package .img_var_pack")) {
        document.querySelector(".package .ptext")?.insertAdjacentHTML(
          "afterend",
          `<img
          data-sizes="auto"
          data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepypatch-free-delivery.png?v=1640695454"
          data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepypatch-free-delivery.png?v=1640695454 350w,                                                                                                                                           https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepypatch-free-delivery.png?v=1640695454 900w"
          width="200"
          class="js-mobile lazyload img_var_pack"
        />`
        );
      }

      let s = setInterval(() => {
        if (document.querySelector("#getNow .days")) {
          clearInterval(s);
          console.log(`!!!!!!!!!!!!!!!!!!!!!!!! IMG SRC`);
          document.querySelector("#getNow .days").src = "http://web.archive.org/web/20220710004356im_/https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_600x.png";
          document.querySelector("#getNow .days").srcset = "http://web.archive.org/web/20220710004356im_/https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_600x.png";
        }
      }, 100);

      document.querySelectorAll("#open").forEach((el) => {
        el.href = "#getNow";
      });

      document.querySelectorAll("#open").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`click >>>>>>>>>>>>>>>>>>>`);
        });
      });

      pushDataLayer("loaded");
      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record);

          clarity("set", `new_text_content`, "variant_1");
        }
      }, 200);
    }
  }, 10);
}
