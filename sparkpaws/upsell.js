// -------------------------------------
// CONSTANTS
// -------------------------------------
const DEVICE = screen.width < 768 ? 'mobile' : 'desktop'
const WAIT_INTERVAL_TIMEOUT = 100

const style = /*html*/`
    <style>
        li.hidden_li {
            display: none !important;
        }

        /* pdp upsell */
        .upsell_container {
            background: #F9F9F9;
            border: 1px solid #E7E7E7;
            padding: 28px 32px;
        }

        .upsell_container p {
            margin: 0;
        }

        .preview {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .preview img {
            max-width: 90px;
            height: auto;            
        }

        .preview a {
            cursor: pointer;
        }

        .preview img.blur_img {
            opacity: .3;
        }

        .two_images .preview img {
            max-width: 135px;
        }

        .preview svg:last-child {
            display: none;
        }

        .total_price {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            margin: 20px 0 !important;
        }

        .total_price .total_label  {
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            color: #5C5C5C;
            margin-right: 8px;
        }

        .total_price span {
            font-weight: 400;
            font-size: 16px;
            
            color: #939393;
        }

        .total_price span.total_standard_price {
            color: #3CBE1A;
        }

        .total_price span.total_discount_price {
            color: #3CBE1A;
            margin-right: 8px;
        }

        .total_price .total_regular_price {            
            text-decoration-line:line-through;
        }

        .add_btn {
            margin-bottom: 12px;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 2.2px;
            text-transform: uppercase;
            color: #FFFFFF;
            padding: 14px;
            width: 100%;
            background: #344D79;
        }

        .add_btn.disabled_btn {
            opacity: 0.3;
            pointer-events: none;
        }

        .upsell_item {
            display: flex;
            margin-top: 16px;
        }

        .img_wrapper {
            min-width: 90px;
            max-width: 90px;
            height: auto;
            margin: 0 8px;
        }

        p.curr_item {
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 2.2px;
            text-transform: uppercase;
            margin-bottom: 2px;
        }

        p.upsell_title {
            font-weight: 400;
            font-size: 20px;
            line-height: 33px;
            color: #5C5555;
            margin: 0 auto 20px;
            text-align: center;
        }

        p.upsell_title.save {
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            max-width: 215px;
        }

        .upsell_title a {
            color: #344D79;
            text-decoration: underline;
        }

        .upsell_title a[href="#"] {
            color: inherit;
            text-decoration: none;
            pointer-events: none;
        }

        .upsell_title .green_status {
            font-weight: 700;
            font-size: 10px;
            line-height: 16px;
            color: #FFFFFF;
            background: #3CBE1A;
            padding: 3px 10px;
            display: inline-block;
            vertical-align: middle;
            margin: 0 0 3px 3px;
            text-transform: uppercase;
        }

        .upsell_item_info {
            width: 100%;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
        }

        .upsell_item_name {
            font-weight: 700;
            font-size: 13px;
            line-height: 19px;
            color: #5C5555;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .upsell_container .upsell_item_info_bottom {
            display: flex;
            align-items: center;
            position: relative;
        }

        .upsell_item_info_bottom select {
            width: 76px;
        }

        .upsell_item_price {
            display: flex;
            flex-direction: column;
            align-items:flex-end;
            margin-left: 10px;
        }

        .upsell_item_price span {
            font-weight: 400;
            font-size: 13px;
            line-height: 13px;
            color: #939393;
        }

        .upsell_item_price span.standard_price {
            margin-top: -5px;
        }

        .upsell_item_price span.regular_price {
            text-decoration-line: line-through;
            margin-top: 5px;
        }

        .upsell_item_price span.discount_price {
            color: #3CBE1A;
        }

        /* custom select */
        .Cart .custom_select {
            position: relative;
        }

        .Cart .select_field,
        .inner_select {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            min-width: 76px;
            max-width: 76px;
            cursor: pointer;
            overflow: hidden;
            padding: 5px 22px 5px 10px;
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            color: #5C5C5C;
            background: #FFFFFF;
            border: 1px solid #E7E7E7;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
        }

        .upsell_container  .inner_select {
            max-width: 58px;
            min-width: 58px;
            background: transparent;
        }

        .upsell_container .custom_select {
            width: 100%;
        }

        .full_width .inner_select{
            max-width: initial;
            min-width: initial;
        }

        .custom_select p {
            margin: 0;
        }

        .selected_option {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .disabled_option svg {
            display: none;
        }

        .custom_select ul {
            width: 100%;
            position: absolute;
            top: 100%;
            margin: 0;
            padding: 0;
            text-align: center;
            list-style-type: none;
            z-index: 1;
            background-color: #fff;
            opacity: 0;
            transform: scaleY(0);
            border: 1px solid #E7E7E7;
            filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05));
            overflow: auto;
            z-index: 2;
        }
        
        .options-top .options {
            bottom: 100%;
            top: auto;
        }

        .mobile_size_label,
        .options li {
            padding: 8px;
            border-top: 1px solid #E7E7E7;
            font-weight: 400;
            font-size: 13px;
            line-height: 21px;
            color: #939393;
            text-align: center;
            cursor: pointer;
        }

        .mobile_size_label {
            display: none;
            pointer-events: none;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #5C5555;
        }

        .options li:first-child {
            border-top: none !important;
        }

        .options li.active_option {
            background: #F1F4F5 !important;
            color: #5C5C5C;
            border-top: none;
            cursor: auto;
        }

        .options li.active_option+li {
            border-top: none;
        }

        .custom_select ul li:hover {
            background-color: #fcfcfc;
        }

        .custom_select.active ul {
            opacity: 1;
            transform: scaleY(1);
        }

        .custom_select svg {
            position: absolute;
            right: 8px;
        }

        .custom_select.active svg {
            transform: rotate(180deg);
        }

        /* custom checkbox */
        .custom_checkbox {
            width: 28px;
            height: 18px;
            position: relative;
            margin: auto;
            flex-shrink: 0;
        }

        .custom_checkbox svg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        .custom_checkbox svg:first-child {
            display: none;
        }

        .custom_checkbox.checked svg:first-child {
            display: block;
        }

        .custom_overlay {
            z-index: -1;
        }

        .custom_overlay.active {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            opacity: 0.5;
            z-index: 99;
        }

        .msg {
            display: none;
            margin: 16px 0;
        }

        .msg.active {
            display: flex;
        }

        .msg p {
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            color: #5C5C5C;
            margin: 0;
        }

        .msg svg {
            margin: 4px 8px 0 0;
        }

        /* cart */
        .CustomCartExtras {
            border: none !important;
        }

        .Drawer__Main .select_field {
            min-width: initial;
            max-width: initial !important;
            width: 100%;
        }

        .Drawer__Container {
            padding-bottom: 0 !important;
        }

        .CustomExtras__Heading {
            margin: 0 !important;
        }

        .CustomCartExtras {
            background-color: #fff;
            border: none;
        }

        .Drawer__Main .select_field {
            min-width: initial;
            max-width: initial;
            padding: 8px 22px 8px 16px;
        }

        .Cart .custom_select svg {
            right: 16px;
        }

        .upsells_container {
            background: #fff;
        }

        .Cart .item {
            padding: 15px 30px;
            background: #F9F9F9;
        }

        .upsells_container .upsells_title {
            padding: 10px 30px;
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            text-align: left;
            color: #5C5C5C;
            margin: 0;
            border-bottom: 1px solid #E7E7E7;
        }

        .upsells_title.hide {
            display: none;
        }

        .item {            
            background: #F9F9F9;
            border-bottom: 1px solid #E7E7E7;
        }

        .Cart--expanded .upsells_container {
            border-top: 1px solid #E7E7E7;
        }

        .info_wrap {
            display: flex;
        }     
        
        .item img {
            width: 120px;
            height: 120px;
        }
        
        .info {
            margin-left: 24px;
            width: 100%;
        }

        .Drawer__Main .info {
            overflow: hidden;
        }

        .info .info_title {
            width: 100%;
            overflow:hidden;
            display:inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .info_title {
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: #5C5555;
        }

        .item_old_price {
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            color: #939393;
            text-decoration: line-through;
        }

        .info p {
            margin: 0;
        }

        .item_price {
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            color: #939393;
            margin-right: 2px;
        }

        .item_price.green_price {
            color: #3CBE1A;
        }

        .info_bottom > p {
            margin-bottom: 16px;
        }

        .Cart .add_btn {
            border: 1px solid #344D79;
            padding: 8px 28px;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 2.2px;
            text-transform: uppercase;
            color: #344D79;
            max-width: 124px;
            background-color: #fff;
            margin: 0;
        }

        .Drawer__Main .custom_select,
        .Cart--expanded .add_btn {
            margin-top: 10px;
        }

        .upsell_container .info_wrap {
            margin-bottom: 16px;
        }

        .info_wrap > a {
            flex-shrink: 0;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .Cart .custom_select ul {
            max-width: initial;
            width: 100%;
        }

        .Cart--expanded .custom_select ul {
            width: 100%;
            max-width: 340px;
        }

        .out_of_stock {
            pointer-events: none;
            background: #F9F9F9;
        }

        .Cart--expanded .custom_select svg {
            right: 8px !important;
        }

        .Cart--expanded .info_bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .Cart--expanded .item {
            padding: 24px;
        }

        .Cart--expanded .custom_select .select_field  {
            padding: 5px 22px 5px 10px;
        }

        .Cart--expanded .info_bottom > p {
            margin: 0;
        }

        /* free shipping */

        .free_shipping {
            background: #F1F4F5;
            border: 1px solid #E7E7E7;
            padding: 8px 24px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
        }

        .free_shipping img {
            flex-shrink: 0;
        }

        .free_shipping p {
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            letter-spacing: 2.2px;
            text-transform: uppercase;
            color: #1C1B1B;
            margin-left: 16px;
        }

        .free_shipping span {
            display: inline-block;
            width: 22px;
            position: relative;
        }

        .free_shipping span img {
            position: absolute;
            bottom: -3px;
        }
                    
        .upsell_info_inner {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        @media only screen and (min-width: 768px) {
            .Cart--expanded .item img {
                width: 104px;
                height: 104px;
            }

            .Cart--expanded .info {
                justify-content: center;   
            }

            .add_btn {
                margin: 0;
            }
        }

        @media only screen and (max-width: 768px) {
            .Cart--expanded .custom_select .select_field {
                max-width: initial;
                width: 100%;
            }

            p.upsell_title {
                font-size: 18px;
                line-height: 30px;
            }
            .total_price span {
                font-size: 16px;
            }

            .free_shipping,
            .Cart--expanded .upsells_container,
            .upsell_container {
                margin: 0 -24px;
            }

            .upsell_container {
                padding: 20px 24px;
            }

            .upsell_container .custom_select ul {                
                position: fixed;
                top: auto;
                bottom: 0;
                left: 0;
                width: 100%;
                max-height: 50vh;
                background-color: white;
                z-index: 999;   
            }

            .upsell_container .mobile_size_label {
                display: block;
            }

            /* cart */
            .upsells_title {
                padding: 10px 24px;
            }
            .Cart .item {
                padding: 15px 24px;
            }

            .item img {
                width: 90px;
                height: 90px;
            }

            .info {
                margin-left: 20px;
            }

            .info_title {
                font-size: 11px;
            }

            .info_bottom > p {
                margin-bottom: 4px;
            }

            .Cart--expanded .info_bottom {
                flex-direction: column;
                align-items: flex-start;
            }

            .Cart .custom_select {
                margin-top: 12px;
            }

            .Cart--expanded .custom_select ul {
                max-width: initial;
            }

            .Cart--expanded .info {
                overflow: hidden;
            }

            /* free shipping */

            .free_shipping {
                margin-bottom: 0;
            }
        }
    </style>
`

// PDP CONSTANTS
const setObj = {
    'tactical-collar-with-handle-lilac': 'tactical-collar-and-leash-set-lilac',
    'neoprene-dog-leash-lilac': 'tactical-collar-and-leash-set-lilac',
    'poop-bag-holder-lilac': 'tactical-collar-and-leash-set-lilac',

    'tactical-collar-with-handle-black': 'tactical-collar-and-leash-set-black',
    'comfort-control-dog-leash-multi-colors': 'tactical-collar-and-leash-set-black',
    'poop-bags': 'tactical-collar-and-leash-set-black',

    'tactical-dog-collar-black-2-5cm': 'tactical-dog-collar-set-black-2-5cm',
    'neoprene-dog-leash-black': 'tactical-dog-collar-set-black-2-5cm',
    'poop-bag-holder-black': 'tactical-dog-collar-set-black-2-5cm',

    'tactical-collar-with-handle-tan': 'tactical-collar-and-leash-set-tan',
    'neoprene-dog-leash-tan': 'tactical-collar-and-leash-set-tan',
    'poop-bag-holder-tan': 'tactical-collar-and-leash-set-tan',

    'tactical-collar-with-handle-green': 'tactical-collar-and-leash-set-green',
    'neoprene-dog-leash-green': 'tactical-collar-and-leash-set-green',
    'poop-bag-holder-green': 'tactical-collar-and-leash-set-green',

    'athleisure-dog-harness-green': 'athleisure-dog-harness-set-army-green-1',
    'waterproof-dog-leash-green': 'athleisure-dog-harness-set-army-green-1',

    'athleisure-cushioned-dog-harness': 'athleisure-dog-harness-set-salt-and-pepper',
    'waterproof-dog-leash-black': 'athleisure-dog-harness-set-salt-and-pepper',

    'athleisure-dog-harness-lilac': 'athleisure-dog-harness-set-lilac',

    // 'athleisure-dog-harness-red': '#',
    // 'waterproof-dog-leash-red': '#',
    // 'poop-bag-holder-red': '#',

    'comfort-control-no-pull-dog-harness-multi-color': 'comfort-control-no-pull-dog-harness-set-multi-color',

    'comfort-control-no-pull-dog-harness-lilac': 'comfort-control-no-pull-dog-harness-set-lilac',
    'comfort-control-no-pull-dog-harness-army-green': 'comfort-control-no-pull-dog-harness-set-army-green',
    'comfort-control-no-pull-dog-harness-tan': 'comfort-control-no-pull-dog-harness-set-tan',
}

// CART CONSTANTS
const isExpandedCart = window.location.pathname === '/cart'

let currency = ''
const waitForCurrency = setInterval(() => {
    if (window.afterpay_shop_money_format) {
        clearInterval(waitForCurrency)

        currency = afterpay_shop_money_format.split('{')[0]
    }
}, WAIT_INTERVAL_TIMEOUT)

const fbt_urls = [
    'dog-pajama',
    'cloud-knit-dog-sweater',
    'checkered-knit-sweater',
    'dog-knit-sweater',
    'bear-knit-sweater',
    'teddy-sherpa-dog-jacket-black',
    'winter-dog-jacket-vest-black',
    'all-weather-water-resistant-dog-shoes-4pc-set',
    'water-resistant-dog-jacket-vest-olive2',
    'all-weather-water-resistant-dog-shoes-4pc-set-red',
    'water-resistant-dog-jacket-vest-red2',
    'winter-dog-jacket-vest-black',
    'knit-pom-pom-dog-beanie-hat-grey',
    'teddy-sherpa-dog-jacket-dark-grey',
    'ear-protector-scarf',
    'dog-leg-warmer-socks',
    'copy-of-ear-protector-scarf-black'
]

const matchingProductHandles = [
    [
        'pink-blue-sky-human-hoodie-matching',
        'pink-blue-sky-dye-dog-hoodie'
    ],
    ['green-skydye-dog-hoodie', 'green-skydye-human-hoodie'],
    [
        'vintage-grey-sky-dye-dog-hoodie',
        'vintage-grey-sky-human-hoodie-matching'
    ],
    [
        'vintage-black-velvet-dog-hoodie',
        'vintage-black-velvet-human-hoodie'
    ],
    ['sky-dye-hoodie', 'blue-purple-sky-human-hoodie'],
    [
        'yellow-navy-sky-dye-dog-hoodie',
        'yellow-navy-sky-dye-human-hoodie-matching'
    ],
    ['red-skydye-dog-hoodie', 'red-skydye-human-hoodie'],
    [
        'purple-teal-mango-black-color-block-human-hoodie-dog-matching',
        'purple-teal-blush-black-color-block-dog-hoodie'
    ],
    ['black-olive-cream-dog-hoodie', 'olive-cream-human-hoodie'],
    ['green-plaid-dog-hoodie', 'green-plaid-human-dog-matching-hoodie'],
    ['woof-dog-hoodie-red', 'woof-dog-hoodie-black'],
    ['cotton-candy-color-block-hoodie', 'cotton-candy-human-hoodie'],
    [
        'pink-blue-cream-color-block-human-hoodie',
        'pink-blue-cream-color-block-hoodie'
    ],
    [
        'purple-green-yellow-color-block-human-hoodie',
        'purple-turquoise-yellow-color-block-hoodie'
    ],
    ['green-camo-shark-monster-dog-hoodie', 'woof-dog-hoodie-black'],
    [
        'yellow-plaid-dog-hoodie',
        'yellow-plaid-human-dog-matching-hoodie'
    ],
    ['pink-plaid-dog-hoodie', 'pink-plaid-human-dog-matching-hoodie'],
    [
        'pink-green-blue-colorblock-dog-hoodie',
        'navy-olive-pink-color-block-hoodie'
    ],
    [
        'blue-and-red-plaid-dog-hoodie',
        'blue-and-red-plaid-human-hoodie'
    ],
    [
        'teddy-bear-dog-hoodie-black',
        'teddy-sherpa-dog-jacket-dark-grey'
    ],
    [
        'teddy-sherpa-dog-jacket-maroon',
        'teddy-sherpa-dog-jacket-dark-grey'
    ],
    [
        'teddy-sherpa-dog-jacket-black',
        'teddy-sherpa-dog-jacket-dark-grey'
    ],
    [
        'sherpa-dog-jacket-brown',
        'teddy-sherpa-dog-jacket-dark-grey'
    ],
    [
        'sherpa-dog-jacket-pink',
        'teddy-sherpa-dog-jacket-dark-grey'
    ],
    [
        'teddy-sherpa-dog-jacket-pine-green',
        'teddy-sherpa-dog-jacket-dark-grey'
    ],
    [
        'tactical-collar-with-handle-lilac',
        'neoprene-dog-leash-lilac',
        'poop-bag-holder-lilac'
    ],
    [
        'tactical-collar-with-handle-black',
        'comfort-control-dog-leash-multi-colors',
        'poop-bags'
    ],
    [
        'tactical-dog-collar-black-2-5cm',
        'neoprene-dog-leash-black',
        'poop-bag-holder-black'
    ],
    [
        'tactical-collar-with-handle-tan',
        'neoprene-dog-leash-tan',
        'poop-bag-holder-tan'
    ],
    [
        'tactical-collar-with-handle-green',
        'neoprene-dog-leash-green',
        'poop-bag-holder-green'
    ],
    // [
    //     'tactical-collar-with-handle-pink',
    //     'neoprene-dog-leash-pink',
    //     'poop-bag-holder-pink'
    // ],
    [
        'athleisure-cushioned-dog-harness',
        'waterproof-dog-leash-black',
        'poop-bag-holder-black'
    ],
    [
        'athleisure-dog-harness-lilac',
        'neoprene-dog-leash-lilac',
        'poop-bag-holder-lilac'
    ],
    [
        'athleisure-dog-harness-green',
        'waterproof-dog-leash-green',
        'poop-bag-holder-green'
    ],
    [
        'athleisure-dog-harness-red',
        'waterproof-dog-leash-red',
        'poop-bag-holder-red'
    ],
    [
        'athleisure-dog-harness-pink',
        'waterproof-dog-leash-pink',
        'poop-bag-holder-pink'
    ],
    [
        'comfort-control-big-dog-harness-tan',
        'neoprene-dog-leash-tan',
        'poop-bag-holder-tan'
    ],
    [
        'comfort-control-big-dog-harness-lilac',
        'neoprene-dog-leash-lilac',
        'poop-bag-holder-lilac'
    ],
    [
        'comfort-control-big-dog-harness-green',
        'neoprene-dog-leash-green',
        'poop-bag-holder-green'
    ],
    [
        'comfort-control-no-pull-dog-harness-multi-color',
        'comfort-control-dog-leash-multi-colors',
        'poop-bags'
    ],
    [
        'comfort-control-no-pull-dog-harness-lilac',
        'neoprene-dog-leash-lilac',
        'poop-bag-holder-lilac'
    ],
    [
        'comfort-control-no-pull-dog-harness-army-green',
        'neoprene-dog-leash-green',
        'poop-bag-holder-green'
    ],
    [
        'comfort-control-no-pull-dog-harness-tan',
        'neoprene-dog-leash-tan',
        'poop-bag-holder-tan'
    ],
    // [
    //     'comfort-control-no-pull-dog-harness-pink',
    //     'neoprene-dog-leash-pink',
    //     'poop-bag-holder-pink'
    // ],
    ['tactical-collar-and-leash-set-lilac', 'comfort-control-no-pull-dog-harness-lilac'],
    ['tactical-collar-and-leash-set-black', 'comfort-control-no-pull-dog-harness-multi-color'],
    ['tactical-dog-collar-set-black-2-5cm', 'comfort-control-no-pull-dog-harness-black'],
    ['tactical-collar-and-leash-set-tan', 'comfort-control-no-pull-dog-harness-tan'],
    ['tactical-collar-and-leash-set-green', 'comfort-control-no-pull-dog-harness-army-green'],
    // ['tactical-collar-and-leash-set-pink', 'comfort-control-no-pull-dog-harness-pink'],
    ['athleisure-dog-harness-set-army-green-1', 'water-resistant-dog-jacket-vest-olive2'],
    ['athleisure-dog-harness-set-salt-and-pepper', 'winter-dog-jacket-vest-black'],
    ['athleisure-dog-harness-set-lilac', 'winter-dog-jacket-vest-black'],
    ['athleisure-cushioned-harness-set', 'winter-dog-jacket-vest-black'],
    // ['athleisure-dog-harness-set-red', 'water-resistant-dog-jacket-vest-red2'],
    ['athleisure-dog-harness-set-pink', 'water-resistant-dog-jacket-vest-red2'],
    ['comfort-control-no-pull-dog-harness-set-multi-color', 'tactical-collar-with-handle-black'],
    ['comfort-control-no-pull-dog-harness-set-lilac', 'tactical-collar-with-handle-lilac'],
    ['comfort-control-no-pull-dog-harness-set-army-green', 'tactical-collar-with-handle-green'],
    ['comfort-control-no-pull-dog-harness-set-tan', 'tactical-collar-with-handle-tan'],
    // ['anti-pull-y-harness-set-pink', 'tactical-collar-with-handle-pink'],
    ['cuban-link-20mm-gold-chain',
        'cuban-link-gold-dog-leash',
        'initial-letter-jewelry-tags'],

    ['pitbull-big-dog-gold-chain-collar',
        'cuban-link-gold-dog-leash',
        'initial-letter-jewelry-tags'],

    ['winter-dog-jacket-vest-black',
        'all-weather-water-resistant-dog-shoes-4pc-set'],

    ['water-resistant-dog-jacket-vest-olive2',
        'all-weather-water-resistant-dog-shoes-4pc-set'],

    ['water-resistant-dog-jacket-vest-red2',
        'all-weather-water-resistant-dog-shoes-4pc-set-red'],

    ['knit-pom-pom-dog-beanie-hat-grey',
        'teddy-sherpa-dog-jacket-dark-grey'],

    ['ear-protector-scarf-black',
        'dog-leg-warmer-socks'],

    ['ear-protector-scarf-grey',
        'dog-leg-warmer-socks'],

    ['copy-of-ear-protector-scarf-black',
        'dog-leg-warmer-socks'],
    ['bear-knit-sweater', 'teddy-sherpa-dog-jacket-black'],
    ['dog-pajama-navy-turquoise-pink', 'dog-pajama-cotton-candy'],
    [
        'dog-pajama-christmas-limited-edition',
        'dog-pajama-black-green-pink'
    ],
    ['dog-pajama-purple-green-yellow', 'dog-pajama-yellow-blue-pink'],
    ['blue-cloud-knit-dog-sweater', 'lilac-cloud-knit-dog-sweater'],
    ['pink-checkered-knit-sweater', 'navy-checkered-knit-sweater', 'pineapple-dog-knit-sweater'],
]

// let cachedUpsellData = JSON.parse(sessionStorage.getItem('myUpsellsArray'))

// let lastCartData = JSON.parse(sessionStorage.getItem('myCartItemsArray'))
let lastCartItemHandle
let cartItemsLength

if (JSON.parse(sessionStorage.getItem('myCartItemsArray'))) {
    lastCartItemHandle = JSON.parse(sessionStorage.getItem('myCartItemsArray'))[0].handle
    cartItemsLength = JSON.parse(sessionStorage.getItem('myCartItemsArray')).length
}

// -------------------------------------
// HTML ELEMENTS
// -------------------------------------
const customSelectHTML = (options, isCart = false) => {
    let optionsHTML
    let firstAvailableIndex

    if (isCart) {
        optionsHTML = options.map((option, index) => {
            if (firstAvailableIndex === undefined && option.available) {
                firstAvailableIndex = index
            }

            return `<li class="${index === firstAvailableIndex ? 'active_option' : ''} ${option.available ? '' : 'out_of_stock'}" 
            data-variant-id="${option.id}"
            data-variant-price="${option.price}"
            data-variant-old-price="${option?.compare_at_price || ''}"
            data-variant-img-src="${option?.featured_image?.src || ''}"
        >
            ${convertOptionTxt(option.title)}${option.available ? '' : ' (out of stock)'}
        </li>`
        }).join('')
    } else {
        optionsHTML = options.map((option, index) => {
            return `<li class="${index === 0 ? 'active_option' : ''}" 
                data-value="${option.value}" 
                data-variant="${option.variantId}">
                    ${convertOptionTxt(option.text)}
                </li>`
        }
        ).join('')
    }

    let inner

    if (isCart) {
        let txt = options[firstAvailableIndex].text || options[firstAvailableIndex].title

        inner = `
        <p class="selected_option"><span class="value">${convertOptionTxt(txt)}</span></p>            
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                    d="M5.07892 3.86875L1.5432 0.15625L0.533203 1.21675L5.07892 5.98975L9.62465 1.21675L8.61465 0.156251L5.07892 3.86875Z"
                    fill="#5C5C5C" />
            </svg>
        `
    } else {
        let txt = options[0].text || options[0].title

        inner = `<div class="inner_select">
        <p class="selected_option"><span class="value">${convertOptionTxt(txt)}</span></p>            
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                    d="M5.07892 3.86875L1.5432 0.15625L0.533203 1.21675L5.07892 5.98975L9.62465 1.21675L8.61465 0.156251L5.07892 3.86875Z"
                    fill="#5C5C5C" />
            </svg>
        </div>`
    }

    let mobileLabel = 'Size'

    if (options[0]?.text?.includes('/') || options[0]?.title?.includes('/')) {
        mobileLabel = 'Size & Color'
    }

    return /*html*/`
    <div class="custom_select">
        <div class="select_field${options.length < 2 ? ' disabled_option' : ''} ${options[0]?.text?.length > 3 || options[0]?.title?.length > 3 ? ' full_width' : ''}">
            ${inner}
        </div>
        <ul class="options">
            <span class="mobile_size_label">${mobileLabel}</span>
            ${optionsHTML}
        </ul>
    </div>
`
}

// PDP ELEMENTS
const pdpUpsellItem = ({ id, name, imgSrc, sizes, standardPrice, discountPrice, regularPrice, href }) => {
    const img = href ? `<a href="${href}"><img src="${imgSrc}" alt=""></a>` : `<img src="${imgSrc}" alt="">`
    const itemName = href ? `<a href="${href}" class="upsell_item_name">${name}</a>` : `<p class="upsell_item_name">${name}</p>`

    return /*html*/` 
    <div class="upsell_item" data-index="${id}">
        <div class="custom_checkbox checked">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0H0V18H18V0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z" fill="#344D79" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16 2V16H2V2H16ZM18 0H0V18H18V0Z" fill="#344D79" />
            </svg>
        </div>
        <div class="img_wrapper">
            ${img}
        </div>        
        <div class="upsell_item_info">
            <div class="upsell_info_inner">
                <div>
                    ${id == 0 ? '<p class="curr_item">Current Item:</p>' : ''}
                    ${itemName}
                </div>
                <div class="upsell_item_price">
                    <span class="discount_price">${discountPrice}</span>
                    <span class="regular_price">${regularPrice}</span>
                    <span class="standard_price">${standardPrice}</span>
                </div>
            </div>
            <div class="upsell_item_info_bottom">
                ${customSelectHTML(sizes)}
            </div>
        </div>
    </div>
    `
}

const previewImages = (items) => {
    const plusSVG = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15" stroke="black" stroke-linecap="square" />
            <path d="M1 8H15" stroke="black" stroke-linecap="square" />
        </svg>
        `

    const images = items.map(item => {
        let img = ''
        if (item.href) {
            img = `<a href="${item.href}"><img src="${item.imgSrc}" alt=""></a>${plusSVG}`
        } else {
            img = `<img src="${item.imgSrc}" alt="">${plusSVG}`
        }

        return img
    }).join('')

    return images
}

function findMatch(text) {
    if (text.includes("Collar")) {
        return "Collar"
    } else if (text.includes("Leash")) {
        return "Leash"
    } else if (text.includes("Initial Letter")) {
        return "Initial Letter"
    } else {
        return null // no match found
    }
}

const getTopLevelDomain = () => {
    const hostname = location.hostname
    const suffixMatch = hostname.match(/\.([a-z]{2,3})(?:\.([a-z]{2}))?$/i)
    const suffix = suffixMatch ? suffixMatch[0].slice(1) : ''

    switch (suffix) {
        case 'ca':
        case 'uk':
            return suffix
        default:
            return 'us'
    }
}

const pdpUpsellContainer = (items, isTwoImages) => {
    const totalStandardPrice = document.querySelector('.cbb-frequently-bought-total-price-regular-price')?.textContent
    const totalRegularPrice = document.querySelector('.cbb-frequently-bought-total-price-was-price')?.textContent
    const totalDiscountPrice = document.querySelector('.cbb-frequently-bought-total-price-sale-price')?.textContent
    const isSale = document.querySelector('.cbb-frequently-bought-discount-message')?.textContent.length > 0
    const images = previewImages(items)

    const upsellItemHTML = items.map(item => pdpUpsellItem(item)).join('')

    let title = ''
    let msg = ''

    let link

    if (document.querySelector('.cbb-frequently-bought-selector-link')) {
        link = document.querySelector('.cbb-frequently-bought-selector-link')
    }
    
    if (isSale) {
        const path = window.location.pathname
        const product = path.substring("/products/".length)
        const productSet = getProductSet(product)

        title = `<p class="upsell_title save">Upgrade to the matching <a href="/products/${productSet}">Walk Set</a> and <span class="green_status">Save 25%</span></p></p>`

        let msgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M15.75 8C15.75 12.2812 12.2799 15.75 8 15.75C3.72009 15.75 0.25 12.2812 0.25 8C0.25 3.72134 3.72009 0.25 8 0.25C12.2799 0.25 15.75 3.72134 15.75 8ZM8 9.5625C7.20609 9.5625 6.5625 10.2061 6.5625 11C6.5625 11.7939 7.20609 12.4375 8 12.4375C8.79391 12.4375 9.4375 11.7939 9.4375 11C9.4375 10.2061 8.79391 9.5625 8 9.5625ZM6.63522 4.39544L6.86703 8.64544C6.87787 8.84431 7.04231 9 7.24147 9H8.75853C8.95769 9 9.12213 8.84431 9.13297 8.64544L9.36478 4.39544C9.3765 4.18063 9.20547 4 8.99034 4H7.00962C6.7945 4 6.6235 4.18063 6.63522 4.39544Z" fill="#3CBE1A"/>
        </svg>`
        msg = `<div class="msg">${msgSvg}<p>Choose all products to receive <b>a 25%</b> discount on the walk set.</p></div>`
    } else if (window.location.pathname.includes('-set-')) {
        title = `<p class="upsell_title">Upgrade your walk set with <a href="${link.href}">${textBeforeDash(link.textContent)}</a> <span class="green_status">best deal</span></p>`
        fbt_urls.forEach(function(item) {
            if(window.location.pathname.includes(item)) {
                title = `<p class="upsell_title">Frequently bought together <span class="green_status">best deal</span></p>`
            }
        })
    } else if (!isSale && isTwoImages) {
        title = `<p class="upsell_title">Match your dog with a <a href="${link.href}">${textBeforeDash(link.textContent)}</a> <span class="green_status">best deal</span></p>`
        fbt_urls.forEach(function(item) {
            if(window.location.pathname.includes(item)) {
                title = `<p class="upsell_title">Frequently bought together <span class="green_status">best deal</span></p>`
            }
        })
    } else {
        const link2 = document.querySelectorAll('.cbb-frequently-bought-selector-link')[1]
        title = `<p class="upsell_title">Match it with a <a href="${link.href}">${textBeforeDash(link.textContent)}</a> and <a href="${link2.href}">${textBeforeDash(link2.textContent)}</a> to complete the look <span class="green_status">best deal</span></p>`
        fbt_urls.forEach(function(item) {
            if(window.location.pathname.includes(item)) {
                title = `<p class="upsell_title">Frequently bought together <span class="green_status">best deal</span></p>`
            }
        })
    }


    let country = getTopLevelDomain().toUpperCase()

    let shippingPrice = {
        'US': '$50',
        'UK': '£40',
        'CA': '$60'
    }

    return /*html*/`
        <div class="free_shipping" data-name="Free delivery">
            <img src="https://conversionratestore.github.io/projects/sparkpaws/img/delivery_truck.svg" alt="">
            <p>Free standard delivery<br>on order <b>over ${shippingPrice[country]} in </b><span><img src="https://conversionratestore.github.io/projects/sparkpaws/img/${country}.svg" alt=""></span></p>
        </div>
        <div class="upsell_container ${isTwoImages ? ' two_images' : ''}" data-name="upsell section pdp">
            ${title}
            <div class="preview">
                ${images}
            </div>
            <p class="total_price"><span class="total_label">Total Price:</span><span class="total_standard_price">${totalStandardPrice}</span><span class="total_discount_price">${totalDiscountPrice}</span> <span class="total_regular_price">${totalRegularPrice}</span></p>
            <button class="add_btn" data-name="Add select to cart button">Add selected to cart</button>
            <div class="upsell_items_wrap">
                ${upsellItemHTML}
            </div>            
        </div>
        ${msg}
    `
}

// -------------------------------------
// FUNCTIONS
// -------------------------------------

function convertOptionTxt(optionTxt) {
    const parts = optionTxt.split(/ \/ | - /)
    const sizes = ["OS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"]

    if (parts.length === 2) {
        let txt

        sizes.forEach(size => {
            if (parts[0] === size) {
                txt = `${parts[0]}, ${parts[1]}`
            } else if (parts[1] === size) {
                txt = `${parts[1]}, ${parts[0]}`
            }
        })

        if (txt) {
            return txt
        } else {
            return optionTxt
        }
    } else {
        return optionTxt
    }
}

const checkVisibilityAfterMs = (el, threshold = 1) => { // Checks element visibility after a specified time. 
    let timer

    const config = {
        root: null,
        threshold
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                timer = setTimeout(() => {
                    sendGAEvent(`Visibility ${el.dataset.name}`)
                }, 3000)
            } else {
                clearTimeout(timer)
            }
        })
    }, config)

    observer.observe(el)
}

const sendGAEvent = (eventAction, eventLabel = '') => { // Send a Google Analytics event
    const eventData = {
        event: 'event-to-ga',
        eventCategory: `Exp: Upsell pdp and cart. ${DEVICE}`,
        eventAction,
        eventLabel,
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)
    console.log(eventData)
}

const waitForElement = async (selector) => { // Wait for an element to appear on the page
    let count = 0
    while (!document.querySelector(selector)) {
        await new Promise(resolve => setTimeout(resolve, WAIT_INTERVAL_TIMEOUT))
        count++
        if (count >= 300) { // Wait for a maximum of 30 seconds (300 * 100ms)
            break
        }
    }
    return document.querySelector(selector)
}

// PDP FUNCTIONS

const parseImgSrcFromBg = (index) => document.querySelectorAll('.cbb-frequently-bought-product-image')[index].style.backgroundImage.match(/url\("(.+)"\)/)?.[1] || ''

const createUpsellItem = (li, index) => {
    const name = li.querySelector('h3')?.textContent
    const src = parseImgSrcFromBg(index)
    const sizes = [...document.querySelectorAll('.cbb-recommendations-variant-select')[index].querySelectorAll('option')]
        .map(option => ({
            value: option.value,
            variantId: option.dataset.variantId,
            text: option.text
        }))

    const standardPrice = document.querySelectorAll('.cbb-frequently-bought-selector-label-regular-price')[index]?.textContent || ''
    let regularPrice
    let discountPrice

    if (!standardPrice) {
        regularPrice = document.querySelectorAll('.cbb-frequently-bought-selector-label-compare-at-price')[index]?.textContent
        discountPrice = document.querySelectorAll('.cbb-frequently-bought-selector-label-sale-price')[index]?.textContent
    } else {
        regularPrice = ''
        discountPrice = ''
    }

    const item = {
        id: index,
        name,
        imgSrc: src,
        sizes,
        standardPrice,
        regularPrice,
        discountPrice,
    }

    // Add href link to item, except the first
    if (index !== 0) {
        const href = document.querySelectorAll('.cbb-frequently-bought-product-image-link')[index - 1]?.dataset?.href.replace(/(\?variant=)[^&]+/, '')
        item.href = href
    }

    return item
}

const changePrice = (index) => {
    if (document.querySelector('.total_standard_price')) {
        document.querySelector('.total_standard_price').textContent = document.querySelector('.cbb-frequently-bought-total-price-regular-price .money')?.textContent || ''
    }
    if (document.querySelector('.total_discount_price')) {
        document.querySelector('.total_discount_price').textContent = document.querySelector('.cbb-frequently-bought-total-price-sale-price .money')?.textContent || ''
    }
    if (document.querySelector('.total_regular_price')) {
        document.querySelector('.total_regular_price').textContent = document.querySelector('.cbb-frequently-bought-total-price-was-price .money')?.textContent || ''
    }
    if (document.querySelectorAll('.upsell_item_price .regular_price')[index].textContent
        && document.querySelectorAll('.cbb-frequently-bought-selector-label-compare-at-price .money')[index]
    ) {
        document.querySelectorAll('.upsell_item_price .regular_price')[index].textContent = document.querySelectorAll('.cbb-frequently-bought-selector-label-compare-at-price .money')[index].textContent
    }
    if (document.querySelectorAll('.upsell_item_price .discount_price')[index]
        && document.querySelectorAll('.cbb-frequently-bought-selector-label-sale-price .money')[index]
    ) {
        document.querySelectorAll('.upsell_item_price .discount_price')[index].textContent = document.querySelectorAll('.cbb-frequently-bought-selector-label-sale-price .money')[index].textContent
    }
}

const setupCustomCheckboxLogic = (length) => {
    const waitForEl = setInterval(() => {
        if (document.querySelectorAll('.custom_checkbox')[length - 1]) {
            clearInterval(waitForEl)

            let isSet = document.querySelector('.cbb-frequently-bought-discount-message')?.textContent.length >= 1

            document.querySelectorAll('.custom_checkbox').forEach((checkbox, index) => {
                checkbox.addEventListener('click', () => {
                    checkbox.classList.toggle('checked')

                    const previewImg = document.querySelectorAll('.preview img')[index]
                    if (!checkbox.classList.contains('checked') && !previewImg.classList.contains('blur_img')) {
                        previewImg.classList.add('blur_img')
                        // document.querySelector('.msg')?.classList.add('active')
                    } else if (checkbox.classList.contains('checked')) {
                        previewImg.classList.remove('blur_img')
                        // document.querySelector('.msg')?.classList.remove('active')
                    }

                    if (isSet) {
                        if (
                            document.querySelectorAll('.custom_checkbox')?.length === document.querySelectorAll('.custom_checkbox.checked')?.length
                            && document.querySelectorAll('.custom_checkbox.checked')?.length > 0
                        ) {
                            document.querySelector('.msg')?.classList.remove('active')
                        } else {
                            document.querySelector('.msg')?.classList.add('active')
                        }
                    }

                    document.querySelectorAll('.cbb-frequently-bought-selector-input')[index].click()

                    if (document.querySelectorAll('.custom_checkbox.checked').length < 1) {
                        document.querySelector('.upsell_container .add_btn').classList.add('disabled_btn')
                    } else {
                        document.querySelector('.upsell_container .add_btn.disabled_btn')?.classList.remove('disabled_btn')
                    }

                    changePrice(index)

                    sendGAEvent('Click on checkbox pdp', checkbox.closest('.upsell_item').querySelector('.upsell_item_name').textContent)
                })
            })
        }
    }, WAIT_INTERVAL_TIMEOUT)
}

// Set the maximum height of the options list based on the viewport height
function setMaxHeight(customSelect) {
    const options = customSelect.querySelector('.options')
    const customSelectRect = customSelect.getBoundingClientRect()
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    const spaceBelow = vh - (customSelectRect.top + customSelectRect.height) // Calculate the space remaining below the custom select
    const spaceAbove = customSelectRect.top - document.querySelector('.Header__Wrapper').clientHeight - 15 // Add offset from the top

    const maxHeight = Math.max(spaceBelow, spaceAbove)

    options.style.maxHeight = `${maxHeight - 15}px` // Subtract 15px from the maxHeight to add the 15px offset from the bottom
    options.style.overflowY = "auto" // Set overflow property to "auto" to enable scrolling if the content exceeds the maximum height

    if (maxHeight === spaceAbove) { // If the options list is positioned above the select, add a class to show the arrow pointing up
        customSelect.classList.add('options-top')
    } else { // Otherwise, remove the class
        customSelect.classList.remove('options-top')
    }
}

const setupCustomSelectsLogic = (length) => {
    const waitForCustomSelects = setInterval(() => {
        if (document.querySelectorAll('.select_field')[length - 1]) {
            clearInterval(waitForCustomSelects)

            const overlay = document.querySelector('.custom_overlay') || null

            document.querySelectorAll('.upsell_container .custom_select').forEach((select, index) => {
                // Get the necessary elements
                const selectField = select.querySelector('.select_field')
                const options = select.querySelectorAll('.options li')
                const value = select.querySelector('.value')

                // Show/hide the options list when the select field is clicked
                selectField.addEventListener('click', () => {
                    select.classList.toggle('active')

                    sendGAEvent('Click on size dropdown pdp', select.closest('.upsell_item_info').querySelector('.upsell_item_name').textContent)

                    if (DEVICE === 'desktop') {
                        setMaxHeight(select)
                    } else {
                        overlay?.classList.toggle('active')
                    }
                })

                // Update the selected option when an option is clicked
                options.forEach(function (option) {
                    option.addEventListener('click', function () {
                        // change value
                        value.textContent = this.textContent

                        sendGAEvent('Click on size choose pdp', option.innerText)

                        select.querySelector('.active_option')?.classList.remove('active_option')
                        option.classList.add('active_option')

                        select.classList.remove('active')
                        overlay?.classList.remove('active')

                        // imitate app value change
                        const selectElement = document.querySelectorAll('.cbb-recommendations-variant-select')[index]


                        selectElement.value = option.dataset.value
                        const event = new Event('change', { bubbles: true })
                        selectElement.dispatchEvent(event)

                        changePrice(index)

                        // change image if needed
                        const appItemImgSrc = parseImgSrcFromBg(index)

                        if (!appItemImgSrc.includes(document.querySelectorAll('.preview img')[index].src)) {
                            document.querySelectorAll('.preview img')[index].src = appItemImgSrc
                            document.querySelectorAll('.img_wrapper img')[index].src = appItemImgSrc
                        }

                        // change links 
                        if (document.querySelectorAll('.cbb-frequently-bought-selector-link')[index - 1]) {
                            const newLink = document.querySelectorAll('.cbb-frequently-bought-selector-link')[index - 1].href

                            document.querySelectorAll('.preview a')[index - 1].href = newLink
                            for (const a of document.querySelectorAll(`.upsell_item[data-index="${index}"] a`)) {
                                a.href = newLink
                            }
                        }
                    })
                })

                // Close the options list when clicking outside of it
                document.addEventListener('click', function (event) {
                    if (!select.contains(event.target)) {
                        select.classList.remove('active')
                    }
                })

                // Close the custom select when the user scrolls
                window.addEventListener('scroll', () => {
                    if (select.classList.contains('active')) {
                        select.classList.remove('active')
                    }
                    if (overlay?.classList.contains('active')) {
                        overlay.classList.remove('active')
                    }
                })
            })

            overlay?.addEventListener('click', () => overlay.classList.remove('active'))

            initSelectColors()
        }
    }, WAIT_INTERVAL_TIMEOUT)
}

function getProductSet(nameproductId) {
    const productName = nameproductId.replace('/products/', '')
    const set = Object.entries(setObj).find(([key]) => productName.includes(key))
    return set ? set[1] : null
}

function textBeforeDash(productName) {
    const dashIndex = productName.indexOf('-')
    const secondDashIndex = productName.indexOf('-', dashIndex + 1)

    if (secondDashIndex !== -1) {
        return productName.slice(0, secondDashIndex).trim()
    } else if (dashIndex !== -1) {
        return productName.slice(0, dashIndex).trim()
    } else {
        return productName
    }
}

const hideText = () => {
    const rteElement = document.querySelector('.Rte')
    const elementsToHide = [...rteElement.querySelectorAll('p, div')]
        .filter(el => el.textContent.toLowerCase().includes('set comes with')
            || el.textContent.toLowerCase().includes('save 20%')
            || el.textContent.toLowerCase().includes('save 25%')
            || el.textContent.toLowerCase().includes('your dog with')
            || el.textContent.toLowerCase().includes('grab a matching')
            || el.textContent.toLowerCase().includes('grab the matching')
        )

    elementsToHide.forEach(el => el.style.display = 'none')
}

function initSelectColors() {
    if (
        document.querySelectorAll('.ProductForm__Option:not(.no-js)').length > 1
        && document.querySelector('.cbb-frequently-bought-discount-message')?.textContent.length >= 1
    ) {
        let sectionIndex

        document.querySelectorAll('.ProductForm__Label').forEach((label, index) => {
            if (label.innerText.toLowerCase().includes('color')) {
                sectionIndex = index
            }
        })

        changeColorVariant(sectionIndex)

        document.querySelectorAll('.ProductForm__Option:not(.no-js)')[sectionIndex]?.addEventListener('click', (e) => {
            if (e.target.closest('.HorizontalList__Item')) {
                changeColorVariant(sectionIndex)
            }
        })
    }
}

function changeColorVariant(colorSectionIndex) {
    // Get the selected color value
    const selectedColor = document.querySelectorAll('.ProductForm__Option:not(.no-js)')[colorSectionIndex].querySelector('.SizeSwatch__Radio:checked').value

    // Get all li elements in the options list
    let customSelects = document.querySelectorAll('.upsell_container .custom_select')

    for (const customSelect of customSelects) {
        const listItems = customSelect.querySelectorAll('li')

        customSelect.querySelector('.active_option')?.classList.remove('active_option')

        for (const li of listItems) {
            if (!li.innerText.includes(selectedColor)) {
                // Add the 'active' class to the matching li element
                li.classList.add('hidden_li')
            } else {
                // Remove the 'active' class from any non-matching li elements
                li.classList.remove('hidden_li')

                if (!customSelect.querySelector('.active_option')) {
                    li.classList.add('active_option')
                    customSelect.querySelector('.selected_option .value').innerText = li.innerText

                    li.click()
                }
            }
        }
    }

    let activeOptions = [...document.querySelectorAll('.upsell_container .selected_option')].map(option => option.innerText.split(', ')[1])
    document.querySelector('.upsell_container').hidden = (new Set(activeOptions).size === 1) ? false : true
}

// CART FUNCTIONS
let isRunning = false
let controller = null

const getProduct = async (handle) => {
    const response = await fetch(`/products/${handle}.js`)
    if (!response.ok) throw new Error(`Failed to get product ${handle}. ${response.status} ${response.statusText}`)
    const product = await response.json()
    return product
}

const getCart = async () => {
    const response = await fetch('/cart.json', { signal: controller.signal })
    if (!response.ok) throw new Error(`Failed to get cart. ${response.status} ${response.statusText}`)
    return response.json()
}

const addItem = async (id, quantity = 1) => {
    const response = await fetch("/cart/add.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            id,
            quantity,
        }),
    })
    if (!response.ok) throw new Error(`Failed to add item to cart. ${response.status} ${response.statusText}`)
}

const formatPrice = (number) => {
    if (number) {
        // Convert the number to a string and split it into two parts: the whole number and the decimal part
        const [wholeNumber, decimalPart] = String(number / 100).split(".")

        // Add the comma separator every three digits in the whole number part
        const formattedWholeNumber = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        // Format the decimal part to always include two digits
        const formattedDecimalPart = decimalPart ? decimalPart.padEnd(2, "0") : "00"

        // Combine the whole number and decimal part with a period separator
        const formattedNumber = `${formattedWholeNumber}.${formattedDecimalPart}`

        // Return the formatted number

        return `${currency}${formattedNumber}`
    } else {
        return ''
    }
}

const isHandleExists = (arr, customHandle) => {
    if (arr) {
        return arr.some(obj => obj.handle == customHandle || obj.handle == setObj[customHandle])
    }
}

const setupCustomSelectCartLogic = (length) => {
    const waitForCustomSelects = setInterval(() => {
        if (document.querySelectorAll('.Cart .select_field')[length - 1]) {
            clearInterval(waitForCustomSelects)

            document.querySelectorAll('.Cart .custom_select').forEach((select, index) => {
                // Get the necessary elements
                const selectField = select.querySelector('.select_field')
                const options = select.querySelectorAll('.options li')
                const value = select.querySelector('.value')
                const item = select.closest('.item')
                const img = item.querySelector('img')
                const linksOnProduct = item.querySelectorAll('a')
                const oldPrice = item.querySelector('.item_old_price')
                const price = item.querySelector('.item_price')

                let imgOldSrc = img?.src || ''

                // Show/hide the options list when the select field is clicked
                selectField.addEventListener('click', () => {
                    sendGAEvent(`Click on size dropdown ${isExpandedCart ? 'cart' : 'slider cart'}`, select.closest('.item').querySelector('.info_title').textContent)

                    select.classList.toggle('active')
                    // select.closest('item').querySelector('img')?.src
                    imgOldSrc = img?.src
                    setMaxHeight(select)
                })

                // Update the selected option when an option is clicked
                options.forEach(function (option) {
                    option.addEventListener('click', () => {
                        // change values
                        value.textContent = option.textContent

                        sendGAEvent(`Click on size choose ${isExpandedCart ? 'cart' : 'slider cart'}`, option.innerText)

                        const { variantId, variantPrice, variantOldPrice, variantImgSrc } = option.dataset

                        select.querySelector('.active_option')?.classList.remove('active_option')
                        option.classList.add('active_option')

                        select.classList.remove('active')

                        // change img
                        if (imgOldSrc !== variantImgSrc && img?.src && variantImgSrc) {
                            img.src = variantImgSrc
                        }

                        // change href
                        for (const link of linksOnProduct) {
                            if (link.href.includes("?variant=")) {
                                link.href = link.href.replace(/variant=\d+/, `variant=${variantId}`)
                            } else {
                                link.href = `${link.href}?variant=${variantId}`
                            }
                        }

                        // change Prices
                        if (
                            variantOldPrice
                            && variantOldPrice !== variantPrice
                            && oldPrice.dataset.itemOldPrice != variantOldPrice
                        ) {
                            oldPrice.textContent = formatPrice(+variantOldPrice)
                        }

                        if (price.dataset.itemPrice != variantPrice) {
                            price.textContent = formatPrice(+variantPrice)
                        }
                    })
                })

                // Close the options list when clicking outside of it
                document.addEventListener('click', function (event) {
                    if (!select.contains(event.target)) {
                        select.classList.remove('active')
                    }
                })
            })

            document.body.addEventListener('wheel', (e) => {
                if (!e.target.closest('.custom_select.active') && document.querySelector('.custom_select.active')) {
                    document.querySelector('.custom_select.active').classList.remove('active')
                }
            })
        }
    }, WAIT_INTERVAL_TIMEOUT)
}

const addUpsellsToCart = (upsells, cartItems) => {
    const upsellHTML = (item) => {
        let isOldPrice = false

        if (item?.compare_at_price && item?.compare_at_price !== item.price) {
            isOldPrice = true
        }

        const upsellItem = `
        <div class="item" ${isHandleExists(cartItems, item.handle) ? 'hidden="true"' : ''}>
            <div class="info_wrap">
                <a href="${item.url}"><img src="${item.featured_image}" alt=""></a>
                <div class="info">
                    <a href="${item.url}"><p class="info_title">${item.title}</p></a>
                    <div class="info_bottom">
                        <p>
                            <span class="item_price${isOldPrice ? ' green_price' : ''}" data-item-price="${item.price}">${formatPrice(item.price)}</span>
                            <span class="item_old_price" data-item-old-price="${item?.compare_at_price}">${isOldPrice ? formatPrice(item?.compare_at_price) : ''}</span>
                        </p>
                        <button class="add_btn">Add</button>
                        
                    </div>
                    ${isExpandedCart && DEVICE === 'desktop' ? customSelectHTML(item.variants, true) : ''}                    
                </div>
            </div>
            ${!isExpandedCart || isExpandedCart && DEVICE === 'mobile' ? customSelectHTML(item.variants, true) : ''}
        </div>
        `

        return upsellItem
    }

    const allUpsellsHTML = upsells.map(upsellHTML).join('')

    const productsWrap = `
        <div class="upsells_container" data-name="upsell section ${isExpandedCart ? 'cart' : 'slider cart'}">
            <p class="upsells_title">Frequently bought together</p>
            ${allUpsellsHTML}
        </div>
        `

    if (isExpandedCart) {
        document.querySelector('.Cart--expanded .Cart__ItemList')?.insertAdjacentHTML('afterend', productsWrap)
    } else {
        document.querySelector('#sidebar-cart .Drawer__Main')?.insertAdjacentHTML('beforeend', productsWrap)
    }

    const waitForItemsAndTitle = setInterval(() => {
        if (document.querySelectorAll('.Drawer__Main .item')[upsells.length - 1] && document.querySelector('.upsells_title')) {
            clearInterval(waitForItemsAndTitle)

            const items = document.querySelectorAll('.Drawer__Main .item')

            let allHidden = true

            items.forEach(item => {
                if (!item.hidden) {
                    allHidden = false
                }
            })

            if (allHidden) {
                document.querySelector('.upsells_title').hidden = true
            } else {
                document.querySelector('.upsells_title').hidden = false
            }
        }
    }, WAIT_INTERVAL_TIMEOUT)

    setupCustomSelectCartLogic(upsells.length)
    waitForElement('.upsells_container').then(el => {
        checkVisibilityAfterMs(el, 0.2)

        let place = isExpandedCart ? 'cart page' : 'slider cart'

        el.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'img') {
                sendGAEvent(`Click on product image - ${place}`, e.target.closest('.item').querySelector('.info_title').textContent)
            }
            if (e.target.classList.contains('info_title')) {
                sendGAEvent(`Click on product title - ${place}`, e.target.closest('.item').querySelector('.info_title').textContent)
            }
        })
    })
}

const refreshCart = () => {
    document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
        bubbles: true,
    }))
}

const observeCartNodes = (callback) => {
    const targetNode = document.body
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(async function (addedNode) {
                if (
                    addedNode.classList
                    && addedNode.classList.contains('Cart')
                    && document.querySelector('.Cart__ItemList')
                    && !document.querySelector('.Cart__Empty')
                ) {
                    observer.disconnect()
                    // console.log('observer....')
                    await callback()
                    observer.observe(targetNode, config)
                }
            })
        })
    })
    const config = { childList: true, subtree: true }
    observer.observe(targetNode, config)
}

const getOneRandomSubArr = (handle) => {
    // Find the subarray that contains the handle
    const matchingSubarray = matchingProductHandles.find(subarray => subarray.includes(handle))

    // If no matching subarray is found, return an empty array
    if (!matchingSubarray) {
        return []
    } else {
        // Return all values in the subarray except for the handle
        const otherHandles = matchingSubarray.filter(subHandle => subHandle !== handle)
        console.log(otherHandles)
        return otherHandles
    }
}

const main = async () => {
    if (isRunning) {
        // Abort the previous request using the AbortController interface
        controller.abort()

        // Create a new AbortController instance for the new request
        controller = new AbortController()
    } else {
        // Create an AbortController instance for the first request
        controller = new AbortController()
        isRunning = true
    }

    try {
        if (
            document.querySelector('.CartItem__Title.Heading a')?.href.includes(lastCartItemHandle)
            && document.querySelectorAll('.Cart__ItemList .CartItem').length === cartItemsLength
            && JSON.parse(sessionStorage.getItem('myUpsellsArray'))
            && JSON.parse(sessionStorage.getItem('myCartItemsArray'))
            && !document.querySelector('.upsells_container')
        ) {
            // Render the cached data
            // console.log('%c GET CACHED products', 'color: green')

            addUpsellsToCart(JSON.parse(sessionStorage.getItem('myUpsellsArray')), JSON.parse(sessionStorage.getItem('myCartItemsArray')))
        } else {
            // console.log('%c FETCH NEW the suggested products', 'color: green')

            const cart = await getCart()

            if (cart.items.length) {
                const handle = cart.items[0].handle
                const uniqueArr = getOneRandomSubArr(handle)

                if (uniqueArr.length) {
                    const products = await Promise.all(uniqueArr.map(getProduct))

                    addUpsellsToCart(products, cart.items)

                    // Update the cached data
                    lastCartItemHandle = handle

                    sessionStorage.setItem('myUpsellsArray', JSON.stringify(products))
                    // cachedUpsellData = JSON.parse(sessionStorage.getItem('myUpsellsArray'))

                    sessionStorage.setItem('myCartItemsArray', JSON.stringify(cart.items))
                    // lastCartItems = JSON.parse(sessionStorage.getItem('myCartItemsArray'))

                    cartItemsLength = JSON.parse(sessionStorage.getItem('myCartItemsArray')).length
                }
            }
        }
    } catch (error) {
        console.error(error)
    } finally {
        isRunning = false
    }
}

// -------------------------------------
// MAKE DOM CHANGES
// -------------------------------------
document.head.insertAdjacentHTML('beforebegin', style)

// PDP CHANGES

waitForElement('.cbb-frequently-bought-total-price-sale-price', '.cbb-frequently-bought-total-price-regular-price').then(() => {
    // Get frequently bought items information from DOM
    const upsellsPdp = document.querySelectorAll('.cbb-frequently-bought-selector-list li')
    const upsellsLength = upsellsPdp.length
    const isTwoImages = upsellsLength < 3

    const waitForEl = setInterval(() => {
        if (
            document.querySelectorAll('.cbb-frequently-bought-product-image-link')[upsellsLength - 2]?.dataset?.href
            && document.querySelectorAll('.cbb-frequently-bought-selector-link')[upsellsLength - 2]?.href
        ) {
            clearInterval(waitForEl)

            const items = [...upsellsPdp].map(createUpsellItem)

            // Insert HTML for upsell items in DOM
            document.querySelector('.cbb-frequently-bought-container').insertAdjacentHTML('afterend',
                pdpUpsellContainer(items, isTwoImages))

            waitForElement('.free_shipping').then(el => checkVisibilityAfterMs(el))
            waitForElement('.upsell_container').then(el => {
                checkVisibilityAfterMs(el, 0.5)

                el.addEventListener('click', (e) => {
                    if (e.target.tagName.toLowerCase() === 'img') {
                        sendGAEvent(`Click on product image - pdp`, e.target.closest('.upsell_item').querySelector('.upsell_item_name').textContent)
                    }
                    if (e.target.classList.contains('upsell_item_name')) {
                        sendGAEvent('Click on product title - pdp', e.target.closest('.upsell_item').querySelector('.upsell_item_name').textContent)
                    }
                })
            })

            waitForElement('.upsell_container .upsell_title').then(el => {
                el.addEventListener('click', (e) => {
                    if (e.target.tagName.toLowerCase() === 'a') {
                        sendGAEvent(`Click on matching link pdp`, e.target.textContent)
                    }
                })
            })

            waitForElement('.upsell_container .add_btn').then(btn => {
                checkVisibilityAfterMs(btn)

                btn.addEventListener('click', async () => {
                    if (
                        document.querySelector('.cbb-frequently-bought-discount-message')?.textContent.length >= 1
                        && document.querySelectorAll('.custom_checkbox')?.length === document.querySelectorAll('.custom_checkbox.checked')?.length
                        && document.querySelectorAll('.custom_checkbox.checked')?.length > 0
                    ) {
                        const values = [...document.querySelectorAll('.upsell_container .value')]
                        let innerText

                        for (const el of values) {
                            if (el.innerText.split(',')[0] !== "OS") {
                                innerText = el.innerText
                                break
                            }
                        }

                        const set = await getProduct(document.querySelector('.upsell_title a')?.href.split('products/')[1])

                        let matchingVariant

                        if (innerText.length > 3) {
                            const [size, color] = innerText.split(', ')
                            matchingVariant = set.variants.find(obj => obj.title === `${color} / ${size}`)
                        } else {
                            matchingVariant = set.variants.find(obj => obj.title === innerText)
                        }

                        if (matchingVariant) {
                            await addItem(matchingVariant.id)
                        }
                    } else {
                        const variantIds = [...document.querySelectorAll('.upsell_container .options .active_option')]
                            .map(el => {
                                if (el.closest('.upsell_item')?.querySelector('.custom_checkbox.checked')) {
                                    return el.dataset.variant
                                }
                            })
                            .filter(id => id !== undefined)

                        const results = []
                        for (const variantId of variantIds) {
                            try {
                                const result = await addItem(variantId)
                                results.push(result)
                            } catch (error) {
                                console.error(`Error adding item with variant ID ${variantId}:`, error)
                            }
                        }
                    }

                    refreshCart()
                    document.querySelector('[aria-label="Open cart"]').click()

                    sendGAEvent('Click on Add select to cart button pdp')
                })
            })

            setupCustomCheckboxLogic(upsellsLength)
            setupCustomSelectsLogic(upsellsLength)

            hideText()
        }
    }, WAIT_INTERVAL_TIMEOUT)

    if (DEVICE === 'mobile') {
        const overlay = `<div class="custom_overlay"></div>`
        document.body.insertAdjacentHTML('beforeend', overlay)
    }
})

// CART CHANGES
waitForElement(`${isExpandedCart ? '.PageContent' : '#sidebar-cart'}`).then(cart => {
    cart.addEventListener('click', async (e) => {
        if (e.target.className === 'add_btn') {
            e.preventDefault()

            const variantId = e.target.closest('.item').querySelector('.active_option').dataset.variantId

            sendGAEvent(`Click on Add button ${isExpandedCart ? 'cart page' : 'slider cart'}`)

            try {
                await addItem(variantId)
                refreshCart()
            } catch (error) {
                console.error(error)
            }
        }
    })
})

waitForElement('.Cart__ItemList div').then(() => {
    main()
})

waitForElement('body').then(() => observeCartNodes(main))

sendGAEvent('loaded')
