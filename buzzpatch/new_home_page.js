(function() {
  "use strict";
  const c = (e, n, a, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: n,
      event_type: a,
      event_loc: r
    }), console.log(`Event: ${e} | ${n} | ${a} | ${r}`);
  }, g = ({ name: e, dev: n }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (e) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, o = (e, n, a, r, i = 1e3, s = 0.5) => {
    let p, d;
    if (p = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? d = setTimeout(() => {
          c(
            n,
            l[0].target.dataset.visible || r || "",
            "view",
            a
          ), p.disconnect();
        }, i) : (console.log("Element is not fully visible"), clearTimeout(d));
      },
      { threshold: [s] }
    ), typeof e == "string") {
      const l = document.querySelector(e);
      l && p.observe(l);
    } else
      p.observe(e);
  }, u = (e) => {
    const n = document.querySelector(e);
    if (!n)
      return;
    const r = n.getBoundingClientRect().top - 100;
    window.scrollBy({
      top: r,
      behavior: "smooth"
    });
  }, t = "https://conversionratestore.github.io/projects/buzzpatch", f = [
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
  ], w = [
    {
      text: "“The first thing I noticed when I opened the package were that these smelled seriously amazing. They're citrusy without being overpowering.”",
      img: `${t}/img/new-home-page/slider_logo_1.png`
    },
    {
      text: "“I will say that I did not get bit at all while wearing the BuzzPatch patch mosquito repellent patches! I have used them a couple times since then and have not been bit, either.”",
      img: `${t}/img/new-home-page/slider_logo_2.png`
    },
    {
      text: "“Like Garlic for Vampires: These Stickers Help Repel Mosquitoes. Because every kid loves stickers anyway.”",
      img: `${t}/img/new-home-page/slider_logo_3.png`
    },
    {
      text: "“These anti-mosquito stickers were technically developed for kids, but we think they're also perfect for any outdoorsy dads who also happen to be mosquito magnets”",
      img: `${t}/img/new-home-page/slider_logo_4.png`
    },
    {
      text: '“The Buzzpatch scent creates a virtual shield by "camouflaging" your kids from mosquitos) Genius!”',
      img: `${t}/img/new-home-page/slider_logo_5.png`
    }
  ], b = () => {
    let e = $("#featured-reviews2 .carousel-item:not(.slick-cloned)"), n = [];
    return e.each((a, r) => {
      let i = {};
      i.name = $(r).find(".name").text(), i.img = $(r).find(".review-header>img").attr("data-src") || "no_img", i.text = $(r).find(".review-text p").text(), n.push(i);
    }), console.log(n), n;
  }, x = [
    {
      name: "SleepyPatch for Kids",
      subText: "Sleep Promoting Stickers",
      img: [
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330419244.png?v=1708349179",
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330812460.png?v=1708349182",
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330648620.png?v=1708349499",
        "//www.natpat.com/cdn/shop/files/natpat-sleepy-patch-for-kids-the-ticket-to-sweet-dreams-deep-sleep-35986330452012.png?v=1708349191"
      ],
      img2: `${t}/img/new-home-page/sleppypatch.png`,
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
      img2: `${t}/img/new-home-page/zenpatch.png`,
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
      img2: `${t}/img/new-home-page/buzzpatch.png`,
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
      img2: `${t}/img/new-home-page/sunnypatch.png`,
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
#shopify-section-template--15241309847596__custom_liquid_HmbWPi {\r
  padding: 0 !important;\r
}\r
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
.new_home_page {\r
  & * {\r
    box-sizing: border-box;\r
    padding: 0;\r
    margin: 0;\r
    font-family: 'Barlow', sans-serif;\r
    letter-spacing: 0;\r
  }\r
  & li {\r
    list-style: none;\r
  }\r
\r
  & .content_wrapper {\r
    max-width: 1200px;\r
    margin: 0 auto;\r
  }\r
\r
  & h2 {\r
    color: #1f4fc9;\r
    text-align: center;\r
    font-family: 'Urbane', sans-serif;\r
    font-size: 38px;\r
    font-weight: 900;\r
    line-height: 46px;\r
    margin-bottom: 40px;\r
  }\r
\r
  & .slick-slider {\r
    margin-bottom: 0px;\r
  }\r
\r
  & .slick-dots {\r
    bottom: -70px;\r
  }\r
\r
  & .slick-dots li button::before {\r
    color: #9aabd5;\r
    transition: all 0.3s;\r
  }\r
\r
  & li.slick-active button:before {\r
    color: #ff209e;\r
    opacity: 1;\r
    font-size: 16px;\r
  }\r
\r
  & .slider_dots {\r
    max-width: 200px;\r
    margin: 0 auto;\r
    display: flex;\r
    align-items: center;\r
  }\r
\r
  & .slider_dots span {\r
    height: 12px;\r
    width: 12px;\r
    margin: 0 4px;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
  }\r
\r
  & .slider_dots span i {\r
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
  & .slider_dots span.slick-active i {\r
    scale: 0.75;\r
  }\r
\r
  & .slider_dots span.slick-current i {\r
    background: #ff209e;\r
    opacity: 1;\r
    scale: 1;\r
  }\r
}\r
\r
.new_main_block {\r
  padding: 70px 0 120px;\r
  text-align: center;\r
  position: relative;\r
\r
  & .hi {\r
    position: absolute;\r
    top: -42px;\r
    right: -5px;\r
    z-index: 100;\r
  }\r
\r
  & .crs_btn {\r
    border-radius: 100px;\r
    background: #1f4fc9;\r
    color: #fff;\r
    font-size: 20px;\r
    font-weight: 600;\r
    line-height: 24px;\r
    text-transform: uppercase;\r
    cursor: pointer;\r
    padding: 16px 32px;\r
    border: none;\r
    margin-bottom: 20px;\r
    display: inline-flex;\r
    text-decoration: none;\r
    width: 100%;\r
    max-width: 400px;\r
    justify-content: center;\r
\r
    & + p {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
      gap: 8px;\r
      color: #1f1f5b;\r
      font-size: 16px;\r
      font-weight: 600;\r
      line-height: 24px;\r
    }\r
  }\r
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
  margin-bottom: 48px;\r
}\r
.new_main_block .images {\r
  display: flex;\r
  justify-content: center;\r
  gap: 34px;\r
  max-width: 1250px;\r
  margin: 0 auto;\r
\r
  & a {\r
    display: flex;\r
    width: calc((100% - 68px) / 3);\r
\r
    & img {\r
      width: 100%;\r
      height: 100%;\r
      object-fit: contain;\r
    }\r
  }\r
}\r
\r
.new_main_block .points {\r
  display: flex;\r
  justify-content: center;\r
  gap: 60px;\r
  margin: 36px auto;\r
  padding: 32px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/main_bg.svg) no-repeat\r
    center center;\r
  background-size: contain;\r
\r
  & li {\r
    display: flex;\r
    align-items: center;\r
    gap: 18px;\r
    color: #1f1f5b;\r
    font-size: 16px;\r
    font-weight: 600;\r
    line-height: 24px;\r
\r
    & img {\r
      width: 40px;\r
      height: 40px;\r
    }\r
  }\r
}\r
\r
.new_stickers_slider {\r
  background: #f0f0f4;\r
  position: relative;\r
  padding: 0 0 50px;\r
\r
  &::before,\r
  &::after {\r
    position: absolute;\r
    content: '';\r
    width: 100%;\r
    height: 0;\r
    background-clip: padding-box;\r
    left: 0;\r
  }\r
\r
  &::after {\r
    top: calc(100% - 1px);\r
    border-bottom: 50px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_bot.png) 75\r
      round;\r
  }\r
\r
  &::before {\r
    bottom: calc(100% - 1px);\r
    border-top: 50px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_top.png) 75\r
      round;\r
  }\r
\r
  & .item {\r
    background: #fff;\r
    padding: 24px 28px;\r
    border-radius: 12px;\r
    border: 1px solid #e0e4ed;\r
    position: relative;\r
    margin: 0 12px;\r
\r
    & .tv {\r
      position: absolute;\r
      top: 16px;\r
      left: 16px;\r
      z-index: 1;\r
    }\r
\r
    & .save {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
      position: absolute;\r
      top: 16px;\r
      right: 0;\r
      background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/label_item.png)\r
        no-repeat center center;\r
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
    & .img {\r
      width: 80%;\r
      margin: 0 auto 20px;\r
      position: relative;\r
\r
      & img:not(.sub_img) {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: contain;\r
      }\r
\r
      & img.sub_img {\r
        position: absolute;\r
        right: 0;\r
        bottom: -10px;\r
        height: 90px;\r
      }\r
    }\r
\r
    & .name {\r
      color: #1f1f5b;\r
      text-align: center;\r
      font-size: 23px;\r
      font-weight: 700;\r
      line-height: 24px;\r
      margin: 0 0 4px;\r
    }\r
\r
    & .sub_text {\r
      color: #1f1f5b;\r
      text-align: center;\r
      font-size: 16px;\r
      font-weight: 500;\r
      line-height: 24px;\r
    }\r
\r
    & .qty {\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
      flex-wrap: wrap;\r
      gap: 8px;\r
      margin: 18px 0;\r
\r
      & span {\r
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
\r
        &.active {\r
          border: 1px solid #ff209e;\r
          color: #ff209e;\r
        }\r
      }\r
    }\r
\r
    & .price {\r
      color: #1f1f5b;\r
      font-size: 20px;\r
      font-weight: 700;\r
      line-height: 24px;\r
      margin-bottom: 18px;\r
      text-align: center;\r
    }\r
\r
    & .btns {\r
      display: flex;\r
      justify-content: flex-end;\r
      align-items: center;\r
      gap: 18px;\r
\r
      & button {\r
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
      & a {\r
        color: #1f1f5b;\r
        font-size: 16px;\r
        font-weight: 500;\r
        line-height: 20px;\r
        text-decoration: underline;\r
        display: inline-flex;\r
        padding: 0 24px;\r
      }\r
    }\r
  }\r
}\r
\r
.new_trustpilot_reviews {\r
  padding: 120px 0 0;\r
\r
  & > p {\r
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
  & .reviews_trust {\r
    display: flex;\r
    flex-wrap: wrap;\r
    gap: 40px;\r
\r
    & li:not([role='presentation']) {\r
      border-radius: 12px;\r
      background: #f0f0f4;\r
      padding: 22px;\r
      width: calc((100% - 80px) / 3);\r
      display: flex;\r
      flex-direction: column;\r
      justify-content: stretch;\r
      gap: 8px;\r
      align-items: start;\r
\r
      & p:first-of-type {\r
        color: #1f1f5b;\r
        font-size: 18px;\r
        font-weight: 700;\r
        line-height: 30px;\r
      }\r
\r
      & p:last-of-type {\r
        color: #1f1f5b;\r
        font-size: 16px;\r
        font-weight: 500;\r
        line-height: 22px;\r
      }\r
\r
      & p.small {\r
        max-height: 110px;\r
        overflow: hidden;\r
        color: #1f1f5b;\r
        font-size: 16px;\r
        font-weight: 500;\r
        line-height: 22px;\r
        position: relative;\r
\r
        &::after {\r
          content: '...';\r
          position: absolute;\r
          bottom: 0;\r
          right: 0;\r
          width: 50%;\r
          height: 22px;\r
          background: #f0f0f4;\r
        }\r
      }\r
\r
      & .read_more {\r
        color: #616267;\r
        font-size: 16px;\r
        font-weight: 500;\r
        line-height: 22px;\r
        text-decoration-line: underline;\r
        cursor: pointer;\r
      }\r
\r
      & img {\r
        margin-top: auto;\r
      }\r
    }\r
  }\r
\r
  & .pages_r {\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    gap: 10px;\r
    margin-top: 40px;\r
\r
    & span {\r
      font-weight: 500;\r
      font-size: 16px;\r
      cursor: pointer;\r
      transition: all 0.3s;\r
    }\r
\r
    & span.active {\r
      font-weight: 700;\r
      font-size: 18px;\r
    }\r
  }\r
}\r
\r
.new_slider_news {\r
  padding: 70px 0;\r
\r
  & h2 {\r
    width: fit-content;\r
    margin: 0 auto 40px;\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/h2_bg.png) no-repeat center center;\r
    background-size: contain;\r
    padding: 26px 90px;\r
    color: #fff;\r
  }\r
\r
  & .slider_wrapper {\r
    display: flex;\r
    margin-bottom: 40px;\r
\r
    & .slide {\r
      position: relative;\r
      margin: 0 15px;\r
      padding: 34px 38px 32px;\r
      text-align: center;\r
      min-height: 275px;\r
      display: flex;\r
      flex-direction: column;\r
      justify-content: space-between;\r
\r
      & .bg {\r
        position: absolute;\r
        top: 0;\r
        left: 0;\r
        width: 100%;\r
        height: 100%;\r
        z-index: 0;\r
\r
        & img {\r
          width: 100%;\r
          height: 100%;\r
          display: block;\r
        }\r
      }\r
\r
      & p {\r
        position: relative;\r
        z-index: 1;\r
        color: #fff;\r
        text-align: center;\r
        font-size: 18px;\r
        font-weight: 600;\r
        line-height: 26px;\r
      }\r
\r
      & > img {\r
        position: relative;\r
        z-index: 1;\r
        max-height: 40px;\r
        max-width: 70%;\r
        margin: 10px auto 0;\r
      }\r
    }\r
  }\r
\r
  & .slick-track {\r
    height: 100%;\r
  }\r
}\r
\r
.new_science_block {\r
  border-bottom: 50px solid transparent;\r
  border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75\r
    round;\r
  background-clip: padding-box;\r
  position: relative;\r
  margin-bottom: -48px;\r
  padding-bottom: 50px;\r
\r
  & .content_wrapper {\r
    display: flex;\r
    justify-content: space-between;\r
    align-items: start;\r
    gap: 76px;\r
\r
    & > div {\r
      width: calc((100% - 76px) / 2);\r
      aspect-ratio: 1/1;\r
      background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/gray_bg.svg) no-repeat\r
        center center;\r
      background-size: 100% 100%;\r
\r
      &:first-of-type img {\r
        right: -100%;\r
        top: 0;\r
      }\r
\r
      &:last-of-type {\r
        margin-top: 380px;\r
\r
        & img {\r
          top: 85px;\r
          left: -100%;\r
        }\r
      }\r
\r
      & p {\r
        color: #1f1f5b;\r
        font-size: 22px;\r
        font-weight: 500;\r
        line-height: 32px;\r
        padding: 64px;\r
        position: relative;\r
\r
        & img {\r
          position: absolute;\r
        }\r
      }\r
    }\r
  }\r
}\r
\r
.new_natpat_block {\r
  height: 800px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/big_bg.webp) no-repeat center center;\r
  background-size: cover;\r
  background-attachment: fixed;\r
\r
  & p {\r
    color: #1f1f5b;\r
    text-align: center;\r
    font-size: 26px;\r
    font-weight: 600;\r
    line-height: 36px;\r
    position: relative;\r
    background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/white_bg.svg) no-repeat\r
      center center;\r
    background-size: 100% 100%;\r
    max-width: 630px;\r
    padding: 80px 66px 108px;\r
    filter: drop-shadow(0px 4px 24px rgba(31, 31, 91, 0.35));\r
\r
    & img {\r
      position: absolute;\r
      left: 50%;\r
      top: calc(100% - 110px);\r
      transform: translateX(-50%);\r
    }\r
  }\r
}\r
\r
.new_info_block {\r
  background: #1f4fc9;\r
  padding: 80px 0;\r
  position: relative;\r
\r
  &::before,\r
  &::after {\r
    position: absolute;\r
    content: '';\r
    width: 100%;\r
    height: 0;\r
    background-clip: padding-box;\r
    left: 0;\r
  }\r
\r
  &::before {\r
    bottom: calc(100% - 3px);\r
    border-top: 50px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_top.png) 75\r
      round;\r
  }\r
\r
  &::after {\r
    top: calc(100% - 3px);\r
    border-bottom: 50px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_bot.png) 75\r
      round;\r
  }\r
\r
  & .content_wrapper {\r
    display: flex;\r
    justify-content: center;\r
    align-items: start;\r
    gap: 76px;\r
\r
    & > div {\r
      width: calc((100% - 76px) / 2);\r
    }\r
\r
    & p {\r
      color: #fff;\r
      font-size: 16px;\r
      font-weight: 500;\r
      line-height: 24px;\r
    }\r
\r
    & p.special {\r
      font-size: 18px;\r
      font-weight: 600;\r
      line-height: 26px;\r
      margin-top: 38px;\r
      padding: 24px 32px;\r
      background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/special_bg.png)\r
        no-repeat center center;\r
      background-size: 100% 100%;\r
    }\r
  }\r
\r
  & .img_slide {\r
    aspect-ratio: 1/1;\r
    border-radius: 24px;\r
    overflow: hidden;\r
\r
    & img {\r
      width: 100%;\r
      height: 100%;\r
      object-fit: cover;\r
    }\r
  }\r
\r
  & .slider_photo {\r
    z-index: 5;\r
\r
    &::before,\r
    &::after {\r
      content: '';\r
      position: absolute;\r
      width: 100%;\r
      height: 100%;\r
      border-radius: 24px;\r
    }\r
\r
    &::before {\r
      bottom: -60px;\r
      left: 0;\r
      background: #5e7ac2;\r
      scale: 0.9;\r
      z-index: -1;\r
    }\r
\r
    &::after {\r
      bottom: -120px;\r
      right: 0;\r
      background: rgba(255, 255, 255, 0.3);\r
      scale: 0.8;\r
      z-index: -2;\r
    }\r
\r
    & .slick-arrow {\r
      height: 82px;\r
      width: 82px;\r
      background: #1f4fc9;\r
      border-radius: 50%;\r
      display: flex;\r
      justify-content: center;\r
      align-items: center;\r
      z-index: 1;\r
\r
      &.slick-next {\r
        right: -41px;\r
\r
        &::before {\r
          content: '';\r
          height: 52px;\r
          width: 52px;\r
          background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg)\r
            no-repeat center center;\r
          background-size: contain;\r
        }\r
      }\r
\r
      &.slick-prev {\r
        left: -41px;\r
\r
        &::before {\r
          content: '';\r
          height: 52px;\r
          width: 52px;\r
          background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg)\r
            no-repeat center center;\r
          background-size: contain;\r
          transform: rotate(180deg);\r
        }\r
      }\r
    }\r
  }\r
}\r
\r
.new_reviews_block {\r
  background: #93c3e9;\r
  padding: 150px 0;\r
\r
  & .basic_slider {\r
    display: flex;\r
  }\r
\r
  & .slick-track {\r
    height: 100%;\r
  }\r
\r
  & .slide {\r
    margin: 0 20px;\r
    background: #fff;\r
    padding: 0 0 24px;\r
    display: flex;\r
    flex-direction: column;\r
    justify-content: space-between;\r
    border-radius: 12px;\r
    overflow: hidden;\r
\r
    & > *:not(:is(.img, span)) {\r
      padding: 0 22px;\r
    }\r
\r
    & span {\r
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
  }\r
\r
  & .head {\r
    margin: 27px 0 16px;\r
    color: #1f1f5b;\r
    font-size: 20px;\r
    font-weight: 600;\r
    line-height: 30px;\r
\r
    & img {\r
      margin-bottom: 2px;\r
    }\r
  }\r
\r
  & .text {\r
    color: #1f1f5b;\r
    font-size: 16px;\r
    font-weight: 500;\r
    line-height: 22px;\r
    margin-bottom: 16px;\r
  }\r
\r
  & .img {\r
    width: 100%;\r
    height: 240px;\r
\r
    & img {\r
      width: 100%;\r
      height: 100%;\r
      object-fit: cover;\r
    }\r
  }\r
\r
  & .slick-dots li button::before {\r
    color: #fff;\r
  }\r
\r
  & .slick-dots li.slick-active button::before {\r
    color: #ff209e;\r
  }\r
}\r
\r
.new_info2_block {\r
  padding: 50px 0 70px;\r
  position: relative;\r
\r
  &::before,\r
  &::after {\r
    position: absolute;\r
    content: '';\r
    width: 100%;\r
    height: 0;\r
    background-clip: padding-box;\r
    left: 0;\r
  }\r
\r
  &::before {\r
    bottom: calc(100% - 2px);\r
    border-top: 50px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top.png) 75\r
      round;\r
  }\r
\r
  &::after {\r
    top: calc(100% - 2px);\r
    border-bottom: 50px solid transparent;\r
    border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot.png) 75\r
      round;\r
  }\r
\r
  & .content_wrapper > div {\r
    display: flex;\r
    gap: 76px;\r
    align-items: start;\r
\r
    & > * {\r
      width: calc((100% - 76px) / 2);\r
    }\r
\r
    & .img {\r
      aspect-ratio: 1/1;\r
      background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_info2.png) no-repeat\r
        center center;\r
      background-size: 100% 100%;\r
      padding: 50px;\r
\r
      & img {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: contain;\r
      }\r
    }\r
\r
    & p {\r
      color: #1f1f5b;\r
      font-size: 16px;\r
      font-weight: 500;\r
      line-height: 22px;\r
\r
      & a {\r
        color: #1f4fc9;\r
        text-decoration: underline;\r
      }\r
    }\r
  }\r
}\r
\r
.new_slider_news .slick-arrow::before {\r
  content: '';\r
  height: 78px;\r
  width: 78px;\r
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow.svg) no-repeat center\r
    center;\r
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
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/arrow-blue.svg) no-repeat\r
    center center;\r
  background-size: contain;\r
  display: block;\r
}\r
\r
footer {\r
  margin-top: 0 !important;\r
  padding-top: 100px !important;\r
}\r
\r
@media (min-width: 769px) {\r
  .mobile {\r
    display: none !important;\r
  }\r
\r
  .new_main_block .images a img,\r
  .new_main_block .crs_btn,\r
  .new_stickers_slider span,\r
  .new_stickers_slider .btns > * {\r
    transition: all 0.3s;\r
  }\r
  .new_main_block .images a:hover img {\r
    transform: scale(1.1);\r
  }\r
\r
  .new_main_block .crs_btn:hover {\r
    background: #3363dd;\r
  }\r
\r
  .new_stickers_slider .qty > span:hover {\r
    border: 1px solid #1f1f5b;\r
  }\r
  .new_stickers_slider .btns a:hover {\r
    color: #ff209e;\r
  }\r
\r
  .new_stickers_slider .btns button:hover {\r
    background-color: #ff5fba;\r
  }\r
}\r
@media (max-width: 500px) {\r
  #shopify-section-template--15241309847596__17097813754ae81b0d {\r
    padding: 0 24px !important;\r
  }\r
\r
  .new_trustpilot_reviews.content_wrapper .insta_widget {\r
    margin-bottom: -20px;\r
  }\r
\r
  #purchase-slide h2 {\r
    padding: 20px 24px 0 !important;\r
    text-align: left;\r
  }\r
\r
  .desktop {\r
    display: none !important;\r
  }\r
\r
  .new_home_page {\r
    & section {\r
      padding: 80px 24px;\r
    }\r
\r
    & h2 {\r
      font-size: 24px;\r
      line-height: 30px;\r
      margin-bottom: 24px;\r
      padding: 0 24px;\r
      font-family: 'Urbane', sans-serif !important;\r
      text-align: left;\r
    }\r
  }\r
\r
  .new_main_block {\r
    padding: 20px 24px 80px !important;\r
\r
    & h1 {\r
      font-size: 28px;\r
      line-height: 32px;\r
      margin: 0 0 28px;\r
    }\r
\r
    & .images {\r
      flex-direction: column;\r
      gap: 18px;\r
\r
      & a {\r
        width: 100%;\r
      }\r
    }\r
\r
    & .points {\r
      gap: unset;\r
      padding: 0 0 18px;\r
      background: none;\r
      border-bottom: 1px solid #f0f0f4;\r
      margin: 18px 0;\r
\r
      & li {\r
        flex-direction: column;\r
        gap: 2px;\r
        font-size: 14px;\r
        line-height: 20px;\r
\r
        & img {\r
          width: 34px;\r
          height: 34px;\r
        }\r
      }\r
    }\r
\r
    & .total_reviews {\r
      font-size: 14px;\r
      margin-bottom: 18px;\r
      gap: 6px;\r
    }\r
\r
    & .crs_btn + p {\r
      font-size: 14px;\r
      gap: 6px;\r
    }\r
\r
    & .crs_btn + p img {\r
      width: 24px;\r
      height: 24px;\r
    }\r
  }\r
\r
  .new_stickers_slider {\r
    padding: 0 0 1px !important;\r
\r
    &::before {\r
      border-top: 40px solid transparent;\r
      border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_top_mob.png)\r
        65 round;\r
    }\r
\r
    &::after {\r
      border-bottom: 40px solid transparent;\r
      border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_gray_bot_mob.png)\r
        65 round;\r
    }\r
\r
    & .item {\r
      margin: 0;\r
      padding: 20px;\r
      scale: 0.95;\r
      transition: all 0.3s;\r
\r
      &.slick-current {\r
        scale: 1;\r
      }\r
    }\r
\r
    & .slick-slider {\r
      margin-bottom: 50px;\r
    }\r
\r
    & .slick-dots {\r
      bottom: -50px;\r
    }\r
  }\r
\r
  .new_trustpilot_reviews {\r
    & h2 {\r
      font-family: 'Barlow', sans-serif !important;\r
      font-size: 16px;\r
      font-weight: 500;\r
      color: #1f1f5b;\r
      text-transform: unset;\r
      margin-bottom: 9px !important;\r
      text-align: center;\r
    }\r
\r
    padding: 80px 0 40px !important;\r
\r
    & .slick-slide {\r
      scale: 0.9;\r
      transition: all 0.3s;\r
    }\r
\r
    & .slick-current {\r
      scale: 1;\r
    }\r
\r
    & .slick-dots {\r
      bottom: -50px;\r
    }\r
\r
    & .reviews_trust {\r
      margin-bottom: 0;\r
    }\r
\r
    & .slider_dots {\r
      margin-top: 30px;\r
    }\r
  }\r
\r
  .new_slider_news {\r
    padding: 40px 0 !important;\r
\r
    & h2 {\r
      position: relative;\r
      z-index: 1;\r
      width: 80%;\r
      padding: 52px 30px;\r
      margin: 0 auto -30px;\r
      background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_news_h2_mob.png)\r
        no-repeat center center;\r
      background-size: 100% 100%;\r
    }\r
\r
    .new_info_block {\r
      &::before {\r
        border-top: 40px solid transparent;\r
        border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/brdr_blue_top_mob.png)\r
          65 round;\r
      }\r
    }\r
\r
    & .slider_wrapper .slide {\r
      margin: 0 8px;\r
    }\r
  }\r
\r
  .new_science_block {\r
    padding: 30px 0 50px !important;\r
\r
    & .content_wrapper {\r
      flex-direction: column;\r
      gap: 10px;\r
      overflow: hidden;\r
\r
      & > div {\r
        width: 100%;\r
        margin-top: 0 !important;\r
        background: none !important;\r
\r
        & p {\r
          font-size: 16px;\r
          line-height: 22px;\r
          background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_science_mob.png)\r
            no-repeat;\r
          background-size: calc(100% + 24px) 100%;\r
          width: 75%;\r
          max-width: 300px;\r
\r
          & img {\r
            height: 250px;\r
            top: calc(50% - 100px) !important;\r
          }\r
        }\r
\r
        &:first-of-type p {\r
          padding: 40px 24px;\r
          background-position: right center;\r
\r
          & img {\r
            right: -60%;\r
          }\r
        }\r
\r
        &:last-of-type p {\r
          margin-left: auto;\r
          padding: 40px 24px 40px 42px;\r
          background-position: left center;\r
\r
          & img {\r
            left: -40%;\r
          }\r
        }\r
      }\r
    }\r
  }\r
\r
  .new_natpat_block {\r
    padding: 80px 10px !important;\r
\r
    & .layer {\r
      margin-top: -70px;\r
    }\r
\r
    & p {\r
      font-size: 20px;\r
      line-height: 28px;\r
      padding: 45px 45px 84px;\r
      background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/natpat_bg_mob.png)\r
        no-repeat center center;\r
      background-size: 100% 100%;\r
      font-weight: 700;\r
\r
      & img {\r
        width: 153px;\r
        top: calc(100% - 70px);\r
      }\r
    }\r
  }\r
\r
  .new_info_block {\r
    padding: 24px !important;\r
\r
    &::after {\r
      content: none;\r
    }\r
\r
    & .content_wrapper > div {\r
      width: 100%;\r
    }\r
\r
    & .content_wrapper > div p.special {\r
      background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_special_mob.png)\r
        no-repeat center center;\r
      background-size: 100% 100%;\r
      width: calc(100% + 48px);\r
      margin-left: -24px;\r
      padding: 52px 24px;\r
      margin-bottom: -60px;\r
      text-align: center;\r
    }\r
  }\r
\r
  .new_reviews_block {\r
    padding: 80px 0 !important;\r
\r
    & .slide {\r
      margin: 0 5px;\r
    }\r
\r
    & .slider_dots {\r
      margin-top: 24px;\r
    }\r
  }\r
\r
  .new_info2_block {\r
    padding: 40px 0 !important;\r
\r
    &::before {\r
      border-top: 40px solid transparent;\r
      border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_top_mob.png)\r
        65 round;\r
    }\r
\r
    &::after {\r
      border-bottom: 40px solid transparent;\r
      border-image: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bdr_white_bot_mob.png)\r
        65 round;\r
    }\r
\r
    & .content_wrapper > div > p {\r
      width: 100%;\r
      padding: 0 24px;\r
\r
      & .img {\r
        display: flex;\r
        justify-content: center;\r
        align-items: center;\r
        background: url(https://conversionratestore.github.io/projects/buzzpatch/img/new-home-page/bg_info2_mob.png)\r
          no-repeat center center;\r
        background-size: 100% 100%;\r
        height: 280px;\r
        width: calc(100% + 48px);\r
        margin-left: -24px;\r
        padding: 30px 24px;\r
        margin-bottom: 24px;\r
\r
        & img {\r
          width: 100%;\r
          height: 100%;\r
          object-fit: contain;\r
        }\r
      }\r
    }\r
  }\r
\r
  .slider_photo {\r
    margin-bottom: 40px !important;\r
\r
    & .img_slide {\r
      margin: 0;\r
      aspect-ratio: 1/1;\r
      border-radius: 24px;\r
      scale: 0.9;\r
      transition: all 0.3s;\r
      overflow: hidden;\r
\r
      & img {\r
        width: 100%;\r
        height: 100%;\r
        object-fit: cover;\r
      }\r
\r
      &.slick-current {\r
        scale: 1;\r
      }\r
    }\r
  }\r
\r
  .up_btn {\r
    position: fixed;\r
    right: 6px;\r
    bottom: 20px;\r
    display: none;\r
    z-index: 1000;\r
  }\r
}\r
\r
@keyframes swing {\r
  25%,\r
  35%,\r
  45%,\r
  55%,\r
  65%,\r
  75% {\r
    transform: rotate(-2deg);\r
  }\r
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
  20% {\r
    transform: translateX(100%);\r
  }\r
  25% {\r
    transform: translateX(0);\r
  }\r
  75% {\r
    transform: translateX(0);\r
  }\r
  80% {\r
    transform: translateX(100%);\r
  }\r
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
`;
  `${x.map((e, n) => (
    /* HTML */
    ` <div class="item">
              <img src="${t}/img/new-home-page/as_seen.svg" class="tv" alt="tv" />
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
  const _ = (
    /* HTML */
    `
  <div class="up_btn mobile">
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
  ), y = (e) => (
    /* HTML */
    `
    <section class="new_main_block">
      <style>
        ${v}
      </style>
      <span class="hi desktop">
        <img src="${t}/img/new-home-page/side.svg" alt="hi" />
      </span>
      <p class="total_reviews desktop">
        <img src="${t}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </p>
      <h1>Natural solutions for better<br class="desktop" />sleep, mood, focus and more!</h1>
      <div class="images">
        <a href="https://www.natpat.com/collections/wellness-cognitive"
          ><img src="${t}/img/new-home-page/img_1${e === "mobile" ? "_mob" : ""}.webp" alt="img1"
        /></a>
        <a href="https://www.natpat.com/collections/outdoor-protection"
          ><img src="${t}/img/new-home-page/img_2${e === "mobile" ? "_mob" : ""}.webp" alt="img2"
        /></a>
        <a href="https://www.natpat.com/collections/respiratory-allergy-relief"
          ><img src="${t}/img/new-home-page/img_3.webp" alt="img3"
        /></a>
      </div>
      <ul class="points content_wrapper">
        <li><img src="${t}/img/new-home-page/non-toxic.svg" alt="non_toxic" /><span>Non Toxic, DEET free</span></li>
        <li><img src="${t}/img/new-home-page/baby-boy.svg" alt="kid" /><span>Safe for kids (0+)</span></li>
        <li><img src="${t}/img/new-home-page/australia.svg" alt="au" /><span>Designed in Australia</span></li>
        <li><img src="${t}/img/new-home-page/express-delivery.svg" alt="ship" /><span>FREE Shipping </span></li>
      </ul>
      <a class="total_reviews mobile" href="#">
        <img src="${t}/img/new-home-page/stars_green.svg" alt="stars" />
        <span>Excellent | 2,943</span>
        <span>Customer reviews</span>
      </a>
      <a class="crs_btn" href="https://natpat.com/collections/homepage">Explore NatPat Stickers</a>
      <p>
        <img src="${t}/img/new-home-page/express-delivery.svg" alt="ship" />
        FREE Shipping | 365-day Money Back Guarantee
      </p>
    </section>
  `
  ), k = (
    /* HTML */
    ' <section class="new_stickers_slider"></section> '
  ), z = (
    /* HTML */
    `
  <section class="new_trustpilot_reviews content_wrapper">
    <p>
      <img src="${t}/img/trustpilot.svg" alt="trustpilot" />
      <img src="${t}/img/stars-trust.svg" alt="trustpilot stars" />
      <span>Excellent</span>
    </p>
    <h2>Trusted by over <b>1 million</b> customers</h2>
    <div class="insta_widget"></div>
    <ul class="reviews_trust parent_slider">
      ${f.map((e, n) => (
      /* HTML */
      ` <li>
            <p>${e.patchType}</p>
            <p>${e.text}</p>
            <img src="${t}/img/new-home-page/stars_green.svg" alt="stars" />
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
  ), T = (
    /* HTML */
    ` <section class="new_slider_news">
  <h2>We're in the news... for good reasons</h2>
  <div class="slider_wrapper parent_slider">
    ${w.map((e, n) => (
      /* HTML */
      `
          <div class="slide">
            <div class="bg"><img src="${t}/img/slide_bg_${n + 1}.png" /></div>
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
  ), j = (
    /* HTML */
    `
  <section class="new_science_block">
    <h2>Unlocking the science behind natpat patches</h2>
    <div class="content_wrapper">
      <div>
        <p>
          At NATPAT, skepticism is a sign of care, especially when it comes to products for our loved ones. That's why
          we're not just about promises; we're about proving. Our mission is to blend playful innovation with solid
          science, offering you peace of mind with every NATPAT patch. From natural essential oils to cutting-edge
          slow-release technology, every detail of NATPAT patches is meticulously planned to ensure safety, avoid
          allergies, and deliver measurable results.
          <img src="${t}/img/new-home-page/character1.svg" alt="character" />
        </p>
      </div>
      <div>
        <p>
          Discover the power of AromaWeave™, our pioneering bamboo-based fiber that's reshaping how we experience
          essential oils. With a commitment to sustainability and effectiveness, AromaWeave™ stands out with its
          biodegradable nature and unique ability to deliver consistent, long-lasting aromas. Join us as we delve into
          the science, sustainability, and sensory delight of AromaWeave™, and see how it's setting new standards in
          the world of aromatherapy.
          <img src="${t}/img/new-home-page/character2.svg" alt="character" />
        </p>
      </div>
    </div>
  </section>
`
  ), S = (
    /* HTML */
    ` <section class="new_natpat_block">
  <div class="layer">
    <p>
      "At NATPAT, it's not just about products; it's about a way of life. We're here to bring you a kinder, more fun,
      and totally natural approach to feeling great. Join us in this journey towards a happier, healthier you!"
      <img src="${t}/img/new-home-page/nat_pat.svg" alt="natpat" />
    </p>
  </div>
</section>`
  ), P = (
    /* HTML */
    `<section class="new_info_block">
  <div class="content_wrapper">
    <div class="slider_photo">
      ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
      /*HTML*/
      `<div class="img_slide">
            <img src="${t}/img/new-home-page/slider_photo_${e}.jpg" alt="img1" />
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
  ), I = (
    /* HTML */
    `
  <section class="new_reviews_block">
    <div class="content_wrapper">
      <div class="basic_slider parent_slider">
        ${b().map((e, n) => (
      /* HTML */
      `
              <div class="slide">
                <div class="img">
                  <img src="${e.img}" alt="review img" />
                </div>
                <p class="head">
                  <img src="${t}/img/new-home-page/stars_green.svg" alt="stars" />
                  ${e.name}
                </p>
                <p class="text">${e.text}</p>
                <span>
                  <img src="${t}/img/new-home-page/check_white.svg" alt="verified" />
                  Verified Buyer
                </span>
              </div>
            `
    )).join("")}
      </div>
      <div class="slider_dots slider_dots4">
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
        <span><i></i></span>
      </div>
    </div>
  </section>
`
  ), A = (
    /* HTML */
    `
  <section class="new_info2_block">
    <div class="content_wrapper">
      <h2>Health and wellness patches</h2>
      <div>
        <div class="img desktop">
          <img src="${t}/img/new-home-page/packs.webp" alt="packs" />
        </div>
        <p>
          NATPAT stands as a beacon of innovation in the realm of health and wellness, offering a unique range of
          patches and stickers designed to enhance your daily life. Each product is crafted with care, ensuring a
          natural, effective solution to various everyday challenges. <br /><br />
          <span class="img mobile">
            <img src="${t}/img/new-home-page/packs.webp" alt="packs" />
          </span>
          For those seeking tranquility in their hectic lives, NATPAT's <a
            href="https://www.natpat.com/en-eu/products/zenpatch-mood-calming-stickers"
            >calming patches</a
          > and <a href="https://www.natpat.com/en-eu/products/zenpatch-mood-calming-stickers">calming stickers</a
          > offer a soothing escape. The <a href="https://www.natpat.com/en-eu/products/sunnypatch">uv stickers</a> are
          a must-have for sun lovers, providing a smart way to monitor UV exposure. When congestion hits, the <a
            href="https://www.natpat.com/en-eu/products/stuffypatch"
            >stuffy patch</a
          > is an excellent ally, helping to alleviate discomfort.<br /><br />
          Parents will appreciate the gentle effectiveness of the <a
            href="https://www.natpat.com/en-eu/products/sleepypatch-sleep-promoting-stickers"
            >sleepy patch for kids</a
          >, ensuring a peaceful night for the little ones. For adults, the <a
            href="https://www.natpat.com/en-eu/products/sleepypatch-sleep-promoting-stickers"
            >sleep patch for adults</a
          > offers a similar benefit, promoting restful sleep. The <a
            href="https://www.natpat.com/en-eu/products/pack-magic-patch-bundles"
            >itch patch</a
          > is a quick solution for those annoying itches, while the <a
            href="https://www.natpat.com/en-eu/pages/magicpatch"
            >bug bite patches</a
          > provide relief from insect bites.<br /><br />
          For those needing a concentration boost, the <a
            href="https://www.natpat.com/en-eu/products/focuspatch-focus-enhancing-stickers"
            >focus patch</a
          > is a game-changer. If managing appetite is a concern, the <a
            href="https://www.natpat.com/en-eu/products/cravepatch-appetite-control-stickers"
            >appetite suppressant patches</a
          > are a discreet and effective aid. Allergy sufferers will find solace in the <a
            href="https://www.natpat.com/en-eu/products/allergypatch-allergy-relief-stickers"
            >allergy relief stickers</a
          >, designed to ease symptoms naturally.<br /><br />
          NATPAT also offers specialized solutions for mosquito protection. Their <a
            href="https://www.natpat.com/en-eu/products/adult-buzzpatch-mosquito-repellent-patches"
          >
            mosquito patches for adults </a
          > and <a href="https://www.natpat.com/en-eu/products/buzzpatch-bundles">mosquito patches for kids</a> are a
          safe, chemical-free way to keep mosquitoes at bay. Additionally, the <a
            href="https://www.natpat.com/en-eu/pages/buzzpatch"
            >mosquito stickers</a
          >  provide a fun and effective alternative for children.<br /><br />
          In essence, NATPAT is more than just a brand; it's a lifestyle choice for those who prioritize health,
          wellness, and natural solutions in their daily lives.
        </p>
      </div>
    </div>
  </section>
`
  );
  g({ name: "HomePage Redesign", dev: "YK" }), m("HomePage_Redesign");
  const q = window.innerWidth < 768 ? "mobile" : "desktop", h = document.createElement("link");
  h.rel = "stylesheet", h.href = "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=M+PLUS+Rounded+1c:wght@900&display=swap", document.head.appendChild(h);
  class C {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      this.clearOldContent(), this.addBlocks(), this.patchesCardsFunctionality(), this.addEvents();
    }
    clearOldContent() {
      $("#MainContent .icartShopifyCartContent").css("display", "none"), $("#MainContent .icartShopifyCartContent").after('<div class="new_home_page"></div>');
    }
    addBlocks() {
      if ($(".new_home_page").append(y(this.device)).append(k).append(z).append(T).append(j).append(S).append(P).append(I).append(A).append(_), $(".insta_widget").append($("#shopify-section-template--15241309847596__17097813754ae81b0d")), $(".new_stickers_slider").append($("#shopify-section-template--15241309847596__custom_liquid_HmbWPi")), $("#shopify-block-archive_detect_ugc_gallery_8cpCVL").css("display", "block"), $(window).on("scroll", function() {
        $(window).scrollTop() || 0 > 100 ? $(".up_btn").fadeIn() : $(".up_btn").fadeOut();
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
        centerPadding: "24px",
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
      }), $(".slider_dots").each(function(n, a) {
        $(a).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: !1,
          infinite: !0,
          centerMode: !0,
          centerPadding: "60px",
          focusOnSelect: !0,
          asNavFor: $(a).closest("section").find(".parent_slider")
        });
      }), $("a.total_reviews").on("click", function(n) {
        n.preventDefault(), u(".new_trustpilot_reviews");
      }), $(".reviews_trust p:nth-child(2)").each(function(n, a) {
        if ($(a).text().length > 200) {
          const r = $(a).text(), i = r.slice(0, 200).lastIndexOf(" ");
          i !== -1 && $(a).text(r.slice(0, i) + "..."), $(a).after('<span class="read_more">Read more</span>'), $(a).next().on("click", function() {
            $(a).text(r), $(this).remove(), $(a).closest(".reviews_trust").slick("setPosition");
          });
        }
      }), this.device === "desktop") {
        const a = $(".new_trustpilot_reviews .reviews_trust li");
        a.each(function(r, i) {
          r >= 6 && $(i).css("display", "none");
        }), $(".pages_r span").on("click", function() {
          if ($(this).hasClass("active"))
            return;
          const r = +$(this).text(), i = (r - 1) * 6, s = r * 6 - 1, p = $(".new_trustpilot_reviews .reviews_trust");
          p.fadeOut(function() {
            a.each(function(d, l) {
              d >= i && d <= s ? $(l).show() : $(l).hide();
            }), p.fadeIn();
          }), $(this).addClass("active").siblings().removeClass("active");
        });
      }
    }
    patchesCardsFunctionality() {
      $(".new_stickers_slider .item").each(function(n, a) {
        const r = $(a).find("span"), i = $(a).find(".img img[alt=main]"), s = $(a).find("button"), p = $(a).find(".price"), d = $(a).find(".save");
        r.on("click", function() {
          $(this).addClass("active").siblings().removeClass("active"), i.attr("src", $(this).data("img")), s.attr("data-id", $(this).data("variant")), p.text(`$${$(this).data("price")} each`), d.text(`${$(this).data("save")}% off`);
        }), s.on("click", function() {
          const M = {
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
            body: JSON.stringify(M)
          }).then((N) => N.json());
        });
      });
    }
    addEvents() {
      const n = "exp_homepage_";
      $(".new_main_block .crs_btn").on("click", function() {
        c(`${n}main_button`, "Button", "click", "Main block");
      }), $(".new_main_block .images a").each(function(r, i) {
        let s = r === 0 ? "Sleep" : r === 1 ? "Allergy" : "Protection";
        o(i, `${n}main_image_${r}`, "Main block", s), $(i).on("click", function() {
          c(`${n}main_image_${r}`, s, "click", "Main block");
        });
      }), $(".new_stickers_slider .item:not(.slick-cloned)").each(function(r, i) {
        o(i, `${n}stickers_slider_${r}`, "Stickers slider", $(i).find(".name").text()), $(i).find(".qty>span").on("click", function() {
          c(
            `${n}stickers_slider_${r}`,
            `Quantity ${$(this).text()}`,
            "click",
            `Stickers slider ${$(i).find(".name").text()}`
          );
        }), $(i).find(".btns a").on("click", function() {
          c(
            `${n}stickers_slider_${r}`,
            "Learn more",
            "click",
            `Stickers slider ${$(i).find(".name").text()}`
          );
        }), $(i).find(".btns button").on("click", function() {
          c(
            `${n}stickers_slider_${r}`,
            "Add to cart",
            "click",
            `Stickers slider ${$(i).find(".name").text()}`
          );
        });
      }), $(".slider_dots1 span").on("click", function() {
        c(`${n}stickers_pagination`, "Dots", "click", "Stickers slider");
      }), $(".slider_photo").on("afterChange", function() {
        c(`${n}slider_photo`, "Slider photo", "change", "Slider photo");
      });
      const a = setInterval(() => {
        var r, i;
        ($(".insta_widget [data-widget-host]")[0].shadowRoot && ((r = $(".insta_widget [data-widget-host]")[0].shadowRoot) != null && r.querySelectorAll("img").length) || 0 > 0) && (clearInterval(a), (i = $(".insta_widget [data-widget-host]")[0].shadowRoot) == null || i.querySelectorAll("img").forEach((s, p) => {
          s.addEventListener("click", () => {
            c(`${n}insta_image_${p}`, "Image", "click", "Instagram widget");
          });
        }));
      }, 1e3);
      $(".new_trustpilot_reviews .reviews_trust li:not(.slick-cloned)").each(function(r, i) {
        o(
          i,
          `${n}trustpilot_reviews_${r}`,
          "Trustpilot reviews block",
          $(i).find("p:first-of-type").text()
        );
      }), o(".new_main_block .crs_btn", `${n}main_button`, "Main block", "Button"), o(
        ".new_trustpilot_reviews .reviews_trust",
        `${n}trustpilot_reviews`,
        "Trustpilot reviews block",
        "Trustpilot reviews"
      ), o(".new_slider_news .slider_wrapper", `${n}slider_news`, "Slider news block", "Slider news"), o(".new_science_block .content_wrapper", `${n}science_block`, "Science block", "Science block"), o(".new_natpat_block .layer", `${n}natpat_block`, "NatPat block", "Parallax NatPat block"), o(".new_info_block .content_wrapper p", `${n}info_block`, "Info block", "Blue info block"), o(".new_reviews_block .basic_slider", `${n}reviews_block`, "Reviews block", "Reviews block"), o(
        ".new_info2_block .content_wrapper",
        `${n}info2_block`,
        "Info2 block",
        "Last info block",
        1e3,
        0.3
      ), o(".slider_photo", `${n}slider_photo`, "Slider photo", "Slider photo");
    }
  }
  new C(q);
})();
//# sourceMappingURL=index.js.map
