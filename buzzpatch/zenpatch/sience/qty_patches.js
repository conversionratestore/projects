$('.list-packs .info .pcs').each(function (i, item) {
  const text = $(item).text()
  const qty = +text.split(' ')[0]
  const newText = `${text} | ${qty * 24} Patches`
  $(item).text(newText)
})

const style = /*html*/ `
  <style>
    .list-packs {
      grid-template-columns: 3fr 1fr !important;
    }
  </style>
`

$('head').append(style)
