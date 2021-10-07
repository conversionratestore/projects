let total = {
    'ca': {
        'price': '45,52,33,19',
        'price-old': '91,122,61,31',
        'pack': '3,4,2,1',
        'percent': '51,58,45,38',
        'currency': 'CAD'
    },
    'au': {
        'price': '45,52,34,19',
        'price-old': '93,124,62,31',
        'pack': '3,4,2,1',
        'percent': '51,58,45,38',
        'currency': 'AUD'
    }
}
document.body.insertAdjacentHTML('afterbegin',`
<style>
    .js-packs input[type=radio] {
        display: none;
    }
    .package p.text {
        font-size: 12px!important;
        line-height: 130%!important;
        color: #999999;
        text-align: left;
        max-width: 390px;
        margin: 0 auto 40px;
    }
    @media only screen and (max-width: 767px)  {
        .package p.text {
            max-width: 315px;
        }
        .package .js-heading .js-btn.btn-primary {
            max-width: 320px!important;
        }
    }
</style>`)
for (const key in total) {
    if (location.href.includes(`${key}`)) {
        document.querySelectorAll('.js-packs').forEach((item, i) => {
            let span = item.querySelector('.radio-inline span');

            let spl = span.innerHTML.split(' Each')[0];
            span.innerHTML = span.innerHTML.replace(spl,`$${(total[key]['price'].split(',')[i] / total[key]['pack'].split(',')[i])} ${total[key]['currency']}`);

            item.setAttribute('price',`${total[key]['price'].split(',')[i]}`);
            item.setAttribute('price-old',`${total[key]['price-old'].split(',')[i]}`);
            item.setAttribute('pack',`${total[key]['pack'].split(',')[i]}`);
            item.setAttribute('percent',`${total[key]['percent'].split(',')[i]}`);

            function totalFun() {
                document.querySelector('.prices .js-total .pr').innerHTML = item.getAttribute('price') + ' ' + total[key]['currency'];
                document.querySelector('.prices .js-regular .js-strike .rp').innerHTML = total[key]['price-old'].split(',')[i] + ' ' + total[key]['currency'];
                document.querySelector('.prices .js-regular .rs').innerHTML = parseFloat(item.getAttribute('price-old') - item.getAttribute('price'))  + ' ' + total[key]['currency'];
                document.querySelector('.prices .js-total .ps').innerHTML = item.getAttribute('percent');
            }
            if (item.querySelector('input').checked == true) {
                totalFun()
            }
            item.addEventListener('change', () => {
                totalFun()
            })
        });
        document.querySelector('#purchase .btn').insertAdjacentHTML('afterend',`<p class="text">All orders are processed in USD. While the content of your product page is currently displayed in ${total[key]['currency']}, you will checkout using USD at the average exchange rate</p>`)
    }
}
