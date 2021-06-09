let mut = new MutationObserver(function (muts) {
    mut.disconnect();
  
    if (window.location.pathname == '/online-signature/type/' || window.location.pathname == '/online-signature/draw/') {
        if(document.querySelector('.download-popup--download')) {
            document.querySelector('.download-popup--download .download-button').addEventListener('click', () => {
                window.location = 'https://signaturely.com/pricing/';
            });
        }    
        mut.observe(document, {
            childList: true,
            subtree: true
        });
    }
   
    if (window.location.pathname == '/pricing/') {
        mut.disconnect();
        if (document.querySelector('.elementor-inner')) {
            let style = `
            <style>
                .b-free .elementor-form {
                    max-width: 548px;
                    position: relative;
                    margin: 25px auto 0;}
                .b-free .e-form__buttons {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: fit-content;
                    right: 7px;}
                .b-free .e-form__buttons .elementor-button {
                    padding: 18px 28px;}
                .b-free .elementor-field-textual.elementor-size-lg {
                    border-radius: 100px;
                    border-color: #B2C7DB;
                    background-color: #fff;
                    height: 70px;
                    padding: 7px 30px;}
                .b-free {
                    padding: 45px 0 40px;
                    background: #F3FAFF;
                    border-radius: 25px;
                    max-width: 1229px;
                    width: 100%;
                    margin: 65px auto 0;
                    position: relative;}
                .b-free_span {
                    position: absolute;
                    left: 50%;
                    top: -19px;
                    transform: translateX(-50%);
                    background: #00A4F7;
                    border-radius: 25px;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 38px;
                    text-align: center;
                    color: #FFFFFF;
                    padding: 0 25px;}
                .b-title {
                    text-align: center;
                    font-weight: 500;
                    font-size: 36px;
                    line-height: 42px;}
                .b-list {
                    margin: 0 auto;
                    width: fit-content;}
                .b-list img {
                    margin-left: 15px;
                    height: 37px;}
                .elementor-83 .elementor-element.elementor-element-62dcef9 .elementor-heading-title {
                    font-weight: 500;}
                .elementor-83 .elementor-element.elementor-element-0d23181 {
                    margin-top: 70px;}
                .title-span {
                    font-weight: 500;
                    font-size: 24px;
                    line-htight: 36px;}
            </style>`;
            document.body.insertAdjacentHTML('afterbegin', style);

            let freeBlock = `
            <div class="b-free">
                <div class="b-free_span">Free</div>
                <h1 class="b-title">Get 3 documents e-signed</h1>
                <ul class="b-list">
                    <li>Sign 3 documents per month online</li>
                    <li>Get documents signed by others online</li>
                    <li>Easy to use integrations: <img src="https://conversionratestore.github.io/projects/signaturely/img/img.jpg" alt="img"></li>
                </ul>
            </div>`;
            document.querySelector('.elementor-83 .elementor-element.elementor-element-6c6d95f').style.display = 'none';
                    
            document.querySelector('.elementor-inner').insertAdjacentHTML('afterbegin', freeBlock);

            (function(){
                var http = new XMLHttpRequest();  
                http.open('GET', 'https://signaturely.com/');
                http.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var doc = new DOMParser().parseFromString(this.responseText, "text/html"); 
                        document.querySelector('.b-free').insertAdjacentHTML('beforeend', doc.querySelector('.elementor-element-46bb9b5').innerHTML);
                    }
                }
                http.send(null);
            })()

            document.querySelector(".elementor-83 .elementor-element.elementor-element-62dcef9 .elementor-heading-title").innerHTML = `Need more?`;
            document.querySelector('.elementor-83 .elementor-element.elementor-element-62dcef9 .elementor-heading-title').insertAdjacentHTML('afterend', '<p class="title-span">Check other options</p>');

            if (document.querySelector('.b-free .e-form__buttons')) {
                document.querySelector('.b-free .e-form__buttons').addEventListener('submit', (e) => {
                    e.preventDefault();
                    window.location = `https://app.signaturely.com/signup/${document.querySelector('.b-free input.elementor-field').value}`;
                });
            }
        }
    }

});

mut.observe(document, {
    childList: true,
    subtree: true
});
