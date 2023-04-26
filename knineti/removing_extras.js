let removing = setInterval(() => {
    if (window.location.href.includes('//k9ti.org/mc') && document.querySelectorAll('.count_sec .row1030') && document.querySelector('#unlimited_personal_coaching') != null) {
        clearInterval(removing)
        document.querySelectorAll('.count_sec .row1030').forEach(item => {
            if (item.innerHTML.includes('3 exclusive bonus classes')) {
                item.nextElementSibling.remove()
                item.remove()
            }
        })
        document.querySelector('#unlimited_personal_coaching').remove()
    }
    if (window.location.href.includes('//k9ti.org/enroll') && document.querySelector('.payment_inform_box .payment_order') != null) {
        clearInterval(removing)
        document.querySelectorAll('.payment_inform_box .payment_order .pay_price').forEach(item => {
            if (item.innerHTML == '$0.00') {
                item.parentElement.remove();
            }
        })
    }
});

const recordMF = setInterval(() => {
    if (typeof window._mfq === "object") {
      clearInterval(recordMF);
      window._mfq.push(["setVariable", "removing_extras_from_basic_plan", "var1"]);
    }
}, 200);