let problemStart = setInterval(() => {
    if (document.querySelector("#flowers")) {
        clearInterval(problemStart)

        function pushDataLayer(actionDataLayer, labelDataLayer) {
            window.dataLayer = window.dataLayer || []
            if (labelDataLayer) {
                console.log(actionDataLayer + " : " + labelDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: - Personalized content intent`,
                    eventAction: `${actionDataLayer}`,
                    eventLabel: `${labelDataLayer}`,
                })
            } else {
                console.log(actionDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: - Personalized content intent`,
                    eventAction: `${actionDataLayer}`,
                })
            }
        }

        let problemStyle = /*html */ `
      <style>
          .buzzpatch_problems{
              background: #FFFFFF;
              padding: 35px 20px 0;
          }
          .buzzpatch_problems h2{
              font-weight: 500;
              font-size: 22px;
              line-height: 130%;
              color: #0C0B0B;
              margin: 0 -20px 30px;
              text-align: center;
              text-transform: initial;
          }
          .buzzpatch_problems h2 span{
              display: block;
              font-weight: 600;
              font-family: "Roboto", sans-serif;
          }
           .buzzpatch_problems h2 span.accent_color{
              font-family: 'DINEngschrift LT', sans-serif;
              font-weight: 700;
              font-size: 36px;
              line-height: 43px;
              letter-spacing: 0.02em;
              text-transform: uppercase;
              color: #FFFFFF;
              background: #FF3C7F;
              margin: 8px 0;
              padding: 4px 0;
           }
           .buzzpatch_accardion{
              list-style-type: none;
              margin: 0;
           }
           li.buzzpatch_accardion_block{
              position: relative;
              background: #FFFFFF;
              border: 1px solid #ECECEC;
              border-radius: 10px;
              padding: 10px 10px 10px 20px;
              cursor: pointer;
           }
           li.buzzpatch_accardion_block.active{
                border: 1px solid rgba(255, 60, 127, 0.1);
            }
           li.buzzpatch_accardion_block::before{
              position: absolute;
              content: '';
              top: 18px;
              left: -2.5px;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background: #FF3C81;
           }
           li.buzzpatch_accardion_block + li{
              margin-top: 15px;
           }
           .buzzpatch_accardion_link{
              display: flex;
              align-items: center;
              justify-content: flex-start;
           }
          .buzzpatch_accardion_link p{
              font-weight: 400;
              font-size: 16px !important;
              line-height: 150% !important;
              color: #0C0B0B;
              margin: 0;
           }
           .buzzpatch_accardion_link span{
              position: relative;
              background: #FFEBF2;
              border-radius: 60px;
              width: 24px;
              height: 24px;
              margin-left: 10px;
              padding: 12px;
           }
          .buzzpatch_accardion_link span::before{
              position: absolute;
              content: "";
              width: 100%;
              height: 100%;
              background: url(https://conversionratestore.github.io/projects/buzzpatch/img/check_magic.svg) no-repeat center center;
              top: 0;
              left: 0;
          }
          .buzzpatch_accardion_link.active span::before {
              transform: rotate(180deg);
          }
           .buzzpatch_accardion_lists{
              display: none;
              margin-top: 16px;
           }
           .buzzpatch_accardion_lists > div{
              border-top: 1px solid rgba(255, 60, 127, 0.1);
              padding-top: 16px;
           }
           .buzzpatch_accardion_lists p{
              font-weight: 400;
              font-size: 16px !important;
              line-height: 150% !important;
              color: #212529;
              margin: 0;
           }
           .buzzpatch_accardion_lists p + p{
              margin-top: 15px;
           }
           .buzzpatch_accardion_btn{
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
           .buzzpatch_accardion_btn:hover{
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
              .buzzpatch_problems h2{
                  font-size: 20px;
              }
              .buzzpatch_problems h2 span.accent_color{
                  font-size: 34px;
              }
              .buzzpatch_accardion_link p,
              .buzzpatch_accardion_lists p{
                  font-size: 13px !important;
              }
          }
          @media (max-width: 280px) {
              .buzzpatch_problems h2{
                  font-size: 20px;
              }
              .buzzpatch_problems h2 span.accent_color{
                  font-size: 30px;
              }
              .buzzpatch_accardion_link p,
              .buzzpatch_accardion_lists p{
                  font-size: 10px !important;
              }
          }
      </style>
      `

        let problemHtml = /*html */ `
      <div class="buzzpatch_problems">
        <h2>
          <span>What</span>
          <span class="accent_color">Mosquito bite problems</span>
          <span>are you looking to solve?</span>
        </h2>
  
        <ul class="buzzpatch_accardion">
          <li class="buzzpatch_accardion_block">
            <div class="buzzpatch_accardion_link">
              <p>I want <strong>my kids/grandkids protected from mosquito bites</strong> at all times</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists">
              <div>
                <p>
                With BuzzPatch, keeping your child protected from mosquitos at all times becomes as easy as putting a sticker on them.
                </p>
                <p>The BuzzPatch will work even if your child spends a lot of time outdoors or encounters a lot of mosquitos, and remains effective for up to 12 hours.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="1">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block">
            <div class="buzzpatch_accardion_link">
              <p><strong>My child is sensitive and/or allergic to mosquito bites,</strong> and needs an effective, <strong>soy-free,</strong> and allergen-free anti-mosquito solution</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists">
              <div>
                <p>Unlike other mosquito repellents, <strong>BuzzPatch uses a natural soy-free formula</strong> to disrupt mosquitoes’ sensory organs, effectively keeping your child hidden from mosquitoes so that they won’t be bitten.</p>
                <p>For children who are sensitive or allergy prone, just a single mosquito bite can be all it takes to ruin their day.</p>
                <p>Fortunately, BuzzPatch can save your child from bites, scratches, swelling and infections, by repelling mosquitoes naturally.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="2">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block">
            <div class="buzzpatch_accardion_link">
              <p>I am looking for a <strong>chemical-free, natural, and organic anti-mosquito solution</strong> that is safe for regular use</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists">
              <div>
                <p>Kids nowadays face more chemicals, artificial ingredients, and pollutants than ever. Most repellents add to the problem by exposing your child to additional toxins and chemicals.</p>
                <p>Fortunately, unlike most other repellent solutions, BuzzPatch uses natural ingredients to shield your child from mosquitoes and prevent bites.</p>
                <p>Made with your kids in mind. Safe to use. No creams or sprays.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="3">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block">
            <div class="buzzpatch_accardion_link">
              <p><strong>My child dislikes putting on sprays,</strong> so I’m looking for an effective alternative</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists">
              <div>
                <p>When your child doesn't like sprays, it's usually because of the smell, the sticky residue it leaves behind, or because their lungs are sensitive to the chemical clouds produced.</p>
                <p>Either way, you need new a solution that works without having to spray chemicals all over your kids.</p>
                <p>Fortunately, BuzzPatch operates without any irritant sprays or creams. Simply stick it onto a piece of clothing, and you'll have natural protection for your child for up to 12 hours.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="4">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block">
            <div class="buzzpatch_accardion_link">
              <p>I am looking for an anti-mosquito <strong>solution suitable for both kids and adults</strong></p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists">
              <div>
                <p>BuzzPatch is a chemical-free and organic mosquito repellent that works for everyone - regardless of age.</p>
                <p>Simply apply the patch, and you'll be protected from nearby mosquitos.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="5">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block">
            <div class="buzzpatch_accardion_link">
              <p><strong>I am planning to travel/go on vacation/in a camp,</strong> so I need a portable and effective anti-mosquito solution</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists">
              <div>
                <p>If you're travelling, the last thing you want is a spray or cream that explodes and leaks chemicals all over your luggage, staining clothes and damaging valuables.</p>
                <p>Fortunately, BuzzPatch is portable, and you can even leave it in your pocket without any leaking, exploding or staining. </p>
                <p>Easy-to-use, made with kids in mind, and natural, chemical-free ingredients.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="5">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block">
            <div class="buzzpatch_accardion_link">
              <p><strong>I'm planning an outdoor event</strong> and need protection for me/my family</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists">
              <div>
                <p>Keeping outdoor events bug bite free is pretty easy when you have BuzzPatch on your side.</p>
                <p>Simply keep a tray of BuzzPatches in a visible location so that your guests can apply them as they arrive, and stay protected for the entire duration of your event (up to 12 hours per patch).</p>
                <p>Better still, BuzzPatches are spray-free, cream-free, and chemical-free, so even if your guests have allergies, breathing issues, or skin sensitivities, they can still stay protected thanks to BuzzPatches natural formula!</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="5">GET Buzzpatch</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      `

        document.head.insertAdjacentHTML("beforeend", problemStyle)
        document.querySelector("#flowers").insertAdjacentHTML("afterend", problemHtml)

        if (document.querySelector(".buzzpatch_accardion")) {
            let obs = new IntersectionObserver(visibility, {
                threshold: 0.9
            })

            obs.observe(document.querySelector('.buzzpatch_accardion'))

            function visibility(entries) {
                entries.forEach(i => {
                    if (i.isIntersecting) {
                        if (i.target.classList.contains('buzzpatch_accardion')) {
                            pushDataLayer('Visibility block Mosquito bite problems')
                        }

                        obs.unobserve(i.target)
                    }
                })
            }
        }

        $(document).ready(function () {
            $(".buzzpatch_accardion_lists").on("click", "a", function (event) {
                event.preventDefault()

                pushDataLayer("Click on Get Buzzpatch button", `${event.target.closest("li").querySelector(".buzzpatch_accardion_link p").textContent}`)

                let id = $(this).attr("href"),
                    top = $(id).offset().top - 10

                $("body,html").animate({ scrollTop: top }, 1000)
            })
        })



        $(".buzzpatch_accardion_link").click(function (e) {
            $(this).toggleClass("active")
            $(this).closest('li').toggleClass("active")
            $(this).next(".buzzpatch_accardion_lists").slideToggle()
            if ($(".buzzpatch_accardion_link").not(this)) {
                $(".buzzpatch_accardion_link").not(this).next(".buzzpatch_accardion_lists").css("display", "none")
                $(".buzzpatch_accardion_link").not(this).removeClass("active")
                $(".buzzpatch_accardion_link").not(this).closest('li').removeClass("active")
            }

            if (e.currentTarget.classList.contains("active")) {
                pushDataLayer("Open block", `${e.currentTarget.querySelector("p").textContent}`)
            } else {
                pushDataLayer("Close block", `${e.currentTarget.querySelector("p").textContent}`)
            }

            const scrollTarget = $(this).next(".buzzpatch_accardion_lists")[0]

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
        clarity("set", "personalized_content", "variant_1")
    }
}, 10)
