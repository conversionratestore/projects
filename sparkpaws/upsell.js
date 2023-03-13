// -------------------------------------
// CONSTANTS
// -------------------------------------
const DEVICE = screen.width < 768 ? 'mobile' : 'desktop'
const WAIT_INTERVAL_TIMEOUT = 100

const style = /*html*/`
    <style>
        /* pdp upsell */
        .upsell_container {
            background: #F9F9F9;
            border: 1px solid #E7E7E7;
            padding: 25px;
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
            align-items: center;
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
            font-size: 17px;
            line-height: 28px;
            color: #939393;
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

        .upsell_item {
            display: flex;
            margin-top: 16px;
        }

        .img_wrapper {
            min-width: 90px;
            max-width: 90px;
            height: auto;
            margin: 0 11px;
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

        .upsell_title .green_status {
            font-weight: 700;
            font-size: 10px;
            line-height: 16px;
            color: #FFFFFF;
            background: #3CBE1A;
            padding: 3px 10px;
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 3px;
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
            margin-left: auto;
        }

        .upsell_item_price span {
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            color: #939393;
            margin-left: 4px;
        }

        .upsell_item_price span.regular_price {
            text-decoration-line: line-through;
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

        .custom_select p {
            margin: 0;
        }

        .selected_option {
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        .disabled_option .inner_select,
        .item .select_field.disabled_option {
            background: #F1F4F5;
            border: none;
            padding: 5px 10px !important;
            max-width: 67px;
            min-width: 67px;
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

        .Cart--expanded .upsells_title {
            display: none;
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
            padding: 10px 24px;
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
            overflow: hidden;
            width: 100%;
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
            width: 124px;
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
            bottom: -4px;
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

    'tactical-dog-collar-black-2-5cm': 'comfort-control-no-pull-dog-harness-set-black',
    'neoprene-dog-leash-black': 'comfort-control-no-pull-dog-harness-set-black',
    'poop-bag-holder-black': 'comfort-control-no-pull-dog-harness-set-black',

    'tactical-collar-with-handle-tan': 'tactical-collar-and-leash-set-tan',
    'neoprene-dog-leash-tan': 'tactical-collar-and-leash-set-tan',
    'poop-bag-holder-tan': 'tactical-collar-and-leash-set-tan',

    'tactical-collar-with-handle-green': 'tactical-collar-and-leash-set-green',
    'neoprene-dog-leash-green': 'tactical-collar-and-leash-set-green',
    'poop-bag-holder-green': 'tactical-collar-and-leash-set-green',

    'tactical-collar-with-handle-pink': 'tactical-collar-and-leash-set-pink',
    'neoprene-dog-leash-pink': 'tactical-collar-and-leash-set-pink',
    'poop-bag-holder-pink': 'tactical-collar-and-leash-set-pink',

    'athleisure-dog-harness-green': 'athleisure-dog-harness-set-army-green-1',
    'waterproof-dog-leash-green': 'athleisure-dog-harness-set-army-green-1',

    'athleisure-cushioned-dog-harness': 'athleisure-dog-harness-set-salt-and-pepper',
    'waterproof-dog-leash-black': 'athleisure-dog-harness-set-salt-and-pepper',

    'athleisure-dog-harness-lilac': 'athleisure-dog-harness-set-lilac',

    'athleisure-dog-harness-red': 'athleisure-dog-harness-set-red',
    'waterproof-dog-leash-red': 'athleisure-dog-harness-set-red',
    'poop-bag-holder-red': 'athleisure-dog-harness-set-red',

    'athleisure-dog-harness-pink': 'athleisure-dog-harness-set-pink',
    'waterproof-dog-leash-pink': 'athleisure-dog-harness-set-pink',

    'athleisure-dog-harness-blue': 'athleisure-dog-harness-set-blue',
    'waterproof-dog-leash-blue': 'athleisure-dog-harness-set-blue',
    'poop-bag-holder-blue': 'athleisure-dog-harness-set-blue',

    'comfort-control-big-dog-harness-black': 'comfort-control-big-dog-harness-set-black',

    'comfort-control-big-dog-harness-pink': 'comfort-control-big-dog-harness-set-pink',

    'comfort-control-big-dog-harness-tan': 'comfort-control-big-dog-harness-set-tan',

    'comfort-control-big-dog-harness-lilac': 'control-big-dog-harness-set-lilac',

    'comfort-control-big-dog-harness-green': 'comfort-control-big-dog-harness-set-green',

    'anti-pull-y-harness-black': 'anti-pull-y-harness-set-black',

    'comfort-control-no-pull-dog-harness-lilac': 'comfort-control-no-pull-dog-harness-set-lilac',
    'comfort-control-no-pull-dog-harness-army-green': 'comfort-control-no-pull-dog-harness-set-army-green',
    'comfort-control-no-pull-dog-harness-tan': 'comfort-control-no-pull-dog-harness-set-tan',
    'comfort-control-no-pull-dog-harness-pink': 'comfort-control-no-pull-dog-harness-pink',
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


const matchingProductHandles = [
    [
        'velvet-dog-hoodie-blue-checkered',
        'velvet-human-hoodie-blue-checkered'
    ],
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
    ['essential-dog-hoodie-pink', 'essential-human-hoodie-pink'],
    ['essential-dog-hoodie-mocha', 'essential-human-hoodie-mocha'],
    ['essential-dog-hoodie-teal', 'essential-human-hoodie-teal'],
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
        'teddy-sherpa-dog-jacket-black',
        'teddy-sherpa-dog-jacket-dark-grey',
        'sherpa-dog-jacket-brown',
        'sherpa-dog-jacket-pink',
        'teddy-sherpa-dog-jacket-pine-green',
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
    [
        'tactical-collar-with-handle-pink',
        'neoprene-dog-leash-pink',
        'poop-bag-holder-pink'
    ],
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
        'athleisure-dog-harness-blue',
        'waterproof-dog-leash-blue',
        'poop-bag-holder-blue'
    ],
    [
        'comfort-control-big-dog-harness-black',
        'neoprene-dog-leash-black',
        'poop-bag-holder-black'
    ],
    [
        'comfort-control-big-dog-harness-pink',
        'neoprene-dog-leash-pink',
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
        'anti-pull-y-harness-black',
        'neoprene-dog-leash-black',
        'poop-bag-holder-black'
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
    [
        'comfort-control-no-pull-dog-harness-pink',
        'neoprene-dog-leash-pink',
        'poop-bag-holder-pink'
    ],
    ['tactical-collar-and-leash-set-lilac', 'anti-pull-y-harness-lilac'],
    ['tactical-collar-and-leash-set-black', 'anti-pull-y-harness-black'],
    ['comfort-control-no-pull-dog-harness-set-black', 'comfort-control-no-pull-dog-harness-black'],
    ['tactical-collar-and-leash-set-tan', 'anti-pull-y-harness-tan'],
    ['tactical-collar-and-leash-set-green', 'anti-pull-y-harness-green'],
    ['tactical-collar-and-leash-set-pink', 'anti-pull-y-harness-pink'],
    ['athleisure-dog-harness-set-army-green-1', 'water-resistant-dog-jacket-vest-olive2'],
    ['athleisure-dog-harness-set-salt-and-pepper', 'winter-dog-jacket-vest-black'],
    ['athleisure-dog-harness-set-lilac', 'winter-dog-jacket-vest-black'],
    ['athleisure-cushioned-harness-set', 'winter-dog-jacket-vest-black'],
    ['athleisure-dog-harness-set-red', 'water-resistant-dog-jacket-vest-red2'],
    ['athleisure-dog-harness-set-pink', 'water-resistant-dog-jacket-vest-red2'],
    ['athleisure-dog-harness-set-blue', 'winter-dog-jacket-vest-black'],
    ['comfort-control-big-dog-harness-set-black', 'anti-pull-y-harness-black'],
    ['comfort-control-big-dog-harness-set-pink', 'anti-pull-y-harness-pink'],
    ['comfort-control-big-dog-harness-set-tan', 'anti-pull-y-harness-tan'],
    ['control-big-dog-harness-set-lilac', 'anti-pull-y-harness-lilac'],
    ['comfort-control-big-dog-harness-set-green', 'anti-pull-y-harness-green'],
    ['anti-pull-y-harness-set-black', 'tactical-collar-with-handle-black'],
    ['anti-pull-y-harness-set-lilac', 'tactical-collar-with-handle-lilac'],
    ['anti-pull-y-harness-set-green', 'tactical-collar-with-handle-green'],
    ['anti-pull-y-harness-set-tan', 'tactical-collar-with-handle-tan'],
    ['anti-pull-y-harness-set-pink', 'tactical-collar-with-handle-pink'],
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
    ['dog-pajama-cotton-candy', 'dog-pajama-navy-turquoise-pink'],
    [
        'dog-pajama-black-green-pink',
        'dog-pajama-christmas-limited-edition'
    ],
    [
        'dog-pajama-christmas-limited-edition',
        'dog-pajama-black-green-pink'
    ],
    ['dog-pajama-purple-green-yellow', 'dog-pajama-yellow-blue-pink'],
    ['dog-pajama-yellow-blue-pink', 'dog-pajama-purple-green-yellow'],
    ['blue-cloud-knit-dog-sweater', 'lilac-cloud-knit-dog-sweater'],
    ['pink-checkered-knit-sweater', 'navy-checkered-knit-sweater'],
    ['pineapple-dog-knit-sweater', ''],
    [
        'pink-and-blue-sky-dye-t-shirt',
        'pink-and-blue-sky-dye-cooling-bandana'
    ],
    ['olive-cream-t-shirt', 'olive-cream-cooling-bandana'],
    ['cotton-candy-t-shirt', 'cotton-candy-cooling-bandana'],
    ['navy-olive-pink-t-shirt', 'navy-olive-pink-cooling-bandana'],
    ['cyber-punk-t-shirt', 'cyber-punk-cooling-bandana'],
    [
        'vintage-grey-sky-dye-t-shirt',
        'vintage-grey-sky-dye-cooling-bandana'
    ],
    [
        'green-blue-peach-sky-dye-t-shirt',
        'green-blue-peach-sky-dye-cooling-bandana'
    ],
    [
        'yellow-blue-green-sky-dye-t-shirt',
        'yellow-blue-green-sky-dye-cooling-bandana'
    ]
]

let cachedUpsellData = null

let lastCartItemHandle = document.querySelector('.CartItem__Title.Heading a')?.href
let cartItemsLength = document.querySelectorAll('.Cart__ItemList .CartItem').length || null

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
            ${option.title}${option.available ? '' : ' (out of stock)'}
        </li>`
        }).join('')
    } else {
        optionsHTML = options.map((option, index) => `
        <li class="${index === 0 ? 'active_option' : ''}" 
            data-value="${option.value}" 
            data-variant="${option.variantId}">${option.text}</li>`).join('')
    }

    let inner

    if (isCart) {
        inner = `
        <p class="selected_option">Size: <span class="value">${options[firstAvailableIndex].text || options[firstAvailableIndex].title}</span></p>            
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                    d="M5.07892 3.86875L1.5432 0.15625L0.533203 1.21675L5.07892 5.98975L9.62465 1.21675L8.61465 0.156251L5.07892 3.86875Z"
                    fill="#5C5C5C" />
            </svg>
        `
    } else {
        inner = `<div class="inner_select">
        <p class="selected_option">Size: <span class="value">${options[0].text || options[0].title}</span></p>            
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                    d="M5.07892 3.86875L1.5432 0.15625L0.533203 1.21675L5.07892 5.98975L9.62465 1.21675L8.61465 0.156251L5.07892 3.86875Z"
                    fill="#5C5C5C" />
            </svg>
        </div>`
    }

    let mobileLabel = 'Size'

    if (isCart && (options[0]?.text?.includes('/') || options[0]?.title?.includes('/'))) {
        mobileLabel = 'Color / Size'
    }

    return /*html*/`
    <div class="custom_select">
        <div class="select_field${options.length < 2 ? ' disabled_option' : ''}">
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
            <div>
                ${id == 0 ? '<p class="curr_item">Current Item:</p>' : ''}
                ${itemName}
            </div>
            <div class="upsell_item_info_bottom">
                ${customSelectHTML(sizes)}
                <div class="upsell_item_price">
                    <span class="discount_price">${discountPrice}</span>
                    <span class="regular_price">${regularPrice}</span>
                    <span class="standard_price">${standardPrice}</span>
                </div>
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

const pdpUpsellContainer = (items, isTwoImages) => {
    const totalStandardPrice = document.querySelector('.cbb-frequently-bought-total-price-regular-price')?.textContent
    const totalRegularPrice = document.querySelector('.cbb-frequently-bought-total-price-was-price')?.textContent
    const totalDiscountPrice = document.querySelector('.cbb-frequently-bought-total-price-sale-price')?.textContent
    const isSale = document.querySelector('.cbb-frequently-bought-discount-message')?.textContent.length > 0
    const images = previewImages(items)

    const upsellItemHTML = items.map(item => pdpUpsellItem(item)).join('')

    let title = ''
    let msg = ''

    if (isSale) {
        const path = window.location.pathname
        const product = path.substring("/products/".length)
        const productSet = getProductSet(product)

        title = `<p class="upsell_title save">Upgrade to the matching <a href="/products/${productSet}">Walk Set</a> and <span class="green_status">Save 25%</span></p></p>`

        let msgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M15.75 8C15.75 12.2812 12.2799 15.75 8 15.75C3.72009 15.75 0.25 12.2812 0.25 8C0.25 3.72134 3.72009 0.25 8 0.25C12.2799 0.25 15.75 3.72134 15.75 8ZM8 9.5625C7.20609 9.5625 6.5625 10.2061 6.5625 11C6.5625 11.7939 7.20609 12.4375 8 12.4375C8.79391 12.4375 9.4375 11.7939 9.4375 11C9.4375 10.2061 8.79391 9.5625 8 9.5625ZM6.63522 4.39544L6.86703 8.64544C6.87787 8.84431 7.04231 9 7.24147 9H8.75853C8.95769 9 9.12213 8.84431 9.13297 8.64544L9.36478 4.39544C9.3765 4.18063 9.20547 4 8.99034 4H7.00962C6.7945 4 6.6235 4.18063 6.63522 4.39544Z" fill="#3CBE1A"/>
        </svg>`
        msg = `<div class="msg">${msgSvg}<p>Choose all products to receive <b>a 20%</b> discount on the walk set.</p></div>`
    } else if (!isSale && isTwoImages) {
        const link = document.querySelector('.cbb-frequently-bought-selector-link')

        title = `<p class="upsell_title">Match your dog with a <a href="${link.href}">${textBeforeDash(link.textContent)}</a> <span class="green_status">best deal</span></p>`
    } else {
        const link = document.querySelector('.cbb-frequently-bought-selector-link')
        const link2 = document.querySelectorAll('.cbb-frequently-bought-selector-link')[1]

        title = `<p class="upsell_title">Match it with a <a href="${link.href}">${textBeforeDash(link.textContent)}</a> and <a href="${link2.href}">${textBeforeDash(link2.textContent)}</a> to complete the look. <span class="green_status">best deal</span></p>`
    }

    const truckSVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_256_434)">
    <path d="M34.3423 31.074C33.6644 31.0745 33.0017 30.874 32.4378 30.4978C31.874 30.1215 31.4344 29.5865 31.1746 28.9604C30.9149 28.3343 30.8467 27.6453 30.9786 26.9804C31.1106 26.3155 31.4367 25.7047 31.9159 25.2252C32.395 24.7458 33.0055 24.4192 33.6703 24.2867C34.3351 24.1543 35.0242 24.222 35.6505 24.4813C36.2768 24.7406 36.8121 25.1798 37.1887 25.7434C37.5654 26.3069 37.7664 26.9695 37.7664 27.6474C37.766 28.5556 37.4052 29.4266 36.7632 30.069C36.1212 30.7115 35.2505 31.0729 34.3423 31.074ZM34.3423 25.4707C33.9116 25.4702 33.4906 25.5974 33.1323 25.8363C32.774 26.0752 32.4946 26.415 32.3295 26.8127C32.1644 27.2104 32.1209 27.6481 32.2046 28.0705C32.2883 28.4929 32.4954 28.881 32.7997 29.1856C33.104 29.4903 33.4919 29.6978 33.9142 29.782C34.3365 29.8662 34.7743 29.8233 35.1722 29.6586C35.57 29.4939 35.9101 29.2149 36.1494 28.8569C36.3887 28.4989 36.5164 28.078 36.5164 27.6474C36.5162 27.0706 36.2871 26.5174 35.8795 26.1094C35.4719 25.7013 34.919 25.4716 34.3423 25.4707Z" fill="#1C1B1B"/>
    <path d="M16.2855 31.074C15.6076 31.0747 14.9448 30.8743 14.3808 30.4982C13.8169 30.122 13.3771 29.5871 13.1173 28.961C12.8574 28.3349 12.7891 27.6458 12.9209 26.9809C13.0527 26.316 13.3788 25.7051 13.8579 25.2255C14.337 24.746 14.9476 24.4193 15.6124 24.2868C16.2772 24.1543 16.9664 24.222 17.5927 24.4812C18.219 24.7405 18.7544 25.1797 19.1311 25.7433C19.5077 26.3069 19.7088 26.9695 19.7088 27.6474C19.7081 28.5554 19.3474 29.4261 18.7056 30.0685C18.0638 30.7109 17.1935 31.0725 16.2855 31.074ZM16.2855 25.4707C15.8548 25.47 15.4337 25.5971 15.0753 25.8359C14.7169 26.0747 14.4374 26.4144 14.2721 26.8121C14.1069 27.2098 14.0633 27.6475 14.1469 28.07C14.2305 28.4924 14.4375 28.8806 14.7418 29.1853C15.0461 29.4901 15.4339 29.6977 15.8563 29.782C16.2786 29.8662 16.7164 29.8233 17.1143 29.6587C17.5123 29.494 17.8524 29.215 18.0917 28.857C18.3311 28.499 18.4588 28.078 18.4588 27.6474C18.4584 27.0708 18.2294 26.5179 17.822 26.1099C17.4146 25.7019 16.862 25.472 16.2855 25.4707Z" fill="#1C1B1B"/>
    <path d="M38.8507 28.2722H37.1415C36.9757 28.2722 36.8168 28.2064 36.6996 28.0892C36.5823 27.972 36.5165 27.813 36.5165 27.6472C36.5165 27.4815 36.5823 27.3225 36.6996 27.2053C36.8168 27.0881 36.9757 27.0222 37.1415 27.0222H38.674V23.7081C38.6736 23.26 38.5589 22.8194 38.3407 22.4281L34.9573 16.3622C34.9284 16.3105 34.8862 16.2674 34.8351 16.2373C34.784 16.2073 34.7258 16.1914 34.6665 16.1914H30.0557V27.0247H31.544C31.7098 27.0247 31.8687 27.0906 31.9859 27.2078C32.1031 27.325 32.169 27.484 32.169 27.6497C32.169 27.8155 32.1031 27.9745 31.9859 28.0917C31.8687 28.2089 31.7098 28.2747 31.544 28.2747H29.4307C29.2649 28.2747 29.1059 28.2089 28.9887 28.0917C28.8715 27.9745 28.8057 27.8155 28.8057 27.6497V15.5664C28.8057 15.4006 28.8715 15.2417 28.9887 15.1245C29.1059 15.0073 29.2649 14.9414 29.4307 14.9414H34.6665C34.9485 14.9413 35.2253 15.0164 35.4685 15.1591C35.7117 15.3018 35.9124 15.5069 36.0498 15.7531L39.4323 21.8197C39.7539 22.3972 39.9228 23.0471 39.9232 23.7081V27.1997C39.9227 27.484 39.8096 27.7566 39.6085 27.9576C39.4075 28.1587 39.135 28.2718 38.8507 28.2722Z" fill="#1C1B1B"/>
    <path d="M13.4859 28.2715H7.49341C7.32765 28.2715 7.16868 28.2057 7.05147 28.0885C6.93426 27.9712 6.86841 27.8123 6.86841 27.6465V22.8398C6.86841 22.6741 6.93426 22.5151 7.05147 22.3979C7.16868 22.2807 7.32765 22.2148 7.49341 22.2148C7.65917 22.2148 7.81814 22.2807 7.93535 22.3979C8.05256 22.5151 8.11841 22.6741 8.11841 22.8398V27.0215H13.4859C13.6517 27.0215 13.8106 27.0874 13.9278 27.2046C14.0451 27.3218 14.1109 27.4807 14.1109 27.6465C14.1109 27.8123 14.0451 27.9712 13.9278 28.0885C13.8106 28.2057 13.6517 28.2715 13.4859 28.2715Z" fill="#1C1B1B"/>
    <path d="M7.49341 20.6224C7.32765 20.6224 7.16868 20.5566 7.05147 20.4394C6.93426 20.3222 6.86841 20.1632 6.86841 19.9974V15.8008C6.86841 15.635 6.93426 15.476 7.05147 15.3588C7.16868 15.2416 7.32765 15.1758 7.49341 15.1758C7.65917 15.1758 7.81814 15.2416 7.93535 15.3588C8.05256 15.476 8.11841 15.635 8.11841 15.8008V19.9999C8.11775 20.1653 8.05161 20.3236 7.93447 20.4403C7.81733 20.5569 7.65874 20.6224 7.49341 20.6224Z" fill="#1C1B1B"/>
    <path d="M29.4307 28.2708H19.0832C18.9174 28.2708 18.7584 28.2049 18.6412 28.0877C18.524 27.9705 18.4582 27.8115 18.4582 27.6458C18.4582 27.48 18.524 27.321 18.6412 27.2038C18.7584 27.0866 18.9174 27.0208 19.0832 27.0208H28.8057V10.6699H8.11816V13.2441C8.11816 13.4098 8.05232 13.5688 7.93511 13.686C7.8179 13.8032 7.65892 13.8691 7.49316 13.8691C7.3274 13.8691 7.16843 13.8032 7.05122 13.686C6.93401 13.5688 6.86816 13.4098 6.86816 13.2441V10.5549C6.86861 10.2539 6.98844 9.96533 7.20138 9.75255C7.41432 9.53977 7.70297 9.42014 8.004 9.41992H28.9207C29.2216 9.42036 29.51 9.54008 29.7227 9.75284C29.9355 9.9656 30.0552 10.254 30.0557 10.5549V27.6458C30.0557 27.8115 29.9898 27.9705 29.8726 28.0877C29.7554 28.2049 29.5964 28.2708 29.4307 28.2708Z" fill="#1C1B1B"/>
    <path d="M9.96375 23.4648H2.03125C1.86549 23.4648 1.70652 23.399 1.58931 23.2818C1.4721 23.1646 1.40625 23.0056 1.40625 22.8398C1.40625 22.6741 1.4721 22.5151 1.58931 22.3979C1.70652 22.2807 1.86549 22.2148 2.03125 22.2148H9.96375C10.1295 22.2148 10.2885 22.2807 10.4057 22.3979C10.5229 22.5151 10.5887 22.6741 10.5887 22.8398C10.5887 23.0056 10.5229 23.1646 10.4057 23.2818C10.2885 23.399 10.1295 23.4648 9.96375 23.4648Z" fill="#1C1B1B"/>
    <path d="M16.285 20.623H5.21582C5.05006 20.623 4.89109 20.5572 4.77388 20.44C4.65667 20.3228 4.59082 20.1638 4.59082 19.998C4.59082 19.8323 4.65667 19.6733 4.77388 19.5561C4.89109 19.4389 5.05006 19.373 5.21582 19.373H16.285C16.4507 19.373 16.6097 19.4389 16.7269 19.5561C16.8441 19.6733 16.91 19.8323 16.91 19.998C16.91 20.1638 16.8441 20.3228 16.7269 20.44C16.6097 20.5572 16.4507 20.623 16.285 20.623Z" fill="#1C1B1B"/>
    <path d="M4.87133 17.3223H0.548828C0.383068 17.3223 0.224097 17.2564 0.106886 17.1392C-0.0103239 17.022 -0.0761719 16.863 -0.0761719 16.6973C-0.0761719 16.5315 -0.0103239 16.3725 0.106886 16.2553C0.224097 16.1381 0.383068 16.0723 0.548828 16.0723H4.87133C5.03709 16.0723 5.19606 16.1381 5.31327 16.2553C5.43048 16.3725 5.49633 16.5315 5.49633 16.6973C5.49633 16.863 5.43048 17.022 5.31327 17.1392C5.19606 17.2564 5.03709 17.3223 4.87133 17.3223Z" fill="#1C1B1B"/>
    <path d="M11.8029 13.8691H4.17285C4.00709 13.8691 3.84812 13.8033 3.73091 13.6861C3.6137 13.5689 3.54785 13.4099 3.54785 13.2441C3.54785 13.0784 3.6137 12.9194 3.73091 12.8022C3.84812 12.685 4.00709 12.6191 4.17285 12.6191H11.8029C11.9686 12.6191 12.1276 12.685 12.2448 12.8022C12.362 12.9194 12.4279 13.0784 12.4279 13.2441C12.4279 13.4099 12.362 13.5689 12.2448 13.6861C12.1276 13.8033 11.9686 13.8691 11.8029 13.8691Z" fill="#1C1B1B"/>
    </g>
    <defs>
    <clipPath id="clip0_256_434">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `

    let country = 'US'

    if (
        Shopify.country === 'US'
        || Shopify.country === 'UK'
        || Shopify.country === 'CA'
    ) {
        country = Shopify.country
    }

    return /*html*/`
        <div class="free_shipping" data-name="Free delivery">
            ${truckSVG}
            <p>Free standard delivery<br>on order <b>over $50 in </b><span><img src="https://conversionratestore.github.io/projects/sparkpaws/img/${country}.svg" alt=""></span></p>
        </div>
        <div class="upsell_container ${isTwoImages ? ' two_images' : ''}" data-name="upsell section pdp">
            ${title}
            <div class="preview">
                ${images}
            </div>
            <p class="total_price"><span class="total_label">Total Price:</span><span class="total_standard_price">${totalStandardPrice}</span><span class="total_discount_price">${totalDiscountPrice}</span> <span class="total_regular_price">${totalRegularPrice}</span></p>
            <button class="add_btn" data-name="Add select to card">Add selected to card</button>
            <div class="upsell_items_wrap">
                ${upsellItemHTML}
            </div>            
        </div>
        ${msg}
    `
}

// CART ELEMENTS

// -------------------------------------
// FUNCTIONS
// -------------------------------------

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

// PDP FUNCTIONS

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
    if (document.querySelector('.total_standard_price') && document.querySelector('.cbb-frequently-bought-total-price-regular-price .money')) {
        document.querySelector('.total_standard_price').textContent = document.querySelector('.cbb-frequently-bought-total-price-regular-price .money').textContent
    }
    if (document.querySelector('.total_discount_price') && document.querySelector('.cbb-frequently-bought-total-price-sale-price .money')) {
        document.querySelector('.total_discount_price').textContent = document.querySelector('.cbb-frequently-bought-total-price-sale-price .money').textContent
    }
    if (document.querySelector('.total_regular_price') && document.querySelector('.cbb-frequently-bought-total-price-was-price .money')) {
        document.querySelector('.total_regular_price').textContent = document.querySelector('.cbb-frequently-bought-total-price-was-price .money').textContent
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

            document.querySelectorAll('.custom_checkbox').forEach((checkbox, index) => {
                checkbox.addEventListener('click', () => {
                    checkbox.classList.toggle('checked')

                    const previewImg = document.querySelectorAll('.preview img')[index]
                    if (!checkbox.classList.contains('checked') && !previewImg.classList.contains('blur_img')) {
                        previewImg.classList.add('blur_img')
                        document.querySelector('.msg')?.classList.add('active')
                    } else if (checkbox.classList.contains('checked')) {
                        previewImg.classList.remove('blur_img')
                        document.querySelector('.msg')?.classList.remove('active')
                    }

                    document.querySelectorAll('.cbb-frequently-bought-selector-input')[index].click()
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

            document.querySelectorAll('.custom_select').forEach((select, index) => {
                // Get the necessary elements
                const selectField = select.querySelector('.select_field')
                const options = select.querySelectorAll('.options li')
                const value = select.querySelector('.value')

                // Show/hide the options list when the select field is clicked
                selectField.addEventListener('click', () => {
                    select.classList.toggle('active')

                    sendGAEvent('Click on size choose pdp', select.closest('.upsell_item_info').querySelector('.upsell_item_name').textContent)

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

                        sendGAEvent('Click on size dropdown pdp', option.textContent)

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

// CART FUNCTIONS

const getProduct = async (handle) => {
    const response = await fetch(`/products/${handle}.js`)
    if (!response.ok) throw new Error(`Failed to get product ${handle}. ${response.status} ${response.statusText}`)
    const product = await response.json()
    return product
}

const getCart = async () => {
    const response = await fetch('/cart.json')
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
        return arr.some(obj => obj.handle == customHandle)
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
                    sendGAEvent(`Click on size choose ${isExpandedCart ? 'cart' : 'slider cart'}`, select.closest('.item').querySelector('.info_title').textContent)

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

                        sendGAEvent(`Click on size dropdown ${isExpandedCart ? 'cart' : 'slider cart'}`, option.textContent)

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

        let expandedPosition = isExpandedCart && DEVICE === 'desktop' ? 'up' : 'down'

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

    const productsWrap = `
        <div class="upsells_container" data-name="upsell section ${isExpandedCart ? 'cart' : 'slider cart'}">
            <p class="upsells_title">Frequently bought together</p>
            ${upsells.map(upsellHTML).join('')}
        </div>
        `

    if (isExpandedCart) {
        document.querySelector('.Cart--expanded .Cart__ItemList')?.insertAdjacentHTML('afterend', productsWrap)
    } else {
        document.querySelector('#sidebar-cart .Drawer__Main')?.insertAdjacentHTML('beforeend', productsWrap)
    }

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
                if (addedNode.classList && addedNode.classList.contains('Cart') && !document.querySelector('.Cart__Empty')) {
                    observer.disconnect()
                    console.log('observer....')
                    await callback()
                    observer.observe(targetNode, config)
                }
            })
        })
    })
    const config = { childList: true, subtree: true }
    observer.observe(targetNode, config)
}

const main = async () => {
    try {
        if (
            document.querySelector('.CartItem__Title.Heading a')?.href.includes(lastCartItemHandle)
            && document.querySelectorAll('.Cart__ItemList .CartItem').length === cartItemsLength
            && cachedUpsellData
        ) {
            console.log('%c Using CASHED upsell data', 'color: green')
            // Render the cached data
            addUpsellsToCart(cachedUpsellData)
        } else {
            console.log('%c FETCH NEW the suggested products', 'color: green')

            const cart = await getCart()
            const handle = cart.items[0].handle

            const filteredArr = matchingProductHandles.filter((subArr) => subArr.includes(handle)).flatMap((subArr) => subArr.filter((val) => val !== handle))
            const uniqueArr = [...new Set(filteredArr)]

            if (uniqueArr.length) {
                const products = await Promise.all(uniqueArr.map(getProduct))

                addUpsellsToCart(products, cart.items)

                // Update the cached data
                cachedUpsellData = products
                lastCartItemHandle = handle
                cartItemsLength = cart.items.length

                if (document.querySelector('.upsells_title')) {
                    document.querySelector('.upsells_title.hide')?.classList.remove('hide')

                    if (document.querySelectorAll('.item')[uniqueArr.length - 1]?.getAttribute('hidden') === 'true') {
                        document.querySelector('.upsells_title').classList.add('hide')
                    } else {
                        document.querySelector('.upsells_title').classList.remove('hide')
                    }
                }
            } else {
                console.log('There are not suggestions for this product.')
            }
        }

        console.log("All requests have been made.")
    } catch (error) {
        console.error(error)
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

            waitForElement('.add_btn').then(btn => {
                checkVisibilityAfterMs(btn)

                btn.addEventListener('click', () => {
                    document.querySelector('.cbb-frequently-bought-add-button').click()
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

observeCartNodes(main)

sendGAEvent('loaded')