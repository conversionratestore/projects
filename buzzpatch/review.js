let startFunkReview = setInterval(() => {
  if (document.querySelector(".js-heading .trust-rating")) {
    clearInterval(startFunkReview)

    let scriptCustom = document.createElement("script")
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.0.0/zuck.min.js"
    scriptCustom.async = false
    document.head.appendChild(scriptCustom)

    let scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.0.0/zuck.min.css"
    scriptCustomStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomStyle)

    let scriptSnapgramStyle = document.createElement("link")
    scriptSnapgramStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.0.4/skins/snapgram.min.css"
    scriptSnapgramStyle.rel = "stylesheet"
    document.head.appendChild(scriptSnapgramStyle)

    let styleReveiw = /* html */ `
      <style>
        .trust-rating{
            display: none;
        }

        /*block_first */
        .block_first{
            background: #FFFFFF;
            border-radius: 14px;
            max-width: 315px;
            margin: 0 auto 20px;
            padding: 20px;
        }

        .block_first > p{
            font-weight: 400;
            font-size: 12px !important;
            line-height: 16px !important;
            color: #515151;
            margin-bottom: 5px;
        }

        .block_first > div{
            display: flex;
            align-items: center;
            color: #0E0C0C;
        }

        .block_first > div span:nth-child(1){
            font-weight: 700;
            font-size: 18px;
            line-height: 156%;
            margin-right: 10px;
        }

        .block_first > div span:nth-child(3){
            font-weight: 400;
            font-size: 12px;
            line-height: 133%;
            text-decoration-line: underline;
            margin-left: 5px;
        }

        .block_first > ul{
            display: flex;
            margin: 5px 0 0 !important;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
        }

        .block_first > ul li{
            max-width: 65px;
            max-height: 65px;
            width: 100%;
            height: 100%;
            margin: 0 !important;
        }

        .block_first > ul li img{
            width: 100%;
            height: 100%;
        }

        /* block_second*/
        .block_second{
            margin: 0 22px 64px;
        }

        .block_second > h2 {
            font-weight: 500;
            font-size: 36px;
            line-height: 100%;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 15px;
            text-align: center;
        }

        .block_second ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin: 0;
        }

        .block_second > ul > li{
            border-radius: 50%;
            list-style: none;
            width: 75px;
            height: 75px;
            background: #FFFFFF;
            border: 3px solid #FF3C7F;
            position: relative;
        }

        .stories.carousel .story>a u{
            position: relative;
        }

        .stories.carousel .story>a u::before{
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url('https://conversionratestore.github.io/projects/buzzpatch/img/play_arrow.png');
        }

         @media (max-width: 320px){
            .block_first > div span:nth-child(1){
                font-size: 16px;
            }

            .block_second > ul > li{
                width: 60px;
                height: 60px;
            }
         }

      </style>
      `

    let blockFirst = /* html */ `
    <div class="block_first">
      <p>Our customers rate us as</p>
      <div>
        <span>Excellent</span>
        <div>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
              fill="#FFD200"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2_162" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="20">
              <rect width="12" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2_162)">
              <path
                d="M10 0L12.645 6.35942L19.5106 6.90983L14.2798 11.3906L15.8779 18.0902L10 14.5L4.12215 18.0902L5.72025 11.3906L0.489435 6.90983L7.35497 6.35942L10 0Z"
                fill="#FFD200"
              />
            </g>
            <mask id="mask1_2_162" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="10" y="0" width="10" height="20">
              <rect x="10" width="10" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask1_2_162)">
              <path
                d="M10 1.30198L12.1834 6.55144L12.3007 6.83342L12.6051 6.85782L18.2723 7.31216L13.9545 11.0108L13.7225 11.2095L13.7934 11.5066L15.1126 17.0368L10.2606 14.0733L10 13.9141L9.73937 14.0733L4.88743 17.0368L6.2066 11.5066L6.27746 11.2095L6.04552 11.0108L1.72769 7.31216L7.39492 6.85782L7.69934 6.83342L7.81663 6.55144L10 1.30198Z"
                stroke="#FFD200"
              />
            </g>
          </svg>
        </div>
        <span>4.91 (92)</span>
      </div>
      <ul>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review1.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review2.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review3.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg" alt="child" /></li>
      </ul>
    </div>
    `

    let blockSecond = /* html */ `
    <div class="block_second">
        <h2>Video Reviews</h2>
        <ul id="stories">

        </ul>
    </div>
    
    `

    document.head.insertAdjacentHTML("beforeend", styleReveiw)
    document.querySelector(".js-heading .trust-rating").insertAdjacentHTML("afterend", blockFirst)
    document.querySelector("#flowers").insertAdjacentHTML("afterbegin", blockSecond)

    //click on block_first
    scrolling(".block_first")

    // Pure js scrolling
    function scrolling(upSelector) {
      // Scrolling with raf
      let links = document.querySelectorAll(upSelector),
        speed = 0.3

      links.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault()

          let widthTop = document.documentElement.scrollTop,
            hash = "#reviews",
            toBlock = document.querySelector(hash).getBoundingClientRect().top - 110,
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

    //
    setTimeout(() => {
      function buildItem(id, type, length, src, preview, link, seen, time) {
        return {
          id,
          type,
          length,
          src,
          preview,
          link,
          seen,
          time,
        }
      }

      const stories = new Zuck("stories", {
        skin: "snapgram",
        avatars: true,
        list: false,
        openEffect: true,
        cubeEffect: false,
        autoFullScreen: false,
        backButton: true,
        backNative: false,
        previousTap: true,
        localStorage: true,
        reactive: true,
        rtl: false,
        stories: [
          {
            id: "a",
            photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review1.jpg",
            items: [buildItem("1", "photo", 1, "https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg", "", "", false, 1492665454)],
          },
          {
            id: "r",
            photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review2.jpg",
            items: [buildItem("1", "photo", 3, "https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg", "", false, 1492665454)],
          },
          {
            id: "t",
            photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review3.jpg",
            items: [buildItem("1", "photo", 3, "https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg", "", false, 1492665454)],
          },
          {
            id: "d",
            photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review4.jpg",
            items: [buildItem("1", "photo", 3, "https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg", "", false, 1492665454)],
          },
        ],
      })
    }, 3000)
  }
}, 10)
