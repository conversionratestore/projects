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
            eventCategory: `Exp: Sleepypatch: BA test with old slide in flow`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(actionDataLayer);
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Sleepypatch: BA test with old slide in flow`,
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
            background: linear-gradient(180deg,#FFFFFF 10%,#F9F8F6 171.82%);
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
        body.slide{
            overflow-y: visible !important;
        }
        .new_img_wrap{
          position: relative;
        }
        .prod_free_shipping{
          position: absolute;
          z-index: 1;
          width: 51px!important;
          height: auto!important;
          top: -11px;
          right: 29px;
          left: unset;
          transform: rotate(-10deg);
          border-radius: 50px;
        }
        body #purchase .prices{
          margin: 0 !important; 
        }
        body .bestseller{
          border-radius: 2px !important;
        }
      </style>
      `;

      document.head.insertAdjacentHTML("beforeend", sleepyPatchesStyle);
      document.querySelector(".sidebar")?.remove();

      if (!document.querySelector(".package .img_var_pack")) {
        document.querySelector(".package .ptext")?.insertAdjacentHTML(
          "afterend",
          `<div class="new_img_wrap">
            <img data-sizes="auto" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/products/SleepyPatch3Pack.jpg?v=1680784129&width=600" width="200" class="js-mobile lazyload img_var_pack"/>
          <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/Free_Shipping_B.svg?v=5006052283570441635" class="prod_free_shipping" width="64" height="64">
            </div>`
        );
      }

      document.querySelectorAll("#open").forEach((el) => {
        el.href = "#getNow";
      });

      document.querySelectorAll("#open").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`click >>>>>>>>>>>>>>>>>>>`, e.target.getAttribute("href"));
          let href = e.target.getAttribute("href").substring(1);

          const scrollTarget = document.getElementById(href);

          const topOffset = 0;
          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
        });
      });

      document.querySelectorAll('[name="radios"]').forEach((i) => {
        i.addEventListener("click", (e) => {
          if (e.target.checked) {
            switch (e.target.value) {
              case "39836565143596":
                document.querySelector(".package .img_var_pack").src = "https://cdn.shopify.com/s/files/1/0387/0749/4956/products/SleepyPatch1Pack.jpg?v=1680784129&width=600";
                console.log(e.target.value, `!!!!!!!!!!!!!!!!!!!checked 1`);
                break;
              case "39836565176364":
                document.querySelector(".package .img_var_pack").src = "https://cdn.shopify.com/s/files/1/0387/0749/4956/products/SleepyPatch2Pack.jpg?v=1680784129&width=600";
                console.log(e.target.value, `!!!!!!!!!!!!!!!!!!!checked 2`);
                break;
              case "39836565110828":
                document.querySelector(".package .img_var_pack").src = "https://cdn.shopify.com/s/files/1/0387/0749/4956/products/SleepyPatch3Pack.jpg?v=1680784129&width=600";
                console.log(e.target.value, `!!!!!!!!!!!!!!!!!!!checked 3`);
                break;
              case "39836565209132":
                document.querySelector(".package .img_var_pack").src = "https://cdn.shopify.com/s/files/1/0387/0749/4956/products/SleepyPatch4Pack.jpg?v=1680784129&width=600";
                console.log(e.target.value, `!!!!!!!!!!!!!!!!!!!checked 4`);
                break;
              default:
                document.querySelector(".package .img_var_pack").src = "https://cdn.shopify.com/s/files/1/0387/0749/4956/products/SleepyPatch3Pack.jpg?v=1680784129&width=600";
                console.log(e.target.value, `!!!!!!!!!!!!!!!!!!!checked default`);
                break;
            }
          }
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
