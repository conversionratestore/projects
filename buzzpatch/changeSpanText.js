document.head.insertAdjacentHTML('beforeend', `<style>
	.radio-inline {
		font-size: 20px;
		letter-spacing: 0.02em;
	}
	.radio-inline span {
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
	}
</style>`)

document.querySelectorAll('.radio-inline span')[0].innerHTML = `180 patches<br>($0.20 each)`
document.querySelectorAll('.radio-inline span')[1].innerHTML = `240 pathces<br>$0.18 each)`
document.querySelectorAll('.radio-inline span')[2].innerHTML = `120 patches<br>($0.23 each)`
document.querySelectorAll('.radio-inline span')[3].innerHTML = `60 patches<br>($0.25 each)`

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Changed pricing section mobile',
	'eventAction': 'loaded',
})

;(function (h, o, t, j, a, r) {
	h.hj = h.hj || function () {
		(h.hj.q = h.hj.q || []).push(arguments)
	}
	h._hjSettings = {hjid: 2247058, hjsv: 6}
	a = o.getElementsByTagName('head')[0]
	r = o.createElement('script')
	r.async = 1
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
	a.appendChild(r)
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
window.hj = window.hj || function () {
	(hj.q = hj.q || []).push(arguments)
}
hj('event', 'changed_pricing_section')
