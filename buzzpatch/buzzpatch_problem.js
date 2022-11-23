let problemStart = setInterval(() => {
  if (document.querySelector("#flowers")) {
    clearInterval(problemStart)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Problem based layout bp`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Problem based layout bp`,
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
              font-weight: 700;
              font-family: "Roboto", sans-serif !important;
          }
           .buzzpatch_problems h2 span.accent_color{
              font-family: 'DINEngschrift LT', sans-serif !important;
              font-weight: 400;
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
              font-family: "Roboto", sans-serif !important;
              font-weight: 400;
              font-size: 16px !important;
              line-height: 150% !important;
              letter-spacing: 0 !important;
              color: #0C0B0B;
              margin: 0;
           }
           .buzzpatch_accardion_link p span{
              font-weight: 700 !important;
              font-family: "Roboto", sans-serif !important;
           }
           .buzzpatch_accardion_link > span{
              position: relative;
              background: #FFEBF2;
              border-radius: 60px;
              width: 24px;
              height: 24px;
              margin-left: 10px;
              padding: 12px;
           }
          .buzzpatch_accardion_link > span::before{
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
              font-family: "Roboto", sans-serif !important;
              font-weight: 400;
              font-size: 16px !important;
              letter-spacing: 0 !important;
              line-height: 150% !important;
              color: #212529;
              margin: 0;
           }
           .buzzpatch_accardion_lists p span{
             font-weight: 700 !important;
             font-family: "Roboto", sans-serif !important;
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
              font-size: 18px;
              line-height: 120%;
              letter-spacing: .015em;
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
          <li class="buzzpatch_accardion_block" data-visability='1'>
            <div class="buzzpatch_accardion_link">
              <p>I want my <span>kids/grandkids protected from mosquito bites</span> at all times</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists" data-visability-open='1'>
              <div>
                <p>With BuzzPatch, keeping your child protected from mosquitoes at all times becomes as easy as putting a sticker on them.</p>
                <p>BuzzPatch will work even if your child spends a lot of time outdoors or encounters a lot of mosquitoes, and remains effective for up to 12 hours.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="1">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block" data-visability='2'>
            <div class="buzzpatch_accardion_link">
              <p><span>My child is sensitive and/or allergic to mosquito bites,</span> and needs an effective, <span>soy-free,</span> and allergen-free anti-mosquito solution</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists" data-visability-open='2'>
              <div>
                <p>Unlike other mosquito repellents, <span>BuzzPatch uses a natural soy-free formula</span> to disrupt mosquitoes’ sensory organs, effectively keeping your child hidden from mosquitoes so that they won’t be bitten.</p>
                <p>For children who are sensitive or allergy prone, just a single mosquito bite can be all it takes to ruin their day.</p>
                <p>Fortunately, BuzzPatch can save your child from bites, scratches, swelling and infections, by repelling mosquitoes naturally.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="2">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block" data-visability='3'>
            <div class="buzzpatch_accardion_link">
              <p>I am looking for a <span>chemical-free, natural, and organic anti-mosquito solution</span> that is safe for regular use</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists" data-visability-open='3'>
              <div>
                <p>Kids nowadays face more chemicals, artificial ingredients, and pollutants than ever. Most repellents add to the problem by exposing your child to additional toxins and chemicals.</p>
                <p>Fortunately, unlike most other repellent solutions, BuzzPatch uses natural ingredients to shield your child from mosquitoes and prevent bites.</p>
                <p>Made with your kids in mind. Safe to use. No creams or sprays.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="3">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block" data-visability='4'>
            <div class="buzzpatch_accardion_link">
              <p><span>My child dislikes putting on sprays,</span> so I’m looking for an effective alternative</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists" data-visability-open='4'>
              <div>
                <p>When your child doesn't like sprays, it's usually because of the smell, the sticky residue it leaves behind, or because their lungs are sensitive to the chemical clouds produced.</p>
                <p>Either way, you need a new solution that works without having to spray chemicals all over your kids.</p>
                <p>Fortunately, BuzzPatch operates without any irritant sprays or creams. Simply stick it onto a piece of clothing, and you'll have natural protection for your child for up to 12 hours.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="4">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block" data-visability='5'>
            <div class="buzzpatch_accardion_link">
              <p>I am looking for an anti-mosquito <span>solution suitable for both kids and adults</span></p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists" data-visability-open='5'>
              <div>
                <p>BuzzPatch is a chemical-free and organic mosquito repellent that works for everyone - regardless of age.</p>
                <p>Simply apply the patch, and you'll be protected from nearby mosquitoes.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="5">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block" data-visability='6'>
            <div class="buzzpatch_accardion_link">
              <p><span>I am planning to travel/go on vacation/to a camp,</span> so I need a portable and effective anti-mosquito solution</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists" data-visability-open='6'>
              <div>
                <p>If you're travelling, the last thing you want is a spray or cream that explodes and leaks chemicals all over your luggage, staining clothes and damaging valuables.</p>
                <p>Fortunately, BuzzPatch is portable, and you can even leave it in your pocket without any leaking, exploding or staining.</p>
                <p>Easy-to-use, made with kids in mind, and natural, chemical-free ingredients.</p>
                <a href="#getNow" class="buzzpatch_accardion_btn" data-btn="5">GET Buzzpatch</a>
              </div>
            </div>
          </li>
          <li class="buzzpatch_accardion_block" data-visability='7'>
            <div class="buzzpatch_accardion_link">
              <p><span>I'm planning an outdoor event</span> and need protection for me/my family</p>
              <span></span>
            </div>
            <div class="buzzpatch_accardion_lists" data-visability-open='7'>
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

    document.head.insertAdjacentHTML('beforeend', `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`)
    document.head.insertAdjacentHTML("beforeend", problemStyle)
    document.querySelector("#flowers").insertAdjacentHTML("afterend", problemHtml)

    if (document.querySelector(".buzzpatch_accardion")) {
      let obs = new IntersectionObserver(visibility, {
        threshold: 1
      })

      obs.observe(document.querySelector('.buzzpatch_problems'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="1"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="2"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="3"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="4"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="5"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="6"]'))
      obs.observe(document.querySelector('.buzzpatch_accardion li[data-visability="7"]'))

      function visibility(entries) {
        entries.forEach(i => {
          if (i.isIntersecting) {
            if (i.target.classList.contains('buzzpatch_problems')) {
              pushDataLayer('Visibility block Mosquito bite problems')
            }
            if (i.target.getAttribute('data-visability') === "1") {
              pushDataLayer(`Visibility block ${i.target.getAttribute('data-visability')}`)
            }
            if (i.target.getAttribute('data-visability') === "2") {
              pushDataLayer(`Visibility block ${i.target.getAttribute('data-visability')}`)
            }
            if (i.target.getAttribute('data-visability') === "3") {
              pushDataLayer(`Visibility block ${i.target.getAttribute('data-visability')}`)
            }
            if (i.target.getAttribute('data-visability') === "4") {
              pushDataLayer(`Visibility block ${i.target.getAttribute('data-visability')}`)
            }
            if (i.target.getAttribute('data-visability') === "5") {
              pushDataLayer(`Visibility block ${i.target.getAttribute('data-visability')}`)
            }
            if (i.target.getAttribute('data-visability') === "6") {
              pushDataLayer(`Visibility block ${i.target.getAttribute('data-visability')}`)
            }
            if (i.target.getAttribute('data-visability') === "7") {
              pushDataLayer(`Visibility block ${i.target.getAttribute('data-visability')}`)
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

      const headerOffset = 100;
      const elementPosition = this.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    })

    pushDataLayer("loaded")
    clarity("set", "problem_based_layout_bp", "variant_1")
  }
}, 10)
