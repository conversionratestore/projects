let checked = setInterval(() => {
  if (document.querySelector(".react-toggle-screenreader-only")) {
    clearInterval(checked)
    if (!document.querySelector(".react-toggle-screenreader-only:checked")) {
      document.querySelector(".react-toggle-screenreader-only").click()

      document.querySelector(".react-toggle-screenreader-only").removeEventListener("click", toggleSwitch)
      document.querySelector(".react-toggle-screenreader-only").addEventListener("click", toggleSwitch)
    }
  }
}, 50)

function toggleSwitch() {
  if (document.querySelector(".react-toggle-screenreader-only")) {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp - Signaturely toggle switch",
      eventAction: "Click on switcher",
    })
  }
}

window.dataLayer = window.dataLayer || []
dataLayer.push({
  event: "event-to-ga",
  eventCategory: "Exp - Signaturely toggle switch",
  eventAction: "loaded",
})
;(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 2372209, hjsv: 6 }
  a = o.getElementsByTagName("head")[0]
  r = o.createElement("script")
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
window.hj =
  window.hj ||
  function () {
    ;(hj.q = hj.q || []).push(arguments)
  }
hj("event", "signaturely_toggle_switch")

//MutationObserver
// let observer = new MutationObserver(() => {
//   if (document.querySelector(".react-toggle-screenreader-only")) {
//     observer.disconnect()

//     if (!document.querySelector(".react-toggle-screenreader-only:checked")) {
//       document.querySelector(".react-toggle-screenreader-only").click()
//     }

//     document.querySelector(".react-toggle-screenreader-only").removeEventListener("click", toggleSwitch)
//     document.querySelector(".react-toggle-screenreader-only").addEventListener("click", toggleSwitch)

//     observer.observe(document, {
//       childList: true,
//       subtree: true,
//     })
//   }
// })

// observer.observe(document, {
//   childList: true,
//   subtree: true,
// })

document.querySelector(".button.button--primary").addEventListener("click", () => {
  if (document.querySelector(".react-toggle-screenreader-only")) {
    if (!document.querySelector(".react-toggle-screenreader-only:checked")) {
      document.querySelector(".react-toggle-screenreader-only").click()
    }

    document.querySelector(".react-toggle-screenreader-only").removeEventListener("click", toggleSwitch)
    document.querySelector(".react-toggle-screenreader-only").addEventListener("click", toggleSwitch)
  }
})
