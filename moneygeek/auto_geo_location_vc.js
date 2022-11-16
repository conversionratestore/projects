let autoGeoLocation = setInterval(() => {
  if (document.querySelector("#___gatsby")) {
    clearInterval(autoGeoLocation)

    console.log(">>>>>>>>>>>>>>>Variant C")

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
          eventCategory: `Exp: Autofill ZIP ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Autofill ZIP ${eventVar}`,
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
form.css-8atqhb button.chakra-button {
  display: none !important;
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
/* select*/
.select {
  position: relative;
}
.select_header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #ffffff;
  border: 1px solid #d3d4d6;
  border-radius: 4px;
  padding: 7px 12px;
  position: relative;
}
.select_header::after {
  position: absolute;
  content: "";
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  background: url(https://conversionratestore.github.io/projects/moneygeek/img/arr_gray_down.svg) center center no-repeat;
  width: 20px;
  height: 20px;
}
.select_header.rotate_arrow::after {
  transform: translateY(-50%) rotateX(180deg);
}
.select_header > label {
  display: flex;
  align-items: center;
}
.select_current {
  font-weight: 400;
  font-size: 18px !important;
  line-height: 27px !important;
  color: #555555 !important;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  outline: unset !important;
}
.select_header svg {
  width: 100%;
  max-width: 16px;
  margin-right: 10px;
}
.select_body {
  position: absolute;
  width: 100%;
  height: 280px;
  margin: 4px 0 0;
  background: #ffffff;
  border: 1px solid #d3d4d6;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 15%);
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  padding: 12px;
  display: none;
}
.select_body ul::-webkit-scrollbar {
  width: 4px;
}
.select_body ul::-webkit-scrollbar-thumb {
  background: #555555;
  border-radius: 2px;
}
.select.is_active .select_body {
  opacity: 1;
  visibility: unset;
  display: block;
}
.select_body.auto_height {
  max-height: 280px;
  height: auto;
}
.select_body ul {
  height: 100%;
  overflow: auto;
  list-style: none;
  padding: 0;
  margin: 0;
}
.select_body ul li {
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #555555;
  padding: 6px 15px;
  margin: 0;
}
.select_body ul li:hover,
.select_body ul li:focus,
.is_active_label {
  background: #3d87f7;
  cursor: pointer;
  color: #ffffff !important;
}
.select_body ul li.oops:hover {
  background: unset !important;
  cursor: initial;
  color: initial !important;
}
.hide {
  visibility: hidden;
  position: absolute;
}
.show {
  visibility: visible;
}

    </style>
    `

    let arrZip = [
      {
        value: "35242",
        label: "Alabama",
      },
      {
        value: "99504",
        label: "Alaska",
      },
      {
        value: "85364",
        label: "Arizona",
      },
      {
        value: "72401",
        label: "Arkansas",
      },
      {
        value: "90011",
        label: "California",
      },
      {
        value: "80013",
        label: "Colorado",
      },
      {
        value: "06902",
        label: "Connecticut",
      },
      {
        value: "19720",
        label: "Delaware",
      },
      {
        value: "33012",
        label: "Florida",
      },
      {
        value: "30044",
        label: "Georgia",
      },
      {
        value: "96797",
        label: "Hawaii",
      },
      {
        value: "83301",
        label: "Idaho",
      },
      {
        value: "60629",
        label: "Illinois",
      },
      {
        value: "47906",
        label: "Indiana",
      },
      {
        value: "52001",
        label: "Iowa",
      },
      {
        value: "66062",
        label: "Kansas",
      },
      {
        value: "42101",
        label: "Kentucky",
      },
      {
        value: "70726",
        label: "Louisiana",
      },
      {
        value: "04401",
        label: "Maine",
      },
      {
        value: "21234",
        label: "Maryland",
      },
      {
        value: "02148",
        label: "Massachusetts",
      },
      {
        value: "48197",
        label: "Michigan",
      },
      {
        value: "55901",
        label: "Minnesota",
      },
      {
        value: "38654",
        label: "Mississippi",
      },
      {
        value: "63376",
        label: "Missouri",
      },
      {
        value: "59901",
        label: "Montana",
      },
      {
        value: "68516",
        label: "Nebraska",
      },
      {
        value: "89108",
        label: "Nevada",
      },
      {
        value: "03103",
        label: "New Hampshire",
      },
      {
        value: "08701",
        label: "New Jersey",
      },
      {
        value: "87121",
        label: "New Mexico",
      },
      {
        value: "11368",
        label: "New York",
      },
      {
        value: "28269",
        label: "North Carolina",
      },
      {
        value: "58103",
        label: "North Dakota",
      },
      {
        value: "45011",
        label: "Ohio",
      },
      {
        value: "73099",
        label: "Oklahoma",
      },
      {
        value: "97007",
        label: "Oregon",
      },
      {
        value: "19124",
        label: "Pennsylvania",
      },
      {
        value: "02860",
        label: "Rhode Island",
      },
      {
        value: "29483",
        label: "South Carolina",
      },
      {
        value: "57701",
        label: "South Dakota",
      },
      {
        value: "37013",
        label: "Tennessee",
      },
      {
        value: "79936",
        label: "Texas",
      },
      {
        value: "84118",
        label: "Utah",
      },
      {
        value: "05401",
        label: "Vermont",
      },
      {
        value: "22193",
        label: "Virginia",
      },
      {
        value: "20011",
        label: "Washington, D.C",
      },
      {
        value: "99301",
        label: "Washington",
      },
      {
        value: "26505",
        label: "West Virginia",
      },
      {
        value: "53215",
        label: "Wisconsin",
      },
      {
        value: "82001",
        label: "Wyoming",
      },
    ]

    let autoLocationBlock = /*html */ `
    <div class="auto_location_block">
        <div class="select" id="ZipCode">
          <div class="select_header">
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

              <input data-zip class="select_current" type="text" placeholder="Your zip code" />
            </label>
            <!-- <span data-zip class="select_current">Your zip code</span> -->
          </div>
          <div class="select_body">
            <ul class="">
            </ul>
          </div>
        </div>
        <button>Compare quotes</button>
    </div>
    `

    function createSelectEl(zip, label) {
      return `<li class="select_item" data-value=${zip}>${label}</li>`
    }

    document.body.insertAdjacentHTML("afterbegin", style)
    document.querySelector("form.css-8atqhb")?.insertAdjacentHTML("afterbegin", autoLocationBlock)

    if (document.querySelector(".auto_location_block")) {
      let selectCurrent = document.querySelector(".select_current"),
        btnSend = document.querySelector(".auto_location_block button"),
        selectBody = document.querySelector(".select_body"),
        selectList = document.querySelector(".select_body ul")

      if (selectCurrent.value !== "") {
        const options = {
          root: null,
          threshold: 1,
        }

        let observerNewHeader = new IntersectionObserver((entries) => {
          if (!entries[0].isIntersecting) return
          pushDataLayer(`State resolved from IP and shown`)
          observerNewHeader.disconnect()
        })

        observerNewHeader.observe(selectCurrent, options)
      }

      onClickControlVer()
      fetchLocation()

      if (selectList) {
        arrZip.forEach((el) => {
          selectList.insertAdjacentHTML("beforeend", createSelectEl(el.value, el.label))
        })

        onChooseSelect()
      }

      // click on btnSend
      function onClickControlVer() {
        if (btnSend) {
          btnSend.addEventListener("click", (e) => {
            e.preventDefault()
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("Compare Quoutes clicked")

              document.querySelector("form.css-8atqhb button.chakra-button").click()
            }
            e.target.setAttribute("data-test", "1")

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test")
              }
            }, 500)
          })
        }
      }

      // fetch ipinfo
      function fetchLocation() {
        fetch("https://ipinfo.io/json?token=625d68b69a156c")
          .then((response) => response.json())
          .then((jsonResponse) => {
            console.log(jsonResponse)

            onChangeInput(jsonResponse.postal)

            if (selectCurrent) {
              selectCurrent.value = jsonResponse.region
              selectCurrent.setAttribute("data-zip", jsonResponse.postal)
            }

            if (selectList.querySelectorAll("li")) {
              selectList.querySelectorAll("li").forEach((item) => {
                if (item.textContent.toLowerCase().includes(jsonResponse.region.toLowerCase())) {
                  item.setAttribute("data-value", jsonResponse.postal)
                }
              })
            }
          })
      }

      // ChangeInput[name="zip"]
      function onChangeInput(value) {
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set

        nativeInputValueSetter.call(document.querySelector('[name="zip"]'), value)

        var ev2 = new Event("input", { bubbles: true })
        document.querySelector('[name="zip"]').dispatchEvent(ev2)
      }

      // choose select
      if (selectBody) {
        filterInputText()

        document.querySelector(".select_header label > input").addEventListener("input", function (e) {
          selectList.innerHTML = ""

          arrZip.forEach((el) => {
            selectList.insertAdjacentHTML("beforeend", createSelectEl(el.value, el.label))
          })

          onChooseSelect()

          filterInputText()
          autoHeightSelectBody()
        })

        function filterInputText() {
          let filterValue = selectCurrent.value.toUpperCase()
          let notFound = true

          selectList.querySelectorAll("li").forEach(function (el) {
            let text = el.textContent.toUpperCase()
            if (text.includes(filterValue)) {
              el?.classList.add("show")
              el?.classList.remove("hide")
              notFound = false
              includesSymb(filterValue, text, el.firstChild)
            } else {
              el?.classList.add("hide")
              el?.classList.remove("show")
            }
          })

          if (notFound) {
            selectList.innerHTML = `<li class="oops">Oops, nothing found!</li>`
          }
        }

        function includesSymb(text, cont, element) {
          let root = element
          let content = cont

          let rng = document.createRange()

          rng.setStart(root, content.indexOf(text))

          rng.setEnd(root, content.indexOf(text) + text.length)

          let highlightDiv = document.createElement("strong")

          rng.surroundContents(highlightDiv)
        }
      }

      function autoHeightSelectBody() {
        if (document.querySelectorAll(".select_body ul li.show").length > 6) {
          selectBody.classList.remove("auto_height")
        } else {
          selectBody.classList.add("auto_height")
        }
      }

      // ChooseSelect
      function onChooseSelect() {
        let selectHeader = document.querySelectorAll(".select_header")
        let selectItem = document.querySelectorAll(".select_body li")

        selectHeader.forEach((item) => {
          item.addEventListener("click", selectToggle)
        })

        selectItem.forEach((item) => {
          item.addEventListener("click", selectChoose)
        })

        function selectToggle() {
          this.parentElement.classList.add("is_active")
          if (this.parentElement.classList.contains("is_active")) {
            selectCurrent.focus()
            if (!this.parentElement.getAttribute("data-test")) {
              pushDataLayer("ZIP field selected (focus)")
            }
            this.parentElement.setAttribute("data-test", "1")
            setTimeout(() => {
              if (this.parentElement.getAttribute("data-test")) {
                this.parentElement.removeAttribute("data-test")
              }
            }, 100)
          }
          this.classList.add("rotate_arrow")
        }

        function selectChoose() {
          let text = this.innerText,
            zipCode = this.getAttribute("data-value"),
            select = this.closest(".select"),
            currentText = select.querySelector(".select_current")

          this.closest(".select_body")
            .querySelectorAll("li")
            .forEach((item) => {
              if (item.classList.contains("is_active_label")) {
                item.classList.remove("is_active_label")
              }
              item.classList.remove("hide")
              if (selectBody.classList.contains("auto_height")) {
                selectBody.classList.remove("auto_height")
              }
            })

          pushDataLayer(`${text} state selected from drop down`)
          currentText.value = text
          currentText.setAttribute("data-zip", zipCode)
          this.classList.add("is_active_label")
          select.classList.remove("is_active")

          select.querySelector(".select_header").classList.toggle("rotate_arrow")
          onChangeInput(zipCode)
        }
      }
    }

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)

        clarity("set", "autofill_zip", "variant_1")
      }
    }, 200)
  }
}, 1200)
