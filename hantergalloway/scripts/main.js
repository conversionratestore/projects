const suburbs = [
    ['BRIDGEMAN DOWNS', '13km', '$785,000', 137, 137, 137, 137, '#'],
    ['CARINA HEIGHTS', '8km', '$667,500', 60, 137, 137, 137, '#'],
    ['EVERTON PARK', '9km', '$605,000', 110, 137, 137, 137, '#'],
    ['FERNY GROVE', '13km', '$620,000', 60, 137, 137, 137, '#'],
    ['KEPERRA', '10km', '$550,000', 81, 137, 137, 137, '#'],
    ['LOGANHOLME', '29km', '$395,000', 95, 137, 137, 137, '#'],
    ['MANSFIELD', '10km', '$685,000', 112, 137, 137, 137, '#'],
    ['OXLEY', '11km', '$572,500', 10, 137, 137, 137, '#'],
    ['STAFFORD HEIGHTS', '115km', '$611,000', 110, 137, 137, 137, '#'],
    ['WYNNUM', '14km', '$625,000', 204, 137, 137, 137, '#'],
];

/* Table START */



// draw table on the page
const table = document.querySelector('.suburb-loan__table');
for (let row of suburbs) {
    table.insertRow();

    for (let cell of row) {
        let newCell = table.rows[table.rows.length - 1].insertCell();

        newCell.textContent = cell;
    }
}

// change last cell with link
for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[table.rows[i].cells.length - 1].innerHTML = `<a href="${table.rows[i].cells[table.rows[i].cells.length - 1].innerText}">Explore the suburb</a>`;
}

// sorting table logic
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

table.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr));
})));

/* Table END */

document.querySelectorAll('.answer').forEach(item => {
    item.addEventListener('click', () => {
        item.querySelector('input').click();
    })
})

//
document.querySelectorAll('.map svg path').forEach(area => {
    area.addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'block';
        this.style.fill = 'red'
    })
})