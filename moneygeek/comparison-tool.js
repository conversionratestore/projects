const dir = 'https://conversionratestore.github.io/projects/moneygeek/img/'

const style = `
<style>
.css-bco1gb {
    font-size: 14px;
    line-height: 24px;
    gap: 0;
}
.css-bco1gb *:not(.css-c0gtt0) {
    display: inline;
}
.css-1luwilw {
    align-items: flex-start;
}
.css-w82p09 {
    height: 10px;
    width: 10px;    
    font-size: 10px;
}
.css-w82p09 img {
    height: 10px;
    width: 10px;
    margin-top: 7px;
}
.css-bco1gb .banner-link {
    color: #526EFF;
}
.css-cilkqw {
    margin-bottom: 35px;
}
.crs_banner {
    padding: 14px 16px 20px;
    border-radius: 6px;
    background: #E7EBFF;
    margin-bottom: 35px;
}
.crs_banner h2 {
    color: #292929;
    font-family: 'Brandon Grotesque', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; 
}
.crs_banner p {
    margin: 8px 0 20px;
    color: #292929;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
}
.crs_btn {
    border-radius: 6px;
    background: #526EFF;
    color: #FFF;
    text-align: center;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19.2px; 
    padding: 10px;
    width: 100%;
}
.css-1ybtjtu {
    border-radius: 10px;
    border: 1px solid #292929;
    background: #FFF;
    padding: 14px 16px!important;
}
.css-1ybtjtu h2 {
    line-height: 28px;
}
.css-1ybtjtu .image-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
}
.css-1ybtjtu .image-wrapper img {
    width: 130px;
    height: 130px;
    flex-shrink: 0;
    border-radius: 6px;
}
.crs_info_card {
 padding-left: 17px;
 width: 100%;
} 
.crs_info_card > p {
 color: #292929;
 font-family: 'Source Sans Pro', sans-serif;
 font-size: 14px;
 font-style: normal;
 font-weight: 600;
 line-height: 22px; /* 157.143% */
}
.crs_tooltip {
 position: relative;
 padding-left: 8px;
 z-index: 9;

}
.crs_tooltip_content {
 border: 1px solid;
 padding: 9px 14px;
 color: #292929;
 font-family: 'Source Sans Pro', sans-serif;
 font-size: 12px;
 font-style: normal;
 font-weight: 400;
 line-height: 18px;
 position: absolute;
 right: 0;
 bottom: calc(100% + 13px);
 opacity: 0;
 pointer-events: none;
 width: 251px;
 z-index: 9;
 background: #fff;
}
.crs_tooltip:hover .crs_tooltip_content {
 opacity: 1;
}
.crs_tooltip_content:before,
.crs_tooltip_content:after {
 content: '';
 position: absolute;
 right: 10px;
 top: calc(100% + 12px);
 width: 0;
 height: 0;
 border-style: solid;
 border-right: 6px solid transparent;
 border-left: 6px solid transparent;
 border-top: 12px solid #000;
 border-bottom: 0;
}
.crs_tooltip_content:after {
 right: 11px;
 top: calc(100% + 11px);
 border-right: 5px solid transparent;
 border-left: 5px solid transparent;
 border-top: 11px solid #fff;
}
.d-flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.crs_info_card label {
    border-radius: 4px;
    background: #E3E8FD;
    padding: 8px;
    color: #292929;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; 
}
.crs_info_card label input {
    display: none;
}
.crs_check {
    display: flex;
    border-radius: 4px;
    border: 1px solid #292929;
    background: #FFF;
    margin-right: 8px;
    flex-shrink: 0;
    width: 22px;
    height: 22px;
}
.crs_check svg {
    opacity: 0;
    margin: auto;
}
.crs_info_card label input:checked ~ .crs_check {
    background: #526EFF;
}
.crs_info_card label input:checked ~ .crs_check svg {
    opacity: 1;
}
</style>`

const banner = `
<div class="crs_banner">
    <h2>Find the best life insurance for you</h2>
    <p>Get free quotes and compare life insurance policies without leaving your contact details.</p>
    <button type="button" class="crs_btn">COMPARE QUOTES</button>
</div>`


start();

function waitForElement(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
        }
        });

        observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        });
    });
}

function start() {
    const waitForBody = setInterval(() => {
        if (document.body) {
            clearInterval(waitForBody);

            document.body.insertAdjacentHTML('afterbegin', style)

            waitForElement(".css-cilkqw.emidfcs0").then(el => {
                el.insertAdjacentHTML('afterend', banner)
                document.querySelector('.crs_banner .crs_btn').addEventListener('click', () => {
                    document.querySelector('.css-12t4gr6').click()
                })
            })

            waitForElement('.css-1ybtjtu .image-wrapper img').then(el => {
                document.querySelectorAll('.css-1ybtjtu .image-wrapper img').forEach(item => {
                    item.insertAdjacentHTML('afterend', `
                    <div class="crs_info_card">
                        <p class="d-flex items-center">MoneyGeek Rating
                            <span class="crs_tooltip">
                                <svg width="16" height="22" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8.02734" r="8" fill="#526EFF"/>
                                    <path d="M9.38981 3.82641C9.38981 4.00374 9.35248 4.17174 9.27781 4.33041C9.21248 4.47974 9.11915 4.61041 8.99781 4.72241C8.88581 4.83441 8.74581 4.92307 8.57781 4.98841C8.41915 5.05374 8.25115 5.08641 8.07381 5.08641C7.70048 5.08641 7.38781 4.96507 7.13581 4.72241C6.88381 4.47041 6.75781 4.17174 6.75781 3.82641C6.75781 3.65841 6.79048 3.49974 6.85581 3.35041C6.92115 3.19174 7.01448 3.05641 7.13581 2.94441C7.25715 2.83241 7.39715 2.74374 7.55581 2.67841C7.71448 2.60374 7.88715 2.56641 8.07381 2.56641C8.25115 2.56641 8.41915 2.59907 8.57781 2.66441C8.74581 2.72974 8.88581 2.81841 8.99781 2.93041C9.11915 3.04241 9.21248 3.17774 9.27781 3.33641C9.35248 3.48574 9.38981 3.64907 9.38981 3.82641ZM6.92581 13.0244V6.05241H9.22181V13.0244H6.92581Z" fill="white"/>
                                </svg>
                                <span class="crs_tooltip_content">
                                    To help you shop for life insurance, MoneyGeek ranked the best life insurance using a weighted ranking system based on several factors, including J.D. Power customer satisfaction ratings, financial stability ratings from AM Best and affordability.
                                </span>
                            </span>
                        </p>
                        <div class="crs_rating d-flex items-center">
                            <div class="crs_rating_circle"></div>
                            <svg width="79" height="15" viewBox="0 0 79 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.06433 2.25977L8.9382 6.05604L13.1286 6.66854L10.0965 9.62187L10.8121 13.7941L7.06433 11.8232L3.31657 13.7941L4.03216 9.62187L1 6.66854L5.19045 6.05604L7.06433 2.25977Z" fill="#FFC45C" stroke="#FFC45C" stroke-width="0.969816" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.1927 2.25977L25.0666 6.05604L29.257 6.66854L26.2248 9.62187L26.9404 13.7941L23.1927 11.8232L19.4449 13.7941L20.1605 9.62187L17.1284 6.66854L21.3188 6.05604L23.1927 2.25977Z" fill="#FFC45C" stroke="#FFC45C" stroke-width="0.969816" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.3217 2.25977L41.1955 6.05604L45.386 6.66854L42.3538 9.62187L43.0694 13.7941L39.3217 11.8232L35.5739 13.7941L36.2895 9.62187L33.2573 6.66854L37.4478 6.05604L39.3217 2.25977Z" fill="#FFC45C" stroke="#FFC45C" stroke-width="0.969816" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M55.45 2.25977L57.3239 6.05604L61.5143 6.66854L58.4822 9.62187L59.1978 13.7941L55.45 11.8232L51.7023 13.7941L52.4179 9.62187L49.3857 6.66854L53.5761 6.05604L55.45 2.25977Z" fill="#FFC45C" stroke="#FFC45C" stroke-width="0.969816" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M71.5789 2.25977L73.4529 6.05604L77.6433 6.66854L74.6112 9.62187L75.3268 13.7941L71.5789 11.8232L67.8313 13.7941L68.5469 9.62187L65.5146 6.66854L69.7052 6.05604L71.5789 2.25977Z" fill="#FFC45C" stroke="#FFC45C" stroke-width="0.969816" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <label class="d-flex items-center">
                            <input type="checkbox">
                            <span class="crs_check">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M1.69434 7.29306L5.11034 10.7091L12.5303 3.28906" stroke="white" stroke-width="1.82" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>Add to Compare</span>
                        </label>
                    </div>`)
                })
            })

        }
    })
}
