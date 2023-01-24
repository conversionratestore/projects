let socialProof = setInterval(() => {
  if (document.querySelector(".reviews_box")) {
    clearInterval(socialProof)

    //event
    let eventVar = screen.width <= 768 ? "Mobile" : "Desktop"

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Social proof ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Social proof ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let newStyle = /*html */ `
        <style>
            .reviews_box{
                display: none !important;
            }
            .social_proof .contacts_us{
                border-top: 1px solid #F0EEEE;
                margin-top: 44px !important;
                padding-top: 23px !important;
            }
            .social_proof > div:nth-child(1){
                background: #DDE8F1;
                padding: 72px 0;
                margin-bottom: 44px;
                margin-top: 56px;
                position: relative;
            }
            .social_proof > div:nth-child(1)::after{
                content: '';
                position: absolute;
                top: 15px;
                right: 0;
                max-width: 225px;
                width: 220px;
                height: 250px;
                background: url(https://conversionratestore.github.io/projects/knineti/img/paws_bkgr.png) no-repeat center center;
            }
            section.social_proof .about_master_class_box h2{
                font-weight: 600;
                font-size: 32px;
                line-height: 40px;
                color: #734F22;
                margin: 0 auto 40px;
                max-width: 694px;
            }
            .social_proof .all_inform_wrap{
                display: flex;
                gap: 44px;
            }
            .social_proof .all_inform_wrap > div{
                width: 50%;
                z-index: 5;
            }
            .social_proof .all_inform_wrap .text_wrap h3{
                font-weight: 700;
                font-size: 20px;
                line-height: 27px;
                color: #193973 !important;
                text-align: left;
                margin: 0 0 12px;
            }
            .social_proof .all_inform_wrap .text_wrap p{
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                color: #4F4F4F !important;
                padding-bottom: 18px;
                margin-bottom: 18px;
                border-bottom: 1px solid #FFFFFF;
            }
            .social_proof .all_inform_wrap .text_wrap span{
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                color: #193973 !important;
                margin: 0;
            }
            .social_proof ul.reviews_wrap {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 44px;
                padding: 0;
            }
            .social_proof ul.reviews_wrap li{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                width: 48%;
                border: 2px solid #E8F1F9;
                border-radius: 8px;
                padding: 40px;
            }
            .social_proof ul.reviews_wrap li .descr_block h3{
                font-weight: 700;
                font-size: 20px;
                line-height: 27px;
                color: #193973 !important;
                text-align: left;
                margin: 12px 0;
            }
            .social_proof ul.reviews_wrap li .descr_block p{
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                color: #4F4F4F !important;
                margin: 0;
            }
            .social_proof ul.reviews_wrap li .descr_block p > span{
                display: block;
                margin: 10px 0;
            }
            .social_proof ul.reviews_wrap li .name_block{
                position: relative;
                border-top: 1px solid #E8F1F9;
                padding-top: 27px;
                margin-top: 20px;
                width: 100%;
            }
            .social_proof ul.reviews_wrap li .name_block::after{
                position: absolute;
                content: '';
                top: 8px;
                right: 0;
                width: 60px;
                height: 60px;
                background: url(https://conversionratestore.github.io/projects/knineti/img/paws_social_proof.png) no-repeat center center;
                background-size: contain;
            }
            .social_proof ul.reviews_wrap.part_two li:nth-child(3) .name_block::after{
                background: url(https://conversionratestore.github.io/projects/knineti/img/bone_social_proof.png) no-repeat center center;
                background-size: contain;
            }
            .social_proof ul.reviews_wrap.part_one li:nth-child(2) .name_block::after,
            .social_proof ul.reviews_wrap.part_one li:nth-child(3) .name_block::after,
            .social_proof ul.reviews_wrap.part_one li:nth-child(4) .name_block::after{
                background: url(https://conversionratestore.github.io/projects/knineti/img/bone_social_proof.png) no-repeat center center;
                background-size: contain;
            }
            .social_proof ul.reviews_wrap li .name_block span{
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                color: #193973 !important;
                margin: 0;
            }
            .social_proof ul.reviews_wrap.part_two{
                padding-top: 44px;
            }
            .show_more_btn{
                width: max-content;
                display: none;
                align-items: center;
                justify-content: center;
                margin: 30px auto 0;
            }
            .show_more_btn span{
                font-weight: 600;
                font-size: 18px;
                line-height: 25px;
                letter-spacing: -0.01em;
                text-transform: uppercase;
                color: #193973;
                margin-left: 8px;
            }
            .star_wrap{
                display: flex;
            }
            .star_wrap span{
                width: 24px;
                height: 24px;
                background: url(https://conversionratestore.github.io/projects/knineti/img/star.svg) no-repeat center center;
            }
            .video_wrap iframe{
                width: 100%;
                height: 100%;
            }
            body .player .vp-video-wrapper{
                border-radius: 8px !important;
            }
            @media (max-width: 1170px) {
                .social_proof ul.reviews_wrap{
                    gap: 30px;
                }
            }
            @media (max-width: 768px) {
                .social_proof > div:nth-child(1){
                    padding: 40px 0;
                    margin-bottom: 20px;
                }
                .social_proof .all_inform_wrap{
                    flex-direction: column;
                    gap: 20px;
                }
                .social_proof .all_inform_wrap > div{
                    width: 100%;
                }
                .social_proof > div:nth-child(1)::after{
                    content: unset;
                }
                section.social_proof .about_master_class_box h2{
                    font-size: 20px !important;
                    line-height: 25px;
                    margin-bottom: 20px !important;
                    max-width: 345px;
                }
                .social_proof .all_inform_wrap .text_wrap h3{
                    font-size: 16px !important;
                    line-height: 26px;
                }
                .social_proof .all_inform_wrap .text_wrap p{
                    padding-bottom: 16px;
                    margin-bottom: 16px;
                }
                .social_proof .all_inform_wrap .text_wrap span{
                    font-size: 14px;
                    line-height: 19px;
                }
                .social_proof ul.reviews_wrap{
                    gap: 20px;
                }
                .social_proof ul.reviews_wrap.part_two{
                    display: none;
                }
                .show_more_btn{
                    display: flex;
                }
                .social_proof ul.reviews_wrap li{
                    width: 100%;
                    padding: 20px 20px 30px;
                }
                .social_proof ul.reviews_wrap li .descr_block h3{
                    font-size: 16px !important;
                    line-height: 25px;
                }
                .social_proof ul.reviews_wrap li .name_block{
                    padding-top: 17px;
                }
                .social_proof ul.reviews_wrap li .name_block::after{
                    width: 40px;
                    height: 40px;
                }
                .social_proof ul.reviews_wrap.part_two {
                    padding-top: 20px;
                }
            }
            @media (max-width: 320px) {
                .social_proof ul.reviews_wrap li .descr_block h3,
                .social_proof ul.reviews_wrap li .descr_block p,
                .social_proof ul.reviews_wrap li .name_block span{
                    font-size: 14px !important;
                }
                section.social_proof .about_master_class_box h2 {
                    font-size: 17px !important;
                }
            }
            @media (max-width: 280px) {
                .social_proof ul.reviews_wrap li .descr_block h3,
                .social_proof ul.reviews_wrap li .descr_block p,
                .social_proof ul.reviews_wrap li .name_block span{
                    font-size: 11px !important;
                }
                section.social_proof .about_master_class_box h2 {
                    font-size: 15px !important;
                }
                .social_proof .all_inform_wrap .text_wrap h3{
                    font-size: 13px !important;
                }
                .social_proof .all_inform_wrap .text_wrap p{
                    font-size: 12px;
                }
            }
        </style>
        `
    let sectionSocialProof = /*html */ `
            <section class="social_proof">
                <div>
                    <div class="about_master_class_box container">
                        <h2>What other dog owners are saying about Total Transformation Masterclass</h2>
                        <div class="all_inform_wrap">
                            <div class="video_wrap">
                                <!-- <video src=""></video> -->
                                <iframe src="https://player.vimeo.com/video/492934563" class="responsive-iframe" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                            </div>
                            <div class="text_wrap">
                                <h3>My experience with the masterclass was very impressive</h3>
                                <p>“My experience with the masterclass was very impressive… Harley almost acts like a service dog now. He is less excitable, very calm and he really takes my leadership. It’s not that he listens to me when he feels like it – he listens to me all the time now. He doesn’t jump on me, doesn’t jump on our guests, and he pays attention to ME on our walks instead of getting too excitable about other dogs and cats…“</p>
                                <span>Ariel Summers, US</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testik"></div>
                <div class="container">
                    <ul class="reviews_wrap part_one"></ul>
                    <div class="show_more_btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1608_6243)">
                            <path
                                d="M19 8L15 12H18C18 15.31 15.31 18 12 18C10.99 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23L19 8ZM6 12C6 8.69 8.69 6 12 6C13.01 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12H6Z"
                                fill="#193973" />
                            </g>
                            <defs>
                            <clipPath id="clip0_1608_6243">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                        <span>Show more</span>
                    </div>
                    <ul class="reviews_wrap part_two"></ul>
                </div>
            </section>
        `

    let arrReviewsPartOne = {
      "Olivia Campbell, GB": [
        5,
        "Was hesitant about paying for a course",
        `“Was a little hesitant paying for this course as it's not cheap, but I was also at the end of my tether with my dog and running out of options. It's been three weeks and there's already been a huge difference in his behavior and find the weekly calls really motivating and helpful.“`,
        "1",
      ],
      "John Suchland, US": [
        5,
        "This program should be mandatory for dog ownership. Worth every penny!",
        `“As a breeder of Aussiedoodles, we looked long and hard to find a quality and effective training program we could recommend, and this one is excellent! In fact, we took three puppies from last spring’s litter through the program, started them about 12 weeks. They did marvellously and all found wonderful homes as trained puppies at 20-24 weeks, the most well-behaved dogs you would ever want to meet. This program should be mandatory for dog ownership. Worth every penny!“`,
        "2",
      ],
      "Lorraine Bernard, CA": [
        5,
        `One of the commands saved my puppy's life`,
        `“I am only on my third lesson with this organization and one of their key lesson commands saved my puppy’s life this week. She managed to pull her leash out of my hand — a mistake of mine that will never happen again — and she took off toward a main road. Because I had been following the lessons, I shouted the command and she stopped, turned around and came barrelling back to me. Thank you!“`,
        "3",
      ],
      "Tammy Ochoa, US": [
        5,
        `Our puppy became an emotional support dog`,
        `“I have a very high spirited 11 week old German Shepherd that is super smart and learns very quickly. I want her to be an emotional support dog for my husband who is a combat veteran and has PTSD and some health problems. This program shows another way of training to accomplish that calm, well-behaved dog that is desired.“`,
        "4",
      ],
    }
    let arrReviewsPartTwo = {
      "Dorothy Alspaugh, US": [
        5,
        "Wish I had seen this 3 dogs ago",
        `“The course gives you the best information about how to manage and train a dog not to bark, not to jump up on people and how to get along with other dogs! It is a must learning tool for anyone who owns a dog. Wish I had seen this 3 dogs ago.“`,
        "5",
      ],
      "Rubya Braun, AU": [
        5,
        "She no longer barks at visitors",
        `“I have been telling every person I know with a dog to use this program because of the results that I got... She is a completely changed dog... Whenever somebody comes, instead of barking... she goes on her bed and she waits for me. Then when I take her for a walk, instead of pulling like crazy, she is looking at me all the time for attention, for cues, and to see what to do. She is a joy to walk with.“`,
        "6",
      ],
      "Samantha Morgan, US": [
        5,
        `The masterclass made walks enjoyable`,
        `“Walking with Carlo (our German Shepherd puppy) has become so much more enjoyable now because of your masterclass! Instead of constantly pulling on his leash like he used to, he now always walks at our side.
            <span>And instead of trying to run away every time we open the front door (and almost getting run over by a car once because of this), he now sits patiently in front of the door even without a leash on until I give him permission to go out.</span>
            He has become so well-trained and seems to almost behave like a service dog now!“`,
        "7",
      ],
      "Barbara Wilson, US": [
        5,
        `He focuses on me and ignores other dogs`,
        `“I've been training Oscar for the last couple of weeks now using what I learned from your program about how to get him to remain calm when there are distractions. The change in him is almost unbelievable! When I take him out for a walk, he now ignores every other dog that we meet and maintains constant eye contact with me. And this was a dog who (before your program) used to get over-excited and bark like crazy at the sight of each and every animal!“`,
        "8",
      ],
    }

    function setReviews(name, star, title, text, count) {
      return ` <li data-visability=${count}>
                        <div class="descr_block">
                            <div data-star="${star}" class="star_wrap"></div>
                            <h3>${title}</h3>
                            <p>${text}</p>
                        </div>
                        <div class="name_block">
                            <span>${name}</span>
                        </div>
                    </li>`
    }

    document.head.insertAdjacentHTML("beforeend", newStyle)
    document.querySelector(".entry-content")?.insertAdjacentHTML("beforeend", sectionSocialProof)

    // render reviews and stars
    if (document.querySelector(".reviews_wrap")) {
      if (document.querySelector(".reviews_wrap.part_one")) {
        for (let key in arrReviewsPartOne) {
          document
            .querySelector(".reviews_wrap.part_one")
            .insertAdjacentHTML("beforeend", setReviews(key, arrReviewsPartOne[key][0], arrReviewsPartOne[key][1], arrReviewsPartOne[key][2], arrReviewsPartOne[key][3]))
        }
      }
      if (document.querySelector(".reviews_wrap.part_two")) {
        for (let key in arrReviewsPartTwo) {
          document
            .querySelector(".reviews_wrap.part_two")
            .insertAdjacentHTML("beforeend", setReviews(key, arrReviewsPartTwo[key][0], arrReviewsPartTwo[key][1], arrReviewsPartTwo[key][2], arrReviewsPartTwo[key][3]))
        }
      }

      if (document.querySelector(".star_wrap")) {
        let stars
        document.querySelectorAll(".star_wrap").forEach((el) => {
          stars = +el.getAttribute("data-star")
          for (let i = 0; i < stars; i++) {
            el.insertAdjacentHTML("beforeend", `<span class="star"></span>`)
          }
        })
      }

      document.querySelector("ul.reviews_wrap.part_two")?.after(document.querySelector(".contacts_us"))
      document.querySelector(".show_more_btn")?.addEventListener("click", (e) => {
        pushDataLayer("Click on Show more link")
        e.currentTarget.style.display = "none"
        document.querySelector(".social_proof ul.reviews_wrap.part_two").style.display = "flex"
        document.querySelector("ul.reviews_wrap.part_two")?.scrollIntoView({ block: "start", behavior: "smooth" })
      })
    }

    if (document.querySelector(".social_proof")) {
      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      })

      obs.observe(document.querySelector('.reviews_wrap li[data-visability="1"]'))
      obs.observe(document.querySelector('.reviews_wrap li[data-visability="2"]'))
      obs.observe(document.querySelector('.reviews_wrap li[data-visability="3"]'))
      obs.observe(document.querySelector('.reviews_wrap li[data-visability="4"]'))
      obs.observe(document.querySelector('.reviews_wrap li[data-visability="5"]'))
      obs.observe(document.querySelector('.reviews_wrap li[data-visability="6"]'))
      obs.observe(document.querySelector('.reviews_wrap li[data-visability="7"]'))
      obs.observe(document.querySelector('.reviews_wrap li[data-visability="8"]'))

      let int = setInterval(() => {
        if (document.querySelector(".testik")) {
          clearInterval(int)
          obs.observe(document.querySelector(".testik"))
        }
      }, 100)

      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("testik")) {
              pushDataLayer(`Visibility block "Ariel Summers, US")}`)
            }
            switch (i.target.getAttribute("data-visability")) {
              case "1":
                pushDataLayer(`Visibility video block`)
                break
              case "2":
                pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-visability")}`)
                break
              case "3":
                pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-visability")}`)
                break
              case "4":
                pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-visability")}`)
                break
              case "5":
                pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-visability")}`)
                break
              case "6":
                pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-visability")}`)
                break
              case "7":
                pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-visability")}`)
                break
              case "8":
                pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-visability")}`)
                break
              default:
                break
            }

            obs.unobserve(i.target)
          }
        })
      }
    }

    pushDataLayer("loaded")

    window._mfq.push(["setVariable", "exp_social_proof", "var1"])

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)
        clarity("set", "exp_social_proof", "variant_1")
      }
    }, 200)
    document.querySelector(".exp")?.remove()
  }
}, 100)
