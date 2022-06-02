let startFunk = setInterval(() => {
  if (document.querySelector("#root #watch-page")) {
    clearInterval(startFunk)

    let exitIntentPopUpStyle = /*html */ `
    <style>
        .backdrop_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(0 0 0 / 40%);
            display: flex;
            overflow-y: auto;
            z-index: 9999;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            }

            .backdrop_popup.show {
            opacity: 1;
            pointer-events: auto;
            }

            .backdrop_popup.show .container_popup {
            transform: translateY(0);
            }

            .backdrop_popup .container_popup {
            background: #ffffff;
            border-radius: 20px;
            padding: 56px;
            max-width: 735px;
            width: calc(100% - 40px);
            margin: auto;
            position: relative;
            transform: translateY(-100px);
            transition: all 0.3s ease;
            }

            .btn_close {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            }

            .body_popup .img_wrap {
            max-width: 180px;
            max-height: 180px;
            margin: 0 auto;
            }

            .body_popup .img_wrap img {
            width: 100%;
            height: 100%;
            }

            .body_popup > h2 {
            font-weight: 900;
            font-size: 24px;
            line-height: 133%;
            text-align: center;
            color: #183b56;
            margin: 28px auto 8px;
            max-width: 498px;
            }

            .body_popup > h2 > span {
            color: #2096ef;
            }

            .body_popup > p {
            font-weight: 400;
            font-size: 14px;
            line-height: 171%;
            text-align: center;
            color: #5a7386;
            max-width: 375px;
            margin: 0 auto 28px;
            }

            .body_popup > ul {
            display: flex;
            flex-direction: column;
            padding: 28px 0 0;
            margin: 0 0 48px;
            gap: 16px;
            border-top: 1px solid #eef1f3;
            }

            .body_popup > ul li {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            }

            .body_popup > ul li > svg {
            max-width: 28px;
            max-height: 28px;
            width: 100%;
            }

            .body_popup > ul li p {
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            color: #5a7386;
            margin: 0 0 0 20px;
            }

            .body_popup > button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #183b56;
            border-radius: 10px;
            height: 58px;
            width: 100%;
            border: none;
            outline: none;
            font-weight: 900;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            letter-spacing: -0.01em;
            color: #ffffff;
            cursor: pointer;
            }

            .body_popup > button:hover {
            animation: bounce 1s;
            box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
            }

            .body_popup > button:focus {
            box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
            }

            @keyframes bounce {
            0%,
            20%,
            60%,
            100% {
                transform: translateY(0);
                transform: translateY(0);
            }

            40% {
                transform: translateY(-20px);
                transform: translateY(-20px);
            }

            80% {
                transform: translateY(-10px);
                transform: translateY(-10px);
            }
            }

            @media (max-width: 767px) {
            .backdrop_popup .container_popup {
                padding: 24px;
                width: calc(100% - 75px);
            }

            .body_popup .img_wrap {
                max-width: 140px;
                max-height: 140px;
            }

            .body_popup > h2 {
                font-size: 18px;
                line-height: 120%;
                margin: 16px 0 8px;
            }

            .body_popup > p {
                font-size: 11px;
                line-height: 142%;
                margin: 0 0 16px;
            }

            .body_popup > ul {
                padding: 16px 0 0;
                margin: 0 0 32px;
                gap: 12px;
            }

            .body_popup > ul li p {
                font-size: 12px;
                line-height: 136%;
                margin: 0 0 0 8px;
            }

            .body_popup > button {
                font-size: 12px;
            }
            }

            @media (max-width: 320px) {
            .body_popup > h2 {
                font-size: 14px;
            }

            .body_popup > p {
                font-size: 9px;
            }

            .body_popup > ul li p {
                font-size: 10px;
            }

            .body_popup > button {
                font-size: 10px;
            }
            }

            @media (max-width: 280px) {
            .body_popup > h2 {
                font-size: 11px;
            }

            .body_popup > p {
                font-size: 8px;
            }

            .body_popup > ul li p {
                font-size: 9px;
            }

            .body_popup > button {
                font-size: 9px;
            }

            .backdrop_popup .container_popup {
                width: calc(100% - 37px);
            }
        }

    </style>
    `

    let exitIntentPopUp = /*html */ `
    <div class="backdrop_popup">
        <div class="container_popup">
            <svg class="btn_close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#5A7386" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="#5A7386" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div class="body_popup">
            <div class="img_wrap">
                <img src="https://conversionratestore.github.io/projects/samcart/img/man.jpg" alt="the man" />
            </div>
            <h2>Book a <span>free live demo call</span> with our expert and get answers on your specific questions</h2>
            <p>See how Samcart can help you start your online business or increase revenue of your existing one</p>

            <ul>
                <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#E7F3EC" />
                    <path d="M18.6667 11.667L13.0521 17.5003L10.5 14.8488" fill="#E7F3EC" />
                    <path d="M18.6667 11.667L13.0521 17.5003L10.5 14.8488" stroke="#5DB082" stroke-width="2.89684" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>How to start our grow your online business</p>
                </li>
                <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#E7F3EC" />
                    <path d="M18.6667 11.667L13.0521 17.5003L10.5 14.8488" fill="#E7F3EC" />
                    <path d="M18.6667 11.667L13.0521 17.5003L10.5 14.8488" stroke="#5DB082" stroke-width="2.89684" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>How to create your first marketplace and start receiving orders within the first 2-3 days</p>
                </li>
                <li>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#E7F3EC" />
                    <path d="M18.6667 11.667L13.0521 17.5003L10.5 14.8488" fill="#E7F3EC" />
                    <path d="M18.6667 11.667L13.0521 17.5003L10.5 14.8488" stroke="#5DB082" stroke-width="2.89684" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>How to use SamCart's features to increase your revenue per customer</p>
                </li>
            </ul>
            <button>Book a FREE LIVE DEMO call now</button>
            </div>
        </div>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", exitIntentPopUpStyle)
    document.body.insertAdjacentHTML("beforeend", exitIntentPopUp)

    //show popup desktop
    addEvent(document, "mouseout", function (e) {
      if (e.toElement == null && e.relatedTarget == null && sessionStorage.getItem("popup_loaded") == null) {
        sessionStorage.setItem("popup_loaded", "true") //refresh status popup
        showPopup() //show popup
      }
    })

    //show popup mobile
    if (window.innerWidth <= 768) {
      let lastPosition = 0,
        newPosition = 0,
        currentSpeed = 0
      let scrollSpeed = () => {
        lastPosition = window.scrollY
        setTimeout(() => {
          newPosition = window.scrollY
        }, 100)
        currentSpeed = newPosition - lastPosition

        if (currentSpeed > 100 && sessionStorage.getItem("popup_loaded") == null) {
          sessionStorage.setItem("popup_loaded", "true") //refresh status popup
          showPopup() //show popup
          document.removeEventListener("scroll", scrollSpeed)
        }
      }

      document.addEventListener("scroll", scrollSpeed)
    }

    //close popup
    document.querySelector(".btn_close").addEventListener("click", () => {
      hidePopup()
    })

    document.querySelector(".backdrop_popup").addEventListener("click", (e) => {
      if (e.target.matches(".backdrop_popup")) {
        hidePopup()
      }
    })

    //show popup
    function showPopup() {
      document.querySelector(".backdrop_popup").classList.add("show")
      document.body.style.overflow = "hidden"
    }

    //hide popup
    function hidePopup() {
      document.querySelector(".backdrop_popup").classList.remove("show")
      document.body.style.overflow = "unset"
    }

    //exit intent
    function addEvent(obj, evt, fn) {
      if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false)
      } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn)
      }
    }
  }
}, 10)
