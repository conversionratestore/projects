     
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
let formatDate = {
    '1':'Jan',
    '2':'Feb',
    '3':'Mar',
    '4':'Apr',
    '5':'May',
    '6':'Jun',
    '7':'Jul',
    '8':'Aug',
    '9':'Sep',
    '10':'Oct',
    '11':'Nov',
    '12':'Dec'
}
//new Date add days
function addDays(days) {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return result;
}
 
optionShipTo = () => {
    let option = '';
    for (let i = 0; i < obj.length; i++) {
        let elements = obj[i].split('/');
            plusDays = elements[1].split('-');

        let minDay = addDays(+plusDays[0]),
            maxDay = addDays(+plusDays[1]);

        option += `<option value="${elements[0]}" data-free="${elements[2]}" data-value="${minDay.getDate()} ${formatDate[minDay.getMonth()]} - ${maxDay.getDate()}  ${formatDate[maxDay.getMonth()]}">${elements[0]}</option>`;  
    }
   
    return option
}

let objVariants = [
    {
        'variantId': '32115046023283',
        'title': '1 Pack',
        'week' :'4 week pack',
        'days':'28 strips',
        'sale':'',
        'price': '23.99',
        'popular': false,
        'perStrip':'0.86',
        'active':'',
    },
    {
        'variantId': '32115046056051',
        'title': '3 Pack',
        'week' :'12 week pack',
        'days':'84 strips',
        'sale':'Save 22%',
        'price': '55.97',
        'popular': false,
        'perStrip':'0.67',
        'active':'',
    },
    {
        'variantId': '32115046940787',
        'title': '12 Pack',
        'week' :'52 week pack',
        'days':'364 strips',
        'sale':'Save 30%',
        'price': '219.97',
        'popular': true,
        'perStrip':'0.59',
        'active':'swatchCustom__item--active nosale',
    },
]

//qty stock
qty = () => {
    let i = 1,
        option = ``;

    while (i <= 20) {
        option += `<option value="${i}">Qty: ${i}</option>`;
        i++
    }

    return option
}

let style = `
<style>
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
    .swatchCustom__item.swatchCustom__item--active .popular, .swatchCustom__item.swatchCustom__item--active .how_cancet, .swatchCustom__item.swatchCustom__item--active .swatchCustom__item--first .week span  {
        display: block;
    }
    .swatchCustom__item .popular {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        background: #26A9E0;
        border-radius: 5px;
        padding: 3px 10px;
        display: none;
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
        display: none;
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
    .swatchCustom__item--first .week span {
        display: none;
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
    .subscribe-custom {
        display: block;
        color: #1E415F;
        background: #FEF7E7;
        border: 1px solid #F2B413;
        border-radius: 10px;
        padding: 15px;
        margin: 10px 0;
    }
    .subscribe-custom p{
        font-size: 12px;
        line-height: 17px !important;
        font-weight: 400;

    }
    h5.subscribe-custom__header {
        font-family: "Roboto";
        font-weight: 500;
        display: inline;
        font-size: 14px;
        line-height: 16px;
        color: #1E415F;
    }
    .subscribe-custom__header span{
        color: #F27113;
    }
    .subscribe-custom__checkbox {
        transform: scale(1.4);
        margin: 0 5px 0 0;

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
</style>
`;

let html = `
<div class="section" style="padding: 54px 0;">
    <div class="product_section js-product_section container is-justify-space-between has-padding-bottom" style="opacity: 1;">
        <div class="product__images one-half column medium-down--one-whole">
            <div class="dynamic_nav invisible"> 
                <ul class="dynamic_nav_list"> 
                    <li><a data-scroll="recomendedmedical" href=".recomendedmedical" class="">What doctors say</a></li> 
                    <li><a data-scroll="howandwhysomnifixworks1" href=".howandwhysomnifixworks">How SomniFix works</a></li> 
                    <li><a data-scroll="easytoapplyandeasytotakeoff1" href=".easytoapplyandeasytotakeoff">How to use</a></li> 
                    <li><a data-scroll="peopleloveus1" href=".peopleloveus">Important information</a></li> 
                    <li><a data-scroll="donotusesomnifixifyou1" href=".donotusesomnifixifyou">When to not use SomniFix</a></li> 
                    <li><a data-scroll="somnifixworksgreatwith1" href=".somnifixworksgreatwith">Compatibility with other appliances</a></li> 
                    <li><a data-scroll="somnifixvsothersleepproducts1" href=".somnifixvsothersleepproducts">Comparison with other sleep products</a></li>
                </ul> 
                <div class="arrow-ico">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.468876 8.969C0.538544 8.89915 0.621308 8.84374 0.712426 8.80593C0.803543 8.76812 0.901225 8.74866 0.999876 8.74866C1.09853 8.74866 1.19621 8.76812 1.28733 8.80593C1.37844 8.84374 1.46121 8.89915 1.53088 8.969L9.99988 17.4395L18.4689 8.969C18.6097 8.82817 18.8007 8.74905 18.9999 8.74905C19.199 8.74905 19.39 8.82817 19.5309 8.969C19.6717 9.10983 19.7508 9.30083 19.7508 9.5C19.7508 9.69916 19.6717 9.89017 19.5309 10.031L10.5309 19.031C10.4612 19.1008 10.3784 19.1563 10.2873 19.1941C10.1962 19.2319 10.0985 19.2513 9.99988 19.2513C9.90122 19.2513 9.80354 19.2319 9.71243 19.1941C9.62131 19.1563 9.53854 19.1008 9.46888 19.031L0.468876 10.031C0.399031 9.96133 0.343617 9.87857 0.305807 9.78745C0.267997 9.69633 0.248535 9.59865 0.248535 9.5C0.248535 9.40135 0.267997 9.30366 0.305807 9.21255C0.343617 9.12143 0.399031 9.03867 0.468876 8.969Z" fill="#1E415F"></path> 
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.468876 0.968998C0.538544 0.899153 0.621308 0.843739 0.712426 0.805929C0.803543 0.76812 0.901225 0.748657 0.999876 0.748657C1.09853 0.748657 1.19621 0.76812 1.28733 0.805929C1.37844 0.843739 1.46121 0.899153 1.53088 0.968998L9.99988 9.4395L18.4689 0.968998C18.5386 0.899266 18.6214 0.843952 18.7125 0.806213C18.8036 0.768475 18.9013 0.749051 18.9999 0.749051C19.0985 0.749051 19.1961 0.768475 19.2873 0.806213C19.3784 0.843952 19.4611 0.899266 19.5309 0.968998C19.6006 1.03873 19.6559 1.12151 19.6937 1.21262C19.7314 1.30373 19.7508 1.40138 19.7508 1.5C19.7508 1.59861 19.7314 1.69626 19.6937 1.78737C19.6559 1.87848 19.6006 1.96127 19.5309 2.031L10.5309 11.031C10.4612 11.1008 10.3784 11.1563 10.2873 11.1941C10.1962 11.2319 10.0985 11.2513 9.99988 11.2513C9.90122 11.2513 9.80354 11.2319 9.71243 11.1941C9.62131 11.1563 9.53854 11.1008 9.46888 11.031L0.468876 2.031C0.399031 1.96133 0.343617 1.87857 0.305807 1.78745C0.267997 1.69633 0.248535 1.59865 0.248535 1.5C0.248535 1.40135 0.267997 1.30367 0.305807 1.21255C0.343617 1.12143 0.399031 1.03867 0.468876 0.968998Z" fill="#1E415F"></path>
                    </svg>
                </div>
            </div>
            <div class="product-gallery product-gallery--bottom-thumbnails product-gallery--image-amount-12"> 
                <div class="product-gallery__main flickity-enabled is-draggable flickity-resize" tabindex="0">            
                    <div class="flickity-viewport" style="height: 435.469px; touch-action: pan-y;"><div class="flickity-slider" style="left: 0px; transform: translateX(0%);"><div class="product-gallery__image is-selected" data-title="SomniFix Mouth Strips" data-image-height="1024px" data-image-width="1024px" style="position: absolute; left: 0%;"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_2000x.jpg?v=1605687570" data-fancybox="product__main"> <div class="image__container" style="max-width: 1024px"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_2000x.jpg?v=1605687570" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="0" data-image-id="15449544917107" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_2000x.jpg?v=1605687570" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_200x.jpg?v=1605687570 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_400x.jpg?v=1605687570 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_600x.jpg?v=1605687570 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_800x.jpg?v=1605687570 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_1200x.jpg?v=1605687570 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_2000x.jpg?v=1605687570 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_1200x.jpg?v=1605687570"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 100%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_2000x.jpg?v=1605687570" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_2000x.jpg?v=1605687570" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="1" data-image-id="15449544949875" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_2000x.jpg?v=1605687570" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_200x.jpg?v=1605687570 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_400x.jpg?v=1605687570 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_600x.jpg?v=1605687570 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_800x.jpg?v=1605687570 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_1200x.jpg?v=1605687570 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_2000x.jpg?v=1605687570 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_1200x.jpg?v=1605687570"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 200%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="2" data-image-id="15449544982643" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 300%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="3" data-image-id="15449545015411" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 400%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="4" data-image-id="15449545048179" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 500%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px; background: none;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="5" data-image-id="15449545080947" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 600%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px; background: none;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="6" data-image-id="15449545113715" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 700%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px; background: none;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="7" data-image-id="15449545146483" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 800%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px; background: none;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="8" data-image-id="15449545179251" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1600px" data-image-width="1600px" style="position: absolute; left: 900%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1600px; background: none;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="9" data-image-id="15449545212019" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1024px" data-image-width="1024px" style="position: absolute; left: 1000%;" aria-hidden="true"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1024px; background: none;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="10" data-image-id="15449545244787" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div><div class="product-gallery__image" data-title="SomniFix Mouth Strips" data-image-height="1024px" data-image-width="1024px" aria-hidden="true" style="position: absolute; left: -100%;"> <a class="product-gallery__link" href="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_2000x.jpg?v=1605687571" data-fancybox="product__main"> <div class="image__container" style="max-width: 1024px; background: none;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_2000x.jpg?v=1605687571" alt="SomniFix Mouth Strips" class="lazyload--fade-in lazyautosizes lazyloaded" data-index="11" data-image-id="15449545277555" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_2000x.jpg?v=1605687571" srcset="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_200x.jpg?v=1605687571 200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_400x.jpg?v=1605687571 400w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_600x.jpg?v=1605687571 600w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_800x.jpg?v=1605687571 800w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_1200x.jpg?v=1605687571 1200w,
                //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_2000x.jpg?v=1605687571 2000w" sizes="435px"> <noscript> <img  src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_1200x.jpg?v=1605687571"
            alt="SomniFix Mouth Strips"
            class="lazyloaded lazyload fallbackImage" /></noscript></div></a></div></div></div><button class="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z" class="arrow"></path></svg></button><button class="flickity-button flickity-prev-next-button next" type="button" aria-label="Next"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button><ol class="flickity-page-dots"><li class="dot is-selected" aria-label="Page dot 1" aria-current="step"></li><li class="dot" aria-label="Page dot 2"></li><li class="dot" aria-label="Page dot 3"></li><li class="dot" aria-label="Page dot 4"></li><li class="dot" aria-label="Page dot 5"></li><li class="dot" aria-label="Page dot 6"></li><li class="dot" aria-label="Page dot 7"></li><li class="dot" aria-label="Page dot 8"></li><li class="dot" aria-label="Page dot 9"></li><li class="dot" aria-label="Page dot 10"></li><li class="dot" aria-label="Page dot 11"></li><li class="dot" aria-label="Page dot 12"></li></ol></div> <div class="product-gallery__thumbnails product-gallery__thumbnails--bottom-thumbnails is-slide-nav--true flickity-enabled is-draggable flickity-resize" tabindex="0">            <div class="flickity-viewport" style="height: 74.0938px; touch-action: pan-y;"><div class="flickity-slider" style="left: 0px; transform: translateX(-2.3%);"><div class="product-gallery__thumbnail one-fifth column is-nav-selected is-selected" data-title="SomniFix Mouth Strips" style="position: absolute; left: 0%;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2f6f8228-f3b3-4ede-9081-00286a38d7aa_400x.jpg?v=1605687570" alt="SomniFix Mouth Strips" data-index="0" data-image-id="15449544917107" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column is-selected" data-title="SomniFix Mouth Strips" style="position: absolute; left: 20%;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_92047d1f-65f3-41f9-bbd9-2a0546b86a5e_400x.jpg?v=1605687570" alt="SomniFix Mouth Strips" data-index="1" data-image-id="15449544949875" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column is-selected" data-title="SomniFix Mouth Strips" style="position: absolute; left: 40%;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_6b1172dd-26e5-4e6c-9ef7-5e1ef9286097_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="2" data-image-id="15449544982643" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column is-selected" data-title="SomniFix Mouth Strips" style="position: absolute; left: 60%;"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_7bd862a0-8fcd-48ee-882c-cbd8cf5df992_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="3" data-image-id="15449545015411" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 80%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_df4d690e-87b3-4c41-a6a3-ca3992484191_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="4" data-image-id="15449545048179" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 100%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_fbb9f6bd-eed7-4126-aed2-687c0b59d3b6_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="5" data-image-id="15449545080947" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 120%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2e5b01d2-0237-44b7-99a7-5d240b1475af_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="6" data-image-id="15449545113715" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 140%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1d4628c7-d7be-4912-8f9c-fa894cdfd0bb_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="7" data-image-id="15449545146483" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 160%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_6bf8fa73-f371-4a3b-9394-950775509b16_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="8" data-image-id="15449545179251" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 180%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_7701445a-569b-466f-9776-a4b8fe34ebb7_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="9" data-image-id="15449545212019" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 200%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_6ad20623-33e3-4895-9ea0-48f35bf13b4e_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="10" data-image-id="15449545244787" data-featured-image="15449544917107"></div><div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips" style="position: absolute; left: 220%;" aria-hidden="true"> <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_eabe3d58-7d73-4595-873e-56a16a2e61c9_400x.jpg?v=1605687571" alt="SomniFix Mouth Strips" data-index="11" data-image-id="15449545277555" data-featured-image="15449544917107"></div></div></div><button class="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous" disabled=""><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z" class="arrow"></path></svg></button><button class="flickity-button flickity-prev-next-button next" type="button" aria-label="Next"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button></div>


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
                        <p class="total_price">$<span>23.99</span> USD</p>
                        <span class="free-shipping-label">Free Shipping</span>
                        <div class="flx">
                            <b>Ship to:</b>
                            <label class="for_country_select">
                                <select class="country_select" name="country">${optionShipTo()}</select>
                            </label>
                        </div>
                
                        <span class="delivery_date">Arrives: <b>01 Jul - 03 Jul</b> </span>
            
                        <h4 class="stock__header">In Stock.</h4>
                        <select class="stock__select">${qty()}</select>
                        <p class="stock__pack">1 pack = <span>28</span> strips</p>
            
                        <div class="subscribe-custom">
                            <input class="subscribe-custom__checkbox" type="checkbox">
                            <h5 class="subscribe-custom__header">Subscribe and <span>save 10%</span></h5>
                            <p class="subscibe-custom__info">Auto delivery every 52 weeks for $199.97</p>
                            <p>Cancel anytime.</p>
                        </div>
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
`;

//add html and style
document.querySelectorAll('.shogun-root > .shg-box-vertical-align-wrapper ')[1].querySelectorAll('.shg-box-vertical-align-wrapper')[4].insertAdjacentHTML('beforebegin', html);
document.body.insertAdjacentHTML('afterbegin', style);

//swatch packs
for (let i = 0; i < objVariants.length; i++) {
    let switchItem = `
    <div class="swatchCustom__item ${objVariants[i].active}" data-variant=" ${objVariants[i].variantId}" data-title="${objVariants[i].title}" data-price="${objVariants[i].price}" data-subheading="${objVariants[i].subheading}">
        ${objVariants[i].popular == true ? `<div class="popular">Most Popular</div>` : ''}
        <div class="justify-between w-100">
            <div class="swatchCustom__item--first">
                <span class="week">${objVariants[i].week} <br><span> subscription</span></span>
                <span class="days">${objVariants[i].days}</span>
            </div>
            <div class="swatchCustom__item--third">
                <span class="sale">${objVariants[i].sale}</span>
                <p>
                    <span class="price">${objVariants[i].price} USD </span>
                    <span class="per_strip">($${objVariants[i].perStrip} per strip)</span>
                </p>
            </div>
        </div>
        <p class="how_cancet">Auto delivery every 3 months. <br> Cancel anytime. <a href="#" class="btn-how_cancel">How to cancel?</a></p>
    </div>`
    document.querySelector('.part1 .checklist').insertAdjacentHTML('afterend', switchItem); 
}

$('.swatchCustom__item').click(function() {
    if(!$(this).hasClass('swatchCustom__item--active')) {
        $(this).siblings().removeClass('swatchCustom__item--active')
        $(this).addClass('swatchCustom__item--active')
        document.querySelector(".part2 .stock__select").disabled = false
        $(".part2 .subscribe-custom__checkbox").prop("checked", false)

        let price = $(this).data('price')

        $('.total_price span').text(price)
        $('.stock__select').val('1')
        if($(this).data('title') === '3 Pack') {
            $('.stock__pack span').text('84')
            $('.subscribe-custom').css('display', 'block')
            $('.subscibe-custom__info').text('Auto delivery every 12 weeks for $49.97')
        } else if($(this).data('title') === '12 Pack') {
            $('.stock__pack span').text('364')
            $('.subscribe-custom').css('display', 'block')
            $('.subscibe-custom__info').text('Auto delivery every 52 weeks for $199.97')
        } else {
            $('.stock__pack span').text('28')
            $('.subscribe-custom').css('display', 'none')
        }
    }
})
//set date of arrives 
$('.delivery_date b').html($('.country_select option:selected').attr('data-value'))

// calculating the total price
$('.part2 .stock__select').change(function() {
    let price = +$('.swatchCustom__item.swatchCustom__item--active').data('price')
    let total = (price * document.querySelector(".part2 .stock__select").value).toFixed(2)
    $('.part2 .total_price span').text(total)
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

$(".part2 .subscribe-custom__checkbox").change(function(e){
    if (e.currentTarget.checked) {
        $(".stock__select").prop('disabled', 'true');
        $(".stock__select").val('1');
        if($('.swatchCustom__item--active').data('title') === '3 Pack') {
            $('.total_price span').text('49.97')
        } else {
            $('.total_price span').text('199.97')
        }
    } else {
        $(".stock__select").removeAttr('disabled')
        $('.total_price span').text($('.swatchCustom__item.swatchCustom__item--active').data('price'))
    }
})
