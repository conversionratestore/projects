let init = setInterval(() => {
    if (document.querySelector('.elementor-element-83989a8') && document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a')) {
        clearInterval(init)
        document.querySelector('.elementor-element-83989a8').remove()
        document.querySelector('.elementor-element-27d482a .elementor-button').classList.add('skewed')
        document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a').href = 'https://adpiler.com/schedule-a-demo/'
    }   
});