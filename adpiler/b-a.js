
let init = setInterval(() => {
    if (window.location.href == 'https://adpiler.com/' && document.querySelector('.elementor-element-83989a8') && document.querySelector('.elementor-element-27d482a .elementor-button')) {
        clearInterval(init)
        document.querySelector('.elementor-element-83989a8').remove()
        document.querySelector('.elementor-element-27d482a .elementor-button').classList.add('skewed')
    }   

    if (window.location.href == 'https://adpiler.com/social-ad-mockups/' && document.querySelector('.elementor-element-c71f642') && document.querySelector('.elementor-element-a3783ba .elementor-button')) {
        clearInterval(init)
        document.querySelector('.elementor-element-c71f642').remove()
        document.querySelector('.elementor-element-a3783ba .elementor-button').classList.add('skewed')
    }
});

let linkChange = setInterval(() => {
    if (document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a')) {
        clearInterval(linkChange)
        document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a').href = 'https://adpiler.com/schedule-a-demo/'
    }
});