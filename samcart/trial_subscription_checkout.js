document.body.insertAdjacentHTML('afterend0',`
<style>
    .get_samcart_blue {
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        text-decoration-line: line-through;
        color: #2096EF;
        margin-right: 4px;
    }
    .get_samcart_normal {
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        color: #183B56;
    }
    #get_samcart .btn_get_samcart {
        background: #2096EF;
        border-radius: 48px;
        line-htight: 48px;
        width: 100%;
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: #FFFFFF;
    }
    #get_samcart .btn_pay {

    }
    #get_samcart .btn_pay_pal {

    }
</style>`)
document.querySelectorAll('.sc-root-row')[2].insertAdjacentHTML('afterend0',`
<div class="sc-column col-12 sc-root-row" id="get_samcart">
    <div class="sc-row">
        <div class="sc-column col-12">
            <p>Get Samcart 40% OFF</p>
            <div class="d-flex">
                <p class="get_samcart_blue">$580</p>
                <p class="get_samcart_normal">$349</p>
            </div>
            <a href="#" class="btn_get_samcart">Enroll Now</a>
            <div class="d-flex justify-content-between">
                <a href="#" class="btn_pay">
                    <img src="" alt="icon pay">
                </a>
                <a href="#" class="btn_pay_pal">
                <img src="" alt="icon pay">
                </a>
            </div>
        </div>
    </div>
</div>`)
