let setPlanCode = setInterval(() => {
    if (window.location.href.includes('/weight.ableapp.com/paywall') && 
        localStorage.getItem("planCode") != null && 
        document.querySelector('.trialPrice-0-2-132')) {
        clearInterval(setPlanCode)
        document.body.insertAdjacentHTML('afterbegin', `
        <style>
            body {
                overflow-y: auto!important;
            }
            #myPopupOverlay {
                display:none!important;
            }
        </style>`)

        let media = window.matchMedia("(max-width: 767px)").matches;
        let reload = false;

        const storedData = localStorage.getItem("planCode");
        const parsedData = JSON.parse(storedData);

        if ((parsedData.price != 350 && parsedData.price != 500 && media) || 
            (!document.querySelector('.trialPrice-0-2-132').innerHTML.includes('$5') && !media)
        ) {
            reload = true;
        }

        parsedData.price = media ? 350 : 500;
        parsedData.trialAmount = media ? 350 : 500;
        parsedData.value = media ? "$3.50" : "$5.00";
        
        localStorage.setItem("planCode", JSON.stringify(parsedData))

        if (reload == true) {
            location.reload()
        }
    }
});

let addText = setInterval(() => {
    if (window.location.href.includes('/weight.ableapp.com/paywall') && document.querySelector('.trialDetails-0-2-139')) {
        clearInterval(addText)
        document.querySelector('.trialDetails-0-2-139').insertAdjacentHTML('beforeend', ` No commitment, cancel anytime.`)
    }
});
