// -------------------------------------
// CONSTANTS
// -------------------------------------
const DEVICE = screen.width < 768 ? 'mobile' : 'desktop'
const WAIT_INTERVAL_TIMEOUT = 100

const style = /*html*/`
    <style>

        /* new code */

        .Cart .Drawer__Main {
          background-color: #fff !important;
        }

        #sidebar-cart .Drawer__Header--bordered {
          box-shadow: none;
        }

        .Drawer__Footer {
          display: none;
        }

        .save_code {
          background: #F0F4F5;
          padding: 7px;
          text-align: center;
        }

        .save_code p {
          font-weight: 600;
          font-size: 11px;
          line-height: 14px;
          font-family: "SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          color: #1C1B1B;
        }

        .save_code span {
          color: #3CBE1A;
        }

        /* progress bar */
        .progress_wrapper {
      background: #F0F4F5;
      border-top: 1px solid #E7E7E7;
      padding: 12px 30px;
    }

    .progress_wrapper p,
    .progress_wrapper span {
      margin: 0;
      font-family: "SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .max_total {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 5px;
    }

    .max_total span {
      font-weight: 600;
      font-size: 11px;
      line-height: 13px;
      color: #3CBE1A;
      min-height: 13px;
    }

    .line {
      width: 100%;
      height: 3px;
      background: #E7E7E7;
      border-radius: 100px;
    }

    .filled_line {
      position: relative;
      background: #3CBE1A;
      height: 100%;
      max-width: 100%;
      border-radius: 100px;
    }

    .filled_line::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      display: block;
      width: 7px;
      height: 7px;
      background: #3CBE1A;
      border-radius: 50%;
    }

    .filled_line span {
      position: absolute;
      bottom: 9px;
      right: 0;
      transform: translateX(55%);
      font-size: 11px;
      line-height: 13px;
      color: #5C5555;
    }

    .progress_shipping {
      text-align: center;
      margin-top: 11px;
      min-height: 16px;
    }

    .progress_wrapper .free_shipping,
    .progress_wrapper .paid_shipping {
      display: none;
    }

    .progress_wrapper .free_shipping.show_shipping_txt {
      display: flex;
    }

    .progress_wrapper .paid_shipping.show_shipping_txt {
      display: block;
    }

    .free_shipping {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .free_shipping p,
    .paid_shipping {
      font-size: 11px;
      line-height: 14px;
      color: #5C5555;
      font-weight: 400;
    }

    .free_shipping p {
      font-weight: 600;
      margin-left: 6px;
    }

    .paid_shipping span {
      font-weight: 700;
    }


        /* checkout footer */

    .checkout_footer {
      padding: 14px 30px;
      border-top: 1px solid #E7E7E7;
    }

    .checkout_footer p,
    .checkout_footer span {
      font-family: "SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      margin: 0;
    }

    .checkout_footer .save_code {
      margin-bottom: 20px;
    }

    .checkout_footer .total {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .checkout_footer .total p {
      font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #1C1B1B;
    }

    .checkout_footer .icons {
      display: flex;
      padding: 0 20px;
    }

    .checkout_footer .icons>div {
      display: flex;
      align-items: center;
    }

    .checkout_footer .icons svg {
      margin-right: 8px;
      flex-shrink: 0;
    }

    .PageContainer .checkout_footer {
      height: fit-content;
      border: 1px solid #E7E7E7;
    }

    .PageContainer .checkout_footer .icons {
      border-top: 1px solid #E7E7E7;
      margin-top: 20px;
      padding: 14px 14px 0;
    }

    .separator_line {
      margin: 3px 24px;
      width: 1px;
      background-color: #E7E7E7;
    }

    .checkout_footer .icons p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #5C5555;
    }

    .checkout_btn {
      margin: 14px 0;
      padding: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #344D79;
      cursor: pointer;
    }

    .checkout_footer .Button__SeparatorDot {
      margin: 0 18px;
      background: #fff;
    }

    .checkout_btn span:not(.Button__SeparatorDot) {

      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 13px;

      letter-spacing: 2.2px;
      text-transform: uppercase;

      color: #FFFFFF;
    }

    .discount_code {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #344D79;
    }

        /* old code */
        
        .upsells_container p, 
        .upsells_container a, 
        .upsells_container span, 
        .upsells_container li {
          font-family: "SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

        .upsells_container.one_upsell .item:last-child {
          display: none;
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

        .info_top a {
          margin-bottom: 4px;
        }

        .Cart .add_btn {
            border: 1px solid #344D79;
            padding: 9px;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 2.2px;
            text-transform: uppercase;
            color: #344D79;
            min-width: 124px;
            
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

        .Cart--expanded .Cart__Footer,
        .Cart__Head.hidden-phone,
            .below_add_to_cart,
            .CustomTrustBadge__Wrapper {
              display: none !important;
            }

            .Cart.Drawer__Content .Cart__ItemList {
              margin-left: -24px;
              margin-right: -18px;
            }

            .Cart.Drawer__Content .CartItemWrapper:first-child .CartItem{
              border: none;
            }

            .Cart.Drawer__Content .CartItemWrapper:last-child {
              padding-bottom: 17px;
            }

        .Cart.Drawer__Content .CartItem {
          margin: 17px 0 0 !important;
          border-top: 1px solid #E7E7E7;
          padding: 12px 18px 0 24px;
        }

        .Cart--expanded .CartItem {
          display: table !important;
        }

        .Cart--expanded .info .info_title {
          white-space:normal;
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

            /* new code */
            .PageContainer .PageContent {
              display: flex;
              justify-content: space-between;
            }

            .PageContainer .PageContent .checkout_footer {
              max-width: 37.5%;
              padding: 20px;
            }

            .Cart--expanded {
              max-width: 59.1% !important;
              width: 100%;
            }

            .Cart--expanded .CartItem__Info {
              max-width: none !important;
              width: auto !important;
            }
        }

        @media only screen and (max-width: 768px) {
            .Cart--expanded .custom_select .select_field {
                max-width: initial;
                width: 100%;
            }

            .free_shipping,
            .Cart--expanded .upsells_container {
                margin: 0 -24px;
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

            .Cart--expanded .CartItem {
              margin: 24px 0 !important;
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

            /* new code */
            .progress_wrapper,
            .checkout_footer {
              padding-left: 24px;
              padding-right: 24px;
            }

            .Cart .add_btn {
              padding: 9px;
              max-width: 166px;
              width: 100%;
            }

            .Cart--expanded .progress_wrapper {
              margin: 0 -24px;
            }

            .PageContainer .checkout_footer {
              border: none;
              padding: 0;
              margin-top: 18px;
              display: flex;
              flex-direction: column;
            }

            .PageContainer .checkout_footer .save_code {
              order: 0;
              display: none;
            }

            .PageContainer .checkout_footer .total {
              order: 1;
            }

            .PageContainer .checkout_footer .icons {
              order: 2;
              margin-top: 0;
              padding: 14px 0 0;
            }

            .PageContainer .checkout_footer .checkout_btn {
              order: 3;
            }

            .PageContainer .checkout_footer .discount_code {
              order: 4;
            }

            .Cart--expanded .save_code {
              display: none;
            }

            .PageContainer .save_code {
              margin: 0 -24px;
            }

            .PageContainer .info_wrap {
              display: block;
            }  
            
            .PageContainer .info_wrap>div:first-child {
              display: flex;
            }

            .PageContainer .info_wrap>div:first-child a {
              flex-shrink: 0;
            }

            .Cart.Drawer__Content .checkout_footer .icons {
              padding: 0;
            }

            .Cart.Drawer__Content .separator_line {
              margin: 3px 6px;
            }

            .Cart.Drawer__Content .CartItemWrapper:first-child .CartItem {
              margin-top: 0 !important;
            }
        }
    </style>
`

const hostname = location.hostname

let country

switch (hostname) {
  case 'www.sparkpaws.de':
    country = 'DE'
    break
  case 'www.sparkpaws.uk':
    country = 'GB'
    break
  case 'www.au-sparkpaws.com':
    country = 'AU'
    break
  case 'www.sparkpaws.ca':
    country = 'CA'
    break
  default:
    country = 'US'
    break
}

const getCurrencySymbol = () => {
  switch (country) {
    case 'GB':
      return '£'
    case 'DE':
      return '€'
    default:
      return '$'
  }
}

const getFreeShippingPerCountry = () => {
  switch (country) {
    case 'CA':
      return '$60.00'
    case 'GB':
      return '£40.00'
    case 'AU':
      return '$65.00'
    case 'DE':
      return '€50.00'
    default:
      return '$50.00'
  }
}

const translations = {
  'EN': [
    `<span>Save 10%</span> on your first order. CODE: <span>WELCOME10</span>`,
    `You’re only <span></span> away from unlocking <b>Free Shipping</b>`,
    `Discount code applied at checkout`,
    `30 Day Return & Exchange`,
    `Full Coverage Shipping Worldwide`,
    `(out of stock)`,
    `Add`,
    `Total:`,
    'Checkout',
  ],
  'DE': [
    `<span>Sparen Sie 10%</span> bei Ihrer ersten Bestellung. CODE: <span>WELCOME10</span>`,
    `Sie sind nur noch <span></span> entfernt, um <b>kostenlosen Versand</b> freizuschalten.`,
    `Rabattcode wird beim Bezahlen angewendet.`,
    `30-tägige Rückgabe & Umtauschmöglichkeit`,
    'Versand weltweit mit vollständiger Abdeckung',
    '(ausverkauft)',
    'Hinzufügen',
    'Gesamt:',
    'Zur Kasse'
  ]
}

let translatedText

if (country === 'DE') {
  translatedText = translations['DE']
} else {
  translatedText = translations['EN']
}

// CART CONSTANTS
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

  ['tactical-collar-and-leash-set-blue-lagoon',
    'comfort-control-no-pull-dog-harness-90s-retro'],

  ['tactical-dog-collar-with-handle-blue-lagoon',
    'comfort-control-neoprene-dog-leash-neon-tide',
    'poop-bag-holder-blue-lagoon'],

  ['comfort-control-no-pull-dog-harness-set-90s-retro',
    'tactical-dog-collar-with-handle-blue-lagoon'],

  ['comfort-control-no-pull-dog-harness-90s-retro',
    'comfort-control-neoprene-dog-leash-neon-tide',
    'poop-bag-holder-blue-lagoon'],

  ['tactical-collar-and-leash-set-pastel-rainbow',
    'comfort-control-no-pull-dog-harness-pastel-icing'],

  ['tactical-dog-collar-with-handle-pastel-sunset',
    'comfort-control-neoprene-dog-leash-pastel-sunset',
    'poop-bag-holder-pastel-sunset'],

  ['tactical-collar-and-leash-set-blueberry-blush',
    'comfort-control-no-pull-dog-harness-snow-cone'],

  ['tactical-dog-collar-with-handle-blueberry-blush',
    'comfort-control-neoprene-dog-leash-blueberry-blush',
    'poop-bag-holder-blueberry-blush'],

  ['tactical-collar-and-leash-set-neon-tide',
    'comfort-control-no-pull-dog-harness-lime-wave'],

  ['tactical-dog-collar-with-handle-neon-tide',
    'comfort-control-neoprene-dog-leash-blue-lagoon',
    'poop-bag-holder-neon-tide'],

  ['tactical-collar-and-leash-set-coral-reef',
    'comfort-control-no-pull-dog-harness-kaleidoscope'],

  ['tactical-dog-collar-with-handle-coral-reef',
    'comfort-control-neoprene-dog-leash-coral-reef',
    'poop-bag-holder-coral-reef'],

  ['tactical-dog-collar-set-black-2-5cm',
    'comfort-control-no-pull-dog-harness-black'],

  ['tactical-dog-collar-black-2-5cm',
    'neoprene-dog-leash-black',
    'poop-bag-holder-black'],

  ['tactical-dog-collar-1-5-3-8cm-and-leash-set-blueberry-blush',
    'comfort-control-no-pull-dog-harness-snow-cone'],

  ['tactical-dog-collar-1-5inch-4cm-2',
    'comfort-control-neoprene-dog-leash-blueberry-blush',
    'poop-bag-holder-blueberry-blush'],

  ['tactical-dog-collar-1-5-3-8cm-and-leash-set-green',
    'comfort-control-no-pull-dog-harness-army-green'],

  ['tactical-dog-collar-1-5inch-4cm-6',
    'neoprene-dog-leash-green',
    'poop-bag-holder-green'],

  ['tactical-dog-collar-1-5-3-8cm-and-leash-set-lilac',
    'comfort-control-no-pull-dog-harness-lilac'],

  ['tactical-dog-collar-1-5inch-4cm-7',
    'neoprene-dog-leash-lilac',
    'poop-bag-holder-lilac'],

  ['tactical-dog-collar-1-5-3-8cm-and-leash-set-pastel-sunset',
    'comfort-control-no-pull-dog-harness-pastel-icing'],

  ['tactical-dog-collar-1-5inch-4cm-3',
    'comfort-control-neoprene-dog-leash-pastel-sunset',
    'poop-bag-holder-pastel-sunset'],

  ['tactical-dog-collar-1-5-3-8cm-and-leash-set-neon-tide',
    'comfort-control-no-pull-dog-harness-lime-wave'],

  ['tactical-dog-collar-1-5inch-4cm-1',
    'comfort-control-neoprene-dog-leash-blue-lagoon',
    'poop-bag-holder-neon-tide'],

  ['tactical-dog-collar-1-5-3-8cm-and-leash-set-blue-lagoon',
    'tactical-dog-collar-with-handle-blue-lagoon'],

  ['tactical-dog-collar-1-5inch-4cm-4',
    'comfort-control-neoprene-dog-leash-neon-tide',
    'poop-bag-holder-blue-lagoon'],

  ['tactical-dog-collar-set-black-1-5-4cm',
    'comfort-control-no-pull-dog-harness-black'],

  ['tactical-dog-collars-black-1-5-4cm',
    'neoprene-dog-leash-black',
    'poop-bag-holder-black'],

  ['tactical-dog-collar-1-5-3-8cm-and-leash-set-coral-reef',
    'comfort-control-no-pull-dog-harness-kaleidoscope'],

  ['tactical-dog-collar-1-5inch-4cm-5',
    'comfort-control-neoprene-dog-leash-coral-reef',
    'poop-bag-holder-coral-reef'],

  ['comfort-control-no-pull-dog-harness-set-snow-cone',
    'tactical-dog-collar-with-handle-blueberry-blush'],

  ['comfort-control-no-pull-dog-harness-snow-cone',
    'comfort-control-neoprene-dog-leash-blueberry-blush',
    'poop-bag-holder-blueberry-blush'],

  ['comfort-control-no-pull-dog-harness-set-pastel-icing',
    'tactical-dog-collar-with-handle-pastel-sunset'],

  ['comfort-control-no-pull-dog-harness-pastel-icing',
    'comfort-control-neoprene-dog-leash-pastel-sunset',
    'poop-bag-holder-pastel-sunset'],

  ['comfort-control-no-pull-dog-harness-set-lime-wave',
    'tactical-dog-collar-with-handle-neon-tide'],

  ['comfort-control-no-pull-dog-harness-lime-wave',
    'comfort-control-neoprene-dog-leash-blue-lagoon',
    'poop-bag-holder-neon-tide'],

  ['comfort-control-no-pull-dog-harness-set-kaleidoscope',
    'tactical-dog-collar-with-handle-coral-reef'],

  ['comfort-control-no-pull-dog-harness-kaleidoscope',
    'comfort-control-neoprene-dog-leash-coral-reef',
    'poop-bag-holder-coral-reef'],

  ['comfort-control-no-pull-dog-harness-set-black',
    'tactical-dog-collar-black-2-5cm'],

  ['comfort-control-no-pull-dog-harness-black',
    'neoprene-dog-leash-black',
    'poop-bag-holder-black'],

  ['comfort-control-no-pull-dog-harness-set-army-green',
    'tactical-dog-collar-1-5inch-4cm-6'],

  ['comfort-control-no-pull-dog-harness-army-green',
    'neoprene-dog-leash-green',
    'poop-bag-holder-green'],

  ['comfort-control-no-pull-dog-harness-set-lilac',
    'tactical-collar-with-handle-lilac'],

  ['comfort-control-no-pull-dog-harness-lilac',
    'neoprene-dog-leash-lilac',
    'poop-bag-holder-lilac'],

  ['hot-pavement-dog-shoes-4pc-set-green',
    'dog-cooling-vest-ocean-breeze'],

  ['hot-pavement-dog-shoes-4pc-set-pink',
    'dog-cooling-vest-snow-cone'],

  ['hot-pavement-dog-shoes-4pc-set-turquoise',
    'dog-cooling-vest-zest'],

  ['hot-pavement-pawtector-dog-shoes-multi-color',
    'dog-cooling-vest-multi-color']
]
const customerFav = ['tactical-collar-and-leash-set-black',
  'comfort-control-no-pull-dog-harness-set-multi-color',
  'dog-cooling-vest-multi-color',
  'hot-pavement-pawtector-dog-shoes-multi-color',
  'teddy-sherpa-dog-jacket-dark-grey',
  'winter-dog-jacket-vest-black',
  'purple-teal-blush-black-color-block-dog-hoodie',
  'purple-teal-mango-black-color-block-human-hoodie-dog-matching',
  'black-olive-cream-dog-hoodie',
  'olive-cream-human-hoodie',
  'green-plaid-dog-hoodie',
  'green-plaid-human-dog-matching-hoodie',
  'dog-cooling-vest-snow-cone',
  'dog-cooling-vest-zest',
  'dog-cooling-vest-ocean-breeze',
  'hot-pavement-dog-shoes-4pc-set-turquoise',
  'hot-pavement-dog-shoes-4pc-set-pink',
  'hot-pavement-dog-shoes-4pc-set-green',
  'tactical-dog-collar-1-5-3-8cm-and-leash-set-multi-color',
  'blue-purple-sky-human-hoodie',
  'sky-dye-hoodie',
  'green-skydye-dog-hoodie',
  'cotton-candy-color-block-hoodie',
  'cotton-candy-human-hoodie',
  'pink-blue-sky-human-hoodie-matching',
  'pink-blue-sky-dye-dog-hoodie',
  'sherpa-dog-jacket-pink',
  'vintage-grey-sky-dye-dog-hoodie',
  'yellow-plaid-dog-hoodie',
  'yellow-plaid-human-dog-matching-hoodie',
  'yellow-navy-sky-dye-human-hoodie-matching',
  'yellow-navy-sky-dye-dog-hoodie',
  'pink-plaid-human-dog-matching-hoodie',
  'pink-plaid-dog-hoodie',
  'vintage-black-velvet-dog-hoodie',
  'vintage-black-velvet-human-hoodie',
  'pink-blue-cream-color-block-hoodie',
  'ear-protector-scarf-black',
  'dog-pajama-christmas-limited-edition',
  'dog-pajama-navy-turquoise-pink',
  'dog-pajama-yellow-blue-pink',
  'cuban-link-gold-dog-chain-collar',
  'initial-letter-jewelry-tags',
  'dog-pajama-purple-green-yellow',
  'dog-pajama-black-green-pink',
  'dog-pajama-cotton-candy',
  'copy-of-ear-protector-scarf-black',
  'dog-leg-warmer-socks',
  'pineapple-dog-knit-sweater',
  'woof-dog-hoodie-black',
  'athleisure-dog-harness-set-salt-and-pepper',
  'athleisure-dog-harness-set-salt-and-pepper',
  'athleisure-dog-harness-set-army-green-1',
  'athleisure-dog-harness-set-lilac',
  'lilac-cloud-knit-dog-sweater',
  'blue-cloud-knit-dog-sweater',
  'bear-knit-sweater',
  'cuban-link-gold-dog-leash',
  'comfort-control-no-pull-dog-harness-multi-color',
  'tactical-dog-collar-1-5inch-4cm']

const isExpandedCart = window.location.pathname === '/cart'

let lastCartItemHandle
let cartItemsLength

if (JSON.parse(sessionStorage.getItem('myCartItemsArray'))) {
  lastCartItemHandle = JSON.parse(sessionStorage.getItem('myCartItemsArray'))[0].handle
  cartItemsLength = JSON.parse(sessionStorage.getItem('myCartItemsArray')).length
}

// -------------------------------------
// HTML ELEMENTS
// -------------------------------------
const customSelectHTML = (options) => {
  let optionsHTML
  let firstAvailableIndex

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
          ${convertOptionTxt(option.title)}${option.available ? '' : ` ${translatedText[5]}`}
      </li>`
  }).join('')

  let inner

  let txt = options[firstAvailableIndex].text || options[firstAvailableIndex].title

  inner = `<p class="selected_option"><span class="value">${convertOptionTxt(txt)}</span></p>            
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path
                    d="M5.07892 3.86875L1.5432 0.15625L0.533203 1.21675L5.07892 5.98975L9.62465 1.21675L8.61465 0.156251L5.07892 3.86875Z"
                    fill="#5C5C5C" />
            </svg>`

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

const saveCode = /*html*/`
<div class="save_code">
<p>${translatedText[0]}</p>
</div>
`

const progressBar = /*html*/`
<div class="progress_wrapper">
    <div class="max_total">
      <span></span>
    </div>
    <div class="line">
      <div class="filled_line">
        <span></span>
      </div>
    </div>
    <div class="progress_shipping">
      <div class="free_shipping">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path
            d="M8.5 0C4.08892 0 0.5 3.58892 0.5 8C0.5 12.4111 4.08892 16 8.5 16C12.9111 16 16.5 12.4111 16.5 8C16.5 3.58892 12.9111 0 8.5 0ZM12.2547 5.93231L8.4401 10.5108C8.25467 10.7323 7.9839 10.8661 7.69672 10.8792C7.68195 10.8792 7.66718 10.8792 7.65241 10.8792C7.38082 10.8792 7.11826 10.7709 6.92626 10.5781L4.78308 8.43487C4.54267 8.19446 4.54267 7.80472 4.78308 7.56431C5.02349 7.3239 5.41323 7.3239 5.65364 7.56431L7.63928 9.54913L11.3103 5.1438C11.5285 4.88205 11.915 4.84759 12.1775 5.06503C12.4385 5.28246 12.4737 5.67056 12.2563 5.93149L12.2547 5.93231Z"
            fill="#3CBE1A" />
        </svg>
        <p>Congrats! You get 100% Free Shipping</p>
      </div>
      <p class="paid_shipping">${translatedText[1]}</p>
    </div>

  </div>
`

const checkoutFooter = (total, isCoupon) => /*html*/`
  <div class="checkout_footer">
    <div class="icons">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M21.5604 10.9995C21.5604 16.8222 16.8232 21.5595 11.0004 21.5595C5.17769 21.5595 0.44043 16.8222 0.44043 10.9995C0.44043 10.6347 0.73567 10.3395 1.10043 10.3395C1.46519 10.3395 1.76043 10.6347 1.76043 10.9995C1.76043 16.0944 5.90545 20.2395 11.0004 20.2395C16.0954 20.2395 20.2404 16.0944 20.2404 10.9995C20.2404 5.90447 16.0954 1.75945 11.0004 1.75945C8.54457 1.75945 6.26471 2.71403 4.54959 4.39945H7.04043C7.40519 4.39945 7.70043 4.69469 7.70043 5.05945C7.70043 5.42421 7.40519 5.71945 7.04043 5.71945H3.08043C2.71567 5.71945 2.42043 5.42421 2.42043 5.05945V1.09945C2.42043 0.734693 2.71567 0.439453 3.08043 0.439453C3.44519 0.439453 3.74043 0.734693 3.74043 1.09945V3.35093C5.68765 1.49237 8.24625 0.439453 11.0004 0.439453C16.8232 0.439453 21.5604 5.17671 21.5604 10.9995ZM16.9404 8.35945V14.2995C16.9404 14.5747 16.7697 14.8209 16.5125 14.9177L11.2325 16.8977C11.1577 16.9254 11.079 16.9395 11.0004 16.9395C10.9219 16.9395 10.8431 16.9254 10.7683 16.8977L5.48833 14.9177C5.23115 14.8209 5.06043 14.5747 5.06043 14.2995V8.35945C5.06043 8.08423 5.23115 7.83805 5.48833 7.74125L10.7683 5.76125C10.9179 5.70581 11.0829 5.70581 11.2323 5.76125L16.5123 7.74125C16.7697 7.83805 16.9404 8.08423 16.9404 8.35945ZM7.59989 8.35945L11.0004 9.63435L14.401 8.35945L11.0004 7.08455L7.59989 8.35945ZM6.38043 13.8419L10.3404 15.3269V10.7971L6.38043 9.31205V13.8419ZM15.6204 13.8419V9.31205L11.6604 10.7971V15.3269L15.6204 13.8419Z"
            fill="#5C5555" />
        </svg>
        <p>30 Day Return & Exchange</p>
      </div>
      <div class="separator_line"></div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <g clip-path="url(#clip0_1002_1253)">
            <path
              d="M16.6156 13.0791C15.0865 13.0791 13.8425 14.3231 13.8425 15.8522C13.8425 17.3813 15.0865 18.6253 16.6156 18.6253C18.145 18.6253 19.3888 17.3813 19.3888 15.8522C19.3888 14.3231 18.1448 13.0791 16.6156 13.0791ZM16.6156 17.2388C15.851 17.2388 15.2291 16.6169 15.2291 15.8522C15.2291 15.0875 15.851 14.4657 16.6156 14.4657C17.3803 14.4657 18.0022 15.0875 18.0022 15.8522C18.0022 16.6169 17.3803 17.2388 16.6156 17.2388Z"
              fill="#5C5555" />
            <path
              d="M7.1403 13.0791C5.61118 13.0791 4.36719 14.3231 4.36719 15.8522C4.36719 17.3813 5.61118 18.6253 7.1403 18.6253C8.66943 18.6253 9.91342 17.3813 9.91342 15.8522C9.91342 14.3231 8.66943 13.0791 7.1403 13.0791ZM7.1403 17.2388C6.37563 17.2388 5.75375 16.6169 5.75375 15.8522C5.75375 15.0875 6.37563 14.4657 7.1403 14.4657C7.90476 14.4657 8.52686 15.0875 8.52686 15.8522C8.52686 16.6169 7.90498 17.2388 7.1403 17.2388Z"
              fill="#5C5555" />
            <path
              d="M18.4827 5.14154C18.3649 4.90745 18.1252 4.75977 17.8632 4.75977H14.2119V6.14632H17.4356L19.3234 9.9011L20.5626 9.27806L18.4827 5.14154Z"
              fill="#5C5555" />
            <path d="M14.5358 15.1812H9.29004V16.5677H14.5358V15.1812Z" fill="#5C5555" />
            <path
              d="M5.06045 15.1812H2.65712C2.27419 15.1812 1.96387 15.4915 1.96387 15.8744C1.96387 16.2573 2.27423 16.5677 2.65712 16.5677H5.0605C5.44343 16.5677 5.75375 16.2573 5.75375 15.8744C5.75375 15.4915 5.44339 15.1812 5.06045 15.1812Z"
              fill="#5C5555" />
            <path
              d="M21.854 10.9451L20.4903 9.18879C20.3593 9.01962 20.1571 8.9207 19.9429 8.9207H14.905V4.06777C14.905 3.68483 14.5947 3.37451 14.2118 3.37451H2.65712C2.27419 3.37451 1.96387 3.68487 1.96387 4.06777C1.96387 4.45066 2.27423 4.76103 2.65712 4.76103H13.5185V9.61396C13.5185 9.9969 13.8288 10.3072 14.2117 10.3072H19.6034L20.613 11.6078V15.1833H18.6949C18.312 15.1833 18.0017 15.4936 18.0017 15.8765C18.0017 16.2595 18.312 16.5698 18.6949 16.5698H21.3062C21.6892 16.5698 21.9995 16.2594 21.9996 15.8765V11.3703C21.9996 11.2164 21.9482 11.0666 21.854 10.9451Z"
              fill="#5C5555" />
            <path
              d="M5.01517 11.6709H1.82607C1.44313 11.6709 1.13281 11.9813 1.13281 12.3642C1.13281 12.7471 1.44318 13.0574 1.82607 13.0574H5.01512C5.39806 13.0574 5.70838 12.7471 5.70838 12.3642C5.70843 11.9813 5.39806 11.6709 5.01517 11.6709Z"
              fill="#5C5555" />
            <path
              d="M6.60924 8.94434H0.693258C0.310363 8.94434 0 9.2547 0 9.63764C0 10.0206 0.310363 10.3309 0.693258 10.3309H6.60924C6.99218 10.3309 7.3025 10.0205 7.3025 9.63764C7.3025 9.25474 6.99218 8.94434 6.60924 8.94434Z"
              fill="#5C5555" />
            <path
              d="M7.74205 6.21729H1.82607C1.44313 6.21729 1.13281 6.52765 1.13281 6.91054C1.13281 7.29348 1.44318 7.6038 1.82607 7.6038H7.74205C8.12499 7.6038 8.43531 7.29344 8.43531 6.91054C8.43535 6.52765 8.12499 6.21729 7.74205 6.21729Z"
              fill="#5C5555" />
          </g>
          <defs>
            <clipPath id="clip0_1002_1253">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>${translatedText[4]}</p>
      </div>
    </div>
    <div class="checkout_btn">
      <span>${translatedText[8]}</span>
      <span class="Button__SeparatorDot"></span>
      <span>${total}</span>
    </div>
    ${isCoupon ? `<p class="discount_code">${translatedText[2]}</p>` : ''}
  </div>
`
const checkoutFooterCartPage = (isCoupon) => /*html*/`
  <div class="checkout_footer">
    ${localStorage.getItem('discount') === 'true' ? saveCode : ''}
    <div class="total">
      <p>${translatedText[7]}</p>
      <p></p>
    </div>
    <div class="checkout_btn">
      <span>${translatedText[8]}</span>
    </div>
    ${isCoupon ? `<p class="discount_code">${translatedText[2]}</p>` : ''}
    <div class="icons">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M21.5604 10.9995C21.5604 16.8222 16.8232 21.5595 11.0004 21.5595C5.17769 21.5595 0.44043 16.8222 0.44043 10.9995C0.44043 10.6347 0.73567 10.3395 1.10043 10.3395C1.46519 10.3395 1.76043 10.6347 1.76043 10.9995C1.76043 16.0944 5.90545 20.2395 11.0004 20.2395C16.0954 20.2395 20.2404 16.0944 20.2404 10.9995C20.2404 5.90447 16.0954 1.75945 11.0004 1.75945C8.54457 1.75945 6.26471 2.71403 4.54959 4.39945H7.04043C7.40519 4.39945 7.70043 4.69469 7.70043 5.05945C7.70043 5.42421 7.40519 5.71945 7.04043 5.71945H3.08043C2.71567 5.71945 2.42043 5.42421 2.42043 5.05945V1.09945C2.42043 0.734693 2.71567 0.439453 3.08043 0.439453C3.44519 0.439453 3.74043 0.734693 3.74043 1.09945V3.35093C5.68765 1.49237 8.24625 0.439453 11.0004 0.439453C16.8232 0.439453 21.5604 5.17671 21.5604 10.9995ZM16.9404 8.35945V14.2995C16.9404 14.5747 16.7697 14.8209 16.5125 14.9177L11.2325 16.8977C11.1577 16.9254 11.079 16.9395 11.0004 16.9395C10.9219 16.9395 10.8431 16.9254 10.7683 16.8977L5.48833 14.9177C5.23115 14.8209 5.06043 14.5747 5.06043 14.2995V8.35945C5.06043 8.08423 5.23115 7.83805 5.48833 7.74125L10.7683 5.76125C10.9179 5.70581 11.0829 5.70581 11.2323 5.76125L16.5123 7.74125C16.7697 7.83805 16.9404 8.08423 16.9404 8.35945ZM7.59989 8.35945L11.0004 9.63435L14.401 8.35945L11.0004 7.08455L7.59989 8.35945ZM6.38043 13.8419L10.3404 15.3269V10.7971L6.38043 9.31205V13.8419ZM15.6204 13.8419V9.31205L11.6604 10.7971V15.3269L15.6204 13.8419Z"
            fill="#5C5555" />
        </svg>
        <p>${translatedText[3]}</p>
      </div>
      <div class="separator_line"></div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <g clip-path="url(#clip0_1002_1253)">
            <path
              d="M16.6156 13.0791C15.0865 13.0791 13.8425 14.3231 13.8425 15.8522C13.8425 17.3813 15.0865 18.6253 16.6156 18.6253C18.145 18.6253 19.3888 17.3813 19.3888 15.8522C19.3888 14.3231 18.1448 13.0791 16.6156 13.0791ZM16.6156 17.2388C15.851 17.2388 15.2291 16.6169 15.2291 15.8522C15.2291 15.0875 15.851 14.4657 16.6156 14.4657C17.3803 14.4657 18.0022 15.0875 18.0022 15.8522C18.0022 16.6169 17.3803 17.2388 16.6156 17.2388Z"
              fill="#5C5555" />
            <path
              d="M7.1403 13.0791C5.61118 13.0791 4.36719 14.3231 4.36719 15.8522C4.36719 17.3813 5.61118 18.6253 7.1403 18.6253C8.66943 18.6253 9.91342 17.3813 9.91342 15.8522C9.91342 14.3231 8.66943 13.0791 7.1403 13.0791ZM7.1403 17.2388C6.37563 17.2388 5.75375 16.6169 5.75375 15.8522C5.75375 15.0875 6.37563 14.4657 7.1403 14.4657C7.90476 14.4657 8.52686 15.0875 8.52686 15.8522C8.52686 16.6169 7.90498 17.2388 7.1403 17.2388Z"
              fill="#5C5555" />
            <path
              d="M18.4827 5.14154C18.3649 4.90745 18.1252 4.75977 17.8632 4.75977H14.2119V6.14632H17.4356L19.3234 9.9011L20.5626 9.27806L18.4827 5.14154Z"
              fill="#5C5555" />
            <path d="M14.5358 15.1812H9.29004V16.5677H14.5358V15.1812Z" fill="#5C5555" />
            <path
              d="M5.06045 15.1812H2.65712C2.27419 15.1812 1.96387 15.4915 1.96387 15.8744C1.96387 16.2573 2.27423 16.5677 2.65712 16.5677H5.0605C5.44343 16.5677 5.75375 16.2573 5.75375 15.8744C5.75375 15.4915 5.44339 15.1812 5.06045 15.1812Z"
              fill="#5C5555" />
            <path
              d="M21.854 10.9451L20.4903 9.18879C20.3593 9.01962 20.1571 8.9207 19.9429 8.9207H14.905V4.06777C14.905 3.68483 14.5947 3.37451 14.2118 3.37451H2.65712C2.27419 3.37451 1.96387 3.68487 1.96387 4.06777C1.96387 4.45066 2.27423 4.76103 2.65712 4.76103H13.5185V9.61396C13.5185 9.9969 13.8288 10.3072 14.2117 10.3072H19.6034L20.613 11.6078V15.1833H18.6949C18.312 15.1833 18.0017 15.4936 18.0017 15.8765C18.0017 16.2595 18.312 16.5698 18.6949 16.5698H21.3062C21.6892 16.5698 21.9995 16.2594 21.9996 15.8765V11.3703C21.9996 11.2164 21.9482 11.0666 21.854 10.9451Z"
              fill="#5C5555" />
            <path
              d="M5.01517 11.6709H1.82607C1.44313 11.6709 1.13281 11.9813 1.13281 12.3642C1.13281 12.7471 1.44318 13.0574 1.82607 13.0574H5.01512C5.39806 13.0574 5.70838 12.7471 5.70838 12.3642C5.70843 11.9813 5.39806 11.6709 5.01517 11.6709Z"
              fill="#5C5555" />
            <path
              d="M6.60924 8.94434H0.693258C0.310363 8.94434 0 9.2547 0 9.63764C0 10.0206 0.310363 10.3309 0.693258 10.3309H6.60924C6.99218 10.3309 7.3025 10.0205 7.3025 9.63764C7.3025 9.25474 6.99218 8.94434 6.60924 8.94434Z"
              fill="#5C5555" />
            <path
              d="M7.74205 6.21729H1.82607C1.44313 6.21729 1.13281 6.52765 1.13281 6.91054C1.13281 7.29348 1.44318 7.6038 1.82607 7.6038H7.74205C8.12499 7.6038 8.43531 7.29344 8.43531 6.91054C8.43535 6.52765 8.12499 6.21729 7.74205 6.21729Z"
              fill="#5C5555" />
          </g>
          <defs>
            <clipPath id="clip0_1002_1253">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>${translatedText[4]}</p>
      </div>
    </div>
  </div>
`

// -------------------------------------
// FUNCTIONS
// -------------------------------------

function convertOptionTxt(optionTxt) {
  const parts = optionTxt.split(/ \/ | - /)
  const sizes = ["OS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"]

  if (parts.length === 2) {
    let txt

    // Check if the second part matches the "S (10-15lbs/4.5-7kg)" format
    const sizeRegEx = /^([A-Z]+) \(([\d.-]+)lbs\/([\d.-]+)kg\)$/
    const match = sizeRegEx.exec(parts[1])
    if (match !== null) {
      // If the second part matches the format, swap it with the first part and format it
      txt = `${match[1]} (${match[2]}lbs/${match[3]}kg), ${parts[0]}`
    } else {
      // If the second part doesn't match the format, check if either part matches a size and format accordingly
      sizes.forEach(size => {
        if (parts[0] === size) {
          txt = `${parts[0]}, ${parts[1]}`
        } else if (parts[1] === size) {
          txt = `${parts[1]}, ${parts[0]}`
        }
      })
    }

    if (txt) {
      return txt
    } else {
      return optionTxt
    }
  } else {
    return optionTxt
  }
}

const sendGAEvent = (eventAction, eventLabel = '') => { // Send a Google Analytics event
  const eventData = {
    event: 'event-to-ga',
    eventCategory: `Exp: New info at cart. ${DEVICE.charAt(0).toUpperCase() + DEVICE.slice(1)}`,
    eventAction,
    eventLabel,
  }

  window.dataLayer = window.dataLayer || []
  dataLayer.push(eventData)
  console.log(eventData)
}

let iconsWereVisible = false
let couponWasVisible = false
let paidWasVisible = false
let freeWasVisible = false
let discountWasVisible = false
let itemWasVisible = {}

const checkVisibilityAfterMs = (el) => { // Checks element visibility after a specified time. 
  let timer

  const config = {
    root: null,
    threshold: 0.6
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        timer = setTimeout(() => {
          if (el.classList.contains('icons')) {
            sendGAEvent('Visibility', '30 Day Return & Exchange')
            sendGAEvent('Visibility', 'Full Coverage Shipping Worldwide')

            iconsWereVisible = true
          }
          if (el.classList.contains('save_code')) {
            sendGAEvent('Visibility', 'Save 10% on your first order.')
            couponWasVisible = true
          }
          if (el.classList.contains('paid_shipping') && el.classList.contains('show_shipping_txt')) {
            sendGAEvent('Visibility', 'You’re only $23 away from unlocking Free Shipping')
            paidWasVisible = true
          }
          if (el.classList.contains('free_shipping') && el.classList.contains('show_shipping_txt')) {
            sendGAEvent('Visibility', 'Congrats! You get 100% Free Shipping')
            freeWasVisible = true
          }
          if (el.classList.contains('discount_code')) {
            sendGAEvent('Visibility', 'Discount code applied at checkout')
            discountWasVisible = true
          }
          if (el.classList.contains('info_title') && el.textContent.length > 0) {
            const itemName = el.textContent
            console.log(itemName)

            if (!(itemName in itemWasVisible)) {
              sendGAEvent('Visibility', itemName)
              itemWasVisible[itemName] = true
            }
          }

          observer.disconnect()
        }, 3000)
      } else {
        clearTimeout(timer)
      }
    })
  }, config)

  observer.observe(el)
}

function waitForElement(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }
    })

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    })
  })
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
    return `${getCurrencySymbol()}${formattedNumber}`
  } else {
    return ''
  }
}

const isHandleExists = (arr, customHandle) => {
  if (arr) {
    return arr.some(obj => obj.handle == customHandle)
  }
}

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
          sendGAEvent(`Click on size - ${selectField.querySelector('.selected_option .value').innerText}`, 'Size selection.')

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

            sendGAEvent(`Click on size - ${option.innerText}`, 'Size selection.')

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

    let upsellItem = ``

    if (isExpandedCart && DEVICE === 'desktop') {
      upsellItem = `
        <div class="item" ${isHandleExists(cartItems, item.handle) ? 'hidden="true"' : ''}>
            <div class="info_wrap">
                <a href="${item.url}"><img src="${item.featured_image}" alt=""></a>
                <div class="info">
                    <div class="info_top">
                    <a href="${item.url}"><p class="info_title">${item.title}</p></a>
                    <p style="margin: 8px 0 10px;">
                      <span class="item_price${isOldPrice ? ' green_price' : ''}" data-item-price="${item.price}">${formatPrice(item.price)}</span>
                      <span class="item_old_price" data-item-old-price="${item?.compare_at_price}">${isOldPrice ? formatPrice(item?.compare_at_price) : ''}</span>
                    </p>
                    </div>
                    ${customSelectHTML(item.variants)}               
                </div>
                <div class="info_bottom">
                  <button class="add_btn">${translatedText[6]}</button>
                </div>  
            </div>            
        </div>
        `
    } else if (isExpandedCart && DEVICE === 'mobile') {
      upsellItem = `
      <div class="item" ${isHandleExists(cartItems, item.handle) ? 'hidden="true"' : ''}>
          <div class="info_wrap">
              <div>
              <a href="${item.url}"><img src="${item.featured_image}" alt=""></a>
              <div class="info">
                  <div class="info_top">
                  <a href="${item.url}"><p class="info_title">${item.title}</p></a>
                  <p>
                    <span class="item_price${isOldPrice ? ' green_price' : ''}" data-item-price="${item.price}">${formatPrice(item.price)}</span>
                    <span class="item_old_price" data-item-old-price="${item?.compare_at_price}">${isOldPrice ? formatPrice(item?.compare_at_price) : ''}</span>
                  </p>
                  </div>
                  <div class="info_bottom">
                  <button class="add_btn">${translatedText[6]}</button>
                </div>     
              </div>  
              </div>             
              ${customSelectHTML(item.variants)}     
          </div>            
      </div>
      `
    } else {
      upsellItem = `
        <div class="item" ${isHandleExists(cartItems, item.handle) ? 'hidden="true"' : ''}>
            <div class="info_wrap">
                <a href="${item.url}"><img src="${item.featured_image}" alt=""></a>
                <div class="info">
                    <div class="info_top">
                    <a href="${item.url}"><p class="info_title">${item.title}</p></a>
                    <p>
                      <span class="item_price${isOldPrice ? ' green_price' : ''}" data-item-price="${item.price}">${formatPrice(item.price)}</span>
                      <span class="item_old_price" data-item-old-price="${item?.compare_at_price}">${isOldPrice ? formatPrice(item?.compare_at_price) : ''}</span>
                    </p>
                    </div>
                    <div class="info_bottom">
                        <button class="add_btn">${translatedText[6]}</button>
                    </div>                  
                </div>
            </div>
            ${customSelectHTML(item.variants)}
        </div>
        `
    }

    return upsellItem
  }

  const allUpsellsHTML = upsells.map(upsellHTML).join('')

  const productsWrap = `
        <div class="upsells_container" data-name="upsell section ${isExpandedCart ? 'cart' : 'slider cart'}">
            ${allUpsellsHTML}
        </div>
        `

  console.log('length!', upsells.length)

  const waitForEl = setInterval(() => {
    if (document.querySelectorAll('.upsells_container .item .info_title')[upsells.length - 1]) {
      clearInterval(waitForEl)

      for (const item of document.querySelectorAll('.upsells_container .item .info_title')) {
        checkVisibilityAfterMs(item)
      }
    }
  }, WAIT_INTERVAL_TIMEOUT)

  if (isExpandedCart) {
    document.querySelector('.Cart--expanded .Cart__ItemList')?.insertAdjacentHTML('afterend', productsWrap)
  } else {
    document.querySelector('#sidebar-cart .Drawer__Main')?.insertAdjacentHTML('beforeend', productsWrap)
  }

  setupCustomSelectCartLogic(upsells.length)
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
    return otherHandles
  }
}

const drawAndCacheUpsells = (products, cartItems, handle) => {
  waitForElement('.show_shipping_txt').then((el) => {
    let upsells = products

    // show only one upsell
    if (el.classList.contains('free_shipping')) {
      upsells = [products[0]]
    }

    addUpsellsToCart(upsells, cartItems)

    lastCartItemHandle = handle

    sessionStorage.setItem('myUpsellsArray', JSON.stringify(upsells))
    // cachedUpsellData = JSON.parse(sessionStorage.getItem('myUpsellsArray'))

    sessionStorage.setItem('myCartItemsArray', JSON.stringify(cartItems))
    // lastCartItems = JSON.parse(sessionStorage.getItem('myCartItemsArray'))

    cartItemsLength = JSON.parse(sessionStorage.getItem('myCartItemsArray')).length
  })
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
      console.log('%c GET CACHED products', 'color: green')

      addUpsellsToCart(JSON.parse(sessionStorage.getItem('myUpsellsArray')), JSON.parse(sessionStorage.getItem('myCartItemsArray')))
    } else {
      console.log('%c FETCH NEW the suggested products', 'color: green')

      const cart = await getCart()

      if (cart.items.length) {
        const handle = cart.items[0].handle
        const lastCartItemId = cart.items[0].product_id
        const uniqueArr = getOneRandomSubArr(handle)

        if (uniqueArr.length) {
          const products = await Promise.all(uniqueArr.map(getProduct))

          drawAndCacheUpsells(products, cart.items, handle)
        } else {
          try {
            const response = await fetch(`${window.Shopify.routes.root}recommendations/products.json?product_id=${lastCartItemId}&limit=2&intent=related`)
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            const { products } = await response.json()

            if (products.length > 0) {
              drawAndCacheUpsells(products, cart.items, handle)
            } else {
              const randomTwoItems = customerFav.sort(() => 0.5 - Math.random()).slice(0, 2)
              const products = await Promise.all(randomTwoItems.map(getProduct))
              drawAndCacheUpsells(products, cart.items, handle)
            }
          } catch (error) {
            console.error('Error:', error)
          }
        }
      }
    }
  } catch (error) {
    console.error(error)
  } finally {
    isRunning = false
  }

  // add discount coupon to the top of the cart
  if (localStorage.getItem('discount') === 'true' && !document.querySelector('.save_code')) {
    if (!isExpandedCart) {
      waitForElement('.Cart .Drawer__Main').then(el => {
        el.insertAdjacentHTML('beforebegin', saveCode)
      })
    } else if (isExpandedCart && DEVICE === 'mobile') {
      waitForElement('.Cart--expanded').then(el => {
        el.insertAdjacentHTML('beforebegin', saveCode)
      })
    }

    if (!couponWasVisible) {
      waitForElement('.save_code').then(el => checkVisibilityAfterMs(el))
    }
  }

  if (localStorage.getItem('discount') === 'true' && !discountWasVisible) {
    waitForElement('.discount_code').then(el => checkVisibilityAfterMs(el))
  }

  // add custom checkout footer
  if (isExpandedCart) {
    waitForElement('.Cart__Total span').then(el => {

      let totalPrice = el.innerText

      if (!document.querySelector('.checkout_footer')) {
        let isDiscount = localStorage.getItem('discount') === 'true'

        document.querySelector('.PageContainer .PageContent').insertAdjacentHTML('beforeend', checkoutFooterCartPage(isDiscount))

        waitForElement('.checkout_btn').then(el => {
          el.addEventListener('click', () => {
            let link = '/checkout'

            if (localStorage.getItem('discount') === 'true') {
              link = '/checkout?discount=WELCOME10'
              localStorage.setItem('discount', 'false')
            }

            sendGAEvent('Click on checkout button')
            window.location.href = link
          })
        })
      }

      waitForElement('.total p:last-child').then(el => el.innerText = totalPrice)
    })
  } else {
    waitForElement('.Cart__Checkout span:last-child').then(el => {
      let isDiscount = localStorage.getItem('discount') === 'true'

      document.querySelector('div.Drawer__Footer').insertAdjacentHTML('beforebegin', checkoutFooter(el.innerText, isDiscount))



      waitForElement('.checkout_btn').then(el => {
        el.addEventListener('click', () => {
          let link = '/checkout'

          if (localStorage.getItem('discount') === 'true') {
            link = '/checkout?discount=WELCOME10'
            localStorage.setItem('discount', 'false')
          }

          sendGAEvent('Click on checkout button')
          window.location.href = link
        })
      })
    })
  }

  if (!iconsWereVisible) {
    waitForElement('.checkout_footer .icons').then(el => checkVisibilityAfterMs(el))
  }

  // add progress bar
  let progressBarPosition = isExpandedCart ? '.Cart--expanded .Cart__ItemList' : '.Cart .Drawer__Container'

  waitForElement(progressBarPosition).then(el => el.insertAdjacentHTML('afterend', progressBar))
  const waitForProgressPrices = setInterval(() => {
    if (document.querySelector('.max_total span')
      && document.querySelector('.filled_line span')
      && document.querySelector('.paid_shipping span')
      && (document.querySelector('.checkout_btn span:last-child') || document.querySelector('.Cart__Total span'))
    ) {
      clearInterval(waitForProgressPrices)

      const currentValue = isExpandedCart ? document.querySelector('.Cart__Total span') : document.querySelector('.checkout_btn span:last-child')

      // update curr and total prices in the progress bar
      document.querySelector('.filled_line span').innerText = currentValue.textContent.replace(/[^0-9.]+$/, "")
      document.querySelector('.max_total span').innerText = getFreeShippingPerCountry()

      // remove non-numeric symbols 
      const totalPrice = getFreeShippingPerCountry().replace(/[^0-9.]/g, '')
      const currentValuePrice = +currentValue.textContent.replace(/[^0-9.]/g, '')

      // calc
      const percentage = (currentValuePrice / totalPrice) * 100
      const difference = (totalPrice - currentValuePrice).toFixed(2)

      // show txt below progress bar line
      document.querySelector('.show_shipping_txt')?.classList.remove('show_shipping_txt')
      if (difference <= 0) {
        document.querySelector('.free_shipping').classList.add('show_shipping_txt')

        if (!freeWasVisible) {
          waitForElement('.free_shipping').then(el => checkVisibilityAfterMs(el))
        }

      } else {
        document.querySelector('.paid_shipping').classList.add('show_shipping_txt')
        document.querySelector('.paid_shipping span').innerText = `${getCurrencySymbol()}${difference}`

        if (!paidWasVisible) {
          waitForElement('.paid_shipping').then(el => checkVisibilityAfterMs(el))
        }


        // // hide last upsell
        // document.querySelector('.upsells_container')?.classList.remove('one_upsell')
      }

      // change progress bar line percentage
      document.querySelector('.filled_line').style.width = `${percentage}% `

      // Check if the current progress value txt collides with the total value txt
      const currProgressValue = document.querySelector('.filled_line span')
      const elementRect = document.querySelector('.max_total span').getBoundingClientRect()
      const targetRect = currProgressValue.getBoundingClientRect()

      if (
        elementRect.right >= targetRect.left &&
        elementRect.left <= targetRect.right &&
        elementRect.bottom >= targetRect.top &&
        elementRect.top <= targetRect.bottom
      ) {
        currProgressValue.style.display = 'none'
      } else {
        currProgressValue.style.display = 'block'
      }
    }
  }, WAIT_INTERVAL_TIMEOUT)
}

// -------------------------------------
// MAKE DOM CHANGES
// -------------------------------------
document.head.insertAdjacentHTML('beforebegin', style)

// CART CHANGES
waitForElement(`${isExpandedCart ? '.PageContent' : '#sidebar-cart'} `).then(cart => {
  cart.addEventListener('click', async (e) => {
    if (e.target.className === 'add_btn') {
      e.preventDefault()

      const variantId = e.target.closest('.item').querySelector('.active_option').dataset.variantId
      const upsellName = e.target.closest('.item').querySelector('.info_title').innerText

      sendGAEvent(`Click on Add button`, `Upsell product - ${upsellName}`)

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

if (!localStorage.getItem('discount')) {
  waitForElement('[data-testid="POPUP"] .ql-font-verdana').then(el => {
    localStorage.setItem('discount', 'true')
  })
}

sendGAEvent('loaded')