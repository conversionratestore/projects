let total = {
    'ca': {
        'price': '44.0,51.0,33.0,19.0',
        'price-old': '91.0,122.0,61.0,31.0',
        'pack': '3,4,2,1'
    },
    'au': {
        'price': '45.0,52.0,34.0,19.0',
        'price-old': '93.0,124.0,62.0,31.0',
        'pack': '3,4,2,1'
    }
}

document.body.insertAdjacentHTML('afterbegin',`
<style>
    .js-packs input[type=radio] {
        display: none;
    }
</style>`)
for (const key in total) {
    if (location.href.includes(`${key}`)) {
        document.querySelectorAll('.js-packs').forEach((item, i) => {
            let span = item.querySelector('.radio-inline span');

            let spl = span.innerHTML.split(' Each')[0];
            span.innerHTML = span.innerHTML.replace(spl,`$${(total[key]['price'].split(',')[i] / total[key]['pack'].split(',')[i]).toFixed(2)}`);

            item.setAttribute('price',`${total[key]['price'].split(',')[i]}`);
            item.setAttribute('price-old',`${total[key]['price-old'].split(',')[i]}`);
            item.setAttribute('pack',`${total[key]['pack'].split(',')[i]}`);

            function totalFun() {
                document.querySelector('.prices .js-total .pr').innerHTML = item.getAttribute('price');
                document.querySelector('.prices .js-regular .js-strike .rp').innerHTML = total[key]['price-old'].split(',')[i];
                document.querySelector('.prices .js-regular .rs').innerHTML = parseFloat(item.getAttribute('price-old') - item.getAttribute('price')).toFixed(2);
            }
            if (item.querySelector('input').checked == true) {
                totalFun()
            }
            item.addEventListener('change', () => {
                totalFun()
            })
        });
    }
}
