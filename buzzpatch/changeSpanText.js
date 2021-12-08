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

document.querySelectorAll('.radio-inline span')[0].innerHTML = `180 patches<br>for $0.20 each`
document.querySelectorAll('.radio-inline span')[1].innerHTML = `240 pathces<br>for $0.18 each`
document.querySelectorAll('.radio-inline span')[2].innerHTML = `120 patches<br>for $0.23 each`
document.querySelectorAll('.radio-inline span')[3].innerHTML = `60 patches<br>for $0.25 each`

