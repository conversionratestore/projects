let startFunkAccardion = setInterval(() => {
  if (document.querySelector("#flowers")) {
    clearInterval(startFunkAccardion)

    let styleAccardion = /*html */ `
      <style>
        .section_accardion{
            padding: 23px;
        }
        .section_accardion > div{
            display: flex;
            margin-bottom: 20px;
        }
        .section_accardion > div > img{
            width: 100%;
            height: 100%;
            max-width: 49px;
            max-height: 45px;
        }
        .section_accardion > div h2{
            font-family: "Inter", sans-serif;
            font-weight: 700;
            font-size: 20px;
            line-height: 147%;
            color: #000000;
            text-transform: unset;
            margin: 0 0 0 17px;
        }
        .section_accardion > p{
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 144% !important;
            color: #000000;
            margin: 0;
        }
        .section_accardion > p + p{
            margin-top: 20px;
        }
        .accardion{
            list-style-type: none;
            margin: 30px 0 0; 
        }
        .accardion_block + li{
            margin-top: 30px;
        }
        .accardion_link {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .accardion_link span{
            font-family: "Inter", sans-serif;
            width: 23px;
            height: 23px;
            margin: 3px 15px 0 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 147%;
            color: #3582E5;
            position: relative;
        }
        .accardion_link span::before{
            position: absolute;
            content: "+";
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border: 1px solid #3582E5;
            border-radius: 50%;
            width: 23px;
            height: 23px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .accardion_link.active span::before {
            content: '-';
        }
        .accardion_link p{
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 170% !important;
            color: #000000;
            margin: 0;
        }
        .accardion_lists {
            max-width: 315px;
            margin: 0 auto;
            background: #F4F4F4;
            max-height: 0;
            overflow: hidden;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;
            opacity: 0;
        }
        .accardion_lists > div{
            padding: 20px;
        }
        .accardion_lists > div > ul{
            list-style-type: none;
            margin: 0;
        }
        .accardion_lists > div > ul li + li{
            margin-top: 20px;
        }
        .accardion_lists > div p,
        .accardion_lists > div h3{
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-size: 14px !important;
            line-height: 147% !important;
            color: #000000;
            margin: 0;
        }
        .accardion_lists > div ul.marker_list{
            margin: 0 0 20px 21px;
        }
        .accardion_lists > div ul.marker_list li{
            list-style: disc;
        }
        .accardion_lists > div ul.marker_list li + li{
            margin-top: 10px;
        }
        .accardion_lists > div h3{
            font-weight: 700;
            margin-bottom: 10px;
            text-transform: unset;
        }
        .accardion_lists > div p + p{
            margin-top: 20px;
        }
        .img_style{
            margin-top: 20px;
        }
        .img_inform_wrap{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            margin-top: 20px;
        }
        .img_inform_wrap img{
            max-width: 59px !important;
            max-height: 59px !important;
            width: 100%;
            height: 100%;
            margin-right: 14px;
        }
        .img_inform_wrap img.img_var{
            max-width: 67px !important;
            max-height: 39px !important;
            margin: 3px 10px 0 0;
        }
        .active_block {
            max-height: fit-content;
            opacity: 1;
            margin-top: 10px;
        }

        @media (max-width: 320px){
            .section_accardion > div h2{
                font-size: 16px;
            }
            .section_accardion > p,
            .accardion_link p{
                font-size: 14px !important;
            }
            .accardion_lists > div p, 
            .accardion_lists > div h3{
                font-size: 13px !important;
            }
        }

         @media (max-width: 280px){
            .section_accardion > div h2{
                font-size: 13px;
            }
            .section_accardion > p,
            .accardion_link p{
                font-size: 12px !important;
            }

            .accardion_lists > div p,
            .accardion_lists > div h3{
                font-size: 12px !important;
            }
        }

      </style>
    `
    let sectionAccardion = /*html */ `
     <section class="section_accardion">
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/microscope.png" alt="microscope">
            <h2>The Science-Backed Formula For Faster, Better, and Deeper sleep </h2>
        </div>
        <p><b>SleepyPatch</b> uses the natural power of essential oils such as Lavender and Mandarin to <b>calm the nervous system</b> and quickly <b>relax your child's body</b> into a state of deep sleep.</p>
        <p>Better yet, it's the kind of deep (REM) sleep that your child's brain needs to wake up feeling refreshed; learn, play and build positive memories; and enjoy a calmer, less anxious, and more productive day thanks to increased concentration and focus. </p>
        <ul class="accardion">
            <li class="accardion_block">
                <div class="accardion_link">
                    <span></span>
                    <p>Improves sleep problems such as <br> insomnia</p>
                </div>
                <div class="accardion_lists">
                    <div>
                        <p>A study on sleep problems and using Natural oils like those in the SleepyPatches to improve sleep, revealed that the use of aromatherapy was highly effective in improving sleep problems such as insomnia, including quantitative and qualitative sleep effects (95% confidence interval [CI], effect sizes = 0.6491). Additional analysis revealed that the secondary outcomes including stress, depression, anxiety, and fatigue were significantly effective.</p>
                        <div class="img_inform_wrap">
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/acc1.png" alt="logo">
                            <p><b>Source:</b>  National Library of Medicine. “A systematic literature review and meta-analysis of the clinical effects of aroma inhalation therapy on sleep problems”.</з>
                        </div>
                    </div>
                </div>
            </li>
            <li class="accardion_block">
                <div class="accardion_link">
                    <span></span>
                    <p>Reduces stress, depression, <br> anxiety, and fatigue</p>
                </div>
                <div class="accardion_lists">
                    <div>
                        <p>SleepyPatch ingredients aromatherapy improves sleep quality and subsequently reduces stress, pain, anxiety, depression, and fatigue.</p>
                        <div class="img_inform_wrap">
                            <img class="img_var" src="https://conversionratestore.github.io/projects/buzzpatch/img/acc2.png" alt="logo">
                            <p><b>Source:</b> ScienceDirect. “Effect of aromatherapy on sleep quality of adults and elderly people: A systematic literature review and meta-analysis”</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="accardion_block">
                <div class="accardion_link">
                    <span></span>
                    <p>Stimulates healthier, deeper (REM) <br> sleep</p>
                </div>
                <div class="accardion_lists">
                    <div>
                        <ul>
                            <li>
                                <h3>What is REM sleep and why it is important </h3>
                                <p>The deepest sleep you can experience is REM sleep. Rapid eye movement (REM) generally begins about 90 minutes after you fall asleep. It's the most important stage as it restores your brain and helps you learn and consolidate memories. </p>
                            </li>
                            <li>
                                <h3>What causes the lack of REM sleep</h3>
                                <ul class="marker_list">
                                    <li><p>Sleep disorders like insomnia</p></li>
                                    <li><p>High levels of stress/anxiety and nighttime terrors</p></li>
                                    <li><p>Alcohol, Antidepressants, ADHD medications, and other sleep disrupting drugs.</p></li>
                                </ul>
                                <p>Sleep deprivation has real impacts on health and well-being. The most obvious is sleepiness. Feeling sleepy can affect your work and family life. It can also make it dangerous to do things like drive a car.</p>
                                <img class="img_style" src="https://conversionratestore.github.io/projects/buzzpatch/img/acc3.png" alt="logo">
                            </li>
                            <li>
                                <h3>How SleepyPatch improves sleep</h3>
                                <p>SleepyPatch is designed to calm the nervous system, reduce stress, depression, anxiety, fatigue and deal with insomnia. This helps to fall asleep and prepare the body and brain for better recovery during the sleep.</p>
                                <p>It works by triggering the receptors in the nose which then sends messages through the nervous systems to the limbic system which controls behavior and emotions.</p>
                                <p>SleepyPatches are infused with essential oils and thanks to our unique material, the patches diffuse the aroma consistently throughout the night.</p>
                                <p>The nanomaterial releases molecules of oils every 30 seconds so you can count on our patches working all night long.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul> 
    </section>    
    `

    document.head.insertAdjacentHTML("beforeend", styleAccardion)
    document.querySelector("#flowers").insertAdjacentHTML("afterend", sectionAccardion)

    //
    const accardionToggle = (slideMenu) => (e) => {
      slideMenu.forEach((links) => {
        const hidePanel = links.nextElementSibling
        if (links === e.currentTarget) {
          e.currentTarget.classList.toggle("active")

          hidePanel.classList.toggle("active_block")

          const scrollTarget = hidePanel
          const topOffset = 155
          const elementPosition = scrollTarget.getBoundingClientRect().top
          const offsetPosition = elementPosition - topOffset

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          })
        } else {
          links.classList.remove("active")
          hidePanel.classList.remove("active_block")
        }
      })
    }

    const slideMenu = document.querySelectorAll(".accardion_link")

    slideMenu.forEach((links) => {
      links.addEventListener("click", accardionToggle(slideMenu))
    })
  }
}, 10)
