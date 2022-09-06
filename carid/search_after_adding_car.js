console.log("initExp")

/********* Settings **********/
const settings = {
  dir: "https://flopsi69.github.io/crs/carid/search",
  clarity: true,
  observe: true,
}

//Hotjar
if (settings.clarity) {
  try {
    clarity("set", "site_search", "variant_1")
  } catch (e) {}
}

// Alalytic
function gaEvent(action, label) {
  if (!label) {
    label = ""
  }
  let device = "Desktop"
  if (window.innerWidth < 992) {
    device = "Mobile"
  }
  try {
    var objData = {
      event: "event-to-ga",
      eventCategory: "Exp: Site search " + device,
      eventAction: action,
      eventLabel: label,
      eventValue: "",
    }
    console.log("EventFire:", objData)
    dataLayer.push(objData)
  } catch (e) {}
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue

        // if (node.classList.contains("mygarage-dd-container")) {
        //   if (node.querySelector(".mygarage-vehicle-title") && document.querySelector(".lav-add-popup")) {
        //     // localStorage.setItem("showSearch", "yes")
        //     if (localStorage.getItem("startDate")) {
        //       let time = (new Date().getTime() - parseInt(localStorage.getItem("startDate"))) / 1000
        //       gaEvent(`Popup was closed after ${time} seconds`, `Popup: Select vehicle`)
        //       localStorage.removeItem("startDate")
        //     }
        //   }
        // }

        if (node.classList.contains("new_input-search") && node.closest(".gbox_portal")) {
          console.log(`search-field`)
          node.closest(".gbox_portal").classList.add("search-add-popup")
        }

        if (node.classList.contains("select-vehicle") && node.closest(".gbox_portal")) {
          node.closest(".gbox_portal").classList.add("lav-add-popup")
          setTimeout(() => {
            document.querySelector(".lav-add-popup .gbox_close").addEventListener("click", function () {
              gaEvent("Clicks on the cross pictogramme", "Popup: Select vehicle")
            })

            for (let item of document.querySelectorAll(".lav-add-popup .nav .link")) {
              item.addEventListener("click", function () {
                let text = item.innerText
                if (item.querySelector(".link-title")) {
                  text = item.querySelector(".link-title").innerText
                }
                gaEvent(`Click on ${text} navigation button`, "Popup: Select vehicle")
                setTimeout(() => {
                  for (let item of document.querySelectorAll(".lav-add-popup .select-vehicle-col")) {
                    item.addEventListener("click", function (e) {
                      if (e.target.classList.contains("item")) return false
                      if (item.querySelector(".marker").innerText == "1") {
                        gaEvent(`Click on Year select`, "Popup: Select vehicle")
                      } else if (item.querySelector(".marker").innerText == "2") {
                        gaEvent(`Click on Make select`, "Popup: Select vehicle")
                      } else if (item.querySelector(".marker").innerText == "3") {
                        gaEvent(`Click on Model select`, "Popup: Select vehicle")
                        localStorage.setItem("showSearch", "yes")
                      }
                    })
                  }
                }, 500)
              })
            }

            for (let item of document.querySelectorAll(".select-vehicle-col")) {
              item.addEventListener("click", function () {
                if (item.querySelector(".marker").innerText == "1") {
                  gaEvent(`Click on Year select`, "Popup: Select vehicle")
                } else if (item.querySelector(".marker").innerText == "2") {
                  gaEvent(`Click on Make select`, "Popup: Select vehicle")
                } else if (item.querySelector(".marker").innerText == "3") {
                  gaEvent(`Click on Model select`, "Popup: Select vehicle")
                  localStorage.setItem("showSearch", "yes")
                }
              })
            }
          }, 800)
        }

        //
        if (node.classList.contains("select-vehicle-spacer") && node.closest(".head-nav-inner")) {
          setTimeout(() => {
            for (let item of document.querySelectorAll(".select-vehicle-col")) {
              item.addEventListener("click", function () {
                if (item.querySelector(".marker").innerText == "1") {
                  gaEvent(`Click on Year select`, "Homepage: Select vehicle")
                } else if (item.querySelector(".marker").innerText == "2") {
                  gaEvent(`Click on Make select`, "Homepage: Select vehicle")
                } else if (item.querySelector(".marker").innerText == "3") {
                  gaEvent(`Click on Model select`, "Homepage: Select vehicle")
                  localStorage.setItem("showSearch", "yes")
                }
              })
            }
          }, 800)
        }
      }
    }
  })

  let demoElem = document.body

  observer.observe(demoElem, { childList: true, subtree: true })
}

window.onunload = unloadPage
function unloadPage() {
  console.log("unload event detected!")
  if (localStorage.getItem("startDateReload")) {
    let time = (new Date().getTime() - parseInt(localStorage.getItem("startDateReload"))) / 1000
    gaEvent(`Popup was closed after ${time} seconds`, `Popup: Select vehicle`)

    localStorage.removeItem("startDateReload")
  }

  if (localStorage.getItem("startDateSearchReload")) {
    let time = (new Date().getTime() - parseInt(localStorage.getItem("startDateSearchReload"))) / 1000
    gaEvent(`Popup was closed after ${time} seconds`, `Header. Search menu`)

    localStorage.removeItem("startDateSearchReload")
  }

  if (localStorage.getItem("startDate")) {
    localStorage.removeItem("startDate")
  }

  if (localStorage.getItem("startDateSearch")) {
    localStorage.removeItem("startDateSearch")
  }
}

if (settings.observe) {
  let observerRemoveNode = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.removedNodes) {
        if (!(node instanceof HTMLElement)) continue

        if (node.classList.contains("search-add-popup")) {
          if (localStorage.getItem("startDateSearch")) {
            let time = (new Date().getTime() - parseInt(localStorage.getItem("startDateSearch"))) / 1000
            gaEvent(`Popup was closed after ${time} seconds`, `Header. Search menu`)

            localStorage.removeItem("startDateSearch")
          }

          if (localStorage.getItem("startDateSearchReload")) {
            localStorage.removeItem("startDateSearchReload")
          }

          console.log(`removedNodes`, node)
        }

        if (node.classList.contains("lav-add-popup")) {
          if (localStorage.getItem("startDate")) {
            let time = (new Date().getTime() - parseInt(localStorage.getItem("startDate"))) / 1000
            gaEvent(`Popup was closed after ${time} seconds`, `Popup: Select vehicle`)

            localStorage.removeItem("startDate")
          }

          if (localStorage.getItem("startDateReload")) {
            localStorage.removeItem("startDateReload")
          }

          console.log(`removedNodes`, node)
        }
      }
    }
  })

  let demoElem = document.body

  observerRemoveNode.observe(demoElem, { childList: true, subtree: true })
}

// Styles
const styles = `
    .search-field.search-preloader::after{
    background-color: unset !important;
    }
  .lav-jumb {
    background: #24282F;
    border-radius: 5px;
    max-width: 1100px;
    margin: auto;
    padding: 40px;
    box-sizing: border-box;
  }
  .head-nav-inner .lav-jumb .select-vehicle-spacer {
    margin-bottom: 0;
  }

  .lav-side__search {
    margin: 0 20px;
    border-top: 1px solid #f0f0f0;
    padding-top: 10px;
    margin-top: 5px;
  }
  .lav-side__search-inner {
    background: #E8E8E8;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    cursor: pointer;
  }
  .lav-side__search-input {
    flex-grow: 1;
    padding: 5px 9px;
    font-size: 14px;
    line-height: 16px;
    height: 32px;
    border: 1px solid rgba(54, 61, 71, 0.6);
    border-radius: 3px;
    box-sizing: border-box;
  }
  .lav-side__search-btn {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border: none;
    line-height: 0;
    background: #D4252A;
    border-radius: 5px;
    margin-left: 2px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .lav-side__search-btn:hover {
    background: #be2126;
    text-decoration: none;
  }
  .left-dd-vehicle-spacer.js-left-menu-garage {
    margin-top: 0;
  }
  .left-dd-vehicle-spacer.js-left-menu-garage:before {
    display: none;
  }
  #dummy-search-input-for-preact-render {
    display: flex;
    position: relative;
    background: #EAEAEA;
    border-radius: 5px;
    padding: 10px;
    margin-top: -5px;
  }
  #dummy-search-input-for-preact-render .header-search-label {
    padding-left: 44px;
    padding-right: 12px;
    flex-grow: 1;
    overflow: hidden;
  }
  #dummy-search-input-for-preact-render .header-search-label:before {
    font-size: 14px;
    line-height: 16px;
  }
  #dummy-search-input-for-preact-render .header-search-label:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 13px;
    right: initial;
    width: 17.5px;
    height: 17.5px;
    background: url(${settings.dir}/img/search.svg) center no-repeat;
    background-size: contain;
  }
  .lav-search__btn-top {
    border: none;
    flex-shrink: 0;
    align-items: center;
    background: #d4252a;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    min-width: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: 124px;
    margin-left: 5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding: 5px;
  }
  .lav-search__btn-brief {
    display: none;
  }
  .gbox_portal .select-vehicle {
    background: rgba(0,0,0,0.65);
    border-radius: 5px;
    padding: 30px;
  }
  .lav-add-popup .gbox_close {
    top: 20px;
    right: 20px;
    opacity: 1;
  }
  .lav-search__btn-top.new_input-search{
    max-width: 124px;
    height: 44px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    text-align: center;
    position: absolute;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff !important;
  }
    .search-field>.search-btn{
    display: none;
    }
  @media(max-width: 1024px) {
    .lav-search__btn-brief {
      display: block;
    }
    .lav-search__btn-full {
      display: none;
    }
    .lav-search__btn-top {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      width: 36px;
      height: 36px;
    }
    .lav-search__btn-top.new_input-search{
        min-width: 36px;
        height: 36px;
        max-width: 36px;
        right: 5px;
    }
    .lav-search__btn-top.new_input-search .lav-search__btn-brief {
    display: block;
    width: 18px;
    height: 18px;
}
    #dummy-search-input-for-preact-render .header-search-label {
      padding-left: 12px;
      height: 36px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    #dummy-search-input-for-preact-render .header-search-label:after {
      display: none;
    }
  }
  @media(max-width: 740px) {
    #dummy-search-input-for-preact-render {
      margin-top: 0;
      padding: 5px;
    }
    .gbox_portal .select-vehicle {
      padding: 55px 7px 5px;
    }
  }
`

const stylesEl = document.createElement("style")
stylesEl.innerHTML = styles
document.body.appendChild(stylesEl)
/*** STYLES / end ***/

/********* Custom Code **********/
init()
var isSearch = false
var isProcessing = false
var isForClosingSearch = false

function init() {
  console.log("init")
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && document.activeElement && isSearch) {
      gaEvent("Click on Search button enter", "Header. Search menu")
    }
  })

  document.addEventListener("click", function (e) {
    console.log(e.target)

    console.log(`isSearch`, isSearch)

    if (e.target.classList.contains("select-vehicle-button") && document.querySelector(".select-vehicle-button.-after-selects")) {
      gaEvent(`Click on Go button`, "Main Page: Select vehicle")
    }

    if (
      localStorage.getItem("startDate") &&
      e.target.href &&
      (e.target.href.includes("powersportsid") || e.target.href.includes("truckid") || e.target.href.includes("motorcycleid"))
    ) {
      let time = (new Date().getTime() - parseInt(localStorage.getItem("startDate"))) / 1000
      gaEvent(`Popup was closed after ${time} seconds`, "Popup: Select vehicle")
      localStorage.removeItem("startDate")
    }

    if (e.target.classList.contains("simple-btn") && document.querySelector(".simple-btn") && e.target.closest(".home-header-nav-tool")) {
      gaEvent(`Click on Add vehicle`, `Header: My garage`)
      localStorage.setItem("startDate", JSON.stringify(new Date().getTime()))
      localStorage.setItem("startDateReload", JSON.stringify(new Date().getTime()))
      isSearch = true
    }

    if (e.target.classList.contains("simple-btn") && document.querySelector(".simple-btn") && e.target.closest(".history-add-vehicle-block.-left-menu")) {
      gaEvent(`Click on Add vehicle`, "Humburger menu: My garage")
      localStorage.setItem("startDate", JSON.stringify(new Date().getTime()))
      localStorage.setItem("startDateReload", JSON.stringify(new Date().getTime()))
      isSearch = true
    }

    if (
      (e.target.classList.contains("hover-item") && e.target.closest(".left-dd-vehicle-spacer")) ||
      (e.target.classList.contains("left-menu-vehicles-title") && e.target.closest(".left-dd-vehicle-spacer")) ||
      (e.target.classList.contains("count-item") && e.target.closest(".left-dd-vehicle-spacer")) ||
      e.target.classList.contains("left-dd-vehicle-spacer") ||
      (e.target.classList.contains("left-dd-title") && e.target.closest(".left-dd-vehicle-spacer"))
    ) {
      gaEvent(`Click on My Garage`, "Humburger menu: My garage")
      localStorage.setItem("startDate", JSON.stringify(new Date().getTime()))
      localStorage.setItem("startDateReload", JSON.stringify(new Date().getTime()))
      isSearch = true
    }

    if (e.target.classList.contains("select-vehicle-button") && e.target.closest(".lav-add-popup")) {
      gaEvent(`Click on Go button`, "Popup: Select vehicle")
    }

    // if ((e.target.classList.contains("gbox") || e.target.classList.contains("gbox_wrap")) && document.querySelector(".lav-add-popup")) {
    //   if (localStorage.getItem("startDate")) {
    //     let time = (new Date().getTime() - parseInt(localStorage.getItem("startDate"))) / 1000
    //     gaEvent(`Popup was closed after ${time} seconds`, "Popup: Select vehicle")
    //     localStorage.removeItem("startDate")
    //   }
    // }

    if ((e.target.classList.contains("gbox") || e.target.classList.contains("gbox_wrap")) && isSearch) {
      isSearch = false

      if (!isForClosingSearch) {
        gaEvent("Clicks on the background space closes pop-up", "Popup: Select vehicle")
      } else {
        gaEvent("Clicks on the background space closes pop-up", "Header. Search menu")
        isForClosingSearch = false
      }
    }

    if (e.target.classList.contains("gbox_close") && isSearch && isForClosingSearch) {
      gaEvent("Clicks on the closing search cross pictogramme", "Header. Search menu")
      isSearch = false
      isForClosingSearch = false
    }

    if (e.target.classList.contains("js-recent-searches-summary-item")) {
      gaEvent("Click on last searches terms", "Header. Search menu")
    }

    if (e.target.classList.contains("action") && e.target.closest(".recent-searches-summary")) {
      gaEvent("Click on Clear History link", "Header. Search menu")
    }

    if (e.target.classList.contains("search-btn") && document.querySelector(".search-submit-loader") && isSearch) {
      if (!e.target.getAttribute("data-test")) {
        console.log(`Click on Search button`)
        gaEvent(`Click on Search button. ${document.querySelector("#search-field").value}`, "Header. Search menu")

        setTimeout(() => {
          e.target.removeAttribute("data-test", "1")
        }, 100)
      }
      e.target.setAttribute("data-test", "1")
    }

    if (
      (e.target.classList.contains("cat-link") && isSearch && e.target.closest(".item")) ||
      (e.target.classList.contains("cat-img") && isSearch && e.target.closest(".item")) ||
      (e.target.classList.contains("item") && isSearch && e.target.closest(".categories-grid"))
    ) {
      if (e.target.closest(".autoc-section")) {
        gaEvent(`Click on ${e.target.innerText} button in ${e.target.closest(".autoc-section").querySelector(".autoc-section-title").innerText}`, "Header. Search menu")
      }

      if (e.target.closest(".autoc-section-row")) {
        gaEvent(`Click on ${e.target.innerText} button in ${e.target.closest(".autoc-section-row").querySelector(".autoc-section-title").innerText}`, "Header. Search menu")
      }
    }

    if (e.target.closest(".autoc-prod-li") && e.target.closest(".autoc-products-section") && isSearch) {
      gaEvent(
        `Click on ${e.target.closest(".autoc-prod-li").querySelector(".title").innerText} button in ${
          e.target.closest(".autoc-products-section").querySelector(".autoc-section-title").innerText
        }`,
        "Header. Search menu"
      )
    }

    if (e.target.closest(".autoc-brands-li") && e.target.closest(".autoc-brands") && isSearch) {
      gaEvent(`Click on brand icon in ${e.target.closest(".autoc-section").querySelector(".autoc-section-title").innerText}`, "Header. Search menu")
    }
  })

  if (localStorage.getItem("showSearch") == "yes") {
    let clickSearch = setInterval(() => {
      if (!document.querySelector(".lav-search__btn-top")) return false
      clearInterval(clickSearch)
      localStorage.removeItem("showSearch")
      isSearch = true
      document.querySelector(".header-search-label").click()
    }, 200)
  }

  gaEvent("loaded")

  changeSearch()
  addSearchBtn()
}

function changeSearch() {
  if (!document.querySelector("#dummy-search-input-for-preact-render")) return false

  setInterval(() => {
    if (!document.querySelector(".lav-search__btn-top")) {
      document.querySelector("#dummy-search-input-for-preact-render").insertAdjacentHTML(
        "beforeend",
        `<button class='lav-search__btn lav-search__btn-top'>
            <span class='lav-search__btn-full'>Search</span>
            <span class='lav-search__btn-brief'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9659 11.2549H12.7559L17.7459 16.2549L16.2559 17.7449L11.2559 12.7549V11.9649L10.9859 11.6849C9.84586 12.6649 8.36586 13.2549 6.75586 13.2549C3.16586 13.2549 0.255859 10.3449 0.255859 6.75488C0.255859 3.16488 3.16586 0.254883 6.75586 0.254883C10.3459 0.254883 13.2559 3.16488 13.2559 6.75488C13.2559 8.36488 12.6659 9.84488 11.6859 10.9849L11.9659 11.2549ZM2.25586 6.75488C2.25586 9.24488 4.26586 11.2549 6.75586 11.2549C9.24586 11.2549 11.2559 9.24488 11.2559 6.75488C11.2559 4.26488 9.24586 2.25488 6.75586 2.25488C4.26586 2.25488 2.25586 4.26488 2.25586 6.75488Z" fill="#ffffff"/>
              </svg>
            </span>
          </button > `
      )
    }
  }, 1000)

  document.querySelector("#dummy-search-input-for-preact-render").addEventListener("click", function (e) {
    e.preventDefault()
    if (!isProcessing) {
      isForClosingSearch = true
      gaEvent("Click on Search input", "Header. Search menu")
      clarity("set", "site_search", "search_clicked")
    }
    handleSearch()
    addSearchBtn()
  })
}

function handleSearch() {
  isProcessing = true

  document.querySelector(".header-search-label").click()

  let addNewInterval = setInterval(() => {
    if (!document.querySelector(".gbox_portal .search-field")) return false

    localStorage.setItem("startDateSearch", JSON.stringify(new Date().getTime()))
    localStorage.setItem("startDateSearchReload", JSON.stringify(new Date().getTime()))

    clearInterval(addNewInterval)
  }, 400)

  // if (document.querySelector(".mygarage-vehicle-title")) {
  // }
  isSearch = true
  isProcessing = false
}

function addSearchBtn() {
  let addNewInterval = setInterval(() => {
    if (!document.querySelector(".search-field>.search-btn")) return false

    if (!document.querySelector(".lav-search__btn.lav-search__btn-top.new_input-search")) {
      document.querySelector(".search-field>.search-btn").insertAdjacentHTML(
        "beforebegin",
        ` <button class='lav-search__btn lav-search__btn-top new_input-search'>
            <span class='lav-search__btn-full'>Search</span>
            <span class='lav-search__btn-brief'>              <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9659 11.2549H12.7559L17.7459 16.2549L16.2559 17.7449L11.2559 12.7549V11.9649L10.9859 11.6849C9.84586 12.6649 8.36586 13.2549 6.75586 13.2549C3.16586 13.2549 0.255859 10.3449 0.255859 6.75488C0.255859 3.16488 3.16586 0.254883 6.75586 0.254883C10.3459 0.254883 13.2559 3.16488 13.2559 6.75488C13.2559 8.36488 12.6659 9.84488 11.6859 10.9849L11.9659 11.2549ZM2.25586 6.75488C2.25586 9.24488 4.26586 11.2549 6.75586 11.2549C9.24586 11.2549 11.2559 9.24488 11.2559 6.75488C11.2559 4.26488 9.24586 2.25488 6.75586 2.25488C4.26586 2.25488 2.25586 4.26488 2.25586 6.75488Z" fill="#ffffff"/>
              </svg>
            </span>
          </button >`
      )
    }

    if (document.querySelector(".lav-search__btn.lav-search__btn-top.new_input-search")) {
      document.querySelector(".lav-search__btn.lav-search__btn-top.new_input-search").addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelector(".search-field>.search-btn").click()
      })
    }

    clearInterval(addNewInterval)
  }, 150)
}
