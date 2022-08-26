let faqs = setInterval(() => {
  if (document.querySelector("#flowers")) {
    clearInterval(faqs)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: How it works`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Exp: How it works`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let faqsStyle = /*html */ `
      <style>
        #faqs{
            display: none;
        }
        .faqs_wrap{
            margin: 0 16px 30px;
        }
        .faqs_wrap h2{
            font-size: 44px;
            line-height: 42px;
            font-weight: 400;
            color: #0c0b0b;
            margin: 0;
            text-align: center;
        }
        .accardion_faqs{
            list-style-type: none;
            margin: 28px 0 0;
        }
        .accardion_faqs li + li{
            margin-top: 28px;
        }
        .accardion_link_faqs{
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        .accardion_link_faqs span{
            position: relative;
            width: 18px;
            height: 18px;
            display: inline-flex;
            margin-right: 12px;
        }
        .accardion_link_faqs span::before{
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: url(https://conversionratestore.github.io/projects/buzzpatch/img/sleepy_plus_faqs.svg) no-repeat center center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-size: contain;
            max-width: 13px;
            max-height: 13px;
        }
        .accardion_link_faqs h3{
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #282727;
            text-transform: none;
            margin: 0;
        }
        .accardion_lists_faqs{
            max-height: 0;
            overflow: hidden;
            opacity: 0;
        }
        .accardion_lists_faqs > div{
            padding: 20px;
            background: #F4F4F4;
            margin: 0;
        }
        .accardion_lists_faqs p{
            font-weight: 400;
            font-size: 18px !important;
            line-height: 150% !important;
            color: #515151;
            margin: 0;
        }
        .accardion_lists_faqs p + p{
            margin-top: 10px;
        }
        .active_block {
            max-height: fit-content;
            opacity: 1;
            margin-top: 20px;
        }
        .accardion_link_faqs.active h3 {
            color: #3292DA;
        }
        .accardion_link_faqs.active span::before {
            background: url(https://conversionratestore.github.io/projects/buzzpatch/img/sleepy_minus_faqs.svg) no-repeat center center;
        }
        
      </style>
    `

    let faqsHtml = /*html */ `
    <div class="faqs_wrap">
        <h2>FAQ’s</h2>
            <ul class="accardion_faqs">
                <li class="accardion_block_faqs">
                    <div class="accardion_link_faqs">
                        <span></span>
                        <h3>Is SleepyPatch safe?</h3>
                    </div>
                    <div class="accardion_lists_faqs">
                        <div>
                            <p>YES! One of the biggest benefits of SleepyPatch is that it won't pose a choking, inhalation, or skin irritation risk to your child. And unlike melatonin pills, sugary sleep gummies, or prescriptions -- SleepyPatch can induce peaceful sleep without all the nasty side effects like dizziness, morning grogginess, or worse - nightmares!</p>
                        </div>
                    </div>
                </li>
                <li class="accardion_block_faqs">
                    <div class="accardion_link_faqs">
                        <span></span>
                        <h3>How does SleepyPatch work?</h3>
                    </div>
                    <div class="accardion_lists_faqs">
                        <div>
                            <p>The problem with other sleeping aids?</p>
                            <p>Either they're pills that are addictive, pumped full of sugar, or a potential choking hazard...</p>
                            <p>Or they're essential oils and diffusers that have been created with adults in mind - and are therefore too stimulating for most children. </p>
                            <p>Fortunately, our SleepyPatches were designed specifically for kids!</p>
                            <p>The nanomaterials in our patches releases molecules from our unique essential oil blend every 30 seconds...</p>
                            <p>A steady flow of these molecules then triggers receptors in the nose, calming the nervous system, soothing the mind and body, and stimulating an overall relaxed sensation safe for kids of all ages 2+!</p>
                            <p>For best use, place a SleepyPatch 30 minutes before you need it, and keep in mind that the range of effect will vary between individuals!</p>
                        </div>
                    </div>
                </li>
                <li class="accardion_block_faqs">
                    <div class="accardion_link_faqs">
                        <span></span>
                        <h3>How to apply SleepyPatch?</h3>
                    </div>
                    <div class="accardion_lists_faqs">
                        <div>
                            <p>Get the PJs on! And then let your little one help you to pick out an emoji face sticker - they'll love this part!</p>
                            <p>Once you have your fav sticker for the night - stick it on your kiddo's pyjamas, or on the bed frame if they tend to toss and turn at night. Either option can provide effective sleep support throughout the night.</p>
                            <p>And no worries - our sticker's are made of an anti-stubborn adhesive that will easily peel off of clothes and furniture without leaving behind annoying residue. </p>
                            <p><b>Kids 2-3 years:</b> Use 1 patch. Place it centrally on the body.</p>
                            <p><b>Kids 3-5 years:</b> Use 2 patches. One on torso, and one on the legs.</p>
                            <p><b>Ages 6+:</b> Use 2-4 patches -- One on each limb. </p>
                        </div>
                    </div>
                </li>
                <li class="accardion_block_faqs">
                    <div class="accardion_link_faqs">
                        <span></span>
                        <h3>How long do SleepyPatch last?</h3>
                    </div>
                    <div class="accardion_lists_faqs">
                        <div>
                            <p>Our unique nanomaterial allows SleepyPatch to last up to 4 hours! The nanomaterials release molecules from our special essential oil blend into the air every 30 seconds -- soothing your child to sleep, without overwhelming them with harsh scents. </p>
                        </div>
                    </div>
                </li>
                <li class="accardion_block_faqs">
                    <div class="accardion_link_faqs">
                        <span></span>
                        <h3>What do the SleepyPatches smell like?</h3>
                    </div>
                    <div class="accardion_lists_faqs">
                        <div>
                            <p>Our SleepyPatches are a blend of scientifically researched natural essential oils to help your little ones (or even yourself!) wind down for a good night's rest. Our patches have a sweet & citrus scent, thanks to our blend of mandarin, lavender, sweet marjoram and vetiver.</p>
                        </div>
                    </div>
                </li>
                <li >
                    <div class="accardion_link_faqs">
                        <span></span>
                        <h3>What are the ingredients in the SleepyPatch?</h3>
                    </div>
                    <div class="accardion_lists_faqs">
                        <div>
                            <p>The SleepyPatch is formulated with a blend of mandarin, lavender, sweet marjoram, and vetiver essential oils.</p>
                        </div>
                    </div>
                </li>
                <li class="accardion_block_faqs">
                    <div class="accardion_link_faqs">
                        <span></span>
                        <h3>Does SleepyPatch have scientifically proven effect?</h3>
                    </div>
                    <div class="accardion_lists_faqs">
                        <div>
                            <p><b>SleepyPatch</b> uses the natural power of essential oils such as Lavender and Mandarin to <b>calm the nervous system</b> and quickly <b>relax your child's body</b> into a state of deep sleep. </p>
                            <p>Better yet, it's the kind of deep (REM) sleep that your child's brain needs to wake up feeling refreshed; learn, play and build positive memories; and enjoy a calmer, less anxious, and more productive day thanks to increased concentration and focus. </p>
                        </div>
                    </div>
                </li>
            </ul>

    </div>
    `

    document.head.insertAdjacentHTML("beforeend", faqsStyle)
    document.querySelector("#flowers").insertAdjacentHTML("afterend", faqsHtml)

    const accardionToggleFaqs = (slideMenu) => (e) => {
      slideMenu.forEach((link) => {
        e.preventDefault()
        const hidePanel = link.nextElementSibling
        if (link === e.currentTarget) {
          e.currentTarget.classList.toggle("active")

          pushDataLayer("Click on question", `${e.currentTarget.querySelector("h3").textContent}`)
          hidePanel.classList.toggle("active_block")

          const scrollTarget = hidePanel
          const topOffset = 148
          const elementPosition = scrollTarget.getBoundingClientRect().top
          const offsetPosition = elementPosition - topOffset

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          })
        } else {
          link.classList.remove("active")
          hidePanel.classList.remove("active_block")
        }
      })
    }

    const slideMenuFaqs = document.querySelectorAll(".accardion_link_faqs")

    slideMenuFaqs.forEach((el) => {
      el.addEventListener("click", accardionToggleFaqs(slideMenuFaqs))
    })

    pushDataLayer("loaded")
    clarity("set", "Exp: How it works", "variant_1")
  }
}, 10)
