let dir = 'https://conversionratestore.github.io/projects/skillstg/img/';

let href = window.location.href;

let currency;

let style = `
<style class="style-exp">
    .form-group-title {
        font-size: 12px;
        font-weight: 600;
        line-height: normal;
    }
    .hero-section-title-loader {
        min-height: auto;
    }
    .section {
        padding-top: 20px;
    }
    .firs-screen-home__content h1 {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
        border-radius: 4px;
        background: #0D3B5B;
        padding: 12px;
        margin-bottom: 16px;
    }
    .firs-screen-home__content h1 span {
        font-size: 16px;
        font-weight: 400;
        display: block;
    }
    .firs-screen-home__content h2 {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 8px!important;
    }
    .filters-block__item:last-child {
        order: 2;
        margin-top: 20px;
    }
    .filters-block__item:first-child {
       display: none;
    }
    .filters-block__item:nth-child(2) {
        order: 1;
    }
    .filters-block__item:nth-child(3) input {
        padding-left: 40px;
        background: url(${dir}location.svg) no-repeat left 12px center / 20px;
    }
    .react-datepicker__input-container input {
        padding-left: 30px;
        background: url(${dir}calendar.svg) no-repeat left 2px center / 20px;
    }
    .radius-10 .table-wrapper, 
    .radius-10:not(.show) .filters_result, 
    .radius-10:not(.show) .filters_result, 
    .filters-block.active > div:not(.filters-block__selected, .book_onsite), 
    .radius-10:not(.show) .lds-spinner, 
    .react-datepicker-wrapper+a svg, 
    .react-datepicker__tab-loop+a svg, 
    .radius-10:not(.show) .your-location-modal+div[style] {
        display: none!important; 
    }
    .pagination_customer {
        display: none;
    }
    .react-datepicker-wrapper+a, .react-datepicker__tab-loop+a {
        width: 30px;
        height: 30px;
        right: 4px!important;
        background: url(${dir}close.svg) no-repeat center / 12px!important;
    }
    .filters-block__item input::-webkit-input-placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        color: #49718C; }
      
    .filters-block__item input:-moz-placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        color: #49718C; }
      
    .filters-block__item input::-moz-placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        color: #49718C; }
      
    .filters-block__item input:-ms-input-placeholder {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        color: #49718C; }
    .filters-block.active {
        padding-bottom: 20px;
    }
    .tabs p {
        color: #49718C;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        cursor: pointer;
        margin-right: 5px;
        padding: 8px 0;
    }
    section .btn--info {
        border-radius: 4px;
        background: #09983F;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; 
        text-transform: uppercase;
    }
    .table-pagination {
        display: none;
    }
    .filters-block, .table-pagination {
        padding: 28px 16px 0;
    }
    .filters-block-row+div {
        text-align: center;
        color: #4A718C;
        font-size: 14px;
        line-height: 22px;
        padding: 16px 12px 12px!important;
        border-radius: 0px 0px 4px 4px!important;
        margin: 20px -16px 0;
    }
    .radius-10.box-shadow {
        box-shadow: none;
    }
    .radius-10.box-shadow .filters-block {
        border-radius: 4px;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    }
    .filters-block__selected {
        display: none;
        align-items: center;
        border-radius: 4px;
        border: 1px solid #DBE8F4;
        padding: 6px 10px;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
        color: #49718C;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        cursor: pointer;
        margin-top: -8px;
        min-height: 48px;
    }
    .filters-block__selected p:first-child {
        color: #0D3B5B;
        font-weight: 600;
    }
    .filters-block__selected {
        box-shadow: none;
    }
    .filters-block.active .filters-block__selected {
        display: flex;
    }
    .filters-block__selected svg {
        margin-right: 12px;
    }
    .filters-block__selected .btn_close {
        width: 20px;
        height: 20px;
        background: url(${dir}close.svg) no-repeat center / 12px;
        margin-left: auto;
        display: block;
    }
    /* modal */
    .modal_form {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.55);
        display: flex;
        padding: 10px;
        opacity: 0;
        pointer-events: none;
    }
    .modal_form.active {
        opacity: 1;
        pointer-events: auto;
    }
    .modal_form p {
        color: #0D3B5B;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        padding: 0 14px;
    }
    .modal_form form, .modal_form_thank {
        padding: 16px;
    }
    .modal_form_head {
        border-radius: 4px;
        background: var(--blue-dark, #0D3B5B);
        padding: 12px;
        display: flex;
        justify-content: space-between;
    }
    .modal_form_head h2 {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        line-height: 24px;
        font-weight: 700;
    }
    .modal_form_head h2 span {
        display: block;
        font-size: 14px;
        font-weight: 400;
    }
    .modal_form_container {
        margin: auto;
        border-radius: 4px;
        background: #FFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        max-width: 335px;
        width: 100%;
    }
    .modal_form h3 {
        color: #0D3B5B;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    }
    .modal_form label {
        margin-top: 16px;
        color: #49718C;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 8px;
        display: block;
    }
    .c-red {
        color: #F00;
    }
    .modal_form_close {
        cursor: pointer;
    }
    .modal_form input {
        border: 1px solid #DBE8F4;
        width: 100%;
        padding: 11px 12px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
    }
    .modal_form input::-webkit-input-placeholder {
        color: #80858A;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px; 
    }
    .modal_form input:-moz-placeholder {
        color: #80858A;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px; 
    } 
    .modal_form input::-moz-placeholder {
        color: #80858A;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px; 
    } 
    .modal_form input:-ms-input-placeholder {
        color: #80858A;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px; 
    } 
    .modal_form .btn {
        margin-top: 24px;
        border-radius: 4px;
        background: #09983F;
        line-height: 48px;
        width: 100%;
        border: none;
        padding: 0;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
    }
    .modal_form_thank {
        display: none;
    }
    .modal_form_thank svg {
        margin: 8px auto 12px;
        display: block;
    }
    .modal_form .error input {
        border-color: #F00;
    }
    .book_onsite {
        border-radius: 4px;
        background: #EAF5FE;
        padding: 12px;
        display: none;
        margin-top: 12px;
    }
    .book_onsite p {
        color: #49718C;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 12px;
    }
    .book_onsite b {
        font-weight: 700;
        color: #0D3B5B;
        margin-bottom: 8px;
        display: block;
    }
    .book_onsite .btn {
        width: 100%;
        line-height: 40px;
    }
    .card {
        border-radius: 4px;
        background: #FFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        margin-bottom: 24px;
        display: none;
    }
    .card+.message_block, .card+.message_block+h5 {
        display: none;
    }
    .card[style="display: block;"]+.message_block, 
    .card[style="display: block;"]+.message_block+h5,  
    .card[style="display: flex;"]+.message_block, 
    .card[style="display: flex;"]+.message_block+h5 {
        display: block;
    }
    .card > .d-flex > div:last-child {
        border-radius: 0px 0px 4px 0px;
    }
    .card > .d-flex > div:first-child {
        border-radius: 4px 0px 0px 0px;
    }
    .card_closest {
        background: #0D3B5B;
    }
    .card_miles {
        background: #58C3D8;
    }
    .card_miles, .card_closest {
        color: #FFF;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        line-height: 24px; 
        padding: 0 10px;
    }
    .card_body {
        padding: 16px;
    }
    .card_title {
        color: #0D3B5B;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px; 
    }
    .card_span {
        color: #49718C;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; 
        margin-bottom: 12px;
    }
    .select {
        position: relative;
        padding: 0;
    }
    .select label {
        color: #49718C;
        font-size: 14px;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 8px;
        display: block;
    }
    .select_current {
        color: #0D3B5B;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding: 16px 12px;
        position: relative;
        border-radius: 4px;
        border: 1px solid #DBE8F4;
        background: #FFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
    }
    .select_current:after {
        content: '';
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        background: url(${dir}arrow-down.svg) no-repeat center / 14px;
    }
    .select.active .select_drop {
        display: block;
    }
    .select.active .select_current:after {
        transform: translateY(-50%) scaleY(-1);
    }
    .select_drop {
        position: absolute;
        left: 0;
        top: 100%;
        border: #DBE8F4;
        border-radius: 4px;
        overflow-y: auto;
        max-height: 280px;
        width: 100%;
        z-index: 9;
        background: #fff;
        border: 1px solid #DBE8F4;
        display: none;
    }
    .select_drop li {
        border-bottom: 1px solid #DBE8F4;
        color: #0D3B5B;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding: 12px;
    }
    .select_drop li.selected {
        background: #EAF5FE;
    }
    .card_footer {
        border-radius: 0px 0px 4px 4px;
        background: #EAF5FE;
        padding: 15px;
    }
    .card_footer > div p {
        color: #0D3B5B;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
    .card_footer > div p:last-child {
        color: #09983F;
        font-size: 14px;
        font-weight: 400;
    }
    .card_footer .price {
        margin: 8px 0 16px;
        line-height: normal;
        color: #49718C;
        font-size: 16px;
        font-weight: 400;
    }
    .card_footer .price .pr {
        font-size: 24px;
        color: #0D3B5B;
        font-weight: 700; 
    }
    .card_footer .btn_book {
        width: 100%;
        line-height: 48px;
    }
    .filters_result {
        padding-top: 30px;
        max-width: 672px;
        margin: 0 auto;
        width: 100%;
    }
    .filters_result h5 {
        margin-bottom: 12px;
        line-height: 24px;
    }
    .message_block {
        border-radius: 4px;
        border: 1px dashed var(--border, #DBE8F4);
        background: #F8F8F8;
        margin-bottom: 24px;
        padding: 16px;
        color: #49718C;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
    }
    .message_block a {
        display: block;
        color: #0D3B5B;
        text-decoration-line: underline;
    }
    .paymant-info__cards {
        margin-left: -14px;
    }
    .radius-10 .paymant-info li {
        padding: 0;
    }
    .radius-10 .paymant-info {
        border-top: none;
    }
    .pagination_customer li {
        color: #49718C;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        border: 1px solid transparent;
        cursor: pointer;
        margin: 0 4px;
        text-align: center;
    }
    .pagination_customer li.selected {
        border-color: #58C3D8;
        color: #58C3D8;
        display: block;
    }
    .pagination_customer li {
        display: none;
    }
    .pagination_customer li.selected[data-index="0"]+li, .pagination_customer li.selected[data-index="0"]+li+li {
        display: block;
    }
    .pagination_customer_action {
        color: #49718C;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; 
        background: transparent;
        margin: 0 -8px;
    }
    .pagination_customer_action svg {
        margin: 0 8px;
    }
    .pagination_customer_action svg path {
        fill: #49718C;
    }
    .pagination_customer_action[disabled] {
        color: #DBE8F4;
    }
    .pagination_customer_action[disabled] svg path{
        fill: #DBE8F4;
    }
    section.bg-white {
        padding-bottom: 0!important;
    }
    section.bg-white > div > .radius-10 {
        display: grid;
        margin-bottom: 0;
    }
    .paymant-info.display-sm-block.d-none {
        border: none;
    }
    section.bg-white .action_buttons {
        order: 1;
    }
    section.bg-white .paymant-info {
        order: 2;
        padding-top: 30px;
        margin-bottom: 10px!important;
    }
    section.bg-white .border_info {
        order: 3;
        margin-bottom: 30px;
        margin-top: -20px;
    }
    section.bg-white .footer__top {
        order: 4;
    }
    main > section:nth-child(3) {
        margin: 0!important;
        background: #fff;
        padding-bottom: 30px!important;
    }
    @media (min-width: 768px) {
        .firs-screen-home__content h2 {
            font-size: 24px;
            line-height: 32px;
        }
        section .container {
            max-width: 930px;
        }
        .firs-screen-home__image {
            display: none;
        }
        .firs-screen-home__content {
            margin-right: 0;
            max-width: 100%;
        }
        .firs-screen-home__content h1 {
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 30px;
        }
        .firs-screen-home__content h1 span {
            font-size: 24px;
        }
        .filters-block__item:last-child {
            margin: 0 15px
        }
        .radius-10.box-shadow .filters-block {
            padding: 20px 20px 0;
        }
        .radius-10.box-shadow .filters-block.active {
            padding: 20px;
        }
        .filters-block-row {
            margin: 0;
            flex-wrap: nowrap;
        }
        .filters-block-row .filters-block__item {
            width: calc(100% - 48px);
            margin: 0 24px 0 0;
            flex: inherit;
        }
        .filters-block__item:nth-child(2) {
            max-width: 324px;
        }
        .filters-block-row .filters-block__item:nth-child(3) {
            min-width: 285px;
        }
        .filters-block-row .filters-block__item:last-child {
            margin-right: 0;
            max-width: 188px;
            margin-bottom: 32.5px;
        }
        .filters-block__selected {
            margin-top: 0;
            max-width: 350px;
            margin-bottom: 20px;
        }
        .filters-block__selected > div {
            display: flex;
        }
        .filters-block__selected > div p {
            margin-right: 8px;
        }
        .border_info {
            border-radius: 4px;
            border: 1px dashed var(--border, #DBE8F4);
            background: #FFF;
            margin: 24px auto!important;
            max-width: 672px;
            width: 100%;
            display: flex;
            padding: 20px 20px 10px;
            justify-content: space-between;
        }
        .filters-block-row+div {
            margin: 16px -20px 0;
            padding: 10px!important;
            justify-content: center;
        }
        section.bg-white .paymant-info {
            order: 0;
            max-width: 260px;
            margin-right: 16px;
        }
        .paymant-info__list, .paymant-info__cards {
            margin: 0;
        }
        .radius-10 .paymant-info .paymant-info__list li:first-child {
            margin-top: 0;
        }
        .review-item {
            padding: 16px 10px;
            font-size: 14px;
        }
        .review-block {
            width: 100%;
        }
        .footer__top.footer__accreditations {
            padding: 24px!important;
            margin: 0 auto 40px!important;
            max-width: 672px;
        }
        .fag .container {
            max-width: 702px;
            padding-bottom: 40px;
        }
        .fag .container h2 {
            font-size: 24px;
            line-height: 24px;
            text-align: left;
            margin-bottom: 20px;
        }
        .footer__accreditations h5 {
            margin-bottom: 20px!important;
        }
        section.section.pb-140.pb-md-50.padding-top-sm-0 {
            padding-bottom: 76px!important;
        }
        .book_onsite {
            margin: 0 -20px -20px;
            padding: 16px 12px;
        }
        .book_onsite .btn {
            max-width: 188px;
            margin-left: auto;
        }
        .book_onsite p, .book_onsite b {
            margin: 0 10px 0 0;
        }
        .card > div {
            width: 100%;
        }
        .card_footer {
            max-width: 297px;
        }
        section.bg-white .paymant-info {
            order: 0;
            max-width: 260px;
        }
        .card_footer .price {
            margin: 16px 0 20px;
        }
    }
</style>`;

let style2 = `
<style class="style-exp-2">
    .topbar_timer {
        background: #09983F;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding: 10px 15px;
        text-align: center;
        height: fit-content;
    }
    .page-action, 
    main.content > .section.padding-top-sm-0 > .container > div:not(.booking_order), 
    main.content > .section.padding-top-sm-0 > .container > h2,
    .section.pb-sm-62,
    section.padding-top-sm-0.pd-sm-40 {
        display: none!important;
    }
    .section.bg-white.payment-details .page-action {
        display: flex!important;
        margin-top: -10px;
    }
    .wrapper {
        background: none!important
    }
    .booking_order h3 {
        font-size: 20px;
        padding: 24px 15px 16px;
        justify-content: space-between;
        display: flex;
    }
    .booking_order_content h4 {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 8px;
        padding-right: 25px;
    }
    .booking_order_content h4 span {
        font-size: 14px;
        font-weight: 400;
        display: flex;
    }
    .booking_order_content h4 span > span > span {
        margin-left: 4px;
    }
    .booking_order_date, .booking_order_cost, .booking_order_text, .booking_order_learn   {
        font-size: 14px;
        line-height: 22px;
    }
    .booking_order_date, .booking_order_cost {
        font-weight: 600;
        margin-bottom: 8px;
    }
    .booking_order_cost strong {
        font-weight: 600;
    }
    .booking_order_cost .span {
        font-weight: 300;
    }
    .booking_order_learn {
        font-weight: 600;
        color: #0D3B5B;
    }
    .booking_order_content.arrow-true.active .booking_order_learn {
        margin-bottom: 8px;
    }
    .booking_order_content {
        margin: 0;
        padding: 16px 15px;
        position: relative;
        background: #eaf5fe url(/static/media/header-background.dedacd6ace259be8750a.svg) no-repeat 100% bottom;
    }
    .booking_order_content.arrow-true {
        cursor: pointer;
    }
    .booking_order_content.arrow-true:before {
        content: '';
        position: absolute;
        right: 30px;
        top: 23px;
        background: url(${dir}arrow-down.svg) no-repeat center / 100%;
        width: 13px;
        height: 13px;
        pointer-events: none;
    }
    .booking_order_content.arrow-true:not(.active) p:not(.booking_order_learn) {
        display: none;
    }
    .booking_order_content.arrow-true.active:before {
        transform: scaleY(-1);
    }
    .booking_order_text {
        color: #49718C;
        font-weight: 400;
    }
    .section {
        padding: 24px 0 0 0;
    }
    .btn--shadow {
        border-radius: 4px;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; 
    }
    .btn-icon {
        width: 16px;
        height: 14px;
    }
    .btn--white-active, .btn--white-active:hover {
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
    }
    main.content > .section.bg-white > .container > h3.mb-30 {
        margin-bottom: 12px;
    }
    main.content > .section.bg-white > .container > h3.mb-10v {
        font-size: 20px;
    }
    .def-text-1 {
        font-size: 16px;
    }
    section.bg-white:not(.billing) > div > .row.gutters-20.mb-30:not(.learn) > div:nth-child(n+5), 
    section.bg-white.billing > div > .row.gutters-20.mb-30:not(.learn) > div:nth-child(-n+4),
    section.bg-white.learner > div > .row.gutters-20.mb-30:not(.learn),
    section.bg-white.learner > div > .def-text-1,
    section.bg-white.billing > .container > h3.mb-30,
    section.bg-white.billing > .container > .row.gutters-20.mb-50,
    .section.bg-white:not(.learner) > .container > div > a.btn--info,
    section.bg-white.learner .hide > .col-md-6,
    section.bg-white.learner[data-count="1"] > div > .row.gutters-20.mb-30.learn[data-index="1"] > .col-12,
    section.bg-white:not(.learner) > div > .row.gutters-20.mb-30.learn,
    section.bg-white.learner > div > .row.gutters-20.mb-30:not(.learn) {
        display: none;
    }
    section.bg-white.billing > div > .row.gutters-20.mb-30:not(.learn) > div:nth-child(n+5) .col-12  {
        margin-bottom: -6px;
    }
    .section.bg-white:not(.learner) > .container > div[class="mb-30"] {
        margin-top: -36px;
    }
    section.bg-white.learner .hide > .col-md-12 span:before {
        transform: translateY(-50%) scaleY(1);
    }
    section.bg-white > div {
        display: grid;
    }
    section.bg-white .action_buttons {
        order: 1;
    }
    section.bg-white .paymant-info {
        order: 2;
        padding-top: 30px;
        margin-bottom: 10px!important;
    }
    section.bg-white .review-block {
        order: 3;
    }
    section.bg-white .footer__top {
        order: 4;
    }
    .btn_back, 
    .btn_continue,  
    .page-action .btn--outline-info,
    .page-action .btn--info {
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 4px;
        text-align: center;
        padding: 0;
        max-width: inherit;
    }
    .btn_back, 
    .page-action .btn--outline-info {
        color: #0D3B5B;
        line-height: 46px; 
        border: 1px solid #DBE8F4;
        background: #FFF;
        width: 90px;
        margin-right: 16px;
    }
    .btn_continue, 
    .page-action .btn--info {
        width: calc(100% - 90px - 16px);
        color: #FFF;
        line-height: 48px; 
        border: none;
        background-color: #09983F;
        max-width: 240px;
        margin-left: auto;
    }
    .btn_continue svg {
        margin-left: 8px;
    }
    .paymant-info {
        border: none;
    }
    .review-item {
        margin-bottom: 30px;
    }
    section.bg-white.learner > div > div > .col-md-12 {
        border: none!important;
        padding: 0;
    }
    section.bg-white.learner > div > div > .col-md-12 span {
        position: relative!important;
        left: 0!important;
        top: 0!important;
        padding: 8px 12px!important;
        color: #0D3B5B;
        font-size: 16px!important;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        border-radius: 4px;
        background: #EAF5FE!important;
        white-space: nowrap;
        display: flex!important;
        align-items: center;
        cursor: pointer;
    }
    section.bg-white.learner > div > div > .col-md-12 span:after, section.bg-white.learner > div > div > .col-md-12 span:before {
        content: '';
    }
    section.bg-white.learner > div > div > .col-md-12 span:after {
        width: 100%;
        height: 1px;
        background: #DBE8F4;
        margin: 0 16px 0 8px;
    }
    section.bg-white.learner > div > div > .col-md-12 span:before {
        background: #EAF5FE url(${dir}arrow-down.svg) no-repeat center / 16px;
        width: 16px;
        height: 16px; 
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%) scaleY(-1);
        pointer-events: none;
    }
    section.bg-white.learner > div a.btn--info {
        border-radius: 4px;
        background: #DBE8F4;
        color: #0D3B5B;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; 
        text-transform: uppercase;
        width: 100%;
        padding: 7px;
        margin-top: -14px;
    }
    section.bg-white.learner > div a.btn--outline-info {
        border: none;
        color: #49718C;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        text-transform: uppercase;
        width: fit-content;
        margin: 0 auto;
        padding-left: 18px;
        background: url(${dir}close.svg) no-repeat left center / 10px;
        display: block;
    }
    .booking-details .page-action {
        display: flex!important;
    }
    .sm-border-bottom {
        padding-bottom: 0!important;
    }
    .sm-border-bottom:before {
        content: none;
    }

    .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .btn--shadow {
        position: relative;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; 
        padding: 12px;
        color: #0D3B5B;
    }
    .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .btn--shadow:before, .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .btn--shadow:after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
    }
    .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .btn--shadow:before {
        border: 1px solid #DBE8F4;
        right: 12px;
        width: 16px;
        height: 16px;
    }
    .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .btn--shadow:after  {
        right: 15px;
        width: 10px;
        height: 10px;
    }
    .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .btn--white-active:before {
        border-color: #58C3D8;
    }
    .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .btn--white-active:after {
        background-color: #58C3D8;
    }
    @media (min-width: 768px) {
        .paymant-info.mb-30.display-sm-block {
            display: none!important;
        }
        .section.bg-white {
            padding: 0 15px;
            max-width: 935px;
            display: flex;
            margin: 0 auto;
            padding-top: 40px;
        }
        .section.bg-white .container {
            width: 50%;
            padding: 0 12px 0 0;
            margin-left: 0;
        }
        .right_info {
            width: 50%;
            padding-left: 12px;
            display: block!important;
        }
        .right_info_top {
            border-radius: 4px;
            background: #FFF;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
            padding-bottom: 20px;
            z-index: 1;
            position: relative;
        }
        .topbar_timer {
            border-radius: 4px 4px 0px 0px;
        }
        .right_info_bottom {
            border-radius: 0 0 4px 4px;
            border-right: 1px dashed var(--border, #DBE8F4);
            border-bottom: 1px dashed var(--border, #DBE8F4);
            border-left: 1px dashed var(--border, #DBE8F4);
            background: #FFF;
            padding: 0 20px 20px;
        }
        .booking_order h3 {
            padding: 16px 0;
            font-size: 24px;
            line-height: 32px;
        }
        .booking_order {
            width: calc(100% - 40px);
            margin: 0 auto;
        }
        .booking_order_content {
            border-radius: 4px;
            border: 1px dashed var(--border, #DBE8F4);
            color: var(--blue-dark, #0D3B5B);
        }
        .booking_order_content h4 {
            font-size: 18px;
            line-height: 26px;
            margin-bottom: 16px;
        }
        .booking_order_date, .booking_order_cost, .booking_order_content.arrow-true.active .booking_order_learn {
            margin-bottom: 16px;
        }
        .booking_order_date, .booking_order_cost, .booking_order_text, .booking_order_learn {
            font-size: 16px;
        }
        .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 .col-md-6 {
            width: 100%!important;
            margin-top: 12px!important;
        }
        .row.gutters-20.mb-50.mb-lg-30.mb-sm-40 {
            margin-bottom: 30px!important;
        }
        main.content > .section.bg-white > .container > h3.mb-10v {
            font-size: 24px;
            line-height: 32px;
        }
        section.bg-white > div > .row.gutters-20.mb-30 > div.col-md-6.mt-sm-16 {
            width: 100%;
        }
        main.content > .section.bg-white > .container > h3.mb-30 {
            padding-bottom: 24px!important;
        }
        .review-item {
            margin-bottom: 0;
        }
        section.bg-white .paymant-info {
            padding-top: 20px!important;
            margin-bottom: 2px!important;
        }
        .paymant-info__list {
            display: block;
        }
        .paymant-info__list li+li {
            border: none!important;
        }
        .def-text-1 {
            margin-bottom: 24px;
        }
        .input, .textarea {
            line-height: 22px;
        }
        .css-1n8pi6e-control {
            height: 44px;
        }
        .review-item {
            padding: 16px 10px;
        }
        .review-item img {
            margin-bottom: 12px;
        }
        .border-bottom:last-child {
            border: none;
            padding-bottom: 0;
        }
        .border-bottom > .row.gutters-80 > .col-md-6 {
            width: 100%!important;
        }
        .name-details {
            color: var(--blue-dark, #0D3B5B);
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px; 
            margin: -24px 0 30px;
        }
        .name-details span {
            font-weight: 400;
        }
        .detail-list li {
            position: relative;
        }
        .detail-list li span {
            background: #fff;
            position: relative;
            z-index: 1;
        }
        .detail-list li span:first-child {
            padding-right: 12px;
        }
        .detail-list li span:last-child {
            padding-left: 12px;
        }
        .detail-list li:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            border-bottom: 1px dashed #DBE8F4;
        }
        .section.bg-white .row.gutters-20 .col-lg-6 {
            width: 100%;
        }
    }
</style>`;

const pushDataLayer = (name, desk, type, loc) => {
    console.log(name + " / " + desk + " / " + type + " / " +  loc)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga4',
        'event_name': name,
        'event_desc': desk,
        'event_type': type,
        'event_loc': loc
    });
}

const formatedDate = (time) => {
    const timestamp = time * 1000; // Переводим секунды в миллисекунды
    const date = new Date(timestamp);
    
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
   return formattedDate
}

let choiceDate = (event) => {
    let target = event.target;

    let date = target.innerHTML;
    target.parentElement.previousElementSibling.innerHTML = date;

    let id = target.dataset.id;
    let btnBook = target.closest('.card').querySelector('.btn_book');

    btnBook.href = '/booking/' + window.location.href.split('/course/')[1].split('?')[0] + '/' + id;

    target.parentElement.querySelector('.selected').classList.remove('selected');
    target.classList.add('selected');

    target.closest('.select').classList.remove('active');

    pushDataLayer('exp_book_imp_course_card_date_selected', 'Selected date', 'Dropdown', `Course card — ${target.closest('.card_body').querySelector('.card_title').innerText}`);
}

const toggleActive = (event) => {
    let target = event.target;
    target.parentElement.classList.toggle('active')

    pushDataLayer('exp_book_imp_course_card_date_select', 'Select date', 'Dropdown', `Course card — ${target.closest('.card_body').querySelector('.card_title').innerText}`);
}

const card = (data, closest, index, currency) => {

    let miles = (data.center.distance * 0.621371).toFixed(1), 
    title = data.center.name, 
    dropdown = data.schedules, 
    startDateFirst = formatedDate(data.schedules[0]['start_date']), 
    seats = data.schedules[0].space, 
    price = data.schedules[0]['price_online'],
    internalIdFirst = dropdown[0]['internal_id'],
    pcode =  dropdown[0]['pcode'],
    link = '/booking/' + pcode + '/' + internalIdFirst,
    addresses = [];

    addresses.push(data.center['address_line_1'])
    addresses.push(data.center['address_line_3'])
    addresses.push(data.schedules[0]['postal_code'])

    let options = '';
    for (let i = 0; i < dropdown.length; i++) {
        let date =formatedDate(dropdown[i]['start_date']),
            internalId = dropdown[i]['internal_id']

        options += `<li data-id="${internalId}" data-space="${dropdown[i]['space']}" class="${i == 0 ? 'selected' : ''}" onclick="choiceDate(event)">${date}</li>`
        
    }

    let media = window.matchMedia("(min-width: 768px)").matches;

    return ` 
    <div class="card" style="${index < 5 ? 'display: ' + (media ? 'flex;' : 'block;') : ''}">
        <div>
            <div class="d-flex">
                ${closest != '' ? '<div class="card_closest">' + closest + '</div>' : ''}
                <div class="card_miles">${miles} miles</div>
            </div>
            <div class="card_body">
                <p class="card_title">${title}</p>
                <p class="card_span">${addresses.join(', ')}</p>
                <div class="select">
                    <label>Pick start date</label>
                    <div class="select_current" onclick="toggleActive(event)">${startDateFirst}</div>
                    <ul class="select_drop">${options}</ul>
                </div>
            </div>
        </div>
        <div class="card_footer ${media ? 'justify-content-end d-flex flex-column' : ''}">
            <div class="d-flex align-items-center justify-content-between">
                <p>Reserve your seat</p>
                <p>Only ${seats} seats left</p>
            </div>
            <p class="price">
                <span class="pr">${currency}${price}</span>
                <span>(inc VAT)</span> 
            </p>
            <a href="${link}" class="btn btn--info btn_book" 
                onclick="sessionStorage.setItem('date_booking', event.target.closest('.card').querySelector('.select_current').innerHTML); pushDataLayer('exp_book_imp_course_card_book_now', 'Book now', 'Button', 'Course card — ${title}');">Book now</a>
        </div>
    </div>`;

}

const formCourse = (title) => {
    document.body.insertAdjacentHTML('beforeend',`
    <div class="modal_form">
        <div class="modal_form_container">
            <div class="modal_form_head">
                <h2>${title}</h2>
                <svg class="modal_form_close" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.32713 13.8318C0.983892 13.8517 0.646328 13.7376 0.385622 13.5135C-0.128541 12.9963 -0.128541 12.1609 0.385622 11.6437L11.6441 0.385178C12.1789 -0.115229 13.018 -0.0874119 13.5184 0.447363C13.9709 0.930957 13.9973 1.67425 13.5802 2.18868L2.25537 13.5135C1.99803 13.7344 1.66588 13.8483 1.32713 13.8318Z" fill="white"/>
                    <path d="M12.5726 13.8318C12.2247 13.8303 11.8913 13.6922 11.6443 13.4472L0.385759 2.18866C-0.090586 1.6324 -0.0258243 0.795263 0.530436 0.318874C1.02691 -0.106291 1.75912 -0.106291 2.25555 0.318874L13.5804 11.5774C14.115 12.0779 14.1427 12.9171 13.6421 13.4518C13.6222 13.473 13.6016 13.4936 13.5804 13.5135C13.3031 13.7547 12.9381 13.8699 12.5726 13.8318Z" fill="white"/>
                </svg>
            </div>
            <form id="location-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                <h3>Book the onsite course</h3>

                <input name="oid" type="hidden" value="00D1r000000exaC" />
                <input name="retURL" type="hidden" value="${href}&thankyou=yes" />
                <label for="first_name">First name <span class="c-red">*</span></label>
                <div>
                    <input id="first_name" maxlength="40" name="first_name" size="20" type="text" placeholder="Type your First Name" />
                </div>
                <label for="last_name">Last Name <span class="c-red">*</span></label>
                <div>
                    <input id="last_name" maxlength="80" name="last_name" size="20" type="text"  placeholder="Type your Last Name"/>
                </div>
                <label for="phone">Phone Number <span class="c-red">*</span></label>
                <div>
                    <input id="phone" maxlength="40" name="phone" size="20" type="text" placeholder="Type your Phone Number" />
                </div>
                <label for="email">Email <span class="c-red">*</span></label>
                <div>
                    <input id="email" maxlength="80" name="email" size="20" type="email" placeholder="Type your Email" />
                </div>
                <div style="display: none;">nterested Course:
                    <input id="00N1r000009BJov" maxlength="255" name="00N1r000009BJov" size="20" type="text" value="Paisley Academy contact form" />
                    Information Request Only:
                    <input id="00N1r00000KdhrQ" checked="checked" name="00N1r00000KdhrQ" type="checkbox" value="1" />
                </div>
                <input class="btn" name="submit" type="submit" value="Book" />
            </form>
            <div class="modal_form_thank">
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                    <path d="M25.5 39.1703H8.64062C6.65 39.1703 5.03125 37.5516 5.03125 35.5609V12.5312C5.03125 10.5406 6.65 8.92188 8.64062 8.92188H12.0344V9.77188C12.0344 10.5484 12.6641 11.1781 13.4406 11.1781C14.2172 11.1781 14.8469 10.5484 14.8469 9.77188V8.92188H31.6656V9.77188C31.6656 10.5484 32.2953 11.1781 33.0719 11.1781C33.8484 11.1781 34.4781 10.5484 34.4781 9.77188V8.92188H37.8594C39.8484 8.92188 41.4688 10.5406 41.4688 12.5312V22.5781C41.4688 23.3547 42.0984 23.9844 42.875 23.9844C43.6516 23.9844 44.2812 23.3547 44.2812 22.5781V12.5312C44.2812 8.99063 41.4 6.10938 37.8594 6.10938H34.4781V5.39063C34.4781 4.61406 33.8484 3.98438 33.0719 3.98438C32.2953 3.98438 31.6656 4.61406 31.6656 5.39063V6.10938H14.8469V5.39063C14.8469 4.61406 14.2172 3.98438 13.4406 3.98438C12.6641 3.98438 12.0344 4.61406 12.0344 5.39063V6.10938H8.64062C5.1 6.10938 2.21875 8.99063 2.21875 12.5312V35.5625C2.21875 39.1047 5.1 41.9844 8.64062 41.9844H25.5C26.2766 41.9844 26.9062 41.3547 26.9062 40.5781C26.9062 39.8016 26.2766 39.1703 25.5 39.1703Z" fill="#09983F"/>
                    <path d="M13.1469 19.1313C12.25 19.1313 11.5234 19.8579 11.5234 20.7548C11.5234 21.6517 12.25 22.3782 13.1469 22.3782C14.0438 22.3782 14.7703 21.6517 14.7703 20.7548C14.7703 19.8579 14.0438 19.1313 13.1469 19.1313Z" fill="#09983F"/>
                    <path d="M23.2548 19.1313C22.3579 19.1313 21.6313 19.8579 21.6313 20.7548C21.6313 21.6517 22.3579 22.3782 23.2548 22.3782C24.1517 22.3782 24.8782 21.6517 24.8782 20.7548C24.8782 19.8579 24.1501 19.1313 23.2548 19.1313Z" fill="#09983F"/>
                    <path d="M31.7373 20.7548C31.7373 21.6517 32.4639 22.3782 33.3607 22.3782C34.2576 22.3782 34.9842 21.6517 34.9842 20.7548C34.9842 19.8579 34.2576 19.1313 33.3607 19.1313C32.4639 19.1313 31.7373 19.8579 31.7373 20.7548Z" fill="#09983F"/>
                    <path d="M13.1469 27.9766C12.25 27.9766 11.5234 28.7031 11.5234 29.6C11.5234 30.4969 12.25 31.2234 13.1469 31.2234C14.0438 31.2234 14.7703 30.4969 14.7703 29.6C14.7703 28.7031 14.0438 27.9766 13.1469 27.9766Z" fill="#09983F"/>
                    <path d="M23.2548 27.9766C22.3579 27.9766 21.6313 28.7031 21.6313 29.6C21.6313 30.4969 22.3579 31.2234 23.2548 31.2234C24.1517 31.2234 24.8782 30.4969 24.8782 29.6C24.8782 28.7031 24.1501 27.9766 23.2548 27.9766Z" fill="#09983F"/>
                    <path d="M38.7924 26.0391C33.2846 26.0391 28.8018 30.5203 28.8018 36.0281C28.8018 41.5344 33.283 46.0172 38.7924 46.0172C44.3018 46.0172 48.783 41.5359 48.783 36.0281C48.7814 30.5187 44.3002 26.0391 38.7924 26.0391ZM38.7924 43.2016C34.8361 43.2016 31.6158 39.9828 31.6158 36.0266C31.6158 32.0703 34.8361 28.85 38.7924 28.85C42.7486 28.85 45.9689 32.0703 45.9689 36.0266C45.9689 39.9828 42.7486 43.2016 38.7924 43.2016Z" fill="#09983F"/>
                    <path d="M40.8296 33.4703L37.7483 35.9531L36.9811 34.9734C36.4999 34.3625 35.6202 34.2562 35.0061 34.7359C34.3952 35.2156 34.2889 36.0984 34.7686 36.7109L36.4155 38.8109C36.6467 39.1062 36.9874 39.2984 37.3608 39.3406C37.4139 39.3468 37.4671 39.35 37.5217 39.35C37.8405 39.35 38.153 39.2406 38.403 39.039L42.5936 35.664C43.1999 35.175 43.2936 34.2906 42.8077 33.6859C42.3202 33.0812 41.4342 32.9812 40.8296 33.4703Z" fill="#09983F"/>
                </svg>
                <p>Thank you for sending us your details. A member of our team will be in touch shortly.</p>
                <input class="btn" type="button" value="OK" />
            </div>
        </div>
    </div>`)

    const form = document.querySelector('.modal_form form'); 
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal_form_close') || e.target.classList.contains('modal_form') || e.target.closest('.modal_form_close')) {
            document.querySelector('.modal_form').classList.remove('active');
        }
    })
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        
        form.querySelectorAll('input[name]').forEach(item => {
            item.parentElement.classList.remove('error')
            if (item.value == '') {
                item.parentElement.classList.add('error')
            }
        })
        
        if (!form.querySelector('.error')) {
            fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Після успішної обробки даних ви можете відобразити повідомлення користувачу
                    alert('Form submitted successfully!');
                    
                    form.classList.style = 'none';
                    form.nextElementSibling.classList.style = 'block';
                    // Опційно: очистити поля форми після відправки
                    form.reset();
                } else {
                    alert('An error occurred while submitting the form.');
                }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
        }

    });
};
 
const orderHTML = (title, date, cost, text, total, learners) => {

    let path = window.location.href.includes('/booking-details/') || window.location.href.includes('/payment-details/');

    return `
    <div class="booking_order">
        <h3>Your order <span>${window.location.href.includes('/payment-details/') ? total : ''}</span></h3>
        <div class="booking_order_content ${path ? 'arrow-true' : ''}">
            <h4>${title}</h4>
            ${path ? '<p class="booking_order_learn">Number of learners - <span>' + learners + '</span></p>' : ''}
         
            ${date != null ? '<p class="booking_order_date">Start date - ' + date + '</p>' : ''}
            
            <p class="booking_order_cost">${cost}</p>
            <p class="booking_order_text">${text}</p>
        </div>
    </div>`
};

const actionBtns = (back, next) => {
    return `    
    <div class="action_buttons d-flex">
        <button type="button" class="btn_back" data-button="">Back</button>
        <button type="button" class="btn_continue d-flex align-items-center justify-content-center" data-button="">
            Continue
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L0.999999 1" stroke="white" stroke-width="2"/>
            </svg>
        </button>
    </div>`
}

const scrollTo = (slector) => {
      let top = slector.getBoundingClientRect().top - 60;

      seamless.polyfill();
      seamless.scrollBy(window, { behavior: "smooth", top: top, left: 0 });
}

 //add scroll polyfill
let scriptScroll = document.createElement('script');
scriptScroll.src = 'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js';
document.head.appendChild(scriptScroll)

let lat_lng;

const nextPage = (event, page, pages) => {
    let target = event.target;

    if (target.classList.contains('pagination_customer_prev')) {
        pushDataLayer('exp_book_imp_pagination', 'Pagination — Prev', 'Button', 'Course list');
        localStorage.setItem('paginatin_btn', '')
        target.nextElementSibling.querySelector('.selected').previousElementSibling.click()
        
    } else if (target.classList.contains('pagination_customer_next')) {
        pushDataLayer('exp_book_imp_pagination', 'Pagination — Next', 'Button', 'Course list');
        localStorage.setItem('paginatin_btn', '')
        target.previousElementSibling.querySelector('.selected').nextElementSibling.click()
    } else {

        target.parentElement.querySelector('.selected').classList.remove('selected');
        target.classList.add('selected')

        target.parentElement.querySelectorAll('li').forEach((item, index) => {
            item.style.display = '';
            if (target.dataset.index == 0 && index == 0) {
                target.nextElementSibling.style.display = 'block';
                target.nextElementSibling.nextElementSibling.style.display = 'block';
                item.closest('ul').previousElementSibling.disabled = true;
            } else if (target.dataset.index > 0 && index > 0 && target.dataset.index < pages && index < pages) {
                target.previousElementSibling.style.display = 'block';

                item.closest('ul').previousElementSibling.disabled = false;
                if (target.nextElementSibling) {
                    target.nextElementSibling.style.display = 'block';
                    item.closest('ul').nextElementSibling.disabled = false;
                } else {
                    item.closest('ul').nextElementSibling.disabled = true;
                }
            } else if (target.dataset.index >= pages && index >= pages) {
                target.previousElementSibling.style.display = 'block';
                target.previousElementSibling.previousElementSibling.style.display = 'block';
                item.closest('ul').nextElementSibling.disabled = true;
            } 
        })

        let lastPage = target.parentElement.querySelectorAll('li')[target.parentElement.querySelectorAll('li').length - 1];
        if (lastPage.classList.contains('selected')) {
            lastPage.previousElementSibling.previousElementSibling.style.display = 'block';
        }
    
        let selector = document.querySelectorAll('.card');
        selector.forEach((item, index) => {
            if (page == 0 && index < 5) {
                item.style.display = window.matchMedia("(min-width: 768px)").matches ? 'flex' : 'block';
            } else if (page * 5 < index && index < (page + 1) * 5) {
                item.style.display = window.matchMedia("(min-width: 768px)").matches ? 'flex' : 'block';
            } else {
                item.style = ''
            }
        })
        if (localStorage.getItem('paginatin_btn') == null) {
            pushDataLayer('exp_book_imp_pagination', `Pagination — ${page + 1}`, 'Button', 'Course list');
        }
        localStorage.removeItem('paginatin_btn')
      
    }

    scrollTo(document.querySelector('.filters_result'))
}

const addPagination = (length) => {
    let pages = Math.ceil(length / 5);

    let paginations = '';
    for (let i = 0; i < pages; i++) {
        paginations += `<li class="${i == 0 ? 'selected' : ''}" style="${i < 3 ? 'display:block':''}" data-index="${i}" onclick="nextPage(event, ${i}, ${pages})">${i + 1}</li>`
    }

    return paginations;
}

let checkLatLng = (val) => {
    if (val.includes('{"success":true,"lat_lng":[')) {
        lat_lng = val.split('"lat_lng":[')[1].split(']')[0].split(',');
       
        let pcode = window.location.href.split('/course/')[1].split('?')[0];


        fetch(`https://booking.skillstg.co.uk/api/schedule?pcode=${pcode}&lat=${lat_lng[0]}&lng=${lat_lng[1]}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then(res => res.json()).then(data => {
            console.log('data //booking.skillstg.co.uk/api/schedule?pcode : ')
            console.log(data)

            let list = data.grouped;

            let findContaner = setInterval(() => {
                if (document.querySelector('div.table-wrapper > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(3)') && 
                    document.querySelector('.filters_result_container') && 
                    document.querySelector('.pagination_customer ul')) {
                    clearInterval(findContaner);

                    currency = document.querySelector('div.table-wrapper > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td:nth-child(3)').innerHTML.charAt(0)

                    if (data.message && data.message == 'Unknown error') {
                        document.querySelector('.filters_result_container').innerHTML = 'not found';
                        document.querySelector('.pagination_customer').classList.remove('d-flex')
                    } else {
                        document.querySelector('.filters_result_container').innerHTML = '';
                    
                        for (let i = 0; i < list.length; i++) {
                            document.querySelector('.filters_result_container').insertAdjacentHTML('beforeend', 
                            card(list[i], i == 0 ? document.querySelector('.filters_result h5').innerHTML : '', i, currency ))

                            if (i == 0) {
                                document.querySelector('.filters_result_container').insertAdjacentHTML('beforeend', `
                                <p class="message_block">If suitable dates are not available please contact our customer service team on <a href="tel:08081642780" onclick="pushDataLayer('exp_book_imp_cusomer_service_phone', 'Customer service phon', 'Link', 'Course list');">0808 164 2780.</a> For courses that are sold out, we can add you to our waiting list for any cancellations.</p>
                                ${list.length > 1 ? '<h5>Check other locations</h5>' : ''}`)
                            }
                        }

                        let pagination = list.length > 5 ? addPagination(list.length) : '';
                        
                        if (list.length > 5 ) {
                            document.querySelector('.pagination_customer').classList.add('d-flex')
                        } else {
                            document.querySelector('.pagination_customer').classList.remove('d-flex')
                        }
                        document.querySelector('.pagination_customer ul').innerHTML = pagination;

                    }
                   
                }
            })
           
        }).catch((error) => {
            console.error('Error:', error);
        });
     
    }
}
console.defaultLog = console.log.bind(console);
console.defaultError = console.log.bind(console);

console.log = function () {
console.defaultLog.apply(console, arguments);

try {
    checkLatLng(JSON.stringify(arguments));
} catch (e) {}
};

console.error = function () {
console.defaultError.apply(console, arguments);

try {
    checkLatLng(JSON.stringify(arguments));
} catch (e) {}
};

             
let ratingsHTML = `
<style>
    .review-item {
        border: 1px solid #DBE8F4;
        background: #FFF;
        padding: 10px 16px;
        width: calc(50% - 8px);
        text-align: center;
        color: #49718C;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        height: fit-content;
    }
    .review-item img {
        margin: 0 auto 8px;
    }
</style>
<div class="d-flex justify-content-between review-block">
    <div class="review-item">
        <img src="${dir}google-rating.svg">
        <p>5.0 rating | 231 review</p>
    </div>
    <div class="review-item">
        <img src="${dir}transpilot-rating.svg">
        <p>5.0 rating | 446 review</p>
    </div>
</div>`

let backForPayment = false;
let media = window.matchMedia("(min-width: 768px)").matches;

//comes into view
let isScrolledIntoView = (el) => {
    if(document.querySelector(el) == null) return false;
    let rect = document.querySelector(el).getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}

let isVisibleReview = false;
let isVisibleAccreditations = false; 
let isVisibleBookOnsite = false; 

let isVisible = () => {
    let count = href.includes('/booking/') ? 2 : ''
    setTimeout(() => {
        if (isScrolledIntoView('.footer__accreditations') == true && isVisibleAccreditations == false) {
            isVisibleAccreditations = true;
            pushDataLayer(`exp_book_imp_our_accreditations_vis${count}`, 'Our accreditations visibility', 'Element visibility', 'Our accreditations');
        }
        if (isScrolledIntoView('.review-block') == true && isVisibleReview == false) {
            isVisibleReview = true;
            pushDataLayer(`exp_book_imp_google_trustpilot_vis${count}`, 'Google & Trustpilot visibiity', 'Element visibility', 'Google & Trustpilot section');
        }  if (isScrolledIntoView('.book_onsite[style="display: block;"]') == true && isVisibleBookOnsite == false) {
            isVisibleBookOnsite = true;
            pushDataLayer('exp_book_imp_course_onsite_vis', 'This course is also available onsite', 'Element visibility', 'Select location and date section');
        }
    }, 3000)
}

isVisible()
window.addEventListener('scroll', () => {
    if (
        isScrolledIntoView('.footer__accreditations') == true && isVisibleReview == false ||
        isScrolledIntoView('.review-block') == true && isVisibleAccreditations == false ||
        isScrolledIntoView('.book_onsite[style="display: block;"]') == true && isVisibleBookOnsite == false
    ) {
        isVisible()
    }
})

let init = () => {
  

    let changePositionAccredination = setInterval(() => {
        if (document.querySelector('.footer__top') && (document.querySelector('.radius-10 .paymant-info') || document.querySelector('.paymant-info')) && !document.querySelector('.footer__accreditations')) {
            clearInterval(changePositionAccredination)

            let parent = window.location.href.includes('booking.skillstg.co.uk/course/') ? '.radius-10' : '';

            parenInsert = media && !window.location.href.includes('booking.skillstg.co.uk/course/') ? document.querySelector(`.section.bg-white`) : document.querySelector(`${parent} .paymant-info`);

            parenInsert.insertAdjacentHTML('afterend', `<div class="footer__top footer__accreditations d-flex align-items-center justify-content-between flex-wrap pb-sm-40 pt-sm-40">
                ${document.querySelector('.footer__top').innerHTML}
            </div>`)
            
            let img = media ? '2' : '';
            document.querySelector(`${parent} .accreditation-items`).innerHTML = `<img src="${dir}accreditations${img}.svg" alt="accreditations">`;

            document.body.insertAdjacentHTML('afterbegin',`<style>
            .footer__top:not(.footer__accreditations) {
                display: none!important;
            }
            .footer__accreditations {
                margin: 0 -15px ${parent != '' ? '-75px' : '0'};
                background: #EAF5FE;
                padding: 24px 15px!important;
            }
            .footer__accreditations h5 {
                color: #0D3B5B!important;
                text-transform: lowercase;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 28px;
                margin-bottom: 12px!important;
            }
            .footer__accreditations h5::first-letter {
                text-transform: uppercase!important;
            }
            .footer__accreditations .accreditation-items {
                margin: 0!important;
            }
            .footer__accreditations .accreditation-items img {
                margin: 0!important;
            }
            @media (min-width: 768px) {
                .footer__accreditations {
                    max-width: 904px;
                    margin: 60px auto;
                }
            }
            </style>`)
        }   
    });

    if (href.includes('booking.skillstg.co.uk/course/')) {
        console.log('course')

        sessionStorage.setItem('timer', '15:00')
        //add style
        if (document.body && !document.querySelector('.style-exp')) {
            document.body.insertAdjacentHTML('afterbegin', style);
        }
        //remove style
        if (document.querySelector('.style-exp-2')) {
            document.querySelector('.style-exp-2').remove()
        }

        //hide modal location
        let hidePopupLocation = setInterval(() => {
            if (document.querySelector('.your-location-modal.modal--show input') && 
                document.querySelector('.your-location-modal.modal--show .btn--info')) {
                clearInterval(hidePopupLocation)

                document.querySelector('.your-location-modal.modal--show').classList.remove('modal--show')
                document.body.classList.remove('ovh')
            }
        });
        //change title top
        let clickSearch = false;
        let changeTitle = () => {
            let interval = setInterval(() => {
                if (document.querySelector('.firs-screen-home__content h1')) {
                    clearInterval(interval)

                    let title = document.querySelector('.firs-screen-home__content h1');
                    console.log(title)
                    let spt = title.innerHTML.split('(').join('<span>').split(')').join('</span>');
                    title.innerHTML = spt.replace('</span> <span>',' ');
        
    
                    if (clickSearch == true) {
                        clickSearch == false;
    
                        if (title.innerText.toLowerCase().includes('emergency first aid at work') || 
                            title.innerText.toLowerCase().includes('first aid at work - 18 hours') || 
                            title.innerText.toLowerCase().includes('blended paediatric first aid course')
                        ) {

                            document.querySelector('.book_onsite').style.display = window.matchMedia("(min-width: 768px)").matches ? 'flex' : 'block';
                            if (!document.querySelector('.modal_form')) {
                                formCourse(title.innerHTML);
                            }

                            isVisible()
                            document.querySelector('.book_onsite .btn').addEventListener('click', (e) => {
                                e.stopImmediatePropagation()
                                document.querySelector('.modal_form').classList.add('active')
                                pushDataLayer('exp_book_imp_book_onsite', 'Book onsite', 'Button', 'Select location and date section');
                            })
                        }
                    }
                }   
            });
        } 
        changeTitle()

        let filtersBlock = setInterval(() => {
            if (document.querySelector('.firs-screen-home__content .mb-30.mb-sm-40') && 
                document.querySelectorAll('.filters-block__item') && 
                document.querySelector('.filters-block-row+div')) {
                clearInterval(filtersBlock)
    
                document.querySelector('.firs-screen-home__content .mb-30.mb-sm-40').innerHTML = 'Please select your location and date first. It will help us suggest the best option for you.'
                document.querySelector('.filters-block-row+div').innerHTML = 'We have shown you the 6 closest venues based on your estimated location.';
    
                document.querySelector('.filters-block').insertAdjacentHTML('afterbegin',`
                <div class="filters-block__selected">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M16.6886 13.763L12.9597 10.0338C13.5932 9.02518 13.961 7.83301 13.961 6.55359C13.961 2.93393 11.0266 0 7.4071 0C3.78758 0 0.853516 2.93393 0.853516 6.55359C0.853516 10.1734 3.78744 13.107 7.4071 13.107C8.79944 13.107 10.0891 12.6717 11.1503 11.9321L14.8348 15.6169C15.0909 15.8726 15.4265 16 15.7617 16C16.0973 16 16.4325 15.8726 16.689 15.6169C17.2006 15.1047 17.2006 14.275 16.6886 13.763ZM7.4071 10.9838C4.96063 10.9838 2.97719 9.00046 2.97719 6.55386C2.97719 4.10726 4.96063 2.12381 7.4071 2.12381C9.8537 2.12381 11.837 4.10726 11.837 6.55386C11.837 9.00046 9.8537 10.9838 7.4071 10.9838Z" fill="#0D3B5B"/>
                    </svg>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <button type="button" class="btn_close"></button>
                </div>
                <div class="book_onsite">
                    <p>
                        <b>This course is also available onsite.</b>
                        Our in-house first aid training is fully accredited by the First Aid Industry Body (FAIB).
                    </p>
                    <button type="button" class="btn--info btn">Book onsite</button>
                </div>`)

                document.querySelector('.filters-block').insertAdjacentHTML('afterend',`
                <div class="filters_result">
                    <h5></h5>
                    <ul class="filters_result_container"></ul>
                    <nav class="pagination_customer align-items-center justify-content-between">
                        <button type="button" class="pagination_customer_prev pagination_customer_action d-flex align-items-center" disabled onclick="nextPage(event, '', '')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM19 7H1V9H19V7Z" fill="#DBE8F4"/>
                            </svg>
                            Prev
                        </button>
                        <ul class="d-flex"></ul>
                        <button type="button" class="pagination_customer_next pagination_customer_action d-flex align-items-center" onclick="nextPage(event, '', '')">
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                <path d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538407 11.3195 0.538407 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM-8.74228e-08 9L18 9L18 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#49718C"/>
                            </svg>
                        </button>
                    </nav>
                </div>
                <div class="border_info">
                    ${ratingsHTML}
                </div>`);

                if (media) {
                    document.querySelector('.border_info .review-block').before(document.querySelector('.firs-screen-home .paymant-info'))
                }

                document.querySelectorAll('.filters-block__item').forEach((item, index) => {
                    if (index == 1) {
                        item.querySelector('input').addEventListener('click', () => {
                            pushDataLayer('exp_book_imp_date_selection', 'Date selection', 'Input', 'Select location and date section');
                        })
                    }
                    if (index == 2) {
                        item.querySelector('.form-group-title').innerHTML = 'Your Location';
                        item.querySelector('input').placeholder = 'Type your location';
                        item.querySelector('.input_with_suffix').insertAdjacentHTML('afterend', `
                        <div class="d-flex flex-wrap tabs">
                            <p>London</p>  <p>Edinburgh</p>  <p>Birmingham</p>  <p>Glasgow</p>
                        </div>`)

                        item.querySelector('input').addEventListener('click', () => {
                            pushDataLayer('exp_book_imp_type_location', 'Type your location', 'Input', 'Select location and date section');
                        })
                    }
                    if (index == 3) {
                        item.querySelector('button').addEventListener('click', (e) => {
                            let input = document.querySelectorAll('.filters-block__item')[2].querySelector('input');

                            pushDataLayer('exp_book_imp_search', 'Search', 'Button', 'Select location and date');

                            if (input.value != '') {
    
                                input.style = '';
    
                                document.querySelectorAll('.filters-block__selected p')[0].innerHTML = document.querySelectorAll('.filters-block__item input')[2].value;
                                document.querySelectorAll('.filters-block__selected p')[1].innerHTML = document.querySelector('.react-datepicker__input-container input').value;
                                document.querySelector('.filters-block').classList.add('active');
                               
                                document.querySelector('.filters_result h5').innerHTML = `Closest to ` + document.querySelectorAll('.filters-block__selected p')[0].innerHTML;

                                clickSearch = true;
                                changeTitle();
        
                                setTimeout(() => {
                                    item.closest('.radius-10').classList.add('show')
                                }, 200)
                            } else {
                                input.style = 'border-color: #F00';
                            }
                        })
                    }
                })
    
                document.querySelector('.filters-block__selected').addEventListener('click', () => {
                    document.querySelector('.filters-block').classList.remove('active');
                    document.querySelector('.radius-10').classList.remove('show');
                    document.querySelector('.book_onsite').style = '';
                    document.querySelector('.filters_result_container').innerHTML = '';

                    pushDataLayer('exp_book_imp_date_selection2', 'Date selection', 'Input', 'Select location and date section');
                   
                })
    
                document.querySelectorAll('.tabs p').forEach(tab => {
                    tab.addEventListener('click', (e) => {

                        pushDataLayer('exp_book_imp_quick_location_select', `Quick location selection — ${tab.innerText}`, 'Link', 'Select location and date section');

                        const inputElement = document.querySelectorAll('.filters-block__item input')[2];
                        inputElement.value = tab.innerText;
                        inputElement.dispatchEvent(new Event('input', { bubbles: true }));
                    })
                })
              
            }
        });
    }
    
    if (href.includes('https://booking.skillstg.co.uk/booking/')) {
        console.log('booking')

        sessionStorage.setItem('timer', '15:00')

        //add style
        if (document.body && !document.querySelector('.style-exp-2')) {
            document.body.insertAdjacentHTML('afterbegin', style2);
        }

        let addActionBtn = setInterval(() => {
            if (document.querySelector('.paymant-info') && document.querySelector('.gutters-20') && document.querySelector('.page-action button')) {
                clearInterval(addActionBtn)

                if (!document.querySelector('.action_buttons')) {
                    document.querySelector('section.bg-white .paymant-info').insertAdjacentHTML('beforebegin', actionBtns())
                }
                //previos button
                document.querySelector('.btn_back').addEventListener('click', () => {
                    let name = document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerText;

                    if (document.querySelector('section.bg-white:not(.billing, .learner)')) {
                        document.querySelector('.page-action button').click()
                    } else {
                        if (document.querySelector('section.bg-white.learner')) {
                            document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerHTML = 'Billing Address Details';
                            document.querySelector('section.bg-white').classList.remove('learner')
                        } else {
                            if (document.querySelectorAll('section.bg-white > .container > .row.gutters-20.mb-50 button')[1].className.includes('btn--white-active')) {
                                document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerHTML = 'Billing Contact Details';
                            } else {
                                document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerHTML = 'Your Details';
                            }
                            document.querySelector('section.bg-white').classList.remove('billing')
                        }
                       
                        scrollTo(document.querySelector('section.bg-white'))
                    }
                    pushDataLayer('exp_book_imp_back', `Back — ${name}`, 'Button', 'Order details');
                })

                const isUrlValid = (userInput) => {
                    let url = userInput.value;
                    let res = url.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g);
                    if(res == null)
                        return false;
                    else
                        return true;
                }

                document.querySelectorAll('.btn--shadow').forEach((item, index) => {
                    index == 1 ? item.querySelector('span:not(.btn-icon)').innerHTML = 'I’m booking for one or more colleagues' : ''
                    item.addEventListener('click', (e) => {
                        document.querySelector('.section.bg-white > .container > h3.mb-10v').innerHTML = index == 1 ? 'Billing Contact Details' : 'Your Details';

                        if (index == 1) {
                            pushDataLayer('exp_book_imp_booking_for_myself', 'I`m booking for myself', 'Radiobitton', 'Who are you booking for?'); 
                        } else {
                            pushDataLayer('exp_book_imp_booking_for_colleges', 'I`m booking for colleges', 'Radiobitton', 'Who are you booking for?');
                        }
                    })
                })

                document.querySelector('.btn_continue').addEventListener('click', (e) => {
                    console.log(e.target)
                    
                    let name = document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerText;

                    if (document.querySelector('section.bg-white:not(.billing)')) {

                        console.log('btn 1')
                        let input = document.querySelectorAll('section.bg-white .row.gutters-20.mb-30:nth-child(5) > div:nth-child(-n+4) input');
                        console.log(input)
                        input.forEach(item => {
                            if (item.value == '' && !item.id.includes('react-select')) {
                                item.classList.add('error')
                            } 
                            if (item.placeholder == 'john.doe@example.com' && isUrlValid(item) != true) {
                                item.classList.add('error')
                            }
                            item.addEventListener('input', () => {
                                item.classList.remove('error')
                            })
                        })
                        console.log(document.querySelector('section.bg-white .row.gutters-20.mb-30:nth-child(5) > div:nth-child(-n+5) input.error'))
                        if (!document.querySelector('section.bg-white .row.gutters-20.mb-30:nth-child(5) > div:nth-child(-n+5) input.error')) {

                            document.querySelector('.section.bg-white').classList.add('billing')
                            scrollTo(document.querySelector('section.bg-white'))

                            if (document.querySelectorAll('section.bg-white > .container > .row.gutters-20.mb-50 button')[0].className.includes('btn--white-active')) {
                                document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerHTML = 'Billing Details';
                            }
                            if (document.querySelectorAll('section.bg-white > .container > .row.gutters-20.mb-50 button')[1].className.includes('btn--white-active')) {
                                document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerHTML = 'Billing Address Details';
                            }

                        }
                    
                    } else {
                        if (document.querySelector('section.bg-white.learner')) {
                            console.log('btn 2')
                            document.querySelectorAll('.page-action button')[1].click()


                        
                        } else {
                            console.log('btn 3')
                            if ( document.querySelectorAll('section.bg-white > .container > .row.gutters-20.mb-50 button')[1].className.includes('btn--white-active')) {
                                let input = document.querySelectorAll('section.bg-white .row.gutters-20.mb-30:nth-child(5) > div:nth-child(n+5) input');
                                input.forEach(item => {
                                    if (item.value == '' && !item.id.includes('react-select') && !item.closest('.form-group').innerHTML.includes('Company Name')) {
                                        item.classList.add('error')
                                    } 
                                    if (item.placeholder == 'john.doe@example.com' && isUrlValid(item) != true) {
                                        item.classList.add('error')
                                    }
                                    item.addEventListener('input', () => {
                                        item.classList.remove('error')
                                    })
                                })
                                if (!document.querySelector('section.bg-white .row.gutters-20.mb-30:nth-child(5) > div:nth-child(n+5) input.error')) {
                                
                                    document.querySelector('.section.bg-white').classList.add('learner')
                                    document.querySelector('main.content > .section.bg-white > .container > h3.mb-10v').innerHTML = 'Add Learner';
                                    if (!document.querySelector('section.bg-white .row.gutters-20.mb-30:not(:nth-child(5))')) {
                                        document.querySelector('.learner > div > div > a.btn--info').click()
                                    }
                                    scrollTo(document.querySelector('section.bg-white'))

                                }
                                
                                
                            } else {
                                document.querySelectorAll('.page-action button')[1].click()
                            }
                        }
                        
                    }
                    document.querySelectorAll('section.bg-white.learner > div a.btn--info').forEach(learn => {
                        learn.addEventListener('click', () => {
                            pushDataLayer('exp_book_imp_add_learner', 'Add learner', 'Button', 'Order details');
                        })
                    })
                    document.querySelectorAll('section.bg-white.learner > div a.btn--outline-info').forEach(learnRemove => {
                        learnRemove.addEventListener('click', () => {
                            pushDataLayer('exp_book_imp_remove_learner', 'Remove learner', 'Button', 'Order details');           
                        })
                    })

                    pushDataLayer('exp_book_imp_continue', `Continue — ${name}`, 'Button', 'Order details');
                })
            }   
        });
    }

    if (!href.includes('https://booking.skillstg.co.uk/course/') &&
        !href.includes('https://booking.skillstg.co.uk/payment/')) {

        let setOrder = setInterval(() => {
          
            if (
                (document.querySelector('main.content > .section.padding-top-sm-0 > .container h2') &&
                href.includes('https://booking.skillstg.co.uk/booking/')) ||
                (document.querySelector('main.content') && 
                !href.includes('https://booking.skillstg.co.uk/booking/')) && 
                !document.querySelector('.booking_order')
            ) {

                let parent = document.querySelector('main.content');

                if (media) {
                    if (document.querySelector('.right_info_top')) {
                        parent = document.querySelector('.right_info_top')
                    } else {
                        return
                    }
                } 

                let title = '',
                    pathname = '', 
                    titleRes = '',
                    costRes = '',
                    cost = '',
                    text = '',
                    total = 0,
                    learners = 1;

                if (href.includes('https://booking.skillstg.co.uk/payment-details/')) {
                    clearInterval(setOrder)
                    let dataBooking = JSON.parse(sessionStorage.getItem('data_booking'));

                    title = dataBooking.title;
                    titleRes = title.split('(').join(' <span class="span"> (') + '</span>';
                    costRes = dataBooking.cost;
                    text = dataBooking.text;
                    total = dataBooking.total;
                    learners = dataBooking.learners;
                } 
                if (document.querySelector('main.content > .section.padding-top-sm-0 > .container h2') && 
                    !href.includes('https://booking.skillstg.co.uk/payment-details/'))  {
                    clearInterval(setOrder)

                    title = document.querySelector('main.content > .section.padding-top-sm-0 > .container h2').innerHTML;
                    pathname = href.includes('/booking/') ? '/booking/' : '/booking-details/';

                    if (title.includes('(')){
                        titleRes = title.split('(').join(' <span class="span"> (') + ' (' + window.location.href.split(pathname)[1].split('/')[0] + ')</span>';

                    } else {
                        titleRes = title + ' <span class="span"> (' + window.location.href.split(pathname)[1].split('/')[0] + ')</span>';
                    
                    }
                   
                    cost = document.querySelector('main.content > .section.padding-top-sm-0 > .container > div:not(.booking_order) > p').innerHTML;
                    
                    let costspt = cost.split(').')[0]
                    costRes = costspt.split('(').join(' <span class="span">(') + ')</span>';
                    
                    text = cost.split(').')[1];
                }

                
                let dataOrder = {
                    'title': titleRes,
                    'date': sessionStorage.getItem('date_booking'),
                    'cost': costRes,
                    'text': text,
                    'total': total,
                    'learners': learners
                }
                sessionStorage.setItem('data_booking', JSON.stringify(dataOrder))
              
                let position = media ? 'beforeend' : 'afterbegin';

                parent.insertAdjacentHTML(position,
                orderHTML(titleRes, sessionStorage.getItem('date_booking'), costRes, text, total, learners))

                if (document.querySelector('.booking_order_content.arrow-true')) {
                    document.querySelector('.booking_order_content.arrow-true').addEventListener('click', (e) => {
                        e.currentTarget.classList.toggle('active');
                        let desk = e.currentTarget.classList.contains('active') ? 'Open order description' : 'Close order description'

                        pushDataLayer('exp_book_imp_close_order_description', desk, 'Accordeon', 'Order details');
                    })
                }
            }
        });

        //timer topbar
        let setTimer = setInterval(() => {
            if (
                (media && document.querySelector('.right_info_top')) ||
                (!media && 
                    document.querySelector('.header-fixed') && 
                    !document.querySelector('.topbar_timer')
                )
            ) {
                clearInterval(setTimer)
                let parent = media ? document.querySelector('.right_info_top') : document.querySelector('.header-fixed');

                parent.insertAdjacentHTML('afterbegin',`<p class="topbar_timer">Your seat has been reserved for: <span>
                ${sessionStorage.getItem('timer') ? sessionStorage.getItem('timer').replace('.',':') : '15:00'}
                </span></p>`)
             
                pushDataLayer('exp_book_imp_reserverd_timer_visibility', 'You seat has been reserved for', 'Element visibility', 'Header');

                const timerInterval = setInterval( () => {
                    if (document.querySelector('.topbar_timer span')) {
                        updateTimer(document.querySelector('.topbar_timer span'))
                    } else {
                        clearInterval(timerInterval)
                    }
                }, 1000);
            }
        });

        let setRowDesk = setInterval(() => {
            if (media && document.querySelector('section.section.bg-white')) {
                clearInterval(setRowDesk)
                document.querySelector('section.section.bg-white .container').insertAdjacentHTML('afterend', `
                <div class="right_info">
                    <div class="right_info_top"> </div>
                    <div class="right_info_bottom"><div class="paymant-info desk"></div> </div>
                </div>`)
            }
        })
    }
    if (href.includes('https://booking.skillstg.co.uk/payment-details/')) {
        let findBackBtn = setInterval(() => {
            if (document.querySelectorAll('.page-action button')) {
                clearInterval(findBackBtn)
                document.querySelector('.section.bg-white').classList.add('payment-details');

                document.querySelectorAll('.page-action button').forEach((button, index) => {
                    if (index == 1) {
                        button.innerHTML = 'PAY ' + JSON.parse(sessionStorage.getItem('data_booking')).total;
                    }
                    button.addEventListener('click', () => {
                        if (index == 0) {
                            backForPayment = true;
                            pushDataLayer('exp_book_imp_back', `Back — ${document.querySelector('.section.bg-white > .container > h3.mb-30').innerText}`, 'Button', 'Order details');
                        } else {
                            pushDataLayer('exp_book_imp_pay', 'Pay', 'Button', 'Order details');
                        }
                    })
                })
            }
        });
    }

    if (href.includes('https://booking.skillstg.co.uk/booking-details/')) {
        
        let actionBtns = setInterval(() => {
            if (document.querySelectorAll('.page-action button')) {
                clearInterval(actionBtns)

                document.querySelector('.section.bg-white').classList.add('booking-details');

                document.querySelectorAll('.page-action button').forEach((button, index) => {
                    if (index == 1) {
                        button.innerHTML = 'Continue to payment';
                    }
                    button.addEventListener('click', () => {
                        if (index == 1) {
                            backForPayment = false;
                            pushDataLayer('exp_book_imp_payment', `Continue to payment`, 'Button', 'Order details');
                        } else {
                            pushDataLayer('exp_book_imp_back', `Back — ${document.querySelector('.section.bg-white > .container > h3.mb-30').innerText}`, 'Button', 'Order details');
                        }
                    })
                })

                if (media) {
                    let title = JSON.parse(sessionStorage.getItem('data_booking')).title;
                    document.querySelector('main.content > .section.bg-white > .container > h3.mb-30').insertAdjacentHTML('afterend', 
                    `<p class="name-details">${title}</p>`)
                }

            }
        });
    }

    if (href.includes('https://booking.skillstg.co.uk/payment/')) {
        let payment = setInterval(() => {
            if (document.querySelector('section.section.bg-white > div > div.row.gutters-20 > div:nth-child(1) > button')) {
                clearInterval(payment)
                if (backForPayment == false) {
                    document.querySelector('section.section.bg-white > div > div.row.gutters-20 > div:nth-child(1) > button').click()
                } else {
                    document.querySelector('section.section.bg-white .page-action button').click()
                }
                
            }   
        });
    }


    let setRating = setInterval(() => {
        if (document.querySelector('.paymant-info') && 
            !document.querySelector('.review-block') &&
            !href.includes('booking.skillstg.co.uk/course/')) {
            
            let parent = document.querySelector('.paymant-info');
            if (media) {
                if (document.querySelector('.right_info_bottom')) {
                    clearInterval(setRating);
                    document.querySelector('.right_info_bottom > div.paymant-info.desk').innerHTML = document.querySelector('.paymant-info.mb-30.display-sm-block').innerHTML
                    parent = document.querySelector('.right_info_bottom > div.paymant-info.desk');
                    document.querySelector('.paymant-info.mb-30.display-sm-block .paymant-info__cards li:last-child svg').remove()
                } else {
                    return
                }
            } else {
                clearInterval(setRating);
            }

            parent.insertAdjacentHTML('afterend', ratingsHTML)
        }
    });
}

init()

//timer
let inputTime = sessionStorage.getItem('timer') && sessionStorage.getItem('timer') != null ? JSON.parse(JSON.stringify(sessionStorage.getItem('timer'))) : '15:00';

const [inputMinutes, inputSeconds] = inputTime.split(":").map(Number);

const timerDuration = inputMinutes * 60 + inputSeconds;

const startTime = Date.now();

let updateTimer = (parent) => {
  const currentTime = Date.now();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000); // перетворюємо в секунди
  const remainingTime = timerDuration - elapsedTime; // залишилось секунд
  
  if (remainingTime <= 0) {
    parent.parentElement.remove();
    return;
  }
  
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    if (parent) {
        parent.innerHTML = formattedTime;
        sessionStorage.setItem('timer', formattedTime)
    }
}

// let redirect = setInterval(() => {
//     let newHeref = window.location.href;
//     if (newHeref != href) {
//         href = newHeref;
//         // window.location.reload()
//         console.log('init')
//         init()
//     }
// })

let optionMut = {
    childList: true,
    subtree: true,
    attributes: true
};

let mut = new MutationObserver(function (muts) {
    let newHeref = window.location.href;
    if (newHeref != href) {
        mut.disconnect()
        href = newHeref;
        // window.location.reload()
        console.log('init')
        init()
    }

    mut.observe(document, optionMut);
    if (document.querySelectorAll('section.bg-white.learner > div > div > .col-md-12 span')) {
        mut.disconnect()
        document.querySelectorAll('section.bg-white.learner > div > div > .col-md-12 span').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                item.closest('.row.gutters-20').classList.toggle('hide')
            })
        })
    }
    mut.observe(document, optionMut);

    if (document.querySelector('section.section.bg-white.learner > div > div.row.gutters-20.mb-30')) {
        mut.disconnect()

        let count = 0;
        document.querySelectorAll('section.section.bg-white.learner > div > div.row.gutters-20.mb-30').forEach(item => {
            if (item.innerText.includes('Learner')) {
                count += 1;
                item.classList.add('learn')
                item.setAttribute('data-index', count)
            }
        })
        document.querySelector('section.section.bg-white.learner').setAttribute('data-count', count);
    }
    mut.observe(document, optionMut);

    if (document.querySelectorAll('section.bg-white.booking-details ul.detail-list > li') && 
        href.includes('https://booking.skillstg.co.uk/booking-details/') &&
        document.querySelector('.booking_order_learn span') &&
        document.querySelector('.booking_order h3 span')
    ) {
        mut.disconnect()

        let countLearn = 1;
        let total = 0;
            
        document.querySelectorAll('section.bg-white.booking-details ul.detail-list > li').forEach(item => {
            if (item.innerText.includes('Learners:')) {
                countLearn = item.querySelector('.color-primary-700').innerHTML;
            } 
        })

        document.querySelectorAll('section.bg-white.booking-details ul.detail-list > li').forEach(item => {
            if (item.innerText.includes('Total Price') && countLearn != '1') {
                total = item.querySelector('.color-primary-700').innerHTML;
            } else if (item.innerText.includes('Price') && !item.innerText.includes('Total Price') && countLearn == '1') {
                total = item.querySelector('.color-primary-700').innerHTML;
            }
        })
        
        document.querySelector('.booking_order_learn span').innerHTML = countLearn;

        let dataOrderObj = JSON.parse(sessionStorage.getItem('data_booking'))
 
        dataOrderObj.total = total;
        dataOrderObj.learners = countLearn;

        sessionStorage.setItem('data_booking', JSON.stringify(dataOrderObj))
        document.querySelector('.booking_order h3 span').innerHTML = total;
        
     
        document.querySelector('.booking_order').addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            e.currentTarget.classList.toggle('active');
        })

    }
    mut.observe(document, optionMut);
    if (document.querySelectorAll('section.section.bg-white:not(.learner) > div > div.row.gutters-20.mb-30')) {
        mut.disconnect()
        document.querySelectorAll('section.section.bg-white:not(.learner) > div > div.row.gutters-20.mb-30').forEach(item => {
            if (item.innerText.includes('Learner')) {
                item.classList.add('learn')
            }
        })
    }
    mut.observe(document, optionMut);
    if (document.querySelectorAll('section.bg-white input') && 
        (document.querySelector('.section.bg-white > .container > h3.mb-10v') ||
         document.querySelector('.section.bg-white > .container > h3.mb-30'))
    ) {
        document.querySelectorAll('section.bg-white input').forEach(input => {
            input.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                let name = input.previousElementSibling.innerText.replace('*',''),
                    step = document.querySelector('.section.bg-white > .container > h3.mb-10v') ? 
                        document.querySelector('.section.bg-white > .container > h3.mb-10v').innerText : 
                        document.querySelector('.section.bg-white > .container > h3.mb-30').innerText;

                pushDataLayer('exp_book_imp_order_details_input', `${name}— ${step}`, 'Input', 'Order details');
            })
        })
    }
    mut.observe(document, optionMut);
})  
mut.observe(document, optionMut);  


//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "exp_booking_process_improvements", "variant_1");
    }
}, 100)