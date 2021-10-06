let total = {
    'ca': {
        'price': '44.0,51.0,33.0,19.0',
        'price-old': '91.0,122.0,61.0,31.0',
        'pack': '3,4,2,1',
        'percent': '51,58,45,38',
        'currency': 'CAD'
    },
    'au': {
        'price': '45.0,52.0,34.0,19.0',
        'price-old': '93.0,124.0,62.0,31.0',
        'pack': '3,4,2,1',
        'percent': '51,58,45,38',
        'currency': 'UAD'
    }
}
document.body.insertAdjacentHTML('afterbegin',`
<style>
    .js-packs input[type=radio] {
        display: none;
    }
    .package p.text {
        font-size: 12px;
        line-height: 130%;
        color: #999999;
        text-align: left;
        max-width: 315px;
        margin: 0 auto 40px;
    }
</style>`)
for (const key in total) {
    if (location.href.includes(`${key}`)) {
        document.querySelectorAll('.js-packs').forEach((item, i) => {
            let span = item.querySelector('.radio-inline span');

            let spl = span.innerHTML.split(' Each')[0];
            span.innerHTML = span.innerHTML.replace(spl,`$${(total[key]['price'].split(',')[i] / total[key]['pack'].split(',')[i]).toFixed(2)} ${total[key]['currency']}`);

            item.setAttribute('price',`${total[key]['price'].split(',')[i]}`);
            item.setAttribute('price-old',`${total[key]['price-old'].split(',')[i]}`);
            item.setAttribute('pack',`${total[key]['pack'].split(',')[i]}`);
            item.setAttribute('percent',`${total[key]['percent'].split(',')[i]}`);

            function totalFun() {
                document.querySelector('.prices .js-total .pr').innerHTML = item.getAttribute('price') + ' ' + total[key]['currency'];
                document.querySelector('.prices .js-regular .js-strike .rp').innerHTML = total[key]['price-old'].split(',')[i] + ' ' + total[key]['currency'];
                document.querySelector('.prices .js-regular .rs').innerHTML = parseFloat(item.getAttribute('price-old') - item.getAttribute('price')).toFixed(2)  + ' ' + total[key]['currency'];
                document.querySelector('.prices .js-total .ps').innerHTML = item.getAttribute('percent');
            }
            if (item.querySelector('input').checked == true) {
                totalFun()
            }
            item.addEventListener('change', () => {
                totalFun()
            })
        });
        document.querySelector('#purchase .btn').insertAdjacentHTML('afterend',`<p class="text">All orders are processed in USD. While the content of your product page is currently displayed in ${total[key]['currency']}, you will checkout using USD at the current exchange rate.</p>`)
    }
}
