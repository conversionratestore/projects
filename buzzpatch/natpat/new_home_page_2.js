(function() {
  "use strict";
  const p = (e, n, i, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: n,
      event_type: i,
      event_loc: s
    }), console.log(`Event: ${e} | ${n} | ${i} | ${s}`);
  }, h = (e, n) => {
    const i = setInterval(() => {
      document.querySelector(e) && (clearInterval(i), n());
    }, 100);
  }, w = ({ name: e, dev: n }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, _ = (e) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, l = (e, n, i, s, t = 1e3, o = 0.5) => {
    let a, c;
    if (a = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? c = setTimeout(() => {
          p(
            n,
            d[0].target.dataset.visible || s || "",
            "view",
            i
          ), a.disconnect();
        }, t) : (console.log("Element is not fully visible"), clearTimeout(c));
      },
      { threshold: [o] }
    ), typeof e == "string") {
      const d = document.querySelector(e);
      d && a.observe(d);
    } else
      a.observe(e);
  }, u = (e) => {
    const n = document.querySelector(e);
    if (!n)
      return;
    const s = n.getBoundingClientRect().top - 100;
    window.scrollBy({
      top: s,
      behavior: "smooth"
    });
  }, r = "https://conversionratestore.github.io/projects/buzzpatch", f = [
    {
      patchType: "SleepyPatch for Kids",
      text: "Helps My asd child!! My son is 8 and struggles to fall asleep. He is autistic so I guess This can be normal. Well tried melatonin and yes it works but idk not a fan. Tried these and wow work great and as routines work for him using this daily works!! Bought many times so far and will keep purchasing. Thank you for making these. Even got the adult ones. And they help me If I need it."
    },
    {
      patchType: "SleepyPatch for Kids",
      text: "I was sceptical but 4 weeks in: LIFE-CHANGING. Our 2 year old was really sporadical in his sleep, a week or so of sleeping through, and then months on end of being up at least once a night, settling only after yet more milk and us losing between 2-3 hours of sleep a night. I bought these on a whim and the first night he was still up, but since that we’ve only had one night where he hasn’t slept for 11 hours, and that’s because he was uncomfortable with constipation. He is also going to bed earlier - starting to settle himself and sleeping longer. But most importantly we are getting a solid nights sleep."
    },
    {
      patchType: "ZenPatch - Mood Calming Patches",
      text: "This is the third day I’ve put one on my little boy’s shirt… once i notice him getting super hyper or all over the place doing everything under the sun… or even when he gets super cranky and fussy, I sneak and put one on his shirt. No lie, about 15-20 minutes later he’s a happy, calm, playful little dude. I also sent him to daycare wearing one and explained what it was to his teachers. At pick up time they expressed that he was a lot more gentle and calm with his friends and he had a great day. I wish I had known about these patches SOONER!!"
    },
    {
      patchType: "ZenPatch - Mood Calming Patches",
      text: "Mood calming patches. My son has been wearing them since January. They have helped him so much. Obviously he still has bad days but not like before we used them. He is even aware if he doesn’t wear one it affects him negatively. Just wish they were in plain clothes as I think the animals are a bit childish"
    },
    {
      patchType: "Mosquito Patches for Kids",
      text: "Best purchase ever too bad I waited so long but now we're stocked and loyal customers. we use the buzz patches for the whole family now after buying them for my 8 month old. they work like magic and we love in swampy hot climate perfect recipe for bugs especially mosquitoes. wearing the patches you will see them fly right on by"
    },
    {
      patchType: "Mosquito Patches for Kids",
      text: "Works better than bug sprays! The patches worked better than expected. Bug sprays rarely work for me. I shared with other adults and we had a good chuckle about which fun designs to use."
    },
    {
      patchType: "MagicPatch Itch Relief Patches",
      text: "These are great for helping with the itch from mosquito bites. I gave the product 4 stars because they don’t always work. Both my son and I found that sometimes the patches are very effective and sometimes they don’t do anything. If you have one that doesn’t do anything I found trying another patch to work. Not sure why this is."
    },
    {
      patchType: "MagicPatch Itch Relief Patches",
      text: "These itch relief patches are FANTASTIC! I garden & get bit by mosquitoes a lot. And itch a lot! I can't wait till my grandkids come to see how they like them! I'm glad there's no chemicals in them, just the gridwork! Great job, guys!!"
    },
    {
      patchType: "SunnyPatch UV-Detecting Stickers",
      text: "I can't recommend SunnyPatch enough! Not only is it a fun and effective way to monitor sun protection, but it's also a great conversation starter at the park. Other parents are always asking where we got our nifty color-changing patches!"
    },
    {
      patchType: "SunnyPatch UV-Detecting Stickers",
      text: "As a parent of a child with sensitive skin, I was thrilled to find a sun-safety product that's compatible with our favorite gentle sunscreen. SunnyPatch has made outdoor playtime so much more enjoyable and worry-free for our family."
    },
    {
      patchType: "FocusPatch - Focus Enhancing Stickers",
      text: "This product has really helped my son . We are going through a ADHD. Assessment and I really do not want to medicate him if I can get away with it his teacher have said they have seen a 60 % improvement which is a a big improvement for him"
    },
    {
      patchType: "FocusPatch - Focus Enhancing Stickers",
      text: "Our daughter has be through a lot of stuff and we have tried everything under the sun she has asthma so unable to take beta blockers for her anxiety these patch have been a god send I have recommend to a friend who son doesn’t sleep and has adhd let’s hope her sees as much as a difference as we have thank you from the bottom of our hearts"
    },
    {
      patchType: "StuffyPatch - Congestion Relief Patch",
      text: "I got the StuffyPatch for my 7-year-old son who often wakes up with a congested nose. We put the patch on his pillowcase, and it worked wonders! Not only did it help him breathe easier, but it also allowed for a full night of uninterrupted sleep for the whole family."
    },
    {
      patchType: "StuffyPatch - Congestion Relief Patch",
      text: "StuffyPatch has been an absolute lifesaver for my 4-year-old who suffers from severe seasonal allergies. The moment we started using the patch, her congested nose and blocked nasal passages cleared up, allowing her to enjoy her days to the fullest. I can't recommend StuffyPatch enough - it's been a game-changer for our family!"
    },
    {
      patchType: "Allergy Relief Stickers",
      text: "These patches have helped my baby so much 11 months old so to young to take any antihistamine and a doubt I will ever use antihistamine again as these patches have worked brilliant even my 8 year old has been using them, highly recommend"
    },
    {
      patchType: "Allergy Relief Stickers",
      text: "I really don’t like giving my kids any type of allergy meds when the season gets bad with their running noses. They rarely want to play outside anymore but since getting the AllergyPatches, they’ve been so excited to go outside and play and not be bothered by their allergies. Plus, I don’t have to give them any meds!"
    },
    {
      patchType: "CravePatch Sugar Craving Relief",
      text: "I bought these for myself. I have a love/hate relationship with sugary foods and have been advised to cut down. If these can help me deal with my cravings like the mosquito patches do then I’m all in."
    },
    {
      patchType: "CravePatch Sugar Craving Relief",
      text: "All day my daughter asks me for either something starchy or filled with sugar! I finally gave in and purchased the CravePatch to see if it would make a difference. She’s been eating her meals and snack without constantly asking me for sweets now. Its been fantastic!"
    }
  ], b = [
    {
      text: "“The first thing I noticed when I opened the package were that these smelled seriously amazing. They're citrusy without being overpowering.”",
      img: `${r}/img/new-home-page/slider_logo_1.png`
    },
    {
      text: "“I will say that I did not get bit at all while wearing the BuzzPatch patch mosquito repellent patches! I have used them a couple times since then and have not been bit, either.”",
      img: `${r}/img/new-home-page/slider_logo_2.png`
    },
    {
      text: "“Like Garlic for Vampires: These Stickers Help Repel Mosquitoes. Because every kid loves stickers anyway.”",
      img: `${r}/img/new-home-page/slider_logo_3.png`
    },
    {
      text: "“These anti-mosquito stickers were technically developed for kids, but we think they're also perfect for any outdoorsy dads who also happen to be mosquito magnets”",
      img: `${r}/img/new-home-page/slider_logo_4.png`
    },
    {
      text: '“The Buzzpatch scent creates a virtual shield by "camouflaging" your kids from mosquitos) Genius!”',
      img: `${r}/img/new-home-page/slider_logo_5.png`
    }
  ], x = () => {
    let e = [];
    return $("#featured-reviews2 .carousel-item:not(.slick-cloned)").each((i, s) => {
      let t = {};
      t.name = $(s).find(".name").text(), t.img = $(s).find(".review-header>img").attr("data-src") || "no_img", t.text = $(s).find(".review-text p").text(), e.push(t);
    }), console.log(e), e;
  }, k = [
    {
      name: "SleepyPatch for Kids",
      subText: "Sleep Promoting Stickers",
      img: [
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330419244.png?v=1708349179",
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330812460.png?v=1708349182",
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330648620.png?v=1708349499",
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330452012.png?v=1708349191"
      ],
      img2: `${r}/img/new-home-page/sleppypatch.png`,
      link: "https://www.natpat.com/products/sleepypatch-sleep-promoting-stickers",
      variants: [39836565143596, 39836565176364, 39836565110828, 39836565209132]
    },
    {
      name: "Zenpatch for Kids",
      subText: "Mood Calming Patches",
      img: [
        "//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986370986028.png?v=1708349534",
        "//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986371117100.png?v=1708349368",
        "//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986371149868.png?v=1708349363",
        "//www.natpat.com/cdn/shop/files/natpat-zenpatch-mood-calming-patches-for-natural-stress-relief-35986371248172.png?v=1708349370"
      ],
      img2: `${r}/img/new-home-page/zenpatch.png`,
      link: "https://www.natpat.com/products/zenpatch-mood-calming-stickers",
      variants: [39998449221676, 39998449254444, 39998449188908, 39998449287212]
    },
    {
      name: "Mosquito Patches For Kids",
      subText: "Mosquito patches",
      img: [
        "//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981852868652.jpg?v=1708329741",
        "//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981853229100.jpg?v=1708329562",
        "//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981853294636.jpg?v=1708329739",
        "//www.natpat.com/cdn/shop/files/natpat-mosquito-patches-for-kids-happy-outings-with-bite-free-fun-35981853753388.jpg?v=1708329575"
      ],
      img2: `${r}/img/new-home-page/buzzpatch.png`,
      link: "https://www.natpat.com/products/buzzpatch-bundles",
      variants: [39542857695276, 39542857728044, 39542857760812, 39542857793580]
    },
    {
      name: "SunnyPatch",
      subText: "UV-Detecting Stickers",
      img: [
        "//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223792172.png?v=1708349315",
        "//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223628332.png?v=1708348998",
        "//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223726636.png?v=1708349007",
        "//www.natpat.com/cdn/shop/files/natpat-uv-stickers-for-security-and-style-detect-sun-exposure-quickly-35986223857708.png?v=1708348995"
      ],
      img2: `${r}/img/new-home-page/sunnypatch.png`,
      link: "https://www.natpat.com/products/sunnypatch",
      variants: [41098474946604, 41098474979372, 41098474913836, 41098475012140]
    }
  ], v = `.new_trustpilot_reviews.content_wrapper .insta_widget {\r
  margin-bottom: 60px;\r
}\r
\r
#shopify-section-template--15241309847596__custom_liquid_HmbWPi .gradient {\r
  display: block !important;\r
}\r
\r
#shopify-section-template--15241309847596__custom_liquid_HmbWPi {\r
  padding: 0 !important;\r
}\r
\r
.section-template--15241309847596__custom_liquid_HmbWPi-padding {\r
  padding-bottom: 0 !important;\r
}\r
\r
#purchase-slide {\r
  background: #f0f0f4 !important;\r
  margin: 0 !important;\r
  padding: 0 !important;\r
}\r
\r
.new_home_page * {\r
  box-sizing: border-box;\r
  padding: 0;\r
  margin: 0;\r
  font-family: 'Barlow', sans-serif;\r
  letter-spacing: 0;\r
}\r
\r
.new_home_page li {\r
  list-style: none;\r
}\r
\r
.new_home_page .content_wrapper {\r
  max-width: 1200px;\r
  margin: 0 auto;\r
}\r
\r
.new_home_page h2 {\r
  color: #1f4fc9;\r
  text-align: center;\r
  font-family: 'Urbane', sans-serif !important;\r
  font-size: 38px;\r
  font-weight: 900;\r
  line-height: 46px;\r
  margin-bottom: 40px;\r
  text-transform: none !important;\r
}\r
\r
.new_home_page .slick-slider {\r
  margin-bottom: 0px;\r
}\r
\r
.new_home_page .slick-dots {\r
  bottom: -70px;\r
}\r
\r
.new_home_page .slick-dots li button::before {\r
  color: #9aabd5;\r
  transition: all 0.3s;\r
}\r
\r
.new_home_page li.slick-active button:before {\r
  color: #ff209e;\r
  opacity: 1;\r
  font-size: 16px;\r
}\r
\r
.new_home_page .slider_dots {\r
  max-width: 200px;\r
  margin: 0 auto;\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.new_home_page .slider_dots span {\r
  height: 12px;\r
  width: 12px;\r
  margin: 0 4px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.new_home_page .slider_dots span i {\r
  display: flex;\r
  background: #9aabd5;\r
  opacity: 0.5;\r
  border-radius: 50%;\r
  transition: all 0.3s;\r
  height: 12px;\r
  width: 12px;\r
  scale: 0.5;\r
  cursor: pointer;\r
}\r
\r
.new_home_page .slider_dots span.slick-active i {\r
  scale: 0.75;\r
}\r
\r
.new_home_page .slider_dots span.slick-current i {\r
  background: #ff209e;\r
  opacity: 1;\r
  scale: 1;\r
}\r
\r
.new_main_block {\r
  padding: 40px 0;\r
  text-align: center;\r
  position: relative;\r
}\r
\r
.new_main_block .hi {\r
  position: absolute;\r
  /* top: -42px; */\r
  top: 0;\r
  right: -5px;\r
  z-index: 100;\r
  pointer-events: none;\r
}\r
\r
.new_main_block .crs_btn {\r
  border-radius: 100px;\r
  background: #1f4fc9;\r
  color: #fff;\r
  font-size: 16px;\r
  font-weight: 700;\r
  line-height: 24px;\r
  text-transform: uppercase;\r
  cursor: pointer;\r
  padding: 12px 36px;\r
  border: none;\r
  display: inline-flex;\r
  text-decoration: none;\r
  justify-content: center;\r
  align-items: center;\r
}\r
\r
.new_main_block .crs_btn+p {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 8px;\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 600;\r
  line-height: 24px;\r
}\r
\r
.new_main_block .total_reviews {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 8px;\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 600;\r
  line-height: 24px;\r
  margin-bottom: 8px;\r
  text-decoration: none;\r
}\r
\r
.new_main_block h1 {\r
  color: #1f4fc9;\r
  text-align: center;\r
  text-shadow:\r
    0px 12px 8px rgba(0, 0, 0, 0.02),\r
    0px 2px 2px rgba(28, 5, 77, 0.05);\r
  font-family: 'Urbane', sans-serif;\r
  font-size: 46px;\r
  font-weight: 900;\r
  line-height: 54px;\r
  margin-bottom: 40px;\r
}\r
\r
.new_main_block .images {\r
  display: flex;\r
  justify-content: center;\r
  gap: 34px;\r
  max-width: 1250px;\r
  margin: 0 auto;\r
}\r
\r
.new_main_block .images a {\r
  display: flex;\r
  width: calc((100% - 68px) / 3);\r
}\r
\r
.new_main_block .images a img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: contain;\r
}\r
\r
.new_main_block .points {\r
  display: flex;\r
  justify-content: center;\r
  gap: 60px;\r
  margin: 36px auto;\r
  padding: 32px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/main_bg.svg) no-repeat center center;\r
  background-size: contain;\r
}\r
\r
.new_main_block .points li {\r
  display: flex;\r
  align-items: center;\r
  gap: 18px;\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 600;\r
  line-height: 24px;\r
}\r
\r
.new_main_block .points li img {\r
  width: 40px;\r
  height: 40px;\r
}\r
\r
.new_stickers_slider {\r
  background: #f0f0f4;\r
  position: relative;\r
  padding: 0 0 50px;\r
}\r
\r
.new_stickers_slider::before,\r
.new_stickers_slider::after {\r
  position: absolute;\r
  content: '';\r
  width: 100%;\r
  height: 0;\r
  background-clip: padding-box;\r
  left: 0;\r
}\r
\r
.new_stickers_slider::after {\r
  top: calc(100% - 1px);\r
  border-bottom: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_bot.png) 75 round;\r
}\r
\r
.new_stickers_slider::before {\r
  bottom: calc(100% - 1px);\r
  border-top: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_top.png) 75 round;\r
}\r
\r
.new_stickers_slider .item {\r
  background: #fff;\r
  padding: 24px 28px;\r
  border-radius: 12px;\r
  border: 1px solid #e0e4ed;\r
  position: relative;\r
  margin: 0 12px;\r
}\r
\r
.new_stickers_slider .item .tv {\r
  position: absolute;\r
  top: 16px;\r
  left: 16px;\r
  z-index: 1;\r
}\r
\r
.new_stickers_slider .item .save {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  position: absolute;\r
  top: 16px;\r
  right: 0;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/label_item.png) no-repeat center center;\r
  background-size: 100% 100%;\r
  color: #fff;\r
  font-size: 14px;\r
  font-weight: 700;\r
  line-height: 20px;\r
  text-transform: uppercase;\r
  z-index: 1;\r
  padding: 4px 11px;\r
}\r
\r
.new_stickers_slider .item .img {\r
  width: 80%;\r
  margin: 0 auto 20px;\r
  position: relative;\r
}\r
\r
.new_stickers_slider .item .img img:not(.sub_img) {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: contain;\r
}\r
\r
.new_stickers_slider .item .img img.sub_img {\r
  position: absolute;\r
  right: 0;\r
  bottom: -10px;\r
  height: 90px;\r
}\r
\r
.new_stickers_slider .item .name {\r
  color: #1f1f5b;\r
  text-align: center;\r
  font-size: 23px;\r
  font-weight: 700;\r
  line-height: 24px;\r
  margin: 0 0 4px;\r
}\r
\r
.new_stickers_slider .item .sub_text {\r
  color: #1f1f5b;\r
  text-align: center;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 24px;\r
}\r
\r
.new_stickers_slider .item .qty {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  flex-wrap: wrap;\r
  gap: 8px;\r
  margin: 18px 0;\r
}\r
\r
.new_stickers_slider .item .qty span {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  width: calc((100% - 8px) / 2);\r
  border: 1px solid #e5e5e5;\r
  border-radius: 50px;\r
  padding: 12px 0;\r
  color: #1f1f5b;\r
  font-size: 14px;\r
  font-weight: 600;\r
  line-height: 12px;\r
  text-transform: uppercase;\r
  cursor: pointer;\r
}\r
\r
.new_stickers_slider .item .qty span.active {\r
  border: 1px solid #ff209e;\r
  color: #ff209e;\r
}\r
\r
.new_stickers_slider .item .price {\r
  color: #1f1f5b;\r
  font-size: 20px;\r
  font-weight: 700;\r
  line-height: 24px;\r
  margin-bottom: 18px;\r
  text-align: center;\r
}\r
\r
.new_stickers_slider .item .btns {\r
  display: flex;\r
  justify-content: flex-end;\r
  align-items: center;\r
  gap: 18px;\r
}\r
\r
.new_stickers_slider .item .btns button {\r
  border-radius: 100px;\r
  background: #ff209e;\r
  color: #fff;\r
  font-size: 16px;\r
  font-weight: 700;\r
  line-height: 20px;\r
  text-transform: uppercase;\r
  cursor: pointer;\r
  padding: 17px 32px;\r
  border: none;\r
}\r
\r
.new_stickers_slider .item .btns a {\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 20px;\r
  text-decoration: underline;\r
  display: inline-flex;\r
  padding: 0 24px;\r
}\r
\r
.new_trustpilot_reviews {\r
  padding: 120px 0 0;\r
}\r
\r
.new_trustpilot_reviews__trust p {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 8px;\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 600;\r
  line-height: 14px;\r
  margin-bottom: 8px;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 40px;\r
  padding: 0 16px;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust li:not([role='presentation']) {\r
  border-radius: 12px;\r
  background: #f0f0f4;\r
  padding: 22px;\r
  width: calc((100% - 80px) / 3);\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: stretch;\r
  gap: 8px;\r
  align-items: start;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust li:not([role='presentation']) p:first-of-type {\r
  color: #1f1f5b;\r
  font-size: 18px;\r
  font-weight: 700;\r
  line-height: 30px;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust li:not([role='presentation']) p:last-of-type {\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 22px;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust li:not([role='presentation']) p.small {\r
  max-height: 110px;\r
  overflow: hidden;\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 22px;\r
  position: relative;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust li:not([role='presentation']) p.small::after {\r
  content: '...';\r
  position: absolute;\r
  bottom: 0;\r
  right: 0;\r
  width: 50%;\r
  height: 22px;\r
  background: #f0f0f4;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust li:not([role='presentation']) .read_more {\r
  color: #616267;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 22px;\r
  text-decoration-line: underline;\r
  cursor: pointer;\r
}\r
\r
.new_trustpilot_reviews .reviews_trust li:not([role='presentation']) img {\r
  margin-top: auto;\r
}\r
\r
.new_trustpilot_reviews .pages_r {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 10px;\r
  margin-top: 40px;\r
}\r
\r
.new_trustpilot_reviews .pages_r span {\r
  font-weight: 500;\r
  font-size: 16px;\r
  cursor: pointer;\r
  transition: all 0.3s;\r
}\r
\r
.new_trustpilot_reviews .pages_r span.active {\r
  font-weight: 700;\r
  font-size: 18px;\r
}\r
\r
.new_slider_news {\r
  padding: 70px 0;\r
}\r
\r
.new_slider_news h2 {\r
  width: fit-content;\r
  margin: 0 auto 40px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/h2_bg.png) no-repeat center center;\r
  background-size: contain;\r
  padding: 26px 90px;\r
  color: #fff;\r
}\r
\r
.new_slider_news .slider_wrapper {\r
  display: flex;\r
  margin-bottom: 40px;\r
}\r
\r
.new_slider_news .slider_wrapper .slide {\r
  position: relative;\r
  margin: 0 15px;\r
  padding: 34px 38px 32px;\r
  text-align: center;\r
  min-height: 275px;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: space-between;\r
}\r
\r
.new_slider_news .slider_wrapper .slide .bg {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  z-index: 0;\r
}\r
\r
.new_slider_news .slider_wrapper .slide .bg img {\r
  width: 100%;\r
  height: 100%;\r
  display: block;\r
}\r
\r
.new_slider_news .slider_wrapper .slide p {\r
  position: relative;\r
  z-index: 1;\r
  color: #fff;\r
  text-align: center;\r
  font-size: 18px;\r
  font-weight: 600;\r
  line-height: 26px;\r
}\r
\r
.new_slider_news .slider_wrapper .slide>img {\r
  position: relative;\r
  z-index: 1;\r
  max-height: 40px;\r
  max-width: 70%;\r
  margin: 10px auto 0;\r
}\r
\r
.new_slider_news .slick-track {\r
  height: 100%;\r
}\r
\r
.new_science_block {\r
  border-bottom: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75 round;\r
  background-clip: padding-box;\r
  position: relative;\r
  margin-bottom: -48px;\r
  padding-bottom: 50px;\r
}\r
\r
.new_science_block .content_wrapper {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: start;\r
  gap: 76px;\r
}\r
\r
.new_science_block .content_wrapper>div {\r
  width: calc((100% - 76px) / 2);\r
  aspect-ratio: 1/1;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/gray_bg.svg) no-repeat center center;\r
  background-size: 100% 100%;\r
}\r
\r
.new_science_block .content_wrapper>div:first-of-type img {\r
  right: -100%;\r
  top: -15px;\r
}\r
\r
body .new_trustpilot_reviews.content_wrapper .insta_widget {\r
  margin-bottom: 0;\r
}\r
\r
.new_trustpilot_reviews__trust h2 {\r
  margin-bottom: 20px;\r
}\r
\r
.new_science_block .content_wrapper>div:last-of-type {\r
  margin-top: 380px;\r
}\r
\r
.new_science_block .content_wrapper>div:last-of-type img {\r
  top: 85px;\r
  left: -100%;\r
}\r
\r
.new_science_block .content_wrapper>div p {\r
  color: #1f1f5b;\r
  font-size: 22px;\r
  font-weight: 500;\r
  line-height: 32px;\r
  padding: 64px;\r
  position: relative;\r
}\r
\r
.new_science_block .content_wrapper>div p img {\r
  position: absolute;\r
}\r
\r
.new_natpat_block {\r
  height: 800px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.new_natpat_block .parallax {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 120%;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/big_bg.webp) no-repeat center center;\r
  background-size: cover !important;\r
  z-index: -1;\r
  display: block !important;\r
}\r
\r
.new_natpat_block p {\r
  color: #1f1f5b;\r
  text-align: center;\r
  font-size: 26px;\r
  font-weight: 600;\r
  line-height: 36px;\r
  position: relative;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/white_bg.svg) no-repeat center center;\r
  background-size: 100% 100%;\r
  max-width: 630px;\r
  padding: 80px 66px 108px;\r
  filter: drop-shadow(0px 4px 24px rgba(31, 31, 91, 0.35));\r
}\r
\r
.new_natpat_block p img {\r
  position: absolute;\r
  left: 50%;\r
  top: calc(100% - 85px);\r
  transform: translateX(-50%);\r
}\r
\r
.new_info_block {\r
  background: #1f4fc9;\r
  padding: 80px 16px;\r
  position: relative;\r
}\r
\r
.new_info_block::before,\r
.new_info_block::after {\r
  position: absolute;\r
  content: '';\r
  width: 100%;\r
  height: 0;\r
  background-clip: padding-box;\r
  left: 0;\r
}\r
\r
.new_info_block::before {\r
  bottom: calc(100% - 3px);\r
  border-top: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_top.png) 75 round;\r
}\r
\r
.new_info_block::after {\r
  top: calc(100% - 3px);\r
  border-bottom: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_bot.png) 75 round;\r
}\r
\r
.new_info_block .content_wrapper {\r
  display: flex;\r
  justify-content: center;\r
  align-items: start;\r
  gap: 76px;\r
}\r
\r
.new_info_block .content_wrapper>div {\r
  width: calc((100% - 76px) / 2);\r
}\r
\r
.new_info_block .content_wrapper p {\r
  color: #fff;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 24px;\r
}\r
\r
.new_info_block .content_wrapper p.special {\r
  font-size: 18px;\r
  font-weight: 600;\r
  line-height: 26px;\r
  margin-top: 38px;\r
  padding: 24px 32px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/special_bg.png) no-repeat center center;\r
  background-size: 100% 100%;\r
}\r
\r
.new_info_block .img_slide {\r
  aspect-ratio: 1/1;\r
  border-radius: 24px;\r
  overflow: hidden;\r
}\r
\r
.new_info_block .img_slide img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
}\r
\r
.new_info_block .slider_photo {\r
  z-index: 5;\r
}\r
\r
.new_info_block .slider_photo::before,\r
.new_info_block .slider_photo::after {\r
  content: '';\r
  position: absolute;\r
  width: 100%;\r
  height: 100%;\r
  border-radius: 24px;\r
}\r
\r
.new_info_block .slider_photo::before {\r
  bottom: -60px;\r
  left: 0;\r
  background: #5e7ac2;\r
  scale: 0.9;\r
  z-index: -1;\r
}\r
\r
.new_info_block .slider_photo::after {\r
  bottom: -120px;\r
  right: 0;\r
  background: rgba(255, 255, 255, 0.3);\r
  scale: 0.8;\r
  z-index: -2;\r
}\r
\r
.new_info_block .slider_photo .slick-arrow {\r
  height: 82px;\r
  width: 82px;\r
  background: #1f4fc9;\r
  border-radius: 50%;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  z-index: 1;\r
}\r
\r
.new_info_block .slider_photo .slick-arrow.slick-next {\r
  right: -41px;\r
}\r
\r
.new_info_block .slider_photo .slick-arrow.slick-next::before {\r
  content: '';\r
  height: 52px;\r
  width: 52px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg) no-repeat center center;\r
  background-size: contain;\r
}\r
\r
.new_info_block .slider_photo .slick-arrow.slick-prev {\r
  left: -41px;\r
}\r
\r
.new_info_block .slider_photo .slick-arrow.slick-prev::before {\r
  content: '';\r
  height: 52px;\r
  width: 52px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg) no-repeat center center;\r
  background-size: contain;\r
  transform: rotate(180deg);\r
}\r
\r
.new_reviews_block {\r
  background: #93c3e9;\r
  padding: 135px 100px;\r
}\r
\r
.new_reviews_block .basic_slider {\r
  display: flex;\r
}\r
\r
.new_reviews_block .slick-track {\r
  height: 100%;\r
}\r
\r
.new_reviews_block .slide {\r
  margin: 0 20px;\r
  background: #fff;\r
  padding: 0 0 24px;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: space-between;\r
  border-radius: 12px;\r
  overflow: hidden;\r
}\r
\r
.new_reviews_block .slide>*:not(:is(.img, span)) {\r
  padding: 0 22px;\r
}\r
\r
.new_reviews_block .slide span {\r
  margin: auto 0 0 22px;\r
  display: flex;\r
  width: fit-content;\r
  justify-content: space-between;\r
  gap: 7px;\r
  padding: 2px 6px;\r
  border-radius: 20px;\r
  background: #00b67e;\r
  color: #fff;\r
  font-size: 13px;\r
  font-weight: 700;\r
  line-height: 22px;\r
}\r
\r
.new_reviews_block .head {\r
  margin: 27px 0 16px;\r
  color: #1f1f5b;\r
  font-size: 20px;\r
  font-weight: 600;\r
  line-height: 30px;\r
}\r
\r
.new_reviews_block .head img {\r
  margin-bottom: 2px;\r
}\r
\r
.new_reviews_block .text {\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 22px;\r
  margin-bottom: 16px;\r
}\r
\r
.new_reviews_block .img {\r
  width: 100%;\r
  height: 240px;\r
}\r
\r
.new_reviews_block .img img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
}\r
\r
.new_reviews_block .slider_dots {\r
  margin-top: 45px;\r
}\r
\r
.new_reviews_block .slick-dots li button::before {\r
  color: #fff;\r
}\r
\r
.new_reviews_block .slick-dots li.slick-active button::before {\r
  color: #ff209e;\r
}\r
\r
.new_home_page .new_reviews_block .slider_dots span:not(.slick-current) i {\r
  background: #fff;\r
}\r
\r
\r
\r
.new_info2_block {\r
  padding: 50px 16px 70px;\r
  position: relative;\r
}\r
\r
.new_info2_block::before,\r
.new_info2_block::after {\r
  position: absolute;\r
  content: '';\r
  width: 100%;\r
  height: 0;\r
  background-clip: padding-box;\r
  left: 0;\r
}\r
\r
.new_info2_block::before {\r
  bottom: calc(100% - 2px);\r
  border-top: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top.png) 75 round;\r
}\r
\r
.new_info2_block::after {\r
  top: calc(100% - 2px);\r
  border-bottom: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75 round;\r
}\r
\r
.new_info2_block .content_wrapper>div {\r
  display: flex;\r
  gap: 76px;\r
  align-items: start;\r
}\r
\r
.new_info2_block .content_wrapper>div>* {\r
  width: calc((100% - 76px) / 2);\r
}\r
\r
.new_info2_block .content_wrapper>div .img {\r
  aspect-ratio: 1/1;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_info2.png) no-repeat center center;\r
  background-size: 100% 100%;\r
  padding: 50px;\r
  display: block;\r
}\r
\r
.new_info2_block .content_wrapper>div .img img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: contain;\r
}\r
\r
.new_info2_block .content_wrapper>div p {\r
  color: #1f1f5b;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 22px;\r
}\r
\r
.new_info2_block .content_wrapper>div p a {\r
  color: #1f4fc9;\r
  text-decoration: underline;\r
}\r
\r
.new_slider_news .slick-arrow::before {\r
  content: '';\r
  height: 78px;\r
  width: 78px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow.svg) no-repeat center center;\r
  background-size: contain;\r
  display: block;\r
}\r
\r
.new_slider_news .slick-arrow.slick-next::before {\r
  transform: rotate(180deg);\r
}\r
\r
.new_slider_news .slick-arrow.slick-next {\r
  right: 50px;\r
  height: 78px;\r
  width: 78px;\r
  z-index: 1;\r
}\r
\r
.new_slider_news .slick-arrow.slick-prev {\r
  left: 50px;\r
  height: 78px;\r
  width: 78px;\r
  z-index: 1;\r
}\r
\r
.new_stickers_slider .slick-arrow {\r
  height: 52px;\r
  width: 52px;\r
  z-index: 1;\r
}\r
\r
.new_stickers_slider .slick-arrow.slick-prev {\r
  transform: rotate(180deg);\r
  left: -50px;\r
}\r
\r
.new_stickers_slider .slick-arrow.slick-next {\r
  right: -50px;\r
}\r
\r
.new_stickers_slider .slick-arrow::before {\r
  content: '';\r
  height: 52px;\r
  width: 52px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg) no-repeat center center;\r
  background-size: contain;\r
  display: block;\r
}\r
\r
footer {\r
  margin-top: 0 !important;\r
  padding-top: 100px !important;\r
}\r
\r
.up_btn {\r
  position: fixed;\r
  right: 6px;\r
  bottom: 20px;\r
  display: none;\r
  z-index: 1000;\r
  cursor: pointer;\r
}\r
\r
body #purchase-slide h2 {\r
  padding: 55px 20px 0px;\r
}\r
\r
#purchase-slide .custom-dots .dot {\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.dots-disabled .custom-dots .slider_navigators {\r
  transform: scale(.75);\r
}\r
\r
.dots-disabled .slider_navigators.slick-current {\r
  transform: scale(1);\r
}\r
\r
@keyframes swing {\r
\r
  25%,\r
  35%,\r
  45%,\r
  55%,\r
  65%,\r
  75% {\r
    transform: rotate(-2deg);\r
  }\r
\r
  30%,\r
  40%,\r
  50%,\r
  60%,\r
  70% {\r
    transform: rotate(2deg);\r
  }\r
}\r
\r
@keyframes slideInOut {\r
  0% {\r
    transform: translateX(100%);\r
  }\r
\r
  20% {\r
    transform: translateX(100%);\r
  }\r
\r
  25% {\r
    transform: translateX(0);\r
  }\r
\r
  75% {\r
    transform: translateX(0);\r
  }\r
\r
  80% {\r
    transform: translateX(100%);\r
  }\r
\r
  100% {\r
    transform: translateX(100%);\r
  }\r
}\r
\r
.hi {\r
  transform-origin: right center;\r
  animation:\r
    slideInOut 10s ease-in-out infinite,\r
    swing 10s ease-in-out infinite;\r
}\r
\r
body {\r
  overflow-x: hidden;\r
}\r
\r
.big-stickers {\r
  display: flex;\r
  gap: 24px;\r
  max-width: 1424px;\r
  padding: 0 16px;\r
  margin: 0 auto;\r
}\r
\r
.big-stickers__sticker {\r
  position: relative;\r
  height: 440px;\r
  width: 100%;\r
  border-radius: 12px;\r
  overflow: hidden;\r
  /* display: flex;\r
  justify-content: center;\r
  align-items: center; */\r
  text-decoration: none;\r
}\r
\r
.big-stickers__stop-sign {\r
  position: absolute;\r
  top: 24px;\r
  left: 24px;\r
  width: 43px;\r
  height: 43px;\r
}\r
\r
.big-stickers__sticker .sticker-bg-img {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
}\r
\r
.big-stickers__sticker .crs-btn {\r
  cursor: pointer;\r
}\r
\r
.big-stickers__right-img {\r
  position: absolute;\r
  top: 50%;\r
  right: 0;\r
  transform: translateY(-50%);\r
}\r
\r
.big-stickers__new-img {\r
  position: absolute;\r
  top: -20px;\r
  left: 27%;\r
}\r
\r
.big-stickers__content {\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  margin-left: auto;\r
  justify-content: space-between;\r
  align-items: center;\r
  height: 100%;\r
  padding: 16px 5px;\r
  width: 40%;\r
}\r
\r
.big-stickers__product-img {\r
  position: absolute;\r
  top: 50%;\r
  right: 50%;\r
  transform: translate(32%, -51%);\r
  width: 288px;\r
  height: 288px;\r
}\r
\r
\r
.big-stickers .big-stickers__sticker:last-child .big-stickers__product-img {\r
  transform: translate(33%, -52%);\r
}\r
\r
.big-stickers .big-stickers__sticker:last-child .big-stickers__right-img {\r
  height: 79px;\r
  right: 11px;\r
  transform: translateY(-77%);\r
}\r
\r
.big-stickers img {\r
  display: block;\r
  max-width: 100%;\r
}\r
\r
.big-stickers__sticker:first-child .big-stickers__content {\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/blue_frame.png) no-repeat center center;\r
}\r
\r
.big-stickers__sticker:last-child .big-stickers__content {\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/purple_frame.png) no-repeat center center;\r
}\r
\r
.big-stickers__content p {\r
  color: #FFF;\r
  text-align: center;\r
  font-size: 24px;\r
  font-style: normal;\r
  font-weight: 700;\r
  line-height: 32px;\r
  z-index: 1;\r
}\r
\r
.big-stickers__content .crs_btn {\r
  padding: 15px 32px;\r
  max-width: 141px;\r
  z-index: 1;\r
}\r
\r
.big-stickers__sticker:first-child .big-stickers__content .crs_btn {\r
  background: #FF209E;\r
}\r
\r
.big-stickers__sticker:last-child .big-stickers__content .crs_btn {\r
  background: #1DA7F8;\r
}\r
\r
.inner-padding {\r
  padding: 0 16px;\r
}\r
\r
.wellness {\r
  padding: 0 16px;\r
  max-width: 1211px;\r
  margin: 70px auto 40px;\r
}\r
\r
.new_home_page .wellness h2 {\r
  margin-bottom: 0;\r
  padding: 0;\r
}\r
\r
.wellness .crs_btn {\r
  padding-block: 0;\r
  height: 40px;\r
  line-height: 24px;\r
}\r
\r
.three-products {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 40px 0;\r
}\r
\r
.three-products a {\r
  display: flex;\r
  flex-direction: row;\r
  border-radius: 12px;\r
  overflow: hidden;\r
  gap: 24px;\r
  background: var(--Grey-light-2, #F7F7F7);\r
  padding-right: 24px;\r
  align-items: center;\r
  width: 32%;\r
  text-decoration: none;\r
}\r
\r
.three-products a div {\r
  background: #E2E2E2;\r
  width: 165px;\r
  height: 165px;\r
  flex-shrink: 0;\r
  display: flex;\r
  align-items: flex-end;\r
  justify-content: center;\r
}\r
\r
.three-products a:last-child div {\r
  align-items: center;\r
}\r
\r
.three-products a p {\r
  color: var(--Midnight, #1F1F5B);\r
  font-size: 18px;\r
  font-style: normal;\r
  font-weight: 600;\r
  line-height: 24px;\r
  max-width: 116px;\r
  text-align: left;\r
}\r
\r
.three-products a p+img {\r
  flex-shrink: 0;\r
}\r
\r
.three-products a div img {\r
  display: block;\r
  max-width: 100%;\r
  max-height: 163px;\r
}\r
\r
\r
.three-products a:nth-child(2) div img {\r
  height: 160px;\r
}\r
\r
.three-products a:nth-child(3) div img {\r
  height: 99px;\r
}\r
\r
.new_main_block {\r
  overflow-x: hidden;\r
}\r
\r
body .custom-dots {\r
  margin: 40px auto 30px;\r
}\r
\r
body #purchase-slide .box h3 {\r
  margin: 27px 0 4px;\r
  font-size: 24px;\r
}\r
\r
body #purchase-slide .price {\r
  font-size: 23px;\r
}\r
\r
body #purchase-slide .price-wrapper {\r
  margin: 16px 0 22px;\r
}\r
\r
body #purchase-slide .item {\r
  padding: 24px 20px;\r
}\r
\r
body #purchase-slide .footer-btns {\r
  margin: 15px 10px 0;\r
}\r
\r
@media (max-width: 1100px) {\r
\r
  .three-products a {\r
    flex-direction: column;\r
    padding: 0 0 12px;\r
  }\r
\r
  .three-products a div {\r
    width: 100%;\r
    height: 111px;\r
  }\r
\r
\r
  .three-products a:nth-child(1) div {\r
    padding: 7px 0 0;\r
  }\r
\r
  .three-products a:nth-child(2) div {\r
    padding: 7px 7px 0 7px;\r
  }\r
\r
  .three-products a:nth-child(3) div {\r
    padding: 20px 12px 20px;\r
  }\r
\r
  .three-products a:nth-child(1) div img {\r
    width: 109px;\r
    height: 104px;\r
  }\r
\r
  .three-products a:nth-child(2) div img {\r
    width: 97px;\r
    height: 104px;\r
  }\r
\r
  .three-products a:nth-child(3) div img {\r
    width: 87px;\r
    height: 69px;\r
  }\r
\r
  .three-products a p {\r
    text-align: center;\r
    /* padding: 0 12px; */\r
    line-height: 20px;\r
  }\r
\r
  .three-products a p+img {\r
    width: 20px;\r
    height: 20px;\r
  }\r
\r
  .big-stickers__content {\r
    width: 43%;\r
  }\r
}\r
\r
@media (min-width: 769px) {\r
  .new_natpat_block .layer {\r
    margin-top: -100px;\r
  }\r
\r
  .mobile {\r
    display: none !important;\r
  }\r
\r
  .new_main_block .images a img,\r
  .new_main_block .crs_btn,\r
  .new_stickers_slider span,\r
  .new_stickers_slider .btns>* {\r
    transition: all 0.3s;\r
  }\r
\r
  .new_main_block .images a:hover img {\r
    transform: scale(1.1);\r
  }\r
\r
  .new_main_block .crs_btn:hover {\r
    background: #3363dd;\r
  }\r
\r
  .new_stickers_slider .qty>span:hover {\r
    border: 1px solid #1f1f5b;\r
  }\r
\r
  .new_stickers_slider .btns a:hover {\r
    color: #ff209e;\r
  }\r
\r
  .new_stickers_slider .btns button:hover {\r
    background-color: #ff5fba;\r
  }\r
\r
  .new_home_page h2 b {\r
    font-family: 'Urbane', sans-serif !important;\r
  }\r
}\r
\r
@media (max-width: 550px) {\r
\r
\r
  .new_reviews_block .slider_dots {\r
    margin-top: 24px;\r
  }\r
\r
  #shopify-section-template--15241309847596__17097813754ae81b0d {\r
    padding: 0 0 !important;\r
  }\r
\r
  .new_trustpilot_reviews.content_wrapper .insta_widget {\r
    margin-bottom: -20px;\r
  }\r
\r
  #purchase-slide h2 {\r
    padding: 0 24px 0 !important;\r
    text-align: left;\r
    margin: 0 0 20px;\r
  }\r
\r
  .desktop {\r
    display: none !important;\r
  }\r
\r
  .new_home_page h2 {\r
    font-size: 22px;\r
    line-height: 30px;\r
    font-family: 'Urbane', sans-serif !important;\r
    text-align: left;\r
    padding: 0 24px;\r
    margin: 0;\r
  }\r
\r
  .new_main_block {\r
    padding: 10px 12px 55px !important;\r
  }\r
\r
  .new_main_block h1 {\r
    font-size: 22px;\r
    line-height: 30px;\r
    margin: 0 0 12px;\r
    text-align: left;\r
    text-shadow: none;\r
  }\r
\r
  .new_main_block .images {\r
    flex-direction: column;\r
    gap: 18px;\r
  }\r
\r
  .new_main_block .images a {\r
    width: 100%;\r
  }\r
\r
  .new_main_block .points {\r
    gap: unset;\r
    padding: 0 0 18px;\r
    background: none;\r
    border-bottom: 1px solid #f0f0f4;\r
    margin: 18px 0;\r
  }\r
\r
  .new_main_block .points li {\r
    flex-direction: column;\r
    gap: 2px;\r
    font-size: 14px;\r
    line-height: 20px;\r
  }\r
\r
  .new_main_block .points li img {\r
    width: 34px;\r
    height: 34px;\r
  }\r
\r
  .new_main_block .total_reviews {\r
    font-size: 14px;\r
    margin-bottom: 18px;\r
    gap: 6px;\r
    justify-content: flex-start;\r
    margin-bottom: 4px;\r
  }\r
\r
  .new_main_block .crs_btn+p {\r
    font-size: 14px;\r
    gap: 6px;\r
  }\r
\r
  .new_main_block .crs_btn+p img {\r
    width: 24px;\r
    height: 24px;\r
  }\r
\r
  .new_stickers_slider {\r
    padding: 0 0 1px !important;\r
  }\r
\r
  .new_stickers_slider .item {\r
    margin: 0;\r
    padding: 20px;\r
    scale: 0.95;\r
    transition: all 0.3s;\r
  }\r
\r
  .new_stickers_slider .item.slick-current {\r
    scale: 1;\r
  }\r
\r
  /* .new_stickers_slider .slick-slider {\r
    margin-bottom: 50px;\r
  } */\r
\r
  .new_stickers_slider .slick-dots {\r
    bottom: -50px;\r
  }\r
\r
  .new_trustpilot_reviews {\r
    padding: 55px 0 0 !important;\r
  }\r
\r
  /* .new_trustpilot_reviews h2 {\r
    font-family: 'Barlow', sans-serif !important;\r
    font-size: 16px;\r
    font-weight: 500;\r
    color: #1f1f5b;\r
    text-transform: unset;\r
    margin-bottom: 9px !important;\r
    text-align: center;\r
  } */\r
\r
  .new_trustpilot_reviews .slick-slide {\r
    scale: 0.91;\r
    transition: all 0.3s;\r
  }\r
\r
  .new_trustpilot_reviews .slick-current {\r
    scale: 1;\r
  }\r
\r
  .new_trustpilot_reviews .slick-dots {\r
    bottom: -50px;\r
  }\r
\r
  .new_trustpilot_reviews .reviews_trust {\r
    margin-bottom: 0;\r
  }\r
\r
  .new_trustpilot_reviews .slider_dots {\r
    margin-top: 24px;\r
  }\r
\r
  .new_slider_news {\r
    padding: 25px 0 !important;\r
  }\r
\r
  .new_slider_news h2 {\r
    position: relative;\r
    z-index: 1;\r
    width: 80%;\r
    padding: 52px 30px;\r
    margin: 0 auto -30px;\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_news_h2_mob.png) no-repeat center center;\r
    background-size: 100% 100%;\r
  }\r
\r
  .new_slider_news .slider_wrapper .slide {\r
    margin: 0 8px;\r
  }\r
\r
  .new_science_block {\r
    border-bottom: 40px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot_mob.png) 65 round;\r
    background-clip: padding-box;\r
    padding: 15px 0 40px !important;\r
    margin-bottom: -38px;\r
  }\r
\r
  .new_science_block .content_wrapper {\r
    flex-direction: column;\r
    gap: 10px;\r
    overflow: hidden;\r
    padding: 30px 0 0;\r
  }\r
\r
  .new_science_block .content_wrapper>div {\r
    width: 100%;\r
    margin-top: 0 !important;\r
    background: none !important;\r
  }\r
\r
  .new_science_block .content_wrapper>div p {\r
    font-size: 16px;\r
    line-height: 22px;\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_science_mob.png) no-repeat;\r
    background-size: calc(100% + 24px) 100%;\r
    width: 75%;\r
    max-width: 300px;\r
  }\r
\r
  /* .new_science_block .content_wrapper>div:last-child p {\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_science_mob.png) no-repeat;\r
  } */\r
\r
  .new_science_block .content_wrapper>div p img {\r
    height: 250px;\r
    top: calc(50% - 100px) !important;\r
  }\r
\r
  .new_science_block .content_wrapper>div:first-of-type p {\r
    padding: 40px 24px;\r
    background-position: right center;\r
  }\r
\r
  .new_science_block .content_wrapper>div:first-of-type p img {\r
    right: -75%;\r
    height: 309px;\r
    top: calc(50% - 128px) !important;\r
    transform: rotate(5deg);\r
  }\r
\r
  .new_science_block .content_wrapper>div:last-of-type p {\r
    margin-left: auto;\r
    padding: 40px 24px 40px 42px;\r
    background-position: left center;\r
  }\r
\r
  .new_science_block .content_wrapper>div:last-of-type p img {\r
    left: -43%;\r
    height: 210px;\r
    top: calc(50% - 93px) !important;\r
  }\r
\r
  .new_natpat_block {\r
    padding: 80px 10px !important;\r
  }\r
\r
  .new_natpat_block .layer {\r
    margin-top: -100px;\r
  }\r
\r
  .new_natpat_block p {\r
    font-size: 20px;\r
    line-height: 28px;\r
    padding: 45px 45px 84px;\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/natpat_bg_mob.png) no-repeat center center;\r
    background-size: 100% 100%;\r
    font-weight: 700;\r
  }\r
\r
  .new_natpat_block p img {\r
    width: 153px;\r
    top: calc(100% - 70px);\r
  }\r
\r
  .new_info_block {\r
    padding: 24px !important;\r
  }\r
\r
  .new_info_block::after {\r
    content: none;\r
  }\r
\r
  .new_info_block .content_wrapper>div {\r
    width: 100%;\r
  }\r
\r
  .new_info_block .content_wrapper>div p.special {\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_special_mob.png) no-repeat center center;\r
    background-size: 100% 100%;\r
    width: calc(100% + 48px);\r
    margin-left: -24px;\r
    padding: 52px 24px;\r
    margin-bottom: -60px;\r
    text-align: center;\r
  }\r
\r
  .new_reviews_block {\r
    padding: 80px 0 !important;\r
  }\r
\r
  .new_reviews_block .slide {\r
    margin: 0 5px;\r
  }\r
\r
  .new_info2_block {\r
    padding: 40px 0 !important;\r
  }\r
\r
  .new_info2_block::before {\r
    border-top: 40px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top_mob.png) 65 round;\r
  }\r
\r
  .new_info2_block::after {\r
    border-bottom: 40px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot_mob.png) 65 round;\r
  }\r
\r
  .new_info2_block .content_wrapper>div>p {\r
    width: 100%;\r
    padding: 0 24px;\r
  }\r
\r
  .new_info2_block .content_wrapper>div>p .img {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_info2_mob.png) no-repeat center center;\r
    background-size: 100% 100%;\r
    height: 280px;\r
    width: calc(100% + 48px);\r
    margin-left: -24px;\r
    padding: 30px 24px;\r
    margin-bottom: 24px;\r
  }\r
\r
  .new_info2_block .content_wrapper>div>p .img img {\r
    width: 100%;\r
    height: 100%;\r
    object-fit: contain;\r
  }\r
\r
  .new_info2_block h2 {\r
    font-size: 20px;\r
    margin-bottom: 25px;\r
  }\r
\r
  .slider_photo {\r
    margin-bottom: 40px !important;\r
  }\r
\r
  .slider_photo .img_slide {\r
    margin: 0;\r
    aspect-ratio: 1/1;\r
    border-radius: 24px;\r
    scale: 0.9;\r
    transition: all 0.3s;\r
    overflow: hidden;\r
  }\r
\r
  .slider_photo .img_slide img {\r
    width: 100%;\r
    height: 100%;\r
    object-fit: cover;\r
  }\r
\r
  .slider_photo .img_slide.slick-current {\r
    scale: 1;\r
  }\r
}\r
\r
@media (max-width: 550px) {\r
  .new_stickers_slider::after {\r
    border-bottom: 16px solid transparent;\r
  }\r
\r
  .new_stickers_slider::before {\r
    border-top: 16px solid transparent;\r
  }\r
\r
  .three-products {\r
    padding: 12px 0;\r
  }\r
\r
  .three-products a p {\r
    font-size: 14px;\r
  }\r
\r
\r
\r
\r
  .wellness {\r
    padding: 0;\r
    margin: 30px auto 0;\r
  }\r
\r
  .three-products a {\r
    gap: 8px;\r
  }\r
\r
  .new_trustpilot_reviews__trust img:first-child {\r
    width: 94px;\r
    height: 24px;\r
  }\r
\r
  .new_trustpilot_reviews__trust img:first-child+img {\r
    width: 102px;\r
    height: 20px;\r
  }\r
\r
  .new_trustpilot_reviews h2 {\r
    margin-bottom: 0;\r
  }\r
\r
  .new_natpat_block {\r
    height: 670px;\r
  }\r
\r
  .new_natpat_block .parallax {\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg-cartoon-mob.png) no-repeat center center;\r
  }\r
\r
  body .custom-dots {\r
    margin: 24px auto 30px;\r
  }\r
\r
\r
  .big-stickers .big-stickers__sticker:first-child .big-stickers__right-img {\r
    transform: translateY(-64%);\r
    height: 100px;\r
  }\r
\r
  .big-stickers .big-stickers__sticker:last-child .big-stickers__right-img {\r
    transform: translateY(-71%);\r
  }\r
}\r
\r
@media (max-width: 1007px) and (min-width: 768px) {\r
\r
  .big-stickers__product-img,\r
  .big-stickers .big-stickers__sticker:last-child .big-stickers__product-img {\r
    transform: scale(0.8) translate(46%, -60%);\r
  }\r
}\r
\r
@media (max-width: 768px) {\r
\r
  .big-stickers {\r
    flex-direction: column;\r
    gap: 12px;\r
    padding: 0;\r
  }\r
\r
  .big-stickers__sticker {\r
    height: 280px;\r
  }\r
\r
  .big-stickers__stop-sign {\r
    left: 12px;\r
    top: 12px;\r
    width: 34px;\r
    height: 34px;\r
  }\r
\r
  .new_trustpilot_reviews .reviews_trust {\r
    padding: 0;\r
  }\r
\r
\r
  .big-stickers__content p {\r
    font-size: 16px;\r
    line-height: 24px;\r
    /* 150% */\r
  }\r
\r
  .big-stickers__content {\r
    width: 49%;\r
  }\r
\r
\r
  .big-stickers__product-img {\r
    transform: scale(0.58) translate(68%, -88%);\r
  }\r
\r
  .big-stickers .big-stickers__sticker:last-child .big-stickers__product-img {\r
    transform: scale(0.55) translate(72%, -90%);\r
  }\r
\r
  .big-stickers__new-img {\r
    top: 3px;\r
    left: 22%;\r
    transform: scale(1.6);\r
  }\r
\r
  .big-stickers__content .crs_btn {\r
    padding: 8px 32px;\r
  }\r
\r
}\r
\r
\r
\r
@media (max-width: 768px) and (min-width: 550px) {\r
  .big-stickers__content {\r
    width: 33%;\r
  }\r
\r
\r
\r
  .big-stickers {\r
    padding: 0 16px;\r
  }\r
\r
}`;
  `${k.map((e, n) => (
    /* HTML */
    ` <div class="item">
              <img src="${r}/img/new-home-page/as_seen.svg" class="tv" alt="tv" />
              <span class="save">40% off</span>
              <div class="img">
                <img src="${e.img[2]}" alt="main" />
                <img class="sub_img" src="${e.img2}" alt="illustration" />
              </div>
              <p class="name">${e.name}</p>
              <p class="sub_text">${e.subText}</p>
              <div class="qty">
                <span
                  class="active"
                  data-variant="${e.variants[2]}"
                  data-img="${e.img[2]}"
                  data-price="12.00"
                  data-save="40"
                  >3 packs</span
                >
                <span data-variant="${e.variants[0]}" data-img="${e.img[0]}" data-price="14.99" data-save="50"
                  >1 pack</span
                >
                <span data-variant="${e.variants[1]}" data-img="${e.img[1]}" data-price="13.50" data-save="33"
                  >2 packs</span
                >
                <span data-variant="${e.variants[3]}" data-img="${e.img[3]}" data-price="10.50" data-save="48"
                  >4 packs</span
                >
              </div>
              <p class="price">$12.00 each</p>
              <div class="btns">
                <a href="${e.link}">Learn More</a>
                <button data-id="${e.variants[2]}">Add to cart</button>
              </div>
            </div>`
  )).join("")}`;
  const y = (
    /* HTML */
    `
  <div class="up_btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path
        d="M26.0002 47.6666C37.9663 47.6666 47.6668 37.9661 47.6668 25.9999C47.6668 14.0337 37.9663 4.33325 26.0002 4.33325C14.034 4.33325 4.3335 14.0337 4.3335 25.9999C4.3335 37.9661 14.034 47.6666 26.0002 47.6666Z"
        fill="#FF209E"
      />
      <path d="M26 33.5832V20.5833" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M19.5 24.9167L26 18.4167L32.5 24.9167"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
`
  ), z = (e) => (
    /* HTML */
    `
    <section class="new_main_block">
      <style>
        ${v}
      </style>
      <span class="hi desktop">
        <img src="${r}/img/new-home-page/side.svg" alt="hi" />
      </span>
      <a class="total_reviews">
          <img src="${r}/img/new-home-page/stars_green.svg" alt="stars" />
          <span>Excellent | 2,943</span>
          <span>Customer reviews</span>
        </a>
        <h1>
          Natural solutions for better<br class="desktop" />
          sleep, mood, focus and more!
        </h1>

        <div class="big-stickers">
          <div class="big-stickers__sticker">
            <img  class="sticker-bg-img" src="${r}/img/new-home-page/natpat_kid1.jpg" alt="" />
            <img class="sticker-bg-img mobile" src="${r}/img/new-home-page/natpat_kid1_mob.png" alt="" />
            <div class="big-stickers__content">
              <p>Kids Tick Repellent Stickers</p>
              <div class="big-stickers__product-img">
                <img src="${r}/img/new-home-page/new-label.svg" class="big-stickers__new-img" alt="">
                <img src="${r}/img/new-home-page/kids-tick.png" alt="Kids Tick Repellent Stickers" />
              </div>
              <span class="crs_btn">Shop now</span>
            </div>
            <img src="${r}/img/new-home-page/stop-bugs.svg" class="big-stickers__stop-sign" alt="stop bugs">
            <img src="${r}/img/new-home-page/oops.svg" class="big-stickers__right-img" alt="">
          </div>
          <div class="big-stickers__sticker">
            <img class="sticker-bg-img" src="${r}/img/new-home-page/natpat_kid2.jpg" alt="kid" />
            <img class="sticker-bg-img mobile" src="${r}/img/new-home-page/natpat_kid2_mob.png" alt="" />
            <div class="big-stickers__content">
              <p>Mosquito Repellent Stickers</p>
              <div class="big-stickers__product-img">
                <img src="${r}/img/new-home-page/mosquito_stickers.png" alt="Mosquito Repellent Stickers" />
              </div>
              <span class="crs_btn">Shop now</span>
              </div>
            <img src="${r}/img/new-home-page/stop-mosquito.svg" class="big-stickers__stop-sign" alt="stop bugs">
            <img src="${r}/img/new-home-page/butterflies.png" class="big-stickers__right-img" alt="">
          </div>
        </div>
        <div class="wellness">
        <h2>All-age wellness. Natural products for:</h2>
        <div class="three-products">
          <a href="/collections/wellness-cognitive" class="three-products__product">
            <div>
              <img src="${r}/img/new-home-page/new-pack6.png" alt="Wellness & Cognitive" />
            </div>
            <p>Wellness & Cognitive</p>
            <img src="${r}/img/new-home-page/blue-right-arrow.svg" alt="" />
          </a>
          <a href="/collections/outdoor-protection" class="three-products__product">
            <div>
            <img src="${r}/img/new-home-page/new-pack4.png" alt="Outdoor Protection" />
            </div>
            <p>Outdoor Protection</p>
            <img src="${r}/img/new-home-page/blue-right-arrow.svg" alt="" />
          </a>
          <a href="/collections/respiratory-allergy-relief" class="three-products__product">
          <div>
          <img src="${r}/img/new-home-page/new-pack2.png" alt="Respiratory & Allergy Relief" />
          </div>
            <p>Respiratory & Allergy Relief</p>
            <img src="${r}/img/new-home-page/blue-right-arrow.svg" alt="" />
          </a>
        </div>
        <a class="crs_btn" href="/collections/homepage">Explore All</a>
        </div>
    </section>
  `
  ), T = (
    /* HTML */
    ' <section class="new_stickers_slider"></section> '
  ), S = (
    /* HTML */
    `
  <section class="new_trustpilot_reviews content_wrapper">
    <div class="new_trustpilot_reviews__trust">
    <p>
      <img src="${r}/img/trustpilot.svg" alt="trustpilot" />
      <img src="${r}/img/stars-trust.svg" alt="trustpilot stars" />
      <span>Excellent</span>
    </p>
    <h2>Trusted by over 1 million customers</h2>
    </div>
    <div class="insta_widget"></div>
    <ul class="reviews_trust parent_slider">
      ${f.map((e, n) => (
      /* HTML */
      ` <li>
            <p>${e.patchType}</p>
            <p>${e.text}</p>
            <img src="${r}/img/new-home-page/stars_green.svg" alt="stars" />
          </li>`
    )).join("")}
    </ul>
    <div class="slider_dots slider_dots2 mobile">
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
      <span><i></i></span>
    </div>
    <div class="pages_r desktop">
      <span class="active">1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </section>
`
  ), j = (
    /* HTML */
    ` <section class="new_slider_news">
  <h2>We're in the news... for good reasons</h2>
  <div class="slider_wrapper parent_slider">
    ${b.map((e, n) => (
      /* HTML */
      `
          <div class="slide">
            <div class="bg"><img src="${r}/img/slide_bg_${n + 1}.png" /></div>
            <p>${e.text}</p>
            <img src="${e.img}" alt="press logo" />
          </div>
        `
    )).join("")}
  </div>
  <div class="slider_dots slider_dots3">
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
    <span><i></i></span>
  </div>
</section>`
  ), P = (
    /* HTML */
    `
  <section class="new_science_block">
    <h2>Unlocking the science behind NATPAT patches</h2>
    <div class="content_wrapper">
      <div>
        <p>
          At NATPAT, skepticism is a sign of care, especially when it comes to products for our loved ones. That's why
          we're not just about promises; we're about proving. Our mission is to blend playful innovation with solid
          science, offering you peace of mind with every NATPAT patch. From natural essential oils to cutting-edge
          slow-release technology, every detail of NATPAT patches is meticulously planned to ensure safety, avoid
          allergies, and deliver measurable results.
          <img src="${r}/img/new-home-page/character1.svg" alt="character" />
        </p>
      </div>
      <div>
        <p>
          Discover the power of AromaWeave™, our pioneering bamboo-based fiber that's reshaping how we experience
          essential oils. With a commitment to sustainability and effectiveness, AromaWeave™ stands out with its
          biodegradable nature and unique ability to deliver consistent, long-lasting aromas. Join us as we delve into
          the science, sustainability, and sensory delight of AromaWeave™, and see how it's setting new standards in
          the world of aromatherapy.
          <img src="${r}/img/new-home-page/character2.svg" alt="character" />
        </p>
      </div>
    </div>
  </section>
`
  ), A = (
    /* HTML */
    ` <section class="new_natpat_block">
  <div class="layer">
    <p>
      "At NATPAT, it's not just about products; it's about a way of life. We're here to bring you a kinder, more fun,
      and totally natural approach to feeling great. Join us in this journey towards a happier, healthier you!"
      <img src="${r}/img/new-home-page/nat_pat.svg" alt="natpat" />
    </p>
  </div>
  <div class="parallax"></div>
</section>`
  ), I = (
    /* HTML */
    `<section class="new_info_block">
  <div class="content_wrapper">
    <div class="slider_photo">
      ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
      /*HTML*/
      `<div class="img_slide">
            <img src="${r}/img/new-home-page/slider_photo_${e}.jpg" alt="img1" />
          </div>`
    )).join("")}
    </div>
    <div>
      <p>
        Hey there! At NATPAT, we're all about unlocking the superhero potential in every kiddo. We totally get it,
        right? Kids have their ups and downs, from mood swings that could rival any soap opera to those nights when they
        just won't hit the hay. And let's be honest, us parents could use a little help steering the ship sometimes.
        <br /><br />
        In this fast-paced world where popping a pill seems like the go-to, we thought, “Hey, why not take a step back
        and give Mother Nature a high five?” Sure, meds have their place (no shade there!), but why not start with
        something a bit more chill?<br /><br />
        Enter our secret weapon: stickers! But not just any stickers. These little guys are like a comforting hug from
        your favorite essential oils. They've been around for ages and trust us, they’re not just old wives' tales.
        Science gives them a big thumbs up too!<br /><br />
        Next time you're wandering down those drugstore aisles, remember our mantra: “Start with a sticker.” Our
        stickers are more than just a pretty face. They're packed with nature's goodness and are an absolute hit with
        the kids. It's like sneaking veggies into their favorite meal – they'll love them, and you'll love knowing
        you're choosing something gentle and effective.
      </p>
      <p class="special">
        At NATPAT, we’re doing more than just selling something cool. We’re all about bringing smiles, health, and a bit
        of nature’s magic into your family's life. Here’s to making well-being fun, natural, and full of joy! 🌿✨🌟
      </p>
    </div>
  </div>
</section>`
  ), q = (
    /* HTML */
    `
  <section class="new_reviews_block">
    <div class="content_wrapper">
      <div class="basic_slider parent_slider"></div>
      <div class="slider_dots slider_dots4">
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
      </div>
    </div>
  </section>
`
  ), C = (
    /* HTML */
    `
  <section class="new_info2_block">
    <div class="content_wrapper">
      <h2>Health and wellness patches</h2>
      <div>
        <div class="img desktop">
          <img src="${r}/img/new-home-page/packs.webp" alt="packs" />
        </div>
        <p>
          NATPAT stands as a beacon of innovation in the realm of health and wellness, offering a unique range of
          patches and stickers designed to enhance your daily life. Each product is crafted with care, ensuring a
          natural, effective solution to various everyday challenges. <br /><br />
          <span class="img mobile">
            <img src="${r}/img/new-home-page/packs.webp" alt="packs" />
          </span>
          For those seeking tranquility in their hectic lives, NATPAT's <a
            href="/products/zenpatch-mood-calming-stickers"
            >calming patches</a
          > and <a href="/products/zenpatch-mood-calming-stickers">calming stickers</a> offer a soothing escape. The <a
            href="/products/sunnypatch"
            >uv stickers</a
          > are a must-have for sun lovers, providing a smart way to monitor UV exposure. When congestion hits, the <a
            href="/products/stuffypatch"
            >stuffy patch</a
          > is an excellent ally, helping to alleviate discomfort.<br /><br />
          Parents will appreciate the gentle effectiveness of the <a
            href="/products/sleepypatch-sleep-promoting-stickers"
            >sleepy patch for kids</a
          >, ensuring a peaceful night for the little ones. For adults, the <a
            href="/products/sleepypatch-sleep-promoting-stickers"
            >sleep patch for adults</a
          > offers a similar benefit, promoting restful sleep. The <a href="/products/pack-magic-patch-bundles"
            >itch patch</a
          > is a quick solution for those annoying itches, while the <a href="/pages/magicpatch">bug bite patches</a
          > provide relief from insect bites.<br /><br />
          For those needing a concentration boost, the <a href="/products/focuspatch-focus-enhancing-stickers"
            >focus patch</a
          > is a game-changer. If managing appetite is a concern, the <a
            href="/products/cravepatch-appetite-control-stickers"
            >appetite suppressant patches</a
          > are a discreet and effective aid. Allergy sufferers will find solace in the <a
            href="/products/allergypatch-allergy-relief-stickers"
            >allergy relief stickers</a
          >, designed to ease symptoms naturally.<br /><br />
          NATPAT also offers specialized solutions for mosquito protection. Their <a
            href="/products/adult-buzzpatch-mosquito-repellent-patches"
          >
            mosquito patches for adults </a
          > and <a href="/products/buzzpatch-bundles">mosquito patches for kids</a> are a safe, chemical-free way to
          keep mosquitoes at bay. Additionally, the <a href="/pages/buzzpatch">mosquito stickers</a>  provide a fun and
          effective alternative for children.<br /><br />
          In essence, NATPAT is more than just a brand; it's a lifestyle choice for those who prioritize health,
          wellness, and natural solutions in their daily lives.
        </p>
      </div>
    </div>
  </section>
`
  );
  h("main", () => {
    document.querySelector("main").style.opacity = "0";
  }), w({ name: "HomePage Redesign 2", dev: "AK" }), _("exp_homepage");
  const M = window.innerWidth < 768 ? "mobile" : "desktop", m = document.createElement("link");
  m.rel = "stylesheet", m.href = "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@900&display=swap", document.head.appendChild(m);
  class N {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      this.clearOldContent();
    }
    clearOldContent() {
      h("#MainContent .icartShopifyCartContent", () => {
        $("#MainContent .icartShopifyCartContent").css("display", "none"), $("#MainContent .icartShopifyCartContent").after('<div class="new_home_page"></div>'), h("#featured-reviews2 .carousel-item:not(.slick-cloned)", () => {
          this.addBlocks(), this.patchesCardsFunctionality(), this.addEvents(), this.fixes();
        });
      });
    }
    async addBlocks() {
      $(".new_home_page").append(z(this.device)).append(T).append(S).append(j).append(P).append(A).append(I).append(q).append(C).append(y);
      const n = x().map((i, s) => (
        /* HTML */
        `
          <div class="slide">
            <div class="img">
              <img src="${i.img}" alt="review img" />
            </div>
            <p class="head">
              <img src="${r}/img/new-home-page/stars_green.svg" alt="stars" />
              ${i.name}
            </p>
            <p class="text">${i.text}</p>
            <span>
              <img src="${r}/img/new-home-page/check_white.svg" alt="verified" />
              Verified Buyer
            </span>
          </div>
        `
      )).join("");
      if ($(".new_reviews_block .basic_slider").append(n), h(".slider_dots-2.slick-initialized", () => {
        $(".insta_widget").append($("#shopify-section-template--15241309847596__17097813754ae81b0d")), $(".new_stickers_slider").append($("#shopify-section-template--15241309847596__custom_liquid_HmbWPi")), $("#shopify-block-archive_detect_ugc_gallery_8cpCVL").css("display", "block"), $("#purchaseSlide.slick-initialized").slick("setPosition"), $(".slider_dots-2.slick-initialized").slick("setPosition");
      }), document.querySelector("main").style.opacity = "1", $(window).on("scroll", function() {
        $(window).scrollTop() || 0 > 100 ? $(".up_btn").fadeIn() : $(".up_btn").fadeOut();
        const i = $(".new_natpat_block .parallax"), s = i[0].getBoundingClientRect(), t = window.scrollY || document.documentElement.scrollTop, o = s.top + t;
        t + window.innerHeight > o && i.css("transform", `translateY(${(t - o) * 0.3}px)`);
      }), $(".up_btn").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
      }), this.device === "mobile" && $(".new_info2_block").prepend($(".slider_photo")), $(".new_stickers_slider .slider_wrapper").slick({
        slidesToShow: this.device === "mobile" ? 1 : 3,
        slidesToScroll: 1,
        arrows: this.device !== "mobile",
        infinite: !0,
        centerMode: this.device === "mobile",
        centerPadding: this.device === "mobile" ? "24px" : "0",
        asNavFor: ".new_stickers_slider .slider_dots"
      }), this.device === "mobile" && $(".new_trustpilot_reviews .reviews_trust").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        infinite: !0,
        centerMode: !0,
        centerPadding: "35px",
        adaptiveHeight: !0,
        asNavFor: ".new_trustpilot_reviews .slider_dots"
      }), $(".new_slider_news .slider_wrapper").slick({
        slidesToShow: this.device === "mobile" ? 1 : 3,
        slidesToScroll: 1,
        arrows: this.device !== "mobile",
        infinite: !0,
        centerMode: !0,
        centerPadding: this.device === "mobile" ? "24px" : window.innerWidth > 1440 ? "90px" : "0",
        asNavFor: ".new_slider_news .slider_dots"
      }), $(".basic_slider").slick({
        slidesToShow: this.device === "mobile" ? 1 : 3,
        slidesToScroll: 1,
        arrows: !1,
        infinite: !0,
        centerMode: this.device === "mobile",
        centerPadding: this.device === "mobile" ? "24px" : "0",
        asNavFor: ".new_reviews_block .slider_dots"
      }), $(".slider_photo").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: this.device !== "mobile",
        infinite: !0,
        centerMode: this.device === "mobile",
        fade: this.device !== "mobile"
      }), $(".slider_dots").each(function(i, s) {
        $(s).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: !1,
          infinite: !0,
          centerMode: !0,
          centerPadding: "60px",
          focusOnSelect: !0,
          asNavFor: $(s).closest("section").find(".parent_slider")
        });
      }), $("a.total_reviews").on("click", function(i) {
        i.preventDefault(), u(".new_trustpilot_reviews");
      }), $(".reviews_trust p:nth-child(2)").each(function(i, s) {
        if ($(s).text().length > 200) {
          const t = $(s).text(), o = t.slice(0, 200).lastIndexOf(" ");
          o !== -1 && $(s).text(t.slice(0, o) + "..."), $(s).after('<span class="read_more">Read more</span>'), $(s).next().on("click", function() {
            $(s).text(t), $(this).remove(), $(s).closest(".reviews_trust").slick("setPosition");
          });
        }
      }), this.device === "desktop") {
        const s = $(".new_trustpilot_reviews .reviews_trust li");
        s.each(function(t, o) {
          t >= 6 && $(o).css("display", "none");
        }), $(".pages_r span").on("click", function() {
          if ($(this).hasClass("active"))
            return;
          const t = +$(this).text(), o = (t - 1) * 6, a = t * 6 - 1, c = $(".new_trustpilot_reviews .reviews_trust");
          c.fadeOut(function() {
            s.each(function(d, g) {
              d >= o && d <= a ? $(g).show() : $(g).hide();
            }), c.fadeIn();
          }), $(this).addClass("active").siblings().removeClass("active");
        });
      }
    }
    patchesCardsFunctionality() {
      $(".new_stickers_slider .item").each(function(n, i) {
        const s = $(i).find("span"), t = $(i).find(".img img[alt=main]"), o = $(i).find("button"), a = $(i).find(".price"), c = $(i).find(".save");
        s.on("click", function() {
          $(this).addClass("active").siblings().removeClass("active"), t.attr("src", $(this).data("img")), o.attr("data-id", $(this).data("variant")), a.text(`$${$(this).data("price")} each`), c.text(`${$(this).data("save")}% off`);
        }), o.on("click", function() {
          const B = {
            items: [
              {
                id: $(this).data("id"),
                quantity: 1
              }
            ]
          };
          fetch(window.Shopify.routes.root + "cart/add.js?ref_icart=true", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(B)
          }).then((R) => R.json());
        });
      });
    }
    addEvents() {
      const n = "exp_hp_2_";
      l(".big-stickers__sticker", "exp_hp_2_main_image_0", "Main block", "Kids Tick"), this.device === "desktop" ? $(".big-stickers__sticker .crs_btn").each(function(t, o) {
        $(o).on("click", function() {
          var a, c;
          t === 0 ? (window.location.href = `${(a = Shopify == null ? void 0 : Shopify.routes) != null && a.root ? Shopify.routes.root : "/"}products/trailpatch-kids-tick-repellent-stickers`, p("exp_hp_2_main_image_0", "Kids Tick Shop Now", "click", "Main block")) : (window.location.href = `${(c = Shopify == null ? void 0 : Shopify.routes) != null && c.root ? Shopify.routes.root : "/"}products/buzzpatch-bundles`, p("exp_hp_2_main_image_1", "Mosquito Repellent Shop Now", "click", "Main block"));
        });
      }) : (document.head.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
        <style>
          .big-stickers__sticker {
            cursor: pointer;
          }
        </style>
      `
      ), $(".big-stickers__sticker").each(function(t, o) {
        $(o).on("click", function() {
          var a, c;
          t === 0 ? (window.location.href = `${(a = Shopify == null ? void 0 : Shopify.routes) != null && a.root ? Shopify.routes.root : "/"}products/trailpatch-kids-tick-repellent-stickers`, p("exp_hp_2_main_image_0", "Kids Tick Shop Now", "click", "Main block")) : (window.location.href = `${(c = Shopify == null ? void 0 : Shopify.routes) != null && c.root ? Shopify.routes.root : "/"}/products/buzzpatch-bundles`, p("exp_hp_2_main_image_1", "Mosquito Repellent Shop Now", "click", "Main block"));
        });
      })), l(".big-stickers__sticker + .big-stickers__sticker", "exp_hp_2_main_image_1", "Main block", "Mosquito Repellent"), l(".wellness", "exp_hp_2_stickers_slider", "Homepage All age wellness: natural products", "Section");
      let i = "";
      $(".three-products a").each(function(t, o) {
        $(o).on("click", function() {
          switch (t) {
            case 0:
              i = "Button Welness Cognitive";
              break;
            case 1:
              i = "Button Outdoor Protection";
              break;
            case 2:
              i = "Button Raspiratory";
              break;
          }
          p(`exp_hp_2_button_${t + 2}`, i, "click", "Main block All age wellness: natural products");
        });
      }), $(".new_main_block .wellness .crs_btn").on("click", function() {
        p(`${n}main_button`, "Button Explore All", "click", "Main block All age wellness: natural products");
      }), l(".new_main_block .wellness .crs_btn", `${n}main_button`, "Main block All age wellness: natural products", "Button Explore All"), h(".new_stickers_slider .item:not(.slick-cloned)", () => {
        $(".new_stickers_slider .item:not(.slick-cloned)").each(function(t, o) {
          var a;
          l(o, `${n}stickers_slider_product_${(a = o.querySelector("h3")) == null ? void 0 : a.innerText}`, "Homepage Our bestsellers: Tried and True", $(o).find("h3").text() + " - Section");
        });
      }), $(".new_stickers_slider").on("click", ".footer-btns .learn-more", function(t) {
        const o = $(this).closest(".item").find("h3").text().trim().replace(/\s/g, "_").split("_")[0];
        p(`${n}stick_slider_learn_${o}`, "Learn more", "click", "Stickers slider");
      }), $(".new_stickers_slider").on("click", ".footer-btns .add-to-cart", function() {
        const t = $(this).closest(".item").find("h3").text().trim().replace(/\s/g, "_").split("_")[0];
        p(`${n}stick_slider_add_${t}`, "Add to cart", "Button", `Homepage 
Our bestsellers: Tried and True`);
      }), l(
        ".new_trustpilot_reviews__trust",
        `${n}trustpilot_reviews`,
        "Homepage Trustpilot",
        "Section"
      );
      const s = setInterval(() => {
        var t, o, a, c;
        ((t = $(".insta_widget [data-widget-host]")[0]) != null && t.shadowRoot && ((a = (o = $(".insta_widget [data-widget-host]")[0]) == null ? void 0 : o.shadowRoot) != null && a.querySelectorAll("img").length) || 0 > 0) && (clearInterval(s), (c = $(".insta_widget [data-widget-host]")[0].shadowRoot) == null || c.querySelectorAll("._-SGJn").forEach((d, g) => {
          d.addEventListener("click", () => {
            setTimeout(() => {
              d.querySelector("video") && d.closest("._JBvJ-") && p(`${n}insta_image_${g}`, "Play", "Button", "Homepage Trustpilot");
            }, 150);
          });
        }));
      }, 1e3);
      $(".new_trustpilot_reviews .reviews_trust li:not(.slick-cloned)").each(function(t, o) {
        l(
          o,
          `${n}trustpilot_reviews_${t}`,
          "Homepage Trustpilot",
          $(o).find("p:first-of-type").text()
        );
      }), l(".new_slider_news .slider_wrapper", `${n}slider_news`, "Homepage We're in the news... for good reasons.", "Section"), l(".new_science_block .content_wrapper", `${n}science_block`, "Homepage Unlocking the science behind natpat patches", "Section"), l(".new_natpat_block .layer", `${n}natpat_block`, "Homepage At NATPAT, it's not just about products; it's about a way of life. We're ....", "Section"), l(".new_info_block .content_wrapper p", `${n}info_block`, `Homepage
Hey there! At NATPAT, we're all about unlocking the superhero potential in eve.....`, "Section"), $(".slider_photo").on("afterChange", function() {
        p(`${n}slider_photo`, "Choose", "change", 'Homepage The section with photos"');
      }), l(".slider_photo", `${n}slider_photo`, 'Homepage The section with photos"', "Section"), l(".new_reviews_block .basic_slider", `${n}reviews_block`, "Homepage Megan Hilling....", "Section"), $("#purchaseSlide").on("click", ".slick-arrow", function() {
        $(this).hasClass("slick-next") ? p("exp_hp_2_pagination_01", "Next - Product selection", "Pagination", "Homepage Our bestsellers: Tried and True") : p("exp_hp_2_pagination_01", "Prev - Product selection", "Pagination", "Homepage Our bestsellers: Tried and True");
      }), $(".new_slider_news").on("click", ".slick-arrow", function() {
        $(this).hasClass("slick-next") ? p(`${n}slider_news_next`, "Next", "click", "Slider news") : p(`${n}slider_news_prev`, "Prev", "click", "Slider news");
      }), $(".new_info_block").on("click", ".slick-arrow", function() {
        $(this).hasClass("slick-next") ? p("exp_hp_2_natpat_slider_next", "Next", "click", `Homepage
Hey there! At NATPAT, we're all about unlocking the superhero potential in eve.....`) : p("exp_hp_2_natpat_slider_prev", "Prev", "click", `Homepage
Hey there! At NATPAT, we're all about unlocking the superhero potential in eve.....`);
      }), l(
        ".new_info2_block .content_wrapper",
        `${n}info2_block`,
        "Info2 block",
        "Last info block",
        1e3,
        0.3
      );
    }
    fixes() {
      const n = setInterval(() => {
        document.querySelector("#amped-6269-26072") && document.querySelector("#amped-6269-26072").shadowRoot && document.querySelector("#amped-6269-26072").shadowRoot.querySelector("#el_uNBrKg7ulB") && (clearInterval(n), document.querySelector("#amped-6269-26072").shadowRoot.querySelector("#el_uNBrKg7ulB").style.top = "75%");
      }, 100);
      setTimeout(() => {
        clearInterval(n);
      }, 5e3), document.querySelectorAll(".new_home_page a:not([class]), .new_home_page a.crs_btn, .three-products__product").forEach((i) => {
        const s = window.location.pathname === "/" ? i.getAttribute("href") : window.location.pathname + i.getAttribute("href");
        i.setAttribute("href", s);
      });
    }
  }
  const H = setInterval(() => {
    window.jQuery && (clearInterval(H), new N(M));
  }, 100);
})();
//# sourceMappingURL=index.js.map