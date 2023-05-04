let removing = setInterval(() => {
    if (window.location.href.includes('//k9ti.org/mc') && document.querySelectorAll('.count_sec .row1030') && document.querySelector('#unlimited_personal_coaching') != null) {
        clearInterval(removing)
        
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .pt-0 {
                padding-top: 0!important;
            }
            .pb-0 {
                padding-bottom: 0!important;
            }
        </style>`)
        document.querySelectorAll('.count_sec .row1030').forEach(item => {
            if (item.innerHTML.includes('3 exclusive bonus classes')) {
                item.nextElementSibling.classList.add('hidden')
                item.classList.add('hidden')
                item.parentElement.classList.add('pt-0');
            }
        })
        document.querySelector('#unlimited_personal_coaching').classList.add('hidden')
        document.querySelector('#unlimited_personal_coaching').previousElementSibling.querySelector('.paw_icons ul').classList.add('pb-0')
        
        window._mfq = window._mfq || [];
        (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/29f75cc1-dffc-4a86-b3d0-cca4b689c018.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
        })();
    }
    if (window.location.href.includes('//k9ti.org/enroll') && document.querySelector('.payment_inform_box .payment_order') != null) {
        clearInterval(removing)
        document.querySelectorAll('.payment_inform_box .payment_order .pay_price').forEach(item => {
            if (item.innerHTML == '$0.00') {
                item.parentElement.remove();
            }
        })

        window._mfq = window._mfq || [];
        (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/29f75cc1-dffc-4a86-b3d0-cca4b689c018.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
        })();
    }
});

const recordMF = setInterval(() => {
    if (typeof window._mfq === "object") {
      clearInterval(recordMF);
      window._mfq.push(["setVariable", "removing_extras_from_basic_plan", "var1"]);
    }
}, 200);