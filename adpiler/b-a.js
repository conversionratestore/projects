let init = setInterval(() => {
    if (document.querySelector('.elementor-10 .elementor-element.elementor-element-f9e044b') && document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a')) {
        clearInterval(init)
        document.querySelector('.elementor-10 .elementor-element.elementor-element-f9e044b').remove()
        document.querySelector('.elementor-10 .elementor-element.elementor-element-868c6f4 .elementor-button').classList.add('skewed')
        document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a').href = 'https://adpiler.com/schedule-a-demo/'
    }   
});