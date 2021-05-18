window.onload  = function () {
    let style = `
        <style>
            .section-vs_top {
                background: url('https://i.ibb.co/ZYFDJzG/Vector-4-1.png') no-repeat center / cover;
                padding: 54px 15px 30px;}
            .section-vs .js-title {
                font-size: 42px;}
            table.section-vs_table {
                max-width: 370px;
                margin: 0 auto;
                border: none;}
            table.section-vs_table tr td p.c-orange{
                padding: 5px 0;
                font-size: 12px!important;
                line-height: 16px!important;
                color: #E1992D;}
            table.section-vs_table tr th {
                color: #212529;
                padding: 5px 0;}
            table.section-vs_table tr th p{
                font-family: 'Open Sans';
                font-weight: 400;
                line-height: 20px!important;
                font-size: 14px!important;}
            table.section-vs_table tr th p.c-pink {
                font-family: 'DIN CONDENSED';
                line-height: 16px!important;}
            table.section-vs_table tr td {
                font-size: 14px;
                line-height: 20px;
                border-right: 1px solid #E2E2E2;
                padding: 5px 0;}
            table.section-vs_table tr td:before,  table.section-vs_table tr td:after, table.section-vs_table tr th:before, table.section-vs_table tr th:after{
                content: none;}
            table.section-vs_table tr p {
                margin: 0;}
            table.section-vs_table tr td:first-child {
                padding-right: 15px;}
            table.section-vs_table tr td:nth-child(2), .section-vs_table tr td:nth-child(3), table.section-vs_table tr th {
                text-align: center}
            .nowrap {
                display: block;
                white-space: nowrap;}
            table.section-vs_table tr:hover, table.section-vs_table tr th {
                background-color: transparent;}
            .c-pink {
                color: #FF3C81;}
            #section-vs .js-btn.btn-primary{
                border-radius: 80px;
                margin: 40px auto 0 ;
                box-shadow: none;
                font-size: 20px;
                line-height: 46px;
                max-width: 258px;
                display: block;}
            .section-vs_bottom {
                padding: 30px 15px 0;}
            .section-vs_bottom img {
                margin: 0 auto 10px;
                display: block;}
            .section-vs_bottom p {
                text-align: center;
                margin-bottom: 50px;}
        </style>`;

    document.body.insertAdjacentHTML('afterbegin', style);

    let section = `
    <section id="section-vs">
        <div class="section-vs_top">
            <h2 class="js-title text-dark">Buzzpatch <br> vs sprays</h2>
            <table class="section-vs_table">
                <tbody>
                    <tr>
                        <th width="46%"></th>
                        <th width="29%">
                            <img src="https://i.ibb.co/9cHTXzd/Buzz-Patch-v2.png" alt="Buzz-Patch icon" width="38px" height="36px">
                            <p class="c-pink">Buzzpatch</p>
                        </th>
                        <th width="25%">
                            <img src="https://i.ibb.co/mX3WZvC/Group.png" alt="Buzz-Patch icon" width="20px" height="30px">
                            <p>Spray</p>
                        </th>
                    </tr>
                </tbody>
            </table>
            <a href="#getNow" class="btn js-btn btn-primary get-it">Get Buzzpatch</a>
        </div>
        <div class="section-vs_bottom">
            <img src="https://i.ibb.co/Xth0kdp/australia-1-1.png" alt="australia icon">
            <p>Formulated and designed in Australia</p>
            <img src="https://i.ibb.co/QpQGyrQ/shipped.png" alt="shipped icon">
            <p>FREE shipping worldwide</p>
        </div>
    </section>`;

    document.querySelector('#children-safe').insertAdjacentHTML('beforebegin', section);

    let arr = [
        {
            name: 'Effective <span class="nowrap"> up to 6 hours</span>',
            checkBuzzpatch: 'https://i.ibb.co/Z6Vnb3x/check.png',
            checkSpray: 'https://i.ibb.co/Z6Vnb3x/check.png',
        },
        {
            name: 'Smells nice, kids <span class="nowrap">like it</span>',
            checkBuzzpatch: 'https://i.ibb.co/Z6Vnb3x/check.png',
            checkSpray: 'https://i.ibb.co/1zMqTBs/close.png',
        },
        {
            name: 'Non-sticky skin after use',
            checkBuzzpatch: 'https://i.ibb.co/Z6Vnb3x/check.png',
            checkSpray: 'https://i.ibb.co/1zMqTBs/close.png',
        },
        {
            name: 'Chemical-free',
            checkBuzzpatch: 'https://i.ibb.co/Z6Vnb3x/check.png',
            checkSpray: 'https://i.ibb.co/1zMqTBs/close.png',
            spanBuzzpatch: '100% <br> natural <br> ingredients',
            spanSpray: 'Contains <br> DEET',
        },
        {
            name: 'Does not get into eyes',
            checkBuzzpatch: 'https://i.ibb.co/Z6Vnb3x/check.png',
            checkSpray: 'https://i.ibb.co/1zMqTBs/close.png',
        },
        {
            name: 'Does not irritate <span class="nowrap">the lungs</span>',
            checkBuzzpatch: 'https://i.ibb.co/Z6Vnb3x/check.png',
            checkSpray: 'https://i.ibb.co/1zMqTBs/close.png',
        },
    ];

    for (let i = 0; i < arr.length; i++) {
        let tr = `
            <tr valign="middle">
                <td>${arr[i].name}</td>
                <td class="check-buzzpatch">
                    <img src="${arr[i].checkBuzzpatch}" alt="check icon">
                </td>
                <td class="check-spray">
                    <img src="${arr[i].checkSpray}" alt="check icon">
                </td>
            </tr>`;
        document.querySelector('.section-vs_table tbody').insertAdjacentHTML('beforeend', tr);
        if (arr[i].spanBuzzpatch) {
            document.querySelectorAll('.check-buzzpatch')[i].insertAdjacentHTML('beforeend', `<p class="c-orange">${arr[i].spanBuzzpatch}</p>`);
        } 
        if (arr[i].spanSpray) {
            document.querySelectorAll('.check-spray')[i].insertAdjacentHTML('beforeend', `<p class="c-orange">${arr[i].spanSpray}</p>`);
        }
    } 
    document.querySelectorAll('.section-vs_table tr')[4].setAttribute('valign', 'baseline');
     $("#section-vs .btn-primary").click(function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop:$('#purchase').offset().top + 96 + "px"},{duration:1E3});
    });
};
