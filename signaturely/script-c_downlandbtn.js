let mut = new MutationObserver(function (muts) {
    mut.disconnect();
    if(document.querySelector('.download-popup--download')) {
        document.querySelector('.download-popup--download .download-button').addEventListener('click', () => {
            window.location = 'https://signaturely.com/pricing/';
        });
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
