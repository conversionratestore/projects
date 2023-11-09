const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'add_qty_patches', 'variant_1')
  }
}, 1000)

$('.list-packs .info .pcs').each(function (i, item) {
  const text = $(item).text()
  const qty = +text.split(' ')[0]
  const newText = `${text} | ${qty * 24} Patches`
  $(item).text(newText)
})

const style = /*html*/ `
  <style>
    .list-packs {
      grid-template-columns: 3.5fr 1fr !important;
    }
    #getNow .slide-packs {
      padding: 0 10px !important;
    }
  </style>
`

$('head').append(style)
