let problemStart = setInterval(() => {
  if (document.querySelector("#children-safe")) {
    clearInterval(problemStart)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Problem based layout mp`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Problem based layout mp`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let problemStyle = /*html */ `
    <style>
        .magicpatch_problems{
            background: #F9F8F6;
            padding: 56px 15px;
        }
        .magicpatch_problems h2{
            font-weight: 500;
            font-size: 22px;
            line-height: 130%;
            color: #0C0B0B;
            margin: 0 -15px 28px;
            text-align: center;
            text-transform: initial;
        }
        .magicpatch_problems h2 span{
            display: block;
            font-weight: 600;
            font-family: "Roboto", sans-serif;
        }
         .magicpatch_problems h2 span.accent_color{
            font-family: 'DINEngschrift LT', sans-serif;
            font-weight: 400;
            font-size: 40px;
            line-height: 110%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #FFFFFF;
            background: #FF3C7F;
            margin: 8px 0;
            padding: 4px 0;
         }
         .magicpatch_accardion{
            list-style-type: none;
            margin: 0;
         }
         li.magicpatch_accardion_block{
            position: relative;
            background: #FFFFFF;
            border: 1px solid rgba(255, 60, 127, 0.1);
            border-radius: 10px;
            padding: 16px 20px;
            cursor: pointer;
         }
         li.magicpatch_accardion_block::before{
            position: absolute;
            content: '';
            top: 26px;
            left: -2.5px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #FF3C7F;
         }
         li.magicpatch_accardion_block + li{
            margin-top: 8px;
         }
         .magicpatch_accardion_link{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
         }
        .magicpatch_accardion_link p{
            font-weight: 400;
            font-size: 16px !important;
            line-height: 130% !important;
            color: #0C0B0B;
            margin: 0;
         }
         .magicpatch_accardion_link span{
            position: relative;
            background: rgba(255, 60, 127, 0.1);
            border-radius: 60px;
            width: 24px;
            height: 24px;
            margin-left: 15px;
            padding: 12px;
         }
        .magicpatch_accardion_link span::before{
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: url(https://conversionratestore.github.io/projects/buzzpatch/img/check_magic.svg) no-repeat center center;
            top: 0;
            left: 0;
        }
        .magicpatch_accardion_link.active span::before {
            transform: rotate(180deg);
        }
         .magicpatch_accardion_lists{
            display: none;
            margin-top: 10px;
            /*
            max-height: 0;
            overflow: hidden;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;
            opacity: 0;
            */
         }
         .magicpatch_accardion_lists > div{
            border-top: 1px solid rgba(255, 60, 127, 0.1);
            padding-top: 16px;
         }
         .magicpatch_accardion_lists p{
            font-weight: 400;
            font-size: 16px !important;
            line-height: 150% !important;
            color: #212529;
            margin: 0;
         }
         .magicpatch_accardion_lists p + p{
            margin-top: 15px;
         }
         .magicpatch_accardion_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 66px;
            background: #FF3C7F;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
            border-radius: 52px;
            font-family: 'DINEngschrift LT', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 120%;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-top: 16px;
         }
         .magicpatch_accardion_btn:hover{
            text-decoration: unset;
            color: #FFFFFF;
         }
        .active_block {
            display: none;
        }
        @media (max-width: 320px) {
            .js-main img{
                max-width: 250px !important;
            }
            .magicpatch_problems h2{
                font-size: 20px;
            }
            .magicpatch_problems h2 span.accent_color{
                font-size: 34px;
            }
            .magicpatch_accardion_link p,
            .magicpatch_accardion_lists p{
                font-size: 13px !important;
            }
        }
        @media (max-width: 280px) {
            .magicpatch_problems h2{
                font-size: 20px;
            }
            .magicpatch_problems h2 span.accent_color{
                font-size: 30px;
            }
            .magicpatch_accardion_link p,
            .magicpatch_accardion_lists p{
                font-size: 10px !important;
            }
        }
    </style>
    `

    let problemHtml = /*html */ `
    <div class="magicpatch_problems">
      <h2>
        <span>What</span>
        <span class="accent_color">ITCH RELIEF PROBLEMS</span>
        <span>are you looking to solve?</span>
      </h2>

      <ul class="magicpatch_accardion">
        <li class="magicpatch_accardion_block">
          <div class="magicpatch_accardion_link">
            <p><strong>My kids need an instant solution</strong> so they can stop scratching</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>
                Scratches worsen the injury, and can even lead to infection (especially if your children usually play outside). Fortunately, Magic Patch helps keeps the bite
                covered, protected, and free from harmful bacteria, dirt or irritants.
              </p>
              <p>Simply place a Magic Patch on a bite and the itch disappears. Relief from itch within 30-60 seconds!</p>
              <p>
                Don't let bug bites and stings slow your kids down. These itch patches quickly stop the discomfort and itching and let your family get back to the outdoors and fun!
              </p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="1">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block">
          <div class="magicpatch_accardion_link">
            <p>Itch relief sprays and creams have <strong>short term lasting effects</strong></p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>Sprays and creams can be effective, however their effects only last for a short period of time - making them an unreliable and cost-inefficient solution.</p>
              <p>
                However, savvy shoppers now have a more reliable, longer-lasting, and wallet-friendly solution in Magic Patches, which provide relief as long as they stay on the
                skin (for up to 7 days) and stay effective in water.
              </p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="2">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block">
          <div class="magicpatch_accardion_link">
            <p>Most itch relief solutions contain <strong>chemicals and toxins</strong> harmful to children</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>
                Kids nowadays face more chemicals, artificial ingredients, and pollutants than ever. Most itch relief solutions will just add to the problem by exposing your child
                to even more toxins and chemicals.
              </p>
              <p>
                Fortunately, unlike most other itch relief solutions, Magic Patch uses grid shape technology that mechanically adjusts the skin to help the lymphatic system drain
                the saliva injected by insects, relieving the itch response naturally and drug-free!
              </p>
              <p>
                Made with your kids in mind. Safe to use anywhere on the skin. No creams, no chemicals, just natural itch relief from mosquito and insect bites. A perfect option
                for sensitive skin.
              </p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="3">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block">
          <div class="magicpatch_accardion_link">
            <p><strong>Allergic reactions</strong> to existing products on the market</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>MagicPatches are hypallergenic, making them the ideal solution for any parent that is looking to avoid triggering their child’s allergies.</p>
              <p>In comparison, most creams and sprays contain irritant ingredients.</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="4">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block">
          <div class="magicpatch_accardion_link">
            <p><strong>My child can’t sleep</strong> because bug bites bother him</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>An irritated bug bite can easily disturb your child’s sleep and keep you both awake at night.</p>
              <p>
                Fortunately, Magic Patch’s unique Grid-Relief system mechanically drains bug bites - reducing itching, and giving your child the relief they need to settle down
                into a good night’s sleep.
              </p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="5">Get MagicPatch</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", problemStyle)
    document.querySelector("#children-safe").insertAdjacentHTML("beforebegin", problemHtml)

    if (document.querySelector(".magicpatch_accardion")) {
      const options = {
        root: null,
        threshold: 0.9,
      }

      let observerNewHeader = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return
        pushDataLayer(`Visibility block itch relief problems`)
        observerNewHeader.disconnect()
      })

      observerNewHeader.observe(document.querySelector(".magicpatch_accardion"), options)
    }

    $(document).ready(function () {
      $(".magicpatch_accardion_lists").on("click", "a", function (event) {
        event.preventDefault()

        pushDataLayer("Get Magicpatch", `${event.target.closest("li").querySelector(".magicpatch_accardion_link p").textContent}`)

        let id = $(this).attr("href"),
          top = $(id).offset().top - 10

        $("body,html").animate({ scrollTop: top }, 1000)
      })
    })

    // accardion
    // const accardionToggle = (slideMenu) => (e) => {
    //   slideMenu.forEach((links) => {
    //     e.preventDefault()
    //     const hidePanel = links.nextElementSibling
    //     if (links === e.currentTarget) {
    //       e.currentTarget.classList.toggle("active")
    //       if (e.currentTarget.classList.contains("active")) {
    //         pushDataLayer("Open block", `${e.currentTarget.querySelector("p").textContent}`)
    //       } else {
    //         pushDataLayer("Close block", `${e.currentTarget.querySelector("p").textContent}`)
    //       }

    //       hidePanel.classList.toggle("active_block")

    //       //   const scrollTarget = hidePanel

    //       //   let topOffset = 175

    //       //   if (innerWidth <= 320) {
    //       //     topOffset = 160
    //       //   }

    //       //   const elementPosition = scrollTarget.getBoundingClientRect().top
    //       //   const offsetPosition = elementPosition - topOffset

    //       //   window.scrollBy({
    //       //     top: offsetPosition,
    //       //     behavior: "smooth",
    //       //   })
    //     } else {
    //       links.classList.remove("active")
    //       hidePanel.classList.remove("active_block")
    //     }
    //   })
    // }

    // const slideMenu = document.querySelectorAll(".magicpatch_accardion_link")

    // slideMenu.forEach((links) => {
    //   links.addEventListener("click", accardionToggle(slideMenu))
    // })

    $(".magicpatch_accardion_link").click(function (e) {
      $(this).toggleClass("active")
      $(this).next(".magicpatch_accardion_lists").slideToggle()
      if ($(".magicpatch_accardion_link").not(this)) {
        $(".magicpatch_accardion_link").not(this).next(".magicpatch_accardion_lists").css("display", "none")
        $(".magicpatch_accardion_link").not(this).removeClass("active")
      }

      if (e.currentTarget.classList.contains("active")) {
        pushDataLayer("Open block", `${e.currentTarget.querySelector("p").textContent}`)
      } else {
        pushDataLayer("Close block", `${e.currentTarget.querySelector("p").textContent}`)
      }

      const scrollTarget = $(this).next(".magicpatch_accardion_lists")[0]

      let topOffset = 175

      if (innerWidth <= 320) {
        topOffset = 160
      }

      const elementPosition = scrollTarget.getBoundingClientRect().top
      const offsetPosition = elementPosition - topOffset

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      })
    })

    pushDataLayer("loaded")
    clarity("set", "problem_based_layout_mp", "variant_1")
  }
}, 10)
