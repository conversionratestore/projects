let mut = new MutationObserver(function (muts) {
    mut.disconnect();
    if (document.querySelector('.elementor-button-content-wrapper .elementor-button-text')) {
        let style = `
        <style>
            .elementor-36 .elementor-element.elementor-element-2d03d92 {
                width: 100%;}
            .elementor-36 .elementor-element.elementor-element-2325564 .elementor-button {
                font-size: 14px;
                padding: 14px 22px;}
        </style>`;
        document.body.insertAdjacentHTML('afterbegin', style);
        document.querySelector('.elementor-button-content-wrapper .elementor-button-text').innerHTML = 'Sign 3 documents for FREE >';
    }
  
    mut.observe(document, {
        childList: true,
        subtree: true
    });
});

mut.observe(document, {
    childList: true,
    subtree: true
});
