
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "productIds": [
    {
      "productId": "4617243754611"
    }
  ],
  "apiKey": "pubkey-RxMuBm77cI6JUCn6jCIsMpGSUFYdkK",
  "storeUrl": "37715"
});
  
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
let request = new Promise((resolve, reject) => {
  
  fetch("http://stamped.io/api/widget/badges?isIncludeBreakdown=true&isincludehtml=true", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)   
      resolve(result)
    })
    .catch(error => console.log('error', error));
})

let reviewobj = [
    {
        'date': '03/29/2023', 
        'author': 'Emily R.', 
        'title': 'NO MORE SNORING', 
        'text': 'These strips truly keep me from snoring in my sleep. I was happy to find that the adhesive works well without causing irritation on my sensitive skin, and I was pleased to find that I could put it back in place after a sip of water in the middle of the night! They don’t come off easily which is a plus. I highly recommend them. They also arrived timely.'
    },
    {
        'date': '03/18/2023', 
        'author': 'Michael', 
        'title': 'DELIGHTFULLY PERFECT', 
        'text': 'I have only recently discovered the world of mouth taping and thought I would give it a try. I was nervous to do it as I’m an open mouth breather at night and thought I might choke or feel suffocated. In fact, the tape is light, perfectly sticky and has a little hole in it in case you panic. It stayed on perfectly the first night and I got used to it quickly. I’ve used them for a week now and I’m impressed. My sleep quality has drastically improved. The only downfall is they’re expensive but I don’t think I’d go back to mouth breathing.'
    },
    {
        'date': '02/14/2022', 
        'author': 'Anonymous', 
        'title': 'SO GREAT WITH OUR CPAPS', 
        'text': `We use Somnifix every single night along with our CPAPs. Before Somnifix we had to wear a very uncomfortable contraption that kept our mouth closed. Then we switched to Somnifix right after it came out and immediately signed up for a 3-month subscription for each of us. I don't know what we'd do without it. It's feather-light, so comfortable, easy on and off and has that little slit in the middle so you can take in some air as needed. This is a FANTASTIC product. We have given strips to others and recommend that they try it. Now, the only thing Somnifix needs to do is make a larger size. My husband has a larger size mouth and could really use a bigger size. Please consider as it would be extremely helpful. Thank you Somnifix!!`
    }
]

function pushDataLayer(action) {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: shipping and money-back guarantee at Checkout',
        'eventAction': action
    });
}
//comes into view
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}

let checkoutsInterval = setInterval(() => {
    if (
        window.location.href.includes('/checkouts/') && 
        document.querySelector('.breadcrumb__item.breadcrumb__item--current') != null && 
        document.querySelector('.breadcrumb__item.breadcrumb__item--current').innerText.includes('Information') && 
        document.querySelector('.product__description__variant.order-summary__small-text') != null && 
        document.querySelector('.product__description__name.order-summary__emphasis') != null &&
        document.querySelector('.product__description__name.order-summary__emphasis').innerHTML == 'SomniFix Mouth Strips' &&
        document.querySelector('.main__content') != null
        ) {
        clearInterval(checkoutsInterval)

        let pack = document.querySelector('.product__description__variant.order-summary__small-text').innerHTML;

        document.head.insertAdjacentHTML('beforeend',`
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">
        `)
        document.body.insertAdjacentHTML('afterbegin', `
        <style>
            .money-back_block, .shipping_block {
                border-radius: 6px;
                background: #EFF3FF;
                padding: 12px;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                color: #1E415F;
                font-family: 'Roboto', sans-serif;
                margin-top: 12px;
            }
            .money-back_block svg, .shipping_block svg {
                margin-right: 10px;
            }
            .shipping_block {
                background: #EBFFF4;
                padding: 12px 20px;
            }
            .money-back_block p:first-child, .shipping_block p:first-child {
                margin-bottom: 2px;
            }
            .money-back_block p:first-child, .shipping_block p:last-child {
                font-family: 'Rubik', sans-serif;
                font-weight: 700;
                text-transform: uppercase;
                line-height: 19px;
            }

            /* review */
            .main__content {
                padding-bottom: 24px;
            }
            .reviews_block {
                padding-top: 36px;
                margin-top: 56px;
                border-top: 1px solid #D9D9D9;
            }
            .reviews_block > div:first-child {
                margin-bottom: 24px;
            }
            .reviews_block h2 {
                font-family: 'Rubik', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 32px;
                color: #20425E;
            }
            .reviews_block_rating {
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-size: 18px;
                line-height: 21px;
                color: #20425E;
            }
            .reviews_block_rating span {
                margin-right: 6px;
            }
            .reviews_block_rating+p {
                font-size: 12px;
                line-height: 14px;
                color: #5E778B;
                margin-top: 6px;
                text-align: right;
            }
            .review {
                background: #F8F8F8;
                border-radius: 6px;
                padding: 24px;
                font-size: 14px;
                line-height: 22px;
                margin-top: 18px;
            }
            .review .star {
                margin-bottom: 8px;
            }
            .review_author {
                color: #5E778B;
                margin-right: 14px;
            }
            .review .c-green {
                margin-left: 8px;
            }
            .review h3 {
                font-size: 16px;
                line-height: 24px;
                color: #20425E;
                margin: 14px 0 8px;
            }
            .review_date {
                color: #5E778B;
            }
            /* flex, font*/
            .d-flex {
                display: flex;
            } 
            .items-center {
                align-items: center;
            } 
            .justify-between {
                justify-content: space-between;
            }
            .fw-bold {
                font-weight: 700;
            }
            .c-green {
                color: #3ABC72;
            }
            /* media */
            @media screen and (min-width: 1000px) {
                .messages {
                    padding: 2px 0 14px;
                    margin-bottom: 28px;
                    border-bottom: 1px solid #E6E6E6;
                }
            }
            @media screen and (max-width: 1000px) {
                .messages {
                    flex-wrap: wrap;
                }
                .messages > div {
                    width: 100%;
                }
                .banner {
                    padding-bottom: 12px;
                }
                .review {
                    padding: 18px;
                }
                .review_text {
                    font-size: 12px;
                    line-height: 20px;
                }
            }
        </style>`)

        document.querySelector('.main__header .logo.logo--left').insertAdjacentHTML('afterend', `
            <div class="d-flex justify-between messages">
                <div class="d-flex items-center money-back_block">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 14.9999C30 23.2711 23.2712 30 15 30C6.72882 30 0 23.2711 0 14.9999C0 14.4823 0.419505 14.0625 0.937415 14.0625C1.45533 14.0625 1.87483 14.4827 1.87483 14.9999C1.87483 22.2369 7.76267 28.125 14.9998 28.125C22.2367 28.125 28.1248 22.2371 28.1248 14.9999C28.1248 7.76296 22.2367 1.87484 14.9998 1.87484C11.5123 1.87484 8.27335 3.23079 5.83661 5.62495H9.37483C9.89276 5.62495 10.3122 6.04511 10.3122 6.56237C10.3122 7.07997 9.89274 7.49979 9.37483 7.49979H3.74992C3.23199 7.49979 2.8125 7.07963 2.8125 6.56237L2.81217 0.937421C2.81217 0.419818 3.23168 0 3.74959 0C4.2675 0 4.68701 0.420161 4.68701 0.937421V4.13523C7.45322 1.49524 11.0875 0 14.9995 0C23.2706 0 29.9995 6.72886 29.9995 15.0001L30 14.9999ZM15.9375 14.0625H14.0627C13.5451 14.0625 13.1252 13.642 13.1252 13.1251C13.1252 12.6081 13.5454 12.1877 14.0627 12.1877H17.8127C18.3307 12.1877 18.7502 11.7675 18.7502 11.2502C18.7502 10.7326 18.3307 10.3128 17.8127 10.3128H15.9379V9.37539C15.9379 8.85778 15.5184 8.43796 15.0005 8.43796C14.4826 8.43796 14.0631 8.85813 14.0631 9.37539V10.3128C12.5119 10.3128 11.2504 11.5743 11.2504 13.1255C11.2504 14.6767 12.5119 15.9382 14.0631 15.9382H15.9379C16.4555 15.9382 16.8753 16.3587 16.8753 16.8756C16.8753 17.3925 16.4552 17.813 15.9379 17.813H12.1878C11.6699 17.813 11.2504 18.2332 11.2504 18.7504C11.2504 19.268 11.6699 19.6879 12.1878 19.6879H14.0627V20.6253C14.0627 21.1429 14.4822 21.5627 15.0001 21.5627C15.518 21.5627 15.9375 21.1425 15.9375 20.6253V19.6879C17.4886 19.6879 18.7502 18.4264 18.7502 16.8752C18.7502 15.3239 17.4887 14.0625 15.9375 14.0625Z" fill="#1E415F"/>
                    </svg>
                    <div>
                        <p>30 days money-back guarantee</p>
                        <p>No returns required — test as much as you want</p>
                    </div>
                </div>
                <div class="d-flex items-center shipping_block">
                    <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.6667 10.9573L27.3963 10.1877L25.8912 6.32207C25.7152 5.87772 25.3988 5.49478 24.9845 5.22452C24.57 4.95448 24.0776 4.80999 23.5732 4.81098H19.4642V1.9499C19.4636 1.43294 19.2448 0.937454 18.8559 0.572043C18.4673 0.206461 17.94 0.000758008 17.3903 0H2.57395C2.0242 0.000789541 1.49698 0.206476 1.10828 0.572043C0.719404 0.937428 0.500591 1.43289 0.5 1.9499V21.6318C0.50063 22.0489 0.677223 22.4487 0.990928 22.7436C1.30463 23.0385 1.73005 23.2045 2.17352 23.2053H4.18743C4.37179 24.2402 5.06873 25.1311 6.06486 25.6048C7.06098 26.0786 8.2375 26.0786 9.23362 25.6048C10.2297 25.1311 10.9267 24.2402 11.111 23.2053H19.3919C19.5467 24.2473 20.2295 25.154 21.2235 25.6374C22.2178 26.1209 23.3995 26.1209 24.3936 25.6374C25.3876 25.154 26.0704 24.2473 26.2252 23.2053H28.3323C28.775 23.2029 29.1987 23.0363 29.5112 22.7416C29.8236 22.4469 29.9994 22.0479 30 21.6318V13.2523C30.0017 12.3233 29.4988 11.4579 28.6666 10.9572L28.6667 10.9573ZM23.5732 6.2259C23.7698 6.22492 23.9619 6.28078 24.1236 6.38619C24.2851 6.4914 24.4083 6.64103 24.4763 6.81435L26.0747 10.9036C26.1318 11.0483 26.2376 11.1713 26.3758 11.2546L27.8599 12.1518V12.1516C28.2574 12.394 28.4966 12.8099 28.4948 13.2553V16.6965H19.4641V6.2259H23.5732ZM2.57357 1.41493H17.3899C17.7034 1.41651 17.9573 1.65516 17.9587 1.94988V16.6967H2.00442V1.94988C2.00589 1.65517 2.25976 1.41649 2.57325 1.41493H2.57357ZM7.65191 24.5807C7.11856 24.5807 6.60703 24.3815 6.22995 24.027C5.85286 23.6724 5.64096 23.1916 5.64096 22.6902C5.64096 22.189 5.85283 21.7081 6.22995 21.3536C6.60706 20.9991 7.11856 20.7999 7.65191 20.7999C8.18526 20.7999 8.69679 20.9991 9.07387 21.3536C9.45078 21.7081 9.66264 22.189 9.66264 22.6902C9.66201 23.1914 9.44973 23.6719 9.0728 24.0262C8.69589 24.3805 8.18499 24.5799 7.65186 24.5807L7.65191 24.5807ZM22.8053 24.5807C22.2881 24.5807 21.7919 24.3874 21.4261 24.0435C21.0601 23.6997 20.8548 23.2332 20.8548 22.7468C20.8548 22.2604 21.0601 21.7942 21.4261 21.4501C21.7919 21.1063 22.2881 20.913 22.8053 20.913C23.3226 20.913 23.8188 21.1063 24.1846 21.4501C24.5504 21.7942 24.756 22.2604 24.756 22.7468C24.7551 23.2324 24.5498 23.6981 24.1848 24.0418C23.8199 24.3854 23.325 24.5791 22.8084 24.5807H22.8053ZM28.3264 21.7904H26.1107C25.8186 20.8998 25.1334 20.17 24.2299 19.7867C23.3262 19.4033 22.2908 19.4033 21.3872 19.7867C20.4835 20.17 19.7985 20.8998 19.5063 21.7904H11.0356C10.7574 20.8605 10.0599 20.0918 9.12693 19.6872C8.19402 19.2825 7.1191 19.2825 6.18619 19.6872C5.25307 20.0918 4.5555 20.8605 4.27748 21.7904H2.17036C2.07839 21.7889 2.0049 21.7184 2.0049 21.6319V18.1115H28.495V21.6319C28.495 21.674 28.4774 21.7142 28.4457 21.7438C28.4142 21.7737 28.3714 21.7904 28.3266 21.7904L28.3264 21.7904Z" fill="#1E415F"/>
                        <path d="M6.1876 13.4564C6.51768 13.6927 6.98886 13.6333 7.24107 13.3234L13.6411 5.45929C13.8903 5.14662 13.8229 4.70326 13.4905 4.46873C13.1579 4.23422 12.6863 4.29759 12.4368 4.61026L6.04597 12.4521C5.9204 12.6019 5.86475 12.7932 5.89121 12.9825C5.91788 13.1716 6.02476 13.3426 6.18749 13.4567L6.1876 13.4564Z" fill="#1E415F"/>
                        <path d="M10.7383 11.3196V11.8857C10.7383 12.6945 11.1973 13.4418 11.9423 13.8463C12.6875 14.2507 13.6055 14.2507 14.3505 13.8463C15.0957 13.4418 15.5547 12.6945 15.5547 11.8857V11.3196C15.5547 10.5108 15.0957 9.76349 14.3505 9.35902C13.6055 8.95455 12.6875 8.95455 11.9423 9.35902C11.1973 9.76348 10.7383 10.5108 10.7383 11.3196ZM14.0497 11.3196V11.8857C14.0497 12.1889 13.8775 12.4692 13.598 12.6208C13.3187 12.7724 12.9743 12.7724 12.6949 12.6208C12.4156 12.4692 12.2434 12.1889 12.2434 11.8857V11.3196C12.2434 11.0164 12.4156 10.7361 12.6949 10.5845C12.9744 10.4329 13.3187 10.4329 13.598 10.5845C13.8775 10.7361 14.0497 11.0164 14.0497 11.3196Z" fill="#1E415F"/>
                        <path d="M6.51952 8.77252C7.15807 8.77252 7.77055 8.53406 8.22225 8.10946C8.67394 7.68487 8.92756 7.10905 8.92756 6.50855V5.94262C8.92756 5.13388 8.46854 4.38633 7.72357 3.98206C6.97859 3.57759 6.06051 3.57759 5.31532 3.98206C4.57034 4.38633 4.11133 5.13388 4.11133 5.94262V6.50855C4.11133 7.10905 4.36498 7.68483 4.81664 8.10946C5.26829 8.5341 5.88076 8.77252 6.51952 8.77252ZM5.6164 5.94262C5.6164 5.63922 5.78858 5.35911 6.06785 5.20731C6.34733 5.0557 6.6915 5.0557 6.97097 5.20731C7.25045 5.3591 7.42242 5.63921 7.42242 5.94262V6.50855C7.42242 6.81195 7.25045 7.09227 6.97097 7.24387C6.69149 7.39547 6.34732 7.39547 6.06785 7.24387C5.78858 7.09227 5.6164 6.81196 5.6164 6.50855V5.94262Z" fill="#1E415F"/>
                    </svg>
                    <div>
                        <p>Congratulations! You get</p>
                        <p>Free shipping in the USA</p>
                    </div>
                </div>
            </div>`)
            

        // For 4 week  pack "No returns required — test as much as you want"
        // For 12, 52 week  pack "We offer hassle-free returns for unused strips"
        document.querySelector('.money-back_block p:last-child').innerHTML = pack == '1 Pack' ? 'No returns required — test as much as you want' : 'We offer hassle-free returns for unused strips';

        if (window.matchMedia("(max-width: 1000px)").matches) {
            document.querySelector('.banner .logo.logo--left').after(document.querySelector('.messages'))
        } else {
            document.querySelector('.main__header .logo.logo--left').after(document.querySelector('.messages'))
        }

        pushDataLayer('Visibility Free shipping in the USA block')
        pushDataLayer(`Visibility 30 day money back for ${pack == '1 Pack' ? '4' : '12-52'} week pack`)

        request.then(data => {
            let rating = data[0]['rating'].toFixed(1);
            let count = data[0]['count'] - data[0]['breakdown']['rating2'];


            document.querySelector('.main__content').insertAdjacentHTML('beforeend', `
            <div class="reviews_block">
                <div class="d-flex items-center justify-between">
                    <h2>Reviews</h2>
                    <div>
                        <p class="reviews_block_rating d-flex items-center">
                            <span class="fw-bold">${rating}</span>
                            <svg width="98" height="19" viewBox="0 0 98 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.08663 2.54906C8.43899 1.75857 9.56101 1.75857 9.91337 2.54906L11.2515 5.55105C11.3968 5.87709 11.7049 6.10093 12.0599 6.1384L15.3285 6.48338C16.1892 6.57422 16.5359 7.64132 15.893 8.22071L13.4514 10.421C13.1863 10.66 13.0686 11.0222 13.1426 11.3714L13.8246 14.5866C14.0042 15.4332 13.0964 16.0927 12.3467 15.6603L9.49962 14.0182C9.19041 13.8398 8.80959 13.8398 8.50038 14.0182L5.65327 15.6603C4.90357 16.0927 3.99584 15.4332 4.17541 14.5866L4.85736 11.3714C4.93142 11.0222 4.81374 10.66 4.54857 10.421L2.10702 8.22071C1.4641 7.64132 1.81082 6.57422 2.67151 6.48338L5.94008 6.1384C6.29507 6.10093 6.60316 5.87709 6.74849 5.55105L8.08663 2.54906Z" fill="#F2B413"/>
                                <path d="M28.0866 2.54906C28.439 1.75857 29.561 1.75857 29.9134 2.54906L31.2515 5.55105C31.3968 5.87709 31.7049 6.10093 32.0599 6.1384L35.3285 6.48338C36.1892 6.57422 36.5359 7.64132 35.893 8.22071L33.4514 10.421C33.1863 10.66 33.0686 11.0222 33.1426 11.3714L33.8246 14.5866C34.0042 15.4332 33.0964 16.0927 32.3467 15.6603L29.4996 14.0182C29.1904 13.8398 28.8096 13.8398 28.5004 14.0182L25.6533 15.6603C24.9036 16.0927 23.9958 15.4332 24.1754 14.5866L24.8574 11.3714C24.9314 11.0222 24.8137 10.66 24.5486 10.421L22.107 8.22071C21.4641 7.64132 21.8108 6.57422 22.6715 6.48338L25.9401 6.1384C26.2951 6.10093 26.6032 5.87709 26.7485 5.55105L28.0866 2.54906Z" fill="#F2B413"/>
                                <path d="M48.0866 2.54906C48.439 1.75857 49.561 1.75857 49.9134 2.54906L51.2515 5.55105C51.3968 5.87709 51.7049 6.10093 52.0599 6.1384L55.3285 6.48338C56.1892 6.57422 56.5359 7.64132 55.893 8.22071L53.4514 10.421C53.1863 10.66 53.0686 11.0222 53.1426 11.3714L53.8246 14.5866C54.0042 15.4332 53.0964 16.0927 52.3467 15.6603L49.4996 14.0182C49.1904 13.8398 48.8096 13.8398 48.5004 14.0182L45.6533 15.6603C44.9036 16.0927 43.9958 15.4332 44.1754 14.5866L44.8574 11.3714C44.9314 11.0222 44.8137 10.66 44.5486 10.421L42.107 8.22071C41.4641 7.64132 41.8108 6.57422 42.6715 6.48338L45.9401 6.1384C46.2951 6.10093 46.6032 5.87709 46.7485 5.55105L48.0866 2.54906Z" fill="#F2B413"/>
                                <path d="M68.0866 2.54906C68.439 1.75857 69.561 1.75857 69.9134 2.54906L71.2515 5.55105C71.3968 5.87709 71.7049 6.10093 72.0599 6.1384L75.3285 6.48338C76.1892 6.57422 76.5359 7.64132 75.893 8.22071L73.4514 10.421C73.1863 10.66 73.0686 11.0222 73.1426 11.3714L73.8246 14.5866C74.0042 15.4332 73.0964 16.0927 72.3467 15.6603L69.4996 14.0182C69.1904 13.8398 68.8096 13.8398 68.5004 14.0182L65.6533 15.6603C64.9036 16.0927 63.9958 15.4332 64.1754 14.5866L64.8574 11.3714C64.9314 11.0222 64.8137 10.66 64.5486 10.421L62.107 8.22071C61.4641 7.64132 61.8108 6.57422 62.6715 6.48338L65.9401 6.1384C66.2951 6.10093 66.6032 5.87709 66.7485 5.55105L68.0866 2.54906Z" fill="#F2B413"/>
                                <path d="M88.0866 2.54906C88.439 1.75857 89.561 1.75857 89.9134 2.54906L91.2515 5.55105C91.3968 5.87709 91.7049 6.10093 92.0599 6.1384L95.3285 6.48338C96.1892 6.57422 96.5359 7.64132 95.893 8.22071L93.4514 10.421C93.1863 10.66 93.0686 11.0222 93.1426 11.3714L93.8246 14.5866C94.0042 15.4332 93.0964 16.0927 92.3467 15.6603L89.4996 14.0182C89.1904 13.8398 88.8096 13.8398 88.5004 14.0182L85.6533 15.6603C84.9036 16.0927 83.9958 15.4332 84.1754 14.5866L84.8574 11.3714C84.9314 11.0222 84.8137 10.66 84.5486 10.421L82.107 8.22071C81.4641 7.64132 81.8108 6.57422 82.6715 6.48338L85.9401 6.1384C86.2951 6.10093 86.6032 5.87709 86.7485 5.55105L88.0866 2.54906Z" fill="#F2B413"/>
                            </svg>
                        </p>
                        <p>Based on ${count} reviews</p>
                    </div>
                </div>
            </div>`)

            let reviewHtml = (date, author, title, text) => `
                <div class="review">
                    <div class="d-flex justify-between items-center">
                        <div>
                            <svg class="star" width="98" height="18" viewBox="0 0 98 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.08663 2.04906C8.43899 1.25857 9.56101 1.25857 9.91337 2.04906L11.2515 5.05105C11.3968 5.37709 11.7049 5.60093 12.0599 5.6384L15.3285 5.98338C16.1892 6.07422 16.5359 7.14132 15.893 7.72071L13.4514 9.92102C13.1863 10.16 13.0686 10.5222 13.1426 10.8714L13.8246 14.0866C14.0042 14.9332 13.0964 15.5927 12.3467 15.1603L9.49962 13.5182C9.19041 13.3398 8.80959 13.3398 8.50038 13.5182L5.65327 15.1603C4.90357 15.5927 3.99584 14.9332 4.17541 14.0866L4.85736 10.8714C4.93142 10.5222 4.81374 10.16 4.54857 9.92102L2.10702 7.72071C1.4641 7.14132 1.81082 6.07422 2.67151 5.98338L5.94008 5.6384C6.29507 5.60093 6.60316 5.37709 6.74849 5.05105L8.08663 2.04906Z" fill="#F2B413"/>
                                <path d="M28.0866 2.04906C28.439 1.25857 29.561 1.25857 29.9134 2.04906L31.2515 5.05105C31.3968 5.37709 31.7049 5.60093 32.0599 5.6384L35.3285 5.98338C36.1892 6.07422 36.5359 7.14132 35.893 7.72071L33.4514 9.92102C33.1863 10.16 33.0686 10.5222 33.1426 10.8714L33.8246 14.0866C34.0042 14.9332 33.0964 15.5927 32.3467 15.1603L29.4996 13.5182C29.1904 13.3398 28.8096 13.3398 28.5004 13.5182L25.6533 15.1603C24.9036 15.5927 23.9958 14.9332 24.1754 14.0866L24.8574 10.8714C24.9314 10.5222 24.8137 10.16 24.5486 9.92102L22.107 7.72071C21.4641 7.14132 21.8108 6.07422 22.6715 5.98338L25.9401 5.6384C26.2951 5.60093 26.6032 5.37709 26.7485 5.05105L28.0866 2.04906Z" fill="#F2B413"/>
                                <path d="M48.0866 2.04906C48.439 1.25857 49.561 1.25857 49.9134 2.04906L51.2515 5.05105C51.3968 5.37709 51.7049 5.60093 52.0599 5.6384L55.3285 5.98338C56.1892 6.07422 56.5359 7.14132 55.893 7.72071L53.4514 9.92102C53.1863 10.16 53.0686 10.5222 53.1426 10.8714L53.8246 14.0866C54.0042 14.9332 53.0964 15.5927 52.3467 15.1603L49.4996 13.5182C49.1904 13.3398 48.8096 13.3398 48.5004 13.5182L45.6533 15.1603C44.9036 15.5927 43.9958 14.9332 44.1754 14.0866L44.8574 10.8714C44.9314 10.5222 44.8137 10.16 44.5486 9.92102L42.107 7.72071C41.4641 7.14132 41.8108 6.07422 42.6715 5.98338L45.9401 5.6384C46.2951 5.60093 46.6032 5.37709 46.7485 5.05105L48.0866 2.04906Z" fill="#F2B413"/>
                                <path d="M68.0866 2.04906C68.439 1.25857 69.561 1.25857 69.9134 2.04906L71.2515 5.05105C71.3968 5.37709 71.7049 5.60093 72.0599 5.6384L75.3285 5.98338C76.1892 6.07422 76.5359 7.14132 75.893 7.72071L73.4514 9.92102C73.1863 10.16 73.0686 10.5222 73.1426 10.8714L73.8246 14.0866C74.0042 14.9332 73.0964 15.5927 72.3467 15.1603L69.4996 13.5182C69.1904 13.3398 68.8096 13.3398 68.5004 13.5182L65.6533 15.1603C64.9036 15.5927 63.9958 14.9332 64.1754 14.0866L64.8574 10.8714C64.9314 10.5222 64.8137 10.16 64.5486 9.92102L62.107 7.72071C61.4641 7.14132 61.8108 6.07422 62.6715 5.98338L65.9401 5.6384C66.2951 5.60093 66.6032 5.37709 66.7485 5.05105L68.0866 2.04906Z" fill="#F2B413"/>
                                <path d="M88.0866 2.04906C88.439 1.25857 89.561 1.25857 89.9134 2.04906L91.2515 5.05105C91.3968 5.37709 91.7049 5.60093 92.0599 5.6384L95.3285 5.98338C96.1892 6.07422 96.5359 7.14132 95.893 7.72071L93.4514 9.92102C93.1863 10.16 93.0686 10.5222 93.1426 10.8714L93.8246 14.0866C94.0042 14.9332 93.0964 15.5927 92.3467 15.1603L89.4996 13.5182C89.1904 13.3398 88.8096 13.3398 88.5004 13.5182L85.6533 15.1603C84.9036 15.5927 83.9958 14.9332 84.1754 14.0866L84.8574 10.8714C84.9314 10.5222 84.8137 10.16 84.5486 9.92102L82.107 7.72071C81.4641 7.14132 81.8108 6.07422 82.6715 5.98338L85.9401 5.6384C86.2951 5.60093 86.6032 5.37709 86.7485 5.05105L88.0866 2.04906Z" fill="#F2B413"/>
                            </svg>
                            <p class="d-flex items-center">
                                <span class="review_author fw-bold">${author}</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13384 0 0 3.13384 0 7C0 10.8662 3.13384 14 7 14C10.8662 14 14 10.8662 14 7C14 3.13384 10.8662 0 7 0ZM10.2481 4.36236C10.5452 4.60987 10.5853 5.05132 10.3378 5.34827L6.83765 9.54833C6.71554 9.69505 6.5387 9.7854 6.34828 9.79852C6.15785 9.81177 5.97033 9.74661 5.829 9.61817L3.72909 7.70903C3.44303 7.44899 3.42195 7.00624 3.68198 6.72019C3.94203 6.43413 4.38477 6.41304 4.67083 6.67308L6.23016 8.0906L9.2623 4.45185C9.50981 4.15489 9.95114 4.1147 10.2481 4.3622L10.2481 4.36236Z" fill="#5ABE8B"/>
                                </svg>
                                <span class="c-green">Verified Buyer</span>
                            </p>
                        </div>
                        <p class="review_date">${date}</p>
                    </div>
                    <h3 class="fw-bold">${title}</h3>
                    <p class="review_text">${text}</p>
                </div>`


                for (let i = 0; i < reviewobj.length; i++) {
                    document.querySelector('.reviews_block').insertAdjacentHTML('beforeend', reviewHtml(reviewobj[i].date, reviewobj[i].author, reviewobj[i].title, reviewobj[i].text))
                    
                }

            document.querySelectorAll('.reviews_block .review').forEach((item, index) => {
                item.addEventListener('click', (e) => {
                    let reviewIndex = index == 0 ? 'first' : index == 1 ? 'second' : 'third'
                    pushDataLayer(`Click on ${reviewIndex} review`)
                })
            })

            let viewed1 = false;
            let viewed2 = false;
            let viewed3 = false;
            function isVisibleReviews() {
                setTimeout(() => {
                    if (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[0]) && viewed1 == false) {
                        viewed1 = true;
                        pushDataLayer('Visibility first review')
                    }
                    if (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[1]) && viewed3 == false) {
                        viewed2 = true;
                        pushDataLayer('Visibility second review')
                    }
                    if (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[2]) && viewed3 == false) {
                        viewed3 = true;
                        pushDataLayer('Visibility third review')
                    }
                }, 5000)
            }
            if (
                (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[0]) && viewed1 == false) ||
                (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[1]) && viewed2 == false) ||
                (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[2]) && viewed3 == false)
            ) {
                isVisibleReviews()
            }
            window.addEventListener('scroll', (e) => {
                if (
                    (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[0]) && viewed1 == false) ||
                    (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[1]) && viewed2 == false) ||
                    (isScrolledIntoView(document.querySelectorAll('.reviews_block .review')[2]) && viewed3 == false)
                ) {
                    isVisibleReviews()
                }
            })
        })
        
        pushDataLayer('loaded')
    }
});

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "new_product_selection_process", "variant_1");
    }
}, 100)