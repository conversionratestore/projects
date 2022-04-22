let style = `
<style>
    .list {
        padding: 10px 16px;
    }
    .list li {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #434343;
    }
    .list svg {
        margin-right: 8px;
        flex-shrink: 0;
    }
    .list b {
        font-weight: 700;
    }
</style>`;

let html = `
    <ul class="list">
        <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#E57715"/>
                <path d="M9 12L11 14L15 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>
                <b> Lowest price quarantee </b>- we’ll pay you the difference if you find the same deal cheaper after booking
            </p>
        </li>
    </ul>`;

let optionMut = {
    childList: true,
    subtree: true,
    attributes: true
}

let mut = new MutationObserver(function (muts) {
    if (document.querySelector('main.ant-layout-content.site-layout') != null && document.querySelector('.list') == null && window.location.pathname.includes('reservation/search')) {
        mut.disconnect();
        document.body.insertAdjacentHTML('afterbegin', style)
        document.querySelector('main.ant-layout-content.site-layout').insertAdjacentHTML('afterbegin', html)
    }
    mut.observe(document, optionMut);
})
mut.observe(document, optionMut);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Lowest price quarantee',
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarify)
		clarity('set', 'lowest_price_quarantee', 'variant_1')
	}
}, 100)
