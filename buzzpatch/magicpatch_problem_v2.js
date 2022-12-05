let problemStart = setInterval(() => {
  if (document.querySelector("#children-safe")) {
    clearInterval(problemStart)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Problem based layout mp_v2`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Problem based layout mp_v2`,
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
            justify-content: space-between;
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
        <li class="magicpatch_accardion_block" data-visability='1'>
          <div class="magicpatch_accardion_link">
            <p>My child <strong>gets a lot of bites</strong> when outside</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>
              If your little one is dealing with multiple bug bites, they'll need immediate & long-lasting relief for all areas. And while creams and sprays can work at first, they're short-lived, can make a mess, and leave clothes stained.</p>
              <p>Fortunately, Magic Patches can cover multiple bites (one patch per mosquito bite), provide relief for as long as they stay on the skin (up to 7 days) and stay effective even in water -- all without any mess or harsh chemicals!</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="1">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block" data-visability='2'>
          <div class="magicpatch_accardion_link">
            <p>My child and I <strong>react badly</strong> to mosquitos bites</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>The saliva in a mosquito bite can be an irritant to children with sensitive skin or allergies. </p>
              <p>Fortunately, Magic Patch's unique grid system will mechanically drain the saliva from bug bites, reducing itching, reactions, and sensitivity all in one go.</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="2">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block" data-visability='3'>
          <div class="magicpatch_accardion_link">
            <p>My child <strong>scratches their bites</strong> too much</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p> The urge to scratch a mosquito bite can be overwhelming, especially for children. Take it too far, and a simple bite can become a deep scratche or even an infection.</p>
              <p>Fortunately, Magic Patches plaster over the bite, providing a physical barrier that limits scratching. Meanwhile, the patch itself drains the insect saliva - reducing the trigger behind itching at its root cause.</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="3">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block" data-visability='4'>
          <div class="magicpatch_accardion_link">
            <p>Need a <strong>non-chemical solution</strong> for my child</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>Kids nowadays face more chemicals, artificual ingredients, and pollutants than ever. Most itch relief solutions will just add to the problem by exposing your child to even more unnatural ingredients and chemicals. </p>
              <p>Fortunately, unlike most other itch relief solutions, Magic Patch uses a mechanical release method that drains insect saliva from bites -- providing natural and drug-free relief from itching. </p>
              <p>Made with your kids in mind. Safe to use anywhere on the skin. No creams, no chemicals, just natural itch relief from mosquito and insect bites. A perfect option for sensitive skin.</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="4">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block" data-visability='5'>
          <div class="magicpatch_accardion_link">
            <p>Need to <strong>switch from spray/ cream/ gel</strong></p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>While sprays and creams may provide effective itch relief, they're also short-lasting, messy and smelly.</p>
              <p>They're also filled with chemicals that may provoke allergies or aggravate sensitive skin in children.</p>
              <p>Fortunately, savvy shoppers can skip all the extra laundry and aerosol choking hazards by using Magic Patch  for a mess-free, smell-free, and long-lasting itch-relief solution. </p>
              <p>Magic Patches provide relief as long as they stay on the skin (up to 7 days) and stay effective in water.</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="5">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block" data-visability='6'>
          <div class="magicpatch_accardion_link">
            <p>My child is going to a <strong>place where there will be mosquitoes</strong></p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>Magic Patches allow you to stay ready & prepared -- even if your little one will be travelling to an area with mosquitoes.</p>
              <p>Simply slip a few into your child's pockets or backpack so that they're handy at all times, and apply as necessary to any bites or scratches.</p>
              <p>Not only will they provide near immediate relief, but your child will also love having a sticker to show off to their friends!</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="6">Get MagicPatch</a>
            </div>
          </div>
        </li>
        <li class="magicpatch_accardion_block" data-visability='7'>
          <div class="magicpatch_accardion_link">
            <p>My child <strong>wakes up</strong> at night complaining about itches</p>
            <span></span>
          </div>
          <div class="magicpatch_accardion_lists">
            <div>
              <p>Itching from a bite can easily disturb sleep and keep your child awake at night.</p>
              <p>Fortunately, Magic Patches use a unique Grid-Relief™ system that mechanically drains the saliva found in bug bites.</p>
              <p>That way the itching reduces, and your child gets the relief they need to settle down into a good night's sleep.</p>
              <a href="#getNow" class="magicpatch_accardion_btn" data-btn="7">Get MagicPatch</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", problemStyle)
    document.querySelector("#children-safe").insertAdjacentHTML("beforebegin", problemHtml)

    if (document.querySelector(".magicpatch_accardion")) {
      let obs = new IntersectionObserver(visibility, {
        threshold: 0.9
      })

      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 0.9
      })

      obs.observe(document.querySelector('.magicpatch_problems'))
      obs.observe(document.querySelector('.magicpatch_accardion li[data-visability="1"]'))
      obs.observe(document.querySelector('.magicpatch_accardion li[data-visability="2"]'))
      obs.observe(document.querySelector('.magicpatch_accardion li[data-visability="3"]'))
      obs.observe(document.querySelector('.magicpatch_accardion li[data-visability="4"]'))
      obs.observe(document.querySelector('.magicpatch_accardion li[data-visability="5"]'))
      obs.observe(document.querySelector('.magicpatch_accardion li[data-visability="6"]'))
      obs.observe(document.querySelector('.magicpatch_accardion li[data-visability="7"]'))



      function visibility(entries) {
        entries.forEach(i => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target)
            }, 1000)
          }
        })
      }

      function visibility2(entries) {
        entries.forEach(i => {
          if (i.isIntersecting) {
            if (i.target.classList.contains('magicpatch_problems')) {
              pushDataLayer('Visibility block itch relief problems')
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

          obs2.unobserve(i.target)
        })
      }
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

    $(".magicpatch_accardion_link").click(function (e) {
      $(this).toggleClass("active")
      $(this).closest('li').toggleClass("active")
      $(this).next(".magicpatch_accardion_lists").slideToggle()
      if ($(".magicpatch_accardion_link").not(this)) {
        $(".magicpatch_accardion_link").not(this).next(".magicpatch_accardion_lists").css("display", "none")
        $(".magicpatch_accardion_link").not(this).removeClass("active")
        $(".magicpatch_accardion_link").not(this).closest('li').removeClass("active")
      }

      if (e.currentTarget.classList.contains("active")) {
        pushDataLayer("Open block", `${e.currentTarget.querySelector("p").textContent}`)
      } else {
        pushDataLayer("Close block", `${e.currentTarget.querySelector("p").textContent}`)
      }

      const headerOffset = 120;
      const elementPosition = this.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    })

    pushDataLayer("loaded")
    clarity("set", "problem_based_layout_mp_v2", "variant_1")
  }
}, 10)
