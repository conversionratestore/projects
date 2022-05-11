let style = `
<style class="js-style">
    .tooltipe_block {
        background: rgba(6, 155, 39, 0.1);
        border-radius: 20px;
        padding: 12px 14px 11px;
        font-family: "Inter", sans-serif;
    }
    .fs-11 {
        font-size: 11px;
        line-height: 13px;
    }
    .fs-10 {
        font-size: 10px;
        line-height: 12px;
    }
    .grid.grid-cols-3.w-full {
        display: block!important;
    }
    .grid.grid-cols-1.gap-1.self-center.items-start {
        display: flex!important;
        flex-wrap: wrap!important;
    }
    .grid.grid-cols-1.gap-1.self-center.items-start > div {
        width: calc(50% - 0.14rem);
    }
    .grid.grid-cols-1.gap-1.self-center.items-start > div:nth-child(3) {
        order: 1;
    }
    .grid.grid-cols-1.gap-1.self-center.items-start > div:first-child {
        order: 2;
    }
    .grid.grid-cols-1.gap-1.self-center.items-start > div:last-child {
        order: 3;
    }
    .grid.grid-cols-1.gap-1.self-center.items-start > div:nth-child(2) {
        order: 4;
    }
    .flex.flex-col.w-full.col-span-2.pb-5.pl-8.pr-0.self-center.mx-auto, h2.text-xl.text-left.w-full.px-8.pt-4.truncate {
        padding-left: 1.25rem!important;
        padding-bottom: 0!important
    }
    .parent_block {
        padding: 0 1.25rem!important;
    }
</style>`;

let html = `
    <div class="flex items-center parent_block">
        <div class="tooltipe_block ml-auto">    
            <div class="font-bold items-center flex mb-2">
                <img src="https://conversionratestore.github.io/projects/onairparking/img/guaranteee.png" alt="icon" class="mx-2">
                <p class="font-bold fs-11">Lowest price guarantee</p>
            </div>
            <p class="font-medium fs-10">We’ll pay you the difference if you find the same deal cheaper after booking</p>
        </div>
    </div>
    `;

let optionMut = {
    childList: true,
    subtree: true,
    attributes: true
}
let loadedContent = false;

let mut = new MutationObserver(function (muts) {
    if (loadedContent == false && document.body != null && window.location.pathname == '/reservation/search' && document.querySelector('button.ant-btn.ant-btn-link.ant-btn-sm.text-secondary.uppercase.ml-auto.flex.flex-row.items-center') != null && document.querySelector(".container.mx-auto > .container > div.flex.flex-row.items-center.mb-2.w-full > p") != null && document.querySelector(".container.mx-auto > .container > div.flex.flex-row.items-center.mb-2.w-full > p").innerText == 'Search results' && document.querySelector('.flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full') != null) {
        loadedContent = true;
        document.body.insertAdjacentHTML('afterbegin', style);
        document.querySelectorAll('.flex.flex-col.w-full.col-span-2.pb-5.pl-8.pr-0.self-center.mx-auto').forEach((item, i) => {
            item.insertAdjacentHTML('afterend', html);
            document.querySelectorAll('.tooltipe_block')[i].before(document.querySelectorAll('.flex.flex-col.h-full.items-center.justify-center.self-center.py-5.pr-4.w-full')[i]);
        }) 
    } 
    if (document.querySelector('.js-style') != null && window.location.pathname != '/reservation/search' && document.querySelector('#detail-info') != null) {
        loadedContent = false;
        document.querySelector('.js-style').remove();
    }
    mut.observe(document, optionMut);
})
mut.observe(document, optionMut);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Lowest price quarantee',
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarify)
		clarity('set', 'lowest_price_quarantee', 'variant_1')
	}
}, 100)
