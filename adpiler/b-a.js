let pushDataLaer = (action, label = '') => {
    console.log(action + ' : ' + label)

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
let viewed1 = false,
    viewed2 = false;

let isVisible = () => {
    setTimeout(() => {
        if (isScrolledIntoView('.elementor-element-d27c586') == true && viewed1 == false) {
            viewed1 = true;
            pushDataLayer('Visibility built to save you time ... section')
        }
        if (isScrolledIntoView('.elementor-element-37beddd') == true && viewed2 == false) {
            viewed2 = true;
            pushDataLayer('Visibility The most popular features ... section')
        }
    }, 5000)
}

let init = setInterval(() => {
    if (window.location.href == 'https://adpiler.com/' && document.querySelector('.elementor-element-83989a8') && document.querySelector('.elementor-element-27d482a .elementor-button') && document.querySelector('.elementor-element-f21df48')) {
        clearInterval(init)
        document.querySelector('.elementor-element-83989a8').remove()
        document.querySelector('.elementor-element-27d482a .elementor-button').classList.add('skewed')

        // let hoverVideo = false;
        // let count = 0;

        // document.addEventListener('mouseover', (e) => {
        //     console.log(e.target.closest('.elementor-element-f21df48') || e.target.classList.contains('elementor-element-f21df48'))
        //     console.log(hoverVideo)
        //     console.log(count)
        //     if ((e.target.closest('.elementor-element-f21df48') || e.target.classList.contains('elementor-element-f21df48')) && hoverVideo == false) {
        //         let initEvent = setInterval(() => {
        //             if (count == 5 && hoverVideo == false && (e.target.closest('.elementor-element-f21df48') || e.target.classList.contains('elementor-element-f21df48'))) {
        //                 clearInterval(initEvent)
        //                 hoverVideo = true;
        //                 pushDataLaer('Demo video','Hover')
                       
        //             } else {
        //                 return
        //             }
        //             count += 1;
        //         }, 1000);
        //     } else {
        //         hoverVideo = false;
        //         count = 0
        //     }
        // })

        // document.querySelector('.elementor-element-f21df48').addEventListener('mouseout', (e) => {
        //     hoverVideo = false;
        // })

        document.querySelector('.elementor-element-f21df48').addEventListener('click', (e) => pushDataLaer('Demo video','Click'))

        document.querySelector('.elementor-4927 .elementor-element.elementor-element-5b61511 .elementor-button').addEventListener('click', (e) => {
            pushDataLaer('Upload my files button')
        })
        document.querySelector('.elementor-4927 .elementor-element.elementor-element-7846156 .elementor-button').addEventListener('click', (e) => {
            pushDataLaer('Discover more features button')
        }) 
        document.querySelector('.elementor-4927 .elementor-element.elementor-element-577bf28').addEventListener('click', (e) => {
            pushDataLaer('Click on youtube video')
        })
        

        window.addEventListener('scroll', (e) => {
            if (
                isScrolledIntoView('.elementor-element-d27c586') == true && viewed1 == false ||
                isScrolledIntoView('.elementor-element-37beddd') && viewed2 == false
            ) {
                isVisible()
            }

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