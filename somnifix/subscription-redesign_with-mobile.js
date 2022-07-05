
let obj = [
    'United States/9-11/free',
    'Canada/12-15/$5',
    'United Kingdom/14-17/$10',
    'Australia/14-17/$10',
    'France/14-17/$10',
    'Germany/14-17/$10',
    'The Netherlands/14-17/$10',
    'Belgium/14-17/$10',
    'Spain/14-17/$10',
    'Austria/14-17/$10',
    'Poland/14-17/$10',
    'Switzerland/14-17/$10',
    'Aland Islands/14-17/$10',
    'Albania/14-17/$10',
    'Andorra/14-17/$10',
    'Armenia/14-17/$10',
    'Belarus/14-17/$10',
    'Bosnia And Herzegovina/14-17/$10',
    'Bouvet Island/14-17/$10',
    'Bulgaria/14-17/$10',
    'Croatia/14-17/$10',
    'Cyprus/14-17/$10',
    'Czech Republic/14-17/$10',
    'Denmark/14-17/$10',
    'Estonia/14-17/$10',
    'Faroe Islands/14-17/$10',
    'Finland/14-17/$10',
    'Georgia/14-17/$10',
    'Gibraltar/14-17/$10',
    'Greece/14-17/$10',
    'Greenland/14-17/$10',
    'Guadeloupe/14-17/$10',
    'Guernsey/14-17/$10',
    'Hungary/14-17/$10',
    'Iceland/14-17/$10',
    'Ireland/14-17/$10',
    'Isle of Man/14-17/$10',
    'Italy/14-17/$10',
    'Jersey/14-17/$10',
    'Kosovo/14-17/$10',
    'Latvia/14-17/$10',
    'Liechtenstein/14-17/$10',
    'Lithuania/14-17/$10',
    'Luxembourg/14-17/$10',
    'Malta/14-17/$10',
    'Mayotte/14-17/$10',
    'Monaco/14-17/$10',
    'Montenegro/14-17/$10',
    'New Zealand/14-17/$10',
    'Norway/14-17/$10',
    'Portugal/14-17/$10',
    'Reunion/14-17/$10',
    'Romania/14-17/$10',
    'San Marino/14-17/$10',
    'Serbia/14-17/$10',
    'Slovakia/14-17/$10',
    'Slovenia/14-17/$10',
    'Svlabard And Jan Mayen/14-17/$10',
    'Sweden/14-17/$10',
    'Turkey/14-17/$10',
    'Ukraine/14-17/$10'
]

//format date
let formatDate = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//new Date add days
function addDays(days) {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return result;
}

function optionShipTo() {
    let option = '';
    for (let i = 0; i < obj.length; i++) {
        let elements = obj[i].split('/'),
            plusDays = elements[1].split('-');

        let minDay = addDays(+plusDays[0]),
            maxDay = addDays(+plusDays[1]);

        option += `<option value="${elements[0]}" data-free="${elements[2]}" data-value="${minDay.getDate()} ${formatDate[minDay.getMonth()]} - ${maxDay.getDate()} ${formatDate[maxDay.getMonth()]}">${elements[0]}</option>`;
    }

    return option
}

let objVariants = [
    {
        'variantId': '32115046023283',
        'title': '1 Pack',
        'week' :'4-week pack',
        'days':'28 strips',
        'sale':'',
        'price': '23.99',
        'popular': false,
        'perStrip':'0.85',
        'active':'',
    },
    {
        'variantId': '16037160779819',
        'title': '3 Pack',
        'week' :'12-week pack',
        'days':'84 strips',
        'sale':'Save 22%',
        'price': '55.97',
        'popular': false,
        'perStrip':'0.67',
        'active':'',
    },
    {
        'variantId': '30282132226091',
        'title': '12 Pack',
        'week' :'12-week pack <br> subscription',
        'days':'84 strips',
        'sale':'Save 30%',
        'price': '49.97',
        'popular': true,
        'perStrip':'0.59',
        'active':'swatchCustom__item--active',
    },
]

//qty stock
function qty() {
    let i = 1,
        option = ``;

    while (i <= 20) {
        option += `<option value="${i}">Qty: ${i}</option>`;
        i++
    }

    return option
}

//push dataLayer
function pushDataLayer(action, label) {
    console.log(action + ' : ' + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Subscription redesign 1',
        'eventAction': action,
        'eventLabel': label
    });
}

//qty change
function changeQty(qty,action) {
    let actionData = '';
    if (action == 'plus') {
        qty.value = parseInt(qty.value) + 1;
        actionData = 'Click on plus button';
    } else if (action == 'minus') {
        qty.value = parseInt(qty.value) - 1;
        actionData = 'Click on minus button';
    }
    if (action == 'plus' || action == 'minus') {
        if (qty.value == '') {
            qty.value = 1;
        }
    }
    if (qty.value > 1) {
        qty.previousElementSibling.disabled = false;
    } else {
        qty.previousElementSibling.disabled = true;
    }

    if (qty.value == 0 && qty.value != '') {
        qty.value = 1;
    }
    pushDataLayer(actionData, 'SomniFix Mouth Strips');
}

let style = `
<style>
    /*banner*/
    .banner_btn {
        background: #FF9729;
        border-radius: 2px;
        width: fit-content;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        padding: 12.5px 59.5px;
        margin-top: 16px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
    .wrap-banner {
        background: url(https://conversionratestore.github.io/projects/somnifix/img/image4.png) no-repeat center 25% / cover;         
        width: 100%;
    }
    .row-banner img {
        max-height: 326px;
    }
    .row-banner {
        padding: 45px 0 34px;
        display: flex;
        justify-content: space-between;
        position: inherit;
        max-width: 1064px;
        margin: 0 auto;
        width: 95%;
    }
    
    .banner .stamped-main-badge {
        margin-bottom: 24px;
    }
    .banner .stamped-main-badge i:before {
        font-size: 14px;
        margin-right: 2px;
    }
    .banner .stamped-badge-caption {
        padding-left: 15px;
    }
    .banner .stamped-badge-caption, .banner .stamped-badge-caption span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        color: #FFFFFF;
    }
    #s-fbdee801-5b04-4709-9608-83ce9e92dc48 img.shogun-image {
        width: 100%;
    }
    .banner {
       color: #FFFFFF;
        font-size: 14px;
        line-height: 16px;
        max-width: 488px;
        text-align: left;
    }
    .banner a {
       color: #FFFFFF;
    }
    .banner p {
        margin-bottom: 8px;
    }
    .row-banner h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        text-transform: uppercase;
        margin-bottom: 16px;
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif!important;
    }
    .banner_list li {
       margin-bottom: 8px;
       margin-right: 8px;
       position: relative;
       display: flex;
    }
    .banner_list li:before {
        content: '';
        width: 16px;
        height: 16px;
        margin-right: 8px;
        display: block;
        flex-shrink: 0;
        background: url('https://conversionratestore.github.io/projects/somnifix/img/check-orange.svg') no-repeat center / contain;  
    }
    .banner_list {
        margin-bottom: 24px;
    }
    .banner_price-old {
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: line-through;
        text-transform: uppercase;
    }
    .banner_price {
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
    }
    .fs-12 {
        font-size: 12px!important;
        line-height: 14px!important;
    }
    @media (max-width: 768px) {
        .wrap-banner {
            background: linear-gradient(180deg, #4E99B6 0%, #5FB9CF 100%);
        }
        .row-banner {
            display: block;
            text-align: center;
        }
        .banner {
            margin: 0 auto;
            text-align: center;
        }
        .banner p:not(.banner_price-old) {
            font-size: 14px;
            line-height: 120%;
        }
        .banner p.banner_price {
            font-size: 24px;
            line-height: 28px;
        }
        .banner_list {
            display: flex;
            justify-content: center;
            margin: 24px 0 16px;
        }
        .banner .stamped-main-badge {
            margin-bottom: 16px;;
        }
        .row-banner {
            padding: 20px 0;
        }
        .row-banner h1 {
            font-weight: 800;
            font-size: 24px;
            line-height: 28px;
        }
        .row-banner img {
            display: block;
            margin: 0 auto;
        }
        .banner_btn {
            width: 100%;
        }
        
    }
    /*product*/
    .shogun-root > .shg-box-vertical-align-wrapper .shg-box-content > .shg-box-vertical-align-wrapper {
        display: none;
    }
    .items-center {
        display: flex;
        align-items: center;
    }
    .justify-between { 
        display: flex;
        justify-content: space-between;
    }
    .flx {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mobile {
        display: none;
    }


    .gray_bg {
        background-color: #f5f6f7;
        border-radius: 22px;
        padding: 20px;
    }

    .part2.gray_bg {
        display: flex;
        flex-direction: column;
    }

    .swatch_cro > .flx.desktop {
        align-items: stretch;
    }

    .swatch_cro .part1 {
        width: 58%;
    }

    .swatch_cro .part2 {
        width: 39%;
    }
 
    .product__information.one-half {
        width: 60%;
        margin: 0;
        padding-left: 20px;
    }

    .product__images.one-half {
        width: 40%;
        margin: 0;
    }

    .product__information .made_in, .mobile .made_in {
        font-weight: 500;
        font-size: 12px;
        color: white;
        background-color: #4090D1;
        padding: 7px;
        border-radius: 5px;

    }

    .product__information .made_in:before, .mobile .made_in:before {
        content: '';
        display: inline-block;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTAiPgo8cGF0aCBkPSJNMTMgMEgxQzAuNDQ3NzE1IDAgMCAwLjQ0NzcxNSAwIDFWOUMwIDkuNTUyMjggMC40NDc3MTUgMTAgMSAxMEgxM0MxMy41NTIzIDEwIDE0IDkuNTUyMjggMTQgOVYxQzE0IDAuNDQ3NzE1IDEzLjU1MjMgMCAxMyAwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGQ9Ik0xMyAwSDFDMC40NDc3MTUgMCAwIDAuNDQ3NzE1IDAgMVY5QzAgOS41NTIyOCAwLjQ0NzcxNSAxMCAxIDEwSDEzQzEzLjU1MjMgMTAgMTQgOS41NTIyOCAxNCA5VjFDMTQgMC40NDc3MTUgMTMuNTUyMyAwIDEzIDBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDkuMzMzMzNWMTBIMFY5LjMzMzMzSDE0Wk0xNCA4VjguNjY2NjdIMFY4SDE0Wk0xNCA2LjY2NjY3VjcuMzMzMzNIMFY2LjY2NjY3SDE0Wk0xNCA1LjMzMzMzVjZIMFY1LjMzMzMzSDE0Wk0xNCA0VjQuNjY2NjdIMFY0SDE0Wk0xNCAyLjY2NjY3VjMuMzMzMzNIMFYyLjY2NjY3SDE0Wk0xNCAxLjMzMzMzVjJIMFYxLjMzMzMzSDE0Wk0xNCAwVjAuNjY2NjY3SDBWMEgxNFoiIGZpbGw9IiNEMDJGNDQiLz4KPHBhdGggZD0iTTYgMEgwVjQuNjY2NjdINlYwWiIgZmlsbD0iIzQ2NDY3RiIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGQ9Ik01LjAwMDA4IDMuMzMzMzRDNS4xODQxOCAzLjMzMzM0IDUuMzMzNDIgMy40ODI1OCA1LjMzMzQyIDMuNjY2NjdDNS4zMzM0MiAzLjg1MDc3IDUuMTg0MTggNCA1LjAwMDA4IDRDNC44MTU5OSA0IDQuNjY2NzUgMy44NTA3NyA0LjY2Njc1IDMuNjY2NjdDNC42NjY3NSAzLjQ4MjU4IDQuODE1OTkgMy4zMzMzNCA1LjAwMDA4IDMuMzMzMzRaTTMuNjY2NzUgMy4zMzMzNEMzLjg1MDg0IDMuMzMzMzQgNC4wMDAwOCAzLjQ4MjU4IDQuMDAwMDggMy42NjY2N0M0LjAwMDA4IDMuODUwNzcgMy44NTA4NCA0IDMuNjY2NzUgNEMzLjQ4MjY1IDQgMy4zMzM0MSAzLjg1MDc3IDMuMzMzNDEgMy42NjY2N0MzLjMzMzQxIDMuNDgyNTggMy40ODI2NSAzLjMzMzM0IDMuNjY2NzUgMy4zMzMzNFpNMi4zMzM0MSAzLjMzMzM0QzIuNTE3NTEgMy4zMzMzNCAyLjY2Njc1IDMuNDgyNTggMi42NjY3NSAzLjY2NjY3QzIuNjY2NzUgMy44NTA3NyAyLjUxNzUxIDQgMi4zMzM0MSA0QzIuMTQ5MzIgNCAyLjAwMDA4IDMuODUwNzcgMi4wMDAwOCAzLjY2NjY3QzIuMDAwMDggMy40ODI1OCAyLjE0OTMyIDMuMzMzMzQgMi4zMzM0MSAzLjMzMzM0Wk0xLjAwMDA4IDMuMzMzMzRDMS4xODQxOCAzLjMzMzM0IDEuMzMzNDEgMy40ODI1OCAxLjMzMzQxIDMuNjY2NjdDMS4zMzM0MSAzLjg1MDc3IDEuMTg0MTggNCAxLjAwMDA4IDRDMC44MTU5ODYgNCAwLjY2Njc0OCAzLjg1MDc3IDAuNjY2NzQ4IDMuNjY2NjdDMC42NjY3NDggMy40ODI1OCAwLjgxNTk4NiAzLjMzMzM0IDEuMDAwMDggMy4zMzMzNFpNMS42NjY3NSAyLjY2NjY3QzEuODUwODQgMi42NjY2NyAyLjAwMDA4IDIuODE1OTEgMi4wMDAwOCAzQzIuMDAwMDggMy4xODQxIDEuODUwODQgMy4zMzMzNCAxLjY2Njc1IDMuMzMzMzRDMS40ODI2NSAzLjMzMzM0IDEuMzMzNDEgMy4xODQxIDEuMzMzNDEgM0MxLjMzMzQxIDIuODE1OTEgMS40ODI2NSAyLjY2NjY3IDEuNjY2NzUgMi42NjY2N1pNMy4wMDAwOCAyLjY2NjY3QzMuMTg0MTggMi42NjY2NyAzLjMzMzQxIDIuODE1OTEgMy4zMzM0MSAzQzMuMzMzNDEgMy4xODQxIDMuMTg0MTggMy4zMzMzNCAzLjAwMDA4IDMuMzMzMzRDMi44MTU5OSAzLjMzMzM0IDIuNjY2NzUgMy4xODQxIDIuNjY2NzUgM0MyLjY2Njc1IDIuODE1OTEgMi44MTU5OSAyLjY2NjY3IDMuMDAwMDggMi42NjY2N1pNNC4zMzM0MSAyLjY2NjY3QzQuNTE3NTEgMi42NjY2NyA0LjY2Njc1IDIuODE1OTEgNC42NjY3NSAzQzQuNjY2NzUgMy4xODQxIDQuNTE3NTEgMy4zMzMzNCA0LjMzMzQxIDMuMzMzMzRDNC4xNDkzMiAzLjMzMzM0IDQuMDAwMDggMy4xODQxIDQuMDAwMDggM0M0LjAwMDA4IDIuODE1OTEgNC4xNDkzMiAyLjY2NjY3IDQuMzMzNDEgMi42NjY2N1pNNS4wMDAwOCAyQzUuMTg0MTggMiA1LjMzMzQyIDIuMTQ5MjQgNS4zMzM0MiAyLjMzMzM0QzUuMzMzNDIgMi41MTc0MyA1LjE4NDE4IDIuNjY2NjcgNS4wMDAwOCAyLjY2NjY3QzQuODE1OTkgMi42NjY2NyA0LjY2Njc1IDIuNTE3NDMgNC42NjY3NSAyLjMzMzM0QzQuNjY2NzUgMi4xNDkyNCA0LjgxNTk5IDIgNS4wMDAwOCAyWk0zLjY2Njc1IDJDMy44NTA4NCAyIDQuMDAwMDggMi4xNDkyNCA0LjAwMDA4IDIuMzMzMzRDNC4wMDAwOCAyLjUxNzQzIDMuODUwODQgMi42NjY2NyAzLjY2Njc1IDIuNjY2NjdDMy40ODI2NSAyLjY2NjY3IDMuMzMzNDEgMi41MTc0MyAzLjMzMzQxIDIuMzMzMzRDMy4zMzM0MSAyLjE0OTI0IDMuNDgyNjUgMiAzLjY2Njc1IDJaTTIuMzMzNDEgMkMyLjUxNzUxIDIgMi42NjY3NSAyLjE0OTI0IDIuNjY2NzUgMi4zMzMzNEMyLjY2Njc1IDIuNTE3NDMgMi41MTc1MSAyLjY2NjY3IDIuMzMzNDEgMi42NjY2N0MyLjE0OTMyIDIuNjY2NjcgMi4wMDAwOCAyLjUxNzQzIDIuMDAwMDggMi4zMzMzNEMyLjAwMDA4IDIuMTQ5MjQgMi4xNDkzMiAyIDIuMzMzNDEgMlpNMS4wMDAwOCAyQzEuMTg0MTggMiAxLjMzMzQxIDIuMTQ5MjQgMS4zMzM0MSAyLjMzMzM0QzEuMzMzNDEgMi41MTc0MyAxLjE4NDE4IDIuNjY2NjcgMS4wMDAwOCAyLjY2NjY3QzAuODE1OTg2IDIuNjY2NjcgMC42NjY3NDggMi41MTc0MyAwLjY2Njc0OCAyLjMzMzM0QzAuNjY2NzQ4IDIuMTQ5MjQgMC44MTU5ODYgMiAxLjAwMDA4IDJaTTEuNjY2NzUgMS4zMzMzNEMxLjg1MDg0IDEuMzMzMzQgMi4wMDAwOCAxLjQ4MjU4IDIuMDAwMDggMS42NjY2N0MyLjAwMDA4IDEuODUwNzcgMS44NTA4NCAyIDEuNjY2NzUgMkMxLjQ4MjY1IDIgMS4zMzM0MSAxLjg1MDc3IDEuMzMzNDEgMS42NjY2N0MxLjMzMzQxIDEuNDgyNTggMS40ODI2NSAxLjMzMzM0IDEuNjY2NzUgMS4zMzMzNFpNMy4wMDAwOCAxLjMzMzM0QzMuMTg0MTggMS4zMzMzNCAzLjMzMzQxIDEuNDgyNTggMy4zMzM0MSAxLjY2NjY3QzMuMzMzNDEgMS44NTA3NyAzLjE4NDE4IDIgMy4wMDAwOCAyQzIuODE1OTkgMiAyLjY2Njc1IDEuODUwNzcgMi42NjY3NSAxLjY2NjY3QzIuNjY2NzUgMS40ODI1OCAyLjgxNTk5IDEuMzMzMzQgMy4wMDAwOCAxLjMzMzM0Wk00LjMzMzQxIDEuMzMzMzRDNC41MTc1MSAxLjMzMzM0IDQuNjY2NzUgMS40ODI1OCA0LjY2Njc1IDEuNjY2NjdDNC42NjY3NSAxLjg1MDc3IDQuNTE3NTEgMiA0LjMzMzQxIDJDNC4xNDkzMiAyIDQuMDAwMDggMS44NTA3NyA0LjAwMDA4IDEuNjY2NjdDNC4wMDAwOCAxLjQ4MjU4IDQuMTQ5MzIgMS4zMzMzNCA0LjMzMzQxIDEuMzMzMzRaTTEuMDAwMDggMC42NjY2NzJDMS4xODQxOCAwLjY2NjY3MiAxLjMzMzQxIDAuODE1OTEgMS4zMzM0MSAxLjAwMDAxQzEuMzMzNDEgMS4xODQxIDEuMTg0MTggMS4zMzMzNCAxLjAwMDA4IDEuMzMzMzRDMC44MTU5ODYgMS4zMzMzNCAwLjY2Njc0OCAxLjE4NDEgMC42NjY3NDggMS4wMDAwMUMwLjY2Njc0OCAwLjgxNTkxIDAuODE1OTg2IDAuNjY2NjcyIDEuMDAwMDggMC42NjY2NzJaTTIuMzMzNDEgMC42NjY2NzJDMi41MTc1MSAwLjY2NjY3MiAyLjY2Njc1IDAuODE1OTEgMi42NjY3NSAxLjAwMDAxQzIuNjY2NzUgMS4xODQxIDIuNTE3NTEgMS4zMzMzNCAyLjMzMzQxIDEuMzMzMzRDMi4xNDkzMiAxLjMzMzM0IDIuMDAwMDggMS4xODQxIDIuMDAwMDggMS4wMDAwMUMyLjAwMDA4IDAuODE1OTEgMi4xNDkzMiAwLjY2NjY3MiAyLjMzMzQxIDAuNjY2NjcyWk0zLjY2Njc1IDAuNjY2NjcyQzMuODUwODQgMC42NjY2NzIgNC4wMDAwOCAwLjgxNTkxIDQuMDAwMDggMS4wMDAwMUM0LjAwMDA4IDEuMTg0MSAzLjg1MDg0IDEuMzMzMzQgMy42NjY3NSAxLjMzMzM0QzMuNDgyNjUgMS4zMzMzNCAzLjMzMzQxIDEuMTg0MSAzLjMzMzQxIDEuMDAwMDFDMy4zMzM0MSAwLjgxNTkxIDMuNDgyNjUgMC42NjY2NzIgMy42NjY3NSAwLjY2NjY3MlpNNS4wMDAwOCAwLjY2NjY3MkM1LjE4NDE4IDAuNjY2NjcyIDUuMzMzNDIgMC44MTU5MSA1LjMzMzQyIDEuMDAwMDFDNS4zMzM0MiAxLjE4NDEgNS4xODQxOCAxLjMzMzM0IDUuMDAwMDggMS4zMzMzNEM0LjgxNTk5IDEuMzMzMzQgNC42NjY3NSAxLjE4NDEgNC42NjY3NSAxLjAwMDAxQzQuNjY2NzUgMC44MTU5MSA0LjgxNTk5IDAuNjY2NjcyIDUuMDAwMDggMC42NjY2NzJaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxwYXRoIGQ9Ik01LjAwMDA4IDMuMzMzMzRDNS4xODQxOCAzLjMzMzM0IDUuMzMzNDIgMy40ODI1OCA1LjMzMzQyIDMuNjY2NjdDNS4zMzM0MiAzLjg1MDc3IDUuMTg0MTggNCA1LjAwMDA4IDRDNC44MTU5OSA0IDQuNjY2NzUgMy44NTA3NyA0LjY2Njc1IDMuNjY2NjdDNC42NjY3NSAzLjQ4MjU4IDQuODE1OTkgMy4zMzMzNCA1LjAwMDA4IDMuMzMzMzRaTTMuNjY2NzUgMy4zMzMzNEMzLjg1MDg0IDMuMzMzMzQgNC4wMDAwOCAzLjQ4MjU4IDQuMDAwMDggMy42NjY2N0M0LjAwMDA4IDMuODUwNzcgMy44NTA4NCA0IDMuNjY2NzUgNEMzLjQ4MjY1IDQgMy4zMzM0MSAzLjg1MDc3IDMuMzMzNDEgMy42NjY2N0MzLjMzMzQxIDMuNDgyNTggMy40ODI2NSAzLjMzMzM0IDMuNjY2NzUgMy4zMzMzNFpNMi4zMzM0MSAzLjMzMzM0QzIuNTE3NTEgMy4zMzMzNCAyLjY2Njc1IDMuNDgyNTggMi42NjY3NSAzLjY2NjY3QzIuNjY2NzUgMy44NTA3NyAyLjUxNzUxIDQgMi4zMzM0MSA0QzIuMTQ5MzIgNCAyLjAwMDA4IDMuODUwNzcgMi4wMDAwOCAzLjY2NjY3QzIuMDAwMDggMy40ODI1OCAyLjE0OTMyIDMuMzMzMzQgMi4zMzM0MSAzLjMzMzM0Wk0xLjAwMDA4IDMuMzMzMzRDMS4xODQxOCAzLjMzMzM0IDEuMzMzNDEgMy40ODI1OCAxLjMzMzQxIDMuNjY2NjdDMS4zMzM0MSAzLjg1MDc3IDEuMTg0MTggNCAxLjAwMDA4IDRDMC44MTU5ODYgNCAwLjY2Njc0OCAzLjg1MDc3IDAuNjY2NzQ4IDMuNjY2NjdDMC42NjY3NDggMy40ODI1OCAwLjgxNTk4NiAzLjMzMzM0IDEuMDAwMDggMy4zMzMzNFpNMS42NjY3NSAyLjY2NjY3QzEuODUwODQgMi42NjY2NyAyLjAwMDA4IDIuODE1OTEgMi4wMDAwOCAzQzIuMDAwMDggMy4xODQxIDEuODUwODQgMy4zMzMzNCAxLjY2Njc1IDMuMzMzMzRDMS40ODI2NSAzLjMzMzM0IDEuMzMzNDEgMy4xODQxIDEuMzMzNDEgM0MxLjMzMzQxIDIuODE1OTEgMS40ODI2NSAyLjY2NjY3IDEuNjY2NzUgMi42NjY2N1pNMy4wMDAwOCAyLjY2NjY3QzMuMTg0MTggMi42NjY2NyAzLjMzMzQxIDIuODE1OTEgMy4zMzM0MSAzQzMuMzMzNDEgMy4xODQxIDMuMTg0MTggMy4zMzMzNCAzLjAwMDA4IDMuMzMzMzRDMi44MTU5OSAzLjMzMzM0IDIuNjY2NzUgMy4xODQxIDIuNjY2NzUgM0MyLjY2Njc1IDIuODE1OTEgMi44MTU5OSAyLjY2NjY3IDMuMDAwMDggMi42NjY2N1pNNC4zMzM0MSAyLjY2NjY3QzQuNTE3NTEgMi42NjY2NyA0LjY2Njc1IDIuODE1OTEgNC42NjY3NSAzQzQuNjY2NzUgMy4xODQxIDQuNTE3NTEgMy4zMzMzNCA0LjMzMzQxIDMuMzMzMzRDNC4xNDkzMiAzLjMzMzM0IDQuMDAwMDggMy4xODQxIDQuMDAwMDggM0M0LjAwMDA4IDIuODE1OTEgNC4xNDkzMiAyLjY2NjY3IDQuMzMzNDEgMi42NjY2N1pNNS4wMDAwOCAyQzUuMTg0MTggMiA1LjMzMzQyIDIuMTQ5MjQgNS4zMzM0MiAyLjMzMzM0QzUuMzMzNDIgMi41MTc0MyA1LjE4NDE4IDIuNjY2NjcgNS4wMDAwOCAyLjY2NjY3QzQuODE1OTkgMi42NjY2NyA0LjY2Njc1IDIuNTE3NDMgNC42NjY3NSAyLjMzMzM0QzQuNjY2NzUgMi4xNDkyNCA0LjgxNTk5IDIgNS4wMDAwOCAyWk0zLjY2Njc1IDJDMy44NTA4NCAyIDQuMDAwMDggMi4xNDkyNCA0LjAwMDA4IDIuMzMzMzRDNC4wMDAwOCAyLjUxNzQzIDMuODUwODQgMi42NjY2NyAzLjY2Njc1IDIuNjY2NjdDMy40ODI2NSAyLjY2NjY3IDMuMzMzNDEgMi41MTc0MyAzLjMzMzQxIDIuMzMzMzRDMy4zMzM0MSAyLjE0OTI0IDMuNDgyNjUgMiAzLjY2Njc1IDJaTTIuMzMzNDEgMkMyLjUxNzUxIDIgMi42NjY3NSAyLjE0OTI0IDIuNjY2NzUgMi4zMzMzNEMyLjY2Njc1IDIuNTE3NDMgMi41MTc1MSAyLjY2NjY3IDIuMzMzNDEgMi42NjY2N0MyLjE0OTMyIDIuNjY2NjcgMi4wMDAwOCAyLjUxNzQzIDIuMDAwMDggMi4zMzMzNEMyLjAwMDA4IDIuMTQ5MjQgMi4xNDkzMiAyIDIuMzMzNDEgMlpNMS4wMDAwOCAyQzEuMTg0MTggMiAxLjMzMzQxIDIuMTQ5MjQgMS4zMzM0MSAyLjMzMzM0QzEuMzMzNDEgMi41MTc0MyAxLjE4NDE4IDIuNjY2NjcgMS4wMDAwOCAyLjY2NjY3QzAuODE1OTg2IDIuNjY2NjcgMC42NjY3NDggMi41MTc0MyAwLjY2Njc0OCAyLjMzMzM0QzAuNjY2NzQ4IDIuMTQ5MjQgMC44MTU5ODYgMiAxLjAwMDA4IDJaTTEuNjY2NzUgMS4zMzMzNEMxLjg1MDg0IDEuMzMzMzQgMi4wMDAwOCAxLjQ4MjU4IDIuMDAwMDggMS42NjY2N0MyLjAwMDA4IDEuODUwNzcgMS44NTA4NCAyIDEuNjY2NzUgMkMxLjQ4MjY1IDIgMS4zMzM0MSAxLjg1MDc3IDEuMzMzNDEgMS42NjY2N0MxLjMzMzQxIDEuNDgyNTggMS40ODI2NSAxLjMzMzM0IDEuNjY2NzUgMS4zMzMzNFpNMy4wMDAwOCAxLjMzMzM0QzMuMTg0MTggMS4zMzMzNCAzLjMzMzQxIDEuNDgyNTggMy4zMzM0MSAxLjY2NjY3QzMuMzMzNDEgMS44NTA3NyAzLjE4NDE4IDIgMy4wMDAwOCAyQzIuODE1OTkgMiAyLjY2Njc1IDEuODUwNzcgMi42NjY3NSAxLjY2NjY3QzIuNjY2NzUgMS40ODI1OCAyLjgxNTk5IDEuMzMzMzQgMy4wMDAwOCAxLjMzMzM0Wk00LjMzMzQxIDEuMzMzMzRDNC41MTc1MSAxLjMzMzM0IDQuNjY2NzUgMS40ODI1OCA0LjY2Njc1IDEuNjY2NjdDNC42NjY3NSAxLjg1MDc3IDQuNTE3NTEgMiA0LjMzMzQxIDJDNC4xNDkzMiAyIDQuMDAwMDggMS44NTA3NyA0LjAwMDA4IDEuNjY2NjdDNC4wMDAwOCAxLjQ4MjU4IDQuMTQ5MzIgMS4zMzMzNCA0LjMzMzQxIDEuMzMzMzRaTTEuMDAwMDggMC42NjY2NzJDMS4xODQxOCAwLjY2NjY3MiAxLjMzMzQxIDAuODE1OTEgMS4zMzM0MSAxLjAwMDAxQzEuMzMzNDEgMS4xODQxIDEuMTg0MTggMS4zMzMzNCAxLjAwMDA4IDEuMzMzMzRDMC44MTU5ODYgMS4zMzMzNCAwLjY2Njc0OCAxLjE4NDEgMC42NjY3NDggMS4wMDAwMUMwLjY2Njc0OCAwLjgxNTkxIDAuODE1OTg2IDAuNjY2NjcyIDEuMDAwMDggMC42NjY2NzJaTTIuMzMzNDEgMC42NjY2NzJDMi41MTc1MSAwLjY2NjY3MiAyLjY2Njc1IDAuODE1OTEgMi42NjY3NSAxLjAwMDAxQzIuNjY2NzUgMS4xODQxIDIuNTE3NTEgMS4zMzMzNCAyLjMzMzQxIDEuMzMzMzRDMi4xNDkzMiAxLjMzMzM0IDIuMDAwMDggMS4xODQxIDIuMDAwMDggMS4wMDAwMUMyLjAwMDA4IDAuODE1OTEgMi4xNDkzMiAwLjY2NjY3MiAyLjMzMzQxIDAuNjY2NjcyWk0zLjY2Njc1IDAuNjY2NjcyQzMuODUwODQgMC42NjY2NzIgNC4wMDAwOCAwLjgxNTkxIDQuMDAwMDggMS4wMDAwMUM0LjAwMDA4IDEuMTg0MSAzLjg1MDg0IDEuMzMzMzQgMy42NjY3NSAxLjMzMzM0QzMuNDgyNjUgMS4zMzMzNCAzLjMzMzQxIDEuMTg0MSAzLjMzMzQxIDEuMDAwMDFDMy4zMzM0MSAwLjgxNTkxIDMuNDgyNjUgMC42NjY2NzIgMy42NjY3NSAwLjY2NjY3MlpNNS4wMDAwOCAwLjY2NjY3MkM1LjE4NDE4IDAuNjY2NjcyIDUuMzMzNDIgMC44MTU5MSA1LjMzMzQyIDEuMDAwMDFDNS4zMzM0MiAxLjE4NDEgNS4xODQxOCAxLjMzMzM0IDUuMDAwMDggMS4zMzMzNEM0LjgxNTk5IDEuMzMzMzQgNC42NjY3NSAxLjE4NDEgNC42NjY3NSAxLjAwMDAxQzQuNjY2NzUgMC44MTU5MSA0LjgxNTk5IDAuNjY2NjcyIDUuMDAwMDggMC42NjY2NzJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTMuMzMzMjUiIHk9Ii0yLjMzMzMzIiB3aWR0aD0iMTIuNjY2NyIgaGVpZ2h0PSIxMS4zMzMzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA2IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMuMDAwMDgiIHkxPSIwLjY2NjY3MiIgeDI9IjMuMDAwMDgiIHkyPSI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YwRjBGMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=");
        height: 10px;
        width: 14px;
        margin-right: 7px;
        border-radius: 1px;
    }

    .product_name+.flx {
        margin-bottom: 15px;
    }

    .title_mobile {
        margin: 0 10px;
    }

    #shopify-section-product__main .stamped-product-reviews-badge {
        padding-bottom: 0 !important;
    }
  
  	.product__information .description {
      	display: none;
  	}

    .is-width-standard .product_section .shopify-product-form {
        color: #1E415F;
    }
    .stamped-badge-caption span {
        color: #000;
    }
    .swatch_cro .product_name.title {
        font-size: 32px;
        text-align: left;
    }
    .checkmark {
        padding: 0 20px;
        margin-top: 30px;
    }
    .checkmark li {
        display: flex;
        width: 100%;
        text-align: left;
        font-size: 12px;
        color: #1E415F;
        margin-bottom: 8px;
    }
    .checkmark li::before {
        content: "";
        background-image: url(https://i.ibb.co/2W120Wv/cil-check-circle.png);
        display: inline-block;
        height: 20px;
        width: 20px;
        margin-right: 5px;
        vertical-align: middle;
        background-repeat: no-repeat;
        font-size: 12px;
    }

    .checkmark li span {
        box-sizing: border-box;
        position: absolute;
        background: #fff;
        box-shadow: 0 2px 6px rgb(0 0 0 / 25%);
        top: calc(100% + 15px);
        width: 180px;
        margin: 0 0 5px 0;
        padding: 9px 12px;
        border-radius: 4px;
        white-space: normal;
        font-size: 10px;
        font-style: normal;
        text-align: center;
        color: #1e415f;
        display: block;
        z-index: 20;
        transition: all .3s cubic-bezier(.3, 0, 0, 1);
        transform: rotateX(20deg) scale(.8);
        transform-origin: 90% 120%;
        visibility: hidden;
        opacity: 0;
        transform-origin: center 120%;
        right: 50%;
        margin-right: -90px;
    }

    .tooltip span:after {
        content: '';
        width: 14px;
        height: 14px;
        position: absolute;
        right: 50%;
        margin-right: -7px;
        top: -7px;
        background: #fff;
        box-shadow: -2px -2px 4px rgb(0 0 0 / 15%);
        transform: rotate(45deg);
    }

    .checkmark .tooltip:hover span {
        transform: rotateX(0) scale(1);
        pointer-events: auto;
        visibility: visible;
        opacity: 1;
    }

    .tooltip {
        position: relative;
        margin: 0 10px;
    }

    .checklist {
        color: #1E415F;
        list-style: none;
        font-size: 14px;
    }
    .checklist li::before {
        content: "✓";
        margin-right: 10px;
        font-weight: 700;
    }

    .swatchCustom__item {
        margin: 10px 0;
        padding: 15px;
        background: #FFFFFF;
        border: 3px solid transparent;
        border-radius: 10px;
        color: #1e415f;
        cursor: pointer;
    }
    .swatchCustom__item.swatchCustom__item--active {
        cursor: default;
        background: #F1F7FC;
        border: 3px solid #4090D1;
    }
  
    .swatchCustom__item .popular {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        background: #26A9E0;
        border-radius: 5px;
        padding: 3px 10px;
        width: fit-content;
        margin-bottom: 20px;
    }
    .swatchCustom__item .btn-how_cancel {
        font-weight: 600;
        text-decoration-line: underline;
    }
    .swatchCustom__item .how_cancet {
        font-size: 12px;
        line-height: 14px;
        padding-top: 24px;
    }
    .swatchCustom span {
        display: block;
    }
    .swatchCustom__item--first .week {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        display: block;
    }
    .swatchCustom__item--first .days {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
    }
   
    .swatchCustom__item--third {
        text-align: right;
    }
    .swatchCustom__item--third .sale {
        color: #f27113;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        display: block;
    }
    .swatchCustom__item--third .per_strip {
        font-size: 14px;
        line-height: 19px;
    }
    .swatchCustom__item--third .price {
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
    }

    .shipping-inner {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background: #f5f6f7;
        border-radius: 22px;
    }
    .is-width-standard .on-free-shipping-label {
        background: #4090D1;
        border-radius: 5px;
        color:#fff;
        padding: 5px;
        font-size: 12px;
    }
    .on-pack-wrapper {
        margin-bottom: 10px;
    }
    .on-select {
        background: none;
        width: 51%;
        border: none;
        color: inherit;
        text-decoration: underline;
        font-weight: 500;
        font-size: 13px;
    }
    .on-select:focus {
        outline: none !important;
    }
    .custom-select {
        width: 65%
    }

    .stock {
        margin: 10px 0;
    }
    .stock__header {
        font-family: Roboto;
        font-style: normal;
        color: #29C470 !important;
        font-weight: 700 !important;
        font-size: 16px !important;
        line-height: 19px !important;
        margin: 10px 0;
    }
    .stock__select {
        padding: 5px;
        background: #FFFFFF;
        border: 1px solid rgba(31, 64, 92, 0.2);
        box-sizing: border-box;
        border-radius: 5px;
        height: 35px;
        width: fit-content;
    }
    .moneyback {
        height: 150px;
        display:flex;
        align-items: center;
        padding: 0 10px;
    }
    .moneyback p{
        font-weight: 500;
        font-size: 16px;
        line-height: 126.19%;
        margin: 10px;
        color: #1E415F;
    }

    .total_price {
        font-weight: 600;
        color: #1E415F;
        font-size: 32px;
        margin-bottom: 20px;
        font-family: 'Kontora bold'!important;
    }

    .free-shipping-label {
        display: inline-block;
        color: white;
        background-color: #4090D1;
        border-radius: 5px;
        padding: 7px;
        font-size: 12px;
        margin-bottom: 20px;
        font-weight: 500;
        width: fit-content;
    }

    .part2 .free-shipping-label+.flx {
        font-size: 14px;
    }

    .part2 .free-shipping-label+.flx b{
        flex-shrink: 0;
    }

    .country_select {
        background: none;
        border: none;
        font-weight: 500;
        font-size: 13px;
        display: inline-block;
        text-decoration: underline;
        color: #1E415F;
        width: fit-content;
        -moz-appearance: none;
	    -webkit-appearance: none;
      	padding-right: 10px;
    }
  
    .for_country_select {
		position: relative;
    }
  
  	.for_country_select::after {
      content: "";
      display: block;
      background: url(https://cdn.shopify.com/s/files/1/2572/8006/t/69/assets/expandmore.svg?v=7151923608371747051655225870) center center no-repeat;
      background-size: contain;
      width: 12px;
      height: 6px;
      position: absolute;
      top: 50%;
      right: 3px;
      transform: translateY(-50%);
    }

    .delivery_date {
        font-size: 14px;
        margin-bottom: 25px;
        display: inline-block;
        color: #1E415F;
    }

    .to_checkout {
        border: none;
        text-transform: uppercase;
        color: white;
        font-size: 16px;
        padding: 14px;
        width: 100%;
        display: block;
        background: #1E415F;
        border-radius: 30px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        margin-top: auto;
        cursor: pointer;
    }

    .mobile .to_checkout {
        margin-top: 30px;
    }
    .calc-qty {
        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        border: none;
        color: #1E415F;
        width: 41px;
        background: transparent;
        outline: none;
    }
    .btn-calc {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 1px solid #1E415F;
        position: relative;
    }
    .btn-calc:before, .btn-calc_plus:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: #1E415F;
    }
    .btn-calc:before {
        width: 7px;
        height: 1px;
    }
    .btn-calc_plus:after {
        width: 1px;
        height: 7px;
    }
    .btn-calc[disabled] {
        opacity: 0.5;
    }
    
    @media (max-width: 1023px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .dark_bg {
            background: rgba(25, 25, 25, 0.8);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            display: none;
        }
        
        .dark_bg.active {
            display: block;
        }

        .variant_select_popup{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: white;
            padding: 10px;
        }

        .variant_select_popup>p {
            font-size: 17px;
            color: #1E4670;
            margin: 8px 0;
            margin-left: 15px;
        }

        .variant_select_popup>.flx {
            width: 100%;
            overflow-x: scroll;
        }

        .swatchCustom__item__mobile {
            border: 1px dashed #4090D1;
            border-radius: 10px;
            opacity: 0.6;
            padding: 10px;
            padding-top: 5px;
            min-width: 140px;
            margin: 0 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }

        .swatchCustom__item__mobile img {
            height: 60px;
            margin: 20px 0;
        }

        .swatchCustom__item__mobile .week {
            font-weight: bold;
            font-size: 16px;
            color: #1E415F;
        }

        .swatchCustom__item__mobile .days {
            font-size: 12px;
            color: #747474;
            margin: 20px 0;
        }
        
        .swatchCustom__item__mobile .sale {
            position: absolute;
            background: rgba(242, 113, 19, 0.29);
            font-size: 11px;
            color: #F27113;
            padding: 0 4px;
            top: 15px;
            left: 15px;
        }

        .swatchCustom__item__mobile .price {
            font-family: Rubik;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: 0.05em;
            color: #1E415F;
        }

        .swatchCustom__item__mobile .compare {
            font-family: Rubik;
            font-weight: 500;
            font-size: 10px;
            letter-spacing: 0.05em;
            text-decoration-line: line-through;
            color: #747474;
        }

        .swatchCustom__item--active {
            background: rgba(64, 144, 209, 0.1);
            opacity: 1;
            border: 2px solid #4090D1;
        }

        .swatchCustom__item--active .close_btn {
            position: absolute;
            top: -30px;
            right: 20px;
            font-weight: bold;
            font-size: 16px;
            color: #FFFFFF;
            text-transform: uppercase;
        }

        .select_pack {
            position: relative;
            border: 2px solid #4090D1;
            border-radius: 5px;
            background: #F1F7FC;
            padding: 10px 15px;
            color: rgb(30, 65, 95);
            font-size: 16px;
            margin: 15px 0;
            cursor: pointer;
        }

        .select_pack svg {
            position: absolute;
            width: 15px;
            top: 50%;
            right: 25px;
            transform: translateY(-50%);
        }

        .select_pack .choosen {
            font-weight: 700;
        }

        .select_pack p {
            line-height: 1;
        }

        .mobile .checklist {
            margin-bottom: 20px;
        }

        .mobile .subscribe-custom {
            margin: 20px 0;
        }

        .country_select {
            margin-bottom: 0;
        }

        .free-shipping-label {
            padding: 5px 20px;
            font-size: 16px;
        }

        .moneyback {
            justify-content: center;
        }

        .delivery_date {
            margin-bottom: 10px;
        }

        .free-shipping-label {
            margin-bottom: 10px;
        }

        .close_btn {
            position: absolute;
            top: -30px;
            right: 20px;
            transform: translateY(0);
            transition: all 0.3s ease;
            font-family: Roboto;
            font-weight: bold;
            font-size: 16px;
            color: #FFFFFF;
            text-transform: uppercase;
            background: transparent;
            border: none;
            outline: none;
        }

        .swatchCustom__item__mobile>.flx {
            align-items: center;
            justify-content: space-between;
        }

        .mobile .checklist+span {
            color: #1E415F;
            font-size: 14px;
        }
        
    }

    @media (max-width: 768px) {
        .is-width-standard .product_section {
            flex-direction: column;
        }
        .product__information.one-half {
            width: 100%;
            padding-left: 0;
        }
        .product__images.one-half {
            width: 100%;
        }
        .swatch_cro .part2, .product_name+.flx, .checklist, .product__images.one-half, .checkmark {
            display: none;
        }
        .swatch_cro .part1 {
            width: 100%;
            padding: 40px 17px;
        }
        .swatch_cro .product_name.title {
            font-size: 24px;
            line-height: 28px;
            text-align: center;
        }
        .section {
            padding: 40px 0!important;
        }
        .swatchCustom__item {
            min-height: 90px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 16px 0;
        }
        .swatchCustom__item p {
            font-size: 14px;
            line-height: 16px;
        }
        .swatchCustom__item--third .price {
            font-weight: 500;
        }
        .swatchCustom__item--third .sale {
            margin-bottom: 3px;
        }
        .to_checkout {
            font-weight: 500;
            font-size: 18px;
            padding: 17px;
            margin-top: 32px;
        }
        .qty_block {
            display: none;
        }
        .swatchCustom__item.swatchCustom__item--active .qty_block {
            display: block;
        }
        .gray_bg {
            border-radius: 10px;
        }
        .total_price {
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 0;
        }
        .stock__pack {
            font-size: 12px;
            line-height: 12px;
            color: #6D6E75;
            margin-top: 12px;
        }
        .product_section.has-padding-bottom {
            padding-bottom: 0!important
        }
        .icons__block {
            padding-bottom: 40px
        }
    }
    
    /*money back*/
    .money_back {
        padding: 100px 0;
        background-color: #f8f8f8;
    }
    
    .money_back .flx {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    .money_back>* {
        width: 95%;
        margin: 0 auto;
        max-width: 1200px;
    }
    
    .money_back h2 {
        text-align: center;
        margin-bottom: 60px;
        color: #000000;
        font-size: 36px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }
    
    .money_back .schedule {
        background-color: #fff;
        border-radius: 25px;
        margin-bottom: 60px;
        padding: 30px 10%;
    }
    
    .money_back .schedule select {
        width: fit-content;
    }
    
    .money_back .spots {
        color: #1E415F;
        font-size: 18px;
        font-weight: 700;
    }
    
    .money_back .spots>p {
        width: 200px;
        text-align: center;
        padding: 50px 35px;
        line-height: 1.1;
    }
    .money_back .spots>p:first-child {
       background: url("https://conversionratestore.github.io/projects/somnifix/img/spot1.svg") center center no-repeat;
       background-size: contain;
    }
    
    .money_back .spots>p:nth-child(2) {
       background: url("https://conversionratestore.github.io/projects/somnifix/img/spot2.svg") center center no-repeat;
       background-size: contain;
    }
    
    .money_back .spots>p:last-child {
       background: url("https://conversionratestore.github.io/projects/somnifix/img/spot3.svg") center center no-repeat;
       background-size: contain;
    }
    
    .money_back .delivery_time {
        position:relative;
    }
    
    .money_back .delivery_time>div:not(.line) {
        position:absolute;
        top: -70px;
        width: fit-content;
    }
    
    .money_back .delivery_time>div:nth-child(3) {
        left: 20%;
    }
    
    .money_back .delivery_time>div:last-child {
        left: 65%;
    }
    
    .money_back .delivery_time>div:not(.line)>p:first-child {
        font-size: 20px;
        font-weight: 700;
        color: #1E415F;
    }
    
    .money_back .delivery_time>div:not(.line)>p:nth-child(2) {
        font-size: 14px;
        color: #1E415F;
    }
    
    .money_back .delivery_time>div:not(.line)>p:last-child {
        font-size: 14px;
        margin-top: 30px;
        color: #6aadc4;
    }
    
    .money_back .line {
        margin: 85px 0 35px;
        height: 10px;
        width: 100%;
        background-color: #E3F4FF;
        border-radius: 10px;
        position:relative;
    }
    
    .money_back .line span {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #2374B5;
        position:absolute;
        top: -5px;
        left: 0;
    }
    
    .money_back .line span.point2 {
        left: calc(20% - 10px);
    }
    
    .money_back .line span.point3 {
        left: calc(65% - 10px);
    }
    
    .money_back .line p {
        height: 10px;
        width: 65%;
        background-color: #2374b5;
        border-radius: 10px;
        display: block!important;
    }
     
     @media (max-width: 768px) {
        .money_back {
          padding: 50px 0;
        } 
        
        .money_back .schedule>p {
          display: inline-block;
          margin-right: 10px;
        }
        
        .money_back h2 {
          margin-bottom: 30px;
          font-size: 24px;
        }
        
        .money_back .schedule {
          border-radius: 15px;
          margin-bottom: 25px;
          padding: 20px;
        }
        
        .money_back .schedule p {
          font-size: 12px;
          line-height: 1.2;
        }
        
        .money_back .spots>p {
          padding: 5px 22px;
          font-size: 12px;
        }
        
        .money_back .delivery_time>div:not(.line) {
            top: -55px;
        }
        
        .money_back .delivery_time>div:nth-child(3) {
          left: 30%;
        }
        
        .money_back .delivery_time>div:not(.line)>p:nth-child(2) {
            font-size: 12px;
        }
        
        .money_back .delivery_time>div:nth-child(2)>p:first-child,
        .money_back .delivery_time>div:nth-child(3)>p:first-child {
            margin-top: 14px;
            font-size: 12px;
         }
        
        .money_back .delivery_time>div:not(.line)>p:first-child {
            font-size: 12px;
            width: 150px;
        }
        
        .money_back .delivery_time>div:not(.line)>p:last-child {
            font-size: 12px;
          width:90px;
        }
        
        
        .money_back .line {
          margin: 70px 0 35px;
          height: 3px;
        }

        .money_back .line span {
          width: 9px;
          height: 9px;
          top: -3px; 
        }

        .money_back .line span.point2 {
          left: calc(30% - 10px);
        }

        .money_back .line p {
          height: 3px;
          width: 63%;
        }
      }

    /*modal*/
    .modal {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
    }
    .modal.active {
        opacity: 1;
        pointer-events: auto;
    }
    .modal_container {
        margin: auto;
        color: #1E415D;
        max-width: 507px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 20px;
        padding: 56px;
    }
    .modal_title {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        font-family: 'Roboto', sans-serif;
        color: #1E415D;
        margin-bottom: 40px;
    }
    .modal ol {
        counter-reset: pancakes;
        position: relative;
    }
    .modal ol:before {
        content: '';
        height: 100%;
        width: 0;
        border: 1px dashed #1E415D;
        left: 21px;
        top: 0;
        z-index: 0;
        position: absolute;
    }
    .modal li {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.01em;
        font-family: 'Roboto', sans-serif;
        color: #1E415D;
         list-style-type: none;
         display: flex;
         align-items: center;
         margin-bottom: 24px;
    }
    .modal li:last-child {
        margin-bottom: 0;
    }
    .modal li:before {
        content: counter(pancakes);
        counter-increment: pancakes;
        background: #1E415D;
        width: 43px;
        height: 43px;
        border-radius: 50%;
        line-height: 43px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #FFFFFF;
        margin-right: 24px;
        z-index: 1;
        position: relative;
    }
    .modal_close {
        width: 13px;
        height: 13px;
        background: url("https://conversionratestore.github.io/projects/somnifix/img/close_2.svg") no-repeat center / 100%;
        border: none;
        cursor: pointer;
    }
        
    /*slider*/
    .product-gallery__thumbnails {
        display: flex;
        overflow: hidden;
    }
    .product-gallery__thumbnail {
        flex-shrink: 0;
    }
    .product-gallery__main {
        margin-bottom: 20px;
    }
    .product-gallery__thumbnail {
        opacity: 0.3;
    }
    .product-gallery__thumbnail.one-fifth.column.is-selected {
        opacity: 1;
    }


</style>
`;

let html = `
<div class="section" style="padding: 54px 0;">
    <div class="product_section js-product_section container is-justify-space-between has-padding-bottom" style="opacity: 1;">
        <div class="product__images one-half column medium-down--one-whole">
      
            <div class="product-gallery product-gallery--bottom-thumbnails product-gallery--image-amount-12"> 
                <div class="product-gallery__main " >
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1024px" data-image-width="1024px">
                        <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_2000x.jpg?v=1605687570" data-fancybox="product__main">
                            <div class="image__container" style="max-width: 1024px">
                                <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_2000x.jpg?v=1605687570"
                                    alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="0"
                                    data-image-id="15449544917107" data-sizes="auto">
                                <noscript>
                                    <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_1200x.jpg?v=1605687570"
                                        alt="SomniFix Mouth Strips"
                                        class="lazyloaded lazyload fallbackImage"/>
                                    </noscript>
                            </div>
                        </a>
                    </div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 100%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_2000x.jpg?v=1605687570"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_2000x.jpg?v=1605687570"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="1"
                                data-image-id="15449544949875" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_1200x.jpg?v=1605687570"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 200%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="2"
                                data-image-id="15449544982643" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 300%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="3"
                                data-image-id="15449545015411" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 400%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="4"
                                data-image-id="15449545048179" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 500%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="5"
                                data-image-id="15449545080947" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 600%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="6"
                                data-image-id="15449545113715" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 700%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="7"
                                data-image-id="15449545146483" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 800%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="8"
                                data-image-id="15449545179251" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px"
                         data-image-width="1600px" style="position: absolute; left: 900%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1600px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="9"
                                data-image-id="15449545212019" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1024px"
                         data-image-width="1024px" style="position: absolute; left: 1000%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1024px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="10"
                                data-image-id="15449545244787" data-sizes="auto">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                    <div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1024px"
                         data-image-width="1024px" style="position: absolute; left: 1100%;" aria-hidden="true"><a
                            class="product-gallery__link"
                            href="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_2000x.jpg?v=1605687571"
                            data-fancybox="product__main">
                        <div class="image__container" style="max-width: 1024px"><img
                                src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_2000x.jpg?v=1605687571"
                                alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="11"
                                data-image-id="15449545277555" data-sizes="auto"
                                sizes="480px">
                            <noscript><img
                                    src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_1200x.jpg?v=1605687571"
                                    alt="SomniFix Mouth Strips"
                                    class="lazyloaded lazyload fallbackImage"/></noscript>
                        </div>
                    </a></div>
                </div>
                <div class="product-gallery__thumbnails" >
                    <div class="product-gallery__thumbnail one-fifth column " data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_400x.jpg?v=1605687570"
                            alt="SomniFix Mouth Strips" data-index="0" data-image-id="15449544917107"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column " data-title="SomniFix Mouth Strips">
                         <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_400x.jpg?v=1605687570"
                            alt="SomniFix Mouth Strips" data-index="1" data-image-id="15449544949875"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="2" data-image-id="15449544982643"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="3" data-image-id="15449545015411"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="4" data-image-id="15449545048179"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="5" data-image-id="15449545080947"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips"
                         style="position: absolute; left: 120%;" aria-hidden="true"><img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="6" data-image-id="15449545113715"
                            data-featured-image="15449544917107"></div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="7" data-image-id="15449545146483"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="8" data-image-id="15449545179251"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="9" data-image-id="15449545212019"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                        <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="10" data-image-id="15449545244787"
                            data-featured-image="15449544917107">
                    </div>
                    <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">
                         <img
                            src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_400x.jpg?v=1605687571"
                            alt="SomniFix Mouth Strips" data-index="11" data-image-id="15449545277555"
                            data-featured-image="15449544917107">
                    </div>
                </div>
            </div>
        </div>

        <div class="product__information has-product-sticker one-half column medium-down--one-whole">
            <div class="swatch_cro">
                <div class="flx desktop">
                    <div class="part1 gray_bg">
                        <h1 class="product_name title">SomniFix Mouth Strips</h1>
            
                        <div class="flx"> 
                            <a href="/pages/reviews" class="stamped-product-reviews-badge stamped-main-badge" data-id="4617243754611" style="display: inline-block;">
                                <span class="stamped-badge" data-rating="4.8" data-lang="" aria-label="Rated 4.8 out of 5 stars 4126reviews"><span class="stamped-starrating stamped-badge-starrating" aria-hidden="true"><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i></span><span class="stamped-badge-caption" data-reviews="4126" data-rating="4.8" data-label="reviews" aria-label="4126 reviews" data-version="2">4126<span style="display:none;"> reviews</span></span></span>
                            </a> 
                            <span class="made_in">Made in USA</span>
                        </div>
            
                        <ul class="checklist">
                            <li>Promote nose breathing</li>
                            <li>Reduce open-mouth snoring</li>
                            <li>Boost CPAP exprerience</li>
                            <li>Improve sleep quality</li>
                        </ul>
            
                    </div>
            
                    <div class="part2 gray_bg">
                        <p class="total_price">$<span>49.97</span> USD</p>
                        <span class="free-shipping-label">Free Shipping</span>
                        <div class="flx">
                            <b>Ship to:</b>
                            <label class="for_country_select">
                                <select class="country_select" name="country">${optionShipTo()}</select>
                            </label>
                        </div>
                
                        <span class="delivery_date">Arrives: <b></b> </span>
            
                        <h4 class="stock__header">In Stock.</h4>
                        <select class="stock__select" disabled>${qty()}</select>
                        <p class="stock__pack">1 pack = <span>84</span> strips</p>
            
                        <button class="to_checkout">Add to cart</button>
                    </div>
                </div>
                <div class="flx desktop">
                    <ul class="checkmark part1">
                        <li>4 out of 5 customers say they sleep better using SomniFix</li>
                        <li>Hypoallergenic and good for sensitive skin
                            <div class="tooltip">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 0.749939C3.77386 0.749939 0.75 3.7738 0.75 7.49994C0.75 11.2261 3.77386 14.2499 7.5 14.2499C11.2261 14.2499 14.25 11.2261 14.25 7.49994C14.25 3.7738 11.2261 0.749939 7.5 0.749939ZM7.375 10.1249V7.37494H7.625V10.1249H7.375ZM7.375 5.12494V4.87494H7.625V5.12494H7.375Z" stroke="#4090D1"/>
                                </svg>
                                <span>The hypoallergenic, silicone-based adhesive is very gentle on sensitive skin and lips. Many SomniFix users say the strip feels like a second skin.</span>
                            </div>
                        </li>
                        <li>Does not block breathing
                            <div class="tooltip">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 0.749939C3.77386 0.749939 0.75 3.7738 0.75 7.49994C0.75 11.2261 3.77386 14.2499 7.5 14.2499C11.2261 14.2499 14.25 11.2261 14.25 7.49994C14.25 3.7738 11.2261 0.749939 7.5 0.749939ZM7.375 10.1249V7.37494H7.625V10.1249H7.375ZM7.375 5.12494V4.87494H7.625V5.12494H7.375Z" stroke="#4090D1"/>
                                </svg>
                                <span>Breathing vent allows for mouth breathing anytime if necessary.  Although the breathing vent allows for mouth breathing, normal breathing with the strip will be nasal.</span>
                            </div>
                        </li>
                        <li>CPAP-friendly with nasal mask or nasal pillows
                            <div class="tooltip">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 0.749939C3.77386 0.749939 0.75 3.7738 0.75 7.49994C0.75 11.2261 3.77386 14.2499 7.5 14.2499C11.2261 14.2499 14.25 11.2261 14.25 7.49994C14.25 3.7738 11.2261 0.749939 7.5 0.749939ZM7.375 10.1249V7.37494H7.625V10.1249H7.375ZM7.375 5.12494V4.87494H7.625V5.12494H7.375Z" stroke="#4090D1"/>
                                </svg>
                                <span>SomniFix is not a standalone solution for sleep apnea, and is not indicated to be used by those with sleep apnea unless used in combination with CPAP.</span>
                            </div>
                        </li>
                    </ul>
                    <div class="part2 moneyback">
                        <img src="https://i.ibb.co/kXqgv3n/image-44-2.png" alt="moneyback"/><p>30-day <br /> Money-Back <br />Guarantee</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="money_back" id="money_back">
    <h2>Money back guarantee</h2>
    <div class="schedule">
        <p>Ship to:</p>
        <label class="for_country_select">
            <select class="country_select" name="country">${optionShipTo()}</select>
        </label>
        <div class="delivery_time">
            <div class="line">
                <span class="point1"></span>
                <span class="point2"></span>
                <span class="point3"></span>
                <p></p>
            </div>
            <div>
                <p>Buy SomniFix</p>
                <p>Today</p>
                <p class="today">Jun 17, 2021</p>
            </div>
            <div>
                <p>Shipping</p>
                <p>9-11 days</p>
                <p class="delivery_date">Jun 18-21, 2021</p>
            </div>
            <div>
                <p>100% money back guarantee through</p>
                <p>After 30 days</p>
                <p class="money_back_date">Jul 17, 2021</p>
            </div>
        </div>
    </div>
    <div class="flx spots">
        <p><img src="https://conversionratestore.github.io/projects/somnifix/img/check.svg" alt="check"><br>Free US shipping and returns</p>
        <p><img src="https://conversionratestore.github.io/projects/somnifix/img/check.svg" alt="check"><br>30-day money back guarantee</p>
        <p><img src="https://conversionratestore.github.io/projects/somnifix/img/check.svg" alt="check"><br>Made in USA</p>
    </div>
</div>
`;

//modal
let modalHtml = `
<div class="modal" button-close>
    <div class="modal_container">
        <div class="justify-between">
            <h4 class="modal_title">3 easy steps to cancel the <br> subscription. No questions asked</h4>
            <button type="button" class="modal_close" button-close></button>
        </div>
        <ol>
            <li>Go to the Account</li>
            <li>Go to “Orders” section</li>
            <li>Open your order details and click “Cancel”</li>
        </ol>
    </div>
</div>`

//icons block (mobile)
let iconsHtml = `
<div class="justify-between items-center icons__block">
    <img src='https://conversionratestore.github.io/projects/somnifix/img/icon1.svg' alt='icon'>
    <img src='https://conversionratestore.github.io/projects/somnifix/img/icon2.svg' alt='icon'>
    <img src='https://conversionratestore.github.io/projects/somnifix/img/icon3.svg' alt='icon'>
</div>
`

let qtyHtml = `
<div class="justify-between items-center">
    <div class="col-left">
        <div class="items-center calc"> 
            <button class="btn-calc btn-calc_minus" type="button" disabled></button>
            <input class="calc-qty" type="number" value="1" name="quantity" readonly>
            <button class="btn-calc btn-calc_plus" type="button" disabled></button>
        </div>
    </div>
</div>`

let startMain = setInterval(function () {
    if(document.querySelectorAll('.shogun-root > .shg-box-vertical-align-wrapper .shg-box-vertical-align-wrapper')[5] != null) {
        clearInterval(startMain)
        //add html and style

        document.querySelectorAll('.shogun-root > .shg-box-vertical-align-wrapper')[1].querySelectorAll('.shg-box-vertical-align-wrapper')[4].insertAdjacentHTML('beforebegin', html);
        document.body.insertAdjacentHTML('afterbegin', style);
        document.body.insertAdjacentHTML('beforeend', modalHtml);
       
        //swatch packs
        for (let i = 0; i < objVariants.length; i++) {
            let switchItem = `
            <div class="swatchCustom__item ${objVariants[i].active}" data-variant="${objVariants[i].variantId}" data-title="${objVariants[i].title}" data-price="${objVariants[i].price}">
                ${objVariants[i].popular == true ? `<div class="popular">Most Popular</div>` : ''}
                <div class="justify-between w-100">
                    <div class="swatchCustom__item--first">
                        <span class="week">${objVariants[i].week}</span>
                        <span class="days">${objVariants[i].days}</span>
                    </div>
                    <div class="swatchCustom__item--third">
                        ${objVariants[i].sale != '' ? '<span class="sale">' + objVariants[i].sale + '</span>' :''}
                        <p>
                            <span class="price">${objVariants[i].price} USD </span>
                            <span class="per_strip">($${objVariants[i].perStrip} per strip)</span>
                        </p>
                    </div>
                </div>
                ${objVariants[i].popular == true ? `<p class="how_cancet">Auto delivery every 3 months. <br> Cancel anytime. <a href="#" class="btn-how_cancel">How to cancel?</a></p>` : ''}  
            </div>`
            document.querySelector('.part1 .checklist').insertAdjacentHTML('afterend', switchItem);
        }

        if (window.innerWidth < 768) {
            document.querySelectorAll('.part1 .swatchCustom__item')[2].after(document.querySelector('.part2 .to_checkout'))
            document.querySelectorAll('.part1 .swatchCustom__item')[2].insertAdjacentHTML('afterend', qtyHtml)
            document.querySelector('.col-left').after(document.querySelector('.total_price'))
            document.querySelector('.col-left .calc').after(document.querySelector('.stock__pack'))
            document.querySelector('.money_back').insertAdjacentHTML('beforebegin', iconsHtml);
            document.querySelectorAll('.btn-calc').forEach(button => {
                button.addEventListener('click', (e) => {
                    if (button.classList.contains('btn-calc_minus')) {
                        changeQty(document.querySelector('.calc-qty'), 'minus')
                    } else {
                        changeQty(document.querySelector('.calc-qty'), 'plus')
                    }
                    let price = +document.querySelector('.swatchCustom__item.swatchCustom__item--active').dataset.price;
                    let total = (price * document.querySelector('.calc-qty').value).toFixed(2);
                    document.querySelector('.total_price span').innerHTML = total;
                })
            })
        }

        $('.product_section .swatchCustom__item').click(function(e) {
            if(!$(this).hasClass('swatchCustom__item--active')) {
                $(this).siblings().removeClass('swatchCustom__item--active')
                $(this).addClass('swatchCustom__item--active')
                document.querySelector('.stock__select').disabled = false

                let price = $(this).data('price')

                $('.total_price span').text(price)
                $('.stock__select').val('1')
                $('.calc-qty').val('1')
                if($(this).data('title') === '3 Pack') {
                    $('.stock__pack span').text('84')
                    $('.stock__select').removeAttr('disabled')
                    $('.btn-calc_plus').removeAttr('disabled')
                } else if($(this).data('title') === '12 Pack') {
                    $('.stock__pack span').text('84')
                    $('.stock__select').attr('disabled','')
                    $('.btn-calc').attr('disabled','')
                } else {
                    $('.stock__pack span').text('28')
                    $('.stock__select').removeAttr('disabled')
                    $('.btn-calc_plus').removeAttr('disabled')
                }
            }
            if (!e.target.closest('.stock__select')){
                if ($(this).index() == 3) {
                    pushDataLayer('Click on 12-week pack subscription', 'Choose your pack')
                } else if ($(this).index() == 4) {
                    pushDataLayer('Click on 12-week pack', 'Choose your pack')
                } else {
                    pushDataLayer('Click on 4 week pack', 'Choose your pack')
                }
            }
          
        })
        //set date of arrives
        $('.delivery_date b').html($('.country_select option:selected').attr('data-value'))

        // calculating the total price
        $('.stock__select').change(function() {
            let price = +$('.swatchCustom__item.swatchCustom__item--active').data('price')
            let total = (price * document.querySelector(".stock__select").value).toFixed(2)
            $('.total_price span').text(total)
            pushDataLayer('Click on Quantity option', 'SomniFix Mouth Strips')
        })

        // select delivery country
        $('.country_select').change(function() {
            $('.delivery_date b').text($(this).find(':selected').data('value'))
            if($(this).find(':selected').data('free') !== 'free') {
                $('.free-shipping-label').text(`Shipping from ${$(this).find(':selected').data('free')}`)
            } else {
                $('.free-shipping-label').text(`Free Shipping`)
            }
        })
        $('.country_select').click(function() {
            if ($(this).closest('.money_back')) {
                pushDataLayer('Click on Ship to select', 'Money back guarantee')
            } else {
                pushDataLayer('Click on Ship to select', 'SomniFix Mouth Strips')
            }
        })

        //modal show/hide
        $('.btn-how_cancel').click(function(e) {
            e.stopImmediatePropagation()
            $('.modal').addClass('active');
            pushDataLayer('How to cancel?', 'SomniFix Mouth Strips')
        })
        $('[button-close]').click(function(e) {
            e.stopImmediatePropagation()
            if (e.target.className == 'modal active' || e.target.className == 'modal_close') {
                $('.modal').removeClass('active');
                pushDataLayer('Close popup', 'Popup: How to cancel')
            }
        })
        //event review
        $('.stamped-main-badge').click(function() {
            pushDataLayer('Click on Reviews button', 'SomniFix Mouth Strips')
        })

        //add to cart
        $('.swatch_cro .to_checkout').click(function() {
            const itemId = document.querySelector(".swatchCustom__item--active").dataset.variant;
            const itemQuantity = window.innerWidth < 768 ? document.querySelector(".calc-qty").value : document.querySelector(".stock__select").value;

            if (itemId === '30282132226091') {
                addItemToCart("30282132226091", 1, "3", "Month", "95310");
            } else {
                let formData = {
                    'items': [{
                        'id': itemId,
                        'quantity': itemQuantity
                    }]
                };
                fetch('/cart/add.js', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                }).then(response => {
                    return response.json();
                }).then(data => {
                    if (window.stackable) {
                        window.stackable.checkOut(null, new Event('Stackable Checkout'))
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                });
            }

            pushDataLayer('Add to cart', 'SomniFix Mouth Strips')
        })
    }
})

let startSlider = setInterval(function () {
    if (document.querySelector('.product-gallery__main') != null && document.querySelector('.product-gallery__thumbnails') != null && window.innerWidth > 768) {
        if (typeof Flickity === 'function') {
            console.log(typeof Flickity)
            clearInterval(startSlider)
            console.log('silder interval')
            new Flickity(document.querySelector('.product-gallery__main'), {
                contain: true,
                pageDots: false,
                freeScroll: true,
                groupCells: 1,
                asNavFor: '.product-gallery__thumbnails',
            });
            new Flickity(document.querySelector('.product-gallery__thumbnails'), {
                contain: true,
                pageDots: false,
                asNavFor: '.product-gallery__main',
            });
        }
    }
}, 200)

//Money back guarantee
let start = setInterval(function () {
    if (document.querySelectorAll('.for_country_select') && document.querySelectorAll('.delivery_time') && document.querySelector('.money_back') != null) {
        clearInterval(start)

        let link = `
          <div class="navbar-item header__item " data-navlink-handle="guarantee"> 
              <a href="#" class="navbar-link header__link  is-arrowless to_money_back">guarantee</a>
          </div>
		`

        document.querySelector('nav.header__menu-items').insertAdjacentHTML('beforeend', link)

        document.querySelector('.to_money_back').addEventListener('click', function (e) {
            e.preventDefault()
            document.querySelector('#money_back').scrollIntoView({behavior: "smooth"})
        })

        document.querySelector('.money_back select').addEventListener('change', function (e) {
            document.querySelectorAll('select[name="country"]')[0].value = this.value
            document.querySelectorAll('select[name="country"]')[1].value = this.value
            let d = e.target.options[e.target.selectedIndex].dataset.value
            document.querySelectorAll('.delivery_date b')[0].innerHTML = d
            // document.querySelectorAll('.delivery_date b')[1].innerHTML = d
            setDateDelivery(d)
        })

        document.querySelectorAll('select[name="country"]')[0].addEventListener('change', function (e) {
            document.querySelector('.money_back select').value = this.value
            document.querySelectorAll('select[name="country"]')[1].value = this.value
            let d = e.target.options[e.target.selectedIndex].dataset.value
            setDateDelivery(d)
        })

        document.querySelectorAll('select[name="country"]')[1].addEventListener('change', function (e) {
            document.querySelector('.money_back select').value = this.value
            document.querySelectorAll('select[name="country"]')[0].value = this.value
            let d = e.target.options[e.target.selectedIndex].dataset.value
            setDateDelivery(d)
        })

        function setDateDelivery (str) {
            let parseStr = str.split(' ').filter((item) => item !== '-')
            let day = new Date().getDate()
            let month = new Date().getMonth();
            let year = new Date().getFullYear()
            let parceObj = obj[document.querySelector('.country_select').selectedIndex].split('/');
            let parceDays = parceObj[1].split('-');
            let daysLag1 = addDays(+parceDays[0])
            let daysLag2 = addDays(+parceDays[1])
            let day1 = +parceDays[0] + 30;
            let day2 = +parceDays[1] + 30;
            let daysLag3 = addDays(day1)
            let daysLag4 = addDays(day2)

            document.querySelector('.delivery_time>div:nth-child(3)>p:nth-child(2)').innerHTML = `${parceObj[1]} days`
            document.querySelector('.delivery_time .today').innerHTML = `${formatDate[month]} ${day}, ${year}`
            document.querySelector('.delivery_time .delivery_date').innerHTML = `${formatDate[daysLag1.getMonth()]} ${daysLag1.getDate()} - ${formatDate[daysLag2.getMonth()]} ${daysLag2.getDate()}, ${year}`
            document.querySelector('.delivery_time .money_back_date').innerHTML = `${formatDate[daysLag3.getMonth()]} ${daysLag3.getDate()} - ${formatDate[daysLag4.getMonth()]} ${daysLag4.getDate()}, ${daysLag3.getFullYear()}  `
        }

        let firstStr = document.querySelector('.delivery_date b').innerText

        setDateDelivery(firstStr);
    }
}, 100);

//banner
let banner = `
<div class="wrap-banner">
    <div class="row-banner">
        ${window.innerWidth <= 768 ? '<h1>Save 30% when you schedule repeat deliveries</h1>': ''}
        <img src="https://conversionratestore.github.io/projects/somnifix/img/${window.innerWidth > 768 ? 'image5.png' : 'image6.png'}" alt="image">
        <div class="banner">
             ${window.innerWidth > 768 ? '<h1>Save 30% when you schedule repeat deliveries</h1>': ''}
            <ul class="banner_list">
                <li>Cancel anytime</li>
                <li>Free US shipping</li>
            </ul>
            <a href="/pages/reviews" class="stamped-product-reviews-badge stamped-main-badge" data-id="4617243754611" style="display: inline-block;">
                <span class="stamped-badge" data-rating="4.8" data-lang="" aria-label="Rated 4.8 out of 5 stars 4126reviews">
                <span class="stamped-starrating stamped-badge-starrating" aria-hidden="true"><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" style="color: rgb(242, 180, 19) !important;" aria-hidden="true"></i></span><span class="stamped-badge-caption" data-reviews="4126" data-rating="4.8" data-label="reviews" aria-label="4126 reviews" data-version="2">4126<span style="display:none;"> reviews</span></span></span>
            </a>
            <p><b>3-month pack,</b> 84 strips </p>
            <p class="banner_price-old">$71.97 USD</p>
            <p class="banner_price">$49.97 USD</p>
            <p class="fs-12">Auto delivery every 3 months</p>
            <button type="button" class="banner_btn">ADD TO CART</button>
         </div>
    </div>
</div>`

let startBanner = setInterval(function () {
    if (document.querySelector('.shogun-image-content > div > .shg-c') != null && document.querySelector('.shg-row') != null) {
        clearInterval(startBanner)

        if (window.matchMedia('(min-width: 992px)')) {
            document.querySelectorAll('body > div.shogun-root > .shg-box-vertical-align-wrapper:nth-child(6) .shogun-image-content')[0].style.position = 'relative'

            document.querySelectorAll('.shogun-image-content > div > .shg-c')[0].style = `margin: 0;`;
            document.querySelectorAll('.shg-box-content > div > img.shogun-image')[1].style = 'display: none!important;';
            document.querySelectorAll('.shg-row')[0].innerHTML = banner;
        }
        if (window.matchMedia('(max-width: 991px)')) {
            document.querySelectorAll('body > div.shogun-root > .shg-box-vertical-align-wrapper:nth-child(6) .shogun-image-content')[1].style.position = 'relative'

            document.querySelectorAll('.shogun-image-content > div > .shg-c')[1].style = `margin: 0;`;
            document.querySelectorAll('.shg-box-content > div > img.shogun-image')[2].style = 'display: none!important;';
            document.querySelectorAll('.shg-row')[1].innerHTML = banner;
        }

        if (window.matchMedia('(max-width: 767px)')) {
            document.querySelectorAll('.shg-box')[0].innerHTML = banner;
        }

        document.querySelectorAll('.shg-row')[0].innerHTML = banner

        document.querySelector('.banner_btn').addEventListener('click', (e) => {
            addItemToCart("30282132226091", 1, "12", "Month", "95310");
            pushDataLayer('Add to cart', 'Save 30% when you schedule repeat deliveries')
        })
    }
})

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Subscription redesign 1',
    'eventAction': 'loaded'
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('event', 'subscription_redesign_1');
