function pushDataLaer(action, label = '') {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Add problem based layout',
        'eventAction': action,
        'eventLabel': label
    });
}

//comes into view
let isScrolledIntoView = (el) => {
	if(document.querySelector(el) == null) return false;

	let rect = document.querySelector(el).getBoundingClientRect(),
		elemTop = rect.top,
		elemBottom = rect.bottom;

	let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

	return isVisible;
};

let init = setInterval(() => {
    if (window.location.href == 'https://adpiler.com/' && document.querySelector('.elementor-element-83989a8') && document.querySelector('.elementor-element-27d482a .elementor-button') && document.querySelector('.elementor-element-f21df48')) {
        clearInterval(init)
        document.querySelector('.elementor-element-83989a8').remove()
        document.querySelector('.elementor-element-27d482a .elementor-button').classList.add('skewed')

        let count = 0
        document.querySelector('.elementor-element-f21df48').addEventListener('mouseover', (e) => {
            let timer = setInterval(() => {
                if (count == 5) {
                    clearInterval(timer)
                    pushDataLaer('Demo video','Hover')
                }
                count += 1;
            }, 1000)
        })
        document.querySelector('.elementor-element-f21df48').addEventListener("mouseout", (event) => count = 0);

        document.querySelector('.elementor-element-f21df48').addEventListener('click', (e) => pushDataLaer('Demo video','Click'))

        let viewed1 = false;
        let viewed1Count = 0
        window.addEventListener('scroll', (e) => {

            let viewed1Interval = setInterval(() => {
                if (viewed1 == false && isScrolledIntoView('.elementor-element-d27c586')) {
                    if (viewed1Count == 5) {
                        clearInterval(viewed1Interval)
                        viewed1 = true;
                        pushDataLaer('Visibility built to save you time ... section')
                    }
                    viewed1Count += 1;
                } else {
                    viewed1Count = 0
                }
            }, 1000)

        })
    }   
});

let linkChange = setInterval(() => {
    if (document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a')) {
        clearInterval(linkChange)
        document.querySelector('.elementor-nav-menu--main ul li:nth-child(3) > a').href = 'https://adpiler.com/schedule-a-demo/'
        pushDataLaer('loaded')
    }
});

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "add_problem_based_layout", "variant_1");
    }
}, 100)