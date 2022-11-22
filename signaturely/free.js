let href = window.location.href;

let arrText = {
    'Get up to 3 documents signed for free, every month': 'Sign 1 document for free!',
    'Sign 3 documents for free using Signaturely': 'Sign 1 document for free using Signaturely',
    'Get up to 3 documents per month signed for free' : 'Get up to 1 document per month signed for free',
}

for (const key in arrText) {
    let changeText = setInterval(() => {
        document.body.innerHTML = document.body.innerHTML.split(key).join(arrText[key]); 
        clearInterval(changeText)
    })
}

if (href.includes('/settings/billing/plan')) {
    document.querySelectorAll('.billing__table-row').forEach(el => {
        if (el.querySelector('.billing__table-column--name').innerHTML == 'Documents per month') {
            el.querySelector('.billing__table-column--name').nextElementSibling.innerHTML = '1';
        }
    })
}
