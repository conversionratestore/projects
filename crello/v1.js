let style = `
<style>
    .checkoutWrapper___container {
        max-width: 1040px;
        margin: 0 auto 40px;
        padding: 0 16px;}
    .typography-marketing-display-l {
        margin-bottom: 35px;
        font-family: 'ProximaBold';}
    .start-free {
        padding-bottom: 20px;
        width: 67.5%;}
    .pay-here {
        width: 32.5%;}
    .c-blue {
        color: #2557CB;}
    .c-green {
        color: #12B889;}
    .steps {
        height: 9px;
        width: 100%;
        margin-top: 10px;
        display: flex;
        background: #1F53C9;
        overflow: hidden;
        border-radius: 17px;}
    .step {
        height: 9px;
        width: 100%;
        border-right: 2px solid #fff;}
    .step:last-child {
        border: none}
    .access-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 19px;
        background: #EEF3FF;
        border-radius: 7px;
        padding: 7px 30px;}
    .access-block .ff-proximabold{
        padding-bottom: 8px;}
    .ff-proximabold {
        font-family: 'ProximaBold';}
    .ff-proximasemibold {
        font-family: 'ProximaSemiBold'; }
    .typography-subheading-l.c-blue, .typography-subheading-l.c-green {
        padding: 20px 0 10px;}
    .flex-wrap {
        display: flex;
        flex-wrap: wrap;}
    .date {
        font-size: 14px;
        line-height: 17px;
        color: #000000;}
    .bg-green {
        background: #12B889;}
    .list-item {
        font-family: 'ProximaRegular';
        font-size: 14px;
        line-height: 17px;
        width: fit-content;
        display: flex;
        padding-left: 27px;
        margin-bottom: 10px;
        align-items: center;
        position: relative;}
    .list-item:before {
        content: '';
        position: absolute;
        left: 8px;
        top: 8px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #000;}
    .toltipe {
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + 10px);
        max-width: 270px;
        width: max-content;
        z-index: 2;}
    .toltipe-content {
        box-shadow: 0px 0px 15px rgba(33, 83, 204, 0.2);
        border-radius: 7px;
        padding: 15px 10px 15px 15px;
        background: #FFFFFF;
        position: relative;
        font-family: 'ProximaRegular';
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        z-index: 1;}
    .toltipe:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 7.5px 9px 7.5px 0;
        z-index: 2;
        border-color: transparent #fff transparent transparent;}
    .icon-i {
        background: url('https://i.ibb.co/Vxvjs9d/Vector-1.pnghttps://i.ibb.co/Vxvjs9d/Vector-1.png') no-repeat center / contain;
        width: 14px;
        height: 14px;
        position: relative;
        margin-left: 7px;
        display: block;}
    .icon-i:hover {
        background-image: url('https://i.ibb.co/6Fp7sVx/Vector-3.png');}
    .icon-i:hover .toltipe{
        opacity: 1;}
    .btn {
        border: 2px solid #2153CC;
        border-radius: 7px;
        font-family: 'ProximaSemiBold';
        font-size: 14px;
        text-transform: capitalize;
        line-height: 44px; 
        padding: 0 20px;
        max-width: 193px;
        width: 100%;
        color: #2153CC;}      
    .m__how-do-cancel {
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 9999;
        overflow-y: auto;
        display: inline-flex;}
    .m__how-do-cancel.isActive {
        opacity: 1;
        pointer-events: auto;}
    .m__container {
        background: #F4F4F5;
        border-radius: 10px;
        position: relative;
        display: block;
        max-width: 764px;
        width: 100%;
        padding: 60px 15px 45px;
        margin: auto;}
    .m__close svg {
        fill: rgba(0, 0, 0, 0.25);}
    .m__close {
        width: 34px;
        height: 34px;
        position: absolute;
        right: 15px;
        top: 15px;}
    .m__title {
        font-family: 'ProximaBold';
        font-style: normal;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        margin-bottom: 15px;}
    .m__steps {
        width: fit-content;
        margin: 0 auto;}
    .m__steps p {
        font-family: 'ProximaRegular';
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 17px;}
    .m__steps p span {
        padding-left: 10px;}
    .m__video {
        margin: 20px auto 0;
        display: block;
        background: #C4C4C4;
        border-radius: 7px;}
</style>`

let list = [
    {
        item: 'Unlimited downloads',
        toltipe: 'Download as many designs as you need. Without limits.'
    },
    {
        item: 'Background removal',
        toltipe: 'Remove backgrounds from images.'
    },
    {
        item: 'Brand Kit',
        toltipe: 'Match your company style to your visuals. Add your brand palette, fonts, and logo to the Crello editor.'
    },
    {
        item: 'Invite your team to collaborate',
        toltipe: 'Invite team members and design together.'
    },
    {
        item: 'Priority support',
        toltipe: 'Get help online with priority support.'
    },
    {
        item: 'Tons of fresh content with weekly update'
    }
];

let mut = new MutationObserver(function (muts) {
    mut.disconnect()
    if(document.querySelector('.subscriptionModalWrapper___3_4Em') && !document.querySelector('.checkoutWrapper___container')) {
        document.body.insertAdjacentHTML('afterbegin', style);

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Experiment — checkout hints',
            'eventAction': 'block with hints loaded'
        });

        var today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;

        let yyyy = today.getFullYear();
        if(dd<10) {dd = '0' + dd}
        if(mm<10) {mm = '0' + mm}
        var today = dd + '.' + mm + '.' + yyyy;

        function get(data, day){
            data = data.split('.');
            data = new Date(data[2], +data[1]-1, +data[0]+day, 0, 0, 0, 0);
            data = [data.getDate(),data.getMonth()+1,data.getFullYear()];
            if (data[0] < 10) {data[0] = '0' + data[0]}
            if (data[1] < 10) {data[1] = '0' + data[1]}
            data = data.join('.').replace(/(^|\/)(\d)(?=\/)/g,"$10$2");
            return data;
        }

        let newElement = `
            <div class="checkoutWrapper___container">
                <div class="section___36_7J flex-wrap">
                    <div class="start-free">
                        <p class="typography-subheading-l c-blue ff-proximasemibold">Start Free trial</p>
                        <p class="date">${today}</p>
                        <div class="steps bg-blue"></div>
                        <div class="access-block">
                            <div>
                                <p class="typography-subheading-l ff-proximabold">Get access to:</p>
                                <ul class="list"></ul>
                            </div>
                            <button class="btn" type="button">How do I cancel?</button>
                        </div>
                    </div>
                    <div class="pay-here">
                        <p class="typography-subheading-l c-green ff-proximabold">You pay here</p>
                        <p class="date">${get(today, 7)}</p>
                        <div class="steps bg-green"></div>
                    </div>
                </div>
            </div>
        `;

        document.querySelector('.subscriptionModalWrapper___3_4Em h1.typography-marketing-display-l').insertAdjacentHTML('afterend', newElement);

        let sptDate = document.querySelectorAll('.date')[1].innerHTML.split('.');
        for (let i = 0; i < sptDate.length; i++) {
            if(parseInt(sptDate[i]) < 10) {
                sptDate[i].innerHTML = `0 ${sptDate[i]}`;
            }
        }

        for (let i = 0; i < list.length; i++) {
            if (list[i].toltipe) {
                document.querySelector('.list').insertAdjacentHTML('beforeend', `<li class="list-item">${list[i].item}<div class="icon-i"><div class="toltipe"><div class="toltipe-content">${list[i].toltipe}</div></div></div></li>`);
            } else {
                document.querySelector('.list').insertAdjacentHTML('beforeend', `<li class="list-item">${list[i].item}</li>`);
            }
        }

        let n = 7;
        while(n--) {document.querySelector('.steps.bg-blue').insertAdjacentHTML('afterbegin', `<div class="step"></div>`)}

        let modal = `
        <div class="m__how-do-cancel ReactModal__Overlay--dark64">  
            <div class="m__container">
                <button class="m__close"><svg viewBox="0 0 12 12" width="14" height="14"><path d="M11.8479 10.4379C11.9426 10.5318 11.9958 10.6596 11.9958 10.7929C11.9958 10.9262 11.9426 11.054 11.8479 11.1479L11.1479 11.8479C11.054 11.9426 10.9262 11.9958 10.7929 11.9958C10.6596 11.9958 10.5318 11.9426 10.4379 11.8479L5.9979 7.4079L1.5579 11.8479C1.46402 11.9426 1.33622 11.9958 1.2029 11.9958C1.06958 11.9958 0.941782 11.9426 0.847899 11.8479L0.147899 11.1479C0.0532428 11.054 0 10.9262 0 10.7929C0 10.6596 0.0532428 10.5318 0.147899 10.4379L4.5879 5.9979L0.147899 1.5579C0.0532428 1.46402 0 1.33622 0 1.2029C0 1.06958 0.0532428 0.941782 0.147899 0.847899L0.847899 0.147899C0.941782 0.0532428 1.06958 0 1.2029 0C1.33622 0 1.46402 0.0532428 1.5579 0.147899L5.9979 4.5879L10.4379 0.147899C10.5318 0.0532428 10.6596 0 10.7929 0C10.9262 0 11.054 0.0532428 11.1479 0.147899L11.8479 0.847899C11.9426 0.941782 11.9958 1.06958 11.9958 1.2029C11.9958 1.33622 11.9426 1.46402 11.8479 1.5579L7.4079 5.9979L11.8479 10.4379Z"></path></svg></button>
                <h2 class="m__title">How do I cancel?</h2>
                <div class="m__steps">
                    <p>Step 1 <span>Go to your account settings</span></p>
                    <p>Step 2 <span>Billing details</span></p>
                    <p>Step 3 <span>Click “Cancel” the subscription</span></p>
                </div>
                <video class="m__video" width="335" height="209" controls="controls" poster="video/duel.jpg">
                    <source src="https://conversionratestore.github.io/projects/crello/zoom_0.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                </video>
            </div>
        </div>
        `

        document.querySelectorAll('.icon-i').forEach(function (item) {
            item.addEventListener('hover', function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment — checkout hints',
                    'eventAction': 'hint hover'
                });
            })
        })

        document.querySelector('.ReactModal__Overlay--dark64').insertAdjacentHTML('afterend', modal);

        document.querySelector('.btn').addEventListener('click', () => {
            document.querySelector('.m__how-do-cancel').classList.add('isActive');
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment — checkout hints',
                'eventAction': 'button click',
                'eventLabel': 'how to cancel'
            });

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment — checkout hints',
                'eventAction': 'pop-up loaded',
                'eventLabel': 'how to cancel'
            });
        });

        function removeActive() {
            document.querySelector('.m__how-do-cancel').classList.remove('isActive');
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment — checkout hints',
                'eventAction': 'pop-up closed',
                'eventLabel': 'how to cancel'
            });
        }
        document.querySelector('.m__close').addEventListener('click', removeActive);
        document.querySelector('.m__container').addEventListener('click', (e) => {
            e.stopImmediatePropagation();
        });
        document.querySelector('.m__how-do-cancel').addEventListener('click', removeActive);
    }
    mut.observe(document, {
        childList: true,
        subtree: true
    })
})

mut.observe(document, {
    childList: true,
    subtree: true
})

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:410340,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
hj('trigger', 'checkout_hintsl');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Experiment — checkout hints',
    'eventAction': 'loaded'
});




