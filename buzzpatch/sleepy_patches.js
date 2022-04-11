if (window.innerWidth <= 768) {
  let startFunkMobSleepy = setInterval(() => {
    if (document.querySelector("#flowers")) {
      clearInterval(startFunkMobSleepy)

      let scriptPopper = document.createElement("script")
      scriptPopper.src = "https://unpkg.com/popper.js@1"
      scriptPopper.async = false
      document.body.appendChild(scriptPopper)

      let scriptTippy = document.createElement("script")
      scriptTippy.src = "https://unpkg.com/tippy.js@5"
      scriptTippy.async = false
      document.body.appendChild(scriptTippy)

      // event
      function pushDataLayer(actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || []
        if (labelDataLayer) {
          console.log(actionDataLayer + " : " + labelDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Upsell hypothesis 1.V2`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Upsell hypothesis 1.V2`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      //style
      let sleepyPatchesStyle = /*html */ `
          <style>
               .js-mobile.effectiveness,
               #flowers .wave-bg,
               .flowers-bg,
               #flowers .container .row:nth-child(3){
                display: none;
            }

            #flowers .container{
                padding: 0 28px;
            }

            #flowers .container .row:nth-child(2){
                margin: 0;
            }

            #flowers .container .row:nth-child(2) > div{
                padding: 0;
            }

            #flowers .container .row:nth-child(1) > div:last-child{
                padding-left: 0;
            }

            #flowers .container .row:nth-child(1) > div:first-child{
                padding-right: 0;
            }

            .tippy-tooltip{
                background: #FFFFFF;
                border-radius: 2px;
                color: #212529;
                padding: 12px;
                box-shadow: 0px 2px 4px rgb(12 11 11 / 10%), 0px 12px 32px rgb(0 0 0 / 5%);
                max-width: 252px !important;
            }

            .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                border-bottom-color: #FFFFFF;
            }

              section.new_section_sleepy{
                padding: 0;
              }

              .tippy-content {
                padding: 0;
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 130%;
                color: #212529;
            }

              .container_var {
                width: 90%;
                max-width: 1100px;
                margin: 0 auto;
             }

              .new_section_sleepy h2{
                font-family: "Roboto", sans-serif;
                font-weight: 700;
                font-size: 22px;
                line-height: 118%;
                color: #0C0B0B;
                margin: 0;
                text-transform: unset;
              }

              .new_section_sleepy p{
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 18px !important;
                line-height: 133% !important;
                color: #515151;
                margin: 0;
              }

              .tooltip_bar{
                background: #ECEEF0;
                padding: 0 0 20px;
              }
              
              .tooltip_bar .container_var{
                  width: 85%;
              }

              .not_addictive{
                background: #FFFFFF url(https://conversionratestore.github.io/projects/buzzpatch/img/not_addictive_bgr.png) top no-repeat;
                padding: 97px 0 37px;
                background-size: contain;
              }

              .safe_for_kids{
                background: #F1F3F4 url(https://conversionratestore.github.io/projects/buzzpatch/img/old_adults_bgr.png) top no-repeat;
                padding: 80px 0 24px;
                background-size: contain;
              }

              .how_to_use{
                background: #FFFFFF url(https://conversionratestore.github.io/projects/buzzpatch/img/how_to_use_bgr.png) top no-repeat;
                padding: 92px 0 41px;
                background-size: contain;
              }

              .inside_pack{
                background: #FFFFFF url(https://conversionratestore.github.io/projects/buzzpatch/img/inside_pack_bgr.png) top no-repeat;
                padding: 69px 0 70px;
                background-size: contain;
                text-align: center;
              }

              .not_addictive .container_var div, 
              .safe_for_kids .container_var div{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: 16px;
              }

              .not_addictive .container_var img, 
              .safe_for_kids .container_var img{
                margin-right: 16px;
              }

              .how_to_use .container_var{
                width: 82%;
              }

            .how_to_use .container_var ul{
                margin: 24px 0 0;
              }

              .how_to_use .container_var ul li{
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: flex-start;
              }

              .how_to_use .container_var ul li + li{
                margin-top: 16px;
              }

              .how_to_use .container_var ul li img{
                margin-right: 16px;
                max-width: 60px;
                max-height: 60px;
                height: 100%;
              }

              .inside_pack .container_var .img_wrap{
                margin: 16px 0 60px;
                height: 478px;
              }

              .inside_pack .container_var .img_wrap img{
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

             .inside_pack .container_var a{
                width: 95%;
                height: 65px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                padding: 0;
                font-weight: 700;
                cursor: pointer;
                color: #fff;
                box-shadow: 0 4px 15px 0 rgb(72 67 69 / 51%);
                font-size: 18px;
                letter-spacing: 0.015em;
                font-family: 'Buzz', Roboto, sans-serif;
                text-transform: uppercase;
                background: #0091D7;
                border-radius: 37.5px;
                border: none;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
              }

              .tooltip_bar ul{
                display: flex;
                margin: 0;
                align-items: center;
                justify-content: space-between;
              }

              .tooltip_bar ul li{
                list-style: none;
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .tooltip_bar ul li > div{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 5px;
              }

              .tooltip_bar ul li > div p{
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 14px !important;
                line-height: 171% !important;
                color: #234799;
                margin: 0;
                margin-right: 3px;
              }

               @media (max-width: 320px){
                    .tooltip_bar ul li img{
                        width: 60px;
                    }

                   .tooltip_bar ul li > div p{

                       font-size: 10px !important;
                   }

                   .tooltip_bar ul li > div img{
                       width: 14px;
                   }
               }
              
          </style>
          `

      //
      let sleepyPatches = /*html */ `
          <section class="new_section_sleepy">
              <div class="tooltip_bar">
                  <div class="container_var">
                      <ul></ul>
                  </div>
              </div>

            <div class="not_addictive">
                <div class="container_var">
                    <div>
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/not_addictive.png" alt="ban on pills">
                        <h2>Not addictive</h2>
                    </div>
                    <p>Comparing to melatonin, SleepyPatch is not addictive and does not have any side effects. It’s not a medcine.</p>
                </div>
            </div>
    
            <div class="safe_for_kids">
                <div class="container_var">
                    <div>
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/old_adults.png" alt="woman and girl">
                        <h2>Safe for kids 2+ <br> years old & adults</h2>
                    </div>
                    <p>100% natural components and medical adhesive are safe for even the littlest ones.</p>
                </div>
            </div>
    
            <div class="how_to_use">
                <div class="container_var">
                    <h2>How to use SleepyPatch</h2>
                    <ul>
                        <li>
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/how_to_use1.jpg" alt="patch">
                            <p>Take 1 patch. <br> Use 1 patch per night.</p>
                        </li>
                        <li>
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/how_to_use2.jpg" alt="children's jumpsuit">
                            <p>Stick a patch to your kids <br> pyjamas, not on skin.</p>
                        </li>
                        <li>
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/how_to_use3.jpg" alt="moon and stars">
                            <p>Calm down and fall <br> asleep without a fuss.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="inside_pack">
                <div class="container_var">
                    <h2>What’s inside the pack</h2>
                    <div class="img_wrap">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/inside_pack.jpg" alt="sleepy patch box">
                    </div>
                    <a href="#getNow" class="">GET SLEEPYPATCH</a>
                </div>
            </div>
          </section>
          `

      let arrTooltip = {
        Mandarin: [
          `Mandarin`,
          `Lavender essential oil works by calming the central nervous system and promoting slow-wave sleep, so helping to sleep longer and better.`,
          `https://conversionratestore.github.io/projects/buzzpatch/img/mandarin.png`,
        ],
        Lavender: [
          `Lavender`,
          `Lavender essential oil works by calming the central nervous system and promoting slow-wave sleep, so helping to sleep longer and better.`,
          `https://conversionratestore.github.io/projects/buzzpatch/img/lavender.png`,
        ],
        Marjoram: [
          `Marjoram`,
          `Lavender essential oil works by calming the central nervous system and promoting slow-wave sleep, so helping to sleep longer and better.`,
          `https://conversionratestore.github.io/projects/buzzpatch/img/sweet_marjoram.png`,
        ],
        Vetiver: [
          `Vetiver`,
          `Lavender essential oil works by calming the central nervous system and promoting slow-wave sleep, so helping to sleep longer and better.`,
          `https://conversionratestore.github.io/projects/buzzpatch/img/vetiver.png`,
        ],
      }

      document.head.insertAdjacentHTML("beforeend", sleepyPatchesStyle)
      document.querySelector("#flowers").insertAdjacentHTML("afterend", sleepyPatches)

      // create tooltip
      function setTooltipBar(img, title, tooltip) {
        return ` 
        <li>
            <img src="${img}" alt="${title}">
            <div>
              <p>${title}</p>
              <img data-title="${tooltip}" src="https://conversionratestore.github.io/projects/buzzpatch/img/inform_btn.svg" alt="tooltip icon">
            </div>
        </li>
        `
      }

      for (let key in arrTooltip) {
        if (document.querySelector(".tooltip_bar ul")) {
          document.querySelector(".tooltip_bar ul").insertAdjacentHTML("beforeend", setTooltipBar(arrTooltip[key][2], arrTooltip[key][0], arrTooltip[key][1]))
        }
      }

      let tippyRun = setInterval(() => {
        if (typeof tippy === "function") {
          clearInterval(tippyRun)
          console.log(`hello tippy`)
          document.querySelectorAll(".tooltip_bar ul li img:last-child").forEach((el, index) => {
            console.log(el)
            tippy(el, {
              content: el.getAttribute("data-title"),
              placement: "bottom",
              trigger: "click",
              hideOnClick: true,

              onTrigger(e) {
                pushDataLayer(el.getAttribute("data-title"))
              },
            })
            //   el.addEventListener("mouseover", () => {
            //     action = "hover on tooltipe"
            //     let label = el.closest(".timeline_title").innerText
            //     pushDataLayer(el.getAttribute("data-title"), label)
            //   })
          })
        }
      }, 300)

      // click on btn
      scrolling(".inside_pack .container_var a")

      function scrolling(upSelector) {
        let links = document.querySelectorAll(upSelector),
          speed = 0.5

        links.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault()

            let widthTop = document.documentElement.scrollTop,
              hash = this.hash,
              toBlock = document.querySelector(hash).getBoundingClientRect().top,
              start = null

            requestAnimationFrame(step)

            function step(time) {
              if (start === null) {
                start = time
              }

              let progress = time - start,
                r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

              document.documentElement.scrollTo(0, r)

              if (r != widthTop + toBlock) {
                requestAnimationFrame(step)
              } else {
                location.hash = hash
              }
            }
          })
        })
      }
    }
  }, 10)
}
