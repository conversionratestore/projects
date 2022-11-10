let autoGeoLocation = setInterval(() => {
  if (document.querySelector("#___gatsby")) {
    clearInterval(autoGeoLocation)

    let eventVar = "desktop"

    if (window.innerWidth <= 768) {
      eventVar = "mobile"
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sticky ZIP ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sticky ZIP ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let style = /*html */ `
    <style>
      .css-amzw5g {
  height: fit-content !important;
}
form.css-8atqhb .chakra-input__group,
form.css-8atqhb button.chakra-button,
form.css-8atqhb .chakra-form__error-message {
  display: none !important;
}
.auto_location_block p {
  font-family: "Brandon Grotesque", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 4px;
}
.auto_location_block button {
  margin: 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffc659;
  border-radius: 6px;
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #1e1b4d;
}
.auto_location_block label {
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #d3d4d6;
  border-radius: 4px;
  align-items: center;
  padding: 7px 12px;
}
.auto_location_block label svg {
  width: 100%;
  max-width: 16px;
  margin-right: 12px;
}
.auto_location_block input {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #555555;
  border-left: 1px solid #d3d4d6;
  border-bottom: unset;
  border-top: unset;
  border-radius: 0;
  border-right: unset;
  padding: 0 0 0 12px;
  margin: 0;
  max-width: 126px;
  width: 100%;
}
.auto_location_block input:focus,
.auto_location_block input:hover {
  border-color: #d3d4d6;
}
.auto_location_block input::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #b2b2b2;
}
.auto_region {
  font-family: "Brandon Grotesque", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  text-align: right;
  color: #555555;
  width: max-content;
  margin: 0 0 0 auto;
}
.zip_error {
  display: none;
  font-family: "Brandon Grotesque", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #db3732;
  margin: 0;
}
.zip_error.is_error {
  display: block;
}
.auto_location_block label.is_error {
  border-color: #db3732;
}

@media (max-width: 1110px) {
  .auto_location_block label {
    padding: 8px 12px;
  }
}

    </style>
    `

    let autoLocationBlock = /*html */ `
    <div class="auto_location_block">
        <p>Your Zip Code</p>
        <label>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_82_998)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94141 4C7.54584 4 7.15916 4.1173 6.83027 4.33706C6.50137 4.55682 6.24502 4.86918 6.09365 5.23463C5.94227 5.60009 5.90267 6.00222 5.97984 6.39018C6.05701 6.77814 6.24749 7.13451 6.52719 7.41421C6.8069 7.69392 7.16326 7.8844 7.55123 7.96157C7.93919 8.03874 8.34132 7.99913 8.70677 7.84776C9.07223 7.69638 9.38458 7.44004 9.60435 7.11114C9.82411 6.78224 9.94141 6.39556 9.94141 6C9.94141 5.46957 9.73069 4.96086 9.35562 4.58579C8.98055 4.21071 8.47184 4 7.94141 4ZM7.94141 7C7.73943 7.00221 7.54152 6.9432 7.37372 6.83075C7.20593 6.71829 7.07613 6.55766 7.00141 6.37C6.92244 6.18571 6.9007 5.98194 6.939 5.78514C6.97729 5.58834 7.07386 5.4076 7.21617 5.26637C7.35848 5.12514 7.53995 5.02994 7.73704 4.99314C7.93413 4.95634 8.13772 4.97964 8.32141 5.06C8.54621 5.14096 8.73459 5.29973 8.85245 5.50758C8.97031 5.71542 9.00986 5.95859 8.96393 6.19307C8.918 6.42755 8.78963 6.63783 8.60207 6.78585C8.4145 6.93387 8.18014 7.00984 7.94141 7Z" fill="#555555"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3406 5.42002C13.252 4.6015 12.9788 3.81378 12.5415 3.11619C12.1043 2.41861 11.5144 1.82938 10.8163 1.39289C10.1182 0.95641 9.3302 0.684062 8.51159 0.596374C7.69298 0.508687 6.86514 0.607947 6.09047 0.886675C5.31579 1.1654 4.61448 1.61633 4.03939 2.20547C3.4643 2.79461 3.03043 3.5066 2.77048 4.28777C2.51053 5.06895 2.43127 5.89894 2.53869 6.7152C2.64611 7.53146 2.93739 8.31269 3.3906 9.00002L7.1706 14.8C7.25543 14.9279 7.37059 15.0328 7.50582 15.1054C7.64105 15.178 7.79213 15.2159 7.9456 15.2159C8.09907 15.2159 8.25015 15.178 8.38538 15.1054C8.5206 15.0328 8.63576 14.9279 8.7206 14.8L12.4906 9.00002C13.0744 8.10917 13.3807 7.06508 13.3706 6.00002C13.3808 5.80682 13.3808 5.61322 13.3706 5.42002H13.3406ZM11.6506 8.42002L7.9406 14.11L4.2206 8.40002C3.78624 7.73136 3.54041 6.95787 3.50903 6.16114C3.47765 5.36441 3.66188 4.57397 4.0423 3.87323C4.42272 3.17248 4.98521 2.58739 5.67045 2.17969C6.35568 1.77199 7.13825 1.55679 7.9356 1.55679C8.73295 1.55679 9.51551 1.77199 10.2007 2.17969C10.886 2.58739 11.4485 3.17248 11.8289 3.87323C12.2093 4.57397 12.3935 5.36441 12.3622 6.16114C12.3308 6.95787 12.085 7.73136 11.6506 8.40002V8.42002Z" fill="#555555"/>
                </g>
                <defs>
                <clipPath id="clip0_82_998">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <input type="number" autocomplete="off" pattern="[0-9]*" name="zipCode"  placeholder="Your zip code" class="">
            <span class="auto_region"></span>
        </label>
        <span class="zip_error">Write your zip code</span>
        <button>Compare quotes</button>
    </div>
    `

    document.body.insertAdjacentHTML("afterbegin", style)
    document.querySelector("form.css-8atqhb").insertAdjacentHTML("afterbegin", autoLocationBlock)

    onClickControlVer()
    fetchLocation()

    function onClickControlVer() {
      if (document.querySelector(".auto_location_block")) {
        let stickyBox = document.querySelector(".auto_location_block"),
          label = stickyBox.querySelector("label"),
          input = stickyBox.querySelector("input"),
          btnSend = stickyBox.querySelector("button"),
          error = stickyBox.querySelector(".zip_error")

        if (btnSend) {
          btnSend.addEventListener("click", (e) => {
            e.preventDefault()
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("Compare Quoutes clicked")

              document.querySelector("form.css-8atqhb button.chakra-button").click()

              if (document.querySelector("form.css-8atqhb .chakra-form__error-message") !== null) {
                document.querySelector(".auto_region").innerHTML = ""
                error.classList.add("is_error")
                label.classList.add("is_error")
                pushDataLayer("ZIP filed error shown")
              } else {
                error.classList.remove("is_error")
                label.classList.remove("is_error")
                if (document.querySelector(".auto_region svg")) {
                  document.querySelector(".auto_region").innerHTML = ""
                }
              }
            }
            e.target.setAttribute("data-test", "1")

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test")
              }
            }, 500)
          })
        }

        if (input) {
          input.addEventListener("focus", (e) => {
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("ZIP field selected (focus)")
            }
            e.target.setAttribute("data-test", "1")

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test")
              }
            }, 300)
          })

          input.addEventListener("input", (e) => {
            var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set

            nativeInputValueSetter.call(document.querySelector('[name="zip"]'), e.target.value)

            if (document.querySelector("form.css-8atqhb .chakra-form__error-message")) {
              error.classList.remove("is_error")
              label.classList.remove("is_error")
            }
            var ev2 = new Event("input", { bubbles: true })
            document.querySelector('[name="zip"]').dispatchEvent(ev2)

            document.querySelector(".auto_region").innerHTML = `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 1.59766C9.5 0.785156 8.8125 0.0976562 8 0.0976562C7.15625 0.0976562 6.5 0.785156 6.5 1.59766C6.5 2.44141 7.15625 3.09766 8 3.09766C8.8125 3.09766 9.5 2.44141 9.5 1.59766ZM8 13.0977C7.15625 13.0977 6.5 13.7852 6.5 14.5977C6.5 15.4414 7.15625 16.0977 8 16.0977C8.8125 16.0977 9.5 15.4414 9.5 14.5977C9.5 13.7852 8.8125 13.0977 8 13.0977ZM14.5 6.59766C13.6562 6.59766 13 7.28516 13 8.09766C13 8.94141 13.6562 9.59766 14.5 9.59766C15.3125 9.59766 16 8.94141 16 8.09766C16 7.28516 15.3125 6.59766 14.5 6.59766ZM3 8.09766C3 7.28516 2.3125 6.59766 1.5 6.59766C0.65625 6.59766 0 7.28516 0 8.09766C0 8.94141 0.65625 9.59766 1.5 9.59766C2.3125 9.59766 3 8.94141 3 8.09766ZM3.375 11.2227C2.5625 11.2227 1.875 11.8789 1.875 12.7227C1.875 13.5352 2.5625 14.2227 3.375 14.2227C4.21875 14.2227 4.875 13.5352 4.875 12.7227C4.875 11.8789 4.21875 11.2227 3.375 11.2227ZM12.5938 11.2227C11.75 11.2227 11.0938 11.8789 11.0938 12.7227C11.0938 13.5352 11.75 14.2227 12.5938 14.2227C13.4062 14.2227 14.0938 13.5352 14.0938 12.7227C14.0938 11.8789 13.4062 11.2227 12.5938 11.2227ZM3.375 2.00391C2.5625 2.00391 1.875 2.69141 1.875 3.50391C1.875 4.34766 2.5625 5.00391 3.375 5.00391C4.21875 5.00391 4.875 4.34766 4.875 3.50391C4.875 2.69141 4.21875 2.00391 3.375 2.00391Z" fill="#555555"/>
</svg>`

            setTimeout(() => {
              if (document.querySelector(".auto_region svg")) {
                document.querySelector(".auto_region").innerHTML = ""
              }
            }, 700)

            if (localStorage.getItem("auto_region")) {
              temp = JSON.parse(localStorage.getItem("auto_region"))
              temp.forEach((el) => {
                if (e.target.value === el.code) {
                  document.querySelector(".auto_region").innerHTML = el.name
                }
              })
            }
          })
        }

        if (document.querySelector('[name="zip"]')) {
          document.querySelector('[name="zip"]').addEventListener("input", (e) => {
            input.value = e.target.value

            if (document.querySelector("form.css-8atqhb .chakra-form__error-message")) {
              error.classList.remove("is_error")
              label.classList.remove("is_error")
            }
          })
        }
      }
    }

    function fetchLocation() {
      let arr = []
      fetch("https://ipinfo.io/json?token=625d68b69a156c")
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse)

          var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set

          nativeInputValueSetter.call(document.querySelector('[name="zip"]'), jsonResponse.postal)
          if (document.querySelector(".auto_region")) {
            document.querySelector(".auto_region").textContent = jsonResponse.region
            arr.push({
              code: jsonResponse.postal,
              name: jsonResponse.region,
            })
            localStorage.setItem("auto_region", JSON.stringify(arr))
          }

          var ev2 = new Event("input", { bubbles: true })
          document.querySelector('[name="zip"]').dispatchEvent(ev2)
        })

      // region
    }
  }
}, 100)
