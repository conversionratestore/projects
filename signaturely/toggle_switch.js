let checked = setInterval(() => {
  if (!document.querySelector(".uael-rbs-switch-label .uael-rbs-switch:checked")) {
    clearInterval(checked)
    document.querySelector(".elementor-83 .elementor-element.elementor-element-c7ccc5e .uael-rbs-slider").click()
  }
}, 50)
